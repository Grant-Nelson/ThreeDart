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
a[c]=function(){a[c]=function(){H.pt(b)}
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
if(w[u][a])return w[u][a]}}var C={},H={l2:function l2(){},
kx:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
hd:function(){return new P.c8("No element")},
nJ:function(){return new P.c8("Too many elements")},
nI:function(){return new P.c8("Too few elements")},
v:function v(a){this.a=a},
fU:function fU(){},
c1:function c1(){},
cC:function cC(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ht:function ht(a,b,c){this.a=a
this.b=b
this.$ti=c},
hu:function hu(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hv:function hv(a,b,c){this.a=a
this.b=b
this.$ti=c},
d3:function d3(a,b,c){this.a=a
this.b=b
this.$ti=c},
jo:function jo(a,b,c){this.a=a
this.b=b
this.$ti=c},
bY:function bY(){},
d1:function d1(){},
ej:function ej(){},
nz:function(){throw H.c(P.J("Cannot modify unmodifiable Map"))},
cm:function(a){var u,t=H.I(v.mangledGlobalNames[a])
if(typeof t==="string")return t
u="minified:"+a
return u},
p9:function(a){return v.types[H.ai(a)]},
pg:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iL},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.at(a)
if(typeof u!=="string")throw H.c(H.aC(a))
return u},
cL:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o3:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.h(p,3)
u=H.I(p[3])
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.b.F(s,q)|32)>t)return}return parseInt(a,b)},
c4:function(a){return H.nV(a)+H.ll(H.bR(a),0,null)},
nV:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibN){r=C.x(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cm(t.length>1&&C.b.F(t,0)===36?C.b.ao(t,1):t)},
nW:function(){if(!!self.location)return self.location.href
return},
m1:function(a){var u,t,s,r,q
H.kD(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o4:function(a){var u,t,s,r=H.d([],[P.p])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aC(s))
if(s<=65535)C.a.h(r,s)
else if(s<=1114111){C.a.h(r,55296+(C.f.aS(s-65536,10)&1023))
C.a.h(r,56320+(s&1023))}else throw H.c(H.aC(s))}return H.m1(r)},
m2:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aC(s))
if(s<0)throw H.c(H.aC(s))
if(s>65535)return H.o4(a)}return H.m1(a)},
o5:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aS(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o2:function(a){var u=H.c3(a).getFullYear()+0
return u},
o0:function(a){var u=H.c3(a).getMonth()+1
return u},
nX:function(a){var u=H.c3(a).getDate()+0
return u},
nY:function(a){var u=H.c3(a).getHours()+0
return u},
o_:function(a){var u=H.c3(a).getMinutes()+0
return u},
o1:function(a){var u=H.c3(a).getSeconds()+0
return u},
nZ:function(a){var u=H.c3(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.aC(a))},
h:function(a,b){if(a==null)J.aD(a)
throw H.c(H.cg(a,b))},
cg:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,s,null)
u=H.ai(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.a_(b,a,s,null,u)
return P.e_(b,s)},
p1:function(a,b,c){var u="Invalid value"
if(a>c)return new P.c6(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.c6(a,c,!0,b,"end",u)
return new P.aL(!0,b,"end",null)},
aC:function(a){return new P.aL(!0,a,null,null)},
oX:function(a){if(typeof a!=="number")throw H.c(H.aC(a))
return a},
c:function(a){var u
if(a==null)a=new P.dW()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mY})
u.name=""}else u.toString=H.mY
return u},
mY:function(){return J.at(this.dartException)},
t:function(a){throw H.c(a)},
D:function(a){throw H.c(P.bi(a))},
bc:function(a){var u,t,s,r,q,p
a=H.mX(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iM(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iN:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mc:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lX:function(a,b){return new H.hR(a,b==null?null:b.method)},
l3:function(a,b){var u=b==null,t=u?null:b.method
return new H.hg(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kS(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.f.aS(t,16)&8191)===10)switch(s){case 438:return f.$1(H.l3(H.l(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lX(H.l(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n1()
q=$.n2()
p=$.n3()
o=$.n4()
n=$.n7()
m=$.n8()
l=$.n6()
$.n5()
k=$.na()
j=$.n9()
i=r.ad(u)
if(i!=null)return f.$1(H.l3(H.I(u),i))
else{i=q.ad(u)
if(i!=null){i.method="call"
return f.$1(H.l3(H.I(u),i))}else{i=p.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=n.ad(u)
if(i==null){i=m.ad(u)
if(i==null){i=l.ad(u)
if(i==null){i=o.ad(u)
if(i==null){i=k.ad(u)
if(i==null){i=j.ad(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lX(H.I(u),i))}}return f.$1(new H.j_(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.e5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aL(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.e5()
return a},
ck:function(a){var u
if(a==null)return new H.eX(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eX(a)},
p5:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.n(0,a[u],a[t])}return b},
pf:function(a,b,c,d,e,f){H.f(a,"$ibE")
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
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pf)
a.$identity=u
return u},
ny:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l=null,k=b[0],j=k.$callName,i=e?Object.create(new H.io().constructor.prototype):Object.create(new H.cp(l,l,l,l).constructor.prototype)
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
s=k}if(typeof d=="number")r=function(h,a0){return function(){return h(a0)}}(H.p9,d)
else if(typeof d=="function")if(e)r=d
else{q=f?H.lI:H.kW
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
nv:function(a,b,c,d){var u=H.kW
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lJ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nv(t,!r,u,b)
if(t===0){r=$.aZ
if(typeof r!=="number")return r.q()
$.aZ=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cq
return new Function(r+H.l(q==null?$.cq=H.fB("self"):q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aZ
if(typeof r!=="number")return r.q()
$.aZ=r+1
o+=r
r="return function("+o+"){return this."
q=$.cq
return new Function(r+H.l(q==null?$.cq=H.fB("self"):q)+"."+H.l(u)+"("+o+");}")()},
nw:function(a,b,c,d){var u=H.kW,t=H.lI
switch(b?-1:a){case 0:throw H.c(H.o9("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nx:function(a,b){var u,t,s,r,q,p,o,n=$.cq
if(n==null)n=$.cq=H.fB("self")
u=$.lH
if(u==null)u=$.lH=H.fB("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nw(s,!q,t,b)
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
lp:function(a,b,c,d,e,f,g){return H.ny(a,b,H.ai(c),d,!!e,!!f,g)},
kW:function(a){return a.a},
lI:function(a){return a.c},
fB:function(a){var u,t,s,r=new H.cp("self","target","receiver","name"),q=J.l0(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
H:function(a){if(a==null)H.oT("boolean expression must not be null")
return a},
I:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aY(a,"String"))},
p2:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"double"))},
pl:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aY(a,"num"))},
lm:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aY(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aY(a,"int"))},
mV:function(a,b){throw H.c(H.aY(a,H.cm(H.I(b).substring(2))))},
pn:function(a,b){throw H.c(H.nu(a,H.cm(H.I(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.W(a)[b])return a
H.mV(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.pn(a,b)},
kD:function(a){if(a==null)return a
if(!!J.W(a).$ib)return a
throw H.c(H.aY(a,"List<dynamic>"))},
mS:function(a,b){var u
if(a==null)return a
u=J.W(a)
if(!!u.$ib)return a
if(u[b])return a
H.mV(a,b)},
mO:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
fl:function(a,b){var u
if(typeof a=="function")return!0
u=H.mO(J.W(a))
if(u==null)return!1
return H.mA(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.li)return a
$.li=!0
try{if(H.fl(a,b))return a
u=H.kN(b)
t=H.aY(a,u)
throw H.c(t)}finally{$.li=!1}},
lr:function(a,b){if(a!=null&&!H.lo(a,b))H.t(H.aY(a,H.kN(b)))
return a},
aY:function(a,b){return new H.iO("TypeError: "+P.dE(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
nu:function(a,b){return new H.fC("CastError: "+P.dE(a)+": type '"+H.mG(a)+"' is not a subtype of type '"+b+"'")},
mG:function(a){var u,t=J.W(a)
if(!!t.$ics){u=H.mO(t)
if(u!=null)return H.kN(u)
return"Closure"}return H.c4(a)},
oT:function(a){throw H.c(new H.jp(a))},
pt:function(a){throw H.c(new P.fM(H.I(a)))},
o9:function(a){return new H.i8(a)},
mP:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bR:function(a){if(a==null)return
return a.$ti},
qb:function(a,b,c){return H.cl(a["$a"+H.l(c)],H.bR(b))},
bQ:function(a,b,c,d){var u
H.I(c)
H.ai(d)
u=H.cl(a["$a"+H.l(c)],H.bR(b))
return u==null?null:u[d]},
as:function(a,b,c){var u
H.I(b)
H.ai(c)
u=H.cl(a["$a"+H.l(b)],H.bR(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ai(b)
u=H.bR(a)
return u==null?null:u[b]},
kN:function(a){return H.bP(a,null)},
bP:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cm(a[0].name)+H.ll(a,1,b)
if(typeof a=="function")return H.cm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.l(b[t])}if('func' in a)return H.oM(a,b)
if('futureOr' in a)return"FutureOr<"+H.bP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oM:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=", ",b=[P.e]
H.k(a0,"$ib",b,"$ab")
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],b)
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.h(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=c){p+=o
b=a0.length
n=b-q-1
if(n<0)return H.h(a0,n)
p=C.b.q(p,a0[n])
m=u[q]
if(m!=null&&m!==P.S)p+=" extends "+H.bP(m,a0)}p+=">"}else{p=""
t=null}l=!!a.v?"void":H.bP(a.ret,a0)
if("args" in a){k=a.args
for(b=k.length,j="",i="",h=0;h<b;++h,i=c){g=k[h]
j=j+i+H.bP(g,a0)}}else{j=""
i=""}if("opt" in a){f=a.opt
j+=i+"["
for(b=f.length,i="",h=0;h<b;++h,i=c){g=f[h]
j=j+i+H.bP(g,a0)}j+="]"}if("named" in a){e=a.named
j+=i+"{"
for(b=H.p4(e),n=b.length,i="",h=0;h<n;++h,i=c){d=H.I(b[h])
j=j+i+H.bP(e[d],a0)+(" "+H.l(d))}j+="}"}if(t!=null)a0.length=t
return p+"("+j+") => "+l},
ll:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.ag("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bP(p,c)}return"<"+u.i(0)+">"},
cl:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ln:function(a,b,c,d){var u,t
H.I(b)
H.kD(c)
H.I(d)
if(a==null)return!1
u=H.bR(a)
t=J.W(a)
if(t[b]==null)return!1
return H.mJ(H.cl(t[d],u),null,c,null)},
k:function(a,b,c,d){H.I(b)
H.kD(c)
H.I(d)
if(a==null)return a
if(H.ln(a,b,c,d))return a
throw H.c(H.aY(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cm(b.substring(2))+H.ll(c,0,null),v.mangledGlobalNames)))},
mJ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
q9:function(a,b,c){return a.apply(b,H.cl(J.W(b)["$a"+H.l(c)],H.bR(b)))},
mR:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="S"||a.name==="N"||a===-1||a===-2||H.mR(u)}return!1},
lo:function(a,b){var u,t
if(a==null)return b==null||b.name==="S"||b.name==="N"||b===-1||b===-2||H.mR(b)
if(b==null||b===-1||b.name==="S"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lo(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fl(a,b)}u=J.W(a).constructor
t=H.bR(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lo(a,b))throw H.c(H.aY(a,H.kN(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="S"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="S"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="N")return!0
if('func' in c)return H.mA(a,b,c,d)
if('func' in a)return c.name==="bE"
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
return H.mJ(H.cl(m,u),b,p,d)},
mA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pk(h,b,g,d)},
pk:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aK(c[s],d,a[s],b))return!1}return!0},
qa:function(a,b,c){Object.defineProperty(a,H.I(b),{value:c,enumerable:false,writable:true,configurable:true})},
pi:function(a){var u,t,s,r,q=H.I($.mQ.$1(a)),p=$.kw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.I($.mI.$2(a,q))
if(q!=null){p=$.kw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kB[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kM(u)
$.kw[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kB[q]=u
return u}if(s==="-"){r=H.kM(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mU(a,u)
if(s==="*")throw H.c(P.iZ(q))
if(v.leafTags[q]===true){r=H.kM(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mU(a,u)},
mU:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lt(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kM:function(a){return J.lt(a,!1,null,!!a.$iL)},
pj:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kM(u)
else return J.lt(u,c,null,null)},
pd:function(){if(!0===$.ls)return
$.ls=!0
H.pe()},
pe:function(){var u,t,s,r,q,p,o,n
$.kw=Object.create(null)
$.kB=Object.create(null)
H.pc()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mW.$1(q)
if(p!=null){o=H.pj(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pc:function(){var u,t,s,r,q,p,o=C.K()
o=H.ce(C.L,H.ce(C.M,H.ce(C.y,H.ce(C.y,H.ce(C.N,H.ce(C.O,H.ce(C.P(C.x),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mQ=new H.ky(r)
$.mI=new H.kz(q)
$.mW=new H.kA(p)},
ce:function(a,b){return a(b)||b},
nL:function(a,b,c,d){var u=b?"m":"",t=c?"":"i",s=d?"g":"",r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
pr:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
p3:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mX:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lw:function(a,b,c){var u=H.ps(a,b,c)
return u},
ps:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mX(b),'g'),H.p3(c))},
fG:function fG(){},
fH:function fH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iM:function iM(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hR:function hR(a,b){this.a=a
this.b=b},
hg:function hg(a,b,c){this.a=a
this.b=b
this.c=c},
j_:function j_(a){this.a=a},
kS:function kS(a){this.a=a},
eX:function eX(a){this.a=a
this.b=null},
cs:function cs(){},
iy:function iy(){},
io:function io(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iO:function iO(a){this.a=a},
fC:function fC(a){this.a=a},
i8:function i8(a){this.a=a},
jp:function jp(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hk:function hk(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hl:function hl(a,b){this.a=a
this.$ti=b},
hm:function hm(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
hf:function hf(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cc:function(a){return a},
nU:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cg(b,a))},
oK:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p1(a,b,c))
return b},
cG:function cG(){},
bJ:function bJ(){},
dS:function dS(){},
cH:function cH(){},
dT:function dT(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(){},
hM:function hM(){},
hN:function hN(){},
dU:function dU(){},
cI:function cI(){},
d8:function d8(){},
d9:function d9(){},
da:function da(){},
db:function db(){},
p4:function(a){return J.lQ(a?Object.keys(a):[],null)},
pm:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lt:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fn:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ls==null){H.pd()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iZ("Return interceptor for "+H.l(u(a,q))))}s=a.constructor
r=s==null?null:s[$.ly()]
if(r!=null)return r
r=H.pi(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.F
if(u===Object.prototype)return C.F
if(typeof s=="function"){Object.defineProperty(s,$.ly(),{value:C.v,enumerable:false,writable:true,configurable:true})
return C.v}return C.v},
nK:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kV(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.lQ(new Array(a),b)},
lQ:function(a,b){return J.l0(H.d(a,[b]))},
l0:function(a){H.kD(a)
a.fixed$length=Array
return a},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dH.prototype
return J.dG.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dI.prototype
if(typeof a=="boolean")return J.he.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fn(a)},
p6:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fn(a)},
ci:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fn(a)},
fm:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fn(a)},
p7:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bN.prototype
return a},
p8:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bN.prototype
return a},
dl:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bN.prototype
return a},
cj:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.S)return a
return J.fn(a)},
nj:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.p6(a).q(a,b)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).u(a,b)},
lA:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.p8(a).D(a,b)},
nk:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.p7(a).t(a,b)},
lB:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ci(a).j(a,b)},
kU:function(a,b,c){return J.fm(a).n(a,b,c)},
nl:function(a,b){return J.dl(a).F(a,b)},
nm:function(a,b,c){return J.cj(a).hW(a,b,c)},
nn:function(a,b,c,d){return J.cj(a).iT(a,b,c,d)},
no:function(a,b){return J.dl(a).a_(a,b)},
fp:function(a,b){return J.fm(a).J(a,b)},
np:function(a,b,c,d){return J.cj(a).jj(a,b,c,d)},
lC:function(a,b){return J.fm(a).M(a,b)},
nq:function(a){return J.cj(a).gj1(a)},
lD:function(a){return J.cj(a).gcm(a)},
dp:function(a){return J.W(a).gI(a)},
bx:function(a){return J.fm(a).gV(a)},
aD:function(a){return J.ci(a).gl(a)},
lE:function(a){return J.fm(a).jP(a)},
nr:function(a,b){return J.cj(a).jT(a,b)},
ns:function(a,b,c){return J.dl(a).B(a,b,c)},
nt:function(a){return J.dl(a).k6(a)},
at:function(a){return J.W(a).i(a)},
a:function a(){},
he:function he(){},
dI:function dI(){},
dJ:function dJ(){},
hV:function hV(){},
bN:function bN(){},
bm:function bm(){},
aO:function aO(a){this.$ti=a},
l1:function l1(a){this.$ti=a},
ax:function ax(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bG:function bG(){},
dH:function dH(){},
dG:function dG(){},
bl:function bl(){}},P={
om:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oU()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.cf(new P.jr(s),1)).observe(u,{childList:true})
return new P.jq(s,u,t)}else if(self.setImmediate!=null)return P.oV()
return P.oW()},
on:function(a){self.scheduleImmediate(H.cf(new P.js(H.n(a,{func:1,ret:-1})),0))},
oo:function(a){self.setImmediate(H.cf(new P.jt(H.n(a,{func:1,ret:-1})),0))},
op:function(a){P.l9(C.r,H.n(a,{func:1,ret:-1}))},
l9:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a6(a.a,1000)
return P.ov(u<0?0:u,b)},
mb:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.ba]})
u=C.f.a6(a.a,1000)
return P.ow(u<0?0:u,b)},
ov:function(a,b){var u=new P.f2()
u.fi(a,b)
return u},
ow:function(a,b){var u=new P.f2()
u.fj(a,b)
return u},
oq:function(a,b){var u,t,s
b.a=1
try{a.eE(new P.jD(b),new P.jE(b),null)}catch(s){u=H.aj(s)
t=H.ck(s)
P.po(new P.jF(b,u,t))}},
mp:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaJ")
if(u>=4){t=b.c3()
b.a=a.a
b.c=a.c
P.d6(b,t)}else{t=H.f(b.c,"$ibf")
b.a=2
b.c=a
a.dq(t)}},
d6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.f(g.c,"$ian")
g=g.b
r=s.a
q=s.b
g.toString
P.kn(i,i,g,r,q)}return}for(;p=b.a,p!=null;b=p){b.a=null
P.d6(h.a,b)}g=h.a
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
if(m){H.f(o,"$ian")
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
if(!!J.W(g).$icy){if(g.a>=4){k=H.f(q.c,"$ibf")
q.c=null
b=q.bj(k)
q.a=g.a
q.c=g.c
h.a=g
continue}else P.mp(g,q)
return}}j=b.b
k=H.f(j.c,"$ibf")
j.c=null
b=j.bj(k)
g=u.a
r=u.b
if(!g){H.A(r,H.u(j,0))
j.a=4
j.c=r}else{H.f(r,"$ian")
j.a=8
j.c=r}h.a=j
g=j}},
oP:function(a,b){if(H.fl(a,{func:1,args:[P.S,P.av]}))return H.n(a,{func:1,ret:null,args:[P.S,P.av]})
if(H.fl(a,{func:1,args:[P.S]}))return H.n(a,{func:1,ret:null,args:[P.S]})
throw H.c(P.kV(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oO:function(){var u,t
for(;u=$.cd,u!=null;){$.dk=null
t=u.b
$.cd=t
if(t==null)$.dj=null
u.a.$0()}},
oS:function(){$.lj=!0
try{P.oO()}finally{$.dk=null
$.lj=!1
if($.cd!=null)$.lz().$1(P.mK())}},
mF:function(a){var u=new P.ep(H.n(a,{func:1,ret:-1}))
if($.cd==null){$.cd=$.dj=u
if(!$.lj)$.lz().$1(P.mK())}else $.dj=$.dj.b=u},
oR:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cd
if(u==null){P.mF(a)
$.dk=$.dj
return}t=new P.ep(a)
s=$.dk
if(s==null){t.b=u
$.cd=$.dk=t}else{t.b=s.b
$.dk=s.b=t
if(t.b==null)$.dj=t}},
po:function(a){var u,t=null,s={func:1,ret:-1}
H.n(a,s)
u=$.a1
if(C.k===u){P.kp(t,t,C.k,a)
return}u.toString
P.kp(t,t,u,H.n(u.cg(a),s))},
ma:function(a,b){var u,t={func:1,ret:-1}
H.n(b,t)
u=$.a1
if(u===C.k){u.toString
return P.l9(a,b)}return P.l9(a,H.n(u.cg(b),t))},
od:function(a,b){var u,t,s={func:1,ret:-1,args:[P.ba]}
H.n(b,s)
u=$.a1
if(u===C.k){u.toString
return P.mb(a,b)}t=u.dG(b,P.ba)
$.a1.toString
return P.mb(a,H.n(t,s))},
kn:function(a,b,c,d,e){var u={}
u.a=d
P.oR(new P.ko(u,e))},
mB:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a1
if(t===c)return d.$0()
$.a1=c
u=t
try{t=d.$0()
return t}finally{$.a1=u}},
mC:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a1
if(t===c)return d.$1(e)
$.a1=c
u=t
try{t=d.$1(e)
return t}finally{$.a1=u}},
oQ:function(a,b,c,d,e,f,g,h,i){var u,t
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
if(u)d=!(!u||!1)?c.cg(d):c.j2(d,-1)
P.mF(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
f2:function f2(){this.c=0},
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
ep:function ep(a){this.a=a
this.b=null},
ir:function ir(){},
it:function it(a,b){this.a=a
this.b=b},
iu:function iu(a,b){this.a=a
this.b=b},
cP:function cP(){},
is:function is(){},
ba:function ba(){},
an:function an(a,b){this.a=a
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
nN:function(a,b){return new H.aP([a,b])},
l4:function(a,b){return new H.aP([a,b])},
nP:function(a){return H.p5(a,new H.aP([null,null]))},
dM:function(a){return new P.jO([a])},
lf:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
ou:function(a,b,c){var u=new P.eE(a,b,[c])
u.c=a.e
return u},
nH:function(a,b,c){var u,t
if(P.lk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
C.a.h($.aw,a)
try{P.oN(a,u)}finally{if(0>=$.aw.length)return H.h($.aw,-1)
$.aw.pop()}t=P.m8(b,H.mS(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
l_:function(a,b,c){var u,t
if(P.lk(a))return b+"..."+c
u=new P.ag(b)
C.a.h($.aw,a)
try{t=u
t.a=P.m8(t.a,a,", ")}finally{if(0>=$.aw.length)return H.h($.aw,-1)
$.aw.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lk:function(a){var u,t
for(u=$.aw.length,t=0;t<u;++t)if(a===$.aw[t])return!0
return!1},
oN:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.E())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.E()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.E()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.E();o=n,n=m){m=u.gL(u);++s
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
nO:function(a,b,c){var u=P.nN(b,c)
a.M(0,new P.hn(u,b,c))
return u},
lR:function(a,b){var u,t,s=P.dM(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t)s.h(0,H.A(a[t],b))
return s},
l5:function(a){var u,t={}
if(P.lk(a))return"{...}"
u=new P.ag("")
try{C.a.h($.aw,a)
u.a+="{"
t.a=!0
J.lC(a,new P.hr(t,u))
u.a+="}"}finally{if(0>=$.aw.length)return H.h($.aw,-1)
$.aw.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jO:function jO(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ca:function ca(a){this.a=a
this.c=this.b=null},
eE:function eE(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
ho:function ho(){},
z:function z(){},
hq:function hq(){},
hr:function hr(a,b){this.a=a
this.b=b},
ad:function ad(){},
k8:function k8(){},
hs:function hs(){},
ek:function ek(a,b){this.a=a
this.$ti=b},
jV:function jV(){},
eF:function eF(){},
f8:function f8(){},
oh:function(a,b,c,d){H.k(b,"$ib",[P.p],"$ab")
if(b instanceof Uint8Array)return P.oi(!1,b,c,d)
return},
oi:function(a,b,c,d){var u,t,s=$.nb()
if(s==null)return
u=0===c
if(u&&!0)return P.lc(s,b)
t=b.length
d=P.bp(c,d,t)
if(u&&d===t)return P.lc(s,b)
return P.lc(s,b.subarray(c,d))},
lc:function(a,b){if(P.ok(b))return
return P.ol(a,b)},
ol:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
ok:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oj:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
mE:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.p],"$ab")
for(u=J.ci(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bJ()
if((s&127)!==s)return t-b}return c-b},
lG:function(a,b,c,d,e,f){if(C.f.bb(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fy:function fy(){},
fz:function fz(){},
bV:function bV(){},
bB:function bB(){},
fW:function fW(){},
hb:function hb(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
ha:function ha(a){this.a=a},
j7:function j7(){},
j9:function j9(){},
ke:function ke(a){this.b=0
this.c=a},
j8:function j8(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
fo:function(a,b,c){var u
H.n(b,{func:1,ret:P.p,args:[P.e]})
u=H.o3(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nE:function(a){if(a instanceof H.cs)return a.i(0)
return"Instance of '"+H.c4(a)+"'"},
nQ:function(a,b,c){var u,t
H.A(b,c)
u=J.nK(a,c)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[c],"$ab")},
lS:function(a,b,c){var u,t=[c],s=H.d([],t)
for(u=J.bx(a);u.E();)C.a.h(s,H.A(u.gL(u),c))
if(b)return s
return H.k(J.l0(s),"$ib",t,"$ab")},
cQ:function(a,b,c){var u,t=P.p
H.k(a,"$ii",[t],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[t],"$aaO")
u=a.length
c=P.bp(b,c,u)
return H.m2(b>0||c<u?C.a.eT(a,b,c):a)}if(!!J.W(a).$icI)return H.o5(a,b,P.bp(b,c,a.length))
return P.ob(a,b,c)},
ob:function(a,b,c){var u,t,s,r,q=null
H.k(a,"$ii",[P.p],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aD(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aD(a),q,q))
t=J.bx(a)
for(s=0;s<b;++s)if(!t.E())throw H.c(P.af(b,0,s,q,q))
r=[]
if(u)for(;t.E();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.E())throw H.c(P.af(c,b,s,q,q))
r.push(t.gL(t))}return H.m2(r)},
o7:function(a){return new H.hf(a,H.nL(a,!1,!0,!1))},
m8:function(a,b,c){var u=J.bx(b)
if(!u.E())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.E())}else{a+=H.l(u.gL(u))
for(;u.E();)a=a+c+H.l(u.gL(u))}return a},
me:function(){var u=H.nW()
if(u!=null)return P.og(u)
throw H.c(P.J("'Uri.base' is not supported"))},
f9:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
H.k(a,"$ib",[P.p],"$ab")
if(c===C.l){u=$.nh().b
if(typeof b!=="string")H.t(H.aC(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.as(c,"bV",0))
t=c.gji().cn(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nA:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nB:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dA:function(a){if(a>=10)return""+a
return"0"+a},
lM:function(a,b){return new P.b1(1e6*b+1000*a)},
dE:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.at(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nE(a)},
dr:function(a){return new P.aL(!1,null,null,a)},
kV:function(a,b,c){return new P.aL(!0,a,b,c)},
e_:function(a,b){return new P.c6(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.c6(b,c,!0,a,d,"Invalid value")},
bp:function(a,b,c){if(0>a||a>c)throw H.c(P.af(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",null))
return b}return c},
l7:function(a,b){if(typeof a!=="number")return a.Y()
if(a<0)throw H.c(P.af(a,0,null,b,null))},
a_:function(a,b,c,d,e){var u=H.ai(e==null?J.aD(b):e)
return new P.hc(u,!0,a,c,"Index out of range")},
J:function(a){return new P.j0(a)},
iZ:function(a){return new P.iY(a)},
m7:function(a){return new P.c8(a)},
bi:function(a){return new P.fF(a)},
w:function(a){return new P.ex(a)},
a7:function(a,b,c){return new P.h5(a,b,c)},
nR:function(a,b,c){var u,t
H.n(b,{func:1,ret:c,args:[P.p]})
u=H.d([],[c])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
lv:function(a){H.pm(a)},
og:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.b.F(a,4)^58)*3|C.b.F(a,0)^100|C.b.F(a,1)^97|C.b.F(a,2)^116|C.b.F(a,3)^97)>>>0
if(u===0)return P.md(e<e?C.b.B(a,0,e):a,5,f).geJ()
else if(u===32)return P.md(C.b.B(a,5,e),0,f).geJ()}t=new Array(8)
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
if(P.mD(a,0,e,0,s)>=14)C.a.n(s,7,e)
r=s[1]
if(typeof r!=="number")return r.ke()
if(r>=0)if(P.mD(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.Y()
if(typeof n!=="number")return H.G(n)
if(m<n)n=m
if(typeof o!=="number")return o.Y()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.Y()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.Y()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.b.aa(a,"..",o)))j=n>o+2&&C.b.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.b.aa(a,"file",0)){if(q<=0){if(!C.b.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.b.B(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.b.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.b.aa(a,"http",0)){if(t&&p+3===o&&C.b.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.b.aa(a,"https",0)){if(t&&p+4===o&&C.b.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.b.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.b.B(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jY(a,r,q,p,o,n,m,k)}return P.ox(a,0,e,r,q,p,o,n,m,k)},
mg:function(a){var u=P.e
return C.a.jn(H.d(a.split("&"),[u]),P.l4(u,u),new P.j5(C.l),[P.F,P.e,P.e])},
of:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j2(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.b.a_(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.fo(C.b.B(a,s,t),n,n)
if(typeof p!=="number")return p.eP()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.h(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.fo(C.b.B(a,s,c),n,n)
if(typeof p!=="number")return p.eP()
if(p>255)k.$2(l,s)
if(r>=u)return H.h(j,r)
j[r]=p
return j},
mf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.j3(a)
t=new P.j4(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.p])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.b.a_(a,r)
if(n===58){if(r===b){++r
if(C.b.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaw(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.of(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.aS(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
ox:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oE(a,b,d)
else{if(d===b)P.dg(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oF(a,u,e-1):""
s=P.oB(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.oD(P.fo(C.b.B(a,r,g),new P.k9(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oC(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.Y()
o=h<i?P.lg(a,h+1,i,n):n
return new P.cb(j,t,s,q,p,o,i<c?P.oA(a,i+1,c):n)},
mt:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dg:function(a,b,c){throw H.c(P.a7(c,a,b))},
oD:function(a,b){if(a!=null&&a===P.mt(b))return
return a},
oB:function(a,b,c,d){var u,t
if(b===c)return""
if(C.b.a_(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.b.a_(a,u)!==93)P.dg(a,b,"Missing end `]` to match `[` in host")
P.mf(a,b+1,u)
return C.b.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.b.a_(a,t)===58){P.mf(a,b,c)
return"["+a+"]"}return P.oH(a,b,c)},
oH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.b.a_(a,u)
if(q===37){p=P.mz(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.ag("")
n=C.b.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.b.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.D,o)
o=(C.D[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.ag("")
if(t<u){s.a+=C.b.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.n,o)
o=(C.n[o]&1<<(q&15))!==0}else o=!1
if(o)P.dg(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.b.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.ag("")
n=C.b.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mu(q)
u+=l
t=u}}}}if(s==null)return C.b.B(a,b,c)
if(t<c){n=C.b.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oE:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mw(C.b.F(a,b)))P.dg(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.b.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.p,r)
r=(C.p[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dg(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.b.B(a,b,c)
return P.oy(t?a.toLowerCase():a)},
oy:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oF:function(a,b,c){return P.dh(a,b,c,C.a_,!1)},
oC:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.dh(a,b,c,C.E,!0):C.z.ki(d,new P.ka(),P.e).m(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.b.a5(u,"/"))u="/"+u
return P.oG(u,e,f)},
oG:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.b.a5(a,"/"))return P.oI(a,!u||c)
return P.oJ(a)},
lg:function(a,b,c,d){var u,t={}
H.k(d,"$iF",[P.e,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dr("Both query and queryParameters specified"))
return P.dh(a,b,c,C.o,!0)}if(d==null)return
u=new P.ag("")
t.a=""
d.M(0,new P.kb(new P.kc(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oA:function(a,b,c){return P.dh(a,b,c,C.o,!0)},
mz:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.b.a_(a,b+1)
t=C.b.a_(a,p)
s=H.kx(u)
r=H.kx(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.f.aS(q,4)
if(p>=8)return H.h(C.q,p)
p=(C.q[p]&1<<(q&15))!==0}else p=!1
if(p)return H.c5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.b.B(a,b,b+3).toUpperCase()
return},
mu:function(a){var u,t,s,r,q,p,o="0123456789ABCDEF"
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
for(q=0;--r,r>=0;s=128){p=C.f.ib(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.b.F(o,p>>>4))
C.a.n(t,q+2,C.b.F(o,p&15))
q+=3}}return P.cQ(t,0,null)},
dh:function(a,b,c,d,e){var u=P.my(a,b,c,H.k(d,"$ib",[P.p],"$ab"),e)
return u==null?C.b.B(a,b,c):u},
my:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.p],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Y()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.b.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mz(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.n,p)
p=(C.n[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dg(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.b.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mu(q)}}if(r==null)r=new P.ag("")
r.a+=C.b.B(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Y()
if(s<c)r.a+=C.b.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mx:function(a){if(C.b.a5(a,"."))return!0
return C.b.eb(a,"/.")!==-1},
oJ:function(a){var u,t,s,r,q,p,o
if(!P.mx(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.T(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oI:function(a,b){var u,t,s,r,q,p
if(!P.mx(a))return!b?P.mv(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaw(u)!==".."){if(0>=u.length)return H.h(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.h(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaw(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.h(u,0)
C.a.n(u,0,P.mv(u[0]))}return C.a.m(u,"/")},
mv:function(a){var u,t,s,r=a.length
if(r>=2&&P.mw(J.nl(a,0)))for(u=1;u<r;++u){t=C.b.F(a,u)
if(t===58)return C.b.B(a,0,u)+"%3A"+C.b.ao(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.h(C.p,s)
s=(C.p[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oz:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.b.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dr("Invalid URL encoding"))}}return u},
lh:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.b.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.l!==d)s=!1
else s=!0
if(s)return C.b.B(a,b,c)
else r=new H.v(C.b.B(a,b,c))}else{r=H.d([],[P.p])
for(s=a.length,q=b;q<c;++q){t=C.b.F(a,q)
if(t>127)throw H.c(P.dr("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.dr("Truncated URI"))
C.a.h(r,P.oz(a,q+1))
q+=2}else if(t===43)C.a.h(r,32)
else C.a.h(r,t)}}H.k(r,"$ib",[P.p],"$ab")
return new P.j8(!1).cn(r)},
mw:function(a){var u=a|32
return 97<=u&&u<=122},
md:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.p])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.b.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.a7(m,a,t))}}if(s<0&&t>b)throw H.c(P.a7(m,a,t))
for(;r!==44;){C.a.h(l,t);++t
for(q=-1;t<u;++t){r=C.b.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)C.a.h(l,q)
else{p=C.a.gaw(l)
if(r!==44||t!==p+7||!C.b.aa(a,"base64",p+1))throw H.c(P.a7("Expecting '='",a,t))
break}}C.a.h(l,t)
o=t+1
if((l.length&1)===1)a=C.J.jz(0,a,o,u)
else{n=P.my(a,o,u,C.o,!0)
if(n!=null)a=C.b.aW(a,o,u,n)}return new P.j1(a,l,c)},
oL:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nR(22,new P.kk(),P.U),n=new P.kj(o),m=new P.kl(),l=new P.km(),k=H.f(n.$2(0,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(14,225),"$iU")
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(15,225),"$iU")
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(1,225),"$iU")
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(2,235),"$iU")
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(3,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(4,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(5,229),"$iU")
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(6,231),"$iU")
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(7,231),"$iU")
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(H.f(n.$2(8,8),"$iU"),"]",5)
k=H.f(n.$2(9,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(16,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(17,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(10,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(18,235),"$iU")
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(19,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(11,235),"$iU")
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=H.f(n.$2(12,236),"$iU")
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=H.f(n.$2(13,237),"$iU")
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(H.f(n.$2(20,245),"$iU"),"az",21)
k=H.f(n.$2(21,245),"$iU")
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
mD:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.p],"$ab")
u=$.ni()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.b.F(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
V:function V(){},
ay:function ay(a,b){this.a=a
this.b=b},
r:function r(){},
b1:function b1(a){this.a=a},
fS:function fS(){},
fT:function fT(){},
bD:function bD(){},
fs:function fs(){},
dW:function dW(){},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hc:function hc(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j0:function j0(a){this.a=a},
iY:function iY(a){this.a=a},
c8:function c8(a){this.a=a},
fF:function fF(a){this.a=a},
hU:function hU(){},
e5:function e5(){},
fM:function fM(a){this.a=a},
ex:function ex(a){this.a=a},
h5:function h5(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
p:function p(){},
i:function i(){},
b2:function b2(){},
b:function b(){},
F:function F(){},
N:function N(){},
ac:function ac(){},
S:function S(){},
av:function av(){},
e:function e(){},
ag:function ag(a){this.a=a},
j5:function j5(a){this.a=a},
j2:function j2(a){this.a=a},
j3:function j3(a){this.a=a},
j4:function j4(a,b){this.a=a
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
j1:function j1(a,b,c){this.a=a
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
p_:function(a){var u,t=J.W(a)
if(!!t.$ibk){u=t.gdK(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.f7(a.data,a.height,a.width)},
oZ:function(a){if(a instanceof P.f7)return{data:a.a,height:a.b,width:a.c}
return a},
bq:function(a){var u,t,s,r,q
if(a==null)return
u=P.l4(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.I(t[r])
u.n(0,q,a[q])}return u},
oY:function(a){var u={}
a.M(0,new P.kq(u))
return u},
k_:function k_(){},
k1:function k1(a,b){this.a=a
this.b=b},
f7:function f7(a,b,c){this.a=a
this.b=b
this.c=c},
kq:function kq(a){this.a=a},
k0:function k0(a,b){this.a=a
this.b=b},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(){},
h3:function h3(){},
jN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ot:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jP:function jP(){},
am:function am(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hi:function hi(){},
b7:function b7(){},
hS:function hS(){},
hZ:function hZ(){},
cM:function cM(){},
iv:function iv(){},
q:function q(){},
bb:function bb(){},
iL:function iL(){},
eC:function eC(){},
eD:function eD(){},
eN:function eN(){},
eO:function eO(){},
eZ:function eZ(){},
f_:function f_(){},
f5:function f5(){},
f6:function f6(){},
U:function U(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
bS:function bS(){},
hT:function hT(){},
eq:function eq(){},
dt:function dt(){},
dZ:function dZ(){},
c7:function c7(){},
e2:function e2(){},
e9:function e9(){},
ei:function ei(){},
im:function im(){},
eV:function eV(){},
eW:function eW(){}},W={
lF:function(){var u=document.createElement("a")
return u},
kX:function(){var u=document.createElement("canvas")
return u},
nC:function(a,b,c){var u=document.body,t=(u&&C.w).ac(u,a,b,c)
t.toString
u=W.C
u=new H.d3(new W.ar(t),H.n(new W.fV(),{func:1,ret:P.V,args:[u]}),[u])
return H.f(u.gaM(u),"$iX")},
nD:function(a){H.f(a,"$ij")
return"wheel"},
cv:function(a){var u,t,s,r="element tag unavailable"
try{u=J.cj(a)
t=u.geB(a)
if(typeof t==="string")r=u.geB(a)}catch(s){H.aj(s)}return r},
nG:function(a){var u,t=document.createElement("input"),s=H.f(t,"$icB")
try{s.type=a}catch(u){H.aj(u)}return s},
jM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mr:function(a,b,c,d){var u=W.jM(W.jM(W.jM(W.jM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ab:function(a,b,c,d,e){var u=W.mH(new W.jB(c),W.o)
if(u!=null&&!0)J.nn(a,b,u,!1)
return new W.jA(a,b,u,!1,[e])},
mq:function(a){var u=W.lF(),t=window.location
u=new W.bO(new W.jU(u,t))
u.f7(a)
return u},
or:function(a,b,c,d){H.f(a,"$iX")
H.I(b)
H.I(c)
H.f(d,"$ibO")
return!0},
os:function(a,b,c,d){var u,t,s
H.f(a,"$iX")
H.I(b)
H.I(c)
u=H.f(d,"$ibO").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
ms:function(){var u=P.e,t=P.lR(C.t,u),s=H.u(C.t,0),r=H.n(new W.k5(),{func:1,ret:u,args:[s]}),q=H.d(["TEMPLATE"],[u])
t=new W.k4(t,P.dM(u),P.dM(u),P.dM(u),null)
t.fh(null,new H.hv(C.t,r,[s,u]),q,null)
return t},
mH:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a1
if(u===C.k)return a
return u.dG(a,b)},
y:function y(){},
fq:function fq(){},
dq:function dq(){},
fr:function fr(){},
co:function co(){},
bT:function bT(){},
by:function by(){},
bU:function bU(){},
cr:function cr(){},
bz:function bz(){},
ct:function ct(){},
fI:function fI(){},
Y:function Y(){},
cu:function cu(){},
fJ:function fJ(){},
b_:function b_(){},
b0:function b0(){},
fK:function fK(){},
fL:function fL(){},
fO:function fO(){},
aE:function aE(){},
fP:function fP(){},
dB:function dB(){},
dC:function dC(){},
fQ:function fQ(){},
fR:function fR(){},
jv:function jv(a,b){this.a=a
this.b=b},
X:function X(){},
fV:function fV(){},
o:function o(){},
j:function j(){},
aF:function aF(){},
cx:function cx(){},
h0:function h0(){},
h4:function h4(){},
aN:function aN(){},
h9:function h9(){},
bZ:function bZ(){},
bk:function bk(){},
cA:function cA(){},
cB:function cB(){},
b3:function b3(){},
dN:function dN(){},
hC:function hC(){},
cF:function cF(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
hF:function hF(){},
hG:function hG(a){this.a=a},
aQ:function aQ(){},
hH:function hH(){},
ae:function ae(){},
ar:function ar(a){this.a=a},
C:function C(){},
cJ:function cJ(){},
aR:function aR(){},
hX:function hX(){},
i6:function i6(){},
i7:function i7(a){this.a=a},
i9:function i9(){},
aS:function aS(){},
ik:function ik(){},
aT:function aT(){},
il:function il(){},
aU:function aU(){},
ip:function ip(){},
iq:function iq(a){this.a=a},
aG:function aG(){},
b9:function b9(){},
e7:function e7(){},
iw:function iw(){},
ix:function ix(){},
cR:function cR(){},
aV:function aV(){},
aH:function aH(){},
iz:function iz(){},
iA:function iA(){},
iF:function iF(){},
aW:function aW(){},
aX:function aX(){},
iJ:function iJ(){},
iK:function iK(){},
bM:function bM(){},
j6:function j6(){},
jm:function jm(){},
be:function be(){},
d4:function d4(){},
d5:function d5(){},
jw:function jw(){},
es:function es(){},
jL:function jL(){},
eK:function eK(){},
jZ:function jZ(){},
k2:function k2(){},
ju:function ju(){},
jy:function jy(a){this.a=a},
jz:function jz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
le:function le(a,b,c,d){var _=this
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
bO:function bO(a){this.a=a},
E:function E(){},
dV:function dV(a){this.a=a},
hP:function hP(a){this.a=a},
hO:function hO(a,b,c){this.a=a
this.b=b
this.c=c},
eS:function eS(){},
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
dF:function dF(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
aA:function aA(){},
jU:function jU(a,b){this.a=a
this.b=b},
fa:function fa(a){this.a=a},
kf:function kf(a){this.a=a},
er:function er(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eL:function eL(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
dc:function dc(){},
dd:function dd(){},
eT:function eT(){},
eU:function eU(){},
eY:function eY(){},
f0:function f0(){},
f1:function f1(){},
de:function de(){},
df:function df(){},
f3:function f3(){},
f4:function f4(){},
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
kY:function(a){var u=new O.a6([a])
u.bO(a)
return u},
a6:function a6(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cE:function cE(){this.b=this.a=null},
dQ:function dQ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cD:function cD(){},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b5:function b5(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hB:function hB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c9:function c9(){}},E={
lP:function(){var u=new E.ao()
u.a=""
u.b=!0
u.sf6(0,O.kY(E.ao))
u.y.bc(u.gjA(),u.gjD())
u.dy=u.dx=u.db=u.cy=u.cx=u.ch=u.Q=u.z=null
u.sai(0,null)
u.sae(null)
return u},
o8:function(a,b){var u=new E.i2(a)
u.f1(a,b)
return u},
oc:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibU)return E.m9(a,!0,!0,!0,!1)
u=W.kX()
t=u.style
t.width="100%"
t.height="100%"
s.gcm(a).h(0,u)
return E.m9(u,!0,!0,!0,!1)},
m9:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l="mousemove",k=new E.ee(),j=H.f(C.m.cQ(a,"webgl2",P.nP(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic7")
if(j==null)H.t(P.w("Failed to get the rendering context for WebGL."))
k.b=a
k.c=j
k.e=E.o8(j,a)
u=new T.iC(j)
u.b=H.ai(j.getParameter(3379))
H.ai(j.getParameter(34076))
u.e=u.d=0
k.f=u
u=new X.el(a)
t=new X.hh()
t.shQ(P.dM(P.p))
u.b=t
t=new X.hI(u)
t.f=0
t.r=V.bL()
t.x=V.bL()
t.ch=t.Q=1
u.c=t
t=new X.hp(u)
t.r=0
t.x=V.bL()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iI(u)
t.f=V.bL()
t.r=V.bL()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.sfG(H.d([],[[P.cP,P.S]]))
t=u.z
s=document
r=W.ae
q={func:1,ret:-1,args:[r]};(t&&C.a).h(t,W.ab(s,"contextmenu",H.n(u.ghe(),q),!1,r))
t=u.z
p=W.o
o={func:1,ret:-1,args:[p]};(t&&C.a).h(t,W.ab(a,"focus",H.n(u.ghk(),o),!1,p))
t=u.z;(t&&C.a).h(t,W.ab(a,"blur",H.n(u.gh8(),o),!1,p))
t=u.z
n=W.b3
m={func:1,ret:-1,args:[n]};(t&&C.a).h(t,W.ab(s,"keyup",H.n(u.gho(),m),!1,n))
t=u.z;(t&&C.a).h(t,W.ab(s,"keydown",H.n(u.ghm(),m),!1,n))
n=u.z;(n&&C.a).h(n,W.ab(a,"mousedown",H.n(u.ghs(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,"mouseup",H.n(u.ghw(),q),!1,r))
n=u.z;(n&&C.a).h(n,W.ab(a,l,H.n(u.ghu(),q),!1,r))
n=u.z
m=W.be;(n&&C.a).h(n,W.ab(a,H.I(W.nD(a)),H.n(u.ghy(),{func:1,ret:-1,args:[m]}),!1,m))
m=u.z;(m&&C.a).h(m,W.ab(s,l,H.n(u.ghg(),q),!1,r))
m=u.z;(m&&C.a).h(m,W.ab(s,"mouseup",H.n(u.ghi(),q),!1,r))
r=u.z;(r&&C.a).h(r,W.ab(s,"pointerlockchange",H.n(u.ghA(),o),!1,p))
p=u.z
o=W.aX
s={func:1,ret:-1,args:[o]};(p&&C.a).h(p,W.ab(a,"touchstart",H.n(u.ghN(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchend",H.n(u.ghJ(),s),!1,o))
p=u.z;(p&&C.a).h(p,W.ab(a,"touchmove",H.n(u.ghL(),s),!1,o))
k.r=u
k.Q=!0
k.ch=!1
k.cx=new P.ay(Date.now(),!1)
k.cy=0
k.ds()
return k},
fA:function fA(){},
ao:function ao(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i2:function i2(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
i5:function i5(a){this.a=a},
e6:function e6(a){this.c=a
this.b=null},
ee:function ee(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iE:function iE(a){this.a=a}},Z={
ld:function(a,b,c){var u
H.k(c,"$ib",[P.p],"$ab")
u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cc(c)),35044)
a.bindBuffer(b,null)
return new Z.eo(b,u)},
aI:function(a){return new Z.bd(a)},
eo:function eo(a,b){this.a=a
this.b=b},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jn:function jn(a){this.a=a},
dv:function dv(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
Z:function(){var u=new D.bX()
u.saj(null)
u.saQ(null)
u.c=null
u.d=0
return u},
fD:function fD(){},
bX:function bX(){var _=this
_.d=_.c=_.b=_.a=null},
fY:function fY(a){this.a=a},
fZ:function fZ(a){this.a=a},
B:function B(){this.b=null},
c_:function c_(a){this.b=null
this.$ti=a},
c0:function c0(a){this.b=null
this.$ti=a},
O:function O(a,b,c,d){var _=this
_.c=a
_.d=b
_.e=c
_.b=null
_.$ti=d},
lL:function(){var u=new D.bC()
u.c=new V.a2(1,1,1)
u.a=V.mo()
u.sae(null)
u.sa9(0,null)
return u},
bC:function bC(){var _=this
_.d=_.c=_.b=_.a=null},
a8:function a8(){},
dL:function dL(){var _=this
_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dY:function dY(){},
e4:function e4(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){}},X={dw:function dw(a,b){this.a=a
this.b=b},dK:function dK(a,b){this.a=a
this.b=b},hh:function hh(){this.d=this.b=this.a=null},dO:function dO(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hp:function hp(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bH:function bH(a,b,c){this.a=a
this.b=b
this.c=c},bI:function bI(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hI:function hI(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hY:function hY(){},eg:function eg(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iI:function iI(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},el:function el(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nF:function(a){var u=new X.h6(),t=new V.aM(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.m4
if(t==null){t=V.m3(0,0,1,1)
$.m4=t}u.r=t
return u},
dx:function dx(){},
h6:function h6(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dX:function dX(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){}},V={
kT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bb(a-b,u)
return(a<0?a+u:a)+b},
R:function(a,b,c){if(a==null)return C.b.af("null",c)
return C.b.af(C.e.eF(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
ch:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.R(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.b.af(u[p],s))}return u},
lu:function(a){return C.e.k_(Math.pow(2,C.W.cz(Math.log(H.oX(a))/Math.log(2))))},
nT:function(a){return new V.c2(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q)},
dR:function(){var u=$.lW
return u==null?$.lW=V.b6(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b6:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
l6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b6(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lU:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b6(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lV:function(a,b,c,d){d=V.mn()
return V.lT(V.m0(),d,new V.K(a,b,c))},
lT:function(a,b,c){var u=c.C(0,Math.sqrt(c.G(c))),t=b.aF(u),s=t.C(0,Math.sqrt(t.G(t))),r=u.aF(s),q=new V.K(a.a,a.b,a.c),p=s.U(0).G(q),o=r.U(0).G(q),n=u.U(0).G(q)
return V.b6(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bL:function(){var u=$.m_
return u==null?$.m_=new V.aa(0,0):u},
m0:function(){var u=$.cK
return u==null?$.cK=new V.a5(0,0,0):u},
m3:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e0(a,b,c,d)},
d2:function(){var u=$.mm
return u==null?$.mm=new V.K(0,0,0):u},
mn:function(){var u=$.ml
return u==null?$.ml=new V.K(0,1,0):u},
mo:function(){var u=$.ja
return u==null?$.ja=new V.K(0,0,1):u},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fX:function fX(a){this.a=a},
c2:function c2(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ak:function ak(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a5:function a5(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e0:function e0(a,b,c,d){var _=this
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
s=new V.i1()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ia()
u.f2(a)
return u},
iH:function(){var u=new V.iG(),t=P.e
u.sie(new H.aP([t,V.cO]))
u.sii(new H.aP([t,V.cT]))
u.c=null
return u},
bh:function bh(){},
az:function az(){},
dP:function dP(){},
au:function au(){this.a=null},
i1:function i1(){this.b=this.a=null},
ia:function ia(){this.a=null},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
cT:function cT(a){this.b=a
this.c=null},
iG:function iG(){this.c=this.b=this.a=null},
cU:function cU(a){this.b=a
this.a=this.c=null},
pp:function(a){P.od(C.T,new V.kO(a))},
oa:function(a){var u=new V.ie()
u.f4(a,!0)
return u},
bA:function bA(){},
kO:function kO(a){this.a=a},
fN:function fN(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h7:function h7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h8:function h8(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hW:function hW(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i_:function i_(a){this.a=a
this.c=null},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ie:function ie(){this.b=this.a=null},
ih:function ih(a){this.a=a},
ig:function ig(a){this.a=a},
ii:function ii(a){this.a=a}},U={
lK:function(){var u=new U.fE()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
dz:function(a){var u=new U.dy()
u.a=a
return u},
m5:function(a,b,c){var u,t=new U.e1()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.seM(0)
t.ser(0,0)
t.sez(0)
u=t.d
if(!(Math.abs(u-c)<$.M().a)){t.d=c
u=new D.O("deltaYaw",u,c,[P.r])
u.b=!0
t.T(u)}u=t.e
if(!(Math.abs(u-a)<$.M().a)){t.e=a
u=new D.O("deltaPitch",u,a,[P.r])
u.b=!0
t.T(u)}u=t.f
if(!(Math.abs(u-b)<$.M().a)){t.f=b
u=new D.O("deltaRoll",u,b,[P.r])
u.b=!0
t.T(u)}return t},
mh:function(a,b){var u,t,s,r=new U.em(),q=U.lK()
q.seL(0,!0)
q.sef(6.283185307179586)
q.seh(0)
q.sa4(0,0)
q.seg(100)
q.sa1(0)
q.sdJ(0.5)
r.b=q
u=r.gbf()
q.gA().h(0,u)
q=U.lK()
q.seL(0,!0)
q.sef(6.283185307179586)
q.seh(0)
q.sa4(0,0)
q.seg(100)
q.sa1(0)
q.sdJ(0.5)
r.c=q
q.gA().h(0,u)
r.d=null
r.r=r.f=r.e=!1
r.y=r.x=2.5
r.Q=4
r.ch=r.cx=!1
r.db=r.cy=0
r.dx=null
r.dy=0
r.fx=r.fr=null
t=new X.bH(a,!1,!1)
s=r.d
r.d=t
q=new D.O("modifiers",s,t,[X.bH])
q.b=!0
r.T(q)
q=r.f
if(q!==!1){r.f=!1
q=new D.O("invertX",q,!1,[P.V])
q.b=!0
r.T(q)}q=r.r
if(q!==!1){r.r=!1
q=new D.O("invertY",q,!1,[P.V])
q.b=!0
r.T(q)}r.j0(b)
return r},
fE:function fE(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dy:function dy(){this.b=this.a=null},
cz:function cz(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
al:function al(){},
e1:function e1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
em:function em(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dD:function dD(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nS:function(a,b){var u=a.al,t=new A.hw(b,u)
t.f3(b,u)
t.f0(a,b)
return t},
la:function(a,b,c,d,e){var u=new A.iQ(a,c,e)
u.f=d
u.siu(P.nQ(d,0,P.p))
return u},
ds:function ds(a,b,c){this.a=a
this.b=b
this.c=c},
ft:function ft(a){this.a=a},
hw:function hw(a,b){var _=this
_.bp=_.dL=_.bo=_.al=_.av=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e0=_.cq=_.e_=_.bC=_.dZ=_.dY=_.bB=_.bA=_.dX=_.dW=_.bz=_.by=_.bx=_.dV=_.dU=_.bw=_.dT=_.dS=_.bv=_.dR=_.dQ=_.bu=_.bt=_.dP=_.dO=_.bs=_.br=_.dN=_.dM=_.bq=null
_.cv=_.e4=_.cu=_.e3=_.ct=_.e2=_.cs=_.e1=_.cr=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.av=b3
_.al=b4
_.bo=b5},
cV:function cV(a,b){this.b=a
this.c=b},
cZ:function cZ(a,b,c,d,e,f,g){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g},
cX:function cX(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
d_:function d_(a,b,c,d,e,f,g,h,i){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i},
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
d0:function d0(a,b,c,d,e,f,g,h,i,j,k,l,m){var _=this
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
cN:function cN(){},
bW:function bW(a,b){this.a=a
this.b=b},
eh:function eh(){},
iW:function iW(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iQ:function iQ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
iR:function iR(a,b,c){this.a=a
this.c=b
this.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iX:function iX(a,b,c){this.a=a
this.c=b
this.d=c},
cW:function cW(a,b,c){this.a=a
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
lq:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.l8()
F.di(u,b,c,d,a,1,0,0,1)
F.di(u,b,c,d,a,0,1,0,3)
F.di(u,b,c,d,a,0,0,1,2)
F.di(u,b,c,d,a,-1,0,0,0)
F.di(u,b,c,d,a,0,-1,0,0)
F.di(u,b,c,d,a,0,0,-1,3)
u.au()
return u},
ki:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
di:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e={}
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
if(f!=null)a.b4(f)},
mN:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(d,{func:1,ret:P.r,args:[P.r]})
if(e<3)return
u=F.l8()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.ah])
q=u.a
p=new V.K(0,0,t)
p=p.C(0,Math.sqrt(p.G(p)))
C.a.h(r,q.iW(new V.b8(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a5(0,0,c),new V.K(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.G(k)
j=new V.K(m,l,t).C(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.en(new V.b8(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a5(m*k,l*k,c),new V.K(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.iU(r)
return u},
mL:function(a,b,c){return F.p0(!0,a,1,new F.kr(1,c),b)},
p0:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lx(c,e,new F.kt(d),null)
if(u==null)return
u.au()
u.cb()
if(b)u.b4(F.mN(3,!1,1,new F.ku(d),e))
u.b4(F.mN(1,!0,-1,new F.kv(d),e))
return u},
pq:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kP()
t=F.lq(a,null,new F.kQ(s,1),b)
t.cb()
return t},
mZ:function(){return F.mM(15,30,0.5,1,new F.kR())},
ph:function(){return F.mM(12,120,0.3,1,new F.kC(3,2))},
mM:function(a,b,c,d,e){var u=F.lx(a,b,new F.ks(H.n(e,{func:1,ret:V.a5,args:[P.r]}),d,b,c),null)
if(u==null)return
u.au()
u.cb()
return u},
lx:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.l8()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.en(g,g,new V.aM(p,0,0,1),g,g,new V.aa(r,1),g,g,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.co(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.en(g,g,new V.aM(j,i,h,1),g,g,new V.aa(r,m),g,g,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.co(d))}}u.d.iV(a+1,b+1,t)
return u},
cw:function(a,b,c){var u=new F.a9(),t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.c9(a)
u.ca(b)
u.i6(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a2()
return u},
nM:function(a,b){var u=new F.bn(),t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.c9(a)
u.ca(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a2()
return u},
l8:function(){var u=new F.e3(),t=new F.jb(u)
t.b=!1
t.siv(H.d([],[F.ah]))
u.a=t
t=new F.id(u)
t.sc1(H.d([],[F.bK]))
u.b=t
t=new F.ic(u)
t.sfN(H.d([],[F.bn]))
u.c=t
t=new F.ib(u)
t.sfH(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
en:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.ah(),r=new F.jj()
r.sc1(H.d([],[F.bK]))
s.b=r
r=new F.jf()
u=[F.bn]
r.sfO(H.d([],u))
r.sfP(H.d([],u))
s.c=r
r=new F.jc()
u=[F.a9]
r.sfI(H.d([],u))
r.sfJ(H.d([],u))
r.sfK(H.d([],u))
s.d=r
h=$.nc()
s.e=0
r=$.bu()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bt().a)!==0?e:t
s.x=(u&$.bs().a)!==0?b:t
s.y=(u&$.bv().a)!==0?f:t
s.z=(u&$.bw().a)!==0?g:t
s.Q=(u&$.nd().a)!==0?c:t
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
kP:function kP(){},
kQ:function kQ(a,b){this.a=a
this.b=b},
kR:function kR(){},
kC:function kC(a,b){this.a=a
this.b=b},
ks:function ks(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h_:function h_(){},
ij:function ij(){},
bn:function bn(){this.b=this.a=null},
hj:function hj(){},
iP:function iP(){},
bK:function bK(){this.a=null},
e3:function e3(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(a){this.a=a
this.b=null},
ic:function ic(a){this.a=a
this.b=null},
id:function id(a){this.a=a
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
hQ:function hQ(){},
jj:function jj(){this.b=null}},T={cS:function cS(){},ea:function ea(){},iB:function iB(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iC:function iC(a){var _=this
_.a=a
_.e=_.d=_.b=null},iD:function iD(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},K={
mT:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="testCanvas",c=null,b=V.oa("Test 026"),a=W.kX()
a.className="pageLargeCanvas"
a.id=d
b.a.appendChild(a)
u=[P.e]
b.dD(H.d(["Test of the Material Lighting shader with a textured directional light. ","The texturing of the directional light is being modified with a matrix. ","The texture metrix is updated using the pre-update mathods. ","Use Ctrl plus the mouse to move the center object."],u))
b.iS(H.d(["shapes"],u))
b.dD(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(d)
if(t==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.oc(t,!0,!0,!0,!1)
r=D.lL()
r.sae(U.dz(V.lV(0.3,0.4,1,c)))
q=D.lL()
q.sae(U.dz(V.lV(-0.3,-0.4,-1,c)))
q.sa9(0,new V.a2(0.125,0.125,0.125))
p=new O.dQ()
p.sfs(O.kY(V.ak))
p.e.bc(p.gh4(),p.gh6())
o=new O.b5(p,"emission")
o.c=C.d
o.f=new V.a2(0,0,0)
p.f=o
o=new O.b5(p,"ambient")
o.c=C.d
o.f=new V.a2(0,0,0)
p.r=o
o=new O.b5(p,"diffuse")
o.c=C.d
o.f=new V.a2(0,0,0)
p.x=o
o=new O.b5(p,"invDiffuse")
o.c=C.d
o.f=new V.a2(0,0,0)
p.y=o
o=new O.hB(p,"specular")
o.c=C.d
o.f=new V.a2(0,0,0)
o.ch=100
p.z=o
o=new O.hy(p,"bump")
o.c=C.d
p.Q=o
p.ch=null
o=new O.b5(p,"reflect")
o.c=C.d
o.f=new V.a2(0,0,0)
p.cx=o
o=new O.hA(p,"refract")
o.c=C.d
o.f=new V.a2(0,0,0)
o.ch=1
p.cy=o
o=new O.hx(p,"alpha")
o.c=C.d
o.f=1
p.db=o
o=new D.dL()
o.bO(D.a8)
o.sfD(H.d([],[D.bC]))
o.shP(H.d([],[D.dY]))
o.sic(H.d([],[D.e4]))
o.sir(H.d([],[D.eb]))
o.sis(H.d([],[D.ec]))
o.sit(H.d([],[D.ed]))
o.ch=o.Q=null
o.cS(o.gh2(),o.ghD(),o.ghH())
p.dx=o
n=o.Q
o=n==null?o.Q=D.Z():n
o.h(0,p.ghY())
o=p.dx
n=o.ch
o=n==null?o.ch=D.Z():n
o.h(0,p.gbi())
p.dy=null
p.dx.h(0,r)
p.dx.h(0,q)
p.f.sa9(0,new V.a2(0,0,0))
o=p.r
o.sa9(0,new V.a2(0.1,0.1,0.1))
o=p.x
o.sa9(0,new V.a2(0.8,0.8,0.8))
o=p.z
o.sa9(0,new V.a2(0.2,0.2,0.2))
o=p.z
if(o.c===C.d){o.c=C.j
o.bN()
o.c6(100)
n=o.a
n.a=null
n.Z(c)}o.c6(100)
o=p.x
n=s.f.jw("../resources/Test.png",!0)
m=o.c
if(m!==C.h){if(m===C.d)o.aD()
o.c=C.h
o.i5(c)
m=o.a
m.a=null
m.Z(c)}o.i4(n)
l=E.lP()
l.sae(U.mh(!0,s.r))
l.sai(0,F.mZ())
k=E.lP()
k.sae(U.dz(V.b6(3,0,0,0,0,3,0,0,0,0,3,0,0,0,0,1)))
o=F.lq(1,c,c,1)
o.cw()
k.sai(0,o)
j=new U.cz()
j.bO(U.al)
j.bc(j.gh0(),j.ghF())
j.e=null
j.f=V.dR()
j.r=0
j.h(0,U.mh(!1,s.r))
j.h(0,U.dz(V.l6(3.141592653589793)))
j.h(0,U.dz(V.b6(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=U.m5(0.5,0.7,0.3)
h=U.m5(0,0.1,0)
o=new M.dD()
o.a=!0
o.sfv(0,O.kY(E.ao))
o.e.bc(o.gha(),o.ghc())
o.y=o.x=o.r=o.f=null
g=X.nF(c)
f=new X.dX()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.sae(c)
n=f.c
if(!(Math.abs(n-1.0471975511965976)<$.M().a)){f.c=1.0471975511965976
n=new D.O("fov",n,1.0471975511965976,[P.r])
n.b=!0
f.aO(n)}n=f.d
if(!(Math.abs(n-0.1)<$.M().a)){f.d=0.1
n=new D.O("near",n,0.1,[P.r])
n.b=!0
f.aO(n)}n=f.e
if(!(Math.abs(n-2000)<$.M().a)){f.e=2000
n=new D.O("far",n,2000,[P.r])
n.b=!0
f.aO(n)}n=o.b
if(n!==f){if(n!=null)n.gA().N(0,o.gaq())
e=o.b
o.b=f
f.gA().h(0,o.gaq())
n=new D.O("camera",e,o.b,[X.dx])
n.b=!0
o.aA(n)}n=o.c
if(n!==g){if(n!=null)n.gA().N(0,o.gaq())
e=o.c
o.c=g
g.gA().h(0,o.gaq())
n=new D.O("target",e,o.c,[X.e8])
n.b=!0
o.aA(n)}o.seC(c)
o.seC(p)
o.e.h(0,l)
o.e.h(0,k)
o.b.sae(j)
n=o.f
if(n==null)n=o.f=D.Z()
n.h(0,new K.kE(p,i,h))
n=s.d
if(n!==o){if(n!=null)n.gA().N(0,s.gcV())
s.d=o
o.gA().h(0,s.gcV())
s.cW()}o=new V.i_("shapes")
u=u.getElementById("shapes")
o.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
o.b0(0,"Cube",new K.kF(l))
o.b0(0,"Cylinder",new K.kG(l))
o.b0(0,"Cone",new K.kH(l))
o.b0(0,"Sphere",new K.kI(l))
o.dB(0,"Toroid",new K.kJ(l),!0)
o.b0(0,"Knot",new K.kK(l))
u=s.z
if(u==null)u=s.z=D.Z()
o={func:1,ret:-1,args:[D.B]}
n=H.n(new K.kL(b,p),o)
if(u.b==null)u.saQ(H.d([],[o]))
u=u.b;(u&&C.a).h(u,n)
V.pp(s)},
kE:function kE(a,b,c){this.a=a
this.b=b
this.c=c},
kF:function kF(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,K]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.l2.prototype={}
J.a.prototype={
u:function(a,b){return a===b},
gI:function(a){return H.cL(a)},
i:function(a){return"Instance of '"+H.c4(a)+"'"}}
J.he.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iV:1}
J.dI.prototype={
u:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.dJ.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hV.prototype={}
J.bN.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.n0()]
if(u==null)return this.eW(a)
return"JavaScript function for "+H.l(J.at(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aO.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.J("add"))
a.push(b)},
ew:function(a,b){if(!!a.fixed$length)H.t(P.J("removeAt"))
if(b<0||b>=a.length)throw H.c(P.e_(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.t(P.J("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bi(a))}},
m:function(a,b){var u,t=new Array(a.length)
t.fixed$length=Array
for(u=0;u<a.length;++u)this.n(t,u,H.l(a[u]))
return t.join(b)},
ju:function(a){return this.m(a,"")},
jn:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bi(a))}return t},
jm:function(a,b){var u,t,s
H.n(b,{func:1,ret:P.V,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(H.H(b.$1(s)))return s
if(a.length!==u)throw H.c(P.bi(a))}throw H.c(H.hd())},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eT:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gjl:function(a){if(a.length>0)return a[0]
throw H.c(H.hd())},
gaw:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hd())},
bd:function(a,b,c,d){var u,t,s=H.u(a,0)
H.k(d,"$ii",[s],"$ai")
if(!!a.immutable$list)H.t(P.J("setRange"))
P.bp(b,c,a.length)
u=c-b
if(u===0)return
P.l7(0,"skipCount")
H.k(d,"$ib",[s],"$ab")
s=J.ci(d)
if(u>s.gl(d))throw H.c(H.nI())
if(0<b)for(t=u-1;t>=0;--t)a[b+t]=s.j(d,t)
else for(t=0;t<u;++t)a[b+t]=s.j(d,t)},
dE:function(a,b){var u,t
H.n(b,{func:1,ret:P.V,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.H(b.$1(a[t])))return!0
if(a.length!==u)throw H.c(P.bi(a))}return!1},
W:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.l_(a,"[","]")},
gV:function(a){return new J.ax(a,a.length,[H.u(a,0)])},
gI:function(a){return H.cL(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.J("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cg(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.J("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cg(a,b))
a[b]=c},
q:function(a,b){var u,t=[H.u(a,0)]
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
J.ax.prototype={
gL:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.D(s))
u=t.c
if(u>=r){t.sdc(null)
return!1}t.sdc(s[u]);++t.c
return!0},
sdc:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
J.bG.prototype={
k_:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.J(""+a+".toInt()"))},
cz:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.J(""+a+".floor()"))},
am:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.J(""+a+".round()"))},
eF:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
b9:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.b.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.J("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.b.D("0",r)},
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
D:function(a,b){if(typeof b!=="number")throw H.c(H.aC(b))
return a*b},
bb:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
f_:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dv(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dv(a,b)},
dv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.J("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aS:function(a,b){var u
if(a>0)u=this.du(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ib:function(a,b){if(b<0)throw H.c(H.aC(b))
return this.du(a,b)},
du:function(a,b){return b>31?0:a>>>b},
$ir:1,
$iac:1}
J.dH.prototype={$ip:1}
J.dG.prototype={}
J.bl.prototype={
a_:function(a,b){if(b<0)throw H.c(H.cg(a,b))
if(b>=a.length)H.t(H.cg(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.cg(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kV(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.bp(b,c,a.length)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.aa(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.aC(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Y()
if(b<0)throw H.c(P.e_(b,null))
if(b>c)throw H.c(P.e_(b,null))
if(c>a.length)throw H.c(P.e_(c,null))
return a.substring(b,c)},
ao:function(a,b){return this.B(a,b,null)},
k6:function(a){return a.toLowerCase()},
D:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
af:function(a,b){var u=b-a.length
if(u<=0)return a
return this.D(" ",u)+a},
ec:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
eb:function(a,b){return this.ec(a,b,0)},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ilY:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.b.a_(this.a,b)},
$ad1:function(){return[P.p]},
$az:function(){return[P.p]},
$ai:function(){return[P.p]},
$ab:function(){return[P.p]}}
H.fU.prototype={}
H.c1.prototype={
gV:function(a){var u=this
return new H.cC(u,u.gl(u),[H.as(u,"c1",0)])},
bI:function(a,b){return this.eV(0,H.n(b,{func:1,ret:P.V,args:[H.as(this,"c1",0)]}))}}
H.cC.prototype={
gL:function(a){return this.d},
E:function(){var u,t=this,s=t.a,r=J.ci(s),q=r.gl(s)
if(t.b!==q)throw H.c(P.bi(s))
u=t.c
if(u>=q){t.saX(null)
return!1}t.saX(r.J(s,u));++t.c
return!0},
saX:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
H.ht.prototype={
gV:function(a){return new H.hu(J.bx(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
J:function(a,b){return this.b.$1(J.fp(this.a,b))},
$ai:function(a,b){return[b]}}
H.hu.prototype={
E:function(){var u=this,t=u.b
if(t.E()){u.saX(u.c.$1(t.gL(t)))
return!0}u.saX(null)
return!1},
gL:function(a){return this.a},
saX:function(a){this.a=H.A(a,H.u(this,1))},
$ab2:function(a,b){return[b]}}
H.hv.prototype={
gl:function(a){return J.aD(this.a)},
J:function(a,b){return this.b.$1(J.fp(this.a,b))},
$ac1:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d3.prototype={
gV:function(a){return new H.jo(J.bx(this.a),this.b,this.$ti)}}
H.jo.prototype={
E:function(){var u,t
for(u=this.a,t=this.b;u.E();)if(H.H(t.$1(u.gL(u))))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.bY.prototype={}
H.d1.prototype={
n:function(a,b,c){H.A(c,H.as(this,"d1",0))
throw H.c(P.J("Cannot modify an unmodifiable list"))}}
H.ej.prototype={}
H.fG.prototype={
i:function(a){return P.l5(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.nz()},
$iF:1}
H.fH.prototype={
gl:function(a){return this.a},
bm:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bm(0,b))return
return this.dd(b)},
dd:function(a){return this.b[H.I(a)]},
M:function(a,b){var u,t,s,r,q=this,p=H.u(q,1)
H.n(b,{func:1,ret:-1,args:[H.u(q,0),p]})
u=q.c
for(t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,H.A(q.dd(r),p))}}}
H.iM.prototype={
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
H.hR.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hg.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.l(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.l(t.a)+")"
return s+r+"' on '"+u+"' ("+H.l(t.a)+")"}}
H.j_.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kS.prototype={
$1:function(a){if(!!J.W(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:17}
H.eX.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iav:1}
H.cs.prototype={
i:function(a){return"Closure '"+H.c4(this).trim()+"'"},
$ibE:1,
gkd:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iy.prototype={}
H.io.prototype={
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
if(t==null)u=H.cL(this.a)
else u=typeof t!=="object"?J.dp(t):H.cL(t)
return(u^H.cL(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c4(u)+"'")}}
H.iO.prototype={
i:function(a){return this.a}}
H.fC.prototype={
i:function(a){return this.a}}
H.i8.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.jp.prototype={
i:function(a){return"Assertion failed: "+P.dE(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gjt:function(a){return this.a===0},
ga7:function(a){return new H.hl(this,[H.u(this,0)])},
bm:function(a,b){var u,t,s=this
if(typeof b==="string"){u=s.b
if(u==null)return!1
return s.d8(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
if(t==null)return!1
return s.d8(t,b)}else return s.jq(b)},
jq:function(a){var u=this,t=u.d
if(t==null)return!1
return u.cC(u.bV(t,u.cB(a)),a)>=0},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bg(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bg(r,b)
s=t==null?null:t.b
return s}else return q.jr(b)},
jr:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.bV(r,s.cB(a))
t=s.cC(u,a)
if(t<0)return
return u[t].b},
n:function(a,b,c){var u,t,s=this
H.A(b,H.u(s,0))
H.A(c,H.u(s,1))
if(typeof b==="string"){u=s.b
s.d_(u==null?s.b=s.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d_(t==null?s.c=s.bZ():t,b,c)}else s.js(b,c)},
js:function(a,b){var u,t,s,r,q=this
H.A(a,H.u(q,0))
H.A(b,H.u(q,1))
u=q.d
if(u==null)u=q.d=q.bZ()
t=q.cB(a)
s=q.bV(u,t)
if(s==null)q.c7(u,t,[q.bP(a,b)])
else{r=q.cC(s,a)
if(r>=0)s[r].b=b
else s.push(q.bP(a,b))}},
M:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[H.u(s,0),H.u(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.c(P.bi(s))
u=u.c}},
d_:function(a,b,c){var u,t=this
H.A(b,H.u(t,0))
H.A(c,H.u(t,1))
u=t.bg(a,b)
if(u==null)t.c7(a,b,t.bP(b,c))
else u.b=c},
fl:function(){this.r=this.r+1&67108863},
bP:function(a,b){var u,t=this,s=new H.hk(H.A(a,H.u(t,0)),H.A(b,H.u(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.fl()
return s},
cB:function(a){return J.dp(a)&0x3ffffff},
cC:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.l5(this)},
bg:function(a,b){return a[b]},
bV:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
fC:function(a,b){delete a[b]},
d8:function(a,b){return this.bg(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c7(t,u,t)
this.fC(t,u)
return t}}
H.hk.prototype={}
H.hl.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.hm(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hm.prototype={
gL:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bi(t))
else{t=u.c
if(t==null){u.sd0(null)
return!1}else{u.sd0(t.a)
u.c=u.c.c
return!0}}},
sd0:function(a){this.d=H.A(a,H.u(this,0))},
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
H.hf.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ilY:1,
$io6:1}
H.cG.prototype={$icG:1}
H.bJ.prototype={$ibJ:1,$ioe:1}
H.dS.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cH.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p2(c)
H.bg(b,a,a.length)
a[b]=c},
$abY:function(){return[P.r]},
$az:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dT.prototype={
n:function(a,b,c){H.ai(c)
H.bg(b,a,a.length)
a[b]=c},
$abY:function(){return[P.p]},
$az:function(){return[P.p]},
$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]}}
H.hJ.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hK.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hL.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hM.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hN.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.dU.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$ipP:1}
H.cI.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icI:1,
$iU:1}
H.d8.prototype={}
H.d9.prototype={}
H.da.prototype={}
H.db.prototype={}
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
P.f2.prototype={
fi:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.cf(new P.k7(this,b),0),a)
else throw H.c(P.J("`setTimeout()` not found."))},
fj:function(a,b){if(self.setTimeout!=null)self.setInterval(H.cf(new P.k6(this,a,Date.now(),b),0),a)
else throw H.c(P.J("Periodic timer."))},
$iba:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()},
$S:3}
P.k6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.f.f_(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.bf.prototype={
jx:function(a){if(this.c!==6)return!0
return this.b.b.cN(H.n(this.d,{func:1,ret:P.V,args:[P.S]}),a.a,P.V,P.S)},
jp:function(a){var u=this.e,t=P.S,s={futureOr:1,type:H.u(this,1)},r=this.b.b
if(H.fl(u,{func:1,args:[P.S,P.av]}))return H.lr(r.jV(u,a.a,a.b,null,t,P.av),s)
else return H.lr(r.cN(H.n(u,{func:1,args:[P.S]}),a.a,null,t),s)}}
P.aJ.prototype={
eE:function(a,b,c){var u,t,s,r=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.a1
if(u!==C.k){u.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.oP(b,u)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
t=new P.aJ($.a1,[c])
s=b==null?1:3
this.d2(new P.bf(t,s,a,b,[r,c]))
return t},
jZ:function(a,b){return this.eE(a,null,b)},
d2:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.f(t.c,"$ibf")
t.c=a}else{if(s===2){u=H.f(t.c,"$iaJ")
s=u.a
if(s<4){u.d2(a)
return}t.a=s
t.c=u.c}s=t.b
s.toString
P.kp(null,null,s,H.n(new P.jC(t,a),{func:1,ret:-1}))}},
dq:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.f(p.c,"$ibf")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.f(p.c,"$iaJ")
u=q.a
if(u<4){q.dq(a)
return}p.a=u
p.c=q.c}o.a=p.bj(a)
u=p.b
u.toString
P.kp(null,null,u,H.n(new P.jG(o,p),{func:1,ret:-1}))}},
c3:function(){var u=H.f(this.c,"$ibf")
this.c=null
return this.bj(u)},
bj:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
d4:function(a){var u,t,s=this,r=H.u(s,0)
H.lr(a,{futureOr:1,type:r})
u=s.$ti
if(H.ln(a,"$icy",u,"$acy"))if(H.ln(a,"$iaJ",u,null))P.mp(a,s)
else P.oq(a,s)
else{t=s.c3()
H.A(a,r)
s.a=4
s.c=a
P.d6(s,t)}},
d5:function(a,b){var u,t=this
H.f(b,"$iav")
u=t.c3()
t.a=8
t.c=new P.an(a,b)
P.d6(t,u)},
$icy:1}
P.jC.prototype={
$0:function(){P.d6(this.a,this.b)},
$S:0}
P.jG.prototype={
$0:function(){P.d6(this.b,this.a.a)},
$S:0}
P.jD.prototype={
$1:function(a){var u=this.a
u.a=0
u.d4(a)},
$S:27}
P.jE.prototype={
$2:function(a,b){H.f(b,"$iav")
this.a.d5(a,b)},
$1:function(a){return this.$2(a,null)},
$S:47}
P.jF.prototype={
$0:function(){this.a.d5(this.b,this.c)},
$S:0}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eA(H.n(s.d,{func:1}),null)}catch(r){u=H.aj(r)
t=H.ck(r)
if(o.d){s=H.f(o.a.a.c,"$ian").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.f(o.a.a.c,"$ian")
else q.b=new P.an(u,t)
q.a=!0
return}if(!!J.W(n).$icy){if(n instanceof P.aJ&&n.a>=4){if(n.a===8){s=o.b
s.b=H.f(n.c,"$ian")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jZ(new P.jK(p),null)
s.a=!1}},
$S:3}
P.jK.prototype={
$1:function(a){return this.a},
$S:46}
P.jI.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.u(s,0)
q=H.A(n.c,r)
p=H.u(s,1)
n.a.b=s.b.b.cN(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ck(o)
s=n.a
s.b=new P.an(u,t)
s.a=!0}},
$S:3}
P.jH.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.f(m.a.a.c,"$ian")
r=m.c
if(H.H(r.jx(u))&&r.e!=null){q=m.b
q.b=r.jp(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ck(p)
r=H.f(m.a.a.c,"$ian")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.an(t,s)
n.a=!0}},
$S:3}
P.ep.prototype={}
P.ir.prototype={
gl:function(a){var u,t,s=this,r={},q=new P.aJ($.a1,[P.p])
r.a=0
u=H.u(s,0)
t=H.n(new P.it(r,s),{func:1,ret:-1,args:[u]})
H.n(new P.iu(r,q),{func:1,ret:-1})
W.ab(s.a,s.b,t,!1,u)
return q}}
P.it.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.N,args:[H.u(this.b,0)]}}}
P.iu.prototype={
$0:function(){this.b.d4(this.a.a)},
$S:0}
P.cP.prototype={}
P.is.prototype={}
P.ba.prototype={}
P.an.prototype={
i:function(a){return H.l(this.a)},
$ibD:1}
P.kg.prototype={$iq3:1}
P.ko.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dW():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u},
$S:0}
P.jQ.prototype={
jW:function(a){var u,t,s,r=null
H.n(a,{func:1,ret:-1})
try{if(C.k===$.a1){a.$0()
return}P.mB(r,r,this,a,-1)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kn(r,r,this,u,H.f(t,"$iav"))}},
jX:function(a,b,c){var u,t,s,r=null
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.a1){a.$1(b)
return}P.mC(r,r,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kn(r,r,this,u,H.f(t,"$iav"))}},
j2:function(a,b){return new P.jS(this,H.n(a,{func:1,ret:b}),b)},
cg:function(a){return new P.jR(this,H.n(a,{func:1,ret:-1}))},
dG:function(a,b){return new P.jT(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eA:function(a,b){H.n(a,{func:1,ret:b})
if($.a1===C.k)return a.$0()
return P.mB(null,null,this,a,b)},
cN:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a1===C.k)return a.$1(b)
return P.mC(null,null,this,a,b,c,d)},
jV:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a1===C.k)return a.$2(b,c)
return P.oQ(null,null,this,a,b,c,d,e,f)}}
P.jS.prototype={
$0:function(){return this.a.eA(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.jR.prototype={
$0:function(){return this.a.jW(this.b)},
$S:3}
P.jT.prototype={
$1:function(a){var u=this.c
return this.a.jX(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jO.prototype={
gV:function(a){var u=this,t=new P.eE(u,u.r,u.$ti)
t.c=u.e
return t},
gl:function(a){return this.a},
W:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$ica")!=null}else{t=this.fw(b)
return t}},
fw:function(a){var u=this.d
if(u==null)return!1
return this.bT(this.de(u,a),a)>=0},
h:function(a,b){var u,t,s=this
H.A(b,H.u(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d1(u==null?s.b=P.lf():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d1(t==null?s.c=P.lf():t,b)}else return s.fm(0,b)},
fm:function(a,b){var u,t,s,r=this
H.A(b,H.u(r,0))
u=r.d
if(u==null)u=r.d=P.lf()
t=r.d6(b)
s=u[t]
if(s==null)u[t]=[r.c_(b)]
else{if(r.bT(s,b)>=0)return!1
s.push(r.c_(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hT(this.c,b)
else return this.hS(0,b)},
hS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.de(r,b)
t=s.bT(u,b)
if(t<0)return!1
s.dw(u.splice(t,1)[0])
return!0},
d1:function(a,b){H.A(b,H.u(this,0))
if(H.f(a[b],"$ica")!=null)return!1
a[b]=this.c_(b)
return!0},
hT:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$ica")
if(u==null)return!1
this.dw(u)
delete a[b]
return!0},
di:function(){this.r=1073741823&this.r+1},
c_:function(a){var u,t=this,s=new P.ca(H.A(a,H.u(t,0)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.di()
return s},
dw:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.di()},
d6:function(a){return J.dp(a)&1073741823},
de:function(a,b){return a[this.d6(b)]},
bT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1}}
P.ca.prototype={}
P.eE.prototype={
gL:function(a){return this.d},
E:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bi(t))
else{t=u.c
if(t==null){u.sd3(null)
return!1}else{u.sd3(H.A(t.a,H.u(u,0)))
u.c=u.c.b
return!0}}},
sd3:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
P.hn.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.ho.prototype={$ii:1,$ib:1}
P.z.prototype={
gV:function(a){return new H.cC(a,this.gl(a),[H.bQ(this,a,"z",0)])},
J:function(a,b){return this.j(a,b)},
k5:function(a,b){var u,t=this,s=H.d([],[H.bQ(t,a,"z",0)])
C.a.sl(s,t.gl(a))
for(u=0;u<t.gl(a);++u)C.a.n(s,u,t.j(a,u))
return s},
k0:function(a){return this.k5(a,!0)},
q:function(a,b){var u,t=this,s=[H.bQ(t,a,"z",0)]
H.k(b,"$ib",s,"$ab")
u=H.d([],s)
C.a.sl(u,C.f.q(t.gl(a),b.gl(b)))
C.a.bd(u,0,t.gl(a),a)
C.a.bd(u,t.gl(a),u.length,b)
return u},
jj:function(a,b,c,d){var u
H.A(d,H.bQ(this,a,"z",0))
P.bp(b,c,this.gl(a))
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.l_(a,"[","]")}}
P.hq.prototype={}
P.hr.prototype={
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
H.n(b,{func:1,ret:-1,args:[H.bQ(s,a,"ad",0),H.bQ(s,a,"ad",1)]})
for(u=J.bx(s.ga7(a));u.E();){t=u.gL(u)
b.$2(t,s.j(a,t))}},
gl:function(a){return J.aD(this.ga7(a))},
i:function(a){return P.l5(a)},
$iF:1}
P.k8.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.J("Cannot modify unmodifiable map"))}}
P.hs.prototype={
j:function(a,b){return J.lB(this.a,b)},
n:function(a,b,c){J.kU(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
M:function(a,b){J.lC(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.at(this.a)},
$iF:1}
P.ek.prototype={}
P.jV.prototype={
as:function(a,b){var u
for(u=J.bx(H.k(b,"$ii",this.$ti,"$ai"));u.E();)this.h(0,u.gL(u))},
i:function(a){return P.l_(this,"{","}")},
J:function(a,b){var u,t,s,r=this
P.l7(b,"index")
for(u=P.ou(r,r.r,H.u(r,0)),t=0;u.E();){s=u.d
if(b===t)return s;++t}throw H.c(P.a_(b,r,"index",null,t))},
$ii:1,
$im6:1}
P.eF.prototype={}
P.f8.prototype={}
P.fy.prototype={
jz:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.bp(a0,a1,b.length)
u=$.nf()
for(t=a0,s=t,r=null,q=-1,p=-1,o=0;t<a1;t=n){n=t+1
m=C.b.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kx(C.b.F(b,n))
j=H.kx(C.b.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.h(u,i)
h=u[i]
if(h>=0){i=C.b.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.ag("")
g=r.a+=C.b.B(b,s,t)
r.a=g+H.c5(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.b.B(b,s,a1)
f=g.length
if(q>=0)P.lG(b,p,a1,q,o,f)
else{e=C.f.bb(f-1,4)+1
if(e===1)throw H.c(P.a7(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.b.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lG(b,p,a1,q,o,d)
else{e=C.f.bb(d,4)
if(e===1)throw H.c(P.a7(c,b,a1))
if(e>1)b=C.b.aW(b,a1,a1,e===2?"==":"=")}return b},
$abV:function(){return[[P.b,P.p],P.e]}}
P.fz.prototype={
$abB:function(){return[[P.b,P.p],P.e]}}
P.bV.prototype={}
P.bB.prototype={}
P.fW.prototype={
$abV:function(){return[P.e,[P.b,P.p]]}}
P.hb.prototype={
i:function(a){return this.a}}
P.ha.prototype={
fz:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.h(a,r)
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
if(r>b)q.a+=C.b.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ns(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abB:function(){return[P.e,P.e]}}
P.j7.prototype={
gji:function(){return C.R}}
P.j9.prototype={
cn:function(a){var u,t,s=P.bp(0,null,a.length),r=s-0
if(r===0)return new Uint8Array(0)
u=new Uint8Array(r*3)
t=new P.ke(u)
if(t.fL(a,0,s)!==s)t.dA(J.no(a,s-1),0)
return new Uint8Array(u.subarray(0,H.oK(0,t.b,u.length)))},
$abB:function(){return[P.e,[P.b,P.p]]}}
P.ke.prototype={
dA:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fL:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.a_(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dA(r,C.b.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.j8.prototype={
cn:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[P.p],"$ab")
u=P.oh(!1,a,0,null)
if(u!=null)return u
t=P.bp(0,null,J.aD(a))
s=P.mE(a,0,t)
if(s>0){r=P.cQ(a,0,s)
if(s===t)return r
q=new P.ag(r)
p=s
o=!1}else{p=0
q=null
o=!0}if(q==null)q=new P.ag("")
n=new P.kd(!1,q)
n.c=o
n.j6(a,p,t)
if(n.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,t))
q.a+=H.c5(65533)
n.f=n.e=n.d=0}m=q.a
return m.charCodeAt(0)==0?m:m},
$abB:function(){return[[P.b,P.p],P.e]}}
P.kd.prototype={
j6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h="Bad UTF-8 encoding 0x"
H.k(a,"$ib",[P.p],"$ab")
u=i.d
t=i.e
s=i.f
i.f=i.e=i.d=0
$label0$0:for(r=J.ci(a),q=i.b,p=b;!0;p=k){$label1$1:if(t>0){do{if(p===c)break $label0$0
o=r.j(a,p)
if(typeof o!=="number")return o.bJ()
if((o&192)!==128){n=P.a7(h+C.f.b9(o,16),a,p)
throw H.c(n)}else{u=(u<<6|o&63)>>>0;--t;++p}}while(t>0)
n=s-1
if(n<0||n>=4)return H.h(C.A,n)
if(u<=C.A[n]){n=P.a7("Overlong encoding of 0x"+C.f.b9(u,16),a,p-s-1)
throw H.c(n)}if(u>1114111){n=P.a7("Character outside valid Unicode range: 0x"+C.f.b9(u,16),a,p-s-1)
throw H.c(n)}if(!i.c||u!==65279)q.a+=H.c5(u)
i.c=!1}for(n=p<c;n;){m=P.mE(a,p,c)
if(m>0){i.c=!1
l=p+m
q.a+=P.cQ(a,p,l)
if(l===c)break}else l=p
k=l+1
o=r.j(a,l)
if(typeof o!=="number")return o.Y()
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
P.V.prototype={}
P.ay.prototype={
u:function(a,b){if(b==null)return!1
return b instanceof P.ay&&this.a===b.a&&!0},
gI:function(a){var u=this.a
return(u^C.f.aS(u,30))&1073741823},
i:function(a){var u=this,t=P.nA(H.o2(u)),s=P.dA(H.o0(u)),r=P.dA(H.nX(u)),q=P.dA(H.nY(u)),p=P.dA(H.o_(u)),o=P.dA(H.o1(u)),n=P.nB(H.nZ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.r.prototype={}
P.b1.prototype={
q:function(a,b){return new P.b1(C.f.q(this.a,b.gfE()))},
t:function(a,b){return new P.b1(C.f.t(this.a,b.gfE()))},
u:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.f.gI(this.a)},
i:function(a){var u,t,s,r=new P.fT(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.f.a6(q,6e7)%60)
t=r.$1(C.f.a6(q,1e6)%60)
s=new P.fS().$1(q%1e6)
return""+C.f.a6(q,36e8)+":"+H.l(u)+":"+H.l(t)+"."+H.l(s)}}
P.fS.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:22}
P.fT.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:22}
P.bD.prototype={}
P.fs.prototype={
i:function(a){return"Assertion failed"}}
P.dW.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbR:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbS()+o+u
if(!q.a)return t
s=q.gbR()
r=P.dE(q.b)
return t+s+": "+r}}
P.c6.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.l(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.l(s)
else if(t>s)u=": Not in range "+H.l(s)+".."+H.l(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.l(s)}return u}}
P.hc.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var u,t=H.ai(this.b)
if(typeof t!=="number")return t.Y()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.l(u)},
gl:function(a){return this.f}}
P.j0.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iY.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c8.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fF.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.dE(u)+"."}}
P.hU.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.e5.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fM.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ex.prototype={
i:function(a){return"Exception: "+this.a}}
P.h5.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.b.B(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.b.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.b.a_(f,q)
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
k=""}j=C.b.B(f,m,n)
return h+l+j+k+"\n"+C.b.D(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.l(g)+")"):h}}
P.bE.prototype={}
P.p.prototype={}
P.i.prototype={
bI:function(a,b){var u=H.as(this,"i",0)
return new H.d3(this,H.n(b,{func:1,ret:P.V,args:[u]}),[u])},
gl:function(a){var u,t=this.gV(this)
for(u=0;t.E();)++u
return u},
gaM:function(a){var u,t=this.gV(this)
if(!t.E())throw H.c(H.hd())
u=t.gL(t)
if(t.E())throw H.c(H.nJ())
return u},
J:function(a,b){var u,t,s
P.l7(b,"index")
for(u=this.gV(this),t=0;u.E();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.a_(b,this,"index",null,t))},
i:function(a){return P.nH(this,"(",")")}}
P.b2.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.N.prototype={
gI:function(a){return P.S.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
u:function(a,b){return this===b},
gI:function(a){return H.cL(this)},
i:function(a){return"Instance of '"+H.c4(this)+"'"},
toString:function(){return this.i(this)}}
P.av.prototype={}
P.e.prototype={$ilY:1}
P.ag.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipD:1}
P.j5.prototype={
$2:function(a,b){var u,t,s,r=P.e
H.k(a,"$iF",[r,r],"$aF")
H.I(b)
u=J.dl(b).eb(b,"=")
if(u===-1){if(b!=="")J.kU(a,P.lh(b,0,b.length,this.a,!0),"")}else if(u!==0){t=C.b.B(b,0,u)
s=C.b.ao(b,u+1)
r=this.a
J.kU(a,P.lh(t,0,t.length,r,!0),P.lh(s,0,s.length,r,!0))}return a},
$S:45}
P.j2.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.j3.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.j4.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fo(C.b.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.Y()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cb.prototype={
geK:function(){return this.b},
gcA:function(a){var u=this.c
if(u==null)return""
if(C.b.a5(u,"["))return C.b.B(u,1,u.length-1)
return u},
gbE:function(a){var u=this.d
if(u==null)return P.mt(this.a)
return u},
gcI:function(a){var u=this.f
return u==null?"":u},
ge6:function(){var u=this.r
return u==null?"":u},
ex:function(a,b){var u,t,s,r,q,p,o,n,m=this
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
if(o&&!C.b.a5(p,"/"))p="/"+p
n=P.lg(null,0,0,b)
return new P.cb(u,s,q,r,p,n,m.r)},
gcJ:function(){var u,t,s=this
if(s.Q==null){u=s.f
t=P.e
s.shR(new P.ek(P.mg(u==null?"":u),[t,t]))}return s.Q},
ge7:function(){return this.c!=null},
gea:function(){return this.f!=null},
ge8:function(){return this.r!=null},
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
if(!!J.W(b).$ilb)if(s.a==b.gbL())if(s.c!=null===b.ge7())if(s.b==b.geK())if(s.gcA(s)==b.gcA(b))if(s.gbE(s)==b.gbE(b))if(s.e===b.geq(b)){u=s.f
t=u==null
if(!t===b.gea()){if(t)u=""
if(u===b.gcI(b)){u=s.r
t=u==null
if(!t===b.ge8()){if(t)u=""
u=u===b.ge6()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gI:function(a){var u=this.z
return u==null?this.z=C.b.gI(this.i(0)):u},
shR:function(a){var u=P.e
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$ilb:1,
gbL:function(){return this.a},
geq:function(a){return this.e}}
P.k9.prototype={
$1:function(a){throw H.c(P.a7("Invalid port",this.a,this.b+1))},
$S:40}
P.ka.prototype={
$1:function(a){return P.f9(C.a0,a,C.l,!1)},
$S:16}
P.kc.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.f9(C.q,a,C.l,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.f9(C.q,b,C.l,!0))}},
$S:15}
P.kb.prototype={
$2:function(a,b){var u,t
H.I(a)
if(b==null||typeof b==="string")this.a.$2(a,H.I(b))
else for(u=J.bx(H.mS(b,"$ii")),t=this.a;u.E();)t.$2(a,H.I(u.gL(u)))},
$S:39}
P.j1.prototype={
geJ:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.h(o,0)
u=q.a
o=o[0]+1
t=C.b.ec(u,"?",o)
s=u.length
if(t>=0){r=P.dh(u,t+1,s,C.o,!1)
s=t}else r=p
return q.c=new P.jx("data",p,p,p,P.dh(u,o,s,C.E,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.h(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kk.prototype={
$1:function(a){return new Uint8Array(96)},
$S:37}
P.kj.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.np(u,0,96,b)
return u},
$S:35}
P.kl.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.b.F(b,s)^96
if(r>=t)return H.h(a,r)
a[r]=c}}}
P.km.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.b.F(b,0),t=C.b.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.h(a,r)
a[r]=c}}}
P.jY.prototype={
ge7:function(){return this.c>0},
ge9:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
gea:function(){var u=this.f
if(typeof u!=="number")return u.Y()
return u<this.r},
ge8:function(){return this.r<this.a.length},
gdg:function(){return this.b===4&&C.b.a5(this.a,"http")},
gdh:function(){return this.b===5&&C.b.a5(this.a,"https")},
gbL:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdg())q=t.x="http"
else if(t.gdh()){t.x="https"
q="https"}else if(q===4&&C.b.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.b.a5(t.a,r)){t.x=r
q=r}else{q=C.b.B(t.a,0,q)
t.x=q}return q},
geK:function(){var u=this.c,t=this.b+3
return u>t?C.b.B(this.a,t,u-1):""},
gcA:function(a){var u=this.c
return u>0?C.b.B(this.a,u,this.d):""},
gbE:function(a){var u,t=this
if(t.ge9()){u=t.d
if(typeof u!=="number")return u.q()
return P.fo(C.b.B(t.a,u+1,t.e),null,null)}if(t.gdg())return 80
if(t.gdh())return 443
return 0},
geq:function(a){return C.b.B(this.a,this.e,this.f)},
gcI:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.Y()
return u<t?C.b.B(this.a,u+1,t):""},
ge6:function(){var u=this.r,t=this.a
return u<t.length?C.b.ao(t,u+1):""},
gcJ:function(){var u=this,t=u.f
if(typeof t!=="number")return t.Y()
if(t>=u.r)return C.a1
t=P.e
return new P.ek(P.mg(u.gcI(u)),[t,t])},
ex:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=null
H.k(b,"$iF",[P.e,null],"$aF")
u=k.gbL()
t=u==="file"
s=k.c
r=s>0?C.b.B(k.a,k.b+3,s):""
q=k.ge9()?k.gbE(k):j
s=k.c
if(s>0)p=C.b.B(k.a,s,k.d)
else p=r.length!==0||q!=null||t?"":j
s=k.a
o=C.b.B(s,k.e,k.f)
if(!t)n=p!=null&&o.length!==0
else n=!0
if(n&&!C.b.a5(o,"/"))o="/"+o
m=P.lg(j,0,0,b)
n=k.r
l=n<s.length?C.b.ao(s,n+1):j
return new P.cb(u,r,p,q,o,m,l)},
gI:function(a){var u=this.y
return u==null?this.y=C.b.gI(this.a):u},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.W(b).$ilb&&this.a===b.i(0)},
i:function(a){return this.a},
$ilb:1}
P.jx.prototype={}
W.y.prototype={}
W.fq.prototype={
gl:function(a){return a.length}}
W.dq.prototype={
i:function(a){return String(a)},
$idq:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.co.prototype={$ico:1}
W.bT.prototype={$ibT:1}
W.by.prototype={$iby:1}
W.bU.prototype={
cQ:function(a,b,c){if(c!=null)return a.getContext(b,P.oY(c))
return a.getContext(b)},
eO:function(a,b){return this.cQ(a,b,null)},
$ibU:1}
W.cr.prototype={$icr:1}
W.bz.prototype={
gl:function(a){return a.length}}
W.ct.prototype={$ict:1}
W.fI.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cu.prototype={
gl:function(a){return a.length}}
W.fJ.prototype={}
W.b_.prototype={}
W.b0.prototype={}
W.fK.prototype={
gl:function(a){return a.length}}
W.fL.prototype={
gl:function(a){return a.length}}
W.fO.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.fP.prototype={
i:function(a){return String(a)}}
W.dB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iam",[P.ac],"$aam")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.am,P.ac]]},
$az:function(){return[[P.am,P.ac]]},
$ii:1,
$ai:function(){return[[P.am,P.ac]]},
$ib:1,
$ab:function(){return[[P.am,P.ac]]},
$aE:function(){return[[P.am,P.ac]]}}
W.dC.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaL(a))+" x "+H.l(this.gaG(a))},
u:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iam)return!1
return a.left===u.gbD(b)&&a.top===u.gbH(b)&&this.gaL(a)===u.gaL(b)&&this.gaG(a)===u.gaG(b)},
gI:function(a){return W.mr(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(this.gaL(a)),C.e.gI(this.gaG(a)))},
gdH:function(a){return a.bottom},
gaG:function(a){return a.height},
gbD:function(a){return a.left},
gbG:function(a){return a.right},
gbH:function(a){return a.top},
gaL:function(a){return a.width},
$iam:1,
$aam:function(){return[P.ac]}}
W.fQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.I(c)
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
W.fR.prototype={
gl:function(a){return a.length}}
W.jv.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iX")},
n:function(a,b,c){var u
H.f(c,"$iX")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
this.a.replaceChild(c,u[b])},
h:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.k0(this)
return new J.ax(u,u.length,[H.u(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
W.X.prototype={
gj1:function(a){return new W.jy(a)},
gcm:function(a){return new W.jv(a,a.children)},
gdI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Y()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Y()
if(r<0)r=-r*0
return new P.am(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
ac:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lO
if(u==null){u=H.d([],[W.aA])
t=new W.dV(u)
C.a.h(u,W.mq(null))
C.a.h(u,W.ms())
$.lO=t
d=t}else d=u
u=$.lN
if(u==null){u=new W.fa(d)
$.lN=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation.createHTMLDocument("")
$.bj=t
$.kZ=t.createRange()
t=$.bj.createElement("base")
H.f(t,"$ico")
t.href=u.baseURI
$.bj.head.appendChild(t)}u=$.bj
if(u.body==null){t=u.createElement("body")
u.body=H.f(t,"$iby")}u=$.bj
if(!!this.$iby)s=u.body
else{s=u.createElement(a.tagName)
$.bj.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.W(C.Z,a.tagName)){$.kZ.selectNodeContents(s)
r=$.kZ.createContextualFragment(b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lE(s)
c.cR(r)
document.adoptNode(r)
return r},
j9:function(a,b,c){return this.ac(a,b,c,null)},
eR:function(a,b){a.textContent=null
a.appendChild(this.ac(a,b,null,null))},
$iX:1,
geB:function(a){return a.tagName}}
W.fV.prototype={
$1:function(a){return!!J.W(H.f(a,"$iC")).$iX},
$S:21}
W.o.prototype={$io:1}
W.j.prototype={
iT:function(a,b,c,d){H.n(c,{func:1,args:[W.o]})
if(c!=null)this.fn(a,b,c,!1)},
fn:function(a,b,c,d){return a.addEventListener(b,H.cf(H.n(c,{func:1,args:[W.o]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaF")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.h0.prototype={
gl:function(a){return a.length}}
W.h4.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.h9.prototype={
gl:function(a){return a.length}}
W.bZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.C]},
$az:function(){return[W.C]},
$ii:1,
$ai:function(){return[W.C]},
$ib:1,
$ab:function(){return[W.C]},
$ibZ:1,
$aE:function(){return[W.C]}}
W.bk.prototype={$ibk:1,
gdK:function(a){return a.data}}
W.cA.prototype={$icA:1}
W.cB.prototype={$icB:1}
W.b3.prototype={$ib3:1}
W.dN.prototype={
i:function(a){return String(a)},
$idN:1}
W.hC.prototype={
gl:function(a){return a.length}}
W.cF.prototype={$icF:1}
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
W.hF.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.hG(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hG.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.m7("No elements"))
if(t>1)throw H.c(P.m7("More than one element"))
return u.firstChild},
as:function(a,b){var u,t,s,r
H.k(b,"$ii",[W.C],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=0;r<s;++r)t.appendChild(u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iC")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dF(u,u.length,[H.bQ(C.a2,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.C]},
$ai:function(){return[W.C]},
$ab:function(){return[W.C]}}
W.C.prototype={
jP:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
jT:function(a,b){var u,t
try{u=a.parentNode
J.nm(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eU(a):u},
iZ:function(a,b){return a.appendChild(H.f(b,"$iC"))},
hW:function(a,b,c){return a.replaceChild(b,c)},
$iC:1}
W.cJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaR")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aR]},
$az:function(){return[W.aR]},
$ii:1,
$ai:function(){return[W.aR]},
$ib:1,
$ab:function(){return[W.aR]},
$aE:function(){return[W.aR]}}
W.i6.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.i7(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.i7.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.i9.prototype={
gl:function(a){return a.length}}
W.aS.prototype={$iaS:1}
W.ik.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaS")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.il.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
W.ip.prototype={
j:function(a,b){return a.getItem(H.I(b))},
n:function(a,b,c){a.setItem(b,c)},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new W.iq(u))
return u},
gl:function(a){return a.length},
$aad:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.iq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aG.prototype={$iaG:1}
W.b9.prototype={$ib9:1}
W.e7.prototype={
ac:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
u=W.nC("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).as(0,new W.ar(u))
return t}}
W.iw.prototype={
ac:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
s.toString
u=new W.ar(s)
r=u.gaM(u)
t.toString
r.toString
new W.ar(t).as(0,new W.ar(r))
return t}}
W.ix.prototype={
ac:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bM(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.G.ac(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
t.toString
s.toString
new W.ar(t).as(0,new W.ar(s))
return t}}
W.cR.prototype={$icR:1}
W.aV.prototype={$iaV:1}
W.aH.prototype={$iaH:1}
W.iz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaH")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aH]},
$az:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aE:function(){return[W.aH]}}
W.iA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.iF.prototype={
gl:function(a){return a.length}}
W.aW.prototype={$iaW:1}
W.aX.prototype={$iaX:1}
W.iJ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.iK.prototype={
gl:function(a){return a.length}}
W.bM.prototype={}
W.j6.prototype={
i:function(a){return String(a)}}
W.jm.prototype={
gl:function(a){return a.length}}
W.be.prototype={
gjc:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.J("deltaY is not supported"))},
gjb:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.J("deltaX is not supported"))},
$ibe:1}
W.d4.prototype={
hX:function(a,b){return a.requestAnimationFrame(H.cf(H.n(b,{func:1,ret:-1,args:[P.ac]}),1))},
fF:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d5.prototype={$id5:1}
W.jw.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iY")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.Y]},
$az:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aE:function(){return[W.Y]}}
W.es.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
u:function(a,b){var u
if(b==null)return!1
u=J.W(b)
if(!u.$iam)return!1
return a.left===u.gbD(b)&&a.top===u.gbH(b)&&a.width===u.gaL(b)&&a.height===u.gaG(b)},
gI:function(a){return W.mr(C.e.gI(a.left),C.e.gI(a.top),C.e.gI(a.width),C.e.gI(a.height))},
gaG:function(a){return a.height},
gaL:function(a){return a.width}}
W.jL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaN")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aN]},
$az:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aE:function(){return[W.aN]}}
W.eK.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iC")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
n:function(a,b,c){H.f(c,"$iaG")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
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
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.h(r,t)
s=H.f(r[t],"$id5")
if(s.namespaceURI==null)C.a.h(q,s.name)}return q},
$aad:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.jy.prototype={
j:function(a,b){return this.a.getAttribute(H.I(b))},
n:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga7(this).length}}
W.jz.prototype={}
W.le.prototype={}
W.jA.prototype={}
W.jB.prototype={
$1:function(a){return this.a.$1(H.f(a,"$io"))},
$S:34}
W.bO.prototype={
f7:function(a){var u
if($.d7.gjt($.d7)){for(u=0;u<262;++u)$.d7.n(0,C.Y[u],W.pa())
for(u=0;u<12;++u)$.d7.n(0,C.u[u],W.pb())}},
aT:function(a){return $.ng().W(0,W.cv(a))},
at:function(a,b,c){var u=$.d7.j(0,H.l(W.cv(a))+"::"+b)
if(u==null)u=$.d7.j(0,"*::"+b)
if(u==null)return!1
return H.lm(u.$4(a,b,c,this))},
$iaA:1}
W.E.prototype={
gV:function(a){return new W.dF(a,this.gl(a),[H.bQ(this,a,"E",0)])}}
W.dV.prototype={
aT:function(a){return C.a.dE(this.a,new W.hP(a))},
at:function(a,b,c){return C.a.dE(this.a,new W.hO(a,b,c))},
$iaA:1}
W.hP.prototype={
$1:function(a){return H.f(a,"$iaA").aT(this.a)},
$S:24}
W.hO.prototype={
$1:function(a){return H.f(a,"$iaA").at(this.a,this.b,this.c)},
$S:24}
W.eS.prototype={
fh:function(a,b,c,d){var u,t,s
this.a.as(0,c)
u=b.bI(0,new W.jW())
t=b.bI(0,new W.jX())
this.b.as(0,u)
s=this.c
s.as(0,C.B)
s.as(0,t)},
aT:function(a){return this.a.W(0,W.cv(a))},
at:function(a,b,c){var u=this,t=W.cv(a),s=u.c
if(s.W(0,H.l(t)+"::"+b))return u.d.iX(c)
else if(s.W(0,"*::"+b))return u.d.iX(c)
else{s=u.b
if(s.W(0,H.l(t)+"::"+b))return!0
else if(s.W(0,"*::"+b))return!0
else if(s.W(0,H.l(t)+"::*"))return!0
else if(s.W(0,"*::*"))return!0}return!1},
$iaA:1}
W.jW.prototype={
$1:function(a){return!C.a.W(C.u,H.I(a))},
$S:25}
W.jX.prototype={
$1:function(a){return C.a.W(C.u,H.I(a))},
$S:25}
W.k4.prototype={
at:function(a,b,c){if(this.eZ(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.W(0,b)
return!1}}
W.k5.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.I(a))},
$S:16}
W.k3.prototype={
aT:function(a){var u=J.W(a)
if(!!u.$icM)return!1
u=!!u.$iq
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.b.a5(b,"on"))return!1
return this.aT(a)},
$iaA:1}
W.dF.prototype={
E:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.sdf(J.lB(u.a,t))
u.c=t
return!0}u.sdf(null)
u.c=s
return!1},
gL:function(a){return this.d},
sdf:function(a){this.d=H.A(a,H.u(this,0))},
$ib2:1}
W.aA.prototype={}
W.jU.prototype={$ipQ:1}
W.fa.prototype={
cR:function(a){new W.kf(this).$2(a,null)},
b_:function(a,b){if(b==null)J.lE(a)
else b.removeChild(a)},
i1:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.nq(a)
n=o.a.getAttribute("is")
H.f(a,"$iX")
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
this.i0(H.f(a,"$iX"),b,p,t,s,H.f(o,"$iF"),H.I(n))}catch(r){if(H.aj(r) instanceof P.aL)throw r
else{this.b_(a,b)
window
q="Removing corrupted element "+H.l(t)
if(typeof console!="undefined")window.console.warn(q)}}},
i0:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.b_(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.aT(a)){o.b_(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.at(a,"is",g)){o.b_(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga7(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga7(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.h(t,s)
r=t[s]
q=o.a
p=J.nt(r)
H.I(r)
if(!q.at(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.l(e)+" "+r+'="'+H.l(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.W(a).$icR)o.cR(a.content)},
$ipA:1}
W.kf.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.i1(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b_(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=H.f(u,"$iC")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iC")}},
$S:44}
W.er.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eY.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.de.prototype={}
W.df.prototype={}
W.f3.prototype={}
W.f4.prototype={}
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
e5:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
C.a.h(t,a)
C.a.h(this.b,null)
return s},
cP:function(a){var u,t,s,r,q=this,p={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.W(a)
if(!!u.$iay)return new Date(a.a)
if(!!u.$io6)throw H.c(P.iZ("structured clone of RegExp"))
if(!!u.$iaF)return a
if(!!u.$ibT)return a
if(!!u.$icx)return a
if(!!u.$ibk)return a
if(!!u.$icG||!!u.$ibJ||!!u.$icF)return a
if(!!u.$iF){t=q.e5(a)
s=q.b
if(t>=s.length)return H.h(s,t)
r=p.a=s[t]
if(r!=null)return r
r={}
p.a=r
C.a.n(s,t,r)
u.M(a,new P.k1(p,q))
return p.a}if(!!u.$ib){t=q.e5(a)
p=q.b
if(t>=p.length)return H.h(p,t)
r=p[t]
if(r!=null)return r
return q.j8(a,t)}throw H.c(P.iZ("structured clone of other type"))},
j8:function(a,b){var u,t=J.ci(a),s=t.gl(a),r=new Array(s)
C.a.n(this.b,b,r)
for(u=0;u<s;++u)C.a.n(r,u,this.cP(t.j(a,u)))
return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.cP(b)},
$S:7}
P.f7.prototype={$ibk:1,
gdK:function(a){return this.a}}
P.kq.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k0.prototype={}
P.h1.prototype={
gbh:function(){var u=this.b,t=H.as(u,"z",0),s=W.X
return new H.ht(new H.d3(u,H.n(new P.h2(),{func:1,ret:P.V,args:[t]}),[t]),H.n(new P.h3(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iX")
u=this.gbh()
J.nr(u.b.$1(J.fp(u.a,b)),c)},
h:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aD(this.gbh().a)},
j:function(a,b){var u=this.gbh()
return u.b.$1(J.fp(u.a,b))},
gV:function(a){var u=P.lS(this.gbh(),!1,W.X)
return new J.ax(u,u.length,[H.u(u,0)])},
$az:function(){return[W.X]},
$ai:function(){return[W.X]},
$ab:function(){return[W.X]}}
P.h2.prototype={
$1:function(a){return!!J.W(H.f(a,"$iC")).$iX},
$S:21}
P.h3.prototype={
$1:function(a){return H.m(H.f(a,"$iC"),"$iX")},
$S:33}
P.jP.prototype={
gbG:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
return H.A(u+t,H.u(this,0))},
gdH:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.G(t)
return H.A(u+t,H.u(this,0))},
i:function(a){var u=this
return"Rectangle ("+H.l(u.a)+", "+H.l(u.b)+") "+H.l(u.c)+" x "+H.l(u.d)},
u:function(a,b){var u,t,s,r,q,p=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iam){t=p.a
if(t==u.gbD(b)){s=p.b
if(s==u.gbH(b)){r=p.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.G(r)
q=H.u(p,0)
if(H.A(t+r,q)===u.gbG(b)){t=p.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.G(t)
u=H.A(s+t,q)===u.gdH(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u,t=this,s=t.a,r=J.dp(s),q=t.b,p=J.dp(q),o=t.c
if(typeof s!=="number")return s.q()
if(typeof o!=="number")return H.G(o)
u=H.u(t,0)
o=C.f.gI(H.A(s+o,u))
s=t.d
if(typeof q!=="number")return q.q()
if(typeof s!=="number")return H.G(s)
u=C.f.gI(H.A(q+s,u))
return P.ot(P.jN(P.jN(P.jN(P.jN(0,r),p),o),u))}}
P.am.prototype={
gbD:function(a){return this.a},
gbH:function(a){return this.b},
gaL:function(a){return this.c},
gaG:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hi.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib4")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ib:1,
$ab:function(){return[P.b4]},
$aE:function(){return[P.b4]}}
P.b7.prototype={$ib7:1}
P.hS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ib7")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aE:function(){return[P.b7]}}
P.hZ.prototype={
gl:function(a){return a.length}}
P.cM.prototype={$icM:1}
P.iv.prototype={
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
gcm:function(a){return new P.h1(a,new W.ar(a))},
ac:function(a,b,c,d){var u,t,s,r,q,p=H.d([],[W.aA])
C.a.h(p,W.mq(null))
C.a.h(p,W.ms())
C.a.h(p,new W.k3())
c=new W.fa(new W.dV(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.w).j9(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.ar(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$iq:1}
P.bb.prototype={$ibb:1}
P.iL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return a.getItem(b)},
n:function(a,b,c){H.f(c,"$ibb")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aE:function(){return[P.bb]}}
P.eC.prototype={}
P.eD.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eZ.prototype={}
P.f_.prototype={}
P.f5.prototype={}
P.f6.prototype={}
P.U.prototype={$ii:1,
$ai:function(){return[P.p]},
$ib:1,
$ab:function(){return[P.p]},
$ioe:1}
P.fu.prototype={
gl:function(a){return a.length}}
P.fv.prototype={
j:function(a,b){return P.bq(a.get(H.I(b)))},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bq(t.value[1]))}},
ga7:function(a){var u=H.d([],[P.e])
this.M(a,new P.fw(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.J("Not supported"))},
$aad:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.fw.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fx.prototype={
gl:function(a){return a.length}}
P.bS.prototype={}
P.hT.prototype={
gl:function(a){return a.length}}
P.eq.prototype={}
P.dt.prototype={$idt:1}
P.dZ.prototype={$idZ:1}
P.c7.prototype={
jY:function(a,b,c,d,e,f,g){var u,t=J.W(g)
if(!!t.$ibk)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oZ(g))
return}if(!!t.$icA)t=!0
else t=!1
if(t){this.ih(a,b,c,d,e,f,g)
return}throw H.c(P.dr("Incorrect number or type of arguments"))},
ih:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
S:function(a,b,c){return a.uniform1f(b,c)},
a3:function(a,b,c){return a.uniform1i(b,c)},
v:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eH:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eI:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
$ic7:1}
P.e2.prototype={$ie2:1}
P.e9.prototype={$ie9:1}
P.ei.prototype={$iei:1}
P.im.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a_(b,a,null,null,null))
return P.bq(a.item(b))},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.J("Cannot assign element of immutable List."))},
J:function(a,b){return this.j(a,b)},
$az:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.eV.prototype={}
P.eW.prototype={}
O.a6.prototype={
bO:function(a){var u=this
u.sfQ(H.d([],[a]))
u.sdm(null)
u.sdj(null)
u.sdn(null)},
cS:function(a,b,c){var u=this,t=H.as(u,"a6",0)
H.n(b,{func:1,ret:P.V,args:[[P.i,t]]})
t={func:1,ret:-1,args:[P.p,[P.i,t]]}
H.n(a,t)
H.n(c,t)
u.sdm(b)
u.sdj(a)
u.sdn(c)},
bc:function(a,b){return this.cS(a,null,b)},
hC:function(a){var u
H.k(a,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
f5:function(a,b){var u
H.k(b,"$ii",[H.as(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.ax(u,u.length,[H.u(u,0)])},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s=this,r=H.as(s,"a6",0)
H.A(b,r)
r=[r]
if(H.H(s.hC(H.d([b],r)))){u=s.a
t=u.length
C.a.h(u,b)
s.f5(t,H.d([b],r))}},
sfQ:function(a){this.a=H.k(a,"$ib",[H.as(this,"a6",0)],"$ab")},
sdm:function(a){this.b=H.n(a,{func:1,ret:P.V,args:[[P.i,H.as(this,"a6",0)]]})},
sdj:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
sdn:function(a){H.n(a,{func:1,ret:-1,args:[P.p,[P.i,H.as(this,"a6",0)]]})},
$ii:1}
O.cE.prototype={
gl:function(a){return this.a.length},
gA:function(){var u=this.b
return u==null?this.b=D.Z():u},
aN:function(){var u=this.b
if(u!=null)u.K(null)},
ga0:function(a){var u=this.a
if(u.length>0)return C.a.gaw(u)
else return V.dR()},
eu:function(a){var u=this.a
if(a==null)C.a.h(u,V.dR())
else C.a.h(u,a)
this.aN()},
cH:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sbX:function(a){this.a=H.k(a,"$ib",[V.ak],"$ab")}}
E.fA.prototype={}
E.ao.prototype={
sai:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gA().N(0,s.gen())
u=s.c
if(u!=null)u.gA().h(0,s.gen())
t=new D.O("shape",r,s.c,[F.e3])
t.b=!0
s.aI(t)}},
sae:function(a){var u,t,s=this
if(!J.T(s.r,a)){u=s.r
if(u!=null)u.gA().N(0,s.gel())
if(a!=null)a.gA().h(0,s.gel())
s.r=a
t=new D.O("mover",u,a,[U.al])
t.b=!0
s.aI(t)}},
aK:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ay(0,b,s):null
if(!J.T(q,s.x)){u=s.x
s.x=q
t=new D.O("matrix",u,q,[V.ak])
t.b=!0
s.aI(t)}for(r=s.y.a,r=new J.ax(r,r.length,[H.u(r,0)]);r.E();)r.d.aK(0,b)},
aV:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)C.a.h(s.a,s.ga0(s))
else C.a.h(s.a,r.D(0,s.ga0(s)))
s.aN()
a.ev(t.f)
s=a.dy
u=(s&&C.a).gaw(s)
if(u!=null&&t.d!=null)u.jS(a,t)
for(s=t.y.a,s=new J.ax(s,s.length,[H.u(s,0)]);s.E();)s.d.aV(a)
a.es()
a.dx.cH()},
gA:function(){var u=this.z
return u==null?this.z=D.Z():u},
aI:function(a){var u=this.z
if(u!=null)u.K(a)},
a2:function(){return this.aI(null)},
eo:function(a){H.f(a,"$iB")
this.e=null
this.aI(a)},
jG:function(){return this.eo(null)},
em:function(a){this.aI(H.f(a,"$iB"))},
jF:function(){return this.em(null)},
ek:function(a){this.aI(H.f(a,"$iB"))},
jC:function(){return this.ek(null)},
jB:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.length,t=this.gej(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bX()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a2()},
jE:function(a,b){var u,t
H.k(b,"$ii",[E.ao],"$ai")
for(u=b.gV(b),t=this.gej();u.E();)u.gL(u).gA().N(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u},
sf6:function(a,b){this.y=H.k(b,"$ia6",[E.ao],"$aa6")},
$ibo:1}
E.i2.prototype={
f1:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ay(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cE()
t=[V.ak]
u.sbX(H.d([],t))
u.b=null
u.gA().h(0,new E.i3(s))
s.cy=u
u=new O.cE()
u.sbX(H.d([],t))
u.b=null
u.gA().h(0,new E.i4(s))
s.db=u
u=new O.cE()
u.sbX(H.d([],t))
u.b=null
u.gA().h(0,new E.i5(s))
s.dx=u
s.sig(H.d([],[O.c9]))
u=s.dy;(u&&C.a).h(u,null)
s.sia(new H.aP([P.e,A.cN]))},
gjO:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga0(s)
u=t.db
u=t.z=s.D(0,u.ga0(u))
s=u}return s},
ev:function(a){var u=this.dy,t=a==null?(u&&C.a).gaw(u):a;(u&&C.a).h(u,t)},
es:function(){var u=this.dy
if(u.length>1)u.pop()},
sig:function(a){this.dy=H.k(a,"$ib",[O.c9],"$ab")},
sia:function(a){this.fr=H.k(a,"$iF",[P.e,A.cN],"$aF")}}
E.i3.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.ch=u.z=null},
$S:5}
E.i4.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=u.Q=u.z=null},
$S:5}
E.i5.prototype={
$1:function(a){var u
H.f(a,"$iB")
u=this.a
u.cx=u.ch=null},
$S:5}
E.e6.prototype={}
E.ee.prototype={
cX:function(a){H.f(a,"$iB")
this.ey()},
cW:function(){return this.cX(null)},
gjo:function(){var u,t=this,s=Date.now(),r=C.f.a6(P.lM(s-t.cx.a,0).a,1000)/1000
if(r<=0)return 0
u=t.cy
t.cy=0
t.cx=new P.ay(s,!1)
return u/r},
ds:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.D()
if(typeof r!=="number")return H.G(r)
u=C.e.cz(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.D()
t=C.e.cz(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ma(C.r,s.gjU())}},
ey:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iE(this),{func:1,ret:-1,args:[P.ac]})
C.I.fF(u)
C.I.hX(u,W.mH(t,P.ac))}},
jR:function(){var u,t,s,r,q,p=this,o=null
try{++p.cy
p.ch=!1
p.ds()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ay(r,!1)
s.y=P.lM(r-s.r.a,0).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aN()
r=s.db
C.a.sl(r.a,0)
r.aN()
r=s.dx
C.a.sl(r.a,0)
r.aN()
r=s.dy;(r&&C.a).sl(r,0)
s=s.dy;(s&&C.a).h(s,null)
o.aV(p.e)}s=p.z
if(s!=null)s.K(null)}catch(q){u=H.aj(q)
t=H.ck(q)
P.lv("Error: "+H.l(u))
P.lv("Stack: "+H.l(t))
throw H.c(u)}}}
E.iE.prototype={
$1:function(a){var u
H.pl(a)
u=this.a
if(u.ch){u.ch=!1
u.jR()}},
$S:53}
Z.eo.prototype={$ipu:1}
Z.du.prototype={
cf:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.l(u.e)+"]"}}
Z.jn.prototype={$ipv:1}
Z.dv.prototype={
aU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cf:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].cf(a)},
k7:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aV:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.h(s,t)
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
sfM:function(a){this.b=H.k(a,"$ib",[Z.bF],"$ab")},
$ipE:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c4(this.c)+"'")+"]"}}
Z.bd.prototype={
gcT:function(a){var u=this.a,t=(u&$.bu().a)!==0?3:0
if((u&$.bt().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=3
if((u&$.bv().a)!==0)t+=2
if((u&$.bw().a)!==0)t+=3
if((u&$.dm().a)!==0)t+=3
if((u&$.dn().a)!==0)t+=4
if((u&$.cn().a)!==0)++t
return(u&$.br().a)!==0?t+4:t},
j_:function(a){var u,t=$.bu(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bt()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dm()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.dn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cn()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.br()
if((s&t.a)!==0)if(u===a)return t
return $.ne()},
u:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.e]),t=this.a
if((t&$.bu().a)!==0)C.a.h(u,"Pos")
if((t&$.bt().a)!==0)C.a.h(u,"Norm")
if((t&$.bs().a)!==0)C.a.h(u,"Binm")
if((t&$.bv().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bw().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dm().a)!==0)C.a.h(u,"Clr3")
if((t&$.dn().a)!==0)C.a.h(u,"Clr4")
if((t&$.cn().a)!==0)C.a.h(u,"Weight")
if((t&$.br().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fD.prototype={}
D.bX.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
N:function(a,b){var u,t,s=this
H.n(b,{func:1,ret:-1,args:[D.B]})
u=s.a
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.a
t=(u&&C.a).N(u,b)||!1}else t=!1
u=s.b
u=u==null?null:C.a.W(u,b)
if(u===!0){u=s.b
t=(u&&C.a).N(u,b)||t}return t},
K:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.M(P.lS(u,!0,{func:1,ret:-1,args:[D.B]}),new D.fY(q))
u=r.b
if(u!=null){r.saQ(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.M(u,new D.fZ(q))}return!0},
jg:function(){return this.K(null)},
ag:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.K(u)}}},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saQ:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.fY.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.fZ.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:31}
D.B.prototype={}
D.c_.prototype={}
D.c0.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.dw.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dw))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dK.prototype={
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dK))return!1
if(this.a!=b.a)return!1
if(!this.b.u(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.hh.prototype={
jL:function(a){this.d.h(0,a.a)
return!1},
jH:function(a){this.d.N(0,a.a)
return!1},
shQ:function(a){this.d=H.k(a,"$im6",[P.p],"$am6")}}
X.dO.prototype={}
X.hp.prototype={
aY:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.D()
u=b.b
t=q.ch
if(typeof u!=="number")return u.D()
s=new V.aa(o.a+n*m,o.b+u*t)
t=q.a.gbl()
r=new X.bI(a,V.bL(),q.x,t,s)
r.b=!0
q.z=new P.ay(p,!1)
q.x=s
return r},
cG:function(a,b){this.r=a.a
return!1},
b6:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eQ()
if(typeof u!=="number")return u.bJ()
this.r=(u&~t)>>>0
return!1},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.aY(a,b))
return!0},
jM:function(a){return!1},
hr:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dO(c,r.a.gbl(),b)
s.b=!0
t.K(s)
r.y=new P.ay(u,!1)
r.x=V.bL()}}
X.bH.prototype={
u:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bH))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=H.H(this.b)?"Alt+":""
return u+(H.H(this.c)?"Shift+":"")}}
X.bI.prototype={}
X.hI.prototype={
bU:function(a,b,c){var u=this,t=new P.ay(Date.now(),!1),s=u.a.gbl(),r=new X.bI(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cG:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.K(this.bU(a,b,!0))
return!0},
b6:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eQ()
if(typeof t!=="number")return t.bJ()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.K(u.bU(a,b,!0))
return!0},
b5:function(a,b){var u=this.d
if(u==null)return!1
u.K(this.bU(a,b,!1))
return!0},
jN:function(a,b){return!1}}
X.hY.prototype={}
X.eg.prototype={}
X.iI.prototype={
aY:function(a,b){var u,t,s,r,q=this
H.k(a,"$ib",[V.aa],"$ab")
u=new P.ay(Date.now(),!1)
t=a.length>0?a[0]:V.bL()
s=q.a.gbl()
r=new X.eg(q.f,q.r,s,t)
r.b=!0
if(b){q.x=u
q.f=t}q.y=u
q.r=t
return r},
jK:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.K(this.aY(a,!0))
return!0},
jI:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.K(this.aY(a,!0))
return!0},
jJ:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.K(this.aY(a,!1))
return!0}}
X.el.prototype={
gbl:function(){var u=this.a,t=C.m.gdI(u).c
t.toString
u=C.m.gdI(u).d
u.toString
return V.m3(0,0,t,u)},
d9:function(a){var u=a.keyCode,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dK(u,new X.bH(t,a.altKey,a.shiftKey))},
aR:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
c8:function(a){if(!H.H(a.ctrlKey))H.H(a.metaKey)
a.shiftKey},
aE:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.t()
u=t.top
if(typeof r!=="number")return r.t()
return new V.aa(s-q,r-u)},
aZ:function(a){return new V.a4(a.movementX,a.movementY)},
c2:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.aa])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=C.e.am(r.pageX)
C.e.am(r.pageY)
p=o.left
C.e.am(r.pageX)
C.a.h(n,new V.aa(q-p,C.e.am(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=H.H(a.ctrlKey)||H.H(a.metaKey)
return new X.dw(u,new X.bH(t,a.altKey,a.shiftKey))},
bY:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.t()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.t()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hl:function(a){this.f=!0},
h9:function(a){this.f=!1},
hf:function(a){H.f(a,"$iae")
if(H.H(this.f)&&this.bY(a))a.preventDefault()},
hp:function(a){var u
H.f(a,"$ib3")
if(!H.H(this.f))return
u=this.d9(a)
this.b.jL(u)},
hn:function(a){var u
H.f(a,"$ib3")
if(!H.H(this.f))return
u=this.d9(a)
this.b.jH(u)},
ht:function(a){var u,t,s,r,q=this
H.f(a,"$iae")
u=q.a
u.focus()
q.f=!0
q.aR(a)
if(H.H(q.x)){t=q.aB(a)
s=q.aZ(a)
if(q.d.cG(t,s))a.preventDefault()
return}if(H.H(q.r)){q.y=a
u.requestPointerLock()
return}t=q.aB(a)
r=q.aE(a)
if(q.c.cG(t,r))a.preventDefault()},
hx:function(a){var u,t,s,r=this
H.f(a,"$iae")
r.aR(a)
u=r.aB(a)
if(H.H(r.x)){t=r.aZ(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aE(a)
if(r.c.b6(u,s))a.preventDefault()},
hj:function(a){var u,t,s,r=this
H.f(a,"$iae")
if(!r.bY(a)){r.aR(a)
u=r.aB(a)
if(H.H(r.x)){t=r.aZ(a)
if(r.d.b6(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aE(a)
if(r.c.b6(u,s))a.preventDefault()}},
hv:function(a){var u,t,s,r=this
H.f(a,"$iae")
r.aR(a)
u=r.aB(a)
if(H.H(r.x)){t=r.aZ(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aE(a)
if(r.c.b5(u,s))a.preventDefault()},
hh:function(a){var u,t,s,r=this
H.f(a,"$iae")
if(!r.bY(a)){r.aR(a)
u=r.aB(a)
if(H.H(r.x)){t=r.aZ(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(H.H(r.r))return
s=r.aE(a)
if(r.c.b5(u,s))a.preventDefault()}},
hz:function(a){var u,t,s=this
H.f(a,"$ibe")
s.aR(a)
u=new V.a4((a&&C.H).gjb(a),C.H.gjc(a)).C(0,180)
if(H.H(s.x)){if(s.d.jM(u))a.preventDefault()
return}if(H.H(s.r))return
t=s.aE(a)
if(s.c.jN(u,t))a.preventDefault()},
hB:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aE(s.y)
s.d.hr(u,t,r)}},
hO:function(a){var u,t=this
H.f(a,"$iaX")
t.a.focus()
t.f=!0
t.c8(a)
u=t.c2(a)
if(t.e.jK(u))a.preventDefault()},
hK:function(a){var u
H.f(a,"$iaX")
this.c8(a)
u=this.c2(a)
if(this.e.jI(u))a.preventDefault()},
hM:function(a){var u
H.f(a,"$iaX")
this.c8(a)
u=this.c2(a)
if(this.e.jJ(u))a.preventDefault()},
sfG:function(a){this.z=H.k(a,"$ib",[[P.cP,P.S]],"$ab")}}
D.bC.prototype={
gA:function(){var u=this.d
return u==null?this.d=D.Z():u},
az:function(a){var u
H.f(a,"$iB")
u=this.d
if(u!=null)u.K(a)},
f9:function(){return this.az(null)},
sae:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gA().N(0,s.gcY())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcY())
u=new D.O("mover",t,s.b,[U.al])
u.b=!0
s.az(u)}},
sa9:function(a,b){var u,t,s=this
if(b==null)b=new V.a2(1,1,1)
if(!s.c.u(0,b)){u=s.c
s.c=b
t=new D.O("color",u,b,[V.a2])
t.b=!0
s.az(t)}},
$ia8:1,
$ibo:1}
D.a8.prototype={$ibo:1}
D.dL.prototype={
gA:function(){var u=this.Q
return u==null?this.Q=D.Z():u},
az:function(a){var u=this.Q
if(u!=null)u.K(a)},
dl:function(a){var u
H.f(a,"$iB")
u=this.ch
if(u!=null)u.K(a)},
hq:function(){return this.dl(null)},
hE:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.f8(s))return!1}return!0},
h3:function(a,b){var u,t,s,r,q,p,o,n=D.a8
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gdk(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=H.f(b[q],"$ia8")
if(p instanceof D.bC)C.a.h(this.e,p)
o=p.d
if(o==null){o=new D.bX()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.d=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}n=new D.c_([n])
n.b=!0
this.az(n)},
hI:function(a,b){var u,t,s,r=D.a8
H.k(b,"$ii",[r],"$ai")
for(u=b.gV(b),t=this.gdk();u.E();){s=u.gL(u)
C.a.N(this.e,s)
s.gA().N(0,t)}r=new D.c0([r])
r.b=!0
this.az(r)},
f8:function(a){var u=C.a.W(this.e,a)
return u},
sfD:function(a){this.e=H.k(a,"$ib",[D.bC],"$ab")},
shP:function(a){this.f=H.k(a,"$ib",[D.dY],"$ab")},
sic:function(a){this.r=H.k(a,"$ib",[D.e4],"$ab")},
sir:function(a){this.x=H.k(a,"$ib",[D.eb],"$ab")},
sis:function(a){this.y=H.k(a,"$ib",[D.ec],"$ab")},
sit:function(a){this.z=H.k(a,"$ib",[D.ed],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.dY.prototype={$ia8:1,$ibo:1}
D.e4.prototype={$ia8:1,$ibo:1}
D.eb.prototype={$ia8:1,$ibo:1}
D.ec.prototype={$ia8:1,$ibo:1}
D.ed.prototype={$ia8:1,$ibo:1}
V.a2.prototype={
q:function(a,b){var u=C.e.q(this.a,b.gcK()),t=C.e.q(this.b,b.gbK()),s=C.e.q(this.c,b.gci())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
t:function(a,b){var u=C.e.t(this.a,b.gcK()),t=C.e.t(this.b,b.gbK()),s=C.e.t(this.c,b.gci())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a2(u,t,s)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.aM.prototype={
q:function(a,b){var u=this,t=C.e.q(u.a,b.gcK()),s=C.e.q(u.b,b.gbK()),r=C.e.q(u.c,b.gci()),q=C.e.q(u.d,b.giY(b))
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
if(q<0)q=0
else if(q>1)q=1
return new V.aM(t,s,r,q)},
t:function(a,b){var u=this,t=C.e.t(u.a,b.gcK()),s=C.e.t(u.b,b.gbK()),r=C.e.t(u.c,b.gci()),q=C.e.t(u.d,b.giY(b))
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
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.fX.prototype={}
V.c2.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.r])
return t},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.c2))return!1
u=b.a
t=$.M().a
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
V.ak.prototype={
ah:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.r])
return t},
ed:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.M().a)return V.dR()
u=1/b1
t=-n
s=-a0
return V.b6((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
D:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.b6(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
cO:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.K(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
ba:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a5(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.M().a
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
P:function(){return this.H("")}}
V.aa.prototype={
q:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
u:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.a5.prototype={
q:function(a,b){return new V.a5(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a5(this.a-b.a,this.b-b.b,this.c-b.c)},
D:function(a,b){return new V.a5(this.a*b,this.b*b,this.c*b)},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a5))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
V.b8.prototype={
q:function(a,b){var u=this
return new V.b8(C.e.q(u.a,b.gka(b)),C.e.q(u.b,b.gkb(b)),C.e.q(u.c,b.gkc(b)),C.e.q(u.d,b.gk9(b)))},
t:function(a,b){var u=this
return new V.b8(C.e.t(u.a,b.gka(b)),C.e.t(u.b,b.gkb(b)),C.e.t(u.c,b.gkc(b)),C.e.t(u.d,b.gk9(b)))},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.e0.prototype={
gax:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.e0))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+", "+V.R(u.d,3,0)+"]"}}
V.a4.prototype={
cD:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.G(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.G(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a,s=b.gje(b)
if(typeof t!=="number")return t.q()
s=C.e.q(t,s)
t=this.b
u=b.gjf(b)
if(typeof t!=="number")return t.q()
return new V.a4(s,C.e.q(t,u))},
t:function(a,b){var u,t=this.a,s=b.gje(b)
if(typeof t!=="number")return t.t()
s=C.e.t(t,s)
t=this.b
u=b.gjf(b)
if(typeof t!=="number")return t.t()
return new V.a4(s,C.e.t(t,u))},
D:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.D()
u=this.b
if(typeof u!=="number")return u.D()
return new V.a4(t*b,u*b)},
C:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mi
return u==null?$.mi=new V.a4(0,0):u}u=this.a
if(typeof u!=="number")return u.C()
t=this.b
if(typeof t!=="number")return t.C()
return new V.a4(u/b,t/b)},
u:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=this.a
s=$.M()
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
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+"]"}}
V.K.prototype={
cD:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cE:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aF:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
q:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.K(-this.a,-this.b,-this.c)},
D:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
C:function(a,b){if(Math.abs(b-0)<$.M().a)return V.d2()
return new V.K(this.a/b,this.b/b,this.c/b)},
ee:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
u:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.R(this.a,3,0)+", "+V.R(this.b,3,0)+", "+V.R(this.c,3,0)+"]"}}
U.fE.prototype={
bQ:function(a){var u=V.kT(a,this.c,this.b)
return u},
gA:function(){var u=this.y
return u==null?this.y=D.Z():u},
T:function(a){var u=this.y
if(u!=null)u.K(a)},
seL:function(a,b){},
sef:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.M().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bQ(u)}s=new D.O("maximumLocation",s,t.b,[P.r])
s.b=!0
t.T(s)}},
seh:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.M().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bQ(u)}s=new D.O("minimumLocation",s,t.c,[P.r])
s.b=!0
t.T(s)}},
sa4:function(a,b){var u,t=this
b=t.bQ(b)
u=t.d
if(!(Math.abs(u-b)<$.M().a)){t.d=b
u=new D.O("location",u,b,[P.r])
u.b=!0
t.T(u)}},
seg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.M().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.O("maximumVelocity",r,a,[P.r])
r.b=!0
s.T(r)}},
sa1:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.M().a)){u.f=a
t=new D.O("velocity",t,a,[P.r])
t.b=!0
u.T(t)}},
sdJ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.O("dampening",u,a,[P.r])
u.b=!0
this.T(u)}},
aK:function(a,b){var u,t,s,r=this,q=r.f,p=$.M().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa4(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.M().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa1(u)}}}
U.dy.prototype={
gA:function(){var u=this.b
return u==null?this.b=D.Z():u},
ay:function(a,b,c){return this.a},
u:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dy))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.cz.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Z():u},
T:function(a){var u
H.f(a,"$iB")
u=this.e
if(u!=null)u.K(a)},
ap:function(){return this.T(null)},
h1:function(a,b){var u,t,s,r,q,p,o,n=U.al
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gbf(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.gA()
o.toString
H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c_([n])
n.b=!0
this.T(n)},
hG:function(a,b){var u,t,s=U.al
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gbf();u.E();)u.gL(u).gA().N(0,t)
s=new D.c0([s])
s.b=!0
this.T(s)},
ay:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Y()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ax(r,r.length,[H.u(r,0)]),u=null;r.E();){q=r.d
if(q!=null){t=q.ay(0,b,c)
if(t!=null)u=u==null?t:t.D(0,u)}}s.f=u==null?V.dR():u
r=s.e
if(r!=null)r.ag(0)}return s.f},
u:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.al]},
$aa6:function(){return[U.al]},
$ial:1}
U.al.prototype={}
U.e1.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.Z():u},
T:function(a){var u=this.y
if(u!=null)u.K(a)},
seM:function(a){var u
a=V.kT(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.M().a)){this.a=a
u=new D.O("yaw",u,a,[P.r])
u.b=!0
this.T(u)}},
ser:function(a,b){var u
b=V.kT(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.M().a)){this.b=b
u=new D.O("pitch",u,b,[P.r])
u.b=!0
this.T(u)}},
sez:function(a){var u
a=V.kT(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
u=new D.O("roll",u,a,[P.r])
u.b=!0
this.T(u)}},
ay:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seM(s.a+s.d*b.y)
s.ser(0,s.b+s.e*b.y)
s.sez(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.b6(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).D(0,V.lU(s.b)).D(0,V.l6(s.a))
r=s.y
if(r!=null)r.ag(0)}return s.x},
u:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.e1))return!1
u=r.a
t=b.a
s=$.M().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotater: ["+V.R(u.a,3,0)+", "+V.R(u.b,3,0)+", "+V.R(u.c,3,0)+"], ["+V.R(u.d,3,0)+", "+V.R(u.e,3,0)+", "+V.R(u.f,3,0)+"]"}}
U.em.prototype={
gA:function(){var u=this.fx
return u==null?this.fx=D.Z():u},
T:function(a){var u
H.f(a,"$iB")
u=this.fx
if(u!=null)u.K(a)},
ap:function(){return this.T(null)},
j0:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.Z():t
u.h(0,s.gfV())
u=s.a.c
t=u.d
u=t==null?u.d=D.Z():t
u.h(0,s.gfX())
u=s.a.c
t=u.c
u=t==null?u.c=D.Z():t
u.h(0,s.gfZ())
u=s.a.d
t=u.f
u=t==null?u.f=D.Z():t
u.h(0,s.gfR())
u=s.a.d
t=u.d
u=t==null?u.d=D.Z():t
u.h(0,s.gfT())
u=s.a.e
t=u.b
u=t==null?u.b=D.Z():t
u.h(0,s.gio())
u=s.a.e
t=u.d
u=t==null?u.d=D.Z():t
u.h(0,s.gil())
u=s.a.e
t=u.c
u=t==null?u.c=D.Z():t
u.h(0,s.gij())
return!0},
ar:function(a){var u=a.a,t=a.b
if(H.H(this.f)){if(typeof u!=="number")return u.U()
u=-u}if(H.H(this.r)){if(typeof t!=="number")return t.U()
t=-t}return new V.a4(u,t)},
fW:function(a){var u=this
a=H.m(H.f(a,"$iB"),"$ibI")
if(!J.T(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fY:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ibI")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.t(0,a.y)
u=new V.a4(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ar(new V.a4(t.a,t.b).D(0,2).C(0,u.gax()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sa1(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.a4(s.a,s.b).D(0,2).C(0,u.gax()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa4(0,-p*q+s)
n.b.sa1(0)
n.c.sa1(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.a4(t.a,t.b).D(0,2).C(0,u.gax()))}n.ap()},
h_:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sa1(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sa1(-t*10*u)
r.ap()}},
fS:function(a){var u=this
if(H.m(H.f(a,"$iB"),"$idO").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fU:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ibI")
if(!J.T(n.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.a4(s.a,s.b).D(0,2).C(0,u.gax()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa4(0,-p*q+s)
n.b.sa1(0)
n.c.sa1(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.a4(t.a,t.b).D(0,2).C(0,u.gax()))
n.ap()},
ip:function(a){var u=this
H.f(a,"$iB")
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
im:function(a){var u,t,s,r,q,p,o,n=this
a=H.m(H.f(a,"$iB"),"$ieg")
if(!H.H(n.cx))return
if(H.H(n.ch)){u=a.d.t(0,a.y)
u=new V.a4(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
n.ch=!1}if(H.H(n.e)){u=a.c
t=a.d.t(0,a.y)
u=n.ar(new V.a4(t.a,t.b).D(0,2).C(0,u.gax()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.U()
s=n.y
if(typeof s!=="number")return H.G(s)
t.sa1(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.U()
t=n.x
if(typeof t!=="number")return H.G(t)
s.sa1(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=n.ar(new V.a4(s.a,s.b).D(0,2).C(0,u.gax()))
s=n.c
q=r.a
if(typeof q!=="number")return q.U()
p=n.y
if(typeof p!=="number")return H.G(p)
o=n.cy
if(typeof o!=="number")return H.G(o)
s.sa4(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.U()
q=n.x
if(typeof q!=="number")return H.G(q)
s=n.db
if(typeof s!=="number")return H.G(s)
o.sa4(0,-p*q+s)
n.b.sa1(0)
n.c.sa1(0)
t=t.t(0,a.z)
n.dx=n.ar(new V.a4(t.a,t.b).D(0,2).C(0,u.gax()))}n.ap()},
ik:function(a){var u,t,s,r=this
H.f(a,"$iB")
if(!H.H(r.cx))return
r.cx=!1
if(H.H(r.ch))return
u=r.dx
if(u.G(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.U()
s=r.y
if(typeof s!=="number")return H.G(s)
u.sa1(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.U()
u=r.x
if(typeof u!=="number")return H.G(u)
s.sa1(-t*10*u)
r.ap()}},
ay:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.Y()
if(s<r){t.dy=r
u=b.y
t.c.aK(0,u)
t.b.aK(0,u)
t.fr=V.l6(t.b.d).D(0,V.lU(t.c.d))}return t.fr},
$ial:1}
M.dD.prototype={
aA:function(a){var u
H.f(a,"$iB")
u=this.y
if(u!=null)u.K(a)},
fa:function(){return this.aA(null)},
hb:function(a,b){var u,t,s,r,q,p,o,n=E.ao
H.k(b,"$ii",[n],"$ai")
for(u=b.length,t=this.gaq(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bX()
o.saj(null)
o.saQ(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}n=new D.c_([n])
n.b=!0
this.aA(n)},
hd:function(a,b){var u,t,s=E.ao
H.k(b,"$ii",[s],"$ai")
for(u=b.gV(b),t=this.gaq();u.E();)u.gL(u).gA().N(0,t)
s=new D.c0([s])
s.b=!0
this.aA(s)},
seC:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().N(0,t.gaq())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gaq())
s=new D.O("technique",u,t.d,[O.c9])
s.b=!0
t.aA(s)}},
gA:function(){var u=this.y
return u==null?this.y=D.Z():u},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.e6(a)
e.b=!0
u=f.f
if(u!=null)u.K(e)
a.ev(f.d)
u=f.c
u.toString
t=a.a
t.bindFramebuffer(36160,null)
t.enable(2884)
t.enable(2929)
t.depthFunc(513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.G(s)
o=C.e.am(p*s)
p=q.b
if(typeof r!=="number")return H.G(r)
n=C.e.am(p*r)
p=C.e.am(q.c*s)
a.c=p
q=C.e.am(q.d*r)
a.d=q
t.viewport(o,n,p,q)
t.clearDepth(u.c)
u=u.a
t.clearColor(u.a,u.b,u.c,u.d)
t.clear(16640)
u=f.b
t=a.c
q=a.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.b6(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.eu(i)
t=$.lZ
if(t==null){t=V.m0()
q=V.mn()
p=$.mj
t=V.lT(t,q,p==null?$.mj=new V.K(0,0,-1):p)
$.lZ=t
h=t}else h=t
t=u.b
if(t!=null){g=t.ay(0,a,u)
if(g!=null)h=g.D(0,h)}a.db.eu(h)
u=f.d
if(u!=null)u.aK(0,a)
for(u=f.e.a,u=new J.ax(u,u.length,[H.u(u,0)]);u.E();)u.d.aK(0,a)
for(u=f.e.a,u=new J.ax(u,u.length,[H.u(u,0)]);u.E();)u.d.aV(a)
f.b.toString
a.cy.cH()
a.db.cH()
f.c.toString
a.es()},
sfv:function(a,b){this.e=H.k(b,"$ia6",[E.ao],"$aa6")},
$ipB:1}
A.ds.prototype={}
A.ft.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
jh:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
jd:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.hw.prototype={
f0:function(d2,d3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8="Required uniform value, ",a9=", was not defined or used in shader.",b0="emissionTxt",b1="nullEmissionTxt",b2="ambientTxt",b3="nullAmbientTxt",b4="diffuseTxt",b5="nullDiffuseTxt",b6="invDiffuseTxt",b7="nullInvDiffuseTxt",b8="specularTxt",b9="nullSpecularTxt",c0="nullBumpTxt",c1="reflectTxt",c2="nullReflectTxt",c3="refractTxt",c4="nullRefractTxt",c5="alphaTxt",c6="nullAlphaTxt",c7="uniform mat4 objMat;\n",c8="   if(nullAlphaTxt > 0) return alpha;\n",c9="   if (a <= 0.000001) discard;\n",d0="precision mediump float;\n\n",d1="precision mediump float;\n\nvarying vec3 normalVec;\n"
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
d2.ix(u)
d2.iE(u)
d2.iy(u)
d2.iM(u)
d2.iN(u)
d2.iG(u)
d2.iR(u)
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
s.iB(u)
s.iw(u)
s.iz(u)
s.iC(u)
s.iK(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.iI(u)
s.iJ(u)}s.iF(u)
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
s.iA(u)
s.iH(u)
s.iL(u)
s.iO(u)
s.iP(u)
s.iQ(u)
s.iD(u)}m=u.a+="// === Main ===\n"
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
a7.e=a7.da(n,35633)
a7.f=a7.da(a7.d,35632)
s=a7.a
q=s.createProgram()
a7.r=q
s.attachShader(q,a7.e)
s.attachShader(a7.r,a7.f)
s.linkProgram(a7.r)
if(!H.H(H.lm(s.getProgramParameter(a7.r,35714)))){h=s.getProgramInfoLog(a7.r)
s.deleteProgram(a7.r)
H.t(P.w("Failed to link shader: "+H.l(h)))}a7.i7()
a7.i9()
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
if(d2.x2)a7.k1=H.m(a7.y.p(0,"txt2DMat"),"$icW")
if(d2.y1)a7.k2=H.m(a7.y.p(0,"txtCubeMat"),"$iaB")
if(d2.y2)a7.k3=H.m(a7.y.p(0,"colorMat"),"$iaB")
a7.sfq(H.d([],[A.aB]))
t=d2.av
if(t>0){a7.k4=H.f(a7.y.p(0,"bendMatCount"),"$iQ")
for(g=0;g<t;++g){s=a7.r1
r=a7.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w(a8+q+a9));(s&&C.a).h(s,H.m(f,"$iaB"))}}t=d2.a
if(t!==C.d){a7.r2=H.m(a7.y.p(0,"emissionClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.rx=H.m(a7.y.p(0,b0),"$iap")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break
case C.i:a7.ry=H.m(a7.y.p(0,b0),"$iaq")
a7.x1=H.m(a7.y.p(0,b1),"$iQ")
break}}t=d2.b
if(t!==C.d){a7.x2=H.m(a7.y.p(0,"ambientClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.y1=H.m(a7.y.p(0,b2),"$iap")
a7.av=H.m(a7.y.p(0,b3),"$iQ")
break
case C.i:a7.y2=H.m(a7.y.p(0,b2),"$iaq")
a7.av=H.m(a7.y.p(0,b3),"$iQ")
break}}t=d2.c
if(t!==C.d){a7.al=H.m(a7.y.p(0,"diffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.bo=H.m(a7.y.p(0,b4),"$iap")
a7.bp=H.m(a7.y.p(0,b5),"$iQ")
break
case C.i:a7.dL=H.m(a7.y.p(0,b4),"$iaq")
a7.bp=H.m(a7.y.p(0,b5),"$iQ")
break}}t=d2.d
if(t!==C.d){a7.bq=H.m(a7.y.p(0,"invDiffuseClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dM=H.m(a7.y.p(0,b6),"$iap")
a7.br=H.m(a7.y.p(0,b7),"$iQ")
break
case C.i:a7.dN=H.m(a7.y.p(0,b6),"$iaq")
a7.br=H.m(a7.y.p(0,b7),"$iQ")
break}}t=d2.e
if(t!==C.d){a7.bu=H.m(a7.y.p(0,"shininess"),"$ia3")
a7.bs=H.m(a7.y.p(0,"specularClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dO=H.m(a7.y.p(0,b8),"$iap")
a7.bt=H.m(a7.y.p(0,b9),"$iQ")
break
case C.i:a7.dP=H.m(a7.y.p(0,b8),"$iaq")
a7.bt=H.m(a7.y.p(0,b9),"$iQ")
break}}switch(d2.f){case C.d:break
case C.j:break
case C.h:a7.dQ=H.m(a7.y.p(0,"bumpTxt"),"$iap")
a7.bv=H.m(a7.y.p(0,c0),"$iQ")
break
case C.i:a7.dR=H.m(a7.y.p(0,"bumpTxt"),"$iaq")
a7.bv=H.m(a7.y.p(0,c0),"$iQ")
break}if(d2.dy){a7.dS=H.m(a7.y.p(0,"envSampler"),"$iaq")
a7.dT=H.m(a7.y.p(0,"nullEnvTxt"),"$iQ")
t=d2.r
if(t!==C.d){a7.bw=H.m(a7.y.p(0,"reflectClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dU=H.m(a7.y.p(0,c1),"$iap")
a7.bx=H.m(a7.y.p(0,c2),"$iQ")
break
case C.i:a7.dV=H.m(a7.y.p(0,c1),"$iaq")
a7.bx=H.m(a7.y.p(0,c2),"$iQ")
break}}t=d2.x
if(t!==C.d){a7.by=H.m(a7.y.p(0,"refraction"),"$ia3")
a7.bz=H.m(a7.y.p(0,"refractClr"),"$iP")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dW=H.m(a7.y.p(0,c3),"$iap")
a7.bA=H.m(a7.y.p(0,c4),"$iQ")
break
case C.i:a7.dX=H.m(a7.y.p(0,c3),"$iaq")
a7.bA=H.m(a7.y.p(0,c4),"$iQ")
break}}}t=d2.y
if(t!==C.d){a7.bB=H.m(a7.y.p(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:a7.dY=H.m(a7.y.p(0,c5),"$iap")
a7.bC=H.m(a7.y.p(0,c6),"$iQ")
break
case C.i:a7.dZ=H.m(a7.y.p(0,c5),"$iaq")
a7.bC=H.m(a7.y.p(0,c6),"$iQ")
break}}a7.sfb(H.d([],[A.cV]))
a7.sfc(H.d([],[A.cX]))
a7.sfd(H.d([],[A.cY]))
a7.sfe(H.d([],[A.cZ]))
a7.sff(H.d([],[A.d_]))
a7.sfg(H.d([],[A.d0]))
if(d2.k2){t=d2.z
if(t>0){a7.e_=H.f(a7.y.p(0,"dirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.cq;(s&&C.a).h(s,new A.cV(f,e))}}t=d2.Q
if(t>0){a7.e0=H.f(a7.y.p(0,"pntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$ia3")
s=a7.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$ia3")
s=a7.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.cr;(s&&C.a).h(s,new A.cX(f,e,d,c,b,a))}}t=d2.ch
if(t>0){a7.e1=H.f(a7.y.p(0,"spotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$ia3")
s=a7.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$ia3")
s=a7.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w(a8+r+a9))
H.m(a2,"$ia3")
s=a7.cs;(s&&C.a).h(s,new A.cY(f,e,d,c,b,a,a0,a1,a2))}}t=d2.cx
if(t>0){a7.e2=H.f(a7.y.p(0,"txtDirLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$iap")
s=a7.ct;(s&&C.a).h(s,new A.cZ(f,e,d,c,b,a0,a))}}t=d2.cy
if(t>0){a7.e3=H.f(a7.y.p(0,"txtPntLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$icW")
s=a7.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$iQ")
s=a7.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$ia3")
s=a7.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$ia3")
s=a7.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w(a8+r+a9))
H.m(a2,"$iaq")
s=a7.cu;(s&&C.a).h(s,new A.d_(f,e,d,c,a2,b,a,a0,a1))}}t=d2.db
if(t>0){a7.e4=H.f(a7.y.p(0,"txtSpotLightCount"),"$iQ")
for(g=0;g<t;++g){s=a7.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w(a8+r+a9))
H.m(f,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w(a8+r+a9))
H.m(e,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w(a8+r+a9))
H.m(d,"$iP")
s=a7.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w(a8+r+a9))
H.m(c,"$iP")
s=a7.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w(a8+r+a9))
H.m(b,"$iP")
s=a7.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w(a8+r+a9))
H.m(a,"$iQ")
s=a7.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w(a8+r+a9))
H.m(a0,"$iP")
s=a7.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w(a8+r+a9))
H.m(a1,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w(a8+r+a9))
H.m(a2,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w(a8+r+a9))
H.m(a3,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w(a8+r+a9))
H.m(a4,"$ia3")
s=a7.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w(a8+r+a9))
H.m(a5,"$ia3")
s=a7.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w(a8+r+a9))
H.m(a6,"$iap")
s=a7.cv;(s&&C.a).h(s,new A.d0(f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){if(c==null||!c.d)C.c.a3(b.a,b.d,1)
else{a.eS(c)
C.c.a3(b.a,b.d,0)}},
ab:function(a,b,c){C.c.a3(b.a,b.d,1)},
sfq:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sfb:function(a){this.cq=H.k(a,"$ib",[A.cV],"$ab")},
sfc:function(a){this.cr=H.k(a,"$ib",[A.cX],"$ab")},
sfd:function(a){this.cs=H.k(a,"$ib",[A.cY],"$ab")},
sfe:function(a){this.ct=H.k(a,"$ib",[A.cZ],"$ab")},
sff:function(a){this.cu=H.k(a,"$ib",[A.d_],"$ab")},
sfg:function(a){this.cv=H.k(a,"$ib",[A.d0],"$ab")}}
A.hz.prototype={
ix:function(a){var u,t,s,r=this
if(!r.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+r.av+"];\n"
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
iE:function(a){var u
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
iy:function(a){var u
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
iM:function(a){var u,t
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
iN:function(a){var u,t
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
iG:function(a){var u
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
iR:function(a){var u
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
if(0>=c.length)return H.h(c,0)
u=a.a=u+("uniform int null"+(c[0].toUpperCase()+C.b.ao(c,1))+"Txt;\n")
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
iB:function(a){var u,t="   if(nullEmissionTxt > 0) return emissionClr;\n",s=this.a
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
iw:function(a){var u,t="   if(nullAmbientTxt > 0) return ambientClr;\n",s=this.b
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
iz:function(a){var u,t="   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n",s=this.c
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
iC:function(a){var u,t="   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n",s=this.d
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
iK:function(a){var u,t="   if(nullSpecularTxt > 0) specularColor = specularClr;\n",s=this.e
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
iF:function(a){var u,t,s="uniform int nullBumpTxt;\n",r="   return normalize(normalVec);\n",q="   if(nullBumpTxt > 0) return normalVec;\n",p="   vec3 n = normalize(normalVec);\n",o="   vec3 b = normalize(binormalVec);\n",n="   b = cross(n, c);\n",m="   mat3 mat = mat3( b.x,  b.y,  b.z,\n",l="                   -c.x, -c.y, -c.z,\n",k="                    n.x,  n.y,  n.z);\n",j="   return mat * normalize(2.0*color - 1.0);\n"
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
iI:function(a){var u,t="   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.r
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
iJ:function(a){var u,t="   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n",s=this.x
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
iA:function(a){var u,t=this.z
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
iH:function(a){var u,t=this.Q
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
iL:function(a){var u,t=this.ch
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
iO:function(a){var u,t,s=this.cx
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
iP:function(a){var u,t,s=this.cy
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
iQ:function(a){var u,t,s=this.db
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
iD:function(a){var u
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
i:function(a){return this.al}}
A.cV.prototype={}
A.cZ.prototype={}
A.cX.prototype={}
A.d_.prototype={}
A.cY.prototype={}
A.d0.prototype={}
A.cN.prototype={
f3:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
da:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!H.H(H.lm(t.getShaderParameter(s,35713)))){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.l(s)+"': "+H.l(u)))}return s},
i7:function(){var u,t,s,r=this,q=H.d([],[A.ds]),p=r.a,o=H.ai(p.getProgramParameter(r.r,35721))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
C.a.h(q,new A.ds(p,t.name,s))}r.x=new A.ft(q)},
i9:function(){var u,t,s,r=this,q=H.d([],[A.eh]),p=r.a,o=H.ai(p.getProgramParameter(r.r,35718))
if(typeof o!=="number")return H.G(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
C.a.h(q,r.ja(t.type,t.size,t.name,s))}r.y=new A.iW(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.Q(u,b,c)
else return A.la(u,this.r,b,a,c)},
fA:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.la(u,this.r,b,a,c)},
fB:function(a,b,c){var u=this.a
if(a===1)return new A.aq(u,b,c)
else return A.la(u,this.r,b,a,c)},
bk:function(a,b){return new P.ex(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
ja:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.a3(u.a,c,d)
case 35664:return new A.iR(u.a,c,d)
case 35665:return new A.P(u.a,c,d)
case 35666:return new A.iU(u.a,c,d)
case 35667:return new A.iS(u.a,c,d)
case 35668:return new A.iT(u.a,c,d)
case 35669:return new A.iV(u.a,c,d)
case 35674:return new A.iX(u.a,c,d)
case 35675:return new A.cW(u.a,c,d)
case 35676:return new A.aB(u.a,c,d)
case 35678:return u.fA(b,c,d)
case 35680:return u.fB(b,c,d)
case 35670:throw H.c(u.bk("BOOL",c))
case 35671:throw H.c(u.bk("BOOL_VEC2",c))
case 35672:throw H.c(u.bk("BOOL_VEC3",c))
case 35673:throw H.c(u.bk("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bW.prototype={
i:function(a){return this.b}}
A.eh.prototype={}
A.iW.prototype={
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
A.iS.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iQ.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
siu:function(a){H.k(a,"$ib",[P.p],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iR.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.P.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cW.prototype={
an:function(a){var u=new Float32Array(H.cc(H.k(a,"$ib",[P.r],"$ab")))
C.c.eH(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aB.prototype={
an:function(a){var u=new Float32Array(H.cc(H.k(a,"$ib",[P.r],"$ab")))
C.c.eI(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
eS:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kh.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cE(s.b,b).cE(s.d.cE(s.c,b),c)
a.sa4(0,new V.a5(r.a,r.b,r.c))
a.seD(r.C(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
a.sdF(new V.b8(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
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
a.sa4(0,new V.a5(s,u,q))
u=new V.K(s,u,q)
a.seD(u.C(0,Math.sqrt(u.G(u))))
a.sdF(new V.b8(1-c,2+c,-1,-1))},
$S:8}
F.ku.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:23}
F.kv.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:23}
F.kP.prototype={
$2:function(a,b){return 0},
$S:32}
F.kQ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.G(s)
u=a.f
t=new V.K(u.a,u.b,u.c)
s=t.C(0,Math.sqrt(t.G(t))).D(0,this.b+s)
a.sa4(0,new V.a5(s.a,s.b,s.c))},
$S:8}
F.kR.prototype={
$1:function(a){return new V.a5(Math.cos(a),Math.sin(a),0)},
$S:28}
F.kC.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.a5(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:28}
F.ks.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lA(n.$1(o),m)
m=J.nk(J.lA(n.$1(o+3.141592653589793/p.c),m),l)
m=new V.K(m.a,m.b,m.c)
u=m.C(0,Math.sqrt(m.G(m)))
n=$.mk
if(n==null){n=new V.K(1,0,0)
$.mk=n
t=n}else t=n
n=u.aF(!J.T(u,t)?V.mo():t)
s=n.C(0,Math.sqrt(n.G(n)))
n=s.aF(u)
t=n.C(0,Math.sqrt(n.G(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.D(0,n*m)
m=s.D(0,q*m)
a.sa4(0,J.nj(l,new V.a5(n.a-m.a,n.b-m.b,n.c-m.c)))},
$S:8}
F.a9.prototype={
b1:function(){var u=this
if(!u.gb2()){C.a.N(u.a.a.d.b,u)
u.a.a.a2()}u.c4()
u.c5()
u.hU()},
c9:function(a){this.a=a
C.a.h(a.d.b,this)},
ca:function(a){this.b=a
C.a.h(a.d.c,this)},
i6:function(a){this.c=a
C.a.h(a.d.d,this)},
c4:function(){var u=this.a
if(u!=null){C.a.N(u.d.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.a.N(u.d.c,this)
this.b=null}},
hU:function(){var u=this.c
if(u!=null){C.a.N(u.d.d,this)
this.c=null}},
gb2:function(){return this.a==null||this.b==null||this.c==null},
fp:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.d2()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ee())return
return s.C(0,Math.sqrt(s.G(s)))},
fu:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.t(0,q)
r=new V.K(r.a,r.b,r.c)
s=r.C(0,Math.sqrt(r.G(r)))
r=t.t(0,q)
r=new V.K(r.a,r.b,r.c)
r=s.aF(r.C(0,Math.sqrt(r.G(r))))
return r.C(0,Math.sqrt(r.G(r)))},
cl:function(){var u,t=this
if(t.d!=null)return!0
u=t.fp()
if(u==null){u=t.fu()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
fo:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.d2()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.ee())return
return s.C(0,Math.sqrt(s.G(s)))},
ft:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.M().a){l=d.t(0,g)
l=new V.K(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.U(0)}else{p=(l-u.b)/r
l=d.t(0,g).D(0,p).q(0,g).t(0,j)
l=new V.K(l.a,l.b,l.c)
q=l.C(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.U(0)}l=n.d
if(l!=null){o=l.C(0,Math.sqrt(l.G(l)))
l=o.aF(q)
l=l.C(0,Math.sqrt(l.G(l))).aF(o)
q=l.C(0,Math.sqrt(l.G(l)))}return q},
cj:function(){var u,t=this
if(t.e!=null)return!0
u=t.fo()
if(u==null){u=t.ft()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
gj5:function(a){var u=this
if(J.T(u.a,u.b))return!0
if(J.T(u.b,u.c))return!0
if(J.T(u.c,u.a))return!0
return!1},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u,t,s=this
if(s.gb2())return a+"disposed"
u=a+C.b.af(J.at(s.a.e),0)+", "+C.b.af(J.at(s.b.e),0)+", "+C.b.af(J.at(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.H("")}}
F.h_.prototype={}
F.ij.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.w()
t=t.e
u=c.c
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.c
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bn.prototype={
b1:function(){var u=this
if(!u.gb2()){C.a.N(u.a.a.c.b,u)
u.a.a.a2()}u.c4()
u.c5()},
c9:function(a){this.a=a
C.a.h(a.c.b,this)},
ca:function(a){this.b=a
C.a.h(a.c.c,this)},
c4:function(){var u=this.a
if(u!=null){C.a.N(u.c.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.a.N(u.c.c,this)
this.b=null}},
gb2:function(){return this.a==null||this.b==null},
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){if(this.gb2())return a+"disposed"
return a+C.b.af(J.at(this.a.e),0)+", "+C.b.af(J.at(this.b.e),0)},
P:function(){return this.H("")}}
F.hj.prototype={}
F.iP.prototype={
b3:function(a,b,c){var u,t=b.a
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
return t==u.e}else{t=b.a
t.a.a.w()
t=t.e
u=c.b
u.a.a.w()
if(t==u.e){t=b.b
t.a.a.w()
t=t.e
u=c.a
u.a.a.w()
return t==u.e}else return!1}}}
F.bK.prototype={
u:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.af(J.at(u.e),0)},
P:function(){return this.H("")}}
F.e3.prototype={
gA:function(){var u=this.e
return u==null?this.e=D.Z():u},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.w()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){r=g[s]
h.a.h(0,r.j7())}h.a.w()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
n=p[o]
h.b.a.a.h(0,n)
o=new F.bK()
if(n.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
C.a.h(n.b.b,o)
C.a.h(o.a.a.b.b,o)
p=o.a.a.e
if(p!=null)p.K(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.c.a
p.a.h(0,l)
p.a.h(0,k)
F.nM(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.D)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.w()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.h(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.w()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.h(p,o)
i=p[o]
o=h.d.a
o.a.h(0,l)
o.a.h(0,k)
o.a.h(0,i)
F.cw(l,k,i)}g=h.e
if(g!=null)g.ag(0)},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.ag(0)
return u},
jy:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.d(o.slice(0),[H.u(o,0)])
for(o=[F.ah];u.length!==0;){t=C.a.gjl(u)
C.a.ew(u,0)
if(t!=null){s=H.d([],o)
C.a.h(s,t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.h(u,r)
q=u[r]
if(q!=null&&a.b3(0,t,q)){C.a.h(s,q)
C.a.ew(u,r)}}if(s.length>1)b.b4(s)}}p.a.w()
p.c.cL()
p.d.cL()
p.b.jQ()
p.c.cM(new F.iP())
p.d.cM(new F.ij())
o=p.e
if(o!=null)o.ag(0)},
cb:function(){this.jy(new F.jg(),new F.hQ())},
cw:function(){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
p.d.cw()
for(u=p.a.c.length-1;u>=0;--u){o=p.a.c
if(u>=o.length)return H.h(o,u)
t=o[u]
o=t.r
if(o!=null)t.sei(new V.K(-o.a,-o.b,-o.c))
o=t.x
if(o!=null){s=-o.a
r=-o.b
o=-o.c
q=new V.K(s,r,o).C(0,Math.sqrt(s*s+r*r+o*o))
if(!J.T(t.x,q)){t.x=q
o=t.a
if(o!=null){o=o.e
if(o!=null)o.K(null)}}}}o=p.e
if(o!=null)o.ag(0)},
j3:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=this,a0=34962,a1=a.a.c.length
a3.toString
u=$.bu()
t=a3.a
s=(t&u.a)!==0?1:0
if((t&$.bt().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bv().a)!==0)++s
if((t&$.bw().a)!==0)++s
if((t&$.dm().a)!==0)++s
if((t&$.dn().a)!==0)++s
if((t&$.cn().a)!==0)++s
if((t&$.br().a)!==0)++s
r=a3.gcT(a3)
q=r*4
u=new Array(a1*r)
u.fixed$length=Array
t=P.r
p=H.d(u,[t])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.du])
for(n=0,m=0;m<s;++m){l=a3.j_(m)
k=l.gcT(l)
C.a.n(o,m,new Z.du(l,k,n*4,q))
for(j=0;j<a1;++j){u=a.a.c
if(j>=u.length)return H.h(u,j)
i=u[j].jv(l)
h=n+j*r
for(g=0;g<i.length;++g){C.a.n(p,h,i[g]);++h}}n+=k}H.k(p,"$ib",[t],"$ab")
u=a2.a
f=u.createBuffer()
u.bindBuffer(a0,f)
u.bufferData(a0,new Float32Array(H.cc(p)),35044)
u.bindBuffer(a0,null)
e=new Z.dv(new Z.eo(a0,f),o,a3)
e.sfM(H.d([],[Z.bF]))
if(a.b.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.b.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(0,d.length,b))}if(a.c.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.c.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.c.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(1,d.length,b))}if(a.d.b.length!==0){t=P.p
d=H.d([],[t])
for(m=0;c=a.d.b,m<c.length;++m){c=c[m].a
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].b
c.a.a.w()
C.a.h(d,c.e)
c=a.d.b
if(m>=c.length)return H.h(c,m)
c=c[m].c
c.a.a.w()
C.a.h(d,c.e)}b=Z.ld(u,34963,H.k(d,"$ib",[t],"$ab"))
C.a.h(e.b,new Z.bF(4,d.length,b))}return e},
i:function(a){var u=this,t="   ",s=H.d([],[P.e])
if(u.a.c.length!==0){C.a.h(s,"Vertices:")
C.a.h(s,u.a.H(t))}if(u.b.b.length!==0){C.a.h(s,"Points:")
C.a.h(s,u.b.H(t))}if(u.c.b.length!==0){C.a.h(s,"Lines:")
C.a.h(s,u.c.H(t))}if(u.d.b.length!==0){C.a.h(s,"Faces:")
C.a.h(s,u.d.H(t))}return C.a.m(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.K(null)},
$ipC:1}
F.ib.prototype={
iU:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ah],"$ab")
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
C.a.h(u,F.cw(s,p,o))}}return u},
iV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ah],"$ab")
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
cM:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.b3(0,p,n)){p.b1()
break}}}}},
cL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gj5(s)
if(t)s.b1()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cl())s=!1
return s},
ck:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cj())s=!1
return s},
cw:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.K(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.K(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.K(null)}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
P:function(){return this.H("")},
sfH:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.ic.prototype={
gl:function(a){return this.b.length},
cM:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.b3(0,p,n)){p.b1()
break}}}}},
cL:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.T(s.a,s.b)
if(t)s.b1()}},
i:function(a){return this.P()},
H:function(a){var u,t,s=H.d([],[P.e]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.h(t,u)
C.a.h(s,t[u].H(a+(""+u+". ")))}return C.a.m(s,"\n")},
P:function(){return this.H("")},
sfN:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")}}
F.id.prototype={
gl:function(a){return this.b.length},
jQ:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.N(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.K(null)}s=t.a
if(s!=null){C.a.N(s.b.b,t)
t.a=null}}}},
i:function(a){return this.P()},
H:function(a){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(a))
return C.a.m(r,"\n")},
P:function(){return this.H("")},
sc1:function(a){this.b=H.k(a,"$ib",[F.bK],"$ab")}}
F.ah.prototype={
co:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.en(u.cx,r,o,t,s,q,p,a,n)},
j7:function(){return this.co(null)},
sa4:function(a,b){var u
if(!J.T(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a2()}},
sei:function(a){var u
a=a==null?null:a.C(0,Math.sqrt(a.G(a)))
if(!J.T(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a2()}},
seD:function(a){var u
if(!J.T(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
sdF:function(a){var u
if(!J.T(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a2()}},
jv:function(a){var u,t,s=this
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
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dm())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.u(0,$.dn())){u=s.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.u(0,$.cn()))return H.d([s.ch],[P.r])
else if(a.u(0,$.br())){u=s.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
cl:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d2()
t.d.M(0,new F.jl(s))
s=s.a
t.r=s.C(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
cj:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.d2()
t.d.M(0,new F.jk(s))
s=s.a
t.x=s.C(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.ag(0)}return!0},
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
C.a.h(q,V.R(s.ch,3,0))
u=s.cx
if(u!=null)C.a.h(q,u.i(0))
else C.a.h(q,r)
t=C.a.m(q,", ")
return a+"{"+t+"}"},
P:function(){return this.H("")}}
F.jl.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jk.prototype={
$1:function(a){var u,t
H.f(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.q(0,u)}},
$S:6}
F.jb.prototype={
w:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
C.a.h(t,b)
u.a2()
return!0},
iW:function(a,b,c,d,e,f){var u=F.en(a,null,b,c,d,e,f,null,0)
this.h(0,u)
return u},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cl()
return!0},
ck:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cj()
return!0},
j4:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.C(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.K(null)}}}}return!0},
i:function(a){return this.P()},
H:function(a){var u,t,s,r
this.w()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].H(a))
return C.a.m(u,"\n")},
P:function(){return this.H("")},
siv:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.jc.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
sfI:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
sfJ:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
sfK:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jd.prototype={
$1:function(a){H.f(a,"$ia9")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:6}
F.je.prototype={
$1:function(a){var u
H.f(a,"$ia9")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:6}
F.jf.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.h(t,u)
return t[u]}else{if(b<0)return H.h(t,b)
return t[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sfO:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")},
sfP:function(a){this.c=H.k(a,"$ib",[F.bn],"$ab")}}
F.jh.prototype={}
F.jg.prototype={
b3:function(a,b,c){return J.T(b.f,c.f)}}
F.ji.prototype={}
F.hQ.prototype={
b4:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.d2()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.C(0,Math.sqrt(u.G(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)a[s].sei(u)
return}}
F.jj.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.e])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)C.a.h(r,u[s].H(""))
return C.a.m(r,"\n")},
sc1:function(a){this.b=H.k(a,"$ib",[F.bK],"$ab")}}
O.dQ.prototype={
gA:function(){var u=this.dy
return u==null?this.dy=D.Z():u},
Z:function(a){var u
H.f(a,"$iB")
u=this.dy
if(u!=null)u.K(a)},
c0:function(){return this.Z(null)},
dr:function(a){H.f(a,"$iB")
this.a=null
this.Z(a)},
hZ:function(){return this.dr(null)},
h5:function(a,b){var u=V.ak
H.k(b,"$ii",[u],"$ai")
u=new D.c_([u])
u.b=!0
this.Z(u)},
h7:function(a,b){var u=V.ak
H.k(b,"$ii",[u],"$ai")
u=new D.c0([u])
u.b=!0
this.Z(u)},
d7:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.dx,a5=C.f.a6(a4.e.length+3,4)*4,a6=C.f.a6(a4.f.length+3,4)*4,a7=C.f.a6(a4.r.length+3,4)*4,a8=C.f.a6(a4.x.length+3,4)*4,a9=C.f.a6(a4.y.length+3,4)*4,b0=C.f.a6(a4.z.length+3,4)*4,b1=C.f.a6(a3.e.a.length+3,4)*4
a4=a3.b!=null
u=a3.d!=null
t=a3.f.c
s=a3.r.c
r=a3.x.c
q=a3.y.c
p=a3.z.c
o=a3.Q.c
n=a3.cx.c
m=a3.cy.c
l=a3.db.c
k="MaterialLight_"+C.f.i(t.a)+C.f.i(s.a)+C.f.i(r.a)+C.f.i(q.a)+C.f.i(p.a)+C.f.i(o.a)+C.f.i(n.a)+C.f.i(m.a)+C.f.i(l.a)+"_"
k+=a4?"1":"0"
k+="0"
k=k+(u?"1":"0")+"_"+b1+"_"+a5+"_"+a6+"_"+a7+"_"+a8+"_"+a9+"_"+b0
j=n!==C.d||m!==C.d
i=s!==C.d||r!==C.d||q!==C.d||p!==C.d
h=p===C.d
g=!h||a6+a9>0||j
f=r!==C.d||q!==C.d||!h||o!==C.d||j
h=o===C.d
e=!h
d=t===C.h||s===C.h||r===C.h||q===C.h||p===C.h||o===C.h||n===C.h||m===C.h||l===C.h
c=t===C.i||s===C.i||r===C.i||q===C.i||p===C.i||o===C.i||n===C.i||m===C.i||l===C.i
b=a6+a9+a8+a7+b0>0
a=b1>0
a0=f||!h||g
a1=a4&&d
a2=$.bu()
if(f){a4=$.bt()
a2=new Z.bd(a2.a|a4.a)}if(e){a4=$.bs()
a2=new Z.bd(a2.a|a4.a)}if(d){a4=$.bv()
a2=new Z.bd(a2.a|a4.a)}if(c){a4=$.bw()
a2=new Z.bd(a2.a|a4.a)}if(a){a4=$.br()
a2=new Z.bd(a2.a|a4.a)}return new A.hz(t,s,r,q,p,o,n,m,l,a5,a6,a7,a8,a9,b0,a5+a6+a7+a8+a9+b0,j,j,b,a0,!0,!1,!1,i,b,g,f,e,d,c,a,a1,!1,u,b1,k.charCodeAt(0)==0?k:k,a2)},
X:function(a,b){H.k(a,"$ib",[T.cS],"$ab")
if(b!=null)if(!C.a.W(a,b)){b.a=a.length
C.a.h(a,b)}},
aK:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.ax(u,u.length,[H.u(u,0)]);u.E();){t=u.d
t.toString
s=$.ja
if(s==null)s=$.ja=new V.K(0,0,1)
t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cO(s)}}},
jS:function(a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=this,a4=a3.a
if(a4==null){a4=a3.d7()
u=a5.fr.j(0,a4.al)
if(u==null){u=A.nS(a4,a5.a)
t=u.b
if(t.length===0)H.t(P.w("May not cache a shader with no name."))
if(a5.fr.bm(0,t))H.t(P.w('Shader cache already contains a shader by the name "'+t+'".'))
a5.fr.n(0,t,u)}a4=a3.a=u
a6.e=null}s=a4.z
r=s.bo
a4=a6.e
if(!(a4 instanceof Z.dv))a4=a6.e=null
if(a4==null||!a4.d.u(0,r)){a4=s.r1
if(a4)a6.d.au()
q=s.r2
if(q){p=a6.d
o=p.e
if(o!=null)++o.d
p.d.ck()
p.a.ck()
p=p.e
if(p!=null)p.ag(0)}p=s.ry
if(p){o=a6.d
n=o.e
if(n!=null)++n.d
o.a.j4()
o=o.e
if(o!=null)o.ag(0)}m=a6.d.j3(new Z.jn(a5.a),r)
m.aU($.bu()).e=a3.a.Q.c
if(a4)m.aU($.bt()).e=a3.a.cx.c
if(q)m.aU($.bs()).e=a3.a.ch.c
if(s.rx)m.aU($.bv()).e=a3.a.cy.c
if(p)m.aU($.bw()).e=a3.a.db.c
if(s.x1)m.aU($.br()).e=a3.a.dx.c
a6.e=m}a4=T.cS
l=H.d([],[a4])
q=a3.a
p=a5.a
p.useProgram(q.r)
q.x.jh()
if(s.fx){q=a3.a
o=a5.dx
o=o.ga0(o)
q=q.dy
q.toString
q.an(o.ah(0,!0))}if(s.fy){q=a3.a
o=a5.cx
if(o==null){o=a5.db
o=o.ga0(o)
n=a5.dx
n=a5.cx=o.D(0,n.ga0(n))
o=n}q=q.fr
q.toString
q.an(o.ah(0,!0))}q=a3.a
o=a5.ch
if(o==null){o=a5.gjO()
n=a5.dx
n=a5.ch=o.D(0,n.ga0(n))
o=n}q=q.fy
q.toString
q.an(o.ah(0,!0))
if(s.x2){q=a3.a
o=a3.b
q=q.k1
q.toString
q.an(o.ah(0,!0))}if(s.y1){q=a3.a
o=a3.c
q=q.k2
q.toString
q.an(C.z.ah(o,!0))}if(s.y2){q=a3.a
o=a3.d
q=q.k3
q.toString
q.an(o.ah(0,!0))}if(s.av>0){k=a3.e.a.length
q=a3.a.k4
C.c.a3(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){o=a3.a
n=a3.e.a
if(j>=n.length)return H.h(n,j)
n=n[j]
o.toString
H.f(n,"$iak")
o=o.r1
if(j>=o.length)return H.h(o,j)
o=o[j]
i=new Float32Array(H.cc(H.k(n.ah(0,!0),"$ib",q,"$ab")))
C.c.eI(o.a,o.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=a3.a
o=a3.f.f
q=q.r2
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.X(l,a3.f.d)
q=a3.a
o=a3.f.d
q.ak(q.rx,q.x1,o)
o=a3.a
q=a3.f.f
o=o.r2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.X(l,a3.f.e)
q=a3.a
o=a3.f.e
q.ab(q.ry,q.x1,o)
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
case C.h:a3.X(l,a3.r.d)
q=a3.a
o=a3.r.d
q.ak(q.y1,q.av,o)
o=a3.a
q=a3.r.f
o=o.x2
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.X(l,a3.r.e)
q=a3.a
o=a3.r.e
q.ab(q.y2,q.av,o)
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
q=q.al
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.X(l,a3.x.d)
q=a3.a
o=a3.x.d
q.ak(q.bo,q.bp,o)
o=a3.a
q=a3.x.f
o=o.al
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.X(l,a3.x.e)
q=a3.a
o=a3.x.e
q.ab(q.dL,q.bp,o)
o=a3.a
q=a3.x.f
o=o.al
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.d){case C.d:break
case C.j:q=a3.a
o=a3.y.f
q=q.bq
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
break
case C.h:a3.X(l,a3.y.d)
q=a3.a
o=a3.y.d
q.ak(q.dM,q.br,o)
o=a3.a
q=a3.y.f
o=o.bq
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break
case C.i:a3.X(l,a3.y.e)
q=a3.a
o=a3.y.e
q.ab(q.dN,q.br,o)
o=a3.a
q=a3.y.f
o=o.bq
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
break}switch(s.e){case C.d:break
case C.j:q=a3.a
o=a3.z.f
q=q.bs
q.toString
n=o.a
h=o.b
o=o.c
C.c.v(q.a,q.d,n,h,o)
o=a3.a
h=a3.z.ch
o=o.bu
C.c.S(o.a,o.d,h)
break
case C.h:a3.X(l,a3.z.d)
q=a3.a
o=a3.z.d
q.ak(q.dO,q.bt,o)
o=a3.a
q=a3.z.f
o=o.bs
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bu
C.c.S(q.a,q.d,h)
break
case C.i:a3.X(l,a3.z.e)
q=a3.a
o=a3.z.e
q.ab(q.dP,q.bt,o)
o=a3.a
q=a3.z.f
o=o.bs
o.toString
n=q.a
h=q.b
q=q.c
C.c.v(o.a,o.d,n,h,q)
q=a3.a
h=a3.z.ch
q=q.bu
C.c.S(q.a,q.d,h)
break}if(s.z>0){k=a3.dx.e.length
q=a3.a.e_
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.e,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cq
if(f>=n.length)return H.h(n,f)
c=n[f]
n=g.cO(d.a)
h=n.a
b=n.b
a=n.c
a=n.C(0,Math.sqrt(h*h+b*b+a*a))
b=c.b
h=a.a
n=a.b
a=a.c
C.c.v(b.a,b.d,h,n,a)
a=d.c
n=c.c
C.c.v(n.a,n.d,a.a,a.b,a.c);++f}}if(s.Q>0){k=a3.dx.f.length
q=a3.a.e0
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.f,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cr
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gb7(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.ba(d.gb7(d))
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.ga9(d)
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gcc()
h=c.e
C.c.S(h.a,h.d,n)
n=d.gcd()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gce()
h=c.r
C.c.S(h.a,h.d,n);++f}}if(s.ch>0){k=a3.dx.r.length
q=a3.a.e1
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.r,o=q.length,f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cs
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gb7(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gcp(d).kj()
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.ba(d.gb7(d))
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.ga9(d)
h=c.e
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gkg()
h=c.f
C.c.S(h.a,h.d,n)
n=d.gkf()
h=c.r
C.c.S(h.a,h.d,n)
n=d.gcc()
h=c.x
C.c.S(h.a,h.d,n)
n=d.gcd()
h=c.y
C.c.S(h.a,h.d,n)
n=d.gce()
h=c.z
C.c.S(h.a,h.d,n);++f}}if(s.cx>0){k=a3.dx.x.length
q=a3.a.e2
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.x,o=q.length,n=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
h=a3.a.ct
if(f>=h.length)return H.h(h,f)
c=h[f]
h=d.gb8()
H.k(l,"$ib",n,"$ab")
if(!C.a.W(l,h)){h.a=l.length
C.a.h(l,h)}h=d.gcp(d)
b=c.d
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gk8()
b=c.b
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=d.gbG(d)
b=c.c
C.c.v(b.a,b.d,h.a,h.b,h.c)
h=g.cO(d.gcp(d))
b=h.a
a=h.b
a0=h.c
a0=h.C(0,Math.sqrt(b*b+a*a+a0*a0))
a=c.e
b=a0.a
h=a0.b
a0=a0.c
C.c.v(a.a,a.d,b,h,a0)
a0=d.ga9(d)
h=c.f
C.c.v(h.a,h.d,a0.a,a0.b,a0.c)
a0=d.gb8()
h=a0.gcF(a0)
if(!h){h=c.x
C.c.a3(h.a,h.d,1)}else{h=c.r
b=a0.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,a0.a)
h=c.x
C.c.a3(h.a,h.d,0)}++f}}if(s.cy>0){k=a3.dx.y.length
q=a3.a.e3
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.y,o=q.length,n=[P.r],h=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
b=a3.a.cu
if(f>=b.length)return H.h(b,f)
c=b[f]
b=d.gb8()
H.k(l,"$ib",h,"$ab")
if(!C.a.W(l,b)){b.a=l.length
C.a.h(l,b)}a1=g.D(0,d.ga0(d))
b=d.ga0(d)
a=$.cK
b=b.ba(a==null?$.cK=new V.a5(0,0,0):a)
a=c.b
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=$.cK
b=a1.ba(b==null?$.cK=new V.a5(0,0,0):b)
a=c.c
C.c.v(a.a,a.d,b.a,b.b,b.c)
b=a1.ed(0)
a=c.d
i=new Float32Array(H.cc(H.k(new V.c2(b.a,b.b,b.c,b.e,b.f,b.r,b.y,b.z,b.Q).ah(0,!0),"$ib",n,"$ab")))
C.c.eH(a.a,a.d,!1,i)
a=d.ga9(d)
b=c.e
C.c.v(b.a,b.d,a.a,a.b,a.c)
a=d.gb8()
b=a.gcF(a)
if(!b){b=c.r
C.c.a3(b.a,b.d,1)}else{b=c.f
a0=a.gcF(a)
a2=b.a
b=b.d
if(!a0)a2.uniform1i(b,0)
else a2.uniform1i(b,a.gkh(a))
b=c.r
C.c.a3(b.a,b.d,0)}b=d.gcc()
a=c.x
C.c.S(a.a,a.d,b)
b=d.gcd()
a=c.y
C.c.S(a.a,a.d,b)
b=d.gce()
a=c.z
C.c.S(a.a,a.d,b);++f}}if(s.db>0){k=a3.dx.z.length
q=a3.a.e4
C.c.a3(q.a,q.d,k)
q=a5.db
g=q.ga0(q)
for(q=a3.dx.z,o=q.length,a4=[a4],f=0,e=0;e<q.length;q.length===o||(0,H.D)(q),++e){d=q[e]
n=a3.a.cv
if(f>=n.length)return H.h(n,f)
c=n[f]
n=d.gb8()
H.k(l,"$ib",a4,"$ab")
if(!C.a.W(l,n)){n.a=l.length
C.a.h(l,n)}n=d.gb7(d)
h=c.b
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gcp(d)
h=c.c
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gk8()
h=c.d
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gbG(d)
h=c.e
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=g.ba(d.gb7(d))
h=c.f
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gb8()
h=n.gcF(n)
if(!h){n=c.x
C.c.a3(n.a,n.d,1)}else{h=c.r
b=n.d
a=h.a
h=h.d
if(!b)a.uniform1i(h,0)
else a.uniform1i(h,n.a)
n=c.x
C.c.a3(n.a,n.d,0)}n=d.ga9(d)
h=c.y
C.c.v(h.a,h.d,n.a,n.b,n.c)
n=d.gkk()
h=c.z
C.c.S(h.a,h.d,n)
n=d.gkl()
h=c.Q
C.c.S(h.a,h.d,n)
n=d.gcc()
h=c.ch
C.c.S(h.a,h.d,n)
n=d.gcd()
h=c.cx
C.c.S(h.a,h.d,n)
n=d.gce()
h=c.cy
C.c.S(h.a,h.d,n);++f}}}switch(s.f){case C.d:break
case C.j:break
case C.h:a3.X(l,a3.Q.d)
a4=a3.a
q=a3.Q.d
a4.ak(a4.dQ,a4.bv,q)
break
case C.i:a3.X(l,a3.Q.e)
a4=a3.a
q=a3.Q.e
a4.ab(a4.dR,a4.bv,q)
break}if(s.fr){a4=a3.a
q=a5.Q
if(q==null){q=a5.db
q=a5.Q=q.ga0(q).ed(0)}a4=a4.id
a4.toString
a4.an(q.ah(0,!0))}if(s.dy){a3.X(l,a3.ch)
a4=a3.a
q=a3.ch
a4.ab(a4.dS,a4.dT,q)
switch(s.r){case C.d:break
case C.j:a4=a3.a
q=a3.cx.f
a4=a4.bw
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
break
case C.h:a3.X(l,a3.cx.d)
a4=a3.a
q=a3.cx.d
a4.ak(a4.dU,a4.bx,q)
q=a3.a
a4=a3.cx.f
q=q.bw
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break
case C.i:a3.X(l,a3.cx.e)
a4=a3.a
q=a3.cx.e
a4.ab(a4.dV,a4.bx,q)
q=a3.a
a4=a3.cx.f
q=q.bw
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
break}switch(s.x){case C.d:break
case C.j:a4=a3.a
q=a3.cy.f
a4=a4.bz
a4.toString
o=q.a
n=q.b
q=q.c
C.c.v(a4.a,a4.d,o,n,q)
q=a3.a
n=a3.cy.ch
q=q.by
C.c.S(q.a,q.d,n)
break
case C.h:a3.X(l,a3.cy.d)
a4=a3.a
q=a3.cy.d
a4.ak(a4.dW,a4.bA,q)
q=a3.a
a4=a3.cy.f
q=q.bz
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.by
C.c.S(a4.a,a4.d,n)
break
case C.i:a3.X(l,a3.cy.e)
a4=a3.a
q=a3.cy.e
a4.ab(a4.dX,a4.bA,q)
q=a3.a
a4=a3.cy.f
q=q.bz
q.toString
o=a4.a
n=a4.b
a4=a4.c
C.c.v(q.a,q.d,o,n,a4)
a4=a3.a
n=a3.cy.ch
a4=a4.by
C.c.S(a4.a,a4.d,n)
break}}a4=s.y
q=a4!==C.d
if(q){switch(a4){case C.d:break
case C.j:a4=a3.a
o=a3.db.f
a4=a4.bB
C.c.S(a4.a,a4.d,o)
break
case C.h:a3.X(l,a3.db.d)
a4=a3.a
o=a3.db.d
a4.ak(a4.dY,a4.bC,o)
o=a3.a
a4=a3.db.f
o=o.bB
C.c.S(o.a,o.d,a4)
break
case C.i:a3.X(l,a3.db.e)
a4=a3.a
o=a3.db.e
a4.ab(a4.dZ,a4.bC,o)
o=a3.a
a4=a3.db.f
o=o.bB
C.c.S(o.a,o.d,a4)
break}p.enable(3042)
p.blendFunc(770,771)}for(j=0;j<l.length;++j){a4=l[j]
if(!a4.c&&a4.d){a4.c=!0
p.activeTexture(33984+a4.a)
p.bindTexture(3553,a4.b)}}a4=a6.e
a4.cf(a5)
a4.aV(a5)
a4.k7(a5)
if(q)p.disable(3042)
for(j=0;j<l.length;++j){a4=l[j]
if(a4.c){a4.c=!1
p.activeTexture(33984+a4.a)
p.bindTexture(3553,null)}}a4=a3.a
a4.toString
p.useProgram(null)
a4.x.jd()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d7().al},
sfs:function(a){this.e=H.k(a,"$ia6",[V.ak],"$aa6")}}
O.hx.prototype={}
O.cD.prototype={
Z:function(a){this.a.Z(H.f(a,"$iB"))},
c0:function(){return this.Z(null)},
aD:function(){},
i4:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gA().N(0,t.gbi())
u=t.d
t.d=a
if(a!=null)a.gA().h(0,t.gbi())
s=new D.O(t.b+".texture2D",u,t.d,[T.ea])
s.b=!0
t.a.Z(s)}},
i5:function(a){}}
O.hy.prototype={}
O.b5.prototype={
dt:function(a){var u,t,s=this
if(!J.T(s.f,a)){u=s.f
s.f=a
t=new D.O(s.b+".color",u,a,[V.a2])
t.b=!0
s.a.Z(t)}},
aD:function(){this.eY()
this.dt(new V.a2(1,1,1))},
sa9:function(a,b){var u,t=this
if(t.c===C.d){t.c=C.j
t.aD()
u=t.a
u.a=null
u.Z(null)}t.dt(b)}}
O.hA.prototype={
i3:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.O(u.b+".refraction",t,a,[P.r])
t.b=!0
u.a.Z(t)}},
aD:function(){this.bN()
this.i3(1)}}
O.hB.prototype={
c6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.M().a)){u.ch=a
t=new D.O(u.b+".shininess",t,a,[P.r])
t.b=!0
u.a.Z(t)}},
aD:function(){this.bN()
this.c6(100)}}
O.c9.prototype={}
T.cS.prototype={}
T.ea.prototype={}
T.iB.prototype={
gA:function(){var u=this.y
return u==null?this.y=D.Z():u}}
T.iC.prototype={
jw:function(a,b){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,10497)
r.texParameteri(s,10243,10497)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iB()
t.a=0
t.b=q
t.d=t.c=!1
r=W.o
W.ab(u,"load",H.n(new T.iD(this,t,u,!1,q,!1,!1),{func:1,ret:-1,args:[r]}),!1,r)
return t},
i_:function(a,b,c){var u,t,s,r
b=V.lu(b)
u=V.lu(a.width)
t=V.lu(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kX()
s.width=u
s.height=t
r=H.f(C.m.eO(s,"2d"),"$icr")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.p_(r.getImageData(0,0,s.width,s.height))}}}
T.iD.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.i_(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.c.jY(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.jg()}++s.e},
$S:12}
V.bh.prototype={
aH:function(a,b){return!0},
i:function(a){return"all"},
$iaz:1}
V.az.prototype={}
V.dP.prototype={
aH:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aH(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa8:function(a){this.a=H.k(a,"$ib",[V.az],"$ab")},
$iaz:1}
V.au.prototype={
aH:function(a,b){return!this.eX(0,b)},
i:function(a){return"!["+this.cU(0)+"]"}}
V.i1.prototype={
aH:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u=H.c5(this.a),t=H.c5(this.b)
return u+".."+t},
$iaz:1}
V.ia.prototype={
f2:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.p,P.V])
for(t=new H.cC(a,a.gl(a),[H.as(a,"z",0)]);t.E();)u.n(0,t.d,!0)
this.si2(u)},
aH:function(a,b){return this.a.bm(0,b)},
i:function(a){var u=this.a
return P.cQ(u.ga7(u),0,null)},
si2:function(a){this.a=H.k(a,"$iF",[P.p,P.V],"$aF")},
$iaz:1}
V.cO.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cU(this.a.k(0,b))
r.sa8(H.d([],[V.az]))
r.c=!1
C.a.h(this.c,r)
return r},
jk:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aH(0,a))return r}return},
i:function(a){return this.b},
siq:function(a){this.c=H.k(a,"$ib",[V.cU],"$ab")}}
V.ef.prototype={
i:function(a){var u=H.lw(this.b,"\n","\\n"),t=H.lw(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cT.prototype={
aJ:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
shV:function(a){var u=P.e
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.iG.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cO(this,b)
u.siq(H.d([],[V.cU]))
u.d=null
this.a.n(0,b,u)}return u},
R:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new V.cT(a)
u=P.e
t.shV(new H.aP([u,u]))
this.b.n(0,a,t)}return t},
eG:function(a){var u,t,s,r,q,p,o,n,m=null,l=H.d([],[V.ef]),k=this.c,j=[P.p],i=H.d([],j)
for(u=a.length,t=m,s=0;!0;){if(s>=u){if(t!=null)C.a.h(l,t)
return l}r=C.b.F(a,s)
q=k.jk(r)
if(q==null){if(t==null){C.a.h(i,r)
p=P.cQ(i,0,m)
throw H.c(P.w("Untokenizable string [state: "+k.b+", index "+s+']: "'+p+'"'))}C.a.h(l,t)
s=t.c+1
i=H.d([],j)
k=this.c
t=m}else{if(!q.c)C.a.h(i,r)
k=q.b
if(k.d!=null){p=P.cQ(i,0,m)
o=k.d
n=o.c.j(0,p)
t=new V.ef(n==null?o.b:n,p,s)}++s}}},
sie:function(a){this.a=H.k(a,"$iF",[P.e,V.cO],"$aF")},
sii:function(a){this.b=H.k(a,"$iF",[P.e,V.cT],"$aF")}}
V.cU.prototype={
i:function(a){return this.b.b+": "+this.cU(0)}}
X.dx.prototype={$ibo:1}
X.h6.prototype={
gA:function(){var u=this.x
return u==null?this.x=D.Z():u}}
X.dX.prototype={
gA:function(){var u=this.f
return u==null?this.f=D.Z():u},
aO:function(a){var u
H.f(a,"$iB")
u=this.f
if(u!=null)u.K(a)},
fk:function(){return this.aO(null)},
sae:function(a){var u,t,s=this
if(!J.T(s.b,a)){u=s.b
if(u!=null)u.gA().N(0,s.gcZ())
t=s.b
s.b=a
if(a!=null)a.gA().h(0,s.gcZ())
u=new D.O("mover",t,s.b,[U.al])
u.b=!0
s.aO(u)}},
$ibo:1,
$idx:1}
X.e8.prototype={}
V.bA.prototype={
be:function(a){this.b=new P.ha(C.U)
this.c=null
this.sbW(H.d([],[[P.b,W.aE]]))},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)C.a.h(l,H.d([],[W.aE]))
u=a.split("\n")
for(l=u.length,t=[W.aE],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else C.a.h(m.d,H.d([],t))
p=document.createElement("div")
p.className="codePart"
H.I(q)
o=m.b.fz(q,0,q.length)
n=o==null?q:o
C.S.eR(p,H.lw(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.h(C.a.gaw(m.d),p)}},
ep:function(a,b){var u,t,s,r,q=this
H.k(b,"$ib",[P.e],"$ab")
q.sbW(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=q.c
for(t=(t==null?q.c=q.bn():t).eG(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)q.bF(t[r])},
sbW:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kO.prototype={
$1:function(a){var u
H.f(a,"$iba")
u=C.e.eF(this.a.gjo(),2)
if(u!=="0.00")P.lv(u+" fps")},
$S:50}
V.fN.prototype={
bF:function(a){var u=this
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=V.iH()
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
C.a.h(a1.k(0,k).m(0,k).a,new V.bh())
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
C.a.h(a1.k(0,h).m(0,h).a,new V.bh())
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
t=new V.au()
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
t=new V.au()
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
t.aJ(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aJ(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aJ(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.h7.prototype={
bF:function(a){var u=this
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
bn:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=V.iH()
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
C.a.h(e.k(0,k).m(0,m).a,new V.bh())
t=e.k(0,j).m(0,i)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,j).m(0,j)
t=new V.au()
s=[V.az]
t.sa8(H.d([],s))
C.a.h(u.a,t)
u=V.x(new H.v("\n"))
C.a.h(t.a,u)
u=e.k(0,r).m(0,h)
t=V.x(new H.v("#"))
C.a.h(u.a,t)
t=e.k(0,h).m(0,h)
u=new V.au()
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
u.aJ(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aJ(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aJ(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return e}}
V.h8.prototype={
bF:function(a){var u=this,t="#111"
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
bn:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=V.iH()
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
C.a.h(l.k(0,o).m(0,o).a,new V.bh())
C.a.h(l.k(0,s).m(0,m).a,new V.bh())
u=l.k(0,m).m(0,m)
t=new V.au()
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
t.aJ(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
t=l.k(0,q)
t.d=t.a.R(q)
t=l.k(0,m)
t.d=t.a.R(m)
return l}}
V.hW.prototype={
ep:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sbW(H.d([],[[P.b,W.aE]]))
this.O(C.a.m(b,"\n"),"#111")},
bF:function(a){},
bn:function(){return}}
V.i_.prototype={
dB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
H.n(c,{func:1,ret:-1})
if(m.c==null)return
u=m.a
t=P.me().gcJ().j(0,H.l(u))
if(t==null)if(d){c.$0()
m.dz(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lD(m.c).h(0,q)
o=W.nG("radio")
o.checked=s
o.name=u
u=W.o
W.ab(o,"change",H.n(new V.i0(m,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lD(m.c).h(0,r.createElement("br"))},
b0:function(a,b,c){return this.dB(a,b,c,!1)},
dz:function(a){var u,t,s=P.me(),r=P.e,q=P.nO(s.gcJ(),r,r)
q.n(0,this.a,a)
u=s.ex(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.k0([],[]).cP(""),"",t)}}
V.i0.prototype={
$1:function(a){var u=this
if(H.H(u.b.checked)){u.c.$0()
u.a.dz(u.d)}},
$S:12}
V.ie.prototype={
f4:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.ab(q,"scroll",H.n(new V.ih(o),{func:1,ret:-1,args:[r]}),!1,r)},
dD:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.i8()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eG(C.a.ju(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
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
if(H.pr(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.I(m[1])
l.textContent=H.I(m[0])
t.appendChild(l)}else{k=P.f9(C.C,n,C.l,!1)
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
eN:function(a){var u,t,s,r=new V.fN("dart")
r.be("dart")
u=new V.h7("glsl")
u.be("glsl")
t=new V.h8("html")
t.be("html")
s=C.a.jm(H.d([r,u,t],[V.bA]),new V.ii(a))
if(s!=null)return s
r=new V.hW("plain")
r.be("plain")
return r},
dC:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="codeTableRow",a5="codeLineNums",a6="codeLineText"
H.k(b0,"$ib",[P.e],"$ab")
u=H.d([],[P.p])
for(t=!1,s=0;s<b0.length;++s){r=b0[s]
if(J.dl(r).a5(r,"+")){C.a.n(b0,s,C.b.ao(r,1))
C.a.h(u,1)
t=!0}else if(C.b.a5(r,"-")){C.a.n(b0,s,C.b.ao(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.eN(a8)
q.ep(0,b0)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
o.appendChild(n)
this.a.appendChild(o)
m=P.f9(C.C,a7,C.l,!1)
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
a.className=a6
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.a3.iZ(a,r[a0])
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
for(a3=C.a.gV(r);a3.E();)c.appendChild(a3.gL(a3))
e.appendChild(d)
e.appendChild(c)
n.appendChild(e)}},
iS:function(a){var u,t,s,r,q,p,o,n="auto"
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
s=H.f(r.insertCell(-1),"$ib9").style
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
o=H.f(r.insertCell(-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft=n
s.marginRight=n
o.appendChild(p)}},
i8:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=V.iH()
u.c=u.k(0,q)
t=u.k(0,q).m(0,p)
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,p).m(0,p)
s=new V.au()
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
s=new V.au()
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
s=new V.au()
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
t=new V.au()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,k).m(0,j)
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,k).m(0,k)
t=new V.au()
t.sa8(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,q).m(0,i).a,new V.bh())
s=u.k(0,i).m(0,i)
t=new V.au()
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
V.ih.prototype={
$1:function(a){P.ma(C.r,new V.ig(this.a))},
$S:12}
V.ig.prototype={
$0:function(){var u=C.e.am(document.documentElement.scrollTop),t=this.a.style,s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ii.prototype={
$1:function(a){return H.f(a,"$ibA").a===this.a},
$S:51}
K.kE.prototype={
$1:function(a){var u,t,s,r,q=H.m(H.f(a,"$iB"),"$ie6").c,p=this.a,o=this.b.ay(0,q,null)
if(!J.T(p.d,o)){u=p.d
t=u==null
s=o==null
if(!(!t&&s))t=t&&!s
else t=!0
if(t)p.a=null
p.d=o
o=new D.O("colorMatrix",u,o,[V.ak])
o.b=!0
p.Z(o)}r=V.nT(this.c.ay(0,q,null))
if(!J.T(p.b,r)){o=p.b
u=o==null&&!0
if(u)p.a=null
p.b=r
o=new D.O("texture2DMatrix",o,r,[V.c2])
o.b=!0
p.Z(o)}},
$S:5}
K.kF.prototype={
$0:function(){this.a.sai(0,F.lq(1,null,null,1))},
$S:0}
K.kG.prototype={
$0:function(){this.a.sai(0,F.mL(!0,40,1))},
$S:0}
K.kH.prototype={
$0:function(){this.a.sai(0,F.mL(!1,40,0))},
$S:0}
K.kI.prototype={
$0:function(){this.a.sai(0,F.pq(6,6))},
$S:0}
K.kJ.prototype={
$0:function(){this.a.sai(0,F.mZ())},
$S:0}
K.kK.prototype={
$0:function(){this.a.sai(0,F.ph())},
$S:0}
K.kL.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dC("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dC("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.eU=u.i
u=J.dJ.prototype
u.eW=u.i
u=P.i.prototype
u.eV=u.bI
u=W.X.prototype
u.bM=u.ac
u=W.eS.prototype
u.eZ=u.at
u=O.cD.prototype
u.eY=u.aD
u=O.b5.prototype
u.bN=u.aD
u=V.dP.prototype
u.eX=u.aH
u.cU=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"oU","on",11)
u(P,"oV","oo",11)
u(P,"oW","op",11)
t(P,"mK","oS",3)
s(W,"pa",4,null,["$4"],["or"],20,0)
s(W,"pb",4,null,["$4"],["os"],20,0)
var m
r(m=E.ao.prototype,"gen",0,0,null,["$1","$0"],["eo","jG"],1,0)
r(m,"gel",0,0,null,["$1","$0"],["em","jF"],1,0)
r(m,"gej",0,0,null,["$1","$0"],["ek","jC"],1,0)
q(m,"gjA","jB",10)
q(m,"gjD","jE",10)
r(m=E.ee.prototype,"gcV",0,0,null,["$1","$0"],["cX","cW"],1,0)
p(m,"gjU","ey",3)
o(m=X.el.prototype,"ghk","hl",14)
o(m,"gh8","h9",14)
o(m,"ghe","hf",4)
o(m,"gho","hp",26)
o(m,"ghm","hn",26)
o(m,"ghs","ht",4)
o(m,"ghw","hx",4)
o(m,"ghi","hj",4)
o(m,"ghu","hv",4)
o(m,"ghg","hh",4)
o(m,"ghy","hz",36)
o(m,"ghA","hB",14)
o(m,"ghN","hO",13)
o(m,"ghJ","hK",13)
o(m,"ghL","hM",13)
r(D.bC.prototype,"gcY",0,0,null,["$1","$0"],["az","f9"],1,0)
r(m=D.dL.prototype,"gdk",0,0,null,["$1","$0"],["dl","hq"],1,0)
o(m,"ghD","hE",38)
q(m,"gh2","h3",18)
q(m,"ghH","hI",18)
n(V.a4.prototype,"gl","cD",30)
n(V.K.prototype,"gl","cD",30)
r(m=U.cz.prototype,"gbf",0,0,null,["$1","$0"],["T","ap"],1,0)
q(m,"gh0","h1",29)
q(m,"ghF","hG",29)
r(m=U.em.prototype,"gbf",0,0,null,["$1","$0"],["T","ap"],1,0)
o(m,"gfV","fW",2)
o(m,"gfX","fY",2)
o(m,"gfZ","h_",2)
o(m,"gfR","fS",2)
o(m,"gfT","fU",2)
o(m,"gio","ip",2)
o(m,"gil","im",2)
o(m,"gij","ik",2)
r(m=M.dD.prototype,"gaq",0,0,null,["$1","$0"],["aA","fa"],1,0)
q(m,"gha","hb",10)
q(m,"ghc","hd",10)
r(m=O.dQ.prototype,"gbi",0,0,null,["$1","$0"],["Z","c0"],1,0)
r(m,"ghY",0,0,null,["$1","$0"],["dr","hZ"],1,0)
q(m,"gh4","h5",19)
q(m,"gh6","h7",19)
r(O.cD.prototype,"gbi",0,0,null,["$1","$0"],["Z","c0"],1,0)
r(X.dX.prototype,"gcZ",0,0,null,["$1","$0"],["aO","fk"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.l2,J.a,J.ax,P.eF,P.i,H.cC,P.b2,H.bY,H.d1,H.fG,H.iM,P.bD,H.cs,H.eX,P.ad,H.hk,H.hm,H.hf,P.f2,P.bf,P.aJ,P.ep,P.ir,P.cP,P.is,P.ba,P.an,P.kg,P.jV,P.ca,P.eE,P.z,P.k8,P.hs,P.bV,P.hb,P.ke,P.kd,P.V,P.ay,P.ac,P.b1,P.hU,P.e5,P.ex,P.h5,P.bE,P.b,P.F,P.N,P.av,P.e,P.ag,P.cb,P.j1,P.jY,W.fJ,W.bO,W.E,W.dV,W.eS,W.k3,W.dF,W.aA,W.jU,W.fa,P.k_,P.f7,P.jP,P.U,O.a6,O.cE,E.fA,E.ao,E.i2,D.B,E.ee,Z.eo,Z.jn,Z.dv,Z.bF,Z.bd,D.fD,D.bX,X.dw,X.dK,X.hh,X.hp,X.bH,X.hI,X.iI,X.el,D.bC,D.a8,D.dY,D.e4,D.eb,D.ec,D.ed,V.a2,V.aM,V.fX,V.c2,V.ak,V.aa,V.a5,V.b8,V.e0,V.a4,V.K,U.em,M.dD,A.ds,A.ft,A.hz,A.cV,A.cZ,A.cX,A.d_,A.cY,A.d0,A.bW,A.eh,A.iW,F.a9,F.h_,F.bn,F.hj,F.bK,F.e3,F.ib,F.ic,F.id,F.ah,F.jb,F.jc,F.jf,F.jh,F.ji,F.jj,O.c9,O.cD,T.iC,V.bh,V.az,V.dP,V.i1,V.ia,V.cO,V.ef,V.cT,V.iG,X.dx,X.e8,X.dX,V.bA,V.i_,V.ie])
s(J.a,[J.he,J.dI,J.dJ,J.aO,J.bG,J.bl,H.cG,H.bJ,W.j,W.fq,W.bT,W.cr,W.b_,W.b0,W.Y,W.er,W.fO,W.fP,W.et,W.dC,W.ev,W.fR,W.o,W.ey,W.aN,W.h9,W.eA,W.bk,W.dN,W.hC,W.eG,W.eH,W.aQ,W.eI,W.eL,W.aR,W.eP,W.eR,W.aT,W.eT,W.aU,W.eY,W.aG,W.f0,W.iF,W.aW,W.f3,W.iK,W.j6,W.fb,W.fd,W.ff,W.fh,W.fj,P.b4,P.eC,P.b7,P.eN,P.hZ,P.eZ,P.bb,P.f5,P.fu,P.eq,P.dt,P.dZ,P.c7,P.e2,P.e9,P.ei,P.eV])
s(J.dJ,[J.hV,J.bN,J.bm])
t(J.l1,J.aO)
s(J.bG,[J.dH,J.dG])
t(P.ho,P.eF)
s(P.ho,[H.ej,W.jv,W.ar,P.h1])
t(H.v,H.ej)
s(P.i,[H.fU,H.ht,H.d3])
s(H.fU,[H.c1,H.hl])
s(P.b2,[H.hu,H.jo])
t(H.hv,H.c1)
t(H.fH,H.fG)
s(P.bD,[H.hR,H.hg,H.j_,H.iO,H.fC,H.i8,P.fs,P.dW,P.aL,P.j0,P.iY,P.c8,P.fF,P.fM])
s(H.cs,[H.kS,H.iy,H.ky,H.kz,H.kA,P.jr,P.jq,P.js,P.jt,P.k7,P.k6,P.jC,P.jG,P.jD,P.jE,P.jF,P.jJ,P.jK,P.jI,P.jH,P.it,P.iu,P.ko,P.jS,P.jR,P.jT,P.hn,P.hr,P.fS,P.fT,P.j5,P.j2,P.j3,P.j4,P.k9,P.ka,P.kc,P.kb,P.kk,P.kj,P.kl,P.km,W.fV,W.hE,W.hG,W.i7,W.iq,W.jB,W.hP,W.hO,W.jW,W.jX,W.k5,W.kf,P.k1,P.kq,P.h2,P.h3,P.fw,E.i3,E.i4,E.i5,E.iE,D.fY,D.fZ,F.kh,F.kr,F.kt,F.ku,F.kv,F.kP,F.kQ,F.kR,F.kC,F.ks,F.jl,F.jk,F.jd,F.je,T.iD,V.kO,V.i0,V.ih,V.ig,V.ii,K.kE,K.kF,K.kG,K.kH,K.kI,K.kJ,K.kK,K.kL])
s(H.iy,[H.io,H.cp])
t(H.jp,P.fs)
t(P.hq,P.ad)
s(P.hq,[H.aP,W.ju])
t(H.dS,H.bJ)
s(H.dS,[H.d8,H.da])
t(H.d9,H.d8)
t(H.cH,H.d9)
t(H.db,H.da)
t(H.dT,H.db)
s(H.dT,[H.hJ,H.hK,H.hL,H.hM,H.hN,H.dU,H.cI])
t(P.jQ,P.kg)
t(P.jO,P.jV)
t(P.f8,P.hs)
t(P.ek,P.f8)
s(P.bV,[P.fy,P.fW])
t(P.bB,P.is)
s(P.bB,[P.fz,P.ha,P.j9,P.j8])
t(P.j7,P.fW)
s(P.ac,[P.r,P.p])
s(P.aL,[P.c6,P.hc])
t(P.jx,P.cb)
s(W.j,[W.C,W.h0,W.cF,W.aS,W.dc,W.aV,W.aH,W.de,W.jm,W.d4,P.fx,P.bS])
s(W.C,[W.X,W.bz,W.d5])
s(W.X,[W.y,P.q])
s(W.y,[W.dq,W.fr,W.co,W.by,W.bU,W.aE,W.h4,W.cA,W.cB,W.i9,W.b9,W.e7,W.iw,W.ix,W.cR])
s(W.b_,[W.ct,W.fK,W.fL])
t(W.fI,W.b0)
t(W.cu,W.er)
t(W.eu,W.et)
t(W.dB,W.eu)
t(W.ew,W.ev)
t(W.fQ,W.ew)
t(W.aF,W.bT)
t(W.ez,W.ey)
t(W.cx,W.ez)
t(W.eB,W.eA)
t(W.bZ,W.eB)
t(W.bM,W.o)
s(W.bM,[W.b3,W.ae,W.aX])
t(W.hD,W.eG)
t(W.hF,W.eH)
t(W.eJ,W.eI)
t(W.hH,W.eJ)
t(W.eM,W.eL)
t(W.cJ,W.eM)
t(W.eQ,W.eP)
t(W.hX,W.eQ)
t(W.i6,W.eR)
t(W.dd,W.dc)
t(W.ik,W.dd)
t(W.eU,W.eT)
t(W.il,W.eU)
t(W.ip,W.eY)
t(W.f1,W.f0)
t(W.iz,W.f1)
t(W.df,W.de)
t(W.iA,W.df)
t(W.f4,W.f3)
t(W.iJ,W.f4)
t(W.be,W.ae)
t(W.fc,W.fb)
t(W.jw,W.fc)
t(W.es,W.dC)
t(W.fe,W.fd)
t(W.jL,W.fe)
t(W.fg,W.ff)
t(W.eK,W.fg)
t(W.fi,W.fh)
t(W.jZ,W.fi)
t(W.fk,W.fj)
t(W.k2,W.fk)
t(W.jy,W.ju)
t(W.jz,P.ir)
t(W.le,W.jz)
t(W.jA,P.cP)
t(W.k4,W.eS)
t(P.k0,P.k_)
t(P.am,P.jP)
t(P.eD,P.eC)
t(P.hi,P.eD)
t(P.eO,P.eN)
t(P.hS,P.eO)
t(P.cM,P.q)
t(P.f_,P.eZ)
t(P.iv,P.f_)
t(P.f6,P.f5)
t(P.iL,P.f6)
t(P.fv,P.eq)
t(P.hT,P.bS)
t(P.eW,P.eV)
t(P.im,P.eW)
s(D.B,[E.e6,D.c_,D.c0,D.O,X.hY])
s(E.fA,[Z.du,A.cN,T.cS])
s(X.hY,[X.dO,X.bI,X.eg])
s(O.a6,[D.dL,U.cz])
s(D.fD,[U.fE,U.al])
s(U.al,[U.dy,U.e1])
t(A.hw,A.cN)
s(A.eh,[A.Q,A.iS,A.iT,A.iV,A.iQ,A.a3,A.iR,A.P,A.iU,A.iX,A.cW,A.aB,A.ap,A.aq])
t(F.ij,F.h_)
t(F.iP,F.hj)
t(F.jg,F.jh)
t(F.hQ,F.ji)
t(O.dQ,O.c9)
s(O.cD,[O.hx,O.hy,O.b5])
s(O.b5,[O.hA,O.hB])
t(T.ea,T.cS)
t(T.iB,T.ea)
s(V.dP,[V.au,V.cU])
t(X.h6,X.e8)
s(V.bA,[V.fN,V.h7,V.h8,V.hW])
u(H.ej,H.d1)
u(H.d8,P.z)
u(H.d9,H.bY)
u(H.da,P.z)
u(H.db,H.bY)
u(P.eF,P.z)
u(P.f8,P.k8)
u(W.er,W.fJ)
u(W.et,P.z)
u(W.eu,W.E)
u(W.ev,P.z)
u(W.ew,W.E)
u(W.ey,P.z)
u(W.ez,W.E)
u(W.eA,P.z)
u(W.eB,W.E)
u(W.eG,P.ad)
u(W.eH,P.ad)
u(W.eI,P.z)
u(W.eJ,W.E)
u(W.eL,P.z)
u(W.eM,W.E)
u(W.eP,P.z)
u(W.eQ,W.E)
u(W.eR,P.ad)
u(W.dc,P.z)
u(W.dd,W.E)
u(W.eT,P.z)
u(W.eU,W.E)
u(W.eY,P.ad)
u(W.f0,P.z)
u(W.f1,W.E)
u(W.de,P.z)
u(W.df,W.E)
u(W.f3,P.z)
u(W.f4,W.E)
u(W.fb,P.z)
u(W.fc,W.E)
u(W.fd,P.z)
u(W.fe,W.E)
u(W.ff,P.z)
u(W.fg,W.E)
u(W.fh,P.z)
u(W.fi,W.E)
u(W.fj,P.z)
u(W.fk,W.E)
u(P.eC,P.z)
u(P.eD,W.E)
u(P.eN,P.z)
u(P.eO,W.E)
u(P.eZ,P.z)
u(P.f_,W.E)
u(P.f5,P.z)
u(P.f6,W.E)
u(P.eq,P.ad)
u(P.eV,P.z)
u(P.eW,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.w=W.by.prototype
C.m=W.bU.prototype
C.S=W.aE.prototype
C.V=J.a.prototype
C.a=J.aO.prototype
C.W=J.dG.prototype
C.f=J.dH.prototype
C.z=J.dI.prototype
C.e=J.bG.prototype
C.b=J.bl.prototype
C.X=J.bm.prototype
C.a2=W.cJ.prototype
C.F=J.hV.prototype
C.c=P.c7.prototype
C.a3=W.b9.prototype
C.G=W.e7.prototype
C.v=J.bN.prototype
C.H=W.be.prototype
C.I=W.d4.prototype
C.a4=new P.fz()
C.J=new P.fy()
C.x=function getTagFallback(o) {
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
C.y=function(hooks) { return hooks; }

C.Q=new P.hU()
C.l=new P.j7()
C.R=new P.j9()
C.k=new P.jQ()
C.d=new A.bW(0,"ColorSourceType.None")
C.j=new A.bW(1,"ColorSourceType.Solid")
C.h=new A.bW(2,"ColorSourceType.Texture2D")
C.i=new A.bW(3,"ColorSourceType.TextureCube")
C.r=new P.b1(0)
C.T=new P.b1(5e6)
C.U=new P.hb("element",!0,!1,!1,!1)
C.A=H.d(u([127,2047,65535,1114111]),[P.p])
C.n=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.p])
C.Y=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.o=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.p])
C.p=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.p])
C.Z=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.B=H.d(u([]),[P.e])
C.a_=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.p])
C.C=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.p])
C.q=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.p])
C.D=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.p])
C.a0=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.p])
C.E=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.p])
C.t=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.u=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.a1=new H.fH(0,{},C.B,[P.e,P.e])})()
var v={mangledGlobalNames:{p:"int",r:"double",ac:"num",e:"String",V:"bool",N:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.N},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ae]},{func:1,ret:P.N,args:[D.B]},{func:1,ret:P.N,args:[F.a9]},{func:1,ret:P.N,args:[,,]},{func:1,ret:P.N,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.p,[P.i,E.ao]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.N,args:[W.o]},{func:1,ret:-1,args:[W.aX]},{func:1,ret:-1,args:[W.o]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.p,[P.i,D.a8]]},{func:1,ret:-1,args:[P.p,[P.i,V.ak]]},{func:1,ret:P.V,args:[W.X,P.e,P.e,W.bO]},{func:1,ret:P.V,args:[W.C]},{func:1,ret:P.e,args:[P.p]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.V,args:[W.aA]},{func:1,ret:P.V,args:[P.e]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.N,args:[,]},{func:1,ret:V.a5,args:[P.r]},{func:1,ret:-1,args:[P.p,[P.i,U.al]]},{func:1,ret:P.r},{func:1,ret:P.N,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:W.X,args:[W.C]},{func:1,args:[W.o]},{func:1,ret:P.U,args:[,,]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.U,args:[P.p]},{func:1,ret:P.V,args:[[P.i,D.a8]]},{func:1,ret:P.N,args:[P.e,,]},{func:1,ret:P.N,args:[P.e]},{func:1,ret:P.p,args:[P.p,P.p]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.p]},{func:1,ret:-1,args:[W.C,W.C]},{func:1,ret:[P.F,P.e,P.e],args:[[P.F,P.e,P.e],P.e]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.N,args:[,],opt:[P.av]},{func:1,ret:P.N,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.N,args:[P.ba]},{func:1,ret:P.V,args:[V.bA]},{func:1,args:[,P.e]},{func:1,ret:P.N,args:[P.ac]}],interceptorsByTag:null,leafTags:null};(function staticFields(){$.aZ=0
$.cq=null
$.lH=null
$.li=!1
$.mQ=null
$.mI=null
$.mW=null
$.kw=null
$.kB=null
$.ls=null
$.cd=null
$.dj=null
$.dk=null
$.lj=!1
$.a1=C.k
$.aw=[]
$.bj=null
$.kZ=null
$.lO=null
$.lN=null
$.d7=P.l4(P.e,P.bE)
$.lW=null
$.m_=null
$.cK=null
$.m4=null
$.mi=null
$.mm=null
$.mk=null
$.ml=null
$.ja=null
$.mj=null
$.lZ=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"py","n0",function(){return H.mP("_$dart_dartClosure")})
u($,"pz","ly",function(){return H.mP("_$dart_js")})
u($,"pF","n1",function(){return H.bc(H.iN({
toString:function(){return"$receiver$"}}))})
u($,"pG","n2",function(){return H.bc(H.iN({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pH","n3",function(){return H.bc(H.iN(null))})
u($,"pI","n4",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pL","n7",function(){return H.bc(H.iN(void 0))})
u($,"pM","n8",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pK","n6",function(){return H.bc(H.mc(null))})
u($,"pJ","n5",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pO","na",function(){return H.bc(H.mc(void 0))})
u($,"pN","n9",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"q4","lz",function(){return P.om()})
u($,"pR","nb",function(){return P.oj()})
u($,"q5","nf",function(){return H.nU(H.cc(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.p])))})
u($,"q7","nh",function(){return P.o7("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q8","ni",function(){return P.oL()})
u($,"q6","ng",function(){return P.lR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"pY","ne",function(){return Z.aI(0)})
u($,"pS","nc",function(){return Z.aI(511)})
u($,"q_","bu",function(){return Z.aI(1)})
u($,"pZ","bt",function(){return Z.aI(2)})
u($,"pU","bs",function(){return Z.aI(4)})
u($,"q0","bv",function(){return Z.aI(8)})
u($,"q1","bw",function(){return Z.aI(16)})
u($,"pV","dm",function(){return Z.aI(32)})
u($,"pW","dn",function(){return Z.aI(64)})
u($,"pX","nd",function(){return Z.aI(96)})
u($,"q2","cn",function(){return Z.aI(128)})
u($,"pT","br",function(){return Z.aI(256)})
u($,"px","n_",function(){return new V.fX(1e-9)})
u($,"pw","M",function(){return $.n_()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cG,DataView:H.bJ,ArrayBufferView:H.bJ,Float32Array:H.cH,Float64Array:H.cH,Int16Array:H.hJ,Int32Array:H.hK,Int8Array:H.hL,Uint16Array:H.hM,Uint32Array:H.hN,Uint8ClampedArray:H.dU,CanvasPixelArray:H.dU,Uint8Array:H.cI,HTMLAudioElement:W.y,HTMLBRElement:W.y,HTMLButtonElement:W.y,HTMLContentElement:W.y,HTMLDListElement:W.y,HTMLDataElement:W.y,HTMLDataListElement:W.y,HTMLDetailsElement:W.y,HTMLDialogElement:W.y,HTMLEmbedElement:W.y,HTMLFieldSetElement:W.y,HTMLHRElement:W.y,HTMLHeadElement:W.y,HTMLHeadingElement:W.y,HTMLHtmlElement:W.y,HTMLIFrameElement:W.y,HTMLLIElement:W.y,HTMLLabelElement:W.y,HTMLLegendElement:W.y,HTMLLinkElement:W.y,HTMLMapElement:W.y,HTMLMediaElement:W.y,HTMLMenuElement:W.y,HTMLMetaElement:W.y,HTMLMeterElement:W.y,HTMLModElement:W.y,HTMLOListElement:W.y,HTMLObjectElement:W.y,HTMLOptGroupElement:W.y,HTMLOptionElement:W.y,HTMLOutputElement:W.y,HTMLParagraphElement:W.y,HTMLParamElement:W.y,HTMLPictureElement:W.y,HTMLPreElement:W.y,HTMLProgressElement:W.y,HTMLQuoteElement:W.y,HTMLScriptElement:W.y,HTMLShadowElement:W.y,HTMLSlotElement:W.y,HTMLSourceElement:W.y,HTMLSpanElement:W.y,HTMLStyleElement:W.y,HTMLTableCaptionElement:W.y,HTMLTableColElement:W.y,HTMLTextAreaElement:W.y,HTMLTimeElement:W.y,HTMLTitleElement:W.y,HTMLTrackElement:W.y,HTMLUListElement:W.y,HTMLUnknownElement:W.y,HTMLVideoElement:W.y,HTMLDirectoryElement:W.y,HTMLFontElement:W.y,HTMLFrameElement:W.y,HTMLFrameSetElement:W.y,HTMLMarqueeElement:W.y,HTMLElement:W.y,AccessibleNodeList:W.fq,HTMLAnchorElement:W.dq,HTMLAreaElement:W.fr,HTMLBaseElement:W.co,Blob:W.bT,HTMLBodyElement:W.by,HTMLCanvasElement:W.bU,CanvasRenderingContext2D:W.cr,CDATASection:W.bz,CharacterData:W.bz,Comment:W.bz,ProcessingInstruction:W.bz,Text:W.bz,CSSNumericValue:W.ct,CSSUnitValue:W.ct,CSSPerspective:W.fI,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cu,MSStyleCSSProperties:W.cu,CSS2Properties:W.cu,CSSImageValue:W.b_,CSSKeywordValue:W.b_,CSSPositionValue:W.b_,CSSResourceValue:W.b_,CSSURLImageValue:W.b_,CSSStyleValue:W.b_,CSSMatrixComponent:W.b0,CSSRotation:W.b0,CSSScale:W.b0,CSSSkew:W.b0,CSSTranslation:W.b0,CSSTransformComponent:W.b0,CSSTransformValue:W.fK,CSSUnparsedValue:W.fL,DataTransferItemList:W.fO,HTMLDivElement:W.aE,DOMException:W.fP,ClientRectList:W.dB,DOMRectList:W.dB,DOMRectReadOnly:W.dC,DOMStringList:W.fQ,DOMTokenList:W.fR,Element:W.X,AbortPaymentEvent:W.o,AnimationEvent:W.o,AnimationPlaybackEvent:W.o,ApplicationCacheErrorEvent:W.o,BackgroundFetchClickEvent:W.o,BackgroundFetchEvent:W.o,BackgroundFetchFailEvent:W.o,BackgroundFetchedEvent:W.o,BeforeInstallPromptEvent:W.o,BeforeUnloadEvent:W.o,BlobEvent:W.o,CanMakePaymentEvent:W.o,ClipboardEvent:W.o,CloseEvent:W.o,CustomEvent:W.o,DeviceMotionEvent:W.o,DeviceOrientationEvent:W.o,ErrorEvent:W.o,ExtendableEvent:W.o,ExtendableMessageEvent:W.o,FetchEvent:W.o,FontFaceSetLoadEvent:W.o,ForeignFetchEvent:W.o,GamepadEvent:W.o,HashChangeEvent:W.o,InstallEvent:W.o,MediaEncryptedEvent:W.o,MediaKeyMessageEvent:W.o,MediaQueryListEvent:W.o,MediaStreamEvent:W.o,MediaStreamTrackEvent:W.o,MessageEvent:W.o,MIDIConnectionEvent:W.o,MIDIMessageEvent:W.o,MutationEvent:W.o,NotificationEvent:W.o,PageTransitionEvent:W.o,PaymentRequestEvent:W.o,PaymentRequestUpdateEvent:W.o,PopStateEvent:W.o,PresentationConnectionAvailableEvent:W.o,PresentationConnectionCloseEvent:W.o,ProgressEvent:W.o,PromiseRejectionEvent:W.o,PushEvent:W.o,RTCDataChannelEvent:W.o,RTCDTMFToneChangeEvent:W.o,RTCPeerConnectionIceEvent:W.o,RTCTrackEvent:W.o,SecurityPolicyViolationEvent:W.o,SensorErrorEvent:W.o,SpeechRecognitionError:W.o,SpeechRecognitionEvent:W.o,SpeechSynthesisEvent:W.o,StorageEvent:W.o,SyncEvent:W.o,TrackEvent:W.o,TransitionEvent:W.o,WebKitTransitionEvent:W.o,VRDeviceEvent:W.o,VRDisplayEvent:W.o,VRSessionEvent:W.o,MojoInterfaceRequestEvent:W.o,ResourceProgressEvent:W.o,USBConnectionEvent:W.o,IDBVersionChangeEvent:W.o,AudioProcessingEvent:W.o,OfflineAudioCompletionEvent:W.o,WebGLContextEvent:W.o,Event:W.o,InputEvent:W.o,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cx,FileWriter:W.h0,HTMLFormElement:W.h4,Gamepad:W.aN,History:W.h9,HTMLCollection:W.bZ,HTMLFormControlsCollection:W.bZ,HTMLOptionsCollection:W.bZ,ImageData:W.bk,HTMLImageElement:W.cA,HTMLInputElement:W.cB,KeyboardEvent:W.b3,Location:W.dN,MediaList:W.hC,MessagePort:W.cF,MIDIInputMap:W.hD,MIDIOutputMap:W.hF,MimeType:W.aQ,MimeTypeArray:W.hH,PointerEvent:W.ae,MouseEvent:W.ae,DragEvent:W.ae,Document:W.C,DocumentFragment:W.C,HTMLDocument:W.C,ShadowRoot:W.C,XMLDocument:W.C,DocumentType:W.C,Node:W.C,NodeList:W.cJ,RadioNodeList:W.cJ,Plugin:W.aR,PluginArray:W.hX,RTCStatsReport:W.i6,HTMLSelectElement:W.i9,SourceBuffer:W.aS,SourceBufferList:W.ik,SpeechGrammar:W.aT,SpeechGrammarList:W.il,SpeechRecognitionResult:W.aU,Storage:W.ip,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.e7,HTMLTableRowElement:W.iw,HTMLTableSectionElement:W.ix,HTMLTemplateElement:W.cR,TextTrack:W.aV,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iz,TextTrackList:W.iA,TimeRanges:W.iF,Touch:W.aW,TouchEvent:W.aX,TouchList:W.iJ,TrackDefaultList:W.iK,CompositionEvent:W.bM,FocusEvent:W.bM,TextEvent:W.bM,UIEvent:W.bM,URL:W.j6,VideoTrackList:W.jm,WheelEvent:W.be,Window:W.d4,DOMWindow:W.d4,Attr:W.d5,CSSRuleList:W.jw,ClientRect:W.es,DOMRect:W.es,GamepadList:W.jL,NamedNodeMap:W.eK,MozNamedAttrMap:W.eK,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k2,SVGLength:P.b4,SVGLengthList:P.hi,SVGNumber:P.b7,SVGNumberList:P.hS,SVGPointList:P.hZ,SVGScriptElement:P.cM,SVGStringList:P.iv,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bb,SVGTransformList:P.iL,AudioBuffer:P.fu,AudioParamMap:P.fv,AudioTrackList:P.fx,AudioContext:P.bS,webkitAudioContext:P.bS,BaseAudioContext:P.bS,OfflineAudioContext:P.hT,WebGLBuffer:P.dt,WebGLProgram:P.dZ,WebGL2RenderingContext:P.c7,WebGLShader:P.e2,WebGLTexture:P.e9,WebGLUniformLocation:P.ei,SQLResultSetRowList:P.im})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dS.$nativeSuperclassTag="ArrayBufferView"
H.d8.$nativeSuperclassTag="ArrayBufferView"
H.d9.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.da.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dT.$nativeSuperclassTag="ArrayBufferView"
W.dc.$nativeSuperclassTag="EventTarget"
W.dd.$nativeSuperclassTag="EventTarget"
W.de.$nativeSuperclassTag="EventTarget"
W.df.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.mT,[])
else K.mT([])})})()
//# sourceMappingURL=test.dart.js.map
