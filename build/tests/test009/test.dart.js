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
a[c]=function(){a[c]=function(){H.mP(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jA"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jA(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jo:function jo(){},
lh:function(a,b,c,d){if(!!a.$io)return new H.eP(a,b,[c,d])
return new H.bN(a,b,[c,d])},
fc:function(){return new P.bV("No element")},
lb:function(){return new P.bV("Too many elements")},
lA:function(a,b){var u=J.aP(a)
if(typeof u!=="number")return u.C()
H.d3(a,0,u-1,b)},
d3:function(a,b,c,d){if(c-b<=32)H.lz(a,b,c,d)
else H.ly(a,b,c,d)},
lz:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ei(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.V()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
ly:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.W(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.W(a4+a5,2),f=g-j,e=g+j,d=J.ei(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.V()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.H(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.Z()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.V()
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
if(typeof l!=="number")return l.Z()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.V()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.V()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
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
H.d3(a3,a4,t-2,a6)
H.d3(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.h(a3,t),b),0);)++t
for(;J.H(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.d3(a3,t,s,a6)}else H.d3(a3,t,s,a6)},
k:function k(a){this.a=a},
o:function o(){},
cL:function cL(){},
b_:function b_(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(a,b,c){this.a=a
this.b=b
this.$ti=c},
eP:function eP(a,b,c){this.a=a
this.b=b
this.$ti=c},
cN:function cN(a,b){this.a=null
this.b=a
this.c=b},
ft:function ft(a,b,c){this.a=a
this.b=b
this.$ti=c},
c4:function c4(a,b,c){this.a=a
this.b=b
this.$ti=c},
im:function im(a,b){this.a=a
this.b=b},
cB:function cB(){},
i0:function i0(){},
dh:function dh(){},
cj:function(a){var u,t=H.mR(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
my:function(a){return v.types[a]},
mF:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$ix},
c:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.af(a)
if(typeof u!=="string")throw H.d(H.ba(a))
return u},
bS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bT:function(a){return H.lk(a)+H.kp(H.ci(a),0,null)},
lk:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibt){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cj(t.length>1&&C.b.aM(t,0)===36?C.b.ab(t,1):t)},
k4:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lt:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ba(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b_(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.ba(s))}return H.k4(r)},
ls:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.ba(s))
if(s<0)throw H.d(H.ba(s))
if(s>65535)return H.lt(a)}return H.k4(a)},
jr:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b_(u,10))>>>0,56320|u&1023)}throw H.d(P.aD(a,0,1114111,null,null))},
bo:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lr:function(a){var u=H.bo(a).getFullYear()+0
return u},
lp:function(a){var u=H.bo(a).getMonth()+1
return u},
ll:function(a){var u=H.bo(a).getDate()+0
return u},
lm:function(a){var u=H.bo(a).getHours()+0
return u},
lo:function(a){var u=H.bo(a).getMinutes()+0
return u},
lq:function(a){var u=H.bo(a).getSeconds()+0
return u},
ln:function(a){var u=H.bo(a).getMilliseconds()+0
return u},
v:function(a){throw H.d(H.ba(a))},
f:function(a,b){if(a==null)J.aP(a)
throw H.d(H.bz(a,b))},
bz:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ag(!0,b,s,null)
u=J.aP(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d0(b,s)},
ms:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bp(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bp(a,c,!0,b,"end",u)
return new P.ag(!0,b,"end",null)},
ba:function(a){return new P.ag(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.cX()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kB})
u.name=""}else u.toString=H.kB
return u},
kB:function(){return J.af(this.dartException)},
u:function(a){throw H.d(a)},
q:function(a){throw H.d(P.aT(a))},
aq:function(a){var u,t,s,r,q,p
a=H.kA(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hP(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hQ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kd:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k0:function(a,b){return new H.fZ(a,b==null?null:b.method)},
jp:function(a,b){var u=b==null,t=u?null:b.method
return new H.fi(a,t,u?null:b.receiver)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jc(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b_(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jp(H.c(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k0(H.c(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kE()
q=$.kF()
p=$.kG()
o=$.kH()
n=$.kK()
m=$.kL()
l=$.kJ()
$.kI()
k=$.kN()
j=$.kM()
i=r.a6(u)
if(i!=null)return f.$1(H.jp(u,i))
else{i=q.a6(u)
if(i!=null){i.method="call"
return f.$1(H.jp(u,i))}else{i=p.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=n.a6(u)
if(i==null){i=m.a6(u)
if(i==null){i=l.a6(u)
if(i==null){i=o.a6(u)
if(i==null){i=k.a6(u)
if(i==null){i=j.a6(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k0(u,i))}}return f.$1(new H.i_(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d5()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ag(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d5()
return a},
jD:function(a){var u
if(a==null)return new H.dX(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dX(a)},
mw:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mE:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.r("Unsupported number of arguments for wrapped closure"))},
by:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mE)
a.$identity=u
return u},
l4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hv().constructor.prototype):Object.create(new H.bD(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.D()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jQ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l0(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jQ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l0:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.my,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jO:H.je
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
l1:function(a,b,c,d){var u=H.je
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jQ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l1(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.D()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bE
return new Function(r+H.c(q==null?$.bE=H.ew("self"):q)+";return "+p+"."+H.c(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.D()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bE
return new Function(r+H.c(q==null?$.bE=H.ew("self"):q)+"."+H.c(u)+"("+o+");}")()},
l2:function(a,b,c,d){var u=H.je,t=H.jO
switch(b?-1:a){case 0:throw H.d(H.lw("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l3:function(a,b){var u,t,s,r,q,p,o,n=$.bE
if(n==null)n=$.bE=H.ew("self")
u=$.jN
if(u==null)u=$.jN=H.ew("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l2(s,!q,t,b)
if(s===1){n="return function(){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+");"
u=$.ah
if(typeof u!=="number")return u.D()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.c(n)+"."+H.c(t)+"(this."+H.c(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.D()
$.ah=u+1
return new Function(n+u+"}")()},
jA:function(a,b,c,d,e,f,g){return H.l4(a,b,c,d,!!e,!!f,g)},
je:function(a){return a.a},
jO:function(a){return a.c},
ew:function(a){var u,t,s,r=new H.bD("self","target","receiver","name"),q=J.jm(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mJ:function(a,b){throw H.d(H.l_(a,H.cj(b.substring(2))))},
n:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.mJ(a,b)},
mu:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l_:function(a,b){return new H.ex("CastError: "+P.jk(a)+": type '"+H.c(H.mm(a))+"' is not a subtype of type '"+b+"'")},
mm:function(a){var u,t=J.S(a)
if(!!t.$ibF){u=H.mu(t)
if(u!=null)return H.mK(u)
return"Closure"}return H.bT(a)},
mP:function(a){throw H.d(new P.eH(a))},
lw:function(a){return new H.hf(a)},
kv:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
ci:function(a){if(a==null)return
return a.$ti},
no:function(a,b,c){return H.ja(a["$a"+H.c(c)],H.ci(b))},
mx:function(a,b,c,d){var u=H.ja(a["$a"+H.c(c)],H.ci(b))
return u==null?null:u[d]},
jC:function(a,b,c){var u=H.ja(a["$a"+H.c(b)],H.ci(a))
return u==null?null:u[c]},
ae:function(a,b){var u=H.ci(a)
return u==null?null:u[b]},
mK:function(a){return H.b9(a,null)},
b9:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cj(a[0].name)+H.kp(a,1,b)
if(typeof a=="function")return H.cj(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.c(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.c(b[t])}if('func' in a)return H.lS(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lS:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.W)p+=" extends "+H.b9(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b9(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b9(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b9(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.mv(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b9(d[c],a0)+(" "+H.c(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kp:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.an("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b9(p,c)}return"<"+u.i(0)+">"},
ja:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nm:function(a,b,c){return a.apply(b,H.ja(J.S(b)["$a"+H.c(c)],H.ci(b)))},
nn:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mG:function(a){var u,t,s,r,q=$.kw.$1(a),p=$.j0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ks.$2(a,q)
if(q!=null){p=$.j0[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j6[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j8(u)
$.j0[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j6[q]=u
return u}if(s==="-"){r=H.j8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ky(a,u)
if(s==="*")throw H.d(P.ke(q))
if(v.leafTags[q]===true){r=H.j8(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ky(a,u)},
ky:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jF(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j8:function(a){return J.jF(a,!1,null,!!a.$ix)},
mH:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j8(u)
else return J.jF(u,c,null,null)},
mC:function(){if(!0===$.jE)return
$.jE=!0
H.mD()},
mD:function(){var u,t,s,r,q,p,o,n
$.j0=Object.create(null)
$.j6=Object.create(null)
H.mB()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kz.$1(q)
if(p!=null){o=H.mH(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mB:function(){var u,t,s,r,q,p,o=C.w()
o=H.bx(C.x,H.bx(C.y,H.bx(C.p,H.bx(C.p,H.bx(C.z,H.bx(C.A,H.bx(C.B(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kw=new H.j3(r)
$.ks=new H.j4(q)
$.kz=new H.j5(p)},
bx:function(a,b){return a(b)||b},
le:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(new P.f2("Illegal RegExp pattern ("+String(p)+")",a))},
mM:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mt:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kA:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jH:function(a,b,c){var u=H.mN(a,b,c)
return u},
mN:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kA(b),'g'),H.mt(c))},
hP:function hP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fZ:function fZ(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
i_:function i_(a){this.a=a},
jc:function jc(a){this.a=a},
dX:function dX(a){this.a=a
this.b=null},
bF:function bF(){},
hD:function hD(){},
hv:function hv(){},
bD:function bD(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ex:function ex(a){this.a=a},
hf:function hf(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fh:function fh(a){this.a=a},
fm:function fm(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bn:function bn(a,b){this.a=a
this.$ti=b},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j3:function j3(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
fg:function fg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cf:function(a){return a},
ar:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bz(b,a))},
lR:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.ms(a,b,c))
return b},
bR:function bR(){},
cS:function cS(){},
bQ:function bQ(){},
cT:function cT(){},
fQ:function fQ(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
cU:function cU(){},
fV:function fV(){},
c7:function c7(){},
c8:function c8(){},
c9:function c9(){},
ca:function ca(){},
mv:function(a){return J.jV(a?Object.keys(a):[],null)},
mR:function(a){return v.mangledGlobalNames[a]},
mI:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jF:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j2:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jE==null){H.mC()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.ke("Return interceptor for "+H.c(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jI()]
if(r!=null)return r
r=H.mG(a)
if(r!=null)return r
if(typeof a=="function")return C.I
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jI(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
lc:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.jd(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.aD(a,0,4294967295,"length",null))
return J.jV(new Array(a),b)},
jV:function(a,b){return J.jm(H.b(a,[b]))},
jm:function(a){a.fixed$length=Array
return a},
ld:function(a,b){return J.cn(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cF.prototype
return J.ff.prototype}if(typeof a=="string")return J.aX.prototype
if(a==null)return J.cG.prototype
if(typeof a=="boolean")return J.fe.prototype
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j2(a)},
ei:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j2(a)},
j1:function(a){if(a==null)return a
if(a.constructor==Array)return J.aW.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j2(a)},
ku:function(a){if(typeof a=="number")return J.bK.prototype
if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.bt.prototype
return a},
jB:function(a){if(typeof a=="string")return J.aX.prototype
if(a==null)return a
if(!(a instanceof P.W))return J.bt.prototype
return a},
ej:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aY.prototype
return a}if(a instanceof P.W)return a
return J.j2(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).p(a,b)},
jK:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ku(a).q(a,b)},
cm:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mF(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ei(a).h(a,b)},
kT:function(a,b,c){return J.ej(a).f1(a,b,c)},
kU:function(a,b,c,d){return J.ej(a).fl(a,b,c,d)},
cn:function(a,b){return J.ku(a).aG(a,b)},
el:function(a,b){return J.j1(a).B(a,b)},
kV:function(a,b){return J.j1(a).F(a,b)},
kW:function(a){return J.ej(a).gfp(a)},
bC:function(a){return J.S(a).gG(a)},
aO:function(a){return J.j1(a).gN(a)},
aP:function(a){return J.ei(a).gl(a)},
jL:function(a){return J.j1(a).h5(a)},
kX:function(a,b){return J.ej(a).h9(a,b)},
kY:function(a,b,c){return J.jB(a).aW(a,b,c)},
kZ:function(a){return J.jB(a).hg(a)},
af:function(a){return J.S(a).i(a)},
a:function a(){},
fe:function fe(){},
cG:function cG(){},
cH:function cH(){},
h2:function h2(){},
bt:function bt(){},
aY:function aY(){},
aW:function aW(a){this.$ti=a},
jn:function jn(a){this.$ti=a},
a1:function a1(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bK:function bK(){},
cF:function cF(){},
ff:function ff(){},
aX:function aX(){}},P={
lF:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mn()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.by(new P.ip(s),1)).observe(u,{childList:true})
return new P.io(s,u,t)}else if(self.setImmediate!=null)return P.mo()
return P.mp()},
lG:function(a){self.scheduleImmediate(H.by(new P.iq(a),0))},
lH:function(a){self.setImmediate(H.by(new P.ir(a),0))},
lI:function(a){P.ju(C.i,a)},
ju:function(a,b){var u=C.c.W(a.a,1000)
return P.lP(u<0?0:u,b)},
kc:function(a,b){var u=C.c.W(a.a,1000)
return P.lQ(u<0?0:u,b)},
lP:function(a,b){var u=new P.e2()
u.dG(a,b)
return u},
lQ:function(a,b){var u=new P.e2()
u.dH(a,b)
return u},
nk:function(a){return new P.bu(a,1)},
lL:function(){return C.M},
lM:function(a){return new P.bu(a,3)},
lV:function(a,b){return new P.iO(a,[b])},
mg:function(){var u,t
for(;u=$.bw,u!=null;){$.ch=null
t=u.b
$.bw=t
if(t==null)$.cg=null
u.a.$0()}},
ml:function(){$.jy=!0
try{P.mg()}finally{$.ch=null
$.jy=!1
if($.bw!=null)$.jJ().$1(P.kt())}},
mj:function(a){var u=new P.dn(a)
if($.bw==null){$.bw=$.cg=u
if(!$.jy)$.jJ().$1(P.kt())}else $.cg=$.cg.b=u},
mk:function(a){var u,t,s=$.bw
if(s==null){P.mj(a)
$.ch=$.cg
return}u=new P.dn(a)
t=$.ch
if(t==null){u.b=s
$.bw=$.ch=u}else{u.b=t.b
$.ch=t.b=u
if(u.b==null)$.cg=u}},
kb:function(a,b){var u=$.ad
if(u===C.e)return P.ju(a,b)
return P.ju(a,u.fq(b))},
lC:function(a,b){var u=$.ad
if(u===C.e)return P.kc(a,b)
return P.kc(a,u.cE(b,P.db))},
kq:function(a,b,c,d,e){var u={}
u.a=d
P.mk(new P.iY(u,e))},
mh:function(a,b,c,d){var u,t=$.ad
if(t===c)return d.$0()
$.ad=c
u=t
try{t=d.$0()
return t}finally{$.ad=u}},
mi:function(a,b,c,d,e){var u,t=$.ad
if(t===c)return d.$1(e)
$.ad=c
u=t
try{t=d.$1(e)
return t}finally{$.ad=u}},
ip:function ip(a){this.a=a},
io:function io(a,b,c){this.a=a
this.b=b
this.c=c},
iq:function iq(a){this.a=a},
ir:function ir(a){this.a=a},
e2:function e2(){this.c=0},
iS:function iS(a,b){this.a=a
this.b=b},
iR:function iR(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b){this.a=a
this.b=b},
bv:function bv(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iO:function iO(a,b){this.a=a
this.$ti=b},
dn:function dn(a){this.a=a
this.b=null},
d7:function d7(){},
hy:function hy(){},
db:function db(){},
iV:function iV(){},
iY:function iY(a,b){this.a=a
this.b=b},
iE:function iE(){},
iF:function iF(a,b){this.a=a
this.b=b},
iG:function iG(a,b,c){this.a=a
this.b=b
this.c=c},
jW:function(a,b){return new H.G([a,b])},
lf:function(a){return H.mw(a,new H.G([null,null]))},
bL:function(a){return new P.iB([a])},
jx:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lO:function(a,b){var u=new P.dE(a,b)
u.c=a.e
return u},
la:function(a,b,c){var u,t
if(P.jz(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.a0.push(a)
try{P.lU(a,u)}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=P.k9(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jl:function(a,b,c){var u,t
if(P.jz(a))return b+"..."+c
u=new P.an(b)
$.a0.push(a)
try{t=u
t.a=P.k9(t.a,a,", ")}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jz:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
lU:function(a,b){var u,t,s,r,q,p,o,n=a.gN(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.t())return
u=H.c(n.gw(n))
b.push(u)
m+=u.length+2;++l}if(!n.t()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gw(n);++l
if(!n.t()){if(l<=4){b.push(H.c(r))
return}t=H.c(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gw(n);++l
for(;n.t();r=q,q=p){p=n.gw(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.c(r)
t=H.c(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
jX:function(a,b){var u,t,s=P.bL(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t)s.n(0,a[t])
return s},
jY:function(a){var u,t={}
if(P.jz(a))return"{...}"
u=new P.an("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.kV(a,new P.fs(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iB:function iB(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iC:function iC(a){this.a=a
this.c=this.b=null},
dE:function dE(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fb:function fb(){},
fo:function fo(){},
t:function t(){},
fr:function fr(){},
fs:function fs(a,b){this.a=a
this.b=b},
V:function V(){},
iI:function iI(){},
dF:function dF(){},
ez:function ez(){},
eC:function eC(){},
eR:function eR(){},
f9:function f9(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f8:function f8(a){this.a=a},
i3:function i3(){},
i4:function i4(){},
iT:function iT(a){this.b=0
this.c=a},
l8:function(a){if(a instanceof H.bF)return a.i(0)
return"Instance of '"+H.c(H.bT(a))+"'"},
lg:function(a,b,c){var u,t,s=J.lc(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jq:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aO(a);u.t();)t.push(u.gw(u))
if(b)return t
return J.jm(t)},
jt:function(a){var u,t=a.length,s=P.js(0,null,t)
if(typeof s!=="number")return s.Z()
u=s<t
return H.ls(u?C.a.dk(a,0,s):a)},
lu:function(a){return new H.fg(a,H.le(a,!1,!0,!1,!1,!1))},
k9:function(a,b,c){var u=J.aO(b)
if(!u.t())return a
if(c.length===0){do a+=H.c(u.gw(u))
while(u.t())}else{a+=H.c(u.gw(u))
for(;u.t();)a=a+c+H.c(u.gw(u))}return a},
ko:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kS().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fv(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jr(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l5:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l6:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cw:function(a){if(a>=10)return""+a
return"0"+a},
jS:function(a){return new P.aU(1000*a)},
jk:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.af(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l8(a)},
jd:function(a,b,c){return new P.ag(!0,a,b,c)},
d0:function(a,b){return new P.bp(null,null,!0,a,b,"Value not in range")},
aD:function(a,b,c,d,e){return new P.bp(b,c,!0,a,d,"Invalid value")},
js:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.d(P.aD(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.d(P.aD(b,a,c,"end",null))
return b}return c},
k5:function(a,b){if(typeof a!=="number")return a.Z()
if(a<0)throw H.d(P.aD(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.aP(b):e
return new P.fa(u,!0,a,c,"Index out of range")},
y:function(a){return new P.i1(a)},
ke:function(a){return new P.hZ(a)},
k8:function(a){return new P.bV(a)},
aT:function(a){return new P.eB(a)},
r:function(a){return new P.dw(a)},
jG:function(a){H.mI(a)},
as:function as(){},
a7:function a7(a,b){this.a=a
this.b=b},
M:function M(){},
aU:function aU(a){this.a=a},
eN:function eN(){},
eO:function eO(){},
bh:function bh(){},
cX:function cX(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bp:function bp(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fa:function fa(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i1:function i1(a){this.a=a},
hZ:function hZ(a){this.a=a},
bV:function bV(a){this.a=a},
eB:function eB(a){this.a=a},
h1:function h1(){},
d5:function d5(){},
eH:function eH(a){this.a=a},
dw:function dw(a){this.a=a},
f2:function f2(a,b){this.a=a
this.b=b},
f4:function f4(){},
w:function w(){},
i:function i(){},
fd:function fd(){},
ac:function ac(){},
bM:function bM(){},
b1:function b1(){},
a5:function a5(){},
W:function W(){},
m:function m(){},
an:function an(a){this.a=a},
aJ:function(a){var u,t,s,r,q
if(a==null)return
u=P.jW(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mq:function(a){var u={}
a.F(0,new P.iZ(u))
return u},
iZ:function iZ(a){this.a=a},
eZ:function eZ(a,b){this.a=a
this.b=b},
f_:function f_(){},
f0:function f0(){},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lN:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iD:function iD(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aZ:function aZ(){},
fk:function fk(){},
b2:function b2(){},
h_:function h_(){},
h7:function h7(){},
bU:function bU(){},
hz:function hz(){},
j:function j(){},
b4:function b4(){},
hO:function hO(){},
dC:function dC(){},
dD:function dD(){},
dN:function dN(){},
dO:function dO(){},
dZ:function dZ(){},
e_:function e_(){},
e5:function e5(){},
e6:function e6(){},
eq:function eq(){},
er:function er(){},
es:function es(a){this.a=a},
et:function et(){},
bd:function bd(){},
h0:function h0(){},
dp:function dp(){},
hu:function hu(){},
dV:function dV(){},
dW:function dW(){}},W={
jM:function(){var u=document.createElement("a")
return u},
jP:function(){var u=document.createElement("canvas")
return u},
l7:function(a,b,c){var u=document.body,t=(u&&C.n).a5(u,a,b,c)
t.toString
u=new H.c4(new W.Y(t),new W.eQ(),[W.A])
return u.gax(u)},
ji:function(a){return"wheel"},
bH:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ej(a)
t=u.gd8(a)
if(typeof t==="string")r=u.gd8(a)}catch(s){H.at(s)}return r},
iz:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
km:function(a,b,c,d){var u=W.iz(W.iz(W.iz(W.iz(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.kr(new W.ix(c),W.h)
if(u!=null&&!0)J.kU(a,b,u,!1)
return new W.iw(a,b,u,!1)},
kl:function(a){var u=W.jM(),t=window.location
u=new W.c6(new W.iH(u,t))
u.dB(a)
return u},
lJ:function(a,b,c,d){return!0},
lK:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kn:function(){var u=P.m,t=P.jX(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iP(t,P.bL(u),P.bL(u),P.bL(u),null)
t.dF(null,new H.ft(C.k,new W.iQ(),[H.ae(C.k,0),u]),s,null)
return t},
kr:function(a,b){var u=$.ad
if(u===C.e)return a
return u.cE(a,b)},
l:function l(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
cq:function cq(){},
be:function be(){},
bf:function bf(){},
aQ:function aQ(){},
eD:function eD(){},
F:function F(){},
bG:function bG(){},
eE:function eE(){},
a6:function a6(){},
ai:function ai(){},
eF:function eF(){},
eG:function eG(){},
eJ:function eJ(){},
ab:function ab(){},
eK:function eK(){},
cy:function cy(){},
cz:function cz(){},
eL:function eL(){},
eM:function eM(){},
it:function it(a,b){this.a=a
this.b=b},
O:function O(){},
eQ:function eQ(){},
h:function h(){},
e:function e(){},
aw:function aw(){},
eX:function eX(){},
eY:function eY(){},
f1:function f1(){},
ax:function ax(){},
f7:function f7(){},
bJ:function bJ(){},
bm:function bm(){},
fp:function fp(){},
fJ:function fJ(){},
fK:function fK(){},
fL:function fL(a){this.a=a},
fM:function fM(){},
fN:function fN(a){this.a=a},
az:function az(){},
fO:function fO(){},
al:function al(){},
Y:function Y(a){this.a=a},
A:function A(){},
cV:function cV(){},
aC:function aC(){},
h4:function h4(){},
hd:function hd(){},
he:function he(a){this.a=a},
hg:function hg(){},
aE:function aE(){},
hr:function hr(){},
aF:function aF(){},
hs:function hs(){},
aG:function aG(){},
hw:function hw(){},
hx:function hx(a){this.a=a},
ao:function ao(){},
d8:function d8(){},
hA:function hA(){},
hB:function hB(){},
bW:function bW(){},
aH:function aH(){},
ap:function ap(){},
hE:function hE(){},
hF:function hF(){},
hI:function hI(){},
aI:function aI(){},
bq:function bq(){},
hM:function hM(){},
hN:function hN(){},
b5:function b5(){},
i2:function i2(){},
ik:function ik(){},
b8:function b8(){},
c5:function c5(){},
iu:function iu(){},
dr:function dr(){},
iy:function iy(){},
dK:function dK(){},
iL:function iL(){},
iM:function iM(){},
is:function is(){},
iv:function iv(a){this.a=a},
iw:function iw(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
ix:function ix(a){this.a=a},
c6:function c6(a){this.a=a},
J:function J(){},
cW:function cW(a){this.a=a},
fX:function fX(a){this.a=a},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
dS:function dS(){},
iJ:function iJ(){},
iK:function iK(){},
iP:function iP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iQ:function iQ(){},
iN:function iN(){},
cC:function cC(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aB:function aB(){},
iH:function iH(a,b){this.a=a
this.b=b},
e7:function e7(a){this.a=a},
iU:function iU(a){this.a=a},
dq:function dq(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dA:function dA(){},
dB:function dB(){},
dG:function dG(){},
dH:function dH(){},
dI:function dI(){},
dJ:function dJ(){},
dL:function dL(){},
dM:function dM(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
cb:function cb(){},
cc:function cc(){},
dT:function dT(){},
dU:function dU(){},
dY:function dY(){},
e0:function e0(){},
e1:function e1(){},
cd:function cd(){},
ce:function ce(){},
e3:function e3(){},
e4:function e4(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){}},K={
L:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.d(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aM(a,0)
t=C.b.aM(b,0)
if(u>t){s=t
t=u
u=s}return new K.h8(u,t)},
p:function(a){var u=new K.hh()
u.dv(a)
return u},
au:function au(){},
cD:function cD(){},
b0:function b0(){},
a_:function a_(){this.a=null},
h8:function h8(a,b){this.a=a
this.b=b},
hh:function hh(){this.a=null}},L={
hK:function(){var u=new L.hJ(),t=P.m
u.a=new H.G([t,L.d6])
u.b=new H.G([t,L.dd])
u.c=P.bL(t)
return u},
d6:function d6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dc:function dc(a,b,c){this.a=a
this.b=b
this.c=c},
dd:function dd(a){this.b=a
this.c=null},
hJ:function hJ(){var _=this
_.d=_.c=_.b=_.a=null},
df:function df(a){this.b=a
this.a=this.c=null}},O={
jg:function(a){var u=new O.aR([a])
u.bg(a)
return u},
aR:function aR(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bO:function bO(){this.b=this.a=null},
cO:function cO(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fB:function fB(a,b){this.a=a
this.b=b},
fC:function fC(){},
fD:function fD(a,b){this.a=a
this.b=b},
fE:function fE(){},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fv:function fv(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cP:function cP(){},
fw:function fw(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aj:function aj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fy:function fy(){var _=this
_.e=_.d=_.c=_.b=null},
fz:function fz(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fA:function fA(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d9:function d9(){}},E={
lv:function(a,b){var u=new E.h9(a)
u.du(a,b)
return u},
lB:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibf)return E.ka(a,!0,!0,!0,!1)
u=W.jP()
t=u.style
t.width="100%"
t.height="100%"
s.gcG(a).n(0,u)
return E.ka(u,!0,!0,!0,!1)},
ka:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.da(),p=C.h.de(a,"webgl2",P.lf(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.u(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lv(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.di(a)
t=new X.fj()
t.c=new X.a8(!1,!1,!1)
t.d=P.bL(P.w)
u.b=t
t=new X.fP(u)
t.f=0
t.r=V.b3()
t.x=V.b3()
t.ch=t.Q=1
u.c=t
t=new X.fq(u)
t.r=0
t.x=V.b3()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hL(u)
t.f=V.b3()
t.r=V.b3()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.d7,P.W]])
u.z=t
s=document
t.push(W.T(s,"contextmenu",u.gel(),!1))
u.z.push(W.T(a,"focus",u.ger(),!1))
u.z.push(W.T(a,"blur",u.ged(),!1))
u.z.push(W.T(s,"keyup",u.gew(),!1))
u.z.push(W.T(s,"keydown",u.geu(),!1))
u.z.push(W.T(a,"mousedown",u.geA(),!1))
u.z.push(W.T(a,"mouseup",u.geE(),!1))
u.z.push(W.T(a,r,u.geC(),!1))
t=u.z
W.ji(a)
W.ji(a)
t.push(W.T(a,W.ji(a),u.geG(),!1))
u.z.push(W.T(s,r,u.gen(),!1))
u.z.push(W.T(s,"mouseup",u.gep(),!1))
u.z.push(W.T(s,"pointerlockchange",u.geI(),!1))
u.z.push(W.T(a,"touchstart",u.geV(),!1))
u.z.push(W.T(a,"touchend",u.geR(),!1))
u.z.push(W.T(a,"touchmove",u.geT(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a7(Date.now(),!1)
q.db=0
q.cn()
return q},
ev:function ev(){},
aV:function aV(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h9:function h9(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ha:function ha(a){this.a=a},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
da:function da(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hH:function hH(a){this.a=a}},Z={
lE:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cf(c)),35044)
a.bindBuffer(b,null)
return new Z.dm(b,u)},
aa:function(a){return new Z.b7(a)},
dm:function dm(a,b){this.a=a
this.b=b},
cr:function cr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
il:function il(a){this.a=a},
cs:function cs(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
I:function(){var u=new D.bi()
u.d=0
return u},
ey:function ey(){},
bi:function bi(){var _=this
_.d=_.c=_.b=_.a=null},
eT:function eT(a){this.a=a},
eU:function eU(a){this.a=a},
R:function R(){this.b=null},
bk:function bk(){this.b=null},
bl:function bl(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eu:function eu(){},
bg:function bg(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Z:function Z(){},
cJ:function cJ(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h5:function h5(){},
ht:function ht(){}},X={ct:function ct(a,b){this.a=a
this.b=b},cI:function cI(a,b){this.a=a
this.b=b},fj:function fj(){var _=this
_.d=_.c=_.b=_.a=null},cM:function cM(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fq:function fq(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},a8:function a8(a,b,c){this.a=a
this.b=b
this.c=c},aA:function aA(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fP:function fP(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bP:function bP(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h6:function h6(){},de:function de(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hL:function hL(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},di:function di(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l9:function(a){var u=new X.f3(),t=new V.aS(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k7
if(t==null){t=V.k6(0,0,1,1)
$.k7=t}u.r=t
return u},
jf:function jf(){},
f3:function f3(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hC:function hC(){}},V={
mS:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.df(a-b,u)
return(a<0?a+u:a)+b},
N:function(a,b,c){if(a==null)return C.b.as("null",c)
return C.b.as(C.d.da(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bA:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.N(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.as(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
cR:function(){var u=$.k_
return u==null?$.k_=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jZ:function(a,b,c){var u=c.u(0,Math.sqrt(c.A(c))),t=b.an(u),s=t.u(0,Math.sqrt(t.A(t))),r=u.an(s),q=new V.D(a.a,a.b,a.c),p=s.O(0).A(q),o=r.O(0).A(q),n=u.O(0).A(q)
return V.ak(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b3:function(){var u=$.k2
return u==null?$.k2=new V.a9(0,0):u},
k3:function(){var u=$.am
return u==null?$.am=new V.X(0,0,0):u},
k6:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d1(a,b,c,d)},
c2:function(){var u=$.ki
return u==null?$.ki=new V.D(0,0,0):u},
lD:function(){var u=$.i5
return u==null?$.i5=new V.D(-1,0,0):u},
jw:function(){var u=$.i6
return u==null?$.i6=new V.D(0,1,0):u},
kj:function(){var u=$.i7
return u==null?$.i7=new V.D(0,0,1):u},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
aS:function aS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eS:function eS(a){this.a=a},
cQ:function cQ(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
ay:function ay(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a9:function a9(a,b){this.a=a
this.b=b},
X:function X(a,b,c){this.a=a
this.b=b
this.c=c},
d1:function d1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
D:function D(a,b,c){this.a=a
this.b=b
this.c=c},
mL:function(a){P.lC(C.F,new V.j9(a))},
lx:function(a){var u=new V.hm()
u.dz(a,!0)
return u},
cu:function cu(){},
j9:function j9(a){this.a=a},
eI:function eI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f5:function f5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f6:function f6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h3:function h3(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hm:function hm(){this.b=this.a=null},
ho:function ho(a){this.a=a},
hn:function hn(a){this.a=a},
hp:function hp(a){this.a=a}},U={
jh:function(){var u=new U.eA()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jR:function(a){var u=new U.cv()
u.a=a
return u},
eA:function eA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cv:function cv(){this.b=this.a=null},
bI:function bI(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a2:function a2(){},
dj:function dj(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dk:function dk(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dl:function dl(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cA:function cA(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
li:function(a,b){var u=a.aR,t=new A.fu(b,u)
t.dw(b,u)
t.dt(a,b)
return t},
lj:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gaa(a2)+a3.gaa(a3)+a4.gaa(a4)+a5.gaa(a5)+a6.gaa(a6)+a7.gaa(a7)+a8.gaa(a8)+a9.gaa(a9)+b0.gaa(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.q)(b1),++t)d+="_"+H.c(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.q)(b2),++t)d+="_"+H.c(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.q)(b3),++t)d+="_"+H.c(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.q)(b4),++t)d+="_"+H.c(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.aN()
if(j){u=$.aM()
e=new Z.b7(e.a|u.a)}if(i){u=$.aL()
e=new Z.b7(e.a|u.a)}if(h){u=$.aK()
e=new Z.b7(e.a|u.a)}return new A.fx(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
iW:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iX:function(a,b,c){var u
A.iW(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ek(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
m_:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iW(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lW:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iX(b,t,"ambient")
b.a+="\n"},
lY:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iX(b,t,"diffuse")
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
m0:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iX(b,t,"invDiffuse")
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
m6:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iX(b,t,"specular")
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
m2:function(a,b){var u,t,s
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
m4:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iW(b,t,"reflect")
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
m5:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iW(b,t,"refract")
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
lX:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.c(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.a7()
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
lZ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.c(u)
s=A.ek(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a7()
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
m3:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.c(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.a7()
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
m7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.c(u)
s=A.ek(t)
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
if(typeof u!=="number")return u.a7()
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
m1:function(a,b){var u,t
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
m8:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.an("")
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
A.m_(a,j)
A.lW(a,j)
A.lY(a,j)
A.m0(a,j)
A.m6(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.m4(a,j)
A.m5(a,j)}A.m2(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.lX(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.lZ(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.m3(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.m7(a,q[o],j)
A.m1(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ab(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
m9:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.b4+"];\n"
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
mb:function(a,b){var u
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
ma:function(a,b){var u
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
md:function(a,b){var u,t
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
me:function(a,b){var u,t
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
mc:function(a,b){var u
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
mf:function(a,b){var u
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
ek:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.ab(a,1)},
jv:function(a,b,c,d,e){var u=new A.hS(a,c,e)
u.f=d
P.lg(d,0,P.w)
return u},
co:function co(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(a){this.a=a},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){var _=this
_.hr=_.hq=_.b5=_.aR=_.b4=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hE=_.hD=_.hC=_.bL=_.bK=_.bJ=_.bI=_.bH=_.bG=_.bF=_.bE=_.hB=_.hA=_.cT=_.hz=_.hy=_.cS=_.cR=_.hx=_.hw=_.cQ=_.cP=_.hv=_.hu=_.cO=_.ht=_.hs=_.cN=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cp:function cp(a,b){this.a=a
this.b=b},
cx:function cx(a,b){this.a=a
this.b=b},
d_:function d_(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
fx:function fx(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.b4=b3
_.aR=b4
_.b5=b5},
bY:function bY(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bZ:function bZ(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c0:function c0(a,b,c,d,e,f,g,h,i,j){var _=this
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
c1:function c1(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d2:function d2(){},
dg:function dg(){},
hX:function hX(a){this.a=a},
b6:function b6(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hV:function hV(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
C:function C(a,b,c){this.a=a
this.c=b
this.d=c},
bX:function bX(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
c_:function c_(a,b,c){this.a=a
this.c=b
this.d=c},
a4:function a4(a,b,c){this.a=a
this.c=b
this.d=c},
br:function br(a,b,c){this.a=a
this.c=b
this.d=c},
bs:function bs(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mQ:function(){return F.mr(15,30,0.5,1,new F.jb())},
mr:function(a,b,c,d,e){var u=F.mO(a,b,new F.j_(e,d,b,c))
if(u==null)return
u.aE()
u.fQ(new F.id(),new F.fY())
return u},
mO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.hi()
t=new F.i8(u)
t.b=!1
s=[F.c3]
t.c=H.b([],s)
u.a=t
t=new F.hl()
t.b=H.b([],[F.cZ])
u.b=t
t=new F.hk(u)
t.b=H.b([],[F.cK])
u.c=t
t=new F.hj(u)
t.b=H.b([],[F.bj])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.cw(new V.aS(s,0,0,1),new V.a9(p,1))
c.$3(o,p,0)
r.push(o.cJ(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.cw(new V.aS(j,i,h,1),new V.a9(p,m))
c.$3(o,p,n)
r.push(o.cJ(null))}}u.d.fm(a+1,b+1,r)
return u},
eV:function(a,b,c){var u=new F.bj(),t=a.a
if(t==null)H.u(P.r("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.r("May not create a face with vertices attached to different shapes."))
u.f8(a)
u.f9(b)
u.fa(c)
u.a.a.d.b.push(u)
u.a.a.a1()
return u},
kk:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.c3(),r=new F.ih()
r.b=H.b([],[F.cZ])
s.b=r
r=new F.ic()
u=[F.cK]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i9()
u=[F.bj]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kO()
s.e=0
r=$.aN()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aM().a)!==0?e:t
s.x=(u&$.aL().a)!==0?b:t
s.y=(u&$.bb().a)!==0?f:t
s.z=(u&$.bc().a)!==0?g:t
s.Q=(u&$.kP().a)!==0?c:t
s.ch=(u&$.bB().a)!==0?i:0
s.cx=(u&$.aK().a)!==0?a:t
return s},
jb:function jb(){},
j_:function j_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bj:function bj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eW:function eW(){},
hq:function hq(){},
cK:function cK(){},
fl:function fl(){},
hR:function hR(){},
cZ:function cZ(){},
hi:function hi(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hj:function hj(a){this.a=a
this.b=null},
hk:function hk(a){this.a=a
this.b=null},
hl:function hl(){this.b=null},
c3:function c3(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ij:function ij(a){this.a=a},
ii:function ii(a){this.a=a},
i8:function i8(a){this.a=a
this.c=this.b=null},
i9:function i9(){this.d=this.c=this.b=null},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
ic:function ic(){this.c=this.b=null},
ie:function ie(){},
id:function id(){},
ig:function ig(){},
fY:function fY(){},
ih:function ih(){this.b=null}},T={hG:function hG(){}},Q={
kx:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e="testCanvas",d=null,c="modifiers",b=V.lx("Test 009"),a=W.jP()
a.className="pageLargeCanvas"
a.id=e
b.a.appendChild(a)
u=[P.m]
b.cz(H.b(["Another test of the Material Lighting shader with solid color and ","a directional lighting. The light and object don't move but the camera can be ","moved around the object."],u))
b.cz(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(e)
if(t==null)H.u(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lB(t,!0,!0,!0,!1)
r=new E.aV()
r.a=""
r.b=!0
u=E.aV
q=O.jg(u)
r.y=q
q.aV(r.gfR(),r.gfU())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc1(0,d)
r.sc1(0,F.mQ())
p=new O.cO()
q=O.jg(V.ay)
p.e=q
q.aV(p.ge9(),p.geb())
q=new O.aj(p,"emission")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.f=q
q=new O.aj(p,"ambient")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.r=q
q=new O.aj(p,"diffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.x=q
q=new O.aj(p,"invDiffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.y=q
q=new O.fA(p,"specular")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
q.ch=100
p.z=q
q=new O.fw(p,"bump")
q.c=new A.U(!1,!1,!1)
p.Q=q
p.ch=null
q=new O.aj(p,"reflect")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
p.cx=q
q=new O.fz(p,"refract")
q.c=new A.U(!1,!1,!1)
q.f=new V.Q(0,0,0)
q.ch=1
p.cy=q
q=new O.fv(p,"alpha")
q.c=new A.U(!1,!1,!1)
q.f=1
p.db=q
q=new D.cJ()
q.bg(D.Z)
q.e=H.b([],[D.eu])
q.f=H.b([],[D.bg])
q.r=H.b([],[D.h5])
q.x=H.b([],[D.ht])
q.z=q.y=null
q.c0(q.ge7(),q.geL(),q.geP())
p.dx=q
o=new O.fy()
o.b=new V.aS(0,0,0,0)
o.c=1
o.d=10
o.e=!1
p.dy=o
o=q.y
q=o==null?q.y=D.I():o
q.n(0,p.gf3())
q=p.dx
o=q.z
q=o==null?q.z=D.I():o
q.n(0,p.gef())
p.fr=null
q=p.dx
n=V.jw()
o=U.jR(V.jZ(V.k3(),n,new V.D(-1,-1,-1)))
m=new V.Q(1,1,1)
l=new D.bg()
l.c=new V.Q(1,1,1)
l.a=V.kj()
l.d=V.jw()
l.e=V.lD()
k=l.b
l.b=o
o.gv().n(0,l.gdC())
o=new D.B("mover",k,l.b)
o.b=!0
l.ah(o)
if(!l.c.p(0,m)){k=l.c
l.c=m
o=new D.B("color",k,m)
o.b=!0
l.ah(o)}q.n(0,l)
p.f.sam(0,new V.Q(0,0,0))
q=p.r
q.sam(0,new V.Q(0,0,1))
q=p.x
q.sam(0,new V.Q(0,1,0))
q=p.z
q.sam(0,new V.Q(1,0,0))
q=p.z
q.cp(new A.U(!0,!1,!1))
q.cq(10)
j=new U.bI()
j.bg(U.a2)
j.aV(j.ge5(),j.geN())
j.e=null
j.f=V.cR()
j.r=0
q=s.x
o=new U.dk()
l=U.jh()
l.sbZ(0,!0)
l.sbO(6.283185307179586)
l.sbQ(0)
l.sa_(0,0)
l.sbP(100)
l.sR(0)
l.sbD(0.5)
o.b=l
i=o.gaz()
l.gv().n(0,i)
l=U.jh()
l.sbZ(0,!0)
l.sbO(6.283185307179586)
l.sbQ(0)
l.sa_(0,0)
l.sbP(100)
l.sR(0)
l.sbD(0.5)
o.c=l
l.gv().n(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.a8(!1,!1,!1)
k=o.d
o.d=h
l=new D.B(c,k,h)
l.b=!0
o.L(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.B("invertX",l,!1)
l.b=!0
o.L(l)}l=o.r
if(l!==!0){o.r=!0
l=new D.B("invertY",l,!0)
l.b=!0
o.L(l)}o.aQ(q)
j.n(0,o)
q=s.x
o=new U.dj()
l=U.jh()
l.sbZ(0,!0)
l.sbO(6.283185307179586)
l.sbQ(0)
l.sa_(0,0)
l.sbP(100)
l.sR(0)
l.sbD(0.2)
o.b=l
l.gv().n(0,o.gaz())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.a8(!0,!1,!1)
k=o.c
o.c=h
l=new D.B(c,k,h)
l.b=!0
o.L(l)
o.aQ(q)
j.n(0,o)
q=s.x
o=new U.dl()
o.c=0.01
o.e=o.d=0
h=new X.a8(!1,!1,!1)
o.b=h
l=new D.B(c,d,h)
l.b=!0
o.L(l)
o.aQ(q)
j.n(0,o)
j.n(0,U.jR(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
q=new M.cA()
q.a=!0
u=O.jg(u)
q.e=u
u.aV(q.geh(),q.gej())
q.y=q.x=q.r=q.f=null
g=X.l9(d)
f=new X.cY()
f.c=1.0471975511965976
f.d=0.1
f.e=2000
f.scZ(d)
u=f.c
if(!(Math.abs(u-1.0471975511965976)<$.z().a)){f.c=1.0471975511965976
u=new D.B("fov",u,1.0471975511965976)
u.b=!0
f.aA(u)}u=f.d
if(!(Math.abs(u-0.1)<$.z().a)){f.d=0.1
u=new D.B("near",u,0.1)
u.b=!0
f.aA(u)}u=f.e
if(!(Math.abs(u-2000)<$.z().a)){f.e=2000
u=new D.B("far",u,2000)
u.b=!0
f.aA(u)}u=q.b
if(u!==f){if(u!=null)u.gv().S(0,q.gac())
k=q.b
q.b=f
f.gv().n(0,q.gac())
u=new D.B("camera",k,q.b)
u.b=!0
q.ai(u)}u=q.c
if(u!==g){if(u!=null)u.gv().S(0,q.gac())
k=q.c
q.c=g
g.gv().n(0,q.gac())
u=new D.B("target",k,q.c)
u.b=!0
q.ai(u)}q.sd9(d)
q.sd9(p)
q.e.n(0,r)
q.b.scZ(j)
u=s.d
if(u!==q){if(u!=null)u.gv().S(0,s.gc6())
s.d=q
q.gv().n(0,s.gc6())
s.c7()}u=s.Q
if(u==null)u=s.Q=D.I()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.R]}]):q
u.push(new Q.j7(b,p))
V.mL(s)},
j7:function j7(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,Q]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jo.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.bS(a)},
i:function(a){return"Instance of '"+H.c(H.bT(a))+"'"}}
J.fe.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$ias:1}
J.cG.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0}}
J.cH.prototype={
gG:function(a){return 0},
i:function(a){return String(a)}}
J.h2.prototype={}
J.bt.prototype={}
J.aY.prototype={
i:function(a){var u=a[$.kD()]
if(u==null)return this.dq(a)
return"JavaScript function for "+H.c(J.af(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aW.prototype={
bT:function(a,b){if(!!a.fixed$length)H.u(P.y("removeAt"))
if(b<0||b>=a.length)throw H.d(P.d0(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.u(P.y("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
a4:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.y("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
F:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.aT(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.c(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fN:function(a){return this.k(a,"")},
fK:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.d(P.aT(a))}throw H.d(H.fc())},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dk:function(a,b,c){var u=a.length
if(b>u)throw H.d(P.aD(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.d(P.aD(c,b,u,"end",null))
if(b===c)return H.b([],[H.ae(a,0)])
return H.b(a.slice(b,c),[H.ae(a,0)])},
gfJ:function(a){if(a.length>0)return a[0]
throw H.d(H.fc())},
gb7:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.fc())},
cA:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.d(P.aT(a))}return!1},
aL:function(a,b){if(!!a.immutable$list)H.u(P.y("sort"))
H.lA(a,b==null?J.lT():b)},
dj:function(a){return this.aL(a,null)},
J:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
i:function(a){return P.jl(a,"[","]")},
gN:function(a){return new J.a1(a,a.length)},
gG:function(a){return H.bS(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.y("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.jd(b,u,null))
if(b<0)throw H.d(P.aD(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.bz(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.y("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bz(a,b))
a[b]=c},
$io:1,
$ii:1}
J.jn.prototype={}
J.a1.prototype={
gw:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bK.prototype={
aG:function(a,b){var u
if(typeof b!=="number")throw H.d(H.ba(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb6(b)
if(this.gb6(a)===u)return 0
if(this.gb6(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb6:function(a){return a===0?1/a<0:a<0},
cU:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.y(""+a+".floor()"))},
a9:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.y(""+a+".round()"))},
da:function(a,b){var u
if(b>20)throw H.d(P.aD(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb6(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
df:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ds:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cr(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cr(a,b)},
cr:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.y("Result of truncating division is "+H.c(u)+": "+H.c(a)+" ~/ "+b))},
b_:function(a,b){var u
if(a>0)u=this.fe(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fe:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia5:1}
J.cF.prototype={$iw:1}
J.ff.prototype={}
J.aX.prototype={
bC:function(a,b){if(b<0)throw H.d(H.bz(a,b))
if(b>=a.length)H.u(H.bz(a,b))
return a.charCodeAt(b)},
aM:function(a,b){if(b>=a.length)throw H.d(H.bz(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.d(P.jd(b,null,null))
return a+b},
be:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aW:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.d(P.d0(b,null))
if(b>c)throw H.d(P.d0(b,null))
if(c>a.length)throw H.d(P.d0(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.aW(a,b,null)},
hg:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
as:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
aG:function(a,b){var u
if(typeof b!=="string")throw H.d(H.ba(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$im:1}
H.k.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bC(this.a,b)},
$ao:function(){return[P.w]},
$at:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.o.prototype={}
H.cL.prototype={
gN:function(a){return new H.b_(this,this.gl(this))},
bd:function(a,b){return this.dn(0,b)}}
H.b_.prototype={
gw:function(a){return this.d},
t:function(){var u,t=this,s=t.a,r=J.ei(s),q=r.gl(s)
if(t.b!=q)throw H.d(P.aT(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.B(s,u);++t.c
return!0}}
H.bN.prototype={
gN:function(a){return new H.cN(J.aO(this.a),this.b)},
gl:function(a){return J.aP(this.a)},
B:function(a,b){return this.b.$1(J.el(this.a,b))},
$ai:function(a,b){return[b]}}
H.eP.prototype={$io:1,
$ao:function(a,b){return[b]}}
H.cN.prototype={
t:function(){var u=this,t=u.b
if(t.t()){u.a=u.c.$1(t.gw(t))
return!0}u.a=null
return!1},
gw:function(a){return this.a}}
H.ft.prototype={
gl:function(a){return J.aP(this.a)},
B:function(a,b){return this.b.$1(J.el(this.a,b))},
$ao:function(a,b){return[b]},
$acL:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.c4.prototype={
gN:function(a){return new H.im(J.aO(this.a),this.b)}}
H.im.prototype={
t:function(){var u,t
for(u=this.a,t=this.b;u.t();)if(t.$1(u.gw(u)))return!0
return!1},
gw:function(a){var u=this.a
return u.gw(u)}}
H.cB.prototype={}
H.i0.prototype={
m:function(a,b,c){throw H.d(P.y("Cannot modify an unmodifiable list"))}}
H.dh.prototype={}
H.hP.prototype={
a6:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fZ.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.c(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fi.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.c(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.c(t.a)+")"
return s+r+"' on '"+u+"' ("+H.c(t.a)+")"}}
H.i_.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jc.prototype={
$1:function(a){if(!!J.S(a).$ibh)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.dX.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bF.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cj(t==null?"unknown":t)+"'"},
ghj:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hD.prototype={}
H.hv.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cj(u)+"'"}}
H.bD.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bD))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.bS(this.a)
else u=typeof t!=="object"?J.bC(t):H.bS(t)
return(u^H.bS(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.c(this.d)+"' of "+("Instance of '"+H.c(H.bT(u))+"'")}}
H.ex.prototype={
i:function(a){return this.a}}
H.hf.prototype={
i:function(a){return"RuntimeError: "+H.c(this.a)}}
H.G.prototype={
gl:function(a){return this.a},
gY:function(a){return new H.bn(this,[H.ae(this,0)])},
ghi:function(a){var u=this,t=H.ae(u,0)
return H.lh(new H.bn(u,[t]),new H.fh(u),t,H.ae(u,1))},
fu:function(a,b){var u=this.b
if(u==null)return!1
return this.dS(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aY(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aY(r,b)
s=t==null?null:t.b
return s}else return q.fM(b)},
fM:function(a){var u,t,s=this.d
if(s==null)return
u=this.cj(s,J.bC(a)&0x3ffffff)
t=this.cV(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.ca(u==null?o.b=o.bu():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.ca(t==null?o.c=o.bu():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bu()
r=J.bC(b)&0x3ffffff
q=o.cj(s,r)
if(q==null)o.bx(s,r,[o.bv(b,c)])
else{p=o.cV(q,b)
if(p>=0)q[p].b=c
else q.push(o.bv(b,c))}}},
F:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.aT(u))
t=t.c}},
ca:function(a,b,c){var u=this.aY(a,b)
if(u==null)this.bx(a,b,this.bv(b,c))
else u.b=c},
e2:function(){this.r=this.r+1&67108863},
bv:function(a,b){var u,t=this,s=new H.fm(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.e2()
return s},
cV:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
i:function(a){return P.jY(this)},
aY:function(a,b){return a[b]},
cj:function(a,b){return a[b]},
bx:function(a,b,c){a[b]=c},
dW:function(a,b){delete a[b]},
dS:function(a,b){return this.aY(a,b)!=null},
bu:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bx(t,u,t)
this.dW(t,u)
return t}}
H.fh.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.ae(u,1),args:[H.ae(u,0)]}}}
H.fm.prototype={}
H.bn.prototype={
gl:function(a){return this.a.a},
gN:function(a){var u=this.a,t=new H.fn(u,u.r)
t.c=u.e
return t}}
H.fn.prototype={
gw:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j3.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j4.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j5.prototype={
$1:function(a){return this.a(a)}}
H.fg.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bR.prototype={}
H.cS.prototype={
gl:function(a){return a.length},
$ix:1,
$ax:function(){}}
H.bQ.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$io:1,
$ao:function(){return[P.M]},
$at:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]}}
H.cT.prototype={
m:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$io:1,
$ao:function(){return[P.w]},
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fQ.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fR.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fS.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fT.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fU.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.cU.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fV.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.c7.prototype={}
H.c8.prototype={}
H.c9.prototype={}
H.ca.prototype={}
P.ip.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.io.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iq.prototype={
$0:function(){this.a.$0()}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.e2.prototype={
dG:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.by(new P.iS(this,b),0),a)
else throw H.d(P.y("`setTimeout()` not found."))},
dH:function(a,b){if(self.setTimeout!=null)self.setInterval(H.by(new P.iR(this,a,Date.now(),b),0),a)
else throw H.d(P.y("Periodic timer."))},
$idb:1}
P.iS.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iR.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ds(u,q)}s.c=r
t.d.$1(s)}}
P.bu.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.c(this.a)+")"}}
P.bv.prototype={
gw:function(a){var u=this.c
if(u==null)return this.b
return u.gw(u)},
t:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.t())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bu){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aO(u)
if(!!r.$ibv){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iO.prototype={
gN:function(a){return new P.bv(this.a())}}
P.dn.prototype={}
P.d7.prototype={}
P.hy.prototype={}
P.db.prototype={}
P.iV.prototype={}
P.iY.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cX():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u}}
P.iE.prototype={
hb:function(a){var u,t,s,r=null
try{if(C.e===$.ad){a.$0()
return}P.mh(r,r,this,a)}catch(s){u=H.at(s)
t=H.jD(s)
P.kq(r,r,this,u,t)}},
hc:function(a,b){var u,t,s,r=null
try{if(C.e===$.ad){a.$1(b)
return}P.mi(r,r,this,a,b)}catch(s){u=H.at(s)
t=H.jD(s)
P.kq(r,r,this,u,t)}},
hd:function(a,b){return this.hc(a,b,null)},
fq:function(a){return new P.iF(this,a)},
cE:function(a,b){return new P.iG(this,a,b)}}
P.iF.prototype={
$0:function(){return this.a.hb(this.b)}}
P.iG.prototype={
$1:function(a){return this.a.hd(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iB.prototype={
gN:function(a){var u=new P.dE(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
J:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dQ(b)
return t}},
dQ:function(a){var u=this.d
if(u==null)return!1
return this.bl(this.ci(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cb(u==null?s.b=P.jx():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cb(t==null?s.c=P.jx():t,b)}else return s.dJ(0,b)},
dJ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jx()
u=s.cd(b)
t=r[u]
if(t==null)r[u]=[s.bi(b)]
else{if(s.bl(t,b)>=0)return!1
t.push(s.bi(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eY(this.c,b)
else return this.eX(0,b)},
eX:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ci(r,b)
t=s.bl(u,b)
if(t<0)return!1
s.ct(u.splice(t,1)[0])
return!0},
cb:function(a,b){if(a[b]!=null)return!1
a[b]=this.bi(b)
return!0},
eY:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.ct(u)
delete a[b]
return!0},
cc:function(){this.r=1073741823&this.r+1},
bi:function(a){var u,t=this,s=new P.iC(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cc()
return s},
ct:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cc()},
cd:function(a){return J.bC(a)&1073741823},
ci:function(a,b){return a[this.cd(b)]},
bl:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.iC.prototype={}
P.dE.prototype={
gw:function(a){return this.d},
t:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fb.prototype={}
P.fo.prototype={$io:1,$ii:1}
P.t.prototype={
gN:function(a){return new H.b_(a,this.gl(a))},
B:function(a,b){return this.h(a,b)},
hf:function(a,b){var u,t,s=this,r=H.b([],[H.mx(s,a,"t",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
he:function(a){return this.hf(a,!0)},
i:function(a){return P.jl(a,"[","]")}}
P.fr.prototype={}
P.fs.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.c(a)
t.a=u+": "
t.a+=H.c(b)},
$S:8}
P.V.prototype={
F:function(a,b){var u,t
for(u=J.aO(this.gY(a));u.t();){t=u.gw(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aP(this.gY(a))},
i:function(a){return P.jY(a)}}
P.iI.prototype={
a4:function(a,b){var u
for(u=J.aO(b);u.t();)this.n(0,u.gw(u))},
i:function(a){return P.jl(this,"{","}")},
B:function(a,b){var u,t,s
P.k5(b,"index")
for(u=P.lO(this,this.r),t=0;u.t();){s=u.d
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
$io:1,
$ii:1}
P.dF.prototype={}
P.ez.prototype={}
P.eC.prototype={}
P.eR.prototype={}
P.f9.prototype={
i:function(a){return this.a}}
P.f8.prototype={
dT:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.an("")
if(r>b)q.a+=C.b.aW(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kY(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i3.prototype={}
P.i4.prototype={
fv:function(a){var u,t,s,r=P.js(0,null,a.length)
if(typeof r!=="number")return r.C()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iT(t)
if(s.dY(a,0,r)!==r)s.cu(C.b.bC(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lR(0,s.b,t.length)))}}
P.iT.prototype={
cu:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dY:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bC(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aM(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cu(r,C.b.aM(a,p)))s=p}else if(r<=2047){q=n.b
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
P.as.prototype={}
P.a7.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a7&&this.a===b.a&&!0},
aG:function(a,b){return C.c.aG(this.a,b.a)},
gG:function(a){var u=this.a
return(u^C.c.b_(u,30))&1073741823},
i:function(a){var u=this,t=P.l5(H.lr(u)),s=P.cw(H.lp(u)),r=P.cw(H.ll(u)),q=P.cw(H.lm(u)),p=P.cw(H.lo(u)),o=P.cw(H.lq(u)),n=P.l6(H.ln(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.aU.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aU&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
aG:function(a,b){return C.c.aG(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eO(),q=this.a
if(q<0)return"-"+new P.aU(0-q).i(0)
u=r.$1(C.c.W(q,6e7)%60)
t=r.$1(C.c.W(q,1e6)%60)
s=new P.eN().$1(q%1e6)
return""+C.c.W(q,36e8)+":"+H.c(u)+":"+H.c(t)+"."+H.c(s)}}
P.eN.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eO.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bh.prototype={}
P.cX.prototype={
i:function(a){return"Throw of null."}}
P.ag.prototype={
gbk:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbj:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbk()+o+u
if(!q.a)return t
s=q.gbj()
r=P.jk(q.b)
return t+s+": "+r}}
P.bp.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.c(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.c(s)
else if(t>s)u=": Not in range "+H.c(s)+".."+H.c(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.c(s)}return u}}
P.fa.prototype={
gbk:function(){return"RangeError"},
gbj:function(){var u,t=this.b
if(typeof t!=="number")return t.Z()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.c(u)},
gl:function(a){return this.f}}
P.i1.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hZ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bV.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eB.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jk(u)+"."}}
P.h1.prototype={
i:function(a){return"Out of Memory"},
$ibh:1}
P.d5.prototype={
i:function(a){return"Stack Overflow"},
$ibh:1}
P.eH.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dw.prototype={
i:function(a){return"Exception: "+this.a}}
P.f2.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aW(s,0,75)+"...":s
return t+"\n"+r}}
P.f4.prototype={}
P.w.prototype={}
P.i.prototype={
bd:function(a,b){return new H.c4(this,b,[H.jC(this,"i",0)])},
gl:function(a){var u,t=this.gN(this)
for(u=0;t.t();)++u
return u},
gax:function(a){var u,t=this.gN(this)
if(!t.t())throw H.d(H.fc())
u=t.gw(t)
if(t.t())throw H.d(H.lb())
return u},
B:function(a,b){var u,t,s
P.k5(b,"index")
for(u=this.gN(this),t=0;u.t();){s=u.gw(u)
if(b===t)return s;++t}throw H.d(P.K(b,this,"index",null,t))},
i:function(a){return P.la(this,"(",")")}}
P.fd.prototype={}
P.ac.prototype={$io:1,$ii:1}
P.bM.prototype={}
P.b1.prototype={
gG:function(a){return P.W.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.a5.prototype={}
P.W.prototype={constructor:P.W,$iW:1,
p:function(a,b){return this===b},
gG:function(a){return H.bS(this)},
i:function(a){return"Instance of '"+H.c(H.bT(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.an.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.em.prototype={
gl:function(a){return a.length}}
W.en.prototype={
i:function(a){return String(a)}}
W.eo.prototype={
i:function(a){return String(a)}}
W.cq.prototype={}
W.be.prototype={$ibe:1}
W.bf.prototype={
de:function(a,b,c){var u=a.getContext(b,P.mq(c))
return u},
$ibf:1}
W.aQ.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
gl:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bG.prototype={
gl:function(a){return a.length}}
W.eE.prototype={}
W.a6.prototype={}
W.ai.prototype={}
W.eF.prototype={
gl:function(a){return a.length}}
W.eG.prototype={
gl:function(a){return a.length}}
W.eJ.prototype={
gl:function(a){return a.length}}
W.ab.prototype={$iab:1}
W.eK.prototype={
i:function(a){return String(a)}}
W.cy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[[P.a3,P.a5]]},
$ix:1,
$ax:function(){return[[P.a3,P.a5]]},
$at:function(){return[[P.a3,P.a5]]},
$ii:1,
$ai:function(){return[[P.a3,P.a5]]}}
W.cz.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(this.gaw(a))+" x "+H.c(this.gao(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbb(b)&&this.gaw(a)===u.gaw(b)&&this.gao(a)===u.gao(b)},
gG:function(a){return W.km(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaw(a)),C.d.gG(this.gao(a)))},
gcF:function(a){return a.bottom},
gao:function(a){return a.height},
gb8:function(a){return a.left},
gbW:function(a){return a.right},
gbb:function(a){return a.top},
gaw:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a5]}}
W.eL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[P.m]},
$ix:1,
$ax:function(){return[P.m]},
$at:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]}}
W.eM.prototype={
gl:function(a){return a.length}}
W.it.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gN:function(a){var u=this.he(this)
return new J.a1(u,u.length)},
$ao:function(){return[W.O]},
$at:function(){return[W.O]},
$ai:function(){return[W.O]}}
W.O.prototype={
gfp:function(a){return new W.iv(a)},
gcG:function(a){return new W.it(a,a.children)},
gcH:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.Z()
if(s<0)s=-s*0
if(typeof r!=="number")return r.Z()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a5])},
i:function(a){return a.localName},
a5:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jU
if(u==null){u=H.b([],[W.aB])
t=new W.cW(u)
u.push(W.kl(null))
u.push(W.kn())
$.jU=t
d=t}else d=u
u=$.jT
if(u==null){u=new W.e7(d)
$.jT=u
c=u}else{u.a=d
c=u}}if($.av==null){u=document
t=u.implementation.createHTMLDocument("")
$.av=t
$.jj=t.createRange()
s=$.av.createElement("base")
s.href=u.baseURI
$.av.head.appendChild(s)}u=$.av
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.av
if(!!this.$ibe)r=u.body
else{r=u.createElement(a.tagName)
$.av.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.J(C.K,a.tagName)){$.jj.selectNodeContents(r)
q=$.jj.createContextualFragment(b)}else{r.innerHTML=b
q=$.av.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.av.body
if(r==null?u!=null:r!==u)J.jL(r)
c.c_(q)
document.adoptNode(q)
return q},
fw:function(a,b,c){return this.a5(a,b,c,null)},
dh:function(a,b){a.textContent=null
a.appendChild(this.a5(a,b,null,null))},
$iO:1,
gd8:function(a){return a.tagName}}
W.eQ.prototype={
$1:function(a){return!!J.S(a).$iO}}
W.h.prototype={$ih:1}
W.e.prototype={
fl:function(a,b,c,d){if(c!=null)this.dK(a,b,c,!1)},
dK:function(a,b,c,d){return a.addEventListener(b,H.by(c,1),!1)}}
W.aw.prototype={$iaw:1}
W.eX.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aw]},
$ix:1,
$ax:function(){return[W.aw]},
$at:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]}}
W.eY.prototype={
gl:function(a){return a.length}}
W.f1.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.f7.prototype={
gl:function(a){return a.length}}
W.bJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$at:function(){return[W.A]},
$ii:1,
$ai:function(){return[W.A]}}
W.bm.prototype={$ibm:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.fJ.prototype={
gl:function(a){return a.length}}
W.fK.prototype={
h:function(a,b){return P.aJ(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.F(a,new W.fL(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
W.fL.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fM.prototype={
h:function(a,b){return P.aJ(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.F(a,new W.fN(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
W.fN.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.fO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.az]},
$ix:1,
$ax:function(){return[W.az]},
$at:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]}}
W.al.prototype={$ial:1}
W.Y.prototype={
gax:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.d(P.k8("No elements"))
if(t>1)throw H.d(P.k8("More than one element"))
return u.firstChild},
a4:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gN:function(a){var u=this.a.childNodes
return new W.cC(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ao:function(){return[W.A]},
$at:function(){return[W.A]},
$ai:function(){return[W.A]}}
W.A.prototype={
h5:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h9:function(a,b){var u,t
try{u=a.parentNode
J.kT(u,b,a)}catch(t){H.at(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dm(a):u},
f1:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.cV.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$at:function(){return[W.A]},
$ii:1,
$ai:function(){return[W.A]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.h4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aC]},
$ix:1,
$ax:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]}}
W.hd.prototype={
h:function(a,b){return P.aJ(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.F(a,new W.he(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
W.he.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hg.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.hr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aE]},
$ix:1,
$ax:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]}}
W.aF.prototype={$iaF:1}
W.hs.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aF]},
$ix:1,
$ax:function(){return[W.aF]},
$at:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.aG.prototype={$iaG:1,
gl:function(a){return a.length}}
W.hw.prototype={
h:function(a,b){return a.getItem(b)},
F:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gY:function(a){var u=H.b([],[P.m])
this.F(a,new W.hx(u))
return u},
gl:function(a){return a.length},
$aV:function(){return[P.m,P.m]}}
W.hx.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.d8.prototype={
a5:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
u=W.l7("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Y(t).a4(0,new W.Y(u))
return t}}
W.hA.prototype={
a5:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gax(u)
s.toString
u=new W.Y(s)
r=u.gax(u)
t.toString
r.toString
new W.Y(t).a4(0,new W.Y(r))
return t}}
W.hB.prototype={
a5:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bf(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a5(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gax(u)
t.toString
s.toString
new W.Y(t).a4(0,new W.Y(s))
return t}}
W.bW.prototype={$ibW:1}
W.aH.prototype={$iaH:1}
W.ap.prototype={$iap:1}
W.hE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ap]},
$ix:1,
$ax:function(){return[W.ap]},
$at:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]}}
W.hF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aH]},
$ix:1,
$ax:function(){return[W.aH]},
$at:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]}}
W.hI.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bq.prototype={$ibq:1}
W.hM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aI]},
$ix:1,
$ax:function(){return[W.aI]},
$at:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]}}
W.hN.prototype={
gl:function(a){return a.length}}
W.b5.prototype={}
W.i2.prototype={
i:function(a){return String(a)}}
W.ik.prototype={
gl:function(a){return a.length}}
W.b8.prototype={
gfB:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.y("deltaY is not supported"))},
gfA:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.y("deltaX is not supported"))},
$ib8:1}
W.c5.prototype={
f2:function(a,b){return a.requestAnimationFrame(H.by(b,1))},
dX:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.F]},
$ix:1,
$ax:function(){return[W.F]},
$at:function(){return[W.F]},
$ii:1,
$ai:function(){return[W.F]}}
W.dr.prototype={
i:function(a){return"Rectangle ("+H.c(a.left)+", "+H.c(a.top)+") "+H.c(a.width)+" x "+H.c(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia3&&a.left===u.gb8(b)&&a.top===u.gbb(b)&&a.width===u.gaw(b)&&a.height===u.gao(b)},
gG:function(a){return W.km(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gao:function(a){return a.height},
gaw:function(a){return a.width}}
W.iy.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ax]},
$ix:1,
$ax:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]}}
W.dK.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$ix:1,
$ax:function(){return[W.A]},
$at:function(){return[W.A]},
$ii:1,
$ai:function(){return[W.A]}}
W.iL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aG]},
$ix:1,
$ax:function(){return[W.aG]},
$at:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]}}
W.iM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ao]},
$ix:1,
$ax:function(){return[W.ao]},
$at:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]}}
W.is.prototype={
F:function(a,b){var u,t,s,r,q
for(u=this.gY(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gY:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aV:function(){return[P.m,P.m]}}
W.iv.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gY(this).length}}
W.iw.prototype={}
W.ix.prototype={
$1:function(a){return this.a.$1(a)}}
W.c6.prototype={
dB:function(a){var u
if($.dz.a===0){for(u=0;u<262;++u)$.dz.m(0,C.J[u],W.mz())
for(u=0;u<12;++u)$.dz.m(0,C.l[u],W.mA())}},
aD:function(a){return $.kR().J(0,W.bH(a))},
ae:function(a,b,c){var u=$.dz.h(0,H.c(W.bH(a))+"::"+b)
if(u==null)u=$.dz.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaB:1}
W.J.prototype={
gN:function(a){return new W.cC(a,this.gl(a))}}
W.cW.prototype={
aD:function(a){return C.a.cA(this.a,new W.fX(a))},
ae:function(a,b,c){return C.a.cA(this.a,new W.fW(a,b,c))},
$iaB:1}
W.fX.prototype={
$1:function(a){return a.aD(this.a)}}
W.fW.prototype={
$1:function(a){return a.ae(this.a,this.b,this.c)}}
W.dS.prototype={
dF:function(a,b,c,d){var u,t,s
this.a.a4(0,c)
u=b.bd(0,new W.iJ())
t=b.bd(0,new W.iK())
this.b.a4(0,u)
s=this.c
s.a4(0,C.L)
s.a4(0,t)},
aD:function(a){return this.a.J(0,W.bH(a))},
ae:function(a,b,c){var u=this,t=W.bH(a),s=u.c
if(s.J(0,H.c(t)+"::"+b))return u.d.fn(c)
else if(s.J(0,"*::"+b))return u.d.fn(c)
else{s=u.b
if(s.J(0,H.c(t)+"::"+b))return!0
else if(s.J(0,"*::"+b))return!0
else if(s.J(0,H.c(t)+"::*"))return!0
else if(s.J(0,"*::*"))return!0}return!1},
$iaB:1}
W.iJ.prototype={
$1:function(a){return!C.a.J(C.l,a)}}
W.iK.prototype={
$1:function(a){return C.a.J(C.l,a)}}
W.iP.prototype={
ae:function(a,b,c){if(this.dr(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.J(0,b)
return!1}}
W.iQ.prototype={
$1:function(a){return"TEMPLATE::"+H.c(a)}}
W.iN.prototype={
aD:function(a){var u=J.S(a)
if(!!u.$ibU)return!1
u=!!u.$ij
if(u&&W.bH(a)==="foreignObject")return!1
if(u)return!0
return!1},
ae:function(a,b,c){if(b==="is"||C.b.be(b,"on"))return!1
return this.aD(a)},
$iaB:1}
W.cC.prototype={
t:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cm(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gw:function(a){return this.d}}
W.aB.prototype={}
W.iH.prototype={}
W.e7.prototype={
c_:function(a){new W.iU(this).$2(a,null)},
aP:function(a,b){if(b==null)J.jL(a)
else b.removeChild(a)},
f6:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kW(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.at(r)}t="element unprintable"
try{t=J.af(a)}catch(r){H.at(r)}try{s=W.bH(a)
this.f5(a,b,p,t,s,o,n)}catch(r){if(H.at(r) instanceof P.ag)throw r
else{this.aP(a,b)
window
q="Removing corrupted element "+H.c(t)
if(typeof console!="undefined")window.console.warn(q)}}},
f5:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aP(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aD(a)){p.aP(a,b)
window
u="Removing disallowed element <"+H.c(e)+"> from "+H.c(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ae(a,"is",g)){p.aP(a,b)
window
u="Removing disallowed type extension <"+H.c(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gY(f)
t=H.b(u.slice(0),[H.ae(u,0)])
for(s=f.gY(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.ae(a,J.kZ(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.c(e)+" "+r+'="'+H.c(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.S(a).$ibW)p.c_(a.content)}}
W.iU.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.f6(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aP(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.at(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dq.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.cb.prototype={}
W.cc.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dY.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.cd.prototype={}
W.ce.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
P.iZ.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.eZ.prototype={
gaZ:function(){var u=this.b,t=H.jC(u,"t",0)
return new H.bN(new H.c4(u,new P.f_(),[t]),new P.f0(),[t,W.O])},
m:function(a,b,c){var u=this.gaZ()
J.kX(u.b.$1(J.el(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aP(this.gaZ().a)},
h:function(a,b){var u=this.gaZ()
return u.b.$1(J.el(u.a,b))},
gN:function(a){var u=P.jq(this.gaZ(),!1,W.O)
return new J.a1(u,u.length)},
$ao:function(){return[W.O]},
$at:function(){return[W.O]},
$ai:function(){return[W.O]}}
P.f_.prototype={
$1:function(a){return!!J.S(a).$iO}}
P.f0.prototype={
$1:function(a){return H.n(a,"$iO")}}
P.iD.prototype={
gbW:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.v(t)
return u+t},
gcF:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.c(u.a)+", "+H.c(u.b)+") "+H.c(u.c)+" x "+H.c(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia3){t=q.a
if(t==u.gb8(b)){s=q.b
if(s==u.gbb(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gbW(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcF(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.bC(t),r=u.b,q=J.bC(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.v(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.v(t)
t=C.c.gG(r+t)
return P.lN(P.iA(P.iA(P.iA(P.iA(0,s),q),p),t))}}
P.a3.prototype={
gb8:function(a){return this.a},
gbb:function(a){return this.b},
gaw:function(a){return this.c},
gao:function(a){return this.d}}
P.aZ.prototype={$iaZ:1}
P.fk.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.aZ]},
$at:function(){return[P.aZ]},
$ii:1,
$ai:function(){return[P.aZ]}}
P.b2.prototype={$ib2:1}
P.h_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.b2]},
$at:function(){return[P.b2]},
$ii:1,
$ai:function(){return[P.b2]}}
P.h7.prototype={
gl:function(a){return a.length}}
P.bU.prototype={$ibU:1}
P.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.m]},
$at:function(){return[P.m]},
$ii:1,
$ai:function(){return[P.m]}}
P.j.prototype={
gcG:function(a){return new P.eZ(a,new W.Y(a))},
a5:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aB])
p.push(W.kl(null))
p.push(W.kn())
p.push(new W.iN())
c=new W.e7(new W.cW(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fw(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.Y(s)
q=p.gax(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b4.prototype={$ib4:1}
P.hO.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.b4]},
$at:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]}}
P.dC.prototype={}
P.dD.prototype={}
P.dN.prototype={}
P.dO.prototype={}
P.dZ.prototype={}
P.e_.prototype={}
P.e5.prototype={}
P.e6.prototype={}
P.eq.prototype={
gl:function(a){return a.length}}
P.er.prototype={
h:function(a,b){return P.aJ(a.get(b))},
F:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aJ(u.value[1]))}},
gY:function(a){var u=H.b([],[P.m])
this.F(a,new P.es(u))
return u},
gl:function(a){return a.size},
$aV:function(){return[P.m,null]}}
P.es.prototype={
$2:function(a,b){return this.a.push(a)}}
P.et.prototype={
gl:function(a){return a.length}}
P.bd.prototype={}
P.h0.prototype={
gl:function(a){return a.length}}
P.dp.prototype={}
P.hu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.K(b,a,null,null,null))
return P.aJ(a.item(b))},
m:function(a,b,c){throw H.d(P.y("Cannot assign element of immutable List."))},
B:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[[P.bM,,,]]},
$at:function(){return[[P.bM,,,]]},
$ii:1,
$ai:function(){return[[P.bM,,,]]}}
P.dV.prototype={}
P.dW.prototype={}
K.au.prototype={
ar:function(a,b){return!0},
i:function(a){return"all"}}
K.cD.prototype={
ar:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].ar(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b0.prototype={}
K.a_.prototype={
ar:function(a,b){return!this.dl(0,b)},
i:function(a){return"!["+this.c3(0)+"]"}}
K.h8.prototype={
ar:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jr(this.a),t=H.jr(this.b)
return u+".."+t}}
K.hh.prototype={
dv:function(a){var u,t,s,r
if(a.a.length<=0)throw H.d(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.G([u,P.as])
for(s=new H.b_(a,a.gl(a));s.t();)t.m(0,s.d,!0)
r=P.jq(new H.bn(t,[u]),!0,u)
C.a.dj(r)
this.a=r},
ar:function(a,b){return C.a.J(this.a,b)},
i:function(a){return P.jt(this.a)}}
L.d6.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.df(this.a.j(0,b))
r.a=H.b([],[K.b0])
r.c=!1
this.c.push(r)
return r},
fI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.ar(0,a))return r}return},
i:function(a){return this.b},
cs:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.J(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bn(n,[H.ae(n,0)]),n=n.gN(n);n.t();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.c(t)+" => ["+H.c(s)+"]")
o=u.c.J(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.q)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dc.prototype={
i:function(a){var u=H.jH(this.b,"\n","\\n"),t=H.jH(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dd.prototype={
at:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.q)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hJ.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d6(this,b)
u.c=H.b([],[L.df])
this.a.m(0,b,u)}return u},
K:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dd(a)
u=P.m
t.c=new H.G([u,u])
this.b.m(0,a,t)}return t},
bX:function(a){return this.hh(a)},
hh:function(a){var u=this
return P.lV(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$bX(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bT(c,0)
else{if(!t.t()){s=3
break}l=t.d}d.push(l);++o
k=g.fI(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jt(d)
throw H.d(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.y("removeRange"))
P.js(0,m,d.length)
d.splice(0,m-0)
C.a.a4(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.J(0,p.a)?7:8
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
if(g.d!=null){j=P.jt(e)
i=g.d
h=i.c.h(0,j)
p=new L.dc(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.J(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lL()
case 1:return P.lM(q)}}},L.dc)},
i:function(a){var u,t=new P.an(""),s=this.d
if(s!=null)t.a=s.cs()+"\n"
for(s=this.a,s=s.ghi(s),s=new H.cN(J.aO(s.a),s.b);s.t();){u=s.a
if(u!=this.d)t.a+=u.cs()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.df.prototype={
i:function(a){return this.b.b+": "+this.c3(0)}}
O.aR.prototype={
bg:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c0:function(a,b,c){this.b=b
this.c=a},
aV:function(a,b){return this.c0(a,null,b)},
eK:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dA:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gN:function(a){var u=this.a
return new J.a1(u,u.length)},
B:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jC(s,"aR",0)]
if(s.eK(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dA(t,H.b([b],r))}},
$ii:1}
O.bO.prototype={
gl:function(a){return this.a.length},
gv:function(){var u=this.b
return u==null?this.b=D.I():u},
ay:function(){var u=this.b
if(u!=null)u.E(null)},
gU:function(a){var u=this.a
if(u.length>0)return C.a.gb7(u)
else return V.cR()},
d5:function(a){var u=this.a
if(a==null)u.push(V.cR())
else u.push(a)
this.ay()},
bS:function(){var u=this.a
if(u.length>0){u.pop()
this.ay()}}}
E.ev.prototype={}
E.aV.prototype={
sc1:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gv().S(0,s.gd1())
u=s.c
if(u!=null)u.gv().n(0,s.gd1())
t=new D.B("shape",r,s.c)
t.b=!0
s.b9(t)}},
ag:function(a,b){var u
for(u=this.y.a,u=new J.a1(u,u.length);u.t();)u.d.ag(0,b)},
aI:function(a){var u,t=this,s=a.dx
s.a.push(s.gU(s))
s.ay()
a.d6(t.f)
s=a.dy
u=(s&&C.a).gb7(s)
if(u!=null&&t.d!=null)u.h8(a,t)
for(s=t.y.a,s=new J.a1(s,s.length);s.t();)s.d.aI(a)
a.d4()
a.dx.bS()},
b9:function(a){var u=this.z
if(u!=null)u.E(a)},
a1:function(){return this.b9(null)},
d2:function(a){this.e=null
this.b9(a)},
fW:function(){return this.d2(null)},
d0:function(a){this.b9(a)},
fT:function(){return this.d0(null)},
fS:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd_(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bi()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a1()},
fV:function(a,b){var u,t
for(u=b.gN(b),t=this.gd_();u.t();)u.gw(u).gv().S(0,t)
this.a1()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.h9.prototype={
du:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a7(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bO()
t=[V.ay]
u.a=H.b([],t)
u.gv().n(0,new E.ha(s))
s.cy=u
u=new O.bO()
u.a=H.b([],t)
u.gv().n(0,new E.hb(s))
s.db=u
u=new O.bO()
u.a=H.b([],t)
u.gv().n(0,new E.hc(s))
s.dx=u
u=H.b([],[O.d9])
s.dy=u
u.push(null)
s.fr=new H.G([P.m,A.d2])},
gh4:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gU(s)
u=t.db
u=t.z=s.q(0,u.gU(u))
s=u}return s},
d6:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb7(u):a)},
d4:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.ha.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hb.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hc.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.da.prototype={
c8:function(a){this.d7()},
c7:function(){return this.c8(null)},
gfL:function(){var u,t=this,s=Date.now(),r=C.c.W(P.jS(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a7(s,!1)
return u/r},
cn:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.v(r)
u=C.d.cU(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.cU(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kb(C.i,s.gha())}},
d7:function(){if(!this.cx){this.cx=!0
var u=window
C.v.dX(u)
C.v.f2(u,W.kr(new E.hH(this),P.a5))}},
h7:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cn()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a7(r,!1)
s.y=P.jS(r-s.r.a).a*0.000001
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
o.aI(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.at(q)
t=H.jD(q)
P.jG("Error: "+H.c(u))
P.jG("Stack: "+H.c(t))
throw H.d(u)}}}
E.hH.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.h7()}}}
Z.dm.prototype={}
Z.cr.prototype={
b1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.at(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.c(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.c(u.e)+"]"}}
Z.il.prototype={}
Z.cs.prototype={
aH:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b1(a)},
dc:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aI:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.af(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.cE.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.c(H.bT(this.c))+"'")+"]"}}
Z.b7.prototype={
gc2:function(a){var u=this.a,t=(u&$.aN().a)!==0?3:0
if((u&$.aM().a)!==0)t+=3
if((u&$.aL().a)!==0)t+=3
if((u&$.bb().a)!==0)t+=2
if((u&$.bc().a)!==0)t+=3
if((u&$.ck().a)!==0)t+=3
if((u&$.cl().a)!==0)t+=4
if((u&$.bB().a)!==0)++t
return(u&$.aK().a)!==0?t+4:t},
fo:function(a){var u,t=$.aN(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ck()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cl()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bB()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aK()
if((s&t.a)!==0)if(u===a)return t
return $.kQ()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aN().a)!==0)u.push("Pos")
if((t&$.aM().a)!==0)u.push("Norm")
if((t&$.aL().a)!==0)u.push("Binm")
if((t&$.bb().a)!==0)u.push("Txt2D")
if((t&$.bc().a)!==0)u.push("TxtCube")
if((t&$.ck().a)!==0)u.push("Clr3")
if((t&$.cl().a)!==0)u.push("Clr4")
if((t&$.bB().a)!==0)u.push("Weight")
if((t&$.aK().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.ey.prototype={}
D.bi.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.R]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.J(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.J(s,b)
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
if(a==null){a=new D.R()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.F(P.jq(u,!0,{func:1,ret:-1,args:[D.R]}),new D.eT(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.R]}])
C.a.F(u,new D.eU(q))}return!0},
au:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.eT.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eU.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.R.prototype={}
D.bk.prototype={}
D.bl.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.c(this.d)+" => "+H.c(this.e)}}
X.ct.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.ct))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.cI.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cI))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.c(this.a)}}
X.fj.prototype={
h0:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
fX:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cM.prototype={}
X.fq.prototype={
aN:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a9(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.aA(a,V.b3(),q.x,t,s)
r.b=!0
q.z=new P.a7(p,!1)
q.x=s
return r},
bR:function(a,b){this.r=a.a
return!1},
aT:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dg()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.aN(a,b))
return!0},
h1:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.bP(new V.E(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
ez:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cM(c,r.a.gaF(),b)
s.b=!0
t.E(s)
r.y=new P.a7(u,!1)
r.x=V.b3()}}
X.a8.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.a8))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aA.prototype={}
X.fP.prototype={
bm:function(a,b,c){var u=this,t=new P.a7(Date.now(),!1),s=u.a.gaF(),r=new X.aA(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bR:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bm(a,b,!0))
return!0},
aT:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dg()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bm(a,b,!0))
return!0},
aS:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bm(a,b,!1))
return!0},
h2:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.bP(new V.E(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gcL:function(){var u=this.b
return u==null?this.b=D.I():u},
gbY:function(){var u=this.c
return u==null?this.c=D.I():u},
gcY:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.bP.prototype={}
X.h6.prototype={}
X.de.prototype={}
X.hL.prototype={
aN:function(a,b){var u=this,t=new P.a7(Date.now(),!1),s=a.length>0?a[0]:V.b3(),r=u.a.gaF(),q=new X.de(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h_:function(a){var u=this.b
if(u==null)return!1
u.E(this.aN(a,!0))
return!0},
fY:function(a){var u=this.c
if(u==null)return!1
u.E(this.aN(a,!0))
return!0},
fZ:function(a){var u=this.d
if(u==null)return!1
u.E(this.aN(a,!1))
return!0}}
X.di.prototype={
gaF:function(){var u=this.a,t=C.h.gcH(u).c
t.toString
u=C.h.gcH(u).d
u.toString
return V.k6(0,0,t,u)},
cf:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cI(u,new X.a8(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
by:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.a8(t,a.altKey,a.shiftKey)},
al:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.C()
u=t.top
if(typeof r!=="number")return r.C()
return new V.a9(s-q,r-u)},
aO:function(a){return new V.E(a.movementX,a.movementY)},
bw:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a9])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.a9(r.pageX)
C.d.a9(r.pageY)
p=o.left
C.d.a9(r.pageX)
n.push(new V.a9(q-p,C.d.a9(r.pageY)-o.top))}return n},
aj:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.ct(u,new X.a8(t,a.altKey,a.shiftKey))},
bn:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.C()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.C()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
es:function(a){this.f=!0},
ee:function(a){this.f=!1},
em:function(a){if(this.f&&this.bn(a))a.preventDefault()},
ex:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.h0(u)},
ev:function(a){var u
if(!this.f)return
u=this.cf(a)
this.b.fX(u)},
eB:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.aj(a)
t=r.aO(a)
if(r.d.bR(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aj(a)
s=r.al(a)
if(r.c.bR(u,s))a.preventDefault()},
eF:function(a){var u,t,s,r=this
r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aT(u,s))a.preventDefault()},
eq:function(a){var u,t,s,r=this
if(!r.bn(a)){r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aT(u,s))a.preventDefault()}},
eD:function(a){var u,t,s,r=this
r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aS(u,s))a.preventDefault()},
eo:function(a){var u,t,s,r=this
if(!r.bn(a)){r.aC(a)
u=r.aj(a)
if(r.x){t=r.aO(a)
if(r.d.aS(u,t))a.preventDefault()
return}if(r.r)return
s=r.al(a)
if(r.c.aS(u,s))a.preventDefault()}},
eH:function(a){var u,t,s=this
s.aC(a)
u=new V.E((a&&C.u).gfA(a),C.u.gfB(a)).u(0,180)
if(s.x){if(s.d.h1(u))a.preventDefault()
return}if(s.r)return
t=s.al(a)
if(s.c.h2(u,t))a.preventDefault()},
eJ:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aj(s.y)
t=s.al(s.y)
s.d.ez(u,t,r)}},
eW:function(a){var u,t=this
t.a.focus()
t.f=!0
t.by(a)
u=t.bw(a)
if(t.e.h_(u))a.preventDefault()},
eS:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fY(u))a.preventDefault()},
eU:function(a){var u
this.by(a)
u=this.bw(a)
if(this.e.fZ(u))a.preventDefault()}}
D.eu.prototype={$iZ:1}
D.bg.prototype={
ah:function(a){var u=this.r
if(u!=null)u.E(a)},
dD:function(){return this.ah(null)},
$iZ:1}
D.Z.prototype={}
D.cJ.prototype={
ah:function(a){var u=this.y
if(u!=null)u.E(a)},
cl:function(a){var u=this.z
if(u!=null)u.E(a)},
ey:function(){return this.cl(null)},
eM:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.dR(s))return!1}return!0},
e8:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gck(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.bg)this.f.push(q)
p=q.r
if(p==null){p=new D.bi()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bk()
u.b=!0
this.ah(u)},
eQ:function(a,b){var u,t,s
for(u=b.gN(b),t=this.gck();u.t();){s=u.gw(u)
C.a.S(this.e,s)
s.gv().S(0,t)}u=new D.bl()
u.b=!0
this.ah(u)},
dR:function(a){var u=C.a.J(this.f,a)
return u},
$ai:function(){return[D.Z]},
$aaR:function(){return[D.Z]}}
D.h5.prototype={$iZ:1}
D.ht.prototype={$iZ:1}
V.Q.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.aS.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aS))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.eS.prototype={}
V.cQ.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cQ))return!1
u=b.a
t=$.z().a
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bA(H.b([q.a,q.d,q.r],p),3,0),n=V.bA(H.b([q.b,q.e,q.x],p),3,0),m=V.bA(H.b([q.c,q.f,q.y],p),3,0)
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
V.ay.prototype={
a2:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
cW:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.cR()
u=1/b1
t=-n
s=-a0
return V.ak((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ak(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bc:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.D(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aU:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.X(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ay))return!1
u=b.a
t=$.z().a
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
I:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bA(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bA(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bA(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bA(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.I("")}}
V.a9.prototype={
C:function(a,b){return new V.a9(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a9))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.X.prototype={
D:function(a,b){return new V.X(this.a+b.a,this.b+b.b,this.c+b.c)},
C:function(a,b){return new V.X(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.X(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
V.d1.prototype={
ga0:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d1))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.N(u.a,3,0)+", "+V.N(u.b,3,0)+", "+V.N(u.c,3,0)+", "+V.N(u.d,3,0)+"]"}}
V.E.prototype={
bM:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.E(t*b,u*b)},
u:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.kf
return u==null?$.kf=new V.E(0,0):u}u=this.a
if(typeof u!=="number")return u.u()
t=this.b
if(typeof t!=="number")return t.u()
return new V.E(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.v(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+"]"}}
V.D.prototype={
bM:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
an:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.D(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.D(this.a+b.a,this.b+b.b,this.c+b.c)},
O:function(a){return new V.D(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.D(this.a*b,this.b*b,this.c*b)},
u:function(a,b){if(Math.abs(b-0)<$.z().a)return V.c2()
return new V.D(this.a/b,this.b/b,this.c/b)},
cX:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.D))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.N(this.a,3,0)+", "+V.N(this.b,3,0)+", "+V.N(this.c,3,0)+"]"}}
U.eA.prototype={
bh:function(a){var u=V.mS(a,this.c,this.b)
return u},
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
L:function(a){var u=this.y
if(u!=null)u.E(a)},
sbZ:function(a,b){},
sbO:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bh(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.L(s)}},
sbQ:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bh(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.L(s)}},
sa_:function(a,b){var u,t=this
b=t.bh(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.L(u)}},
sbP:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.L(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.L(t)}},
sbD:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.L(u)}},
ag:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cv.prototype={
gv:function(){var u=this.b
return u==null?this.b=D.I():u},
aJ:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cv))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.bI.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u},
L:function(a){var u=this.e
if(u!=null)u.E(a)},
X:function(){return this.L(null)},
e6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaz(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gv()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bk()
u.b=!0
this.L(u)},
eO:function(a,b){var u,t
for(u=b.gN(b),t=this.gaz();u.t();)u.gw(u).gv().S(0,t)
u=new D.bl()
u.b=!0
this.L(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.Z()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a1(r,r.length),u=null;r.t();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.cR():u
r=s.e
if(r!=null)r.au(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bI))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.H(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.a2]},
$aaR:function(){return[U.a2]},
$ia2:1}
U.a2.prototype={}
U.dj.prototype={
gv:function(){var u=this.cy
return u==null?this.cy=D.I():u},
L:function(a){var u=this.cy
if(u!=null)u.E(a)},
X:function(){return this.L(null)},
aQ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcL().n(0,u.gbo())
u.a.c.gcY().n(0,u.gbq())
u.a.c.gbY().n(0,u.gbs())
return!0},
bp:function(a){var u=this
if(!J.H(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaA")
if(!n.y)return
if(n.x){u=a.d.C(0,a.y)
u=new V.E(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.C(0,a.y)
u=new V.E(t.a,t.b).q(0,2).u(0,u.ga0())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=new V.E(s.a,s.b).q(0,2).u(0,u.ga0())
s=n.b
q=r.a
if(typeof q!=="number")return q.O()
p=n.e
if(typeof p!=="number")return H.v(p)
o=n.z
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
n.b.sR(0)
t=t.C(0,a.z)
n.Q=new V.E(t.a,t.b).q(0,2).u(0,u.ga0())}n.X()},
bt:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sR(t*10*s)
r.X()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.ch=p
u=b.y
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ak(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia2:1}
U.dk.prototype={
gv:function(){var u=this.fx
return u==null?this.fx=D.I():u},
L:function(a){var u=this.fx
if(u!=null)u.E(a)},
X:function(){return this.L(null)},
aQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcL().n(0,s.gbo())
s.a.c.gcY().n(0,s.gbq())
s.a.c.gbY().n(0,s.gbs())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.n(0,s.gdZ())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.ge0())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.n(0,s.gfj())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.n(0,s.gfh())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.n(0,s.gff())
return!0},
ad:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.E(u,t)},
bp:function(a){var u=this
H.n(a,"$iaA")
if(!J.H(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
br:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaA")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.E(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.ad(new V.E(t.a,t.b).q(0,2).u(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.ad(new V.E(s.a,s.b).q(0,2).u(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.C(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).q(0,2).u(0,u.ga0()))}n.X()},
bt:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
r.X()}},
e_:function(a){var u=this
if(H.n(a,"$icM").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e1:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$iaA")
if(!J.H(n.d,a.x.b))return
u=a.c
t=a.d
s=t.C(0,a.y)
r=n.ad(new V.E(s.a,s.b).q(0,2).u(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.C(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).q(0,2).u(0,u.ga0()))
n.X()},
fk:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fi:function(a){var u,t,s,r,q,p,o,n=this
H.n(a,"$ide")
if(!n.cx)return
if(n.ch){u=a.d.C(0,a.y)
u=new V.E(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.C(0,a.y)
u=n.ad(new V.E(t.a,t.b).q(0,2).u(0,u.ga0()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.v(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.v(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.C(0,a.y)
r=n.ad(new V.E(s.a,s.b).q(0,2).u(0,u.ga0()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.v(p)
o=n.cy
if(typeof o!=="number")return H.v(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.v(q)
s=n.db
if(typeof s!=="number")return H.v(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.C(0,a.z)
n.dx=n.ad(new V.E(t.a,t.b).q(0,2).u(0,u.ga0()))}n.X()},
fg:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.v(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.v(u)
s.sR(-t*10*u)
r.X()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.Z()
if(q<p){r.dy=p
u=b.y
r.c.ag(0,u)
r.b.ag(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ak(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.ak(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia2:1}
U.dl.prototype={
gv:function(){var u=this.r
return u==null?this.r=D.I():u},
L:function(a){var u=this.r
if(u!=null)u.E(a)},
aQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.ge3()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).n(0,t)
return!0},
e4:function(a){var u,t,s,r,q=this
if(!J.H(q.b,q.a.b.c))return
H.n(a,"$ibP")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.B("zoom",u,r)
u.b=!0
q.L(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ak(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia2:1}
M.cA.prototype={
ai:function(a){var u=this.y
if(u!=null)u.E(a)},
dE:function(){return this.ai(null)},
ei:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gac(),s=[{func:1,ret:-1,args:[D.R]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bi()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bk()
u.b=!0
this.ai(u)},
ek:function(a,b){var u,t
for(u=b.gN(b),t=this.gac();u.t();)u.gw(u).gv().S(0,t)
u=new D.bl()
u.b=!0
this.ai(u)},
sd9:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gv().S(0,t.gac())
u=t.d
t.d=a
if(a!=null)a.gv().n(0,t.gac())
s=new D.B("technique",u,t.d)
s.b=!0
t.ai(s)}},
gv:function(){var u=this.y
return u==null?this.y=D.I():u},
aI:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.d6(f.d)
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
o=C.d.a9(p*s)
p=q.b
if(typeof r!=="number")return H.v(r)
n=C.d.a9(p*r)
p=C.d.a9(q.c*s)
a.c=p
q=C.d.a9(q.d*r)
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
a.cy.d5(i)
t=$.k1
if(t==null){t=V.k3()
q=V.jw()
p=$.kg
t=V.jZ(t,q,p==null?$.kg=new V.D(0,0,-1):p)
$.k1=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aJ(0,a,u)
if(g!=null)h=g.q(0,h)}a.db.d5(h)
u=f.d
if(u!=null)u.ag(0,a)
for(u=f.e.a,u=new J.a1(u,u.length);u.t();)u.d.ag(0,a)
for(u=f.e.a,u=new J.a1(u,u.length);u.t();)u.d.aI(a)
f.b.toString
a.cy.bS()
a.db.bS()
f.c.toString
a.d4()}}
A.co.prototype={}
A.ep.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fC:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.U.prototype={
gaa:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.U))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fu.prototype={
dt:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.an("")
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
A.m9(c3,u)
A.mb(c3,u)
A.ma(c3,u)
A.md(c3,u)
A.me(c3,u)
A.mc(c3,u)
A.mf(c3,u)
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
m=A.m8(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cg(n,35633)
b8.f=b8.cg(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.u(P.r("Failed to link shader: "+H.c(l)))}b8.fb()
b8.fd()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.n(b8.y.T(0,"invViewMat"),"$ia4")
if(t)b8.dy=H.n(b8.y.T(0,"objMat"),"$ia4")
if(r)b8.fr=H.n(b8.y.T(0,"viewObjMat"),"$ia4")
b8.fy=H.n(b8.y.T(0,"projViewObjMat"),"$ia4")
if(c3.go)b8.fx=H.n(b8.y.T(0,"viewMat"),"$ia4")
if(c3.x1)b8.k1=H.n(b8.y.T(0,"txt2DMat"),"$ic_")
if(c3.x2)b8.k2=H.n(b8.y.T(0,"txtCubeMat"),"$ia4")
if(c3.y1)b8.k3=H.n(b8.y.T(0,"colorMat"),"$ia4")
b8.r1=H.b([],[A.a4])
t=c3.b4
if(t>0){b8.k4=b8.y.T(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.u(P.r(c0+q+c1))
s.push(H.n(j,"$ia4"))}}if(c3.a.a)b8.r2=H.n(b8.y.T(0,"emissionClr"),"$iC")
if(c3.b.a)b8.x1=H.n(b8.y.T(0,"ambientClr"),"$iC")
if(c3.c.a)b8.y2=H.n(b8.y.T(0,"diffuseClr"),"$iC")
if(c3.d.a)b8.b5=H.n(b8.y.T(0,"invDiffuseClr"),"$iC")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cO=H.n(b8.y.T(0,"shininess"),"$iP")
if(t)b8.cN=H.n(b8.y.T(0,"specularClr"),"$iC")}if(c3.db){b8.cP=H.n(b8.y.T(0,"envSampler"),"$ibs")
if(c3.r.a)b8.cQ=H.n(b8.y.T(0,"reflectClr"),"$iC")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cR=H.n(b8.y.T(0,"refraction"),"$iP")
if(t)b8.cS=H.n(b8.y.T(0,"refractClr"),"$iC")}}if(c3.y.a)b8.cT=H.n(b8.y.T(0,"alpha"),"$iP")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bE=new H.G([r,A.b6])
b8.bF=new H.G([r,[P.ac,A.bY]])
for(r=[A.bY],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="barLight"+H.c(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.u(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$iC")
if(typeof g!=="number")return g.a7()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.r(c0+o+c1))
H.n(a0,"$iP")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bY(j,d,c,a3,a2,a1))}b8.bF.m(0,g,e)
q=b8.bE
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bG=new H.G([r,A.b6])
b8.bH=new H.G([r,[P.ac,A.bZ]])
for(r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.c(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a7()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.u(P.r(c0+a4+c1))
H.n(j,"$iC")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.u(P.r(c0+a4+c1))
H.n(d,"$iC")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.u(P.r(c0+a4+c1))
H.n(c,"$iC")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.u(P.r(c0+a4+c1))
H.n(j,"$iC")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.u(P.r(c0+a4+c1))
H.n(d,"$iC")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$ibr")
a8=c}else a8=b9
e.push(new A.bZ(a7,a6,a5,j,d,a8))}b8.bH.m(0,g,e)
q=b8.bG
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bI=new H.G([r,A.b6])
b8.bJ=new H.G([r,[P.ac,A.c0]])
for(r=[A.c0],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.c(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.u(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$iC")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$ic_")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$ibs")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$ibs")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$ibX")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$iP")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$iP")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.r(c0+o+c1))
H.n(a0,"$iP")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c0(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bJ.m(0,g,e)
q=b8.bI
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bK=new H.G([r,A.b6])
b8.bL=new H.G([r,[P.ac,A.c1]])
for(r=[A.c1],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.c(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
H.n(j,"$iC")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.u(P.r(c0+o+c1))
H.n(d,"$iC")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.u(P.r(c0+o+c1))
H.n(c,"$iC")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.u(P.r(c0+o+c1))
H.n(b,"$iC")
if(typeof g!=="number")return g.a7()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$iC")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.u(P.r(c0+o+c1))
H.n(a0,"$iC")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.u(P.r(c0+o+c1))
H.n(b2,"$iP")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.u(P.r(c0+o+c1))
H.n(b3,"$iP")
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
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$ibX")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$iP")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.u(P.r(c0+a4+c1))
H.n(a0,"$iP")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$iP")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.u(P.r(c0+a4+c1))
H.n(a0,"$iP")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.u(P.r(c0+a4+c1))
H.n(b2,"$iP")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.u(P.r(c0+a4+c1))
H.n(a,"$ibr")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.u(P.r(c0+o+c1))
H.n(a,"$ibr")
b0=a}else b0=b9
e.push(new A.c1(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bL.m(0,g,e)
q=b8.bK
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.r(c0+o+c1))
q.m(0,g,j)}}}},
f7:function(a,b){}}
A.cp.prototype={
i:function(a){return"barLight"+H.c(this.a)}}
A.cx.prototype={
i:function(a){return"dirLight"+H.c(this.a)}}
A.d_.prototype={
i:function(a){return"pointLight"+H.c(this.a)}}
A.d4.prototype={
i:function(a){return"spotLight"+H.c(this.a)}}
A.fx.prototype={
i:function(a){return this.aR}}
A.bY.prototype={}
A.bZ.prototype={}
A.c0.prototype={}
A.c1.prototype={}
A.d2.prototype={
dw:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cg:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.r("Error compiling shader '"+H.c(s)+"': "+H.c(u)))}return s},
fb:function(){var u,t,s,r=this,q=H.b([],[A.co]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.co(p,t.name,s))}r.x=new A.ep(q)},
fd:function(){var u,t,s,r=this,q=H.b([],[A.dg]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fz(t.type,t.size,t.name,s))}r.y=new A.hX(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.b6(u,b,c)
else return A.jv(u,this.r,b,a,c)},
dU:function(a,b,c){var u=this.a
if(a===1)return new A.br(u,b,c)
else return A.jv(u,this.r,b,a,c)},
dV:function(a,b,c){var u=this.a
if(a===1)return new A.bs(u,b,c)
else return A.jv(u,this.r,b,a,c)},
b0:function(a,b){return new P.dw(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.c(b)+"."))},
fz:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.hT(u.a,c,d)
case 35665:return new A.C(u.a,c,d)
case 35666:return new A.bX(u.a,c,d)
case 35667:return new A.hU(u.a,c,d)
case 35668:return new A.hV(u.a,c,d)
case 35669:return new A.hW(u.a,c,d)
case 35674:return new A.hY(u.a,c,d)
case 35675:return new A.c_(u.a,c,d)
case 35676:return new A.a4(u.a,c,d)
case 35678:return u.dU(b,c,d)
case 35680:return u.dV(b,c,d)
case 35670:throw H.d(u.b0("BOOL",c))
case 35671:throw H.d(u.b0("BOOL_VEC2",c))
case 35672:throw H.d(u.b0("BOOL_VEC3",c))
case 35673:throw H.d(u.b0("BOOL_VEC4",c))
default:throw H.d(P.r("Unknown uniform variable type "+H.c(a)+" for "+H.c(c)+"."))}}}
A.dg.prototype={}
A.hX.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
T:function(a,b){var u=this.h(0,b)
if(u==null)throw H.d(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b6.prototype={
i:function(a){return"Uniform1i: "+H.c(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform2i: "+H.c(this.c)}}
A.hV.prototype={
i:function(a){return"Uniform3i: "+H.c(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform4i: "+H.c(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform1iv: "+H.c(this.c)}}
A.P.prototype={
i:function(a){return"Uniform1f: "+H.c(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform2f: "+H.c(this.c)}}
A.C.prototype={
i:function(a){return"Uniform3f: "+H.c(this.c)}}
A.bX.prototype={
i:function(a){return"Uniform4f: "+H.c(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform1Mat2 "+H.c(this.c)}}
A.c_.prototype={
a8:function(a){var u=new Float32Array(H.cf(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.c(this.c)}}
A.a4.prototype={
a8:function(a){var u=new Float32Array(H.cf(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.c(this.c)}}
A.br.prototype={
i:function(a){return"UniformSampler2D: "+H.c(this.c)}}
A.bs.prototype={
i:function(a){return"UniformSamplerCube: "+H.c(this.c)}}
F.jb.prototype={
$1:function(a){return new V.X(Math.cos(a),Math.sin(a),0)}}
F.j_.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jK(n.$1(o),m)
m=J.jK(n.$1(o+3.141592653589793/p.c),m).C(0,l)
m=new V.D(m.a,m.b,m.c)
u=m.u(0,Math.sqrt(m.A(m)))
n=$.kh
if(n==null){n=new V.D(1,0,0)
$.kh=n
t=n}else t=n
n=u.an(!J.H(u,t)?V.kj():t)
s=n.u(0,Math.sqrt(n.A(n)))
n=s.an(u)
t=n.u(0,Math.sqrt(n.A(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
m=l.D(0,new V.X(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.H(a.f,m)){a.f=m
n=a.a
if(n!=null)n.a1()}}}
F.bj.prototype={
b3:function(){var u=this
if(!u.gcK()){C.a.S(u.a.a.d.b,u)
u.a.a.a1()}u.eZ()
u.f_()
u.f0()},
f8:function(a){this.a=a
a.d.b.push(this)},
f9:function(a){this.b=a
a.d.c.push(this)},
fa:function(a){this.c=a
a.d.d.push(this)},
eZ:function(){var u=this.a
if(u!=null){C.a.S(u.d.b,this)
this.a=null}},
f_:function(){var u=this.b
if(u!=null){C.a.S(u.d.c,this)
this.b=null}},
f0:function(){var u=this.c
if(u!=null){C.a.S(u.d.d,this)
this.c=null}},
gcK:function(){return this.a==null||this.b==null||this.c==null},
dN:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c2()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.cX())return
return s.u(0,Math.sqrt(s.A(s)))},
dP:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.C(0,q)
r=new V.D(r.a,r.b,r.c)
s=r.u(0,Math.sqrt(r.A(r)))
r=t.C(0,q)
r=new V.D(r.a,r.b,r.c)
r=s.an(r.u(0,Math.sqrt(r.A(r))))
return r.u(0,Math.sqrt(r.A(r)))},
bB:function(){var u,t=this
if(t.d!=null)return!0
u=t.dN()
if(u==null){u=t.dP()
if(u==null)return!1}t.d=u
t.a.a.a1()
return!0},
dM:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c2()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.cX())return
return s.u(0,Math.sqrt(s.A(s)))},
dO:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.C(0,g)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.O(0)}else{p=(l-u.b)/r
l=d.C(0,g).q(0,p).D(0,g).C(0,j)
l=new V.D(l.a,l.b,l.c)
q=l.u(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.O(0)}l=n.d
if(l!=null){o=l.u(0,Math.sqrt(l.A(l)))
l=o.an(q)
l=l.u(0,Math.sqrt(l.A(l))).an(o)
q=l.u(0,Math.sqrt(l.A(l)))}return q},
bz:function(){var u,t=this
if(t.e!=null)return!0
u=t.dM()
if(u==null){u=t.dO()
if(u==null)return!1}t.e=u
t.a.a.a1()
return!0},
gcI:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u,t,s=this
if(s.gcK())return a+"disposed"
u=a+C.b.as(J.af(s.a.e),0)+", "+C.b.as(J.af(s.b.e),0)+", "+C.b.as(J.af(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
P:function(){return this.I("")}}
F.eW.prototype={}
F.hq.prototype={
bN:function(a,b,c){var u,t=b.a
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.M()
t=t.e
u=c.c
u.a.a.M()
if(t==u.e){t=b.b
t.a.a.M()
t=t.e
u=c.a
u.a.a.M()
if(t==u.e){t=b.c
t.a.a.M()
t=t.e
u=c.b
u.a.a.M()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cK.prototype={}
F.fl.prototype={}
F.hR.prototype={}
F.cZ.prototype={}
F.hi.prototype={
gv:function(){var u=this.e
return u==null?this.e=D.I():u},
aE:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aE()||!1
if(!t.a.aE())u=!1
s=t.e
if(s!=null)s.au(0)
return u},
fQ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.ae(o,0)])
for(o=[F.c3];u.length!==0;){t=C.a.gfJ(u)
C.a.bT(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.bN(0,t,q)){s.push(q)
C.a.bT(u,r)}}if(s.length>1)b.fP(s)}}p.a.M()
p.c.bU()
p.d.bU()
p.b.h6()
p.c.bV(new F.hR())
p.d.bV(new F.hq())
o=p.e
if(o!=null)o.au(0)},
fs:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aN()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aM().a)!==0)++s
if((t&$.aL().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.ck().a)!==0)++s
if((t&$.cl().a)!==0)++s
if((t&$.bB().a)!==0)++s
if((t&$.aK().a)!==0)++s
r=a4.gc2(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cr])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fo(m)
k=l.gc2(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cr(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fO(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cf(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cs(new Z.dm(a1,d),o,a4)
c.b=H.b([],[Z.cE])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.M()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.M()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.M()
b.push(t.e)}a=Z.lE(u,34963,b)
c.b.push(new Z.cE(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.m])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.I("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.I("   "))}return C.a.k(t,"\n")},
a1:function(){var u=this.e
if(u!=null)u.E(null)}}
F.hj.prototype={
fm:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bj])
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
h.push(F.eV(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.eV(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.eV(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.eV(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bV:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.bN(0,p,n)){p.b3()
break}}}}},
bU:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gcI(s)
if(t)s.b3()}},
aE:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bB())s=!1
return s},
bA:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].bz())s=!1
return s},
i:function(a){return this.P()},
I:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(a))
return C.a.k(r,"\n")},
P:function(){return this.I("")}}
F.hk.prototype={
gl:function(a){return 0},
bV:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.h(0,q)}},
bU:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gcI(s)
if(t)s.b3()}},
i:function(a){return this.P()},
I:function(a){var u,t,s=H.b([],[P.m])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.f(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.a.k(s,"\n")},
P:function(){return this.I("")}}
F.hl.prototype={
gl:function(a){return 0},
h6:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].ghJ()
t=t.ghG(t)
if(t.gl(t).V(0,1)){t=this.b
return H.f(t,u)
t[u].b3()}}},
i:function(a){return this.P()},
I:function(a){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].I(a))}return C.a.k(s,"\n")},
P:function(){return this.I("")}}
F.c3.prototype={
cJ:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.kk(u.cx,r,o,t,s,q,p,a,n)},
fO:function(a){var u,t,s=this
if(a.p(0,$.aN())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aM())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aL())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bb())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bc())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ck())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cl())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bB()))return H.b([s.ch],[P.M])
else if(a.p(0,$.aK())){u=H.b([-1,-1,-1,-1],[P.M])
return u}else return H.b([],[P.M])},
bB:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c2()
t.d.F(0,new F.ij(s))
s=s.a
t.r=s.u(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.au(0)}return!0},
bz:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c2()
t.d.F(0,new F.ii(s))
s=s.a
t.x=s.u(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.a1()
s=t.a.e
if(s!=null)s.au(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
q.push(C.b.as(J.af(s.e),0))
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
q.push(V.N(s.ch,3,0))
q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
P:function(){return this.I("")}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.ii.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.i8.prototype={
M:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.r("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a1()
return!0},
cw:function(a,b){var u=null,t=F.kk(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
aE:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bB()
return!0},
bA:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].bz()
return!0},
ft:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.u(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.P()},
I:function(a){var u,t,s,r
this.M()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].I(a))
return C.a.k(u,"\n")},
P:function(){return this.I("")}}
F.i9.prototype={
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
F:function(a,b){var u=this
C.a.F(u.b,b)
C.a.F(u.c,new F.ia(u,b))
C.a.F(u.d,new F.ib(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].I(""))
return C.a.k(r,"\n")}}
F.ia.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.ib.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.ic.prototype={
gl:function(a){return 0},
h:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
i:function(a){return this.P()},
P:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].I(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].I(""))}return C.a.k(s,"\n")}}
F.ie.prototype={}
F.id.prototype={
bN:function(a,b,c){return J.H(b.f,c.f)}}
F.ig.prototype={}
F.fY.prototype={
fP:function(a){var u,t,s,r,q,p,o,n,m=V.c2()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.D(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.u(0,Math.sqrt(m.A(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.u(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.E(null)}}}return}}
F.ih.prototype={
gl:function(a){return 0},
i:function(a){return this.P()},
P:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].I(""))}return C.a.k(s,"\n")}}
O.cO.prototype={
gv:function(){var u=this.fr
return u==null?this.fr=D.I():u},
a3:function(a){var u=this.fr
if(u!=null)u.E(a)},
eg:function(){return this.a3(null)},
cm:function(a){this.a=null
this.a3(a)},
f4:function(){return this.cm(null)},
ea:function(a,b){var u=new D.bk()
u.b=!0
this.a3(u)},
ec:function(a,b){var u=new D.bl()
u.b=!0
this.a3(u)},
ce:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gaf()
o=u.h(0,q.gaf())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cp])
u.F(0,new O.fB(g,n))
C.a.aL(n,new O.fC())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cx])
m.F(0,new O.fD(g,l))
C.a.aL(l,new O.fE())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gaf()
o=k.h(0,q.gaf())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d_])
k.F(0,new O.fF(g,j))
C.a.aL(j,new O.fG())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.q)(f),++r){q=f[r]
s=q.gaf()
p=i.h(0,q.gaf())
i.m(0,s,p==null?1:p)}h=H.b([],[A.d4])
i.F(0,new O.fH(g,h))
C.a.aL(h,new O.fI())
f=C.c.W(g.e.a.length+3,4)
g.dy.e
return A.lj(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dL:function(a,b){},
ag:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a1(u,u.length);u.t();){t=u.d
t.toString
s=$.i7
if(s==null)s=$.i7=new V.D(0,0,1)
t.a=s
r=$.i6
t.d=r==null?$.i6=new V.D(0,1,0):r
r=$.i5
t.e=r==null?$.i5=new V.D(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bc(s)
r=s.a
p=s.b
o=s.c
t.a=s.u(0,Math.sqrt(r*r+p*p+o*o))
o=q.bc(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.u(0,Math.sqrt(p*p+r*r+s*s))
s=q.bc(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.u(0,Math.sqrt(r*r+p*p+o*o))}}}},
h8:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.ce()
u=b4.fr.h(0,b3.aR)
if(u==null){u=A.li(b3,b4.a)
t=u.b
if(t.length===0)H.u(P.r("May not cache a shader with no name."))
if(b4.fr.fu(0,t))H.u(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.b5
b3=b5.e
if(!(b3 instanceof Z.cs))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.aE()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bA()
p.a.bA()
p=p.e
if(p!=null)p.au(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.ft()
o=o.e
if(o!=null)o.au(0)}m=b5.d.fs(new Z.il(b4.a),r)
m.aH($.aN()).e=b2.a.Q.c
if(b3)m.aH($.aM()).e=b2.a.cx.c
if(q)m.aH($.aL()).e=b2.a.ch.c
if(s.r2)m.aH($.bb()).e=b2.a.cy.c
if(p)m.aH($.bc()).e=b2.a.db.c
if(s.ry)m.aH($.aK()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.hG])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fH()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gU(p)
b3=b3.dy
b3.toString
b3.a8(p.a2(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gU(p)
o=b4.dx
o=b4.cx=p.q(0,o.gU(o))
p=o}b3=b3.fr
b3.toString
b3.a8(p.a2(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gh4()
o=b4.dx
o=b4.ch=p.q(0,o.gU(o))
p=o}b3=b3.fy
b3.toString
b3.a8(p.a2(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gU(p)
b3=b3.fx
b3.toString
b3.a8(p.a2(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a8(C.j.a2(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a8(C.j.a2(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a8(C.j.a2(p,!0))}if(s.b4>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.cf(p.a2(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}if(s.a.a){b3=b2.a
p=b2.f.f
b3=b3.r2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.k1){if(s.b.a){b3=b2.a
p=b2.r.f
b3=b3.x1
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.c.a){b3=b2.a
p=b2.x.f
b3=b3.y2
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}if(s.d.a){b3=b2.a
p=b2.y.f
b3=b3.b5
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.cO
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.cN
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.w
h=new H.G([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gaf()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cm(b2.a.bF.h(0,e),d)
n=f.ghk()
b=$.am
n=n.aU(b==null?$.am=new V.X(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghp()
b=$.am
n=n.aU(b==null?$.am=new V.X(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gam(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcM()){n=f.gcB()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcC()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcD()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bE.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gU(p)
p=P.w
a0=new H.G([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.cm(b2.a.bH.h(0,0),d)
n=a.bc(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.u(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bG.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gU(p)
p=P.w
a3=new H.G([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gaf()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.cm(b2.a.bJ.h(0,e),d)
a4=a.q(0,f.gU(f))
n=f.gU(f)
b=$.am
n=n.aU(b==null?$.am=new V.X(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.am
n=a4.aU(n==null?$.am=new V.X(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gam(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=a4.cW(0)
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
i=new Float32Array(H.cf(new V.cQ(b,a1,a2,a5,a6,a7,a8,a9,n).a2(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gav()
n=f.gav()
if(!C.a.J(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gav()
b=n.gaq(n)
if(b){b=c.f
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}f.gaK()
n=f.gdi()
b=c.x
b.toString
a1=n.gfE(n)
a2=n.gfF(n)
a5=n.gfG()
n=n.gfD()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaK()
if(!C.a.J(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gaK()
b=n.gaq(n)
if(b){b=c.r
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}if(f.gcM()){n=f.gcB()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcC()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcD()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bI.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gU(p)
p=P.w
b1=new H.G([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.q)(p),++g){f=p[g]
e=f.gaf()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.cm(b2.a.bL.h(0,e),d)
n=f.gh3(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghn(f).hF()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aU(f.gh3(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gam(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gav()
n=f.gbY()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gbW(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghH()
b=c.x
b.a.uniform1f(b.d,n)
n=f.ghI()
b=c.y
b.a.uniform1f(b.d,n)
f.gav()
n=f.gav()
if(!C.a.J(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gav()
b=n.gaq(n)
if(b){b=c.dx
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}f.gaK()
n=f.gdi()
b=c.z
b.toString
a1=n.gfE(n)
a2=n.gfF(n)
a5=n.gfG()
n=n.gfD()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaK()
if(!C.a.J(l,n)){n.sap(0,l.length)
l.push(n)}n=f.gaK()
b=n.gaq(n)
if(b){b=c.dy
b.toString
a1=n.gaq(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gap(n)
b.a.uniform1i(b.d,n)}}if(f.gho()){n=f.ghm()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghl()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcM()){n=f.gcB()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcC()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcD()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bK.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gU(p).cW(0)}b3=b3.id
b3.toString
b3.a8(p.a2(0,!0))}if(s.db){b2.dL(l,b2.ch)
b3=b2.a
p=b2.ch
b3.f7(b3.cP,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.cQ
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.cR
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.cS
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.cT
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b1(b4)
b3=b5.e
b3.b1(b4)
b3.aI(b4)
b3.dc(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dc(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fC()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.ce().aR}}
O.fB.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cp(a,C.c.W(b+3,4)*4))}}
O.fC.prototype={
$2:function(a,b){return J.cn(a.a,b.a)}}
O.fD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cx(a,C.c.W(b+3,4)*4))}}
O.fE.prototype={
$2:function(a,b){return J.cn(a.a,b.a)}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d_(a,C.c.W(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.cn(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d4(a,C.c.W(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.cn(a.a,b.a)}}
O.fv.prototype={
ak:function(){var u,t=this
t.c4()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.cP.prototype={
ak:function(){},
cp:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ak()
u=s.a
u.a=null
u.a3(null)}}}
O.fw.prototype={}
O.aj.prototype={
co:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
ak:function(){this.c4()
this.co(new V.Q(1,1,1))},
sam:function(a,b){this.cp(new A.U(!0,!1,!1))
this.co(b)}}
O.fy.prototype={}
O.fz.prototype={
ak:function(){var u,t=this
t.c5()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.a3(u)}}}
O.fA.prototype={
cq:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
ak:function(){this.c5()
this.cq(100)}}
O.d9.prototype={}
T.hG.prototype={}
X.jf.prototype={}
X.f3.prototype={
gv:function(){var u=this.x
return u==null?this.x=D.I():u}}
X.cY.prototype={
gv:function(){var u=this.f
return u==null?this.f=D.I():u},
aA:function(a){var u=this.f
if(u!=null)u.E(a)},
dI:function(){return this.aA(null)},
scZ:function(a){var u,t,s=this
if(!J.H(s.b,a)){u=s.b
if(u!=null)u.gv().S(0,s.gc9())
t=s.b
s.b=a
if(a!=null)a.gv().n(0,s.gc9())
u=new D.B("mover",t,s.b)
u.b=!0
s.aA(u)}}}
X.hC.prototype={}
V.cu.prototype={
aX:function(a){this.b=new P.f8(C.G)
this.c=null
this.d=H.b([],[[P.ac,W.ab]])},
H:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ab]))
u=a.split("\n")
for(l=u.length,t=[W.ab],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.dT(q,0,q.length)
n=o==null?q:o
C.E.dh(p,H.jH(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb7(m.d).push(p)}},
d3:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.ac,W.ab]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.b2()
for(t.toString,s=new H.k(u),s=new P.bv(t.bX(new H.b_(s,s.gl(s))).a());s.t();)r.ba(s.gw(s))}}
V.j9.prototype={
$1:function(a){var u=C.d.da(this.a.gfL(),2)
if(u!=="0.00")P.jG(u+" fps")}}
V.eI.prototype={
ba:function(a){var u=this
switch(a.a){case"Class":u.H(a.b,"#551")
break
case"Comment":u.H(a.b,"#777")
break
case"Id":u.H(a.b,"#111")
break
case"Num":u.H(a.b,"#191")
break
case"Reserved":u.H(a.b,"#119")
break
case"String":u.H(a.b,"#171")
break
case"Symbol":u.H(a.b,"#616")
break
case"Type":u.H(a.b,"#B11")
break
case"Whitespace":u.H(a.b,"#111")
break}},
b2:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hK()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.p(new H.k("_"))
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
t=K.p(new H.k("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.L("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.L("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.p(new H.k(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.p(new H.k(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.p(new H.k('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.p(new H.k('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.p(new H.k("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.p(new H.k('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.au())
t=a1.j(0,r).k(0,h)
u=K.p(new H.k("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.p(new H.k("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.p(new H.k("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.p(new H.k("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.au())
t=a1.j(0,r).k(0,e)
u=K.p(new H.k("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.p(new H.k("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.p(new H.k("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.a_()
s=[K.b0]
t.a=H.b([],s)
u.a.push(t)
u=K.p(new H.k("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.p(new H.k("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.p(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.a_()
t.a=H.b([],s)
u.a.push(t)
u=K.p(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.p(new H.k("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.p(new H.k(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.p(new H.k(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.K("Num")
t=a1.j(0,n)
t.d=t.a.K("Num")
t=a1.j(0,m)
t.d=t.a.K("Symbol")
t=a1.j(0,j)
t.d=t.a.K("String")
t=a1.j(0,g)
t.d=t.a.K("String")
t=a1.j(0,c)
t.d=t.a.K(d)
t=a1.j(0,a0)
t.d=t.a.K(a0)
t=a1.j(0,q)
t=t.d=t.a.K(q)
u=[P.m]
t.at(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.at(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.at(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f5.prototype={
ba:function(a){var u=this
switch(a.a){case"Builtin":u.H(a.b,"#411")
break
case"Comment":u.H(a.b,"#777")
break
case"Id":u.H(a.b,"#111")
break
case"Num":u.H(a.b,"#191")
break
case"Preprocess":u.H(a.b,"#737")
break
case"Reserved":u.H(a.b,"#119")
break
case"Symbol":u.H(a.b,"#611")
break
case"Type":u.H(a.b,"#171")
break
case"Whitespace":u.H(a.b,"#111")
break}},
b2:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hK()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.p(new H.k("_"))
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
t=K.p(new H.k("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.L("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.L("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.p(new H.k(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.p(new H.k(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.p(new H.k("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.p(new H.k("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.au())
t=e.j(0,j).k(0,i)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.a_()
s=[K.b0]
t.a=H.b([],s)
u.a.push(t)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.p(new H.k("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.a_()
u.a=H.b([],s)
t.a.push(u)
t=K.p(new H.k("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.p(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.p(new H.k(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.p(new H.k(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.K("Num")
u=e.j(0,n)
u.d=u.a.K("Num")
u=e.j(0,m)
u.d=u.a.K("Symbol")
u=e.j(0,i)
u.d=u.a.K(j)
u=e.j(0,g)
u.d=u.a.K(h)
u=e.j(0,f)
u.d=u.a.K(f)
u=e.j(0,q)
u=u.d=u.a.K(q)
t=[P.m]
u.at(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.at(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.at(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f6.prototype={
ba:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.H(a.b,"#911")
u.H("=",t)
break
case"Id":u.H(a.b,t)
break
case"Other":u.H(a.b,t)
break
case"Reserved":u.H(a.b,"#119")
break
case"String":u.H(a.b,"#171")
break
case"Symbol":u.H(a.b,"#616")
break}},
b2:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hK()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.p(new H.k("_"))
u.a.push(t)
t=K.L("a","z")
u.a.push(t)
t=K.L("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.p(new H.k("_"))
t.a.push(u)
u=K.L("0","9")
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.p(new H.k("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.p(new H.k("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.p(new H.k("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.p(new H.k('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.p(new H.k('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.p(new H.k("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.p(new H.k('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.au())
l.j(0,s).k(0,m).a.push(new K.au())
u=l.j(0,m).k(0,m)
t=new K.a_()
t.a=H.b([],[K.b0])
u.a.push(t)
u=K.p(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.L("a","z")
t.a.push(u)
u=K.L("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.K("Symbol")
u=l.j(0,n)
u.d=u.a.K("String")
u=l.j(0,r)
t=u.a.K(r)
u.d=t
t.at(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.K(q)
t=l.j(0,m)
t.d=t.a.K(m)
return l}}
V.h3.prototype={
d3:function(a,b){this.d=H.b([],[[P.ac,W.ab]])
this.H(C.a.k(b,"\n"),"#111")},
ba:function(a){},
b2:function(){return}}
V.hm.prototype={
dz:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.T(q,"scroll",new V.ho(o),!1)},
cz:function(a){var u,t,s,r,q,p,o,n
this.fc()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fN(a),s.toString,r=new H.k(r),r=new P.bv(s.bX(new H.b_(r,r.gl(r))).a());r.t();){s=r.gw(r)
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
if(H.mM(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ko(C.q,s,C.f,!1)
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
dd:function(a){var u,t,s,r=new V.eI("dart")
r.aX("dart")
u=new V.f5("glsl")
u.aX("glsl")
t=new V.f6("html")
t.aX("html")
s=C.a.fK(H.b([r,u,t],[V.cu]),new V.hp(a))
if(s!=null)return s
r=new V.h3("plain")
r.aX("plain")
return r},
cv:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jB(s).be(s,"+")){b0[t]=C.b.ab(s,1)
a6.push(1)
u=!0}else if(C.b.be(s,"-")){b0[t]=C.b.ab(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dd(a8)
r.d3(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.ko(C.q,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jM()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.q)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.q)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gN(s);a2.t();)d.appendChild(a2.gw(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fc:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hK()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.a_()
r=[K.b0]
s.a=H.b([],r)
t.a.push(s)
t=K.p(new H.k("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.p(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.a_()
s.a=H.b([],r)
t.a.push(s)
t=K.p(new H.k("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.p(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.a_()
s.a=H.b([],r)
t.a.push(s)
t=K.p(new H.k("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.p(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.p(new H.k("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.p(new H.k("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.p(new H.k("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.p(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.p(new H.k("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.au())
s=u.j(0,i).k(0,i)
t=new K.a_()
t.a=H.b([],r)
s.a.push(t)
s=K.p(new H.k("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.K(p)
s=u.j(0,n)
s.d=s.a.K(o)
s=u.j(0,"CodeEnd")
s.d=s.a.K(m)
s=u.j(0,j)
s.d=s.a.K("Link")
s=u.j(0,i)
s.d=s.a.K(i)
this.b=u}}
V.ho.prototype={
$1:function(a){P.kb(C.i,new V.hn(this.a))}}
V.hn.prototype={
$0:function(){var u=C.d.a9(document.documentElement.scrollTop),t=this.a.style,s=H.c(-0.01*u)+"px"
t.top=s}}
V.hp.prototype={
$1:function(a){return a.a===this.a}}
Q.j7.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.m]
u.cv("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cv("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dm=u.i
u=J.cH.prototype
u.dq=u.i
u=P.i.prototype
u.dn=u.bd
u=W.O.prototype
u.bf=u.a5
u=W.dS.prototype
u.dr=u.ae
u=K.cD.prototype
u.dl=u.ar
u.c3=u.i
u=O.cP.prototype
u.c4=u.ak
u=O.aj.prototype
u.c5=u.ak})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"lT","ld",19)
t(P,"mn","lG",6)
t(P,"mo","lH",6)
t(P,"mp","lI",6)
s(P,"kt","ml",9)
r(W,"mz",4,null,["$4"],["lJ"],15,0)
r(W,"mA",4,null,["$4"],["lK"],15,0)
var l
q(l=E.aV.prototype,"gd1",0,0,null,["$1","$0"],["d2","fW"],0,0)
q(l,"gd_",0,0,null,["$1","$0"],["d0","fT"],0,0)
p(l,"gfR","fS",3)
p(l,"gfU","fV",3)
q(l=E.da.prototype,"gc6",0,0,null,["$1","$0"],["c8","c7"],0,0)
o(l,"gha","d7",9)
n(l=X.di.prototype,"ger","es",4)
n(l,"ged","ee",4)
n(l,"gel","em",2)
n(l,"gew","ex",10)
n(l,"geu","ev",10)
n(l,"geA","eB",2)
n(l,"geE","eF",2)
n(l,"gep","eq",2)
n(l,"geC","eD",2)
n(l,"gen","eo",2)
n(l,"geG","eH",17)
n(l,"geI","eJ",4)
n(l,"geV","eW",5)
n(l,"geR","eS",5)
n(l,"geT","eU",5)
q(D.bg.prototype,"gdC",0,0,null,["$1","$0"],["ah","dD"],0,0)
q(l=D.cJ.prototype,"gck",0,0,null,["$1","$0"],["cl","ey"],0,0)
n(l,"geL","eM",18)
p(l,"ge7","e8",11)
p(l,"geP","eQ",11)
m(V.E.prototype,"gl","bM",12)
m(V.D.prototype,"gl","bM",12)
q(l=U.bI.prototype,"gaz",0,0,null,["$1","$0"],["L","X"],0,0)
p(l,"ge5","e6",13)
p(l,"geN","eO",13)
q(l=U.dj.prototype,"gaz",0,0,null,["$1","$0"],["L","X"],0,0)
n(l,"gbo","bp",1)
n(l,"gbq","br",1)
n(l,"gbs","bt",1)
q(l=U.dk.prototype,"gaz",0,0,null,["$1","$0"],["L","X"],0,0)
n(l,"gbo","bp",1)
n(l,"gbq","br",1)
n(l,"gbs","bt",1)
n(l,"gdZ","e_",1)
n(l,"ge0","e1",1)
n(l,"gfj","fk",1)
n(l,"gfh","fi",1)
n(l,"gff","fg",1)
n(U.dl.prototype,"ge3","e4",1)
q(l=M.cA.prototype,"gac",0,0,null,["$1","$0"],["ai","dE"],0,0)
p(l,"geh","ei",3)
p(l,"gej","ek",3)
q(l=O.cO.prototype,"gef",0,0,null,["$1","$0"],["a3","eg"],0,0)
q(l,"gf3",0,0,null,["$1","$0"],["cm","f4"],0,0)
p(l,"ge9","ea",14)
p(l,"geb","ec",14)
q(X.cY.prototype,"gc9",0,0,null,["$1","$0"],["aA","dI"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.W,null)
s(P.W,[H.jo,J.a,J.a1,P.dF,P.i,H.b_,P.fd,H.cB,H.i0,H.hP,P.bh,H.bF,H.dX,P.V,H.fm,H.fn,H.fg,P.e2,P.bu,P.bv,P.dn,P.d7,P.hy,P.db,P.iV,P.iI,P.iC,P.dE,P.t,P.ez,P.f9,P.iT,P.as,P.a7,P.a5,P.aU,P.h1,P.d5,P.dw,P.f2,P.f4,P.ac,P.bM,P.b1,P.m,P.an,W.eE,W.c6,W.J,W.cW,W.dS,W.iN,W.cC,W.aB,W.iH,W.e7,P.iD,K.au,K.cD,K.b0,K.h8,K.hh,L.d6,L.dc,L.dd,L.hJ,O.aR,O.bO,E.ev,E.aV,E.h9,E.da,Z.dm,Z.il,Z.cs,Z.cE,Z.b7,D.ey,D.bi,D.R,X.ct,X.cI,X.fj,X.fq,X.a8,X.fP,X.hL,X.di,D.eu,D.bg,D.Z,D.h5,D.ht,V.Q,V.aS,V.eS,V.cQ,V.ay,V.a9,V.X,V.d1,V.E,V.D,U.dj,U.dk,U.dl,M.cA,A.co,A.ep,A.U,A.cp,A.cx,A.d_,A.d4,A.fx,A.bY,A.bZ,A.c0,A.c1,A.dg,A.hX,F.bj,F.eW,F.cK,F.fl,F.cZ,F.hi,F.hj,F.hk,F.hl,F.c3,F.i8,F.i9,F.ic,F.ie,F.ig,F.ih,O.d9,O.cP,O.fy,X.jf,X.hC,X.cY,V.cu,V.hm])
s(J.a,[J.fe,J.cG,J.cH,J.aW,J.bK,J.aX,H.bR,W.e,W.em,W.cq,W.ai,W.F,W.dq,W.a6,W.eJ,W.eK,W.ds,W.cz,W.du,W.eM,W.h,W.dx,W.ax,W.f7,W.dA,W.fp,W.fJ,W.dG,W.dH,W.az,W.dI,W.dL,W.aC,W.dP,W.dR,W.aF,W.dT,W.aG,W.dY,W.ao,W.e0,W.hI,W.aI,W.e3,W.hN,W.i2,W.e8,W.ea,W.ec,W.ee,W.eg,P.aZ,P.dC,P.b2,P.dN,P.h7,P.dZ,P.b4,P.e5,P.eq,P.dp,P.dV])
s(J.cH,[J.h2,J.bt,J.aY])
t(J.jn,J.aW)
s(J.bK,[J.cF,J.ff])
t(P.fo,P.dF)
s(P.fo,[H.dh,W.it,W.Y,P.eZ])
t(H.k,H.dh)
s(P.i,[H.o,H.bN,H.c4,P.fb])
s(H.o,[H.cL,H.bn])
t(H.eP,H.bN)
s(P.fd,[H.cN,H.im])
t(H.ft,H.cL)
s(P.bh,[H.fZ,H.fi,H.i_,H.ex,H.hf,P.cX,P.ag,P.i1,P.hZ,P.bV,P.eB,P.eH])
s(H.bF,[H.jc,H.hD,H.fh,H.j3,H.j4,H.j5,P.ip,P.io,P.iq,P.ir,P.iS,P.iR,P.iY,P.iF,P.iG,P.fs,P.eN,P.eO,W.eQ,W.fL,W.fN,W.he,W.hx,W.ix,W.fX,W.fW,W.iJ,W.iK,W.iQ,W.iU,P.iZ,P.f_,P.f0,P.es,E.ha,E.hb,E.hc,E.hH,D.eT,D.eU,F.jb,F.j_,F.ij,F.ii,F.ia,F.ib,O.fB,O.fC,O.fD,O.fE,O.fF,O.fG,O.fH,O.fI,V.j9,V.ho,V.hn,V.hp,Q.j7])
s(H.hD,[H.hv,H.bD])
t(P.fr,P.V)
s(P.fr,[H.G,W.is])
t(H.cS,H.bR)
s(H.cS,[H.c7,H.c9])
t(H.c8,H.c7)
t(H.bQ,H.c8)
t(H.ca,H.c9)
t(H.cT,H.ca)
s(H.cT,[H.fQ,H.fR,H.fS,H.fT,H.fU,H.cU,H.fV])
t(P.iO,P.fb)
t(P.iE,P.iV)
t(P.iB,P.iI)
t(P.eC,P.hy)
t(P.eR,P.ez)
s(P.eC,[P.f8,P.i4])
t(P.i3,P.eR)
s(P.a5,[P.M,P.w])
s(P.ag,[P.bp,P.fa])
s(W.e,[W.A,W.eY,W.aE,W.cb,W.aH,W.ap,W.cd,W.ik,W.c5,P.et,P.bd])
s(W.A,[W.O,W.aQ])
s(W.O,[W.l,P.j])
s(W.l,[W.en,W.eo,W.be,W.bf,W.ab,W.f1,W.hg,W.d8,W.hA,W.hB,W.bW])
t(W.eD,W.ai)
t(W.bG,W.dq)
s(W.a6,[W.eF,W.eG])
t(W.dt,W.ds)
t(W.cy,W.dt)
t(W.dv,W.du)
t(W.eL,W.dv)
t(W.aw,W.cq)
t(W.dy,W.dx)
t(W.eX,W.dy)
t(W.dB,W.dA)
t(W.bJ,W.dB)
t(W.b5,W.h)
s(W.b5,[W.bm,W.al,W.bq])
t(W.fK,W.dG)
t(W.fM,W.dH)
t(W.dJ,W.dI)
t(W.fO,W.dJ)
t(W.dM,W.dL)
t(W.cV,W.dM)
t(W.dQ,W.dP)
t(W.h4,W.dQ)
t(W.hd,W.dR)
t(W.cc,W.cb)
t(W.hr,W.cc)
t(W.dU,W.dT)
t(W.hs,W.dU)
t(W.hw,W.dY)
t(W.e1,W.e0)
t(W.hE,W.e1)
t(W.ce,W.cd)
t(W.hF,W.ce)
t(W.e4,W.e3)
t(W.hM,W.e4)
t(W.b8,W.al)
t(W.e9,W.e8)
t(W.iu,W.e9)
t(W.dr,W.cz)
t(W.eb,W.ea)
t(W.iy,W.eb)
t(W.ed,W.ec)
t(W.dK,W.ed)
t(W.ef,W.ee)
t(W.iL,W.ef)
t(W.eh,W.eg)
t(W.iM,W.eh)
t(W.iv,W.is)
t(W.iw,P.d7)
t(W.iP,W.dS)
t(P.a3,P.iD)
t(P.dD,P.dC)
t(P.fk,P.dD)
t(P.dO,P.dN)
t(P.h_,P.dO)
t(P.bU,P.j)
t(P.e_,P.dZ)
t(P.hz,P.e_)
t(P.e6,P.e5)
t(P.hO,P.e6)
t(P.er,P.dp)
t(P.h0,P.bd)
t(P.dW,P.dV)
t(P.hu,P.dW)
s(K.cD,[K.a_,L.df])
s(E.ev,[Z.cr,A.d2,T.hG])
s(D.R,[D.bk,D.bl,D.B,X.h6])
s(X.h6,[X.cM,X.aA,X.bP,X.de])
s(O.aR,[D.cJ,U.bI])
s(D.ey,[U.eA,U.a2])
t(U.cv,U.a2)
t(A.fu,A.d2)
s(A.dg,[A.b6,A.hU,A.hV,A.hW,A.hS,A.P,A.hT,A.C,A.bX,A.hY,A.c_,A.a4,A.br,A.bs])
t(F.hq,F.eW)
t(F.hR,F.fl)
t(F.id,F.ie)
t(F.fY,F.ig)
t(O.cO,O.d9)
s(O.cP,[O.fv,O.fw,O.aj])
s(O.aj,[O.fz,O.fA])
t(X.f3,X.hC)
s(V.cu,[V.eI,V.f5,V.f6,V.h3])
u(H.dh,H.i0)
u(H.c7,P.t)
u(H.c8,H.cB)
u(H.c9,P.t)
u(H.ca,H.cB)
u(P.dF,P.t)
u(W.dq,W.eE)
u(W.ds,P.t)
u(W.dt,W.J)
u(W.du,P.t)
u(W.dv,W.J)
u(W.dx,P.t)
u(W.dy,W.J)
u(W.dA,P.t)
u(W.dB,W.J)
u(W.dG,P.V)
u(W.dH,P.V)
u(W.dI,P.t)
u(W.dJ,W.J)
u(W.dL,P.t)
u(W.dM,W.J)
u(W.dP,P.t)
u(W.dQ,W.J)
u(W.dR,P.V)
u(W.cb,P.t)
u(W.cc,W.J)
u(W.dT,P.t)
u(W.dU,W.J)
u(W.dY,P.V)
u(W.e0,P.t)
u(W.e1,W.J)
u(W.cd,P.t)
u(W.ce,W.J)
u(W.e3,P.t)
u(W.e4,W.J)
u(W.e8,P.t)
u(W.e9,W.J)
u(W.ea,P.t)
u(W.eb,W.J)
u(W.ec,P.t)
u(W.ed,W.J)
u(W.ee,P.t)
u(W.ef,W.J)
u(W.eg,P.t)
u(W.eh,W.J)
u(P.dC,P.t)
u(P.dD,W.J)
u(P.dN,P.t)
u(P.dO,W.J)
u(P.dZ,P.t)
u(P.e_,W.J)
u(P.e5,P.t)
u(P.e6,W.J)
u(P.dp,P.V)
u(P.dV,P.t)
u(P.dW,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",a5:"num",m:"String",as:"bool",b1:"Null",ac:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.R]},{func:1,ret:-1,args:[D.R]},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[P.w,[P.i,E.aV]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bq]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b1,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bm]},{func:1,ret:-1,args:[P.w,[P.i,D.Z]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.i,U.a2]]},{func:1,ret:-1,args:[P.w,[P.i,V.ay]]},{func:1,ret:P.as,args:[W.O,P.m,P.m,W.c6]},{func:1,ret:P.b1,args:[,]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.as,args:[[P.i,D.Z]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.be.prototype
C.h=W.bf.prototype
C.E=W.ab.prototype
C.H=J.a.prototype
C.a=J.aW.prototype
C.c=J.cF.prototype
C.j=J.cG.prototype
C.d=J.bK.prototype
C.b=J.aX.prototype
C.I=J.aY.prototype
C.r=J.h2.prototype
C.t=W.d8.prototype
C.m=J.bt.prototype
C.u=W.b8.prototype
C.v=W.c5.prototype
C.o=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.w=function() {
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
C.B=function(getTagFallback) {
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
C.x=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.y=function(hooks) {
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
C.A=function(hooks) {
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
C.z=function(hooks) {
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

C.C=new P.h1()
C.f=new P.i3()
C.D=new P.i4()
C.e=new P.iE()
C.i=new P.aU(0)
C.F=new P.aU(5e6)
C.G=new P.f9("element",!1,!1,!1)
C.J=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.K=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.L=H.b(u([]),[P.m])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.M=new P.bu(null,2)})();(function staticFields(){$.ah=0
$.bE=null
$.jN=null
$.kw=null
$.ks=null
$.kz=null
$.j0=null
$.j6=null
$.jE=null
$.bw=null
$.cg=null
$.ch=null
$.jy=!1
$.ad=C.e
$.a0=[]
$.av=null
$.jj=null
$.jU=null
$.jT=null
$.dz=P.jW(P.m,P.f4)
$.k_=null
$.k2=null
$.am=null
$.k7=null
$.kf=null
$.ki=null
$.kh=null
$.i5=null
$.i6=null
$.i7=null
$.kg=null
$.k1=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mV","kD",function(){return H.kv("_$dart_dartClosure")})
u($,"mW","jI",function(){return H.kv("_$dart_js")})
u($,"mX","kE",function(){return H.aq(H.hQ({
toString:function(){return"$receiver$"}}))})
u($,"mY","kF",function(){return H.aq(H.hQ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mZ","kG",function(){return H.aq(H.hQ(null))})
u($,"n_","kH",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n2","kK",function(){return H.aq(H.hQ(void 0))})
u($,"n3","kL",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n1","kJ",function(){return H.aq(H.kd(null))})
u($,"n0","kI",function(){return H.aq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n5","kN",function(){return H.aq(H.kd(void 0))})
u($,"n4","kM",function(){return H.aq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"ni","jJ",function(){return P.lF()})
u($,"nl","kS",function(){return P.lu("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nj","kR",function(){return P.jX(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"nc","kQ",function(){return Z.aa(0)})
u($,"n6","kO",function(){return Z.aa(511)})
u($,"ne","aN",function(){return Z.aa(1)})
u($,"nd","aM",function(){return Z.aa(2)})
u($,"n8","aL",function(){return Z.aa(4)})
u($,"nf","bb",function(){return Z.aa(8)})
u($,"ng","bc",function(){return Z.aa(16)})
u($,"n9","ck",function(){return Z.aa(32)})
u($,"na","cl",function(){return Z.aa(64)})
u($,"nb","kP",function(){return Z.aa(96)})
u($,"nh","bB",function(){return Z.aa(128)})
u($,"n7","aK",function(){return Z.aa(256)})
u($,"mU","kC",function(){return new V.eS(1e-9)})
u($,"mT","z",function(){return $.kC()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bR,ArrayBufferView:H.bR,Float32Array:H.bQ,Float64Array:H.bQ,Int16Array:H.fQ,Int32Array:H.fR,Int8Array:H.fS,Uint16Array:H.fT,Uint32Array:H.fU,Uint8ClampedArray:H.cU,CanvasPixelArray:H.cU,Uint8Array:H.fV,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.em,HTMLAnchorElement:W.en,HTMLAreaElement:W.eo,Blob:W.cq,HTMLBodyElement:W.be,HTMLCanvasElement:W.bf,CDATASection:W.aQ,CharacterData:W.aQ,Comment:W.aQ,ProcessingInstruction:W.aQ,Text:W.aQ,CSSPerspective:W.eD,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bG,MSStyleCSSProperties:W.bG,CSS2Properties:W.bG,CSSImageValue:W.a6,CSSKeywordValue:W.a6,CSSNumericValue:W.a6,CSSPositionValue:W.a6,CSSResourceValue:W.a6,CSSUnitValue:W.a6,CSSURLImageValue:W.a6,CSSStyleValue:W.a6,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eF,CSSUnparsedValue:W.eG,DataTransferItemList:W.eJ,HTMLDivElement:W.ab,DOMException:W.eK,ClientRectList:W.cy,DOMRectList:W.cy,DOMRectReadOnly:W.cz,DOMStringList:W.eL,DOMTokenList:W.eM,Element:W.O,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aw,FileList:W.eX,FileWriter:W.eY,HTMLFormElement:W.f1,Gamepad:W.ax,History:W.f7,HTMLCollection:W.bJ,HTMLFormControlsCollection:W.bJ,HTMLOptionsCollection:W.bJ,KeyboardEvent:W.bm,Location:W.fp,MediaList:W.fJ,MIDIInputMap:W.fK,MIDIOutputMap:W.fM,MimeType:W.az,MimeTypeArray:W.fO,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.cV,RadioNodeList:W.cV,Plugin:W.aC,PluginArray:W.h4,RTCStatsReport:W.hd,HTMLSelectElement:W.hg,SourceBuffer:W.aE,SourceBufferList:W.hr,SpeechGrammar:W.aF,SpeechGrammarList:W.hs,SpeechRecognitionResult:W.aG,Storage:W.hw,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.d8,HTMLTableRowElement:W.hA,HTMLTableSectionElement:W.hB,HTMLTemplateElement:W.bW,TextTrack:W.aH,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hE,TextTrackList:W.hF,TimeRanges:W.hI,Touch:W.aI,TouchEvent:W.bq,TouchList:W.hM,TrackDefaultList:W.hN,CompositionEvent:W.b5,FocusEvent:W.b5,TextEvent:W.b5,UIEvent:W.b5,URL:W.i2,VideoTrackList:W.ik,WheelEvent:W.b8,Window:W.c5,DOMWindow:W.c5,CSSRuleList:W.iu,ClientRect:W.dr,DOMRect:W.dr,GamepadList:W.iy,NamedNodeMap:W.dK,MozNamedAttrMap:W.dK,SpeechRecognitionResultList:W.iL,StyleSheetList:W.iM,SVGLength:P.aZ,SVGLengthList:P.fk,SVGNumber:P.b2,SVGNumberList:P.h_,SVGPointList:P.h7,SVGScriptElement:P.bU,SVGStringList:P.hz,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b4,SVGTransformList:P.hO,AudioBuffer:P.eq,AudioParamMap:P.er,AudioTrackList:P.et,AudioContext:P.bd,webkitAudioContext:P.bd,BaseAudioContext:P.bd,OfflineAudioContext:P.h0,SQLResultSetRowList:P.hu})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.bQ.$nativeSuperclassTag="ArrayBufferView"
H.c9.$nativeSuperclassTag="ArrayBufferView"
H.ca.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
W.cb.$nativeSuperclassTag="EventTarget"
W.cc.$nativeSuperclassTag="EventTarget"
W.cd.$nativeSuperclassTag="EventTarget"
W.ce.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Q.kx,[])
else Q.kx([])})})()
//# sourceMappingURL=test.dart.js.map
