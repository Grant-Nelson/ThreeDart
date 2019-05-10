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
a[c]=function(){a[c]=function(){H.pS(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lR"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lR(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ly:function ly(a){this.a=a},
kN:function(a){var u,t
u=a^48
if(u<=9)return u
t=a|32
if(97<=t&&t<=102)return t-87
return-1},
ht:function(){return new P.cc("No element")},
o9:function(){return new P.cc("Too many elements")},
o8:function(){return new P.cc("Too few elements")},
w:function w(a){this.a=a},
h8:function h8(){},
c5:function c5(){},
cF:function cF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
hK:function hK(a,b,c){this.a=a
this.b=b
this.$ti=c},
hL:function hL(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
hM:function hM(a,b,c){this.a=a
this.b=b
this.$ti=c},
d7:function d7(a,b,c){this.a=a
this.b=b
this.$ti=c},
jE:function jE(a,b,c){this.a=a
this.b=b
this.$ti=c},
c3:function c3(){},
d5:function d5(){},
ev:function ev(){},
o0:function(){throw H.c(P.I("Cannot modify unmodifiable Map"))},
co:function(a){var u,t
u=H.J(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
pA:function(a){return v.types[H.ae(a)]},
pH:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.X(a).$iL},
m:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.av(a)
if(typeof u!=="string")throw H.c(H.au(a))
return u},
ow:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.hu(u)
t=u[0]
s=u[1]
return new H.ij(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cO:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ot:function(a,b){var u,t,s,r,q,p
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.h(u,3)
t=H.J(u[3])
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.c.K(r,p)|32)>s)return}return parseInt(a,b)},
c8:function(a){return H.ok(a)+H.lO(H.bV(a),0,null)},
ok:function(a){var u,t,s,r,q,p,o,n,m
u=J.X(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.Z||!!u.$ibR){p=C.F(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.co(r.length>1&&C.c.K(r,0)===36?C.c.ax(r,1):r)},
ol:function(){if(!!self.location)return self.location.href
return},
mt:function(a){var u,t,s,r,q
H.kT(a)
u=J.aH(a)
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
ou:function(a){var u,t,s,r
u=H.d([],[P.o])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.c(H.au(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.f.b2(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.c(H.au(r))}return H.mt(u)},
mu:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.au(s))
if(s<0)throw H.c(H.au(s))
if(s>65535)return H.ou(a)}return H.mt(a)},
ov:function(a,b,c){var u,t,s,r
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
r=s<c?s:c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
c9:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.f.b2(u,10))>>>0,56320|u&1023)}}throw H.c(P.af(a,0,1114111,null,null))},
c7:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
os:function(a){var u=H.c7(a).getFullYear()+0
return u},
oq:function(a){var u=H.c7(a).getMonth()+1
return u},
om:function(a){var u=H.c7(a).getDate()+0
return u},
on:function(a){var u=H.c7(a).getHours()+0
return u},
op:function(a){var u=H.c7(a).getMinutes()+0
return u},
or:function(a){var u=H.c7(a).getSeconds()+0
return u},
oo:function(a){var u=H.c7(a).getMilliseconds()+0
return u},
G:function(a){throw H.c(H.au(a))},
h:function(a,b){if(a==null)J.aH(a)
throw H.c(H.cj(a,b))},
cj:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aP(!0,b,"index",null)
u=H.ae(J.aH(a))
if(!(b<0)){if(typeof u!=="number")return H.G(u)
t=b>=u}else t=!0
if(t)return P.a1(b,a,"index",null,u)
return P.eb(b,"index",null)},
pt:function(a,b,c){if(a>c)return new P.ca(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.ca(a,c,!0,b,"end","Invalid value")
return new P.aP(!0,b,"end",null)},
au:function(a){return new P.aP(!0,a,null,null)},
pp:function(a){if(typeof a!=="number")throw H.c(H.au(a))
return a},
c:function(a){var u
if(a==null)a=new P.e6()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.no})
u.name=""}else u.toString=H.no
return u},
no:function(){return J.av(this.dartException)},
t:function(a){throw H.c(a)},
D:function(a){throw H.c(P.bm(a))},
bg:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.e])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j1(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j2:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mE:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mn:function(a,b){return new H.i6(a,b==null?null:b.method)},
lz:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.hx(a,t,u?null:b.receiver)},
ak:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.ll(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.f.b2(s,16)&8191)===10)switch(r){case 438:return u.$1(H.lz(H.m(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.mn(H.m(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.ns()
p=$.nt()
o=$.nu()
n=$.nv()
m=$.ny()
l=$.nz()
k=$.nx()
$.nw()
j=$.nB()
i=$.nA()
h=q.ap(t)
if(h!=null)return u.$1(H.lz(H.J(t),h))
else{h=p.ap(t)
if(h!=null){h.method="call"
return u.$1(H.lz(H.J(t),h))}else{h=o.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=m.ap(t)
if(h==null){h=l.ap(t)
if(h==null){h=k.ap(t)
if(h==null){h=n.ap(t)
if(h==null){h=j.ap(t)
if(h==null){h=i.ap(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.mn(H.J(t),h))}}return u.$1(new H.jf(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.ei()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.aP(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.ei()
return a},
cm:function(a){var u
if(a==null)return new H.fb(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.fb(a)},
pw:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.n(0,a[t],a[s])}return b},
pG:function(a,b,c,d,e,f){H.f(a,"$ibI")
switch(H.ae(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.x("Unsupported number of arguments for wrapped closure"))},
ci:function(a,b){var u
H.ae(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pG)
a.$identity=u
return u},
o_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.X(d).$ib){u.$reflectionInfo=d
s=H.ow(u).r}else s=d
r=e?Object.create(new H.iG().constructor.prototype):Object.create(new H.cr(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.b2
if(typeof p!=="number")return p.p()
$.b2=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.mc(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.pA,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.ma:H.lq
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.c("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.mc(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
nX:function(a,b,c,d){var u=H.lq
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
mc:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nX(t,!r,u,b)
if(t===0){r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cs
if(q==null){q=H.fQ("self")
$.cs=q}return new Function(r+H.m(q)+";return "+p+"."+H.m(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.b2
if(typeof r!=="number")return r.p()
$.b2=r+1
o+=r
r="return function("+o+"){return this."
q=$.cs
if(q==null){q=H.fQ("self")
$.cs=q}return new Function(r+H.m(q)+"."+H.m(u)+"("+o+");}")()},
nY:function(a,b,c,d){var u,t
u=H.lq
t=H.ma
switch(b?-1:a){case 0:throw H.c(H.oA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nZ:function(a,b){var u,t,s,r,q,p,o,n
u=$.cs
if(u==null){u=H.fQ("self")
$.cs=u}t=$.m9
if(t==null){t=H.fQ("receiver")
$.m9=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.nY(r,!p,s,b)
if(r===1){u="return function(){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+");"
t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.m(u)+"."+H.m(s)+"(this."+H.m(t)+", "+n+");"
t=$.b2
if(typeof t!=="number")return t.p()
$.b2=t+1
return new Function(u+t+"}")()},
lR:function(a,b,c,d,e,f,g){return H.o_(a,b,H.ae(c),d,!!e,!!f,g)},
lq:function(a){return a.a},
ma:function(a){return a.c},
fQ:function(a){var u,t,s,r,q
u=new H.cr("self","target","receiver","name")
t=J.hu(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
J:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.c(H.b0(a,"String"))},
pu:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"double"))},
pM:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.c(H.b0(a,"num"))},
lP:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.c(H.b0(a,"bool"))},
ae:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.c(H.b0(a,"int"))},
nl:function(a,b){throw H.c(H.b0(a,H.co(H.J(b).substring(2))))},
pO:function(a,b){throw H.c(H.nW(a,H.co(H.J(b).substring(2))))},
f:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.X(a)[b])return a
H.nl(a,b)},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.X(a)[b]
else u=!0
if(u)return a
H.pO(a,b)},
kT:function(a){if(a==null)return a
if(!!J.X(a).$ib)return a
throw H.c(H.b0(a,"List<dynamic>"))},
ni:function(a,b){var u
if(a==null)return a
u=J.X(a)
if(!!u.$ib)return a
if(u[b])return a
H.nl(a,b)},
ne:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ae(u)]
else return a.$S()}return},
fA:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.ne(J.X(a))
if(u==null)return!1
return H.n0(u,null,b,null)},
n:function(a,b){var u,t
if(a==null)return a
if($.lL)return a
$.lL=!0
try{if(H.fA(a,b))return a
u=H.lg(b)
t=H.b0(a,u)
throw H.c(t)}finally{$.lL=!1}},
lT:function(a,b){if(a!=null&&!H.lQ(a,b))H.t(H.b0(a,H.lg(b)))
return a},
b0:function(a,b){return new H.j3("TypeError: "+P.hc(a)+": type '"+H.n5(a)+"' is not a subtype of type '"+b+"'")},
nW:function(a,b){return new H.fR("CastError: "+P.hc(a)+": type '"+H.n5(a)+"' is not a subtype of type '"+b+"'")},
n5:function(a){var u,t
u=J.X(a)
if(!!u.$icu){t=H.ne(u)
if(t!=null)return H.lg(t)
return"Closure"}return H.c8(a)},
pS:function(a){throw H.c(new P.h0(H.J(a)))},
oA:function(a){return new H.ir(a)},
nf:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
bV:function(a){if(a==null)return
return a.$ti},
qC:function(a,b,c){return H.cn(a["$a"+H.m(c)],H.bV(b))},
bU:function(a,b,c,d){var u
H.J(c)
H.ae(d)
u=H.cn(a["$a"+H.m(c)],H.bV(b))
return u==null?null:u[d]},
an:function(a,b,c){var u
H.J(b)
H.ae(c)
u=H.cn(a["$a"+H.m(b)],H.bV(a))
return u==null?null:u[c]},
u:function(a,b){var u
H.ae(b)
u=H.bV(a)
return u==null?null:u[b]},
lg:function(a){return H.bT(a,null)},
bT:function(a,b){var u,t
H.k(b,"$ib",[P.e],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.co(a[0].name)+H.lO(a,1,b)
if(typeof a=="function")return H.co(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ae(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.m(b[t])}if('func' in a)return H.pe(a,b)
if('futureOr' in a)return"FutureOr<"+H.bT("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
pe:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
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
o=C.c.p(o,b[m])
l=t[p]
if(l!=null&&l!==P.R)o+=" extends "+H.bT(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.bT(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.bT(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.bT(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.pv(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.J(u[g])
i=i+h+H.bT(d[c],b)+(" "+H.m(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
lO:function(a,b,c){var u,t,s,r,q,p
H.k(c,"$ib",[P.e],"$ab")
if(a==null)return""
u=new P.al("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bT(p,c)}return"<"+u.i(0)+">"},
cn:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dp:function(a,b,c,d){var u,t
H.J(b)
H.kT(c)
H.J(d)
if(a==null)return!1
u=H.bV(a)
t=J.X(a)
if(t[b]==null)return!1
return H.n8(H.cn(t[d],u),null,c,null)},
k:function(a,b,c,d){H.J(b)
H.kT(c)
H.J(d)
if(a==null)return a
if(H.dp(a,b,c,d))return a
throw H.c(H.b0(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.co(b.substring(2))+H.lO(c,0,null),v.mangledGlobalNames)))},
n8:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aO(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aO(a[t],b,c[t],d))return!1
return!0},
qA:function(a,b,c){return a.apply(b,H.cn(J.X(b)["$a"+H.m(c)],H.bV(b)))},
nh:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="R"||a.name==="M"||a===-1||a===-2||H.nh(u)}return!1},
lQ:function(a,b){var u,t
if(a==null)return b==null||b.name==="R"||b.name==="M"||b===-1||b===-2||H.nh(b)
if(b==null||b===-1||b.name==="R"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.lQ(a,"type" in b?b.type:null))return!0
if('func' in b)return H.fA(a,b)}u=J.X(a).constructor
t=H.bV(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.aO(u,null,b,null)},
C:function(a,b){if(a!=null&&!H.lQ(a,b))throw H.c(H.b0(a,H.lg(b)))
return a},
aO:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aO(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="M")return!0
if('func' in c)return H.n0(a,b,c,d)
if('func' in a)return c.name==="bI"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.aO("type" in a?a.type:null,b,s,d)
else if(H.aO(a,b,s,d))return!0
else{if(!('$i'+"cB" in t.prototype))return!1
r=t.prototype["$a"+"cB"]
q=H.cn(r,u?a.slice(1):null)
return H.aO(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.n8(H.cn(m,u),b,p,d)},
n0:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.aO(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aO(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aO(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aO(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pL(h,b,g,d)},
pL:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.aO(c[r],d,a[r],b))return!1}return!0},
qB:function(a,b,c){Object.defineProperty(a,H.J(b),{value:c,enumerable:false,writable:true,configurable:true})},
pJ:function(a){var u,t,s,r,q,p
u=H.J($.ng.$1(a))
t=$.kM[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.J($.n7.$2(a,u))
if(u!=null){t=$.kM[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.kR[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.lf(s)
$.kM[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.kR[u]=s
return s}if(q==="-"){p=H.lf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.nk(a,s)
if(q==="*")throw H.c(P.je(u))
if(v.leafTags[u]===true){p=H.lf(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.nk(a,s)},
nk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lf:function(a){return J.lV(a,!1,null,!!a.$iL)},
pK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lf(u)
else return J.lV(u,c,null,null)},
pE:function(){if(!0===$.lU)return
$.lU=!0
H.pF()},
pF:function(){var u,t,s,r,q,p,o,n
$.kM=Object.create(null)
$.kR=Object.create(null)
H.pD()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.nm.$1(q)
if(p!=null){o=H.pK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pD:function(){var u,t,s,r,q,p,o
u=C.a3()
u=H.ch(C.a0,H.ch(C.a5,H.ch(C.E,H.ch(C.E,H.ch(C.a4,H.ch(C.a1,H.ch(C.a2(C.F),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.ng=new H.kO(q)
$.n7=new H.kP(p)
$.nm=new H.kQ(o)},
ch:function(a,b){return a(b)||b},
ob:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.c(P.a8("Illegal RegExp pattern ("+String(r)+")",a,null))},
pR:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lX:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
fV:function fV(){},
fW:function fW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ij:function ij(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
j1:function j1(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i6:function i6(a,b){this.a=a
this.b=b},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a){this.a=a},
ll:function ll(a){this.a=a},
fb:function fb(a){this.a=a
this.b=null},
cu:function cu(){},
iP:function iP(){},
iG:function iG(){},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j3:function j3(a){this.a=a},
fR:function fR(a){this.a=a},
ir:function ir(a){this.a=a},
aS:function aS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hC:function hC(a,b){this.a=a
this.$ti=b},
hD:function hD(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kQ:function kQ(a){this.a=a},
hw:function hw(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
oj:function(a){return new Int8Array(a)},
bk:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.cj(b,a))},
pc:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pt(a,b,c))
return b},
cJ:function cJ(){},
bN:function bN(){},
e2:function e2(){},
cK:function cK(){},
e3:function e3(){},
hZ:function hZ(){},
i_:function i_(){},
i0:function i0(){},
i1:function i1(){},
i2:function i2(){},
e4:function e4(){},
cL:function cL(){},
db:function db(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
pv:function(a){return J.mi(a?Object.keys(a):[],null)},
pN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fC:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.lU==null){H.pE()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.c(P.je("Return interceptor for "+H.m(t(a,u))))}r=a.constructor
q=r==null?null:r[$.lZ()]
if(q!=null)return q
q=H.pJ(a)
if(q!=null)return q
if(typeof a=="function")return C.a6
t=Object.getPrototypeOf(a)
if(t==null)return C.M
if(t===Object.prototype)return C.M
if(typeof r=="function"){Object.defineProperty(r,$.lZ(),{value:C.C,enumerable:false,writable:true,configurable:true})
return C.C}return C.C},
oa:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.lp(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.af(a,0,4294967295,"length",null))
return J.mi(new Array(a),b)},
mi:function(a,b){return J.hu(H.d(a,[b]))},
hu:function(a){H.kT(a)
a.fixed$length=Array
return a},
X:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dP.prototype
return J.dO.prototype}if(typeof a=="string")return J.bp.prototype
if(a==null)return J.dQ.prototype
if(typeof a=="boolean")return J.hv.prototype
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fC(a)},
px:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fC(a)},
cl:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fC(a)},
fB:function(a){if(a==null)return a
if(a.constructor==Array)return J.aR.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fC(a)},
py:function(a){if(typeof a=="number")return J.bM.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
pz:function(a){if(typeof a=="number")return J.bM.prototype
if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
dq:function(a){if(typeof a=="string")return J.bp.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bR.prototype
return a},
ad:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bq.prototype
return a}if(a instanceof P.R)return a
return J.fC(a)},
nK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.px(a).p(a,b)},
a0:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.X(a).D(a,b)},
m1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.pz(a).A(a,b)},
nL:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.py(a).v(a,b)},
m2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.pH(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cl(a).j(a,b)},
lm:function(a,b,c){return J.fB(a).n(a,b,c)},
nM:function(a,b){return J.dq(a).K(a,b)},
fE:function(a,b){return J.ad(a).iS(a,b)},
ln:function(a,b,c){return J.ad(a).iW(a,b,c)},
nN:function(a,b,c,d){return J.ad(a).jQ(a,b,c,d)},
m3:function(a,b){return J.ad(a).G(a,b)},
nO:function(a,b){return J.dq(a).a5(a,b)},
fF:function(a,b){return J.fB(a).N(a,b)},
nP:function(a,b,c,d){return J.ad(a).kw(a,b,c,d)},
m4:function(a,b){return J.fB(a).P(a,b)},
nQ:function(a){return J.ad(a).gjY(a)},
m5:function(a){return J.ad(a).gcT(a)},
du:function(a){return J.X(a).gL(a)},
bB:function(a){return J.fB(a).gY(a)},
aH:function(a){return J.cl(a).gl(a)},
nR:function(a){return J.ad(a).glf(a)},
lo:function(a,b){return J.ad(a).b8(a,b)},
m6:function(a){return J.fB(a).l5(a)},
nS:function(a,b){return J.ad(a).l9(a,b)},
nT:function(a,b,c){return J.ad(a).fH(a,b,c)},
nU:function(a,b,c){return J.dq(a).B(a,b,c)},
nV:function(a){return J.dq(a).lm(a)},
av:function(a){return J.X(a).i(a)},
a:function a(){},
hv:function hv(){},
dQ:function dQ(){},
dR:function dR(){},
ia:function ia(){},
bR:function bR(){},
bq:function bq(){},
aR:function aR(a){this.$ti=a},
lx:function lx(a){this.$ti=a},
aw:function aw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bM:function bM(){},
dP:function dP(){},
dO:function dO(){},
bp:function bp(){}},P={
oP:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.pm()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.ci(new P.jG(u),1)).observe(t,{childList:true})
return new P.jF(u,t,s)}else if(self.setImmediate!=null)return P.pn()
return P.po()},
oQ:function(a){self.scheduleImmediate(H.ci(new P.jH(H.n(a,{func:1,ret:-1})),0))},
oR:function(a){self.setImmediate(H.ci(new P.jI(H.n(a,{func:1,ret:-1})),0))},
oS:function(a){P.lC(C.y,H.n(a,{func:1,ret:-1}))},
lC:function(a,b){var u
H.n(b,{func:1,ret:-1})
u=C.f.ac(a.a,1000)
return P.oY(u<0?0:u,b)},
mD:function(a,b){var u
H.n(b,{func:1,ret:-1,args:[P.be]})
u=C.f.ac(a.a,1000)
return P.oZ(u<0?0:u,b)},
oY:function(a,b){var u=new P.fh(!0)
u.ha(a,b)
return u},
oZ:function(a,b){var u=new P.fh(!1)
u.hb(a,b)
return u},
oT:function(a,b){var u,t,s
b.a=1
try{a.fl(new P.jS(b),new P.jT(b),null)}catch(s){u=H.ak(s)
t=H.cm(s)
P.pP(new P.jU(b,u,t))}},
mQ:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.f(a.c,"$iaN")
if(u>=4){t=b.cA()
b.a=a.a
b.c=a.c
P.da(b,t)}else{t=H.f(b.c,"$ibj")
b.a=2
b.c=a
a.ec(t)}},
da:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.f(t.c,"$iao")
t=t.b
p=q.a
o=q.b
t.toString
P.kD(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.da(u.a,b)}t=u.a
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
if(k){H.f(m,"$iao")
t=t.b
p=m.a
o=m.b
t.toString
P.kD(null,null,t,p,o)
return}j=$.a4
if(j!=l)$.a4=l
else j=null
t=b.c
if(t===8)new P.jY(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.jX(s,b,m).$0()}else if((t&2)!==0)new P.jW(u,s,b).$0()
if(j!=null)$.a4=j
t=s.b
if(!!J.X(t).$icB){if(t.a>=4){i=H.f(o.c,"$ibj")
o.c=null
b=o.bB(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.mQ(t,o)
return}}h=b.b
i=H.f(h.c,"$ibj")
h.c=null
b=h.bB(i)
t=s.a
p=s.b
if(!t){H.C(p,H.u(h,0))
h.a=4
h.c=p}else{H.f(p,"$iao")
h.a=8
h.c=p}u.a=h
t=h}},
ph:function(a,b){if(H.fA(a,{func:1,args:[P.R,P.aA]}))return H.n(a,{func:1,ret:null,args:[P.R,P.aA]})
if(H.fA(a,{func:1,args:[P.R]}))return H.n(a,{func:1,ret:null,args:[P.R]})
throw H.c(P.lp(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pg:function(){var u,t
for(;u=$.cg,u!=null;){$.dn=null
t=u.b
$.cg=t
if(t==null)$.dm=null
u.a.$0()}},
pl:function(){$.lM=!0
try{P.pg()}finally{$.dn=null
$.lM=!1
if($.cg!=null)$.m_().$1(P.n9())}},
n4:function(a){var u=new P.eE(H.n(a,{func:1,ret:-1}))
if($.cg==null){$.dm=u
$.cg=u
if(!$.lM)$.m_().$1(P.n9())}else{$.dm.b=u
$.dm=u}},
pk:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
u=$.cg
if(u==null){P.n4(a)
$.dn=$.dm
return}t=new P.eE(a)
s=$.dn
if(s==null){t.b=u
$.dn=t
$.cg=t}else{t.b=s.b
s.b=t
$.dn=t
if(t.b==null)$.dm=t}},
pP:function(a){var u,t
u={func:1,ret:-1}
H.n(a,u)
t=$.a4
if(C.l===t){P.kF(null,null,C.l,a)
return}t.toString
P.kF(null,null,t,H.n(t.cO(a),u))},
mC:function(a,b){var u,t
u={func:1,ret:-1}
H.n(b,u)
t=$.a4
if(t===C.l){t.toString
return P.lC(a,b)}return P.lC(a,H.n(t.cO(b),u))},
oG:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.be]}
H.n(b,u)
t=$.a4
if(t===C.l){t.toString
return P.mD(a,b)}s=t.es(b,P.be)
$.a4.toString
return P.mD(a,H.n(s,u))},
kD:function(a,b,c,d,e){var u={}
u.a=d
P.pk(new P.kE(u,e))},
n1:function(a,b,c,d,e){var u,t
H.n(d,{func:1,ret:e})
t=$.a4
if(t===c)return d.$0()
$.a4=c
u=t
try{t=d.$0()
return t}finally{$.a4=u}},
n2:function(a,b,c,d,e,f,g){var u,t
H.n(d,{func:1,ret:f,args:[g]})
H.C(e,g)
t=$.a4
if(t===c)return d.$1(e)
$.a4=c
u=t
try{t=d.$1(e)
return t}finally{$.a4=u}},
pi:function(a,b,c,d,e,f,g,h,i){var u,t
H.n(d,{func:1,ret:g,args:[h,i]})
H.C(e,h)
H.C(f,i)
t=$.a4
if(t===c)return d.$2(e,f)
$.a4=c
u=t
try{t=d.$2(e,f)
return t}finally{$.a4=u}},
kF:function(a,b,c,d){var u
H.n(d,{func:1,ret:-1})
u=C.l!==c
if(u)d=!(!u||!1)?c.cO(d):c.jZ(d,-1)
P.n4(d)},
jG:function jG(a){this.a=a},
jF:function jF(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
fh:function fh(a){this.a=a
this.b=null
this.c=0},
km:function km(a,b){this.a=a
this.b=b},
kl:function kl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aN:function aN(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
jR:function jR(a,b){this.a=a
this.b=b},
jV:function jV(a,b){this.a=a
this.b=b},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jU:function jU(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jZ:function jZ(a){this.a=a},
jX:function jX(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
eE:function eE(a){this.a=a
this.b=null},
iJ:function iJ(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
cS:function cS(){},
iK:function iK(){},
be:function be(){},
ao:function ao(a,b){this.a=a
this.b=b},
kw:function kw(){},
kE:function kE(a,b){this.a=a
this.b=b},
k4:function k4(){},
k6:function k6(a,b,c){this.a=a
this.b=b
this.c=c},
k5:function k5(a,b){this.a=a
this.b=b},
k7:function k7(a,b,c){this.a=a
this.b=b
this.c=c},
od:function(a,b,c,d,e){return new H.aS([d,e])},
lA:function(a,b){return new H.aS([a,b])},
of:function(a){return H.pw(a,new H.aS([null,null]))},
dV:function(a,b,c,d){return new P.k2([d])},
lI:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oX:function(a,b,c){var u=new P.eT(a,b,[c])
u.c=a.e
return u},
o7:function(a,b,c){var u,t
if(P.lN(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.e])
t=$.dt()
C.a.h(t,a)
try{P.pf(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.mA(b,H.ni(u,"$ii"),", ")+c
return t.charCodeAt(0)==0?t:t},
lw:function(a,b,c){var u,t,s
if(P.lN(a))return b+"..."+c
u=new P.al(b)
t=$.dt()
C.a.h(t,a)
try{s=u
s.a=P.mA(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lN:function(a){var u,t
for(u=0;t=$.dt(),u<t.length;++u)if(a===t[u])return!0
return!1},
pf:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.k(b,"$ib",[P.e],"$ab")
u=a.gY(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.F())return
r=H.m(u.gM(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.F()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gM(u);++s
if(!u.F()){if(s<=4){C.a.h(b,H.m(o))
return}q=H.m(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gM(u);++s
for(;u.F();o=n,n=m){m=u.gM(u);++s
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
oe:function(a,b,c){var u=P.od(null,null,null,b,c)
a.P(0,new P.hE(u,b,c))
return u},
mj:function(a,b){var u,t,s
u=P.dV(null,null,null,b)
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.D)(a),++s)u.h(0,H.C(a[s],b))
return u},
lB:function(a){var u,t
u={}
if(P.lN(a))return"{...}"
t=new P.al("")
try{C.a.h($.dt(),a)
t.a+="{"
u.a=!0
J.m4(a,new P.hI(u,t))
t.a+="}"}finally{u=$.dt()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
k2:function k2(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cd:function cd(a){this.a=a
this.c=this.b=null},
eT:function eT(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
hE:function hE(a,b,c){this.a=a
this.b=b
this.c=c},
hF:function hF(){},
z:function z(){},
hH:function hH(){},
hI:function hI(a,b){this.a=a
this.b=b},
ah:function ah(){},
kn:function kn(){},
hJ:function hJ(){},
ew:function ew(a,b){this.a=a
this.$ti=b},
k9:function k9(){},
eU:function eU(){},
fn:function fn(){},
oK:function(a,b,c,d){H.k(b,"$ib",[P.o],"$ab")
if(b instanceof Uint8Array)return P.oL(!1,b,c,d)
return},
oL:function(a,b,c,d){var u,t,s
u=$.nC()
if(u==null)return
t=0===c
if(t&&!0)return P.lF(u,b)
s=b.length
d=P.bu(c,d,s,null,null,null)
if(t&&d===s)return P.lF(u,b)
return P.lF(u,b.subarray(c,d))},
lF:function(a,b){if(P.oN(b))return
return P.oO(a,b)},
oO:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ak(t)}return},
oN:function(a){var u,t
u=a.length-2
for(t=0;t<u;++t)if(a[t]===237)if((a[t+1]&224)===160)return!0
return!1},
oM:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ak(t)}return},
pj:function(a,b,c){var u,t,s
H.k(a,"$ib",[P.o],"$ab")
for(u=J.cl(a),t=b;t<c;++t){s=u.j(a,t)
if(typeof s!=="number")return s.c6()
if((s&127)!==s)return t-b}return c-b},
m8:function(a,b,c,d,e,f){if(C.f.bu(f,4)!==0)throw H.c(P.a8("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.a8("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.a8("Invalid base64 padding, more than two '=' characters",a,b))},
fN:function fN(a){this.a=a},
fO:function fO(a){this.a=a},
c0:function c0(){},
bF:function bF(){},
ha:function ha(){},
hq:function hq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
hp:function hp(a){this.a=a},
jn:function jn(a){this.a=a},
jp:function jp(){},
ku:function ku(a){this.b=this.a=0
this.c=a},
jo:function jo(a){this.a=a},
ks:function ks(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
kt:function kt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function(a,b,c){var u
H.n(b,{func:1,ret:P.o,args:[P.e]})
u=H.ot(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.a8(a,null,null))},
o5:function(a){if(a instanceof H.cu)return a.i(0)
return"Instance of '"+H.c8(a)+"'"},
og:function(a,b,c,d){var u,t
H.C(b,d)
u=J.oa(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.n(u,t,b)
return H.k(u,"$ib",[d],"$ab")},
mk:function(a,b,c){var u,t,s
u=[c]
t=H.d([],u)
for(s=J.bB(a);s.F();)C.a.h(t,H.C(s.gM(s),c))
if(b)return t
return H.k(J.hu(t),"$ib",u,"$ab")},
ej:function(a,b,c){var u,t
u=P.o
H.k(a,"$ii",[u],"$ai")
if(typeof a==="object"&&a!==null&&a.constructor===Array){H.k(a,"$iaR",[u],"$aaR")
t=a.length
c=P.bu(b,c,t,null,null,null)
return H.mu(b>0||c<t?C.a.fM(a,b,c):a)}if(!!J.X(a).$icL)return H.ov(a,b,P.bu(b,c,a.length,null,null,null))
return P.oE(a,b,c)},
oE:function(a,b,c){var u,t,s,r
H.k(a,"$ii",[P.o],"$ai")
if(b<0)throw H.c(P.af(b,0,J.aH(a),null,null))
u=c==null
if(!u&&c<b)throw H.c(P.af(c,b,J.aH(a),null,null))
t=J.bB(a)
for(s=0;s<b;++s)if(!t.F())throw H.c(P.af(b,0,s,null,null))
r=[]
if(u)for(;t.F();)r.push(t.gM(t))
else for(s=b;s<c;++s){if(!t.F())throw H.c(P.af(c,b,s,null,null))
r.push(t.gM(t))}return H.mu(r)},
oy:function(a,b,c){return new H.hw(a,H.ob(a,!1,!0,!1))},
mA:function(a,b,c){var u=J.bB(b)
if(!u.F())return a
if(c.length===0){do a+=H.m(u.gM(u))
while(u.F())}else{a+=H.m(u.gM(u))
for(;u.F();)a=a+c+H.m(u.gM(u))}return a},
mG:function(){var u=H.ol()
if(u!=null)return P.oJ(u,0,null)
throw H.c(P.I("'Uri.base' is not supported"))},
fo:function(a,b,c,d){var u,t,s,r,q,p
H.k(a,"$ib",[P.o],"$ab")
if(c===C.m){u=$.nI().b
if(typeof b!=="string")H.t(H.au(b))
u=u.test(b)}else u=!1
if(u)return b
H.C(b,H.an(c,"c0",0))
t=c.gkv().cU(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.c9(q)
else r=d&&q===32?r+"+":r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
o1:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
o2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dE:function(a){if(a>=10)return""+a
return"0"+a},
me:function(a,b,c,d,e,f){return new P.b5(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
hc:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.av(a)
if(typeof a==="string")return JSON.stringify(a)
return P.o5(a)},
dw:function(a){return new P.aP(!1,null,null,a)},
lp:function(a,b,c){return new P.aP(!0,a,b,c)},
eb:function(a,b,c){return new P.ca(null,null,!0,a,b,"Value not in range")},
af:function(a,b,c,d,e){return new P.ca(b,c,!0,a,d,"Invalid value")},
bu:function(a,b,c,d,e,f){if(typeof a!=="number")return H.G(a)
if(0>a||a>c)throw H.c(P.af(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.c(P.af(b,a,c,"end",f))
return b}return c},
a1:function(a,b,c,d,e){var u=H.ae(e==null?J.aH(b):e)
return new P.hs(b,u,!0,a,c,"Index out of range")},
I:function(a){return new P.jg(a)},
je:function(a){return new P.jd(a)},
mz:function(a){return new P.cc(a)},
bm:function(a){return new P.fU(a)},
x:function(a){return new P.eM(a)},
a8:function(a,b,c){return new P.hl(a,b,c)},
oh:function(a,b,c,d){var u,t
H.n(b,{func:1,ret:d,args:[P.o]})
u=H.d([],[d])
C.a.sl(u,a)
for(t=0;t<a;++t)C.a.n(u,t,b.$1(t))
return u},
aC:function(a){H.pN(a)},
oJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
c=a.length
u=b+5
if(c>=u){t=((C.c.K(a,b+4)^58)*3|C.c.K(a,b)^100|C.c.K(a,b+1)^97|C.c.K(a,b+2)^116|C.c.K(a,b+3)^97)>>>0
if(t===0)return P.mF(b>0||c<c?C.c.B(a,b,c):a,5,null).gfq()
else if(t===32)return P.mF(C.c.B(a,u,c),0,null).gfq()}s=new Array(8)
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
if(P.n3(a,b,c,0,r)>=14)C.a.n(r,7,c)
q=r[1]
if(typeof q!=="number")return q.lu()
if(q>=b)if(P.n3(a,b,q,20,r)===20)r[7]=q
s=r[2]
if(typeof s!=="number")return s.p()
p=s+1
o=r[3]
n=r[4]
m=r[5]
l=r[6]
if(typeof l!=="number")return l.a0()
if(typeof m!=="number")return H.G(m)
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
t=2}a=h+C.c.B(a,n,c)
q-=b
u=t-b
m+=u
l+=u
c=a.length
b=0
p=7
o=7
n=7}else if(n===m)if(b===0&&!0){a=C.c.b6(a,n,m,"/");++m;++l;++c}else{a=C.c.B(a,b,n)+"/"+C.c.B(a,m,c)
q-=b
p-=b
o-=b
n-=b
u=1-b
m+=u
l+=u
c=a.length
b=0}j="file"}else if(C.c.al(a,"http",b)){if(s&&o+3===n&&C.c.al(a,"80",o+1))if(b===0&&!0){a=C.c.b6(a,o,n,"")
n-=3
m-=3
l-=3
c-=3}else{a=C.c.B(a,b,o)+C.c.B(a,n,c)
q-=b
p-=b
o-=b
u=3+b
n-=u
m-=u
l-=u
c=a.length
b=0}j="http"}else j=null
else if(q===u&&C.c.al(a,"https",b)){if(s&&o+4===n&&C.c.al(a,"443",o+1))if(b===0&&!0){a=C.c.b6(a,o,n,"")
n-=4
m-=4
l-=4
c-=3}else{a=C.c.B(a,b,o)+C.c.B(a,n,c)
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
if(k){if(b>0||c<a.length){a=C.c.B(a,b,c)
q-=b
p-=b
o-=b
n-=b
m-=b
l-=b}return new P.kc(a,q,p,o,n,m,l,j)}return P.p_(a,b,c,q,p,o,n,m,l,j)},
mI:function(a,b){var u=P.e
return C.a.kB(H.d(a.split("&"),[u]),P.lA(u,u),new P.jl(b),[P.F,P.e,P.e])},
oI:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=new P.ji(a)
t=new Uint8Array(4)
for(s=t.length,r=b,q=r,p=0;r<c;++r){o=C.c.a5(a,r)
if(o!==46){if((o^48)>9)u.$2("invalid character",r)}else{if(p===3)u.$2("IPv4 address should contain exactly 4 parts",r)
n=P.fD(C.c.B(a,q,r),null,null)
if(typeof n!=="number")return n.fE()
if(n>255)u.$2("each part must be in the range 0..255",q)
m=p+1
if(p>=s)return H.h(t,p)
t[p]=n
q=r+1
p=m}}if(p!==3)u.$2("IPv4 address should contain exactly 4 parts",c)
n=P.fD(C.c.B(a,q,c),null,null)
if(typeof n!=="number")return n.fE()
if(n>255)u.$2("each part must be in the range 0..255",q)
if(p>=s)return H.h(t,p)
t[p]=n
return t},
mH:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
if(c==null)c=a.length
u=new P.jj(a)
t=new P.jk(u,a)
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
else{k=P.oI(a,q,c)
C.a.h(s,(k[0]<<8|k[1])>>>0)
C.a.h(s,(k[2]<<8|k[3])>>>0)}if(p){if(s.length>7)u.$1("an address with a wildcard must have less than 7 parts")}else if(s.length!==8)u.$1("an address without a wildcard must contain exactly 8 parts")
j=new Uint8Array(16)
for(l=s.length,i=j.length,h=9-l,r=0,g=0;r<l;++r){f=s[r]
if(f===-1)for(e=0;e<h;++e){if(g<0||g>=i)return H.h(j,g)
j[g]=0
d=g+1
if(d>=i)return H.h(j,d)
j[d]=0
g+=2}else{d=C.f.b2(f,8)
if(g<0||g>=i)return H.h(j,g)
j[g]=d
d=g+1
if(d>=i)return H.h(j,d)
j[d]=f&255
g+=2}}return j},
p_:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o
if(j==null)if(d>b)j=P.p6(a,b,d)
else{if(d===b)P.dj(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.p7(a,u,e-1):""
s=P.p3(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.G(g)
q=r<g?P.p5(P.fD(C.c.B(a,r,g),new P.ko(a,f),null),j):null}else{t=""
s=null
q=null}p=P.p4(a,g,h,null,j,s!=null)
if(typeof h!=="number")return h.a0()
o=h<i?P.lJ(a,h+1,i,null):null
return new P.ce(j,t,s,q,p,o,i<c?P.p2(a,i+1,c):null)},
mU:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
dj:function(a,b,c){throw H.c(P.a8(c,a,b))},
p5:function(a,b){if(a!=null&&a===P.mU(b))return
return a},
p3:function(a,b,c,d){var u,t
if(b===c)return""
if(C.c.a5(a,b)===91){if(typeof c!=="number")return c.v()
u=c-1
if(C.c.a5(a,u)!==93)P.dj(a,b,"Missing end `]` to match `[` in host")
P.mH(a,b+1,u)
return C.c.B(a,b,c).toLowerCase()}if(typeof c!=="number")return H.G(c)
t=b
for(;t<c;++t)if(C.c.a5(a,t)===58){P.mH(a,b,c)
return"["+a+"]"}return P.p9(a,b,c)},
p9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.G(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.c.a5(a,u)
if(q===37){p=P.n_(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.al("")
n=C.c.B(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.c.B(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.h(C.K,o)
o=(C.K[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.al("")
if(t<u){s.a+=C.c.B(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.h(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o)P.dj(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.c.a5(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.al("")
n=C.c.B(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.mV(q)
u+=l
t=u}}}}if(s==null)return C.c.B(a,b,c)
if(t<c){n=C.c.B(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
p6:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mX(C.c.K(a,b)))P.dj(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.c.K(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))!==0}else r=!1
if(!r)P.dj(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.c.B(a,b,c)
return P.p0(t?a.toLowerCase():a)},
p0:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
p7:function(a,b,c){return P.dk(a,b,c,C.a9,!1)},
p4:function(a,b,c,d,e,f){var u,t,s,r
u=e==="file"
t=u||f
s=a==null
if(s&&!0)return u?"/":""
r=!s?P.dk(a,b,c,C.L,!0):C.r.lx(d,new P.kp(),P.e).m(0,"/")
if(r.length===0){if(u)return"/"}else if(t&&!C.c.ab(r,"/"))r="/"+r
return P.p8(r,e,f)},
p8:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.c.ab(a,"/"))return P.pa(a,!u||c)
return P.pb(a)},
lJ:function(a,b,c,d){var u,t
u={}
H.k(d,"$iF",[P.e,null],"$aF")
if(a!=null){if(d!=null)throw H.c(P.dw("Both query and queryParameters specified"))
return P.dk(a,b,c,C.u,!0)}if(d==null)return
t=new P.al("")
u.a=""
d.P(0,new P.kq(new P.kr(u,t)))
u=t.a
return u.charCodeAt(0)==0?u:u},
p2:function(a,b,c){return P.dk(a,b,c,C.u,!0)},
n_:function(a,b,c){var u,t,s,r,q,p
u=b+2
if(u>=a.length)return"%"
t=C.c.a5(a,b+1)
s=C.c.a5(a,u)
r=H.kN(t)
q=H.kN(s)
if(r<0||q<0)return"%"
p=r*16+q
if(p<127){u=C.f.b2(p,4)
if(u>=8)return H.h(C.w,u)
u=(C.w[u]&1<<(p&15))!==0}else u=!1
if(u)return H.c9(c&&65<=p&&90>=p?(p|32)>>>0:p)
if(t>=97||s>=97)return C.c.B(a,b,b+3).toUpperCase()
return},
mV:function(a){var u,t,s,r,q,p
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.o])
C.a.n(t,0,37)
C.a.n(t,1,C.c.K("0123456789ABCDEF",a>>>4))
C.a.n(t,2,C.c.K("0123456789ABCDEF",a&15))}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.o])
for(q=0;--r,r>=0;s=128){p=C.f.ja(a,6*r)&63|s
C.a.n(t,q,37)
C.a.n(t,q+1,C.c.K("0123456789ABCDEF",p>>>4))
C.a.n(t,q+2,C.c.K("0123456789ABCDEF",p&15))
q+=3}}return P.ej(t,0,null)},
dk:function(a,b,c,d,e){var u=P.mZ(a,b,c,H.k(d,"$ib",[P.o],"$ab"),e)
return u==null?C.c.B(a,b,c):u},
mZ:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m
H.k(d,"$ib",[P.o],"$ab")
u=!e
t=b
s=t
r=null
while(!0){if(typeof t!=="number")return t.a0()
if(typeof c!=="number")return H.G(c)
if(!(t<c))break
c$0:{q=C.c.a5(a,t)
if(q<127){p=q>>>4
if(p>=8)return H.h(d,p)
p=(d[p]&1<<(q&15))!==0}else p=!1
if(p)++t
else{if(q===37){o=P.n_(a,t,!1)
if(o==null){t+=3
break c$0}if("%"===o){o="%25"
n=1}else n=3}else{if(u)if(q<=93){p=q>>>4
if(p>=8)return H.h(C.t,p)
p=(C.t[p]&1<<(q&15))!==0}else p=!1
else p=!1
if(p){P.dj(a,t,"Invalid character")
o=null
n=null}else{if((q&64512)===55296){p=t+1
if(p<c){m=C.c.a5(a,p)
if((m&64512)===56320){q=65536|(q&1023)<<10|m&1023
n=2}else n=1}else n=1}else n=1
o=P.mV(q)}}if(r==null)r=new P.al("")
r.a+=C.c.B(a,s,t)
r.a+=H.m(o)
if(typeof n!=="number")return H.G(n)
t+=n
s=t}}}if(r==null)return
if(typeof s!=="number")return s.a0()
if(s<c)r.a+=C.c.B(a,s,c)
u=r.a
return u.charCodeAt(0)==0?u:u},
mY:function(a){if(C.c.ab(a,"."))return!0
return C.c.f5(a,"/.")!==-1},
pb:function(a){var u,t,s,r,q,p,o
if(!P.mY(a))return a
u=H.d([],[P.e])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.a0(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.h(u,-1)
u.pop()
if(u.length===0)C.a.h(u,"")}r=!0}else if("."===p)r=!0
else{C.a.h(u,p)
r=!1}}if(r)C.a.h(u,"")
return C.a.m(u,"/")},
pa:function(a,b){var u,t,s,r,q,p
if(!P.mY(a))return!b?P.mW(a):a
u=H.d([],[P.e])
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
C.a.n(u,0,P.mW(u[0]))}return C.a.m(u,"/")},
mW:function(a){var u,t,s,r
u=a.length
if(u>=2&&P.mX(J.nM(a,0)))for(t=1;t<u;++t){s=C.c.K(a,t)
if(s===58)return C.c.B(a,0,t)+"%3A"+C.c.ax(a,t+1)
if(s<=127){r=s>>>4
if(r>=8)return H.h(C.v,r)
r=(C.v[r]&1<<(s&15))===0}else r=!0
if(r)break}return a},
p1:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.c.K(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.dw("Invalid URL encoding"))}}return u},
lK:function(a,b,c,d,e){var u,t,s,r,q
t=b
while(!0){if(!(t<c)){u=!0
break}s=C.c.K(a,t)
if(s<=127)if(s!==37)r=s===43
else r=!0
else r=!0
if(r){u=!1
break}++t}if(u){if(C.m!==d)r=!1
else r=!0
if(r)return C.c.B(a,b,c)
else q=new H.w(C.c.B(a,b,c))}else{q=H.d([],[P.o])
for(r=a.length,t=b;t<c;++t){s=C.c.K(a,t)
if(s>127)throw H.c(P.dw("Illegal percent encoding in URI"))
if(s===37){if(t+3>r)throw H.c(P.dw("Truncated URI"))
C.a.h(q,P.p1(a,t+1))
t+=2}else if(s===43)C.a.h(q,32)
else C.a.h(q,s)}}H.k(q,"$ib",[P.o],"$ab")
return new P.jo(!1).cU(q)},
mX:function(a){var u=a|32
return 97<=u&&u<=122},
mF:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=H.d([b-1],[P.o])
for(t=a.length,s=b,r=-1,q=null;s<t;++s){q=C.c.K(a,s)
if(q===44||q===59)break
if(q===47){if(r<0){r=s
continue}throw H.c(P.a8("Invalid MIME type",a,s))}}if(r<0&&s>b)throw H.c(P.a8("Invalid MIME type",a,s))
for(;q!==44;){C.a.h(u,s);++s
for(p=-1;s<t;++s){q=C.c.K(a,s)
if(q===61){if(p<0)p=s}else if(q===59||q===44)break}if(p>=0)C.a.h(u,p)
else{o=C.a.gaD(u)
if(q!==44||s!==o+7||!C.c.al(a,"base64",o+1))throw H.c(P.a8("Expecting '='",a,s))
break}}C.a.h(u,s)
n=s+1
if((u.length&1)===1)a=C.Q.kP(0,a,n,t)
else{m=P.mZ(a,n,t,C.u,!0)
if(m!=null)a=C.c.b6(a,n,t,m)}return new P.jh(a,u,c)},
pd:function(){var u,t,s,r,q
u=P.oh(22,new P.kA(),!0,P.T)
t=new P.kz(u)
s=new P.kB()
r=new P.kC()
q=H.f(t.$2(0,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",14)
s.$3(q,":",34)
s.$3(q,"/",3)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(14,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,".",15)
s.$3(q,":",34)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(15,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,"%",225)
s.$3(q,":",34)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(1,225),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",1)
s.$3(q,":",34)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(2,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",139)
s.$3(q,"/",131)
s.$3(q,".",146)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(3,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",68)
s.$3(q,".",18)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(4,229),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"[",232)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(5,229),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",5)
r.$3(q,"AZ",229)
s.$3(q,":",102)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(6,231),"$iT")
r.$3(q,"19",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(7,231),"$iT")
r.$3(q,"09",7)
s.$3(q,"@",68)
s.$3(q,"/",138)
s.$3(q,"?",172)
s.$3(q,"#",205)
s.$3(H.f(t.$2(8,8),"$iT"),"]",5)
q=H.f(t.$2(9,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",16)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(16,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",17)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(17,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",9)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(10,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",18)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(18,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,".",19)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(19,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",234)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(11,235),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",11)
s.$3(q,"/",10)
s.$3(q,"?",172)
s.$3(q,"#",205)
q=H.f(t.$2(12,236),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",12)
s.$3(q,"?",12)
s.$3(q,"#",205)
q=H.f(t.$2(13,237),"$iT")
s.$3(q,"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",13)
s.$3(q,"?",13)
r.$3(H.f(t.$2(20,245),"$iT"),"az",21)
q=H.f(t.$2(21,245),"$iT")
r.$3(q,"az",21)
r.$3(q,"09",21)
s.$3(q,"+-.",21)
return u},
n3:function(a,b,c,d,e){var u,t,s,r,q
H.k(e,"$ib",[P.o],"$ab")
u=$.nJ()
for(t=b;t<c;++t){if(d<0||d>=u.length)return H.h(u,d)
s=u[d]
r=C.c.K(a,t)^96
if(r>95)r=31
if(r>=s.length)return H.h(s,r)
q=s[r]
d=q&31
C.a.n(e,q>>>5,t)}return d},
S:function S(){},
aq:function aq(a,b){this.a=a
this.b=b},
r:function r(){},
b5:function b5(a){this.a=a},
h6:function h6(){},
h7:function h7(){},
bH:function bH(){},
e6:function e6(){},
aP:function aP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ca:function ca(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hs:function hs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
jg:function jg(a){this.a=a},
jd:function jd(a){this.a=a},
cc:function cc(a){this.a=a},
fU:function fU(a){this.a=a},
i9:function i9(){},
ei:function ei(){},
h0:function h0(a){this.a=a},
eM:function eM(a){this.a=a},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(){},
o:function o(){},
i:function i(){},
b6:function b6(){},
b:function b(){},
F:function F(){},
M:function M(){},
a7:function a7(){},
R:function R(){},
aA:function aA(){},
e:function e(){},
al:function al(a){this.a=a},
jl:function jl(a){this.a=a},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a,b){this.a=a
this.b=b},
ce:function ce(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.ch=_.Q=_.z=_.y=_.x=null},
ko:function ko(a,b){this.a=a
this.b=b},
kp:function kp(){},
kr:function kr(a,b){this.a=a
this.b=b},
kq:function kq(a){this.a=a},
jh:function jh(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function kA(){},
kz:function kz(a){this.a=a},
kB:function kB(){},
kC:function kC(){},
kc:function kc(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jM:function jM(a,b,c,d,e,f,g,h){var _=this
_.cx=a
_.a=b
_.b=c
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.ch=_.Q=_.z=_.y=_.x=null},
ps:function(a){var u,t
u=J.X(a)
if(!!u.$ibo){t=u.gez(a)
if(t.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){t.constructor=CanvasPixelArray
t.BYTES_PER_ELEMENT=1}return a}return new P.fm(a.data,a.height,a.width)},
pr:function(a){if(a instanceof P.fm)return{data:a.a,height:a.b,width:a.c}
return a},
bv:function(a){var u,t,s,r,q
if(a==null)return
u=P.lA(P.e,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r){q=H.J(t[r])
u.n(0,q,a[q])}return u},
pq:function(a,b){var u={}
a.P(0,new P.kG(u))
return u},
ke:function ke(){},
kg:function kg(a,b){this.a=a
this.b=b},
fm:function fm(a,b,c){this.a=a
this.b=b
this.c=c},
kG:function kG(a){this.a=a},
kf:function kf(a,b){this.a=a
this.b=b},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
hj:function hj(){},
k1:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k3:function k3(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b8:function b8(){},
hz:function hz(){},
bc:function bc(){},
i7:function i7(){},
ie:function ie(){},
cP:function cP(){},
iN:function iN(){},
q:function q(){},
bf:function bf(){},
j0:function j0(){},
eR:function eR(){},
eS:function eS(){},
f1:function f1(){},
f2:function f2(){},
fd:function fd(){},
fe:function fe(){},
fk:function fk(){},
fl:function fl(){},
T:function T(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
bW:function bW(){},
i8:function i8(){},
eF:function eF(){},
dy:function dy(){},
dK:function dK(){},
e9:function e9(){},
cb:function cb(){},
ed:function ed(){},
em:function em(){},
eu:function eu(){},
iF:function iF(){},
f9:function f9(){},
fa:function fa(){}},W={
m7:function(a){var u=document.createElement("a")
return u},
lr:function(a,b){var u=document.createElement("canvas")
return u},
o3:function(a,b,c){var u,t
u=document.body
t=(u&&C.p).ao(u,a,b,c)
t.toString
u=W.H
u=new H.d7(new W.at(t),H.n(new W.h9(),{func:1,ret:P.S,args:[u]}),[u])
return H.f(u.gaV(u),"$iV")},
o4:function(a){H.f(a,"$ij")
return"wheel"},
cy:function(a){var u,t,s
u="element tag unavailable"
try{t=J.nR(a)
if(typeof t==="string")u=a.tagName}catch(s){H.ak(s)}return u},
o6:function(a){var u,t,s
t=document.createElement("input")
u=H.f(t,"$icE")
try{u.type=a}catch(s){H.ak(s)}return u},
k0:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mS:function(a,b,c,d){var u,t
u=W.k0(W.k0(W.k0(W.k0(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
ac:function(a,b,c,d,e){var u=W.n6(new W.jQ(c),W.p)
if(u!=null&&!0)J.nN(a,b,u,!1)
return new W.jP(a,b,u,!1,[e])},
mR:function(a){var u,t
u=W.m7(null)
t=window.location
u=new W.bS(new W.k8(u,t))
u.h_(a)
return u},
oU:function(a,b,c,d){H.f(a,"$iV")
H.J(b)
H.J(c)
H.f(d,"$ibS")
return!0},
oV:function(a,b,c,d){var u,t,s
H.f(a,"$iV")
H.J(b)
H.J(c)
u=H.f(d,"$ibS").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
mT:function(){var u,t,s,r,q
u=P.e
t=P.mj(C.A,u)
s=H.u(C.A,0)
r=H.n(new W.kk(),{func:1,ret:u,args:[s]})
q=H.d(["TEMPLATE"],[u])
t=new W.kj(t,P.dV(null,null,null,u),P.dV(null,null,null,u),P.dV(null,null,null,u),null)
t.h9(null,new H.hM(C.A,r,[s,u]),q,null)
return t},
n6:function(a,b){var u
H.n(a,{func:1,ret:-1,args:[b]})
u=$.a4
if(u===C.l)return a
return u.es(a,b)},
B:function B(){},
fG:function fG(){},
dv:function dv(){},
fH:function fH(){},
cq:function cq(){},
bX:function bX(){},
bC:function bC(){},
bZ:function bZ(){},
c_:function c_(){},
bD:function bD(){},
cv:function cv(){},
fX:function fX(){},
Y:function Y(){},
cw:function cw(){},
fY:function fY(){},
b3:function b3(){},
b4:function b4(){},
fZ:function fZ(){},
h_:function h_(){},
h2:function h2(){},
aI:function aI(){},
cx:function cx(){},
h3:function h3(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
h4:function h4(){},
h5:function h5(){},
jK:function jK(a,b){this.a=a
this.b=b},
V:function V(){},
h9:function h9(){},
p:function p(){},
j:function j(){},
aJ:function aJ(){},
cA:function cA(){},
hg:function hg(){},
hk:function hk(){},
aQ:function aQ(){},
dL:function dL(){},
dM:function dM(){},
c4:function c4(){},
dN:function dN(){},
bo:function bo(){},
cD:function cD(){},
cE:function cE(){},
b7:function b7(){},
dT:function dT(){},
dW:function dW(){},
cH:function cH(){},
hS:function hS(){},
hT:function hT(){},
hU:function hU(a){this.a=a},
hV:function hV(){},
hW:function hW(a){this.a=a},
aT:function aT(){},
hX:function hX(){},
ai:function ai(){},
at:function at(a){this.a=a},
H:function H(){},
cM:function cM(){},
aU:function aU(){},
ic:function ic(){},
ea:function ea(){},
ip:function ip(){},
iq:function iq(a){this.a=a},
is:function is(){},
aV:function aV(){},
iD:function iD(){},
aW:function aW(){},
iE:function iE(){},
aX:function aX(){},
iH:function iH(){},
iI:function iI(a){this.a=a},
aK:function aK(){},
bd:function bd(){},
ek:function ek(){},
el:function el(){},
iO:function iO(){},
cU:function cU(){},
aY:function aY(){},
aL:function aL(){},
iQ:function iQ(){},
iR:function iR(){},
iV:function iV(){},
aZ:function aZ(){},
b_:function b_(){},
iZ:function iZ(){},
j_:function j_(){},
bQ:function bQ(){},
jm:function jm(){},
jC:function jC(){},
jD:function jD(){},
bi:function bi(){},
d8:function d8(){},
d9:function d9(){},
jL:function jL(){},
eH:function eH(){},
k_:function k_(){},
eZ:function eZ(){},
kd:function kd(){},
kh:function kh(){},
jJ:function jJ(){},
jN:function jN(a){this.a=a},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
lH:function lH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jP:function jP(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
jQ:function jQ(a){this.a=a},
bS:function bS(a){this.a=a},
E:function E(){},
e5:function e5(a){this.a=a},
i4:function i4(a){this.a=a},
i3:function i3(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(){},
ka:function ka(){},
kb:function kb(){},
kj:function kj(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
kk:function kk(){},
ki:function ki(){},
dJ:function dJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
aF:function aF(){},
k8:function k8(a,b){this.a=a
this.b=b},
fp:function fp(a){this.a=a},
kv:function kv(a){this.a=a},
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
df:function df(){},
dg:function dg(){},
f7:function f7(){},
f8:function f8(){},
fc:function fc(){},
ff:function ff(){},
fg:function fg(){},
dh:function dh(){},
di:function di(){},
fi:function fi(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(){},
fs:function fs(){},
ft:function ft(){},
fu:function fu(){},
fv:function fv(){},
fw:function fw(){},
fx:function fx(){},
fy:function fy(){},
fz:function fz(){}},O={
ls:function(a){var u=new O.a5([a])
u.by(a)
return u},
a5:function a5(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cG:function cG(){this.b=this.a=null},
dZ:function dZ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
e0:function e0(){},
hO:function hO(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
b9:function b9(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hQ:function hQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hR:function hR(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ef:function ef(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bP:function bP(){}},E={
mh:function(a,b,c,d,e,f){var u=new E.ar()
u.a=d
u.b=!0
u.sfZ(0,O.ls(E.ar))
u.y.b9(u.gkQ(),u.gkT())
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
u.sae(0,e)
return u},
oz:function(a,b){var u=new E.ik(a,b)
u.fV(a,b)
return u},
oF:function(a,b,c,d,e){var u,t,s,r
u=J.X(a)
if(!!u.$ibZ)return E.mB(a,!0,!0,!0,!1)
t=W.lr(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gcT(a).h(0,t)
r=E.mB(t,!0,!0,!0,!1)
r.a=a
return r},
mB:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.eq()
t=H.f(C.q.dv(a,"webgl2",P.of(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$icb")
if(t==null)H.t(P.x("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.oz(t,a)
s=new T.iS(t)
s.b=H.ae((t&&C.b).dz(t,3379))
s.c=H.ae(C.b.dz(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.ex(a)
r=new X.hy()
r.c=new X.aE(!1,!1,!1)
r.siO(P.dV(null,null,null,P.o))
s.b=r
r=new X.hY(s)
r.f=0
r.r=V.bt()
r.x=V.bt()
r.Q=1
r.ch=1
s.c=r
r=new X.hG(s)
r.r=0
r.x=V.bt()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.iY(s)
r.e=0
r.f=V.bt()
r.r=V.bt()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.shv(H.d([],[[P.cS,P.R]]))
r=s.z
q=document
p=W.ai
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.ac(q,"contextmenu",H.n(s.gi6(),o),!1,p))
r=s.z
n=W.p
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.ac(a,"focus",H.n(s.gic(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.ac(a,"blur",H.n(s.gi0(),m),!1,n))
r=s.z
l=W.b7
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.ac(q,"keyup",H.n(s.gii(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.ac(q,"keydown",H.n(s.gig(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousedown",H.n(s.gim(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mouseup",H.n(s.gir(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.ac(a,"mousemove",H.n(s.gip(),o),!1,p))
l=s.z
k=W.bi;(l&&C.a).h(l,W.ac(a,H.J(W.o4(a)),H.n(s.git(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.ac(q,"mousemove",H.n(s.gi8(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.ac(q,"mouseup",H.n(s.gia(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.ac(q,"pointerlockchange",H.n(s.giv(),m),!1,n))
n=s.z
m=W.b_
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.ac(a,"touchstart",H.n(s.giL(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchend",H.n(s.giH(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.ac(a,"touchmove",H.n(s.giJ(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.aq(Date.now(),!1)
u.cy=0
u.ee()
return u},
fP:function fP(){},
ar:function ar(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
il:function il(a){this.a=a},
im:function im(a){this.a=a},
io:function io(a){this.a=a},
eq:function eq(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iU:function iU(a){this.a=a}},Z={
lG:function(a,b,c){var u
H.k(c,"$ib",[P.o],"$ab")
u=a.createBuffer()
C.b.aB(a,b,u)
C.b.ev(a,b,new Int16Array(H.cf(c)),35044)
C.b.aB(a,b,null)
return new Z.eC(b,u)},
aM:function(a){return new Z.bh(a)},
eC:function eC(a,b){this.a=a
this.b=b},
dz:function dz(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
eD:function eD(a){this.a=a},
ct:function ct(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.c=c},
bh:function bh(a){this.a=a}},D={
P:function(){var u=new D.c2()
u.sam(null)
u.sb0(null)
u.c=null
u.d=0
return u},
fS:function fS(){},
c2:function c2(){var _=this
_.d=_.c=_.b=_.a=null},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
A:function A(a){this.a=a
this.b=null},
bK:function bK(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bL:function bL(a,b,c,d){var _=this
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
bG:function bG(){var _=this
_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dU:function dU(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
e8:function e8(){},
eh:function eh(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
nj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
u=V.oB("Test 014",!0)
t=W.lr(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.k.G(u.a,t)
s=[P.e]
u.en(H.d(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],s))
u.jP(H.d(["controls","shapes"],s))
u.en(H.d(["\xab[Back to Tests|../]"],s))
r=C.z.dw(document,"testCanvas")
if(r==null)H.t(P.x("Failed to find an element with the identifier, testCanvas."))
q=E.oF(r,!0,!0,!0,!1)
p=X.lv(!0,!0,!1,null,2000,null,0)
p.sex(0,!1)
o=E.mh(null,!0,null,"",null,null)
o.sae(0,F.np(30,1,15,0.5))
s=q.f
n=s.a
m=n.createTexture()
C.b.aL(n,34067,m)
C.b.c2(n,34067,10242,10497)
C.b.c2(n,34067,10243,10497)
C.b.c2(n,34067,10241,9729)
C.b.c2(n,34067,10240,9729)
C.b.aL(n,34067,null)
l=new T.cW()
l.a=0
l.b=m
l.c=!1
l.d=0
s.aZ(l,m,"../resources/maskonaive/posx.jpg",34069,!1,!1)
s.aZ(l,m,"../resources/maskonaive/negx.jpg",34070,!1,!1)
s.aZ(l,m,"../resources/maskonaive/posy.jpg",34071,!1,!1)
s.aZ(l,m,"../resources/maskonaive/negy.jpg",34072,!1,!1)
s.aZ(l,m,"../resources/maskonaive/posz.jpg",34073,!1,!1)
s.aZ(l,m,"../resources/maskonaive/negz.jpg",34074,!1,!1)
k=new O.dZ()
k.shj(O.ls(V.ax))
k.e.b9(k.ghX(),k.ghZ())
s=new O.b9(k,"emission")
s.c=C.d
s.f=new V.v(0,0,0)
k.f=s
s=new O.b9(k,"ambient")
s.c=C.d
s.f=new V.v(0,0,0)
k.r=s
s=new O.b9(k,"diffuse")
s.c=C.d
s.f=new V.v(0,0,0)
k.x=s
s=new O.b9(k,"invDiffuse")
s.c=C.d
s.f=new V.v(0,0,0)
k.y=s
s=new O.hR(k,"specular")
s.c=C.d
s.f=new V.v(0,0,0)
s.ch=100
k.z=s
s=new O.hO(k,"bump")
s.c=C.d
k.Q=s
k.ch=null
s=new O.b9(k,"reflect")
s.c=C.d
s.f=new V.v(0,0,0)
k.cx=s
s=new O.hQ(k,"refract")
s.c=C.d
s.f=new V.v(0,0,0)
s.ch=1
k.cy=s
s=new O.hN(k,"alpha")
s.c=C.d
s.f=1
k.db=s
s=new D.dU()
s.by(D.a9)
s.shs(H.d([],[D.bG]))
s.siN(H.d([],[D.e8]))
s.sjb(H.d([],[D.eh]))
s.sjo(H.d([],[D.en]))
s.sjp(H.d([],[D.eo]))
s.sjq(H.d([],[D.ep]))
s.Q=null
s.ch=null
s.dB(s.ghV(),s.gix(),s.giB())
k.dx=s
n=s.Q
if(n==null){n=D.P()
s.Q=n
s=n}else s=n
s.h(0,k.giZ())
s=k.dx
n=s.ch
if(n==null){n=D.P()
s.ch=n
s=n}else s=n
n=k.gcu()
s.h(0,n)
k.dy=null
s=k.dx
j=V.mO()
i=U.md(V.ml(V.ms(),j,new V.K(-1,-1,-1)))
h=new V.v(1,1,1)
g=new D.bG()
g.c=new V.v(1,1,1)
g.a=V.mP()
f=g.b
g.b=i
i.gu().h(0,g.gh1())
i=new D.O("mover",f,g.b,g,[U.aj])
i.b=!0
g.aG(i)
if(!g.c.D(0,h)){f=g.c
g.c=h
i=new D.O("color",f,h,g,[V.v])
i.b=!0
g.aG(i)}s.h(0,g)
s=k.r
s.st(0,new V.v(0.1,0.1,0.1))
s=k.x
s.st(0,new V.v(0.1,0.1,0.1))
s=k.z
s.st(0,new V.v(1,1,1))
s=k.z
if(s.c===C.d){s.c=C.j
s.bw()
s.bD(100)
i=s.a
i.a=null
i.a2(null)}s.bD(10)
s=k.ch
if(s!==l){if(s!=null)s.gu().O(0,n)
f=k.ch
k.ch=l
l.gu().h(0,n)
s=new D.O("environment",f,k.ch,k,[T.cW])
s.b=!0
k.a2(s)}k.cy.saN(0.6)
s=k.cy
s.st(0,new V.v(0.2,0.3,1))
s=k.cx
s.st(0,new V.v(0.6,0.6,0.6))
e=new U.cC()
e.by(U.aj)
e.b9(e.ghT(),e.giz())
e.e=null
e.f=V.c6()
e.r=0
s=q.r
n=new U.ez()
i=U.lt()
i.sdu(0,!0)
i.sdc(6.283185307179586)
i.sde(0)
i.sa7(0,0)
i.sdd(100)
i.sZ(0)
i.scW(0.5)
n.b=i
g=n.gaX()
i.gu().h(0,g)
i=U.lt()
i.sdu(0,!0)
i.sdc(6.283185307179586)
i.sde(0)
i.sa7(0,0)
i.sdd(100)
i.sZ(0)
i.scW(0.5)
n.c=i
i.gu().h(0,g)
n.d=null
n.e=!1
n.f=!1
n.r=!1
n.x=2.5
n.y=2.5
n.z=2
n.Q=4
n.cx=!1
n.ch=!1
n.cy=0
n.db=0
n.dx=null
n.dy=0
n.fr=null
n.fx=null
d=new X.aE(!1,!1,!1)
f=n.d
n.d=d
i=[X.aE]
g=new D.O("modifiers",f,d,n,i)
g.b=!0
n.V(g)
g=n.f
if(g!==!1){n.f=!1
g=new D.O("invertX",g,!1,n,[P.S])
g.b=!0
n.V(g)}g=n.r
if(g!==!1){n.r=!1
g=new D.O("invertY",g,!1,n,[P.S])
g.b=!0
n.V(g)}n.bf(s)
e.h(0,n)
s=q.r
n=new U.ey()
g=U.lt()
g.sdu(0,!0)
g.sdc(6.283185307179586)
g.sde(0)
g.sa7(0,0)
g.sdd(100)
g.sZ(0)
g.scW(0.2)
n.b=g
g.gu().h(0,n.gaX())
n.c=null
n.d=!1
n.e=2.5
n.f=2
n.r=4
n.y=!1
n.x=!1
n.z=0
n.Q=null
n.ch=0
n.cx=null
n.cy=null
d=new X.aE(!0,!1,!1)
f=n.c
n.c=d
g=new D.O("modifiers",f,d,n,i)
g.b=!0
n.V(g)
n.bf(s)
e.h(0,n)
s=q.r
n=new U.eA()
n.c=0.01
n.d=0
n.e=0
d=new X.aE(!1,!1,!1)
n.b=d
i=new D.O("modifiers",null,d,n,i)
i.b=!0
n.V(i)
n.bf(s)
e.h(0,n)
e.h(0,U.md(V.ba(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.mp(2000,1.0471975511965976,e,0.1,null)
b=new M.dD()
b.sbg(null)
b.sbp(0,null)
b.sbq(null)
s=E.mh(null,!0,null,"",null,null)
a=F.iu()
n=a.a
i=new V.K(-1,-1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a0=n.bF(new V.az(1,2,4,6),new V.ap(1,0,0,1),new V.Z(-1,-1,0),new V.a6(0,1),i,null)
n=a.a
i=new V.K(1,-1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a1=n.bF(new V.az(0,3,4,6),new V.ap(0,0,1,1),new V.Z(1,-1,0),new V.a6(1,1),i,null)
n=a.a
i=new V.K(1,1,1)
i=i.w(0,Math.sqrt(i.H(i)))
a2=n.bF(new V.az(0,2,5,6),new V.ap(0,1,0,1),new V.Z(1,1,0),new V.a6(1,0),i,null)
n=a.a
i=V.bt()
g=new V.K(-1,1,1)
g=g.w(0,Math.sqrt(g.H(g)))
a3=n.bF(new V.az(0,2,4,7),new V.ap(1,1,0,1),new V.Z(-1,1,0),i,g,null)
a.d.el(H.d([a0,a1,a2,a3],[F.ag]))
a.at()
s.sae(0,a)
b.d=s
b.e=null
s=new O.ef()
s.b=1.0471975511965976
s.d=new V.v(1,1,1)
f=s.c
s.c=l
l.gu().h(0,s.gcu())
n=new D.O("boxTexture",f,s.c,s,[T.cW])
n.b=!0
s.a2(n)
b.sbq(s)
b.sbp(0,p)
b.sbg(c)
a4=new M.dI()
a4.shm(0,O.ls(E.ar))
a4.d.b9(a4.gi2(),a4.gi4())
a4.e=null
a4.f=null
a4.r=null
a4.x=null
a5=X.lv(!0,!0,!1,null,2000,null,0)
a4.sbg(null)
a4.sbp(0,a5)
a4.sbq(null)
a4.sbg(c)
a4.sbq(k)
a4.sbp(0,p)
a4.d.h(0,o)
a4.b.sex(0,!1)
s=M.aG
n=H.d([b,a4],[s])
i=new M.dB()
i.by(s)
i.e=!1
i.f=null
i.b9(i.giD(),i.giF())
i.ah(0,n)
s=q.d
if(s!==i){if(s!=null)s.gu().O(0,q.gdJ())
q.d=i
i.gu().h(0,q.gdJ())
q.dK()}s=V.mv("controls",!0)
s.cJ(0,"Silver",new D.kX(k),!0)
s.a9(0,"Gold",new D.kY(k))
s.a9(0,"Glass",new D.kZ(k))
s.a9(0,"Blue Glass",new D.l7(k))
s.a9(0,"Water Bubble",new D.l8(k))
s.a9(0,"No Reflection",new D.l9(k))
s.a9(0,"Pink Distort",new D.la(k))
s.a9(0,"Cloak",new D.lb(k))
s.a9(0,"White and Shiny",new D.lc(k))
s=V.mv("shapes",!0)
s.a9(0,"Cube",new D.ld(o))
s.a9(0,"Cuboid",new D.le(o))
s.a9(0,"Cylinder",new D.l_(o))
s.a9(0,"Cone",new D.l0(o))
s.a9(0,"Cylindrical",new D.l1(o))
s.a9(0,"Sphere",new D.l2(o))
s.a9(0,"Spherical",new D.l3(o))
s.cJ(0,"Toroid",new D.l4(o),!0)
s.a9(0,"Knot",new D.l5(o))
s=q.z
if(s==null){s=D.P()
q.z=s}n={func:1,ret:-1,args:[D.A]}
i=H.n(new D.l6(u,k),n)
if(s.b==null)s.sb0(H.d([],[n]))
s=s.b;(s&&C.a).h(s,i)
V.pQ(q)},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l7:function l7(a){this.a=a},
l8:function l8(a){this.a=a},
l9:function l9(a){this.a=a},
la:function la(a){this.a=a},
lb:function lb(a){this.a=a},
lc:function lc(a){this.a=a},
ld:function ld(a){this.a=a},
le:function le(a){this.a=a},
kW:function kW(){},
l_:function l_(a){this.a=a},
l0:function l0(a){this.a=a},
l1:function l1(a){this.a=a},
kV:function kV(){},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
kU:function kU(){},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a,b){this.a=a
this.b=b}},X={dA:function dA(a,b){this.a=a
this.b=b},dS:function dS(a,b){this.a=a
this.b=b},hy:function hy(){var _=this
_.d=_.c=_.b=_.a=null},dX:function dX(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},hG:function hG(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aE:function aE(a,b,c){this.a=a
this.b=b
this.c=c},bs:function bs(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hY:function hY(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cI:function cI(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},id:function id(){},es:function es(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},iY:function iY(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ex:function ex(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lv:function(a,b,c,d,e,f,g){var u,t
u=new X.hm()
t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=$.mx
if(t==null){t=V.mw(0,0,1,1)
$.mx=t}u.r=t
return u},
mp:function(a,b,c,d,e){var u,t,s
u=new X.e7()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gu().h(0,u.ghc())
s=new D.O("mover",t,u.b,u,[U.aj])
s.b=!0
u.ay(s)}s=u.c
if(!(Math.abs(s-b)<$.U().a)){u.c=b
s=new D.O("fov",s,b,u,[P.r])
s.b=!0
u.ay(s)}s=u.d
if(!(Math.abs(s-d)<$.U().a)){u.d=d
s=new D.O("near",s,d,u,[P.r])
s.b=!0
u.ay(s)}s=u.e
if(!(Math.abs(s-a)<$.U().a)){u.e=a
s=new D.O("far",s,a,u,[P.r])
s.b=!0
u.ay(s)}return u},
bY:function bY(){},
hm:function hm(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(){this.b=this.a=null},
e7:function e7(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cT:function cT(){}},V={
pT:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.e.bu(a-b,u)
return(a<0?a+u:a)+b},
a_:function(a,b,c){if(a==null)return C.c.aq("null",c)
return C.c.aq(C.e.fm(Math.abs(a-0)<$.U().a?0:a,b),c+b+1)},
ck:function(a,b,c){var u,t,s,r,q,p
H.k(a,"$ib",[P.r],"$ab")
u=H.d([],[P.e])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.D)(a),++r){q=V.a_(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.n(u,p,C.c.aq(u[p],s))}return u},
lW:function(a,b){return C.e.lj(Math.pow(b,C.a_.d4(Math.log(H.pp(a))/Math.log(b))))},
c6:function(){var u=$.mm
if(u==null){u=V.ba(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.mm=u}return u},
ba:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ml:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.w(0,Math.sqrt(c.H(c)))
t=b.aM(u)
s=t.w(0,Math.sqrt(t.H(t)))
r=u.aM(s)
q=new V.K(a.a,a.b,a.c)
p=s.X(0).H(q)
o=r.X(0).H(q)
n=u.X(0).H(q)
return V.ba(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bt:function(){var u=$.mr
if(u==null){u=new V.a6(0,0)
$.mr=u}return u},
ms:function(){var u=$.cN
if(u==null){u=new V.Z(0,0,0)
$.cN=u}return u},
mw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ec(a,b,c,d)},
d6:function(){var u=$.mN
if(u==null){u=new V.K(0,0,0)
$.mN=u}return u},
mO:function(){var u=$.mM
if(u==null){u=new V.K(0,1,0)
$.mM=u}return u},
mP:function(){var u=$.jq
if(u==null){u=new V.K(0,0,1)
$.jq=u}return u},
v:function v(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hb:function hb(a){this.a=a},
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
ax:function ax(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ec:function ec(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b){this.a=a
this.b=b},
K:function K(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function(a,b){var u,t,s,r
if(a.length!==1||b.length!==1)throw H.c(P.x("The given low and high character strings for a RangeMatcher must have one and only one characters."))
u=C.c.K(a,0)
t=C.c.K(b,0)
s=new V.ii()
if(u>t){r=t
t=u
u=r}s.a=u
s.b=t
return s},
y:function(a){var u=new V.it()
u.fW(a)
return u},
iX:function(){var u,t
u=new V.iW()
t=P.e
u.sjc(new H.aS([t,V.cR]))
u.sjg(new H.aS([t,V.cX]))
u.c=null
return u},
bl:function bl(){},
aD:function aD(){},
dY:function dY(){},
ay:function ay(){this.a=null},
ii:function ii(){this.b=this.a=null},
it:function it(){this.a=null},
cR:function cR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
er:function er(a,b,c){this.a=a
this.b=b
this.c=c},
cX:function cX(a,b){this.a=a
this.b=b
this.c=null},
iW:function iW(){this.c=this.b=this.a=null},
cY:function cY(a){this.b=a
this.a=this.c=null},
pQ:function(a){P.oG(C.V,new V.lh(a))},
mv:function(a,b){var u,t
u=new V.ig(a,!0)
t=C.z.dw(document,a)
u.c=t
if(t==null)H.t("Failed to find "+a+" for RadioGroup")
return u},
oB:function(a,b){var u=new V.iy()
u.fX(a,!0)
return u},
bE:function bE(){},
lh:function lh(a){this.a=a},
h1:function h1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hn:function hn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ho:function ho(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ib:function ib(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ig:function ig(a,b){this.a=a
this.b=b
this.c=null},
ih:function ih(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iy:function iy(){this.b=this.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a},
iB:function iB(a){this.a=a}},U={
lt:function(){var u=new U.fT()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
md:function(a){var u=new U.dC()
u.a=a
return u},
fT:function fT(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){this.b=this.a=null},
cC:function cC(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aj:function aj(){},
ey:function ey(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ez:function ez(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
eA:function eA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dB:function dB(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},dD:function dD(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},dI:function dI(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},aG:function aG(){}},A={
oi:function(a,b){var u,t
u=a.au
t=new A.e_(b,u)
t.dH(b,u)
t.fU(a,b)
return t},
lD:function(a,b,c,d,e){var u=new A.j5(a,b,c,e)
u.f=d
u.sjr(P.og(d,0,!1,P.o))
return u},
dx:function dx(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(a){this.a=a},
e_:function e_(a,b){var _=this
_.bJ=_.eE=_.bI=_.au=_.aC=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.eU=_.cZ=_.eT=_.bW=_.eS=_.eR=_.bV=_.bU=_.eQ=_.eP=_.bT=_.bS=_.bR=_.eO=_.eN=_.bQ=_.eM=_.eL=_.bP=_.eK=_.eJ=_.bO=_.bN=_.eI=_.eH=_.bM=_.bL=_.eG=_.eF=_.bK=null
_.d3=_.eY=_.d2=_.eX=_.d1=_.eW=_.d0=_.eV=_.d_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hP:function hP(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.au=b4
_.bI=b5},
cZ:function cZ(a,b,c){this.a=a
this.b=b
this.c=c},
d2:function d2(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
d0:function d0(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
d3:function d3(a,b,c,d,e,f,g,h,i,j){var _=this
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
d4:function d4(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cQ:function cQ(){},
c1:function c1(a,b){this.a=a
this.b=b},
eg:function eg(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
et:function et(){},
jb:function jb(a){this.a=a},
Q:function Q(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j7:function j7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j8:function j8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j5:function j5(a,b,c,d){var _=this
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
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
j9:function j9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jc:function jc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d_:function d_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aB:function aB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
lS:function(a,b,c,d){var u
H.n(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
u=F.iu()
F.dl(u,b,c,d,a,1,0,0,1)
F.dl(u,b,c,d,a,0,1,0,3)
F.dl(u,b,c,d,a,0,0,1,2)
F.dl(u,b,c,d,a,-1,0,0,0)
F.dl(u,b,c,d,a,0,-1,0,0)
F.dl(u,b,c,d,a,0,0,-1,3)
u.at()
return u},
ky:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
dl:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
u={}
H.n(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
t=a1+a2
s=t+a3
r=a2+a3
q=a3+a1
p=new V.K(s,r+a1,q+a2)
u.a=p
o=a1-a2
n=a2-a3
m=a3-a1
l=new V.K(o+a3,n+a1,m+a2)
u.b=l
k=new V.K(o-a3,n-a1,m-a2)
u.c=k
j=new V.K(t-a3,r-a1,q-a2)
u.d=j
if(s>0){u.d=l
u.b=j
s=l
t=j}else{s=j
t=l}for(q=s,s=t,t=p,r=k,i=0;i<a4;++i,h=q,q=t,t=s,s=r,r=h){u.a=s
u.b=r
u.c=q
u.d=t}g=F.ky(t)
f=F.ky(u.b)
e=F.lY(d,a0,new F.kx(u,F.ky(u.c),F.ky(u.d),f,g,c),b)
if(e!=null)a.bl(e)},
nd:function(a,b,c,d,e,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
H.n(e,{func:1,ret:P.r,args:[P.r]})
if(a0<3)return
u=F.iu()
t=b?-1:1
s=-6.283185307179586/a0
r=H.d([],[F.ag])
q=u.a
p=new V.K(0,0,t)
p=p.w(0,Math.sqrt(p.H(p)))
C.a.h(r,q.jS(new V.az(a,-1,-1,-1),new V.ap(1,1,1,1),new V.Z(0,0,d),new V.K(0,0,t),new V.a6(0.5,0.5),p))
for(q=t*t,o=0;o<=a0;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=e.$1(o/a0)
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
f=F.eB(new V.az(a,-1,-1,-1),null,new V.ap(i,g,h,1),new V.Z(m*k,l*k,d),new V.K(0,0,t),new V.a6(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.h(0,f)
C.a.h(r,f)}u.d.el(r)
return u},
na:function(a,b,c,d,e,f){return F.nb(!0,c,d,new F.kH(a,f),e)},
nb:function(a,b,c,d,e){var u
H.n(d,{func:1,ret:P.r,args:[P.r,P.r]})
if(e<3)return
if(c<1)return
u=F.lY(c,e,new F.kJ(d),null)
if(u==null)return
u.at()
u.cK()
if(b)u.bl(F.nd(3,!1,!1,1,new F.kK(d),e))
u.bl(F.nd(1,!0,!1,-1,new F.kL(d),e))
return u},
nn:function(a,b,c,d){var u,t
u={}
u.a=b
if(H.n(b,{func:1,ret:P.r,args:[P.r,P.r]})==null)u.a=new F.li()
t=F.lS(a,null,new F.lj(u,c),d)
t.cK()
return t},
np:function(a,b,c,d){return F.nc(c,a,d,b,new F.lk())},
pI:function(a,b,c,d,e,f){return F.nc(d,a,e,b,new F.kS(f,c))},
nc:function(a,b,c,d,e){var u=F.lY(a,b,new F.kI(H.n(e,{func:1,ret:V.Z,args:[P.r]}),d,b,c),null)
if(u==null)return
u.at()
u.cK()
return u},
lY:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.n(c,{func:1,ret:-1,args:[F.ag,P.r,P.r]})
if(a<1)return
if(b<1)return
u=F.iu()
t=H.d([],[F.ag])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.eB(null,null,new V.ap(p,0,0,1),null,null,new V.a6(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.cV(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.eB(null,null,new V.ap(j,i,h,1),null,null,new V.a6(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.cV(d))}}u.d.jR(a+1,b+1,t)
return u},
cz:function(a,b,c){var u,t
u=new F.aa()
t=a.a
if(t==null)H.t(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.x("May not create a face with vertices attached to different shapes."))
u.cG(a)
u.cH(b)
u.j5(c)
C.a.h(u.a.a.d.b,u)
u.a.a.aa()
return u},
oc:function(a,b){var u,t
u=new F.br()
t=a.a
if(t==null)H.t(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.x("May not create a line with vertices attached to different shapes."))
u.cG(a)
u.cH(b)
C.a.h(u.a.a.c.b,u)
u.a.a.aa()
return u},
iu:function(){var u,t
u=new F.ee()
t=new F.jr(u)
t.b=!1
t.sjs(H.d([],[F.ag]))
u.a=t
t=new F.ix(u)
t.scw(H.d([],[F.bO]))
u.b=t
t=new F.iw(u)
t.shI(H.d([],[F.br]))
u.c=t
t=new F.iv(u)
t.shw(H.d([],[F.aa]))
u.d=t
u.e=null
return u},
eB:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.ag()
t=new F.jz(u)
t.scw(H.d([],[F.bO]))
u.b=t
t=new F.jv(u)
s=[F.br]
t.shJ(H.d([],s))
t.shK(H.d([],s))
u.c=t
t=new F.js(u)
s=[F.aa]
t.shx(H.d([],s))
t.shy(H.d([],s))
t.shz(H.d([],s))
u.d=t
h=$.nD()
u.e=0
t=$.b1()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.by().a)!==0?e:null
u.x=(s&$.bx().a)!==0?b:null
u.y=(s&$.bz().a)!==0?f:null
u.z=(s&$.bA().a)!==0?g:null
u.Q=(s&$.nE().a)!==0?c:null
u.ch=(s&$.cp().a)!==0?i:0
u.cx=(s&$.bw().a)!==0?a:null
return u},
kx:function kx(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
kH:function kH(a,b){this.a=a
this.b=b},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
li:function li(){},
lj:function lj(a,b){this.a=a
this.b=b},
lk:function lk(){},
kS:function kS(a,b){this.a=a
this.b=b},
kI:function kI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aa:function aa(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hf:function hf(){},
iC:function iC(){},
br:function br(){this.b=this.a=null},
hA:function hA(){},
j4:function j4(){},
bO:function bO(){this.a=null},
ee:function ee(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iv:function iv(a){this.a=a
this.b=null},
iw:function iw(a){this.a=a
this.b=null},
ix:function ix(a){this.a=a
this.b=null},
ag:function ag(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jB:function jB(a){this.a=a},
jA:function jA(a){this.a=a},
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
jx:function jx(){},
jw:function jw(){},
jy:function jy(){},
i5:function i5(){},
jz:function jz(a){this.a=a
this.b=null}},T={cV:function cV(){},cW:function cW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},iS:function iS(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},iT:function iT(a,b,c,d,e,f,g){var _=this
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
H.ly.prototype={}
J.a.prototype={
D:function(a,b){return a===b},
gL:function(a){return H.cO(a)},
i:function(a){return"Instance of '"+H.c8(a)+"'"}}
J.hv.prototype={
i:function(a){return String(a)},
gL:function(a){return a?519018:218159},
$iS:1}
J.dQ.prototype={
D:function(a,b){return null==b},
i:function(a){return"null"},
gL:function(a){return 0},
$iM:1}
J.dR.prototype={
gL:function(a){return 0},
i:function(a){return String(a)}}
J.ia.prototype={}
J.bR.prototype={}
J.bq.prototype={
i:function(a){var u=a[$.nr()]
if(u==null)return this.fP(a)
return"JavaScript function for "+H.m(J.av(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ibI:1}
J.aR.prototype={
h:function(a,b){H.C(b,H.u(a,0))
if(!!a.fixed$length)H.t(P.I("add"))
a.push(b)},
l6:function(a,b){var u
if(!!a.fixed$length)H.t(P.I("removeAt"))
u=a.length
if(b>=u)throw H.c(P.eb(b,null,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.t(P.I("remove"))
for(u=0;u<a.length;++u)if(J.a0(a[u],b)){a.splice(u,1)
return!0}return!1},
ah:function(a,b){var u,t
H.k(b,"$ii",[H.u(a,0)],"$ai")
if(!!a.fixed$length)H.t(P.I("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.D)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.c(P.bm(a))}},
m:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.n(u,t,H.m(a[t]))
return u.join(b)},
kK:function(a){return this.m(a,"")},
kB:function(a,b,c,d){var u,t,s
H.C(b,d)
H.n(c,{func:1,ret:d,args:[d,H.u(a,0)]})
u=a.length
for(t=b,s=0;s<u;++s){t=c.$2(t,a[s])
if(a.length!==u)throw H.c(P.bm(a))}return t},
kA:function(a,b,c){var u,t,s
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){s=a[t]
if(b.$1(s))return s
if(a.length!==u)throw H.c(P.bm(a))}throw H.c(H.ht())},
kz:function(a,b){return this.kA(a,b,null)},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
fM:function(a,b,c){if(b<0||b>a.length)throw H.c(P.af(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.c(P.af(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.u(a,0)])
return H.d(a.slice(b,c),[H.u(a,0)])},
gky:function(a){if(a.length>0)return a[0]
throw H.c(H.ht())},
gaD:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ht())},
fK:function(a,b,c,d,e){var u,t,s
u=H.u(a,0)
H.k(d,"$ii",[u],"$ai")
if(!!a.immutable$list)H.t(P.I("setRange"))
P.bu(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.k(d,"$ib",[u],"$ab")
u=J.cl(d)
if(e+t>u.gl(d))throw H.c(H.o8())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
bv:function(a,b,c,d){return this.fK(a,b,c,d,0)},
ep:function(a,b){var u,t
H.n(b,{func:1,ret:P.S,args:[H.u(a,0)]})
u=a.length
for(t=0;t<u;++t){if(b.$1(a[t]))return!0
if(a.length!==u)throw H.c(P.bm(a))}return!1},
a_:function(a,b){var u
for(u=0;u<a.length;++u)if(J.a0(a[u],b))return!0
return!1},
i:function(a){return P.lw(a,"[","]")},
gY:function(a){return new J.aw(a,a.length,0,[H.u(a,0)])},
gL:function(a){return H.cO(a)},
gl:function(a){return a.length},
sl:function(a,b){if(!!a.fixed$length)H.t(P.I("set length"))
if(b<0)throw H.c(P.af(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.cj(a,b))
return a[b]},
n:function(a,b,c){H.C(c,H.u(a,0))
if(!!a.immutable$list)H.t(P.I("indexed set"))
if(b>=a.length||b<0)throw H.c(H.cj(a,b))
a[b]=c},
p:function(a,b){var u,t
u=[H.u(a,0)]
H.k(b,"$ib",u,"$ab")
t=C.f.p(a.length,b.gl(b))
u=H.d([],u)
this.sl(u,t)
this.bv(u,0,a.length,a)
this.bv(u,a.length,t,b)
return u},
$ii:1,
$ib:1}
J.lx.prototype={}
J.aw.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.c(H.D(u))
s=this.c
if(s>=t){this.sdZ(null)
return!1}this.sdZ(u[s]);++this.c
return!0},
sdZ:function(a){this.d=H.C(a,H.u(this,0))},
$ib6:1}
J.bM.prototype={
lj:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.I(""+a+".toInt()"))},
d4:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.I(""+a+".floor()"))},
av:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.I(""+a+".round()"))},
fm:function(a,b){var u,t
if(b>20)throw H.c(P.af(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
bs:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.af(b,2,36,"radix",null))
u=a.toString(b)
if(C.c.a5(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.I("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.h(t,1)
u=t[1]
if(3>=s)return H.h(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.c.A("0",r)},
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
p:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a+b},
v:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a-b},
A:function(a,b){if(typeof b!=="number")throw H.c(H.au(b))
return a*b},
bu:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
fT:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.eg(a,b)},
ac:function(a,b){return(a|0)===a?a/b|0:this.eg(a,b)},
eg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.I("Result of truncating division is "+H.m(u)+": "+H.m(a)+" ~/ "+b))},
b2:function(a,b){var u
if(a>0)u=this.ef(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ja:function(a,b){if(b<0)throw H.c(H.au(b))
return this.ef(a,b)},
ef:function(a,b){return b>31?0:a>>>b},
$ir:1,
$ia7:1}
J.dP.prototype={$io:1}
J.dO.prototype={}
J.bp.prototype={
a5:function(a,b){if(b<0)throw H.c(H.cj(a,b))
if(b>=a.length)H.t(H.cj(a,b))
return a.charCodeAt(b)},
K:function(a,b){if(b>=a.length)throw H.c(H.cj(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.lp(b,null,null))
return a+b},
b6:function(a,b,c,d){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.au(b))
c=P.bu(b,c,a.length,null,null,null)
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
al:function(a,b,c){var u
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.au(c))
if(typeof c!=="number")return c.a0()
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ab:function(a,b){return this.al(a,b,0)},
B:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.au(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.a0()
if(b<0)throw H.c(P.eb(b,null,null))
if(b>c)throw H.c(P.eb(b,null,null))
if(c>a.length)throw H.c(P.eb(c,null,null))
return a.substring(b,c)},
ax:function(a,b){return this.B(a,b,null)},
lm:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.S)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
kW:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.A(c,u)+a},
aq:function(a,b){return this.kW(a,b," ")},
f6:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.af(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
f5:function(a,b){return this.f6(a,b,0)},
i:function(a){return a},
gL:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$imo:1,
$ie:1}
H.w.prototype={
gl:function(a){return this.a.length},
j:function(a,b){return C.c.a5(this.a,b)},
$ad5:function(){return[P.o]},
$az:function(){return[P.o]},
$ai:function(){return[P.o]},
$ab:function(){return[P.o]}}
H.h8.prototype={}
H.c5.prototype={
gY:function(a){return new H.cF(this,this.gl(this),0,[H.an(this,"c5",0)])},
c5:function(a,b){return this.fO(0,H.n(b,{func:1,ret:P.S,args:[H.an(this,"c5",0)]}))}}
H.cF.prototype={
gM:function(a){return this.d},
F:function(){var u,t,s,r
u=this.a
t=J.cl(u)
s=t.gl(u)
if(this.b!==s)throw H.c(P.bm(u))
r=this.c
if(r>=s){this.sbb(null)
return!1}this.sbb(t.N(u,r));++this.c
return!0},
sbb:function(a){this.d=H.C(a,H.u(this,0))},
$ib6:1}
H.hK.prototype={
gY:function(a){return new H.hL(J.bB(this.a),this.b,this.$ti)},
gl:function(a){return J.aH(this.a)},
N:function(a,b){return this.b.$1(J.fF(this.a,b))},
$ai:function(a,b){return[b]}}
H.hL.prototype={
F:function(){var u=this.b
if(u.F()){this.sbb(this.c.$1(u.gM(u)))
return!0}this.sbb(null)
return!1},
gM:function(a){return this.a},
sbb:function(a){this.a=H.C(a,H.u(this,1))},
$ab6:function(a,b){return[b]}}
H.hM.prototype={
gl:function(a){return J.aH(this.a)},
N:function(a,b){return this.b.$1(J.fF(this.a,b))},
$ac5:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.d7.prototype={
gY:function(a){return new H.jE(J.bB(this.a),this.b,this.$ti)}}
H.jE.prototype={
F:function(){var u,t
for(u=this.a,t=this.b;u.F();)if(t.$1(u.gM(u)))return!0
return!1},
gM:function(a){var u=this.a
return u.gM(u)}}
H.c3.prototype={}
H.d5.prototype={
n:function(a,b,c){H.C(c,H.an(this,"d5",0))
throw H.c(P.I("Cannot modify an unmodifiable list"))}}
H.ev.prototype={}
H.fV.prototype={
i:function(a){return P.lB(this)},
n:function(a,b,c){H.C(b,H.u(this,0))
H.C(c,H.u(this,1))
return H.o0()},
$iF:1}
H.fW.prototype={
gl:function(a){return this.a},
bG:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
j:function(a,b){if(!this.bG(0,b))return
return this.e_(b)},
e_:function(a){return this.b[H.J(a)]},
P:function(a,b){var u,t,s,r,q
u=H.u(this,1)
H.n(b,{func:1,ret:-1,args:[H.u(this,0),u]})
t=this.c
for(s=t.length,r=0;r<s;++r){q=t[r]
b.$2(q,H.C(this.e_(q),u))}}}
H.ij.prototype={}
H.j1.prototype={
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
H.i6.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hx.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.m(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.m(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.m(this.a)+")"}}
H.jf.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ll.prototype={
$1:function(a){if(!!J.X(a).$ibH)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:25}
H.fb.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iaA:1}
H.cu.prototype={
i:function(a){return"Closure '"+H.c8(this).trim()+"'"},
$ibI:1,
glt:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iP.prototype={}
H.iG.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.co(u)+"'"}}
H.cr.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.cr))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gL:function(a){var u,t
u=this.c
if(u==null)t=H.cO(this.a)
else t=typeof u!=="object"?J.du(u):H.cO(u)
return(t^H.cO(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.m(this.d)+"' of "+("Instance of '"+H.c8(u)+"'")}}
H.j3.prototype={
i:function(a){return this.a}}
H.fR.prototype={
i:function(a){return this.a}}
H.ir.prototype={
i:function(a){return"RuntimeError: "+H.m(this.a)}}
H.aS.prototype={
gl:function(a){return this.a},
gkJ:function(a){return this.a===0},
gad:function(a){return new H.hC(this,[H.u(this,0)])},
bG:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.dW(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.dW(t,b)}else return this.kG(b)},
kG:function(a){var u=this.d
if(u==null)return!1
return this.d7(this.ci(u,this.d6(a)),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.bz(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.bz(r,b)
s=t==null?null:t.b
return s}else return this.kH(b)},
kH:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.ci(u,this.d6(a))
s=this.d7(t,a)
if(s<0)return
return t[s].b},
n:function(a,b,c){var u,t
H.C(b,H.u(this,0))
H.C(c,H.u(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.cs()
this.b=u}this.dN(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.cs()
this.c=t}this.dN(t,b,c)}else this.kI(b,c)},
kI:function(a,b){var u,t,s,r
H.C(a,H.u(this,0))
H.C(b,H.u(this,1))
u=this.d
if(u==null){u=this.cs()
this.d=u}t=this.d6(a)
s=this.ci(u,t)
if(s==null)this.cE(u,t,[this.ct(a,b)])
else{r=this.d7(s,a)
if(r>=0)s[r].b=b
else s.push(this.ct(a,b))}},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.c(P.bm(this))
u=u.c}},
dN:function(a,b,c){var u
H.C(b,H.u(this,0))
H.C(c,H.u(this,1))
u=this.bz(a,b)
if(u==null)this.cE(a,b,this.ct(b,c))
else u.b=c},
hQ:function(){this.r=this.r+1&67108863},
ct:function(a,b){var u,t
u=new H.hB(H.C(a,H.u(this,0)),H.C(b,H.u(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.hQ()
return u},
d6:function(a){return J.du(a)&0x3ffffff},
d7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1},
i:function(a){return P.lB(this)},
bz:function(a,b){return a[b]},
ci:function(a,b){return a[b]},
cE:function(a,b,c){a[b]=c},
hr:function(a,b){delete a[b]},
dW:function(a,b){return this.bz(a,b)!=null},
cs:function(){var u=Object.create(null)
this.cE(u,"<non-identifier-key>",u)
this.hr(u,"<non-identifier-key>")
return u}}
H.hB.prototype={}
H.hC.prototype={
gl:function(a){return this.a.a},
gY:function(a){var u,t
u=this.a
t=new H.hD(u,u.r,this.$ti)
t.c=u.e
return t}}
H.hD.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bm(u))
else{u=this.c
if(u==null){this.sdM(null)
return!1}else{this.sdM(u.a)
this.c=this.c.c
return!0}}},
sdM:function(a){this.d=H.C(a,H.u(this,0))},
$ib6:1}
H.kO.prototype={
$1:function(a){return this.a(a)},
$S:25}
H.kP.prototype={
$2:function(a,b){return this.a(a,b)},
$S:54}
H.kQ.prototype={
$1:function(a){return this.a(H.J(a))},
$S:51}
H.hw.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$imo:1,
$iox:1}
H.cJ.prototype={$icJ:1}
H.bN.prototype={$ibN:1,$ioH:1}
H.e2.prototype={
gl:function(a){return a.length},
$iL:1,
$aL:function(){}}
H.cK.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
n:function(a,b,c){H.pu(c)
H.bk(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.r]},
$az:function(){return[P.r]},
$ii:1,
$ai:function(){return[P.r]},
$ib:1,
$ab:function(){return[P.r]}}
H.e3.prototype={
n:function(a,b,c){H.ae(c)
H.bk(b,a,a.length)
a[b]=c},
$ac3:function(){return[P.o]},
$az:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]}}
H.hZ.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i_.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i0.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i1.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.i2.prototype={
j:function(a,b){H.bk(b,a,a.length)
return a[b]}}
H.e4.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$iqd:1}
H.cL.prototype={
gl:function(a){return a.length},
j:function(a,b){H.bk(b,a,a.length)
return a[b]},
$icL:1,
$iT:1}
H.db.prototype={}
H.dc.prototype={}
H.dd.prototype={}
H.de.prototype={}
P.jG.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:19}
P.jF.prototype={
$1:function(a){var u,t
this.a.a=H.n(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:50}
P.jH.prototype={
$0:function(){this.a.$0()},
$S:0}
P.jI.prototype={
$0:function(){this.a.$0()},
$S:0}
P.fh.prototype={
ha:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.ci(new P.km(this,b),0),a)
else throw H.c(P.I("`setTimeout()` not found."))},
hb:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.ci(new P.kl(this,a,Date.now(),b),0),a)
else throw H.c(P.I("Periodic timer."))},
$ibe:1}
P.km.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.kl.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.f.fT(r,s)}u.c=t
this.d.$1(u)},
$S:0}
P.bj.prototype={
kN:function(a){if(this.c!==6)return!0
return this.b.b.dq(H.n(this.d,{func:1,ret:P.S,args:[P.R]}),a.a,P.S,P.R)},
kE:function(a){var u,t,s,r
u=this.e
t=P.R
s={futureOr:1,type:H.u(this,1)}
r=this.b.b
if(H.fA(u,{func:1,args:[P.R,P.aA]}))return H.lT(r.lc(u,a.a,a.b,null,t,P.aA),s)
else return H.lT(r.dq(H.n(u,{func:1,args:[P.R]}),a.a,null,t),s)}}
P.aN.prototype={
fl:function(a,b,c){var u,t,s,r
u=H.u(this,0)
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.a4
if(t!==C.l){t.toString
H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.ph(b,t)}H.n(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aN(0,$.a4,[c])
r=b==null?1:3
this.dO(new P.bj(s,r,a,b,[u,c]))
return s},
li:function(a,b){return this.fl(a,null,b)},
dO:function(a){var u,t
u=this.a
if(u<=1){a.a=H.f(this.c,"$ibj")
this.c=a}else{if(u===2){t=H.f(this.c,"$iaN")
u=t.a
if(u<4){t.dO(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.kF(null,null,u,H.n(new P.jR(this,a),{func:1,ret:-1}))}},
ec:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.f(this.c,"$ibj")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.f(this.c,"$iaN")
t=p.a
if(t<4){p.ec(a)
return}this.a=t
this.c=p.c}u.a=this.bB(a)
t=this.b
t.toString
P.kF(null,null,t,H.n(new P.jV(u,this),{func:1,ret:-1}))}},
cA:function(){var u=H.f(this.c,"$ibj")
this.c=null
return this.bB(u)},
bB:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
dS:function(a){var u,t,s
u=H.u(this,0)
H.lT(a,{futureOr:1,type:u})
t=this.$ti
if(H.dp(a,"$icB",t,"$acB"))if(H.dp(a,"$iaN",t,null))P.mQ(a,this)
else P.oT(a,this)
else{s=this.cA()
H.C(a,u)
this.a=4
this.c=a
P.da(this,s)}},
dT:function(a,b){var u
H.f(b,"$iaA")
u=this.cA()
this.a=8
this.c=new P.ao(a,b)
P.da(this,u)},
$icB:1}
P.jR.prototype={
$0:function(){P.da(this.a,this.b)},
$S:0}
P.jV.prototype={
$0:function(){P.da(this.b,this.a.a)},
$S:0}
P.jS.prototype={
$1:function(a){var u=this.a
u.a=0
u.dS(a)},
$S:19}
P.jT.prototype={
$2:function(a,b){H.f(b,"$iaA")
this.a.dT(a,b)},
$1:function(a){return this.$2(a,null)},
$S:49}
P.jU.prototype={
$0:function(){this.a.dT(this.b,this.c)},
$S:0}
P.jY.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.fj(H.n(r.d,{func:1}),null)}catch(q){t=H.ak(q)
s=H.cm(q)
if(this.d){r=H.f(this.a.a.c,"$iao").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.f(this.a.a.c,"$iao")
else p.b=new P.ao(t,s)
p.a=!0
return}if(!!J.X(u).$icB){if(u instanceof P.aN&&u.a>=4){if(u.a===8){r=this.b
r.b=H.f(u.c,"$iao")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.li(new P.jZ(o),null)
r.a=!1}},
$S:3}
P.jZ.prototype={
$1:function(a){return this.a},
$S:48}
P.jX.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.u(s,0)
q=H.C(this.c,r)
p=H.u(s,1)
this.a.b=s.b.b.dq(H.n(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.ak(o)
t=H.cm(o)
s=this.a
s.b=new P.ao(u,t)
s.a=!0}},
$S:3}
P.jW.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.f(this.a.a.c,"$iao")
r=this.c
if(r.kN(u)&&r.e!=null){q=this.b
q.b=r.kE(u)
q.a=!1}}catch(p){t=H.ak(p)
s=H.cm(p)
r=H.f(this.a.a.c,"$iao")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ao(t,s)
n.a=!0}},
$S:3}
P.eE.prototype={}
P.iJ.prototype={
gl:function(a){var u,t,s,r
u={}
t=new P.aN(0,$.a4,[P.o])
u.a=0
s=H.u(this,0)
r=H.n(new P.iL(u,this),{func:1,ret:-1,args:[s]})
H.n(new P.iM(u,t),{func:1,ret:-1})
W.ac(this.a,this.b,r,!1,s)
return t}}
P.iL.prototype={
$1:function(a){H.C(a,H.u(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.M,args:[H.u(this.b,0)]}}}
P.iM.prototype={
$0:function(){this.b.dS(this.a.a)},
$S:0}
P.cS.prototype={}
P.iK.prototype={}
P.be.prototype={}
P.ao.prototype={
i:function(a){return H.m(this.a)},
$ibH:1}
P.kw.prototype={$iqs:1}
P.kE.prototype={
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
P.k4.prototype={
ld:function(a){var u,t,s
H.n(a,{func:1,ret:-1})
try{if(C.l===$.a4){a.$0()
return}P.n1(null,null,this,a,-1)}catch(s){u=H.ak(s)
t=H.cm(s)
P.kD(null,null,this,u,H.f(t,"$iaA"))}},
le:function(a,b,c){var u,t,s
H.n(a,{func:1,ret:-1,args:[c]})
H.C(b,c)
try{if(C.l===$.a4){a.$1(b)
return}P.n2(null,null,this,a,b,-1,c)}catch(s){u=H.ak(s)
t=H.cm(s)
P.kD(null,null,this,u,H.f(t,"$iaA"))}},
jZ:function(a,b){return new P.k6(this,H.n(a,{func:1,ret:b}),b)},
cO:function(a){return new P.k5(this,H.n(a,{func:1,ret:-1}))},
es:function(a,b){return new P.k7(this,H.n(a,{func:1,ret:-1,args:[b]}),b)},
fj:function(a,b){H.n(a,{func:1,ret:b})
if($.a4===C.l)return a.$0()
return P.n1(null,null,this,a,b)},
dq:function(a,b,c,d){H.n(a,{func:1,ret:c,args:[d]})
H.C(b,d)
if($.a4===C.l)return a.$1(b)
return P.n2(null,null,this,a,b,c,d)},
lc:function(a,b,c,d,e,f){H.n(a,{func:1,ret:d,args:[e,f]})
H.C(b,e)
H.C(c,f)
if($.a4===C.l)return a.$2(b,c)
return P.pi(null,null,this,a,b,c,d,e,f)}}
P.k6.prototype={
$0:function(){return this.a.fj(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.k5.prototype={
$0:function(){return this.a.ld(this.b)},
$S:3}
P.k7.prototype={
$1:function(a){var u=this.c
return this.a.le(this.b,H.C(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k2.prototype={
gY:function(a){var u=new P.eT(this,this.r,this.$ti)
u.c=this.e
return u},
gl:function(a){return this.a},
a_:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.f(u[b],"$icd")!=null}else{t=this.hn(b)
return t}},
hn:function(a){var u=this.d
if(u==null)return!1
return this.cf(this.e0(u,a),a)>=0},
h:function(a,b){var u,t
H.C(b,H.u(this,0))
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null){u=P.lI()
this.b=u}return this.dP(u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=this.c
if(t==null){t=P.lI()
this.c=t}return this.dP(t,b)}else return this.he(0,b)},
he:function(a,b){var u,t,s
H.C(b,H.u(this,0))
u=this.d
if(u==null){u=P.lI()
this.d=u}t=this.dU(b)
s=u[t]
if(s==null)u[t]=[this.cc(b)]
else{if(this.cf(s,b)>=0)return!1
s.push(this.cc(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.iT(this.c,b)
else return this.iQ(0,b)},
iQ:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.e0(u,b)
s=this.cf(t,b)
if(s<0)return!1
this.eh(t.splice(s,1)[0])
return!0},
dP:function(a,b){H.C(b,H.u(this,0))
if(H.f(a[b],"$icd")!=null)return!1
a[b]=this.cc(b)
return!0},
iT:function(a,b){var u
if(a==null)return!1
u=H.f(a[b],"$icd")
if(u==null)return!1
this.eh(u)
delete a[b]
return!0},
dR:function(){this.r=1073741823&this.r+1},
cc:function(a){var u,t
u=new P.cd(H.C(a,H.u(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.dR()
return u},
eh:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.dR()},
dU:function(a){return J.du(a)&1073741823},
e0:function(a,b){return a[this.dU(b)]},
cf:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.a0(a[t].a,b))return t
return-1}}
P.cd.prototype={}
P.eT.prototype={
gM:function(a){return this.d},
F:function(){var u=this.a
if(this.b!==u.r)throw H.c(P.bm(u))
else{u=this.c
if(u==null){this.sdQ(null)
return!1}else{this.sdQ(H.C(u.a,H.u(this,0)))
this.c=this.c.b
return!0}}},
sdQ:function(a){this.d=H.C(a,H.u(this,0))},
$ib6:1}
P.hE.prototype={
$2:function(a,b){this.a.n(0,H.C(a,this.b),H.C(b,this.c))},
$S:8}
P.hF.prototype={$ii:1,$ib:1}
P.z.prototype={
gY:function(a){return new H.cF(a,this.gl(a),0,[H.bU(this,a,"z",0)])},
N:function(a,b){return this.j(a,b)},
ll:function(a,b){var u,t
u=H.d([],[H.bU(this,a,"z",0)])
C.a.sl(u,this.gl(a))
for(t=0;t<this.gl(a);++t)C.a.n(u,t,this.j(a,t))
return u},
lk:function(a){return this.ll(a,!0)},
p:function(a,b){var u,t
u=[H.bU(this,a,"z",0)]
H.k(b,"$ib",u,"$ab")
t=H.d([],u)
C.a.sl(t,C.f.p(this.gl(a),b.gl(b)))
C.a.bv(t,0,this.gl(a),a)
C.a.bv(t,this.gl(a),t.length,b)
return t},
kw:function(a,b,c,d){var u
H.C(d,H.bU(this,a,"z",0))
P.bu(b,c,this.gl(a),null,null,null)
for(u=b;u<c;++u)this.n(a,u,d)},
i:function(a){return P.lw(a,"[","]")}}
P.hH.prototype={}
P.hI.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.m(a)
u.a=t+": "
u.a+=H.m(b)},
$S:8}
P.ah.prototype={
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[H.bU(this,a,"ah",0),H.bU(this,a,"ah",1)]})
for(u=J.bB(this.gad(a));u.F();){t=u.gM(u)
b.$2(t,this.j(a,t))}},
gl:function(a){return J.aH(this.gad(a))},
i:function(a){return P.lB(a)},
$iF:1}
P.kn.prototype={
n:function(a,b,c){H.C(b,H.u(this,0))
H.C(c,H.u(this,1))
throw H.c(P.I("Cannot modify unmodifiable map"))}}
P.hJ.prototype={
j:function(a,b){return J.m2(this.a,b)},
n:function(a,b,c){J.lm(this.a,H.C(b,H.u(this,0)),H.C(c,H.u(this,1)))},
P:function(a,b){J.m4(this.a,H.n(b,{func:1,ret:-1,args:[H.u(this,0),H.u(this,1)]}))},
gl:function(a){return J.aH(this.a)},
i:function(a){return J.av(this.a)},
$iF:1}
P.ew.prototype={}
P.k9.prototype={
ah:function(a,b){var u
for(u=J.bB(H.k(b,"$ii",this.$ti,"$ai"));u.F();)this.h(0,u.gM(u))},
i:function(a){return P.lw(this,"{","}")},
N:function(a,b){var u,t,s
if(b<0)H.t(P.af(b,0,null,"index",null))
for(u=P.oX(this,this.r,H.u(this,0)),t=0;u.F();){s=u.d
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
$ii:1,
$imy:1}
P.eU.prototype={}
P.fn.prototype={}
P.fN.prototype={
kP:function(a,b,c,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
a0=P.bu(c,a0,b.length,null,null,null)
u=$.nG()
for(t=c,s=t,r=null,q=-1,p=-1,o=0;t<a0;t=n){n=t+1
m=C.c.K(b,t)
if(m===37){l=n+2
if(l<=a0){k=H.kN(C.c.K(b,n))
j=H.kN(C.c.K(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.al("")
g=r.a+=C.c.B(b,s,t)
r.a=g+H.c9(m)
s=n
continue}}throw H.c(P.a8("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.c.B(b,s,a0)
f=g.length
if(q>=0)P.m8(b,p,a0,q,o,f)
else{e=C.f.bu(f-1,4)+1
if(e===1)throw H.c(P.a8("Invalid base64 encoding length ",b,a0))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.c.b6(b,c,a0,g.charCodeAt(0)==0?g:g)}d=a0-c
if(q>=0)P.m8(b,p,a0,q,o,d)
else{e=C.f.bu(d,4)
if(e===1)throw H.c(P.a8("Invalid base64 encoding length ",b,a0))
if(e>1)b=C.c.b6(b,a0,a0,e===2?"==":"=")}return b},
$ac0:function(){return[[P.b,P.o],P.e]}}
P.fO.prototype={
$abF:function(){return[[P.b,P.o],P.e]}}
P.c0.prototype={}
P.bF.prototype={}
P.ha.prototype={
$ac0:function(){return[P.e,[P.b,P.o]]}}
P.hq.prototype={
i:function(a){return this.a}}
P.hp.prototype={
ho:function(a,b,c){var u,t,s,r,q,p
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
if(r>b)q.a+=C.c.B(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.nU(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u},
$abF:function(){return[P.e,P.e]}}
P.jn.prototype={
gkv:function(){return C.T}}
P.jp.prototype={
bh:function(a,b,c){var u,t,s
c=P.bu(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ku(t)
if(s.hA(a,b,c)!==c)s.ej(J.nO(a,c-1),0)
return new Uint8Array(t.subarray(0,H.pc(0,s.b,t.length)))},
cU:function(a){return this.bh(a,0,null)},
$abF:function(){return[P.e,[P.b,P.o]]}}
P.ku.prototype={
ej:function(a,b){var u,t,s,r,q
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
hA:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.c.a5(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.c.K(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.ej(r,C.c.K(a,p)))s=p}else if(r<=2047){q=this.b
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
P.jo.prototype={
bh:function(a,b,c){var u,t,s,r
H.k(a,"$ib",[P.o],"$ab")
u=P.oK(!1,a,b,c)
if(u!=null)return u
c=P.bu(b,c,J.aH(a),null,null,null)
t=new P.al("")
s=new P.ks(!1,t)
s.bh(a,b,c)
if(s.e>0){H.t(P.a8("Unfinished UTF-8 octet sequence",a,c))
t.a+=H.c9(65533)
s.d=0
s.e=0
s.f=0}r=t.a
return r.charCodeAt(0)==0?r:r},
cU:function(a){return this.bh(a,0,null)},
$abF:function(){return[[P.b,P.o],P.e]}}
P.ks.prototype={
bh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i
H.k(a,"$ib",[P.o],"$ab")
u=this.d
t=this.e
s=this.f
this.d=0
this.e=0
this.f=0
r=new P.kt(this,b,c,a)
$label0$0:for(q=J.cl(a),p=this.b,o=b;!0;o=j){$label1$1:if(t>0){do{if(o===c)break $label0$0
n=q.j(a,o)
if(typeof n!=="number")return n.c6()
if((n&192)!==128){m=P.a8("Bad UTF-8 encoding 0x"+C.f.bs(n,16),a,o)
throw H.c(m)}else{u=(u<<6|n&63)>>>0;--t;++o}}while(t>0)
m=s-1
if(m<0||m>=4)return H.h(C.H,m)
if(u<=C.H[m]){m=P.a8("Overlong encoding of 0x"+C.f.bs(u,16),a,o-s-1)
throw H.c(m)}if(u>1114111){m=P.a8("Character outside valid Unicode range: 0x"+C.f.bs(u,16),a,o-s-1)
throw H.c(m)}if(!this.c||u!==65279)p.a+=H.c9(u)
this.c=!1}for(m=o<c;m;){l=P.pj(a,o,c)
if(l>0){this.c=!1
k=o+l
r.$2(o,k)
if(k===c)break}else k=o
j=k+1
n=q.j(a,k)
if(typeof n!=="number")return n.a0()
if(n<0){i=P.a8("Negative UTF-8 code unit: -0x"+C.f.bs(-n,16),a,j-1)
throw H.c(i)}else{if((n&224)===192){u=n&31
t=1
s=1
continue $label0$0}if((n&240)===224){u=n&15
t=2
s=2
continue $label0$0}if((n&248)===240&&n<245){u=n&7
t=3
s=3
continue $label0$0}i=P.a8("Bad UTF-8 encoding 0x"+C.f.bs(n,16),a,j-1)
throw H.c(i)}}break $label0$0}if(t>0){this.d=u
this.e=t
this.f=s}}}
P.kt.prototype={
$2:function(a,b){this.a.b.a+=P.ej(this.d,a,b)},
$S:47}
P.S.prototype={}
P.aq.prototype={
D:function(a,b){if(b==null)return!1
return b instanceof P.aq&&this.a===b.a&&!0},
gL:function(a){var u=this.a
return(u^C.f.b2(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.o1(H.os(this))
t=P.dE(H.oq(this))
s=P.dE(H.om(this))
r=P.dE(H.on(this))
q=P.dE(H.op(this))
p=P.dE(H.or(this))
o=P.o2(H.oo(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.r.prototype={}
P.b5.prototype={
p:function(a,b){return new P.b5(C.f.p(this.a,b.ght()))},
v:function(a,b){return new P.b5(C.f.v(this.a,b.ght()))},
D:function(a,b){if(b==null)return!1
return b instanceof P.b5&&this.a===b.a},
gL:function(a){return C.f.gL(this.a)},
i:function(a){var u,t,s,r,q
u=new P.h7()
t=this.a
if(t<0)return"-"+new P.b5(0-t).i(0)
s=u.$1(C.f.ac(t,6e7)%60)
r=u.$1(C.f.ac(t,1e6)%60)
q=new P.h6().$1(t%1e6)
return""+C.f.ac(t,36e8)+":"+H.m(s)+":"+H.m(r)+"."+H.m(q)}}
P.h6.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:18}
P.h7.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:18}
P.bH.prototype={}
P.e6.prototype={
i:function(a){return"Throw of null."}}
P.aP.prototype={
gce:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gcd:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gce()+t+s
if(!this.a)return r
q=this.gcd()
p=P.hc(this.b)
return r+q+": "+p}}
P.ca.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.m(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.m(u)
else if(s>u)t=": Not in range "+H.m(u)+".."+H.m(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.m(u)}return t}}
P.hs.prototype={
gce:function(){return"RangeError"},
gcd:function(){var u,t
u=H.ae(this.b)
if(typeof u!=="number")return u.a0()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.m(t)},
gl:function(a){return this.f}}
P.jg.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jd.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cc.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fU.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.hc(u)+"."}}
P.i9.prototype={
i:function(a){return"Out of Memory"},
$ibH:1}
P.ei.prototype={
i:function(a){return"Stack Overflow"},
$ibH:1}
P.h0.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.eM.prototype={
i:function(a){return"Exception: "+this.a}}
P.hl.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.c
r=this.b
if(typeof r==="string"){if(s!=null)u=s<0||s>r.length
else u=!1
if(u)s=null
if(s==null){q=r.length>78?C.c.B(r,0,75)+"...":r
return t+"\n"+q}for(p=1,o=0,n=!1,m=0;m<s;++m){l=C.c.K(r,m)
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
g=""}f=C.c.B(r,i,j)
return t+h+f+g+"\n"+C.c.A(" ",s-i+h.length)+"^\n"}else return s!=null?t+(" (at offset "+H.m(s)+")"):t}}
P.bI.prototype={}
P.o.prototype={}
P.i.prototype={
c5:function(a,b){var u=H.an(this,"i",0)
return new H.d7(this,H.n(b,{func:1,ret:P.S,args:[u]}),[u])},
gl:function(a){var u,t
u=this.gY(this)
for(t=0;u.F();)++t
return t},
gaV:function(a){var u,t
u=this.gY(this)
if(!u.F())throw H.c(H.ht())
t=u.gM(u)
if(u.F())throw H.c(H.o9())
return t},
N:function(a,b){var u,t,s
if(b<0)H.t(P.af(b,0,null,"index",null))
for(u=this.gY(this),t=0;u.F();){s=u.gM(u)
if(b===t)return s;++t}throw H.c(P.a1(b,this,"index",null,t))},
i:function(a){return P.o7(this,"(",")")}}
P.b6.prototype={}
P.b.prototype={$ii:1}
P.F.prototype={}
P.M.prototype={
gL:function(a){return P.R.prototype.gL.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
D:function(a,b){return this===b},
gL:function(a){return H.cO(this)},
i:function(a){return"Instance of '"+H.c8(this)+"'"},
toString:function(){return this.i(this)}}
P.aA.prototype={}
P.e.prototype={$imo:1}
P.al.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u},
$iq1:1}
P.jl.prototype={
$2:function(a,b){var u,t,s,r
u=P.e
H.k(a,"$iF",[u,u],"$aF")
H.J(b)
t=J.dq(b).f5(b,"=")
if(t===-1){if(b!=="")J.lm(a,P.lK(b,0,b.length,this.a,!0),"")}else if(t!==0){s=C.c.B(b,0,t)
r=C.c.ax(b,t+1)
u=this.a
J.lm(a,P.lK(s,0,s.length,u,!0),P.lK(r,0,r.length,u,!0))}return a},
$S:45}
P.ji.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv4 address, "+a,this.a,b))},
$S:44}
P.jj.prototype={
$2:function(a,b){throw H.c(P.a8("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)},
$S:43}
P.jk.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.fD(C.c.B(this.b,a,b),null,16)
if(typeof u!=="number")return u.a0()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u},
$S:42}
P.ce.prototype={
gfs:function(){return this.b},
gd5:function(a){var u=this.c
if(u==null)return""
if(C.c.ab(u,"["))return C.c.B(u,1,u.length-1)
return u},
gbZ:function(a){var u=this.d
if(u==null)return P.mU(this.a)
return u},
gdi:function(a){var u=this.f
return u==null?"":u},
gf0:function(){var u=this.r
return u==null?"":u},
dn:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iF",[P.e,null],"$aF")
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
if(s&&!C.c.ab(d,"/"))d="/"+d
g=P.lJ(g,0,0,h)
return new P.ce(i,j,c,f,d,g,this.r)},
fh:function(a,b){return this.dn(a,null,null,null,null,null,null,b,null,null)},
gdj:function(){var u,t
if(this.Q==null){u=this.f
t=P.e
this.siP(new P.ew(P.mI(u==null?"":u,C.m),[t,t]))}return this.Q},
gf1:function(){return this.c!=null},
gf4:function(){return this.f!=null},
gf2:function(){return this.r!=null},
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
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!!J.X(b).$ilE)if(this.a==b.gc9())if(this.c!=null===b.gf1())if(this.b==b.gfs())if(this.gd5(this)==b.gd5(b))if(this.gbZ(this)==b.gbZ(b))if(this.e===b.gff(b)){u=this.f
t=u==null
if(!t===b.gf4()){if(t)u=""
if(u===b.gdi(b)){u=this.r
t=u==null
if(!t===b.gf2()){if(t)u=""
u=u===b.gf0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gL:function(a){var u=this.z
if(u==null){u=C.c.gL(this.i(0))
this.z=u}return u},
siP:function(a){var u=P.e
this.Q=H.k(a,"$iF",[u,u],"$aF")},
$ilE:1,
gc9:function(){return this.a},
gff:function(a){return this.e}}
P.ko.prototype={
$1:function(a){var u=this.b
if(typeof u!=="number")return u.p()
throw H.c(P.a8("Invalid port",this.a,u+1))},
$S:41}
P.kp.prototype={
$1:function(a){return P.fo(C.aa,a,C.m,!1)},
$S:24}
P.kr.prototype={
$2:function(a,b){var u,t
u=this.b
t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.m(P.fo(C.w,a,C.m,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.m(P.fo(C.w,b,C.m,!0))}},
$S:31}
P.kq.prototype={
$2:function(a,b){var u,t
H.J(a)
if(b==null||typeof b==="string")this.a.$2(a,H.J(b))
else for(u=J.bB(H.ni(b,"$ii")),t=this.a;u.F();)t.$2(a,H.J(u.gM(u)))},
$S:40}
P.jh.prototype={
gfq:function(){var u,t,s,r,q
u=this.c
if(u!=null)return u
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
u=u[0]+1
s=C.c.f6(t,"?",u)
r=t.length
if(s>=0){q=P.dk(t,s+1,r,C.u,!1)
r=s}else q=null
u=new P.jM(this,"data",null,null,null,P.dk(t,u,r,C.L,!1),q,null)
this.c=u
return u},
i:function(a){var u,t
u=this.b
if(0>=u.length)return H.h(u,0)
t=this.a
return u[0]===-1?"data:"+t:t}}
P.kA.prototype={
$1:function(a){return new Uint8Array(96)},
$S:38}
P.kz.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.h(u,a)
u=u[a]
J.nP(u,0,96,b)
return u},
$S:36}
P.kB.prototype={
$3:function(a,b,c){var u,t,s
for(u=b.length,t=0;t<u;++t){s=C.c.K(b,t)^96
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kC.prototype={
$3:function(a,b,c){var u,t,s
for(u=C.c.K(b,0),t=C.c.K(b,1);u<=t;++u){s=(u^96)>>>0
if(s>=a.length)return H.h(a,s)
a[s]=c}}}
P.kc.prototype={
gf1:function(){return this.c>0},
gf3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.G(t)
t=u+1<t
u=t}else u=!1
return u},
gf4:function(){var u=this.f
if(typeof u!=="number")return u.a0()
return u<this.r},
gf2:function(){return this.r<this.a.length},
ge4:function(){return this.b===4&&C.c.ab(this.a,"http")},
ge5:function(){return this.b===5&&C.c.ab(this.a,"https")},
gc9:function(){var u,t
u=this.b
if(u<=0)return""
t=this.x
if(t!=null)return t
if(this.ge4()){this.x="http"
u="http"}else if(this.ge5()){this.x="https"
u="https"}else if(u===4&&C.c.ab(this.a,"file")){this.x="file"
u="file"}else if(u===7&&C.c.ab(this.a,"package")){this.x="package"
u="package"}else{u=C.c.B(this.a,0,u)
this.x=u}return u},
gfs:function(){var u,t
u=this.c
t=this.b+3
return u>t?C.c.B(this.a,t,u-1):""},
gd5:function(a){var u=this.c
return u>0?C.c.B(this.a,u,this.d):""},
gbZ:function(a){var u
if(this.gf3()){u=this.d
if(typeof u!=="number")return u.p()
return P.fD(C.c.B(this.a,u+1,this.e),null,null)}if(this.ge4())return 80
if(this.ge5())return 443
return 0},
gff:function(a){return C.c.B(this.a,this.e,this.f)},
gdi:function(a){var u,t
u=this.f
t=this.r
if(typeof u!=="number")return u.a0()
return u<t?C.c.B(this.a,u+1,t):""},
gf0:function(){var u,t
u=this.r
t=this.a
return u<t.length?C.c.ax(t,u+1):""},
gdj:function(){var u=this.f
if(typeof u!=="number")return u.a0()
if(u>=this.r)return C.ab
u=P.e
return new P.ew(P.mI(this.gdi(this),C.m),[u,u])},
dn:function(a,b,c,d,e,f,g,h,i,j){var u,t,s
H.k(h,"$iF",[P.e,null],"$aF")
i=this.gc9()
u=i==="file"
t=this.c
j=t>0?C.c.B(this.a,this.b+3,t):""
f=this.gf3()?this.gbZ(this):null
t=this.c
if(t>0)c=C.c.B(this.a,t,this.d)
else if(j.length!==0||f!=null||u)c=""
t=this.a
d=C.c.B(t,this.e,this.f)
if(!u)s=c!=null&&d.length!==0
else s=!0
if(s&&!C.c.ab(d,"/"))d="/"+d
g=P.lJ(g,0,0,h)
s=this.r
if(s<t.length)b=C.c.ax(t,s+1)
return new P.ce(i,j,c,f,d,g,b)},
fh:function(a,b){return this.dn(a,null,null,null,null,null,null,b,null,null)},
gL:function(a){var u=this.y
if(u==null){u=C.c.gL(this.a)
this.y=u}return u},
D:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.X(b).$ilE&&this.a===b.i(0)},
i:function(a){return this.a},
$ilE:1}
P.jM.prototype={}
W.B.prototype={}
W.fG.prototype={
gl:function(a){return a.length}}
W.dv.prototype={
i:function(a){return String(a)},
$idv:1}
W.fH.prototype={
i:function(a){return String(a)}}
W.cq.prototype={$icq:1}
W.bX.prototype={$ibX:1}
W.bC.prototype={$ibC:1}
W.bZ.prototype={
dv:function(a,b,c){if(c!=null)return this.hB(a,b,P.pq(c,null))
return this.hC(a,b)},
fz:function(a,b){return this.dv(a,b,null)},
hB:function(a,b,c){return a.getContext(b,c)},
hC:function(a,b){return a.getContext(b)},
$ibZ:1,
$imb:1}
W.c_.prototype={
hD:function(a,b,c,d,e){return a.getImageData(b,c,d,e)},
kq:function(a,b,c,d,e,f){return a.drawImage(b,c,d,e,f)},
$ic_:1}
W.bD.prototype={
gl:function(a){return a.length}}
W.cv.prototype={$icv:1}
W.fX.prototype={
gl:function(a){return a.length}}
W.Y.prototype={$iY:1}
W.cw.prototype={
gl:function(a){return a.length}}
W.fY.prototype={}
W.b3.prototype={}
W.b4.prototype={}
W.fZ.prototype={
gl:function(a){return a.length}}
W.h_.prototype={
gl:function(a){return a.length}}
W.h2.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.cx.prototype={
jU:function(a,b){return a.adoptNode(b)},
dw:function(a,b){return a.getElementById(b)}}
W.h3.prototype={
i:function(a){return String(a)}}
W.dF.prototype={
kg:function(a,b){return a.createHTMLDocument(b)}}
W.dG.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.k(c,"$iab",[P.a7],"$aab")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[[P.ab,P.a7]]},
$az:function(){return[[P.ab,P.a7]]},
$ii:1,
$ai:function(){return[[P.ab,P.a7]]},
$ib:1,
$ab:function(){return[[P.ab,P.a7]]},
$aE:function(){return[[P.ab,P.a7]]}}
W.dH.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(this.gaU(a))+" x "+H.m(this.gaP(a))},
D:function(a,b){var u
if(b==null)return!1
if(!H.dp(b,"$iab",[P.a7],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbX(b)&&a.top===u.gc3(b)&&this.gaU(a)===u.gaU(b)&&this.gaP(a)===u.gaP(b)},
gL:function(a){return W.mS(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(this.gaU(a)),C.e.gL(this.gaP(a)))},
geu:function(a){return a.bottom},
gaP:function(a){return a.height},
gbX:function(a){return a.left},
gc1:function(a){return a.right},
gc3:function(a){return a.top},
gaU:function(a){return a.width},
$iab:1,
$aab:function(){return[P.a7]}}
W.h4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[P.e]},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
W.h5.prototype={
gl:function(a){return a.length}}
W.jK.prototype={
gl:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.f(u[b],"$iV")},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.b
if(b<0||b>=u.length)return H.h(u,b)
J.ln(this.a,c,u[b])},
h:function(a,b){J.m3(this.a,b)
return b},
gY:function(a){var u=this.lk(this)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$az:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
W.V.prototype={
gjY:function(a){return new W.jN(a)},
gcT:function(a){return new W.jK(a,a.children)},
gey:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
ao:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.mg
if(u==null){u=H.d([],[W.aF])
t=new W.e5(u)
C.a.h(u,W.mR(null))
C.a.h(u,W.mT())
$.mg=t
d=t}else d=u
u=$.mf
if(u==null){u=new W.fp(d)
$.mf=u
c=u}else{u.a=d
c=u}}if($.bn==null){u=document
t=u.implementation
t=(t&&C.U).kg(t,"")
$.bn=t
$.lu=t.createRange()
t=$.bn
t.toString
t=t.createElement("base")
H.f(t,"$icq")
t.href=u.baseURI
u=$.bn.head;(u&&C.W).G(u,t)}u=$.bn
if(u.body==null){u.toString
t=u.createElement("body")
u.body=H.f(t,"$ibC")}u=$.bn
if(!!this.$ibC)s=u.body
else{t=a.tagName
u.toString
s=u.createElement(t)
u=$.bn.body;(u&&C.p).G(u,s)}if("createContextualFragment" in window.Range.prototype&&!C.a.a_(C.a8,a.tagName)){u=$.lu;(u&&C.N).fG(u,s)
u=$.lu
r=(u&&C.N).ke(u,b)}else{s.innerHTML=b
r=$.bn.createDocumentFragment()
for(u=J.ad(r);t=s.firstChild,t!=null;)u.G(r,t)}u=$.bn.body
if(s==null?u!=null:s!==u)J.m6(s)
c.dA(r)
C.z.jU(document,r)
return r},
kf:function(a,b,c){return this.ao(a,b,c,null)},
fJ:function(a,b,c,d){a.textContent=null
this.G(a,this.ao(a,b,c,d))},
fI:function(a,b){return this.fJ(a,b,null,null)},
b8:function(a,b){return a.getAttribute(b)},
iR:function(a,b){return a.removeAttribute(b)},
fH:function(a,b,c){return a.setAttribute(b,c)},
$iV:1,
glf:function(a){return a.tagName}}
W.h9.prototype={
$1:function(a){return!!J.X(H.f(a,"$iH")).$iV},
$S:28}
W.p.prototype={$ip:1}
W.j.prototype={
jQ:function(a,b,c,d){H.n(c,{func:1,args:[W.p]})
if(c!=null)this.hf(a,b,c,!1)},
hf:function(a,b,c,d){return a.addEventListener(b,H.ci(H.n(c,{func:1,args:[W.p]}),1),!1)},
$ij:1}
W.aJ.prototype={$iaJ:1}
W.cA.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaJ")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aJ]},
$az:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$icA:1,
$aE:function(){return[W.aJ]}}
W.hg.prototype={
gl:function(a){return a.length}}
W.hk.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.dL.prototype={}
W.dM.prototype={
iX:function(a,b,c,d){return a.replaceState(b,c,d)},
gl:function(a){return a.length}}
W.c4.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ic4:1,
$aE:function(){return[W.H]}}
W.dN.prototype={}
W.bo.prototype={$ibo:1,
gez:function(a){return a.data}}
W.cD.prototype={$icD:1,$imb:1}
W.cE.prototype={$icE:1}
W.b7.prototype={$ib7:1}
W.dT.prototype={}
W.dW.prototype={
i:function(a){return String(a)},
$idW:1}
W.cH.prototype={}
W.hS.prototype={
gl:function(a){return a.length}}
W.hT.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.e])
this.P(a,new W.hU(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hU.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.hV.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.e])
this.P(a,new W.hW(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.hW.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.aT.prototype={$iaT:1}
W.hX.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaT")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aT]},
$az:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ib:1,
$ab:function(){return[W.aT]},
$aE:function(){return[W.aT]}}
W.ai.prototype={$iai:1}
W.at.prototype={
gaV:function(a){var u,t
u=this.a
t=u.childNodes.length
if(t===0)throw H.c(P.mz("No elements"))
if(t>1)throw H.c(P.mz("More than one element"))
return u.firstChild},
ah:function(a,b){var u,t,s,r,q
H.k(b,"$ii",[W.H],"$ai")
u=b.a
t=this.a
if(u!==t)for(s=u.childNodes.length,r=J.ad(t),q=0;q<s;++q)r.G(t,u.firstChild)
return},
n:function(a,b,c){var u,t
H.f(c,"$iH")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.h(t,b)
J.ln(u,c,t[b])},
gY:function(a){var u=this.a.childNodes
return new W.dJ(u,u.length,-1,[H.bU(C.ac,u,"E",0)])},
gl:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$az:function(){return[W.H]},
$ai:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
l5:function(a){var u=a.parentNode
if(u!=null)J.fE(u,a)},
l9:function(a,b){var u,t
try{u=a.parentNode
J.ln(u,b,a)}catch(t){H.ak(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.fN(a):u},
G:function(a,b){return a.appendChild(H.f(b,"$iH"))},
iS:function(a,b){return a.removeChild(b)},
iW:function(a,b,c){return a.replaceChild(b,c)},
$iH:1}
W.cM.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.aU.prototype={$iaU:1,
gl:function(a){return a.length}}
W.ic.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaU")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aU]},
$az:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$aE:function(){return[W.aU]}}
W.ea.prototype={
ke:function(a,b){return a.createContextualFragment(b)},
fG:function(a,b){return a.selectNodeContents(b)}}
W.ip.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.e])
this.P(a,new W.iq(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
W.iq.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
W.is.prototype={
gl:function(a){return a.length}}
W.aV.prototype={$iaV:1}
W.iD.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaV")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aV]},
$az:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$aE:function(){return[W.aV]}}
W.aW.prototype={$iaW:1}
W.iE.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaW")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aW]},
$az:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$aE:function(){return[W.aW]}}
W.aX.prototype={$iaX:1,
gl:function(a){return a.length}}
W.iH.prototype={
j:function(a,b){return this.e1(a,H.J(b))},
n:function(a,b,c){this.j4(a,b,c)},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=0;!0;++u){t=this.hH(a,u)
if(t==null)return
b.$2(t,this.e1(a,t))}},
gad:function(a){var u=H.d([],[P.e])
this.P(a,new W.iI(u))
return u},
gl:function(a){return a.length},
e1:function(a,b){return a.getItem(b)},
hH:function(a,b){return a.key(b)},
j4:function(a,b,c){return a.setItem(b,c)},
$aah:function(){return[P.e,P.e]},
$iF:1,
$aF:function(){return[P.e,P.e]}}
W.iI.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:31}
W.aK.prototype={$iaK:1}
W.bd.prototype={$ibd:1}
W.ek.prototype={
ao:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=W.o3("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.at(t).ah(0,new W.at(u))
return t},
hF:function(a,b){return a.insertRow(b)}}
W.el.prototype={
ao:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaV(u)
s.toString
u=new W.at(s)
r=u.gaV(u)
t.toString
r.toString
new W.at(t).ah(0,new W.at(r))
return t},
e3:function(a,b){return a.insertCell(b)}}
W.iO.prototype={
ao:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.ca(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.o.ao(u.createElement("table"),b,c,d)
u.toString
u=new W.at(u)
s=u.gaV(u)
t.toString
s.toString
new W.at(t).ah(0,new W.at(s))
return t}}
W.cU.prototype={$icU:1}
W.aY.prototype={$iaY:1}
W.aL.prototype={$iaL:1}
W.iQ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaL")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aL]},
$az:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$ib:1,
$ab:function(){return[W.aL]},
$aE:function(){return[W.aL]}}
W.iR.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaY")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aY]},
$az:function(){return[W.aY]},
$ii:1,
$ai:function(){return[W.aY]},
$ib:1,
$ab:function(){return[W.aY]},
$aE:function(){return[W.aY]}}
W.iV.prototype={
gl:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.b_.prototype={$ib_:1}
W.iZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaZ")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aZ]},
$az:function(){return[W.aZ]},
$ii:1,
$ai:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$aE:function(){return[W.aZ]}}
W.j_.prototype={
gl:function(a){return a.length}}
W.bQ.prototype={}
W.jm.prototype={
i:function(a){return String(a)}}
W.jC.prototype={$imb:1}
W.jD.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gkm:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.I("deltaY is not supported"))},
gkl:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.I("deltaX is not supported"))},
$ibi:1}
W.d8.prototype={
iY:function(a,b){return a.requestAnimationFrame(H.ci(H.n(b,{func:1,ret:-1,args:[P.a7]}),1))},
hu:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.d9.prototype={$id9:1}
W.jL.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iY")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.Y]},
$az:function(){return[W.Y]},
$ii:1,
$ai:function(){return[W.Y]},
$ib:1,
$ab:function(){return[W.Y]},
$aE:function(){return[W.Y]}}
W.eH.prototype={
i:function(a){return"Rectangle ("+H.m(a.left)+", "+H.m(a.top)+") "+H.m(a.width)+" x "+H.m(a.height)},
D:function(a,b){var u
if(b==null)return!1
if(!H.dp(b,"$iab",[P.a7],"$aab"))return!1
u=J.ad(b)
return a.left===u.gbX(b)&&a.top===u.gc3(b)&&a.width===u.gaU(b)&&a.height===u.gaP(b)},
gL:function(a){return W.mS(C.e.gL(a.left),C.e.gL(a.top),C.e.gL(a.width),C.e.gL(a.height))},
gaP:function(a){return a.height},
gaU:function(a){return a.width}}
W.k_.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaQ")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aQ]},
$az:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$aE:function(){return[W.aQ]}}
W.eZ.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iH")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.H]},
$az:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$aE:function(){return[W.H]}}
W.kd.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaX")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aX]},
$az:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$aE:function(){return[W.aX]}}
W.kh.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return a[b]},
n:function(a,b,c){H.f(c,"$iaK")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iL:1,
$aL:function(){return[W.aK]},
$az:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$aE:function(){return[W.aK]}}
W.jJ.prototype={
P:function(a,b){var u,t,s,r,q,p
H.n(b,{func:1,ret:-1,args:[P.e,P.e]})
for(u=this.gad(this),t=u.length,s=this.a,r=J.ad(s),q=0;q<u.length;u.length===t||(0,H.D)(u),++q){p=u[q]
b.$2(p,r.b8(s,p))}},
gad:function(a){var u,t,s,r,q
u=this.a.attributes
t=H.d([],[P.e])
for(s=u.length,r=0;r<s;++r){if(r>=u.length)return H.h(u,r)
q=H.f(u[r],"$id9")
if(q.namespaceURI==null)C.a.h(t,q.name)}return t},
$aah:function(){return[P.e,P.e]},
$aF:function(){return[P.e,P.e]}}
W.jN.prototype={
j:function(a,b){return J.lo(this.a,H.J(b))},
n:function(a,b,c){J.nT(this.a,b,c)},
gl:function(a){return this.gad(this).length}}
W.jO.prototype={}
W.lH.prototype={}
W.jP.prototype={}
W.jQ.prototype={
$1:function(a){return this.a.$1(H.f(a,"$ip"))},
$S:35}
W.bS.prototype={
h_:function(a){var u,t
u=$.m0()
if(u.gkJ(u)){for(t=0;t<262;++t)u.n(0,C.a7[t],W.pB())
for(t=0;t<12;++t)u.n(0,C.B[t],W.pC())}},
b3:function(a){return $.nH().a_(0,W.cy(a))},
aA:function(a,b,c){var u,t,s
u=W.cy(a)
t=$.m0()
s=t.j(0,H.m(u)+"::"+b)
if(s==null)s=t.j(0,"*::"+b)
if(s==null)return!1
return H.lP(s.$4(a,b,c,this))},
$iaF:1}
W.E.prototype={
gY:function(a){return new W.dJ(a,this.gl(a),-1,[H.bU(this,a,"E",0)])}}
W.e5.prototype={
b3:function(a){return C.a.ep(this.a,new W.i4(a))},
aA:function(a,b,c){return C.a.ep(this.a,new W.i3(a,b,c))},
$iaF:1}
W.i4.prototype={
$1:function(a){return H.f(a,"$iaF").b3(this.a)},
$S:29}
W.i3.prototype={
$1:function(a){return H.f(a,"$iaF").aA(this.a,this.b,this.c)},
$S:29}
W.f6.prototype={
h9:function(a,b,c,d){var u,t,s
this.a.ah(0,c)
u=b.c5(0,new W.ka())
t=b.c5(0,new W.kb())
this.b.ah(0,u)
s=this.c
s.ah(0,C.I)
s.ah(0,t)},
b3:function(a){return this.a.a_(0,W.cy(a))},
aA:function(a,b,c){var u,t
u=W.cy(a)
t=this.c
if(t.a_(0,H.m(u)+"::"+b))return this.d.jV(c)
else if(t.a_(0,"*::"+b))return this.d.jV(c)
else{t=this.b
if(t.a_(0,H.m(u)+"::"+b))return!0
else if(t.a_(0,"*::"+b))return!0
else if(t.a_(0,H.m(u)+"::*"))return!0
else if(t.a_(0,"*::*"))return!0}return!1},
$iaF:1}
W.ka.prototype={
$1:function(a){return!C.a.a_(C.B,H.J(a))},
$S:30}
W.kb.prototype={
$1:function(a){return C.a.a_(C.B,H.J(a))},
$S:30}
W.kj.prototype={
aA:function(a,b,c){if(this.fS(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.lo(a,"template")==="")return this.e.a_(0,b)
return!1}}
W.kk.prototype={
$1:function(a){return"TEMPLATE::"+H.m(H.J(a))},
$S:24}
W.ki.prototype={
b3:function(a){var u=J.X(a)
if(!!u.$icP)return!1
u=!!u.$iq
if(u&&W.cy(a)==="foreignObject")return!1
if(u)return!0
return!1},
aA:function(a,b,c){if(b==="is"||C.c.ab(b,"on"))return!1
return this.b3(a)},
$iaF:1}
W.dJ.prototype={
F:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.se2(J.m2(this.a,u))
this.c=u
return!0}this.se2(null)
this.c=t
return!1},
gM:function(a){return this.d},
se2:function(a){this.d=H.C(a,H.u(this,0))},
$ib6:1}
W.aF.prototype={}
W.k8.prototype={$iqe:1}
W.fp.prototype={
dA:function(a){new W.kv(this).$2(a,null)},
be:function(a,b){if(b==null)J.m6(a)
else J.fE(b,a)},
j2:function(a,b){var u,t,s,r,q,p,o,n
u=!0
t=null
s=null
try{t=J.nQ(a)
s=J.lo(t.a,"is")
r=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
u=r?!0:!(a.attributes instanceof NamedNodeMap)}catch(o){H.ak(o)}q="element unprintable"
try{q=J.av(a)}catch(o){H.ak(o)}try{p=W.cy(a)
this.j1(H.f(a,"$iV"),b,u,q,p,H.f(t,"$iF"),H.J(s))}catch(o){if(H.ak(o) instanceof P.aP)throw o
else{this.be(a,b)
window
n="Removing corrupted element "+H.m(q)
if(typeof console!="undefined")window.console.warn(n)}}},
j1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p
if(c){this.be(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!this.a.b3(a)){this.be(a,b)
window
u="Removing disallowed element <"+H.m(e)+"> from "+H.m(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!this.a.aA(a,"is",g)){this.be(a,b)
window
u="Removing disallowed type extension <"+H.m(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gad(f)
t=H.d(u.slice(0),[H.u(u,0)])
for(s=f.gad(f).length-1,u=f.a,r=J.ad(u);s>=0;--s){if(s>=t.length)return H.h(t,s)
q=t[s]
if(!this.a.aA(a,J.nV(q),r.b8(u,q))){window
p="Removing disallowed attribute <"+H.m(e)+" "+q+'="'+H.m(r.b8(u,q))+'">'
if(typeof console!="undefined")window.console.warn(p)
r.b8(u,q)
r.iR(u,q)}}if(!!J.X(a).$icU)this.dA(a.content)},
$iq_:1}
W.kv.prototype={
$2:function(a,b){var u,t,s,r,q,p
s=this.a
switch(a.nodeType){case 1:s.j2(a,b)
break
case 8:case 11:case 3:case 4:break
default:s.be(a,b)}u=a.lastChild
for(s=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(r){H.ak(r)
q=H.f(u,"$iH")
if(s){p=q.parentNode
if(p!=null)J.fE(p,q)}else J.fE(a,q)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.f(t,"$iH")}},
$S:46}
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
W.df.prototype={}
W.dg.prototype={}
W.f7.prototype={}
W.f8.prototype={}
W.fc.prototype={}
W.ff.prototype={}
W.fg.prototype={}
W.dh.prototype={}
W.di.prototype={}
W.fi.prototype={}
W.fj.prototype={}
W.fq.prototype={}
W.fr.prototype={}
W.fs.prototype={}
W.ft.prototype={}
W.fu.prototype={}
W.fv.prototype={}
W.fw.prototype={}
W.fx.prototype={}
W.fy.prototype={}
W.fz.prototype={}
P.ke.prototype={
eZ:function(a){var u,t,s
u=this.a
t=u.length
for(s=0;s<t;++s)if(u[s]===a)return s
C.a.h(u,a)
C.a.h(this.b,null)
return t},
dt:function(a){var u,t,s,r,q
u={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
t=J.X(a)
if(!!t.$iaq)return new Date(a.a)
if(!!t.$iox)throw H.c(P.je("structured clone of RegExp"))
if(!!t.$iaJ)return a
if(!!t.$ibX)return a
if(!!t.$icA)return a
if(!!t.$ibo)return a
if(!!t.$icJ||!!t.$ibN)return a
if(!!t.$iF){s=this.eZ(a)
r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
u.a=q
if(q!=null)return q
q={}
u.a=q
C.a.n(r,s,q)
t.P(a,new P.kg(u,this))
return u.a}if(!!t.$ib){s=this.eZ(a)
u=this.b
if(s>=u.length)return H.h(u,s)
q=u[s]
if(q!=null)return q
return this.kd(a,s)}throw H.c(P.je("structured clone of other type"))},
kd:function(a,b){var u,t,s,r
u=J.cl(a)
t=u.gl(a)
s=new Array(t)
C.a.n(this.b,b,s)
for(r=0;r<t;++r)C.a.n(s,r,this.dt(u.j(a,r)))
return s}}
P.kg.prototype={
$2:function(a,b){this.a.a[a]=this.b.dt(b)},
$S:8}
P.fm.prototype={$ibo:1,
gez:function(a){return this.a}}
P.kG.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.kf.prototype={}
P.hh.prototype={
gbA:function(){var u,t,s
u=this.b
t=H.an(u,"z",0)
s=W.V
return new H.hK(new H.d7(u,H.n(new P.hi(),{func:1,ret:P.S,args:[t]}),[t]),H.n(new P.hj(),{func:1,ret:s,args:[t]}),[t,s])},
n:function(a,b,c){var u
H.f(c,"$iV")
u=this.gbA()
J.nS(u.b.$1(J.fF(u.a,b)),c)},
h:function(a,b){J.m3(this.b.a,b)},
gl:function(a){return J.aH(this.gbA().a)},
j:function(a,b){var u=this.gbA()
return u.b.$1(J.fF(u.a,b))},
gY:function(a){var u=P.mk(this.gbA(),!1,W.V)
return new J.aw(u,u.length,0,[H.u(u,0)])},
$az:function(){return[W.V]},
$ai:function(){return[W.V]},
$ab:function(){return[W.V]}}
P.hi.prototype={
$1:function(a){return!!J.X(H.f(a,"$iH")).$iV},
$S:28}
P.hj.prototype={
$1:function(a){return H.l(H.f(a,"$iH"),"$iV")},
$S:34}
P.k3.prototype={
gc1:function(a){var u=this.a
if(typeof u!=="number")return u.p()
return H.C(u+this.c,H.u(this,0))},
geu:function(a){var u=this.b
if(typeof u!=="number")return u.p()
return H.C(u+this.d,H.u(this,0))},
i:function(a){return"Rectangle ("+H.m(this.a)+", "+H.m(this.b)+") "+this.c+" x "+this.d},
D:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.dp(b,"$iab",[P.a7],"$aab")){u=this.a
t=J.ad(b)
if(u==t.gbX(b)){s=this.b
if(s==t.gc3(b)){if(typeof u!=="number")return u.p()
r=H.u(this,0)
if(H.C(u+this.c,r)===t.gc1(b)){if(typeof s!=="number")return s.p()
u=H.C(s+this.d,r)===t.geu(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gL:function(a){var u,t,s,r,q
u=this.a
t=J.du(u)
s=this.b
r=J.du(s)
if(typeof u!=="number")return u.p()
q=H.u(this,0)
u=C.f.gL(H.C(u+this.c,q))
if(typeof s!=="number")return s.p()
q=C.f.gL(H.C(s+this.d,q))
return P.oW(P.k1(P.k1(P.k1(P.k1(0,t),r),u),q))}}
P.ab.prototype={
gbX:function(a){return this.a},
gc3:function(a){return this.b},
gaU:function(a){return this.c},
gaP:function(a){return this.d}}
P.b8.prototype={$ib8:1}
P.hz.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.f(c,"$ib8")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$az:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ib:1,
$ab:function(){return[P.b8]},
$aE:function(){return[P.b8]}}
P.bc.prototype={$ibc:1}
P.i7.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.f(c,"$ibc")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$az:function(){return[P.bc]},
$ii:1,
$ai:function(){return[P.bc]},
$ib:1,
$ab:function(){return[P.bc]},
$aE:function(){return[P.bc]}}
P.ie.prototype={
gl:function(a){return a.length}}
P.cP.prototype={$icP:1}
P.iN.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.J(c)
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$az:function(){return[P.e]},
$ii:1,
$ai:function(){return[P.e]},
$ib:1,
$ab:function(){return[P.e]},
$aE:function(){return[P.e]}}
P.q.prototype={
gcT:function(a){return new P.hh(a,new W.at(a))},
ao:function(a,b,c,d){var u,t,s,r,q,p
u=H.d([],[W.aF])
C.a.h(u,W.mR(null))
C.a.h(u,W.mT())
C.a.h(u,new W.ki())
c=new W.fp(new W.e5(u))
t='<svg version="1.1">'+b+"</svg>"
u=document
s=u.body
r=(s&&C.p).kf(s,t,c)
q=u.createDocumentFragment()
r.toString
u=new W.at(r)
p=u.gaV(u)
for(u=J.ad(q);s=p.firstChild,s!=null;)u.G(q,s)
return q},
$iq:1}
P.bf.prototype={$ibf:1}
P.j0.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return this.aF(a,b)},
n:function(a,b,c){H.f(c,"$ibf")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
aF:function(a,b){return a.getItem(b)},
$az:function(){return[P.bf]},
$ii:1,
$ai:function(){return[P.bf]},
$ib:1,
$ab:function(){return[P.bf]},
$aE:function(){return[P.bf]}}
P.eR.prototype={}
P.eS.prototype={}
P.f1.prototype={}
P.f2.prototype={}
P.fd.prototype={}
P.fe.prototype={}
P.fk.prototype={}
P.fl.prototype={}
P.T.prototype={$ii:1,
$ai:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$ioH:1}
P.fJ.prototype={
gl:function(a){return a.length}}
P.fK.prototype={
j:function(a,b){return P.bv(a.get(H.J(b)))},
P:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[P.e,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.bv(t.value[1]))}},
gad:function(a){var u=H.d([],[P.e])
this.P(a,new P.fL(u))
return u},
gl:function(a){return a.size},
n:function(a,b,c){throw H.c(P.I("Not supported"))},
$aah:function(){return[P.e,null]},
$iF:1,
$aF:function(){return[P.e,null]}}
P.fL.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:9}
P.fM.prototype={
gl:function(a){return a.length}}
P.bW.prototype={}
P.i8.prototype={
gl:function(a){return a.length}}
P.eF.prototype={}
P.dy.prototype={$idy:1}
P.dK.prototype={$idK:1}
P.e9.prototype={$ie9:1}
P.cb.prototype={
cI:function(a,b){return a.activeTexture(b)},
eq:function(a,b,c){return a.attachShader(b,c)},
aB:function(a,b,c){return a.bindBuffer(b,c)},
k_:function(a,b,c){return a.bindFramebuffer(b,c)},
aL:function(a,b,c){return a.bindTexture(b,c)},
k0:function(a,b,c){return a.blendFunc(b,c)},
ev:function(a,b,c,d){return a.bufferData(b,c,d)},
k7:function(a,b){return a.clear(b)},
k8:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
k9:function(a,b){return a.clearDepth(b)},
kb:function(a,b){return a.compileShader(b)},
kh:function(a,b){return a.createShader(b)},
kj:function(a,b){return a.deleteProgram(b)},
kk:function(a,b){return a.deleteShader(b)},
kn:function(a,b){return a.depthFunc(b)},
ko:function(a,b){return a.disable(b)},
eB:function(a,b){return a.disableVertexAttribArray(b)},
kp:function(a,b,c,d,e){return a.drawElements(b,c,H.ae(d),H.ae(e))},
cY:function(a,b){return a.enable(b)},
eD:function(a,b){return a.enableVertexAttribArray(b)},
ft:function(a,b,c){return a.getActiveAttrib(b,c)},
fu:function(a,b,c){return a.getActiveUniform(b,c)},
fv:function(a,b,c){return a.getAttribLocation(b,c)},
dz:function(a,b){return a.getParameter(b)},
fA:function(a,b){return a.getProgramInfoLog(b)},
c7:function(a,b,c){return a.getProgramParameter(b,c)},
fB:function(a,b){return a.getShaderInfoLog(b)},
fC:function(a,b,c){return a.getShaderParameter(b,c)},
fD:function(a,b,c){return a.getUniformLocation(b,c)},
kL:function(a,b){return a.linkProgram(b)},
l3:function(a,b,c){return a.pixelStorei(b,c)},
fL:function(a,b,c){return a.shaderSource(b,c)},
lh:function(a,b,c,d,e,f,g,h,i,j){var u,t
u=J.X(g)
if(!!u.$ibo)t=!0
else t=!1
if(t){this.je(a,b,c,d,e,f,P.pr(g))
return}if(!!u.$icD)u=!0
else u=!1
if(u){this.jf(a,b,c,d,e,f,g)
return}throw H.c(P.dw("Incorrect number or type of arguments"))},
lg:function(a,b,c,d,e,f,g){return this.lh(a,b,c,d,e,f,g,null,null,null)},
je:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
jf:function(a,b,c,d,e,f,g){return a.texImage2D(b,c,d,e,f,g)},
c2:function(a,b,c,d){return a.texParameteri(b,c,d)},
R:function(a,b,c){return a.uniform1f(b,c)},
W:function(a,b,c){return a.uniform1i(b,c)},
C:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
fo:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
fp:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
ds:function(a,b){return a.useProgram(b)},
ln:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
lo:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$icb:1}
P.ed.prototype={$ied:1}
P.em.prototype={$iem:1}
P.eu.prototype={$ieu:1}
P.iF.prototype={
gl:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.a1(b,a,null,null,null))
return P.bv(this.hG(a,b))},
n:function(a,b,c){H.f(c,"$iF")
throw H.c(P.I("Cannot assign element of immutable List."))},
N:function(a,b){return this.j(a,b)},
hG:function(a,b){return a.item(b)},
$az:function(){return[[P.F,,,]]},
$ii:1,
$ai:function(){return[[P.F,,,]]},
$ib:1,
$ab:function(){return[[P.F,,,]]},
$aE:function(){return[[P.F,,,]]}}
P.f9.prototype={}
P.fa.prototype={}
O.a5.prototype={
by:function(a){this.shL(H.d([],[a]))
this.sea(null)
this.se6(null)
this.seb(null)},
dB:function(a,b,c){var u=H.an(this,"a5",0)
H.n(b,{func:1,ret:P.S,args:[[P.i,u]]})
u={func:1,ret:-1,args:[P.o,[P.i,u]]}
H.n(a,u)
H.n(c,u)
this.sea(b)
this.se6(a)
this.seb(c)},
b9:function(a,b){return this.dB(a,null,b)},
e9:function(a){var u
H.k(a,"$ii",[H.an(this,"a5",0)],"$ai")
u=this.b
if(u!=null)return u.$1(a)
return!0},
dI:function(a,b){var u
H.k(b,"$ii",[H.an(this,"a5",0)],"$ai")
u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gY:function(a){var u=this.a
return new J.aw(u,u.length,0,[H.u(u,0)])},
N:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.an(this,"a5",0)
H.C(b,u)
u=[u]
if(this.e9(H.d([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.dI(s,H.d([b],u))}},
ah:function(a,b){var u,t
H.k(b,"$ii",[H.an(this,"a5",0)],"$ai")
if(this.e9(b)){u=this.a
t=u.length
C.a.ah(u,b)
this.dI(t,b)}},
shL:function(a){this.a=H.k(a,"$ib",[H.an(this,"a5",0)],"$ab")},
sea:function(a){this.b=H.n(a,{func:1,ret:P.S,args:[[P.i,H.an(this,"a5",0)]]})},
se6:function(a){this.c=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.an(this,"a5",0)]]})},
seb:function(a){this.d=H.n(a,{func:1,ret:-1,args:[P.o,[P.i,H.an(this,"a5",0)]]})},
$ii:1}
O.cG.prototype={
gl:function(a){return this.a.length},
gu:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
fY:function(a){var u=this.b
if(u!=null)u.J(a)},
aW:function(){return this.fY(null)},
ga8:function(a){var u=this.a
if(u.length>0)return C.a.gaD(u)
else return V.c6()},
c0:function(a){var u=this.a
if(a==null)C.a.h(u,V.c6())
else C.a.h(u,a)
this.aW()},
aR:function(){var u=this.a
if(u.length>0){u.pop()
this.aW()}},
sck:function(a){this.a=H.k(a,"$ib",[V.ax],"$ab")}}
E.fP.prototype={}
E.ar.prototype={
sae:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gu().O(0,this.gfc())
t=this.c
if(t!=null)t.gu().h(0,this.gfc())
s=new D.O("shape",u,this.c,this,[F.ee])
s.b=!0
this.b5(s)}},
aw:function(a,b){var u
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aw(0,b)},
aj:function(a){var u,t
u=a.dx
C.a.h(u.a,u.ga8(u))
u.aW()
a.dh(this.f)
u=a.dy
t=(u&&C.a).gaD(u)
if(t!=null&&this.d!=null)t.fg(a,this)
for(u=this.y.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aj(a)
a.dg()
a.dx.aR()},
gu:function(){var u=this.z
if(u==null){u=D.P()
this.z=u}return u},
b5:function(a){var u=this.z
if(u!=null)u.J(a)},
aa:function(){return this.b5(null)},
fd:function(a){H.f(a,"$iA")
this.e=null
this.b5(a)},
kV:function(){return this.fd(null)},
fb:function(a){this.b5(H.f(a,"$iA"))},
kS:function(){return this.fb(null)},
kR:function(a,b){var u,t,s,r,q,p,o
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.length,t=this.gfa(),s={func:1,ret:-1,args:[D.A]},r=[s],q=0;q<b.length;b.length===u||(0,H.D)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.c2()
o.sam(null)
o.sb0(null)
o.c=null
o.d=0
p.z=o}H.n(t,s)
if(o.a==null)o.sam(H.d([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aa()},
kU:function(a,b){var u,t
H.k(b,"$ii",[E.ar],"$ai")
for(u=b.gY(b),t=this.gfa();u.F();)u.gM(u).gu().O(0,t)
this.aa()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
sfZ:function(a,b){this.y=H.k(b,"$ia5",[E.ar],"$aa5")},
$ibb:1}
E.ik.prototype={
fV:function(a,b){var u,t
this.c=512
this.d=512
this.e=0
u=new P.aq(Date.now(),!1)
this.f=u
this.r=u
this.x=u
this.y=0
this.z=null
this.Q=null
this.ch=null
this.cx=null
u=new O.cG()
t=[V.ax]
u.sck(H.d([],t))
u.b=null
u.gu().h(0,new E.il(this))
this.cy=u
u=new O.cG()
u.sck(H.d([],t))
u.b=null
u.gu().h(0,new E.im(this))
this.db=u
u=new O.cG()
u.sck(H.d([],t))
u.b=null
u.gu().h(0,new E.io(this))
this.dx=u
this.sjd(H.d([],[O.bP]))
u=this.dy;(u&&C.a).h(u,null)
this.sj9(new H.aS([P.e,A.cQ]))},
gl4:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.ga8(u)
t=this.db
t=u.A(0,t.ga8(t))
this.z=t
u=t}return u},
dh:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gaD(u):a;(u&&C.a).h(u,t)},
dg:function(){var u=this.dy
if(u.length>1)u.pop()},
eo:function(a){var u=a.b
if(u.length===0)throw H.c(P.x("May not cache a shader with no name."))
if(this.fr.bG(0,u))throw H.c(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.n(0,u,a)},
sjd:function(a){this.dy=H.k(a,"$ib",[O.bP],"$ab")},
sj9:function(a){this.fr=H.k(a,"$iF",[P.e,A.cQ],"$aF")}}
E.il.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.ch=null},
$S:11}
E.im.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:11}
E.io.prototype={
$1:function(a){var u
H.f(a,"$iA")
u=this.a
u.ch=null
u.cx=null},
$S:11}
E.eq.prototype={
dL:function(a){H.f(a,"$iA")
this.fi()},
dK:function(){return this.dL(null)},
gkD:function(){var u,t,s
u=Date.now()
t=C.f.ac(P.me(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.aq(u,!1)
return s/t},
ee:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.A()
if(typeof u!=="number")return H.G(u)
s=C.e.d4(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.A()
r=C.e.d4(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.mC(C.y,this.gla())}},
fi:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.n(new E.iU(this),{func:1,ret:-1,args:[P.a7]})
C.P.hu(u)
C.P.iY(u,W.n6(t,P.a7))}},
l8:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.ee()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aq(r,!1)
s.y=P.me(0,0,0,r-s.r.a,0,0).a*0.000001
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
if(s!=null)s.J(null)}catch(q){u=H.ak(q)
t=H.cm(q)
P.aC("Error: "+H.m(u))
P.aC("Stack: "+H.m(t))
throw H.c(u)}}}
E.iU.prototype={
$1:function(a){var u
H.pM(a)
u=this.a
if(u.ch){u.ch=!1
u.l8()}},
$S:55}
Z.eC.prototype={$ipU:1}
Z.dz.prototype={
a6:function(a){var u,t,s
try{t=a.a
C.b.eD(t,this.e)
C.b.ln(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.ak(s)
t=P.x('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.m(u))
throw H.c(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.m(this.e)+"]"}}
Z.eD.prototype={$ipV:1}
Z.ct.prototype={
aO:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a6:function(a){var u,t
u=this.a
C.b.aB(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a6(a)},
aT:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.eB(s,u[t].e)
C.b.aB(s,this.a.a,null)},
aj:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.aB(t,p,r.b)
C.b.kp(t,q.a,q.b,5123,0)
C.b.aB(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.e]
t=H.d([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q)C.a.h(t,s[q].i(0))
p=H.d([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.av(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.m(t,", ")+"\nAttrs:   "+C.a.m(p,", ")},
shE:function(a){this.b=H.k(a,"$ib",[Z.bJ],"$ab")},
$iq2:1}
Z.bJ.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c8(this.c)+"'")+"]"}}
Z.bh.prototype={
gdD:function(a){var u,t
u=this.a
t=(u&$.b1().a)!==0?3:0
if((u&$.by().a)!==0)t+=3
if((u&$.bx().a)!==0)t+=3
if((u&$.bz().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.dr().a)!==0)t+=3
if((u&$.ds().a)!==0)t+=4
if((u&$.cp().a)!==0)++t
return(u&$.bw().a)!==0?t+4:t},
jX:function(a){var u,t,s
u=$.b1()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.by()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bx()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bz()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bA()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.dr()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.ds()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cp()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bw()
if((t&u.a)!==0)if(s===a)return u
return $.nF()},
D:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bh))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.d([],[P.e])
t=this.a
if((t&$.b1().a)!==0)C.a.h(u,"Pos")
if((t&$.by().a)!==0)C.a.h(u,"Norm")
if((t&$.bx().a)!==0)C.a.h(u,"Binm")
if((t&$.bz().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bA().a)!==0)C.a.h(u,"TxtCube")
if((t&$.dr().a)!==0)C.a.h(u,"Clr3")
if((t&$.ds().a)!==0)C.a.h(u,"Clr4")
if((t&$.cp().a)!==0)C.a.h(u,"Weight")
if((t&$.bw().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.m(u,"|")}}
D.fS.prototype={}
D.c2.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.A]}
H.n(b,u)
if(this.a==null)this.sam(H.d([],[u]))
u=this.a;(u&&C.a).h(u,b)},
O:function(a,b){var u,t
H.n(b,{func:1,ret:-1,args:[D.A]})
u=this.a
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.a
t=(u&&C.a).O(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.a_(u,b)
if(u===!0){u=this.b
t=(u&&C.a).O(u,b)||t}return t},
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
if(a==null){a=new D.A(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.P(P.mk(t,!0,{func:1,ret:-1,args:[D.A]}),new D.hd(u))
t=this.b
if(t!=null){this.sb0(H.d([],[{func:1,ret:-1,args:[D.A]}]))
C.a.P(t,new D.he(u))}return!0},
kt:function(){return this.J(null)},
lb:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.J(t)}}},
aE:function(a){return this.lb(a,!0,!1)},
sam:function(a){this.a=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")},
sb0:function(a){this.b=H.k(a,"$ib",[{func:1,ret:-1,args:[D.A]}],"$ab")}}
D.hd.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.he.prototype={
$1:function(a){var u
H.n(a,{func:1,ret:-1,args:[D.A]})
u=this.a.a
u.b
a.$1(u)},
$S:32}
D.A.prototype={}
D.bK.prototype={}
D.bL.prototype={}
D.O.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.m(this.d)+" => "+H.m(this.e)}}
X.dA.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dA))return!1
if(this.a!=b.a)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.dS.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dS))return!1
if(this.a!=b.a)return!1
if(!this.b.D(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.m(this.a)}}
X.hy.prototype={
l0:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
kX:function(a){this.c=a.b
this.d.O(0,a.a)
return!1},
siO:function(a){this.d=H.k(a,"$imy",[P.o],"$amy")}}
X.dX.prototype={}
X.hG.prototype={
bc:function(a,b){var u,t,s,r,q,p,o,n
u=new P.aq(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.A()
q=b.b
p=this.ch
if(typeof q!=="number")return q.A()
o=new V.a6(t.a+s*r,t.b+q*p)
p=this.a.gb4()
n=new X.bs(a,V.bt(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
df:function(a,b){this.r=a.a
return!1},
bn:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.fF()
if(typeof u!=="number")return u.c6()
this.r=(u&~t)>>>0
return!1},
bm:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bc(a,b))
return!0},
l1:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gb4()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.A()
o=a.b
n=this.cy
if(typeof o!=="number")return o.A()
r=new X.cI(new V.W(q*p,o*n),t,s,new P.aq(r,!1),this)
r.b=!0
u.J(r)
return!0},
il:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.aq(Date.now(),!1)
t=this.f
s=new X.dX(c,a,this.a.gb4(),b,u,this)
s.b=!0
t.J(s)
this.y=u
this.x=V.bt()}}
X.aE.prototype={
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aE))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.bs.prototype={}
X.hY.prototype={
cg:function(a,b,c){var u,t,s
u=new P.aq(Date.now(),!1)
t=this.a.gb4()
s=new X.bs(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
df:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.cg(a,b,!0))
return!0},
bn:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.fF()
if(typeof u!=="number")return u.c6()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.J(this.cg(a,b,!0))
return!0},
bm:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.cg(a,b,!1))
return!0},
l2:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gb4()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.A()
p=a.b
o=this.ch
if(typeof p!=="number")return p.A()
s=new X.cI(new V.W(r*q,p*o),t,b,new P.aq(s,!1),this)
s.b=!0
u.J(s)
return!0},
geC:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
gc4:function(){var u=this.c
if(u==null){u=D.P()
this.c=u}return u},
gf9:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u}}
X.cI.prototype={}
X.id.prototype={}
X.es.prototype={}
X.iY.prototype={
bc:function(a,b){var u,t,s,r
H.k(a,"$ib",[V.a6],"$ab")
u=new P.aq(Date.now(),!1)
t=a.length>0?a[0]:V.bt()
s=this.a.gb4()
r=new X.es(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
l_:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.b
if(u==null)return!1
u.J(this.bc(a,!0))
return!0},
kY:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.c
if(u==null)return!1
u.J(this.bc(a,!0))
return!0},
kZ:function(a){var u
H.k(a,"$ib",[V.a6],"$ab")
u=this.d
if(u==null)return!1
u.J(this.bc(a,!1))
return!0}}
X.ex.prototype={
gb4:function(){var u=this.a
return V.mw(0,0,C.q.gey(u).c,C.q.gey(u).d)},
dX:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dS(u,new X.aE(t,a.altKey,a.shiftKey))},
b1:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aE(t,a.altKey,a.shiftKey)},
cF:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aE(t,a.altKey,a.shiftKey)},
aK:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.v()
q=u.top
if(typeof s!=="number")return s.v()
return new V.a6(t-r,s-q)},
bd:function(a){return new V.W(a.movementX,a.movementY)},
cz:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.d([],[V.a6])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
o=C.e.av(p.pageX)
C.e.av(p.pageY)
n=u.left
C.e.av(p.pageX)
C.a.h(t,new V.a6(o-n,C.e.av(p.pageY)-u.top))}return t},
aH:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.dA(u,new X.aE(t,a.altKey,a.shiftKey))},
cl:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.v()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.v()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
ie:function(a){this.f=!0},
i1:function(a){this.f=!1},
i7:function(a){H.f(a,"$iai")
if(this.f&&this.cl(a))a.preventDefault()},
ij:function(a){var u
H.f(a,"$ib7")
if(!this.f)return
u=this.dX(a)
this.b.l0(u)},
ih:function(a){var u
H.f(a,"$ib7")
if(!this.f)return
u=this.dX(a)
this.b.kX(u)},
io:function(a){var u,t,s,r
H.f(a,"$iai")
u=this.a
u.focus()
this.f=!0
this.b1(a)
if(this.x){t=this.aH(a)
s=this.bd(a)
if(this.d.df(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.aH(a)
r=this.aK(a)
if(this.c.df(t,r))a.preventDefault()},
is:function(a){var u,t,s
H.f(a,"$iai")
this.b1(a)
u=this.aH(a)
if(this.x){t=this.bd(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bn(u,s))a.preventDefault()},
ib:function(a){var u,t,s
H.f(a,"$iai")
if(!this.cl(a)){this.b1(a)
u=this.aH(a)
if(this.x){t=this.bd(a)
if(this.d.bn(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bn(u,s))a.preventDefault()}},
iq:function(a){var u,t,s
H.f(a,"$iai")
this.b1(a)
u=this.aH(a)
if(this.x){t=this.bd(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bm(u,s))a.preventDefault()},
i9:function(a){var u,t,s
H.f(a,"$iai")
if(!this.cl(a)){this.b1(a)
u=this.aH(a)
if(this.x){t=this.bd(a)
if(this.d.bm(u,t))a.preventDefault()
return}if(this.r)return
s=this.aK(a)
if(this.c.bm(u,s))a.preventDefault()}},
iu:function(a){var u,t
H.f(a,"$ibi")
this.b1(a)
u=new V.W((a&&C.O).gkl(a),C.O.gkm(a)).w(0,180)
if(this.x){if(this.d.l1(u))a.preventDefault()
return}if(this.r)return
t=this.aK(a)
if(this.c.l2(u,t))a.preventDefault()},
iw:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.aH(this.y)
s=this.aK(this.y)
this.d.il(t,s,u)}},
iM:function(a){var u
H.f(a,"$ib_")
this.a.focus()
this.f=!0
this.cF(a)
u=this.cz(a)
if(this.e.l_(u))a.preventDefault()},
iI:function(a){var u
H.f(a,"$ib_")
this.cF(a)
u=this.cz(a)
if(this.e.kY(u))a.preventDefault()},
iK:function(a){var u
H.f(a,"$ib_")
this.cF(a)
u=this.cz(a)
if(this.e.kZ(u))a.preventDefault()},
shv:function(a){this.z=H.k(a,"$ib",[[P.cS,P.R]],"$ab")}}
D.bG.prototype={
gu:function(){var u=this.d
if(u==null){u=D.P()
this.d=u}return u},
aG:function(a){var u
H.f(a,"$iA")
u=this.d
if(u!=null)u.J(a)},
h2:function(){return this.aG(null)},
$ia9:1,
$ibb:1}
D.a9.prototype={$ibb:1}
D.dU.prototype={
gu:function(){var u=this.Q
if(u==null){u=D.P()
this.Q=u}return u},
aG:function(a){var u=this.Q
if(u!=null)u.J(a)},
e8:function(a){var u
H.f(a,"$iA")
u=this.ch
if(u!=null)u.J(a)},
ik:function(){return this.e8(null)},
iy:function(a){var u,t,s
H.k(a,"$ii",[D.a9],"$ai")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.D)(a),++t){s=a[t]
if(s==null||this.h0(s))return!1}return!0},
hW:function(a,b){var u,t,s,r,q,p,o,n
u=D.a9
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ge7(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=H.f(b[p],"$ia9")
if(o instanceof D.bG)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.c2()
n.sam(null)
n.sb0(null)
n.c=null
n.d=0
o.d=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bK(a,b,this,[u])
u.b=!0
this.aG(u)},
iC:function(a,b){var u,t,s,r
u=D.a9
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.ge7();t.F();){r=t.gM(t)
C.a.O(this.e,r)
r.gu().O(0,s)}u=new D.bL(a,b,this,[u])
u.b=!0
this.aG(u)},
h0:function(a){var u=C.a.a_(this.e,a)
return u},
shs:function(a){this.e=H.k(a,"$ib",[D.bG],"$ab")},
siN:function(a){this.f=H.k(a,"$ib",[D.e8],"$ab")},
sjb:function(a){this.r=H.k(a,"$ib",[D.eh],"$ab")},
sjo:function(a){this.x=H.k(a,"$ib",[D.en],"$ab")},
sjp:function(a){this.y=H.k(a,"$ib",[D.eo],"$ab")},
sjq:function(a){this.z=H.k(a,"$ib",[D.ep],"$ab")},
$ai:function(){return[D.a9]},
$aa5:function(){return[D.a9]}}
D.e8.prototype={$ia9:1,$ibb:1}
D.eh.prototype={$ia9:1,$ibb:1}
D.en.prototype={$ia9:1,$ibb:1}
D.eo.prototype={$ia9:1,$ibb:1}
D.ep.prototype={$ia9:1,$ibb:1}
V.v.prototype={
p:function(a,b){var u,t,s
u=C.e.p(this.a,b.gdk())
t=C.e.p(this.b,b.gc8())
s=C.e.p(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.v(u,t,s)},
v:function(a,b){var u,t,s
u=C.e.v(this.a,b.gdk())
t=C.e.v(this.b,b.gc8())
s=C.e.v(this.c,b.gcP())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.v(u,t,s)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.v))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.ap.prototype={
p:function(a,b){var u,t,s,r
u=C.e.p(this.a,b.gdk())
t=C.e.p(this.b,b.gc8())
s=C.e.p(this.c,b.gcP())
r=C.e.p(this.d,b.gjW(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ap(u,t,s,r)},
v:function(a,b){var u,t,s,r
u=C.e.v(this.a,b.gdk())
t=C.e.v(this.b,b.gc8())
s=C.e.v(this.c,b.gcP())
r=C.e.v(this.d,b.gjW(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ap(u,t,s,r)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+", "+V.a_(this.d,3,0)+"]"}}
V.hb.prototype={}
V.e1.prototype={
ak:function(a,b){var u=H.d([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.r])
return u},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.e1))return!1
u=b.a
t=$.U().a
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
t=V.ck(H.d([this.a,this.d,this.r],u),3,0)
s=V.ck(H.d([this.b,this.e,this.x],u),3,0)
r=V.ck(H.d([this.c,this.f,this.y],u),3,0)
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
V.ax.prototype={
ak:function(a,b){var u=H.d([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.r])
return u},
d8:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.U().a)return V.c6()
a8=1/a7
a9=-r
b0=-d
return V.ba((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
A:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.ba(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
dr:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.K(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
bt:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Z(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ax))return!1
u=b.a
t=$.U().a
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
f_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.r]
t=V.ck(H.d([this.a,this.e,this.y,this.cx],u),b,c)
s=V.ck(H.d([this.b,this.f,this.z,this.cy],u),b,c)
r=V.ck(H.d([this.c,this.r,this.Q,this.db],u),b,c)
q=V.ck(H.d([this.d,this.x,this.ch,this.dx],u),b,c)
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
T:function(){return this.f_("",3,0)},
I:function(a){return this.f_(a,3,0)}}
V.a6.prototype={
p:function(a,b){return new V.a6(this.a+b.a,this.b+b.b)},
v:function(a,b){return new V.a6(this.a-b.a,this.b-b.b)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a6))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){return new V.Z(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.Z(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.Z(this.a*b,this.b*b,this.c*b)},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
V.az.prototype={
p:function(a,b){return new V.az(C.e.p(this.a,b.glq(b)),C.e.p(this.b,b.glr(b)),C.e.p(this.c,b.gls(b)),C.e.p(this.d,b.glp(b)))},
v:function(a,b){return new V.az(C.e.v(this.a,b.glq(b)),C.e.v(this.b,b.glr(b)),C.e.v(this.c,b.gls(b)),C.e.v(this.d,b.glp(b)))},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+", "+V.a_(this.d,3,0)+"]"}}
V.ec.prototype={
gai:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ec))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+", "+V.a_(this.d,3,0)+"]"}}
V.W.prototype={
d9:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.G(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.G(r)
return u*t+s*r},
p:function(a,b){var u,t,s
u=this.a
t=b.gkr(b)
if(typeof u!=="number")return u.p()
t=C.e.p(u,t)
u=this.b
s=b.gks(b)
if(typeof u!=="number")return u.p()
return new V.W(t,C.e.p(u,s))},
v:function(a,b){var u,t,s
u=this.a
t=b.gkr(b)
if(typeof u!=="number")return u.v()
t=C.e.v(u,t)
u=this.b
s=b.gks(b)
if(typeof u!=="number")return u.v()
return new V.W(t,C.e.v(u,s))},
A:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.W(u*b,t*b)},
w:function(a,b){var u,t
if(Math.abs(b-0)<$.U().a){u=$.mJ
if(u==null){u=new V.W(0,0)
$.mJ=u}return u}u=this.a
if(typeof u!=="number")return u.w()
t=this.b
if(typeof t!=="number")return t.w()
return new V.W(u/b,t/b)},
D:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=this.a
s=$.U()
s.toString
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.G(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.G(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+"]"}}
V.K.prototype={
d9:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
da:function(a,b){var u,t,s
u=this.a
t=this.b
s=this.c
return new V.K(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aM:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.K(u*t-s*r,s*q-p*t,p*r-u*q)},
p:function(a,b){return new V.K(this.a+b.a,this.b+b.b,this.c+b.c)},
v:function(a,b){return new V.K(this.a-b.a,this.b-b.b,this.c-b.c)},
X:function(a){return new V.K(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.K(this.a*b,this.b*b,this.c*b)},
w:function(a,b){if(Math.abs(b-0)<$.U().a)return V.d6()
return new V.K(this.a/b,this.b/b,this.c/b)},
f8:function(){var u=$.U().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
D:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.U().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.a_(this.a,3,0)+", "+V.a_(this.b,3,0)+", "+V.a_(this.c,3,0)+"]"}}
U.fT.prototype={
cb:function(a){var u=V.pT(a,this.c,this.b)
return u},
gu:function(){var u=this.y
if(u==null){u=D.P()
this.y=u}return u},
V:function(a){var u=this.y
if(u!=null)u.J(a)},
sdu:function(a,b){},
sdc:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.U().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.cb(t)}u=new D.O("maximumLocation",u,this.b,this,[P.r])
u.b=!0
this.V(u)}},
sde:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.U().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.cb(t)}u=new D.O("minimumLocation",u,this.c,this,[P.r])
u.b=!0
this.V(u)}},
sa7:function(a,b){var u
b=this.cb(b)
u=this.d
if(!(Math.abs(u-b)<$.U().a)){this.d=b
u=new D.O("location",u,b,this,[P.r])
u.b=!0
this.V(u)}},
sdd:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.U().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.O("maximumVelocity",u,a,this,[P.r])
u.b=!0
this.V(u)}},
sZ:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.U().a)){this.f=a
u=new D.O("velocity",u,a,this,[P.r])
u.b=!0
this.V(u)}},
scW:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.U().a)){this.x=a
u=new D.O("dampening",u,a,this,[P.r])
u.b=!0
this.V(u)}},
aw:function(a,b){var u,t,s,r,q
u=this.f
t=$.U().a
if(!(Math.abs(u-0)<t)||!(Math.abs(this.r-0)<t)){s=u+this.r*b
u=this.e
r=-u
if(s<r)s=r
else if(s>u)s=u
this.sa7(0,this.d+s*b)
u=this.x
if(!(Math.abs(u-0)<$.U().a)){q=s*Math.pow(1-u,b)
if(s<0){if(q<s)q=s
else if(q>0)q=0}else if(q<0)q=0
else if(q>s)q=s
s=q}this.sZ(s)}}}
U.dC.prototype={
gu:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
b7:function(a,b,c){return this.a},
D:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dC))return!1
return J.a0(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.cC.prototype={
gu:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
V:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.J(a)},
af:function(){return this.V(null)},
hU:function(a,b){var u,t,s,r,q,p,o,n
u=U.aj
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.gaX(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gu()
n.toString
H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.V(u)},
iA:function(a,b){var u,t,s
u=U.aj
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.gaX();t.F();)t.gM(t).gu().O(0,s)
u=new D.bL(a,b,this,[u])
u.b=!0
this.V(u)},
b7:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.aw(u,u.length,0,[H.u(u,0)]),s=null;u.F();){t=u.d
if(t!=null){r=t.b7(0,b,c)
if(r!=null)s=s==null?r:r.A(0,s)}}this.f=s==null?V.c6():s
u=this.e
if(u!=null)u.aE(0)}return this.f},
D:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.a0(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.aj]},
$aa5:function(){return[U.aj]},
$iaj:1}
U.aj.prototype={}
U.ey.prototype={
gu:function(){var u=this.cy
if(u==null){u=D.P()
this.cy=u}return u},
V:function(a){var u
H.f(a,"$iA")
u=this.cy
if(u!=null)u.J(a)},
af:function(){return this.V(null)},
bf:function(a){if(this.a!=null)return!1
this.a=a
a.c.geC().h(0,this.gcm())
this.a.c.gf9().h(0,this.gco())
this.a.c.gc4().h(0,this.gcq())
return!0},
cn:function(a){H.f(a,"$iA")
if(!J.a0(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibs")
if(!this.y)return
if(this.x){u=a.d.v(0,a.y)
u=new V.W(u.a,u.b)
u=u.H(u)
t=this.r
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.v(0,a.y)
u=new V.W(t.a,t.b).A(0,2).w(0,u.gai())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.A()
s=this.e
if(typeof s!=="number")return H.G(s)
t.sZ(u*10*s)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=new V.W(s.a,s.b).A(0,2).w(0,u.gai())
s=this.b
q=r.a
if(typeof q!=="number")return q.X()
p=this.e
if(typeof p!=="number")return H.G(p)
o=this.z
if(typeof o!=="number")return H.G(o)
s.sa7(0,-q*p+o)
this.b.sZ(0)
t=t.v(0,a.z)
this.Q=new V.W(t.a,t.b).A(0,2).w(0,u.gai())}this.af()},
cr:function(a){var u,t,s
H.f(a,"$iA")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.H(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.A()
s=this.e
if(typeof s!=="number")return H.G(s)
u.sZ(t*10*s)
this.af()}},
b7:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.a0()
if(u<t){this.ch=t
s=b.y
this.b.aw(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.ba(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iaj:1}
U.ez.prototype={
gu:function(){var u=this.fx
if(u==null){u=D.P()
this.fx=u}return u},
V:function(a){var u
H.f(a,"$iA")
u=this.fx
if(u!=null)u.J(a)},
af:function(){return this.V(null)},
bf:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.geC().h(0,this.gcm())
this.a.c.gf9().h(0,this.gco())
this.a.c.gc4().h(0,this.gcq())
u=this.a.d
t=u.f
if(t==null){t=D.P()
u.f=t
u=t}else u=t
u.h(0,this.ghM())
u=this.a.d
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.ghO())
u=this.a.e
t=u.b
if(t==null){t=D.P()
u.b=t
u=t}else u=t
u.h(0,this.gjl())
u=this.a.e
t=u.d
if(t==null){t=D.P()
u.d=t
u=t}else u=t
u.h(0,this.gjj())
u=this.a.e
t=u.c
if(t==null){t=D.P()
u.c=t
u=t}else u=t
u.h(0,this.gjh())
return!0},
az:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.X()
u=-u}if(this.r){if(typeof t!=="number")return t.X()
t=-t}return new V.W(u,t)},
cn:function(a){a=H.l(H.f(a,"$iA"),"$ibs")
if(!J.a0(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
cp:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibs")
if(!this.cx)return
if(this.ch){u=a.d.v(0,a.y)
u=new V.W(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.v(0,a.y)
u=this.az(new V.W(t.a,t.b).A(0,2).w(0,u.gai()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.X()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.X()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=this.az(new V.W(s.a,s.b).A(0,2).w(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.X()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa7(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.X()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa7(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.v(0,a.z)
this.dx=this.az(new V.W(t.a,t.b).A(0,2).w(0,u.gai()))}this.af()},
cr:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.X()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.X()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sZ(-t*10*u)
this.af()}},
hN:function(a){if(H.l(H.f(a,"$iA"),"$idX").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
hP:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ibs")
if(!J.a0(this.d,a.x.b))return
u=a.c
t=a.d
s=t.v(0,a.y)
r=this.az(new V.W(s.a,s.b).A(0,2).w(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.X()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa7(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.X()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa7(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.v(0,a.z)
this.dx=this.az(new V.W(t.a,t.b).A(0,2).w(0,u.gai()))
this.af()},
jm:function(a){H.f(a,"$iA")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
jk:function(a){var u,t,s,r,q,p,o
a=H.l(H.f(a,"$iA"),"$ies")
if(!this.cx)return
if(this.ch){u=a.d.v(0,a.y)
u=new V.W(u.a,u.b)
u=u.H(u)
t=this.Q
if(typeof t!=="number")return H.G(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.v(0,a.y)
u=this.az(new V.W(t.a,t.b).A(0,2).w(0,u.gai()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.X()
s=this.y
if(typeof s!=="number")return H.G(s)
t.sZ(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.X()
t=this.x
if(typeof t!=="number")return H.G(t)
s.sZ(-u*10*t)}else{u=a.c
t=a.d
s=t.v(0,a.y)
r=this.az(new V.W(s.a,s.b).A(0,2).w(0,u.gai()))
s=this.c
q=r.a
if(typeof q!=="number")return q.X()
p=this.y
if(typeof p!=="number")return H.G(p)
o=this.cy
if(typeof o!=="number")return H.G(o)
s.sa7(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.X()
q=this.x
if(typeof q!=="number")return H.G(q)
s=this.db
if(typeof s!=="number")return H.G(s)
o.sa7(0,-p*q+s)
this.b.sZ(0)
this.c.sZ(0)
t=t.v(0,a.z)
this.dx=this.az(new V.W(t.a,t.b).A(0,2).w(0,u.gai()))}this.af()},
ji:function(a){var u,t,s
H.f(a,"$iA")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.H(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.X()
s=this.y
if(typeof s!=="number")return H.G(s)
u.sZ(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.X()
u=this.x
if(typeof u!=="number")return H.G(u)
s.sZ(-t*10*u)
this.af()}},
b7:function(a,b,c){var u,t,s,r,q
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
u=V.ba(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.A(0,V.ba(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iaj:1}
U.eA.prototype={
gu:function(){var u=this.r
if(u==null){u=D.P()
this.r=u}return u},
V:function(a){var u=this.r
if(u!=null)u.J(a)},
bf:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.P()
u.e=t
u=t}else u=t
t=this.ghR()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.P()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
hS:function(a){var u,t,s,r
H.f(a,"$iA")
if(!J.a0(this.b,this.a.b.c))return
H.l(a,"$icI")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){this.d=r
u=new D.O("zoom",u,r,this,[P.r])
u.b=!0
this.V(u)}},
b7:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.ba(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iaj:1}
M.dB.prototype={
gu:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
a4:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.J(a)},
ba:function(){return this.a4(null)},
iE:function(a,b){var u,t,s,r,q,p,o,n
u=M.aG
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga3(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.gu()
n.toString
H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.a4(u)},
iG:function(a,b){var u,t,s
u=M.aG
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.ga3();t.F();)t.gM(t).gu().O(0,s)
u=new D.bL(a,b,this,[u])
u.b=!0
this.a4(u)},
aj:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.F();){t=u.d
if(t!=null)t.aj(a)}this.e=!1},
$ai:function(){return[M.aG]},
$aa5:function(){return[M.aG]},
$iaG:1}
M.dD.prototype={
gu:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
a4:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.J(a)},
ba:function(){return this.a4(null)},
sbg:function(a){var u,t
if(a==null)a=new X.hr()
u=this.a
if(u!==a){if(u!=null)u.gu().O(0,this.ga3())
t=this.a
this.a=a
a.gu().h(0,this.ga3())
u=new D.O("camera",t,this.a,this,[X.bY])
u.b=!0
this.a4(u)}},
sbp:function(a,b){var u,t
if(b==null)b=X.lv(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gu().O(0,this.ga3())
t=this.b
this.b=b
b.gu().h(0,this.ga3())
u=new D.O("target",t,this.b,this,[X.cT])
u.b=!0
this.a4(u)}},
sbq:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gu().O(0,this.ga3())
t=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga3())
u=new D.O("technique",t,this.c,this,[O.bP])
u.b=!0
this.a4(u)}},
aj:function(a){a.dh(this.c)
this.b.a6(a)
this.a.a6(a)
this.d.aw(0,a)
this.d.aj(a)
this.a.aT(a)
this.b.toString
a.dg()},
$iaG:1}
M.dI.prototype={
a4:function(a){var u
H.f(a,"$iA")
u=this.x
if(u!=null)u.J(a)},
ba:function(){return this.a4(null)},
i3:function(a,b){var u,t,s,r,q,p,o,n
u=E.ar
H.k(b,"$ii",[u],"$ai")
for(t=b.length,s=this.ga3(),r={func:1,ret:-1,args:[D.A]},q=[r],p=0;p<b.length;b.length===t||(0,H.D)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.c2()
n.sam(null)
n.sb0(null)
n.c=null
n.d=0
o.z=n}H.n(s,r)
if(n.a==null)n.sam(H.d([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bK(a,b,this,[u])
u.b=!0
this.a4(u)},
i5:function(a,b){var u,t,s
u=E.ar
H.k(b,"$ii",[u],"$ai")
for(t=b.gY(b),s=this.ga3();t.F();)t.gM(t).gu().O(0,s)
u=new D.bL(a,b,this,[u])
u.b=!0
this.a4(u)},
sbg:function(a){var u,t
if(a==null)a=X.mp(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gu().O(0,this.ga3())
t=this.a
this.a=a
a.gu().h(0,this.ga3())
u=new D.O("camera",t,this.a,this,[X.bY])
u.b=!0
this.a4(u)}},
sbp:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gu().O(0,this.ga3())
t=this.b
this.b=b
b.gu().h(0,this.ga3())
u=new D.O("target",t,this.b,this,[X.cT])
u.b=!0
this.a4(u)}},
sbq:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gu().O(0,this.ga3())
t=this.c
this.c=a
if(a!=null)a.gu().h(0,this.ga3())
u=new D.O("technique",t,this.c,this,[O.bP])
u.b=!0
this.a4(u)}},
gu:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
aj:function(a){var u
a.dh(this.c)
this.b.a6(a)
this.a.a6(a)
u=this.c
if(u!=null)u.aw(0,a)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aw(0,a)
for(u=this.d.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.F();)u.d.aj(a)
this.a.toString
a.cy.aR()
a.db.aR()
this.b.toString
a.dg()},
shm:function(a,b){this.d=H.k(b,"$ia5",[E.ar],"$aa5")},
$iaG:1}
M.aG.prototype={}
A.dx.prototype={}
A.fI.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
ku:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.eD(r.a,r.c)}},
eA:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
C.b.eB(r.a,r.c)}}}
A.e_.prototype={
fU:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.al("")
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
a6.ju(u)
a6.jB(u)
a6.jv(u)
a6.jJ(u)
a6.jK(u)
a6.jD(u)
a6.jO(u)
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
u=new P.al("")
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
q.jy(u)
q.jt(u)
q.jw(u)
q.jz(u)
q.jH(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.jF(u)
q.jG(u)}q.jC(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
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
k=H.d([],[P.e])
if(q.b!==C.d)C.a.h(k,"ambient()")
if(q.c!==C.d)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.d)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.d)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.m(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.jx(u)
q.jE(u)
q.jI(u)
q.jL(u)
q.jM(u)
q.jN(u)
q.jA(u)}m=u.a+="// === Main ===\n"
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
j=H.d([],[P.e])
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
this.f7(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.l(this.y.q(0,"invViewMat"),"$iaB")
if(t)this.dy=H.l(this.y.q(0,"objMat"),"$iaB")
if(r)this.fr=H.l(this.y.q(0,"viewObjMat"),"$iaB")
this.fy=H.l(this.y.q(0,"projViewObjMat"),"$iaB")
if(a6.x2)this.k1=H.l(this.y.q(0,"txt2DMat"),"$id_")
if(a6.y1)this.k2=H.l(this.y.q(0,"txtCubeMat"),"$iaB")
if(a6.y2)this.k3=H.l(this.y.q(0,"colorMat"),"$iaB")
this.shi(H.d([],[A.aB]))
t=a6.aC
if(t>0){this.k4=H.f(this.y.q(0,"bendMatCount"),"$iQ")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.t(P.x("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.l(g,"$iaB"))}}t=a6.a
if(t!==C.d){this.r2=H.l(this.y.q(0,"emissionClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.rx=H.l(this.y.q(0,"emissionTxt"),"$ias")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iQ")
break
case C.i:this.ry=H.l(this.y.q(0,"emissionTxt"),"$iam")
this.x1=H.l(this.y.q(0,"nullEmissionTxt"),"$iQ")
break}}t=a6.b
if(t!==C.d){this.x2=H.l(this.y.q(0,"ambientClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.y1=H.l(this.y.q(0,"ambientTxt"),"$ias")
this.aC=H.l(this.y.q(0,"nullAmbientTxt"),"$iQ")
break
case C.i:this.y2=H.l(this.y.q(0,"ambientTxt"),"$iam")
this.aC=H.l(this.y.q(0,"nullAmbientTxt"),"$iQ")
break}}t=a6.c
if(t!==C.d){this.au=H.l(this.y.q(0,"diffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.bI=H.l(this.y.q(0,"diffuseTxt"),"$ias")
this.bJ=H.l(this.y.q(0,"nullDiffuseTxt"),"$iQ")
break
case C.i:this.eE=H.l(this.y.q(0,"diffuseTxt"),"$iam")
this.bJ=H.l(this.y.q(0,"nullDiffuseTxt"),"$iQ")
break}}t=a6.d
if(t!==C.d){this.bK=H.l(this.y.q(0,"invDiffuseClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eF=H.l(this.y.q(0,"invDiffuseTxt"),"$ias")
this.bL=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iQ")
break
case C.i:this.eG=H.l(this.y.q(0,"invDiffuseTxt"),"$iam")
this.bL=H.l(this.y.q(0,"nullInvDiffuseTxt"),"$iQ")
break}}t=a6.e
if(t!==C.d){this.bO=H.l(this.y.q(0,"shininess"),"$ia3")
this.bM=H.l(this.y.q(0,"specularClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eH=H.l(this.y.q(0,"specularTxt"),"$ias")
this.bN=H.l(this.y.q(0,"nullSpecularTxt"),"$iQ")
break
case C.i:this.eI=H.l(this.y.q(0,"specularTxt"),"$iam")
this.bN=H.l(this.y.q(0,"nullSpecularTxt"),"$iQ")
break}}switch(a6.f){case C.d:break
case C.j:break
case C.h:this.eJ=H.l(this.y.q(0,"bumpTxt"),"$ias")
this.bP=H.l(this.y.q(0,"nullBumpTxt"),"$iQ")
break
case C.i:this.eK=H.l(this.y.q(0,"bumpTxt"),"$iam")
this.bP=H.l(this.y.q(0,"nullBumpTxt"),"$iQ")
break}if(a6.dy){this.eL=H.l(this.y.q(0,"envSampler"),"$iam")
this.eM=H.l(this.y.q(0,"nullEnvTxt"),"$iQ")
t=a6.r
if(t!==C.d){this.bQ=H.l(this.y.q(0,"reflectClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eN=H.l(this.y.q(0,"reflectTxt"),"$ias")
this.bR=H.l(this.y.q(0,"nullReflectTxt"),"$iQ")
break
case C.i:this.eO=H.l(this.y.q(0,"reflectTxt"),"$iam")
this.bR=H.l(this.y.q(0,"nullReflectTxt"),"$iQ")
break}}t=a6.x
if(t!==C.d){this.bS=H.l(this.y.q(0,"refraction"),"$ia3")
this.bT=H.l(this.y.q(0,"refractClr"),"$iN")
switch(t){case C.d:break
case C.j:break
case C.h:this.eP=H.l(this.y.q(0,"refractTxt"),"$ias")
this.bU=H.l(this.y.q(0,"nullRefractTxt"),"$iQ")
break
case C.i:this.eQ=H.l(this.y.q(0,"refractTxt"),"$iam")
this.bU=H.l(this.y.q(0,"nullRefractTxt"),"$iQ")
break}}}t=a6.y
if(t!==C.d){this.bV=H.l(this.y.q(0,"alpha"),"$ia3")
switch(t){case C.d:break
case C.j:break
case C.h:this.eR=H.l(this.y.q(0,"alphaTxt"),"$ias")
this.bW=H.l(this.y.q(0,"nullAlphaTxt"),"$iQ")
break
case C.i:this.eS=H.l(this.y.q(0,"alphaTxt"),"$iam")
this.bW=H.l(this.y.q(0,"nullAlphaTxt"),"$iQ")
break}}this.sh3(H.d([],[A.cZ]))
this.sh4(H.d([],[A.d0]))
this.sh5(H.d([],[A.d1]))
this.sh6(H.d([],[A.d2]))
this.sh7(H.d([],[A.d3]))
this.sh8(H.d([],[A.d4]))
if(a6.k2){t=a6.z
if(t>0){this.eT=H.f(this.y.q(0,"dirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iN")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iN")
s=this.cZ;(s&&C.a).h(s,new A.cZ(h,g,f))}}t=a6.Q
if(t>0){this.eU=H.f(this.y.q(0,"pntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iN")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iN")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iN")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$ia3")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia3")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.d_;(s&&C.a).h(s,new A.d0(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.eV=H.f(this.y.q(0,"spotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iN")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iN")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iN")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iN")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$ia3")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.d0;(s&&C.a).h(s,new A.d1(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.eW=H.f(this.y.q(0,"txtDirLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iN")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iN")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iN")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iN")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iN")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iQ")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ias")
s=this.d1;(s&&C.a).h(s,new A.d2(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.eX=H.f(this.y.q(0,"txtPntLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iN")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iN")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$id_")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iN")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iQ")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$ia3")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$ia3")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$iam")
s=this.d2;(s&&C.a).h(s,new A.d3(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.eY=H.f(this.y.q(0,"txtSpotLightCount"),"$iQ")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(g,"$iN")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(f,"$iN")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(e,"$iN")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(d,"$iN")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(c,"$iN")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(b,"$iQ")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a,"$iN")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a0,"$ia3")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a1,"$ia3")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a2,"$ia3")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a3,"$ia3")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a4,"$ia3")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.t(P.x("Required uniform value, "+r+", was not defined or used in shader."))
H.l(a5,"$ias")
s=this.d3;(s&&C.a).h(s,new A.d4(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
as:function(a,b,c){C.b.W(b.a,b.d,1)},
an:function(a,b,c){if(c==null||c.d<6)C.b.W(b.a,b.d,1)
else{a.dC(c)
C.b.W(b.a,b.d,0)}},
shi:function(a){this.r1=H.k(a,"$ib",[A.aB],"$ab")},
sh3:function(a){this.cZ=H.k(a,"$ib",[A.cZ],"$ab")},
sh4:function(a){this.d_=H.k(a,"$ib",[A.d0],"$ab")},
sh5:function(a){this.d0=H.k(a,"$ib",[A.d1],"$ab")},
sh6:function(a){this.d1=H.k(a,"$ib",[A.d2],"$ab")},
sh7:function(a){this.d2=H.k(a,"$ib",[A.d3],"$ab")},
sh8:function(a){this.d3=H.k(a,"$ib",[A.d4],"$ab")}}
A.hP.prototype={
ju:function(a){var u,t,s
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
jB:function(a){var u
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
jv:function(a){var u
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
jJ:function(a){var u,t
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
jK:function(a){var u,t
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
jD:function(a){var u
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
jO:function(a){var u
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
if(b===C.j)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.c.ax(c,1))+"Txt;\n"
a.a=u
if(b===C.h)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.i)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
jy:function(a){var u,t
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
jt:function(a){var u,t
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
jw:function(a){var u,t
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
jz:function(a){var u,t
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
jH:function(a){var u,t
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
jC:function(a){var u,t
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
jF:function(a){var u,t
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
jG:function(a){var u,t
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
jx:function(a){var u,t
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
jE:function(a){var u,t
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
jI:function(a){var u,t
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
jL:function(a){var u,t,s
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
jM:function(a){var u,t,s
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
jN:function(a){var u,t,s
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
jA:function(a){var u
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
i:function(a){return this.au}}
A.cZ.prototype={}
A.d2.prototype={}
A.d0.prototype={}
A.d3.prototype={}
A.d1.prototype={}
A.d4.prototype={}
A.cQ.prototype={
dH:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
f7:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.dY(b,35633)
this.f=this.dY(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.eq(u,t,this.e)
C.b.eq(u,this.r,this.f)
C.b.kL(u,this.r)
if(!H.lP(C.b.c7(u,this.r,35714))){s=C.b.fA(u,this.r)
C.b.kj(u,this.r)
H.t(P.x("Failed to link shader: "+H.m(s)))}this.j6()
this.j8()},
a6:function(a){C.b.ds(a.a,this.r)
this.x.ku()},
dY:function(a,b){var u,t,s
u=this.a
t=C.b.kh(u,b)
C.b.fL(u,t,a)
C.b.kb(u,t)
if(!H.lP(C.b.fC(u,t,35713))){s=C.b.fB(u,t)
C.b.kk(u,t)
throw H.c(P.x("Error compiling shader '"+H.m(t)+"': "+H.m(s)))}return t},
j6:function(){var u,t,s,r,q,p
u=H.d([],[A.dx])
t=this.a
s=H.ae(C.b.c7(t,this.r,35721))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.ft(t,this.r,r)
p=C.b.fv(t,this.r,q.name)
C.a.h(u,new A.dx(t,q.name,p))}this.x=new A.fI(u)},
j8:function(){var u,t,s,r,q,p
u=H.d([],[A.et])
t=this.a
s=H.ae(C.b.c7(t,this.r,35718))
if(typeof s!=="number")return H.G(s)
r=0
for(;r<s;++r){q=C.b.fu(t,this.r,r)
p=C.b.fD(t,this.r,q.name)
C.a.h(u,this.ki(q.type,q.size,q.name,p))}this.y=new A.jb(u)},
aY:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.Q(u,t,b,c)
else return A.lD(u,t,b,a,c)},
hp:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.as(u,t,b,c)
else return A.lD(u,t,b,a,c)},
hq:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.am(u,t,b,c)
else return A.lD(u,t,b,a,c)},
bE:function(a,b){return new P.eM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.m(b)+"."))},
ki:function(a,b,c,d){switch(a){case 5120:return this.aY(b,c,d)
case 5121:return this.aY(b,c,d)
case 5122:return this.aY(b,c,d)
case 5123:return this.aY(b,c,d)
case 5124:return this.aY(b,c,d)
case 5125:return this.aY(b,c,d)
case 5126:return new A.a3(this.a,this.r,c,d)
case 35664:return new A.j6(this.a,this.r,c,d)
case 35665:return new A.N(this.a,this.r,c,d)
case 35666:return new A.j9(this.a,this.r,c,d)
case 35667:return new A.j7(this.a,this.r,c,d)
case 35668:return new A.j8(this.a,this.r,c,d)
case 35669:return new A.ja(this.a,this.r,c,d)
case 35674:return new A.jc(this.a,this.r,c,d)
case 35675:return new A.d_(this.a,this.r,c,d)
case 35676:return new A.aB(this.a,this.r,c,d)
case 35678:return this.hp(b,c,d)
case 35680:return this.hq(b,c,d)
case 35670:throw H.c(this.bE("BOOL",c))
case 35671:throw H.c(this.bE("BOOL_VEC2",c))
case 35672:throw H.c(this.bE("BOOL_VEC3",c))
case 35673:throw H.c(this.bE("BOOL_VEC4",c))
default:throw H.c(P.x("Unknown uniform variable type "+H.m(a)+" for "+H.m(c)+"."))}}}
A.c1.prototype={
i:function(a){return this.b}}
A.eg.prototype={}
A.et.prototype={}
A.jb.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
q:function(a,b){var u=this.j(0,b)
if(u==null)throw H.c(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.T()},
kC:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r)s+=u[r].i(0)+a
return s},
T:function(){return this.kC("\n")}}
A.Q.prototype={
i:function(a){return"Uniform1i: "+H.m(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform2i: "+H.m(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform3i: "+H.m(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform4i: "+H.m(this.c)}}
A.j5.prototype={
i:function(a){return"Uniform1iv: "+H.m(this.c)},
sjr:function(a){this.e=H.k(a,"$ib",[P.o],"$ab")}}
A.a3.prototype={
i:function(a){return"Uniform1f: "+H.m(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform2f: "+H.m(this.c)}}
A.N.prototype={
i:function(a){return"Uniform3f: "+H.m(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform4f: "+H.m(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform1Mat2 "+H.m(this.c)}}
A.d_.prototype={
ar:function(a){var u=new Float32Array(H.cf(H.k(a,"$ib",[P.r],"$ab")))
C.b.fo(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.m(this.c)}}
A.aB.prototype={
ar:function(a){var u=new Float32Array(H.cf(H.k(a,"$ib",[P.r],"$ab")))
C.b.fp(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.m(this.c)}}
A.as.prototype={
i:function(a){return"UniformSampler2D: "+H.m(this.c)}}
A.am.prototype={
dC:function(a){var u,t,s
u=a==null||a.d<6
t=this.a
s=this.d
if(u)C.b.W(t,s,0)
else C.b.W(t,s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.m(this.c)}}
F.kx.prototype={
$3:function(a,b,c){var u,t,s
u=this.a
t=u.a.da(u.b,b).da(u.d.da(u.c,b),c)
a.sa7(0,new V.Z(t.a,t.b,t.c))
a.sfk(t.w(0,Math.sqrt(t.H(t))))
u=1-b
s=1-c
a.ser(new V.az(this.b+b*c,this.c+u*c,this.d+b*s,this.e+u*s))
u=this.f
if(u!=null)u.$3(a,b,c)},
$S:5}
F.kH.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)},
$S:6}
F.kJ.prototype={
$3:function(a,b,c){var u,t,s,r,q,p
u=6.283185307179586*b
t=Math.sin(u)
s=Math.cos(u)
r=-1+c*2
q=this.a.$2(b,c)
if(typeof q!=="number")return H.G(q)
t=-t*q
p=s*q
a.sa7(0,new V.Z(t,p,r))
p=new V.K(t,p,r)
a.sfk(p.w(0,Math.sqrt(p.H(p))))
a.ser(new V.az(1-c,2+c,-1,-1))},
$S:5}
F.kK.prototype={
$1:function(a){return this.a.$2(a,1)},
$S:17}
F.kL.prototype={
$1:function(a){return this.a.$2(1-a,0)},
$S:17}
F.li.prototype={
$2:function(a,b){return 0},
$S:6}
F.lj.prototype={
$3:function(a,b,c){var u,t,s
u=this.a.a.$2(b,c)
if(typeof u!=="number")return H.G(u)
t=a.f
s=new V.K(t.a,t.b,t.c)
u=s.w(0,Math.sqrt(s.H(s))).A(0,this.b+u)
a.sa7(0,new V.Z(u.a,u.b,u.c))},
$S:5}
F.lk.prototype={
$1:function(a){return new V.Z(Math.cos(a),Math.sin(a),0)},
$S:16}
F.kS.prototype={
$1:function(a){var u,t,s
u=this.a*a
t=2+Math.cos(u)
s=this.b*a
return new V.Z(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)},
$S:16}
F.kI.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.m1(t.$1(u),s)
s=J.nL(J.m1(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.K(s.a,s.b,s.c)
q=s.w(0,Math.sqrt(s.H(s)))
t=$.mL
if(t==null){t=new V.K(1,0,0)
$.mL=t
p=t}else p=t
t=q.aM(!J.a0(q,p)?V.mP():p)
o=t.w(0,Math.sqrt(t.H(t)))
t=o.aM(q)
p=t.w(0,Math.sqrt(t.H(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.A(0,t*s)
s=o.A(0,m*s)
a.sa7(0,J.nK(r,new V.Z(t.a-s.a,t.b-s.b,t.c-s.c)))},
$S:5}
F.aa.prototype={
bi:function(){if(!this.gbj()){C.a.O(this.a.a.d.b,this)
this.a.a.aa()}this.cB()
this.cC()
this.iU()},
cG:function(a){this.a=a
C.a.h(a.d.b,this)},
cH:function(a){this.b=a
C.a.h(a.d.c,this)},
j5:function(a){this.c=a
C.a.h(a.d.d,this)},
cB:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
cC:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
iU:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gbj:function(){return this.a==null||this.b==null||this.c==null},
hh:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.d6()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.f8())return
return q.w(0,Math.sqrt(q.H(q)))},
hl:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.v(0,t)
u=new V.K(u.a,u.b,u.c)
q=u.w(0,Math.sqrt(u.H(u)))
u=r.v(0,t)
u=new V.K(u.a,u.b,u.c)
u=q.aM(u.w(0,Math.sqrt(u.H(u))))
return u.w(0,Math.sqrt(u.H(u)))},
cS:function(){if(this.d!=null)return!0
var u=this.hh()
if(u==null){u=this.hl()
if(u==null)return!1}this.d=u
this.a.a.aa()
return!0},
hg:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.d6()
if(t!=null)q=q.p(0,t)
if(s!=null)q=q.p(0,s)
if(r!=null)q=q.p(0,r)
if(q.f8())return
return q.w(0,Math.sqrt(q.H(q)))},
hk:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.U().a){u=m.v(0,p)
u=new V.K(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.H(u)))
if(j.a-k.a<0)h=h.X(0)}else{g=(u-l.b)/i
u=m.v(0,p).A(0,g).p(0,p).v(0,s)
u=new V.K(u.a,u.b,u.c)
h=u.w(0,Math.sqrt(u.H(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.X(0)}u=this.d
if(u!=null){f=u.w(0,Math.sqrt(u.H(u)))
u=f.aM(h)
u=u.w(0,Math.sqrt(u.H(u))).aM(f)
h=u.w(0,Math.sqrt(u.H(u)))}return h},
cQ:function(){if(this.e!=null)return!0
var u=this.hg()
if(u==null){u=this.hk()
if(u==null)return!1}this.e=u
this.a.a.aa()
return!0},
gka:function(a){if(J.a0(this.a,this.b))return!0
if(J.a0(this.b,this.c))return!0
if(J.a0(this.c,this.a))return!0
return!1},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
I:function(a){var u,t
if(this.gbj())return a+"disposed"
u=a+C.c.aq(J.av(this.a.e),0)+", "+C.c.aq(J.av(this.b.e),0)+", "+C.c.aq(J.av(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
T:function(){return this.I("")}}
F.hf.prototype={}
F.iC.prototype={
bk:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else{u=b.a
u.a.a.E()
u=u.e
t=c.c
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.c
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
t=u==t.e
u=t}else u=!1
return u}else return!1}}}}
F.br.prototype={
bi:function(){if(!this.gbj()){C.a.O(this.a.a.c.b,this)
this.a.a.aa()}this.cB()
this.cC()},
cG:function(a){this.a=a
C.a.h(a.c.b,this)},
cH:function(a){this.b=a
C.a.h(a.c.c,this)},
cB:function(){var u=this.a
if(u!=null){C.a.O(u.c.b,this)
this.a=null}},
cC:function(){var u=this.b
if(u!=null){C.a.O(u.c.c,this)
this.b=null}},
gbj:function(){return this.a==null||this.b==null},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
I:function(a){if(this.gbj())return a+"disposed"
return a+C.c.aq(J.av(this.a.e),0)+", "+C.c.aq(J.av(this.b.e),0)},
T:function(){return this.I("")}}
F.hA.prototype={}
F.j4.prototype={
bk:function(a,b,c){var u,t
u=b.a
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
return u==t.e}else{u=b.a
u.a.a.E()
u=u.e
t=c.b
t.a.a.E()
if(u==t.e){u=b.b
u.a.a.E()
u=u.e
t=c.a
t.a.a.E()
return u==t.e}else return!1}}}
F.bO.prototype={
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.c.aq(J.av(u.e),0)},
T:function(){return this.I("")}}
F.ee.prototype={
gu:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
bl:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=this.e
if(u!=null)++u.d
a.a.E()
t=this.a.c.length
for(u=a.a.c,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){q=u[r]
this.a.h(0,q.kc())}this.a.E()
for(u=a.b.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){p=u[r]
o=this.a
n=p.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
m=o[n]
this.b.a.a.h(0,m)
n=new F.bO()
if(m.a==null)H.t(P.x("May not create a point with a vertex which is not attached to a shape."))
n.a=m
C.a.h(m.b.b,n)
C.a.h(n.a.a.b.b,n)
o=n.a.a.e
if(o!=null)o.J(null)}for(u=a.c.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){l=u[r]
o=this.a
n=l.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=l.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.c.a
o.a.h(0,k)
o.a.h(0,j)
F.oc(k,j)}for(u=a.d.b,s=u.length,r=0;r<u.length;u.length===s||(0,H.D)(u),++r){i=u[r]
o=this.a
n=i.a
n.a.a.E()
n=n.e
if(typeof n!=="number")return n.p()
n+=t
o=o.c
if(n>=o.length)return H.h(o,n)
k=o[n]
n=this.a
o=i.b
o.a.a.E()
o=o.e
if(typeof o!=="number")return o.p()
o+=t
n=n.c
if(o>=n.length)return H.h(n,o)
j=n[o]
o=this.a
n=i.c
n.a.a.E()
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
F.cz(k,j,h)}u=this.e
if(u!=null)u.aE(0)},
at:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.at()||!1
if(!this.a.at())t=!1
u=this.e
if(u!=null)u.aE(0)
return t},
kO:function(a,b){var u,t,s,r,q,p,o
P.aC("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.aC("FLAG 2\n")
u=this.a.c
t=H.d(u.slice(0),[H.u(u,0)])
P.aC("FLAG 3\n")
for(u=[F.ag];t.length!==0;){s=C.a.gky(t)
C.a.l6(t,0)
if(s!=null){r=H.d([],u)
C.a.h(r,s)
for(q=t.length,p=0;p<t.length;t.length===q||(0,H.D)(t),++p){o=t[p]
if(o!=null&&a.bk(0,s,o)){C.a.h(r,o)
C.a.O(t,o)}}if(r.length>1)b.bl(r)}}P.aC("FLAG 4\n")
this.a.E()
P.aC("FLAG 5\n")
this.c.dl()
P.aC("FLAG 6\n")
this.d.dl()
P.aC("FLAG 7\n")
this.b.l7()
P.aC("FLAG 8\n")
this.c.dm(new F.j4())
P.aC("FLAG 9\n")
this.d.dm(new F.iC())
P.aC("FLAG 10\n")
u=this.e
if(u!=null)u.aE(0)
P.aC("FLAG 11\n")},
jT:function(a){this.kO(new F.jw(),new F.i5())},
cK:function(){return this.jT(null)},
ew:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.b1()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.by().a)!==0)++r
if((s&$.bx().a)!==0)++r
if((s&$.bz().a)!==0)++r
if((s&$.bA().a)!==0)++r
if((s&$.dr().a)!==0)++r
if((s&$.ds().a)!==0)++r
if((s&$.cp().a)!==0)++r
if((s&$.bw().a)!==0)++r
q=a1.gdD(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.r
o=H.d(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.d(t,[Z.dz])
for(m=0,l=0;l<r;++l){k=a1.jX(l)
j=k.gdD(k)
C.a.n(n,l,new Z.dz(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].kM(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.n(o,g,h[f]);++g}}m+=j}H.k(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.aB(t,34962,e)
C.b.ev(t,34962,new Float32Array(H.cf(o)),35044)
C.b.aB(t,34962,null)
d=new Z.ct(new Z.eC(34962,e),n,a1)
d.shE(H.d([],[Z.bJ]))
if(this.b.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.b.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)}a=Z.lG(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bJ(0,c.length,a))}if(this.c.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)}a=Z.lG(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bJ(1,c.length,a))}if(this.d.b.length!==0){s=P.o
c=H.d([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.E()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.E()
C.a.h(c,b.e)}a=Z.lG(t,34963,H.k(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bJ(4,c.length,a))}return d},
i:function(a){var u=H.d([],[P.e])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.I("   "))}if(this.b.b.length!==0){C.a.h(u,"Points:")
C.a.h(u,this.b.I("   "))}if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.I("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.I("   "))}return C.a.m(u,"\n")},
b5:function(a){var u=this.e
if(u!=null)u.J(a)},
aa:function(){return this.b5(null)},
$iq0:1}
F.iv.prototype={
el:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[F.ag],"$ab")
u=H.d([],[F.aa])
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
C.a.h(u,F.cz(s,p,o))}}return u},
jR:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.k(c,"$ib",[F.ag],"$ab")
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
C.a.h(u,F.cz(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.cz(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.cz(k,h,l))}o=!o}q=!q}return u},
gl:function(a){return this.b.length},
dm:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.bk(0,p,n)){p.bi()
break}}}}},
dl:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.gka(s)
if(t)s.bi()}},
at:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cS())s=!1
return s},
cR:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.D)(u),++r)if(!u[r].cQ())s=!1
return s},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
T:function(){return this.I("")},
shw:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")}}
F.iw.prototype={
gl:function(a){return this.b.length},
dm:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.bk(0,p,n)){p.bi()
break}}}}},
dl:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.a0(s.a,s.b)
if(t)s.bi()}},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
u=H.d([],[P.e])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].I(a+(""+s+". ")))}return C.a.m(u,"\n")},
T:function(){return this.I("")},
shI:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")}}
F.ix.prototype={
gl:function(a){return this.b.length},
l7:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.a.O(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.J(null)}s=t.a
if(s!=null){C.a.O(s.b.b,t)
t.a=null}}}},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
T:function(){return this.I("")},
scw:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
F.ag.prototype={
cV:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.eB(this.cx,s,p,u,t,r,q,a,o)},
kc:function(){return this.cV(null)},
sa7:function(a,b){var u
if(!J.a0(this.f,b)){this.f=b
u=this.a
if(u!=null)u.aa()}},
sfk:function(a){var u
if(!J.a0(this.z,a)){this.z=a
u=this.a
if(u!=null)u.aa()}},
ser:function(a){var u
if(!J.a0(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.aa()}},
kM:function(a){var u,t
if(a.D(0,$.b1())){u=this.f
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.D(0,$.by())){u=this.r
t=[P.r]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.D(0,$.bx())){u=this.x
t=[P.r]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.D(0,$.bz())){u=this.y
t=[P.r]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.D(0,$.bA())){u=this.z
t=[P.r]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.D(0,$.dr())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.D(0,$.ds())){u=this.Q
t=[P.r]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.D(0,$.cp()))return H.d([this.ch],[P.r])
else if(a.D(0,$.bw())){u=this.cx
t=[P.r]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.r])},
cS:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d6()
this.d.P(0,new F.jB(u))
u=u.a
this.r=u.w(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.aa()
u=this.a.e
if(u!=null)u.aE(0)}return!0},
cQ:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.d6()
this.d.P(0,new F.jA(u))
u=u.a
this.x=u.w(0,Math.sqrt(u.H(u)))
u=this.a
if(u!=null){u.aa()
u=this.a.e
if(u!=null)u.aE(0)}return!0},
D:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
I:function(a){var u,t,s
u=H.d([],[P.e])
C.a.h(u,C.c.aq(J.av(this.e),0))
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
C.a.h(u,V.a_(this.ch,3,0))
t=this.cx
if(t!=null)C.a.h(u,t.i(0))
else C.a.h(u,"-")
s=C.a.m(u,", ")
return a+"{"+s+"}"},
T:function(){return this.I("")}}
F.jB.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jA.prototype={
$1:function(a){var u,t
H.f(a,"$iaa")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.p(0,u)}},
$S:7}
F.jr.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.c(P.x("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.aa()
return!0},
em:function(a,b,c,d,e,f,g,h,i){var u=F.eB(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bF:function(a,b,c,d,e,f){return this.em(a,null,b,c,null,d,e,f,0)},
jS:function(a,b,c,d,e,f){return this.em(a,null,b,c,d,e,f,null,0)},
gl:function(a){return this.c.length},
at:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cS()
return!0},
cR:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)u[s].cQ()
return!0},
k5:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.w(0,Math.sqrt(p*p+o*o+n*n))
if(!J.a0(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
this.E()
u=H.d([],[P.e])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
T:function(){return this.I("")},
sjs:function(a){this.c=H.k(a,"$ib",[F.ag],"$ab")}}
F.js.prototype={
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
P:function(a,b){H.n(b,{func:1,ret:-1,args:[F.aa]})
C.a.P(this.b,b)
C.a.P(this.c,new F.jt(this,b))
C.a.P(this.d,new F.ju(this,b))},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
T:function(){return this.I("")},
shx:function(a){this.b=H.k(a,"$ib",[F.aa],"$ab")},
shy:function(a){this.c=H.k(a,"$ib",[F.aa],"$ab")},
shz:function(a){this.d=H.k(a,"$ib",[F.aa],"$ab")}}
F.jt.prototype={
$1:function(a){H.f(a,"$iaa")
if(!J.a0(a.a,this.a))this.b.$1(a)},
$S:7}
F.ju.prototype={
$1:function(a){var u
H.f(a,"$iaa")
u=this.a
if(!J.a0(a.a,u)&&!J.a0(a.b,u))this.b.$1(a)},
$S:7}
F.jv.prototype={
gl:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
T:function(){return this.I("")},
shJ:function(a){this.b=H.k(a,"$ib",[F.br],"$ab")},
shK:function(a){this.c=H.k(a,"$ib",[F.br],"$ab")}}
F.jx.prototype={}
F.jw.prototype={
bk:function(a,b,c){return J.a0(b.f,c.f)}}
F.jy.prototype={}
F.i5.prototype={
bl:function(a){var u,t,s,r,q,p,o,n,m
H.k(a,"$ib",[F.ag],"$ab")
u=V.d6()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.K(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.w(0,Math.sqrt(u.H(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.D)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.w(0,Math.sqrt(o*o+n*n+m*m))}if(!J.a0(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.J(null)}}}return}}
F.jz.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.T()},
I:function(a){var u,t,s,r
u=H.d([],[P.e])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)C.a.h(u,t[r].I(a))
return C.a.m(u,"\n")},
T:function(){return this.I("")},
scw:function(a){this.b=H.k(a,"$ib",[F.bO],"$ab")}}
O.dZ.prototype={
gu:function(){var u=this.dy
if(u==null){u=D.P()
this.dy=u}return u},
a2:function(a){var u
H.f(a,"$iA")
u=this.dy
if(u!=null)u.J(a)},
cv:function(){return this.a2(null)},
ed:function(a){H.f(a,"$iA")
this.a=null
this.a2(a)},
j_:function(){return this.ed(null)},
hY:function(a,b){var u=V.ax
u=new D.bK(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a2(u)},
i_:function(a,b){var u=V.ax
u=new D.bL(a,H.k(b,"$ii",[u],"$ai"),this,[u])
u.b=!0
this.a2(u)},
dV:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.f.ac(u.e.length+3,4)*4
s=C.f.ac(u.f.length+3,4)*4
r=C.f.ac(u.r.length+3,4)*4
q=C.f.ac(u.x.length+3,4)*4
p=C.f.ac(u.y.length+3,4)*4
o=C.f.ac(u.z.length+3,4)*4
n=C.f.ac(this.e.a.length+3,4)*4
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
a7=$.b1()
if(a0){b=$.by()
a7=new Z.bh(a7.a|b.a)}if(a1){b=$.bx()
a7=new Z.bh(a7.a|b.a)}if(a2){b=$.bz()
a7=new Z.bh(a7.a|b.a)}if(a3){b=$.bA()
a7=new Z.bh(a7.a|b.a)}if(a5){b=$.bw()
a7=new Z.bh(a7.a|b.a)}return new A.hP(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
a1:function(a,b){H.k(a,"$ib",[T.cV],"$ab")
if(b!=null)if(!C.a.a_(a,b)){b.a=a.length
C.a.h(a,b)}},
aw:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.aw(u,u.length,0,[H.u(u,0)]);u.F();){t=u.d
t.toString
s=$.jq
if(s==null){s=new V.K(0,0,1)
$.jq=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.dr(s)}}},
fg:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.dV()
t=H.f(a2.fr.j(0,u.au),"$ie_")
if(t==null){t=A.oi(u,a2.a)
a2.eo(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.bI
u=a3.e
if(!(u instanceof Z.ct)){a3.e=null
u=null}if(u==null||!u.d.D(0,r)){u=s.r1
if(u)a3.d.at()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.cR()
p.a.cR()
p=p.e
if(p!=null)p.aE(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.k5()
o=o.e
if(o!=null)o.aE(0)}m=a3.d.ew(new Z.eD(a2.a),r)
m.aO($.b1()).e=this.a.Q.c
if(u)m.aO($.by()).e=this.a.cx.c
if(q)m.aO($.bx()).e=this.a.ch.c
if(s.rx)m.aO($.bz()).e=this.a.cy.c
if(p)m.aO($.bA()).e=this.a.db.c
if(s.x1)m.aO($.bw()).e=this.a.dx.c
a3.e=m}u=T.cV
l=H.d([],[u])
this.a.a6(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.ga8(p)
q=q.dy
q.toString
q.ar(p.ak(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.ga8(p)
o=a2.dx
o=p.A(0,o.ga8(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ar(p.ak(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gl4()
o=a2.dx
o=p.A(0,o.ga8(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ar(p.ak(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ar(C.r.ak(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ar(C.r.ak(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ar(C.r.ak(p,!0))}if(s.aC>0){k=this.e.a.length
q=this.a.k4
C.b.W(q.a,q.d,k)
for(q=[P.r],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.h(o,j)
o=o[j]
p.toString
H.f(o,"$iax")
p=p.r1
if(j>=p.length)return H.h(p,j)
p=p[j]
i=new Float32Array(H.cf(H.k(o.ak(0,!0),"$ib",q,"$ab")))
C.b.fp(p.a,p.d,!1,i)}}switch(s.a){case C.d:break
case C.j:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.f.d)
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
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.f.e)
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
C.b.C(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.d:break
case C.j:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.r.d)
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
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.r.e)
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
C.b.C(p.a,p.d,o,n,q)
break}switch(s.c){case C.d:break
case C.j:q=this.a
p=this.x.f
q=q.au
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.x.d)
q=this.a
p=this.x.d
q.as(q.bI,q.bJ,p)
p=this.a
q=this.x.f
p=p.au
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.x.e)
q=this.a
p=this.x.e
q.an(q.eE,q.bJ,p)
p=this.a
q=this.x.f
p=p.au
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.d){case C.d:break
case C.j:q=this.a
p=this.y.f
q=q.bK
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
break
case C.h:this.a1(l,this.y.d)
q=this.a
p=this.y.d
q.as(q.eF,q.bL,p)
p=this.a
q=this.y.f
p=p.bK
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break
case C.i:this.a1(l,this.y.e)
q=this.a
p=this.y.e
q.an(q.eG,q.bL,p)
p=this.a
q=this.y.f
p=p.bK
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
break}switch(s.e){case C.d:break
case C.j:q=this.a
p=this.z.f
q=q.bM
q.toString
o=p.a
n=p.b
p=p.c
C.b.C(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bO
C.b.R(p.a,p.d,n)
break
case C.h:this.a1(l,this.z.d)
q=this.a
p=this.z.d
q.as(q.eH,q.bN,p)
p=this.a
q=this.z.f
p=p.bM
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bO
C.b.R(q.a,q.d,n)
break
case C.i:this.a1(l,this.z.e)
q=this.a
p=this.z.e
q.an(q.eI,q.bN,p)
p=this.a
q=this.z.f
p=p.bM
p.toString
o=q.a
n=q.b
q=q.c
C.b.C(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bO
C.b.R(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.eT
C.b.W(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.cZ
if(g>=o.length)return H.h(o,g)
d=o[g]
o=h.dr(e.a)
n=o.a
c=o.b
b=o.c
b=o.w(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.C(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.C(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.eU
C.b.W(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.d_
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbo(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bt(e.gbo(e))
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcL()
n=d.e
C.b.R(n.a,n.d,o)
o=e.gcM()
n=d.f
C.b.R(n.a,n.d,o)
o=e.gcN()
n=d.r
C.b.R(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.eV
C.b.W(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.d0
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbo(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e).ly()
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bt(e.gbo(e))
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gt(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glw()
n=d.f
C.b.R(n.a,n.d,o)
o=e.glv()
n=d.r
C.b.R(n.a,n.d,o)
o=e.gcL()
n=d.x
C.b.R(n.a,n.d,o)
o=e.gcM()
n=d.y
C.b.R(n.a,n.d,o)
o=e.gcN()
n=d.z
C.b.R(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.eW
C.b.W(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
n=this.a.d1
if(g>=n.length)return H.h(n,g)
d=n[g]
n=e.gbr()
H.k(l,"$ib",o,"$ab")
if(!C.a.a_(l,n)){n.a=l.length
C.a.h(l,n)}n=e.gcX(e)
c=d.d
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc4()
c=d.b
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=e.gc1(e)
c=d.c
C.b.C(c.a,c.d,n.a,n.b,n.c)
n=h.dr(e.gcX(e))
c=n.a
b=n.b
a=n.c
a=n.w(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.C(b.a,b.d,c,n,a)
a=e.gt(e)
n=d.f
C.b.C(n.a,n.d,a.a,a.b,a.c)
a=e.gbr()
n=a.gbY(a)
if(!n){n=d.x
C.b.W(n.a,n.d,1)}else{n=d.r
c=a.gbY(a)
b=n.a
n=n.d
if(!c)C.b.W(b,n,0)
else C.b.W(b,n,a.gkF(a))
n=d.x
C.b.W(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.eX
C.b.W(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.y,p=q.length,o=[P.r],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
c=this.a.d2
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gbr()
H.k(l,"$ib",n,"$ab")
if(!C.a.a_(l,c)){c.a=l.length
C.a.h(l,c)}a0=h.A(0,e.ga8(e))
c=e.ga8(e)
b=$.cN
if(b==null){b=new V.Z(0,0,0)
$.cN=b}b=c.bt(b)
c=d.b
C.b.C(c.a,c.d,b.a,b.b,b.c)
c=$.cN
if(c==null){c=new V.Z(0,0,0)
$.cN=c}c=a0.bt(c)
b=d.c
C.b.C(b.a,b.d,c.a,c.b,c.c)
c=a0.d8(0)
b=d.d
i=new Float32Array(H.cf(H.k(new V.e1(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).ak(0,!0),"$ib",o,"$ab")))
C.b.fo(b.a,b.d,!1,i)
b=e.gt(e)
c=d.e
C.b.C(c.a,c.d,b.a,b.b,b.c)
b=e.gbr()
c=b.gbY(b)
if(!c){c=d.r
C.b.W(c.a,c.d,1)}else{c=d.f
a=b.d
a1=c.a
c=c.d
if(a<6)C.b.W(a1,c,0)
else C.b.W(a1,c,b.a)
c=d.r
C.b.W(c.a,c.d,0)}c=e.gcL()
b=d.x
C.b.R(b.a,b.d,c)
c=e.gcM()
b=d.y
C.b.R(b.a,b.d,c)
c=e.gcN()
b=d.z
C.b.R(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.eY
C.b.W(q.a,q.d,k)
q=a2.db
h=q.ga8(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.D)(q),++f){e=q[f]
o=this.a.d3
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gbr()
H.k(l,"$ib",u,"$ab")
if(!C.a.a_(l,o)){o.a=l.length
C.a.h(l,o)}o=e.gbo(e)
n=d.b
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gcX(e)
n=d.c
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc4()
n=d.d
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gc1(e)
n=d.e
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=h.bt(e.gbo(e))
n=d.f
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.gbr()
n=o.gbY(o)
if(!n){o=d.x
C.b.W(o.a,o.d,1)}else{n=d.r
c=o.gbY(o)
b=n.a
n=n.d
if(!c)C.b.W(b,n,0)
else C.b.W(b,n,o.gkF(o))
o=d.x
C.b.W(o.a,o.d,0)}o=e.gt(e)
n=d.y
C.b.C(n.a,n.d,o.a,o.b,o.c)
o=e.glz()
n=d.z
C.b.R(n.a,n.d,o)
o=e.glA()
n=d.Q
C.b.R(n.a,n.d,o)
o=e.gcL()
n=d.ch
C.b.R(n.a,n.d,o)
o=e.gcM()
n=d.cx
C.b.R(n.a,n.d,o)
o=e.gcN()
n=d.cy
C.b.R(n.a,n.d,o);++g}}}switch(s.f){case C.d:break
case C.j:break
case C.h:this.a1(l,this.Q.d)
u=this.a
q=this.Q.d
u.as(u.eJ,u.bP,q)
break
case C.i:this.a1(l,this.Q.e)
u=this.a
q=this.Q.e
u.an(u.eK,u.bP,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.ga8(q).d8(0)
a2.Q=q}u=u.id
u.toString
u.ar(q.ak(0,!0))}if(s.dy){this.a1(l,this.ch)
u=this.a
q=this.ch
u.an(u.eL,u.eM,q)
switch(s.r){case C.d:break
case C.j:u=this.a
q=this.cx.f
u=u.bQ
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
break
case C.h:this.a1(l,this.cx.d)
u=this.a
q=this.cx.d
u.as(u.eN,u.bR,q)
q=this.a
u=this.cx.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break
case C.i:this.a1(l,this.cx.e)
u=this.a
q=this.cx.e
u.an(u.eO,u.bR,q)
q=this.a
u=this.cx.f
q=q.bQ
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
break}switch(s.x){case C.d:break
case C.j:u=this.a
q=this.cy.f
u=u.bT
u.toString
p=q.a
o=q.b
q=q.c
C.b.C(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bS
C.b.R(q.a,q.d,o)
break
case C.h:this.a1(l,this.cy.d)
u=this.a
q=this.cy.d
u.as(u.eP,u.bU,q)
q=this.a
u=this.cy.f
q=q.bT
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bS
C.b.R(u.a,u.d,o)
break
case C.i:this.a1(l,this.cy.e)
u=this.a
q=this.cy.e
u.an(u.eQ,u.bU,q)
q=this.a
u=this.cy.f
q=q.bT
q.toString
p=u.a
o=u.b
u=u.c
C.b.C(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bS
C.b.R(u.a,u.d,o)
break}}u=s.y
q=u!==C.d
if(q){switch(u){case C.d:break
case C.j:u=this.a
p=this.db.f
u=u.bV
C.b.R(u.a,u.d,p)
break
case C.h:this.a1(l,this.db.d)
u=this.a
p=this.db.d
u.as(u.eR,u.bW,p)
p=this.a
u=this.db.f
p=p.bV
C.b.R(p.a,p.d,u)
break
case C.i:this.a1(l,this.db.e)
u=this.a
p=this.db.e
u.an(u.eS,u.bW,p)
p=this.a
u=this.db.f
p=p.bV
C.b.R(p.a,p.d,u)
break}u=a2.a
C.b.cY(u,3042)
C.b.k0(u,770,771)}for(j=0;j<l.length;++j)l[j].a6(a2)
u=a3.e
u.a6(a2)
u.aj(a2)
u.aT(a2)
if(q)C.b.ko(a2.a,3042)
for(u=a2.a,j=0;j<l.length;++j){q=l[j]
if(q.c){q.c=!1
C.b.cI(u,33984+q.a)
C.b.aL(u,34067,null)}}q=this.a
q.toString
C.b.ds(u,null)
q.x.eA()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dV().au},
shj:function(a){this.e=H.k(a,"$ia5",[V.ax],"$aa5")}}
O.hN.prototype={
aJ:function(){this.dF()
var u=this.f
if(!(Math.abs(u-1)<$.U().a)){this.f=1
u=new D.O(this.b,u,1,this,[P.r])
u.b=!0
this.a.a2(u)}}}
O.e0.prototype={
aJ:function(){},
b_:function(){},
k6:function(a){var u
if(this.c!==C.d){this.c=C.d
u=this.a
u.a=null
u.a2(null)}this.aJ()
this.a.a2(null)}}
O.hO.prototype={}
O.b9.prototype={
cD:function(a){var u,t
if(!J.a0(this.f,a)){u=this.f
this.f=a
t=new D.O(this.b+".color",u,a,this,[V.v])
t.b=!0
this.a.a2(t)}},
aJ:function(){this.dF()
this.cD(new V.v(0,0,0))},
b_:function(){this.fR()
this.cD(new V.v(1,1,1))},
st:function(a,b){var u
if(this.c===C.d){this.c=C.j
this.b_()
u=this.a
u.a=null
u.a2(null)}this.cD(b)}}
O.hQ.prototype={
bC:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.U().a)){this.ch=a
u=new D.O(this.b+".refraction",u,a,this,[P.r])
u.b=!0
this.a.a2(u)}},
aJ:function(){this.dG()
this.bC(1)},
b_:function(){this.bw()
this.bC(1)},
saN:function(a){var u
if(a<=0)this.k6(0)
else if(this.c===C.d){this.c=C.j
this.bw()
this.bC(1)
u=this.a
u.a=null
u.a2(null)}this.bC(a)}}
O.hR.prototype={
bD:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.U().a)){this.ch=a
u=new D.O(this.b+".shininess",u,a,this,[P.r])
u.b=!0
this.a.a2(u)}},
aJ:function(){this.dG()
this.bD(100)},
b_:function(){this.bw()
this.bD(100)}}
O.ef.prototype={
gu:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
a2:function(a){var u
H.f(a,"$iA")
u=this.e
if(u!=null)u.J(a)},
cv:function(){return this.a2(null)},
fg:function(a,b){var u,t,s,r,q,p
if(this.a==null){u=H.f(a.fr.j(0,"Skybox"),"$ieg")
if(u==null){t=a.a
u=new A.eg(t,"Skybox")
u.dH(t,"Skybox")
u.f7(0,$.oD,$.oC)
u.z=u.x.j(0,"posAttr")
u.Q=H.l(u.y.j(0,"fov"),"$ia3")
u.ch=H.l(u.y.j(0,"ratio"),"$ia3")
u.cx=H.l(u.y.j(0,"boxClr"),"$iN")
u.cy=H.l(u.y.j(0,"boxTxt"),"$iam")
u.db=H.l(u.y.j(0,"viewMat"),"$iaB")
a.eo(u)}this.a=u}if(b.e==null){t=b.d.ew(new Z.eD(a.a),$.b1())
t.aO($.b1()).e=this.a.z.c
b.e=t}t=this.c
if(t!=null){t.a=1
t.a6(a)}t=a.d
s=a.c
r=this.a
r.a6(a)
q=this.b
p=r.Q
C.b.R(p.a,p.d,q)
q=r.ch
C.b.R(q.a,q.d,t/s)
s=this.c
r.cy.dC(s)
s=this.d
t=r.cx
C.b.C(t.a,t.d,s.a,s.b,s.c)
s=a.db
s=s.ga8(s).d8(0)
r=r.db
r.toString
r.ar(s.ak(0,!0))
t=b.e
if(t instanceof Z.ct){t.a6(a)
t.aj(a)
t.aT(a)}else b.e=null
t=this.a
t.toString
C.b.ds(a.a,null)
t.x.eA()
t=this.c
if(t!=null)t.aT(a)}}
O.bP.prototype={}
T.cV.prototype={}
T.cW.prototype={
gu:function(){var u=this.e
if(u==null){u=D.P()
this.e=u}return u},
a6:function(a){var u
if(!this.c&&this.d>=6){this.c=!0
u=a.a
C.b.cI(u,33984+this.a)
C.b.aL(u,34067,this.b)}},
aT:function(a){var u
if(this.c){this.c=!1
u=a.a
C.b.cI(u,33984+this.a)
C.b.aL(u,34067,null)}}}
T.iS.prototype={
aZ:function(a,b,c,d,e,f){var u,t
u=document.createElement("img")
u.src=c;++this.d
t=W.p
W.ac(u,"load",H.n(new T.iT(this,u,!1,b,!1,d,a),{func:1,ret:-1,args:[t]}),!1,t)},
j0:function(a,b,c){var u,t,s,r
b=V.lW(b,2)
u=V.lW(a.width,2)
t=V.lW(a.height,2)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lr(null,null)
s.width=u
s.height=t
r=H.f(C.q.fz(s,"2d"),"$ic_")
r.imageSmoothingEnabled=!1;(r&&C.D).kq(r,a,0,0,s.width,s.height)
return P.ps(C.D.hD(r,0,0,s.width,s.height))}}}
T.iT.prototype={
$1:function(a){var u,t,s
u=this.a
t=u.j0(this.b,u.c,this.c)
s=u.a
C.b.aL(s,34067,this.d)
C.b.l3(s,37440,this.e?1:0)
C.b.lg(s,this.f,0,6408,6408,5121,t)
C.b.aL(s,34067,null)
s=this.r
if(++s.d>=6){s=s.e
if(s!=null)s.kt()}++u.e},
$S:15}
V.bl.prototype={
aQ:function(a,b){return!0},
i:function(a){return"all"},
$iaD:1}
V.aD.prototype={}
V.dY.prototype={
aQ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s)if(u[s].aQ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.D)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sag:function(a){this.a=H.k(a,"$ib",[V.aD],"$ab")},
$iaD:1}
V.ay.prototype={
aQ:function(a,b){return!this.fQ(0,b)},
i:function(a){return"!["+this.dE(0)+"]"}}
V.ii.prototype={
aQ:function(a,b){return this.a<=b&&this.b>=b},
i:function(a){var u,t
u=H.c9(this.a)
t=H.c9(this.b)
return u+".."+t},
$iaD:1}
V.it.prototype={
fW:function(a){var u,t
if(a.a.length<=0)throw H.c(P.x("May not create a SetMatcher with zero characters."))
u=new H.aS([P.o,P.S])
for(t=new H.cF(a,a.gl(a),0,[H.an(a,"z",0)]);t.F();)u.n(0,t.d,!0)
this.sj3(u)},
aQ:function(a,b){return this.a.bG(0,b)},
i:function(a){var u=this.a
return P.ej(u.gad(u),0,null)},
sj3:function(a){this.a=H.k(a,"$iF",[P.o,P.S],"$aF")},
$iaD:1}
V.cR.prototype={
m:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cY(this.a.k(0,b))
r.sag(H.d([],[V.aD]))
r.c=!1
C.a.h(this.c,r)
return r},
kx:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.D)(u),++s){r=u[s]
if(r.aQ(0,a))return r}return},
i:function(a){return this.b},
sjn:function(a){this.c=H.k(a,"$ib",[V.cY],"$ab")}}
V.er.prototype={
i:function(a){var u,t
u=H.lX(this.b,"\n","\\n")
t=H.lX(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cX.prototype={
aS:function(a,b,c){var u,t,s
H.k(c,"$ib",[P.e],"$ab")
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.D)(c),++t){s=c[t]
this.c.n(0,s,b)}},
i:function(a){return this.b},
siV:function(a){var u=P.e
this.c=H.k(a,"$iF",[u,u],"$aF")}}
V.iW.prototype={
k:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.cR(this,b)
u.sjn(H.d([],[V.cY]))
u.d=null
this.a.n(0,b,u)}return u},
U:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cX(this,a)
t=P.e
u.siV(new H.aS([t,t]))
this.b.n(0,a,u)}return u},
fn:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.d([],[V.er])
t=this.c
s=[P.o]
r=H.d([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.c.K(a,o)
m=t.kx(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.ej(r,0,null)
throw H.c(P.x("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.d([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.ej(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.er(j==null?k.b:j,l,o)}++o}}},
sjc:function(a){this.a=H.k(a,"$iF",[P.e,V.cR],"$aF")},
sjg:function(a){this.b=H.k(a,"$iF",[P.e,V.cX],"$aF")}}
V.cY.prototype={
i:function(a){return this.b.b+": "+this.dE(0)}}
X.bY.prototype={$ibb:1}
X.hm.prototype={
gu:function(){var u=this.x
if(u==null){u=D.P()
this.x=u}return u},
ay:function(a){var u=this.x
if(u!=null)u.J(a)},
sex:function(a,b){var u
if(this.b){this.b=!1
u=new D.O("clearColor",!0,!1,this,[P.S])
u.b=!0
this.ay(u)}},
a6:function(a){var u,t,s,r,q,p,o,n
u=a.a
C.b.k_(u,36160,null)
C.b.cY(u,2884)
C.b.cY(u,2929)
C.b.kn(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.G(t)
p=C.e.av(q*t)
q=r.b
if(typeof s!=="number")return H.G(s)
o=C.e.av(q*s)
q=C.e.av(r.c*t)
a.c=q
r=C.e.av(r.d*s)
a.d=r
C.b.lo(u,p,o,q,r)
C.b.k9(u,this.c)
if(this.b){r=this.a
C.b.k8(u,r.a,r.b,r.c,r.d)
n=16640}else n=256
C.b.k7(u,n)}}
X.hr.prototype={
gu:function(){var u=this.b
if(u==null){u=D.P()
this.b=u}return u},
a6:function(a){var u
a.cy.c0(V.c6())
u=V.c6()
a.db.c0(u)},
aT:function(a){a.cy.aR()
a.db.aR()},
$ibb:1,
$ibY:1}
X.e7.prototype={
gu:function(){var u=this.f
if(u==null){u=D.P()
this.f=u}return u},
ay:function(a){var u
H.f(a,"$iA")
u=this.f
if(u!=null)u.J(a)},
hd:function(){return this.ay(null)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l
u=a.c
t=a.d
s=this.c
r=this.d
q=this.e
p=q-r
o=1/Math.tan(s*0.5)
n=V.ba(-o/(u/t),0,0,0,0,o,0,0,0,0,q/p,-q*r/p,0,0,1,0)
a.cy.c0(n)
u=$.mq
if(u==null){u=V.ms()
t=V.mO()
s=$.mK
if(s==null){s=new V.K(0,0,-1)
$.mK=s}s=V.ml(u,t,s)
$.mq=s
m=s}else m=u
u=this.b
if(u!=null){l=u.b7(0,a,this)
if(l!=null)m=l.A(0,m)}a.db.c0(m)},
aT:function(a){a.cy.aR()
a.db.aR()},
$ibb:1,
$ibY:1}
X.cT.prototype={}
V.bE.prototype={
bx:function(a){this.b=new P.hp(C.Y)
this.c=null
this.scj(H.d([],[[P.b,W.aI]]))},
S:function(a,b){var u,t,s,r,q,p,o,n,m
u=this.d
if(u.length===0)C.a.h(u,H.d([],[W.aI]))
t=a.split("\n")
for(u=t.length,s=[W.aI],r=!0,q=0;q<u;++q){p=t[q]
if(r)r=!1
else C.a.h(this.d,H.d([],s))
o=document.createElement("div")
o.className="codePart"
H.J(p)
n=this.b.ho(p,0,p.length)
m=n==null?p:n
C.k.fI(o,H.lX(m," ","&nbsp;"))
m=o.style
m.color=b
C.a.h(C.a.gaD(this.d),o)}},
fe:function(a,b){var u,t,s,r
H.k(b,"$ib",[P.e],"$ab")
this.scj(H.d([],[[P.b,W.aI]]))
u=C.a.m(b,"\n")
t=this.c
if(t==null){t=this.bH()
this.c=t}for(t=t.fn(u),s=t.length,r=0;r<t.length;t.length===s||(0,H.D)(t),++r)this.c_(t[r])},
scj:function(a){this.d=H.k(a,"$ib",[[P.b,W.aI]],"$ab")}}
V.lh.prototype={
$1:function(a){H.f(a,"$ibe")
P.aC(C.e.fm(this.a.gkD(),2)+" fps")},
$S:52}
V.h1.prototype={
c_:function(a){switch(a.a){case"Class":this.S(a.b,"#551")
break
case"Comment":this.S(a.b,"#777")
break
case"Id":this.S(a.b,"#111")
break
case"Num":this.S(a.b,"#191")
break
case"Reserved":this.S(a.b,"#119")
break
case"String":this.S(a.b,"#171")
break
case"Symbol":this.S(a.b,"#616")
break
case"Type":this.S(a.b,"#B11")
break
case"Whitespace":this.S(a.b,"#111")
break}},
bH:function(){var u,t,s,r
u=V.iX()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.y(new H.w("_"))
C.a.h(t.a,s)
s=V.a2("a","z")
C.a.h(t.a,s)
s=V.a2("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.y(new H.w("_"))
C.a.h(s.a,t)
t=V.a2("0","9")
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.y(new H.w("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.y(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.y(new H.w("<>{}()\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"OpenDoubleStr")
t=V.y(new H.w('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenDoubleStr").m(0,"CloseDoubleStr")
s=V.y(new H.w('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenDoubleStr").m(0,"EscDoubleStr")
t=V.y(new H.w("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscDoubleStr").m(0,"OpenDoubleStr")
s=V.y(new H.w('"'))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenDoubleStr").m(0,"OpenDoubleStr").a,new V.bl())
s=u.k(0,"Start").m(0,"OpenSingleStr")
t=V.y(new H.w("'"))
C.a.h(s.a,t)
t=u.k(0,"OpenSingleStr").m(0,"CloseSingleStr")
s=V.y(new H.w("'"))
C.a.h(t.a,s)
s=u.k(0,"OpenSingleStr").m(0,"EscSingleStr")
t=V.y(new H.w("\\"))
C.a.h(s.a,t)
t=u.k(0,"EscSingleStr").m(0,"OpenSingleStr")
s=V.y(new H.w("'"))
C.a.h(t.a,s)
C.a.h(u.k(0,"OpenSingleStr").m(0,"OpenSingleStr").a,new V.bl())
s=u.k(0,"Start").m(0,"Slash")
t=V.y(new H.w("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.y(new H.w("/"))
C.a.h(t.a,s)
s=u.k(0,"Comment").m(0,"EndComment")
t=V.y(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aD]
s.sag(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"MLComment")
s=V.y(new H.w("*"))
C.a.h(t.a,s)
s=u.k(0,"MLComment").m(0,"MLCStar")
t=V.y(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"MLComment")
s=new V.ay()
s.sag(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"MLCStar").m(0,"EndComment")
s=V.y(new H.w("/"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Whitespace")
t=V.y(new H.w(" \n\t"))
C.a.h(s.a,t)
t=u.k(0,"Whitespace").m(0,"Whitespace")
s=V.y(new H.w(" \n\t"))
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
s=[P.e]
t.aS(0,"Class",H.d(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotater","Scenes","Shapes","Techniques","ThreeDart"],s))
t.aS(0,"Type",H.d(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],s))
t.aS(0,"Reserved",H.d(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],s))
return u}}
V.hn.prototype={
c_:function(a){switch(a.a){case"Builtin":this.S(a.b,"#411")
break
case"Comment":this.S(a.b,"#777")
break
case"Id":this.S(a.b,"#111")
break
case"Num":this.S(a.b,"#191")
break
case"Preprocess":this.S(a.b,"#737")
break
case"Reserved":this.S(a.b,"#119")
break
case"Symbol":this.S(a.b,"#611")
break
case"Type":this.S(a.b,"#171")
break
case"Whitespace":this.S(a.b,"#111")
break}},
bH:function(){var u,t,s,r
u=V.iX()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.y(new H.w("_"))
C.a.h(t.a,s)
s=V.a2("a","z")
C.a.h(t.a,s)
s=V.a2("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.y(new H.w("_"))
C.a.h(s.a,t)
t=V.a2("0","9")
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Int")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Int").m(0,"Int")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Int").m(0,"FloatDot")
s=V.y(new H.w("."))
C.a.h(t.a,s)
s=u.k(0,"FloatDot").m(0,"Float")
t=V.a2("0","9")
C.a.h(s.a,t)
t=u.k(0,"Float").m(0,"Float")
s=V.a2("0","9")
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Sym")
t=V.y(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(s.a,t)
t=u.k(0,"Sym").m(0,"Sym")
s=V.y(new H.w("<>{}()[]\\-+*%!&|=.,?:;"))
C.a.h(t.a,s)
s=u.k(0,"Start").m(0,"Slash")
t=V.y(new H.w("/"))
C.a.h(s.a,t)
t=u.k(0,"Slash").m(0,"Comment")
s=V.y(new H.w("/"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Slash").m(0,"Sym").a,new V.bl())
s=u.k(0,"Comment").m(0,"EndComment")
t=V.y(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Comment").m(0,"Comment")
s=new V.ay()
r=[V.aD]
s.sag(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Preprocess")
s=V.y(new H.w("#"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"Preprocess")
t=new V.ay()
t.sag(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("\n"))
C.a.h(t.a,s)
s=u.k(0,"Preprocess").m(0,"EndPreprocess")
t=V.y(new H.w("\n"))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"Whitespace")
s=V.y(new H.w(" \n\t"))
C.a.h(t.a,s)
s=u.k(0,"Whitespace").m(0,"Whitespace")
t=V.y(new H.w(" \n\t"))
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
t=[P.e]
s.aS(0,"Type",H.d(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
s.aS(0,"Reserved",H.d(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
s.aS(0,"Builtin",H.d(["gl_FragColor","gl_Position"],t))
return u}}
V.ho.prototype={
c_:function(a){switch(a.a){case"Attr":this.S(a.b,"#911")
this.S("=","#111")
break
case"Id":this.S(a.b,"#111")
break
case"Other":this.S(a.b,"#111")
break
case"Reserved":this.S(a.b,"#119")
break
case"String":this.S(a.b,"#171")
break
case"Symbol":this.S(a.b,"#616")
break}},
bH:function(){var u,t,s
u=V.iX()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Id")
s=V.y(new H.w("_"))
C.a.h(t.a,s)
s=V.a2("a","z")
C.a.h(t.a,s)
s=V.a2("A","Z")
C.a.h(t.a,s)
s=u.k(0,"Id").m(0,"Id")
t=V.y(new H.w("_"))
C.a.h(s.a,t)
t=V.a2("0","9")
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Id").m(0,"Attr")
s=V.y(new H.w("="))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Sym")
s=V.y(new H.w("</\\-!>="))
C.a.h(t.a,s)
s=u.k(0,"Sym").m(0,"Sym")
t=V.y(new H.w("</\\-!>="))
C.a.h(s.a,t)
t=u.k(0,"Start").m(0,"OpenStr")
s=V.y(new H.w('"'))
C.a.h(t.a,s)
s=u.k(0,"OpenStr").m(0,"CloseStr")
t=V.y(new H.w('"'))
C.a.h(s.a,t)
t=u.k(0,"OpenStr").m(0,"EscStr")
s=V.y(new H.w("\\"))
C.a.h(t.a,s)
s=u.k(0,"EscStr").m(0,"OpenStr")
t=V.y(new H.w('"'))
C.a.h(s.a,t)
C.a.h(u.k(0,"OpenStr").m(0,"OpenStr").a,new V.bl())
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bl())
t=u.k(0,"Other").m(0,"Other")
s=new V.ay()
s.sag(H.d([],[V.aD]))
C.a.h(t.a,s)
t=V.y(new H.w('</\\-!>=_"'))
C.a.h(s.a,t)
t=V.a2("a","z")
C.a.h(s.a,t)
t=V.a2("A","Z")
C.a.h(s.a,t)
t=u.k(0,"Sym")
t.d=t.a.U("Symbol")
t=u.k(0,"CloseStr")
t.d=t.a.U("String")
t=u.k(0,"Id")
s=t.a.U("Id")
t.d=s
s.aS(0,"Reserved",H.d(["DOCTYPE","html","head","meta","link","title","body","script"],[P.e]))
s=u.k(0,"Attr")
s.d=s.a.U("Attr")
s=u.k(0,"Other")
s.d=s.a.U("Other")
return u}}
V.ib.prototype={
fe:function(a,b){H.k(b,"$ib",[P.e],"$ab")
this.scj(H.d([],[[P.b,W.aI]]))
this.S(C.a.m(b,"\n"),"#111")},
c_:function(a){},
bH:function(){return}}
V.ig.prototype={
cJ:function(a,b,c,d){var u,t,s,r,q,p,o,n
H.n(c,{func:1,ret:-1})
if(this.c==null)return
u=this.a
t=P.mG().gdj().j(0,H.m(u))
if(t==null)if(d){c.$0()
this.ei(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.m5(this.c).h(0,q)
o=W.o6("radio")
o.checked=s
o.name=u
u=W.p
W.ac(o,"change",H.n(new V.ih(this,o,c,b),{func:1,ret:-1,args:[u]}),!1,u)
C.G.G(q,o)
n=r.createElement("span")
n.textContent=b
C.G.G(q,n)
J.m5(this.c).h(0,r.createElement("br"))},
a9:function(a,b,c){return this.cJ(a,b,c,!1)},
ei:function(a){var u,t,s,r,q
u=P.mG()
t=P.e
s=P.oe(u.gdj(),t,t)
s.n(0,this.a,a)
r=u.fh(0,s)
t=window.history
q=r.i(0)
t.toString;(t&&C.X).iX(t,new P.kf([],[]).dt(""),"",q)}}
V.ih.prototype={
$1:function(a){if(this.b.checked){this.c.$0()
this.a.ei(this.d)}},
$S:15}
V.iy.prototype={
fX:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.p).G(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.p.G(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.k.G(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.k.G(q,p)}o=u.createElement("div")
this.a=o
C.k.G(q,o)
this.b=null
o=W.p
W.ac(u,"scroll",H.n(new V.iA(s),{func:1,ret:-1,args:[o]}),!1,o)},
en:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.k(a,"$ib",[P.e],"$ab")
this.j7()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.fn(C.a.kK(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.D)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.k.G(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.k.G(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.k.G(t,o)
break
case"Link":n=p.b
if(H.pR(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.J(m[1])
l.textContent=H.J(m[0])
C.k.G(t,l)}else{k=P.fo(C.J,n,C.m,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+H.m(k)
l.textContent=n
C.k.G(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.k.G(t,o)
break}}C.k.G(this.a,t)},
fw:function(a){var u,t,s,r
u=new V.h1("dart")
u.bx("dart")
t=new V.hn("glsl")
t.bx("glsl")
s=new V.ho("html")
s.bx("html")
r=C.a.kz(H.d([u,t,s],[V.bE]),new V.iB(a))
if(r!=null)return r
u=new V.ib("plain")
u.bx("plain")
return u},
ek:function(a4,a5,a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3
H.k(a7,"$ib",[P.e],"$ab")
u=H.d([],[P.o])
for(t=!1,s=0;s<a7.length;++s){r=a7[s]
if(J.dq(r).ab(r,"+")){C.a.n(a7,s,C.c.ax(r,1))
C.a.h(u,1)
t=!0}else if(C.c.ab(r,"-")){C.a.n(a7,s,C.c.ax(r,1))
C.a.h(u,-1)
t=!0}else C.a.h(u,0)}q=this.fw(a5)
q.fe(0,a7)
p=document
o=p.createElement("div")
o.className="codeTableScroll"
n=p.createElement("table")
n.className="codeTable"
C.k.G(o,n)
C.k.G(this.a,o)
m=P.fo(C.J,a4,C.m,!1)
l=p.createElement("tr")
l.className="headerRow"
k=p.createElement("td")
k.className="headerCell"
k.colSpan=t?3:2
j=p.createElement("div")
j.className="tableHeader"
j.id=m
i=W.m7(null)
i.href="#"+H.m(m)
i.textContent=a4
C.k.G(j,i)
C.x.G(k,j)
C.n.G(l,k)
C.o.G(n,l)
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
for(f=r.length,a0=0;a0<r.length;r.length===f||(0,H.D)(r),++a0)C.x.G(a,r[a0])
C.n.G(e,d)
C.n.G(e,c)
C.n.G(e,a)
C.o.G(n,e)}else for(f=q.d,a1=f.length,a2=a6,a0=0;a0<f.length;f.length===a1||(0,H.D)(f),++a0){r=f[a0]
e=p.createElement("tr")
e.className="codeTableRow"
d=p.createElement("td")
d.className="codeLineNums";++a2
d.textContent=""+a2
c=p.createElement("td")
c.className="codeLineText"
for(a3=C.a.gY(r);a3.F();)C.x.G(c,a3.gM(a3))
C.n.G(e,d)
C.n.G(e,c)
C.o.G(n,e)}},
jP:function(a){var u,t,s,r,q,p,o
H.k(a,"$ib",[P.e],"$ab")
u=document
t=u.createElement("table")
t.id="shellTable"
s=t.style
s.width="100%"
s.padding="0px"
s.marginLeft="auto"
s.marginRight="auto"
C.k.G(this.a,t)
r=C.o.hF(t,-1)
s=H.f((r&&C.n).e3(r,-1),"$ibd").style
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
o=H.f(C.n.e3(r,-1),"$ibd")
s=o.style
s.textAlign="center"
s.verticalAlign="top"
s.marginLeft="auto"
s.marginRight="auto";(o&&C.x).G(o,p)}},
j7:function(){var u,t,s,r
if(this.b!=null)return
u=V.iX()
u.c=u.k(0,"Start")
t=u.k(0,"Start").m(0,"Bold")
s=V.y(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Bold").m(0,"Bold")
s=new V.ay()
r=[V.aD]
s.sag(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("*"))
C.a.h(s.a,t)
t=u.k(0,"Bold").m(0,"BoldEnd")
s=V.y(new H.w("*"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Italic")
s=V.y(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Italic").m(0,"Italic")
s=new V.ay()
s.sag(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("_"))
C.a.h(s.a,t)
t=u.k(0,"Italic").m(0,"ItalicEnd")
s=V.y(new H.w("_"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"Code")
s=V.y(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Code").m(0,"Code")
s=new V.ay()
s.sag(H.d([],r))
C.a.h(t.a,s)
t=V.y(new H.w("`"))
C.a.h(s.a,t)
t=u.k(0,"Code").m(0,"CodeEnd")
s=V.y(new H.w("`"))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"Start").m(0,"LinkHead")
s=V.y(new H.w("["))
C.a.h(t.a,s)
t.c=!0
t=u.k(0,"LinkHead").m(0,"LinkTail")
s=V.y(new H.w("|"))
C.a.h(t.a,s)
s=u.k(0,"LinkHead").m(0,"LinkEnd")
t=V.y(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkHead").m(0,"LinkHead")
t=new V.ay()
t.sag(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("|]"))
C.a.h(t.a,s)
s=u.k(0,"LinkTail").m(0,"LinkEnd")
t=V.y(new H.w("]"))
C.a.h(s.a,t)
s.c=!0
s=u.k(0,"LinkTail").m(0,"LinkTail")
t=new V.ay()
t.sag(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("|]"))
C.a.h(t.a,s)
C.a.h(u.k(0,"Start").m(0,"Other").a,new V.bl())
s=u.k(0,"Other").m(0,"Other")
t=new V.ay()
t.sag(H.d([],r))
C.a.h(s.a,t)
s=V.y(new H.w("*_`["))
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
V.iA.prototype={
$1:function(a){P.mC(C.y,new V.iz(this.a))},
$S:15}
V.iz.prototype={
$0:function(){var u,t,s
u=C.e.av(document.documentElement.scrollTop)
t=this.a.style
s=H.m(-0.01*u)+"px"
t.top=s},
$S:0}
V.iB.prototype={
$1:function(a){return H.f(a,"$ibE").a===this.a},
$S:53}
D.kX.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.1,0.1,0.1))
t=u.x
t.st(0,new V.v(0.2,0.2,0.2))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.st(0,new V.v(0,0,0))
u=u.cx
u.st(0,new V.v(1,1,1))},
$S:0}
D.kY.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.11,0.11,0.1))
t=u.x
t.st(0,new V.v(0.21,0.21,0.2))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.st(0,new V.v(0,0,0))
u=u.cx
u.st(0,new V.v(1,0.9,0.5))},
$S:0}
D.kZ.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.1,0.1,0.1))
t=u.x
t.st(0,new V.v(0.1,0.1,0.1))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.saN(0.4)
t=u.cy
t.st(0,new V.v(0.6,0.6,0.6))
u=u.cx
u.st(0,new V.v(0.4,0.4,0.4))},
$S:0}
D.l7.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.1,0.1,0.1))
t=u.x
t.st(0,new V.v(0.1,0.1,0.1))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.saN(0.4)
t=u.cy
t.st(0,new V.v(0.2,0.3,1))
u=u.cx
u.st(0,new V.v(0.3,0.3,0.3))},
$S:0}
D.l8.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.1,0.1,0.1))
t=u.x
t.st(0,new V.v(0.1,0.1,0.1))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.saN(0.6)
t=u.cy
t.st(0,new V.v(0.8,0.8,0.8))
u=u.cx
u.st(0,new V.v(0.2,0.2,0.2))},
$S:0}
D.l9.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.1,0.1,0.1))
t=u.x
t.st(0,new V.v(0.1,0.1,0.1))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.saN(0.6)
t=u.cy
t.st(0,new V.v(1,1,1))
u.cx.st(0,new V.v(0,0,0))},
$S:0}
D.la.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.1,0.1,0.1))
t=u.x
t.st(0,new V.v(0.1,0.1,0.1))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.saN(0.9)
t=u.cy
t.st(0,new V.v(1,0.8,0.8))
u.cx.st(0,new V.v(0,0,0))},
$S:0}
D.lb.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0,0,0))
t=u.x
t.st(0,new V.v(0.1,0.1,0.1))
t=u.z
t.st(0,new V.v(0.1,0.1,0.1))
u.cy.saN(0.99)
t=u.cy
t.st(0,new V.v(0.95,0.95,0.95))
u.cx.st(0,new V.v(0,0,0))},
$S:0}
D.lc.prototype={
$0:function(){var u,t
u=this.a
t=u.r
t.st(0,new V.v(0.3,0.3,0.3))
t=u.x
t.st(0,new V.v(0.5,0.5,0.5))
t=u.z
t.st(0,new V.v(1,1,1))
u.cy.st(0,new V.v(0,0,0))
u=u.cx
u.st(0,new V.v(0.3,0.3,0.3))},
$S:0}
D.ld.prototype={
$0:function(){this.a.sae(0,F.lS(1,null,null,1))},
$S:0}
D.le.prototype={
$0:function(){this.a.sae(0,F.lS(15,null,new D.kW(),15))},
$S:0}
D.kW.prototype={
$3:function(a,b,c){var u,t,s,r
u=Math.cos(c*4*3.141592653589793+3.141592653589793)
t=Math.cos(b*4*3.141592653589793+3.141592653589793)
s=a.f
s=new V.K(s.a,s.b,s.c)
r=s.w(0,Math.sqrt(s.H(s)))
s=a.f
t=r.A(0,u*0.1+t*0.1)
a.sa7(0,s.p(0,new V.Z(t.a,t.b,t.c)))},
$S:5}
D.l_.prototype={
$0:function(){this.a.sae(0,F.na(1,!0,!0,1,30,1))},
$S:0}
D.l0.prototype={
$0:function(){this.a.sae(0,F.na(1,!0,!1,1,30,0))},
$S:0}
D.l1.prototype={
$0:function(){this.a.sae(0,F.nb(!0,!0,25,new D.kV(),50))},
$S:0}
D.kV.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8},
$S:6}
D.l2.prototype={
$0:function(){this.a.sae(0,F.nn(6,null,1,6))},
$S:0}
D.l3.prototype={
$0:function(){this.a.sae(0,F.nn(10,new D.kU(),1,10))},
$S:0}
D.kU.prototype={
$2:function(a,b){var u,t
u=a-0.5
t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3},
$S:6}
D.l4.prototype={
$0:function(){this.a.sae(0,F.np(30,1,15,0.5))},
$S:0}
D.l5.prototype={
$0:function(){this.a.sae(0,F.pI(120,1,2,12,0.3,3))},
$S:0}
D.l6.prototype={
$1:function(a){var u,t,s,r
H.f(a,"$iA")
u=this.a
t=this.b
s=t.a
r=[P.e]
u.ek("Vertex Shader","glsl",0,H.d((s==null?null:s.c).split("\n"),r))
t=t.a
u.ek("Fragment Shader","glsl",0,H.d((t==null?null:t.d).split("\n"),r))},
$S:11};(function aliases(){var u=J.a.prototype
u.fN=u.i
u=J.dR.prototype
u.fP=u.i
u=P.i.prototype
u.fO=u.c5
u=W.V.prototype
u.ca=u.ao
u=W.f6.prototype
u.fS=u.aA
u=O.e0.prototype
u.dF=u.aJ
u.fR=u.b_
u=O.b9.prototype
u.dG=u.aJ
u.bw=u.b_
u=V.dY.prototype
u.fQ=u.aQ
u.dE=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(P,"pm","oQ",13)
u(P,"pn","oR",13)
u(P,"po","oS",13)
t(P,"n9","pl",3)
s(W,"pB",4,null,["$4"],["oU"],27,0)
s(W,"pC",4,null,["$4"],["oV"],27,0)
var m
r(m=E.ar.prototype,"gfc",0,0,null,["$1","$0"],["fd","kV"],1,0)
r(m,"gfa",0,0,null,["$1","$0"],["fb","kS"],1,0)
q(m,"gkQ","kR",10)
q(m,"gkT","kU",10)
r(m=E.eq.prototype,"gdJ",0,0,null,["$1","$0"],["dL","dK"],1,0)
p(m,"gla","fi",3)
o(m=X.ex.prototype,"gic","ie",14)
o(m,"gi0","i1",14)
o(m,"gi6","i7",4)
o(m,"gii","ij",33)
o(m,"gig","ih",33)
o(m,"gim","io",4)
o(m,"gir","is",4)
o(m,"gia","ib",4)
o(m,"gip","iq",4)
o(m,"gi8","i9",4)
o(m,"git","iu",37)
o(m,"giv","iw",14)
o(m,"giL","iM",12)
o(m,"giH","iI",12)
o(m,"giJ","iK",12)
r(D.bG.prototype,"gh1",0,0,null,["$1","$0"],["aG","h2"],1,0)
r(m=D.dU.prototype,"ge7",0,0,null,["$1","$0"],["e8","ik"],1,0)
o(m,"gix","iy",39)
q(m,"ghV","hW",26)
q(m,"giB","iC",26)
n(V.W.prototype,"gl","d9",23)
n(V.K.prototype,"gl","d9",23)
r(m=U.cC.prototype,"gaX",0,0,null,["$1","$0"],["V","af"],1,0)
q(m,"ghT","hU",22)
q(m,"giz","iA",22)
r(m=U.ey.prototype,"gaX",0,0,null,["$1","$0"],["V","af"],1,0)
o(m,"gcm","cn",2)
o(m,"gco","cp",2)
o(m,"gcq","cr",2)
r(m=U.ez.prototype,"gaX",0,0,null,["$1","$0"],["V","af"],1,0)
o(m,"gcm","cn",2)
o(m,"gco","cp",2)
o(m,"gcq","cr",2)
o(m,"ghM","hN",2)
o(m,"ghO","hP",2)
o(m,"gjl","jm",2)
o(m,"gjj","jk",2)
o(m,"gjh","ji",2)
o(U.eA.prototype,"ghR","hS",2)
r(m=M.dB.prototype,"ga3",0,0,null,["$1","$0"],["a4","ba"],1,0)
q(m,"giD","iE",20)
q(m,"giF","iG",20)
r(M.dD.prototype,"ga3",0,0,null,["$1","$0"],["a4","ba"],1,0)
r(m=M.dI.prototype,"ga3",0,0,null,["$1","$0"],["a4","ba"],1,0)
q(m,"gi2","i3",10)
q(m,"gi4","i5",10)
r(m=O.dZ.prototype,"gcu",0,0,null,["$1","$0"],["a2","cv"],1,0)
r(m,"giZ",0,0,null,["$1","$0"],["ed","j_"],1,0)
q(m,"ghX","hY",21)
q(m,"ghZ","i_",21)
r(O.ef.prototype,"gcu",0,0,null,["$1","$0"],["a2","cv"],1,0)
r(X.e7.prototype,"ghc",0,0,null,["$1","$0"],["ay","hd"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.ly,J.a,J.aw,P.eU,P.i,H.cF,P.b6,H.c3,H.d5,H.fV,H.ij,H.j1,P.bH,H.cu,H.fb,P.ah,H.hB,H.hD,H.hw,P.fh,P.bj,P.aN,P.eE,P.iJ,P.cS,P.iK,P.be,P.ao,P.kw,P.k9,P.cd,P.eT,P.z,P.kn,P.hJ,P.c0,P.hq,P.ku,P.ks,P.S,P.aq,P.a7,P.b5,P.i9,P.ei,P.eM,P.hl,P.bI,P.b,P.F,P.M,P.aA,P.e,P.al,P.ce,P.jh,P.kc,W.fY,W.bS,W.E,W.e5,W.f6,W.ki,W.dJ,W.aF,W.k8,W.fp,P.ke,P.fm,P.k3,P.T,O.a5,O.cG,E.fP,E.ar,E.ik,E.eq,Z.eC,Z.eD,Z.ct,Z.bJ,Z.bh,D.fS,D.c2,D.A,X.dA,X.dS,X.hy,X.hG,X.aE,X.hY,X.iY,X.ex,D.bG,D.a9,D.e8,D.eh,D.en,D.eo,D.ep,V.v,V.ap,V.hb,V.e1,V.ax,V.a6,V.Z,V.az,V.ec,V.W,V.K,U.ey,U.ez,U.eA,M.dD,M.dI,M.aG,A.dx,A.fI,A.hP,A.cZ,A.d2,A.d0,A.d3,A.d1,A.d4,A.c1,A.et,A.jb,F.aa,F.hf,F.br,F.hA,F.bO,F.ee,F.iv,F.iw,F.ix,F.ag,F.jr,F.js,F.jv,F.jx,F.jy,F.jz,O.bP,O.e0,T.iS,V.bl,V.aD,V.dY,V.ii,V.it,V.cR,V.er,V.cX,V.iW,X.bY,X.cT,X.hr,X.e7,V.bE,V.ig,V.iy])
s(J.a,[J.hv,J.dQ,J.dR,J.aR,J.bM,J.bp,H.cJ,H.bN,W.j,W.fG,W.bX,W.c_,W.b3,W.b4,W.Y,W.eG,W.h2,W.h3,W.dF,W.eI,W.dH,W.eK,W.h5,W.p,W.eN,W.aQ,W.dM,W.eP,W.bo,W.dW,W.hS,W.eV,W.eW,W.aT,W.eX,W.f_,W.aU,W.f3,W.ea,W.f5,W.aW,W.f7,W.aX,W.fc,W.aK,W.ff,W.iV,W.aZ,W.fi,W.j_,W.jm,W.fq,W.fs,W.fu,W.fw,W.fy,P.b8,P.eR,P.bc,P.f1,P.ie,P.fd,P.bf,P.fk,P.fJ,P.eF,P.dy,P.dK,P.e9,P.cb,P.ed,P.em,P.eu,P.f9])
s(J.dR,[J.ia,J.bR,J.bq])
t(J.lx,J.aR)
s(J.bM,[J.dP,J.dO])
t(P.hF,P.eU)
s(P.hF,[H.ev,W.jK,W.at,P.hh])
t(H.w,H.ev)
s(P.i,[H.h8,H.hK,H.d7])
s(H.h8,[H.c5,H.hC])
s(P.b6,[H.hL,H.jE])
t(H.hM,H.c5)
t(H.fW,H.fV)
s(P.bH,[H.i6,H.hx,H.jf,H.j3,H.fR,H.ir,P.e6,P.aP,P.jg,P.jd,P.cc,P.fU,P.h0])
s(H.cu,[H.ll,H.iP,H.kO,H.kP,H.kQ,P.jG,P.jF,P.jH,P.jI,P.km,P.kl,P.jR,P.jV,P.jS,P.jT,P.jU,P.jY,P.jZ,P.jX,P.jW,P.iL,P.iM,P.kE,P.k6,P.k5,P.k7,P.hE,P.hI,P.kt,P.h6,P.h7,P.jl,P.ji,P.jj,P.jk,P.ko,P.kp,P.kr,P.kq,P.kA,P.kz,P.kB,P.kC,W.h9,W.hU,W.hW,W.iq,W.iI,W.jQ,W.i4,W.i3,W.ka,W.kb,W.kk,W.kv,P.kg,P.kG,P.hi,P.hj,P.fL,E.il,E.im,E.io,E.iU,D.hd,D.he,F.kx,F.kH,F.kJ,F.kK,F.kL,F.li,F.lj,F.lk,F.kS,F.kI,F.jB,F.jA,F.jt,F.ju,T.iT,V.lh,V.ih,V.iA,V.iz,V.iB,D.kX,D.kY,D.kZ,D.l7,D.l8,D.l9,D.la,D.lb,D.lc,D.ld,D.le,D.kW,D.l_,D.l0,D.l1,D.kV,D.l2,D.l3,D.kU,D.l4,D.l5,D.l6])
s(H.iP,[H.iG,H.cr])
t(P.hH,P.ah)
s(P.hH,[H.aS,W.jJ])
t(H.e2,H.bN)
s(H.e2,[H.db,H.dd])
t(H.dc,H.db)
t(H.cK,H.dc)
t(H.de,H.dd)
t(H.e3,H.de)
s(H.e3,[H.hZ,H.i_,H.i0,H.i1,H.i2,H.e4,H.cL])
t(P.k4,P.kw)
t(P.k2,P.k9)
t(P.fn,P.hJ)
t(P.ew,P.fn)
s(P.c0,[P.fN,P.ha])
t(P.bF,P.iK)
s(P.bF,[P.fO,P.hp,P.jp,P.jo])
t(P.jn,P.ha)
s(P.a7,[P.r,P.o])
s(P.aP,[P.ca,P.hs])
t(P.jM,P.ce)
s(W.j,[W.H,W.hg,W.aV,W.df,W.aY,W.aL,W.dh,W.jD,W.d8,P.fM,P.bW])
s(W.H,[W.V,W.bD,W.cx,W.d9])
s(W.V,[W.B,P.q])
s(W.B,[W.dv,W.fH,W.cq,W.bC,W.bZ,W.aI,W.hk,W.dL,W.cD,W.cE,W.dT,W.cH,W.is,W.bd,W.ek,W.el,W.iO,W.cU])
s(W.b3,[W.cv,W.fZ,W.h_])
t(W.fX,W.b4)
t(W.cw,W.eG)
t(W.eJ,W.eI)
t(W.dG,W.eJ)
t(W.eL,W.eK)
t(W.h4,W.eL)
t(W.aJ,W.bX)
t(W.eO,W.eN)
t(W.cA,W.eO)
t(W.eQ,W.eP)
t(W.c4,W.eQ)
t(W.dN,W.cx)
t(W.bQ,W.p)
s(W.bQ,[W.b7,W.ai,W.b_])
t(W.hT,W.eV)
t(W.hV,W.eW)
t(W.eY,W.eX)
t(W.hX,W.eY)
t(W.f0,W.f_)
t(W.cM,W.f0)
t(W.f4,W.f3)
t(W.ic,W.f4)
t(W.ip,W.f5)
t(W.dg,W.df)
t(W.iD,W.dg)
t(W.f8,W.f7)
t(W.iE,W.f8)
t(W.iH,W.fc)
t(W.fg,W.ff)
t(W.iQ,W.fg)
t(W.di,W.dh)
t(W.iR,W.di)
t(W.fj,W.fi)
t(W.iZ,W.fj)
t(W.jC,W.cH)
t(W.bi,W.ai)
t(W.fr,W.fq)
t(W.jL,W.fr)
t(W.eH,W.dH)
t(W.ft,W.fs)
t(W.k_,W.ft)
t(W.fv,W.fu)
t(W.eZ,W.fv)
t(W.fx,W.fw)
t(W.kd,W.fx)
t(W.fz,W.fy)
t(W.kh,W.fz)
t(W.jN,W.jJ)
t(W.jO,P.iJ)
t(W.lH,W.jO)
t(W.jP,P.cS)
t(W.kj,W.f6)
t(P.kf,P.ke)
t(P.ab,P.k3)
t(P.eS,P.eR)
t(P.hz,P.eS)
t(P.f2,P.f1)
t(P.i7,P.f2)
t(P.cP,P.q)
t(P.fe,P.fd)
t(P.iN,P.fe)
t(P.fl,P.fk)
t(P.j0,P.fl)
t(P.fK,P.eF)
t(P.i8,P.bW)
t(P.fa,P.f9)
t(P.iF,P.fa)
s(E.fP,[Z.dz,A.cQ,T.cV])
s(D.A,[D.bK,D.bL,D.O,X.id])
s(X.id,[X.dX,X.bs,X.cI,X.es])
s(O.a5,[D.dU,U.cC,M.dB])
s(D.fS,[U.fT,U.aj])
t(U.dC,U.aj)
s(A.cQ,[A.e_,A.eg])
s(A.et,[A.Q,A.j7,A.j8,A.ja,A.j5,A.a3,A.j6,A.N,A.j9,A.jc,A.d_,A.aB,A.as,A.am])
t(F.iC,F.hf)
t(F.j4,F.hA)
t(F.jw,F.jx)
t(F.i5,F.jy)
s(O.bP,[O.dZ,O.ef])
s(O.e0,[O.hN,O.hO,O.b9])
s(O.b9,[O.hQ,O.hR])
t(T.cW,T.cV)
s(V.dY,[V.ay,V.cY])
t(X.hm,X.cT)
s(V.bE,[V.h1,V.hn,V.ho,V.ib])
u(H.ev,H.d5)
u(H.db,P.z)
u(H.dc,H.c3)
u(H.dd,P.z)
u(H.de,H.c3)
u(P.eU,P.z)
u(P.fn,P.kn)
u(W.eG,W.fY)
u(W.eI,P.z)
u(W.eJ,W.E)
u(W.eK,P.z)
u(W.eL,W.E)
u(W.eN,P.z)
u(W.eO,W.E)
u(W.eP,P.z)
u(W.eQ,W.E)
u(W.eV,P.ah)
u(W.eW,P.ah)
u(W.eX,P.z)
u(W.eY,W.E)
u(W.f_,P.z)
u(W.f0,W.E)
u(W.f3,P.z)
u(W.f4,W.E)
u(W.f5,P.ah)
u(W.df,P.z)
u(W.dg,W.E)
u(W.f7,P.z)
u(W.f8,W.E)
u(W.fc,P.ah)
u(W.ff,P.z)
u(W.fg,W.E)
u(W.dh,P.z)
u(W.di,W.E)
u(W.fi,P.z)
u(W.fj,W.E)
u(W.fq,P.z)
u(W.fr,W.E)
u(W.fs,P.z)
u(W.ft,W.E)
u(W.fu,P.z)
u(W.fv,W.E)
u(W.fw,P.z)
u(W.fx,W.E)
u(W.fy,P.z)
u(W.fz,W.E)
u(P.eR,P.z)
u(P.eS,W.E)
u(P.f1,P.z)
u(P.f2,W.E)
u(P.fd,P.z)
u(P.fe,W.E)
u(P.fk,P.z)
u(P.fl,W.E)
u(P.eF,P.ah)
u(P.f9,P.z)
u(P.fa,W.E)})();(function constants(){var u=hunkHelpers.makeConstList
C.p=W.bC.prototype
C.q=W.bZ.prototype
C.D=W.c_.prototype
C.k=W.aI.prototype
C.U=W.dF.prototype
C.W=W.dL.prototype
C.X=W.dM.prototype
C.z=W.dN.prototype
C.Z=J.a.prototype
C.a=J.aR.prototype
C.a_=J.dO.prototype
C.f=J.dP.prototype
C.r=J.dQ.prototype
C.e=J.bM.prototype
C.c=J.bp.prototype
C.a6=J.bq.prototype
C.G=W.dT.prototype
C.ac=W.cM.prototype
C.M=J.ia.prototype
C.N=W.ea.prototype
C.b=P.cb.prototype
C.x=W.bd.prototype
C.o=W.ek.prototype
C.n=W.el.prototype
C.C=J.bR.prototype
C.O=W.bi.prototype
C.P=W.d8.prototype
C.R=new P.fO(!1)
C.Q=new P.fN(C.R)
C.S=new P.i9()
C.T=new P.jp()
C.l=new P.k4()
C.d=new A.c1(0,"ColorSourceType.None")
C.j=new A.c1(1,"ColorSourceType.Solid")
C.h=new A.c1(2,"ColorSourceType.Texture2D")
C.i=new A.c1(3,"ColorSourceType.TextureCube")
C.y=new P.b5(0)
C.V=new P.b5(5e6)
C.Y=new P.hq("element",!0,!1,!1,!1)
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
C.ab=new H.fW(0,{},C.I,[P.e,P.e])
C.m=new P.jn(!1)})();(function staticFields(){$.b2=0
$.cs=null
$.m9=null
$.lL=!1
$.ng=null
$.n7=null
$.nm=null
$.kM=null
$.kR=null
$.lU=null
$.cg=null
$.dm=null
$.dn=null
$.lM=!1
$.a4=C.l
$.bn=null
$.lu=null
$.mg=null
$.mf=null
$.mm=null
$.mr=null
$.cN=null
$.mx=null
$.mJ=null
$.mN=null
$.mL=null
$.mM=null
$.jq=null
$.mK=null
$.oD="uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n"
$.oC="precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n"
$.mq=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pY","nr",function(){return H.nf("_$dart_dartClosure")})
u($,"pZ","lZ",function(){return H.nf("_$dart_js")})
u($,"q3","ns",function(){return H.bg(H.j2({
toString:function(){return"$receiver$"}}))})
u($,"q4","nt",function(){return H.bg(H.j2({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q5","nu",function(){return H.bg(H.j2(null))})
u($,"q6","nv",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q9","ny",function(){return H.bg(H.j2(void 0))})
u($,"qa","nz",function(){return H.bg(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"q8","nx",function(){return H.bg(H.mE(null))})
u($,"q7","nw",function(){return H.bg(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qc","nB",function(){return H.bg(H.mE(void 0))})
u($,"qb","nA",function(){return H.bg(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qt","m_",function(){return P.oP()})
u($,"qz","dt",function(){return[]})
u($,"qf","nC",function(){return P.oM()})
u($,"qu","nG",function(){return H.oj(H.cf(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.o])))})
u($,"qx","nI",function(){return P.oy("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"qy","nJ",function(){return P.pd()})
u($,"qv","nH",function(){return P.mj(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.e)})
u($,"qw","m0",function(){return P.lA(P.e,P.bI)})
u($,"qm","nF",function(){return Z.aM(0)})
u($,"qg","nD",function(){return Z.aM(511)})
u($,"qo","b1",function(){return Z.aM(1)})
u($,"qn","by",function(){return Z.aM(2)})
u($,"qi","bx",function(){return Z.aM(4)})
u($,"qp","bz",function(){return Z.aM(8)})
u($,"qq","bA",function(){return Z.aM(16)})
u($,"qj","dr",function(){return Z.aM(32)})
u($,"qk","ds",function(){return Z.aM(64)})
u($,"ql","nE",function(){return Z.aM(96)})
u($,"qr","cp",function(){return Z.aM(128)})
u($,"qh","bw",function(){return Z.aM(256)})
u($,"pX","nq",function(){return new V.hb(1e-9)})
u($,"pW","U",function(){return $.nq()})})()
var v={mangledGlobalNames:{o:"int",r:"double",a7:"num",e:"String",S:"bool",M:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.M},{func:1,ret:-1,opt:[D.A]},{func:1,ret:-1,args:[D.A]},{func:1,ret:-1},{func:1,ret:-1,args:[W.ai]},{func:1,ret:P.M,args:[F.ag,P.r,P.r]},{func:1,ret:P.r,args:[P.r,P.r]},{func:1,ret:P.M,args:[F.aa]},{func:1,ret:P.M,args:[,,]},{func:1,ret:-1,args:[P.e,,]},{func:1,ret:-1,args:[P.o,[P.i,E.ar]]},{func:1,ret:P.M,args:[D.A]},{func:1,ret:-1,args:[W.b_]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:-1,args:[W.p]},{func:1,ret:P.M,args:[W.p]},{func:1,ret:V.Z,args:[P.r]},{func:1,ret:P.r,args:[P.r]},{func:1,ret:P.e,args:[P.o]},{func:1,ret:P.M,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,M.aG]]},{func:1,ret:-1,args:[P.o,[P.i,V.ax]]},{func:1,ret:-1,args:[P.o,[P.i,U.aj]]},{func:1,ret:P.r},{func:1,ret:P.e,args:[P.e]},{func:1,args:[,]},{func:1,ret:-1,args:[P.o,[P.i,D.a9]]},{func:1,ret:P.S,args:[W.V,P.e,P.e,W.bS]},{func:1,ret:P.S,args:[W.H]},{func:1,ret:P.S,args:[W.aF]},{func:1,ret:P.S,args:[P.e]},{func:1,ret:-1,args:[P.e,P.e]},{func:1,ret:P.M,args:[{func:1,ret:-1,args:[D.A]}]},{func:1,ret:-1,args:[W.b7]},{func:1,ret:W.V,args:[W.H]},{func:1,args:[W.p]},{func:1,ret:P.T,args:[,,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.T,args:[P.o]},{func:1,ret:P.S,args:[[P.i,D.a9]]},{func:1,ret:P.M,args:[P.e,,]},{func:1,ret:P.M,args:[P.e]},{func:1,ret:P.o,args:[P.o,P.o]},{func:1,ret:-1,args:[P.e],opt:[,]},{func:1,ret:-1,args:[P.e,P.o]},{func:1,ret:[P.F,P.e,P.e],args:[[P.F,P.e,P.e],P.e]},{func:1,ret:-1,args:[W.H,W.H]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:[P.aN,,],args:[,]},{func:1,ret:P.M,args:[,],opt:[P.aA]},{func:1,ret:P.M,args:[{func:1,ret:-1}]},{func:1,args:[P.e]},{func:1,ret:P.M,args:[P.be]},{func:1,ret:P.S,args:[V.bE]},{func:1,args:[,P.e]},{func:1,ret:P.M,args:[P.a7]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cJ,DataView:H.bN,ArrayBufferView:H.bN,Float32Array:H.cK,Float64Array:H.cK,Int16Array:H.hZ,Int32Array:H.i_,Int8Array:H.i0,Uint16Array:H.i1,Uint32Array:H.i2,Uint8ClampedArray:H.e4,CanvasPixelArray:H.e4,Uint8Array:H.cL,HTMLBRElement:W.B,HTMLButtonElement:W.B,HTMLContentElement:W.B,HTMLDListElement:W.B,HTMLDataElement:W.B,HTMLDataListElement:W.B,HTMLDetailsElement:W.B,HTMLDialogElement:W.B,HTMLEmbedElement:W.B,HTMLFieldSetElement:W.B,HTMLHRElement:W.B,HTMLHeadingElement:W.B,HTMLHtmlElement:W.B,HTMLIFrameElement:W.B,HTMLLIElement:W.B,HTMLLegendElement:W.B,HTMLLinkElement:W.B,HTMLMapElement:W.B,HTMLMenuElement:W.B,HTMLMetaElement:W.B,HTMLMeterElement:W.B,HTMLModElement:W.B,HTMLOListElement:W.B,HTMLObjectElement:W.B,HTMLOptGroupElement:W.B,HTMLOptionElement:W.B,HTMLOutputElement:W.B,HTMLParagraphElement:W.B,HTMLParamElement:W.B,HTMLPictureElement:W.B,HTMLPreElement:W.B,HTMLProgressElement:W.B,HTMLQuoteElement:W.B,HTMLScriptElement:W.B,HTMLShadowElement:W.B,HTMLSlotElement:W.B,HTMLSourceElement:W.B,HTMLSpanElement:W.B,HTMLStyleElement:W.B,HTMLTableCaptionElement:W.B,HTMLTableColElement:W.B,HTMLTextAreaElement:W.B,HTMLTimeElement:W.B,HTMLTitleElement:W.B,HTMLTrackElement:W.B,HTMLUListElement:W.B,HTMLUnknownElement:W.B,HTMLDirectoryElement:W.B,HTMLFontElement:W.B,HTMLFrameElement:W.B,HTMLFrameSetElement:W.B,HTMLMarqueeElement:W.B,HTMLElement:W.B,AccessibleNodeList:W.fG,HTMLAnchorElement:W.dv,HTMLAreaElement:W.fH,HTMLBaseElement:W.cq,Blob:W.bX,HTMLBodyElement:W.bC,HTMLCanvasElement:W.bZ,CanvasRenderingContext2D:W.c_,CDATASection:W.bD,CharacterData:W.bD,Comment:W.bD,ProcessingInstruction:W.bD,Text:W.bD,CSSNumericValue:W.cv,CSSUnitValue:W.cv,CSSPerspective:W.fX,CSSCharsetRule:W.Y,CSSConditionRule:W.Y,CSSFontFaceRule:W.Y,CSSGroupingRule:W.Y,CSSImportRule:W.Y,CSSKeyframeRule:W.Y,MozCSSKeyframeRule:W.Y,WebKitCSSKeyframeRule:W.Y,CSSKeyframesRule:W.Y,MozCSSKeyframesRule:W.Y,WebKitCSSKeyframesRule:W.Y,CSSMediaRule:W.Y,CSSNamespaceRule:W.Y,CSSPageRule:W.Y,CSSRule:W.Y,CSSStyleRule:W.Y,CSSSupportsRule:W.Y,CSSViewportRule:W.Y,CSSStyleDeclaration:W.cw,MSStyleCSSProperties:W.cw,CSS2Properties:W.cw,CSSImageValue:W.b3,CSSKeywordValue:W.b3,CSSPositionValue:W.b3,CSSResourceValue:W.b3,CSSURLImageValue:W.b3,CSSStyleValue:W.b3,CSSMatrixComponent:W.b4,CSSRotation:W.b4,CSSScale:W.b4,CSSSkew:W.b4,CSSTranslation:W.b4,CSSTransformComponent:W.b4,CSSTransformValue:W.fZ,CSSUnparsedValue:W.h_,DataTransferItemList:W.h2,HTMLDivElement:W.aI,XMLDocument:W.cx,Document:W.cx,DOMException:W.h3,DOMImplementation:W.dF,ClientRectList:W.dG,DOMRectList:W.dG,DOMRectReadOnly:W.dH,DOMStringList:W.h4,DOMTokenList:W.h5,Element:W.V,AbortPaymentEvent:W.p,AnimationEvent:W.p,AnimationPlaybackEvent:W.p,ApplicationCacheErrorEvent:W.p,BackgroundFetchClickEvent:W.p,BackgroundFetchEvent:W.p,BackgroundFetchFailEvent:W.p,BackgroundFetchedEvent:W.p,BeforeInstallPromptEvent:W.p,BeforeUnloadEvent:W.p,BlobEvent:W.p,CanMakePaymentEvent:W.p,ClipboardEvent:W.p,CloseEvent:W.p,CustomEvent:W.p,DeviceMotionEvent:W.p,DeviceOrientationEvent:W.p,ErrorEvent:W.p,ExtendableEvent:W.p,ExtendableMessageEvent:W.p,FetchEvent:W.p,FontFaceSetLoadEvent:W.p,ForeignFetchEvent:W.p,GamepadEvent:W.p,HashChangeEvent:W.p,InstallEvent:W.p,MediaEncryptedEvent:W.p,MediaKeyMessageEvent:W.p,MediaQueryListEvent:W.p,MediaStreamEvent:W.p,MediaStreamTrackEvent:W.p,MessageEvent:W.p,MIDIConnectionEvent:W.p,MIDIMessageEvent:W.p,MutationEvent:W.p,NotificationEvent:W.p,PageTransitionEvent:W.p,PaymentRequestEvent:W.p,PaymentRequestUpdateEvent:W.p,PopStateEvent:W.p,PresentationConnectionAvailableEvent:W.p,PresentationConnectionCloseEvent:W.p,ProgressEvent:W.p,PromiseRejectionEvent:W.p,PushEvent:W.p,RTCDataChannelEvent:W.p,RTCDTMFToneChangeEvent:W.p,RTCPeerConnectionIceEvent:W.p,RTCTrackEvent:W.p,SecurityPolicyViolationEvent:W.p,SensorErrorEvent:W.p,SpeechRecognitionError:W.p,SpeechRecognitionEvent:W.p,SpeechSynthesisEvent:W.p,StorageEvent:W.p,SyncEvent:W.p,TrackEvent:W.p,TransitionEvent:W.p,WebKitTransitionEvent:W.p,VRDeviceEvent:W.p,VRDisplayEvent:W.p,VRSessionEvent:W.p,MojoInterfaceRequestEvent:W.p,ResourceProgressEvent:W.p,USBConnectionEvent:W.p,IDBVersionChangeEvent:W.p,AudioProcessingEvent:W.p,OfflineAudioCompletionEvent:W.p,WebGLContextEvent:W.p,Event:W.p,InputEvent:W.p,AbsoluteOrientationSensor:W.j,Accelerometer:W.j,AccessibleNode:W.j,AmbientLightSensor:W.j,Animation:W.j,ApplicationCache:W.j,DOMApplicationCache:W.j,OfflineResourceList:W.j,BackgroundFetchRegistration:W.j,BatteryManager:W.j,BroadcastChannel:W.j,CanvasCaptureMediaStreamTrack:W.j,DedicatedWorkerGlobalScope:W.j,EventSource:W.j,FileReader:W.j,FontFaceSet:W.j,Gyroscope:W.j,XMLHttpRequest:W.j,XMLHttpRequestEventTarget:W.j,XMLHttpRequestUpload:W.j,LinearAccelerationSensor:W.j,Magnetometer:W.j,MediaDevices:W.j,MediaKeySession:W.j,MediaQueryList:W.j,MediaRecorder:W.j,MediaSource:W.j,MediaStream:W.j,MediaStreamTrack:W.j,MessagePort:W.j,MIDIAccess:W.j,MIDIInput:W.j,MIDIOutput:W.j,MIDIPort:W.j,NetworkInformation:W.j,Notification:W.j,OffscreenCanvas:W.j,OrientationSensor:W.j,PaymentRequest:W.j,Performance:W.j,PermissionStatus:W.j,PresentationAvailability:W.j,PresentationConnection:W.j,PresentationConnectionList:W.j,PresentationRequest:W.j,RelativeOrientationSensor:W.j,RemotePlayback:W.j,RTCDataChannel:W.j,DataChannel:W.j,RTCDTMFSender:W.j,RTCPeerConnection:W.j,webkitRTCPeerConnection:W.j,mozRTCPeerConnection:W.j,ScreenOrientation:W.j,Sensor:W.j,ServiceWorker:W.j,ServiceWorkerContainer:W.j,ServiceWorkerGlobalScope:W.j,ServiceWorkerRegistration:W.j,SharedWorker:W.j,SharedWorkerGlobalScope:W.j,SpeechRecognition:W.j,SpeechSynthesis:W.j,SpeechSynthesisUtterance:W.j,VR:W.j,VRDevice:W.j,VRDisplay:W.j,VRSession:W.j,VisualViewport:W.j,WebSocket:W.j,Worker:W.j,WorkerGlobalScope:W.j,WorkerPerformance:W.j,BluetoothDevice:W.j,BluetoothRemoteGATTCharacteristic:W.j,Clipboard:W.j,MojoInterfaceInterceptor:W.j,USB:W.j,IDBDatabase:W.j,IDBOpenDBRequest:W.j,IDBVersionChangeRequest:W.j,IDBRequest:W.j,IDBTransaction:W.j,AnalyserNode:W.j,RealtimeAnalyserNode:W.j,AudioBufferSourceNode:W.j,AudioDestinationNode:W.j,AudioNode:W.j,AudioScheduledSourceNode:W.j,AudioWorkletNode:W.j,BiquadFilterNode:W.j,ChannelMergerNode:W.j,AudioChannelMerger:W.j,ChannelSplitterNode:W.j,AudioChannelSplitter:W.j,ConstantSourceNode:W.j,ConvolverNode:W.j,DelayNode:W.j,DynamicsCompressorNode:W.j,GainNode:W.j,AudioGainNode:W.j,IIRFilterNode:W.j,MediaElementAudioSourceNode:W.j,MediaStreamAudioDestinationNode:W.j,MediaStreamAudioSourceNode:W.j,OscillatorNode:W.j,Oscillator:W.j,PannerNode:W.j,AudioPannerNode:W.j,webkitAudioPannerNode:W.j,ScriptProcessorNode:W.j,JavaScriptAudioNode:W.j,StereoPannerNode:W.j,WaveShaperNode:W.j,EventTarget:W.j,File:W.aJ,FileList:W.cA,FileWriter:W.hg,HTMLFormElement:W.hk,Gamepad:W.aQ,HTMLHeadElement:W.dL,History:W.dM,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,HTMLDocument:W.dN,ImageData:W.bo,HTMLImageElement:W.cD,HTMLInputElement:W.cE,KeyboardEvent:W.b7,HTMLLabelElement:W.dT,Location:W.dW,HTMLAudioElement:W.cH,HTMLMediaElement:W.cH,MediaList:W.hS,MIDIInputMap:W.hT,MIDIOutputMap:W.hV,MimeType:W.aT,MimeTypeArray:W.hX,PointerEvent:W.ai,MouseEvent:W.ai,DragEvent:W.ai,DocumentFragment:W.H,ShadowRoot:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cM,RadioNodeList:W.cM,Plugin:W.aU,PluginArray:W.ic,Range:W.ea,RTCStatsReport:W.ip,HTMLSelectElement:W.is,SourceBuffer:W.aV,SourceBufferList:W.iD,SpeechGrammar:W.aW,SpeechGrammarList:W.iE,SpeechRecognitionResult:W.aX,Storage:W.iH,CSSStyleSheet:W.aK,StyleSheet:W.aK,HTMLTableCellElement:W.bd,HTMLTableDataCellElement:W.bd,HTMLTableHeaderCellElement:W.bd,HTMLTableElement:W.ek,HTMLTableRowElement:W.el,HTMLTableSectionElement:W.iO,HTMLTemplateElement:W.cU,TextTrack:W.aY,TextTrackCue:W.aL,VTTCue:W.aL,TextTrackCueList:W.iQ,TextTrackList:W.iR,TimeRanges:W.iV,Touch:W.aZ,TouchEvent:W.b_,TouchList:W.iZ,TrackDefaultList:W.j_,CompositionEvent:W.bQ,FocusEvent:W.bQ,TextEvent:W.bQ,UIEvent:W.bQ,URL:W.jm,HTMLVideoElement:W.jC,VideoTrackList:W.jD,WheelEvent:W.bi,Window:W.d8,DOMWindow:W.d8,Attr:W.d9,CSSRuleList:W.jL,ClientRect:W.eH,DOMRect:W.eH,GamepadList:W.k_,NamedNodeMap:W.eZ,MozNamedAttrMap:W.eZ,SpeechRecognitionResultList:W.kd,StyleSheetList:W.kh,SVGLength:P.b8,SVGLengthList:P.hz,SVGNumber:P.bc,SVGNumberList:P.i7,SVGPointList:P.ie,SVGScriptElement:P.cP,SVGStringList:P.iN,SVGAElement:P.q,SVGAnimateElement:P.q,SVGAnimateMotionElement:P.q,SVGAnimateTransformElement:P.q,SVGAnimationElement:P.q,SVGCircleElement:P.q,SVGClipPathElement:P.q,SVGDefsElement:P.q,SVGDescElement:P.q,SVGDiscardElement:P.q,SVGEllipseElement:P.q,SVGFEBlendElement:P.q,SVGFEColorMatrixElement:P.q,SVGFEComponentTransferElement:P.q,SVGFECompositeElement:P.q,SVGFEConvolveMatrixElement:P.q,SVGFEDiffuseLightingElement:P.q,SVGFEDisplacementMapElement:P.q,SVGFEDistantLightElement:P.q,SVGFEFloodElement:P.q,SVGFEFuncAElement:P.q,SVGFEFuncBElement:P.q,SVGFEFuncGElement:P.q,SVGFEFuncRElement:P.q,SVGFEGaussianBlurElement:P.q,SVGFEImageElement:P.q,SVGFEMergeElement:P.q,SVGFEMergeNodeElement:P.q,SVGFEMorphologyElement:P.q,SVGFEOffsetElement:P.q,SVGFEPointLightElement:P.q,SVGFESpecularLightingElement:P.q,SVGFESpotLightElement:P.q,SVGFETileElement:P.q,SVGFETurbulenceElement:P.q,SVGFilterElement:P.q,SVGForeignObjectElement:P.q,SVGGElement:P.q,SVGGeometryElement:P.q,SVGGraphicsElement:P.q,SVGImageElement:P.q,SVGLineElement:P.q,SVGLinearGradientElement:P.q,SVGMarkerElement:P.q,SVGMaskElement:P.q,SVGMetadataElement:P.q,SVGPathElement:P.q,SVGPatternElement:P.q,SVGPolygonElement:P.q,SVGPolylineElement:P.q,SVGRadialGradientElement:P.q,SVGRectElement:P.q,SVGSetElement:P.q,SVGStopElement:P.q,SVGStyleElement:P.q,SVGSVGElement:P.q,SVGSwitchElement:P.q,SVGSymbolElement:P.q,SVGTSpanElement:P.q,SVGTextContentElement:P.q,SVGTextElement:P.q,SVGTextPathElement:P.q,SVGTextPositioningElement:P.q,SVGTitleElement:P.q,SVGUseElement:P.q,SVGViewElement:P.q,SVGGradientElement:P.q,SVGComponentTransferFunctionElement:P.q,SVGFEDropShadowElement:P.q,SVGMPathElement:P.q,SVGElement:P.q,SVGTransform:P.bf,SVGTransformList:P.j0,AudioBuffer:P.fJ,AudioParamMap:P.fK,AudioTrackList:P.fM,AudioContext:P.bW,webkitAudioContext:P.bW,BaseAudioContext:P.bW,OfflineAudioContext:P.i8,WebGLBuffer:P.dy,WebGLFramebuffer:P.dK,WebGLProgram:P.e9,WebGL2RenderingContext:P.cb,WebGLShader:P.ed,WebGLTexture:P.em,WebGLUniformLocation:P.eu,SQLResultSetRowList:P.iF})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,HTMLHeadElement:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,ImageData:true,HTMLImageElement:true,HTMLInputElement:true,KeyboardEvent:true,HTMLLabelElement:true,Location:true,HTMLAudioElement:true,HTMLMediaElement:false,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,Range:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,HTMLVideoElement:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,Attr:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.e2.$nativeSuperclassTag="ArrayBufferView"
H.db.$nativeSuperclassTag="ArrayBufferView"
H.dc.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.dd.$nativeSuperclassTag="ArrayBufferView"
H.de.$nativeSuperclassTag="ArrayBufferView"
H.e3.$nativeSuperclassTag="ArrayBufferView"
W.df.$nativeSuperclassTag="EventTarget"
W.dg.$nativeSuperclassTag="EventTarget"
W.dh.$nativeSuperclassTag="EventTarget"
W.di.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.nj,[])
else D.nj([])})})()
//# sourceMappingURL=test.dart.js.map
