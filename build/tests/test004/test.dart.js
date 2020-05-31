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
a[c]=function(){a[c]=function(){H.lJ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iM"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iM(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
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
if(w[u][a])return w[u][a]}}var C={},H={iA:function iA(){},
kx:function(a,b,c,d){if(!!a.$im)return new H.eg(a,b,[c,d])
return new H.bv(a,b,[c,d])},
eE:function(){return new P.bE("No element")},
kr:function(){return new P.bE("Too many elements")},
kP:function(a,b){var u=J.ax(a)
if(typeof u!=="number")return u.P()
H.cz(a,0,u-1,b)},
cz:function(a,b,c,d){if(c-b<=32)H.kO(a,b,c,d)
else H.kN(a,b,c,d)},
kO:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aR(a);u<=c;++u){s=t.j(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.j(a,r-1),s)
if(typeof q!=="number")return q.L()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.j(a,p))
r=p}t.m(a,r,s)}},
kN:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.Z(a4+a5,2),f=g-j,e=g+j,d=J.aR(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.L()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.j(a3,a4))
d.m(a3,e,d.j(a3,a5))
t=a4+1
s=a5-1
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.j(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a0()
if(p<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.L()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.j(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a0()
if(l<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.L()
if(k>0)for(;!0;){p=a6.$2(d.j(a3,s),a0)
if(typeof p!=="number")return p.L()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.a0()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.j(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.j(a3,a2))
d.m(a3,a2,a0)
H.cz(a3,a4,t-2,a6)
H.cz(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.D(a6.$2(d.j(a3,t),b),0);)++t
for(;J.D(a6.$2(d.j(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.j(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.j(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.a0()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}H.cz(a3,t,s,a6)}else H.cz(a3,t,s,a6)},
k:function k(a){this.a=a},
m:function m(){},
ck:function ck(){},
aG:function aG(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bv:function bv(a,b,c){this.a=a
this.b=b
this.$ti=c},
eg:function eg(a,b,c){this.a=a
this.b=b
this.$ti=c},
cl:function cl(a,b){this.a=null
this.b=a
this.c=b},
eW:function eW(a,b,c){this.a=a
this.b=b
this.$ti=c},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
hz:function hz(a,b){this.a=a
this.b=b},
ca:function ca(){},
hh:function hh(){},
cL:function cL(){},
bX:function(a){var u,t=H.lL(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lt:function(a){return v.types[a]},
lA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.I(a).$iq},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a_(a)
if(typeof u!=="string")throw H.c(H.aP(a))
return u},
bB:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bC:function(a){return H.ky(a)+H.jC(H.bW(a),0,null)},
ky:function(a){var u,t,s,r,q,p,o,n=J.I(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.K||!!n.$ib6){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bX(t.length>1&&C.b.ai(t,0)===36?C.b.aG(t,1):t)},
ji:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kH:function(a){var u,t,s,r=H.b([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aP(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.au(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aP(s))}return H.ji(r)},
kG:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aP(s))
if(s<0)throw H.c(H.aP(s))
if(s>65535)return H.kH(a)}return H.ji(a)},
iD:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.au(u,10))>>>0,56320|u&1023)}throw H.c(P.a8(a,0,1114111,null,null))},
b3:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kF:function(a){var u=H.b3(a).getFullYear()+0
return u},
kD:function(a){var u=H.b3(a).getMonth()+1
return u},
kz:function(a){var u=H.b3(a).getDate()+0
return u},
kA:function(a){var u=H.b3(a).getHours()+0
return u},
kC:function(a){var u=H.b3(a).getMinutes()+0
return u},
kE:function(a){var u=H.b3(a).getSeconds()+0
return u},
kB:function(a){var u=H.b3(a).getMilliseconds()+0
return u},
N:function(a){throw H.c(H.aP(a))},
f:function(a,b){if(a==null)J.ax(a)
throw H.c(H.bd(a,b))},
bd:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a0(!0,b,s,null)
u=J.ax(a)
if(!(b<0)){if(typeof u!=="number")return H.N(u)
t=b>=u}else t=!0
if(t)return P.y(b,a,s,null,u)
return P.cv(b,s)},
ln:function(a,b,c){var u="Invalid value"
if(a>c)return new P.b4(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.b4(a,c,!0,b,"end",u)
return new P.a0(!0,b,"end",null)},
aP:function(a){return new P.a0(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.cr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jP})
u.name=""}else u.toString=H.jP
return u},
jP:function(){return J.a_(this.dartException)},
O:function(a){throw H.c(a)},
u:function(a){throw H.c(P.az(a))},
ab:function(a){var u,t,s,r,q,p
a=H.jN(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.h_(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
h0:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jq:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
je:function(a,b){return new H.fd(a,b==null?null:b.method)},
iB:function(a,b){var u=b==null,t=u?null:b.method
return new H.eL(a,t,u?null:b.receiver)},
ad:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ip(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.au(t,16)&8191)===10)switch(s){case 438:return f.$1(H.iB(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.je(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jS()
q=$.jT()
p=$.jU()
o=$.jV()
n=$.jY()
m=$.jZ()
l=$.jX()
$.jW()
k=$.k0()
j=$.k_()
i=r.V(u)
if(i!=null)return f.$1(H.iB(u,i))
else{i=q.V(u)
if(i!=null){i.method="call"
return f.$1(H.iB(u,i))}else{i=p.V(u)
if(i==null){i=o.V(u)
if(i==null){i=n.V(u)
if(i==null){i=m.V(u)
if(i==null){i=l.V(u)
if(i==null){i=o.V(u)
if(i==null){i=k.V(u)
if(i==null){i=j.V(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.je(u,i))}}return f.$1(new H.hg(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cA()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a0(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cA()
return a},
iP:function(a){var u
if(a==null)return new H.dn(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dn(a)},
lr:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
lz:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.J("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.lz)
a.$identity=u
return u},
kk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fH().constructor.prototype):Object.create(new H.bk(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a1
if(typeof t!=="number")return t.O()
$.a1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.j2(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kg(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.j2(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kg:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lt,a)
if(typeof a=="function")if(b)return a
else{u=c?H.j0:H.is
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kh:function(a,b,c,d){var u=H.is
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
j2:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.kj(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kh(t,!r,u,b)
if(t===0){r=$.a1
if(typeof r!=="number")return r.O()
$.a1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bl
return new Function(r+H.e(q==null?$.bl=H.dX("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a1
if(typeof r!=="number")return r.O()
$.a1=r+1
o+=r
r="return function("+o+"){return this."
q=$.bl
return new Function(r+H.e(q==null?$.bl=H.dX("self"):q)+"."+H.e(u)+"("+o+");}")()},
ki:function(a,b,c,d){var u=H.is,t=H.j0
switch(b?-1:a){case 0:throw H.c(H.kL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
kj:function(a,b){var u,t,s,r,q,p,o,n=$.bl
if(n==null)n=$.bl=H.dX("self")
u=$.j_
if(u==null)u=$.j_=H.dX("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.ki(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a1
if(typeof u!=="number")return u.O()
$.a1=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a1
if(typeof u!=="number")return u.O()
$.a1=u+1
return new Function(n+u+"}")()},
iM:function(a,b,c,d,e,f,g){return H.kk(a,b,c,d,!!e,!!f,g)},
is:function(a){return a.a},
j0:function(a){return a.c},
dX:function(a){var u,t,s,r=new H.bk("self","target","receiver","name"),q=J.iy(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lE:function(a,b){throw H.c(H.kf(a,H.bX(b.substring(2))))},
dL:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else u=!0
if(u)return a
H.lE(a,b)},
lp:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kf:function(a,b){return new H.dY("CastError: "+P.iw(a)+": type '"+H.e(H.lg(a))+"' is not a subtype of type '"+b+"'")},
lg:function(a){var u,t=J.I(a)
if(!!t.$ibm){u=H.lp(t)
if(u!=null)return H.lF(u)
return"Closure"}return H.bC(a)},
lJ:function(a){throw H.c(new P.e6(a))},
kL:function(a){return new H.fs(a)},
jI:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bW:function(a){if(a==null)return
return a.$ti},
mh:function(a,b,c){return H.im(a["$a"+H.e(c)],H.bW(b))},
ls:function(a,b,c,d){var u=H.im(a["$a"+H.e(c)],H.bW(b))
return u==null?null:u[d]},
iO:function(a,b,c){var u=H.im(a["$a"+H.e(b)],H.bW(a))
return u==null?null:u[c]},
Z:function(a,b){var u=H.bW(a)
return u==null?null:u[b]},
lF:function(a){return H.aO(a,null)},
aO:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bX(a[0].name)+H.jC(a,1,b)
if(typeof a=="function")return H.bX(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.l6(a,b)
if('futureOr' in a)return"FutureOr<"+H.aO("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l6:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.O(p,a0[m])
l=u[q]
if(l!=null&&l!==P.L)p+=" extends "+H.aO(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aO(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aO(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aO(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lq(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aO(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jC:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aK("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aO(p,c)}return"<"+u.h(0)+">"},
im:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
mf:function(a,b,c){return a.apply(b,H.im(J.I(b)["$a"+H.e(c)],H.bW(b)))},
mg:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lB:function(a){var u,t,s,r,q=$.jJ.$1(a),p=$.ia[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ii[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jF.$2(a,q)
if(q!=null){p=$.ia[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ii[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ik(u)
$.ia[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ii[q]=u
return u}if(s==="-"){r=H.ik(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jL(a,u)
if(s==="*")throw H.c(P.jr(q))
if(v.leafTags[q]===true){r=H.ik(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jL(a,u)},
jL:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iR(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ik:function(a){return J.iR(a,!1,null,!!a.$iq)},
lC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ik(u)
else return J.iR(u,c,null,null)},
lx:function(){if(!0===$.iQ)return
$.iQ=!0
H.ly()},
ly:function(){var u,t,s,r,q,p,o,n
$.ia=Object.create(null)
$.ii=Object.create(null)
H.lw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jM.$1(q)
if(p!=null){o=H.lC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lw:function(){var u,t,s,r,q,p,o=C.y()
o=H.bb(C.z,H.bb(C.A,H.bb(C.p,H.bb(C.p,H.bb(C.B,H.bb(C.C,H.bb(C.D(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jJ=new H.ie(r)
$.jF=new H.ig(q)
$.jM=new H.ih(p)},
bb:function(a,b){return a(b)||b},
ku:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eu("Illegal RegExp pattern ("+String(p)+")",a))},
jO:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lo:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jN:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
iT:function(a,b,c){var u=H.lH(a,b,c)
return u},
lH:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jN(b),'g'),H.lo(c))},
h_:function h_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fd:function fd(a,b){this.a=a
this.b=b},
eL:function eL(a,b,c){this.a=a
this.b=b
this.c=c},
hg:function hg(a){this.a=a},
ip:function ip(a){this.a=a},
dn:function dn(a){this.a=a
this.b=null},
bm:function bm(){},
fP:function fP(){},
fH:function fH(){},
bk:function bk(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dY:function dY(a){this.a=a},
fs:function fs(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eK:function eK(a){this.a=a},
eP:function eP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b0:function b0(a,b){this.a=a
this.$ti=b},
eQ:function eQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ie:function ie(a){this.a=a},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
eJ:function eJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iJ:function(a){return a},
ac:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bd(b,a))},
l5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.ln(a,b,c))
return b},
bA:function bA(){},
cm:function cm(){},
bz:function bz(){},
cn:function cn(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){},
f8:function f8(){},
co:function co(){},
f9:function f9(){},
bM:function bM(){},
bN:function bN(){},
bO:function bO(){},
bP:function bP(){},
lq:function(a){return J.j9(a?Object.keys(a):[],null)},
lL:function(a){return v.mangledGlobalNames[a]},
lD:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iR:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
id:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iQ==null){H.lx()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jr("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iV()]
if(r!=null)return r
r=H.lB(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.iV(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
ks:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ir(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a8(a,0,4294967295,"length",null))
return J.j9(new Array(a),b)},
j9:function(a,b){return J.iy(H.b(a,[b]))},
iy:function(a){a.fixed$length=Array
return a},
kt:function(a,b){return J.k9(a,b)},
I:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cg.prototype
return J.eH.prototype}if(typeof a=="string")return J.aD.prototype
if(a==null)return J.eI.prototype
if(typeof a=="boolean")return J.eG.prototype
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
aR:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
ic:function(a){if(a==null)return a
if(a.constructor==Array)return J.aC.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
jH:function(a){if(typeof a=="number")return J.bs.prototype
if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.b6.prototype
return a},
iN:function(a){if(typeof a=="string")return J.aD.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.b6.prototype
return a},
dK:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aE.prototype
return a}if(a instanceof P.L)return a
return J.id(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).q(a,b)},
iX:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jH(a).I(a,b)},
k6:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aR(a).j(a,b)},
k7:function(a,b,c){return J.dK(a).dq(a,b,c)},
k8:function(a,b,c,d){return J.dK(a).dD(a,b,c,d)},
k9:function(a,b){return J.jH(a).ae(a,b)},
iq:function(a,b){return J.aR(a).w(a,b)},
dM:function(a,b){return J.ic(a).t(a,b)},
ka:function(a,b){return J.ic(a).F(a,b)},
kb:function(a){return J.dK(a).gdH(a)},
dN:function(a){return J.I(a).gD(a)},
aw:function(a){return J.ic(a).gG(a)},
ax:function(a){return J.aR(a).gk(a)},
iY:function(a){return J.ic(a).eh(a)},
kc:function(a,b){return J.dK(a).ek(a,b)},
kd:function(a,b,c){return J.iN(a).aq(a,b,c)},
ke:function(a){return J.iN(a).er(a)},
a_:function(a){return J.I(a).h(a)},
a:function a(){},
eG:function eG(){},
eI:function eI(){},
ch:function ch(){},
fh:function fh(){},
b6:function b6(){},
aE:function aE(){},
aC:function aC(a){this.$ti=a},
iz:function iz(a){this.$ti=a},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bs:function bs(){},
cg:function cg(){},
eH:function eH(){},
aD:function aD(){}},P={
kT:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.lh()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bc(new P.hB(s),1)).observe(u,{childList:true})
return new P.hA(s,u,t)}else if(self.setImmediate!=null)return P.li()
return P.lj()},
kU:function(a){self.scheduleImmediate(H.bc(new P.hC(a),0))},
kV:function(a){self.setImmediate(H.bc(new P.hD(a),0))},
kW:function(a){P.iG(C.h,a)},
iG:function(a,b){var u=C.d.Z(a.a,1000)
return P.l3(u<0?0:u,b)},
jp:function(a,b){var u=C.d.Z(a.a,1000)
return P.l4(u<0?0:u,b)},
l3:function(a,b){var u=new P.du()
u.cn(a,b)
return u},
l4:function(a,b){var u=new P.du()
u.co(a,b)
return u},
md:function(a){return new P.b8(a,1)},
l0:function(){return C.T},
l1:function(a){return new P.b8(a,3)},
l9:function(a,b){return new P.i_(a,[b])},
la:function(){var u,t
for(;u=$.ba,u!=null;){$.bV=null
t=u.b
$.ba=t
if(t==null)$.bU=null
u.a.$0()}},
lf:function(){$.iK=!0
try{P.la()}finally{$.bV=null
$.iK=!1
if($.ba!=null)$.iW().$1(P.jG())}},
ld:function(a){var u=new P.cP(a)
if($.ba==null){$.ba=$.bU=u
if(!$.iK)$.iW().$1(P.jG())}else $.bU=$.bU.b=u},
le:function(a){var u,t,s=$.ba
if(s==null){P.ld(a)
$.bV=$.bU
return}u=new P.cP(a)
t=$.bV
if(t==null){u.b=s
$.ba=$.bV=u}else{u.b=t.b
$.bV=t.b=u
if(u.b==null)$.bU=u}},
jo:function(a,b){var u=$.Y
if(u===C.e)return P.iG(a,b)
return P.iG(a,u.dI(b))},
kR:function(a,b){var u=$.Y
if(u===C.e)return P.jp(a,b)
return P.jp(a,u.bv(b,P.cG))},
jD:function(a,b,c,d,e){var u={}
u.a=d
P.le(new P.i7(u,e))},
lb:function(a,b,c,d){var u,t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
lc:function(a,b,c,d,e){var u,t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
du:function du(){this.c=0},
i3:function i3(a,b){this.a=a
this.b=b},
i2:function i2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b8:function b8(a,b){this.a=a
this.b=b},
b9:function b9(a){var _=this
_.a=a
_.d=_.c=_.b=null},
i_:function i_(a,b){this.a=a
this.$ti=b},
cP:function cP(a){this.a=a
this.b=null},
cC:function cC(){},
fK:function fK(){},
cG:function cG(){},
i6:function i6(){},
i7:function i7(a,b){this.a=a
this.b=b},
hQ:function hQ(){},
hR:function hR(a,b){this.a=a
this.b=b},
hS:function hS(a,b,c){this.a=a
this.b=b
this.c=c},
ja:function(a,b){return new H.a4([a,b])},
kv:function(a){return H.lr(a,new H.a4([null,null]))},
bt:function(a){return new P.hN([a])},
iI:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
l2:function(a,b){var u=new P.d4(a,b)
u.c=a.e
return u},
kq:function(a,b,c){var u,t
if(P.iL(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.R.push(a)
try{P.l8(a,u)}finally{if(0>=$.R.length)return H.f($.R,-1)
$.R.pop()}t=P.jm(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
ix:function(a,b,c){var u,t
if(P.iL(a))return b+"..."+c
u=new P.aK(b)
$.R.push(a)
try{t=u
t.a=P.jm(t.a,a,", ")}finally{if(0>=$.R.length)return H.f($.R,-1)
$.R.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iL:function(a){var u,t
for(u=$.R.length,t=0;t<u;++t)if(a===$.R[t])return!0
return!1},
l8:function(a,b){var u,t,s,r,q,p,o,n=a.gG(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.e(n.gv(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gv(n);++l
if(!n.p()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gv(n);++l
for(;n.p();r=q,q=p){p=n.gv(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jb:function(a,b){var u,t,s=P.bt(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.n(0,a[t])
return s},
jc:function(a){var u,t={}
if(P.iL(a))return"{...}"
u=new P.aK("")
try{$.R.push(a)
u.a+="{"
t.a=!0
J.ka(a,new P.eV(t,u))
u.a+="}"}finally{if(0>=$.R.length)return H.f($.R,-1)
$.R.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hN:function hN(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hO:function hO(a){this.a=a
this.c=this.b=null},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eD:function eD(){},
eR:function eR(){},
p:function p(){},
eU:function eU(){},
eV:function eV(a,b){this.a=a
this.b=b},
K:function K(){},
hU:function hU(){},
d5:function d5(){},
e_:function e_(){},
e1:function e1(){},
ei:function ei(){},
eB:function eB(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
eA:function eA(a){this.a=a},
hk:function hk(){},
hl:function hl(){},
i4:function i4(a){this.b=0
this.c=a},
ko:function(a){if(a instanceof H.bm)return a.h(0)
return"Instance of '"+H.e(H.bC(a))+"'"},
kw:function(a,b,c){var u,t,s=J.ks(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iC:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aw(a);u.p();)t.push(u.gv(u))
if(b)return t
return J.iy(t)},
iF:function(a){var u,t=a.length,s=P.iE(0,null,t)
if(typeof s!=="number")return s.a0()
u=s<t
return H.kG(u?C.a.c6(a,0,s):a)},
kI:function(a){return new H.eJ(a,H.ku(a,!1,!0,!1,!1,!1))},
jm:function(a,b,c){var u=J.aw(b)
if(!u.p())return a
if(c.length===0){do a+=H.e(u.gv(u))
while(u.p())}else{a+=H.e(u.gv(u))
for(;u.p();)a=a+c+H.e(u.gv(u))}return a},
jB:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.k5().b
u=u.test(b)}else u=!1
if(u)return b
t=C.F.dM(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iD(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kl:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
km:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c6:function(a){if(a>=10)return""+a
return"0"+a},
j5:function(a){return new P.aB(1000*a)},
iw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ko(a)},
ir:function(a,b,c){return new P.a0(!0,a,b,c)},
cv:function(a,b){return new P.b4(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.b4(b,c,!0,a,d,"Invalid value")},
iE:function(a,b,c){var u
if(typeof a!=="number")return H.N(a)
if(0<=a){if(typeof c!=="number")return H.N(c)
u=a>c}else u=!0
if(u)throw H.c(P.a8(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.N(c)
u=b>c}else u=!0
if(u)throw H.c(P.a8(b,a,c,"end",null))
return b}return c},
jj:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.c(P.a8(a,0,null,b,null))},
y:function(a,b,c,d,e){var u=e==null?J.ax(b):e
return new P.eC(u,!0,a,c,"Index out of range")},
r:function(a){return new P.hi(a)},
jr:function(a){return new P.hf(a)},
jl:function(a){return new P.bE(a)},
az:function(a){return new P.e0(a)},
J:function(a){return new P.cX(a)},
iS:function(a){H.lD(a)},
aQ:function aQ(){},
aA:function aA(a,b){this.a=a
this.b=b},
B:function B(){},
aB:function aB(a){this.a=a},
ee:function ee(){},
ef:function ef(){},
aY:function aY(){},
cr:function cr(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b4:function b4(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eC:function eC(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hi:function hi(a){this.a=a},
hf:function hf(a){this.a=a},
bE:function bE(a){this.a=a},
e0:function e0(a){this.a=a},
fg:function fg(){},
cA:function cA(){},
e6:function e6(a){this.a=a},
cX:function cX(a){this.a=a},
eu:function eu(a,b){this.a=a
this.b=b},
ew:function ew(){},
A:function A(){},
j:function j(){},
eF:function eF(){},
b1:function b1(){},
bu:function bu(){},
aI:function aI(){},
V:function V(){},
L:function L(){},
o:function o(){},
aK:function aK(a){this.a=a},
au:function(a){var u,t,s,r,q
if(a==null)return
u=P.ja(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
ll:function(a){var u={}
a.F(0,new P.i8(u))
return u},
i8:function i8(a){this.a=a},
eq:function eq(a,b){this.a=a
this.b=b},
er:function er(){},
es:function es(){},
hP:function hP(){},
X:function X(){},
aF:function aF(){},
eN:function eN(){},
aJ:function aJ(){},
fe:function fe(){},
fk:function fk(){},
bD:function bD(){},
fL:function fL(){},
i:function i(){},
aL:function aL(){},
fZ:function fZ(){},
d2:function d2(){},
d3:function d3(){},
dd:function dd(){},
de:function de(){},
dq:function dq(){},
dr:function dr(){},
dx:function dx(){},
dy:function dy(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(a){this.a=a},
dV:function dV(){},
aS:function aS(){},
ff:function ff(){},
cQ:function cQ(){},
fG:function fG(){},
dl:function dl(){},
dm:function dm(){}},W={
iZ:function(){var u=document.createElement("a")
return u},
j1:function(){var u=document.createElement("canvas")
return u},
kn:function(a,b,c){var u=document.body,t=(u&&C.l).U(u,a,b,c)
t.toString
u=new H.bJ(new W.M(t),new W.eh(),[W.t])
return u.ga8(u)},
iu:function(a){return"wheel"},
bo:function(a){var u,t,s,r="element tag unavailable"
try{u=J.dK(a)
t=u.gbU(a)
if(typeof t==="string")r=u.gbU(a)}catch(s){H.ad(s)}return r},
hM:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jz:function(a,b,c,d){var u=W.hM(W.hM(W.hM(W.hM(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
H:function(a,b,c,d){var u=W.jE(new W.hK(c),W.h)
if(u!=null&&!0)J.k8(a,b,u,!1)
return new W.hJ(a,b,u,!1)},
jy:function(a){var u=W.iZ(),t=window.location
u=new W.bL(new W.hT(u,t))
u.cj(a)
return u},
kZ:function(a,b,c,d){return!0},
l_:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
jA:function(){var u=P.o,t=P.jb(C.i,u),s=H.b(["TEMPLATE"],[u])
t=new W.i0(t,P.bt(u),P.bt(u),P.bt(u),null)
t.cm(null,new H.eW(C.i,new W.i1(),[H.Z(C.i,0),u]),s,null)
return t},
jE:function(a,b){var u=$.Y
if(u===C.e)return a
return u.bv(a,b)},
l:function l(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
c0:function c0(){},
aT:function aT(){},
aV:function aV(){},
ay:function ay(){},
e2:function e2(){},
v:function v(){},
bn:function bn(){},
e3:function e3(){},
T:function T(){},
a2:function a2(){},
e4:function e4(){},
e5:function e5(){},
e8:function e8(){},
W:function W(){},
eb:function eb(){},
c7:function c7(){},
c8:function c8(){},
ec:function ec(){},
ed:function ed(){},
hF:function hF(a,b){this.a=a
this.b=b},
F:function F(){},
eh:function eh(){},
h:function h(){},
d:function d(){},
ai:function ai(){},
eo:function eo(){},
ep:function ep(){},
et:function et(){},
aj:function aj(){},
ez:function ez(){},
br:function br(){},
b_:function b_(){},
eS:function eS(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(a){this.a=a},
f0:function f0(){},
f1:function f1(a){this.a=a},
al:function al(){},
f2:function f2(){},
a5:function a5(){},
M:function M(a){this.a=a},
t:function t(){},
cp:function cp(){},
an:function an(){},
fj:function fj(){},
fq:function fq(){},
fr:function fr(a){this.a=a},
ft:function ft(){},
ap:function ap(){},
fE:function fE(){},
aq:function aq(){},
fF:function fF(){},
ar:function ar(){},
fI:function fI(){},
fJ:function fJ(a){this.a=a},
a9:function a9(){},
cD:function cD(){},
fM:function fM(){},
fN:function fN(){},
bF:function bF(){},
as:function as(){},
aa:function aa(){},
fQ:function fQ(){},
fR:function fR(){},
fT:function fT(){},
at:function at(){},
b5:function b5(){},
fX:function fX(){},
fY:function fY(){},
aM:function aM(){},
hj:function hj(){},
hx:function hx(){},
aN:function aN(){},
bK:function bK(){},
hG:function hG(){},
cS:function cS(){},
hL:function hL(){},
da:function da(){},
hX:function hX(){},
hY:function hY(){},
hE:function hE(){},
hH:function hH(a){this.a=a},
hJ:function hJ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hK:function hK(a){this.a=a},
bL:function bL(a){this.a=a},
x:function x(){},
cq:function cq(a){this.a=a},
fb:function fb(a){this.a=a},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
di:function di(){},
hV:function hV(){},
hW:function hW(){},
i0:function i0(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
i1:function i1(){},
hZ:function hZ(){},
cb:function cb(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
am:function am(){},
hT:function hT(a,b){this.a=a
this.b=b},
dz:function dz(a){this.a=a},
i5:function i5(a){this.a=a},
cR:function cR(){},
cT:function cT(){},
cU:function cU(){},
cV:function cV(){},
cW:function cW(){},
cY:function cY(){},
cZ:function cZ(){},
d0:function d0(){},
d1:function d1(){},
d6:function d6(){},
d7:function d7(){},
d8:function d8(){},
d9:function d9(){},
db:function db(){},
dc:function dc(){},
df:function df(){},
dg:function dg(){},
dh:function dh(){},
bQ:function bQ(){},
bR:function bR(){},
dj:function dj(){},
dk:function dk(){},
dp:function dp(){},
ds:function ds(){},
dt:function dt(){},
bS:function bS(){},
bT:function bT(){},
dv:function dv(){},
dw:function dw(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){}},K={
z:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.J("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.ai(a,0)
t=C.b.ai(b,0)
if(u>t){s=t
t=u
u=s}return new K.fl(u,t)},
n:function(a){var u=new K.fu()
u.ce(a)
return u},
ae:function ae(){},
cc:function cc(){},
aH:function aH(){},
Q:function Q(){this.a=null},
fl:function fl(a,b){this.a=a
this.b=b},
fu:function fu(){this.a=null}},L={
fV:function(){var u=new L.fU(),t=P.o
u.a=new H.a4([t,L.cB])
u.b=new H.a4([t,L.cI])
u.c=P.bt(t)
return u},
cB:function cB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cH:function cH(a,b,c){this.a=a
this.b=b
this.c=c},
cI:function cI(a){this.b=a
this.c=null},
fU:function fU(){var _=this
_.d=_.c=_.b=_.a=null},
cJ:function cJ(a){this.b=a
this.a=this.c=null}},O={
j3:function(a){var u=new O.aW([a])
u.b8(a)
return u},
aW:function aW(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bx:function bx(){this.b=this.a=null},
e9:function e9(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){}},E={
ah:function(a,b){var u,t,s,r,q=new E.ag()
q.a=""
q.b=!0
u=O.j3(E.ag)
q.y=u
u.aE(q.ge3(),q.ge6())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
u=q.c
if(u!=b){q.d=q.c=b
q.e=null
if(u!=null)u.gu().J(0,q.gbL())
t=q.c
if(t!=null)t.gu().n(0,q.gbL())
s=new D.E("shape",u,q.c)
s.b=!0
q.a5(s)}if(!J.D(q.r,a)){r=q.r
if(r!=null)r.gu().J(0,q.gbJ())
a.gu().n(0,q.gbJ())
q.r=a
s=new D.E("mover",r,a)
s.b=!0
q.a5(s)}return q},
kX:function(){if(J.iq(window.navigator.vendor,"Google"))return C.w
if(J.iq(window.navigator.userAgent,"Firefox"))return C.m
var u=window.navigator.appVersion
if(J.aR(u).w(u,"Trident")||C.b.w(u,"Edge"))return C.n
if(J.iq(window.navigator.appName,"Microsoft"))return C.n
return C.x},
kY:function(){var u=window.navigator.appVersion
if(J.aR(u).w(u,"Win"))return C.P
if(C.b.w(u,"Mac"))return C.Q
if(C.b.w(u,"Linux"))return C.R
return C.S},
kK:function(a,b){var u=new E.fm(a)
u.cd(a,b)
return u},
kQ:function(a,b,c,d,e){var u,t,s=J.I(a)
if(!!s.$iaV)return E.jn(a,!0,!0,!0,!1)
u=W.j1()
t=u.style
t.width="100%"
t.height="100%"
s.gbw(a).n(0,u)
return E.jn(u,!0,!0,!0,!1)},
jn:function(a,b,c,d,e){var u,t,s,r,q,p="mousemove",o=new E.cF(),n=C.G.c2(a,"webgl2",P.kv(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(n==null)H.O(P.J("Failed to get the rendering context for WebGL."))
o.b=a
o.c=n
o.e=E.kK(n,a)
n.getParameter(3379)
n.getParameter(34076)
u=new X.cM(a)
t=new X.eM()
t.d=P.bt(P.A)
u.b=t
t=new X.f3(u)
t.f=0
t.r=V.cu()
t.x=V.cu()
t.ch=t.Q=1
u.c=t
t=new X.eT(u)
t.r=0
t.x=V.cu()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.fW(u)
t.f=V.cu()
t.r=V.cu()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.cC,P.L]])
t=$.j8
if(t==null){s=E.kX()
E.kY()
t=$.j8=new E.hI(s)}u.Q=t.a===C.m?0.16666666666666666:0.005555555555555556
r=u.z
q=document
r.push(W.H(q,"contextmenu",u.gcN(),!1))
u.z.push(W.H(a,"focus",u.gcT(),!1))
u.z.push(W.H(a,"blur",u.gcH(),!1))
u.z.push(W.H(q,"keyup",u.gcX(),!1))
u.z.push(W.H(q,"keydown",u.gcV(),!1))
u.z.push(W.H(a,"mousedown",u.gd_(),!1))
u.z.push(W.H(a,"mouseup",u.gd3(),!1))
u.z.push(W.H(a,p,u.gd1(),!1))
r=u.z
W.iu(a)
W.iu(a)
r.push(W.H(a,W.iu(a),u.gd5(),!1))
u.z.push(W.H(q,p,u.gcP(),!1))
u.z.push(W.H(q,"mouseup",u.gcR(),!1))
u.z.push(W.H(q,"pointerlockchange",u.gd7(),!1))
u.z.push(W.H(a,"touchstart",u.gdh(),!1))
u.z.push(W.H(a,"touchend",u.gdd(),!1))
u.z.push(W.H(a,"touchmove",u.gdf(),!1))
o.ch=!0
o.cx=!1
o.cy=new P.aA(Date.now(),!1)
o.db=0
o.bm()
return o},
dW:function dW(){},
ag:function ag(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aU:function aU(a){this.b=a},
b2:function b2(a){this.b=a},
hI:function hI(a){this.a=a},
fm:function fm(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fn:function fn(a){this.a=a},
fo:function fo(a){this.a=a},
fp:function fp(a){this.a=a},
cF:function cF(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
fS:function fS(a){this.a=a}},Z={
kS:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iJ(c)),35044)
a.bindBuffer(b,null)
return new Z.cO(b,u)},
U:function(a){return new Z.cN(a)},
cO:function cO(a,b){this.a=a
this.b=b},
c1:function c1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hy:function hy(a){this.a=a},
c2:function c2(a,b){this.a=a
this.b=null
this.c=b},
cd:function cd(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a){this.a=a}},D={
a3:function(){var u=new D.bp()
u.d=0
return u},
dZ:function dZ(){},
bp:function bp(){var _=this
_.d=_.c=_.b=_.a=null},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
P:function P(){this.b=null},
ce:function ce(){this.b=null},
cf:function cf(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={c3:function c3(a,b){this.a=a
this.b=b},ci:function ci(a,b){this.a=a
this.b=b},eM:function eM(){this.d=this.b=this.a=null},eT:function eT(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},by:function by(a,b,c){this.a=a
this.b=b
this.c=c},f3:function f3(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fW:function fW(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cM:function cM(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kp:function(a){var u=new X.ev(),t=V.lk(1)
u.a=new V.aX(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jk
if(t==null){t=V.kJ(0,0,1,1)
$.jk=t}u.r=t
return u},
it:function it(){},
ev:function ev(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cs:function cs(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(){}},V={
lk:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
iU:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.c3(a-b,u)
return(a<0?a+u:a)+b},
w:function(a,b,c){if(a==null)return C.b.a6("null",c)
return C.b.a6(C.c.bX(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
ib:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=0,t=0;t<4;++t){s=V.w(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.f(o,q)
r=C.b.a6(o[q],u)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=r}return o},
eX:function(){var u=$.jd
return u==null?$.jd=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cu:function(){var u=$.jg
return u==null?$.jg=new V.a7(0,0):u},
kJ:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cw(a,b,c,d)},
hm:function(){var u=$.jw
return u==null?$.jw=new V.G(0,0,0):u},
aX:function aX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ej:function ej(a){this.a=a},
bw:function bw(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
ao:function ao(a,b,c){this.a=a
this.b=b
this.c=c},
cw:function cw(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
lG:function(a){P.kR(C.I,new V.il(a))},
kM:function(a){var u=new V.fz()
u.cg(a,!0)
return u},
c4:function c4(){},
il:function il(a){this.a=a},
e7:function e7(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ex:function ex(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ey:function ey(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fi:function fi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fz:function fz(){this.b=this.a=null},
fB:function fB(a){this.a=a},
fA:function fA(a){this.a=a},
fC:function fC(a){this.a=a}},U={
j4:function(a){var u=new U.c5()
u.a=a
return u},
c5:function c5(){this.b=this.a=null},
bq:function bq(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
cx:function cx(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c9:function c9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iH:function(a,b,c,d,e){var u=new A.h3(a,c,e)
u.f=d
P.kw(d,0,P.A)
return u},
c_:function c_(a,b,c){this.a=a
this.b=b
this.c=c},
dR:function dR(a){this.a=a},
ea:function ea(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cy:function cy(){},
cK:function cK(){},
ha:function ha(a){this.a=a},
h2:function h2(a,b,c){this.a=a
this.c=b
this.d=c},
h5:function h5(a,b,c){this.a=a
this.c=b
this.d=c},
h7:function h7(a,b,c){this.a=a
this.c=b
this.d=c},
h9:function h9(a,b,c){this.a=a
this.c=b
this.d=c},
h3:function h3(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
bG:function bG(a,b,c){this.a=a
this.c=b
this.d=c},
h4:function h4(a,b,c){this.a=a
this.c=b
this.d=c},
h6:function h6(a,b,c){this.a=a
this.c=b
this.d=c},
h8:function h8(a,b,c){this.a=a
this.c=b
this.d=c},
hb:function hb(a,b,c){this.a=a
this.c=b
this.d=c},
hc:function hc(a,b,c){this.a=a
this.c=b
this.d=c},
bH:function bH(a,b,c){this.a=a
this.c=b
this.d=c},
hd:function hd(a,b,c){this.a=a
this.c=b
this.d=c},
he:function he(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lK:function(a,b){return F.lm(15,30,b,a,new F.io())},
lm:function(a,b,c,d,e){var u,t=F.lI(a,b,new F.i9(e,d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.aV()
t.a.aV()
u=t.e
if(u!=null)u.ap(0)
t.e2(new F.hs(),new F.fc())
return t},
lI:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.fv()
t=new F.hn(u)
t.b=!1
s=[F.bI]
t.c=H.b([],s)
u.a=t
t=new F.fy()
t.b=H.b([],[F.ct])
u.b=t
t=new F.fx(u)
t.b=H.b([],[F.cj])
u.c=t
t=new F.fw(u)
t.b=H.b([],[F.aZ])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bs(new V.aX(s,0,0,1),new V.a7(p,1))
c.$3(o,p,0)
r.push(o.by(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bs(new V.aX(j,i,h,1),new V.a7(p,m))
c.$3(o,p,n)
r.push(o.by(null))}}u.d.dE(a+1,b+1,r)
return u},
em:function(a,b,c){var u=new F.aZ(),t=a.a
if(t==null)H.O(P.J("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.O(P.J("May not create a face with vertices attached to different shapes."))
u.du(a)
u.dv(b)
u.dw(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
jx:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bI(),r=new F.hv()
r.b=H.b([],[F.ct])
s.b=r
r=new F.hr()
u=[F.cj]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ho()
u=[F.aZ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.k1()
s.e=0
r=$.av()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bg().a)!==0?e:t
s.x=(u&$.bf().a)!==0?b:t
s.y=(u&$.bh().a)!==0?f:t
s.z=(u&$.bi().a)!==0?g:t
s.Q=(u&$.k2().a)!==0?c:t
s.ch=(u&$.bj().a)!==0?i:0
s.cx=(u&$.be().a)!==0?a:t
return s},
io:function io(){},
i9:function i9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
en:function en(){},
fD:function fD(){},
cj:function cj(){},
eO:function eO(){},
h1:function h1(){},
ct:function ct(){},
fv:function fv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a
this.b=null},
fx:function fx(a){this.a=a
this.b=null},
fy:function fy(){this.b=null},
bI:function bI(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(a){this.a=a},
hn:function hn(a){this.a=a
this.c=this.b=null},
ho:function ho(){this.d=this.c=this.b=null},
hp:function hp(a,b){this.a=a
this.b=b},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(){this.c=this.b=null},
ht:function ht(){},
hs:function hs(){},
hu:function hu(){},
fc:function fc(){},
hv:function hv(){this.b=null}},R={
jK:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=V.kM("Test 004"),a2=W.j1()
a2.className="pageLargeCanvas"
a2.id=a0
a1.a.appendChild(a2)
u=[P.o]
a1.bt(H.b(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],u))
a1.bt(H.b(["\xab[Back to Tests|../]"],u))
t=new U.cx()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sc_(0)
t.sbO(0,0)
t.sbT(0)
t.sbB(0.1)
t.sbz(0.21)
t.sbA(0.32)
t.sbB(0.51)
t.sbz(0.71)
t.sbA(0.92)
s=new U.bq()
s.b8(U.a6)
s.aE(s.gcF(),s.gda())
s.e=null
s.f=V.eX()
s.r=0
s.n(0,U.j4(V.ak(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
s.n(0,t)
r=F.lK(2,0.2)
q=E.ah(s,r)
p=E.ah(s,r)
p.y.n(0,q)
o=E.ah(s,r)
o.y.n(0,p)
n=E.ah(s,r)
n.y.n(0,o)
m=E.ah(s,r)
m.y.n(0,n)
l=E.ah(s,r)
l.y.n(0,m)
k=E.ah(s,r)
k.y.n(0,l)
j=E.ah(s,r)
j.y.n(0,k)
i=E.ah(s,r)
i.y.n(0,j)
h=new O.e9()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.C().a)){h.b=3
u=new D.E("start",1,3)
u.b=!0
h.aP(u)}u=h.c
if(!(Math.abs(u-6)<$.C().a)){h.c=6
u=new D.E("stop",u,6)
u.b=!0
h.aP(u)}if(!h.d){h.d=!0
h.a=null
u=new D.E("grey",!1,!0)
u.b=!0
h.aP(u)}g=new M.c9()
g.a=!0
u=O.j3(E.ag)
g.e=u
u.aE(g.gcJ(),g.gcL())
g.y=g.x=g.r=g.f=null
f=X.kp(null)
e=new X.cs()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sbG(null)
u=e.c
if(!(Math.abs(u-1.0471975511965976)<$.C().a)){e.c=1.0471975511965976
u=new D.E("fov",u,1.0471975511965976)
u.b=!0
e.aa(u)}u=e.d
if(!(Math.abs(u-0.1)<$.C().a)){e.d=0.1
u=new D.E("near",u,0.1)
u.b=!0
e.aa(u)}u=e.e
if(!(Math.abs(u-2000)<$.C().a)){e.e=2000
u=new D.E("far",u,2000)
u.b=!0
e.aa(u)}u=g.b
if(u!==e){if(u!=null)u.gu().J(0,g.gY())
d=g.b
g.b=e
e.gu().n(0,g.gY())
u=new D.E("camera",d,g.b)
u.b=!0
g.a1(u)}u=g.c
if(u!==f){if(u!=null)u.gu().J(0,g.gY())
d=g.c
g.c=f
f.gu().n(0,g.gY())
u=new D.E("target",d,g.c)
u.b=!0
g.a1(u)}g.sbV(null)
g.sbV(h)
g.e.n(0,i)
g.b.sbG(U.j4(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=document.getElementById(a0)
if(c==null)H.O(P.J("Failed to find an element with the identifier, testCanvas."))
b=E.kQ(c,!0,!0,!0,!1)
u=b.d
if(u!==g){if(u!=null)u.gu().J(0,b.gb9())
b.d=g
g.gu().n(0,b.gb9())
b.ba()}u=b.Q
if(u==null)u=b.Q=D.a3()
a=u.b
u=a==null?u.b=H.b([],[{func:1,ret:-1,args:[D.P]}]):a
u.push(new R.ij(a1,h))
V.lG(b)},
ij:function ij(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iA.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gD:function(a){return H.bB(a)},
h:function(a){return"Instance of '"+H.e(H.bC(a))+"'"}}
J.eG.prototype={
h:function(a){return String(a)},
gD:function(a){return a?519018:218159},
$iaQ:1}
J.eI.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gD:function(a){return 0}}
J.ch.prototype={
gD:function(a){return 0},
h:function(a){return String(a)}}
J.fh.prototype={}
J.b6.prototype={}
J.aE.prototype={
h:function(a){var u=a[$.jR()]
if(u==null)return this.ca(a)
return"JavaScript function for "+H.e(J.a_(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aC.prototype={
b0:function(a,b){if(!!a.fixed$length)H.O(P.r("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cv(b,null))
return a.splice(b,1)[0]},
J:function(a,b){var u
if(!!a.fixed$length)H.O(P.r("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
T:function(a,b){var u,t
if(!!a.fixed$length)H.O(P.r("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.az(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
e_:function(a){return this.l(a,"")},
dW:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.az(a))}throw H.c(H.eE())},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
c6:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.a8(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.a8(c,b,u,"end",null))
if(b===c)return H.b([],[H.Z(a,0)])
return H.b(a.slice(b,c),[H.Z(a,0)])},
gdV:function(a){if(a.length>0)return a[0]
throw H.c(H.eE())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.eE())},
bu:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.az(a))}return!1},
w:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.ix(a,"[","]")},
gG:function(a){return new J.S(a,a.length)},
gD:function(a){return H.bB(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.O(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ir(b,u,null))
if(b<0)throw H.c(P.a8(b,0,null,u,null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.bd(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.O(P.r("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bd(a,b))
a[b]=c},
$im:1,
$ij:1}
J.iz.prototype={}
J.S.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bs.prototype={
ae:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aP(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gay(b)
if(this.gay(a)===u)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
bD:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.r(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
bX:function(a,b){var u
if(b>20)throw H.c(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gD:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
c3:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cc:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bn(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bn(a,b)},
bn:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.r("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
au:function(a,b){var u
if(a>0)u=this.dC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dC:function(a,b){return b>31?0:a>>>b},
$iB:1,
$iV:1}
J.cg.prototype={$iA:1}
J.eH.prototype={}
J.aD.prototype={
aW:function(a,b){if(b<0)throw H.c(H.bd(a,b))
if(b>=a.length)H.O(H.bd(a,b))
return a.charCodeAt(b)},
ai:function(a,b){if(b>=a.length)throw H.c(H.bd(a,b))
return a.charCodeAt(b)},
O:function(a,b){if(typeof b!=="string")throw H.c(P.ir(b,null,null))
return a+b},
aF:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cv(b,null))
if(b>c)throw H.c(P.cv(b,null))
if(c>a.length)throw H.c(P.cv(c,null))
return a.substring(b,c)},
aG:function(a,b){return this.aq(a,b,null)},
er:function(a){return a.toLowerCase()},
I:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.E)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a6:function(a,b){var u=b-a.length
if(u<=0)return a
return this.I(" ",u)+a},
dK:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.a8(c,0,u,null,null))
return H.jO(a,b,c)},
w:function(a,b){return this.dK(a,b,0)},
ae:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aP(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gD:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$io:1}
H.k.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.aW(this.a,b)},
$am:function(){return[P.A]},
$ap:function(){return[P.A]},
$aj:function(){return[P.A]}}
H.m.prototype={}
H.ck.prototype={
gG:function(a){return new H.aG(this,this.gk(this))},
aC:function(a,b){return this.c9(0,b)}}
H.aG.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.aR(s),q=r.gk(s)
if(t.b!=q)throw H.c(P.az(s))
u=t.c
if(typeof q!=="number")return H.N(q)
if(u>=q){t.d=null
return!1}t.d=r.t(s,u);++t.c
return!0}}
H.bv.prototype={
gG:function(a){return new H.cl(J.aw(this.a),this.b)},
gk:function(a){return J.ax(this.a)},
t:function(a,b){return this.b.$1(J.dM(this.a,b))},
$aj:function(a,b){return[b]}}
H.eg.prototype={$im:1,
$am:function(a,b){return[b]}}
H.cl.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gv(t))
return!0}u.a=null
return!1},
gv:function(a){return this.a}}
H.eW.prototype={
gk:function(a){return J.ax(this.a)},
t:function(a,b){return this.b.$1(J.dM(this.a,b))},
$am:function(a,b){return[b]},
$ack:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bJ.prototype={
gG:function(a){return new H.hz(J.aw(this.a),this.b)}}
H.hz.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gv(u)))return!0
return!1},
gv:function(a){var u=this.a
return u.gv(u)}}
H.ca.prototype={}
H.hh.prototype={
m:function(a,b,c){throw H.c(P.r("Cannot modify an unmodifiable list"))}}
H.cL.prototype={}
H.h_.prototype={
V:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fd.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eL.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hg.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.ip.prototype={
$1:function(a){if(!!J.I(a).$iaY)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dn.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bm.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.bX(t==null?"unknown":t)+"'"},
gew:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fP.prototype={}
H.fH.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bX(u)+"'"}}
H.bk.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bk))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gD:function(a){var u,t=this.c
if(t==null)u=H.bB(this.a)
else u=typeof t!=="object"?J.dN(t):H.bB(t)
return(u^H.bB(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bC(u))+"'")}}
H.dY.prototype={
h:function(a){return this.a}}
H.fs.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.a4.prototype={
gk:function(a){return this.a},
gN:function(a){return new H.b0(this,[H.Z(this,0)])},
gev:function(a){var u=this,t=H.Z(u,0)
return H.kx(new H.b0(u,[t]),new H.eK(u),t,H.Z(u,1))},
dL:function(a,b){var u=this.b
if(u==null)return!1
return this.cv(u,b)},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.as(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.as(r,b)
s=t==null?null:t.b
return s}else return q.dY(b)},
dY:function(a){var u,t,s=this.d
if(s==null)return
u=this.bl(s,J.dN(a)&0x3ffffff)
t=this.bE(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.be(u==null?o.b=o.aN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.be(t==null?o.c=o.aN():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aN()
r=J.dN(b)&0x3ffffff
q=o.bl(s,r)
if(q==null)o.aR(s,r,[o.aO(b,c)])
else{p=o.bE(q,b)
if(p>=0)q[p].b=c
else q.push(o.aO(b,c))}}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.az(u))
t=t.c}},
be:function(a,b,c){var u=this.as(a,b)
if(u==null)this.aR(a,b,this.aO(b,c))
else u.b=c},
cE:function(){this.r=this.r+1&67108863},
aO:function(a,b){var u,t=this,s=new H.eP(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.cE()
return s},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.jc(this)},
as:function(a,b){return a[b]},
bl:function(a,b){return a[b]},
aR:function(a,b,c){a[b]=c},
cB:function(a,b){delete a[b]},
cv:function(a,b){return this.as(a,b)!=null},
aN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aR(t,u,t)
this.cB(t,u)
return t}}
H.eK.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.Z(u,1),args:[H.Z(u,0)]}}}
H.eP.prototype={}
H.b0.prototype={
gk:function(a){return this.a.a},
gG:function(a){var u=this.a,t=new H.eQ(u,u.r)
t.c=u.e
return t}}
H.eQ.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.az(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ie.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.ig.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ih.prototype={
$1:function(a){return this.a(a)}}
H.eJ.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bA.prototype={}
H.cm.prototype={
gk:function(a){return a.length},
$iq:1,
$aq:function(){}}
H.bz.prototype={
j:function(a,b){H.ac(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.B]},
$ap:function(){return[P.B]},
$ij:1,
$aj:function(){return[P.B]}}
H.cn.prototype={
m:function(a,b,c){H.ac(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.A]},
$ap:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]}}
H.f4.prototype={
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f5.prototype={
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f6.prototype={
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f7.prototype={
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f8.prototype={
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.co.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.f9.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ac(b,a,a.length)
return a[b]}}
H.bM.prototype={}
H.bN.prototype={}
H.bO.prototype={}
H.bP.prototype={}
P.hB.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.hA.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hC.prototype={
$0:function(){this.a.$0()}}
P.hD.prototype={
$0:function(){this.a.$0()}}
P.du.prototype={
cn:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bc(new P.i3(this,b),0),a)
else throw H.c(P.r("`setTimeout()` not found."))},
co:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bc(new P.i2(this,a,Date.now(),b),0),a)
else throw H.c(P.r("Periodic timer."))},
$icG:1}
P.i3.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.i2.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cc(u,q)}s.c=r
t.d.$1(s)}}
P.b8.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.b9.prototype={
gv:function(a){var u=this.c
if(u==null)return this.b
return u.gv(u)},
p:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.p())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.b8){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aw(u)
if(!!r.$ib9){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.i_.prototype={
gG:function(a){return new P.b9(this.a())}}
P.cP.prototype={}
P.cC.prototype={}
P.fK.prototype={}
P.cG.prototype={}
P.i6.prototype={}
P.i7.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cr():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.hQ.prototype={
em:function(a){var u,t,s,r=null
try{if(C.e===$.Y){a.$0()
return}P.lb(r,r,this,a)}catch(s){u=H.ad(s)
t=H.iP(s)
P.jD(r,r,this,u,t)}},
en:function(a,b){var u,t,s,r=null
try{if(C.e===$.Y){a.$1(b)
return}P.lc(r,r,this,a,b)}catch(s){u=H.ad(s)
t=H.iP(s)
P.jD(r,r,this,u,t)}},
eo:function(a,b){return this.en(a,b,null)},
dI:function(a){return new P.hR(this,a)},
bv:function(a,b){return new P.hS(this,a,b)}}
P.hR.prototype={
$0:function(){return this.a.em(this.b)}}
P.hS.prototype={
$1:function(a){return this.a.eo(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hN.prototype={
gG:function(a){var u=new P.d4(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
w:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cu(b)
return t}},
cu:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.bk(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bf(u==null?s.b=P.iI():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bf(t==null?s.c=P.iI():t,b)}else return s.cq(0,b)},
cq:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iI()
u=s.bh(b)
t=r[u]
if(t==null)r[u]=[s.aI(b)]
else{if(s.aL(t,b)>=0)return!1
t.push(s.aI(b))}return!0},
J:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dk(this.c,b)
else return this.dj(0,b)},
dj:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bk(r,b)
t=s.aL(u,b)
if(t<0)return!1
s.bp(u.splice(t,1)[0])
return!0},
bf:function(a,b){if(a[b]!=null)return!1
a[b]=this.aI(b)
return!0},
dk:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bp(u)
delete a[b]
return!0},
bg:function(){this.r=1073741823&this.r+1},
aI:function(a){var u,t=this,s=new P.hO(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bg()
return s},
bp:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bg()},
bh:function(a){return J.dN(a)&1073741823},
bk:function(a,b){return a[this.bh(b)]},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.hO.prototype={}
P.d4.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.az(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eD.prototype={}
P.eR.prototype={$im:1,$ij:1}
P.p.prototype={
gG:function(a){return new H.aG(a,this.gk(a))},
t:function(a,b){return this.j(a,b)},
eq:function(a,b){var u,t,s=this,r=H.b([],[H.ls(s,a,"p",0)])
C.a.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.N(t)
if(!(u<t))break
t=s.j(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
ep:function(a){return this.eq(a,!0)},
h:function(a){return P.ix(a,"[","]")}}
P.eU.prototype={}
P.eV.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:7}
P.K.prototype={
F:function(a,b){var u,t
for(u=J.aw(this.gN(a));u.p();){t=u.gv(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.ax(this.gN(a))},
h:function(a){return P.jc(a)}}
P.hU.prototype={
T:function(a,b){var u
for(u=J.aw(b);u.p();)this.n(0,u.gv(u))},
h:function(a){return P.ix(this,"{","}")},
t:function(a,b){var u,t,s
P.jj(b,"index")
for(u=P.l2(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.c(P.y(b,this,"index",null,t))},
$im:1,
$ij:1}
P.d5.prototype={}
P.e_.prototype={}
P.e1.prototype={}
P.ei.prototype={}
P.eB.prototype={
h:function(a){return this.a}}
P.eA.prototype={
cw:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aK("")
if(r>b)q.a+=C.b.aq(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kd(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hk.prototype={}
P.hl.prototype={
dM:function(a){var u,t,s,r=P.iE(0,null,a.length)
if(typeof r!=="number")return r.P()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.i4(t)
if(s.cD(a,0,r)!==r)s.bq(C.b.aW(a,r-1),0)
return new Uint8Array(t.subarray(0,H.l5(0,s.b,t.length)))}}
P.i4.prototype={
bq:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
cD:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aW(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.ai(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bq(r,C.b.ai(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aQ.prototype={}
P.aA.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aA&&this.a===b.a&&!0},
ae:function(a,b){return C.d.ae(this.a,b.a)},
gD:function(a){var u=this.a
return(u^C.d.au(u,30))&1073741823},
h:function(a){var u=this,t=P.kl(H.kF(u)),s=P.c6(H.kD(u)),r=P.c6(H.kz(u)),q=P.c6(H.kA(u)),p=P.c6(H.kC(u)),o=P.c6(H.kE(u)),n=P.km(H.kB(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.B.prototype={}
P.aB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a},
gD:function(a){return C.d.gD(this.a)},
ae:function(a,b){return C.d.ae(this.a,b.a)},
h:function(a){var u,t,s,r=new P.ef(),q=this.a
if(q<0)return"-"+new P.aB(0-q).h(0)
u=r.$1(C.d.Z(q,6e7)%60)
t=r.$1(C.d.Z(q,1e6)%60)
s=new P.ee().$1(q%1e6)
return""+C.d.Z(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ee.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ef.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aY.prototype={}
P.cr.prototype={
h:function(a){return"Throw of null."}}
P.a0.prototype={
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaK()+o+u
if(!q.a)return t
s=q.gaJ()
r=P.iw(q.b)
return t+s+": "+r}}
P.b4.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eC.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t=this.b
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.hi.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hf.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bE.prototype={
h:function(a){return"Bad state: "+this.a}}
P.e0.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.iw(u)+"."}}
P.fg.prototype={
h:function(a){return"Out of Memory"},
$iaY:1}
P.cA.prototype={
h:function(a){return"Stack Overflow"},
$iaY:1}
P.e6.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cX.prototype={
h:function(a){return"Exception: "+this.a}}
P.eu.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aq(s,0,75)+"...":s
return t+"\n"+r}}
P.ew.prototype={}
P.A.prototype={}
P.j.prototype={
aC:function(a,b){return new H.bJ(this,b,[H.iO(this,"j",0)])},
gk:function(a){var u,t=this.gG(this)
for(u=0;t.p();)++u
return u},
ga8:function(a){var u,t=this.gG(this)
if(!t.p())throw H.c(H.eE())
u=t.gv(t)
if(t.p())throw H.c(H.kr())
return u},
t:function(a,b){var u,t,s
P.jj(b,"index")
for(u=this.gG(this),t=0;u.p();){s=u.gv(u)
if(b===t)return s;++t}throw H.c(P.y(b,this,"index",null,t))},
h:function(a){return P.kq(this,"(",")")}}
P.eF.prototype={}
P.b1.prototype={$im:1,$ij:1}
P.bu.prototype={}
P.aI.prototype={
gD:function(a){return P.L.prototype.gD.call(this,this)},
h:function(a){return"null"}}
P.V.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
q:function(a,b){return this===b},
gD:function(a){return H.bB(this)},
h:function(a){return"Instance of '"+H.e(H.bC(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.aK.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.dO.prototype={
gk:function(a){return a.length}}
W.dP.prototype={
h:function(a){return String(a)}}
W.dQ.prototype={
h:function(a){return String(a)}}
W.c0.prototype={}
W.aT.prototype={$iaT:1}
W.aV.prototype={
c2:function(a,b,c){var u=a.getContext(b,P.ll(c))
return u},
$iaV:1}
W.ay.prototype={
gk:function(a){return a.length}}
W.e2.prototype={
gk:function(a){return a.length}}
W.v.prototype={$iv:1}
W.bn.prototype={
gk:function(a){return a.length}}
W.e3.prototype={}
W.T.prototype={}
W.a2.prototype={}
W.e4.prototype={
gk:function(a){return a.length}}
W.e5.prototype={
gk:function(a){return a.length}}
W.e8.prototype={
gk:function(a){return a.length}}
W.W.prototype={$iW:1}
W.eb.prototype={
h:function(a){return String(a)}}
W.c7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[[P.X,P.V]]},
$iq:1,
$aq:function(){return[[P.X,P.V]]},
$ap:function(){return[[P.X,P.V]]},
$ij:1,
$aj:function(){return[[P.X,P.V]]}}
W.c8.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gah(a))+" x "+H.e(this.gaf(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.I(b)
return!!u.$iX&&a.left===u.gbF(b)&&a.top===u.gbY(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gD:function(a){return W.jz(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(this.gah(a)),C.c.gD(this.gaf(a)))},
gaf:function(a){return a.height},
gbF:function(a){return a.left},
gbY:function(a){return a.top},
gah:function(a){return a.width},
$iX:1,
$aX:function(){return[P.V]}}
W.ec.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[P.o]},
$iq:1,
$aq:function(){return[P.o]},
$ap:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
W.ed.prototype={
gk:function(a){return a.length}}
W.hF.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gG:function(a){var u=this.ep(this)
return new J.S(u,u.length)},
$am:function(){return[W.F]},
$ap:function(){return[W.F]},
$aj:function(){return[W.F]}}
W.F.prototype={
gdH:function(a){return new W.hH(a)},
gbw:function(a){return new W.hF(a,a.children)},
h:function(a){return a.localName},
U:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.j7
if(u==null){u=H.b([],[W.am])
t=new W.cq(u)
u.push(W.jy(null))
u.push(W.jA())
$.j7=t
d=t}else d=u
u=$.j6
if(u==null){u=new W.dz(d)
$.j6=u
c=u}else{u.a=d
c=u}}if($.af==null){u=document
t=u.implementation.createHTMLDocument("")
$.af=t
$.iv=t.createRange()
s=$.af.createElement("base")
s.href=u.baseURI
$.af.head.appendChild(s)}u=$.af
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.af
if(!!this.$iaT)r=u.body
else{r=u.createElement(a.tagName)
$.af.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.N,a.tagName)){$.iv.selectNodeContents(r)
q=$.iv.createContextualFragment(b)}else{r.innerHTML=b
q=$.af.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.af.body
if(r==null?u!=null:r!==u)J.iY(r)
c.b4(q)
document.adoptNode(q)
return q},
dN:function(a,b,c){return this.U(a,b,c,null)},
c5:function(a,b){a.textContent=null
a.appendChild(this.U(a,b,null,null))},
$iF:1,
gbU:function(a){return a.tagName}}
W.eh.prototype={
$1:function(a){return!!J.I(a).$iF}}
W.h.prototype={$ih:1}
W.d.prototype={
dD:function(a,b,c,d){if(c!=null)this.cr(a,b,c,!1)},
cr:function(a,b,c,d){return a.addEventListener(b,H.bc(c,1),!1)}}
W.ai.prototype={$iai:1}
W.eo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ai]},
$iq:1,
$aq:function(){return[W.ai]},
$ap:function(){return[W.ai]},
$ij:1,
$aj:function(){return[W.ai]}}
W.ep.prototype={
gk:function(a){return a.length}}
W.et.prototype={
gk:function(a){return a.length}}
W.aj.prototype={$iaj:1}
W.ez.prototype={
gk:function(a){return a.length}}
W.br.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.t]},
$iq:1,
$aq:function(){return[W.t]},
$ap:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.b_.prototype={$ib_:1}
W.eS.prototype={
h:function(a){return String(a)}}
W.eY.prototype={
gk:function(a){return a.length}}
W.eZ.prototype={
j:function(a,b){return P.au(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.au(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.F(a,new W.f_(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
W.f_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.f0.prototype={
j:function(a,b){return P.au(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.au(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.F(a,new W.f1(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
W.f1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.al.prototype={$ial:1}
W.f2.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.al]},
$iq:1,
$aq:function(){return[W.al]},
$ap:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]}}
W.a5.prototype={$ia5:1}
W.M.prototype={
ga8:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.jl("No elements"))
if(t>1)throw H.c(P.jl("More than one element"))
return u.firstChild},
T:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gG:function(a){var u=this.a.childNodes
return new W.cb(u,u.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$am:function(){return[W.t]},
$ap:function(){return[W.t]},
$aj:function(){return[W.t]}}
W.t.prototype={
eh:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ek:function(a,b){var u,t
try{u=a.parentNode
J.k7(u,b,a)}catch(t){H.ad(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.c8(a):u},
dq:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.cp.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.t]},
$iq:1,
$aq:function(){return[W.t]},
$ap:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.an.prototype={$ian:1,
gk:function(a){return a.length}}
W.fj.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.an]},
$iq:1,
$aq:function(){return[W.an]},
$ap:function(){return[W.an]},
$ij:1,
$aj:function(){return[W.an]}}
W.fq.prototype={
j:function(a,b){return P.au(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.au(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.F(a,new W.fr(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
W.fr.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ft.prototype={
gk:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ap]},
$iq:1,
$aq:function(){return[W.ap]},
$ap:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]}}
W.aq.prototype={$iaq:1}
W.fF.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aq]},
$iq:1,
$aq:function(){return[W.aq]},
$ap:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]}}
W.ar.prototype={$iar:1,
gk:function(a){return a.length}}
W.fI.prototype={
j:function(a,b){return a.getItem(b)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gN:function(a){var u=H.b([],[P.o])
this.F(a,new W.fJ(u))
return u},
gk:function(a){return a.length},
$aK:function(){return[P.o,P.o]}}
W.fJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.a9.prototype={$ia9:1}
W.cD.prototype={
U:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=W.kn("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.M(t).T(0,new W.M(u))
return t}}
W.fM.prototype={
U:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.U(u.createElement("table"),b,c,d)
u.toString
u=new W.M(u)
s=u.ga8(u)
s.toString
u=new W.M(s)
r=u.ga8(u)
t.toString
r.toString
new W.M(t).T(0,new W.M(r))
return t}}
W.fN.prototype={
U:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.U(u.createElement("table"),b,c,d)
u.toString
u=new W.M(u)
s=u.ga8(u)
t.toString
s.toString
new W.M(t).T(0,new W.M(s))
return t}}
W.bF.prototype={$ibF:1}
W.as.prototype={$ias:1}
W.aa.prototype={$iaa:1}
W.fQ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aa]},
$iq:1,
$aq:function(){return[W.aa]},
$ap:function(){return[W.aa]},
$ij:1,
$aj:function(){return[W.aa]}}
W.fR.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.as]},
$iq:1,
$aq:function(){return[W.as]},
$ap:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]}}
W.fT.prototype={
gk:function(a){return a.length}}
W.at.prototype={$iat:1}
W.b5.prototype={$ib5:1}
W.fX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.at]},
$iq:1,
$aq:function(){return[W.at]},
$ap:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.fY.prototype={
gk:function(a){return a.length}}
W.aM.prototype={}
W.hj.prototype={
h:function(a){return String(a)}}
W.hx.prototype={
gk:function(a){return a.length}}
W.aN.prototype={
gdQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
gdP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.r("deltaX is not supported"))},
$iaN:1}
W.bK.prototype={
dr:function(a,b){return a.requestAnimationFrame(H.bc(b,1))},
cC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iq:1,
$aq:function(){return[W.v]},
$ap:function(){return[W.v]},
$ij:1,
$aj:function(){return[W.v]}}
W.cS.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.I(b)
return!!u.$iX&&a.left===u.gbF(b)&&a.top===u.gbY(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gD:function(a){return W.jz(C.c.gD(a.left),C.c.gD(a.top),C.c.gD(a.width),C.c.gD(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.hL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aj]},
$iq:1,
$aq:function(){return[W.aj]},
$ap:function(){return[W.aj]},
$ij:1,
$aj:function(){return[W.aj]}}
W.da.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.t]},
$iq:1,
$aq:function(){return[W.t]},
$ap:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.hX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ar]},
$iq:1,
$aq:function(){return[W.ar]},
$ap:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]}}
W.hY.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.a9]},
$iq:1,
$aq:function(){return[W.a9]},
$ap:function(){return[W.a9]},
$ij:1,
$aj:function(){return[W.a9]}}
W.hE.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.gN(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gN:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aK:function(){return[P.o,P.o]}}
W.hH.prototype={
j:function(a,b){return this.a.getAttribute(b)},
gk:function(a){return this.gN(this).length}}
W.hJ.prototype={}
W.hK.prototype={
$1:function(a){return this.a.$1(a)}}
W.bL.prototype={
cj:function(a){var u
if($.d_.a===0){for(u=0;u<262;++u)$.d_.m(0,C.M[u],W.lu())
for(u=0;u<12;++u)$.d_.m(0,C.j[u],W.lv())}},
ad:function(a){return $.k4().w(0,W.bo(a))},
a_:function(a,b,c){var u=$.d_.j(0,H.e(W.bo(a))+"::"+b)
if(u==null)u=$.d_.j(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iam:1}
W.x.prototype={
gG:function(a){return new W.cb(a,this.gk(a))}}
W.cq.prototype={
ad:function(a){return C.a.bu(this.a,new W.fb(a))},
a_:function(a,b,c){return C.a.bu(this.a,new W.fa(a,b,c))},
$iam:1}
W.fb.prototype={
$1:function(a){return a.ad(this.a)}}
W.fa.prototype={
$1:function(a){return a.a_(this.a,this.b,this.c)}}
W.di.prototype={
cm:function(a,b,c,d){var u,t,s
this.a.T(0,c)
u=b.aC(0,new W.hV())
t=b.aC(0,new W.hW())
this.b.T(0,u)
s=this.c
s.T(0,C.O)
s.T(0,t)},
ad:function(a){return this.a.w(0,W.bo(a))},
a_:function(a,b,c){var u=this,t=W.bo(a),s=u.c
if(s.w(0,H.e(t)+"::"+b))return u.d.dF(c)
else if(s.w(0,"*::"+b))return u.d.dF(c)
else{s=u.b
if(s.w(0,H.e(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.e(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1},
$iam:1}
W.hV.prototype={
$1:function(a){return!C.a.w(C.j,a)}}
W.hW.prototype={
$1:function(a){return C.a.w(C.j,a)}}
W.i0.prototype={
a_:function(a,b,c){if(this.cb(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.i1.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.hZ.prototype={
ad:function(a){var u=J.I(a)
if(!!u.$ibD)return!1
u=!!u.$ii
if(u&&W.bo(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.b.aF(b,"on"))return!1
return this.ad(a)},
$iam:1}
W.cb.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.k6(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gv:function(a){return this.d}}
W.am.prototype={}
W.hT.prototype={}
W.dz.prototype={
b4:function(a){new W.i5(this).$2(a,null)},
ak:function(a,b){if(b==null)J.iY(a)
else b.removeChild(a)},
dt:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kb(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ad(r)}t="element unprintable"
try{t=J.a_(a)}catch(r){H.ad(r)}try{s=W.bo(a)
this.ds(a,b,p,t,s,o,n)}catch(r){if(H.ad(r) instanceof P.a0)throw r
else{this.ak(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ds:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.ak(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.ad(a)){p.ak(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a_(a,"is",g)){p.ak(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gN(f)
t=H.b(u.slice(0),[H.Z(u,0)])
for(s=f.gN(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a_(a,J.ke(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.I(a).$ibF)p.b4(a.content)}}
W.i5.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dt(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ak(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ad(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.cR.prototype={}
W.cT.prototype={}
W.cU.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d0.prototype={}
W.d1.prototype={}
W.d6.prototype={}
W.d7.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.db.prototype={}
W.dc.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.bQ.prototype={}
W.bR.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dp.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.bS.prototype={}
W.bT.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
P.i8.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eq.prototype={
gat:function(){var u=this.b,t=H.iO(u,"p",0)
return new H.bv(new H.bJ(u,new P.er(),[t]),new P.es(),[t,W.F])},
m:function(a,b,c){var u=this.gat()
J.kc(u.b.$1(J.dM(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ax(this.gat().a)},
j:function(a,b){var u=this.gat()
return u.b.$1(J.dM(u.a,b))},
gG:function(a){var u=P.iC(this.gat(),!1,W.F)
return new J.S(u,u.length)},
$am:function(){return[W.F]},
$ap:function(){return[W.F]},
$aj:function(){return[W.F]}}
P.er.prototype={
$1:function(a){return!!J.I(a).$iF}}
P.es.prototype={
$1:function(a){return H.dL(a,"$iF")}}
P.hP.prototype={}
P.X.prototype={}
P.aF.prototype={$iaF:1}
P.eN.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aF]},
$ap:function(){return[P.aF]},
$ij:1,
$aj:function(){return[P.aF]}}
P.aJ.prototype={$iaJ:1}
P.fe.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aJ]},
$ap:function(){return[P.aJ]},
$ij:1,
$aj:function(){return[P.aJ]}}
P.fk.prototype={
gk:function(a){return a.length}}
P.bD.prototype={$ibD:1}
P.fL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.o]},
$ap:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
P.i.prototype={
gbw:function(a){return new P.eq(a,new W.M(a))},
U:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.am])
p.push(W.jy(null))
p.push(W.jA())
p.push(new W.hZ())
c=new W.dz(new W.cq(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.l).dN(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.M(s)
q=p.ga8(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aL.prototype={$iaL:1}
P.fZ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aL]},
$ap:function(){return[P.aL]},
$ij:1,
$aj:function(){return[P.aL]}}
P.d2.prototype={}
P.d3.prototype={}
P.dd.prototype={}
P.de.prototype={}
P.dq.prototype={}
P.dr.prototype={}
P.dx.prototype={}
P.dy.prototype={}
P.dS.prototype={
gk:function(a){return a.length}}
P.dT.prototype={
j:function(a,b){return P.au(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.au(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.F(a,new P.dU(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
P.dU.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dV.prototype={
gk:function(a){return a.length}}
P.aS.prototype={}
P.ff.prototype={
gk:function(a){return a.length}}
P.cQ.prototype={}
P.fG.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.au(a.item(b))},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[[P.bu,,,]]},
$ap:function(){return[[P.bu,,,]]},
$ij:1,
$aj:function(){return[[P.bu,,,]]}}
P.dl.prototype={}
P.dm.prototype={}
K.ae.prototype={
a4:function(a,b){return!0},
h:function(a){return"all"}}
K.cc.prototype={
a4:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].a4(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.aH.prototype={}
K.Q.prototype={
a4:function(a,b){return!this.c7(0,b)},
h:function(a){return"!["+this.b7(0)+"]"}}
K.fl.prototype={
a4:function(a,b){if(typeof b!=="number")return H.N(b)
return this.a<=b&&this.b>=b},
h:function(a){var u=H.iD(this.a),t=H.iD(this.b)
return u+".."+t}}
K.fu.prototype={
ce:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.J("May not create a Set with zero characters."))
u=P.A
t=new H.a4([u,P.aQ])
for(s=new H.aG(a,a.gk(a));s.p();)t.m(0,s.d,!0)
r=P.iC(new H.b0(t,[u]),!0,u)
if(!!r.immutable$list)H.O(P.r("sort"))
H.kP(r,J.l7())
this.a=r},
a4:function(a,b){return C.a.w(this.a,b)},
h:function(a){return P.iF(this.a)}}
L.cB.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cJ(this.a.i(0,b))
r.a=H.b([],[K.aH])
r.c=!1
this.c.push(r)
return r},
dU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.a4(0,a))return r}return},
h:function(a){return this.b},
bo:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.w(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.b0(n,[H.Z(n,0)]),n=n.gG(n);n.p();){t=n.d
o+="\n"
s=p.d.c.j(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.w(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.u)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cH.prototype={
h:function(a){var u=H.iT(this.b,"\n","\\n"),t=H.iT(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cI.prototype={
a7:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
L.fU.prototype={
i:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new L.cB(this,b)
u.c=H.b([],[L.cJ])
this.a.m(0,b,u)}return u},
C:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new L.cI(a)
u=P.o
t.c=new H.a4([u,u])
this.b.m(0,a,t)}return t},
b3:function(a){return this.es(a)},
es:function(a){var u=this
return P.l9(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$b3(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.A]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.b0(c,0)
else{if(!t.p()){s=3
break}l=t.d}d.push(l);++o
k=g.dU(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.iF(d)
throw H.c(P.J("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.O(P.r("removeRange"))
P.iE(0,m,d.length)
d.splice(0,m-0)
C.a.T(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.w(0,p.a)?7:8
break
case 7:s=9
return p
case 9:case 8:o=n
p=null
m=0
s=5
break
case 6:if(!k.c)e.push(l)
g=k.b
if(g.d!=null){j=P.iF(e)
i=g.d
h=i.c.j(0,j)
p=new L.cH(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.w(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.l0()
case 1:return P.l1(q)}}},L.cH)},
h:function(a){var u,t=new P.aK(""),s=this.d
if(s!=null)t.a=s.bo()+"\n"
for(s=this.a,s=s.gev(s),s=new H.cl(J.aw(s.a),s.b);s.p();){u=s.a
if(u!=this.d)t.a+=u.bo()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cJ.prototype={
h:function(a){return this.b.b+": "+this.b7(0)}}
O.aW.prototype={
b8:function(a){this.a=H.b([],[a])
this.c=this.b=null},
aE:function(a,b){this.b=null
this.c=a},
d9:function(a){return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gG:function(a){var u=this.a
return new J.S(u,u.length)},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.iO(s,"aW",0)]
if(s.d9(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.b([b],r))}},
$ij:1}
O.bx.prototype={
gk:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.a3():u},
a9:function(){var u=this.b
if(u!=null)u.S(null)},
gam:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.eX()},
bQ:function(a){var u=this.a
if(a==null)u.push(V.eX())
else u.push(a)
this.a9()},
b_:function(){var u=this.a
if(u.length>0){u.pop()
this.a9()}}}
E.dW.prototype={}
E.ag.prototype={
bZ:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q)
t.b=!0
s.a5(t)}for(r=s.y.a,r=new J.S(r,r.length);r.p();)r.d.bZ(0,b)},
ag:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gam(n))
else n.a.push(m.I(0,n.gam(n)))
n.a9()
a.bR(o.f)
n=a.dy
u=(n&&C.a).gaz(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.j(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.ea(m,s)
t.cf(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bj(r,35633)
t.f=t.bj(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!m.getProgramParameter(t.r,35714)){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.O(P.J("Failed to link shader: "+H.e(p)))}t.dz()
t.dB()
t.z=t.x.j(0,"posAttr")
t.Q=H.dL(t.y.j(0,"width"),"$ibG")
t.ch=H.dL(t.y.j(0,"stop"),"$ibG")
t.cx=H.dL(t.y.j(0,"viewObjMat"),"$ibH")
t.cy=H.dL(t.y.j(0,"projMat"),"$ibH")
if(s.length===0)H.O(P.J("May not cache a shader with no name."))
if(a.fr.dL(0,s))H.O(P.J('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.m(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.c2)?o.e=null:m)==null){n=o.d.dJ(new Z.hy(a.a),$.av())
m=n.dT($.av())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.dS()
s=u.b
r=u.c
q=n.Q
q.a.uniform1f(q.d,s-r)
r=u.c
s=n.ch
s.a.uniform1f(s.d,r)
r=a.cy
r=r.gam(r)
s=n.cy
s.toString
s.b5(r.bW(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gam(s)
r=a.dx
r=a.cx=s.I(0,r.gam(r))
s=r}n=n.cx
n.toString
n.b5(s.bW(0,!0))
u.e
n=o.e
n.aT(a)
n.ag(a)
n.eu(a)
n=u.a
n.toString
m.useProgram(null)
n.x.dR()}for(n=o.y.a,n=new J.S(n,n.length);n.p();)n.d.ag(a)
a.bP()
a.dx.b_()},
a5:function(a){var u=this.z
if(u!=null)u.S(a)},
W:function(){return this.a5(null)},
bM:function(a){this.e=null
this.a5(a)},
e9:function(){return this.bM(null)},
bK:function(a){this.a5(a)},
e8:function(){return this.bK(null)},
bI:function(a){this.a5(a)},
e5:function(){return this.bI(null)},
e4:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbH(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bp()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
e7:function(a,b){var u,t
for(u=b.gG(b),t=this.gbH();u.p();)u.gv(u).gu().J(0,t)
this.W()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.aU.prototype={
h:function(a){return this.b}}
E.b2.prototype={
h:function(a){return this.b}}
E.hI.prototype={}
E.fm.prototype={
cd:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aA(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bx()
t=[V.bw]
u.a=H.b([],t)
u.gu().n(0,new E.fn(s))
s.cy=u
u=new O.bx()
u.a=H.b([],t)
u.gu().n(0,new E.fo(s))
s.db=u
u=new O.bx()
u.a=H.b([],t)
u.gu().n(0,new E.fp(s))
s.dx=u
u=H.b([],[O.cE])
s.dy=u
u.push(null)
s.fr=new H.a4([P.o,A.cy])},
bR:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaz(u):a)},
bP:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fn.prototype={
$1:function(a){}}
E.fo.prototype={
$1:function(a){this.a.cx=null}}
E.fp.prototype={
$1:function(a){this.a.cx=null}}
E.cF.prototype={
bb:function(a){this.bS()},
ba:function(){return this.bb(null)},
gdX:function(){var u,t=this,s=Date.now(),r=C.d.Z(P.j5(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aA(s,!1)
return u/r},
bm:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.I()
if(typeof r!=="number")return H.N(r)
u=C.c.bD(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.I()
t=C.c.bD(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jo(C.h,s.gel())}},
bS:function(){if(!this.cx){this.cx=!0
var u=window
C.v.cC(u)
C.v.dr(u,W.jE(new E.fS(this),P.V))}},
ej:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bm()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aA(r,!1)
s.y=P.j5(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a9()
r=s.db
C.a.sk(r.a,0)
r.a9()
r=s.dx
C.a.sk(r.a,0)
r.a9()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.ag(p.e)}s=p.Q
if(s!=null)s.S(null)}catch(q){u=H.ad(q)
t=H.iP(q)
P.iS("Error: "+H.e(u))
P.iS("Stack: "+H.e(t))
throw H.c(u)}}}
E.fS.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ej()}}}
Z.cO.prototype={}
Z.c1.prototype={
aT:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ad(s)
t=P.J('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.hy.prototype={}
Z.c2.prototype={
dT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aT:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aT(a)},
eu:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a_(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")}}
Z.cd.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bC(this.c))+"'")+"]"}}
Z.cN.prototype={
gb6:function(a){var u=this.a,t=(u&$.av().a)!==0?3:0
if((u&$.bg().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=3
if((u&$.bh().a)!==0)t+=2
if((u&$.bi().a)!==0)t+=3
if((u&$.bY().a)!==0)t+=3
if((u&$.bZ().a)!==0)t+=4
if((u&$.bj().a)!==0)++t
return(u&$.be().a)!==0?t+4:t},
dG:function(a){var u,t=$.av(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bZ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0)if(u===a)return t
return $.k3()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cN))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.av().a)!==0)u.push("Pos")
if((t&$.bg().a)!==0)u.push("Norm")
if((t&$.bf().a)!==0)u.push("Binm")
if((t&$.bh().a)!==0)u.push("Txt2D")
if((t&$.bi().a)!==0)u.push("TxtCube")
if((t&$.bY().a)!==0)u.push("Clr3")
if((t&$.bZ().a)!==0)u.push("Clr4")
if((t&$.bj().a)!==0)u.push("Weight")
if((t&$.be().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.dZ.prototype={}
D.bp.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.P]}]):u).push(b)},
J:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.a
u=(s&&C.a).J(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.b
u=(s&&C.a).J(s,b)||u}return u},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.P()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.iC(u,!0,{func:1,ret:-1,args:[D.P]}),new D.ek(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.P]}])
C.a.F(u,new D.el(q))}return!0},
ap:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}}}
D.ek.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.el.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.P.prototype={}
D.ce.prototype={}
D.cf.prototype={}
D.E.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.c3.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c3))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.ci.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ci))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eM.prototype={
ee:function(a){this.d.n(0,a.a)
return!1},
ea:function(a){this.d.J(0,a.a)
return!1}}
X.eT.prototype={
aZ:function(a,b){this.r=a.a
return!1},
ao:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.c4()
if(typeof u!=="number")return u.c0()
this.r=(u&~t)>>>0
return!1},
an:function(a,b){return!1},
ef:function(a){return!1},
cZ:function(a,b,c){return}}
X.by.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.by))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.f3.prototype={
aZ:function(a,b){this.f=a.a
return!1},
ao:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.c4()
if(typeof u!=="number")return u.c0()
this.f=(u&~t)>>>0
return!1},
an:function(a,b){return!1},
eg:function(a,b){return!1}}
X.fW.prototype={
ed:function(a){return!1},
eb:function(a){return!1},
ec:function(a){return!1}}
X.cM.prototype={
bi:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.ci(u,new X.by(t,a.altKey,a.shiftKey))},
ac:function(a){a.shiftKey},
aS:function(a){a.shiftKey},
a3:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.a7(s-q,r-u)},
aj:function(a){return new V.b7(a.movementX,a.movementY)},
aQ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.X(r.pageX)
C.c.X(r.pageY)
p=o.left
C.c.X(r.pageX)
n.push(new V.a7(q-p,C.c.X(r.pageY)-o.top))}return n},
a2:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.c3(u,new X.by(t,a.altKey,a.shiftKey))},
aM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
cU:function(a){this.f=!0},
cI:function(a){this.f=!1},
cO:function(a){if(this.f&&this.aM(a))a.preventDefault()},
cY:function(a){var u
if(!this.f)return
u=this.bi(a)
this.b.ee(u)},
cW:function(a){var u
if(!this.f)return
u=this.bi(a)
this.b.ea(u)},
d0:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ac(a)
if(r.x){u=r.a2(a)
t=r.aj(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a2(a)
s=r.a3(a)
if(r.c.aZ(u,s))a.preventDefault()},
d4:function(a){var u,t,s,r=this
r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.ao(u,s))a.preventDefault()},
cS:function(a){var u,t,s,r=this
if(!r.aM(a)){r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.ao(u,s))a.preventDefault()}},
d2:function(a){var u,t,s,r=this
r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.an(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.an(u,s))a.preventDefault()},
cQ:function(a){var u,t,s,r=this
if(!r.aM(a)){r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.an(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.an(u,s))a.preventDefault()}},
d6:function(a){var u,t,s,r,q,p=this
p.ac(a)
u=(a&&C.u).gdP(a)
t=C.u.gdQ(a)
s=p.Q
if(typeof u!=="number")return u.I()
if(typeof s!=="number")return H.N(s)
if(typeof t!=="number")return t.I()
r=new V.b7(u*s,t*s)
if(p.x){if(p.d.ef(r))a.preventDefault()
return}if(p.r)return
q=p.a3(a)
if(p.c.eg(r,q))a.preventDefault()},
d8:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a2(s.y)
t=s.a3(s.y)
s.d.cZ(u,t,r)}},
di:function(a){var u,t=this
t.a.focus()
t.f=!0
t.aS(a)
u=t.aQ(a)
if(t.e.ed(u))a.preventDefault()},
de:function(a){var u
this.aS(a)
u=this.aQ(a)
if(this.e.eb(u))a.preventDefault()},
dg:function(a){var u
this.aS(a)
u=this.aQ(a)
if(this.e.ec(u))a.preventDefault()}}
V.aX.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aX))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.ej.prototype={}
V.bw.prototype={
bW:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.B])
return t},
I:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ak(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bw))return!1
u=b.a
t=$.C().a
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
h:function(a){return this.H()},
B:function(a){var u,t,s,r,q,p=this,o=[P.B],n=V.ib(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.ib(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.ib(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.ib(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
H:function(){return this.B("")}}
V.a7.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.ao.prototype={
P:function(a,b){return new V.ao(this.a-b.a,this.b-b.b,this.c-b.c)},
I:function(a,b){return new V.ao(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.cw.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cw))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.b7.prototype={
aX:function(a){var u,t=this.a
if(typeof t!=="number")return t.I()
u=this.b
if(typeof u!=="number")return u.I()
return Math.sqrt(t*t+u*u)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.b7))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.N(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.N(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.G.prototype={
aX:function(a){return Math.sqrt(this.K(this))},
K:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
al:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.G(u*t-s*r,s*q-p*t,p*r-u*q)},
O:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
aD:function(a){return new V.G(-this.a,-this.b,-this.c)},
I:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
M:function(a,b){if(Math.abs(b-0)<$.C().a)return V.hm()
return new V.G(this.a/b,this.b/b,this.c/b)},
dZ:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
U.c5.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.a3():u},
aB:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.B("          ")}}
U.bq.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.a3():u},
R:function(a){var u=this.e
if(u!=null)u.S(a)},
ck:function(){return this.R(null)},
cG:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbc(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ce()
u.b=!0
this.R(u)},
dc:function(a,b){var u,t
for(u=b.gG(b),t=this.gbc();u.p();)u.gv(u).gu().J(0,t)
u=new D.cf()
u.b=!0
this.R(u)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a0()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.S(r,r.length),u=null;r.p();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.I(0,u)}}s.f=u==null?V.eX():u
r=s.e
if(r!=null)r.ap(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bq))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a6]},
$aaW:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.cx.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.a3():u},
R:function(a){var u=this.y
if(u!=null)u.S(a)},
sc_:function(a){var u
a=V.iU(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.C().a)){this.a=a
u=new D.E("yaw",u,a)
u.b=!0
this.R(u)}},
sbO:function(a,b){var u
b=V.iU(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.C().a)){this.b=b
u=new D.E("pitch",u,b)
u.b=!0
this.R(u)}},
sbT:function(a){var u
a=V.iU(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.C().a)){this.c=a
u=new D.E("roll",u,a)
u.b=!0
this.R(u)}},
sbB:function(a){var u=this.d
if(!(Math.abs(u-a)<$.C().a)){this.d=a
u=new D.E("deltaYaw",u,a)
u.b=!0
this.R(u)}},
sbz:function(a){var u=this.e
if(!(Math.abs(u-a)<$.C().a)){this.e=a
u=new D.E("deltaPitch",u,a)
u.b=!0
this.R(u)}},
sbA:function(a){var u=this.f
if(!(Math.abs(u-a)<$.C().a)){this.f=a
u=new D.E("deltaRoll",u,a)
u.b=!0
this.R(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sc_(s.a+s.d*b.y)
s.sbO(0,s.b+s.e*b.y)
s.sbT(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
r=V.ak(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)
q=s.b
u=Math.cos(q)
t=Math.sin(q)
r=r.I(0,V.ak(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1))
q=s.a
u=Math.cos(q)
t=Math.sin(q)
s.x=r.I(0,V.ak(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1))
r=s.y
if(r!=null)r.ap(0)}return s.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cx))return!1
u=r.a
t=b.a
s=$.C().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
h:function(a){var u=this
return"Rotator: ["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+"], ["+V.w(u.d,3,0)+", "+V.w(u.e,3,0)+", "+V.w(u.f,3,0)+"]"}}
M.c9.prototype={
a1:function(a){var u=this.y
if(u!=null)u.S(a)},
cl:function(){return this.a1(null)},
cK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.P]}],r=0;r<b.length;b.length===u||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bp()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.ce()
u.b=!0
this.a1(u)},
cM:function(a,b){var u,t
for(u=b.gG(b),t=this.gY();u.p();)u.gv(u).gu().J(0,t)
u=new D.cf()
u.b=!0
this.a1(u)},
sbV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().J(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gu().n(0,t.gY())
s=new D.E("technique",u,t.d)
s.b=!0
t.a1(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.a3():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.bR(a1.d)
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
if(typeof s!=="number")return H.N(s)
o=C.c.X(p*s)
p=q.b
if(typeof r!=="number")return H.N(r)
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
i=V.ak(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.bQ(i)
t=$.jf
if(t==null){t=$.jh
if(t==null)t=$.jh=new V.ao(0,0,0)
q=$.ju
if(q==null)q=$.ju=new V.G(0,1,0)
p=$.js
if(p==null)p=$.js=new V.G(0,0,-1)
h=p.M(0,Math.sqrt(p.K(p)))
q=q.al(h)
g=q.M(0,Math.sqrt(q.K(q)))
f=h.al(g)
e=new V.G(t.a,t.b,t.c)
d=g.aD(0).K(e)
c=f.aD(0).K(e)
b=h.aD(0).K(e)
t=V.ak(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.jf=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.I(0,a)}a2.db.bQ(a)
for(u=a1.e.a,u=new J.S(u,u.length);u.p();)u.d.bZ(0,a2)
for(u=a1.e.a,u=new J.S(u,u.length);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.b_()
a2.db.b_()
a1.c.toString
a2.bP()}}
A.c_.prototype={}
A.dR.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
dS:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.ea.prototype={}
A.cy.prototype={
cf:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bj:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.J("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
dz:function(){var u,t,s,r=this,q=H.b([],[A.c_]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.N(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.c_(p,t.name,s))}r.x=new A.dR(q)},
dB:function(){var u,t,s,r=this,q=H.b([],[A.cK]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.N(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.dO(t.type,t.size,t.name,s))}r.y=new A.ha(q)},
ab:function(a,b,c){var u=this.a
if(a===1)return new A.h2(u,b,c)
else return A.iH(u,this.r,b,a,c)},
cz:function(a,b,c){var u=this.a
if(a===1)return new A.hd(u,b,c)
else return A.iH(u,this.r,b,a,c)},
cA:function(a,b,c){var u=this.a
if(a===1)return new A.he(u,b,c)
else return A.iH(u,this.r,b,a,c)},
av:function(a,b){return new P.cX(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
dO:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ab(b,c,d)
case 5121:return u.ab(b,c,d)
case 5122:return u.ab(b,c,d)
case 5123:return u.ab(b,c,d)
case 5124:return u.ab(b,c,d)
case 5125:return u.ab(b,c,d)
case 5126:return new A.bG(u.a,c,d)
case 35664:return new A.h4(u.a,c,d)
case 35665:return new A.h6(u.a,c,d)
case 35666:return new A.h8(u.a,c,d)
case 35667:return new A.h5(u.a,c,d)
case 35668:return new A.h7(u.a,c,d)
case 35669:return new A.h9(u.a,c,d)
case 35674:return new A.hb(u.a,c,d)
case 35675:return new A.hc(u.a,c,d)
case 35676:return new A.bH(u.a,c,d)
case 35678:return u.cz(b,c,d)
case 35680:return u.cA(b,c,d)
case 35670:throw H.c(u.av("BOOL",c))
case 35671:throw H.c(u.av("BOOL_VEC2",c))
case 35672:throw H.c(u.av("BOOL_VEC3",c))
case 35673:throw H.c(u.av("BOOL_VEC4",c))
default:throw H.c(P.J("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.cK.prototype={}
A.ha.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.H()},
H:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.h2.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.h5.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.h7.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.h9.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.h3.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.bG.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.h4.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.h6.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.h8.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hb.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.hc.prototype={
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.bH.prototype={
b5:function(a){var u=new Float32Array(H.iJ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.hd.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.he.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.io.prototype={
$1:function(a){return new V.ao(Math.cos(a),Math.sin(a),0)}}
F.i9.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.iX(n.$1(o),m)
m=J.iX(n.$1(o+3.141592653589793/p.c),m).P(0,l)
m=new V.G(m.a,m.b,m.c)
u=m.M(0,Math.sqrt(m.K(m)))
n=$.jt
if(n==null){n=new V.G(1,0,0)
$.jt=n
t=n}else t=n
if(!J.D(u,t)){n=$.jv
if(n==null){n=new V.G(0,0,1)
$.jv=n
t=n}else t=n}n=u.al(t)
s=n.M(0,Math.sqrt(n.K(n)))
n=s.al(u)
t=n.M(0,Math.sqrt(n.K(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.I(0,n*m)
m=s.I(0,q*m)
m=new V.ao(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.D(a.f,m)){a.f=m
n=a.a
if(n!=null)n.W()}}}
F.aZ.prototype={
ax:function(){var u=this
if(!u.gbC()){C.a.J(u.a.a.d.b,u)
u.a.a.W()}u.dl()
u.dm()
u.dn()},
du:function(a){this.a=a
a.d.b.push(this)},
dv:function(a){this.b=a
a.d.c.push(this)},
dw:function(a){this.c=a
a.d.d.push(this)},
dl:function(){var u=this.a
if(u!=null){C.a.J(u.d.b,this)
this.a=null}},
dm:function(){var u=this.b
if(u!=null){C.a.J(u.d.c,this)
this.b=null}},
dn:function(){var u=this.c
if(u!=null){C.a.J(u.d.d,this)
this.c=null}},
gbC:function(){return this.a==null||this.b==null||this.c==null},
cs:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hm()
if(q!=null)s=s.O(0,q)
if(u!=null)s=s.O(0,u)
if(t!=null)s=s.O(0,t)
if(s.dZ())return
return s.M(0,Math.sqrt(s.K(s)))},
ct:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.G(r.a,r.b,r.c)
s=r.M(0,Math.sqrt(r.K(r)))
r=t.P(0,q)
r=new V.G(r.a,r.b,r.c)
r=s.al(r.M(0,Math.sqrt(r.K(r))))
return r.M(0,Math.sqrt(r.K(r)))},
aU:function(){var u,t=this
if(t.d!=null)return!0
u=t.cs()
if(u==null){u=t.ct()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
gbx:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.H()},
B:function(a){var u,t,s=this
if(s.gbC())return a+"disposed"
u=a+C.b.a6(J.a_(s.a.e),0)+", "+C.b.a6(J.a_(s.b.e),0)+", "+C.b.a6(J.a_(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.h(0)+", "):u+"-, ")+"-}"
return u},
H:function(){return this.B("")}}
F.en.prototype={}
F.fD.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.E()
t=t.e
u=c.c
u.a.a.E()
if(t==u.e){t=b.b
t.a.a.E()
t=t.e
u=c.a
u.a.a.E()
if(t==u.e){t=b.c
t.a.a.E()
t=t.e
u=c.b
u.a.a.E()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cj.prototype={}
F.eO.prototype={}
F.h1.prototype={}
F.ct.prototype={}
F.fv.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.a3():u},
e2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.Z(o,0)])
for(o=[F.bI];u.length!==0;){t=C.a.gdV(u)
C.a.b0(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.a.b0(u,r)}}if(s.length>1)b.e1(s)}}p.a.E()
p.c.b1()
p.d.b1()
p.b.ei()
p.c.b2(new F.h1())
p.d.b2(new F.fD())
o=p.e
if(o!=null)o.ap(0)},
dJ:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.av()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bg().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.bh().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bY().a)!==0)++s
if((t&$.bZ().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.be().a)!==0)++s
r=a4.gb6(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.B])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.c1])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.dG(m)
k=l.gb6(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.c1(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].e0(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.iJ(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c2(new Z.cO(a1,d),o)
c.b=H.b([],[Z.cd])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.E()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.E()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.E()
b.push(t.e)}a=Z.kS(u,34963,b)
c.b.push(new Z.cd(4,b.length,a))}return c},
h:function(a){var u=this,t=H.b([],[P.o])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.B("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.B("   "))}return C.a.l(t,"\n")},
W:function(){var u=this.e
if(u!=null)u.S(null)}}
F.fw.prototype={
dE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aZ])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.f(c,s)
m=c[s];++s
if(s>=n)return H.f(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.f(c,k)
j=c[k]
if(t<0||t>=n)return H.f(c,t)
i=c[t]
n=u.a
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.em(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.em(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.em(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.em(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
b2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.ax()
break}}}}},
b1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gbx(s)
if(t)s.ax()}},
aV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].aU())s=!1
return s},
h:function(a){return this.H()},
B:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].B(a))
return C.a.l(r,"\n")},
H:function(){return this.B("")}}
F.fx.prototype={
gk:function(a){return 0},
b2:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
b1:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gbx(s)
if(t)s.ax()}},
h:function(a){return this.H()},
B:function(a){var u,t,s=H.b([],[P.o])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.f(t,u)
s.push(t[u].B(a+(""+u+". ")))}return C.a.l(s,"\n")},
H:function(){return this.B("")}}
F.fy.prototype={
gk:function(a){return 0},
ei:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].gey()
t=t.gex(t)
if(t.gk(t).L(0,1)){t=this.b
return H.f(t,u)
t[u].ax()}}},
h:function(a){return this.H()},
B:function(a){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].B(a))}return C.a.l(s,"\n")},
H:function(){return this.B("")}}
F.bI.prototype={
by:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jx(u.cx,r,o,t,s,q,p,a,n)},
e0:function(a){var u,t,s=this
if(a.q(0,$.av())){u=s.f
t=[P.B]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bg())){u=s.r
t=[P.B]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bf())){u=H.b([0,0,1],[P.B])
return u}else if(a.q(0,$.bh())){u=s.y
t=[P.B]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bi())){u=H.b([0,0,0],[P.B])
return u}else if(a.q(0,$.bY())){u=s.Q
t=[P.B]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bZ())){u=s.Q
t=[P.B]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bj()))return H.b([s.ch],[P.B])
else if(a.q(0,$.be())){u=H.b([-1,-1,-1,-1],[P.B])
return u}else return H.b([],[P.B])},
aU:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hm()
t.d.F(0,new F.hw(s))
s=s.a
t.r=s.M(0,Math.sqrt(s.K(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.H()},
B:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.a6(J.a_(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.w(s.ch,3,0))
q.push(r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
H:function(){return this.B("")}}
F.hw.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.O(0,t)}}}
F.hn.prototype={
E:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.J("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
bs:function(a,b){var u=null,t=F.jx(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gk:function(a){return this.c.length},
aV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].aU()
return!0},
h:function(a){return this.H()},
B:function(a){var u,t,s,r
this.E()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)u.push(t[r].B(a))
return C.a.l(u,"\n")},
H:function(){return this.B("")}}
F.ho.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
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
F:function(a,b){var u=this
C.a.F(u.b,b)
C.a.F(u.c,new F.hp(u,b))
C.a.F(u.d,new F.hq(u,b))},
h:function(a){return this.H()},
H:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].B(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].B(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].B(""))
return C.a.l(r,"\n")}}
F.hp.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.hq.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.hr.prototype={
gk:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
h:function(a){return this.H()},
H:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].B(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].B(""))}return C.a.l(s,"\n")}}
F.ht.prototype={}
F.hs.prototype={
aY:function(a,b,c){return J.D(b.f,c.f)}}
F.hu.prototype={}
F.fc.prototype={
e1:function(a){var u,t,s,r,q,p,o,n,m=V.hm()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.G(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.M(0,Math.sqrt(m.K(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.M(0,Math.sqrt(p*p+o*o+n*n))}if(!J.D(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.S(null)}}}return}}
F.hv.prototype={
gk:function(a){return 0},
h:function(a){return this.H()},
H:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].B(""))}return C.a.l(s,"\n")}}
O.e9.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.a3():u},
aP:function(a){var u=this.r
if(u!=null)u.S(a)}}
O.cE.prototype={}
X.it.prototype={}
X.ev.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.a3():u}}
X.cs.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.a3():u},
aa:function(a){var u=this.f
if(u!=null)u.S(a)},
cp:function(){return this.aa(null)},
sbG:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gu().J(0,s.gbd())
t=s.b
s.b=a
if(a!=null)a.gu().n(0,s.gbd())
u=new D.E("mover",t,s.b)
u.b=!0
s.aa(u)}}}
X.fO.prototype={}
V.c4.prototype={
ar:function(a){this.b=new P.eA(C.J)
this.c=null
this.d=H.b([],[[P.b1,W.W]])},
A:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.W]))
u=a.split("\n")
for(l=u.length,t=[W.W],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.cw(q,0,q.length)
n=o==null?q:o
C.H.c5(p,H.iT(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaz(m.d).push(p)}},
bN:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.b1,W.W]])
u=C.a.l(b,"\n")
t=r.c
if(t==null)t=r.c=r.aw()
for(t.toString,s=new H.k(u),s=new P.b9(t.b3(new H.aG(s,s.gk(s))).a());s.p();)r.aA(s.gv(s))}}
V.il.prototype={
$1:function(a){var u=C.c.bX(this.a.gdX(),2)
if(u!=="0.00")P.iS(u+" fps")}}
V.e7.prototype={
aA:function(a){var u=this
switch(a.a){case"Class":u.A(a.b,"#551")
break
case"Comment":u.A(a.b,"#777")
break
case"Id":u.A(a.b,"#111")
break
case"Num":u.A(a.b,"#191")
break
case"Reserved":u.A(a.b,"#119")
break
case"String":u.A(a.b,"#171")
break
case"Symbol":u.A(a.b,"#616")
break
case"Type":u.A(a.b,"#B11")
break
case"Whitespace":u.A(a.b,"#111")
break}},
aw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.fV()
a1.d=a1.i(0,r)
u=a1.i(0,r).l(0,q)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=a1.i(0,q).l(0,q)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=a1.i(0,r).l(0,p)
t=K.z("0","9")
u.a.push(t)
t=a1.i(0,p).l(0,p)
u=K.z("0","9")
t.a.push(u)
u=a1.i(0,p).l(0,o)
t=K.n(new H.k("."))
u.a.push(t)
t=a1.i(0,o).l(0,n)
u=K.z("0","9")
t.a.push(u)
u=a1.i(0,n).l(0,n)
t=K.z("0","9")
u.a.push(t)
t=a1.i(0,r).l(0,m)
u=K.n(new H.k(l))
t.a.push(u)
u=a1.i(0,m).l(0,m)
t=K.n(new H.k(l))
u.a.push(t)
t=a1.i(0,r).l(0,k)
u=K.n(new H.k('"'))
t.a.push(u)
u=a1.i(0,k).l(0,j)
t=K.n(new H.k('"'))
u.a.push(t)
t=a1.i(0,k).l(0,i)
u=K.n(new H.k("\\"))
t.a.push(u)
u=a1.i(0,i).l(0,k)
t=K.n(new H.k('"'))
u.a.push(t)
a1.i(0,k).l(0,k).a.push(new K.ae())
t=a1.i(0,r).l(0,h)
u=K.n(new H.k("'"))
t.a.push(u)
u=a1.i(0,h).l(0,g)
t=K.n(new H.k("'"))
u.a.push(t)
t=a1.i(0,h).l(0,f)
u=K.n(new H.k("\\"))
t.a.push(u)
u=a1.i(0,f).l(0,h)
t=K.n(new H.k("'"))
u.a.push(t)
a1.i(0,h).l(0,h).a.push(new K.ae())
t=a1.i(0,r).l(0,e)
u=K.n(new H.k("/"))
t.a.push(u)
u=a1.i(0,e).l(0,d)
t=K.n(new H.k("/"))
u.a.push(t)
t=a1.i(0,d).l(0,c)
u=K.n(new H.k("\n"))
t.a.push(u)
u=a1.i(0,d).l(0,d)
t=new K.Q()
s=[K.aH]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("\n"))
t.a.push(u)
u=a1.i(0,e).l(0,b)
t=K.n(new H.k("*"))
u.a.push(t)
t=a1.i(0,b).l(0,a)
u=K.n(new H.k("*"))
t.a.push(u)
u=a1.i(0,a).l(0,b)
t=new K.Q()
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("*"))
t.a.push(u)
u=a1.i(0,a).l(0,c)
t=K.n(new H.k("/"))
u.a.push(t)
t=a1.i(0,r).l(0,a0)
u=K.n(new H.k(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).l(0,a0)
t=K.n(new H.k(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.C("Num")
t=a1.i(0,n)
t.d=t.a.C("Num")
t=a1.i(0,m)
t.d=t.a.C("Symbol")
t=a1.i(0,j)
t.d=t.a.C("String")
t=a1.i(0,g)
t.d=t.a.C("String")
t=a1.i(0,c)
t.d=t.a.C(d)
t=a1.i(0,a0)
t.d=t.a.C(a0)
t=a1.i(0,q)
t=t.d=t.a.C(q)
u=[P.o]
t.a7(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a7(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a7(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ex.prototype={
aA:function(a){var u=this
switch(a.a){case"Builtin":u.A(a.b,"#411")
break
case"Comment":u.A(a.b,"#777")
break
case"Id":u.A(a.b,"#111")
break
case"Num":u.A(a.b,"#191")
break
case"Preprocess":u.A(a.b,"#737")
break
case"Reserved":u.A(a.b,"#119")
break
case"Symbol":u.A(a.b,"#611")
break
case"Type":u.A(a.b,"#171")
break
case"Whitespace":u.A(a.b,"#111")
break}},
aw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.fV()
e.d=e.i(0,r)
u=e.i(0,r).l(0,q)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=e.i(0,q).l(0,q)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=e.i(0,r).l(0,p)
t=K.z("0","9")
u.a.push(t)
t=e.i(0,p).l(0,p)
u=K.z("0","9")
t.a.push(u)
u=e.i(0,p).l(0,o)
t=K.n(new H.k("."))
u.a.push(t)
t=e.i(0,o).l(0,n)
u=K.z("0","9")
t.a.push(u)
u=e.i(0,n).l(0,n)
t=K.z("0","9")
u.a.push(t)
t=e.i(0,r).l(0,m)
u=K.n(new H.k(l))
t.a.push(u)
u=e.i(0,m).l(0,m)
t=K.n(new H.k(l))
u.a.push(t)
t=e.i(0,r).l(0,k)
u=K.n(new H.k("/"))
t.a.push(u)
u=e.i(0,k).l(0,j)
t=K.n(new H.k("/"))
u.a.push(t)
e.i(0,k).l(0,m).a.push(new K.ae())
t=e.i(0,j).l(0,i)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,j).l(0,j)
t=new K.Q()
s=[K.aH]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,r).l(0,h)
t=K.n(new H.k("#"))
u.a.push(t)
t=e.i(0,h).l(0,h)
u=new K.Q()
u.a=H.b([],s)
t.a.push(u)
t=K.n(new H.k("\n"))
u.a.push(t)
t=e.i(0,h).l(0,g)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,r).l(0,f)
t=K.n(new H.k(" \n\t"))
u.a.push(t)
t=e.i(0,f).l(0,f)
u=K.n(new H.k(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.C("Num")
u=e.i(0,n)
u.d=u.a.C("Num")
u=e.i(0,m)
u.d=u.a.C("Symbol")
u=e.i(0,i)
u.d=u.a.C(j)
u=e.i(0,g)
u.d=u.a.C(h)
u=e.i(0,f)
u.d=u.a.C(f)
u=e.i(0,q)
u=u.d=u.a.C(q)
t=[P.o]
u.a7(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a7(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a7(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.ey.prototype={
aA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.A(a.b,"#911")
u.A("=",t)
break
case"Id":u.A(a.b,t)
break
case"Other":u.A(a.b,t)
break
case"Reserved":u.A(a.b,"#119")
break
case"String":u.A(a.b,"#171")
break
case"Symbol":u.A(a.b,"#616")
break}},
aw:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.fV()
l.d=l.i(0,s)
u=l.i(0,s).l(0,r)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=l.i(0,r).l(0,r)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=l.i(0,r).l(0,q)
t=K.n(new H.k("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).l(0,p)
t=K.n(new H.k("</\\-!>="))
u.a.push(t)
t=l.i(0,p).l(0,p)
u=K.n(new H.k("</\\-!>="))
t.a.push(u)
u=l.i(0,s).l(0,o)
t=K.n(new H.k('"'))
u.a.push(t)
t=l.i(0,o).l(0,n)
u=K.n(new H.k('"'))
t.a.push(u)
u=l.i(0,o).l(0,"EscStr")
t=K.n(new H.k("\\"))
u.a.push(t)
t=l.i(0,"EscStr").l(0,o)
u=K.n(new H.k('"'))
t.a.push(u)
l.i(0,o).l(0,o).a.push(new K.ae())
l.i(0,s).l(0,m).a.push(new K.ae())
u=l.i(0,m).l(0,m)
t=new K.Q()
t.a=H.b([],[K.aH])
u.a.push(t)
u=K.n(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.C("Symbol")
u=l.i(0,n)
u.d=u.a.C("String")
u=l.i(0,r)
t=u.a.C(r)
u.d=t
t.a7(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.i(0,q)
t.d=t.a.C(q)
t=l.i(0,m)
t.d=t.a.C(m)
return l}}
V.fi.prototype={
bN:function(a,b){this.d=H.b([],[[P.b1,W.W]])
this.A(C.a.l(b,"\n"),"#111")},
aA:function(a){},
aw:function(){return}}
V.fz.prototype={
cg:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.H(q,"scroll",new V.fB(o),!1)},
bt:function(a){var u,t,s,r,q,p,o,n
this.dA()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.e_(a),s.toString,r=new H.k(r),r=new P.b9(s.b3(new H.aG(r,r.gk(r))).a());r.p();){s=r.gv(r)
switch(s.a){case"Bold":q=u.createElement("div")
q.className="boldPar"
q.textContent=s.b
t.appendChild(q)
break
case"Italic":q=u.createElement("div")
q.className="italicPar"
q.textContent=s.b
t.appendChild(q)
break
case"Code":q=u.createElement("div")
q.className="codePar"
q.textContent=s.b
t.appendChild(q)
break
case"Link":s=s.b
if(H.jO(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.jB(C.q,s,C.f,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+n
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
c1:function(a){var u,t,s,r=new V.e7("dart")
r.ar("dart")
u=new V.ex("glsl")
u.ar("glsl")
t=new V.ey("html")
t.ar("html")
s=C.a.dW(H.b([r,u,t],[V.c4]),new V.fC(a))
if(s!=null)return s
r=new V.fi("plain")
r.ar("plain")
return r},
br:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.A])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.iN(s).aF(s,"+")){b0[t]=C.b.aG(s,1)
a6.push(1)
u=!0}else if(C.b.aF(s,"-")){b0[t]=C.b.aG(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.c1(a8)
r.bN(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.jB(C.q,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.iZ()
j.href="#"+n
j.textContent=a7
k.appendChild(j)
l.appendChild(k)
m.appendChild(l)
o.appendChild(m)
if(u)for(i=a9,h=i,t=0;g=r.d,t<g.length;++t){s=g[t]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className="codeLineNums codeLineLight"
d=q.createElement("td")
d.className=a4
if(t>=a6.length)return H.f(a6,t)
c=a6[t]
if(c===0){++h;++i
e.textContent=""+h
d.textContent=""+i}else if(c>0){f.className="codeTableRow codeLineLightGreen"
e.className="codeLineNums codeLineGreen codeLineCenter"
d.className="codeLineNums codeLineGreen";++i
e.textContent="+"
d.textContent=""+i}else if(c<0){f.className="codeTableRow codeLineLightRed"
e.className="codeLineNums codeLineRed"
d.className="codeLineNums codeLineRed codeLineCenter";++h
e.textContent=""+h
d.textContent="-"}b=q.createElement("td")
b.className=a5
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.u)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.u)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gG(s);a2.p();)d.appendChild(a2.gv(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
dA:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.fV()
u.d=u.i(0,q)
t=u.i(0,q).l(0,p)
s=K.n(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).l(0,p)
s=new K.Q()
r=[K.aH]
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("*"))
s.a.push(t)
t=u.i(0,p).l(0,"BoldEnd")
s=K.n(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,o)
s=K.n(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).l(0,o)
s=new K.Q()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("_"))
s.a.push(t)
t=u.i(0,o).l(0,n)
s=K.n(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,m)
s=K.n(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).l(0,m)
s=new K.Q()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("`"))
s.a.push(t)
t=u.i(0,m).l(0,"CodeEnd")
s=K.n(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,l)
s=K.n(new H.k("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).l(0,k)
s=K.n(new H.k("|"))
t.a.push(s)
s=u.i(0,l).l(0,j)
t=K.n(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).l(0,l)
t=new K.Q()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("|]"))
t.a.push(s)
s=u.i(0,k).l(0,j)
t=K.n(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).l(0,k)
t=new K.Q()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("|]"))
t.a.push(s)
u.i(0,q).l(0,i).a.push(new K.ae())
s=u.i(0,i).l(0,i)
t=new K.Q()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.C(p)
s=u.i(0,n)
s.d=s.a.C(o)
s=u.i(0,"CodeEnd")
s.d=s.a.C(m)
s=u.i(0,j)
s.d=s.a.C("Link")
s=u.i(0,i)
s.d=s.a.C(i)
this.b=u}}
V.fB.prototype={
$1:function(a){P.jo(C.h,new V.fA(this.a))}}
V.fA.prototype={
$0:function(){var u=C.c.X(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.fC.prototype={
$1:function(a){return a.a===this.a}}
R.ij.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.o]
u.br("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.br("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.c8=u.h
u=J.ch.prototype
u.ca=u.h
u=P.j.prototype
u.c9=u.aC
u=W.F.prototype
u.aH=u.U
u=W.di.prototype
u.cb=u.a_
u=K.cc.prototype
u.c7=u.a4
u.b7=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"l7","kt",15)
t(P,"lh","kU",5)
t(P,"li","kV",5)
t(P,"lj","kW",5)
s(P,"jG","lf",8)
r(W,"lu",4,null,["$4"],["kZ"],12,0)
r(W,"lv",4,null,["$4"],["l_"],12,0)
var l
q(l=E.ag.prototype,"gbL",0,0,null,["$1","$0"],["bM","e9"],0,0)
q(l,"gbJ",0,0,null,["$1","$0"],["bK","e8"],0,0)
q(l,"gbH",0,0,null,["$1","$0"],["bI","e5"],0,0)
p(l,"ge3","e4",2)
p(l,"ge6","e7",2)
q(l=E.cF.prototype,"gb9",0,0,null,["$1","$0"],["bb","ba"],0,0)
o(l,"gel","bS",8)
n(l=X.cM.prototype,"gcT","cU",3)
n(l,"gcH","cI",3)
n(l,"gcN","cO",1)
n(l,"gcX","cY",9)
n(l,"gcV","cW",9)
n(l,"gd_","d0",1)
n(l,"gd3","d4",1)
n(l,"gcR","cS",1)
n(l,"gd1","d2",1)
n(l,"gcP","cQ",1)
n(l,"gd5","d6",14)
n(l,"gd7","d8",3)
n(l,"gdh","di",4)
n(l,"gdd","de",4)
n(l,"gdf","dg",4)
m(V.b7.prototype,"gk","aX",10)
m(V.G.prototype,"gk","aX",10)
q(l=U.bq.prototype,"gbc",0,0,null,["$1","$0"],["R","ck"],0,0)
p(l,"gcF","cG",11)
p(l,"gda","dc",11)
q(l=M.c9.prototype,"gY",0,0,null,["$1","$0"],["a1","cl"],0,0)
p(l,"gcJ","cK",2)
p(l,"gcL","cM",2)
q(X.cs.prototype,"gbd",0,0,null,["$1","$0"],["aa","cp"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.iA,J.a,J.S,P.d5,P.j,H.aG,P.eF,H.ca,H.hh,H.h_,P.aY,H.bm,H.dn,P.K,H.eP,H.eQ,H.eJ,P.du,P.b8,P.b9,P.cP,P.cC,P.fK,P.cG,P.i6,P.hU,P.hO,P.d4,P.p,P.e_,P.eB,P.i4,P.aQ,P.aA,P.V,P.aB,P.fg,P.cA,P.cX,P.eu,P.ew,P.b1,P.bu,P.aI,P.o,P.aK,W.e3,W.bL,W.x,W.cq,W.di,W.hZ,W.cb,W.am,W.hT,W.dz,P.hP,K.ae,K.cc,K.aH,K.fl,K.fu,L.cB,L.cH,L.cI,L.fU,O.aW,O.bx,E.dW,E.ag,E.aU,E.b2,E.hI,E.fm,E.cF,Z.cO,Z.hy,Z.c2,Z.cd,Z.cN,D.dZ,D.bp,D.P,X.c3,X.ci,X.eM,X.eT,X.by,X.f3,X.fW,X.cM,V.aX,V.ej,V.bw,V.a7,V.ao,V.cw,V.b7,V.G,M.c9,A.c_,A.dR,A.cK,A.ha,F.aZ,F.en,F.cj,F.eO,F.ct,F.fv,F.fw,F.fx,F.fy,F.bI,F.hn,F.ho,F.hr,F.ht,F.hu,F.hv,O.cE,X.it,X.fO,X.cs,V.c4,V.fz])
s(J.a,[J.eG,J.eI,J.ch,J.aC,J.bs,J.aD,H.bA,W.d,W.dO,W.c0,W.a2,W.v,W.cR,W.T,W.e8,W.eb,W.cT,W.c8,W.cV,W.ed,W.h,W.cY,W.aj,W.ez,W.d0,W.eS,W.eY,W.d6,W.d7,W.al,W.d8,W.db,W.an,W.df,W.dh,W.aq,W.dj,W.ar,W.dp,W.a9,W.ds,W.fT,W.at,W.dv,W.fY,W.hj,W.dA,W.dC,W.dE,W.dG,W.dI,P.aF,P.d2,P.aJ,P.dd,P.fk,P.dq,P.aL,P.dx,P.dS,P.cQ,P.dl])
s(J.ch,[J.fh,J.b6,J.aE])
t(J.iz,J.aC)
s(J.bs,[J.cg,J.eH])
t(P.eR,P.d5)
s(P.eR,[H.cL,W.hF,W.M,P.eq])
t(H.k,H.cL)
s(P.j,[H.m,H.bv,H.bJ,P.eD])
s(H.m,[H.ck,H.b0])
t(H.eg,H.bv)
s(P.eF,[H.cl,H.hz])
t(H.eW,H.ck)
s(P.aY,[H.fd,H.eL,H.hg,H.dY,H.fs,P.cr,P.a0,P.hi,P.hf,P.bE,P.e0,P.e6])
s(H.bm,[H.ip,H.fP,H.eK,H.ie,H.ig,H.ih,P.hB,P.hA,P.hC,P.hD,P.i3,P.i2,P.i7,P.hR,P.hS,P.eV,P.ee,P.ef,W.eh,W.f_,W.f1,W.fr,W.fJ,W.hK,W.fb,W.fa,W.hV,W.hW,W.i1,W.i5,P.i8,P.er,P.es,P.dU,E.fn,E.fo,E.fp,E.fS,D.ek,D.el,F.io,F.i9,F.hw,F.hp,F.hq,V.il,V.fB,V.fA,V.fC,R.ij])
s(H.fP,[H.fH,H.bk])
t(P.eU,P.K)
s(P.eU,[H.a4,W.hE])
t(H.cm,H.bA)
s(H.cm,[H.bM,H.bO])
t(H.bN,H.bM)
t(H.bz,H.bN)
t(H.bP,H.bO)
t(H.cn,H.bP)
s(H.cn,[H.f4,H.f5,H.f6,H.f7,H.f8,H.co,H.f9])
t(P.i_,P.eD)
t(P.hQ,P.i6)
t(P.hN,P.hU)
t(P.e1,P.fK)
t(P.ei,P.e_)
s(P.e1,[P.eA,P.hl])
t(P.hk,P.ei)
s(P.V,[P.B,P.A])
s(P.a0,[P.b4,P.eC])
s(W.d,[W.t,W.ep,W.ap,W.bQ,W.as,W.aa,W.bS,W.hx,W.bK,P.dV,P.aS])
s(W.t,[W.F,W.ay])
s(W.F,[W.l,P.i])
s(W.l,[W.dP,W.dQ,W.aT,W.aV,W.W,W.et,W.ft,W.cD,W.fM,W.fN,W.bF])
t(W.e2,W.a2)
t(W.bn,W.cR)
s(W.T,[W.e4,W.e5])
t(W.cU,W.cT)
t(W.c7,W.cU)
t(W.cW,W.cV)
t(W.ec,W.cW)
t(W.ai,W.c0)
t(W.cZ,W.cY)
t(W.eo,W.cZ)
t(W.d1,W.d0)
t(W.br,W.d1)
t(W.aM,W.h)
s(W.aM,[W.b_,W.a5,W.b5])
t(W.eZ,W.d6)
t(W.f0,W.d7)
t(W.d9,W.d8)
t(W.f2,W.d9)
t(W.dc,W.db)
t(W.cp,W.dc)
t(W.dg,W.df)
t(W.fj,W.dg)
t(W.fq,W.dh)
t(W.bR,W.bQ)
t(W.fE,W.bR)
t(W.dk,W.dj)
t(W.fF,W.dk)
t(W.fI,W.dp)
t(W.dt,W.ds)
t(W.fQ,W.dt)
t(W.bT,W.bS)
t(W.fR,W.bT)
t(W.dw,W.dv)
t(W.fX,W.dw)
t(W.aN,W.a5)
t(W.dB,W.dA)
t(W.hG,W.dB)
t(W.cS,W.c8)
t(W.dD,W.dC)
t(W.hL,W.dD)
t(W.dF,W.dE)
t(W.da,W.dF)
t(W.dH,W.dG)
t(W.hX,W.dH)
t(W.dJ,W.dI)
t(W.hY,W.dJ)
t(W.hH,W.hE)
t(W.hJ,P.cC)
t(W.i0,W.di)
t(P.X,P.hP)
t(P.d3,P.d2)
t(P.eN,P.d3)
t(P.de,P.dd)
t(P.fe,P.de)
t(P.bD,P.i)
t(P.dr,P.dq)
t(P.fL,P.dr)
t(P.dy,P.dx)
t(P.fZ,P.dy)
t(P.dT,P.cQ)
t(P.ff,P.aS)
t(P.dm,P.dl)
t(P.fG,P.dm)
s(K.cc,[K.Q,L.cJ])
s(E.dW,[Z.c1,A.cy])
s(D.P,[D.ce,D.cf,D.E])
t(U.a6,D.dZ)
s(U.a6,[U.c5,U.cx])
t(U.bq,O.aW)
t(A.ea,A.cy)
s(A.cK,[A.h2,A.h5,A.h7,A.h9,A.h3,A.bG,A.h4,A.h6,A.h8,A.hb,A.hc,A.bH,A.hd,A.he])
t(F.fD,F.en)
t(F.h1,F.eO)
t(F.hs,F.ht)
t(F.fc,F.hu)
t(O.e9,O.cE)
t(X.ev,X.fO)
s(V.c4,[V.e7,V.ex,V.ey,V.fi])
u(H.cL,H.hh)
u(H.bM,P.p)
u(H.bN,H.ca)
u(H.bO,P.p)
u(H.bP,H.ca)
u(P.d5,P.p)
u(W.cR,W.e3)
u(W.cT,P.p)
u(W.cU,W.x)
u(W.cV,P.p)
u(W.cW,W.x)
u(W.cY,P.p)
u(W.cZ,W.x)
u(W.d0,P.p)
u(W.d1,W.x)
u(W.d6,P.K)
u(W.d7,P.K)
u(W.d8,P.p)
u(W.d9,W.x)
u(W.db,P.p)
u(W.dc,W.x)
u(W.df,P.p)
u(W.dg,W.x)
u(W.dh,P.K)
u(W.bQ,P.p)
u(W.bR,W.x)
u(W.dj,P.p)
u(W.dk,W.x)
u(W.dp,P.K)
u(W.ds,P.p)
u(W.dt,W.x)
u(W.bS,P.p)
u(W.bT,W.x)
u(W.dv,P.p)
u(W.dw,W.x)
u(W.dA,P.p)
u(W.dB,W.x)
u(W.dC,P.p)
u(W.dD,W.x)
u(W.dE,P.p)
u(W.dF,W.x)
u(W.dG,P.p)
u(W.dH,W.x)
u(W.dI,P.p)
u(W.dJ,W.x)
u(P.d2,P.p)
u(P.d3,W.x)
u(P.dd,P.p)
u(P.de,W.x)
u(P.dq,P.p)
u(P.dr,W.x)
u(P.dx,P.p)
u(P.dy,W.x)
u(P.cQ,P.K)
u(P.dl,P.p)
u(P.dm,W.x)})()
var v={mangledGlobalNames:{A:"int",B:"double",V:"num",o:"String",aQ:"bool",aI:"Null",b1:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.P]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.A,[P.j,E.ag]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.b5]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aI,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.b_]},{func:1,ret:P.B},{func:1,ret:-1,args:[P.A,[P.j,U.a6]]},{func:1,ret:P.aQ,args:[W.F,P.o,P.o,W.bL]},{func:1,ret:P.aI,args:[,]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.A,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.aT.prototype
C.G=W.aV.prototype
C.H=W.W.prototype
C.K=J.a.prototype
C.a=J.aC.prototype
C.d=J.cg.prototype
C.c=J.bs.prototype
C.b=J.aD.prototype
C.L=J.aE.prototype
C.r=J.fh.prototype
C.t=W.cD.prototype
C.k=J.b6.prototype
C.u=W.aN.prototype
C.v=W.bK.prototype
C.w=new E.aU("Browser.chrome")
C.m=new E.aU("Browser.firefox")
C.n=new E.aU("Browser.edge")
C.x=new E.aU("Browser.other")
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.y=function() {
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
C.D=function(getTagFallback) {
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
C.z=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.A=function(hooks) {
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
C.C=function(hooks) {
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
C.B=function(hooks) {
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
C.p=function(hooks) { return hooks; }

C.E=new P.fg()
C.f=new P.hk()
C.F=new P.hl()
C.e=new P.hQ()
C.h=new P.aB(0)
C.I=new P.aB(5e6)
C.J=new P.eB("element",!1,!1,!1)
C.M=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.N=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.O=H.b(u([]),[P.o])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.i=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.j=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.P=new E.b2("OperatingSystem.windows")
C.Q=new E.b2("OperatingSystem.mac")
C.R=new E.b2("OperatingSystem.linux")
C.S=new E.b2("OperatingSystem.other")
C.T=new P.b8(null,2)})();(function staticFields(){$.a1=0
$.bl=null
$.j_=null
$.jJ=null
$.jF=null
$.jM=null
$.ia=null
$.ii=null
$.iQ=null
$.ba=null
$.bU=null
$.bV=null
$.iK=!1
$.Y=C.e
$.R=[]
$.af=null
$.iv=null
$.j7=null
$.j6=null
$.d_=P.ja(P.o,P.ew)
$.j8=null
$.jd=null
$.jg=null
$.jh=null
$.jk=null
$.jw=null
$.jt=null
$.ju=null
$.jv=null
$.js=null
$.jf=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lO","jR",function(){return H.jI("_$dart_dartClosure")})
u($,"lP","iV",function(){return H.jI("_$dart_js")})
u($,"lQ","jS",function(){return H.ab(H.h0({
toString:function(){return"$receiver$"}}))})
u($,"lR","jT",function(){return H.ab(H.h0({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lS","jU",function(){return H.ab(H.h0(null))})
u($,"lT","jV",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lW","jY",function(){return H.ab(H.h0(void 0))})
u($,"lX","jZ",function(){return H.ab(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lV","jX",function(){return H.ab(H.jq(null))})
u($,"lU","jW",function(){return H.ab(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lZ","k0",function(){return H.ab(H.jq(void 0))})
u($,"lY","k_",function(){return H.ab(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"mb","iW",function(){return P.kT()})
u($,"me","k5",function(){return P.kI("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"mc","k4",function(){return P.jb(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"m5","k3",function(){return Z.U(0)})
u($,"m_","k1",function(){return Z.U(511)})
u($,"m7","av",function(){return Z.U(1)})
u($,"m6","bg",function(){return Z.U(2)})
u($,"m1","bf",function(){return Z.U(4)})
u($,"m8","bh",function(){return Z.U(8)})
u($,"m9","bi",function(){return Z.U(16)})
u($,"m2","bY",function(){return Z.U(32)})
u($,"m3","bZ",function(){return Z.U(64)})
u($,"m4","k2",function(){return Z.U(96)})
u($,"ma","bj",function(){return Z.U(128)})
u($,"m0","be",function(){return Z.U(256)})
u($,"lN","jQ",function(){return new V.ej(1e-9)})
u($,"lM","C",function(){return $.jQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bA,ArrayBufferView:H.bA,Float32Array:H.bz,Float64Array:H.bz,Int16Array:H.f4,Int32Array:H.f5,Int8Array:H.f6,Uint16Array:H.f7,Uint32Array:H.f8,Uint8ClampedArray:H.co,CanvasPixelArray:H.co,Uint8Array:H.f9,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.dO,HTMLAnchorElement:W.dP,HTMLAreaElement:W.dQ,Blob:W.c0,HTMLBodyElement:W.aT,HTMLCanvasElement:W.aV,CDATASection:W.ay,CharacterData:W.ay,Comment:W.ay,ProcessingInstruction:W.ay,Text:W.ay,CSSPerspective:W.e2,CSSCharsetRule:W.v,CSSConditionRule:W.v,CSSFontFaceRule:W.v,CSSGroupingRule:W.v,CSSImportRule:W.v,CSSKeyframeRule:W.v,MozCSSKeyframeRule:W.v,WebKitCSSKeyframeRule:W.v,CSSKeyframesRule:W.v,MozCSSKeyframesRule:W.v,WebKitCSSKeyframesRule:W.v,CSSMediaRule:W.v,CSSNamespaceRule:W.v,CSSPageRule:W.v,CSSRule:W.v,CSSStyleRule:W.v,CSSSupportsRule:W.v,CSSViewportRule:W.v,CSSStyleDeclaration:W.bn,MSStyleCSSProperties:W.bn,CSS2Properties:W.bn,CSSImageValue:W.T,CSSKeywordValue:W.T,CSSNumericValue:W.T,CSSPositionValue:W.T,CSSResourceValue:W.T,CSSUnitValue:W.T,CSSURLImageValue:W.T,CSSStyleValue:W.T,CSSMatrixComponent:W.a2,CSSRotation:W.a2,CSSScale:W.a2,CSSSkew:W.a2,CSSTranslation:W.a2,CSSTransformComponent:W.a2,CSSTransformValue:W.e4,CSSUnparsedValue:W.e5,DataTransferItemList:W.e8,HTMLDivElement:W.W,DOMException:W.eb,ClientRectList:W.c7,DOMRectList:W.c7,DOMRectReadOnly:W.c8,DOMStringList:W.ec,DOMTokenList:W.ed,Element:W.F,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ai,FileList:W.eo,FileWriter:W.ep,HTMLFormElement:W.et,Gamepad:W.aj,History:W.ez,HTMLCollection:W.br,HTMLFormControlsCollection:W.br,HTMLOptionsCollection:W.br,KeyboardEvent:W.b_,Location:W.eS,MediaList:W.eY,MIDIInputMap:W.eZ,MIDIOutputMap:W.f0,MimeType:W.al,MimeTypeArray:W.f2,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cp,RadioNodeList:W.cp,Plugin:W.an,PluginArray:W.fj,RTCStatsReport:W.fq,HTMLSelectElement:W.ft,SourceBuffer:W.ap,SourceBufferList:W.fE,SpeechGrammar:W.aq,SpeechGrammarList:W.fF,SpeechRecognitionResult:W.ar,Storage:W.fI,CSSStyleSheet:W.a9,StyleSheet:W.a9,HTMLTableElement:W.cD,HTMLTableRowElement:W.fM,HTMLTableSectionElement:W.fN,HTMLTemplateElement:W.bF,TextTrack:W.as,TextTrackCue:W.aa,VTTCue:W.aa,TextTrackCueList:W.fQ,TextTrackList:W.fR,TimeRanges:W.fT,Touch:W.at,TouchEvent:W.b5,TouchList:W.fX,TrackDefaultList:W.fY,CompositionEvent:W.aM,FocusEvent:W.aM,TextEvent:W.aM,UIEvent:W.aM,URL:W.hj,VideoTrackList:W.hx,WheelEvent:W.aN,Window:W.bK,DOMWindow:W.bK,CSSRuleList:W.hG,ClientRect:W.cS,DOMRect:W.cS,GamepadList:W.hL,NamedNodeMap:W.da,MozNamedAttrMap:W.da,SpeechRecognitionResultList:W.hX,StyleSheetList:W.hY,SVGLength:P.aF,SVGLengthList:P.eN,SVGNumber:P.aJ,SVGNumberList:P.fe,SVGPointList:P.fk,SVGScriptElement:P.bD,SVGStringList:P.fL,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aL,SVGTransformList:P.fZ,AudioBuffer:P.dS,AudioParamMap:P.dT,AudioTrackList:P.dV,AudioContext:P.aS,webkitAudioContext:P.aS,BaseAudioContext:P.aS,OfflineAudioContext:P.ff,SQLResultSetRowList:P.fG})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cm.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.bN.$nativeSuperclassTag="ArrayBufferView"
H.bz.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.cn.$nativeSuperclassTag="ArrayBufferView"
W.bQ.$nativeSuperclassTag="EventTarget"
W.bR.$nativeSuperclassTag="EventTarget"
W.bS.$nativeSuperclassTag="EventTarget"
W.bT.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.jK,[])
else R.jK([])})})()
//# sourceMappingURL=test.dart.js.map
