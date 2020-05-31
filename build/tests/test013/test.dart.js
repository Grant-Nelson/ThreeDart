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
a[c]=function(){a[c]=function(){H.ni(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jX"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jX(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jL:function jL(){},
lK:function(a,b,c,d){if(!!a.$ip)return new H.f5(a,b,[c,d])
return new H.bY(a,b,[c,d])},
fu:function(){return new P.c5("No element")},
lE:function(){return new P.c5("Too many elements")},
m2:function(a,b){var u=J.aV(a)
if(typeof u!=="number")return u.F()
H.dg(a,0,u-1,b)},
dg:function(a,b,c,d){if(c-b<=32)H.m1(a,b,c,d)
else H.m0(a,b,c,d)},
m1:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bj(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.Z()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
m0:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a_(a4+a5,2),f=g-j,e=g+j,d=J.bj(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.Z()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.J(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a4()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
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
if(typeof l!=="number")return l.a4()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.Z()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.Z()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a4()
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
H.dg(a3,a4,t-2,a6)
H.dg(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.J(a6.$2(d.h(a3,t),b),0);)++t
for(;J.J(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a4()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dg(a3,t,s,a6)}else H.dg(a3,t,s,a6)},
l:function l(a){this.a=a},
p:function p(){},
cX:function cX(){},
b6:function b6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bY:function bY(a,b,c){this.a=a
this.b=b
this.$ti=c},
f5:function f5(a,b,c){this.a=a
this.b=b
this.$ti=c},
cZ:function cZ(a,b){this.a=null
this.b=a
this.c=b},
fK:function fK(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
iH:function iH(a,b){this.a=a
this.b=b},
cN:function cN(){},
il:function il(){},
dw:function dw(){},
ct:function(a){var u,t=H.nk(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
n2:function(a){return v.types[a]},
n9:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iy},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ai(a)
if(typeof u!=="string")throw H.c(H.aP(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c3:function(a){return H.lN(a)+H.kR(H.cs(a),0,null)},
lN:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibB){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ct(t.length>1&&C.b.aQ(t,0)===36?C.b.ag(t,1):t)},
kt:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lW:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aP(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.ba(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aP(s))}return H.kt(r)},
lV:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aP(s))
if(s<0)throw H.c(H.aP(s))
if(s>65535)return H.lW(a)}return H.kt(a)},
jO:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.ba(u,10))>>>0,56320|u&1023)}throw H.c(P.ap(a,0,1114111,null,null))},
bx:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lU:function(a){var u=H.bx(a).getFullYear()+0
return u},
lS:function(a){var u=H.bx(a).getMonth()+1
return u},
lO:function(a){var u=H.bx(a).getDate()+0
return u},
lP:function(a){var u=H.bx(a).getHours()+0
return u},
lR:function(a){var u=H.bx(a).getMinutes()+0
return u},
lT:function(a){var u=H.bx(a).getSeconds()+0
return u},
lQ:function(a){var u=H.bx(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.aP(a))},
f:function(a,b){if(a==null)J.aV(a)
throw H.c(H.bH(a,b))},
bH:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,s,null)
u=J.aV(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.db(b,s)},
mX:function(a,b,c){var u="Invalid value"
if(a>c)return new P.by(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.by(a,c,!0,b,"end",u)
return new P.ab(!0,b,"end",null)},
aP:function(a){return new P.ab(!0,a,null,null)},
mS:function(a){if(typeof a!=="number")throw H.c(H.aP(a))
return a},
c:function(a){var u
if(a==null)a=new P.d7()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.l3})
u.name=""}else u.toString=H.l3
return u},
l3:function(){return J.ai(this.dartException)},
u:function(a){throw H.c(a)},
o:function(a){throw H.c(P.aX(a))},
at:function(a){var u,t,s,r,q,p
a=H.l1(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i8(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i9:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kD:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ko:function(a,b){return new H.hf(a,b==null?null:b.method)},
jM:function(a,b){var u=b==null,t=u?null:b.method
return new H.fz(a,t,u?null:b.receiver)},
aw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jw(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ba(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jM(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ko(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.l6()
q=$.l7()
p=$.l8()
o=$.l9()
n=$.lc()
m=$.ld()
l=$.lb()
$.la()
k=$.lf()
j=$.le()
i=r.ab(u)
if(i!=null)return f.$1(H.jM(u,i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.jM(u,i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ko(u,i))}}return f.$1(new H.ik(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.di()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ab(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.di()
return a},
k_:function(a){var u
if(a==null)return new H.ec(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ec(a)},
n0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
n8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bG:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.n8)
a.$identity=u
return u},
ly:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hN().constructor.prototype):Object.create(new H.bL(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aj
if(typeof t!=="number")return t.G()
$.aj=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kc(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lu(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kc(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lu:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.n2,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kb:H.jz
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lv:function(a,b,c,d){var u=H.jz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kc:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lx(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lv(t,!r,u,b)
if(t===0){r=$.aj
if(typeof r!=="number")return r.G()
$.aj=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bM
return new Function(r+H.d(q==null?$.bM=H.eM("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aj
if(typeof r!=="number")return r.G()
$.aj=r+1
o+=r
r="return function("+o+"){return this."
q=$.bM
return new Function(r+H.d(q==null?$.bM=H.eM("self"):q)+"."+H.d(u)+"("+o+");}")()},
lw:function(a,b,c,d){var u=H.jz,t=H.kb
switch(b?-1:a){case 0:throw H.c(H.lZ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lx:function(a,b){var u,t,s,r,q,p,o,n=$.bM
if(n==null)n=$.bM=H.eM("self")
u=$.ka
if(u==null)u=$.ka=H.eM("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lw(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.aj
if(typeof u!=="number")return u.G()
$.aj=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.aj
if(typeof u!=="number")return u.G()
$.aj=u+1
return new Function(n+u+"}")()},
jX:function(a,b,c,d,e,f,g){return H.ly(a,b,c,d,!!e,!!f,g)},
jz:function(a){return a.a},
kb:function(a){return a.c},
eM:function(a){var u,t,s,r=new H.bL("self","target","receiver","name"),q=J.jJ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nd:function(a,b){throw H.c(H.lt(a,H.ct(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.nd(a,b)},
mZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lt:function(a,b){return new H.eN("CastError: "+P.jG(a)+": type '"+H.d(H.mO(a))+"' is not a subtype of type '"+b+"'")},
mO:function(a){var u,t=J.R(a)
if(!!t.$ibO){u=H.mZ(t)
if(u!=null)return H.ne(u)
return"Closure"}return H.c3(a)},
ni:function(a){throw H.c(new P.eY(a))},
lZ:function(a){return new H.hw(a)},
kX:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cs:function(a){if(a==null)return
return a.$ti},
nS:function(a,b,c){return H.ju(a["$a"+H.d(c)],H.cs(b))},
n1:function(a,b,c,d){var u=H.ju(a["$a"+H.d(c)],H.cs(b))
return u==null?null:u[d]},
jZ:function(a,b,c){var u=H.ju(a["$a"+H.d(b)],H.cs(a))
return u==null?null:u[c]},
ag:function(a,b){var u=H.cs(a)
return u==null?null:u[b]},
ne:function(a){return H.bi(a,null)},
bi:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ct(a[0].name)+H.kR(a,1,b)
if(typeof a=="function")return H.ct(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.mj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bi("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.G(p,a0[m])
l=u[q]
if(l!=null&&l!==P.X)p+=" extends "+H.bi(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bi(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bi(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bi(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.n_(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bi(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kR:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aq("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bi(p,c)}return"<"+u.i(0)+">"},
ju:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nQ:function(a,b,c){return a.apply(b,H.ju(J.R(b)["$a"+H.d(c)],H.cs(b)))},
nR:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
na:function(a){var u,t,s,r,q=$.kY.$1(a),p=$.jk[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kU.$2(a,q)
if(q!=null){p=$.jk[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jq[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.js(u)
$.jk[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jq[q]=u
return u}if(s==="-"){r=H.js(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.l_(a,u)
if(s==="*")throw H.c(P.kE(q))
if(v.leafTags[q]===true){r=H.js(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.l_(a,u)},
l_:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k1(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
js:function(a){return J.k1(a,!1,null,!!a.$iy)},
nb:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.js(u)
else return J.k1(u,c,null,null)},
n6:function(){if(!0===$.k0)return
$.k0=!0
H.n7()},
n7:function(){var u,t,s,r,q,p,o,n
$.jk=Object.create(null)
$.jq=Object.create(null)
H.n5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.l0.$1(q)
if(p!=null){o=H.nb(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
n5:function(){var u,t,s,r,q,p,o=C.B()
o=H.bF(C.C,H.bF(C.D,H.bF(C.r,H.bF(C.r,H.bF(C.E,H.bF(C.F,H.bF(C.G(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kY=new H.jn(r)
$.kU=new H.jo(q)
$.l0=new H.jp(p)},
bF:function(a,b){return a(b)||b},
lH:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.fj("Illegal RegExp pattern ("+String(p)+")",a))},
l2:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
l1:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
k4:function(a,b,c){var u=H.ng(a,b,c)
return u},
ng:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.l1(b),'g'),H.mY(c))},
i8:function i8(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hf:function hf(a,b){this.a=a
this.b=b},
fz:function fz(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
jw:function jw(a){this.a=a},
ec:function ec(a){this.a=a
this.b=null},
bO:function bO(){},
hV:function hV(){},
hN:function hN(){},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
hw:function hw(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fy:function fy(a){this.a=a},
fD:function fD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bu:function bu(a,b){this.a=a
this.$ti=b},
fE:function fE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jn:function jn(a){this.a=a},
jo:function jo(a){this.a=a},
jp:function jp(a){this.a=a},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cp:function(a){return a},
au:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bH(b,a))},
mi:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mX(a,b,c))
return b},
c1:function c1(){},
d2:function d2(){},
c0:function c0(){},
d3:function d3(){},
h6:function h6(){},
h7:function h7(){},
h8:function h8(){},
h9:function h9(){},
ha:function ha(){},
d4:function d4(){},
hb:function hb(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
n_:function(a){return J.ki(a?Object.keys(a):[],null)},
nk:function(a){return v.mangledGlobalNames[a]},
nc:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k1:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jm:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k0==null){H.n6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kE("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.k5()]
if(r!=null)return r
r=H.na(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.k5(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lF:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jy(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ap(a,0,4294967295,"length",null))
return J.ki(new Array(a),b)},
ki:function(a,b){return J.jJ(H.b(a,[b]))},
jJ:function(a){a.fixed$length=Array
return a},
lG:function(a,b){return J.cx(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.cQ.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.fw.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.X)return a
return J.jm(a)},
bj:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.X)return a
return J.jm(a)},
jl:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.X)return a
return J.jm(a)},
kW:function(a){if(typeof a=="number")return J.bV.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.bB.prototype
return a},
jY:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.bB.prototype
return a},
ez:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.X)return a
return J.jm(a)},
J:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).t(a,b)},
k7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kW(a).u(a,b)},
cw:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n9(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bj(a).h(a,b)},
ll:function(a,b,c){return J.ez(a).fe(a,b,c)},
lm:function(a,b,c,d){return J.ez(a).fC(a,b,c,d)},
cx:function(a,b){return J.kW(a).aJ(a,b)},
jx:function(a,b){return J.bj(a).C(a,b)},
eB:function(a,b){return J.jl(a).E(a,b)},
ln:function(a,b){return J.jl(a).H(a,b)},
lo:function(a){return J.ez(a).gfH(a)},
bK:function(a){return J.R(a).gJ(a)},
aU:function(a){return J.jl(a).gN(a)},
aV:function(a){return J.bj(a).gl(a)},
k8:function(a){return J.jl(a).hl(a)},
lp:function(a,b){return J.ez(a).ho(a,b)},
lq:function(a,b,c){return J.jY(a).b5(a,b,c)},
lr:function(a){return J.jY(a).hx(a)},
ai:function(a){return J.R(a).i(a)},
a:function a(){},
fw:function fw(){},
cS:function cS(){},
cT:function cT(){},
hj:function hj(){},
bB:function bB(){},
b4:function b4(){},
b2:function b2(a){this.$ti=a},
jK:function jK(a){this.$ti=a},
a_:function a_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bV:function bV(){},
cR:function cR(){},
cQ:function cQ(){},
b3:function b3(){}},P={
m6:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mP()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bG(new P.iJ(s),1)).observe(u,{childList:true})
return new P.iI(s,u,t)}else if(self.setImmediate!=null)return P.mQ()
return P.mR()},
m7:function(a){self.scheduleImmediate(H.bG(new P.iK(a),0))},
m8:function(a){self.setImmediate(H.bG(new P.iL(a),0))},
m9:function(a){P.jR(C.i,a)},
jR:function(a,b){var u=C.c.a_(a.a,1000)
return P.mg(u<0?0:u,b)},
kC:function(a,b){var u=C.c.a_(a.a,1000)
return P.mh(u<0?0:u,b)},
mg:function(a,b){var u=new P.ei()
u.dR(a,b)
return u},
mh:function(a,b){var u=new P.ei()
u.dS(a,b)
return u},
nO:function(a){return new P.bC(a,1)},
mc:function(){return C.W},
md:function(a){return new P.bC(a,3)},
mm:function(a,b){return new P.j7(a,[b])},
mI:function(){var u,t
for(;u=$.bE,u!=null;){$.cr=null
t=u.b
$.bE=t
if(t==null)$.cq=null
u.a.$0()}},
mN:function(){$.jV=!0
try{P.mI()}finally{$.cr=null
$.jV=!1
if($.bE!=null)$.k6().$1(P.kV())}},
mL:function(a){var u=new P.dD(a)
if($.bE==null){$.bE=$.cq=u
if(!$.jV)$.k6().$1(P.kV())}else $.cq=$.cq.b=u},
mM:function(a){var u,t,s=$.bE
if(s==null){P.mL(a)
$.cr=$.cq
return}u=new P.dD(a)
t=$.cr
if(t==null){u.b=s
$.bE=$.cr=u}else{u.b=t.b
$.cr=t.b=u
if(u.b==null)$.cq=u}},
kB:function(a,b){var u=$.af
if(u===C.e)return P.jR(a,b)
return P.jR(a,u.fI(b))},
m4:function(a,b){var u=$.af
if(u===C.e)return P.kC(a,b)
return P.kC(a,u.cV(b,P.dq))},
kS:function(a,b,c,d,e){var u={}
u.a=d
P.mM(new P.jh(u,e))},
mJ:function(a,b,c,d){var u,t=$.af
if(t===c)return d.$0()
$.af=c
u=t
try{t=d.$0()
return t}finally{$.af=u}},
mK:function(a,b,c,d,e){var u,t=$.af
if(t===c)return d.$1(e)
$.af=c
u=t
try{t=d.$1(e)
return t}finally{$.af=u}},
iJ:function iJ(a){this.a=a},
iI:function iI(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
iL:function iL(a){this.a=a},
ei:function ei(){this.c=0},
jb:function jb(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b){this.a=a
this.b=b},
bD:function bD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j7:function j7(a,b){this.a=a
this.$ti=b},
dD:function dD(a){this.a=a
this.b=null},
dk:function dk(){},
hQ:function hQ(){},
dq:function dq(){},
je:function je(){},
jh:function jh(a,b){this.a=a
this.b=b},
iY:function iY(){},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function(a,b){return new H.I([a,b])},
lI:function(a){return H.n0(a,new H.I([null,null]))},
bW:function(a){return new P.iV([a])},
jU:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mf:function(a,b){var u=new P.dU(a,b)
u.c=a.e
return u},
lD:function(a,b,c){var u,t
if(P.jW(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.a3.push(a)
try{P.ml(a,u)}finally{if(0>=$.a3.length)return H.f($.a3,-1)
$.a3.pop()}t=P.kz(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jI:function(a,b,c){var u,t
if(P.jW(a))return b+"..."+c
u=new P.aq(b)
$.a3.push(a)
try{t=u
t.a=P.kz(t.a,a,", ")}finally{if(0>=$.a3.length)return H.f($.a3,-1)
$.a3.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jW:function(a){var u,t
for(u=$.a3.length,t=0;t<u;++t)if(a===$.a3[t])return!0
return!1},
ml:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.d(n.gD(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.q()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.q();r=q,q=p){p=n.gD(n);++l
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
kk:function(a,b){var u,t,s=P.bW(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kl:function(a){var u,t={}
if(P.jW(a))return"{...}"
u=new P.aq("")
try{$.a3.push(a)
u.a+="{"
t.a=!0
J.ln(a,new P.fJ(t,u))
u.a+="}"}finally{if(0>=$.a3.length)return H.f($.a3,-1)
$.a3.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iV:function iV(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iW:function iW(a){this.a=a
this.c=this.b=null},
dU:function dU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ft:function ft(){},
fF:function fF(){},
t:function t(){},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
W:function W(){},
j1:function j1(){},
dV:function dV(){},
eP:function eP(){},
eT:function eT(){},
f7:function f7(){},
fq:function fq(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fp:function fp(a){this.a=a},
ip:function ip(){},
iq:function iq(){},
jc:function jc(a){this.b=0
this.c=a},
lC:function(a){if(a instanceof H.bO)return a.i(0)
return"Instance of '"+H.d(H.c3(a))+"'"},
lJ:function(a,b,c){var u,t,s=J.lF(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jN:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aU(a);u.q();)t.push(u.gD(u))
if(b)return t
return J.jJ(t)},
jQ:function(a){var u,t=a.length,s=P.jP(0,null,t)
if(typeof s!=="number")return s.a4()
u=s<t
return H.lV(u?C.a.dC(a,0,s):a)},
lX:function(a){return new H.fx(a,H.lH(a,!1,!0,!1,!1,!1))},
kz:function(a,b,c){var u=J.aU(b)
if(!u.q())return a
if(c.length===0){do a+=H.d(u.gD(u))
while(u.q())}else{a+=H.d(u.gD(u))
for(;u.q();)a=a+c+H.d(u.gD(u))}return a},
kQ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.lk().b
u=u.test(b)}else u=!1
if(u)return b
t=C.I.fN(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jO(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lz:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lA:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cH:function(a){if(a>=10)return""+a
return"0"+a},
ke:function(a){return new P.aY(1000*a)},
jG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ai(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lC(a)},
ls:function(a){return new P.ab(!1,null,null,a)},
jy:function(a,b,c){return new P.ab(!0,a,b,c)},
db:function(a,b){return new P.by(null,null,!0,a,b,"Value not in range")},
ap:function(a,b,c,d,e){return new P.by(b,c,!0,a,d,"Invalid value")},
jP:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.ap(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.ap(b,a,c,"end",null))
return b}return c},
ku:function(a,b){if(typeof a!=="number")return a.a4()
if(a<0)throw H.c(P.ap(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.aV(b):e
return new P.fs(u,!0,a,c,"Index out of range")},
x:function(a){return new P.im(a)},
kE:function(a){return new P.ij(a)},
ky:function(a){return new P.c5(a)},
aX:function(a){return new P.eS(a)},
r:function(a){return new P.dM(a)},
k3:function(a){H.nc(a)},
av:function av(){},
a8:function a8(a,b){this.a=a
this.b=b},
N:function N(){},
aY:function aY(a){this.a=a},
f3:function f3(){},
f4:function f4(){},
br:function br(){},
d7:function d7(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fs:function fs(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
im:function im(a){this.a=a},
ij:function ij(a){this.a=a},
c5:function c5(a){this.a=a},
eS:function eS(a){this.a=a},
hi:function hi(){},
di:function di(){},
eY:function eY(a){this.a=a},
dM:function dM(a){this.a=a},
fj:function fj(a,b){this.a=a
this.b=b},
fl:function fl(){},
w:function w(){},
h:function h(){},
fv:function fv(){},
ad:function ad(){},
bX:function bX(){},
b8:function b8(){},
a6:function a6(){},
X:function X(){},
m:function m(){},
aq:function aq(a){this.a=a},
mV:function(a){var u,t=J.R(a)
if(!!t.$ib_){u=t.gd0(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.en(a.data,a.height,a.width)},
mU:function(a){if(a instanceof P.en)return{data:a.a,height:a.b,width:a.c}
return a},
aQ:function(a){var u,t,s,r,q
if(a==null)return
u=P.kj(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mT:function(a){var u={}
a.H(0,new P.ji(u))
return u},
en:function en(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
fg:function fg(){},
fh:function fh(){},
iU:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
me:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iX:function iX(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b5:function b5(){},
fB:function fB(){},
b9:function b9(){},
hg:function hg(){},
ho:function ho(){},
c4:function c4(){},
hR:function hR(){},
j:function j(){},
bb:function bb(){},
i7:function i7(){},
dS:function dS(){},
dT:function dT(){},
e2:function e2(){},
e3:function e3(){},
ee:function ee(){},
ef:function ef(){},
el:function el(){},
em:function em(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(a){this.a=a},
eJ:function eJ(){},
bm:function bm(){},
hh:function hh(){},
dE:function dE(){},
dd:function dd(){},
hM:function hM(){},
ea:function ea(){},
eb:function eb(){}},W={
k9:function(){var u=document.createElement("a")
return u},
jB:function(){var u=document.createElement("canvas")
return u},
lB:function(a,b,c){var u=document.body,t=(u&&C.n).aa(u,a,b,c)
t.toString
u=new H.ce(new W.Z(t),new W.f6(),[W.D])
return u.gaA(u)},
jE:function(a){return"wheel"},
bQ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ez(a)
t=u.gdq(a)
if(typeof t==="string")r=u.gdq(a)}catch(s){H.aw(s)}return r},
iT:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kO:function(a,b,c,d){var u=W.iT(W.iT(W.iT(W.iT(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
U:function(a,b,c,d){var u=W.kT(new W.iR(c),W.i)
if(u!=null&&!0)J.lm(a,b,u,!1)
return new W.iQ(a,b,u,!1)},
kN:function(a){var u=W.k9(),t=window.location
u=new W.cg(new W.j0(u,t))
u.dN(a)
return u},
ma:function(a,b,c,d){return!0},
mb:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kP:function(){var u=P.m,t=P.kk(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.j8(t,P.bW(u),P.bW(u),P.bW(u),null)
t.dQ(null,new H.fK(C.k,new W.j9(),[H.ag(C.k,0),u]),s,null)
return t},
kT:function(a,b){var u=$.af
if(u===C.e)return a
return u.cV(a,b)},
n:function n(){},
eC:function eC(){},
eD:function eD(){},
eE:function eE(){},
cA:function cA(){},
bn:function bn(){},
bp:function bp(){},
aW:function aW(){},
eU:function eU(){},
H:function H(){},
bP:function bP(){},
eV:function eV(){},
a7:function a7(){},
ak:function ak(){},
eW:function eW(){},
eX:function eX(){},
f_:function f_(){},
ac:function ac(){},
f0:function f0(){},
cJ:function cJ(){},
cK:function cK(){},
f1:function f1(){},
f2:function f2(){},
iN:function iN(a,b){this.a=a
this.b=b},
P:function P(){},
f6:function f6(){},
i:function i(){},
e:function e(){},
aC:function aC(){},
fd:function fd(){},
fe:function fe(){},
fi:function fi(){},
aD:function aD(){},
fo:function fo(){},
bS:function bS(){},
b_:function b_(){},
bT:function bT(){},
bt:function bt(){},
fG:function fG(){},
h_:function h_(){},
h0:function h0(){},
h1:function h1(a){this.a=a},
h2:function h2(){},
h3:function h3(a){this.a=a},
aF:function aF(){},
h4:function h4(){},
an:function an(){},
Z:function Z(a){this.a=a},
D:function D(){},
d5:function d5(){},
aI:function aI(){},
hl:function hl(){},
hu:function hu(){},
hv:function hv(a){this.a=a},
hx:function hx(){},
aK:function aK(){},
hJ:function hJ(){},
aL:function aL(){},
hK:function hK(){},
aM:function aM(){},
hO:function hO(){},
hP:function hP(a){this.a=a},
ar:function ar(){},
dl:function dl(){},
hS:function hS(){},
hT:function hT(){},
c6:function c6(){},
aN:function aN(){},
as:function as(){},
hW:function hW(){},
hX:function hX(){},
i1:function i1(){},
aO:function aO(){},
bz:function bz(){},
i5:function i5(){},
i6:function i6(){},
bc:function bc(){},
io:function io(){},
iG:function iG(){},
bh:function bh(){},
cf:function cf(){},
iO:function iO(){},
dG:function dG(){},
iS:function iS(){},
e_:function e_(){},
j4:function j4(){},
j5:function j5(){},
iM:function iM(){},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iR:function iR(a){this.a=a},
cg:function cg(a){this.a=a},
K:function K(){},
d6:function d6(a){this.a=a},
hd:function hd(a){this.a=a},
hc:function hc(a,b,c){this.a=a
this.b=b
this.c=c},
e7:function e7(){},
j2:function j2(){},
j3:function j3(){},
j8:function j8(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j9:function j9(){},
j6:function j6(){},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aH:function aH(){},
j0:function j0(a,b){this.a=a
this.b=b},
eo:function eo(a){this.a=a},
jd:function jd(a){this.a=a},
dF:function dF(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dN:function dN(){},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
cl:function cl(){},
cm:function cm(){},
e8:function e8(){},
e9:function e9(){},
ed:function ed(){},
eg:function eg(){},
eh:function eh(){},
cn:function cn(){},
co:function co(){},
ej:function ej(){},
ek:function ek(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){}},K={
M:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aQ(a,0)
t=C.b.aQ(b,0)
if(u>t){s=t
t=u
u=s}return new K.hp(u,t)},
q:function(a){var u=new K.hy()
u.dL(a)
return u},
ax:function ax(){},
cP:function cP(){},
b7:function b7(){},
a1:function a1(){this.a=null},
hp:function hp(a,b){this.a=a
this.b=b},
hy:function hy(){this.a=null}},L={
i3:function(){var u=new L.i2(),t=P.m
u.a=new H.I([t,L.dj])
u.b=new H.I([t,L.ds])
u.c=P.bW(t)
return u},
dj:function dj(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dr:function dr(a,b,c){this.a=a
this.b=b
this.c=c},
ds:function ds(a){this.b=a
this.c=null},
i2:function i2(){var _=this
_.d=_.c=_.b=_.a=null},
du:function du(a){this.b=a
this.a=this.c=null}},O={
jC:function(a){var u=new O.ay([a])
u.b7(a)
return u},
ay:function ay(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
d_:function d_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
fV:function fV(){},
fW:function fW(a,b){this.a=a
this.b=b},
fX:function fX(){},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(){},
fM:function fM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d0:function d0(){},
fN:function fN(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
al:function al(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fP:function fP(){var _=this
_.e=_.d=_.c=_.b=null},
fQ:function fQ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fR:function fR(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
df:function df(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dm:function dm(){}},E={
kh:function(){var u,t=new E.aB()
t.a=""
t.b=!0
u=O.jC(E.aB)
t.y=u
u.aM(t.gh6(),t.gh9())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbp(0,null)
return t},
kL:function(){if(J.jx(window.navigator.vendor,"Google"))return C.z
if(J.jx(window.navigator.userAgent,"Firefox"))return C.o
var u=window.navigator.appVersion
if(J.bj(u).C(u,"Trident")||C.b.C(u,"Edge"))return C.p
if(J.jx(window.navigator.appName,"Microsoft"))return C.p
return C.A},
kM:function(){var u=window.navigator.appVersion
if(J.bj(u).C(u,"Win"))return C.S
if(C.b.C(u,"Mac"))return C.u
if(C.b.C(u,"Linux"))return C.T
return C.U},
lY:function(a,b){var u=new E.hq(a)
u.dK(a,b)
return u},
m3:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibp)return E.kA(a,!0,!0,!0,!1)
u=W.jB()
t=u.style
t.width="100%"
t.height="100%"
s.gcY(a).n(0,u)
return E.kA(u,!0,!0,!0,!1)},
kA:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dp(),o=C.f.ce(a,"webgl2",P.lI(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.u(P.r("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.lY(o,a)
u=new T.hZ(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dx(a)
t=new X.fA()
t.c=new X.a9(!1,!1,!1)
t.d=P.bW(P.w)
u.b=t
t=new X.h5(u)
t.f=0
t.r=V.aJ()
t.x=V.aJ()
t.ch=t.Q=1
u.c=t
t=new X.fH(u)
t.r=0
t.x=V.aJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i4(u)
t.f=V.aJ()
t.r=V.aJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dk,P.X]])
t=$.f8
u.Q=(t==null?$.f8=new E.dL(E.kL(),E.kM()):t).a===C.o?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.U(r,"contextmenu",u.gew(),!1))
u.z.push(W.U(a,"focus",u.geC(),!1))
u.z.push(W.U(a,"blur",u.gep(),!1))
u.z.push(W.U(r,"keyup",u.geG(),!1))
u.z.push(W.U(r,"keydown",u.geE(),!1))
u.z.push(W.U(a,"mousedown",u.geK(),!1))
u.z.push(W.U(a,"mouseup",u.geO(),!1))
u.z.push(W.U(a,q,u.geM(),!1))
s=u.z
W.jE(a)
W.jE(a)
s.push(W.U(a,W.jE(a),u.geQ(),!1))
u.z.push(W.U(r,q,u.gey(),!1))
u.z.push(W.U(r,"mouseup",u.geA(),!1))
u.z.push(W.U(r,"pointerlockchange",u.geS(),!1))
u.z.push(W.U(a,"touchstart",u.gf7(),!1))
u.z.push(W.U(a,"touchend",u.gf3(),!1))
u.z.push(W.U(a,"touchmove",u.gf5(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a8(Date.now(),!1)
p.db=0
p.cG()
return p},
eL:function eL(){},
aB:function aB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bo:function bo(a){this.b=a},
bw:function bw(a){this.b=a},
dL:function dL(a,b){this.a=a
this.b=b},
hq:function hq(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hr:function hr(a){this.a=a},
hs:function hs(a){this.a=a},
ht:function ht(a){this.a=a},
dp:function dp(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
i0:function i0(a){this.a=a}},Z={
kK:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cp(c)),35044)
a.bindBuffer(b,null)
return new Z.dB(b,u)},
aa:function(a){return new Z.bg(a)},
dB:function dB(a,b){this.a=a
this.b=b},
cB:function cB(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dC:function dC(a){this.a=a},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bU:function bU(a,b,c){this.a=a
this.b=b
this.c=c},
bg:function bg(a){this.a=a}},D={
C:function(){var u=new D.bs()
u.d=0
return u},
eO:function eO(){},
bs:function bs(){var _=this
_.d=_.c=_.b=_.a=null},
fa:function fa(a){this.a=a},
fb:function fb(a){this.a=a},
T:function T(){this.b=null},
b0:function b0(){this.b=null},
b1:function b1(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eK:function eK(){},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a0:function a0(){},
cV:function cV(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hm:function hm(){},
hL:function hL(){}},X={cC:function cC(a,b){this.a=a
this.b=b},cU:function cU(a,b){this.a=a
this.b=b},fA:function fA(){var _=this
_.d=_.c=_.b=_.a=null},cY:function cY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fH:function fH(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a9:function a9(a,b,c){this.a=a
this.b=b
this.c=c},aG:function aG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h5:function h5(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hn:function hn(){},dt:function dt(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i4:function i4(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dx:function dx(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jH:function(a){var u=new X.fk(),t=new V.az(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kw
if(t==null){t=V.kv(0,0,1,1)
$.kw=t}u.r=t
return u},
kp:function(a){var u,t,s=new X.d8()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.gdT())
t=new D.z("mover",u,s.b)
t.b=!0
s.ah(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.B().a)){s.c=1.0471975511965976
t=new D.z("fov",t,1.0471975511965976)
t.b=!0
s.ah(t)}t=s.d
if(!(Math.abs(t-0.1)<$.B().a)){s.d=0.1
t=new D.z("near",t,0.1)
t.b=!0
s.ah(t)}t=s.e
if(!(Math.abs(t-2000)<$.B().a)){s.e=2000
t=new D.z("far",t,2000)
t.b=!0
s.ah(t)}return s},
jA:function jA(){},
fk:function fk(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fr:function fr(){this.b=this.a=null},
d8:function d8(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hU:function hU(){}},V={
eQ:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.az(u,t,s,1)},
nl:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.du(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.b.au("null",c)
return C.b.au(C.d.dr(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bI:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.au(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
k2:function(a){return C.d.hu(Math.pow(2,C.N.bZ(Math.log(H.mS(a))/Math.log(2))))},
bv:function(){var u=$.kn
return u==null?$.kn=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
km:function(a,b,c){var u=c.v(0,Math.sqrt(c.w(c))),t=b.aq(u),s=t.v(0,Math.sqrt(t.w(t))),r=u.aq(s),q=new V.A(a.a,a.b,a.c),p=s.P(0).w(q),o=r.P(0).w(q),n=u.P(0).w(q)
return V.am(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aJ:function(){var u=$.kr
return u==null?$.kr=new V.Y(0,0):u},
ks:function(){var u=$.ao
return u==null?$.ao=new V.Q(0,0,0):u},
kv:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dc(a,b,c,d)},
cd:function(){var u=$.kI
return u==null?$.kI=new V.A(0,0,0):u},
m5:function(){var u=$.ir
return u==null?$.ir=new V.A(-1,0,0):u},
jT:function(){var u=$.is
return u==null?$.is=new V.A(0,1,0):u},
kJ:function(){var u=$.it
return u==null?$.it=new V.A(0,0,1):u},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a){this.a=a},
d1:function d1(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aE:function aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Y:function Y(a,b){this.a=a
this.b=b},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
ba:function ba(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dc:function dc(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function(a){P.m4(C.K,new V.jt(a))},
m_:function(a){var u=new V.hD()
u.dM(a,!0)
return u},
cD:function cD(){},
jt:function jt(a){this.a=a},
eZ:function eZ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fm:function fm(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fn:function fn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hk:function hk(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hD:function hD(){this.b=this.a=null},
hF:function hF(a){this.a=a},
hE:function hE(a){this.a=a},
hG:function hG(a){this.a=a}},U={
jD:function(){var u=new U.eR()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kd:function(a){var u=new U.cF()
u.a=a
return u},
eR:function eR(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cF:function cF(){this.b=this.a=null},
bR:function bR(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a4:function a4(){},
dy:function dy(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dz:function dz(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cE:function cE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cG:function cG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cL:function cL(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ae:function ae(){}},A={
lL:function(a,b){var u=a.aX,t=new A.fL(b,u)
t.cm(b,u)
t.dJ(a,b)
return t},
lM:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gaf(a2)+a3.gaf(a3)+a4.gaf(a4)+a5.gaf(a5)+a6.gaf(a6)+a7.gaf(a7)+a8.gaf(a8)+a9.gaf(a9)+b0.gaf(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.o)(b1),++t)d+="_"+H.d(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.o)(b2),++t)d+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.o)(b3),++t)d+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.o)(b4),++t)d+="_"+H.d(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
for(q=b2.length,t=0;t<q;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(p=b4.length,t=0;t<p;++t,r=!0)s+=b4[t].b
if(!a8.a)p=!1
else p=!0
if(!p)if(!a9.a)o=!1
else o=!0
else o=!0
n=u>0
if(!a3.a)u=!1
else u=!0
if(!u){if(!a4.a)u=!1
else u=!0
if(!u){if(!a5.a)u=!1
else u=!0
if(!u)if(!a6.a)u=!1
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a6.a
if(u)p=!1
else p=!0
l=p||n||q>0||o
if(!a4.a)q=!1
else q=!0
if(!q){if(!a5.a)q=!1
else q=!0
if(!q){if(u)u=!1
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a7.a)u=!1
else u=!0
j=u||o}else j=!0
if(!a7.a)i=!1
else i=!0
h=a1>0
g=j||i||l||!1
f=n&&k
e=$.ah()
if(j){u=$.aT()
e=new Z.bg(e.a|u.a)}if(i){u=$.aS()
e=new Z.bg(e.a|u.a)}if(h){u=$.aR()
e=new Z.bg(e.a|u.a)}return new A.fO(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jf:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jg:function(a,b,c){var u
A.jf(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eA(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
mr:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jf(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
mn:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jg(b,t,"ambient")
b.a+="\n"},
mp:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jg(b,t,"diffuse")
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
ms:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jg(b,t,"invDiffuse")
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
my:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jg(b,t,"specular")
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
mu:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u+="\n"
b.a=u
u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f.a
if(!t)s=!1
else s=!0
if(!s||t)u=b.a=u+"   return normalize(normalVec);\n"
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
mw:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jf(b,t,"reflect")
t=b.a+="\n"
t+="vec3 reflect(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   vec3 scalar = reflectClr;\n"
b.a=t}t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
mx:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jf(b,t,"refract")
t=b.a+="uniform float refraction;\n"
t+="\n"
b.a=t
t+="vec3 refract(vec3 refl)\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   vec3 scalar = refractClr;\n"
b.a=t}t+="   vec3 refr = mix(-refl, viewPos, refraction);\n"
b.a=t
t+="   vec3 invRefr = vec3(invViewMat*vec4(refr, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefr).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
mo:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.eA(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.m]
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
if(!a.b.a)u=!1
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
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
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
mq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.eA(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ac()
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
r=[P.m]
o=H.b([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
if(!a.c.a)r=!1
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
if(!a.d.a)r=!1
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
if(!a.e.a)r=!1
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
mv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.eA(t)
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
if(typeof u!=="number")return u.ac()
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
c.a=r+"\n"}r=[P.m]
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
if(!a.b.a)o=!1
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
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
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
mz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.eA(t)
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
if(typeof u!=="number")return u.ac()
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
if(o){u=$.f8
if(u==null)u=$.f8=new E.dL(E.kL(),E.kM())
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
c.a=u+"\n"}u=[P.m]
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
if(!a.b.a)r=!1
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
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
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
mt:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.m])
if(!a.b.a)u=!1
else u=!0
if(u)t.push("ambientColor")
if(!a.c.a)u=!1
else u=!0
if(u)t.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mA:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aq("")
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
A.mr(a,j)
A.mn(a,j)
A.mp(a,j)
A.ms(a,j)
A.my(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mw(a,j)
A.mx(a,j)}A.mu(a,j)
r=j.a+="// === Alpha ===\n"
r=j.a=r+"\n"
q=a.y.a
if(q)r=j.a=r+"uniform float alpha;\n"
r+="float alphaValue()\n"
j.a=r
r=j.a=r+"{\n"
if(!q)p=!1
else p=!0
if(!p)r=j.a=r+"   return 1.0;\n"
else if(q){r+="   return alpha;\n"
j.a=r}r+="}\n"
j.a=r
j.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mo(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mq(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mv(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.o)(q),++o)A.mz(a,q[o],j)
A.mt(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.m])
if(r){j.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
n.push("lightAccum")
if(!a.b.a)u=!1
else u=!0
if(u)j.a+="   setAmbientColor();\n"
if(!a.c.a)u=!1
else u=!0
if(u)j.a+="   setDiffuseColor();\n"
if(!a.d.a)u=!1
else u=!0
if(u)j.a+="   setInvDiffuseColor();\n"
if(!a.e.a)u=!1
else u=!0
if(u)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.o)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ag(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mB:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.be+"];\n"
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
mD:function(a,b){var u
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
mC:function(a,b){var u
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
mF:function(a,b){var u,t
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
mG:function(a,b){var u,t
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
mE:function(a,b){var u
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
mH:function(a,b){var u
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
eA:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.ag(a,1)},
jS:function(a,b,c,d,e){var u=new A.ib(a,c,e)
u.f=d
P.lJ(d,0,P.w)
return u},
cy:function cy(a,b,c){this.a=a
this.b=b
this.c=c},
eF:function eF(a){this.a=a},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
fL:function fL(a,b){var _=this
_.hI=_.hH=_.bf=_.aX=_.be=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hV=_.hU=_.hT=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.hS=_.hR=_.dc=_.hQ=_.hP=_.da=_.d9=_.hO=_.hN=_.d8=_.d7=_.hM=_.hL=_.d6=_.hK=_.hJ=_.d5=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cz:function cz(a,b){this.a=a
this.b=b},
cI:function cI(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
dh:function dh(a,b){this.a=a
this.b=b},
fO:function fO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.be=b3
_.aX=b4
_.bf=b5},
c8:function c8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cb:function cb(a,b,c,d,e,f,g,h,i,j){var _=this
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
cc:function cc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
de:function de(){},
hI:function hI(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dv:function dv(){},
ih:function ih(a){this.a=a},
bd:function bd(a,b,c){this.a=a
this.c=b
this.d=c},
id:function id(a,b,c){this.a=a
this.c=b
this.d=c},
ie:function ie(a,b,c){this.a=a
this.c=b
this.d=c},
ig:function ig(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
O:function O(a,b,c){this.a=a
this.c=b
this.d=c},
ic:function ic(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
c7:function c7(a,b,c){this.a=a
this.c=b
this.d=c},
ii:function ii(a,b,c){this.a=a
this.c=b
this.d=c},
ca:function ca(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c},
bA:function bA(a,b,c){this.a=a
this.c=b
this.d=c},
be:function be(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nj:function(){return F.mW(15,30,0.5,1,new F.jv())},
mW:function(a,b,c,d,e){var u=F.nh(a,b,new F.jj(e,d,b,c))
if(u==null)return
u.ap()
u.h5(new F.iA(),new F.he())
return u},
nh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kx()
t=H.b([],[F.bf])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iu(g,g,new V.az(p,0,0,1),g,g,new V.Y(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.d_(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iu(g,g,new V.az(j,i,h,1),g,g,new V.Y(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.d_(g))}}u.d.fE(a+1,b+1,t)
return u},
cM:function(a,b,c){var u=new F.aZ(),t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.fm(a)
u.fn(b)
u.fo(c)
u.a.a.d.b.push(u)
u.a.a.a7()
return u},
kx:function(){var u=new F.hz(),t=new F.iv(u)
t.b=!1
t.c=H.b([],[F.bf])
u.a=t
t=new F.hC()
t.b=H.b([],[F.d9])
u.b=t
t=new F.hB(u)
t.b=H.b([],[F.cW])
u.c=t
t=new F.hA(u)
t.b=H.b([],[F.aZ])
u.d=t
u.e=null
return u},
iu:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bf(),r=new F.iD()
r.b=H.b([],[F.d9])
s.b=r
r=new F.iz()
u=[F.cW]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iw()
u=[F.aZ]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.lg()
s.e=0
r=$.ah()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aT().a)!==0?e:t
s.x=(u&$.aS().a)!==0?b:t
s.y=(u&$.bk().a)!==0?f:t
s.z=(u&$.bl().a)!==0?g:t
s.Q=(u&$.lh().a)!==0?c:t
s.ch=(u&$.bJ().a)!==0?i:0
s.cx=(u&$.aR().a)!==0?a:t
return s},
jv:function jv(){},
jj:function jj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aZ:function aZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fc:function fc(){},
hH:function hH(){},
cW:function cW(){},
fC:function fC(){},
ia:function ia(){},
d9:function d9(){},
hz:function hz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hA:function hA(a){this.a=a
this.b=null},
hB:function hB(a){this.a=a
this.b=null},
hC:function hC(){this.b=null},
bf:function bf(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iF:function iF(a){this.a=a},
iE:function iE(a){this.a=a},
iv:function iv(a){this.a=a
this.c=this.b=null},
iw:function iw(){this.d=this.c=this.b=null},
ix:function ix(a,b){this.a=a
this.b=b},
iy:function iy(a,b){this.a=a
this.b=b},
iz:function iz(){this.c=this.b=null},
iB:function iB(){},
iA:function iA(){},
iC:function iC(){},
he:function he(){},
iD:function iD(){this.b=null}},T={dn:function dn(){},hY:function hY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hZ:function hZ(a){var _=this
_.a=a
_.e=_.d=_.c=null},i_:function i_(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},B={
kZ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6="modifiers",a7=34067,a8=V.m_("Test 013"),a9=W.jB()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.m]
a8.cP(H.b(["Test of sky box and cover pass."],u))
a8.cP(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.m3(t,!0,!0,!0,!1)
r=new U.bR()
r.b7(U.a4)
r.aM(r.geh(),r.geW())
r.e=null
r.f=V.bv()
r.r=0
u=s.x
q=new U.dz()
p=U.jD()
p.scd(0,!0)
p.sc1(6.283185307179586)
p.sc3(0)
p.sa5(0,0)
p.sc2(100)
p.sS(0)
p.sbQ(0.5)
q.b=p
o=q.gaE()
p.gp().n(0,o)
p=U.jD()
p.scd(0,!0)
p.sc1(6.283185307179586)
p.sc3(0)
p.sa5(0,0)
p.sc2(100)
p.sS(0)
p.sbQ(0.5)
q.c=p
p.gp().n(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.a9(!1,!1,!1)
m=q.d
q.d=n
p=new D.z(a6,m,n)
p.b=!0
q.M(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.z("invertX",p,!1)
p.b=!0
q.M(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.z("invertY",p,!1)
p.b=!0
q.M(p)}q.aU(u)
r.n(0,q)
u=s.x
q=new U.dy()
p=U.jD()
p.scd(0,!0)
p.sc1(6.283185307179586)
p.sc3(0)
p.sa5(0,0)
p.sc2(100)
p.sS(0)
p.sbQ(0.2)
q.b=p
p.gp().n(0,q.gaE())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.a9(!0,!1,!1)
m=q.c
q.c=n
p=new D.z(a6,m,n)
p.b=!0
q.M(p)
q.aU(u)
r.n(0,q)
u=s.x
q=new U.dA()
q.c=0.01
q.e=q.d=0
n=new X.a9(!1,!1,!1)
q.b=n
p=new D.z(a6,a5,n)
p.b=!0
q.M(p)
q.aU(u)
r.n(0,q)
r.n(0,U.kd(V.am(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=X.kp(r)
k=X.jH(a5)
if(k.b){k.b=!1
u=new D.z("clearColor",!0,!1)
u.b=!0
k.ah(u)}j=E.kh()
j.sbp(0,F.nj())
i=new O.d_()
u=O.jC(V.aE)
i.e=u
u.aM(i.gel(),i.gen())
u=new O.al(i,"emission")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
i.f=u
u=new O.al(i,"ambient")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
i.r=u
u=new O.al(i,"diffuse")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
i.x=u
u=new O.al(i,"invDiffuse")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
i.y=u
u=new O.fR(i,"specular")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
u.ch=100
i.z=u
u=new O.fN(i,"bump")
u.c=new A.V(!1,!1,!1)
i.Q=u
i.ch=null
u=new O.al(i,"reflect")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
i.cx=u
u=new O.fQ(i,"refract")
u.c=new A.V(!1,!1,!1)
u.f=new V.S(0,0,0)
u.ch=1
i.cy=u
u=new O.fM(i,"alpha")
u.c=new A.V(!1,!1,!1)
u.f=1
i.db=u
u=new D.cV()
u.b7(D.a0)
u.e=H.b([],[D.eK])
u.f=H.b([],[D.bq])
u.r=H.b([],[D.hm])
u.x=H.b([],[D.hL])
u.z=u.y=null
u.cg(u.gej(),u.geU(),u.geY())
i.dx=u
q=new O.fP()
q.b=new V.az(0,0,0,0)
q.c=1
q.d=10
q.e=!1
i.dy=q
q=u.y
u=q==null?u.y=D.C():q
u.n(0,i.gfg())
u=i.dx
q=u.z
u=q==null?u.z=D.C():q
u.n(0,i.gbs())
i.fr=null
u=i.dx
h=V.jT()
q=U.kd(V.km(V.ks(),h,new V.A(0,-1,-1)))
g=new V.S(1,1,1)
p=new D.bq()
p.c=new V.S(1,1,1)
p.a=V.kJ()
p.d=V.jT()
p.e=V.m5()
m=p.b
p.b=q
q.gp().n(0,p.gdO())
q=new D.z("mover",m,p.b)
q.b=!0
p.al(q)
if(!p.c.t(0,g)){m=p.c
p.c=g
q=new D.z("color",m,g)
q.b=!0
p.al(q)}u.n(0,p)
u=i.r
u.saI(0,new V.S(0,0,1))
u=i.x
u.saI(0,new V.S(0,1,0))
u=i.z
u.saI(0,new V.S(1,0,0))
u=i.z
u.cI(new A.V(!0,!1,!1))
u.cJ(10)
u=s.f
q=u.a
f=q.createTexture()
q.bindTexture(a7,f)
q.texParameteri(a7,10242,10497)
q.texParameteri(a7,10243,10497)
q.texParameteri(a7,10241,9729)
q.texParameteri(a7,10240,9729)
q.bindTexture(a7,a5)
e=new T.hY()
e.a=0
e.b=f
e.c=!1
e.d=0
u.aD(e,f,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aD(e,f,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aD(e,f,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aD(e,f,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aD(e,f,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aD(e,f,"../resources/maskonaive/negz.jpg",34074,!1,!1)
d=new M.cG()
d.a=!0
u=E.kh()
c=F.kx()
q=c.a
p=new V.A(-1,-1,1)
p=p.v(0,Math.sqrt(p.w(p)))
b=q.bc(new V.ba(1,2,4,6),V.eQ(255,0,0),new V.Q(-1,-1,0),new V.Y(0,1),p,a5)
p=c.a
q=new V.A(1,-1,1)
q=q.v(0,Math.sqrt(q.w(q)))
a=p.bc(new V.ba(0,3,4,6),V.eQ(0,0,255),new V.Q(1,-1,0),new V.Y(1,1),q,a5)
q=c.a
p=new V.A(1,1,1)
p=p.v(0,Math.sqrt(p.w(p)))
a0=q.bc(new V.ba(0,2,5,6),V.eQ(0,128,0),new V.Q(1,1,0),new V.Y(1,0),p,a5)
p=c.a
q=V.aJ()
o=new V.A(-1,1,1)
o=o.v(0,Math.sqrt(o.w(o)))
a1=p.bc(new V.ba(0,2,4,7),V.eQ(255,255,0),new V.Q(-1,1,0),q,o,a5)
c.d.fD(H.b([b,a,a0,a1],[F.bf]))
c.ap()
u.sbp(0,c)
d.e=u
d.saV(a5)
d.sb2(0,a5)
d.sb3(a5)
u=new O.df()
u.b=1.0471975511965976
u.d=new V.S(1,1,1)
m=u.c
u.c=e
e.gp().n(0,u.gbs())
q=new D.z("boxTexture",m,u.c)
q.b=!0
u.Y(q)
d.sb3(u)
d.sb2(0,k)
d.saV(l)
a2=new M.cL()
a2.a=!0
u=O.jC(E.aB)
a2.e=u
u.aM(a2.ger(),a2.geu())
a2.y=a2.x=a2.r=a2.f=null
a3=X.jH(a5)
a2.saV(a5)
a2.sb2(0,a3)
a2.sb3(a5)
a2.saV(l)
a2.sb3(i)
a2.sb2(0,k)
a2.e.n(0,j)
u=M.ae
q=H.b([d,a2],[u])
p=new M.cE()
p.b7(u)
p.e=!0
p.f=!1
p.r=null
p.aM(p.gf_(),p.gf1())
p.a0(0,q)
u=s.d
if(u!==p){if(u!=null)u.gp().O(0,s.gco())
s.d=p
p.gp().n(0,s.gco())
s.cp()}u=s.Q
if(u==null)u=s.Q=D.C()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.T]}]):q
u.push(new B.jr(d,a8))
V.nf(s)},
jr:function jr(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jL.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.d(H.c3(a))+"'"}}
J.fw.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iav:1}
J.cS.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.cT.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)}}
J.hj.prototype={}
J.bB.prototype={}
J.b4.prototype={
i:function(a){var u=a[$.l5()]
if(u==null)return this.dG(a)
return"JavaScript function for "+H.d(J.ai(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b2.prototype={
c7:function(a,b){if(!!a.fixed$length)H.u(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.db(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.u(P.x("remove"))
for(u=0;u<a.length;++u)if(J.J(a[u],b)){a.splice(u,1)
return!0}return!1},
a0:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aX(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
h2:function(a){return this.k(a,"")},
h_:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aX(a))}throw H.c(H.fu())},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dC:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ap(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ap(c,b,u,"end",null))
if(b===c)return H.b([],[H.ag(a,0)])
return H.b(a.slice(b,c),[H.ag(a,0)])},
gfZ:function(a){if(a.length>0)return a[0]
throw H.c(H.fu())},
gbh:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fu())},
cR:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aX(a))}return!1},
aO:function(a,b){if(!!a.immutable$list)H.u(P.x("sort"))
H.m2(a,b==null?J.mk():b)},
dB:function(a){return this.aO(a,null)},
C:function(a,b){var u
for(u=0;u<a.length;++u)if(J.J(a[u],b))return!0
return!1},
i:function(a){return P.jI(a,"[","]")},
gN:function(a){return new J.a_(a,a.length)},
gJ:function(a){return H.c2(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jy(b,u,null))
if(b<0)throw H.c(P.ap(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bH(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bH(a,b))
a[b]=c},
$ip:1,
$ih:1}
J.jK.prototype={}
J.a_.prototype={
gD:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bV.prototype={
aJ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aP(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
hu:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
bZ:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
ad:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dr:function(a,b){var u
if(b>20)throw H.c(P.ap(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
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
du:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dI:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cK(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cK(a,b)},
cK:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
ba:function(a,b){var u
if(a>0)u=this.ft(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ft:function(a,b){return b>31?0:a>>>b},
$iN:1,
$ia6:1}
J.cR.prototype={$iw:1}
J.cQ.prototype={}
J.b3.prototype={
bP:function(a,b){if(b<0)throw H.c(H.bH(a,b))
if(b>=a.length)H.u(H.bH(a,b))
return a.charCodeAt(b)},
aQ:function(a,b){if(b>=a.length)throw H.c(H.bH(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(typeof b!=="string")throw H.c(P.jy(b,null,null))
return a+b},
bq:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b5:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.db(b,null))
if(b>c)throw H.c(P.db(b,null))
if(c>a.length)throw H.c(P.db(c,null))
return a.substring(b,c)},
ag:function(a,b){return this.b5(a,b,null)},
hx:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.H)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
au:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
fL:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.ap(c,0,u,null,null))
return H.l2(a,b,c)},
C:function(a,b){return this.fL(a,b,0)},
aJ:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aP(b))
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
$im:1}
H.l.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bP(this.a,b)},
$ap:function(){return[P.w]},
$at:function(){return[P.w]},
$ah:function(){return[P.w]}}
H.p.prototype={}
H.cX.prototype={
gN:function(a){return new H.b6(this,this.gl(this))},
bo:function(a,b){return this.dF(0,b)}}
H.b6.prototype={
gD:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.bj(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aX(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.bY.prototype={
gN:function(a){return new H.cZ(J.aU(this.a),this.b)},
gl:function(a){return J.aV(this.a)},
E:function(a,b){return this.b.$1(J.eB(this.a,b))},
$ah:function(a,b){return[b]}}
H.f5.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cZ.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gD(t))
return!0}u.a=null
return!1},
gD:function(a){return this.a}}
H.fK.prototype={
gl:function(a){return J.aV(this.a)},
E:function(a,b){return this.b.$1(J.eB(this.a,b))},
$ap:function(a,b){return[b]},
$acX:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.ce.prototype={
gN:function(a){return new H.iH(J.aU(this.a),this.b)}}
H.iH.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gD(u)))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.cN.prototype={}
H.il.prototype={
m:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dw.prototype={}
H.i8.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hf.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fz.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.ik.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jw.prototype={
$1:function(a){if(!!J.R(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.ec.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bO.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ct(t==null?"unknown":t)+"'"},
ghA:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hV.prototype={}
H.hN.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ct(u)+"'"}}
H.bL.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bL))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.bK(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.c3(u))+"'")}}
H.eN.prototype={
i:function(a){return this.a}}
H.hw.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ga2:function(a){return new H.bu(this,[H.ag(this,0)])},
ghz:function(a){var u=this,t=H.ag(u,0)
return H.lK(new H.bu(u,[t]),new H.fy(u),t,H.ag(u,1))},
fM:function(a,b){var u=this.b
if(u==null)return!1
return this.e3(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b8(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b8(r,b)
s=t==null?null:t.b
return s}else return q.h1(b)},
h1:function(a){var u,t,s=this.d
if(s==null)return
u=this.cB(s,J.bK(a)&0x3ffffff)
t=this.de(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cr(u==null?o.b=o.bH():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cr(t==null?o.c=o.bH():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bH()
r=J.bK(b)&0x3ffffff
q=o.cB(s,r)
if(q==null)o.bK(s,r,[o.bI(b,c)])
else{p=o.de(q,b)
if(p>=0)q[p].b=c
else q.push(o.bI(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aX(u))
t=t.c}},
cr:function(a,b,c){var u=this.b8(a,b)
if(u==null)this.bK(a,b,this.bI(b,c))
else u.b=c},
ee:function(){this.r=this.r+1&67108863},
bI:function(a,b){var u,t=this,s=new H.fD(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ee()
return s},
de:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1},
i:function(a){return P.kl(this)},
b8:function(a,b){return a[b]},
cB:function(a,b){return a[b]},
bK:function(a,b,c){a[b]=c},
e7:function(a,b){delete a[b]},
e3:function(a,b){return this.b8(a,b)!=null},
bH:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bK(t,u,t)
this.e7(t,u)
return t}}
H.fy.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ag(u,1),args:[H.ag(u,0)]}}}
H.fD.prototype={}
H.bu.prototype={
gl:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fE(u,u.r)
t.c=u.e
return t}}
H.fE.prototype={
gD:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jn.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.jo.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jp.prototype={
$1:function(a){return this.a(a)}}
H.fx.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c1.prototype={}
H.d2.prototype={
gl:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.c0.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]},
m:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.N]},
$at:function(){return[P.N]},
$ih:1,
$ah:function(){return[P.N]}}
H.d3.prototype={
m:function(a,b,c){H.au(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.w]},
$at:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]}}
H.h6.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h7.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h8.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.h9.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.ha.prototype={
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.d4.prototype={
gl:function(a){return a.length},
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.hb.prototype={
gl:function(a){return a.length},
h:function(a,b){H.au(b,a,a.length)
return a[b]}}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
P.iJ.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iI.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iK.prototype={
$0:function(){this.a.$0()}}
P.iL.prototype={
$0:function(){this.a.$0()}}
P.ei.prototype={
dR:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bG(new P.jb(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
dS:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bG(new P.ja(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idq:1}
P.jb.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ja.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dI(u,q)}s.c=r
t.d.$1(s)}}
P.bC.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bD.prototype={
gD:function(a){var u=this.c
if(u==null)return this.b
return u.gD(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bC){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aU(u)
if(!!r.$ibD){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.j7.prototype={
gN:function(a){return new P.bD(this.a())}}
P.dD.prototype={}
P.dk.prototype={}
P.hQ.prototype={}
P.dq.prototype={}
P.je.prototype={}
P.jh.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d7():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iY.prototype={
hq:function(a){var u,t,s,r=null
try{if(C.e===$.af){a.$0()
return}P.mJ(r,r,this,a)}catch(s){u=H.aw(s)
t=H.k_(s)
P.kS(r,r,this,u,t)}},
hr:function(a,b){var u,t,s,r=null
try{if(C.e===$.af){a.$1(b)
return}P.mK(r,r,this,a,b)}catch(s){u=H.aw(s)
t=H.k_(s)
P.kS(r,r,this,u,t)}},
hs:function(a,b){return this.hr(a,b,null)},
fI:function(a){return new P.iZ(this,a)},
cV:function(a,b){return new P.j_(this,a,b)}}
P.iZ.prototype={
$0:function(){return this.a.hq(this.b)}}
P.j_.prototype={
$1:function(a){return this.a.hs(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iV.prototype={
gN:function(a){var u=new P.dU(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
C:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.e1(b)
return t}},
e1:function(a){var u=this.d
if(u==null)return!1
return this.by(this.cA(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.jU():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.jU():t,b)}else return s.dV(0,b)},
dV:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jU()
u=s.cu(b)
t=r[u]
if(t==null)r[u]=[s.bv(b)]
else{if(s.by(t,b)>=0)return!1
t.push(s.bv(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fa(this.c,b)
else return this.f9(0,b)},
f9:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cA(r,b)
t=s.by(u,b)
if(t<0)return!1
s.cM(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.bv(b)
return!0},
fa:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cM(u)
delete a[b]
return!0},
ct:function(){this.r=1073741823&this.r+1},
bv:function(a){var u,t=this,s=new P.iW(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.ct()
return s},
cM:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.ct()},
cu:function(a){return J.bK(a)&1073741823},
cA:function(a,b){return a[this.cu(b)]},
by:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.J(a[t].a,b))return t
return-1}}
P.iW.prototype={}
P.dU.prototype={
gD:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.ft.prototype={}
P.fF.prototype={$ip:1,$ih:1}
P.t.prototype={
gN:function(a){return new H.b6(a,this.gl(a))},
E:function(a,b){return this.h(a,b)},
hw:function(a,b){var u,t,s=this,r=H.b([],[H.n1(s,a,"t",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hv:function(a){return this.hw(a,!0)},
i:function(a){return P.jI(a,"[","]")}}
P.fI.prototype={}
P.fJ.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:8}
P.W.prototype={
H:function(a,b){var u,t
for(u=J.aU(this.ga2(a));u.q();){t=u.gD(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aV(this.ga2(a))},
i:function(a){return P.kl(a)}}
P.j1.prototype={
a0:function(a,b){var u
for(u=J.aU(b);u.q();)this.n(0,u.gD(u))},
i:function(a){return P.jI(this,"{","}")},
E:function(a,b){var u,t,s
P.ku(b,"index")
for(u=P.mf(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$ip:1,
$ih:1}
P.dV.prototype={}
P.eP.prototype={}
P.eT.prototype={}
P.f7.prototype={}
P.fq.prototype={
i:function(a){return this.a}}
P.fp.prototype={
e4:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aq("")
if(r>b)q.a+=C.b.b5(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lq(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.ip.prototype={}
P.iq.prototype={
fN:function(a){var u,t,s,r=P.jP(0,null,a.length)
if(typeof r!=="number")return r.F()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jc(t)
if(s.e9(a,0,r)!==r)s.cN(C.b.bP(a,r-1),0)
return new Uint8Array(t.subarray(0,H.mi(0,s.b,t.length)))}}
P.jc.prototype={
cN:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e9:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bP(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aQ(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cN(r,C.b.aQ(a,p)))s=p}else if(r<=2047){q=n.b
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
P.av.prototype={}
P.a8.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a&&!0},
aJ:function(a,b){return C.c.aJ(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.ba(u,30))&1073741823},
i:function(a){var u=this,t=P.lz(H.lU(u)),s=P.cH(H.lS(u)),r=P.cH(H.lO(u)),q=P.cH(H.lP(u)),p=P.cH(H.lR(u)),o=P.cH(H.lT(u)),n=P.lA(H.lQ(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.N.prototype={}
P.aY.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aJ:function(a,b){return C.c.aJ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.f4(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.c.a_(q,6e7)%60)
t=r.$1(C.c.a_(q,1e6)%60)
s=new P.f3().$1(q%1e6)
return""+C.c.a_(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.f3.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f4.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.br.prototype={}
P.d7.prototype={
i:function(a){return"Throw of null."}}
P.ab.prototype={
gbx:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbw:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbx()+o+u
if(!q.a)return t
s=q.gbw()
r=P.jG(q.b)
return t+s+": "+r}}
P.by.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fs.prototype={
gbx:function(){return"RangeError"},
gbw:function(){var u,t=this.b
if(typeof t!=="number")return t.a4()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.im.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ij.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c5.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eS.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jG(u)+"."}}
P.hi.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.di.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.eY.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dM.prototype={
i:function(a){return"Exception: "+this.a}}
P.fj.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.b5(s,0,75)+"...":s
return t+"\n"+r}}
P.fl.prototype={}
P.w.prototype={}
P.h.prototype={
bo:function(a,b){return new H.ce(this,b,[H.jZ(this,"h",0)])},
gl:function(a){var u,t=this.gN(this)
for(u=0;t.q();)++u
return u},
gaA:function(a){var u,t=this.gN(this)
if(!t.q())throw H.c(H.fu())
u=t.gD(t)
if(t.q())throw H.c(H.lE())
return u},
E:function(a,b){var u,t,s
P.ku(b,"index")
for(u=this.gN(this),t=0;u.q();){s=u.gD(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.lD(this,"(",")")}}
P.fv.prototype={}
P.ad.prototype={$ip:1,$ih:1}
P.bX.prototype={}
P.b8.prototype={
gJ:function(a){return P.X.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.X.prototype={constructor:P.X,$iX:1,
t:function(a,b){return this===b},
gJ:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.d(H.c3(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.aq.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.n.prototype={}
W.eC.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
i:function(a){return String(a)}}
W.eE.prototype={
i:function(a){return String(a)}}
W.cA.prototype={}
W.bn.prototype={$ibn:1}
W.bp.prototype={
ce:function(a,b,c){if(c!=null)return a.getContext(b,P.mT(c))
return a.getContext(b)},
dt:function(a,b){return this.ce(a,b,null)},
$ibp:1}
W.aW.prototype={
gl:function(a){return a.length}}
W.eU.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bP.prototype={
gl:function(a){return a.length}}
W.eV.prototype={}
W.a7.prototype={}
W.ak.prototype={}
W.eW.prototype={
gl:function(a){return a.length}}
W.eX.prototype={
gl:function(a){return a.length}}
W.f_.prototype={
gl:function(a){return a.length}}
W.ac.prototype={$iac:1}
W.f0.prototype={
i:function(a){return String(a)}}
W.cJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a5,P.a6]]},
$iy:1,
$ay:function(){return[[P.a5,P.a6]]},
$at:function(){return[[P.a5,P.a6]]},
$ih:1,
$ah:function(){return[[P.a5,P.a6]]}}
W.cK.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaz(a))+" x "+H.d(this.gas(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia5&&a.left===u.gbi(b)&&a.top===u.gbm(b)&&this.gaz(a)===u.gaz(b)&&this.gas(a)===u.gas(b)},
gJ:function(a){return W.kO(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaz(a)),C.d.gJ(this.gas(a)))},
gcW:function(a){return a.bottom},
gas:function(a){return a.height},
gbi:function(a){return a.left},
gca:function(a){return a.right},
gbm:function(a){return a.top},
gaz:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a6]}}
W.f1.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.m]},
$iy:1,
$ay:function(){return[P.m]},
$at:function(){return[P.m]},
$ih:1,
$ah:function(){return[P.m]}}
W.f2.prototype={
gl:function(a){return a.length}}
W.iN.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.hv(this)
return new J.a_(u,u.length)},
$ap:function(){return[W.P]},
$at:function(){return[W.P]},
$ah:function(){return[W.P]}}
W.P.prototype={
gfH:function(a){return new W.iP(a)},
gcY:function(a){return new W.iN(a,a.children)},
gcZ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a4()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a4()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
aa:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.kg
if(u==null){u=H.b([],[W.aH])
t=new W.d6(u)
u.push(W.kN(null))
u.push(W.kP())
$.kg=t
d=t}else d=u
u=$.kf
if(u==null){u=new W.eo(d)
$.kf=u
c=u}else{u.a=d
c=u}}if($.aA==null){u=document
t=u.implementation.createHTMLDocument("")
$.aA=t
$.jF=t.createRange()
s=$.aA.createElement("base")
s.href=u.baseURI
$.aA.head.appendChild(s)}u=$.aA
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aA
if(!!this.$ibn)r=u.body
else{r=u.createElement(a.tagName)
$.aA.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.C(C.Q,a.tagName)){$.jF.selectNodeContents(r)
q=$.jF.createContextualFragment(b)}else{r.innerHTML=b
q=$.aA.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aA.body
if(r==null?u!=null:r!==u)J.k8(r)
c.cf(q)
document.adoptNode(q)
return q},
fO:function(a,b,c){return this.aa(a,b,c,null)},
dw:function(a,b){a.textContent=null
a.appendChild(this.aa(a,b,null,null))},
$iP:1,
gdq:function(a){return a.tagName}}
W.f6.prototype={
$1:function(a){return!!J.R(a).$iP}}
W.i.prototype={$ii:1}
W.e.prototype={
fC:function(a,b,c,d){if(c!=null)this.dW(a,b,c,!1)},
dW:function(a,b,c,d){return a.addEventListener(b,H.bG(c,1),!1)}}
W.aC.prototype={$iaC:1}
W.fd.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aC]},
$iy:1,
$ay:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]}}
W.fe.prototype={
gl:function(a){return a.length}}
W.fi.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fo.prototype={
gl:function(a){return a.length}}
W.bS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$iy:1,
$ay:function(){return[W.D]},
$at:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]}}
W.b_.prototype={$ib_:1,
gd0:function(a){return a.data}}
W.bT.prototype={$ibT:1}
W.bt.prototype={$ibt:1}
W.fG.prototype={
i:function(a){return String(a)}}
W.h_.prototype={
gl:function(a){return a.length}}
W.h0.prototype={
h:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.m])
this.H(a,new W.h1(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.m,null]}}
W.h1.prototype={
$2:function(a,b){return this.a.push(a)}}
W.h2.prototype={
h:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.m])
this.H(a,new W.h3(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.m,null]}}
W.h3.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.h4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$iy:1,
$ay:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]}}
W.an.prototype={$ian:1}
W.Z.prototype={
gaA:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.ky("No elements"))
if(t>1)throw H.c(P.ky("More than one element"))
return u.firstChild},
a0:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cO(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.D]},
$at:function(){return[W.D]},
$ah:function(){return[W.D]}}
W.D.prototype={
hl:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ho:function(a,b){var u,t
try{u=a.parentNode
J.ll(u,b,a)}catch(t){H.aw(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dE(a):u},
fe:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.d5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$iy:1,
$ay:function(){return[W.D]},
$at:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]}}
W.aI.prototype={$iaI:1,
gl:function(a){return a.length}}
W.hl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aI]},
$iy:1,
$ay:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]}}
W.hu.prototype={
h:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.m])
this.H(a,new W.hv(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.m,null]}}
W.hv.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hx.prototype={
gl:function(a){return a.length}}
W.aK.prototype={$iaK:1}
W.hJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aK]},
$iy:1,
$ay:function(){return[W.aK]},
$at:function(){return[W.aK]},
$ih:1,
$ah:function(){return[W.aK]}}
W.aL.prototype={$iaL:1}
W.hK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aL]},
$iy:1,
$ay:function(){return[W.aL]},
$at:function(){return[W.aL]},
$ih:1,
$ah:function(){return[W.aL]}}
W.aM.prototype={$iaM:1,
gl:function(a){return a.length}}
W.hO.prototype={
h:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga2:function(a){var u=H.b([],[P.m])
this.H(a,new W.hP(u))
return u},
gl:function(a){return a.length},
$aW:function(){return[P.m,P.m]}}
W.hP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.dl.prototype={
aa:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=W.lB("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Z(t).a0(0,new W.Z(u))
return t}}
W.hS.prototype={
aa:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.Z(u)
s=u.gaA(u)
s.toString
u=new W.Z(s)
r=u.gaA(u)
t.toString
r.toString
new W.Z(t).a0(0,new W.Z(r))
return t}}
W.hT.prototype={
aa:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.w.aa(u.createElement("table"),b,c,d)
u.toString
u=new W.Z(u)
s=u.gaA(u)
t.toString
s.toString
new W.Z(t).a0(0,new W.Z(s))
return t}}
W.c6.prototype={$ic6:1}
W.aN.prototype={$iaN:1}
W.as.prototype={$ias:1}
W.hW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.as]},
$iy:1,
$ay:function(){return[W.as]},
$at:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]}}
W.hX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aN]},
$iy:1,
$ay:function(){return[W.aN]},
$at:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]}}
W.i1.prototype={
gl:function(a){return a.length}}
W.aO.prototype={$iaO:1}
W.bz.prototype={$ibz:1}
W.i5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aO]},
$iy:1,
$ay:function(){return[W.aO]},
$at:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]}}
W.i6.prototype={
gl:function(a){return a.length}}
W.bc.prototype={}
W.io.prototype={
i:function(a){return String(a)}}
W.iG.prototype={
gl:function(a){return a.length}}
W.bh.prototype={
gfR:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfQ:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibh:1}
W.cf.prototype={
ff:function(a,b){return a.requestAnimationFrame(H.bG(b,1))},
e8:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.H]},
$iy:1,
$ay:function(){return[W.H]},
$at:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]}}
W.dG.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia5&&a.left===u.gbi(b)&&a.top===u.gbm(b)&&a.width===u.gaz(b)&&a.height===u.gas(b)},
gJ:function(a){return W.kO(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gas:function(a){return a.height},
gaz:function(a){return a.width}}
W.iS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aD]},
$iy:1,
$ay:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]}}
W.e_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$iy:1,
$ay:function(){return[W.D]},
$at:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]}}
W.j4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aM]},
$iy:1,
$ay:function(){return[W.aM]},
$at:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]}}
W.j5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ar]},
$iy:1,
$ay:function(){return[W.ar]},
$at:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]}}
W.iM.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga2(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga2:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aW:function(){return[P.m,P.m]}}
W.iP.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.ga2(this).length}}
W.iQ.prototype={}
W.iR.prototype={
$1:function(a){return this.a.$1(a)}}
W.cg.prototype={
dN:function(a){var u
if($.dP.a===0){for(u=0;u<262;++u)$.dP.m(0,C.P[u],W.n3())
for(u=0;u<12;++u)$.dP.m(0,C.l[u],W.n4())}},
aG:function(a){return $.lj().C(0,W.bQ(a))},
aj:function(a,b,c){var u=$.dP.h(0,H.d(W.bQ(a))+"::"+b)
if(u==null)u=$.dP.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaH:1}
W.K.prototype={
gN:function(a){return new W.cO(a,this.gl(a))}}
W.d6.prototype={
aG:function(a){return C.a.cR(this.a,new W.hd(a))},
aj:function(a,b,c){return C.a.cR(this.a,new W.hc(a,b,c))},
$iaH:1}
W.hd.prototype={
$1:function(a){return a.aG(this.a)}}
W.hc.prototype={
$1:function(a){return a.aj(this.a,this.b,this.c)}}
W.e7.prototype={
dQ:function(a,b,c,d){var u,t,s
this.a.a0(0,c)
u=b.bo(0,new W.j2())
t=b.bo(0,new W.j3())
this.b.a0(0,u)
s=this.c
s.a0(0,C.R)
s.a0(0,t)},
aG:function(a){return this.a.C(0,W.bQ(a))},
aj:function(a,b,c){var u=this,t=W.bQ(a),s=u.c
if(s.C(0,H.d(t)+"::"+b))return u.d.fF(c)
else if(s.C(0,"*::"+b))return u.d.fF(c)
else{s=u.b
if(s.C(0,H.d(t)+"::"+b))return!0
else if(s.C(0,"*::"+b))return!0
else if(s.C(0,H.d(t)+"::*"))return!0
else if(s.C(0,"*::*"))return!0}return!1},
$iaH:1}
W.j2.prototype={
$1:function(a){return!C.a.C(C.l,a)}}
W.j3.prototype={
$1:function(a){return C.a.C(C.l,a)}}
W.j8.prototype={
aj:function(a,b,c){if(this.dH(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.C(0,b)
return!1}}
W.j9.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.j6.prototype={
aG:function(a){var u=J.R(a)
if(!!u.$ic4)return!1
u=!!u.$ij
if(u&&W.bQ(a)==="foreignObject")return!1
if(u)return!0
return!1},
aj:function(a,b,c){if(b==="is"||C.b.bq(b,"on"))return!1
return this.aG(a)},
$iaH:1}
W.cO.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cw(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gD:function(a){return this.d}}
W.aH.prototype={}
W.j0.prototype={}
W.eo.prototype={
cf:function(a){new W.jd(this).$2(a,null)},
aT:function(a,b){if(b==null)J.k8(a)
else b.removeChild(a)},
fk:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lo(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aw(r)}t="element unprintable"
try{t=J.ai(a)}catch(r){H.aw(r)}try{s=W.bQ(a)
this.fj(a,b,p,t,s,o,n)}catch(r){if(H.aw(r) instanceof P.ab)throw r
else{this.aT(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aT(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aG(a)){p.aT(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aj(a,"is",g)){p.aT(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga2(f)
t=H.b(u.slice(0),[H.ag(u,0)])
for(s=f.ga2(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.aj(a,J.lr(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$ic6)p.cf(a.content)}}
W.jd.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fk(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aT(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aw(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dF.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ed.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
P.en.prototype={$ib_:1,
gd0:function(a){return this.a}}
P.ji.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.ff.prototype={
gb9:function(){var u=this.b,t=H.jZ(u,"t",0)
return new H.bY(new H.ce(u,new P.fg(),[t]),new P.fh(),[t,W.P])},
m:function(a,b,c){var u=this.gb9()
J.lp(u.b.$1(J.eB(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aV(this.gb9().a)},
h:function(a,b){var u=this.gb9()
return u.b.$1(J.eB(u.a,b))},
gN:function(a){var u=P.jN(this.gb9(),!1,W.P)
return new J.a_(u,u.length)},
$ap:function(){return[W.P]},
$at:function(){return[W.P]},
$ah:function(){return[W.P]}}
P.fg.prototype={
$1:function(a){return!!J.R(a).$iP}}
P.fh.prototype={
$1:function(a){return H.k(a,"$iP")}}
P.iX.prototype={
gca:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.v(t)
return u+t},
gcW:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.d(u.a)+", "+H.d(u.b)+") "+H.d(u.c)+" x "+H.d(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia5){t=q.a
if(t==u.gbi(b)){s=q.b
if(s==u.gbm(b)){r=q.c
if(typeof t!=="number")return t.G()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gca(b)){t=q.d
if(typeof s!=="number")return s.G()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcW(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.bK(t),r=u.b,q=J.bK(r),p=u.c
if(typeof t!=="number")return t.G()
if(typeof p!=="number")return H.v(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.G()
if(typeof t!=="number")return H.v(t)
t=C.c.gJ(r+t)
return P.me(P.iU(P.iU(P.iU(P.iU(0,s),q),p),t))}}
P.a5.prototype={
gbi:function(a){return this.a},
gbm:function(a){return this.b},
gaz:function(a){return this.c},
gas:function(a){return this.d}}
P.b5.prototype={$ib5:1}
P.fB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b5]},
$at:function(){return[P.b5]},
$ih:1,
$ah:function(){return[P.b5]}}
P.b9.prototype={$ib9:1}
P.hg.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b9]},
$at:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]}}
P.ho.prototype={
gl:function(a){return a.length}}
P.c4.prototype={$ic4:1}
P.hR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.m]},
$at:function(){return[P.m]},
$ih:1,
$ah:function(){return[P.m]}}
P.j.prototype={
gcY:function(a){return new P.ff(a,new W.Z(a))},
aa:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aH])
p.push(W.kN(null))
p.push(W.kP())
p.push(new W.j6())
c=new W.eo(new W.d6(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fO(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.Z(s)
q=p.gaA(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.bb.prototype={$ibb:1}
P.i7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.bb]},
$at:function(){return[P.bb]},
$ih:1,
$ah:function(){return[P.bb]}}
P.dS.prototype={}
P.dT.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.el.prototype={}
P.em.prototype={}
P.eG.prototype={
gl:function(a){return a.length}}
P.eH.prototype={
h:function(a,b){return P.aQ(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aQ(u.value[1]))}},
ga2:function(a){var u=H.b([],[P.m])
this.H(a,new P.eI(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.m,null]}}
P.eI.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eJ.prototype={
gl:function(a){return a.length}}
P.bm.prototype={}
P.hh.prototype={
gl:function(a){return a.length}}
P.dE.prototype={}
P.dd.prototype={
ht:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$ib_)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mU(g))
return}if(!!t.$ibT)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.ls("Incorrect number or type of arguments"))}}
P.hM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aQ(a.item(b))},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bX,,,]]},
$at:function(){return[[P.bX,,,]]},
$ih:1,
$ah:function(){return[[P.bX,,,]]}}
P.ea.prototype={}
P.eb.prototype={}
K.ax.prototype={
at:function(a,b){return!0},
i:function(a){return"all"}}
K.cP.prototype={
at:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].at(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b7.prototype={}
K.a1.prototype={
at:function(a,b){return!this.dD(0,b)},
i:function(a){return"!["+this.cj(0)+"]"}}
K.hp.prototype={
at:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jO(this.a),t=H.jO(this.b)
return u+".."+t}}
K.hy.prototype={
dL:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.av])
for(s=new H.b6(a,a.gl(a));s.q();)t.m(0,s.d,!0)
r=P.jN(new H.bu(t,[u]),!0,u)
C.a.dB(r)
this.a=r},
at:function(a,b){return C.a.C(this.a,b)},
i:function(a){return P.jQ(this.a)}}
L.dj.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.du(this.a.j(0,b))
r.a=H.b([],[K.b7])
r.c=!1
this.c.push(r)
return r},
fY:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.at(0,a))return r}return},
i:function(a){return this.b},
cL:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.C(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bu(n,[H.ag(n,0)]),n=n.gN(n);n.q();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.C(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.o)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dr.prototype={
i:function(a){var u=H.k4(this.b,"\n","\\n"),t=H.k4(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.ds.prototype={
aw:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.i2.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dj(this,b)
u.c=H.b([],[L.du])
this.a.m(0,b,u)}return u},
L:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.ds(a)
u=P.m
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cb:function(a){return this.hy(a)},
hy:function(a){var u=this
return P.mm(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cb(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.c7(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.fY(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jQ(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.x("removeRange"))
P.jP(0,m,d.length)
d.splice(0,m-0)
C.a.a0(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.C(0,p.a)?7:8
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
if(g.d!=null){j=P.jQ(e)
i=g.d
h=i.c.h(0,j)
p=new L.dr(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.C(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.mc()
case 1:return P.md(q)}}},L.dr)},
i:function(a){var u,t=new P.aq(""),s=this.d
if(s!=null)t.a=s.cL()+"\n"
for(s=this.a,s=s.ghz(s),s=new H.cZ(J.aU(s.a),s.b);s.q();){u=s.a
if(u!=this.d)t.a+=u.cL()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.du.prototype={
i:function(a){return this.b.b+": "+this.cj(0)}}
O.ay.prototype={
b7:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cg:function(a,b,c){this.b=b
this.c=a},
aM:function(a,b){return this.cg(a,null,b)},
cE:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cn:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.a_(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jZ(s,"ay",0)]
if(s.cE(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cn(t,H.b([b],r))}},
a0:function(a,b){var u,t
if(this.cE(b)){u=this.a
t=u.length
C.a.a0(u,b)
this.cn(t,b)}},
$ih:1}
O.bZ.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aB:function(){var u=this.b
if(u!=null)u.B(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gbh(u)
else return V.bv()},
bl:function(a){var u=this.a
if(a==null)u.push(V.bv())
else u.push(a)
this.aB()},
av:function(){var u=this.a
if(u.length>0){u.pop()
this.aB()}}}
E.eL.prototype={}
E.aB.prototype={
sbp:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().O(0,s.gdj())
u=s.c
if(u!=null)u.gp().n(0,s.gdj())
t=new D.z("shape",r,s.c)
t.b=!0
s.bj(t)}},
ae:function(a,b){var u
for(u=this.y.a,u=new J.a_(u,u.length);u.q();)u.d.ae(0,b)},
a8:function(a){var u,t=this,s=a.dx
s.a.push(s.gX(s))
s.aB()
a.c6(t.f)
s=a.dy
u=(s&&C.a).gbh(s)
if(u!=null&&t.d!=null)u.dm(a,t)
for(s=t.y.a,s=new J.a_(s,s.length);s.q();)s.d.a8(a)
a.c5()
a.dx.av()},
bj:function(a){var u=this.z
if(u!=null)u.B(a)},
a7:function(){return this.bj(null)},
dk:function(a){this.e=null
this.bj(a)},
hb:function(){return this.dk(null)},
di:function(a){this.bj(a)},
h8:function(){return this.di(null)},
h7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdh(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a7()},
ha:function(a,b){var u,t
for(u=b.gN(b),t=this.gdh();u.q();)u.gD(u).gp().O(0,t)
this.a7()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bo.prototype={
i:function(a){return this.b}}
E.bw.prototype={
i:function(a){return this.b}}
E.dL.prototype={}
E.hq.prototype={
dK:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a8(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bZ()
t=[V.aE]
u.a=H.b([],t)
u.gp().n(0,new E.hr(s))
s.cy=u
u=new O.bZ()
u.a=H.b([],t)
u.gp().n(0,new E.hs(s))
s.db=u
u=new O.bZ()
u.a=H.b([],t)
u.gp().n(0,new E.ht(s))
s.dx=u
u=H.b([],[O.dm])
s.dy=u
u.push(null)
s.fr=new H.I([P.m,A.de])},
ghk:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.u(0,u.gX(u))
s=u}return s},
c6:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbh(u):a)},
c5:function(){var u=this.dy
if(u.length>1)u.pop()},
cQ:function(a){var u=a.b
if(u.length===0)throw H.c(P.r("May not cache a shader with no name."))
if(this.fr.fM(0,u))throw H.c(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hr.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hs.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ht.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dp.prototype={
cq:function(a){this.dn()},
cp:function(){return this.cq(null)},
gh0:function(){var u,t=this,s=Date.now(),r=C.c.a_(P.ke(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a8(s,!1)
return u/r},
cG:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.v(r)
u=C.d.bZ(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.bZ(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kB(C.i,s.ghp())}},
dn:function(){if(!this.cx){this.cx=!0
var u=window
C.y.e8(u)
C.y.ff(u,W.kT(new E.i0(this),P.a6))}},
hn:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cG()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a8(r,!1)
s.y=P.ke(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aB()
r=s.db
C.a.sl(r.a,0)
r.aB()
r=s.dx
C.a.sl(r.a,0)
r.aB()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.a8(p.e)}s=p.Q
if(s!=null)s.B(null)}catch(q){u=H.aw(q)
t=H.k_(q)
P.k3("Error: "+H.d(u))
P.k3("Stack: "+H.d(t))
throw H.c(u)}}}
E.i0.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hn()}}}
Z.dB.prototype={}
Z.cB.prototype={
W:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aw(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.dC.prototype={}
Z.bN.prototype={
ar:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
W:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].W(a)},
aK:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a8:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ai(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.bU.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.c3(this.c))+"'")+"]"}}
Z.bg.prototype={
gci:function(a){var u=this.a,t=(u&$.ah().a)!==0?3:0
if((u&$.aT().a)!==0)t+=3
if((u&$.aS().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=2
if((u&$.bl().a)!==0)t+=3
if((u&$.cu().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=4
if((u&$.bJ().a)!==0)++t
return(u&$.aR().a)!==0?t+4:t},
fG:function(a){var u,t=$.ah(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aT()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bJ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0)if(u===a)return t
return $.li()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bg))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.ah().a)!==0)u.push("Pos")
if((t&$.aT().a)!==0)u.push("Norm")
if((t&$.aS().a)!==0)u.push("Binm")
if((t&$.bk().a)!==0)u.push("Txt2D")
if((t&$.bl().a)!==0)u.push("TxtCube")
if((t&$.cu().a)!==0)u.push("Clr3")
if((t&$.cv().a)!==0)u.push("Clr4")
if((t&$.bJ().a)!==0)u.push("Weight")
if((t&$.aR().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eO.prototype={}
D.bs.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.T]}]):u).push(b)},
O:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.C(s,b)
if(s===!0){s=t.a
u=(s&&C.a).O(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.C(s,b)
if(s===!0){s=t.b
u=(s&&C.a).O(s,b)||u}return u},
B:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.T()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.jN(u,!0,{func:1,ret:-1,args:[D.T]}),new D.fa(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.T]}])
C.a.H(u,new D.fb(q))}return!0},
fW:function(){return this.B(null)},
ax:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.B(u)}}}}
D.fa.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fb.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.T.prototype={}
D.b0.prototype={}
D.b1.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cC.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cC))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cU.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fA.prototype={
hg:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hc:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.cY.prototype={}
X.fH.prototype={
aR:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.Y(o.a+n*m,o.b+u*t)
t=q.a.gaH()
r=new X.aG(a,V.aJ(),q.x,t,s)
r.b=!0
q.z=new P.a8(p,!1)
q.x=s
return r},
c4:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dv()
if(typeof u!=="number")return u.ac()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.aR(a,b))
return!0},
hh:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaH()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.c_(new V.F(s*r,q*p),u,t)
t.b=!0
n.B(t)
return!0},
eJ:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cY(c,r.a.gaH(),b)
s.b=!0
t.B(s)
r.y=new P.a8(u,!1)
r.x=V.aJ()}}
X.a9.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a9))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aG.prototype={}
X.h5.prototype={
bz:function(a,b,c){var u=this,t=new P.a8(Date.now(),!1),s=u.a.gaH(),r=new X.aG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c4:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.B(this.bz(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dv()
if(typeof t!=="number")return t.ac()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.B(u.bz(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.B(this.bz(a,b,!1))
return!0},
hi:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaH()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.c_(new V.F(t*s,r*q),u,b)
u.b=!0
o.B(u)
return!0},
gd3:function(){var u=this.b
return u==null?this.b=D.C():u},
gcc:function(){var u=this.c
return u==null?this.c=D.C():u},
gdg:function(){var u=this.d
return u==null?this.d=D.C():u}}
X.c_.prototype={}
X.hn.prototype={}
X.dt.prototype={}
X.i4.prototype={
aR:function(a,b){var u=this,t=new P.a8(Date.now(),!1),s=a.length>0?a[0]:V.aJ(),r=u.a.gaH(),q=new X.dt(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hf:function(a){var u=this.b
if(u==null)return!1
u.B(this.aR(a,!0))
return!0},
hd:function(a){var u=this.c
if(u==null)return!1
u.B(this.aR(a,!0))
return!0},
he:function(a){var u=this.d
if(u==null)return!1
u.B(this.aR(a,!1))
return!0}}
X.dx.prototype={
gaH:function(){var u=this.a,t=C.f.gcZ(u).c
t.toString
u=C.f.gcZ(u).d
u.toString
return V.kv(0,0,t,u)},
cw:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.a9(t,a.altKey,a.shiftKey))},
aF:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a9(t,a.altKey,a.shiftKey)},
bL:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a9(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.Y(s-q,r-u)},
aS:function(a){return new V.F(a.movementX,a.movementY)},
bJ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Y])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.ad(r.pageX)
C.d.ad(r.pageY)
p=o.left
C.d.ad(r.pageX)
n.push(new V.Y(q-p,C.d.ad(r.pageY)-o.top))}return n},
am:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cC(u,new X.a9(t,a.altKey,a.shiftKey))},
bA:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eD:function(a){this.f=!0},
eq:function(a){this.f=!1},
ex:function(a){if(this.f&&this.bA(a))a.preventDefault()},
eH:function(a){var u
if(!this.f)return
u=this.cw(a)
this.b.hg(u)},
eF:function(a){var u
if(!this.f)return
u=this.cw(a)
this.b.hc(u)},
eL:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aF(a)
if(r.x){u=r.am(a)
t=r.aS(a)
if(r.d.c4(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.am(a)
s=r.ao(a)
if(r.c.c4(u,s))a.preventDefault()},
eP:function(a){var u,t,s,r=this
r.aF(a)
u=r.am(a)
if(r.x){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.b1(u,s))a.preventDefault()},
eB:function(a){var u,t,s,r=this
if(!r.bA(a)){r.aF(a)
u=r.am(a)
if(r.x){t=r.aS(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.b1(u,s))a.preventDefault()}},
eN:function(a){var u,t,s,r=this
r.aF(a)
u=r.am(a)
if(r.x){t=r.aS(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.b0(u,s))a.preventDefault()},
ez:function(a){var u,t,s,r=this
if(!r.bA(a)){r.aF(a)
u=r.am(a)
if(r.x){t=r.aS(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.b0(u,s))a.preventDefault()}},
eR:function(a){var u,t,s=this
s.aF(a)
u=new V.F((a&&C.x).gfQ(a),C.x.gfR(a)).u(0,s.Q)
if(s.x){if(s.d.hh(u))a.preventDefault()
return}if(s.r)return
t=s.ao(a)
if(s.c.hi(u,t))a.preventDefault()},
eT:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.am(s.y)
t=s.ao(s.y)
s.d.eJ(u,t,r)}},
f8:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bL(a)
u=t.bJ(a)
if(t.e.hf(u))a.preventDefault()},
f4:function(a){var u
this.bL(a)
u=this.bJ(a)
if(this.e.hd(u))a.preventDefault()},
f6:function(a){var u
this.bL(a)
u=this.bJ(a)
if(this.e.he(u))a.preventDefault()}}
D.eK.prototype={$ia0:1}
D.bq.prototype={
al:function(a){var u=this.r
if(u!=null)u.B(a)},
dP:function(){return this.al(null)},
$ia0:1}
D.a0.prototype={}
D.cV.prototype={
al:function(a){var u=this.y
if(u!=null)u.B(a)},
cD:function(a){var u=this.z
if(u!=null)u.B(a)},
eI:function(){return this.cD(null)},
eV:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.e2(s))return!1}return!0},
ek:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcC(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bq)this.f.push(q)
p=q.r
if(p==null){p=new D.bs()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b0()
u.b=!0
this.al(u)},
eZ:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gcC();u.q();){s=u.gD(u)
C.a.O(this.e,s)
s.gp().O(0,t)}u=new D.b1()
u.b=!0
this.al(u)},
e2:function(a){var u=C.a.C(this.f,a)
return u},
$ah:function(){return[D.a0]},
$aay:function(){return[D.a0]}}
D.hm.prototype={$ia0:1}
D.hL.prototype={$ia0:1}
V.S.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.az.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.f9.prototype={}
V.d1.prototype={
a3:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.N])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.B().a
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
i:function(a){var u,t,s,r,q=this,p=[P.N],o=V.bI(H.b([q.a,q.d,q.r],p),3,0),n=V.bI(H.b([q.b,q.e,q.x],p),3,0),m=V.bI(H.b([q.c,q.f,q.y],p),3,0)
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
V.aE.prototype={
a3:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.N])
return t},
c_:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.B().a)return V.bv()
u=1/b1
t=-n
s=-a0
return V.am((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.am(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.Q(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
u=b.a
t=$.B().a
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
i:function(a){return this.R()},
I:function(a){var u,t,s,r,q,p=this,o=[P.N],n=V.bI(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bI(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bI(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bI(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.I("")}}
V.Y.prototype={
F:function(a,b){return new V.Y(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.Q.prototype={
G:function(a,b){return new V.Q(this.a+b.a,this.b+b.b,this.c+b.c)},
F:function(a,b){return new V.Q(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.Q(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.ba.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ba))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.dc.prototype={
ga6:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dc))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.F.prototype={
c0:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
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
return new V.F(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.kF
return u==null?$.kF=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.F(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.F()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.A.prototype={
c0:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
aq:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
G:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.A(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.B().a)return V.cd()
return new V.A(this.a/b,this.b/b,this.c/b)},
df:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.eR.prototype={
bu:function(a){var u=V.nl(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
M:function(a){var u=this.y
if(u!=null)u.B(a)},
scd:function(a,b){},
sc1:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bu(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sc3:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bu(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sa5:function(a,b){var u,t=this
b=t.bu(b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.M(u)}},
sc2:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.z("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.M(t)}},
sbQ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.M(u)}},
ae:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa5(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.cF.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
aL:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cF))return!1
return J.J(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bR.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
M:function(a){var u=this.e
if(u!=null)u.B(a)},
a1:function(){return this.M(null)},
ei:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaE(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.M(u)},
eX:function(a,b){var u,t
for(u=b.gN(b),t=this.gaE();u.q();)u.gD(u).gp().O(0,t)
u=new D.b1()
u.b=!0
this.M(u)},
aL:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a4()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a_(r,r.length),u=null;r.q();){q=r.d
if(q!=null){t=q.aL(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bv():u
r=s.e
if(r!=null)r.ax(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bR))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.J(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a4]},
$aay:function(){return[U.a4]},
$ia4:1}
U.a4.prototype={}
U.dy.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.C():u},
M:function(a){var u=this.cy
if(u!=null)u.B(a)},
a1:function(){return this.M(null)},
aU:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd3().n(0,u.gbB())
u.a.c.gdg().n(0,u.gbD())
u.a.c.gcc().n(0,u.gbF())
return!0},
bC:function(a){var u=this
if(!J.J(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bE:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaG")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.F(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.F(t.a,t.b).u(0,2).v(0,u.ga6())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.F(s.a,s.b).u(0,2).v(0,u.ga6())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sa5(0,-q*p+o)
n.b.sS(0)
t=t.F(0,a.z)
n.Q=new V.F(t.a,t.b).u(0,2).v(0,u.ga6())}n.a1()},
bG:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sS(t*10*s)
r.a1()}},
aL:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.ch=p
u=b.y
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.am(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia4:1}
U.dz.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.C():u},
M:function(a){var u=this.fx
if(u!=null)u.B(a)},
a1:function(){return this.M(null)},
aU:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd3().n(0,s.gbB())
s.a.c.gdg().n(0,s.gbD())
s.a.c.gcc().n(0,s.gbF())
u=s.a.d
t=u.f
u=t==null?u.f=D.C():t
u.n(0,s.gea())
u=s.a.d
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.gec())
u=s.a.e
t=u.b
u=t==null?u.b=D.C():t
u.n(0,s.gfA())
u=s.a.e
t=u.d
u=t==null?u.d=D.C():t
u.n(0,s.gfw())
u=s.a.e
t=u.c
u=t==null?u.c=D.C():t
u.n(0,s.gfu())
return!0},
ai:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.F(u,t)},
bC:function(a){var u=this
H.k(a,"$iaG")
if(!J.J(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bE:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaG")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.F(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ai(new V.F(t.a,t.b).u(0,2).v(0,u.ga6()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ai(new V.F(s.a,s.b).u(0,2).v(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa5(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.ai(new V.F(t.a,t.b).u(0,2).v(0,u.ga6()))}n.a1()},
bG:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sS(-t*10*u)
r.a1()}},
eb:function(a){var u=this
if(H.k(a,"$icY").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
ed:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaG")
if(!J.J(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ai(new V.F(s.a,s.b).u(0,2).v(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa5(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.ai(new V.F(t.a,t.b).u(0,2).v(0,u.ga6()))
n.a1()},
fB:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fz:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idt")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.F(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.ai(new V.F(t.a,t.b).u(0,2).v(0,u.ga6()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sS(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sS(-u*10*t)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=n.ai(new V.F(s.a,s.b).u(0,2).v(0,u.ga6()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa5(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa5(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.ai(new V.F(t.a,t.b).u(0,2).v(0,u.ga6()))}n.a1()},
fv:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sS(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sS(-t*10*u)
r.a1()}},
aL:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a4()
if(q<p){r.dy=p
u=b.y
r.c.ae(0,u)
r.b.ae(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.am(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.am(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia4:1}
U.dA.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
M:function(a){var u=this.r
if(u!=null)u.B(a)},
aU:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.C():t
t=r.gef()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.C():s).n(0,t)
return!0},
eg:function(a){var u,t,s,r,q=this
if(!J.J(q.b,q.a.b.c))return
H.k(a,"$ic_")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.M(u)}},
aL:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.am(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia4:1}
M.cE.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
V:function(a){var u=this.r
if(u!=null)u.B(a)},
aP:function(){return this.V(null)},
f0:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.V(u)},
f2:function(a,b){var u,t
for(u=b.gN(b),t=this.gU();u.q();)u.gD(u).gp().O(0,t)
u=new D.b1()
u.b=!0
this.V(u)},
a8:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a_(u,u.length);u.q();){t=u.d
if(t!=null)t.a8(a)}s.f=!1},
$ah:function(){return[M.ae]},
$aay:function(){return[M.ae]},
$iae:1}
M.cG.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.C():u},
V:function(a){var u=this.r
if(u!=null)u.B(a)},
aP:function(){return this.V(null)},
saV:function(a){var u,t,s=this
if(a==null)a=new X.fr()
u=s.b
if(u!==a){if(u!=null)u.gp().O(0,s.gU())
t=s.b
s.b=a
a.gp().n(0,s.gU())
u=new D.z("camera",t,s.b)
u.b=!0
s.V(u)}},
sb2:function(a,b){var u,t,s=this
if(b==null)b=X.jH(null)
u=s.c
if(u!==b){if(u!=null)u.gp().O(0,s.gU())
t=s.c
s.c=b
b.gp().n(0,s.gU())
u=new D.z("target",t,s.c)
u.b=!0
s.V(u)}},
sb3:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().O(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gU())
s=new D.z("technique",u,t.d)
s.b=!0
t.V(s)}},
a8:function(a){var u=this
a.c6(u.d)
u.c.W(a)
u.b.W(a)
u.e.ae(0,a)
u.e.a8(a)
u.b.aK(a)
u.c.toString
a.c5()},
$iae:1}
M.cL.prototype={
V:function(a){var u=this.y
if(u!=null)u.B(a)},
aP:function(){return this.V(null)},
es:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.T]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bs()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.V(u)},
ev:function(a,b){var u,t
for(u=b.gN(b),t=this.gU();u.q();)u.gD(u).gp().O(0,t)
u=new D.b1()
u.b=!0
this.V(u)},
saV:function(a){var u,t,s=this
if(a==null)a=X.kp(null)
u=s.b
if(u!==a){if(u!=null)u.gp().O(0,s.gU())
t=s.b
s.b=a
a.gp().n(0,s.gU())
u=new D.z("camera",t,s.b)
u.b=!0
s.V(u)}},
sb2:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().O(0,t.gU())
u=t.c
t.c=b
b.gp().n(0,t.gU())
s=new D.z("target",u,t.c)
s.b=!0
t.V(s)}},
sb3:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().O(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gU())
s=new D.z("technique",u,t.d)
s.b=!0
t.V(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.C():u},
a8:function(a){var u,t=this
a.c6(t.d)
t.c.W(a)
t.b.W(a)
u=t.d
if(u!=null)u.ae(0,a)
for(u=t.e.a,u=new J.a_(u,u.length);u.q();)u.d.ae(0,a)
for(u=t.e.a,u=new J.a_(u,u.length);u.q();)u.d.a8(a)
t.b.toString
a.cy.av()
a.db.av()
t.c.toString
a.c5()},
$iae:1}
M.ae.prototype={}
A.cy.prototype={}
A.eF.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fX:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.V.prototype={
gaf:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.V))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fL.prototype={
dJ:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aq("")
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
A.mB(c0,u)
A.mD(c0,u)
A.mC(c0,u)
A.mF(c0,u)
A.mG(c0,u)
A.mE(c0,u)
A.mH(c0,u)
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
b5.dd(0,s.charCodeAt(0)==0?s:s,A.mA(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.k(b5.y.T(0,"invViewMat"),"$ia2")
if(t)b5.dy=H.k(b5.y.T(0,"objMat"),"$ia2")
if(r)b5.fr=H.k(b5.y.T(0,"viewObjMat"),"$ia2")
b5.fy=H.k(b5.y.T(0,"projViewObjMat"),"$ia2")
if(c0.go)b5.fx=H.k(b5.y.T(0,"viewMat"),"$ia2")
if(c0.x1)b5.k1=H.k(b5.y.T(0,"txt2DMat"),"$ica")
if(c0.x2)b5.k2=H.k(b5.y.T(0,"txtCubeMat"),"$ia2")
if(c0.y1)b5.k3=H.k(b5.y.T(0,"colorMat"),"$ia2")
b5.r1=H.b([],[A.a2])
t=c0.be
if(t>0){b5.k4=b5.y.T(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.u(P.r(b7+q+b8))
s.push(H.k(m,"$ia2"))}}if(c0.a.a)b5.r2=H.k(b5.y.T(0,"emissionClr"),"$iE")
if(c0.b.a)b5.x1=H.k(b5.y.T(0,"ambientClr"),"$iE")
if(c0.c.a)b5.y2=H.k(b5.y.T(0,"diffuseClr"),"$iE")
if(c0.d.a)b5.bf=H.k(b5.y.T(0,"invDiffuseClr"),"$iE")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.d6=H.k(b5.y.T(0,"shininess"),"$iO")
if(t)b5.d5=H.k(b5.y.T(0,"specularClr"),"$iE")}if(c0.db){b5.d7=H.k(b5.y.T(0,"envSampler"),"$ibe")
if(c0.r.a)b5.d8=H.k(b5.y.T(0,"reflectClr"),"$iE")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.d9=H.k(b5.y.T(0,"refraction"),"$iO")
if(t)b5.da=H.k(b5.y.T(0,"refractClr"),"$iE")}}if(c0.y.a)b5.dc=H.k(b5.y.T(0,"alpha"),"$iO")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.bR=new H.I([r,A.bd])
b5.bS=new H.I([r,[P.ad,A.c8]])
for(r=[A.c8],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="barLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.u(P.r(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.u(P.r(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.ac()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.u(P.r(b7+o+b8))
H.k(e,"$iO")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.u(P.r(b7+o+b8))
H.k(d,"$iO")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.u(P.r(b7+o+b8))
H.k(c,"$iO")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c8(m,g,f,a0,a,b))}b5.bS.m(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.bT=new H.I([r,A.bd])
b5.bU=new H.I([r,[P.ad,A.c9]])
for(r=[A.c9],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ac()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.u(P.r(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.u(P.r(b7+a1+b8))
H.k(g,"$iE")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.u(P.r(b7+a1+b8))
H.k(f,"$iE")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.u(P.r(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.u(P.r(b7+a1+b8))
H.k(g,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.u(P.r(b7+o+b8))
H.k(f,"$ibA")
a5=f}else a5=b6
h.push(new A.c9(a4,a3,a2,m,g,a5))}b5.bU.m(0,j,h)
q=b5.bT
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.bV=new H.I([r,A.bd])
b5.bW=new H.I([r,[P.ad,A.cb]])
for(r=[A.cb],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.u(P.r(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.u(P.r(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.ac()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.u(P.r(b7+o+b8))
H.k(e,"$ica")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.u(P.r(b7+o+b8))
H.k(e,"$ibe")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.u(P.r(b7+o+b8))
H.k(e,"$ibe")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.u(P.r(b7+o+b8))
H.k(d,"$ic7")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.u(P.r(b7+o+b8))
H.k(e,"$iO")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.u(P.r(b7+o+b8))
H.k(d,"$iO")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.u(P.r(b7+o+b8))
H.k(c,"$iO")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cb(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bW.m(0,j,h)
q=b5.bV
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.bX=new H.I([r,A.bd])
b5.bY=new H.I([r,[P.ad,A.cc]])
for(r=[A.cc],l=0;l<t.length;t.length===s||(0,H.o)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.u(P.r(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.u(P.r(b7+o+b8))
H.k(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.u(P.r(b7+o+b8))
H.k(e,"$iE")
if(typeof j!=="number")return j.ac()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.u(P.r(b7+o+b8))
H.k(d,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.u(P.r(b7+o+b8))
H.k(c,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.u(P.r(b7+o+b8))
H.k(a9,"$iO")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.u(P.r(b7+o+b8))
H.k(b0,"$iO")
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
if(d==null)H.u(P.r(b7+a1+b8))
H.k(d,"$ic7")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.u(P.r(b7+a1+b8))
H.k(d,"$iO")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.u(P.r(b7+a1+b8))
H.k(c,"$iO")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.u(P.r(b7+a1+b8))
H.k(d,"$iO")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.u(P.r(b7+a1+b8))
H.k(c,"$iO")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.u(P.r(b7+a1+b8))
H.k(a9,"$iO")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.u(P.r(b7+a1+b8))
H.k(d,"$ibA")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.u(P.r(b7+o+b8))
H.k(d,"$ibA")
a7=d}else a7=b6
h.push(new A.cc(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bY.m(0,j,h)
q=b5.bX
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.r(b7+o+b8))
q.m(0,j,m)}}}},
fl:function(a,b){}}
A.cz.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cI.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.da.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.dh.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fO.prototype={
i:function(a){return this.aX}}
A.c8.prototype={}
A.c9.prototype={}
A.cb.prototype={}
A.cc.prototype={}
A.de.prototype={
cm:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dd:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cz(b,35633)
r.f=r.cz(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.r("Failed to link shader: "+H.d(s)))}r.fp()
r.fs()},
W:function(a){a.a.useProgram(this.r)
this.x.fX()},
cz:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
fp:function(){var u,t,s,r=this,q=H.b([],[A.cy]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cy(p,t.name,s))}r.x=new A.eF(q)},
fs:function(){var u,t,s,r=this,q=H.b([],[A.dv]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fP(t.type,t.size,t.name,s))}r.y=new A.ih(q)},
aC:function(a,b,c){var u=this.a
if(a===1)return new A.bd(u,b,c)
else return A.jS(u,this.r,b,a,c)},
e5:function(a,b,c){var u=this.a
if(a===1)return new A.bA(u,b,c)
else return A.jS(u,this.r,b,a,c)},
e6:function(a,b,c){var u=this.a
if(a===1)return new A.be(u,b,c)
else return A.jS(u,this.r,b,a,c)},
bb:function(a,b){return new P.dM(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fP:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aC(b,c,d)
case 5121:return u.aC(b,c,d)
case 5122:return u.aC(b,c,d)
case 5123:return u.aC(b,c,d)
case 5124:return u.aC(b,c,d)
case 5125:return u.aC(b,c,d)
case 5126:return new A.O(u.a,c,d)
case 35664:return new A.ic(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.c7(u.a,c,d)
case 35667:return new A.id(u.a,c,d)
case 35668:return new A.ie(u.a,c,d)
case 35669:return new A.ig(u.a,c,d)
case 35674:return new A.ii(u.a,c,d)
case 35675:return new A.ca(u.a,c,d)
case 35676:return new A.a2(u.a,c,d)
case 35678:return u.e5(b,c,d)
case 35680:return u.e6(b,c,d)
case 35670:throw H.c(u.bb("BOOL",c))
case 35671:throw H.c(u.bb("BOOL_VEC2",c))
case 35672:throw H.c(u.bb("BOOL_VEC3",c))
case 35673:throw H.c(u.bb("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hI.prototype={}
A.dv.prototype={}
A.ih.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bd.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.id.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.ie.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.ig.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.O.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.ic.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.c7.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.ii.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.ca.prototype={
a9:function(a){var u=new Float32Array(H.cp(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a2.prototype={
a9:function(a){var u=new Float32Array(H.cp(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.bA.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.be.prototype={
dz:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jv.prototype={
$1:function(a){return new V.Q(Math.cos(a),Math.sin(a),0)}}
F.jj.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.k7(n.$1(o),m)
m=J.k7(n.$1(o+3.141592653589793/p.c),m).F(0,l)
m=new V.A(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.w(m)))
n=$.kH
if(n==null){n=new V.A(1,0,0)
$.kH=n
t=n}else t=n
n=u.aq(!J.J(u,t)?V.kJ():t)
s=n.v(0,Math.sqrt(n.w(n)))
n=s.aq(u)
t=n.v(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
m=l.G(0,new V.Q(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.J(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a7()}}}
F.aZ.prototype={
aW:function(){var u=this
if(!u.gd2()){C.a.O(u.a.a.d.b,u)
u.a.a.a7()}u.fb()
u.fc()
u.fd()},
fm:function(a){this.a=a
a.d.b.push(this)},
fn:function(a){this.b=a
a.d.c.push(this)},
fo:function(a){this.c=a
a.d.d.push(this)},
fb:function(){var u=this.a
if(u!=null){C.a.O(u.d.b,this)
this.a=null}},
fc:function(){var u=this.b
if(u!=null){C.a.O(u.d.c,this)
this.b=null}},
fd:function(){var u=this.c
if(u!=null){C.a.O(u.d.d,this)
this.c=null}},
gd2:function(){return this.a==null||this.b==null||this.c==null},
dZ:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cd()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.df())return
return s.v(0,Math.sqrt(s.w(s)))},
e0:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.w(r)))
r=t.F(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aq(r.v(0,Math.sqrt(r.w(r))))
return r.v(0,Math.sqrt(r.w(r)))},
bO:function(){var u,t=this
if(t.d!=null)return!0
u=t.dZ()
if(u==null){u=t.e0()
if(u==null)return!1}t.d=u
t.a.a.a7()
return!0},
dY:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cd()
if(q!=null)s=s.G(0,q)
if(u!=null)s=s.G(0,u)
if(t!=null)s=s.G(0,t)
if(s.df())return
return s.v(0,Math.sqrt(s.w(s)))},
e_:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.B().a){l=d.F(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.F(0,g).u(0,p).G(0,g).F(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.w(l)))
l=o.aq(q)
l=l.v(0,Math.sqrt(l.w(l))).aq(o)
q=l.v(0,Math.sqrt(l.w(l)))}return q},
bM:function(){var u,t=this
if(t.e!=null)return!0
u=t.dY()
if(u==null){u=t.e_()
if(u==null)return!1}t.e=u
t.a.a.a7()
return!0},
gfK:function(a){var u=this
if(J.J(u.a,u.b))return!0
if(J.J(u.b,u.c))return!0
if(J.J(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gd2())return a+"disposed"
u=a+C.b.au(J.ai(s.a.e),0)+", "+C.b.au(J.ai(s.b.e),0)+", "+C.b.au(J.ai(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.fc.prototype={}
F.hH.prototype={
b_:function(a,b,c){var u,t=b.a
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
F.cW.prototype={}
F.fC.prototype={}
F.ia.prototype={
b_:function(a,b,c){var u,t=b.a
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
F.d9.prototype={}
F.hz.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ax(0)
return u},
h5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.ag(o,0)])
for(o=[F.bf];u.length!==0;){t=C.a.gfZ(u)
C.a.c7(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.b_(0,t,q)){s.push(q)
C.a.c7(u,r)}}if(s.length>1)b.h4(s)}}p.a.A()
p.c.c8()
p.d.c8()
p.b.hm()
p.c.c9(new F.ia())
p.d.c9(new F.hH())
o=p.e
if(o!=null)o.ax(0)},
cX:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ah()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aT().a)!==0)++s
if((t&$.aS().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.bl().a)!==0)++s
if((t&$.cu().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.bJ().a)!==0)++s
if((t&$.aR().a)!==0)++s
r=a4.gci(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.N])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cB])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fG(m)
k=l.gci(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cB(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].h3(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cp(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bN(new Z.dB(a1,d),o,a4)
c.b=H.b([],[Z.bU])
a0.b.b
if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.kK(u,34963,b)
c.b.push(new Z.bU(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.A()
b.push(t.e)}a=Z.kK(u,34963,b)
c.b.push(new Z.bU(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.m])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.I("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.I("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.I("   "))}return C.a.k(t,"\n")},
a7:function(){var u=this.e
if(u!=null)u.B(null)}}
F.hA.prototype={
fD:function(a){var u,t,s,r,q=H.b([],[F.aZ]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.cM(p,s,r))}return q},
fE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aZ])
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
h.push(F.cM(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cM(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cM(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cM(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
c9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b_(0,p,n)){p.aW()
break}}}}},
c8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gfK(s)
if(t)s.aW()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bO())s=!1
return s},
bN:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].bM())s=!1
return s},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].I(a))
return C.a.k(r,"\n")},
R:function(){return this.I("")}}
F.hB.prototype={
gl:function(a){return this.b.length},
c9:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b_(0,p,n)){p.aW()
break}}}}},
c8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=J.J(s.a,s.b)
if(t)s.aW()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.b([],[P.m]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.a.k(s,"\n")},
R:function(){return this.I("")}}
F.hC.prototype={
gl:function(a){return 0},
hm:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].gi_()
t=t.ghX(t)
if(t.gl(t).Z(0,1)){t=this.b
return H.f(t,u)
t[u].aW()}}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].I(a))}return C.a.k(s,"\n")},
R:function(){return this.I("")}}
F.bf.prototype={
d_:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iu(u.cx,r,o,t,s,q,p,a,n)},
h3:function(a){var u,t,s=this
if(a.t(0,$.ah())){u=s.f
t=[P.N]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aT())){u=s.r
t=[P.N]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.aS())){u=s.x
t=[P.N]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.bk())){u=s.y
t=[P.N]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bl())){u=s.z
t=[P.N]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cu())){u=s.Q
t=[P.N]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cv())){u=s.Q
t=[P.N]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bJ()))return H.b([s.ch],[P.N])
else if(a.t(0,$.aR())){u=s.cx
t=[P.N]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.N])},
bO:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.H(0,new F.iF(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
bM:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cd()
t.d.H(0,new F.iE(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.a7()
s=t.a.e
if(s!=null)s.ax(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
q.push(C.b.au(J.ai(s.e),0))
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
q.push(V.G(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.iF.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.G(0,t)}}}
F.iE.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.G(0,t)}}}
F.iv.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a7()
return!0},
bc:function(a,b,c,d,e,f){var u=F.iu(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bO()
return!0},
bN:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].bM()
return!0},
fJ:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.J(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.B(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.A()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].I(a))
return C.a.k(u,"\n")},
R:function(){return this.I("")}}
F.iw.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.f(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.f(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.f(t,b)
return t[b]},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.ix(u,b))
C.a.H(u.d,new F.iy(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].I(""))
return C.a.k(r,"\n")}}
F.ix.prototype={
$1:function(a){if(!J.J(a.a,this.a))this.b.$1(a)}}
F.iy.prototype={
$1:function(a){var u=this.a
if(!J.J(a.a,u)&&!J.J(a.b,u))this.b.$1(a)}}
F.iz.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.f(t,u)
return t[u]}else{if(b<0)return H.f(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].I(""))
return C.a.k(r,"\n")}}
F.iB.prototype={}
F.iA.prototype={
b_:function(a,b,c){return J.J(b.f,c.f)}}
F.iC.prototype={}
F.he.prototype={
h4:function(a){var u,t,s,r,q,p,o,n,m=V.cd()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.A(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.v(0,Math.sqrt(m.w(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.v(0,Math.sqrt(p*p+o*o+n*n))}if(!J.J(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.B(null)}}}return}}
F.iD.prototype={
gl:function(a){return 0},
i:function(a){return this.R()},
R:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].I(""))}return C.a.k(s,"\n")}}
O.d_.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.C():u},
Y:function(a){var u=this.fr
if(u!=null)u.B(a)},
bt:function(){return this.Y(null)},
cF:function(a){this.a=null
this.Y(a)},
fh:function(){return this.cF(null)},
em:function(a,b){var u=new D.b0()
u.b=!0
this.Y(u)},
eo:function(a,b){var u=new D.b1()
u.b=!0
this.Y(u)},
cv:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gak()
o=u.h(0,q.gak())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cz])
u.H(0,new O.fS(g,n))
C.a.aO(n,new O.fT())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cI])
m.H(0,new O.fU(g,l))
C.a.aO(l,new O.fV())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gak()
o=k.h(0,q.gak())
k.m(0,p,o==null?1:o)}j=H.b([],[A.da])
k.H(0,new O.fW(g,j))
C.a.aO(j,new O.fX())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.o)(f),++r){q=f[r]
s=q.gak()
p=i.h(0,q.gak())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dh])
i.H(0,new O.fY(g,h))
C.a.aO(h,new O.fZ())
f=C.c.a_(g.e.a.length+3,4)
g.dy.e
return A.lM(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dX:function(a,b){},
ae:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a_(u,u.length);u.q();){t=u.d
t.toString
s=$.it
if(s==null)s=$.it=new V.A(0,0,1)
t.a=s
r=$.is
t.d=r==null?$.is=new V.A(0,1,0):r
r=$.ir
t.e=r==null?$.ir=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bn(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bn(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bn(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
dm:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cv()
u=b2.fr.h(0,b1.aX)
if(u==null){u=A.lL(b1,b2.a)
b2.cQ(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bf
b1=b3.e
if(!(b1 instanceof Z.bN))b1=b3.e=null
if(b1==null||!b1.d.t(0,s)){b1=t.k4
if(b1)b3.d.ap()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bN()
q.a.bN()
q=q.e
if(q!=null)q.ax(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fJ()
p=p.e
if(p!=null)p.ax(0)}n=b3.d.cX(new Z.dC(b2.a),s)
n.ar($.ah()).e=b0.a.Q.c
if(b1)n.ar($.aT()).e=b0.a.cx.c
if(r)n.ar($.aS()).e=b0.a.ch.c
if(t.r2)n.ar($.bk()).e=b0.a.cy.c
if(q)n.ar($.bl()).e=b0.a.db.c
if(t.ry)n.ar($.aR()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dn])
b0.a.W(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gX(r)
b1=b1.dy
b1.toString
b1.a9(r.a3(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gX(r)
q=b2.dx
q=b2.cx=r.u(0,q.gX(q))
r=q}b1=b1.fr
b1.toString
b1.a9(r.a3(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.ghk()
q=b2.dx
q=b2.ch=r.u(0,q.gX(q))
r=q}b1=b1.fy
b1.toString
b1.a9(r.a3(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gX(r)
b1=b1.fx
b1.toString
b1.a9(r.a3(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a9(C.j.a3(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a9(C.j.a3(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a9(C.j.a3(r,!0))}if(t.be>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.cp(r.a3(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}if(t.a.a){b1=b0.a
r=b0.f.f
b1=b1.r2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.k1){if(t.b.a){b1=b0.a
r=b0.r.f
b1=b1.x1
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.c.a){b1=b0.a
r=b0.x.f
b1=b1.y2
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}if(t.d.a){b1=b0.a
r=b0.y.f
b1=b1.bf
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.d6
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.d5
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.w
i=new H.I([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
f=g.gak()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.cw(b0.a.bS.h(0,f),e)
p=g.ghB()
o=$.ao
p=p.b4(o==null?$.ao=new V.Q(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghG()
o=$.ao
p=p.b4(o==null?$.ao=new V.Q(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaI(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gd4()){p=g.gcS()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcT()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcU()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bR.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gX(r)
r=P.w
b=new H.I([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.cw(b0.a.bU.h(0,0),e)
p=c.bn(g.a)
o=p.a
a=p.b
a0=p.c
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
q=b0.a.bT.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gX(r)
r=P.w
a1=new H.I([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
f=g.gak()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.cw(b0.a.bW.h(0,f),e)
a2=c.u(0,g.gX(g))
p=g.gX(g)
o=$.ao
p=p.b4(o==null?$.ao=new V.Q(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ao
p=a2.b4(p==null?$.ao=new V.Q(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaI(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gay()
p=a2.c_(0)
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
j=new Float32Array(H.cp(new V.d1(o,a,a0,a3,a4,a5,a6,a7,p).a3(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gay()
p=g.gay()
if(!C.a.C(m,p)){p.saY(0,m.length)
m.push(p)}p=g.gay()
o=p.gaZ(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaN()
p=g.gdA()
o=d.x
o.toString
a=p.gfT(p)
a0=p.gfU(p)
a3=p.gfV()
p=p.gfS()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaN()
if(!C.a.C(m,p)){p.saY(0,m.length)
m.push(p)}p=g.gaN()
o=p.gaZ(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gd4()){p=g.gcS()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcT()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcU()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bV.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gX(r)
r=P.w
a9=new H.I([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.o)(r),++h){g=r[h]
f=g.gak()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.cw(b0.a.bY.h(0,f),e)
p=g.ghj(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghE(g).hW()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b4(g.ghj(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaI(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gay()
p=g.gcc()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gca(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghY()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghZ()
o=d.y
o.a.uniform1f(o.d,p)
g.gay()
p=g.gay()
if(!C.a.C(m,p)){p.saY(0,m.length)
m.push(p)}p=g.gay()
o=p.gaZ(p)
if(o){o=d.dx
o.toString
a=p.gaZ(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gaY(p)
o.a.uniform1i(o.d,p)}}g.gaN()
p=g.gdA()
o=d.z
o.toString
a=p.gfT(p)
a0=p.gfU(p)
a3=p.gfV()
p=p.gfS()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaN()
if(!C.a.C(m,p)){p.saY(0,m.length)
m.push(p)}p=g.gaN()
o=p.gaZ(p)
if(o){o=d.dy
o.toString
a=p.gaZ(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gaY(p)
o.a.uniform1i(o.d,p)}}if(g.ghF()){p=g.ghD()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.ghC()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gd4()){p=g.gcS()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcT()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcU()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.o)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bX.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gX(r).c_(0)}b1=b1.id
b1.toString
b1.a9(r.a3(0,!0))}if(t.db){b0.dX(m,b0.ch)
b1=b0.a
r=b0.ch
b1.fl(b1.d7,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.d8
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.d9
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.da
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.dc
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].W(b2)
b1=b3.e
b1.W(b2)
b1.a8(b2)
b1.aK(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aK(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.d1()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cv().aX}}
O.fS.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.cz(a,C.c.a_(b+3,4)*4))}}
O.fT.prototype={
$2:function(a,b){return J.cx(a.a,b.a)}}
O.fU.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.cI(a,C.c.a_(b+3,4)*4))}}
O.fV.prototype={
$2:function(a,b){return J.cx(a.a,b.a)}}
O.fW.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.da(a,C.c.a_(b+3,4)*4))}}
O.fX.prototype={
$2:function(a,b){return J.cx(a.a,b.a)}}
O.fY.prototype={
$2:function(a,b){if(typeof b!=="number")return b.G()
return this.b.push(new A.dh(a,C.c.a_(b+3,4)*4))}}
O.fZ.prototype={
$2:function(a,b){return J.cx(a.a,b.a)}}
O.fM.prototype={
an:function(){var u,t=this
t.ck()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.Y(u)}}}
O.d0.prototype={
an:function(){},
cI:function(a){var u,t,s=this
if(!s.c.t(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.Y(null)}}}
O.fN.prototype={}
O.al.prototype={
cH:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.Y(t)}},
an:function(){this.ck()
this.cH(new V.S(1,1,1))},
saI:function(a,b){this.cI(new A.V(!0,!1,!1))
this.cH(b)}}
O.fP.prototype={}
O.fQ.prototype={
an:function(){var u,t=this
t.cl()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.Y(u)}}}
O.fR.prototype={
cJ:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.Y(t)}},
an:function(){this.cl()
this.cJ(100)}}
O.df.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u},
Y:function(a){var u=this.e
if(u!=null)u.B(a)},
bt:function(){return this.Y(null)},
dm:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.hI(t,n)
u.cm(t,n)
u.dd(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.k(u.y.h(0,"fov"),"$iO")
u.ch=H.k(u.y.h(0,"ratio"),"$iO")
u.cx=H.k(u.y.h(0,"boxClr"),"$iE")
u.cy=H.k(u.y.h(0,"boxTxt"),"$ibe")
u.db=H.k(u.y.h(0,"viewMat"),"$ia2")
a.cQ(u)}o.a=u}if(b.e==null){t=b.d.cX(new Z.dC(a.a),$.ah())
t.ar($.ah()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.W(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.dz(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gX(s).c_(0)
r=r.db
r.toString
r.a9(s.a3(0,!0))
t=b.e
if(t instanceof Z.bN){t.W(a)
t.a8(a)
t.aK(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.d1()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dm.prototype={}
T.dn.prototype={}
T.hY.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.C():u}}
T.hZ.prototype={
aD:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.U(u,"load",new T.i_(this,u,!1,b,!1,d,a),!1)},
fi:function(a,b,c){var u,t,s,r
b=V.k2(b)
u=V.k2(a.width)
t=V.k2(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jB()
s.width=u
s.height=t
r=C.f.dt(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mV(r.getImageData(0,0,s.width,s.height))}}}
T.i_.prototype={
$1:function(a){var u=this,t=u.a,s=t.fi(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.V.ht(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.fW()}++t.e}}
X.jA.prototype={}
X.fk.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.C():u},
ah:function(a){var u=this.x
if(u!=null)u.B(a)},
W:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.v(u)
q=C.d.ad(r*u)
r=s.b
if(typeof t!=="number")return H.v(t)
p=C.d.ad(r*t)
r=C.d.ad(s.c*u)
a.c=r
s=C.d.ad(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fr.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.C():u},
W:function(a){var u
a.cy.bl(V.bv())
u=V.bv()
a.db.bl(u)},
aK:function(a){a.cy.av()
a.db.av()}}
X.d8.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.C():u},
ah:function(a){var u=this.f
if(u!=null)u.B(a)},
dU:function(){return this.ah(null)},
W:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.am(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bl(k)
r=$.kq
if(r==null){r=V.ks()
q=V.jT()
p=$.kG
r=V.km(r,q,p==null?$.kG=new V.A(0,0,-1):p)
$.kq=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aL(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bl(u)},
aK:function(a){a.cy.av()
a.db.av()}}
X.hU.prototype={}
V.cD.prototype={
b6:function(a){this.b=new P.fp(C.L)
this.c=null
this.d=H.b([],[[P.ad,W.ac]])},
K:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ac]))
u=a.split("\n")
for(l=u.length,t=[W.ac],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.e4(q,0,q.length)
n=o==null?q:o
C.J.dw(p,H.k4(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gbh(m.d).push(p)}},
dl:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.ad,W.ac]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.bd()
for(t.toString,s=new H.l(u),s=new P.bD(t.cb(new H.b6(s,s.gl(s))).a());s.q();)r.bk(s.gD(s))}}
V.jt.prototype={
$1:function(a){var u=C.d.dr(this.a.gh0(),2)
if(u!=="0.00")P.k3(u+" fps")}}
V.eZ.prototype={
bk:function(a){var u=this
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
bd:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.i3()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.q(new H.l("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.q(new H.l("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=K.M("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=K.M("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=K.q(new H.l("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.M("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.M("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.q(new H.l(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.q(new H.l(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.q(new H.l('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.q(new H.l('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.q(new H.l('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.ax())
t=a1.j(0,r).k(0,h)
u=K.q(new H.l("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.q(new H.l("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.q(new H.l("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.q(new H.l("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.ax())
t=a1.j(0,r).k(0,e)
u=K.q(new H.l("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.a1()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.q(new H.l("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.a1()
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.q(new H.l("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.q(new H.l(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.q(new H.l(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.L("Num")
t=a1.j(0,n)
t.d=t.a.L("Num")
t=a1.j(0,m)
t.d=t.a.L("Symbol")
t=a1.j(0,j)
t.d=t.a.L("String")
t=a1.j(0,g)
t.d=t.a.L("String")
t=a1.j(0,c)
t.d=t.a.L(d)
t=a1.j(0,a0)
t.d=t.a.L(a0)
t=a1.j(0,q)
t=t.d=t.a.L(q)
u=[P.m]
t.aw(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aw(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aw(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fm.prototype={
bk:function(a){var u=this
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
bd:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.i3()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.q(new H.l("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.q(new H.l("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=K.M("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=K.M("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=K.q(new H.l("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.M("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.M("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.q(new H.l(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.q(new H.l(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.q(new H.l("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.q(new H.l("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.ax())
t=e.j(0,j).k(0,i)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.a1()
s=[K.b7]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.q(new H.l("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.a1()
u.a=H.b([],s)
t.a.push(u)
t=K.q(new H.l("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.q(new H.l("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.q(new H.l(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.q(new H.l(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.L("Num")
u=e.j(0,n)
u.d=u.a.L("Num")
u=e.j(0,m)
u.d=u.a.L("Symbol")
u=e.j(0,i)
u.d=u.a.L(j)
u=e.j(0,g)
u.d=u.a.L(h)
u=e.j(0,f)
u.d=u.a.L(f)
u=e.j(0,q)
u=u.d=u.a.L(q)
t=[P.m]
u.aw(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aw(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aw(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fn.prototype={
bk:function(a){var u=this,t="#111"
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
bd:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.i3()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.q(new H.l("_"))
u.a.push(t)
t=K.M("a","z")
u.a.push(t)
t=K.M("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.q(new H.l("_"))
t.a.push(u)
u=K.M("0","9")
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.q(new H.l("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.q(new H.l("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.q(new H.l("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.q(new H.l('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.q(new H.l('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.q(new H.l("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.q(new H.l('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.ax())
l.j(0,s).k(0,m).a.push(new K.ax())
u=l.j(0,m).k(0,m)
t=new K.a1()
t.a=H.b([],[K.b7])
u.a.push(t)
u=K.q(new H.l('</\\-!>=_"'))
t.a.push(u)
u=K.M("a","z")
t.a.push(u)
u=K.M("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.L("Symbol")
u=l.j(0,n)
u.d=u.a.L("String")
u=l.j(0,r)
t=u.a.L(r)
u.d=t
t.aw(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.L(q)
t=l.j(0,m)
t.d=t.a.L(m)
return l}}
V.hk.prototype={
dl:function(a,b){this.d=H.b([],[[P.ad,W.ac]])
this.K(C.a.k(b,"\n"),"#111")},
bk:function(a){},
bd:function(){return}}
V.hD.prototype={
dM:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.U(q,"scroll",new V.hF(o),!1)},
cP:function(a){var u,t,s,r,q,p,o,n
this.fq()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.h2(a),s.toString,r=new H.l(r),r=new P.bD(s.cb(new H.b6(r,r.gl(r))).a());r.q();){s=r.gD(r)
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
if(H.l2(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kQ(C.t,s,C.h,!1)
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
ds:function(a){var u,t,s,r=new V.eZ("dart")
r.b6("dart")
u=new V.fm("glsl")
u.b6("glsl")
t=new V.fn("html")
t.b6("html")
s=C.a.h_(H.b([r,u,t],[V.cD]),new V.hG(a))
if(s!=null)return s
r=new V.hk("plain")
r.b6("plain")
return r},
cO:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jY(s).bq(s,"+")){b0[t]=C.b.ag(s,1)
a6.push(1)
u=!0}else if(C.b.bq(s,"-")){b0[t]=C.b.ag(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ds(a8)
r.dl(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kQ(C.t,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.k9()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.o)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.o)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gN(s);a2.q();)d.appendChild(a2.gD(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fq:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.i3()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.a1()
r=[K.b7]
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.l("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.q(new H.l("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.a1()
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.l("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.q(new H.l("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.a1()
s.a=H.b([],r)
t.a.push(s)
t=K.q(new H.l("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.q(new H.l("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.q(new H.l("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.q(new H.l("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.a1()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.q(new H.l("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.a1()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.ax())
s=u.j(0,i).k(0,i)
t=new K.a1()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.l("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.L(p)
s=u.j(0,n)
s.d=s.a.L(o)
s=u.j(0,"CodeEnd")
s.d=s.a.L(m)
s=u.j(0,j)
s.d=s.a.L("Link")
s=u.j(0,i)
s.d=s.a.L(i)
this.b=u}}
V.hF.prototype={
$1:function(a){P.kB(C.i,new V.hE(this.a))}}
V.hE.prototype={
$0:function(){var u=C.d.ad(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hG.prototype={
$1:function(a){return a.a===this.a}}
B.jr.prototype={
$1:function(a){var u=this.a.d,t=this.b,s=u.a,r=[P.m]
t.cO("Vertex Shader for Skybox","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
s=u.a
t.cO("Fragment Shader for Skybox","glsl",0,H.b((s==null?null:s.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dE=u.i
u=J.cT.prototype
u.dG=u.i
u=P.h.prototype
u.dF=u.bo
u=W.P.prototype
u.br=u.aa
u=W.e7.prototype
u.dH=u.aj
u=K.cP.prototype
u.dD=u.at
u.cj=u.i
u=O.d0.prototype
u.ck=u.an
u=O.al.prototype
u.cl=u.an})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"mk","lG",20)
t(P,"mP","m7",6)
t(P,"mQ","m8",6)
t(P,"mR","m9",6)
s(P,"kV","mN",9)
r(W,"n3",4,null,["$4"],["ma"],16,0)
r(W,"n4",4,null,["$4"],["mb"],16,0)
var l
q(l=E.aB.prototype,"gdj",0,0,null,["$1","$0"],["dk","hb"],0,0)
q(l,"gdh",0,0,null,["$1","$0"],["di","h8"],0,0)
p(l,"gh6","h7",3)
p(l,"gh9","ha",3)
q(l=E.dp.prototype,"gco",0,0,null,["$1","$0"],["cq","cp"],0,0)
o(l,"ghp","dn",9)
n(l=X.dx.prototype,"geC","eD",4)
n(l,"gep","eq",4)
n(l,"gew","ex",2)
n(l,"geG","eH",10)
n(l,"geE","eF",10)
n(l,"geK","eL",2)
n(l,"geO","eP",2)
n(l,"geA","eB",2)
n(l,"geM","eN",2)
n(l,"gey","ez",2)
n(l,"geQ","eR",18)
n(l,"geS","eT",4)
n(l,"gf7","f8",5)
n(l,"gf3","f4",5)
n(l,"gf5","f6",5)
q(D.bq.prototype,"gdO",0,0,null,["$1","$0"],["al","dP"],0,0)
q(l=D.cV.prototype,"gcC",0,0,null,["$1","$0"],["cD","eI"],0,0)
n(l,"geU","eV",19)
p(l,"gej","ek",11)
p(l,"geY","eZ",11)
m(V.F.prototype,"gl","c0",12)
m(V.A.prototype,"gl","c0",12)
q(l=U.bR.prototype,"gaE",0,0,null,["$1","$0"],["M","a1"],0,0)
p(l,"geh","ei",13)
p(l,"geW","eX",13)
q(l=U.dy.prototype,"gaE",0,0,null,["$1","$0"],["M","a1"],0,0)
n(l,"gbB","bC",1)
n(l,"gbD","bE",1)
n(l,"gbF","bG",1)
q(l=U.dz.prototype,"gaE",0,0,null,["$1","$0"],["M","a1"],0,0)
n(l,"gbB","bC",1)
n(l,"gbD","bE",1)
n(l,"gbF","bG",1)
n(l,"gea","eb",1)
n(l,"gec","ed",1)
n(l,"gfA","fB",1)
n(l,"gfw","fz",1)
n(l,"gfu","fv",1)
n(U.dA.prototype,"gef","eg",1)
q(l=M.cE.prototype,"gU",0,0,null,["$1","$0"],["V","aP"],0,0)
p(l,"gf_","f0",14)
p(l,"gf1","f2",14)
q(M.cG.prototype,"gU",0,0,null,["$1","$0"],["V","aP"],0,0)
q(l=M.cL.prototype,"gU",0,0,null,["$1","$0"],["V","aP"],0,0)
p(l,"ger","es",3)
p(l,"geu","ev",3)
q(l=O.d_.prototype,"gbs",0,0,null,["$1","$0"],["Y","bt"],0,0)
q(l,"gfg",0,0,null,["$1","$0"],["cF","fh"],0,0)
p(l,"gel","em",15)
p(l,"gen","eo",15)
q(O.df.prototype,"gbs",0,0,null,["$1","$0"],["Y","bt"],0,0)
q(X.d8.prototype,"gdT",0,0,null,["$1","$0"],["ah","dU"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.X,null)
s(P.X,[H.jL,J.a,J.a_,P.dV,P.h,H.b6,P.fv,H.cN,H.il,H.i8,P.br,H.bO,H.ec,P.W,H.fD,H.fE,H.fx,P.ei,P.bC,P.bD,P.dD,P.dk,P.hQ,P.dq,P.je,P.j1,P.iW,P.dU,P.t,P.eP,P.fq,P.jc,P.av,P.a8,P.a6,P.aY,P.hi,P.di,P.dM,P.fj,P.fl,P.ad,P.bX,P.b8,P.m,P.aq,W.eV,W.cg,W.K,W.d6,W.e7,W.j6,W.cO,W.aH,W.j0,W.eo,P.en,P.iX,K.ax,K.cP,K.b7,K.hp,K.hy,L.dj,L.dr,L.ds,L.i2,O.ay,O.bZ,E.eL,E.aB,E.bo,E.bw,E.dL,E.hq,E.dp,Z.dB,Z.dC,Z.bN,Z.bU,Z.bg,D.eO,D.bs,D.T,X.cC,X.cU,X.fA,X.fH,X.a9,X.h5,X.i4,X.dx,D.eK,D.bq,D.a0,D.hm,D.hL,V.S,V.az,V.f9,V.d1,V.aE,V.Y,V.Q,V.ba,V.dc,V.F,V.A,U.dy,U.dz,U.dA,M.cG,M.cL,M.ae,A.cy,A.eF,A.V,A.cz,A.cI,A.da,A.dh,A.fO,A.c8,A.c9,A.cb,A.cc,A.dv,A.ih,F.aZ,F.fc,F.cW,F.fC,F.d9,F.hz,F.hA,F.hB,F.hC,F.bf,F.iv,F.iw,F.iz,F.iB,F.iC,F.iD,O.dm,O.d0,O.fP,T.hZ,X.jA,X.hU,X.fr,X.d8,V.cD,V.hD])
s(J.a,[J.fw,J.cS,J.cT,J.b2,J.bV,J.b3,H.c1,W.e,W.eC,W.cA,W.ak,W.H,W.dF,W.a7,W.f_,W.f0,W.dH,W.cK,W.dJ,W.f2,W.i,W.dN,W.aD,W.fo,W.dQ,W.b_,W.fG,W.h_,W.dW,W.dX,W.aF,W.dY,W.e0,W.aI,W.e4,W.e6,W.aL,W.e8,W.aM,W.ed,W.ar,W.eg,W.i1,W.aO,W.ej,W.i6,W.io,W.ep,W.er,W.et,W.ev,W.ex,P.b5,P.dS,P.b9,P.e2,P.ho,P.ee,P.bb,P.el,P.eG,P.dE,P.dd,P.ea])
s(J.cT,[J.hj,J.bB,J.b4])
t(J.jK,J.b2)
s(J.bV,[J.cR,J.cQ])
t(P.fF,P.dV)
s(P.fF,[H.dw,W.iN,W.Z,P.ff])
t(H.l,H.dw)
s(P.h,[H.p,H.bY,H.ce,P.ft])
s(H.p,[H.cX,H.bu])
t(H.f5,H.bY)
s(P.fv,[H.cZ,H.iH])
t(H.fK,H.cX)
s(P.br,[H.hf,H.fz,H.ik,H.eN,H.hw,P.d7,P.ab,P.im,P.ij,P.c5,P.eS,P.eY])
s(H.bO,[H.jw,H.hV,H.fy,H.jn,H.jo,H.jp,P.iJ,P.iI,P.iK,P.iL,P.jb,P.ja,P.jh,P.iZ,P.j_,P.fJ,P.f3,P.f4,W.f6,W.h1,W.h3,W.hv,W.hP,W.iR,W.hd,W.hc,W.j2,W.j3,W.j9,W.jd,P.ji,P.fg,P.fh,P.eI,E.hr,E.hs,E.ht,E.i0,D.fa,D.fb,F.jv,F.jj,F.iF,F.iE,F.ix,F.iy,O.fS,O.fT,O.fU,O.fV,O.fW,O.fX,O.fY,O.fZ,T.i_,V.jt,V.hF,V.hE,V.hG,B.jr])
s(H.hV,[H.hN,H.bL])
t(P.fI,P.W)
s(P.fI,[H.I,W.iM])
t(H.d2,H.c1)
s(H.d2,[H.ch,H.cj])
t(H.ci,H.ch)
t(H.c0,H.ci)
t(H.ck,H.cj)
t(H.d3,H.ck)
s(H.d3,[H.h6,H.h7,H.h8,H.h9,H.ha,H.d4,H.hb])
t(P.j7,P.ft)
t(P.iY,P.je)
t(P.iV,P.j1)
t(P.eT,P.hQ)
t(P.f7,P.eP)
s(P.eT,[P.fp,P.iq])
t(P.ip,P.f7)
s(P.a6,[P.N,P.w])
s(P.ab,[P.by,P.fs])
s(W.e,[W.D,W.fe,W.aK,W.cl,W.aN,W.as,W.cn,W.iG,W.cf,P.eJ,P.bm])
s(W.D,[W.P,W.aW])
s(W.P,[W.n,P.j])
s(W.n,[W.eD,W.eE,W.bn,W.bp,W.ac,W.fi,W.bT,W.hx,W.dl,W.hS,W.hT,W.c6])
t(W.eU,W.ak)
t(W.bP,W.dF)
s(W.a7,[W.eW,W.eX])
t(W.dI,W.dH)
t(W.cJ,W.dI)
t(W.dK,W.dJ)
t(W.f1,W.dK)
t(W.aC,W.cA)
t(W.dO,W.dN)
t(W.fd,W.dO)
t(W.dR,W.dQ)
t(W.bS,W.dR)
t(W.bc,W.i)
s(W.bc,[W.bt,W.an,W.bz])
t(W.h0,W.dW)
t(W.h2,W.dX)
t(W.dZ,W.dY)
t(W.h4,W.dZ)
t(W.e1,W.e0)
t(W.d5,W.e1)
t(W.e5,W.e4)
t(W.hl,W.e5)
t(W.hu,W.e6)
t(W.cm,W.cl)
t(W.hJ,W.cm)
t(W.e9,W.e8)
t(W.hK,W.e9)
t(W.hO,W.ed)
t(W.eh,W.eg)
t(W.hW,W.eh)
t(W.co,W.cn)
t(W.hX,W.co)
t(W.ek,W.ej)
t(W.i5,W.ek)
t(W.bh,W.an)
t(W.eq,W.ep)
t(W.iO,W.eq)
t(W.dG,W.cK)
t(W.es,W.er)
t(W.iS,W.es)
t(W.eu,W.et)
t(W.e_,W.eu)
t(W.ew,W.ev)
t(W.j4,W.ew)
t(W.ey,W.ex)
t(W.j5,W.ey)
t(W.iP,W.iM)
t(W.iQ,P.dk)
t(W.j8,W.e7)
t(P.a5,P.iX)
t(P.dT,P.dS)
t(P.fB,P.dT)
t(P.e3,P.e2)
t(P.hg,P.e3)
t(P.c4,P.j)
t(P.ef,P.ee)
t(P.hR,P.ef)
t(P.em,P.el)
t(P.i7,P.em)
t(P.eH,P.dE)
t(P.hh,P.bm)
t(P.eb,P.ea)
t(P.hM,P.eb)
s(K.cP,[K.a1,L.du])
s(E.eL,[Z.cB,A.de,T.dn])
s(D.T,[D.b0,D.b1,D.z,X.hn])
s(X.hn,[X.cY,X.aG,X.c_,X.dt])
s(O.ay,[D.cV,U.bR,M.cE])
s(D.eO,[U.eR,U.a4])
t(U.cF,U.a4)
s(A.de,[A.fL,A.hI])
s(A.dv,[A.bd,A.id,A.ie,A.ig,A.ib,A.O,A.ic,A.E,A.c7,A.ii,A.ca,A.a2,A.bA,A.be])
t(F.hH,F.fc)
t(F.ia,F.fC)
t(F.iA,F.iB)
t(F.he,F.iC)
s(O.dm,[O.d_,O.df])
s(O.d0,[O.fM,O.fN,O.al])
s(O.al,[O.fQ,O.fR])
t(T.hY,T.dn)
t(X.fk,X.hU)
s(V.cD,[V.eZ,V.fm,V.fn,V.hk])
u(H.dw,H.il)
u(H.ch,P.t)
u(H.ci,H.cN)
u(H.cj,P.t)
u(H.ck,H.cN)
u(P.dV,P.t)
u(W.dF,W.eV)
u(W.dH,P.t)
u(W.dI,W.K)
u(W.dJ,P.t)
u(W.dK,W.K)
u(W.dN,P.t)
u(W.dO,W.K)
u(W.dQ,P.t)
u(W.dR,W.K)
u(W.dW,P.W)
u(W.dX,P.W)
u(W.dY,P.t)
u(W.dZ,W.K)
u(W.e0,P.t)
u(W.e1,W.K)
u(W.e4,P.t)
u(W.e5,W.K)
u(W.e6,P.W)
u(W.cl,P.t)
u(W.cm,W.K)
u(W.e8,P.t)
u(W.e9,W.K)
u(W.ed,P.W)
u(W.eg,P.t)
u(W.eh,W.K)
u(W.cn,P.t)
u(W.co,W.K)
u(W.ej,P.t)
u(W.ek,W.K)
u(W.ep,P.t)
u(W.eq,W.K)
u(W.er,P.t)
u(W.es,W.K)
u(W.et,P.t)
u(W.eu,W.K)
u(W.ev,P.t)
u(W.ew,W.K)
u(W.ex,P.t)
u(W.ey,W.K)
u(P.dS,P.t)
u(P.dT,W.K)
u(P.e2,P.t)
u(P.e3,W.K)
u(P.ee,P.t)
u(P.ef,W.K)
u(P.el,P.t)
u(P.em,W.K)
u(P.dE,P.W)
u(P.ea,P.t)
u(P.eb,W.K)})()
var v={mangledGlobalNames:{w:"int",N:"double",a6:"num",m:"String",av:"bool",b8:"Null",ad:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.T]},{func:1,ret:-1,args:[D.T]},{func:1,ret:-1,args:[W.an]},{func:1,ret:-1,args:[P.w,[P.h,E.aB]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bz]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b8,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[P.w,[P.h,D.a0]]},{func:1,ret:P.N},{func:1,ret:-1,args:[P.w,[P.h,U.a4]]},{func:1,ret:-1,args:[P.w,[P.h,M.ae]]},{func:1,ret:-1,args:[P.w,[P.h,V.aE]]},{func:1,ret:P.av,args:[W.P,P.m,P.m,W.cg]},{func:1,ret:P.b8,args:[,]},{func:1,ret:-1,args:[W.bh]},{func:1,ret:P.av,args:[[P.h,D.a0]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bn.prototype
C.f=W.bp.prototype
C.J=W.ac.prototype
C.M=J.a.prototype
C.a=J.b2.prototype
C.N=J.cQ.prototype
C.c=J.cR.prototype
C.j=J.cS.prototype
C.d=J.bV.prototype
C.b=J.b3.prototype
C.O=J.b4.prototype
C.v=J.hj.prototype
C.V=P.dd.prototype
C.w=W.dl.prototype
C.m=J.bB.prototype
C.x=W.bh.prototype
C.y=W.cf.prototype
C.z=new E.bo("Browser.chrome")
C.o=new E.bo("Browser.firefox")
C.p=new E.bo("Browser.edge")
C.A=new E.bo("Browser.other")
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

C.H=new P.hi()
C.h=new P.ip()
C.I=new P.iq()
C.e=new P.iY()
C.i=new P.aY(0)
C.K=new P.aY(5e6)
C.L=new P.fq("element",!1,!1,!1)
C.P=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.Q=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.R=H.b(u([]),[P.m])
C.t=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.S=new E.bw("OperatingSystem.windows")
C.u=new E.bw("OperatingSystem.mac")
C.T=new E.bw("OperatingSystem.linux")
C.U=new E.bw("OperatingSystem.other")
C.W=new P.bC(null,2)})();(function staticFields(){$.aj=0
$.bM=null
$.ka=null
$.kY=null
$.kU=null
$.l0=null
$.jk=null
$.jq=null
$.k0=null
$.bE=null
$.cq=null
$.cr=null
$.jV=!1
$.af=C.e
$.a3=[]
$.aA=null
$.jF=null
$.kg=null
$.kf=null
$.dP=P.kj(P.m,P.fl)
$.f8=null
$.kn=null
$.kr=null
$.ao=null
$.kw=null
$.kF=null
$.kI=null
$.kH=null
$.ir=null
$.is=null
$.it=null
$.kG=null
$.kq=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"no","l5",function(){return H.kX("_$dart_dartClosure")})
u($,"np","k5",function(){return H.kX("_$dart_js")})
u($,"nq","l6",function(){return H.at(H.i9({
toString:function(){return"$receiver$"}}))})
u($,"nr","l7",function(){return H.at(H.i9({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ns","l8",function(){return H.at(H.i9(null))})
u($,"nt","l9",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nw","lc",function(){return H.at(H.i9(void 0))})
u($,"nx","ld",function(){return H.at(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nv","lb",function(){return H.at(H.kD(null))})
u($,"nu","la",function(){return H.at(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nz","lf",function(){return H.at(H.kD(void 0))})
u($,"ny","le",function(){return H.at(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nM","k6",function(){return P.m6()})
u($,"nP","lk",function(){return P.lX("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nN","lj",function(){return P.kk(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"nG","li",function(){return Z.aa(0)})
u($,"nA","lg",function(){return Z.aa(511)})
u($,"nI","ah",function(){return Z.aa(1)})
u($,"nH","aT",function(){return Z.aa(2)})
u($,"nC","aS",function(){return Z.aa(4)})
u($,"nJ","bk",function(){return Z.aa(8)})
u($,"nK","bl",function(){return Z.aa(16)})
u($,"nD","cu",function(){return Z.aa(32)})
u($,"nE","cv",function(){return Z.aa(64)})
u($,"nF","lh",function(){return Z.aa(96)})
u($,"nL","bJ",function(){return Z.aa(128)})
u($,"nB","aR",function(){return Z.aa(256)})
u($,"nn","l4",function(){return new V.f9(1e-9)})
u($,"nm","B",function(){return $.l4()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c1,ArrayBufferView:H.c1,Float32Array:H.c0,Float64Array:H.c0,Int16Array:H.h6,Int32Array:H.h7,Int8Array:H.h8,Uint16Array:H.h9,Uint32Array:H.ha,Uint8ClampedArray:H.d4,CanvasPixelArray:H.d4,Uint8Array:H.hb,HTMLAudioElement:W.n,HTMLBRElement:W.n,HTMLBaseElement:W.n,HTMLButtonElement:W.n,HTMLContentElement:W.n,HTMLDListElement:W.n,HTMLDataElement:W.n,HTMLDataListElement:W.n,HTMLDetailsElement:W.n,HTMLDialogElement:W.n,HTMLEmbedElement:W.n,HTMLFieldSetElement:W.n,HTMLHRElement:W.n,HTMLHeadElement:W.n,HTMLHeadingElement:W.n,HTMLHtmlElement:W.n,HTMLIFrameElement:W.n,HTMLInputElement:W.n,HTMLLIElement:W.n,HTMLLabelElement:W.n,HTMLLegendElement:W.n,HTMLLinkElement:W.n,HTMLMapElement:W.n,HTMLMediaElement:W.n,HTMLMenuElement:W.n,HTMLMetaElement:W.n,HTMLMeterElement:W.n,HTMLModElement:W.n,HTMLOListElement:W.n,HTMLObjectElement:W.n,HTMLOptGroupElement:W.n,HTMLOptionElement:W.n,HTMLOutputElement:W.n,HTMLParagraphElement:W.n,HTMLParamElement:W.n,HTMLPictureElement:W.n,HTMLPreElement:W.n,HTMLProgressElement:W.n,HTMLQuoteElement:W.n,HTMLScriptElement:W.n,HTMLShadowElement:W.n,HTMLSlotElement:W.n,HTMLSourceElement:W.n,HTMLSpanElement:W.n,HTMLStyleElement:W.n,HTMLTableCaptionElement:W.n,HTMLTableCellElement:W.n,HTMLTableDataCellElement:W.n,HTMLTableHeaderCellElement:W.n,HTMLTableColElement:W.n,HTMLTextAreaElement:W.n,HTMLTimeElement:W.n,HTMLTitleElement:W.n,HTMLTrackElement:W.n,HTMLUListElement:W.n,HTMLUnknownElement:W.n,HTMLVideoElement:W.n,HTMLDirectoryElement:W.n,HTMLFontElement:W.n,HTMLFrameElement:W.n,HTMLFrameSetElement:W.n,HTMLMarqueeElement:W.n,HTMLElement:W.n,AccessibleNodeList:W.eC,HTMLAnchorElement:W.eD,HTMLAreaElement:W.eE,Blob:W.cA,HTMLBodyElement:W.bn,HTMLCanvasElement:W.bp,CDATASection:W.aW,CharacterData:W.aW,Comment:W.aW,ProcessingInstruction:W.aW,Text:W.aW,CSSPerspective:W.eU,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bP,MSStyleCSSProperties:W.bP,CSS2Properties:W.bP,CSSImageValue:W.a7,CSSKeywordValue:W.a7,CSSNumericValue:W.a7,CSSPositionValue:W.a7,CSSResourceValue:W.a7,CSSUnitValue:W.a7,CSSURLImageValue:W.a7,CSSStyleValue:W.a7,CSSMatrixComponent:W.ak,CSSRotation:W.ak,CSSScale:W.ak,CSSSkew:W.ak,CSSTranslation:W.ak,CSSTransformComponent:W.ak,CSSTransformValue:W.eW,CSSUnparsedValue:W.eX,DataTransferItemList:W.f_,HTMLDivElement:W.ac,DOMException:W.f0,ClientRectList:W.cJ,DOMRectList:W.cJ,DOMRectReadOnly:W.cK,DOMStringList:W.f1,DOMTokenList:W.f2,Element:W.P,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aC,FileList:W.fd,FileWriter:W.fe,HTMLFormElement:W.fi,Gamepad:W.aD,History:W.fo,HTMLCollection:W.bS,HTMLFormControlsCollection:W.bS,HTMLOptionsCollection:W.bS,ImageData:W.b_,HTMLImageElement:W.bT,KeyboardEvent:W.bt,Location:W.fG,MediaList:W.h_,MIDIInputMap:W.h0,MIDIOutputMap:W.h2,MimeType:W.aF,MimeTypeArray:W.h4,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.d5,RadioNodeList:W.d5,Plugin:W.aI,PluginArray:W.hl,RTCStatsReport:W.hu,HTMLSelectElement:W.hx,SourceBuffer:W.aK,SourceBufferList:W.hJ,SpeechGrammar:W.aL,SpeechGrammarList:W.hK,SpeechRecognitionResult:W.aM,Storage:W.hO,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.dl,HTMLTableRowElement:W.hS,HTMLTableSectionElement:W.hT,HTMLTemplateElement:W.c6,TextTrack:W.aN,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.hW,TextTrackList:W.hX,TimeRanges:W.i1,Touch:W.aO,TouchEvent:W.bz,TouchList:W.i5,TrackDefaultList:W.i6,CompositionEvent:W.bc,FocusEvent:W.bc,TextEvent:W.bc,UIEvent:W.bc,URL:W.io,VideoTrackList:W.iG,WheelEvent:W.bh,Window:W.cf,DOMWindow:W.cf,CSSRuleList:W.iO,ClientRect:W.dG,DOMRect:W.dG,GamepadList:W.iS,NamedNodeMap:W.e_,MozNamedAttrMap:W.e_,SpeechRecognitionResultList:W.j4,StyleSheetList:W.j5,SVGLength:P.b5,SVGLengthList:P.fB,SVGNumber:P.b9,SVGNumberList:P.hg,SVGPointList:P.ho,SVGScriptElement:P.c4,SVGStringList:P.hR,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.bb,SVGTransformList:P.i7,AudioBuffer:P.eG,AudioParamMap:P.eH,AudioTrackList:P.eJ,AudioContext:P.bm,webkitAudioContext:P.bm,BaseAudioContext:P.bm,OfflineAudioContext:P.hh,WebGL2RenderingContext:P.dd,SQLResultSetRowList:P.hM})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d2.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.d3.$nativeSuperclassTag="ArrayBufferView"
W.cl.$nativeSuperclassTag="EventTarget"
W.cm.$nativeSuperclassTag="EventTarget"
W.cn.$nativeSuperclassTag="EventTarget"
W.co.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.kZ,[])
else B.kZ([])})})()
//# sourceMappingURL=test.dart.js.map
