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
a[c]=function(){a[c]=function(){H.py(b)}
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
kH:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
hj:function(){return new P.ca("No element")},
nP:function(){return new P.ca("Too many elements")},
nO:function(){return new P.ca("Too few elements")},
v:function v(a){this.a=a},
h_:function h_(){},
c4:function c4(){},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hA:function hA(a,b,c){this.a=a
this.b=b
this.$ti=c},
hB:function hB(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hC:function hC(a,b,c){this.a=a
this.b=b
this.$ti=c},
d0:function d0(a,b,c){this.a=a
this.b=b
this.$ti=c},
jy:function jy(a,b,c){this.a=a
this.b=b
this.$ti=c},
c0:function c0(){},
cZ:function cZ(){},
ep:function ep(){},
nF:function(){throw H.c(P.G("Cannot modify unmodifiable Map"))},
cm:function(a){var u,t
u=H.H(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pf:function(a){return v.types[H.ai(a)]},
pm:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iK},
l:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.au(a)
if(typeof u!=="string")throw H.c(H.as(a))
return u},
ob:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hk(u)
t=u[0]
s=u[1]
return new H.i9(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cJ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
o8:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.f(u,3)
t=H.H(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.H(r,p)|32)>s)return}return parseInt(a,b)},
c6:function(a){return H.o_(a)+H.lu(H.bT(a),0,null)},
o_:function(a){var u,t,s,r,q,p,o,n,m
u=J.U(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibP){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.cm(r.length>1&&C.c.H(r,0)===36?C.c.aq(r,1):r)},
o0:function(){if(!!self.location)return self.location.href
return},
mb:function(a){var u,t,s,r,q
H.kN(a)
u=J.aD(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
o9:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.as(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.aT(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.as(r))}return H.mb(u)},
mc:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.as(s))
if(s<0)throw H.c(H.as(s))
if(s>65535)return H.o9(a)}return H.mb(a)},
oa:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c7:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.ae(a,0,1114111,null,null))},
c5:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o7:function(a){var u=H.c5(a).getFullYear()+0
return u},
o5:function(a){var u=H.c5(a).getMonth()+1
return u},
o1:function(a){var u=H.c5(a).getDate()+0
return u},
o2:function(a){var u=H.c5(a).getHours()+0
return u},
o4:function(a){var u=H.c5(a).getMinutes()+0
return u},
o6:function(a){var u=H.c5(a).getSeconds()+0
return u},
o3:function(a){var u=H.c5(a).getMilliseconds()+0
return u},
J:function(a){throw H.c(H.as(a))},
f:function(a,b){if(a==null)J.aD(a)
throw H.c(H.ch(a,b))},
ch:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aL(!0,b,"index",null)
u=H.ai(J.aD(a))
if(!(b<0)){if(typeof u!=="number")return H.J(u)
t=b>=u}else t=!0
if(t)return P.Z(b,a,"index",null,u)
return P.e6(b,"index",null)},
p8:function(a,b,c){if(a>c)return new P.c8(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.c8(a,c,!0,b,"end","Invalid value")
return new P.aL(!0,b,"end",null)},
as:function(a){return new P.aL(!0,a,null,null)},
p3:function(a){if(typeof a!=="number")throw H.c(H.as(a))
return a},
c:function(a){var u
if(a==null)a=new P.e1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n2})
u.name=""}else u.toString=H.n2
return u},
n2:function(){return J.au(this.dartException)},
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
return new H.iT(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iU:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
ml:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m6:function(a,b){return new H.hY(a,b==null?null:b.method)},
le:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hn(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.l0(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.aT(s,16)&8191)===10)switch(r){case 438:return u.$1(H.le(H.l(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.m6(H.l(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.n6()
p=$.n7()
o=$.n8()
n=$.n9()
m=$.nc()
l=$.nd()
k=$.nb()
$.na()
j=$.nf()
i=$.ne()
h=q.ag(t)
if(h!=null)return u.$1(H.le(H.H(t),h))
else{h=p.ag(t)
if(h!=null){h.method="call"
return u.$1(H.le(H.H(t),h))}else{h=o.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=m.ag(t)
if(h==null){h=l.ag(t)
if(h==null){h=k.ag(t)
if(h==null){h=n.ag(t)
if(h==null){h=j.ag(t)
if(h==null){h=i.ag(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.m6(H.H(t),h))}}return u.$1(new H.j6(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.eb()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aL(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.eb()
return a},
ck:function(a){var u
if(a==null)return new H.f2(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.f2(a)},
pb:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pl:function(a,b,c,d,e,f){H.h(a,"$ibE")
switch(H.ai(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
cg:function(a,b){var u
H.ai(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pl)
a.$identity=u
return u},
nE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.U(d).$ib){u.$reflectionInfo=d
s=H.ob(u).r}else s=d
r=e?Object.create(new H.iw().constructor.prototype):Object.create(new H.cp(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b_
if(typeof p!=="number")return p.p()
$.b_=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.lU(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pf,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.lS:H.l5
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.lU(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nB:function(a,b,c,d){var u=H.l5
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lU:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nB(t,!r,u,b)
if(t===0){r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cq
if(q==null){q=H.fH("self")
$.cq=q}return new Function(r+H.l(q)+";return "+p+"."+H.l(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b_
if(typeof r!=="number")return r.p()
$.b_=r+1
o+=r
r="return function("+o+"){return this."
q=$.cq
if(q==null){q=H.fH("self")
$.cq=q}return new Function(r+H.l(q)+"."+H.l(u)+"("+o+");}")()},
nC:function(a,b,c,d){var u,t
u=H.l5
t=H.lS
switch(b?-1:a){case 0:throw H.c(H.of("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nD:function(a,b){var u,t,s,r,q,p,o,n
u=$.cq
if(u==null){u=H.fH("self")
$.cq=u}t=$.lR
if(t==null){t=H.fH("receiver")
$.lR=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nC(r,!p,s,b)
if(r===1){u="return function(){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+");"
t=$.b_
if(typeof t!=="number")return t.p()
$.b_=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.l(u)+"."+H.l(s)+"(this."+H.l(t)+", "+n+");"
t=$.b_
if(typeof t!=="number")return t.p()
$.b_=t+1
return new Function(u+t+"}")()},
lx:function(a,b,c,d,e,f,g){return H.nE(a,b,H.ai(c),d,!!e,!!f,g)},
l5:function(a){return a.a},
lS:function(a){return a.c},
fH:function(a){var u,t,s,r,q
u=new H.cp("self","target","receiver","name")
t=J.hk(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
H:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.aZ(a,"String"))},
p9:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"double"))},
pr:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.aZ(a,"num"))},
lv:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.aZ(a,"bool"))},
ai:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.aZ(a,"int"))},
n0:function(a,b){throw H.c(H.aZ(a,H.cm(H.H(b).substring(2))))},
pt:function(a,b){throw H.c(H.nA(a,H.cm(H.H(b).substring(2))))},
h:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.U(a)[b])return a
H.n0(a,b)},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.pt(a,b)},
kN:function(a){if(a==null)return a
if(!!J.U(a).$ib)return a
throw H.c(H.aZ(a,"List<dynamic>"))},
mY:function(a,b){var u
if(a==null)return a
u=J.U(a)
if(!!u.$ib)return a
if(u[b])return a
H.n0(a,b)},
mU:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ai(u)]
else return a.$S()}return},
fr:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.mU(J.U(a))
if(u==null)return!1
return H.mI(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lr)return a
$.lr=!0
try{if(H.fr(a,b))return a
u=H.kW(b)
t=H.aZ(a,u)
throw H.c(t)}finally{$.lr=!1}},
lA:function(a,b){if(a!=null&&!H.lw(a,b))H.t(H.aZ(a,H.kW(b)))
return a},
aZ:function(a,b){return new H.iV("TypeError: "+P.h3(a)+": type '"+H.mN(a)+"' is not a subtype of type '"+b+"'")},
nA:function(a,b){return new H.fI("CastError: "+P.h3(a)+": type '"+H.mN(a)+"' is not a subtype of type '"+b+"'")},
mN:function(a){var u,t
u=J.U(a)
if(!!u.$icr){t=H.mU(u)
if(t!=null)return H.kW(t)
return"Closure"}return H.c6(a)},
py:function(a){throw H.c(new P.fS(H.H(a)))},
of:function(a){return new H.ih(a)},
mV:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
qj:function(a,b,c){return H.cl(a["$a"+H.l(c)],H.bT(b))},
bS:function(a,b,c,d){var u
H.H(c)
H.ai(d)
u=H.cl(a["$a"+H.l(c)],H.bT(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.H(b)
H.ai(c)
u=H.cl(a["$a"+H.l(b)],H.bT(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ai(b)
u=H.bT(a)
return u==null?null:u[b]},
kW:function(a){return H.bR(a,null)},
bR:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cm(a[0].name)+H.lu(a,1,b)
if(typeof a=="function")return H.cm(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ai(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.l(b[t])}if('func' in a)return H.oT(a,b)
if('futureOr' in a)return"FutureOr<"+H.bR("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oT:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
if(m<0)return H.f(b,m)
o=C.c.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.Q)o+=" extends "+H.bR(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bR(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bR(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bR(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pa(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.H(u[g])
i=i+h+H.bR(d[c],b)+(" "+H.l(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lu:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
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
dh:function(a,b,c,d){var u,t
H.H(b)
H.kN(c)
H.H(d)
if(a==null)return!1
u=H.bT(a)
t=J.U(a)
if(t[b]==null)return!1
return H.mQ(H.cl(t[d],u),null,c,null)},
k:function(a,b,c,d){H.H(b)
H.kN(c)
H.H(d)
if(a==null)return a
if(H.dh(a,b,c,d))return a
throw H.c(H.aZ(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.cm(b.substring(2))+H.lu(c,0,null),v.mangledGlobalNames)))},
mQ:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aK(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aK(a[t],b,c[t],d))return!1
return!0},
qh:function(a,b,c){return a.apply(b,H.cl(J.U(b)["$a"+H.l(c)],H.bT(b)))},
mX:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="Q"||a.name==="L"||a===-1||a===-2||H.mX(u)}return!1},
lw:function(a,b){var u,t
if(a==null)return b==null||b.name==="Q"||b.name==="L"||b===-1||b===-2||H.mX(b)
if(b==null||b===-1||b.name==="Q"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fr(a,b)}u=J.U(a).constructor
t=H.bT(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aK(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.lw(a,b))throw H.c(H.aZ(a,H.kW(b)))
return a},
aK:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="Q"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="Q"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aK(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="L")return!0
if('func' in c)return H.mI(a,b,c,d)
if('func' in a)return c.name==="bE"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aK("type" in a?a.type:null,b,s,d)
else if(H.aK(a,b,s,d))return!0
else{if(!('$i'+"cy" in t.prototype))return!1
r=t.prototype["$a"+"cy"]
q=H.cl(r,u?a.slice(1):null)
return H.aK(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.mQ(H.cl(m,u),b,p,d)},
mI:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
return H.pq(h,b,g,d)},
pq:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aK(c[r],d,a[r],b))return!1}return!0},
qi:function(a,b,c){Object.defineProperty(a,H.H(b),{value:c,enumerable:false,writable:true,configurable:true})},
po:function(a){var u,t,s,r,q,p
u=H.H($.mW.$1(a))
t=$.kG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kL[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.H($.mP.$2(a,u))
if(u!=null){t=$.kG[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kL[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.kV(s)
$.kG[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kL[u]=s
return s}if(q==="-"){p=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.n_(a,s)
if(q==="*")throw H.c(P.j5(u))
if(v.leafTags[u]===true){p=H.kV(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.n_(a,s)},
n_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kV:function(a){return J.lC(a,!1,null,!!a.$iK)},
pp:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kV(u)
else return J.lC(u,c,null,null)},
pj:function(){if(!0===$.lB)return
$.lB=!0
H.pk()},
pk:function(){var u,t,s,r,q,p,o,n
$.kG=Object.create(null)
$.kL=Object.create(null)
H.pi()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n1.$1(q)
if(p!=null){o=H.pp(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pi:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.cf(C.a0,H.cf(C.a5,H.cf(C.E,H.cf(C.E,H.cf(C.a4,H.cf(C.a1,H.cf(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.mW=new H.kI(q)
$.mP=new H.kJ(p)
$.n1=new H.kK(o)},
cf:function(a,b){return a(b)||b},
nR:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a7("Illegal RegExp pattern ("+String(r)+")",a,null))},
px:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lE:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fM:function fM(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
i9:function i9(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
iT:function iT(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hY:function hY(a,b){this.a=a
this.b=b},
hn:function hn(a,b,c){this.a=a
this.b=b
this.c=c},
j6:function j6(a){this.a=a},
l0:function l0(a){this.a=a},
f2:function f2(a){this.a=a
this.b=null},
cr:function cr(){},
iF:function iF(){},
iw:function iw(){},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iV:function iV(a){this.a=a},
fI:function fI(a){this.a=a},
ih:function ih(a){this.a=a},
aP:function aP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hr:function hr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hs:function hs(a,b){this.a=a
this.$ti=b},
ht:function ht(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
hm:function hm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
nZ:function(a){return new Int8Array(a)},
bg:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ch(b,a))},
oR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p8(a,b,c))
return b},
cF:function cF(){},
bI:function bI(){},
dY:function dY(){},
cG:function cG(){},
dZ:function dZ(){},
hQ:function hQ(){},
hR:function hR(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(){},
e_:function e_(){},
cH:function cH(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d7:function d7(){},
pa:function(a){return J.lZ(a?Object.keys(a):[],null)},
ps:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ft:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lB==null){H.pj()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.j5("Return interceptor for "+H.l(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lG()]
if(q!=null)return q
q=H.po(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lG(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
nQ:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.l4(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ae(a,0,4294967295,"length",null))
return J.lZ(new Array(a),b)},
lZ:function(a,b){return J.hk(H.d(a,[b]))},
hk:function(a){H.kN(a)
a.fixed$length=Array
return a},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dK.prototype
return J.dJ.prototype}if(typeof a=="string")return J.bl.prototype
if(a==null)return J.dL.prototype
if(typeof a=="boolean")return J.hl.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.Q)return a
return J.ft(a)},
pc:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.Q)return a
return J.ft(a)},
cj:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.Q)return a
return J.ft(a)},
fs:function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.Q)return a
return J.ft(a)},
pd:function(a){if(typeof a=="number")return J.bG.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
pe:function(a){if(typeof a=="number")return J.bG.prototype
if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
di:function(a){if(typeof a=="string")return J.bl.prototype
if(a==null)return a
if(!(a instanceof P.Q))return J.bP.prototype
return a},
ad:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bm.prototype
return a}if(a instanceof P.Q)return a
return J.ft(a)},
no:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.pc(a).p(a,b)},
V:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).v(a,b)},
lJ:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pe(a).F(a,b)},
np:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.pd(a).t(a,b)},
lK:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pm(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cj(a).j(a,b)},
l1:function(a,b,c){return J.fs(a).n(a,b,c)},
nq:function(a,b){return J.di(a).H(a,b)},
fv:function(a,b){return J.ad(a).iy(a,b)},
l2:function(a,b,c){return J.ad(a).iC(a,b,c)},
nr:function(a,b,c,d){return J.ad(a).jx(a,b,c,d)},
lL:function(a,b){return J.ad(a).E(a,b)},
ns:function(a,b){return J.di(a).a_(a,b)},
fw:function(a,b){return J.fs(a).K(a,b)},
nt:function(a,b,c,d){return J.ad(a).kh(a,b,c,d)},
lM:function(a,b){return J.fs(a).O(a,b)},
nu:function(a){return J.ad(a).gjI(a)},
lN:function(a){return J.ad(a).gcp(a)},
dm:function(a){return J.U(a).gJ(a)},
by:function(a){return J.fs(a).gV(a)},
aD:function(a){return J.cj(a).gl(a)},
nv:function(a){return J.ad(a).gl4(a)},
l3:function(a,b){return J.ad(a).b1(a,b)},
lO:function(a){return J.fs(a).kU(a)},
nw:function(a,b){return J.ad(a).kZ(a,b)},
nx:function(a,b,c){return J.ad(a).fg(a,b,c)},
ny:function(a,b,c){return J.di(a).u(a,b,c)},
nz:function(a){return J.di(a).lb(a)},
au:function(a){return J.U(a).i(a)},
a:function a(){},
hl:function hl(){},
dL:function dL(){},
dM:function dM(){},
i1:function i1(){},
bP:function bP(){},
bm:function bm(){},
aO:function aO(a){this.$ti=a},
lc:function lc(a){this.$ti=a},
av:function av(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bG:function bG(){},
dK:function dK(){},
dJ:function dJ(){},
bl:function bl(){}},P={
ot:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.p0()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.cg(new P.jA(u),1)).observe(t,{childList:true})
return new P.jz(u,t,s)}else if(self.setImmediate!=null)return P.p1()
return P.p2()},
ou:function(a){self.scheduleImmediate(H.cg(new P.jB(H.n(a,{func:1,ret:-1})),0))},
ov:function(a){self.setImmediate(H.cg(new P.jC(H.n(a,{func:1,ret:-1})),0))},
ow:function(a){P.li(C.y,H.n(a,{func:1,ret:-1}))},
li:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.a7(a.a,1000)
return P.oC(u<0?0:u,b)},
mk:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.ba]})
u=C.f.a7(a.a,1000)
return P.oD(u<0?0:u,b)},
oC:function(a,b){var u=new P.f8(!0)
u.fR(a,b)
return u},
oD:function(a,b){var u=new P.f8(!1)
u.fS(a,b)
return u},
ox:function(a,b){var u,t,s
b.a=1
try{a.eV(new P.jM(b),new P.jN(b),null)}catch(s){u=H.aj(s)
t=H.ck(s)
P.pu(new P.jO(b,u,t))}},
mx:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.h(a.c,"$iaJ")
if(u>=4){t=b.c9()
b.a=a.a
b.c=a.c
P.d3(b,t)}else{t=H.h(b.c,"$ibf")
b.a=2
b.c=a
a.dC(t)}},
d3:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.h(t.c,"$iam")
t=t.b
p=q.a
o=q.b
t.toString
P.kx(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.d3(u.a,b)}t=u.a
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
if(k){H.h(m,"$iam")
t=t.b
p=m.a
o=m.b
t.toString
P.kx(null,null,t,p,o)
return}j=$.a0
if(j!=l)$.a0=l
else j=null
t=b.c
if(t===8)new P.jS(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jR(s,b,m).$0()}else if((t&2)!==0)new P.jQ(u,s,b).$0()
if(j!=null)$.a0=j
t=s.b
if(!!J.U(t).$icy){if(t.a>=4){i=H.h(o.c,"$ibf")
o.c=null
b=o.bo(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mx(t,o)
return}}h=b.b
i=H.h(h.c,"$ibf")
h.c=null
b=h.bo(i)
t=s.a
p=s.b
if(!t){H.A(p,H.u(h,0))
h.a=4
h.c=p}else{H.h(p,"$iam")
h.a=8
h.c=p}u.a=h
t=h}},
oW:function(a,b){if(H.fr(a,{func:1,args:[P.Q,P.ax]}))return H.n(a,{func:1,ret:null,args:[P.Q,P.ax]})
if(H.fr(a,{func:1,args:[P.Q]}))return H.n(a,{func:1,ret:null,args:[P.Q]})
throw H.c(P.l4(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oV:function(){var u,t
for(;u=$.ce,u!=null;){$.dg=null
t=u.b
$.ce=t
if(t==null)$.df=null
u.a.$0()}},
p_:function(){$.ls=!0
try{P.oV()}finally{$.dg=null
$.ls=!1
if($.ce!=null)$.lH().$1(P.mR())}},
mM:function(a){var u=new P.ev(H.n(a,{func:1,ret:-1}))
if($.ce==null){$.df=u
$.ce=u
if(!$.ls)$.lH().$1(P.mR())}else{$.df.b=u
$.df=u}},
oZ:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.ce
if(u==null){P.mM(a)
$.dg=$.df
return}t=new P.ev(a)
s=$.dg
if(s==null){t.b=u
$.dg=t
$.ce=t}else{t.b=s.b
s.b=t
$.dg=t
if(t.b==null)$.df=t}},
pu:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a0
if(C.l===t){P.kz(null,null,C.l,a)
return}t.toString
P.kz(null,null,t,H.n(t.ck(a),u))},
mj:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.li(a,b)}return P.li(a,H.n(t.ck(b),u))},
oj:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.ba]}
H.n(b,u)
t=$.a0
if(t===C.l){t.toString
return P.mk(a,b)}s=t.dV(b,P.ba)
$.a0.toString
return P.mk(a,H.n(s,u))},
kx:function(a,b,c,d,e){var u={}
u.a=d
P.oZ(new P.ky(u,e))},
mJ:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a0
if(t===c)return d.$0()
$.a0=c
u=t
try{t=d.$0()
return t}finally{$.a0=u}},
mK:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.a0
if(t===c)return d.$1(e)
$.a0=c
u=t
try{t=d.$1(e)
return t}finally{$.a0=u}},
oX:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.a0
if(t===c)return d.$2(e,f)
$.a0=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a0=u}},
kz:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.ck(d):c.jJ(d,-1)
P.mM(d)},
jA:function jA(a){this.a=a},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
f8:function f8(a){this.a=a
this.b=null
this.c=0},
kg:function kg(a,b){this.a=a
this.b=b},
kf:function kf(a,b,c,d){var _=this
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
jL:function jL(a,b){this.a=a
this.b=b},
jP:function jP(a,b){this.a=a
this.b=b},
jM:function jM(a){this.a=a},
jN:function jN(a){this.a=a},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function jS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jT:function jT(a){this.a=a},
jR:function jR(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c){this.a=a
this.b=b
this.c=c},
ev:function ev(a){this.a=a
this.b=null},
iz:function iz(){},
iB:function iB(a,b){this.a=a
this.b=b},
iC:function iC(a,b){this.a=a
this.b=b},
cN:function cN(){},
iA:function iA(){},
ba:function ba(){},
am:function am(a,b){this.a=a
this.b=b},
kq:function kq(){},
ky:function ky(a,b){this.a=a
this.b=b},
jZ:function jZ(){},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
k_:function k_(a,b){this.a=a
this.b=b},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
nT:function(a,b,c,d,e){return new H.aP([d,e])},
lf:function(a,b){return new H.aP([a,b])},
nV:function(a){return H.pb(a,new H.aP([null,null]))},
dQ:function(a,b,c,d){return new P.jX([d])},
lo:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oB:function(a,b,c){var u=new P.eK(a,b,[c])
u.c=a.e
return u},
nN:function(a,b,c){var u,t
if(P.lt(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dl()
C.a.h(t,a)
try{P.oU(a,u)}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}t=P.mh(b,H.mY(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lb:function(a,b,c){var u,t,s
if(P.lt(a))return b+"..."+c
u=new P.al(b)
t=$.dl()
C.a.h(t,a)
try{s=u
s.a=P.mh(s.a,a,", ")}finally{if(0>=t.length)return H.f(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lt:function(a){var u,t
for(u=0;t=$.dl(),u<t.length;++u)if(a===t[u])return!0
return!1},
oU:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gV(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.D())return
r=H.l(u.gL(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.D()){if(s<=5)return
if(0>=b.length)return H.f(b,-1)
q=b.pop()
if(0>=b.length)return H.f(b,-1)
p=b.pop()}else{o=u.gL(u);++s
if(!u.D()){if(s<=4){C.a.h(b,H.l(o))
return}q=H.l(o)
if(0>=b.length)return H.f(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gL(u);++s
for(;u.D();o=n,n=m){m=u.gL(u);++s
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
nU:function(a,b,c){var u=P.nT(null,null,null,b,c)
a.O(0,new P.hu(u,b,c))
return u},
m_:function(a,b){var u,t,s
u=P.dQ(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)u.h(0,H.A(a[s],b))
return u},
lg:function(a){var u,t
u={}
if(P.lt(a))return"{...}"
t=new P.al("")
try{C.a.h($.dl(),a)
t.a+="{"
u.a=!0
J.lM(a,new P.hy(u,t))
t.a+="}"}finally{u=$.dl()
if(0>=u.length)return H.f(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
jX:function jX(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cb:function cb(a){this.a=a
this.c=this.b=null},
eK:function eK(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hu:function hu(a,b,c){this.a=a
this.b=b
this.c=c},
hv:function hv(){},
y:function y(){},
hx:function hx(){},
hy:function hy(a,b){this.a=a
this.b=b},
af:function af(){},
kh:function kh(){},
hz:function hz(){},
eq:function eq(a,b){this.a=a
this.$ti=b},
k3:function k3(){},
eL:function eL(){},
fe:function fe(){},
on:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oo(!1,b,c,d)
return},
oo:function(a,b,c,d){var u,t,s
u=$.ng()
if(u==null)return
t=0===c
if(t&&!0)return P.ll(u,b)
s=b.length
d=P.bq(c,d,s,null,null,null)
if(t&&d===s)return P.ll(u,b)
return P.ll(u,b.subarray(c,d))},
ll:function(a,b){if(P.oq(b))return
return P.or(a,b)},
or:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
oq:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
op:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
oY:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cj(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.bO()
if((s&127)!==s)return t-b}return c-b},
lQ:function(a,b,c,d,e,f){if(C.f.bh(f,4)!==0)throw H.c(P.a7("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a7("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a7("Invalid base64 padding, more than two '=' characters",a,b))},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
bY:function bY(){},
bC:function bC(){},
h1:function h1(){},
hh:function hh(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hg:function hg(a){this.a=a},
je:function je(a){this.a=a},
jg:function jg(){},
ko:function ko(a){this.b=this.a=0
this.c=a},
jf:function jf(a){this.a=a},
km:function km(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kn:function kn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.o8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a7(a,null,null))},
nK:function(a){if(a instanceof H.cr)return a.i(0)
return"Instance of '"+H.c6(a)+"'"},
nW:function(a,b,c,d){var u,t
H.A(b,d)
u=J.nQ(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
m0:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.by(a);s.D();)C.a.h(t,H.A(s.gL(s),c))
if(b)return t
return H.k(J.hk(t),"$ib",u,"$ab")},
ec:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaO",[u],"$aaO")
t=a.length
c=P.bq(b,c,t,null,null,null)
return H.mc(b>0||c<t?C.a.fl(a,b,c):a)}if(!!J.U(a).$icH)return H.oa(a,b,P.bq(b,c,a.length,null,null,null))
return P.oh(a,b,c)},
oh:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.ae(b,0,J.aD(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.ae(c,b,J.aD(a),null,null))
t=J.by(a)
for(s=0;s<b;++s)if(!t.D())throw H.c(P.ae(b,0,s,null,null))
r=[]
if(u)for(;t.D();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.D())throw H.c(P.ae(c,b,s,null,null))
r.push(t.gL(t))}return H.mc(r)},
od:function(a,b,c){return new H.hm(a,H.nR(a,!1,!0,!1))},
mh:function(a,b,c){var u=J.by(b)
if(!u.D())return a
if(c.length===0){do a+=H.l(u.gL(u))
while(u.D())}else{a+=H.l(u.gL(u))
for(;u.D();)a=a+c+H.l(u.gL(u))}return a},
mn:function(){var u=H.o0()
if(u!=null)return P.om(u,0,null)
throw H.c(P.G("'Uri.base' is not supported"))},
ff:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nm().b
if(typeof b!=="string")H.t(H.as(b))
u=u.test(b)}else u=!1
if(u)return b
H.A(b,H.at(c,"bY",0))
t=c.gkg().cq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c7(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
nG:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nH:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dy:function(a){if(a>=10)return""+a
return"0"+a},
lW:function(a,b,c,d,e,f){return new P.b2(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
h3:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.au(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nK(a)},
dp:function(a){return new P.aL(!1,null,null,a)},
l4:function(a,b,c){return new P.aL(!0,a,b,c)},
e6:function(a,b,c){return new P.c8(null,null,!0,a,b,"Value not in range")},
ae:function(a,b,c,d,e){return new P.c8(b,c,!0,a,d,"Invalid value")},
bq:function(a,b,c,d,e,f){if(typeof a!=="number")return H.J(a)
if(0>a||a>c)throw H.c(P.ae(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.ae(b,a,c,"end",f))
return b}return c},
Z:function(a,b,c,d,e){var u=H.ai(e==null?J.aD(b):e)
return new P.hi(b,u,!0,a,c,"Index out of range")},
G:function(a){return new P.j7(a)},
j5:function(a){return new P.j4(a)},
mg:function(a){return new P.ca(a)},
bi:function(a){return new P.fL(a)},
w:function(a){return new P.eD(a)},
a7:function(a,b,c){return new P.hc(a,b,c)},
nX:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
ay:function(a){H.ps(a)},
om:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.H(a,b+4)^58)*3|C.c.H(a,b)^100|C.c.H(a,b+1)^97|C.c.H(a,b+2)^116|C.c.H(a,b+3)^97)>>>0
if(t===0)return P.mm(b>0||c<c?C.c.u(a,b,c):a,5,null).gf_()
else if(t===32)return P.mm(C.c.u(a,u,c),0,null).gf_()}s=new Array(8)
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
if(P.mL(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lk()
if(q>=b)if(P.mL(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.Z()
if(typeof m!=="number")return H.J(m)
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
k=!1}else{if(!(m<c&&m===n+2&&C.c.ac(a,"..",n)))i=m>n+2&&C.c.ac(a,"/..",m-3)
else i=!0
if(i){j=null
k=!1}else{if(q===b+4)if(C.c.ac(a,"file",b)){if(p<=b){if(!C.c.ac(a,"/",n)){h="file:///"
t=3}else{h="file://"
t=2}a=h+C.c.u(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.aZ(a,n,m,"/");++m;++l;++c}else{a=C.c.u(a,b,n)+"/"+C.c.u(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.ac(a,"http",b)){if(s&&o+3===n&&C.c.ac(a,"80",o+1))if(b===0&&!0){a=C.c.aZ(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.ac(a,"https",b)){if(s&&o+4===n&&C.c.ac(a,"443",o+1))if(b===0&&!0){a=C.c.aZ(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.u(a,b,o)+C.c.u(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.u(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.k6(a,q,p,o,n,m,l,j)}return P.oE(a,b,c,q,p,o,n,m,l,j)},
mp:function(a,b){var u=P.e
return C.a.km(H.d(a.split("&"),[u]),P.lf(u,u),new P.jc(b),[P.E,P.e,P.e])},
ol:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.j9(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a_(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fu(C.c.u(a,q,r),null,null)
if(typeof n!=="number")return n.fd()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.f(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fu(C.c.u(a,q,c),null,null)
if(typeof n!=="number")return n.fd()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.f(t,p)
t[p]=n
return t},
mo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.ja(a)
t=new P.jb(u,a)
if(a.length<2)u.$1("address is too short")
s=H.d([],[P.o])
for(r=b,q=r,p=!1,o=!1;r<c;++r){n=C.c.a_(a,r)
if(n===58){if(r===b){++r
if(C.c.a_(a,r)!==58)u.$2("invalid start colon.",r)
q=r}if(r===q){if(p)u.$2("only one wildcard `::` is allowed",r)
C.a.h(s,-1)
p=!0}else C.a.h(s,t.$2(q,r))
q=r+1}else if(n===46)o=!0}if(s.length===0)u.$1("too few parts")
m=q===c
l=C.a.gaz(s)
if(m&&l!==-1)u.$2("expected a part after last `:`",c)
if(!m)if(!o)C.a.h(s,t.$2(q,c))
else{k=P.ol(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.f(j,g)
j[g]=0
d=g+1
if(d>=i)return H.f(j,d)
j[d]=0
g+=2}else{d=C.f.aT(f,8)
if(g<0||g>=i)return H.f(j,g)
j[g]=d
d=g+1
if(d>=i)return H.f(j,d)
j[d]=f&255
g+=2}}return j},
oE:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.oL(a,b,d)
else{if(d===b)P.dc(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oM(a,u,e-1):""
s=P.oI(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.J(g)
q=r<g?P.oK(P.fu(C.c.u(a,r,g),new P.ki(a,f),null),j):null}else{t=""
s=null
q=null}p=P.oJ(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.Z()
o=h<i?P.lp(a,h+1,i,null):null
return new P.cc(j,t,s,q,p,o,i<c?P.oH(a,i+1,c):null)},
mB:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dc:function(a,b,c){throw H.c(P.a7(c,a,b))},
oK:function(a,b){if(a!=null&&a===P.mB(b))return
return a},
oI:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a_(a,b)===91){if(typeof c!=="number")return c.t()
u=c-1
if(C.c.a_(a,u)!==93)P.dc(a,b,"Missing end `]` to match `[` in host")
P.mo(a,b+1,u)
return C.c.u(a,b,c).toLowerCase()}if(typeof c!=="number")return H.J(c)
t=b
for(;t<c;++t)if(C.c.a_(a,t)===58){P.mo(a,b,c)
return"["+a+"]"}return P.oO(a,b,c)},
oO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.J(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a_(a,u)
if(q===37){p=P.mH(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.c.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.f(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.c.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.f(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.dc(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a_(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.c.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mC(q)
u+=l
t=u}}}}if(s==null)return C.c.u(a,b,c)
if(t<c){n=C.c.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oL:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mE(C.c.H(a,b)))P.dc(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.f(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dc(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.u(a,b,c)
return P.oF(t?a.toLowerCase():a)},
oF:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oM:function(a,b,c){return P.dd(a,b,c,C.a9,!1)},
oJ:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dd(a,b,c,C.L,!0):C.r.lo(d,new P.kj(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.a5(r,"/"))r="/"+r
return P.oN(r,e,f)},
oN:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.a5(a,"/"))return P.oP(a,!u||c)
return P.oQ(a)},
lp:function(a,b,c,d){var u,t
u={}
H.k(d,"$iE",[P.e,null],"$aE")
if(a!=null){if(d!=null)throw H.c(P.dp("Both query and queryParameters specified"))
return P.dd(a,b,c,C.u,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.O(0,new P.kk(new P.kl(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
oH:function(a,b,c){return P.dd(a,b,c,C.u,!0)},
mH:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a_(a,b+1)
s=C.c.a_(a,u)
r=H.kH(t)
q=H.kH(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.aT(p,4)
if(u>=8)return H.f(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c7(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.u(a,b,b+3).toUpperCase()
return},
mC:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.H("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.H("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.iS(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.H("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.H("0123456789ABCDEF",p&15))
q+=3}}return P.ec(t,0,null)},
dd:function(a,b,c,d,e){var u=P.mG(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.u(a,b,c):u},
mG:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.Z()
if(typeof c!=="number")return H.J(c)
if(!(t<c))break
c$0:{q=C.c.a_(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.f(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.mH(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.f(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dc(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a_(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mC(q)}}if(r==null)r=new P.al("")
r.a+=C.c.u(a,s,t)
r.a+=H.l(o)
if(typeof n!=="number")return H.J(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.Z()
if(s<c)r.a+=C.c.u(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mF:function(a){if(C.c.a5(a,"."))return!0
return C.c.ev(a,"/.")!==-1},
oQ:function(a){var u,t,s,r,q,p,o
if(!P.mF(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.V(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.f(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
oP:function(a,b){var u,t,s,r,q,p
if(!P.mF(a))return!b?P.mD(a):a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.a.gaz(u)!==".."){if(0>=u.length)return H.f(u,-1)
u.pop()
r=!0}else{C.a.h(u,"..")
r=!1}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.f(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.a.gaz(u)==="..")C.a.h(u,"")
if(!b){if(0>=u.length)return H.f(u,0)
C.a.n(u,0,P.mD(u[0]))}return C.a.m(u,"/")},
mD:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mE(J.nq(a,0)))for(t=1;t<u;++t){s=C.c.H(a,t)
if(s===58)return C.c.u(a,0,t)+"%3A"+C.c.aq(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.f(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
oG:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dp("Invalid URL encoding"))}}return u},
lq:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.H(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.u(a,b,c)
else q=new H.v(C.c.u(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.H(a,t)
if(s>127)throw H.c(P.dp("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dp("Truncated URI"))
C.a.h(q,P.oG(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.jf(!1).cq(q)},
mE:function(a){var u=a|32
return 97<=u&&u<=122},
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.H(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a7("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a7("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.H(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaz(u)
if(q!==44||s!==o+7||!C.c.ac(a,"base64",o+1))throw H.c(P.a7("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kB(0,a,n,t)
else{m=P.mG(a,n,t,C.u,!0)
if(m!=null)a=C.c.aZ(a,n,t,m)}return new P.j8(a,u,c)},
oS:function(){var u,t,s,r,q
u=P.nX(22,new P.ku(),!0,P.R)
t=new P.kt(u)
s=new P.kv()
r=new P.kw()
q=H.h(t.$2(0,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(14,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(15,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(1,225),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(2,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(3,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(4,229),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(5,229),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(6,231),"$iR")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(7,231),"$iR")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.h(t.$2(8,8),"$iR"),"]",5)
q=H.h(t.$2(9,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(16,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(17,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(10,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(18,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(19,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(11,235),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.h(t.$2(12,236),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.h(t.$2(13,237),"$iR")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.h(t.$2(20,245),"$iR"),"az",21)
q=H.h(t.$2(21,245),"$iR")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
mL:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nn()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.f(u,d)
s=u[d]
r=C.c.H(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.f(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
S:function S(){},
az:function az(a,b){this.a=a
this.b=b},
r:function r(){},
b2:function b2(a){this.a=a},
fY:function fY(){},
fZ:function fZ(){},
bD:function bD(){},
e1:function e1(){},
aL:function aL(a,b,c,d){var _=this
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
hi:function hi(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
ca:function ca(a){this.a=a},
fL:function fL(a){this.a=a},
i0:function i0(){},
eb:function eb(){},
fS:function fS(a){this.a=a},
eD:function eD(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
bE:function bE(){},
o:function o(){},
i:function i(){},
b3:function b3(){},
b:function b(){},
E:function E(){},
L:function L(){},
a5:function a5(){},
Q:function Q(){},
ax:function ax(){},
e:function e(){},
al:function al(a){this.a=a},
jc:function jc(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a,b){this.a=a
this.b=b},
cc:function cc(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ki:function ki(a,b){this.a=a
this.b=b},
kj:function kj(){},
kl:function kl(a,b){this.a=a
this.b=b},
kk:function kk(a){this.a=a},
j8:function j8(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(){},
kt:function kt(a){this.a=a},
kv:function kv(){},
kw:function kw(){},
k6:function k6(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jG:function jG(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
p6:function(a){var u,t
u=J.U(a)
if(!!u.$ibk){t=u.ge_(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fd(a.data,a.height,a.width)},
p5:function(a){if(a instanceof P.fd)return{data:a.a,height:a.b,width:a.c}
return a},
br:function(a){var u,t,s,r,q
if(a==null)return
u=P.lf(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.H(t[r])
u.n(0,q,a[q])}return u},
p4:function(a,b){var u={}
a.O(0,new P.kA(u))
return u},
k8:function k8(){},
ka:function ka(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(a){this.a=a},
k9:function k9(a,b){this.a=a
this.b=b},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
ha:function ha(){},
jW:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jY:function jY(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
hp:function hp(){},
b7:function b7(){},
hZ:function hZ(){},
i5:function i5(){},
cK:function cK(){},
iD:function iD(){},
q:function q(){},
bb:function bb(){},
iS:function iS(){},
eI:function eI(){},
eJ:function eJ(){},
eT:function eT(){},
eU:function eU(){},
f4:function f4(){},
f5:function f5(){},
fb:function fb(){},
fc:function fc(){},
R:function R(){},
fA:function fA(){},
fB:function fB(){},
fC:function fC(a){this.a=a},
fD:function fD(){},
bU:function bU(){},
i_:function i_(){},
ew:function ew(){},
dr:function dr(){},
dF:function dF(){},
e4:function e4(){},
c9:function c9(){},
e8:function e8(){},
eg:function eg(){},
eo:function eo(){},
iv:function iv(){},
f0:function f0(){},
f1:function f1(){}},W={
lP:function(a){var u=document.createElement("a")
return u},
l6:function(a,b){var u=document.createElement("canvas")
return u},
nI:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).af(u,a,b,c)
t.toString
u=W.F
u=new H.d0(new W.ar(t),H.n(new W.h0(),{func:1,ret:P.S,args:[u]}),[u])
return H.h(u.gaM(u),"$iT")},
nJ:function(a){H.h(a,"$ij")
return"wheel"},
cv:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nv(a)
if(typeof t==="string")u=a.tagName}catch(s){H.aj(s)}return u},
nM:function(a){var u,t,s
t=document.createElement("input")
u=H.h(t,"$icB")
try{u.type=a}catch(s){H.aj(s)}return u},
jV:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mz:function(a,b,c,d){var u,t
u=W.jV(W.jV(W.jV(W.jV(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.mO(new W.jK(c),W.p)
if(u!=null&&!0)J.nr(a,b,u,!1)
return new W.jJ(a,b,u,!1,[e])},
my:function(a){var u,t
u=W.lP(null)
t=window.location
u=new W.bQ(new W.k2(u,t))
u.fD(a)
return u},
oy:function(a,b,c,d){H.h(a,"$iT")
H.H(b)
H.H(c)
H.h(d,"$ibQ")
return!0},
oz:function(a,b,c,d){var u,t,s
H.h(a,"$iT")
H.H(b)
H.H(c)
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
mA:function(){var u,t,s,r,q
u=P.e
t=P.m_(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.ke(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kd(t,P.dQ(null,null,null,u),P.dQ(null,null,null,u),P.dQ(null,null,null,u),null)
t.fO(null,new H.hC(C.A,r,[s,u]),q,null)
return t},
mO:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a0
if(u===C.l)return a
return u.dV(a,b)},
z:function z(){},
fx:function fx(){},
dn:function dn(){},
fy:function fy(){},
co:function co(){},
bV:function bV(){},
bz:function bz(){},
bW:function bW(){},
bX:function bX(){},
bA:function bA(){},
cs:function cs(){},
fO:function fO(){},
W:function W(){},
ct:function ct(){},
fP:function fP(){},
b0:function b0(){},
b1:function b1(){},
fQ:function fQ(){},
fR:function fR(){},
fU:function fU(){},
aE:function aE(){},
cu:function cu(){},
fV:function fV(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
fW:function fW(){},
fX:function fX(){},
jE:function jE(a,b){this.a=a
this.b=b},
T:function T(){},
h0:function h0(){},
p:function p(){},
j:function j(){},
aF:function aF(){},
cx:function cx(){},
h7:function h7(){},
hb:function hb(){},
aN:function aN(){},
dG:function dG(){},
dH:function dH(){},
c1:function c1(){},
dI:function dI(){},
bk:function bk(){},
cA:function cA(){},
cB:function cB(){},
b4:function b4(){},
dO:function dO(){},
dR:function dR(){},
cE:function cE(){},
hJ:function hJ(){},
hK:function hK(){},
hL:function hL(a){this.a=a},
hM:function hM(){},
hN:function hN(a){this.a=a},
aQ:function aQ(){},
hO:function hO(){},
ag:function ag(){},
ar:function ar(a){this.a=a},
F:function F(){},
cI:function cI(){},
aS:function aS(){},
i3:function i3(){},
e5:function e5(){},
ie:function ie(){},
ig:function ig(a){this.a=a},
ii:function ii(){},
aT:function aT(){},
it:function it(){},
aU:function aU(){},
iu:function iu(){},
aV:function aV(){},
ix:function ix(){},
iy:function iy(a){this.a=a},
aG:function aG(){},
b9:function b9(){},
ed:function ed(){},
ee:function ee(){},
iE:function iE(){},
cO:function cO(){},
aW:function aW(){},
aH:function aH(){},
iG:function iG(){},
iH:function iH(){},
iM:function iM(){},
aX:function aX(){},
aY:function aY(){},
iQ:function iQ(){},
iR:function iR(){},
bO:function bO(){},
jd:function jd(){},
jv:function jv(){},
jw:function jw(){},
be:function be(){},
d1:function d1(){},
d2:function d2(){},
jF:function jF(){},
ey:function ey(){},
jU:function jU(){},
eQ:function eQ(){},
k7:function k7(){},
kb:function kb(){},
jD:function jD(){},
jH:function jH(a){this.a=a},
jI:function jI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ln:function ln(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jJ:function jJ(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jK:function jK(a){this.a=a},
bQ:function bQ(a){this.a=a},
D:function D(){},
e0:function e0(a){this.a=a},
hW:function hW(a){this.a=a},
hV:function hV(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(){},
k4:function k4(){},
k5:function k5(){},
kd:function kd(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
ke:function ke(){},
kc:function kc(){},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aB:function aB(){},
k2:function k2(a,b){this.a=a
this.b=b},
fg:function fg(a){this.a=a},
kp:function kp(a){this.a=a},
ex:function ex(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
eV:function eV(){},
eW:function eW(){},
eX:function eX(){},
d8:function d8(){},
d9:function d9(){},
eZ:function eZ(){},
f_:function f_(){},
f3:function f3(){},
f6:function f6(){},
f7:function f7(){},
da:function da(){},
db:function db(){},
f9:function f9(){},
fa:function fa(){},
fh:function fh(){},
fi:function fi(){},
fj:function fj(){},
fk:function fk(){},
fl:function fl(){},
fm:function fm(){},
fn:function fn(){},
fo:function fo(){},
fp:function fp(){},
fq:function fq(){}},O={
l7:function(a){var u=new O.a6([a])
u.bU(a)
return u},
a6:function a6(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cD:function cD(){this.b=this.a=null},
m1:function(){var u,t,s
u=new O.dU()
u.sfZ(O.l7(V.ao))
u.e.bi(u.ghF(),u.ghH())
t=new O.b6(u,"emission")
t.c=C.d
t.f=new V.a4(0,0,0)
u.f=t
t=new O.b6(u,"ambient")
t.c=C.d
t.f=new V.a4(0,0,0)
u.r=t
t=new O.b6(u,"diffuse")
t.c=C.d
t.f=new V.a4(0,0,0)
u.x=t
t=new O.b6(u,"invDiffuse")
t.c=C.d
t.f=new V.a4(0,0,0)
u.y=t
t=new O.hI(u,"specular")
t.c=C.d
t.f=new V.a4(0,0,0)
t.ch=100
u.z=t
t=new O.hF(u,"bump")
t.c=C.d
u.Q=t
u.ch=null
t=new O.b6(u,"reflect")
t.c=C.d
t.f=new V.a4(0,0,0)
u.cx=t
t=new O.hH(u,"refract")
t.c=C.d
t.f=new V.a4(0,0,0)
t.ch=1
u.cy=t
t=new O.hE(u,"alpha")
t.c=C.d
t.f=1
u.db=t
t=new D.dP()
t.bU(D.a8)
t.sfF(H.d([],[D.dz]))
t.sfG(H.d([],[D.e3]))
t.sfH(H.d([],[D.ea]))
t.sfI(H.d([],[D.ei]))
t.sfJ(H.d([],[D.ej]))
t.sfK(H.d([],[D.bN]))
t.Q=null
t.ch=null
t.d_(t.ghD(),t.gig(),t.gik())
u.dx=t
s=t.Q
if(s==null){s=D.Y()
t.Q=s
t=s}else t=s
t.h(0,u.giF())
t=u.dx
s=t.ch
if(s==null){s=D.Y()
t.ch=s
t=s}else t=s
t.h(0,u.gfP())
u.dy=null
return u},
dU:function dU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dV:function dV(){},
hF:function hF(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b6:function b6(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hH:function hH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hI:function hI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bM:function bM(){}},E={
l9:function(a,b,c,d,e,f){var u=new E.an()
u.a=d
u.b=!0
u.sfC(0,O.l7(E.an))
u.y.bi(u.gkC(),u.gkF())
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
u.sab(0,e)
u.sbe(f)
u.saX(c)
return u},
oe:function(a,b){var u=new E.ia(a,b)
u.fv(a,b)
return u},
oi:function(a,b,c,d,e){var u,t,s,r
u=J.U(a)
if(!!u.$ibW)return E.mi(a,!0,!0,!0,!1)
t=W.l6(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcp(a).h(0,t)
r=E.mi(t,!0,!0,!0,!1)
r.a=a
return r},
mi:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.ek()
t=H.h(C.q.cW(a,"webgl2",P.nV(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ic9")
if(t==null)H.t(P.w("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oe(t,a)
s=new T.iJ(t)
s.b=H.ai((t&&C.b).cY(t,3379))
s.c=H.ai(C.b.cY(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.er(a)
r=new X.ho()
r.c=new X.aR(!1,!1,!1)
r.siu(P.dQ(null,null,null,P.o))
s.b=r
r=new X.hP(s)
r.f=0
r.r=V.bK()
r.x=V.bK()
r.Q=1
r.ch=1
s.c=r
r=new X.hw(s)
r.r=0
r.x=V.bK()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iP(s)
r.e=0
r.f=V.bK()
r.r=V.bK()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sha(H.d([],[[P.cN,P.Q]]))
r=s.z
q=document
p=W.ag
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.ghQ(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.ghW(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.ghJ(),m),!1,n))
r=s.z
l=W.b4
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.gi_(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.ghY(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.gi3(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.gi7(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.gi5(),o),!1,p))
l=s.z
k=W.be;(l&&C.a).h(l,W.ac(a,H.H(W.nJ(a)),H.n(s.gi9(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.ghS(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.ghU(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.gib(),m),!1,n))
n=s.z
m=W.aY
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.gir(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.gim(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.gip(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.az(Date.now(),!1)
u.cy=0
u.dE()
return u},
fG:function fG(){},
an:function an(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ia:function ia(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ek:function ek(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(a){this.a=a}},Z={
lm:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aw(a,b,u)
C.b.dX(a,b,new Int16Array(H.cd(c)),35044)
C.b.aw(a,b,null)
return new Z.eu(b,u)},
aI:function(a){return new Z.bd(a)},
eu:function eu(a,b){this.a=a
this.b=b},
ds:function ds(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
jx:function jx(a){this.a=a},
dt:function dt(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bF:function bF(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
Y:function(){var u=new D.c_()
u.saj(null)
u.saR(null)
u.c=null
u.d=0
return u},
fJ:function fJ(){},
c_:function c_(){var _=this
_.d=_.c=_.b=_.a=null},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
B:function B(a){this.a=a
this.b=null},
c2:function c2(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
c3:function c3(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
O:function O(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
dz:function dz(){},
a8:function a8(){},
dP:function dP(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e3:function e3(){},
ea:function ea(){},
ei:function ei(){},
ej:function ej(){},
bN:function bN(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},X={du:function du(a,b){this.a=a
this.b=b},dN:function dN(a,b){this.a=a
this.b=b},ho:function ho(){var _=this
_.d=_.c=_.b=_.a=null},dS:function dS(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hw:function hw(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aR:function aR(a,b,c){this.a=a
this.b=b
this.c=c},bH:function bH(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hP:function hP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},i4:function i4(){},em:function em(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iP:function iP(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},er:function er(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nL:function(a,b,c,d,e,f,g){var u,t
u=new X.hd()
t=new V.aM(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.me
if(t==null){t=V.md(0,0,1,1)
$.me=t}u.r=t
return u},
dv:function dv(){},
hd:function hd(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e2:function e2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ef:function ef(){}},V={
pz:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bh(a-b,u)
return(a<0?a+u:a)+b},
X:function(a,b,c){if(a==null)return C.c.ah("null",c)
return C.c.ah(C.e.eW(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
ci:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.X(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.f(u,p)
C.a.n(u,p,C.c.ah(u[p],s))}return u},
lD:function(a,b){return C.e.l8(Math.pow(b,C.a_.cD(Math.log(H.p3(a))/Math.log(b))))},
dX:function(){var u=$.m5
if(u==null){u=V.bo(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.m5=u}return u},
bo:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ao(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m4:function(a,b,c){return V.bo(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m3:function(a,b,c,d){return V.bo(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m2:function(a){var u,t
u=Math.cos(a)
t=Math.sin(a)
return V.bo(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
bK:function(){var u=$.m9
if(u==null){u=new V.aa(0,0)
$.m9=u}return u},
ma:function(){var u=$.bL
if(u==null){u=new V.a1(0,0,0)
$.bL=u}return u},
md:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.e7(a,b,c,d)},
d_:function(){var u=$.mu
if(u==null){u=new V.I(0,0,0)
$.mu=u}return u},
os:function(){var u=$.jh
if(u==null){u=new V.I(-1,0,0)
$.jh=u}return u},
mv:function(){var u=$.ji
if(u==null){u=new V.I(0,1,0)
$.ji=u}return u},
mw:function(){var u=$.jj
if(u==null){u=new V.I(0,0,1)
$.jj=u}return u},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
aM:function aM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h2:function h2(a){this.a=a},
dW:function dW(a,b,c,d,e,f,g,h,i){var _=this
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
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
e7:function e7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b){this.a=a
this.b=b},
I:function I(a,b,c){this.a=a
this.b=b
this.c=c},
a_:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.H(a,0)
t=C.c.H(b,0)
s=new V.i8()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
x:function(a){var u=new V.ij()
u.fw(a)
return u},
iO:function(){var u,t
u=new V.iN()
t=P.e
u.siU(new H.aP([t,V.cM]))
u.siY(new H.aP([t,V.cQ]))
u.c=null
return u},
bh:function bh(){},
aA:function aA(){},
dT:function dT(){},
aw:function aw(){this.a=null},
i8:function i8(){this.b=this.a=null},
ij:function ij(){this.a=null},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
el:function el(a,b,c){this.a=a
this.b=b
this.c=c},
cQ:function cQ(a,b){this.a=a
this.b=b
this.c=null},
iN:function iN(){this.c=this.b=this.a=null},
cR:function cR(a){this.b=a
this.a=this.c=null},
pv:function(a){P.oj(C.V,new V.kX(a))},
og:function(a,b){var u=new V.io()
u.fA(a,!0)
return u},
bB:function bB(){},
kX:function kX(a){this.a=a},
fT:function fT(a){var _=this
_.a=a
_.d=_.c=_.b=null},
he:function he(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hf:function hf(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i2:function i2(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i6:function i6(a,b){this.a=a
this.b=b
this.c=null},
i7:function i7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
io:function io(){this.b=this.a=null},
iq:function iq(a){this.a=a},
ip:function ip(a){this.a=a},
ir:function ir(a){this.a=a}},U={
lV:function(){var u=new U.fK()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
dx:function(a){var u=new U.dw()
u.a=a
return u},
la:function(a){var u=new U.cz()
u.bU(U.ak)
u.bi(u.gfL(),u.gii())
u.e=null
u.f=V.dX()
u.r=0
return u},
mq:function(a,b,c,d,e,f,g,h){var u,t,s,r,q
u=new U.es()
t=U.lV()
t.sf2(0,!0)
t.seA(6.283185307179586)
t.seC(0)
t.sa4(0,0)
t.seB(100)
t.sa2(0)
t.sdZ(0.5)
u.b=t
s=u.gbl()
t.gC().h(0,s)
t=U.lV()
t.sf2(0,!0)
t.seA(6.283185307179586)
t.seC(0)
t.sa4(0,0)
t.seB(100)
t.sa2(0)
t.sdZ(0.5)
u.c=t
t.gC().h(0,s)
u.d=null
u.e=!1
u.f=!1
u.r=!1
u.x=2.5
u.y=2.5
u.z=2
u.Q=4
u.cx=!1
u.ch=!1
u.cy=0
u.db=0
u.dx=null
u.dy=0
u.fr=null
u.fx=null
r=new X.aR(b,!1,!1)
q=u.d
u.d=r
t=new D.O("modifiers",q,r,u,[X.aR])
t.b=!0
u.a0(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.O("invertX",t,!1,u,[P.S])
t.b=!0
u.a0(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.O("invertY",t,!1,u,[P.S])
t.b=!0
u.a0(t)}u.jH(c)
return u},
fK:function fK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){this.b=this.a=null},
cz:function cz(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ak:function ak(){},
es:function es(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dD:function dD(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nY:function(a,b){var u,t
u=a.am
t=new A.hD(b,u)
t.fz(b,u)
t.fu(a,b)
return t},
lj:function(a,b,c,d,e){var u=new A.iX(a,b,c,e)
u.f=d
u.sj8(P.nW(d,0,!1,P.o))
return u},
dq:function dq(a,b,c){this.a=a
this.b=b
this.c=c},
fz:function fz(a){this.a=a},
hD:function hD(a,b){var _=this
_.bu=_.e2=_.bt=_.am=_.ay=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.ei=_.cu=_.eh=_.bH=_.eg=_.ef=_.bG=_.bF=_.ee=_.ed=_.bE=_.bD=_.bC=_.ec=_.eb=_.bB=_.ea=_.e9=_.bA=_.e8=_.e7=_.bz=_.by=_.e6=_.e5=_.bx=_.bw=_.e4=_.e3=_.bv=null
_.cB=_.em=_.cA=_.el=_.cz=_.ek=_.cw=_.ej=_.cv=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hG:function hG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.am=b4
_.bt=b5},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
cW:function cW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cU:function cU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cX:function cX(a,b,c,d,e,f,g,h,i,j){var _=this
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
cV:function cV(a,b,c,d,e,f,g,h,i,j){var _=this
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
cY:function cY(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cL:function cL(){},
bZ:function bZ(a,b){this.a=a
this.b=b},
en:function en(){},
j2:function j2(a){this.a=a},
P:function P(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iX:function iX(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iY:function iY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j0:function j0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aq:function aq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ly:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
u=F.lh()
F.de(u,b,c,d,a,1,0,0,1)
F.de(u,b,c,d,a,0,1,0,3)
F.de(u,b,c,d,a,0,0,1,2)
F.de(u,b,c,d,a,-1,0,0,0)
F.de(u,b,c,d,a,0,-1,0,0)
F.de(u,b,c,d,a,0,0,-1,3)
u.ax()
return u},
ks:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
de:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.I(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.I(o+a3,n+a1,m+a2)
u.b=l
k=new V.I(o-a3,n-a1,m-a2)
u.c=k
j=new V.I(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.ks(t)
f=F.ks(u.b)
e=F.lF(d,a0,new F.kr(u,F.ks(u.c),F.ks(u.d),f,g,c),b)
if(e!=null)a.bb(e)},
mT:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.lh()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ah])
q=u.a
p=new V.I(0,0,t)
p=p.A(0,Math.sqrt(p.I(p)))
C.a.h(r,q.jA(new V.b8(a,-1,-1,-1),new V.aM(1,1,1,1),new V.a1(0,0,d),new V.I(0,0,t),new V.aa(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
p=u.a
if(typeof k!=="number")return H.J(k)
j=new V.I(m,l,t).A(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.et(new V.b8(a,-1,-1,-1),null,new V.aM(i,g,h,1),new V.a1(m*k,l*k,d),new V.I(0,0,t),new V.aa(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.jy(r)
return u},
lz:function(a,b,c,d,e,f){return F.p7(b,c,d,new F.kB(a,f),e)},
p7:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lF(c,e,new F.kD(d),null)
if(u==null)return
u.ax()
u.ci()
if(b)u.bb(F.mT(3,!1,!1,1,new F.kE(d),e))
if(a)u.bb(F.mT(1,!0,!1,-1,new F.kF(d),e))
return u},
pw:function(a,b,c,d){var u,t
u={}
u.a=b
u.a=new F.kY()
t=F.ly(a,null,new F.kZ(u,c),d)
t.ci()
return t},
n3:function(a,b,c,d){return F.mS(c,a,d,b,new F.l_())},
pn:function(a,b,c,d,e,f){return F.mS(d,a,e,b,new F.kM(f,c))},
mS:function(a,b,c,d,e){var u=F.lF(a,b,new F.kC(H.n(e,{func:1,ret:V.a1,args:[P.r]}),d,b,c),null)
if(u==null)return
u.ax()
u.ci()
return u},
lF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ah,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.lh()
t=H.d([],[F.ah])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.et(null,null,new V.aM(p,0,0,1),null,null,new V.aa(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cr(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.et(null,null,new V.aM(j,i,h,1),null,null,new V.aa(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cr(d))}}u.d.jz(a+1,b+1,t)
return u},
cw:function(a,b,c){var u,t
u=new F.a9()
t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
u.iN(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a3()
return u},
nS:function(a,b){var u,t
u=new F.bn()
t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.cf(a)
u.cg(b)
C.a.h(u.a.a.c.b,u)
u.a.a.a3()
return u},
lh:function(){var u,t
u=new F.e9()
t=new F.jk(u)
t.b=!1
t.sj9(H.d([],[F.ah]))
u.a=t
t=new F.im(u)
t.sc7(H.d([],[F.bJ]))
u.b=t
t=new F.il(u)
t.shn(H.d([],[F.bn]))
u.c=t
t=new F.ik(u)
t.shb(H.d([],[F.a9]))
u.d=t
u.e=null
return u},
et:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ah()
t=new F.js(u)
t.sc7(H.d([],[F.bJ]))
u.b=t
t=new F.jo(u)
s=[F.bn]
t.sho(H.d([],s))
t.shp(H.d([],s))
u.c=t
t=new F.jl(u)
s=[F.a9]
t.shc(H.d([],s))
t.shd(H.d([],s))
t.she(H.d([],s))
u.d=t
h=$.nh()
u.e=0
t=$.bv()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bu().a)!==0?e:null
u.x=(s&$.bt().a)!==0?b:null
u.y=(s&$.bw().a)!==0?f:null
u.z=(s&$.bx().a)!==0?g:null
u.Q=(s&$.ni().a)!==0?c:null
u.ch=(s&$.cn().a)!==0?i:0
u.cx=(s&$.bs().a)!==0?a:null
return u},
kr:function kr(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kB:function kB(a,b){this.a=a
this.b=b},
kD:function kD(a){this.a=a},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kY:function kY(){},
kZ:function kZ(a,b){this.a=a
this.b=b},
l_:function l_(){},
kM:function kM(a,b){this.a=a
this.b=b},
kC:function kC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
h6:function h6(){},
is:function is(){},
bn:function bn(){this.b=this.a=null},
hq:function hq(){},
iW:function iW(){},
bJ:function bJ(){this.a=null},
e9:function e9(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a
this.b=null},
il:function il(a){this.a=a
this.b=null},
im:function im(a){this.a=a
this.b=null},
ah:function ah(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ju:function ju(a){this.a=a},
jt:function jt(a){this.a=a},
jk:function jk(a){this.a=a
this.c=this.b=null},
jl:function jl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jm:function jm(a,b){this.a=a
this.b=b},
jn:function jn(a,b){this.a=a
this.b=b},
jo:function jo(a){this.a=a
this.c=this.b=null},
jq:function jq(){},
jp:function jp(){},
jr:function jr(){},
hX:function hX(){},
js:function js(a){this.a=a
this.b=null}},T={cP:function cP(){},eh:function eh(){},iI:function iI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},iJ:function iJ(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iK:function iK(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},L={
mZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
u=V.og("Test 025",!0)
t=W.l6(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.E(u.a,t)
s=[P.e]
u.dO(H.d(["Test of the Material Lighting shader with a textured spot light. ","Use Ctrl plus the mouse to move the light."],s))
u.jw(H.d(["shapes"],s))
u.dO(H.d(["\xab[Back to Tests|../]"],s))
s=document
r=C.z.cX(s,"testCanvas")
if(r==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
q=E.oi(r,!0,!0,!0,!1)
p=U.la(null)
p.h(0,U.dx(V.m4(0,0,-2.5)))
p.h(0,U.mq(!1,!0,q.r,!1,!1,!1,null,!1))
o=new V.a4(1,1,1)
n=q.f.kx("../resources/Test.png")
m=new D.bN()
m.z=0.6
m.Q=1
m.f=new V.a4(1,1,1)
m.z=1.0471975511965976
m.ch=1
m.cx=0
m.cy=0
m.a=V.ma()
m.b=V.mw()
m.c=V.mv()
m.d=V.os()
l=m.e
m.e=p
p.gC().h(0,m.gc6())
k=new D.O("mover",l,m.e,m,[U.ak])
k.b=!0
m.a6(k)
if(!m.f.v(0,o)){l=m.f
m.f=o
k=new D.O("color",l,o,m,[V.a4])
k.b=!0
m.a6(k)}k=m.r
if(k!==n){if(k!=null)k.gC().M(0,m.gc6())
l=m.r
m.r=n
n.gC().h(0,m.gc6())
n=new D.O("texture",l,m.r,m,[T.eh])
n.b=!0
m.a6(n)}n=m.z
if(!(Math.abs(n-0.5)<$.M().a)){m.z=0.5
k=1/(Math.sqrt(2)*Math.tan(m.z))
m.x=k
m.y=k*m.Q
n=new D.O("fov",n,m.z,m,[P.r])
n.b=!0
m.a6(n)}n=m.Q
if(!(Math.abs(n-1)<$.M().a)){m.Q=1
k=m.x
if(typeof k!=="number")return k.F()
m.y=k
n=new D.O("ratio",n,1,m,[P.r])
n.b=!0
m.a6(n)}n=m.ch
if(!(Math.abs(n-0.5)<$.M().a)){m.ch=0.5
n=new D.O("attenuation0",n,0.5,m,[P.r])
n.b=!0
m.a6(n)}n=m.cx
if(!(Math.abs(n-0.05)<$.M().a)){m.cx=0.05
n=new D.O("attenuation1",n,0.05,m,[P.r])
n.b=!0
m.a6(n)}n=m.cy
if(!(Math.abs(n-0.05)<$.M().a)){m.cy=0.05
n=new D.O("attenuation2",n,0.05,m,[P.r])
n.b=!0
m.a6(n)}j=O.m1()
j.dx.h(0,m)
n=j.r
n.sal(0,new V.a4(0.05,0.05,0.05))
n=j.x
n.sal(0,new V.a4(0.7,0.7,0.7))
n=j.z
n.sal(0,new V.a4(0.3,0.3,0.3))
n=j.z
if(n.c===C.d){n.c=C.j
n.bT()
n.cc(100)
k=n.a
k.a=null
k.ad(null)}n.cc(100)
i=E.l9(null,!0,null,"",null,null)
i.sab(0,F.n3(30,1,15,0.5))
h=E.l9(null,!0,null,"",null,null)
h.saX(U.dx(V.m3(3,3,3,1)))
n=F.ly(1,null,null,1)
n.cC()
h.sab(0,n)
g=U.la(null)
g.h(0,U.mq(!1,!1,q.r,!1,!1,!1,null,!1))
g.h(0,U.dx(V.m2(3.141592653589793)))
g.h(0,U.dx(V.m4(0,0,5)))
f=E.l9(null,!0,null,"",null,null)
n=U.la(null)
n.h(0,U.dx(V.m3(0.1,0.1,0.1,1)))
n.h(0,p)
f.saX(n)
f.sab(0,F.lz(0,!1,!0,1,40,1))
n=O.m1()
n.f.sal(0,new V.a4(1,1,1))
f.sbe(n)
n=new M.dD()
n.sh1(0,O.l7(E.an))
n.d.bi(n.ghM(),n.ghO())
n.e=null
n.f=null
n.r=null
n.x=null
e=X.nL(!0,!0,!1,null,2000,null,0)
d=new X.e2()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saX(null)
k=d.c
if(!(Math.abs(k-1.0471975511965976)<$.M().a)){d.c=1.0471975511965976
k=new D.O("fov",k,1.0471975511965976,d,[P.r])
k.b=!0
d.aO(k)}k=d.d
if(!(Math.abs(k-0.1)<$.M().a)){d.d=0.1
k=new D.O("near",k,0.1,d,[P.r])
k.b=!0
d.aO(k)}k=d.e
if(!(Math.abs(k-2000)<$.M().a)){d.e=2000
k=new D.O("far",k,2000,d,[P.r])
k.b=!0
d.aO(k)}k=n.a
if(k!==d){if(k!=null)k.gC().M(0,n.gas())
l=n.a
n.a=d
d.gC().h(0,n.gas())
k=new D.O("camera",l,n.a,n,[X.dv])
k.b=!0
n.aD(k)}k=n.b
if(k!==e){if(k!=null)k.gC().M(0,n.gas())
l=n.b
n.b=e
e.gC().h(0,n.gas())
k=new D.O("target",l,n.b,n,[X.ef])
k.b=!0
n.aD(k)}n.sbe(null)
n.sbe(j)
n.d.h(0,i)
n.d.h(0,h)
n.d.h(0,f)
n.a.saX(g)
k=q.d
if(k!==n){if(k!=null)k.gC().M(0,q.gd2())
q.d=n
n.gC().h(0,q.gd2())
q.d3()}n=new V.i6("shapes",!0)
s=C.z.cX(s,"shapes")
n.c=s
if(s==null)H.t("Failed to find shapes for RadioGroup")
n.b6(0,"Cube",new L.kO(i))
n.b6(0,"Cylinder",new L.kP(i))
n.b6(0,"Cone",new L.kQ(i))
n.b6(0,"Sphere",new L.kR(i))
n.dM(0,"Toroid",new L.kS(i),!0)
n.b6(0,"Knot",new L.kT(i))
s=q.z
if(s==null){s=D.Y()
q.z=s}n={func:1,ret:-1,args:[D.B]}
k=H.n(new L.kU(u,j),n)
if(s.b==null)s.saR(H.d([],[n]))
s=s.b;(s&&C.a).h(s,k)
V.pv(q)},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,L]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ld.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gJ:function(a){return H.cJ(a)},
i:function(a){return"Instance of '"+H.c6(a)+"'"}}
J.hl.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iS:1}
J.dL.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0},
$iL:1}
J.dM.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.i1.prototype={}
J.bP.prototype={}
J.bm.prototype={
i:function(a){var u=a[$.n5()]
if(u==null)return this.fo(a)
return"JavaScript function for "+H.l(J.au(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibE:1}
J.aO.prototype={
h:function(a,b){H.A(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.G("add"))
a.push(b)},
kV:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("removeAt"))
u=a.length
if(b>=u)throw H.c(P.e6(b,null,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.G("remove"))
for(u=0;u<a.length;++u)if(J.V(a[u],b)){a.splice(u,1)
return!0}return!1},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bi(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.l(a[t]))
return u.join(b)},
ku:function(a){return this.m(a,"")},
km:function(a,b,c,d){var u,t,s
H.A(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bi(a))}return t},
kl:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bi(a))}throw H.c(H.hj())},
kk:function(a,b){return this.kl(a,b,null)},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
fl:function(a,b,c){if(b<0||b>a.length)throw H.c(P.ae(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.ae(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gkj:function(a){if(a.length>0)return a[0]
throw H.c(H.hj())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.hj())},
fj:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.G("setRange"))
P.bq(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cj(d)
if(e+t>u.gl(d))throw H.c(H.nO())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bj:function(a,b,c,d){return this.fj(a,b,c,d,0)},
dP:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bi(a))}return!1},
X:function(a,b){var u
for(u=0;u<a.length;++u)if(J.V(a[u],b))return!0
return!1},
i:function(a){return P.lb(a,"[","]")},
gV:function(a){return new J.av(a,a.length,0,[H.u(a,0)])},
gJ:function(a){return H.cJ(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.G("set length"))
if(b<0)throw H.c(P.ae(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ch(a,b))
return a[b]},
n:function(a,b,c){H.A(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.G("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ch(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bj(u,0,a.length,a)
this.bj(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.lc.prototype={}
J.av.prototype={
gL:function(a){return this.d},
D:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.C(u))
s=this.c
if(s>=t){this.sdl(null)
return!1}this.sdl(u[s]);++this.c
return!0},
sdl:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
J.bG.prototype={
l8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.G(""+a+".toInt()"))},
cD:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.G(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.G(""+a+".round()"))},
eW:function(a,b){var u,t
if(b>20)throw H.c(P.ae(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.ae(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a_(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.G("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.f(t,1)
u=t[1]
if(3>=s)return H.f(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.F("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q
u=a|0
if(a===u)return 536870911&u
t=Math.abs(a)
s=Math.log(t)/0.6931471805599453|0
r=Math.pow(2,s)
q=t<1?t/r:r/t
return 536870911&((q*9007199254740992|0)+(q*3542243181176521|0))*599197+s*1259},
p:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a+b},
t:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a-b},
F:function(a,b){if(typeof b!=="number")throw H.c(H.as(b))
return a*b},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ft:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dH(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dH(a,b)},
dH:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.G("Result of truncating division is "+H.l(u)+": "+H.l(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.dG(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
iS:function(a,b){if(b<0)throw H.c(H.as(b))
return this.dG(a,b)},
dG:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia5:1}
J.dK.prototype={$io:1}
J.dJ.prototype={}
J.bl.prototype={
a_:function(a,b){if(b<0)throw H.c(H.ch(a,b))
if(b>=a.length)H.t(H.ch(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.ch(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.l4(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.as(b))
c=P.bq(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.as(c))
if(typeof c!=="number")return c.Z()
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.as(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.Z()
if(b<0)throw H.c(P.e6(b,null,null))
if(b>c)throw H.c(P.e6(b,null,null))
if(c>a.length)throw H.c(P.e6(c,null,null))
return a.substring(b,c)},
aq:function(a,b){return this.u(a,b,null)},
lb:function(a){return a.toLowerCase()},
F:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kK:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.F(c,u)+a},
ah:function(a,b){return this.kK(a,b," ")},
ew:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.ae(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ev:function(a,b){return this.ew(a,b,0)},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im7:1,
$ie:1}
H.v.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a_(this.a,b)},
$acZ:function(){return[P.o]},
$ay:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h_.prototype={}
H.c4.prototype={
gV:function(a){return new H.cC(this,this.gl(this),0,[H.at(this,"c4",0)])},
bN:function(a,b){return this.fn(0,H.n(b,{func:1,ret:P.S,args:[H.at(this,"c4",0)]}))}}
H.cC.prototype={
gL:function(a){return this.d},
D:function(){var u,t,s,r
u=this.a
t=J.cj(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bi(u))
r=this.c
if(r>=s){this.sb2(null)
return!1}this.sb2(t.K(u,r));++this.c
return!0},
sb2:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.hA.prototype={
gV:function(a){return new H.hB(J.by(this.a),this.b,this.$ti)},
gl:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ai:function(a,b){return[b]}}
H.hB.prototype={
D:function(){var u=this.b
if(u.D()){this.sb2(this.c.$1(u.gL(u)))
return!0}this.sb2(null)
return!1},
gL:function(a){return this.a},
sb2:function(a){this.a=H.A(a,H.u(this,1))},
$ab3:function(a,b){return[b]}}
H.hC.prototype={
gl:function(a){return J.aD(this.a)},
K:function(a,b){return this.b.$1(J.fw(this.a,b))},
$ac4:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d0.prototype={
gV:function(a){return new H.jy(J.by(this.a),this.b,this.$ti)}}
H.jy.prototype={
D:function(){var u,t
for(u=this.a,t=this.b;u.D();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.c0.prototype={}
H.cZ.prototype={
n:function(a,b,c){H.A(c,H.at(this,"cZ",0))
throw H.c(P.G("Cannot modify an unmodifiable list"))}}
H.ep.prototype={}
H.fM.prototype={
i:function(a){return P.lg(this)},
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
return H.nF()},
$iE:1}
H.fN.prototype={
gl:function(a){return this.a},
br:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.br(0,b))return
return this.dm(b)},
dm:function(a){return this.b[H.H(a)]},
O:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.A(this.dm(q),u))}}}
H.i9.prototype={}
H.iT.prototype={
ag:function(a){var u,t,s
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
H.hY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hn.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.l(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.l(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.l(this.a)+")"}}
H.j6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.l0.prototype={
$1:function(a){if(!!J.U(a).$ibD)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:18}
H.f2.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iax:1}
H.cr.prototype={
i:function(a){return"Closure '"+H.c6(this).trim()+"'"},
$ibE:1,
glj:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iF.prototype={}
H.iw.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cm(u)+"'"}}
H.cp.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cp))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gJ:function(a){var u,t
u=this.c
if(u==null)t=H.cJ(this.a)
else t=typeof u!=="object"?J.dm(u):H.cJ(u)
return(t^H.cJ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.l(this.d)+"' of "+("Instance of '"+H.c6(u)+"'")}}
H.iV.prototype={
i:function(a){return this.a}}
H.fI.prototype={
i:function(a){return this.a}}
H.ih.prototype={
i:function(a){return"RuntimeError: "+H.l(this.a)}}
H.aP.prototype={
gl:function(a){return this.a},
gkt:function(a){return this.a===0},
ga8:function(a){return new H.hs(this,[H.u(this,0)])},
br:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.di(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.di(t,b)}else return this.kq(b)},
kq:function(a){var u=this.d
if(u==null)return!1
return this.cG(this.c0(u,this.cF(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bm(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bm(r,b)
s=t==null?null:t.b
return s}else return this.kr(b)},
kr:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.c0(u,this.cF(a))
s=this.cG(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.c4()
this.b=u}this.d7(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.c4()
this.c=t}this.d7(t,b,c)}else this.ks(b,c)},
ks:function(a,b){var u,t,s,r
H.A(a,H.u(this,0))
H.A(b,H.u(this,1))
u=this.d
if(u==null){u=this.c4()
this.d=u}t=this.cF(a)
s=this.c0(u,t)
if(s==null)this.cd(u,t,[this.c5(a,b)])
else{r=this.cG(s,a)
if(r>=0)s[r].b=b
else s.push(this.c5(a,b))}},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bi(this))
u=u.c}},
d7:function(a,b,c){var u
H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
u=this.bm(a,b)
if(u==null)this.cd(a,b,this.c5(b,c))
else u.b=c},
hv:function(){this.r=this.r+1&67108863},
c5:function(a,b){var u,t
u=new H.hr(H.A(a,H.u(this,0)),H.A(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hv()
return u},
cF:function(a){return J.dm(a)&0x3ffffff},
cG:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1},
i:function(a){return P.lg(this)},
bm:function(a,b){return a[b]},
c0:function(a,b){return a[b]},
cd:function(a,b,c){a[b]=c},
h6:function(a,b){delete a[b]},
di:function(a,b){return this.bm(a,b)!=null},
c4:function(){var u=Object.create(null)
this.cd(u,"<non-identifier-key>",u)
this.h6(u,"<non-identifier-key>")
return u}}
H.hr.prototype={}
H.hs.prototype={
gl:function(a){return this.a.a},
gV:function(a){var u,t
u=this.a
t=new H.ht(u,u.r,this.$ti)
t.c=u.e
return t}}
H.ht.prototype={
gL:function(a){return this.d},
D:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sd6(null)
return!1}else{this.sd6(u.a)
this.c=this.c.c
return!0}}},
sd6:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
H.kI.prototype={
$1:function(a){return this.a(a)},
$S:18}
H.kJ.prototype={
$2:function(a,b){return this.a(a,b)},
$S:53}
H.kK.prototype={
$1:function(a){return this.a(H.H(a))},
$S:50}
H.hm.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$im7:1,
$ioc:1}
H.cF.prototype={$icF:1}
H.bI.prototype={$ibI:1,$iok:1}
H.dY.prototype={
gl:function(a){return a.length},
$iK:1,
$aK:function(){}}
H.cG.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
n:function(a,b,c){H.p9(c)
H.bg(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.r]},
$ay:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.dZ.prototype={
n:function(a,b,c){H.ai(c)
H.bg(b,a,a.length)
a[b]=c},
$ac0:function(){return[P.o]},
$ay:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hQ.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hR.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hS.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hT.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.hU.prototype={
j:function(a,b){H.bg(b,a,a.length)
return a[b]}}
H.e_.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$ipV:1}
H.cH.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bg(b,a,a.length)
return a[b]},
$icH:1,
$iR:1}
H.d4.prototype={}
H.d5.prototype={}
H.d6.prototype={}
H.d7.prototype={}
P.jA.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:24}
P.jz.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:49}
P.jB.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jC.prototype={
$0:function(){this.a.$0()},
$S:0}
P.f8.prototype={
fR:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.cg(new P.kg(this,b),0),a)
else throw H.c(P.G("`setTimeout()` not found."))},
fS:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.cg(new P.kf(this,a,Date.now(),b),0),a)
else throw H.c(P.G("Periodic timer."))},
$iba:1}
P.kg.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kf.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.ft(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bf.prototype={
kz:function(a){if(this.c!==6)return!0
return this.b.b.cT(H.n(this.d,{func:1,ret:P.S,args:[P.Q]}),a.a,P.S,P.Q)},
kp:function(a){var u,t,s,r
u=this.e
t=P.Q
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fr(u,{func:1,args:[P.Q,P.ax]}))return H.lA(r.l1(u,a.a,a.b,null,t,P.ax),s)
else return H.lA(r.cT(H.n(u,{func:1,args:[P.Q]}),a.a,null,t),s)}}
P.aJ.prototype={
eV:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a0
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.oW(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aJ(0,$.a0,[c])
r=b==null?1:3
this.d8(new P.bf(s,r,a,b,[u,c]))
return s},
l7:function(a,b){return this.eV(a,null,b)},
d8:function(a){var u,t
u=this.a
if(u<=1){a.a=H.h(this.c,"$ibf")
this.c=a}else{if(u===2){t=H.h(this.c,"$iaJ")
u=t.a
if(u<4){t.d8(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kz(null,null,u,H.n(new P.jL(this,a),{func:1,ret:-1}))}},
dC:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.h(this.c,"$ibf")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.h(this.c,"$iaJ")
t=p.a
if(t<4){p.dC(a)
return}this.a=t
this.c=p.c}u.a=this.bo(a)
t=this.b
t.toString
P.kz(null,null,t,H.n(new P.jP(u,this),{func:1,ret:-1}))}},
c9:function(){var u=H.h(this.c,"$ibf")
this.c=null
return this.bo(u)},
bo:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
de:function(a){var u,t,s
u=H.u(this,0)
H.lA(a,{futureOr:1,type:u})
t=this.$ti
if(H.dh(a,"$icy",t,"$acy"))if(H.dh(a,"$iaJ",t,null))P.mx(a,this)
else P.ox(a,this)
else{s=this.c9()
H.A(a,u)
this.a=4
this.c=a
P.d3(this,s)}},
df:function(a,b){var u
H.h(b,"$iax")
u=this.c9()
this.a=8
this.c=new P.am(a,b)
P.d3(this,u)},
$icy:1}
P.jL.prototype={
$0:function(){P.d3(this.a,this.b)},
$S:0}
P.jP.prototype={
$0:function(){P.d3(this.b,this.a.a)},
$S:0}
P.jM.prototype={
$1:function(a){var u=this.a
u.a=0
u.de(a)},
$S:24}
P.jN.prototype={
$2:function(a,b){H.h(b,"$iax")
this.a.df(a,b)},
$1:function(a){return this.$2(a,null)},
$S:48}
P.jO.prototype={
$0:function(){this.a.df(this.b,this.c)},
$S:0}
P.jS.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.eT(H.n(r.d,{func:1}),null)}catch(q){t=H.aj(q)
s=H.ck(q)
if(this.d){r=H.h(this.a.a.c,"$iam").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.h(this.a.a.c,"$iam")
else p.b=new P.am(t,s)
p.a=!0
return}if(!!J.U(u).$icy){if(u instanceof P.aJ&&u.a>=4){if(u.a===8){r=this.b
r.b=H.h(u.c,"$iam")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.l7(new P.jT(o),null)
r.a=!1}},
$S:3}
P.jT.prototype={
$1:function(a){return this.a},
$S:47}
P.jR.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.A(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.cT(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.aj(o)
t=H.ck(o)
s=this.a
s.b=new P.am(u,t)
s.a=!0}},
$S:3}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.h(this.a.a.c,"$iam")
r=this.c
if(r.kz(u)&&r.e!=null){q=this.b
q.b=r.kp(u)
q.a=!1}}catch(p){t=H.aj(p)
s=H.ck(p)
r=H.h(this.a.a.c,"$iam")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.am(t,s)
n.a=!0}},
$S:3}
P.ev.prototype={}
P.iz.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aJ(0,$.a0,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iB(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iC(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.iB.prototype={
$1:function(a){H.A(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.L,args:[H.u(this.b,0)]}}}
P.iC.prototype={
$0:function(){this.b.de(this.a.a)},
$S:0}
P.cN.prototype={}
P.iA.prototype={}
P.ba.prototype={}
P.am.prototype={
i:function(a){return H.l(this.a)},
$ibD:1}
P.kq.prototype={$iq9:1}
P.ky.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.e1()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.c(u)
s=H.c(u)
s.stack=t.i(0)
throw s},
$S:0}
P.jZ.prototype={
l2:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a0){a.$0()
return}P.mJ(null,null,this,a,-1)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kx(null,null,this,u,H.h(t,"$iax"))}},
l3:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.l===$.a0){a.$1(b)
return}P.mK(null,null,this,a,b,-1,c)}catch(s){u=H.aj(s)
t=H.ck(s)
P.kx(null,null,this,u,H.h(t,"$iax"))}},
jJ:function(a,b){return new P.k0(this,H.n(a,{func:1,ret:b}),b)},
ck:function(a){return new P.k_(this,H.n(a,{func:1,ret:-1}))},
dV:function(a,b){return new P.k1(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
eT:function(a,b){H.n(a,{func:1,ret:b})
if($.a0===C.l)return a.$0()
return P.mJ(null,null,this,a,b)},
cT:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.a0===C.l)return a.$1(b)
return P.mK(null,null,this,a,b,c,d)},
l1:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.a0===C.l)return a.$2(b,c)
return P.oX(null,null,this,a,b,c,d,e,f)}}
P.k0.prototype={
$0:function(){return this.a.eT(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k_.prototype={
$0:function(){return this.a.l2(this.b)},
$S:3}
P.k1.prototype={
$1:function(a){var u=this.c
return this.a.l3(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jX.prototype={
gV:function(a){var u=new P.eK(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
X:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.h(u[b],"$icb")!=null}else{t=this.h2(b)
return t}},
h2:function(a){var u=this.d
if(u==null)return!1
return this.bZ(this.dn(u,a),a)>=0},
h:function(a,b){var u,t
H.A(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lo()
this.b=u}return this.da(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lo()
this.c=t}return this.da(t,b)}else return this.fU(0,b)},
fU:function(a,b){var u,t,s
H.A(b,H.u(this,0))
u=this.d
if(u==null){u=P.lo()
this.d=u}t=this.dg(b)
s=u[t]
if(s==null)u[t]=[this.bW(b)]
else{if(this.bZ(s,b)>=0)return!1
s.push(this.bW(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iz(this.c,b)
else return this.iw(0,b)},
iw:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.dn(u,b)
s=this.bZ(t,b)
if(s<0)return!1
this.dI(t.splice(s,1)[0])
return!0},
da:function(a,b){H.A(b,H.u(this,0))
if(H.h(a[b],"$icb")!=null)return!1
a[b]=this.bW(b)
return!0},
iz:function(a,b){var u
if(a==null)return!1
u=H.h(a[b],"$icb")
if(u==null)return!1
this.dI(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bW:function(a){var u,t
u=new P.cb(H.A(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dd()
return u},
dI:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dd()},
dg:function(a){return J.dm(a)&1073741823},
dn:function(a,b){return a[this.dg(b)]},
bZ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.V(a[t].a,b))return t
return-1}}
P.cb.prototype={}
P.eK.prototype={
gL:function(a){return this.d},
D:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bi(u))
else{u=this.c
if(u==null){this.sdc(null)
return!1}else{this.sdc(H.A(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdc:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
P.hu.prototype={
$2:function(a,b){this.a.n(0,H.A(a,this.b),H.A(b,this.c))},
$S:7}
P.hv.prototype={$ii:1,$ib:1}
P.y.prototype={
gV:function(a){return new H.cC(a,this.gl(a),0,[H.bS(this,a,"y",0)])},
K:function(a,b){return this.j(a,b)},
la:function(a,b){var u,t
u=H.d([],[H.bS(this,a,"y",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
l9:function(a){return this.la(a,!0)},
p:function(a,b){var u,t
u=[H.bS(this,a,"y",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bj(t,0,this.gl(a),a)
C.a.bj(t,this.gl(a),t.length,b)
return t},
kh:function(a,b,c,d){var u
H.A(d,H.bS(this,a,"y",0))
P.bq(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lb(a,"[","]")}}
P.hx.prototype={}
P.hy.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.l(a)
u.a=t+": "
u.a+=H.l(b)},
$S:7}
P.af.prototype={
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bS(this,a,"af",0),H.bS(this,a,"af",1)]})
for(u=J.by(this.ga8(a));u.D();){t=u.gL(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aD(this.ga8(a))},
i:function(a){return P.lg(a)},
$iE:1}
P.kh.prototype={
n:function(a,b,c){H.A(b,H.u(this,0))
H.A(c,H.u(this,1))
throw H.c(P.G("Cannot modify unmodifiable map"))}}
P.hz.prototype={
j:function(a,b){return J.lK(this.a,b)},
n:function(a,b,c){J.l1(this.a,H.A(b,H.u(this,0)),H.A(c,H.u(this,1)))},
O:function(a,b){J.lM(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aD(this.a)},
i:function(a){return J.au(this.a)},
$iE:1}
P.eq.prototype={}
P.k3.prototype={
au:function(a,b){var u
for(u=J.by(H.k(b,"$ii",this.$ti,"$ai"));u.D();)this.h(0,u.gL(u))},
i:function(a){return P.lb(this,"{","}")},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=P.oB(this,this.r,H.u(this,0)),t=0;u.D();){s=u.d
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
$ii:1,
$imf:1}
P.eL.prototype={}
P.fe.prototype={}
P.fE.prototype={
kB:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bq(c,a0,b.length,null,null,null)
u=$.nk()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.H(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kH(C.c.H(b,n))
j=H.kH(C.c.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.f(u,i)
h=u[i]
if(h>=0){i=C.c.a_("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.c.u(b,s,t)
r.a=g+H.c7(m)
s=n
continue}}throw H.c(P.a7("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.u(b,s,a0)
f=g.length
if(q>=0)P.lQ(b,p,a0,q,o,f)
else{e=C.f.bh(f-1,4)+1
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.aZ(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.lQ(b,p,a0,q,o,d)
else{e=C.f.bh(d,4)
if(e===1)throw H.c(P.a7("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.aZ(b,a0,a0,e===2?"==":"=")}return b},
$abY:function(){return[[P.b,P.o],P.e]}}
P.fF.prototype={
$abC:function(){return[[P.b,P.o],P.e]}}
P.bY.prototype={}
P.bC.prototype={}
P.h1.prototype={
$abY:function(){return[P.e,[P.b,P.o]]}}
P.hh.prototype={
i:function(a){return this.a}}
P.hg.prototype={
h3:function(a,b,c){var u,t,s,r,q,p
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=null;r<c;++r){if(r>=a.length)return H.f(a,r)
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
if(r>b)q.a+=C.c.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.ny(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abC:function(){return[P.e,P.e]}}
P.je.prototype={
gkg:function(){return C.T}}
P.jg.prototype={
b7:function(a,b,c){var u,t,s
c=P.bq(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ko(t)
if(s.hf(a,b,c)!==c)s.dK(J.ns(a,c-1),0)
return new Uint8Array(t.subarray(0,H.oR(0,s.b,t.length)))},
cq:function(a){return this.b7(a,0,null)},
$abC:function(){return[P.e,[P.b,P.o]]}}
P.ko.prototype={
dK:function(a,b){var u,t,s,r,q
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
hf:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a_(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.H(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dK(r,C.c.H(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jf.prototype={
b7:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.on(!1,a,b,c)
if(u!=null)return u
c=P.bq(b,c,J.aD(a),null,null,null)
t=new P.al("")
s=new P.km(!1,t)
s.b7(a,b,c)
if(s.e>0){H.t(P.a7("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c7(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cq:function(a){return this.b7(a,0,null)},
$abC:function(){return[[P.b,P.o],P.e]}}
P.km.prototype={
b7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kn(this,b,c,a)
$label0$0:for(q=J.cj(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.bO()
if((n&192)!==128){m=P.a7("Bad UTF-8 encoding 0x"+C.f.bf(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.f(C.H,m)
if(u<=C.H[m]){m=P.a7("Overlong encoding of 0x"+C.f.bf(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a7("Character outside valid Unicode range: 0x"+C.f.bf(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c7(u)
this.c=!1}for(m=o<c;m;){l=P.oY(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.Z()
if(n<0){i=P.a7("Negative UTF-8 code unit: -0x"+C.f.bf(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a7("Bad UTF-8 encoding 0x"+C.f.bf(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kn.prototype={
$2:function(a,b){this.a.b.a+=P.ec(this.d,a,b)},
$S:46}
P.S.prototype={}
P.az.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.az&&this.a===b.a&&!0},
gJ:function(a){var u=this.a
return(u^C.f.aT(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.nG(H.o7(this))
t=P.dy(H.o5(this))
s=P.dy(H.o1(this))
r=P.dy(H.o2(this))
q=P.dy(H.o4(this))
p=P.dy(H.o6(this))
o=P.nH(H.o3(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.b2.prototype={
p:function(a,b){return new P.b2(C.f.p(this.a,b.gh8()))},
t:function(a,b){return new P.b2(C.f.t(this.a,b.gh8()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.b2&&this.a===b.a},
gJ:function(a){return C.f.gJ(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fZ()
t=this.a
if(t<0)return"-"+new P.b2(0-t).i(0)
s=u.$1(C.f.a7(t,6e7)%60)
r=u.$1(C.f.a7(t,1e6)%60)
q=new P.fY().$1(t%1e6)
return""+C.f.a7(t,36e8)+":"+H.l(s)+":"+H.l(r)+"."+H.l(q)}}
P.fY.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:23}
P.fZ.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:23}
P.bD.prototype={}
P.e1.prototype={
i:function(a){return"Throw of null."}}
P.aL.prototype={
gbY:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbX:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbY()+t+s
if(!this.a)return r
q=this.gbX()
p=P.h3(this.b)
return r+q+": "+p}}
P.c8.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.l(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.l(u)
else if(s>u)t=": Not in range "+H.l(u)+".."+H.l(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.l(u)}return t}}
P.hi.prototype={
gbY:function(){return"RangeError"},
gbX:function(){var u,t
u=H.ai(this.b)
if(typeof u!=="number")return u.Z()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.l(t)},
gl:function(a){return this.f}}
P.j7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j4.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ca.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fL.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.h3(u)+"."}}
P.i0.prototype={
i:function(a){return"Out of Memory"},
$ibD:1}
P.eb.prototype={
i:function(a){return"Stack Overflow"},
$ibD:1}
P.fS.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eD.prototype={
i:function(a){return"Exception: "+this.a}}
P.hc.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.u(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.H(r,m)
if(l===10){if(o!==m||!n)++p
o=m+1
n=!1}else if(l===13){++p
o=m+1
n=!0}}t=p>1?t+(" (at line "+p+", character "+(s-o+1)+")\n"):t+(" (at character "+(s+1)+")\n")
k=r.length
for(m=s;m<k;++m){l=C.c.a_(r,m)
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
g=""}f=C.c.u(r,i,j)
return t+h+f+g+"\n"+C.c.F(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.l(s)+")"):t}}
P.bE.prototype={}
P.o.prototype={}
P.i.prototype={
bN:function(a,b){var u=H.at(this,"i",0)
return new H.d0(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gV(this)
for(t=0;u.D();)++t
return t},
gaM:function(a){var u,t
u=this.gV(this)
if(!u.D())throw H.c(H.hj())
t=u.gL(u)
if(u.D())throw H.c(H.nP())
return t},
K:function(a,b){var u,t,s
if(b<0)H.t(P.ae(b,0,null,"index",null))
for(u=this.gV(this),t=0;u.D();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.Z(b,this,"index",null,t))},
i:function(a){return P.nN(this,"(",")")}}
P.b3.prototype={}
P.b.prototype={$ii:1}
P.E.prototype={}
P.L.prototype={
gJ:function(a){return P.Q.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.Q.prototype={constructor:P.Q,$iQ:1,
v:function(a,b){return this===b},
gJ:function(a){return H.cJ(this)},
i:function(a){return"Instance of '"+H.c6(this)+"'"},
toString:function(){return this.i(this)}}
P.ax.prototype={}
P.e.prototype={$im7:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$ipJ:1}
P.jc.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iE",[u,u],"$aE")
H.H(b)
t=J.di(b).ev(b,"=")
if(t===-1){if(b!=="")J.l1(a,P.lq(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.u(b,0,t)
r=C.c.aq(b,t+1)
u=this.a
J.l1(a,P.lq(s,0,s.length,u,!0),P.lq(r,0,r.length,u,!0))}return a},
$S:44}
P.j9.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv4 address, "+a,this.a,b))},
$S:43}
P.ja.prototype={
$2:function(a,b){throw H.c(P.a7("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:42}
P.jb.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fu(C.c.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.Z()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:41}
P.cc.prototype={
gf1:function(){return this.b},
gcE:function(a){var u=this.c
if(u==null)return""
if(C.c.a5(u,"["))return C.c.u(u,1,u.length-1)
return u},
gbJ:function(a){var u=this.d
if(u==null)return P.mB(this.a)
return u},
gcM:function(a){var u=this.f
return u==null?"":u},
gep:function(){var u=this.r
return u==null?"":u},
cR:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
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
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.lp(g,0,0,h)
return new P.cc(i,j,c,f,d,g,this.r)},
eR:function(a,b){return this.cR(a,null,null,null,null,null,null,b,null,null)},
gcN:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siv(new P.eq(P.mp(u==null?"":u,C.m),[t,t]))}return this.Q},
geq:function(){return this.c!=null},
geu:function(){return this.f!=null},
ger:function(){return this.r!=null},
i:function(a){var u,t,s,r
u=this.y
if(u==null){u=this.a
t=u.length!==0?H.l(u)+":":""
s=this.c
r=s==null
if(!r||u==="file"){u=t+"//"
t=this.b
if(t.length!==0)u=u+H.l(t)+"@"
if(!r)u+=s
t=this.d
if(t!=null)u=u+":"+H.l(t)}else u=t
u+=this.e
t=this.f
if(t!=null)u=u+"?"+t
t=this.r
if(t!=null)u=u+"#"+t
u=u.charCodeAt(0)==0?u:u
this.y=u}return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.U(b).$ilk)if(this.a==b.gbR())if(this.c!=null===b.geq())if(this.b==b.gf1())if(this.gcE(this)==b.gcE(b))if(this.gbJ(this)==b.gbJ(b))if(this.e===b.geN(b)){u=this.f
t=u==null
if(!t===b.geu()){if(t)u=""
if(u===b.gcM(b)){u=this.r
t=u==null
if(!t===b.ger()){if(t)u=""
u=u===b.gep()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
if(u==null){u=C.c.gJ(this.i(0))
this.z=u}return u},
siv:function(a){var u=P.e
this.Q=H.k(a,"$iE",[u,u],"$aE")},
$ilk:1,
gbR:function(){return this.a},
geN:function(a){return this.e}}
P.ki.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a7("Invalid port",this.a,u+1))},
$S:40}
P.kj.prototype={
$1:function(a){return P.ff(C.aa,a,C.m,!1)},
$S:17}
P.kl.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.l(P.ff(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.l(P.ff(C.w,b,C.m,!0))}},
$S:15}
P.kk.prototype={
$2:function(a,b){var u,t
H.H(a)
if(b==null||typeof b==="string")this.a.$2(a,H.H(b))
else for(u=J.by(H.mY(b,"$ii")),t=this.a;u.D();)t.$2(a,H.H(u.gL(u)))},
$S:38}
P.j8.prototype={
gf_:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
u=u[0]+1
s=C.c.ew(t,"?",u)
r=t.length
if(s>=0){q=P.dd(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jG(this,"data",null,null,null,P.dd(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.f(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.ku.prototype={
$1:function(a){return new Uint8Array(96)},
$S:36}
P.kt.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.f(u,a)
u=u[a]
J.nt(u,0,96,b)
return u},
$S:35}
P.kv.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.H(b,t)^96
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.kw.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.H(b,0),t=C.c.H(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.f(a,s)
a[s]=c}}}
P.k6.prototype={
geq:function(){return this.c>0},
ges:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.J(t)
t=u+1<t
u=t}else u=!1
return u},
geu:function(){var u=this.f
if(typeof u!=="number")return u.Z()
return u<this.r},
ger:function(){return this.r<this.a.length},
gdt:function(){return this.b===4&&C.c.a5(this.a,"http")},
gdu:function(){return this.b===5&&C.c.a5(this.a,"https")},
gbR:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.gdt()){this.x="http"
u="http"}else if(this.gdu()){this.x="https"
u="https"}else if(u===4&&C.c.a5(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.a5(this.a,"package")){this.x="package"
u="package"}else{u=C.c.u(this.a,0,u)
this.x=u}return u},
gf1:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.u(this.a,t,u-1):""},
gcE:function(a){var u=this.c
return u>0?C.c.u(this.a,u,this.d):""},
gbJ:function(a){var u
if(this.ges()){u=this.d
if(typeof u!=="number")return u.p()
return P.fu(C.c.u(this.a,u+1,this.e),null,null)}if(this.gdt())return 80
if(this.gdu())return 443
return 0},
geN:function(a){return C.c.u(this.a,this.e,this.f)},
gcM:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.Z()
return u<t?C.c.u(this.a,u+1,t):""},
gep:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.aq(t,u+1):""},
gcN:function(){var u=this.f
if(typeof u!=="number")return u.Z()
if(u>=this.r)return C.ab
u=P.e
return new P.eq(P.mp(this.gcM(this),C.m),[u,u])},
cR:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iE",[P.e,null],"$aE")
i=this.gbR()
u=i==="file"
t=this.c
j=t>0?C.c.u(this.a,this.b+3,t):""
f=this.ges()?this.gbJ(this):null
t=this.c
if(t>0)c=C.c.u(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.u(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.a5(d,"/"))d="/"+d
g=P.lp(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.aq(t,s+1)
return new P.cc(i,j,c,f,d,g,b)},
eR:function(a,b){return this.cR(a,null,null,null,null,null,null,b,null,null)},
gJ:function(a){var u=this.y
if(u==null){u=C.c.gJ(this.a)
this.y=u}return u},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ilk&&this.a===b.i(0)},
i:function(a){return this.a},
$ilk:1}
P.jG.prototype={}
W.z.prototype={}
W.fx.prototype={
gl:function(a){return a.length}}
W.dn.prototype={
i:function(a){return String(a)},
$idn:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.co.prototype={$ico:1}
W.bV.prototype={$ibV:1}
W.bz.prototype={$ibz:1}
W.bW.prototype={
cW:function(a,b,c){if(c!=null)return this.hg(a,b,P.p4(c,null))
return this.hh(a,b)},
f8:function(a,b){return this.cW(a,b,null)},
hg:function(a,b,c){return a.getContext(b,c)},
hh:function(a,b){return a.getContext(b)},
$ibW:1,
$ilT:1}
W.bX.prototype={
hi:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kb:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ibX:1}
W.bA.prototype={
gl:function(a){return a.length}}
W.cs.prototype={$ics:1}
W.fO.prototype={
gl:function(a){return a.length}}
W.W.prototype={$iW:1}
W.ct.prototype={
gl:function(a){return a.length}}
W.fP.prototype={}
W.b0.prototype={}
W.b1.prototype={}
W.fQ.prototype={
gl:function(a){return a.length}}
W.fR.prototype={
gl:function(a){return a.length}}
W.fU.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.cu.prototype={
jD:function(a,b){return a.adoptNode(b)},
cX:function(a,b){return a.getElementById(b)}}
W.fV.prototype={
i:function(a){return String(a)}}
W.dA.prototype={
jX:function(a,b){return a.createHTMLDocument(b)}}
W.dB.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a5],"$aab")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[[P.ab,P.a5]]},
$ay:function(){return[[P.ab,P.a5]]},
$ii:1,
$ai:function(){return[[P.ab,P.a5]]},
$ib:1,
$ab:function(){return[[P.ab,P.a5]]},
$aD:function(){return[[P.ab,P.a5]]}}
W.dC.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(this.gaL(a))+" x "+H.l(this.gaI(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.dh(b,"$iab",[P.a5],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&this.gaL(a)===u.gaL(b)&&this.gaI(a)===u.gaI(b)},
gJ:function(a){return W.mz(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(this.gaL(a)),C.e.gJ(this.gaI(a)))},
gdW:function(a){return a.bottom},
gaI:function(a){return a.height},
gbI:function(a){return a.left},
gcS:function(a){return a.right},
gbM:function(a){return a.top},
gaL:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a5]}}
W.fW.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[P.e]},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
W.fX.prototype={
gl:function(a){return a.length}}
W.jE.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return H.h(u[b],"$iT")},
n:function(a,b,c){var u
H.h(c,"$iT")
u=this.b
if(b<0||b>=u.length)return H.f(u,b)
J.l2(this.a,c,u[b])},
h:function(a,b){J.lL(this.a,b)
return b},
gV:function(a){var u=this.l9(this)
return new J.av(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.T]},
$ai:function(){return[W.T]},
$ab:function(){return[W.T]}}
W.T.prototype={
gjI:function(a){return new W.jH(a)},
gcp:function(a){return new W.jE(a,a.children)},
gdY:function(a){var u,t,s,r
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
af:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.lY
if(u==null){u=H.d([],[W.aB])
t=new W.e0(u)
C.a.h(u,W.my(null))
C.a.h(u,W.mA())
$.lY=t
d=t}else d=u
u=$.lX
if(u==null){u=new W.fg(d)
$.lX=u
c=u}else{u.a=d
c=u}}if($.bj==null){u=document
t=u.implementation
t=(t&&C.U).jX(t,"")
$.bj=t
$.l8=t.createRange()
t=$.bj
t.toString
t=t.createElement("base")
H.h(t,"$ico")
t.href=u.baseURI
u=$.bj.head;(u&&C.W).E(u,t)}u=$.bj
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.h(t,"$ibz")}u=$.bj
if(!!this.$ibz)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bj.body;(u&&C.p).E(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.X(C.a8,a.tagName)){u=$.l8;(u&&C.N).ff(u,s)
u=$.l8
r=(u&&C.N).jV(u,b)}else{s.innerHTML=b
r=$.bj.createDocumentFragment()
for(u=J.ad(r);t=s.firstChild,t!=null;)u.E(r,t)}u=$.bj.body
if(s==null?u!=null:s!==u)J.lO(s)
c.cZ(r)
C.z.jD(document,r)
return r},
jW:function(a,b,c){return this.af(a,b,c,null)},
fi:function(a,b,c,d){a.textContent=null
this.E(a,this.af(a,b,c,d))},
fh:function(a,b){return this.fi(a,b,null,null)},
b1:function(a,b){return a.getAttribute(b)},
ix:function(a,b){return a.removeAttribute(b)},
fg:function(a,b,c){return a.setAttribute(b,c)},
$iT:1,
gl4:function(a){return a.tagName}}
W.h0.prototype={
$1:function(a){return!!J.U(H.h(a,"$iF")).$iT},
$S:22}
W.p.prototype={$ip:1}
W.j.prototype={
jx:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.fV(a,b,c,!1)},
fV:function(a,b,c,d){return a.addEventListener(b,H.cg(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aF.prototype={$iaF:1}
W.cx.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ib:1,
$ab:function(){return[W.aF]},
$icx:1,
$aD:function(){return[W.aF]}}
W.h7.prototype={
gl:function(a){return a.length}}
W.hb.prototype={
gl:function(a){return a.length}}
W.aN.prototype={$iaN:1}
W.dG.prototype={}
W.dH.prototype={
iD:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c1.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$ic1:1,
$aD:function(){return[W.F]}}
W.dI.prototype={}
W.bk.prototype={$ibk:1,
ge_:function(a){return a.data}}
W.cA.prototype={$icA:1,$ilT:1}
W.cB.prototype={$icB:1}
W.b4.prototype={$ib4:1}
W.dO.prototype={}
W.dR.prototype={
i:function(a){return String(a)},
$idR:1}
W.cE.prototype={}
W.hJ.prototype={
gl:function(a){return a.length}}
W.hK.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.hL(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hM.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.hN(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.hN.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aQ.prototype={$iaQ:1}
W.hO.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaQ")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aQ]},
$ay:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aD:function(){return[W.aQ]}}
W.ag.prototype={$iag:1}
W.ar.prototype={
gaM:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mg("No elements"))
if(t>1)throw H.c(P.mg("More than one element"))
return u.firstChild},
au:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.F],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ad(t),q=0;q<s;++q)r.E(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.h(c,"$iF")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
J.l2(u,c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.dE(u,u.length,-1,[H.bS(C.ac,u,"D",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ay:function(){return[W.F]},
$ai:function(){return[W.F]},
$ab:function(){return[W.F]}}
W.F.prototype={
kU:function(a){var u=a.parentNode
if(u!=null)J.fv(u,a)},
kZ:function(a,b){var u,t
try{u=a.parentNode
J.l2(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fm(a):u},
E:function(a,b){return a.appendChild(H.h(b,"$iF"))},
iy:function(a,b){return a.removeChild(b)},
iC:function(a,b,c){return a.replaceChild(b,c)},
$iF:1}
W.cI.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.aS.prototype={$iaS:1,
gl:function(a){return a.length}}
W.i3.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaS")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aS]},
$ay:function(){return[W.aS]},
$ii:1,
$ai:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$aD:function(){return[W.aS]}}
W.e5.prototype={
jV:function(a,b){return a.createContextualFragment(b)},
ff:function(a,b){return a.selectNodeContents(b)}}
W.ie.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.ig(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
W.ig.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.ii.prototype={
gl:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.it.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaT")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aT]},
$ay:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aD:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.iu.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaU")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aU]},
$ay:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aD:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gl:function(a){return a.length}}
W.ix.prototype={
j:function(a,b){return this.dq(a,H.H(b))},
n:function(a,b,c){this.iL(a,b,c)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hm(a,u)
if(t==null)return
b.$2(t,this.dq(a,t))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new W.iy(u))
return u},
gl:function(a){return a.length},
dq:function(a,b){return a.getItem(b)},
hm:function(a,b){return a.key(b)},
iL:function(a,b,c){return a.setItem(b,c)},
$aaf:function(){return[P.e,P.e]},
$iE:1,
$aE:function(){return[P.e,P.e]}}
W.iy.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:15}
W.aG.prototype={$iaG:1}
W.b9.prototype={$ib9:1}
W.ed.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=W.nI("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.ar(t).au(0,new W.ar(u))
return t},
hk:function(a,b){return a.insertRow(b)}}
W.ee.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
s.toString
u=new W.ar(s)
r=u.gaM(u)
t.toString
r.toString
new W.ar(t).au(0,new W.ar(r))
return t},
ds:function(a,b){return a.insertCell(b)}}
W.iE.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bS(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.af(u.createElement("table"),b,c,d)
u.toString
u=new W.ar(u)
s=u.gaM(u)
t.toString
s.toString
new W.ar(t).au(0,new W.ar(s))
return t}}
W.cO.prototype={$icO:1}
W.aW.prototype={$iaW:1}
W.aH.prototype={$iaH:1}
W.iG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaH")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$ib:1,
$ab:function(){return[W.aH]},
$aD:function(){return[W.aH]}}
W.iH.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaW")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aW]},
$ay:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aD:function(){return[W.aW]}}
W.iM.prototype={
gl:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.aY.prototype={$iaY:1}
W.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaX")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aX]},
$ay:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aD:function(){return[W.aX]}}
W.iR.prototype={
gl:function(a){return a.length}}
W.bO.prototype={}
W.jd.prototype={
i:function(a){return String(a)}}
W.jv.prototype={$ilT:1}
W.jw.prototype={
gl:function(a){return a.length}}
W.be.prototype={
gk6:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.G("deltaY is not supported"))},
gk5:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.G("deltaX is not supported"))},
$ibe:1}
W.d1.prototype={
iE:function(a,b){return a.requestAnimationFrame(H.cg(H.n(b,{func:1,ret:-1,args:[P.a5]}),1))},
h9:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d2.prototype={$id2:1}
W.jF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iW")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.W]},
$ay:function(){return[W.W]},
$ii:1,
$ai:function(){return[W.W]},
$ib:1,
$ab:function(){return[W.W]},
$aD:function(){return[W.W]}}
W.ey.prototype={
i:function(a){return"Rectangle ("+H.l(a.left)+", "+H.l(a.top)+") "+H.l(a.width)+" x "+H.l(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.dh(b,"$iab",[P.a5],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbI(b)&&a.top===u.gbM(b)&&a.width===u.gaL(b)&&a.height===u.gaI(b)},
gJ:function(a){return W.mz(C.e.gJ(a.left),C.e.gJ(a.top),C.e.gJ(a.width),C.e.gJ(a.height))},
gaI:function(a){return a.height},
gaL:function(a){return a.width}}
W.jU.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaN")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aN]},
$ay:function(){return[W.aN]},
$ii:1,
$ai:function(){return[W.aN]},
$ib:1,
$ab:function(){return[W.aN]},
$aD:function(){return[W.aN]}}
W.eQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iF")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.F]},
$ay:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]},
$ib:1,
$ab:function(){return[W.F]},
$aD:function(){return[W.F]}}
W.k7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaV")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aV]},
$ay:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aD:function(){return[W.aV]}}
W.kb.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.h(c,"$iaG")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$iK:1,
$aK:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ib:1,
$ab:function(){return[W.aG]},
$aD:function(){return[W.aG]}}
W.jD.prototype={
O:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.ga8(this),t=u.length,s=this.a,r=J.ad(s),q=0;q<u.length;u.length===t||(0,H.C)(u),++q){p=u[q]
b.$2(p,r.b1(s,p))}},
ga8:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.f(u,r)
q=H.h(u[r],"$id2")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aaf:function(){return[P.e,P.e]},
$aE:function(){return[P.e,P.e]}}
W.jH.prototype={
j:function(a,b){return J.l3(this.a,H.H(b))},
n:function(a,b,c){J.nx(this.a,b,c)},
gl:function(a){return this.ga8(this).length}}
W.jI.prototype={}
W.ln.prototype={}
W.jJ.prototype={}
W.jK.prototype={
$1:function(a){return this.a.$1(H.h(a,"$ip"))},
$S:34}
W.bQ.prototype={
fD:function(a){var u,t
u=$.lI()
if(u.gkt(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pg())
for(t=0;t<12;++t)u.n(0,C.B[t],W.ph())}},
aU:function(a){return $.nl().X(0,W.cv(a))},
av:function(a,b,c){var u,t,s
u=W.cv(a)
t=$.lI()
s=t.j(0,H.l(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lv(s.$4(a,b,c,this))},
$iaB:1}
W.D.prototype={
gV:function(a){return new W.dE(a,this.gl(a),-1,[H.bS(this,a,"D",0)])}}
W.e0.prototype={
aU:function(a){return C.a.dP(this.a,new W.hW(a))},
av:function(a,b,c){return C.a.dP(this.a,new W.hV(a,b,c))},
$iaB:1}
W.hW.prototype={
$1:function(a){return H.h(a,"$iaB").aU(this.a)},
$S:25}
W.hV.prototype={
$1:function(a){return H.h(a,"$iaB").av(this.a,this.b,this.c)},
$S:25}
W.eY.prototype={
fO:function(a,b,c,d){var u,t,s
this.a.au(0,c)
u=b.bN(0,new W.k4())
t=b.bN(0,new W.k5())
this.b.au(0,u)
s=this.c
s.au(0,C.I)
s.au(0,t)},
aU:function(a){return this.a.X(0,W.cv(a))},
av:function(a,b,c){var u,t
u=W.cv(a)
t=this.c
if(t.X(0,H.l(u)+"::"+b))return this.d.jE(c)
else if(t.X(0,"*::"+b))return this.d.jE(c)
else{t=this.b
if(t.X(0,H.l(u)+"::"+b))return!0
else if(t.X(0,"*::"+b))return!0
else if(t.X(0,H.l(u)+"::*"))return!0
else if(t.X(0,"*::*"))return!0}return!1},
$iaB:1}
W.k4.prototype={
$1:function(a){return!C.a.X(C.B,H.H(a))},
$S:26}
W.k5.prototype={
$1:function(a){return C.a.X(C.B,H.H(a))},
$S:26}
W.kd.prototype={
av:function(a,b,c){if(this.fs(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.l3(a,"template")==="")return this.e.X(0,b)
return!1}}
W.ke.prototype={
$1:function(a){return"TEMPLATE::"+H.l(H.H(a))},
$S:17}
W.kc.prototype={
aU:function(a){var u=J.U(a)
if(!!u.$icK)return!1
u=!!u.$iq
if(u&&W.cv(a)==="foreignObject")return!1
if(u)return!0
return!1},
av:function(a,b,c){if(b==="is"||C.c.a5(b,"on"))return!1
return this.aU(a)},
$iaB:1}
W.dE.prototype={
D:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sdr(J.lK(this.a,u))
this.c=u
return!0}this.sdr(null)
this.c=t
return!1},
gL:function(a){return this.d},
sdr:function(a){this.d=H.A(a,H.u(this,0))},
$ib3:1}
W.aB.prototype={}
W.k2.prototype={$ipW:1}
W.fg.prototype={
cZ:function(a){new W.kp(this).$2(a,null)},
b5:function(a,b){if(b==null)J.lO(a)
else J.fv(b,a)},
iJ:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nu(a)
s=J.l3(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.aj(o)}q="element unprintable"
try{q=J.au(a)}catch(o){H.aj(o)}try{p=W.cv(a)
this.iI(H.h(a,"$iT"),b,u,q,p,H.h(t,"$iE"),H.H(s))}catch(o){if(H.aj(o) instanceof P.aL)throw o
else{this.b5(a,b)
window
n="Removing corrupted element "+H.l(q)
if(typeof console!="undefined")window.console.warn(n)}}},
iI:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.b5(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.aU(a)){this.b5(a,b)
window
u="Removing disallowed element <"+H.l(e)+"> from "+H.l(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.av(a,"is",g)){this.b5(a,b)
window
u="Removing disallowed type extension <"+H.l(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga8(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.ga8(f).length-1,u=f.a,r=J.ad(u);s>=0;--s){if(s>=t.length)return H.f(t,s)
q=t[s]
if(!this.a.av(a,J.nz(q),r.b1(u,q))){window
p="Removing disallowed attribute <"+H.l(e)+" "+q+'="'+H.l(r.b1(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b1(u,q)
r.ix(u,q)}}if(!!J.U(a).$icO)this.cZ(a.content)},
$ipG:1}
W.kp.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.iJ(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.b5(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.aj(r)
q=H.h(u,"$iF")
if(s){p=q.parentNode
if(p!=null)J.fv(p,q)}else J.fv(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.h(t,"$iF")}},
$S:45}
W.ex.prototype={}
W.ez.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eC.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eV.prototype={}
W.eW.prototype={}
W.eX.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f3.prototype={}
W.f6.prototype={}
W.f7.prototype={}
W.da.prototype={}
W.db.prototype={}
W.f9.prototype={}
W.fa.prototype={}
W.fh.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fk.prototype={}
W.fl.prototype={}
W.fm.prototype={}
W.fn.prototype={}
W.fo.prototype={}
W.fp.prototype={}
W.fq.prototype={}
P.k8.prototype={
en:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
cV:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.U(a)
if(!!t.$iaz)return new Date(a.a)
if(!!t.$ioc)throw H.c(P.j5("structured clone of RegExp"))
if(!!t.$iaF)return a
if(!!t.$ibV)return a
if(!!t.$icx)return a
if(!!t.$ibk)return a
if(!!t.$icF||!!t.$ibI)return a
if(!!t.$iE){s=this.en(a)
r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.O(a,new P.ka(u,this))
return u.a}if(!!t.$ib){s=this.en(a)
u=this.b
if(s>=u.length)return H.f(u,s)
q=u[s]
if(q!=null)return q
return this.jU(a,s)}throw H.c(P.j5("structured clone of other type"))},
jU:function(a,b){var u,t,s,r
u=J.cj(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.cV(u.j(a,r)))
return s}}
P.ka.prototype={
$2:function(a,b){this.a.a[a]=this.b.cV(b)},
$S:7}
P.fd.prototype={$ibk:1,
ge_:function(a){return this.a}}
P.kA.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.k9.prototype={}
P.h8.prototype={
gbn:function(){var u,t,s
u=this.b
t=H.at(u,"y",0)
s=W.T
return new H.hA(new H.d0(u,H.n(new P.h9(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.ha(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.h(c,"$iT")
u=this.gbn()
J.nw(u.b.$1(J.fw(u.a,b)),c)},
h:function(a,b){J.lL(this.b.a,b)},
gl:function(a){return J.aD(this.gbn().a)},
j:function(a,b){var u=this.gbn()
return u.b.$1(J.fw(u.a,b))},
gV:function(a){var u=P.m0(this.gbn(),!1,W.T)
return new J.av(u,u.length,0,[H.u(u,0)])},
$ay:function(){return[W.T]},
$ai:function(){return[W.T]},
$ab:function(){return[W.T]}}
P.h9.prototype={
$1:function(a){return!!J.U(H.h(a,"$iF")).$iT},
$S:22}
P.ha.prototype={
$1:function(a){return H.m(H.h(a,"$iF"),"$iT")},
$S:33}
P.jY.prototype={
gcS:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.A(u+this.c,H.u(this,0))},
gdW:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.A(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.l(this.a)+", "+H.l(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dh(b,"$iab",[P.a5],"$aab")){u=this.a
t=J.ad(b)
if(u==t.gbI(b)){s=this.b
if(s==t.gbM(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.A(u+this.c,r)===t.gcS(b)){if(typeof s!=="number")return s.p()
u=H.A(s+this.d,r)===t.gdW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u,t,s,r,q
u=this.a
t=J.dm(u)
s=this.b
r=J.dm(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gJ(H.A(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gJ(H.A(s+this.d,q))
return P.oA(P.jW(P.jW(P.jW(P.jW(0,t),r),u),q))}}
P.ab.prototype={
gbI:function(a){return this.a},
gbM:function(a){return this.b},
gaL:function(a){return this.c},
gaI:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.hp.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ib5")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b5]},
$ii:1,
$ai:function(){return[P.b5]},
$ib:1,
$ab:function(){return[P.b5]},
$aD:function(){return[P.b5]}}
P.b7.prototype={$ib7:1}
P.hZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ib7")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$aD:function(){return[P.b7]}}
P.i5.prototype={
gl:function(a){return a.length}}
P.cK.prototype={$icK:1}
P.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.H(c)
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aD:function(){return[P.e]}}
P.q.prototype={
gcp:function(a){return new P.h8(a,new W.ar(a))},
af:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aB])
C.a.h(u,W.my(null))
C.a.h(u,W.mA())
C.a.h(u,new W.kc())
c=new W.fg(new W.e0(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).jW(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.ar(r)
p=u.gaM(u)
for(u=J.ad(q);s=p.firstChild,s!=null;)u.E(q,s)
return q},
$iq:1}
P.bb.prototype={$ibb:1}
P.iS.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return this.aC(a,b)},
n:function(a,b,c){H.h(c,"$ibb")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
aC:function(a,b){return a.getItem(b)},
$ay:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$aD:function(){return[P.bb]}}
P.eI.prototype={}
P.eJ.prototype={}
P.eT.prototype={}
P.eU.prototype={}
P.f4.prototype={}
P.f5.prototype={}
P.fb.prototype={}
P.fc.prototype={}
P.R.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$iok:1}
P.fA.prototype={
gl:function(a){return a.length}}
P.fB.prototype={
j:function(a,b){return P.br(a.get(H.H(b)))},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.br(t.value[1]))}},
ga8:function(a){var u=H.d([],[P.e])
this.O(a,new P.fC(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.G("Not supported"))},
$aaf:function(){return[P.e,null]},
$iE:1,
$aE:function(){return[P.e,null]}}
P.fC.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fD.prototype={
gl:function(a){return a.length}}
P.bU.prototype={}
P.i_.prototype={
gl:function(a){return a.length}}
P.ew.prototype={}
P.dr.prototype={$idr:1}
P.dF.prototype={$idF:1}
P.e4.prototype={$ie4:1}
P.c9.prototype={
dL:function(a,b){return a.activeTexture(b)},
dQ:function(a,b,c){return a.attachShader(b,c)},
aw:function(a,b,c){return a.bindBuffer(b,c)},
jK:function(a,b,c){return a.bindFramebuffer(b,c)},
aV:function(a,b,c){return a.bindTexture(b,c)},
jL:function(a,b,c){return a.blendFunc(b,c)},
dX:function(a,b,c,d){return a.bufferData(b,c,d)},
jO:function(a,b){return a.clear(b)},
jP:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
jQ:function(a,b){return a.clearDepth(b)},
jS:function(a,b){return a.compileShader(b)},
jY:function(a,b){return a.createShader(b)},
k_:function(a,b){return a.deleteProgram(b)},
k0:function(a,b){return a.deleteShader(b)},
k7:function(a,b){return a.depthFunc(b)},
k8:function(a,b){return a.disable(b)},
e0:function(a,b){return a.disableVertexAttribArray(b)},
ka:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
ct:function(a,b){return a.enable(b)},
e1:function(a,b){return a.enableVertexAttribArray(b)},
f3:function(a,b){return a.generateMipmap(b)},
f4:function(a,b,c){return a.getActiveAttrib(b,c)},
f5:function(a,b,c){return a.getActiveUniform(b,c)},
f6:function(a,b,c){return a.getAttribLocation(b,c)},
cY:function(a,b){return a.getParameter(b)},
f9:function(a,b){return a.getProgramInfoLog(b)},
bP:function(a,b,c){return a.getProgramParameter(b,c)},
fa:function(a,b){return a.getShaderInfoLog(b)},
fb:function(a,b,c){return a.getShaderParameter(b,c)},
fc:function(a,b,c){return a.getUniformLocation(b,c)},
kv:function(a,b){return a.linkProgram(b)},
kS:function(a,b,c){return a.pixelStorei(b,c)},
fk:function(a,b,c){return a.shaderSource(b,c)},
l6:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.U(g)
if(!!u.$ibk)t=!0
else t=!1
if(t){this.iW(a,b,c,d,e,f,P.p5(g))
return}if(!!u.$icA)u=!0
else u=!1
if(u){this.iX(a,b,c,d,e,f,g)
return}throw H.c(P.dp("Incorrect number or type of arguments"))},
l5:function(a,b,c,d,e,f,g){return this.l6(a,b,c,d,e,f,g,null,null,null)},
iW:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
iX:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
bL:function(a,b,c,d){return a.texParameteri(b,c,d)},
T:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
w:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
eY:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
eZ:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
f0:function(a,b){return a.useProgram(b)},
ld:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
le:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ic9:1}
P.e8.prototype={$ie8:1}
P.eg.prototype={$ieg:1}
P.eo.prototype={$ieo:1}
P.iv.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.Z(b,a,null,null,null))
return P.br(this.hl(a,b))},
n:function(a,b,c){H.h(c,"$iE")
throw H.c(P.G("Cannot assign element of immutable List."))},
K:function(a,b){return this.j(a,b)},
hl:function(a,b){return a.item(b)},
$ay:function(){return[[P.E,,,]]},
$ii:1,
$ai:function(){return[[P.E,,,]]},
$ib:1,
$ab:function(){return[[P.E,,,]]},
$aD:function(){return[[P.E,,,]]}}
P.f0.prototype={}
P.f1.prototype={}
O.a6.prototype={
bU:function(a){this.shq(H.d([],[a]))
this.sdA(null)
this.sdv(null)
this.sdB(null)},
d_:function(a,b,c){var u=H.at(this,"a6",0)
H.n(b,{func:1,ret:P.S,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sdA(b)
this.sdv(a)
this.sdB(c)},
bi:function(a,b){return this.d_(a,null,b)},
ie:function(a){var u
H.k(a,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
hC:function(a,b){var u
H.k(b,"$ii",[H.at(this,"a6",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.av(u,u.length,0,[H.u(u,0)])},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.at(this,"a6",0)
H.A(b,u)
u=[u]
if(this.ie(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.hC(s,H.d([b],u))}},
shq:function(a){this.a=H.k(a,"$ib",[H.at(this,"a6",0)],"$ab")},
sdA:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.at(this,"a6",0)]]})},
sdv:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
sdB:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.at(this,"a6",0)]]})},
$ii:1}
O.cD.prototype={
gl:function(a){return this.a.length},
gC:function(){var u=this.b
if(u==null){u=D.Y()
this.b=u}return u},
fB:function(a){var u=this.b
if(u!=null)u.N(a)},
aN:function(){return this.fB(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.dX()},
eP:function(a){var u=this.a
if(a==null)C.a.h(u,V.dX())
else C.a.h(u,a)
this.aN()},
cK:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}},
sc2:function(a){this.a=H.k(a,"$ib",[V.ao],"$ab")}}
E.fG.prototype={}
E.an.prototype={
d9:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.D();){t=u.d
if(t.f==null)t.d9()}},
sab:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gC().M(0,this.geI())
t=this.c
if(t!=null)t.gC().h(0,this.geI())
s=new D.O("shape",u,this.c,this,[F.e9])
s.b=!0
this.aa(s)}},
sbe:function(a){var u,t,s
u=this.f
if(u!=a){if(u!=null)u.gC().M(0,this.geK())
t=this.f
this.f=a
if(a!=null)a.gC().h(0,this.geK())
this.d9()
s=new D.O("technique",t,this.f,this,[O.bM])
s.b=!0
this.aa(s)}},
saX:function(a){var u,t
if(!J.V(this.r,a)){u=this.r
if(u!=null)u.gC().M(0,this.geG())
if(a!=null)a.gC().h(0,this.geG())
this.r=a
t=new D.O("mover",u,a,this,[U.ak])
t.b=!0
this.aa(t)}},
aB:function(a,b){var u,t,s,r
u=this.r
t=u!=null?u.b0(0,b,this):null
if(!J.V(t,this.x)){s=this.x
this.x=t
r=new D.O("matrix",s,t,this,[V.ao])
r.b=!0
this.aa(r)}u=this.f
if(u!=null)u.aB(0,b)
for(u=this.y.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.D();)u.d.aB(0,b)},
aY:function(a){var u,t,s
u=a.dx
t=this.x
u.toString
if(t==null)C.a.h(u.a,u.ga1(u))
else C.a.h(u.a,t.F(0,u.ga1(u)))
u.aN()
a.eQ(this.f)
u=a.dy
s=(u&&C.a).gaz(u)
if(s!=null&&this.d!=null)s.kY(a,this)
for(u=this.y.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.D();)u.d.aY(a)
a.eO()
a.dx.cK()},
gC:function(){var u=this.z
if(u==null){u=D.Y()
this.z=u}return u},
aa:function(a){var u=this.z
if(u!=null)u.N(a)},
a3:function(){return this.aa(null)},
eJ:function(a){H.h(a,"$iB")
this.e=null
this.aa(a)},
kI:function(){return this.eJ(null)},
eL:function(a){this.aa(H.h(a,"$iB"))},
kJ:function(){return this.eL(null)},
eH:function(a){this.aa(H.h(a,"$iB"))},
kH:function(){return this.eH(null)},
eF:function(a){this.aa(H.h(a,"$iB"))},
kE:function(){return this.eF(null)},
kD:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.an],"$ai")
for(u=b.length,t=this.geE(),s={func:1,ret:-1,args:[D.B]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c_()
o.saj(null)
o.saR(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.saj(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a3()},
kG:function(a,b){var u,t
H.k(b,"$ii",[E.an],"$ai")
for(u=b.gV(b),t=this.geE();u.D();)u.gL(u).gC().M(0,t)
this.a3()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfC:function(a,b){this.y=H.k(b,"$ia6",[E.an],"$aa6")},
$ibp:1}
E.ia.prototype={
fv:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.az(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cD()
t=[V.ao]
u.sc2(H.d([],t))
u.b=null
u.gC().h(0,new E.ib(this))
this.cy=u
u=new O.cD()
u.sc2(H.d([],t))
u.b=null
u.gC().h(0,new E.ic(this))
this.db=u
u=new O.cD()
u.sc2(H.d([],t))
u.b=null
u.gC().h(0,new E.id(this))
this.dx=u
this.siV(H.d([],[O.bM]))
u=this.dy;(u&&C.a).h(u,null)
this.siR(new H.aP([P.e,A.cL]))},
gkT:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga1(u)
t=this.db
t=u.F(0,t.ga1(t))
this.z=t
u=t}return u},
eQ:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaz(u):a;(u&&C.a).h(u,t)},
eO:function(){var u=this.dy
if(u.length>1)u.pop()},
siV:function(a){this.dy=H.k(a,"$ib",[O.bM],"$ab")},
siR:function(a){this.fr=H.k(a,"$iE",[P.e,A.cL],"$aE")}}
E.ib.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.ch=null},
$S:5}
E.ic.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:5}
E.id.prototype={
$1:function(a){var u
H.h(a,"$iB")
u=this.a
u.ch=null
u.cx=null},
$S:5}
E.ek.prototype={
d4:function(a){H.h(a,"$iB")
this.eS()},
d3:function(){return this.d4(null)},
gko:function(){var u,t,s
u=Date.now()
t=C.f.a7(P.lW(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.az(u,!1)
return s/t},
dE:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.F()
if(typeof u!=="number")return H.J(u)
s=C.e.cD(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.F()
r=C.e.cD(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mj(C.y,this.gl_())}},
eS:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iL(this),{func:1,ret:-1,args:[P.a5]})
C.P.h9(u)
C.P.iE(u,W.mO(t,P.a5))}},
kX:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.dE()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.az(r,!1)
s.y=P.lW(0,0,0,r-s.r.a,0,0).a*0.000001
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
this.d.aY(this.e)}s=this.z
if(s!=null)s.N(null)}catch(q){u=H.aj(q)
t=H.ck(q)
P.ay("Error: "+H.l(u))
P.ay("Stack: "+H.l(t))
throw H.c(u)}}}
E.iL.prototype={
$1:function(a){var u
H.pr(a)
u=this.a
if(u.ch){u.ch=!1
u.kX()}},
$S:54}
Z.eu.prototype={$ipA:1}
Z.ds.prototype={
cj:function(a){var u,t,s
try{t=a.a
C.b.e1(t,this.e)
C.b.ld(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.aj(s)
t=P.w('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.l(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.l(this.e)+"]"}}
Z.jx.prototype={$ipB:1}
Z.dt.prototype={
aW:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
cj:function(a){var u,t
u=this.a
C.b.aw(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].cj(a)},
lc:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.e0(s,u[t].e)
C.b.aw(s,this.a.a,null)},
aY:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.f(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aw(t,p,r.b)
C.b.ka(t,q.a,q.b,5123,0)
C.b.aw(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.au(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shj:function(a){this.b=H.k(a,"$ib",[Z.bF],"$ab")},
$ipK:1}
Z.bF.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c6(this.c)+"'")+"]"}}
Z.bd.prototype={
gd0:function(a){var u,t
u=this.a
t=(u&$.bv().a)!==0?3:0
if((u&$.bu().a)!==0)t+=3
if((u&$.bt().a)!==0)t+=3
if((u&$.bw().a)!==0)t+=2
if((u&$.bx().a)!==0)t+=3
if((u&$.dj().a)!==0)t+=3
if((u&$.dk().a)!==0)t+=4
if((u&$.cn().a)!==0)++t
return(u&$.bs().a)!==0?t+4:t},
jG:function(a){var u,t,s
u=$.bv()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bu()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bt()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dk()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cn()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bs()
if((t&u.a)!==0)if(s===a)return u
return $.nj()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.bv().a)!==0)C.a.h(u,"Pos")
if((t&$.bu().a)!==0)C.a.h(u,"Norm")
if((t&$.bt().a)!==0)C.a.h(u,"Binm")
if((t&$.bw().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bx().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dj().a)!==0)C.a.h(u,"Clr3")
if((t&$.dk().a)!==0)C.a.h(u,"Clr4")
if((t&$.cn().a)!==0)C.a.h(u,"Weight")
if((t&$.bs().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fJ.prototype={}
D.c_.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.B]}
H.n(b,u)
if(this.a==null)this.saj(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
M:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.B]})
u=this.a
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.a
t=(u&&C.a).M(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.X(u,b)
if(u===!0){u=this.b
t=(u&&C.a).M(u,b)||t}return t},
N:function(a){var u,t,s,r
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
return!0}if(!s)C.a.O(P.m0(t,!0,{func:1,ret:-1,args:[D.B]}),new D.h4(u))
t=this.b
if(t!=null){this.saR(H.d([],[{func:1,ret:-1,args:[D.B]}]))
C.a.O(t,new D.h5(u))}return!0},
ke:function(){return this.N(null)},
l0:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.N(t)}}},
an:function(a){return this.l0(a,!0,!1)},
saj:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")},
saR:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.B]}],"$ab")}}
D.h4.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.h5.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.B]})
u=this.a.a
u.b
a.$1(u)},
$S:28}
D.B.prototype={}
D.c2.prototype={}
D.c3.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.l(this.d)+" => "+H.l(this.e)}}
X.du.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.du))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.dN.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dN))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.l(this.a)}}
X.ho.prototype={
kP:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kL:function(a){this.c=a.b
this.d.M(0,a.a)
return!1},
siu:function(a){this.d=H.k(a,"$imf",[P.o],"$amf")}}
X.dS.prototype={}
X.hw.prototype={
b3:function(a,b){var u,t,s,r,q,p,o,n
u=new P.az(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.F()
q=b.b
p=this.ch
if(typeof q!=="number")return q.F()
o=new V.aa(t.a+s*r,t.b+q*p)
p=this.a.gbq()
n=new X.bH(a,V.bK(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cJ:function(a,b){this.r=a.a
return!1},
bd:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fe()
if(typeof u!=="number")return u.bO()
this.r=(u&~t)>>>0
return!1},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.N(this.b3(a,b))
return!0},
kQ:function(a){return!1},
i2:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.az(Date.now(),!1)
t=this.f
s=new X.dS(c,a,this.a.gbq(),b,u,this)
s.b=!0
t.N(s)
this.y=u
this.x=V.bK()}}
X.aR.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aR))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bH.prototype={}
X.hP.prototype={
c_:function(a,b,c){var u,t,s
u=new P.az(Date.now(),!1)
t=this.a.gbq()
s=new X.bH(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cJ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.N(this.c_(a,b,!0))
return!0},
bd:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fe()
if(typeof u!=="number")return u.bO()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.N(this.c_(a,b,!0))
return!0},
bc:function(a,b){var u=this.d
if(u==null)return!1
u.N(this.c_(a,b,!1))
return!0},
kR:function(a,b){return!1}}
X.i4.prototype={}
X.em.prototype={}
X.iP.prototype={
b3:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.aa],"$ab")
u=new P.az(Date.now(),!1)
t=a.length>0?a[0]:V.bK()
s=this.a.gbq()
r=new X.em(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
kO:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.b
if(u==null)return!1
u.N(this.b3(a,!0))
return!0},
kM:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.c
if(u==null)return!1
u.N(this.b3(a,!0))
return!0},
kN:function(a){var u
H.k(a,"$ib",[V.aa],"$ab")
u=this.d
if(u==null)return!1
u.N(this.b3(a,!1))
return!0}}
X.er.prototype={
gbq:function(){var u=this.a
return V.md(0,0,C.q.gdY(u).c,C.q.gdY(u).d)},
dj:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dN(u,new X.aR(t,a.altKey,a.shiftKey))},
aS:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aR(t,a.altKey,a.shiftKey)},
ce:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aR(t,a.altKey,a.shiftKey)},
aG:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.t()
q=u.top
if(typeof s!=="number")return s.t()
return new V.aa(t-r,s-q)},
b4:function(a){return new V.a3(a.movementX,a.movementY)},
c8:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.aa])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.e.ao(p.pageX)
C.e.ao(p.pageY)
n=u.left
C.e.ao(p.pageX)
C.a.h(t,new V.aa(o-n,C.e.ao(p.pageY)-u.top))}return t},
aE:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.du(u,new X.aR(t,a.altKey,a.shiftKey))},
c3:function(a){var u,t,s,r,q,p
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
hX:function(a){this.f=!0},
hK:function(a){this.f=!1},
hR:function(a){H.h(a,"$iag")
if(this.f&&this.c3(a))a.preventDefault()},
i0:function(a){var u
H.h(a,"$ib4")
if(!this.f)return
u=this.dj(a)
this.b.kP(u)},
hZ:function(a){var u
H.h(a,"$ib4")
if(!this.f)return
u=this.dj(a)
this.b.kL(u)},
i4:function(a){var u,t,s,r
H.h(a,"$iag")
u=this.a
u.focus()
this.f=!0
this.aS(a)
if(this.x){t=this.aE(a)
s=this.b4(a)
if(this.d.cJ(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aE(a)
r=this.aG(a)
if(this.c.cJ(t,r))a.preventDefault()},
i8:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aE(a)
if(this.x){t=this.b4(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()},
hV:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c3(a)){this.aS(a)
u=this.aE(a)
if(this.x){t=this.b4(a)
if(this.d.bd(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bd(u,s))a.preventDefault()}},
i6:function(a){var u,t,s
H.h(a,"$iag")
this.aS(a)
u=this.aE(a)
if(this.x){t=this.b4(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bc(u,s))a.preventDefault()},
hT:function(a){var u,t,s
H.h(a,"$iag")
if(!this.c3(a)){this.aS(a)
u=this.aE(a)
if(this.x){t=this.b4(a)
if(this.d.bc(u,t))a.preventDefault()
return}if(this.r)return
s=this.aG(a)
if(this.c.bc(u,s))a.preventDefault()}},
ia:function(a){var u,t
H.h(a,"$ibe")
this.aS(a)
u=new V.a3((a&&C.O).gk5(a),C.O.gk6(a)).A(0,180)
if(this.x){if(this.d.kQ(u))a.preventDefault()
return}if(this.r)return
t=this.aG(a)
if(this.c.kR(u,t))a.preventDefault()},
ic:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aE(this.y)
s=this.aG(this.y)
this.d.i2(t,s,u)}},
is:function(a){var u
H.h(a,"$iaY")
this.a.focus()
this.f=!0
this.ce(a)
u=this.c8(a)
if(this.e.kO(u))a.preventDefault()},
io:function(a){var u
H.h(a,"$iaY")
this.ce(a)
u=this.c8(a)
if(this.e.kM(u))a.preventDefault()},
iq:function(a){var u
H.h(a,"$iaY")
this.ce(a)
u=this.c8(a)
if(this.e.kN(u))a.preventDefault()},
sha:function(a){this.z=H.k(a,"$ib",[[P.cN,P.Q]],"$ab")}}
D.dz.prototype={$ia8:1,$ibp:1}
D.a8.prototype={$ibp:1}
D.dP.prototype={
gC:function(){var u=this.Q
if(u==null){u=D.Y()
this.Q=u}return u},
a6:function(a){var u=this.Q
if(u!=null)u.N(a)},
dz:function(a){var u
H.h(a,"$iB")
u=this.ch
if(u!=null)u.N(a)},
i1:function(){return this.dz(null)},
ih:function(a){var u,t,s
H.k(a,"$ii",[D.a8],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fE(s))return!1}return!0},
hE:function(a,b){var u,t,s,r,q,p,o,n
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gdw(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.h(b[p],"$ia8")
if(o instanceof D.bN)C.a.h(this.z,o)
n=o.db
if(n==null){n=new D.c_()
n.saj(null)
n.saR(null)
n.c=null
n.d=0
o.db=n}H.n(s,r)
if(n.a==null)n.saj(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.c2(a,b,this,[u])
u.b=!0
this.a6(u)},
il:function(a,b){var u,t,s,r
u=D.a8
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gdw();t.D();){r=t.gL(t)
C.a.M(this.e,r)
r.gC().M(0,s)}u=new D.c3(a,b,this,[u])
u.b=!0
this.a6(u)},
fE:function(a){var u=C.a.X(this.z,a)
return u},
sfF:function(a){this.e=H.k(a,"$ib",[D.dz],"$ab")},
sfG:function(a){this.f=H.k(a,"$ib",[D.e3],"$ab")},
sfH:function(a){this.r=H.k(a,"$ib",[D.ea],"$ab")},
sfI:function(a){this.x=H.k(a,"$ib",[D.ei],"$ab")},
sfJ:function(a){this.y=H.k(a,"$ib",[D.ej],"$ab")},
sfK:function(a){this.z=H.k(a,"$ib",[D.bN],"$ab")},
$ai:function(){return[D.a8]},
$aa6:function(){return[D.a8]}}
D.e3.prototype={$ia8:1,$ibp:1}
D.ea.prototype={$ia8:1,$ibp:1}
D.ei.prototype={$ia8:1,$ibp:1}
D.ej.prototype={$ia8:1,$ibp:1}
D.bN.prototype={
gC:function(){var u=this.db
if(u==null){u=D.Y()
this.db=u}return u},
a6:function(a){var u
H.h(a,"$iB")
u=this.db
if(u!=null)u.N(a)},
hL:function(){return this.a6(null)},
$ia8:1,
$ibp:1}
V.a4.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gcO())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gcl())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a4(u,t,s)},
t:function(a,b){var u,t,s
u=C.e.t(this.a,b.gcO())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gcl())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a4(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
V.aM.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gcO())
t=C.e.p(this.b,b.gbQ())
s=C.e.p(this.c,b.gcl())
r=C.e.p(this.d,b.gjF(b))
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
u=C.e.t(this.a,b.gcO())
t=C.e.t(this.b,b.gbQ())
s=C.e.t(this.c,b.gcl())
r=C.e.t(this.d,b.gjF(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.aM(u,t,s,r)},
v:function(a,b){var u,t
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
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+", "+V.X(this.d,3,0)+"]"}}
V.h2.prototype={}
V.dW.prototype={
ai:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dW))return!1
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
t=V.ci(H.d([this.a,this.d,this.r],u),3,0)
s=V.ci(H.d([this.b,this.e,this.x],u),3,0)
r=V.ci(H.d([this.c,this.f,this.y],u),3,0)
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
V.ao.prototype={
ai:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
ex:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.M().a)return V.dX()
a8=1/a7
a9=-r
b0=-d
return V.bo((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
F:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.bo(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
bg:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.I(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b_:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.a1(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ao))return!1
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
i:function(a){return this.R()},
eo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.ci(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ci(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ci(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ci(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.eo("",3,0)},
G:function(a){return this.eo(a,3,0)}}
V.aa.prototype={
p:function(a,b){return new V.aa(this.a+b.a,this.b+b.b)},
t:function(a,b){return new V.aa(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aa))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+"]"}}
V.a1.prototype={
p:function(a,b){return new V.a1(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.a1(this.a-b.a,this.b-b.b,this.c-b.c)},
F:function(a,b){return new V.a1(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a1))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
V.b8.prototype={
p:function(a,b){return new V.b8(C.e.p(this.a,b.glg(b)),C.e.p(this.b,b.glh(b)),C.e.p(this.c,b.gli(b)),C.e.p(this.d,b.glf(b)))},
t:function(a,b){return new V.b8(C.e.t(this.a,b.glg(b)),C.e.t(this.b,b.glh(b)),C.e.t(this.c,b.gli(b)),C.e.t(this.d,b.glf(b)))},
v:function(a,b){var u,t
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
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+", "+V.X(this.d,3,0)+"]"}}
V.e7.prototype={
gaA:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e7))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+", "+V.X(this.d,3,0)+"]"}}
V.a3.prototype={
cH:function(a){return Math.sqrt(this.I(this))},
I:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.J(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.F()
if(typeof r!=="number")return H.J(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gkc(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gkd(b)
if(typeof u!=="number")return u.p()
return new V.a3(t,C.e.p(u,s))},
t:function(a,b){var u,t,s
u=this.a
t=b.gkc(b)
if(typeof u!=="number")return u.t()
t=C.e.t(u,t)
u=this.b
s=b.gkd(b)
if(typeof u!=="number")return u.t()
return new V.a3(t,C.e.t(u,s))},
F:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.F()
t=this.b
if(typeof t!=="number")return t.F()
return new V.a3(u*b,t*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.mr
if(u==null){u=new V.a3(0,0)
$.mr=u}return u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.a3(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.J(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.J(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+"]"}}
V.I.prototype={
cH:function(a){return Math.sqrt(this.I(this))},
I:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cI:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.I(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aH:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.I(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.I(this.a+b.a,this.b+b.b,this.c+b.c)},
t:function(a,b){return new V.I(this.a-b.a,this.b-b.b,this.c-b.c)},
U:function(a){return new V.I(-this.a,-this.b,-this.c)},
F:function(a,b){return new V.I(this.a*b,this.b*b,this.c*b)},
A:function(a,b){if(Math.abs(b-0)<$.M().a)return V.d_()
return new V.I(this.a/b,this.b/b,this.c/b)},
ey:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.X(this.a,3,0)+", "+V.X(this.b,3,0)+", "+V.X(this.c,3,0)+"]"}}
U.fK.prototype={
bV:function(a){var u=V.pz(a,this.c,this.b)
return u},
gC:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u},
a0:function(a){var u=this.y
if(u!=null)u.N(a)},
sf2:function(a,b){},
seA:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.M().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bV(t)}u=new D.O("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.a0(u)}},
seC:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bV(t)}u=new D.O("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.a0(u)}},
sa4:function(a,b){var u
b=this.bV(b)
u=this.d
if(!(Math.abs(u-b)<$.M().a)){this.d=b
u=new D.O("location",u,b,this,[P.r])
u.b=!0
this.a0(u)}},
seB:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.M().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.O("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.a0(u)}},
sa2:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.O("velocity",u,a,this,[P.r])
u.b=!0
this.a0(u)}},
sdZ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.O("dampening",u,a,this,[P.r])
u.b=!0
this.a0(u)}},
aB:function(a,b){var u,t,s,r,q
u=this.f
t=$.M().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa4(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.M().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sa2(s)}}}
U.dw.prototype={
gC:function(){var u=this.b
if(u==null){u=D.Y()
this.b=u}return u},
b0:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dw))return!1
return J.V(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cz.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Y()
this.e=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.e
if(u!=null)u.N(a)},
ar:function(){return this.a0(null)},
fM:function(a,b){var u,t,s,r,q,p,o,n
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gbl(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gC()
n.toString
H.n(s,r)
if(n.a==null)n.saj(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c2(a,b,this,[u])
u.b=!0
this.a0(u)},
ij:function(a,b){var u,t,s
u=U.ak
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gbl();t.D();)t.gL(t).gC().M(0,s)
u=new D.c3(a,b,this,[u])
u.b=!0
this.a0(u)},
b0:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.av(u,u.length,0,[H.u(u,0)]),s=null;u.D();){t=u.d
if(t!=null){r=t.b0(0,b,c)
if(r!=null)s=s==null?r:r.F(0,s)}}this.f=s==null?V.dX():s
u=this.e
if(u!=null)u.an(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cz))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.V(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ak]},
$aa6:function(){return[U.ak]},
$iak:1}
U.ak.prototype={}
U.es.prototype={
gC:function(){var u=this.fx
if(u==null){u=D.Y()
this.fx=u}return u},
a0:function(a){var u
H.h(a,"$iB")
u=this.fx
if(u!=null)u.N(a)},
ar:function(){return this.a0(null)},
jH:function(a){var u,t
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.b
if(t==null){t=D.Y()
u.b=t
u=t}else u=t
u.h(0,this.ghw())
u=this.a.c
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.ghy())
u=this.a.c
t=u.c
if(t==null){t=D.Y()
u.c=t
u=t}else u=t
u.h(0,this.ghA())
u=this.a.d
t=u.f
if(t==null){t=D.Y()
u.f=t
u=t}else u=t
u.h(0,this.ghr())
u=this.a.d
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.ght())
u=this.a.e
t=u.b
if(t==null){t=D.Y()
u.b=t
u=t}else u=t
u.h(0,this.gj2())
u=this.a.e
t=u.d
if(t==null){t=D.Y()
u.d=t
u=t}else u=t
u.h(0,this.gj0())
u=this.a.e
t=u.c
if(t==null){t=D.Y()
u.c=t
u=t}else u=t
u.h(0,this.giZ())
return!0},
at:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.U()
u=-u}if(this.r){if(typeof t!=="number")return t.U()
t=-t}return new V.a3(u,t)},
hx:function(a){a=H.m(H.h(a,"$iB"),"$ibH")
if(!J.V(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
hz:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibH")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a3(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.J(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.a3(t.a,t.b).F(0,2).A(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.J(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.J(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a3(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.J(p)
o=this.cy
if(typeof o!=="number")return H.J(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.J(q)
s=this.db
if(typeof s!=="number")return H.J(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a3(t.a,t.b).F(0,2).A(0,u.gaA()))}this.ar()},
hB:function(a){var u,t,s
H.h(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.J(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.J(u)
s.sa2(-t*10*u)
this.ar()}},
hs:function(a){if(H.m(H.h(a,"$iB"),"$idS").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hu:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$ibH")
if(!J.V(this.d,a.x.b))return
u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a3(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.J(p)
o=this.cy
if(typeof o!=="number")return H.J(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.J(q)
s=this.db
if(typeof s!=="number")return H.J(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a3(t.a,t.b).F(0,2).A(0,u.gaA()))
this.ar()},
j3:function(a){H.h(a,"$iB")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
j1:function(a){var u,t,s,r,q,p,o
a=H.m(H.h(a,"$iB"),"$iem")
if(!this.cx)return
if(this.ch){u=a.d.t(0,a.y)
u=new V.a3(u.a,u.b)
u=u.I(u)
t=this.Q
if(typeof t!=="number")return H.J(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.t(0,a.y)
u=this.at(new V.a3(t.a,t.b).F(0,2).A(0,u.gaA()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.U()
s=this.y
if(typeof s!=="number")return H.J(s)
t.sa2(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.U()
t=this.x
if(typeof t!=="number")return H.J(t)
s.sa2(-u*10*t)}else{u=a.c
t=a.d
s=t.t(0,a.y)
r=this.at(new V.a3(s.a,s.b).F(0,2).A(0,u.gaA()))
s=this.c
q=r.a
if(typeof q!=="number")return q.U()
p=this.y
if(typeof p!=="number")return H.J(p)
o=this.cy
if(typeof o!=="number")return H.J(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.U()
q=this.x
if(typeof q!=="number")return H.J(q)
s=this.db
if(typeof s!=="number")return H.J(s)
o.sa4(0,-p*q+s)
this.b.sa2(0)
this.c.sa2(0)
t=t.t(0,a.z)
this.dx=this.at(new V.a3(t.a,t.b).F(0,2).A(0,u.gaA()))}this.ar()},
j_:function(a){var u,t,s
H.h(a,"$iB")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.I(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.U()
s=this.y
if(typeof s!=="number")return H.J(s)
u.sa2(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.U()
u=this.x
if(typeof u!=="number")return H.J(u)
s.sa2(-t*10*u)
this.ar()}},
b0:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.Z()
if(u<t){this.dy=t
s=b.y
this.c.aB(0,s)
this.b.aB(0,s)
u=V.m2(this.b.d)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.F(0,V.bo(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iak:1}
M.dD.prototype={
aD:function(a){var u
H.h(a,"$iB")
u=this.x
if(u!=null)u.N(a)},
fN:function(){return this.aD(null)},
hN:function(a,b){var u,t,s,r,q,p,o,n
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gas(),r={func:1,ret:-1,args:[D.B]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c_()
n.saj(null)
n.saR(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.saj(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.c2(a,b,this,[u])
u.b=!0
this.aD(u)},
hP:function(a,b){var u,t,s
u=E.an
H.k(b,"$ii",[u],"$ai")
for(t=b.gV(b),s=this.gas();t.D();)t.gL(t).gC().M(0,s)
u=new D.c3(a,b,this,[u])
u.b=!0
this.aD(u)},
sbe:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gC().M(0,this.gas())
t=this.c
this.c=a
if(a!=null)a.gC().h(0,this.gas())
u=new D.O("technique",t,this.c,this,[O.bM])
u.b=!0
this.aD(u)}},
gC:function(){var u=this.x
if(u==null){u=D.Y()
this.x=u}return u},
aY:function(a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
a1.eQ(this.c)
u=this.b
u.toString
t=a1.a
C.b.jK(t,36160,null)
C.b.ct(t,2884)
C.b.ct(t,2929)
C.b.k7(t,513)
s=t.drawingBufferWidth
r=t.drawingBufferHeight
q=u.r
p=q.a
if(typeof s!=="number")return H.J(s)
o=C.e.ao(p*s)
p=q.b
if(typeof r!=="number")return H.J(r)
n=C.e.ao(p*r)
p=C.e.ao(q.c*s)
a1.c=p
q=C.e.ao(q.d*r)
a1.d=q
C.b.le(t,o,n,p,q)
C.b.jQ(t,u.c)
u=u.a
C.b.jP(t,u.a,u.b,u.c,u.d)
C.b.jO(t,16640)
u=this.a
t=a1.c
q=a1.d
p=u.c
m=u.d
l=u.e
k=l-m
j=1/Math.tan(p*0.5)
i=V.bo(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a1.cy.eP(i)
t=$.m8
if(t==null){t=V.ma()
q=V.mv()
p=$.ms
if(p==null){p=new V.I(0,0,-1)
$.ms=p}h=p.A(0,Math.sqrt(p.I(p)))
q=q.aH(h)
g=q.A(0,Math.sqrt(q.I(q)))
f=h.aH(g)
e=new V.I(t.a,t.b,t.c)
d=g.U(0).I(e)
c=f.U(0).I(e)
b=h.U(0).I(e)
t=V.bo(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.m8=t
a=t}else a=t
t=u.b
if(t!=null){a0=t.b0(0,a1,u)
if(a0!=null)a=a0.F(0,a)}a1.db.eP(a)
u=this.c
if(u!=null)u.aB(0,a1)
for(u=this.d.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.D();)u.d.aB(0,a1)
for(u=this.d.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.D();)u.d.aY(a1)
this.a.toString
a1.cy.cK()
a1.db.cK()
this.b.toString
a1.eO()},
sh1:function(a,b){this.d=H.k(b,"$ia6",[E.an],"$aa6")},
$ipH:1}
A.dq.prototype={}
A.fz.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
kf:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e1(r.a,r.c)}},
k9:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.e0(r.a,r.c)}}}
A.hD.prototype={
fu:function(a7,a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6
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
a7.jb(u)
a7.ji(u)
a7.jc(u)
a7.jq(u)
a7.jr(u)
a7.jk(u)
a7.jv(u)
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
s.jf(u)
s.ja(u)
s.jd(u)
s.jg(u)
s.jo(u)
p=s.dy
if(p){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
s.jm(u)
s.jn(u)}s.jj(u)
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
s.je(u)
s.jl(u)
s.jp(u)
s.js(u)
s.jt(u)
s.ju(u)
s.jh(u)}m=u.a+="// === Main ===\n"
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
this.e=this.dk(n,35633)
this.f=this.dk(this.d,35632)
s=this.a
q=s.createProgram()
this.r=q
C.b.dQ(s,q,this.e)
C.b.dQ(s,this.r,this.f)
C.b.kv(s,this.r)
if(!H.lv(C.b.bP(s,this.r,35714))){h=C.b.f9(s,this.r)
C.b.k_(s,this.r)
H.t(P.w("Failed to link shader: "+H.l(h)))}this.iO()
this.iQ()
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a7.fr)this.id=H.m(this.y.q(0,"invViewMat"),"$iaC")
if(t)this.dy=H.m(this.y.q(0,"objMat"),"$iaC")
if(r)this.fr=H.m(this.y.q(0,"viewObjMat"),"$iaC")
this.fy=H.m(this.y.q(0,"projViewObjMat"),"$iaC")
if(a7.x2)this.k1=H.m(this.y.q(0,"txt2DMat"),"$icT")
if(a7.y1)this.k2=H.m(this.y.q(0,"txtCubeMat"),"$iaC")
if(a7.y2)this.k3=H.m(this.y.q(0,"colorMat"),"$iaC")
this.sfY(H.d([],[A.aC]))
t=a7.ay
if(t>0){this.k4=H.h(this.y.q(0,"bendMatCount"),"$iP")
for(g=0;g<t;++g){s=this.r1
r=this.y
q="bendValues["+g+"].mat"
f=r.j(0,q)
if(f==null)H.t(P.w("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.m(f,"$iaC"))}}t=a7.a
if(t!==C.d){this.r2=H.m(this.y.q(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.m(this.y.q(0,"emissionTxt"),"$iap")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iP")
break
case C.i:this.ry=H.m(this.y.q(0,"emissionTxt"),"$iaq")
this.x1=H.m(this.y.q(0,"nullEmissionTxt"),"$iP")
break}}t=a7.b
if(t!==C.d){this.x2=H.m(this.y.q(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.m(this.y.q(0,"ambientTxt"),"$iap")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iP")
break
case C.i:this.y2=H.m(this.y.q(0,"ambientTxt"),"$iaq")
this.ay=H.m(this.y.q(0,"nullAmbientTxt"),"$iP")
break}}t=a7.c
if(t!==C.d){this.am=H.m(this.y.q(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.bt=H.m(this.y.q(0,"diffuseTxt"),"$iap")
this.bu=H.m(this.y.q(0,"nullDiffuseTxt"),"$iP")
break
case C.i:this.e2=H.m(this.y.q(0,"diffuseTxt"),"$iaq")
this.bu=H.m(this.y.q(0,"nullDiffuseTxt"),"$iP")
break}}t=a7.d
if(t!==C.d){this.bv=H.m(this.y.q(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.e3=H.m(this.y.q(0,"invDiffuseTxt"),"$iap")
this.bw=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break
case C.i:this.e4=H.m(this.y.q(0,"invDiffuseTxt"),"$iaq")
this.bw=H.m(this.y.q(0,"nullInvDiffuseTxt"),"$iP")
break}}t=a7.e
if(t!==C.d){this.bz=H.m(this.y.q(0,"shininess"),"$ia2")
this.bx=H.m(this.y.q(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.e5=H.m(this.y.q(0,"specularTxt"),"$iap")
this.by=H.m(this.y.q(0,"nullSpecularTxt"),"$iP")
break
case C.i:this.e6=H.m(this.y.q(0,"specularTxt"),"$iaq")
this.by=H.m(this.y.q(0,"nullSpecularTxt"),"$iP")
break}}switch(a7.f){case C.d:break
case C.j:break
case C.h:this.e7=H.m(this.y.q(0,"bumpTxt"),"$iap")
this.bA=H.m(this.y.q(0,"nullBumpTxt"),"$iP")
break
case C.i:this.e8=H.m(this.y.q(0,"bumpTxt"),"$iaq")
this.bA=H.m(this.y.q(0,"nullBumpTxt"),"$iP")
break}if(a7.dy){this.e9=H.m(this.y.q(0,"envSampler"),"$iaq")
this.ea=H.m(this.y.q(0,"nullEnvTxt"),"$iP")
t=a7.r
if(t!==C.d){this.bB=H.m(this.y.q(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eb=H.m(this.y.q(0,"reflectTxt"),"$iap")
this.bC=H.m(this.y.q(0,"nullReflectTxt"),"$iP")
break
case C.i:this.ec=H.m(this.y.q(0,"reflectTxt"),"$iaq")
this.bC=H.m(this.y.q(0,"nullReflectTxt"),"$iP")
break}}t=a7.x
if(t!==C.d){this.bD=H.m(this.y.q(0,"refraction"),"$ia2")
this.bE=H.m(this.y.q(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.ed=H.m(this.y.q(0,"refractTxt"),"$iap")
this.bF=H.m(this.y.q(0,"nullRefractTxt"),"$iP")
break
case C.i:this.ee=H.m(this.y.q(0,"refractTxt"),"$iaq")
this.bF=H.m(this.y.q(0,"nullRefractTxt"),"$iP")
break}}}t=a7.y
if(t!==C.d){this.bG=H.m(this.y.q(0,"alpha"),"$ia2")
switch(t){case C.d:break
case C.j:break
case C.h:this.ef=H.m(this.y.q(0,"alphaTxt"),"$iap")
this.bH=H.m(this.y.q(0,"nullAlphaTxt"),"$iP")
break
case C.i:this.eg=H.m(this.y.q(0,"alphaTxt"),"$iaq")
this.bH=H.m(this.y.q(0,"nullAlphaTxt"),"$iP")
break}}this.sh7(H.d([],[A.cS]))
this.sit(H.d([],[A.cU]))
this.siT(H.d([],[A.cV]))
this.sj5(H.d([],[A.cW]))
this.sj6(H.d([],[A.cX]))
this.sj7(H.d([],[A.cY]))
if(a7.k2){t=a7.z
if(t>0){this.eh=H.h(this.y.q(0,"dirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="dirLights["+g+"].viewDir"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iN")
s=this.y
r="dirLights["+g+"].color"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iN")
s=this.cu;(s&&C.a).h(s,new A.cS(g,f,e))}}t=a7.Q
if(t>0){this.ei=H.h(this.y.q(0,"pntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="pntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iN")
s=this.y
r="pntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iN")
s=this.y
r="pntLights["+g+"].color"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iN")
s=this.y
r="pntLights["+g+"].att0"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$ia2")
s=this.y
r="pntLights["+g+"].att1"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.y
r="pntLights["+g+"].att2"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.cv;(s&&C.a).h(s,new A.cU(g,f,e,d,c,b,a))}}t=a7.ch
if(t>0){this.ej=H.h(this.y.q(0,"spotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="spotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iN")
s=this.y
r="spotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iN")
s=this.y
r="spotLights["+g+"].viewPnt"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iN")
s=this.y
r="spotLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iN")
s=this.y
r="spotLights["+g+"].cutoff"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$ia2")
s=this.y
r="spotLights["+g+"].coneAngle"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.y
r="spotLights["+g+"].att0"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="spotLights["+g+"].att1"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="spotLights["+g+"].att2"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia2")
s=this.cw;(s&&C.a).h(s,new A.cV(g,f,e,d,c,b,a,a0,a1,a2))}}t=a7.cx
if(t>0){this.ek=H.h(this.y.q(0,"txtDirLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtDirLights["+g+"].objUp"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iN")
s=this.y
r="txtDirLights["+g+"].objRight"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iN")
s=this.y
r="txtDirLights["+g+"].objDir"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iN")
s=this.y
r="txtDirLights["+g+"].viewDir"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iN")
s=this.y
r="txtDirLights["+g+"].color"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iN")
s=this.y
r="txtDirLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iP")
s=this.y
r="txtDirLightsTxt2D"+g
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iap")
s=this.cz;(s&&C.a).h(s,new A.cW(g,f,e,d,c,b,a0,a))}}t=a7.cy
if(t>0){this.el=H.h(this.y.q(0,"txtPntLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtPntLights["+g+"].point"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iN")
s=this.y
r="txtPntLights["+g+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iN")
s=this.y
r="txtPntLights["+g+"].invViewRotMat"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$icT")
s=this.y
r="txtPntLights["+g+"].color"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iN")
s=this.y
r="txtPntLights["+g+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iP")
s=this.y
r="txtPntLights["+g+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$ia2")
s=this.y
r="txtPntLights["+g+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$ia2")
s=this.y
r="txtPntLights["+g+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="txtPntLightsTxtCube"+g
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$iaq")
s=this.cA;(s&&C.a).h(s,new A.cX(g,f,e,d,c,a2,b,a,a0,a1))}}t=a7.db
if(t>0){this.em=H.h(this.y.q(0,"txtSpotLightCount"),"$iP")
for(g=0;g<t;++g){s=this.y
r="txtSpotLights["+g+"].objPnt"
f=s.j(0,r)
if(f==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(f,"$iN")
s=this.y
r="txtSpotLights["+g+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(e,"$iN")
s=this.y
r="txtSpotLights["+g+"].objUp"
d=s.j(0,r)
if(d==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(d,"$iN")
s=this.y
r="txtSpotLights["+g+"].objRight"
c=s.j(0,r)
if(c==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(c,"$iN")
s=this.y
r="txtSpotLights["+g+"].viewPnt"
b=s.j(0,r)
if(b==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(b,"$iN")
s=this.y
r="txtSpotLights["+g+"].nullTxt"
a=s.j(0,r)
if(a==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a,"$iP")
s=this.y
r="txtSpotLights["+g+"].color"
a0=s.j(0,r)
if(a0==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a0,"$iN")
s=this.y
r="txtSpotLights["+g+"].tuScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a1,"$ia2")
s=this.y
r="txtSpotLights["+g+"].tvScalar"
a2=s.j(0,r)
if(a2==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a2,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att0"
a3=s.j(0,r)
if(a3==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a3,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att1"
a4=s.j(0,r)
if(a4==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a4,"$ia2")
s=this.y
r="txtSpotLights["+g+"].att2"
a5=s.j(0,r)
if(a5==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a5,"$ia2")
s=this.y
r="txtSpotLightsTxt2D"+g
a6=s.j(0,r)
if(a6==null)H.t(P.w("Required uniform value, "+r+", was not defined or used in shader."))
H.m(a6,"$iap")
s=this.cB;(s&&C.a).h(s,new A.cY(g,f,e,d,c,b,a6,a,a0,a1,a2,a3,a4,a5))}}}},
ak:function(a,b,c){C.b.W(b.a,b.d,1)},
ae:function(a,b,c){C.b.W(b.a,b.d,1)},
sfY:function(a){this.r1=H.k(a,"$ib",[A.aC],"$ab")},
sh7:function(a){this.cu=H.k(a,"$ib",[A.cS],"$ab")},
sit:function(a){this.cv=H.k(a,"$ib",[A.cU],"$ab")},
siT:function(a){this.cw=H.k(a,"$ib",[A.cV],"$ab")},
sj5:function(a){this.cz=H.k(a,"$ib",[A.cW],"$ab")},
sj6:function(a){this.cA=H.k(a,"$ib",[A.cX],"$ab")},
sj7:function(a){this.cB=H.k(a,"$ib",[A.cY],"$ab")}}
A.hG.prototype={
jb:function(a){var u,t,s
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
ji:function(a){var u
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
jc:function(a){var u
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
jq:function(a){var u,t
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
jr:function(a){var u,t
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
jk:function(a){var u
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
jv:function(a){var u
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
aF:function(a,b,c){var u
if(b===C.d)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.j)return
if(0>=c.length)return H.f(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.aq(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jf:function(a){var u,t
u=this.a
if(u===C.d)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.aF(a,u,"emission")
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
ja:function(a){var u,t
u=this.b
if(u===C.d)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.aF(a,u,"ambient")
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
jd:function(a){var u,t
u=this.c
if(u===C.d)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"diffuse")
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
jg:function(a){var u,t
u=this.d
if(u===C.d)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.aF(a,u,"invDiffuse")
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
jo:function(a){var u,t
u=this.e
if(u===C.d)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.aF(a,u,"specular")
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
jj:function(a){var u,t
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
jm:function(a){var u,t
u=this.r
if(u===C.d)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.aF(a,u,"reflect")
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
jn:function(a){var u,t
u=this.x
if(u===C.d)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.aF(a,u,"refract")
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
je:function(a){var u,t
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
jl:function(a){var u,t
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
jp:function(a){var u,t
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
js:function(a){var u,t,s
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
jt:function(a){var u,t,s
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
ju:function(a){var u,t,s
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
jh:function(a){var u
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
i:function(a){return this.am}}
A.cS.prototype={}
A.cW.prototype={}
A.cU.prototype={}
A.cX.prototype={}
A.cV.prototype={}
A.cY.prototype={}
A.cL.prototype={
fz:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
dk:function(a,b){var u,t,s
u=this.a
t=C.b.jY(u,b)
C.b.fk(u,t,a)
C.b.jS(u,t)
if(!H.lv(C.b.fb(u,t,35713))){s=C.b.fa(u,t)
C.b.k0(u,t)
throw H.c(P.w("Error compiling shader '"+H.l(t)+"': "+H.l(s)))}return t},
iO:function(){var u,t,s,r,q,p
u=H.d([],[A.dq])
t=this.a
s=H.ai(C.b.bP(t,this.r,35721))
if(typeof s!=="number")return H.J(s)
r=0
for(;r<s;++r){q=C.b.f4(t,this.r,r)
p=C.b.f6(t,this.r,q.name)
C.a.h(u,new A.dq(t,q.name,p))}this.x=new A.fz(u)},
iQ:function(){var u,t,s,r,q,p
u=H.d([],[A.en])
t=this.a
s=H.ai(C.b.bP(t,this.r,35718))
if(typeof s!=="number")return H.J(s)
r=0
for(;r<s;++r){q=C.b.f5(t,this.r,r)
p=C.b.fc(t,this.r,q.name)
C.a.h(u,this.jZ(q.type,q.size,q.name,p))}this.y=new A.j2(u)},
aP:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.P(u,t,b,c)
else return A.lj(u,t,b,a,c)},
h4:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.ap(u,t,b,c)
else return A.lj(u,t,b,a,c)},
h5:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aq(u,t,b,c)
else return A.lj(u,t,b,a,c)},
bp:function(a,b){return new P.eD(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.l(b)+"."))},
jZ:function(a,b,c,d){switch(a){case 5120:return this.aP(b,c,d)
case 5121:return this.aP(b,c,d)
case 5122:return this.aP(b,c,d)
case 5123:return this.aP(b,c,d)
case 5124:return this.aP(b,c,d)
case 5125:return this.aP(b,c,d)
case 5126:return new A.a2(this.a,this.r,c,d)
case 35664:return new A.iY(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.j0(this.a,this.r,c,d)
case 35667:return new A.iZ(this.a,this.r,c,d)
case 35668:return new A.j_(this.a,this.r,c,d)
case 35669:return new A.j1(this.a,this.r,c,d)
case 35674:return new A.j3(this.a,this.r,c,d)
case 35675:return new A.cT(this.a,this.r,c,d)
case 35676:return new A.aC(this.a,this.r,c,d)
case 35678:return this.h4(b,c,d)
case 35680:return this.h5(b,c,d)
case 35670:throw H.c(this.bp("BOOL",c))
case 35671:throw H.c(this.bp("BOOL_VEC2",c))
case 35672:throw H.c(this.bp("BOOL_VEC3",c))
case 35673:throw H.c(this.bp("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.l(a)+" for "+H.l(c)+"."))}}}
A.bZ.prototype={
i:function(a){return this.b}}
A.en.prototype={}
A.j2.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
kn:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.kn("\n")}}
A.P.prototype={
i:function(a){return"Uniform1i: "+H.l(this.c)}}
A.iZ.prototype={
i:function(a){return"Uniform2i: "+H.l(this.c)}}
A.j_.prototype={
i:function(a){return"Uniform3i: "+H.l(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform4i: "+H.l(this.c)}}
A.iX.prototype={
i:function(a){return"Uniform1iv: "+H.l(this.c)},
sj8:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a2.prototype={
i:function(a){return"Uniform1f: "+H.l(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform2f: "+H.l(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.l(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform4f: "+H.l(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform1Mat2 "+H.l(this.c)}}
A.cT.prototype={
ap:function(a){var u=new Float32Array(H.cd(H.k(a,"$ib",[P.r],"$ab")))
C.b.eY(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.l(this.c)}}
A.aC.prototype={
ap:function(a){var u=new Float32Array(H.cd(H.k(a,"$ib",[P.r],"$ab")))
C.b.eZ(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.l(this.c)}}
A.ap.prototype={
i:function(a){return"UniformSampler2D: "+H.l(this.c)}}
A.aq.prototype={
i:function(a){return"UniformSamplerCube: "+H.l(this.c)}}
F.kr.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.cI(u.b,b).cI(u.d.cI(u.c,b),c)
a.sa4(0,new V.a1(t.a,t.b,t.c))
a.seU(t.A(0,Math.sqrt(t.I(t))))
u=1-b
s=1-c
a.sdU(new V.b8(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:8}
F.kB.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:31}
F.kD.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.J(q)
t=-t*q
p=s*q
a.sa4(0,new V.a1(t,p,r))
p=new V.I(t,p,r)
a.seU(p.A(0,Math.sqrt(p.I(p))))
a.sdU(new V.b8(1-c,2+c,-1,-1))},
$S:8}
F.kE.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:21}
F.kF.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:21}
F.kY.prototype={
$2:function(a,b){return 0},
$S:31}
F.kZ.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.J(u)
t=a.f
s=new V.I(t.a,t.b,t.c)
u=s.A(0,Math.sqrt(s.I(s))).F(0,this.b+u)
a.sa4(0,new V.a1(u.a,u.b,u.c))},
$S:8}
F.l_.prototype={
$1:function(a){return new V.a1(Math.cos(a),Math.sin(a),0)},
$S:29}
F.kM.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.a1(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:29}
F.kC.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.lJ(t.$1(u),s)
s=J.np(J.lJ(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.I(s.a,s.b,s.c)
q=s.A(0,Math.sqrt(s.I(s)))
t=$.mt
if(t==null){t=new V.I(1,0,0)
$.mt=t
p=t}else p=t
t=q.aH(!J.V(q,p)?V.mw():p)
o=t.A(0,Math.sqrt(t.I(t)))
t=o.aH(q)
p=t.A(0,Math.sqrt(t.I(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.F(0,t*s)
s=o.F(0,m*s)
a.sa4(0,J.no(r,new V.a1(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:8}
F.a9.prototype={
b8:function(){if(!this.gb9()){C.a.M(this.a.a.d.b,this)
this.a.a.a3()}this.ca()
this.cb()
this.iA()},
cf:function(a){this.a=a
C.a.h(a.d.b,this)},
cg:function(a){this.b=a
C.a.h(a.d.c,this)},
iN:function(a){this.c=a
C.a.h(a.d.d,this)},
ca:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
iA:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gb9:function(){return this.a==null||this.b==null||this.c==null},
fX:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d_()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ey())return
return q.A(0,Math.sqrt(q.I(q)))},
h0:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.t(0,t)
u=new V.I(u.a,u.b,u.c)
q=u.A(0,Math.sqrt(u.I(u)))
u=r.t(0,t)
u=new V.I(u.a,u.b,u.c)
u=q.aH(u.A(0,Math.sqrt(u.I(u))))
return u.A(0,Math.sqrt(u.I(u)))},
co:function(){if(this.d!=null)return!0
var u=this.fX()
if(u==null){u=this.h0()
if(u==null)return!1}this.d=u
this.a.a.a3()
return!0},
fW:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d_()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.ey())return
return q.A(0,Math.sqrt(q.I(q)))},
h_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
u=new V.I(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
if(j.a-k.a<0)h=h.U(0)}else{g=(u-l.b)/i
u=m.t(0,p).F(0,g).p(0,p).t(0,s)
u=new V.I(u.a,u.b,u.c)
h=u.A(0,Math.sqrt(u.I(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.U(0)}u=this.d
if(u!=null){f=u.A(0,Math.sqrt(u.I(u)))
u=f.aH(h)
u=u.A(0,Math.sqrt(u.I(u))).aH(f)
h=u.A(0,Math.sqrt(u.I(u)))}return h},
cm:function(){if(this.e!=null)return!0
var u=this.fW()
if(u==null){u=this.h_()
if(u==null)return!1}this.e=u
this.a.a.a3()
return!0},
gjR:function(a){if(J.V(this.a,this.b))return!0
if(J.V(this.b,this.c))return!0
if(J.V(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t
if(this.gb9())return a+"disposed"
u=a+C.c.ah(J.au(this.a.e),0)+", "+C.c.ah(J.au(this.b.e),0)+", "+C.c.ah(J.au(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.G("")}}
F.h6.prototype={}
F.is.prototype={
ba:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.B()
u=u.e
t=c.c
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.c
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.bn.prototype={
b8:function(){if(!this.gb9()){C.a.M(this.a.a.c.b,this)
this.a.a.a3()}this.ca()
this.cb()},
cf:function(a){this.a=a
C.a.h(a.c.b,this)},
cg:function(a){this.b=a
C.a.h(a.c.c,this)},
ca:function(){var u=this.a
if(u!=null){C.a.M(u.c.b,this)
this.a=null}},
cb:function(){var u=this.b
if(u!=null){C.a.M(u.c.c,this)
this.b=null}},
gb9:function(){return this.a==null||this.b==null},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){if(this.gb9())return a+"disposed"
return a+C.c.ah(J.au(this.a.e),0)+", "+C.c.ah(J.au(this.b.e),0)},
R:function(){return this.G("")}}
F.hq.prototype={}
F.iW.prototype={
ba:function(a,b,c){var u,t
u=b.a
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
return u==t.e}else{u=b.a
u.a.a.B()
u=u.e
t=c.b
t.a.a.B()
if(u==t.e){u=b.b
u.a.a.B()
u=u.e
t=c.a
t.a.a.B()
return u==t.e}else return!1}}}
F.bJ.prototype={
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.ah(J.au(u.e),0)},
R:function(){return this.G("")}}
F.e9.prototype={
gC:function(){var u=this.e
if(u==null){u=D.Y()
this.e=u}return u},
bb:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.B()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){q=u[r]
this.a.h(0,q.jT())}this.a.B()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bJ()
if(m.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.N(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.nS(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.C)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.f(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.B()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.f(o,n)
h=o[n]
n=this.d.a
n.a.h(0,k)
n.a.h(0,j)
n.a.h(0,h)
F.cw(k,j,h)}u=this.e
if(u!=null)u.an(0)},
ax:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.ax()||!1
if(!this.a.ax())t=!1
u=this.e
if(u!=null)u.an(0)
return t},
kA:function(a,b){var u,t,s,r,q,p
P.ay("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.ay("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
P.ay("FLAG 3\n")
for(u=[F.ah];t.length!==0;){s=C.a.gkj(t)
C.a.kV(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.f(t,q)
p=t[q]
if(p!=null&&a.ba(0,s,p)){C.a.h(r,p)
C.a.M(t,p)}}if(r.length>1)b.bb(r)}}P.ay("FLAG 4\n")
this.a.B()
P.ay("FLAG 5\n")
this.c.cP()
P.ay("FLAG 6\n")
this.d.cP()
P.ay("FLAG 7\n")
this.b.kW()
P.ay("FLAG 8\n")
this.c.cQ(new F.iW())
P.ay("FLAG 9\n")
this.d.cQ(new F.is())
P.ay("FLAG 10\n")
u=this.e
if(u!=null)u.an(0)
P.ay("FLAG 11\n")},
jC:function(a){this.kA(new F.jp(),new F.hX())},
ci:function(){return this.jC(null)},
cC:function(){var u,t,s,r,q,p
u=this.e
if(u!=null)++u.d
this.d.cC()
for(t=this.a.c.length-1;t>=0;--t){u=this.a.c
if(t>=u.length)return H.f(u,t)
s=u[t]
u=s.r
if(u!=null)s.seD(new V.I(-u.a,-u.b,-u.c))
u=s.x
if(u!=null){r=-u.a
q=-u.b
u=-u.c
p=new V.I(r,q,u).A(0,Math.sqrt(r*r+q*q+u*u))
if(!J.V(s.x,p)){s.x=p
u=s.a
if(u!=null){u=u.e
if(u!=null)u.N(null)}}}}u=this.e
if(u!=null)u.an(0)},
jM:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.bv()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bu().a)!==0)++r
if((s&$.bt().a)!==0)++r
if((s&$.bw().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.dj().a)!==0)++r
if((s&$.dk().a)!==0)++r
if((s&$.cn().a)!==0)++r
if((s&$.bs().a)!==0)++r
q=a1.gd0(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.ds])
for(m=0,l=0;l<r;++l){k=a1.jG(l)
j=k.gd0(k)
C.a.n(n,l,new Z.ds(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.f(t,i)
h=t[i].kw(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aw(t,34962,e)
C.b.dX(t,34962,new Float32Array(H.cd(o)),35044)
C.b.aw(t,34962,null)
d=new Z.dt(new Z.eu(34962,e),n,a1)
d.shj(H.d([],[Z.bF]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.f(b,l)
b=b[l].c
b.a.a.B()
C.a.h(c,b.e)}a=Z.lm(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bF(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.G("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.G("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.G("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.G("   "))}return C.a.m(u,"\n")},
aa:function(a){var u=this.e
if(u!=null)u.N(a)},
a3:function(){return this.aa(null)},
$ipI:1}
F.ik.prototype={
jy:function(a){var u,t,s,r,q,p,o
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
jz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
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
cQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.ba(0,p,n)){p.b8()
break}}}}},
cP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gjR(s)
if(t)s.b8()}},
ax:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].co())s=!1
return s},
cn:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].cm())s=!1
return s},
cC:function(){var u,t,s,r,q,p
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
q=r.b
r.b=r.c
r.c=q
p=r.d
if(p!=null)r.d=new V.I(-p.a,-p.b,-p.c)
p=r.e
if(p!=null)r.e=new V.I(-p.a,-p.b,-p.c)
p=r.a.a.e
if(p!=null)p.N(null)}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
shb:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")}}
F.il.prototype={
gl:function(a){return this.b.length},
cQ:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.ba(0,p,n)){p.b8()
break}}}}},
cP:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.V(s.a,s.b)
if(t)s.b8()}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.f(r,s)
C.a.h(u,r[s].G(a+(""+s+". ")))}return C.a.m(u,"\n")},
R:function(){return this.G("")},
shn:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")}}
F.im.prototype={
gl:function(a){return this.b.length},
kW:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.N(null)}s=t.a
if(s!=null){C.a.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc7:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
F.ah.prototype={
cr:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.et(this.cx,s,p,u,t,r,q,a,o)},
jT:function(){return this.cr(null)},
sa4:function(a,b){var u
if(!J.V(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a3()}},
seD:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.I(a)))
if(!J.V(this.r,a)){this.r=a
u=this.a
if(u!=null)u.a3()}},
seU:function(a){var u
if(!J.V(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a3()}},
sdU:function(a){var u
if(!J.V(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a3()}},
kw:function(a){var u,t
if(a.v(0,$.bv())){u=this.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bu())){u=this.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bt())){u=this.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.bw())){u=this.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.v(0,$.bx())){u=this.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dj())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.v(0,$.dk())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.cn()))return H.d([this.ch],[P.r])
else if(a.v(0,$.bs())){u=this.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
co:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d_()
this.d.O(0,new F.ju(u))
u=u.a
this.r=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.an(0)}return!0},
cm:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d_()
this.d.O(0,new F.jt(u))
u=u.a
this.x=u.A(0,Math.sqrt(u.I(u)))
u=this.a
if(u!=null){u.a3()
u=this.a.e
if(u!=null)u.an(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
G:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.c.ah(J.au(this.e),0))
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
C.a.h(u,V.X(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
R:function(){return this.G("")}}
F.ju.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jt.prototype={
$1:function(a){var u,t
H.h(a,"$ia9")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:6}
F.jk.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a3()
return!0},
jB:function(a,b,c,d,e,f,g,h,i){var u=F.et(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
jA:function(a,b,c,d,e,f){return this.jB(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
ax:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].co()
return!0},
cn:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].cm()
return!0},
jN:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.V(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.N(null)}}}}return!0},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
this.B()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sj9:function(a){this.c=H.k(a,"$ib",[F.ah],"$ab")}}
F.jl.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b<t){if(b<0)return H.f(u,b)
return u[b]}b-=t
u=this.c
s=u.length
if(b<s){if(b<0)return H.f(u,b)
return u[b]}b-=s
u=this.d
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
O:function(a,b){H.n(b,{func:1,ret:-1,args:[F.a9]})
C.a.O(this.b,b)
C.a.O(this.c,new F.jm(this,b))
C.a.O(this.d,new F.jn(this,b))},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
shc:function(a){this.b=H.k(a,"$ib",[F.a9],"$ab")},
shd:function(a){this.c=H.k(a,"$ib",[F.a9],"$ab")},
she:function(a){this.d=H.k(a,"$ib",[F.a9],"$ab")}}
F.jm.prototype={
$1:function(a){H.h(a,"$ia9")
if(!J.V(a.a,this.a))this.b.$1(a)},
$S:6}
F.jn.prototype={
$1:function(a){var u
H.h(a,"$ia9")
u=this.a
if(!J.V(a.a,u)&&!J.V(a.b,u))this.b.$1(a)},
$S:6}
F.jo.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.f(u,s)
return u[s]}else{if(b<0)return H.f(u,b)
return u[b]}},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sho:function(a){this.b=H.k(a,"$ib",[F.bn],"$ab")},
shp:function(a){this.c=H.k(a,"$ib",[F.bn],"$ab")}}
F.jq.prototype={}
F.jp.prototype={
ba:function(a,b,c){return J.V(b.f,c.f)}}
F.jr.prototype={}
F.hX.prototype={
bb:function(a){var u,t,s,r
H.k(a,"$ib",[F.ah],"$ab")
u=V.d_()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.I(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.A(0,Math.sqrt(u.I(u)))
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s)a[s].seD(u)
return}}
F.js.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
G:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].G(a))
return C.a.m(u,"\n")},
R:function(){return this.G("")},
sc7:function(a){this.b=H.k(a,"$ib",[F.bJ],"$ab")}}
O.dU.prototype={
gC:function(){var u=this.dy
if(u==null){u=D.Y()
this.dy=u}return u},
ad:function(a){var u
H.h(a,"$iB")
u=this.dy
if(u!=null)u.N(a)},
fQ:function(){return this.ad(null)},
dD:function(a){H.h(a,"$iB")
this.a=null
this.ad(a)},
iG:function(){return this.dD(null)},
hG:function(a,b){var u=V.ao
u=new D.c2(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ad(u)},
hI:function(a,b){var u=V.ao
u=new D.c3(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.ad(u)},
dh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.a7(u.e.length+3,4)*4
s=C.f.a7(u.f.length+3,4)*4
r=C.f.a7(u.r.length+3,4)*4
q=C.f.a7(u.x.length+3,4)*4
p=C.f.a7(u.y.length+3,4)*4
o=C.f.a7(u.z.length+3,4)*4
n=C.f.a7(this.e.a.length+3,4)*4
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
a7=$.bv()
if(a0){b=$.bu()
a7=new Z.bd(a7.a|b.a)}if(a1){b=$.bt()
a7=new Z.bd(a7.a|b.a)}if(a2){b=$.bw()
a7=new Z.bd(a7.a|b.a)}if(a3){b=$.bx()
a7=new Z.bd(a7.a|b.a)}if(a5){b=$.bs()
a7=new Z.bd(a7.a|b.a)}return new A.hG(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
Y:function(a,b){H.k(a,"$ib",[T.cP],"$ab")
if(b!=null)if(!C.a.X(a,b)){b.a=a.length
C.a.h(a,b)}},
aB:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.av(u,u.length,0,[H.u(u,0)]);u.D();){t=u.d
t.toString
s=$.bL
if(s==null){s=new V.a1(0,0,0)
$.bL=s}t.a=s
s=$.jj
if(s==null){s=new V.I(0,0,1)
$.jj=s}t.b=s
s=$.ji
if(s==null){s=new V.I(0,1,0)
$.ji=s}t.c=s
s=$.jh
if(s==null){s=new V.I(-1,0,0)
$.jh=s}t.d=s
s=t.e
if(s!=null){r=s.b0(0,b,t)
if(r!=null){t.a=r.b_(t.a)
s=r.bg(t.b)
q=s.a
p=s.b
o=s.c
t.b=s.A(0,Math.sqrt(q*q+p*p+o*o))
o=r.bg(t.c)
p=o.a
q=o.b
s=o.c
t.c=o.A(0,Math.sqrt(p*p+q*q+s*s))
s=r.bg(t.d)
q=s.a
p=s.b
o=s.c
t.d=s.A(0,Math.sqrt(q*q+p*p+o*o))}}}},
kY:function(a4,a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
u=this.a
if(u==null){u=this.dh()
t=a4.fr.j(0,u.am)
if(t==null){t=A.nY(u,a4.a)
s=t.b
if(s.length===0)H.t(P.w("May not cache a shader with no name."))
if(a4.fr.br(0,s))H.t(P.w('Shader cache already contains a shader by the name "'+s+'".'))
a4.fr.n(0,s,t)}this.a=t
a5.e=null
u=t}r=u.z
q=r.bt
u=a5.e
if(!(u instanceof Z.dt)){a5.e=null
u=null}if(u==null||!u.d.v(0,q)){u=r.r1
if(u)a5.d.ax()
p=r.r2
if(p){o=a5.d
n=o.e
if(n!=null)++n.d
o.d.cn()
o.a.cn()
o=o.e
if(o!=null)o.an(0)}o=r.ry
if(o){n=a5.d
m=n.e
if(m!=null)++m.d
n.a.jN()
n=n.e
if(n!=null)n.an(0)}l=a5.d.jM(new Z.jx(a4.a),q)
l.aW($.bv()).e=this.a.Q.c
if(u)l.aW($.bu()).e=this.a.cx.c
if(p)l.aW($.bt()).e=this.a.ch.c
if(r.rx)l.aW($.bw()).e=this.a.cy.c
if(o)l.aW($.bx()).e=this.a.db.c
if(r.x1)l.aW($.bs()).e=this.a.dx.c
a5.e=l}u=T.cP
k=H.d([],[u])
p=this.a
o=a4.a
C.b.f0(o,p.r)
p.x.kf()
if(r.fx){p=this.a
n=a4.dx
n=n.ga1(n)
p=p.dy
p.toString
p.ap(n.ai(0,!0))}if(r.fy){p=this.a
n=a4.cx
if(n==null){n=a4.db
n=n.ga1(n)
m=a4.dx
m=n.F(0,m.ga1(m))
a4.cx=m
n=m}p=p.fr
p.toString
p.ap(n.ai(0,!0))}p=this.a
n=a4.ch
if(n==null){n=a4.gkT()
m=a4.dx
m=n.F(0,m.ga1(m))
a4.ch=m
n=m}p=p.fy
p.toString
p.ap(n.ai(0,!0))
if(r.x2){p=this.a
n=this.b
p=p.k1
p.toString
p.ap(C.r.ai(n,!0))}if(r.y1){p=this.a
n=this.c
p=p.k2
p.toString
p.ap(C.r.ai(n,!0))}if(r.y2){p=this.a
n=this.d
p=p.k3
p.toString
p.ap(C.r.ai(n,!0))}if(r.ay>0){j=this.e.a.length
p=this.a.k4
C.b.W(p.a,p.d,j)
for(p=[P.r],i=0;i<j;++i){n=this.a
m=this.e.a
if(i>=m.length)return H.f(m,i)
m=m[i]
n.toString
H.h(m,"$iao")
n=n.r1
if(i>=n.length)return H.f(n,i)
n=n[i]
h=new Float32Array(H.cd(H.k(m.ai(0,!0),"$ib",p,"$ab")))
C.b.eZ(n.a,n.d,!1,h)}}switch(r.a){case C.d:break
case C.j:p=this.a
n=this.f.f
p=p.r2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.f.d)
p=this.a
n=this.f.d
p.ak(p.rx,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.f.e)
p=this.a
n=this.f.e
p.ae(p.ry,p.x1,n)
n=this.a
p=this.f.f
n=n.r2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}if(r.k2){switch(r.b){case C.d:break
case C.j:p=this.a
n=this.r.f
p=p.x2
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.r.d)
p=this.a
n=this.r.d
p.ak(p.y1,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.r.e)
p=this.a
n=this.r.e
p.ae(p.y2,p.ay,n)
n=this.a
p=this.r.f
n=n.x2
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.c){case C.d:break
case C.j:p=this.a
n=this.x.f
p=p.am
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.x.d)
p=this.a
n=this.x.d
p.ak(p.bt,p.bu,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.x.e)
p=this.a
n=this.x.e
p.ae(p.e2,p.bu,n)
n=this.a
p=this.x.f
n=n.am
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.d){case C.d:break
case C.j:p=this.a
n=this.y.f
p=p.bv
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
break
case C.h:this.Y(k,this.y.d)
p=this.a
n=this.y.d
p.ak(p.e3,p.bw,n)
n=this.a
p=this.y.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break
case C.i:this.Y(k,this.y.e)
p=this.a
n=this.y.e
p.ae(p.e4,p.bw,n)
n=this.a
p=this.y.f
n=n.bv
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
break}switch(r.e){case C.d:break
case C.j:p=this.a
n=this.z.f
p=p.bx
p.toString
m=n.a
g=n.b
n=n.c
C.b.w(p.a,p.d,m,g,n)
n=this.a
g=this.z.ch
n=n.bz
C.b.T(n.a,n.d,g)
break
case C.h:this.Y(k,this.z.d)
p=this.a
n=this.z.d
p.ak(p.e5,p.by,n)
n=this.a
p=this.z.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bz
C.b.T(p.a,p.d,g)
break
case C.i:this.Y(k,this.z.e)
p=this.a
n=this.z.e
p.ae(p.e6,p.by,n)
n=this.a
p=this.z.f
n=n.bx
n.toString
m=p.a
g=p.b
p=p.c
C.b.w(n.a,n.d,m,g,p)
p=this.a
g=this.z.ch
p=p.bz
C.b.T(p.a,p.d,g)
break}if(r.z>0){j=this.dx.e.length
p=this.a.eh
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.e,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cu
if(e>=m.length)return H.f(m,e)
b=m[e]
m=f.bg(c.gcs(c))
g=m.a
a=m.b
a0=m.c
a0=m.A(0,Math.sqrt(g*g+a*a+a0*a0))
a=b.b
g=a0.a
m=a0.b
a0=a0.c
C.b.w(a.a,a.d,g,m,a0)
a0=c.gal(c)
m=b.c
C.b.w(m.a,m.d,a0.a,a0.b,a0.c);++e}}if(r.Q>0){j=this.dx.f.length
p=this.a.ei
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.f,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cv
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gcL(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.b_(c.gcL(c))
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gal(c)
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gdR()
g=b.e
C.b.T(g.a,g.d,m)
m=c.gdS()
g=b.f
C.b.T(g.a,g.d,m)
m=c.gdT()
g=b.r
C.b.T(g.a,g.d,m);++e}}if(r.ch>0){j=this.dx.r.length
p=this.a.ej
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.r,n=p.length,e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cw
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.gcL(c)
g=b.b
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gcs(c).lp()
g=b.c
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=f.b_(c.gcL(c))
g=b.d
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.gal(c)
g=b.e
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.glm()
g=b.f
C.b.T(g.a,g.d,m)
m=c.gll()
g=b.r
C.b.T(g.a,g.d,m)
m=c.gdR()
g=b.x
C.b.T(g.a,g.d,m)
m=c.gdS()
g=b.y
C.b.T(g.a,g.d,m)
m=c.gdT()
g=b.z
C.b.T(g.a,g.d,m);++e}}if(r.cx>0){j=this.dx.x.length
p=this.a.ek
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.x,n=p.length,m=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
g=this.a.cz
if(e>=g.length)return H.f(g,e)
b=g[e]
g=c.gcU()
H.k(k,"$ib",m,"$ab")
if(!C.a.X(k,g)){g.a=k.length
C.a.h(k,g)}g=c.gcs(c)
a=b.d
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.glq()
a=b.b
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=c.gcS(c)
a=b.c
C.b.w(a.a,a.d,g.a,g.b,g.c)
g=f.bg(c.gcs(c))
a=g.a
a0=g.b
a1=g.c
a1=g.A(0,Math.sqrt(a*a+a0*a0+a1*a1))
a0=b.e
a=a1.a
g=a1.b
a1=a1.c
C.b.w(a0.a,a0.d,a,g,a1)
a1=c.gal(c)
g=b.f
C.b.w(g.a,g.d,a1.a,a1.b,a1.c)
a1=c.gcU()
g=a1.gez(a1)
if(!g){g=b.x
C.b.W(g.a,g.d,1)}else{g=b.r
a=a1.d
a0=g.a
g=g.d
if(!a)C.b.W(a0,g,0)
else C.b.W(a0,g,a1.a)
g=b.x
C.b.W(g.a,g.d,0)}++e}}if(r.cy>0){j=this.dx.y.length
p=this.a.el
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.y,n=p.length,m=[P.r],g=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
a=this.a.cA
if(e>=a.length)return H.f(a,e)
b=a[e]
a=c.gcU()
H.k(k,"$ib",g,"$ab")
if(!C.a.X(k,a)){a.a=k.length
C.a.h(k,a)}a2=f.F(0,c.ga1(c))
a=c.ga1(c)
a0=$.bL
if(a0==null){a0=new V.a1(0,0,0)
$.bL=a0}a0=a.b_(a0)
a=b.b
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a=$.bL
if(a==null){a=new V.a1(0,0,0)
$.bL=a}a=a2.b_(a)
a0=b.c
C.b.w(a0.a,a0.d,a.a,a.b,a.c)
a=a2.ex(0)
a0=b.d
h=new Float32Array(H.cd(H.k(new V.dW(a.a,a.b,a.c,a.e,a.f,a.r,a.y,a.z,a.Q).ai(0,!0),"$ib",m,"$ab")))
C.b.eY(a0.a,a0.d,!1,h)
a0=c.gal(c)
a=b.e
C.b.w(a.a,a.d,a0.a,a0.b,a0.c)
a0=c.gcU()
a=a0.gez(a0)
if(!a){a=b.r
C.b.W(a.a,a.d,1)}else{a=b.f
a1=a0.gez(a0)
a3=a.a
a=a.d
if(!a1)C.b.W(a3,a,0)
else C.b.W(a3,a,a0.gln(a0))
a=b.r
C.b.W(a.a,a.d,0)}a=c.gdR()
a0=b.x
C.b.T(a0.a,a0.d,a)
a=c.gdS()
a0=b.y
C.b.T(a0.a,a0.d,a)
a=c.gdT()
a0=b.z
C.b.T(a0.a,a0.d,a);++e}}if(r.db>0){j=this.dx.z.length
p=this.a.em
C.b.W(p.a,p.d,j)
p=a4.db
f=p.ga1(p)
for(p=this.dx.z,n=p.length,u=[u],e=0,d=0;d<p.length;p.length===n||(0,H.C)(p),++d){c=p[d]
m=this.a.cB
if(e>=m.length)return H.f(m,e)
b=m[e]
m=c.r
H.k(k,"$ib",u,"$ab")
if(m!=null)if(!C.a.X(k,m)){m.a=k.length
C.a.h(k,m)}m=c.a
g=b.b
a=m.a
a0=m.b
m=m.c
C.b.w(g.a,g.d,a,a0,m)
m=c.b
a0=b.c
a=m.a
g=m.b
m=m.c
C.b.w(a0.a,a0.d,a,g,m)
m=c.c
g=b.d
a=m.a
a0=m.b
m=m.c
C.b.w(g.a,g.d,a,a0,m)
m=c.d
a0=b.e
a=m.a
g=m.b
m=m.c
C.b.w(a0.a,a0.d,a,g,m)
m=f.b_(c.a)
g=b.f
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.r
g=m!=null
if(!g||!m.d){m=b.x
C.b.W(m.a,m.d,1)}else{a=b.r
g=!g||!m.d
a0=a.a
a=a.d
if(g)C.b.W(a0,a,0)
else C.b.W(a0,a,m.a)
m=b.x
C.b.W(m.a,m.d,0)}m=c.f
g=b.y
C.b.w(g.a,g.d,m.a,m.b,m.c)
m=c.x
g=b.z
C.b.T(g.a,g.d,m)
m=c.y
g=b.Q
C.b.T(g.a,g.d,m)
m=c.ch
g=b.ch
C.b.T(g.a,g.d,m)
m=c.cx
g=b.cx
C.b.T(g.a,g.d,m)
m=c.cy
g=b.cy
C.b.T(g.a,g.d,m);++e}}}switch(r.f){case C.d:break
case C.j:break
case C.h:this.Y(k,this.Q.d)
u=this.a
p=this.Q.d
u.ak(u.e7,u.bA,p)
break
case C.i:this.Y(k,this.Q.e)
u=this.a
p=this.Q.e
u.ae(u.e8,u.bA,p)
break}if(r.fr){u=this.a
p=a4.Q
if(p==null){p=a4.db
p=p.ga1(p).ex(0)
a4.Q=p}u=u.id
u.toString
u.ap(p.ai(0,!0))}if(r.dy){this.Y(k,this.ch)
u=this.a
p=this.ch
u.ae(u.e9,u.ea,p)
switch(r.r){case C.d:break
case C.j:u=this.a
p=this.cx.f
u=u.bB
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
break
case C.h:this.Y(k,this.cx.d)
u=this.a
p=this.cx.d
u.ak(u.eb,u.bC,p)
p=this.a
u=this.cx.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break
case C.i:this.Y(k,this.cx.e)
u=this.a
p=this.cx.e
u.ae(u.ec,u.bC,p)
p=this.a
u=this.cx.f
p=p.bB
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
break}switch(r.x){case C.d:break
case C.j:u=this.a
p=this.cy.f
u=u.bE
u.toString
n=p.a
m=p.b
p=p.c
C.b.w(u.a,u.d,n,m,p)
p=this.a
m=this.cy.ch
p=p.bD
C.b.T(p.a,p.d,m)
break
case C.h:this.Y(k,this.cy.d)
u=this.a
p=this.cy.d
u.ak(u.ed,u.bF,p)
p=this.a
u=this.cy.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bD
C.b.T(u.a,u.d,m)
break
case C.i:this.Y(k,this.cy.e)
u=this.a
p=this.cy.e
u.ae(u.ee,u.bF,p)
p=this.a
u=this.cy.f
p=p.bE
p.toString
n=u.a
m=u.b
u=u.c
C.b.w(p.a,p.d,n,m,u)
u=this.a
m=this.cy.ch
u=u.bD
C.b.T(u.a,u.d,m)
break}}u=r.y
p=u!==C.d
if(p){switch(u){case C.d:break
case C.j:u=this.a
n=this.db.f
u=u.bG
C.b.T(u.a,u.d,n)
break
case C.h:this.Y(k,this.db.d)
u=this.a
n=this.db.d
u.ak(u.ef,u.bH,n)
n=this.a
u=this.db.f
n=n.bG
C.b.T(n.a,n.d,u)
break
case C.i:this.Y(k,this.db.e)
u=this.a
n=this.db.e
u.ae(u.eg,u.bH,n)
n=this.a
u=this.db.f
n=n.bG
C.b.T(n.a,n.d,u)
break}C.b.ct(o,3042)
C.b.jL(o,770,771)}for(i=0;i<k.length;++i){u=k[i]
if(!u.c&&u.d){u.c=!0
C.b.dL(o,33984+u.a)
C.b.aV(o,3553,u.b)}}u=a5.e
u.cj(a4)
u.aY(a4)
u.lc(a4)
if(p)C.b.k8(o,3042)
for(i=0;i<k.length;++i){u=k[i]
if(u.c){u.c=!1
C.b.dL(o,33984+u.a)
C.b.aV(o,3553,null)}}u=this.a
u.toString
C.b.f0(o,null)
u.x.k9()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dh().am},
sfZ:function(a){this.e=H.k(a,"$ia6",[V.ao],"$aa6")}}
O.hE.prototype={}
O.dV.prototype={
aQ:function(){}}
O.hF.prototype={}
O.b6.prototype={
dF:function(a){var u,t
if(!J.V(this.f,a)){u=this.f
this.f=a
t=new D.O(this.b+".color",u,a,this,[V.a4])
t.b=!0
this.a.ad(t)}},
aQ:function(){this.fq()
this.dF(new V.a4(1,1,1))},
sal:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.aQ()
u=this.a
u.a=null
u.ad(null)}this.dF(b)}}
O.hH.prototype={
iM:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.O(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.ad(u)}},
aQ:function(){this.bT()
this.iM(1)}}
O.hI.prototype={
cc:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.O(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.ad(u)}},
aQ:function(){this.bT()
this.cc(100)}}
O.bM.prototype={}
T.cP.prototype={}
T.eh.prototype={}
T.iI.prototype={
gC:function(){var u=this.y
if(u==null){u=D.Y()
this.y=u}return u}}
T.iJ.prototype={
ky:function(a,b,c,d,e){var u,t,s,r
u=this.a
t=u.createTexture()
C.b.aV(u,3553,t)
C.b.bL(u,3553,10242,33071)
C.b.bL(u,3553,10243,33071)
C.b.bL(u,3553,10241,9729)
C.b.bL(u,3553,10240,9729)
C.b.aV(u,3553,null);++this.d
s=document.createElement("img")
s.src=a
r=new T.iI()
r.a=0
r.b=t
r.c=!1
r.d=!1
r.e=0
r.f=0
r.r=0
r.x=0
u=W.p
W.ac(s,"load",H.n(new T.iK(this,r,s,!1,t,!1,!1),{func:1,ret:-1,args:[u]}),!1,u)
return r},
kx:function(a){return this.ky(a,!1,!1,!1,!1)},
iH:function(a,b,c){var u,t,s,r
b=V.lD(b,2)
u=V.lD(a.width,2)
t=V.lD(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l6(null,null)
s.width=u
s.height=t
r=H.h(C.q.f8(s,"2d"),"$ibX")
r.imageSmoothingEnabled=!1;(r&&C.D).kb(r,a,0,0,s.width,s.height)
return P.p6(C.D.hi(r,0,0,s.width,s.height))}}}
T.iK.prototype={
$1:function(a){var u,t,s,r
u=this.b
t=this.c
u.e=t.width
u.f=t.height
s=this.a
r=s.iH(t,s.b,this.d)
u.r=t.width
u.x=t.height
t=s.a
C.b.aV(t,3553,this.e)
C.b.kS(t,37440,this.f?1:0)
C.b.l5(t,3553,0,6408,6408,5121,r)
if(this.r)C.b.f3(t,3553)
C.b.aV(t,3553,null)
if(!u.d){u.d=!0
u=u.y
if(u!=null)u.ke()}++s.e},
$S:12}
V.bh.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"},
$iaA:1}
V.aA.prototype={}
V.dT.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sa9:function(a){this.a=H.k(a,"$ib",[V.aA],"$ab")},
$iaA:1}
V.aw.prototype={
aJ:function(a,b){return!this.fp(0,b)},
i:function(a){return"!["+this.d1(0)+"]"}}
V.i8.prototype={
aJ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c7(this.a)
t=H.c7(this.b)
return u+".."+t},
$iaA:1}
V.ij.prototype={
fw:function(a){var u,t
if(a.a.length<=0)throw H.c(P.w("May not create a SetMatcher with zero characters."))
u=new H.aP([P.o,P.S])
for(t=new H.cC(a,a.gl(a),0,[H.at(a,"y",0)]);t.D();)u.n(0,t.d,!0)
this.siK(u)},
aJ:function(a,b){return this.a.br(0,b)},
i:function(a){var u=this.a
return P.ec(u.ga8(u),0,null)},
siK:function(a){this.a=H.k(a,"$iE",[P.o,P.S],"$aE")},
$iaA:1}
V.cM.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cR(this.a.k(0,b))
r.sa9(H.d([],[V.aA]))
r.c=!1
C.a.h(this.c,r)
return r},
ki:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
sj4:function(a){this.c=H.k(a,"$ib",[V.cR],"$ab")}}
V.el.prototype={
i:function(a){var u,t
u=H.lE(this.b,"\n","\\n")
t=H.lE(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cQ.prototype={
aK:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.C)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siB:function(a){var u=P.e
this.c=H.k(a,"$iE",[u,u],"$aE")}}
V.iN.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cM(this,b)
u.sj4(H.d([],[V.cR]))
u.d=null
this.a.n(0,b,u)}return u},
S:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cQ(this,a)
t=P.e
u.siB(new H.aP([t,t]))
this.b.n(0,a,u)}return u},
eX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.el])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.H(a,o)
m=t.ki(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ec(r,0,null)
throw H.c(P.w("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ec(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.el(j==null?k.b:j,l,o)}++o}}},
siU:function(a){this.a=H.k(a,"$iE",[P.e,V.cM],"$aE")},
siY:function(a){this.b=H.k(a,"$iE",[P.e,V.cQ],"$aE")}}
V.cR.prototype={
i:function(a){return this.b.b+": "+this.d1(0)}}
X.dv.prototype={$ibp:1}
X.hd.prototype={
gC:function(){var u=this.x
if(u==null){u=D.Y()
this.x=u}return u}}
X.e2.prototype={
gC:function(){var u=this.f
if(u==null){u=D.Y()
this.f=u}return u},
aO:function(a){var u
H.h(a,"$iB")
u=this.f
if(u!=null)u.N(a)},
fT:function(){return this.aO(null)},
saX:function(a){var u,t
if(!J.V(this.b,a)){u=this.b
if(u!=null)u.gC().M(0,this.gd5())
t=this.b
this.b=a
if(a!=null)a.gC().h(0,this.gd5())
u=new D.O("mover",t,this.b,this,[U.ak])
u.b=!0
this.aO(u)}},
$ibp:1,
$idv:1}
X.ef.prototype={}
V.bB.prototype={
bk:function(a){this.b=new P.hg(C.Y)
this.c=null
this.sc1(H.d([],[[P.b,W.aE]]))},
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
n=this.b.h3(p,0,p.length)
m=n==null?p:n
C.k.fh(o,H.lE(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaz(this.d),o)}},
eM:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.sc1(H.d([],[[P.b,W.aE]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bs()
this.c=t}for(t=t.eX(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)this.bK(t[r])},
sc1:function(a){this.d=H.k(a,"$ib",[[P.b,W.aE]],"$ab")}}
V.kX.prototype={
$1:function(a){H.h(a,"$iba")
P.ay(C.e.eW(this.a.gko(),2)+" fps")},
$S:51}
V.fT.prototype={
bK:function(a){switch(a.a){case"Class":this.P(a.b,"#551")
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
bs:function(){var u,t,s,r
u=V.iO()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a_("0","9")
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
s=new V.aw()
r=[V.aA]
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
s=new V.aw()
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
s.d=s.a.S("Num")
s=u.k(0,"Float")
s.d=s.a.S("Num")
s=u.k(0,"Sym")
s.d=s.a.S("Symbol")
s=u.k(0,"CloseDoubleStr")
s.d=s.a.S("String")
s=u.k(0,"CloseSingleStr")
s.d=s.a.S("String")
s=u.k(0,"EndComment")
s.d=s.a.S("Comment")
s=u.k(0,"Whitespace")
s.d=s.a.S("Whitespace")
s=u.k(0,"Id")
t=s.a.S("Id")
s.d=t
s=[P.e]
t.aK(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aK(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aK(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.he.prototype={
bK:function(a){switch(a.a){case"Builtin":this.P(a.b,"#411")
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
bs:function(){var u,t,s,r
u=V.iO()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a_("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.x(new H.v("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a_("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a_("0","9")
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
s=new V.aw()
r=[V.aA]
s.sa9(H.d([],r))
C.a.h(t.a,s)
t=V.x(new H.v("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.x(new H.v("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.aw()
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
t.d=t.a.S("Num")
t=u.k(0,"Float")
t.d=t.a.S("Num")
t=u.k(0,"Sym")
t.d=t.a.S("Symbol")
t=u.k(0,"EndComment")
t.d=t.a.S("Comment")
t=u.k(0,"EndPreprocess")
t.d=t.a.S("Preprocess")
t=u.k(0,"Whitespace")
t.d=t.a.S("Whitespace")
t=u.k(0,"Id")
s=t.a.S("Id")
t.d=s
t=[P.e]
s.aK(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aK(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aK(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.hf.prototype={
bK:function(a){switch(a.a){case"Attr":this.P(a.b,"#911")
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
bs:function(){var u,t,s
u=V.iO()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.x(new H.v("_"))
C.a.h(t.a,s)
s=V.a_("a","z")
C.a.h(t.a,s)
s=V.a_("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.x(new H.v("_"))
C.a.h(s.a,t)
t=V.a_("0","9")
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
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
s=new V.aw()
s.sa9(H.d([],[V.aA]))
C.a.h(t.a,s)
t=V.x(new H.v('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a_("a","z")
C.a.h(s.a,t)
t=V.a_("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.S("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.S("String")
t=u.k(0,"Id")
s=t.a.S("Id")
t.d=s
s.aK(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.S("Attr")
s=u.k(0,"Other")
s.d=s.a.S("Other")
return u}}
V.i2.prototype={
eM:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.sc1(H.d([],[[P.b,W.aE]]))
this.P(C.a.m(b,"\n"),"#111")},
bK:function(a){},
bs:function(){return}}
V.i6.prototype={
dM:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mn().gcN().j(0,H.l(u))
if(t==null)if(d){c.$0()
this.dJ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lN(this.c).h(0,q)
o=W.nM("radio")
o.checked=s
o.name=u
u=W.p
W.ac(o,"change",H.n(new V.i7(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.E(q,o)
n=r.createElement("span")
n.textContent=b
C.G.E(q,n)
J.lN(this.c).h(0,r.createElement("br"))},
b6:function(a,b,c){return this.dM(a,b,c,!1)},
dJ:function(a){var u,t,s,r,q
u=P.mn()
t=P.e
s=P.nU(u.gcN(),t,t)
s.n(0,this.a,a)
r=u.eR(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iD(t,new P.k9([],[]).cV(""),"",q)}}
V.i7.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.dJ(this.d)}},
$S:12}
V.io.prototype={
fA:function(a,b){var u,t,s,r,q,p,o
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
W.ac(u,"scroll",H.n(new V.iq(s),{func:1,ret:-1,args:[o]}),!1,o)},
dO:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.iP()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.eX(C.a.ku(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
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
if(H.px(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.f(m,1)
l.href=H.H(m[1])
l.textContent=H.H(m[0])
C.k.E(t,l)}else{k=P.ff(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.l(k)
l.textContent=n
C.k.E(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.E(t,o)
break}}C.k.E(this.a,t)},
f7:function(a){var u,t,s,r
u=new V.fT("dart")
u.bk("dart")
t=new V.he("glsl")
t.bk("glsl")
s=new V.hf("html")
s.bk("html")
r=C.a.kk(H.d([u,t,s],[V.bB]),new V.ir(a))
if(r!=null)return r
u=new V.i2("plain")
u.bk("plain")
return u},
dN:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.di(r).a5(r,"+")){C.a.n(a7,s,C.c.aq(r,1))
C.a.h(u,1)
t=!0}else if(C.c.a5(r,"-")){C.a.n(a7,s,C.c.aq(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.f7(a5)
q.eM(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.E(o,n)
C.k.E(this.a,o)
m=P.ff(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.lP(null)
i.href="#"+H.l(m)
i.textContent=a4
C.k.E(j,i)
C.x.E(k,j)
C.n.E(l,k)
C.o.E(n,l)
if(t)for(h=a6,g=h,s=0;f=q.d,s<f.length;++s){r=f[s]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums codeLineLight"
c=p.createElement("td")
c.className="codeLineNums"
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
a.className="codeLineText"
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.C)(r),++a0)C.x.E(a,r[a0])
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
for(a3=C.a.gV(r);a3.D();)C.x.E(c,a3.gL(a3))
C.n.E(e,d)
C.n.E(e,c)
C.o.E(n,e)}},
jw:function(a){var u,t,s,r,q,p,o
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
r=C.o.hk(t,-1)
s=H.h((r&&C.n).ds(r,-1),"$ib9").style
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
o=H.h(C.n.ds(r,-1),"$ib9")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).E(o,p)}},
iP:function(){var u,t,s,r
if(this.b!=null)return
u=V.iO()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.x(new H.v("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.aw()
r=[V.aA]
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
s=new V.aw()
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
s=new V.aw()
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
t=new V.aw()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.x(new H.v("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.aw()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bh())
s=u.k(0,"Other").m(0,"Other")
t=new V.aw()
t.sa9(H.d([],r))
C.a.h(s.a,t)
s=V.x(new H.v("*_`["))
C.a.h(t.a,s)
s=u.k(0,"BoldEnd")
s.d=s.a.S("Bold")
s=u.k(0,"ItalicEnd")
s.d=s.a.S("Italic")
s=u.k(0,"CodeEnd")
s.d=s.a.S("Code")
s=u.k(0,"LinkEnd")
s.d=s.a.S("Link")
s=u.k(0,"Other")
s.d=s.a.S("Other")
this.b=u}}
V.iq.prototype={
$1:function(a){P.mj(C.y,new V.ip(this.a))},
$S:12}
V.ip.prototype={
$0:function(){var u,t,s
u=C.e.ao(document.documentElement.scrollTop)
t=this.a.style
s=H.l(-0.01*u)+"px"
t.top=s},
$S:0}
V.ir.prototype={
$1:function(a){return H.h(a,"$ibB").a===this.a},
$S:52}
L.kO.prototype={
$0:function(){this.a.sab(0,F.ly(1,null,null,1))},
$S:0}
L.kP.prototype={
$0:function(){this.a.sab(0,F.lz(1,!0,!0,1,40,1))},
$S:0}
L.kQ.prototype={
$0:function(){this.a.sab(0,F.lz(1,!0,!1,1,40,0))},
$S:0}
L.kR.prototype={
$0:function(){this.a.sab(0,F.pw(6,null,1,6))},
$S:0}
L.kS.prototype={
$0:function(){this.a.sab(0,F.n3(30,1,15,0.5))},
$S:0}
L.kT.prototype={
$0:function(){this.a.sab(0,F.pn(120,1,2,12,0.3,3))},
$S:0}
L.kU.prototype={
$1:function(a){var u,t,s,r
H.h(a,"$iB")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.dN("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.dN("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:5};(function aliases(){var u=J.a.prototype
u.fm=u.i
u=J.dM.prototype
u.fo=u.i
u=P.i.prototype
u.fn=u.bN
u=W.T.prototype
u.bS=u.af
u=W.eY.prototype
u.fs=u.av
u=O.dV.prototype
u.fq=u.aQ
u=O.b6.prototype
u.bT=u.aQ
u=V.dT.prototype
u.fp=u.aJ
u.d1=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"p0","ou",11)
u(P,"p1","ov",11)
u(P,"p2","ow",11)
t(P,"mR","p_",3)
s(W,"pg",4,null,["$4"],["oy"],20,0)
s(W,"ph",4,null,["$4"],["oz"],20,0)
var m
r(m=E.an.prototype,"geI",0,0,null,["$1","$0"],["eJ","kI"],1,0)
r(m,"geK",0,0,null,["$1","$0"],["eL","kJ"],1,0)
r(m,"geG",0,0,null,["$1","$0"],["eH","kH"],1,0)
r(m,"geE",0,0,null,["$1","$0"],["eF","kE"],1,0)
q(m,"gkC","kD",10)
q(m,"gkF","kG",10)
r(m=E.ek.prototype,"gd2",0,0,null,["$1","$0"],["d4","d3"],1,0)
p(m,"gl_","eS",3)
o(m=X.er.prototype,"ghW","hX",14)
o(m,"ghJ","hK",14)
o(m,"ghQ","hR",4)
o(m,"gi_","i0",27)
o(m,"ghY","hZ",27)
o(m,"gi3","i4",4)
o(m,"gi7","i8",4)
o(m,"ghU","hV",4)
o(m,"gi5","i6",4)
o(m,"ghS","hT",4)
o(m,"gi9","ia",37)
o(m,"gib","ic",14)
o(m,"gir","is",13)
o(m,"gim","io",13)
o(m,"gip","iq",13)
r(m=D.dP.prototype,"gdw",0,0,null,["$1","$0"],["dz","i1"],1,0)
o(m,"gig","ih",39)
q(m,"ghD","hE",16)
q(m,"gik","il",16)
r(D.bN.prototype,"gc6",0,0,null,["$1","$0"],["a6","hL"],1,0)
n(V.a3.prototype,"gl","cH",32)
n(V.I.prototype,"gl","cH",32)
r(m=U.cz.prototype,"gbl",0,0,null,["$1","$0"],["a0","ar"],1,0)
q(m,"gfL","fM",30)
q(m,"gii","ij",30)
r(m=U.es.prototype,"gbl",0,0,null,["$1","$0"],["a0","ar"],1,0)
o(m,"ghw","hx",2)
o(m,"ghy","hz",2)
o(m,"ghA","hB",2)
o(m,"ghr","hs",2)
o(m,"ght","hu",2)
o(m,"gj2","j3",2)
o(m,"gj0","j1",2)
o(m,"giZ","j_",2)
r(m=M.dD.prototype,"gas",0,0,null,["$1","$0"],["aD","fN"],1,0)
q(m,"ghM","hN",10)
q(m,"ghO","hP",10)
r(m=O.dU.prototype,"gfP",0,0,null,["$1","$0"],["ad","fQ"],1,0)
r(m,"giF",0,0,null,["$1","$0"],["dD","iG"],1,0)
q(m,"ghF","hG",19)
q(m,"ghH","hI",19)
r(X.e2.prototype,"gd5",0,0,null,["$1","$0"],["aO","fT"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Q,null)
s(P.Q,[H.ld,J.a,J.av,P.eL,P.i,H.cC,P.b3,H.c0,H.cZ,H.fM,H.i9,H.iT,P.bD,H.cr,H.f2,P.af,H.hr,H.ht,H.hm,P.f8,P.bf,P.aJ,P.ev,P.iz,P.cN,P.iA,P.ba,P.am,P.kq,P.k3,P.cb,P.eK,P.y,P.kh,P.hz,P.bY,P.hh,P.ko,P.km,P.S,P.az,P.a5,P.b2,P.i0,P.eb,P.eD,P.hc,P.bE,P.b,P.E,P.L,P.ax,P.e,P.al,P.cc,P.j8,P.k6,W.fP,W.bQ,W.D,W.e0,W.eY,W.kc,W.dE,W.aB,W.k2,W.fg,P.k8,P.fd,P.jY,P.R,O.a6,O.cD,E.fG,E.an,E.ia,E.ek,Z.eu,Z.jx,Z.dt,Z.bF,Z.bd,D.fJ,D.c_,D.B,X.du,X.dN,X.ho,X.hw,X.aR,X.hP,X.iP,X.er,D.dz,D.a8,D.e3,D.ea,D.ei,D.ej,D.bN,V.a4,V.aM,V.h2,V.dW,V.ao,V.aa,V.a1,V.b8,V.e7,V.a3,V.I,U.es,M.dD,A.dq,A.fz,A.hG,A.cS,A.cW,A.cU,A.cX,A.cV,A.cY,A.bZ,A.en,A.j2,F.a9,F.h6,F.bn,F.hq,F.bJ,F.e9,F.ik,F.il,F.im,F.ah,F.jk,F.jl,F.jo,F.jq,F.jr,F.js,O.bM,O.dV,T.iJ,V.bh,V.aA,V.dT,V.i8,V.ij,V.cM,V.el,V.cQ,V.iN,X.dv,X.ef,X.e2,V.bB,V.i6,V.io])
s(J.a,[J.hl,J.dL,J.dM,J.aO,J.bG,J.bl,H.cF,H.bI,W.j,W.fx,W.bV,W.bX,W.b0,W.b1,W.W,W.ex,W.fU,W.fV,W.dA,W.ez,W.dC,W.eB,W.fX,W.p,W.eE,W.aN,W.dH,W.eG,W.bk,W.dR,W.hJ,W.eM,W.eN,W.aQ,W.eO,W.eR,W.aS,W.eV,W.e5,W.eX,W.aU,W.eZ,W.aV,W.f3,W.aG,W.f6,W.iM,W.aX,W.f9,W.iR,W.jd,W.fh,W.fj,W.fl,W.fn,W.fp,P.b5,P.eI,P.b7,P.eT,P.i5,P.f4,P.bb,P.fb,P.fA,P.ew,P.dr,P.dF,P.e4,P.c9,P.e8,P.eg,P.eo,P.f0])
s(J.dM,[J.i1,J.bP,J.bm])
t(J.lc,J.aO)
s(J.bG,[J.dK,J.dJ])
t(P.hv,P.eL)
s(P.hv,[H.ep,W.jE,W.ar,P.h8])
t(H.v,H.ep)
s(P.i,[H.h_,H.hA,H.d0])
s(H.h_,[H.c4,H.hs])
s(P.b3,[H.hB,H.jy])
t(H.hC,H.c4)
t(H.fN,H.fM)
s(P.bD,[H.hY,H.hn,H.j6,H.iV,H.fI,H.ih,P.e1,P.aL,P.j7,P.j4,P.ca,P.fL,P.fS])
s(H.cr,[H.l0,H.iF,H.kI,H.kJ,H.kK,P.jA,P.jz,P.jB,P.jC,P.kg,P.kf,P.jL,P.jP,P.jM,P.jN,P.jO,P.jS,P.jT,P.jR,P.jQ,P.iB,P.iC,P.ky,P.k0,P.k_,P.k1,P.hu,P.hy,P.kn,P.fY,P.fZ,P.jc,P.j9,P.ja,P.jb,P.ki,P.kj,P.kl,P.kk,P.ku,P.kt,P.kv,P.kw,W.h0,W.hL,W.hN,W.ig,W.iy,W.jK,W.hW,W.hV,W.k4,W.k5,W.ke,W.kp,P.ka,P.kA,P.h9,P.ha,P.fC,E.ib,E.ic,E.id,E.iL,D.h4,D.h5,F.kr,F.kB,F.kD,F.kE,F.kF,F.kY,F.kZ,F.l_,F.kM,F.kC,F.ju,F.jt,F.jm,F.jn,T.iK,V.kX,V.i7,V.iq,V.ip,V.ir,L.kO,L.kP,L.kQ,L.kR,L.kS,L.kT,L.kU])
s(H.iF,[H.iw,H.cp])
t(P.hx,P.af)
s(P.hx,[H.aP,W.jD])
t(H.dY,H.bI)
s(H.dY,[H.d4,H.d6])
t(H.d5,H.d4)
t(H.cG,H.d5)
t(H.d7,H.d6)
t(H.dZ,H.d7)
s(H.dZ,[H.hQ,H.hR,H.hS,H.hT,H.hU,H.e_,H.cH])
t(P.jZ,P.kq)
t(P.jX,P.k3)
t(P.fe,P.hz)
t(P.eq,P.fe)
s(P.bY,[P.fE,P.h1])
t(P.bC,P.iA)
s(P.bC,[P.fF,P.hg,P.jg,P.jf])
t(P.je,P.h1)
s(P.a5,[P.r,P.o])
s(P.aL,[P.c8,P.hi])
t(P.jG,P.cc)
s(W.j,[W.F,W.h7,W.aT,W.d8,W.aW,W.aH,W.da,W.jw,W.d1,P.fD,P.bU])
s(W.F,[W.T,W.bA,W.cu,W.d2])
s(W.T,[W.z,P.q])
s(W.z,[W.dn,W.fy,W.co,W.bz,W.bW,W.aE,W.hb,W.dG,W.cA,W.cB,W.dO,W.cE,W.ii,W.b9,W.ed,W.ee,W.iE,W.cO])
s(W.b0,[W.cs,W.fQ,W.fR])
t(W.fO,W.b1)
t(W.ct,W.ex)
t(W.eA,W.ez)
t(W.dB,W.eA)
t(W.eC,W.eB)
t(W.fW,W.eC)
t(W.aF,W.bV)
t(W.eF,W.eE)
t(W.cx,W.eF)
t(W.eH,W.eG)
t(W.c1,W.eH)
t(W.dI,W.cu)
t(W.bO,W.p)
s(W.bO,[W.b4,W.ag,W.aY])
t(W.hK,W.eM)
t(W.hM,W.eN)
t(W.eP,W.eO)
t(W.hO,W.eP)
t(W.eS,W.eR)
t(W.cI,W.eS)
t(W.eW,W.eV)
t(W.i3,W.eW)
t(W.ie,W.eX)
t(W.d9,W.d8)
t(W.it,W.d9)
t(W.f_,W.eZ)
t(W.iu,W.f_)
t(W.ix,W.f3)
t(W.f7,W.f6)
t(W.iG,W.f7)
t(W.db,W.da)
t(W.iH,W.db)
t(W.fa,W.f9)
t(W.iQ,W.fa)
t(W.jv,W.cE)
t(W.be,W.ag)
t(W.fi,W.fh)
t(W.jF,W.fi)
t(W.ey,W.dC)
t(W.fk,W.fj)
t(W.jU,W.fk)
t(W.fm,W.fl)
t(W.eQ,W.fm)
t(W.fo,W.fn)
t(W.k7,W.fo)
t(W.fq,W.fp)
t(W.kb,W.fq)
t(W.jH,W.jD)
t(W.jI,P.iz)
t(W.ln,W.jI)
t(W.jJ,P.cN)
t(W.kd,W.eY)
t(P.k9,P.k8)
t(P.ab,P.jY)
t(P.eJ,P.eI)
t(P.hp,P.eJ)
t(P.eU,P.eT)
t(P.hZ,P.eU)
t(P.cK,P.q)
t(P.f5,P.f4)
t(P.iD,P.f5)
t(P.fc,P.fb)
t(P.iS,P.fc)
t(P.fB,P.ew)
t(P.i_,P.bU)
t(P.f1,P.f0)
t(P.iv,P.f1)
s(E.fG,[Z.ds,A.cL,T.cP])
s(D.B,[D.c2,D.c3,D.O,X.i4])
s(X.i4,[X.dS,X.bH,X.em])
s(O.a6,[D.dP,U.cz])
s(D.fJ,[U.fK,U.ak])
t(U.dw,U.ak)
t(A.hD,A.cL)
s(A.en,[A.P,A.iZ,A.j_,A.j1,A.iX,A.a2,A.iY,A.N,A.j0,A.j3,A.cT,A.aC,A.ap,A.aq])
t(F.is,F.h6)
t(F.iW,F.hq)
t(F.jp,F.jq)
t(F.hX,F.jr)
t(O.dU,O.bM)
s(O.dV,[O.hE,O.hF,O.b6])
s(O.b6,[O.hH,O.hI])
t(T.eh,T.cP)
t(T.iI,T.eh)
s(V.dT,[V.aw,V.cR])
t(X.hd,X.ef)
s(V.bB,[V.fT,V.he,V.hf,V.i2])
u(H.ep,H.cZ)
u(H.d4,P.y)
u(H.d5,H.c0)
u(H.d6,P.y)
u(H.d7,H.c0)
u(P.eL,P.y)
u(P.fe,P.kh)
u(W.ex,W.fP)
u(W.ez,P.y)
u(W.eA,W.D)
u(W.eB,P.y)
u(W.eC,W.D)
u(W.eE,P.y)
u(W.eF,W.D)
u(W.eG,P.y)
u(W.eH,W.D)
u(W.eM,P.af)
u(W.eN,P.af)
u(W.eO,P.y)
u(W.eP,W.D)
u(W.eR,P.y)
u(W.eS,W.D)
u(W.eV,P.y)
u(W.eW,W.D)
u(W.eX,P.af)
u(W.d8,P.y)
u(W.d9,W.D)
u(W.eZ,P.y)
u(W.f_,W.D)
u(W.f3,P.af)
u(W.f6,P.y)
u(W.f7,W.D)
u(W.da,P.y)
u(W.db,W.D)
u(W.f9,P.y)
u(W.fa,W.D)
u(W.fh,P.y)
u(W.fi,W.D)
u(W.fj,P.y)
u(W.fk,W.D)
u(W.fl,P.y)
u(W.fm,W.D)
u(W.fn,P.y)
u(W.fo,W.D)
u(W.fp,P.y)
u(W.fq,W.D)
u(P.eI,P.y)
u(P.eJ,W.D)
u(P.eT,P.y)
u(P.eU,W.D)
u(P.f4,P.y)
u(P.f5,W.D)
u(P.fb,P.y)
u(P.fc,W.D)
u(P.ew,P.af)
u(P.f0,P.y)
u(P.f1,W.D)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bz.prototype
C.q=W.bW.prototype
C.D=W.bX.prototype
C.k=W.aE.prototype
C.U=W.dA.prototype
C.W=W.dG.prototype
C.X=W.dH.prototype
C.z=W.dI.prototype
C.Z=J.a.prototype
C.a=J.aO.prototype
C.a_=J.dJ.prototype
C.f=J.dK.prototype
C.r=J.dL.prototype
C.e=J.bG.prototype
C.c=J.bl.prototype
C.a6=J.bm.prototype
C.G=W.dO.prototype
C.ac=W.cI.prototype
C.M=J.i1.prototype
C.N=W.e5.prototype
C.b=P.c9.prototype
C.x=W.b9.prototype
C.o=W.ed.prototype
C.n=W.ee.prototype
C.C=J.bP.prototype
C.O=W.be.prototype
C.P=W.d1.prototype
C.R=new P.fF(!1)
C.Q=new P.fE(C.R)
C.S=new P.i0()
C.T=new P.jg()
C.l=new P.jZ()
C.d=new A.bZ(0,"ColorSourceType.None")
C.j=new A.bZ(1,"ColorSourceType.Solid")
C.h=new A.bZ(2,"ColorSourceType.Texture2D")
C.i=new A.bZ(3,"ColorSourceType.TextureCube")
C.y=new P.b2(0)
C.V=new P.b2(5e6)
C.Y=new P.hh("element",!0,!1,!1,!1)
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
C.E=function(hooks) { return hooks; }

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
C.F=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.H=H.d(u([127,2047,65535,1114111]),[P.o])
C.t=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.o])
C.a7=H.d(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.e])
C.u=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.o])
C.v=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.o])
C.a8=H.d(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.e])
C.I=H.d(u([]),[P.e])
C.a9=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.o])
C.J=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.o])
C.w=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.o])
C.K=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.o])
C.aa=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.o])
C.L=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.o])
C.A=H.d(u(["bind","if","ref","repeat","syntax"]),[P.e])
C.B=H.d(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.e])
C.ab=new H.fN(0,{},C.I,[P.e,P.e])
C.m=new P.je(!1)})();(function staticFields(){$.b_=0
$.cq=null
$.lR=null
$.lr=!1
$.mW=null
$.mP=null
$.n1=null
$.kG=null
$.kL=null
$.lB=null
$.ce=null
$.df=null
$.dg=null
$.ls=!1
$.a0=C.l
$.bj=null
$.l8=null
$.lY=null
$.lX=null
$.m5=null
$.m9=null
$.bL=null
$.me=null
$.mr=null
$.mu=null
$.mt=null
$.jh=null
$.ji=null
$.jj=null
$.ms=null
$.m8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pE","n5",function(){return H.mV("_$dart_dartClosure")})
u($,"pF","lG",function(){return H.mV("_$dart_js")})
u($,"pL","n6",function(){return H.bc(H.iU({
toString:function(){return"$receiver$"}}))})
u($,"pM","n7",function(){return H.bc(H.iU({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pN","n8",function(){return H.bc(H.iU(null))})
u($,"pO","n9",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pR","nc",function(){return H.bc(H.iU(void 0))})
u($,"pS","nd",function(){return H.bc(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pQ","nb",function(){return H.bc(H.ml(null))})
u($,"pP","na",function(){return H.bc(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pU","nf",function(){return H.bc(H.ml(void 0))})
u($,"pT","ne",function(){return H.bc(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qa","lH",function(){return P.ot()})
u($,"qg","dl",function(){return[]})
u($,"pX","ng",function(){return P.op()})
u($,"qb","nk",function(){return H.nZ(H.cd(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qe","nm",function(){return P.od("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qf","nn",function(){return P.oS()})
u($,"qc","nl",function(){return P.m_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"qd","lI",function(){return P.lf(P.e,P.bE)})
u($,"q3","nj",function(){return Z.aI(0)})
u($,"pY","nh",function(){return Z.aI(511)})
u($,"q5","bv",function(){return Z.aI(1)})
u($,"q4","bu",function(){return Z.aI(2)})
u($,"q_","bt",function(){return Z.aI(4)})
u($,"q6","bw",function(){return Z.aI(8)})
u($,"q7","bx",function(){return Z.aI(16)})
u($,"q0","dj",function(){return Z.aI(32)})
u($,"q1","dk",function(){return Z.aI(64)})
u($,"q2","ni",function(){return Z.aI(96)})
u($,"q8","cn",function(){return Z.aI(128)})
u($,"pZ","bs",function(){return Z.aI(256)})
u($,"pD","n4",function(){return new V.h2(1e-9)})
u($,"pC","M",function(){return $.n4()})})()
var v={mangledGlobalNames:{o:"int",r:"double",a5:"num",e:"String",S:"bool",L:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.L},{func:1,ret:-1,opt:[D.B]},{func:1,ret:-1,args:[D.B]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ag]},{func:1,ret:P.L,args:[D.B]},{func:1,ret:P.L,args:[F.a9]},{func:1,ret:P.L,args:[,,]},{func:1,ret:P.L,args:[F.ah,P.r,P.r]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.an]]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.L,args:[W.p]},{func:1,ret:-1,args:[W.aY]},{func:1,ret:-1,args:[W.p]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:-1,args:[P.o,[P.i,D.a8]]},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,V.ao]]},{func:1,ret:P.S,args:[W.T,P.e,P.e,W.bQ]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.S,args:[W.F]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.L,args:[,]},{func:1,ret:P.S,args:[W.aB]},{func:1,ret:P.S,args:[P.e]},{func:1,ret:-1,args:[W.b4]},{func:1,ret:P.L,args:[{func:1,ret:-1,args:[D.B]}]},{func:1,ret:V.a1,args:[P.r]},{func:1,ret:-1,args:[P.o,[P.i,U.ak]]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.r},{func:1,ret:W.T,args:[W.F]},{func:1,args:[W.p]},{func:1,ret:P.R,args:[,,]},{func:1,ret:P.R,args:[P.o]},{func:1,ret:-1,args:[W.be]},{func:1,ret:P.L,args:[P.e,,]},{func:1,ret:P.S,args:[[P.i,D.a8]]},{func:1,ret:P.L,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.E,P.e,P.e],args:[[P.E,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.F,W.F]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aJ,,],args:[,]},{func:1,ret:P.L,args:[,],opt:[P.ax]},{func:1,ret:P.L,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.L,args:[P.ba]},{func:1,ret:P.S,args:[V.bB]},{func:1,args:[,P.e]},{func:1,ret:P.L,args:[P.a5]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cF,DataView:H.bI,ArrayBufferView:H.bI,Float32Array:H.cG,Float64Array:H.cG,Int16Array:H.hQ,Int32Array:H.hR,Int8Array:H.hS,Uint16Array:H.hT,Uint32Array:H.hU,Uint8ClampedArray:H.e_,CanvasPixelArray:H.e_,Uint8Array:H.cH,HTMLBRElement:W.z,HTMLButtonElement:W.z,HTMLContentElement:W.z,HTMLDListElement:W.z,HTMLDataElement:W.z,HTMLDataListElement:W.z,HTMLDetailsElement:W.z,HTMLDialogElement:W.z,HTMLEmbedElement:W.z,HTMLFieldSetElement:W.z,HTMLHRElement:W.z,HTMLHeadingElement:W.z,HTMLHtmlElement:W.z,HTMLIFrameElement:W.z,HTMLLIElement:W.z,HTMLLegendElement:W.z,HTMLLinkElement:W.z,HTMLMapElement:W.z,HTMLMenuElement:W.z,HTMLMetaElement:W.z,HTMLMeterElement:W.z,HTMLModElement:W.z,HTMLOListElement:W.z,HTMLObjectElement:W.z,HTMLOptGroupElement:W.z,HTMLOptionElement:W.z,HTMLOutputElement:W.z,HTMLParagraphElement:W.z,HTMLParamElement:W.z,HTMLPictureElement:W.z,HTMLPreElement:W.z,HTMLProgressElement:W.z,HTMLQuoteElement:W.z,HTMLScriptElement:W.z,HTMLShadowElement:W.z,HTMLSlotElement:W.z,HTMLSourceElement:W.z,HTMLSpanElement:W.z,HTMLStyleElement:W.z,HTMLTableCaptionElement:W.z,HTMLTableColElement:W.z,HTMLTextAreaElement:W.z,HTMLTimeElement:W.z,HTMLTitleElement:W.z,HTMLTrackElement:W.z,HTMLUListElement:W.z,HTMLUnknownElement:W.z,HTMLDirectoryElement:W.z,HTMLFontElement:W.z,HTMLFrameElement:W.z,HTMLFrameSetElement:W.z,HTMLMarqueeElement:W.z,HTMLElement:W.z,AccessibleNodeList:W.fx,HTMLAnchorElement:W.dn,HTMLAreaElement:W.fy,HTMLBaseElement:W.co,Blob:W.bV,HTMLBodyElement:W.bz,HTMLCanvasElement:W.bW,CanvasRenderingContext2D:W.bX,CDATASection:W.bA,CharacterData:W.bA,Comment:W.bA,ProcessingInstruction:W.bA,Text:W.bA,CSSNumericValue:W.cs,CSSUnitValue:W.cs,CSSPerspective:W.fO,CSSCharsetRule:W.W,CSSConditionRule:W.W,CSSFontFaceRule:W.W,CSSGroupingRule:W.W,CSSImportRule:W.W,CSSKeyframeRule:W.W,MozCSSKeyframeRule:W.W,WebKitCSSKeyframeRule:W.W,CSSKeyframesRule:W.W,MozCSSKeyframesRule:W.W,WebKitCSSKeyframesRule:W.W,CSSMediaRule:W.W,CSSNamespaceRule:W.W,CSSPageRule:W.W,CSSRule:W.W,CSSStyleRule:W.W,CSSSupportsRule:W.W,CSSViewportRule:W.W,CSSStyleDeclaration:W.ct,MSStyleCSSProperties:W.ct,CSS2Properties:W.ct,CSSImageValue:W.b0,CSSKeywordValue:W.b0,CSSPositionValue:W.b0,CSSResourceValue:W.b0,CSSURLImageValue:W.b0,CSSStyleValue:W.b0,CSSMatrixComponent:W.b1,CSSRotation:W.b1,CSSScale:W.b1,CSSSkew:W.b1,CSSTranslation:W.b1,CSSTransformComponent:W.b1,CSSTransformValue:W.fQ,CSSUnparsedValue:W.fR,DataTransferItemList:W.fU,HTMLDivElement:W.aE,XMLDocument:W.cu,Document:W.cu,DOMException:W.fV,DOMImplementation:W.dA,ClientRectList:W.dB,DOMRectList:W.dB,DOMRectReadOnly:W.dC,DOMStringList:W.fW,DOMTokenList:W.fX,Element:W.T,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aF,FileList:W.cx,FileWriter:W.h7,HTMLFormElement:W.hb,Gamepad:W.aN,HTMLHeadElement:W.dG,History:W.dH,HTMLCollection:W.c1,HTMLFormControlsCollection:W.c1,HTMLOptionsCollection:W.c1,HTMLDocument:W.dI,ImageData:W.bk,HTMLImageElement:W.cA,HTMLInputElement:W.cB,KeyboardEvent:W.b4,HTMLLabelElement:W.dO,Location:W.dR,HTMLAudioElement:W.cE,HTMLMediaElement:W.cE,MediaList:W.hJ,MIDIInputMap:W.hK,MIDIOutputMap:W.hM,MimeType:W.aQ,MimeTypeArray:W.hO,PointerEvent:W.ag,MouseEvent:W.ag,DragEvent:W.ag,DocumentFragment:W.F,ShadowRoot:W.F,DocumentType:W.F,Node:W.F,NodeList:W.cI,RadioNodeList:W.cI,Plugin:W.aS,PluginArray:W.i3,Range:W.e5,RTCStatsReport:W.ie,HTMLSelectElement:W.ii,SourceBuffer:W.aT,SourceBufferList:W.it,SpeechGrammar:W.aU,SpeechGrammarList:W.iu,SpeechRecognitionResult:W.aV,Storage:W.ix,CSSStyleSheet:W.aG,StyleSheet:W.aG,HTMLTableCellElement:W.b9,HTMLTableDataCellElement:W.b9,HTMLTableHeaderCellElement:W.b9,HTMLTableElement:W.ed,HTMLTableRowElement:W.ee,HTMLTableSectionElement:W.iE,HTMLTemplateElement:W.cO,TextTrack:W.aW,TextTrackCue:W.aH,VTTCue:W.aH,TextTrackCueList:W.iG,TextTrackList:W.iH,TimeRanges:W.iM,Touch:W.aX,TouchEvent:W.aY,TouchList:W.iQ,TrackDefaultList:W.iR,CompositionEvent:W.bO,FocusEvent:W.bO,TextEvent:W.bO,UIEvent:W.bO,URL:W.jd,HTMLVideoElement:W.jv,VideoTrackList:W.jw,WheelEvent:W.be,Window:W.d1,DOMWindow:W.d1,Attr:W.d2,CSSRuleList:W.jF,ClientRect:W.ey,DOMRect:W.ey,GamepadList:W.jU,NamedNodeMap:W.eQ,MozNamedAttrMap:W.eQ,SpeechRecognitionResultList:W.k7,StyleSheetList:W.kb,SVGLength:P.b5,SVGLengthList:P.hp,SVGNumber:P.b7,SVGNumberList:P.hZ,SVGPointList:P.i5,SVGScriptElement:P.cK,SVGStringList:P.iD,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bb,SVGTransformList:P.iS,AudioBuffer:P.fA,AudioParamMap:P.fB,AudioTrackList:P.fD,AudioContext:P.bU,webkitAudioContext:P.bU,BaseAudioContext:P.bU,OfflineAudioContext:P.i_,WebGLBuffer:P.dr,WebGLFramebuffer:P.dF,WebGLProgram:P.e4,WebGL2RenderingContext:P.c9,WebGLShader:P.e8,WebGLTexture:P.eg,WebGLUniformLocation:P.eo,SQLResultSetRowList:P.iv})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dY.$nativeSuperclassTag="ArrayBufferView"
H.d4.$nativeSuperclassTag="ArrayBufferView"
H.d5.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.d6.$nativeSuperclassTag="ArrayBufferView"
H.d7.$nativeSuperclassTag="ArrayBufferView"
H.dZ.$nativeSuperclassTag="ArrayBufferView"
W.d8.$nativeSuperclassTag="EventTarget"
W.d9.$nativeSuperclassTag="EventTarget"
W.da.$nativeSuperclassTag="EventTarget"
W.db.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.mZ,[])
else L.mZ([])})})()
//# sourceMappingURL=test.dart.js.map
