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
a[c]=function(){a[c]=function(){H.n_(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jI(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jv:function jv(){},
lq:function(a,b,c,d){if(!!a.$ip)return new H.f0(a,b,[c,d])
return new H.bU(a,b,[c,d])},
js:function(){return new P.c3("No element")},
lk:function(){return new P.c3("Too many elements")},
lJ:function(a,b){var u=J.aT(a)
if(typeof u!=="number")return u.G()
H.dc(a,0,u-1,b)},
dc:function(a,b,c,d){if(c-b<=32)H.lI(a,b,c,d)
else H.lH(a,b,c,d)},
lI:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.be(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.X()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lH:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.W(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.W(a4+a5,2),f=g-j,e=g+j,d=J.be(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.X()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.N(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a0()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.X()
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
if(typeof l!=="number")return l.a0()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.X()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.X()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
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
H.dc(a3,a4,t-2,a6)
H.dc(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.N(a6.$2(d.h(a3,t),b),0);)++t
for(;J.N(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dc(a3,t,s,a6)}else H.dc(a3,t,s,a6)},
m:function m(a){this.a=a},
p:function p(){},
cU:function cU(){},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(a,b,c){this.a=a
this.b=b
this.$ti=c},
f0:function f0(a,b,c){this.a=a
this.b=b
this.$ti=c},
cW:function cW(a,b){this.a=null
this.b=a
this.c=b},
fB:function fB(a,b,c){this.a=a
this.b=b
this.$ti=c},
cc:function cc(a,b,c){this.a=a
this.b=b
this.$ti=c},
ir:function ir(a,b){this.a=a
this.b=b},
cL:function cL(){},
i7:function i7(){},
ds:function ds(){},
cs:function(a){var u,t=H.n0(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mK:function(a){return v.types[a]},
mR:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iy},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a1(a)
if(typeof u!=="string")throw H.c(H.aL(a))
return u},
c0:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c1:function(a){return H.lt(a)+H.kx(H.cr(a),0,null)},
lt:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$iby){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.b.aO(t,0)===36?C.b.ae(t,1):t)},
kb:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lC:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b4(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aL(s))}return H.kb(r)},
lB:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<0)throw H.c(H.aL(s))
if(s>65535)return H.lC(a)}return H.kb(a)},
jy:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b4(u,10))>>>0,56320|u&1023)}throw H.c(P.an(a,0,1114111,null,null))},
bu:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lA:function(a){var u=H.bu(a).getFullYear()+0
return u},
ly:function(a){var u=H.bu(a).getMonth()+1
return u},
lu:function(a){var u=H.bu(a).getDate()+0
return u},
lv:function(a){var u=H.bu(a).getHours()+0
return u},
lx:function(a){var u=H.bu(a).getMinutes()+0
return u},
lz:function(a){var u=H.bu(a).getSeconds()+0
return u},
lw:function(a){var u=H.bu(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.aL(a))},
f:function(a,b){if(a==null)J.aT(a)
throw H.c(H.bE(a,b))},
bE:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=J.aT(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d8(b,s)},
mD:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bv(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bv(a,c,!0,b,"end",u)
return new P.ad(!0,b,"end",null)},
aL:function(a){return new P.ad(!0,a,null,null)},
mz:function(a){if(typeof a!=="number")throw H.c(H.aL(a))
return a},
c:function(a){var u
if(a==null)a=new P.d4()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kJ})
u.name=""}else u.toString=H.kJ
return u},
kJ:function(){return J.a1(this.dartException)},
t:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aX(a))},
ar:function(a){var u,t,s,r,q,p
a=H.kH(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hX(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hY:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kl:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k7:function(a,b){return new H.h5(a,b==null?null:b.method)},
jw:function(a,b){var u=b==null,t=u?null:b.method
return new H.fr(a,t,u?null:b.receiver)},
av:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jg(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b4(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jw(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k7(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kM()
q=$.kN()
p=$.kO()
o=$.kP()
n=$.kS()
m=$.kT()
l=$.kR()
$.kQ()
k=$.kV()
j=$.kU()
i=r.a8(u)
if(i!=null)return f.$1(H.jw(u,i))
else{i=q.a8(u)
if(i!=null){i.method="call"
return f.$1(H.jw(u,i))}else{i=p.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=n.a8(u)
if(i==null){i=m.a8(u)
if(i==null){i=l.a8(u)
if(i==null){i=o.a8(u)
if(i==null){i=k.a8(u)
if(i==null){i=j.a8(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k7(u,i))}}return f.$1(new H.i6(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.de()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.de()
return a},
jL:function(a){var u
if(a==null)return new H.e8(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e8(a)},
mH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mQ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bD:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mQ)
a.$identity=u
return u},
ld:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hB().constructor.prototype):Object.create(new H.bI(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.B()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jX(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l9(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jX(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l9:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mK,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jW:H.jj
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
la:function(a,b,c,d){var u=H.jj
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jX:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lc(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.la(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.B()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bJ
return new Function(r+H.d(q==null?$.bJ=H.eI("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.B()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bJ
return new Function(r+H.d(q==null?$.bJ=H.eI("self"):q)+"."+H.d(u)+"("+o+");}")()},
lb:function(a,b,c,d){var u=H.jj,t=H.jW
switch(b?-1:a){case 0:throw H.c(H.lF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lc:function(a,b){var u,t,s,r,q,p,o,n=$.bJ
if(n==null)n=$.bJ=H.eI("self")
u=$.jV
if(u==null)u=$.jV=H.eI("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lb(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ah
if(typeof u!=="number")return u.B()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.B()
$.ah=u+1
return new Function(n+u+"}")()},
jI:function(a,b,c,d,e,f,g){return H.ld(a,b,c,d,!!e,!!f,g)},
jj:function(a){return a.a},
jW:function(a){return a.c},
eI:function(a){var u,t,s,r=new H.bI("self","target","receiver","name"),q=J.jt(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mV:function(a,b){throw H.c(H.l8(a,H.cs(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mV(a,b)},
mF:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l8:function(a,b){return new H.eJ("CastError: "+P.jq(a)+": type '"+H.d(H.mv(a))+"' is not a subtype of type '"+b+"'")},
mv:function(a){var u,t=J.Q(a)
if(!!t.$ibK){u=H.mF(t)
if(u!=null)return H.mW(u)
return"Closure"}return H.c1(a)},
n_:function(a){throw H.c(new P.eT(a))},
lF:function(a){return new H.hm(a)},
kC:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cr:function(a){if(a==null)return
return a.$ti},
ny:function(a,b,c){return H.jf(a["$a"+H.d(c)],H.cr(b))},
mJ:function(a,b,c,d){var u=H.jf(a["$a"+H.d(c)],H.cr(b))
return u==null?null:u[d]},
jK:function(a,b,c){var u=H.jf(a["$a"+H.d(b)],H.cr(a))
return u==null?null:u[c]},
au:function(a,b){var u=H.cr(a)
return u==null?null:u[b]},
mW:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.kx(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.m0(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.X)p+=" extends "+H.bd(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bd(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bd(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bd(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mG(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kx:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ao("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
jf:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nw:function(a,b,c){return a.apply(b,H.jf(J.Q(b)["$a"+H.d(c)],H.cr(b)))},
nx:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mS:function(a){var u,t,s,r,q=$.kD.$1(a),p=$.j5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kA.$2(a,q)
if(q!=null){p=$.j5[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jb[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jd(u)
$.j5[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jb[q]=u
return u}if(s==="-"){r=H.jd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kF(a,u)
if(s==="*")throw H.c(P.km(q))
if(v.leafTags[q]===true){r=H.jd(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kF(a,u)},
kF:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jN(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jd:function(a){return J.jN(a,!1,null,!!a.$iy)},
mT:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jd(u)
else return J.jN(u,c,null,null)},
mO:function(){if(!0===$.jM)return
$.jM=!0
H.mP()},
mP:function(){var u,t,s,r,q,p,o,n
$.j5=Object.create(null)
$.jb=Object.create(null)
H.mN()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kG.$1(q)
if(p!=null){o=H.mT(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mN:function(){var u,t,s,r,q,p,o=C.B()
o=H.bC(C.C,H.bC(C.D,H.bC(C.r,H.bC(C.r,H.bC(C.E,H.bC(C.F,H.bC(C.G(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kD=new H.j8(r)
$.kA=new H.j9(q)
$.kG=new H.ja(p)},
bC:function(a,b){return a(b)||b},
ln:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.fd("Illegal RegExp pattern ("+String(p)+")",a))},
kI:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mE:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kH:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jQ:function(a,b,c){var u=H.mY(a,b,c)
return u},
mY:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kH(b),'g'),H.mE(c))},
hX:function hX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h5:function h5(a,b){this.a=a
this.b=b},
fr:function fr(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
jg:function jg(a){this.a=a},
e8:function e8(a){this.a=a
this.b=null},
bK:function bK(){},
hJ:function hJ(){},
hB:function hB(){},
bI:function bI(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eJ:function eJ(a){this.a=a},
hm:function hm(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fq:function fq(a){this.a=a},
fu:function fu(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bs:function bs(a,b){this.a=a
this.$ti=b},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j8:function j8(a){this.a=a},
j9:function j9(a){this.a=a},
ja:function ja(a){this.a=a},
fp:function fp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
co:function(a){return a},
as:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bE(b,a))},
m_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mD(a,b,c))
return b},
bZ:function bZ(){},
d_:function d_(){},
bY:function bY(){},
d0:function d0(){},
fY:function fY(){},
fZ:function fZ(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(){},
d1:function d1(){},
h2:function h2(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
ci:function ci(){},
mG:function(a){return J.k1(a?Object.keys(a):[],null)},
n0:function(a){return v.mangledGlobalNames[a]},
mU:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jM==null){H.mO()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.km("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jR()]
if(r!=null)return r
r=H.mS(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.jR(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
ll:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.ji(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.an(a,0,4294967295,"length",null))
return J.k1(new Array(a),b)},
k1:function(a,b){return J.jt(H.b(a,[b]))},
jt:function(a){a.fixed$length=Array
return a},
lm:function(a,b){return J.cw(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cP.prototype
return J.cO.prototype}if(typeof a=="string")return J.b1.prototype
if(a==null)return J.cQ.prototype
if(typeof a=="boolean")return J.fo.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j7(a)},
be:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j7(a)},
j6:function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j7(a)},
mI:function(a){if(typeof a=="number")return J.bQ.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.by.prototype
return a},
jJ:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.by.prototype
return a},
ev:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j7(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).p(a,b)},
cv:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mR(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.be(a).h(a,b)},
l0:function(a,b,c){return J.ev(a).f3(a,b,c)},
l1:function(a,b,c,d){return J.ev(a).fk(a,b,c,d)},
cw:function(a,b){return J.mI(a).aI(a,b)},
jh:function(a,b){return J.be(a).w(a,b)},
ex:function(a,b){return J.j6(a).D(a,b)},
l2:function(a,b){return J.j6(a).I(a,b)},
l3:function(a){return J.ev(a).gfo(a)},
bH:function(a){return J.Q(a).gJ(a)},
aS:function(a){return J.j6(a).gO(a)},
aT:function(a){return J.be(a).gl(a)},
jT:function(a){return J.j6(a).h7(a)},
l4:function(a,b){return J.ev(a).hb(a,b)},
l5:function(a,b,c){return J.jJ(a).b_(a,b,c)},
l6:function(a){return J.jJ(a).hl(a)},
a1:function(a){return J.Q(a).i(a)},
a:function a(){},
fo:function fo(){},
cQ:function cQ(){},
cR:function cR(){},
h9:function h9(){},
by:function by(){},
b2:function b2(){},
b0:function b0(a){this.$ti=a},
ju:function ju(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bQ:function bQ(){},
cP:function cP(){},
cO:function cO(){},
b1:function b1(){}},P={
lO:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mw()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bD(new P.it(s),1)).observe(u,{childList:true})
return new P.is(s,u,t)}else if(self.setImmediate!=null)return P.mx()
return P.my()},
lP:function(a){self.scheduleImmediate(H.bD(new P.iu(a),0))},
lQ:function(a){self.setImmediate(H.bD(new P.iv(a),0))},
lR:function(a){P.jB(C.i,a)},
jB:function(a,b){var u=C.c.W(a.a,1000)
return P.lY(u<0?0:u,b)},
kk:function(a,b){var u=C.c.W(a.a,1000)
return P.lZ(u<0?0:u,b)},
lY:function(a,b){var u=new P.ee()
u.dO(a,b)
return u},
lZ:function(a,b){var u=new P.ee()
u.dP(a,b)
return u},
nu:function(a){return new P.bz(a,1)},
lU:function(){return C.W},
lV:function(a){return new P.bz(a,3)},
m3:function(a,b){return new P.iS(a,[b])},
mp:function(){var u,t
for(;u=$.bB,u!=null;){$.cq=null
t=u.b
$.bB=t
if(t==null)$.cp=null
u.a.$0()}},
mu:function(){$.jG=!0
try{P.mp()}finally{$.cq=null
$.jG=!1
if($.bB!=null)$.jS().$1(P.kB())}},
ms:function(a){var u=new P.dz(a)
if($.bB==null){$.bB=$.cp=u
if(!$.jG)$.jS().$1(P.kB())}else $.cp=$.cp.b=u},
mt:function(a){var u,t,s=$.bB
if(s==null){P.ms(a)
$.cq=$.cp
return}u=new P.dz(a)
t=$.cq
if(t==null){u.b=s
$.bB=$.cq=u}else{u.b=t.b
$.cq=t.b=u
if(u.b==null)$.cp=u}},
kj:function(a,b){var u=$.ag
if(u===C.e)return P.jB(a,b)
return P.jB(a,u.fp(b))},
lL:function(a,b){var u=$.ag
if(u===C.e)return P.kk(a,b)
return P.kk(a,u.cI(b,P.dl))},
ky:function(a,b,c,d,e){var u={}
u.a=d
P.mt(new P.j3(u,e))},
mq:function(a,b,c,d){var u,t=$.ag
if(t===c)return d.$0()
$.ag=c
u=t
try{t=d.$0()
return t}finally{$.ag=u}},
mr:function(a,b,c,d,e){var u,t=$.ag
if(t===c)return d.$1(e)
$.ag=c
u=t
try{t=d.$1(e)
return t}finally{$.ag=u}},
it:function it(a){this.a=a},
is:function is(a,b,c){this.a=a
this.b=b
this.c=c},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
ee:function ee(){this.c=0},
iW:function iW(a,b){this.a=a
this.b=b},
iV:function iV(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b){this.a=a
this.b=b},
bA:function bA(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iS:function iS(a,b){this.a=a
this.$ti=b},
dz:function dz(a){this.a=a
this.b=null},
dg:function dg(){},
hE:function hE(){},
dl:function dl(){},
iZ:function iZ(){},
j3:function j3(a,b){this.a=a
this.b=b},
iI:function iI(){},
iJ:function iJ(a,b){this.a=a
this.b=b},
iK:function iK(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function(a,b){return new H.I([a,b])},
lo:function(a){return H.mH(a,new H.I([null,null]))},
bS:function(a){return new P.iF([a])},
jF:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lX:function(a,b){var u=new P.dQ(a,b)
u.c=a.e
return u},
lj:function(a,b,c){var u,t
if(P.jH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.n])
$.a0.push(a)
try{P.m2(a,u)}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=P.kh(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jr:function(a,b,c){var u,t
if(P.jH(a))return b+"..."+c
u=new P.ao(b)
$.a0.push(a)
try{t=u
t.a=P.kh(t.a,a,", ")}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jH:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
m2:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.d(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.q()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.q();r=q,q=p){p=n.gC(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
k3:function(a,b){var u,t,s=P.bS(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
k4:function(a){var u,t={}
if(P.jH(a))return"{...}"
u=new P.ao("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.l2(a,new P.fA(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iF:function iF(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iG:function iG(a){this.a=a
this.c=this.b=null},
dQ:function dQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fm:function fm(){},
fw:function fw(){},
u:function u(){},
fz:function fz(){},
fA:function fA(a,b){this.a=a
this.b=b},
W:function W(){},
iM:function iM(){},
dR:function dR(){},
eL:function eL(){},
eO:function eO(){},
f2:function f2(){},
fk:function fk(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fj:function fj(a){this.a=a},
ia:function ia(){},
ib:function ib(){},
iX:function iX(a){this.b=0
this.c=a},
lh:function(a){if(a instanceof H.bK)return a.i(0)
return"Instance of '"+H.d(H.c1(a))+"'"},
lp:function(a,b,c){var u,t,s=J.ll(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jx:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aS(a);u.q();)t.push(u.gC(u))
if(b)return t
return J.jt(t)},
jA:function(a){var u,t=a.length,s=P.jz(0,null,t)
if(typeof s!=="number")return s.a0()
u=s<t
return H.lB(u?C.a.du(a,0,s):a)},
lD:function(a){return new H.fp(a,H.ln(a,!1,!0,!1,!1,!1))},
kh:function(a,b,c){var u=J.aS(b)
if(!u.q())return a
if(c.length===0){do a+=H.d(u.gC(u))
while(u.q())}else{a+=H.d(u.gC(u))
for(;u.q();)a=a+c+H.d(u.gC(u))}return a},
kw:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.l_().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.fv(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jy(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
le:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lf:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cF:function(a){if(a>=10)return""+a
return"0"+a},
jZ:function(a){return new P.aY(1000*a)},
jq:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lh(a)},
l7:function(a){return new P.ad(!1,null,null,a)},
ji:function(a,b,c){return new P.ad(!0,a,b,c)},
d8:function(a,b){return new P.bv(null,null,!0,a,b,"Value not in range")},
an:function(a,b,c,d,e){return new P.bv(b,c,!0,a,d,"Invalid value")},
jz:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.an(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.an(b,a,c,"end",null))
return b}return c},
kc:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.c(P.an(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.aT(b):e
return new P.fl(u,!0,a,c,"Index out of range")},
x:function(a){return new P.i8(a)},
km:function(a){return new P.i5(a)},
kg:function(a){return new P.c3(a)},
aX:function(a){return new P.eN(a)},
r:function(a){return new P.dI(a)},
jP:function(a){H.mU(a)},
at:function at(){},
a9:function a9(a,b){this.a=a
this.b=b},
M:function M(){},
aY:function aY(a){this.a=a},
eZ:function eZ(){},
f_:function f_(){},
bl:function bl(){},
d4:function d4(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fl:function fl(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i8:function i8(a){this.a=a},
i5:function i5(a){this.a=a},
c3:function c3(a){this.a=a},
eN:function eN(a){this.a=a},
h8:function h8(){},
de:function de(){},
eT:function eT(a){this.a=a},
dI:function dI(a){this.a=a},
fd:function fd(a,b){this.a=a
this.b=b},
ff:function ff(){},
w:function w(){},
i:function i(){},
fn:function fn(){},
af:function af(){},
bT:function bT(){},
b6:function b6(){},
a7:function a7(){},
X:function X(){},
n:function n(){},
ao:function ao(a){this.a=a},
mC:function(a){var u,t=J.Q(a)
if(!!t.$ib_){u=t.gcM(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ej(a.data,a.height,a.width)},
mB:function(a){if(a instanceof P.ej)return{data:a.a,height:a.b,width:a.c}
return a},
aM:function(a){var u,t,s,r,q
if(a==null)return
u=P.k2(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mA:function(a){var u={}
a.I(0,new P.j4(u))
return u},
ej:function ej(a,b,c){this.a=a
this.b=b
this.c=c},
j4:function j4(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(){},
fb:function fb(){},
iE:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lW:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iH:function iH(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
ft:function ft(){},
b7:function b7(){},
h6:function h6(){},
he:function he(){},
c2:function c2(){},
hF:function hF(){},
j:function j(){},
b9:function b9(){},
hW:function hW(){},
dO:function dO(){},
dP:function dP(){},
dZ:function dZ(){},
e_:function e_(){},
ea:function ea(){},
eb:function eb(){},
eh:function eh(){},
ei:function ei(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(a){this.a=a},
eF:function eF(){},
bg:function bg(){},
h7:function h7(){},
dA:function dA(){},
da:function da(){},
hA:function hA(){},
e6:function e6(){},
e7:function e7(){}},W={
jU:function(){var u=document.createElement("a")
return u},
jl:function(){var u=document.createElement("canvas")
return u},
lg:function(a,b,c){var u=document.body,t=(u&&C.n).a7(u,a,b,c)
t.toString
u=new H.cc(new W.Y(t),new W.f1(),[W.B])
return u.gax(u)},
jo:function(a){return"wheel"},
bM:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ev(a)
t=u.gdh(a)
if(typeof t==="string")r=u.gdh(a)}catch(s){H.av(s)}return r},
iD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ku:function(a,b,c,d){var u=W.iD(W.iD(W.iD(W.iD(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.kz(new W.iB(c),W.h)
if(u!=null&&!0)J.l1(a,b,u,!1)
return new W.iA(a,b,u,!1)},
kt:function(a){var u=W.jU(),t=window.location
u=new W.ce(new W.iL(u,t))
u.dJ(a)
return u},
lS:function(a,b,c,d){return!0},
lT:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kv:function(){var u=P.n,t=P.k3(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iT(t,P.bS(u),P.bS(u),P.bS(u),null)
t.dN(null,new H.fB(C.k,new W.iU(),[H.au(C.k,0),u]),s,null)
return t},
kz:function(a,b){var u=$.ag
if(u===C.e)return a
return u.cI(a,b)},
o:function o(){},
ey:function ey(){},
ez:function ez(){},
eA:function eA(){},
cz:function cz(){},
bh:function bh(){},
bj:function bj(){},
aU:function aU(){},
eP:function eP(){},
G:function G(){},
bL:function bL(){},
eQ:function eQ(){},
a8:function a8(){},
ai:function ai(){},
eR:function eR(){},
eS:function eS(){},
eV:function eV(){},
ae:function ae(){},
eW:function eW(){},
cH:function cH(){},
cI:function cI(){},
eX:function eX(){},
eY:function eY(){},
ix:function ix(a,b){this.a=a
this.b=b},
O:function O(){},
f1:function f1(){},
h:function h(){},
e:function e(){},
ay:function ay(){},
f7:function f7(){},
f8:function f8(){},
fc:function fc(){},
az:function az(){},
fi:function fi(){},
bO:function bO(){},
b_:function b_(){},
bP:function bP(){},
br:function br(){},
fx:function fx(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(a){this.a=a},
fU:function fU(){},
fV:function fV(a){this.a=a},
aB:function aB(){},
fW:function fW(){},
al:function al(){},
Y:function Y(a){this.a=a},
B:function B(){},
d2:function d2(){},
aE:function aE(){},
hb:function hb(){},
hk:function hk(){},
hl:function hl(a){this.a=a},
hn:function hn(){},
aF:function aF(){},
hx:function hx(){},
aG:function aG(){},
hy:function hy(){},
aH:function aH(){},
hC:function hC(){},
hD:function hD(a){this.a=a},
ap:function ap(){},
dh:function dh(){},
hG:function hG(){},
hH:function hH(){},
c4:function c4(){},
aI:function aI(){},
aq:function aq(){},
hK:function hK(){},
hL:function hL(){},
hQ:function hQ(){},
aJ:function aJ(){},
bw:function bw(){},
hU:function hU(){},
hV:function hV(){},
ba:function ba(){},
i9:function i9(){},
ip:function ip(){},
bc:function bc(){},
cd:function cd(){},
iy:function iy(){},
dC:function dC(){},
iC:function iC(){},
dW:function dW(){},
iP:function iP(){},
iQ:function iQ(){},
iw:function iw(){},
iz:function iz(a){this.a=a},
iA:function iA(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iB:function iB(a){this.a=a},
ce:function ce(a){this.a=a},
J:function J(){},
d3:function d3(a){this.a=a},
h4:function h4(a){this.a=a},
h3:function h3(a,b,c){this.a=a
this.b=b
this.c=c},
e3:function e3(){},
iN:function iN(){},
iO:function iO(){},
iT:function iT(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iU:function iU(){},
iR:function iR(){},
cM:function cM(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aD:function aD(){},
iL:function iL(a,b){this.a=a
this.b=b},
ek:function ek(a){this.a=a},
iY:function iY(a){this.a=a},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dJ:function dJ(){},
dK:function dK(){},
dM:function dM(){},
dN:function dN(){},
dS:function dS(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
cj:function cj(){},
ck:function ck(){},
e4:function e4(){},
e5:function e5(){},
e9:function e9(){},
ec:function ec(){},
ed:function ed(){},
cl:function cl(){},
cm:function cm(){},
ef:function ef(){},
eg:function eg(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){}},K={
L:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aO(a,0)
t=C.b.aO(b,0)
if(u>t){s=t
t=u
u=s}return new K.hf(u,t)},
q:function(a){var u=new K.ho()
u.dF(a)
return u},
aw:function aw(){},
cN:function cN(){},
b5:function b5(){},
a_:function a_(){this.a=null},
hf:function hf(a,b){this.a=a
this.b=b},
ho:function ho(){this.a=null}},L={
hS:function(){var u=new L.hR(),t=P.n
u.a=new H.I([t,L.df])
u.b=new H.I([t,L.dn])
u.c=P.bS(t)
return u},
df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dm:function dm(a,b,c){this.a=a
this.b=b
this.c=c},
dn:function dn(a){this.b=a
this.c=null},
hR:function hR(){var _=this
_.d=_.c=_.b=_.a=null},
dq:function dq(a){this.b=a
this.a=this.c=null}},O={
jm:function(a){var u=new O.aV([a])
u.bi(a)
return u},
aV:function aV(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bW:function bW(){this.b=this.a=null},
cX:function cX(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
fD:function fD(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bV:function bV(){},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aj:function aj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fG:function fG(){var _=this
_.e=_.d=_.c=_.b=null},
fH:function fH(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fI:function fI(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
di:function di(){}},E={
kr:function(){if(J.jh(window.navigator.vendor,"Google"))return C.z
if(J.jh(window.navigator.userAgent,"Firefox"))return C.o
var u=window.navigator.appVersion
if(J.be(u).w(u,"Trident")||C.b.w(u,"Edge"))return C.p
if(J.jh(window.navigator.appName,"Microsoft"))return C.p
return C.A},
ks:function(){var u=window.navigator.appVersion
if(J.be(u).w(u,"Win"))return C.S
if(C.b.w(u,"Mac"))return C.u
if(C.b.w(u,"Linux"))return C.T
return C.U},
lE:function(a,b){var u=new E.hg(a)
u.dE(a,b)
return u},
lK:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibj)return E.ki(a,!0,!0,!0,!1)
u=W.jl()
t=u.style
t.width="100%"
t.height="100%"
s.gcK(a).n(0,u)
return E.ki(u,!0,!0,!0,!1)},
ki:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dk(),o=C.f.c3(a,"webgl2",P.lo(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.t(P.r("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.lE(o,a)
u=new T.hN(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dt(a)
t=new X.fs()
t.c=new X.aa(!1,!1,!1)
t.d=P.bS(P.w)
u.b=t
t=new X.fX(u)
t.f=0
t.r=V.b8()
t.x=V.b8()
t.ch=t.Q=1
u.c=t
t=new X.fy(u)
t.r=0
t.x=V.b8()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hT(u)
t.f=V.b8()
t.r=V.b8()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dg,P.X]])
t=$.f3
u.Q=(t==null?$.f3=new E.dH(E.kr(),E.ks()):t).a===C.o?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.T(r,"contextmenu",u.geq(),!1))
u.z.push(W.T(a,"focus",u.gex(),!1))
u.z.push(W.T(a,"blur",u.gek(),!1))
u.z.push(W.T(r,"keyup",u.geB(),!1))
u.z.push(W.T(r,"keydown",u.gez(),!1))
u.z.push(W.T(a,"mousedown",u.geF(),!1))
u.z.push(W.T(a,"mouseup",u.geJ(),!1))
u.z.push(W.T(a,q,u.geH(),!1))
s=u.z
W.jo(a)
W.jo(a)
s.push(W.T(a,W.jo(a),u.geL(),!1))
u.z.push(W.T(r,q,u.ges(),!1))
u.z.push(W.T(r,"mouseup",u.gev(),!1))
u.z.push(W.T(r,"pointerlockchange",u.geN(),!1))
u.z.push(W.T(a,"touchstart",u.gf_(),!1))
u.z.push(W.T(a,"touchend",u.geW(),!1))
u.z.push(W.T(a,"touchmove",u.geY(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a9(Date.now(),!1)
p.db=0
p.cs()
return p},
eH:function eH(){},
aZ:function aZ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bi:function bi(a){this.b=a},
bt:function bt(a){this.b=a},
dH:function dH(a,b){this.a=a
this.b=b},
hg:function hg(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hh:function hh(a){this.a=a},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
dk:function dk(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hP:function hP(a){this.a=a}},Z={
jE:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.co(c)),35044)
a.bindBuffer(b,null)
return new Z.dy(b,u)},
ac:function(a){return new Z.aK(a)},
dy:function dy(a,b){this.a=a
this.b=b},
cA:function cA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
iq:function iq(a){this.a=a},
cB:function cB(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bo:function bo(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a){this.a=a}},D={
H:function(){var u=new D.bm()
u.d=0
return u},
eK:function eK(){},
bm:function bm(){var _=this
_.d=_.c=_.b=_.a=null},
f5:function f5(a){this.a=a},
f6:function f6(a){this.a=a},
S:function S(){this.b=null},
bp:function bp(){this.b=null},
bq:function bq(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eG:function eG(){},
bk:function bk(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Z:function Z(){},
cT:function cT(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hc:function hc(){},
hz:function hz(){}},X={cC:function cC(a,b){this.a=a
this.b=b},cS:function cS(a,b){this.a=a
this.b=b},fs:function fs(){var _=this
_.d=_.c=_.b=_.a=null},cV:function cV(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fy:function fy(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},aC:function aC(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fX:function fX(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bX:function bX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hd:function hd(){},dp:function dp(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hT:function hT(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dt:function dt(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
li:function(a){var u=new X.fe(),t=new V.aW(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ke
if(t==null){t=V.kd(0,0,1,1)
$.ke=t}u.r=t
return u},
jk:function jk(){},
fe:function fe(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d5:function d5(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(){}},V={
n1:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dm(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.b.a9("null",c)
return C.b.a9(C.d.dj(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bF:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a9(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jO:function(a){return C.d.hi(Math.pow(2,C.N.bS(Math.log(H.mz(a))/Math.log(2))))},
cZ:function(){var u=$.k6
return u==null?$.k6=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k5:function(a,b,c){var u=c.v(0,Math.sqrt(c.H(c))),t=b.aT(u),s=t.v(0,Math.sqrt(t.H(t))),r=u.aT(s),q=new V.C(a.a,a.b,a.c),p=s.P(0).H(q),o=r.P(0).H(q),n=u.P(0).H(q)
return V.ak(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.k9
return u==null?$.k9=new V.ab(0,0):u},
ka:function(){var u=$.am
return u==null?$.am=new V.a4(0,0,0):u},
kd:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d9(a,b,c,d)},
dx:function(){var u=$.kp
return u==null?$.kp=new V.C(0,0,0):u},
lM:function(){var u=$.ic
return u==null?$.ic=new V.C(-1,0,0):u},
jD:function(){var u=$.id
return u==null?$.id=new V.C(0,1,0):u},
lN:function(){var u=$.ie
return u==null?$.ie=new V.C(0,0,1):u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
cY:function cY(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aA:function aA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
mX:function(a){P.lL(C.K,new V.je(a))},
lG:function(a){var u=new V.ht()
u.dH(a,!0)
return u},
cD:function cD(){},
je:function je(a){this.a=a},
eU:function eU(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fg:function fg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fh:function fh(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ha:function ha(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ht:function ht(){this.b=this.a=null},
hv:function hv(a){this.a=a},
hu:function hu(a){this.a=a},
hw:function hw(a){this.a=a}},U={
jn:function(){var u=new U.eM()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jY:function(a){var u=new U.cE()
u.a=a
return u},
eM:function eM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cE:function cE(){this.b=this.a=null},
bN:function bN(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
du:function du(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cJ:function cJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lr:function(a,b){var u=a.ap,t=new A.fC(b,u)
t.dG(b,u)
t.dD(a,b)
return t},
ls:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+a9.gad(a9)+b0.gad(b0)+b1.gad(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.l)(b2),++t)c+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.l)(b3),++t)c+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.l)(b4),++t)c+="_"+H.d(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.l)(b5),++t)c+="_"+H.d(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(q=b4.length,t=0;t<q;++t,r=!0)s+=b4[t].b
for(p=b5.length,t=0;t<p;++t,r=!0)s+=b5[t].b
if(!a9.a)p=a9.c
else p=!0
if(!p)if(!b0.a){p=b0.c
o=p}else o=!0
else o=!0
n=u>0
if(!a4.a)u=a4.c
else u=!0
if(!u){if(!a5.a)u=a5.c
else u=!0
if(!u){if(!a6.a)u=a6.c
else u=!0
if(!u)if(!a7.a)u=a7.c
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a7.a
if(u)p=a7.c
else p=!0
l=p||n||q>0||o
if(!a5.a)q=a5.c
else q=!0
if(!q){if(!a6.a)q=a6.c
else q=!0
if(!q){if(u)u=a7.c
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a8.a)u=a8.c
else u=!0
j=u||o}else j=!0
if(!a8.a)i=a8.c
else i=!0
h=a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c
g=a2>0
f=j||i||l||!1
e=n&&k
b=b&&h
d=$.aQ()
if(j){u=$.aP()
d=new Z.aK(d.a|u.a)}if(i){u=$.aO()
d=new Z.aK(d.a|u.a)}if(h){u=$.aR()
d=new Z.aK(d.a|u.a)}if(g){u=$.aN()
d=new Z.aK(d.a|u.a)}return new A.fF(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
j1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
j2:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.j1(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ew(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
m8:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j1(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.c){t=u+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
m4:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j2(b,t,"ambient")
b.a+="\n"},
m6:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"diffuse")
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
m9:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j2(b,t,"invDiffuse")
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
mf:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j2(b,t,"specular")
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
mb:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
if(a.f.c){u+="uniform samplerCube bumpTxt;\n"
b.a=u
u+="\n"
b.a=u}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f
s=t.a
if(!s)t=t.c
else t=!0
if(!t||s)u=b.a=u+"   return normalize(normalVec);\n"
else{u+="   vec3 color = textureCube(bumpTxt, txtCube).rgb;\n"
b.a=u
u+="   vec3 n = normalize(normalVec);\n"
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
md:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j1(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
me:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j1(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
m5:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.ew(t)
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
if(typeof u!=="number")return u.aa()
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
c.a=r+"\n"}r=[P.n]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.k(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.b([],r)
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)q.push("ambientColor")
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
if(!u.a)u=u.c
else u=!0
if(u)p.push("diffuse(norm, normDir)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.a.k(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.k(q," + ")+");\n"
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
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.ew(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.aa()
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
r=[P.n]
o=H.b([],r)
n=a.b
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)m.push("specular(norm, lit.viewDir)")
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
c.a+="      highLight = intensity*("+C.a.k(m," + ")+");\n"}else c.a+="   highLight = "+C.a.k(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.k(o," + ")+");\n"
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
mc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.ew(t)
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
if(typeof u!=="number")return u.aa()
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
c.a=r+"\n"}r=[P.n]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.k(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.b([],r)
o=a.b
if(!o.a)o=o.c
else o=!0
if(o)l.push("ambientColor")
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
if(!r.a)r=r.c
else r=!0
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.a.k(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.k(l," + ")+");\n"
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
mg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.ew(t)
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
if(typeof u!=="number")return u.aa()
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
u+="   if(zScale < 0.0) return vec3(0.0, 0.0, 0.0);\n"
c.a=u
if(o){u=$.f3
if(u==null)u=$.f3=new E.dH(E.kr(),E.ks())
r=c.a
if(u.b===C.u){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
c.a=u
u=c.a=u+"   float angle = atan(crossMag, zScale);\n"}else u=c.a=r+"   float angle = acos(zScale);\n"
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
c.a=u+"\n"}u=[P.n]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.k(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.b([],u)
r=a.b
if(!r.a)r=r.c
else r=!0
if(r)j.push("ambientColor")
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
if(!u.a)u=u.c
else u=!0
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.a.k(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.k(j," + ")+");\n"
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
ma:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.n])
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mh:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.ao("")
i.a="precision mediump float;\n"
i.a=k
u=a.k4
if(u){i.a=j
t=j}else t=k
if(a.r1){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
i.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k2){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k3?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
i.a=t}if(a.dy)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.m8(a,i)
A.m4(a,i)
A.m6(a,i)
A.m9(a,i)
A.mf(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.md(a,i)
A.me(a,i)}A.mb(a,i)
r=i.a+="// === Alpha ===\n"
r=i.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
i.a=r}q=q.c
r=(q?i.a=r+"uniform samplerCube alphaTxt;\n":r)+"float alphaValue()\n"
i.a=r
r=i.a=r+"{\n"
if(!p)o=q
else o=!0
if(!o)r=i.a=r+"   return 1.0;\n"
else if(q){if(p){r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
i.a=r}else{r+="   float a = textureCube(alphaTxt, txtCube).a;\n"
i.a=r}r+="   if (a <= 0.000001) discard;\n"
i.a=r
r+="   return a;\n"
i.a=r}else if(p){r+="   return alpha;\n"
i.a=r}r+="}\n"
i.a=r
i.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.l)(q),++n)A.m5(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.l)(q),++n)A.m7(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.l)(q),++n)A.mc(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.l)(q),++n)A.mg(a,q[n],i)
A.ma(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.n])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setAmbientColor();\n"
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setDiffuseColor();\n"
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.l)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.l)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.l)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.l)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.f(r,0)
i.a+=l+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.a.k(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mi:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b7+"];\n"
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
mk:function(a,b){var u
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
mj:function(a,b){var u
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
mm:function(a,b){var u,t
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
mn:function(a,b){var u,t
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
ml:function(a,b){var u
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
mo:function(a,b){var u
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
ew:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.ae(a,1)},
jC:function(a,b,c,d,e){var u=new A.hZ(a,c,e)
u.f=d
P.lp(d,0,P.w)
return u},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
eB:function eB(a){this.a=a},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b){var _=this
_.cP=_.hw=_.b8=_.ap=_.b7=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hE=_.hD=_.hC=_.bR=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.d0=_.hB=_.d_=_.cZ=_.hA=_.cY=_.cX=_.cW=_.hz=_.cV=_.cU=_.cT=_.hy=_.cS=_.cR=_.hx=_.cQ=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.b=b},
cG:function cG(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
fF:function fF(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b7=b3
_.ap=b4
_.b8=b5},
c6:function c6(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c7:function c7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c9:function c9(a,b,c,d,e,f,g,h,i,j){var _=this
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
ca:function ca(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
db:function db(){},
dr:function dr(){},
i3:function i3(a){this.a=a},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
i2:function i2(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
c5:function c5(a,b,c){this.a=a
this.c=b
this.d=c},
i4:function i4(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j0:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cn:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.C(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.C(u+a3,t+a1,s+a2)
q=new V.C(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.C(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j0(i)
l=F.j0(h)
k=F.mZ(d,a0,new F.j_(j,F.j0(g),F.j0(f),l,m,c),b)
if(k!=null)a.fR(k)},
mZ:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.kf()
t=H.b([],[F.cb])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cC(new V.aW(p,0,0,1),new V.ab(r,1))
c.$3(o,r,0)
t.push(o.bI(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
o=k.cC(new V.aW(j,i,h,1),new V.ab(r,m))
c.$3(o,r,n)
t.push(o.bI(d))}}u.d.fl(a+1,b+1,t)
return u},
cK:function(a,b,c){var u=new F.bn(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a_()
return u},
kf:function(){var u=new F.hp(),t=new F.ig(u)
t.b=!1
t.c=H.b([],[F.cb])
u.a=t
t=new F.hs(u)
t.b=H.b([],[F.c_])
u.b=t
t=new F.hr(u)
t.b=H.b([],[F.bR])
u.c=t
t=new F.hq(u)
t.b=H.b([],[F.bn])
u.d=t
u.e=null
return u},
kq:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.cb(),r=new F.il()
r.b=H.b([],[F.c_])
s.b=r
r=new F.ik()
u=[F.bR]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ih()
u=[F.bn]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kW()
s.e=0
r=$.aQ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aP().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.bf().a)!==0?f:t
s.z=(u&$.aR().a)!==0?g:t
s.Q=(u&$.kX().a)!==0?c:t
s.ch=(u&$.bG().a)!==0?i:0
s.cx=(u&$.aN().a)!==0?a:t
return s},
j_:function j_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bn:function bn(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bR:function bR(){this.b=this.a=null},
c_:function c_(){this.a=null},
hp:function hp(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hq:function hq(a){this.a=a
this.b=null},
hr:function hr(a){this.a=a
this.b=null},
hs:function hs(a){this.a=a
this.b=null},
cb:function cb(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
io:function io(a){this.a=a},
im:function im(a){this.a=a},
ig:function ig(a){this.a=a
this.c=this.b=null},
ih:function ih(){this.d=this.c=this.b=null},
ii:function ii(a,b){this.a=a
this.b=b},
ij:function ij(a,b){this.a=a
this.b=b},
ik:function ik(){this.c=this.b=null},
il:function il(){this.b=null}},T={dj:function dj(){},hM:function hM(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hN:function hN(a){var _=this
_.a=a
_.e=_.d=_.c=null},hO:function hO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
kE:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=34067,a2=V.lG("Test 010"),a3=W.jl()
a3.className="pageLargeCanvas"
a3.id=b
a2.a.appendChild(a3)
u=[P.n]
a2.cD(H.b(["A test of the Material Lighting shader with solid color and ","a directional light= with a cube texture bump map."],u))
a2.cD(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(b)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lK(t,!0,!0,!0,!1)
r=new E.aZ()
r.a=""
r.b=!0
u=E.aZ
q=O.jm(u)
r.y=q
q.aZ(r.gfS(),r.gfV())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc6(0,a)
r.saV(a)
p=F.kf()
F.cn(p,a,a,1,1,1,0,0,1)
F.cn(p,a,a,1,1,0,1,0,3)
F.cn(p,a,a,1,1,0,0,1,2)
F.cn(p,a,a,1,1,-1,0,0,0)
F.cn(p,a,a,1,1,0,-1,0,0)
F.cn(p,a,a,1,1,0,0,-1,3)
p.aF()
r.sc6(0,p)
q=new U.bN()
q.bi(U.a3)
q.aZ(q.gec(),q.geS())
q.e=null
q.f=V.cZ()
q.r=0
o=s.x
n=new U.dv()
m=U.jn()
m.sc2(0,!0)
m.sbV(6.283185307179586)
m.sbX(0)
m.sa1(0,0)
m.sbW(100)
m.sR(0)
m.sbJ(0.5)
n.b=m
l=n.gaC()
m.gt().n(0,l)
m=U.jn()
m.sc2(0,!0)
m.sbV(6.283185307179586)
m.sbX(0)
m.sa1(0,0)
m.sbW(100)
m.sR(0)
m.sbJ(0.5)
n.c=m
m.gt().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.aa(!1,!1,!1)
j=n.d
n.d=k
m=new D.z(a0,j,k)
m.b=!0
n.N(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.z("invertX",m,!1)
m.b=!0
n.N(m)}m=n.r
if(m!==!0){n.r=!0
m=new D.z("invertY",m,!0)
m.b=!0
n.N(m)}n.aS(o)
q.n(0,n)
o=s.x
n=new U.du()
m=U.jn()
m.sc2(0,!0)
m.sbV(6.283185307179586)
m.sbX(0)
m.sa1(0,0)
m.sbW(100)
m.sR(0)
m.sbJ(0.2)
n.b=m
m.gt().n(0,n.gaC())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.aa(!0,!1,!1)
j=n.c
n.c=k
m=new D.z(a0,j,k)
m.b=!0
n.N(m)
n.aS(o)
q.n(0,n)
o=s.x
n=new U.dw()
n.c=0.01
n.e=n.d=0
k=new X.aa(!1,!1,!1)
n.b=k
m=new D.z(a0,a,k)
m.b=!0
n.N(m)
n.aS(o)
q.n(0,n)
r.saV(q)
i=new O.cX()
q=O.jm(V.aA)
i.e=q
q.aZ(i.geg(),i.gei())
q=new O.aj(i,"emission")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
i.f=q
q=new O.aj(i,"ambient")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
i.r=q
q=new O.aj(i,"diffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
i.x=q
q=new O.aj(i,"invDiffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
i.y=q
q=new O.fI(i,"specular")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
q.ch=100
i.z=q
q=new O.fE(i,"bump")
q.c=new A.U(!1,!1,!1)
i.Q=q
i.ch=null
q=new O.aj(i,"reflect")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
i.cx=q
q=new O.fH(i,"refract")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
q.ch=1
i.cy=q
q=new O.fD(i,"alpha")
q.c=new A.U(!1,!1,!1)
q.f=1
i.db=q
q=new D.cT()
q.bi(D.Z)
q.e=H.b([],[D.eG])
q.f=H.b([],[D.bk])
q.r=H.b([],[D.hc])
q.x=H.b([],[D.hz])
q.z=q.y=null
q.c5(q.gee(),q.geQ(),q.geU())
i.dx=q
o=new O.fG()
o.b=new V.aW(0,0,0,0)
o.c=1
o.d=10
o.e=!1
i.dy=o
o=q.y
q=o==null?q.y=D.H():o
q.n(0,i.gf5())
q=i.dx
o=q.z
q=o==null?q.z=D.H():o
q.n(0,i.gb1())
i.fr=null
q=i.dx
h=V.jD()
o=U.jY(V.k5(V.ka(),h,new V.C(1,1,-3)))
g=new V.R(1,1,1)
n=new D.bk()
n.c=new V.R(1,1,1)
n.a=V.lN()
n.d=V.jD()
n.e=V.lM()
j=n.b
n.b=o
o.gt().n(0,n.gdK())
o=new D.z("mover",j,n.b)
o.b=!0
n.ak(o)
if(!n.c.p(0,g)){j=n.c
n.c=g
o=new D.z("color",j,g)
o.b=!0
n.ak(o)}q.n(0,n)
q=i.r
q.saH(0,new V.R(0,0,1))
q=i.x
q.saH(0,new V.R(0,1,0))
q=i.z
q.saH(0,new V.R(1,0,0))
q=i.z
q.bA(new A.U(!0,!1,q.c.c))
q.cu(10)
q=i.Q
o=s.f
n=o.a
f=n.createTexture()
n.bindTexture(a1,f)
n.texParameteri(a1,10242,10497)
n.texParameteri(a1,10243,10497)
n.texParameteri(a1,10241,9729)
n.texParameteri(a1,10240,9729)
n.bindTexture(a1,a)
e=new T.hM()
e.a=0
e.b=f
e.c=!1
e.d=0
o.aB(e,f,"../resources/diceBumpMap/posx.png",34069,!1,!1)
o.aB(e,f,"../resources/diceBumpMap/negx.png",34070,!1,!1)
o.aB(e,f,"../resources/diceBumpMap/posy.png",34071,!1,!1)
o.aB(e,f,"../resources/diceBumpMap/negy.png",34072,!1,!1)
o.aB(e,f,"../resources/diceBumpMap/posz.png",34073,!1,!1)
o.aB(e,f,"../resources/diceBumpMap/negz.png",34074,!1,!1)
o=q.c
if(!o.c)q.bA(new A.U(o.a,!1,!0))
o=q.e
if(o!==e){if(o!=null)o.gt().S(0,q.gb1())
j=q.e
q.e=e
e.gt().n(0,q.gb1())
o=new D.z(q.b+".textureCube",j,q.e)
o.b=!0
q.a.T(o)}q=new M.cJ()
q.a=!0
u=O.jm(u)
q.e=u
u.aZ(q.gem(),q.geo())
q.y=q.x=q.r=q.f=null
d=X.li(a)
c=new X.d5()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saV(a)
u=c.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){c.c=1.0471975511965976
u=new D.z("fov",u,1.0471975511965976)
u.b=!0
c.az(u)}u=c.d
if(!(Math.abs(u-0.1)<$.A().a)){c.d=0.1
u=new D.z("near",u,0.1)
u.b=!0
c.az(u)}u=c.e
if(!(Math.abs(u-2000)<$.A().a)){c.e=2000
u=new D.z("far",u,2000)
u.b=!0
c.az(u)}u=q.b
if(u!==c){if(u!=null)u.gt().S(0,q.gaf())
j=q.b
q.b=c
c.gt().n(0,q.gaf())
u=new D.z("camera",j,q.b)
u.b=!0
q.al(u)}u=q.c
if(u!==d){if(u!=null)u.gt().S(0,q.gaf())
j=q.c
q.c=d
d.gt().n(0,q.gaf())
u=new D.z("target",j,q.c)
u.b=!0
q.al(u)}q.sdi(a)
q.sdi(i)
q.e.n(0,r)
q.b.saV(U.jY(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==q){if(u!=null)u.gt().S(0,s.gcb())
s.d=q
q.gt().n(0,s.gcb())
s.cc()}u=s.Q
if(u==null)u=s.Q=D.H()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.S]}]):q
u.push(new B.jc(a2,i))
V.mX(s)},
jc:function jc(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jv.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gJ:function(a){return H.c0(a)},
i:function(a){return"Instance of '"+H.d(H.c1(a))+"'"}}
J.fo.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iat:1}
J.cQ.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.cR.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.h9.prototype={}
J.by.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.kL()]
if(u==null)return this.dA(a)
return"JavaScript function for "+H.d(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b0.prototype={
h8:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.d8(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
a6:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aX(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fP:function(a){return this.k(a,"")},
fL:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aX(a))}throw H.c(H.js())},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
du:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.an(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.an(c,b,u,"end",null))
if(b===c)return H.b([],[H.au(a,0)])
return H.b(a.slice(b,c),[H.au(a,0)])},
gba:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.js())},
cE:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aX(a))}return!1},
aN:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.lJ(a,b==null?J.m1():b)},
dt:function(a){return this.aN(a,null)},
w:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.jr(a,"[","]")},
gO:function(a){return new J.a2(a,a.length)},
gJ:function(a){return H.c0(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.ji(b,u,null))
if(b<0)throw H.c(P.an(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bE(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bE(a,b))
a[b]=c},
$ip:1,
$ii:1}
J.ju.prototype={}
J.a2.prototype={
gC:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bQ.prototype={
aI:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aL(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb9(b)
if(this.gb9(a)===u)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
hi:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
bS:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
ac:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dj:function(a,b){var u
if(b>20)throw H.c(P.an(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dm:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dC:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cv(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cv(a,b)},
cv:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
b4:function(a,b){var u
if(a>0)u=this.fd(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fd:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia7:1}
J.cP.prototype={$iw:1}
J.cO.prototype={}
J.b1.prototype={
bH:function(a,b){if(b<0)throw H.c(H.bE(a,b))
if(b>=a.length)H.t(H.bE(a,b))
return a.charCodeAt(b)},
aO:function(a,b){if(b>=a.length)throw H.c(H.bE(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.ji(b,null,null))
return a+b},
bg:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b_:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d8(b,null))
if(b>c)throw H.c(P.d8(b,null))
if(c>a.length)throw H.c(P.d8(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.b_(a,b,null)},
hl:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a9:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
ft:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.an(c,0,u,null,null))
return H.kI(a,b,c)},
w:function(a,b){return this.ft(a,b,0)},
aI:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aL(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gJ:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$in:1}
H.m.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bH(this.a,b)},
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.p.prototype={}
H.cU.prototype={
gO:function(a){return new H.b4(this,this.gl(this))},
bf:function(a,b){return this.dz(0,b)}}
H.b4.prototype={
gC:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.be(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aX(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.bU.prototype={
gO:function(a){return new H.cW(J.aS(this.a),this.b)},
gl:function(a){return J.aT(this.a)},
D:function(a,b){return this.b.$1(J.ex(this.a,b))},
$ai:function(a,b){return[b]}}
H.f0.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cW.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.fB.prototype={
gl:function(a){return J.aT(this.a)},
D:function(a,b){return this.b.$1(J.ex(this.a,b))},
$ap:function(a,b){return[b]},
$acU:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cc.prototype={
gO:function(a){return new H.ir(J.aS(this.a),this.b)}}
H.ir.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.cL.prototype={}
H.i7.prototype={
m:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.ds.prototype={}
H.hX.prototype={
a8:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h5.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fr.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.i6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jg.prototype={
$1:function(a){if(!!J.Q(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.e8.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bK.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cs(t==null?"unknown":t)+"'"},
ghp:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hJ.prototype={}
H.hB.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.bI.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bI))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.c0(this.a)
else u=typeof t!=="object"?J.bH(t):H.c0(t)
return(u^H.c0(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.c1(u))+"'")}}
H.eJ.prototype={
i:function(a){return this.a}}
H.hm.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
gZ:function(a){return new H.bs(this,[H.au(this,0)])},
gho:function(a){var u=this,t=H.au(u,0)
return H.lq(new H.bs(u,[t]),new H.fq(u),t,H.au(u,1))},
fu:function(a,b){var u=this.b
if(u==null)return!1
return this.dZ(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b2(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b2(r,b)
s=t==null?null:t.b
return s}else return q.fO(b)},
fO:function(a){var u,t,s=this.d
if(s==null)return
u=this.co(s,J.bH(a)&0x3ffffff)
t=this.d1(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cf(u==null?o.b=o.bx():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cf(t==null?o.c=o.bx():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bx()
r=J.bH(b)&0x3ffffff
q=o.co(s,r)
if(q==null)o.bB(s,r,[o.by(b,c)])
else{p=o.d1(q,b)
if(p>=0)q[p].b=c
else q.push(o.by(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aX(u))
t=t.c}},
cf:function(a,b,c){var u=this.b2(a,b)
if(u==null)this.bB(a,b,this.by(b,c))
else u.b=c},
e9:function(){this.r=this.r+1&67108863},
by:function(a,b){var u,t=this,s=new H.fu(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.e9()
return s},
d1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.k4(this)},
b2:function(a,b){return a[b]},
co:function(a,b){return a[b]},
bB:function(a,b,c){a[b]=c},
e2:function(a,b){delete a[b]},
dZ:function(a,b){return this.b2(a,b)!=null},
bx:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bB(t,u,t)
this.e2(t,u)
return t}}
H.fq.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.au(u,1),args:[H.au(u,0)]}}}
H.fu.prototype={}
H.bs.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fv(u,u.r)
t.c=u.e
return t}}
H.fv.prototype={
gC:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j8.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j9.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ja.prototype={
$1:function(a){return this.a(a)}}
H.fp.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bZ.prototype={}
H.d_.prototype={
gl:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.bY.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]},
m:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.M]},
$au:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]}}
H.d0.prototype={
m:function(a,b,c){H.as(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fY.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.fZ.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h_.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h0.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h1.prototype={
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.d1.prototype={
gl:function(a){return a.length},
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.h2.prototype={
gl:function(a){return a.length},
h:function(a,b){H.as(b,a,a.length)
return a[b]}}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
H.ci.prototype={}
P.it.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.is.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iu.prototype={
$0:function(){this.a.$0()}}
P.iv.prototype={
$0:function(){this.a.$0()}}
P.ee.prototype={
dO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bD(new P.iW(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
dP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bD(new P.iV(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idl:1}
P.iW.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iV.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dC(u,q)}s.c=r
t.d.$1(s)}}
P.bz.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bA.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bz){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aS(u)
if(!!r.$ibA){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iS.prototype={
gO:function(a){return new P.bA(this.a())}}
P.dz.prototype={}
P.dg.prototype={}
P.hE.prototype={}
P.dl.prototype={}
P.iZ.prototype={}
P.j3.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d4():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iI.prototype={
hd:function(a){var u,t,s,r=null
try{if(C.e===$.ag){a.$0()
return}P.mq(r,r,this,a)}catch(s){u=H.av(s)
t=H.jL(s)
P.ky(r,r,this,u,t)}},
he:function(a,b){var u,t,s,r=null
try{if(C.e===$.ag){a.$1(b)
return}P.mr(r,r,this,a,b)}catch(s){u=H.av(s)
t=H.jL(s)
P.ky(r,r,this,u,t)}},
hf:function(a,b){return this.he(a,b,null)},
fp:function(a){return new P.iJ(this,a)},
cI:function(a,b){return new P.iK(this,a,b)}}
P.iJ.prototype={
$0:function(){return this.a.hd(this.b)}}
P.iK.prototype={
$1:function(a){return this.a.hf(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iF.prototype={
gO:function(a){var u=new P.dQ(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
w:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dX(b)
return t}},
dX:function(a){var u=this.d
if(u==null)return!1
return this.bo(this.cn(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cg(u==null?s.b=P.jF():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cg(t==null?s.c=P.jF():t,b)}else return s.dR(0,b)},
dR:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jF()
u=s.cj(b)
t=r[u]
if(t==null)r[u]=[s.bl(b)]
else{if(s.bo(t,b)>=0)return!1
t.push(s.bl(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f2(this.c,b)
else return this.f1(0,b)},
f1:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cn(r,b)
t=s.bo(u,b)
if(t<0)return!1
s.cz(u.splice(t,1)[0])
return!0},
cg:function(a,b){if(a[b]!=null)return!1
a[b]=this.bl(b)
return!0},
f2:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cz(u)
delete a[b]
return!0},
ci:function(){this.r=1073741823&this.r+1},
bl:function(a){var u,t=this,s=new P.iG(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ci()
return s},
cz:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ci()},
cj:function(a){return J.bH(a)&1073741823},
cn:function(a,b){return a[this.cj(b)]},
bo:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1}}
P.iG.prototype={}
P.dQ.prototype={
gC:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fm.prototype={}
P.fw.prototype={$ip:1,$ii:1}
P.u.prototype={
gO:function(a){return new H.b4(a,this.gl(a))},
D:function(a,b){return this.h(a,b)},
hk:function(a,b){var u,t,s=this,r=H.b([],[H.mJ(s,a,"u",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hj:function(a){return this.hk(a,!0)},
i:function(a){return P.jr(a,"[","]")}}
P.fz.prototype={}
P.fA.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:8}
P.W.prototype={
I:function(a,b){var u,t
for(u=J.aS(this.gZ(a));u.q();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aT(this.gZ(a))},
i:function(a){return P.k4(a)}}
P.iM.prototype={
a6:function(a,b){var u
for(u=J.aS(b);u.q();)this.n(0,u.gC(u))},
i:function(a){return P.jr(this,"{","}")},
D:function(a,b){var u,t,s
P.kc(b,"index")
for(u=P.lX(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
$ip:1,
$ii:1}
P.dR.prototype={}
P.eL.prototype={}
P.eO.prototype={}
P.f2.prototype={}
P.fk.prototype={
i:function(a){return this.a}}
P.fj.prototype={
e_:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ao("")
if(r>b)q.a+=C.b.b_(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.l5(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.ia.prototype={}
P.ib.prototype={
fv:function(a){var u,t,s,r=P.jz(0,null,a.length)
if(typeof r!=="number")return r.G()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iX(t)
if(s.e4(a,0,r)!==r)s.cA(C.b.bH(a,r-1),0)
return new Uint8Array(t.subarray(0,H.m_(0,s.b,t.length)))}}
P.iX.prototype={
cA:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e4:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bH(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aO(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cA(r,C.b.aO(a,p)))s=p}else if(r<=2047){q=n.b
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
P.at.prototype={}
P.a9.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aI:function(a,b){return C.c.aI(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.b4(u,30))&1073741823},
i:function(a){var u=this,t=P.le(H.lA(u)),s=P.cF(H.ly(u)),r=P.cF(H.lu(u)),q=P.cF(H.lv(u)),p=P.cF(H.lx(u)),o=P.cF(H.lz(u)),n=P.lf(H.lw(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.aY.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aI:function(a,b){return C.c.aI(this.a,b.a)},
i:function(a){var u,t,s,r=new P.f_(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.c.W(q,6e7)%60)
t=r.$1(C.c.W(q,1e6)%60)
s=new P.eZ().$1(q%1e6)
return""+C.c.W(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.eZ.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f_.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bl.prototype={}
P.d4.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gbn:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbm:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbn()+o+u
if(!q.a)return t
s=q.gbm()
r=P.jq(q.b)
return t+s+": "+r}}
P.bv.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fl.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t=this.b
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.i8.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i5.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c3.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eN.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jq(u)+"."}}
P.h8.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.de.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.eT.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dI.prototype={
i:function(a){return"Exception: "+this.a}}
P.fd.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.b_(s,0,75)+"...":s
return t+"\n"+r}}
P.ff.prototype={}
P.w.prototype={}
P.i.prototype={
bf:function(a,b){return new H.cc(this,b,[H.jK(this,"i",0)])},
gl:function(a){var u,t=this.gO(this)
for(u=0;t.q();)++u
return u},
gax:function(a){var u,t=this.gO(this)
if(!t.q())throw H.c(H.js())
u=t.gC(t)
if(t.q())throw H.c(H.lk())
return u},
D:function(a,b){var u,t,s
P.kc(b,"index")
for(u=this.gO(this),t=0;u.q();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
i:function(a){return P.lj(this,"(",")")}}
P.fn.prototype={}
P.af.prototype={$ip:1,$ii:1}
P.bT.prototype={}
P.b6.prototype={
gJ:function(a){return P.X.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.X.prototype={constructor:P.X,$iX:1,
p:function(a,b){return this===b},
gJ:function(a){return H.c0(this)},
i:function(a){return"Instance of '"+H.d(H.c1(this))+"'"},
toString:function(){return this.i(this)}}
P.n.prototype={}
P.ao.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.ey.prototype={
gl:function(a){return a.length}}
W.ez.prototype={
i:function(a){return String(a)}}
W.eA.prototype={
i:function(a){return String(a)}}
W.cz.prototype={}
W.bh.prototype={$ibh:1}
W.bj.prototype={
c3:function(a,b,c){if(c!=null)return a.getContext(b,P.mA(c))
return a.getContext(b)},
dl:function(a,b){return this.c3(a,b,null)},
$ibj:1}
W.aU.prototype={
gl:function(a){return a.length}}
W.eP.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bL.prototype={
gl:function(a){return a.length}}
W.eQ.prototype={}
W.a8.prototype={}
W.ai.prototype={}
W.eR.prototype={
gl:function(a){return a.length}}
W.eS.prototype={
gl:function(a){return a.length}}
W.eV.prototype={
gl:function(a){return a.length}}
W.ae.prototype={$iae:1}
W.eW.prototype={
i:function(a){return String(a)}}
W.cH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a5,P.a7]]},
$iy:1,
$ay:function(){return[[P.a5,P.a7]]},
$au:function(){return[[P.a5,P.a7]]},
$ii:1,
$ai:function(){return[[P.a5,P.a7]]}}
W.cI.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaw(a))+" x "+H.d(this.gaq(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia5&&a.left===u.gbb(b)&&a.top===u.gbd(b)&&this.gaw(a)===u.gaw(b)&&this.gaq(a)===u.gaq(b)},
gJ:function(a){return W.ku(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaw(a)),C.d.gJ(this.gaq(a)))},
gcJ:function(a){return a.bottom},
gaq:function(a){return a.height},
gbb:function(a){return a.left},
gc_:function(a){return a.right},
gbd:function(a){return a.top},
gaw:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a7]}}
W.eX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.n]},
$iy:1,
$ay:function(){return[P.n]},
$au:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]}}
W.eY.prototype={
gl:function(a){return a.length}}
W.ix.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.hj(this)
return new J.a2(u,u.length)},
$ap:function(){return[W.O]},
$au:function(){return[W.O]},
$ai:function(){return[W.O]}}
W.O.prototype={
gfo:function(a){return new W.iz(a)},
gcK:function(a){return new W.ix(a,a.children)},
gcL:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
a7:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.k0
if(u==null){u=H.b([],[W.aD])
t=new W.d3(u)
u.push(W.kt(null))
u.push(W.kv())
$.k0=t
d=t}else d=u
u=$.k_
if(u==null){u=new W.ek(d)
$.k_=u
c=u}else{u.a=d
c=u}}if($.ax==null){u=document
t=u.implementation.createHTMLDocument("")
$.ax=t
$.jp=t.createRange()
s=$.ax.createElement("base")
s.href=u.baseURI
$.ax.head.appendChild(s)}u=$.ax
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ax
if(!!this.$ibh)r=u.body
else{r=u.createElement(a.tagName)
$.ax.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.Q,a.tagName)){$.jp.selectNodeContents(r)
q=$.jp.createContextualFragment(b)}else{r.innerHTML=b
q=$.ax.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ax.body
if(r==null?u!=null:r!==u)J.jT(r)
c.c4(q)
document.adoptNode(q)
return q},
fz:function(a,b,c){return this.a7(a,b,c,null)},
dq:function(a,b){a.textContent=null
a.appendChild(this.a7(a,b,null,null))},
$iO:1,
gdh:function(a){return a.tagName}}
W.f1.prototype={
$1:function(a){return!!J.Q(a).$iO}}
W.h.prototype={$ih:1}
W.e.prototype={
fk:function(a,b,c,d){if(c!=null)this.dS(a,b,c,!1)},
dS:function(a,b,c,d){return a.addEventListener(b,H.bD(c,1),!1)}}
W.ay.prototype={$iay:1}
W.f7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ay]},
$iy:1,
$ay:function(){return[W.ay]},
$au:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]}}
W.f8.prototype={
gl:function(a){return a.length}}
W.fc.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.fi.prototype={
gl:function(a){return a.length}}
W.bO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$iy:1,
$ay:function(){return[W.B]},
$au:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]}}
W.b_.prototype={$ib_:1,
gcM:function(a){return a.data}}
W.bP.prototype={$ibP:1}
W.br.prototype={$ibr:1}
W.fx.prototype={
i:function(a){return String(a)}}
W.fR.prototype={
gl:function(a){return a.length}}
W.fS.prototype={
h:function(a,b){return P.aM(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.I(a,new W.fT(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
W.fT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fU.prototype={
h:function(a,b){return P.aM(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.I(a,new W.fV(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
W.fV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
W.fW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aB]},
$iy:1,
$ay:function(){return[W.aB]},
$au:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]}}
W.al.prototype={$ial:1}
W.Y.prototype={
gax:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.kg("No elements"))
if(t>1)throw H.c(P.kg("More than one element"))
return u.firstChild},
a6:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gO:function(a){var u=this.a.childNodes
return new W.cM(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.B]},
$au:function(){return[W.B]},
$ai:function(){return[W.B]}}
W.B.prototype={
h7:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hb:function(a,b){var u,t
try{u=a.parentNode
J.l0(u,b,a)}catch(t){H.av(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dw(a):u},
f3:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.d2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$iy:1,
$ay:function(){return[W.B]},
$au:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]}}
W.aE.prototype={$iaE:1,
gl:function(a){return a.length}}
W.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aE]},
$iy:1,
$ay:function(){return[W.aE]},
$au:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.hk.prototype={
h:function(a,b){return P.aM(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.I(a,new W.hl(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
W.hl.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hn.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.hx.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$iy:1,
$ay:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.hy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aG]},
$iy:1,
$ay:function(){return[W.aG]},
$au:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]}}
W.aH.prototype={$iaH:1,
gl:function(a){return a.length}}
W.hC.prototype={
h:function(a,b){return a.getItem(b)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gZ:function(a){var u=H.b([],[P.n])
this.I(a,new W.hD(u))
return u},
gl:function(a){return a.length},
$aW:function(){return[P.n,P.n]}}
W.hD.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ap.prototype={$iap:1}
W.dh.prototype={
a7:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bh(a,b,c,d)
u=W.lg("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Y(t).a6(0,new W.Y(u))
return t}}
W.hG.prototype={
a7:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bh(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gax(u)
s.toString
u=new W.Y(s)
r=u.gax(u)
t.toString
r.toString
new W.Y(t).a6(0,new W.Y(r))
return t}}
W.hH.prototype={
a7:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bh(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.a7(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gax(u)
t.toString
s.toString
new W.Y(t).a6(0,new W.Y(s))
return t}}
W.c4.prototype={$ic4:1}
W.aI.prototype={$iaI:1}
W.aq.prototype={$iaq:1}
W.hK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aq]},
$iy:1,
$ay:function(){return[W.aq]},
$au:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]}}
W.hL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aI]},
$iy:1,
$ay:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]}}
W.hQ.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bw.prototype={$ibw:1}
W.hU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aJ]},
$iy:1,
$ay:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]}}
W.hV.prototype={
gl:function(a){return a.length}}
W.ba.prototype={}
W.i9.prototype={
i:function(a){return String(a)}}
W.ip.prototype={
gl:function(a){return a.length}}
W.bc.prototype={
gfC:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfB:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibc:1}
W.cd.prototype={
f4:function(a,b){return a.requestAnimationFrame(H.bD(b,1))},
e3:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.G]},
$iy:1,
$ay:function(){return[W.G]},
$au:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.dC.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia5&&a.left===u.gbb(b)&&a.top===u.gbd(b)&&a.width===u.gaw(b)&&a.height===u.gaq(b)},
gJ:function(a){return W.ku(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaq:function(a){return a.height},
gaw:function(a){return a.width}}
W.iC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.az]},
$iy:1,
$ay:function(){return[W.az]},
$au:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]}}
W.dW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$iy:1,
$ay:function(){return[W.B]},
$au:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]}}
W.iP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aH]},
$iy:1,
$ay:function(){return[W.aH]},
$au:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]}}
W.iQ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ap]},
$iy:1,
$ay:function(){return[W.ap]},
$au:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]}}
W.iw.prototype={
I:function(a,b){var u,t,s,r,q
for(u=this.gZ(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gZ:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.n])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aW:function(){return[P.n,P.n]}}
W.iz.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gZ(this).length}}
W.iA.prototype={}
W.iB.prototype={
$1:function(a){return this.a.$1(a)}}
W.ce.prototype={
dJ:function(a){var u
if($.dL.a===0){for(u=0;u<262;++u)$.dL.m(0,C.P[u],W.mL())
for(u=0;u<12;++u)$.dL.m(0,C.l[u],W.mM())}},
aE:function(a){return $.kZ().w(0,W.bM(a))},
ah:function(a,b,c){var u=$.dL.h(0,H.d(W.bM(a))+"::"+b)
if(u==null)u=$.dL.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaD:1}
W.J.prototype={
gO:function(a){return new W.cM(a,this.gl(a))}}
W.d3.prototype={
aE:function(a){return C.a.cE(this.a,new W.h4(a))},
ah:function(a,b,c){return C.a.cE(this.a,new W.h3(a,b,c))},
$iaD:1}
W.h4.prototype={
$1:function(a){return a.aE(this.a)}}
W.h3.prototype={
$1:function(a){return a.ah(this.a,this.b,this.c)}}
W.e3.prototype={
dN:function(a,b,c,d){var u,t,s
this.a.a6(0,c)
u=b.bf(0,new W.iN())
t=b.bf(0,new W.iO())
this.b.a6(0,u)
s=this.c
s.a6(0,C.R)
s.a6(0,t)},
aE:function(a){return this.a.w(0,W.bM(a))},
ah:function(a,b,c){var u=this,t=W.bM(a),s=u.c
if(s.w(0,H.d(t)+"::"+b))return u.d.fm(c)
else if(s.w(0,"*::"+b))return u.d.fm(c)
else{s=u.b
if(s.w(0,H.d(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.d(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1},
$iaD:1}
W.iN.prototype={
$1:function(a){return!C.a.w(C.l,a)}}
W.iO.prototype={
$1:function(a){return C.a.w(C.l,a)}}
W.iT.prototype={
ah:function(a,b,c){if(this.dB(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.iU.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iR.prototype={
aE:function(a){var u=J.Q(a)
if(!!u.$ic2)return!1
u=!!u.$ij
if(u&&W.bM(a)==="foreignObject")return!1
if(u)return!0
return!1},
ah:function(a,b,c){if(b==="is"||C.b.bg(b,"on"))return!1
return this.aE(a)},
$iaD:1}
W.cM.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cv(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aD.prototype={}
W.iL.prototype={}
W.ek.prototype={
c4:function(a){new W.iY(this).$2(a,null)},
aR:function(a,b){if(b==null)J.jT(a)
else b.removeChild(a)},
f9:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l3(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.av(r)}t="element unprintable"
try{t=J.a1(a)}catch(r){H.av(r)}try{s=W.bM(a)
this.f8(a,b,p,t,s,o,n)}catch(r){if(H.av(r) instanceof P.ad)throw r
else{this.aR(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
f8:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aR(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aE(a)){p.aR(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ah(a,"is",g)){p.aR(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.b(u.slice(0),[H.au(u,0)])
for(s=f.gZ(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.ah(a,J.l6(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$ic4)p.c4(a.content)}}
W.iY.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.f9(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aR(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.av(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.cj.prototype={}
W.ck.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e9.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
P.ej.prototype={$ib_:1,
gcM:function(a){return this.a}}
P.j4.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.f9.prototype={
gb3:function(){var u=this.b,t=H.jK(u,"u",0)
return new H.bU(new H.cc(u,new P.fa(),[t]),new P.fb(),[t,W.O])},
m:function(a,b,c){var u=this.gb3()
J.l4(u.b.$1(J.ex(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aT(this.gb3().a)},
h:function(a,b){var u=this.gb3()
return u.b.$1(J.ex(u.a,b))},
gO:function(a){var u=P.jx(this.gb3(),!1,W.O)
return new J.a2(u,u.length)},
$ap:function(){return[W.O]},
$au:function(){return[W.O]},
$ai:function(){return[W.O]}}
P.fa.prototype={
$1:function(a){return!!J.Q(a).$iO}}
P.fb.prototype={
$1:function(a){return H.k(a,"$iO")}}
P.iH.prototype={
gc_:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gcJ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.d(u.a)+", "+H.d(u.b)+") "+H.d(u.c)+" x "+H.d(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia5){t=q.a
if(t==u.gbb(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gc_(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcJ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.bH(t),r=u.b,q=J.bH(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.c.gJ(r+t)
return P.lW(P.iE(P.iE(P.iE(P.iE(0,s),q),p),t))}}
P.a5.prototype={
gbb:function(a){return this.a},
gbd:function(a){return this.b},
gaw:function(a){return this.c},
gaq:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.ft.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b3]},
$au:function(){return[P.b3]},
$ii:1,
$ai:function(){return[P.b3]}}
P.b7.prototype={$ib7:1}
P.h6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b7]},
$au:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]}}
P.he.prototype={
gl:function(a){return a.length}}
P.c2.prototype={$ic2:1}
P.hF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.n]},
$au:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]}}
P.j.prototype={
gcK:function(a){return new P.f9(a,new W.Y(a))},
a7:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aD])
p.push(W.kt(null))
p.push(W.kv())
p.push(new W.iR())
c=new W.ek(new W.d3(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fz(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.Y(s)
q=p.gax(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b9.prototype={$ib9:1}
P.hW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b9]},
$au:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]}}
P.dO.prototype={}
P.dP.prototype={}
P.dZ.prototype={}
P.e_.prototype={}
P.ea.prototype={}
P.eb.prototype={}
P.eh.prototype={}
P.ei.prototype={}
P.eC.prototype={
gl:function(a){return a.length}}
P.eD.prototype={
h:function(a,b){return P.aM(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.I(a,new P.eE(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
P.eE.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eF.prototype={
gl:function(a){return a.length}}
P.bg.prototype={}
P.h7.prototype={
gl:function(a){return a.length}}
P.dA.prototype={}
P.da.prototype={
hg:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$ib_)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mB(g))
return}if(!!t.$ibP)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.l7("Incorrect number or type of arguments"))}}
P.hA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return P.aM(a.item(b))},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bT,,,]]},
$au:function(){return[[P.bT,,,]]},
$ii:1,
$ai:function(){return[[P.bT,,,]]}}
P.e6.prototype={}
P.e7.prototype={}
K.aw.prototype={
ar:function(a,b){return!0},
i:function(a){return"all"}}
K.cN.prototype={
ar:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].ar(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b5.prototype={}
K.a_.prototype={
ar:function(a,b){return!this.dv(0,b)},
i:function(a){return"!["+this.c8(0)+"]"}}
K.hf.prototype={
ar:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jy(this.a),t=H.jy(this.b)
return u+".."+t}}
K.ho.prototype={
dF:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.at])
for(s=new H.b4(a,a.gl(a));s.q();)t.m(0,s.d,!0)
r=P.jx(new H.bs(t,[u]),!0,u)
C.a.dt(r)
this.a=r},
ar:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.jA(this.a)}}
L.df.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dq(this.a.j(0,b))
r.a=H.b([],[K.b5])
r.c=!1
this.c.push(r)
return r},
fK:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.ar(0,a))return r}return},
i:function(a){return this.b},
cw:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.w(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bs(n,[H.au(n,0)]),n=n.gO(n);n.q();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.w(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dm.prototype={
i:function(a){var u=H.jQ(this.b,"\n","\\n"),t=H.jQ(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dn.prototype={
at:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hR.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.df(this,b)
u.c=H.b([],[L.dq])
this.a.m(0,b,u)}return u},
M:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dn(a)
u=P.n
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
c0:function(a){return this.hm(a)},
hm:function(a){var u=this
return P.m3(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$c0(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.h8(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.fK(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jA(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.x("removeRange"))
P.jz(0,m,d.length)
d.splice(0,m-0)
C.a.a6(c,d)
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
if(g.d!=null){j=P.jA(e)
i=g.d
h=i.c.h(0,j)
p=new L.dm(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.w(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lU()
case 1:return P.lV(q)}}},L.dm)},
i:function(a){var u,t=new P.ao(""),s=this.d
if(s!=null)t.a=s.cw()+"\n"
for(s=this.a,s=s.gho(s),s=new H.cW(J.aS(s.a),s.b);s.q();){u=s.a
if(u!=this.d)t.a+=u.cw()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dq.prototype={
i:function(a){return this.b.b+": "+this.c8(0)}}
O.aV.prototype={
bi:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c5:function(a,b,c){this.b=b
this.c=a},
aZ:function(a,b){return this.c5(a,null,b)},
eP:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dI:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.a2(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jK(s,"aV",0)]
if(s.eP(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dI(t,H.b([b],r))}},
$ii:1}
O.bW.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.H():u},
ay:function(){var u=this.b
if(u!=null)u.E(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gba(u)
else return V.cZ()},
de:function(a){var u=this.a
if(a==null)u.push(V.cZ())
else u.push(a)
this.ay()},
bZ:function(){var u=this.a
if(u.length>0){u.pop()
this.ay()}}}
E.eH.prototype={}
E.aZ.prototype={
sc6:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().S(0,s.gd9())
u=s.c
if(u!=null)u.gt().n(0,s.gd9())
t=new D.z("shape",r,s.c)
t.b=!0
s.as(t)}},
saV:function(a){var u,t,s=this
if(!J.N(s.r,a)){u=s.r
if(u!=null)u.gt().S(0,s.gd7())
if(a!=null)a.gt().n(0,s.gd7())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.as(t)}},
aj:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aL(0,b,s):null
if(!J.N(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.as(t)}for(r=s.y.a,r=new J.a2(r,r.length);r.q();)r.d.aj(0,b)},
aK:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gV(s))
else s.a.push(r.u(0,s.gV(s)))
s.ay()
a.df(t.f)
s=a.dy
u=(s&&C.a).gba(s)
if(u!=null&&t.d!=null)u.ha(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.q();)s.d.aK(a)
a.dd()
a.dx.bZ()},
as:function(a){var u=this.z
if(u!=null)u.E(a)},
a_:function(){return this.as(null)},
da:function(a){this.e=null
this.as(a)},
fY:function(){return this.da(null)},
d8:function(a){this.as(a)},
fX:function(){return this.d8(null)},
d6:function(a){this.as(a)},
fU:function(){return this.d6(null)},
fT:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd5(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a_()},
fW:function(a,b){var u,t
for(u=b.gO(b),t=this.gd5();u.q();)u.gC(u).gt().S(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bi.prototype={
i:function(a){return this.b}}
E.bt.prototype={
i:function(a){return this.b}}
E.dH.prototype={}
E.hg.prototype={
dE:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bW()
t=[V.aA]
u.a=H.b([],t)
u.gt().n(0,new E.hh(s))
s.cy=u
u=new O.bW()
u.a=H.b([],t)
u.gt().n(0,new E.hi(s))
s.db=u
u=new O.bW()
u.a=H.b([],t)
u.gt().n(0,new E.hj(s))
s.dx=u
u=H.b([],[O.di])
s.dy=u
u.push(null)
s.fr=new H.I([P.n,A.db])},
gh6:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.u(0,u.gV(u))
s=u}return s},
df:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gba(u):a)},
dd:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hh.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hi.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hj.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dk.prototype={
cd:function(a){this.dg()},
cc:function(){return this.cd(null)},
gfM:function(){var u,t=this,s=Date.now(),r=C.c.W(P.jZ(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
cs:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.v(r)
u=C.d.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kj(C.i,s.ghc())}},
dg:function(){if(!this.cx){this.cx=!0
var u=window
C.y.e3(u)
C.y.f4(u,W.kz(new E.hP(this),P.a7))}},
h9:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cs()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.jZ(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ay()
r=s.db
C.a.sl(r.a,0)
r.ay()
r=s.dx
C.a.sl(r.a,0)
r.ay()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.aK(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.av(q)
t=H.jL(q)
P.jP("Error: "+H.d(u))
P.jP("Stack: "+H.d(t))
throw H.c(u)}}}
E.hP.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.h9()}}}
Z.dy.prototype={}
Z.cA.prototype={
bD:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.av(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.iq.prototype={}
Z.cB.prototype={
aJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bD:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bD(a)},
hn:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aK:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a1(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.bo.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.c1(this.c))+"'")+"]"}}
Z.aK.prototype={
gc7:function(a){var u=this.a,t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.bf().a)!==0)t+=2
if((u&$.aR().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=3
if((u&$.cu().a)!==0)t+=4
if((u&$.bG().a)!==0)++t
return(u&$.aN().a)!==0?t+4:t},
fn:function(a){var u,t=$.aQ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0)if(u===a)return t
return $.kY()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aK))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.n]),t=this.a
if((t&$.aQ().a)!==0)u.push("Pos")
if((t&$.aP().a)!==0)u.push("Norm")
if((t&$.aO().a)!==0)u.push("Binm")
if((t&$.bf().a)!==0)u.push("Txt2D")
if((t&$.aR().a)!==0)u.push("TxtCube")
if((t&$.ct().a)!==0)u.push("Clr3")
if((t&$.cu().a)!==0)u.push("Clr4")
if((t&$.bG().a)!==0)u.push("Weight")
if((t&$.aN().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eK.prototype={}
D.bm.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.S]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.S()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.I(P.jx(u,!0,{func:1,ret:-1,args:[D.S]}),new D.f5(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.S]}])
C.a.I(u,new D.f6(q))}return!0},
fI:function(){return this.E(null)},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.f5.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f6.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.S.prototype={}
D.bp.prototype={}
D.bq.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cC.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cC))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cS.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cS))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fs.prototype={
h2:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
fZ:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cV.prototype={}
X.fy.prototype={
aP:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gaG()
r=new X.aC(a,V.b8(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
bY:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dn()
if(typeof u!=="number")return u.aa()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aP(a,b))
return!0},
h3:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaG()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bX(new V.E(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
eE:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cV(c,r.a.gaG(),b)
s.b=!0
t.E(s)
r.y=new P.a9(u,!1)
r.x=V.b8()}}
X.aa.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.aa))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aC.prototype={}
X.fX.prototype={
bp:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaG(),r=new X.aC(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bY:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bp(a,b,!0))
return!0},
aX:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dn()
if(typeof t!=="number")return t.aa()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bp(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bp(a,b,!1))
return!0},
h4:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaG()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bX(new V.E(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gcN:function(){var u=this.b
return u==null?this.b=D.H():u},
gc1:function(){var u=this.c
return u==null?this.c=D.H():u},
gd4:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.bX.prototype={}
X.hd.prototype={}
X.dp.prototype={}
X.hT.prototype={
aP:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.b8(),r=u.a.gaG(),q=new X.dp(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h1:function(a){var u=this.b
if(u==null)return!1
u.E(this.aP(a,!0))
return!0},
h_:function(a){var u=this.c
if(u==null)return!1
u.E(this.aP(a,!0))
return!0},
h0:function(a){var u=this.d
if(u==null)return!1
u.E(this.aP(a,!1))
return!0}}
X.dt.prototype={
gaG:function(){var u=this.a,t=C.f.gcL(u).c
t.toString
u=C.f.gcL(u).d
u.toString
return V.kd(0,0,t,u)},
cl:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cS(u,new X.aa(t,a.altKey,a.shiftKey))},
aD:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
bC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.ab(s-q,r-u)},
aQ:function(a){return new V.E(a.movementX,a.movementY)},
bz:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ac(r.pageX)
C.d.ac(r.pageY)
p=o.left
C.d.ac(r.pageX)
n.push(new V.ab(q-p,C.d.ac(r.pageY)-o.top))}return n},
am:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cC(u,new X.aa(t,a.altKey,a.shiftKey))},
bq:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ey:function(a){this.f=!0},
el:function(a){this.f=!1},
er:function(a){if(this.f&&this.bq(a))a.preventDefault()},
eC:function(a){var u
if(!this.f)return
u=this.cl(a)
this.b.h2(u)},
eA:function(a){var u
if(!this.f)return
u=this.cl(a)
this.b.fZ(u)},
eG:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aD(a)
if(r.x){u=r.am(a)
t=r.aQ(a)
if(r.d.bY(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.am(a)
s=r.ao(a)
if(r.c.bY(u,s))a.preventDefault()},
eK:function(a){var u,t,s,r=this
r.aD(a)
u=r.am(a)
if(r.x){t=r.aQ(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()},
ew:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aD(a)
u=r.am(a)
if(r.x){t=r.aQ(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()}},
eI:function(a){var u,t,s,r=this
r.aD(a)
u=r.am(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()},
eu:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aD(a)
u=r.am(a)
if(r.x){t=r.aQ(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()}},
eM:function(a){var u,t,s=this
s.aD(a)
u=new V.E((a&&C.x).gfB(a),C.x.gfC(a)).u(0,s.Q)
if(s.x){if(s.d.h3(u))a.preventDefault()
return}if(s.r)return
t=s.ao(a)
if(s.c.h4(u,t))a.preventDefault()},
eO:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.am(s.y)
t=s.ao(s.y)
s.d.eE(u,t,r)}},
f0:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bC(a)
u=t.bz(a)
if(t.e.h1(u))a.preventDefault()},
eX:function(a){var u
this.bC(a)
u=this.bz(a)
if(this.e.h_(u))a.preventDefault()},
eZ:function(a){var u
this.bC(a)
u=this.bz(a)
if(this.e.h0(u))a.preventDefault()}}
D.eG.prototype={$iZ:1}
D.bk.prototype={
ak:function(a){var u=this.r
if(u!=null)u.E(a)},
dL:function(){return this.ak(null)},
$iZ:1}
D.Z.prototype={}
D.cT.prototype={
ak:function(a){var u=this.y
if(u!=null)u.E(a)},
cq:function(a){var u=this.z
if(u!=null)u.E(a)},
eD:function(){return this.cq(null)},
eR:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.dY(s))return!1}return!0},
ef:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcp(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bk)this.f.push(q)
p=q.r
if(p==null){p=new D.bm()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bp()
u.b=!0
this.ak(u)},
eV:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcp();u.q();){s=u.gC(u)
C.a.S(this.e,s)
s.gt().S(0,t)}u=new D.bq()
u.b=!0
this.ak(u)},
dY:function(a){var u=C.a.w(this.f,a)
return u},
$ai:function(){return[D.Z]},
$aaV:function(){return[D.Z]}}
D.hc.prototype={$iZ:1}
D.hz.prototype={$iZ:1}
V.R.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.aW.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aW))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.f4.prototype={}
V.cY.prototype={
a3:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cY))return!1
u=b.a
t=$.A().a
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bF(H.b([q.a,q.d,q.r],p),3,0),n=V.bF(H.b([q.b,q.e,q.x],p),3,0),m=V.bF(H.b([q.c,q.f,q.y],p),3,0)
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
V.aA.prototype={
a3:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
d2:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.cZ()
u=1/b1
t=-n
s=-a0
return V.ak((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ak(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
be:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.C(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aY:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.a4(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aA))return!1
u=b.a
t=$.A().a
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
i:function(a){return this.L()},
A:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bF(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bF(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bF(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bF(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.A("")}}
V.ab.prototype={
G:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ab))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.a4.prototype={
G:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a4))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.d6.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d6))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.d9.prototype={
ga2:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.E.prototype={
bT:function(a){return Math.sqrt(this.H(this))},
H:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
if(typeof b!=="number")return H.v(b)
u=this.b
if(typeof u!=="number")return u.u()
return new V.E(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.kn
return u==null?$.kn=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.E(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.A()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.C.prototype={
bT:function(a){return Math.sqrt(this.H(this))},
H:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bU:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aT:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.C(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.dx()
return new V.C(this.a/b,this.b/b,this.c/b)},
d3:function(){var u=$.A().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.eM.prototype={
bk:function(a){var u=V.n1(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.H():u},
N:function(a){var u=this.y
if(u!=null)u.E(a)},
sc2:function(a,b){},
sbV:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bk(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.N(s)}},
sbX:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.A().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bk(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.N(s)}},
sa1:function(a,b){var u,t=this
b=t.bk(b)
u=t.d
if(!(Math.abs(u-b)<$.A().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.N(u)}},
sbW:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.A().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.N(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.A().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.N(t)}},
sbJ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.A().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.N(u)}},
aj:function(a,b){var u,t,s,r=this,q=r.f,p=$.A().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.A().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cE.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.H():u},
aL:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cE))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bN.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.H():u},
N:function(a){var u=this.e
if(u!=null)u.E(a)},
Y:function(){return this.N(null)},
ed:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaC(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bp()
u.b=!0
this.N(u)},
eT:function(a,b){var u,t
for(u=b.gO(b),t=this.gaC();u.q();)u.gC(u).gt().S(0,t)
u=new D.bq()
u.b=!0
this.N(u)},
aL:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a0()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.q();){q=r.d
if(q!=null){t=q.aL(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.cZ():u
r=s.e
if(r!=null)r.au(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bN))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.N(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a3]},
$aaV:function(){return[U.a3]},
$ia3:1}
U.a3.prototype={}
U.du.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.H():u},
N:function(a){var u=this.cy
if(u!=null)u.E(a)},
Y:function(){return this.N(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcN().n(0,u.gbr())
u.a.c.gd4().n(0,u.gbt())
u.a.c.gc1().n(0,u.gbv())
return!0},
bs:function(a){var u=this
if(!J.N(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bu:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaC")
if(!n.y)return
if(n.x){u=a.d.G(0,a.y)
u=new V.E(u.a,u.b)
u=u.H(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.G(0,a.y)
u=new V.E(t.a,t.b).u(0,2).v(0,u.ga2())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.E(s.a,s.b).u(0,2).v(0,u.ga2())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
n.b.sR(0)
t=t.G(0,a.z)
n.Q=new V.E(t.a,t.b).u(0,2).v(0,u.ga2())}n.Y()},
bw:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.H(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sR(t*10*s)
r.Y()}},
aL:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a0()
if(q<p){r.ch=p
u=b.y
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ak(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia3:1}
U.dv.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.H():u},
N:function(a){var u=this.fx
if(u!=null)u.E(a)},
Y:function(){return this.N(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcN().n(0,s.gbr())
s.a.c.gd4().n(0,s.gbt())
s.a.c.gc1().n(0,s.gbv())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.n(0,s.ge5())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.ge7())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.n(0,s.gfi())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.gfg())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.n(0,s.gfe())
return!0},
ag:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.E(u,t)},
bs:function(a){var u=this
H.k(a,"$iaC")
if(!J.N(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bu:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaC")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.E(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ag(new V.E(s.a,s.b).u(0,2).v(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.G(0,a.z)
n.dx=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))}n.Y()},
bw:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
r.Y()}},
e6:function(a){var u=this
if(H.k(a,"$icV").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e8:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaC")
if(!J.N(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ag(new V.E(s.a,s.b).u(0,2).v(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.G(0,a.z)
n.dx=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))
n.Y()},
fj:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fh:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idp")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.E(u.a,u.b)
u=u.H(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ag(new V.E(s.a,s.b).u(0,2).v(0,u.ga2()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa1(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.G(0,a.z)
n.dx=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))}n.Y()},
ff:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.H(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
r.Y()}},
aL:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a0()
if(q<p){r.dy=p
u=b.y
r.c.aj(0,u)
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ak(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.ak(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia3:1}
U.dw.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.H():u},
N:function(a){var u=this.r
if(u!=null)u.E(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.gea()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).n(0,t)
return!0},
eb:function(a){var u,t,s,r,q=this
if(!J.N(q.b,q.a.b.c))return
H.k(a,"$ibX")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.N(u)}},
aL:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ak(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia3:1}
M.cJ.prototype={
al:function(a){var u=this.y
if(u!=null)u.E(a)},
dM:function(){return this.al(null)},
en:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaf(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bp()
u.b=!0
this.al(u)},
ep:function(a,b){var u,t
for(u=b.gO(b),t=this.gaf();u.q();)u.gC(u).gt().S(0,t)
u=new D.bq()
u.b=!0
this.al(u)},
sdi:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().S(0,t.gaf())
u=t.d
t.d=a
if(a!=null)a.gt().n(0,t.gaf())
s=new D.z("technique",u,t.d)
s.b=!0
t.al(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.H():u},
aK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.df(f.d)
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
if(typeof s!=="number")return H.v(s)
o=C.d.ac(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.ac(p*r)
p=C.d.ac(q.c*s)
a.c=p
q=C.d.ac(q.d*r)
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
i=V.ak(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.de(i)
t=$.k8
if(t==null){t=V.ka()
q=V.jD()
p=$.ko
t=V.k5(t,q,p==null?$.ko=new V.C(0,0,-1):p)
$.k8=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.u(0,h)}a.db.de(h)
u=f.d
if(u!=null)u.aj(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.q();)u.d.aj(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.q();)u.d.aK(a)
f.b.toString
a.cy.bZ()
a.db.bZ()
f.c.toString
a.dd()}}
A.cx.prototype={}
A.eB.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fJ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fD:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.U.prototype={
gad:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.U))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fC.prototype={
dD:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.ao("")
t=c3.fr
if(t){u.a=c2
s=c2}else s=""
r=c3.fx
s=(r?u.a=s+"uniform mat4 viewObjMat;\n":s)+"uniform mat4 projViewObjMat;\n"
u.a=s
s+="\n"
u.a=s
s=u.a=s+"attribute vec3 posAttr;\n"
q=c3.k4
if(q){s+="attribute vec3 normAttr;\n"
u.a=s}p=c3.r1
u.a=(p?u.a=s+"attribute vec3 binmAttr;\n":s)+"\n"
A.mi(c3,u)
A.mk(c3,u)
A.mj(c3,u)
A.mm(c3,u)
A.mn(c3,u)
A.ml(c3,u)
A.mo(c3,u)
s=u.a+="vec4 getPos()\n"
s+="{\n"
u.a=s
o=c3.ry
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
u.a=s}if(c3.r2){s+="   txt2D = getTxt2D();\n"
u.a=s}if(c3.rx){s+="   txtCube = getTxtCube();\n"
u.a=s}if(c3.k2){s+="   objPos = getObjPos();\n"
u.a=s}s=(c3.k3?u.a=s+"   viewPos = getViewPos();\n":s)+"   gl_Position = getPos();\n"
u.a=s
s+="}\n"
u.a=s
s=u.a=s+"\n"
n=s.charCodeAt(0)==0?s:s
m=A.mh(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cm(n,35633)
b8.f=b8.cm(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.d(l)))}b8.fa()
b8.fc()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.k(b8.y.F(0,"invViewMat"),"$ia6")
if(t)b8.dy=H.k(b8.y.F(0,"objMat"),"$ia6")
if(r)b8.fr=H.k(b8.y.F(0,"viewObjMat"),"$ia6")
b8.fy=H.k(b8.y.F(0,"projViewObjMat"),"$ia6")
if(c3.go)b8.fx=H.k(b8.y.F(0,"viewMat"),"$ia6")
if(c3.x1)b8.k1=H.k(b8.y.F(0,"txt2DMat"),"$ic8")
if(c3.x2)b8.k2=H.k(b8.y.F(0,"txtCubeMat"),"$ia6")
if(c3.y1)b8.k3=H.k(b8.y.F(0,"colorMat"),"$ia6")
b8.r1=H.b([],[A.a6])
t=c3.b7
if(t>0){b8.k4=b8.y.F(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.k(j,"$ia6"))}}t=c3.a
if(t.a)b8.r2=H.k(b8.y.F(0,"emissionClr"),"$iD")
if(t.c)b8.ry=H.k(b8.y.F(0,"emissionTxt"),"$iV")
t=c3.b
if(t.a)b8.x1=H.k(b8.y.F(0,"ambientClr"),"$iD")
if(t.c)b8.y1=H.k(b8.y.F(0,"ambientTxt"),"$iV")
t=c3.c
if(t.a)b8.y2=H.k(b8.y.F(0,"diffuseClr"),"$iD")
if(t.c)b8.ap=H.k(b8.y.F(0,"diffuseTxt"),"$iV")
t=c3.d
if(t.a)b8.b8=H.k(b8.y.F(0,"invDiffuseClr"),"$iD")
if(t.c)b8.cP=H.k(b8.y.F(0,"invDiffuseTxt"),"$iV")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.cS=H.k(b8.y.F(0,"shininess"),"$iP")
if(s)b8.cQ=H.k(b8.y.F(0,"specularClr"),"$iD")
if(t.c)b8.cR=H.k(b8.y.F(0,"specularTxt"),"$iV")}if(c3.f.c)b8.cT=H.k(b8.y.F(0,"bumpTxt"),"$iV")
if(c3.db){b8.cU=H.k(b8.y.F(0,"envSampler"),"$iV")
t=c3.r
if(t.a)b8.cV=H.k(b8.y.F(0,"reflectClr"),"$iD")
if(t.c)b8.cW=H.k(b8.y.F(0,"reflectTxt"),"$iV")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.cX=H.k(b8.y.F(0,"refraction"),"$iP")
if(s)b8.cY=H.k(b8.y.F(0,"refractClr"),"$iD")
if(t.c)b8.cZ=H.k(b8.y.F(0,"refractTxt"),"$iV")}}t=c3.y
if(t.a)b8.d_=H.k(b8.y.F(0,"alpha"),"$iP")
if(t.c)b8.d0=H.k(b8.y.F(0,"alphaTxt"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bK=new H.I([r,A.bb])
b8.bL=new H.I([r,[P.af,A.c6]])
for(r=[A.c6],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="barLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.k(j,"$iD")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.t(P.r(c0+o+c1))
H.k(d,"$iD")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.k(c,"$iD")
if(typeof g!=="number")return g.aa()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.t(P.r(c0+o+c1))
H.k(a0,"$iP")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c6(j,d,c,a3,a2,a1))}b8.bL.m(0,g,e)
q=b8.bK
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bM=new H.I([r,A.bb])
b8.bN=new H.I([r,[P.af,A.c7]])
for(r=[A.c7],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.aa()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.t(P.r(c0+a4+c1))
H.k(j,"$iD")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.t(P.r(c0+a4+c1))
H.k(d,"$iD")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.t(P.r(c0+a4+c1))
H.k(c,"$iD")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.t(P.r(c0+a4+c1))
H.k(j,"$iD")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.t(P.r(c0+a4+c1))
H.k(d,"$iD")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.k(c,"$ibx")
a8=c}else a8=b9
e.push(new A.c7(a7,a6,a5,j,d,a8))}b8.bN.m(0,g,e)
q=b8.bM
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bO=new H.I([r,A.bb])
b8.bP=new H.I([r,[P.af,A.c9]])
for(r=[A.c9],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.k(j,"$iD")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.t(P.r(c0+o+c1))
H.k(d,"$iD")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.k(c,"$iD")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$ic8")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iV")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iV")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$ic5")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.t(P.r(c0+o+c1))
H.k(a0,"$iP")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c9(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bP.m(0,g,e)
q=b8.bO
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bQ=new H.I([r,A.bb])
b8.bR=new H.I([r,[P.af,A.ca]])
for(r=[A.ca],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
H.k(j,"$iD")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.t(P.r(c0+o+c1))
H.k(d,"$iD")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.t(P.r(c0+o+c1))
H.k(c,"$iD")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$iD")
if(typeof g!=="number")return g.aa()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$iD")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.t(P.r(c0+o+c1))
H.k(a0,"$iD")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.t(P.r(c0+o+c1))
H.k(b2,"$iP")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.t(P.r(c0+o+c1))
H.k(b3,"$iP")
b4=b3
b5=b2
a6=a0
a7=a}else{b4=b9
b5=b4
a6=b5
a7=a6}p=(g&2)!==0
if(p){o=b8.y
a4=f+"s["+k+"].shadowAdj"
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.k(a,"$ic5")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.k(a,"$iP")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.t(P.r(c0+a4+c1))
H.k(a0,"$iP")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.k(a,"$iP")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.t(P.r(c0+a4+c1))
H.k(a0,"$iP")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.t(P.r(c0+a4+c1))
H.k(b2,"$iP")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.t(P.r(c0+a4+c1))
H.k(a,"$ibx")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$ibx")
b0=a}else b0=b9
e.push(new A.ca(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bR.m(0,g,e)
q=b8.bQ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}}},
a5:function(a,b){if(b!=null&&b.d>=6)a.dr(b)}}
A.cy.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cG.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.d7.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.dd.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fF.prototype={
i:function(a){return this.ap}}
A.c6.prototype={}
A.c7.prototype={}
A.c9.prototype={}
A.ca.prototype={}
A.db.prototype={
dG:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cm:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
fa:function(){var u,t,s,r=this,q=H.b([],[A.cx]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cx(p,t.name,s))}r.x=new A.eB(q)},
fc:function(){var u,t,s,r=this,q=H.b([],[A.dr]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fA(t.type,t.size,t.name,s))}r.y=new A.i3(q)},
aA:function(a,b,c){var u=this.a
if(a===1)return new A.bb(u,b,c)
else return A.jC(u,this.r,b,a,c)},
e0:function(a,b,c){var u=this.a
if(a===1)return new A.bx(u,b,c)
else return A.jC(u,this.r,b,a,c)},
e1:function(a,b,c){var u=this.a
if(a===1)return new A.V(u,b,c)
else return A.jC(u,this.r,b,a,c)},
b5:function(a,b){return new P.dI(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fA:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aA(b,c,d)
case 5121:return u.aA(b,c,d)
case 5122:return u.aA(b,c,d)
case 5123:return u.aA(b,c,d)
case 5124:return u.aA(b,c,d)
case 5125:return u.aA(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.i_(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.c5(u.a,c,d)
case 35667:return new A.i0(u.a,c,d)
case 35668:return new A.i1(u.a,c,d)
case 35669:return new A.i2(u.a,c,d)
case 35674:return new A.i4(u.a,c,d)
case 35675:return new A.c8(u.a,c,d)
case 35676:return new A.a6(u.a,c,d)
case 35678:return u.e0(b,c,d)
case 35680:return u.e1(b,c,d)
case 35670:throw H.c(u.b5("BOOL",c))
case 35671:throw H.c(u.b5("BOOL_VEC2",c))
case 35672:throw H.c(u.b5("BOOL_VEC3",c))
case 35673:throw H.c(u.b5("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.dr.prototype={}
A.i3.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
F:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bb.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i2.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.P.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.c5.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.i4.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.c8.prototype={
ab:function(a){var u=new Float32Array(H.co(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a6.prototype={
ab:function(a){var u=new Float32Array(H.co(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.bx.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.V.prototype={
dr:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.j_.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bU(s.b,b).bU(s.d.bU(s.c,b),c)
s=new V.a4(r.a,r.b,r.c)
if(!J.N(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a_()}a.shh(r.v(0,Math.sqrt(r.H(r))))
s=1-b
u=1-c
u=new V.d6(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.N(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a_()}}}
F.bn.prototype={
dU:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dx()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.d3())return
return s.v(0,Math.sqrt(s.H(s)))},
dW:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.H(r)))
r=t.G(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.aT(r.v(0,Math.sqrt(r.H(r))))
return r.v(0,Math.sqrt(r.H(r)))},
bG:function(){var u,t=this
if(t.d!=null)return!0
u=t.dU()
if(u==null){u=t.dW()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
dT:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dx()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.d3())return
return s.v(0,Math.sqrt(s.H(s)))},
dV:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.G(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.H(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.G(0,g)
l=new V.a4(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).G(0,j)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.H(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.H(l)))
l=o.aT(q)
l=l.v(0,Math.sqrt(l.H(l))).aT(o)
q=l.v(0,Math.sqrt(l.H(l)))}return q},
bE:function(){var u,t=this
if(t.e!=null)return!0
u=t.dT()
if(u==null){u=t.dV()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a9(J.a1(s.e),0)+", "+C.b.a9(J.a1(t.b.e),0)+", "+C.b.a9(J.a1(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.A("")}}
F.bR.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a9(J.a1(u.e),0)+", "+C.b.a9(J.a1(this.b.e),0)},
L:function(){return this.A("")}}
F.c_.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a9(J.a1(u.e),0)},
L:function(){return this.A("")}}
F.hp.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.H():u},
fR:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.fw())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c_()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
p=new F.bR()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.E(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.cK(l,k,i)}g=h.e
if(g!=null)g.au(0)},
aF:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aF()||!1
if(!t.a.aF())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
fq:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aQ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aP().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.cu().a)!==0)++s
if((t&$.bG().a)!==0)++s
if((t&$.aN().a)!==0)++s
r=a4.gc7(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cA])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fn(m)
k=l.gc7(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cA(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fQ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.co(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cB(new Z.dy(a1,d),o,a4)
c.b=H.b([],[Z.bo])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)}a=Z.jE(u,34963,b)
c.b.push(new Z.bo(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)}a=Z.jE(u,34963,b)
c.b.push(new Z.bo(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.U()
b.push(t.e)}a=Z.jE(u,34963,b)
c.b.push(new Z.bo(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.A(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.A(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.A(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.A(t))}return C.a.k(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hq.prototype={
fl:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bn])
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
h.push(F.cK(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cK(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cK(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cK(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
aF:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bG())s=!1
return s},
bF:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bE())s=!1
return s},
i:function(a){return this.L()},
A:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(a))
return C.a.k(r,"\n")},
L:function(){return this.A("")}}
F.hr.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var u,t,s=H.b([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.k(s,"\n")},
L:function(){return this.A("")}}
F.hs.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(a))
return C.a.k(r,"\n")},
L:function(){return this.A("")}}
F.cb.prototype={
bI:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kq(u.cx,r,o,t,s,q,p,a,n)},
fw:function(){return this.bI(null)},
shh:function(a){var u
if(!J.N(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
fQ:function(a){var u,t,s=this
if(a.p(0,$.aQ())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aP())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aO())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bf())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.aR())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ct())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cu())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bG()))return H.b([s.ch],[P.M])
else if(a.p(0,$.aN())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
bG:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dx()
t.d.I(0,new F.io(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bE:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dx()
t.d.I(0,new F.im(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.H(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.au(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.n])
q.push(C.b.a9(J.a1(s.e),0))
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
q.push(V.F(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
L:function(){return this.A("")}}
F.io.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.im.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.ig.prototype={
U:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a_()
return!0},
cC:function(a,b){var u=null,t=F.kq(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
aF:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bG()
return!0},
bF:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bE()
return!0},
fs:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var u,t,s,r
this.U()
u=H.b([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].A(a))
return C.a.k(u,"\n")},
L:function(){return this.A("")}}
F.ih.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){var u=this
C.a.I(u.b,b)
C.a.I(u.c,new F.ii(u,b))
C.a.I(u.d,new F.ij(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
F.ii.prototype={
$1:function(a){if(!J.N(a.a,this.a))this.b.$1(a)}}
F.ij.prototype={
$1:function(a){var u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)}}
F.ik.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
F.il.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
O.cX.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.H():u},
T:function(a){var u=this.fr
if(u!=null)u.E(a)},
bj:function(){return this.T(null)},
cr:function(a){this.a=null
this.T(a)},
f6:function(){return this.cr(null)},
eh:function(a,b){var u=new D.bp()
u.b=!0
this.T(u)},
ej:function(a,b){var u=new D.bq()
u.b=!0
this.T(u)},
ck:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gai()
o=u.h(0,q.gai())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cy])
u.I(0,new O.fJ(g,n))
C.a.aN(n,new O.fK())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cG])
m.I(0,new O.fL(g,l))
C.a.aN(l,new O.fM())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gai()
o=k.h(0,q.gai())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d7])
k.I(0,new O.fN(g,j))
C.a.aN(j,new O.fO())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.gai()
p=i.h(0,q.gai())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dd])
i.I(0,new O.fP(g,h))
C.a.aN(h,new O.fQ())
f=C.c.W(g.e.a.length+3,4)
g.dy.e
return A.ls(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a4:function(a,b){if(b!=null)if(!C.a.w(a,b)){b.a=a.length
a.push(b)}},
aj:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.q();){t=u.d
t.toString
s=$.ie
if(s==null)s=$.ie=new V.C(0,0,1)
t.a=s
r=$.id
t.d=r==null?$.id=new V.C(0,1,0):r
r=$.ic
t.e=r==null?$.ic=new V.C(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.be(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.be(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.be(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
ha:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ck()
u=b4.fr.h(0,b3.ap)
if(u==null){u=A.lr(b3,b4.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b4.fr.fu(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.b8
b3=b5.e
if(!(b3 instanceof Z.cB))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.aF()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bF()
p.a.bF()
p=p.e
if(p!=null)p.au(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.fs()
o=o.e
if(o!=null)o.au(0)}m=b5.d.fq(new Z.iq(b4.a),r)
m.aJ($.aQ()).e=b2.a.Q.c
if(b3)m.aJ($.aP()).e=b2.a.cx.c
if(q)m.aJ($.aO()).e=b2.a.ch.c
if(s.r2)m.aJ($.bf()).e=b2.a.cy.c
if(p)m.aJ($.aR()).e=b2.a.db.c
if(s.ry)m.aJ($.aN()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dj])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fJ()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gV(p)
b3=b3.dy
b3.toString
b3.ab(p.a3(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gV(p)
o=b4.dx
o=b4.cx=p.u(0,o.gV(o))
p=o}b3=b3.fr
b3.toString
b3.ab(p.a3(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gh6()
o=b4.dx
o=b4.ch=p.u(0,o.gV(o))
p=o}b3=b3.fy
b3.toString
b3.ab(p.a3(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gV(p)
b3=b3.fx
b3.toString
b3.ab(p.a3(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ab(C.j.a3(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ab(C.j.a3(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ab(C.j.a3(p,!0))}if(s.b7>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.co(p.a3(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.f.e)
b3=b2.a
p=b2.f.e
b3.a5(b3.ry,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.r.e)
b3=b2.a
p=b2.r.e
b3.a5(b3.y1,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.x.e)
b3=b2.a
p=b2.x.e
b3.a5(b3.ap,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.b8
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.y.e)
b3=b2.a
p=b2.y.e
b3.a5(b3.cP,p)}b3=s.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.cS
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cQ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.z.e)
b3=b2.a
p=b2.z.e
b3.a5(b3.cR,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gai()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cv(b2.a.bL.h(0,e),d)
n=f.ghq()
b=$.am
n=n.aY(b==null?$.am=new V.a4(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghv()
b=$.am
n=n.aY(b==null?$.am=new V.a4(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaH(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcO()){n=f.gcF()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcG()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcH()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bK.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gV(p)
p=P.w
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.cv(b2.a.bN.h(0,0),d)
n=a.be(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.v(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bM.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gV(p)
p=P.w
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gai()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.cv(b2.a.bP.h(0,e),d)
a4=a.u(0,f.gV(f))
n=f.gV(f)
b=$.am
n=n.aY(b==null?$.am=new V.a4(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.am
n=a4.aY(n==null?$.am=new V.a4(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaH(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=a4.d2(0)
b=n.a
a1=n.b
a2=n.c
a5=n.e
a6=n.f
a7=n.r
a8=n.y
a9=n.z
n=n.Q
b0=c.d
b0.toString
i=new Float32Array(H.co(new V.cY(b,a1,a2,a5,a6,a7,a8,a9,n).a3(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gav()
n=f.gav()
if(!C.a.w(l,n)){n.a=l.length
l.push(n)}n=f.gav()
b=n.gaU(n)
if(b){b=c.f
b.toString
a1=n.d
if(a1<6)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaM()
n=f.gds()
b=c.x
b.toString
a1=n.gfF(n)
a2=n.gfG(n)
a5=n.gfH()
n=n.gfE()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaM()
if(!C.a.w(l,n)){n.a=l.length
l.push(n)}n=f.gaM()
b=n.gaU(n)
if(b){b=c.r
b.toString
a1=n.d
if(a1<6)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.gcO()){n=f.gcF()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcG()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcH()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bO.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gV(p)
p=P.w
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gai()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.cv(b2.a.bR.h(0,e),d)
n=f.gh5(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ght(f).hF()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aY(f.gh5(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaH(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=f.gc1()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gc_(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghG()
b=c.x
b.a.uniform1f(b.d,n)
n=f.ghH()
b=c.y
b.a.uniform1f(b.d,n)
f.gav()
n=f.gav()
if(!C.a.w(l,n)){n.a=l.length
l.push(n)}n=f.gav()
b=n.gaU(n)
if(b){b=c.dx
b.toString
a1=n.gaU(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfN(n)
b.a.uniform1i(b.d,n)}}f.gaM()
n=f.gds()
b=c.z
b.toString
a1=n.gfF(n)
a2=n.gfG(n)
a5=n.gfH()
n=n.gfE()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaM()
if(!C.a.w(l,n)){n.a=l.length
l.push(n)}n=f.gaM()
b=n.gaU(n)
if(b){b=c.dy
b.toString
a1=n.gaU(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfN(n)
b.a.uniform1i(b.d,n)}}if(f.ghu()){n=f.ghs()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghr()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcO()){n=f.gcF()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcG()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcH()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bQ.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.c){b2.a4(l,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.a5(b3.cT,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gV(p).d2(0)}b3=b3.id
b3.toString
b3.ab(p.a3(0,!0))}if(s.db){b2.a4(l,b2.ch)
b3=b2.a
p=b2.ch
b3.a5(b3.cU,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cV
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.a5(b3.cW,p)}b3=s.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.cX
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.cY
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.a4(l,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.a5(b3.cZ,p)}}b3=s.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.d_
p.a.uniform1f(p.d,n)}if(b3.c){b2.a4(l,b2.db.e)
p=b2.a
n=b2.db.e
p.a5(p.d0,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d>=6){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(34067,p.b)}}p=b5.e
p.bD(b4)
p.aK(b4)
p.hn(b4)
if(o)b3=b3.c
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(34067,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fD()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ck().ap}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cy(a,C.c.W(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.cw(a.a,b.a)}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cG(a,C.c.W(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.cw(a.a,b.a)}}
O.fN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d7(a,C.c.W(b+3,4)*4))}}
O.fO.prototype={
$2:function(a,b){return J.cw(a.a,b.a)}}
O.fP.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dd(a,C.c.W(b+3,4)*4))}}
O.fQ.prototype={
$2:function(a,b){return J.cw(a.a,b.a)}}
O.fD.prototype={
an:function(){var u,t=this
t.c9()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bV.prototype={
T:function(a){return this.a.T(a)},
bj:function(){return this.T(null)},
an:function(){},
bA:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.T(null)}}}
O.fE.prototype={}
O.aj.prototype={
ct:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
an:function(){this.c9()
this.ct(new V.R(1,1,1))},
saH:function(a,b){this.bA(new A.U(!0,!1,this.c.c))
this.ct(b)}}
O.fG.prototype={}
O.fH.prototype={
an:function(){var u,t=this
t.ca()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.fI.prototype={
cu:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.T(t)}},
an:function(){this.ca()
this.cu(100)}}
O.di.prototype={}
T.dj.prototype={}
T.hM.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.H():u}}
T.hN.prototype={
aB:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.T(u,"load",new T.hO(this,u,!1,b,!1,d,a),!1)},
f7:function(a,b,c){var u,t,s,r
b=V.jO(b)
u=V.jO(a.width)
t=V.jO(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jl()
s.width=u
s.height=t
r=C.f.dl(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mC(r.getImageData(0,0,s.width,s.height))}}}
T.hO.prototype={
$1:function(a){var u=this,t=u.a,s=t.f7(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.V.hg(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fI()}++t.e}}
X.jk.prototype={}
X.fe.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.H():u}}
X.d5.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.H():u},
az:function(a){var u=this.f
if(u!=null)u.E(a)},
dQ:function(){return this.az(null)},
saV:function(a){var u,t,s=this
if(!J.N(s.b,a)){u=s.b
if(u!=null)u.gt().S(0,s.gce())
t=s.b
s.b=a
if(a!=null)a.gt().n(0,s.gce())
u=new D.z("mover",t,s.b)
u.b=!0
s.az(u)}}}
X.hI.prototype={}
V.cD.prototype={
b0:function(a){this.b=new P.fj(C.L)
this.c=null
this.d=H.b([],[[P.af,W.ae]])},
K:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ae]))
u=a.split("\n")
for(l=u.length,t=[W.ae],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.e_(q,0,q.length)
n=o==null?q:o
C.J.dq(p,H.jQ(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gba(m.d).push(p)}},
dc:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.af,W.ae]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.b6()
for(t.toString,s=new H.m(u),s=new P.bA(t.c0(new H.b4(s,s.gl(s))).a());s.q();)r.bc(s.gC(s))}}
V.je.prototype={
$1:function(a){var u=C.d.dj(this.a.gfM(),2)
if(u!=="0.00")P.jP(u+" fps")}}
V.eU.prototype={
bc:function(a){var u=this
switch(a.a){case"Class":u.K(a.b,"#551")
break
case"Comment":u.K(a.b,"#777")
break
case"Id":u.K(a.b,"#111")
break
case"Num":u.K(a.b,"#191")
break
case"Reserved":u.K(a.b,"#119")
break
case"String":u.K(a.b,"#171")
break
case"Symbol":u.K(a.b,"#616")
break
case"Type":u.K(a.b,"#B11")
break
case"Whitespace":u.K(a.b,"#111")
break}},
b6:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hS()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.q(new H.m("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.q(new H.m("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=K.L("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=K.L("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=K.q(new H.m("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.L("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.q(new H.m(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.q(new H.m(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.q(new H.m('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.q(new H.m('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.q(new H.m('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.aw())
t=a1.j(0,r).k(0,h)
u=K.q(new H.m("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.q(new H.m("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.q(new H.m("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.q(new H.m("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.aw())
t=a1.j(0,r).k(0,e)
u=K.q(new H.m("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.a_()
s=[K.b5]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.m("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.q(new H.m("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.a_()
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.m("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.q(new H.m("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.q(new H.m(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.q(new H.m(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.M("Num")
t=a1.j(0,n)
t.d=t.a.M("Num")
t=a1.j(0,m)
t.d=t.a.M("Symbol")
t=a1.j(0,j)
t.d=t.a.M("String")
t=a1.j(0,g)
t.d=t.a.M("String")
t=a1.j(0,c)
t.d=t.a.M(d)
t=a1.j(0,a0)
t.d=t.a.M(a0)
t=a1.j(0,q)
t=t.d=t.a.M(q)
u=[P.n]
t.at(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.at(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.at(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fg.prototype={
bc:function(a){var u=this
switch(a.a){case"Builtin":u.K(a.b,"#411")
break
case"Comment":u.K(a.b,"#777")
break
case"Id":u.K(a.b,"#111")
break
case"Num":u.K(a.b,"#191")
break
case"Preprocess":u.K(a.b,"#737")
break
case"Reserved":u.K(a.b,"#119")
break
case"Symbol":u.K(a.b,"#611")
break
case"Type":u.K(a.b,"#171")
break
case"Whitespace":u.K(a.b,"#111")
break}},
b6:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hS()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.q(new H.m("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.q(new H.m("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=K.L("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=K.L("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=K.q(new H.m("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.L("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.q(new H.m(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.q(new H.m(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.q(new H.m("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.q(new H.m("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.aw())
t=e.j(0,j).k(0,i)
u=K.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.a_()
s=[K.b5]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.q(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.a_()
u.a=H.b([],s)
t.a.push(u)
t=K.q(new H.m("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.q(new H.m(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.q(new H.m(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.M("Num")
u=e.j(0,n)
u.d=u.a.M("Num")
u=e.j(0,m)
u.d=u.a.M("Symbol")
u=e.j(0,i)
u.d=u.a.M(j)
u=e.j(0,g)
u.d=u.a.M(h)
u=e.j(0,f)
u.d=u.a.M(f)
u=e.j(0,q)
u=u.d=u.a.M(q)
t=[P.n]
u.at(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.at(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.at(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fh.prototype={
bc:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.K(a.b,"#911")
u.K("=",t)
break
case"Id":u.K(a.b,t)
break
case"Other":u.K(a.b,t)
break
case"Reserved":u.K(a.b,"#119")
break
case"String":u.K(a.b,"#171")
break
case"Symbol":u.K(a.b,"#616")
break}},
b6:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hS()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.q(new H.m("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.q(new H.m("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.q(new H.m("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.q(new H.m("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.q(new H.m("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.q(new H.m('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.q(new H.m('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.q(new H.m("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.q(new H.m('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.aw())
l.j(0,s).k(0,m).a.push(new K.aw())
u=l.j(0,m).k(0,m)
t=new K.a_()
t.a=H.b([],[K.b5])
u.a.push(t)
u=K.q(new H.m('</\\-!>=_"'))
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.M("Symbol")
u=l.j(0,n)
u.d=u.a.M("String")
u=l.j(0,r)
t=u.a.M(r)
u.d=t
t.at(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
t=l.j(0,q)
t.d=t.a.M(q)
t=l.j(0,m)
t.d=t.a.M(m)
return l}}
V.ha.prototype={
dc:function(a,b){this.d=H.b([],[[P.af,W.ae]])
this.K(C.a.k(b,"\n"),"#111")},
bc:function(a){},
b6:function(){return}}
V.ht.prototype={
dH:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.T(q,"scroll",new V.hv(o),!1)},
cD:function(a){var u,t,s,r,q,p,o,n
this.fb()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fP(a),s.toString,r=new H.m(r),r=new P.bA(s.c0(new H.b4(r,r.gl(r))).a());r.q();){s=r.gC(r)
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
if(H.kI(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kw(C.t,s,C.h,!1)
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
dk:function(a){var u,t,s,r=new V.eU("dart")
r.b0("dart")
u=new V.fg("glsl")
u.b0("glsl")
t=new V.fh("html")
t.b0("html")
s=C.a.fL(H.b([r,u,t],[V.cD]),new V.hw(a))
if(s!=null)return s
r=new V.ha("plain")
r.b0("plain")
return r},
cB:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jJ(s).bg(s,"+")){b0[t]=C.b.ae(s,1)
a6.push(1)
u=!0}else if(C.b.bg(s,"-")){b0[t]=C.b.ae(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dk(a8)
r.dc(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kw(C.t,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jU()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.l)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.l)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gO(s);a2.q();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fb:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hS()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.a_()
r=[K.b5]
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.m("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.a_()
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.m("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.q(new H.m("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.a_()
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.m("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.q(new H.m("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.q(new H.m("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.q(new H.m("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.aw())
s=u.j(0,i).k(0,i)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.m("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.M(p)
s=u.j(0,n)
s.d=s.a.M(o)
s=u.j(0,"CodeEnd")
s.d=s.a.M(m)
s=u.j(0,j)
s.d=s.a.M("Link")
s=u.j(0,i)
s.d=s.a.M(i)
this.b=u}}
V.hv.prototype={
$1:function(a){P.kj(C.i,new V.hu(this.a))}}
V.hu.prototype={
$0:function(){var u=C.d.ac(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hw.prototype={
$1:function(a){return a.a===this.a}}
B.jc.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.n]
u.cB("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cB("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dw=u.i
u=J.cR.prototype
u.dA=u.i
u=P.i.prototype
u.dz=u.bf
u=W.O.prototype
u.bh=u.a7
u=W.e3.prototype
u.dB=u.ah
u=K.cN.prototype
u.dv=u.ar
u.c8=u.i
u=O.bV.prototype
u.c9=u.an
u=O.aj.prototype
u.ca=u.an})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"m1","lm",19)
t(P,"mw","lP",6)
t(P,"mx","lQ",6)
t(P,"my","lR",6)
s(P,"kB","mu",9)
r(W,"mL",4,null,["$4"],["lS"],15,0)
r(W,"mM",4,null,["$4"],["lT"],15,0)
var l
q(l=E.aZ.prototype,"gd9",0,0,null,["$1","$0"],["da","fY"],0,0)
q(l,"gd7",0,0,null,["$1","$0"],["d8","fX"],0,0)
q(l,"gd5",0,0,null,["$1","$0"],["d6","fU"],0,0)
p(l,"gfS","fT",3)
p(l,"gfV","fW",3)
q(l=E.dk.prototype,"gcb",0,0,null,["$1","$0"],["cd","cc"],0,0)
o(l,"ghc","dg",9)
n(l=X.dt.prototype,"gex","ey",4)
n(l,"gek","el",4)
n(l,"geq","er",2)
n(l,"geB","eC",10)
n(l,"gez","eA",10)
n(l,"geF","eG",2)
n(l,"geJ","eK",2)
n(l,"gev","ew",2)
n(l,"geH","eI",2)
n(l,"ges","eu",2)
n(l,"geL","eM",17)
n(l,"geN","eO",4)
n(l,"gf_","f0",5)
n(l,"geW","eX",5)
n(l,"geY","eZ",5)
q(D.bk.prototype,"gdK",0,0,null,["$1","$0"],["ak","dL"],0,0)
q(l=D.cT.prototype,"gcp",0,0,null,["$1","$0"],["cq","eD"],0,0)
n(l,"geQ","eR",18)
p(l,"gee","ef",11)
p(l,"geU","eV",11)
m(V.E.prototype,"gl","bT",12)
m(V.C.prototype,"gl","bT",12)
q(l=U.bN.prototype,"gaC",0,0,null,["$1","$0"],["N","Y"],0,0)
p(l,"gec","ed",13)
p(l,"geS","eT",13)
q(l=U.du.prototype,"gaC",0,0,null,["$1","$0"],["N","Y"],0,0)
n(l,"gbr","bs",1)
n(l,"gbt","bu",1)
n(l,"gbv","bw",1)
q(l=U.dv.prototype,"gaC",0,0,null,["$1","$0"],["N","Y"],0,0)
n(l,"gbr","bs",1)
n(l,"gbt","bu",1)
n(l,"gbv","bw",1)
n(l,"ge5","e6",1)
n(l,"ge7","e8",1)
n(l,"gfi","fj",1)
n(l,"gfg","fh",1)
n(l,"gfe","ff",1)
n(U.dw.prototype,"gea","eb",1)
q(l=M.cJ.prototype,"gaf",0,0,null,["$1","$0"],["al","dM"],0,0)
p(l,"gem","en",3)
p(l,"geo","ep",3)
q(l=O.cX.prototype,"gb1",0,0,null,["$1","$0"],["T","bj"],0,0)
q(l,"gf5",0,0,null,["$1","$0"],["cr","f6"],0,0)
p(l,"geg","eh",14)
p(l,"gei","ej",14)
q(O.bV.prototype,"gb1",0,0,null,["$1","$0"],["T","bj"],0,0)
q(X.d5.prototype,"gce",0,0,null,["$1","$0"],["az","dQ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.X,null)
s(P.X,[H.jv,J.a,J.a2,P.dR,P.i,H.b4,P.fn,H.cL,H.i7,H.hX,P.bl,H.bK,H.e8,P.W,H.fu,H.fv,H.fp,P.ee,P.bz,P.bA,P.dz,P.dg,P.hE,P.dl,P.iZ,P.iM,P.iG,P.dQ,P.u,P.eL,P.fk,P.iX,P.at,P.a9,P.a7,P.aY,P.h8,P.de,P.dI,P.fd,P.ff,P.af,P.bT,P.b6,P.n,P.ao,W.eQ,W.ce,W.J,W.d3,W.e3,W.iR,W.cM,W.aD,W.iL,W.ek,P.ej,P.iH,K.aw,K.cN,K.b5,K.hf,K.ho,L.df,L.dm,L.dn,L.hR,O.aV,O.bW,E.eH,E.aZ,E.bi,E.bt,E.dH,E.hg,E.dk,Z.dy,Z.iq,Z.cB,Z.bo,Z.aK,D.eK,D.bm,D.S,X.cC,X.cS,X.fs,X.fy,X.aa,X.fX,X.hT,X.dt,D.eG,D.bk,D.Z,D.hc,D.hz,V.R,V.aW,V.f4,V.cY,V.aA,V.ab,V.a4,V.d6,V.d9,V.E,V.C,U.du,U.dv,U.dw,M.cJ,A.cx,A.eB,A.U,A.cy,A.cG,A.d7,A.dd,A.fF,A.c6,A.c7,A.c9,A.ca,A.dr,A.i3,F.bn,F.bR,F.c_,F.hp,F.hq,F.hr,F.hs,F.cb,F.ig,F.ih,F.ik,F.il,O.di,O.bV,O.fG,T.hN,X.jk,X.hI,X.d5,V.cD,V.ht])
s(J.a,[J.fo,J.cQ,J.cR,J.b0,J.bQ,J.b1,H.bZ,W.e,W.ey,W.cz,W.ai,W.G,W.dB,W.a8,W.eV,W.eW,W.dD,W.cI,W.dF,W.eY,W.h,W.dJ,W.az,W.fi,W.dM,W.b_,W.fx,W.fR,W.dS,W.dT,W.aB,W.dU,W.dX,W.aE,W.e0,W.e2,W.aG,W.e4,W.aH,W.e9,W.ap,W.ec,W.hQ,W.aJ,W.ef,W.hV,W.i9,W.el,W.en,W.ep,W.er,W.et,P.b3,P.dO,P.b7,P.dZ,P.he,P.ea,P.b9,P.eh,P.eC,P.dA,P.da,P.e6])
s(J.cR,[J.h9,J.by,J.b2])
t(J.ju,J.b0)
s(J.bQ,[J.cP,J.cO])
t(P.fw,P.dR)
s(P.fw,[H.ds,W.ix,W.Y,P.f9])
t(H.m,H.ds)
s(P.i,[H.p,H.bU,H.cc,P.fm])
s(H.p,[H.cU,H.bs])
t(H.f0,H.bU)
s(P.fn,[H.cW,H.ir])
t(H.fB,H.cU)
s(P.bl,[H.h5,H.fr,H.i6,H.eJ,H.hm,P.d4,P.ad,P.i8,P.i5,P.c3,P.eN,P.eT])
s(H.bK,[H.jg,H.hJ,H.fq,H.j8,H.j9,H.ja,P.it,P.is,P.iu,P.iv,P.iW,P.iV,P.j3,P.iJ,P.iK,P.fA,P.eZ,P.f_,W.f1,W.fT,W.fV,W.hl,W.hD,W.iB,W.h4,W.h3,W.iN,W.iO,W.iU,W.iY,P.j4,P.fa,P.fb,P.eE,E.hh,E.hi,E.hj,E.hP,D.f5,D.f6,F.j_,F.io,F.im,F.ii,F.ij,O.fJ,O.fK,O.fL,O.fM,O.fN,O.fO,O.fP,O.fQ,T.hO,V.je,V.hv,V.hu,V.hw,B.jc])
s(H.hJ,[H.hB,H.bI])
t(P.fz,P.W)
s(P.fz,[H.I,W.iw])
t(H.d_,H.bZ)
s(H.d_,[H.cf,H.ch])
t(H.cg,H.cf)
t(H.bY,H.cg)
t(H.ci,H.ch)
t(H.d0,H.ci)
s(H.d0,[H.fY,H.fZ,H.h_,H.h0,H.h1,H.d1,H.h2])
t(P.iS,P.fm)
t(P.iI,P.iZ)
t(P.iF,P.iM)
t(P.eO,P.hE)
t(P.f2,P.eL)
s(P.eO,[P.fj,P.ib])
t(P.ia,P.f2)
s(P.a7,[P.M,P.w])
s(P.ad,[P.bv,P.fl])
s(W.e,[W.B,W.f8,W.aF,W.cj,W.aI,W.aq,W.cl,W.ip,W.cd,P.eF,P.bg])
s(W.B,[W.O,W.aU])
s(W.O,[W.o,P.j])
s(W.o,[W.ez,W.eA,W.bh,W.bj,W.ae,W.fc,W.bP,W.hn,W.dh,W.hG,W.hH,W.c4])
t(W.eP,W.ai)
t(W.bL,W.dB)
s(W.a8,[W.eR,W.eS])
t(W.dE,W.dD)
t(W.cH,W.dE)
t(W.dG,W.dF)
t(W.eX,W.dG)
t(W.ay,W.cz)
t(W.dK,W.dJ)
t(W.f7,W.dK)
t(W.dN,W.dM)
t(W.bO,W.dN)
t(W.ba,W.h)
s(W.ba,[W.br,W.al,W.bw])
t(W.fS,W.dS)
t(W.fU,W.dT)
t(W.dV,W.dU)
t(W.fW,W.dV)
t(W.dY,W.dX)
t(W.d2,W.dY)
t(W.e1,W.e0)
t(W.hb,W.e1)
t(W.hk,W.e2)
t(W.ck,W.cj)
t(W.hx,W.ck)
t(W.e5,W.e4)
t(W.hy,W.e5)
t(W.hC,W.e9)
t(W.ed,W.ec)
t(W.hK,W.ed)
t(W.cm,W.cl)
t(W.hL,W.cm)
t(W.eg,W.ef)
t(W.hU,W.eg)
t(W.bc,W.al)
t(W.em,W.el)
t(W.iy,W.em)
t(W.dC,W.cI)
t(W.eo,W.en)
t(W.iC,W.eo)
t(W.eq,W.ep)
t(W.dW,W.eq)
t(W.es,W.er)
t(W.iP,W.es)
t(W.eu,W.et)
t(W.iQ,W.eu)
t(W.iz,W.iw)
t(W.iA,P.dg)
t(W.iT,W.e3)
t(P.a5,P.iH)
t(P.dP,P.dO)
t(P.ft,P.dP)
t(P.e_,P.dZ)
t(P.h6,P.e_)
t(P.c2,P.j)
t(P.eb,P.ea)
t(P.hF,P.eb)
t(P.ei,P.eh)
t(P.hW,P.ei)
t(P.eD,P.dA)
t(P.h7,P.bg)
t(P.e7,P.e6)
t(P.hA,P.e7)
s(K.cN,[K.a_,L.dq])
s(E.eH,[Z.cA,A.db,T.dj])
s(D.S,[D.bp,D.bq,D.z,X.hd])
s(X.hd,[X.cV,X.aC,X.bX,X.dp])
s(O.aV,[D.cT,U.bN])
s(D.eK,[U.eM,U.a3])
t(U.cE,U.a3)
t(A.fC,A.db)
s(A.dr,[A.bb,A.i0,A.i1,A.i2,A.hZ,A.P,A.i_,A.D,A.c5,A.i4,A.c8,A.a6,A.bx,A.V])
t(O.cX,O.di)
s(O.bV,[O.fD,O.fE,O.aj])
s(O.aj,[O.fH,O.fI])
t(T.hM,T.dj)
t(X.fe,X.hI)
s(V.cD,[V.eU,V.fg,V.fh,V.ha])
u(H.ds,H.i7)
u(H.cf,P.u)
u(H.cg,H.cL)
u(H.ch,P.u)
u(H.ci,H.cL)
u(P.dR,P.u)
u(W.dB,W.eQ)
u(W.dD,P.u)
u(W.dE,W.J)
u(W.dF,P.u)
u(W.dG,W.J)
u(W.dJ,P.u)
u(W.dK,W.J)
u(W.dM,P.u)
u(W.dN,W.J)
u(W.dS,P.W)
u(W.dT,P.W)
u(W.dU,P.u)
u(W.dV,W.J)
u(W.dX,P.u)
u(W.dY,W.J)
u(W.e0,P.u)
u(W.e1,W.J)
u(W.e2,P.W)
u(W.cj,P.u)
u(W.ck,W.J)
u(W.e4,P.u)
u(W.e5,W.J)
u(W.e9,P.W)
u(W.ec,P.u)
u(W.ed,W.J)
u(W.cl,P.u)
u(W.cm,W.J)
u(W.ef,P.u)
u(W.eg,W.J)
u(W.el,P.u)
u(W.em,W.J)
u(W.en,P.u)
u(W.eo,W.J)
u(W.ep,P.u)
u(W.eq,W.J)
u(W.er,P.u)
u(W.es,W.J)
u(W.et,P.u)
u(W.eu,W.J)
u(P.dO,P.u)
u(P.dP,W.J)
u(P.dZ,P.u)
u(P.e_,W.J)
u(P.ea,P.u)
u(P.eb,W.J)
u(P.eh,P.u)
u(P.ei,W.J)
u(P.dA,P.W)
u(P.e6,P.u)
u(P.e7,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",a7:"num",n:"String",at:"bool",b6:"Null",af:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.S]},{func:1,ret:-1,args:[D.S]},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[P.w,[P.i,E.aZ]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bw]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b6,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.br]},{func:1,ret:-1,args:[P.w,[P.i,D.Z]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.i,U.a3]]},{func:1,ret:-1,args:[P.w,[P.i,V.aA]]},{func:1,ret:P.at,args:[W.O,P.n,P.n,W.ce]},{func:1,ret:P.b6,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.at,args:[[P.i,D.Z]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bh.prototype
C.f=W.bj.prototype
C.J=W.ae.prototype
C.M=J.a.prototype
C.a=J.b0.prototype
C.N=J.cO.prototype
C.c=J.cP.prototype
C.j=J.cQ.prototype
C.d=J.bQ.prototype
C.b=J.b1.prototype
C.O=J.b2.prototype
C.v=J.h9.prototype
C.V=P.da.prototype
C.w=W.dh.prototype
C.m=J.by.prototype
C.x=W.bc.prototype
C.y=W.cd.prototype
C.z=new E.bi("Browser.chrome")
C.o=new E.bi("Browser.firefox")
C.p=new E.bi("Browser.edge")
C.A=new E.bi("Browser.other")
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.B=function() {
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
C.C=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.D=function(hooks) {
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
C.E=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.H=new P.h8()
C.h=new P.ia()
C.I=new P.ib()
C.e=new P.iI()
C.i=new P.aY(0)
C.K=new P.aY(5e6)
C.L=new P.fk("element",!1,!1,!1)
C.P=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.Q=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.R=H.b(u([]),[P.n])
C.t=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.n])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.S=new E.bt("OperatingSystem.windows")
C.u=new E.bt("OperatingSystem.mac")
C.T=new E.bt("OperatingSystem.linux")
C.U=new E.bt("OperatingSystem.other")
C.W=new P.bz(null,2)})();(function staticFields(){$.ah=0
$.bJ=null
$.jV=null
$.kD=null
$.kA=null
$.kG=null
$.j5=null
$.jb=null
$.jM=null
$.bB=null
$.cp=null
$.cq=null
$.jG=!1
$.ag=C.e
$.a0=[]
$.ax=null
$.jp=null
$.k0=null
$.k_=null
$.dL=P.k2(P.n,P.ff)
$.f3=null
$.k6=null
$.k9=null
$.am=null
$.ke=null
$.kn=null
$.kp=null
$.ic=null
$.id=null
$.ie=null
$.ko=null
$.k8=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"n4","kL",function(){return H.kC("_$dart_dartClosure")})
u($,"n5","jR",function(){return H.kC("_$dart_js")})
u($,"n6","kM",function(){return H.ar(H.hY({
toString:function(){return"$receiver$"}}))})
u($,"n7","kN",function(){return H.ar(H.hY({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n8","kO",function(){return H.ar(H.hY(null))})
u($,"n9","kP",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nc","kS",function(){return H.ar(H.hY(void 0))})
u($,"nd","kT",function(){return H.ar(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nb","kR",function(){return H.ar(H.kl(null))})
u($,"na","kQ",function(){return H.ar(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nf","kV",function(){return H.ar(H.kl(void 0))})
u($,"ne","kU",function(){return H.ar(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ns","jS",function(){return P.lO()})
u($,"nv","l_",function(){return P.lD("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nt","kZ",function(){return P.k3(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)})
u($,"nm","kY",function(){return Z.ac(0)})
u($,"ng","kW",function(){return Z.ac(511)})
u($,"no","aQ",function(){return Z.ac(1)})
u($,"nn","aP",function(){return Z.ac(2)})
u($,"ni","aO",function(){return Z.ac(4)})
u($,"np","bf",function(){return Z.ac(8)})
u($,"nq","aR",function(){return Z.ac(16)})
u($,"nj","ct",function(){return Z.ac(32)})
u($,"nk","cu",function(){return Z.ac(64)})
u($,"nl","kX",function(){return Z.ac(96)})
u($,"nr","bG",function(){return Z.ac(128)})
u($,"nh","aN",function(){return Z.ac(256)})
u($,"n3","kK",function(){return new V.f4(1e-9)})
u($,"n2","A",function(){return $.kK()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bZ,ArrayBufferView:H.bZ,Float32Array:H.bY,Float64Array:H.bY,Int16Array:H.fY,Int32Array:H.fZ,Int8Array:H.h_,Uint16Array:H.h0,Uint32Array:H.h1,Uint8ClampedArray:H.d1,CanvasPixelArray:H.d1,Uint8Array:H.h2,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.ey,HTMLAnchorElement:W.ez,HTMLAreaElement:W.eA,Blob:W.cz,HTMLBodyElement:W.bh,HTMLCanvasElement:W.bj,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eP,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bL,MSStyleCSSProperties:W.bL,CSS2Properties:W.bL,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eR,CSSUnparsedValue:W.eS,DataTransferItemList:W.eV,HTMLDivElement:W.ae,DOMException:W.eW,ClientRectList:W.cH,DOMRectList:W.cH,DOMRectReadOnly:W.cI,DOMStringList:W.eX,DOMTokenList:W.eY,Element:W.O,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ay,FileList:W.f7,FileWriter:W.f8,HTMLFormElement:W.fc,Gamepad:W.az,History:W.fi,HTMLCollection:W.bO,HTMLFormControlsCollection:W.bO,HTMLOptionsCollection:W.bO,ImageData:W.b_,HTMLImageElement:W.bP,KeyboardEvent:W.br,Location:W.fx,MediaList:W.fR,MIDIInputMap:W.fS,MIDIOutputMap:W.fU,MimeType:W.aB,MimeTypeArray:W.fW,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.d2,RadioNodeList:W.d2,Plugin:W.aE,PluginArray:W.hb,RTCStatsReport:W.hk,HTMLSelectElement:W.hn,SourceBuffer:W.aF,SourceBufferList:W.hx,SpeechGrammar:W.aG,SpeechGrammarList:W.hy,SpeechRecognitionResult:W.aH,Storage:W.hC,CSSStyleSheet:W.ap,StyleSheet:W.ap,HTMLTableElement:W.dh,HTMLTableRowElement:W.hG,HTMLTableSectionElement:W.hH,HTMLTemplateElement:W.c4,TextTrack:W.aI,TextTrackCue:W.aq,VTTCue:W.aq,TextTrackCueList:W.hK,TextTrackList:W.hL,TimeRanges:W.hQ,Touch:W.aJ,TouchEvent:W.bw,TouchList:W.hU,TrackDefaultList:W.hV,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.i9,VideoTrackList:W.ip,WheelEvent:W.bc,Window:W.cd,DOMWindow:W.cd,CSSRuleList:W.iy,ClientRect:W.dC,DOMRect:W.dC,GamepadList:W.iC,NamedNodeMap:W.dW,MozNamedAttrMap:W.dW,SpeechRecognitionResultList:W.iP,StyleSheetList:W.iQ,SVGLength:P.b3,SVGLengthList:P.ft,SVGNumber:P.b7,SVGNumberList:P.h6,SVGPointList:P.he,SVGScriptElement:P.c2,SVGStringList:P.hF,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b9,SVGTransformList:P.hW,AudioBuffer:P.eC,AudioParamMap:P.eD,AudioTrackList:P.eF,AudioContext:P.bg,webkitAudioContext:P.bg,BaseAudioContext:P.bg,OfflineAudioContext:P.h7,WebGL2RenderingContext:P.da,SQLResultSetRowList:P.hA})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d_.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.bY.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.d0.$nativeSuperclassTag="ArrayBufferView"
W.cj.$nativeSuperclassTag="EventTarget"
W.ck.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"
W.cm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.kE,[])
else B.kE([])})})()
//# sourceMappingURL=test.dart.js.map
