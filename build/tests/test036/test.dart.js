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
a[c]=function(){a[c]=function(){H.mr(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jB"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jB(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jp:function jp(a){this.a=a},
jU:function(){return new P.dC("No element")},
lf:function(){return new P.dC("Too few elements")},
a2:function a2(a){this.a=a},
fi:function fi(){},
dg:function dg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
fO:function fO(a,b,c){this.a=a
this.b=b
this.$ti=c},
fP:function fP(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
ir:function ir(a,b,c){this.a=a
this.b=b
this.$ti=c},
is:function is(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(){},
dR:function dR(){},
dQ:function dQ(){},
c_:function(a){var u,t
u=H.R(v.mangledGlobalNames[a])
if(typeof u==="string")return u
t="minified:"+a
return t},
ma:function(a){return v.types[H.ab(a)]},
mf:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.a1(a).$iD},
n:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.b4(a)
if(typeof u!=="string")throw H.i(H.b3(a))
return u},
lx:function(a){var u,t,s
u=a.$reflectionInfo
if(u==null)return
u=J.fA(u)
t=u[0]
s=u[1]
return new H.hh(a,u,(t&2)===2,t>>2,s>>1,(s&1)===1,u[2])},
cl:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bL:function(a){return H.ln(a)+H.jz(H.bz(a),0,null)},
ln:function(a){var u,t,s,r,q,p,o,n,m
u=J.a1(a)
t=u.constructor
if(typeof t=="function"){s=t.name
r=typeof s==="string"?s:null}else r=null
q=r==null
if(q||u===C.C||!!u.$ibQ){p=C.t(a)
if(q)r=p
if(p==="Object"){o=a.constructor
if(typeof o=="function"){n=String(o).match(/^\s*function\s*([\w$]*)\s*\(/)
m=n==null?null:n[1]
if(typeof m==="string"&&/^\w+$/.test(m))r=m}}return r}r=r
return H.c_(r.length>1&&C.j.b8(r,0)===36?C.j.cK(r,1):r)},
k4:function(a){var u,t,s,r,q
u=a.length
if(u<=500)return String.fromCharCode.apply(null,a)
for(t="",s=0;s<u;s=r){r=s+500
q=r<u?r:u
t+=String.fromCharCode.apply(null,a.slice(s,q))}return t},
lw:function(a){var u,t,s,r
u=H.c([],[P.y])
for(t=a.length,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){r=a[s]
if(typeof r!=="number"||Math.floor(r)!==r)throw H.i(H.b3(r))
if(r<=65535)C.a.h(u,r)
else if(r<=1114111){C.a.h(u,55296+(C.e.bb(r-65536,10)&1023))
C.a.h(u,56320+(r&1023))}else throw H.i(H.b3(r))}return H.k4(u)},
k5:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.i(H.b3(s))
if(s<0)throw H.i(H.b3(s))
if(s>65535)return H.lw(a)}return H.k4(a)},
lv:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.e.bb(u,10))>>>0,56320|u&1023)}throw H.i(P.az(a,0,1114111,null,null))},
bK:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lu:function(a){var u=H.bK(a).getFullYear()+0
return u},
ls:function(a){var u=H.bK(a).getMonth()+1
return u},
lo:function(a){var u=H.bK(a).getDate()+0
return u},
lp:function(a){var u=H.bK(a).getHours()+0
return u},
lr:function(a){var u=H.bK(a).getMinutes()+0
return u},
lt:function(a){var u=H.bK(a).getSeconds()+0
return u},
lq:function(a){var u=H.bK(a).getMilliseconds()+0
return u},
F:function(a){throw H.i(H.b3(a))},
h:function(a,b){if(a==null)J.c2(a)
throw H.i(H.bV(a,b))},
bV:function(a,b){var u,t
if(typeof b!=="number"||Math.floor(b)!==b)return new P.b5(!0,b,"index",null)
u=H.ab(J.c2(a))
if(!(b<0)){if(typeof u!=="number")return H.F(u)
t=b>=u}else t=!0
if(t)return P.U(b,a,"index",null,u)
return P.dv(b,"index",null)},
m4:function(a,b,c){if(a>c)return new P.bM(0,c,!0,a,"start","Invalid value")
if(b!=null)if(b<a||b>c)return new P.bM(a,c,!0,b,"end","Invalid value")
return new P.b5(!0,b,"end",null)},
b3:function(a){return new P.b5(!0,a,null,null)},
m1:function(a){if(typeof a!=="number")throw H.i(H.b3(a))
return a},
i:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kK})
u.name=""}else u.toString=H.kK
return u},
kK:function(){return J.b4(this.dartException)},
r:function(a){throw H.i(a)},
C:function(a){throw H.i(P.c8(a))},
b_:function(a){var u,t,s,r,q,p
a=a.replace(String({}),'$receiver$').replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kd:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jZ:function(a,b){return new H.h9(a,b==null?null:b.method)},
jq:function(a,b){var u,t
u=b==null
t=u?null:b.method
return new H.fD(a,t,u?null:b.receiver)},
bA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
u=new H.jh(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return u.$1(a.dartException)
else if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.e.bb(s,16)&8191)===10)switch(r){case 438:return u.$1(H.jq(H.n(t)+" (Error "+r+")",null))
case 445:case 5007:return u.$1(H.jZ(H.n(t)+" (Error "+r+")",null))}}if(a instanceof TypeError){q=$.kN()
p=$.kO()
o=$.kP()
n=$.kQ()
m=$.kT()
l=$.kU()
k=$.kS()
$.kR()
j=$.kW()
i=$.kV()
h=q.ac(t)
if(h!=null)return u.$1(H.jq(H.R(t),h))
else{h=p.ac(t)
if(h!=null){h.method="call"
return u.$1(H.jq(H.R(t),h))}else{h=o.ac(t)
if(h==null){h=n.ac(t)
if(h==null){h=m.ac(t)
if(h==null){h=l.ac(t)
if(h==null){h=k.ac(t)
if(h==null){h=n.ac(t)
if(h==null){h=j.ac(t)
if(h==null){h=i.ac(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return u.$1(H.jZ(H.R(t),h))}}return u.$1(new H.i6(typeof t==="string"?t:""))}if(a instanceof RangeError){if(typeof t==="string"&&t.indexOf("call stack")!==-1)return new P.dB()
t=function(b){try{return String(b)}catch(f){}return null}(a)
return u.$1(new P.b5(!1,null,null,typeof t==="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t==="string"&&t==="too much recursion")return new P.dB()
return a},
bY:function(a){var u
if(a==null)return new H.et(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.et(a)},
m6:function(a,b){var u,t,s,r
u=a.length
for(t=0;t<u;t=r){s=t+1
r=s+1
b.a0(0,a[t],a[s])}return b},
me:function(a,b,c,d,e,f){H.k(a,"$ijm")
switch(H.ab(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.i(P.t("Unsupported number of arguments for wrapped closure"))},
bU:function(a,b){var u
H.ab(b)
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.me)
a.$identity=u
return u},
l9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m,l,k,j,i
u=b[0]
t=u.$callName
if(!!J.a1(d).$ib){u.$reflectionInfo=d
s=H.lx(u).r}else s=d
r=e?Object.create(new H.hC().constructor.prototype):Object.create(new H.c3(null,null,null,null).constructor.prototype)
r.$initialize=r.constructor
if(e)q=function static_tear_off(){this.$initialize()}
else{p=$.aF
if(typeof p!=="number")return p.n()
$.aF=p+1
p=new Function("a,b,c,d"+p,"this.$initialize(a,b,c,d"+p+")")
q=p}r.constructor=q
q.prototype=r
if(!e){o=H.jQ(a,u,f)
o.$reflectionInfo=d}else{r.$static_name=g
o=u}if(typeof s=="number")n=function(h,a0){return function(){return h(a0)}}(H.ma,s)
else if(typeof s=="function")if(e)n=s
else{m=f?H.jO:H.jj
n=function(h,a0){return function(){return h.apply({$receiver:a0(this)},arguments)}}(s,m)}else throw H.i("Error in reflectionInfo.")
r.$S=n
r[t]=o
for(l=o,k=1;k<b.length;++k){j=b[k]
i=j.$callName
if(i!=null){j=e?j:H.jQ(a,j,f)
r[i]=j}if(k===c){j.$reflectionInfo=d
l=j}}r.$C=l
r.$R=u.$R
r.$D=u.$D
return q},
l6:function(a,b,c,d){var u=H.jj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l8(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l6(t,!r,u,b)
if(t===0){r=$.aF
if(typeof r!=="number")return r.n()
$.aF=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.c4
if(q==null){q=H.f1("self")
$.c4=q}return new Function(r+H.n(q)+";return "+p+"."+H.n(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aF
if(typeof r!=="number")return r.n()
$.aF=r+1
o+=r
r="return function("+o+"){return this."
q=$.c4
if(q==null){q=H.f1("self")
$.c4=q}return new Function(r+H.n(q)+"."+H.n(u)+"("+o+");}")()},
l7:function(a,b,c,d){var u,t
u=H.jj
t=H.jO
switch(b?-1:a){case 0:throw H.i(H.lA("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l8:function(a,b){var u,t,s,r,q,p,o,n
u=$.c4
if(u==null){u=H.f1("self")
$.c4=u}t=$.jN
if(t==null){t=H.f1("receiver")
$.jN=t}s=b.$stubName
r=b.length
q=a[s]
p=b==null?q==null:b===q
o=!p||r>=28
if(o)return H.l7(r,!p,s,b)
if(r===1){u="return function(){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+");"
t=$.aF
if(typeof t!=="number")return t.n()
$.aF=t+1
return new Function(u+t+"}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,r-1).join(",")
u="return function("+n+"){return this."+H.n(u)+"."+H.n(s)+"(this."+H.n(t)+", "+n+");"
t=$.aF
if(typeof t!=="number")return t.n()
$.aF=t+1
return new Function(u+t+"}")()},
jB:function(a,b,c,d,e,f,g){return H.l9(a,b,H.ab(c),d,!!e,!!f,g)},
jj:function(a){return a.a},
jO:function(a){return a.c},
f1:function(a){var u,t,s,r,q
u=new H.c3("self","target","receiver","name")
t=J.fA(Object.getOwnPropertyNames(u))
for(s=t.length,r=0;r<s;++r){q=t[r]
if(u[q]===a)return q}},
R:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.i(H.aD(a,"String"))},
n4:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aD(a,"double"))},
mk:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.i(H.aD(a,"num"))},
kA:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.i(H.aD(a,"bool"))},
ab:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.i(H.aD(a,"int"))},
kH:function(a,b){throw H.i(H.aD(a,H.c_(H.R(b).substring(2))))},
mm:function(a,b){throw H.i(H.l5(a,H.c_(H.R(b).substring(2))))},
k:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.a1(a)[b])return a
H.kH(a,b)},
f:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.a1(a)[b]
else u=!0
if(u)return a
H.mm(a,b)},
jF:function(a){if(a==null)return a
if(!!J.a1(a).$ib)return a
throw H.i(H.aD(a,"List<dynamic>"))},
mg:function(a,b){var u
if(a==null)return a
u=J.a1(a)
if(!!u.$ib)return a
if(u[b])return a
H.kH(a,b)},
kB:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.ab(u)]
else return a.$S()}return},
eO:function(a,b){var u
if(a==null)return!1
if(typeof a=="function")return!0
u=H.kB(J.a1(a))
if(u==null)return!1
return H.kr(u,null,b,null)},
l:function(a,b){var u,t
if(a==null)return a
if($.jw)return a
$.jw=!0
try{if(H.eO(a,b))return a
u=H.je(b)
t=H.aD(a,u)
throw H.i(t)}finally{$.jw=!1}},
jC:function(a,b){if(a!=null&&!H.jA(a,b))H.r(H.aD(a,H.je(b)))
return a},
aD:function(a,b){return new H.hY("TypeError: "+P.fl(a)+": type '"+H.kv(a)+"' is not a subtype of type '"+b+"'")},
l5:function(a,b){return new H.f2("CastError: "+P.fl(a)+": type '"+H.kv(a)+"' is not a subtype of type '"+b+"'")},
kv:function(a){var u,t
u=J.a1(a)
if(!!u.$ic6){t=H.kB(u)
if(t!=null)return H.je(t)
return"Closure"}return H.bL(a)},
mr:function(a){throw H.i(new P.fb(H.R(a)))},
lA:function(a){return new H.hp(a)},
kC:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
bz:function(a){if(a==null)return
return a.$ti},
n5:function(a,b,c){return H.bZ(a["$a"+H.n(c)],H.bz(b))},
bX:function(a,b,c,d){var u
H.R(c)
H.ab(d)
u=H.bZ(a["$a"+H.n(c)],H.bz(b))
return u==null?null:u[d]},
at:function(a,b,c){var u
H.R(b)
H.ab(c)
u=H.bZ(a["$a"+H.n(b)],H.bz(a))
return u==null?null:u[c]},
w:function(a,b){var u
H.ab(b)
u=H.bz(a)
return u==null?null:u[b]},
je:function(a){return H.by(a,null)},
by:function(a,b){var u,t
H.j(b,"$ib",[P.o],"$ab")
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.c_(a[0].name)+H.jz(a,1,b)
if(typeof a=="function")return H.c_(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.ab(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.h(b,t)
return H.n(b[t])}if('func' in a)return H.lS(a,b)
if('futureOr' in a)return"FutureOr<"+H.by("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lS:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
u=[P.o]
H.j(b,"$ib",u,"$ab")
if("bounds" in a){t=a.bounds
if(b==null){b=H.c([],u)
s=null}else s=b.length
r=b.length
for(q=t.length,p=q;p>0;--p)C.a.h(b,"T"+(r+p))
for(o="<",n="",p=0;p<q;++p,n=", "){o+=n
u=b.length
m=u-p-1
if(m<0)return H.h(b,m)
o=C.j.n(o,b[m])
l=t[p]
if(l!=null&&l!==P.K)o+=" extends "+H.by(l,b)}o+=">"}else{o=""
s=null}k=!!a.v?"void":H.by(a.ret,b)
if("args" in a){j=a.args
for(u=j.length,i="",h="",g=0;g<u;++g,h=", "){f=j[g]
i=i+h+H.by(f,b)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(u=e.length,h="",g=0;g<u;++g,h=", "){f=e[g]
i=i+h+H.by(f,b)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(u=H.m5(d),m=u.length,h="",g=0;g<m;++g,h=", "){c=H.R(u[g])
i=i+h+H.by(d[c],b)+(" "+H.n(c))}i+="}"}if(s!=null)b.length=s
return o+"("+i+") => "+k},
jz:function(a,b,c){var u,t,s,r,q,p
H.j(c,"$ib",[P.o],"$ab")
if(a==null)return""
u=new P.bu("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.by(p,c)}return"<"+u.i(0)+">"},
bZ:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
cO:function(a,b,c,d){var u,t
H.R(b)
H.jF(c)
H.R(d)
if(a==null)return!1
u=H.bz(a)
t=J.a1(a)
if(t[b]==null)return!1
return H.ky(H.bZ(t[d],u),null,c,null)},
j:function(a,b,c,d){H.R(b)
H.jF(c)
H.R(d)
if(a==null)return a
if(H.cO(a,b,c,d))return a
throw H.i(H.aD(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.c_(b.substring(2))+H.jz(c,0,null),v.mangledGlobalNames)))},
ky:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ax(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ax(a[t],b,c[t],d))return!1
return!0},
n2:function(a,b,c){return a.apply(b,H.bZ(J.a1(b)["$a"+H.n(c)],H.bz(b)))},
kE:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="K"||a.name==="J"||a===-1||a===-2||H.kE(u)}return!1},
jA:function(a,b){var u,t
if(a==null)return b==null||b.name==="K"||b.name==="J"||b===-1||b===-2||H.kE(b)
if(b==null||b===-1||b.name==="K"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.jA(a,"type" in b?b.type:null))return!0
if('func' in b)return H.eO(a,b)}u=J.a1(a).constructor
t=H.bz(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.ax(u,null,b,null)},
A:function(a,b){if(a!=null&&!H.jA(a,b))throw H.i(H.aD(a,H.je(b)))
return a},
ax:function(a,b,c,d){var u,t,s,r,q,p,o,n,m
if(a===c)return!0
if(c==null||c===-1||c.name==="K"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="K"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ax(a,b,"type" in c?c.type:null,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="J")return!0
if('func' in c)return H.kr(a,b,c,d)
if('func' in a)return c.name==="jm"
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:null
if('futureOr' in a)return H.ax("type" in a?a.type:null,b,s,d)
else if(H.ax(a,b,s,d))return!0
else{if(!('$i'+"cd" in t.prototype))return!1
r=t.prototype["$a"+"cd"]
q=H.bZ(r,u?a.slice(1):null)
return H.ax(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:null,b,s,d)}}p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=null
if(!p)return!0
u=u?a.slice(1):null
p=c.slice(1)
return H.ky(H.bZ(m,u),b,p,d)},
kr:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.ax(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ax(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ax(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ax(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.mj(h,b,g,d)},
mj:function(a,b,c,d){var u,t,s,r
u=Object.getOwnPropertyNames(c)
for(t=u.length,s=0;s<t;++s){r=u[s]
if(!Object.hasOwnProperty.call(a,r))return!1
if(!H.ax(c[r],d,a[r],b))return!1}return!0},
n3:function(a,b,c){Object.defineProperty(a,H.R(b),{value:c,enumerable:false,writable:true,configurable:true})},
mh:function(a){var u,t,s,r,q,p
u=H.R($.kD.$1(a))
t=$.j7[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]
if(r==null){u=H.R($.kx.$2(a,u))
if(u!=null){t=$.j7[u]
if(t!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}s=$.jc[u]
if(s!=null)return s
r=v.interceptorsByTag[u]}}if(r==null)return
s=r.prototype
q=u[0]
if(q==="!"){t=H.jd(s)
$.j7[u]=t
Object.defineProperty(a,v.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
return t.i}if(q==="~"){$.jc[u]=s
return s}if(q==="-"){p=H.jd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.kG(a,s)
if(q==="*")throw H.i(P.ke(u))
if(v.leafTags[u]===true){p=H.jd(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.kG(a,s)},
kG:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jG(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jd:function(a){return J.jG(a,!1,null,!!a.$iD)},
mi:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jd(u)
else return J.jG(u,c,null,null)},
mc:function(){if(!0===$.jE)return
$.jE=!0
H.md()},
md:function(){var u,t,s,r,q,p,o,n
$.j7=Object.create(null)
$.jc=Object.create(null)
H.mb()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kI.$1(q)
if(p!=null){o=H.mi(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mb:function(){var u,t,s,r,q,p,o
u=C.H()
u=H.bT(C.E,H.bT(C.J,H.bT(C.r,H.bT(C.r,H.bT(C.I,H.bT(C.F,H.bT(C.G(C.t),u)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")u=r(u)||u}}q=u.getTag
p=u.getUnknownTag
o=u.prototypeForTag
$.kD=new H.j9(q)
$.kx=new H.ja(p)
$.kI=new H.jb(o)},
bT:function(a,b){return a(b)||b},
lh:function(a,b,c,d){var u,t,s,r
u=b?"m":""
t=c?"":"i"
s=d?"g":""
r=function(e,f){try{return new RegExp(e,f)}catch(q){return q}}(a,u+t+s)
if(r instanceof RegExp)return r
throw H.i(new P.fv("Illegal RegExp pattern ("+String(r)+")",a,null))},
mp:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
kJ:function(a,b,c){var u,t,s
if(b==="")if(a==="")return c
else{u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}else return a.replace(new RegExp(b.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&"),'g'),c.replace(/\$/g,"$$$$"))},
hh:function hh(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=null},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h9:function h9(a,b){this.a=a
this.b=b},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
jh:function jh(a){this.a=a},
et:function et(a){this.a=a
this.b=null},
c6:function c6(){},
hK:function hK(){},
hC:function hC(){},
c3:function c3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hY:function hY(a){this.a=a},
f2:function f2(a){this.a=a},
hp:function hp(a){this.a=a},
aM:function aM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
df:function df(a,b){this.a=a
this.$ti=b},
fI:function fI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
jb:function jb(a){this.a=a},
fC:function fC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bR:function(a){return a},
bx:function(a,b,c){if(a>>>0!==a||a>=c)throw H.i(H.bV(b,a))},
lR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.i(H.m4(a,b,c))
return b},
ci:function ci(){},
dn:function dn(){},
ch:function ch(){},
dp:function dp(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
h5:function h5(){},
h6:function h6(){},
dq:function dq(){},
h7:function h7(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
m5:function(a){return J.jV(a?Object.keys(a):[],null)},
ml:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jG:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
eQ:function(a){var u,t,s,r,q
u=a[v.dispatchPropertyName]
if(u==null)if($.jE==null){H.mc()
u=a[v.dispatchPropertyName]}if(u!=null){t=u.p
if(!1===t)return u.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return u.i
if(u.e===s)throw H.i(P.ke("Return interceptor for "+H.n(t(a,u))))}r=a.constructor
q=r==null?null:r[$.jI()]
if(q!=null)return q
q=H.mh(a)
if(q!=null)return q
if(typeof a=="function")return C.K
t=Object.getPrototypeOf(a)
if(t==null)return C.u
if(t===Object.prototype)return C.u
if(typeof r=="function"){Object.defineProperty(r,$.jI(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
lg:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.i(P.ji(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.i(P.az(a,0,4294967295,"length",null))
return J.jV(new Array(a),b)},
jV:function(a,b){return J.fA(H.c(a,[b]))},
fA:function(a){H.jF(a)
a.fixed$length=Array
return a},
a1:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.br.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fB.prototype
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.eQ(a)},
m7:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.eQ(a)},
j8:function(a){if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.eQ(a)},
jD:function(a){if(a==null)return a
if(a.constructor==Array)return J.ay.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.eQ(a)},
m8:function(a){if(typeof a=="number")return J.bq.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bQ.prototype
return a},
m9:function(a){if(typeof a=="number")return J.bq.prototype
if(typeof a=="string")return J.br.prototype
if(a==null)return a
if(!(a instanceof P.K))return J.bQ.prototype
return a},
eP:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b6.prototype
return a}if(a instanceof P.K)return a
return J.eQ(a)},
l0:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.m7(a).n(a,b)},
T:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.a1(a).v(a,b)},
jK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.m9(a).q(a,b)},
l1:function(a,b){if(typeof a=="number"&&typeof b=="number")return a-b
return J.m8(a).p(a,b)},
l2:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mf(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.j8(a).j(a,b)},
l3:function(a,b,c,d){return J.eP(a).iK(a,b,c,d)},
jL:function(a,b){return J.eP(a).a_(a,b)},
jM:function(a,b){return J.jD(a).F(a,b)},
l4:function(a,b){return J.jD(a).P(a,b)},
bB:function(a){return J.a1(a).gG(a)},
c1:function(a){return J.jD(a).gT(a)},
c2:function(a){return J.j8(a).gk(a)},
b4:function(a){return J.a1(a).i(a)},
a:function a(){},
fB:function fB(){},
db:function db(){},
dc:function dc(){},
hd:function hd(){},
bQ:function bQ(){},
b6:function b6(){},
ay:function ay(a){this.$ti=a},
jo:function jo(a){this.$ti=a},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
bq:function bq(){},
da:function da(){},
d9:function d9(){},
br:function br(){}},P={
lI:function(){var u,t,s
u={}
if(self.scheduleImmediate!=null)return P.lZ()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
u.a=null
new self.MutationObserver(H.bU(new P.iu(u),1)).observe(t,{childList:true})
return new P.it(u,t,s)}else if(self.setImmediate!=null)return P.m_()
return P.m0()},
lJ:function(a){self.scheduleImmediate(H.bU(new P.iv(H.l(a,{func:1,ret:-1})),0))},
lK:function(a){self.setImmediate(H.bU(new P.iw(H.l(a,{func:1,ret:-1})),0))},
lL:function(a){P.jt(C.n,H.l(a,{func:1,ret:-1}))},
jt:function(a,b){var u
H.l(b,{func:1,ret:-1})
u=C.e.Z(a.a,1000)
return P.lO(u<0?0:u,b)},
kc:function(a,b){var u
H.l(b,{func:1,ret:-1,args:[P.aY]})
u=C.e.Z(a.a,1000)
return P.lP(u<0?0:u,b)},
lO:function(a,b){var u=new P.ez(!0)
u.eZ(a,b)
return u},
lP:function(a,b){var u=new P.ez(!1)
u.f_(a,b)
return u},
lM:function(a,b){var u,t,s
b.a=1
try{a.el(new P.iE(b),new P.iF(b),null)}catch(s){u=H.bA(s)
t=H.bY(s)
P.mn(new P.iG(b,u,t))}},
kn:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.k(a.c,"$iaw")
if(u>=4){t=b.bZ()
b.a=a.a
b.c=a.c
P.cC(b,t)}else{t=H.k(b.c,"$ib2")
b.a=2
b.c=a
a.dd(t)}},
cC:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u={}
u.a=a
for(t=a;!0;){s={}
r=t.a===8
if(b==null){if(r){q=H.k(t.c,"$iah")
t=t.b
p=q.a
o=q.b
t.toString
P.j2(null,null,t,p,o)}return}for(;n=b.a,n!=null;b=n){b.a=null
P.cC(u.a,b)}t=u.a
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
if(k){H.k(m,"$iah")
t=t.b
p=m.a
o=m.b
t.toString
P.j2(null,null,t,p,o)
return}j=$.V
if(j!=l)$.V=l
else j=null
t=b.c
if(t===8)new P.iK(u,s,b,r).$0()
else if(p){if((t&1)!==0)new P.iJ(s,b,m).$0()}else if((t&2)!==0)new P.iI(u,s,b).$0()
if(j!=null)$.V=j
t=s.b
if(!!J.a1(t).$icd){if(t.a>=4){i=H.k(o.c,"$ib2")
o.c=null
b=o.ba(i)
o.a=t.a
o.c=t.c
u.a=t
continue}else P.kn(t,o)
return}}h=b.b
i=H.k(h.c,"$ib2")
h.c=null
b=h.ba(i)
t=s.a
p=s.b
if(!t){H.A(p,H.w(h,0))
h.a=4
h.c=p}else{H.k(p,"$iah")
h.a=8
h.c=p}u.a=h
t=h}},
lV:function(a,b){if(H.eO(a,{func:1,args:[P.K,P.ao]}))return H.l(a,{func:1,ret:null,args:[P.K,P.ao]})
if(H.eO(a,{func:1,args:[P.K]}))return H.l(a,{func:1,ret:null,args:[P.K]})
throw H.i(P.ji(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
lU:function(){var u,t
for(;u=$.bS,u!=null;){$.cN=null
t=u.b
$.bS=t
if(t==null)$.cM=null
u.a.$0()}},
lY:function(){$.jx=!0
try{P.lU()}finally{$.cN=null
$.jx=!1
if($.bS!=null)$.jJ().$1(P.kz())}},
ku:function(a){var u=new P.dY(H.l(a,{func:1,ret:-1}))
if($.bS==null){$.cM=u
$.bS=u
if(!$.jx)$.jJ().$1(P.kz())}else{$.cM.b=u
$.cM=u}},
lX:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
u=$.bS
if(u==null){P.ku(a)
$.cN=$.cM
return}t=new P.dY(a)
s=$.cN
if(s==null){t.b=u
$.cN=t
$.bS=t}else{t.b=s.b
s.b=t
$.cN=t
if(t.b==null)$.cM=t}},
mn:function(a){var u,t
u={func:1,ret:-1}
H.l(a,u)
t=$.V
if(C.k===t){P.j4(null,null,C.k,a)
return}t.toString
P.j4(null,null,t,H.l(t.c6(a),u))},
kb:function(a,b){var u,t
u={func:1,ret:-1}
H.l(b,u)
t=$.V
if(t===C.k){t.toString
return P.jt(a,b)}return P.jt(a,H.l(t.c6(b),u))},
lH:function(a,b){var u,t,s
u={func:1,ret:-1,args:[P.aY]}
H.l(b,u)
t=$.V
if(t===C.k){t.toString
return P.kc(a,b)}s=t.dr(b,P.aY)
$.V.toString
return P.kc(a,H.l(s,u))},
j2:function(a,b,c,d,e){var u={}
u.a=d
P.lX(new P.j3(u,e))},
ks:function(a,b,c,d,e){var u,t
H.l(d,{func:1,ret:e})
t=$.V
if(t===c)return d.$0()
$.V=c
u=t
try{t=d.$0()
return t}finally{$.V=u}},
kt:function(a,b,c,d,e,f,g){var u,t
H.l(d,{func:1,ret:f,args:[g]})
H.A(e,g)
t=$.V
if(t===c)return d.$1(e)
$.V=c
u=t
try{t=d.$1(e)
return t}finally{$.V=u}},
lW:function(a,b,c,d,e,f,g,h,i){var u,t
H.l(d,{func:1,ret:g,args:[h,i]})
H.A(e,h)
H.A(f,i)
t=$.V
if(t===c)return d.$2(e,f)
$.V=c
u=t
try{t=d.$2(e,f)
return t}finally{$.V=u}},
j4:function(a,b,c,d){var u
H.l(d,{func:1,ret:-1})
u=C.k!==c
if(u)d=!(!u||!1)?c.c6(d):c.iQ(d,-1)
P.ku(d)},
iu:function iu(a){this.a=a},
it:function it(a,b,c){this.a=a
this.b=b
this.c=c},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ez:function ez(a){this.a=a
this.b=null
this.c=0},
j_:function j_(a,b){this.a=a
this.b=b},
iZ:function iZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
aw:function aw(a,b,c){var _=this
_.a=a
_.b=b
_.c=null
_.$ti=c},
iD:function iD(a,b){this.a=a
this.b=b},
iH:function iH(a,b){this.a=a
this.b=b},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
iL:function iL(a){this.a=a},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
dY:function dY(a){this.a=a
this.b=null},
hF:function hF(){},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(a,b){this.a=a
this.b=b},
cp:function cp(){},
hG:function hG(){},
aY:function aY(){},
ah:function ah(a,b){this.a=a
this.b=b},
j1:function j1(){},
j3:function j3(a,b){this.a=a
this.b=b},
iS:function iS(){},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
iT:function iT(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c){this.a=a
this.b=b
this.c=c},
li:function(a,b){return new H.aM([a,b])},
lj:function(a){return H.m6(a,new H.aM([null,null]))},
lk:function(a,b,c,d){return new P.iP([d])},
kq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kp:function(a,b,c){var u=new P.iQ(a,b,[c])
u.c=a.e
return u},
le:function(a,b,c){var u,t
if(P.jy(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.o])
t=$.cR()
C.a.h(t,a)
try{P.lT(a,u)}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}t=P.k8(b,H.mg(u,"$id"),", ")+c
return t.charCodeAt(0)==0?t:t},
jn:function(a,b,c){var u,t,s
if(P.jy(a))return b+"..."+c
u=new P.bu(b)
t=$.cR()
C.a.h(t,a)
try{s=u
s.a=P.k8(s.a,a,", ")}finally{if(0>=t.length)return H.h(t,-1)
t.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jy:function(a){var u,t
for(u=0;t=$.cR(),u<t.length;++u)if(a===t[u])return!0
return!1},
lT:function(a,b){var u,t,s,r,q,p,o,n,m,l
H.j(b,"$ib",[P.o],"$ab")
u=a.gT(a)
t=0
s=0
while(!0){if(!(t<80||s<3))break
if(!u.w())return
r=H.n(u.gH(u))
C.a.h(b,r)
t+=r.length+2;++s}if(!u.w()){if(s<=5)return
if(0>=b.length)return H.h(b,-1)
q=b.pop()
if(0>=b.length)return H.h(b,-1)
p=b.pop()}else{o=u.gH(u);++s
if(!u.w()){if(s<=4){C.a.h(b,H.n(o))
return}q=H.n(o)
if(0>=b.length)return H.h(b,-1)
p=b.pop()
t+=q.length+2}else{n=u.gH(u);++s
for(;u.w();o=n,n=m){m=u.gH(u);++s
if(s>100){while(!0){if(!(t>75&&s>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2;--s}C.a.h(b,"...")
return}}p=H.n(o)
q=H.n(n)
t+=q.length+p.length+4}}if(s>b.length+2){t+=5
l="..."}else l=null
while(!0){if(!(t>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
t-=b.pop().length+2
if(l==null){t+=5
l="..."}}if(l!=null)C.a.h(b,l)
C.a.h(b,p)
C.a.h(b,q)},
jX:function(a){var u,t
u={}
if(P.jy(a))return"{...}"
t=new P.bu("")
try{C.a.h($.cR(),a)
t.a+="{"
u.a=!0
J.l4(a,new P.fN(u,t))
t.a+="}"}finally{u=$.cR()
if(0>=u.length)return H.h(u,-1)
u.pop()}u=t.a
return u.charCodeAt(0)==0?u:u},
iP:function iP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cD:function cD(a){this.a=a
this.c=this.b=null},
iQ:function iQ(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
fJ:function fJ(){},
u:function u(){},
fM:function fM(){},
fN:function fN(a,b){this.a=a
this.b=b},
ac:function ac(){},
iW:function iW(){},
ec:function ec(){},
c7:function c7(){},
d_:function d_(){},
fj:function fj(){},
i9:function i9(a){this.a=a},
ia:function ia(){},
j0:function j0(a){this.b=this.a=0
this.c=a},
ld:function(a){if(a instanceof H.c6)return a.i(0)
return"Instance of '"+H.bL(a)+"'"},
ll:function(a,b,c,d){var u,t
H.A(b,d)
u=J.lg(a,d)
if(a!==0&&!0)for(t=0;t<u.length;++t)C.a.a0(u,t,b)
return H.j(u,"$ib",[d],"$ab")},
jW:function(a,b,c){var u,t,s
u=[c]
t=H.c([],u)
for(s=J.c1(a);s.w();)C.a.h(t,H.A(s.gH(s),c))
if(b)return t
return H.j(J.fA(t),"$ib",u,"$ab")},
js:function(a,b,c){var u,t
u=P.y
H.j(a,"$id",[u],"$ad")
if(a.constructor===Array){H.j(a,"$iay",[u],"$aay")
t=a.length
c=P.jr(b,c,t,null,null,null)
return H.k5(b>0||c<t?C.a.eE(a,b,c):a)}return P.lC(a,b,c)},
lC:function(a,b,c){var u,t,s
H.j(a,"$id",[P.y],"$ad")
u=J.c1(a)
for(t=0;t<b;++t)if(!u.w())throw H.i(P.az(b,0,t,null,null))
s=[]
for(;u.w();)s.push(u.gH(u))
return H.k5(s)},
ly:function(a,b,c){return new H.fC(a,H.lh(a,!1,!0,!1))},
k8:function(a,b,c){var u=J.c1(b)
if(!u.w())return a
if(c.length===0){do a+=H.n(u.gH(u))
while(u.w())}else{a+=H.n(u.gH(u))
for(;u.w();)a=a+c+H.n(u.gH(u))}return a},
lQ:function(a,b,c,d){var u,t,s,r,q,p
H.j(a,"$ib",[P.y],"$ab")
if(c===C.v){u=$.l_().b
u=u.test(b)}else u=!1
if(u)return b
t=C.z.iV(H.A(b,H.at(c,"c7",0)))
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.h(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.lv(q)
else r=r+"%"+"0123456789ABCDEF"[q>>>4&15]+"0123456789ABCDEF"[q&15]}return r.charCodeAt(0)==0?r:r},
la:function(a){var u,t
u=Math.abs(a)
t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lb:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
jS:function(a,b,c,d,e,f){return new P.aI(864e8*a+36e8*b+6e7*e+1e6*f+1000*d+c)},
fl:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.b4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ld(a)},
ji:function(a,b,c){return new P.b5(!0,a,b,c)},
dv:function(a,b,c){return new P.bM(null,null,!0,a,b,"Value not in range")},
az:function(a,b,c,d,e){return new P.bM(b,c,!0,a,d,"Invalid value")},
jr:function(a,b,c,d,e,f){if(0>a||a>c)throw H.i(P.az(a,0,c,"start",f))
if(b!=null){if(a>b||b>c)throw H.i(P.az(b,a,c,"end",f))
return b}return c},
U:function(a,b,c,d,e){var u=H.ab(e==null?J.c2(b):e)
return new P.fz(b,u,!0,a,c,"Index out of range")},
ak:function(a){return new P.i7(a)},
ke:function(a){return new P.i5(a)},
c8:function(a){return new P.f6(a)},
t:function(a){return new P.e5(a)},
ap:function(a){H.ml(a)},
a6:function a6(){},
an:function an(a,b){this.a=a
this.b=b},
x:function x(){},
aI:function aI(a){this.a=a},
fg:function fg(){},
fh:function fh(){},
bm:function bm(){},
dr:function dr(){},
b5:function b5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bM:function bM(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fz:function fz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
i7:function i7(a){this.a=a},
i5:function i5(a){this.a=a},
dC:function dC(a){this.a=a},
f6:function f6(a){this.a=a},
hc:function hc(){},
dB:function dB(){},
fb:function fb(a){this.a=a},
e5:function e5(a){this.a=a},
fv:function fv(a,b,c){this.a=a
this.b=b
this.c=c},
y:function y(){},
d:function d(){},
aL:function aL(){},
b:function b(){},
O:function O(){},
J:function J(){},
Z:function Z(){},
K:function K(){},
ao:function ao(){},
o:function o(){},
bu:function bu(a){this.a=a},
be:function(a){var u,t,s,r,q
if(a==null)return
u=P.li(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r){q=H.R(t[r])
u.a0(0,q,a[q])}return u},
m2:function(a,b){var u={}
a.P(0,new P.j5(u))
return u},
j5:function j5(a){this.a=a},
fr:function fr(a,b){this.a=a
this.b=b},
fs:function fs(){},
ft:function ft(){},
iO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iR:function iR(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b7:function b7(){},
fF:function fF(){},
bb:function bb(){},
ha:function ha(){},
hg:function hg(){},
hJ:function hJ(){},
p:function p(){},
bd:function bd(){},
hV:function hV(){},
ea:function ea(){},
eb:function eb(){},
ek:function ek(){},
el:function el(){},
ev:function ev(){},
ew:function ew(){},
eC:function eC(){},
eD:function eD(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
bC:function bC(){},
hb:function hb(){},
dZ:function dZ(){},
cV:function cV(){},
d7:function d7(){},
du:function du(){},
dx:function dx(){},
bO:function bO(){},
dy:function dy(){},
dD:function dD(){},
dP:function dP(){},
hB:function hB(){},
er:function er(){},
es:function es(){}},W={
jP:function(a,b){var u=document.createElement("canvas")
return u},
lc:function(a){H.k(a,"$ie")
return"wheel"},
iN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ko:function(a,b,c,d){var u,t
u=W.iN(W.iN(W.iN(W.iN(0,a),b),c),d)
t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
aa:function(a,b,c,d,e){var u=W.kw(new W.iC(c),W.m)
if(u!=null&&!0)J.l3(a,b,u,!1)
return new W.iB(a,b,u,!1,[e])},
kw:function(a,b){var u
H.l(a,{func:1,ret:-1,args:[b]})
u=$.V
if(u===C.k)return a
return u.dr(a,b)},
q:function q(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
cT:function cT(){},
cU:function cU(){},
bE:function bE(){},
bk:function bk(){},
c9:function c9(){},
f7:function f7(){},
P:function P(){},
ca:function ca(){},
f8:function f8(){},
aG:function aG(){},
aH:function aH(){},
f9:function f9(){},
fa:function fa(){},
fc:function fc(){},
cb:function cb(){},
cc:function cc(){},
fd:function fd(){},
d2:function d2(){},
d3:function d3(){},
fe:function fe(){},
ff:function ff(){},
iy:function iy(a,b){this.a=a
this.b=b},
a4:function a4(){},
m:function m(){},
e:function e(){},
aJ:function aJ(){},
fp:function fp(){},
fq:function fq(){},
fu:function fu(){},
aK:function aK(){},
fx:function fx(){},
bH:function bH(){},
d8:function d8(){},
aN:function aN(){},
fK:function fK(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(a){this.a=a},
fZ:function fZ(){},
h_:function h_(a){this.a=a},
aQ:function aQ(){},
h0:function h0(){},
a8:function a8(){},
ix:function ix(a){this.a=a},
H:function H(){},
cj:function cj(){},
aS:function aS(){},
he:function he(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hq:function hq(){},
aU:function aU(){},
hz:function hz(){},
aV:function aV(){},
hA:function hA(){},
aW:function aW(){},
hD:function hD(){},
hE:function hE(a){this.a=a},
aA:function aA(){},
aX:function aX(){},
aB:function aB(){},
hL:function hL(){},
hM:function hM(){},
hQ:function hQ(){},
aZ:function aZ(){},
aC:function aC(){},
hT:function hT(){},
hU:function hU(){},
bw:function bw(){},
i8:function i8(){},
iq:function iq(){},
b1:function b1(){},
cB:function cB(){},
iz:function iz(){},
e0:function e0(){},
iM:function iM(){},
eh:function eh(){},
iX:function iX(){},
iY:function iY(){},
iA:function iA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
jv:function jv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iB:function iB(a,b,c,d,e){var _=this
_.a=0
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
iC:function iC(a){this.a=a},
z:function z(){},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=null
_.$ti=d},
e_:function e_(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
ei:function ei(){},
ej:function ej(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
cI:function cI(){},
cJ:function cJ(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ex:function ex(){},
ey:function ey(){},
cK:function cK(){},
cL:function cL(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){}},O={
f4:function(a){var u=new O.S([a])
u.b7(a)
return u},
S:function S(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cf:function cf(){this.b=this.a=null},
lE:function(a,b,c,d,e){var u=new O.au()
u.sag(e)
u.sdD(a)
u.scJ(0,d)
u.sdH(0,b)
u.se8(!1)
u.f=null
return u},
dj:function dj(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fQ:function fQ(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dl:function dl(){},
fR:function fR(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aO:function aO(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fT:function fT(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fU:function fU(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bv:function bv(){},
dF:function dF(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
au:function au(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
jT:function(a,b,c,d,e,f){var u=new E.ai()
u.a=d
u.b=!0
u.seQ(0,O.f4(E.ai))
u.y.aC(u.gjm(),u.gjp())
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
u.sbD(0,e)
return u},
lz:function(a,b){var u=new E.hj(a,b)
u.eL(a,b)
return u},
lG:function(a,b,c,d,e){var u,t,s,r
u=J.a1(a)
if(!!u.$ibE)return E.ka(a,!0,!0,!0,!1)
t=W.jP(null,null)
s=t.style
s.width="100%"
s.height="100%"
u.gdw(a).h(0,t)
r=E.ka(t,!0,!0,!0,!1)
r.a=a
return r},
ka:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k
u=new E.dK()
t=H.k(C.m.eu(a,"webgl2",P.lj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0])),"$ibO")
if(t==null)H.r(P.t("Failed to get the rendering context for WebGL."))
u.b=a
u.a=a
u.c=t
u.e=E.lz(t,a)
s=new T.hO(t)
s.b=H.ab((t&&C.b).bA(t,3379))
s.c=H.ab(C.b.bA(t,34076))
s.d=0
s.e=0
u.f=s
s=new X.dS(a)
r=new X.fE()
r.c=new X.aq(!1,!1,!1)
r.shI(P.lk(null,null,null,P.y))
s.b=r
r=new X.h1(s)
r.f=0
r.r=V.bc()
r.x=V.bc()
r.Q=1
r.ch=1
s.c=r
r=new X.fL(s)
r.r=0
r.x=V.bc()
r.Q=1
r.ch=1
r.cx=1
r.cy=1
s.d=r
r=new X.hS(s)
r.e=0
r.f=V.bc()
r.r=V.bc()
s.e=r
s.f=!1
s.r=!1
s.x=!1
s.y=null
s.sfn(H.c([],[[P.cp,P.K]]))
r=s.z
q=document
p=W.a8
o={func:1,ret:-1,args:[p]};(r&&C.a).h(r,W.aa(q,"contextmenu",H.l(s.gh_(),o),!1,p))
r=s.z
n=W.m
m={func:1,ret:-1,args:[n]};(r&&C.a).h(r,W.aa(a,"focus",H.l(s.gh9(),m),!1,n))
r=s.z;(r&&C.a).h(r,W.aa(a,"blur",H.l(s.gfU(),m),!1,n))
r=s.z
l=W.aN
k={func:1,ret:-1,args:[l]};(r&&C.a).h(r,W.aa(q,"keyup",H.l(s.ghd(),k),!1,l))
r=s.z;(r&&C.a).h(r,W.aa(q,"keydown",H.l(s.ghb(),k),!1,l))
l=s.z;(l&&C.a).h(l,W.aa(a,"mousedown",H.l(s.ghh(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.aa(a,"mouseup",H.l(s.ghl(),o),!1,p))
l=s.z;(l&&C.a).h(l,W.aa(a,"mousemove",H.l(s.ghj(),o),!1,p))
l=s.z
k=W.b1;(l&&C.a).h(l,W.aa(a,H.R(W.lc(a)),H.l(s.ghn(),{func:1,ret:-1,args:[k]}),!1,k))
k=s.z;(k&&C.a).h(k,W.aa(q,"mousemove",H.l(s.gh1(),o),!1,p))
k=s.z;(k&&C.a).h(k,W.aa(q,"mouseup",H.l(s.gh3(),o),!1,p))
p=s.z;(p&&C.a).h(p,W.aa(q,"pointerlockchange",H.l(s.ghp(),m),!1,n))
n=s.z
m=W.aC
q={func:1,ret:-1,args:[m]};(n&&C.a).h(n,W.aa(a,"touchstart",H.l(s.ghF(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.aa(a,"touchend",H.l(s.ghB(),q),!1,m))
n=s.z;(n&&C.a).h(n,W.aa(a,"touchmove",H.l(s.ghD(),q),!1,m))
u.r=s
u.Q=!0
u.ch=!1
u.cx=new P.an(Date.now(),!1)
u.cy=0
u.df()
return u},
f0:function f0(){},
ai:function ai(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a,b){var _=this
_.a=a
_.b=b
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
dK:function dK(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hP:function hP(a){this.a=a}},Z={
km:function(a,b,c){var u
H.j(c,"$ib",[P.y],"$ab")
u=a.createBuffer()
C.b.ak(a,b,u)
C.b.dt(a,b,new Int16Array(H.bR(c)),35044)
C.b.ak(a,b,null)
return new Z.dW(b,u)},
av:function(a){return new Z.b0(a)},
dW:function dW(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
dX:function dX(a){this.a=a},
c5:function c5(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a){this.a=a}},D={
G:function(){var u=new D.bn()
u.sa1(null)
u.saH(null)
u.c=null
u.d=0
return u},
f3:function f3(){},
bn:function bn(){var _=this
_.d=_.c=_.b=_.a=null},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
v:function v(a){this.a=a
this.b=null},
bo:function bo(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
bp:function bp(a,b,c,d){var _=this
_.c=a
_.d=b
_.a=c
_.b=null
_.$ti=d},
B:function B(a,b,c,d,e){var _=this
_.c=a
_.d=b
_.e=c
_.a=d
_.b=null
_.$ti=e},
bl:function bl(){var _=this
_.d=_.c=_.b=_.a=null},
a_:function a_(){},
de:function de(){var _=this
_.d=_.c=_.b=_.a=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
dt:function dt(){},
dA:function dA(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){}},X={cX:function cX(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fE:function fE(){var _=this
_.d=_.c=_.b=_.a=null},dh:function dh(a,b,c,d,e,f){var _=this
_.x=a
_.y=b
_.c=c
_.d=d
_.e=e
_.a=f
_.b=null},fL:function fL(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aq:function aq(a,b,c){this.a=a
this.b=b
this.c=c},b9:function b9(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},h1:function h1(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cg:function cg(a,b,c,d,e){var _=this
_.x=a
_.c=b
_.d=c
_.e=d
_.a=e
_.b=null},hf:function hf(){},dM:function dM(a,b,c,d,e,f,g,h,i){var _=this
_.x=a
_.y=b
_.z=c
_.Q=d
_.ch=e
_.c=f
_.d=g
_.e=h
_.a=i
_.b=null},hS:function hS(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},dS:function dS(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jl:function(a,b,c,d,e,f,g){var u,t
u=new X.fw()
if(d==null)t=new V.a3(0,0,0,1)
else t=d
u.a=t
u.b=!0
u.c=e
u.d=!0
u.e=g
u.f=!1
t=V.hi()
u.r=t
return u},
k0:function(a,b,c,d,e){var u,t,s
u=new X.ds()
u.c=1.0471975511965976
u.d=0.1
u.e=2000
if(null!=c){t=u.b
u.b=c
if(c!=null)c.gm().h(0,u.gf0())
s=new D.B("mover",t,u.b,u,[U.ae])
s.b=!0
u.a9(s)}s=u.c
if(!(Math.abs(s-b)<$.M().a)){u.c=b
s=new D.B("fov",s,b,u,[P.x])
s.b=!0
u.a9(s)}s=u.d
if(!(Math.abs(s-d)<$.M().a)){u.d=d
s=new D.B("near",s,d,u,[P.x])
s.b=!0
u.a9(s)}s=u.e
if(!(Math.abs(s-a)<$.M().a)){u.e=a
s=new D.B("far",s,a,u,[P.x])
s.b=!0
u.a9(s)}return u},
f_:function f_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bD:function bD(){},
fw:function fw(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(){this.b=this.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
cq:function cq(){}},V={
mt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.eA(a-b,u)
return(a<0?a+u:a)+b},
Q:function(a,b,c){if(a==null)return C.j.aA("null",c)
return C.j.aA(C.d.em(Math.abs(a-0)<$.M().a?0:a,b),c+b+1)},
bW:function(a,b,c){var u,t,s,r,q,p
H.j(a,"$ib",[P.x],"$ab")
u=H.c([],[P.o])
for(t=a.length,s=0,r=0;r<a.length;a.length===t||(0,H.C)(a),++r){q=V.Q(a[r],b,c)
s=Math.max(s,q.length)
C.a.h(u,q)}for(p=u.length-1;p>=0;--p){if(p>=u.length)return H.h(u,p)
C.a.a0(u,p,C.j.aA(u[p],s))}return u},
jH:function(a,b){return C.d.jM(Math.pow(b,C.D.cl(Math.log(H.m1(a))/Math.log(b))))},
bt:function(){var u=$.fV
if(u==null){u=V.aP(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fV=u}return u},
aP:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ad(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jY:function(a,b,c){var u,t,s,r,q,p,o,n
u=c.u(0,Math.sqrt(c.A(c)))
t=b.ax(u)
s=t.u(0,Math.sqrt(t.A(t)))
r=u.ax(s)
q=new V.L(a.a,a.b,a.c)
p=s.N(0).A(q)
o=r.N(0).A(q)
n=u.N(0).A(q)
return V.aP(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
bc:function(){var u=$.k2
if(u==null){u=new V.a0(0,0)
$.k2=u}return u},
k3:function(){var u=$.ck
if(u==null){u=new V.Y(0,0,0)
$.ck=u}return u},
hi:function(){var u=$.cm
if(u==null){u=V.dw(0,0,1,1)
$.cm=u}return u},
dw:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.bN(a,b,c,d)},
cA:function(){var u=$.kj
if(u==null){u=new V.L(0,0,0)
$.kj=u}return u},
kk:function(){var u=$.ki
if(u==null){u=new V.L(0,1,0)
$.ki=u}return u},
kl:function(){var u=$.ib
if(u==null){u=new V.L(0,0,1)
$.ib=u}return u},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fk:function fk(a){this.a=a},
dm:function dm(a,b,c,d,e,f,g,h,i){var _=this
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
a0:function a0(a,b){this.a=a
this.b=b},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
aT:function aT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bN:function bN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b){this.a=a
this.b=b},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
af:function(a){var u=new V.hr()
u.eM(a)
return u},
eS:function eS(){},
b8:function b8(){},
di:function di(){},
ba:function ba(){this.a=null},
hr:function hr(){this.a=null},
co:function co(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dL:function dL(a,b,c){this.a=a
this.b=b
this.c=c},
cr:function cr(a,b){this.a=a
this.b=b
this.c=null},
hR:function hR(){this.c=this.b=this.a=null},
cs:function cs(a){this.b=a
this.a=this.c=null},
mo:function(a){P.lH(C.A,new V.jf(a))},
lB:function(a,b){var u=new V.hv()
u.eN(a,!0)
return u},
jf:function jf(a){this.a=a},
hv:function hv(){this.b=this.a=null},
hx:function hx(a){this.a=a},
hw:function hw(a){this.a=a}},U={
jk:function(){var u=new U.f5()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.f=0
u.x=0
u.r=0
return u},
jR:function(a){var u=new U.cZ()
u.a=a
return u},
f5:function f5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cZ:function cZ(){this.b=this.a=null},
ce:function ce(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ae:function ae(){},
dT:function dT(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dV:function dV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cY:function cY(){var _=this
_.d=_.c=_.b=_.a=_.f=_.e=null},d0:function d0(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},d4:function d4(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ar:function ar(){}},A={
lm:function(a,b){var u,t
u=a.af
t=new A.dk(b,u)
t.cN(b,u)
t.eK(a,b)
return t},
lF:function(a){var u,t
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+"\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n"
t+"\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n"
t+="\nvec4 layout(vec4 clrAccum, sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      clrAccum = mix(clrAccum, color, color.a);\n   }\n   return clrAccum;\n}\n\nvec4 layoutAll()\n{\n   vec4 clrAccum = backClr;\n"
for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return clrAccum;\n")+("   clrAccum = layout(clrAccum, txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+"   return clrAccum;\n"
t+"   return clrAccum;\n}\n"
t+"   return clrAccum;\n}\n\n"
t+"   return clrAccum;\n}\n\nvoid main()\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n"
t+"   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n"
t+="   return clrAccum;\n}\n\nvoid main()\n{\n   vec4 color = layoutAll();\n   if(color.a <= 0.0) discard;\n   gl_FragColor = color;\n}\n"
return t.charCodeAt(0)==0?t:t},
lD:function(a,b){var u,t
u="TextureLayout_"+a
t=new A.dG(b,u)
t.cN(b,u)
t.eO(a,b)
return t},
ju:function(a,b,c,d,e){var u=new A.i_(a,b,c,e)
u.f=d
u.sil(P.ll(d,0,!1,P.y))
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a){this.a=a},
dk:function dk(a,b){var _=this
_.bf=_.dO=_.be=_.af=_.am=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.e3=_.ce=_.e2=_.bs=_.e1=_.e0=_.br=_.bq=_.e_=_.dZ=_.bp=_.bo=_.bn=_.dY=_.dX=_.bm=_.dW=_.dV=_.bl=_.dU=_.dT=_.bk=_.bj=_.dS=_.dR=_.bi=_.bh=_.dQ=_.dP=_.bg=null
_.ck=_.e7=_.cj=_.e6=_.ci=_.e5=_.cg=_.e4=_.cf=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fS:function fS(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.am=b3
_.af=b4
_.be=b5},
ct:function ct(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h},
cv:function cv(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
cy:function cy(a,b,c,d,e,f,g,h,i,j){var _=this
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
cw:function cw(a,b,c,d,e,f,g,h,i,j){var _=this
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
cz:function cz(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cn:function cn(){},
bF:function bF(a,b){this.a=a
this.b=b},
dG:function dG(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dN:function dN(){},
i3:function i3(a){this.a=a},
E:function E(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i_:function i_(a,b,c,d){var _=this
_.f=_.e=null
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
as:function as(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
I:function I(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dO:function dO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cu:function cu(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a7:function a7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d}},F={
ms:function(a,b,c,d){return F.m3(c,a,d,b,new F.jg())},
m3:function(a,b,c,d,e){var u=F.mq(a,b,new F.j6(H.l(e,{func:1,ret:V.Y,args:[P.x]}),d,b,c),null)
if(u==null)return
u.av()
u.jl(new F.ij(),new F.h8())
return u},
mq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.l(c,{func:1,ret:-1,args:[F.al,P.x,P.x]})
if(a<1)return
if(b<1)return
u=F.k7()
t=H.c([],[F.al])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.ic(null,null,new V.a3(p,0,0,1),null,null,new V.a0(r,1),null,null,0)
q.h(0,o)
c.$3(o,r,0)
C.a.h(t,o.dF(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.ic(null,null,new V.a3(j,i,h,1),null,null,new V.a0(r,m),null,null,0)
k.h(0,o)
c.$3(o,r,n)
C.a.h(t,o.dF(d))}}u.d.iM(a+1,b+1,t)
return u},
d5:function(a,b,c){var u,t
u=new F.a5()
t=a.a
if(t==null)H.r(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.r(P.t("May not create a face with vertices attached to different shapes."))
u.hU(a)
u.hV(b)
u.hW(c)
C.a.h(u.a.a.d.b,u)
u.a.a.a6()
return u},
k7:function(){var u,t
u=new F.dz()
t=new F.id(u)
t.b=!1
t.sim(H.c([],[F.al]))
u.a=t
t=new F.hu(u)
t.sbX(H.c([],[F.bJ]))
u.b=t
t=new F.ht(u)
t.sfC(H.c([],[F.bs]))
u.c=t
t=new F.hs(u)
t.sfo(H.c([],[F.a5]))
u.d=t
u.e=null
return u},
ic:function(a,b,c,d,e,f,g,h,i){var u,t,s
u=new F.al()
t=new F.im(u)
t.sbX(H.c([],[F.bJ]))
u.b=t
t=new F.ii(u)
s=[F.bs]
t.sfD(H.c([],s))
t.sfE(H.c([],s))
u.c=t
t=new F.ie(u)
s=[F.a5]
t.sfp(H.c([],s))
t.sfq(H.c([],s))
t.sfs(H.c([],s))
u.d=t
h=$.kX()
u.e=0
t=$.aE()
s=h.a
u.f=(s&t.a)!==0?d:null
u.r=(s&$.bh().a)!==0?e:null
u.x=(s&$.bg().a)!==0?b:null
u.y=(s&$.bi().a)!==0?f:null
u.z=(s&$.bj().a)!==0?g:null
u.Q=(s&$.kY().a)!==0?c:null
u.ch=(s&$.c0().a)!==0?i:0
u.cx=(s&$.bf().a)!==0?a:null
return u},
jg:function jg(){},
j6:function j6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a5:function a5(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fo:function fo(){},
hy:function hy(){},
bs:function bs(){},
fG:function fG(){},
hZ:function hZ(){},
bJ:function bJ(){},
dz:function dz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hs:function hs(a){this.a=a
this.b=null},
ht:function ht(a){this.a=a
this.b=null},
hu:function hu(a){this.a=a
this.b=null},
al:function al(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a},
io:function io(a){this.a=a},
id:function id(a){this.a=a
this.c=this.b=null},
ie:function ie(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(a){this.a=a
this.c=this.b=null},
ik:function ik(){},
ij:function ij(){},
il:function il(){},
h8:function h8(){},
im:function im(a){this.a=a
this.b=null}},T={
k9:function(a,b){var u=new T.hN()
u.a=a
u.b=b
u.c=!1
u.d=!1
u.e=0
u.f=0
u.r=0
u.x=0
return u},
bP:function bP(){},
dE:function dE(){},
hN:function hN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hO:function hO(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null}},S={
kF:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1
u=V.lB("Test 036",!0)
t=W.jP(null,null)
t.className="pageLargeCanvas"
t.id="testCanvas"
C.l.a_(u.a,t)
s=[P.o]
u.dl(H.c(["Test of the texture layout cover technique."],s))
u.dl(H.c(["\xab[Back to Tests|../]"],s))
r=C.B.ev(document,"testCanvas")
if(r==null)H.r(P.t("Failed to find an element with the identifier, testCanvas."))
q=E.lG(r,!0,!0,!0,!1)
p=new U.ce()
u=U.ae
p.b7(u)
p.aC(p.gfM(),p.ght())
p.e=null
p.f=V.bt()
p.r=0
s=q.r
o=new U.dU()
n=U.jk()
n.scG(0,!0)
n.scr(6.283185307179586)
n.sct(0)
n.sa4(0,0)
n.scs(100)
n.sS(0)
n.scc(0.5)
o.b=n
m=o.gaF()
n.gm().h(0,m)
n=U.jk()
n.scG(0,!0)
n.scr(6.283185307179586)
n.sct(0)
n.sa4(0,0)
n.scs(100)
n.sS(0)
n.scc(0.5)
o.c=n
n.gm().h(0,m)
o.d=null
o.e=!1
o.f=!1
o.r=!1
o.x=2.5
o.y=2.5
o.z=2
o.Q=4
o.cx=!1
o.ch=!1
o.cy=0
o.db=0
o.dx=null
o.dy=0
o.fr=null
o.fx=null
l=new X.aq(!1,!1,!1)
k=o.d
o.d=l
n=[X.aq]
m=new D.B("modifiers",k,l,o,n)
m.b=!0
o.M(m)
m=o.f
if(m!==!1){o.f=!1
m=new D.B("invertX",m,!1,o,[P.a6])
m.b=!0
o.M(m)}m=o.r
if(m!==!1){o.r=!1
m=new D.B("invertY",m,!1,o,[P.a6])
m.b=!0
o.M(m)}o.aU(s)
p.h(0,o)
s=q.r
o=new U.dT()
m=U.jk()
m.scG(0,!0)
m.scr(6.283185307179586)
m.sct(0)
m.sa4(0,0)
m.scs(100)
m.sS(0)
m.scc(0.2)
o.b=m
m.gm().h(0,o.gaF())
o.c=null
o.d=!1
o.e=2.5
o.f=2
o.r=4
o.y=!1
o.x=!1
o.z=0
o.Q=null
o.ch=0
o.cx=null
o.cy=null
l=new X.aq(!0,!1,!1)
k=o.c
o.c=l
m=new D.B("modifiers",k,l,o,n)
m.b=!0
o.M(m)
o.aU(s)
p.h(0,o)
s=q.r
o=new U.dV()
o.c=0.01
o.d=0
o.e=0
l=new X.aq(!1,!1,!1)
o.b=l
n=new D.B("modifiers",null,l,o,n)
n.b=!0
o.M(n)
o.aU(s)
p.h(0,o)
p.h(0,U.jR(V.aP(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
j=X.k0(2000,1.0471975511965976,p,0.1,null)
i=new X.f_()
i.a=512
i.b=512
i.c=512
i.d=512
i.e=!0
i.f=!0
i.r=1
i.x=1
i.ch=T.k9(0,null)
i.cx=new V.a3(0,0,0,1)
i.cy=!0
i.db=2000
i.dx=!0
i.dy=V.hi()
i.sad(0,800)
i.sab(0,600)
h=new V.a3(0,0,0,0)
if(!i.cx.v(0,h)){k=i.cx
i.cx=h
s=new D.B("color",k,h,i,[V.a3])
s.b=!0
i.a9(s)}g=E.jT(null,!0,null,"",null,null)
g.sbD(0,F.ms(30,1,15,0.5))
f=new O.dj()
f.sf7(O.f4(V.ad))
f.e.aC(f.gfQ(),f.gfS())
s=new O.aO(f,"emission")
s.c=C.c
s.f=new V.X(0,0,0)
f.f=s
s=new O.aO(f,"ambient")
s.c=C.c
s.f=new V.X(0,0,0)
f.r=s
s=new O.aO(f,"diffuse")
s.c=C.c
s.f=new V.X(0,0,0)
f.x=s
s=new O.aO(f,"invDiffuse")
s.c=C.c
s.f=new V.X(0,0,0)
f.y=s
s=new O.fU(f,"specular")
s.c=C.c
s.f=new V.X(0,0,0)
s.ch=100
f.z=s
s=new O.fR(f,"bump")
s.c=C.c
f.Q=s
f.ch=null
s=new O.aO(f,"reflect")
s.c=C.c
s.f=new V.X(0,0,0)
f.cx=s
s=new O.fT(f,"refract")
s.c=C.c
s.f=new V.X(0,0,0)
s.ch=1
f.cy=s
s=new O.fQ(f,"alpha")
s.c=C.c
s.f=1
f.db=s
s=new D.de()
s.b7(D.a_)
s.sfj(H.c([],[D.bl]))
s.shH(H.c([],[D.dt]))
s.si1(H.c([],[D.dA]))
s.sih(H.c([],[D.dH]))
s.sii(H.c([],[D.dI]))
s.sij(H.c([],[D.dJ]))
s.Q=null
s.ch=null
s.cH(s.gfO(),s.ghr(),s.ghv())
f.dx=s
o=s.Q
if(o==null){o=D.G()
s.Q=o
s=o}else s=o
s.h(0,f.ghQ())
s=f.dx
o=s.ch
if(o==null){o=D.G()
s.ch=o
s=o}else s=o
s.h(0,f.gap())
f.dy=null
s=f.dx
e=V.kk()
o=U.jR(V.jY(V.k3(),e,new V.L(0,-1,-1)))
h=new V.X(1,1,1)
n=new D.bl()
n.c=new V.X(1,1,1)
n.a=V.kl()
k=n.b
n.b=o
o.gm().h(0,n.geR())
u=new D.B("mover",k,n.b,n,[u])
u.b=!0
n.ao(u)
if(!n.c.v(0,h)){k=n.c
n.c=h
u=new D.B("color",k,h,n,[V.X])
u.b=!0
n.ao(u)}s.h(0,n)
u=f.r
u.sal(0,new V.X(0,0,1))
u=f.x
u.sal(0,new V.X(0,1,0))
u=f.z
u.sal(0,new V.X(1,0,0))
u=f.z
if(u.c===C.c){u.c=C.i
u.bE()
u.c_(100)
s=u.a
s.a=null
s.O(null)}u.c_(10)
d=new M.d4()
d.sfa(0,O.f4(E.ai))
d.d.aC(d.gfW(),d.gfY())
d.e=null
d.f=null
d.r=null
d.x=null
c=X.jl(!0,!0,!1,null,2000,null,0)
d.sdv(null)
d.sb2(0,c)
d.sb3(null)
d.sdv(j)
d.sb3(f)
d.sb2(0,i)
d.d.h(0,g)
b=new V.a3(0,0,0,1)
a=new O.dF()
a.a=b
u=new D.B("backColor",null,b,a,[V.a3])
u.b=!0
a.O(u)
a.b=null
a.sfm(O.f4(O.au))
a.c.aC(a.gh5(),a.gh7())
a.d=0
a.e=null
for(a0=0;a0<3;++a0){a1=a0*0.3333333333333333
for(a2=0;a2<3;++a2){u=a.c
s=i.ch
o=V.dw(a1,a2*0.3333333333333333,0.3333333333333333,0.3333333333333333)
n=new O.au()
n.sag(s)
n.sdD(null)
n.scJ(0,null)
n.sdH(0,o)
n.se8(!1)
n.f=null
u.toString
o=H.at(u,"S",0)
H.A(n,o)
s=[o]
if(u.bW(H.c([n],s))){m=u.a
a3=m.length
C.a.h(m,n)
o=H.j(H.c([n],s),"$id",[o],"$ad")
u=u.c
if(u!=null)u.$2(a3,o)}}}u=a.c
s=O.lE(null,null,!1,null,null)
s.sag(i.ch)
u.h(0,s)
a4=X.jl(!0,!0,!1,new V.a3(0,0,0,1),2000,null,0)
a5=new M.d0()
a6=new X.fy()
k=a5.a
a5.a=a6
a6.gm().h(0,a5.gW())
u=new D.B("camera",k,a5.a,a5,[X.bD])
u.b=!0
a5.V(u)
a5.sb2(0,null)
a5.sb3(null)
u=E.jT(null,!0,null,"",null,null)
a7=F.k7()
s=a7.a
o=new V.L(-1,-1,1)
o=o.u(0,Math.sqrt(o.A(o)))
a8=s.bd(new V.aT(1,2,4,6),new V.a3(1,0,0,1),new V.Y(-1,-1,0),new V.a0(0,1),o,null)
s=a7.a
o=new V.L(1,-1,1)
o=o.u(0,Math.sqrt(o.A(o)))
a9=s.bd(new V.aT(0,3,4,6),new V.a3(0,0,1,1),new V.Y(1,-1,0),new V.a0(1,1),o,null)
s=a7.a
o=new V.L(1,1,1)
o=o.u(0,Math.sqrt(o.A(o)))
b0=s.bd(new V.aT(0,2,5,6),new V.a3(0,1,0,1),new V.Y(1,1,0),new V.a0(1,0),o,null)
s=a7.a
o=V.bc()
n=new V.L(-1,1,1)
n=n.u(0,Math.sqrt(n.A(n)))
b1=s.bd(new V.aT(0,2,4,7),new V.a3(1,1,0,1),new V.Y(-1,1,0),o,n,null)
a7.d.iL(H.c([a8,a9,b0,b1],[F.al]))
a7.av()
u.sbD(0,a7)
a5.d=u
a5.e=null
a5.sb3(a)
a5.sb2(0,a4)
u=M.ar
s=H.c([d,a5],[u])
o=new M.cY()
o.b7(u)
o.e=!1
o.f=null
o.aC(o.ghx(),o.ghz())
o.c2(0,s)
u=q.d
if(u!==o){if(u!=null)u.gm().I(0,q.gcP())
q.d=o
o.gm().h(0,q.gcP())
q.cQ()}V.mo(q)}}
var w=[C,H,J,P,W,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jp.prototype={}
J.a.prototype={
v:function(a,b){return a===b},
gG:function(a){return H.cl(a)},
i:function(a){return"Instance of '"+H.bL(a)+"'"}}
J.fB.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ia6:1}
J.db.prototype={
v:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$iJ:1}
J.dc.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.hd.prototype={}
J.bQ.prototype={}
J.b6.prototype={
i:function(a){var u=a[$.kM()]
if(u==null)return this.eG(a)
return"JavaScript function for "+H.n(J.b4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$ijm:1}
J.ay.prototype={
h:function(a,b){H.A(b,H.w(a,0))
if(!!a.fixed$length)H.r(P.ak("add"))
a.push(b)},
jB:function(a,b){var u
if(!!a.fixed$length)H.r(P.ak("removeAt"))
u=a.length
if(b>=u)throw H.i(P.dv(b,null,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.r(P.ak("remove"))
for(u=0;u<a.length;++u)if(J.T(a[u],b)){a.splice(u,1)
return!0}return!1},
c2:function(a,b){var u,t
H.j(b,"$id",[H.w(a,0)],"$ad")
if(!!a.fixed$length)H.r(P.ak("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.C)(b),++t)a.push(b[t])},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.i(P.c8(a))}},
D:function(a,b){var u,t
u=new Array(a.length)
u.fixed$length=Array
for(t=0;t<a.length;++t)this.a0(u,t,H.n(a[t]))
return u.join(b)},
jg:function(a){return this.D(a,"")},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
eE:function(a,b,c){var u=a.length
if(b>u)throw H.i(P.az(b,0,a.length,"start",null))
if(c<b||c>a.length)throw H.i(P.az(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.w(a,0)])
return H.c(a.slice(b,c),[H.w(a,0)])},
gj8:function(a){if(a.length>0)return a[0]
throw H.i(H.jU())},
gco:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.i(H.jU())},
eC:function(a,b,c,d,e){var u,t,s
u=H.w(a,0)
H.j(d,"$id",[u],"$ad")
if(!!a.immutable$list)H.r(P.ak("setRange"))
P.jr(b,c,a.length,null,null,null)
t=c-b
if(t===0)return
H.j(d,"$ib",[u],"$ab")
u=J.j8(d)
if(e+t>u.gk(d))throw H.i(H.lf())
if(e<b)for(s=t-1;s>=0;--s)a[b+s]=u.j(d,e+s)
else for(s=0;s<t;++s)a[b+s]=u.j(d,e+s)},
b6:function(a,b,c,d){return this.eC(a,b,c,d,0)},
aw:function(a,b){var u
for(u=0;u<a.length;++u)if(J.T(a[u],b))return!0
return!1},
i:function(a){return P.jn(a,"[","]")},
gT:function(a){return new J.am(a,a.length,0,[H.w(a,0)])},
gG:function(a){return H.cl(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.r(P.ak("set length"))
if(b<0)throw H.i(P.az(b,0,null,"newLength",null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.i(H.bV(a,b))
return a[b]},
a0:function(a,b,c){H.A(c,H.w(a,0))
if(!!a.immutable$list)H.r(P.ak("indexed set"))
if(b>=a.length||b<0)throw H.i(H.bV(a,b))
a[b]=c},
n:function(a,b){var u,t
u=[H.w(a,0)]
H.j(b,"$ib",u,"$ab")
t=C.e.n(a.length,b.gk(b))
u=H.c([],u)
this.sk(u,t)
this.b6(u,0,a.length,a)
this.b6(u,a.length,t,b)
return u},
$id:1,
$ib:1}
J.jo.prototype={}
J.am.prototype={
gH:function(a){return this.d},
w:function(){var u,t,s
u=this.a
t=u.length
if(this.b!==t)throw H.i(H.C(u))
s=this.c
if(s>=t){this.sd2(null)
return!1}this.sd2(u[s]);++this.c
return!0},
sd2:function(a){this.d=H.A(a,H.w(this,0))},
$iaL:1}
J.bq.prototype={
jM:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.i(P.ak(""+a+".toInt()"))},
cl:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.i(P.ak(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.i(P.ak(""+a+".round()"))},
em:function(a,b){var u,t
if(b>20)throw H.i(P.az(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0)t=1/a<0
else t=!1
if(t)return"-"+u
return u},
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
n:function(a,b){if(typeof b!=="number")throw H.i(H.b3(b))
return a+b},
p:function(a,b){if(typeof b!=="number")throw H.i(H.b3(b))
return a-b},
q:function(a,b){if(typeof b!=="number")throw H.i(H.b3(b))
return a*b},
eA:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eJ:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dh(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.dh(a,b)},
dh:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.i(P.ak("Result of truncating division is "+H.n(u)+": "+H.n(a)+" ~/ "+b))},
bb:function(a,b){var u
if(a>0)u=this.i0(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i0:function(a,b){return b>31?0:a>>>b},
$ix:1,
$iZ:1}
J.da.prototype={$iy:1}
J.d9.prototype={}
J.br.prototype={
cb:function(a,b){if(b<0)throw H.i(H.bV(a,b))
if(b>=a.length)H.r(H.bV(a,b))
return a.charCodeAt(b)},
b8:function(a,b){if(b>=a.length)throw H.i(H.bV(a,b))
return a.charCodeAt(b)},
n:function(a,b){if(typeof b!=="string")throw H.i(P.ji(b,null,null))
return a+b},
cL:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.i(P.dv(b,null,null))
if(b>c)throw H.i(P.dv(b,null,null))
if(c>a.length)throw H.i(P.dv(c,null,null))
return a.substring(b,c)},
cK:function(a,b){return this.cL(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.i(C.y)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
js:function(a,b,c){var u=b-a.length
if(u<=0)return a
return this.q(c,u)+a},
aA:function(a,b){return this.js(a,b," ")},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ik_:1,
$io:1}
H.a2.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.j.cb(this.a,b)},
$adR:function(){return[P.y]},
$au:function(){return[P.y]},
$ad:function(){return[P.y]},
$ab:function(){return[P.y]}}
H.fi.prototype={}
H.dg.prototype={
gH:function(a){return this.d},
w:function(){var u,t,s,r
u=this.a
t=J.j8(u)
s=t.gk(u)
if(this.b!==s)throw H.i(P.c8(u))
r=this.c
if(r>=s){this.saR(null)
return!1}this.saR(t.F(u,r));++this.c
return!0},
saR:function(a){this.d=H.A(a,H.w(this,0))},
$iaL:1}
H.fO.prototype={
gT:function(a){return new H.fP(J.c1(this.a),this.b,this.$ti)},
gk:function(a){return J.c2(this.a)},
F:function(a,b){return this.b.$1(J.jM(this.a,b))},
$ad:function(a,b){return[b]}}
H.fP.prototype={
w:function(){var u=this.b
if(u.w()){this.saR(this.c.$1(u.gH(u)))
return!0}this.saR(null)
return!1},
gH:function(a){return this.a},
saR:function(a){this.a=H.A(a,H.w(this,1))},
$aaL:function(a,b){return[b]}}
H.ir.prototype={
gT:function(a){return new H.is(J.c1(this.a),this.b,this.$ti)}}
H.is.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gH(u)))return!0
return!1},
gH:function(a){var u=this.a
return u.gH(u)}}
H.bG.prototype={}
H.dR.prototype={}
H.dQ.prototype={}
H.hh.prototype={}
H.hW.prototype={
ac:function(a){var u,t,s
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
H.h9.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fD.prototype={
i:function(a){var u,t
u=this.b
if(u==null)return"NoSuchMethodError: "+H.n(this.a)
t=this.c
if(t==null)return"NoSuchMethodError: method not found: '"+u+"' ("+H.n(this.a)+")"
return"NoSuchMethodError: method not found: '"+u+"' on '"+t+"' ("+H.n(this.a)+")"}}
H.i6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jh.prototype={
$1:function(a){if(!!J.a1(a).$ibm)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:15}
H.et.prototype={
i:function(a){var u,t
u=this.b
if(u!=null)return u
u=this.a
t=u!==null&&typeof u==="object"?u.stack:null
u=t==null?"":t
this.b=u
return u},
$iao:1}
H.c6.prototype={
i:function(a){return"Closure '"+H.bL(this).trim()+"'"},
$ijm:1,
gjW:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hK.prototype={}
H.hC.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.c_(u)+"'"}}
H.c3.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.c3))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gG:function(a){var u,t
u=this.c
if(u==null)t=H.cl(this.a)
else t=typeof u!=="object"?J.bB(u):H.cl(u)
return(t^H.cl(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.n(this.d)+"' of "+("Instance of '"+H.bL(u)+"'")}}
H.hY.prototype={
i:function(a){return this.a}}
H.f2.prototype={
i:function(a){return this.a}}
H.hp.prototype={
i:function(a){return"RuntimeError: "+H.n(this.a)}}
H.aM.prototype={
gk:function(a){return this.a},
gaz:function(a){return new H.df(this,[H.w(this,0)])},
dE:function(a,b){var u,t
if(typeof b==="string"){u=this.b
if(u==null)return!1
return this.d_(u,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null)return!1
return this.d_(t,b)}else return this.je(b)},
je:function(a){var u=this.d
if(u==null)return!1
return this.cn(this.bK(u,J.bB(a)&0x3ffffff),a)>=0},
j:function(a,b){var u,t,s,r
if(typeof b==="string"){u=this.b
if(u==null)return
t=this.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=this.c
if(r==null)return
t=this.b9(r,b)
s=t==null?null:t.b
return s}else return this.jf(b)},
jf:function(a){var u,t,s
u=this.d
if(u==null)return
t=this.bK(u,J.bB(a)&0x3ffffff)
s=this.cn(t,a)
if(s<0)return
return t[s].b},
a0:function(a,b,c){var u,t,s,r,q,p
H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
if(typeof b==="string"){u=this.b
if(u==null){u=this.bU()
this.b=u}this.cT(u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=this.c
if(t==null){t=this.bU()
this.c=t}this.cT(t,b,c)}else{s=this.d
if(s==null){s=this.bU()
this.d=s}r=J.bB(b)&0x3ffffff
q=this.bK(s,r)
if(q==null)this.c0(s,r,[this.bV(b,c)])
else{p=this.cn(q,b)
if(p>=0)q[p].b=c
else q.push(this.bV(b,c))}}},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.w(this,0),H.w(this,1)]})
u=this.e
t=this.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==this.r)throw H.i(P.c8(this))
u=u.c}},
cT:function(a,b,c){var u
H.A(b,H.w(this,0))
H.A(c,H.w(this,1))
u=this.b9(a,b)
if(u==null)this.c0(a,b,this.bV(b,c))
else u.b=c},
bV:function(a,b){var u,t
u=new H.fH(H.A(a,H.w(this,0)),H.A(b,H.w(this,1)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.d=t
t.c=u
this.f=u}++this.a
this.r=this.r+1&67108863
return u},
cn:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.T(a[t].a,b))return t
return-1},
i:function(a){return P.jX(this)},
b9:function(a,b){return a[b]},
bK:function(a,b){return a[b]},
c0:function(a,b,c){a[b]=c},
fg:function(a,b){delete a[b]},
d_:function(a,b){return this.b9(a,b)!=null},
bU:function(){var u=Object.create(null)
this.c0(u,"<non-identifier-key>",u)
this.fg(u,"<non-identifier-key>")
return u}}
H.fH.prototype={}
H.df.prototype={
gk:function(a){return this.a.a},
gT:function(a){var u,t
u=this.a
t=new H.fI(u,u.r,this.$ti)
t.c=u.e
return t}}
H.fI.prototype={
gH:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.c8(u))
else{u=this.c
if(u==null){this.scS(null)
return!1}else{this.scS(u.a)
this.c=this.c.c
return!0}}},
scS:function(a){this.d=H.A(a,H.w(this,0))},
$iaL:1}
H.j9.prototype={
$1:function(a){return this.a(a)},
$S:15}
H.ja.prototype={
$2:function(a,b){return this.a(a,b)},
$S:28}
H.jb.prototype={
$1:function(a){return this.a(H.R(a))},
$S:30}
H.fC.prototype={
i:function(a){return"RegExp/"+this.a+"/"},
$ik_:1}
H.ci.prototype={$imM:1}
H.dn.prototype={
gk:function(a){return a.length},
$iD:1,
$aD:function(){}}
H.ch.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]},
$abG:function(){return[P.x]},
$au:function(){return[P.x]},
$id:1,
$ad:function(){return[P.x]},
$ib:1,
$ab:function(){return[P.x]}}
H.dp.prototype={
$abG:function(){return[P.y]},
$au:function(){return[P.y]},
$id:1,
$ad:function(){return[P.y]},
$ib:1,
$ab:function(){return[P.y]}}
H.h2.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h3.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h4.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h5.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h6.prototype={
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.dq.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.h7.prototype={
gk:function(a){return a.length},
j:function(a,b){H.bx(b,a,a.length)
return a[b]}}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
H.cH.prototype={}
P.iu.prototype={
$1:function(a){var u,t
u=this.a
t=u.a
u.a=null
t.$0()},
$S:14}
P.it.prototype={
$1:function(a){var u,t
this.a.a=H.l(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:27}
P.iv.prototype={
$0:function(){this.a.$0()},
$S:2}
P.iw.prototype={
$0:function(){this.a.$0()},
$S:2}
P.ez.prototype={
eZ:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.bU(new P.j_(this,b),0),a)
else throw H.i(P.ak("`setTimeout()` not found."))},
f_:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.bU(new P.iZ(this,a,Date.now(),b),0),a)
else throw H.i(P.ak("Periodic timer."))},
$iaY:1}
P.j_.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:3}
P.iZ.prototype={
$0:function(){var u,t,s,r
u=this.a
t=u.c+1
s=this.b
if(s>0){r=Date.now()-this.c
if(r>(t+1)*s)t=C.e.eJ(r,s)}u.c=t
this.d.$1(u)},
$S:2}
P.b2.prototype={
jj:function(a){if(this.c!==6)return!0
return this.b.b.cC(H.l(this.d,{func:1,ret:P.a6,args:[P.K]}),a.a,P.a6,P.K)},
jd:function(a){var u,t,s,r
u=this.e
t=P.K
s={futureOr:1,type:H.w(this,1)}
r=this.b.b
if(H.eO(u,{func:1,args:[P.K,P.ao]}))return H.jC(r.jH(u,a.a,a.b,null,t,P.ao),s)
else return H.jC(r.cC(H.l(u,{func:1,args:[P.K]}),a.a,null,t),s)}}
P.aw.prototype={
el:function(a,b,c){var u,t,s,r
u=H.w(this,0)
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
t=$.V
if(t!==C.k){t.toString
H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
if(b!=null)b=P.lV(b,t)}H.l(a,{func:1,ret:{futureOr:1,type:c},args:[u]})
s=new P.aw(0,$.V,[c])
r=b==null?1:3
this.cU(new P.b2(s,r,a,b,[u,c]))
return s},
jL:function(a,b){return this.el(a,null,b)},
cU:function(a){var u,t
u=this.a
if(u<=1){a.a=H.k(this.c,"$ib2")
this.c=a}else{if(u===2){t=H.k(this.c,"$iaw")
u=t.a
if(u<4){t.cU(a)
return}this.a=u
this.c=t.c}u=this.b
u.toString
P.j4(null,null,u,H.l(new P.iD(this,a),{func:1,ret:-1}))}},
dd:function(a){var u,t,s,r,q,p
u={}
u.a=a
if(a==null)return
t=this.a
if(t<=1){s=H.k(this.c,"$ib2")
this.c=a
if(s!=null){for(r=a;q=r.a,q!=null;r=q);r.a=s}}else{if(t===2){p=H.k(this.c,"$iaw")
t=p.a
if(t<4){p.dd(a)
return}this.a=t
this.c=p.c}u.a=this.ba(a)
t=this.b
t.toString
P.j4(null,null,t,H.l(new P.iH(u,this),{func:1,ret:-1}))}},
bZ:function(){var u=H.k(this.c,"$ib2")
this.c=null
return this.ba(u)},
ba:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
cW:function(a){var u,t,s
u=H.w(this,0)
H.jC(a,{futureOr:1,type:u})
t=this.$ti
if(H.cO(a,"$icd",t,"$acd"))if(H.cO(a,"$iaw",t,null))P.kn(a,this)
else P.lM(a,this)
else{s=this.bZ()
H.A(a,u)
this.a=4
this.c=a
P.cC(this,s)}},
cX:function(a,b){var u
H.k(b,"$iao")
u=this.bZ()
this.a=8
this.c=new P.ah(a,b)
P.cC(this,u)},
$icd:1}
P.iD.prototype={
$0:function(){P.cC(this.a,this.b)},
$S:2}
P.iH.prototype={
$0:function(){P.cC(this.b,this.a.a)},
$S:2}
P.iE.prototype={
$1:function(a){var u=this.a
u.a=0
u.cW(a)},
$S:14}
P.iF.prototype={
$2:function(a,b){H.k(b,"$iao")
this.a.cX(a,b)},
$1:function(a){return this.$2(a,null)},
$S:33}
P.iG.prototype={
$0:function(){this.a.cX(this.b,this.c)},
$S:2}
P.iK.prototype={
$0:function(){var u,t,s,r,q,p,o
u=null
try{r=this.c
u=r.b.b.ek(H.l(r.d,{func:1}),null)}catch(q){t=H.bA(q)
s=H.bY(q)
if(this.d){r=H.k(this.a.a.c,"$iah").a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=this.b
if(r)p.b=H.k(this.a.a.c,"$iah")
else p.b=new P.ah(t,s)
p.a=!0
return}if(!!J.a1(u).$icd){if(u instanceof P.aw&&u.a>=4){if(u.a===8){r=this.b
r.b=H.k(u.c,"$iah")
r.a=!0}return}o=this.a.a
r=this.b
r.b=u.jL(new P.iL(o),null)
r.a=!1}},
$S:3}
P.iL.prototype={
$1:function(a){return this.a},
$S:36}
P.iJ.prototype={
$0:function(){var u,t,s,r,q,p,o
try{s=this.b
r=H.w(s,0)
q=H.A(this.c,r)
p=H.w(s,1)
this.a.b=s.b.b.cC(H.l(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.bA(o)
t=H.bY(o)
s=this.a
s.b=new P.ah(u,t)
s.a=!0}},
$S:3}
P.iI.prototype={
$0:function(){var u,t,s,r,q,p,o,n
try{u=H.k(this.a.a.c,"$iah")
r=this.c
if(r.jj(u)&&r.e!=null){q=this.b
q.b=r.jd(u)
q.a=!1}}catch(p){t=H.bA(p)
s=H.bY(p)
r=H.k(this.a.a.c,"$iah")
q=r.a
o=t
n=this.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.ah(t,s)
n.a=!0}},
$S:3}
P.dY.prototype={}
P.hF.prototype={
gk:function(a){var u,t,s,r
u={}
t=new P.aw(0,$.V,[P.y])
u.a=0
s=H.w(this,0)
r=H.l(new P.hH(u,this),{func:1,ret:-1,args:[s]})
H.l(new P.hI(u,t),{func:1,ret:-1})
W.aa(this.a,this.b,r,!1,s)
return t}}
P.hH.prototype={
$1:function(a){H.A(a,H.w(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.J,args:[H.w(this.b,0)]}}}
P.hI.prototype={
$0:function(){this.b.cW(this.a.a)},
$S:2}
P.cp.prototype={}
P.hG.prototype={}
P.aY.prototype={}
P.ah.prototype={
i:function(a){return H.n(this.a)},
$ibm:1}
P.j1.prototype={$imZ:1}
P.j3.prototype={
$0:function(){var u,t,s
u=this.a
t=u.a
if(t==null){s=new P.dr()
u.a=s
u=s}else u=t
t=this.b
if(t==null)throw H.i(u)
s=H.i(u)
s.stack=t.i(0)
throw s},
$S:2}
P.iS.prototype={
jI:function(a){var u,t,s
H.l(a,{func:1,ret:-1})
try{if(C.k===$.V){a.$0()
return}P.ks(null,null,this,a,-1)}catch(s){u=H.bA(s)
t=H.bY(s)
P.j2(null,null,this,u,H.k(t,"$iao"))}},
jJ:function(a,b,c){var u,t,s
H.l(a,{func:1,ret:-1,args:[c]})
H.A(b,c)
try{if(C.k===$.V){a.$1(b)
return}P.kt(null,null,this,a,b,-1,c)}catch(s){u=H.bA(s)
t=H.bY(s)
P.j2(null,null,this,u,H.k(t,"$iao"))}},
iQ:function(a,b){return new P.iU(this,H.l(a,{func:1,ret:b}),b)},
c6:function(a){return new P.iT(this,H.l(a,{func:1,ret:-1}))},
dr:function(a,b){return new P.iV(this,H.l(a,{func:1,ret:-1,args:[b]}),b)},
ek:function(a,b){H.l(a,{func:1,ret:b})
if($.V===C.k)return a.$0()
return P.ks(null,null,this,a,b)},
cC:function(a,b,c,d){H.l(a,{func:1,ret:c,args:[d]})
H.A(b,d)
if($.V===C.k)return a.$1(b)
return P.kt(null,null,this,a,b,c,d)},
jH:function(a,b,c,d,e,f){H.l(a,{func:1,ret:d,args:[e,f]})
H.A(b,e)
H.A(c,f)
if($.V===C.k)return a.$2(b,c)
return P.lW(null,null,this,a,b,c,d,e,f)}}
P.iU.prototype={
$0:function(){return this.a.ek(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.iT.prototype={
$0:function(){return this.a.jI(this.b)},
$S:3}
P.iV.prototype={
$1:function(a){var u=this.c
return this.a.jJ(this.b,H.A(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iP.prototype={
gT:function(a){return P.kp(this,this.r,H.w(this,0))},
gk:function(a){return this.a},
h:function(a,b){var u
H.A(b,H.w(this,0))
if(typeof b==="number"&&(b&1073741823)===b){u=this.c
if(u==null){u=P.kq()
this.c=u}return this.fc(u,b)}else return this.f2(0,b)},
f2:function(a,b){var u,t,s
H.A(b,H.w(this,0))
u=this.d
if(u==null){u=P.kq()
this.d=u}t=this.cY(b)
s=u[t]
if(s==null)u[t]=[this.bG(b)]
else{if(this.d3(s,b)>=0)return!1
s.push(this.bG(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hK(this.c,b)
else return this.hJ(0,b)},
hJ:function(a,b){var u,t,s
u=this.d
if(u==null)return!1
t=this.fv(u,b)
s=this.d3(t,b)
if(s<0)return!1
this.di(t.splice(s,1)[0])
return!0},
fc:function(a,b){H.A(b,H.w(this,0))
if(H.k(a[b],"$icD")!=null)return!1
a[b]=this.bG(b)
return!0},
hK:function(a,b){var u
if(a==null)return!1
u=H.k(a[b],"$icD")
if(u==null)return!1
this.di(u)
delete a[b]
return!0},
d6:function(){this.r=1073741823&this.r+1},
bG:function(a){var u,t
u=new P.cD(H.A(a,H.w(this,0)))
if(this.e==null){this.f=u
this.e=u}else{t=this.f
u.c=t
t.b=u
this.f=u}++this.a
this.d6()
return u},
di:function(a){var u,t
u=a.c
t=a.b
if(u==null)this.e=t
else u.b=t
if(t==null)this.f=u
else t.c=u;--this.a
this.d6()},
cY:function(a){return J.bB(a)&1073741823},
fv:function(a,b){return a[this.cY(b)]},
d3:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(a[t].a==b)return t
return-1}}
P.cD.prototype={}
P.iQ.prototype={
gH:function(a){return this.d},
w:function(){var u=this.a
if(this.b!==u.r)throw H.i(P.c8(u))
else{u=this.c
if(u==null){this.scV(null)
return!1}else{this.scV(H.A(u.a,H.w(this,0)))
this.c=this.c.b
return!0}}},
scV:function(a){this.d=H.A(a,H.w(this,0))},
$iaL:1}
P.fJ.prototype={$id:1,$ib:1}
P.u.prototype={
gT:function(a){return new H.dg(a,this.gk(a),0,[H.bX(this,a,"u",0)])},
F:function(a,b){return this.j(a,b)},
jO:function(a,b){var u,t
u=H.c([],[H.bX(this,a,"u",0)])
C.a.sk(u,this.gk(a))
for(t=0;t<this.gk(a);++t)C.a.a0(u,t,this.j(a,t))
return u},
jN:function(a){return this.jO(a,!0)},
n:function(a,b){var u,t
u=[H.bX(this,a,"u",0)]
H.j(b,"$ib",u,"$ab")
t=H.c([],u)
C.a.sk(t,C.e.n(this.gk(a),b.gk(b)))
C.a.b6(t,0,this.gk(a),a)
C.a.b6(t,this.gk(a),t.length,b)
return t},
i:function(a){return P.jn(a,"[","]")}}
P.fM.prototype={}
P.fN.prototype={
$2:function(a,b){var u,t
u=this.a
if(!u.a)this.b.a+=", "
u.a=!1
u=this.b
t=u.a+=H.n(a)
u.a=t+": "
u.a+=H.n(b)},
$S:12}
P.ac.prototype={
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[H.bX(this,a,"ac",0),H.bX(this,a,"ac",1)]})
for(u=J.c1(this.gaz(a));u.w();){t=u.gH(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.c2(this.gaz(a))},
i:function(a){return P.jX(a)},
$iO:1}
P.iW.prototype={
i:function(a){return P.jn(this,"{","}")},
F:function(a,b){var u,t,s
if(b<0)H.r(P.az(b,0,null,"index",null))
for(u=P.kp(this,this.r,H.w(this,0)),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.i(P.U(b,this,"index",null,t))},
$id:1,
$ik6:1}
P.ec.prototype={}
P.c7.prototype={}
P.d_.prototype={}
P.fj.prototype={
$ac7:function(){return[P.o,[P.b,P.y]]}}
P.i9.prototype={}
P.ia.prototype={
iW:function(a,b,c){var u,t,s
c=P.jr(b,c,a.length,null,null,null)
u=c-b
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j0(t)
if(s.ft(a,b,c)!==c)s.dj(C.j.cb(a,c-1),0)
return new Uint8Array(t.subarray(0,H.lR(0,s.b,t.length)))},
iV:function(a){return this.iW(a,0,null)},
$ad_:function(){return[P.o,[P.b,P.y]]}}
P.j0.prototype={
dj:function(a,b){var u,t,s,r,q
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
ft:function(a,b,c){var u,t,s,r,q,p,o
if(b!==c&&(C.j.cb(a,c-1)&64512)===55296)--c
for(u=this.c,t=u.length,s=b;s<c;++s){r=C.j.b8(a,s)
if(r<=127){q=this.b
if(q>=t)break
this.b=q+1
u[q]=r}else if((r&64512)===55296){if(this.b+3>=t)break
p=s+1
if(this.dj(r,C.j.b8(a,p)))s=p}else if(r<=2047){q=this.b
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
P.a6.prototype={}
P.an.prototype={
v:function(a,b){if(b==null)return!1
return b instanceof P.an&&this.a===b.a&&!0},
gG:function(a){var u=this.a
return(u^C.e.bb(u,30))&1073741823},
i:function(a){var u,t,s,r,q,p,o,n
u=P.la(H.lu(this))
t=P.d1(H.ls(this))
s=P.d1(H.lo(this))
r=P.d1(H.lp(this))
q=P.d1(H.lr(this))
p=P.d1(H.lt(this))
o=P.lb(H.lq(this))
n=u+"-"+t+"-"+s+" "+r+":"+q+":"+p+"."+o
return n}}
P.x.prototype={}
P.aI.prototype={
n:function(a,b){return new P.aI(C.e.n(this.a,b.gfk()))},
p:function(a,b){return new P.aI(C.e.p(this.a,b.gfk()))},
v:function(a,b){if(b==null)return!1
return b instanceof P.aI&&this.a===b.a},
gG:function(a){return C.e.gG(this.a)},
i:function(a){var u,t,s,r,q
u=new P.fh()
t=this.a
if(t<0)return"-"+new P.aI(0-t).i(0)
s=u.$1(C.e.Z(t,6e7)%60)
r=u.$1(C.e.Z(t,1e6)%60)
q=new P.fg().$1(t%1e6)
return""+C.e.Z(t,36e8)+":"+H.n(s)+":"+H.n(r)+"."+H.n(q)}}
P.fg.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:13}
P.fh.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:13}
P.bm.prototype={}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.b5.prototype={
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var u,t,s,r,q,p
u=this.c
t=u!=null?" ("+u+")":""
u=this.d
s=u==null?"":": "+u
r=this.gbI()+t+s
if(!this.a)return r
q=this.gbH()
p=P.fl(this.b)
return r+q+": "+p}}
P.bM.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var u,t,s
u=this.e
if(u==null){u=this.f
t=u!=null?": Not less than or equal to "+H.n(u):""}else{s=this.f
if(s==null)t=": Not greater than or equal to "+H.n(u)
else if(s>u)t=": Not in range "+H.n(u)+".."+H.n(s)+", inclusive"
else t=s<u?": Valid value range is empty":": Only valid value is "+H.n(u)}return t}}
P.fz.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var u,t
u=H.ab(this.b)
if(typeof u!=="number")return u.aP()
if(u<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.n(t)},
gk:function(a){return this.f}}
P.i7.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f6.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.fl(u)+"."}}
P.hc.prototype={
i:function(a){return"Out of Memory"},
$ibm:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibm:1}
P.fb.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e5.prototype={
i:function(a){return"Exception: "+this.a}}
P.fv.prototype={
i:function(a){var u,t,s,r
u=this.a
t=""!==u?"FormatException: "+u:"FormatException"
s=this.b
r=s.length>78?C.j.cL(s,0,75)+"...":s
return t+"\n"+r}}
P.y.prototype={}
P.d.prototype={
gk:function(a){var u,t
u=this.gT(this)
for(t=0;u.w();)++t
return t},
F:function(a,b){var u,t,s
if(b<0)H.r(P.az(b,0,null,"index",null))
for(u=this.gT(this),t=0;u.w();){s=u.gH(u)
if(b===t)return s;++t}throw H.i(P.U(b,this,"index",null,t))},
i:function(a){return P.le(this,"(",")")}}
P.aL.prototype={}
P.b.prototype={$id:1}
P.O.prototype={}
P.J.prototype={
gG:function(a){return P.K.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.Z.prototype={}
P.K.prototype={constructor:P.K,$iK:1,
v:function(a,b){return this===b},
gG:function(a){return H.cl(this)},
i:function(a){return"Instance of '"+H.bL(this)+"'"},
toString:function(){return this.i(this)}}
P.ao.prototype={}
P.o.prototype={$ik_:1}
P.bu.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.eR.prototype={
gk:function(a){return a.length}}
W.eT.prototype={
i:function(a){return String(a)}}
W.eU.prototype={
i:function(a){return String(a)}}
W.cT.prototype={}
W.cU.prototype={}
W.bE.prototype={
eu:function(a,b,c){var u=this.fw(a,b,P.m2(c,null))
return u},
fw:function(a,b,c){return a.getContext(b,c)},
$ibE:1}
W.bk.prototype={
gk:function(a){return a.length}}
W.c9.prototype={$ic9:1}
W.f7.prototype={
gk:function(a){return a.length}}
W.P.prototype={$iP:1}
W.ca.prototype={
gk:function(a){return a.length}}
W.f8.prototype={}
W.aG.prototype={}
W.aH.prototype={}
W.f9.prototype={
gk:function(a){return a.length}}
W.fa.prototype={
gk:function(a){return a.length}}
W.fc.prototype={
gk:function(a){return a.length}}
W.cb.prototype={$icb:1}
W.cc.prototype={
ev:function(a,b){return a.getElementById(b)}}
W.fd.prototype={
i:function(a){return String(a)}}
W.d2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[[P.a9,P.Z]]},
$au:function(){return[[P.a9,P.Z]]},
$id:1,
$ad:function(){return[[P.a9,P.Z]]},
$ib:1,
$ab:function(){return[[P.a9,P.Z]]},
$az:function(){return[[P.a9,P.Z]]}}
W.d3.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(this.gad(a))+" x "+H.n(this.gab(a))},
v:function(a,b){var u
if(b==null)return!1
if(!H.cO(b,"$ia9",[P.Z],"$aa9"))return!1
u=J.eP(b)
return a.left===u.gbt(b)&&a.top===u.gbx(b)&&this.gad(a)===u.gad(b)&&this.gab(a)===u.gab(b)},
gG:function(a){return W.ko(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gad(a)),C.d.gG(this.gab(a)))},
gds:function(a){return a.bottom},
gab:function(a){return a.height},
gbt:function(a){return a.left},
gbv:function(a){return a.right},
gbx:function(a){return a.top},
gad:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.Z]}}
W.fe.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[P.o]},
$au:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$az:function(){return[P.o]}}
W.ff.prototype={
gk:function(a){return a.length}}
W.iy.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.h(u,b)
return H.k(u[b],"$ia4")},
h:function(a,b){J.jL(this.a,b)
return b},
gT:function(a){var u=this.jN(this)
return new J.am(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a4]},
$ad:function(){return[W.a4]},
$ab:function(){return[W.a4]}}
W.a4.prototype={
gdw:function(a){return new W.iy(a,a.children)},
gdC:function(a){var u,t,s,r
u=a.clientLeft
t=a.clientTop
s=a.clientWidth
r=a.clientHeight
if(typeof s!=="number")return s.aP()
if(s<0)s=-s*0
if(typeof r!=="number")return r.aP()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.Z])},
i:function(a){return a.localName},
$ia4:1}
W.m.prototype={$im:1}
W.e.prototype={
iK:function(a,b,c,d){H.l(c,{func:1,args:[W.m]})
if(c!=null)this.f3(a,b,c,!1)},
f3:function(a,b,c,d){return a.addEventListener(b,H.bU(H.l(c,{func:1,args:[W.m]}),1),!1)},
$ie:1}
W.aJ.prototype={$iaJ:1}
W.fp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$id:1,
$ad:function(){return[W.aJ]},
$ib:1,
$ab:function(){return[W.aJ]},
$az:function(){return[W.aJ]}}
W.fq.prototype={
gk:function(a){return a.length}}
W.fu.prototype={
gk:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.fx.prototype={
gk:function(a){return a.length}}
W.bH.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.H]},
$au:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$ibH:1,
$az:function(){return[W.H]}}
W.d8.prototype={}
W.aN.prototype={$iaN:1}
W.fK.prototype={
i:function(a){return String(a)}}
W.fW.prototype={
gk:function(a){return a.length}}
W.fX.prototype={
j:function(a,b){return P.be(a.get(H.R(b)))},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.P(a,new W.fY(u))
return u},
gk:function(a){return a.size},
$aac:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.fY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.fZ.prototype={
j:function(a,b){return P.be(a.get(H.R(b)))},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.P(a,new W.h_(u))
return u},
gk:function(a){return a.size},
$aac:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.h_.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.aQ.prototype={$iaQ:1}
W.h0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$id:1,
$ad:function(){return[W.aQ]},
$ib:1,
$ab:function(){return[W.aQ]},
$az:function(){return[W.aQ]}}
W.a8.prototype={$ia8:1}
W.ix.prototype={
gT:function(a){var u=this.a.childNodes
return new W.d6(u,u.length,-1,[H.bX(C.M,u,"z",0)])},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
$au:function(){return[W.H]},
$ad:function(){return[W.H]},
$ab:function(){return[W.H]}}
W.H.prototype={
i:function(a){var u=a.nodeValue
return u==null?this.eF(a):u},
a_:function(a,b){return a.appendChild(b)},
$iH:1}
W.cj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.H]},
$au:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$az:function(){return[W.H]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.he.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aS]},
$au:function(){return[W.aS]},
$id:1,
$ad:function(){return[W.aS]},
$ib:1,
$ab:function(){return[W.aS]},
$az:function(){return[W.aS]}}
W.hn.prototype={
j:function(a,b){return P.be(a.get(H.R(b)))},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.P(a,new W.ho(u))
return u},
gk:function(a){return a.size},
$aac:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
W.ho.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
W.hq.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.hz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aU]},
$au:function(){return[W.aU]},
$id:1,
$ad:function(){return[W.aU]},
$ib:1,
$ab:function(){return[W.aU]},
$az:function(){return[W.aU]}}
W.aV.prototype={$iaV:1}
W.hA.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aV]},
$au:function(){return[W.aV]},
$id:1,
$ad:function(){return[W.aV]},
$ib:1,
$ab:function(){return[W.aV]},
$az:function(){return[W.aV]}}
W.aW.prototype={$iaW:1,
gk:function(a){return a.length}}
W.hD.prototype={
j:function(a,b){return this.d4(a,H.R(b))},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,P.o]})
for(u=0;!0;++u){t=this.fB(a,u)
if(t==null)return
b.$2(t,this.d4(a,t))}},
gaz:function(a){var u=H.c([],[P.o])
this.P(a,new W.hE(u))
return u},
gk:function(a){return a.length},
d4:function(a,b){return a.getItem(b)},
fB:function(a,b){return a.key(b)},
$aac:function(){return[P.o,P.o]},
$iO:1,
$aO:function(){return[P.o,P.o]}}
W.hE.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:24}
W.aA.prototype={$iaA:1}
W.aX.prototype={$iaX:1}
W.aB.prototype={$iaB:1}
W.hL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aB]},
$au:function(){return[W.aB]},
$id:1,
$ad:function(){return[W.aB]},
$ib:1,
$ab:function(){return[W.aB]},
$az:function(){return[W.aB]}}
W.hM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aX]},
$au:function(){return[W.aX]},
$id:1,
$ad:function(){return[W.aX]},
$ib:1,
$ab:function(){return[W.aX]},
$az:function(){return[W.aX]}}
W.hQ.prototype={
gk:function(a){return a.length}}
W.aZ.prototype={$iaZ:1}
W.aC.prototype={$iaC:1}
W.hT.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aZ]},
$au:function(){return[W.aZ]},
$id:1,
$ad:function(){return[W.aZ]},
$ib:1,
$ab:function(){return[W.aZ]},
$az:function(){return[W.aZ]}}
W.hU.prototype={
gk:function(a){return a.length}}
W.bw.prototype={}
W.i8.prototype={
i:function(a){return String(a)}}
W.iq.prototype={
gk:function(a){return a.length}}
W.b1.prototype={
gj1:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.i(P.ak("deltaY is not supported"))},
gj0:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.i(P.ak("deltaX is not supported"))},
$ib1:1}
W.cB.prototype={
hP:function(a,b){return a.requestAnimationFrame(H.bU(H.l(b,{func:1,ret:-1,args:[P.Z]}),1))},
fl:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iz.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.P]},
$au:function(){return[W.P]},
$id:1,
$ad:function(){return[W.P]},
$ib:1,
$ab:function(){return[W.P]},
$az:function(){return[W.P]}}
W.e0.prototype={
i:function(a){return"Rectangle ("+H.n(a.left)+", "+H.n(a.top)+") "+H.n(a.width)+" x "+H.n(a.height)},
v:function(a,b){var u
if(b==null)return!1
if(!H.cO(b,"$ia9",[P.Z],"$aa9"))return!1
u=J.eP(b)
return a.left===u.gbt(b)&&a.top===u.gbx(b)&&a.width===u.gad(b)&&a.height===u.gab(b)},
gG:function(a){return W.ko(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gab:function(a){return a.height},
gad:function(a){return a.width}}
W.iM.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aK]},
$au:function(){return[W.aK]},
$id:1,
$ad:function(){return[W.aK]},
$ib:1,
$ab:function(){return[W.aK]},
$az:function(){return[W.aK]}}
W.eh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.H]},
$au:function(){return[W.H]},
$id:1,
$ad:function(){return[W.H]},
$ib:1,
$ab:function(){return[W.H]},
$az:function(){return[W.H]}}
W.iX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aW]},
$au:function(){return[W.aW]},
$id:1,
$ad:function(){return[W.aW]},
$ib:1,
$ab:function(){return[W.aW]},
$az:function(){return[W.aW]}}
W.iY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return a[b]},
F:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$iD:1,
$aD:function(){return[W.aA]},
$au:function(){return[W.aA]},
$id:1,
$ad:function(){return[W.aA]},
$ib:1,
$ab:function(){return[W.aA]},
$az:function(){return[W.aA]}}
W.iA.prototype={}
W.jv.prototype={}
W.iB.prototype={}
W.iC.prototype={
$1:function(a){return this.a.$1(H.k(a,"$im"))},
$S:29}
W.z.prototype={
gT:function(a){return new W.d6(a,this.gk(a),-1,[H.bX(this,a,"z",0)])}}
W.d6.prototype={
w:function(){var u,t
u=this.c+1
t=this.b
if(u<t){this.sd5(J.l2(this.a,u))
this.c=u
return!0}this.sd5(null)
this.c=t
return!1},
gH:function(a){return this.d},
sd5:function(a){this.d=H.A(a,H.w(this,0))},
$iaL:1}
W.e_.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cK.prototype={}
W.cL.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
P.j5.prototype={
$2:function(a,b){this.a[a]=b},
$S:12}
P.fr.prototype={
gbL:function(){var u,t,s
u=this.b
t=H.at(u,"u",0)
s=W.a4
return new H.fO(new H.ir(u,H.l(new P.fs(),{func:1,ret:P.a6,args:[t]}),[t]),H.l(new P.ft(),{func:1,ret:s,args:[t]}),[t,s])},
h:function(a,b){J.jL(this.b.a,b)},
gk:function(a){return J.c2(this.gbL().a)},
j:function(a,b){var u=this.gbL()
return u.b.$1(J.jM(u.a,b))},
gT:function(a){var u=P.jW(this.gbL(),!1,W.a4)
return new J.am(u,u.length,0,[H.w(u,0)])},
$au:function(){return[W.a4]},
$ad:function(){return[W.a4]},
$ab:function(){return[W.a4]}}
P.fs.prototype={
$1:function(a){return!!J.a1(H.k(a,"$iH")).$ia4},
$S:25}
P.ft.prototype={
$1:function(a){return H.f(H.k(a,"$iH"),"$ia4")},
$S:26}
P.iR.prototype={
gbv:function(a){var u=this.a
if(typeof u!=="number")return u.n()
return H.A(u+this.c,H.w(this,0))},
gds:function(a){var u=this.b
if(typeof u!=="number")return u.n()
return H.A(u+this.d,H.w(this,0))},
i:function(a){return"Rectangle ("+H.n(this.a)+", "+H.n(this.b)+") "+this.c+" x "+this.d},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(H.cO(b,"$ia9",[P.Z],"$aa9")){u=this.a
t=J.eP(b)
if(u==t.gbt(b)){s=this.b
if(s==t.gbx(b)){if(typeof u!=="number")return u.n()
r=H.w(this,0)
if(H.A(u+this.c,r)===t.gbv(b)){if(typeof s!=="number")return s.n()
u=H.A(s+this.d,r)===t.gds(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u,t,s,r,q
u=this.a
t=J.bB(u)
s=this.b
r=J.bB(s)
if(typeof u!=="number")return u.n()
q=H.w(this,0)
u=C.e.gG(H.A(u+this.c,q))
if(typeof s!=="number")return s.n()
q=C.e.gG(H.A(s+this.d,q))
return P.lN(P.iO(P.iO(P.iO(P.iO(0,t),r),u),q))}}
P.a9.prototype={
gbt:function(a){return this.a},
gbx:function(a){return this.b},
gad:function(a){return this.c},
gab:function(a){return this.d}}
P.b7.prototype={$ib7:1}
P.fF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return this.an(a,b)},
F:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.b7]},
$id:1,
$ad:function(){return[P.b7]},
$ib:1,
$ab:function(){return[P.b7]},
$az:function(){return[P.b7]}}
P.bb.prototype={$ibb:1}
P.ha.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return this.an(a,b)},
F:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.bb]},
$id:1,
$ad:function(){return[P.bb]},
$ib:1,
$ab:function(){return[P.bb]},
$az:function(){return[P.bb]}}
P.hg.prototype={
gk:function(a){return a.length}}
P.hJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return this.an(a,b)},
F:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.o]},
$id:1,
$ad:function(){return[P.o]},
$ib:1,
$ab:function(){return[P.o]},
$az:function(){return[P.o]}}
P.p.prototype={
gdw:function(a){return new P.fr(a,new W.ix(a))}}
P.bd.prototype={$ibd:1}
P.hV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return this.an(a,b)},
F:function(a,b){return this.j(a,b)},
an:function(a,b){return a.getItem(b)},
$au:function(){return[P.bd]},
$id:1,
$ad:function(){return[P.bd]},
$ib:1,
$ab:function(){return[P.bd]},
$az:function(){return[P.bd]}}
P.ea.prototype={}
P.eb.prototype={}
P.ek.prototype={}
P.el.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eW.prototype={
gk:function(a){return a.length}}
P.eX.prototype={
j:function(a,b){return P.be(a.get(H.R(b)))},
P:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[P.o,,]})
u=a.entries()
for(;!0;){t=u.next()
if(t.done)return
b.$2(t.value[0],P.be(t.value[1]))}},
gaz:function(a){var u=H.c([],[P.o])
this.P(a,new P.eY(u))
return u},
gk:function(a){return a.size},
$aac:function(){return[P.o,null]},
$iO:1,
$aO:function(){return[P.o,null]}}
P.eY.prototype={
$2:function(a,b){return C.a.h(this.a,a)},
$S:6}
P.eZ.prototype={
gk:function(a){return a.length}}
P.bC.prototype={}
P.hb.prototype={
gk:function(a){return a.length}}
P.dZ.prototype={}
P.cV.prototype={$icV:1}
P.d7.prototype={$id7:1}
P.du.prototype={$idu:1}
P.dx.prototype={$idx:1}
P.bO.prototype={
dk:function(a,b){return a.activeTexture(b)},
dn:function(a,b,c){return a.attachShader(b,c)},
ak:function(a,b,c){return a.bindBuffer(b,c)},
aV:function(a,b,c){return a.bindFramebuffer(b,c)},
dq:function(a,b,c){return a.bindRenderbuffer(b,c)},
aJ:function(a,b,c){return a.bindTexture(b,c)},
iR:function(a,b,c){return a.blendFunc(b,c)},
dt:function(a,b,c,d){return a.bufferData(b,c,d)},
dz:function(a,b){return a.clear(b)},
dA:function(a,b,c,d,e){return a.clearColor(b,c,d,e)},
dB:function(a,b){return a.clearDepth(b)},
iU:function(a,b){return a.compileShader(b)},
iX:function(a,b){return a.createShader(b)},
iZ:function(a,b){return a.deleteProgram(b)},
j_:function(a,b){return a.deleteShader(b)},
dG:function(a,b){return a.depthFunc(b)},
j2:function(a,b){return a.disable(b)},
dJ:function(a,b){return a.disableVertexAttribArray(b)},
j3:function(a,b,c,d,e){return a.drawElements(b,c,d,e)},
aX:function(a,b){return a.enable(b)},
dN:function(a,b){return a.enableVertexAttribArray(b)},
jb:function(a,b,c,d,e){return a.framebufferRenderbuffer(b,c,d,e)},
jc:function(a,b,c,d,e,f){return a.framebufferTexture2D(b,c,d,e,f)},
eq:function(a,b,c){return a.getActiveAttrib(b,c)},
er:function(a,b,c){return a.getActiveUniform(b,c)},
es:function(a,b,c){return a.getAttribLocation(b,c)},
bA:function(a,b){return a.getParameter(b)},
ew:function(a,b){return a.getProgramInfoLog(b)},
bB:function(a,b,c){return a.getProgramParameter(b,c)},
ex:function(a,b){return a.getShaderInfoLog(b)},
ey:function(a,b,c){return a.getShaderParameter(b,c)},
ez:function(a,b,c){return a.getUniformLocation(b,c)},
jh:function(a,b){return a.linkProgram(b)},
jE:function(a,b,c,d,e){return a.renderbufferStorage(b,c,d,e)},
eD:function(a,b,c){return a.shaderSource(b,c)},
jK:function(a,b,c,d,e,f,g,h,i,j){this.i6(a,b,c,d,e,f,g,h,i,j)
return},
i6:function(a,b,c,d,e,f,g,h,i,j){return a.texImage2D(b,c,d,e,f,g,h,i,j)},
bw:function(a,b,c,d){return a.texParameteri(b,c,d)},
J:function(a,b,c){return a.uniform1f(b,c)},
K:function(a,b,c){return a.uniform1i(b,c)},
by:function(a,b,c,d){return a.uniform2f(b,c,d)},
t:function(a,b,c,d,e){return a.uniform3f(b,c,d,e)},
jQ:function(a,b,c,d,e,f){return a.uniform4f(b,c,d,e,f)},
en:function(a,b,c,d){return a.uniformMatrix3fv(b,!1,d)},
cE:function(a,b,c,d){return a.uniformMatrix4fv(b,!1,d)},
cF:function(a,b){return a.useProgram(b)},
jR:function(a,b,c,d,e,f,g){return a.vertexAttribPointer(b,c,d,!1,f,g)},
eo:function(a,b,c,d,e){return a.viewport(b,c,d,e)},
$ibO:1}
P.dy.prototype={$idy:1}
P.dD.prototype={$idD:1}
P.dP.prototype={$idP:1}
P.hB.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.i(P.U(b,a,null,null,null))
return P.be(this.fA(a,b))},
F:function(a,b){return this.j(a,b)},
fA:function(a,b){return a.item(b)},
$au:function(){return[[P.O,,,]]},
$id:1,
$ad:function(){return[[P.O,,,]]},
$ib:1,
$ab:function(){return[[P.O,,,]]},
$az:function(){return[[P.O,,,]]}}
P.er.prototype={}
P.es.prototype={}
O.S.prototype={
b7:function(a){this.sfF(H.c([],[a]))
this.sda(null)
this.sd7(null)
this.sdc(null)},
cH:function(a,b,c){var u=H.at(this,"S",0)
H.l(b,{func:1,ret:P.a6,args:[[P.d,u]]})
u={func:1,ret:-1,args:[P.y,[P.d,u]]}
H.l(a,u)
H.l(c,u)
this.sda(b)
this.sd7(a)
this.sdc(c)},
aC:function(a,b){return this.cH(a,null,b)},
bW:function(a){var u
H.j(a,"$id",[H.at(this,"S",0)],"$ad")
u=this.b
if(u!=null)return u.$1(a)
return!0},
cO:function(a,b){var u
H.j(b,"$id",[H.at(this,"S",0)],"$ad")
u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.am(u,u.length,0,[H.w(u,0)])},
F:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.h(u,b)
return u[b]},
h:function(a,b){var u,t,s
u=H.at(this,"S",0)
H.A(b,u)
u=[u]
if(this.bW(H.c([b],u))){t=this.a
s=t.length
C.a.h(t,b)
this.cO(s,H.c([b],u))}},
c2:function(a,b){var u,t
H.j(b,"$id",[H.at(this,"S",0)],"$ad")
if(this.bW(b)){u=this.a
t=u.length
C.a.c2(u,b)
this.cO(t,b)}},
sfF:function(a){this.a=H.j(a,"$ib",[H.at(this,"S",0)],"$ab")},
sda:function(a){this.b=H.l(a,{func:1,ret:P.a6,args:[[P.d,H.at(this,"S",0)]]})},
sd7:function(a){this.c=H.l(a,{func:1,ret:-1,args:[P.y,[P.d,H.at(this,"S",0)]]})},
sdc:function(a){this.d=H.l(a,{func:1,ret:-1,args:[P.y,[P.d,H.at(this,"S",0)]]})},
$id:1}
O.cf.prototype={
gk:function(a){return this.a.length},
gm:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
eP:function(a){var u=this.b
if(u!=null)u.C(a)},
aD:function(){return this.eP(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.a.gco(u)
else return V.bt()},
bu:function(a){var u=this.a
if(a==null)C.a.h(u,V.bt())
else C.a.h(u,a)
this.aD()},
b0:function(){var u=this.a
if(u.length>0){u.pop()
this.aD()}},
sbM:function(a){this.a=H.j(a,"$ib",[V.ad],"$ab")}}
E.f0.prototype={}
E.ai.prototype={
sbD:function(a,b){var u,t,s
u=this.c
if(u!=b){this.c=b
this.d=b
this.e=null
if(u!=null)u.gm().I(0,this.geg())
t=this.c
if(t!=null)t.gm().h(0,this.geg())
s=new D.B("shape",u,this.c,this,[F.dz])
s.b=!0
this.aM(s)}},
ah:function(a,b){var u
for(u=this.y.a,u=new J.am(u,u.length,0,[H.w(u,0)]);u.w();)u.d.ah(0,b)},
a7:function(a){var u,t
u=a.dx
C.a.h(u.a,u.gY(u))
u.aD()
a.cw(this.f)
u=a.dy
t=(u&&C.a).gco(u)
if(t!=null&&this.d!=null)t.ei(a,this)
for(u=this.y.a,u=new J.am(u,u.length,0,[H.w(u,0)]);u.w();)u.d.a7(a)
a.cv()
a.dx.b0()},
gm:function(){var u=this.z
if(u==null){u=D.G()
this.z=u}return u},
aM:function(a){var u=this.z
if(u!=null)u.C(a)},
a6:function(){return this.aM(null)},
eh:function(a){H.k(a,"$iv")
this.e=null
this.aM(a)},
jr:function(){return this.eh(null)},
ef:function(a){this.aM(H.k(a,"$iv"))},
jo:function(){return this.ef(null)},
jn:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$id",[E.ai],"$ad")
for(u=b.length,t=this.gee(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.z
if(o==null){o=new D.bn()
o.sa1(null)
o.saH(null)
o.c=null
o.d=0
p.z=o}H.l(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.a6()},
jq:function(a,b){var u,t
H.j(b,"$id",[E.ai],"$ad")
for(u=b.gT(b),t=this.gee();u.w();)u.gH(u).gm().I(0,t)
this.a6()},
i:function(a){var u,t
u=this.a
t=u.length
if(t<=0)return"Unnamed entity"
return u},
seQ:function(a,b){this.y=H.j(b,"$iS",[E.ai],"$aS")},
$iaR:1}
E.hj.prototype={
eL:function(a,b){var u,t
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
u=new O.cf()
t=[V.ad]
u.sbM(H.c([],t))
u.b=null
u.gm().h(0,new E.hk(this))
this.cy=u
u=new O.cf()
u.sbM(H.c([],t))
u.b=null
u.gm().h(0,new E.hl(this))
this.db=u
u=new O.cf()
u.sbM(H.c([],t))
u.b=null
u.gm().h(0,new E.hm(this))
this.dx=u
this.si5(H.c([],[O.bv]))
u=this.dy;(u&&C.a).h(u,null)
this.si_(new H.aM([P.o,A.cn]))},
gjA:function(){var u,t
u=this.z
if(u==null){u=this.cy
u=u.gY(u)
t=this.db
t=u.q(0,t.gY(t))
this.z=t
u=t}return u},
cw:function(a){var u,t
u=this.dy
t=a==null?(u&&C.a).gco(u):a;(u&&C.a).h(u,t)},
cv:function(){var u=this.dy
if(u.length>1)u.pop()},
dm:function(a){var u=a.b
if(u.length===0)throw H.i(P.t("May not cache a shader with no name."))
if(this.fr.dE(0,u))throw H.i(P.t('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.a0(0,u,a)},
si5:function(a){this.dy=H.j(a,"$ib",[O.bv],"$ab")},
si_:function(a){this.fr=H.j(a,"$iO",[P.o,A.cn],"$aO")}}
E.hk.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.z=null
u.ch=null},
$S:9}
E.hl.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.z=null
u.Q=null
u.ch=null
u.cx=null},
$S:9}
E.hm.prototype={
$1:function(a){var u
H.k(a,"$iv")
u=this.a
u.ch=null
u.cx=null},
$S:9}
E.dK.prototype={
cR:function(a){H.k(a,"$iv")
this.ej()},
cQ:function(){return this.cR(null)},
gja:function(){var u,t,s
u=Date.now()
t=C.e.Z(P.jS(0,0,0,u-this.cx.a,0,0).a,1000)/1000
if(t<=0)return 0
s=this.cy
this.cy=0
this.cx=new P.an(u,!1)
return s/t},
df:function(){var u,t,s,r
u=window.devicePixelRatio
t=this.b.clientWidth
if(typeof t!=="number")return t.q()
if(typeof u!=="number")return H.F(u)
s=C.d.cl(t*u)
t=this.b.clientHeight
if(typeof t!=="number")return t.q()
r=C.d.cl(t*u)
t=this.b
if(t.width!==s||t.height!==r){t.width=s
t.height=r
P.kb(C.n,this.gjF())}},
ej:function(){var u,t
if(!this.ch){this.ch=!0
u=window
t=H.l(new E.hP(this),{func:1,ret:-1,args:[P.Z]})
C.x.fl(u)
C.x.hP(u,W.kw(t,P.Z))}},
jD:function(){var u,t,s,r,q
try{++this.cy
this.ch=!1
this.df()
if(this.d!=null){s=this.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.an(r,!1)
s.y=P.jS(0,0,0,r-s.r.a,0,0).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.aD()
r=s.db
C.a.sk(r.a,0)
r.aD()
r=s.dx
C.a.sk(r.a,0)
r.aD()
r=s.dy;(r&&C.a).sk(r,0)
s=s.dy;(s&&C.a).h(s,null)
this.d.a7(this.e)}}catch(q){u=H.bA(q)
t=H.bY(q)
P.ap("Error: "+H.n(u))
P.ap("Stack: "+H.n(t))
throw H.i(u)}}}
E.hP.prototype={
$1:function(a){var u
H.mk(a)
u=this.a
if(u.ch){u.ch=!1
u.jD()}},
$S:39}
Z.dW.prototype={$imu:1}
Z.cW.prototype={
a3:function(a){var u,t,s
try{t=a.a
C.b.dN(t,this.e)
C.b.jR(t,this.e,this.b,5126,!1,this.d,this.c)}catch(s){u=H.bA(s)
t=P.t('Failed to bind buffer attribute "'+this.a.i(0)+'": '+H.n(u))
throw H.i(t)}},
i:function(a){return"["+this.a.i(0)+", Size: "+this.b+", Offset: "+this.c+", Stride: "+this.d+", Attr: "+H.n(this.e)+"]"}}
Z.dX.prototype={$imv:1}
Z.c5.prototype={
ay:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a3:function(a){var u,t
u=this.a
C.b.ak(a.a,u.a,u.b)
for(u=this.c,t=u.length-1;t>=0;--t)u[t].a3(a)},
aN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)C.b.dJ(s,u[t].e)
C.b.ak(s,this.a.a,null)},
a7:function(a){var u,t,s,r,q,p
u=this.b.length
for(t=a.a,s=0;s<u;++s){r=this.b
if(s>=r.length)return H.h(r,s)
q=r[s]
r=q.c
p=r.a
C.b.ak(t,p,r.b)
C.b.j3(t,q.a,q.b,5123,0)
C.b.ak(t,p,null)}},
i:function(a){var u,t,s,r,q,p
u=[P.o]
t=H.c([],u)
for(s=this.b,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q)C.a.h(t,s[q].i(0))
p=H.c([],u)
for(u=this.c,s=u.length,q=0;q<s;++q)C.a.h(p,J.b4(u[q]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.D(t,", ")+"\nAttrs:   "+C.a.D(p,", ")},
sfz:function(a){this.b=H.j(a,"$ib",[Z.bI],"$ab")},
$imB:1}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.bL(this.c)+"'")+"]"}}
Z.b0.prototype={
gcI:function(a){var u,t
u=this.a
t=(u&$.aE().a)!==0?3:0
if((u&$.bh().a)!==0)t+=3
if((u&$.bg().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=2
if((u&$.bj().a)!==0)t+=3
if((u&$.cP().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=4
if((u&$.c0().a)!==0)++t
return(u&$.bf().a)!==0?t+4:t},
iP:function(a){var u,t,s
u=$.aE()
t=this.a
if((t&u.a)!==0){if(0===a)return u
s=1}else s=0
u=$.bh()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bg()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bi()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bj()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cP()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.cQ()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.c0()
if((t&u.a)!==0){if(s===a)return u;++s}u=$.bf()
if((t&u.a)!==0)if(s===a)return u
return $.kZ()},
v:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b0))return!1
return this.a===b.a},
i:function(a){var u,t
u=H.c([],[P.o])
t=this.a
if((t&$.aE().a)!==0)C.a.h(u,"Pos")
if((t&$.bh().a)!==0)C.a.h(u,"Norm")
if((t&$.bg().a)!==0)C.a.h(u,"Binm")
if((t&$.bi().a)!==0)C.a.h(u,"Txt2D")
if((t&$.bj().a)!==0)C.a.h(u,"TxtCube")
if((t&$.cP().a)!==0)C.a.h(u,"Clr3")
if((t&$.cQ().a)!==0)C.a.h(u,"Clr4")
if((t&$.c0().a)!==0)C.a.h(u,"Weight")
if((t&$.bf().a)!==0)C.a.h(u,"Bending")
if(u.length<=0)return"None"
return C.a.D(u,"|")}}
D.f3.prototype={}
D.bn.prototype={
h:function(a,b){var u={func:1,ret:-1,args:[D.v]}
H.l(b,u)
if(this.a==null)this.sa1(H.c([],[u]))
u=this.a;(u&&C.a).h(u,b)},
I:function(a,b){var u,t
H.l(b,{func:1,ret:-1,args:[D.v]})
u=this.a
u=u==null?null:C.a.aw(u,b)
if(u===!0){u=this.a
t=(u&&C.a).I(u,b)||!1}else t=!1
u=this.b
u=u==null?null:C.a.aw(u,b)
if(u===!0){u=this.b
t=(u&&C.a).I(u,b)||t}return t},
C:function(a){var u,t,s,r
u={}
u.a=a
t=this.a
s=t==null
r=s?null:t.length===0
if(r!==!1){r=this.b
r=r==null?null:r.length===0
r=r!==!1}else r=!1
if(r)return!1
if(a==null){a=new D.v(null)
a.b=!0
u.a=a
r=a}else r=a
if(this.d>0){if(this.c==null)this.c=r
return!0}if(!s)C.a.P(P.jW(t,!0,{func:1,ret:-1,args:[D.v]}),new D.fm(u))
t=this.b
if(t!=null){this.saH(H.c([],[{func:1,ret:-1,args:[D.v]}]))
C.a.P(t,new D.fn(u))}return!0},
dM:function(){return this.C(null)},
jG:function(a,b,c){var u,t
u=this.d
if(u>0){--u
this.d=u
if(u<=0)u=this.c!=null
else u=!1
if(u){t=this.c
this.c=null
this.C(t)}}},
aB:function(a){return this.jG(a,!0,!1)},
sa1:function(a){this.a=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")},
saH:function(a){this.b=H.j(a,"$ib",[{func:1,ret:-1,args:[D.v]}],"$ab")}}
D.fm.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.fn.prototype={
$1:function(a){var u
H.l(a,{func:1,ret:-1,args:[D.v]})
u=this.a.a
u.b
a.$1(u)},
$S:16}
D.v.prototype={}
D.bo.prototype={}
D.bp.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.n(this.d)+" => "+H.n(this.e)}}
X.cX.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cX))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.dd.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.v(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.n(this.a)}}
X.fE.prototype={
jx:function(a){this.c=a.b
this.d.h(0,a.a)
return!1},
jt:function(a){this.c=a.b
this.d.I(0,a.a)
return!1},
shI:function(a){this.d=H.j(a,"$ik6",[P.y],"$ak6")}}
X.dh.prototype={}
X.fL.prototype={
aS:function(a,b){var u,t,s,r,q,p,o,n
u=new P.an(Date.now(),!1)
t=this.x
s=b.a
r=this.Q
if(typeof s!=="number")return s.q()
q=b.b
p=this.ch
if(typeof q!=="number")return q.q()
o=new V.a0(t.a+s*r,t.b+q*p)
p=this.a.gaK()
n=new X.b9(a,V.bc(),this.x,this.y,this.z,p,o,u,this)
n.b=!0
this.z=u
this.x=o
return n},
cu:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u,t
u=this.r
t=a.a
if(typeof t!=="number")return t.eB()
if(typeof u!=="number")return u.ep()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aS(a,b))
return!0},
jy:function(a){var u,t,s,r,q,p,o,n
u=this.e
if(u==null)return!1
t=this.a.gaK()
s=this.x
r=Date.now()
q=a.a
p=this.cx
if(typeof q!=="number")return q.q()
o=a.b
n=this.cy
if(typeof o!=="number")return o.q()
r=new X.cg(new V.N(q*p,o*n),t,s,new P.an(r,!1),this)
r.b=!0
u.C(r)
return!0},
hg:function(a,b,c){var u,t,s
if(this.f==null)return
u=new P.an(Date.now(),!1)
t=this.f
s=new X.dh(c,a,this.a.gaK(),b,u,this)
s.b=!0
t.C(s)
this.y=u
this.x=V.bc()}}
X.aq.prototype={
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.aq))return!1
if(this.a!==b.a)return!1
if(this.b!=b.b)return!1
if(this.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b9.prototype={}
X.h1.prototype={
bJ:function(a,b,c){var u,t,s
u=new P.an(Date.now(),!1)
t=this.a.gaK()
s=new X.b9(a,this.r,this.x,this.y,this.z,t,b,u,this)
s.b=!0
if(c){this.y=u
this.r=b}this.z=u
this.x=b
return s},
cu:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bJ(a,b,!0))
return!0},
b_:function(a,b){var u,t
u=this.f
t=a.a
if(typeof t!=="number")return t.eB()
if(typeof u!=="number")return u.ep()
this.f=(u&~t)>>>0
u=this.c
if(u==null)return!1
u.C(this.bJ(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bJ(a,b,!1))
return!0},
jz:function(a,b){var u,t,s,r,q,p,o
u=this.e
if(u==null)return!1
t=this.a.gaK()
s=Date.now()
r=a.a
q=this.Q
if(typeof r!=="number")return r.q()
p=a.b
o=this.ch
if(typeof p!=="number")return p.q()
s=new X.cg(new V.N(r*q,p*o),t,b,new P.an(s,!1),this)
s.b=!0
u.C(s)
return!0},
gdL:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
gbz:function(){var u=this.c
if(u==null){u=D.G()
this.c=u}return u},
ged:function(){var u=this.d
if(u==null){u=D.G()
this.d=u}return u}}
X.cg.prototype={}
X.hf.prototype={}
X.dM.prototype={}
X.hS.prototype={
aS:function(a,b){var u,t,s,r
H.j(a,"$ib",[V.a0],"$ab")
u=new P.an(Date.now(),!1)
t=a.length>0?a[0]:V.bc()
s=this.a.gaK()
r=new X.dM(a,this.f,this.r,this.x,this.y,s,t,u,this)
r.b=!0
if(b){this.x=u
this.f=t}this.y=u
this.r=t
return r},
jw:function(a){var u
H.j(a,"$ib",[V.a0],"$ab")
u=this.b
if(u==null)return!1
u.C(this.aS(a,!0))
return!0},
ju:function(a){var u
H.j(a,"$ib",[V.a0],"$ab")
u=this.c
if(u==null)return!1
u.C(this.aS(a,!0))
return!0},
jv:function(a){var u
H.j(a,"$ib",[V.a0],"$ab")
u=this.d
if(u==null)return!1
u.C(this.aS(a,!1))
return!0}}
X.dS.prototype={
gaK:function(){var u=this.a
return V.dw(0,0,C.m.gdC(u).c,C.m.gdC(u).d)},
d0:function(a){var u,t
u=a.keyCode
t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.aq(t,a.altKey,a.shiftKey))},
aI:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aq(t,a.altKey,a.shiftKey)},
c1:function(a){var u,t
u=this.b
t=a.ctrlKey||a.metaKey
u.c=new X.aq(t,a.altKey,a.shiftKey)},
au:function(a){var u,t,s,r,q
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=u.top
if(typeof s!=="number")return s.p()
return new V.a0(t-r,s-q)},
aT:function(a){return new V.N(a.movementX,a.movementY)},
bY:function(a){var u,t,s,r,q,p,o,n
u=this.a.getBoundingClientRect()
t=H.c([],[V.a0])
for(s=a.touches,r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
o=C.d.X(p.pageX)
C.d.X(p.pageY)
n=u.left
C.d.X(p.pageX)
C.a.h(t,new V.a0(o-n,C.d.X(p.pageY)-u.top))}return t},
ar:function(a){var u,t
u=a.buttons
t=a.ctrlKey||a.metaKey
return new X.cX(u,new X.aq(t,a.altKey,a.shiftKey))},
bN:function(a){var u,t,s,r,q,p
u=this.a.getBoundingClientRect()
t=a.pageX
s=a.pageY
r=u.left
if(typeof t!=="number")return t.p()
q=t-r
if(q<0)return!1
t=u.top
if(typeof s!=="number")return s.p()
p=s-t
if(p<0)return!1
return q<u.width&&p<u.height},
ha:function(a){this.f=!0},
fV:function(a){this.f=!1},
h0:function(a){H.k(a,"$ia8")
if(this.f&&this.bN(a))a.preventDefault()},
he:function(a){var u
H.k(a,"$iaN")
if(!this.f)return
u=this.d0(a)
this.b.jx(u)},
hc:function(a){var u
H.k(a,"$iaN")
if(!this.f)return
u=this.d0(a)
this.b.jt(u)},
hi:function(a){var u,t,s,r
H.k(a,"$ia8")
u=this.a
u.focus()
this.f=!0
this.aI(a)
if(this.x){t=this.ar(a)
s=this.aT(a)
if(this.d.cu(t,s))a.preventDefault()
return}if(this.r){this.y=a
u.requestPointerLock()
return}t=this.ar(a)
r=this.au(a)
if(this.c.cu(t,r))a.preventDefault()},
hm:function(a){var u,t,s
H.k(a,"$ia8")
this.aI(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.b_(u,s))a.preventDefault()},
h4:function(a){var u,t,s
H.k(a,"$ia8")
if(!this.bN(a)){this.aI(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.b_(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.b_(u,s))a.preventDefault()}},
hk:function(a){var u,t,s
H.k(a,"$ia8")
this.aI(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.aZ(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.aZ(u,s))a.preventDefault()},
h2:function(a){var u,t,s
H.k(a,"$ia8")
if(!this.bN(a)){this.aI(a)
u=this.ar(a)
if(this.x){t=this.aT(a)
if(this.d.aZ(u,t))a.preventDefault()
return}if(this.r)return
s=this.au(a)
if(this.c.aZ(u,s))a.preventDefault()}},
ho:function(a){var u,t
H.k(a,"$ib1")
this.aI(a)
u=new V.N((a&&C.w).gj0(a),C.w.gj1(a)).u(0,180)
if(this.x){if(this.d.jy(u))a.preventDefault()
return}if(this.r)return
t=this.au(a)
if(this.c.jz(u,t))a.preventDefault()},
hq:function(a){var u,t,s
u=document.pointerLockElement===this.a
if(u!==this.x){this.x=u
t=this.ar(this.y)
s=this.au(this.y)
this.d.hg(t,s,u)}},
hG:function(a){var u
H.k(a,"$iaC")
this.a.focus()
this.f=!0
this.c1(a)
u=this.bY(a)
if(this.e.jw(u))a.preventDefault()},
hC:function(a){var u
H.k(a,"$iaC")
this.c1(a)
u=this.bY(a)
if(this.e.ju(u))a.preventDefault()},
hE:function(a){var u
H.k(a,"$iaC")
this.c1(a)
u=this.bY(a)
if(this.e.jv(u))a.preventDefault()},
sfn:function(a){this.z=H.j(a,"$ib",[[P.cp,P.K]],"$ab")}}
D.bl.prototype={
gm:function(){var u=this.d
if(u==null){u=D.G()
this.d=u}return u},
ao:function(a){var u
H.k(a,"$iv")
u=this.d
if(u!=null)u.C(a)},
eS:function(){return this.ao(null)},
$ia_:1,
$iaR:1}
D.a_.prototype={$iaR:1}
D.de.prototype={
gm:function(){var u=this.Q
if(u==null){u=D.G()
this.Q=u}return u},
ao:function(a){var u=this.Q
if(u!=null)u.C(a)},
d9:function(a){var u
H.k(a,"$iv")
u=this.ch
if(u!=null)u.C(a)},
hf:function(){return this.d9(null)},
hs:function(a){var u,t,s
H.j(a,"$id",[D.a_],"$ad")
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.C)(a),++t){s=a[t]
if(s==null||this.fd(s))return!1}return!0},
fP:function(a,b){var u,t,s,r,q,p,o,n
u=D.a_
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gd8(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=H.k(b[p],"$ia_")
if(o instanceof D.bl)C.a.h(this.e,o)
n=o.d
if(n==null){n=new D.bn()
n.sa1(null)
n.saH(null)
n.c=null
n.d=0
o.d=n}H.l(s,r)
if(n.a==null)n.sa1(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}u=new D.bo(a,b,this,[u])
u.b=!0
this.ao(u)},
hw:function(a,b){var u,t,s,r
u=D.a_
H.j(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gd8();t.w();){r=t.gH(t)
C.a.I(this.e,r)
r.gm().I(0,s)}u=new D.bp(a,b,this,[u])
u.b=!0
this.ao(u)},
fd:function(a){var u=C.a.aw(this.e,a)
return u},
sfj:function(a){this.e=H.j(a,"$ib",[D.bl],"$ab")},
shH:function(a){this.f=H.j(a,"$ib",[D.dt],"$ab")},
si1:function(a){this.r=H.j(a,"$ib",[D.dA],"$ab")},
sih:function(a){this.x=H.j(a,"$ib",[D.dH],"$ab")},
sii:function(a){this.y=H.j(a,"$ib",[D.dI],"$ab")},
sij:function(a){this.z=H.j(a,"$ib",[D.dJ],"$ab")},
$ad:function(){return[D.a_]},
$aS:function(){return[D.a_]}}
D.dt.prototype={$ia_:1,$iaR:1}
D.dA.prototype={$ia_:1,$iaR:1}
D.dH.prototype={$ia_:1,$iaR:1}
D.dI.prototype={$ia_:1,$iaR:1}
D.dJ.prototype={$ia_:1,$iaR:1}
V.X.prototype={
n:function(a,b){var u,t,s
u=C.d.n(this.a,b.gcz())
t=C.d.n(this.b,b.gbC())
s=C.d.n(this.c,b.gc7())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.X(u,t,s)},
p:function(a,b){var u,t,s
u=C.d.p(this.a,b.gcz())
t=C.d.p(this.b,b.gbC())
s=C.d.p(this.c,b.gc7())
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.X(u,t,s)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.a3.prototype={
n:function(a,b){var u,t,s,r
u=C.d.n(this.a,b.gcz())
t=C.d.n(this.b,b.gbC())
s=C.d.n(this.c,b.gc7())
r=C.d.n(this.d,b.giO(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a3(u,t,s,r)},
p:function(a,b){var u,t,s,r
u=C.d.p(this.a,b.gcz())
t=C.d.p(this.b,b.gbC())
s=C.d.p(this.c,b.gc7())
r=C.d.p(this.d,b.giO(b))
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.a3(u,t,s,r)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.fk.prototype={}
V.dm.prototype={
a8:function(a,b){var u=H.c([this.a,this.d,this.r,this.b,this.e,this.x,this.c,this.f,this.y],[P.x])
return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.dm))return!1
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
u=[P.x]
t=V.bW(H.c([this.a,this.d,this.r],u),3,0)
s=V.bW(H.c([this.b,this.e,this.x],u),3,0)
r=V.bW(H.c([this.c,this.f,this.y],u),3,0)
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
V.ad.prototype={
a8:function(a,b){var u=H.c([this.a,this.e,this.y,this.cx,this.b,this.f,this.z,this.cy,this.c,this.r,this.Q,this.db,this.d,this.x,this.ch,this.dx],[P.x])
return u},
eb:function(b1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
if(Math.abs(a7-0)<$.M().a)return V.bt()
a8=1/a7
a9=-r
b0=-d
return V.aP((t*a6-p*a5+m*a4)*a8,(-s*a6+o*a5-l*a4)*a8,(f*h-b*i+a1*j)*a8,(-e*h+a*i-a2*j)*a8,(a9*a6+p*a3-m*a0)*a8,(u*a6-o*a3+l*a0)*a8,(b0*h+b*k-a1*n)*a8,(g*h-a*k+a2*n)*a8,(r*a5-t*a3+m*c)*a8,(-u*a5+s*a3-l*c)*a8,(d*i-f*k+a1*q)*a8,(-g*i+e*k-a2*q)*a8,(a9*a4+t*a0-p*c)*a8,(u*a4-s*a0+o*c)*a8,(b0*j+f*n-b*q)*a8,(g*j-e*n+a*q)*a8)},
q:function(b1,b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0
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
return V.aP(u*t+s*r+q*p+o*n,u*m+s*l+q*k+o*j,u*i+s*h+q*g+o*f,u*e+s*d+q*c+o*b,a*t+a0*r+a1*p+a2*n,a*m+a0*l+a1*k+a2*j,a*i+a0*h+a1*g+a2*f,a*e+a0*d+a1*c+a2*b,a3*t+a4*r+a5*p+a6*n,a3*m+a4*l+a5*k+a6*j,a3*i+a4*h+a5*g+a6*f,a3*e+a4*d+a5*c+a6*b,a7*t+a8*r+a9*p+b0*n,a7*m+a8*l+a9*k+b0*j,a7*i+a8*h+a9*g+b0*f,a7*e+a8*d+a9*c+b0*b)},
cD:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.L(this.a*u+this.b*t+this.c*s,this.e*u+this.f*t+this.r*s,this.y*u+this.z*t+this.Q*s)},
b5:function(a){var u,t,s
u=a.a
t=a.b
s=a.c
return new V.Y(this.a*u+this.b*t+this.c*s+this.d,this.e*u+this.f*t+this.r*s+this.x,this.y*u+this.z*t+this.Q*s+this.ch)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ad))return!1
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
e9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l
u=[P.x]
t=V.bW(H.c([this.a,this.e,this.y,this.cx],u),b,c)
s=V.bW(H.c([this.b,this.f,this.z,this.cy],u),b,c)
r=V.bW(H.c([this.c,this.r,this.Q,this.db],u),b,c)
q=V.bW(H.c([this.d,this.x,this.ch,this.dx],u),b,c)
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
R:function(){return this.e9("",3,0)},
E:function(a){return this.e9(a,3,0)}}
V.a0.prototype={
n:function(a,b){return new V.a0(this.a+b.a,this.b+b.b)},
p:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.Y.prototype={
n:function(a,b){return new V.Y(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.Y(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.Y(this.a*b,this.b*b,this.c*b)},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
V.aT.prototype={
n:function(a,b){return new V.aT(C.e.n(this.a,b.gjT(b)),C.e.n(this.b,b.gjU(b)),C.e.n(this.c,b.gjV(b)),C.e.n(this.d,b.gjS(b)))},
p:function(a,b){return new V.aT(C.e.p(this.a,b.gjT(b)),C.e.p(this.b,b.gjU(b)),C.e.p(this.c,b.gjV(b)),C.e.p(this.d,b.gjS(b)))},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.aT))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.bN.prototype={
ga5:function(){var u,t
u=this.c
t=this.d
if(u>t)return t
else return u},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.bN))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
if(!(Math.abs(b.d-this.d)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+", "+V.Q(this.d,3,0)+"]"}}
V.N.prototype={
cp:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s,r
u=this.a
t=a.a
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.F(t)
s=this.b
r=a.b
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.F(r)
return u*t+s*r},
n:function(a,b){var u,t,s
u=this.a
t=b.gj4(b)
if(typeof u!=="number")return u.n()
t=C.d.n(u,t)
u=this.b
s=b.gj5(b)
if(typeof u!=="number")return u.n()
return new V.N(t,C.d.n(u,s))},
p:function(a,b){var u,t,s
u=this.a
t=b.gj4(b)
if(typeof u!=="number")return u.p()
t=C.d.p(u,t)
u=this.b
s=b.gj5(b)
if(typeof u!=="number")return u.p()
return new V.N(t,C.d.p(u,s))},
q:function(a,b){var u,t
u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.N(u*b,t*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.M().a){u=$.kf
if(u==null){u=new V.N(0,0)
$.kf=u}return u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.N(u/b,t/b)},
v:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=this.a
s=$.M()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.F(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+"]"}}
V.L.prototype={
cp:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ax:function(a){var u,t,s,r,q,p
u=this.b
t=a.c
s=this.c
r=a.b
q=a.a
p=this.a
return new V.L(u*t-s*r,s*q-p*t,p*r-u*q)},
n:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
p:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
N:function(a){return new V.L(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.M().a)return V.cA()
return new V.L(this.a/b,this.b/b,this.c/b)},
ec:function(){var u=$.M().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
v:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.M().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
if(!(Math.abs(b.c-this.c)<t))return!1
return!0},
i:function(a){return"["+V.Q(this.a,3,0)+", "+V.Q(this.b,3,0)+", "+V.Q(this.c,3,0)+"]"}}
U.f5.prototype={
bF:function(a){var u=V.mt(a,this.c,this.b)
return u},
gm:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scG:function(a,b){},
scr:function(a){var u,t
u=this.b
if(!(Math.abs(u-a)<$.M().a)){this.b=a
if(a<this.c){this.c=a
this.d=a}else{t=this.d
if(a<t)this.d=this.bF(t)}u=new D.B("maximumLocation",u,this.b,this,[P.x])
u.b=!0
this.M(u)}},
sct:function(a){var u,t
u=this.c
if(!(Math.abs(u-a)<$.M().a)){this.c=a
if(this.b<a){this.b=a
this.d=a}else{t=this.d
if(a>t)this.d=this.bF(t)}u=new D.B("minimumLocation",u,this.c,this,[P.x])
u.b=!0
this.M(u)}},
sa4:function(a,b){var u
b=this.bF(b)
u=this.d
if(!(Math.abs(u-b)<$.M().a)){this.d=b
u=new D.B("location",u,b,this,[P.x])
u.b=!0
this.M(u)}},
scs:function(a){var u,t,s
u=this.e
if(!(Math.abs(u-a)<$.M().a)){this.e=a
t=this.f
s=-a
if(t<s)t=s
else if(t>a)t=a
this.f=t
u=new D.B("maximumVelocity",u,a,this,[P.x])
u.b=!0
this.M(u)}},
sS:function(a){var u,t
u=this.e
t=-u
if(a<t)a=t
else if(a>u)a=u
u=this.f
if(!(Math.abs(u-a)<$.M().a)){this.f=a
u=new D.B("velocity",u,a,this,[P.x])
u.b=!0
this.M(u)}},
scc:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.M().a)){this.x=a
u=new D.B("dampening",u,a,this,[P.x])
u.b=!0
this.M(u)}},
ah:function(a,b){var u,t,s,r,q
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
s=q}this.sS(s)}}}
U.cZ.prototype={
gm:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
aO:function(a,b,c){return this.a},
v:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cZ))return!1
return J.T(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.ce.prototype={
gm:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
M:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.C(a)},
a2:function(){return this.M(null)},
fN:function(a,b){var u,t,s,r,q,p,o,n
u=U.ae
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gaF(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.l(s,r)
if(n.a==null)n.sa1(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.M(u)},
hu:function(a,b){var u,t,s
u=U.ae
H.j(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gaF();t.w();)t.gH(t).gm().I(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.M(u)},
aO:function(a,b,c){var u,t,s,r
u=this.r
t=b.e
if(typeof u!=="number")return u.aP()
if(u<t){this.r=t
u=this.e
if(u!=null)++u.d
for(u=this.a,u=new J.am(u,u.length,0,[H.w(u,0)]),s=null;u.w();){t=u.d
if(t!=null){r=t.aO(0,b,c)
if(r!=null)s=s==null?r:r.q(0,s)}}this.f=s==null?V.bt():s
u=this.e
if(u!=null)u.aB(0)}return this.f},
v:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ce))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.h(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.h(r,t)
if(!J.T(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ad:function(){return[U.ae]},
$aS:function(){return[U.ae]},
$iae:1}
U.ae.prototype={}
U.dT.prototype={
gm:function(){var u=this.cy
if(u==null){u=D.G()
this.cy=u}return u},
M:function(a){var u
H.k(a,"$iv")
u=this.cy
if(u!=null)u.C(a)},
a2:function(){return this.M(null)},
aU:function(a){if(this.a!=null)return!1
this.a=a
a.c.gdL().h(0,this.gbO())
this.a.c.ged().h(0,this.gbQ())
this.a.c.gbz().h(0,this.gbS())
return!0},
bP:function(a){H.k(a,"$iv")
if(!J.T(this.c,this.a.b.c))return
this.y=!0
this.x=!0
this.z=this.b.d},
bR:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$ib9")
if(!this.y)return
if(this.x){u=a.d.p(0,a.y)
u=new V.N(u.a,u.b)
u=u.A(u)
t=this.r
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.x=!1}if(this.d){u=a.c
t=a.d.p(0,a.y)
u=new V.N(t.a,t.b).q(0,2).u(0,u.ga5())
this.Q=u
t=this.b
u=u.a
if(typeof u!=="number")return u.q()
s=this.e
if(typeof s!=="number")return H.F(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=new V.N(s.a,s.b).q(0,2).u(0,u.ga5())
s=this.b
q=r.a
if(typeof q!=="number")return q.N()
p=this.e
if(typeof p!=="number")return H.F(p)
o=this.z
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
this.b.sS(0)
t=t.p(0,a.z)
this.Q=new V.N(t.a,t.b).q(0,2).u(0,u.ga5())}this.a2()},
bT:function(a){var u,t,s
H.k(a,"$iv")
if(!this.y)return
this.y=!1
if(this.x)return
u=this.Q
if(u.A(u)>0.0001){u=this.b
t=this.Q.a
if(typeof t!=="number")return t.q()
s=this.e
if(typeof s!=="number")return H.F(s)
u.sS(t*10*s)
this.a2()}},
aO:function(a,b,c){var u,t,s,r,q
u=this.ch
t=b.e
if(typeof u!=="number")return u.aP()
if(u<t){this.ch=t
s=b.y
this.b.ah(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
this.cx=V.aP(r,-q,0,0,q,r,0,0,0,0,1,0,0,0,0,1)}return this.cx},
$iae:1}
U.dU.prototype={
gm:function(){var u=this.fx
if(u==null){u=D.G()
this.fx=u}return u},
M:function(a){var u
H.k(a,"$iv")
u=this.fx
if(u!=null)u.C(a)},
a2:function(){return this.M(null)},
aU:function(a){var u,t
if(this.a!=null)return!1
this.a=a
a.c.gdL().h(0,this.gbO())
this.a.c.ged().h(0,this.gbQ())
this.a.c.gbz().h(0,this.gbS())
u=this.a.d
t=u.f
if(t==null){t=D.G()
u.f=t
u=t}else u=t
u.h(0,this.gfG())
u=this.a.d
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.gfI())
u=this.a.e
t=u.b
if(t==null){t=D.G()
u.b=t
u=t}else u=t
u.h(0,this.gic())
u=this.a.e
t=u.d
if(t==null){t=D.G()
u.d=t
u=t}else u=t
u.h(0,this.gia())
u=this.a.e
t=u.c
if(t==null){t=D.G()
u.c=t
u=t}else u=t
u.h(0,this.gi8())
return!0},
aj:function(a){var u,t
u=a.a
t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.N(u,t)},
bP:function(a){a=H.f(H.k(a,"$iv"),"$ib9")
if(!J.T(this.d,a.x.b))return
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
bR:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$ib9")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.N(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aj(new V.N(t.a,t.b).q(0,2).u(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aj(new V.N(s.a,s.b).q(0,2).u(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa4(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.p(0,a.z)
this.dx=this.aj(new V.N(t.a,t.b).q(0,2).u(0,u.ga5()))}this.a2()},
bT:function(a){var u,t,s
H.k(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sS(-t*10*u)
this.a2()}},
fH:function(a){if(H.f(H.k(a,"$iv"),"$idh").x){this.ch=!0
this.cy=this.c.d
this.db=this.b.d}},
fJ:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$ib9")
if(!J.T(this.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aj(new V.N(s.a,s.b).q(0,2).u(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa4(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.p(0,a.z)
this.dx=this.aj(new V.N(t.a,t.b).q(0,2).u(0,u.ga5()))
this.a2()},
ie:function(a){H.k(a,"$iv")
this.cx=!0
this.ch=!0
this.cy=this.c.d
this.db=this.b.d},
ib:function(a){var u,t,s,r,q,p,o
a=H.f(H.k(a,"$iv"),"$idM")
if(!this.cx)return
if(this.ch){u=a.d.p(0,a.y)
u=new V.N(u.a,u.b)
u=u.A(u)
t=this.Q
if(typeof t!=="number")return H.F(t)
if(u<t)return
this.ch=!1}if(this.e){u=a.c
t=a.d.p(0,a.y)
u=this.aj(new V.N(t.a,t.b).q(0,2).u(0,u.ga5()))
this.dx=u
t=this.c
u=u.a
if(typeof u!=="number")return u.N()
s=this.y
if(typeof s!=="number")return H.F(s)
t.sS(-u*10*s)
s=this.b
u=this.dx.b
if(typeof u!=="number")return u.N()
t=this.x
if(typeof t!=="number")return H.F(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=this.aj(new V.N(s.a,s.b).q(0,2).u(0,u.ga5()))
s=this.c
q=r.a
if(typeof q!=="number")return q.N()
p=this.y
if(typeof p!=="number")return H.F(p)
o=this.cy
if(typeof o!=="number")return H.F(o)
s.sa4(0,-q*p+o)
o=this.b
p=r.b
if(typeof p!=="number")return p.N()
q=this.x
if(typeof q!=="number")return H.F(q)
s=this.db
if(typeof s!=="number")return H.F(s)
o.sa4(0,-p*q+s)
this.b.sS(0)
this.c.sS(0)
t=t.p(0,a.z)
this.dx=this.aj(new V.N(t.a,t.b).q(0,2).u(0,u.ga5()))}this.a2()},
i9:function(a){var u,t,s
H.k(a,"$iv")
if(!this.cx)return
this.cx=!1
if(this.ch)return
u=this.dx
if(u.A(u)>0.0001){u=this.c
t=this.dx.a
if(typeof t!=="number")return t.N()
s=this.y
if(typeof s!=="number")return H.F(s)
u.sS(-t*10*s)
s=this.b
t=this.dx.b
if(typeof t!=="number")return t.N()
u=this.x
if(typeof u!=="number")return H.F(u)
s.sS(-t*10*u)
this.a2()}},
aO:function(a,b,c){var u,t,s,r,q
u=this.dy
t=b.e
if(typeof u!=="number")return u.aP()
if(u<t){this.dy=t
s=b.y
this.c.ah(0,s)
this.b.ah(0,s)
u=this.b.d
r=Math.cos(u)
q=Math.sin(u)
u=V.aP(1,0,0,0,0,r,-q,0,0,q,r,0,0,0,0,1)
t=this.c.d
r=Math.cos(t)
q=Math.sin(t)
this.fr=u.q(0,V.aP(r,0,-q,0,0,1,0,0,q,0,r,0,0,0,0,1))}return this.fr},
$iae:1}
U.dV.prototype={
gm:function(){var u=this.r
if(u==null){u=D.G()
this.r=u}return u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aU:function(a){var u,t,s
if(this.a!=null)return!1
this.a=a
u=a.c
t=u.e
if(t==null){t=D.G()
u.e=t
u=t}else u=t
t=this.gfK()
u.h(0,t)
u=this.a.d
s=u.e
if(s==null){s=D.G()
u.e=s
u=s}else u=s
u.h(0,t)
return!0},
fL:function(a){var u,t,s,r
H.k(a,"$iv")
if(!J.T(this.b,this.a.b.c))return
H.f(a,"$icg")
u=this.d
t=a.x.b
s=this.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){this.d=r
u=new D.B("zoom",u,r,this,[P.x])
u.b=!0
this.M(u)}},
aO:function(a,b,c){var u,t,s
u=this.e
t=b.e
if(u<t){this.e=t
s=Math.pow(10,this.d)
this.f=V.aP(s,0,0,0,0,s,0,0,0,0,s,0,0,0,0,1)}return this.f},
$iae:1}
M.cY.prototype={
gm:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
V:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.C(a)},
aQ:function(){return this.V(null)},
hy:function(a,b){var u,t,s,r,q,p,o,n
u=M.ar
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.gm()
n.toString
H.l(s,r)
if(n.a==null)n.sa1(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.V(u)},
hA:function(a,b){var u,t,s
u=M.ar
H.j(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gW();t.w();)t.gH(t).gm().I(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.V(u)},
a7:function(a){var u,t
if(this.e)return
this.e=!0
for(u=this.a,u=new J.am(u,u.length,0,[H.w(u,0)]);u.w();){t=u.d
if(t!=null)t.a7(a)}this.e=!1},
$ad:function(){return[M.ar]},
$aS:function(){return[M.ar]},
$iar:1}
M.d0.prototype={
gm:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
V:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.C(a)},
aQ:function(){return this.V(null)},
sb2:function(a,b){var u,t
if(b==null)b=X.jl(!0,!0,!1,null,2000,null,0)
u=this.b
if(u!==b){if(u!=null)u.gm().I(0,this.gW())
t=this.b
this.b=b
b.gm().h(0,this.gW())
u=new D.B("target",t,this.b,this,[X.cq])
u.b=!0
this.V(u)}},
sb3:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().I(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gW())
u=new D.B("technique",t,this.c,this,[O.bv])
u.b=!0
this.V(u)}},
a7:function(a){var u,t
a.cw(this.c)
this.b.a3(a)
u=this.a
u.toString
a.cy.bu(V.bt())
t=V.bt()
u.a
a.db.bu(t)
this.d.ah(0,a)
this.d.a7(a)
this.a.toString
a.cy.b0()
a.db.b0()
this.b.toString
a.cv()},
$iar:1}
M.d4.prototype={
V:function(a){var u
H.k(a,"$iv")
u=this.x
if(u!=null)u.C(a)},
aQ:function(){return this.V(null)},
fX:function(a,b){var u,t,s,r,q,p,o,n
u=E.ai
H.j(b,"$id",[u],"$ad")
for(t=b.length,s=this.gW(),r={func:1,ret:-1,args:[D.v]},q=[r],p=0;p<b.length;b.length===t||(0,H.C)(b),++p){o=b[p]
if(o!=null){n=o.z
if(n==null){n=new D.bn()
n.sa1(null)
n.saH(null)
n.c=null
n.d=0
o.z=n}H.l(s,r)
if(n.a==null)n.sa1(H.c([],q))
n=n.a;(n&&C.a).h(n,s)}}u=new D.bo(a,b,this,[u])
u.b=!0
this.V(u)},
fZ:function(a,b){var u,t,s
u=E.ai
H.j(b,"$id",[u],"$ad")
for(t=b.gT(b),s=this.gW();t.w();)t.gH(t).gm().I(0,s)
u=new D.bp(a,b,this,[u])
u.b=!0
this.V(u)},
sdv:function(a){var u,t
if(a==null)a=X.k0(2000,1.0471975511965976,null,0.1,null)
u=this.a
if(u!==a){if(u!=null)u.gm().I(0,this.gW())
t=this.a
this.a=a
a.gm().h(0,this.gW())
u=new D.B("camera",t,this.a,this,[X.bD])
u.b=!0
this.V(u)}},
sb2:function(a,b){var u,t
u=this.b
if(u!==b){if(u!=null)u.gm().I(0,this.gW())
t=this.b
this.b=b
b.gm().h(0,this.gW())
u=new D.B("target",t,this.b,this,[X.cq])
u.b=!0
this.V(u)}},
sb3:function(a){var u,t
u=this.c
if(u!=a){if(u!=null)u.gm().I(0,this.gW())
t=this.c
this.c=a
if(a!=null)a.gm().h(0,this.gW())
u=new D.B("technique",t,this.c,this,[O.bv])
u.b=!0
this.V(u)}},
gm:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u},
a7:function(a){var u,t,s,r,q,p,o,n,m,l,k
a.cw(this.c)
this.b.a3(a)
u=this.a
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.aP(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bu(m)
t=$.k1
if(t==null){t=V.k3()
s=V.kk()
r=$.kg
if(r==null){r=new V.L(0,0,-1)
$.kg=r}r=V.jY(t,s,r)
$.k1=r
l=r}else l=t
t=u.b
if(t!=null){k=t.aO(0,a,u)
if(k!=null)l=k.q(0,l)}a.db.bu(l)
u=this.c
if(u!=null)u.ah(0,a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.w(u,0)]);u.w();)u.d.ah(0,a)
for(u=this.d.a,u=new J.am(u,u.length,0,[H.w(u,0)]);u.w();)u.d.a7(a)
this.a.toString
a.cy.b0()
a.db.b0()
this.b.aN(a)
a.cv()},
sfa:function(a,b){this.d=H.j(b,"$iS",[E.ai],"$aS")},
$iar:1}
M.ar.prototype={}
A.cS.prototype={}
A.eV.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j6:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dN(r.a,r.c)}},
dI:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
C.b.dJ(r.a,r.c)}}}
A.dk.prototype={
eK:function(a6,a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5
this.z=a6
u=new P.bu("")
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
a6.ip(u)
a6.iw(u)
a6.iq(u)
a6.iE(u)
a6.iF(u)
a6.iy(u)
a6.iJ(u)
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
u=new P.bu("")
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
q.it(u)
q.io(u)
q.ir(u)
q.iu(u)
q.iC(u)
o=q.dy
if(o){m=u.a+="// === Enviromental ===\n"
m+="\n"
u.a=m
m+="uniform samplerCube envSampler;\n"
u.a=m
m+="uniform int nullEnvTxt;\n"
u.a=m
u.a=m+"\n"
q.iA(u)
q.iB(u)}q.ix(u)
m=u.a+="// === Alpha ===\n"
m+="\n"
u.a=m
l=q.y
if(l!==C.c){m+="uniform float alpha;\n"
u.a=m
if(l!==C.i){m+="uniform int nullAlphaTxt;\n"
u.a=m
if(l===C.f){m+="uniform sampler2D alphaTxt;\n"
u.a=m}else if(l===C.h){m+="uniform samplerCube alphaTxt;\n"
u.a=m}}m+="\n"
u.a=m}m+="float alphaValue()\n"
u.a=m
m+="{\n"
u.a=m
switch(l){case C.c:m+="   return 1.0;\n"
u.a=m
break
case C.i:m+="   return alpha;\n"
u.a=m
break
case C.f:m+="   if(nullAlphaTxt > 0) return alpha;\n"
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
k=H.c([],[P.o])
if(q.b!==C.c)C.a.h(k,"ambient()")
if(q.c!==C.c)C.a.h(k,"diffuse(norm, litVec)")
if(q.d!==C.c)C.a.h(k,"invDiffuse(norm, litVec)")
if(q.e!==C.c)C.a.h(k,"specular(norm, litVec)")
m=u.a+="   return litClr*("+C.a.D(k," + ")+");\n"
m+="}\n"
u.a=m
u.a=m+"\n"
q.is(u)
q.iz(u)
q.iD(u)
q.iG(u)
q.iH(u)
q.iI(u)
q.iv(u)}m=u.a+="// === Main ===\n"
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
j=H.c([],[P.o])
if(l){u.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
C.a.h(j,"lightAccum")
if(q.c!==C.c)u.a+="   setDiffuseColor();\n"
if(q.d!==C.c)u.a+="   setInvDiffuseColor();\n"
if(q.e!==C.c)u.a+="   setSpecularColor();\n"
if(q.z>0)u.a+="   lightAccum += allDirLightValues(norm);\n"
if(q.Q>0)u.a+="   lightAccum += allPointLightValues(norm);\n"
if(q.ch>0)u.a+="   lightAccum += allSpotLightValues(norm);\n"
if(q.cx>0)u.a+="   lightAccum += allTxtDirLightValues(norm);\n"
if(q.cy>0)u.a+="   lightAccum += allTxtPointLightValues(norm);\n"
if(q.db>0)u.a+="   lightAccum += allTxtSpotLightValues(norm);\n"
if(q.dx<=0)u.a+="   lightAccum += nonLightValues(norm);\n"}if(q.a!==C.c)C.a.h(j,"emission()")
if(q.r!==C.c)C.a.h(j,"reflect(refl)")
if(q.x!==C.c)C.a.h(j,"refract(refl)")
if(j.length<=0)C.a.h(j,"vec3(0.0, 0.0, 0.0)")
i="vec4("+C.a.D(j," + ")+", alpha);"
q=u.a
if(n){q+="   gl_FragColor = colorMat*"+i+"\n"
u.a=q}else{q+="   gl_FragColor = "+i+"\n"
u.a=q}q+="}\n"
u.a=q
this.ea(0,s.charCodeAt(0)==0?s:s,q.charCodeAt(0)==0?q:q)
this.Q=this.x.j(0,"posAttr")
this.cx=this.x.j(0,"normAttr")
this.ch=this.x.j(0,"binmAttr")
this.cy=this.x.j(0,"txt2DAttr")
this.db=this.x.j(0,"txtCubeAttr")
this.dx=this.x.j(0,"bendAttr")
if(a6.fr)this.id=H.f(this.y.l(0,"invViewMat"),"$iag")
if(t)this.dy=H.f(this.y.l(0,"objMat"),"$iag")
if(r)this.fr=H.f(this.y.l(0,"viewObjMat"),"$iag")
this.fy=H.f(this.y.l(0,"projViewObjMat"),"$iag")
if(a6.x2)this.k1=H.f(this.y.l(0,"txt2DMat"),"$icu")
if(a6.y1)this.k2=H.f(this.y.l(0,"txtCubeMat"),"$iag")
if(a6.y2)this.k3=H.f(this.y.l(0,"colorMat"),"$iag")
this.sf6(H.c([],[A.ag]))
t=a6.am
if(t>0){this.k4=H.k(this.y.l(0,"bendMatCount"),"$iE")
for(h=0;h<t;++h){s=this.r1
r=this.y
q="bendValues["+h+"].mat"
g=r.j(0,q)
if(g==null)H.r(P.t("Required uniform value, "+q+", was not defined or used in shader."));(s&&C.a).h(s,H.f(g,"$iag"))}}t=a6.a
if(t!==C.c){this.r2=H.f(this.y.l(0,"emissionClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.rx=H.f(this.y.l(0,"emissionTxt"),"$ia7")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iE")
break
case C.h:this.ry=H.f(this.y.l(0,"emissionTxt"),"$iaj")
this.x1=H.f(this.y.l(0,"nullEmissionTxt"),"$iE")
break}}t=a6.b
if(t!==C.c){this.x2=H.f(this.y.l(0,"ambientClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.y1=H.f(this.y.l(0,"ambientTxt"),"$ia7")
this.am=H.f(this.y.l(0,"nullAmbientTxt"),"$iE")
break
case C.h:this.y2=H.f(this.y.l(0,"ambientTxt"),"$iaj")
this.am=H.f(this.y.l(0,"nullAmbientTxt"),"$iE")
break}}t=a6.c
if(t!==C.c){this.af=H.f(this.y.l(0,"diffuseClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.be=H.f(this.y.l(0,"diffuseTxt"),"$ia7")
this.bf=H.f(this.y.l(0,"nullDiffuseTxt"),"$iE")
break
case C.h:this.dO=H.f(this.y.l(0,"diffuseTxt"),"$iaj")
this.bf=H.f(this.y.l(0,"nullDiffuseTxt"),"$iE")
break}}t=a6.d
if(t!==C.c){this.bg=H.f(this.y.l(0,"invDiffuseClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.dP=H.f(this.y.l(0,"invDiffuseTxt"),"$ia7")
this.bh=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iE")
break
case C.h:this.dQ=H.f(this.y.l(0,"invDiffuseTxt"),"$iaj")
this.bh=H.f(this.y.l(0,"nullInvDiffuseTxt"),"$iE")
break}}t=a6.e
if(t!==C.c){this.bk=H.f(this.y.l(0,"shininess"),"$iW")
this.bi=H.f(this.y.l(0,"specularClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.dR=H.f(this.y.l(0,"specularTxt"),"$ia7")
this.bj=H.f(this.y.l(0,"nullSpecularTxt"),"$iE")
break
case C.h:this.dS=H.f(this.y.l(0,"specularTxt"),"$iaj")
this.bj=H.f(this.y.l(0,"nullSpecularTxt"),"$iE")
break}}switch(a6.f){case C.c:break
case C.i:break
case C.f:this.dT=H.f(this.y.l(0,"bumpTxt"),"$ia7")
this.bl=H.f(this.y.l(0,"nullBumpTxt"),"$iE")
break
case C.h:this.dU=H.f(this.y.l(0,"bumpTxt"),"$iaj")
this.bl=H.f(this.y.l(0,"nullBumpTxt"),"$iE")
break}if(a6.dy){this.dV=H.f(this.y.l(0,"envSampler"),"$iaj")
this.dW=H.f(this.y.l(0,"nullEnvTxt"),"$iE")
t=a6.r
if(t!==C.c){this.bm=H.f(this.y.l(0,"reflectClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.dX=H.f(this.y.l(0,"reflectTxt"),"$ia7")
this.bn=H.f(this.y.l(0,"nullReflectTxt"),"$iE")
break
case C.h:this.dY=H.f(this.y.l(0,"reflectTxt"),"$iaj")
this.bn=H.f(this.y.l(0,"nullReflectTxt"),"$iE")
break}}t=a6.x
if(t!==C.c){this.bo=H.f(this.y.l(0,"refraction"),"$iW")
this.bp=H.f(this.y.l(0,"refractClr"),"$iI")
switch(t){case C.c:break
case C.i:break
case C.f:this.dZ=H.f(this.y.l(0,"refractTxt"),"$ia7")
this.bq=H.f(this.y.l(0,"nullRefractTxt"),"$iE")
break
case C.h:this.e_=H.f(this.y.l(0,"refractTxt"),"$iaj")
this.bq=H.f(this.y.l(0,"nullRefractTxt"),"$iE")
break}}}t=a6.y
if(t!==C.c){this.br=H.f(this.y.l(0,"alpha"),"$iW")
switch(t){case C.c:break
case C.i:break
case C.f:this.e0=H.f(this.y.l(0,"alphaTxt"),"$ia7")
this.bs=H.f(this.y.l(0,"nullAlphaTxt"),"$iE")
break
case C.h:this.e1=H.f(this.y.l(0,"alphaTxt"),"$iaj")
this.bs=H.f(this.y.l(0,"nullAlphaTxt"),"$iE")
break}}this.seT(H.c([],[A.ct]))
this.seU(H.c([],[A.cv]))
this.seV(H.c([],[A.cw]))
this.seW(H.c([],[A.cx]))
this.seX(H.c([],[A.cy]))
this.seY(H.c([],[A.cz]))
if(a6.k2){t=a6.z
if(t>0){this.e2=H.k(this.y.l(0,"dirLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="dirLights["+h+"].viewDir"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="dirLights["+h+"].color"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.ce;(s&&C.a).h(s,new A.ct(h,g,f))}}t=a6.Q
if(t>0){this.e3=H.k(this.y.l(0,"pntLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="pntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="pntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="pntLights["+h+"].color"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="pntLights["+h+"].att0"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iW")
s=this.y
r="pntLights["+h+"].att1"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iW")
s=this.y
r="pntLights["+h+"].att2"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iW")
s=this.cf;(s&&C.a).h(s,new A.cv(h,g,f,e,d,c,b))}}t=a6.ch
if(t>0){this.e4=H.k(this.y.l(0,"spotLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="spotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="spotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="spotLights["+h+"].viewPnt"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="spotLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="spotLights["+h+"].cutoff"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iW")
s=this.y
r="spotLights["+h+"].coneAngle"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iW")
s=this.y
r="spotLights["+h+"].att0"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iW")
s=this.y
r="spotLights["+h+"].att1"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iW")
s=this.y
r="spotLights["+h+"].att2"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iW")
s=this.cg;(s&&C.a).h(s,new A.cw(h,g,f,e,d,c,b,a,a0,a1))}}t=a6.cx
if(t>0){this.e5=H.k(this.y.l(0,"txtDirLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="txtDirLights["+h+"].objUp"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="txtDirLights["+h+"].objRight"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="txtDirLights["+h+"].objDir"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="txtDirLights["+h+"].viewDir"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="txtDirLights["+h+"].color"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iI")
s=this.y
r="txtDirLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iE")
s=this.y
r="txtDirLightsTxt2D"+h
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$ia7")
s=this.ci;(s&&C.a).h(s,new A.cx(h,g,f,e,d,c,a,b))}}t=a6.cy
if(t>0){this.e6=H.k(this.y.l(0,"txtPntLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="txtPntLights["+h+"].point"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="txtPntLights["+h+"].viewPnt"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="txtPntLights["+h+"].invViewRotMat"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$icu")
s=this.y
r="txtPntLights["+h+"].color"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="txtPntLights["+h+"].nullTxt"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iE")
s=this.y
r="txtPntLights["+h+"].att0"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iW")
s=this.y
r="txtPntLights["+h+"].att1"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iW")
s=this.y
r="txtPntLights["+h+"].att2"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iW")
s=this.y
r="txtPntLightsTxtCube"+h
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iaj")
s=this.cj;(s&&C.a).h(s,new A.cy(h,g,f,e,d,a1,c,b,a,a0))}}t=a6.db
if(t>0){this.e7=H.k(this.y.l(0,"txtSpotLightCount"),"$iE")
for(h=0;h<t;++h){s=this.y
r="txtSpotLights["+h+"].objPnt"
g=s.j(0,r)
if(g==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(g,"$iI")
s=this.y
r="txtSpotLights["+h+"].objDir"
f=s.j(0,r)
if(f==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(f,"$iI")
s=this.y
r="txtSpotLights["+h+"].objUp"
e=s.j(0,r)
if(e==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(e,"$iI")
s=this.y
r="txtSpotLights["+h+"].objRight"
d=s.j(0,r)
if(d==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(d,"$iI")
s=this.y
r="txtSpotLights["+h+"].viewPnt"
c=s.j(0,r)
if(c==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(c,"$iI")
s=this.y
r="txtSpotLights["+h+"].nullTxt"
b=s.j(0,r)
if(b==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(b,"$iE")
s=this.y
r="txtSpotLights["+h+"].color"
a=s.j(0,r)
if(a==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a,"$iI")
s=this.y
r="txtSpotLights["+h+"].tuScalar"
a0=s.j(0,r)
if(a0==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a0,"$iW")
s=this.y
r="txtSpotLights["+h+"].tvScalar"
a1=s.j(0,r)
if(a1==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a1,"$iW")
s=this.y
r="txtSpotLights["+h+"].att0"
a2=s.j(0,r)
if(a2==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a2,"$iW")
s=this.y
r="txtSpotLights["+h+"].att1"
a3=s.j(0,r)
if(a3==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a3,"$iW")
s=this.y
r="txtSpotLights["+h+"].att2"
a4=s.j(0,r)
if(a4==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a4,"$iW")
s=this.y
r="txtSpotLightsTxt2D"+h
a5=s.j(0,r)
if(a5==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."))
H.f(a5,"$ia7")
s=this.ck;(s&&C.a).h(s,new A.cz(h,g,f,e,d,c,a5,b,a,a0,a1,a2,a3,a4))}}}},
ae:function(a,b,c){C.b.K(b.a,b.d,1)},
aa:function(a,b,c){C.b.K(b.a,b.d,1)},
sf6:function(a){this.r1=H.j(a,"$ib",[A.ag],"$ab")},
seT:function(a){this.ce=H.j(a,"$ib",[A.ct],"$ab")},
seU:function(a){this.cf=H.j(a,"$ib",[A.cv],"$ab")},
seV:function(a){this.cg=H.j(a,"$ib",[A.cw],"$ab")},
seW:function(a){this.ci=H.j(a,"$ib",[A.cx],"$ab")},
seX:function(a){this.cj=H.j(a,"$ib",[A.cy],"$ab")},
seY:function(a){this.ck=H.j(a,"$ib",[A.cz],"$ab")}}
A.fS.prototype={
ip:function(a){var u,t,s
if(!this.x1)return
u=a.a+="struct BendingValue\n"
u+="{\n"
a.a=u
u+="   mat4 mat;\n"
a.a=u
u+="};\n"
a.a=u
a.a=u+"uniform int bendMatCount;\n"
u=a.a+="uniform BendingValue bendValues["+this.am+"];\n"
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
iw:function(a){var u
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
iq:function(a){var u
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
iE:function(a){var u,t
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
iF:function(a){var u,t
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
iy:function(a){var u
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
iJ:function(a){var u
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
as:function(a,b,c){var u
if(b===C.c)return
u=a.a+="uniform vec3 "+c+"Clr;\n"
if(b===C.i)return
if(0>=c.length)return H.h(c,0)
u+="uniform int null"+(c[0].toUpperCase()+C.j.cK(c,1))+"Txt;\n"
a.a=u
if(b===C.f)a.a=u+("uniform sampler2D "+c+"Txt;\n")
else if(b===C.h)a.a=u+("uniform samplerCube "+c+"Txt;\n")},
it:function(a){var u,t
u=this.a
if(u===C.c)return
t=a.a+="// === Emission ===\n"
a.a=t+"\n"
this.as(a,u,"emission")
t=a.a+="\n"
t+="vec3 emission()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   return emissionClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullEmissionTxt > 0) return emissionClr;\n"
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
io:function(a){var u,t
u=this.b
if(u===C.c)return
t=a.a+="// === Ambient ===\n"
a.a=t+"\n"
this.as(a,u,"ambient")
t=a.a+="\n"
t+="vec3 ambient()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   return ambientClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullAmbientTxt > 0) return ambientClr;\n"
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
ir:function(a){var u,t
u=this.c
if(u===C.c)return
t=a.a+="// === Diffuse ===\n"
a.a=t+"\n"
this.as(a,u,"diffuse")
t=a.a+="vec3 diffuseColor;\n"
t+="\n"
a.a=t
t+="void setDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   diffuseColor = diffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullDiffuseTxt > 0) diffuseColor = diffuseClr;\n"
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
iu:function(a){var u,t
u=this.d
if(u===C.c)return
t=a.a+="// === Inverse Diffuse ===\n"
a.a=t+"\n"
this.as(a,u,"invDiffuse")
t=a.a+="vec3 invDiffuseColor;\n"
t+="\n"
a.a=t
t+="void setInvDiffuseColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   invDiffuseColor = invDiffuseClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullInvDiffuseTxt > 0) invDiffuseColor = invDiffuseClr;\n"
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
iC:function(a){var u,t
u=this.e
if(u===C.c)return
t=a.a+="// === Specular ===\n"
a.a=t+"\n"
this.as(a,u,"specular")
t=a.a+="uniform float shininess;\n"
t+="vec3 specularColor;\n"
a.a=t
t+="\n"
a.a=t
t+="void setSpecularColor()\n"
a.a=t
t+="{\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   specularColor = specularClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullSpecularTxt > 0) specularColor = specularClr;\n"
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
ix:function(a){var u,t
if(!this.r1)return
u=a.a+="// === Normal ===\n"
u+="\n"
a.a=u
t=this.f
switch(t){case C.c:break
case C.i:break
case C.f:u+="uniform sampler2D bumpTxt;\n"
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
switch(t){case C.c:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.i:u+="   return normalize(normalVec);\n"
a.a=u
break
case C.f:u+="   if(nullBumpTxt > 0) return normalVec;\n"
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
iA:function(a){var u,t
u=this.r
if(u===C.c)return
t=a.a+="// === Reflection ===\n"
a.a=t+"\n"
this.as(a,u,"reflect")
t=a.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   vec3 scalar = reflectClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullReflectTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
iB:function(a){var u,t
u=this.x
if(u===C.c)return
t=a.a+="// === Refraction ===\n"
a.a=t+"\n"
this.as(a,u,"refract")
t=a.a+="uniform float refraction;\n"
t+="\n"
a.a=t
t+="vec3 refract(vec3 refl)\n"
a.a=t
t+="{\n"
a.a=t
t+="   if(nullEnvTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
a.a=t
switch(u){case C.c:u=t
break
case C.i:u=t+"   vec3 scalar = refractClr;\n"
a.a=u
break
case C.f:u=t+"   if(nullRefractTxt > 0) return vec3(0.0, 0.0, 0.0);\n"
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
is:function(a){var u,t
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
iz:function(a){var u,t
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
iD:function(a){var u,t
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
iG:function(a){var u,t,s
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
iH:function(a){var u,t,s
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
iI:function(a){var u,t,s
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
iv:function(a){var u
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
i:function(a){return this.af}}
A.ct.prototype={}
A.cx.prototype={}
A.cv.prototype={}
A.cy.prototype={}
A.cw.prototype={}
A.cz.prototype={}
A.cn.prototype={
cN:function(a,b){this.c=null
this.d=null
this.e=null
this.f=null
this.r=null
this.x=null
this.y=null},
ea:function(a,b,c){var u,t,s
this.c=b
this.d=c
this.e=this.d1(b,35633)
this.f=this.d1(this.d,35632)
u=this.a
t=u.createProgram()
this.r=t
C.b.dn(u,t,this.e)
C.b.dn(u,this.r,this.f)
C.b.jh(u,this.r)
if(!H.kA(C.b.bB(u,this.r,35714))){s=C.b.ew(u,this.r)
C.b.iZ(u,this.r)
H.r(P.t("Failed to link shader: "+H.n(s)))}this.hX()
this.hZ()},
a3:function(a){C.b.cF(a.a,this.r)
this.x.j6()},
d1:function(a,b){var u,t,s
u=this.a
t=C.b.iX(u,b)
C.b.eD(u,t,a)
C.b.iU(u,t)
if(!H.kA(C.b.ey(u,t,35713))){s=C.b.ex(u,t)
C.b.j_(u,t)
throw H.i(P.t("Error compiling shader '"+H.n(t)+"': "+H.n(s)))}return t},
hX:function(){var u,t,s,r,q,p
u=H.c([],[A.cS])
t=this.a
s=H.ab(C.b.bB(t,this.r,35721))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.eq(t,this.r,r)
p=C.b.es(t,this.r,q.name)
C.a.h(u,new A.cS(t,q.name,p))}this.x=new A.eV(u)},
hZ:function(){var u,t,s,r,q,p
u=H.c([],[A.dN])
t=this.a
s=H.ab(C.b.bB(t,this.r,35718))
if(typeof s!=="number")return H.F(s)
r=0
for(;r<s;++r){q=C.b.er(t,this.r,r)
p=C.b.ez(t,this.r,q.name)
C.a.h(u,this.iY(q.type,q.size,q.name,p))}this.y=new A.i3(u)},
aE:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.E(u,t,b,c)
else return A.ju(u,t,b,a,c)},
fe:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.a7(u,t,b,c)
else return A.ju(u,t,b,a,c)},
ff:function(a,b,c){var u,t
u=this.a
t=this.r
if(a===1)return new A.aj(u,t,b,c)
else return A.ju(u,t,b,a,c)},
bc:function(a,b){return new P.e5(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.n(b)+"."))},
iY:function(a,b,c,d){switch(a){case 5120:return this.aE(b,c,d)
case 5121:return this.aE(b,c,d)
case 5122:return this.aE(b,c,d)
case 5123:return this.aE(b,c,d)
case 5124:return this.aE(b,c,d)
case 5125:return this.aE(b,c,d)
case 5126:return new A.W(this.a,this.r,c,d)
case 35664:return new A.as(this.a,this.r,c,d)
case 35665:return new A.I(this.a,this.r,c,d)
case 35666:return new A.dO(this.a,this.r,c,d)
case 35667:return new A.i0(this.a,this.r,c,d)
case 35668:return new A.i1(this.a,this.r,c,d)
case 35669:return new A.i2(this.a,this.r,c,d)
case 35674:return new A.i4(this.a,this.r,c,d)
case 35675:return new A.cu(this.a,this.r,c,d)
case 35676:return new A.ag(this.a,this.r,c,d)
case 35678:return this.fe(b,c,d)
case 35680:return this.ff(b,c,d)
case 35670:throw H.i(this.bc("BOOL",c))
case 35671:throw H.i(this.bc("BOOL_VEC2",c))
case 35672:throw H.i(this.bc("BOOL_VEC3",c))
case 35673:throw H.i(this.bc("BOOL_VEC4",c))
default:throw H.i(P.t("Unknown uniform variable type "+H.n(a)+" for "+H.n(c)+"."))}}}
A.bF.prototype={
i:function(a){return this.b}}
A.dG.prototype={
eO:function(a,b){var u,t,s,r,q
this.ea(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.lF(a))
this.z=this.x.j(0,"posAttr")
this.Q=H.f(this.y.l(0,"txtCount"),"$iE")
this.ch=H.f(this.y.l(0,"backClr"),"$idO")
this.sik(H.c([],[A.a7]))
this.sfb(H.c([],[A.ag]))
u=[A.as]
this.si2(H.c([],u))
this.si3(H.c([],u))
this.sfh(H.c([],u))
this.sfi(H.c([],u))
this.sfu(H.c([],[A.E]))
for(t=0;t<a;++t){u=this.cx
s=this.y
r="txt"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$ia7"))
u=this.cy
s=this.y
r="clrMat"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$iag"))
u=this.db
s=this.y
r="srcLoc"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$ias"))
u=this.dx
s=this.y
r="srcSize"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$ias"))
u=this.dy
s=this.y
r="destLoc"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$ias"))
u=this.fr
s=this.y
r="destSize"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$ias"))
u=this.fx
s=this.y
r="flip"+t
q=s.j(0,r)
if(q==null)H.r(P.t("Required uniform value, "+r+", was not defined or used in shader."));(u&&C.a).h(u,H.f(q,"$iE"))}},
sik:function(a){this.cx=H.j(a,"$ib",[A.a7],"$ab")},
sfb:function(a){this.cy=H.j(a,"$ib",[A.ag],"$ab")},
si2:function(a){this.db=H.j(a,"$ib",[A.as],"$ab")},
si3:function(a){this.dx=H.j(a,"$ib",[A.as],"$ab")},
sfh:function(a){this.dy=H.j(a,"$ib",[A.as],"$ab")},
sfi:function(a){this.fr=H.j(a,"$ib",[A.as],"$ab")},
sfu:function(a){this.fx=H.j(a,"$ib",[A.E],"$ab")}}
A.dN.prototype={}
A.i3.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
l:function(a,b){var u=this.j(0,b)
if(u==null)throw H.i(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
j9:function(a){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r)s+=u[r].i(0)+a
return s},
R:function(){return this.j9("\n")}}
A.E.prototype={
i:function(a){return"Uniform1i: "+H.n(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform2i: "+H.n(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform3i: "+H.n(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform4i: "+H.n(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform1iv: "+H.n(this.c)},
sil:function(a){this.e=H.j(a,"$ib",[P.y],"$ab")}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.n(this.c)}}
A.as.prototype={
i:function(a){return"Uniform2f: "+H.n(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.n(this.c)}}
A.dO.prototype={
i:function(a){return"Uniform4f: "+H.n(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform1Mat2 "+H.n(this.c)}}
A.cu.prototype={
ai:function(a){var u=new Float32Array(H.bR(H.j(a,"$ib",[P.x],"$ab")))
C.b.en(this.a,this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.n(this.c)}}
A.ag.prototype={
ai:function(a){var u=new Float32Array(H.bR(H.j(a,"$ib",[P.x],"$ab")))
C.b.cE(this.a,this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.n(this.c)}}
A.a7.prototype={
i:function(a){return"UniformSampler2D: "+H.n(this.c)}}
A.aj.prototype={
i:function(a){return"UniformSamplerCube: "+H.n(this.c)}}
F.jg.prototype={
$1:function(a){return new V.Y(Math.cos(a),Math.sin(a),0)},
$S:34}
F.j6.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o,n,m
u=b*6.283185307179586
t=this.a
s=this.b
r=J.jK(t.$1(u),s)
s=J.l1(J.jK(t.$1(u+3.141592653589793/this.c),s),r)
s=new V.L(s.a,s.b,s.c)
q=s.u(0,Math.sqrt(s.A(s)))
t=$.kh
if(t==null){t=new V.L(1,0,0)
$.kh=t
p=t}else p=t
t=q.ax(!J.T(q,p)?V.kl():p)
o=t.u(0,Math.sqrt(t.A(t)))
t=o.ax(q)
p=t.u(0,Math.sqrt(t.A(t)))
n=c*6.283185307179586
t=Math.cos(n)
s=this.d
m=Math.sin(n)
t=p.q(0,t*s)
s=o.q(0,m*s)
s=J.l0(r,new V.Y(t.a-s.a,t.b-s.b,t.c-s.c))
if(!J.T(a.f,s)){a.f=H.k(s,"$iY")
t=a.a
if(t!=null)t.a6()}},
$S:35}
F.a5.prototype={
aW:function(){if(!this.gdK()){C.a.I(this.a.a.d.b,this)
this.a.a.a6()}this.hL()
this.hM()
this.hN()},
hU:function(a){this.a=a
C.a.h(a.d.b,this)},
hV:function(a){this.b=a
C.a.h(a.d.c,this)},
hW:function(a){this.c=a
C.a.h(a.d.d,this)},
hL:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
hM:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
hN:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gdK:function(){return this.a==null||this.b==null||this.c==null},
f5:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.r
u=this.b
s=u==null?null:u.r
u=this.c
r=u==null?null:u.r
q=V.cA()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ec())return
return q.u(0,Math.sqrt(q.A(q)))},
f9:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.f
u=this.b
s=u==null?null:u.f
u=this.c
r=u==null?null:u.f
if(t==null||s==null||r==null)return
u=s.p(0,t)
u=new V.L(u.a,u.b,u.c)
q=u.u(0,Math.sqrt(u.A(u)))
u=r.p(0,t)
u=new V.L(u.a,u.b,u.c)
u=q.ax(u.u(0,Math.sqrt(u.A(u))))
return u.u(0,Math.sqrt(u.A(u)))},
ca:function(){if(this.d!=null)return!0
var u=this.f5()
if(u==null){u=this.f9()
if(u==null)return!1}this.d=u
this.a.a.a6()
return!0},
f4:function(){var u,t,s,r,q
u=this.a
t=u==null?null:u.x
u=this.b
s=u==null?null:u.x
u=this.c
r=u==null?null:u.x
q=V.cA()
if(t!=null)q=q.n(0,t)
if(s!=null)q=q.n(0,s)
if(r!=null)q=q.n(0,r)
if(q.ec())return
return q.u(0,Math.sqrt(q.A(q)))},
f8:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
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
if(Math.abs(i-0)<$.M().a){u=m.p(0,p)
u=new V.L(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.A(u)))
if(j.a-k.a<0)h=h.N(0)}else{g=(u-l.b)/i
u=m.p(0,p).q(0,g).n(0,p).p(0,s)
u=new V.L(u.a,u.b,u.c)
h=u.u(0,Math.sqrt(u.A(u)))
j=j.a
k=k.a
if((j-k)*g+k-l.a<0)h=h.N(0)}u=this.d
if(u!=null){f=u.u(0,Math.sqrt(u.A(u)))
u=f.ax(h)
u=u.u(0,Math.sqrt(u.A(u))).ax(f)
h=u.u(0,Math.sqrt(u.A(u)))}return h},
c8:function(){if(this.e!=null)return!0
var u=this.f4()
if(u==null){u=this.f8()
if(u==null)return!1}this.e=u
this.a.a.a6()
return!0},
giT:function(a){if(J.T(this.a,this.b))return!0
if(J.T(this.b,this.c))return!0
if(J.T(this.c,this.a))return!0
return!1},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
E:function(a){var u,t
if(this.gdK())return a+"disposed"
u=a+C.j.aA(J.b4(this.a.e),0)+", "+C.j.aA(J.b4(this.b.e),0)+", "+C.j.aA(J.b4(this.c.e),0)+" {"
t=this.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=this.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.E("")}}
F.fo.prototype={}
F.hy.prototype={
aY:function(a,b,c){var u,t
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
F.bs.prototype={}
F.fG.prototype={}
F.hZ.prototype={
aY:function(a,b,c){var u,t
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
F.bJ.prototype={}
F.dz.prototype={
gm:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
av:function(){var u,t
u=this.e
if(u!=null)++u.d
t=this.d.av()||!1
if(!this.a.av())t=!1
u=this.e
if(u!=null)u.aB(0)
return t},
jl:function(a,b){var u,t,s,r,q,p
P.ap("FLAG 1\n")
u=this.e
if(u!=null)++u.d
P.ap("FLAG 2\n")
u=this.a.c
t=H.c(u.slice(0),[H.w(u,0)])
P.ap("FLAG 3\n")
for(u=[F.al];t.length!==0;){s=C.a.gj8(t)
C.a.jB(t,0)
if(s!=null){r=H.c([],u)
C.a.h(r,s)
for(q=t.length-1;q>=0;--q){if(q>=t.length)return H.h(t,q)
p=t[q]
if(p!=null&&a.aY(0,s,p)){C.a.h(r,p)
C.a.I(t,p)}}if(r.length>1)b.jk(r)}}P.ap("FLAG 4\n")
this.a.B()
P.ap("FLAG 5\n")
this.c.cA()
P.ap("FLAG 6\n")
this.d.cA()
P.ap("FLAG 7\n")
this.b.jC()
P.ap("FLAG 8\n")
this.c.cB(new F.hZ())
P.ap("FLAG 9\n")
this.d.cB(new F.hy())
P.ap("FLAG 10\n")
u=this.e
if(u!=null)u.aB(0)
P.ap("FLAG 11\n")},
du:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a
u=this.a.c.length
a1.toString
t=$.aE()
s=a1.a
r=(s&t.a)!==0?1:0
if((s&$.bh().a)!==0)++r
if((s&$.bg().a)!==0)++r
if((s&$.bi().a)!==0)++r
if((s&$.bj().a)!==0)++r
if((s&$.cP().a)!==0)++r
if((s&$.cQ().a)!==0)++r
if((s&$.c0().a)!==0)++r
if((s&$.bf().a)!==0)++r
q=a1.gcI(a1)
p=q*4
t=new Array(u*q)
t.fixed$length=Array
s=P.x
o=H.c(t,[s])
t=new Array(r)
t.fixed$length=Array
n=H.c(t,[Z.cW])
for(m=0,l=0;l<r;++l){k=a1.iP(l)
j=k.gcI(k)
C.a.a0(n,l,new Z.cW(k,j,m*4,p,0))
for(i=0;i<u;++i){t=this.a.c
if(i>=t.length)return H.h(t,i)
h=t[i].ji(k)
g=m+i*q
for(f=0;f<h.length;++f){C.a.a0(o,g,h[f]);++g}}m+=j}H.j(o,"$ib",[s],"$ab")
t=a0.a
e=t.createBuffer()
C.b.ak(t,34962,e)
C.b.dt(t,34962,new Float32Array(H.bR(o)),35044)
C.b.ak(t,34962,null)
d=new Z.c5(new Z.dW(34962,e),n,a1)
d.sfz(H.c([],[Z.bI]))
this.b.b
if(this.c.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.c.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.c.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)}a=Z.km(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bI(1,c.length,a))}if(this.d.b.length!==0){s=P.y
c=H.c([],[s])
for(l=0;b=this.d.b,l<b.length;++l){b=b[l].a
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].b
b.a.a.B()
C.a.h(c,b.e)
b=this.d.b
if(l>=b.length)return H.h(b,l)
b=b[l].c
b.a.a.B()
C.a.h(c,b.e)}a=Z.km(t,34963,H.j(c,"$ib",[s],"$ab"))
C.a.h(d.b,new Z.bI(4,c.length,a))}return d},
i:function(a){var u=H.c([],[P.o])
if(this.a.c.length!==0){C.a.h(u,"Vertices:")
C.a.h(u,this.a.E("   "))}this.b.b
if(this.c.b.length!==0){C.a.h(u,"Lines:")
C.a.h(u,this.c.E("   "))}if(this.d.b.length!==0){C.a.h(u,"Faces:")
C.a.h(u,this.d.E("   "))}return C.a.D(u,"\n")},
aM:function(a){var u=this.e
if(u!=null)u.C(a)},
a6:function(){return this.aM(null)},
$imA:1}
F.hs.prototype={
iL:function(a){var u,t,s,r,q,p
H.j(a,"$ib",[F.al],"$ab")
u=H.c([],[F.a5])
t=a[0]
for(s=this.a,r=2;r<4;++r){q=a[r-1]
p=a[r]
s.a.h(0,t)
s.a.h(0,q)
s.a.h(0,p)
C.a.h(u,F.d5(t,q,p))}return u},
iM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
H.j(c,"$ib",[F.al],"$ab")
u=H.c([],[F.a5])
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
C.a.h(u,F.d5(l,k,i))
t.a.h(0,l)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.d5(l,i,h))}else{m.h(0,k)
t.a.h(0,i)
t.a.h(0,h)
C.a.h(u,F.d5(k,i,h))
t.a.h(0,k)
t.a.h(0,h)
t.a.h(0,l)
C.a.h(u,F.d5(k,h,l))}o=!o}q=!q}return u},
gk:function(a){return this.b.length},
cB:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.aW()
break}}}}},
cA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=s.giT(s)
if(t)s.aW()}},
av:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].ca())s=!1
return s},
c9:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.C)(u),++r)if(!u[r].c8())s=!1
return s},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
R:function(){return this.E("")},
sfo:function(a){this.b=H.j(a,"$ib",[F.a5],"$ab")}}
F.ht.prototype={
gk:function(a){return this.b.length},
cB:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.h(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.j(0,q)
for(o=q-1;o>=0;--o){n=r.c.j(0,o)
if(a.aY(0,p,n)){p.aW()
break}}}}},
cA:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.h(t,u)
s=t[u]
t=J.T(s.a,s.b)
if(t)s.aW()}},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.c([],[P.o])
t=this.b.length
for(s=0;s<t;++s){r=this.b
if(s>=r.length)return H.h(r,s)
C.a.h(u,r[s].E(a+(""+s+". ")))}return C.a.D(u,"\n")},
R:function(){return this.E("")},
sfC:function(a){this.b=H.j(a,"$ib",[F.bs],"$ab")}}
F.hu.prototype={
gk:function(a){return 0},
jC:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.h(t,u)
t=t[u].gk7()
t=t.gk0(t)
if(t.gk(t).jX(0,1)){t=this.b
return H.h(t,u)
t[u].aW()}}},
i:function(a){return this.R()},
E:function(a){var u,t,s
u=H.c([],[P.o])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].E(a))}return C.a.D(u,"\n")},
R:function(){return this.E("")},
sbX:function(a){this.b=H.j(a,"$ib",[F.bJ],"$ab")}}
F.al.prototype={
dF:function(a){var u,t,s,r,q,p,o
u=this.f
t=this.r
s=this.x
r=this.y
q=this.z
p=this.Q
o=this.ch
return F.ic(this.cx,s,p,u,t,r,q,a,o)},
ji:function(a){var u,t
if(a.v(0,$.aE())){u=this.f
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bh())){u=this.r
t=[P.x]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bg())){u=this.x
t=[P.x]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.bi())){u=this.y
t=[P.x]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.v(0,$.bj())){u=this.z
t=[P.x]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cP())){u=this.Q
t=[P.x]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.v(0,$.cQ())){u=this.Q
t=[P.x]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.v(0,$.c0()))return H.c([this.ch],[P.x])
else if(a.v(0,$.bf())){u=this.cx
t=[P.x]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.x])},
ca:function(){var u,t
u={}
if(this.r!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cA()
this.d.P(0,new F.ip(u))
u=u.a
this.r=u.u(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a6()
u=this.a.e
if(u!=null)u.aB(0)}return!0},
c8:function(){var u,t
u={}
if(this.x!=null)return!0
t=this.a
if(t!=null){t=t.e
if(t!=null)++t.d}u.a=V.cA()
this.d.P(0,new F.io(u))
u=u.a
this.x=u.u(0,Math.sqrt(u.A(u)))
u=this.a
if(u!=null){u.a6()
u=this.a.e
if(u!=null)u.aB(0)}return!0},
v:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
E:function(a){var u,t,s
u=H.c([],[P.o])
C.a.h(u,C.j.aA(J.b4(this.e),0))
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
s=C.a.D(u,", ")
return a+"{"+s+"}"},
R:function(){return this.E("")}}
F.ip.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.d
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.io.prototype={
$1:function(a){var u,t
H.k(a,"$ia5")
u=a==null?null:a.e
if(u!=null){t=this.a
t.a=t.a.n(0,u)}},
$S:5}
F.id.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.h(u,r)
u[r].e=s;++s}this.b=!1}},
h:function(a,b){var u,t
u=b.a
if(u!=null){if(u===this.a)return!1
throw H.i(P.t("May not add a vertex already attached to another shape to this shape."))}u=this.c
b.e=u.length
t=this.a
b.a=t
C.a.h(u,b)
t.a6()
return!0},
iN:function(a,b,c,d,e,f,g,h,i){var u=F.ic(a,b,c,d,e,f,g,h,i)
this.h(0,u)
return u},
bd:function(a,b,c,d,e,f){return this.iN(a,null,b,c,null,d,e,f,0)},
gk:function(a){return this.c.length},
av:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].ca()
return!0},
c9:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)u[s].c8()
return!0},
iS:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.T(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
this.B()
u=H.c([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
R:function(){return this.E("")},
sim:function(a){this.c=H.j(a,"$ib",[F.al],"$ab")}}
F.ie.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
P:function(a,b){H.l(b,{func:1,ret:-1,args:[F.a5]})
C.a.P(this.b,b)
C.a.P(this.c,new F.ig(this,b))
C.a.P(this.d,new F.ih(this,b))},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.d,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
R:function(){return this.E("")},
sfp:function(a){this.b=H.j(a,"$ib",[F.a5],"$ab")},
sfq:function(a){this.c=H.j(a,"$ib",[F.a5],"$ab")},
sfs:function(a){this.d=H.j(a,"$ib",[F.a5],"$ab")}}
F.ig.prototype={
$1:function(a){H.k(a,"$ia5")
if(!J.T(a.a,this.a))this.b.$1(a)},
$S:5}
F.ih.prototype={
$1:function(a){var u
H.k(a,"$ia5")
u=this.a
if(!J.T(a.a,u)&&!J.T(a.b,u))this.b.$1(a)},
$S:5}
F.ii.prototype={
gk:function(a){return this.b.length+this.c.length},
j:function(a,b){var u,t,s
u=this.b
t=u.length
if(b>=t){u=this.c
s=b-t
if(s<0||s>=u.length)return H.h(u,s)
return u[s]}else{if(b<0)return H.h(u,b)
return u[b]}},
i:function(a){return this.R()},
E:function(a){var u,t,s,r
u=H.c([],[P.o])
for(t=this.b,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.C)(t),++r)C.a.h(u,t[r].E(a))
return C.a.D(u,"\n")},
R:function(){return this.E("")},
sfD:function(a){this.b=H.j(a,"$ib",[F.bs],"$ab")},
sfE:function(a){this.c=H.j(a,"$ib",[F.bs],"$ab")}}
F.ik.prototype={}
F.ij.prototype={
aY:function(a,b,c){return J.T(b.f,c.f)}}
F.il.prototype={}
F.h8.prototype={
jk:function(a){var u,t,s,r,q,p,o,n,m
H.j(a,"$ib",[F.al],"$ab")
u=V.cA()
for(t=a.length,s=0;s<t;++s){r=a[s].r
if(r!=null)u=new V.L(u.a+r.a,u.b+r.b,u.c+r.c)}u=u.u(0,Math.sqrt(u.A(u)))
for(t=a.length,r=u==null,s=0;s<a.length;a.length===t||(0,H.C)(a),++s){q=a[s]
if(r)p=null
else{o=u.a
n=u.b
m=u.c
p=u.u(0,Math.sqrt(o*o+n*n+m*m))}if(!J.T(q.r,p)){q.r=p
o=q.a
if(o!=null){o=o.e
if(o!=null)o.C(null)}}}return}}
F.im.prototype={
gk:function(a){return 0},
i:function(a){return this.R()},
E:function(a){var u,t,s
u=H.c([],[P.o])
for(t=this.b,s=0;!1;++s){if(s>=0)return H.h(t,s)
C.a.h(u,t[s].E(a))}return C.a.D(u,"\n")},
R:function(){return this.E("")},
sbX:function(a){this.b=H.j(a,"$ib",[F.bJ],"$ab")}}
O.dj.prototype={
gm:function(){var u=this.dy
if(u==null){u=D.G()
this.dy=u}return u},
O:function(a){var u
H.k(a,"$iv")
u=this.dy
if(u!=null)u.C(a)},
aq:function(){return this.O(null)},
de:function(a){H.k(a,"$iv")
this.a=null
this.O(a)},
hR:function(){return this.de(null)},
fR:function(a,b){var u=V.ad
u=new D.bo(a,H.j(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.O(u)},
fT:function(a,b){var u=V.ad
u=new D.bp(a,H.j(b,"$id",[u],"$ad"),this,[u])
u.b=!0
this.O(u)},
cZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7
u=this.dx
t=C.e.Z(u.e.length+3,4)*4
s=C.e.Z(u.f.length+3,4)*4
r=C.e.Z(u.r.length+3,4)*4
q=C.e.Z(u.x.length+3,4)*4
p=C.e.Z(u.y.length+3,4)*4
o=C.e.Z(u.z.length+3,4)*4
n=C.e.Z(this.e.a.length+3,4)*4
u=this.f.c
m=this.r.c
l=this.x.c
k=this.y.c
j=this.z.c
i=this.Q.c
h=this.cx.c
g=this.cy.c
f=this.db.c
e="MaterialLight_"+C.e.i(u.a)+C.e.i(m.a)+C.e.i(l.a)+C.e.i(k.a)+C.e.i(j.a)+C.e.i(i.a)+C.e.i(h.a)+C.e.i(g.a)+C.e.i(f.a)
e+"_"
e+"_0"
e+"_00"
e+"_000"
e=e+"_000_"+n+"_"+t+"_"+s+"_"+r+"_"+q+"_"+p+"_"+o
d=h!==C.c||g!==C.c
c=m!==C.c||l!==C.c||k!==C.c||j!==C.c
b=j===C.c
a=!b||d
a0=l!==C.c||k!==C.c||!b||i!==C.c||d
b=i===C.c
a1=!b
a2=u===C.f||m===C.f||l===C.f||k===C.f||j===C.f||i===C.f||h===C.f||g===C.f||f===C.f
a3=u===C.h||m===C.h||l===C.h||k===C.h||j===C.h||i===C.h||h===C.h||g===C.h||f===C.h
a4=s+p+q+r+o>0
a5=n>0
a6=a0||!b||a
a7=$.aE()
if(a0){b=$.bh()
a7=new Z.b0(a7.a|b.a)}if(a1){b=$.bg()
a7=new Z.b0(a7.a|b.a)}if(a2){b=$.bi()
a7=new Z.b0(a7.a|b.a)}if(a3){b=$.bj()
a7=new Z.b0(a7.a|b.a)}if(a5){b=$.bf()
a7=new Z.b0(a7.a|b.a)}return new A.fS(u,m,l,k,j,i,h,g,f,t,s,r,q,p,o,t+s+r+q+p+o,d,d,a4,a6,!0,!1,!1,c,a4,a,a0,a1,a2,a3,a5,!1,!1,!1,n,e.charCodeAt(0)==0?e:e,a7)},
U:function(a,b){H.j(a,"$ib",[T.bP],"$ab")},
ah:function(a,b){var u,t,s,r,q
for(u=this.dx.a,u=new J.am(u,u.length,0,[H.w(u,0)]);u.w();){t=u.d
t.toString
s=$.ib
if(s==null){s=new V.L(0,0,1)
$.ib=s}t.a=s
r=t.b
if(r!=null){q=r.a
if(q!=null)t.a=q.cD(s)}}},
ei:function(a2,a3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
u=this.a
if(u==null){u=this.cZ()
t=H.k(a2.fr.j(0,u.af),"$idk")
if(t==null){t=A.lm(u,a2.a)
a2.dm(t)}this.a=t
a3.e=null
u=t}s=u.z
r=s.be
u=a3.e
if(!(u instanceof Z.c5)){a3.e=null
u=null}if(u==null||!u.d.v(0,r)){u=s.r1
if(u)a3.d.av()
q=s.r2
if(q){p=a3.d
o=p.e
if(o!=null)++o.d
p.d.c9()
p.a.c9()
p=p.e
if(p!=null)p.aB(0)}p=s.ry
if(p){o=a3.d
n=o.e
if(n!=null)++n.d
o.a.iS()
o=o.e
if(o!=null)o.aB(0)}m=a3.d.du(new Z.dX(a2.a),r)
m.ay($.aE()).e=this.a.Q.c
if(u)m.ay($.bh()).e=this.a.cx.c
if(q)m.ay($.bg()).e=this.a.ch.c
if(s.rx)m.ay($.bi()).e=this.a.cy.c
if(p)m.ay($.bj()).e=this.a.db.c
if(s.x1)m.ay($.bf()).e=this.a.dx.c
a3.e=m}u=T.bP
l=H.c([],[u])
this.a.a3(a2)
if(s.fx){q=this.a
p=a2.dx
p=p.gY(p)
q=q.dy
q.toString
q.ai(p.a8(0,!0))}if(s.fy){q=this.a
p=a2.cx
if(p==null){p=a2.db
p=p.gY(p)
o=a2.dx
o=p.q(0,o.gY(o))
a2.cx=o
p=o}q=q.fr
q.toString
q.ai(p.a8(0,!0))}q=this.a
p=a2.ch
if(p==null){p=a2.gjA()
o=a2.dx
o=p.q(0,o.gY(o))
a2.ch=o
p=o}q=q.fy
q.toString
q.ai(p.a8(0,!0))
if(s.x2){q=this.a
p=this.b
q=q.k1
q.toString
q.ai(C.o.a8(p,!0))}if(s.y1){q=this.a
p=this.c
q=q.k2
q.toString
q.ai(C.o.a8(p,!0))}if(s.y2){q=this.a
p=this.d
q=q.k3
q.toString
q.ai(C.o.a8(p,!0))}if(s.am>0){k=this.e.a.length
q=this.a.k4
C.b.K(q.a,q.d,k)
for(q=[P.x],j=0;j<k;++j){p=this.a
o=this.e.a
if(j>=o.length)return H.h(o,j)
o=o[j]
p.toString
H.k(o,"$iad")
p=p.r1
if(j>=p.length)return H.h(p,j)
p=p[j]
i=new Float32Array(H.bR(H.j(o.a8(0,!0),"$ib",q,"$ab")))
C.b.cE(p.a,p.d,!1,i)}}switch(s.a){case C.c:break
case C.i:q=this.a
p=this.f.f
q=q.r2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.f.d)
q=this.a
p=this.f.d
q.ae(q.rx,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.f.e)
q=this.a
p=this.f.e
q.aa(q.ry,q.x1,p)
p=this.a
q=this.f.f
p=p.r2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}if(s.k2){switch(s.b){case C.c:break
case C.i:q=this.a
p=this.r.f
q=q.x2
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.r.d)
q=this.a
p=this.r.d
q.ae(q.y1,q.am,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.r.e)
q=this.a
p=this.r.e
q.aa(q.y2,q.am,p)
p=this.a
q=this.r.f
p=p.x2
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.c){case C.c:break
case C.i:q=this.a
p=this.x.f
q=q.af
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.x.d)
q=this.a
p=this.x.d
q.ae(q.be,q.bf,p)
p=this.a
q=this.x.f
p=p.af
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.x.e)
q=this.a
p=this.x.e
q.aa(q.dO,q.bf,p)
p=this.a
q=this.x.f
p=p.af
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.d){case C.c:break
case C.i:q=this.a
p=this.y.f
q=q.bg
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
break
case C.f:this.U(l,this.y.d)
q=this.a
p=this.y.d
q.ae(q.dP,q.bh,p)
p=this.a
q=this.y.f
p=p.bg
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break
case C.h:this.U(l,this.y.e)
q=this.a
p=this.y.e
q.aa(q.dQ,q.bh,p)
p=this.a
q=this.y.f
p=p.bg
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
break}switch(s.e){case C.c:break
case C.i:q=this.a
p=this.z.f
q=q.bi
q.toString
o=p.a
n=p.b
p=p.c
C.b.t(q.a,q.d,o,n,p)
p=this.a
n=this.z.ch
p=p.bk
C.b.J(p.a,p.d,n)
break
case C.f:this.U(l,this.z.d)
q=this.a
p=this.z.d
q.ae(q.dR,q.bj,p)
p=this.a
q=this.z.f
p=p.bi
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bk
C.b.J(q.a,q.d,n)
break
case C.h:this.U(l,this.z.e)
q=this.a
p=this.z.e
q.aa(q.dS,q.bj,p)
p=this.a
q=this.z.f
p=p.bi
p.toString
o=q.a
n=q.b
q=q.c
C.b.t(p.a,p.d,o,n,q)
q=this.a
n=this.z.ch
q=q.bk
C.b.J(q.a,q.d,n)
break}if(s.z>0){k=this.dx.e.length
q=this.a.e2
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.e,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.ce
if(g>=o.length)return H.h(o,g)
d=o[g]
o=h.cD(e.a)
n=o.a
c=o.b
b=o.c
b=o.u(0,Math.sqrt(n*n+c*c+b*b))
c=d.b
n=b.a
o=b.b
b=b.c
C.b.t(c.a,c.d,n,o,b)
b=e.c
o=d.c
C.b.t(o.a,o.d,b.a,b.b,b.c);++g}}if(s.Q>0){k=this.dx.f.length
q=this.a.e3
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.f,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cf
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gb1(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b5(e.gb1(e))
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gal(e)
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gc3()
n=d.e
C.b.J(n.a,n.d,o)
o=e.gc4()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gc5()
n=d.r
C.b.J(n.a,n.d,o);++g}}if(s.ch>0){k=this.dx.r.length
q=this.a.e4
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.r,p=q.length,g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.cg
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gb1(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcd(e).k_()
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b5(e.gb1(e))
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gal(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gjZ()
n=d.f
C.b.J(n.a,n.d,o)
o=e.gjY()
n=d.r
C.b.J(n.a,n.d,o)
o=e.gc3()
n=d.x
C.b.J(n.a,n.d,o)
o=e.gc4()
n=d.y
C.b.J(n.a,n.d,o)
o=e.gc5()
n=d.z
C.b.J(n.a,n.d,o);++g}}if(s.cx>0){k=this.dx.x.length
q=this.a.e5
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.x,p=q.length,o=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
n=this.a.ci
if(g>=n.length)return H.h(n,g)
d=n[g]
n=e.gag()
H.j(l,"$ib",o,"$ab")
if(!C.a.aw(l,n)){n.scm(0,l.length)
C.a.h(l,n)}n=e.gcd(e)
c=d.d
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbz()
c=d.b
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=e.gbv(e)
c=d.c
C.b.t(c.a,c.d,n.a,n.b,n.c)
n=h.cD(e.gcd(e))
c=n.a
b=n.b
a=n.c
a=n.u(0,Math.sqrt(c*c+b*b+a*a))
b=d.e
c=a.a
n=a.b
a=a.c
C.b.t(b.a,b.d,c,n,a)
a=e.gal(e)
n=d.f
C.b.t(n.a,n.d,a.a,a.b,a.c)
a=e.gag()
n=a.gcq(a)
if(!n){n=d.x
C.b.K(n.a,n.d,1)}else{n=d.r
c=a.d
b=n.a
n=n.d
if(!c)C.b.K(b,n,0)
else C.b.K(b,n,a.a)
n=d.x
C.b.K(n.a,n.d,0)}++g}}if(s.cy>0){k=this.dx.y.length
q=this.a.e6
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.y,p=q.length,o=[P.x],n=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
c=this.a.cj
if(g>=c.length)return H.h(c,g)
d=c[g]
c=e.gag()
H.j(l,"$ib",n,"$ab")
if(!C.a.aw(l,c)){c.scm(0,l.length)
C.a.h(l,c)}a0=h.q(0,e.gY(e))
c=e.gY(e)
b=$.ck
if(b==null){b=new V.Y(0,0,0)
$.ck=b}b=c.b5(b)
c=d.b
C.b.t(c.a,c.d,b.a,b.b,b.c)
c=$.ck
if(c==null){c=new V.Y(0,0,0)
$.ck=c}c=a0.b5(c)
b=d.c
C.b.t(b.a,b.d,c.a,c.b,c.c)
c=a0.eb(0)
b=d.d
i=new Float32Array(H.bR(H.j(new V.dm(c.a,c.b,c.c,c.e,c.f,c.r,c.y,c.z,c.Q).a8(0,!0),"$ib",o,"$ab")))
C.b.en(b.a,b.d,!1,i)
b=e.gal(e)
c=d.e
C.b.t(c.a,c.d,b.a,b.b,b.c)
b=e.gag()
c=b.gcq(b)
if(!c){c=d.r
C.b.K(c.a,c.d,1)}else{c=d.f
a=b.gcq(b)
a1=c.a
c=c.d
if(!a)C.b.K(a1,c,0)
else C.b.K(a1,c,b.gcm(b))
c=d.r
C.b.K(c.a,c.d,0)}c=e.gc3()
b=d.x
C.b.J(b.a,b.d,c)
c=e.gc4()
b=d.y
C.b.J(b.a,b.d,c)
c=e.gc5()
b=d.z
C.b.J(b.a,b.d,c);++g}}if(s.db>0){k=this.dx.z.length
q=this.a.e7
C.b.K(q.a,q.d,k)
q=a2.db
h=q.gY(q)
for(q=this.dx.z,p=q.length,u=[u],g=0,f=0;f<q.length;q.length===p||(0,H.C)(q),++f){e=q[f]
o=this.a.ck
if(g>=o.length)return H.h(o,g)
d=o[g]
o=e.gag()
H.j(l,"$ib",u,"$ab")
if(!C.a.aw(l,o)){o.scm(0,l.length)
C.a.h(l,o)}o=e.gb1(e)
n=d.b
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gcd(e)
n=d.c
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbz()
n=d.d
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gbv(e)
n=d.e
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=h.b5(e.gb1(e))
n=d.f
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gag()
n=o.gcq(o)
if(!n){o=d.x
C.b.K(o.a,o.d,1)}else{n=d.r
c=o.d
b=n.a
n=n.d
if(!c)C.b.K(b,n,0)
else C.b.K(b,n,o.a)
o=d.x
C.b.K(o.a,o.d,0)}o=e.gal(e)
n=d.y
C.b.t(n.a,n.d,o.a,o.b,o.c)
o=e.gk5()
n=d.z
C.b.J(n.a,n.d,o)
o=e.gk6()
n=d.Q
C.b.J(n.a,n.d,o)
o=e.gc3()
n=d.ch
C.b.J(n.a,n.d,o)
o=e.gc4()
n=d.cx
C.b.J(n.a,n.d,o)
o=e.gc5()
n=d.cy
C.b.J(n.a,n.d,o);++g}}}switch(s.f){case C.c:break
case C.i:break
case C.f:this.U(l,this.Q.d)
u=this.a
q=this.Q.d
u.ae(u.dT,u.bl,q)
break
case C.h:this.U(l,this.Q.e)
u=this.a
q=this.Q.e
u.aa(u.dU,u.bl,q)
break}if(s.fr){u=this.a
q=a2.Q
if(q==null){q=a2.db
q=q.gY(q).eb(0)
a2.Q=q}u=u.id
u.toString
u.ai(q.a8(0,!0))}if(s.dy){this.U(l,this.ch)
u=this.a
q=this.ch
u.aa(u.dV,u.dW,q)
switch(s.r){case C.c:break
case C.i:u=this.a
q=this.cx.f
u=u.bm
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
break
case C.f:this.U(l,this.cx.d)
u=this.a
q=this.cx.d
u.ae(u.dX,u.bn,q)
q=this.a
u=this.cx.f
q=q.bm
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break
case C.h:this.U(l,this.cx.e)
u=this.a
q=this.cx.e
u.aa(u.dY,u.bn,q)
q=this.a
u=this.cx.f
q=q.bm
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
break}switch(s.x){case C.c:break
case C.i:u=this.a
q=this.cy.f
u=u.bp
u.toString
p=q.a
o=q.b
q=q.c
C.b.t(u.a,u.d,p,o,q)
q=this.a
o=this.cy.ch
q=q.bo
C.b.J(q.a,q.d,o)
break
case C.f:this.U(l,this.cy.d)
u=this.a
q=this.cy.d
u.ae(u.dZ,u.bq,q)
q=this.a
u=this.cy.f
q=q.bp
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bo
C.b.J(u.a,u.d,o)
break
case C.h:this.U(l,this.cy.e)
u=this.a
q=this.cy.e
u.aa(u.e_,u.bq,q)
q=this.a
u=this.cy.f
q=q.bp
q.toString
p=u.a
o=u.b
u=u.c
C.b.t(q.a,q.d,p,o,u)
u=this.a
o=this.cy.ch
u=u.bo
C.b.J(u.a,u.d,o)
break}}u=s.y
q=u!==C.c
if(q){switch(u){case C.c:break
case C.i:u=this.a
p=this.db.f
u=u.br
C.b.J(u.a,u.d,p)
break
case C.f:this.U(l,this.db.d)
u=this.a
p=this.db.d
u.ae(u.e0,u.bs,p)
p=this.a
u=this.db.f
p=p.br
C.b.J(p.a,p.d,u)
break
case C.h:this.U(l,this.db.e)
u=this.a
p=this.db.e
u.aa(u.e1,u.bs,p)
p=this.a
u=this.db.f
p=p.br
C.b.J(p.a,p.d,u)
break}u=a2.a
C.b.aX(u,3042)
C.b.iR(u,770,771)}for(j=0;j<l.length;++j)l[j].a3(a2)
u=a3.e
u.a3(a2)
u.a7(a2)
u.aN(a2)
if(q)C.b.j2(a2.a,3042)
for(j=0;j<l.length;++j)l[j].aN(a2)
u=this.a
u.toString
C.b.cF(a2.a,null)
u.x.dI()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cZ().af},
sf7:function(a){this.e=H.j(a,"$iS",[V.ad],"$aS")}}
O.fQ.prototype={}
O.dl.prototype={
aG:function(){}}
O.fR.prototype={}
O.aO.prototype={
dg:function(a){var u,t
if(!J.T(this.f,a)){u=this.f
this.f=a
t=new D.B(this.b+".color",u,a,this,[V.X])
t.b=!0
this.a.O(t)}},
aG:function(){this.eI()
this.dg(new V.X(1,1,1))},
sal:function(a,b){var u
if(this.c===C.c){this.c=C.i
this.aG()
u=this.a
u.a=null
u.O(null)}this.dg(b)}}
O.fT.prototype={
hT:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.B(this.b+".refraction",u,a,this,[P.x])
u.b=!0
this.a.O(u)}},
aG:function(){this.bE()
this.hT(1)}}
O.fU.prototype={
c_:function(a){var u=this.ch
if(!(Math.abs(u-a)<$.M().a)){this.ch=a
u=new D.B(this.b+".shininess",u,a,this,[P.x])
u.b=!0
this.a.O(u)}},
aG:function(){this.bE()
this.c_(100)}}
O.bv.prototype={}
O.dF.prototype={
gm:function(){var u=this.e
if(u==null){u=D.G()
this.e=u}return u},
O:function(a){var u
H.k(a,"$iv")
u=this.e
if(u!=null)u.C(a)},
aq:function(){return this.O(null)},
h6:function(a,b){var u,t,s,r,q,p,o
H.j(b,"$id",[O.au],"$ad")
for(u=b.length,t=this.gap(),s={func:1,ret:-1,args:[D.v]},r=[s],q=0;q<b.length;b.length===u||(0,H.C)(b),++q){p=b[q]
if(p!=null){o=p.f
if(o==null){o=new D.bn()
o.sa1(null)
o.saH(null)
o.c=null
o.d=0
p.f=o}H.l(t,s)
if(o.a==null)o.sa1(H.c([],r))
o=o.a;(o&&C.a).h(o,t)}}this.aq()},
h8:function(a,b){var u,t
H.j(b,"$id",[O.au],"$ad")
for(u=b.gT(b),t=this.gap();u.w();)u.gH(u).gm().I(0,t)
this.aq()},
ei:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
u=C.e.Z(this.c.a.length+3,4)*4
if(u!==this.d){this.d=u
this.b=null}t=this.b
if(t==null){t="TextureLayout_"+u
s=H.k(a.fr.j(0,t),"$idG")
if(s==null){s=A.lD(u,a.a)
a.dm(s)}this.b=s
t=s}if(b.e==null){t=b.d.du(new Z.dX(a.a),$.aE())
r=t.ay($.aE())
q=this.b
r.e=q.z.c
b.e=t
t=q}t.a3(a)
t=T.bP
p=H.c([],[t])
for(r=[P.x],t=[t],o=0,n=0;q=this.c.a,n<q.length;++n){m=q[n]
if(m!=null&&m.a!=null){q=m.a
H.j(p,"$ib",t,"$ab")
if(q!=null)if(!C.a.aw(p,q)){q.a=p.length
C.a.h(p,q)}q=this.b
l=m.a
q=q.cx
if(o>=q.length)return H.h(q,o)
q=q[o]
k=l==null||!l.d
j=q.a
q=q.d
if(k)C.b.K(j,q,0)
else C.b.K(j,q,l.a)
q=this.b
l=m.b
q=q.cy
if(o>=q.length)return H.h(q,o)
q=q[o]
if(l==null){l=$.fV
if(l==null){l=new V.ad(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fV=l}}i=new Float32Array(H.bR(H.j(l.a8(0,!0),"$ib",r,"$ab")))
C.b.cE(q.a,q.d,!1,i)
q=this.b
h=m.c
q.toString
if(h==null){l=$.cm
if(l==null){l=V.dw(0,0,1,1)
$.cm=l
h=l}else h=l}l=q.db
if(o>=l.length)return H.h(l,o)
l=l[o]
C.b.by(l.a,l.d,h.a,h.b)
q=q.dx
if(o>=q.length)return H.h(q,o)
q=q[o]
C.b.by(q.a,q.d,h.c,h.d)
q=this.b
h=m.d
q.toString
if(h==null){l=$.cm
if(l==null){l=V.dw(0,0,1,1)
$.cm=l
h=l}else h=l}l=q.dy
if(o>=l.length)return H.h(l,o)
l=l[o]
C.b.by(l.a,l.d,h.a,h.b)
q=q.fr
if(o>=q.length)return H.h(q,o)
q=q[o]
C.b.by(q.a,q.d,h.c,h.d)
q=this.b
l=m.e
q=q.fx
if(o>=q.length)return H.h(q,o)
q=q[o]
l=l?1:0
C.b.K(q.a,q.d,l);++o}}t=this.b.Q
C.b.K(t.a,t.d,o)
t=this.b
r=this.a
t=t.ch
t.toString
q=r.a
l=r.b
k=r.c
r=r.d
C.b.jQ(t.a,t.d,q,l,k,r)
for(t=a.a,n=0;n<p.length;++n){r=p[n]
if(!r.c&&r.d){r.c=!0
C.b.dk(t,33984+r.a)
C.b.aJ(t,3553,r.b)}}r=b.e
if(r instanceof Z.c5){r.a3(a)
r.a7(a)
r.aN(a)}else b.e=null
r=this.b
r.toString
C.b.cF(t,null)
r.x.dI()
for(n=0;n<p.length;++n){r=p[n]
if(r.c){r.c=!1
C.b.dk(t,33984+r.a)
C.b.aJ(t,3553,null)}}},
sfm:function(a){this.c=H.j(a,"$iS",[O.au],"$aS")}}
O.au.prototype={
gm:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
O:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.C(a)},
aq:function(){return this.O(null)},
sag:function(a){var u,t
u=this.a
if(u!=a){if(u!=null)u.gm().I(0,this.gap())
t=this.a
this.a=a
if(a!=null)a.gm().h(0,this.gap())
u=new D.B("texture",t,this.a,this,[T.dE])
u.b=!0
this.O(u)}},
sdD:function(a){var u,t
a=V.bt()
if(!J.T(this.b,a)){u=this.b
this.b=a
t=new D.B("colorMatrix",u,a,this,[V.ad])
t.b=!0
this.O(t)}},
scJ:function(a,b){var u,t
b=V.hi()
if(!J.T(this.c,b)){u=this.c
this.c=b
t=new D.B("source",u,b,this,[V.bN])
t.b=!0
this.O(t)}},
sdH:function(a,b){var u,t
if(b==null)b=V.hi()
if(!J.T(this.d,b)){u=this.d
this.d=b
t=new D.B("destination",u,b,this,[V.bN])
t.b=!0
this.O(t)}},
se8:function(a){var u
if(this.e!==!1){this.e=!1
u=new D.B("flip",!0,!1,this,[P.a6])
u.b=!0
this.O(u)}}}
T.bP.prototype={}
T.dE.prototype={}
T.hN.prototype={
gm:function(){var u=this.y
if(u==null){u=D.G()
this.y=u}return u}}
T.hO.prototype={}
V.eS.prototype={
aL:function(a,b){return!0},
i:function(a){return"all"},
$ib8:1}
V.b8.prototype={}
V.di.prototype={
aL:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s)if(u[s].aL(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.C)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s},
sat:function(a){this.a=H.j(a,"$ib",[V.b8],"$ab")},
$ib8:1}
V.ba.prototype={
aL:function(a,b){return!this.eH(0,b)},
i:function(a){return"!["+this.cM(0)+"]"}}
V.hr.prototype={
eM:function(a){var u,t
if(a.a.length<=0)throw H.i(P.t("May not create a SetMatcher with zero characters."))
u=new H.aM([P.y,P.a6])
for(t=new H.dg(a,a.gk(a),0,[H.at(a,"u",0)]);t.w();)u.a0(0,t.d,!0)
this.shS(u)},
aL:function(a,b){return this.a.dE(0,b)},
i:function(a){var u=this.a
return P.js(new H.df(u,[H.w(u,0)]),0,null)},
shS:function(a){this.a=H.j(a,"$iO",[P.y,P.a6],"$aO")},
$ib8:1}
V.co.prototype={
D:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new V.cs(this.a.L(0,b))
r.sat(H.c([],[V.b8]))
r.c=!1
C.a.h(this.c,r)
return r},
j7:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.C)(u),++s){r=u[s]
if(r.aL(0,a))return r}return},
i:function(a){return this.b},
sig:function(a){this.c=H.j(a,"$ib",[V.cs],"$ab")}}
V.dL.prototype={
i:function(a){var u,t
u=H.kJ(this.b,"\n","\\n")
t=H.kJ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
V.cr.prototype={
i:function(a){return this.b},
shO:function(a){var u=P.o
this.c=H.j(a,"$iO",[u,u],"$aO")}}
V.hR.prototype={
L:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new V.co(this,b)
u.sig(H.c([],[V.cs]))
u.d=null
this.a.a0(0,b,u)}return u},
b4:function(a){var u,t
u=this.b.j(0,a)
if(u==null){u=new V.cr(this,a)
t=P.o
u.shO(new H.aM([t,t]))
this.b.a0(0,a,u)}return u},
jP:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
u=H.c([],[V.dL])
t=this.c
s=[P.y]
r=H.c([],s)
for(q=a.length,p=null,o=0;!0;){if(o>=q){if(p!=null)C.a.h(u,p)
return u}n=C.j.b8(a,o)
m=t.j7(n)
if(m==null){if(p==null){C.a.h(r,n)
l=P.js(r,0,null)
throw H.i(P.t("Untokenizable string [state: "+t.b+", index "+o+']: "'+l+'"'))}C.a.h(u,p)
o=p.c+1
r=H.c([],s)
t=this.c
p=null}else{if(!m.c)C.a.h(r,n)
t=m.b
if(t.d!=null){l=P.js(r,0,null)
k=t.d
j=k.c.j(0,l)
p=new V.dL(j==null?k.b:j,l,o)}++o}}},
si4:function(a){this.a=H.j(a,"$iO",[P.o,V.co],"$aO")},
si7:function(a){this.b=H.j(a,"$iO",[P.o,V.cr],"$aO")}}
V.cs.prototype={
i:function(a){return this.b.b+": "+this.cM(0)}}
X.f_.prototype={
gm:function(){var u=this.fr
if(u==null){u=D.G()
this.fr=u}return u},
a9:function(a){var u=this.fr
if(u!=null)u.C(a)},
sad:function(a,b){var u
if(b<1)b=1
u=this.a
if(u!==b){this.y=null
this.a=b
this.c=b
u=new D.B("width",u,b,this,[P.y])
u.b=!0
this.a9(u)}},
sab:function(a,b){var u
if(b<1)b=1
u=this.b
if(u!==b){this.y=null
this.b=b
this.d=b
u=new D.B("height",u,b,this,[P.y])
u.b=!0
this.a9(u)}},
a3:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
if(this.f){u=a.a
t=u.drawingBufferWidth
s=this.r
if(typeof t!=="number")return t.q()
this.sad(0,C.e.X(t*s))
u=u.drawingBufferHeight
s=this.x
if(typeof u!=="number")return u.q()
this.sab(0,C.e.X(u*s))}if(this.y==null){u=a.a
t=this.ch
s=this.a
r=this.b
q=H.ab(C.b.bA(u,3379))
p=V.jH(s,2)
o=V.jH(r,2)
q=V.jH(q,2)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
C.b.aJ(u,3553,n)
C.b.bw(u,3553,10242,33071)
C.b.bw(u,3553,10243,33071)
C.b.bw(u,3553,10241,9729)
C.b.bw(u,3553,10240,9729)
C.b.jK(u,3553,0,6408,p,o,0,6408,5121,null)
C.b.aJ(u,3553,null)
m=T.k9(0,n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.dM()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.dM()
t=this.ch
s=t.b
this.z=s
this.c=t.r
this.d=t.x
C.b.aJ(u,3553,s)
t=u.createRenderbuffer()
this.Q=t
C.b.dq(u,36161,t)
C.b.jE(u,36161,33189,this.c,this.d)
t=u.createFramebuffer()
this.y=t
C.b.aV(u,36160,t)
C.b.jc(u,36160,36064,3553,this.z,0)
C.b.jb(u,36160,36096,36161,this.Q)
C.b.aJ(u,3553,null)
C.b.dq(u,36161,null)
C.b.aV(u,36160,null)}u=a.a
C.b.aV(u,36160,this.y)
C.b.aX(u,2884)
C.b.aX(u,2929)
C.b.dG(u,513)
t=this.dy
s=t.c
a.c=C.d.X(s*this.a)
r=t.d
a.d=C.d.X(r*this.b)
l=t.a
k=this.c
j=C.d.X(l*k)
t=t.b
l=this.d
C.b.eo(u,j,C.d.X(t*l),C.d.X(s*k),C.d.X(r*l))
C.b.dB(u,this.db)
t=this.cx
C.b.dA(u,t.a,t.b,t.c,t.d)
C.b.dz(u,16640)},
aN:function(a){C.b.aV(a.a,36160,null)}}
X.bD.prototype={$iaR:1}
X.fw.prototype={
gm:function(){var u=this.x
if(u==null){u=D.G()
this.x=u}return u},
a3:function(a){var u,t,s,r,q,p,o
u=a.a
C.b.aV(u,36160,null)
C.b.aX(u,2884)
C.b.aX(u,2929)
C.b.dG(u,513)
t=u.drawingBufferWidth
s=u.drawingBufferHeight
r=this.r
q=r.a
if(typeof t!=="number")return H.F(t)
p=C.d.X(q*t)
q=r.b
if(typeof s!=="number")return H.F(s)
o=C.d.X(q*s)
q=C.d.X(r.c*t)
a.c=q
r=C.d.X(r.d*s)
a.d=r
C.b.eo(u,p,o,q,r)
C.b.dB(u,this.c)
r=this.a
C.b.dA(u,r.a,r.b,r.c,r.d)
C.b.dz(u,16640)},
aN:function(a){}}
X.fy.prototype={
gm:function(){var u=this.b
if(u==null){u=D.G()
this.b=u}return u},
$iaR:1,
$ibD:1}
X.ds.prototype={
gm:function(){var u=this.f
if(u==null){u=D.G()
this.f=u}return u},
a9:function(a){var u
H.k(a,"$iv")
u=this.f
if(u!=null)u.C(a)},
f1:function(){return this.a9(null)},
$iaR:1,
$ibD:1}
X.cq.prototype={}
V.jf.prototype={
$1:function(a){H.k(a,"$iaY")
P.ap(C.d.em(this.a.gja(),2)+" fps")},
$S:37}
V.hv.prototype={
eN:function(a,b){var u,t,s,r,q,p,o
u=document
t=u.body
s=u.createElement("div")
s.className="scrollTop";(t&&C.q).a_(t,s)
r=u.createElement("div")
r.className="scrollPage"
C.q.a_(t,r)
q=u.createElement("div")
q.className="pageCenter"
C.l.a_(r,q)
if(a.length!==0){u.title=a
p=u.createElement("div")
p.className="pageTitle"
p.textContent=a
C.l.a_(q,p)}o=u.createElement("div")
this.a=o
C.l.a_(q,o)
this.b=null
o=W.m
W.aa(u,"scroll",H.l(new V.hx(s),{func:1,ret:-1,args:[o]}),!1,o)},
dl:function(a){var u,t,s,r,q,p,o,n,m,l,k
H.j(a,"$ib",[P.o],"$ab")
this.hY()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b.jP(C.a.jg(a)),r=s.length,q=0;q<s.length;s.length===r||(0,H.C)(s),++q){p=s[q]
switch(p.a){case"Bold":o=u.createElement("div")
o.className="boldPar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Italic":o=u.createElement("div")
o.className="italicPar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Code":o=u.createElement("div")
o.className="codePar"
o.textContent=p.b
C.l.a_(t,o)
break
case"Link":n=p.b
if(H.mp(n,"|",0)){m=n.split("|")
l=u.createElement("a")
l.className="linkPar"
if(1>=m.length)return H.h(m,1)
l.href=H.R(m[1])
l.textContent=H.R(m[0])
C.l.a_(t,l)}else{k=P.lQ(C.L,n,C.v,!1)
l=u.createElement("a")
l.className="linkPar"
l.href="#"+k
l.textContent=n
C.l.a_(t,l)}break
case"Other":o=u.createElement("div")
o.className="normalPar"
o.textContent=p.b
C.l.a_(t,o)
break}}C.l.a_(this.a,t)},
hY:function(){var u,t,s,r
if(this.b!=null)return
u=new V.hR()
t=P.o
u.si4(new H.aM([t,V.co]))
u.si7(new H.aM([t,V.cr]))
u.c=null
u.c=u.L(0,"Start")
t=u.L(0,"Start").D(0,"Bold")
s=V.af(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"Bold").D(0,"Bold")
s=new V.ba()
r=[V.b8]
s.sat(H.c([],r))
C.a.h(t.a,s)
t=V.af(new H.a2("*"))
C.a.h(s.a,t)
t=u.L(0,"Bold").D(0,"BoldEnd")
s=V.af(new H.a2("*"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"Start").D(0,"Italic")
s=V.af(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"Italic").D(0,"Italic")
s=new V.ba()
s.sat(H.c([],r))
C.a.h(t.a,s)
t=V.af(new H.a2("_"))
C.a.h(s.a,t)
t=u.L(0,"Italic").D(0,"ItalicEnd")
s=V.af(new H.a2("_"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"Start").D(0,"Code")
s=V.af(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"Code").D(0,"Code")
s=new V.ba()
s.sat(H.c([],r))
C.a.h(t.a,s)
t=V.af(new H.a2("`"))
C.a.h(s.a,t)
t=u.L(0,"Code").D(0,"CodeEnd")
s=V.af(new H.a2("`"))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"Start").D(0,"LinkHead")
s=V.af(new H.a2("["))
C.a.h(t.a,s)
t.c=!0
t=u.L(0,"LinkHead").D(0,"LinkTail")
s=V.af(new H.a2("|"))
C.a.h(t.a,s)
s=u.L(0,"LinkHead").D(0,"LinkEnd")
t=V.af(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,"LinkHead").D(0,"LinkHead")
t=new V.ba()
t.sat(H.c([],r))
C.a.h(s.a,t)
s=V.af(new H.a2("|]"))
C.a.h(t.a,s)
s=u.L(0,"LinkTail").D(0,"LinkEnd")
t=V.af(new H.a2("]"))
C.a.h(s.a,t)
s.c=!0
s=u.L(0,"LinkTail").D(0,"LinkTail")
t=new V.ba()
t.sat(H.c([],r))
C.a.h(s.a,t)
s=V.af(new H.a2("|]"))
C.a.h(t.a,s)
C.a.h(u.L(0,"Start").D(0,"Other").a,new V.eS())
s=u.L(0,"Other").D(0,"Other")
t=new V.ba()
t.sat(H.c([],r))
C.a.h(s.a,t)
s=V.af(new H.a2("*_`["))
C.a.h(t.a,s)
s=u.L(0,"BoldEnd")
s.d=s.a.b4("Bold")
s=u.L(0,"ItalicEnd")
s.d=s.a.b4("Italic")
s=u.L(0,"CodeEnd")
s.d=s.a.b4("Code")
s=u.L(0,"LinkEnd")
s.d=s.a.b4("Link")
s=u.L(0,"Other")
s.d=s.a.b4("Other")
this.b=u}}
V.hx.prototype={
$1:function(a){P.kb(C.n,new V.hw(this.a))},
$S:38}
V.hw.prototype={
$0:function(){var u,t,s
u=C.d.X(document.documentElement.scrollTop)
t=this.a.style
s=H.n(-0.01*u)+"px"
t.top=s},
$S:2};(function aliases(){var u=J.a.prototype
u.eF=u.i
u=J.dc.prototype
u.eG=u.i
u=O.dl.prototype
u.eI=u.aG
u=O.aO.prototype
u.bE=u.aG
u=V.di.prototype
u.eH=u.aL
u.cM=u.i})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installInstanceTearOff,r=hunkHelpers._instance_2u,q=hunkHelpers._instance_0u,p=hunkHelpers._instance_1u,o=hunkHelpers._instance_0i
u(P,"lZ","lJ",11)
u(P,"m_","lK",11)
u(P,"m0","lL",11)
t(P,"kz","lY",3)
var n
s(n=E.ai.prototype,"geg",0,0,null,["$1","$0"],["eh","jr"],0,0)
s(n,"gee",0,0,null,["$1","$0"],["ef","jo"],0,0)
r(n,"gjm","jn",7)
r(n,"gjp","jq",7)
s(n=E.dK.prototype,"gcP",0,0,null,["$1","$0"],["cR","cQ"],0,0)
q(n,"gjF","ej",3)
p(n=X.dS.prototype,"gh9","ha",10)
p(n,"gfU","fV",10)
p(n,"gh_","h0",4)
p(n,"ghd","he",17)
p(n,"ghb","hc",17)
p(n,"ghh","hi",4)
p(n,"ghl","hm",4)
p(n,"gh3","h4",4)
p(n,"ghj","hk",4)
p(n,"gh1","h2",4)
p(n,"ghn","ho",31)
p(n,"ghp","hq",10)
p(n,"ghF","hG",8)
p(n,"ghB","hC",8)
p(n,"ghD","hE",8)
s(D.bl.prototype,"geR",0,0,null,["$1","$0"],["ao","eS"],0,0)
s(n=D.de.prototype,"gd8",0,0,null,["$1","$0"],["d9","hf"],0,0)
p(n,"ghr","hs",32)
r(n,"gfO","fP",18)
r(n,"ghv","hw",18)
o(V.N.prototype,"gk","cp",19)
o(V.L.prototype,"gk","cp",19)
s(n=U.ce.prototype,"gaF",0,0,null,["$1","$0"],["M","a2"],0,0)
r(n,"gfM","fN",20)
r(n,"ght","hu",20)
s(n=U.dT.prototype,"gaF",0,0,null,["$1","$0"],["M","a2"],0,0)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
p(n,"gbS","bT",1)
s(n=U.dU.prototype,"gaF",0,0,null,["$1","$0"],["M","a2"],0,0)
p(n,"gbO","bP",1)
p(n,"gbQ","bR",1)
p(n,"gbS","bT",1)
p(n,"gfG","fH",1)
p(n,"gfI","fJ",1)
p(n,"gic","ie",1)
p(n,"gia","ib",1)
p(n,"gi8","i9",1)
p(U.dV.prototype,"gfK","fL",1)
s(n=M.cY.prototype,"gW",0,0,null,["$1","$0"],["V","aQ"],0,0)
r(n,"ghx","hy",21)
r(n,"ghz","hA",21)
s(M.d0.prototype,"gW",0,0,null,["$1","$0"],["V","aQ"],0,0)
s(n=M.d4.prototype,"gW",0,0,null,["$1","$0"],["V","aQ"],0,0)
r(n,"gfW","fX",7)
r(n,"gfY","fZ",7)
s(n=O.dj.prototype,"gap",0,0,null,["$1","$0"],["O","aq"],0,0)
s(n,"ghQ",0,0,null,["$1","$0"],["de","hR"],0,0)
r(n,"gfQ","fR",22)
r(n,"gfS","fT",22)
s(n=O.dF.prototype,"gap",0,0,null,["$1","$0"],["O","aq"],0,0)
r(n,"gh5","h6",23)
r(n,"gh7","h8",23)
s(O.au.prototype,"gap",0,0,null,["$1","$0"],["O","aq"],0,0)
s(X.ds.prototype,"gf0",0,0,null,["$1","$0"],["a9","f1"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.K,null)
s(P.K,[H.jp,J.a,J.am,P.ec,P.d,H.dg,P.aL,H.bG,H.dR,H.hh,H.hW,P.bm,H.c6,H.et,P.ac,H.fH,H.fI,H.fC,P.ez,P.b2,P.aw,P.dY,P.hF,P.cp,P.hG,P.aY,P.ah,P.j1,P.iW,P.cD,P.iQ,P.u,P.c7,P.j0,P.a6,P.an,P.Z,P.aI,P.hc,P.dB,P.e5,P.fv,P.b,P.O,P.J,P.ao,P.o,P.bu,W.f8,W.z,W.d6,P.iR,O.S,O.cf,E.f0,E.ai,E.hj,E.dK,Z.dW,Z.dX,Z.c5,Z.bI,Z.b0,D.f3,D.bn,D.v,X.cX,X.dd,X.fE,X.fL,X.aq,X.h1,X.hS,X.dS,D.bl,D.a_,D.dt,D.dA,D.dH,D.dI,D.dJ,V.X,V.a3,V.fk,V.dm,V.ad,V.a0,V.Y,V.aT,V.bN,V.N,V.L,U.dT,U.dU,U.dV,M.d0,M.d4,M.ar,A.cS,A.eV,A.fS,A.ct,A.cx,A.cv,A.cy,A.cw,A.cz,A.bF,A.dN,A.i3,F.a5,F.fo,F.bs,F.fG,F.bJ,F.dz,F.hs,F.ht,F.hu,F.al,F.id,F.ie,F.ii,F.ik,F.il,F.im,O.bv,O.dl,O.au,T.hO,V.eS,V.b8,V.di,V.hr,V.co,V.dL,V.cr,V.hR,X.cq,X.bD,X.fy,X.ds,V.hv])
s(J.a,[J.fB,J.db,J.dc,J.ay,J.bq,J.br,H.ci,W.e,W.eR,W.cT,W.aG,W.aH,W.P,W.e_,W.fc,W.fd,W.e1,W.d3,W.e3,W.ff,W.m,W.e6,W.aK,W.fx,W.e8,W.fK,W.fW,W.ed,W.ee,W.aQ,W.ef,W.ei,W.aS,W.em,W.eo,W.aV,W.ep,W.aW,W.eu,W.aA,W.ex,W.hQ,W.aZ,W.eA,W.hU,W.i8,W.eE,W.eG,W.eI,W.eK,W.eM,P.b7,P.ea,P.bb,P.ek,P.hg,P.ev,P.bd,P.eC,P.eW,P.dZ,P.cV,P.d7,P.du,P.dx,P.bO,P.dy,P.dD,P.dP,P.er])
s(J.dc,[J.hd,J.bQ,J.b6])
t(J.jo,J.ay)
s(J.bq,[J.da,J.d9])
t(P.fJ,P.ec)
s(P.fJ,[H.dQ,W.iy,W.ix,P.fr])
t(H.a2,H.dQ)
s(P.d,[H.fi,H.fO,H.ir])
s(P.aL,[H.fP,H.is])
s(P.bm,[H.h9,H.fD,H.i6,H.hY,H.f2,H.hp,P.dr,P.b5,P.i7,P.i5,P.dC,P.f6,P.fb])
s(H.c6,[H.jh,H.hK,H.j9,H.ja,H.jb,P.iu,P.it,P.iv,P.iw,P.j_,P.iZ,P.iD,P.iH,P.iE,P.iF,P.iG,P.iK,P.iL,P.iJ,P.iI,P.hH,P.hI,P.j3,P.iU,P.iT,P.iV,P.fN,P.fg,P.fh,W.fY,W.h_,W.ho,W.hE,W.iC,P.j5,P.fs,P.ft,P.eY,E.hk,E.hl,E.hm,E.hP,D.fm,D.fn,F.jg,F.j6,F.ip,F.io,F.ig,F.ih,V.jf,V.hx,V.hw])
s(H.hK,[H.hC,H.c3])
t(P.fM,P.ac)
t(H.aM,P.fM)
t(H.df,H.fi)
t(H.dn,H.ci)
s(H.dn,[H.cE,H.cG])
t(H.cF,H.cE)
t(H.ch,H.cF)
t(H.cH,H.cG)
t(H.dp,H.cH)
s(H.dp,[H.h2,H.h3,H.h4,H.h5,H.h6,H.dq,H.h7])
t(P.iS,P.j1)
t(P.iP,P.iW)
t(P.d_,P.hG)
t(P.fj,P.c7)
t(P.i9,P.fj)
t(P.ia,P.d_)
s(P.Z,[P.x,P.y])
s(P.b5,[P.bM,P.fz])
s(W.e,[W.H,W.fq,W.aU,W.cI,W.aX,W.aB,W.cK,W.iq,W.cB,P.eZ,P.bC])
s(W.H,[W.a4,W.bk,W.cc])
s(W.a4,[W.q,P.p])
s(W.q,[W.eT,W.eU,W.cU,W.bE,W.cb,W.fu,W.hq])
s(W.aG,[W.c9,W.f9,W.fa])
t(W.f7,W.aH)
t(W.ca,W.e_)
t(W.e2,W.e1)
t(W.d2,W.e2)
t(W.e4,W.e3)
t(W.fe,W.e4)
t(W.aJ,W.cT)
t(W.e7,W.e6)
t(W.fp,W.e7)
t(W.e9,W.e8)
t(W.bH,W.e9)
t(W.d8,W.cc)
t(W.bw,W.m)
s(W.bw,[W.aN,W.a8,W.aC])
t(W.fX,W.ed)
t(W.fZ,W.ee)
t(W.eg,W.ef)
t(W.h0,W.eg)
t(W.ej,W.ei)
t(W.cj,W.ej)
t(W.en,W.em)
t(W.he,W.en)
t(W.hn,W.eo)
t(W.cJ,W.cI)
t(W.hz,W.cJ)
t(W.eq,W.ep)
t(W.hA,W.eq)
t(W.hD,W.eu)
t(W.ey,W.ex)
t(W.hL,W.ey)
t(W.cL,W.cK)
t(W.hM,W.cL)
t(W.eB,W.eA)
t(W.hT,W.eB)
t(W.b1,W.a8)
t(W.eF,W.eE)
t(W.iz,W.eF)
t(W.e0,W.d3)
t(W.eH,W.eG)
t(W.iM,W.eH)
t(W.eJ,W.eI)
t(W.eh,W.eJ)
t(W.eL,W.eK)
t(W.iX,W.eL)
t(W.eN,W.eM)
t(W.iY,W.eN)
t(W.iA,P.hF)
t(W.jv,W.iA)
t(W.iB,P.cp)
t(P.a9,P.iR)
t(P.eb,P.ea)
t(P.fF,P.eb)
t(P.el,P.ek)
t(P.ha,P.el)
t(P.ew,P.ev)
t(P.hJ,P.ew)
t(P.eD,P.eC)
t(P.hV,P.eD)
t(P.eX,P.dZ)
t(P.hb,P.bC)
t(P.es,P.er)
t(P.hB,P.es)
s(E.f0,[Z.cW,A.cn,T.bP])
s(D.v,[D.bo,D.bp,D.B,X.hf])
s(X.hf,[X.dh,X.b9,X.cg,X.dM])
s(O.S,[D.de,U.ce,M.cY])
s(D.f3,[U.f5,U.ae])
t(U.cZ,U.ae)
s(A.cn,[A.dk,A.dG])
s(A.dN,[A.E,A.i0,A.i1,A.i2,A.i_,A.W,A.as,A.I,A.dO,A.i4,A.cu,A.ag,A.a7,A.aj])
t(F.hy,F.fo)
t(F.hZ,F.fG)
t(F.ij,F.ik)
t(F.h8,F.il)
s(O.bv,[O.dj,O.dF])
s(O.dl,[O.fQ,O.fR,O.aO])
s(O.aO,[O.fT,O.fU])
t(T.dE,T.bP)
t(T.hN,T.dE)
s(V.di,[V.ba,V.cs])
s(X.cq,[X.f_,X.fw])
u(H.dQ,H.dR)
u(H.cE,P.u)
u(H.cF,H.bG)
u(H.cG,P.u)
u(H.cH,H.bG)
u(P.ec,P.u)
u(W.e_,W.f8)
u(W.e1,P.u)
u(W.e2,W.z)
u(W.e3,P.u)
u(W.e4,W.z)
u(W.e6,P.u)
u(W.e7,W.z)
u(W.e8,P.u)
u(W.e9,W.z)
u(W.ed,P.ac)
u(W.ee,P.ac)
u(W.ef,P.u)
u(W.eg,W.z)
u(W.ei,P.u)
u(W.ej,W.z)
u(W.em,P.u)
u(W.en,W.z)
u(W.eo,P.ac)
u(W.cI,P.u)
u(W.cJ,W.z)
u(W.ep,P.u)
u(W.eq,W.z)
u(W.eu,P.ac)
u(W.ex,P.u)
u(W.ey,W.z)
u(W.cK,P.u)
u(W.cL,W.z)
u(W.eA,P.u)
u(W.eB,W.z)
u(W.eE,P.u)
u(W.eF,W.z)
u(W.eG,P.u)
u(W.eH,W.z)
u(W.eI,P.u)
u(W.eJ,W.z)
u(W.eK,P.u)
u(W.eL,W.z)
u(W.eM,P.u)
u(W.eN,W.z)
u(P.ea,P.u)
u(P.eb,W.z)
u(P.ek,P.u)
u(P.el,W.z)
u(P.ev,P.u)
u(P.ew,W.z)
u(P.eC,P.u)
u(P.eD,W.z)
u(P.dZ,P.ac)
u(P.er,P.u)
u(P.es,W.z)})();(function constants(){var u=hunkHelpers.makeConstList
C.q=W.cU.prototype
C.m=W.bE.prototype
C.l=W.cb.prototype
C.B=W.d8.prototype
C.C=J.a.prototype
C.a=J.ay.prototype
C.D=J.d9.prototype
C.e=J.da.prototype
C.o=J.db.prototype
C.d=J.bq.prototype
C.j=J.br.prototype
C.K=J.b6.prototype
C.M=W.cj.prototype
C.u=J.hd.prototype
C.b=P.bO.prototype
C.p=J.bQ.prototype
C.w=W.b1.prototype
C.x=W.cB.prototype
C.y=new P.hc()
C.z=new P.ia()
C.k=new P.iS()
C.c=new A.bF(0,"ColorSourceType.None")
C.i=new A.bF(1,"ColorSourceType.Solid")
C.f=new A.bF(2,"ColorSourceType.Texture2D")
C.h=new A.bF(3,"ColorSourceType.TextureCube")
C.n=new P.aI(0)
C.A=new P.aI(5e6)
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.G=function(getTagFallback) {
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
C.H=function() {
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
C.I=function(hooks) {
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
C.J=function(hooks) {
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
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.L=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.v=new P.i9(!1)})();(function staticFields(){$.aF=0
$.c4=null
$.jN=null
$.jw=!1
$.kD=null
$.kx=null
$.kI=null
$.j7=null
$.jc=null
$.jE=null
$.bS=null
$.cM=null
$.cN=null
$.jx=!1
$.V=C.k
$.fV=null
$.k2=null
$.ck=null
$.cm=null
$.kf=null
$.kj=null
$.kh=null
$.ki=null
$.ib=null
$.kg=null
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"my","kM",function(){return H.kC("_$dart_dartClosure")})
u($,"mz","jI",function(){return H.kC("_$dart_js")})
u($,"mC","kN",function(){return H.b_(H.hX({
toString:function(){return"$receiver$"}}))})
u($,"mD","kO",function(){return H.b_(H.hX({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mE","kP",function(){return H.b_(H.hX(null))})
u($,"mF","kQ",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mI","kT",function(){return H.b_(H.hX(void 0))})
u($,"mJ","kU",function(){return H.b_(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mH","kS",function(){return H.b_(H.kd(null))})
u($,"mG","kR",function(){return H.b_(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"mL","kW",function(){return H.b_(H.kd(void 0))})
u($,"mK","kV",function(){return H.b_(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"n_","jJ",function(){return P.lI()})
u($,"n1","cR",function(){return[]})
u($,"n0","l_",function(){return P.ly("^[\\-\\.0-9A-Z_a-z~]*$",!0,!1)})
u($,"mT","kZ",function(){return Z.av(0)})
u($,"mN","kX",function(){return Z.av(511)})
u($,"mV","aE",function(){return Z.av(1)})
u($,"mU","bh",function(){return Z.av(2)})
u($,"mP","bg",function(){return Z.av(4)})
u($,"mW","bi",function(){return Z.av(8)})
u($,"mX","bj",function(){return Z.av(16)})
u($,"mQ","cP",function(){return Z.av(32)})
u($,"mR","cQ",function(){return Z.av(64)})
u($,"mS","kY",function(){return Z.av(96)})
u($,"mY","c0",function(){return Z.av(128)})
u($,"mO","bf",function(){return Z.av(256)})
u($,"mx","kL",function(){return new V.fk(1e-9)})
u($,"mw","M",function(){return $.kL()})})()
var v={mangledGlobalNames:{y:"int",x:"double",Z:"num",o:"String",a6:"bool",J:"Null",b:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.v]},{func:1,ret:-1,args:[D.v]},{func:1,ret:P.J},{func:1,ret:-1},{func:1,ret:-1,args:[W.a8]},{func:1,ret:P.J,args:[F.a5]},{func:1,ret:-1,args:[P.o,,]},{func:1,ret:-1,args:[P.y,[P.d,E.ai]]},{func:1,ret:-1,args:[W.aC]},{func:1,ret:P.J,args:[D.v]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,ret:P.J,args:[,,]},{func:1,ret:P.o,args:[P.y]},{func:1,ret:P.J,args:[,]},{func:1,args:[,]},{func:1,ret:P.J,args:[{func:1,ret:-1,args:[D.v]}]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:-1,args:[P.y,[P.d,D.a_]]},{func:1,ret:P.x},{func:1,ret:-1,args:[P.y,[P.d,U.ae]]},{func:1,ret:-1,args:[P.y,[P.d,M.ar]]},{func:1,ret:-1,args:[P.y,[P.d,V.ad]]},{func:1,ret:-1,args:[P.y,[P.d,O.au]]},{func:1,ret:-1,args:[P.o,P.o]},{func:1,ret:P.a6,args:[W.H]},{func:1,ret:W.a4,args:[W.H]},{func:1,ret:P.J,args:[{func:1,ret:-1}]},{func:1,args:[,P.o]},{func:1,args:[W.m]},{func:1,args:[P.o]},{func:1,ret:-1,args:[W.b1]},{func:1,ret:P.a6,args:[[P.d,D.a_]]},{func:1,ret:P.J,args:[,],opt:[P.ao]},{func:1,ret:V.Y,args:[P.x]},{func:1,ret:P.J,args:[F.al,P.x,P.x]},{func:1,ret:[P.aw,,],args:[,]},{func:1,ret:P.J,args:[P.aY]},{func:1,ret:P.J,args:[W.m]},{func:1,ret:P.J,args:[P.Z]}],interceptorsByTag:null,leafTags:null};(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLQuery:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ci,ArrayBufferView:H.ci,Float32Array:H.ch,Float64Array:H.ch,Int16Array:H.h2,Int32Array:H.h3,Int8Array:H.h4,Uint16Array:H.h5,Uint32Array:H.h6,Uint8ClampedArray:H.dq,CanvasPixelArray:H.dq,Uint8Array:H.h7,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLImageElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eT,HTMLAreaElement:W.eU,Blob:W.cT,HTMLBodyElement:W.cU,HTMLCanvasElement:W.bE,CDATASection:W.bk,CharacterData:W.bk,Comment:W.bk,ProcessingInstruction:W.bk,Text:W.bk,CSSNumericValue:W.c9,CSSUnitValue:W.c9,CSSPerspective:W.f7,CSSCharsetRule:W.P,CSSConditionRule:W.P,CSSFontFaceRule:W.P,CSSGroupingRule:W.P,CSSImportRule:W.P,CSSKeyframeRule:W.P,MozCSSKeyframeRule:W.P,WebKitCSSKeyframeRule:W.P,CSSKeyframesRule:W.P,MozCSSKeyframesRule:W.P,WebKitCSSKeyframesRule:W.P,CSSMediaRule:W.P,CSSNamespaceRule:W.P,CSSPageRule:W.P,CSSRule:W.P,CSSStyleRule:W.P,CSSSupportsRule:W.P,CSSViewportRule:W.P,CSSStyleDeclaration:W.ca,MSStyleCSSProperties:W.ca,CSS2Properties:W.ca,CSSImageValue:W.aG,CSSKeywordValue:W.aG,CSSPositionValue:W.aG,CSSResourceValue:W.aG,CSSURLImageValue:W.aG,CSSStyleValue:W.aG,CSSMatrixComponent:W.aH,CSSRotation:W.aH,CSSScale:W.aH,CSSSkew:W.aH,CSSTranslation:W.aH,CSSTransformComponent:W.aH,CSSTransformValue:W.f9,CSSUnparsedValue:W.fa,DataTransferItemList:W.fc,HTMLDivElement:W.cb,XMLDocument:W.cc,Document:W.cc,DOMException:W.fd,ClientRectList:W.d2,DOMRectList:W.d2,DOMRectReadOnly:W.d3,DOMStringList:W.fe,DOMTokenList:W.ff,Element:W.a4,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,ProgressEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,ResourceProgressEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aJ,FileList:W.fp,FileWriter:W.fq,HTMLFormElement:W.fu,Gamepad:W.aK,History:W.fx,HTMLCollection:W.bH,HTMLFormControlsCollection:W.bH,HTMLOptionsCollection:W.bH,HTMLDocument:W.d8,KeyboardEvent:W.aN,Location:W.fK,MediaList:W.fW,MIDIInputMap:W.fX,MIDIOutputMap:W.fZ,MimeType:W.aQ,MimeTypeArray:W.h0,PointerEvent:W.a8,MouseEvent:W.a8,DragEvent:W.a8,DocumentFragment:W.H,ShadowRoot:W.H,Attr:W.H,DocumentType:W.H,Node:W.H,NodeList:W.cj,RadioNodeList:W.cj,Plugin:W.aS,PluginArray:W.he,RTCStatsReport:W.hn,HTMLSelectElement:W.hq,SourceBuffer:W.aU,SourceBufferList:W.hz,SpeechGrammar:W.aV,SpeechGrammarList:W.hA,SpeechRecognitionResult:W.aW,Storage:W.hD,CSSStyleSheet:W.aA,StyleSheet:W.aA,TextTrack:W.aX,TextTrackCue:W.aB,VTTCue:W.aB,TextTrackCueList:W.hL,TextTrackList:W.hM,TimeRanges:W.hQ,Touch:W.aZ,TouchEvent:W.aC,TouchList:W.hT,TrackDefaultList:W.hU,CompositionEvent:W.bw,FocusEvent:W.bw,TextEvent:W.bw,UIEvent:W.bw,URL:W.i8,VideoTrackList:W.iq,WheelEvent:W.b1,Window:W.cB,DOMWindow:W.cB,CSSRuleList:W.iz,ClientRect:W.e0,DOMRect:W.e0,GamepadList:W.iM,NamedNodeMap:W.eh,MozNamedAttrMap:W.eh,SpeechRecognitionResultList:W.iX,StyleSheetList:W.iY,SVGLength:P.b7,SVGLengthList:P.fF,SVGNumber:P.bb,SVGNumberList:P.ha,SVGPointList:P.hg,SVGStringList:P.hJ,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bd,SVGTransformList:P.hV,AudioBuffer:P.eW,AudioParamMap:P.eX,AudioTrackList:P.eZ,AudioContext:P.bC,webkitAudioContext:P.bC,BaseAudioContext:P.bC,OfflineAudioContext:P.hb,WebGLBuffer:P.cV,WebGLFramebuffer:P.d7,WebGLProgram:P.du,WebGLRenderbuffer:P.dx,WebGL2RenderingContext:P.bO,WebGLShader:P.dy,WebGLTexture:P.dD,WebGLUniformLocation:P.dP,SQLResultSetRowList:P.hB})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLQuery:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSNumericValue:true,CSSUnitValue:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLDocument:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,DocumentFragment:true,ShadowRoot:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGLBuffer:true,WebGLFramebuffer:true,WebGLProgram:true,WebGLRenderbuffer:true,WebGL2RenderingContext:true,WebGLShader:true,WebGLTexture:true,WebGLUniformLocation:true,SQLResultSetRowList:true})
H.dn.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.dp.$nativeSuperclassTag="ArrayBufferView"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cK.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.kF,[])
else S.kF([])})})()
//# sourceMappingURL=test.dart.js.map
