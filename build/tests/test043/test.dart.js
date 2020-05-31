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
a[c]=function(){a[c]=function(){H.nM(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kd"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kd(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jY:function jY(){},
mp:function(a,b,c,d){P.hz(b,"start")
return new H.i3(a,b,c,[d])},
m2:function(a,b,c,d){if(!!a.$iq)return new H.fo(a,b,[c,d])
return new H.c9(a,b,[c,d])},
ky:function(){return new P.bF("No element")},
lW:function(){return new P.bF("Too many elements")},
lV:function(){return new P.bF("Too few elements")},
mo:function(a,b){var u=J.ak(a)
if(typeof u!=="number")return u.F()
H.dz(a,0,u-1,b)},
dz:function(a,b,c,d){if(c-b<=32)H.mn(a,b,c,d)
else H.mm(a,b,c,d)},
mn:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.aK(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a5()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
mm:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.Z(a4+a5,2),f=g-j,e=g+j,d=J.aK(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=a0
a0=u}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.G(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a6()
if(p<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
s=o
t=n
break}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a6()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a5()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a5()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a6()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.l(a3,a4,d.h(a3,a2))
d.l(a3,a2,b)
a2=s+1
d.l(a3,a5,d.h(a3,a2))
d.l(a3,a2,a0)
H.dz(a3,a4,t-2,a6)
H.dz(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.G(a6.$2(d.h(a3,t),b),0);)++t
for(;J.G(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a6()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.dz(a3,t,s,a6)}else H.dz(a3,t,s,a6)},
Q:function Q(a){this.a=a},
q:function q(){},
df:function df(){},
i3:function i3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bA:function bA(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
fo:function fo(a,b,c){this.a=a
this.b=b
this.$ti=c},
dh:function dh(a,b){this.a=null
this.b=a
this.c=b},
fV:function fV(a,b,c){this.a=a
this.b=b
this.$ti=c},
cu:function cu(a,b,c){this.a=a
this.b=b
this.$ti=c},
iS:function iS(a,b){this.a=a
this.b=b},
d5:function d5(){},
iA:function iA(){},
dN:function dN(){},
cK:function(a){var u,t=H.nN(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nt:function(a){return v.types[a]},
nA:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.N(a).$iz},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.c(H.b_(a))
return u},
ch:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
ci:function(a){return H.m7(a)+H.l2(H.bS(a),0,null)},
m7:function(a){var u,t,s,r,q,p,o,n=J.N(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibH){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cK(t.length>1&&C.d.bE(t,0)===36?C.d.aK(t,1):t)},
kN:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mh:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b_(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.be(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.b_(s))}return H.kN(r)},
mg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b_(s))
if(s<0)throw H.c(H.b_(s))
if(s>65535)return H.mh(a)}return H.kN(a)},
mf:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.be(u,10))>>>0,56320|u&1023)}throw H.c(P.ah(a,0,1114111,null,null))},
bD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
me:function(a){var u=H.bD(a).getFullYear()+0
return u},
mc:function(a){var u=H.bD(a).getMonth()+1
return u},
m8:function(a){var u=H.bD(a).getDate()+0
return u},
m9:function(a){var u=H.bD(a).getHours()+0
return u},
mb:function(a){var u=H.bD(a).getMinutes()+0
return u},
md:function(a){var u=H.bD(a).getSeconds()+0
return u},
ma:function(a){var u=H.bD(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.b_(a))},
e:function(a,b){if(a==null)J.ak(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.ak(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.ds(b,s)},
nm:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bE(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bE(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
b_:function(a){return new P.al(!0,a,null,null)},
nj:function(a){if(typeof a!=="number")throw H.c(H.b_(a))
return a},
c:function(a){var u
if(a==null)a=new P.dp()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.li})
u.name=""}else u.toString=H.li
return u},
li:function(){return J.aa(this.dartException)},
p:function(a){throw H.c(a)},
m:function(a){throw H.c(P.b8(a))},
aH:function(a){var u,t,s,r,q,p
a=H.lf(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iq(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ir:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kU:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kI:function(a,b){return new H.hq(a,b==null?null:b.method)},
jZ:function(a,b){var u=b==null,t=u?null:b.method
return new H.fL(a,t,u?null:b.receiver)},
aL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.be(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jZ(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kI(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ll()
q=$.lm()
p=$.ln()
o=$.lo()
n=$.lr()
m=$.ls()
l=$.lq()
$.lp()
k=$.lu()
j=$.lt()
i=r.aj(u)
if(i!=null)return f.$1(H.jZ(u,i))
else{i=q.aj(u)
if(i!=null){i.method="call"
return f.$1(H.jZ(u,i))}else{i=p.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=n.aj(u)
if(i==null){i=m.aj(u)
if(i==null){i=l.aj(u)
if(i==null){i=o.aj(u)
if(i==null){i=k.aj(u)
if(i==null){i=j.aj(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kI(u,i))}}return f.$1(new H.iz(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dB()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dB()
return a},
kf:function(a){var u
if(a==null)return new H.et(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.et(a)},
nq:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
nz:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.n("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nz)
a.$identity=u
return u},
lN:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hY().constructor.prototype):Object.create(new H.bW(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ar
if(typeof t!=="number")return t.B()
$.ar=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kq(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lJ(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kq(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lJ:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nt,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kp:H.jN
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lK:function(a,b,c,d){var u=H.jN
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kq:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lM(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lK(t,!r,u,b)
if(t===0){r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bX
return new Function(r+H.d(q==null?$.bX=H.f2("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ar
if(typeof r!=="number")return r.B()
$.ar=r+1
o+=r
r="return function("+o+"){return this."
q=$.bX
return new Function(r+H.d(q==null?$.bX=H.f2("self"):q)+"."+H.d(u)+"("+o+");}")()},
lL:function(a,b,c,d){var u=H.jN,t=H.kp
switch(b?-1:a){case 0:throw H.c(H.mk("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
lM:function(a,b){var u,t,s,r,q,p,o,n=$.bX
if(n==null)n=$.bX=H.f2("self")
u=$.ko
if(u==null)u=$.ko=H.f2("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lL(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ar
if(typeof u!=="number")return u.B()
$.ar=u+1
return new Function(n+u+"}")()},
kd:function(a,b,c,d,e,f,g){return H.lN(a,b,c,d,!!e,!!f,g)},
jN:function(a){return a.a},
kp:function(a){return a.c},
f2:function(a){var u,t,s,r=new H.bW("self","target","receiver","name"),q=J.jW(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nF:function(a,b){throw H.c(H.lI(a,H.cK(b.substring(2))))},
h:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.N(a)[b]
else u=!0
if(u)return a
H.nF(a,b)},
no:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lI:function(a,b){return new H.f6("CastError: "+P.jT(a)+": type '"+H.d(H.nf(a))+"' is not a subtype of type '"+b+"'")},
nf:function(a){var u,t=J.N(a)
if(!!t.$ibY){u=H.no(t)
if(u!=null)return H.nG(u)
return"Closure"}return H.ci(a)},
nM:function(a){throw H.c(new P.fh(a))},
mk:function(a){return new H.hH(a)},
la:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bS:function(a){if(a==null)return
return a.$ti},
oj:function(a,b,c){return H.bT(a["$a"+H.d(c)],H.bS(b))},
ke:function(a,b,c,d){var u=H.bT(a["$a"+H.d(c)],H.bS(b))
return u==null?null:u[d]},
jz:function(a,b,c){var u=H.bT(a["$a"+H.d(b)],H.bS(a))
return u==null?null:u[c]},
a8:function(a,b){var u=H.bS(a)
return u==null?null:u[b]},
nG:function(a){return H.bn(a,null)},
bn:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cK(a[0].name)+H.l2(a,1,b)
if(typeof a=="function")return H.cK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.e(b,t)
return H.d(b[t])}if('func' in a)return H.mK(a,b)
if('futureOr' in a)return"FutureOr<"+H.bn("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
mK:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.e(a0,m)
p=C.d.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.U)p+=" extends "+H.bn(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bn(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bn(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bn(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.np(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bn(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
l2:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aV("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bn(p,c)}return"<"+u.i(0)+">"},
bT:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nk:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.bS(a)
t=J.N(a)
if(t[b]==null)return!1
return H.l6(H.bT(t[d],u),null,c,null)},
l6:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aj(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aj(a[t],b,c[t],d))return!1
return!0},
oh:function(a,b,c){return a.apply(b,H.bT(J.N(b)["$a"+H.d(c)],H.bS(b)))},
aj:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="U"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="U"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aj(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.aj(b[a],b,c,d)
if(typeof c==="number")return!1
if(a.name==="aR")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aj("type" in a?a.type:l,b,s,d)
else if(H.aj(a,b,s,d))return!0
else{if(!('$i'+"lT" in t.prototype))return!1
r=t.prototype["$a"+"lT"]
q=H.bT(r,u?a.slice(1):l)
return H.aj(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mM(a,b,c,d)
if('func' in a)return c.name==="d7"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.l6(H.bT(m,u),b,p,d)},
mM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.aj(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aj(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aj(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aj(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.nD(h,b,g,d)},
nD:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aj(c[s],d,a[s],b))return!1}return!0},
oi:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nB:function(a){var u,t,s,r,q=$.lb.$1(a),p=$.jw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.l5.$2(a,q)
if(q!=null){p=$.jw[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jD[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jH(u)
$.jw[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jD[q]=u
return u}if(s==="-"){r=H.jH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ld(a,u)
if(s==="*")throw H.c(P.k6(q))
if(v.leafTags[q]===true){r=H.jH(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ld(a,u)},
ld:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kh(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jH:function(a){return J.kh(a,!1,null,!!a.$iz)},
nC:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jH(u)
else return J.kh(u,c,null,null)},
nx:function(){if(!0===$.kg)return
$.kg=!0
H.ny()},
ny:function(){var u,t,s,r,q,p,o,n
$.jw=Object.create(null)
$.jD=Object.create(null)
H.nw()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.le.$1(q)
if(p!=null){o=H.nC(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nw:function(){var u,t,s,r,q,p,o=C.G()
o=H.bN(C.H,H.bN(C.I,H.bN(C.t,H.bN(C.t,H.bN(C.J,H.bN(C.K,H.bN(C.L(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.lb=new H.jA(r)
$.l5=new H.jB(q)
$.le=new H.jC(p)},
bN:function(a,b){return a(b)||b},
lZ:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.fB("Illegal RegExp pattern ("+String(p)+")",a))},
lg:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nn:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lh:function(a,b,c){var u=H.nI(a,b,c)
return u},
nI:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lf(b),'g'),H.nn(c))},
nJ:function(a,b,c,d){var u=a.indexOf(b,d)
if(u<0)return a
return H.nK(a,u,u+b.length,c)},
nK:function(a,b,c,d){var u=a.substring(0,b),t=a.substring(c)
return u+d+t},
iq:function iq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hq:function hq(a,b){this.a=a
this.b=b},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
iz:function iz(a){this.a=a},
jJ:function jJ(a){this.a=a},
et:function et(a){this.a=a
this.b=null},
bY:function bY(){},
i7:function i7(){},
hY:function hY(){},
bW:function bW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
hH:function hH(a){this.a=a},
J:function J(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fK:function fK(a){this.a=a},
fO:function fO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bz:function bz(a,b){this.a=a
this.$ti=b},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
fJ:function fJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
i2:function i2(a,b){this.a=a
this.c=b},
ka:function ka(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bL:function(a){return a},
aI:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
mJ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nm(a,b,c))
return b},
ce:function ce(){},
dl:function dl(){},
bB:function bB(){},
cd:function cd(){},
hi:function hi(){},
hj:function hj(){},
hk:function hk(){},
hl:function hl(){},
hm:function hm(){},
cf:function cf(){},
hn:function hn(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
np:function(a){return J.kz(a?Object.keys(a):[],null)},
nN:function(a){return v.mangledGlobalNames[a]},
nE:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kh:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jy:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.kg==null){H.nx()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.k6("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kj()]
if(r!=null)return r
r=H.nB(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.kj(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
lX:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jM(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ah(a,0,4294967295,"length",null))
return J.kz(new Array(a),b)},
kz:function(a,b){return J.jW(H.b(a,[b]))},
jW:function(a){a.fixed$length=Array
return a},
lY:function(a,b){return J.cO(a,b)},
N:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.bg.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fI.prototype
if(a.constructor==Array)return J.bf.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.U)return a
return J.jy(a)},
aK:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(a.constructor==Array)return J.bf.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.U)return a
return J.jy(a)},
jx:function(a){if(a==null)return a
if(a.constructor==Array)return J.bf.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.U)return a
return J.jy(a)},
nr:function(a){if(typeof a=="number")return J.c6.prototype
if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bH.prototype
return a},
ns:function(a){if(typeof a=="string")return J.bg.prototype
if(a==null)return a
if(!(a instanceof P.U))return J.bH.prototype
return a},
bR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bh.prototype
return a}if(a instanceof P.U)return a
return J.jy(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.N(a).n(a,b)},
cN:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.nA(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.aK(a).h(a,b)},
lA:function(a,b,c){return J.bR(a).fX(a,b,c)},
lB:function(a,b,c,d){return J.bR(a).hg(a,b,c,d)},
cO:function(a,b){return J.nr(a).aU(a,b)},
jL:function(a,b){return J.aK(a).w(a,b)},
cP:function(a,b){return J.jx(a).D(a,b)},
lC:function(a,b){return J.jx(a).J(a,b)},
lD:function(a){return J.bR(a).ghl(a)},
kl:function(a){return J.bR(a).gbU(a)},
lE:function(a){return J.bR(a).gbY(a)},
bV:function(a){return J.N(a).gK(a)},
b5:function(a){return J.jx(a).gN(a)},
ak:function(a){return J.aK(a).gj(a)},
km:function(a){return J.jx(a).i_(a)},
lF:function(a,b){return J.bR(a).i2(a,b)},
lG:function(a){return J.ns(a).ia(a)},
aa:function(a){return J.N(a).i(a)},
a:function a(){},
fI:function fI(){},
db:function db(){},
dc:function dc(){},
hu:function hu(){},
bH:function bH(){},
bh:function bh(){},
bf:function bf(a){this.$ti=a},
jX:function jX(a){this.$ti=a},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c6:function c6(){},
da:function da(){},
d9:function d9(){},
bg:function bg(){}},P={
mw:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.ng()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bO(new P.iU(s),1)).observe(u,{childList:true})
return new P.iT(s,u,t)}else if(self.setImmediate!=null)return P.nh()
return P.ni()},
mx:function(a){self.scheduleImmediate(H.bO(new P.iV(a),0))},
my:function(a){self.setImmediate(H.bO(new P.iW(a),0))},
mz:function(a){P.k4(C.i,a)},
k4:function(a,b){var u=C.c.Z(a.a,1000)
return P.mG(u<0?0:u,b)},
kT:function(a,b){var u=C.c.Z(a.a,1000)
return P.mH(u<0?0:u,b)},
mG:function(a,b){var u=new P.ez()
u.ep(a,b)
return u},
mH:function(a,b){var u=new P.ez()
u.eq(a,b)
return u},
of:function(a){return new P.bK(a,1)},
mC:function(){return C.a0},
mD:function(a){return new P.bK(a,3)},
mO:function(a,b){return new P.ji(a,[b])},
n9:function(){var u,t
for(;u=$.bM,u!=null;){$.cI=null
t=u.b
$.bM=t
if(t==null)$.cH=null
u.a.$0()}},
ne:function(){$.kb=!0
try{P.n9()}finally{$.cI=null
$.kb=!1
if($.bM!=null)$.kk().$1(P.l7())}},
nc:function(a){var u=new P.dU(a)
if($.bM==null){$.bM=$.cH=u
if(!$.kb)$.kk().$1(P.l7())}else $.cH=$.cH.b=u},
nd:function(a){var u,t,s=$.bM
if(s==null){P.nc(a)
$.cI=$.cH
return}u=new P.dU(a)
t=$.cI
if(t==null){u.b=s
$.bM=$.cI=u}else{u.b=t.b
$.cI=t.b=u
if(u.b==null)$.cH=u}},
kS:function(a,b){var u=$.aq
if(u===C.e)return P.k4(a,b)
return P.k4(a,u.hm(b))},
mt:function(a,b){var u=$.aq
if(u===C.e)return P.kT(a,b)
return P.kT(a,u.dd(b,P.dI))},
l3:function(a,b,c,d,e){var u={}
u.a=d
P.nd(new P.ju(u,e))},
na:function(a,b,c,d){var u,t=$.aq
if(t===c)return d.$0()
$.aq=c
u=t
try{t=d.$0()
return t}finally{$.aq=u}},
nb:function(a,b,c,d,e){var u,t=$.aq
if(t===c)return d.$1(e)
$.aq=c
u=t
try{t=d.$1(e)
return t}finally{$.aq=u}},
iU:function iU(a){this.a=a},
iT:function iT(a,b,c){this.a=a
this.b=b
this.c=c},
iV:function iV(a){this.a=a},
iW:function iW(a){this.a=a},
ez:function ez(){this.c=0},
jm:function jm(a,b){this.a=a
this.b=b},
jl:function jl(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bK:function bK(a,b){this.a=a
this.b=b},
cD:function cD(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ji:function ji(a,b){this.a=a
this.$ti=b},
dU:function dU(a){this.a=a
this.b=null},
dD:function dD(){},
i0:function i0(){},
dI:function dI(){},
jp:function jp(){},
ju:function ju(a,b){this.a=a
this.b=b},
j8:function j8(){},
j9:function j9(a,b){this.a=a
this.b=b},
ja:function ja(a,b,c){this.a=a
this.b=b
this.c=c},
kA:function(a,b){return new H.J([a,b])},
m0:function(a){return H.nq(a,new H.J([null,null]))},
c8:function(a){return new P.j5([a])},
k9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mF:function(a,b){var u=new P.ea(a,b)
u.c=a.e
return u},
lU:function(a,b,c){var u,t
if(P.kc(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.l])
$.a7.push(a)
try{P.mN(a,u)}finally{if(0>=$.a7.length)return H.e($.a7,-1)
$.a7.pop()}t=P.kO(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jV:function(a,b,c){var u,t
if(P.kc(a))return b+"..."+c
u=new P.aV(b)
$.a7.push(a)
try{t=u
t.a=P.kO(t.a,a,", ")}finally{if(0>=$.a7.length)return H.e($.a7,-1)
$.a7.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kc:function(a){var u,t
for(u=$.a7.length,t=0;t<u;++t)if(a===$.a7[t])return!0
return!1},
mN:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.d(n.gG(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.e(b,-1)
t=b.pop()
if(0>=b.length)return H.e(b,-1)
s=b.pop()}else{r=n.gG(n);++l
if(!n.q()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.e(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gG(n);++l
for(;n.q();r=q,q=p){p=n.gG(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.e(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
kB:function(a,b){var u,t,s=P.c8(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.k(0,a[t])
return s},
kC:function(a){var u,t={}
if(P.kc(a))return"{...}"
u=new P.aV("")
try{$.a7.push(a)
u.a+="{"
t.a=!0
J.lC(a,new P.fU(t,u))
u.a+="}"}finally{if(0>=$.a7.length)return H.e($.a7,-1)
$.a7.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
j5:function j5(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
j6:function j6(a){this.a=a
this.c=this.b=null},
ea:function ea(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fG:function fG(){},
fQ:function fQ(){},
t:function t(){},
fT:function fT(){},
fU:function fU(a,b){this.a=a
this.b=b},
a1:function a1(){},
jc:function jc(){},
eb:function eb(){},
f8:function f8(){},
fc:function fc(){},
fq:function fq(){},
iD:function iD(){},
iE:function iE(){},
jn:function jn(a){this.b=0
this.c=a},
lS:function(a){if(a instanceof H.bY)return a.i(0)
return"Instance of '"+H.d(H.ci(a))+"'"},
m1:function(a,b,c){var u,t,s=J.lX(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
k_:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b5(a);u.q();)t.push(u.gG(u))
if(b)return t
return J.jW(t)},
k3:function(a){var u,t=a.length,s=P.hA(0,null,t)
if(typeof s!=="number")return s.a6()
u=s<t
return H.mg(u?C.a.e0(a,0,s):a)},
mi:function(a){return new H.fJ(a,H.lZ(a,!1,!0,!1,!1,!1))},
kO:function(a,b,c){var u=J.b5(b)
if(!u.q())return a
if(c.length===0){do a+=H.d(u.gG(u))
while(u.q())}else{a+=H.d(u.gG(u))
for(;u.q();)a=a+c+H.d(u.gG(u))}return a},
mI:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.u){u=$.lz().b
u=u.test(b)}else u=!1
if(u)return b
t=C.N.hq(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.e(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.mf(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lP:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lQ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d0:function(a){if(a>=10)return""+a
return"0"+a},
kt:function(a){return new P.b9(1000*a)},
jT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lS(a)},
lH:function(a){return new P.al(!1,null,null,a)},
jM:function(a,b,c){return new P.al(!0,a,b,c)},
ds:function(a,b){return new P.bE(null,null,!0,a,b,"Value not in range")},
ah:function(a,b,c,d,e){return new P.bE(b,c,!0,a,d,"Invalid value")},
hA:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.ah(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.ah(b,a,c,"end",null))
return b}return c},
hz:function(a,b){if(typeof a!=="number")return a.a6()
if(a<0)throw H.c(P.ah(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.ak(b):e
return new P.fF(u,!0,a,c,"Index out of range")},
x:function(a){return new P.iB(a)},
k6:function(a){return new P.iy(a)},
k2:function(a){return new P.bF(a)},
b8:function(a){return new P.fb(a)},
n:function(a){return new P.e2(a)},
ki:function(a){H.nE(a)},
aJ:function aJ(){},
ae:function ae(a,b){this.a=a
this.b=b},
K:function K(){},
b9:function b9(a){this.a=a},
fm:function fm(){},
fn:function fn(){},
bw:function bw(){},
dp:function dp(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bE:function bE(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fF:function fF(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iB:function iB(a){this.a=a},
iy:function iy(a){this.a=a},
bF:function bF(a){this.a=a},
fb:function fb(a){this.a=a},
ht:function ht(){},
dB:function dB(){},
fh:function fh(a){this.a=a},
e2:function e2(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
d7:function d7(){},
w:function w(){},
i:function i(){},
fH:function fH(){},
r:function r(){},
R:function R(){},
aR:function aR(){},
a9:function a9(){},
U:function U(){},
k0:function k0(){},
l:function l(){},
aV:function aV(a){this.a=a},
l9:function(a){var u,t=J.N(a)
if(!!t.$ibc){u=t.gbY(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eE(a.data,a.height,a.width)},
l8:function(a){if(a instanceof P.eE)return{data:a.a,height:a.b,width:a.c}
return a},
b0:function(a){var u,t,s,r,q
if(a==null)return
u=P.kA(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
nl:function(a){var u={}
a.J(0,new P.jv(u))
return u},
eE:function eE(a,b,c){this.a=a
this.b=b
this.c=c},
jv:function jv(a){this.a=a},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(){},
j4:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mE:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
j7:function j7(){},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aO:function aO(){},
fN:function fN(){},
aS:function aS(){},
hr:function hr(){},
hy:function hy(){},
cl:function cl(){},
i1:function i1(){},
k:function k(){},
aW:function aW(){},
ip:function ip(){},
e8:function e8(){},
e9:function e9(){},
ej:function ej(){},
ek:function ek(){},
ev:function ev(){},
ew:function ew(){},
eC:function eC(){},
eD:function eD(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
bp:function bp(){},
hs:function hs(){},
dV:function dV(){},
dw:function dw(){},
hX:function hX(){},
er:function er(){},
es:function es(){}},W={
kn:function(){var u=document.createElement("a")
return u},
f5:function(){var u=document.createElement("canvas")
return u},
lR:function(a,b,c){var u=document.body,t=(u&&C.o).ah(u,a,b,c)
t.toString
u=new H.cu(new W.a3(t),new W.fp(),[W.B])
return u.gaJ(u)},
jR:function(a){return"wheel"},
c0:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bR(a)
t=u.gdQ(a)
if(typeof t==="string")r=u.gdQ(a)}catch(s){H.aL(s)}return r},
j3:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l0:function(a,b,c,d){var u=W.j3(W.j3(W.j3(W.j3(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.l4(new W.j1(c),W.j)
if(u!=null&&!0)J.lB(a,b,u,!1)
return new W.j0(a,b,u,!1)},
l_:function(a){var u=W.kn(),t=window.location
u=new W.cw(new W.jb(u,t))
u.ec(a)
return u},
mA:function(a,b,c,d){return!0},
mB:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
l1:function(){var u=P.l,t=P.kB(C.l,u),s=H.b(["TEMPLATE"],[u])
t=new W.jj(t,P.c8(u),P.c8(u),P.c8(u),null)
t.en(null,new H.fV(C.l,new W.jk(),[H.a8(C.l,0),u]),s,null)
return t},
l4:function(a,b){var u=$.aq
if(u===C.e)return a
return u.dd(a,b)},
o:function o(){},
eR:function eR(){},
eT:function eT(){},
eU:function eU(){},
cS:function cS(){},
bq:function bq(){},
bs:function bs(){},
bt:function bt(){},
cV:function cV(){},
b7:function b7(){},
fd:function fd(){},
H:function H(){},
c_:function c_(){},
fe:function fe(){},
ad:function ad(){},
at:function at(){},
ff:function ff(){},
fg:function fg(){},
fi:function fi(){},
fj:function fj(){},
d2:function d2(){},
d3:function d3(){},
fk:function fk(){},
fl:function fl(){},
iY:function iY(a,b){this.a=a
this.b=b},
O:function O(){},
fp:function fp(){},
j:function j(){},
f:function f(){},
au:function au(){},
fv:function fv(){},
fw:function fw(){},
fA:function fA(){},
av:function av(){},
fD:function fD(){},
c4:function c4(){},
bc:function bc(){},
c5:function c5(){},
by:function by(){},
fR:function fR(){},
hb:function hb(){},
hc:function hc(){},
hd:function hd(a){this.a=a},
he:function he(){},
hf:function hf(a){this.a=a},
ay:function ay(){},
hg:function hg(){},
az:function az(){},
a3:function a3(a){this.a=a},
B:function B(){},
dm:function dm(){},
aA:function aA(){},
hv:function hv(){},
hF:function hF(){},
hG:function hG(a){this.a=a},
hI:function hI(){},
aC:function aC(){},
hU:function hU(){},
aD:function aD(){},
hV:function hV(){},
aE:function aE(){},
hZ:function hZ(){},
i_:function i_(a){this.a=a},
an:function an(){},
dE:function dE(){},
i4:function i4(){},
i5:function i5(){},
cm:function cm(){},
aF:function aF(){},
ao:function ao(){},
i8:function i8(){},
i9:function i9(){},
ij:function ij(){},
aG:function aG(){},
bG:function bG(){},
im:function im(){},
io:function io(){},
bk:function bk(){},
iC:function iC(){},
iR:function iR(){},
bm:function bm(){},
cv:function cv(){},
iZ:function iZ(){},
dX:function dX(){},
j2:function j2(){},
eg:function eg(){},
jf:function jf(){},
jg:function jg(){},
iX:function iX(){},
j_:function j_(a){this.a=a},
j0:function j0(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
j1:function j1(a){this.a=a},
cw:function cw(a){this.a=a},
M:function M(){},
dn:function dn(a){this.a=a},
hp:function hp(a){this.a=a},
ho:function ho(a,b,c){this.a=a
this.b=b
this.c=c},
eo:function eo(){},
jd:function jd(){},
je:function je(){},
jj:function jj(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jk:function jk(){},
jh:function jh(){},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aP:function aP(){},
jb:function jb(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a},
jo:function jo(a){this.a=a},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e3:function e3(){},
e4:function e4(){},
e6:function e6(){},
e7:function e7(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
el:function el(){},
em:function em(){},
en:function en(){},
cB:function cB(){},
cC:function cC(){},
ep:function ep(){},
eq:function eq(){},
eu:function eu(){},
ex:function ex(){},
ey:function ey(){},
cE:function cE(){},
cF:function cF(){},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){}},K={
a_:function(a){var u=new K.hJ()
u.e9(a)
return u},
eS:function eS(){},
d8:function d8(){},
di:function di(){},
aQ:function aQ(){this.a=null},
hJ:function hJ(){this.a=null}},L={dC:function dC(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dJ:function dJ(a,b,c){this.a=a
this.b=b
this.c=c},dK:function dK(a){this.b=a
this.c=null},ik:function ik(){var _=this
_.d=_.c=_.b=_.a=null},dL:function dL(a){this.b=a
this.a=this.c=null}},O={
f9:function(a){var u=new O.as([a])
u.b9(a)
return u},
as:function as(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cb:function cb(){this.b=this.a=null},
dj:function dj(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h2:function h2(a,b){this.a=a
this.b=b},
h3:function h3(){},
h4:function h4(a,b){this.a=a
this.b=b},
h5:function h5(){},
h6:function h6(a,b){this.a=a
this.b=b},
h7:function h7(){},
h8:function h8(a,b){this.a=a
this.b=b},
h9:function h9(){},
fX:function fX(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ca:function ca(){},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aw:function aw(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h_:function h_(){var _=this
_.e=_.d=_.c=_.b=null},
h0:function h0(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
h1:function h1(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dy:function dy(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(){this.c=this.b=this.a=null},
dF:function dF(){},
dG:function dG(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bj:function bj(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
c1:function(a){var u,t=new E.aN()
t.a=""
t.b=!0
u=O.f9(E.aN)
t.y=u
u.aI(t.ghI(),t.ghL())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scw(0,a)
t.saH(null)
t.scj(null)
return t},
kY:function(){if(J.jL(window.navigator.vendor,"Google"))return C.D
if(J.jL(window.navigator.userAgent,"Firefox"))return C.p
var u=window.navigator.appVersion
if(J.aK(u).w(u,"Trident")||C.d.w(u,"Edge"))return C.q
if(J.jL(window.navigator.appName,"Microsoft"))return C.q
return C.E},
kZ:function(){var u=window.navigator.appVersion
if(J.aK(u).w(u,"Win"))return C.Y
if(C.d.w(u,"Mac"))return C.x
if(C.d.w(u,"Linux"))return C.Z
return C.a_},
mj:function(a,b){var u=new E.hB(a)
u.e8(a,b)
return u},
ms:function(a,b,c,d,e){var u,t,s=J.N(a)
if(!!s.$ibt)return E.kR(a,!0,!0,!0,!1)
u=W.f5()
t=u.style
t.width="100%"
t.height="100%"
s.gbU(a).k(0,u)
return E.kR(u,!0,!0,!0,!1)},
kR:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dH(),o=C.f.cr(a,"webgl2",P.m0(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.n("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.mj(o,a)
u=new T.ie(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dO(a)
t=new X.fM()
t.c=new X.ab(!1,!1,!1)
t.d=P.c8(P.w)
u.b=t
t=new X.hh(u)
t.f=0
t.r=V.aT()
t.x=V.aT()
t.ch=t.Q=1
u.c=t
t=new X.fS(u)
t.r=0
t.x=V.aT()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.il(u)
t.f=V.aT()
t.r=V.aT()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dD,P.U]])
t=$.fr
u.Q=(t==null?$.fr=new E.e1(E.kY(),E.kZ()):t).a===C.p?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.T(r,"contextmenu",u.gfa(),!1))
u.z.push(W.T(a,"focus",u.gfk(),!1))
u.z.push(W.T(a,"blur",u.gf4(),!1))
u.z.push(W.T(r,"keyup",u.gfo(),!1))
u.z.push(W.T(r,"keydown",u.gfm(),!1))
u.z.push(W.T(a,"mousedown",u.gft(),!1))
u.z.push(W.T(a,"mouseup",u.gfz(),!1))
u.z.push(W.T(a,q,u.gfv(),!1))
s=u.z
W.jR(a)
W.jR(a)
s.push(W.T(a,W.jR(a),u.gfB(),!1))
u.z.push(W.T(r,q,u.gfc(),!1))
u.z.push(W.T(r,"mouseup",u.gfe(),!1))
u.z.push(W.T(r,"pointerlockchange",u.gfD(),!1))
u.z.push(W.T(a,"touchstart",u.gfT(),!1))
u.z.push(W.T(a,"touchend",u.gfP(),!1))
u.z.push(W.T(a,"touchmove",u.gfR(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ae(Date.now(),!1)
p.db=0
p.d_()
return p},
f1:function f1(){},
aN:function aN(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
br:function br(a){this.b=a},
bC:function bC(a){this.b=a},
e1:function e1(a,b){this.a=a
this.b=b},
hB:function hB(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hC:function hC(a){this.a=a},
hD:function hD(a){this.a=a},
hE:function hE(a){this.a=a},
dH:function dH(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
ii:function ii(a){this.a=a}},Z={
k8:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.dT(b,u)},
ai:function(a){return new Z.aZ(a)},
dT:function dT(a,b){this.a=a
this.b=b},
cT:function cT(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
bJ:function bJ(a){this.a=a},
b6:function b6(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
aZ:function aZ(a){this.a=a}},D={
A:function(){var u=new D.ba()
u.d=0
return u},
f7:function f7(){},
ba:function ba(){var _=this
_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
S:function S(){this.b=null},
bd:function bd(){this.b=null},
be:function be(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ks:function(a,b){var u,t,s=new D.bv()
s.c=new V.L(1,1,1)
s.a=V.mv()
s.d=V.k7()
s.e=V.mu()
u=s.b
s.b=b
b.gm().k(0,s.ged())
t=new D.u("mover",u,s.b)
t.b=!0
s.ay(t)
if(!s.c.n(0,a)){u=s.c
s.c=a
t=new D.u("color",u,a)
t.b=!0
s.ay(t)}return s},
f0:function f0(){},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a5:function a5(){},
de:function de(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hw:function hw(){},
hW:function hW(){}},X={cU:function cU(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fM:function fM(){var _=this
_.d=_.c=_.b=_.a=null},dg:function dg(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fS:function fS(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},ag:function ag(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hh:function hh(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cc:function cc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hx:function hx(){},co:function co(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},il:function il(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dO:function dO(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jU:function(a,b){var u=new X.fC(),t=new V.Y(0,0,0,1)
u.a=t
u.b=a
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.dv()
u.r=t
return u},
kJ:function(a){var u,t,s=new X.dq()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().k(0,s.ger())
t=new D.u("mover",u,s.b)
t.b=!0
s.Y(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.y().a)){s.c=1.0471975511965976
t=new D.u("fov",t,1.0471975511965976)
t.b=!0
s.Y(t)}t=s.d
if(!(Math.abs(t-0.1)<$.y().a)){s.d=0.1
t=new D.u("near",t,0.1)
t.b=!0
s.Y(t)}t=s.e
if(!(Math.abs(t-2000)<$.y().a)){s.e=2000
t=new D.u("far",t,2000)
t.b=!0
s.Y(t)}return s},
f_:function f_(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jO:function jO(){},
fC:function fC(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(){this.b=this.a=null},
dq:function dq(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
i6:function i6(){}},V={
lO:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.b.aV(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.L(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.L(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.L(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
n=b>1?1:b
return new V.L(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
n=b>1?1:b
return new V.L(p,o,n)
default:p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.L(p,o,n)}},
cW:function(a,b,c,d){var u=a/255,t=b/255,s=c/255,r=d/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
if(r<0)r=0
else if(r>1)r=1
return new V.Y(u,t,s,r)},
jK:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.b.bv(a-b,u)
return(a<0?a+u:a)+b},
D:function(a,b,c){if(a==null)return C.d.ak("null",c)
return C.d.ak(C.b.dS(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.D(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.e(o,q)
u=C.d.ak(o[q],t)
p=o.length
if(q>=p)return H.e(o,q)
o[q]=u}return o},
cJ:function(a){return C.b.i8(Math.pow(2,C.j.aV(Math.log(H.nj(a))/Math.log(2))))},
bi:function(){var u=$.ha
return u==null?$.ha=V.ax(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ax:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
m6:function(a,b,c){return V.ax(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m5:function(a,b,c){return V.ax(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
kE:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ax(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kF:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ax(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kG:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.ax(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
kH:function(a,b,c,d){d=V.k7()
return V.kD(V.kM(),d,new V.C(a,b,c))},
kD:function(a,b,c){var u=c.v(0,Math.sqrt(c.A(c))),t=b.b3(u),s=t.v(0,Math.sqrt(t.A(t))),r=u.b3(s),q=new V.C(a.a,a.b,a.c),p=s.P(0).A(q),o=r.P(0).A(q),n=u.P(0).A(q)
return V.ax(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aT:function(){var u=$.kL
return u==null?$.kL=new V.a2(0,0):u},
kM:function(){var u=$.aB
return u==null?$.aB=new V.V(0,0,0):u},
dv:function(){var u=$.cj
return u==null?$.cj=V.du(0,0,1,1):u},
du:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dt(a,b,c,d)},
dS:function(){var u=$.kX
return u==null?$.kX=new V.C(0,0,0):u},
mu:function(){var u=$.iF
return u==null?$.iF=new V.C(-1,0,0):u},
k7:function(){var u=$.iG
return u==null?$.iG=new V.C(0,1,0):u},
mv:function(){var u=$.iH
return u==null?$.iH=new V.C(0,0,1):u},
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
Y:function Y(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
dk:function dk(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
af:function af(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
aU:function aU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dt:function dt(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
nH:function(a){P.mt(C.Q,new V.jI(a))},
ml:function(a){var u=new V.hO()
u.ea(a,!0)
return u},
f3:function f3(a){this.a=a
this.c=this.b=null},
f4:function f4(a){this.a=a},
jI:function jI(a){this.a=a},
hO:function hO(){this.b=this.a=null},
hQ:function hQ(a){this.a=a},
hP:function hP(a){this.a=a}},U={
jP:function(){var u=new U.fa()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jQ:function(a){var u=new U.bZ()
u.a=a
return u},
kx:function(){var u=new U.c3()
u.b9(U.ac)
u.aI(u.gef(),u.gfH())
u.e=null
u.f=V.bi()
u.r=0
return u},
fa:function fa(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bZ:function bZ(){this.b=this.a=null},
c3:function c3(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ac:function ac(){},
ck:function ck(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
kr:function(){var u,t,s,r,q,p,o,n,m,l=null,k=new M.d_()
k.a=!0
u=E.c1(l)
t=F.k1()
s=t.a
r=new V.C(-1,-1,1)
r=r.v(0,Math.sqrt(r.A(r)))
q=s.bg(new V.aU(1,2,4,6),V.cW(255,0,0,255),new V.V(-1,-1,0),new V.a2(0,1),r,l)
r=t.a
s=new V.C(1,-1,1)
s=s.v(0,Math.sqrt(s.A(s)))
p=r.bg(new V.aU(0,3,4,6),V.cW(0,0,255,255),new V.V(1,-1,0),new V.a2(1,1),s,l)
s=t.a
r=new V.C(1,1,1)
r=r.v(0,Math.sqrt(r.A(r)))
o=s.bg(new V.aU(0,2,5,6),V.cW(0,128,0,255),new V.V(1,1,0),new V.a2(1,0),r,l)
r=t.a
s=V.aT()
n=new V.C(-1,1,1)
n=n.v(0,Math.sqrt(n.A(n)))
m=r.bg(new V.aU(0,2,4,7),V.cW(255,255,0,255),new V.V(-1,1,0),s,n,l)
t.d.hh(H.b([q,p,o,m],[F.bI]))
t.aD()
u.scw(0,t)
k.e=u
k.saR(l)
k.saG(0,l)
k.saH(l)
return k},
kw:function(){var u,t,s=new M.d4()
s.a=!0
u=O.f9(E.aN)
s.e=u
u.aI(s.gf6(),s.gf8())
s.y=s.x=s.r=s.f=null
t=X.jU(!0,null)
s.saR(null)
s.saG(0,t)
return s},
cZ:function cZ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
d_:function d_(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d4:function d4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
am:function am(){},
lc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5="testCanvas",b6=null,b7="modifiers",b8=V.ml("Test 043"),b9=W.f5()
b9.className="pageLargeCanvas"
b9.id=b5
b8.a.appendChild(b9)
u=[P.l]
b8.d7(H.b(["Test of the color picker, used to read the color of a pixel from a texture. It uses a back buffer with solid colored entities to pick which one to move. Also testing out the ability to screen shot a back buffer."],u))
b8.hf(H.b(["buttons"],u))
b8.d7(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b5)
if(t==null)H.p(P.n("Failed to find an element with the identifier, testCanvas."))
s=E.ms(t,!0,!0,!0,!1)
r=U.kx()
b8=s.x
q=new U.dQ()
p=U.jP()
p.scp(0,!0)
p.scf(6.283185307179586)
p.sci(0)
p.sad(0,0)
p.scg(100)
p.sS(0)
p.sbX(0.5)
q.b=p
o=q.gaO()
p.gm().k(0,o)
p=U.jP()
p.scp(0,!0)
p.scf(6.283185307179586)
p.sci(0)
p.sad(0,0)
p.scg(100)
p.sS(0)
p.sbX(0.5)
q.c=p
p.gm().k(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.ab(!1,!1,!1)
m=q.d
q.d=n
p=new D.u(b7,m,n)
p.b=!0
q.I(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.u("invertX",p,!1)
p.b=!0
q.I(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.u("invertY",p,!1)
p.b=!0
q.I(p)}q.aC(b8)
r.k(0,q)
b8=s.x
q=new U.dP()
p=U.jP()
p.scp(0,!0)
p.scf(6.283185307179586)
p.sci(0)
p.sad(0,0)
p.scg(100)
p.sS(0)
p.sbX(0.2)
q.b=p
p.gm().k(0,q.gaO())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.ab(!0,!1,!1)
m=q.c
q.c=n
p=new D.u(b7,m,n)
p.b=!0
q.I(p)
q.aC(b8)
r.k(0,q)
b8=s.x
q=new U.dR()
q.c=0.01
q.e=q.d=0
n=new X.ab(!1,!1,!1)
q.b=n
p=new D.u(b7,b6,n)
p.b=!0
q.I(p)
q.aC(b8)
r.k(0,q)
r.k(0,U.jQ(V.m6(0,0,5)))
l=X.kJ(r)
k=s.f.dC("../resources/diceColor")
j=new O.dj()
b8=O.f9(V.af)
j.e=b8
b8.aI(j.gf0(),j.gf2())
b8=new O.aw(j,"emission")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
j.f=b8
b8=new O.aw(j,"ambient")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
j.r=b8
b8=new O.aw(j,"diffuse")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
j.x=b8
b8=new O.aw(j,"invDiffuse")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
j.y=b8
b8=new O.h1(j,"specular")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
b8.ch=100
j.z=b8
b8=new O.fY(j,"bump")
b8.c=new A.Z(!1,!1,!1)
j.Q=b8
j.ch=null
b8=new O.aw(j,"reflect")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
j.cx=b8
b8=new O.h0(j,"refract")
b8.c=new A.Z(!1,!1,!1)
b8.f=new V.L(0,0,0)
b8.ch=1
j.cy=b8
b8=new O.fX(j,"alpha")
b8.c=new A.Z(!1,!1,!1)
b8.f=1
j.db=b8
b8=new D.de()
b8.b9(D.a5)
b8.e=H.b([],[D.f0])
b8.f=H.b([],[D.bv])
b8.r=H.b([],[D.hw])
b8.x=H.b([],[D.hW])
b8.z=b8.y=null
b8.cu(b8.geZ(),b8.gfF(),b8.gfJ())
j.dx=b8
q=new O.h_()
q.b=new V.Y(0,0,0,0)
q.c=1
q.d=10
q.e=!1
j.dy=q
q=b8.y
b8=q==null?b8.y=D.A():q
b8.k(0,j.gfZ())
b8=j.dx
q=b8.z
b8=q==null?b8.z=D.A():q
b8.k(0,j.ga7())
j.fr=null
b8=j.dx
q=U.jQ(V.kH(-1,-1,-1,b6))
b8.k(0,D.ks(new V.L(1,0.9,0.9),q))
b8=j.dx
q=U.jQ(V.kH(1,1,2,b6))
b8.k(0,D.ks(new V.L(0.2,0.2,0.35),q))
b8=j.r
b8.saT(0,new V.L(0.2,0.2,0.2))
j.r.sb6(k)
b8=j.x
b8.saT(0,new V.L(0.8,0.8,0.8))
j.x.sb6(k)
b8=j.z
b8.saT(0,new V.L(0.7,0.7,0.7))
b8=j.z
b8.bO(new A.Z(!0,!1,b8.c.c))
b8.d2(10)
j.Q.sb6(s.f.dC("../resources/diceBumpMap"))
i=H.b([],[U.ck])
h=H.b([],[V.Y])
g=F.k1()
F.cG(g,b6,b6,1,1,1,0,0,1)
F.cG(g,b6,b6,1,1,0,1,0,3)
F.cG(g,b6,b6,1,1,0,0,1,2)
F.cG(g,b6,b6,1,1,-1,0,0,0)
F.cG(g,b6,b6,1,1,0,-1,0,0)
F.cG(g,b6,b6,1,1,0,0,-1,3)
g.aD()
f=E.c1(g)
e=E.c1(b6)
d=E.c1(b6)
for(c=-1.6;c<=1.7;c+=0.8)for(b=-1.6;b<=1.7;b+=0.8)for(a=-1.6;a<=1.7;a+=0.8){a0=new V.af(1,0,0,c,0,1,0,b,0,0,1,a,0,0,0,1).t(0,new V.af(0.2,0,0,0,0,0.2,0,0,0,0,0.2,0,0,0,0,1))
r=new U.ck()
r.r=r.f=r.e=r.d=r.c=r.b=r.a=0
r.sdU(0)
r.sdM(0,0)
r.sdP(0)
b8=r.d
if(!(Math.abs(b8-0)<$.y().a)){r.d=0
b8=new D.u("deltaYaw",b8,0)
b8.b=!0
q=r.y
if(q!=null)q.u(b8)}r.sbZ(0)
r.sc_(0)
i.push(r)
a1=U.kx()
b8=[H.jz(a1,"as",0)]
if(a1.at(H.b([r],b8))){q=a1.a
a2=q.length
q.push(r)
q=H.b([r],b8)
p=a1.c
if(p!=null)p.$2(a2,q)}q=new U.bZ()
q.sT(0,a0)
if(a1.at(H.b([q],b8))){p=a1.a
a2=p.length
p.push(q)
b8=H.b([q],b8)
q=a1.c
if(q!=null)q.$2(a2,b8)}a3=E.c1(b6)
a3.saH(j)
a3.scj(a1)
b8=a3.y
q=[H.a8(b8,0)]
if(b8.at(H.b([f],q))){p=b8.a
a2=p.length
p.push(f)
q=H.b([f],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}b8=e.y
q=[H.a8(b8,0)]
if(b8.at(H.b([a3],q))){p=b8.a
a2=p.length
p.push(a3)
q=H.b([a3],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}b8=V.lO(h.length/125,1,1)
k=new V.Y(Math.floor(b8.a*255)/255,Math.floor(b8.b*255)/255,Math.floor(b8.c*255)/255,Math.floor(255)/255)
h.push(k)
a4=E.c1(b6)
b8=new O.hS()
b8.b=k
a4.saH(b8)
a4.scj(a1)
b8=a4.y
q=[H.a8(b8,0)]
if(b8.at(H.b([f],q))){p=b8.a
a2=p.length
p.push(f)
q=H.b([f],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}b8=d.y
q=[H.a8(b8,0)]
if(b8.at(H.b([a4],q))){p=b8.a
a2=p.length
p.push(a4)
q=H.b([a4],q)
b8=b8.c
if(b8!=null)b8.$2(a2,q)}}a5=new X.f_()
a5.d=a5.c=a5.b=a5.a=512
a5.e=!0
a5.f=!1
a5.x=a5.r=1
a5.ch=T.kP(b6)
a5.cx=new V.Y(0,0,0,1)
a5.cy=!0
a5.db=2000
a5.dx=!0
a5.dy=V.dv()
a5.sam(0,512)
a5.sai(0,512)
k=new V.Y(0,0,0,1)
if(!a5.cx.n(0,k)){m=a5.cx
a5.cx=k
b8=new D.u("color",m,k)
b8.b=!0
a5.Y(b8)}b8=a5.db
if(!(Math.abs(b8-2000)<$.y().a)){a5.db=2000
b8=new D.u("depth",b8,2000)
b8.b=!0
a5.Y(b8)}if(!a5.f){a5.f=!0
b8=new D.u("autoResize",!1,!0)
b8.b=!0
a5.Y(b8)}b8=a5.r
if(!(Math.abs(b8-0.5)<$.y().a)){a5.r=0.5
b8=new D.u("autoResizeScalarX",b8,0.5)
b8.b=!0
a5.Y(b8)}b8=a5.x
if(!(Math.abs(b8-0.5)<$.y().a)){a5.x=0.5
b8=new D.u("autoResizeScalarY",b8,0.5)
b8.b=!0
a5.Y(b8)}a6=V.dv()
if(!J.G(a5.dy,a6)){m=a5.dy
a5.dy=a6
b8=new D.u("region",m,a6)
b8.b=!0
a5.Y(b8)}a7=M.kw()
a7.e.k(0,d)
a7.saG(0,a5)
a7.saR(l)
a8=X.jU(!1,b6)
a9=M.kw()
a9.e.k(0,e)
a9.saG(0,a8)
a9.saR(l)
b8=s.f.dD("../resources/maskonaive",".jpg")
b0=M.kr()
q=new O.dy()
q.b=1.0471975511965976
q.d=new V.L(1,1,1)
m=q.c
q.c=b8
b8.gm().k(0,q.ga7())
b8=new D.u("boxTexture",m,q.c)
b8.b=!0
q.C(b8)
b0.saH(q)
b0.saG(0,a8)
b0.saR(l)
b1=new O.dG()
b1.a=new V.Y(0,0,0,0)
b8=O.f9(O.bj)
b1.c=b8
b8.aI(b1.gfg(),b1.gfi())
b1.d=0
b1.e=null
b1.r=b1.f=C.h
b2=new V.Y(0,0,0,0)
if(!b1.a.n(0,b2)){m=b1.a
b1.a=b2
b8=new D.u("backColor",m,b2)
b8.b=!0
b1.C(b8)}b8=b1.f
if(b8!==C.h){b1.f=C.h
b8=new D.u("blend",b8,C.h)
b8.b=!0
b1.C(b8)}b8=b1.c
q=new O.bj()
q.sal(b6)
a0=V.bi()
if(!J.G(q.b,a0)){m=q.b
q.b=a0
p=new D.u("colorMatrix",m,a0)
p.b=!0
q.C(p)}b3=V.dv()
if(!J.G(q.c,b3)){m=q.c
q.c=b3
p=new D.u("source",m,b3)
p.b=!0
q.C(p)}q.sdg(0,b6)
if(q.e!==!1){q.e=!1
p=new D.u("flip",!0,!1)
p.b=!0
q.C(p)}q.f=null
q.sdg(0,V.du(0,0.75,0.25,0.25))
q.sal(a5.ch)
b8.k(0,q)
b4=M.kr()
b4.saH(b1)
b4.saG(0,a8)
b8=s.z
if(b8==null)b8=s.z=D.A()
b8.k(0,new M.jE(i))
b8=s.f
q=s.x
p=a5.ch
o=new T.cX()
o.a=b8
o.z=4
o.ch=o.Q=!1
n=new X.ab(!1,!1,!1)
o.c=n
b8=new D.u(b7,b6,n)
b8.b=!0
o.bb(b8)
b8=o.d
if(b8!==p){if(b8!=null)b8.gm().O(0,o.gcJ())
m=o.d
o.d=p
p.gm().k(0,o.gcJ())
b8=new D.u("texture",m,o.d)
b8.b=!0
o.bb(b8)}o.aC(q)
b8=o.x
if(b8==null)b8=o.x=D.A()
b8.k(0,new M.jF(h,i))
b8=M.am
q=H.b([a7,b0,a9,b4],[b8])
p=new M.cZ()
p.b9(b8)
p.e=!0
p.f=!1
p.r=null
p.aI(p.gfL(),p.gfN())
p.a1(0,q)
b8=s.d
if(b8!==p){if(b8!=null)b8.gm().O(0,s.gcG())
s.d=p
p.gm().k(0,s.gcG())
s.cH()}b8=new V.f3("buttons")
u=u.getElementById("buttons")
b8.b=u
if(u==null)H.p("Failed to find buttons for ButtonGroup")
b8.c=H.b([],[W.bs])
b8.he(0,"Back target snapshot",new M.jG(s,a5))
V.nH(s)},
jE:function jE(a){this.a=a},
jF:function jF(a,b){this.a=a
this.b=b},
jG:function jG(a,b){this.a=a
this.b=b}},A={
m3:function(a,b){var u=a.aE,t=new A.fW(b,u)
t.ba(b,u)
t.e7(a,b)
return t},
m4:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gaq(a3)+a4.gaq(a4)+a5.gaq(a5)+a6.gaq(a6)+a7.gaq(a7)+a8.gaq(a8)+a9.gaq(a9)+b0.gaq(b0)+b1.gaq(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)c+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)c+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)c+="_"+H.d(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.m)(b5),++t)c+="_"+H.d(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.a4()
if(j){u=$.b3()
d=new Z.aZ(d.a|u.a)}if(i){u=$.b2()
d=new Z.aZ(d.a|u.a)}if(h){u=$.b4()
d=new Z.aZ(d.a|u.a)}if(g){u=$.b1()
d=new Z.aZ(d.a|u.a)}return new A.fZ(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
js:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
jt:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.js(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eQ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
mT:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.js(b,t,"emission")
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
mP:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jt(b,t,"ambient")
b.a+="\n"},
mR:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jt(b,t,"diffuse")
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
mU:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jt(b,t,"invDiffuse")
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
n_:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jt(b,t,"specular")
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
mW:function(a,b){var u,t,s
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
mY:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.js(b,t,"reflect")
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
mZ:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.js(b,t,"refract")
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
mQ:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.eQ(t)
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
if(typeof u!=="number")return u.an()
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
c.a=r+"\n"}r=[P.l]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.a.p(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(q," + ")+");\n"
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
mS:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.eQ(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.an()
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
r=[P.l]
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
c.a+="      highLight = intensity*("+C.a.p(m," + ")+");\n"}else c.a+="   highLight = "+C.a.p(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.a.p(o," + ")+");\n"
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
mX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.eQ(t)
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
if(typeof u!=="number")return u.an()
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
c.a=r+"\n"}r=[P.l]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.a.p(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.a.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.a.p(l," + ")+");\n"
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
n0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.eQ(t)
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
if(typeof u!=="number")return u.an()
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
if(o){u=$.fr
if(u==null)u=$.fr=new E.e1(E.kY(),E.kZ())
r=c.a
if(u.b===C.x){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=u+"\n"}u=[P.l]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.a.p(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.a.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.a.p(j," + ")+");\n"
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
mV:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.l])
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
u=b.a+="   return "+C.a.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
n1:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.aV("")
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
A.mT(a,i)
A.mP(a,i)
A.mR(a,i)
A.mU(a,i)
A.n_(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.mY(a,i)
A.mZ(a,i)}A.mW(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.mQ(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.mS(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.mX(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.m)(q),++n)A.n0(a,q[n],i)
A.mV(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.l])
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aK(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aK(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aK(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.m)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.e(r,0)
i.a+=l+(r[0].toUpperCase()+C.d.aK(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
u=i.a+="   vec4 objClr = vec4("+C.a.p(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
n2:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bk+"];\n"
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
n4:function(a,b){var u
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
n3:function(a,b){var u
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
n6:function(a,b){var u,t
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
n7:function(a,b){var u,t
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
n5:function(a,b){var u
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
n8:function(a,b){var u
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
eQ:function(a){if(0>=a.length)return H.e(a,0)
return a[0].toUpperCase()+C.d.aK(a,1)},
mr:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.P
t=(s||b===C.w?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.O)t+="      clrAccum += color;\n"
else if(b===C.h)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.w
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mq:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.id(c,u)
t.ba(c,u)
t.eb(a,b,c)
return t},
k5:function(a,b,c,d,e){var u=new A.is(a,c,e)
u.f=d
P.m1(d,0,P.w)
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fW:function fW(a,b){var _=this
_.dj=_.io=_.bl=_.aE=_.bk=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iw=_.iv=_.iu=_.c9=_.c8=_.c7=_.c6=_.c5=_.c4=_.c3=_.c2=_.dz=_.it=_.dw=_.dv=_.is=_.du=_.dt=_.ds=_.ir=_.dr=_.dq=_.dn=_.iq=_.dm=_.dl=_.ip=_.dk=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
d1:function d1(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=b},
dA:function dA(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bk=b3
_.aE=b4
_.bl=b5},
cp:function cp(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cq:function cq(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cs:function cs(a,b,c,d,e,f,g,h,i,j){var _=this
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
ct:function ct(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dx:function dx(){},
bu:function bu(a,b){this.a=a
this.b=b},
hR:function hR(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hT:function hT(a,b){var _=this
_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
id:function id(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dM:function dM(){},
iw:function iw(a){this.a=a},
ap:function ap(a,b,c){this.a=a
this.c=b
this.d=c},
it:function it(a,b,c){this.a=a
this.c=b
this.d=c},
iu:function iu(a,b,c){this.a=a
this.c=b
this.d=c},
iv:function iv(a,b,c){this.a=a
this.c=b
this.d=c},
is:function is(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
aX:function aX(a,b,c){this.a=a
this.c=b
this.d=c},
F:function F(a,b,c){this.a=a
this.c=b
this.d=c},
bl:function bl(a,b,c){this.a=a
this.c=b
this.d=c},
ix:function ix(a,b,c){this.a=a
this.c=b
this.d=c},
cr:function cr(a,b,c){this.a=a
this.c=b
this.d=c},
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
aY:function aY(a,b,c){this.a=a
this.c=b
this.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jr:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cG:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.C(h,g+a1,f+a2)
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
j.d=i}m=F.jr(i)
l=F.jr(h)
k=F.nL(d,a0,new F.jq(j,F.jr(g),F.jr(f),l,m,c),b)
if(k!=null)a.hH(k)},
nL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.k1()
t=H.b([],[F.bI])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.iI(g,g,new V.Y(p,0,0,1),g,g,new V.a2(r,1),g,g,0)
q.k(0,o)
c.$3(o,r,0)
t.push(o.bW(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.iI(g,g,new V.Y(j,i,h,1),g,g,new V.a2(r,m),g,g,0)
k.k(0,o)
c.$3(o,r,n)
t.push(o.bW(d))}}u.d.hi(a+1,b+1,t)
return u},
c2:function(a,b,c){var u=new F.bb(),t=a.a
if(t==null)H.p(P.n("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.n("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a2()
return u},
m_:function(a,b){var u=new F.c7(),t=a.a
if(t==null)H.p(P.n("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.n("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a2()
return u},
k1:function(){var u=new F.hK(),t=new F.iJ(u)
t.b=!1
t.c=H.b([],[F.bI])
u.a=t
t=new F.hN(u)
t.b=H.b([],[F.cg])
u.b=t
t=new F.hM(u)
t.b=H.b([],[F.c7])
u.c=t
t=new F.hL(u)
t.b=H.b([],[F.bb])
u.d=t
u.e=null
return u},
iI:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bI(),r=new F.iO()
r.b=H.b([],[F.cg])
s.b=r
r=new F.iN()
u=[F.c7]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iK()
u=[F.bb]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.lv()
s.e=0
r=$.a4()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b3().a)!==0?e:t
s.x=(u&$.b2().a)!==0?b:t
s.y=(u&$.bo().a)!==0?f:t
s.z=(u&$.b4().a)!==0?g:t
s.Q=(u&$.lw().a)!==0?c:t
s.ch=(u&$.bU().a)!==0?i:0
s.cx=(u&$.b1().a)!==0?a:t
return s},
jq:function jq(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bb:function bb(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
c7:function c7(){this.b=this.a=null},
cg:function cg(){this.a=null},
hK:function hK(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hL:function hL(a){this.a=a
this.b=null},
hM:function hM(a){this.a=a
this.b=null},
hN:function hN(a){this.a=a
this.b=null},
bI:function bI(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iQ:function iQ(a){this.a=a},
iP:function iP(a){this.a=a},
iJ:function iJ(a){this.a=a
this.c=this.b=null},
iK:function iK(){this.d=this.c=this.b=null},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b){this.a=a
this.b=b},
iN:function iN(){this.c=this.b=null},
iO:function iO(){this.b=null}},T={
kP:function(a){var u=new T.ib()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
kQ:function(a,b,c,d,e,f,g){var u,t,s
if(f==null)f=0
if(g==null)g=0
if(e==null)e=b.r
if(d==null)d=b.x
u=b.x
a.bindFramebuffer(36160,a.createFramebuffer())
a.readBuffer(36064)
a.framebufferTexture2D(36160,36064,3553,b.b,0)
t=new Uint8Array(e*d*4)
a.readPixels(f,u-d-g,e,d,6408,5121,t)
a.bindFramebuffer(36160,null)
s=new T.ih(t,e,d)
s.eJ()
return s},
cX:function cX(){var _=this
_.ch=_.Q=_.z=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(a,b){this.c=a
this.d=b
this.b=null},
cn:function cn(){},
ia:function ia(){},
ib:function ib(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ic:function ic(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ie:function ie(a){var _=this
_.a=a
_.e=_.d=_.c=null},
ig:function ig(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
ih:function ih(a,b,c){this.a=a
this.b=b
this.c=c}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jY.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gK:function(a){return H.ch(a)},
i:function(a){return"Instance of '"+H.d(H.ci(a))+"'"}}
J.fI.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iaJ:1}
J.db.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dc.prototype={
gK:function(a){return 0},
i:function(a){return String(a)}}
J.hu.prototype={}
J.bH.prototype={}
J.bh.prototype={
i:function(a){var u=a[$.lk()]
if(u==null)return this.e4(a)
return"JavaScript function for "+H.d(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bf.prototype={
i0:function(a,b){var u
if(!!a.fixed$length)H.p(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.ds(b,null))
return a.splice(b,1)[0]},
O:function(a,b){var u
if(!!a.fixed$length)H.p(P.x("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
a1:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
J:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.b8(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.e(r,u)
r[u]=t}return r.join(b)},
hF:function(a){return this.p(a,"")},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
e0:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ah(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ah(c,b,u,"end",null))
if(b===c)return H.b([],[H.a8(a,0)])
return H.b(a.slice(b,c),[H.a8(a,0)])},
gcb:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ky())},
d8:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.b8(a))}return!1},
aZ:function(a,b){if(!!a.immutable$list)H.p(P.x("sort"))
H.mo(a,b==null?J.mL():b)},
dZ:function(a){return this.aZ(a,null)},
w:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
i:function(a){return P.jV(a,"[","]")},
gN:function(a){return new J.a0(a,a.length)},
gK:function(a){return H.ch(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jM(b,u,null))
if(b<0)throw H.c(P.ah(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.p(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$iq:1,
$ii:1,
$ir:1}
J.jX.prototype={}
J.a0.prototype={
gG:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c6.prototype={
aU:function(a,b){var u
if(typeof b!=="number")throw H.c(H.b_(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbn(b)
if(this.gbn(a)===u)return 0
if(this.gbn(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbn:function(a){return a===0?1/a<0:a<0},
i8:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
aV:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
V:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dS:function(a,b){var u
if(b>20)throw H.c(P.ah(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbn(a))return"-"+u
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
bv:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
e6:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d3(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.d3(a,b)},
d3:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
be:function(a,b){var u
if(a>0)u=this.h6(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h6:function(a,b){return b>31?0:a>>>b},
$iK:1,
$ia9:1}
J.da.prototype={$iw:1}
J.d9.prototype={}
J.bg.prototype={
bV:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.p(H.bP(a,b))
return a.charCodeAt(b)},
bE:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.jM(b,null,null))
return a+b},
e_:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
cB:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.ds(b,null))
if(b>c)throw H.c(P.ds(b,null))
if(c>a.length)throw H.c(P.ds(c,null))
return a.substring(b,c)},
aK:function(a,b){return this.cB(a,b,null)},
ia:function(a){return a.toLowerCase()},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ak:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
ho:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.ah(c,0,u,null,null))
return H.lg(a,b,c)},
w:function(a,b){return this.ho(a,b,0)},
aU:function(a,b){var u
if(typeof b!=="string")throw H.c(H.b_(b))
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
gj:function(a){return a.length},
$il:1}
H.Q.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.d.bV(this.a,b)},
$aq:function(){return[P.w]},
$at:function(){return[P.w]},
$ai:function(){return[P.w]},
$ar:function(){return[P.w]}}
H.q.prototype={}
H.df.prototype={
gN:function(a){return new H.bA(this,this.gj(this))},
bu:function(a,b){return this.e3(0,b)}}
H.i3.prototype={
geG:function(){var u=J.ak(this.a)
return u},
gh7:function(){var u=J.ak(this.a),t=this.b
if(typeof u!=="number")return H.v(u)
if(t>u)return u
return t},
gj:function(a){var u=J.ak(this.a),t=this.b
if(typeof u!=="number")return H.v(u)
if(t>=u)return 0
return u-t},
D:function(a,b){var u,t=this,s=t.gh7()
if(typeof s!=="number")return s.B()
u=s+b
if(b>=0){s=t.geG()
if(typeof s!=="number")return H.v(s)
s=u>=s}else s=!0
if(s)throw H.c(P.I(b,t,"index",null,null))
return J.cP(t.a,u)},
co:function(a,b){var u,t,s,r,q=this,p=q.b,o=q.a,n=J.aK(o),m=n.gj(o)
if(typeof m!=="number")return m.F()
u=m-p
if(u<0)u=0
t=new Array(u)
t.fixed$length=Array
s=H.b(t,q.$ti)
for(r=0;r<u;++r){t=n.D(o,p+r)
if(r>=s.length)return H.e(s,r)
s[r]=t
t=n.gj(o)
if(typeof t!=="number")return t.a6()
if(t<m)throw H.c(P.b8(q))}return s}}
H.bA.prototype={
gG:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.aK(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.b8(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.D(s,u);++t.c
return!0}}
H.c9.prototype={
gN:function(a){return new H.dh(J.b5(this.a),this.b)},
gj:function(a){return J.ak(this.a)},
D:function(a,b){return this.b.$1(J.cP(this.a,b))},
$ai:function(a,b){return[b]}}
H.fo.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.dh.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gG(t))
return!0}u.a=null
return!1},
gG:function(a){return this.a}}
H.fV.prototype={
gj:function(a){return J.ak(this.a)},
D:function(a,b){return this.b.$1(J.cP(this.a,b))},
$aq:function(a,b){return[b]},
$adf:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cu.prototype={
gN:function(a){return new H.iS(J.b5(this.a),this.b)}}
H.iS.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gG(u)))return!0
return!1},
gG:function(a){var u=this.a
return u.gG(u)}}
H.d5.prototype={}
H.iA.prototype={
l:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))},
W:function(a,b,c,d,e){throw H.c(P.x("Cannot modify an unmodifiable list"))},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)}}
H.dN.prototype={}
H.iq.prototype={
aj:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hq.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fL.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.iz.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jJ.prototype={
$1:function(a){if(!!J.N(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.et.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bY.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cK(t==null?"unknown":t)+"'"},
gig:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.i7.prototype={}
H.hY.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cK(u)+"'"}}
H.bW.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bW))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.ch(this.a)
else u=typeof t!=="object"?J.bV(t):H.ch(t)
return(u^H.ch(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.ci(u))+"'")}}
H.f6.prototype={
i:function(a){return this.a}}
H.hH.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.J.prototype={
gj:function(a){return this.a},
ga9:function(a){return new H.bz(this,[H.a8(this,0)])},
gie:function(a){var u=this,t=H.a8(u,0)
return H.m2(new H.bz(u,[t]),new H.fK(u),t,H.a8(u,1))},
hp:function(a,b){var u=this.b
if(u==null)return!1
return this.eC(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bc(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bc(r,b)
s=t==null?null:t.b
return s}else return q.hE(b)},
hE:function(a){var u,t,s=this.d
if(s==null)return
u=this.cU(s,J.bV(a)&0x3ffffff)
t=this.dA(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cK(u==null?o.b=o.bL():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cK(t==null?o.c=o.bL():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bL()
r=J.bV(b)&0x3ffffff
q=o.cU(s,r)
if(q==null)o.bP(s,r,[o.bM(b,c)])
else{p=o.dA(q,b)
if(p>=0)q[p].b=c
else q.push(o.bM(b,c))}}},
J:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.b8(u))
t=t.c}},
cK:function(a,b,c){var u=this.bc(a,b)
if(u==null)this.bP(a,b,this.bM(b,c))
else u.b=c},
eQ:function(){this.r=this.r+1&67108863},
bM:function(a,b){var u,t=this,s=new H.fO(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eQ()
return s},
dA:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
i:function(a){return P.kC(this)},
bc:function(a,b){return a[b]},
cU:function(a,b){return a[b]},
bP:function(a,b,c){a[b]=c},
eF:function(a,b){delete a[b]},
eC:function(a,b){return this.bc(a,b)!=null},
bL:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bP(t,u,t)
this.eF(t,u)
return t}}
H.fK.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.a8(u,1),args:[H.a8(u,0)]}}}
H.fO.prototype={}
H.bz.prototype={
gj:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fP(u,u.r)
t.c=u.e
return t}}
H.fP.prototype={
gG:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b8(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jA.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.jB.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jC.prototype={
$1:function(a){return this.a(a)}}
H.fJ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.i2.prototype={}
H.ka.prototype={
q:function(){var u,t,s=this,r=s.c,q=s.b,p=q.length,o=s.a,n=o.length
if(r+p>n){s.d=null
return!1}u=o.indexOf(q,r)
if(u<0){s.c=n+1
s.d=null
return!1}t=u+p
s.d=new H.i2(u,q)
s.c=t===s.c?t+1:t
return!0},
gG:function(a){return this.d}}
H.ce.prototype={
eK:function(a,b,c,d){var u=P.ah(b,0,c,d,null)
throw H.c(u)},
cM:function(a,b,c,d){if(b>>>0!==b||b>c)this.eK(a,b,c,d)}}
H.dl.prototype={
gj:function(a){return a.length},
d1:function(a,b,c,d,e){var u,t,s=a.length
this.cM(a,b,s,"start")
this.cM(a,c,s,"end")
if(b>c)throw H.c(P.ah(b,0,c,null,null))
u=c-b
t=d.length
if(t-e<u)throw H.c(P.k2("Not enough elements"))
if(e!==0||t!==u)d=d.subarray(e,e+u)
a.set(d,b)},
$iz:1,
$az:function(){}}
H.bB.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aI(b,a,a.length)
a[b]=c},
W:function(a,b,c,d,e){if(!!J.N(d).$ibB){this.d1(a,b,c,d,e)
return}this.cD(a,b,c,d,e)},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)},
$iq:1,
$aq:function(){return[P.K]},
$at:function(){return[P.K]},
$ii:1,
$ai:function(){return[P.K]},
$ir:1,
$ar:function(){return[P.K]}}
H.cd.prototype={
l:function(a,b,c){H.aI(b,a,a.length)
a[b]=c},
W:function(a,b,c,d,e){if(!!J.N(d).$icd){this.d1(a,b,c,d,e)
return}this.cD(a,b,c,d,e)},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)},
$iq:1,
$aq:function(){return[P.w]},
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$ir:1,
$ar:function(){return[P.w]}}
H.hi.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hj.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hk.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hl.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hm.prototype={
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.cf.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.hn.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aI(b,a,a.length)
return a[b]}}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
P.iU.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:18}
P.iT.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iV.prototype={
$0:function(){this.a.$0()}}
P.iW.prototype={
$0:function(){this.a.$0()}}
P.ez.prototype={
ep:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jm(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
eq:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.jl(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idI:1}
P.jm.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jl.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.e6(u,q)}s.c=r
t.d.$1(s)}}
P.bK.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.cD.prototype={
gG:function(a){var u=this.c
if(u==null)return this.b
return u.gG(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bK){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.e(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.b5(u)
if(!!r.$icD){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.ji.prototype={
gN:function(a){return new P.cD(this.a())}}
P.dU.prototype={}
P.dD.prototype={}
P.i0.prototype={}
P.dI.prototype={}
P.jp.prototype={}
P.ju.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dp():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.j8.prototype={
i4:function(a){var u,t,s,r=null
try{if(C.e===$.aq){a.$0()
return}P.na(r,r,this,a)}catch(s){u=H.aL(s)
t=H.kf(s)
P.l3(r,r,this,u,t)}},
i5:function(a,b){var u,t,s,r=null
try{if(C.e===$.aq){a.$1(b)
return}P.nb(r,r,this,a,b)}catch(s){u=H.aL(s)
t=H.kf(s)
P.l3(r,r,this,u,t)}},
i6:function(a,b){return this.i5(a,b,null)},
hm:function(a){return new P.j9(this,a)},
dd:function(a,b){return new P.ja(this,a,b)}}
P.j9.prototype={
$0:function(){return this.a.i4(this.b)}}
P.ja.prototype={
$1:function(a){return this.a.i6(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.j5.prototype={
gN:function(a){var u=new P.ea(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
w:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eA(b)
return t}},
eA:function(a){var u=this.d
if(u==null)return!1
return this.bI(this.cT(u,a),a)>=0},
k:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cN(u==null?s.b=P.k9():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cN(t==null?s.c=P.k9():t,b)}else return s.eu(0,b)},
eu:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.k9()
u=s.cP(b)
t=r[u]
if(t==null)r[u]=[s.bF(b)]
else{if(s.bI(t,b)>=0)return!1
t.push(s.bF(b))}return!0},
O:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fW(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cT(r,b)
t=s.bI(u,b)
if(t<0)return!1
s.d5(u.splice(t,1)[0])
return!0},
cN:function(a,b){if(a[b]!=null)return!1
a[b]=this.bF(b)
return!0},
fW:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.d5(u)
delete a[b]
return!0},
cO:function(){this.r=1073741823&this.r+1},
bF:function(a){var u,t=this,s=new P.j6(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cO()
return s},
d5:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cO()},
cP:function(a){return J.bV(a)&1073741823},
cT:function(a,b){return a[this.cP(b)]},
bI:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.j6.prototype={}
P.ea.prototype={
gG:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b8(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fG.prototype={}
P.fQ.prototype={$iq:1,$ii:1,$ir:1}
P.t.prototype={
gN:function(a){return new H.bA(a,this.gj(a))},
D:function(a,b){return this.h(a,b)},
co:function(a,b){var u,t,s=this,r=H.b([],[H.ke(s,a,"t",0)])
C.a.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.e(r,u)
r[u]=t;++u}return r},
i9:function(a){return this.co(a,!0)},
W:function(a,b,c,d,e){var u,t,s,r,q,p,o=this
P.hA(b,c,o.gj(a))
u=c-b
if(u===0)return
P.hz(e,"skipCount")
if(H.nk(d,"$ir",[H.ke(o,a,"t",0)],"$ar")){t=e
s=d}else{s=H.mp(d,e,null,H.ke(J.N(d),d,"t",0)).co(0,!1)
t=0}r=J.aK(s)
q=r.gj(s)
if(typeof q!=="number")return H.v(q)
if(t+u>q)throw H.c(H.lV())
if(t<b)for(p=u-1;p>=0;--p)o.l(a,b+p,r.h(s,t+p))
else for(p=0;p<u;++p)o.l(a,b+p,r.h(s,t+p))},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)},
dW:function(a,b,c){this.ar(a,b,b+c.length,c)},
i:function(a){return P.jV(a,"[","]")}}
P.fT.prototype={}
P.fU.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:8}
P.a1.prototype={
J:function(a,b){var u,t
for(u=J.b5(this.ga9(a));u.q();){t=u.gG(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.ak(this.ga9(a))},
i:function(a){return P.kC(a)},
$iR:1}
P.jc.prototype={
a1:function(a,b){var u
for(u=J.b5(b);u.q();)this.k(0,u.gG(u))},
i:function(a){return P.jV(this,"{","}")},
D:function(a,b){var u,t,s
P.hz(b,"index")
for(u=P.mF(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
$iq:1,
$ii:1}
P.eb.prototype={}
P.f8.prototype={}
P.fc.prototype={}
P.fq.prototype={}
P.iD.prototype={}
P.iE.prototype={
hq:function(a){var u,t,s,r=P.hA(0,null,a.length)
if(typeof r!=="number")return r.F()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jn(t)
if(s.eI(a,0,r)!==r)s.d6(C.d.bV(a,r-1),0)
return new Uint8Array(t.subarray(0,H.mJ(0,s.b,t.length)))}}
P.jn.prototype={
d6:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.e(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.e(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.e(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.e(s,r)
s[r]=128|a&63
return!1}},
eI:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.d.bV(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.d.bE(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.d6(r,C.d.bE(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.e(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.e(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.e(u,q)
u[q]=128|r&63}}return s}}
P.aJ.prototype={}
P.ae.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.ae&&this.a===b.a&&!0},
aU:function(a,b){return C.c.aU(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.c.be(u,30))&1073741823},
i:function(a){var u=this,t=P.lP(H.me(u)),s=P.d0(H.mc(u)),r=P.d0(H.m8(u)),q=P.d0(H.m9(u)),p=P.d0(H.mb(u)),o=P.d0(H.md(u)),n=P.lQ(H.ma(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.b9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
aU:function(a,b){return C.c.aU(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fn(),q=this.a
if(q<0)return"-"+new P.b9(0-q).i(0)
u=r.$1(C.c.Z(q,6e7)%60)
t=r.$1(C.c.Z(q,1e6)%60)
s=new P.fm().$1(q%1e6)
return""+C.c.Z(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.fm.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fn.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bw.prototype={}
P.dp.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbH:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbG:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+H.d(p)
t=q.gbH()+o+u
if(!q.a)return t
s=q.gbG()
r=P.jT(q.b)
return t+s+": "+r}}
P.bE.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fF.prototype={
gbH:function(){return"RangeError"},
gbG:function(){var u,t=this.b
if(typeof t!=="number")return t.a6()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gj:function(a){return this.f}}
P.iB.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iy.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bF.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fb.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jT(u)+"."}}
P.ht.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dB.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fh.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e2.prototype={
i:function(a){return"Exception: "+this.a}}
P.fB.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.d.cB(s,0,75)+"...":s
return t+"\n"+r}}
P.d7.prototype={}
P.w.prototype={}
P.i.prototype={
bu:function(a,b){return new H.cu(this,b,[H.jz(this,"i",0)])},
gj:function(a){var u,t=this.gN(this)
for(u=0;t.q();)++u
return u},
gaJ:function(a){var u,t=this.gN(this)
if(!t.q())throw H.c(H.ky())
u=t.gG(t)
if(t.q())throw H.c(H.lW())
return u},
D:function(a,b){var u,t,s
P.hz(b,"index")
for(u=this.gN(this),t=0;u.q();){s=u.gG(u)
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
i:function(a){return P.lU(this,"(",")")}}
P.fH.prototype={}
P.r.prototype={$iq:1,$ii:1}
P.R.prototype={}
P.aR.prototype={
gK:function(a){return P.U.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.a9.prototype={}
P.U.prototype={constructor:P.U,$iU:1,
n:function(a,b){return this===b},
gK:function(a){return H.ch(this)},
i:function(a){return"Instance of '"+H.d(H.ci(this))+"'"},
toString:function(){return this.i(this)}}
P.k0.prototype={}
P.l.prototype={}
P.aV.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.eR.prototype={
gj:function(a){return a.length}}
W.eT.prototype={
i:function(a){return String(a)}}
W.eU.prototype={
i:function(a){return String(a)}}
W.cS.prototype={}
W.bq.prototype={$ibq:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cr:function(a,b,c){if(c!=null)return a.getContext(b,P.nl(c))
return a.getContext(b)},
cq:function(a,b){return this.cr(a,b,null)},
$ibt:1}
W.cV.prototype={
ht:function(a,b,c){var u=P.l9(a.createImageData(b,c))
return u},
hZ:function(a,b,c,d){a.putImageData(P.l8(b),c,d)
return}}
W.b7.prototype={
gj:function(a){return a.length}}
W.fd.prototype={
gj:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c_.prototype={
gj:function(a){return a.length}}
W.fe.prototype={}
W.ad.prototype={}
W.at.prototype={}
W.ff.prototype={
gj:function(a){return a.length}}
W.fg.prototype={
gj:function(a){return a.length}}
W.fi.prototype={
gj:function(a){return a.length}}
W.fj.prototype={
i:function(a){return String(a)}}
W.d2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a6,P.a9]]},
$iz:1,
$az:function(){return[[P.a6,P.a9]]},
$at:function(){return[[P.a6,P.a9]]},
$ii:1,
$ai:function(){return[[P.a6,P.a9]]},
$ir:1,
$ar:function(){return[[P.a6,P.a9]]}}
W.d3.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gam(a))+" x "+H.d(this.gai(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$ia6&&a.left===u.gbo(b)&&a.top===u.gbr(b)&&this.gam(a)===u.gam(b)&&this.gai(a)===u.gai(b)},
gK:function(a){return W.l0(C.b.gK(a.left),C.b.gK(a.top),C.b.gK(this.gam(a)),C.b.gK(this.gai(a)))},
gde:function(a){return a.bottom},
gai:function(a){return a.height},
gbo:function(a){return a.left},
gcn:function(a){return a.right},
gbr:function(a){return a.top},
gam:function(a){return a.width},
$ia6:1,
$aa6:function(){return[P.a9]}}
W.fk.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.l]},
$iz:1,
$az:function(){return[P.l]},
$at:function(){return[P.l]},
$ii:1,
$ai:function(){return[P.l]},
$ir:1,
$ar:function(){return[P.l]}}
W.fl.prototype={
gj:function(a){return a.length}}
W.iY.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.e(u,b)
this.a.replaceChild(c,u[b])},
k:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.i9(this)
return new J.a0(u,u.length)},
W:function(a,b,c,d,e){throw H.c(P.k6(null))},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)},
$aq:function(){return[W.O]},
$at:function(){return[W.O]},
$ai:function(){return[W.O]},
$ar:function(){return[W.O]}}
W.O.prototype={
ghl:function(a){return new W.j_(a)},
gbU:function(a){return new W.iY(a,a.children)},
gdf:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a6()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a6()
if(r<0)r=-r*0
return new P.a6(u,t,s,r,[P.a9])},
i:function(a){return a.localName},
ah:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.kv
if(u==null){u=H.b([],[W.aP])
t=new W.dn(u)
u.push(W.l_(null))
u.push(W.l1())
$.kv=t
d=t}else d=u
u=$.ku
if(u==null){u=new W.eF(d)
$.ku=u
c=u}else{u.a=d
c=u}}if($.aM==null){u=document
t=u.implementation.createHTMLDocument("")
$.aM=t
$.jS=t.createRange()
s=$.aM.createElement("base")
s.href=u.baseURI
$.aM.head.appendChild(s)}u=$.aM
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aM
if(!!this.$ibq)r=u.body
else{r=u.createElement(a.tagName)
$.aM.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.w(C.U,a.tagName)){$.jS.selectNodeContents(r)
q=$.jS.createContextualFragment(b)}else{r.innerHTML=b
q=$.aM.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aM.body
if(r==null?u!=null:r!==u)J.km(r)
c.cs(q)
document.adoptNode(q)
return q},
hs:function(a,b,c){return this.ah(a,b,c,null)},
dX:function(a,b){a.textContent=null
a.appendChild(this.ah(a,b,null,null))},
$iO:1,
gdQ:function(a){return a.tagName}}
W.fp.prototype={
$1:function(a){return!!J.N(a).$iO}}
W.j.prototype={$ij:1}
W.f.prototype={
hg:function(a,b,c,d){if(c!=null)this.ev(a,b,c,!1)},
ev:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)}}
W.au.prototype={$iau:1}
W.fv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.au]},
$iz:1,
$az:function(){return[W.au]},
$at:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$ir:1,
$ar:function(){return[W.au]}}
W.fw.prototype={
gj:function(a){return a.length}}
W.fA.prototype={
gj:function(a){return a.length}}
W.av.prototype={$iav:1}
W.fD.prototype={
gj:function(a){return a.length}}
W.c4.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.B]},
$iz:1,
$az:function(){return[W.B]},
$at:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]},
$ir:1,
$ar:function(){return[W.B]}}
W.bc.prototype={$ibc:1,
gbY:function(a){return a.data}}
W.c5.prototype={$ic5:1}
W.by.prototype={$iby:1}
W.fR.prototype={
i:function(a){return String(a)}}
W.hb.prototype={
gj:function(a){return a.length}}
W.hc.prototype={
h:function(a,b){return P.b0(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
ga9:function(a){var u=H.b([],[P.l])
this.J(a,new W.hd(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.l,null]},
$iR:1,
$aR:function(){return[P.l,null]}}
W.hd.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
h:function(a,b){return P.b0(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
ga9:function(a){var u=H.b([],[P.l])
this.J(a,new W.hf(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.l,null]},
$iR:1,
$aR:function(){return[P.l,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ay.prototype={$iay:1}
W.hg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ay]},
$iz:1,
$az:function(){return[W.ay]},
$at:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]},
$ir:1,
$ar:function(){return[W.ay]}}
W.az.prototype={$iaz:1}
W.a3.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.k2("No elements"))
if(t>1)throw H.c(P.k2("More than one element"))
return u.firstChild},
a1:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.e(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.d6(u,u.length)},
W:function(a,b,c,d,e){throw H.c(P.x("Cannot setRange on Node list"))},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
$aq:function(){return[W.B]},
$at:function(){return[W.B]},
$ai:function(){return[W.B]},
$ar:function(){return[W.B]}}
W.B.prototype={
i_:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
i2:function(a,b){var u,t
try{u=a.parentNode
J.lA(u,b,a)}catch(t){H.aL(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.e2(a):u},
fX:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.dm.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.B]},
$iz:1,
$az:function(){return[W.B]},
$at:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]},
$ir:1,
$ar:function(){return[W.B]}}
W.aA.prototype={$iaA:1,
gj:function(a){return a.length}}
W.hv.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iz:1,
$az:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$ir:1,
$ar:function(){return[W.aA]}}
W.hF.prototype={
h:function(a,b){return P.b0(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
ga9:function(a){var u=H.b([],[P.l])
this.J(a,new W.hG(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.l,null]},
$iR:1,
$aR:function(){return[P.l,null]}}
W.hG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hI.prototype={
gj:function(a){return a.length}}
W.aC.prototype={$iaC:1}
W.hU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iz:1,
$az:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$ir:1,
$ar:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.hV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iz:1,
$az:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$ir:1,
$ar:function(){return[W.aD]}}
W.aE.prototype={$iaE:1,
gj:function(a){return a.length}}
W.hZ.prototype={
h:function(a,b){return a.getItem(b)},
J:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga9:function(a){var u=H.b([],[P.l])
this.J(a,new W.i_(u))
return u},
gj:function(a){return a.length},
$aa1:function(){return[P.l,P.l]},
$iR:1,
$aR:function(){return[P.l,P.l]}}
W.i_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.an.prototype={$ian:1}
W.dE.prototype={
ah:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=W.lR("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).a1(0,new W.a3(u))
return t}}
W.i4.prototype={
ah:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.A.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaJ(u)
s.toString
u=new W.a3(s)
r=u.gaJ(u)
t.toString
r.toString
new W.a3(t).a1(0,new W.a3(r))
return t}}
W.i5.prototype={
ah:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bw(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.A.ah(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaJ(u)
t.toString
s.toString
new W.a3(t).a1(0,new W.a3(s))
return t}}
W.cm.prototype={$icm:1}
W.aF.prototype={$iaF:1}
W.ao.prototype={$iao:1}
W.i8.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iz:1,
$az:function(){return[W.ao]},
$at:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$ir:1,
$ar:function(){return[W.ao]}}
W.i9.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iz:1,
$az:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$ir:1,
$ar:function(){return[W.aF]}}
W.ij.prototype={
gj:function(a){return a.length}}
W.aG.prototype={$iaG:1}
W.bG.prototype={$ibG:1}
W.im.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aG]},
$iz:1,
$az:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$ir:1,
$ar:function(){return[W.aG]}}
W.io.prototype={
gj:function(a){return a.length}}
W.bk.prototype={}
W.iC.prototype={
i:function(a){return String(a)}}
W.iR.prototype={
gj:function(a){return a.length}}
W.bm.prototype={
ghw:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
ghv:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibm:1}
W.cv.prototype={
fY:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
eH:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.H]},
$iz:1,
$az:function(){return[W.H]},
$at:function(){return[W.H]},
$ii:1,
$ai:function(){return[W.H]},
$ir:1,
$ar:function(){return[W.H]}}
W.dX.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.N(b)
return!!u.$ia6&&a.left===u.gbo(b)&&a.top===u.gbr(b)&&a.width===u.gam(b)&&a.height===u.gai(b)},
gK:function(a){return W.l0(C.b.gK(a.left),C.b.gK(a.top),C.b.gK(a.width),C.b.gK(a.height))},
gai:function(a){return a.height},
gam:function(a){return a.width}}
W.j2.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.av]},
$iz:1,
$az:function(){return[W.av]},
$at:function(){return[W.av]},
$ii:1,
$ai:function(){return[W.av]},
$ir:1,
$ar:function(){return[W.av]}}
W.eg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.B]},
$iz:1,
$az:function(){return[W.B]},
$at:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]},
$ir:1,
$ar:function(){return[W.B]}}
W.jf.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iz:1,
$az:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$ir:1,
$ar:function(){return[W.aE]}}
W.jg.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){if(b<0||b>=a.length)return H.e(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.an]},
$iz:1,
$az:function(){return[W.an]},
$at:function(){return[W.an]},
$ii:1,
$ai:function(){return[W.an]},
$ir:1,
$ar:function(){return[W.an]}}
W.iX.prototype={
J:function(a,b){var u,t,s,r,q
for(u=this.ga9(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga9:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.l])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.e(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.l,P.l]},
$aR:function(){return[P.l,P.l]}}
W.j_.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gj:function(a){return this.ga9(this).length}}
W.j0.prototype={}
W.j1.prototype={
$1:function(a){return this.a.$1(a)}}
W.cw.prototype={
ec:function(a){var u
if($.e5.a===0){for(u=0;u<262;++u)$.e5.l(0,C.T[u],W.nu())
for(u=0;u<12;++u)$.e5.l(0,C.m[u],W.nv())}},
aQ:function(a){return $.ly().w(0,W.c0(a))},
au:function(a,b,c){var u=$.e5.h(0,H.d(W.c0(a))+"::"+b)
if(u==null)u=$.e5.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaP:1}
W.M.prototype={
gN:function(a){return new W.d6(a,this.gj(a))},
W:function(a,b,c,d,e){throw H.c(P.x("Cannot setRange on immutable List."))},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)}}
W.dn.prototype={
aQ:function(a){return C.a.d8(this.a,new W.hp(a))},
au:function(a,b,c){return C.a.d8(this.a,new W.ho(a,b,c))},
$iaP:1}
W.hp.prototype={
$1:function(a){return a.aQ(this.a)}}
W.ho.prototype={
$1:function(a){return a.au(this.a,this.b,this.c)}}
W.eo.prototype={
en:function(a,b,c,d){var u,t,s
this.a.a1(0,c)
u=b.bu(0,new W.jd())
t=b.bu(0,new W.je())
this.b.a1(0,u)
s=this.c
s.a1(0,C.V)
s.a1(0,t)},
aQ:function(a){return this.a.w(0,W.c0(a))},
au:function(a,b,c){var u=this,t=W.c0(a),s=u.c
if(s.w(0,H.d(t)+"::"+b))return u.d.hj(c)
else if(s.w(0,"*::"+b))return u.d.hj(c)
else{s=u.b
if(s.w(0,H.d(t)+"::"+b))return!0
else if(s.w(0,"*::"+b))return!0
else if(s.w(0,H.d(t)+"::*"))return!0
else if(s.w(0,"*::*"))return!0}return!1},
$iaP:1}
W.jd.prototype={
$1:function(a){return!C.a.w(C.m,a)}}
W.je.prototype={
$1:function(a){return C.a.w(C.m,a)}}
W.jj.prototype={
au:function(a,b,c){if(this.e5(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.w(0,b)
return!1}}
W.jk.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.jh.prototype={
aQ:function(a){var u=J.N(a)
if(!!u.$icl)return!1
u=!!u.$ik
if(u&&W.c0(a)==="foreignObject")return!1
if(u)return!0
return!1},
au:function(a,b,c){if(b==="is"||C.d.e_(b,"on"))return!1
return this.aQ(a)},
$iaP:1}
W.d6.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cN(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gG:function(a){return this.d}}
W.aP.prototype={}
W.jb.prototype={}
W.eF.prototype={
cs:function(a){new W.jo(this).$2(a,null)},
b2:function(a,b){if(b==null)J.km(a)
else b.removeChild(a)},
h2:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.lD(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aL(r)}t="element unprintable"
try{t=J.aa(a)}catch(r){H.aL(r)}try{s=W.c0(a)
this.h1(a,b,p,t,s,o,n)}catch(r){if(H.aL(r) instanceof P.al)throw r
else{this.b2(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aQ(a)){p.b2(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.au(a,"is",g)){p.b2(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga9(f)
t=H.b(u.slice(0),[H.a8(u,0)])
for(s=f.ga9(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.e(t,s)
r=t[s]
if(!p.a.au(a,J.lG(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.N(a).$icm)p.cs(a.content)}}
W.jo.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h2(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b2(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aL(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.eu.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.cE.prototype={}
W.cF.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
P.eE.prototype={$ibc:1,
gbY:function(a){return this.a}}
P.jv.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.fx.prototype={
gbd:function(){var u=this.b,t=H.jz(u,"t",0)
return new H.c9(new H.cu(u,new P.fy(),[t]),new P.fz(),[t,W.O])},
l:function(a,b,c){var u=this.gbd()
J.lF(u.b.$1(J.cP(u.a,b)),c)},
k:function(a,b){this.b.a.appendChild(b)},
W:function(a,b,c,d,e){throw H.c(P.x("Cannot setRange on filtered list"))},
ar:function(a,b,c,d){return this.W(a,b,c,d,0)},
gj:function(a){return J.ak(this.gbd().a)},
h:function(a,b){var u=this.gbd()
return u.b.$1(J.cP(u.a,b))},
gN:function(a){var u=P.k_(this.gbd(),!1,W.O)
return new J.a0(u,u.length)},
$aq:function(){return[W.O]},
$at:function(){return[W.O]},
$ai:function(){return[W.O]},
$ar:function(){return[W.O]}}
P.fy.prototype={
$1:function(a){return!!J.N(a).$iO}}
P.fz.prototype={
$1:function(a){return H.h(a,"$iO")}}
P.j7.prototype={
gcn:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gde:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.d(u.a)+", "+H.d(u.b)+") "+H.d(u.c)+" x "+H.d(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.N(b)
if(!!u.$ia6){t=q.a
if(t==u.gbo(b)){s=q.b
if(s==u.gbr(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gcn(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gde(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u=this,t=u.a,s=J.bV(t),r=u.b,q=J.bV(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.c.gK(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.c.gK(r+t)
return P.mE(P.j4(P.j4(P.j4(P.j4(0,s),q),p),t))}}
P.a6.prototype={
gbo:function(a){return this.a},
gbr:function(a){return this.b},
gam:function(a){return this.c},
gai:function(a){return this.d}}
P.aO.prototype={$iaO:1}
P.fN.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aO]},
$at:function(){return[P.aO]},
$ii:1,
$ai:function(){return[P.aO]},
$ir:1,
$ar:function(){return[P.aO]}}
P.aS.prototype={$iaS:1}
P.hr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aS]},
$at:function(){return[P.aS]},
$ii:1,
$ai:function(){return[P.aS]},
$ir:1,
$ar:function(){return[P.aS]}}
P.hy.prototype={
gj:function(a){return a.length}}
P.cl.prototype={$icl:1}
P.i1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.l]},
$at:function(){return[P.l]},
$ii:1,
$ai:function(){return[P.l]},
$ir:1,
$ar:function(){return[P.l]}}
P.k.prototype={
gbU:function(a){return new P.fx(a,new W.a3(a))},
ah:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aP])
p.push(W.l_(null))
p.push(W.l1())
p.push(new W.jh())
c=new W.eF(new W.dn(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.o).hs(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.aW.prototype={$iaW:1}
P.ip.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aW]},
$at:function(){return[P.aW]},
$ii:1,
$ai:function(){return[P.aW]},
$ir:1,
$ar:function(){return[P.aW]}}
P.e8.prototype={}
P.e9.prototype={}
P.ej.prototype={}
P.ek.prototype={}
P.ev.prototype={}
P.ew.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eW.prototype={
gj:function(a){return a.length}}
P.eX.prototype={
h:function(a,b){return P.b0(a.get(b))},
J:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b0(u.value[1]))}},
ga9:function(a){var u=H.b([],[P.l])
this.J(a,new P.eY(u))
return u},
gj:function(a){return a.size},
$aa1:function(){return[P.l,null]},
$iR:1,
$aR:function(){return[P.l,null]}}
P.eY.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eZ.prototype={
gj:function(a){return a.length}}
P.bp.prototype={}
P.hs.prototype={
gj:function(a){return a.length}}
P.dV.prototype={}
P.dw.prototype={
dR:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.N(g)
if(!!u.$ibc&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.l8(g))
return}if(!!u.$ic5&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.lH("Incorrect number or type of arguments"))},
i7:function(a,b,c,d,e,f,g){return this.dR(a,b,c,d,e,f,g,null,null,null)}}
P.hX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.b0(a.item(b))},
l:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
D:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.R,,,]]},
$at:function(){return[[P.R,,,]]},
$ii:1,
$ai:function(){return[[P.R,,,]]},
$ir:1,
$ar:function(){return[[P.R,,,]]}}
P.er.prototype={}
P.es.prototype={}
K.eS.prototype={
aW:function(a,b){return!0},
i:function(a){return"all"}}
K.d8.prototype={
aW:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aW(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.di.prototype={}
K.aQ.prototype={
aW:function(a,b){return!this.e1(0,b)},
i:function(a){return"!["+this.cC(0)+"]"}}
K.hJ.prototype={
e9:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.n("May not create a Set with zero characters."))
u=P.w
t=new H.J([u,P.aJ])
for(s=new H.bA(a,a.gj(a));s.q();)t.l(0,s.d,!0)
r=P.k_(new H.bz(t,[u]),!0,u)
C.a.dZ(r)
this.a=r},
aW:function(a,b){return C.a.w(this.a,b)},
i:function(a){return P.k3(this.a)}}
L.dC.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dL(this.a.M(0,b))
r.a=H.b([],[K.di])
r.c=!1
this.c.push(r)
return r},
hC:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aW(0,a))return r}return},
i:function(a){return this.b},
d4:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.w(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bz(n,[H.a8(n,0)]),n=n.gN(n);n.q();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.w(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dJ.prototype={
i:function(a){var u=H.lh(this.b,"\n","\\n"),t=H.lh(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dK.prototype={
i:function(a){return this.b}}
L.ik.prototype={
M:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dC(this,b)
u.c=H.b([],[L.dL])
this.a.l(0,b,u)}return u},
b7:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dK(a)
u=P.l
t.c=new H.J([u,u])
this.b.l(0,a,t)}return t},
dT:function(a){return this.ib(a)},
ib:function(a){var u=this
return P.mO(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dT(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.i0(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.hC(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.k3(d)
throw H.c(P.n("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.x("removeRange"))
P.hA(0,m,d.length)
d.splice(0,m-0)
C.a.a1(c,d)
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
if(g.d!=null){j=P.k3(e)
i=g.d
h=i.c.h(0,j)
p=new L.dJ(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.w(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.mC()
case 1:return P.mD(q)}}},L.dJ)},
i:function(a){var u,t=new P.aV(""),s=this.d
if(s!=null)t.a=s.d4()+"\n"
for(s=this.a,s=s.gie(s),s=new H.dh(J.b5(s.a),s.b);s.q();){u=s.a
if(u!=this.d)t.a+=u.d4()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dL.prototype={
i:function(a){return this.b.b+": "+this.cC(0)}}
O.as.prototype={
b9:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cu:function(a,b,c){this.b=b
this.c=a},
aI:function(a,b){return this.cu(a,null,b)},
at:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cV:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.a0(u,u.length)},
D:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.e(u,b)
return u[b]},
k:function(a,b){var u,t,s=this,r=[H.jz(s,"as",0)]
if(s.at(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cV(t,H.b([b],r))}},
a1:function(a,b){var u,t
if(this.at(b)){u=this.a
t=u.length
C.a.a1(u,b)
this.cV(t,b)}},
$ii:1}
O.cb.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
aL:function(){var u=this.b
if(u!=null)u.u(null)},
gT:function(a){var u=this.a
if(u.length>0)return C.a.gcb(u)
else return V.bi()},
bp:function(a){var u=this.a
if(a==null)u.push(V.bi())
else u.push(a)
this.aL()},
aF:function(){var u=this.a
if(u.length>0){u.pop()
this.aL()}}}
E.f1.prototype={}
E.aN.prototype={
cL:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.a0(u,u.length);u.q();){t=u.d
if(t.f==null)t.cL()}},
scw:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().O(0,s.gdI())
u=s.c
if(u!=null)u.gm().k(0,s.gdI())
t=new D.u("shape",r,s.c)
t.b=!0
s.ap(t)}},
saH:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gm().O(0,s.gdK())
u=s.f
s.f=a
if(a!=null)a.gm().k(0,s.gdK())
s.cL()
t=new D.u("technique",u,s.f)
t.b=!0
s.ap(t)}},
scj:function(a){var u,t,s=this
if(!J.G(s.r,a)){u=s.r
if(u!=null)u.gm().O(0,s.gdG())
if(a!=null)a.gm().k(0,s.gdG())
s.r=a
t=new D.u("mover",u,a)
t.b=!0
s.ap(t)}},
a4:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.ax(0,b,s):null
if(!J.G(q,s.x)){u=s.x
s.x=q
t=new D.u("matrix",u,q)
t.b=!0
s.ap(t)}r=s.f
if(r!=null)r.a4(0,b)
for(r=s.y.a,r=new J.a0(r,r.length);r.q();)r.d.a4(0,b)},
a3:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gT(s))
else s.a.push(r.t(0,s.gT(s)))
s.aL()
a.cm(t.f)
s=a.dy
u=(s&&C.a).gcb(s)
if(u!=null&&t.d!=null)u.bq(a,t)
for(s=t.y.a,s=new J.a0(s,s.length);s.q();)s.d.a3(a)
a.cl()
a.dx.aF()},
ap:function(a){var u=this.z
if(u!=null)u.u(a)},
a2:function(){return this.ap(null)},
dJ:function(a){this.e=null
this.ap(a)},
hO:function(){return this.dJ(null)},
dL:function(a){this.ap(a)},
hP:function(){return this.dL(null)},
dH:function(a){this.ap(a)},
hN:function(){return this.dH(null)},
dF:function(a){this.ap(a)},
hK:function(){return this.dF(null)},
hJ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdE(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ba()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a2()},
hM:function(a,b){var u,t
for(u=b.gN(b),t=this.gdE();u.q();)u.gG(u).gm().O(0,t)
this.a2()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.br.prototype={
i:function(a){return this.b}}
E.bC.prototype={
i:function(a){return this.b}}
E.e1.prototype={}
E.hB.prototype={
e8:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ae(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cb()
t=[V.af]
u.a=H.b([],t)
u.gm().k(0,new E.hC(s))
s.cy=u
u=new O.cb()
u.a=H.b([],t)
u.gm().k(0,new E.hD(s))
s.db=u
u=new O.cb()
u.a=H.b([],t)
u.gm().k(0,new E.hE(s))
s.dx=u
u=H.b([],[O.dF])
s.dy=u
u.push(null)
s.fr=new H.J([P.l,A.dx])},
ghY:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gT(s)
u=t.db
u=t.z=s.t(0,u.gT(u))
s=u}return s},
gdN:function(){var u,t=this,s=t.ch
if(s==null){s=t.ghY()
u=t.dx
u=t.ch=s.t(0,u.gT(u))
s=u}return s},
cm:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gcb(u):a)},
cl:function(){var u=this.dy
if(u.length>1)u.pop()},
bh:function(a){var u=a.b
if(u.length===0)throw H.c(P.n("May not cache a shader with no name."))
if(this.fr.hp(0,u))throw H.c(P.n('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.hC.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hD.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hE.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dH.prototype={
cI:function(a){this.dO()},
cH:function(){return this.cI(null)},
ghD:function(){var u,t=this,s=Date.now(),r=C.c.Z(P.kt(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ae(s,!1)
return u/r},
d_:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.v(r)
u=C.b.aV(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.b.aV(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kS(C.i,s.gi3())}},
dO:function(){if(!this.cx){this.cx=!0
var u=window
C.C.eH(u)
C.C.fY(u,W.l4(new E.ii(this),P.a9))}},
i1:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d_()
s=p.z
if(s!=null)s.u(null)
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ae(r,!1)
s.y=P.kt(r-s.r.a).a*0.000001
r=s.cy
C.a.sj(r.a,0)
r.aL()
r=s.db
C.a.sj(r.a,0)
r.aL()
r=s.dx
C.a.sj(r.a,0)
r.aL()
r=s.dy;(r&&C.a).sj(r,0)
s.dy.push(null)
o.a3(p.e)}}catch(q){u=H.aL(q)
t=H.kf(q)
P.ki("Error: "+H.d(u))
P.ki("Stack: "+H.d(t))
throw H.c(u)}}}
E.ii.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i1()}}}
Z.dT.prototype={}
Z.cT.prototype={
R:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aL(s)
t=P.n('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.bJ.prototype={}
Z.b6.prototype={
ao:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
R:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].R(a)},
aa:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
a3:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.e(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.l],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aa(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.p(p,", ")+"\nAttrs:   "+C.a.p(r,", ")}}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.ci(this.c))+"'")+"]"}}
Z.aZ.prototype={
gcz:function(a){var u=this.a,t=(u&$.a4().a)!==0?3:0
if((u&$.b3().a)!==0)t+=3
if((u&$.b2().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=2
if((u&$.b4().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bU().a)!==0)++t
return(u&$.b1().a)!==0?t+4:t},
hk:function(a){var u,t=$.a4(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b1()
if((s&t.a)!==0)if(u===a)return t
return $.lx()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aZ))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.l]),t=this.a
if((t&$.a4().a)!==0)u.push("Pos")
if((t&$.b3().a)!==0)u.push("Norm")
if((t&$.b2().a)!==0)u.push("Binm")
if((t&$.bo().a)!==0)u.push("Txt2D")
if((t&$.b4().a)!==0)u.push("TxtCube")
if((t&$.cL().a)!==0)u.push("Clr3")
if((t&$.cM().a)!==0)u.push("Clr4")
if((t&$.bU().a)!==0)u.push("Weight")
if((t&$.b1().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.p(u,"|")}}
D.f7.prototype={}
D.ba.prototype={
k:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.S]}]):u).push(b)},
O:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.a
u=(s&&C.a).O(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.w(s,b)
if(s===!0){s=t.b
u=(s&&C.a).O(s,b)||u}return u},
u:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.J(P.k_(u,!0,{func:1,ret:-1,args:[D.S]}),new D.ft(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.S]}])
C.a.J(u,new D.fu(q))}return!0},
c1:function(){return this.u(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.u(u)}}}}
D.ft.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fu.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.S.prototype={}
D.bd.prototype={}
D.be.prototype={}
D.u.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cU.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.dd.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fM.prototype={
hU:function(a){this.c=a.b
this.d.k(0,a.a)
return!1},
hQ:function(a){this.c=a.b
this.d.O(0,a.a)
return!1}}
X.dg.prototype={}
X.fS.prototype={
b0:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=new V.a2(o.a+n*m,o.b+u*t)
t=q.a.gaS()
r=new X.ag(a,V.aT(),q.x,t,s)
r.b=!0
q.z=new P.ae(p,!1)
q.x=s
return r},
ck:function(a,b){this.r=a.a
return!1},
b5:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dV()
if(typeof u!=="number")return u.an()
this.r=(u&~t)>>>0
return!1},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.b0(a,b))
return!0},
hV:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaS()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.cc(new V.E(s*r,q*p),u,t)
t.b=!0
n.u(t)
return!0},
fs:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dg(c,r.a.gaS(),b)
s.b=!0
t.u(s)
r.y=new P.ae(u,!1)
r.x=V.aT()}}
X.ab.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ab))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.ag.prototype={}
X.hh.prototype={
bJ:function(a,b,c){var u=this,t=new P.ae(Date.now(),!1),s=u.a.gaS(),r=new X.ag(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
ck:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.u(this.bJ(a,b,!0))
return!0},
b5:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dV()
if(typeof t!=="number")return t.an()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.u(u.bJ(a,b,!0))
return!0},
b4:function(a,b){var u=this.d
if(u==null)return!1
u.u(this.bJ(a,b,!1))
return!0},
hW:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaS()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.cc(new V.E(t*s,r*q),u,b)
u.b=!0
o.u(u)
return!0},
gc0:function(){var u=this.b
return u==null?this.b=D.A():u},
gbt:function(){var u=this.c
return u==null?this.c=D.A():u},
gaX:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.cc.prototype={}
X.hx.prototype={}
X.co.prototype={}
X.il.prototype={
b0:function(a,b){var u=this,t=new P.ae(Date.now(),!1),s=a.length>0?a[0]:V.aT(),r=u.a.gaS(),q=new X.co(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hT:function(a){var u=this.b
if(u==null)return!1
u.u(this.b0(a,!0))
return!0},
hR:function(a){var u=this.c
if(u==null)return!1
u.u(this.b0(a,!0))
return!0},
hS:function(a){var u=this.d
if(u==null)return!1
u.u(this.b0(a,!1))
return!0},
gcA:function(a){var u=this.b
return u==null?this.b=D.A():u},
gdi:function(a){var u=this.c
return u==null?this.c=D.A():u},
gaX:function(){var u=this.d
return u==null?this.d=D.A():u}}
X.dO.prototype={
gaS:function(){var u=this.a,t=C.f.gdf(u).c
t.toString
u=C.f.gdf(u).d
u.toString
return V.du(0,0,t,u)},
cR:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.ab(t,a.altKey,a.shiftKey))},
aP:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
bQ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
aB:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.a2(s-q,r-u)},
b1:function(a){return new V.E(a.movementX,a.movementY)},
bN:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a2])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.b.V(r.pageX)
C.b.V(r.pageY)
p=o.left
C.b.V(r.pageX)
n.push(new V.a2(q-p,C.b.V(r.pageY)-o.top))}return n},
az:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.ab(t,a.altKey,a.shiftKey))},
bK:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fl:function(a){this.f=!0},
f5:function(a){this.f=!1},
fb:function(a){if(this.f&&this.bK(a))a.preventDefault()},
fp:function(a){var u
if(!this.f)return
u=this.cR(a)
this.b.hU(u)},
fn:function(a){var u
if(!this.f)return
u=this.cR(a)
this.b.hQ(u)},
fu:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aP(a)
if(r.x){u=r.az(a)
t=r.b1(a)
if(r.d.ck(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.az(a)
s=r.aB(a)
if(r.c.ck(u,s))a.preventDefault()},
fA:function(a){var u,t,s,r=this
r.aP(a)
u=r.az(a)
if(r.x){t=r.b1(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aB(a)
if(r.c.b5(u,s))a.preventDefault()},
ff:function(a){var u,t,s,r=this
if(!r.bK(a)){r.aP(a)
u=r.az(a)
if(r.x){t=r.b1(a)
if(r.d.b5(u,t))a.preventDefault()
return}if(r.r)return
s=r.aB(a)
if(r.c.b5(u,s))a.preventDefault()}},
fw:function(a){var u,t,s,r=this
r.aP(a)
u=r.az(a)
if(r.x){t=r.b1(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.aB(a)
if(r.c.b4(u,s))a.preventDefault()},
fd:function(a){var u,t,s,r=this
if(!r.bK(a)){r.aP(a)
u=r.az(a)
if(r.x){t=r.b1(a)
if(r.d.b4(u,t))a.preventDefault()
return}if(r.r)return
s=r.aB(a)
if(r.c.b4(u,s))a.preventDefault()}},
fC:function(a){var u,t,s=this
s.aP(a)
u=new V.E((a&&C.B).ghv(a),C.B.ghw(a)).t(0,s.Q)
if(s.x){if(s.d.hV(u))a.preventDefault()
return}if(s.r)return
t=s.aB(a)
if(s.c.hW(u,t))a.preventDefault()},
fE:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.az(s.y)
t=s.aB(s.y)
s.d.fs(u,t,r)}},
fU:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bQ(a)
u=t.bN(a)
if(t.e.hT(u))a.preventDefault()},
fQ:function(a){var u
this.bQ(a)
u=this.bN(a)
if(this.e.hR(u))a.preventDefault()},
fS:function(a){var u
this.bQ(a)
u=this.bN(a)
if(this.e.hS(u))a.preventDefault()}}
D.f0.prototype={$ia5:1}
D.bv.prototype={
ay:function(a){var u=this.r
if(u!=null)u.u(a)},
ee:function(){return this.ay(null)},
$ia5:1}
D.a5.prototype={}
D.de.prototype={
ay:function(a){var u=this.y
if(u!=null)u.u(a)},
cX:function(a){var u=this.z
if(u!=null)u.u(a)},
fq:function(){return this.cX(null)},
fG:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eB(s))return!1}return!0},
f_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcW(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bv)this.f.push(q)
p=q.r
if(p==null){p=new D.ba()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bd()
u.b=!0
this.ay(u)},
fK:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gcW();u.q();){s=u.gG(u)
C.a.O(this.e,s)
s.gm().O(0,t)}u=new D.be()
u.b=!0
this.ay(u)},
eB:function(a){var u=C.a.w(this.f,a)
return u},
$ai:function(){return[D.a5]},
$aas:function(){return[D.a5]}}
D.hw.prototype={$ia5:1}
D.hW.prototype={$ia5:1}
V.L.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.Y.prototype={
ic:function(){var u=this
return new V.Y(Math.floor(u.a*255)/255,Math.floor(u.b*255)/255,Math.floor(u.c*255)/255,Math.floor(u.d*255)/255)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.fs.prototype={}
V.dk.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.y().a
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bQ(H.b([q.a,q.d,q.r],p),3,0),n=V.bQ(H.b([q.b,q.e,q.x],p),3,0),m=V.bQ(H.b([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.e(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.e(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.e(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.e(o,1)
r=" "+o[1]+", "
if(1>=t)return H.e(n,1)
r=r+n[1]+", "
if(1>=s)return H.e(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.e(o,2)
p=" "+o[2]+", "
if(2>=t)return H.e(n,2)
p=p+n[2]+", "
if(2>=s)return H.e(m,2)
return r+(p+m[2]+"]")}}
V.af.prototype={
a0:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
ca:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.y().a)return V.bi()
u=1/b1
t=-n
s=-a0
return V.ax((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
t:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ax(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bs:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.C(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b8:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.V(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.y().a
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
E:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bQ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bQ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bQ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bQ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.e(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.e(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.e(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.e(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.e(n,1)
q=q+n[1]+", "
if(1>=t)return H.e(m,1)
q=q+m[1]+", "
if(1>=s)return H.e(l,1)
q=q+l[1]+", "
if(1>=r)return H.e(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.e(n,2)
u=u+n[2]+", "
if(2>=t)return H.e(m,2)
u=u+m[2]+", "
if(2>=s)return H.e(l,2)
u=u+l[2]+", "
if(2>=r)return H.e(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.e(n,3)
q=q+n[3]+", "
if(3>=t)return H.e(m,3)
q=q+m[3]+", "
if(3>=s)return H.e(l,3)
q=q+l[3]+", "
if(3>=r)return H.e(k,3)
return u+(q+k[3]+"]")},
L:function(){return this.E("")}}
V.a2.prototype={
F:function(a,b){return new V.a2(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.V.prototype={
F:function(a,b){return new V.V(this.a-b.a,this.b-b.b,this.c-b.c)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
V.aU.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.dt.prototype={
gae:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dt))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+", "+V.D(u.d,3,0)+"]"}}
V.E.prototype={
cc:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
if(typeof b!=="number")return H.v(b)
u=this.b
if(typeof u!=="number")return u.t()
return new V.E(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.kV
return u==null?$.kV=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.E(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.y()
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
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+"]"}}
V.C.prototype={
cc:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cd:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
b3:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.C(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.y().a)return V.dS()
return new V.C(this.a/b,this.b/b,this.c/b)},
dB:function(){var u=$.y().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.D(this.a,3,0)+", "+V.D(this.b,3,0)+", "+V.D(this.c,3,0)+"]"}}
U.fa.prototype={
bD:function(a){var u=V.jK(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
I:function(a){var u=this.y
if(u!=null)u.u(a)},
scp:function(a,b){},
scf:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bD(u)}s=new D.u("maximumLocation",s,t.b)
s.b=!0
t.I(s)}},
sci:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bD(u)}s=new D.u("minimumLocation",s,t.c)
s.b=!0
t.I(s)}},
sad:function(a,b){var u,t=this
b=t.bD(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.u("location",u,b)
u.b=!0
t.I(u)}},
scg:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a)
r.b=!0
s.I(r)}},
sS:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.u("velocity",t,a)
t.b=!0
u.I(t)}},
sbX:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.u("dampening",u,a)
u.b=!0
this.I(u)}},
a4:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sad(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sS(u)}}}
U.bZ.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
sT:function(a,b){var u,t,s,r=this
if(!J.G(r.a,b)){u=r.a
r.a=b
t=new D.u("matrix",u,b)
t.b=!0
s=r.b
if(s!=null)s.u(t)}},
ax:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bZ))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.E("          ")}}
U.c3.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
I:function(a){var u=this.e
if(u!=null)u.u(a)},
a8:function(){return this.I(null)},
eg:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaO(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bd()
u.b=!0
this.I(u)},
fI:function(a,b){var u,t
for(u=b.gN(b),t=this.gaO();u.q();)u.gG(u).gm().O(0,t)
u=new D.be()
u.b=!0
this.I(u)},
ax:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a6()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a0(r,r.length),u=null;r.q();){q=r.d
if(q!=null){t=q.ax(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.bi():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c3))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.e(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.e(r,t)
if(!J.G(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ac]},
$aas:function(){return[U.ac]},
$iac:1}
U.ac.prototype={}
U.ck.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
I:function(a){var u=this.y
if(u!=null)u.u(a)},
sdU:function(a){var u
a=V.jK(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.u("yaw",u,a)
u.b=!0
this.I(u)}},
sdM:function(a,b){var u
b=V.jK(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.u("pitch",u,b)
u.b=!0
this.I(u)}},
sdP:function(a){var u
a=V.jK(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.u("roll",u,a)
u.b=!0
this.I(u)}},
sbZ:function(a){var u=this.e
if(!(Math.abs(u-a)<$.y().a)){this.e=a
u=new D.u("deltaPitch",u,a)
u.b=!0
this.I(u)}},
sc_:function(a){var u=this.f
if(!(Math.abs(u-a)<$.y().a)){this.f=a
u=new D.u("deltaRoll",u,a)
u.b=!0
this.I(u)}},
ax:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdU(u.a+u.d*b.y)
u.sdM(0,u.b+u.e*b.y)
u.sdP(u.c+u.f*b.y)
u.x=V.kG(u.c).t(0,V.kF(u.b)).t(0,V.kE(u.a))
t=u.y
if(t!=null)t.aw(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.ck))return!1
u=r.a
t=b.a
s=$.y().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.D(u.a,3,0)+", "+V.D(u.b,3,0)+", "+V.D(u.c,3,0)+"], ["+V.D(u.d,3,0)+", "+V.D(u.e,3,0)+", "+V.D(u.f,3,0)+"]"}}
U.dP.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.A():u},
I:function(a){var u=this.cy
if(u!=null)u.u(a)},
a8:function(){return this.I(null)},
aC:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gc0().k(0,u.gbx())
u.a.c.gaX().k(0,u.gbz())
u.a.c.gbt().k(0,u.gbB())
return!0},
by:function(a){var u=this
if(!J.G(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bA:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iag")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.E(t.a,t.b).t(0,2).v(0,u.gae())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sS(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
r=new V.E(s.a,s.b).t(0,2).v(0,u.gae())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sad(0,-q*p+o)
n.b.sS(0)
t=t.F(0,a.z)
n.Q=new V.E(t.a,t.b).t(0,2).v(0,u.gae())}n.a8()},
bC:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sS(t*10*s)
r.a8()}},
ax:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.a6()
if(s<r){t.ch=r
u=b.y
t.b.a4(0,u)
t.cx=V.kG(t.b.d)}return t.cx},
$iac:1}
U.dQ.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.A():u},
I:function(a){var u=this.fx
if(u!=null)u.u(a)},
a8:function(){return this.I(null)},
aC:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gc0().k(0,s.gbx())
s.a.c.gaX().k(0,s.gbz())
s.a.c.gbt().k(0,s.gbB())
u=s.a.d
t=u.f
u=t==null?u.f=D.A():t
u.k(0,s.geM())
u=s.a.d
t=u.d
u=t==null?u.d=D.A():t
u.k(0,s.geO())
u=s.a.e
u.gcA(u).k(0,s.gel())
s.a.e.gaX().k(0,s.gej())
u=s.a.e
u.gdi(u).k(0,s.geh())
return!0},
as:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.E(u,t)},
by:function(a){var u=this
H.h(a,"$iag")
if(!J.G(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bA:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iag")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.as(new V.E(t.a,t.b).t(0,2).v(0,u.gae()))
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
r=n.as(new V.E(s.a,s.b).t(0,2).v(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sad(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.as(new V.E(t.a,t.b).t(0,2).v(0,u.gae()))}n.a8()},
bC:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
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
r.a8()}},
eN:function(a){var u=this
if(H.h(a,"$idg").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eP:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$iag")
if(!J.G(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
r=n.as(new V.E(s.a,s.b).t(0,2).v(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sad(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.as(new V.E(t.a,t.b).t(0,2).v(0,u.gae()))
n.a8()},
em:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
ek:function(a){var u,t,s,r,q,p,o,n=this
H.h(a,"$ico")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
u=n.as(new V.E(t.a,t.b).t(0,2).v(0,u.gae()))
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
r=n.as(new V.E(s.a,s.b).t(0,2).v(0,u.gae()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sad(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sad(0,-p*q+s)
n.b.sS(0)
n.c.sS(0)
t=t.F(0,a.z)
n.dx=n.as(new V.E(t.a,t.b).t(0,2).v(0,u.gae()))}n.a8()},
ei:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
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
r.a8()}},
ax:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.a6()
if(s<r){t.dy=r
u=b.y
t.c.a4(0,u)
t.b.a4(0,u)
t.fr=V.kE(t.b.d).t(0,V.kF(t.c.d))}return t.fr},
$iac:1}
U.dR.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
I:function(a){var u=this.r
if(u!=null)u.u(a)},
aC:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.A():t
t=r.geX()
u.k(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.A():s).k(0,t)
return!0},
eY:function(a){var u,t,s,r,q=this
if(!J.G(q.b,q.a.b.c))return
H.h(a,"$icc")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r)
u.b=!0
q.I(u)}},
ax:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.m5(u,u,u)}return t.f},
$iac:1}
M.cZ.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
U:function(a){var u=this.r
if(u!=null)u.u(a)},
b_:function(){return this.U(null)},
fM:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bd()
u.b=!0
this.U(u)},
fO:function(a,b){var u,t
for(u=b.gN(b),t=this.gX();u.q();)u.gG(u).gm().O(0,t)
u=new D.be()
u.b=!0
this.U(u)},
a3:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a0(u,u.length);u.q();){t=u.d
if(t!=null)t.a3(a)}s.f=!1},
$ai:function(){return[M.am]},
$aas:function(){return[M.am]},
$iam:1}
M.d_.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.A():u},
U:function(a){var u=this.r
if(u!=null)u.u(a)},
b_:function(){return this.U(null)},
saR:function(a){var u,t,s=this
if(a==null)a=new X.fE()
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gX())
t=s.b
s.b=a
a.gm().k(0,s.gX())
u=new D.u("camera",t,s.b)
u.b=!0
s.U(u)}},
saG:function(a,b){var u,t,s=this
if(b==null)b=X.jU(!0,null)
u=s.c
if(u!==b){if(u!=null)u.gm().O(0,s.gX())
t=s.c
s.c=b
b.gm().k(0,s.gX())
u=new D.u("target",t,s.c)
u.b=!0
s.U(u)}},
saH:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().O(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gm().k(0,t.gX())
s=new D.u("technique",u,t.d)
s.b=!0
t.U(s)}},
a3:function(a){var u,t=this
a.cm(t.d)
t.c.R(a)
t.b.R(a)
u=t.d
if(u!=null)u.a4(0,a)
t.e.a4(0,a)
t.e.a3(a)
t.b.aa(a)
t.c.toString
a.cl()},
$iam:1}
M.d4.prototype={
U:function(a){var u=this.y
if(u!=null)u.u(a)},
b_:function(){return this.U(null)},
f7:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ba()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bd()
u.b=!0
this.U(u)},
f9:function(a,b){var u,t
for(u=b.gN(b),t=this.gX();u.q();)u.gG(u).gm().O(0,t)
u=new D.be()
u.b=!0
this.U(u)},
saR:function(a){var u,t,s=this
if(a==null)a=X.kJ(null)
u=s.b
if(u!==a){if(u!=null)u.gm().O(0,s.gX())
t=s.b
s.b=a
a.gm().k(0,s.gX())
u=new D.u("camera",t,s.b)
u.b=!0
s.U(u)}},
saG:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().O(0,t.gX())
u=t.c
t.c=b
b.gm().k(0,t.gX())
s=new D.u("target",u,t.c)
s.b=!0
t.U(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.A():u},
a3:function(a){var u,t=this
a.cm(t.d)
t.c.R(a)
t.b.R(a)
for(u=t.e.a,u=new J.a0(u,u.length);u.q();)u.d.a4(0,a)
for(u=t.e.a,u=new J.a0(u,u.length);u.q();)u.d.a3(a)
t.b.toString
a.cy.aF()
a.db.aF()
t.c.aa(a)
a.cl()},
$iam:1}
M.am.prototype={}
A.cQ.prototype={}
A.eV.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
bj:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gaq:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.fW.prototype={
e7:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.aV("")
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
A.n2(c0,u)
A.n4(c0,u)
A.n3(c0,u)
A.n6(c0,u)
A.n7(c0,u)
A.n5(c0,u)
A.n8(c0,u)
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
b5.bm(0,s.charCodeAt(0)==0?s:s,A.n1(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.h(b5.y.H(0,"invViewMat"),"$iW")
if(t)b5.dy=H.h(b5.y.H(0,"objMat"),"$iW")
if(r)b5.fr=H.h(b5.y.H(0,"viewObjMat"),"$iW")
b5.fy=H.h(b5.y.H(0,"projViewObjMat"),"$iW")
if(c0.go)b5.fx=H.h(b5.y.H(0,"viewMat"),"$iW")
if(c0.x1)b5.k1=H.h(b5.y.H(0,"txt2DMat"),"$icr")
if(c0.x2)b5.k2=H.h(b5.y.H(0,"txtCubeMat"),"$iW")
if(c0.y1)b5.k3=H.h(b5.y.H(0,"colorMat"),"$iW")
b5.r1=H.b([],[A.W])
t=c0.bk
if(t>0){b5.k4=b5.y.H(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.p(P.n(b7+q+b8))
s.push(H.h(m,"$iW"))}}t=c0.a
if(t.a)b5.r2=H.h(b5.y.H(0,"emissionClr"),"$iF")
if(t.c)b5.ry=H.h(b5.y.H(0,"emissionTxt"),"$iX")
t=c0.b
if(t.a)b5.x1=H.h(b5.y.H(0,"ambientClr"),"$iF")
if(t.c)b5.y1=H.h(b5.y.H(0,"ambientTxt"),"$iX")
t=c0.c
if(t.a)b5.y2=H.h(b5.y.H(0,"diffuseClr"),"$iF")
if(t.c)b5.aE=H.h(b5.y.H(0,"diffuseTxt"),"$iX")
t=c0.d
if(t.a)b5.bl=H.h(b5.y.H(0,"invDiffuseClr"),"$iF")
if(t.c)b5.dj=H.h(b5.y.H(0,"invDiffuseTxt"),"$iX")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dm=H.h(b5.y.H(0,"shininess"),"$iP")
if(s)b5.dk=H.h(b5.y.H(0,"specularClr"),"$iF")
if(t.c)b5.dl=H.h(b5.y.H(0,"specularTxt"),"$iX")}if(c0.f.c)b5.dn=H.h(b5.y.H(0,"bumpTxt"),"$iX")
if(c0.db){b5.dq=H.h(b5.y.H(0,"envSampler"),"$iX")
t=c0.r
if(t.a)b5.dr=H.h(b5.y.H(0,"reflectClr"),"$iF")
if(t.c)b5.ds=H.h(b5.y.H(0,"reflectTxt"),"$iX")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dt=H.h(b5.y.H(0,"refraction"),"$iP")
if(s)b5.du=H.h(b5.y.H(0,"refractClr"),"$iF")
if(t.c)b5.dv=H.h(b5.y.H(0,"refractTxt"),"$iX")}}t=c0.y
if(t.a)b5.dw=H.h(b5.y.H(0,"alpha"),"$iP")
if(t.c)b5.dz=H.h(b5.y.H(0,"alphaTxt"),"$iX")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.c2=new H.J([r,A.ap])
b5.c3=new H.J([r,[P.r,A.cp]])
for(r=[A.cp],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.p(P.n(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.n(b7+o+b8))
H.h(f,"$iF")
if(typeof j!=="number")return j.an()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.n(b7+o+b8))
H.h(e,"$iP")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.n(b7+o+b8))
H.h(d,"$iP")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.n(b7+o+b8))
H.h(c,"$iP")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cp(m,g,f,a0,a,b))}b5.c3.l(0,j,h)
q=b5.c2
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
q.l(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.c4=new H.J([r,A.ap])
b5.c5=new H.J([r,[P.r,A.cq]])
for(r=[A.cq],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.an()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.p(P.n(b7+a1+b8))
H.h(m,"$iF")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.p(P.n(b7+a1+b8))
H.h(g,"$iF")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.p(P.n(b7+a1+b8))
H.h(f,"$iF")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.p(P.n(b7+a1+b8))
H.h(m,"$iF")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.p(P.n(b7+a1+b8))
H.h(g,"$iF")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.p(P.n(b7+o+b8))
H.h(f,"$iaY")
a5=f}else a5=b6
h.push(new A.cq(a4,a3,a2,m,g,a5))}b5.c5.l(0,j,h)
q=b5.c4
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
q.l(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.c6=new H.J([r,A.ap])
b5.c7=new H.J([r,[P.r,A.cs]])
for(r=[A.cs],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.p(P.n(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.p(P.n(b7+o+b8))
H.h(f,"$iF")
if(typeof j!=="number")return j.an()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.p(P.n(b7+o+b8))
H.h(e,"$icr")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.p(P.n(b7+o+b8))
H.h(e,"$iX")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.p(P.n(b7+o+b8))
H.h(e,"$iX")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.p(P.n(b7+o+b8))
H.h(d,"$ibl")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.p(P.n(b7+o+b8))
H.h(e,"$iP")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.p(P.n(b7+o+b8))
H.h(d,"$iP")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.p(P.n(b7+o+b8))
H.h(c,"$iP")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cs(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.c7.l(0,j,h)
q=b5.c6
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
q.l(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.c8=new H.J([r,A.ap])
b5.c9=new H.J([r,[P.r,A.ct]])
for(r=[A.ct],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
H.h(m,"$iF")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.p(P.n(b7+o+b8))
H.h(g,"$iF")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.p(P.n(b7+o+b8))
H.h(f,"$iF")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.p(P.n(b7+o+b8))
H.h(e,"$iF")
if(typeof j!=="number")return j.an()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.p(P.n(b7+o+b8))
H.h(d,"$iF")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.p(P.n(b7+o+b8))
H.h(c,"$iF")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.p(P.n(b7+o+b8))
H.h(a9,"$iP")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.p(P.n(b7+o+b8))
H.h(b0,"$iP")
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
if(d==null)H.p(P.n(b7+a1+b8))
H.h(d,"$ibl")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.p(P.n(b7+a1+b8))
H.h(d,"$iP")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.p(P.n(b7+a1+b8))
H.h(c,"$iP")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.p(P.n(b7+a1+b8))
H.h(d,"$iP")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.p(P.n(b7+a1+b8))
H.h(c,"$iP")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.p(P.n(b7+a1+b8))
H.h(a9,"$iP")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.p(P.n(b7+a1+b8))
H.h(d,"$iaY")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.p(P.n(b7+o+b8))
H.h(d,"$iaY")
a7=d}else a7=b6
h.push(new A.ct(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.c9.l(0,j,h)
q=b5.c8
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.p(P.n(b7+o+b8))
q.l(0,j,m)}}}},
ag:function(a,b){if(b!=null&&b.d>=6)a.cv(b)}}
A.cR.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.d1.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.dr.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.dA.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fZ.prototype={
i:function(a){return this.aE}}
A.cp.prototype={}
A.cq.prototype={}
A.cs.prototype={}
A.ct.prototype={}
A.dx.prototype={
ba:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bm:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cS(b,35633)
r.f=r.cS(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.p(P.n("Failed to link shader: "+H.d(s)))}r.h3()
r.h5()},
R:function(a){a.a.useProgram(this.r)
this.x.hB()},
cS:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.n("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
h3:function(){var u,t,s,r=this,q=H.b([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cQ(p,t.name,s))}r.x=new A.eV(q)},
h5:function(){var u,t,s,r=this,q=H.b([],[A.dM]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hu(t.type,t.size,t.name,s))}r.y=new A.iw(q)},
aM:function(a,b,c){var u=this.a
if(a===1)return new A.ap(u,b,c)
else return A.k5(u,this.r,b,a,c)},
eD:function(a,b,c){var u=this.a
if(a===1)return new A.aY(u,b,c)
else return A.k5(u,this.r,b,a,c)},
eE:function(a,b,c){var u=this.a
if(a===1)return new A.X(u,b,c)
else return A.k5(u,this.r,b,a,c)},
bf:function(a,b){return new P.e2(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
hu:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aM(b,c,d)
case 5121:return u.aM(b,c,d)
case 5122:return u.aM(b,c,d)
case 5123:return u.aM(b,c,d)
case 5124:return u.aM(b,c,d)
case 5125:return u.aM(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.aX(u.a,c,d)
case 35665:return new A.F(u.a,c,d)
case 35666:return new A.bl(u.a,c,d)
case 35667:return new A.it(u.a,c,d)
case 35668:return new A.iu(u.a,c,d)
case 35669:return new A.iv(u.a,c,d)
case 35674:return new A.ix(u.a,c,d)
case 35675:return new A.cr(u.a,c,d)
case 35676:return new A.W(u.a,c,d)
case 35678:return u.eD(b,c,d)
case 35680:return u.eE(b,c,d)
case 35670:throw H.c(u.bf("BOOL",c))
case 35671:throw H.c(u.bf("BOOL_VEC2",c))
case 35672:throw H.c(u.bf("BOOL_VEC3",c))
case 35673:throw H.c(u.bf("BOOL_VEC4",c))
default:throw H.c(P.n("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.bu.prototype={
i:function(a){return this.b}}
A.hR.prototype={}
A.hT.prototype={}
A.id.prototype={
eb:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.bm(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mr(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.h(p.y.H(0,"txtCount"),"$iap")
p.ch=H.h(p.y.H(0,"backClr"),"$ibl")
p.cx=H.b([],[A.aY])
p.cy=H.b([],[A.W])
u=[A.aX]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.ap])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iaY"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iW"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iaX"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iaX"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iaX"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iaX"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.p(P.n(o+r+n))
u.push(H.h(q,"$iap"))}}}
A.dM.prototype={}
A.iw.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
H:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.n("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.ap.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.it.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.iu.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.iv.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.is.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.P.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.aX.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.F.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.bl.prototype={
ct:function(a){var u=a.a,t=a.b,s=a.c,r=a.d
return this.a.uniform4f(this.d,u,t,s,r)},
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.ix.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.cr.prototype={
ab:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.W.prototype={
ab:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.aY.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.X.prototype={
cv:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.jq.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cd(s.b,b).cd(s.d.cd(s.c,b),c)
s=new V.V(r.a,r.b,r.c)
if(!J.G(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a2()}a.sb6(r.v(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
u=new V.aU(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.G(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a2()}}}
F.bb.prototype={
ex:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dS()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dB())return
return s.v(0,Math.sqrt(s.A(s)))},
ez:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.A(r)))
r=t.F(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.b3(r.v(0,Math.sqrt(r.A(r))))
return r.v(0,Math.sqrt(r.A(r)))},
bT:function(){var u,t=this
if(t.d!=null)return!0
u=t.ex()
if(u==null){u=t.ez()
if(u==null)return!1}t.d=u
t.a.a.a2()
return!0},
ew:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dS()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dB())return
return s.v(0,Math.sqrt(s.A(s)))},
ey:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.F(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.V(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.A(l)))
l=o.b3(q)
l=l.v(0,Math.sqrt(l.A(l))).b3(o)
q=l.v(0,Math.sqrt(l.A(l)))}return q},
bR:function(){var u,t=this
if(t.e!=null)return!0
u=t.ew()
if(u==null){u=t.ey()
if(u==null)return!1}t.e=u
t.a.a.a2()
return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.d.ak(J.aa(s.e),0)+", "+C.d.ak(J.aa(t.b.e),0)+", "+C.d.ak(J.aa(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.E("")}}
F.c7.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.d.ak(J.aa(u.e),0)+", "+C.d.ak(J.aa(this.b.e),0)},
L:function(){return this.E("")}}
F.cg.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.d.ak(J.aa(u.e),0)},
L:function(){return this.E("")}}
F.hK.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
hH:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.a_()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.k(0,r.hr())}h.a.a_()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
n=p[o]
h.b.a.a.k(0,n)
o=new F.cg()
if(n.a==null)H.p(P.n("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.u(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.c.a
p.a.k(0,l)
p.a.k(0,k)
F.m_(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.a_()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.e(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.a_()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.e(p,o)
i=p[o]
o=h.d.a
o.a.k(0,l)
o.a.k(0,k)
o.a.k(0,i)
F.c2(l,k,i)}g=h.e
if(g!=null)g.aw(0)},
aD:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aD()||!1
if(!t.a.aD())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
bi:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.a4()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b3().a)!==0)++s
if((t&$.b2().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.b4().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.cM().a)!==0)++s
if((t&$.bU().a)!==0)++s
if((t&$.b1().a)!==0)++s
r=a4.gcz(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cT])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hk(m)
k=l.gcz(l)
if(m>=t)return H.e(o,m)
o[m]=new Z.cT(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.e(i,j)
h=i[j].hG(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.e(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bL(p)),35044)
u.bindBuffer(a1,null)
c=new Z.b6(new Z.dT(a1,d),o,a4)
c.b=H.b([],[Z.bx])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.a_()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bx(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.a_()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.e(t,m)
t=t[m].b
t.a.a.a_()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bx(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.a_()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.e(t,m)
t=t[m].b
t.a.a.a_()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.e(t,m)
t=t[m].c
t.a.a.a_()
b.push(t.e)}a=Z.k8(u,34963,b)
c.b.push(new Z.bx(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.l])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.E(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.E(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.E(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.E(t))}return C.a.p(s,"\n")},
a2:function(){var u=this.e
if(u!=null)u.u(null)}}
F.hL.prototype={
hh:function(a){var u,t,s,r,q=H.b([],[F.bb]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.k(0,p)
u.a.k(0,s)
u.a.k(0,r)
q.push(F.c2(p,s,r))}return q},
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bb])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.e(c,s)
m=c[s];++s
if(s>=n)return H.e(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.e(c,k)
j=c[k]
if(t<0||t>=n)return H.e(c,t)
i=c[t]
n=u.a
if(p){n.k(0,m)
u.a.k(0,l)
u.a.k(0,j)
h.push(F.c2(m,l,j))
u.a.k(0,m)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.c2(m,j,i))}else{n.k(0,l)
u.a.k(0,j)
u.a.k(0,i)
h.push(F.c2(l,j,i))
u.a.k(0,l)
u.a.k(0,i)
u.a.k(0,m)
h.push(F.c2(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
aD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bT())s=!1
return s},
bS:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bR())s=!1
return s},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(a))
return C.a.p(r,"\n")},
L:function(){return this.E("")}}
F.hM.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var u,t,s=H.b([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.e(t,u)
s.push(t[u].E(a+(""+u+". ")))}return C.a.p(s,"\n")},
L:function(){return this.E("")}}
F.hN.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.L()},
E:function(a){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(a))
return C.a.p(r,"\n")},
L:function(){return this.E("")}}
F.bI.prototype={
bW:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.iI(u.cx,r,o,t,s,q,p,a,n)},
hr:function(){return this.bW(null)},
sb6:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a2()}},
hG:function(a){var u,t,s=this
if(a.n(0,$.a4())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b3())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b2())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.bo())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b4())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cL())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cM())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bU()))return H.b([s.ch],[P.K])
else if(a.n(0,$.b1())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
bT:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dS()
t.d.J(0,new F.iQ(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
bR:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dS()
t.d.J(0,new F.iP(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a2()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
E:function(a){var u,t,s=this,r="-",q=H.b([],[P.l])
q.push(C.d.ak(J.aa(s.e),0))
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
q.push(V.D(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.a.p(q,", ")
return a+"{"+t+"}"},
L:function(){return this.E("")}}
F.iQ.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iP.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iJ.prototype={
a_:function(){},
k:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.n("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a2()
return!0},
bg:function(a,b,c,d,e,f){var u=F.iI(a,null,b,c,null,d,e,f,0)
this.k(0,u)
return u},
gj:function(a){return this.c.length},
aD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bT()
return!0},
bS:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bR()
return!0},
hn:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.u(null)}}}}return!0},
i:function(a){return this.L()},
E:function(a){var u,t,s,r
this.a_()
u=H.b([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].E(a))
return C.a.p(u,"\n")},
L:function(){return this.E("")}}
F.iK.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
J:function(a,b){var u=this
C.a.J(u.b,b)
C.a.J(u.c,new F.iL(u,b))
C.a.J(u.d,new F.iM(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(""))
return C.a.p(r,"\n")}}
F.iL.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.iM.prototype={
$1:function(a){var u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)}}
F.iN.prototype={
gj:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(""))
return C.a.p(r,"\n")}}
F.iO.prototype={
gj:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].E(""))
return C.a.p(r,"\n")}}
O.dj.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.A():u},
C:function(a){var u=this.fr
if(u!=null)u.u(a)},
ac:function(){return this.C(null)},
cZ:function(a){this.a=null
this.C(a)},
h_:function(){return this.cZ(null)},
f1:function(a,b){var u=new D.bd()
u.b=!0
this.C(u)},
f3:function(a,b){var u=new D.be()
u.b=!0
this.C(u)},
cQ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.J(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gav()
o=u.h(0,q.gav())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cR])
u.J(0,new O.h2(g,n))
C.a.aZ(n,new O.h3())
m=new H.J(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],[A.d1])
m.J(0,new O.h4(g,l))
C.a.aZ(l,new O.h5())
k=new H.J(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gav()
o=k.h(0,q.gav())
k.l(0,p,o==null?1:o)}j=H.b([],[A.dr])
k.J(0,new O.h6(g,j))
C.a.aZ(j,new O.h7())
i=new H.J(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gav()
p=i.h(0,q.gav())
i.l(0,s,p==null?1:p)}h=H.b([],[A.dA])
i.J(0,new O.h8(g,h))
C.a.aZ(h,new O.h9())
f=C.c.Z(g.e.a.length+3,4)
g.dy.e
return A.m4(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
af:function(a,b){if(b!=null)if(!C.a.w(a,b)){b.a=a.length
a.push(b)}},
a4:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a0(u,u.length);u.q();){t=u.d
t.toString
s=$.iH
if(s==null)s=$.iH=new V.C(0,0,1)
t.a=s
r=$.iG
t.d=r==null?$.iG=new V.C(0,1,0):r
r=$.iF
t.e=r==null?$.iF=new V.C(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bs(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bs(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bs(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
bq:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cQ()
u=b2.fr.h(0,b1.aE)
if(u==null){u=A.m3(b1,b2.a)
b2.bh(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bl
b1=b3.e
if(!(b1 instanceof Z.b6))b1=b3.e=null
if(b1==null||!b1.d.n(0,s)){b1=t.k4
if(b1)b3.d.aD()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bS()
q.a.bS()
q=q.e
if(q!=null)q.aw(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hn()
p=p.e
if(p!=null)p.aw(0)}n=b3.d.bi(new Z.bJ(b2.a),s)
n.ao($.a4()).e=b0.a.Q.c
if(b1)n.ao($.b3()).e=b0.a.cx.c
if(r)n.ao($.b2()).e=b0.a.ch.c
if(t.r2)n.ao($.bo()).e=b0.a.cy.c
if(q)n.ao($.b4()).e=b0.a.db.c
if(t.ry)n.ao($.b1()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.cn])
b0.a.R(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gT(r)
b1=b1.dy
b1.toString
b1.ab(r.a0(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gT(r)
q=b2.dx
q=b2.cx=r.t(0,q.gT(q))
r=q}b1=b1.fr
b1.toString
b1.ab(r.a0(0,!0))}b1=b0.a
r=b2.gdN()
b1=b1.fy
b1.toString
b1.ab(r.a0(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gT(r)
b1=b1.fx
b1.toString
b1.ab(r.a0(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ab(C.k.a0(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ab(C.k.a0(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ab(C.k.a0(r,!0))}if(t.bk>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.e(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.e(b1,k)
b1=b1[k]
j=new Float32Array(H.bL(r.a0(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.ag(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.ag(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.ag(b1.aE,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bl
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.ag(b1.dj,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.dm
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.dk
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.ag(b1.dl,r)}b1=t.z
if(b1.length>0){r=P.w
i=new H.J([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gav()
e=i.h(0,f)
if(e==null)e=0
i.l(0,f,e+1)
d=J.cN(b0.a.c3.h(0,f),e)
p=g.gih()
o=$.aB
p=p.b8(o==null?$.aB=new V.V(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gim()
o=$.aB
p=p.b8(o==null?$.aB=new V.V(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaT(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdh()){p=g.gd9()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gda()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdc()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.c2.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gT(r)
r=P.w
b=new H.J([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.l(0,0,e+1)
d=J.cN(b0.a.c5.h(0,0),e)
p=c.bs(g.a)
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
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.c4.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gT(r)
r=P.w
a1=new H.J([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gav()
e=a1.h(0,f)
if(e==null)e=0
a1.l(0,f,e+1)
d=J.cN(b0.a.c7.h(0,f),e)
a2=c.t(0,g.gT(g))
p=g.gT(g)
o=$.aB
p=p.b8(o==null?$.aB=new V.V(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aB
p=a2.b8(p==null?$.aB=new V.V(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaT(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gal()
p=a2.ca(0)
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
j=new Float32Array(H.bL(new V.dk(o,a,a0,a3,a4,a5,a6,a7,p).a0(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gal()
p=g.gal()
if(!C.a.w(m,p)){p.a=m.length
m.push(p)}p=g.gal()
o=p.gce(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaY()
p=g.gdY()
o=d.x
o.toString
a=p.ghy(p)
a0=p.ghz(p)
a3=p.ghA()
p=p.ghx()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaY()
if(!C.a.w(m,p)){p.a=m.length
m.push(p)}p=g.gaY()
o=p.gce(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdh()){p=g.gd9()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gda()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdc()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.c6.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gT(r)
r=P.w
a9=new H.J([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gav()
e=a9.h(0,f)
if(e==null)e=0
a9.l(0,f,e+1)
d=J.cN(b0.a.c9.h(0,f),e)
p=g.ghX(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gik(g).ix()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b8(g.ghX(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaT(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gal()
p=g.gbt()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcn(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giy()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giz()
o=d.y
o.a.uniform1f(o.d,p)
g.gal()
p=g.gal()
if(!C.a.w(m,p)){p.a=m.length
m.push(p)}p=g.gal()
o=p.gce(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaY()
p=g.gdY()
o=d.z
o.toString
a=p.ghy(p)
a0=p.ghz(p)
a3=p.ghA()
p=p.ghx()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaY()
if(!C.a.w(m,p)){p.a=m.length
m.push(p)}p=g.gaY()
o=p.gce(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gil()){p=g.gij()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.gii()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdh()){p=g.gd9()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gda()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdc()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.c8.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.af(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.ag(b1.dn,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gT(r).ca(0)}b1=b1.id
b1.toString
b1.ab(r.a0(0,!0))}if(t.db){b0.af(m,b0.ch)
b1=b0.a
r=b0.ch
b1.ag(b1.dq,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dr
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.ag(b1.ds,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.dt
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.du
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.af(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.ag(b1.dv,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.dw
r.a.uniform1f(r.d,p)}if(b1.c){b0.af(m,b0.db.e)
r=b0.a
p=b0.db.e
r.ag(r.dz,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].R(b2)
r=b3.e
r.R(b2)
r.a3(b2)
r.aa(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.bj()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cQ().aE}}
O.h2.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cR(a,C.c.Z(b+3,4)*4))}}
O.h3.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.h4.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d1(a,C.c.Z(b+3,4)*4))}}
O.h5.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.h6.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dr(a,C.c.Z(b+3,4)*4))}}
O.h7.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.h8.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dA(a,C.c.Z(b+3,4)*4))}}
O.h9.prototype={
$2:function(a,b){return J.cO(a.a,b.a)}}
O.fX.prototype={
aA:function(){var u,t=this
t.cE()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.u(t.b,u,1)
u.b=!0
t.a.C(u)}}}
O.ca.prototype={
C:function(a){return this.a.C(a)},
ac:function(){return this.C(null)},
aA:function(){},
bO:function(a){var u,t,s=this
if(!s.c.n(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aA()
u=s.a
u.a=null
u.C(null)}},
sb6:function(a){var u,t=this,s=t.c
if(!s.c)t.bO(new A.Z(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gm().O(0,t.ga7())
u=t.e
t.e=a
a.gm().k(0,t.ga7())
s=new D.u(t.b+".textureCube",u,t.e)
s.b=!0
t.a.C(s)}}}
O.fY.prototype={}
O.aw.prototype={
d0:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.u(s.b+".color",u,a)
t.b=!0
s.a.C(t)}},
aA:function(){this.cE()
this.d0(new V.L(1,1,1))},
saT:function(a,b){this.bO(new A.Z(!0,!1,this.c.c))
this.d0(b)}}
O.h_.prototype={}
O.h0.prototype={
aA:function(){var u,t=this
t.cF()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.u(t.b+".refraction",u,1)
u.b=!0
t.a.C(u)}}}
O.h1.prototype={
d2:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.u(u.b+".shininess",t,a)
t.b=!0
u.a.C(t)}},
aA:function(){this.cF()
this.d2(100)}}
O.dy.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
C:function(a){var u=this.e
if(u!=null)u.u(a)},
ac:function(){return this.C(null)},
a4:function(a,b){},
bq:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.hR(t,n)
u.ba(t,n)
u.bm(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"fov"),"$iP")
u.ch=H.h(u.y.h(0,"ratio"),"$iP")
u.cx=H.h(u.y.h(0,"boxClr"),"$iF")
u.cy=H.h(u.y.h(0,"boxTxt"),"$iX")
u.db=H.h(u.y.h(0,"viewMat"),"$iW")
a.bh(u)}o.a=u}if(b.e==null){t=b.d.bi(new Z.bJ(a.a),$.a4())
t.ao($.a4()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.R(a)}t=a.d
s=a.c
r=o.a
r.R(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cv(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gT(s).ca(0)
r=r.db
r.toString
r.ab(s.a0(0,!0))
t=b.e
if(t instanceof Z.b6){t.R(a)
t.a3(a)
t.aa(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.bj()
t=o.c
if(t!=null)t.aa(a)}}
O.hS.prototype={
gm:function(){var u=this.c
return u==null?this.c=D.A():u},
a4:function(a,b){},
bq:function(a,b){var u,t,s,r=this,q="SolidColor",p=r.a
if(p==null){u=a.fr.h(0,q)
if(u==null){p=a.a
u=new A.hT(p,q)
u.ba(p,q)
u.bm(0,"uniform mat4 projViewObjMat;                       \n                                                   \nattribute vec3 posAttr;                            \n                                                   \nvoid main()                                        \n{                                                  \n  gl_Position = projViewObjMat*vec4(posAttr, 1.0); \n}                                                  \n","precision mediump float; \n                         \nuniform vec4 color;      \n                         \nvoid main()              \n{                        \n   gl_FragColor = color; \n}                        \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.h(u.y.h(0,"color"),"$ibl")
u.ch=H.h(u.y.h(0,"projViewObjMat"),"$iW")
a.bh(u)}r.a=u
p=u}t=b.e
if((!(t instanceof Z.b6)?b.e=null:t)==null){p=b.d.bi(new Z.bJ(a.a),$.a4())
t=p.ao($.a4())
s=r.a
t.e=s.z.c
b.e=p
p=s}p.R(a)
t=r.b
p.Q.ct(t)
t=a.gdN()
p=p.ch
p.toString
p.ab(t.a0(0,!0))
t=b.e
t.R(a)
t.a3(a)
t.aa(a)
t=r.a
t.toString
a.a.useProgram(null)
t.x.bj()}}
O.dF.prototype={}
O.dG.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
C:function(a){var u=this.e
if(u!=null)u.u(a)},
ac:function(){return this.C(null)},
fh:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga7(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.ba()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.ac()},
fj:function(a,b){var u,t
for(u=b.gN(b),t=this.ga7();u.q();)u.gG(u).gm().O(0,t)
this.ac()},
a4:function(a,b){},
eL:function(a){a=C.c.Z(a+3,4)*4
if(a<=0)return 4
return a},
bq:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.eL(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.mq(i,u,a.a)
a.bh(s)}j.b=s
u=s}if(b.e==null){u=b.d.bi(new Z.bJ(a.a),$.a4())
t=u.ao($.a4())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.R(a)
q=H.b([],[T.cn])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.a.w(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.e(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.e(u,p)
u=u[p]
if(t==null){t=$.ha
if(t==null){t=new V.af(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.ha=t}}l=new Float32Array(H.bL(t.a0(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.cj
if(t==null){t=V.du(0,0,1,1)
$.cj=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.e(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.e(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.cj
if(t==null){t=V.du(0,0,1,1)
$.cj=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.e(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.e(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.e(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.ct(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.b6){t.R(a)
t.a3(a)
t.aa(a)}else b.e=null
t=j.b
t.toString
u.useProgram(null)
t.x.bj()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}}}
O.bj.prototype={
C:function(a){var u=this.f
if(u!=null)u.u(a)},
ac:function(){return this.C(null)},
sal:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().O(0,t.ga7())
u=t.a
t.a=a
if(a!=null)a.gm().k(0,t.ga7())
s=new D.u("texture",u,t.a)
s.b=!0
t.C(s)}},
sdg:function(a,b){var u,t,s=this
if(b==null)b=V.dv()
if(!J.G(s.d,b)){u=s.d
s.d=b
t=new D.u("destination",u,b)
t.b=!0
s.C(t)}}}
T.cX.prototype={
bb:function(a){},
eo:function(){return this.bb(null)},
aC:function(a){var u,t=this
if(t.b!=null)return!1
t.b=a
a.c.gc0().k(0,t.geR())
t.b.c.gaX().k(0,t.geT())
t.b.c.gbt().k(0,t.geV())
u=t.b.e
u.gcA(u).k(0,t.ghc())
t.b.e.gaX().k(0,t.gha())
u=t.b.e
u.gdi(u).k(0,t.gh8())
return!0},
eS:function(a){if(!H.h(a,"$iag").x.b.n(0,this.c))return
this.ch=this.Q=!0},
eU:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$iag")
u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
if(u.A(u)<t.z)return
t.ch=!1}},
eW:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cY(a)},
hd:function(a){this.ch=this.Q=!0},
hb:function(a){var u,t=this
if(!t.Q)return
if(t.ch){H.h(a,"$ico")
u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
if(u.A(u)<t.z)return
t.ch=!1}},
h9:function(a){var u=this
if(!u.Q)return
u.Q=!1
if(!u.ch)return
u.cY(a)},
cY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j
H.h(a,"$iag")
u=a.d
t=u.a
s=a.c
r=t/s.c
q=u.b/s.d
s=this.a
u=this.d
p=T.kQ(s.a,u,!0,1,1,C.j.aV(r*(u.r-1)),C.j.aV(q*(u.x-1)))
u=p.b
o=C.c.bv(0,u)
n=C.c.bv(0,p.c)
m=(o+n*u)*4
u=p.a
t=u.length
if(m<0||m>=t)return H.e(u,m)
s=u[m]
l=m+1
if(l>=t)return H.e(u,l)
l=u[l]
k=m+2
if(k>=t)return H.e(u,k)
k=u[k]
j=m+3
if(j>=t)return H.e(u,j)
j=new T.cY(new V.E(r,q),V.cW(s,l,k,u[j]))
j.b=!0
u=this.x
if(u!=null)u.u(j)}}
T.cY.prototype={
i:function(a){return"ColorPicker: "+this.c.i(0)+" => "+this.d.i(0)}}
T.cn.prototype={}
T.ia.prototype={}
T.ib.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.A():u}}
T.ic.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.A():u},
R:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aa:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.ie.prototype={
dD:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.ic()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aN(u,k,r,34069,!1,!1)
t.aN(u,k,o,34070,!1,!1)
t.aN(u,k,q,34071,!1,!1)
t.aN(u,k,n,34072,!1,!1)
t.aN(u,k,p,34073,!1,!1)
t.aN(u,k,m,34074,!1,!1)
return u},
dC:function(a){return this.dD(a,".png")},
aN:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.T(u,"load",new T.ig(this,u,!1,b,!1,d,a),!1)},
h0:function(a,b,c){var u,t,s,r
b=V.cJ(b)
u=V.cJ(a.width)
t=V.cJ(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.f5()
s.width=u
s.height=t
r=C.f.cq(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.l9(r.getImageData(0,0,s.width,s.height))}}}
T.ig.prototype={
$1:function(a){var u=this,t=u.a,s=t.h0(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.z.i7(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.c1()}++t.e}}
T.ih.prototype={
eJ:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(u=this.c,t=C.c.Z(u,2),s=this.b,r=this.a,q=r.length,p=s*4,--u;t>=0;--t){o=p*t
n=p*(u-t)
for(m=0;m<s;++m){l=4*m
k=o+l
j=n+l
for(i=0;i<4;++i){h=k+i
g=j+i
if(h<0||h>=q)return H.e(r,h)
f=r[h]
if(g<0||g>=q)return H.e(r,g)
r[h]=r[g]
r[g]=f}}}}}
X.f_.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.A():u},
Y:function(a){var u=this.fr
if(u!=null)u.u(a)},
sam:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.u("width",u,b)
u.b=!0
t.Y(u)}},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.u("height",u,b)
u.b=!0
t.Y(u)}},
R:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.t()
i.sam(0,C.b.V(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.t()
i.sai(0,C.b.V(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.cJ(s)
o=V.cJ(r)
q=V.cJ(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.z.dR(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kP(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.c1()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.c1()
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
a.c=C.b.V(s*i.a)
r=t.d
a.d=C.b.V(r*i.b)
l=t.a
k=i.c
j=C.b.V(l*k)
t=t.b
l=i.d
u.viewport(j,C.b.V(t*l),C.b.V(s*k),C.b.V(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
aa:function(a){a.a.bindFramebuffer(36160,null)}}
X.jO.prototype={}
X.fC.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.A():u},
R:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.v(u)
q=C.b.V(r*u)
r=s.b
if(typeof t!=="number")return H.v(t)
p=C.b.V(r*t)
r=C.b.V(s.c*u)
a.c=r
s=C.b.V(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)},
aa:function(a){}}
X.fE.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.A():u},
R:function(a){var u
a.cy.bp(V.bi())
u=V.bi()
a.db.bp(u)},
aa:function(a){a.cy.aF()
a.db.aF()}}
X.dq.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.A():u},
Y:function(a){var u=this.f
if(u!=null)u.u(a)},
es:function(){return this.Y(null)},
R:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ax(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bp(k)
r=$.kK
if(r==null){r=V.kM()
q=V.k7()
p=$.kW
r=V.kD(r,q,p==null?$.kW=new V.C(0,0,-1):p)
$.kK=r
u=r}else u=r
r=s.b
if(r!=null){t=r.ax(0,a,s)
if(t!=null)u=t.t(0,u)}a.db.bp(u)},
aa:function(a){a.cy.aF()
a.db.aF()}}
X.i6.prototype={}
V.f3.prototype={
he:function(a,b,c){var u,t,s,r=this
if(r.b==null)return
u=document
t=u.createElement("button")
s=t.style
s.whiteSpace="nowrap"
C.F.dX(t,b)
W.T(t,"click",new V.f4(c),!1)
J.kl(r.b).k(0,t)
J.kl(r.b).k(0,u.createElement("br"))
r.c.push(t)}}
V.f4.prototype={
$1:function(a){return this.a.$0()}}
V.jI.prototype={
$1:function(a){var u=C.b.dS(this.a.ghD(),2)
if(u!=="0.00")P.ki(u+" fps")}}
V.hO.prototype={
ea:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.T(q,"scroll",new V.hQ(o),!1)},
d7:function(a){var u,t,s,r,q,p,o,n
this.h4()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.hF(a),s.toString,r=new H.Q(r),r=new P.cD(s.dT(new H.bA(r,r.gj(r))).a());r.q();){s=r.gG(r)
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
if(H.lg(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.e(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.mI(C.W,s,C.u,!1)
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
hf:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
h4:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.ik()
t=P.l
u.a=new H.J([t,L.dC])
u.b=new H.J([t,L.dK])
u.c=P.c8(t)
u.d=u.M(0,q)
t=u.M(0,q).p(0,p)
s=K.a_(new H.Q("*"))
t.a.push(s)
t.c=!0
t=u.M(0,p).p(0,p)
s=new K.aQ()
r=[K.di]
s.a=H.b([],r)
t.a.push(s)
t=K.a_(new H.Q("*"))
s.a.push(t)
t=u.M(0,p).p(0,"BoldEnd")
s=K.a_(new H.Q("*"))
t.a.push(s)
t.c=!0
t=u.M(0,q).p(0,o)
s=K.a_(new H.Q("_"))
t.a.push(s)
t.c=!0
t=u.M(0,o).p(0,o)
s=new K.aQ()
s.a=H.b([],r)
t.a.push(s)
t=K.a_(new H.Q("_"))
s.a.push(t)
t=u.M(0,o).p(0,n)
s=K.a_(new H.Q("_"))
t.a.push(s)
t.c=!0
t=u.M(0,q).p(0,m)
s=K.a_(new H.Q("`"))
t.a.push(s)
t.c=!0
t=u.M(0,m).p(0,m)
s=new K.aQ()
s.a=H.b([],r)
t.a.push(s)
t=K.a_(new H.Q("`"))
s.a.push(t)
t=u.M(0,m).p(0,"CodeEnd")
s=K.a_(new H.Q("`"))
t.a.push(s)
t.c=!0
t=u.M(0,q).p(0,l)
s=K.a_(new H.Q("["))
t.a.push(s)
t.c=!0
t=u.M(0,l).p(0,k)
s=K.a_(new H.Q("|"))
t.a.push(s)
s=u.M(0,l).p(0,j)
t=K.a_(new H.Q("]"))
s.a.push(t)
s.c=!0
s=u.M(0,l).p(0,l)
t=new K.aQ()
t.a=H.b([],r)
s.a.push(t)
s=K.a_(new H.Q("|]"))
t.a.push(s)
s=u.M(0,k).p(0,j)
t=K.a_(new H.Q("]"))
s.a.push(t)
s.c=!0
s=u.M(0,k).p(0,k)
t=new K.aQ()
t.a=H.b([],r)
s.a.push(t)
s=K.a_(new H.Q("|]"))
t.a.push(s)
u.M(0,q).p(0,i).a.push(new K.eS())
s=u.M(0,i).p(0,i)
t=new K.aQ()
t.a=H.b([],r)
s.a.push(t)
s=K.a_(new H.Q("*_`["))
t.a.push(s)
s=u.M(0,"BoldEnd")
s.d=s.a.b7(p)
s=u.M(0,n)
s.d=s.a.b7(o)
s=u.M(0,"CodeEnd")
s.d=s.a.b7(m)
s=u.M(0,j)
s.d=s.a.b7("Link")
s=u.M(0,i)
s.d=s.a.b7(i)
this.b=u}}
V.hQ.prototype={
$1:function(a){P.kS(C.i,new V.hP(this.a))}}
V.hP.prototype={
$0:function(){var u=C.b.V(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
M.jE.prototype={
$1:function(a){var u,t,s
for(u=this.a,t=0;t<u.length;++t){s=u[t]
s.sbZ(0.99*s.e)
s.sc_(0.99*s.f)}}}
M.jF.prototype={
$1:function(a){var u,t,s,r=H.h(a,"$icY").d.ic()
for(u=this.a,t=0;t<u.length;++t)if(u[t].n(0,r)){u=this.b
if(t>=u.length)return H.e(u,t)
s=u[t]
s.sbZ(1.21)
s.sc_(1.31)
break}}}
M.jG.prototype={
$0:function(){var u,t,s,r,q,p=null,o="image/png",n=T.kQ(this.a.f.a,this.b.ch,!0,p,p,p,p),m=W.f5(),l=n.b
m.width=l
u=n.c
m.height=u
t=C.f.cq(m,"2d")
s=(t&&C.v).ht(t,l,u)
C.X.dW(J.lE(s),0,n.a)
C.v.hZ(t,s,0,0)
n=m.toDataURL(o,100)
n.length
r=H.nJ(n,o,"image/octet-stream",0)
q=W.kn()
q.setAttribute("download","backBuffer.png")
q.setAttribute("href",r)
q.click()}};(function aliases(){var u=J.a.prototype
u.e2=u.i
u=J.dc.prototype
u.e4=u.i
u=P.t.prototype
u.cD=u.W
u=P.i.prototype
u.e3=u.bu
u=W.O.prototype
u.bw=u.ah
u=W.eo.prototype
u.e5=u.au
u=K.d8.prototype
u.e1=u.aW
u.cC=u.i
u=O.ca.prototype
u.cE=u.aA
u=O.aw.prototype
u.cF=u.aA})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"mL","lY",21)
t(P,"ng","mx",6)
t(P,"nh","my",6)
t(P,"ni","mz",6)
s(P,"l7","ne",9)
r(W,"nu",4,null,["$4"],["mA"],17,0)
r(W,"nv",4,null,["$4"],["mB"],17,0)
var l
q(l=E.aN.prototype,"gdI",0,0,null,["$1","$0"],["dJ","hO"],0,0)
q(l,"gdK",0,0,null,["$1","$0"],["dL","hP"],0,0)
q(l,"gdG",0,0,null,["$1","$0"],["dH","hN"],0,0)
q(l,"gdE",0,0,null,["$1","$0"],["dF","hK"],0,0)
p(l,"ghI","hJ",3)
p(l,"ghL","hM",3)
q(l=E.dH.prototype,"gcG",0,0,null,["$1","$0"],["cI","cH"],0,0)
o(l,"gi3","dO",9)
n(l=X.dO.prototype,"gfk","fl",4)
n(l,"gf4","f5",4)
n(l,"gfa","fb",2)
n(l,"gfo","fp",10)
n(l,"gfm","fn",10)
n(l,"gft","fu",2)
n(l,"gfz","fA",2)
n(l,"gfe","ff",2)
n(l,"gfv","fw",2)
n(l,"gfc","fd",2)
n(l,"gfB","fC",19)
n(l,"gfD","fE",4)
n(l,"gfT","fU",5)
n(l,"gfP","fQ",5)
n(l,"gfR","fS",5)
q(D.bv.prototype,"ged",0,0,null,["$1","$0"],["ay","ee"],0,0)
q(l=D.de.prototype,"gcW",0,0,null,["$1","$0"],["cX","fq"],0,0)
n(l,"gfF","fG",20)
p(l,"geZ","f_",11)
p(l,"gfJ","fK",11)
m(V.E.prototype,"gj","cc",12)
m(V.C.prototype,"gj","cc",12)
q(l=U.c3.prototype,"gaO",0,0,null,["$1","$0"],["I","a8"],0,0)
p(l,"gef","eg",13)
p(l,"gfH","fI",13)
q(l=U.dP.prototype,"gaO",0,0,null,["$1","$0"],["I","a8"],0,0)
n(l,"gbx","by",1)
n(l,"gbz","bA",1)
n(l,"gbB","bC",1)
q(l=U.dQ.prototype,"gaO",0,0,null,["$1","$0"],["I","a8"],0,0)
n(l,"gbx","by",1)
n(l,"gbz","bA",1)
n(l,"gbB","bC",1)
n(l,"geM","eN",1)
n(l,"geO","eP",1)
n(l,"gel","em",1)
n(l,"gej","ek",1)
n(l,"geh","ei",1)
n(U.dR.prototype,"geX","eY",1)
q(l=M.cZ.prototype,"gX",0,0,null,["$1","$0"],["U","b_"],0,0)
p(l,"gfL","fM",14)
p(l,"gfN","fO",14)
q(M.d_.prototype,"gX",0,0,null,["$1","$0"],["U","b_"],0,0)
q(l=M.d4.prototype,"gX",0,0,null,["$1","$0"],["U","b_"],0,0)
p(l,"gf6","f7",3)
p(l,"gf8","f9",3)
q(l=O.dj.prototype,"ga7",0,0,null,["$1","$0"],["C","ac"],0,0)
q(l,"gfZ",0,0,null,["$1","$0"],["cZ","h_"],0,0)
p(l,"gf0","f1",15)
p(l,"gf2","f3",15)
q(O.ca.prototype,"ga7",0,0,null,["$1","$0"],["C","ac"],0,0)
q(O.dy.prototype,"ga7",0,0,null,["$1","$0"],["C","ac"],0,0)
q(l=O.dG.prototype,"ga7",0,0,null,["$1","$0"],["C","ac"],0,0)
p(l,"gfg","fh",16)
p(l,"gfi","fj",16)
q(O.bj.prototype,"ga7",0,0,null,["$1","$0"],["C","ac"],0,0)
q(l=T.cX.prototype,"gcJ",0,0,null,["$1","$0"],["bb","eo"],0,0)
n(l,"geR","eS",1)
n(l,"geT","eU",1)
n(l,"geV","eW",1)
n(l,"ghc","hd",1)
n(l,"gha","hb",1)
n(l,"gh8","h9",1)
q(X.dq.prototype,"ger",0,0,null,["$1","$0"],["Y","es"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.U,null)
s(P.U,[H.jY,J.a,J.a0,P.eb,P.i,H.bA,P.fH,H.d5,H.iA,H.iq,P.bw,H.bY,H.et,P.a1,H.fO,H.fP,H.fJ,H.i2,H.ka,P.ez,P.bK,P.cD,P.dU,P.dD,P.i0,P.dI,P.jp,P.jc,P.j6,P.ea,P.t,P.f8,P.jn,P.aJ,P.ae,P.a9,P.b9,P.ht,P.dB,P.e2,P.fB,P.d7,P.r,P.R,P.aR,P.k0,P.l,P.aV,W.fe,W.cw,W.M,W.dn,W.eo,W.jh,W.d6,W.aP,W.jb,W.eF,P.eE,P.j7,K.eS,K.d8,K.di,K.hJ,L.dC,L.dJ,L.dK,L.ik,O.as,O.cb,E.f1,E.aN,E.br,E.bC,E.e1,E.hB,E.dH,Z.dT,Z.bJ,Z.b6,Z.bx,Z.aZ,D.f7,D.ba,D.S,X.cU,X.dd,X.fM,X.fS,X.ab,X.hh,X.il,X.dO,D.f0,D.bv,D.a5,D.hw,D.hW,V.L,V.Y,V.fs,V.dk,V.af,V.a2,V.V,V.aU,V.dt,V.E,V.C,U.dP,U.dQ,U.dR,M.d_,M.d4,M.am,A.cQ,A.eV,A.Z,A.cR,A.d1,A.dr,A.dA,A.fZ,A.cp,A.cq,A.cs,A.ct,A.bu,A.dM,A.iw,F.bb,F.c7,F.cg,F.hK,F.hL,F.hM,F.hN,F.bI,F.iJ,F.iK,F.iN,F.iO,O.dF,O.ca,O.h_,O.bj,T.cX,T.ie,T.ih,X.i6,X.jO,X.fE,X.dq,V.f3,V.hO])
s(J.a,[J.fI,J.db,J.dc,J.bf,J.c6,J.bg,H.ce,W.f,W.eR,W.cS,W.cV,W.at,W.H,W.dW,W.ad,W.fi,W.fj,W.dY,W.d3,W.e_,W.fl,W.j,W.e3,W.av,W.fD,W.e6,W.bc,W.fR,W.hb,W.ec,W.ed,W.ay,W.ee,W.eh,W.aA,W.el,W.en,W.aD,W.ep,W.aE,W.eu,W.an,W.ex,W.ij,W.aG,W.eA,W.io,W.iC,W.eG,W.eI,W.eK,W.eM,W.eO,P.aO,P.e8,P.aS,P.ej,P.hy,P.ev,P.aW,P.eC,P.eW,P.dV,P.dw,P.er])
s(J.dc,[J.hu,J.bH,J.bh])
t(J.jX,J.bf)
s(J.c6,[J.da,J.d9])
t(P.fQ,P.eb)
s(P.fQ,[H.dN,W.iY,W.a3,P.fx])
t(H.Q,H.dN)
s(P.i,[H.q,H.c9,H.cu,P.fG])
s(H.q,[H.df,H.bz])
s(H.df,[H.i3,H.fV])
t(H.fo,H.c9)
s(P.fH,[H.dh,H.iS])
s(P.bw,[H.hq,H.fL,H.iz,H.f6,H.hH,P.dp,P.al,P.iB,P.iy,P.bF,P.fb,P.fh])
s(H.bY,[H.jJ,H.i7,H.fK,H.jA,H.jB,H.jC,P.iU,P.iT,P.iV,P.iW,P.jm,P.jl,P.ju,P.j9,P.ja,P.fU,P.fm,P.fn,W.fp,W.hd,W.hf,W.hG,W.i_,W.j1,W.hp,W.ho,W.jd,W.je,W.jk,W.jo,P.jv,P.fy,P.fz,P.eY,E.hC,E.hD,E.hE,E.ii,D.ft,D.fu,F.jq,F.iQ,F.iP,F.iL,F.iM,O.h2,O.h3,O.h4,O.h5,O.h6,O.h7,O.h8,O.h9,T.ig,V.f4,V.jI,V.hQ,V.hP,M.jE,M.jF,M.jG])
s(H.i7,[H.hY,H.bW])
t(P.fT,P.a1)
s(P.fT,[H.J,W.iX])
t(H.dl,H.ce)
s(H.dl,[H.cx,H.cz])
t(H.cy,H.cx)
t(H.bB,H.cy)
t(H.cA,H.cz)
t(H.cd,H.cA)
s(H.cd,[H.hi,H.hj,H.hk,H.hl,H.hm,H.cf,H.hn])
t(P.ji,P.fG)
t(P.j8,P.jp)
t(P.j5,P.jc)
t(P.fc,P.i0)
t(P.fq,P.f8)
t(P.iD,P.fq)
t(P.iE,P.fc)
s(P.a9,[P.K,P.w])
s(P.al,[P.bE,P.fF])
s(W.f,[W.B,W.fw,W.aC,W.cB,W.aF,W.ao,W.cE,W.iR,W.cv,P.eZ,P.bp])
s(W.B,[W.O,W.b7])
s(W.O,[W.o,P.k])
s(W.o,[W.eT,W.eU,W.bq,W.bs,W.bt,W.fA,W.c5,W.hI,W.dE,W.i4,W.i5,W.cm])
t(W.fd,W.at)
t(W.c_,W.dW)
s(W.ad,[W.ff,W.fg])
t(W.dZ,W.dY)
t(W.d2,W.dZ)
t(W.e0,W.e_)
t(W.fk,W.e0)
t(W.au,W.cS)
t(W.e4,W.e3)
t(W.fv,W.e4)
t(W.e7,W.e6)
t(W.c4,W.e7)
t(W.bk,W.j)
s(W.bk,[W.by,W.az,W.bG])
t(W.hc,W.ec)
t(W.he,W.ed)
t(W.ef,W.ee)
t(W.hg,W.ef)
t(W.ei,W.eh)
t(W.dm,W.ei)
t(W.em,W.el)
t(W.hv,W.em)
t(W.hF,W.en)
t(W.cC,W.cB)
t(W.hU,W.cC)
t(W.eq,W.ep)
t(W.hV,W.eq)
t(W.hZ,W.eu)
t(W.ey,W.ex)
t(W.i8,W.ey)
t(W.cF,W.cE)
t(W.i9,W.cF)
t(W.eB,W.eA)
t(W.im,W.eB)
t(W.bm,W.az)
t(W.eH,W.eG)
t(W.iZ,W.eH)
t(W.dX,W.d3)
t(W.eJ,W.eI)
t(W.j2,W.eJ)
t(W.eL,W.eK)
t(W.eg,W.eL)
t(W.eN,W.eM)
t(W.jf,W.eN)
t(W.eP,W.eO)
t(W.jg,W.eP)
t(W.j_,W.iX)
t(W.j0,P.dD)
t(W.jj,W.eo)
t(P.a6,P.j7)
t(P.e9,P.e8)
t(P.fN,P.e9)
t(P.ek,P.ej)
t(P.hr,P.ek)
t(P.cl,P.k)
t(P.ew,P.ev)
t(P.i1,P.ew)
t(P.eD,P.eC)
t(P.ip,P.eD)
t(P.eX,P.dV)
t(P.hs,P.bp)
t(P.es,P.er)
t(P.hX,P.es)
s(K.d8,[K.aQ,L.dL])
s(E.f1,[Z.cT,A.dx,T.cn])
s(D.S,[D.bd,D.be,D.u,X.hx,T.cY])
s(X.hx,[X.dg,X.ag,X.cc,X.co])
s(O.as,[D.de,U.c3,M.cZ])
s(D.f7,[U.fa,U.ac])
s(U.ac,[U.bZ,U.ck])
s(A.dx,[A.fW,A.hR,A.hT,A.id])
s(A.dM,[A.ap,A.it,A.iu,A.iv,A.is,A.P,A.aX,A.F,A.bl,A.ix,A.cr,A.W,A.aY,A.X])
s(O.dF,[O.dj,O.dy,O.hS,O.dG])
s(O.ca,[O.fX,O.fY,O.aw])
s(O.aw,[O.h0,O.h1])
s(T.cn,[T.ia,T.ic])
t(T.ib,T.ia)
s(X.i6,[X.f_,X.fC])
u(H.dN,H.iA)
u(H.cx,P.t)
u(H.cy,H.d5)
u(H.cz,P.t)
u(H.cA,H.d5)
u(P.eb,P.t)
u(W.dW,W.fe)
u(W.dY,P.t)
u(W.dZ,W.M)
u(W.e_,P.t)
u(W.e0,W.M)
u(W.e3,P.t)
u(W.e4,W.M)
u(W.e6,P.t)
u(W.e7,W.M)
u(W.ec,P.a1)
u(W.ed,P.a1)
u(W.ee,P.t)
u(W.ef,W.M)
u(W.eh,P.t)
u(W.ei,W.M)
u(W.el,P.t)
u(W.em,W.M)
u(W.en,P.a1)
u(W.cB,P.t)
u(W.cC,W.M)
u(W.ep,P.t)
u(W.eq,W.M)
u(W.eu,P.a1)
u(W.ex,P.t)
u(W.ey,W.M)
u(W.cE,P.t)
u(W.cF,W.M)
u(W.eA,P.t)
u(W.eB,W.M)
u(W.eG,P.t)
u(W.eH,W.M)
u(W.eI,P.t)
u(W.eJ,W.M)
u(W.eK,P.t)
u(W.eL,W.M)
u(W.eM,P.t)
u(W.eN,W.M)
u(W.eO,P.t)
u(W.eP,W.M)
u(P.e8,P.t)
u(P.e9,W.M)
u(P.ej,P.t)
u(P.ek,W.M)
u(P.ev,P.t)
u(P.ew,W.M)
u(P.eC,P.t)
u(P.eD,W.M)
u(P.dV,P.a1)
u(P.er,P.t)
u(P.es,W.M)})()
var v={mangledGlobalNames:{w:"int",K:"double",a9:"num",l:"String",aJ:"bool",aR:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.S]},{func:1,ret:-1,args:[D.S]},{func:1,ret:-1,args:[W.az]},{func:1,ret:-1,args:[P.w,[P.i,E.aN]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aR,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.by]},{func:1,ret:-1,args:[P.w,[P.i,D.a5]]},{func:1,ret:P.K},{func:1,ret:-1,args:[P.w,[P.i,U.ac]]},{func:1,ret:-1,args:[P.w,[P.i,M.am]]},{func:1,ret:-1,args:[P.w,[P.i,V.af]]},{func:1,ret:-1,args:[P.w,[P.i,O.bj]]},{func:1,ret:P.aJ,args:[W.O,P.l,P.l,W.cw]},{func:1,ret:P.aR,args:[,]},{func:1,ret:-1,args:[W.bm]},{func:1,ret:P.aJ,args:[[P.i,D.a5]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.o=W.bq.prototype
C.F=W.bs.prototype
C.f=W.bt.prototype
C.v=W.cV.prototype
C.R=J.a.prototype
C.a=J.bf.prototype
C.j=J.d9.prototype
C.c=J.da.prototype
C.k=J.db.prototype
C.b=J.c6.prototype
C.d=J.bg.prototype
C.S=J.bh.prototype
C.X=H.cf.prototype
C.y=J.hu.prototype
C.z=P.dw.prototype
C.A=W.dE.prototype
C.n=J.bH.prototype
C.B=W.bm.prototype
C.C=W.cv.prototype
C.D=new E.br("Browser.chrome")
C.p=new E.br("Browser.firefox")
C.q=new E.br("Browser.edge")
C.E=new E.br("Browser.other")
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.G=function() {
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
C.L=function(getTagFallback) {
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
C.H=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.I=function(hooks) {
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
C.K=function(hooks) {
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
C.J=function(hooks) {
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
C.t=function(hooks) { return hooks; }

C.M=new P.ht()
C.u=new P.iD()
C.N=new P.iE()
C.e=new P.j8()
C.w=new A.bu(0,"ColorBlendType.Overwrite")
C.O=new A.bu(1,"ColorBlendType.Additive")
C.P=new A.bu(2,"ColorBlendType.Average")
C.h=new A.bu(3,"ColorBlendType.AlphaBlend")
C.i=new P.b9(0)
C.Q=new P.b9(5e6)
C.T=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.l])
C.U=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.l])
C.V=H.b(u([]),[P.l])
C.W=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.l=H.b(u(["bind","if","ref","repeat","syntax"]),[P.l])
C.m=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.l])
C.Y=new E.bC("OperatingSystem.windows")
C.x=new E.bC("OperatingSystem.mac")
C.Z=new E.bC("OperatingSystem.linux")
C.a_=new E.bC("OperatingSystem.other")
C.a0=new P.bK(null,2)})();(function staticFields(){$.ar=0
$.bX=null
$.ko=null
$.lb=null
$.l5=null
$.le=null
$.jw=null
$.jD=null
$.kg=null
$.bM=null
$.cH=null
$.cI=null
$.kb=!1
$.aq=C.e
$.a7=[]
$.aM=null
$.jS=null
$.kv=null
$.ku=null
$.e5=P.kA(P.l,P.d7)
$.fr=null
$.ha=null
$.kL=null
$.aB=null
$.cj=null
$.kV=null
$.kX=null
$.iF=null
$.iG=null
$.iH=null
$.kW=null
$.kK=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nQ","lk",function(){return H.la("_$dart_dartClosure")})
u($,"nR","kj",function(){return H.la("_$dart_js")})
u($,"nS","ll",function(){return H.aH(H.ir({
toString:function(){return"$receiver$"}}))})
u($,"nT","lm",function(){return H.aH(H.ir({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nU","ln",function(){return H.aH(H.ir(null))})
u($,"nV","lo",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nY","lr",function(){return H.aH(H.ir(void 0))})
u($,"nZ","ls",function(){return H.aH(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nX","lq",function(){return H.aH(H.kU(null))})
u($,"nW","lp",function(){return H.aH(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"o0","lu",function(){return H.aH(H.kU(void 0))})
u($,"o_","lt",function(){return H.aH(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"od","kk",function(){return P.mw()})
u($,"og","lz",function(){return P.mi("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oe","ly",function(){return P.kB(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.l)})
u($,"o7","lx",function(){return Z.ai(0)})
u($,"o1","lv",function(){return Z.ai(511)})
u($,"o9","a4",function(){return Z.ai(1)})
u($,"o8","b3",function(){return Z.ai(2)})
u($,"o3","b2",function(){return Z.ai(4)})
u($,"oa","bo",function(){return Z.ai(8)})
u($,"ob","b4",function(){return Z.ai(16)})
u($,"o4","cL",function(){return Z.ai(32)})
u($,"o5","cM",function(){return Z.ai(64)})
u($,"o6","lw",function(){return Z.ai(96)})
u($,"oc","bU",function(){return Z.ai(128)})
u($,"o2","b1",function(){return Z.ai(256)})
u($,"nP","lj",function(){return new V.fs(1e-9)})
u($,"nO","y",function(){return $.lj()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.ce,ArrayBufferView:H.ce,Float32Array:H.bB,Float64Array:H.bB,Int16Array:H.hi,Int32Array:H.hj,Int8Array:H.hk,Uint16Array:H.hl,Uint32Array:H.hm,Uint8ClampedArray:H.cf,CanvasPixelArray:H.cf,Uint8Array:H.hn,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLDivElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eR,HTMLAnchorElement:W.eT,HTMLAreaElement:W.eU,Blob:W.cS,HTMLBodyElement:W.bq,HTMLButtonElement:W.bs,HTMLCanvasElement:W.bt,CanvasRenderingContext2D:W.cV,CDATASection:W.b7,CharacterData:W.b7,Comment:W.b7,ProcessingInstruction:W.b7,Text:W.b7,CSSPerspective:W.fd,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c_,MSStyleCSSProperties:W.c_,CSS2Properties:W.c_,CSSImageValue:W.ad,CSSKeywordValue:W.ad,CSSNumericValue:W.ad,CSSPositionValue:W.ad,CSSResourceValue:W.ad,CSSUnitValue:W.ad,CSSURLImageValue:W.ad,CSSStyleValue:W.ad,CSSMatrixComponent:W.at,CSSRotation:W.at,CSSScale:W.at,CSSSkew:W.at,CSSTranslation:W.at,CSSTransformComponent:W.at,CSSTransformValue:W.ff,CSSUnparsedValue:W.fg,DataTransferItemList:W.fi,DOMException:W.fj,ClientRectList:W.d2,DOMRectList:W.d2,DOMRectReadOnly:W.d3,DOMStringList:W.fk,DOMTokenList:W.fl,Element:W.O,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MessagePort:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.au,FileList:W.fv,FileWriter:W.fw,HTMLFormElement:W.fA,Gamepad:W.av,History:W.fD,HTMLCollection:W.c4,HTMLFormControlsCollection:W.c4,HTMLOptionsCollection:W.c4,ImageData:W.bc,HTMLImageElement:W.c5,KeyboardEvent:W.by,Location:W.fR,MediaList:W.hb,MIDIInputMap:W.hc,MIDIOutputMap:W.he,MimeType:W.ay,MimeTypeArray:W.hg,PointerEvent:W.az,MouseEvent:W.az,DragEvent:W.az,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.dm,RadioNodeList:W.dm,Plugin:W.aA,PluginArray:W.hv,RTCStatsReport:W.hF,HTMLSelectElement:W.hI,SourceBuffer:W.aC,SourceBufferList:W.hU,SpeechGrammar:W.aD,SpeechGrammarList:W.hV,SpeechRecognitionResult:W.aE,Storage:W.hZ,CSSStyleSheet:W.an,StyleSheet:W.an,HTMLTableElement:W.dE,HTMLTableRowElement:W.i4,HTMLTableSectionElement:W.i5,HTMLTemplateElement:W.cm,TextTrack:W.aF,TextTrackCue:W.ao,VTTCue:W.ao,TextTrackCueList:W.i8,TextTrackList:W.i9,TimeRanges:W.ij,Touch:W.aG,TouchEvent:W.bG,TouchList:W.im,TrackDefaultList:W.io,CompositionEvent:W.bk,FocusEvent:W.bk,TextEvent:W.bk,UIEvent:W.bk,URL:W.iC,VideoTrackList:W.iR,WheelEvent:W.bm,Window:W.cv,DOMWindow:W.cv,CSSRuleList:W.iZ,ClientRect:W.dX,DOMRect:W.dX,GamepadList:W.j2,NamedNodeMap:W.eg,MozNamedAttrMap:W.eg,SpeechRecognitionResultList:W.jf,StyleSheetList:W.jg,SVGLength:P.aO,SVGLengthList:P.fN,SVGNumber:P.aS,SVGNumberList:P.hr,SVGPointList:P.hy,SVGScriptElement:P.cl,SVGStringList:P.i1,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.aW,SVGTransformList:P.ip,AudioBuffer:P.eW,AudioParamMap:P.eX,AudioTrackList:P.eZ,AudioContext:P.bp,webkitAudioContext:P.bp,BaseAudioContext:P.bp,OfflineAudioContext:P.hs,WebGL2RenderingContext:P.dw,SQLResultSetRowList:P.hX})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.bB.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"
W.cF.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(M.lc,[])
else M.lc([])})})()
//# sourceMappingURL=test.dart.js.map
