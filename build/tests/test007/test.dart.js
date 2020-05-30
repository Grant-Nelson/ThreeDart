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
a[c]=function(){a[c]=function(){H.mU(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jE"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jE(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jr:function jr(){},
lj:function(a,b,c,d){if(!!a.$ip)return new H.eY(a,b,[c,d])
return new H.bR(a,b,[c,d])},
jo:function(){return new P.c0("No element")},
ld:function(){return new P.c0("Too many elements")},
lC:function(a,b){var u=J.aT(a)
if(typeof u!=="number")return u.F()
H.d9(a,0,u-1,b)},
d9:function(a,b,c,d){if(c-b<=32)H.lB(a,b,c,d)
else H.lA(a,b,c,d)},
lB:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.er(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.X()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lA:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.W(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.W(a4+a5,2),f=g-j,e=g+j,d=J.er(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
H.d9(a3,a4,t-2,a6)
H.d9(a3,s+2,a5,a6)
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
break}}H.d9(a3,t,s,a6)}else H.d9(a3,t,s,a6)},
m:function m(a){this.a=a},
p:function p(){},
cR:function cR(){},
b4:function b4(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bR:function bR(a,b,c){this.a=a
this.b=b
this.$ti=c},
eY:function eY(a,b,c){this.a=a
this.b=b
this.$ti=c},
cT:function cT(a,b){this.a=null
this.b=a
this.c=b},
fx:function fx(a,b,c){this.a=a
this.b=b
this.$ti=c},
c9:function c9(a,b,c){this.a=a
this.b=b
this.$ti=c},
io:function io(a,b){this.a=a
this.b=b},
cI:function cI(){},
i4:function i4(){},
dp:function dp(){},
cp:function(a){var u,t=H.mV(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mD:function(a){return v.types[a]},
mK:function(a,b){var u
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
bY:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bZ:function(a){return H.lm(a)+H.kr(H.co(a),0,null)},
lm:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.H||!!n.$ibv){r=C.o(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cp(t.length>1&&C.b.aN(t,0)===36?C.b.ae(t,1):t)},
k7:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lv:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.b4(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aL(s))}return H.k7(r)},
lu:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aL(s))
if(s<0)throw H.c(H.aL(s))
if(s>65535)return H.lv(a)}return H.k7(a)},
ju:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.b4(u,10))>>>0,56320|u&1023)}throw H.c(P.aE(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lt:function(a){var u=H.br(a).getFullYear()+0
return u},
lr:function(a){var u=H.br(a).getMonth()+1
return u},
ln:function(a){var u=H.br(a).getDate()+0
return u},
lo:function(a){var u=H.br(a).getHours()+0
return u},
lq:function(a){var u=H.br(a).getMinutes()+0
return u},
ls:function(a){var u=H.br(a).getSeconds()+0
return u},
lp:function(a){var u=H.br(a).getMilliseconds()+0
return u},
v:function(a){throw H.c(H.aL(a))},
f:function(a,b){if(a==null)J.aT(a)
throw H.c(H.bB(a,b))},
bB:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ad(!0,b,s,null)
u=J.aT(a)
if(!(b<0)){if(typeof u!=="number")return H.v(u)
t=b>=u}else t=!0
if(t)return P.K(b,a,s,null,u)
return P.d5(b,s)},
mw:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bs(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end",u)
return new P.ad(!0,b,"end",null)},
aL:function(a){return new P.ad(!0,a,null,null)},
ms:function(a){if(typeof a!=="number")throw H.c(H.aL(a))
return a},
c:function(a){var u
if(a==null)a=new P.d1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.kC})
u.name=""}else u.toString=H.kC
return u},
kC:function(){return J.a1(this.dartException)},
t:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aX(a))},
aq:function(a){var u,t,s,r,q,p
a=H.kB(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hU(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hV:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kh:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
k3:function(a,b){return new H.h1(a,b==null?null:b.method)},
js:function(a,b){var u=b==null,t=u?null:b.method
return new H.fn(a,t,u?null:b.receiver)},
au:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jd(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.b4(t,16)&8191)===10)switch(s){case 438:return f.$1(H.js(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.k3(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kF()
q=$.kG()
p=$.kH()
o=$.kI()
n=$.kL()
m=$.kM()
l=$.kK()
$.kJ()
k=$.kO()
j=$.kN()
i=r.a7(u)
if(i!=null)return f.$1(H.js(u,i))
else{i=q.a7(u)
if(i!=null){i.method="call"
return f.$1(H.js(u,i))}else{i=p.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=n.a7(u)
if(i==null){i=m.a7(u)
if(i==null){i=l.a7(u)
if(i==null){i=o.a7(u)
if(i==null){i=k.a7(u)
if(i==null){i=j.a7(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.k3(u,i))}}return f.$1(new H.i3(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.db()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ad(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.db()
return a},
jH:function(a){var u
if(a==null)return new H.e4(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e4(a)},
mA:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mJ:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.r("Unsupported number of arguments for wrapped closure"))},
bA:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mJ)
a.$identity=u
return u},
l6:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hx().constructor.prototype):Object.create(new H.bF(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ah
if(typeof t!=="number")return t.A()
$.ah=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jT(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.l2(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jT(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
l2:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mD,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jS:H.jf
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
l3:function(a,b,c,d){var u=H.jf
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jT:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l5(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.l3(t,!r,u,b)
if(t===0){r=$.ah
if(typeof r!=="number")return r.A()
$.ah=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bG
return new Function(r+H.d(q==null?$.bG=H.eF("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ah
if(typeof r!=="number")return r.A()
$.ah=r+1
o+=r
r="return function("+o+"){return this."
q=$.bG
return new Function(r+H.d(q==null?$.bG=H.eF("self"):q)+"."+H.d(u)+"("+o+");}")()},
l4:function(a,b,c,d){var u=H.jf,t=H.jS
switch(b?-1:a){case 0:throw H.c(H.ly("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l5:function(a,b){var u,t,s,r,q,p,o,n=$.bG
if(n==null)n=$.bG=H.eF("self")
u=$.jR
if(u==null)u=$.jR=H.eF("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l4(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ah
if(typeof u!=="number")return u.A()
$.ah=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ah
if(typeof u!=="number")return u.A()
$.ah=u+1
return new Function(n+u+"}")()},
jE:function(a,b,c,d,e,f,g){return H.l6(a,b,c,d,!!e,!!f,g)},
jf:function(a){return a.a},
jS:function(a){return a.c},
eF:function(a){var u,t,s,r=new H.bF("self","target","receiver","name"),q=J.jp(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mO:function(a,b){throw H.c(H.l1(a,H.cp(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.mO(a,b)},
my:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
l1:function(a,b){return new H.eG("CastError: "+P.jm(a)+": type '"+H.d(H.mo(a))+"' is not a subtype of type '"+b+"'")},
mo:function(a){var u,t=J.Q(a)
if(!!t.$ibH){u=H.my(t)
if(u!=null)return H.mP(u)
return"Closure"}return H.bZ(a)},
mU:function(a){throw H.c(new P.eQ(a))},
ly:function(a){return new H.hi(a)},
kw:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
co:function(a){if(a==null)return
return a.$ti},
ns:function(a,b,c){return H.jc(a["$a"+H.d(c)],H.co(b))},
mC:function(a,b,c,d){var u=H.jc(a["$a"+H.d(c)],H.co(b))
return u==null?null:u[d]},
jG:function(a,b,c){var u=H.jc(a["$a"+H.d(b)],H.co(a))
return u==null?null:u[c]},
at:function(a,b){var u=H.co(a)
return u==null?null:u[b]},
mP:function(a){return H.bd(a,null)},
bd:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cp(a[0].name)+H.kr(a,1,b)
if(typeof a=="function")return H.cp(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.lU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bd("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.A(p,a0[m])
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
for(n=H.mz(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bd(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kr:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.an("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bd(p,c)}return"<"+u.i(0)+">"},
jc:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nq:function(a,b,c){return a.apply(b,H.jc(J.Q(b)["$a"+H.d(c)],H.co(b)))},
nr:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mL:function(a){var u,t,s,r,q=$.kx.$1(a),p=$.j2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ku.$2(a,q)
if(q!=null){p=$.j2[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j8[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ja(u)
$.j2[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j8[q]=u
return u}if(s==="-"){r=H.ja(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.kz(a,u)
if(s==="*")throw H.c(P.ki(q))
if(v.leafTags[q]===true){r=H.ja(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.kz(a,u)},
kz:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jJ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ja:function(a){return J.jJ(a,!1,null,!!a.$iy)},
mM:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ja(u)
else return J.jJ(u,c,null,null)},
mH:function(){if(!0===$.jI)return
$.jI=!0
H.mI()},
mI:function(){var u,t,s,r,q,p,o,n
$.j2=Object.create(null)
$.j8=Object.create(null)
H.mG()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kA.$1(q)
if(p!=null){o=H.mM(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
mG:function(){var u,t,s,r,q,p,o=C.w()
o=H.bz(C.x,H.bz(C.y,H.bz(C.p,H.bz(C.p,H.bz(C.z,H.bz(C.A,H.bz(C.B(C.o),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.kx=new H.j5(r)
$.ku=new H.j6(q)
$.kA=new H.j7(p)},
bz:function(a,b){return a(b)||b},
lg:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.f9("Illegal RegExp pattern ("+String(p)+")",a))},
mR:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mx:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kB:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jM:function(a,b,c){var u=H.mS(a,b,c)
return u},
mS:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kB(b),'g'),H.mx(c))},
hU:function hU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h1:function h1(a,b){this.a=a
this.b=b},
fn:function fn(a,b,c){this.a=a
this.b=b
this.c=c},
i3:function i3(a){this.a=a},
jd:function jd(a){this.a=a},
e4:function e4(a){this.a=a
this.b=null},
bH:function bH(){},
hF:function hF(){},
hx:function hx(){},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eG:function eG(a){this.a=a},
hi:function hi(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fm:function fm(a){this.a=a},
fq:function fq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bq:function bq(a,b){this.a=a
this.$ti=b},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j5:function j5(a){this.a=a},
j6:function j6(a){this.a=a},
j7:function j7(a){this.a=a},
fl:function fl(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cl:function(a){return a},
ar:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bB(b,a))},
lT:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mw(a,b,c))
return b},
bW:function bW(){},
cX:function cX(){},
bV:function bV(){},
cY:function cY(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
cZ:function cZ(){},
fZ:function fZ(){},
cc:function cc(){},
cd:function cd(){},
ce:function ce(){},
cf:function cf(){},
mz:function(a){return J.jY(a?Object.keys(a):[],null)},
mV:function(a){return v.mangledGlobalNames[a]},
mN:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jJ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
j4:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jI==null){H.mH()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.ki("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jN()]
if(r!=null)return r
r=H.mL(a)
if(r!=null)return r
if(typeof a=="function")return C.J
u=Object.getPrototypeOf(a)
if(u==null)return C.r
if(u===Object.prototype)return C.r
if(typeof s=="function"){Object.defineProperty(s,$.jN(),{value:C.m,enumerable:false,writable:true,configurable:true})
return C.m}return C.m},
le:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.je(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.aE(a,0,4294967295,"length",null))
return J.jY(new Array(a),b)},
jY:function(a,b){return J.jp(H.b(a,[b]))},
jp:function(a){a.fixed$length=Array
return a},
lf:function(a,b){return J.ct(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cM.prototype
return J.cL.prototype}if(typeof a=="string")return J.b1.prototype
if(a==null)return J.cN.prototype
if(typeof a=="boolean")return J.fk.prototype
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j4(a)},
er:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j4(a)},
j3:function(a){if(a==null)return a
if(a.constructor==Array)return J.b0.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j4(a)},
mB:function(a){if(typeof a=="number")return J.bN.prototype
if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.bv.prototype
return a},
jF:function(a){if(typeof a=="string")return J.b1.prototype
if(a==null)return a
if(!(a instanceof P.X))return J.bv.prototype
return a},
es:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b2.prototype
return a}if(a instanceof P.X)return a
return J.j4(a)},
N:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).p(a,b)},
cs:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mK(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.er(a).h(a,b)},
kU:function(a,b,c){return J.es(a).f4(a,b,c)},
kV:function(a,b,c,d){return J.es(a).fm(a,b,c,d)},
ct:function(a,b){return J.mB(a).aG(a,b)},
eu:function(a,b){return J.j3(a).C(a,b)},
kW:function(a,b){return J.j3(a).H(a,b)},
kX:function(a){return J.es(a).gfq(a)},
bE:function(a){return J.Q(a).gI(a)},
aS:function(a){return J.j3(a).gO(a)},
aT:function(a){return J.er(a).gl(a)},
jP:function(a){return J.j3(a).h8(a)},
kY:function(a,b){return J.es(a).hc(a,b)},
kZ:function(a,b,c){return J.jF(a).b_(a,b,c)},
l_:function(a){return J.jF(a).hm(a)},
a1:function(a){return J.Q(a).i(a)},
a:function a(){},
fk:function fk(){},
cN:function cN(){},
cO:function cO(){},
h5:function h5(){},
bv:function bv(){},
b2:function b2(){},
b0:function b0(a){this.$ti=a},
jq:function jq(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bN:function bN(){},
cM:function cM(){},
cL:function cL(){},
b1:function b1(){}},P={
lH:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mp()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bA(new P.iq(s),1)).observe(u,{childList:true})
return new P.ip(s,u,t)}else if(self.setImmediate!=null)return P.mq()
return P.mr()},
lI:function(a){self.scheduleImmediate(H.bA(new P.ir(a),0))},
lJ:function(a){self.setImmediate(H.bA(new P.is(a),0))},
lK:function(a){P.jx(C.i,a)},
jx:function(a,b){var u=C.c.W(a.a,1000)
return P.lR(u<0?0:u,b)},
kg:function(a,b){var u=C.c.W(a.a,1000)
return P.lS(u<0?0:u,b)},
lR:function(a,b){var u=new P.ea()
u.dP(a,b)
return u},
lS:function(a,b){var u=new P.ea()
u.dQ(a,b)
return u},
no:function(a){return new P.bw(a,1)},
lN:function(){return C.O},
lO:function(a){return new P.bw(a,3)},
lX:function(a,b){return new P.iP(a,[b])},
mi:function(){var u,t
for(;u=$.by,u!=null;){$.cn=null
t=u.b
$.by=t
if(t==null)$.cm=null
u.a.$0()}},
mn:function(){$.jC=!0
try{P.mi()}finally{$.cn=null
$.jC=!1
if($.by!=null)$.jO().$1(P.kv())}},
ml:function(a){var u=new P.dw(a)
if($.by==null){$.by=$.cm=u
if(!$.jC)$.jO().$1(P.kv())}else $.cm=$.cm.b=u},
mm:function(a){var u,t,s=$.by
if(s==null){P.ml(a)
$.cn=$.cm
return}u=new P.dw(a)
t=$.cn
if(t==null){u.b=s
$.by=$.cn=u}else{u.b=t.b
$.cn=t.b=u
if(u.b==null)$.cm=u}},
kf:function(a,b){var u=$.ag
if(u===C.e)return P.jx(a,b)
return P.jx(a,u.fs(b))},
lE:function(a,b){var u=$.ag
if(u===C.e)return P.kg(a,b)
return P.kg(a,u.cJ(b,P.di))},
ks:function(a,b,c,d,e){var u={}
u.a=d
P.mm(new P.j0(u,e))},
mj:function(a,b,c,d){var u,t=$.ag
if(t===c)return d.$0()
$.ag=c
u=t
try{t=d.$0()
return t}finally{$.ag=u}},
mk:function(a,b,c,d,e){var u,t=$.ag
if(t===c)return d.$1(e)
$.ag=c
u=t
try{t=d.$1(e)
return t}finally{$.ag=u}},
iq:function iq(a){this.a=a},
ip:function ip(a,b,c){this.a=a
this.b=b
this.c=c},
ir:function ir(a){this.a=a},
is:function is(a){this.a=a},
ea:function ea(){this.c=0},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bw:function bw(a,b){this.a=a
this.b=b},
bx:function bx(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iP:function iP(a,b){this.a=a
this.$ti=b},
dw:function dw(a){this.a=a
this.b=null},
dd:function dd(){},
hA:function hA(){},
di:function di(){},
iW:function iW(){},
j0:function j0(a,b){this.a=a
this.b=b},
iF:function iF(){},
iG:function iG(a,b){this.a=a
this.b=b},
iH:function iH(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function(a,b){return new H.I([a,b])},
lh:function(a){return H.mA(a,new H.I([null,null]))},
bP:function(a){return new P.iC([a])},
jB:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lQ:function(a,b){var u=new P.dM(a,b)
u.c=a.e
return u},
lc:function(a,b,c){var u,t
if(P.jD(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.n])
$.a0.push(a)
try{P.lW(a,u)}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=P.kd(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jn:function(a,b,c){var u,t
if(P.jD(a))return b+"..."+c
u=new P.an(b)
$.a0.push(a)
try{t=u
t.a=P.kd(t.a,a,", ")}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
jD:function(a){var u,t
for(u=$.a0.length,t=0;t<u;++t)if(a===$.a0[t])return!0
return!1},
lW:function(a,b){var u,t,s,r,q,p,o,n=a.gO(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.q())return
u=H.d(n.gB(n))
b.push(u)
m+=u.length+2;++l}if(!n.q()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gB(n);++l
if(!n.q()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gB(n);++l
for(;n.q();r=q,q=p){p=n.gB(n);++l
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
k_:function(a,b){var u,t,s=P.bP(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
k0:function(a){var u,t={}
if(P.jD(a))return"{...}"
u=new P.an("")
try{$.a0.push(a)
u.a+="{"
t.a=!0
J.kW(a,new P.fw(t,u))
u.a+="}"}finally{if(0>=$.a0.length)return H.f($.a0,-1)
$.a0.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iC:function iC(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iD:function iD(a){this.a=a
this.c=this.b=null},
dM:function dM(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fi:function fi(){},
fs:function fs(){},
u:function u(){},
fv:function fv(){},
fw:function fw(a,b){this.a=a
this.b=b},
W:function W(){},
iJ:function iJ(){},
dN:function dN(){},
eI:function eI(){},
eL:function eL(){},
f_:function f_(){},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ff:function ff(a){this.a=a},
i7:function i7(){},
i8:function i8(){},
iU:function iU(a){this.b=0
this.c=a},
la:function(a){if(a instanceof H.bH)return a.i(0)
return"Instance of '"+H.d(H.bZ(a))+"'"},
li:function(a,b,c){var u,t,s=J.le(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jt:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aS(a);u.q();)t.push(u.gB(u))
if(b)return t
return J.jp(t)},
jw:function(a){var u,t=a.length,s=P.jv(0,null,t)
if(typeof s!=="number")return s.a0()
u=s<t
return H.lu(u?C.a.dv(a,0,s):a)},
lw:function(a){return new H.fl(a,H.lg(a,!1,!0,!1,!1,!1))},
kd:function(a,b,c){var u=J.aS(b)
if(!u.q())return a
if(c.length===0){do a+=H.d(u.gB(u))
while(u.q())}else{a+=H.d(u.gB(u))
for(;u.q();)a=a+c+H.d(u.gB(u))}return a},
kq:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.h){u=$.kT().b
u=u.test(b)}else u=!1
if(u)return b
t=C.D.fw(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.ju(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l7:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l8:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cC:function(a){if(a>=10)return""+a
return"0"+a},
jV:function(a){return new P.aY(1000*a)},
jm:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a1(a)
if(typeof a==="string")return JSON.stringify(a)
return P.la(a)},
l0:function(a){return new P.ad(!1,null,null,a)},
je:function(a,b,c){return new P.ad(!0,a,b,c)},
d5:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
aE:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
jv:function(a,b,c){var u
if(typeof a!=="number")return H.v(a)
if(0<=a){if(typeof c!=="number")return H.v(c)
u=a>c}else u=!0
if(u)throw H.c(P.aE(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.v(c)
u=b>c}else u=!0
if(u)throw H.c(P.aE(b,a,c,"end",null))
return b}return c},
k8:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.c(P.aE(a,0,null,b,null))},
K:function(a,b,c,d,e){var u=e==null?J.aT(b):e
return new P.fh(u,!0,a,c,"Index out of range")},
x:function(a){return new P.i5(a)},
ki:function(a){return new P.i2(a)},
kc:function(a){return new P.c0(a)},
aX:function(a){return new P.eK(a)},
r:function(a){return new P.dE(a)},
jL:function(a){H.mN(a)},
as:function as(){},
a9:function a9(a,b){this.a=a
this.b=b},
M:function M(){},
aY:function aY(a){this.a=a},
eW:function eW(){},
eX:function eX(){},
bj:function bj(){},
d1:function d1(){},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fh:function fh(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i5:function i5(a){this.a=a},
i2:function i2(a){this.a=a},
c0:function c0(a){this.a=a},
eK:function eK(a){this.a=a},
h4:function h4(){},
db:function db(){},
eQ:function eQ(a){this.a=a},
dE:function dE(a){this.a=a},
f9:function f9(a,b){this.a=a
this.b=b},
fb:function fb(){},
w:function w(){},
i:function i(){},
fj:function fj(){},
af:function af(){},
bQ:function bQ(){},
b6:function b6(){},
a7:function a7(){},
X:function X(){},
n:function n(){},
an:function an(a){this.a=a},
mv:function(a){var u,t=J.Q(a)
if(!!t.$ib_){u=t.gcN(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.ef(a.data,a.height,a.width)},
mu:function(a){if(a instanceof P.ef)return{data:a.a,height:a.b,width:a.c}
return a},
aM:function(a){var u,t,s,r,q
if(a==null)return
u=P.jZ(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mt:function(a){var u={}
a.H(0,new P.j1(u))
return u},
ef:function ef(a,b,c){this.a=a
this.b=b
this.c=c},
j1:function j1(a){this.a=a},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(){},
f7:function f7(){},
iB:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lP:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iE:function iE(){},
a5:function a5(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b3:function b3(){},
fp:function fp(){},
b7:function b7(){},
h2:function h2(){},
ha:function ha(){},
c_:function c_(){},
hB:function hB(){},
j:function j(){},
b9:function b9(){},
hT:function hT(){},
dK:function dK(){},
dL:function dL(){},
dV:function dV(){},
dW:function dW(){},
e6:function e6(){},
e7:function e7(){},
ed:function ed(){},
ee:function ee(){},
ez:function ez(){},
eA:function eA(){},
eB:function eB(a){this.a=a},
eC:function eC(){},
bf:function bf(){},
h3:function h3(){},
dx:function dx(){},
d7:function d7(){},
hw:function hw(){},
e2:function e2(){},
e3:function e3(){}},W={
jQ:function(){var u=document.createElement("a")
return u},
jh:function(){var u=document.createElement("canvas")
return u},
l9:function(a,b,c){var u=document.body,t=(u&&C.n).a6(u,a,b,c)
t.toString
u=new H.c9(new W.Y(t),new W.eZ(),[W.B])
return u.gaw(u)},
jk:function(a){return"wheel"},
bJ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.es(a)
t=u.gdi(a)
if(typeof t==="string")r=u.gdi(a)}catch(s){H.au(s)}return r},
iA:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ko:function(a,b,c,d){var u=W.iA(W.iA(W.iA(W.iA(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
T:function(a,b,c,d){var u=W.kt(new W.iy(c),W.h)
if(u!=null&&!0)J.kV(a,b,u,!1)
return new W.ix(a,b,u,!1)},
kn:function(a){var u=W.jQ(),t=window.location
u=new W.cb(new W.iI(u,t))
u.dK(a)
return u},
lL:function(a,b,c,d){return!0},
lM:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kp:function(){var u=P.n,t=P.k_(C.k,u),s=H.b(["TEMPLATE"],[u])
t=new W.iQ(t,P.bP(u),P.bP(u),P.bP(u),null)
t.dO(null,new H.fx(C.k,new W.iR(),[H.at(C.k,0),u]),s,null)
return t},
kt:function(a,b){var u=$.ag
if(u===C.e)return a
return u.cJ(a,b)},
o:function o(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
cw:function cw(){},
bg:function bg(){},
bh:function bh(){},
aU:function aU(){},
eM:function eM(){},
G:function G(){},
bI:function bI(){},
eN:function eN(){},
a8:function a8(){},
ai:function ai(){},
eO:function eO(){},
eP:function eP(){},
eS:function eS(){},
ae:function ae(){},
eT:function eT(){},
cE:function cE(){},
cF:function cF(){},
eU:function eU(){},
eV:function eV(){},
iu:function iu(a,b){this.a=a
this.b=b},
O:function O(){},
eZ:function eZ(){},
h:function h(){},
e:function e(){},
ax:function ax(){},
f3:function f3(){},
f4:function f4(){},
f8:function f8(){},
ay:function ay(){},
fe:function fe(){},
bL:function bL(){},
b_:function b_(){},
bM:function bM(){},
bp:function bp(){},
ft:function ft(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
aA:function aA(){},
fS:function fS(){},
al:function al(){},
Y:function Y(a){this.a=a},
B:function B(){},
d_:function d_(){},
aD:function aD(){},
h7:function h7(){},
hg:function hg(){},
hh:function hh(a){this.a=a},
hj:function hj(){},
aF:function aF(){},
ht:function ht(){},
aG:function aG(){},
hu:function hu(){},
aH:function aH(){},
hy:function hy(){},
hz:function hz(a){this.a=a},
ao:function ao(){},
de:function de(){},
hC:function hC(){},
hD:function hD(){},
c1:function c1(){},
aI:function aI(){},
ap:function ap(){},
hG:function hG(){},
hH:function hH(){},
hN:function hN(){},
aJ:function aJ(){},
bt:function bt(){},
hR:function hR(){},
hS:function hS(){},
ba:function ba(){},
i6:function i6(){},
il:function il(){},
bc:function bc(){},
ca:function ca(){},
iv:function iv(){},
dz:function dz(){},
iz:function iz(){},
dS:function dS(){},
iM:function iM(){},
iN:function iN(){},
it:function it(){},
iw:function iw(a){this.a=a},
ix:function ix(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iy:function iy(a){this.a=a},
cb:function cb(a){this.a=a},
J:function J(){},
d0:function d0(a){this.a=a},
h0:function h0(a){this.a=a},
h_:function h_(a,b,c){this.a=a
this.b=b
this.c=c},
e_:function e_(){},
iK:function iK(){},
iL:function iL(){},
iQ:function iQ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(){},
iO:function iO(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aC:function aC(){},
iI:function iI(a,b){this.a=a
this.b=b},
eg:function eg(a){this.a=a},
iV:function iV(a){this.a=a},
dy:function dy(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dO:function dO(){},
dP:function dP(){},
dQ:function dQ(){},
dR:function dR(){},
dT:function dT(){},
dU:function dU(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
cg:function cg(){},
ch:function ch(){},
e0:function e0(){},
e1:function e1(){},
e5:function e5(){},
e8:function e8(){},
e9:function e9(){},
ci:function ci(){},
cj:function cj(){},
eb:function eb(){},
ec:function ec(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){}},K={
L:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.r("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aN(a,0)
t=C.b.aN(b,0)
if(u>t){s=t
t=u
u=s}return new K.hb(u,t)},
q:function(a){var u=new K.hk()
u.dG(a)
return u},
av:function av(){},
cK:function cK(){},
b5:function b5(){},
a_:function a_(){this.a=null},
hb:function hb(a,b){this.a=a
this.b=b},
hk:function hk(){this.a=null}},L={
hP:function(){var u=new L.hO(),t=P.n
u.a=new H.I([t,L.dc])
u.b=new H.I([t,L.dk])
u.c=P.bP(t)
return u},
dc:function dc(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dj:function dj(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.b=a
this.c=null},
hO:function hO(){var _=this
_.d=_.c=_.b=_.a=null},
dm:function dm(a){this.b=a
this.a=this.c=null}},O={
ji:function(a){var u=new O.aV([a])
u.bi(a)
return u},
aV:function aV(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bT:function bT(){this.b=this.a=null},
cU:function cU(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fF:function fF(a,b){this.a=a
this.b=b},
fG:function fG(){},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(a,b){this.a=a
this.b=b},
fK:function fK(){},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fz:function fz(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
bS:function bS(){},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aj:function aj(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fC:function fC(){var _=this
_.e=_.d=_.c=_.b=null},
fD:function fD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fE:function fE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
df:function df(){}},E={
lx:function(a,b){var u=new E.hc(a)
u.dF(a,b)
return u},
lD:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibh)return E.ke(a,!0,!0,!0,!1)
u=W.jh()
t=u.style
t.width="100%"
t.height="100%"
s.gcL(a).n(0,u)
return E.ke(u,!0,!0,!0,!1)},
ke:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dh(),p=C.f.c4(a,"webgl2",P.lh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.r("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.lx(p,a)
u=new T.hK(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dq(a)
t=new X.fo()
t.c=new X.aa(!1,!1,!1)
t.d=P.bP(P.w)
u.b=t
t=new X.fT(u)
t.f=0
t.r=V.b8()
t.x=V.b8()
t.ch=t.Q=1
u.c=t
t=new X.fu(u)
t.r=0
t.x=V.b8()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hQ(u)
t.f=V.b8()
t.r=V.b8()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dd,P.X]])
u.z=t
s=document
t.push(W.T(s,"contextmenu",u.ger(),!1))
u.z.push(W.T(a,"focus",u.gey(),!1))
u.z.push(W.T(a,"blur",u.gel(),!1))
u.z.push(W.T(s,"keyup",u.geC(),!1))
u.z.push(W.T(s,"keydown",u.geA(),!1))
u.z.push(W.T(a,"mousedown",u.geG(),!1))
u.z.push(W.T(a,"mouseup",u.geK(),!1))
u.z.push(W.T(a,r,u.geI(),!1))
t=u.z
W.jk(a)
W.jk(a)
t.push(W.T(a,W.jk(a),u.geM(),!1))
u.z.push(W.T(s,r,u.geu(),!1))
u.z.push(W.T(s,"mouseup",u.gew(),!1))
u.z.push(W.T(s,"pointerlockchange",u.geO(),!1))
u.z.push(W.T(a,"touchstart",u.gf0(),!1))
u.z.push(W.T(a,"touchend",u.geX(),!1))
u.z.push(W.T(a,"touchmove",u.geZ(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a9(Date.now(),!1)
q.db=0
q.ct()
return q},
eE:function eE(){},
aZ:function aZ(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hc:function hc(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hd:function hd(a){this.a=a},
he:function he(a){this.a=a},
hf:function hf(a){this.a=a},
dh:function dh(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
hM:function hM(a){this.a=a},
ky:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.lz("Test 007"),a1=W.jh()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
u=[P.n]
a0.cE(H.b(["A test of the Material Lighting shader with bumpy 2D textures and ","a directional light. The lighting and bump is being applied to ","ambient, diffuse, and specular 2D texturing."],u))
a0.cE(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(c)
if(t==null)H.t(P.r("Failed to find an element with the identifier, testCanvas."))
s=E.lD(t,!0,!0,!0,!1)
r=new E.aZ()
r.a=""
r.b=!0
u=E.aZ
q=O.ji(u)
r.y=q
q.aZ(r.gfT(),r.gfW())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc7(0,b)
r.saV(b)
p=F.kb()
F.ck(p,b,b,1,1,1,0,0,1)
F.ck(p,b,b,1,1,0,1,0,3)
F.ck(p,b,b,1,1,0,0,1,2)
F.ck(p,b,b,1,1,-1,0,0,0)
F.ck(p,b,b,1,1,0,-1,0,0)
F.ck(p,b,b,1,1,0,0,-1,3)
p.aD()
r.sc7(0,p)
q=new U.bK()
q.bi(U.a3)
q.aZ(q.ged(),q.geT())
q.e=null
q.f=V.cW()
q.r=0
o=s.x
n=new U.ds()
m=U.jj()
m.sc3(0,!0)
m.sbW(6.283185307179586)
m.sbY(0)
m.sa1(0,0)
m.sbX(100)
m.sR(0)
m.sbJ(0.5)
n.b=m
l=n.gaA()
m.gt().n(0,l)
m=U.jj()
m.sc3(0,!0)
m.sbW(6.283185307179586)
m.sbY(0)
m.sa1(0,0)
m.sbX(100)
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
m=new D.z(a,j,k)
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
n.N(m)}n.aR(o)
q.n(0,n)
o=s.x
n=new U.dr()
m=U.jj()
m.sc3(0,!0)
m.sbW(6.283185307179586)
m.sbY(0)
m.sa1(0,0)
m.sbX(100)
m.sR(0)
m.sbJ(0.2)
n.b=m
m.gt().n(0,n.gaA())
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
m=new D.z(a,j,k)
m.b=!0
n.N(m)
n.aR(o)
q.n(0,n)
o=s.x
n=new U.dt()
n.c=0.01
n.e=n.d=0
k=new X.aa(!1,!1,!1)
n.b=k
m=new D.z(a,b,k)
m.b=!0
n.N(m)
n.aR(o)
q.n(0,n)
r.saV(q)
i=s.f.bV("../resources/ScrewColor.png")
h=new O.cU()
q=O.ji(V.az)
h.e=q
q.aZ(h.geh(),h.gej())
q=new O.aj(h,"emission")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
h.f=q
q=new O.aj(h,"ambient")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
h.r=q
q=new O.aj(h,"diffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
h.x=q
q=new O.aj(h,"invDiffuse")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
h.y=q
q=new O.fE(h,"specular")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
q.ch=100
h.z=q
q=new O.fA(h,"bump")
q.c=new A.U(!1,!1,!1)
h.Q=q
h.ch=null
q=new O.aj(h,"reflect")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
h.cx=q
q=new O.fD(h,"refract")
q.c=new A.U(!1,!1,!1)
q.f=new V.R(0,0,0)
q.ch=1
h.cy=q
q=new O.fz(h,"alpha")
q.c=new A.U(!1,!1,!1)
q.f=1
h.db=q
q=new D.cQ()
q.bi(D.Z)
q.e=H.b([],[D.eD])
q.f=H.b([],[D.bi])
q.r=H.b([],[D.h8])
q.x=H.b([],[D.hv])
q.z=q.y=null
q.c6(q.gef(),q.geR(),q.geV())
h.dx=q
o=new O.fC()
o.b=new V.aW(0,0,0,0)
o.c=1
o.d=10
o.e=!1
h.dy=o
o=q.y
q=o==null?q.y=D.H():o
q.n(0,h.gf6())
q=h.dx
o=q.z
q=o==null?q.z=D.H():o
q.n(0,h.gb1())
h.fr=null
q=h.dx
g=V.jz()
o=U.jU(V.k1(V.k6(),g,new V.C(0,0,-1)))
f=new V.R(1,1,1)
n=new D.bi()
n.c=new V.R(1,1,1)
n.a=V.lG()
n.d=V.jz()
n.e=V.lF()
j=n.b
n.b=o
o.gt().n(0,n.gdL())
o=new D.z("mover",j,n.b)
o.b=!0
n.ak(o)
if(!n.c.p(0,f)){j=n.c
n.c=f
o=new D.z("color",j,f)
o.b=!0
n.ak(o)}q.n(0,n)
q=h.r
q.saF(0,new V.R(0.2,0.2,0.2))
q=h.x
q.saF(0,new V.R(0.8,0.8,0.8))
h.r.sbc(i)
h.x.sbc(i)
h.Q.sbc(s.f.bV("../resources/ScrewBumpMap.png"))
h.z.saF(0,new V.R(1,1,1))
h.z.sbc(s.f.bV("../resources/ScrewSpecular.png"))
q=h.z
q.bA(new A.U(!0,q.c.b,!1))
q.cv(10)
q=new M.cG()
q.a=!0
u=O.ji(u)
q.e=u
u.aZ(q.gen(),q.gep())
q.y=q.x=q.r=q.f=null
e=X.lb(b)
d=new X.d2()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.saV(b)
u=d.c
if(!(Math.abs(u-1.0471975511965976)<$.A().a)){d.c=1.0471975511965976
u=new D.z("fov",u,1.0471975511965976)
u.b=!0
d.ay(u)}u=d.d
if(!(Math.abs(u-0.1)<$.A().a)){d.d=0.1
u=new D.z("near",u,0.1)
u.b=!0
d.ay(u)}u=d.e
if(!(Math.abs(u-2000)<$.A().a)){d.e=2000
u=new D.z("far",u,2000)
u.b=!0
d.ay(u)}u=q.b
if(u!==d){if(u!=null)u.gt().S(0,q.gaf())
j=q.b
q.b=d
d.gt().n(0,q.gaf())
u=new D.z("camera",j,q.b)
u.b=!0
q.al(u)}u=q.c
if(u!==e){if(u!=null)u.gt().S(0,q.gaf())
j=q.c
q.c=e
e.gt().n(0,q.gaf())
u=new D.z("target",j,q.c)
u.b=!0
q.al(u)}q.sdj(b)
q.sdj(h)
q.e.n(0,r)
q.b.saV(U.jU(V.ak(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
u=s.d
if(u!==q){if(u!=null)u.gt().S(0,s.gcc())
s.d=q
q.gt().n(0,s.gcc())
s.cd()}u=s.Q
if(u==null)u=s.Q=D.H()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.S]}]):q
u.push(new E.j9(a0,h))
V.mQ(s)},
j9:function j9(a,b){this.a=a
this.b=b}},Z={
jA:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cl(c)),35044)
a.bindBuffer(b,null)
return new Z.dv(b,u)},
ac:function(a){return new Z.aK(a)},
dv:function dv(a,b){this.a=a
this.b=b},
cx:function cx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
im:function im(a){this.a=a},
cy:function cy(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
aK:function aK(a){this.a=a}},D={
H:function(){var u=new D.bk()
u.d=0
return u},
eH:function eH(){},
bk:function bk(){var _=this
_.d=_.c=_.b=_.a=null},
f1:function f1(a){this.a=a},
f2:function f2(a){this.a=a},
S:function S(){this.b=null},
bn:function bn(){this.b=null},
bo:function bo(){this.b=null},
z:function z(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eD:function eD(){},
bi:function bi(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
Z:function Z(){},
cQ:function cQ(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h8:function h8(){},
hv:function hv(){}},X={cz:function cz(a,b){this.a=a
this.b=b},cP:function cP(a,b){this.a=a
this.b=b},fo:function fo(){var _=this
_.d=_.c=_.b=_.a=null},cS:function cS(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fu:function fu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},aa:function aa(a,b,c){this.a=a
this.b=b
this.c=c},aB:function aB(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fT:function fT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bU:function bU(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h9:function h9(){},dl:function dl(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hQ:function hQ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dq:function dq(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lb:function(a){var u=new X.fa(),t=new V.aW(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.ka
if(t==null){t=V.k9(0,0,1,1)
$.ka=t}u.r=t
return u},
jg:function jg(){},
fa:function fa(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d2:function d2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hE:function hE(){}},V={
mW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.dn(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.b.a8("null",c)
return C.b.a8(C.d.dk(Math.abs(a-0)<$.A().a?0:a,b),c+b+1)},
bC:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.a8(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jK:function(a){return C.d.hj(Math.pow(2,C.I.bS(Math.log(H.ms(a))/Math.log(2))))},
cW:function(){var u=$.k2
return u==null?$.k2=V.ak(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ak:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
k1:function(a,b,c){var u=c.v(0,Math.sqrt(c.G(c))),t=b.aS(u),s=t.v(0,Math.sqrt(t.G(t))),r=u.aS(s),q=new V.C(a.a,a.b,a.c),p=s.P(0).G(q),o=r.P(0).G(q),n=u.P(0).G(q)
return V.ak(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b8:function(){var u=$.k5
return u==null?$.k5=new V.ab(0,0):u},
k6:function(){var u=$.am
return u==null?$.am=new V.a4(0,0,0):u},
k9:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d6(a,b,c,d)},
du:function(){var u=$.kl
return u==null?$.kl=new V.C(0,0,0):u},
lF:function(){var u=$.i9
return u==null?$.i9=new V.C(-1,0,0):u},
jz:function(){var u=$.ia
return u==null?$.ia=new V.C(0,1,0):u},
lG:function(){var u=$.ib
return u==null?$.ib=new V.C(0,0,1):u},
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f0:function f0(a){this.a=a},
cV:function cV(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
az:function az(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d6:function d6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
E:function E(a,b){this.a=a
this.b=b},
C:function C(a,b,c){this.a=a
this.b=b
this.c=c},
mQ:function(a){P.lE(C.F,new V.jb(a))},
lz:function(a){var u=new V.hp()
u.dI(a,!0)
return u},
cA:function cA(){},
jb:function jb(a){this.a=a},
eR:function eR(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fc:function fc(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fd:function fd(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h6:function h6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hp:function hp(){this.b=this.a=null},
hr:function hr(a){this.a=a},
hq:function hq(a){this.a=a},
hs:function hs(a){this.a=a}},U={
jj:function(){var u=new U.eJ()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
jU:function(a){var u=new U.cB()
u.a=a
return u},
eJ:function eJ(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){this.b=this.a=null},
bK:function bK(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a3:function a3(){},
dr:function dr(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dt:function dt(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cG:function cG(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lk:function(a,b){var u=a.aT,t=new A.fy(b,u)
t.dH(b,u)
t.dE(a,b)
return t},
ll:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+a9.gad(a9)+b0.gad(b0)+b1.gad(b1)+"_"
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
d=$.aQ()
if(j){u=$.aP()
d=new Z.aK(d.a|u.a)}if(i){u=$.aO()
d=new Z.aK(d.a|u.a)}if(h){u=$.aR()
d=new Z.aK(d.a|u.a)}if(g){u=$.aN()
d=new Z.aK(d.a|u.a)}return new A.fB(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
iZ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
j_:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.iZ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.et(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
m1:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iZ(b,t,"emission")
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
lY:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.j_(b,t,"ambient")
b.a+="\n"},
m_:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.j_(b,t,"diffuse")
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
m2:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.j_(b,t,"invDiffuse")
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
m8:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.j_(b,t,"specular")
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
m4:function(a,b){var u,t,s
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
m6:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iZ(b,t,"reflect")
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
m7:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iZ(b,t,"refract")
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
lZ:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.et(t)
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
if(typeof u!=="number")return u.a9()
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
m0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.et(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a9()
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
m5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.et(t)
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
if(typeof u!=="number")return u.a9()
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
m9:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.et(t)
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
if(typeof u!=="number")return u.a9()
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
m3:function(a,b){var u,t
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
ma:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.an("")
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
A.m1(a,j)
A.lY(a,j)
A.m_(a,j)
A.m2(a,j)
A.m8(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.m6(a,j)
A.m7(a,j)}A.m4(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.lZ(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.m0(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.m5(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.m9(a,q[o],j)
A.m3(a,j)}q=j.a+="// === Main ===\n"
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
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.ae(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
mb:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aH+"];\n"
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
md:function(a,b){var u
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
mc:function(a,b){var u
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
mf:function(a,b){var u,t
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
mg:function(a,b){var u,t
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
me:function(a,b){var u
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
mh:function(a,b){var u
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
et:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.ae(a,1)},
jy:function(a,b,c,d,e){var u=new A.hW(a,c,e)
u.f=d
P.li(d,0,P.w)
return u},
cu:function cu(a,b,c){this.a=a
this.b=b
this.c=c},
ey:function ey(a){this.a=a},
U:function U(a,b,c){this.a=a
this.b=b
this.c=c},
fy:function fy(a,b){var _=this
_.hx=_.cQ=_.b7=_.aT=_.aH=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hF=_.hE=_.hD=_.bR=_.bQ=_.bP=_.bO=_.bN=_.bM=_.bL=_.bK=_.hC=_.d1=_.d0=_.hB=_.d_=_.cZ=_.cY=_.hA=_.cX=_.cW=_.cV=_.hz=_.cU=_.cT=_.hy=_.cS=_.cR=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cv:function cv(a,b){this.a=a
this.b=b},
cD:function cD(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
da:function da(a,b){this.a=a
this.b=b},
fB:function fB(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aH=b3
_.aT=b4
_.b7=b5},
c3:function c3(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c4:function c4(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c6:function c6(a,b,c,d,e,f,g,h,i,j){var _=this
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
c7:function c7(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d8:function d8(){},
dn:function dn(){},
i0:function i0(a){this.a=a},
bb:function bb(a,b,c){this.a=a
this.c=b
this.d=c},
hY:function hY(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
P:function P(a,b,c){this.a=a
this.c=b
this.d=c},
hX:function hX(a,b,c){this.a=a
this.c=b
this.d=c},
D:function D(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
c5:function c5(a,b,c){this.a=a
this.c=b
this.d=c},
a6:function a6(a,b,c){this.a=a
this.c=b
this.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
bu:function bu(a,b,c){this.a=a
this.c=b
this.d=c}},F={
iY:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
ck:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.C(h,g+a1,f+a2)
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
j.d=i}m=F.iY(i)
l=F.iY(h)
k=F.mT(d,a0,new F.iX(j,F.iY(g),F.iY(f),l,m,c),b)
if(k!=null)a.fS(k)},
mT:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=F.kb()
t=H.b([],[F.c8])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
o=q.cD(new V.aW(p,0,0,1),new V.ab(r,1))
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
o=k.cD(new V.aW(j,i,h,1),new V.ab(r,m))
c.$3(o,r,n)
t.push(o.bI(d))}}u.d.fn(a+1,b+1,t)
return u},
cH:function(a,b,c){var u=new F.bl(),t=a.a
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
kb:function(){var u=new F.hl(),t=new F.ic(u)
t.b=!1
t.c=H.b([],[F.c8])
u.a=t
t=new F.ho(u)
t.b=H.b([],[F.bX])
u.b=t
t=new F.hn(u)
t.b=H.b([],[F.bO])
u.c=t
t=new F.hm(u)
t.b=H.b([],[F.bl])
u.d=t
u.e=null
return u},
km:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.c8(),r=new F.ii()
r.b=H.b([],[F.bX])
s.b=r
r=new F.ih()
u=[F.bO]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.id()
u=[F.bl]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kP()
s.e=0
r=$.aQ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aP().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.aR().a)!==0?f:t
s.z=(u&$.be().a)!==0?g:t
s.Q=(u&$.kQ().a)!==0?c:t
s.ch=(u&$.bD().a)!==0?i:0
s.cx=(u&$.aN().a)!==0?a:t
return s},
iX:function iX(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bl:function bl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bO:function bO(){this.b=this.a=null},
bX:function bX(){this.a=null},
hl:function hl(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hm:function hm(a){this.a=a
this.b=null},
hn:function hn(a){this.a=a
this.b=null},
ho:function ho(a){this.a=a
this.b=null},
c8:function c8(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
ic:function ic(a){this.a=a
this.c=this.b=null},
id:function id(){this.d=this.c=this.b=null},
ie:function ie(a,b){this.a=a
this.b=b},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(){this.c=this.b=null},
ii:function ii(){this.b=null}},T={dg:function dg(){},hI:function hI(){},hJ:function hJ(){var _=this
_.y=_.d=_.c=_.b=_.a=null},hK:function hK(a){var _=this
_.a=a
_.e=_.d=_.b=null},hL:function hL(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jr.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gI:function(a){return H.bY(a)},
i:function(a){return"Instance of '"+H.d(H.bZ(a))+"'"}}
J.fk.prototype={
i:function(a){return String(a)},
gI:function(a){return a?519018:218159},
$ias:1}
J.cN.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gI:function(a){return 0}}
J.cO.prototype={
gI:function(a){return 0},
i:function(a){return String(a)}}
J.h5.prototype={}
J.bv.prototype={}
J.b2.prototype={
i:function(a){var u=a[$.kE()]
if(u==null)return this.dB(a)
return"JavaScript function for "+H.d(J.a1(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b0.prototype={
h9:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.d5(b,null))
return a.splice(b,1)[0]},
S:function(a,b){var u
if(!!a.fixed$length)H.t(P.x("remove"))
for(u=0;u<a.length;++u)if(J.N(a[u],b)){a.splice(u,1)
return!0}return!1},
a5:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aX(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
fQ:function(a){return this.k(a,"")},
fM:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aX(a))}throw H.c(H.jo())},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
dv:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.aE(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.aE(c,b,u,"end",null))
if(b===c)return H.b([],[H.at(a,0)])
return H.b(a.slice(b,c),[H.at(a,0)])},
gb9:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.jo())},
cF:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aX(a))}return!1},
aM:function(a,b){if(!!a.immutable$list)H.t(P.x("sort"))
H.lC(a,b==null?J.lV():b)},
du:function(a){return this.aM(a,null)},
K:function(a,b){var u
for(u=0;u<a.length;++u)if(J.N(a[u],b))return!0
return!1},
i:function(a){return P.jn(a,"[","]")},
gO:function(a){return new J.a2(a,a.length)},
gI:function(a){return H.bY(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.je(b,u,null))
if(b<0)throw H.c(P.aE(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bB(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.t(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bB(a,b))
a[b]=c},
$ip:1,
$ii:1}
J.jq.prototype={}
J.a2.prototype={
gB:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bN.prototype={
aG:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aL(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb8(b)
if(this.gb8(a)===u)return 0
if(this.gb8(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb8:function(a){return a===0?1/a<0:a<0},
hj:function(a){var u
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
dk:function(a,b){var u
if(b>20)throw H.c(P.aE(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb8(a))return"-"+u
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
dn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dD:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cw(a,b)},
W:function(a,b){return(a|0)===a?a/b|0:this.cw(a,b)},
cw:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
b4:function(a,b){var u
if(a>0)u=this.ff(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
ff:function(a,b){return b>31?0:a>>>b},
$iM:1,
$ia7:1}
J.cM.prototype={$iw:1}
J.cL.prototype={}
J.b1.prototype={
bH:function(a,b){if(b<0)throw H.c(H.bB(a,b))
if(b>=a.length)H.t(H.bB(a,b))
return a.charCodeAt(b)},
aN:function(a,b){if(b>=a.length)throw H.c(H.bB(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.c(P.je(b,null,null))
return a+b},
bg:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
b_:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.d5(b,null))
if(b>c)throw H.c(P.d5(b,null))
if(c>a.length)throw H.c(P.d5(c,null))
return a.substring(b,c)},
ae:function(a,b){return this.b_(a,b,null)},
hm:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.C)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a8:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
aG:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aL(b))
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
h:function(a,b){return C.b.bH(this.a,b)},
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ai:function(){return[P.w]}}
H.p.prototype={}
H.cR.prototype={
gO:function(a){return new H.b4(this,this.gl(this))},
bf:function(a,b){return this.dA(0,b)}}
H.b4.prototype={
gB:function(a){return this.d},
q:function(){var u,t=this,s=t.a,r=J.er(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aX(s))
u=t.c
if(typeof q!=="number")return H.v(q)
if(u>=q){t.d=null
return!1}t.d=r.C(s,u);++t.c
return!0}}
H.bR.prototype={
gO:function(a){return new H.cT(J.aS(this.a),this.b)},
gl:function(a){return J.aT(this.a)},
C:function(a,b){return this.b.$1(J.eu(this.a,b))},
$ai:function(a,b){return[b]}}
H.eY.prototype={$ip:1,
$ap:function(a,b){return[b]}}
H.cT.prototype={
q:function(){var u=this,t=u.b
if(t.q()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.fx.prototype={
gl:function(a){return J.aT(this.a)},
C:function(a,b){return this.b.$1(J.eu(this.a,b))},
$ap:function(a,b){return[b]},
$acR:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.c9.prototype={
gO:function(a){return new H.io(J.aS(this.a),this.b)}}
H.io.prototype={
q:function(){var u,t
for(u=this.a,t=this.b;u.q();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.cI.prototype={}
H.i4.prototype={
m:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dp.prototype={}
H.hU.prototype={
a7:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h1.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fn.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.i3.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jd.prototype={
$1:function(a){if(!!J.Q(a).$ibj)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:7}
H.e4.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bH.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cp(t==null?"unknown":t)+"'"},
ghq:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hF.prototype={}
H.hx.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cp(u)+"'"}}
H.bF.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bF))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gI:function(a){var u,t=this.c
if(t==null)u=H.bY(this.a)
else u=typeof t!=="object"?J.bE(t):H.bY(t)
return(u^H.bY(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bZ(u))+"'")}}
H.eG.prototype={
i:function(a){return this.a}}
H.hi.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
gZ:function(a){return new H.bq(this,[H.at(this,0)])},
ghp:function(a){var u=this,t=H.at(u,0)
return H.lj(new H.bq(u,[t]),new H.fm(u),t,H.at(u,1))},
fv:function(a,b){var u=this.b
if(u==null)return!1
return this.e_(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b2(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b2(r,b)
s=t==null?null:t.b
return s}else return q.fP(b)},
fP:function(a){var u,t,s=this.d
if(s==null)return
u=this.cp(s,J.bE(a)&0x3ffffff)
t=this.d2(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.cg(u==null?o.b=o.bx():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.cg(t==null?o.c=o.bx():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.bx()
r=J.bE(b)&0x3ffffff
q=o.cp(s,r)
if(q==null)o.bB(s,r,[o.by(b,c)])
else{p=o.d2(q,b)
if(p>=0)q[p].b=c
else q.push(o.by(b,c))}}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aX(u))
t=t.c}},
cg:function(a,b,c){var u=this.b2(a,b)
if(u==null)this.bB(a,b,this.by(b,c))
else u.b=c},
ea:function(){this.r=this.r+1&67108863},
by:function(a,b){var u,t=this,s=new H.fq(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.ea()
return s},
d2:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1},
i:function(a){return P.k0(this)},
b2:function(a,b){return a[b]},
cp:function(a,b){return a[b]},
bB:function(a,b,c){a[b]=c},
e3:function(a,b){delete a[b]},
e_:function(a,b){return this.b2(a,b)!=null},
bx:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bB(t,u,t)
this.e3(t,u)
return t}}
H.fm.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.at(u,1),args:[H.at(u,0)]}}}
H.fq.prototype={}
H.bq.prototype={
gl:function(a){return this.a.a},
gO:function(a){var u=this.a,t=new H.fr(u,u.r)
t.c=u.e
return t}}
H.fr.prototype={
gB:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.j5.prototype={
$1:function(a){return this.a(a)},
$S:7}
H.j6.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j7.prototype={
$1:function(a){return this.a(a)}}
H.fl.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bW.prototype={}
H.cX.prototype={
gl:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.bV.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.M]},
$au:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]}}
H.cY.prototype={
m:function(a,b,c){H.ar(b,a,a.length)
a[b]=c},
$ip:1,
$ap:function(){return[P.w]},
$au:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]}}
H.fU.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fW.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fY.prototype={
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.cZ.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.fZ.prototype={
gl:function(a){return a.length},
h:function(a,b){H.ar(b,a,a.length)
return a[b]}}
H.cc.prototype={}
H.cd.prototype={}
H.ce.prototype={}
H.cf.prototype={}
P.iq.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.ip.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ir.prototype={
$0:function(){this.a.$0()}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.ea.prototype={
dP:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bA(new P.iT(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
dQ:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bA(new P.iS(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idi:1}
P.iT.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iS.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dD(u,q)}s.c=r
t.d.$1(s)}}
P.bw.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bx.prototype={
gB:function(a){var u=this.c
if(u==null)return this.b
return u.gB(u)},
q:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.q())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bw){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aS(u)
if(!!r.$ibx){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iP.prototype={
gO:function(a){return new P.bx(this.a())}}
P.dw.prototype={}
P.dd.prototype={}
P.hA.prototype={}
P.di.prototype={}
P.iW.prototype={}
P.j0.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d1():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iF.prototype={
he:function(a){var u,t,s,r=null
try{if(C.e===$.ag){a.$0()
return}P.mj(r,r,this,a)}catch(s){u=H.au(s)
t=H.jH(s)
P.ks(r,r,this,u,t)}},
hf:function(a,b){var u,t,s,r=null
try{if(C.e===$.ag){a.$1(b)
return}P.mk(r,r,this,a,b)}catch(s){u=H.au(s)
t=H.jH(s)
P.ks(r,r,this,u,t)}},
hg:function(a,b){return this.hf(a,b,null)},
fs:function(a){return new P.iG(this,a)},
cJ:function(a,b){return new P.iH(this,a,b)}}
P.iG.prototype={
$0:function(){return this.a.he(this.b)}}
P.iH.prototype={
$1:function(a){return this.a.hg(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iC.prototype={
gO:function(a){var u=new P.dM(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
K:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dY(b)
return t}},
dY:function(a){var u=this.d
if(u==null)return!1
return this.bo(this.co(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ci(u==null?s.b=P.jB():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ci(t==null?s.c=P.jB():t,b)}else return s.dS(0,b)},
dS:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jB()
u=s.ck(b)
t=r[u]
if(t==null)r[u]=[s.bl(b)]
else{if(s.bo(t,b)>=0)return!1
t.push(s.bl(b))}return!0},
S:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.f3(this.c,b)
else return this.f2(0,b)},
f2:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.co(r,b)
t=s.bo(u,b)
if(t<0)return!1
s.cA(u.splice(t,1)[0])
return!0},
ci:function(a,b){if(a[b]!=null)return!1
a[b]=this.bl(b)
return!0},
f3:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cA(u)
delete a[b]
return!0},
cj:function(){this.r=1073741823&this.r+1},
bl:function(a){var u,t=this,s=new P.iD(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cj()
return s},
cA:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cj()},
ck:function(a){return J.bE(a)&1073741823},
co:function(a,b){return a[this.ck(b)]},
bo:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.N(a[t].a,b))return t
return-1}}
P.iD.prototype={}
P.dM.prototype={
gB:function(a){return this.d},
q:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aX(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fi.prototype={}
P.fs.prototype={$ip:1,$ii:1}
P.u.prototype={
gO:function(a){return new H.b4(a,this.gl(a))},
C:function(a,b){return this.h(a,b)},
hl:function(a,b){var u,t,s=this,r=H.b([],[H.mC(s,a,"u",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.v(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
hk:function(a){return this.hl(a,!0)},
i:function(a){return P.jn(a,"[","]")}}
P.fv.prototype={}
P.fw.prototype={
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
for(u=J.aS(this.gZ(a));u.q();){t=u.gB(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aT(this.gZ(a))},
i:function(a){return P.k0(a)}}
P.iJ.prototype={
a5:function(a,b){var u
for(u=J.aS(b);u.q();)this.n(0,u.gB(u))},
i:function(a){return P.jn(this,"{","}")},
C:function(a,b){var u,t,s
P.k8(b,"index")
for(u=P.lQ(this,this.r),t=0;u.q();){s=u.d
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
$ip:1,
$ii:1}
P.dN.prototype={}
P.eI.prototype={}
P.eL.prototype={}
P.f_.prototype={}
P.fg.prototype={
i:function(a){return this.a}}
P.ff.prototype={
e0:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(r>b)q.a+=C.b.b_(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kZ(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.i7.prototype={}
P.i8.prototype={
fw:function(a){var u,t,s,r=P.jv(0,null,a.length)
if(typeof r!=="number")return r.F()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iU(t)
if(s.e5(a,0,r)!==r)s.cB(C.b.bH(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lT(0,s.b,t.length)))}}
P.iU.prototype={
cB:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e5:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bH(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aN(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cB(r,C.b.aN(a,p)))s=p}else if(r<=2047){q=n.b
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
P.a9.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aG:function(a,b){return C.c.aG(this.a,b.a)},
gI:function(a){var u=this.a
return(u^C.c.b4(u,30))&1073741823},
i:function(a){var u=this,t=P.l7(H.lt(u)),s=P.cC(H.lr(u)),r=P.cC(H.ln(u)),q=P.cC(H.lo(u)),p=P.cC(H.lq(u)),o=P.cC(H.ls(u)),n=P.l8(H.lp(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.aY.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gI:function(a){return C.c.gI(this.a)},
aG:function(a,b){return C.c.aG(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eX(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.c.W(q,6e7)%60)
t=r.$1(C.c.W(q,1e6)%60)
s=new P.eW().$1(q%1e6)
return""+C.c.W(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.eW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bj.prototype={}
P.d1.prototype={
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
r=P.jm(q.b)
return t+s+": "+r}}
P.bs.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.fh.prototype={
gbn:function(){return"RangeError"},
gbm:function(){var u,t=this.b
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.i5.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i2.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.c0.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eK.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jm(u)+"."}}
P.h4.prototype={
i:function(a){return"Out of Memory"},
$ibj:1}
P.db.prototype={
i:function(a){return"Stack Overflow"},
$ibj:1}
P.eQ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dE.prototype={
i:function(a){return"Exception: "+this.a}}
P.f9.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.b_(s,0,75)+"...":s
return t+"\n"+r}}
P.fb.prototype={}
P.w.prototype={}
P.i.prototype={
bf:function(a,b){return new H.c9(this,b,[H.jG(this,"i",0)])},
gl:function(a){var u,t=this.gO(this)
for(u=0;t.q();)++u
return u},
gaw:function(a){var u,t=this.gO(this)
if(!t.q())throw H.c(H.jo())
u=t.gB(t)
if(t.q())throw H.c(H.ld())
return u},
C:function(a,b){var u,t,s
P.k8(b,"index")
for(u=this.gO(this),t=0;u.q();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.K(b,this,"index",null,t))},
i:function(a){return P.lc(this,"(",")")}}
P.fj.prototype={}
P.af.prototype={$ip:1,$ii:1}
P.bQ.prototype={}
P.b6.prototype={
gI:function(a){return P.X.prototype.gI.call(this,this)},
i:function(a){return"null"}}
P.a7.prototype={}
P.X.prototype={constructor:P.X,$iX:1,
p:function(a,b){return this===b},
gI:function(a){return H.bY(this)},
i:function(a){return"Instance of '"+H.d(H.bZ(this))+"'"},
toString:function(){return this.i(this)}}
P.n.prototype={}
P.an.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.o.prototype={}
W.ev.prototype={
gl:function(a){return a.length}}
W.ew.prototype={
i:function(a){return String(a)}}
W.ex.prototype={
i:function(a){return String(a)}}
W.cw.prototype={}
W.bg.prototype={$ibg:1}
W.bh.prototype={
c4:function(a,b,c){if(c!=null)return a.getContext(b,P.mt(c))
return a.getContext(b)},
dm:function(a,b){return this.c4(a,b,null)},
$ibh:1}
W.aU.prototype={
gl:function(a){return a.length}}
W.eM.prototype={
gl:function(a){return a.length}}
W.G.prototype={$iG:1}
W.bI.prototype={
gl:function(a){return a.length}}
W.eN.prototype={}
W.a8.prototype={}
W.ai.prototype={}
W.eO.prototype={
gl:function(a){return a.length}}
W.eP.prototype={
gl:function(a){return a.length}}
W.eS.prototype={
gl:function(a){return a.length}}
W.ae.prototype={$iae:1}
W.eT.prototype={
i:function(a){return String(a)}}
W.cE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[[P.a5,P.a7]]},
$iy:1,
$ay:function(){return[[P.a5,P.a7]]},
$au:function(){return[[P.a5,P.a7]]},
$ii:1,
$ai:function(){return[[P.a5,P.a7]]}}
W.cF.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gav(a))+" x "+H.d(this.gap(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia5&&a.left===u.gba(b)&&a.top===u.gbd(b)&&this.gav(a)===u.gav(b)&&this.gap(a)===u.gap(b)},
gI:function(a){return W.ko(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(this.gav(a)),C.d.gI(this.gap(a)))},
gcK:function(a){return a.bottom},
gap:function(a){return a.height},
gba:function(a){return a.left},
gc0:function(a){return a.right},
gbd:function(a){return a.top},
gav:function(a){return a.width},
$ia5:1,
$aa5:function(){return[P.a7]}}
W.eU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[P.n]},
$iy:1,
$ay:function(){return[P.n]},
$au:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]}}
W.eV.prototype={
gl:function(a){return a.length}}
W.iu.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gO:function(a){var u=this.hk(this)
return new J.a2(u,u.length)},
$ap:function(){return[W.O]},
$au:function(){return[W.O]},
$ai:function(){return[W.O]}}
W.O.prototype={
gfq:function(a){return new W.iw(a)},
gcL:function(a){return new W.iu(a,a.children)},
gcM:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.a0()
if(s<0)s=-s*0
if(typeof r!=="number")return r.a0()
if(r<0)r=-r*0
return new P.a5(u,t,s,r,[P.a7])},
i:function(a){return a.localName},
a6:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jX
if(u==null){u=H.b([],[W.aC])
t=new W.d0(u)
u.push(W.kn(null))
u.push(W.kp())
$.jX=t
d=t}else d=u
u=$.jW
if(u==null){u=new W.eg(d)
$.jW=u
c=u}else{u.a=d
c=u}}if($.aw==null){u=document
t=u.implementation.createHTMLDocument("")
$.aw=t
$.jl=t.createRange()
s=$.aw.createElement("base")
s.href=u.baseURI
$.aw.head.appendChild(s)}u=$.aw
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aw
if(!!this.$ibg)r=u.body
else{r=u.createElement(a.tagName)
$.aw.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.K(C.L,a.tagName)){$.jl.selectNodeContents(r)
q=$.jl.createContextualFragment(b)}else{r.innerHTML=b
q=$.aw.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aw.body
if(r==null?u!=null:r!==u)J.jP(r)
c.c5(q)
document.adoptNode(q)
return q},
fA:function(a,b,c){return this.a6(a,b,c,null)},
dr:function(a,b){a.textContent=null
a.appendChild(this.a6(a,b,null,null))},
$iO:1,
gdi:function(a){return a.tagName}}
W.eZ.prototype={
$1:function(a){return!!J.Q(a).$iO}}
W.h.prototype={$ih:1}
W.e.prototype={
fm:function(a,b,c,d){if(c!=null)this.dT(a,b,c,!1)},
dT:function(a,b,c,d){return a.addEventListener(b,H.bA(c,1),!1)}}
W.ax.prototype={$iax:1}
W.f3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ax]},
$iy:1,
$ay:function(){return[W.ax]},
$au:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]}}
W.f4.prototype={
gl:function(a){return a.length}}
W.f8.prototype={
gl:function(a){return a.length}}
W.ay.prototype={$iay:1}
W.fe.prototype={
gl:function(a){return a.length}}
W.bL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$iy:1,
$ay:function(){return[W.B]},
$au:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]}}
W.b_.prototype={$ib_:1,
gcN:function(a){return a.data}}
W.bM.prototype={$ibM:1}
W.bp.prototype={$ibp:1}
W.ft.prototype={
i:function(a){return String(a)}}
W.fN.prototype={
gl:function(a){return a.length}}
W.fO.prototype={
h:function(a,b){return P.aM(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.H(a,new W.fP(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
W.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fQ.prototype={
h:function(a,b){return P.aM(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.H(a,new W.fR(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.fS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aA]},
$iy:1,
$ay:function(){return[W.aA]},
$au:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]}}
W.al.prototype={$ial:1}
W.Y.prototype={
gaw:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.kc("No elements"))
if(t>1)throw H.c(P.kc("More than one element"))
return u.firstChild},
a5:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gO:function(a){var u=this.a.childNodes
return new W.cJ(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$ap:function(){return[W.B]},
$au:function(){return[W.B]},
$ai:function(){return[W.B]}}
W.B.prototype={
h8:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
hc:function(a,b){var u,t
try{u=a.parentNode
J.kU(u,b,a)}catch(t){H.au(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dz(a):u},
f4:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.d_.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$iy:1,
$ay:function(){return[W.B]},
$au:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]}}
W.aD.prototype={$iaD:1,
gl:function(a){return a.length}}
W.h7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aD]},
$iy:1,
$ay:function(){return[W.aD]},
$au:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]}}
W.hg.prototype={
h:function(a,b){return P.aM(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.H(a,new W.hh(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
W.hh.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hj.prototype={
gl:function(a){return a.length}}
W.aF.prototype={$iaF:1}
W.ht.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aF]},
$iy:1,
$ay:function(){return[W.aF]},
$au:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]}}
W.aG.prototype={$iaG:1}
W.hu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
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
W.hy.prototype={
h:function(a,b){return a.getItem(b)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gZ:function(a){var u=H.b([],[P.n])
this.H(a,new W.hz(u))
return u},
gl:function(a){return a.length},
$aW:function(){return[P.n,P.n]}}
W.hz.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ao.prototype={$iao:1}
W.de.prototype={
a6:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bh(a,b,c,d)
u=W.l9("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.Y(t).a5(0,new W.Y(u))
return t}}
W.hC.prototype={
a6:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bh(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a6(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gaw(u)
s.toString
u=new W.Y(s)
r=u.gaw(u)
t.toString
r.toString
new W.Y(t).a5(0,new W.Y(r))
return t}}
W.hD.prototype={
a6:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bh(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.t.a6(u.createElement("table"),b,c,d)
u.toString
u=new W.Y(u)
s=u.gaw(u)
t.toString
s.toString
new W.Y(t).a5(0,new W.Y(s))
return t}}
W.c1.prototype={$ic1:1}
W.aI.prototype={$iaI:1}
W.ap.prototype={$iap:1}
W.hG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ap]},
$iy:1,
$ay:function(){return[W.ap]},
$au:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]}}
W.hH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aI]},
$iy:1,
$ay:function(){return[W.aI]},
$au:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]}}
W.hN.prototype={
gl:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.bt.prototype={$ibt:1}
W.hR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aJ]},
$iy:1,
$ay:function(){return[W.aJ]},
$au:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]}}
W.hS.prototype={
gl:function(a){return a.length}}
W.ba.prototype={}
W.i6.prototype={
i:function(a){return String(a)}}
W.il.prototype={
gl:function(a){return a.length}}
W.bc.prototype={
gfD:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfC:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibc:1}
W.ca.prototype={
f5:function(a,b){return a.requestAnimationFrame(H.bA(b,1))},
e4:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.G]},
$iy:1,
$ay:function(){return[W.G]},
$au:function(){return[W.G]},
$ii:1,
$ai:function(){return[W.G]}}
W.dz.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia5&&a.left===u.gba(b)&&a.top===u.gbd(b)&&a.width===u.gav(b)&&a.height===u.gap(b)},
gI:function(a){return W.ko(C.d.gI(a.left),C.d.gI(a.top),C.d.gI(a.width),C.d.gI(a.height))},
gap:function(a){return a.height},
gav:function(a){return a.width}}
W.iz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ay]},
$iy:1,
$ay:function(){return[W.ay]},
$au:function(){return[W.ay]},
$ii:1,
$ai:function(){return[W.ay]}}
W.dS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.B]},
$iy:1,
$ay:function(){return[W.B]},
$au:function(){return[W.B]},
$ii:1,
$ai:function(){return[W.B]}}
W.iM.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.aH]},
$iy:1,
$ay:function(){return[W.aH]},
$au:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]}}
W.iN.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$ip:1,
$ap:function(){return[W.ao]},
$iy:1,
$ay:function(){return[W.ao]},
$au:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]}}
W.it.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.gZ(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gZ:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.n])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aW:function(){return[P.n,P.n]}}
W.iw.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gZ(this).length}}
W.ix.prototype={}
W.iy.prototype={
$1:function(a){return this.a.$1(a)}}
W.cb.prototype={
dK:function(a){var u
if($.dH.a===0){for(u=0;u<262;++u)$.dH.m(0,C.K[u],W.mE())
for(u=0;u<12;++u)$.dH.m(0,C.l[u],W.mF())}},
aC:function(a){return $.kS().K(0,W.bJ(a))},
ah:function(a,b,c){var u=$.dH.h(0,H.d(W.bJ(a))+"::"+b)
if(u==null)u=$.dH.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaC:1}
W.J.prototype={
gO:function(a){return new W.cJ(a,this.gl(a))}}
W.d0.prototype={
aC:function(a){return C.a.cF(this.a,new W.h0(a))},
ah:function(a,b,c){return C.a.cF(this.a,new W.h_(a,b,c))},
$iaC:1}
W.h0.prototype={
$1:function(a){return a.aC(this.a)}}
W.h_.prototype={
$1:function(a){return a.ah(this.a,this.b,this.c)}}
W.e_.prototype={
dO:function(a,b,c,d){var u,t,s
this.a.a5(0,c)
u=b.bf(0,new W.iK())
t=b.bf(0,new W.iL())
this.b.a5(0,u)
s=this.c
s.a5(0,C.M)
s.a5(0,t)},
aC:function(a){return this.a.K(0,W.bJ(a))},
ah:function(a,b,c){var u=this,t=W.bJ(a),s=u.c
if(s.K(0,H.d(t)+"::"+b))return u.d.fo(c)
else if(s.K(0,"*::"+b))return u.d.fo(c)
else{s=u.b
if(s.K(0,H.d(t)+"::"+b))return!0
else if(s.K(0,"*::"+b))return!0
else if(s.K(0,H.d(t)+"::*"))return!0
else if(s.K(0,"*::*"))return!0}return!1},
$iaC:1}
W.iK.prototype={
$1:function(a){return!C.a.K(C.l,a)}}
W.iL.prototype={
$1:function(a){return C.a.K(C.l,a)}}
W.iQ.prototype={
ah:function(a,b,c){if(this.dC(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.K(0,b)
return!1}}
W.iR.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iO.prototype={
aC:function(a){var u=J.Q(a)
if(!!u.$ic_)return!1
u=!!u.$ij
if(u&&W.bJ(a)==="foreignObject")return!1
if(u)return!0
return!1},
ah:function(a,b,c){if(b==="is"||C.b.bg(b,"on"))return!1
return this.aC(a)},
$iaC:1}
W.cJ.prototype={
q:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.cs(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.aC.prototype={}
W.iI.prototype={}
W.eg.prototype={
c5:function(a){new W.iV(this).$2(a,null)},
aQ:function(a,b){if(b==null)J.jP(a)
else b.removeChild(a)},
fa:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kX(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.au(r)}t="element unprintable"
try{t=J.a1(a)}catch(r){H.au(r)}try{s=W.bJ(a)
this.f9(a,b,p,t,s,o,n)}catch(r){if(H.au(r) instanceof P.ad)throw r
else{this.aQ(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
f9:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aQ(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aC(a)){p.aQ(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ah(a,"is",g)){p.aQ(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gZ(f)
t=H.b(u.slice(0),[H.at(u,0)])
for(s=f.gZ(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.ah(a,J.l_(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$ic1)p.c5(a.content)}}
W.iV.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.fa(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aQ(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.au(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dy.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dT.prototype={}
W.dU.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.cg.prototype={}
W.ch.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e5.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
P.ef.prototype={$ib_:1,
gcN:function(a){return this.a}}
P.j1.prototype={
$2:function(a,b){this.a[a]=b},
$S:8}
P.f5.prototype={
gb3:function(){var u=this.b,t=H.jG(u,"u",0)
return new H.bR(new H.c9(u,new P.f6(),[t]),new P.f7(),[t,W.O])},
m:function(a,b,c){var u=this.gb3()
J.kY(u.b.$1(J.eu(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aT(this.gb3().a)},
h:function(a,b){var u=this.gb3()
return u.b.$1(J.eu(u.a,b))},
gO:function(a){var u=P.jt(this.gb3(),!1,W.O)
return new J.a2(u,u.length)},
$ap:function(){return[W.O]},
$au:function(){return[W.O]},
$ai:function(){return[W.O]}}
P.f6.prototype={
$1:function(a){return!!J.Q(a).$iO}}
P.f7.prototype={
$1:function(a){return H.k(a,"$iO")}}
P.iE.prototype={
gc0:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return u+t},
gcK:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.v(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.d(u.a)+", "+H.d(u.b)+") "+H.d(u.c)+" x "+H.d(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia5){t=q.a
if(t==u.gba(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.A()
if(typeof r!=="number")return H.v(r)
if(t+r===u.gc0(b)){t=q.d
if(typeof s!=="number")return s.A()
if(typeof t!=="number")return H.v(t)
u=s+t===u.gcK(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gI:function(a){var u=this,t=u.a,s=J.bE(t),r=u.b,q=J.bE(r),p=u.c
if(typeof t!=="number")return t.A()
if(typeof p!=="number")return H.v(p)
p=C.c.gI(t+p)
t=u.d
if(typeof r!=="number")return r.A()
if(typeof t!=="number")return H.v(t)
t=C.c.gI(r+t)
return P.lP(P.iB(P.iB(P.iB(P.iB(0,s),q),p),t))}}
P.a5.prototype={
gba:function(a){return this.a},
gbd:function(a){return this.b},
gav:function(a){return this.c},
gap:function(a){return this.d}}
P.b3.prototype={$ib3:1}
P.fp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b3]},
$au:function(){return[P.b3]},
$ii:1,
$ai:function(){return[P.b3]}}
P.b7.prototype={$ib7:1}
P.h2.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b7]},
$au:function(){return[P.b7]},
$ii:1,
$ai:function(){return[P.b7]}}
P.ha.prototype={
gl:function(a){return a.length}}
P.c_.prototype={$ic_:1}
P.hB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.n]},
$au:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]}}
P.j.prototype={
gcL:function(a){return new P.f5(a,new W.Y(a))},
a6:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aC])
p.push(W.kn(null))
p.push(W.kp())
p.push(new W.iO())
c=new W.eg(new W.d0(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.n).fA(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.Y(s)
q=p.gaw(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ij:1}
P.b9.prototype={$ib9:1}
P.hT.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[P.b9]},
$au:function(){return[P.b9]},
$ii:1,
$ai:function(){return[P.b9]}}
P.dK.prototype={}
P.dL.prototype={}
P.dV.prototype={}
P.dW.prototype={}
P.e6.prototype={}
P.e7.prototype={}
P.ed.prototype={}
P.ee.prototype={}
P.ez.prototype={
gl:function(a){return a.length}}
P.eA.prototype={
h:function(a,b){return P.aM(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aM(u.value[1]))}},
gZ:function(a){var u=H.b([],[P.n])
this.H(a,new P.eB(u))
return u},
gl:function(a){return a.size},
$aW:function(){return[P.n,null]}}
P.eB.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eC.prototype={
gl:function(a){return a.length}}
P.bf.prototype={}
P.h3.prototype={
gl:function(a){return a.length}}
P.dx.prototype={}
P.d7.prototype={
hh:function(a,b,c,d,e,f,g){var u,t=J.Q(g)
if(!!t.$ib_)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.mu(g))
return}if(!!t.$ibM)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.l0("Incorrect number or type of arguments"))}}
P.hw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.K(b,a,null,null,null))
return P.aM(a.item(b))},
m:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
C:function(a,b){return this.h(a,b)},
$ip:1,
$ap:function(){return[[P.bQ,,,]]},
$au:function(){return[[P.bQ,,,]]},
$ii:1,
$ai:function(){return[[P.bQ,,,]]}}
P.e2.prototype={}
P.e3.prototype={}
K.av.prototype={
aq:function(a,b){return!0},
i:function(a){return"all"}}
K.cK.prototype={
aq:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aq(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.b5.prototype={}
K.a_.prototype={
aq:function(a,b){return!this.dw(0,b)},
i:function(a){return"!["+this.c9(0)+"]"}}
K.hb.prototype={
aq:function(a,b){if(typeof b!=="number")return H.v(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.ju(this.a),t=H.ju(this.b)
return u+".."+t}}
K.hk.prototype={
dG:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.r("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.as])
for(s=new H.b4(a,a.gl(a));s.q();)t.m(0,s.d,!0)
r=P.jt(new H.bq(t,[u]),!0,u)
C.a.du(r)
this.a=r},
aq:function(a,b){return C.a.K(this.a,b)},
i:function(a){return P.jw(this.a)}}
L.dc.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dm(this.a.j(0,b))
r.a=H.b([],[K.b5])
r.c=!1
this.c.push(r)
return r},
fL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aq(0,a))return r}return},
i:function(a){return this.b},
cz:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.K(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bq(n,[H.at(n,0)]),n=n.gO(n);n.q();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.K(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dj.prototype={
i:function(a){var u=H.jM(this.b,"\n","\\n"),t=H.jM(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dk.prototype={
as:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hO.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dc(this,b)
u.c=H.b([],[L.dm])
this.a.m(0,b,u)}return u},
M:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dk(a)
u=P.n
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
c1:function(a){return this.hn(a)},
hn:function(a){var u=this
return P.lX(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$c1(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.h9(c,0)
else{if(!t.q()){s=3
break}l=t.d}d.push(l);++o
k=g.fL(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jw(d)
throw H.c(P.r("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.x("removeRange"))
P.jv(0,m,d.length)
d.splice(0,m-0)
C.a.a5(c,d)
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
if(g.d!=null){j=P.jw(e)
i=g.d
h=i.c.h(0,j)
p=new L.dj(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.K(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lN()
case 1:return P.lO(q)}}},L.dj)},
i:function(a){var u,t=new P.an(""),s=this.d
if(s!=null)t.a=s.cz()+"\n"
for(s=this.a,s=s.ghp(s),s=new H.cT(J.aS(s.a),s.b);s.q();){u=s.a
if(u!=this.d)t.a+=u.cz()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dm.prototype={
i:function(a){return this.b.b+": "+this.c9(0)}}
O.aV.prototype={
bi:function(a){this.a=H.b([],[a])
this.c=this.b=null},
c6:function(a,b,c){this.b=b
this.c=a},
aZ:function(a,b){return this.c6(a,null,b)},
eQ:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dJ:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gO:function(a){var u=this.a
return new J.a2(u,u.length)},
C:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.jG(s,"aV",0)]
if(s.eQ(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dJ(t,H.b([b],r))}},
$ii:1}
O.bT.prototype={
gl:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.H():u},
ax:function(){var u=this.b
if(u!=null)u.D(null)},
gV:function(a){var u=this.a
if(u.length>0)return C.a.gb9(u)
else return V.cW()},
df:function(a){var u=this.a
if(a==null)u.push(V.cW())
else u.push(a)
this.ax()},
c_:function(){var u=this.a
if(u.length>0){u.pop()
this.ax()}}}
E.eE.prototype={}
E.aZ.prototype={
sc7:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gt().S(0,s.gda())
u=s.c
if(u!=null)u.gt().n(0,s.gda())
t=new D.z("shape",r,s.c)
t.b=!0
s.ar(t)}},
saV:function(a){var u,t,s=this
if(!J.N(s.r,a)){u=s.r
if(u!=null)u.gt().S(0,s.gd8())
if(a!=null)a.gt().n(0,s.gd8())
s.r=a
t=new D.z("mover",u,a)
t.b=!0
s.ar(t)}},
aj:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aK(0,b,s):null
if(!J.N(q,s.x)){u=s.x
s.x=q
t=new D.z("matrix",u,q)
t.b=!0
s.ar(t)}for(r=s.y.a,r=new J.a2(r,r.length);r.q();)r.d.aj(0,b)},
aJ:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gV(s))
else s.a.push(r.u(0,s.gV(s)))
s.ax()
a.dg(t.f)
s=a.dy
u=(s&&C.a).gb9(s)
if(u!=null&&t.d!=null)u.hb(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.q();)s.d.aJ(a)
a.de()
a.dx.c_()},
ar:function(a){var u=this.z
if(u!=null)u.D(a)},
a_:function(){return this.ar(null)},
dc:function(a){this.e=null
this.ar(a)},
fZ:function(){return this.dc(null)},
d9:function(a){this.ar(a)},
fY:function(){return this.d9(null)},
d7:function(a){this.ar(a)},
fV:function(){return this.d7(null)},
fU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd6(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bk()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a_()},
fX:function(a,b){var u,t
for(u=b.gO(b),t=this.gd6();u.q();)u.gB(u).gt().S(0,t)
this.a_()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hc.prototype={
dF:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bT()
t=[V.az]
u.a=H.b([],t)
u.gt().n(0,new E.hd(s))
s.cy=u
u=new O.bT()
u.a=H.b([],t)
u.gt().n(0,new E.he(s))
s.db=u
u=new O.bT()
u.a=H.b([],t)
u.gt().n(0,new E.hf(s))
s.dx=u
u=H.b([],[O.df])
s.dy=u
u.push(null)
s.fr=new H.I([P.n,A.d8])},
gh7:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gV(s)
u=t.db
u=t.z=s.u(0,u.gV(u))
s=u}return s},
dg:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gb9(u):a)},
de:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hd.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.he.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hf.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dh.prototype={
ce:function(a){this.dh()},
cd:function(){return this.ce(null)},
gfN:function(){var u,t=this,s=Date.now(),r=C.c.W(P.jV(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
ct:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.v(r)
u=C.d.bS(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.bS(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kf(C.i,s.ghd())}},
dh:function(){if(!this.cx){this.cx=!0
var u=window
C.v.e4(u)
C.v.f5(u,W.kt(new E.hM(this),P.a7))}},
ha:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.ct()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.jV(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ax()
r=s.db
C.a.sl(r.a,0)
r.ax()
r=s.dx
C.a.sl(r.a,0)
r.ax()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.aJ(p.e)}s=p.Q
if(s!=null)s.D(null)}catch(q){u=H.au(q)
t=H.jH(q)
P.jL("Error: "+H.d(u))
P.jL("Stack: "+H.d(t))
throw H.c(u)}}}
E.hM.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ha()}}}
Z.dv.prototype={}
Z.cx.prototype={
bD:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.au(s)
t=P.r('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.im.prototype={}
Z.cy.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bD:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bD(a)},
ho:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aJ:function(a){var u,t,s,r,q,p=this.b.length
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
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bZ(this.c))+"'")+"]"}}
Z.aK.prototype={
gc8:function(a){var u=this.a,t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.aR().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.cq().a)!==0)t+=3
if((u&$.cr().a)!==0)t+=4
if((u&$.bD().a)!==0)++t
return(u&$.aN().a)!==0?t+4:t},
fp:function(a){var u,t=$.aQ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cr()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aN()
if((s&t.a)!==0)if(u===a)return t
return $.kR()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aK))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.n]),t=this.a
if((t&$.aQ().a)!==0)u.push("Pos")
if((t&$.aP().a)!==0)u.push("Norm")
if((t&$.aO().a)!==0)u.push("Binm")
if((t&$.aR().a)!==0)u.push("Txt2D")
if((t&$.be().a)!==0)u.push("TxtCube")
if((t&$.cq().a)!==0)u.push("Clr3")
if((t&$.cr().a)!==0)u.push("Clr4")
if((t&$.bD().a)!==0)u.push("Weight")
if((t&$.aN().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.eH.prototype={}
D.bk.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.S]}]):u).push(b)},
S:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.a
u=(s&&C.a).S(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.K(s,b)
if(s===!0){s=t.b
u=(s&&C.a).S(s,b)||u}return u},
D:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.a.H(P.jt(u,!0,{func:1,ret:-1,args:[D.S]}),new D.f1(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.S]}])
C.a.H(u,new D.f2(q))}return!0},
fJ:function(){return this.D(null)},
at:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.D(u)}}}}
D.f1.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f2.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.S.prototype={}
D.bn.prototype={}
D.bo.prototype={}
D.z.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cz.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cP.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cP))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fo.prototype={
h3:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
h_:function(a){this.c=a.b
this.d.S(0,a.a)
return!1}}
X.cS.prototype={}
X.fu.prototype={
aO:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.ab(o.a+n*m,o.b+u*t)
t=q.a.gaE()
r=new X.aB(a,V.b8(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
bZ:function(a,b){this.r=a.a
return!1},
aX:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dq()
if(typeof u!=="number")return u.a9()
this.r=(u&~t)>>>0
return!1},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.aO(a,b))
return!0},
h4:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaE()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.bU(new V.E(s*r,q*p),u,t)
t.b=!0
n.D(t)
return!0},
eF:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cS(c,r.a.gaE(),b)
s.b=!0
t.D(s)
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
X.aB.prototype={}
X.fT.prototype={
bp:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaE(),r=new X.aB(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bZ:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.D(this.bp(a,b,!0))
return!0},
aX:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dq()
if(typeof t!=="number")return t.a9()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.D(u.bp(a,b,!0))
return!0},
aW:function(a,b){var u=this.d
if(u==null)return!1
u.D(this.bp(a,b,!1))
return!0},
h5:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaE()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.bU(new V.E(t*s,r*q),u,b)
u.b=!0
o.D(u)
return!0},
gcO:function(){var u=this.b
return u==null?this.b=D.H():u},
gc2:function(){var u=this.c
return u==null?this.c=D.H():u},
gd5:function(){var u=this.d
return u==null?this.d=D.H():u}}
X.bU.prototype={}
X.h9.prototype={}
X.dl.prototype={}
X.hQ.prototype={
aO:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.b8(),r=u.a.gaE(),q=new X.dl(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h2:function(a){var u=this.b
if(u==null)return!1
u.D(this.aO(a,!0))
return!0},
h0:function(a){var u=this.c
if(u==null)return!1
u.D(this.aO(a,!0))
return!0},
h1:function(a){var u=this.d
if(u==null)return!1
u.D(this.aO(a,!1))
return!0}}
X.dq.prototype={
gaE:function(){var u=this.a,t=C.f.gcM(u).c
t.toString
u=C.f.gcM(u).d
u.toString
return V.k9(0,0,t,u)},
cm:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cP(u,new X.aa(t,a.altKey,a.shiftKey))},
aB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
bC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.aa(t,a.altKey,a.shiftKey)},
ao:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.F()
u=t.top
if(typeof r!=="number")return r.F()
return new V.ab(s-q,r-u)},
aP:function(a){return new V.E(a.movementX,a.movementY)},
bz:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ab])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ac(r.pageX)
C.d.ac(r.pageY)
p=o.left
C.d.ac(r.pageX)
n.push(new V.ab(q-p,C.d.ac(r.pageY)-o.top))}return n},
am:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.aa(t,a.altKey,a.shiftKey))},
bq:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.F()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.F()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
ez:function(a){this.f=!0},
em:function(a){this.f=!1},
es:function(a){if(this.f&&this.bq(a))a.preventDefault()},
eD:function(a){var u
if(!this.f)return
u=this.cm(a)
this.b.h3(u)},
eB:function(a){var u
if(!this.f)return
u=this.cm(a)
this.b.h_(u)},
eH:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aB(a)
if(r.x){u=r.am(a)
t=r.aP(a)
if(r.d.bZ(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.am(a)
s=r.ao(a)
if(r.c.bZ(u,s))a.preventDefault()},
eL:function(a){var u,t,s,r=this
r.aB(a)
u=r.am(a)
if(r.x){t=r.aP(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()},
ex:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aB(a)
u=r.am(a)
if(r.x){t=r.aP(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aX(u,s))a.preventDefault()}},
eJ:function(a){var u,t,s,r=this
r.aB(a)
u=r.am(a)
if(r.x){t=r.aP(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()},
ev:function(a){var u,t,s,r=this
if(!r.bq(a)){r.aB(a)
u=r.am(a)
if(r.x){t=r.aP(a)
if(r.d.aW(u,t))a.preventDefault()
return}if(r.r)return
s=r.ao(a)
if(r.c.aW(u,s))a.preventDefault()}},
eN:function(a){var u,t,s=this
s.aB(a)
u=new V.E((a&&C.u).gfC(a),C.u.gfD(a)).v(0,180)
if(s.x){if(s.d.h4(u))a.preventDefault()
return}if(s.r)return
t=s.ao(a)
if(s.c.h5(u,t))a.preventDefault()},
eP:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.am(s.y)
t=s.ao(s.y)
s.d.eF(u,t,r)}},
f1:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bC(a)
u=t.bz(a)
if(t.e.h2(u))a.preventDefault()},
eY:function(a){var u
this.bC(a)
u=this.bz(a)
if(this.e.h0(u))a.preventDefault()},
f_:function(a){var u
this.bC(a)
u=this.bz(a)
if(this.e.h1(u))a.preventDefault()}}
D.eD.prototype={$iZ:1}
D.bi.prototype={
ak:function(a){var u=this.r
if(u!=null)u.D(a)},
dM:function(){return this.ak(null)},
$iZ:1}
D.Z.prototype={}
D.cQ.prototype={
ak:function(a){var u=this.y
if(u!=null)u.D(a)},
cr:function(a){var u=this.z
if(u!=null)u.D(a)},
eE:function(){return this.cr(null)},
eS:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.dZ(s))return!1}return!0},
eg:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcq(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bi)this.f.push(q)
p=q.r
if(p==null){p=new D.bk()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bn()
u.b=!0
this.ak(u)},
eW:function(a,b){var u,t,s
for(u=b.gO(b),t=this.gcq();u.q();){s=u.gB(u)
C.a.S(this.e,s)
s.gt().S(0,t)}u=new D.bo()
u.b=!0
this.ak(u)},
dZ:function(a){var u=C.a.K(this.f,a)
return u},
$ai:function(){return[D.Z]},
$aaV:function(){return[D.Z]}}
D.h8.prototype={$iZ:1}
D.hv.prototype={$iZ:1}
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
V.f0.prototype={}
V.cV.prototype={
a3:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cV))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bC(H.b([q.a,q.d,q.r],p),3,0),n=V.bC(H.b([q.b,q.e,q.x],p),3,0),m=V.bC(H.b([q.c,q.f,q.y],p),3,0)
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
V.az.prototype={
a3:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
d3:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.A().a)return V.cW()
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
if(!(b instanceof V.az))return!1
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
w:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bC(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bC(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bC(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bC(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.w("")}}
V.ab.prototype={
F:function(a,b){return new V.ab(this.a-b.a,this.b-b.b)},
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
F:function(a,b){return new V.a4(this.a-b.a,this.b-b.b,this.c-b.c)},
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
V.d3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d3))return!1
u=b.a
t=$.A().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.d6.prototype={
ga2:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
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
V.E.prototype={
bT:function(a){return Math.sqrt(this.G(this))},
G:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.v(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.v(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.E(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.A().a){u=$.kj
return u==null?$.kj=new V.E(0,0):u}u=this.a
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
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.C.prototype={
bT:function(a){return Math.sqrt(this.G(this))},
G:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
bU:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.C(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aS:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.C(u*t-s*r,s*q-p*t,p*r-u*q)},
A:function(a,b){return new V.C(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a){return new V.C(-this.a,-this.b,-this.c)},
v:function(a,b){if(Math.abs(b-0)<$.A().a)return V.du()
return new V.C(this.a/b,this.b/b,this.c/b)},
d4:function(){var u=$.A().a
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
U.eJ.prototype={
bk:function(a){var u=V.mW(a,this.c,this.b)
return u},
gt:function(){var u=this.y
return u==null?this.y=D.H():u},
N:function(a){var u=this.y
if(u!=null)u.D(a)},
sc3:function(a,b){},
sbW:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.A().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bk(u)}s=new D.z("maximumLocation",s,t.b)
s.b=!0
t.N(s)}},
sbY:function(a){var u,t=this,s=t.c
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
sbX:function(a){var u,t,s=this,r=s.e
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
U.cB.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.H():u},
aK:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
return J.N(this.a,b.a)},
i:function(a){return"Constant: "+this.a.w("          ")}}
U.bK.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.H():u},
N:function(a){var u=this.e
if(u!=null)u.D(a)},
Y:function(){return this.N(null)},
ee:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaA(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.N(u)},
eU:function(a,b){var u,t
for(u=b.gO(b),t=this.gaA();u.q();)u.gB(u).gt().S(0,t)
u=new D.bo()
u.b=!0
this.N(u)},
aK:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a0()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.q();){q=r.d
if(q!=null){t=q.aK(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.cW():u
r=s.e
if(r!=null)r.at(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bK))return!1
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
U.dr.prototype={
gt:function(){var u=this.cy
return u==null?this.cy=D.H():u},
N:function(a){var u=this.cy
if(u!=null)u.D(a)},
Y:function(){return this.N(null)},
aR:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcO().n(0,u.gbr())
u.a.c.gd5().n(0,u.gbt())
u.a.c.gc2().n(0,u.gbv())
return!0},
bs:function(a){var u=this
if(!J.N(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bu:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaB")
if(!n.y)return
if(n.x){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.G(u)
t=n.r
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.F(0,a.y)
u=new V.E(t.a,t.b).u(0,2).v(0,u.ga2())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.v(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.F(0,a.y)
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
t=t.F(0,a.z)
n.Q=new V.E(t.a,t.b).u(0,2).v(0,u.ga2())}n.Y()},
bw:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.G(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.v(s)
u.sR(t*10*s)
r.Y()}},
aK:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.a0()
if(q<p){r.ch=p
u=b.y
r.b.aj(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ak(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia3:1}
U.ds.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.H():u},
N:function(a){var u=this.fx
if(u!=null)u.D(a)},
Y:function(){return this.N(null)},
aR:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcO().n(0,s.gbr())
s.a.c.gd5().n(0,s.gbt())
s.a.c.gc2().n(0,s.gbv())
u=s.a.d
t=u.f
u=t==null?u.f=D.H():t
u.n(0,s.ge6())
u=s.a.d
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.ge8())
u=s.a.e
t=u.b
u=t==null?u.b=D.H():t
u.n(0,s.gfk())
u=s.a.e
t=u.d
u=t==null?u.d=D.H():t
u.n(0,s.gfi())
u=s.a.e
t=u.c
u=t==null?u.c=D.H():t
u.n(0,s.gfg())
return!0},
ag:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.E(u,t)},
bs:function(a){var u=this
H.k(a,"$iaB")
if(!J.N(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bu:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaB")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
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
s=t.F(0,a.y)
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
t=t.F(0,a.z)
n.dx=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))}n.Y()},
bw:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.G(u)>0.0001){u=r.c
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
e7:function(a){var u=this
if(H.k(a,"$icS").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e9:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaB")
if(!J.N(n.d,a.x.b))return
u=a.c
t=a.d
s=t.F(0,a.y)
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
t=t.F(0,a.z)
n.dx=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))
n.Y()},
fl:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fj:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idl")
if(!n.cx)return
if(n.ch){u=a.d.F(0,a.y)
u=new V.E(u.a,u.b)
u=u.G(u)
t=n.Q
if(typeof t!=="number")return H.v(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.F(0,a.y)
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
s=t.F(0,a.y)
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
t=t.F(0,a.z)
n.dx=n.ag(new V.E(t.a,t.b).u(0,2).v(0,u.ga2()))}n.Y()},
fh:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.G(u)>0.0001){u=r.c
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
aK:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
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
U.dt.prototype={
gt:function(){var u=this.r
return u==null?this.r=D.H():u},
N:function(a){var u=this.r
if(u!=null)u.D(a)},
aR:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.H():t
t=r.geb()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.H():s).n(0,t)
return!0},
ec:function(a){var u,t,s,r,q=this
if(!J.N(q.b,q.a.b.c))return
H.k(a,"$ibU")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.z("zoom",u,r)
u.b=!0
q.N(u)}},
aK:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ak(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia3:1}
M.cG.prototype={
al:function(a){var u=this.y
if(u!=null)u.D(a)},
dN:function(){return this.al(null)},
eo:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaf(),s=[{func:1,ret:-1,args:[D.S]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bk()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.al(u)},
eq:function(a,b){var u,t
for(u=b.gO(b),t=this.gaf();u.q();)u.gB(u).gt().S(0,t)
u=new D.bo()
u.b=!0
this.al(u)},
sdj:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gt().S(0,t.gaf())
u=t.d
t.d=a
if(a!=null)a.gt().n(0,t.gaf())
s=new D.z("technique",u,t.d)
s.b=!0
t.al(s)}},
gt:function(){var u=this.y
return u==null?this.y=D.H():u},
aJ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.dg(f.d)
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
a.cy.df(i)
t=$.k4
if(t==null){t=V.k6()
q=V.jz()
p=$.kk
t=V.k1(t,q,p==null?$.kk=new V.C(0,0,-1):p)
$.k4=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.u(0,h)}a.db.df(h)
u=f.d
if(u!=null)u.aj(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.q();)u.d.aj(0,a)
for(u=f.e.a,u=new J.a2(u,u.length);u.q();)u.d.aJ(a)
f.b.toString
a.cy.c_()
a.db.c_()
f.c.toString
a.de()}}
A.cu.prototype={}
A.ey.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.U.prototype={
gad:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.U))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fy.prototype={
dE:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
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
A.mb(c3,u)
A.md(c3,u)
A.mc(c3,u)
A.mf(c3,u)
A.mg(c3,u)
A.me(c3,u)
A.mh(c3,u)
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
m=A.ma(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cn(n,35633)
b8.f=b8.cn(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.t(P.r("Failed to link shader: "+H.d(l)))}b8.fc()
b8.fe()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.k(b8.y.E(0,"invViewMat"),"$ia6")
if(t)b8.dy=H.k(b8.y.E(0,"objMat"),"$ia6")
if(r)b8.fr=H.k(b8.y.E(0,"viewObjMat"),"$ia6")
b8.fy=H.k(b8.y.E(0,"projViewObjMat"),"$ia6")
if(c3.go)b8.fx=H.k(b8.y.E(0,"viewMat"),"$ia6")
if(c3.x1)b8.k1=H.k(b8.y.E(0,"txt2DMat"),"$ic5")
if(c3.x2)b8.k2=H.k(b8.y.E(0,"txtCubeMat"),"$ia6")
if(c3.y1)b8.k3=H.k(b8.y.E(0,"colorMat"),"$ia6")
b8.r1=H.b([],[A.a6])
t=c3.aH
if(t>0){b8.k4=b8.y.E(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.t(P.r(c0+q+c1))
s.push(H.k(j,"$ia6"))}}t=c3.a
if(t.a)b8.r2=H.k(b8.y.E(0,"emissionClr"),"$iD")
if(t.b)b8.rx=H.k(b8.y.E(0,"emissionTxt"),"$iV")
t=c3.b
if(t.a)b8.x1=H.k(b8.y.E(0,"ambientClr"),"$iD")
if(t.b)b8.x2=H.k(b8.y.E(0,"ambientTxt"),"$iV")
t=c3.c
if(t.a)b8.y2=H.k(b8.y.E(0,"diffuseClr"),"$iD")
if(t.b)b8.aH=H.k(b8.y.E(0,"diffuseTxt"),"$iV")
t=c3.d
if(t.a)b8.b7=H.k(b8.y.E(0,"invDiffuseClr"),"$iD")
if(t.b)b8.cQ=H.k(b8.y.E(0,"invDiffuseTxt"),"$iV")
t=c3.e
s=t.a
if(s||t.b||!1){b8.cT=H.k(b8.y.E(0,"shininess"),"$iP")
if(s)b8.cR=H.k(b8.y.E(0,"specularClr"),"$iD")
if(t.b)b8.cS=H.k(b8.y.E(0,"specularTxt"),"$iV")}if(c3.f.b)b8.cU=H.k(b8.y.E(0,"bumpTxt"),"$iV")
if(c3.db){b8.cV=H.k(b8.y.E(0,"envSampler"),"$ibu")
t=c3.r
if(t.a)b8.cW=H.k(b8.y.E(0,"reflectClr"),"$iD")
if(t.b)b8.cX=H.k(b8.y.E(0,"reflectTxt"),"$iV")
t=c3.x
s=t.a
if(s||t.b||!1){b8.cY=H.k(b8.y.E(0,"refraction"),"$iP")
if(s)b8.cZ=H.k(b8.y.E(0,"refractClr"),"$iD")
if(t.b)b8.d_=H.k(b8.y.E(0,"refractTxt"),"$iV")}}t=c3.y
if(t.a)b8.d0=H.k(b8.y.E(0,"alpha"),"$iP")
if(t.b)b8.d1=H.k(b8.y.E(0,"alphaTxt"),"$iV")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.bK=new H.I([r,A.bb])
b8.bL=new H.I([r,[P.af,A.c3]])
for(r=[A.c3],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
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
if(typeof g!=="number")return g.a9()
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
a3=a2}e.push(new A.c3(j,d,c,a3,a2,a1))}b8.bL.m(0,g,e)
q=b8.bK
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.bM=new H.I([r,A.bb])
b8.bN=new H.I([r,[P.af,A.c4]])
for(r=[A.c4],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a9()
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
H.k(c,"$iV")
a8=c}else a8=b9
e.push(new A.c4(a7,a6,a5,j,d,a8))}b8.bN.m(0,g,e)
q=b8.bM
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.bO=new H.I([r,A.bb])
b8.bP=new H.I([r,[P.af,A.c6]])
for(r=[A.c6],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
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
if(typeof g!=="number")return g.a9()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$ic5")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$ibu")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.t(P.r(c0+o+c1))
H.k(b,"$ibu")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$ic2")
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
a3=a2}e.push(new A.c6(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bP.m(0,g,e)
q=b8.bO
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.bQ=new H.I([r,A.bb])
b8.bR=new H.I([r,[P.af,A.c7]])
for(r=[A.c7],i=0;i<t.length;t.length===s||(0,H.l)(t),++i){h=t[i]
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
if(typeof g!=="number")return g.a9()
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
H.k(a,"$ic2")
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
H.k(a,"$iV")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.t(P.r(c0+o+c1))
H.k(a,"$iV")
b0=a}else b0=b9
e.push(new A.c7(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bR.m(0,g,e)
q=b8.bQ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.t(P.r(c0+o+c1))
q.m(0,g,j)}}}},
ab:function(a,b){if(b!=null&&b.d)a.ds(b)},
fb:function(a,b){}}
A.cv.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cD.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.d4.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.da.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fB.prototype={
i:function(a){return this.aT}}
A.c3.prototype={}
A.c4.prototype={}
A.c6.prototype={}
A.c7.prototype={}
A.d8.prototype={
dH:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cn:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.r("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
fc:function(){var u,t,s,r=this,q=H.b([],[A.cu]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cu(p,t.name,s))}r.x=new A.ey(q)},
fe:function(){var u,t,s,r=this,q=H.b([],[A.dn]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.v(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fB(t.type,t.size,t.name,s))}r.y=new A.i0(q)},
az:function(a,b,c){var u=this.a
if(a===1)return new A.bb(u,b,c)
else return A.jy(u,this.r,b,a,c)},
e1:function(a,b,c){var u=this.a
if(a===1)return new A.V(u,b,c)
else return A.jy(u,this.r,b,a,c)},
e2:function(a,b,c){var u=this.a
if(a===1)return new A.bu(u,b,c)
else return A.jy(u,this.r,b,a,c)},
b5:function(a,b){return new P.dE(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
fB:function(a,b,c,d){var u=this
switch(a){case 5120:return u.az(b,c,d)
case 5121:return u.az(b,c,d)
case 5122:return u.az(b,c,d)
case 5123:return u.az(b,c,d)
case 5124:return u.az(b,c,d)
case 5125:return u.az(b,c,d)
case 5126:return new A.P(u.a,c,d)
case 35664:return new A.hX(u.a,c,d)
case 35665:return new A.D(u.a,c,d)
case 35666:return new A.c2(u.a,c,d)
case 35667:return new A.hY(u.a,c,d)
case 35668:return new A.hZ(u.a,c,d)
case 35669:return new A.i_(u.a,c,d)
case 35674:return new A.i1(u.a,c,d)
case 35675:return new A.c5(u.a,c,d)
case 35676:return new A.a6(u.a,c,d)
case 35678:return u.e1(b,c,d)
case 35680:return u.e2(b,c,d)
case 35670:throw H.c(u.b5("BOOL",c))
case 35671:throw H.c(u.b5("BOOL_VEC2",c))
case 35672:throw H.c(u.b5("BOOL_VEC3",c))
case 35673:throw H.c(u.b5("BOOL_VEC4",c))
default:throw H.c(P.r("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.dn.prototype={}
A.i0.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
E:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.r("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bb.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hY.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.P.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hX.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.D.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.c2.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.c5.prototype={
aa:function(a){var u=new Float32Array(H.cl(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a6.prototype={
aa:function(a){var u=new Float32Array(H.cl(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.V.prototype={
ds:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bu.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.iX.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bU(s.b,b).bU(s.d.bU(s.c,b),c)
s=new V.a4(r.a,r.b,r.c)
if(!J.N(a.f,s)){a.f=s
s=a.a
if(s!=null)s.a_()}a.shi(r.v(0,Math.sqrt(r.G(r))))
s=1-b
u=1-c
u=new V.d3(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u)
if(!J.N(a.cx,u)){a.cx=u
s=a.a
if(s!=null)s.a_()}}}
F.bl.prototype={
dV:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.du()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.d4())return
return s.v(0,Math.sqrt(s.G(s)))},
dX:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.F(0,q)
r=new V.C(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.G(r)))
r=t.F(0,q)
r=new V.C(r.a,r.b,r.c)
r=s.aS(r.v(0,Math.sqrt(r.G(r))))
return r.v(0,Math.sqrt(r.G(r)))},
bG:function(){var u,t=this
if(t.d!=null)return!0
u=t.dV()
if(u==null){u=t.dX()
if(u==null)return!1}t.d=u
t.a.a.a_()
return!0},
dU:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.du()
if(q!=null)s=s.A(0,q)
if(u!=null)s=s.A(0,u)
if(t!=null)s=s.A(0,t)
if(s.d4())return
return s.v(0,Math.sqrt(s.G(s)))},
dW:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.A().a){l=d.F(0,g)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.G(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.F(0,g)
l=new V.a4(l.a*p+g.a,l.b*p+g.b,l.c*p+g.c).F(0,j)
l=new V.C(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.G(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.G(l)))
l=o.aS(q)
l=l.v(0,Math.sqrt(l.G(l))).aS(o)
q=l.v(0,Math.sqrt(l.G(l)))}return q},
bE:function(){var u,t=this
if(t.e!=null)return!0
u=t.dU()
if(u==null){u=t.dW()
if(u==null)return!1}t.e=u
t.a.a.a_()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.b.a8(J.a1(s.e),0)+", "+C.b.a8(J.a1(t.b.e),0)+", "+C.b.a8(J.a1(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
L:function(){return this.w("")}}
F.bO.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.b.a8(J.a1(u.e),0)+", "+C.b.a8(J.a1(this.b.e),0)},
L:function(){return this.w("")}}
F.bX.prototype={
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.b.a8(J.a1(u.e),0)},
L:function(){return this.w("")}}
F.hl.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.H():u},
fS:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.U()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.fz())}h.a.U()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.bX()
if(n.a==null)H.t(P.r("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.D(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
p=new F.bO()
o=l.a
if(o==null)H.t(P.r("May not create a line with a start vertex which is not attached to a shape."))
if(o!=k.a)H.t(P.r("May not create a line with vertices attached to different shapes."))
p.a=l
l.c.b.push(p)
p.b=k
k.c.c.push(p)
p.a.a.c.b.push(p)
p=p.a.a.e
if(p!=null)p.D(null)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.U()
p=p.e
if(typeof p!=="number")return p.A()
p+=u
o=o.c
if(p>=o.length)return H.f(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.U()
o=o.e
if(typeof o!=="number")return o.A()
o+=u
p=p.c
if(o>=p.length)return H.f(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.cH(l,k,i)}g=h.e
if(g!=null)g.at(0)},
aD:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aD()||!1
if(!t.a.aD())u=!1
s=t.e
if(s!=null)s.at(0)
return u},
ft:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aQ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aP().a)!==0)++s
if((t&$.aO().a)!==0)++s
if((t&$.aR().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.cq().a)!==0)++s
if((t&$.cr().a)!==0)++s
if((t&$.bD().a)!==0)++s
if((t&$.aN().a)!==0)++s
r=a4.gc8(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cx])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fp(m)
k=l.gc8(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cx(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].fR(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cl(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cy(new Z.dv(a1,d),o,a4)
c.b=H.b([],[Z.bm])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)}a=Z.jA(u,34963,b)
c.b.push(new Z.bm(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.U()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.U()
b.push(t.e)}a=Z.jA(u,34963,b)
c.b.push(new Z.bm(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
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
b.push(t.e)}a=Z.jA(u,34963,b)
c.b.push(new Z.bm(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.w(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.w(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.w(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.w(t))}return C.a.k(s,"\n")},
a_:function(){var u=this.e
if(u!=null)u.D(null)}}
F.hm.prototype={
fn:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bl])
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
h.push(F.cH(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cH(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.cH(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.cH(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
aD:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bG())s=!1
return s},
bF:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].bE())s=!1
return s},
i:function(a){return this.L()},
w:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(a))
return C.a.k(r,"\n")},
L:function(){return this.w("")}}
F.hn.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s=H.b([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.f(t,u)
s.push(t[u].w(a+(""+u+". ")))}return C.a.k(s,"\n")},
L:function(){return this.w("")}}
F.ho.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
w:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(a))
return C.a.k(r,"\n")},
L:function(){return this.w("")}}
F.c8.prototype={
bI:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.km(u.cx,r,o,t,s,q,p,a,n)},
fz:function(){return this.bI(null)},
shi:function(a){var u
if(!J.N(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a_()}},
fR:function(a){var u,t,s=this
if(a.p(0,$.aQ())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aP())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aO())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aR())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.be())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cq())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cr())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bD()))return H.b([s.ch],[P.M])
else if(a.p(0,$.aN())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
bG:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.du()
t.d.H(0,new F.ik(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.at(0)}return!0},
bE:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.du()
t.d.H(0,new F.ij(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.G(s)))
s=t.a
if(s!=null){s.a_()
s=t.a.e
if(s!=null)s.at(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
w:function(a){var u,t,s=this,r="-",q=H.b([],[P.n])
q.push(C.b.a8(J.a1(s.e),0))
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
L:function(){return this.w("")}}
F.ik.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.A(0,t)}}}
F.ic.prototype={
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
cD:function(a,b){var u=null,t=F.km(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gl:function(a){return this.c.length},
aD:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bG()
return!0},
bF:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].bE()
return!0},
fu:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.N(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.D(null)}}}}return!0},
i:function(a){return this.L()},
w:function(a){var u,t,s,r
this.U()
u=H.b([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].w(a))
return C.a.k(u,"\n")},
L:function(){return this.w("")}}
F.id.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
H:function(a,b){var u=this
C.a.H(u.b,b)
C.a.H(u.c,new F.ie(u,b))
C.a.H(u.d,new F.ig(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(""))
return C.a.k(r,"\n")}}
F.ie.prototype={
$1:function(a){if(!J.N(a.a,this.a))this.b.$1(a)}}
F.ig.prototype={
$1:function(a){var u=this.a
if(!J.N(a.a,u)&&!J.N(a.b,u))this.b.$1(a)}}
F.ih.prototype={
gl:function(a){return this.b.length+this.c.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(""))
return C.a.k(r,"\n")}}
F.ii.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].w(""))
return C.a.k(r,"\n")}}
O.cU.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.H():u},
T:function(a){var u=this.fr
if(u!=null)u.D(a)},
bj:function(){return this.T(null)},
cs:function(a){this.a=null
this.T(a)},
f7:function(){return this.cs(null)},
ei:function(a,b){var u=new D.bn()
u.b=!0
this.T(u)},
ek:function(a,b){var u=new D.bo()
u.b=!0
this.T(u)},
cl:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gai()
o=u.h(0,q.gai())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cv])
u.H(0,new O.fF(g,n))
C.a.aM(n,new O.fG())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cD])
m.H(0,new O.fH(g,l))
C.a.aM(l,new O.fI())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gai()
o=k.h(0,q.gai())
k.m(0,p,o==null?1:o)}j=H.b([],[A.d4])
k.H(0,new O.fJ(g,j))
C.a.aM(j,new O.fK())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.gai()
p=i.h(0,q.gai())
i.m(0,s,p==null?1:p)}h=H.b([],[A.da])
i.H(0,new O.fL(g,h))
C.a.aM(h,new O.fM())
f=C.c.W(g.e.a.length+3,4)
g.dy.e
return A.ll(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
a4:function(a,b){if(b!=null)if(!C.a.K(a,b)){b.a=a.length
a.push(b)}},
aj:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.q();){t=u.d
t.toString
s=$.ib
if(s==null)s=$.ib=new V.C(0,0,1)
t.a=s
r=$.ia
t.d=r==null?$.ia=new V.C(0,1,0):r
r=$.i9
t.e=r==null?$.i9=new V.C(-1,0,0):r
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
hb:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cl()
u=b4.fr.h(0,b3.aT)
if(u==null){u=A.lk(b3,b4.a)
t=u.b
if(t.length===0)H.t(P.r("May not cache a shader with no name."))
if(b4.fr.fv(0,t))H.t(P.r('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.b7
b3=b5.e
if(!(b3 instanceof Z.cy))b3=b5.e=null
if(b3==null||!b3.d.p(0,r)){b3=s.k4
if(b3)b5.d.aD()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bF()
p.a.bF()
p=p.e
if(p!=null)p.at(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.fu()
o=o.e
if(o!=null)o.at(0)}m=b5.d.ft(new Z.im(b4.a),r)
m.aI($.aQ()).e=b2.a.Q.c
if(b3)m.aI($.aP()).e=b2.a.cx.c
if(q)m.aI($.aO()).e=b2.a.ch.c
if(s.r2)m.aI($.aR()).e=b2.a.cy.c
if(p)m.aI($.be()).e=b2.a.db.c
if(s.ry)m.aI($.aN()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dg])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fK()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gV(p)
b3=b3.dy
b3.toString
b3.aa(p.a3(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gV(p)
o=b4.dx
o=b4.cx=p.u(0,o.gV(o))
p=o}b3=b3.fr
b3.toString
b3.aa(p.a3(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gh7()
o=b4.dx
o=b4.ch=p.u(0,o.gV(o))
p=o}b3=b3.fy
b3.toString
b3.aa(p.a3(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gV(p)
b3=b3.fx
b3.toString
b3.aa(p.a3(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.aa(C.j.a3(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.aa(C.j.a3(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.aa(C.j.a3(p,!0))}if(s.aH>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.cl(p.a3(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.f.d)
b3=b2.a
p=b2.f.d
b3.ab(b3.rx,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.r.d)
b3=b2.a
p=b2.r.d
b3.ab(b3.x2,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.x.d)
b3=b2.a
p=b2.x.d
b3.ab(b3.aH,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.b7
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.y.d)
b3=b2.a
p=b2.y.d
b3.ab(b3.cQ,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.z.ch
o=o.cT
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.cR
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.z.d)
b3=b2.a
p=b2.z.d
b3.ab(b3.cS,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.l)(p),++g){f=p[g]
e=f.gai()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.cs(b2.a.bL.h(0,e),d)
n=f.ghr()
b=$.am
n=n.aY(b==null?$.am=new V.a4(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghw()
b=$.am
n=n.aY(b==null?$.am=new V.a4(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaF(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcP()){n=f.gcG()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcH()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcI()
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
c=J.cs(b2.a.bN.h(0,0),d)
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
c=J.cs(b2.a.bP.h(0,e),d)
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
n=f.gaF(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gau()
n=a4.d3(0)
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
i=new Float32Array(H.cl(new V.cV(b,a1,a2,a5,a6,a7,a8,a9,n).a3(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gau()
n=f.gau()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=f.gau()
b=n.gaU(n)
if(b){b=c.f
b.toString
a1=n.gaU(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfO(n)
b.a.uniform1i(b.d,n)}}f.gaL()
n=f.gdt()
b=c.x
b.toString
a1=n.gfG(n)
a2=n.gfH(n)
a5=n.gfI()
n=n.gfF()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaL()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=f.gaL()
b=n.gaU(n)
if(b){b=c.r
b.toString
a1=n.gaU(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gfO(n)
b.a.uniform1i(b.d,n)}}if(f.gcP()){n=f.gcG()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcH()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcI()
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
c=J.cs(b2.a.bR.h(0,e),d)
n=f.gh6(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghu(f).hG()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aY(f.gh6(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaF(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gau()
n=f.gc2()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gc0(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghH()
b=c.x
b.a.uniform1f(b.d,n)
n=f.ghI()
b=c.y
b.a.uniform1f(b.d,n)
f.gau()
n=f.gau()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=f.gau()
b=n.gaU(n)
if(b){b=c.dx
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gaL()
n=f.gdt()
b=c.z
b.toString
a1=n.gfG(n)
a2=n.gfH(n)
a5=n.gfI()
n=n.gfF()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaL()
if(!C.a.K(l,n)){n.a=l.length
l.push(n)}n=f.gaL()
b=n.gaU(n)
if(b){b=c.dy
b.toString
a1=n.d
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.ghv()){n=f.ght()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghs()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcP()){n=f.gcG()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcH()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcI()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.l)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bQ.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.b){b2.a4(l,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.ab(b3.cU,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gV(p).d3(0)}b3=b3.id
b3.toString
b3.aa(p.a3(0,!0))}if(s.db){b2.a4(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fb(b3.cV,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.cW
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.ab(b3.cX,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){o=b2.a
n=b2.cy.ch
o=o.cY
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.cZ
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.b){b2.a4(l,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.ab(b3.d_,p)}}b3=s.y
p=b3.a
o=!p
if(!o||b3.b||!1){if(p){p=b2.a
n=b2.db.f
p=p.d0
p.a.uniform1f(p.d,n)}if(b3.b){b2.a4(l,b2.db.d)
p=b2.a
n=b2.db.d
p.ab(p.d1,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(3553,p.b)}}p=b5.e
p.bD(b4)
p.aJ(b4)
p.ho(b4)
if(!o||b3.b||!1)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(3553,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fE()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cl().aT}}
O.fF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cv(a,C.c.W(b+3,4)*4))}}
O.fG.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.cD(a,C.c.W(b+3,4)*4))}}
O.fI.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.d4(a,C.c.W(b+3,4)*4))}}
O.fK.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.A()
return this.b.push(new A.da(a,C.c.W(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.ct(a.a,b.a)}}
O.fz.prototype={
an:function(){var u,t=this
t.ca()
u=t.f
if(!(Math.abs(u-1)<$.A().a)){t.f=1
u=new D.z(t.b,u,1)
u.b=!0
t.a.T(u)}}}
O.bS.prototype={
T:function(a){return this.a.T(a)},
bj:function(){return this.T(null)},
an:function(){},
bA:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.an()
u=s.a
u.a=null
u.T(null)}},
sbc:function(a){var u,t=this,s=t.c
if(!s.b)t.bA(new A.U(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gt().S(0,t.gb1())
u=t.d
t.d=a
a.gt().n(0,t.gb1())
s=new D.z(t.b+".texture2D",u,t.d)
s.b=!0
t.a.T(s)}}}
O.fA.prototype={}
O.aj.prototype={
cu:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.z(s.b+".color",u,a)
t.b=!0
s.a.T(t)}},
an:function(){this.ca()
this.cu(new V.R(1,1,1))},
saF:function(a,b){this.bA(new A.U(!0,this.c.b,!1))
this.cu(b)}}
O.fC.prototype={}
O.fD.prototype={
an:function(){var u,t=this
t.cb()
u=t.ch
if(!(Math.abs(u-1)<$.A().a)){t.ch=1
u=new D.z(t.b+".refraction",u,1)
u.b=!0
t.a.T(u)}}}
O.fE.prototype={
cv:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.A().a)){u.ch=a
t=new D.z(u.b+".shininess",t,a)
t.b=!0
u.a.T(t)}},
an:function(){this.cb()
this.cv(100)}}
O.df.prototype={}
T.dg.prototype={}
T.hI.prototype={}
T.hJ.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.H():u}}
T.hK.prototype={
bV:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.hJ()
t.a=0
t.b=q
t.d=t.c=!1
W.T(u,"load",new T.hL(this,t,u,!1,q,!1,!1),!1)
return t},
f8:function(a,b,c){var u,t,s,r
b=V.jK(b)
u=V.jK(a.width)
t=V.jK(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.jh()
s.width=u
s.height=t
r=C.f.dm(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.mv(r.getImageData(0,0,s.width,s.height))}}}
T.hL.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.f8(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.N.hh(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.fJ()}++s.e}}
X.jg.prototype={}
X.fa.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.H():u}}
X.d2.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.H():u},
ay:function(a){var u=this.f
if(u!=null)u.D(a)},
dR:function(){return this.ay(null)},
saV:function(a){var u,t,s=this
if(!J.N(s.b,a)){u=s.b
if(u!=null)u.gt().S(0,s.gcf())
t=s.b
s.b=a
if(a!=null)a.gt().n(0,s.gcf())
u=new D.z("mover",t,s.b)
u.b=!0
s.ay(u)}}}
X.hE.prototype={}
V.cA.prototype={
b0:function(a){this.b=new P.ff(C.G)
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
o=m.b.e0(q,0,q.length)
n=o==null?q:o
C.E.dr(p,H.jM(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gb9(m.d).push(p)}},
dd:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.af,W.ae]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.b6()
for(t.toString,s=new H.m(u),s=new P.bx(t.c1(new H.b4(s,s.gl(s))).a());s.q();)r.bb(s.gB(s))}}
V.jb.prototype={
$1:function(a){var u=C.d.dk(this.a.gfN(),2)
if(u!=="0.00")P.jL(u+" fps")}}
V.eR.prototype={
bb:function(a){var u=this
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
b6:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hP()
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
a1.j(0,k).k(0,k).a.push(new K.av())
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
a1.j(0,h).k(0,h).a.push(new K.av())
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
t.as(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.as(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.as(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fc.prototype={
bb:function(a){var u=this
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
b6:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hP()
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
e.j(0,k).k(0,m).a.push(new K.av())
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
u.as(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.as(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.as(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fd.prototype={
bb:function(a){var u=this,t="#111"
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
b6:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hP()
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
l.j(0,o).k(0,o).a.push(new K.av())
l.j(0,s).k(0,m).a.push(new K.av())
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
t.as(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.n]))
t=l.j(0,q)
t.d=t.a.M(q)
t=l.j(0,m)
t.d=t.a.M(m)
return l}}
V.h6.prototype={
dd:function(a,b){this.d=H.b([],[[P.af,W.ae]])
this.J(C.a.k(b,"\n"),"#111")},
bb:function(a){},
b6:function(){return}}
V.hp.prototype={
dI:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.T(q,"scroll",new V.hr(o),!1)},
cE:function(a){var u,t,s,r,q,p,o,n
this.fd()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.fQ(a),s.toString,r=new H.m(r),r=new P.bx(s.c1(new H.b4(r,r.gl(r))).a());r.q();){s=r.gB(r)
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
if(H.mR(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kq(C.q,s,C.h,!1)
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
dl:function(a){var u,t,s,r=new V.eR("dart")
r.b0("dart")
u=new V.fc("glsl")
u.b0("glsl")
t=new V.fd("html")
t.b0("html")
s=C.a.fM(H.b([r,u,t],[V.cA]),new V.hs(a))
if(s!=null)return s
r=new V.h6("plain")
r.b0("plain")
return r},
cC:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jF(s).bg(s,"+")){b0[t]=C.b.ae(s,1)
a6.push(1)
u=!0}else if(C.b.bg(s,"-")){b0[t]=C.b.ae(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.dl(a8)
r.dd(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kq(C.q,a7,C.h,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jQ()
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
for(a2=C.a.gO(s);a2.q();)d.appendChild(a2.gB(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
fd:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hP()
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
u.j(0,q).k(0,i).a.push(new K.av())
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
V.hr.prototype={
$1:function(a){P.kf(C.i,new V.hq(this.a))}}
V.hq.prototype={
$0:function(){var u=C.d.ac(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hs.prototype={
$1:function(a){return a.a===this.a}}
E.j9.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.n]
u.cC("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.cC("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.dz=u.i
u=J.cO.prototype
u.dB=u.i
u=P.i.prototype
u.dA=u.bf
u=W.O.prototype
u.bh=u.a6
u=W.e_.prototype
u.dC=u.ah
u=K.cK.prototype
u.dw=u.aq
u.c9=u.i
u=O.bS.prototype
u.ca=u.an
u=O.aj.prototype
u.cb=u.an})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"lV","lf",19)
t(P,"mp","lI",6)
t(P,"mq","lJ",6)
t(P,"mr","lK",6)
s(P,"kv","mn",9)
r(W,"mE",4,null,["$4"],["lL"],15,0)
r(W,"mF",4,null,["$4"],["lM"],15,0)
var l
q(l=E.aZ.prototype,"gda",0,0,null,["$1","$0"],["dc","fZ"],0,0)
q(l,"gd8",0,0,null,["$1","$0"],["d9","fY"],0,0)
q(l,"gd6",0,0,null,["$1","$0"],["d7","fV"],0,0)
p(l,"gfT","fU",3)
p(l,"gfW","fX",3)
q(l=E.dh.prototype,"gcc",0,0,null,["$1","$0"],["ce","cd"],0,0)
o(l,"ghd","dh",9)
n(l=X.dq.prototype,"gey","ez",4)
n(l,"gel","em",4)
n(l,"ger","es",2)
n(l,"geC","eD",10)
n(l,"geA","eB",10)
n(l,"geG","eH",2)
n(l,"geK","eL",2)
n(l,"gew","ex",2)
n(l,"geI","eJ",2)
n(l,"geu","ev",2)
n(l,"geM","eN",17)
n(l,"geO","eP",4)
n(l,"gf0","f1",5)
n(l,"geX","eY",5)
n(l,"geZ","f_",5)
q(D.bi.prototype,"gdL",0,0,null,["$1","$0"],["ak","dM"],0,0)
q(l=D.cQ.prototype,"gcq",0,0,null,["$1","$0"],["cr","eE"],0,0)
n(l,"geR","eS",18)
p(l,"gef","eg",11)
p(l,"geV","eW",11)
m(V.E.prototype,"gl","bT",12)
m(V.C.prototype,"gl","bT",12)
q(l=U.bK.prototype,"gaA",0,0,null,["$1","$0"],["N","Y"],0,0)
p(l,"ged","ee",13)
p(l,"geT","eU",13)
q(l=U.dr.prototype,"gaA",0,0,null,["$1","$0"],["N","Y"],0,0)
n(l,"gbr","bs",1)
n(l,"gbt","bu",1)
n(l,"gbv","bw",1)
q(l=U.ds.prototype,"gaA",0,0,null,["$1","$0"],["N","Y"],0,0)
n(l,"gbr","bs",1)
n(l,"gbt","bu",1)
n(l,"gbv","bw",1)
n(l,"ge6","e7",1)
n(l,"ge8","e9",1)
n(l,"gfk","fl",1)
n(l,"gfi","fj",1)
n(l,"gfg","fh",1)
n(U.dt.prototype,"geb","ec",1)
q(l=M.cG.prototype,"gaf",0,0,null,["$1","$0"],["al","dN"],0,0)
p(l,"gen","eo",3)
p(l,"gep","eq",3)
q(l=O.cU.prototype,"gb1",0,0,null,["$1","$0"],["T","bj"],0,0)
q(l,"gf6",0,0,null,["$1","$0"],["cs","f7"],0,0)
p(l,"geh","ei",14)
p(l,"gej","ek",14)
q(O.bS.prototype,"gb1",0,0,null,["$1","$0"],["T","bj"],0,0)
q(X.d2.prototype,"gcf",0,0,null,["$1","$0"],["ay","dR"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.X,null)
s(P.X,[H.jr,J.a,J.a2,P.dN,P.i,H.b4,P.fj,H.cI,H.i4,H.hU,P.bj,H.bH,H.e4,P.W,H.fq,H.fr,H.fl,P.ea,P.bw,P.bx,P.dw,P.dd,P.hA,P.di,P.iW,P.iJ,P.iD,P.dM,P.u,P.eI,P.fg,P.iU,P.as,P.a9,P.a7,P.aY,P.h4,P.db,P.dE,P.f9,P.fb,P.af,P.bQ,P.b6,P.n,P.an,W.eN,W.cb,W.J,W.d0,W.e_,W.iO,W.cJ,W.aC,W.iI,W.eg,P.ef,P.iE,K.av,K.cK,K.b5,K.hb,K.hk,L.dc,L.dj,L.dk,L.hO,O.aV,O.bT,E.eE,E.aZ,E.hc,E.dh,Z.dv,Z.im,Z.cy,Z.bm,Z.aK,D.eH,D.bk,D.S,X.cz,X.cP,X.fo,X.fu,X.aa,X.fT,X.hQ,X.dq,D.eD,D.bi,D.Z,D.h8,D.hv,V.R,V.aW,V.f0,V.cV,V.az,V.ab,V.a4,V.d3,V.d6,V.E,V.C,U.dr,U.ds,U.dt,M.cG,A.cu,A.ey,A.U,A.cv,A.cD,A.d4,A.da,A.fB,A.c3,A.c4,A.c6,A.c7,A.dn,A.i0,F.bl,F.bO,F.bX,F.hl,F.hm,F.hn,F.ho,F.c8,F.ic,F.id,F.ih,F.ii,O.df,O.bS,O.fC,T.hK,X.jg,X.hE,X.d2,V.cA,V.hp])
s(J.a,[J.fk,J.cN,J.cO,J.b0,J.bN,J.b1,H.bW,W.e,W.ev,W.cw,W.ai,W.G,W.dy,W.a8,W.eS,W.eT,W.dA,W.cF,W.dC,W.eV,W.h,W.dF,W.ay,W.fe,W.dI,W.b_,W.ft,W.fN,W.dO,W.dP,W.aA,W.dQ,W.dT,W.aD,W.dX,W.dZ,W.aG,W.e0,W.aH,W.e5,W.ao,W.e8,W.hN,W.aJ,W.eb,W.hS,W.i6,W.eh,W.ej,W.el,W.en,W.ep,P.b3,P.dK,P.b7,P.dV,P.ha,P.e6,P.b9,P.ed,P.ez,P.dx,P.d7,P.e2])
s(J.cO,[J.h5,J.bv,J.b2])
t(J.jq,J.b0)
s(J.bN,[J.cM,J.cL])
t(P.fs,P.dN)
s(P.fs,[H.dp,W.iu,W.Y,P.f5])
t(H.m,H.dp)
s(P.i,[H.p,H.bR,H.c9,P.fi])
s(H.p,[H.cR,H.bq])
t(H.eY,H.bR)
s(P.fj,[H.cT,H.io])
t(H.fx,H.cR)
s(P.bj,[H.h1,H.fn,H.i3,H.eG,H.hi,P.d1,P.ad,P.i5,P.i2,P.c0,P.eK,P.eQ])
s(H.bH,[H.jd,H.hF,H.fm,H.j5,H.j6,H.j7,P.iq,P.ip,P.ir,P.is,P.iT,P.iS,P.j0,P.iG,P.iH,P.fw,P.eW,P.eX,W.eZ,W.fP,W.fR,W.hh,W.hz,W.iy,W.h0,W.h_,W.iK,W.iL,W.iR,W.iV,P.j1,P.f6,P.f7,P.eB,E.hd,E.he,E.hf,E.hM,D.f1,D.f2,F.iX,F.ik,F.ij,F.ie,F.ig,O.fF,O.fG,O.fH,O.fI,O.fJ,O.fK,O.fL,O.fM,T.hL,V.jb,V.hr,V.hq,V.hs,E.j9])
s(H.hF,[H.hx,H.bF])
t(P.fv,P.W)
s(P.fv,[H.I,W.it])
t(H.cX,H.bW)
s(H.cX,[H.cc,H.ce])
t(H.cd,H.cc)
t(H.bV,H.cd)
t(H.cf,H.ce)
t(H.cY,H.cf)
s(H.cY,[H.fU,H.fV,H.fW,H.fX,H.fY,H.cZ,H.fZ])
t(P.iP,P.fi)
t(P.iF,P.iW)
t(P.iC,P.iJ)
t(P.eL,P.hA)
t(P.f_,P.eI)
s(P.eL,[P.ff,P.i8])
t(P.i7,P.f_)
s(P.a7,[P.M,P.w])
s(P.ad,[P.bs,P.fh])
s(W.e,[W.B,W.f4,W.aF,W.cg,W.aI,W.ap,W.ci,W.il,W.ca,P.eC,P.bf])
s(W.B,[W.O,W.aU])
s(W.O,[W.o,P.j])
s(W.o,[W.ew,W.ex,W.bg,W.bh,W.ae,W.f8,W.bM,W.hj,W.de,W.hC,W.hD,W.c1])
t(W.eM,W.ai)
t(W.bI,W.dy)
s(W.a8,[W.eO,W.eP])
t(W.dB,W.dA)
t(W.cE,W.dB)
t(W.dD,W.dC)
t(W.eU,W.dD)
t(W.ax,W.cw)
t(W.dG,W.dF)
t(W.f3,W.dG)
t(W.dJ,W.dI)
t(W.bL,W.dJ)
t(W.ba,W.h)
s(W.ba,[W.bp,W.al,W.bt])
t(W.fO,W.dO)
t(W.fQ,W.dP)
t(W.dR,W.dQ)
t(W.fS,W.dR)
t(W.dU,W.dT)
t(W.d_,W.dU)
t(W.dY,W.dX)
t(W.h7,W.dY)
t(W.hg,W.dZ)
t(W.ch,W.cg)
t(W.ht,W.ch)
t(W.e1,W.e0)
t(W.hu,W.e1)
t(W.hy,W.e5)
t(W.e9,W.e8)
t(W.hG,W.e9)
t(W.cj,W.ci)
t(W.hH,W.cj)
t(W.ec,W.eb)
t(W.hR,W.ec)
t(W.bc,W.al)
t(W.ei,W.eh)
t(W.iv,W.ei)
t(W.dz,W.cF)
t(W.ek,W.ej)
t(W.iz,W.ek)
t(W.em,W.el)
t(W.dS,W.em)
t(W.eo,W.en)
t(W.iM,W.eo)
t(W.eq,W.ep)
t(W.iN,W.eq)
t(W.iw,W.it)
t(W.ix,P.dd)
t(W.iQ,W.e_)
t(P.a5,P.iE)
t(P.dL,P.dK)
t(P.fp,P.dL)
t(P.dW,P.dV)
t(P.h2,P.dW)
t(P.c_,P.j)
t(P.e7,P.e6)
t(P.hB,P.e7)
t(P.ee,P.ed)
t(P.hT,P.ee)
t(P.eA,P.dx)
t(P.h3,P.bf)
t(P.e3,P.e2)
t(P.hw,P.e3)
s(K.cK,[K.a_,L.dm])
s(E.eE,[Z.cx,A.d8,T.dg])
s(D.S,[D.bn,D.bo,D.z,X.h9])
s(X.h9,[X.cS,X.aB,X.bU,X.dl])
s(O.aV,[D.cQ,U.bK])
s(D.eH,[U.eJ,U.a3])
t(U.cB,U.a3)
t(A.fy,A.d8)
s(A.dn,[A.bb,A.hY,A.hZ,A.i_,A.hW,A.P,A.hX,A.D,A.c2,A.i1,A.c5,A.a6,A.V,A.bu])
t(O.cU,O.df)
s(O.bS,[O.fz,O.fA,O.aj])
s(O.aj,[O.fD,O.fE])
t(T.hI,T.dg)
t(T.hJ,T.hI)
t(X.fa,X.hE)
s(V.cA,[V.eR,V.fc,V.fd,V.h6])
u(H.dp,H.i4)
u(H.cc,P.u)
u(H.cd,H.cI)
u(H.ce,P.u)
u(H.cf,H.cI)
u(P.dN,P.u)
u(W.dy,W.eN)
u(W.dA,P.u)
u(W.dB,W.J)
u(W.dC,P.u)
u(W.dD,W.J)
u(W.dF,P.u)
u(W.dG,W.J)
u(W.dI,P.u)
u(W.dJ,W.J)
u(W.dO,P.W)
u(W.dP,P.W)
u(W.dQ,P.u)
u(W.dR,W.J)
u(W.dT,P.u)
u(W.dU,W.J)
u(W.dX,P.u)
u(W.dY,W.J)
u(W.dZ,P.W)
u(W.cg,P.u)
u(W.ch,W.J)
u(W.e0,P.u)
u(W.e1,W.J)
u(W.e5,P.W)
u(W.e8,P.u)
u(W.e9,W.J)
u(W.ci,P.u)
u(W.cj,W.J)
u(W.eb,P.u)
u(W.ec,W.J)
u(W.eh,P.u)
u(W.ei,W.J)
u(W.ej,P.u)
u(W.ek,W.J)
u(W.el,P.u)
u(W.em,W.J)
u(W.en,P.u)
u(W.eo,W.J)
u(W.ep,P.u)
u(W.eq,W.J)
u(P.dK,P.u)
u(P.dL,W.J)
u(P.dV,P.u)
u(P.dW,W.J)
u(P.e6,P.u)
u(P.e7,W.J)
u(P.ed,P.u)
u(P.ee,W.J)
u(P.dx,P.W)
u(P.e2,P.u)
u(P.e3,W.J)})()
var v={mangledGlobalNames:{w:"int",M:"double",a7:"num",n:"String",as:"bool",b6:"Null",af:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.S]},{func:1,ret:-1,args:[D.S]},{func:1,ret:-1,args:[W.al]},{func:1,ret:-1,args:[P.w,[P.i,E.aZ]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.b6,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[P.w,[P.i,D.Z]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.w,[P.i,U.a3]]},{func:1,ret:-1,args:[P.w,[P.i,V.az]]},{func:1,ret:P.as,args:[W.O,P.n,P.n,W.cb]},{func:1,ret:P.b6,args:[,]},{func:1,ret:-1,args:[W.bc]},{func:1,ret:P.as,args:[[P.i,D.Z]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bg.prototype
C.f=W.bh.prototype
C.E=W.ae.prototype
C.H=J.a.prototype
C.a=J.b0.prototype
C.I=J.cL.prototype
C.c=J.cM.prototype
C.j=J.cN.prototype
C.d=J.bN.prototype
C.b=J.b1.prototype
C.J=J.b2.prototype
C.r=J.h5.prototype
C.N=P.d7.prototype
C.t=W.de.prototype
C.m=J.bv.prototype
C.u=W.bc.prototype
C.v=W.ca.prototype
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

C.C=new P.h4()
C.h=new P.i7()
C.D=new P.i8()
C.e=new P.iF()
C.i=new P.aY(0)
C.F=new P.aY(5e6)
C.G=new P.fg("element",!1,!1,!1)
C.K=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.n])
C.L=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.n])
C.M=H.b(u([]),[P.n])
C.q=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.k=H.b(u(["bind","if","ref","repeat","syntax"]),[P.n])
C.l=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.n])
C.O=new P.bw(null,2)})();(function staticFields(){$.ah=0
$.bG=null
$.jR=null
$.kx=null
$.ku=null
$.kA=null
$.j2=null
$.j8=null
$.jI=null
$.by=null
$.cm=null
$.cn=null
$.jC=!1
$.ag=C.e
$.a0=[]
$.aw=null
$.jl=null
$.jX=null
$.jW=null
$.dH=P.jZ(P.n,P.fb)
$.k2=null
$.k5=null
$.am=null
$.ka=null
$.kj=null
$.kl=null
$.i9=null
$.ia=null
$.ib=null
$.kk=null
$.k4=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mZ","kE",function(){return H.kw("_$dart_dartClosure")})
u($,"n_","jN",function(){return H.kw("_$dart_js")})
u($,"n0","kF",function(){return H.aq(H.hV({
toString:function(){return"$receiver$"}}))})
u($,"n1","kG",function(){return H.aq(H.hV({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"n2","kH",function(){return H.aq(H.hV(null))})
u($,"n3","kI",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n6","kL",function(){return H.aq(H.hV(void 0))})
u($,"n7","kM",function(){return H.aq(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"n5","kK",function(){return H.aq(H.kh(null))})
u($,"n4","kJ",function(){return H.aq(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n9","kO",function(){return H.aq(H.kh(void 0))})
u($,"n8","kN",function(){return H.aq(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nm","jO",function(){return P.lH()})
u($,"np","kT",function(){return P.lw("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"nn","kS",function(){return P.k_(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.n)})
u($,"ng","kR",function(){return Z.ac(0)})
u($,"na","kP",function(){return Z.ac(511)})
u($,"ni","aQ",function(){return Z.ac(1)})
u($,"nh","aP",function(){return Z.ac(2)})
u($,"nc","aO",function(){return Z.ac(4)})
u($,"nj","aR",function(){return Z.ac(8)})
u($,"nk","be",function(){return Z.ac(16)})
u($,"nd","cq",function(){return Z.ac(32)})
u($,"ne","cr",function(){return Z.ac(64)})
u($,"nf","kQ",function(){return Z.ac(96)})
u($,"nl","bD",function(){return Z.ac(128)})
u($,"nb","aN",function(){return Z.ac(256)})
u($,"mY","kD",function(){return new V.f0(1e-9)})
u($,"mX","A",function(){return $.kD()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bW,ArrayBufferView:H.bW,Float32Array:H.bV,Float64Array:H.bV,Int16Array:H.fU,Int32Array:H.fV,Int8Array:H.fW,Uint16Array:H.fX,Uint32Array:H.fY,Uint8ClampedArray:H.cZ,CanvasPixelArray:H.cZ,Uint8Array:H.fZ,HTMLAudioElement:W.o,HTMLBRElement:W.o,HTMLBaseElement:W.o,HTMLButtonElement:W.o,HTMLContentElement:W.o,HTMLDListElement:W.o,HTMLDataElement:W.o,HTMLDataListElement:W.o,HTMLDetailsElement:W.o,HTMLDialogElement:W.o,HTMLEmbedElement:W.o,HTMLFieldSetElement:W.o,HTMLHRElement:W.o,HTMLHeadElement:W.o,HTMLHeadingElement:W.o,HTMLHtmlElement:W.o,HTMLIFrameElement:W.o,HTMLInputElement:W.o,HTMLLIElement:W.o,HTMLLabelElement:W.o,HTMLLegendElement:W.o,HTMLLinkElement:W.o,HTMLMapElement:W.o,HTMLMediaElement:W.o,HTMLMenuElement:W.o,HTMLMetaElement:W.o,HTMLMeterElement:W.o,HTMLModElement:W.o,HTMLOListElement:W.o,HTMLObjectElement:W.o,HTMLOptGroupElement:W.o,HTMLOptionElement:W.o,HTMLOutputElement:W.o,HTMLParagraphElement:W.o,HTMLParamElement:W.o,HTMLPictureElement:W.o,HTMLPreElement:W.o,HTMLProgressElement:W.o,HTMLQuoteElement:W.o,HTMLScriptElement:W.o,HTMLShadowElement:W.o,HTMLSlotElement:W.o,HTMLSourceElement:W.o,HTMLSpanElement:W.o,HTMLStyleElement:W.o,HTMLTableCaptionElement:W.o,HTMLTableCellElement:W.o,HTMLTableDataCellElement:W.o,HTMLTableHeaderCellElement:W.o,HTMLTableColElement:W.o,HTMLTextAreaElement:W.o,HTMLTimeElement:W.o,HTMLTitleElement:W.o,HTMLTrackElement:W.o,HTMLUListElement:W.o,HTMLUnknownElement:W.o,HTMLVideoElement:W.o,HTMLDirectoryElement:W.o,HTMLFontElement:W.o,HTMLFrameElement:W.o,HTMLFrameSetElement:W.o,HTMLMarqueeElement:W.o,HTMLElement:W.o,AccessibleNodeList:W.ev,HTMLAnchorElement:W.ew,HTMLAreaElement:W.ex,Blob:W.cw,HTMLBodyElement:W.bg,HTMLCanvasElement:W.bh,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eM,CSSCharsetRule:W.G,CSSConditionRule:W.G,CSSFontFaceRule:W.G,CSSGroupingRule:W.G,CSSImportRule:W.G,CSSKeyframeRule:W.G,MozCSSKeyframeRule:W.G,WebKitCSSKeyframeRule:W.G,CSSKeyframesRule:W.G,MozCSSKeyframesRule:W.G,WebKitCSSKeyframesRule:W.G,CSSMediaRule:W.G,CSSNamespaceRule:W.G,CSSPageRule:W.G,CSSRule:W.G,CSSStyleRule:W.G,CSSSupportsRule:W.G,CSSViewportRule:W.G,CSSStyleDeclaration:W.bI,MSStyleCSSProperties:W.bI,CSS2Properties:W.bI,CSSImageValue:W.a8,CSSKeywordValue:W.a8,CSSNumericValue:W.a8,CSSPositionValue:W.a8,CSSResourceValue:W.a8,CSSUnitValue:W.a8,CSSURLImageValue:W.a8,CSSStyleValue:W.a8,CSSMatrixComponent:W.ai,CSSRotation:W.ai,CSSScale:W.ai,CSSSkew:W.ai,CSSTranslation:W.ai,CSSTransformComponent:W.ai,CSSTransformValue:W.eO,CSSUnparsedValue:W.eP,DataTransferItemList:W.eS,HTMLDivElement:W.ae,DOMException:W.eT,ClientRectList:W.cE,DOMRectList:W.cE,DOMRectReadOnly:W.cF,DOMStringList:W.eU,DOMTokenList:W.eV,Element:W.O,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.ax,FileList:W.f3,FileWriter:W.f4,HTMLFormElement:W.f8,Gamepad:W.ay,History:W.fe,HTMLCollection:W.bL,HTMLFormControlsCollection:W.bL,HTMLOptionsCollection:W.bL,ImageData:W.b_,HTMLImageElement:W.bM,KeyboardEvent:W.bp,Location:W.ft,MediaList:W.fN,MIDIInputMap:W.fO,MIDIOutputMap:W.fQ,MimeType:W.aA,MimeTypeArray:W.fS,PointerEvent:W.al,MouseEvent:W.al,DragEvent:W.al,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.d_,RadioNodeList:W.d_,Plugin:W.aD,PluginArray:W.h7,RTCStatsReport:W.hg,HTMLSelectElement:W.hj,SourceBuffer:W.aF,SourceBufferList:W.ht,SpeechGrammar:W.aG,SpeechGrammarList:W.hu,SpeechRecognitionResult:W.aH,Storage:W.hy,CSSStyleSheet:W.ao,StyleSheet:W.ao,HTMLTableElement:W.de,HTMLTableRowElement:W.hC,HTMLTableSectionElement:W.hD,HTMLTemplateElement:W.c1,TextTrack:W.aI,TextTrackCue:W.ap,VTTCue:W.ap,TextTrackCueList:W.hG,TextTrackList:W.hH,TimeRanges:W.hN,Touch:W.aJ,TouchEvent:W.bt,TouchList:W.hR,TrackDefaultList:W.hS,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.i6,VideoTrackList:W.il,WheelEvent:W.bc,Window:W.ca,DOMWindow:W.ca,CSSRuleList:W.iv,ClientRect:W.dz,DOMRect:W.dz,GamepadList:W.iz,NamedNodeMap:W.dS,MozNamedAttrMap:W.dS,SpeechRecognitionResultList:W.iM,StyleSheetList:W.iN,SVGLength:P.b3,SVGLengthList:P.fp,SVGNumber:P.b7,SVGNumberList:P.h2,SVGPointList:P.ha,SVGScriptElement:P.c_,SVGStringList:P.hB,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGElement:P.j,SVGTransform:P.b9,SVGTransformList:P.hT,AudioBuffer:P.ez,AudioParamMap:P.eA,AudioTrackList:P.eC,AudioContext:P.bf,webkitAudioContext:P.bf,BaseAudioContext:P.bf,OfflineAudioContext:P.h3,WebGL2RenderingContext:P.d7,SQLResultSetRowList:P.hw})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cX.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.bV.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.cY.$nativeSuperclassTag="ArrayBufferView"
W.cg.$nativeSuperclassTag="EventTarget"
W.ch.$nativeSuperclassTag="EventTarget"
W.ci.$nativeSuperclassTag="EventTarget"
W.cj.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(E.ky,[])
else E.ky([])})})()
//# sourceMappingURL=test.dart.js.map
