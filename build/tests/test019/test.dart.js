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
a[c]=function(){a[c]=function(){H.n6(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jQ"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jQ(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jC:function jC(){},
lw:function(a,b,c,d){if(!!a.$ip)return new H.f3(a,b,[c,d])
return new H.bX(a,b,[c,d])},
jz:function(){return new P.c6("No element")},
lp:function(){return new P.c6("Too many elements")},
lP:function(a,b){var u=J.aZ(a)
if(typeof u!=="number")return u.G()
H.dd(a,0,u-1,b)},
dd:function(a,b,c,d){if(c-b<=32)H.lO(a,b,c,d)
else H.lN(a,b,c,d)},
lO:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ew(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a1()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lN:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.Z(a4+a5,2),f=g-j,e=g+j,d=J.ew(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a1()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.O(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a5()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a1()
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
if(typeof l!=="number")return l.a5()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a1()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a1()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
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
H.dd(a3,a4,t-2,a6)
H.dd(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.O(a6.$2(d.h(a3,t),b),0);)++t
for(;J.O(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dd(a3,t,s,a6)}else H.dd(a3,t,s,a6)},
m:function m(a){this.a=a},
p:function p(){},
cW:function cW(){},
ba:function ba(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bX:function bX(a,b,c){this.a=a
this.b=b
this.$ti=c},
f3:function f3(a,b,c){this.a=a
this.b=b
this.$ti=c},
cY:function cY(a,b){this.a=null
this.b=a
this.c=b},
fE:function fE(a,b,c){this.a=a
this.b=b
this.$ti=c},
ce:function ce(a,b,c){this.a=a
this.b=b
this.$ti=c},
iy:function iy(a,b){this.a=a
this.b=b},
cN:function cN(){},
ie:function ie(){},
dt:function dt(){},
cu:function(a){var u,t=H.n7(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mQ:function(a){return v.types[a]},
mX:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iy},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.aS(a))
return u},
c3:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
c4:function(a){return H.lz(a)+H.kE(H.ct(a),0,null)},
lz:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.I||!!n.$iby){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cu(t.length>1&&C.b.aS(t,0)===36?C.b.aj(t,1):t)},
km:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lI:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aS(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.bb(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aS(s))}return H.km(r)},
lH:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aS(s))
if(s<0)throw H.c(H.aS(s))
if(s>65535)return H.lI(a)}return H.km(a)},
jF:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.bb(u,10))>>>0,56320|u&1023)}throw H.c(P.aL(a,0,1114111,null,null))},
bv:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lG:function(a){var u=H.bv(a).getFullYear()+0
return u},
lE:function(a){var u=H.bv(a).getMonth()+1
return u},
lA:function(a){var u=H.bv(a).getDate()+0
return u},
lB:function(a){var u=H.bv(a).getHours()+0
return u},
lD:function(a){var u=H.bv(a).getMinutes()+0
return u},
lF:function(a){var u=H.bv(a).getSeconds()+0
return u},
lC:function(a){var u=H.bv(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.aS(a))},
f:function(a,b){if(a==null)J.aZ(a)
throw H.c(H.bF(a,b))},
bF:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=J.aZ(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d8(b,s)},
mJ:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bw(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bw(a,c,!0,b,"end",u)
return new P.ad(!0,b,"end",null)},
aS:function(a){return new P.ad(!0,a,null,null)},
mF:function(a){if(typeof a!=="number")throw H.c(H.aS(a))
return a},
c:function(a){var u
if(a==null)a=new P.d5()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kP})
u.name=""}else u.toString=H.kP
return u},
kP:function(){return J.a5(this.dartException)},
t:function(a){throw H.c(a)},
l:function(a){throw H.c(P.b0(a))},
as:function(a){var u,t,s,r,q,p
a=H.kO(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.i3(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
i4:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kv:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kh:function(a,b){return new H.h8(a,b==null?null:b.method)},
jD:function(a,b){var u=b==null,t=u?null:b.method
return new H.fu(a,t,u?null:b.receiver)},
aw:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jn(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.bb(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jD(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kh(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kS()
q=$.kT()
p=$.kU()
o=$.kV()
n=$.kY()
m=$.kZ()
l=$.kX()
$.kW()
k=$.l0()
j=$.l_()
i=r.ac(u)
if(i!=null)return f.$1(H.jD(u,i))
else{i=q.ac(u)
if(i!=null){i.method="call"
return f.$1(H.jD(u,i))}else{i=p.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=n.ac(u)
if(i==null){i=m.ac(u)
if(i==null){i=l.ac(u)
if(i==null){i=o.ac(u)
if(i==null){i=k.ac(u)
if(i==null){i=j.ac(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kh(u,i))}}return f.$1(new H.id(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.df()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.df()
return a},
jT:function(a){var u
if(a==null)return new H.e9(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e9(a)},
mN:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mW:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mW)
a.$identity=u
return u},
lj:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hF().constructor.prototype):Object.create(new H.bJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aj
if(typeof t!=="number")return t.B()
$.aj=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.k4(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lf(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.k4(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lf:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mQ,a)
if(typeof a=="function")if(b)return a
else{u=c?H.k3:H.jp
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lg:function(a,b,c,d){var u=H.jp
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
k4:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.li(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lg(t,!r,u,b)
if(t===0){r=$.aj
if(typeof r!=="number")return r.B()
$.aj=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
return new Function(r+H.d(q==null?$.bK=H.eK("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aj
if(typeof r!=="number")return r.B()
$.aj=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
return new Function(r+H.d(q==null?$.bK=H.eK("self"):q)+"."+H.d(u)+"("+o+");}")()},
lh:function(a,b,c,d){var u=H.jp,t=H.k3
switch(b?-1:a){case 0:throw H.c(H.lL("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
li:function(a,b){var u,t,s,r,q,p,o,n=$.bK
if(n==null)n=$.bK=H.eK("self")
u=$.k2
if(u==null)u=$.k2=H.eK("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lh(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.aj
if(typeof u!=="number")return u.B()
$.aj=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.aj
if(typeof u!=="number")return u.B()
$.aj=u+1
return new Function(n+u+"}")()},
jQ:function(a,b,c,d,e,f,g){return H.lj(a,b,c,d,!!e,!!f,g)},
jp:function(a){return a.a},
k3:function(a){return a.c},
eK:function(a){var u,t,s,r=new H.bJ("self","target","receiver","name"),q=J.jA(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
n0:function(a,b){throw H.c(H.le(a,H.cu(b.substring(2))))},
i:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.n0(a,b)},
mL:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
le:function(a,b){return new H.eL("CastError: "+P.jw(a)+": type '"+H.d(H.mB(a))+"' is not a subtype of type '"+b+"'")},
mB:function(a){var u,t=J.Q(a)
if(!!t.$ibM){u=H.mL(t)
if(u!=null)return H.n1(u)
return"Closure"}return H.c4(a)},
n6:function(a){throw H.c(new P.eW(a))},
lL:function(a){return new H.hp(a)},
kJ:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ct:function(a){if(a==null)return
return a.$ti},
nF:function(a,b,c){return H.jm(a["$a"+H.d(c)],H.ct(b))},
mP:function(a,b,c,d){var u=H.jm(a["$a"+H.d(c)],H.ct(b))
return u==null?null:u[d]},
jS:function(a,b,c){var u=H.jm(a["$a"+H.d(b)],H.ct(a))
return u==null?null:u[c]},
av:function(a,b){var u=H.ct(a)
return u==null?null:u[b]},
n1:function(a){return H.bj(a,null)},
bj:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cu(a[0].name)+H.kE(a,1,b)
if(typeof a=="function")return H.cu(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.m6(a,b)
if('futureOr' in a)return"FutureOr<"+H.bj("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
m6:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.Y)p+=" extends "+H.bj(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bj(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bj(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bj(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mM(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bj(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kE:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ap("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bj(p,c)}return"<"+u.i(0)+">"},
jm:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nD:function(a,b,c){return a.apply(b,H.jm(J.Q(b)["$a"+H.d(c)],H.ct(b)))},
nE:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mY:function(a){var u,t,s,r,q=$.kK.$1(a),p=$.jc[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ji[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.kH.$2(a,q)
if(q!=null){p=$.jc[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ji[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jk(u)
$.jc[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ji[q]=u
return u}if(s==="-"){r=H.jk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kM(a,u)
if(s==="*")throw H.c(P.kw(q))
if(v.leafTags[q]===true){r=H.jk(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kM(a,u)},
kM:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jV(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jk:function(a){return J.jV(a,!1,null,!!a.$iy)},
mZ:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jk(u)
else return J.jV(u,c,null,null)},
mU:function(){if(!0===$.jU)return
$.jU=!0
H.mV()},
mV:function(){var u,t,s,r,q,p,o,n
$.jc=Object.create(null)
$.ji=Object.create(null)
H.mT()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kN.$1(q)
if(p!=null){o=H.mZ(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mT:function(){var u,t,s,r,q,p,o=C.x()
o=H.bD(C.y,H.bD(C.z,H.bD(C.p,H.bD(C.p,H.bD(C.A,H.bD(C.B,H.bD(C.C(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kK=new H.jf(r)
$.kH=new H.jg(q)
$.kN=new H.jh(p)},
bD:function(a,b){return a(b)||b},
ls:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.ff("Illegal RegExp pattern ("+String(p)+")",a))},
n3:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mK:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kO:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jY:function(a,b,c){var u=H.n4(a,b,c)
return u},
n4:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kO(b),'g'),H.mK(c))},
i3:function i3(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h8:function h8(a,b){this.a=a
this.b=b},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
id:function id(a){this.a=a},
jn:function jn(a){this.a=a},
e9:function e9(a){this.a=a
this.b=null},
bM:function bM(){},
hN:function hN(){},
hF:function hF(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eL:function eL(a){this.a=a},
hp:function hp(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ft:function ft(a){this.a=a},
fx:function fx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bt:function bt(a,b){this.a=a
this.$ti=b},
fy:function fy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jh:function jh(a){this.a=a},
fs:function fs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cq:function(a){return a},
at:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bF(b,a))},
m5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mJ(a,b,c))
return b},
c1:function c1(){},
d0:function d0(){},
c0:function c0(){},
d1:function d1(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
d2:function d2(){},
h5:function h5(){},
ch:function ch(){},
ci:function ci(){},
cj:function cj(){},
ck:function ck(){},
mM:function(a){return J.kb(a?Object.keys(a):[],null)},
n7:function(a){return v.mangledGlobalNames[a]},
n_:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jV:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
je:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jU==null){H.mU()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.kw("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jZ()]
if(r!=null)return r
r=H.mY(a)
if(r!=null)return r
if(typeof a=="function")return C.K
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jZ(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lq:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jo(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aL(a,0,4294967295,"length",null))
return J.kb(new Array(a),b)},
kb:function(a,b){return J.jA(H.b(a,[b]))},
jA:function(a){a.fixed$length=Array
return a},
lr:function(a,b){return J.cy(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.cQ.prototype}if(typeof a=="string")return J.b7.prototype
if(a==null)return J.cS.prototype
if(typeof a=="boolean")return J.fr.prototype
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.Y)return a
return J.je(a)},
ew:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.Y)return a
return J.je(a)},
jd:function(a){if(a==null)return a
if(a.constructor==Array)return J.b6.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.Y)return a
return J.je(a)},
mO:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.Y))return J.by.prototype
return a},
jR:function(a){if(typeof a=="string")return J.b7.prototype
if(a==null)return a
if(!(a instanceof P.Y))return J.by.prototype
return a},
ex:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b8.prototype
return a}if(a instanceof P.Y)return a
return J.je(a)},
O:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).q(a,b)},
cx:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mX(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ew(a).h(a,b)},
l6:function(a,b,c){return J.ex(a).fg(a,b,c)},
l7:function(a,b,c,d){return J.ex(a).fA(a,b,c,d)},
cy:function(a,b){return J.mO(a).aK(a,b)},
ez:function(a,b){return J.jd(a).E(a,b)},
l8:function(a,b){return J.jd(a).H(a,b)},
l9:function(a){return J.ex(a).gfF(a)},
bI:function(a){return J.Q(a).gI(a)},
aY:function(a){return J.jd(a).gO(a)},
aZ:function(a){return J.ew(a).gl(a)},
k0:function(a){return J.jd(a).hg(a)},
la:function(a,b){return J.ex(a).hj(a,b)},
lb:function(a,b,c){return J.jR(a).b6(a,b,c)},
lc:function(a){return J.jR(a).hs(a)},
a5:function(a){return J.Q(a).i(a)},
a:function a(){},
fr:function fr(){},
cS:function cS(){},
cT:function cT(){},
hc:function hc(){},
by:function by(){},
b8:function b8(){},
b6:function b6(a){this.$ti=a},
jB:function jB(a){this.$ti=a},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bT:function bT(){},
cR:function cR(){},
cQ:function cQ(){},
b7:function b7(){}},P={
lU:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mC()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bE(new P.iA(s),1)).observe(u,{childList:true})
return new P.iz(s,u,t)}else if(self.setImmediate!=null)return P.mD()
return P.mE()},
lV:function(a){self.scheduleImmediate(H.bE(new P.iB(a),0))},
lW:function(a){self.setImmediate(H.bE(new P.iC(a),0))},
lX:function(a){P.jJ(C.i,a)},
jJ:function(a,b){var u=C.c.Z(a.a,1000)
return P.m3(u<0?0:u,b)},
ku:function(a,b){var u=C.c.Z(a.a,1000)
return P.m4(u<0?0:u,b)},
m3:function(a,b){var u=new P.ef()
u.dX(a,b)
return u},
m4:function(a,b){var u=new P.ef()
u.dY(a,b)
return u},
nB:function(a){return new P.bA(a,1)},
m_:function(){return C.O},
m0:function(a){return new P.bA(a,3)},
m9:function(a,b){return new P.iZ(a,[b])},
mv:function(){var u,t
for(;u=$.bC,u!=null;){$.cs=null
t=u.b
$.bC=t
if(t==null)$.cr=null
u.a.$0()}},
mA:function(){$.jO=!0
try{P.mv()}finally{$.cs=null
$.jO=!1
if($.bC!=null)$.k_().$1(P.kI())}},
my:function(a){var u=new P.dB(a)
if($.bC==null){$.bC=$.cr=u
if(!$.jO)$.k_().$1(P.kI())}else $.cr=$.cr.b=u},
mz:function(a){var u,t,s=$.bC
if(s==null){P.my(a)
$.cs=$.cr
return}u=new P.dB(a)
t=$.cs
if(t==null){u.b=s
$.bC=$.cs=u}else{u.b=t.b
$.cs=t.b=u
if(u.b==null)$.cr=u}},
kt:function(a,b){var u=$.ah
if(u===C.e)return P.jJ(a,b)
return P.jJ(a,u.fG(b))},
lR:function(a,b){var u=$.ah
if(u===C.e)return P.ku(a,b)
return P.ku(a,u.cU(b,P.dm))},
kF:function(a,b,c,d,e){var u={}
u.a=d
P.mz(new P.ja(u,e))},
mw:function(a,b,c,d){var u,t=$.ah
if(t===c)return d.$0()
$.ah=c
u=t
try{t=d.$0()
return t}finally{$.ah=u}},
mx:function(a,b,c,d,e){var u,t=$.ah
if(t===c)return d.$1(e)
$.ah=c
u=t
try{t=d.$1(e)
return t}finally{$.ah=u}},
iA:function iA(a){this.a=a},
iz:function iz(a,b,c){this.a=a
this.b=b
this.c=c},
iB:function iB(a){this.a=a},
iC:function iC(a){this.a=a},
ef:function ef(){this.c=0},
j2:function j2(a,b){this.a=a
this.b=b},
j1:function j1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b){this.a=a
this.b=b},
bB:function bB(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iZ:function iZ(a,b){this.a=a
this.$ti=b},
dB:function dB(a){this.a=a
this.b=null},
dh:function dh(){},
hI:function hI(){},
dm:function dm(){},
j5:function j5(){},
ja:function ja(a,b){this.a=a
this.b=b},
iP:function iP(){},
iQ:function iQ(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
kc:function(a,b){return new H.I([a,b])},
lu:function(a){return H.mN(a,new H.I([null,null]))},
bV:function(a){return new P.iM([a])},
jN:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
m2:function(a,b){var u=new P.dR(a,b)
u.c=a.e
return u},
lo:function(a,b,c){var u,t
if(P.jP(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.n])
$.a4.push(a)
try{P.m8(a,u)}finally{if(0>=$.a4.length)return H.f($.a4,-1)
$.a4.pop()}t=P.kr(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jy:function(a,b,c){var u,t
if(P.jP(a))return b+"..."+c
u=new P.ap(b)
$.a4.push(a)
try{t=u
t.a=P.kr(t.a,a,", ")}finally{if(0>=$.a4.length)return H.f($.a4,-1)
$.a4.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jP:function(a){var u,t
for(u=$.a4.length,t=0;t<u;++t)if(a===$.a4[t])return!0
return!1},
m8:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.d(n.gC(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gC(n);++l
if(!n.t()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gC(n);++l
for(;n.t();r=q,q=p){p=n.gC(n);++l
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
kd:function(a,b){var u,t,s=P.bV(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
ke:function(a){var u,t={}
if(P.jP(a))return"{...}"
u=new P.ap("")
try{$.a4.push(a)
u.a+="{"
t.a=!0
J.l8(a,new P.fD(t,u))
u.a+="}"}finally{if(0>=$.a4.length)return H.f($.a4,-1)
$.a4.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iM:function iM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iN:function iN(a){this.a=a
this.c=this.b=null},
dR:function dR(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fp:function fp(){},
fz:function fz(){},
u:function u(){},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
X:function X(){},
iT:function iT(){},
dS:function dS(){},
eN:function eN(){},
eR:function eR(){},
f5:function f5(){},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fl:function fl(a){this.a=a},
ii:function ii(){},
ij:function ij(){},
j3:function j3(a){this.b=0
this.c=a},
ln:function(a){if(a instanceof H.bM)return a.i(0)
return"Instance of '"+H.d(H.c4(a))+"'"},
lv:function(a,b,c){var u,t,s=J.lq(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jE:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aY(a);u.t();)t.push(u.gC(u))
if(b)return t
return J.jA(t)},
jI:function(a){var u,t=a.length,s=P.jG(0,null,t)
if(typeof s!=="number")return s.a5()
u=s<t
return H.lH(u?C.a.dI(a,0,s):a)},
lJ:function(a){return new H.fs(a,H.ls(a,!1,!0,!1,!1,!1))},
kr:function(a,b,c){var u=J.aY(b)
if(!u.t())return a
if(c.length===0){do a+=H.d(u.gC(u))
while(u.t())}else{a+=H.d(u.gC(u))
for(;u.t();)a=a+c+H.d(u.gC(u))}return a},
kD:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.l5().b
u=u.test(b)}else u=!1
if(u)return b
t=C.E.fJ(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jF(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lk:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
ll:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cI:function(a){if(a>=10)return""+a
return"0"+a},
k6:function(a){return new P.b1(1000*a)},
jw:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.ln(a)},
ld:function(a){return new P.ad(!1,null,null,a)},
jo:function(a,b,c){return new P.ad(!0,a,b,c)},
d8:function(a,b){return new P.bw(null,null,!0,a,b,"Value not in range")},
aL:function(a,b,c,d,e){return new P.bw(b,c,!0,a,d,"Invalid value")},
jG:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.aL(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.aL(b,a,c,"end",null))
return b}return c},
kn:function(a,b){if(typeof a!=="number")return a.a5()
if(a<0)throw H.c(P.aL(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.aZ(b):e
return new P.fo(u,!0,a,c,"Index out of range")},
x:function(a){return new P.ig(a)},
kw:function(a){return new P.ic(a)},
kq:function(a){return new P.c6(a)},
b0:function(a){return new P.eQ(a)},
r:function(a){return new P.dJ(a)},
jX:function(a){H.n_(a)},
au:function au(){},
aa:function aa(a,b){this.a=a
this.b=b},
M:function M(){},
b1:function b1(a){this.a=a},
f1:function f1(){},
f2:function f2(){},
bp:function bp(){},
d5:function d5(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fo:function fo(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ig:function ig(a){this.a=a},
ic:function ic(a){this.a=a},
c6:function c6(a){this.a=a},
eQ:function eQ(a){this.a=a},
hb:function hb(){},
df:function df(){},
eW:function eW(a){this.a=a},
dJ:function dJ(a){this.a=a},
ff:function ff(a,b){this.a=a
this.b=b},
fh:function fh(){},
w:function w(){},
h:function h(){},
fq:function fq(){},
af:function af(){},
bW:function bW(){},
bc:function bc(){},
a8:function a8(){},
Y:function Y(){},
n:function n(){},
ap:function ap(a){this.a=a},
mI:function(a){var u,t=J.Q(a)
if(!!t.$ib3){u=t.gcZ(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ek(a.data,a.height,a.width)},
mH:function(a){if(a instanceof P.ek)return{data:a.a,height:a.b,width:a.c}
return a},
aT:function(a){var u,t,s,r,q
if(a==null)return
u=P.kc(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mG:function(a){var u={}
a.H(0,new P.jb(u))
return u},
ek:function ek(a,b,c){this.a=a
this.b=b
this.c=c},
jb:function jb(a){this.a=a},
fb:function fb(a,b){this.a=a
this.b=b},
fc:function fc(){},
fd:function fd(){},
iL:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m1:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iO:function iO(){},
a7:function a7(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b9:function b9(){},
fw:function fw(){},
bd:function bd(){},
h9:function h9(){},
hh:function hh(){},
c5:function c5(){},
hJ:function hJ(){},
k:function k(){},
be:function be(){},
i2:function i2(){},
dP:function dP(){},
dQ:function dQ(){},
e_:function e_(){},
e0:function e0(){},
eb:function eb(){},
ec:function ec(){},
ei:function ei(){},
ej:function ej(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(a){this.a=a},
eH:function eH(){},
bl:function bl(){},
ha:function ha(){},
dC:function dC(){},
da:function da(){},
hE:function hE(){},
e7:function e7(){},
e8:function e8(){}},W={
k1:function(){var u=document.createElement("a")
return u},
jr:function(){var u=document.createElement("canvas")
return u},
lm:function(a,b,c){var u=document.body,t=(u&&C.n).ab(u,a,b,c)
t.toString
u=new H.ce(new W.a_(t),new W.f4(),[W.D])
return u.gaB(u)},
ju:function(a){return"wheel"},
bO:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ex(a)
t=u.gdu(a)
if(typeof t==="string")r=u.gdu(a)}catch(s){H.aw(s)}return r},
ka:function(a){var u=document.createElement("img")
u.src=a
return u},
iK:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kB:function(a,b,c,d){var u=W.iK(W.iK(W.iK(W.iK(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
S:function(a,b,c,d){var u=W.kG(new W.iI(c),W.j)
if(u!=null&&!0)J.l7(a,b,u,!1)
return new W.iH(a,b,u,!1)},
kA:function(a){var u=W.k1(),t=window.location
u=new W.cg(new W.iS(u,t))
u.dT(a)
return u},
lY:function(a,b,c,d){return!0},
lZ:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kC:function(){var u=P.n,t=P.kd(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.j_(t,P.bV(u),P.bV(u),P.bV(u),null)
t.dW(null,new H.fE(C.k,new W.j0(),[H.av(C.k,0),u]),s,null)
return t},
kG:function(a,b){var u=$.ah
if(u===C.e)return a
return u.cU(a,b)},
o:function o(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(){},
cB:function cB(){},
bm:function bm(){},
bn:function bn(){},
b_:function b_(){},
eS:function eS(){},
H:function H(){},
bN:function bN(){},
eT:function eT(){},
a9:function a9(){},
ak:function ak(){},
eU:function eU(){},
eV:function eV(){},
eY:function eY(){},
ae:function ae(){},
eZ:function eZ(){},
cK:function cK(){},
cL:function cL(){},
f_:function f_(){},
f0:function f0(){},
iE:function iE(a,b){this.a=a
this.b=b},
P:function P(){},
f4:function f4(){},
j:function j(){},
e:function e(){},
aC:function aC(){},
f9:function f9(){},
fa:function fa(){},
fe:function fe(){},
aD:function aD(){},
fk:function fk(){},
bR:function bR(){},
b3:function b3(){},
bS:function bS(){},
bs:function bs(){},
fA:function fA(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
aF:function aF(){},
fZ:function fZ(){},
an:function an(){},
a_:function a_(a){this.a=a},
D:function D(){},
d3:function d3(){},
aI:function aI(){},
he:function he(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hq:function hq(){},
aM:function aM(){},
hB:function hB(){},
aN:function aN(){},
hC:function hC(){},
aO:function aO(){},
hG:function hG(){},
hH:function hH(a){this.a=a},
aq:function aq(){},
di:function di(){},
hK:function hK(){},
hL:function hL(){},
c7:function c7(){},
aP:function aP(){},
ar:function ar(){},
hO:function hO(){},
hP:function hP(){},
hX:function hX(){},
aQ:function aQ(){},
bx:function bx(){},
i0:function i0(){},
i1:function i1(){},
bf:function bf(){},
ih:function ih(){},
ix:function ix(){},
bi:function bi(){},
cf:function cf(){},
iF:function iF(){},
dE:function dE(){},
iJ:function iJ(){},
dX:function dX(){},
iW:function iW(){},
iX:function iX(){},
iD:function iD(){},
iG:function iG(a){this.a=a},
iH:function iH(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iI:function iI(a){this.a=a},
cg:function cg(a){this.a=a},
J:function J(){},
d4:function d4(a){this.a=a},
h7:function h7(a){this.a=a},
h6:function h6(a,b,c){this.a=a
this.b=b
this.c=c},
e4:function e4(){},
iU:function iU(){},
iV:function iV(){},
j_:function j_(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
j0:function j0(){},
iY:function iY(){},
cO:function cO(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aH:function aH(){},
iS:function iS(a,b){this.a=a
this.b=b},
el:function el(a){this.a=a},
j4:function j4(a){this.a=a},
dD:function dD(){},
dF:function dF(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dK:function dK(){},
dL:function dL(){},
dN:function dN(){},
dO:function dO(){},
dT:function dT(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
cl:function cl(){},
cm:function cm(){},
e5:function e5(){},
e6:function e6(){},
ea:function ea(){},
ed:function ed(){},
ee:function ee(){},
cn:function cn(){},
co:function co(){},
eg:function eg(){},
eh:function eh(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
er:function er(){},
es:function es(){},
et:function et(){},
eu:function eu(){},
ev:function ev(){}},K={
L:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aS(a,0)
t=C.b.aS(b,0)
if(u>t){s=t
t=u
u=s}return new K.hi(u,t)},
q:function(a){var u=new K.hr()
u.dR(a)
return u},
ax:function ax(){},
cP:function cP(){},
bb:function bb(){},
a2:function a2(){this.a=null},
hi:function hi(a,b){this.a=a
this.b=b},
hr:function hr(){this.a=null}},L={
hZ:function(){var u=new L.hY(),t=P.n
u.a=new H.I([t,L.dg])
u.b=new H.I([t,L.dp])
u.c=P.bV(t)
return u},
dg:function dg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dn:function dn(a,b,c){this.a=a
this.b=b
this.c=c},
dp:function dp(a){this.b=a
this.c=null},
hY:function hY(){var _=this
_.d=_.c=_.b=_.a=null},
dr:function dr(a){this.b=a
this.a=this.c=null}},O={
js:function(a){var u=new O.ay([a])
u.b8(a)
return u},
ay:function ay(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bZ:function bZ(){this.b=this.a=null},
cZ:function cZ(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(a,b){this.a=a
this.b=b},
fN:function fN(){},
fO:function fO(a,b){this.a=a
this.b=b},
fP:function fP(){},
fQ:function fQ(a,b){this.a=a
this.b=b},
fR:function fR(){},
fS:function fS(a,b){this.a=a
this.b=b},
fT:function fT(){},
fG:function fG(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bY:function bY(){},
fH:function fH(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
al:function al(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fJ:function fJ(){var _=this
_.e=_.d=_.c=_.b=null},
fK:function fK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fL:function fL(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dc:function dc(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dj:function dj(){}},E={
k9:function(){var u,t=new E.aB()
t.a=""
t.b=!0
u=O.js(E.aB)
t.y=u
u.aN(t.gh1(),t.gh4())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbp(0,null)
return t},
lK:function(a,b){var u=new E.hj(a)
u.dQ(a,b)
return u},
lQ:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibn)return E.ks(a,!0,!0,!0,!1)
u=W.jr()
t=u.style
t.width="100%"
t.height="100%"
s.gcX(a).n(0,u)
return E.ks(u,!0,!0,!0,!1)},
ks:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dl(),p=C.f.cd(a,"webgl2",P.lu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lK(p,a)
u=new T.hT(p)
u.b=p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.du(a)
t=new X.fv()
t.c=new X.ab(!1,!1,!1)
t.d=P.bV(P.w)
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.aJ()
t.x=V.aJ()
t.ch=t.Q=1
u.c=t
t=new X.fB(u)
t.r=0
t.x=V.aJ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.i_(u)
t.f=V.aJ()
t.r=V.aJ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dh,P.Y]])
u.z=t
s=document
t.push(W.S(s,"contextmenu",u.geB(),!1))
u.z.push(W.S(a,"focus",u.geH(),!1))
u.z.push(W.S(a,"blur",u.ges(),!1))
u.z.push(W.S(s,"keyup",u.geL(),!1))
u.z.push(W.S(s,"keydown",u.geJ(),!1))
u.z.push(W.S(a,"mousedown",u.geP(),!1))
u.z.push(W.S(a,"mouseup",u.geT(),!1))
u.z.push(W.S(a,r,u.geR(),!1))
t=u.z
W.ju(a)
W.ju(a)
t.push(W.S(a,W.ju(a),u.geV(),!1))
u.z.push(W.S(s,r,u.geD(),!1))
u.z.push(W.S(s,"mouseup",u.geF(),!1))
u.z.push(W.S(s,"pointerlockchange",u.geX(),!1))
u.z.push(W.S(a,"touchstart",u.gfc(),!1))
u.z.push(W.S(a,"touchend",u.gf8(),!1))
u.z.push(W.S(a,"touchmove",u.gfa(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.aa(Date.now(),!1)
q.db=0
q.cF()
return q},
eJ:function eJ(){},
aB:function aB(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hk:function hk(a){this.a=a},
hl:function hl(a){this.a=a},
hm:function hm(a){this.a=a},
dl:function dl(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hW:function hW(a){this.a=a}},Z={
jM:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cq(c)),35044)
a.bindBuffer(b,null)
return new Z.dz(b,u)},
ac:function(a){return new Z.aR(a)},
dz:function dz(a,b){this.a=a
this.b=b},
cC:function cC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dA:function dA(a){this.a=a},
bL:function bL(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
br:function br(a,b,c){this.a=a
this.b=b
this.c=c},
aR:function aR(a){this.a=a}},D={
B:function(){var u=new D.bq()
u.d=0
return u},
eM:function eM(){},
bq:function bq(){var _=this
_.d=_.c=_.b=_.a=null},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
R:function R(){this.b=null},
b4:function b4(){this.b=null},
b5:function b5(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eI:function eI(){},
bo:function bo(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a1:function a1(){},
cV:function cV(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hf:function hf(){},
hD:function hD(){}},X={cD:function cD(a,b){this.a=a
this.b=b},cU:function cU(a,b){this.a=a
this.b=b},fv:function fv(){var _=this
_.d=_.c=_.b=_.a=null},cX:function cX(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fB:function fB(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ab:function ab(a,b,c){this.a=a
this.b=b
this.c=c},aG:function aG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},c_:function c_(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hg:function hg(){},dq:function dq(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},i_:function i_(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},du:function du(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jx:function(a){var u=new X.fg(),t=new V.az(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kp
if(t==null){t=V.ko(0,0,1,1)
$.kp=t}u.r=t
return u},
ki:function(a){var u,t,s=new X.d6()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.gev())
t=new D.z("mover",u,s.b)
t.b=!0
s.al(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.C().a)){s.c=1.0471975511965976
t=new D.z("fov",t,1.0471975511965976)
t.b=!0
s.al(t)}t=s.d
if(!(Math.abs(t-0.1)<$.C().a)){s.d=0.1
t=new D.z("near",t,0.1)
t.b=!0
s.al(t)}t=s.e
if(!(Math.abs(t-2000)<$.C().a)){s.e=2000
t=new D.z("far",t,2000)
t.b=!0
s.al(t)}return s},
jq:function jq(){},
fg:function fg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fn:function fn(){this.b=this.a=null},
d6:function d6(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hM:function hM(){}},V={
eO:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.az(u,t,s,1)},
n8:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dB(a-b,u)
return(a<0?a+u:a)+b},
G:function(a,b,c){if(a==null)return C.b.ad("null",c)
return C.b.ad(C.d.dw(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bG:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.G(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.ad(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jW:function(a){return C.d.hp(Math.pow(2,C.J.bY(Math.log(H.mF(a))/Math.log(2))))},
bu:function(){var u=$.kg
return u==null?$.kg=V.am(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
am:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aE(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kf:function(a,b,c){var u=c.u(0,Math.sqrt(c.D(c))),t=b.aZ(u),s=t.u(0,Math.sqrt(t.D(t))),r=u.aZ(s),q=new V.A(a.a,a.b,a.c),p=s.P(0).D(q),o=r.P(0).D(q),n=u.P(0).D(q)
return V.am(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aJ:function(){var u=$.kk
return u==null?$.kk=new V.Z(0,0):u},
kl:function(){var u=$.ao
return u==null?$.ao=new V.U(0,0,0):u},
ko:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d9(a,b,c,d)},
dy:function(){var u=$.kz
return u==null?$.kz=new V.A(0,0,0):u},
lS:function(){var u=$.ik
return u==null?$.ik=new V.A(-1,0,0):u},
jL:function(){var u=$.il
return u==null?$.il=new V.A(0,1,0):u},
lT:function(){var u=$.im
return u==null?$.im=new V.A(0,0,1):u},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
d_:function d_(a,b,c,d,e,f,g,h,i){var _=this
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
Z:function Z(a,b){this.a=a
this.b=b},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d9:function d9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
F:function F(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
n2:function(a){P.lR(C.G,new V.jl(a))},
lM:function(a){var u=new V.hw()
u.dS(a,!0)
return u},
cE:function cE(){},
jl:function jl(a){this.a=a},
eX:function eX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fi:function fi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fj:function fj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hd:function hd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hw:function hw(){this.b=this.a=null},
hy:function hy(a){this.a=a},
hx:function hx(a){this.a=a},
hz:function hz(a){this.a=a}},U={
jt:function(){var u=new U.eP()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
k5:function(a){var u=new U.cG()
u.a=a
return u},
eP:function eP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cG:function cG(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
dv:function dv(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dx:function dx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cF:function cF(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cH:function cH(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cM:function cM(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ag:function ag(){}},A={
lx:function(a,b){var u=a.b_,t=new A.fF(b,u)
t.cl(b,u)
t.dP(a,b)
return t},
ly:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gai(a3)+a4.gai(a4)+a5.gai(a5)+a6.gai(a6)+a7.gai(a7)+a8.gai(a8)+a9.gai(a9)+b0.gai(b0)+b1.gai(b1)+"_"
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
d=$.ai()
if(j){u=$.aW()
d=new Z.aR(d.a|u.a)}if(i){u=$.aV()
d=new Z.aR(d.a|u.a)}if(h){u=$.aX()
d=new Z.aR(d.a|u.a)}if(g){u=$.aU()
d=new Z.aR(d.a|u.a)}return new A.fI(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
j8:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
j9:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.j8(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ey(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
me:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.j8(b,t,"emission")
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
ma:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j9(b,t,"ambient")
b.a+="\n"},
mc:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j9(b,t,"diffuse")
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
mf:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j9(b,t,"invDiffuse")
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
ml:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j9(b,t,"specular")
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
mh:function(a,b){var u,t,s
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
mj:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.j8(b,t,"reflect")
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
mk:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.j8(b,t,"refract")
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
mb:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.ey(t)
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
if(typeof u!=="number")return u.ae()
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
md:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.ey(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.ey(t)
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
if(typeof u!=="number")return u.ae()
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
mm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.ey(t)
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
if(typeof u!=="number")return u.ae()
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
mg:function(a,b){var u,t
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
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.a.k(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
mn:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.ap("")
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
A.me(a,j)
A.ma(a,j)
A.mc(a,j)
A.mf(a,j)
A.ml(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.mj(a,j)
A.mk(a,j)}A.mh(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.mb(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.md(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.mi(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.mm(a,q[o],j)
A.mg(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.n])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.aj(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.a.k(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
mo:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aL+"];\n"
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
mq:function(a,b){var u
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
mp:function(a,b){var u
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
ms:function(a,b){var u,t
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
mt:function(a,b){var u,t
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
mr:function(a,b){var u
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
mu:function(a,b){var u
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
ey:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.aj(a,1)},
jK:function(a,b,c,d,e){var u=new A.i5(a,c,e)
u.f=d
P.lv(d,0,P.w)
return u},
cz:function cz(a,b,c){this.a=a
this.b=b
this.c=c},
eD:function eD(a){this.a=a},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(a,b){var _=this
_.hC=_.d3=_.bf=_.b_=_.aL=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hK=_.hJ=_.hI=_.bX=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.hH=_.dg=_.df=_.hG=_.de=_.dd=_.dc=_.hF=_.da=_.d9=_.d8=_.hE=_.d7=_.d6=_.hD=_.d5=_.d4=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cA:function cA(a,b){this.a=a
this.b=b},
cJ:function cJ(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
fI:function fI(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aL=b3
_.b_=b4
_.bf=b5},
c9:function c9(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ca:function ca(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cc:function cc(a,b,c,d,e,f,g,h,i,j){var _=this
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
cd:function cd(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
hA:function hA(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ds:function ds(){},
ia:function ia(a){this.a=a},
bg:function bg(a,b,c){this.a=a
this.c=b
this.d=c},
i7:function i7(a,b,c){this.a=a
this.c=b
this.d=c},
i8:function i8(a,b,c){this.a=a
this.c=b
this.d=c},
i9:function i9(a,b,c){this.a=a
this.c=b
this.d=c},
i5:function i5(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
N:function N(a,b,c){this.a=a
this.c=b
this.d=c},
i6:function i6(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
c8:function c8(a,b,c){this.a=a
this.c=b
this.d=c},
ib:function ib(a,b,c){this.a=a
this.c=b
this.d=c},
cb:function cb(a,b,c){this.a=a
this.c=b
this.d=c},
a3:function a3(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
bh:function bh(a,b,c){this.a=a
this.c=b
this.d=c}},F={
j7:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cp:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.A(u+a3,t+a1,s+a2)
q=new V.A(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.A(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j7(i)
l=F.j7(h)
k=F.n5(d,a0,new F.j6(j,F.j7(g),F.j7(f),l,m,c),b)
if(k!=null)a.h0(k)},
n5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.jH()
t=H.b([],[F.bz])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.io(g,g,new V.az(p,0,0,1),g,g,new V.Z(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.bO(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.io(g,g,new V.az(j,i,h,1),g,g,new V.Z(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.bO(d))}}u.d.fC(a+1,b+1,t)
return u},
bP:function(a,b,c){var u=new F.b2(),t=a.a
if(t==null)H.t(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.r("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.a0()
return u},
lt:function(a,b){var u=new F.bU(),t=a.a
if(t==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
u.a=a
a.c.b.push(u)
u.b=b
b.c.c.push(u)
u.a.a.c.b.push(u)
u.a.a.a0()
return u},
jH:function(){var u=new F.hs(),t=new F.ip(u)
t.b=!1
t.c=H.b([],[F.bz])
u.a=t
t=new F.hv(u)
t.b=H.b([],[F.c2])
u.b=t
t=new F.hu(u)
t.b=H.b([],[F.bU])
u.c=t
t=new F.ht(u)
t.b=H.b([],[F.b2])
u.d=t
u.e=null
return u},
io:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bz(),r=new F.iu()
r.b=H.b([],[F.c2])
s.b=r
r=new F.it()
u=[F.bU]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.iq()
u=[F.b2]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.l1()
s.e=0
r=$.ai()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aW().a)!==0?e:t
s.x=(u&$.aV().a)!==0?b:t
s.y=(u&$.aX().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.l2().a)!==0?c:t
s.ch=(u&$.bH().a)!==0?i:0
s.cx=(u&$.aU().a)!==0?a:t
return s},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
b2:function b2(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bU:function bU(){this.b=this.a=null},
c2:function c2(){this.a=null},
hs:function hs(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ht:function ht(a){this.a=a
this.b=null},
hu:function hu(a){this.a=a
this.b=null},
hv:function hv(a){this.a=a
this.b=null},
bz:function bz(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iw:function iw(a){this.a=a},
iv:function iv(a){this.a=a},
ip:function ip(a){this.a=a
this.c=this.b=null},
iq:function iq(){this.d=this.c=this.b=null},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(a,b){this.a=a
this.b=b},
it:function it(){this.c=this.b=null},
iu:function iu(){this.b=null}},T={dk:function dk(){},hQ:function hQ(){},hR:function hR(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hS:function hS(){var _=this
_.e=_.d=_.c=_.b=_.a=null},hT:function hT(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},hV:function hV(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},hU:function hU(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},Q={
kL:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5="testCanvas",a6=null,a7=34067,a8="modifiers",a9=V.lM("Test 019"),b0=W.jr()
b0.className="pageLargeCanvas"
b0.id=a5
a9.a.appendChild(b0)
u=[P.n]
a9.cO(H.b(["A test of the Material Lighting shader with an alpha texture. ","There are no mapped reflections, this is actually transparent."],u))
a9.cO(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a5)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lQ(t,!0,!0,!0,!1)
r=E.k9()
q=F.jH()
F.cp(q,a6,a6,1,1,1,0,0,1)
F.cp(q,a6,a6,1,1,0,1,0,3)
F.cp(q,a6,a6,1,1,0,0,1,2)
F.cp(q,a6,a6,1,1,-1,0,0,0)
F.cp(q,a6,a6,1,1,0,-1,0,0)
F.cp(q,a6,a6,1,1,0,0,-1,3)
q.as()
r.sbp(0,q)
p=X.jx(a6)
if(p.b){p.b=!1
u=new D.z("clearColor",!0,!1)
u.b=!0
p.al(u)}u=s.f
o=u.a
n=o.createTexture()
o.bindTexture(a7,n)
o.texParameteri(a7,10242,10497)
o.texParameteri(a7,10243,10497)
o.texParameteri(a7,10241,9729)
o.texParameteri(a7,10240,9729)
o.bindTexture(a7,a6)
m=new T.hS()
m.a=0
m.b=n
m.c=!1
m.d=0
u.aG(m,n,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aG(m,n,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aG(m,n,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aG(m,n,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aG(m,n,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aG(m,n,"../resources/maskonaive/negz.jpg",34074,!1,!1)
l=s.f.h_("../resources/AlphaWeave.png")
k=new O.cZ()
u=O.js(V.aE)
k.e=u
u.aN(k.geo(),k.geq())
u=new O.al(k,"emission")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
k.f=u
u=new O.al(k,"ambient")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
k.r=u
u=new O.al(k,"diffuse")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
k.x=u
u=new O.al(k,"invDiffuse")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
k.y=u
u=new O.fL(k,"specular")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
u.ch=100
k.z=u
u=new O.fH(k,"bump")
u.c=new A.W(!1,!1,!1)
k.Q=u
k.ch=null
u=new O.al(k,"reflect")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
k.cx=u
u=new O.fK(k,"refract")
u.c=new A.W(!1,!1,!1)
u.f=new V.T(0,0,0)
u.ch=1
k.cy=u
u=new O.fG(k,"alpha")
u.c=new A.W(!1,!1,!1)
u.f=1
k.db=u
u=new D.cV()
u.b8(D.a1)
u.e=H.b([],[D.eI])
u.f=H.b([],[D.bo])
u.r=H.b([],[D.hf])
u.x=H.b([],[D.hD])
u.z=u.y=null
u.cf(u.gem(),u.geZ(),u.gf2())
k.dx=u
o=new O.fJ()
o.b=new V.az(0,0,0,0)
o.c=1
o.d=10
o.e=!1
k.dy=o
o=u.y
u=o==null?u.y=D.B():o
u.n(0,k.gfi())
u=k.dx
o=u.z
u=o==null?u.z=D.B():o
u.n(0,k.gaE())
k.fr=null
u=k.dx
j=V.jL()
o=U.k5(V.kf(V.kl(),j,new V.A(1,-2,-3)))
i=new V.T(1,1,1)
h=new D.bo()
h.c=new V.T(1,1,1)
h.a=V.lT()
h.d=V.jL()
h.e=V.lS()
g=h.b
h.b=o
o.gp().n(0,h.gdU())
o=new D.z("mover",g,h.b)
o.b=!0
h.ao(o)
if(!h.c.q(0,i)){g=h.c
h.c=i
o=new D.z("color",g,i)
o.b=!0
h.ao(o)}u.n(0,h)
u=k.r
u.saY(0,new V.T(0.5,0.5,0.5))
u=k.x
u.saY(0,new V.T(0.6,0.6,0.6))
k.r.sc9(l)
k.x.sc9(l)
k.db.sc9(l)
f=new U.bQ()
f.b8(U.a6)
f.aN(f.gek(),f.gf0())
f.e=null
f.f=V.bu()
f.r=0
u=s.x
o=new U.dw()
h=U.jt()
h.scc(0,!0)
h.sc2(6.283185307179586)
h.sc4(0)
h.sa6(0,0)
h.sc3(100)
h.sR(0)
h.sbP(0.5)
o.b=h
e=o.gaD()
h.gp().n(0,e)
h=U.jt()
h.scc(0,!0)
h.sc2(6.283185307179586)
h.sc4(0)
h.sa6(0,0)
h.sc3(100)
h.sR(0)
h.sbP(0.5)
o.c=h
h.gp().n(0,e)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
d=new X.ab(!1,!1,!1)
g=o.d
o.d=d
h=new D.z(a8,g,d)
h.b=!0
o.N(h)
h=o.f
if(h!==!1){o.f=!1
h=new D.z("invertX",h,!1)
h.b=!0
o.N(h)}h=o.r
if(h!==!1){o.r=!1
h=new D.z("invertY",h,!1)
h.b=!0
o.N(h)}o.aW(u)
f.n(0,o)
u=s.x
o=new U.dv()
h=U.jt()
h.scc(0,!0)
h.sc2(6.283185307179586)
h.sc4(0)
h.sa6(0,0)
h.sc3(100)
h.sR(0)
h.sbP(0.2)
o.b=h
h.gp().n(0,o.gaD())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
d=new X.ab(!0,!1,!1)
g=o.c
o.c=d
h=new D.z(a8,g,d)
h.b=!0
o.N(h)
o.aW(u)
f.n(0,o)
u=s.x
o=new U.dx()
o.c=0.01
o.e=o.d=0
d=new X.ab(!1,!1,!1)
o.b=d
h=new D.z(a8,a6,d)
h.b=!0
o.N(h)
o.aW(u)
f.n(0,o)
f.n(0,U.k5(V.am(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.ki(f)
b=new M.cH()
b.a=!0
u=E.k9()
q=F.jH()
o=q.a
h=new V.A(-1,-1,1)
h=h.u(0,Math.sqrt(h.D(h)))
a=o.bd(new V.aK(1,2,4,6),V.eO(255,0,0),new V.U(-1,-1,0),new V.Z(0,1),h,a6)
h=q.a
o=new V.A(1,-1,1)
o=o.u(0,Math.sqrt(o.D(o)))
a0=h.bd(new V.aK(0,3,4,6),V.eO(0,0,255),new V.U(1,-1,0),new V.Z(1,1),o,a6)
o=q.a
h=new V.A(1,1,1)
h=h.u(0,Math.sqrt(h.D(h)))
a1=o.bd(new V.aK(0,2,5,6),V.eO(0,128,0),new V.U(1,1,0),new V.Z(1,0),h,a6)
h=q.a
o=V.aJ()
e=new V.A(-1,1,1)
e=e.u(0,Math.sqrt(e.D(e)))
a2=h.bd(new V.aK(0,2,4,7),V.eO(255,255,0),new V.U(-1,1,0),o,e,a6)
q.d.fB(H.b([a,a0,a1,a2],[F.bz]))
q.as()
u.sbp(0,q)
b.e=u
b.saX(a6)
b.sb2(0,a6)
b.sb3(a6)
u=new O.dc()
u.b=1.0471975511965976
u.d=new V.T(1,1,1)
g=u.c
u.c=m
m.gp().n(0,u.gaE())
o=new D.z("boxTexture",g,u.c)
o.b=!0
u.T(o)
b.sb3(u)
b.sb2(0,p)
b.saX(c)
a3=new M.cM()
a3.a=!0
u=O.js(E.aB)
a3.e=u
u.aN(a3.gex(),a3.gez())
a3.y=a3.x=a3.r=a3.f=null
a4=X.jx(a6)
a3.saX(a6)
a3.sb2(0,a4)
a3.sb3(a6)
a3.saX(c)
a3.sb3(k)
a3.sb2(0,p)
a3.e.n(0,r)
u=M.ag
o=H.b([b,a3],[u])
h=new M.cF()
h.b8(u)
h.e=!0
h.f=!1
h.r=null
h.aN(h.gf4(),h.gf6())
h.a_(0,o)
u=s.d
if(u!==h){if(u!=null)u.gp().S(0,s.gcn())
s.d=h
h.gp().n(0,s.gcn())
s.co()}u=s.Q
if(u==null)u=s.Q=D.B()
o=u.b
u=o==null?u.b=H.b([],[{func:1,ret:-1,args:[D.R]}]):o
u.push(new Q.jj(a9,k))
V.n2(s)},
jj:function jj(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jC.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gI:function(a){return H.c3(a)},
i:function(a){return"Instance of '"+H.d(H.c4(a))+"'"}}
J.fr.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$iau:1}
J.cS.prototype={
q:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.cT.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.hc.prototype={}
J.by.prototype={}
J.b8.prototype={
i:function(a){var u=a[$.kR()]
if(u==null)return this.dM(a)
return"JavaScript function for "+H.d(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b6.prototype={
hh:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.d8(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.O(a[u],b)){a.splice(u,1)
return!0}return!1},
a_:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.b0(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fY:function(a){return this.k(a,"")},
fV:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.b0(a))}throw H.c(H.jz())},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dI:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aL(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aL(c,b,u,"end",null))
if(b===c)return H.b([],[H.av(a,0)])
return H.b(a.slice(b,c),[H.av(a,0)])},
gbh:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.jz())},
cQ:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.b0(a))}return!1},
aP:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.lP(a,b==null?J.m7():b)},
dH:function(a){return this.aP(a,null)},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.O(a[u],b))return!0
return!1},
i:function(a){return P.jy(a,"[","]")},
gO:function(a){return new J.a0(a,a.length)},
gI:function(a){return H.c3(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jo(b,u,null))
if(b<0)throw H.c(P.aL(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bF(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bF(a,b))
a[b]=c},
$ip:1,
$ih:1}
J.jB.prototype={}
J.a0.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bT.prototype={
aK:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aS(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
hp:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
bY:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
ag:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dw:function(a,b){var u
if(b>20)throw H.c(P.aL(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gI:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
dB:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dO:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cJ(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.cJ(a,b)},
cJ:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
bb:function(a,b){var u
if(a>0)u=this.fq(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fq:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia8:1}
J.cR.prototype={$iw:1}
J.cQ.prototype={}
J.b7.prototype={
bN:function(a,b){if(b<0)throw H.c(H.bF(a,b))
if(b>=a.length)H.t(H.bF(a,b))
return a.charCodeAt(b)},
aS:function(a,b){if(b>=a.length)throw H.c(H.bF(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.jo(b,null,null))
return a+b},
bq:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b6:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d8(b,null))
if(b>c)throw H.c(P.d8(b,null))
if(c>a.length)throw H.c(P.d8(c,null))
return a.substring(b,c)},
aj:function(a,b){return this.b6(a,b,null)},
hs:function(a){return a.toLowerCase()},
v:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.D)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ad:function(a,b){var u=b-a.length
if(u<=0)return a
return this.v(" ",u)+a},
aK:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aS(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gI:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$in:1}
H.m.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bN(this.a,b)},
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ah:function(){return[P.w]}}
H.p.prototype={}
H.cW.prototype={
gO:function(a){return new H.ba(this,this.gl(this))},
bo:function(a,b){return this.dL(0,b)}}
H.ba.prototype={
gC:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.ew(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.b0(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.E(s,u);++t.c
return!0}}
H.bX.prototype={
gO:function(a){return new H.cY(J.aY(this.a),this.b)},
gl:function(a){return J.aZ(this.a)},
E:function(a,b){return this.b.$1(J.ez(this.a,b))},
$ah:function(a,b){return[b]}}
H.f3.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cY.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gC(t))
return!0}u.a=null
return!1},
gC:function(a){return this.a}}
H.fE.prototype={
gl:function(a){return J.aZ(this.a)},
E:function(a,b){return this.b.$1(J.ez(this.a,b))},
$ap:function(a,b){return[b]},
$acW:function(a,b){return[b]},
$ah:function(a,b){return[b]}}
H.ce.prototype={
gO:function(a){return new H.iy(J.aY(this.a),this.b)}}
H.iy.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gC(u)))return!0
return!1},
gC:function(a){var u=this.a
return u.gC(u)}}
H.cN.prototype={}
H.ie.prototype={
m:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dt.prototype={}
H.i3.prototype={
ac:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h8.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fu.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.id.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jn.prototype={
$1:function(a){if(!!J.Q(a).$ibp)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.e9.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bM.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cu(t==null?"unknown":t)+"'"},
ghv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hN.prototype={}
H.hF.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cu(u)+"'"}}
H.bJ.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.c3(this.a)
else u=typeof t!=="object"?J.bI(t):H.c3(t)
return(u^H.c3(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.c4(u))+"'")}}
H.eL.prototype={
i:function(a){return this.a}}
H.hp.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ga3:function(a){return new H.bt(this,[H.av(this,0)])},
ghu:function(a){var u=this,t=H.av(u,0)
return H.lw(new H.bt(u,[t]),new H.ft(u),t,H.av(u,1))},
fI:function(a,b){var u=this.b
if(u==null)return!1
return this.e6(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b9(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b9(r,b)
s=t==null?null:t.b
return s}else return q.fX(b)},
fX:function(a){var u,t,s=this.d
if(s==null)return
u=this.cA(s,J.bI(a)&0x3ffffff)
t=this.di(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cq(u==null?o.b=o.bF():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cq(t==null?o.c=o.bF():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bF()
r=J.bI(b)&0x3ffffff
q=o.cA(s,r)
if(q==null)o.bI(s,r,[o.bG(b,c)])
else{p=o.di(q,b)
if(p>=0)q[p].b=c
else q.push(o.bG(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.b0(u))
t=t.c}},
cq:function(a,b,c){var u=this.b9(a,b)
if(u==null)this.bI(a,b,this.bG(b,c))
else u.b=c},
eh:function(){this.r=this.r+1&67108863},
bG:function(a,b){var u,t=this,s=new H.fx(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eh()
return s},
di:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1},
i:function(a){return P.ke(this)},
b9:function(a,b){return a[b]},
cA:function(a,b){return a[b]},
bI:function(a,b,c){a[b]=c},
ea:function(a,b){delete a[b]},
e6:function(a,b){return this.b9(a,b)!=null},
bF:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bI(t,u,t)
this.ea(t,u)
return t}}
H.ft.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.av(u,1),args:[H.av(u,0)]}}}
H.fx.prototype={}
H.bt.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fy(u,u.r)
t.c=u.e
return t}}
H.fy.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b0(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jf.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.jg.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jh.prototype={
$1:function(a){return this.a(a)}}
H.fs.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.c1.prototype={}
H.d0.prototype={
gl:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.c0.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]},
m:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.M]},
$au:function(){return[P.M]},
$ih:1,
$ah:function(){return[P.M]}}
H.d1.prototype={
m:function(a,b,c){H.at(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ih:1,
$ah:function(){return[P.w]}}
H.h0.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.h1.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.h2.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.h3.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.h4.prototype={
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.d2.prototype={
gl:function(a){return a.length},
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.h5.prototype={
gl:function(a){return a.length},
h:function(a,b){H.at(b,a,a.length)
return a[b]}}
H.ch.prototype={}
H.ci.prototype={}
H.cj.prototype={}
H.ck.prototype={}
P.iA.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iz.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iB.prototype={
$0:function(){this.a.$0()}}
P.iC.prototype={
$0:function(){this.a.$0()}}
P.ef.prototype={
dX:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bE(new P.j2(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
dY:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bE(new P.j1(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idm:1}
P.j2.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j1.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dO(u,q)}s.c=r
t.d.$1(s)}}
P.bA.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bB.prototype={
gC:function(a){var u=this.c
if(u==null)return this.b
return u.gC(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bA){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aY(u)
if(!!r.$ibB){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iZ.prototype={
gO:function(a){return new P.bB(this.a())}}
P.dB.prototype={}
P.dh.prototype={}
P.hI.prototype={}
P.dm.prototype={}
P.j5.prototype={}
P.ja.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d5():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iP.prototype={
hl:function(a){var u,t,s,r=null
try{if(C.e===$.ah){a.$0()
return}P.mw(r,r,this,a)}catch(s){u=H.aw(s)
t=H.jT(s)
P.kF(r,r,this,u,t)}},
hm:function(a,b){var u,t,s,r=null
try{if(C.e===$.ah){a.$1(b)
return}P.mx(r,r,this,a,b)}catch(s){u=H.aw(s)
t=H.jT(s)
P.kF(r,r,this,u,t)}},
hn:function(a,b){return this.hm(a,b,null)},
fG:function(a){return new P.iQ(this,a)},
cU:function(a,b){return new P.iR(this,a,b)}}
P.iQ.prototype={
$0:function(){return this.a.hl(this.b)}}
P.iR.prototype={
$1:function(a){return this.a.hn(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iM.prototype={
gO:function(a){var u=new P.dR(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.e4(b)
return t}},
e4:function(a){var u=this.d
if(u==null)return!1
return this.bw(this.cz(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cr(u==null?s.b=P.jN():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cr(t==null?s.c=P.jN():t,b)}else return s.dZ(0,b)},
dZ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jN()
u=s.ct(b)
t=r[u]
if(t==null)r[u]=[s.bt(b)]
else{if(s.bw(t,b)>=0)return!1
t.push(s.bt(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ff(this.c,b)
else return this.fe(0,b)},
fe:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cz(r,b)
t=s.bw(u,b)
if(t<0)return!1
s.cL(u.splice(t,1)[0])
return!0},
cr:function(a,b){if(a[b]!=null)return!1
a[b]=this.bt(b)
return!0},
ff:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cL(u)
delete a[b]
return!0},
cs:function(){this.r=1073741823&this.r+1},
bt:function(a){var u,t=this,s=new P.iN(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cs()
return s},
cL:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cs()},
ct:function(a){return J.bI(a)&1073741823},
cz:function(a,b){return a[this.ct(b)]},
bw:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.O(a[t].a,b))return t
return-1}}
P.iN.prototype={}
P.dR.prototype={
gC:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.b0(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fp.prototype={}
P.fz.prototype={$ip:1,$ih:1}
P.u.prototype={
gO:function(a){return new H.ba(a,this.gl(a))},
E:function(a,b){return this.h(a,b)},
hr:function(a,b){var u,t,s=this,r=H.b([],[H.mP(s,a,"u",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hq:function(a){return this.hr(a,!0)},
i:function(a){return P.jy(a,"[","]")}}
P.fC.prototype={}
P.fD.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:8}
P.X.prototype={
H:function(a,b){var u,t
for(u=J.aY(this.ga3(a));u.t();){t=u.gC(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aZ(this.ga3(a))},
i:function(a){return P.ke(a)}}
P.iT.prototype={
a_:function(a,b){var u
for(u=J.aY(b);u.t();)this.n(0,u.gC(u))},
i:function(a){return P.jy(this,"{","}")},
E:function(a,b){var u,t,s
P.kn(b,"index")
for(u=P.m2(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
$ip:1,
$ih:1}
P.dS.prototype={}
P.eN.prototype={}
P.eR.prototype={}
P.f5.prototype={}
P.fm.prototype={
i:function(a){return this.a}}
P.fl.prototype={
e7:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.ap("")
if(r>b)q.a+=C.b.b6(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.lb(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.ii.prototype={}
P.ij.prototype={
fJ:function(a){var u,t,s,r=P.jG(0,null,a.length)
if(typeof r!=="number")return r.G()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j3(t)
if(s.ec(a,0,r)!==r)s.cM(C.b.bN(a,r-1),0)
return new Uint8Array(t.subarray(0,H.m5(0,s.b,t.length)))}}
P.j3.prototype={
cM:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
ec:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bN(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aS(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cM(r,C.b.aS(a,p)))s=p}else if(r<=2047){q=n.b
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
P.au.prototype={}
P.aa.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aa&&this.a===b.a&&!0},
aK:function(a,b){return C.c.aK(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.bb(u,30))&1073741823},
i:function(a){var u=this,t=P.lk(H.lG(u)),s=P.cI(H.lE(u)),r=P.cI(H.lA(u)),q=P.cI(H.lB(u)),p=P.cI(H.lD(u)),o=P.cI(H.lF(u)),n=P.ll(H.lC(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.b1.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.b1&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aK:function(a,b){return C.c.aK(this.a,b.a)},
i:function(a){var u,t,s,r=new P.f2(),q=this.a
if(q<0)return"-"+new P.b1(0-q).i(0)
u=r.$1(C.c.Z(q,6e7)%60)
t=r.$1(C.c.Z(q,1e6)%60)
s=new P.f1().$1(q%1e6)
return""+C.c.Z(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.f1.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f2.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bp.prototype={}
P.d5.prototype={
i:function(a){return"Throw of null."}}
P.ad.prototype={
gbv:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbu:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbv()+o+u
if(!q.a)return t
s=q.gbu()
r=P.jw(q.b)
return t+s+": "+r}}
P.bw.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fo.prototype={
gbv:function(){return"RangeError"},
gbu:function(){var u,t=this.b
if(typeof t!=="number")return t.a5()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.ig.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.ic.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c6.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eQ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jw(u)+"."}}
P.hb.prototype={
i:function(a){return"Out of Memory"},
$ibp:1}
P.df.prototype={
i:function(a){return"Stack Overflow"},
$ibp:1}
P.eW.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dJ.prototype={
i:function(a){return"Exception: "+this.a}}
P.ff.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.b6(s,0,75)+"...":s
return t+"\n"+r}}
P.fh.prototype={}
P.w.prototype={}
P.h.prototype={
bo:function(a,b){return new H.ce(this,b,[H.jS(this,"h",0)])},
gl:function(a){var u,t=this.gO(this)
for(u=0;t.t();)++u
return u},
gaB:function(a){var u,t=this.gO(this)
if(!t.t())throw H.c(H.jz())
u=t.gC(t)
if(t.t())throw H.c(H.lp())
return u},
E:function(a,b){var u,t,s
P.kn(b,"index")
for(u=this.gO(this),t=0;u.t();){s=u.gC(u)
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
i:function(a){return P.lo(this,"(",")")}}
P.fq.prototype={}
P.af.prototype={$ip:1,$ih:1}
P.bW.prototype={}
P.bc.prototype={
gI:function(a){return P.Y.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.Y.prototype={constructor:P.Y,$iY:1,
q:function(a,b){return this===b},
gI:function(a){return H.c3(this)},
i:function(a){return"Instance of '"+H.d(H.c4(this))+"'"},
toString:function(){return this.i(this)}}
P.n.prototype={}
P.ap.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.eA.prototype={
gl:function(a){return a.length}}
W.eB.prototype={
i:function(a){return String(a)}}
W.eC.prototype={
i:function(a){return String(a)}}
W.cB.prototype={}
W.bm.prototype={$ibm:1}
W.bn.prototype={
cd:function(a,b,c){if(c!=null)return a.getContext(b,P.mG(c))
return a.getContext(b)},
dA:function(a,b){return this.cd(a,b,null)},
$ibn:1}
W.b_.prototype={
gl:function(a){return a.length}}
W.eS.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.bN.prototype={
gl:function(a){return a.length}}
W.eT.prototype={}
W.a9.prototype={}
W.ak.prototype={}
W.eU.prototype={
gl:function(a){return a.length}}
W.eV.prototype={
gl:function(a){return a.length}}
W.eY.prototype={
gl:function(a){return a.length}}
W.ae.prototype={$iae:1}
W.eZ.prototype={
i:function(a){return String(a)}}
W.cK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a7,P.a8]]},
$iy:1,
$ay:function(){return[[P.a7,P.a8]]},
$au:function(){return[[P.a7,P.a8]]},
$ih:1,
$ah:function(){return[[P.a7,P.a8]]}}
W.cL.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaA(a))+" x "+H.d(this.gau(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia7&&a.left===u.gbi(b)&&a.top===u.gbm(b)&&this.gaA(a)===u.gaA(b)&&this.gau(a)===u.gau(b)},
gI:function(a){return W.kB(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gaA(a)),C.d.gI(this.gau(a)))},
gcV:function(a){return a.bottom},
gau:function(a){return a.height},
gbi:function(a){return a.left},
gc8:function(a){return a.right},
gbm:function(a){return a.top},
gaA:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a8]}}
W.f_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.n]},
$iy:1,
$ay:function(){return[P.n]},
$au:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]}}
W.f0.prototype={
gl:function(a){return a.length}}
W.iE.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.hq(this)
return new J.a0(u,u.length)},
$ap:function(){return[W.P]},
$au:function(){return[W.P]},
$ah:function(){return[W.P]}}
W.P.prototype={
gfF:function(a){return new W.iG(a)},
gcX:function(a){return new W.iE(a,a.children)},
gcY:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a5()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a5()
if(r<0)r=-r*0
return new P.a7(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
ab:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.k8
if(u==null){u=H.b([],[W.aH])
t=new W.d4(u)
u.push(W.kA(null))
u.push(W.kC())
$.k8=t
d=t}else d=u
u=$.k7
if(u==null){u=new W.el(d)
$.k7=u
c=u}else{u.a=d
c=u}}if($.aA==null){u=document
t=u.implementation.createHTMLDocument("")
$.aA=t
$.jv=t.createRange()
s=$.aA.createElement("base")
s.href=u.baseURI
$.aA.head.appendChild(s)}u=$.aA
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aA
if(!!this.$ibm)r=u.body
else{r=u.createElement(a.tagName)
$.aA.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.M,a.tagName)){$.jv.selectNodeContents(r)
q=$.jv.createContextualFragment(b)}else{r.innerHTML=b
q=$.aA.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aA.body
if(r==null?u!=null:r!==u)J.k0(r)
c.ce(q)
document.adoptNode(q)
return q},
fL:function(a,b,c){return this.ab(a,b,c,null)},
dD:function(a,b){a.textContent=null
a.appendChild(this.ab(a,b,null,null))},
$iP:1,
gdu:function(a){return a.tagName}}
W.f4.prototype={
$1:function(a){return!!J.Q(a).$iP}}
W.j.prototype={$ij:1}
W.e.prototype={
fA:function(a,b,c,d){if(c!=null)this.e_(a,b,c,!1)},
e_:function(a,b,c,d){return a.addEventListener(b,H.bE(c,1),!1)}}
W.aC.prototype={$iaC:1}
W.f9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aC]},
$iy:1,
$ay:function(){return[W.aC]},
$au:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]}}
W.fa.prototype={
gl:function(a){return a.length}}
W.fe.prototype={
gl:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.fk.prototype={
gl:function(a){return a.length}}
W.bR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$iy:1,
$ay:function(){return[W.D]},
$au:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]}}
W.b3.prototype={$ib3:1,
gcZ:function(a){return a.data}}
W.bS.prototype={$ibS:1}
W.bs.prototype={$ibs:1}
W.fA.prototype={
i:function(a){return String(a)}}
W.fU.prototype={
gl:function(a){return a.length}}
W.fV.prototype={
h:function(a,b){return P.aT(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aT(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.n])
this.H(a,new W.fW(u))
return u},
gl:function(a){return a.size},
$aX:function(){return[P.n,null]}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
h:function(a,b){return P.aT(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aT(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.n])
this.H(a,new W.fY(u))
return u},
gl:function(a){return a.size},
$aX:function(){return[P.n,null]}}
W.fY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aF.prototype={$iaF:1}
W.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$iy:1,
$ay:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ih:1,
$ah:function(){return[W.aF]}}
W.an.prototype={$ian:1}
W.a_.prototype={
gaB:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.kq("No elements"))
if(t>1)throw H.c(P.kq("More than one element"))
return u.firstChild},
a_:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gO:function(a){var u=this.a.childNodes
return new W.cO(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.D]},
$au:function(){return[W.D]},
$ah:function(){return[W.D]}}
W.D.prototype={
hg:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hj:function(a,b){var u,t
try{u=a.parentNode
J.l6(u,b,a)}catch(t){H.aw(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dK(a):u},
fg:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.d3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$iy:1,
$ay:function(){return[W.D]},
$au:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]}}
W.aI.prototype={$iaI:1,
gl:function(a){return a.length}}
W.he.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aI]},
$iy:1,
$ay:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ih:1,
$ah:function(){return[W.aI]}}
W.hn.prototype={
h:function(a,b){return P.aT(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aT(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.n])
this.H(a,new W.ho(u))
return u},
gl:function(a){return a.size},
$aX:function(){return[P.n,null]}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hq.prototype={
gl:function(a){return a.length}}
W.aM.prototype={$iaM:1}
W.hB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aM]},
$iy:1,
$ay:function(){return[W.aM]},
$au:function(){return[W.aM]},
$ih:1,
$ah:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.hC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aN]},
$iy:1,
$ay:function(){return[W.aN]},
$au:function(){return[W.aN]},
$ih:1,
$ah:function(){return[W.aN]}}
W.aO.prototype={$iaO:1,
gl:function(a){return a.length}}
W.hG.prototype={
h:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.b([],[P.n])
this.H(a,new W.hH(u))
return u},
gl:function(a){return a.length},
$aX:function(){return[P.n,P.n]}}
W.hH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.di.prototype={
ab:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=W.lm("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a_(t).a_(0,new W.a_(u))
return t}}
W.hK.prototype={
ab:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.a_(u)
s=u.gaB(u)
s.toString
u=new W.a_(s)
r=u.gaB(u)
t.toString
r.toString
new W.a_(t).a_(0,new W.a_(r))
return t}}
W.hL.prototype={
ab:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.br(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.u.ab(u.createElement("table"),b,c,d)
u.toString
u=new W.a_(u)
s=u.gaB(u)
t.toString
s.toString
new W.a_(t).a_(0,new W.a_(s))
return t}}
W.c7.prototype={$ic7:1}
W.aP.prototype={$iaP:1}
W.ar.prototype={$iar:1}
W.hO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ar]},
$iy:1,
$ay:function(){return[W.ar]},
$au:function(){return[W.ar]},
$ih:1,
$ah:function(){return[W.ar]}}
W.hP.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aP]},
$iy:1,
$ay:function(){return[W.aP]},
$au:function(){return[W.aP]},
$ih:1,
$ah:function(){return[W.aP]}}
W.hX.prototype={
gl:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.bx.prototype={$ibx:1}
W.i0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aQ]},
$iy:1,
$ay:function(){return[W.aQ]},
$au:function(){return[W.aQ]},
$ih:1,
$ah:function(){return[W.aQ]}}
W.i1.prototype={
gl:function(a){return a.length}}
W.bf.prototype={}
W.ih.prototype={
i:function(a){return String(a)}}
W.ix.prototype={
gl:function(a){return a.length}}
W.bi.prototype={
gfO:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfN:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibi:1}
W.cf.prototype={
fh:function(a,b){return a.requestAnimationFrame(H.bE(b,1))},
eb:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.H]},
$iy:1,
$ay:function(){return[W.H]},
$au:function(){return[W.H]},
$ih:1,
$ah:function(){return[W.H]}}
W.dE.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia7&&a.left===u.gbi(b)&&a.top===u.gbm(b)&&a.width===u.gaA(b)&&a.height===u.gau(b)},
gI:function(a){return W.kB(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gau:function(a){return a.height},
gaA:function(a){return a.width}}
W.iJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aD]},
$iy:1,
$ay:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]}}
W.dX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.D]},
$iy:1,
$ay:function(){return[W.D]},
$au:function(){return[W.D]},
$ih:1,
$ah:function(){return[W.D]}}
W.iW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aO]},
$iy:1,
$ay:function(){return[W.aO]},
$au:function(){return[W.aO]},
$ih:1,
$ah:function(){return[W.aO]}}
W.iX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aq]},
$iy:1,
$ay:function(){return[W.aq]},
$au:function(){return[W.aq]},
$ih:1,
$ah:function(){return[W.aq]}}
W.iD.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.n])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aX:function(){return[P.n,P.n]}}
W.iG.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.ga3(this).length}}
W.iH.prototype={}
W.iI.prototype={
$1:function(a){return this.a.$1(a)}}
W.cg.prototype={
dT:function(a){var u
if($.dM.a===0){for(u=0;u<262;++u)$.dM.m(0,C.L[u],W.mR())
for(u=0;u<12;++u)$.dM.m(0,C.l[u],W.mS())}},
aI:function(a){return $.l4().K(0,W.bO(a))},
am:function(a,b,c){var u=$.dM.h(0,H.d(W.bO(a))+"::"+b)
if(u==null)u=$.dM.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaH:1}
W.J.prototype={
gO:function(a){return new W.cO(a,this.gl(a))}}
W.d4.prototype={
aI:function(a){return C.a.cQ(this.a,new W.h7(a))},
am:function(a,b,c){return C.a.cQ(this.a,new W.h6(a,b,c))},
$iaH:1}
W.h7.prototype={
$1:function(a){return a.aI(this.a)}}
W.h6.prototype={
$1:function(a){return a.am(this.a,this.b,this.c)}}
W.e4.prototype={
dW:function(a,b,c,d){var u,t,s
this.a.a_(0,c)
u=b.bo(0,new W.iU())
t=b.bo(0,new W.iV())
this.b.a_(0,u)
s=this.c
s.a_(0,C.N)
s.a_(0,t)},
aI:function(a){return this.a.K(0,W.bO(a))},
am:function(a,b,c){var u=this,t=W.bO(a),s=u.c
if(s.K(0,H.d(t)+"::"+b))return u.d.fD(c)
else if(s.K(0,"*::"+b))return u.d.fD(c)
else{s=u.b
if(s.K(0,H.d(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.d(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$iaH:1}
W.iU.prototype={
$1:function(a){return!C.a.K(C.l,a)}}
W.iV.prototype={
$1:function(a){return C.a.K(C.l,a)}}
W.j_.prototype={
am:function(a,b,c){if(this.dN(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.j0.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iY.prototype={
aI:function(a){var u=J.Q(a)
if(!!u.$ic5)return!1
u=!!u.$ik
if(u&&W.bO(a)==="foreignObject")return!1
if(u)return!0
return!1},
am:function(a,b,c){if(b==="is"||C.b.bq(b,"on"))return!1
return this.aI(a)},
$iaH:1}
W.cO.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cx(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gC:function(a){return this.d}}
W.aH.prototype={}
W.iS.prototype={}
W.el.prototype={
ce:function(a){new W.j4(this).$2(a,null)},
aV:function(a,b){if(b==null)J.k0(a)
else b.removeChild(a)},
fl:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.l9(a)
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
try{t=J.a5(a)}catch(r){H.aw(r)}try{s=W.bO(a)
this.fk(a,b,p,t,s,o,n)}catch(r){if(H.aw(r) instanceof P.ad)throw r
else{this.aV(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
fk:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aV(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aI(a)){p.aV(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.am(a,"is",g)){p.aV(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.b(u.slice(0),[H.av(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.am(a,J.lc(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$ic7)p.ce(a.content)}}
W.j4.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fl(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aV(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aw(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dD.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.ea.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.cn.prototype={}
W.co.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.es.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.ev.prototype={}
P.ek.prototype={$ib3:1,
gcZ:function(a){return this.a}}
P.jb.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.fb.prototype={
gba:function(){var u=this.b,t=H.jS(u,"u",0)
return new H.bX(new H.ce(u,new P.fc(),[t]),new P.fd(),[t,W.P])},
m:function(a,b,c){var u=this.gba()
J.la(u.b.$1(J.ez(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aZ(this.gba().a)},
h:function(a,b){var u=this.gba()
return u.b.$1(J.ez(u.a,b))},
gO:function(a){var u=P.jE(this.gba(),!1,W.P)
return new J.a0(u,u.length)},
$ap:function(){return[W.P]},
$au:function(){return[W.P]},
$ah:function(){return[W.P]}}
P.fc.prototype={
$1:function(a){return!!J.Q(a).$iP}}
P.fd.prototype={
$1:function(a){return H.i(a,"$iP")}}
P.iO.prototype={
gc8:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
gcV:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.d(u.a)+", "+H.d(u.b)+") "+H.d(u.c)+" x "+H.d(u.d)},
q:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia7){t=q.a
if(t==u.gbi(b)){s=q.b
if(s==u.gbm(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gc8(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcV(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.bI(t),r=u.b,q=J.bI(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.m1(P.iL(P.iL(P.iL(P.iL(0,s),q),p),t))}}
P.a7.prototype={
gbi:function(a){return this.a},
gbm:function(a){return this.b},
gaA:function(a){return this.c},
gau:function(a){return this.d}}
P.b9.prototype={$ib9:1}
P.fw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b9]},
$au:function(){return[P.b9]},
$ih:1,
$ah:function(){return[P.b9]}}
P.bd.prototype={$ibd:1}
P.h9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.bd]},
$au:function(){return[P.bd]},
$ih:1,
$ah:function(){return[P.bd]}}
P.hh.prototype={
gl:function(a){return a.length}}
P.c5.prototype={$ic5:1}
P.hJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.n]},
$au:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]}}
P.k.prototype={
gcX:function(a){return new P.fb(a,new W.a_(a))},
ab:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aH])
p.push(W.kA(null))
p.push(W.kC())
p.push(new W.iY())
c=new W.el(new W.d4(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fL(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a_(s)
q=p.gaB(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.be.prototype={$ibe:1}
P.i2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.be]},
$au:function(){return[P.be]},
$ih:1,
$ah:function(){return[P.be]}}
P.dP.prototype={}
P.dQ.prototype={}
P.e_.prototype={}
P.e0.prototype={}
P.eb.prototype={}
P.ec.prototype={}
P.ei.prototype={}
P.ej.prototype={}
P.eE.prototype={
gl:function(a){return a.length}}
P.eF.prototype={
h:function(a,b){return P.aT(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aT(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.n])
this.H(a,new P.eG(u))
return u},
gl:function(a){return a.size},
$aX:function(){return[P.n,null]}}
P.eG.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eH.prototype={
gl:function(a){return a.length}}
P.bl.prototype={}
P.ha.prototype={
gl:function(a){return a.length}}
P.dC.prototype={}
P.da.prototype={
dv:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$ib3)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mH(g))
return}if(!!t.$ibS)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.ld("Incorrect number or type of arguments"))}}
P.hE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return P.aT(a.item(b))},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
E:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bW,,,]]},
$au:function(){return[[P.bW,,,]]},
$ih:1,
$ah:function(){return[[P.bW,,,]]}}
P.e7.prototype={}
P.e8.prototype={}
K.ax.prototype={
av:function(a,b){return!0},
i:function(a){return"all"}}
K.cP.prototype={
av:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].av(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bb.prototype={}
K.a2.prototype={
av:function(a,b){return!this.dJ(0,b)},
i:function(a){return"!["+this.ci(0)+"]"}}
K.hi.prototype={
av:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jF(this.a),t=H.jF(this.b)
return u+".."+t}}
K.hr.prototype={
dR:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.au])
for(s=new H.ba(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.jE(new H.bt(t,[u]),!0,u)
C.a.dH(r)
this.a=r},
av:function(a,b){return C.a.K(this.a,b)},
i:function(a){return P.jI(this.a)}}
L.dg.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dr(this.a.j(0,b))
r.a=H.b([],[K.bb])
r.c=!1
this.c.push(r)
return r},
fU:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.av(0,a))return r}return},
i:function(a){return this.b},
cK:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.K(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bt(n,[H.av(n,0)]),n=n.gO(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.K(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dn.prototype={
i:function(a){var u=H.jY(this.b,"\n","\\n"),t=H.jY(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dp.prototype={
ax:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hY.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dg(this,b)
u.c=H.b([],[L.dr])
this.a.m(0,b,u)}return u},
M:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dp(a)
u=P.n
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
ca:function(a){return this.ht(a)},
ht:function(a){var u=this
return P.m9(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$ca(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.hh(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fU(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jI(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.x("removeRange"))
P.jG(0,m,d.length)
d.splice(0,m-0)
C.a.a_(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.K(0,p.a)?7:8
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
if(g.d!=null){j=P.jI(e)
i=g.d
h=i.c.h(0,j)
p=new L.dn(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.K(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.m_()
case 1:return P.m0(q)}}},L.dn)},
i:function(a){var u,t=new P.ap(""),s=this.d
if(s!=null)t.a=s.cK()+"\n"
for(s=this.a,s=s.ghu(s),s=new H.cY(J.aY(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cK()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dr.prototype={
i:function(a){return this.b.b+": "+this.ci(0)}}
O.ay.prototype={
b8:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cf:function(a,b,c){this.b=b
this.c=a},
aN:function(a,b){return this.cf(a,null,b)},
cD:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cm:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.a0(u,u.length)},
E:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jS(s,"ay",0)]
if(s.cD(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cm(t,H.b([b],r))}},
a_:function(a,b){var u,t
if(this.cD(b)){u=this.a
t=u.length
C.a.a_(u,b)
this.cm(t,b)}},
$ih:1}
O.bZ.prototype={
gl:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
aC:function(){var u=this.b
if(u!=null)u.w(null)},
gX:function(a){var u=this.a
if(u.length>0)return C.a.gbh(u)
else return V.bu()},
bl:function(a){var u=this.a
if(a==null)u.push(V.bu())
else u.push(a)
this.aC()},
aw:function(){var u=this.a
if(u.length>0){u.pop()
this.aC()}}}
E.eJ.prototype={}
E.aB.prototype={
sbp:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().S(0,s.gdn())
u=s.c
if(u!=null)u.gp().n(0,s.gdn())
t=new D.z("shape",r,s.c)
t.b=!0
s.bj(t)}},
ah:function(a,b){var u
for(u=this.y.a,u=new J.a0(u,u.length);u.t();)u.d.ah(0,b)},
a8:function(a){var u,t=this,s=a.dx
s.a.push(s.gX(s))
s.aC()
a.c7(t.f)
s=a.dy
u=(s&&C.a).gbh(s)
if(u!=null&&t.d!=null)u.ds(a,t)
for(s=t.y.a,s=new J.a0(s,s.length);s.t();)s.d.a8(a)
a.c6()
a.dx.aw()},
bj:function(a){var u=this.z
if(u!=null)u.w(a)},
a0:function(){return this.bj(null)},
dq:function(a){this.e=null
this.bj(a)},
h6:function(){return this.dq(null)},
dm:function(a){this.bj(a)},
h3:function(){return this.dm(null)},
h2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdl(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a0()},
h5:function(a,b){var u,t
for(u=b.gO(b),t=this.gdl();u.t();)u.gC(u).gp().S(0,t)
this.a0()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hj.prototype={
dQ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aa(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bZ()
t=[V.aE]
u.a=H.b([],t)
u.gp().n(0,new E.hk(s))
s.cy=u
u=new O.bZ()
u.a=H.b([],t)
u.gp().n(0,new E.hl(s))
s.db=u
u=new O.bZ()
u.a=H.b([],t)
u.gp().n(0,new E.hm(s))
s.dx=u
u=H.b([],[O.dj])
s.dy=u
u.push(null)
s.fr=new H.I([P.n,A.db])},
ghf:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gX(s)
u=t.db
u=t.z=s.v(0,u.gX(u))
s=u}return s},
c7:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gbh(u):a)},
c6:function(){var u=this.dy
if(u.length>1)u.pop()},
cP:function(a){var u=a.b
if(u.length===0)throw H.c(P.r("May not cache a shader with no name."))
if(this.fr.fI(0,u))throw H.c(P.r('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hk.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hl.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hm.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dl.prototype={
cp:function(a){this.dt()},
co:function(){return this.cp(null)},
gfW:function(){var u,t=this,s=Date.now(),r=C.c.Z(P.k6(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aa(s,!1)
return u/r},
cF:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.v()
if(typeof r!=="number")return H.v(r)
u=C.d.bY(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.v()
t=C.d.bY(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kt(C.i,s.ghk())}},
dt:function(){if(!this.cx){this.cx=!0
var u=window
C.w.eb(u)
C.w.fh(u,W.kG(new E.hW(this),P.a8))}},
hi:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cF()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aa(r,!1)
s.y=P.k6(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.aC()
r=s.db
C.a.sl(r.a,0)
r.aC()
r=s.dx
C.a.sl(r.a,0)
r.aC()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.a8(p.e)}s=p.Q
if(s!=null)s.w(null)}catch(q){u=H.aw(q)
t=H.jT(q)
P.jX("Error: "+H.d(u))
P.jX("Stack: "+H.d(t))
throw H.c(u)}}}
E.hW.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hi()}}}
Z.dz.prototype={}
Z.cC.prototype={
Y:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aw(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.dA.prototype={}
Z.bL.prototype={
at:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
Y:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].Y(a)},
b5:function(a){var u,t,s
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
i:function(a){var u,t,s,r,q=[P.n],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.br.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.c4(this.c))+"'")+"]"}}
Z.aR.prototype={
gcg:function(a){var u=this.a,t=(u&$.ai().a)!==0?3:0
if((u&$.aW().a)!==0)t+=3
if((u&$.aV().a)!==0)t+=3
if((u&$.aX().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cv().a)!==0)t+=3
if((u&$.cw().a)!==0)t+=4
if((u&$.bH().a)!==0)++t
return(u&$.aU().a)!==0?t+4:t},
fE:function(a){var u,t=$.ai(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aX()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aU()
if((s&t.a)!==0)if(u===a)return t
return $.l3()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aR))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.n]),t=this.a
if((t&$.ai().a)!==0)u.push("Pos")
if((t&$.aW().a)!==0)u.push("Norm")
if((t&$.aV().a)!==0)u.push("Binm")
if((t&$.aX().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cv().a)!==0)u.push("Clr3")
if((t&$.cw().a)!==0)u.push("Clr4")
if((t&$.bH().a)!==0)u.push("Weight")
if((t&$.aU().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eM.prototype={}
D.bq.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
w:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.R()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.H(P.jE(u,!0,{func:1,ret:-1,args:[D.R]}),new D.f7(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.R]}])
C.a.H(u,new D.f8(q))}return!0},
d1:function(){return this.w(null)},
ay:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.w(u)}}}}
D.f7.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f8.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.b4.prototype={}
D.b5.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cD.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cD))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cU.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cU))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fv.prototype={
hb:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
h7:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cX.prototype={}
X.fB.prototype={
aT:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.v()
u=b.b
t=q.ch
if(typeof u!=="number")return u.v()
s=new V.Z(o.a+n*m,o.b+u*t)
t=q.a.gaJ()
r=new X.aG(a,V.aJ(),q.x,t,s)
r.b=!0
q.z=new P.aa(p,!1)
q.x=s
return r},
c5:function(a,b){this.r=a.a
return!1},
b1:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dC()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.aT(a,b))
return!0},
hc:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaJ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.v()
q=a.b
p=o.cy
if(typeof q!=="number")return q.v()
t=new X.c_(new V.F(s*r,q*p),u,t)
t.b=!0
n.w(t)
return!0},
eO:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cX(c,r.a.gaJ(),b)
s.b=!0
t.w(s)
r.y=new P.aa(u,!1)
r.x=V.aJ()}}
X.ab.prototype={
q:function(a,b){var u=this
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
X.aG.prototype={}
X.h_.prototype={
bx:function(a,b,c){var u=this,t=new P.aa(Date.now(),!1),s=u.a.gaJ(),r=new X.aG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.w(this.bx(a,b,!0))
return!0},
b1:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dC()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.w(u.bx(a,b,!0))
return!0},
b0:function(a,b){var u=this.d
if(u==null)return!1
u.w(this.bx(a,b,!1))
return!0},
hd:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaJ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.v()
r=a.b
q=p.ch
if(typeof r!=="number")return r.v()
u=new X.c_(new V.F(t*s,r*q),u,b)
u.b=!0
o.w(u)
return!0},
gd0:function(){var u=this.b
return u==null?this.b=D.B():u},
gcb:function(){var u=this.c
return u==null?this.c=D.B():u},
gdk:function(){var u=this.d
return u==null?this.d=D.B():u}}
X.c_.prototype={}
X.hg.prototype={}
X.dq.prototype={}
X.i_.prototype={
aT:function(a,b){var u=this,t=new P.aa(Date.now(),!1),s=a.length>0?a[0]:V.aJ(),r=u.a.gaJ(),q=new X.dq(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ha:function(a){var u=this.b
if(u==null)return!1
u.w(this.aT(a,!0))
return!0},
h8:function(a){var u=this.c
if(u==null)return!1
u.w(this.aT(a,!0))
return!0},
h9:function(a){var u=this.d
if(u==null)return!1
u.w(this.aT(a,!1))
return!0}}
X.du.prototype={
gaJ:function(){var u=this.a,t=C.f.gcY(u).c
t.toString
u=C.f.gcY(u).d
u.toString
return V.ko(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cU(u,new X.ab(t,a.altKey,a.shiftKey))},
aH:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
bJ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ab(t,a.altKey,a.shiftKey)},
ar:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.Z(s-q,r-u)},
aU:function(a){return new V.F(a.movementX,a.movementY)},
bH:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ag(r.pageX)
C.d.ag(r.pageY)
p=o.left
C.d.ag(r.pageX)
n.push(new V.Z(q-p,C.d.ag(r.pageY)-o.top))}return n},
ap:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cD(u,new X.ab(t,a.altKey,a.shiftKey))},
by:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eI:function(a){this.f=!0},
eu:function(a){this.f=!1},
eC:function(a){if(this.f&&this.by(a))a.preventDefault()},
eM:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.hb(u)},
eK:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.h7(u)},
eQ:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aH(a)
if(r.x){u=r.ap(a)
t=r.aU(a)
if(r.d.c5(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ap(a)
s=r.ar(a)
if(r.c.c5(u,s))a.preventDefault()},
eU:function(a){var u,t,s,r=this
r.aH(a)
u=r.ap(a)
if(r.x){t=r.aU(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.b1(u,s))a.preventDefault()},
eG:function(a){var u,t,s,r=this
if(!r.by(a)){r.aH(a)
u=r.ap(a)
if(r.x){t=r.aU(a)
if(r.d.b1(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.b1(u,s))a.preventDefault()}},
eS:function(a){var u,t,s,r=this
r.aH(a)
u=r.ap(a)
if(r.x){t=r.aU(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.b0(u,s))a.preventDefault()},
eE:function(a){var u,t,s,r=this
if(!r.by(a)){r.aH(a)
u=r.ap(a)
if(r.x){t=r.aU(a)
if(r.d.b0(u,t))a.preventDefault()
return}if(r.r)return
s=r.ar(a)
if(r.c.b0(u,s))a.preventDefault()}},
eW:function(a){var u,t,s=this
s.aH(a)
u=new V.F((a&&C.v).gfN(a),C.v.gfO(a)).u(0,180)
if(s.x){if(s.d.hc(u))a.preventDefault()
return}if(s.r)return
t=s.ar(a)
if(s.c.hd(u,t))a.preventDefault()},
eY:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ap(s.y)
t=s.ar(s.y)
s.d.eO(u,t,r)}},
fd:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bJ(a)
u=t.bH(a)
if(t.e.ha(u))a.preventDefault()},
f9:function(a){var u
this.bJ(a)
u=this.bH(a)
if(this.e.h8(u))a.preventDefault()},
fb:function(a){var u
this.bJ(a)
u=this.bH(a)
if(this.e.h9(u))a.preventDefault()}}
D.eI.prototype={$ia1:1}
D.bo.prototype={
ao:function(a){var u=this.r
if(u!=null)u.w(a)},
dV:function(){return this.ao(null)},
$ia1:1}
D.a1.prototype={}
D.cV.prototype={
ao:function(a){var u=this.y
if(u!=null)u.w(a)},
cC:function(a){var u=this.z
if(u!=null)u.w(a)},
eN:function(){return this.cC(null)},
f_:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.e5(s))return!1}return!0},
en:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcB(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bo)this.f.push(q)
p=q.r
if(p==null){p=new D.bq()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b4()
u.b=!0
this.ao(u)},
f3:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcB();u.t();){s=u.gC(u)
C.a.S(this.e,s)
s.gp().S(0,t)}u=new D.b5()
u.b=!0
this.ao(u)},
e5:function(a){var u=C.a.K(this.f,a)
return u},
$ah:function(){return[D.a1]},
$aay:function(){return[D.a1]}}
D.hf.prototype={$ia1:1}
D.hD.prototype={$ia1:1}
V.T.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.az.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.az))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.f6.prototype={}
V.d_.prototype={
a4:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d_))return!1
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
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bG(H.b([q.a,q.d,q.r],p),3,0),n=V.bG(H.b([q.b,q.e,q.x],p),3,0),m=V.bG(H.b([q.c,q.f,q.y],p),3,0)
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
a4:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
bZ:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.bu()
u=1/b1
t=-n
s=-a0
return V.am((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
v:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.am(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bn:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b4:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.U(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aE))return!1
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
i:function(a){return this.L()},
A:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bG(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bG(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bG(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bG(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.Z.prototype={
G:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.U.prototype={
G:function(a,b){return new V.U(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.U))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
V.aK.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aK))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.d9.prototype={
ga7:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d9))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.G(u.a,3,0)+", "+V.G(u.b,3,0)+", "+V.G(u.c,3,0)+", "+V.G(u.d,3,0)+"]"}}
V.F.prototype={
c_:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
v:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.v()
u=this.b
if(typeof u!=="number")return u.v()
return new V.F(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.kx
return u==null?$.kx=new V.F(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.F(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.F))return!1
u=b.a
t=this.a
s=$.C()
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
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+"]"}}
V.A.prototype={
c_:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
c0:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aZ:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.A(-this.a,-this.b,-this.c)},
u:function(a,b){if(Math.abs(b-0)<$.C().a)return V.dy()
return new V.A(this.a/b,this.b/b,this.c/b)},
dj:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.G(this.a,3,0)+", "+V.G(this.b,3,0)+", "+V.G(this.c,3,0)+"]"}}
U.eP.prototype={
bs:function(a){var u=V.n8(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
N:function(a){var u=this.y
if(u!=null)u.w(a)},
scc:function(a,b){},
sc2:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bs(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.N(s)}},
sc4:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bs(u)}s=new D.z("minimumLocation",s,t.c)
s.b=!0
t.N(s)}},
sa6:function(a,b){var u,t=this
b=t.bs(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.z("location",u,b)
u.b=!0
t.N(u)}},
sc3:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
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
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.z("velocity",t,a)
t.b=!0
u.N(t)}},
sbP:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.z("dampening",u,a)
u.b=!0
this.N(u)}},
ah:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa6(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cG.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
aM:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cG))return!1
return J.O(this.a,b.a)},
i:function(a){return"Constant: "+this.a.A("          ")}}
U.bQ.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
N:function(a){var u=this.e
if(u!=null)u.w(a)},
a2:function(){return this.N(null)},
el:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaD(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.N(u)},
f1:function(a,b){var u,t
for(u=b.gO(b),t=this.gaD();u.t();)u.gC(u).gp().S(0,t)
u=new D.b5()
u.b=!0
this.N(u)},
aM:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a5()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a0(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aM(0,b,c)
if(t!=null)u=u==null?t:t.v(0,u)}}s.f=u==null?V.bu():u
r=s.e
if(r!=null)r.ay(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.O(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.a6]},
$aay:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.dv.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.B():u},
N:function(a){var u=this.cy
if(u!=null)u.w(a)},
a2:function(){return this.N(null)},
aW:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd0().n(0,u.gbz())
u.a.c.gdk().n(0,u.gbB())
u.a.c.gcb().n(0,u.gbD())
return!0},
bA:function(a){var u=this
if(!J.O(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bC:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaG")
if(!n.y)return
if(n.x){u=a.d.G(0,a.y)
u=new V.F(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.G(0,a.y)
u=new V.F(t.a,t.b).v(0,2).u(0,u.ga7())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.v()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.F(s.a,s.b).v(0,2).u(0,u.ga7())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sa6(0,-q*p+o)
n.b.sR(0)
t=t.G(0,a.z)
n.Q=new V.F(t.a,t.b).v(0,2).u(0,u.ga7())}n.a2()},
bE:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.v()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sR(t*10*s)
r.a2()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.ch=p
u=b.y
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.am(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia6:1}
U.dw.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.B():u},
N:function(a){var u=this.fx
if(u!=null)u.w(a)},
a2:function(){return this.N(null)},
aW:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd0().n(0,s.gbz())
s.a.c.gdk().n(0,s.gbB())
s.a.c.gcb().n(0,s.gbD())
u=s.a.d
t=u.f
u=t==null?u.f=D.B():t
u.n(0,s.ged())
u=s.a.d
t=u.d
u=t==null?u.d=D.B():t
u.n(0,s.gef())
u=s.a.e
t=u.b
u=t==null?u.b=D.B():t
u.n(0,s.gfw())
u=s.a.e
t=u.d
u=t==null?u.d=D.B():t
u.n(0,s.gfu())
u=s.a.e
t=u.c
u=t==null?u.c=D.B():t
u.n(0,s.gfs())
return!0},
ak:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.F(u,t)},
bA:function(a){var u=this
H.i(a,"$iaG")
if(!J.O(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bC:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaG")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.F(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.ak(new V.F(t.a,t.b).v(0,2).u(0,u.ga7()))
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
r=n.ak(new V.F(s.a,s.b).v(0,2).u(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa6(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.G(0,a.z)
n.dx=n.ak(new V.F(t.a,t.b).v(0,2).u(0,u.ga7()))}n.a2()},
bE:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
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
r.a2()}},
ee:function(a){var u=this
if(H.i(a,"$icX").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eg:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$iaG")
if(!J.O(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.ak(new V.F(s.a,s.b).v(0,2).u(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa6(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.G(0,a.z)
n.dx=n.ak(new V.F(t.a,t.b).v(0,2).u(0,u.ga7()))
n.a2()},
fz:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fv:function(a){var u,t,s,r,q,p,o,n=this
H.i(a,"$idq")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.F(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.ak(new V.F(t.a,t.b).v(0,2).u(0,u.ga7()))
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
r=n.ak(new V.F(s.a,s.b).v(0,2).u(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa6(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa6(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.G(0,a.z)
n.dx=n.ak(new V.F(t.a,t.b).v(0,2).u(0,u.ga7()))}n.a2()},
ft:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
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
r.a2()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.a5()
if(q<p){r.dy=p
u=b.y
r.c.ah(0,u)
r.b.ah(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.am(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.v(0,V.am(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia6:1}
U.dx.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
N:function(a){var u=this.r
if(u!=null)u.w(a)},
aW:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.B():t
t=r.gei()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.B():s).n(0,t)
return!0},
ej:function(a){var u,t,s,r,q=this
if(!J.O(q.b,q.a.b.c))return
H.i(a,"$ic_")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.v()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.N(u)}},
aM:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.am(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia6:1}
M.cF.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
V:function(a){var u=this.r
if(u!=null)u.w(a)},
aQ:function(){return this.V(null)},
f5:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.V(u)},
f7:function(a,b){var u,t
for(u=b.gO(b),t=this.gU();u.t();)u.gC(u).gp().S(0,t)
u=new D.b5()
u.b=!0
this.V(u)},
a8:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a0(u,u.length);u.t();){t=u.d
if(t!=null)t.a8(a)}s.f=!1},
$ah:function(){return[M.ag]},
$aay:function(){return[M.ag]},
$iag:1}
M.cH.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.B():u},
V:function(a){var u=this.r
if(u!=null)u.w(a)},
aQ:function(){return this.V(null)},
saX:function(a){var u,t,s=this
if(a==null)a=new X.fn()
u=s.b
if(u!==a){if(u!=null)u.gp().S(0,s.gU())
t=s.b
s.b=a
a.gp().n(0,s.gU())
u=new D.z("camera",t,s.b)
u.b=!0
s.V(u)}},
sb2:function(a,b){var u,t,s=this
if(b==null)b=X.jx(null)
u=s.c
if(u!==b){if(u!=null)u.gp().S(0,s.gU())
t=s.c
s.c=b
b.gp().n(0,s.gU())
u=new D.z("target",t,s.c)
u.b=!0
s.V(u)}},
sb3:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().S(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gU())
s=new D.z("technique",u,t.d)
s.b=!0
t.V(s)}},
a8:function(a){var u=this
a.c7(u.d)
u.c.Y(a)
u.b.Y(a)
u.e.ah(0,a)
u.e.a8(a)
u.b.b5(a)
u.c.toString
a.c6()},
$iag:1}
M.cM.prototype={
V:function(a){var u=this.y
if(u!=null)u.w(a)},
aQ:function(){return this.V(null)},
ey:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gU(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bq()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b4()
u.b=!0
this.V(u)},
eA:function(a,b){var u,t
for(u=b.gO(b),t=this.gU();u.t();)u.gC(u).gp().S(0,t)
u=new D.b5()
u.b=!0
this.V(u)},
saX:function(a){var u,t,s=this
if(a==null)a=X.ki(null)
u=s.b
if(u!==a){if(u!=null)u.gp().S(0,s.gU())
t=s.b
s.b=a
a.gp().n(0,s.gU())
u=new D.z("camera",t,s.b)
u.b=!0
s.V(u)}},
sb2:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().S(0,t.gU())
u=t.c
t.c=b
b.gp().n(0,t.gU())
s=new D.z("target",u,t.c)
s.b=!0
t.V(s)}},
sb3:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().S(0,t.gU())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gU())
s=new D.z("technique",u,t.d)
s.b=!0
t.V(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.B():u},
a8:function(a){var u,t=this
a.c7(t.d)
t.c.Y(a)
t.b.Y(a)
u=t.d
if(u!=null)u.ah(0,a)
for(u=t.e.a,u=new J.a0(u,u.length);u.t();)u.d.ah(0,a)
for(u=t.e.a,u=new J.a0(u,u.length);u.t();)u.d.a8(a)
t.b.toString
a.cy.aw()
a.db.aw()
t.c.toString
a.c6()},
$iag:1}
M.ag.prototype={}
A.cz.prototype={}
A.eD.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fT:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d_:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.W.prototype={
gai:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
q:function(a,b){if(b==null)return!1
if(!(b instanceof A.W))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fF.prototype={
dP:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.ap("")
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
A.mo(c0,u)
A.mq(c0,u)
A.mp(c0,u)
A.ms(c0,u)
A.mt(c0,u)
A.mr(c0,u)
A.mu(c0,u)
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
b5.dh(0,s.charCodeAt(0)==0?s:s,A.mn(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.i(b5.y.F(0,"invViewMat"),"$ia3")
if(t)b5.dy=H.i(b5.y.F(0,"objMat"),"$ia3")
if(r)b5.fr=H.i(b5.y.F(0,"viewObjMat"),"$ia3")
b5.fy=H.i(b5.y.F(0,"projViewObjMat"),"$ia3")
if(c0.go)b5.fx=H.i(b5.y.F(0,"viewMat"),"$ia3")
if(c0.x1)b5.k1=H.i(b5.y.F(0,"txt2DMat"),"$icb")
if(c0.x2)b5.k2=H.i(b5.y.F(0,"txtCubeMat"),"$ia3")
if(c0.y1)b5.k3=H.i(b5.y.F(0,"colorMat"),"$ia3")
b5.r1=H.b([],[A.a3])
t=c0.aL
if(t>0){b5.k4=b5.y.F(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.t(P.r(b7+q+b8))
s.push(H.i(m,"$ia3"))}}t=c0.a
if(t.a)b5.r2=H.i(b5.y.F(0,"emissionClr"),"$iE")
if(t.b)b5.rx=H.i(b5.y.F(0,"emissionTxt"),"$iV")
t=c0.b
if(t.a)b5.x1=H.i(b5.y.F(0,"ambientClr"),"$iE")
if(t.b)b5.x2=H.i(b5.y.F(0,"ambientTxt"),"$iV")
t=c0.c
if(t.a)b5.y2=H.i(b5.y.F(0,"diffuseClr"),"$iE")
if(t.b)b5.aL=H.i(b5.y.F(0,"diffuseTxt"),"$iV")
t=c0.d
if(t.a)b5.bf=H.i(b5.y.F(0,"invDiffuseClr"),"$iE")
if(t.b)b5.d3=H.i(b5.y.F(0,"invDiffuseTxt"),"$iV")
t=c0.e
s=t.a
if(s||t.b||!1){b5.d6=H.i(b5.y.F(0,"shininess"),"$iN")
if(s)b5.d4=H.i(b5.y.F(0,"specularClr"),"$iE")
if(t.b)b5.d5=H.i(b5.y.F(0,"specularTxt"),"$iV")}if(c0.f.b)b5.d7=H.i(b5.y.F(0,"bumpTxt"),"$iV")
if(c0.db){b5.d8=H.i(b5.y.F(0,"envSampler"),"$ibh")
t=c0.r
if(t.a)b5.d9=H.i(b5.y.F(0,"reflectClr"),"$iE")
if(t.b)b5.da=H.i(b5.y.F(0,"reflectTxt"),"$iV")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dc=H.i(b5.y.F(0,"refraction"),"$iN")
if(s)b5.dd=H.i(b5.y.F(0,"refractClr"),"$iE")
if(t.b)b5.de=H.i(b5.y.F(0,"refractTxt"),"$iV")}}t=c0.y
if(t.a)b5.df=H.i(b5.y.F(0,"alpha"),"$iN")
if(t.b)b5.dg=H.i(b5.y.F(0,"alphaTxt"),"$iV")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.bQ=new H.I([r,A.bg])
b5.bR=new H.I([r,[P.af,A.c9]])
for(r=[A.c9],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="barLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.i(m,"$iE")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.t(P.r(b7+o+b8))
H.i(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.i(f,"$iE")
if(typeof j!=="number")return j.ae()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.i(e,"$iN")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.t(P.r(b7+o+b8))
H.i(d,"$iN")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.t(P.r(b7+o+b8))
H.i(c,"$iN")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c9(m,g,f,a0,a,b))}b5.bR.m(0,j,h)
q=b5.bQ
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.bS=new H.I([r,A.bg])
b5.bT=new H.I([r,[P.af,A.ca]])
for(r=[A.ca],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ae()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.t(P.r(b7+a1+b8))
H.i(m,"$iE")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.t(P.r(b7+a1+b8))
H.i(g,"$iE")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.t(P.r(b7+a1+b8))
H.i(f,"$iE")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.t(P.r(b7+a1+b8))
H.i(m,"$iE")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.t(P.r(b7+a1+b8))
H.i(g,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.i(f,"$iV")
a5=f}else a5=b6
h.push(new A.ca(a4,a3,a2,m,g,a5))}b5.bT.m(0,j,h)
q=b5.bS
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.bU=new H.I([r,A.bg])
b5.bV=new H.I([r,[P.af,A.cc]])
for(r=[A.cc],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.i(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.t(P.r(b7+o+b8))
H.i(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.i(f,"$iE")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.i(e,"$icb")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.i(e,"$ibh")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.i(e,"$ibh")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.t(P.r(b7+o+b8))
H.i(d,"$ic8")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.i(e,"$iN")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.t(P.r(b7+o+b8))
H.i(d,"$iN")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.t(P.r(b7+o+b8))
H.i(c,"$iN")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cc(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bV.m(0,j,h)
q=b5.bU
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.bW=new H.I([r,A.bg])
b5.bX=new H.I([r,[P.af,A.cd]])
for(r=[A.cd],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.d(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
H.i(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.t(P.r(b7+o+b8))
H.i(g,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.t(P.r(b7+o+b8))
H.i(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.t(P.r(b7+o+b8))
H.i(e,"$iE")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.t(P.r(b7+o+b8))
H.i(d,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.t(P.r(b7+o+b8))
H.i(c,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.t(P.r(b7+o+b8))
H.i(a9,"$iN")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.t(P.r(b7+o+b8))
H.i(b0,"$iN")
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
if(d==null)H.t(P.r(b7+a1+b8))
H.i(d,"$ic8")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.t(P.r(b7+a1+b8))
H.i(d,"$iN")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.t(P.r(b7+a1+b8))
H.i(c,"$iN")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.t(P.r(b7+a1+b8))
H.i(d,"$iN")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.t(P.r(b7+a1+b8))
H.i(c,"$iN")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.t(P.r(b7+a1+b8))
H.i(a9,"$iN")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.t(P.r(b7+a1+b8))
H.i(d,"$iV")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.t(P.r(b7+o+b8))
H.i(d,"$iV")
a7=d}else a7=b6
h.push(new A.cd(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bX.m(0,j,h)
q=b5.bW
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.r(b7+o+b8))
q.m(0,j,m)}}}},
af:function(a,b){if(b!=null&&b.d)a.dE(b)},
fm:function(a,b){}}
A.cA.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cJ.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.d7.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.de.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fI.prototype={
i:function(a){return this.b_}}
A.c9.prototype={}
A.ca.prototype={}
A.cc.prototype={}
A.cd.prototype={}
A.db.prototype={
cl:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dh:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.cw(b,35633)
r.f=r.cw(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.r("Failed to link shader: "+H.d(s)))}r.fn()
r.fp()},
Y:function(a){a.a.useProgram(this.r)
this.x.fT()},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
fn:function(){var u,t,s,r=this,q=H.b([],[A.cz]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cz(p,t.name,s))}r.x=new A.eD(q)},
fp:function(){var u,t,s,r=this,q=H.b([],[A.ds]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fM(t.type,t.size,t.name,s))}r.y=new A.ia(q)},
aF:function(a,b,c){var u=this.a
if(a===1)return new A.bg(u,b,c)
else return A.jK(u,this.r,b,a,c)},
e8:function(a,b,c){var u=this.a
if(a===1)return new A.V(u,b,c)
else return A.jK(u,this.r,b,a,c)},
e9:function(a,b,c){var u=this.a
if(a===1)return new A.bh(u,b,c)
else return A.jK(u,this.r,b,a,c)},
bc:function(a,b){return new P.dJ(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fM:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aF(b,c,d)
case 5121:return u.aF(b,c,d)
case 5122:return u.aF(b,c,d)
case 5123:return u.aF(b,c,d)
case 5124:return u.aF(b,c,d)
case 5125:return u.aF(b,c,d)
case 5126:return new A.N(u.a,c,d)
case 35664:return new A.i6(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.c8(u.a,c,d)
case 35667:return new A.i7(u.a,c,d)
case 35668:return new A.i8(u.a,c,d)
case 35669:return new A.i9(u.a,c,d)
case 35674:return new A.ib(u.a,c,d)
case 35675:return new A.cb(u.a,c,d)
case 35676:return new A.a3(u.a,c,d)
case 35678:return u.e8(b,c,d)
case 35680:return u.e9(b,c,d)
case 35670:throw H.c(u.bc("BOOL",c))
case 35671:throw H.c(u.bc("BOOL_VEC2",c))
case 35672:throw H.c(u.bc("BOOL_VEC3",c))
case 35673:throw H.c(u.bc("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.hA.prototype={}
A.ds.prototype={}
A.ia.prototype={
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
A.bg.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.i7.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.i8.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i9.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.i5.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.N.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.i6.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.c8.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.ib.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.cb.prototype={
a9:function(a){var u=new Float32Array(H.cq(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a3.prototype={
a9:function(a){var u=new Float32Array(H.cq(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.V.prototype={
dE:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bh.prototype={
dF:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.j6.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.c0(s.b,b).c0(s.d.c0(s.c,b),c)
s=new V.U(r.a,r.b,r.c)
if(!J.O(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a0()}a.sho(r.u(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
u=new V.aK(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.O(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a0()}}}
F.b2.prototype={
e1:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.dy()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dj())return
return s.u(0,Math.sqrt(s.D(s)))},
e3:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.D(r)))
r=t.G(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aZ(r.u(0,Math.sqrt(r.D(r))))
return r.u(0,Math.sqrt(r.D(r)))},
bM:function(){var u,t=this
if(t.d!=null)return!0
u=t.e1()
if(u==null){u=t.e3()
if(u==null)return!1}t.d=u
t.a.a.a0()
return!0},
e0:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.dy()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.dj())return
return s.u(0,Math.sqrt(s.D(s)))},
e2:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.G(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.G(0,g)
l=new V.U(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).G(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.D(l)))
l=o.aZ(q)
l=l.u(0,Math.sqrt(l.D(l))).aZ(o)
q=l.u(0,Math.sqrt(l.D(l)))}return q},
bK:function(){var u,t=this
if(t.e!=null)return!0
u=t.e0()
if(u==null){u=t.e2()
if(u==null)return!1}t.e=u
t.a.a.a0()
return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.ad(J.a5(s.e),0)+", "+C.b.ad(J.a5(t.b.e),0)+", "+C.b.ad(J.a5(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.A("")}}
F.bU.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.ad(J.a5(u.e),0)+", "+C.b.ad(J.a5(this.b.e),0)},
L:function(){return this.A("")}}
F.c2.prototype={
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.ad(J.a5(u.e),0)},
L:function(){return this.A("")}}
F.hs.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
h0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.W()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.fK())}h.a.W()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.c2()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.w(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.W()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.lt(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.W()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.W()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.W()
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
F.bP(l,k,i)}g=h.e
if(g!=null)g.ay(0)},
as:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.as()||!1
if(!t.a.as())u=!1
s=t.e
if(s!=null)s.ay(0)
return u},
cW:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.ai()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aW().a)!==0)++s
if((t&$.aV().a)!==0)++s
if((t&$.aX().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cv().a)!==0)++s
if((t&$.cw().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.aU().a)!==0)++s
r=a4.gcg(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cC])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fE(m)
k=l.gcg(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cC(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fZ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cq(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bL(new Z.dz(a1,d),o,a4)
c.b=H.b([],[Z.br])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)}a=Z.jM(u,34963,b)
c.b.push(new Z.br(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.W()
b.push(t.e)}a=Z.jM(u,34963,b)
c.b.push(new Z.br(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.W()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.W()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.W()
b.push(t.e)}a=Z.jM(u,34963,b)
c.b.push(new Z.br(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.A(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.A(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.A(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.A(t))}return C.a.k(s,"\n")},
a0:function(){var u=this.e
if(u!=null)u.w(null)}}
F.ht.prototype={
fB:function(a){var u,t,s,r,q=H.b([],[F.b2]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.n(0,p)
u.a.n(0,s)
u.a.n(0,r)
q.push(F.bP(p,s,r))}return q},
fC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b2])
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
h.push(F.bP(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bP(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.bP(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.bP(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
as:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bM())s=!1
return s},
bL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bK())s=!1
return s},
i:function(a){return this.L()},
A:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(a))
return C.a.k(r,"\n")},
L:function(){return this.A("")}}
F.hu.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var u,t,s=H.b([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.k(s,"\n")},
L:function(){return this.A("")}}
F.hv.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
A:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(a))
return C.a.k(r,"\n")},
L:function(){return this.A("")}}
F.bz.prototype={
bO:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.io(u.cx,r,o,t,s,q,p,a,n)},
fK:function(){return this.bO(null)},
sho:function(a){var u
if(!J.O(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a0()}},
fZ:function(a){var u,t,s=this
if(a.q(0,$.ai())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aW())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aV())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.aX())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bk())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cv())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.cw())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bH()))return H.b([s.ch],[P.M])
else if(a.q(0,$.aU())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
bM:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dy()
t.d.H(0,new F.iw(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
bK:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.dy()
t.d.H(0,new F.iv(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a0()
s=t.a.e
if(s!=null)s.ay(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.n])
q.push(C.b.ad(J.a5(s.e),0))
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
L:function(){return this.A("")}}
F.iw.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.iv.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.ip.prototype={
W:function(){},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a0()
return!0},
bd:function(a,b,c,d,e,f){var u=F.io(a,null,b,c,null,d,e,f,0)
this.n(0,u)
return u},
gl:function(a){return this.c.length},
as:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bM()
return!0},
bL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bK()
return!0},
fH:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.O(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.w(null)}}}}return!0},
i:function(a){return this.L()},
A:function(a){var u,t,s,r
this.W()
u=H.b([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].A(a))
return C.a.k(u,"\n")},
L:function(){return this.A("")}}
F.iq.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.ir(u,b))
C.a.H(u.d,new F.is(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
F.ir.prototype={
$1:function(a){if(!J.O(a.a,this.a))this.b.$1(a)}}
F.is.prototype={
$1:function(a){var u=this.a
if(!J.O(a.a,u)&&!J.O(a.b,u))this.b.$1(a)}}
F.it.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
F.iu.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].A(""))
return C.a.k(r,"\n")}}
O.cZ.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.B():u},
T:function(a){var u=this.fr
if(u!=null)u.w(a)},
aR:function(){return this.T(null)},
cE:function(a){this.a=null
this.T(a)},
fj:function(){return this.cE(null)},
ep:function(a,b){var u=new D.b4()
u.b=!0
this.T(u)},
er:function(a,b){var u=new D.b5()
u.b=!0
this.T(u)},
cu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gan()
o=u.h(0,q.gan())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cA])
u.H(0,new O.fM(g,n))
C.a.aP(n,new O.fN())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cJ])
m.H(0,new O.fO(g,l))
C.a.aP(l,new O.fP())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gan()
o=k.h(0,q.gan())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d7])
k.H(0,new O.fQ(g,j))
C.a.aP(j,new O.fR())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.gan()
p=i.h(0,q.gan())
i.m(0,s,p==null?1:p)}h=H.b([],[A.de])
i.H(0,new O.fS(g,h))
C.a.aP(h,new O.fT())
f=C.c.Z(g.e.a.length+3,4)
g.dy.e
return A.ly(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
aa:function(a,b){if(b!=null)if(!C.a.K(a,b)){b.a=a.length
a.push(b)}},
ah:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a0(u,u.length);u.t();){t=u.d
t.toString
s=$.im
if(s==null)s=$.im=new V.A(0,0,1)
t.a=s
r=$.il
t.d=r==null?$.il=new V.A(0,1,0):r
r=$.ik
t.e=r==null?$.ik=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bn(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bn(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bn(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
ds:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cu()
u=b2.fr.h(0,b1.b_)
if(u==null){u=A.lx(b1,b2.a)
b2.cP(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bf
b1=b3.e
if(!(b1 instanceof Z.bL))b1=b3.e=null
if(b1==null||!b1.d.q(0,s)){b1=t.k4
if(b1)b3.d.as()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bL()
q.a.bL()
q=q.e
if(q!=null)q.ay(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fH()
p=p.e
if(p!=null)p.ay(0)}n=b3.d.cW(new Z.dA(b2.a),s)
n.at($.ai()).e=b0.a.Q.c
if(b1)n.at($.aW()).e=b0.a.cx.c
if(r)n.at($.aV()).e=b0.a.ch.c
if(t.r2)n.at($.aX()).e=b0.a.cy.c
if(q)n.at($.bk()).e=b0.a.db.c
if(t.ry)n.at($.aU()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dk])
b0.a.Y(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.gX(r)
b1=b1.dy
b1.toString
b1.a9(r.a4(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.gX(r)
q=b2.dx
q=b2.cx=r.v(0,q.gX(q))
r=q}b1=b1.fr
b1.toString
b1.a9(r.a4(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.ghf()
q=b2.dx
q=b2.ch=r.v(0,q.gX(q))
r=q}b1=b1.fy
b1.toString
b1.a9(r.a4(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.gX(r)
b1=b1.fx
b1.toString
b1.a9(r.a4(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a9(C.j.a4(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a9(C.j.a4(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a9(C.j.a4(r,!0))}if(t.aL>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.f(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.f(b1,k)
b1=b1[k]
j=new Float32Array(H.cq(r.a4(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.af(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.af(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.af(b1.aL,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bf
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.af(b1.d3,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.d6
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.d4
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.af(b1.d5,r)}b1=t.z
if(b1.length>0){r=P.w
i=new H.I([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gan()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.cx(b0.a.bR.h(0,f),e)
p=g.ghw()
o=$.ao
p=p.b4(o==null?$.ao=new V.U(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghB()
o=$.ao
p=p.b4(o==null?$.ao=new V.U(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaY(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gd2()){p=g.gcR()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcS()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcT()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bQ.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.gX(r)
r=P.w
b=new H.I([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.cx(b0.a.bT.h(0,0),e)
p=c.bn(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.u(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bS.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.gX(r)
r=P.w
a1=new H.I([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gan()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.cx(b0.a.bV.h(0,f),e)
a2=c.v(0,g.gX(g))
p=g.gX(g)
o=$.ao
p=p.b4(o==null?$.ao=new V.U(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ao
p=a2.b4(p==null?$.ao=new V.U(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaY(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaz()
p=a2.bZ(0)
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
j=new Float32Array(H.cq(new V.d_(o,a,a0,a3,a4,a5,a6,a7,p).a4(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaz()
p=g.gaz()
if(!C.a.K(m,p)){p.a=m.length
m.push(p)}p=g.gaz()
o=p.gc1(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaO()
p=g.gdG()
o=d.x
o.toString
a=p.gfQ(p)
a0=p.gfR(p)
a3=p.gfS()
p=p.gfP()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaO()
if(!C.a.K(m,p)){p.a=m.length
m.push(p)}p=g.gaO()
o=p.gc1(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gd2()){p=g.gcR()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcS()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcT()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bU.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.gX(r)
r=P.w
a9=new H.I([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gan()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.cx(b0.a.bX.h(0,f),e)
p=g.ghe(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghz(g).hL()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b4(g.ghe(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaY(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaz()
p=g.gcb()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gc8(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghM()
o=d.x
o.a.uniform1f(o.d,p)
p=g.ghN()
o=d.y
o.a.uniform1f(o.d,p)
g.gaz()
p=g.gaz()
if(!C.a.K(m,p)){p.a=m.length
m.push(p)}p=g.gaz()
o=p.gc1(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaO()
p=g.gdG()
o=d.z
o.toString
a=p.gfQ(p)
a0=p.gfR(p)
a3=p.gfS()
p=p.gfP()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaO()
if(!C.a.K(m,p)){p.a=m.length
m.push(p)}p=g.gaO()
o=p.gc1(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.ghA()){p=g.ghy()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.ghx()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gd2()){p=g.gcR()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcS()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcT()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bW.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.aa(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.af(b1.d7,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.gX(r).bZ(0)}b1=b1.id
b1.toString
b1.a9(r.a4(0,!0))}if(t.db){b0.aa(m,b0.ch)
b1=b0.a
r=b0.ch
b1.fm(b1.d8,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.d9
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.af(b1.da,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.dc
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dd
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aa(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.af(b1.de,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.df
r.a.uniform1f(r.d,p)}if(b1.b){b0.aa(m,b0.db.d)
r=b0.a
p=b0.db.d
r.af(r.dg,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b3.e
p.Y(b2)
p.a8(b2)
p.b5(b2)
if(!q||b1.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b1=m[k]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(3553,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.d_()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cu().b_}}
O.fM.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cA(a,C.c.Z(b+3,4)*4))}}
O.fN.prototype={
$2:function(a,b){return J.cy(a.a,b.a)}}
O.fO.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cJ(a,C.c.Z(b+3,4)*4))}}
O.fP.prototype={
$2:function(a,b){return J.cy(a.a,b.a)}}
O.fQ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d7(a,C.c.Z(b+3,4)*4))}}
O.fR.prototype={
$2:function(a,b){return J.cy(a.a,b.a)}}
O.fS.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.de(a,C.c.Z(b+3,4)*4))}}
O.fT.prototype={
$2:function(a,b){return J.cy(a.a,b.a)}}
O.fG.prototype={
aq:function(){var u,t=this
t.cj()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bY.prototype={
T:function(a){return this.a.T(a)},
aR:function(){return this.T(null)},
aq:function(){},
cI:function(a){var u,t,s=this
if(!s.c.q(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aq()
u=s.a
u.a=null
u.T(null)}},
sc9:function(a){var u,t=this,s=t.c
if(!s.b)t.cI(new A.W(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gp().S(0,t.gaE())
u=t.d
t.d=a
a.gp().n(0,t.gaE())
s=new D.z(t.b+".texture2D",u,t.d)
s.b=!0
t.a.T(s)}}}
O.fH.prototype={}
O.al.prototype={
cH:function(a){var u,t,s=this
if(!s.f.q(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
aq:function(){this.cj()
this.cH(new V.T(1,1,1))},
saY:function(a,b){this.cI(new A.W(!0,this.c.b,!1))
this.cH(b)}}
O.fJ.prototype={}
O.fK.prototype={
aq:function(){var u,t=this
t.ck()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.fL.prototype={
aq:function(){var u,t=this
t.ck()
u=t.ch
if(!(Math.abs(u-100)<$.C().a)){t.ch=100
u=new D.z(t.b+".shininess",u,100)
u.b=!0
t.a.T(u)}}}
O.dc.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u},
T:function(a){var u=this.e
if(u!=null)u.w(a)},
aR:function(){return this.T(null)},
ds:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.hA(t,n)
u.cl(t,n)
u.dh(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.i(u.y.h(0,"fov"),"$iN")
u.ch=H.i(u.y.h(0,"ratio"),"$iN")
u.cx=H.i(u.y.h(0,"boxClr"),"$iE")
u.cy=H.i(u.y.h(0,"boxTxt"),"$ibh")
u.db=H.i(u.y.h(0,"viewMat"),"$ia3")
a.cP(u)}o.a=u}if(b.e==null){t=b.d.cW(new Z.dA(a.a),$.ai())
t.at($.ai()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.Y(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.dF(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.gX(s).bZ(0)
r=r.db
r.toString
r.a9(s.a4(0,!0))
t=b.e
if(t instanceof Z.bL){t.Y(a)
t.a8(a)
t.b5(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.d_()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dj.prototype={}
T.dk.prototype={}
T.hQ.prototype={}
T.hR.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.B():u}}
T.hS.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.B():u}}
T.hT.prototype={
h_:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=W.ka(a)
t=new T.hR()
t.a=0
t.b=q
t.d=t.c=!1
W.S(u,"load",new T.hV(this,t,u,!1,q,!1,!1),!1)
return t},
aG:function(a,b,c,d,e,f){var u=W.ka(c);++this.d
W.S(u,"load",new T.hU(this,u,!1,b,!1,d,a),!1)},
cG:function(a,b,c){var u,t,s,r
b=V.jW(b)
u=V.jW(a.width)
t=V.jW(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jr()
s.width=u
s.height=t
r=C.f.dA(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mI(r.getImageData(0,0,s.width,s.height))}}}
T.hV.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.cG(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.t.dv(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.d1()}++s.e}}
T.hU.prototype={
$1:function(a){var u=this,t=u.a,s=t.cG(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.t.dv(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.d1()}++t.e}}
X.jq.prototype={}
X.fg.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.B():u},
al:function(a){var u=this.x
if(u!=null)u.w(a)},
Y:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.v(u)
q=C.d.ag(r*u)
r=s.b
if(typeof t!=="number")return H.v(t)
p=C.d.ag(r*t)
r=C.d.ag(s.c*u)
a.c=r
s=C.d.ag(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fn.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.B():u},
Y:function(a){var u
a.cy.bl(V.bu())
u=V.bu()
a.db.bl(u)},
b5:function(a){a.cy.aw()
a.db.aw()}}
X.d6.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.B():u},
al:function(a){var u=this.f
if(u!=null)u.w(a)},
ew:function(){return this.al(null)},
Y:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.am(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bl(k)
r=$.kj
if(r==null){r=V.kl()
q=V.jL()
p=$.ky
r=V.kf(r,q,p==null?$.ky=new V.A(0,0,-1):p)
$.kj=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aM(0,a,s)
if(t!=null)u=t.v(0,u)}a.db.bl(u)},
b5:function(a){a.cy.aw()
a.db.aw()}}
X.hM.prototype={}
V.cE.prototype={
b7:function(a){this.b=new P.fl(C.H)
this.c=null
this.d=H.b([],[[P.af,W.ae]])},
J:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ae]))
u=a.split("\n")
for(l=u.length,t=[W.ae],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.e7(q,0,q.length)
n=o==null?q:o
C.F.dD(p,H.jY(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gbh(m.d).push(p)}},
dr:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.af,W.ae]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.be()
for(t.toString,s=new H.m(u),s=new P.bB(t.ca(new H.ba(s,s.gl(s))).a());s.t();)r.bk(s.gC(s))}}
V.jl.prototype={
$1:function(a){var u=C.d.dw(this.a.gfW(),2)
if(u!=="0.00")P.jX(u+" fps")}}
V.eX.prototype={
bk:function(a){var u=this
switch(a.a){case"Class":u.J(a.b,"#551")
break
case"Comment":u.J(a.b,"#777")
break
case"Id":u.J(a.b,"#111")
break
case"Num":u.J(a.b,"#191")
break
case"Reserved":u.J(a.b,"#119")
break
case"String":u.J(a.b,"#171")
break
case"Symbol":u.J(a.b,"#616")
break
case"Type":u.J(a.b,"#B11")
break
case"Whitespace":u.J(a.b,"#111")
break}},
be:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hZ()
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
a1.j(0,k).k(0,k).a.push(new K.ax())
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
a1.j(0,h).k(0,h).a.push(new K.ax())
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
t=new K.a2()
s=[K.bb]
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
t=new K.a2()
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
t.ax(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.ax(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.ax(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fi.prototype={
bk:function(a){var u=this
switch(a.a){case"Builtin":u.J(a.b,"#411")
break
case"Comment":u.J(a.b,"#777")
break
case"Id":u.J(a.b,"#111")
break
case"Num":u.J(a.b,"#191")
break
case"Preprocess":u.J(a.b,"#737")
break
case"Reserved":u.J(a.b,"#119")
break
case"Symbol":u.J(a.b,"#611")
break
case"Type":u.J(a.b,"#171")
break
case"Whitespace":u.J(a.b,"#111")
break}},
be:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hZ()
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
e.j(0,k).k(0,m).a.push(new K.ax())
t=e.j(0,j).k(0,i)
u=K.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.a2()
s=[K.bb]
t.a=H.b([],s)
u.a.push(t)
u=K.q(new H.m("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.q(new H.m("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.a2()
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
u.ax(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.ax(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.ax(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fj.prototype={
bk:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.J(a.b,"#911")
u.J("=",t)
break
case"Id":u.J(a.b,t)
break
case"Other":u.J(a.b,t)
break
case"Reserved":u.J(a.b,"#119")
break
case"String":u.J(a.b,"#171")
break
case"Symbol":u.J(a.b,"#616")
break}},
be:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hZ()
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
l.j(0,o).k(0,o).a.push(new K.ax())
l.j(0,s).k(0,m).a.push(new K.ax())
u=l.j(0,m).k(0,m)
t=new K.a2()
t.a=H.b([],[K.bb])
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
t.ax(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
t=l.j(0,q)
t.d=t.a.M(q)
t=l.j(0,m)
t.d=t.a.M(m)
return l}}
V.hd.prototype={
dr:function(a,b){this.d=H.b([],[[P.af,W.ae]])
this.J(C.a.k(b,"\n"),"#111")},
bk:function(a){},
be:function(){return}}
V.hw.prototype={
dS:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.S(q,"scroll",new V.hy(o),!1)},
cO:function(a){var u,t,s,r,q,p,o,n
this.fo()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fY(a),s.toString,r=new H.m(r),r=new P.bB(s.ca(new H.ba(r,r.gl(r))).a());r.t();){s=r.gC(r)
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
if(H.n3(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kD(C.q,s,C.h,!1)
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
dz:function(a){var u,t,s,r=new V.eX("dart")
r.b7("dart")
u=new V.fi("glsl")
u.b7("glsl")
t=new V.fj("html")
t.b7("html")
s=C.a.fV(H.b([r,u,t],[V.cE]),new V.hz(a))
if(s!=null)return s
r=new V.hd("plain")
r.b7("plain")
return r},
cN:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jR(s).bq(s,"+")){b0[t]=C.b.aj(s,1)
a6.push(1)
u=!0}else if(C.b.bq(s,"-")){b0[t]=C.b.aj(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dz(a8)
r.dr(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kD(C.q,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.k1()
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
for(a2=C.a.gO(s);a2.t();)d.appendChild(a2.gC(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fo:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hZ()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.q(new H.m("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.a2()
r=[K.bb]
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
s=new K.a2()
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
s=new K.a2()
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
t=new K.a2()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.m("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.q(new H.m("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.a2()
t.a=H.b([],r)
s.a.push(t)
s=K.q(new H.m("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.ax())
s=u.j(0,i).k(0,i)
t=new K.a2()
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
V.hy.prototype={
$1:function(a){P.kt(C.i,new V.hx(this.a))}}
V.hx.prototype={
$0:function(){var u=C.d.ag(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hz.prototype={
$1:function(a){return a.a===this.a}}
Q.jj.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.n]
u.cN("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cN("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dK=u.i
u=J.cT.prototype
u.dM=u.i
u=P.h.prototype
u.dL=u.bo
u=W.P.prototype
u.br=u.ab
u=W.e4.prototype
u.dN=u.am
u=K.cP.prototype
u.dJ=u.av
u.ci=u.i
u=O.bY.prototype
u.cj=u.aq
u=O.al.prototype
u.ck=u.aq})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"m7","lr",20)
t(P,"mC","lV",6)
t(P,"mD","lW",6)
t(P,"mE","lX",6)
s(P,"kI","mA",9)
r(W,"mR",4,null,["$4"],["lY"],16,0)
r(W,"mS",4,null,["$4"],["lZ"],16,0)
var l
q(l=E.aB.prototype,"gdn",0,0,null,["$1","$0"],["dq","h6"],0,0)
q(l,"gdl",0,0,null,["$1","$0"],["dm","h3"],0,0)
p(l,"gh1","h2",3)
p(l,"gh4","h5",3)
q(l=E.dl.prototype,"gcn",0,0,null,["$1","$0"],["cp","co"],0,0)
o(l,"ghk","dt",9)
n(l=X.du.prototype,"geH","eI",4)
n(l,"ges","eu",4)
n(l,"geB","eC",2)
n(l,"geL","eM",10)
n(l,"geJ","eK",10)
n(l,"geP","eQ",2)
n(l,"geT","eU",2)
n(l,"geF","eG",2)
n(l,"geR","eS",2)
n(l,"geD","eE",2)
n(l,"geV","eW",18)
n(l,"geX","eY",4)
n(l,"gfc","fd",5)
n(l,"gf8","f9",5)
n(l,"gfa","fb",5)
q(D.bo.prototype,"gdU",0,0,null,["$1","$0"],["ao","dV"],0,0)
q(l=D.cV.prototype,"gcB",0,0,null,["$1","$0"],["cC","eN"],0,0)
n(l,"geZ","f_",19)
p(l,"gem","en",11)
p(l,"gf2","f3",11)
m(V.F.prototype,"gl","c_",12)
m(V.A.prototype,"gl","c_",12)
q(l=U.bQ.prototype,"gaD",0,0,null,["$1","$0"],["N","a2"],0,0)
p(l,"gek","el",13)
p(l,"gf0","f1",13)
q(l=U.dv.prototype,"gaD",0,0,null,["$1","$0"],["N","a2"],0,0)
n(l,"gbz","bA",1)
n(l,"gbB","bC",1)
n(l,"gbD","bE",1)
q(l=U.dw.prototype,"gaD",0,0,null,["$1","$0"],["N","a2"],0,0)
n(l,"gbz","bA",1)
n(l,"gbB","bC",1)
n(l,"gbD","bE",1)
n(l,"ged","ee",1)
n(l,"gef","eg",1)
n(l,"gfw","fz",1)
n(l,"gfu","fv",1)
n(l,"gfs","ft",1)
n(U.dx.prototype,"gei","ej",1)
q(l=M.cF.prototype,"gU",0,0,null,["$1","$0"],["V","aQ"],0,0)
p(l,"gf4","f5",14)
p(l,"gf6","f7",14)
q(M.cH.prototype,"gU",0,0,null,["$1","$0"],["V","aQ"],0,0)
q(l=M.cM.prototype,"gU",0,0,null,["$1","$0"],["V","aQ"],0,0)
p(l,"gex","ey",3)
p(l,"gez","eA",3)
q(l=O.cZ.prototype,"gaE",0,0,null,["$1","$0"],["T","aR"],0,0)
q(l,"gfi",0,0,null,["$1","$0"],["cE","fj"],0,0)
p(l,"geo","ep",15)
p(l,"geq","er",15)
q(O.bY.prototype,"gaE",0,0,null,["$1","$0"],["T","aR"],0,0)
q(O.dc.prototype,"gaE",0,0,null,["$1","$0"],["T","aR"],0,0)
q(X.d6.prototype,"gev",0,0,null,["$1","$0"],["al","ew"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Y,null)
s(P.Y,[H.jC,J.a,J.a0,P.dS,P.h,H.ba,P.fq,H.cN,H.ie,H.i3,P.bp,H.bM,H.e9,P.X,H.fx,H.fy,H.fs,P.ef,P.bA,P.bB,P.dB,P.dh,P.hI,P.dm,P.j5,P.iT,P.iN,P.dR,P.u,P.eN,P.fm,P.j3,P.au,P.aa,P.a8,P.b1,P.hb,P.df,P.dJ,P.ff,P.fh,P.af,P.bW,P.bc,P.n,P.ap,W.eT,W.cg,W.J,W.d4,W.e4,W.iY,W.cO,W.aH,W.iS,W.el,P.ek,P.iO,K.ax,K.cP,K.bb,K.hi,K.hr,L.dg,L.dn,L.dp,L.hY,O.ay,O.bZ,E.eJ,E.aB,E.hj,E.dl,Z.dz,Z.dA,Z.bL,Z.br,Z.aR,D.eM,D.bq,D.R,X.cD,X.cU,X.fv,X.fB,X.ab,X.h_,X.i_,X.du,D.eI,D.bo,D.a1,D.hf,D.hD,V.T,V.az,V.f6,V.d_,V.aE,V.Z,V.U,V.aK,V.d9,V.F,V.A,U.dv,U.dw,U.dx,M.cH,M.cM,M.ag,A.cz,A.eD,A.W,A.cA,A.cJ,A.d7,A.de,A.fI,A.c9,A.ca,A.cc,A.cd,A.ds,A.ia,F.b2,F.bU,F.c2,F.hs,F.ht,F.hu,F.hv,F.bz,F.ip,F.iq,F.it,F.iu,O.dj,O.bY,O.fJ,T.hT,X.jq,X.hM,X.fn,X.d6,V.cE,V.hw])
s(J.a,[J.fr,J.cS,J.cT,J.b6,J.bT,J.b7,H.c1,W.e,W.eA,W.cB,W.ak,W.H,W.dD,W.a9,W.eY,W.eZ,W.dF,W.cL,W.dH,W.f0,W.j,W.dK,W.aD,W.fk,W.dN,W.b3,W.fA,W.fU,W.dT,W.dU,W.aF,W.dV,W.dY,W.aI,W.e1,W.e3,W.aN,W.e5,W.aO,W.ea,W.aq,W.ed,W.hX,W.aQ,W.eg,W.i1,W.ih,W.em,W.eo,W.eq,W.es,W.eu,P.b9,P.dP,P.bd,P.e_,P.hh,P.eb,P.be,P.ei,P.eE,P.dC,P.da,P.e7])
s(J.cT,[J.hc,J.by,J.b8])
t(J.jB,J.b6)
s(J.bT,[J.cR,J.cQ])
t(P.fz,P.dS)
s(P.fz,[H.dt,W.iE,W.a_,P.fb])
t(H.m,H.dt)
s(P.h,[H.p,H.bX,H.ce,P.fp])
s(H.p,[H.cW,H.bt])
t(H.f3,H.bX)
s(P.fq,[H.cY,H.iy])
t(H.fE,H.cW)
s(P.bp,[H.h8,H.fu,H.id,H.eL,H.hp,P.d5,P.ad,P.ig,P.ic,P.c6,P.eQ,P.eW])
s(H.bM,[H.jn,H.hN,H.ft,H.jf,H.jg,H.jh,P.iA,P.iz,P.iB,P.iC,P.j2,P.j1,P.ja,P.iQ,P.iR,P.fD,P.f1,P.f2,W.f4,W.fW,W.fY,W.ho,W.hH,W.iI,W.h7,W.h6,W.iU,W.iV,W.j0,W.j4,P.jb,P.fc,P.fd,P.eG,E.hk,E.hl,E.hm,E.hW,D.f7,D.f8,F.j6,F.iw,F.iv,F.ir,F.is,O.fM,O.fN,O.fO,O.fP,O.fQ,O.fR,O.fS,O.fT,T.hV,T.hU,V.jl,V.hy,V.hx,V.hz,Q.jj])
s(H.hN,[H.hF,H.bJ])
t(P.fC,P.X)
s(P.fC,[H.I,W.iD])
t(H.d0,H.c1)
s(H.d0,[H.ch,H.cj])
t(H.ci,H.ch)
t(H.c0,H.ci)
t(H.ck,H.cj)
t(H.d1,H.ck)
s(H.d1,[H.h0,H.h1,H.h2,H.h3,H.h4,H.d2,H.h5])
t(P.iZ,P.fp)
t(P.iP,P.j5)
t(P.iM,P.iT)
t(P.eR,P.hI)
t(P.f5,P.eN)
s(P.eR,[P.fl,P.ij])
t(P.ii,P.f5)
s(P.a8,[P.M,P.w])
s(P.ad,[P.bw,P.fo])
s(W.e,[W.D,W.fa,W.aM,W.cl,W.aP,W.ar,W.cn,W.ix,W.cf,P.eH,P.bl])
s(W.D,[W.P,W.b_])
s(W.P,[W.o,P.k])
s(W.o,[W.eB,W.eC,W.bm,W.bn,W.ae,W.fe,W.bS,W.hq,W.di,W.hK,W.hL,W.c7])
t(W.eS,W.ak)
t(W.bN,W.dD)
s(W.a9,[W.eU,W.eV])
t(W.dG,W.dF)
t(W.cK,W.dG)
t(W.dI,W.dH)
t(W.f_,W.dI)
t(W.aC,W.cB)
t(W.dL,W.dK)
t(W.f9,W.dL)
t(W.dO,W.dN)
t(W.bR,W.dO)
t(W.bf,W.j)
s(W.bf,[W.bs,W.an,W.bx])
t(W.fV,W.dT)
t(W.fX,W.dU)
t(W.dW,W.dV)
t(W.fZ,W.dW)
t(W.dZ,W.dY)
t(W.d3,W.dZ)
t(W.e2,W.e1)
t(W.he,W.e2)
t(W.hn,W.e3)
t(W.cm,W.cl)
t(W.hB,W.cm)
t(W.e6,W.e5)
t(W.hC,W.e6)
t(W.hG,W.ea)
t(W.ee,W.ed)
t(W.hO,W.ee)
t(W.co,W.cn)
t(W.hP,W.co)
t(W.eh,W.eg)
t(W.i0,W.eh)
t(W.bi,W.an)
t(W.en,W.em)
t(W.iF,W.en)
t(W.dE,W.cL)
t(W.ep,W.eo)
t(W.iJ,W.ep)
t(W.er,W.eq)
t(W.dX,W.er)
t(W.et,W.es)
t(W.iW,W.et)
t(W.ev,W.eu)
t(W.iX,W.ev)
t(W.iG,W.iD)
t(W.iH,P.dh)
t(W.j_,W.e4)
t(P.a7,P.iO)
t(P.dQ,P.dP)
t(P.fw,P.dQ)
t(P.e0,P.e_)
t(P.h9,P.e0)
t(P.c5,P.k)
t(P.ec,P.eb)
t(P.hJ,P.ec)
t(P.ej,P.ei)
t(P.i2,P.ej)
t(P.eF,P.dC)
t(P.ha,P.bl)
t(P.e8,P.e7)
t(P.hE,P.e8)
s(K.cP,[K.a2,L.dr])
s(E.eJ,[Z.cC,A.db,T.dk])
s(D.R,[D.b4,D.b5,D.z,X.hg])
s(X.hg,[X.cX,X.aG,X.c_,X.dq])
s(O.ay,[D.cV,U.bQ,M.cF])
s(D.eM,[U.eP,U.a6])
t(U.cG,U.a6)
s(A.db,[A.fF,A.hA])
s(A.ds,[A.bg,A.i7,A.i8,A.i9,A.i5,A.N,A.i6,A.E,A.c8,A.ib,A.cb,A.a3,A.V,A.bh])
s(O.dj,[O.cZ,O.dc])
s(O.bY,[O.fG,O.fH,O.al])
s(O.al,[O.fK,O.fL])
s(T.dk,[T.hQ,T.hS])
t(T.hR,T.hQ)
t(X.fg,X.hM)
s(V.cE,[V.eX,V.fi,V.fj,V.hd])
u(H.dt,H.ie)
u(H.ch,P.u)
u(H.ci,H.cN)
u(H.cj,P.u)
u(H.ck,H.cN)
u(P.dS,P.u)
u(W.dD,W.eT)
u(W.dF,P.u)
u(W.dG,W.J)
u(W.dH,P.u)
u(W.dI,W.J)
u(W.dK,P.u)
u(W.dL,W.J)
u(W.dN,P.u)
u(W.dO,W.J)
u(W.dT,P.X)
u(W.dU,P.X)
u(W.dV,P.u)
u(W.dW,W.J)
u(W.dY,P.u)
u(W.dZ,W.J)
u(W.e1,P.u)
u(W.e2,W.J)
u(W.e3,P.X)
u(W.cl,P.u)
u(W.cm,W.J)
u(W.e5,P.u)
u(W.e6,W.J)
u(W.ea,P.X)
u(W.ed,P.u)
u(W.ee,W.J)
u(W.cn,P.u)
u(W.co,W.J)
u(W.eg,P.u)
u(W.eh,W.J)
u(W.em,P.u)
u(W.en,W.J)
u(W.eo,P.u)
u(W.ep,W.J)
u(W.eq,P.u)
u(W.er,W.J)
u(W.es,P.u)
u(W.et,W.J)
u(W.eu,P.u)
u(W.ev,W.J)
u(P.dP,P.u)
u(P.dQ,W.J)
u(P.e_,P.u)
u(P.e0,W.J)
u(P.eb,P.u)
u(P.ec,W.J)
u(P.ei,P.u)
u(P.ej,W.J)
u(P.dC,P.X)
u(P.e7,P.u)
u(P.e8,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",a8:"num",n:"String",au:"bool",bc:"Null",af:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[D.R]},{func:1,ret:-1,args:[W.an]},{func:1,ret:-1,args:[P.w,[P.h,E.aB]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bx]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.bc,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bs]},{func:1,ret:-1,args:[P.w,[P.h,D.a1]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.h,U.a6]]},{func:1,ret:-1,args:[P.w,[P.h,M.ag]]},{func:1,ret:-1,args:[P.w,[P.h,V.aE]]},{func:1,ret:P.au,args:[W.P,P.n,P.n,W.cg]},{func:1,ret:P.bc,args:[,]},{func:1,ret:-1,args:[W.bi]},{func:1,ret:P.au,args:[[P.h,D.a1]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bm.prototype
C.f=W.bn.prototype
C.F=W.ae.prototype
C.I=J.a.prototype
C.a=J.b6.prototype
C.J=J.cQ.prototype
C.c=J.cR.prototype
C.j=J.cS.prototype
C.d=J.bT.prototype
C.b=J.b7.prototype
C.K=J.b8.prototype
C.r=J.hc.prototype
C.t=P.da.prototype
C.u=W.di.prototype
C.m=J.by.prototype
C.v=W.bi.prototype
C.w=W.cf.prototype
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.x=function() {
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
C.C=function(getTagFallback) {
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
C.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.z=function(hooks) {
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
C.B=function(hooks) {
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
C.A=function(hooks) {
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

C.D=new P.hb()
C.h=new P.ii()
C.E=new P.ij()
C.e=new P.iP()
C.i=new P.b1(0)
C.G=new P.b1(5e6)
C.H=new P.fm("element",!1,!1,!1)
C.L=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.M=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.N=H.b(u([]),[P.n])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.n])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.O=new P.bA(null,2)})();(function staticFields(){$.aj=0
$.bK=null
$.k2=null
$.kK=null
$.kH=null
$.kN=null
$.jc=null
$.ji=null
$.jU=null
$.bC=null
$.cr=null
$.cs=null
$.jO=!1
$.ah=C.e
$.a4=[]
$.aA=null
$.jv=null
$.k8=null
$.k7=null
$.dM=P.kc(P.n,P.fh)
$.kg=null
$.kk=null
$.ao=null
$.kp=null
$.kx=null
$.kz=null
$.ik=null
$.il=null
$.im=null
$.ky=null
$.kj=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"nb","kR",function(){return H.kJ("_$dart_dartClosure")})
u($,"nc","jZ",function(){return H.kJ("_$dart_js")})
u($,"nd","kS",function(){return H.as(H.i4({
toString:function(){return"$receiver$"}}))})
u($,"ne","kT",function(){return H.as(H.i4({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"nf","kU",function(){return H.as(H.i4(null))})
u($,"ng","kV",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"nj","kY",function(){return H.as(H.i4(void 0))})
u($,"nk","kZ",function(){return H.as(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"ni","kX",function(){return H.as(H.kv(null))})
u($,"nh","kW",function(){return H.as(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"nm","l0",function(){return H.as(H.kv(void 0))})
u($,"nl","l_",function(){return H.as(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nz","k_",function(){return P.lU()})
u($,"nC","l5",function(){return P.lJ("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nA","l4",function(){return P.kd(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)})
u($,"nt","l3",function(){return Z.ac(0)})
u($,"nn","l1",function(){return Z.ac(511)})
u($,"nv","ai",function(){return Z.ac(1)})
u($,"nu","aW",function(){return Z.ac(2)})
u($,"np","aV",function(){return Z.ac(4)})
u($,"nw","aX",function(){return Z.ac(8)})
u($,"nx","bk",function(){return Z.ac(16)})
u($,"nq","cv",function(){return Z.ac(32)})
u($,"nr","cw",function(){return Z.ac(64)})
u($,"ns","l2",function(){return Z.ac(96)})
u($,"ny","bH",function(){return Z.ac(128)})
u($,"no","aU",function(){return Z.ac(256)})
u($,"na","kQ",function(){return new V.f6(1e-9)})
u($,"n9","C",function(){return $.kQ()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.c1,ArrayBufferView:H.c1,Float32Array:H.c0,Float64Array:H.c0,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.d2,CanvasPixelArray:H.d2,Uint8Array:H.h5,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.eA,HTMLAnchorElement:W.eB,HTMLAreaElement:W.eC,Blob:W.cB,HTMLBodyElement:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.b_,CharacterData:W.b_,Comment:W.b_,ProcessingInstruction:W.b_,Text:W.b_,CSSPerspective:W.eS,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.bN,MSStyleCSSProperties:W.bN,CSS2Properties:W.bN,CSSImageValue:W.a9,CSSKeywordValue:W.a9,CSSNumericValue:W.a9,CSSPositionValue:W.a9,CSSResourceValue:W.a9,CSSUnitValue:W.a9,CSSURLImageValue:W.a9,CSSStyleValue:W.a9,CSSMatrixComponent:W.ak,CSSRotation:W.ak,CSSScale:W.ak,CSSSkew:W.ak,CSSTranslation:W.ak,CSSTransformComponent:W.ak,CSSTransformValue:W.eU,CSSUnparsedValue:W.eV,DataTransferItemList:W.eY,HTMLDivElement:W.ae,DOMException:W.eZ,ClientRectList:W.cK,DOMRectList:W.cK,DOMRectReadOnly:W.cL,DOMStringList:W.f_,DOMTokenList:W.f0,Element:W.P,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aC,FileList:W.f9,FileWriter:W.fa,HTMLFormElement:W.fe,Gamepad:W.aD,History:W.fk,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.b3,HTMLImageElement:W.bS,KeyboardEvent:W.bs,Location:W.fA,MediaList:W.fU,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.aF,MimeTypeArray:W.fZ,PointerEvent:W.an,MouseEvent:W.an,DragEvent:W.an,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.d3,RadioNodeList:W.d3,Plugin:W.aI,PluginArray:W.he,RTCStatsReport:W.hn,HTMLSelectElement:W.hq,SourceBuffer:W.aM,SourceBufferList:W.hB,SpeechGrammar:W.aN,SpeechGrammarList:W.hC,SpeechRecognitionResult:W.aO,Storage:W.hG,CSSStyleSheet:W.aq,StyleSheet:W.aq,HTMLTableElement:W.di,HTMLTableRowElement:W.hK,HTMLTableSectionElement:W.hL,HTMLTemplateElement:W.c7,TextTrack:W.aP,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.hO,TextTrackList:W.hP,TimeRanges:W.hX,Touch:W.aQ,TouchEvent:W.bx,TouchList:W.i0,TrackDefaultList:W.i1,CompositionEvent:W.bf,FocusEvent:W.bf,TextEvent:W.bf,UIEvent:W.bf,URL:W.ih,VideoTrackList:W.ix,WheelEvent:W.bi,Window:W.cf,DOMWindow:W.cf,CSSRuleList:W.iF,ClientRect:W.dE,DOMRect:W.dE,GamepadList:W.iJ,NamedNodeMap:W.dX,MozNamedAttrMap:W.dX,SpeechRecognitionResultList:W.iW,StyleSheetList:W.iX,SVGLength:P.b9,SVGLengthList:P.fw,SVGNumber:P.bd,SVGNumberList:P.h9,SVGPointList:P.hh,SVGScriptElement:P.c5,SVGStringList:P.hJ,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.be,SVGTransformList:P.i2,AudioBuffer:P.eE,AudioParamMap:P.eF,AudioTrackList:P.eH,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.ha,WebGL2RenderingContext:P.da,SQLResultSetRowList:P.hE})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.d0.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.ci.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
H.d1.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(Q.kL,[])
else Q.kL([])})})()
//# sourceMappingURL=test.dart.js.map
