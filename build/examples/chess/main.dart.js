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
a[c]=function(){a[c]=function(){H.oU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.ll"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.ll"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.ll(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kU:function kU(){},
ne:function(a,b,c,d){if(!!a.$iu)return new H.fE(a,b,[c,d])
return new H.cs(a,b,[c,d])},
n5:function(){return new P.dM("No element")},
nC:function(a,b){var u=J.aB(a)
if(typeof u!=="number")return u.p()
H.dI(a,0,u-1,b)},
dI:function(a,b,c,d){if(c-b<=32)H.nB(a,b,c,d)
else H.nA(a,b,c,d)},
nB:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.eZ(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.ah()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nA:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.a8(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.a8(a4+a5,2),f=g-j,e=g+j,d=J.eZ(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.ah()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.W()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.ah()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.W()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.ah()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.ah()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.W()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.h(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.h(a3,a2))
d.m(a3,a2,a0)
H.dI(a3,a4,t-2,a6)
H.dI(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.D(a6.$2(d.h(a3,t),b),0);)++t
for(;J.D(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.W()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dI(a3,t,s,a6)}else H.dI(a3,t,s,a6)},
X:function X(a){this.a=a},
u:function u(){},
cr:function cr(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
fE:function fE(a,b,c){this.a=a
this.b=b
this.$ti=c},
dr:function dr(a,b){this.a=null
this.b=a
this.c=b},
jr:function jr(a,b,c){this.a=a
this.b=b
this.$ti=c},
js:function js(a,b){this.a=a
this.b=b},
dg:function dg(){},
j9:function j9(){},
dX:function dX(){},
cW:function(a){var u,t=H.oV(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
oD:function(a){return v.types[a]},
oI:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.W(a).$iA},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.an(a)
if(typeof u!=="string")throw H.e(H.ar(a))
return u},
cy:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nt:function(a,b){var u,t
if(typeof a!=="string")H.n(H.ar(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.d(u,3)
t=u[3]
if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return},
ns:function(a){var u,t
if(typeof a!=="string")H.n(H.ar(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.kF(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cz:function(a){return H.nk(a)+H.mc(H.c9(a),0,null)},
nk:function(a){var u,t,s,r,q,p,o,n=J.W(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.E||!!n.$ic0){r=C.n(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cW(t.length>1&&C.b.bf(t,0)===36?C.b.aM(t,1):t)},
lU:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nw:function(a){var u,t,s,r=H.b([],[P.y])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ar(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.bB(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.e(H.ar(s))}return H.lU(r)},
nv:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.ar(s))
if(s<0)throw H.e(H.ar(s))
if(s>65535)return H.nw(a)}return H.lU(a)},
nu:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.bB(u,10))>>>0,56320|u&1023)}throw H.e(P.b6(a,0,1114111,null,null))},
bX:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nr:function(a){var u=H.bX(a).getFullYear()+0
return u},
np:function(a){var u=H.bX(a).getMonth()+1
return u},
nl:function(a){var u=H.bX(a).getDate()+0
return u},
nm:function(a){var u=H.bX(a).getHours()+0
return u},
no:function(a){var u=H.bX(a).getMinutes()+0
return u},
nq:function(a){var u=H.bX(a).getSeconds()+0
return u},
nn:function(a){var u=H.bX(a).getMilliseconds()+0
return u},
c:function(a){throw H.e(H.ar(a))},
d:function(a,b){if(a==null)J.aB(a)
throw H.e(H.c7(a,b))},
c7:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aC(!0,b,s,null)
u=J.aB(a)
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.O(b,a,s,null,u)
return P.dD(b,s)},
ov:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bY(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bY(a,c,!0,b,"end",u)
return new P.aC(!0,b,"end",null)},
ar:function(a){return new P.aC(!0,a,null,null)},
or:function(a){if(typeof a!=="number")throw H.e(H.ar(a))
return a},
e:function(a){var u
if(a==null)a=new P.cx()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mv})
u.name=""}else u.toString=H.mv
return u},
mv:function(){return J.an(this.dartException)},
n:function(a){throw H.e(a)},
o:function(a){throw H.e(P.ci(a))},
aT:function(a){var u,t,s,r,q,p
a=H.mt(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.t])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iZ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j_:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m3:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lP:function(a,b){return new H.hM(a,b==null?null:b.method)},
kV:function(a,b){var u=b==null,t=u?null:b.method
return new H.h2(a,t,u?null:b.receiver)},
a8:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kB(a)
if(a==null)return
if(a instanceof H.cl)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.bB(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kV(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lP(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.my()
q=$.mz()
p=$.mA()
o=$.mB()
n=$.mE()
m=$.mF()
l=$.mD()
$.mC()
k=$.mH()
j=$.mG()
i=r.as(u)
if(i!=null)return f.$1(H.kV(u,i))
else{i=q.as(u)
if(i!=null){i.method="call"
return f.$1(H.kV(u,i))}else{i=p.as(u)
if(i==null){i=o.as(u)
if(i==null){i=n.as(u)
if(i==null){i=m.as(u)
if(i==null){i=l.as(u)
if(i==null){i=o.as(u)
if(i==null){i=k.as(u)
if(i==null){i=j.as(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lP(u,i))}}return f.$1(new H.j8(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dK()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aC(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dK()
return a},
bG:function(a){var u
if(a instanceof H.cl)return a.b
if(a==null)return new H.eB(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eB(a)},
oA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
oH:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.k("Unsupported number of arguments for wrapped closure"))},
c6:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.oH)
a.$identity=u
return u},
mZ:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iz().constructor.prototype):Object.create(new H.cf(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aL
if(typeof t!=="number")return t.D()
$.aL=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lz(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mV(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lz(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mV:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.oD,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ly:H.kH
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
mW:function(a,b,c,d){var u=H.kH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lz:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mY(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mW(t,!r,u,b)
if(t===0){r=$.aL
if(typeof r!=="number")return r.D()
$.aL=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cg
return new Function(r+H.f(q==null?$.cg=H.fi("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aL
if(typeof r!=="number")return r.D()
$.aL=r+1
o+=r
r="return function("+o+"){return this."
q=$.cg
return new Function(r+H.f(q==null?$.cg=H.fi("self"):q)+"."+H.f(u)+"("+o+");}")()},
mX:function(a,b,c,d){var u=H.kH,t=H.ly
switch(b?-1:a){case 0:throw H.e(H.ny("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mY:function(a,b){var u,t,s,r,q,p,o,n=$.cg
if(n==null)n=$.cg=H.fi("self")
u=$.lx
if(u==null)u=$.lx=H.fi("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mX(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aL
if(typeof u!=="number")return u.D()
$.aL=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aL
if(typeof u!=="number")return u.D()
$.aL=u+1
return new Function(n+u+"}")()},
ll:function(a,b,c,d,e,f,g){return H.mZ(a,b,c,d,!!e,!!f,g)},
kH:function(a){return a.a},
ly:function(a){return a.c},
fi:function(a){var u,t,s,r=new H.cf("self","target","receiver","name"),q=J.kR(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oN:function(a,b){throw H.e(H.mU(a,H.cW(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.W(a)[b]
else u=!0
if(u)return a
H.oN(a,b)},
mm:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lm:function(a,b){var u
if(typeof a=="function")return!0
u=H.mm(J.W(a))
if(u==null)return!1
return H.mb(u,null,b,null)},
mU:function(a,b){return new H.fj("CastError: "+P.kN(a)+": type '"+H.f(H.on(a))+"' is not a subtype of type '"+b+"'")},
on:function(a){var u,t=J.W(a)
if(!!t.$ich){u=H.mm(t)
if(u!=null)return H.oO(u)
return"Closure"}return H.cz(a)},
oU:function(a){throw H.e(new P.ft(a))},
ny:function(a){return new H.ib(a)},
mn:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
c9:function(a){if(a==null)return
return a.$ti},
pI:function(a,b,c){return H.ca(a["$a"+H.f(c)],H.c9(b))},
oC:function(a,b,c,d){var u=H.ca(a["$a"+H.f(c)],H.c9(b))
return u==null?null:u[d]},
kq:function(a,b,c){var u=H.ca(a["$a"+H.f(b)],H.c9(a))
return u==null?null:u[c]},
as:function(a,b){var u=H.c9(a)
return u==null?null:u[b]},
oO:function(a){return H.bE(a,null)},
bE:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cW(a[0].name)+H.mc(a,1,b)
if(typeof a=="function")return H.cW(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.nU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bE("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.t])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.b.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.R)p+=" extends "+H.bE(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bE(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bE(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bE(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.oz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bE(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
mc:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ba("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bE(p,c)}return"<"+u.i(0)+">"},
ca:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eY:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c9(a)
t=J.W(a)
if(t[b]==null)return!1
return H.mk(H.ca(t[d],u),null,c,null)},
mk:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aA(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aA(a[t],b,c[t],d))return!1
return!0},
pG:function(a,b,c){return a.apply(b,H.ca(J.W(b)["$a"+H.f(c)],H.c9(b)))},
aA:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aA(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.aA(b[a],b,c,d)
if(typeof c==="number")return!1
if(a.name==="Q")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aA("type" in a?a.type:l,b,s,d)
else if(H.aA(a,b,s,d))return!0
else{if(!('$i'+"aE" in t.prototype))return!1
r=t.prototype["$a"+"aE"]
q=H.ca(r,u?a.slice(1):l)
return H.aA(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mb(a,b,c,d)
if('func' in a)return c.name==="p_"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mk(H.ca(m,u),b,p,d)},
mb:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
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
return H.oL(h,b,g,d)},
oL:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aA(c[s],d,a[s],b))return!1}return!0},
pH:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oJ:function(a){var u,t,s,r,q=$.mp.$1(a),p=$.km[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ku[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mj.$2(a,q)
if(q!=null){p=$.km[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ku[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kw(u)
$.km[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ku[q]=u
return u}if(s==="-"){r=H.kw(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mr(a,u)
if(s==="*")throw H.e(P.m4(q))
if(v.leafTags[q]===true){r=H.kw(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mr(a,u)},
mr:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lq(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kw:function(a){return J.lq(a,!1,null,!!a.$iA)},
oK:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kw(u)
else return J.lq(u,c,null,null)},
oF:function(){if(!0===$.lo)return
$.lo=!0
H.oG()},
oG:function(){var u,t,s,r,q,p,o,n
$.km=Object.create(null)
$.ku=Object.create(null)
H.oE()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ms.$1(q)
if(p!=null){o=H.oK(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
oE:function(){var u,t,s,r,q,p,o=C.u()
o=H.c5(C.v,H.c5(C.w,H.c5(C.o,H.c5(C.o,H.c5(C.x,H.c5(C.y,H.c5(C.z(C.n),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mp=new H.kr(r)
$.mj=new H.ks(q)
$.ms=new H.kt(p)},
c5:function(a,b){return a(b)||b},
lI:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.kO("Illegal RegExp pattern ("+String(p)+")",a))},
oS:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oy:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mt:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mu:function(a,b,c){var u=H.oT(a,b,c)
return u},
oT:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mt(b),'g'),H.oy(c))},
iZ:function iZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hM:function hM(a,b){this.a=a
this.b=b},
h2:function h2(a,b,c){this.a=a
this.b=b
this.c=c},
j8:function j8(a){this.a=a},
cl:function cl(a,b){this.a=a
this.b=b},
kB:function kB(a){this.a=a},
eB:function eB(a){this.a=a
this.b=null},
ch:function ch(){},
iG:function iG(){},
iz:function iz(){},
cf:function cf(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fj:function fj(a){this.a=a},
ib:function ib(a){this.a=a},
H:function H(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
h1:function h1(a){this.a=a},
h0:function h0(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b
this.c=null},
bV:function bV(a,b){this.a=a
this.$ti=b},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ek:function ek(a){this.b=a},
jt:function jt(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
cS:function(a){return a},
aU:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.c7(b,a))},
nT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.ov(a,b,c))
return b},
cw:function cw(){},
dw:function dw(){},
cv:function cv(){},
dx:function dx(){},
hG:function hG(){},
hH:function hH(){},
hI:function hI(){},
hJ:function hJ(){},
hK:function hK(){},
dy:function dy(){},
hL:function hL(){},
cJ:function cJ(){},
cK:function cK(){},
cL:function cL(){},
cM:function cM(){},
oz:function(a){return J.lG(a?Object.keys(a):[],null)},
oV:function(a){return v.mangledGlobalNames[a]},
oM:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lq:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kp:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lo==null){H.oF()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.m4("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lr()]
if(r!=null)return r
r=H.oJ(a)
if(r!=null)return r
if(typeof a=="function")return C.F
u=Object.getPrototypeOf(a)
if(u==null)return C.q
if(u===Object.prototype)return C.q
if(typeof s=="function"){Object.defineProperty(s,$.lr(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
n6:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.f5(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.b6(a,0,4294967295,"length",null))
return J.lG(new Array(a),b)},
lG:function(a,b){return J.kR(H.b(a,[b]))},
kR:function(a){a.fixed$length=Array
return a},
n7:function(a,b){return J.cZ(a,b)},
lH:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
n8:function(a,b){var u,t
for(u=a.length;b<u;){t=C.b.bf(a,b)
if(t!==32&&t!==13&&!J.lH(t))break;++b}return b},
kS:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.b.aI(a,u)
if(t!==32&&t!==13&&!J.lH(t))break}return b},
W:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dk.prototype
return J.dj.prototype}if(typeof a=="string")return J.bs.prototype
if(a==null)return J.dl.prototype
if(typeof a=="boolean")return J.fZ.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.kp(a)},
eZ:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.kp(a)},
ln:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.kp(a)},
oB:function(a){if(typeof a=="number")return J.cq.prototype
if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.c0.prototype
return a},
kn:function(a){if(typeof a=="string")return J.bs.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.c0.prototype
return a},
ko:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bt.prototype
return a}if(a instanceof P.R)return a
return J.kp(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.W(a).n(a,b)},
F:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.oI(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.eZ(a).h(a,b)},
mM:function(a,b,c){return J.ko(a).hU(a,b,c)},
mN:function(a,b,c,d){return J.ko(a).ib(a,b,c,d)},
cZ:function(a,b){return J.oB(a).ay(a,b)},
kE:function(a,b){return J.ln(a).H(a,b)},
lu:function(a,b){return J.ln(a).M(a,b)},
mO:function(a){return J.ko(a).gck(a)},
ce:function(a){return J.W(a).gK(a)},
bK:function(a){return J.ln(a).gT(a)},
aB:function(a){return J.eZ(a).gl(a)},
lv:function(a,b){return J.kn(a).iH(a,b)},
mP:function(a,b){return J.ko(a).ji(a,b)},
lw:function(a,b,c){return J.kn(a).bp(a,b,c)},
an:function(a){return J.W(a).i(a)},
kF:function(a){return J.kn(a).ez(a)},
a:function a(){},
fZ:function fZ(){},
dl:function dl(){},
dm:function dm(){},
hT:function hT(){},
c0:function c0(){},
bt:function bt(){},
aZ:function aZ(a){this.$ti=a},
kT:function kT(a){this.$ti=a},
a9:function a9(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cq:function cq(){},
dk:function dk(){},
dj:function dj(){},
bs:function bs(){}},P={
nI:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oo()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c6(new P.jx(s),1)).observe(u,{childList:true})
return new P.jw(s,u,t)}else if(self.setImmediate!=null)return P.op()
return P.oq()},
nJ:function(a){self.scheduleImmediate(H.c6(new P.jy(a),0))},
nK:function(a){self.setImmediate(H.c6(new P.jz(a),0))},
nL:function(a){P.le(C.h,a)},
le:function(a,b){var u=C.d.a8(a.a,1000)
return P.nQ(u<0?0:u,b)},
m2:function(a,b){var u=C.d.a8(a.a,1000)
return P.nR(u<0?0:u,b)},
nQ:function(a,b){var u=new P.eH()
u.fe(a,b)
return u},
nR:function(a,b){var u=new P.eH()
u.ff(a,b)
return u},
aj:function(a){return new P.ju(new P.af($.J,[a]),[a])},
ai:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
a7:function(a,b){P.nS(a,b)},
ah:function(a,b){b.cl(0,a)},
ag:function(a,b){b.bG(H.a8(a),H.bG(a))},
nS:function(a,b){var u,t=null,s=new P.ka(b),r=new P.kb(b),q=J.W(a)
if(!!q.$iaf)a.dC(s,r,t)
else if(!!q.$iaE)a.cO(s,r,t)
else{u=new P.af($.J,[null])
u.a=4
u.c=a
u.dC(s,t,t)}},
al:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.J.eq(new P.kj(u))},
pE:function(a){return new P.c2(a,1)},
nM:function(){return C.G},
nN:function(a){return new P.c2(a,3)},
nX:function(a,b){return new P.k5(a,[b])},
m8:function(a,b){var u,t,s
b.a=1
try{a.cO(new P.jJ(b),new P.jK(b),P.Q)}catch(s){u=H.a8(s)
t=H.bG(s)
P.oP(new P.jL(b,u,t))}},
jI:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.bz()
b.a=a.a
b.c=a.c
P.c1(b,t)}else{t=b.c
b.a=2
b.c=a
a.du(t)}},
c1:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.kg(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.c1(i.a,b)}h=i.a
q=h.c
u.a=t
u.b=q
s=!t
if(s){p=b.c
p=(p&1)!==0||(p&15)===8}else p=!0
if(p){p=b.b
o=p.b
if(t){n=h.b===o
n=!(n||n)}else n=!1
if(n){P.kg(j,j,h.b,q.a,q.b)
return}m=$.J
if(m!==o)$.J=o
else m=j
h=b.c
if((h&15)===8)new P.jQ(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.jP(u,b,q).$0()}else if((h&2)!==0)new P.jO(i,u,b).$0()
if(m!=null)$.J=m
h=u.b
if(!!J.W(h).$iaE){if(h.a>=4){l=p.c
p.c=null
b=p.bA(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.jI(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.bA(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
oj:function(a,b){if(H.lm(a,{func:1,args:[P.R,P.ay]}))return b.eq(a)
if(H.lm(a,{func:1,args:[P.R]}))return a
throw H.e(P.f5(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
oi:function(){var u,t
for(;u=$.c3,u!=null;){$.cU=null
t=u.b
$.c3=t
if(t==null)$.cT=null
u.a.$0()}},
om:function(){$.lj=!0
try{P.oi()}finally{$.cU=null
$.lj=!1
if($.c3!=null)$.lt().$1(P.ml())}},
mf:function(a){var u=new P.e1(a)
if($.c3==null){$.c3=$.cT=u
if(!$.lj)$.lt().$1(P.ml())}else $.cT=$.cT.b=u},
ol:function(a){var u,t,s=$.c3
if(s==null){P.mf(a)
$.cU=$.cT
return}u=new P.e1(a)
t=$.cU
if(t==null){u.b=s
$.c3=$.cU=u}else{u.b=t.b
$.cU=t.b=u
if(u.b==null)$.cT=u}},
oP:function(a){var u=null,t=$.J
if(C.e===t){P.c4(u,u,C.e,a)
return}P.c4(u,u,t,t.ce(a))},
p1:function(a){if(a==null)H.n(P.mS("stream"))
return new P.k3()},
ld:function(a,b){var u=$.J
if(u===C.e)return P.le(a,b)
return P.le(a,u.ce(b))},
nF:function(a,b){var u=$.J
if(u===C.e)return P.m2(a,b)
return P.m2(a,u.dN(b,P.dS))},
kg:function(a,b,c,d,e){var u={}
u.a=d
P.ol(new P.kh(u,e))},
md:function(a,b,c,d){var u,t=$.J
if(t===c)return d.$0()
$.J=c
u=t
try{t=d.$0()
return t}finally{$.J=u}},
me:function(a,b,c,d,e){var u,t=$.J
if(t===c)return d.$1(e)
$.J=c
u=t
try{t=d.$1(e)
return t}finally{$.J=u}},
ok:function(a,b,c,d,e,f){var u,t=$.J
if(t===c)return d.$2(e,f)
$.J=c
u=t
try{t=d.$2(e,f)
return t}finally{$.J=u}},
c4:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.ce(d):c.ii(d)
P.mf(d)},
jx:function jx(a){this.a=a},
jw:function jw(a,b,c){this.a=a
this.b=b
this.c=c},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
eH:function eH(){this.c=0},
k7:function k7(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ju:function ju(a,b){this.a=a
this.b=!1
this.$ti=b},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kj:function kj(a){this.a=a},
c2:function c2(a,b){this.a=a
this.b=b},
cP:function cP(a){var _=this
_.a=a
_.d=_.c=_.b=null},
k5:function k5(a,b){this.a=a
this.$ti=b},
e3:function e3(){},
jv:function jv(a,b){this.a=a
this.$ti=b},
ed:function ed(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
af:function af(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jF:function jF(a,b){this.a=a
this.b=b},
jN:function jN(a,b){this.a=a
this.b=b},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a,b,c){this.a=a
this.b=b
this.c=c},
jH:function jH(a,b){this.a=a
this.b=b},
jM:function jM(a,b){this.a=a
this.b=b},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jQ:function jQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jR:function jR(a){this.a=a},
jP:function jP(a,b,c){this.a=a
this.b=b
this.c=c},
jO:function jO(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a){this.a=a
this.b=null},
dN:function dN(){},
iC:function iC(){},
k3:function k3(){},
dS:function dS(){},
bL:function bL(a,b){this.a=a
this.b=b},
k9:function k9(){},
kh:function kh(a,b){this.a=a
this.b=b},
jY:function jY(){},
k_:function k_(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
na:function(a,b){return new H.H([a,b])},
nb:function(a){return H.oA(a,new H.H([null,null]))},
lK:function(a){return new P.jV([a])},
li:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nP:function(a,b){var u=new P.ei(a,b)
u.c=a.e
return u},
n4:function(a,b,c){var u,t
if(P.lk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.t])
$.ak.push(a)
try{P.nW(a,u)}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}t=P.m0(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kQ:function(a,b,c){var u,t
if(P.lk(a))return b+"..."+c
u=new P.ba(b)
$.ak.push(a)
try{t=u
t.a=P.m0(t.a,a,", ")}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lk:function(a){var u,t
for(u=$.ak.length,t=0;t<u;++t)if(a===$.ak[t])return!0
return!1},
nW:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.f(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.A()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.A();r=q,q=p){p=n.gJ(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
lM:function(a){var u,t={}
if(P.lk(a))return"{...}"
u=new P.ba("")
try{$.ak.push(a)
u.a+="{"
t.a=!0
J.lu(a,new P.hi(t,u))
u.a+="}"}finally{if(0>=$.ak.length)return H.d($.ak,-1)
$.ak.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jV:function jV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jW:function jW(a){this.a=a
this.c=this.b=null},
ei:function ei(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fX:function fX(){},
he:function he(){},
w:function w(){},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
ad:function ad(){},
k1:function k1(){},
ej:function ej(){},
fl:function fl(){},
fo:function fo(){},
fF:function fF(){},
jc:function jc(){},
jd:function jd(){},
k8:function k8(a){this.b=0
this.c=a},
lp:function(a){var u=H.nt(a,null)
if(u!=null)return u
throw H.e(P.kO(a,null))},
ox:function(a){var u=H.ns(a)
if(u!=null)return u
throw H.e(P.kO("Invalid double",a))},
n2:function(a){if(a instanceof H.ch)return a.i(0)
return"Instance of '"+H.f(H.cz(a))+"'"},
nc:function(a,b,c){var u,t,s=J.n6(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kY:function(a,b,c){var u,t=H.b([],[c])
for(u=J.bK(a);u.A();)t.push(u.gJ(u))
if(b)return t
return J.kR(t)},
la:function(a){var u,t=a.length,s=P.l4(0,null,t)
if(typeof s!=="number")return s.W()
u=s<t
return H.nv(u?C.a.eJ(a,0,s):a)},
l6:function(a){return new H.h_(a,H.lI(a,!1,!0,!1,!1,!1))},
m0:function(a,b,c){var u=J.bK(b)
if(!u.A())return a
if(c.length===0){do a+=H.f(u.gJ(u))
while(u.A())}else{a+=H.f(u.gJ(u))
for(;u.A();)a=a+c+H.f(u.gJ(u))}return a},
ma:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.i){u=$.mL().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.ir(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.nu(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n0:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n1:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
db:function(a){if(a>=10)return""+a
return"0"+a},
lC:function(a){return new P.bn(1000*a)},
kN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.an(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n2(a)},
mR:function(a){return new P.aC(!1,null,null,a)},
f5:function(a,b,c){return new P.aC(!0,a,b,c)},
mS:function(a){return new P.aC(!1,null,a,"Must not be null")},
dD:function(a,b){return new P.bY(null,null,!0,a,b,"Value not in range")},
b6:function(a,b,c,d,e){return new P.bY(b,c,!0,a,d,"Invalid value")},
l4:function(a,b,c){var u
if(typeof a!=="number")return H.c(a)
if(0<=a){if(typeof c!=="number")return H.c(c)
u=a>c}else u=!0
if(u)throw H.e(P.b6(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.c(c)
u=b>c}else u=!0
if(u)throw H.e(P.b6(b,a,c,"end",null))
return b}return c},
lW:function(a,b){if(typeof a!=="number")return a.W()
if(a<0)throw H.e(P.b6(a,0,null,b,null))},
O:function(a,b,c,d,e){var u=e==null?J.aB(b):e
return new P.fW(u,!0,a,c,"Index out of range")},
z:function(a){return new P.ja(a)},
m4:function(a){return new P.j7(a)},
m_:function(a){return new P.dM(a)},
ci:function(a){return new P.fn(a)},
k:function(a){return new P.ea(a)},
kO:function(a,b){return new P.fP(a,b)},
nd:function(a,b,c,d){var u,t,s=new Array(a)
s.fixed$length=Array
u=H.b(s,[d])
for(t=0;t<a;++t){s=b.$1(t)
if(t>=u.length)return H.d(u,t)
u[t]=s}return u},
f_:function(a){H.oM(a)},
bF:function bF(){},
aw:function aw(a,b){this.a=a
this.b=b},
M:function M(){},
bn:function bn(a){this.a=a},
fy:function fy(){},
fz:function fz(){},
bo:function bo(){},
cx:function cx(){},
aC:function aC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bY:function bY(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fW:function fW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ja:function ja(a){this.a=a},
j7:function j7(a){this.a=a},
dM:function dM(a){this.a=a},
fn:function fn(a){this.a=a},
hP:function hP(){},
dK:function dK(){},
ft:function ft(a){this.a=a},
ea:function ea(a){this.a=a},
fP:function fP(a,b){this.a=a
this.b=b},
y:function y(){},
m:function m(){},
fY:function fY(){},
bv:function bv(){},
a1:function a1(){},
Q:function Q(){},
at:function at(){},
R:function R(){},
l5:function l5(){},
ay:function ay(){},
t:function t(){},
ba:function ba(a){this.a=a},
ou:function(a){var u,t=J.W(a)
if(!!t.$ibp){u=t.gdV(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eM(a.data,a.height,a.width)},
ot:function(a){if(a instanceof P.eM)return{data:a.a,height:a.b,width:a.c}
return a},
bf:function(a){var u,t,s,r,q
if(a==null)return
u=P.na(P.t,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
os:function(a){var u={}
a.M(0,new P.kk(u))
return u},
eM:function eM(a,b,c){this.a=a
this.b=b
this.c=c},
kk:function kk(a){this.a=a},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fN:function fN(){},
jU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jX:function jX(){},
aq:function aq(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
bu:function bu(){},
hb:function hb(){},
by:function by(){},
hN:function hN(){},
hX:function hX(){},
iE:function iE(){},
p:function p(){},
bz:function bz(){},
iY:function iY(){},
eg:function eg(){},
eh:function eh(){},
es:function es(){},
et:function et(){},
eD:function eD(){},
eE:function eE(){},
eK:function eK(){},
eL:function eL(){},
f7:function f7(){},
f8:function f8(){},
f9:function f9(a){this.a=a},
fa:function fa(){},
bM:function bM(){},
hO:function hO(){},
e2:function e2(){},
dF:function dF(){},
it:function it(){},
ez:function ez(){},
eA:function eA(){}},W={
mQ:function(){var u=document.createElement("a")
return u},
kJ:function(){var u=document.createElement("canvas")
return u},
kM:function(a){return"wheel"},
lE:function(a){return W.n3(a,null,null).au(new W.fT(),P.t)},
n3:function(a,b,c){var u=W.bR,t=new P.af($.J,[u]),s=new P.jv(t,[u]),r=new XMLHttpRequest()
C.D.iX(r,"GET",a,!0)
W.V(r,"load",new W.fU(r,s),!1)
W.V(r,"error",s.gio(),!1)
r.send()
return t},
lF:function(a){var u=document.createElement("img")
u.src=a
return u},
jT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a,b,c,d){var u=W.jT(W.jT(W.jT(W.jT(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
V:function(a,b,c,d){var u=W.mi(new W.jE(c),W.l)
if(u!=null&&!0)J.mN(a,b,u,!1)
return new W.jD(a,b,u,!1)},
mi:function(a,b){var u=$.J
if(u===C.e)return a
return u.dN(a,b)},
q:function q(){},
f1:function f1(){},
f3:function f3(){},
f4:function f4(){},
d1:function d1(){},
bO:function bO(){},
bl:function bl(){},
fp:function fp(){},
L:function L(){},
cj:function cj(){},
fq:function fq(){},
av:function av(){},
aM:function aM(){},
fr:function fr(){},
fs:function fs(){},
fu:function fu(){},
fv:function fv(){},
dd:function dd(){},
de:function de(){},
fw:function fw(){},
fx:function fx(){},
jB:function jB(a,b){this.a=a
this.b=b},
a3:function a3(){},
l:function l(){},
h:function h(){},
aX:function aX(){},
fJ:function fJ(){},
fK:function fK(){},
fO:function fO(){},
aY:function aY(){},
fS:function fS(){},
cn:function cn(){},
bR:function bR(){},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
co:function co(){},
bp:function bp(){},
cp:function cp(){},
bT:function bT(){},
hf:function hf(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(a){this.a=a},
hC:function hC(){},
hD:function hD(a){this.a=a},
b2:function b2(){},
hE:function hE(){},
aO:function aO(){},
jA:function jA(a){this.a=a},
I:function I(){},
dz:function dz(){},
b4:function b4(){},
hU:function hU(){},
cA:function cA(){},
i9:function i9(){},
ia:function ia(a){this.a=a},
ic:function ic(){},
b7:function b7(){},
iq:function iq(){},
b8:function b8(){},
ir:function ir(){},
b9:function b9(){},
iA:function iA(){},
iB:function iB(a){this.a=a},
aR:function aR(){},
bb:function bb(){},
aS:function aS(){},
iH:function iH(){},
iI:function iI(){},
iT:function iT(){},
bc:function bc(){},
bZ:function bZ(){},
iW:function iW(){},
iX:function iX(){},
bA:function bA(){},
jb:function jb(){},
jq:function jq(){},
bD:function bD(){},
cI:function cI(){},
jC:function jC(){},
e5:function e5(){},
jS:function jS(){},
ep:function ep(){},
k2:function k2(){},
k4:function k4(){},
jD:function jD(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jE:function jE(a){this.a=a},
N:function N(){},
dh:function dh(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
eb:function eb(){},
ec:function ec(){},
ee:function ee(){},
ef:function ef(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
eq:function eq(){},
er:function er(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
cN:function cN(){},
cO:function cO(){},
ex:function ex(){},
ey:function ey(){},
eC:function eC(){},
eF:function eF(){},
eG:function eG(){},
cQ:function cQ(){},
cR:function cR(){},
eI:function eI(){},
eJ:function eJ(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){}},K={
a5:function(a){var u=new K.id()
u.eY(a)
return u},
f2:function f2(){},
di:function di(){},
ds:function ds(){},
b3:function b3(){this.a=null},
id:function id(){this.a=null}},L={dL:function dL(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dT:function dT(a,b,c){this.a=a
this.b=b
this.c=c},dU:function dU(a){this.b=a
this.c=null},iU:function iU(){var _=this
_.d=_.c=_.b=_.a=null},dV:function dV(a){this.b=a
this.a=this.c=null},
mq:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=V.nz("3Dart Chess"),d=[P.t]
e.b2(H.b(["This example is in development and may still have a few issues and glitches."],d))
u=W.kJ()
u.className="pageLargeCanvas"
u.id="targetCanvas"
e.a.appendChild(u)
e.ia(H.b(["buttons"],d))
e.dH(1,"About")
e.b2(H.b(["Click and drag to see the board from different angles. ","Click without dragging to select a piece, unselect a piece, or pick which movement should be made. ","The game will start with white's turn."],d))
e.b2(H.b(["3Dart Chess is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create simple browser driven video games. ","This example has no server backing it so currently there is no networked two player mode. ","It would take very little to turn this into a simple online game."],d))
e.b2(H.b(["\xab[Back to Examples List|../../]"],d))
e.dH(1,"Help wanted")
e.b2(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want ","to learn more about it, check out the ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/chess]."],d))
e.b2(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],d))
t=new Q.fR()
t.a=!0
s=Q.lZ()
d=$.aK()
e=$.aW()
d=d.a
e=e.a
if(typeof d!=="number")return d.X()
if(typeof e!=="number")return H.c(e)
r=d|e
q=$.aJ().a
if(typeof q!=="number")return H.c(q)
p=1&q
s.B(new Q.i(1,1),new Q.v((r|p)>>>0))
o=$.cb()
o=o.a
if(typeof o!=="number")return o.X()
n=o|e
s.B(new Q.i(1,2),new Q.v((n|p)>>>0))
m=$.aV()
m=m.a
if(typeof m!=="number")return m.X()
l=m|e
s.B(new Q.i(1,3),new Q.v((l|p)>>>0))
k=$.bg()
k=k.a
if(typeof k!=="number")return k.X()
s.B(new Q.i(1,4),new Q.v((k|e|p)>>>0))
j=$.am()
j=j.a
if(typeof j!=="number")return j.X()
s.B(new Q.i(1,5),new Q.v((j|e|p)>>>0))
i=2&q
s.B(new Q.i(1,6),new Q.v((l|i)>>>0))
s.B(new Q.i(1,7),new Q.v((n|i)>>>0))
s.B(new Q.i(1,8),new Q.v((r|i)>>>0))
r=$.cc()
r=r.a
if(typeof r!=="number")return r.X()
e=r|e
s.B(new Q.i(2,1),new Q.v((e|p)>>>0))
s.B(new Q.i(2,2),new Q.v((e|i)>>>0))
n=3&q
s.B(new Q.i(2,3),new Q.v((e|n)>>>0))
l=4&q
s.B(new Q.i(2,4),new Q.v((e|l)>>>0))
h=5&q
s.B(new Q.i(2,5),new Q.v((e|h)>>>0))
g=6&q
s.B(new Q.i(2,6),new Q.v((e|g)>>>0))
f=7&q
s.B(new Q.i(2,7),new Q.v((e|f)>>>0))
q=8&q
s.B(new Q.i(2,8),new Q.v((e|q)>>>0))
e=$.a_()
e=e.a
if(typeof e!=="number")return H.c(e)
r|=e
s.B(new Q.i(7,1),new Q.v((r|p)>>>0))
s.B(new Q.i(7,2),new Q.v((r|i)>>>0))
s.B(new Q.i(7,3),new Q.v((r|n)>>>0))
s.B(new Q.i(7,4),new Q.v((r|l)>>>0))
s.B(new Q.i(7,5),new Q.v((r|h)>>>0))
s.B(new Q.i(7,6),new Q.v((r|g)>>>0))
s.B(new Q.i(7,7),new Q.v((r|f)>>>0))
s.B(new Q.i(7,8),new Q.v((r|q)>>>0))
d|=e
s.B(new Q.i(8,1),new Q.v((d|p)>>>0))
r=o|e
s.B(new Q.i(8,2),new Q.v((r|p)>>>0))
q=m|e
s.B(new Q.i(8,3),new Q.v((q|p)>>>0))
s.B(new Q.i(8,4),new Q.v((k|e|p)>>>0))
s.B(new Q.i(8,5),new Q.v((j|e|p)>>>0))
s.B(new Q.i(8,6),new Q.v((q|i)>>>0))
s.B(new Q.i(8,7),new Q.v((r|i)>>>0))
s.B(new Q.i(8,8),new Q.v((d|i)>>>0))
t.c=s
P.ld(C.h,new L.kv(t))},
kv:function kv(a){this.a=a}},O={
kK:function(a){var u=new O.aD([a])
u.bq(a)
return u},
aD:function aD(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cu:function cu(){this.b=this.a=null},
mo:function(a){var u=C.b.iL(a,"/")
if(u<=0)return a
return C.b.bp(a,0,u)},
mh:function(a){var u,t,s=P.l6("([^\\s]+)")
$.mg=s
u=s.iC(a)
if(u==null)return H.b([],[P.t])
s=u.b
if(1>=s.length)return H.d(s,1)
t=s[1]
return H.b([t,C.b.ez(C.b.aM(a,t.length))],[P.t])},
ki:function(a){var u,t=H.b([],[P.t]),s=P.l6("([^\\s]+)")
$.mg=s
s=new H.jt(s,a,0)
for(;s.A();){u=s.d.b
if(1>=u.length)return H.d(u,1)
t.push(u[1])}return t},
be:function(a){var u,t=O.ki(a),s=H.b([],[P.M]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
s.push(P.ox(t[u]))}return s},
dv:function(a,b,c){return O.ni(a,b,!1)},
ni:function(a,b,c){var u=0,t=P.aj([P.a1,P.t,O.b_]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dv=P.al(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.mo(a)
k=new O.ke(b)
k.b=new H.H([P.t,O.b_])
n=k
u=7
return P.a7(W.lE(a),$async$dv)
case 7:m=e
u=8
return P.a7(n.aD(m,o,!1),$async$dv)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.a8(h)
P.f_(a+": "+H.f(l))
j=P.k(a+": "+H.f(l))
throw H.e(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$dv,t)},
ax:function(a,b){var u=null,t=null,s=!1
return O.nj(a,b)},
nj:function(a,a0){var u=0,t=P.aj(E.ap),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$ax=P.al(function(a1,a2){if(a1===1){q=a2
u=r}while(true)switch(u){case 0:e=null
d=null
c=!1
r=4
o=O.mo(a)
k=e
j=new O.kf(a0)
j.b=H.b([],[O.eX])
j.c=H.b([],[V.a2])
j.d=H.b([],[V.C])
i=new H.H([P.t,O.b_])
j.e=i
j.f=d
j.r=""
h=O.a4()
g=h.r
g.sq(0,new V.r(0.35,0.35,0.35))
g=h.x
g.sq(0,new V.r(0.65,0.65,0.65))
j.x=h
j.Q=E.P(null,!0,null,"",null,null)
if(k!=null)i.ax(0,k)
j.bC()
n=j
u=7
return P.a7(W.lE(a),$async$ax)
case 7:m=a2
u=8
return P.a7(n.aD(m,o,c),$async$ax)
case 8:k=d
if(k!=null){i=new O.hY()
i.b=!0
k.C(i)}k=n.giA()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
b=q
l=H.a8(b)
P.f_(a+": "+H.f(l))
k=P.k(a+": "+H.f(l))
throw H.e(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$ax,t)},
ke:function ke(a){this.a=a
this.c=this.b=null},
eX:function eX(a){this.a=a
this.b=null},
kf:function kf(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
hY:function hY(){this.b=null},
a4:function(){var u,t=new O.b_(),s=O.kK(V.b0)
t.e=s
s.ba(t.gfU(),t.gfW())
s=new O.aN(t,"emission")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
t.f=s
s=new O.aN(t,"ambient")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
t.r=s
s=new O.aN(t,"diffuse")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
t.x=s
s=new O.aN(t,"invDiffuse")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
t.y=s
s=new O.hp(t,"specular")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
s.ch=100
t.z=s
s=new O.hl(t,"bump")
s.c=new A.T(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aN(t,"reflect")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
t.cx=s
s=new O.ho(t,"refract")
s.c=new A.T(!1,!1,!1)
s.f=new V.r(0,0,0)
s.ch=1
t.cy=s
s=new O.hk(t,"alpha")
s.c=new A.T(!1,!1,!1)
s.f=1
t.db=s
s=new D.dp()
s.bq(D.ac)
s.e=H.b([],[D.fc])
s.f=H.b([],[D.ck])
s.r=H.b([],[D.hV])
s.x=H.b([],[D.is])
s.z=s.y=null
s.cV(s.gfS(),s.ght(),s.ghx())
t.dx=s
u=new O.hn()
u.b=new V.ao(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.E():u
s.j(0,t.ghW())
s=t.dx
u=s.z
s=u==null?s.z=D.E():u
s.j(0,t.gaF())
t.fr=null
return t},
b_:function b_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a,b){this.a=a
this.b=b},
hr:function hr(){},
hs:function hs(a,b){this.a=a
this.b=b},
ht:function ht(){},
hu:function hu(a,b){this.a=a
this.b=b},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
hx:function hx(){},
hk:function hk(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ct:function ct(){},
hl:function hl(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aN:function aN(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hn:function hn(){var _=this
_.e=_.d=_.c=_.b=null},
ho:function ho(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hp:function hp(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dH:function dH(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
io:function io(){this.c=this.b=this.a=null},
dO:function dO(){}},E={
P:function(a,b,c,d,e,f){var u=new E.ap()
u.am(a,b,c,d,e,f)
return u},
nx:function(a,b){var u=new E.i1(a)
u.eW(a,b)
return u},
nD:function(a,b,c,d,e){var u,t,s=J.W(a)
if(!!s.$ibO)return E.m1(a,!0,!0,!0,!1)
u=W.kJ()
t=u.style
t.width="100%"
t.height="100%"
s.gck(a).j(0,u)
return E.m1(u,!0,!0,!0,!1)},
m1:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dQ(),p=C.f.cS(a,"webgl2",P.nb(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.n(P.k("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nx(p,a)
u=new T.iM(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dY(a)
t=new X.h3()
t.d=P.lK(P.y)
u.b=t
t=new X.hF(u)
t.f=0
t.r=V.b5()
t.x=V.b5()
t.ch=t.Q=1
u.c=t
t=new X.hg(u)
t.r=0
t.x=V.b5()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iV(u)
t.f=V.b5()
t.r=V.b5()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dN,P.R]])
u.z=t
s=document
t.push(W.V(s,"contextmenu",u.gh3(),!1))
u.z.push(W.V(a,"focus",u.gh9(),!1))
u.z.push(W.V(a,"blur",u.gfY(),!1))
u.z.push(W.V(s,"keyup",u.ghf(),!1))
u.z.push(W.V(s,"keydown",u.ghd(),!1))
u.z.push(W.V(a,"mousedown",u.ghj(),!1))
u.z.push(W.V(a,"mouseup",u.ghn(),!1))
u.z.push(W.V(a,r,u.ghl(),!1))
t=u.z
W.kM(a)
W.kM(a)
t.push(W.V(a,W.kM(a),u.ghp(),!1))
u.z.push(W.V(s,r,u.gh5(),!1))
u.z.push(W.V(s,"mouseup",u.gh7(),!1))
u.z.push(W.V(s,"pointerlockchange",u.ghr(),!1))
u.z.push(W.V(a,"touchstart",u.ghH(),!1))
u.z.push(W.V(a,"touchend",u.ghD(),!1))
u.z.push(W.V(a,"touchmove",u.ghF(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.aw(Date.now(),!1)
q.db=0
q.dw()
return q},
fd:function fd(){},
ap:function ap(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a){this.a=a},
dQ:function dQ(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iQ:function iQ(a){this.a=a}},Z={
lh:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cS(c)),35044)
a.bindBuffer(b,null)
return new Z.e0(b,u)},
az:function(a){return new Z.bd(a)},
e0:function e0(a,b){this.a=a
this.b=b},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
cH:function cH(a){this.a=a},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bS:function bS(a,b,c){this.a=a
this.b=b
this.c=c},
bd:function bd(a){this.a=a}},D={
E:function(){var u=new D.bP()
u.d=0
return u},
fk:function fk(){},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=null},
fH:function fH(a){this.a=a},
fI:function fI(a){this.a=a},
a0:function a0(){this.b=null},
bq:function bq(){this.b=null},
br:function br(){this.b=null},
x:function x(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
lB:function(){var u=new D.ck()
u.c=new V.r(1,1,1)
u.a=V.nH()
u.d=V.jh()
u.e=V.nG()
u.sq(0,null)
return u},
fc:function fc(){},
ck:function ck(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ac:function ac(){},
dp:function dp(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hV:function hV(){},
is:function is(){}},X={d4:function d4(a,b){this.a=a
this.b=b},dn:function dn(a,b){this.a=a
this.b=b},h3:function h3(){this.d=this.b=this.a=null},dq:function dq(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hg:function hg(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},aF:function aF(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hF:function hF(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hW:function hW(){},cB:function cB(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iV:function iV(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dY:function dY(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kP:function(a){var u=new X.fQ(),t=new V.ao(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.l7()
u.r=t
return u},
lR:function(a){var u,t,s=new X.dA()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gt().j(0,s.gfg())
t=new D.x("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.B().a)){s.c=1.0471975511965976
t=new D.x("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.B().a)){s.d=0.1
t=new D.x("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.B().a)){s.e=2000
t=new D.x("far",t,2000)
t.b=!0
s.a1(t)}return s},
fb:function fb(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kI:function kI(){},
fQ:function fQ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fV:function fV(){this.b=this.a=null},
dA:function dA(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iF:function iF(){}},V={
kL:function(a){var u,t,s=a.length
if(0>=s)return H.d(a,0)
u=a[0]
if(1>=s)return H.d(a,1)
t=a[1]
if(2>=s)return H.d(a,2)
s=a[2]
if(typeof u!=="number")return u.W()
if(u<0)u=0
else if(u>1)u=1
if(typeof t!=="number")return t.W()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.W()
if(s<0)s=0
else if(s>1)s=1
return new V.r(u,t,s)},
n_:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.c.b6(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.r(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.r(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.r(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.r(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.r(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.r(p,o,n)}},
d5:function(a,b,c,d){var u=a/255,t=b/255,s=c/255,r=d/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.ao(u,t,s,r)},
oW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cT(a-b,u)
return(a<0?a+u:a)+b},
K:function(a,b,c){if(a==null)return C.b.at("null",c)
return C.b.at(C.c.ex(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
c8:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.t])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.K(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.b.at(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
cV:function(a){return C.c.jr(Math.pow(2,C.j.b6(Math.log(H.or(a))/Math.log(2))))},
bw:function(){var u=$.lO
return u==null?$.lO=V.b1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
b1:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
du:function(a,b,c){return V.b1(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
l0:function(a,b,c,d){return V.b1(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
lN:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b1(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
l_:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.b1(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kZ:function(a,b,c){var u=c.v(0,Math.sqrt(c.F(c))),t=b.bi(u),s=t.v(0,Math.sqrt(t.F(t))),r=u.bi(s),q=new V.C(a.a,a.b,a.c),p=s.O(0).F(q),o=r.O(0).F(q),n=u.O(0).F(q)
return V.b1(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b5:function(){var u=$.lT
return u==null?$.lT=new V.a2(0,0):u},
l2:function(){var u=$.aP
return u==null?$.aP=new V.Z(0,0,0):u},
l7:function(){var u=$.lY
return u==null?$.lY=V.lX(0,0,1,1):u},
lX:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dE(a,b,c,d)},
e_:function(){var u=$.m7
return u==null?$.m7=new V.C(0,0,0):u},
nG:function(){var u=$.je
return u==null?$.je=new V.C(-1,0,0):u},
jh:function(){var u=$.jf
return u==null?$.jf=new V.C(0,1,0):u},
nH:function(){var u=$.jg
return u==null?$.jg=new V.C(0,0,1):u},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fG:function fG(a){this.a=a},
dt:function dt(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b0:function b0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a2:function a2(a,b){this.a=a
this.b=b},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
aQ:function aQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dE:function dE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
S:function S(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
oQ:function(a){P.nF(C.C,new V.kx(a))},
nz:function(a){var u=new V.ij()
u.eZ(a,!0)
return u},
kx:function kx(a){this.a=a},
ij:function ij(){this.b=this.a=null},
il:function il(a){this.a=a},
ik:function ik(a){this.a=a}},U={
lA:function(){var u=new U.fm()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bm:function(a){var u=new U.d9()
u.sV(0,a)
return u},
fm:function fm(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d9:function d9(){this.b=this.a=null},
cm:function cm(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aG:function aG(){},
dZ:function dZ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lD:function(){var u,t,s=new M.df()
s.a=!0
u=O.kK(E.ap)
s.e=u
u.ba(s.gh_(),s.gh1())
s.y=s.x=s.r=s.f=null
t=X.kP(null)
s.sb4(null)
s.sb9(0,t)
return s},
d8:function d8(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
da:function da(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
df:function df(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aH:function aH(){}},A={
nf:function(a,b){var u=a.bj,t=new A.hj(b,u)
t.bR(b,u)
t.eS(a,b)
return t},
ng:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gaj(a3)+a4.gaj(a4)+a5.gaj(a5)+a6.gaj(a6)+a7.gaj(a7)+a8.gaj(a8)+a9.gaj(a9)+b0.gaj(b0)+b1.gaj(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.o)(b2),++t)c+="_"+H.f(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.o)(b3),++t)c+="_"+H.f(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.o)(b4),++t)c+="_"+H.f(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.o)(b5),++t)c+="_"+H.f(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(q=b4.length,t=0;t<q;++t,r=!0)s+=b4[t].b
for(p=b5.length,t=0;t<p;++t,r=!0)s+=b5[t].b
o=a9.a||a9.b||!1||b0.a||b0.b||!1
n=u>0
if(!(a4.a||a4.b||!1))if(!(a5.a||a5.b||!1)){u=a6.a||a6.b||!1||a7.a||a7.b||!1
m=u}else m=!0
else m=!0
u=!a7.a
l=!u||a7.b||!1||n||q>0||o
if(!(a5.a||a5.b||!1))k=a6.a||a6.b||!1||!u||a7.b||!1
else k=!0
if(!k)j=a8.a||a8.b||!1||o
else j=!0
i=a8.a||a8.b||!1
h=a3.b||a4.b||a5.b||a6.b||a7.b||a8.b||a9.b||b0.b||b1.b
g=a2>0
f=j||i||l||!1
e=n&&k
a=a&&h
d=$.au()
if(j){u=$.bj()
d=new Z.bd(d.a|u.a)}if(i){u=$.bi()
d=new Z.bd(d.a|u.a)}if(h){u=$.bk()
d=new Z.bd(d.a|u.a)}if(g){u=$.bh()
d=new Z.bd(d.a|u.a)}return new A.hm(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
kc:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kd:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kc(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.f0(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
o1:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kc(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   return emissionClr*texture2D(emissionTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.b){t=u+"   return texture2D(emissionTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
nY:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kd(b,t,"ambient")
b.a+="\n"},
o_:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kd(b,t,"diffuse")
t=b.a+="\n"
t+="vec3 diffuse(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   float scalar = dot(norm, -litVec);\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return diffuseColor*scalar;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
o2:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kd(b,t,"invDiffuse")
t=b.a+="\n"
t+="vec3 invDiffuse(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   float scalar = 1.0 - clamp(dot(norm, -litVec), 0.0, 1.0);\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return invDiffuseColor*scalar;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
o8:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kd(b,t,"specular")
t=b.a+="\n"
t+="vec3 specular(vec3 norm, vec3 litVec)\n"
b.a=t
t+="{\n"
b.a=t
t+="   if(dot(norm, -litVec) < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   vec3 lightRef = normalize(reflect(litVec, norm));\n"
b.a=t
t+="   float scalar = dot(lightRef, -normalize(viewPos));\n"
b.a=t
t+="   if(scalar < 0.0) return vec3(0.0, 0.0, 0.0);\n"
b.a=t
t+="   return specularColor*pow(scalar, shininess);\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
o4:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
t=a.f
s=t.b
if(s){u+="uniform sampler2D bumpTxt;\n"
b.a=u
u=b.a=u+"\n"}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=t.a
if(!(t||s||!1)||t)u=b.a=u+"   return normalize(normalVec);\n"
else{u=(s?b.a=u+"   vec3 color = texture2D(bumpTxt, txt2D).rgb;\n":b.a=u+"   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n")+"   vec3 n = normalize(normalVec);\n"
b.a=u
u+="   vec3 b = normalize(binormalVec);\n"
b.a=u
u+="   vec3 c = normalize(cross(b, n));\n"
b.a=u
u+="   b = cross(n, c);\n"
b.a=u
u+="   mat3 mat = mat3( b.x,  b.y,  b.z,\n"
b.a=u
u+="                   -c.x, -c.y, -c.z,\n"
b.a=u
u+="                    n.x,  n.y,  n.z);\n"
b.a=u
u=b.a=u+"   return mat * normalize(2.0*color - 1.0);\n"}u+="}\n"
b.a=u
b.a=u+"\n"},
o6:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kc(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   vec3 scalar = reflectClr*texture2D(reflectTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.b){t=u+"   vec3 scalar = texture2D(reflectTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
o7:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kc(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.b){t=u+"   vec3 scalar = refractClr*texture2D(refractTxt, txt2D).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.b){t=u+"   vec3 scalar = texture2D(refractTxt, txt2D).rgb;\n"
b.a=t}else t=u
t+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=t
t+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
nZ:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.f0(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 startPnt;\n"
c.a=r
r+="   vec3 endPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.w()
u=(u&4)!==0
if(u){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+o+"];\n"
r+="\n"
c.a=r
r+="vec3 "+t+"ClosestPoint("+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lineVec = lit.endPnt - lit.startPnt;\n"
c.a=r
r+="   float lineLen2 = dot(lineVec, lineVec);\n"
c.a=r
r+="   if(lineLen2 <= 0.0001) return lit.startPnt;\n"
c.a=r
r+="   float t = dot(objPos - lit.startPnt, lineVec)/lineLen2;\n"
c.a=r
r+="   if(t <= 0.0) return lit.startPnt;\n"
c.a=r
r+="   if(t >= 1.0) return lit.endPnt;\n"
c.a=r
r+="   return lit.startPnt + t*lineVec;\n"
c.a=r
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Intensity(vec3 normDir, vec3 litPnt, "+s+" lit)\n"
c.a=r
r+="{\n"
c.a=r
if(u){r+="   float dist = length(objPos - litPnt);\n"
c.a=r
r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.t]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.u(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
u=a.b
if(u.a||u.b||!1)q.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
q.push("highLight")
u=c.a+="   vec3 litPnt  = "+t+"ClosestPoint(lit);\n"
u+="   vec3 litView = (viewMat*vec4(litPnt, 1.0)).xyz;\n"
c.a=u
u+="   vec3 normDir = normalize(viewPos - litView);\n"
c.a=u
u+="   vec3 intensity = "+t+"Intensity(normDir, litPnt, lit);\n"
c.a=u
c.a=u+"   if(length(intensity) > 0.0001) {\n"
p=H.b([],r)
u=a.c
if(u.a||u.b||!1)p.push("diffuse(norm, normDir)")
u=a.d
if(u.a||u.b||!1)p.push("invDiffuse(norm, normDir)")
u=a.e
if(u.a||u.b||!1)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.a.u(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(q," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
c.a=u+"   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
o=c.a+="   for(int i = 0; i < "+o+"; ++i)\n"
o+="   {\n"
c.a=o
o+="      if(i >= "+t+"Count) break;\n"
c.a=o
o+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=o
o+="   }\n"
c.a=o
o+="   return lightAccum;\n"
c.a=o
o+="}\n"
c.a=o
c.a=o+"\n"},
o0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.f0(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.w()
u=(u&1)!==0
if(u){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r=c.a=r+"   vec3 objDir;\n"}r+="   vec3 viewDir;\n"
c.a=r
r+="   vec3 color;\n"
c.a=r
r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+l+"];\n"
if(u)for(q=0;q<l;++q)r=c.a+="uniform sampler2D "+t+"sTexture2D"+q+";\n"
r+="\n"
c.a=r
p=u?", sampler2D txt2D":""
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+p+")\n"
c.a=r
c.a=r+"{\n"
r=[P.t]
o=H.b([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(r.a||r.b||!1)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(r.a||r.b||!1)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(r.a||r.b||!1)m.push("specular(norm, lit.viewDir)")
if(u){r=c.a+="   vec3 offset = objPos + lit.objDir*dot(objPos, lit.objDir);\n"
r+="   float tu = dot(offset, lit.objUp);\n"
c.a=r
r+="   float tv = dot(offset, lit.objRight);\n"
c.a=r
r+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=r
r+="   vec3 intensity = texture2D(txt2D, txtLoc).xyz;\n"
c.a=r
c.a=r+"   if(length(intensity) > 0.0001)\n"
c.a+="      highLight = intensity*("+C.a.u(m," + ")+");\n"}else c.a+="   highLight = "+C.a.u(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.u(o," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(u){for(u=r,q=0;q<l;++q){c.a+="   if("+t+"Count <= "+q+") return lightAccum;\n"
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+q+"], "+t+"sTexture2D"+q+");\n"}l=u}else{l=c.a+="   for(int i = 0; i < "+l+"; ++i)\n"
l+="   {\n"
c.a=l
l+="      if(i >= "+t+"Count) break;\n"
c.a=l
l+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=l
l=c.a=l+"   }\n"}l+="   return lightAccum;\n"
c.a=l
l+="}\n"
c.a=l
c.a=l+"\n"},
o5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.f0(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 point;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.w()
q=(u&3)!==0
if(q){r+="   mat3 invViewRotMat;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&4)!==0
if(o){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+j+"];\n"
u=(u&1)!==0
if(u)for(n=0;n<j;++n)r=c.a+="uniform samplerCube "+t+"sTextureCube"+n+";\n"
r+="\n"
c.a=r
m=u?", samplerCube txtCube":""
if(p)m+=", samplerCube shadowCube"
r+="vec3 "+t+"Intensity(vec3 normDir, "+s+" lit"+m+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   float dist = length(objPos - lit.point);\n"
if(o){r+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=r
r+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
r+="\n"
c.a=r}if(q)r=c.a=r+"   vec3 invNormDir = lit.invViewRotMat*normDir;\n"
if(p){r+="   float depth = dot(textureCube(shadowCube, invNormDir), lit.shadowAdj);\n"
c.a=r
r+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=r
r+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=r
c.a=r+"\n"}r=[P.t]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.u(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
o=a.b
if(o.a||o.b||!1)l.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
l.push("highLight")
m=u?", txtCube":""
if(p)m+=", shadowCube"
o=c.a+="   vec3 normDir = normalize(viewPos - lit.viewPnt);\n"
o+="   vec3 intensity = "+t+"Intensity(normDir, lit"+m+");\n"
c.a=o
c.a=o+"   if(length(intensity) > 0.0001) {\n"
k=H.b([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.u(l," + ")+");\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=r
if(q){for(n=0;n<j;++n){c.a+="   if("+t+"Count <= "+n+") return lightAccum;\n"
m=u?", "+t+"sTextureCube"+n:""
if(p)m+=", "+t+"sShadowCube"+n
r=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+n+"]"+m+");\n"}j=r}else{j=c.a+="   for(int i = 0; i < "+j+"; ++i)\n"
j+="   {\n"
c.a=j
j+="      if(i >= "+t+"Count) break;\n"
c.a=j
j+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=j
j=c.a=j+"   }\n"}j+="   return lightAccum;\n"
c.a=j
j+="}\n"
c.a=j
c.a=j+"\n"},
o9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.f0(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r+="{\n"
c.a=r
r+="   vec3 objPnt;\n"
c.a=r
r+="   vec3 objDir;\n"
c.a=r
r+="   vec3 viewPnt;\n"
c.a=r
r=c.a=r+"   vec3 color;\n"
if(typeof u!=="number")return u.w()
q=(u&3)!==0
if(q){r+="   vec3 objUp;\n"
c.a=r
r+="   vec3 objRight;\n"
c.a=r
r+="   float tuScalar;\n"
c.a=r
r+="   float tvScalar;\n"
c.a=r}p=(u&2)!==0
if(p){r+="   vec4 shadowAdj;\n"
c.a=r}o=(u&8)!==0
if(o){r+="   float cutoff;\n"
c.a=r
r+="   float coneAngle;\n"
c.a=r}n=(u&4)!==0
if(n){r+="   float att0;\n"
c.a=r
r+="   float att1;\n"
c.a=r
r=c.a=r+"   float att2;\n"}r+="};\n"
c.a=r
r+="\n"
c.a=r
c.a=r+("uniform int "+t+"Count;\n")
r=c.a+="uniform "+s+" "+t+"s["+g+"];\n"
m=(u&1)!==0
if(m)for(l=0;l<g;++l)r=c.a+=h+t+"sTexture2D"+l+";\n"
if(p)for(l=0;l<g;++l)r=c.a+=h+t+"sShadow2D"+l+";\n"
r+="\n"
c.a=r
k=m?", sampler2D txt2D":""
if(p)k+=", sampler2D shadow2D"
r+="vec3 "+t+"Intensity("+s+" lit"+k+")\n"
c.a=r
r+="{\n"
c.a=r
r=c.a=r+"   vec3 dir = objPos - lit.objPnt;\n"
if((u&6)!==0){u=r+"   float dist = length(dir);\n"
c.a=u}else u=r
if(n){u+="   float attenuation = 1.0/(lit.att0 + (lit.att1 + lit.att2*dist)*dist);\n"
c.a=u
u+="   if(attenuation <= 0.005) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u=c.a=u+"\n"}u+="   vec3 normDir = normalize(dir);\n"
c.a=u
u+="   float zScale = dot(normDir, lit.objDir);\n"
c.a=u
u=c.a=u+"   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
if(o){u+="   float angle = acos(zScale);\n"
c.a=u
u+="   float scale = (lit.cutoff-angle) / (lit.cutoff-lit.coneAngle);\n"
c.a=u
u+="   if(scale <= 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   if(scale >= 1.0) scale = 1.0;\n"
c.a=u
u+="\n"
c.a=u}if(q){u+="   normDir = normDir / zScale;\n"
c.a=u
u+="   float tu = 0.5 - dot(normDir, lit.objRight)*lit.tuScalar;\n"
c.a=u
u+="   if((tu < 0.0) || (tu > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   float tv = dot(normDir, lit.objUp)*lit.tvScalar + 0.5;\n"
c.a=u
u+="   if((tv < 0.0) || (tv > 1.0)) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
u+="   vec2 txtLoc = vec2(tu, tv);\n"
c.a=u
u=c.a=u+"\n"}if(p){u+="   float depth = dot(texture2D(shadow2D, vec2(txtLoc.x, 1.0-txtLoc.y)), lit.shadowAdj);\n"
c.a=u
u+="   float dist2 = (dist - 20.0) / (1.0 - 20.0);\n"
c.a=u
u+="   if(depth > dist2) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
c.a=u+"\n"}u=[P.t]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.u(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
r=a.b
if(r.a||r.b||!1)j.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
j.push("highLight")
k=m?", txt2D":""
if(p)k+=", shadow2D"
r=c.a+="   vec3 intensity = "+t+"Intensity(lit"+k+");\n"
r+="   if(length(intensity) > 0.0001) {\n"
c.a=r
c.a=r+"      vec3 litVec = normalize(viewPos - lit.viewPnt);\n"
i=H.b([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.u(j," + ")+");\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 all"+s+"Values(vec3 norm)\n"
c.a=u
u+="{\n"
c.a=u
u+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(q){for(l=0;l<g;++l){c.a+="   if("+t+"Count <= "+l+") return lightAccum;\n"
k=m?", "+t+"sTexture2D"+l:""
if(p)k+=", "+t+"sShadow2D"+l
u=c.a+="   lightAccum += "+t+"Value(norm, "+t+"s["+l+"]"+k+");\n"}g=u}else{g=c.a+="   for(int i = 0; i < "+g+"; ++i)\n"
g+="   {\n"
c.a=g
g+="      if(i >= "+t+"Count) break;\n"
c.a=g
g+="      lightAccum += "+t+"Value(norm, "+t+"s[i]);\n"
c.a=g
g=c.a=g+"   }\n"}g+="   return lightAccum;\n"
c.a=g
g+="}\n"
c.a=g
c.a=g+"\n"},
o3:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.t])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oa:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ba("")
j.a="precision mediump float;\n"
j.a=l
u=a.k4
if(u){j.a=k
t=k}else t=l
if(a.r1){t+="varying vec3 binormalVec;\n"
j.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
j.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
j.a=t}if(a.k2){t+="varying vec3 objPos;\n"
j.a=t}t=j.a=(a.k3?j.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
j.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
j.a=t}if(a.dy)t=j.a=t+"uniform mat4 invViewMat;\n"
j.a=t+"\n"
A.o1(a,j)
A.nY(a,j)
A.o_(a,j)
A.o2(a,j)
A.o8(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.o6(a,j)
A.o7(a,j)}A.o4(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
j.a=r}q=q.b
if(q)r=j.a=r+"uniform sampler2D alphaTxt;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
if(!(p||q||!1))r=j.a=r+"   return 1.0;\n"
else if(q||!1){if(p){if(q){r+="   float a = alpha*texture2D(alphaTxt, txt2D).a;\n"
j.a=r}}else if(q){r+="   float a = texture2D(alphaTxt, txt2D).a;\n"
j.a=r}r+="   if (a <= 0.000001) discard;\n"
j.a=r
r+="   return a;\n"
j.a=r}else if(p){r+="   return alpha;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.nZ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o0(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o5(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.o9(a,q[o],j)
A.o3(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.t])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aM(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aM(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aM(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aM(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
ob:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b5+"];\n"
u+="attribute vec4 bendAttr;\n"
b.a=u
u+="\n"
b.a=u
u+="float weightSum;\n"
b.a=u
u=b.a=u+"vec3 bendPos;\n"
t=a.k4
if(t){u+="vec3 bendNorm;\n"
b.a=u}s=a.r1
u=(s?b.a=u+"vec3 bendBinm;\n":u)+"\n"
b.a=u
u+="void adjustBend(float bendVal)\n"
b.a=u
u+="{\n"
b.a=u
u+="   if(bendVal >= 0.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      int index = int(floor((bendVal + 0.5)*0.5));\n"
b.a=u
u+="      if(index < bendMatCount)\n"
b.a=u
u+="      {\n"
b.a=u
u+="         float weight = clamp(bendVal - float(index)*2.0, 0.0, 1.0);\n"
b.a=u
u+="         mat4 m = bendValues[index].mat;\n"
b.a=u
u+="         weightSum += weight;\n"
b.a=u
u=b.a=u+"         bendPos += (m*vec4(posAttr, 1.0)).xyz*weight;\n"
if(t){u+="         bendNorm += (m*vec4(normAttr, 0.0)).xyz*weight;\n"
b.a=u}u=(s?b.a=u+"         bendBinm += (m*vec4(binmAttr, 0.0)).xyz*weight;\n":u)+"      }\n"
b.a=u
u+="   }\n"
b.a=u
u+="}\n"
b.a=u
u+="\n"
b.a=u
u+="void setupBendData()\n"
b.a=u
u+="{\n"
b.a=u
u=b.a=u+"   bendPos = vec3(0.0, 0.0, 0.0);\n"
if(t){u+="   bendNorm = vec3(0.0, 0.0, 0.0);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = vec3(0.0, 0.0, 0.0);\n":u)+"   weightSum = 0.0;\n"
b.a=u
u+="   adjustBend(bendAttr.x);\n"
b.a=u
u+="   adjustBend(bendAttr.y);\n"
b.a=u
u+="   adjustBend(bendAttr.z);\n"
b.a=u
u+="   adjustBend(bendAttr.w);\n"
b.a=u
u+="   if(weightSum < 1.0)\n"
b.a=u
u+="   {\n"
b.a=u
u+="      float weight = 1.0 - weightSum;\n"
b.a=u
u=b.a=u+"      bendPos += posAttr*weight;\n"
if(t){u+="      bendNorm += normAttr*weight;\n"
b.a=u}u=(s?b.a=u+"      bendBinm += binmAttr*weight;\n":u)+"   }\n"
b.a=u
u+="   else\n"
b.a=u
u+="   {\n"
b.a=u
u+="      bendPos = bendPos/weightSum;\n"
b.a=u
u=b.a=u+"   }\n"
if(t){u+="   bendNorm = normalize(bendNorm);\n"
b.a=u}u=(s?b.a=u+"   bendBinm = normalize(bendBinm);\n":u)+"}\n"
b.a=u
b.a=u+"\n"},
od:function(a,b){var u
if(!a.k4)return
u=b.a+="varying vec3 normalVec;\n"
u+="\n"
b.a=u
u+="vec3 getNorm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendNorm":"normAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oc:function(a,b){var u
if(!a.r1)return
u=b.a+="varying vec3 binormalVec;\n"
u+="\n"
b.a=u
u+="vec3 getBinm()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return normalize((viewObjMat*vec4("+(a.ry?"bendBinm":"binmAttr")+", 0.0)).xyz);\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
of:function(a,b){var u,t
if(!a.r2)return
u=a.x1
if(u)b.a+="uniform mat3 txt2DMat;\n"
t=b.a+="attribute vec2 txt2DAttr;\n"
t+="varying vec2 txt2D;\n"
b.a=t
t+="\n"
b.a=t
t+="vec2 getTxt2D()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txt2DMat*vec3(txt2DAttr, 1.0)).xy;\n":b.a=t+"   return txt2DAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
og:function(a,b){var u,t
if(!a.rx)return
u=a.x2
if(u)b.a+="uniform mat4 txtCubeMat;\n"
t=b.a+="attribute vec3 txtCubeAttr;\n"
t+="varying vec3 txtCube;\n"
b.a=t
t+="\n"
b.a=t
t+="vec3 getTxtCube()\n"
b.a=t
t=b.a=t+"{\n"
t=(u?b.a=t+"   return (txtCubeMat*vec4(txtCubeAttr, 1.0)).xyz;\n":b.a=t+"   return txtCubeAttr;\n")+"}\n"
b.a=t
b.a=t+"\n"},
oe:function(a,b){var u
if(!a.k2)return
u=b.a+="varying vec3 objPos;\n"
u+="\n"
b.a=u
u+="vec3 getObjPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (objMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
oh:function(a,b){var u
if(!a.k3)return
u=b.a+="varying vec3 viewPos;\n"
u+="\n"
b.a=u
u+="vec3 getViewPos()\n"
b.a=u
u+="{\n"
b.a=u
u+="   return (viewObjMat*vec4("+(a.ry?"bendPos":"posAttr")+", 1.0)).xyz;\n"
b.a=u
u+="}\n"
b.a=u
b.a=u+"\n"},
f0:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.b.aM(a,1)},
lf:function(a,b,c,d,e){var u=new A.j0(a,c,e)
u.f=d
P.nc(d,0,P.y)
return u},
d_:function d_(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
hj:function hj(a,b){var _=this
_.jE=_.dZ=_.bH=_.bj=_.b5=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jM=_.jL=_.jK=_.cv=_.cu=_.ct=_.cs=_.cr=_.cq=_.cp=_.co=_.jJ=_.ea=_.e9=_.jI=_.e8=_.e7=_.e6=_.jH=_.e5=_.e4=_.e3=_.jG=_.e2=_.e1=_.jF=_.e0=_.e_=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d0:function d0(a,b){this.a=a
this.b=b},
dc:function dc(a,b){this.a=a
this.b=b},
dC:function dC(a,b){this.a=a
this.b=b},
dJ:function dJ(a,b){this.a=a
this.b=b},
hm:function hm(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b5=b3
_.bj=b4
_.bH=b5},
cC:function cC(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cD:function cD(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cF:function cF(a,b,c,d,e,f,g,h,i,j){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f
_.x=g
_.y=h
_.z=i
_.Q=j},
cG:function cG(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
_.cy=m
_.db=n
_.dx=o
_.dy=p},
dG:function dG(){},
im:function im(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ip:function ip(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dW:function dW(){},
j5:function j5(a){this.a=a},
bB:function bB(a,b,c){this.a=a
this.c=b
this.d=c},
j2:function j2(a,b,c){this.a=a
this.c=b
this.d=c},
j3:function j3(a,b,c){this.a=a
this.c=b
this.d=c},
j4:function j4(a,b,c){this.a=a
this.c=b
this.d=c},
j0:function j0(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
j1:function j1(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){this.a=a
this.c=b
this.d=c},
cE:function cE(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c}},F={
ow:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=new F.kl()
if(a<3)return
u=F.l9()
t=-6.283185307179586/a
s=H.b([],[F.aI])
r=u.a
q=new V.C(0,0,1)
q=q.v(0,Math.sqrt(q.F(q)))
s.push(r.ig(new V.aQ(-1,-1,-1,-1),new V.ao(1,1,1,1),new V.Z(0,0,0),new V.C(0,0,1),new V.a2(0.5,0.5),q))
for(p=0;p<=a;++p){o=t*p
n=Math.sin(o)
m=Math.cos(o)
l=g.$1(p/a)
r=u.a
if(typeof l!=="number")return H.c(l)
q=new V.C(n,m,1).v(0,Math.sqrt(n*n+m*m+1))
if(n<0)k=0
else k=n>1?1:n
j=m<0
if(j)i=0
else i=m>1?1:m
if(j)j=0
else j=m>1?1:m
r.toString
h=F.lg(new V.aQ(-1,-1,-1,-1),null,new V.ao(k,i,j,1),new V.Z(n*l,m*l,0),new V.C(0,0,1),new V.a2(n*0.5+0.5,m*0.5+0.5),q,null,0)
r.j(0,h)
s.push(h)}u.d.cb(s)
return u},
n9:function(a,b){var u=new F.bU(),t=a.a
if(t==null)H.n(P.k("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.n(P.k("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.ai()
return u},
l9:function(){var u=new F.ie(),t=new F.ji(u)
t.b=!1
t.c=H.b([],[F.aI])
u.a=t
t=new F.ii(u)
t.b=H.b([],[F.bW])
u.b=t
t=new F.ih(u)
t.b=H.b([],[F.bU])
u.c=t
t=new F.ig(u)
t.b=H.b([],[F.bQ])
u.d=t
u.e=null
return u},
lg:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aI(),r=new F.jn()
r.b=H.b([],[F.bW])
s.b=r
r=new F.jm()
u=[F.bU]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.jj()
u=[F.bQ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mI()
s.e=0
r=$.au()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bj().a)!==0?e:t
s.x=(u&$.bi().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.bJ().a)!==0?g:t
s.Q=(u&$.mJ().a)!==0?c:t
s.ch=(u&$.cd().a)!==0?i:0
s.cx=(u&$.bh().a)!==0?a:t
return s},
kl:function kl(){},
bQ:function bQ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bU:function bU(){this.b=this.a=null},
bW:function bW(){this.a=null},
ie:function ie(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ig:function ig(a){this.a=a
this.b=null},
ih:function ih(a){this.a=a
this.b=null},
ii:function ii(a){this.a=a
this.b=null},
aI:function aI(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jp:function jp(a){this.a=a},
jo:function jo(a){this.a=a},
ji:function ji(a){this.a=a
this.c=this.b=null},
jj:function jj(){this.d=this.c=this.b=null},
jk:function jk(a,b){this.a=a
this.b=b},
jl:function jl(a,b){this.a=a
this.b=b},
jm:function jm(){this.c=this.b=null},
jn:function jn(){this.b=null}},T={
lb:function(a){var u=new T.iK()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
d6:function d6(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(a,b){this.c=a
this.d=b
this.b=null},
dP:function dP(){},
iJ:function iJ(){},
iK:function iK(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iL:function iL(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
iM:function iM(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
iO:function iO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iN:function iN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
iP:function iP(a,b,c){this.a=a
this.b=b
this.c=c}},Q={
lL:function(a){if(a>=64)return new Q.i(0,0)
return new Q.i(C.d.a8(a,8)+1,C.d.cT(a,8)+1)},
lZ:function(){var u=new Q.iu()
u.f_()
return u},
ae:function(a){return new Q.v(a)},
fR:function fR(){this.d=this.c=this.a=null},
i:function i(a,b){this.a=a
this.b=b},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
iu:function iu(){this.c=this.a=null},
iv:function iv(a){this.a=a},
ix:function ix(a){this.a=a},
iy:function iy(a,b){this.a=a
this.b=b},
iw:function iw(a,b,c){this.a=a
this.b=b
this.c=c},
iD:function iD(){this.d=this.c=null},
v:function v(a){this.a=a}},S={
ff:function(a,b,c,d,e,f){var u=null,t=new S.fe(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.aW(b,c,e,f)
t.eN(a,b,c,d,e,f)
return t},
mT:function(a,b){var u=null,t=new S.d2(b)
t.am(u,!0,u,"",u,u)
t.eO(a,b)
return t},
fB:function(a,b,c,d,e,f){var u=null,t=new S.fA()
t.am(u,!0,u,"",u,u)
t.eP(a,b,c,d,e,f)
return t},
oR:function(a6){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=null,a3="modifiers",a4=document,a5=a4.getElementById("targetCanvas")
if(a5==null)H.n(P.k("Failed to find an element with the identifier, targetCanvas."))
u=E.nD(a5,!0,!0,!0,!1)
t=u.x
s=new U.dZ()
r=U.lA()
r.scQ(0,!0)
r.scF(6.283185307179586)
r.scG(0)
r.sar(0,0)
r.sef(100)
r.sa4(0)
r.sdU(0.5)
s.b=r
q=s.gbw()
r.gt().j(0,q)
r=U.lA()
r.scQ(0,!0)
r.scF(6.283185307179586)
r.scG(0)
r.sar(0,0)
r.sef(100)
r.sa4(0)
r.sdU(0.5)
s.c=r
r.gt().j(0,q)
s.d=null
s.r=s.f=s.e=!1
s.y=s.x=2.5
s.Q=4
s.ch=s.cx=!1
s.db=s.cy=0
s.dx=null
s.dy=0
s.fx=s.fr=null
p=new X.bx(!1,!1,!1)
o=s.d
s.d=p
r=new D.x(a3,o,p)
r.b=!0
s.Y(r)
r=s.f
if(r!==!1){s.f=!1
r=new D.x("invertX",r,!1)
r.b=!0
s.Y(r)}r=s.r
if(r!==!1){s.r=!1
r=new D.x("invertY",r,!1)
r.b=!0
s.Y(r)}s.cd(t)
s.b.scG(-1.5707963267948966)
s.b.scF(0)
s.b.sar(0,-0.5)
s.b.scQ(0,!1)
t=U.aG
s=H.b([s,U.bm(V.l0(1.75,1.75,1.75,1)),U.bm(V.du(0,0,15))],[t])
r=new U.cm()
r.bq(t)
r.ba(r.gfQ(),r.ghv())
r.ax(0,s)
r.e=null
r.f=V.bw()
r.r=0
n=X.lR(r)
m=X.kP(a2)
if(m.b){m.b=!1
t=new D.x("clearColor",!0,!1)
t.b=!0
m.a1(t)}l=S.mT(u,a6)
t=l.k4.a
k=new M.da()
k.a=!0
s=E.P(a2,!0,a2,"",a2,a2)
j=F.l9()
r=j.a
q=new V.C(-1,-1,1)
q=q.v(0,Math.sqrt(q.F(q)))
i=r.bE(new V.aQ(1,2,4,6),V.d5(255,0,0,255),new V.Z(-1,-1,0),new V.a2(0,1),q,a2)
q=j.a
r=new V.C(1,-1,1)
r=r.v(0,Math.sqrt(r.F(r)))
h=q.bE(new V.aQ(0,3,4,6),V.d5(0,0,255,255),new V.Z(1,-1,0),new V.a2(1,1),r,a2)
r=j.a
q=new V.C(1,1,1)
q=q.v(0,Math.sqrt(q.F(q)))
g=r.bE(new V.aQ(0,2,5,6),V.d5(0,128,0,255),new V.Z(1,1,0),new V.a2(1,0),q,a2)
q=j.a
r=V.b5()
f=new V.C(-1,1,1)
f=f.v(0,Math.sqrt(f.F(f)))
e=q.bE(new V.aQ(0,2,4,7),V.d5(255,255,0,255),new V.Z(-1,1,0),r,f,a2)
j.d.cb(H.b([i,h,g,e],[F.aI]))
j.b3()
s.sa_(0,j)
k.e=s
k.sb4(a2)
k.sb9(0,a2)
k.sZ(a2)
s=new O.dH()
s.b=1.0471975511965976
s.d=new V.r(1,1,1)
if(null!=t){o=s.c
s.c=t
t.gt().j(0,s.gaF())
t=new D.x("boxTexture",o,s.c)
t.b=!0
s.U(t)}k.sZ(s)
k.sb9(0,m)
k.sb4(n)
d=M.lD()
d.sb9(0,m)
d.sb4(n)
d.e.j(0,l)
c=new X.fb()
c.d=c.c=c.b=c.a=512
c.e=!0
c.f=!1
c.x=c.r=1
c.ch=T.lb(a2)
c.cx=new V.ao(0,0,0,1)
c.cy=!0
c.db=2000
c.dx=!0
c.dy=V.l7()
c.sav(0,512)
c.sap(0,512)
b=new V.ao(0,0,0,1)
if(!c.cx.n(0,b)){o=c.cx
c.cx=b
t=new D.x("color",o,b)
t.b=!0
c.a1(t)}t=c.db
if(!(Math.abs(t-2000)<$.B().a)){c.db=2000
t=new D.x("depth",t,2000)
t.b=!0
c.a1(t)}if(!c.f){c.f=!0
t=new D.x("autoResize",!1,!0)
t.b=!0
c.a1(t)}t=c.r
if(!(Math.abs(t-0.5)<$.B().a)){c.r=0.5
t=new D.x("autoResizeScalarX",t,0.5)
t.b=!0
c.a1(t)}t=c.x
if(!(Math.abs(t-0.5)<$.B().a)){c.x=0.5
t=new D.x("autoResizeScalarY",t,0.5)
t.b=!0
c.a1(t)}a=V.l7()
if(!J.D(c.dy,a)){o=c.dy
c.dy=a
t=new D.x("region",o,a)
t.b=!0
c.a1(t)}a0=M.lD()
a0.sb9(0,c)
a0.sb4(n)
a0.e.j(0,l)
t=u.f
s=u.x
r=c.ch
q=new T.d6()
q.a=t
q.z=4
q.ch=q.Q=!1
p=new X.bx(!1,!1,!1)
q.c=p
t=new D.x(a3,a2,p)
t.b=!0
q.bs(t)
t=q.d
if(t!==r){if(t!=null)t.gt().R(0,q.gd8())
o=q.d
q.d=r
r.gt().j(0,q.gd8())
t=new D.x("texture",o,q.d)
t.b=!0
q.bs(t)}q.cd(s)
t=q.f
if(t==null)t=q.f=D.E()
t.j(0,new S.ky(l,u,a0))
t=q.x
if(t==null)t=q.x=D.E()
t.j(0,new S.kz(l))
t=M.aH
s=H.b([k,d],[t])
r=new M.d8()
r.bq(t)
r.e=!0
r.f=!1
r.r=null
r.ba(r.ghz(),r.ghB())
r.ax(0,s)
t=u.d
if(t!==r){if(t!=null)t.gt().R(0,u.gd5())
u.d=r
r.gt().j(0,u.gd5())
u.d6()}a5=a4.getElementById("buttons")
a1=a4.createElement("button")
a1.textContent="Fullscreen"
W.V(a1,"click",new S.kA(u),!1)
J.mO(a5).j(0,a1)
V.oQ(u)},
lJ:function(a,b,c,d,e){var u=null,t=new S.h4(d,e,b,c)
t.am(u,!0,u,"",u,u)
t.aW(b,c,d,e)
t.eQ(a,b,c,d,e)
return t},
h8:function(a,b,c,d,e,f){var u=null,t=new S.h7(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.aW(b,c,e,f)
t.eR(a,b,c,d,e,f)
return t},
nh:function(a){var u=new S.hy()
u.eT(a)
return u},
lQ:function(a,b,c,d,e,f){var u=null,t=new S.hQ(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.aW(b,c,e,f)
t.eU(a,b,c,d,e,f)
return t},
lV:function(a,b,c,d,e,f){var u=null,t=new S.hZ(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.aW(b,c,e,f)
t.eV(a,b,c,d,e,f)
return t},
i6:function(a,b,c,d,e,f){var u=null,t=new S.i5(e,f,b,c)
t.am(u,!0,u,"",u,u)
t.aW(b,c,e,f)
t.eX(a,b,c,d,e,f)
return t},
nE:function(a,b,c,d){var u=null,t=new S.dR(d,b,c)
t.am(u,!0,u,"",u,u)
t.f0(a,b,c,d)
return t},
fe:function fe(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
fh:function fh(){},
d2:function d2(a){var _=this
_.fy=a
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=null},
fA:function fA(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fD:function fD(){},
ky:function ky(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
h4:function h4(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
h6:function h6(){},
h7:function h7(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
ha:function ha(){},
hy:function hy(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
hS:function hS(){},
dB:function dB(){},
hZ:function hZ(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
i0:function i0(){},
i5:function i5(a,b,c,d){var _=this
_.fy=null
_.go=a
_.id=b
_.k1=null
_.k2=c
_.k3=d
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=null},
i8:function i8(){},
dR:function dR(a,b,c){var _=this
_.fy=a
_.id=b
_.k1=c
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=null},
iS:function iS(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kU.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gK:function(a){return H.cy(a)},
i:function(a){return"Instance of '"+H.f(H.cz(a))+"'"}}
J.fZ.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$ibF:1}
J.dl.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0},
$iQ:1}
J.dm.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hT.prototype={}
J.c0.prototype={}
J.bt.prototype={
i:function(a){var u=a[$.mx()]
if(u==null)return this.eM(a)
return"JavaScript function for "+H.f(J.an(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aZ.prototype={
j:function(a,b){if(!!a.fixed$length)H.n(P.z("add"))
a.push(b)},
jg:function(a,b){var u
if(!!a.fixed$length)H.n(P.z("removeAt"))
u=a.length
if(b>=u)throw H.e(P.dD(b,null))
return a.splice(b,1)[0]},
R:function(a,b){var u
if(!!a.fixed$length)H.n(P.z("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
ax:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
M:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.e(P.ci(a))}},
u:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
iK:function(a){return this.u(a,"")},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eJ:function(a,b,c){var u=a.length
if(b>u)throw H.e(P.b6(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.e(P.b6(c,b,u,"end",null))
if(b===c)return H.b([],[H.as(a,0)])
return H.b(a.slice(b,c),[H.as(a,0)])},
gcC:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.n5())},
bc:function(a,b){if(!!a.immutable$list)H.n(P.z("sort"))
H.nC(a,b==null?J.nV():b)},
eI:function(a){return this.bc(a,null)},
ab:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.kQ(a,"[","]")},
gT:function(a){return new J.a9(a,a.length)},
gK:function(a){return H.cy(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.n(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.f5(b,u,null))
if(b<0)throw H.e(P.b6(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.e(H.c7(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.n(P.z("indexed set"))
if(b>=a.length||b<0)throw H.e(H.c7(a,b))
a[b]=c},
$iu:1,
$im:1}
J.kT.prototype={}
J.a9.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.cq.prototype={
ay:function(a,b){var u
if(typeof b!=="number")throw H.e(H.ar(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbI(b)
if(this.gbI(a)===u)return 0
if(this.gbI(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbI:function(a){return a===0?1/a<0:a<0},
jr:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.z(""+a+".toInt()"))},
b6:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.z(""+a+".floor()"))},
a3:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.z(""+a+".round()"))},
il:function(a,b,c){if(C.d.ay(b,c)>0)throw H.e(H.ar(b))
if(this.ay(a,b)<0)return b
if(this.ay(a,c)>0)return c
return a},
ex:function(a,b){var u
if(b>20)throw H.e(P.b6(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbI(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cT:function(a,b){var u
if(typeof b!=="number")throw H.e(H.ar(b))
u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d3:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a8:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.z("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
bB:function(a,b){var u
if(a>0)u=this.i2(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
i2:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iat:1}
J.dk.prototype={$iy:1}
J.dj.prototype={}
J.bs.prototype={
aI:function(a,b){if(b<0)throw H.e(H.c7(a,b))
if(b>=a.length)H.n(H.c7(a,b))
return a.charCodeAt(b)},
bf:function(a,b){if(b>=a.length)throw H.e(H.c7(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.e(P.f5(b,null,null))
return a+b},
bp:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.e(P.dD(b,null))
if(b>c)throw H.e(P.dD(b,null))
if(c>a.length)throw H.e(P.dD(c,null))
return a.substring(b,c)},
aM:function(a,b){return this.bp(a,b,null)},
ez:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.bf(r,0)===133){u=J.n8(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.aI(r,t)===133?J.kS(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
jv:function(a){var u,t,s
if(typeof a.trimRight!="undefined"){u=a.trimRight()
t=u.length
if(t===0)return u
s=t-1
if(this.aI(u,s)===133)t=J.kS(u,s)}else{t=J.kS(a,a.length)
u=a}if(t===u.length)return u
if(t===0)return""
return u.substring(0,t)},
k:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
at:function(a,b){var u=b-a.length
if(u<=0)return a
return this.k(" ",u)+a},
bL:function(a,b){var u=b-a.length
if(u<=0)return a
return a+this.k(" ",u)},
iH:function(a,b){var u=a.indexOf(b,0)
return u},
iL:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
ay:function(a,b){var u
if(typeof b!=="string")throw H.e(H.ar(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$it:1}
H.X.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.aI(this.a,b)},
$au:function(){return[P.y]},
$aw:function(){return[P.y]},
$am:function(){return[P.y]}}
H.u.prototype={}
H.cr.prototype={
gJ:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.eZ(s),q=r.gl(s)
if(t.b!=q)throw H.e(P.ci(s))
u=t.c
if(typeof q!=="number")return H.c(q)
if(u>=q){t.d=null
return!1}t.d=r.H(s,u);++t.c
return!0}}
H.cs.prototype={
gT:function(a){return new H.dr(J.bK(this.a),this.b)},
gl:function(a){return J.aB(this.a)},
H:function(a,b){return this.b.$1(J.kE(this.a,b))},
$am:function(a,b){return[b]}}
H.fE.prototype={$iu:1,
$au:function(a,b){return[b]}}
H.dr.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.jr.prototype={
gT:function(a){return new H.js(J.bK(this.a),this.b)}}
H.js.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.dg.prototype={}
H.j9.prototype={
m:function(a,b,c){throw H.e(P.z("Cannot modify an unmodifiable list"))}}
H.dX.prototype={}
H.iZ.prototype={
as:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hM.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.h2.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.j8.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cl.prototype={}
H.kB.prototype={
$1:function(a){if(!!J.W(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.eB.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iay:1}
H.ch.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cW(t==null?"unknown":t)+"'"},
gjx:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iG.prototype={}
H.iz.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cW(u)+"'"}}
H.cf.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cf))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cy(this.a)
else u=typeof t!=="object"?J.ce(t):H.cy(t)
return(u^H.cy(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cz(u))+"'")}}
H.fj.prototype={
i:function(a){return this.a}}
H.ib.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.H.prototype={
gl:function(a){return this.a},
gaS:function(a){return new H.bV(this,[H.as(this,0)])},
gjw:function(a){var u=this,t=H.as(u,0)
return H.ne(new H.bV(u,[t]),new H.h1(u),t,H.as(u,1))},
iq:function(a,b){var u=this.b
if(u==null)return!1
return this.ft(u,b)},
ax:function(a,b){J.lu(b,new H.h0(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bu(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bu(r,b)
s=t==null?null:t.b
return s}else return q.iI(b)},
iI:function(a){var u,t,s=this.d
if(s==null)return
u=this.dl(s,J.ce(a)&0x3ffffff)
t=this.ec(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.d9(u==null?o.b=o.c0():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.d9(t==null?o.c=o.c0():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.c0()
r=J.ce(b)&0x3ffffff
q=o.dl(s,r)
if(q==null)o.c9(s,r,[o.c1(b,c)])
else{p=o.ec(q,b)
if(p>=0)q[p].b=c
else q.push(o.c1(b,c))}}},
M:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.ci(u))
t=t.c}},
d9:function(a,b,c){var u=this.bu(a,b)
if(u==null)this.c9(a,b,this.c1(b,c))
else u.b=c},
c1:function(a,b){var u=this,t=new H.hc(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
ec:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.lM(this)},
bu:function(a,b){return a[b]},
dl:function(a,b){return a[b]},
c9:function(a,b,c){a[b]=c},
fw:function(a,b){delete a[b]},
ft:function(a,b){return this.bu(a,b)!=null},
c0:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c9(t,u,t)
this.fw(t,u)
return t}}
H.h1.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.as(u,1),args:[H.as(u,0)]}}}
H.h0.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:function(){var u=this.a
return{func:1,ret:P.Q,args:[H.as(u,0),H.as(u,1)]}}}
H.hc.prototype={}
H.bV.prototype={
gl:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.hd(u,u.r)
t.c=u.e
return t}}
H.hd.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.ci(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kr.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.ks.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kt.prototype={
$1:function(a){return this.a(a)}}
H.h_.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfP:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.lI(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
iC:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.ek(u)},
fA:function(a,b){var u,t=this.gfP()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.ek(u)}}
H.ek.prototype={}
H.jt.prototype={
gJ:function(a){return this.d},
A:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.fA(p,u)
if(s!=null){q.d=s
p=s.b
u=p.index
r=u+p[0].length
if(u===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.kn(t).aI(t,p)
if(p>=55296&&p<=56319){p=C.b.aI(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.cw.prototype={}
H.dw.prototype={
gl:function(a){return a.length},
$iA:1,
$aA:function(){}}
H.cv.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aU(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.M]},
$aw:function(){return[P.M]},
$im:1,
$am:function(){return[P.M]}}
H.dx.prototype={
m:function(a,b,c){H.aU(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.y]},
$aw:function(){return[P.y]},
$im:1,
$am:function(){return[P.y]}}
H.hG.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.hH.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.hI.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.hJ.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.hK.prototype={
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.dy.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.hL.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aU(b,a,a.length)
return a[b]}}
H.cJ.prototype={}
H.cK.prototype={}
H.cL.prototype={}
H.cM.prototype={}
P.jx.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:8}
P.jw.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jy.prototype={
$0:function(){this.a.$0()}}
P.jz.prototype={
$0:function(){this.a.$0()}}
P.eH.prototype={
fe:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c6(new P.k7(this,b),0),a)
else throw H.e(P.z("`setTimeout()` not found."))},
ff:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c6(new P.k6(this,a,Date.now(),b),0),a)
else throw H.e(P.z("Periodic timer."))},
$idS:1}
P.k7.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k6.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.d3(u,q)}s.c=r
t.d.$1(s)}}
P.ju.prototype={
cl:function(a,b){var u=!this.b||H.eY(b,"$iaE",this.$ti,"$aaE"),t=this.a
if(u)t.da(b)
else t.df(b)},
bG:function(a,b){var u=this.a
if(this.b)u.bt(a,b)
else u.dc(a,b)}}
P.ka.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:18}
P.kb.prototype={
$2:function(a,b){this.a.$2(1,new H.cl(a,b))},
$S:19}
P.kj.prototype={
$2:function(a,b){this.a(a,b)}}
P.c2.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.cP.prototype={
gJ:function(a){var u=this.c
if(u==null)return this.b
return u.gJ(u)},
A:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.A())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.c2){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bK(u)
if(!!r.$icP){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.k5.prototype={
gT:function(a){return new P.cP(this.a())}}
P.e3.prototype={
bG:function(a,b){var u
if(a==null)a=new P.cx()
u=this.a
if(u.a!==0)throw H.e(P.m_("Future already completed"))
u.dc(a,b)},
dS:function(a){return this.bG(a,null)}}
P.jv.prototype={
cl:function(a,b){var u=this.a
if(u.a!==0)throw H.e(P.m_("Future already completed"))
u.da(b)}}
P.ed.prototype={
iN:function(a){if((this.c&15)!==6)return!0
return this.b.b.cN(this.d,a.a)},
iE:function(a){var u=this.e,t=this.b.b
if(H.lm(u,{func:1,args:[P.R,P.ay]}))return t.jl(u,a.a,a.b)
else return t.cN(u,a.a)}}
P.af.prototype={
cO:function(a,b,c){var u,t=$.J
if(t!==C.e)b=b!=null?P.oj(b,t):b
u=new P.af($.J,[c])
this.bS(new P.ed(u,b==null?1:3,a,b))
return u},
au:function(a,b){return this.cO(a,null,b)},
dC:function(a,b,c){var u=new P.af($.J,[c])
this.bS(new P.ed(u,(b==null?1:3)|16,a,b))
return u},
bS:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.bS(a)
return}t.a=u
t.c=s.c}P.c4(null,null,t.b,new P.jF(t,a))}},
du:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.du(a)
return}p.a=q
p.c=u.c}o.a=p.bA(a)
P.c4(null,null,p.b,new P.jN(o,p))}},
bz:function(){var u=this.c
this.c=null
return this.bA(u)},
bA:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
fq:function(a){var u,t=this,s=t.$ti
if(H.eY(a,"$iaE",s,"$aaE"))if(H.eY(a,"$iaf",s,null))P.jI(a,t)
else P.m8(a,t)
else{u=t.bz()
t.a=4
t.c=a
P.c1(t,u)}},
df:function(a){var u=this,t=u.bz()
u.a=4
u.c=a
P.c1(u,t)},
bt:function(a,b){var u=this,t=u.bz()
u.a=8
u.c=new P.bL(a,b)
P.c1(u,t)},
da:function(a){var u=this
if(H.eY(a,"$iaE",u.$ti,"$aaE")){u.fn(a)
return}u.a=1
P.c4(null,null,u.b,new P.jH(u,a))},
fn:function(a){var u=this
if(H.eY(a,"$iaf",u.$ti,null)){if(a.a===8){u.a=1
P.c4(null,null,u.b,new P.jM(u,a))}else P.jI(a,u)
return}P.m8(a,u)},
dc:function(a,b){this.a=1
P.c4(null,null,this.b,new P.jG(this,a,b))},
$iaE:1}
P.jF.prototype={
$0:function(){P.c1(this.a,this.b)}}
P.jN.prototype={
$0:function(){P.c1(this.b,this.a.a)}}
P.jJ.prototype={
$1:function(a){var u=this.a
u.a=0
u.fq(a)},
$S:8}
P.jK.prototype={
$2:function(a,b){this.a.bt(a,b)},
$1:function(a){return this.$2(a,null)},
$S:21}
P.jL.prototype={
$0:function(){this.a.bt(this.b,this.c)}}
P.jH.prototype={
$0:function(){this.a.df(this.b)}}
P.jM.prototype={
$0:function(){P.jI(this.b,this.a)}}
P.jG.prototype={
$0:function(){this.a.bt(this.b,this.c)}}
P.jQ.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.er(s.d)}catch(r){u=H.a8(r)
t=H.bG(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.bL(u,t)
q.a=!0
return}if(!!J.W(n).$iaE){if(n instanceof P.af&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.au(new P.jR(p),null)
s.a=!1}}}
P.jR.prototype={
$1:function(a){return this.a},
$S:22}
P.jP.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cN(s.d,q.c)}catch(r){u=H.a8(r)
t=H.bG(r)
s=q.a
s.b=new P.bL(u,t)
s.a=!0}}}
P.jO.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.iN(u)&&r.e!=null){q=m.b
q.b=r.iE(u)
q.a=!1}}catch(p){t=H.a8(p)
s=H.bG(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.bL(t,s)
n.a=!0}}}
P.e1.prototype={}
P.dN.prototype={}
P.iC.prototype={}
P.k3.prototype={}
P.dS.prototype={}
P.bL.prototype={
i:function(a){return H.f(this.a)},
$ibo:1}
P.k9.prototype={}
P.kh.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cx():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u}}
P.jY.prototype={
jn:function(a){var u,t,s,r=null
try{if(C.e===$.J){a.$0()
return}P.md(r,r,this,a)}catch(s){u=H.a8(s)
t=H.bG(s)
P.kg(r,r,this,u,t)}},
jp:function(a,b){var u,t,s,r=null
try{if(C.e===$.J){a.$1(b)
return}P.me(r,r,this,a,b)}catch(s){u=H.a8(s)
t=H.bG(s)
P.kg(r,r,this,u,t)}},
jq:function(a,b){return this.jp(a,b,null)},
ij:function(a){return new P.k_(this,a)},
ii:function(a){return this.ij(a,null)},
ce:function(a){return new P.jZ(this,a)},
dN:function(a,b){return new P.k0(this,a,b)},
jk:function(a){if($.J===C.e)return a.$0()
return P.md(null,null,this,a)},
er:function(a){return this.jk(a,null)},
jo:function(a,b){if($.J===C.e)return a.$1(b)
return P.me(null,null,this,a,b)},
cN:function(a,b){return this.jo(a,b,null,null)},
jm:function(a,b,c){if($.J===C.e)return a.$2(b,c)
return P.ok(null,null,this,a,b,c)},
jl:function(a,b,c){return this.jm(a,b,c,null,null,null)},
jf:function(a){return a},
eq:function(a){return this.jf(a,null,null,null)}}
P.k_.prototype={
$0:function(){return this.a.er(this.b)}}
P.jZ.prototype={
$0:function(){return this.a.jn(this.b)}}
P.k0.prototype={
$1:function(a){return this.a.jq(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jV.prototype={
gT:function(a){var u=new P.ei(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
ab:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.fp(b)
return t}},
fp:function(a){var u=this.d
if(u==null)return!1
return this.bY(this.dk(u,a),a)>=0},
j:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.de(u==null?s.b=P.li():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.de(t==null?s.c=P.li():t,b)}else return s.fo(0,b)},
fo:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.li()
u=s.dg(b)
t=r[u]
if(t==null)r[u]=[s.bV(b)]
else{if(s.bY(t,b)>=0)return!1
t.push(s.bV(b))}return!0},
R:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hT(this.c,b)
else return this.hS(0,b)},
hS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dk(r,b)
t=s.bY(u,b)
if(t<0)return!1
s.dE(u.splice(t,1)[0])
return!0},
de:function(a,b){if(a[b]!=null)return!1
a[b]=this.bV(b)
return!0},
hT:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dE(u)
delete a[b]
return!0},
dn:function(){this.r=1073741823&this.r+1},
bV:function(a){var u,t=this,s=new P.jW(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dn()
return s},
dE:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dn()},
dg:function(a){return J.ce(a)&1073741823},
dk:function(a,b){return a[this.dg(b)]},
bY:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jW.prototype={}
P.ei.prototype={
gJ:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.ci(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fX.prototype={}
P.he.prototype={$iu:1,$im:1}
P.w.prototype={
gT:function(a){return new H.cr(a,this.gl(a))},
H:function(a,b){return this.h(a,b)},
jt:function(a,b){var u,t,s=this,r=H.b([],[H.oC(s,a,"w",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.c(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
js:function(a){return this.jt(a,!0)},
i:function(a){return P.kQ(a,"[","]")}}
P.hh.prototype={}
P.hi.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:9}
P.ad.prototype={
M:function(a,b){var u,t
for(u=J.bK(this.gaS(a));u.A();){t=u.gJ(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aB(this.gaS(a))},
i:function(a){return P.lM(a)},
$ia1:1}
P.k1.prototype={
i:function(a){return P.kQ(this,"{","}")},
H:function(a,b){var u,t,s
P.lW(b,"index")
for(u=P.nP(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.e(P.O(b,this,"index",null,t))},
$iu:1,
$im:1}
P.ej.prototype={}
P.fl.prototype={}
P.fo.prototype={}
P.fF.prototype={}
P.jc.prototype={}
P.jd.prototype={
ir:function(a){var u,t,s,r=P.l4(0,null,a.length)
if(typeof r!=="number")return r.p()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.k8(t)
if(s.fB(a,0,r)!==r)s.dG(C.b.aI(a,r-1),0)
return new Uint8Array(t.subarray(0,H.nT(0,s.b,t.length)))}}
P.k8.prototype={
dG:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.d(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.d(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.d(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.d(s,r)
s[r]=128|a&63
return!1}},
fB:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aI(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.bf(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dG(r,C.b.bf(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.d(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.d(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.d(u,q)
u[q]=128|r&63}}return s}}
P.bF.prototype={}
P.aw.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aw&&this.a===b.a&&!0},
ay:function(a,b){return C.d.ay(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.d.bB(u,30))&1073741823},
i:function(a){var u=this,t=P.n0(H.nr(u)),s=P.db(H.np(u)),r=P.db(H.nl(u)),q=P.db(H.nm(u)),p=P.db(H.no(u)),o=P.db(H.nq(u)),n=P.n1(H.nn(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.bn.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.bn&&this.a===b.a},
gK:function(a){return C.d.gK(this.a)},
ay:function(a,b){return C.d.ay(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fz(),q=this.a
if(q<0)return"-"+new P.bn(0-q).i(0)
u=r.$1(C.d.a8(q,6e7)%60)
t=r.$1(C.d.a8(q,1e6)%60)
s=new P.fy().$1(q%1e6)
return""+C.d.a8(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fy.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bo.prototype={}
P.cx.prototype={
i:function(a){return"Throw of null."}}
P.aC.prototype={
gbX:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbW:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbX()+o+u
if(!q.a)return t
s=q.gbW()
r=P.kN(q.b)
return t+s+": "+r}}
P.bY.prototype={
gbX:function(){return"RangeError"},
gbW:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fW.prototype={
gbX:function(){return"RangeError"},
gbW:function(){var u,t=this.b
if(typeof t!=="number")return t.W()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gl:function(a){return this.f}}
P.ja.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.j7.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dM.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fn.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kN(u)+"."}}
P.hP.prototype={
i:function(a){return"Out of Memory"},
$ibo:1}
P.dK.prototype={
i:function(a){return"Stack Overflow"},
$ibo:1}
P.ft.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.ea.prototype={
i:function(a){return"Exception: "+this.a}}
P.fP.prototype={
i:function(a){var u,t=this.a,s=t!=null&&""!==t?"FormatException: "+H.f(t):"FormatException",r=this.b
if(typeof r==="string"){u=r.length>78?C.b.bp(r,0,75)+"...":r
return s+"\n"+u}else return s}}
P.y.prototype={}
P.m.prototype={
gl:function(a){var u,t=this.gT(this)
for(u=0;t.A();)++u
return u},
H:function(a,b){var u,t,s
P.lW(b,"index")
for(u=this.gT(this),t=0;u.A();){s=u.gJ(u)
if(b===t)return s;++t}throw H.e(P.O(b,this,"index",null,t))},
i:function(a){return P.n4(this,"(",")")}}
P.fY.prototype={}
P.bv.prototype={$iu:1,$im:1}
P.a1.prototype={}
P.Q.prototype={
gK:function(a){return P.R.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.at.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
n:function(a,b){return this===b},
gK:function(a){return H.cy(this)},
i:function(a){return"Instance of '"+H.f(H.cz(this))+"'"},
toString:function(){return this.i(this)}}
P.l5.prototype={}
P.ay.prototype={}
P.t.prototype={}
P.ba.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.q.prototype={}
W.f1.prototype={
gl:function(a){return a.length}}
W.f3.prototype={
i:function(a){return String(a)}}
W.f4.prototype={
i:function(a){return String(a)}}
W.d1.prototype={}
W.bO.prototype={
cS:function(a,b,c){if(c!=null)return a.getContext(b,P.os(c))
return a.getContext(b)},
eB:function(a,b){return this.cS(a,b,null)},
$ibO:1}
W.bl.prototype={
gl:function(a){return a.length}}
W.fp.prototype={
gl:function(a){return a.length}}
W.L.prototype={$iL:1}
W.cj.prototype={
gl:function(a){return a.length}}
W.fq.prototype={}
W.av.prototype={}
W.aM.prototype={}
W.fr.prototype={
gl:function(a){return a.length}}
W.fs.prototype={
gl:function(a){return a.length}}
W.fu.prototype={
gl:function(a){return a.length}}
W.fv.prototype={
i:function(a){return String(a)}}
W.dd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.aq,P.at]]},
$iA:1,
$aA:function(){return[[P.aq,P.at]]},
$aw:function(){return[[P.aq,P.at]]},
$im:1,
$am:function(){return[[P.aq,P.at]]}}
W.de.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gav(a))+" x "+H.f(this.gap(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.W(b)
return!!u.$iaq&&a.left===u.gbJ(b)&&a.top===u.gbN(b)&&this.gav(a)===u.gav(b)&&this.gap(a)===u.gap(b)},
gK:function(a){return W.m9(C.c.gK(a.left),C.c.gK(a.top),C.c.gK(this.gav(a)),C.c.gK(this.gap(a)))},
gdO:function(a){return a.bottom},
gap:function(a){return a.height},
gbJ:function(a){return a.left},
gcM:function(a){return a.right},
gbN:function(a){return a.top},
gav:function(a){return a.width},
$iaq:1,
$aaq:function(){return[P.at]}}
W.fw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.t]},
$iA:1,
$aA:function(){return[P.t]},
$aw:function(){return[P.t]},
$im:1,
$am:function(){return[P.t]}}
W.fx.prototype={
gl:function(a){return a.length}}
W.jB.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
j:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.js(this)
return new J.a9(u,u.length)},
$au:function(){return[W.a3]},
$aw:function(){return[W.a3]},
$am:function(){return[W.a3]}}
W.a3.prototype={
gck:function(a){return new W.jB(a,a.children)},
gdR:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.W()
if(s<0)s=-s*0
if(typeof r!=="number")return r.W()
if(r<0)r=-r*0
return new P.aq(u,t,s,r,[P.at])},
i:function(a){return a.localName},
$ia3:1}
W.l.prototype={$il:1}
W.h.prototype={
ib:function(a,b,c,d){if(c!=null)this.fi(a,b,c,!1)},
fi:function(a,b,c,d){return a.addEventListener(b,H.c6(c,1),!1)}}
W.aX.prototype={$iaX:1}
W.fJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aX]},
$iA:1,
$aA:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$im:1,
$am:function(){return[W.aX]}}
W.fK.prototype={
gl:function(a){return a.length}}
W.fO.prototype={
gl:function(a){return a.length}}
W.aY.prototype={$iaY:1}
W.fS.prototype={
gl:function(a){return a.length}}
W.cn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.I]},
$iA:1,
$aA:function(){return[W.I]},
$aw:function(){return[W.I]},
$im:1,
$am:function(){return[W.I]}}
W.bR.prototype={
iX:function(a,b,c,d){return a.open(b,c,!0)},
$ibR:1}
W.fT.prototype={
$1:function(a){return a.responseText}}
W.fU.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.status
if(typeof q!=="number")return q.cR()
u=q>=200&&q<300
t=q>307&&q<400
q=u||q===0||q===304||t
s=this.b
if(q)s.cl(0,r)
else s.dS(a)}}
W.co.prototype={}
W.bp.prototype={$ibp:1,
gdV:function(a){return a.data}}
W.cp.prototype={$icp:1}
W.bT.prototype={$ibT:1}
W.hf.prototype={
i:function(a){return String(a)}}
W.hz.prototype={
gl:function(a){return a.length}}
W.hA.prototype={
h:function(a,b){return P.bf(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bf(u.value[1]))}},
gaS:function(a){var u=H.b([],[P.t])
this.M(a,new W.hB(u))
return u},
gl:function(a){return a.size},
$aad:function(){return[P.t,null]},
$ia1:1,
$aa1:function(){return[P.t,null]}}
W.hB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hC.prototype={
h:function(a,b){return P.bf(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bf(u.value[1]))}},
gaS:function(a){var u=H.b([],[P.t])
this.M(a,new W.hD(u))
return u},
gl:function(a){return a.size},
$aad:function(){return[P.t,null]},
$ia1:1,
$aa1:function(){return[P.t,null]}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.b2.prototype={$ib2:1}
W.hE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.b2]},
$iA:1,
$aA:function(){return[W.b2]},
$aw:function(){return[W.b2]},
$im:1,
$am:function(){return[W.b2]}}
W.aO.prototype={$iaO:1}
W.jA.prototype={
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.dh(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.I]},
$aw:function(){return[W.I]},
$am:function(){return[W.I]}}
W.I.prototype={
ji:function(a,b){var u,t
try{u=a.parentNode
J.mM(u,b,a)}catch(t){H.a8(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eL(a):u},
hU:function(a,b,c){return a.replaceChild(b,c)},
$iI:1}
W.dz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.I]},
$iA:1,
$aA:function(){return[W.I]},
$aw:function(){return[W.I]},
$im:1,
$am:function(){return[W.I]}}
W.b4.prototype={$ib4:1,
gl:function(a){return a.length}}
W.hU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.b4]},
$iA:1,
$aA:function(){return[W.b4]},
$aw:function(){return[W.b4]},
$im:1,
$am:function(){return[W.b4]}}
W.cA.prototype={$icA:1}
W.i9.prototype={
h:function(a,b){return P.bf(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bf(u.value[1]))}},
gaS:function(a){var u=H.b([],[P.t])
this.M(a,new W.ia(u))
return u},
gl:function(a){return a.size},
$aad:function(){return[P.t,null]},
$ia1:1,
$aa1:function(){return[P.t,null]}}
W.ia.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ic.prototype={
gl:function(a){return a.length}}
W.b7.prototype={$ib7:1}
W.iq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.b7]},
$iA:1,
$aA:function(){return[W.b7]},
$aw:function(){return[W.b7]},
$im:1,
$am:function(){return[W.b7]}}
W.b8.prototype={$ib8:1}
W.ir.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.b8]},
$iA:1,
$aA:function(){return[W.b8]},
$aw:function(){return[W.b8]},
$im:1,
$am:function(){return[W.b8]}}
W.b9.prototype={$ib9:1,
gl:function(a){return a.length}}
W.iA.prototype={
h:function(a,b){return a.getItem(b)},
M:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaS:function(a){var u=H.b([],[P.t])
this.M(a,new W.iB(u))
return u},
gl:function(a){return a.length},
$aad:function(){return[P.t,P.t]},
$ia1:1,
$aa1:function(){return[P.t,P.t]}}
W.iB.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aR.prototype={$iaR:1}
W.bb.prototype={$ibb:1}
W.aS.prototype={$iaS:1}
W.iH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aS]},
$iA:1,
$aA:function(){return[W.aS]},
$aw:function(){return[W.aS]},
$im:1,
$am:function(){return[W.aS]}}
W.iI.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.bb]},
$iA:1,
$aA:function(){return[W.bb]},
$aw:function(){return[W.bb]},
$im:1,
$am:function(){return[W.bb]}}
W.iT.prototype={
gl:function(a){return a.length}}
W.bc.prototype={$ibc:1}
W.bZ.prototype={$ibZ:1}
W.iW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.bc]},
$iA:1,
$aA:function(){return[W.bc]},
$aw:function(){return[W.bc]},
$im:1,
$am:function(){return[W.bc]}}
W.iX.prototype={
gl:function(a){return a.length}}
W.bA.prototype={}
W.jb.prototype={
i:function(a){return String(a)}}
W.jq.prototype={
gl:function(a){return a.length}}
W.bD.prototype={
giu:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.z("deltaY is not supported"))},
git:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.z("deltaX is not supported"))},
$ibD:1}
W.cI.prototype={
hV:function(a,b){return a.requestAnimationFrame(H.c6(b,1))},
fz:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.L]},
$iA:1,
$aA:function(){return[W.L]},
$aw:function(){return[W.L]},
$im:1,
$am:function(){return[W.L]}}
W.e5.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.W(b)
return!!u.$iaq&&a.left===u.gbJ(b)&&a.top===u.gbN(b)&&a.width===u.gav(b)&&a.height===u.gap(b)},
gK:function(a){return W.m9(C.c.gK(a.left),C.c.gK(a.top),C.c.gK(a.width),C.c.gK(a.height))},
gap:function(a){return a.height},
gav:function(a){return a.width}}
W.jS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aY]},
$iA:1,
$aA:function(){return[W.aY]},
$aw:function(){return[W.aY]},
$im:1,
$am:function(){return[W.aY]}}
W.ep.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.I]},
$iA:1,
$aA:function(){return[W.I]},
$aw:function(){return[W.I]},
$im:1,
$am:function(){return[W.I]}}
W.k2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.b9]},
$iA:1,
$aA:function(){return[W.b9]},
$aw:function(){return[W.b9]},
$im:1,
$am:function(){return[W.b9]}}
W.k4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aR]},
$iA:1,
$aA:function(){return[W.aR]},
$aw:function(){return[W.aR]},
$im:1,
$am:function(){return[W.aR]}}
W.jD.prototype={}
W.jE.prototype={
$1:function(a){return this.a.$1(a)}}
W.N.prototype={
gT:function(a){return new W.dh(a,this.gl(a))}}
W.dh.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.F(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cN.prototype={}
W.cO.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eC.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eU.prototype={}
W.eV.prototype={}
W.eW.prototype={}
P.eM.prototype={$ibp:1,
gdV:function(a){return this.a}}
P.kk.prototype={
$2:function(a,b){this.a[a]=b},
$S:9}
P.fL.prototype={
gbv:function(){var u=this.b,t=H.kq(u,"w",0)
return new H.cs(new H.jr(u,new P.fM(),[t]),new P.fN(),[t,W.a3])},
m:function(a,b,c){var u=this.gbv()
J.mP(u.b.$1(J.kE(u.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aB(this.gbv().a)},
h:function(a,b){var u=this.gbv()
return u.b.$1(J.kE(u.a,b))},
gT:function(a){var u=P.kY(this.gbv(),!1,W.a3)
return new J.a9(u,u.length)},
$au:function(){return[W.a3]},
$aw:function(){return[W.a3]},
$am:function(){return[W.a3]}}
P.fM.prototype={
$1:function(a){return!!J.W(a).$ia3}}
P.fN.prototype={
$1:function(a){return H.j(a,"$ia3")}}
P.jX.prototype={
gcM:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.c(t)
return u+t},
gdO:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.c(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.W(b)
if(!!u.$iaq){t=q.a
if(t==u.gbJ(b)){s=q.b
if(s==u.gbN(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.c(r)
if(t+r===u.gcM(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.c(t)
u=s+t===u.gdO(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u=this,t=u.a,s=J.ce(t),r=u.b,q=J.ce(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.c(p)
p=C.d.gK(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.c(t)
t=C.d.gK(r+t)
return P.nO(P.jU(P.jU(P.jU(P.jU(0,s),q),p),t))}}
P.aq.prototype={
gbJ:function(a){return this.a},
gbN:function(a){return this.b},
gav:function(a){return this.c},
gap:function(a){return this.d}}
P.bu.prototype={$ibu:1}
P.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.bu]},
$aw:function(){return[P.bu]},
$im:1,
$am:function(){return[P.bu]}}
P.by.prototype={$iby:1}
P.hN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.by]},
$aw:function(){return[P.by]},
$im:1,
$am:function(){return[P.by]}}
P.hX.prototype={
gl:function(a){return a.length}}
P.iE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.t]},
$aw:function(){return[P.t]},
$im:1,
$am:function(){return[P.t]}}
P.p.prototype={
gck:function(a){return new P.fL(a,new W.jA(a))}}
P.bz.prototype={$ibz:1}
P.iY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.bz]},
$aw:function(){return[P.bz]},
$im:1,
$am:function(){return[P.bz]}}
P.eg.prototype={}
P.eh.prototype={}
P.es.prototype={}
P.et.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.eK.prototype={}
P.eL.prototype={}
P.f7.prototype={
gl:function(a){return a.length}}
P.f8.prototype={
h:function(a,b){return P.bf(a.get(b))},
M:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bf(u.value[1]))}},
gaS:function(a){var u=H.b([],[P.t])
this.M(a,new P.f9(u))
return u},
gl:function(a){return a.size},
$aad:function(){return[P.t,null]},
$ia1:1,
$aa1:function(){return[P.t,null]}}
P.f9.prototype={
$2:function(a,b){return this.a.push(a)}}
P.fa.prototype={
gl:function(a){return a.length}}
P.bM.prototype={}
P.hO.prototype={
gl:function(a){return a.length}}
P.e2.prototype={}
P.dF.prototype={
eu:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.W(g)
if(!!u.$ibp&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.ot(g))
return}if(!!u.$icp&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.mR("Incorrect number or type of arguments"))},
es:function(a,b,c,d,e,f,g){return this.eu(a,b,c,d,e,f,g,null,null,null)}}
P.it.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.O(b,a,null,null,null))
return P.bf(a.item(b))},
m:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
H:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[[P.a1,,,]]},
$aw:function(){return[[P.a1,,,]]},
$im:1,
$am:function(){return[[P.a1,,,]]}}
P.ez.prototype={}
P.eA.prototype={}
K.f2.prototype={
b7:function(a,b){return!0},
i:function(a){return"all"}}
K.di.prototype={
b7:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].b7(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.ds.prototype={}
K.b3.prototype={
b7:function(a,b){return!this.eK(0,b)},
i:function(a){return"!["+this.d0(0)+"]"}}
K.id.prototype={
eY:function(a){var u,t,s,r
if(a.a.length<=0)throw H.e(P.k("May not create a Set with zero characters."))
u=P.y
t=new H.H([u,P.bF])
for(s=new H.cr(a,a.gl(a));s.A();)t.m(0,s.d,!0)
r=P.kY(new H.bV(t,[u]),!0,u)
C.a.eI(r)
this.a=r},
b7:function(a,b){return C.a.ab(this.a,b)},
i:function(a){return P.la(this.a)}}
L.dL.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dV(this.a.P(0,b))
r.a=H.b([],[K.ds])
r.c=!1
this.c.push(r)
return r},
iB:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.b7(0,a))return r}return},
i:function(a){return this.b},
dD:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.ab(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bV(n,[H.as(n,0)]),n=n.gT(n);n.A();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.ab(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.o)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dT.prototype={
i:function(a){var u=H.mu(this.b,"\n","\\n"),t=H.mu(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dU.prototype={
i:function(a){return this.b}}
L.iU.prototype={
P:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dL(this,b)
u.c=H.b([],[L.dV])
this.a.m(0,b,u)}return u},
bn:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dU(a)
u=P.t
t.c=new H.H([u,u])
this.b.m(0,a,t)}return t},
ey:function(a){return this.ju(a)},
ju:function(a){var u=this
return P.nX(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$ey(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.y]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.jg(c,0)
else{if(!t.A()){s=3
break}l=t.d}d.push(l);++o
k=g.iB(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.la(d)
throw H.e(P.k("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.n(P.z("removeRange"))
P.l4(0,m,d.length)
d.splice(0,m-0)
C.a.ax(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.ab(0,p.a)?7:8
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
if(g.d!=null){j=P.la(e)
i=g.d
h=i.c.h(0,j)
p=new L.dT(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.ab(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nM()
case 1:return P.nN(q)}}},L.dT)},
i:function(a){var u,t=new P.ba(""),s=this.d
if(s!=null)t.a=s.dD()+"\n"
for(s=this.a,s=s.gjw(s),s=new H.dr(J.bK(s.a),s.b);s.A();){u=s.a
if(u!=this.d)t.a+=u.dD()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dV.prototype={
i:function(a){return this.b.b+": "+this.d0(0)}}
O.aD.prototype={
bq:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cV:function(a,b,c){this.b=b
this.c=a},
ba:function(a,b){return this.cV(a,null,b)},
aP:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
d4:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a9(u,u.length)},
H:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
j:function(a,b){var u,t,s=this,r=[H.kq(s,"aD",0)]
if(s.aP(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.d4(t,H.b([b],r))}},
ax:function(a,b){var u,t
if(this.aP(b)){u=this.a
t=u.length
C.a.ax(u,b)
this.d4(t,b)}},
$im:1}
O.cu.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
aX:function(){var u=this.b
if(u!=null)u.C(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gcC(u)
else return V.bw()},
bM:function(a){var u=this.a
if(a==null)u.push(V.bw())
else u.push(a)
this.aX()},
aU:function(){var u=this.a
if(u.length>0){u.pop()
this.aX()}}}
E.fd.prototype={}
E.ap.prototype={
am:function(a,b,c,d,e,f){var u,t=this
t.a=d
t.b=b
t.x=t.r=t.f=t.e=t.d=t.c=null
u=O.kK(E.ap)
t.y=u
u.ba(t.giP(),t.giS())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa_(0,e)
t.sZ(f)
t.sbK(c)
if(a!=null)t.y.ax(0,a)},
dd:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a9(u,u.length);u.A();){t=u.d
if(t.f==null)t.dd()}},
sa_:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().R(0,s.gel())
u=s.c
if(u!=null)u.gt().j(0,s.gel())
t=new D.x("shape",r,s.c)
t.b=!0
s.aB(t)}},
sZ:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gt().R(0,s.gen())
u=s.f
s.f=a
if(a!=null)a.gt().j(0,s.gen())
s.dd()
t=new D.x("technique",u,s.f)
t.b=!0
s.aB(t)}},
sbK:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gt().R(0,s.gej())
if(a!=null)a.gt().j(0,s.gej())
s.r=a
t=new D.x("mover",u,a)
t.b=!0
s.aB(t)}},
aE:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.x("matrix",u,q)
t.b=!0
s.aB(t)}r=s.f
if(r!=null)r.aE(0,b)
for(r=s.y.a,r=new J.a9(r,r.length);r.A();)r.d.aE(0,b)},
aa:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.gV(u))
else u.a.push(t.k(0,u.gV(u)))
u.aX()
a.cJ(r.f)
u=a.dy
s=(u&&C.a).gcC(u)
if(s!=null&&r.d!=null)s.cK(a,r)
for(u=r.y.a,u=new J.a9(u,u.length);u.A();)u.d.aa(a)
a.cI()
a.dx.aU()},
aB:function(a){var u=this.z
if(u!=null)u.C(a)},
ai:function(){return this.aB(null)},
em:function(a){this.e=null
this.aB(a)},
iV:function(){return this.em(null)},
eo:function(a){this.aB(a)},
iW:function(){return this.eo(null)},
ek:function(a){this.aB(a)},
iU:function(){return this.ek(null)},
ei:function(a){this.aB(a)},
iR:function(){return this.ei(null)},
iQ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.geh(),s=[{func:1,ret:-1,args:[D.a0]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bP()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.ai()},
iT:function(a,b){var u,t
for(u=b.gT(b),t=this.geh();u.A();)u.gJ(u).gt().R(0,t)
this.ai()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.i1.prototype={
eW:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aw(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cu()
t=[V.b0]
u.a=H.b([],t)
u.gt().j(0,new E.i2(s))
s.cy=u
u=new O.cu()
u.a=H.b([],t)
u.gt().j(0,new E.i3(s))
s.db=u
u=new O.cu()
u.a=H.b([],t)
u.gt().j(0,new E.i4(s))
s.dx=u
u=H.b([],[O.dO])
s.dy=u
u.push(null)
s.fr=new H.H([P.t,A.dG])},
gje:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.k(0,u.gV(u))
s=u}return s},
gep:function(){var u,t=this,s=t.ch
if(s==null){s=t.gje()
u=t.dx
u=t.ch=s.k(0,u.gV(u))
s=u}return s},
cJ:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gcC(u):a)},
cI:function(){var u=this.dy
if(u.length>1)u.pop()},
cc:function(a){var u=a.b
if(u.length===0)throw H.e(P.k("May not cache a shader with no name."))
if(this.fr.iq(0,u))throw H.e(P.k('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.i2.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.i3.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.i4.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dQ.prototype={
d7:function(a){this.cL()},
d6:function(){return this.d7(null)},
giD:function(){var u,t=this,s=Date.now(),r=C.d.a8(P.lC(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aw(s,!1)
return u/r},
dw:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.k()
if(typeof r!=="number")return H.c(r)
u=C.c.b6(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.k()
t=C.c.b6(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.ld(C.h,s.gjj())}},
cL:function(){if(!this.cx){this.cx=!0
var u=window
C.t.fz(u)
C.t.hV(u,W.mi(new E.iQ(this),P.at))}},
aa:function(a){var u,t,s,r,q,p=this
try{++p.db
p.cx=!1
p.dw()
if(a==null)a=p.d
if(a!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aw(r,!1)
s.y=P.lC(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aX()
r=s.db
C.a.sl(r.a,0)
r.aX()
r=s.dx
C.a.sl(r.a,0)
r.aX()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
a.aa(p.e)}}catch(q){u=H.a8(q)
t=H.bG(q)
P.f_("Error: "+H.f(u))
P.f_("Stack: "+H.f(t))
throw H.e(u)}},
jh:function(){return this.aa(null)}}
E.iQ.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.jh()}}}
Z.e0.prototype={}
Z.d3.prototype={
S:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.a8(s)
t=P.k('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.cH.prototype={}
Z.bN.prototype={
aK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
S:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].S(a)},
ag:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aa:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.t],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.an(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.u(p,", ")+"\nAttrs:   "+C.a.u(r,", ")}}
Z.bS.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cz(this.c))+"'")+"]"}}
Z.bd.prototype={
gcZ:function(a){var u=this.a,t=(u&$.au().a)!==0?3:0
if((u&$.bj().a)!==0)t+=3
if((u&$.bi().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bJ().a)!==0)t+=3
if((u&$.cX().a)!==0)t+=3
if((u&$.cY().a)!==0)t+=4
if((u&$.cd().a)!==0)++t
return(u&$.bh().a)!==0?t+4:t},
ih:function(a){var u,t=$.au(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bi()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cY()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bh()
if((s&t.a)!==0)if(u===a)return t
return $.mK()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bd))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.t]),t=this.a
if((t&$.au().a)!==0)u.push("Pos")
if((t&$.bj().a)!==0)u.push("Norm")
if((t&$.bi().a)!==0)u.push("Binm")
if((t&$.bk().a)!==0)u.push("Txt2D")
if((t&$.bJ().a)!==0)u.push("TxtCube")
if((t&$.cX().a)!==0)u.push("Clr3")
if((t&$.cY().a)!==0)u.push("Clr4")
if((t&$.cd().a)!==0)u.push("Weight")
if((t&$.bh().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.u(u,"|")}}
D.fk.prototype={}
D.bP.prototype={
j:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.a0]}]):u).push(b)},
R:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.ab(s,b)
if(s===!0){s=t.a
u=(s&&C.a).R(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.ab(s,b)
if(s===!0){s=t.b
u=(s&&C.a).R(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.a0()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.M(P.kY(u,!0,{func:1,ret:-1,args:[D.a0]}),new D.fH(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.a0]}])
C.a.M(u,new D.fI(q))}return!0},
cn:function(){return this.C(null)},
b8:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.fH.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fI.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.a0.prototype={}
D.bq.prototype={}
D.br.prototype={}
D.x.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
O.ke.prototype={
aD:function(a,b,c){return this.jc(a,b,!1)},
jc:function(a,b,c){var u=0,t=P.aj(null),s=this
var $async$aD=P.al(function(d,e){if(d===1)return P.ag(e,t)
while(true)switch(u){case 0:u=2
return P.a7(s.aC(H.b(a.split("\n"),[P.t]),b,!1),$async$aD)
case 2:return P.ah(null,t)}})
return P.ai($async$aD,t)},
aC:function(a,b,c){return this.ja(a,b,!1)},
ja:function(a,b,c){var u=0,t=P.aj(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$aC=P.al(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.W()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.d(a,m)
u=1
break}u=9
return P.a7(o.ad(a[m],b,!1),$async$aC)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a8(i)
m=j
if(typeof m!=="number"){s=m.D()
u=1
break}throw H.e(P.k("Line "+H.f(m+1)+": "+H.f(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.D()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$aC,t)},
ad:function(a,b,c){return this.j8(a,b,!1)},
j8:function(a,b,c){var u=0,t=P.aj(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g
var $async$ad=P.al(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.lv(a,"#")
k=n
if(typeof k!=="number"){s=k.cR()
u=1
break}if(k>=0)a=J.lw(a,0,n)
a=J.kF(a)
if(J.aB(a)<=0){u=1
break}m=O.mh(a)
if(J.aB(m)<1){u=1
break}case 7:switch(J.F(m,0)){case"newmtl":u=9
break
case"Ka":u=10
break
case"Kd":u=11
break
case"Ks":u=12
break
case"Ns":u=13
break
case"d":u=14
break
case"Tr":u=15
break
case"map_Ka":u=16
break
case"map_Kd":u=17
break
case"map_Ks":u=18
break
case"map_d":u=19
break
case"map_bump":u=20
break
case"bump":u=21
break
default:u=22
break}break
case 9:k=J.F(m,1)
j=O.a4()
o.c=j
o.b.m(0,k,j)
u=1
break
case 10:i=O.be(J.F(m,1))
o.c.r.sq(0,V.kL(i))
u=1
break
case 11:i=O.be(J.F(m,1))
o.c.x.sq(0,V.kL(i))
u=1
break
case 12:i=O.be(J.F(m,1))
o.c.z.sq(0,V.kL(i))
u=1
break
case 13:i=O.be(J.F(m,1))
k=i.length
if(k!==1)H.n(P.k("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.d(i,0)
u=1
break}j.sa9(i[0])
u=1
break
case 14:i=O.be(J.F(m,1))
k=i.length
if(k!==1)H.n(P.k("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}j.saj(0,i[0])
u=1
break
case 15:i=O.be(J.F(m,1))
k=i.length
if(k!==1)H.n(P.k("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.d(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.c(k)
u=1
break}j.saj(0,1-k)
u=1
break
case 16:u=23
return P.a7(o.c3(J.F(m,1),b),$async$ad)
case 23:u=1
break
case 17:u=24
return P.a7(o.c4(J.F(m,1),b),$async$ad)
case 24:u=1
break
case 18:u=25
return P.a7(o.c5(J.F(m,1),b),$async$ad)
case 25:u=1
break
case 19:u=26
return P.a7(o.c2(J.F(m,1),b),$async$ad)
case 26:u=1
break
case 20:u=27
return P.a7(o.bx(J.F(m,1),b),$async$ad)
case 27:u=1
break
case 21:u=28
return P.a7(o.bx(J.F(m,1),b),$async$ad)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
g=q
l=H.a8(g)
k=P.k('Line: "'+H.f(a)+'": '+H.f(l))
throw H.e(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$ad,t)},
c3:function(a,b){return this.hK(a,b)},
hK:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$c3=P.al(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sae(s.a.aq(r))
return P.ah(null,t)}})
return P.ai($async$c3,t)},
c4:function(a,b){return this.hM(a,b)},
hM:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$c4=P.al(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sae(s.a.aq(r))
return P.ah(null,t)}})
return P.ai($async$c4,t)},
c5:function(a,b){return this.hR(a,b)},
hR:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$c5=P.al(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sae(s.a.aq(r))
return P.ah(null,t)}})
return P.ai($async$c5,t)},
c2:function(a,b){return this.hJ(a,b)},
hJ:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$c2=P.al(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sae(s.a.aq(r))
return P.ah(null,t)}})
return P.ai($async$c2,t)},
bx:function(a,b){return this.hL(a,b)},
hL:function(a,b){var u=0,t=P.aj(null),s=this,r
var $async$bx=P.al(function(c,d){if(c===1)return P.ag(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sae(s.a.aq(r))
return P.ah(null,t)}})
return P.ai($async$bx,t)}}
O.eX.prototype={}
O.kf.prototype={
giA:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.d(t,0)
return t[0]}return u},
aD:function(a,b,c){return this.jd(a,b,!1)},
jd:function(a,b,c){var u=0,t=P.aj(null),s=this
var $async$aD=P.al(function(d,e){if(d===1)return P.ag(e,t)
while(true)switch(u){case 0:u=2
return P.a7(s.aC(H.b(a.split("\n"),[P.t]),b,!1),$async$aD)
case 2:return P.ah(null,t)}})
return P.ai($async$aD,t)},
aC:function(a,b,c){return this.jb(a,b,!1)},
jb:function(a,b,c){var u=0,t=P.aj(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$aC=P.al(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.W()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.d(a,m)
u=1
break}u=9
return P.a7(o.ad(a[m],b,!1),$async$aC)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a8(i)
m=j
if(typeof m!=="number"){s=m.D()
u=1
break}throw H.e(P.k("Line "+H.f(m+1)+": "+H.f(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.D()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$aC,t)},
ad:function(a,b,c){return this.j9(a,b,!1)},
j9:function(a,b,c){var u=0,t=P.aj(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$ad=P.al(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.lv(a,"#")
k=n
if(typeof k!=="number"){s=k.cR()
u=1
break}if(k>=0)a=J.lw(a,0,n)
a=J.kF(a)
if(J.aB(a)<=0){u=1
break}m=O.mh(a)
if(J.aB(m)<1){u=1
break}case 7:switch(J.F(m,0)){case"v":u=9
break
case"vt":u=10
break
case"vn":u=11
break
case"p":u=12
break
case"l":u=13
break
case"f":u=14
break
case"mtllib":u=15
break
case"usemtl":u=16
break
case"g":u=17
break
case"o":u=18
break
default:u=19
break}break
case 9:j=O.be(J.F(m,1))
k=j.length
if(k<3)H.n(P.k("Positions must have at least 3 numbers."))
if(k>4)H.n(P.k("Positions must have at most than 4 numbers."))
if(k===4){if(3>=k){s=H.d(j,3)
u=1
break}i=j[3]
h=$.B()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-1)<h.a))H.n(P.k("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=k){s=H.d(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.d(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.d(j,2)
u=1
break}g=[h,g,j[2]]
g=new O.eX(new V.Z(g[0],g[1],g[2]))
g.b=H.b([],[F.aI])
i.push(g)
u=1
break
case 10:j=O.be(J.F(m,1))
k=j.length
if(k<2)H.n(P.k("Textures must have at least 2 numbers."))
if(k>3)H.n(P.k("Textures must have at most than 3 numbers."))
if(k===3){if(2>=k){s=H.d(j,2)
u=1
break}i=j[2]
h=$.B()
h.toString
if(typeof i!=="number"){s=i.p()
u=1
break}if(!(Math.abs(i-0)<h.a))H.n(P.k("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=k){s=H.d(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.d(j,1)
u=1
break}h=[h,j[1]]
i.push(new V.a2(h[0],h[1]))
u=1
break
case 11:j=O.be(J.F(m,1))
k=j.length
if(k!==3)H.n(P.k("Normals must have exactly 3 numbers."))
i=o.d
if(0>=k){s=H.d(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.d(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.d(j,2)
u=1
break}i.push(new V.C(h,g,j[2]))
u=1
break
case 12:o.hQ(J.F(m,1))
u=1
break
case 13:o.hO(J.F(m,1))
u=1
break
case 14:o.hN(J.F(m,1))
u=1
break
case 15:u=20
return P.a7(o.by(J.F(m,1),b,!1),$async$ad)
case 20:u=1
break
case 16:k=J.F(m,1)
o.x=o.e.h(0,k)
o.bC()
u=1
break
case 17:o.r=J.F(m,1)
o.bC()
u=1
break
case 18:o.r=J.F(m,1)
o.bC()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.a8(e)
k=P.k('Line: "'+H.f(a)+'": '+H.f(l))
throw H.e(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.ah(s,t)
case 2:return P.ag(q,t)}})
return P.ai($async$ad,t)},
bC:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.l9()
r.y=u
u=E.P(null,!0,null,"",u,null)
r.z=u
r.Q.y.j(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)C.a.sl(u[s].b,0)}r.z.sZ(r.x)
r.z.a=r.r},
bT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=", was out of range [-",g=null,f=a.split("/"),e=f.length
if(0>=e)return H.d(f,0)
u=P.lp(f[0])
t=i.b.length
if(typeof u!=="number")return u.W()
if(u<-t||u>t||u===0)throw H.e(P.k("The position index, "+u+h+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.lp(s)
q=i.c
t=q.length
if(typeof r!=="number")return r.W()
if(r<-t||r>t||r===0)throw H.e(P.k("The texture index, "+r+h+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.d(q,p)
o=q[p]}else o=g}else o=g
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.lp(s)
e=i.d
t=e.length
if(typeof n!=="number")return n.W()
if(n<-t||n>t||n===0)throw H.e(P.k("The normal index, "+n+h+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.d(e,q)
m=e[q]}else m=g}else m=g
e=i.b
if(u<0||u>=e.length)return H.d(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.o)(e),++k){j=e[k]
if(J.D(j.y,o)&&J.D(j.r,m))return j}j=F.lg(g,g,g,g,g,g,g,g,0)
e=l.a
if(!J.D(j.f,e)){j.f=e
e=j.a
if(e!=null)e.ai()}if(!J.D(j.y,o)){j.y=o
e=j.a
if(e!=null)e.ai()}m=m==null?g:m.v(0,Math.sqrt(m.F(m)))
if(!J.D(j.r,m)){j.r=m
e=j.a
if(e!=null)e.ai()}i.y.a.j(0,j)
l.b.push(j)
return j},
hQ:function(a){var u,t=O.ki(a),s=H.b([],[F.aI]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
s.push(this.bT(t[u]))}this.y.b.ie(s)},
hO:function(a){var u,t=O.ki(a),s=H.b([],[F.aI]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
s.push(this.bT(t[u]))}this.y.c.ic(s)},
hN:function(a){var u,t=O.ki(a),s=H.b([],[F.aI]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.d(t,u)
s.push(this.bT(t[u]))}this.y.d.cb(s)},
by:function(a,b,c){return this.hP(a,b,!1)},
hP:function(a,b,c){var u=0,t=P.aj(null),s=this,r
var $async$by=P.al(function(d,e){if(d===1)return P.ag(e,t)
while(true)switch(u){case 0:u=2
return P.a7(O.dv(b+"/"+a,s.a,!1),$async$by)
case 2:r=e
s.e.ax(0,r)
return P.ah(null,t)}})
return P.ai($async$by,t)}}
O.hY.prototype={}
X.d4.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d4))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.dn.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dn))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.h3.prototype={
j1:function(a){this.d.j(0,a.a)
return!1},
iY:function(a){this.d.R(0,a.a)
return!1}}
X.dq.prototype={}
X.hg.prototype={
bg:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.k()
u=b.b
t=p.ch
if(typeof u!=="number")return u.k()
s=n.a
if(typeof s!=="number")return s.D()
n=n.b
if(typeof n!=="number")return n.D()
r=new V.a2(s+m*l,n+u*t)
t=p.a.gbF()
q=new X.aF(a,V.b5(),p.x,t,r)
q.b=!0
p.z=new P.aw(o,!1)
p.x=r
return q},
cH:function(a,b){this.r=a.a
return!1},
bm:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eC()
if(typeof u!=="number")return u.w()
this.r=(u&~t)>>>0
return!1},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bg(a,b))
return!0},
j2:function(a){return!1},
hi:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dq(c,r.a.gbF(),b)
s.b=!0
t.C(s)
r.y=new P.aw(u,!1)
r.x=V.b5()}}
X.bx.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bx))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aF.prototype={}
X.hF.prototype={
bZ:function(a,b,c){var u=this,t=new P.aw(Date.now(),!1),s=u.a.gbF(),r=new X.aF(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cH:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bZ(a,b,!0))
return!0},
bm:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eC()
if(typeof t!=="number")return t.w()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bZ(a,b,!0))
return!0},
bl:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bZ(a,b,!1))
return!0},
j3:function(a,b){return!1},
gdW:function(){var u=this.b
return u==null?this.b=D.E():u},
gcP:function(){var u=this.c
return u==null?this.c=D.E():u},
gbk:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.hW.prototype={}
X.cB.prototype={}
X.iV.prototype={
bg:function(a,b){var u=this,t=new P.aw(Date.now(),!1),s=a.length>0?a[0]:V.b5(),r=u.a.gbF(),q=new X.cB(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
j0:function(a){var u=this.b
if(u==null)return!1
u.C(this.bg(a,!0))
return!0},
iZ:function(a){var u=this.c
if(u==null)return!1
u.C(this.bg(a,!0))
return!0},
j_:function(a){var u=this.d
if(u==null)return!1
u.C(this.bg(a,!1))
return!0},
gd_:function(a){var u=this.b
return u==null?this.b=D.E():u},
gdY:function(a){var u=this.c
return u==null?this.c=D.E():u},
gbk:function(){var u=this.d
return u==null?this.d=D.E():u}}
X.dY.prototype={
gbF:function(){var u=this.a,t=C.f.gdR(u).c
t.toString
u=C.f.gdR(u).d
u.toString
return V.lX(0,0,t,u)},
di:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dn(u,new X.bx(t,a.altKey,a.shiftKey))},
b1:function(a){a.shiftKey},
ca:function(a){a.shiftKey},
aQ:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.p()
u=t.top
if(typeof r!=="number")return r.p()
return new V.a2(s-q,r-u)},
bh:function(a){return new V.S(a.movementX,a.movementY)},
c6:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a2])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.c.a3(r.pageX)
C.c.a3(r.pageY)
p=o.left
C.c.a3(r.pageX)
n.push(new V.a2(q-p,C.c.a3(r.pageY)-o.top))}return n},
aN:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.d4(u,new X.bx(t,a.altKey,a.shiftKey))},
c_:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.p()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.p()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ha:function(a){this.f=!0},
fZ:function(a){this.f=!1},
h4:function(a){if(this.f&&this.c_(a))a.preventDefault()},
hg:function(a){var u
if(!this.f)return
u=this.di(a)
this.b.j1(u)},
he:function(a){var u
if(!this.f)return
u=this.di(a)
this.b.iY(u)},
hk:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.b1(a)
if(r.x){u=r.aN(a)
t=r.bh(a)
if(r.d.cH(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aN(a)
s=r.aQ(a)
if(r.c.cH(u,s))a.preventDefault()},
ho:function(a){var u,t,s,r=this
r.b1(a)
u=r.aN(a)
if(r.x){t=r.bh(a)
if(r.d.bm(u,t))a.preventDefault()
return}if(r.r)return
s=r.aQ(a)
if(r.c.bm(u,s))a.preventDefault()},
h8:function(a){var u,t,s,r=this
if(!r.c_(a)){r.b1(a)
u=r.aN(a)
if(r.x){t=r.bh(a)
if(r.d.bm(u,t))a.preventDefault()
return}if(r.r)return
s=r.aQ(a)
if(r.c.bm(u,s))a.preventDefault()}},
hm:function(a){var u,t,s,r=this
r.b1(a)
u=r.aN(a)
if(r.x){t=r.bh(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(r.r)return
s=r.aQ(a)
if(r.c.bl(u,s))a.preventDefault()},
h6:function(a){var u,t,s,r=this
if(!r.c_(a)){r.b1(a)
u=r.aN(a)
if(r.x){t=r.bh(a)
if(r.d.bl(u,t))a.preventDefault()
return}if(r.r)return
s=r.aQ(a)
if(r.c.bl(u,s))a.preventDefault()}},
hq:function(a){var u,t,s=this
s.b1(a)
u=new V.S((a&&C.r).git(a),C.r.giu(a)).v(0,180)
if(s.x){if(s.d.j2(u))a.preventDefault()
return}if(s.r)return
t=s.aQ(a)
if(s.c.j3(u,t))a.preventDefault()},
hs:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aN(s.y)
t=s.aQ(s.y)
s.d.hi(u,t,r)}},
hI:function(a){var u,t=this
t.a.focus()
t.f=!0
t.ca(a)
u=t.c6(a)
if(t.e.j0(u))a.preventDefault()},
hE:function(a){var u
this.ca(a)
u=this.c6(a)
if(this.e.iZ(u))a.preventDefault()},
hG:function(a){var u
this.ca(a)
u=this.c6(a)
if(this.e.j_(u))a.preventDefault()}}
D.fc.prototype={$iac:1}
D.ck.prototype={
br:function(a){var u=this.r
if(u!=null)u.C(a)},
sq:function(a,b){var u,t,s=this
if(b==null)b=new V.r(1,1,1)
if(!s.c.n(0,b)){u=s.c
s.c=b
t=new D.x("color",u,b)
t.b=!0
s.br(t)}},
$iac:1}
D.ac.prototype={}
D.dp.prototype={
br:function(a){var u=this.y
if(u!=null)u.C(a)},
dr:function(a){var u=this.z
if(u!=null)u.C(a)},
hh:function(){return this.dr(null)},
hu:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.fs(s))return!1}return!0},
fT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdq(),s=[{func:1,ret:-1,args:[D.a0]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.ck)this.f.push(q)
p=q.r
if(p==null){p=new D.bP()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bq()
u.b=!0
this.br(u)},
hy:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gdq();u.A();){s=u.gJ(u)
C.a.R(this.e,s)
s.gt().R(0,t)}u=new D.br()
u.b=!0
this.br(u)},
fs:function(a){var u=C.a.ab(this.f,a)
return u},
$am:function(){return[D.ac]},
$aaD:function(){return[D.ac]}}
D.hV.prototype={$iac:1}
D.is.prototype={$iac:1}
V.r.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.r))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.ao.prototype={
eA:function(){var u=this
return new V.ao(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ao))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.fG.prototype={}
V.dt.prototype={
af:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.c8(H.b([q.a,q.d,q.r],p),3,0),n=V.c8(H.b([q.b,q.e,q.x],p),3,0),m=V.c8(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.d(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.d(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.d(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.d(o,1)
r=" "+o[1]+", "
if(1>=t)return H.d(n,1)
r=r+n[1]+", "
if(1>=s)return H.d(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.d(o,2)
p=" "+o[2]+", "
if(2>=t)return H.d(n,2)
p=p+n[2]+", "
if(2>=s)return H.d(m,2)
return r+(p+m[2]+"]")}}
V.b0.prototype={
af:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
cB:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.c(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.c(r)
q=a9.c
if(typeof q!=="number")return q.k()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.k()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.k()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.k()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.B().a)return V.bw()
a6=1/a5
a7=-t
a8=-f
return V.b1((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
k:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.k()
if(typeof b1!=="number")return H.c(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.c(o)
n=b3.f
if(typeof n!=="number")return H.c(n)
m=b3.z
if(typeof m!=="number")return H.c(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.c(k)
j=b3.r
if(typeof j!=="number")return H.c(j)
i=b3.Q
if(typeof i!=="number")return H.c(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.k()
b=a9.f
if(typeof b!=="number")return b.k()
a=a9.r
if(typeof a!=="number")return a.k()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.k()
a2=a9.z
if(typeof a2!=="number")return a2.k()
a3=a9.Q
if(typeof a3!=="number")return a3.k()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.b1(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
bO:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.c(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.C(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
bo:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.k()
if(typeof i!=="number")return H.c(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
q=k.e
if(typeof q!=="number")return q.k()
p=k.f
if(typeof p!=="number")return p.k()
o=k.r
if(typeof o!=="number")return o.k()
n=k.y
if(typeof n!=="number")return n.k()
m=k.z
if(typeof m!=="number")return m.k()
l=k.Q
if(typeof l!=="number")return l.k()
return new V.Z(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.c8(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.c8(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.c8(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.c8(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.d(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.d(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.d(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.d(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.d(n,1)
q=q+n[1]+", "
if(1>=t)return H.d(m,1)
q=q+m[1]+", "
if(1>=s)return H.d(l,1)
q=q+l[1]+", "
if(1>=r)return H.d(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.d(n,2)
u=u+n[2]+", "
if(2>=t)return H.d(m,2)
u=u+m[2]+", "
if(2>=s)return H.d(l,2)
u=u+l[2]+", "
if(2>=r)return H.d(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.d(n,3)
q=q+n[3]+", "
if(3>=t)return H.d(m,3)
q=q+m[3]+", "
if(3>=s)return H.d(l,3)
q=q+l[3]+", "
if(3>=r)return H.d(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.G("")}}
V.a2.prototype={
p:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.c(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
return new V.a2(s-r,u-t)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.Z.prototype={
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.c(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.c(r)
return new V.Z(q-p,u-t,s-r)},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
V.aQ.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aQ))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.dE.prototype={
gaL:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dE))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.K(u.a,3,0)+", "+V.K(u.b,3,0)+", "+V.K(u.c,3,0)+", "+V.K(u.d,3,0)+"]"}}
V.S.prototype={
cD:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
return s*r+u*t},
k:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.k()
u=this.b
if(typeof u!=="number")return u.k()
return new V.S(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.m5
return u==null?$.m5=new V.S(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.S(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+"]"}}
V.C.prototype={
cD:function(a){return Math.sqrt(this.F(this))},
F:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.k()
if(typeof r!=="number")return H.c(r)
return q*p+u*t+s*r},
bi:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.k()
if(typeof p!=="number")return H.c(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.k()
if(typeof t!=="number")return H.c(t)
s=a.a
if(typeof s!=="number")return H.c(s)
r=this.a
if(typeof r!=="number")return r.k()
return new V.C(q*p-u*t,u*s-r*p,r*t-q*s)},
D:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.D()
if(typeof p!=="number")return H.c(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.c(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.D()
if(typeof r!=="number")return H.c(r)
return new V.C(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.C(-s,-u,-t)},
v:function(a,b){var u,t,s
if(Math.abs(b-0)<$.B().a)return V.e_()
u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
s=this.c
if(typeof s!=="number")return s.v()
return new V.C(u/b,t/b,s/b)},
ee:function(){var u=this.a,t=$.B()
t.toString
if(typeof u!=="number")return H.c(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.c(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.c(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=r.a
s=$.B()
s.toString
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.K(this.a,3,0)+", "+V.K(this.b,3,0)+", "+V.K(this.c,3,0)+"]"}}
U.fm.prototype={
bU:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.oW(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
Y:function(a){var u=this.y
if(u!=null)u.C(a)},
scQ:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.x("wrap",u,b)
u.b=!0
this.Y(u)}},
scF:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bU(u)}s=new D.x("maximumLocation",s,t.b)
s.b=!0
t.Y(s)}},
scG:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bU(u)}s=new D.x("minimumLocation",s,t.c)
s.b=!0
t.Y(s)}},
sar:function(a,b){var u,t=this
b=t.bU(b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.x("location",u,b)
u.b=!0
t.Y(u)}},
sef:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.x("maximumVelocity",r,a)
r.b=!0
s.Y(r)}},
sa4:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.x("velocity",t,a)
t.b=!0
u.Y(t)}},
sdU:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.x("dampening",u,a)
u.b=!0
this.Y(u)}},
aE:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sar(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sa4(u)}}}
U.d9.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
sV:function(a,b){var u,t,s,r=this
if(b==null)b=V.bw()
if(!J.D(r.a,b)){u=r.a
r.a=b
t=new D.x("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.C(t)}},
bP:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d9))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cm.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
Y:function(a){var u=this.e
if(u!=null)u.C(a)},
aH:function(){return this.Y(null)},
fR:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbw(),s=[{func:1,ret:-1,args:[D.a0]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bq()
u.b=!0
this.Y(u)},
hw:function(a,b){var u,t
for(u=b.gT(b),t=this.gbw();u.A();)u.gJ(u).gt().R(0,t)
u=new D.br()
u.b=!0
this.Y(u)},
bP:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.W()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a9(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.bP(0,b,c)
if(t!=null)u=u==null?t:t.k(0,u)}}s.f=u==null?V.bw():u
r=s.e
if(r!=null)r.b8(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cm))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$am:function(){return[U.aG]},
$aaD:function(){return[U.aG]},
$iaG:1}
U.aG.prototype={}
U.dZ.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.E():u},
Y:function(a){var u=this.fx
if(u!=null)u.C(a)},
aH:function(){return this.Y(null)},
cd:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdW().j(0,s.gf1())
s.a.c.gbk().j(0,s.gf3())
s.a.c.gcP().j(0,s.gf5())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.j(0,s.gfE())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.j(0,s.gfG())
u=s.a.e
u.gd_(u).j(0,s.gfb())
s.a.e.gbk().j(0,s.gf9())
u=s.a.e
u.gdY(u).j(0,s.gf7())
return!0},
aG:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.S(u,t)},
f2:function(a){var u=this
H.j(a,"$iaF")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f4:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaF")
if(!n.cx)return
if(n.ch){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.c(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.p(0,a.y)
u=n.aG(new V.S(t.a,t.b).k(0,2).v(0,u.gaL()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.c(s)
t.sa4(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.c(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aG(new V.S(s.a,s.b).k(0,2).v(0,u.gaL()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.c(p)
o=n.cy
if(typeof o!=="number")return H.c(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.c(q)
s=n.db
if(typeof s!=="number")return H.c(s)
o.sar(0,-p*q+s)
n.b.sa4(0)
n.c.sa4(0)
t=t.p(0,a.z)
n.dx=n.aG(new V.S(t.a,t.b).k(0,2).v(0,u.gaL()))}n.aH()},
f6:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.c(s)
u.sa4(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.c(u)
s.sa4(-t*10*u)
r.aH()}},
fF:function(a){var u=this
if(H.j(a,"$idq").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fH:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaF")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aG(new V.S(s.a,s.b).k(0,2).v(0,u.gaL()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.c(p)
o=n.cy
if(typeof o!=="number")return H.c(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.c(q)
s=n.db
if(typeof s!=="number")return H.c(s)
o.sar(0,-p*q+s)
n.b.sa4(0)
n.c.sa4(0)
t=t.p(0,a.z)
n.dx=n.aG(new V.S(t.a,t.b).k(0,2).v(0,u.gaL()))
n.aH()},
fc:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fa:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$icB")
if(!n.cx)return
if(n.ch){u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
u=u.F(u)
t=n.Q
if(typeof t!=="number")return H.c(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.p(0,a.y)
u=n.aG(new V.S(t.a,t.b).k(0,2).v(0,u.gaL()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.c(s)
t.sa4(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.c(t)
s.sa4(-u*10*t)}else{u=a.c
t=a.d
s=t.p(0,a.y)
r=n.aG(new V.S(s.a,s.b).k(0,2).v(0,u.gaL()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.c(p)
o=n.cy
if(typeof o!=="number")return H.c(o)
s.sar(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.c(q)
s=n.db
if(typeof s!=="number")return H.c(s)
o.sar(0,-p*q+s)
n.b.sa4(0)
n.c.sa4(0)
t=t.p(0,a.z)
n.dx=n.aG(new V.S(t.a,t.b).k(0,2).v(0,u.gaL()))}n.aH()},
f8:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.F(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.c(s)
u.sa4(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.c(u)
s.sa4(-t*10*u)
r.aH()}},
bP:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.W()
if(s<r){t.dy=r
u=b.y
t.c.aE(0,u)
t.b.aE(0,u)
t.fr=V.lN(t.b.d).k(0,V.l_(t.c.d))}return t.fr},
$iaG:1}
M.d8.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.E():u},
a0:function(a){var u=this.r
if(u!=null)u.C(a)},
bd:function(){return this.a0(null)},
hA:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.a0]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bq()
u.b=!0
this.a0(u)},
hC:function(a,b){var u,t
for(u=b.gT(b),t=this.ga5();u.A();)u.gJ(u).gt().R(0,t)
u=new D.br()
u.b=!0
this.a0(u)},
aa:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a9(u,u.length);u.A();){t=u.d
if(t!=null)t.aa(a)}s.f=!1},
$am:function(){return[M.aH]},
$aaD:function(){return[M.aH]},
$iaH:1}
M.da.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.E():u},
a0:function(a){var u=this.r
if(u!=null)u.C(a)},
bd:function(){return this.a0(null)},
sb4:function(a){var u,t,s=this
if(a==null)a=new X.fV()
u=s.b
if(u!==a){if(u!=null)u.gt().R(0,s.ga5())
t=s.b
s.b=a
a.gt().j(0,s.ga5())
u=new D.x("camera",t,s.b)
u.b=!0
s.a0(u)}},
sb9:function(a,b){var u,t,s=this
if(b==null)b=X.kP(null)
u=s.c
if(u!==b){if(u!=null)u.gt().R(0,s.ga5())
t=s.c
s.c=b
b.gt().j(0,s.ga5())
u=new D.x("target",t,s.c)
u.b=!0
s.a0(u)}},
sZ:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().R(0,t.ga5())
u=t.d
t.d=a
if(a!=null)a.gt().j(0,t.ga5())
s=new D.x("technique",u,t.d)
s.b=!0
t.a0(s)}},
aa:function(a){var u=this
a.cJ(u.d)
u.c.S(a)
u.b.S(a)
u.e.aE(0,a)
u.e.aa(a)
u.b.ag(a)
u.c.toString
a.cI()},
$iaH:1}
M.df.prototype={
a0:function(a){var u=this.y
if(u!=null)u.C(a)},
bd:function(){return this.a0(null)},
h0:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.a0]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bP()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bq()
u.b=!0
this.a0(u)},
h2:function(a,b){var u,t
for(u=b.gT(b),t=this.ga5();u.A();)u.gJ(u).gt().R(0,t)
u=new D.br()
u.b=!0
this.a0(u)},
sb4:function(a){var u,t,s=this
if(a==null)a=X.lR(null)
u=s.b
if(u!==a){if(u!=null)u.gt().R(0,s.ga5())
t=s.b
s.b=a
a.gt().j(0,s.ga5())
u=new D.x("camera",t,s.b)
u.b=!0
s.a0(u)}},
sb9:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gt().R(0,t.ga5())
u=t.c
t.c=b
b.gt().j(0,t.ga5())
s=new D.x("target",u,t.c)
s.b=!0
t.a0(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
aa:function(a){var u,t=this
a.cJ(t.d)
t.c.S(a)
t.b.S(a)
for(u=t.e.a,u=new J.a9(u,u.length);u.A();)u.d.aE(0,a)
for(u=t.e.a,u=new J.a9(u,u.length);u.A();)u.d.aa(a)
t.b.toString
a.cy.aU()
a.db.aU()
t.c.ag(a)
a.cI()},
$iaH:1}
M.aH.prototype={}
A.d_.prototype={}
A.f6.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
iz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
cm:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.T.prototype={
gaj:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
n:function(a,b){if(b==null)return!1
if(!(b instanceof A.T))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hj.prototype={
eS:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ba("")
t=c0.fr
if(t){u.a=b9
s=b9}else s=""
r=c0.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c0.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c0.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.ob(c0,u)
A.od(c0,u)
A.oc(c0,u)
A.of(c0,u)
A.og(c0,u)
A.oe(c0,u)
A.oh(c0,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c0.ry
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
u.a=s}if(c0.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c0.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c0.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c0.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
b5.cA(0,s.charCodeAt(0)==0?s:s,A.oa(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.j(b5.y.I(0,"invViewMat"),"$iab")
if(t)b5.dy=H.j(b5.y.I(0,"objMat"),"$iab")
if(r)b5.fr=H.j(b5.y.I(0,"viewObjMat"),"$iab")
b5.fy=H.j(b5.y.I(0,"projViewObjMat"),"$iab")
if(c0.go)b5.fx=H.j(b5.y.I(0,"viewMat"),"$iab")
if(c0.x1)b5.k1=H.j(b5.y.I(0,"txt2DMat"),"$icE")
if(c0.x2)b5.k2=H.j(b5.y.I(0,"txtCubeMat"),"$iab")
if(c0.y1)b5.k3=H.j(b5.y.I(0,"colorMat"),"$iab")
b5.r1=H.b([],[A.ab])
t=c0.b5
if(t>0){b5.k4=b5.y.I(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.n(P.k(b7+q+b8))
s.push(H.j(m,"$iab"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.I(0,"emissionClr"),"$iG")
if(t.b)b5.rx=H.j(b5.y.I(0,"emissionTxt"),"$ia6")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.I(0,"ambientClr"),"$iG")
if(t.b)b5.x2=H.j(b5.y.I(0,"ambientTxt"),"$ia6")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.I(0,"diffuseClr"),"$iG")
if(t.b)b5.b5=H.j(b5.y.I(0,"diffuseTxt"),"$ia6")
t=c0.d
if(t.a)b5.bH=H.j(b5.y.I(0,"invDiffuseClr"),"$iG")
if(t.b)b5.dZ=H.j(b5.y.I(0,"invDiffuseTxt"),"$ia6")
t=c0.e
s=t.a
if(s||t.b||!1){b5.e1=H.j(b5.y.I(0,"shininess"),"$iU")
if(s)b5.e_=H.j(b5.y.I(0,"specularClr"),"$iG")
if(t.b)b5.e0=H.j(b5.y.I(0,"specularTxt"),"$ia6")}if(c0.f.b)b5.e2=H.j(b5.y.I(0,"bumpTxt"),"$ia6")
if(c0.db){b5.e3=H.j(b5.y.I(0,"envSampler"),"$ibC")
t=c0.r
if(t.a)b5.e4=H.j(b5.y.I(0,"reflectClr"),"$iG")
if(t.b)b5.e5=H.j(b5.y.I(0,"reflectTxt"),"$ia6")
t=c0.x
s=t.a
if(s||t.b||!1){b5.e6=H.j(b5.y.I(0,"refraction"),"$iU")
if(s)b5.e7=H.j(b5.y.I(0,"refractClr"),"$iG")
if(t.b)b5.e8=H.j(b5.y.I(0,"refractTxt"),"$ia6")}}t=c0.y
if(t.a)b5.e9=H.j(b5.y.I(0,"alpha"),"$iU")
if(t.b)b5.ea=H.j(b5.y.I(0,"alphaTxt"),"$ia6")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.y
b5.co=new H.H([r,A.bB])
b5.cp=new H.H([r,[P.bv,A.cC]])
for(r=[A.cC],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="barLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.n(P.k(b7+o+b8))
H.j(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.n(P.k(b7+o+b8))
H.j(f,"$iG")
if(typeof j!=="number")return j.w()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.n(P.k(b7+o+b8))
H.j(e,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.n(P.k(b7+o+b8))
H.j(d,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.n(P.k(b7+o+b8))
H.j(c,"$iU")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cC(m,g,f,a0,a,b))}b5.cp.m(0,j,h)
q=b5.co
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.y
b5.cq=new H.H([r,A.bB])
b5.cr=new H.H([r,[P.bv,A.cD]])
for(r=[A.cD],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.w()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.n(P.k(b7+a1+b8))
H.j(m,"$iG")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.n(P.k(b7+a1+b8))
H.j(g,"$iG")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.n(P.k(b7+a1+b8))
H.j(f,"$iG")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.n(P.k(b7+a1+b8))
H.j(m,"$iG")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.n(P.k(b7+a1+b8))
H.j(g,"$iG")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.n(P.k(b7+o+b8))
H.j(f,"$ia6")
a5=f}else a5=b6
h.push(new A.cD(a4,a3,a2,m,g,a5))}b5.cr.m(0,j,h)
q=b5.cq
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.y
b5.cs=new H.H([r,A.bB])
b5.ct=new H.H([r,[P.bv,A.cF]])
for(r=[A.cF],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.n(P.k(b7+o+b8))
H.j(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.n(P.k(b7+o+b8))
H.j(f,"$iG")
if(typeof j!=="number")return j.w()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.n(P.k(b7+o+b8))
H.j(e,"$icE")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.n(P.k(b7+o+b8))
H.j(e,"$ibC")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.n(P.k(b7+o+b8))
H.j(e,"$ibC")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.n(P.k(b7+o+b8))
H.j(d,"$ic_")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.n(P.k(b7+o+b8))
H.j(e,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.n(P.k(b7+o+b8))
H.j(d,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.n(P.k(b7+o+b8))
H.j(c,"$iU")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cF(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.ct.m(0,j,h)
q=b5.cs
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.y
b5.cu=new H.H([r,A.bB])
b5.cv=new H.H([r,[P.bv,A.cG]])
for(r=[A.cG],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
H.j(m,"$iG")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.n(P.k(b7+o+b8))
H.j(g,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.n(P.k(b7+o+b8))
H.j(f,"$iG")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.n(P.k(b7+o+b8))
H.j(e,"$iG")
if(typeof j!=="number")return j.w()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.n(P.k(b7+o+b8))
H.j(d,"$iG")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.n(P.k(b7+o+b8))
H.j(c,"$iG")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.n(P.k(b7+o+b8))
H.j(a9,"$iU")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.n(P.k(b7+o+b8))
H.j(b0,"$iU")
b1=b0
b2=a9
a3=c
a4=d}else{b1=b6
b2=b1
a3=b2
a4=a3}p=(j&2)!==0
if(p){o=b5.y
a1=i+"s["+n+"].shadowAdj"
d=o.h(0,a1)
if(d==null)H.n(P.k(b7+a1+b8))
H.j(d,"$ic_")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.n(P.k(b7+a1+b8))
H.j(d,"$iU")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.n(P.k(b7+a1+b8))
H.j(c,"$iU")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.n(P.k(b7+a1+b8))
H.j(d,"$iU")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.n(P.k(b7+a1+b8))
H.j(c,"$iU")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.n(P.k(b7+a1+b8))
H.j(a9,"$iU")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.n(P.k(b7+a1+b8))
H.j(d,"$ia6")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.n(P.k(b7+o+b8))
H.j(d,"$ia6")
a7=d}else a7=b6
h.push(new A.cG(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cv.m(0,j,h)
q=b5.cu
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.n(P.k(b7+o+b8))
q.m(0,j,m)}}}},
aw:function(a,b){if(b!=null&&b.d)a.eG(b)},
hZ:function(a,b){if(b!=null&&b.d>=6)a.cX(b)}}
A.d0.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.dc.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.dC.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.dJ.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.hm.prototype={
i:function(a){return this.bj}}
A.cC.prototype={}
A.cD.prototype={}
A.cF.prototype={}
A.cG.prototype={}
A.dG.prototype={
bR:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cA:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.dj(b,35633)
r.f=r.dj(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.n(P.k("Failed to link shader: "+H.f(s)))}r.i_()
r.i1()},
S:function(a){a.a.useProgram(this.r)
this.x.iz()},
dj:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.k("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
i_:function(){var u,t,s,r=this,q=H.b([],[A.d_]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.c(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.d_(p,t.name,s))}r.x=new A.f6(q)},
i1:function(){var u,t,s,r=this,q=H.b([],[A.dW]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.c(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.is(t.type,t.size,t.name,s))}r.y=new A.j5(q)},
aY:function(a,b,c){var u=this.a
if(a===1)return new A.bB(u,b,c)
else return A.lf(u,this.r,b,a,c)},
fu:function(a,b,c){var u=this.a
if(a===1)return new A.a6(u,b,c)
else return A.lf(u,this.r,b,a,c)},
fv:function(a,b,c){var u=this.a
if(a===1)return new A.bC(u,b,c)
else return A.lf(u,this.r,b,a,c)},
bD:function(a,b){return new P.ea(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
is:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aY(b,c,d)
case 5121:return u.aY(b,c,d)
case 5122:return u.aY(b,c,d)
case 5123:return u.aY(b,c,d)
case 5124:return u.aY(b,c,d)
case 5125:return u.aY(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.j1(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.c_(u.a,c,d)
case 35667:return new A.j2(u.a,c,d)
case 35668:return new A.j3(u.a,c,d)
case 35669:return new A.j4(u.a,c,d)
case 35674:return new A.j6(u.a,c,d)
case 35675:return new A.cE(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.fu(b,c,d)
case 35680:return u.fv(b,c,d)
case 35670:throw H.e(u.bD("BOOL",c))
case 35671:throw H.e(u.bD("BOOL_VEC2",c))
case 35672:throw H.e(u.bD("BOOL_VEC3",c))
case 35673:throw H.e(u.bD("BOOL_VEC4",c))
default:throw H.e(P.k("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.im.prototype={}
A.ip.prototype={}
A.dW.prototype={}
A.j5.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
I:function(a,b){var u=this.h(0,b)
if(u==null)throw H.e(P.k("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bB.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.j2.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.j3.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.j4.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.j0.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.U.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.j1.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.c_.prototype={
eE:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cE.prototype={
ak:function(a){var u=new Float32Array(H.cS(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ab.prototype={
ak:function(a){var u=new Float32Array(H.cS(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.a6.prototype={
eG:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bC.prototype={
cX:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.kl.prototype={
$1:function(a){return 1}}
F.bQ.prototype={
fk:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.e_()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.ee())return
return s.v(0,Math.sqrt(s.F(s)))},
fm:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.p(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.F(r)))
r=t.p(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.bi(r.v(0,Math.sqrt(r.F(r))))
return r.v(0,Math.sqrt(r.F(r)))},
cj:function(){var u,t=this
if(t.d!=null)return!0
u=t.fk()
if(u==null){u=t.fm()
if(u==null)return!1}t.d=u
t.a.a.ai()
return!0},
fj:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.e_()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.ee())return
return s.v(0,Math.sqrt(s.F(s)))},
fl:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.p()
if(typeof k!=="number")return H.c(k)
r=l-k
if(Math.abs(r-0)<$.B().a){l=d.p(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.F(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.p()
if(typeof t!=="number")return H.c(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.c(k)
p=(l-k)/r
k=d.p(0,g)
l=k.a
if(typeof l!=="number")return l.k()
i=k.b
if(typeof i!=="number")return i.k()
k=k.c
if(typeof k!=="number")return k.k()
h=g.a
if(typeof h!=="number")return H.c(h)
f=g.b
if(typeof f!=="number")return H.c(f)
e=g.c
if(typeof e!=="number")return H.c(e)
e=new V.Z(l*p+h,i*p+f,k*p+e).p(0,j)
e=new V.C(e.a,e.b,e.c)
q=e.v(0,Math.sqrt(e.F(e)))
s=s.a
t=t.a
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.c(t)
u=u.a
if(typeof u!=="number")return H.c(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.F(l)))
l=o.bi(q)
l=l.v(0,Math.sqrt(l.F(l))).bi(o)
q=l.v(0,Math.sqrt(l.F(l)))}return q},
cg:function(){var u,t=this
if(t.e!=null)return!0
u=t.fj()
if(u==null){u=t.fl()
if(u==null)return!1}t.e=u
t.a.a.ai()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.at(J.an(s.e),0)+", "+C.b.at(J.an(t.b.e),0)+", "+C.b.at(J.an(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
N:function(){return this.G("")}}
F.bU.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.at(J.an(u.e),0)+", "+C.b.at(J.an(this.b.e),0)},
N:function(){return this.G("")}}
F.bW.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.at(J.an(u.e),0)},
N:function(){return this.G("")}}
F.ie.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
b3:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.b3()||!1
if(!t.a.b3())u=!1
s=t.e
if(s!=null)s.b8(0)
return u},
cf:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.au()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bj().a)!==0)++s
if((t&$.bi().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.cX().a)!==0)++s
if((t&$.cY().a)!==0)++s
if((t&$.cd().a)!==0)++s
if((t&$.bh().a)!==0)++s
r=a4.gcZ(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.d3])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ih(m)
k=l.gcZ(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.d3(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].iM(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cS(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bN(new Z.e0(a1,d),o,a4)
c.b=H.b([],[Z.bS])
if(a0.b.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.aR()
b.push(t.e)}a=Z.lh(u,34963,b)
c.b.push(new Z.bS(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.aR()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.aR()
b.push(t.e)}a=Z.lh(u,34963,b)
c.b.push(new Z.bS(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.y])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.aR()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.aR()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.aR()
b.push(t.e)}a=Z.lh(u,34963,b)
c.b.push(new Z.bS(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.t])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.a.u(s,"\n")},
ai:function(){var u=this.e
if(u!=null)u.C(null)}}
F.ig.prototype={
cb:function(a){var u,t,s,r,q,p,o,n=H.b([],[F.bQ]),m=a.length
if(m>0){u=a[0]
for(t=this.a,s=2;s<m;++s){r=s-1
q=a.length
if(r>=q)return H.d(a,r)
r=a[r]
if(s>=q)return H.d(a,s)
q=a[s]
t.a.j(0,u)
t.a.j(0,r)
t.a.j(0,q)
p=new F.bQ()
o=u.a
if(o==null)H.n(P.k("May not create a face with a first vertex which is not attached to a shape."))
if(o!=r.a||o!=q.a)H.n(P.k("May not create a face with vertices attached to different shapes."))
p.a=u
u.d.b.push(p)
p.b=r
r.d.c.push(p)
p.c=q
q.d.d.push(p)
p.a.a.d.b.push(p)
r=p.a.a.e
if(r!=null)r.C(null)
n.push(p)}}return n},
gl:function(a){return this.b.length},
b3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].cj())s=!1
return s},
ci:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].cg())s=!1
return s},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(a))
return C.a.u(r,"\n")},
N:function(){return this.G("")}}
F.ih.prototype={
ic:function(a){var u,t,s,r,q=H.b([],[F.bU]),p=a.length
for(u=this.a,t=1;t<p;t+=2){s=t-1
r=a.length
if(s>=r)return H.d(a,s)
s=a[s]
if(t>=r)return H.d(a,t)
r=a[t]
u.a.j(0,s)
u.a.j(0,r)
q.push(F.n9(s,r))}return q},
gl:function(a){return this.b.length},
i:function(a){return this.N()},
G:function(a){var u,t,s=H.b([],[P.t]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.a.u(s,"\n")},
N:function(){return this.G("")}}
F.ii.prototype={
ie:function(a){var u,t,s,r,q=H.b([],[F.bW]),p=a.length
for(u=this.a,t=0;t<p;++t){if(t>=a.length)return H.d(a,t)
s=a[t]
u.a.j(0,s)
r=new F.bW()
if(s.a==null)H.n(P.k("May not create a point with a vertex which is not attached to a shape."))
r.a=s
s.b.b.push(r)
r.a.a.b.b.push(r)
s=r.a.a.e
if(s!=null)s.C(null)
q.push(r)}return q},
gl:function(a){return this.b.length},
i:function(a){return this.N()},
G:function(a){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(a))
return C.a.u(r,"\n")},
N:function(){return this.G("")}}
F.aI.prototype={
iM:function(a){var u,t,s=this
if(a.n(0,$.au())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bj())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bi())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bk())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.bJ())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cX())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cY())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.cd()))return H.b([s.ch],[P.M])
else if(a.n(0,$.bh())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
cj:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e_()
t.d.M(0,new F.jp(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.ai()
s=t.a.e
if(s!=null)s.b8(0)}return!0},
cg:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.e_()
t.d.M(0,new F.jo(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.F(s)))
s=t.a
if(s!=null){s.ai()
s=t.a.e
if(s!=null)s.b8(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
G:function(a){var u,t,s=this,r="-",q=H.b([],[P.t])
q.push(C.b.at(J.an(s.e),0))
u=s.f
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.i(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.i(0))
else q.push(r)
q.push(V.K(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.u(q,", ")
return a+"{"+t+"}"},
N:function(){return this.G("")}}
F.jp.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.jo.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.ji.prototype={
aR:function(){},
j:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.k("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.ai()
return!0},
dI:function(a,b,c,d,e,f,g){var u=F.lg(a,null,b,c,d,e,f,g,0)
this.j(0,u)
return u},
bE:function(a,b,c,d,e,f){return this.dI(a,b,c,null,d,e,f)},
ig:function(a,b,c,d,e,f){return this.dI(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
b3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].cj()
return!0},
ci:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].cg()
return!0},
ik:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.k()
o=q.b
if(typeof o!=="number")return o.k()
n=q.c
if(typeof n!=="number")return n.k()
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.N()},
G:function(a){var u,t,s,r
this.aR()
u=H.b([],[P.t])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].G(a))
return C.a.u(u,"\n")},
N:function(){return this.G("")}}
F.jj.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
M:function(a,b){var u=this
C.a.M(u.b,b)
C.a.M(u.c,new F.jk(u,b))
C.a.M(u.d,new F.jl(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.a.u(r,"\n")}}
F.jk.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.jl.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.jm.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.a.u(r,"\n")}}
F.jn.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.b([],[P.t])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].G(""))
return C.a.u(r,"\n")}}
O.b_.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.E():u},
U:function(a){var u=this.fr
if(u!=null)u.C(a)},
be:function(){return this.U(null)},
dv:function(a){this.a=null
this.U(a)},
hX:function(){return this.dv(null)},
fV:function(a,b){var u=new D.bq()
u.b=!0
this.U(u)},
fX:function(a,b){var u=new D.br()
u.b=!0
this.U(u)},
sac:function(a){var u,t=this,s=t.ch
if(s!=a){if(s!=null)s.gt().R(0,t.gaF())
u=t.ch
t.ch=a
if(a!=null)a.gt().j(0,t.gaF())
s=new D.x("environment",u,t.ch)
s.b=!0
t.U(s)}},
dh:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.y
f=[f,f]
u=new H.H(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gaJ()
o=u.h(0,q.gaJ())
u.m(0,p,o==null?1:o)}n=H.b([],[A.d0])
u.M(0,new O.hq(g,n))
C.a.bc(n,new O.hr())
m=new H.H(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.dc])
m.M(0,new O.hs(g,l))
C.a.bc(l,new O.ht())
k=new H.H(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gaJ()
o=k.h(0,q.gaJ())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dC])
k.M(0,new O.hu(g,j))
C.a.bc(j,new O.hv())
i=new H.H(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.o)(f),++r){q=f[r]
s=q.gaJ()
p=i.h(0,q.gaJ())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dJ])
i.M(0,new O.hw(g,h))
C.a.bc(h,new O.hx())
f=C.d.a8(g.e.a.length+3,4)
g.dy.e
return A.ng(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
an:function(a,b){if(b!=null)if(!C.a.ab(a,b)){b.saz(0,a.length)
a.push(b)}},
aE:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a9(u,u.length);u.A();){t=u.d
t.toString
s=$.jg
if(s==null)s=$.jg=new V.C(0,0,1)
t.a=s
r=$.jf
t.d=r==null?$.jf=new V.C(0,1,0):r
r=$.je
t.e=r==null?$.je=new V.C(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bO(s)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bO(t.d)
p=o.a
if(typeof p!=="number")return p.k()
r=o.b
if(typeof r!=="number")return r.k()
s=o.c
if(typeof s!=="number")return s.k()
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bO(t.e)
r=s.a
if(typeof r!=="number")return r.k()
p=s.b
if(typeof p!=="number")return p.k()
o=s.c
if(typeof o!=="number")return o.k()
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
cK:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.dh()
u=b2.fr.h(0,b1.bj)
if(u==null){u=A.nf(b1,b2.a)
b2.cc(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bH
b1=b3.e
if(!(b1 instanceof Z.bN))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.b3()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.ci()
q.a.ci()
q=q.e
if(q!=null)q.b8(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.ik()
p=p.e
if(p!=null)p.b8(0)}n=b3.d.cf(new Z.cH(b2.a),s)
n.aK($.au()).e=b0.a.Q.c
if(b1)n.aK($.bj()).e=b0.a.cx.c
if(r)n.aK($.bi()).e=b0.a.ch.c
if(t.r2)n.aK($.bk()).e=b0.a.cy.c
if(q)n.aK($.bJ()).e=b0.a.db.c
if(t.ry)n.aK($.bh()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dP])
b0.a.S(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gV(r)
b1=b1.dy
b1.toString
b1.ak(r.af(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gV(r)
q=b2.dx
q=b2.cx=r.k(0,q.gV(q))
r=q}b1=b1.fr
b1.toString
b1.ak(r.af(0,!0))}b1=b0.a
r=b2.gep()
b1=b1.fy
b1.toString
b1.ak(r.af(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gV(r)
b1=b1.fx
b1.toString
b1.ak(r.af(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ak(C.k.af(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ak(C.k.af(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ak(C.k.af(r,!0))}if(t.b5>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.cS(r.af(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.aw(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.aw(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.aw(b1.b5,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bH
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.aw(b1.dZ,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.e1
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.e_
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.aw(b1.e0,r)}b1=t.z
if(b1.length>0){r=P.y
i=new H.H([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
f=g.gaJ()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.F(b0.a.cp.h(0,f),e)
p=g.gjy()
o=$.aP
p=p.bo(o==null?$.aP=new V.Z(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gjD()
o=$.aP
p=p.bo(o==null?$.aP=new V.Z(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gq(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdX()){p=g.gdK()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdL()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdM()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.co.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.y
b=new H.H([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.F(b0.a.cr.h(0,0),e)
p=c.bO(g.a)
o=p.a
if(typeof o!=="number")return o.k()
a=p.b
if(typeof a!=="number")return a.k()
a0=p.c
if(typeof a0!=="number")return a0.k()
a0=p.v(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.cq.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.y
a1=new H.H([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
f=g.gaJ()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.F(b0.a.ct.h(0,f),e)
a2=c.k(0,g.gV(g))
p=g.gV(g)
o=$.aP
p=p.bo(o==null?$.aP=new V.Z(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aP
p=a2.bo(p==null?$.aP=new V.Z(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gq(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaV()
p=a2.cB(0)
o=p.a
a=p.b
a0=p.c
a3=p.e
a4=p.f
a5=p.r
a6=p.y
a7=p.z
p=p.Q
a8=d.d
a8.toString
j=new Float32Array(H.cS(new V.dt(o,a,a0,a3,a4,a5,a6,a7,p).af(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaV()
p=g.gaV()
if(!C.a.ab(m,p)){p.saz(0,m.length)
m.push(p)}p=g.gaV()
o=p.gcE(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gbb()
p=g.geH()
o=d.x
o.toString
a=p.giw(p)
a0=p.gix(p)
a3=p.giy()
p=p.giv()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gbb()
if(!C.a.ab(m,p)){p.saz(0,m.length)
m.push(p)}p=g.gbb()
o=p.gcE(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdX()){p=g.gdK()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdL()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdM()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.cs.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gV(r)
r=P.y
a9=new H.H([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
f=g.gaJ()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.F(b0.a.cv.h(0,f),e)
p=g.gj7(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gjB(g).jN()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bo(g.gj7(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gq(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaV()
p=g.gcP()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcM(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gjO()
o=d.x
o.a.uniform1f(o.d,p)
p=g.gjP()
o=d.y
o.a.uniform1f(o.d,p)
g.gaV()
p=g.gaV()
if(!C.a.ab(m,p)){p.saz(0,m.length)
m.push(p)}p=g.gaV()
o=p.gcE(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gbb()
p=g.geH()
o=d.z
o.toString
a=p.giw(p)
a0=p.gix(p)
a3=p.giy()
p=p.giv()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gbb()
if(!C.a.ab(m,p)){p.saz(0,m.length)
m.push(p)}p=g.gbb()
o=p.gcE(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gjC()){p=g.gjA()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gjz()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdX()){p=g.gdK()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdL()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdM()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.cu.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.an(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.aw(b1.e2,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gV(r).cB(0)}b1=b1.id
b1.toString
b1.ak(r.af(0,!0))}if(t.db){b0.an(m,b0.ch)
b1=b0.a
r=b0.ch
b1.hZ(b1.e3,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.e4
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.aw(b1.e5,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.e6
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.e7
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.an(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.aw(b1.e8,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.e9
r.a.uniform1f(r.d,p)}if(b1.b){b0.an(m,b0.db.d)
r=b0.a
p=b0.db.d
r.aw(r.ea,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].S(b2)
r=b3.e
r.S(b2)
r.aa(b2)
r.ag(b2)
if(!q||b1.b||!1)b2.a.disable(3042)
for(k=0;k<m.length;++k)m[k].ag(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.cm()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.dh().bj}}
O.hq.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d0(a,C.d.a8(b+3,4)*4))}}
O.hr.prototype={
$2:function(a,b){return J.cZ(a.a,b.a)}}
O.hs.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dc(a,C.d.a8(b+3,4)*4))}}
O.ht.prototype={
$2:function(a,b){return J.cZ(a.a,b.a)}}
O.hu.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dC(a,C.d.a8(b+3,4)*4))}}
O.hv.prototype={
$2:function(a,b){return J.cZ(a.a,b.a)}}
O.hw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dJ(a,C.d.a8(b+3,4)*4))}}
O.hx.prototype={
$2:function(a,b){return J.cZ(a.a,b.a)}}
O.hk.prototype={
c7:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.x(u.b,t,a)
t.b=!0
u.a.U(t)}},
aO:function(){this.d1()
this.c7(1)},
saj:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.ao(new A.T(!1,u,!1))
t.c7(0)}else{t.ao(new A.T(!0,u,!1))
t.c7(b>=1?1:b)}}}
O.ct.prototype={
U:function(a){return this.a.U(a)},
be:function(){return this.U(null)},
aO:function(){},
ao:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aO()
u=s.a
u.a=null
u.U(null)}},
sae:function(a){var u,t=this,s=t.c
if(!s.b)t.ao(new A.T(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().R(0,t.gaF())
u=t.d
t.d=a
a.gt().j(0,t.gaF())
s=new D.x(t.b+".texture2D",u,t.d)
s.b=!0
t.a.U(s)}}}
O.hl.prototype={}
O.aN.prototype={
b0:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.x(s.b+".color",u,a)
t.b=!0
s.a.U(t)}},
aO:function(){this.d1()
this.b0(new V.r(1,1,1))},
sq:function(a,b){this.ao(new A.T(!0,this.c.b,!1))
this.b0(b)}}
O.hn.prototype={}
O.ho.prototype={
aO:function(){var u,t=this
t.d2()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.x(t.b+".refraction",u,1)
u.b=!0
t.a.U(u)}}}
O.hp.prototype={
c8:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.x(u.b+".shininess",t,a)
t.b=!0
u.a.U(t)}},
aO:function(){this.d2()
this.c8(100)},
sa9:function(a){var u,t=this
if(a==null)a=100
u=t.c.b
if(a<=0){t.ao(new A.T(!1,u,!1))
t.c8(0)}else{t.ao(new A.T(!0,u,!1))
t.c8(a)}}}
O.dH.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
U:function(a){var u=this.e
if(u!=null)u.C(a)},
be:function(){return this.U(null)},
cK:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.im(t,n)
u.bR(t,n)
u.cA(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"fov"),"$iU")
u.ch=H.j(u.y.h(0,"ratio"),"$iU")
u.cx=H.j(u.y.h(0,"boxClr"),"$iG")
u.cy=H.j(u.y.h(0,"boxTxt"),"$ibC")
u.db=H.j(u.y.h(0,"viewMat"),"$iab")
a.cc(u)}o.a=u}if(b.e==null){t=b.d.cf(new Z.cH(a.a),$.au())
t.aK($.au()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.S(a)}t=a.d
s=a.c
r=o.a
r.S(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cX(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gV(s).cB(0)
r=r.db
r.toString
r.ak(s.af(0,!0))
t=b.e
if(t instanceof Z.bN){t.S(a)
t.aa(a)
t.ag(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.cm()
t=o.c
if(t!=null)t.ag(a)}}
O.io.prototype={
gt:function(){var u=this.c
return u==null?this.c=D.E():u},
aE:function(a,b){},
cK:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=a.fr.h(0,q)
if(u==null){p=a.a
u=new A.ip(p,q)
u.bR(p,q)
u.cA(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"color"),"$ic_")
u.ch=H.j(u.y.h(0,"projViewObjMat"),"$iab")
a.cc(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.bN)?b.e=null:t)==null){p=b.d.cf(new Z.cH(a.a),$.au())
t=p.aK($.au())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.S(a)
t=r.b
p.Q.eE(t)
t=a.gep()
p=p.ch
p.toString
p.ak(t.af(0,!0))
t=b.e
t.S(a)
t.aa(a)
t.ag(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.cm()}}
O.dO.prototype={}
T.d6.prototype={
bs:function(a){},
fd:function(){return this.bs(null)},
cd:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gdW().j(0,t.gfJ())
t.b.c.gbk().j(0,t.gfL())
t.b.c.gcP().j(0,t.gfN())
u=t.b.e
u.gd_(u).j(0,t.gi7())
t.b.e.gbk().j(0,t.gi5())
u=t.b.e
u.gdY(u).j(0,t.gi3())
return!0},
fK:function(a){if(!H.j(a,"$iaF").x.b.n(0,this.c))return
this.ch=this.Q=!0},
fM:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.j(a,"$iaF")
u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
fO:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.ds(a)},
i8:function(a){this.ch=this.Q=!0},
i6:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.j(a,"$icB")
u=a.d.p(0,a.y)
u=new V.S(u.a,u.b)
if(u.F(u)<t.z)return
t.ch=!1}},
i4:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.ds(a)},
ds:function(a){var u,t,s,r,q,p,o,n,m,l,k=this
H.j(a,"$iaF")
u=new D.a0()
u.b=!0
t=k.f
if(t!=null)t.C(u)
u=a.d
t=u.a
s=a.c
if(typeof t!=="number")return t.v()
r=t/s.c
u=u.b
if(typeof u!=="number")return u.v()
q=u/s.d
s=k.a
u=k.d
t=u.r
if(typeof t!=="number")return t.p()
p=C.j.b6(r*(t-1))
t=u.x
if(typeof t!=="number")return t.p()
o=C.j.b6(q*(t-1))
s=s.a
t=u.x
if(typeof t!=="number")return t.p()
n=t-1-o
s.bindFramebuffer(36160,s.createFramebuffer())
s.readBuffer(36064)
s.framebufferTexture2D(36160,36064,3553,u.b,0)
m=new Uint8Array(4)
s.readPixels(p,n,1,1,6408,5121,m)
s.bindFramebuffer(36160,null)
new T.iP(m,1,1).fC()
u=m.length
if(0>=u)return H.d(m,0)
t=m[0]
if(1>=u)return H.d(m,1)
s=m[1]
if(2>=u)return H.d(m,2)
l=m[2]
if(3>=u)return H.d(m,3)
l=new T.d7(new V.S(r,q),V.d5(t,s,l,m[3]))
l.b=!0
s=k.x
if(s!=null)s.C(l)}}
T.d7.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.dP.prototype={}
T.iJ.prototype={}
T.iK.prototype={
dA:function(){if(!this.d){this.d=!0
var u=this.y
if(u!=null)u.cn()}},
saz:function(a,b){this.a=b},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
S:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
ag:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.iL.prototype={
saz:function(a,b){this.a=b},
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
S:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
ag:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.iM.prototype={
aq:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.lF(a)
t=T.lb(q)
W.V(u,"load",new T.iO(this,t,u,!1,q,!1,!1),!1)
return t},
b_:function(a,b,c,d,e,f){var u=W.lF(c);++this.d
W.V(u,"load",new T.iN(this,u,!1,b,!1,d,a),!1)},
dz:function(a,b,c){var u,t,s,r
b=V.cV(b)
u=V.cV(a.width)
t=V.cV(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kJ()
s.width=u
s.height=t
r=C.f.eB(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.ou(r.getImageData(0,0,s.width,s.height))}}}
T.iO.prototype={
$1:function(a){var u,t,s=this,r=3553,q=s.b,p=s.c
q.e=p.width
q.f=p.height
u=s.a
t=u.dz(p,u.b,s.d)
q.r=p.width
q.x=p.height
p=u.a
p.bindTexture(r,s.e)
p.pixelStorei(37440,s.f?1:0)
C.l.es(p,r,0,6408,6408,5121,t)
if(s.r)p.generateMipmap(r)
p.bindTexture(r,null)
q.dA();++u.e}}
T.iN.prototype={
$1:function(a){var u=this,t=u.a,s=t.dz(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.l.es(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cn()}++t.e}}
T.iP.prototype={
fC:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.c
if(typeof f!=="number")return f.d3()
u=C.d.a8(f,2)
t=this.b
s=this.a
r=s.length
q=t*4
for(;u>=0;--u){p=q*u
o=q*(f-1-u)
for(n=0;n<t;++n){m=4*n
l=p+m
k=o+m
for(j=0;j<4;++j){i=l+j
h=k+j
if(i<0||i>=r)return H.d(s,i)
g=s[i]
if(h<0||h>=r)return H.d(s,h)
s[i]=s[h]
s[h]=g}}}}}
X.fb.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.E():u},
a1:function(a){var u=this.fr
if(u!=null)u.C(a)},
sav:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.x("width",u,b)
u.b=!0
t.a1(u)}},
sap:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.x("height",u,b)
u.b=!0
t.a1(u)}},
S:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.k()
i.sav(0,C.c.a3(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.k()
i.sap(0,C.c.a3(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cV(s)
o=V.cV(r)
q=V.cV(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.l.eu(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.lb(n)
m.e=s
m.f=r
m.r=p
m.x=o
m.dA()
t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cn()
t=i.ch
s=t.b
i.z=s
i.c=t.r
i.d=t.x
u.bindTexture(g,s)
t=u.createRenderbuffer()
i.Q=t
u.bindRenderbuffer(f,t)
u.renderbufferStorage(f,33189,i.c,i.d)
t=u.createFramebuffer()
i.y=t
u.bindFramebuffer(e,t)
u.framebufferTexture2D(e,36064,g,i.z,0)
u.framebufferRenderbuffer(e,36096,f,i.Q)
u.bindTexture(g,h)
u.bindRenderbuffer(f,h)
u.bindFramebuffer(e,h)}u=a.a
u.bindFramebuffer(e,i.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=i.dy
s=t.c
a.c=C.c.a3(s*i.a)
r=t.d
a.d=C.c.a3(r*i.b)
l=t.a
k=i.c
if(typeof k!=="number")return H.c(k)
j=C.c.a3(l*k)
t=t.b
l=i.d
if(typeof l!=="number")return H.c(l)
u.viewport(j,C.c.a3(t*l),C.c.a3(s*k),C.c.a3(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
ag:function(a){a.a.bindFramebuffer(36160,null)}}
X.kI.prototype={}
X.fQ.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.E():u},
a1:function(a){var u=this.x
if(u!=null)u.C(a)},
S:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.c(u)
q=C.c.a3(r*u)
r=s.b
if(typeof t!=="number")return H.c(t)
p=C.c.a3(r*t)
r=C.c.a3(s.c*u)
a.c=r
s=C.c.a3(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
ag:function(a){}}
X.fV.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
S:function(a){var u
a.cy.bM(V.bw())
u=V.bw()
a.db.bM(u)},
ag:function(a){a.cy.aU()
a.db.aU()}}
X.dA.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.E():u},
a1:function(a){var u=this.f
if(u!=null)u.C(a)},
fh:function(){return this.a1(null)},
S:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.b1(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bM(k)
r=$.lS
if(r==null){r=V.l2()
q=V.jh()
p=$.m6
r=V.kZ(r,q,p==null?$.m6=new V.C(0,0,-1):p)
$.lS=r
u=r}else u=r
r=s.b
if(r!=null){t=r.bP(0,a,s)
if(t!=null)u=t.k(0,u)}a.db.bM(u)},
ag:function(a){a.cy.aU()
a.db.aU()}}
X.iF.prototype={}
V.kx.prototype={
$1:function(a){var u=C.c.ex(this.a.giD(),2)
if(u!=="0.00")P.f_(u+" fps")}}
V.ij.prototype={
eZ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.V(q,"scroll",new V.il(o),!1)},
dH:function(a,b){var u,t,s,r,q
a=C.d.il(a,0,4)
u=P.ma(C.p,b,C.i,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.mQ()
q.href="#"+u
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
b2:function(a){var u,t,s,r,q,p,o,n
this.i0()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.iK(a),s.toString,r=new H.X(r),r=new P.cP(s.ey(new H.cr(r,r.gl(r))).a());r.A();){s=r.gJ(r)
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
if(H.oS(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ma(C.p,s,C.i,!1)
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
ia:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
n.id="shellTable"
u=n.style
u.width="100%"
u.padding="0px"
u.marginLeft=p
u.marginRight=p
this.a.appendChild(n)
t=n.insertRow(-1)
u=t.insertCell(-1).style
u.textAlign="center"
u.verticalAlign="top"
u.marginLeft=p
u.marginRight=p
for(s=0;s<1;++s){r=o.createElement("div")
r.id=a[s]
u=r.style
u.textAlign="left"
u=r.style
u.verticalAlign="top"
u=t.insertCell(-1)
q=u.style
q.textAlign="center"
q.verticalAlign="top"
q.marginLeft=p
q.marginRight=p
u.appendChild(r)}},
i0:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.iU()
t=P.t
u.a=new H.H([t,L.dL])
u.b=new H.H([t,L.dU])
u.c=P.lK(t)
u.d=u.P(0,q)
t=u.P(0,q).u(0,p)
s=K.a5(new H.X("*"))
t.a.push(s)
t.c=!0
t=u.P(0,p).u(0,p)
s=new K.b3()
r=[K.ds]
s.a=H.b([],r)
t.a.push(s)
t=K.a5(new H.X("*"))
s.a.push(t)
t=u.P(0,p).u(0,"BoldEnd")
s=K.a5(new H.X("*"))
t.a.push(s)
t.c=!0
t=u.P(0,q).u(0,o)
s=K.a5(new H.X("_"))
t.a.push(s)
t.c=!0
t=u.P(0,o).u(0,o)
s=new K.b3()
s.a=H.b([],r)
t.a.push(s)
t=K.a5(new H.X("_"))
s.a.push(t)
t=u.P(0,o).u(0,n)
s=K.a5(new H.X("_"))
t.a.push(s)
t.c=!0
t=u.P(0,q).u(0,m)
s=K.a5(new H.X("`"))
t.a.push(s)
t.c=!0
t=u.P(0,m).u(0,m)
s=new K.b3()
s.a=H.b([],r)
t.a.push(s)
t=K.a5(new H.X("`"))
s.a.push(t)
t=u.P(0,m).u(0,"CodeEnd")
s=K.a5(new H.X("`"))
t.a.push(s)
t.c=!0
t=u.P(0,q).u(0,l)
s=K.a5(new H.X("["))
t.a.push(s)
t.c=!0
t=u.P(0,l).u(0,k)
s=K.a5(new H.X("|"))
t.a.push(s)
s=u.P(0,l).u(0,j)
t=K.a5(new H.X("]"))
s.a.push(t)
s.c=!0
s=u.P(0,l).u(0,l)
t=new K.b3()
t.a=H.b([],r)
s.a.push(t)
s=K.a5(new H.X("|]"))
t.a.push(s)
s=u.P(0,k).u(0,j)
t=K.a5(new H.X("]"))
s.a.push(t)
s.c=!0
s=u.P(0,k).u(0,k)
t=new K.b3()
t.a=H.b([],r)
s.a.push(t)
s=K.a5(new H.X("|]"))
t.a.push(s)
u.P(0,q).u(0,i).a.push(new K.f2())
s=u.P(0,i).u(0,i)
t=new K.b3()
t.a=H.b([],r)
s.a.push(t)
s=K.a5(new H.X("*_`["))
t.a.push(s)
s=u.P(0,"BoldEnd")
s.d=s.a.bn(p)
s=u.P(0,n)
s.d=s.a.bn(o)
s=u.P(0,"CodeEnd")
s.d=s.a.bn(m)
s=u.P(0,j)
s.d=s.a.bn("Link")
s=u.P(0,i)
s.d=s.a.bn(i)
this.b=u}}
V.il.prototype={
$1:function(a){P.ld(C.h,new V.ik(this.a))}}
V.ik.prototype={
$0:function(){var u=C.c.a3(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
Q.fR.prototype={}
Q.i.prototype={
gaA:function(){var u=this.a
if(u>=1)if(u<=8){u=this.b
u=u>=1&&u<=8}else u=!1
else u=!1
return u},
gaz:function(a){return this.gaA()?(this.a-1)*8+(this.b-1):-1},
i:function(a){return""+this.a+" "+this.b},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof Q.i))return!1
if(b.a!==this.a)return!1
if(b.b!==this.b)return!1
return!0}}
Q.aa.prototype={
i:function(a){var u=this,t=u.d,s=t!=null?", "+t.i(0)+" => "+H.f(u.e):""
return u.a+", "+u.b.i(0)+" => "+u.c.i(0)+s}}
Q.iu.prototype={
f_:function(){this.a=P.nd(64,new Q.iv($.Y().a),!1,P.y)
this.c=null},
dT:function(){var u,t,s,r,q=Q.lZ()
for(u=q.a,t=this.a,s=0;s<64;++s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(s>=u.length)return H.d(u,s)
u[s]=r}return q},
E:function(a){var u,t
if(!a.gaA())return $.kD()
u=a.gaz(a)
t=this.a
if(u<0||u>=t.length)return H.d(t,u)
return new Q.v(t[u])},
B:function(a,b){var u,t,s
if(!a.gaA())return!1
u=this.a
t=a.gaz(a)
s=b.a
if(t<0||t>=u.length)return H.d(u,t)
u[t]=s
return!0},
cw:function(a){var u,t,s=a.a,r=$.kC(),q=r.a
if(typeof s!=="number")return s.w()
if(typeof q!=="number")return H.c(q)
u=new Q.v((s&q)>>>0)
for(t=0;s=this.a,t<s.length;++t){s=s[t]
q=r.a
if(typeof s!=="number")return s.w()
if(typeof q!=="number")return H.c(q)
if(new Q.v((s&q)>>>0).n(0,u))return Q.lL(t)}return new Q.i(0,0)},
dJ:function(a){var u=this,t=a.b,s=u.E(t),r=a.d,q=r!=null?u.E(r):null,p=$.Y()
u.B(t,p)
t=q!=null
if(t)u.B(r,p)
r=$.bH()
p=s.a
r=r.a
if(typeof p!=="number")return p.X()
if(typeof r!=="number")return H.c(r)
u.B(a.c,new Q.v((p|r)>>>0))
if(t&&a.e!=null){t=q.a
if(typeof t!=="number")return t.X()
u.B(a.e,new Q.v((t|r)>>>0))}},
ip:function(a){if(this.ed(a)){if(!this.iF(a))return 2
return 1}return 0},
ed:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=$.bg(),f=a?$.a_():$.aW()
g=g.a
f=f.a
if(typeof g!=="number")return g.X()
if(typeof f!=="number")return H.c(f)
u=$.aJ().a
if(typeof u!=="number")return H.c(u)
t=h.cw(new Q.v((g|f|1&u)>>>0))
if(!t.gaA())return!1
s=a?-1:1
g=t.a
f=g+s
u=t.b
r=u+1
q=!a
p=$.cc()
o=[Q.v]
if(h.L(new Q.i(f,r),q,H.b([p],o)))return!0
n=u+-1
if(h.L(new Q.i(f,n),q,H.b([p],o)))return!0
f=g+2
p=$.cb()
if(h.L(new Q.i(f,r),q,H.b([p],o)))return!0
if(h.L(new Q.i(f,n),q,H.b([p],o)))return!0
f=g+1
m=u+2
if(h.L(new Q.i(f,m),q,H.b([p],o)))return!0
l=g+-1
if(h.L(new Q.i(l,m),q,H.b([p],o)))return!0
m=g+-2
if(h.L(new Q.i(m,r),q,H.b([p],o)))return!0
if(h.L(new Q.i(m,n),q,H.b([p],o)))return!0
m=u+-2
if(h.L(new Q.i(f,m),q,H.b([p],o)))return!0
if(h.L(new Q.i(l,m),q,H.b([p],o)))return!0
for(p=g>=1,m=g<=8,k=1;k<8;++k){j=u+k
i=new Q.i(g,j)
if(h.L(i,q,H.b([$.aK(),$.am()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.Y().a))break}for(k=1;k<8;++k){j=u+-k
i=new Q.i(g,j)
if(h.L(i,q,H.b([$.aK(),$.am()],o)))return!0
if(!(p&&m&&j>=1&&j<=8&&h.E(i).a==$.Y().a))break}for(p=u>=1,m=u<=8,k=1;k<8;++k){j=g+k
i=new Q.i(j,u)
if(h.L(i,q,H.b([$.aK(),$.am()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.Y().a))break}for(k=1;k<8;++k){j=g+-k
i=new Q.i(j,u)
if(h.L(i,q,H.b([$.aK(),$.am()],o)))return!0
if(!(j>=1&&j<=8&&p&&m&&h.E(i).a==$.Y().a))break}for(k=1;k<8;++k){p=g+k
m=u+k
i=new Q.i(p,m)
if(h.L(i,q,H.b([$.aV(),$.am()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.Y().a))break}for(k=1;k<8;++k){p=g+k
m=u+-k
i=new Q.i(p,m)
if(h.L(i,q,H.b([$.aV(),$.am()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.Y().a))break}for(k=1;k<8;++k){p=g+-k
m=u+k
i=new Q.i(p,m)
if(h.L(i,q,H.b([$.aV(),$.am()],o)))return!0
if(!(p>=1&&p<=8&&m>=1&&m<=8&&h.E(i).a==$.Y().a))break}for(k=1;k<8;++k){p=-k
m=g+p
p=u+p
i=new Q.i(m,p)
if(h.L(i,q,H.b([$.aV(),$.am()],o)))return!0
if(!(m>=1&&m<=8&&p>=1&&p<=8&&h.E(i).a==$.Y().a))break}p=$.bg()
if(h.L(new Q.i(f,r),q,H.b([p],o)))return!0
if(h.L(new Q.i(f,u),q,H.b([p],o)))return!0
if(h.L(new Q.i(f,n),q,H.b([p],o)))return!0
if(h.L(new Q.i(g,n),q,H.b([p],o)))return!0
if(h.L(new Q.i(l,n),q,H.b([p],o)))return!0
if(h.L(new Q.i(l,u),q,H.b([p],o)))return!0
if(h.L(new Q.i(l,r),q,H.b([p],o)))return!0
if(h.L(new Q.i(g,r),q,H.b([p],o)))return!0
return!1},
L:function(a,b,c){var u,t,s,r,q,p
if(a.gaA()){u=this.E(a)
u.toString
t=$.a_()
s=u.a
t=t.a
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.c(t)
if((s&t)>>>0===t===b){t=$.bI()
r=t.a
if(typeof r!=="number")return H.c(r)
q=new Q.v((s&r)>>>0)
for(p=c.length-1;p>=0;--p){if(p>=c.length)return H.d(c,p)
s=c[p].a
r=t.a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.c(r)
if(q.n(0,new Q.v((s&r)>>>0)))return!0}}}return!1},
iF:function(a){var u,t,s
for(u=0;u<64;++u){t=this.a
if(u>=t.length)return H.d(t,u)
t=t[u]
if(t!=$.Y().a){s=$.a_().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.c(s)
s=(t&s)>>>0===s===a
t=s}else t=!1
if(t)if(this.iG(Q.lL(u)))return!0}return!1},
iG:function(a){var u={}
u.a=!1
this.cz(new Q.ix(u),a)
return u.a},
iJ:function(a){var u={}
u.a=!1
this.cz(new Q.iy(u,a),a.b)
return u.a},
cz:function(a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null,a="Pawn en passent "
if(!a1.gaA())return
u=c.E(a1)
t=new Q.iw(c,u,a0)
s=u.a
r=$.bI().a
if(typeof s!=="number")return s.w()
if(typeof r!=="number")return H.c(r)
q=new Q.v((s&r)>>>0)
if(q.n(0,$.cc())){u=c.E(a1)
u.toString
s=$.a_()
r=u.a
s=s.a
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.c(s)
p=(r&s)>>>0===s
o=$.bH().a
if(typeof o!=="number")return H.c(o)
n=p?-1:1
m=a1.a
l=m+n
k=a1.b
j=new Q.i(l,k)
i=c.E(j).a
h=$.Y().a
if(i==h){t.$1(new Q.aa("Pawn move to "+j.i(0),a1,j,b,b))
if((r&o)>>>0!==o){j=new Q.i(m+(n+n),k)
if(c.E(j).a==h)t.$1(new Q.aa("Pawn move to "+j.i(0),a1,j,b,b))}}r=k+-1
j=new Q.i(l,r)
g=c.E(j)
i=g.a
f=$.kD().a
if(i!=f)if(i!=h){if(typeof i!=="number")return i.w()
i=(i&s)>>>0===s!==p}else i=!1
else i=!1
if(i)t.$1(new Q.aa("Pawn take "+g.gaT()+" at "+j.i(0),a1,j,j,b));++k
j=new Q.i(l,k)
g=c.E(j)
i=g.a
if(i!=f)if(i!=h){if(typeof i!=="number")return i.w()
i=(i&s)>>>0===s!==p}else i=!1
else i=!1
if(i)t.$1(new Q.aa("Pawn take "+g.gaT()+" at "+j.i(0),a1,j,j,b))
if(c.c!=null)i=m===(p?4:5)
else i=!1
if(i){j=new Q.i(l,r)
if(j.gaA()&&c.E(j).a==h){e=new Q.i(m,r)
g=c.E(e)
i=g.a
if(i!=h){if(typeof i!=="number")return i.w()
i=(i&s)>>>0===s!==p}else i=!1
if(i){d=c.c.E(new Q.i(m+(n+n),r))
r=d.a
if(typeof r!=="number")return r.w()
if((r&o)>>>0!==o&&d.cU(g))t.$1(new Q.aa(a+g.gaT()+" at "+j.i(0),a1,j,e,b))}}j=new Q.i(l,k)
if(j.gaA()&&c.E(j).a==h){e=new Q.i(m,k)
g=c.E(e)
r=g.a
if(r!=h){if(typeof r!=="number")return r.w()
s=(r&s)>>>0===s!==p}else s=!1
if(s){d=c.c.E(new Q.i(m+(n+n),k))
s=d.a
if(typeof s!=="number")return s.w()
if((s&o)>>>0!==o&&d.cU(g))t.$1(new Q.aa(a+g.gaT()+" at "+j.i(0),a1,j,e,b))}}}}else if(q.n(0,$.aK()))c.hY(t,a1)
else if(q.n(0,$.cb())){c.a2(t,a1,2,1)
c.a2(t,a1,2,-1)
c.a2(t,a1,1,2)
c.a2(t,a1,-1,2)
c.a2(t,a1,-2,1)
c.a2(t,a1,-2,-1)
c.a2(t,a1,1,-2)
c.a2(t,a1,-1,-2)}else if(q.n(0,$.aV())){c.a7(t,a1,1,1)
c.a7(t,a1,1,-1)
c.a7(t,a1,-1,-1)
c.a7(t,a1,-1,1)}else if(q.n(0,$.am())){c.a7(t,a1,1,1)
c.a7(t,a1,1,0)
c.a7(t,a1,1,-1)
c.a7(t,a1,0,-1)
c.a7(t,a1,-1,-1)
c.a7(t,a1,-1,0)
c.a7(t,a1,-1,1)
c.a7(t,a1,0,1)}else if(q.n(0,$.bg()))c.fD(t,a1)},
a2:function(a,b,c,d){var u,t,s,r,q,p=new Q.i(b.a+c,b.b+d)
if(!p.gaA())return!0
u=this.E(b)
t=this.E(p)
s=t.a
if(s==$.Y().a){a.$1(new Q.aa(u.gaT()+" move to "+p.i(0),b,p,null,null))
return!1}u.toString
r=$.a_()
q=u.a
r=r.a
if(typeof q!=="number")return q.w()
if(typeof r!=="number")return H.c(r)
if(typeof s!=="number")return s.w()
s=(s&r)>>>0===r!==((q&r)>>>0===r)
if(s)a.$1(new Q.aa(u.gaT()+" take "+t.gaT()+" at "+p.i(0),b,p,p,null))
return!0},
a7:function(a,b,c,d){var u
for(u=1;u<8;++u)if(this.a2(a,b,c*u,d*u))return},
hY:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.E(b)
m.toString
u=$.a_()
t=m.a
u=u.a
if(typeof t!=="number")return t.w()
if(typeof u!=="number")return H.c(u)
s=$.bH().a
if(typeof s!=="number")return H.c(s)
n.a7(a,b,0,1)
n.a7(a,b,0,-1)
n.a7(a,b,1,0)
n.a7(a,b,-1,0)
if((t&s)>>>0!==s){r=new Q.i((t&u)>>>0===u?8:1,4)
u=n.E(r).a
t=$.bI().a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.c(t)
if(new Q.v((u&t)>>>0).n(0,$.bg())&&(u&s)>>>0!==s){u=b.b
q=u>4?-1:1
o=u+q
u=b.a
while(!0){if(!(o!==4)){p=!0
break}if(n.E(new Q.i(u,o)).a!=$.Y().a){p=!1
break}o+=q}if(p){u=r.a
t=4-q-q
a.$1(new Q.aa("Rook castles with King",b,new Q.i(u,t+q),r,new Q.i(u,t)))}}}},
fD:function(a,b){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.E(b)
j.toString
u=$.bH()
t=j.a
u=u.a
if(typeof t!=="number")return t.w()
if(typeof u!=="number")return H.c(u)
k.a2(a,b,1,1)
k.a2(a,b,1,0)
k.a2(a,b,1,-1)
k.a2(a,b,0,-1)
k.a2(a,b,-1,-1)
k.a2(a,b,-1,0)
k.a2(a,b,-1,1)
k.a2(a,b,0,1)
if((t&u)>>>0!==u)for(u=b.a,t=b.b,s=1;s<=8;s+=7){r=new Q.i(u,s)
q=k.E(r).a
p=$.bI().a
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.c(p)
if(new Q.v((q&p)>>>0).n(0,$.aK())){p=$.bH().a
if(typeof p!=="number")return H.c(p)
p=(q&p)>>>0!==p
q=p}else q=!1
if(q){o=t>s?-1:1
m=t+o
l=m
while(!0){if(!(l!==s)){n=!0
break}if(k.E(new Q.i(u,l)).a!=$.Y().a){n=!1
break}l+=o}if(n){q=m+o
a.$1(new Q.aa("King castles with Rook",b,new Q.i(u,q),r,new Q.i(u,q-o)))}}}},
i:function(a){var u,t,s,r,q,p,o,n,m=0
while(!0){if(!(m<64)){u=!1
break}t=this.a
if(m>=t.length)return H.d(t,m)
t=t[m]
s=$.bH().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.c(s)
if((t&s)>>>0===s){u=!0
break}++m}r=new Q.iD()
r.d=!1
t=new Array(64)
t.fixed$length=Array
r.c=H.b(t,[P.t])
r.d=!0
for(q=0;q<8;q=p)for(p=q+1,t=(p-1)*8,o=0;o<8;o=n){n=o+1
m=t+(n-1)
s=this.a
if(m<0||m>=s.length)return H.d(s,m)
r.eD(q,o,new Q.v(s[m]).ew(0,!1,u))}return r.i(0)}}
Q.iv.prototype={
$1:function(a){return this.a}}
Q.ix.prototype={
$1:function(a){this.a.a=!0}}
Q.iy.prototype={
$1:function(a){var u,t=this.a
if(t.a)return
u=this.b
if(a.b.n(0,u.b)&&a.c.n(0,u.c)&&J.D(a.d,u.d)&&J.D(a.e,u.e))t.a=!0}}
Q.iw.prototype={
$1:function(a){var u,t,s=this.a.dT()
s.dJ(a)
u=this.b
u.toString
t=$.a_()
u=u.a
t=t.a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.c(t)
if(!s.ed((u&t)>>>0===t))this.c.$1(a)}}
Q.iD.prototype={
dm:function(a,b){var u=a*8+b
if(u>=64)return-1
return u},
eD:function(a,b,c){var u,t=this.dm(a,b)
if(t<0)return
u=this.c
if(t>=u.length)return H.d(u,t)
u[t]=c},
fI:function(){var u,t,s,r,q=this.c,p=q.length
if(p<=0)return 0
u=q[0]
t=(u==null?"":u).length
for(s=1;s<p;++s){u=q[s]
r=(u==null?"":u).length
if(r>t)t=r}return t},
i:function(a){var u,t,s,r,q,p,o,n=this,m=H.b([],[P.t]),l=n.fI()
if(n.d){u=C.b.bL("",2+C.d.a8(l-1,2))
for(t=l+1,s=0;s<8;){++s
u+=C.b.bL(" "+s,t)}m.push(C.b.jv(u))
r=2}else r=0
for(q=0;q<8;++q){u=n.d?C.b.bL(""+(q+1),r):""
for(s=0;s<8;++s){if(n.d||s!==0)u+="|"
p=n.dm(q,s)
t=n.c
if(p<0||p>=t.length)return H.d(t,p)
o=t[p]
u+=C.b.bL(o==null?"":o,l)}m.push(n.d?u+"|":u)}return C.a.u(m,"\n")}}
Q.v.prototype={
X:function(a,b){var u=this.a,t=b.a
if(typeof u!=="number")return u.X()
if(typeof t!=="number")return H.c(t)
return new Q.v((u|t)>>>0)},
cU:function(a){var u,t=this.a,s=$.kC().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.c(s)
u=a.a
if(typeof u!=="number")return u.w()
return(t&s)>>>0===(u&s)>>>0},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof Q.v))return!1
u=b.a
return this.a==u},
gim:function(){var u,t=this.a,s=$.ls().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.c(s)
u=new Q.v((t&s)>>>0)
if(u.n(0,$.aW()))return"B"
if(u.n(0,$.a_()))return"W"
return" "},
gj6:function(){var u,t=this.a,s=$.bI().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.c(s)
u=new Q.v((t&s)>>>0)
if(u.n(0,$.cc()))return"P"
if(u.n(0,$.aK()))return"R"
if(u.n(0,$.cb()))return"H"
if(u.n(0,$.aV()))return"B"
if(u.n(0,$.am()))return"Q"
if(u.n(0,$.bg()))return"K"
return" "},
giO:function(){var u=this.a,t=$.aJ().a
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.c(t)
t=(u&t)>>>0
if(t===$.Y().a)return" "
return""+t},
gaT:function(){var u,t=this.a,s=$.bI().a
if(typeof t!=="number")return t.w()
if(typeof s!=="number")return H.c(s)
u=new Q.v((t&s)>>>0)
if(u.n(0,$.cc()))return"Pawn"
if(u.n(0,$.aK()))return"Rook"
if(u.n(0,$.cb()))return"Knight"
if(u.n(0,$.aV()))return"Bishop"
if(u.n(0,$.am()))return"Queen"
if(u.n(0,$.bg()))return"King"
return"Empty"},
ew:function(a,b,c){var u,t,s=this,r=s.a
if(r==$.Y().a)return""
if(c){u=$.bH().a
if(typeof r!=="number")return r.w()
if(typeof u!=="number")return H.c(u)
t=(r&u)>>>0===u?"+":" "}else t=""
t=t+s.gim()+s.gj6()
return b?t+s.giO():t},
i:function(a){return this.ew(a,!0,!0)}}
S.fe.prototype={
eN:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.fg==null){$.fg=E.P(q,!0,q,"color bishop shape",q,q)
$.kG=E.P(q,!0,q,"pick bishop shape",q,q)
O.ax("./resources/bishop.obj",a.f).au(new S.fh(),P.Q)}u=this.k3
t=u?"white":"black"
s=t+(" bishop "+d)
t=$.aV()
u=u?$.a_():$.aW()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.c(u)
r=$.aJ().a
if(typeof r!=="number")return H.c(r)
this.aZ(s,new Q.v((t|u|d&r)>>>0),$.fg,$.kG)}}
S.fh.prototype={
$1:function(a){$.fg.sa_(0,a.c)
$.kG.sa_(0,a.c)}}
S.d2.prototype={
eO:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=null
m.go=H.b([],[S.dB])
m.id=H.b([],[S.dR])
m.k1=H.b([],[Q.aa])
m.k4=S.nh(a)
m.a="board"
m.r1=!1
for(u=1;u<=8;++u)for(t=1;t<=8;++t){s=S.nE(a,m,(u+t)%2===0,new Q.i(u,t))
m.id.push(s)
r=m.y
q=[H.as(r,0)]
if(r.aP(H.b([s],q))){p=r.a
o=p.length
p.push(s)
q=H.b([s],q)
r=r.c
if(r!=null)r.$2(o,q)}}for(u=1;u<=8;++u){r=S.lQ(a,m,!0,u,0,0.7)
m.go.push(r)
q=m.y
p=[H.as(q,0)]
if(q.aP(H.b([r],p))){n=q.a
o=n.length
n.push(r)
p=H.b([r],p)
r=q.c
if(r!=null)r.$2(o,p)}r=S.lQ(a,m,!1,u,0,0.7)
m.go.push(r)
q=m.y
p=[H.as(q,0)]
if(q.aP(H.b([r],p))){n=q.a
o=n.length
n.push(r)
p=H.b([r],p)
r=q.c
if(r!=null)r.$2(o,p)}}m.a6(0,S.i6(a,m,!0,1,0,0.7))
m.a6(0,S.i6(a,m,!0,2,0,0.7))
m.a6(0,S.i6(a,m,!1,1,0,0.7))
m.a6(0,S.i6(a,m,!1,2,0,0.7))
m.a6(0,S.h8(a,m,!0,1,0,0.7))
m.a6(0,S.h8(a,m,!0,2,3.141592653589793,0.7))
m.a6(0,S.h8(a,m,!1,1,0,0.7))
m.a6(0,S.h8(a,m,!1,2,3.141592653589793,0.7))
m.a6(0,S.ff(a,m,!0,1,-1.5707963267948966,0.8))
m.a6(0,S.ff(a,m,!0,2,1.5707963267948966,0.8))
m.a6(0,S.ff(a,m,!1,1,-1.5707963267948966,0.8))
m.a6(0,S.ff(a,m,!1,2,1.5707963267948966,0.8))
m.a6(0,S.lV(a,m,!0,1,0,1))
m.a6(0,S.lV(a,m,!1,1,0,1))
m.a6(0,S.lJ(a,m,!0,1.5707963267948966,0.9))
m.a6(0,S.lJ(a,m,!1,1.5707963267948966,0.9))
r=E.P(l,!0,l,"",l,l)
m.k3=r
m.y.j(0,r)
m.k3.y.j(0,S.fB(a,m,0,0,0,0))
m.k3.y.j(0,S.fB(a,m,8,0,1.5707963267948966,1))
m.k3.y.j(0,S.fB(a,m,8,8,3.141592653589793,2))
m.k3.y.j(0,S.fB(a,m,0,8,4.71238898038469,3))
r=F.ow(30)
q=m.k4.db
q=E.P(l,!0,U.bm(V.du(0,-0.5,0).k(0,V.lN(-1.5707963267948966)).k(0,V.l0(12,12,12,1))),"",r,q)
m.k2=q
m.y.j(0,q)
q=m.fy
r=q.d
if(r==null)r=q.d=D.E()
r.j(0,m.ghb())
m.cW(q.c)},
a6:function(a,b){this.go.push(b)
this.y.j(0,b)},
j4:function(a){var u,t,s,r,q,p=this
for(u=p.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(J.D(r.ry.b,a)){p.dt(r.fy)
return}}for(u=p.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){q=u[s]
if(J.D(q.r1.b,a)){p.dt(q.fy)
return}}},
dt:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
for(u=j.k1,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.c.n(0,a)||J.D(r.d,a)){u=j.fy
q=u.c.E(r.b)
q.toString
t=$.a_()
p=q.a
t=t.a
if(typeof p!=="number")return p.w()
if(typeof t!=="number")return H.c(t)
if((p&t)>>>0===t!==u.a)H.n(P.k("may not make a move movement out-of-turn"))
if(!u.c.iJ(r))H.n(P.k("not a valid move: "+J.an(r)))
t=u.c
o=t.dT()
o.c=t
u.c=o
o.dJ(r)
t=!u.a
u.a=t
u.c.ip(t)
u=u.d
if(u!=null)u.C(null)
u=j.k1;(u&&C.a).sl(u,0)
return}}u=j.fy
n=u.c.E(a)
t=n.a
if(t!=$.Y().a){p=$.a_().a
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.c(p)
p=(t&p)>>>0===p!==u.a}else p=!0
if(p)return
q=j.eb(n)
m=q!=null&&q.r1
j.dP()
j.dQ()
if(!m){q=j.eb(n)
if(q!=null){q.sbQ(0,!0)
l=j.ev(q.fy)
if(l!=null)l.sbQ(0,!0)}if(t==$.kD().a)H.n(P.k("may not get movements for an out-of-bounds piece"))
p=$.a_().a
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.c(p)
if((t&p)>>>0===p!==u.a)H.n(P.k("may not get movements out-of-turn"))
u=u.c
t=u.cw(n)
k=H.b([],[Q.aa])
u.cz(C.a.gi9(k),t)
j.k1=k
j.eF(k)}},
hc:function(a){var u=this
u.dP()
u.dQ()
u.cW(u.fy.c)},
eb:function(a){var u,t,s,r,q,p=a.a,o=$.kC(),n=o.a
if(typeof p!=="number")return p.w()
if(typeof n!=="number")return H.c(n)
u=new Q.v((p&n)>>>0)
for(p=this.go,n=p.length,t=0;t<p.length;p.length===n||(0,H.o)(p),++t){s=p[t]
r=s.k4.a
q=o.a
if(typeof r!=="number")return r.w()
if(typeof q!=="number")return H.c(q)
if(new Q.v((r&q)>>>0).n(0,u))return s}return},
j5:function(a){var u,t,s,r
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(J.D(r.fy,a))return r}return},
ev:function(a){var u,t,s,r
for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.fy.n(0,a))return r}return},
dP:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(!1!==r.r2){r.r1=r.r2=!1
r.al()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){q=u[s]
if(!1!==q.k3){q.k2=q.k3=!1
q.al()}}},
dQ:function(){var u,t,s,r,q
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(!1!==r.r1){r.r2=r.r1=!1
r.al()}}for(u=this.id,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){q=u[s]
if(!1!==q.k2){q.k3=q.k2=!1
q.al()}}},
scY:function(a){var u,t,s,r,q,p,o=this
if(a!==o.r1){o.r1=a
u=o.k2.b=!a
o.k3.b=u
for(t=o.go,s=t.length,r=0;r<s;++r){q=t[r]
if(a!==q.rx){q.rx=a
q.x1.b=u
q.x2.b=a}}for(t=o.id,s=t.length,r=0;r<s;++r){p=t[r]
if(a!==p.k4){p.k4=a
p.r2.b=u
p.rx.b=a}}}},
cW:function(a){var u,t,s,r,q,p
for(u=this.go,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=a.cw(r.k4)
if(!J.D(r.fy,q)){r.fy=q
r.dF()}p=q.a
if(p>=1)if(p<=8){p=q.b
p=p>=1&&p<=8}else p=!1
else p=!1
r.b=p}},
eF:function(a){var u,t,s,r,q,p
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
r=this.ev(s.c)
if(!0!==r.k3){r.k3=!0
r.k2=!1
r.al()}q=s.d
if(q!=null){p=this.j5(q)
if(!0!==p.r2){p.r2=!0
p.r1=!1
p.al()}}}}}
S.fA.prototype={
eP:function(a,b,c,d,e,f){var u,t=this,s=null
if($.fC==null){$.fC=E.P(s,!0,s,"edge shape",s,s)
O.ax("./resources/edge.obj",a.f).au(new S.fD(),P.Q)}t.sbK(U.bm(V.du(c-4,0,d-4).k(0,V.l_(e))))
t.a="edge"
t.y.j(0,$.fC)
u=b.k4.cy
if(f>=u.length)return H.d(u,f)
t.sZ(u[f])}}
S.fD.prototype={
$1:function(a){$.fC.sa_(0,a.c)}}
S.ky.prototype={
$1:function(a){var u,t=this.a
t.scY(!0)
u=this.b
u.aa(this.c)
t.scY(!1)
u.cL()}}
S.kz.prototype={
$1:function(a){this.a.j4(H.j(a,"$id7").d.eA())}}
S.kA.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return}}
S.h4.prototype={
eQ:function(a,b,c,d,e){var u,t,s,r,q=null
if($.h5==null){$.h5=E.P(q,!0,q,"color king shape",q,q)
$.kW=E.P(q,!0,q,"pick king shape",q,q)
O.ax("./resources/king.obj",a.f).au(new S.h6(),P.Q)}u=this.k3
t=(u?"white":"black")+" king"
s=$.bg()
u=u?$.a_():$.aW()
s=s.a
u=u.a
if(typeof s!=="number")return s.X()
if(typeof u!=="number")return H.c(u)
r=$.aJ().a
if(typeof r!=="number")return H.c(r)
this.aZ(t,new Q.v((s|u|1&r)>>>0),$.h5,$.kW)}}
S.h6.prototype={
$1:function(a){$.h5.sa_(0,a.c)
$.kW.sa_(0,a.c)}}
S.h7.prototype={
eR:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.h9==null){$.h9=E.P(q,!0,q,"color knight shape",q,q)
$.kX=E.P(q,!0,q,"pick knight shape",q,q)
O.ax("./resources/knight.obj",a.f).au(new S.ha(),P.Q)}u=this.k3
t=u?"white":"black"
s=t+(" knight "+d)
t=$.cb()
u=u?$.a_():$.aW()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.c(u)
r=$.aJ().a
if(typeof r!=="number")return H.c(r)
this.aZ(s,new Q.v((t|u|d&r)>>>0),$.h9,$.kX)}}
S.ha.prototype={
$1:function(a){$.h9.sa_(0,a.c)
$.kX.sa_(0,a.c)}}
S.hy.prototype={
eT:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=34067,e=a.f,d=e.a,c=d.createTexture()
d.bindTexture(f,c)
d.texParameteri(f,10242,10497)
d.texParameteri(f,10243,10497)
d.texParameteri(f,10241,9729)
d.texParameteri(f,10240,9729)
d.bindTexture(f,null)
u=new T.iL()
u.a=0
u.b=c
u.c=!1
u.d=0
e.b_(u,c,"resources/posx.png",34069,!1,!1)
e.b_(u,c,"resources/negx.png",34070,!1,!1)
e.b_(u,c,"resources/posy.png",34071,!1,!1)
e.b_(u,c,"resources/negy.png",34072,!1,!1)
e.b_(u,c,"resources/posz.png",34073,!1,!1)
e.b_(u,c,"resources/negz.png",34074,!1,!1)
g.a=u
t=D.lB()
t.sq(0,new V.r(1,0.9,0.8))
t.b=U.bm(V.kZ(V.l2(),V.jh(),new V.C(0,-1,-0.25)))
s=D.lB()
s.sq(0,new V.r(0,0.1,0.3))
s.b=U.bm(V.kZ(V.l2(),V.jh(),new V.C(0,1,0.25)))
r=new V.r(0.15,0.15,0.15)
e=O.a4()
d=e.x
d.sq(0,new V.r(0.6,0.6,0.6))
d=e.r
d.sq(0,new V.r(0.4,0.4,0.4))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(60)
e.sac(g.a)
e.cx.sq(0,r)
e.dx.j(0,t)
e.dx.j(0,s)
g.b=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.2,0.2,0.2))
d=e.r
d.sq(0,new V.r(0.1,0.1,0.1))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(60)
e.sac(g.a)
e.cx.sq(0,r)
e.dx.j(0,t)
e.dx.j(0,s)
g.c=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.6,0,0))
d=e.r
d.sq(0,new V.r(0.8,0,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,r)
e.dx.j(0,t)
e.dx.j(0,s)
g.d=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.2,0,0))
d=e.r
d.sq(0,new V.r(0.6,0,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,r)
e.dx.j(0,t)
e.dx.j(0,s)
g.e=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.5,0.5,0))
d=e.r
d.sq(0,new V.r(0.7,0.7,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,r)
e.dx.j(0,t)
e.dx.j(0,s)
g.f=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.1,0.1,0))
d=e.r
d.sq(0,new V.r(0.5,0.5,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,r)
e.dx.j(0,t)
e.dx.j(0,s)
g.r=e
q=new V.r(0.075,0.075,0.075)
e=O.a4()
d=e.x
d.sq(0,new V.r(0.6,0.6,0.6))
d=e.r
d.sq(0,new V.r(0.4,0.4,0.4))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(60)
e.sac(g.a)
e.cx.sq(0,q)
e.dx.j(0,t)
e.dx.j(0,s)
g.x=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.2,0.2,0.2))
d=e.r
d.sq(0,new V.r(0.1,0.1,0.1))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(60)
e.sac(g.a)
e.cx.sq(0,q)
e.dx.j(0,t)
e.dx.j(0,s)
g.y=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.6,0,0))
d=e.r
d.sq(0,new V.r(0.8,0,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,q)
e.dx.j(0,t)
e.dx.j(0,s)
g.z=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.2,0,0))
d=e.r
d.sq(0,new V.r(0.6,0,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,q)
e.dx.j(0,t)
e.dx.j(0,s)
g.Q=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.5,0.5,0))
d=e.r
d.sq(0,new V.r(0.7,0.7,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,q)
e.dx.j(0,t)
e.dx.j(0,s)
g.ch=e
e=O.a4()
d=e.x
d.sq(0,new V.r(0.1,0.1,0))
d=e.r
d.sq(0,new V.r(0.5,0.5,0))
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(100)
e.sac(g.a)
e.cx.sq(0,q)
e.dx.j(0,t)
e.dx.j(0,s)
g.cx=e
g.cy=H.b([],[O.b_])
for(p=0;p<4;++p){o=a.f.aq("resources/edge"+p+".png")
n=a.f.aq("resources/edge"+p+"Normal.png")
e=g.cy
d=O.a4()
d.Q.sae(n)
m=d.x
m.ao(new A.T(!0,m.c.b,!1))
m.b0(new V.r(0.6,0.6,0.6))
d.x.sae(o)
m=d.r
m.ao(new A.T(!0,m.c.b,!1))
m.b0(new V.r(0.4,0.4,0.4))
d.r.sae(o)
m=d.z
m.ao(new A.T(!0,m.c.b,!1))
m.b0(new V.r(1,1,1))
d.z.sa9(80)
d.sac(g.a)
m=d.cx
m.ao(new A.T(!0,m.c.b,!1))
m.b0(new V.r(0.1,0.1,0.1))
m=d.dx
m.toString
l=[H.kq(m,"aD",0)]
if(m.aP(H.b([t],l))){k=m.a
j=k.length
k.push(t)
l=H.b([t],l)
m=m.c
if(m!=null)m.$2(j,l)}m=d.dx
m.toString
l=[H.kq(m,"aD",0)]
if(m.aP(H.b([s],l))){k=m.a
j=k.length
k.push(s)
l=H.b([s],l)
m=m.c
if(m!=null)m.$2(j,l)}e.push(d)}i=a.f.aq("resources/tableColor.png")
h=a.f.aq("resources/tableSpec.png")
e=O.a4()
d=e.x
d.sq(0,new V.r(0.6,0.6,0.6))
e.x.sae(i)
d=e.r
d.sq(0,new V.r(0.4,0.4,0.4))
e.r.sae(i)
e.z.sq(0,new V.r(1,1,1))
e.z.sa9(80)
e.z.sae(h)
e.sac(g.a)
e.cx.sae(h)
e.Q.sae(a.f.aq("resources/tableNormal.png"))
e.dx.j(0,t)
e.dx.j(0,s)
g.db=e},
eg:function(a){var u=V.n_(a/96,1,1),t=new V.ao(u.a,u.b,u.c,1).eA()
u=new O.io()
u.b=t
return u}}
S.hQ.prototype={
eU:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.hR==null){$.hR=E.P(q,!0,q,"color pawn shape",q,q)
$.l1=E.P(q,!0,q,"pick pawn shape",q,q)
O.ax("./resources/pawn.obj",a.f).au(new S.hS(),P.Q)}u=this.k3
t=u?"white":"black"
s=t+(" pawn "+d)
t=$.cc()
u=u?$.a_():$.aW()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.c(u)
r=$.aJ().a
if(typeof r!=="number")return H.c(r)
this.aZ(s,new Q.v((t|u|d&r)>>>0),$.hR,$.l1)}}
S.hS.prototype={
$1:function(a){$.hR.sa_(0,a.c)
$.l1.sa_(0,a.c)}}
S.dB.prototype={
aW:function(a,b,c,d){var u=this
u.fy=new Q.i(0,0)
u.k1=U.bm(null)
u.k4=$.Y()
u.rx=u.r2=u.r1=!1},
aZ:function(a,b,c,d){var u=this,t=null,s=u.k2
u.ry=s.k4.eg(s.y.a.length)
u.k4=b
s=[E.ap]
u.x1=E.P(H.b([c],s),!0,t,"color "+a,t,t)
u.x2=E.P(H.b([d],s),!1,t,"pick "+a,t,u.ry)
u.sbK(u.k1)
u.a=a
u.y.j(0,u.x1)
u.y.j(0,u.x2)
u.dF()
u.al()},
sbQ:function(a,b){var u=this
if(b!==u.r1){u.r1=b
u.r2=!1
u.al()}},
dF:function(){var u=this,t=u.k1,s=u.fy,r=u.id
r=V.du(s.a-4.5,0,s.b-4.5).k(0,V.l_(u.go)).k(0,V.l0(r,r,r,1))
t.sV(0,r)
return r},
al:function(){var u,t,s=this
if(s.k3)if(s.r1)s.sZ(s.k2.k4.d)
else{u=s.r2
t=s.k2.k4
if(u)s.sZ(t.f)
else s.sZ(t.b)}else if(s.r1)s.sZ(s.k2.k4.e)
else{u=s.r2
t=s.k2.k4
if(u)s.sZ(t.r)
else s.sZ(t.c)}}}
S.hZ.prototype={
eV:function(a,b,c,d,e,f){var u,t,s,r,q=null
if($.i_==null){$.i_=E.P(q,!0,q,"color queen shape",q,q)
$.l3=E.P(q,!0,q,"pick queen shape",q,q)
O.ax("./resources/queen.obj",a.f).au(new S.i0(),P.Q)}u=this.k3
t=u?"white":"black"
s=t+(" queen "+d)
t=$.am()
u=u?$.a_():$.aW()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.c(u)
r=$.aJ().a
if(typeof r!=="number")return H.c(r)
this.aZ(s,new Q.v((t|u|d&r)>>>0),$.i_,$.l3)}}
S.i0.prototype={
$1:function(a){$.i_.sa_(0,a.c)
$.l3.sa_(0,a.c)}}
S.i5.prototype={
eX:function(a,b,c,d,e,f){var u,t,s,r,q=null,p="rook shape"
if($.i7==null){$.i7=E.P(q,!0,q,p,q,q)
$.l8=E.P(q,!0,q,p,q,q)
O.ax("./resources/rook.obj",a.f).au(new S.i8(),P.Q)}u=this.k3
t=u?"white":"black"
s=t+(" rook "+d)
t=$.aK()
u=u?$.a_():$.aW()
t=t.a
u=u.a
if(typeof t!=="number")return t.X()
if(typeof u!=="number")return H.c(u)
r=$.aJ().a
if(typeof r!=="number")return H.c(r)
this.aZ(s,new Q.v((t|u|d&r)>>>0),$.i7,$.l8)}}
S.i8.prototype={
$1:function(a){$.i7.sa_(0,a.c)
$.l8.sa_(0,a.c)}}
S.dR.prototype={
f0:function(a,b,c,d){var u,t,s,r,q=this,p=null
if($.iR==null){$.iR=E.P(p,!0,p,"color tile shape",p,p)
$.lc=E.P(p,!0,p,"pick tile shape",p,p)
O.ax("./resources/tile.obj",a.f).au(new S.iS(),P.Q)}q.k4=q.k3=q.k2=!1
u=q.k1?"white":"black"
t=q.fy
s=t.a
t=t.b
r=u+(" tile "+s+" "+t)
u=q.id
q.r1=u.k4.eg(u.y.a.length)
u=[E.ap]
q.r2=E.P(H.b([$.iR],u),!0,p,"color "+r,p,p)
q.rx=E.P(H.b([$.lc],u),!1,p,"pick "+r,p,q.r1)
q.sbK(U.bm(V.du(s-4.5,0,t-4.5)))
q.a=r
q.y.j(0,q.r2)
q.y.j(0,q.rx)
q.al()},
sbQ:function(a,b){var u=this
if(b!==u.k2){u.k2=b
u.k3=!1
u.al()}},
al:function(){var u,t,s=this
if(s.k1)if(s.k2)s.sZ(s.id.k4.z)
else{u=s.k3
t=s.id.k4
if(u)s.sZ(t.ch)
else s.sZ(t.x)}else if(s.k2)s.sZ(s.id.k4.Q)
else{u=s.k3
t=s.id.k4
if(u)s.sZ(t.cx)
else s.sZ(t.y)}}}
S.iS.prototype={
$1:function(a){$.iR.sa_(0,a.c)
$.lc.sa_(0,a.c)}}
L.kv.prototype={
$0:function(){return S.oR(this.a)}};(function aliases(){var u=J.a.prototype
u.eL=u.i
u=J.dm.prototype
u.eM=u.i
u=K.di.prototype
u.eK=u.b7
u.d0=u.i
u=O.ct.prototype
u.d1=u.aO
u=O.aN.prototype
u.d2=u.aO})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._instance_1i,s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"nV","n7",25)
t(J.aZ.prototype,"gi9","j",17)
s(P,"oo","nJ",6)
s(P,"op","nK",6)
s(P,"oq","nL",6)
r(P,"ml","om",10)
q(P.e3.prototype,"gio",0,1,null,["$2","$1"],["bG","dS"],20,0)
var l
q(l=E.ap.prototype,"gel",0,0,null,["$1","$0"],["em","iV"],0,0)
q(l,"gen",0,0,null,["$1","$0"],["eo","iW"],0,0)
q(l,"gej",0,0,null,["$1","$0"],["ek","iU"],0,0)
q(l,"geh",0,0,null,["$1","$0"],["ei","iR"],0,0)
p(l,"giP","iQ",3)
p(l,"giS","iT",3)
q(l=E.dQ.prototype,"gd5",0,0,null,["$1","$0"],["d7","d6"],0,0)
o(l,"gjj","cL",10)
n(l=X.dY.prototype,"gh9","ha",4)
n(l,"gfY","fZ",4)
n(l,"gh3","h4",2)
n(l,"ghf","hg",11)
n(l,"ghd","he",11)
n(l,"ghj","hk",2)
n(l,"ghn","ho",2)
n(l,"gh7","h8",2)
n(l,"ghl","hm",2)
n(l,"gh5","h6",2)
n(l,"ghp","hq",23)
n(l,"ghr","hs",4)
n(l,"ghH","hI",5)
n(l,"ghD","hE",5)
n(l,"ghF","hG",5)
q(l=D.dp.prototype,"gdq",0,0,null,["$1","$0"],["dr","hh"],0,0)
n(l,"ght","hu",24)
p(l,"gfS","fT",12)
p(l,"ghx","hy",12)
m(V.S.prototype,"gl","cD",13)
m(V.C.prototype,"gl","cD",13)
q(l=U.cm.prototype,"gbw",0,0,null,["$1","$0"],["Y","aH"],0,0)
p(l,"gfQ","fR",14)
p(l,"ghv","hw",14)
q(l=U.dZ.prototype,"gbw",0,0,null,["$1","$0"],["Y","aH"],0,0)
n(l,"gf1","f2",1)
n(l,"gf3","f4",1)
n(l,"gf5","f6",1)
n(l,"gfE","fF",1)
n(l,"gfG","fH",1)
n(l,"gfb","fc",1)
n(l,"gf9","fa",1)
n(l,"gf7","f8",1)
q(l=M.d8.prototype,"ga5",0,0,null,["$1","$0"],["a0","bd"],0,0)
p(l,"ghz","hA",15)
p(l,"ghB","hC",15)
q(M.da.prototype,"ga5",0,0,null,["$1","$0"],["a0","bd"],0,0)
q(l=M.df.prototype,"ga5",0,0,null,["$1","$0"],["a0","bd"],0,0)
p(l,"gh_","h0",3)
p(l,"gh1","h2",3)
q(l=O.b_.prototype,"gaF",0,0,null,["$1","$0"],["U","be"],0,0)
q(l,"ghW",0,0,null,["$1","$0"],["dv","hX"],0,0)
p(l,"gfU","fV",16)
p(l,"gfW","fX",16)
q(O.ct.prototype,"gaF",0,0,null,["$1","$0"],["U","be"],0,0)
q(O.dH.prototype,"gaF",0,0,null,["$1","$0"],["U","be"],0,0)
q(l=T.d6.prototype,"gd8",0,0,null,["$1","$0"],["bs","fd"],0,0)
n(l,"gfJ","fK",1)
n(l,"gfL","fM",1)
n(l,"gfN","fO",1)
n(l,"gi7","i8",1)
n(l,"gi5","i6",1)
n(l,"gi3","i4",1)
q(X.dA.prototype,"gfg",0,0,null,["$1","$0"],["a1","fh"],0,0)
n(S.d2.prototype,"ghb","hc",1)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.kU,J.a,J.a9,P.ej,P.m,H.cr,P.fY,H.dg,H.j9,H.iZ,P.bo,H.cl,H.ch,H.eB,P.ad,H.hc,H.hd,H.h_,H.ek,H.jt,P.eH,P.ju,P.c2,P.cP,P.e3,P.ed,P.af,P.e1,P.dN,P.iC,P.k3,P.dS,P.bL,P.k9,P.k1,P.jW,P.ei,P.w,P.fl,P.k8,P.bF,P.aw,P.at,P.bn,P.hP,P.dK,P.ea,P.fP,P.bv,P.a1,P.Q,P.l5,P.ay,P.t,P.ba,W.fq,W.N,W.dh,P.eM,P.jX,K.f2,K.di,K.ds,K.id,L.dL,L.dT,L.dU,L.iU,O.aD,O.cu,E.fd,E.ap,E.i1,E.dQ,Z.e0,Z.cH,Z.bN,Z.bS,Z.bd,D.fk,D.bP,D.a0,O.ke,O.eX,O.kf,X.d4,X.dn,X.h3,X.hg,X.bx,X.hF,X.iV,X.dY,D.fc,D.ck,D.ac,D.hV,D.is,V.r,V.ao,V.fG,V.dt,V.b0,V.a2,V.Z,V.aQ,V.dE,V.S,V.C,U.dZ,M.da,M.df,M.aH,A.d_,A.f6,A.T,A.d0,A.dc,A.dC,A.dJ,A.hm,A.cC,A.cD,A.cF,A.cG,A.dW,A.j5,F.bQ,F.bU,F.bW,F.ie,F.ig,F.ih,F.ii,F.aI,F.ji,F.jj,F.jm,F.jn,O.dO,O.ct,O.hn,T.d6,T.iM,T.iP,X.iF,X.kI,X.fV,X.dA,V.ij,Q.fR,Q.i,Q.aa,Q.iu,Q.iD,Q.v,S.hy])
s(J.a,[J.fZ,J.dl,J.dm,J.aZ,J.cq,J.bs,H.cw,W.h,W.f1,W.d1,W.aM,W.L,W.e4,W.av,W.fu,W.fv,W.e6,W.de,W.e8,W.fx,W.l,W.eb,W.aY,W.fS,W.ee,W.bp,W.hf,W.hz,W.el,W.em,W.b2,W.en,W.eq,W.b4,W.eu,W.ew,W.b8,W.ex,W.b9,W.eC,W.aR,W.eF,W.iT,W.bc,W.eI,W.iX,W.jb,W.eN,W.eP,W.eR,W.eT,W.eV,P.bu,P.eg,P.by,P.es,P.hX,P.eD,P.bz,P.eK,P.f7,P.e2,P.dF,P.ez])
s(J.dm,[J.hT,J.c0,J.bt])
t(J.kT,J.aZ)
s(J.cq,[J.dk,J.dj])
t(P.he,P.ej)
s(P.he,[H.dX,W.jB,W.jA,P.fL])
t(H.X,H.dX)
s(P.m,[H.u,H.cs,H.jr,P.fX])
t(H.fE,H.cs)
s(P.fY,[H.dr,H.js])
s(P.bo,[H.hM,H.h2,H.j8,H.fj,H.ib,P.cx,P.aC,P.ja,P.j7,P.dM,P.fn,P.ft])
s(H.ch,[H.kB,H.iG,H.h1,H.h0,H.kr,H.ks,H.kt,P.jx,P.jw,P.jy,P.jz,P.k7,P.k6,P.ka,P.kb,P.kj,P.jF,P.jN,P.jJ,P.jK,P.jL,P.jH,P.jM,P.jG,P.jQ,P.jR,P.jP,P.jO,P.kh,P.k_,P.jZ,P.k0,P.hi,P.fy,P.fz,W.fT,W.fU,W.hB,W.hD,W.ia,W.iB,W.jE,P.kk,P.fM,P.fN,P.f9,E.i2,E.i3,E.i4,E.iQ,D.fH,D.fI,F.kl,F.jp,F.jo,F.jk,F.jl,O.hq,O.hr,O.hs,O.ht,O.hu,O.hv,O.hw,O.hx,T.iO,T.iN,V.kx,V.il,V.ik,Q.iv,Q.ix,Q.iy,Q.iw,S.fh,S.fD,S.ky,S.kz,S.kA,S.h6,S.ha,S.hS,S.i0,S.i8,S.iS,L.kv])
s(H.iG,[H.iz,H.cf])
t(P.hh,P.ad)
t(H.H,P.hh)
t(H.bV,H.u)
t(H.dw,H.cw)
s(H.dw,[H.cJ,H.cL])
t(H.cK,H.cJ)
t(H.cv,H.cK)
t(H.cM,H.cL)
t(H.dx,H.cM)
s(H.dx,[H.hG,H.hH,H.hI,H.hJ,H.hK,H.dy,H.hL])
t(P.k5,P.fX)
t(P.jv,P.e3)
t(P.jY,P.k9)
t(P.jV,P.k1)
t(P.fo,P.iC)
t(P.fF,P.fl)
t(P.jc,P.fF)
t(P.jd,P.fo)
s(P.at,[P.M,P.y])
s(P.aC,[P.bY,P.fW])
s(W.h,[W.I,W.fK,W.co,W.b7,W.cN,W.bb,W.aS,W.cQ,W.jq,W.cI,P.fa,P.bM])
s(W.I,[W.a3,W.bl])
s(W.a3,[W.q,P.p])
s(W.q,[W.f3,W.f4,W.bO,W.fO,W.cp,W.ic])
t(W.fp,W.aM)
t(W.cj,W.e4)
s(W.av,[W.fr,W.fs])
t(W.e7,W.e6)
t(W.dd,W.e7)
t(W.e9,W.e8)
t(W.fw,W.e9)
t(W.aX,W.d1)
t(W.ec,W.eb)
t(W.fJ,W.ec)
t(W.ef,W.ee)
t(W.cn,W.ef)
t(W.bR,W.co)
s(W.l,[W.bA,W.cA])
s(W.bA,[W.bT,W.aO,W.bZ])
t(W.hA,W.el)
t(W.hC,W.em)
t(W.eo,W.en)
t(W.hE,W.eo)
t(W.er,W.eq)
t(W.dz,W.er)
t(W.ev,W.eu)
t(W.hU,W.ev)
t(W.i9,W.ew)
t(W.cO,W.cN)
t(W.iq,W.cO)
t(W.ey,W.ex)
t(W.ir,W.ey)
t(W.iA,W.eC)
t(W.eG,W.eF)
t(W.iH,W.eG)
t(W.cR,W.cQ)
t(W.iI,W.cR)
t(W.eJ,W.eI)
t(W.iW,W.eJ)
t(W.bD,W.aO)
t(W.eO,W.eN)
t(W.jC,W.eO)
t(W.e5,W.de)
t(W.eQ,W.eP)
t(W.jS,W.eQ)
t(W.eS,W.eR)
t(W.ep,W.eS)
t(W.eU,W.eT)
t(W.k2,W.eU)
t(W.eW,W.eV)
t(W.k4,W.eW)
t(W.jD,P.dN)
t(P.aq,P.jX)
t(P.eh,P.eg)
t(P.hb,P.eh)
t(P.et,P.es)
t(P.hN,P.et)
t(P.eE,P.eD)
t(P.iE,P.eE)
t(P.eL,P.eK)
t(P.iY,P.eL)
t(P.f8,P.e2)
t(P.hO,P.bM)
t(P.eA,P.ez)
t(P.it,P.eA)
s(K.di,[K.b3,L.dV])
s(E.fd,[Z.d3,A.dG,T.dP])
s(D.a0,[D.bq,D.br,D.x,O.hY,X.hW,T.d7])
s(X.hW,[X.dq,X.aF,X.cB])
s(O.aD,[D.dp,U.cm,M.d8])
s(D.fk,[U.fm,U.aG])
t(U.d9,U.aG)
s(A.dG,[A.hj,A.im,A.ip])
s(A.dW,[A.bB,A.j2,A.j3,A.j4,A.j0,A.U,A.j1,A.G,A.c_,A.j6,A.cE,A.ab,A.a6,A.bC])
s(O.dO,[O.b_,O.dH,O.io])
s(O.ct,[O.hk,O.hl,O.aN])
s(O.aN,[O.ho,O.hp])
s(T.dP,[T.iJ,T.iL])
t(T.iK,T.iJ)
s(X.iF,[X.fb,X.fQ])
s(E.ap,[S.dB,S.d2,S.fA,S.dR])
s(S.dB,[S.fe,S.h4,S.h7,S.hQ,S.hZ,S.i5])
u(H.dX,H.j9)
u(H.cJ,P.w)
u(H.cK,H.dg)
u(H.cL,P.w)
u(H.cM,H.dg)
u(P.ej,P.w)
u(W.e4,W.fq)
u(W.e6,P.w)
u(W.e7,W.N)
u(W.e8,P.w)
u(W.e9,W.N)
u(W.eb,P.w)
u(W.ec,W.N)
u(W.ee,P.w)
u(W.ef,W.N)
u(W.el,P.ad)
u(W.em,P.ad)
u(W.en,P.w)
u(W.eo,W.N)
u(W.eq,P.w)
u(W.er,W.N)
u(W.eu,P.w)
u(W.ev,W.N)
u(W.ew,P.ad)
u(W.cN,P.w)
u(W.cO,W.N)
u(W.ex,P.w)
u(W.ey,W.N)
u(W.eC,P.ad)
u(W.eF,P.w)
u(W.eG,W.N)
u(W.cQ,P.w)
u(W.cR,W.N)
u(W.eI,P.w)
u(W.eJ,W.N)
u(W.eN,P.w)
u(W.eO,W.N)
u(W.eP,P.w)
u(W.eQ,W.N)
u(W.eR,P.w)
u(W.eS,W.N)
u(W.eT,P.w)
u(W.eU,W.N)
u(W.eV,P.w)
u(W.eW,W.N)
u(P.eg,P.w)
u(P.eh,W.N)
u(P.es,P.w)
u(P.et,W.N)
u(P.eD,P.w)
u(P.eE,W.N)
u(P.eK,P.w)
u(P.eL,W.N)
u(P.e2,P.ad)
u(P.ez,P.w)
u(P.eA,W.N)})()
var v={mangledGlobalNames:{y:"int",M:"double",at:"num",t:"String",bF:"bool",Q:"Null",bv:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.a0]},{func:1,ret:-1,args:[D.a0]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:-1,args:[P.y,[P.m,E.ap]]},{func:1,ret:-1,args:[W.l]},{func:1,ret:-1,args:[W.bZ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.Q,args:[,]},{func:1,ret:P.Q,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bT]},{func:1,ret:-1,args:[P.y,[P.m,D.ac]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.y,[P.m,U.aG]]},{func:1,ret:-1,args:[P.y,[P.m,M.aH]]},{func:1,ret:-1,args:[P.y,[P.m,V.b0]]},{func:1,ret:-1,args:[P.R]},{func:1,ret:-1,args:[,]},{func:1,ret:P.Q,args:[,P.ay]},{func:1,ret:-1,args:[P.R],opt:[P.ay]},{func:1,ret:P.Q,args:[,],opt:[P.ay]},{func:1,ret:[P.af,,],args:[,]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:P.bF,args:[[P.m,D.ac]]},{func:1,ret:P.y,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.f=W.bO.prototype
C.D=W.bR.prototype
C.E=J.a.prototype
C.a=J.aZ.prototype
C.j=J.dj.prototype
C.d=J.dk.prototype
C.k=J.dl.prototype
C.c=J.cq.prototype
C.b=J.bs.prototype
C.F=J.bt.prototype
C.q=J.hT.prototype
C.l=P.dF.prototype
C.m=J.c0.prototype
C.r=W.bD.prototype
C.t=W.cI.prototype
C.n=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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

C.A=new P.hP()
C.i=new P.jc()
C.B=new P.jd()
C.e=new P.jY()
C.h=new P.bn(0)
C.C=new P.bn(5e6)
C.p=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.y])
C.G=new P.c2(null,2)})();(function staticFields(){$.aL=0
$.cg=null
$.lx=null
$.mp=null
$.mj=null
$.ms=null
$.km=null
$.ku=null
$.lo=null
$.c3=null
$.cT=null
$.cU=null
$.lj=!1
$.J=C.e
$.ak=[]
$.mg=null
$.lO=null
$.lT=null
$.aP=null
$.lY=null
$.m5=null
$.m7=null
$.je=null
$.jf=null
$.jg=null
$.m6=null
$.lS=null
$.fg=null
$.kG=null
$.fC=null
$.h5=null
$.kW=null
$.h9=null
$.kX=null
$.hR=null
$.l1=null
$.i_=null
$.l3=null
$.i7=null
$.l8=null
$.iR=null
$.lc=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oZ","mx",function(){return H.mn("_$dart_dartClosure")})
u($,"p0","lr",function(){return H.mn("_$dart_js")})
u($,"ph","my",function(){return H.aT(H.j_({
toString:function(){return"$receiver$"}}))})
u($,"pi","mz",function(){return H.aT(H.j_({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pj","mA",function(){return H.aT(H.j_(null))})
u($,"pk","mB",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pn","mE",function(){return H.aT(H.j_(void 0))})
u($,"po","mF",function(){return H.aT(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pm","mD",function(){return H.aT(H.m3(null))})
u($,"pl","mC",function(){return H.aT(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pq","mH",function(){return H.aT(H.m3(void 0))})
u($,"pp","mG",function(){return H.aT(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pD","lt",function(){return P.nI()})
u($,"pF","mL",function(){return P.l6("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"px","mK",function(){return Z.az(0)})
u($,"pr","mI",function(){return Z.az(511)})
u($,"pz","au",function(){return Z.az(1)})
u($,"py","bj",function(){return Z.az(2)})
u($,"pt","bi",function(){return Z.az(4)})
u($,"pA","bk",function(){return Z.az(8)})
u($,"pB","bJ",function(){return Z.az(16)})
u($,"pu","cX",function(){return Z.az(32)})
u($,"pv","cY",function(){return Z.az(64)})
u($,"pw","mJ",function(){return Z.az(96)})
u($,"pC","cd",function(){return Z.az(128)})
u($,"ps","bh",function(){return Z.az(256)})
u($,"oY","mw",function(){return new V.fG(1e-9)})
u($,"oX","B",function(){return $.mw()})
u($,"pb","kD",function(){return Q.ae(-1)})
u($,"p6","Y",function(){return Q.ae(0)})
u($,"pa","bH",function(){return Q.ae(4096)})
u($,"p5","aJ",function(){return Q.ae(15)})
u($,"p7","kC",function(){return $.ls().X(0,$.bI()).X(0,$.aJ())})
u($,"p3","aW",function(){return Q.ae(256)})
u($,"pg","a_",function(){return Q.ae(512)})
u($,"p4","ls",function(){return Q.ae(768)})
u($,"pc","cc",function(){return Q.ae(16)})
u($,"pf","aK",function(){return Q.ae(32)})
u($,"p9","cb",function(){return Q.ae(48)})
u($,"p2","aV",function(){return Q.ae(64)})
u($,"pe","am",function(){return Q.ae(80)})
u($,"p8","bg",function(){return Q.ae(96)})
u($,"pd","bI",function(){return Q.ae(240)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.cw,ArrayBufferView:H.cw,Float32Array:H.cv,Float64Array:H.cv,Int16Array:H.hG,Int32Array:H.hH,Int8Array:H.hI,Uint16Array:H.hJ,Uint32Array:H.hK,Uint8ClampedArray:H.dy,CanvasPixelArray:H.dy,Uint8Array:H.hL,HTMLAudioElement:W.q,HTMLBRElement:W.q,HTMLBaseElement:W.q,HTMLBodyElement:W.q,HTMLButtonElement:W.q,HTMLContentElement:W.q,HTMLDListElement:W.q,HTMLDataElement:W.q,HTMLDataListElement:W.q,HTMLDetailsElement:W.q,HTMLDialogElement:W.q,HTMLDivElement:W.q,HTMLEmbedElement:W.q,HTMLFieldSetElement:W.q,HTMLHRElement:W.q,HTMLHeadElement:W.q,HTMLHeadingElement:W.q,HTMLHtmlElement:W.q,HTMLIFrameElement:W.q,HTMLInputElement:W.q,HTMLLIElement:W.q,HTMLLabelElement:W.q,HTMLLegendElement:W.q,HTMLLinkElement:W.q,HTMLMapElement:W.q,HTMLMediaElement:W.q,HTMLMenuElement:W.q,HTMLMetaElement:W.q,HTMLMeterElement:W.q,HTMLModElement:W.q,HTMLOListElement:W.q,HTMLObjectElement:W.q,HTMLOptGroupElement:W.q,HTMLOptionElement:W.q,HTMLOutputElement:W.q,HTMLParagraphElement:W.q,HTMLParamElement:W.q,HTMLPictureElement:W.q,HTMLPreElement:W.q,HTMLProgressElement:W.q,HTMLQuoteElement:W.q,HTMLScriptElement:W.q,HTMLShadowElement:W.q,HTMLSlotElement:W.q,HTMLSourceElement:W.q,HTMLSpanElement:W.q,HTMLStyleElement:W.q,HTMLTableCaptionElement:W.q,HTMLTableCellElement:W.q,HTMLTableDataCellElement:W.q,HTMLTableHeaderCellElement:W.q,HTMLTableColElement:W.q,HTMLTableElement:W.q,HTMLTableRowElement:W.q,HTMLTableSectionElement:W.q,HTMLTemplateElement:W.q,HTMLTextAreaElement:W.q,HTMLTimeElement:W.q,HTMLTitleElement:W.q,HTMLTrackElement:W.q,HTMLUListElement:W.q,HTMLUnknownElement:W.q,HTMLVideoElement:W.q,HTMLDirectoryElement:W.q,HTMLFontElement:W.q,HTMLFrameElement:W.q,HTMLFrameSetElement:W.q,HTMLMarqueeElement:W.q,HTMLElement:W.q,AccessibleNodeList:W.f1,HTMLAnchorElement:W.f3,HTMLAreaElement:W.f4,Blob:W.d1,HTMLCanvasElement:W.bO,CDATASection:W.bl,CharacterData:W.bl,Comment:W.bl,ProcessingInstruction:W.bl,Text:W.bl,CSSPerspective:W.fp,CSSCharsetRule:W.L,CSSConditionRule:W.L,CSSFontFaceRule:W.L,CSSGroupingRule:W.L,CSSImportRule:W.L,CSSKeyframeRule:W.L,MozCSSKeyframeRule:W.L,WebKitCSSKeyframeRule:W.L,CSSKeyframesRule:W.L,MozCSSKeyframesRule:W.L,WebKitCSSKeyframesRule:W.L,CSSMediaRule:W.L,CSSNamespaceRule:W.L,CSSPageRule:W.L,CSSRule:W.L,CSSStyleRule:W.L,CSSSupportsRule:W.L,CSSViewportRule:W.L,CSSStyleDeclaration:W.cj,MSStyleCSSProperties:W.cj,CSS2Properties:W.cj,CSSImageValue:W.av,CSSKeywordValue:W.av,CSSNumericValue:W.av,CSSPositionValue:W.av,CSSResourceValue:W.av,CSSUnitValue:W.av,CSSURLImageValue:W.av,CSSStyleValue:W.av,CSSMatrixComponent:W.aM,CSSRotation:W.aM,CSSScale:W.aM,CSSSkew:W.aM,CSSTranslation:W.aM,CSSTransformComponent:W.aM,CSSTransformValue:W.fr,CSSUnparsedValue:W.fs,DataTransferItemList:W.fu,DOMException:W.fv,ClientRectList:W.dd,DOMRectList:W.dd,DOMRectReadOnly:W.de,DOMStringList:W.fw,DOMTokenList:W.fx,Element:W.a3,AbortPaymentEvent:W.l,AnimationEvent:W.l,AnimationPlaybackEvent:W.l,ApplicationCacheErrorEvent:W.l,BackgroundFetchClickEvent:W.l,BackgroundFetchEvent:W.l,BackgroundFetchFailEvent:W.l,BackgroundFetchedEvent:W.l,BeforeInstallPromptEvent:W.l,BeforeUnloadEvent:W.l,BlobEvent:W.l,CanMakePaymentEvent:W.l,ClipboardEvent:W.l,CloseEvent:W.l,CustomEvent:W.l,DeviceMotionEvent:W.l,DeviceOrientationEvent:W.l,ErrorEvent:W.l,ExtendableEvent:W.l,ExtendableMessageEvent:W.l,FetchEvent:W.l,FontFaceSetLoadEvent:W.l,ForeignFetchEvent:W.l,GamepadEvent:W.l,HashChangeEvent:W.l,InstallEvent:W.l,MediaEncryptedEvent:W.l,MediaKeyMessageEvent:W.l,MediaQueryListEvent:W.l,MediaStreamEvent:W.l,MediaStreamTrackEvent:W.l,MessageEvent:W.l,MIDIConnectionEvent:W.l,MIDIMessageEvent:W.l,MutationEvent:W.l,NotificationEvent:W.l,PageTransitionEvent:W.l,PaymentRequestEvent:W.l,PaymentRequestUpdateEvent:W.l,PopStateEvent:W.l,PresentationConnectionAvailableEvent:W.l,PresentationConnectionCloseEvent:W.l,PromiseRejectionEvent:W.l,PushEvent:W.l,RTCDataChannelEvent:W.l,RTCDTMFToneChangeEvent:W.l,RTCPeerConnectionIceEvent:W.l,RTCTrackEvent:W.l,SecurityPolicyViolationEvent:W.l,SensorErrorEvent:W.l,SpeechRecognitionError:W.l,SpeechRecognitionEvent:W.l,SpeechSynthesisEvent:W.l,StorageEvent:W.l,SyncEvent:W.l,TrackEvent:W.l,TransitionEvent:W.l,WebKitTransitionEvent:W.l,VRDeviceEvent:W.l,VRDisplayEvent:W.l,VRSessionEvent:W.l,MojoInterfaceRequestEvent:W.l,USBConnectionEvent:W.l,IDBVersionChangeEvent:W.l,AudioProcessingEvent:W.l,OfflineAudioCompletionEvent:W.l,WebGLContextEvent:W.l,Event:W.l,InputEvent:W.l,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MessagePort:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aX,FileList:W.fJ,FileWriter:W.fK,HTMLFormElement:W.fO,Gamepad:W.aY,History:W.fS,HTMLCollection:W.cn,HTMLFormControlsCollection:W.cn,HTMLOptionsCollection:W.cn,XMLHttpRequest:W.bR,XMLHttpRequestUpload:W.co,XMLHttpRequestEventTarget:W.co,ImageData:W.bp,HTMLImageElement:W.cp,KeyboardEvent:W.bT,Location:W.hf,MediaList:W.hz,MIDIInputMap:W.hA,MIDIOutputMap:W.hC,MimeType:W.b2,MimeTypeArray:W.hE,PointerEvent:W.aO,MouseEvent:W.aO,DragEvent:W.aO,Document:W.I,DocumentFragment:W.I,HTMLDocument:W.I,ShadowRoot:W.I,XMLDocument:W.I,Attr:W.I,DocumentType:W.I,Node:W.I,NodeList:W.dz,RadioNodeList:W.dz,Plugin:W.b4,PluginArray:W.hU,ProgressEvent:W.cA,ResourceProgressEvent:W.cA,RTCStatsReport:W.i9,HTMLSelectElement:W.ic,SourceBuffer:W.b7,SourceBufferList:W.iq,SpeechGrammar:W.b8,SpeechGrammarList:W.ir,SpeechRecognitionResult:W.b9,Storage:W.iA,CSSStyleSheet:W.aR,StyleSheet:W.aR,TextTrack:W.bb,TextTrackCue:W.aS,VTTCue:W.aS,TextTrackCueList:W.iH,TextTrackList:W.iI,TimeRanges:W.iT,Touch:W.bc,TouchEvent:W.bZ,TouchList:W.iW,TrackDefaultList:W.iX,CompositionEvent:W.bA,FocusEvent:W.bA,TextEvent:W.bA,UIEvent:W.bA,URL:W.jb,VideoTrackList:W.jq,WheelEvent:W.bD,Window:W.cI,DOMWindow:W.cI,CSSRuleList:W.jC,ClientRect:W.e5,DOMRect:W.e5,GamepadList:W.jS,NamedNodeMap:W.ep,MozNamedAttrMap:W.ep,SpeechRecognitionResultList:W.k2,StyleSheetList:W.k4,SVGLength:P.bu,SVGLengthList:P.hb,SVGNumber:P.by,SVGNumberList:P.hN,SVGPointList:P.hX,SVGStringList:P.iE,SVGAElement:P.p,SVGAnimateElement:P.p,SVGAnimateMotionElement:P.p,SVGAnimateTransformElement:P.p,SVGAnimationElement:P.p,SVGCircleElement:P.p,SVGClipPathElement:P.p,SVGDefsElement:P.p,SVGDescElement:P.p,SVGDiscardElement:P.p,SVGEllipseElement:P.p,SVGFEBlendElement:P.p,SVGFEColorMatrixElement:P.p,SVGFEComponentTransferElement:P.p,SVGFECompositeElement:P.p,SVGFEConvolveMatrixElement:P.p,SVGFEDiffuseLightingElement:P.p,SVGFEDisplacementMapElement:P.p,SVGFEDistantLightElement:P.p,SVGFEFloodElement:P.p,SVGFEFuncAElement:P.p,SVGFEFuncBElement:P.p,SVGFEFuncGElement:P.p,SVGFEFuncRElement:P.p,SVGFEGaussianBlurElement:P.p,SVGFEImageElement:P.p,SVGFEMergeElement:P.p,SVGFEMergeNodeElement:P.p,SVGFEMorphologyElement:P.p,SVGFEOffsetElement:P.p,SVGFEPointLightElement:P.p,SVGFESpecularLightingElement:P.p,SVGFESpotLightElement:P.p,SVGFETileElement:P.p,SVGFETurbulenceElement:P.p,SVGFilterElement:P.p,SVGForeignObjectElement:P.p,SVGGElement:P.p,SVGGeometryElement:P.p,SVGGraphicsElement:P.p,SVGImageElement:P.p,SVGLineElement:P.p,SVGLinearGradientElement:P.p,SVGMarkerElement:P.p,SVGMaskElement:P.p,SVGMetadataElement:P.p,SVGPathElement:P.p,SVGPatternElement:P.p,SVGPolygonElement:P.p,SVGPolylineElement:P.p,SVGRadialGradientElement:P.p,SVGRectElement:P.p,SVGScriptElement:P.p,SVGSetElement:P.p,SVGStopElement:P.p,SVGStyleElement:P.p,SVGElement:P.p,SVGSVGElement:P.p,SVGSwitchElement:P.p,SVGSymbolElement:P.p,SVGTSpanElement:P.p,SVGTextContentElement:P.p,SVGTextElement:P.p,SVGTextPathElement:P.p,SVGTextPositioningElement:P.p,SVGTitleElement:P.p,SVGUseElement:P.p,SVGViewElement:P.p,SVGGradientElement:P.p,SVGComponentTransferFunctionElement:P.p,SVGFEDropShadowElement:P.p,SVGMPathElement:P.p,SVGTransform:P.bz,SVGTransformList:P.iY,AudioBuffer:P.f7,AudioParamMap:P.f8,AudioTrackList:P.fa,AudioContext:P.bM,webkitAudioContext:P.bM,BaseAudioContext:P.bM,OfflineAudioContext:P.hO,WebGL2RenderingContext:P.dF,SQLResultSetRowList:P.it})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dw.$nativeSuperclassTag="ArrayBufferView"
H.cJ.$nativeSuperclassTag="ArrayBufferView"
H.cK.$nativeSuperclassTag="ArrayBufferView"
H.cv.$nativeSuperclassTag="ArrayBufferView"
H.cL.$nativeSuperclassTag="ArrayBufferView"
H.cM.$nativeSuperclassTag="ArrayBufferView"
H.dx.$nativeSuperclassTag="ArrayBufferView"
W.cN.$nativeSuperclassTag="EventTarget"
W.cO.$nativeSuperclassTag="EventTarget"
W.cQ.$nativeSuperclassTag="EventTarget"
W.cR.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(L.mq,[])
else L.mq([])})})()
//# sourceMappingURL=main.dart.js.map
