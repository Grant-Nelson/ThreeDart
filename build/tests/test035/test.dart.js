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
a[c]=function(){a[c]=function(){H.of(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kl"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kl(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={k2:function k2(){},
jr:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
mm:function(a,b,c,d){if(!!J.S(a).$iq)return new H.eX(a,b,[c,d])
return new H.bV(a,b,[c,d])},
kC:function(){return new P.hv("No element")},
mJ:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.w()
H.d6(a,0,u-1,b)},
d6:function(a,b,c,d){if(c-b<=32)H.mI(a,b,c,d)
else H.mH(a,b,c,d)},
mI:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.al(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.X()
q=q>0}else q=!1
if(!q)break
p=r-1
t.j(a,r,t.h(a,p))
r=p}t.j(a,r,s)}},
mH:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a_(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a_(a4+a5,2),f=g-j,e=g+j,d=J.al(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=u}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.C(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.M()
if(p<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.X()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
s=o
t=n
break}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.M()
if(l<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.X()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.X()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.M()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.j(a3,a4,d.h(a3,a2))
d.j(a3,a2,b)
a2=s+1
d.j(a3,a5,d.h(a3,a2))
d.j(a3,a2,a0)
H.d6(a3,a4,t-2,a6)
H.d6(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.C(a6.$2(d.h(a3,t),b),0);)++t
for(;J.C(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.M()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}H.d6(a3,t,s,a6)}else H.d6(a3,t,s,a6)},
N:function N(a){this.a=a},
q:function q(){},
bU:function bU(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bV:function bV(a,b,c){this.a=a
this.b=b
this.$ti=c},
eX:function eX(a,b,c){this.a=a
this.b=b
this.$ti=c},
fw:function fw(a,b){this.a=null
this.b=a
this.c=b},
is:function is(a,b,c){this.a=a
this.b=b
this.$ti=c},
it:function it(a,b){this.a=a
this.b=b},
cI:function cI(){},
i_:function i_(){},
dk:function dk(){},
m5:function(){throw H.d(P.w("Cannot modify unmodifiable Map"))},
cs:function(a){var u,t=H.oh(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
o0:function(a){return v.types[a]},
lt:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iz},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.d(H.af(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
mz:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.d(P.U(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.I(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.mq(a)+H.lf(H.cr(a),0,null)},
mq:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.N||!!n.$ibx){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cs(t.length>1&&C.a.I(t,0)===36?C.a.a6(t,1):t)},
mr:function(){if(!!self.location)return self.location.href
return},
kO:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mA:function(a){var u,t,s,r=H.c([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.af(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aD(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.d(H.af(s))}return H.kO(r)},
kP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.d(H.af(s))
if(s<0)throw H.d(H.af(s))
if(s>65535)return H.mA(a)}return H.kO(a)},
mB:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.hE()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
d1:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aD(u,10))>>>0,56320|u&1023)}}throw H.d(P.U(a,0,1114111,null,null))},
br:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
my:function(a){var u=H.br(a).getFullYear()+0
return u},
mw:function(a){var u=H.br(a).getMonth()+1
return u},
ms:function(a){var u=H.br(a).getDate()+0
return u},
mt:function(a){var u=H.br(a).getHours()+0
return u},
mv:function(a){var u=H.br(a).getMinutes()+0
return u},
mx:function(a){var u=H.br(a).getSeconds()+0
return u},
mu:function(a){var u=H.br(a).getMilliseconds()+0
return u},
h:function(a){throw H.d(H.af(a))},
b:function(a,b){if(a==null)J.ag(a)
throw H.d(H.bF(a,b))},
bF:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.am(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.h(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.d2(b,s)},
nV:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bs(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bs(a,c,!0,b,"end",u)
return new P.am(!0,b,"end",null)},
af:function(a){return new P.am(!0,a,null,null)},
d:function(a){var u
if(a==null)a=new P.cZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lA})
u.name=""}else u.toString=H.lA
return u},
lA:function(){return J.a7(this.dartException)},
p:function(a){throw H.d(a)},
m:function(a){throw H.d(P.bj(a))},
aE:function(a){var u,t,s,r,q,p
a=H.lx(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.c([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hN(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hO:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kX:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
kK:function(a,b){return new H.h_(a,b==null?null:b.method)},
k3:function(a,b){var u=b==null,t=u?null:b.method
return new H.fi(a,t,u?null:b.receiver)},
bc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jN(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aD(t,16)&8191)===10)switch(s){case 438:return f.$1(H.k3(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.kK(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lD()
q=$.lE()
p=$.lF()
o=$.lG()
n=$.lJ()
m=$.lK()
l=$.lI()
$.lH()
k=$.lM()
j=$.lL()
i=r.a9(u)
if(i!=null)return f.$1(H.k3(u,i))
else{i=q.a9(u)
if(i!=null){i.method="call"
return f.$1(H.k3(u,i))}else{i=p.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=n.a9(u)
if(i==null){i=m.a9(u)
if(i==null){i=l.a9(u)
if(i==null){i=o.a9(u)
if(i==null){i=k.a9(u)
if(i==null){i=j.a9(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.kK(u,i))}}return f.$1(new H.hZ(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d8()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.am(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d8()
return a},
kn:function(a){var u
if(a==null)return new H.e0(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e0(a)},
nZ:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
o5:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.d(P.t("Unsupported number of arguments for wrapped closure"))},
bE:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.o5)
a.$identity=u
return u},
m4:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hw().constructor.prototype):Object.create(new H.bJ(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.an
if(typeof t!=="number")return t.v()
$.an=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kA(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.m0(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kA(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
m0:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.o0,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ky:H.jT
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.d("Error in functionType of tearoff")},
m1:function(a,b,c,d){var u=H.jT
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kA:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.m3(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.m1(t,!r,u,b)
if(t===0){r=$.an
if(typeof r!=="number")return r.v()
$.an=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eD("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.an
if(typeof r!=="number")return r.v()
$.an=r+1
o+=r
r="return function("+o+"){return this."
q=$.bK
return new Function(r+H.e(q==null?$.bK=H.eD("self"):q)+"."+H.e(u)+"("+o+");}")()},
m2:function(a,b,c,d){var u=H.jT,t=H.ky
switch(b?-1:a){case 0:throw H.d(H.mF("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
m3:function(a,b){var u,t,s,r,q,p,o,n=$.bK
if(n==null)n=$.bK=H.eD("self")
u=$.kx
if(u==null)u=$.kx=H.eD("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.m2(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.an
if(typeof u!=="number")return u.v()
$.an=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.an
if(typeof u!=="number")return u.v()
$.an=u+1
return new Function(n+u+"}")()},
kl:function(a,b,c,d,e,f,g){return H.m4(a,b,c,d,!!e,!!f,g)},
jT:function(a){return a.a},
ky:function(a){return a.c},
eD:function(a){var u,t,s,r=new H.bJ("self","target","receiver","name"),q=J.k0(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oa:function(a,b){throw H.d(H.m_(a,H.cs(b.substring(2))))},
o:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.oa(a,b)},
nX:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
m_:function(a,b){return new H.eE("CastError: "+P.jY(a)+": type '"+H.e(H.nP(a))+"' is not a subtype of type '"+b+"'")},
nP:function(a){var u,t=J.S(a)
if(!!t.$ibL){u=H.nX(t)
if(u!=null)return H.ob(u)
return"Closure"}return H.c3(a)},
of:function(a){throw H.d(new P.eQ(a))},
mF:function(a){return new H.hg(a)},
lr:function(a){return v.getIsolateTag(a)},
c:function(a,b){a.$ti=b
return a},
cr:function(a){if(a==null)return
return a.$ti},
oQ:function(a,b,c){return H.jK(a["$a"+H.e(c)],H.cr(b))},
o_:function(a,b,c,d){var u=H.jK(a["$a"+H.e(c)],H.cr(b))
return u==null?null:u[d]},
jo:function(a,b,c){var u=H.jK(a["$a"+H.e(b)],H.cr(a))
return u==null?null:u[c]},
bb:function(a,b){var u=H.cr(a)
return u==null?null:u[b]},
ob:function(a){return H.b9(a,null)},
b9:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cs(a[0].name)+H.lf(a,1,b)
if(typeof a=="function")return H.cs(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.e(b[t])}if('func' in a)return H.nk(a,b)
if('futureOr' in a)return"FutureOr<"+H.b9("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
nk:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.c([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.v(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.b9(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b9(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b9(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b9(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nY(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b9(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
lf:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.Q("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b9(p,c)}return"<"+u.i(0)+">"},
jK:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
oO:function(a,b,c){return a.apply(b,H.jK(J.S(b)["$a"+H.e(c)],H.cr(b)))},
oP:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
o7:function(a){var u,t,s,r,q=$.ls.$1(a),p=$.jl[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jv[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.lk.$2(a,q)
if(q!=null){p=$.jl[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jv[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jG(u)
$.jl[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jv[q]=u
return u}if(s==="-"){r=H.jG(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.lv(a,u)
if(s==="*")throw H.d(P.hY(q))
if(v.leafTags[q]===true){r=H.jG(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.lv(a,u)},
lv:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.kp(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jG:function(a){return J.kp(a,!1,null,!!a.$iz)},
o8:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jG(u)
else return J.kp(u,c,null,null)},
o3:function(){if(!0===$.ko)return
$.ko=!0
H.o4()},
o4:function(){var u,t,s,r,q,p,o,n
$.jl=Object.create(null)
$.jv=Object.create(null)
H.o2()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.lw.$1(q)
if(p!=null){o=H.o8(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
o2:function(){var u,t,s,r,q,p,o=C.E()
o=H.bD(C.F,H.bD(C.G,H.bD(C.t,H.bD(C.t,H.bD(C.H,H.bD(C.I,H.bD(C.J(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ls=new H.js(r)
$.lk=new H.jt(q)
$.lw=new H.ju(p)},
bD:function(a,b){return a(b)||b},
mf:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.d(P.O("Illegal RegExp pattern ("+String(p)+")",a,null))},
ly:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nW:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lx:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lz:function(a,b,c){var u=H.oe(a,b,c)
return u},
oe:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lx(b),'g'),H.nW(c))},
eJ:function eJ(){},
eK:function eK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hN:function hN(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h_:function h_(a,b){this.a=a
this.b=b},
fi:function fi(a,b,c){this.a=a
this.b=b
this.c=c},
hZ:function hZ(a){this.a=a},
jN:function jN(a){this.a=a},
e0:function e0(a){this.a=a
this.b=null},
bL:function bL(){},
hC:function hC(){},
hw:function hw(){},
bJ:function bJ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eE:function eE(a){this.a=a},
hg:function hg(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fh:function fh(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b
this.c=null},
fn:function fn(a,b){this.a=a
this.$ti=b},
fo:function fo(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
ju:function ju(a){this.a=a},
fg:function fg(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bB:function(a){return a},
mp:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.d(H.bF(b,a))},
ni:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.d(H.nV(a,b,c))
return b},
bZ:function bZ(){},
b1:function b1(){},
cV:function cV(){},
c_:function c_(){},
cW:function cW(){},
fU:function fU(){},
fV:function fV(){},
fW:function fW(){},
fX:function fX(){},
fY:function fY(){},
cX:function cX(){},
c0:function c0(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
nY:function(a){return J.kD(a?Object.keys(a):[],null)},
oh:function(a){return v.mangledGlobalNames[a]},
o9:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
kp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jn:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.ko==null){H.o3()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.d(P.hY("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kr()]
if(r!=null)return r
r=H.o7(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.y
if(u===Object.prototype)return C.y
if(typeof s=="function"){Object.defineProperty(s,$.kr(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
mc:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.d(P.jS(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.d(P.U(a,0,4294967295,"length",null))
return J.kD(new Array(a),b)},
kD:function(a,b){return J.k0(H.c(a,[b]))},
k0:function(a){a.fixed$length=Array
return a},
md:function(a,b){return J.cv(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cL.prototype
return J.ff.prototype}if(typeof a=="string")return J.b_.prototype
if(a==null)return J.cM.prototype
if(typeof a=="boolean")return J.fe.prototype
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.jn(a)},
al:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.jn(a)},
jm:function(a){if(a==null)return a
if(a.constructor==Array)return J.aZ.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.jn(a)},
lq:function(a){if(typeof a=="number")return J.bS.prototype
if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bx.prototype
return a},
km:function(a){if(typeof a=="string")return J.b_.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bx.prototype
return a},
em:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b0.prototype
return a}if(a instanceof P.a_)return a
return J.jn(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).n(a,b)},
kt:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.lq(a).m(a,b)},
bI:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lt(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.al(a).h(a,b)},
jP:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lt(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jm(a).j(a,b,c)},
lU:function(a,b){return J.km(a).I(a,b)},
lV:function(a,b,c){return J.em(a).fg(a,b,c)},
lW:function(a,b,c,d){return J.em(a).fB(a,b,c,d)},
lX:function(a,b){return J.km(a).S(a,b)},
cv:function(a,b){return J.lq(a).aH(a,b)},
jQ:function(a,b){return J.al(a).T(a,b)},
jR:function(a,b){return J.jm(a).J(a,b)},
lY:function(a,b,c,d){return J.em(a).fY(a,b,c,d)},
ku:function(a,b){return J.jm(a).G(a,b)},
kv:function(a){return J.em(a).gbJ(a)},
cw:function(a){return J.S(a).gH(a)},
aT:function(a){return J.jm(a).gV(a)},
ag:function(a){return J.al(a).gk(a)},
lZ:function(a,b){return J.em(a).ht(a,b)},
a7:function(a){return J.S(a).i(a)},
a:function a(){},
fe:function fe(){},
cM:function cM(){},
cN:function cN(){},
h3:function h3(){},
bx:function bx(){},
b0:function b0(){},
aZ:function aZ(a){this.$ti=a},
k1:function k1(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bS:function bS(){},
cL:function cL(){},
ff:function ff(){},
b_:function b_(){}},P={
mV:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bE(new P.iv(s),1)).observe(u,{childList:true})
return new P.iu(s,u,t)}else if(self.setImmediate!=null)return P.nR()
return P.nS()},
mW:function(a){self.scheduleImmediate(H.bE(new P.iw(a),0))},
mX:function(a){self.setImmediate(H.bE(new P.ix(a),0))},
mY:function(a){P.k8(C.n,a)},
k8:function(a,b){var u=C.c.a_(a.a,1000)
return P.n2(u<0?0:u,b)},
kW:function(a,b){var u=C.c.a_(a.a,1000)
return P.n3(u<0?0:u,b)},
n2:function(a,b){var u=new P.e6()
u.e1(a,b)
return u},
n3:function(a,b){var u=new P.e6()
u.e2(a,b)
return u},
oL:function(a){return new P.by(a,1)},
mZ:function(){return C.X},
n_:function(a){return new P.by(a,3)},
nn:function(a,b){return new P.iV(a,[b])},
nJ:function(){var u,t
for(;u=$.bC,u!=null;){$.cq=null
t=u.b
$.bC=t
if(t==null)$.cp=null
u.a.$0()}},
nO:function(){$.kj=!0
try{P.nJ()}finally{$.cq=null
$.kj=!1
if($.bC!=null)$.ks().$1(P.ll())}},
nM:function(a){var u=new P.dt(a)
if($.bC==null){$.bC=$.cp=u
if(!$.kj)$.ks().$1(P.ll())}else $.cp=$.cp.b=u},
nN:function(a){var u,t,s=$.bC
if(s==null){P.nM(a)
$.cq=$.cp
return}u=new P.dt(a)
t=$.cq
if(t==null){u.b=s
$.bC=$.cq=u}else{u.b=t.b
$.cq=t.b=u
if(u.b==null)$.cp=u}},
kV:function(a,b){var u=$.ak
if(u===C.f)return P.k8(a,b)
return P.k8(a,u.fG(b))},
mM:function(a,b){var u=$.ak
if(u===C.f)return P.kW(a,b)
return P.kW(a,u.cW(b,P.de))},
lg:function(a,b,c,d,e){var u={}
u.a=d
P.nN(new P.je(u,e))},
nK:function(a,b,c,d){var u,t=$.ak
if(t===c)return d.$0()
$.ak=c
u=t
try{t=d.$0()
return t}finally{$.ak=u}},
nL:function(a,b,c,d,e){var u,t=$.ak
if(t===c)return d.$1(e)
$.ak=c
u=t
try{t=d.$1(e)
return t}finally{$.ak=u}},
iv:function iv(a){this.a=a},
iu:function iu(a,b,c){this.a=a
this.b=b
this.c=c},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
e6:function e6(){this.c=0},
iX:function iX(a,b){this.a=a
this.b=b},
iW:function iW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
by:function by(a,b){this.a=a
this.b=b},
ck:function ck(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iV:function iV(a,b){this.a=a
this.$ti=b},
dt:function dt(a){this.a=a
this.b=null},
db:function db(){},
hz:function hz(){},
de:function de(){},
j5:function j5(){},
je:function je(a,b){this.a=a
this.b=b},
iK:function iK(){},
iL:function iL(a,b){this.a=a
this.b=b},
iM:function iM(a,b,c){this.a=a
this.b=b
this.c=c},
mh:function(a,b){return new H.G([a,b])},
kE:function(a,b){return new H.G([a,b])},
mj:function(a){return H.nZ(a,new H.G([null,null]))},
kF:function(a){return new P.iH([a])},
ke:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
n1:function(a,b){var u=new P.dJ(a,b)
u.c=a.e
return u},
mb:function(a,b,c){var u,t
if(P.kk(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.c([],[P.n])
$.a5.push(a)
try{P.nm(a,u)}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=P.kT(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
k_:function(a,b,c){var u,t
if(P.kk(a))return b+"..."+c
u=new P.Q(b)
$.a5.push(a)
try{t=u
t.a=P.kT(t.a,a,", ")}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kk:function(a){var u,t
for(u=$.a5.length,t=0;t<u;++t)if(a===$.a5[t])return!0
return!1},
nm:function(a,b){var u,t,s,r,q,p,o,n=a.gV(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.A())return
u=H.e(n.gK(n))
b.push(u)
m+=u.length+2;++l}if(!n.A()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.A()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.A();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
mi:function(a,b,c){var u=P.mh(b,c)
a.G(0,new P.fp(u))
return u},
k5:function(a){var u,t={}
if(P.kk(a))return"{...}"
u=new P.Q("")
try{$.a5.push(a)
u.a+="{"
t.a=!0
J.ku(a,new P.fu(t,u))
u.a+="}"}finally{if(0>=$.a5.length)return H.b($.a5,-1)
$.a5.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iH:function iH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iI:function iI(a){this.a=a
this.c=this.b=null},
dJ:function dJ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fc:function fc(){},
fp:function fp(a){this.a=a},
fq:function fq(){},
v:function v(){},
ft:function ft(){},
fu:function fu(a,b){this.a=a
this.b=b},
a1:function a1(){},
iY:function iY(){},
fv:function fv(){},
dl:function dl(a,b){this.a=a
this.$ti=b},
iN:function iN(){},
dK:function dK(){},
eb:function eb(){},
mP:function(a,b,c,d){if(b instanceof Uint8Array)return P.mQ(!1,b,c,d)
return},
mQ:function(a,b,c,d){var u,t,s=$.lN()
if(s==null)return
u=0===c
if(u&&!0)return P.kb(s,b)
t=b.length
d=P.aM(c,d,t)
if(u&&d===t)return P.kb(s,b)
return P.kb(s,b.subarray(c,d))},
kb:function(a,b){if(P.mS(b))return
return P.mT(a,b)},
mT:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.bc(t)}return},
mS:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
mR:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.bc(t)}return},
li:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.h(c)
u=J.al(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a2()
if((s&127)!==s)return t-b}return c-b},
kw:function(a,b,c,d,e,f){if(C.c.b1(f,4)!==0)throw H.d(P.O("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.d(P.O("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.d(P.O("Invalid base64 padding, more than two '=' characters",a,b))},
eA:function eA(){},
eB:function eB(){},
eG:function eG(){},
eL:function eL(){},
eY:function eY(){},
i7:function i7(){},
i9:function i9(){},
j4:function j4(a){this.b=0
this.c=a},
i8:function i8(a){this.a=a},
j3:function j3(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
en:function(a,b,c){var u=H.mz(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.d(P.O(a,null,null))},
m8:function(a){if(a instanceof H.bL)return a.i(0)
return"Instance of '"+H.e(H.c3(a))+"'"},
mk:function(a,b,c){var u,t,s=J.mc(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
k4:function(a,b,c){var u,t=H.c([],[c])
for(u=J.aT(a);u.A();)t.push(u.gK(u))
if(b)return t
return J.k0(t)},
c5:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aM(b,c,u)
if(b<=0){if(typeof c!=="number")return c.M()
t=c<u}else t=!0
return H.kP(t?C.b.dN(a,b,c):a)}if(!!J.S(a).$ic0)return H.mB(a,b,P.aM(b,c,a.length))
return P.mK(a,b,c)},
mK:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.d(P.U(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.d(P.U(c,b,J.ag(a),q,q))
t=J.aT(a)
for(s=0;s<b;++s)if(!t.A())throw H.d(P.U(b,0,s,q,q))
r=[]
if(u)for(;t.A();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.A())throw H.d(P.U(c,b,s,q,q))
r.push(t.gK(t))}return H.kP(r)},
mD:function(a){return new H.fg(a,H.mf(a,!1,!0,!1,!1,!1))},
kT:function(a,b,c){var u=J.aT(b)
if(!u.A())return a
if(c.length===0){do a+=H.e(u.gK(u))
while(u.A())}else{a+=H.e(u.gK(u))
for(;u.A();)a=a+c+H.e(u.gK(u))}return a},
kZ:function(){var u=H.mr()
if(u!=null)return P.mO(u)
throw H.d(P.w("'Uri.base' is not supported"))},
j2:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lS().b
if(typeof b!=="string")H.p(H.af(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfX().bL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.d1(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
m6:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
m7:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cD:function(a){if(a>=10)return""+a
return"0"+a},
kB:function(a){return new P.aW(1000*a)},
jY:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.m8(a)},
et:function(a){return new P.am(!1,null,null,a)},
jS:function(a,b,c){return new P.am(!0,a,b,c)},
d2:function(a,b){return new P.bs(null,null,!0,a,b,"Value not in range")},
U:function(a,b,c,d,e){return new P.bs(b,c,!0,a,d,"Invalid value")},
aM:function(a,b,c){var u
if(typeof a!=="number")return H.h(a)
if(0<=a){if(typeof c!=="number")return H.h(c)
u=a>c}else u=!0
if(u)throw H.d(P.U(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.h(c)
u=b>c}else u=!0
if(u)throw H.d(P.U(b,a,c,"end",null))
return b}return c},
kQ:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.d(P.U(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fb(u,!0,a,c,"Index out of range")},
w:function(a){return new P.i0(a)},
hY:function(a){return new P.hX(a)},
bj:function(a){return new P.eI(a)},
t:function(a){return new P.dC(a)},
O:function(a,b,c){return new P.f8(a,b,c)},
ml:function(a,b,c){var u,t,s=H.c([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
kq:function(a){H.o9(a)},
mO:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.I(a,4)^58)*3|C.a.I(a,0)^100|C.a.I(a,1)^97|C.a.I(a,2)^116|C.a.I(a,3)^97)>>>0
if(u===0)return P.kY(e<e?C.a.q(a,0,e):a,5,f).gdG()
else if(u===32)return P.kY(C.a.q(a,5,e),0,f).gdG()}t=new Array(8)
t.fixed$length=Array
s=H.c(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.lh(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hD()
if(r>=0)if(P.lh(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.v()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.M()
if(typeof n!=="number")return H.h(n)
if(m<n)n=m
if(typeof o!=="number")return o.M()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.M()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.M()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a0(a,"..",o)))j=n>o+2&&C.a.a0(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a0(a,"file",0)){if(q<=0){if(!C.a.a0(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.q(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aL(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a0(a,"http",0)){if(t&&p+3===o&&C.a.a0(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aL(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a0(a,"https",0)){if(t&&p+4===o&&C.a.a0(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aL(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.q(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iO(a,r,q,p,o,n,m,k)}return P.n4(a,0,e,r,q,p,o,n,m,k)},
l0:function(a){var u=P.n
return C.b.h1(H.c(a.split("&"),[u]),P.kE(u,u),new P.i5(C.e))},
mN:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.i2(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.S(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.en(C.a.q(a,s,t),n,n)
if(typeof p!=="number")return p.X()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.en(C.a.q(a,s,c),n,n)
if(typeof p!=="number")return p.X()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
l_:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.i3(a),d=new P.i4(e,a)
if(a.length<2)e.$1("address is too short")
u=H.c([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.S(a,t)
if(p===58){if(t===b){++t
if(C.a.S(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gat(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mN(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aD(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
n4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.nc(a,b,d)
else{if(d===b)P.bA(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.nd(a,u,e-1):""
s=P.n9(a,e,f,!1)
if(typeof f!=="number")return f.v()
r=f+1
if(typeof g!=="number")return H.h(g)
q=r<g?P.nb(P.en(C.a.q(a,r,g),new P.iZ(a,f),n),j):n}else{q=n
s=q
t=""}p=P.na(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.kg(a,h+1,i,n):n
return new P.bz(j,t,s,q,p,o,i<c?P.n8(a,i+1,c):n)},
l9:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bA:function(a,b,c){throw H.d(P.O(c,a,b))},
nb:function(a,b){if(a!=null&&a===P.l9(b))return
return a},
n9:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.S(a,b)===91){if(typeof c!=="number")return c.w()
u=c-1
if(C.a.S(a,u)!==93)P.bA(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.n6(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.le(a,C.a.a0(a,"25",r)?s+3:r,u,"%25")}else q=""
P.l_(a,t,s)
return C.a.q(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.h(c)
p=b
for(;p<c;++p)if(C.a.S(a,p)===58){s=C.a.b9(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.le(a,C.a.a0(a,"25",r)?s+3:r,c,"%25")}else q=""
P.l_(a,b,s)
return"["+C.a.q(a,b,s)+q+"]"}return P.nf(a,b,c)},
n6:function(a,b,c){var u,t=C.a.b9(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.h(c)
u=t<c}else u=!1
return u?t:c},
le:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.Q(d):null
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.S(a,u)
if(r===37){q=P.kh(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.Q("")
o=l.a+=C.a.q(a,t,u)
if(p)q=C.a.q(a,u,u+3)
else if(q==="%")P.bA(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.Q("")
if(t<u){l.a+=C.a.q(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.S(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.Q("")
l.a+=C.a.q(a,t,u)
l.a+=P.kf(r)
u+=m
t=u}}}if(l==null)return C.a.q(a,b,c)
if(t<c)l.a+=C.a.q(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
nf:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.S(a,u)
if(q===37){p=P.kh(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.q(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.v,o)
o=(C.v[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.Q("")
if(t<u){s.a+=C.a.q(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.j,o)
o=(C.j[o]&1<<(q&15))!==0}else o=!1
if(o)P.bA(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.S(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.Q("")
n=C.a.q(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kf(q)
u+=l
t=u}}}}if(s==null)return C.a.q(a,b,c)
if(t<c){n=C.a.q(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
nc:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lb(C.a.I(a,b)))P.bA(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.l,r)
r=(C.l[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bA(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.q(a,b,c)
return P.n5(t?a.toLowerCase():a)},
n5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
nd:function(a,b,c){return P.cn(a,b,c,C.Q,!1)},
na:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cn(a,b,c,C.w,!0):C.i.i_(d,new P.j_(),P.n).p(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a5(u,"/"))u="/"+u
return P.ne(u,e,f)},
ne:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a5(a,"/"))return P.ng(a,!u||c)
return P.nh(a)},
kg:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.d(P.et("Both query and queryParameters specified"))
return P.cn(a,b,c,C.k,!0)}if(d==null)return
u=new P.Q("")
t.a=""
d.G(0,new P.j0(new P.j1(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
n8:function(a,b,c){return P.cn(a,b,c,C.k,!0)},
kh:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.S(a,b+1)
t=C.a.S(a,p)
s=H.jr(u)
r=H.jr(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aD(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.d1(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.q(a,b,b+3).toUpperCase()
return},
kf:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.c(u,[P.u])
t[0]=37
t[1]=C.a.I(m,a>>>4)
t[2]=C.a.I(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.c(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fp(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.I(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.I(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.c5(t,0,null)},
cn:function(a,b,c,d,e){var u=P.ld(a,b,c,d,e)
return u==null?C.a.q(a,b,c):u},
ld:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.h(c)
if(!(o<c))break
c$0:{u=C.a.S(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kh(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.j,t)
t=(C.j[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bA(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.S(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kf(u)}}if(m==null)m=new P.Q("")
m.a+=C.a.q(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.h(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.a.q(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
lc:function(a){if(C.a.a5(a,"."))return!0
return C.a.de(a,"/.")!==-1},
nh:function(a){var u,t,s,r,q,p,o
if(!P.lc(a))return a
u=H.c([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.p(u,"/")},
ng:function(a,b){var u,t,s,r,q,p
if(!P.lc(a))return!b?P.la(a):a
u=H.c([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gat(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gat(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.la(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.p(u,"/")},
la:function(a){var u,t,s,r=a.length
if(r>=2&&P.lb(J.lU(a,0)))for(u=1;u<r;++u){t=C.a.I(a,u)
if(t===58)return C.a.q(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.l,s)
s=(C.l[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
n7:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.d(P.et("Invalid URL encoding"))}}return u},
ki:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.I(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.q(a,b,c)
else r=new H.N(C.a.q(a,b,c))}else{r=H.c([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.I(a,q)
if(t>127)throw H.d(P.et("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.d(P.et("Truncated URI"))
r.push(P.n7(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.i8(!1).bL(r)},
lb:function(a){var u=a|32
return 97<=u&&u<=122},
kY:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.c([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.I(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.d(P.O(m,a,t))}}if(s<0&&t>b)throw H.d(P.O(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.I(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gat(l)
if(r!==44||t!==p+7||!C.a.a0(a,"base64",p+1))throw H.d(P.O("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.D.h9(0,a,o,u)
else{n=P.ld(a,o,u,C.k,!0)
if(n!=null)a=C.a.aL(a,o,u,n)}return new P.i1(a,l,c)},
nj:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ml(22,new P.j9(),P.bu),n=new P.j8(o),m=new P.ja(),l=new P.jb(),k=n.$2(0,225)
m.$3(k,u,1)
m.$3(k,t,14)
m.$3(k,s,34)
m.$3(k,r,3)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(14,225)
m.$3(k,u,1)
m.$3(k,t,15)
m.$3(k,s,34)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(15,225)
m.$3(k,u,1)
m.$3(k,"%",225)
m.$3(k,s,34)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(1,225)
m.$3(k,u,1)
m.$3(k,s,34)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(2,235)
m.$3(k,u,139)
m.$3(k,r,131)
m.$3(k,t,146)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(3,235)
m.$3(k,u,11)
m.$3(k,r,68)
m.$3(k,t,18)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(4,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,"[",232)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(5,229)
m.$3(k,u,5)
l.$3(k,"AZ",229)
m.$3(k,s,102)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(6,231)
l.$3(k,"19",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(7,231)
l.$3(k,"09",7)
m.$3(k,"@",68)
m.$3(k,r,138)
m.$3(k,q,172)
m.$3(k,p,205)
m.$3(n.$2(8,8),"]",5)
k=n.$2(9,235)
m.$3(k,u,11)
m.$3(k,t,16)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(16,235)
m.$3(k,u,11)
m.$3(k,t,17)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(17,235)
m.$3(k,u,11)
m.$3(k,r,9)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(10,235)
m.$3(k,u,11)
m.$3(k,t,18)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(18,235)
m.$3(k,u,11)
m.$3(k,t,19)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(19,235)
m.$3(k,u,11)
m.$3(k,r,234)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(11,235)
m.$3(k,u,11)
m.$3(k,r,10)
m.$3(k,q,172)
m.$3(k,p,205)
k=n.$2(12,236)
m.$3(k,u,12)
m.$3(k,q,12)
m.$3(k,p,205)
k=n.$2(13,237)
m.$3(k,u,13)
m.$3(k,q,13)
l.$3(n.$2(20,245),"az",21)
k=n.$2(21,245)
l.$3(k,"az",21)
l.$3(k,"09",21)
m.$3(k,"+-.",21)
return o},
lh:function(a,b,c,d,e){var u,t,s,r,q,p=$.lT()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.I(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
ba:function ba(){},
a9:function a9(a,b){this.a=a
this.b=b},
J:function J(){},
aW:function aW(a){this.a=a},
eV:function eV(){},
eW:function eW(){},
bl:function bl(){},
cZ:function cZ(){},
am:function am(a,b,c,d){var _=this
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
fb:function fb(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i0:function i0(a){this.a=a},
hX:function hX(a){this.a=a},
hv:function hv(a){this.a=a},
eI:function eI(a){this.a=a},
h2:function h2(){},
d8:function d8(){},
eQ:function eQ(a){this.a=a},
dC:function dC(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
j:function j(){},
fd:function fd(){},
r:function r(){},
P:function P(){},
b2:function b2(){},
a6:function a6(){},
a_:function a_(){},
n:function n(){},
Q:function Q(a){this.a=a},
i5:function i5(a){this.a=a},
i2:function i2(a){this.a=a},
i3:function i3(a){this.a=a},
i4:function i4(a,b){this.a=a
this.b=b},
bz:function bz(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iZ:function iZ(a,b){this.a=a
this.b=b},
j_:function j_(){},
j1:function j1(a,b){this.a=a
this.b=b},
j0:function j0(a){this.a=a},
i1:function i1(a,b,c){this.a=a
this.b=b
this.c=c},
j9:function j9(){},
j8:function j8(a){this.a=a},
ja:function ja(){},
jb:function jb(){},
iO:function iO(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iB:function iB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aO:function(a){var u,t,s,r,q
if(a==null)return
u=P.kE(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.j(0,q,a[q])}return u},
nT:function(a){var u={}
a.G(0,new P.jf(u))
return u},
iQ:function iQ(){},
iS:function iS(a,b){this.a=a
this.b=b},
iT:function iT(a,b){this.a=a
this.b=b},
jf:function jf(a){this.a=a},
iR:function iR(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
f5:function f5(){},
f6:function f6(){},
iG:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
n0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iJ:function iJ(){},
a4:function a4(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aG:function aG(){},
fk:function fk(){},
aK:function aK(){},
h0:function h0(){},
h7:function h7(){},
hA:function hA(){},
k:function k(){},
aN:function aN(){},
hM:function hM(){},
dH:function dH(){},
dI:function dI(){},
dS:function dS(){},
dT:function dT(){},
e2:function e2(){},
e3:function e3(){},
e9:function e9(){},
ea:function ea(){},
bu:function bu(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(a){this.a=a},
ey:function ey(){},
bf:function bf(){},
h1:function h1(){},
du:function du(){},
hu:function hu(){},
dZ:function dZ(){},
e_:function e_(){}},W={
kz:function(){var u=document.createElement("canvas")
return u},
jX:function(a){return"wheel"},
ma:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.bc(u)}return s},
iF:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
l8:function(a,b,c,d){var u=W.iF(W.iF(W.iF(W.iF(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.lj(new W.iD(c),W.i)
if(u!=null&&!0)J.lW(a,b,u,!1)
return new W.iC(a,b,u,!1)},
lj:function(a,b){var u=$.ak
if(u===C.f)return a
return u.cW(a,b)},
l:function l(){},
ep:function ep(){},
er:function er(){},
es:function es(){},
bg:function bg(){},
bi:function bi(){},
aU:function aU(){},
eM:function eM(){},
F:function F(){},
bM:function bM(){},
eN:function eN(){},
ac:function ac(){},
aq:function aq(){},
eO:function eO(){},
eP:function eP(){},
eR:function eR(){},
eS:function eS(){},
cF:function cF(){},
cG:function cG(){},
eT:function eT(){},
eU:function eU(){},
iz:function iz(a,b){this.a=a
this.b=b},
T:function T(){},
i:function i(){},
f:function f(){},
ah:function ah(){},
bO:function bO(){},
f3:function f3(){},
f7:function f7(){},
as:function as(){},
fa:function fa(){},
bQ:function bQ(){},
bR:function bR(){},
bp:function bp(){},
fr:function fr(){},
fN:function fN(){},
bX:function bX(){},
fO:function fO(){},
fP:function fP(a){this.a=a},
fQ:function fQ(){},
fR:function fR(a){this.a=a},
av:function av(){},
fS:function fS(){},
aw:function aw(){},
iy:function iy(a){this.a=a},
D:function D(){},
cY:function cY(){},
ax:function ax(){},
h4:function h4(){},
he:function he(){},
hf:function hf(a){this.a=a},
hh:function hh(){},
az:function az(){},
hr:function hr(){},
aA:function aA(){},
hs:function hs(){},
aB:function aB(){},
hx:function hx(){},
hy:function hy(a){this.a=a},
ai:function ai(){},
aC:function aC(){},
aj:function aj(){},
hD:function hD(){},
hE:function hE(){},
hH:function hH(){},
aD:function aD(){},
bt:function bt(){},
hK:function hK(){},
hL:function hL(){},
b4:function b4(){},
i6:function i6(){},
iq:function iq(){},
b8:function b8(){},
cd:function cd(){},
iA:function iA(){},
dw:function dw(){},
iE:function iE(){},
dP:function dP(){},
iP:function iP(){},
iU:function iU(){},
iC:function iC(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iD:function iD(a){this.a=a},
K:function K(){},
cJ:function cJ(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dv:function dv(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dL:function dL(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
dQ:function dQ(){},
dR:function dR(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
ci:function ci(){},
cj:function cj(){},
dX:function dX(){},
dY:function dY(){},
e1:function e1(){},
e4:function e4(){},
e5:function e5(){},
cl:function cl(){},
cm:function cm(){},
e7:function e7(){},
e8:function e8(){},
ec:function ec(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){}},K={
Y:function(a){var u=new K.hi()
u.dU(a)
return u},
eq:function eq(){},
cK:function cK(){},
cR:function cR(){},
aJ:function aJ(){this.a=null},
hi:function hi(){this.a=null},
lu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b="testCanvas",a=null,a0="modifiers",a1=V.mG("Test 035"),a2=W.kz()
a2.className="pageLargeCanvas"
a2.id=b
a1.a.appendChild(a2)
u=[P.n]
a1.cS(H.c(["A test of the bending a shape with the Material Light Shader. ","Not all of the shapes have predefined bend values."],u))
a1.fA(H.c(["shapes"],u))
a1.cS(H.c(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b)
if(t==null)H.p(P.t("Failed to find an element with the identifier, testCanvas."))
s=E.mL(t,!0,!0,!0,!1)
r=new E.aX()
r.a=""
r.b=!0
a1=E.aX
q=O.jV(a1)
r.y=q
q.b2(r.gha(),r.ghd())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sce(0,a)
r.saW(a)
r.saW(U.bk(a))
p=new O.cS()
q=O.jV(V.aH)
p.e=q
q.b2(p.ger(),p.geu())
q=new O.at(p,"emission")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
p.f=q
q=new O.at(p,"ambient")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
p.r=q
q=new O.at(p,"diffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
p.x=q
q=new O.at(p,"invDiffuse")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
p.y=q
q=new O.fD(p,"specular")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
q.ch=100
p.z=q
q=new O.fz(p,"bump")
q.c=new A.Z(!1,!1,!1)
p.Q=q
p.ch=null
q=new O.at(p,"reflect")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
p.cx=q
q=new O.fC(p,"refract")
q.c=new A.Z(!1,!1,!1)
q.f=new V.V(0,0,0)
q.ch=1
p.cy=q
q=new O.fy(p,"alpha")
q.c=new A.Z(!1,!1,!1)
q.f=1
p.db=q
q=new D.cP()
q.bh(D.a0)
q.e=H.c([],[D.ez])
q.f=H.c([],[D.aV])
q.r=H.c([],[D.h5])
q.x=H.c([],[D.ht])
q.z=q.y=null
q.cd(q.gep(),q.gf1(),q.gf5())
p.dx=q
o=new O.fB()
o.b=new V.ap(0,0,0,0)
o.c=1
o.d=10
o.e=!1
p.dy=o
o=q.y
q=o==null?q.y=D.I():o
q.l(0,p.gfi())
q=p.dx
o=q.z
q=o==null?q.z=D.I():o
q.l(0,p.gey())
p.fr=null
q=p.dx
n=V.kc()
o=U.bk(V.kG(V.kN(),n,new V.x(1,1,-3)))
m=new V.V(1,1,1)
l=new D.aV()
l.c=new V.V(1,1,1)
l.a=V.l5()
l.d=V.kc()
l.e=V.mU()
k=l.b
l.b=o
o.gB().l(0,l.gdX())
o=new D.A("mover",k,l.b)
o.b=!0
l.al(o)
if(!l.c.n(0,m)){k=l.c
l.c=m
o=new D.A("color",k,m)
o.b=!0
l.al(o)}q.l(0,l)
q=p.r
q.saG(0,new V.V(0,0,1))
q=p.x
q.saG(0,new V.V(0,1,0))
q=p.z
q.saG(0,new V.V(1,0,0))
q=p.z
q.cJ(new A.Z(!0,!1,!1))
q.cK(10)
p.e.l(0,V.a2())
p.e.l(0,V.a2())
p.e.l(0,V.a2())
p.e.l(0,V.a2())
p.e.l(0,V.a2())
p.e.l(0,V.a2())
p.e.l(0,V.a2())
p.e.l(0,V.a2())
j=U.jZ()
q=s.x
o=new U.dp()
l=U.jW()
l.scc(0,!0)
l.sc_(6.283185307179586)
l.sc1(0)
l.sW(0,0)
l.sc0(100)
l.sR(0)
l.sbN(0.5)
o.b=l
i=o.gaz()
l.gB().l(0,i)
l=U.jW()
l.scc(0,!0)
l.sc_(6.283185307179586)
l.sc1(0)
l.sW(0,0)
l.sc0(100)
l.sR(0)
l.sbN(0.5)
o.c=l
l.gB().l(0,i)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
h=new X.ad(!1,!1,!1)
k=o.d
o.d=h
l=new D.A(a0,k,h)
l.b=!0
o.E(l)
l=o.f
if(l!==!1){o.f=!1
l=new D.A("invertX",l,!1)
l.b=!0
o.E(l)}l=o.r
if(l!==!1){o.r=!1
l=new D.A("invertY",l,!1)
l.b=!0
o.E(l)}o.aQ(q)
j.l(0,o)
q=s.x
o=new U.dn()
l=U.jW()
l.scc(0,!0)
l.sc_(6.283185307179586)
l.sc1(0)
l.sW(0,0)
l.sc0(100)
l.sR(0)
l.sbN(0.2)
o.b=l
l.gB().l(0,o.gaz())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
h=new X.ad(!0,!1,!1)
k=o.c
o.c=h
l=new D.A(a0,k,h)
l.b=!0
o.E(l)
o.aQ(q)
j.l(0,o)
q=s.x
o=new U.dq()
o.c=0.01
o.e=o.d=0
h=new X.ad(!1,!1,!1)
o.b=h
l=new D.A(a0,a,h)
l.b=!0
o.E(l)
o.aQ(q)
j.l(0,o)
j.l(0,U.bk(V.fM(0,0,5)))
g=U.jZ()
g.l(0,U.bk(V.fM(0.5,0,0)))
g.l(0,U.c4(0,1.7,0))
g.l(0,U.c4(0.5,0,0))
g.l(0,U.bk(V.k6(0.35)))
g.l(0,U.c4(-0.5,0,0))
g.l(0,U.c4(0,-1.7,0))
g.l(0,U.bk(V.fM(-0.5,0,0)))
f=U.jZ()
f.l(0,U.c4(0,-1.4,0))
f.l(0,U.bk(V.fM(0.5,0,0)))
f.l(0,U.c4(0,1.4,0))
e=new M.cH()
e.a=!0
a1=O.jV(a1)
e.e=a1
a1.b2(e.geA(),e.geC())
e.y=e.x=e.r=e.f=null
d=X.m9(a)
c=new X.d_()
c.c=1.0471975511965976
c.d=0.1
c.e=2000
c.saW(a)
a1=c.c
if(!(Math.abs(a1-1.0471975511965976)<$.y().a)){c.c=1.0471975511965976
a1=new D.A("fov",a1,1.0471975511965976)
a1.b=!0
c.aA(a1)}a1=c.d
if(!(Math.abs(a1-0.1)<$.y().a)){c.d=0.1
a1=new D.A("near",a1,0.1)
a1.b=!0
c.aA(a1)}a1=c.e
if(!(Math.abs(a1-2000)<$.y().a)){c.e=2000
a1=new D.A("far",a1,2000)
a1.b=!0
c.aA(a1)}a1=e.b
if(a1!==c){if(a1!=null)a1.gB().L(0,e.gah())
k=e.b
e.b=c
c.gB().l(0,e.gah())
a1=new D.A("camera",k,e.b)
a1.b=!0
e.am(a1)}a1=e.c
if(a1!==d){if(a1!=null)a1.gB().L(0,e.gah())
k=e.c
e.c=d
d.gB().l(0,e.gah())
a1=new D.A("target",k,e.c)
a1.b=!0
e.am(a1)}e.sdC(a)
e.sdC(p)
e.e.l(0,r)
e.b.saW(j)
a1=e.f
if(a1==null)a1=e.f=D.I()
a1.l(0,new K.jx(g,f,p))
a1=s.d
if(a1!==e){if(a1!=null)a1.gB().L(0,s.gck())
s.d=e
e.gB().l(0,s.gck())
s.cl()}a1=new K.jF(r)
q=new V.h8("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.p("Failed to find shapes for RadioGroup")
q.cR(0,"Cuboid",new K.jy(a1),!0)
q.aE(0,"Cylinder",new K.jz(a1))
q.aE(0,"Cone",new K.jA(a1))
q.aE(0,"Sphere",new K.jB(a1))
q.aE(0,"Toroid",new K.jC(a1))
q.aE(0,"Knot",new K.jD(a1))
q.aE(0,"Grid",new K.jE(a1))
V.oc(s)},
jx:function jx(a,b,c){this.a=a
this.b=b
this.c=c},
jF:function jF(a){this.a=a},
jy:function jy(a){this.a=a},
jz:function jz(a){this.a=a},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a}},L={d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},df:function df(a,b,c){this.a=a
this.b=b
this.c=c},dg:function dg(a){this.b=a
this.c=null},hI:function hI(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a){this.b=a
this.a=this.c=null}},O={
jV:function(a){var u=new O.ao([a])
u.bh(a)
return u},
ao:function ao(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
bW:function bW(){this.b=this.a=null},
cS:function cS(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fE:function fE(a,b){this.a=a
this.b=b},
fF:function fF(){},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(){},
fI:function fI(a,b){this.a=a
this.b=b},
fJ:function fJ(){},
fK:function fK(a,b){this.a=a
this.b=b},
fL:function fL(){},
fy:function fy(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cT:function cT(){},
fz:function fz(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fB:function fB(){var _=this
_.e=_.d=_.c=_.b=null},
fC:function fC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fD:function fD(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dc:function dc(){}},E={
l6:function(){if(J.jQ(window.navigator.vendor,"Google"))return C.B
if(J.jQ(window.navigator.userAgent,"Firefox"))return C.p
var u=window.navigator.appVersion
if(J.al(u).T(u,"Trident")||C.a.T(u,"Edge"))return C.q
if(J.jQ(window.navigator.appName,"Microsoft"))return C.q
return C.C},
l7:function(){var u=window.navigator.appVersion
if(J.al(u).T(u,"Win"))return C.U
if(C.a.T(u,"Mac"))return C.x
if(C.a.T(u,"Linux"))return C.V
return C.W},
mE:function(a,b){var u=new E.ha(a)
u.dT(a,b)
return u},
mL:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibi)return E.kU(a,!0,!0,!0,!1)
u=W.kz()
t=u.style
t.width="100%"
t.height="100%"
s.gbJ(a).l(0,u)
return E.kU(u,!0,!0,!0,!1)},
kU:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dd(),o=C.m.dJ(a,"webgl2",P.mj(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.p(P.t("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.mE(o,a)
o.getParameter(3379)
o.getParameter(34076)
u=new X.dm(a)
t=new X.fj()
t.c=new X.ad(!1,!1,!1)
t.d=P.kF(P.u)
u.b=t
t=new X.fT(u)
t.f=0
t.r=V.b3()
t.x=V.b3()
t.ch=t.Q=1
u.c=t
t=new X.fs(u)
t.r=0
t.x=V.b3()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hJ(u)
t.f=V.b3()
t.r=V.b3()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.c([],[[P.db,P.a_]])
t=$.eZ
u.Q=(t==null?$.eZ=new E.dB(E.l6(),E.l7()):t).a===C.p?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.W(r,"contextmenu",u.geE(),!1))
u.z.push(W.W(a,"focus",u.geK(),!1))
u.z.push(W.W(a,"blur",u.gew(),!1))
u.z.push(W.W(r,"keyup",u.geO(),!1))
u.z.push(W.W(r,"keydown",u.geM(),!1))
u.z.push(W.W(a,"mousedown",u.geS(),!1))
u.z.push(W.W(a,"mouseup",u.geW(),!1))
u.z.push(W.W(a,q,u.geU(),!1))
s=u.z
W.jX(a)
W.jX(a)
s.push(W.W(a,W.jX(a),u.geY(),!1))
u.z.push(W.W(r,q,u.geG(),!1))
u.z.push(W.W(r,"mouseup",u.geI(),!1))
u.z.push(W.W(r,"pointerlockchange",u.gf_(),!1))
u.z.push(W.W(a,"touchstart",u.gfb(),!1))
u.z.push(W.W(a,"touchend",u.gf7(),!1))
u.z.push(W.W(a,"touchmove",u.gf9(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.a9(Date.now(),!1)
p.db=0
p.cH()
return p},
eC:function eC(){},
aX:function aX(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bh:function bh(a){this.b=a},
bq:function bq(a){this.b=a},
dB:function dB(a,b){this.a=a
this.b=b},
ha:function ha(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hb:function hb(a){this.a=a},
hc:function hc(a){this.a=a},
hd:function hd(a){this.a=a},
da:function da(a){this.c=a
this.b=null},
dd:function dd(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hG:function hG(a){this.a=a}},Z={
kd:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bB(c)),35044)
a.bindBuffer(b,null)
return new Z.ds(b,u)},
ae:function(a){return new Z.b7(a)},
ds:function ds(a,b){this.a=a
this.b=b},
cz:function cz(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ir:function ir(a){this.a=a},
cA:function cA(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bm:function bm(a,b,c){this.a=a
this.b=b
this.c=c},
b7:function b7(a){this.a=a}},D={
I:function(){var u=new D.ar()
u.d=0
return u},
eF:function eF(){},
ar:function ar(){var _=this
_.d=_.c=_.b=_.a=null},
f0:function f0(a){this.a=a},
f1:function f1(a){this.a=a},
X:function X(){this.b=null},
bn:function bn(){this.b=null},
bo:function bo(){this.b=null},
A:function A(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ez:function ez(){},
aV:function aV(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a0:function a0(){},
cP:function cP(){var _=this
_.d=_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h5:function h5(){},
ht:function ht(){}},X={cB:function cB(a,b){this.a=a
this.b=b},cO:function cO(a,b){this.a=a
this.b=b},fj:function fj(){var _=this
_.d=_.c=_.b=_.a=null},cQ:function cQ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fs:function fs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},aI:function aI(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fT:function fT(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bY:function bY(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h6:function h6(){},dh:function dh(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hJ:function hJ(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dm:function dm(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
m9:function(a){var u=new X.f9(),t=new V.ap(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.kS
if(t==null){t=V.kR(0,0,1,1)
$.kS=t}u.r=t
return u},
jU:function jU(){},
f9:function f9(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d_:function d_(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hB:function hB(){}},V={
jO:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b1(a-b,u)
return(a<0?a+u:a)+b},
B:function(a,b,c){if(a==null)return C.a.aa("null",c)
return C.a.aa(C.d.dD(Math.abs(a-0)<$.y().a?0:a,b),c+b+1)},
bG:function(a,b,c){var u,t,s,r,q,p,o=H.c([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.B(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.aa(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
a2:function(){var u=$.kJ
return u==null?$.kJ=V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
au:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
fM:function(a,b,c){return V.au(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
k6:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.au(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
kH:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.au(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
kI:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.au(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
kG:function(a,b,c){var u=c.t(0,Math.sqrt(c.C(c))),t=b.aq(u),s=t.t(0,Math.sqrt(t.C(t))),r=u.aq(s),q=new V.x(a.a,a.b,a.c),p=s.P(0).C(q),o=r.P(0).C(q),n=u.P(0).C(q)
return V.au(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b3:function(){var u=$.kM
return u==null?$.kM=new V.a3(0,0):u},
kN:function(){var u=$.ay
return u==null?$.ay=new V.M(0,0,0):u},
kR:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d3(a,b,c,d)},
cc:function(){var u=$.l4
return u==null?$.l4=new V.x(0,0,0):u},
mU:function(){var u=$.ia
return u==null?$.ia=new V.x(-1,0,0):u},
kc:function(){var u=$.ib
return u==null?$.ib=new V.x(0,1,0):u},
l5:function(){var u=$.ic
return u==null?$.ic=new V.x(0,0,1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f_:function f_(a){this.a=a},
cU:function cU(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aH:function aH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a3:function a3(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d3:function d3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
oc:function(a){P.mM(C.M,new V.jH(a))},
mG:function(a){var u=new V.hn()
u.dW(a,!0)
return u},
jH:function jH(a){this.a=a},
h8:function h8(a){this.a=a
this.c=null},
h9:function h9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hn:function hn(){this.b=this.a=null},
hp:function hp(a){this.a=a},
ho:function ho(a){this.a=a}},U={
jW:function(){var u=new U.eH()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bk:function(a){var u=new U.cC()
if(a==null)a=V.a2()
if(null!=a)u.a=a
return u},
jZ:function(){var u=new U.bP()
u.bh(U.aa)
u.b2(u.gdZ(),u.gf3())
u.e=null
u.f=V.a2()
u.r=0
return u},
c4:function(a,b,c){var u,t=new U.d4()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sdI(0)
t.sdt(0,0)
t.sdB(0)
u=t.d
if(!(Math.abs(u-c)<$.y().a)){t.d=c
u=new D.A("deltaYaw",u,c)
u.b=!0
t.E(u)}u=t.e
if(!(Math.abs(u-a)<$.y().a)){t.e=a
u=new D.A("deltaPitch",u,a)
u.b=!0
t.E(u)}u=t.f
if(!(Math.abs(u-b)<$.y().a)){t.f=b
u=new D.A("deltaRoll",u,b)
u.b=!0
t.E(u)}return t},
eH:function eH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cC:function cC(){this.b=this.a=null},
bP:function bP(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
d4:function d4(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dn:function dn(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dp:function dp(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dq:function dq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
mn:function(a,b){var u=a.aT,t=new A.fx(b,u)
t.dV(b,u)
t.dS(a,b)
return t},
mo:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gag(a2)+a3.gag(a3)+a4.gag(a4)+a5.gag(a5)+a6.gag(a6)+a7.gag(a7)+a8.gag(a8)+a9.gag(a9)+b0.gag(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.m)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.aS()
if(j){u=$.aR()
e=new Z.b7(e.a|u.a)}if(i){u=$.aQ()
e=new Z.b7(e.a|u.a)}if(h){u=$.aP()
e=new Z.b7(e.a|u.a)}return new A.fA(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
jc:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jd:function(a,b,c){var u
A.jc(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eo(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
ns:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.jc(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
no:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jd(b,t,"ambient")
b.a+="\n"},
nq:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jd(b,t,"diffuse")
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
nt:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jd(b,t,"invDiffuse")
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
nz:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jd(b,t,"specular")
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
nv:function(a,b){var u,t,s
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
nx:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.jc(b,t,"reflect")
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
ny:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.jc(b,t,"refract")
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
np:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eo(t)
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
if(typeof u!=="number")return u.a2()
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
q=H.c([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.p(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.c([],r)
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
p=H.c([],r)
if(!a.c.a)u=!1
else u=!0
if(u)p.push("diffuse(norm, normDir)")
if(!a.d.a)u=!1
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
if(!a.e.a)u=!1
else u=!0
if(u)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.p(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.p(q," + ")+");\n"
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
nr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eo(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a2()
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
o=H.c([],r)
if(!a.b.a)n=!1
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.c([],r)
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
c.a+="      highLight = intensity*("+C.b.p(m," + ")+");\n"}else c.a+="   highLight = "+C.b.p(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.p(o," + ")+");\n"
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
nw:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eo(t)
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
if(typeof u!=="number")return u.a2()
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
l=H.c([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.p(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.c([],r)
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
k=H.c([],r)
if(!a.c.a)r=!1
else r=!0
if(r)k.push("diffuse(norm, normDir)")
if(!a.d.a)r=!1
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
if(!a.e.a)r=!1
else r=!0
if(r)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.p(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.p(l," + ")+");\n"
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
nA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eo(t)
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
if(typeof u!=="number")return u.a2()
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
if(o){u=$.eZ
if(u==null)u=$.eZ=new E.dB(E.l6(),E.l7())
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
c.a=u+"\n"}u=[P.n]
j=H.c([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.p(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.c([],u)
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
i=H.c([],u)
if(!a.c.a)u=!1
else u=!0
if(u)i.push("diffuse(norm, litVec)")
if(!a.d.a)u=!1
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
if(!a.e.a)u=!1
else u=!0
if(u)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.p(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.p(j," + ")+");\n"
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
nu:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.c([],[P.n])
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
u=b.a+="   return "+C.b.p(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
nB:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.Q("")
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
A.ns(a,j)
A.no(a,j)
A.nq(a,j)
A.nt(a,j)
A.nz(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.nx(a,j)
A.ny(a,j)}A.nv(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.np(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.nr(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.nw(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.nA(a,q[o],j)
A.nu(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.c([],[P.n])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.p(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nC:function(a,b){var u,t,s
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
nE:function(a,b){var u
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
nD:function(a,b){var u
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
nG:function(a,b){var u,t
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
nH:function(a,b){var u,t
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
nF:function(a,b){var u
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
nI:function(a,b){var u
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
eo:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.a6(a,1)},
k9:function(a,b,c,d,e){var u=new A.hQ(a,c,e)
u.f=d
P.mk(d,0,P.u)
return u},
cx:function cx(a,b,c){this.a=a
this.b=b
this.c=c},
eu:function eu(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fx:function fx(a,b){var _=this
_.hM=_.hL=_.b8=_.aT=_.b7=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.hZ=_.hY=_.hX=_.bV=_.bU=_.bT=_.bS=_.bR=_.bQ=_.bP=_.bO=_.hW=_.hV=_.d6=_.hU=_.hT=_.d5=_.d4=_.hS=_.hR=_.d3=_.d2=_.hQ=_.hP=_.d1=_.hO=_.hN=_.d0=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cy:function cy(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
d7:function d7(a,b){this.a=a
this.b=b},
fA:function fA(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aT=b4
_.b8=b5},
c7:function c7(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
c8:function c8(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ca:function ca(a,b,c,d,e,f,g,h,i,j){var _=this
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
cb:function cb(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d5:function d5(){},
dj:function dj(){},
hV:function hV(a){this.a=a},
b5:function b5(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
R:function R(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
c6:function c6(a,b,c){this.a=a
this.c=b
this.d=c},
hW:function hW(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
ab:function ab(a,b,c){this.a=a
this.c=b
this.d=c},
bv:function bv(a,b,c){this.a=a
this.c=b
this.d=c},
bw:function bw(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lm:function(a,b,c){var u=null,t=F.k7()
F.co(t,u,b,c,a,1,0,0,1)
F.co(t,u,b,c,a,0,1,0,3)
F.co(t,u,b,c,a,0,0,1,2)
F.co(t,u,b,c,a,-1,0,0,0)
F.co(t,u,b,c,a,0,-1,0,0)
F.co(t,u,b,c,a,0,0,-1,3)
t.ac()
return t},
j7:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.X()
return(u>0?t+4:t)*2},
co:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.x(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.x(u+a3,t+a1,s+a2)
q=new V.x(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.x(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j7(i)
l=F.j7(h)
k=F.jL(d,a0,new F.j6(j,F.j7(g),F.j7(f),l,m,c),b)
if(k!=null)a.aV(k)},
lp:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.k7()
t=b?-1:1
s=-6.283185307179586/e
r=H.c([],[F.b6])
q=u.a
p=new V.x(0,0,t)
p=p.t(0,Math.sqrt(p.C(p)))
r.push(q.fE(new V.aL(a,-1,-1,-1),new V.ap(1,1,1,1),new V.M(0,0,c),new V.x(0,0,t),new V.a3(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.h(k)
j=new V.x(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dr(new V.aL(a,-1,-1,-1),null,new V.ap(i,g,h,1),new V.M(m*k,l*k,c),new V.x(0,0,t),new V.a3(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.l(0,f)
r.push(f)}u.d.fC(r)
return u},
ln:function(a,b,c,d){return F.nU(!0,a,b,new F.jg(1,d),c)},
nU:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.jL(c,e,new F.ji(d),null)
if(u==null)return
u.ac()
u.bE()
if(b)u.aV(F.lp(3,!1,1,new F.jj(d),e))
u.aV(F.lp(1,!0,-1,new F.jk(d),e))
return u},
od:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.jI()
t=F.lm(a,new F.jJ(s,1),b)
t.bE()
return t},
og:function(a,b){return F.lo(15,30,b,a,new F.jM())},
o6:function(a){return F.lo(12,120,a,1,new F.jw(3,2))},
lo:function(a,b,c,d,e){var u=F.jL(a,b,new F.jh(e,d,b,c),null)
if(u==null)return
u.ac()
u.bE()
return u},
o1:function(){var u,t={}
t.a=u
t.a=null
t.a=new F.jp()
return F.jL(4,4,new F.jq(t),null)},
jL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.k7()
t=H.c([],[F.b6])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dr(g,g,new V.ap(p,0,0,1),g,g,new V.a3(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.bM(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dr(g,g,new V.ap(j,i,h,1),g,g,new V.a3(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.bM(d))}}u.d.fD(a+1,b+1,t)
return u},
bN:function(a,b,c){var u=new F.aY(),t=a.a
if(t==null)H.p(P.t("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.p(P.t("May not create a face with vertices attached to different shapes."))
u.bC(a)
u.bD(b)
u.fl(c)
u.a.a.d.b.push(u)
u.a.a.Z()
return u},
mg:function(a,b){var u=new F.bT(),t=a.a
if(t==null)H.p(P.t("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.p(P.t("May not create a line with vertices attached to different shapes."))
u.bC(a)
u.bD(b)
u.a.a.c.b.push(u)
u.a.a.Z()
return u},
k7:function(){var u=new F.hj(),t=new F.id(u)
t.b=!1
t.c=H.c([],[F.b6])
u.a=t
t=new F.hm(u)
t.b=H.c([],[F.c1])
u.b=t
t=new F.hl(u)
t.b=H.c([],[F.bT])
u.c=t
t=new F.hk(u)
t.b=H.c([],[F.aY])
u.d=t
u.e=null
return u},
dr:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b6(),r=new F.im()
r.b=H.c([],[F.c1])
s.b=r
r=new F.ii()
u=[F.bT]
r.b=H.c([],u)
r.c=H.c([],u)
s.c=r
r=new F.ie()
u=[F.aY]
r.b=H.c([],u)
r.c=H.c([],u)
r.d=H.c([],u)
s.d=r
h=$.lO()
s.e=0
r=$.aS()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aR().a)!==0?e:t
s.x=(u&$.aQ().a)!==0?b:t
s.y=(u&$.bd().a)!==0?f:t
s.z=(u&$.be().a)!==0?g:t
s.Q=(u&$.lP().a)!==0?c:t
s.ch=(u&$.bH().a)!==0?i:0
s.cx=(u&$.aP().a)!==0?a:t
return s},
j6:function j6(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
jg:function jg(a,b){this.a=a
this.b=b},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jI:function jI(){},
jJ:function jJ(a,b){this.a=a
this.b=b},
jM:function jM(){},
jw:function jw(a,b){this.a=a
this.b=b},
jh:function jh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jp:function jp(){},
jq:function jq(a){this.a=a},
aY:function aY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f2:function f2(){},
hq:function hq(){},
bT:function bT(){this.b=this.a=null},
fl:function fl(){},
hP:function hP(){},
c1:function c1(){this.a=null},
hj:function hj(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hk:function hk(a){this.a=a
this.b=null},
hl:function hl(a){this.a=a
this.b=null},
hm:function hm(a){this.a=a
this.b=null},
b6:function b6(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ip:function ip(a){this.a=a},
io:function io(a){this.a=a},
id:function id(a){this.a=a
this.c=this.b=null},
ie:function ie(){this.d=this.c=this.b=null},
ig:function ig(a,b){this.a=a
this.b=b},
ih:function ih(a,b){this.a=a
this.b=b},
ii:function ii(){this.c=this.b=null},
ik:function ik(){},
ij:function ij(){},
il:function il(){},
fZ:function fZ(){},
im:function im(){this.b=null}},T={hF:function hF(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.k2.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gH:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.e(H.c3(a))+"'"}}
J.fe.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$iba:1}
J.cM.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0}}
J.cN.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$ime:1}
J.h3.prototype={}
J.bx.prototype={}
J.b0.prototype={
i:function(a){var u=a[$.lC()]
if(u==null)return this.dQ(a)
return"JavaScript function for "+H.e(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aZ.prototype={
c6:function(a,b){if(!!a.fixed$length)H.p(P.w("removeAt"))
if(b<0||b>=a.length)throw H.d(P.d2(b,null))
return a.splice(b,1)[0]},
L:function(a,b){var u
if(!!a.fixed$length)H.p(P.w("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
fz:function(a,b){var u,t
if(!!a.fixed$length)H.p(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.d(P.bj(a))}},
p:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
h6:function(a){return this.p(a,"")},
h0:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.d(P.bj(a))}return u},
h1:function(a,b,c){return this.h0(a,b,c,null)},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
dN:function(a,b,c){if(b<0||b>a.length)throw H.d(P.U(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.d(P.U(c,b,a.length,"end",null))
if(b===c)return H.c([],[H.bb(a,0)])
return H.c(a.slice(b,c),[H.bb(a,0)])},
gh_:function(a){if(a.length>0)return a[0]
throw H.d(H.kC())},
gat:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.d(H.kC())},
aN:function(a,b){if(!!a.immutable$list)H.p(P.w("sort"))
H.mJ(a,b==null?J.nl():b)},
dM:function(a){return this.aN(a,null)},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
i:function(a){return P.k_(a,"[","]")},
gV:function(a){return new J.a8(a,a.length)},
gH:function(a){return H.c2(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.p(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.d(P.jS(b,u,null))
if(b<0)throw H.d(P.U(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.d(H.bF(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.p(P.w("indexed set"))
if(b>=a.length||b<0)throw H.d(H.bF(a,b))
a[b]=c},
$iq:1,
$ij:1,
$ir:1}
J.k1.prototype={}
J.a8.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.d(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bS.prototype={
aH:function(a,b){var u
if(typeof b!=="number")throw H.d(H.af(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gba(b)
if(this.gba(a)===u)return 0
if(this.gba(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gba:function(a){return a===0?1/a<0:a<0},
d7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.d(P.w(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.d(P.w(""+a+".round()"))},
dD:function(a,b){var u
if(b>20)throw H.d(P.U(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gba(a))return"-"+u
return u},
aZ:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.d(P.U(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.S(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.p(P.w("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.m("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b1:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dR:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cM(a,b)},
a_:function(a,b){return(a|0)===a?a/b|0:this.cM(a,b)},
cM:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.d(P.w("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aD:function(a,b){var u
if(a>0)u=this.cL(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fp:function(a,b){if(b<0)throw H.d(H.af(b))
return this.cL(a,b)},
cL:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia6:1}
J.cL.prototype={$iu:1}
J.ff.prototype={}
J.b_.prototype={
S:function(a,b){if(b<0)throw H.d(H.bF(a,b))
if(b>=a.length)H.p(H.bF(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.d(H.bF(a,b))
return a.charCodeAt(b)},
v:function(a,b){if(typeof b!=="string")throw H.d(P.jS(b,null,null))
return a+b},
aL:function(a,b,c,d){var u,t
c=P.aM(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.p(H.af(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a0:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.U(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a5:function(a,b){return this.a0(a,b,0)},
q:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.p(H.af(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.d(P.d2(b,null))
if(b>c)throw H.d(P.d2(b,null))
if(c>a.length)throw H.d(P.d2(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.q(a,b,null)},
m:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.d(C.K)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aa:function(a,b){var u=b-a.length
if(u<=0)return a
return this.m(" ",u)+a},
b9:function(a,b,c){var u
if(c<0||c>a.length)throw H.d(P.U(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
de:function(a,b){return this.b9(a,b,0)},
fK:function(a,b,c){var u=a.length
if(c>u)throw H.d(P.U(c,0,u,null,null))
return H.ly(a,b,c)},
T:function(a,b){return this.fK(a,b,0)},
aH:function(a,b){var u
if(typeof b!=="string")throw H.d(H.af(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$in:1}
H.N.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.S(this.a,b)},
$aq:function(){return[P.u]},
$av:function(){return[P.u]},
$aj:function(){return[P.u]},
$ar:function(){return[P.u]}}
H.q.prototype={}
H.bU.prototype={
gK:function(a){return this.d},
A:function(){var u,t=this,s=t.a,r=J.al(s),q=r.gk(s)
if(t.b!=q)throw H.d(P.bj(s))
u=t.c
if(typeof q!=="number")return H.h(q)
if(u>=q){t.d=null
return!1}t.d=r.J(s,u);++t.c
return!0}}
H.bV.prototype={
gV:function(a){return new H.fw(J.aT(this.a),this.b)},
gk:function(a){return J.ag(this.a)},
J:function(a,b){return this.b.$1(J.jR(this.a,b))},
$aj:function(a,b){return[b]}}
H.eX.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.fw.prototype={
A:function(){var u=this,t=u.b
if(t.A()){u.a=u.c.$1(t.gK(t))
return!0}u.a=null
return!1},
gK:function(a){return this.a}}
H.is.prototype={
gV:function(a){return new H.it(J.aT(this.a),this.b)}}
H.it.prototype={
A:function(){var u,t
for(u=this.a,t=this.b;u.A();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.cI.prototype={}
H.i_.prototype={
j:function(a,b,c){throw H.d(P.w("Cannot modify an unmodifiable list"))}}
H.dk.prototype={}
H.eJ.prototype={
i:function(a){return P.k5(this)},
j:function(a,b,c){return H.m5()},
$iP:1}
H.eK.prototype={
gk:function(a){return this.a},
bK:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bK(0,b))return
return this.cu(b)},
cu:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cu(s))}}}
H.hN.prototype={
a9:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h_.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fi.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.hZ.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jN.prototype={
$1:function(a){if(!!J.S(a).$ibl)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.e0.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bL.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cs(t==null?"unknown":t)+"'"},
ghC:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hC.prototype={}
H.hw.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cs(u)+"'"}}
H.bJ.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bJ))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.cw(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c3(u))+"'")}}
H.eE.prototype={
i:function(a){return this.a}}
H.hg.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.G.prototype={
gk:function(a){return this.a},
ga8:function(a){return new H.fn(this,[H.bb(this,0)])},
ghB:function(a){var u=this
return H.mm(u.ga8(u),new H.fh(u),H.bb(u,0),H.bb(u,1))},
bK:function(a,b){var u=this.b
if(u==null)return!1
return this.ed(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b3(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b3(r,b)
s=t==null?null:t.b
return s}else return q.h4(b)},
h4:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cw(r,s.df(a))
t=s.dg(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.co(u==null?s.b=s.bv():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.co(t==null?s.c=s.bv():t,b,c)}else s.h5(b,c)},
h5:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bv()
u=r.df(a)
t=r.cw(q,u)
if(t==null)r.bA(q,u,[r.bw(a,b)])
else{s=r.dg(t,a)
if(s>=0)t[s].b=b
else t.push(r.bw(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.d(P.bj(u))
t=t.c}},
co:function(a,b,c){var u=this.b3(a,b)
if(u==null)this.bA(a,b,this.bw(b,c))
else u.b=c},
bw:function(a,b){var u=this,t=new H.fm(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
df:function(a){return J.cw(a)&0x3ffffff},
dg:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
i:function(a){return P.k5(this)},
b3:function(a,b){return a[b]},
cw:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
eg:function(a,b){delete a[b]},
ed:function(a,b){return this.b3(a,b)!=null},
bv:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bA(t,u,t)
this.eg(t,u)
return t}}
H.fh.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.bb(u,1),args:[H.bb(u,0)]}}}
H.fm.prototype={}
H.fn.prototype={
gk:function(a){return this.a.a},
gV:function(a){var u=this.a,t=new H.fo(u,u.r)
t.c=u.e
return t}}
H.fo.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bj(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.js.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.jt.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ju.prototype={
$1:function(a){return this.a(a)}}
H.fg.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imC:1}
H.bZ.prototype={$ibZ:1}
H.b1.prototype={$ib1:1}
H.cV.prototype={
gk:function(a){return a.length},
$iz:1,
$az:function(){}}
H.c_.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.J]},
$av:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]},
$ir:1,
$ar:function(){return[P.J]}}
H.cW.prototype={
j:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.u]},
$av:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$ir:1,
$ar:function(){return[P.u]}}
H.fU.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.fV.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.fW.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.fX.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.fY.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.cX.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.c0.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
$ic0:1,
$ibu:1}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
P.iv.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:15}
P.iu.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iw.prototype={
$0:function(){this.a.$0()}}
P.ix.prototype={
$0:function(){this.a.$0()}}
P.e6.prototype={
e1:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bE(new P.iX(this,b),0),a)
else throw H.d(P.w("`setTimeout()` not found."))},
e2:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bE(new P.iW(this,a,Date.now(),b),0),a)
else throw H.d(P.w("Periodic timer."))},
$ide:1}
P.iX.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iW.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dR(u,q)}s.c=r
t.d.$1(s)}}
P.by.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.ck.prototype={
gK:function(a){var u=this.c
if(u==null)return this.b
return u.gK(u)},
A:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.A())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.by){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.b(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aT(u)
if(!!r.$ick){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iV.prototype={
gV:function(a){return new P.ck(this.a())}}
P.dt.prototype={}
P.db.prototype={}
P.hz.prototype={}
P.de.prototype={}
P.j5.prototype={}
P.je.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cZ():s
s=this.b
if(s==null)throw H.d(t)
u=H.d(t)
u.stack=s.i(0)
throw u}}
P.iK.prototype={
hv:function(a){var u,t,s,r=null
try{if(C.f===$.ak){a.$0()
return}P.nK(r,r,this,a)}catch(s){u=H.bc(s)
t=H.kn(s)
P.lg(r,r,this,u,t)}},
hw:function(a,b){var u,t,s,r=null
try{if(C.f===$.ak){a.$1(b)
return}P.nL(r,r,this,a,b)}catch(s){u=H.bc(s)
t=H.kn(s)
P.lg(r,r,this,u,t)}},
hx:function(a,b){return this.hw(a,b,null)},
fG:function(a){return new P.iL(this,a)},
cW:function(a,b){return new P.iM(this,a,b)}}
P.iL.prototype={
$0:function(){return this.a.hv(this.b)}}
P.iM.prototype={
$1:function(a){return this.a.hx(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iH.prototype={
gV:function(a){var u=new P.dJ(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eb(b)
return t}},
eb:function(a){var u=this.d
if(u==null)return!1
return this.bm(this.cv(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cp(u==null?s.b=P.ke():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cp(t==null?s.c=P.ke():t,b)}else return s.e4(0,b)},
e4:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.ke()
u=s.cq(b)
t=r[u]
if(t==null)r[u]=[s.bj(b)]
else{if(s.bm(t,b)>=0)return!1
t.push(s.bj(b))}return!0},
L:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fe(this.c,b)
else return this.fd(0,b)},
fd:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cv(r,b)
t=s.bm(u,b)
if(t<0)return!1
s.cO(u.splice(t,1)[0])
return!0},
cp:function(a,b){if(a[b]!=null)return!1
a[b]=this.bj(b)
return!0},
fe:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cO(u)
delete a[b]
return!0},
cB:function(){this.r=1073741823&this.r+1},
bj:function(a){var u,t=this,s=new P.iI(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cB()
return s},
cO:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cB()},
cq:function(a){return J.cw(a)&1073741823},
cv:function(a,b){return a[this.cq(b)]},
bm:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.iI.prototype={}
P.dJ.prototype={
gK:function(a){return this.d},
A:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.d(P.bj(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fc.prototype={}
P.fp.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:3}
P.fq.prototype={$iq:1,$ij:1,$ir:1}
P.v.prototype={
gV:function(a){return new H.bU(a,this.gk(a))},
J:function(a,b){return this.h(a,b)},
hz:function(a,b){var u,t,s=this,r=H.c([],[H.o_(s,a,"v",0)])
C.b.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.h(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t;++u}return r},
hy:function(a){return this.hz(a,!0)},
fY:function(a,b,c,d){var u
P.aM(b,c,this.gk(a))
for(u=b;u<c;++u)this.j(a,u,d)},
i:function(a){return P.k_(a,"[","]")}}
P.ft.prototype={}
P.fu.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a1.prototype={
G:function(a,b){var u,t
for(u=J.aT(this.ga8(a));u.A();){t=u.gK(u)
b.$2(t,this.h(a,t))}},
gk:function(a){return J.ag(this.ga8(a))},
i:function(a){return P.k5(a)},
$iP:1}
P.iY.prototype={
j:function(a,b,c){throw H.d(P.w("Cannot modify unmodifiable map"))}}
P.fv.prototype={
h:function(a,b){return J.bI(this.a,b)},
j:function(a,b,c){J.jP(this.a,b,c)},
G:function(a,b){J.ku(this.a,b)},
gk:function(a){return J.ag(this.a)},
i:function(a){return J.a7(this.a)},
$iP:1}
P.dl.prototype={}
P.iN.prototype={
i:function(a){return P.k_(this,"{","}")},
J:function(a,b){var u,t,s
P.kQ(b,"index")
for(u=P.n1(this,this.r),t=0;u.A();){s=u.d
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
$iq:1,
$ij:1}
P.dK.prototype={}
P.eb.prototype={}
P.eA.prototype={
h9:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aM(a0,a1,b.length)
u=$.lR()
if(typeof a1!=="number")return H.h(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.I(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jr(C.a.I(b,n))
j=H.jr(C.a.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.S("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.Q("")
g=r.a+=C.a.q(b,s,t)
r.a=g+H.d1(m)
s=n
continue}}throw H.d(P.O("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.q(b,s,a1)
f=g.length
if(q>=0)P.kw(b,p,a1,q,o,f)
else{e=C.c.b1(f-1,4)+1
if(e===1)throw H.d(P.O(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aL(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kw(b,p,a1,q,o,d)
else{e=C.c.b1(d,4)
if(e===1)throw H.d(P.O(c,b,a1))
if(e>1)b=C.a.aL(b,a1,a1,e===2?"==":"=")}return b}}
P.eB.prototype={}
P.eG.prototype={}
P.eL.prototype={}
P.eY.prototype={}
P.i7.prototype={
gfX:function(){return C.L}}
P.i9.prototype={
bL:function(a){var u,t,s,r=P.aM(0,null,a.length)
if(typeof r!=="number")return r.w()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j4(t)
if(s.ei(a,0,r)!==r)s.cQ(J.lX(a,r-1),0)
return new Uint8Array(t.subarray(0,H.ni(0,s.b,t.length)))}}
P.j4.prototype={
cQ:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
if((b&64512)===56320){u=65536+((a&1023)<<10)|b&1023
t.b=q
if(r>=p)return H.b(s,r)
s[r]=240|u>>>18
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u>>>12&63
q=t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|u>>>6&63
t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|u&63
return!0}else{t.b=q
if(r>=p)return H.b(s,r)
s[r]=224|a>>>12
r=t.b=q+1
if(q>=p)return H.b(s,q)
s[q]=128|a>>>6&63
t.b=r+1
if(r>=p)return H.b(s,r)
s[r]=128|a&63
return!1}},
ei:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.S(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.I(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cQ(r,C.a.I(a,p)))s=p}else if(r<=2047){q=n.b
o=q+1
if(o>=t)break
n.b=o
if(q>=t)return H.b(u,q)
u[q]=192|r>>>6
n.b=o+1
u[o]=128|r&63}else{q=n.b
if(q+2>=t)break
o=n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=224|r>>>12
q=n.b=o+1
if(o>=t)return H.b(u,o)
u[o]=128|r>>>6&63
n.b=q+1
if(q>=t)return H.b(u,q)
u[q]=128|r&63}}return s}}
P.i8.prototype={
bL:function(a){var u,t,s,r,q,p,o,n,m=P.mP(!1,a,0,null)
if(m!=null)return m
u=P.aM(0,null,J.ag(a))
t=P.li(a,0,u)
if(t>0){s=P.c5(a,0,t)
if(t===u)return s
r=new P.Q(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.Q("")
o=new P.j3(!1,r)
o.c=p
o.fL(a,q,u)
if(o.e>0){H.p(P.O("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.d1(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.j3.prototype={
fL:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.al(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a2()
if((r&192)!==128){q=P.O(k+C.c.aZ(r,16),a,s)
throw H.d(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.u,q)
if(j<=C.u[q]){q=P.O("Overlong encoding of 0x"+C.c.aZ(j,16),a,s-h-1)
throw H.d(q)}if(j>1114111){q=P.O("Character outside valid Unicode range: 0x"+C.c.aZ(j,16),a,s-h-1)
throw H.d(q)}if(!l.c||j!==65279)t.a+=H.d1(j)
l.c=!1}if(typeof c!=="number")return H.h(c)
q=s<c
for(;q;){p=P.li(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c5(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.O("Negative UTF-8 code unit: -0x"+C.c.aZ(-r,16),a,n-1)
throw H.d(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.O(k+C.c.aZ(r,16),a,n-1)
throw H.d(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.ba.prototype={}
P.a9.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aH:function(a,b){return C.c.aH(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.aD(u,30))&1073741823},
i:function(a){var u=this,t=P.m6(H.my(u)),s=P.cD(H.mw(u)),r=P.cD(H.ms(u)),q=P.cD(H.mt(u)),p=P.cD(H.mv(u)),o=P.cD(H.mx(u)),n=P.m7(H.mu(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aW.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aW&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aH:function(a,b){return C.c.aH(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eW(),q=this.a
if(q<0)return"-"+new P.aW(0-q).i(0)
u=r.$1(C.c.a_(q,6e7)%60)
t=r.$1(C.c.a_(q,1e6)%60)
s=new P.eV().$1(q%1e6)
return""+C.c.a_(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.eV.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eW.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bl.prototype={}
P.cZ.prototype={
i:function(a){return"Throw of null."}}
P.am.prototype={
gbl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbk:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbl()+o+u
if(!q.a)return t
s=q.gbk()
r=P.jY(q.b)
return t+s+": "+r}}
P.bs.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fb.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var u,t=this.b
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.i0.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hX.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hv.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eI.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jY(u)+"."}}
P.h2.prototype={
i:function(a){return"Out of Memory"},
$ibl:1}
P.d8.prototype={
i:function(a){return"Stack Overflow"},
$ibl:1}
P.eQ.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dC.prototype={
i:function(a){return"Exception: "+this.a}}
P.f8.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.q(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.I(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.S(f,q)
if(p===10||p===13){o=q
break}}if(o-s>78)if(g-s<75){n=s+75
m=s
l=""
k="..."}else{if(o-g<75){m=o-75
n=o
k=""}else{m=g-36
n=g+36
k="..."}l="..."}else{n=o
m=s
l=""
k=""}j=C.a.q(f,m,n)
return h+l+j+k+"\n"+C.a.m(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.u.prototype={}
P.j.prototype={
gk:function(a){var u,t=this.gV(this)
for(u=0;t.A();)++u
return u},
J:function(a,b){var u,t,s
P.kQ(b,"index")
for(u=this.gV(this),t=0;u.A();){s=u.gK(u)
if(b===t)return s;++t}throw H.d(P.L(b,this,"index",null,t))},
i:function(a){return P.mb(this,"(",")")}}
P.fd.prototype={}
P.r.prototype={$iq:1,$ij:1}
P.P.prototype={}
P.b2.prototype={
gH:function(a){return P.a_.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.a6.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
n:function(a,b){return this===b},
gH:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.e(H.c3(this))+"'"},
toString:function(){return this.i(this)}}
P.n.prototype={}
P.Q.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.i5.prototype={
$2:function(a,b){var u,t,s,r=J.km(b).de(b,"=")
if(r===-1){if(b!=="")J.jP(a,P.ki(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.q(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.jP(a,P.ki(u,0,u.length,s,!0),P.ki(t,0,t.length,s,!0))}return a}}
P.i2.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv4 address, "+a,this.a,b))}}
P.i3.prototype={
$2:function(a,b){throw H.d(P.O("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.i4.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.en(C.a.q(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bz.prototype={
gdH:function(){return this.b},
gbX:function(a){var u=this.c
if(u==null)return""
if(C.a.a5(u,"["))return C.a.q(u,1,u.length-1)
return u},
gbc:function(a){var u=this.d
if(u==null)return P.l9(this.a)
return u},
gc4:function(a){var u=this.f
return u==null?"":u},
gd8:function(){var u=this.r
return u==null?"":u},
dz:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a5(u,"/"))u="/"+u
s=P.kg(null,0,0,b)
return new P.bz(q,o,m,n,u,s,r.r)},
gc5:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.n
u=this.Q=new P.dl(P.l0(t==null?"":t),[u,u])
t=u}return t},
gd9:function(){return this.c!=null},
gdd:function(){return this.f!=null},
gda:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.e(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.e(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.e(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ika)if(s.a==b.gbg())if(s.c!=null===b.gd9())if(s.b==b.gdH())if(s.gbX(s)==b.gbX(b))if(s.gbc(s)==b.gbc(b))if(s.e===b.gds(b)){u=s.f
t=u==null
if(!t===b.gdd()){if(t)u=""
if(u===b.gc4(b)){u=s.r
t=u==null
if(!t===b.gda()){if(t)u=""
u=u===b.gd8()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.i(0)):u},
$ika:1,
gbg:function(){return this.a},
gds:function(a){return this.e}}
P.iZ.prototype={
$1:function(a){throw H.d(P.O("Invalid port",this.a,this.b+1))}}
P.j_.prototype={
$1:function(a){return P.j2(C.S,a,C.e,!1)}}
P.j1.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.j2(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.j2(C.h,b,C.e,!0))}}}
P.j0.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aT(b),t=this.a;u.A();)t.$2(a,u.gK(u))}}
P.i1.prototype={
gdG:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.b9(u,"?",o)
s=u.length
if(t>=0){r=P.cn(u,t+1,s,C.k,!1)
s=t}else r=p
return q.c=new P.iB("data",p,p,p,P.cn(u,o,s,C.w,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.j9.prototype={
$1:function(a){return new Uint8Array(96)}}
P.j8.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.lY(u,0,96,b)
return u},
$S:16}
P.ja.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.I(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.jb.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.I(b,0),t=C.a.I(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iO.prototype={
gd9:function(){return this.c>0},
gdc:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.v()
t=this.e
if(typeof t!=="number")return H.h(t)
t=u+1<t
u=t}else u=!1
return u},
gdd:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gda:function(){return this.r<this.a.length},
gcz:function(){return this.b===4&&C.a.a5(this.a,"http")},
gcA:function(){return this.b===5&&C.a.a5(this.a,"https")},
gbg:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcz())q=t.x="http"
else if(t.gcA()){t.x="https"
q="https"}else if(q===4&&C.a.a5(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a5(t.a,r)){t.x=r
q=r}else{q=C.a.q(t.a,0,q)
t.x=q}return q},
gdH:function(){var u=this.c,t=this.b+3
return u>t?C.a.q(this.a,t,u-1):""},
gbX:function(a){var u=this.c
return u>0?C.a.q(this.a,u,this.d):""},
gbc:function(a){var u,t=this
if(t.gdc()){u=t.d
if(typeof u!=="number")return u.v()
return P.en(C.a.q(t.a,u+1,t.e),null,null)}if(t.gcz())return 80
if(t.gcA())return 443
return 0},
gds:function(a){return C.a.q(this.a,this.e,this.f)},
gc4:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.a.q(this.a,u+1,t):""},
gd8:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gc5:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.T
t=P.n
return new P.dl(P.l0(u.gc4(u)),[t,t])},
dz:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbg(),m=n==="file",l=p.c,k=l>0?C.a.q(p.a,p.b+3,l):"",j=p.gdc()?p.gbc(p):o
l=p.c
if(l>0)u=C.a.q(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.q(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a5(t,"/"))t="/"+t
r=P.kg(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bz(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ika&&this.a===b.i(0)},
i:function(a){return this.a},
$ika:1}
P.iB.prototype={}
W.l.prototype={}
W.ep.prototype={
gk:function(a){return a.length}}
W.er.prototype={
i:function(a){return String(a)}}
W.es.prototype={
i:function(a){return String(a)}}
W.bg.prototype={$ibg:1}
W.bi.prototype={
dJ:function(a,b,c){var u=a.getContext(b,P.nT(c))
return u},
$ibi:1}
W.aU.prototype={
gk:function(a){return a.length}}
W.eM.prototype={
gk:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bM.prototype={
gk:function(a){return a.length}}
W.eN.prototype={}
W.ac.prototype={}
W.aq.prototype={}
W.eO.prototype={
gk:function(a){return a.length}}
W.eP.prototype={
gk:function(a){return a.length}}
W.eR.prototype={
gk:function(a){return a.length}}
W.eS.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a4,P.a6]]},
$iz:1,
$az:function(){return[[P.a4,P.a6]]},
$av:function(){return[[P.a4,P.a6]]},
$ij:1,
$aj:function(){return[[P.a4,P.a6]]},
$ir:1,
$ar:function(){return[[P.a4,P.a6]]}}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gax(a))+" x "+H.e(this.gar(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia4&&a.left===u.gbb(b)&&a.top===u.gbd(b)&&this.gax(a)===u.gax(b)&&this.gar(a)===u.gar(b)},
gH:function(a){return W.l8(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gax(a)),C.d.gH(this.gar(a)))},
gcX:function(a){return a.bottom},
gar:function(a){return a.height},
gbb:function(a){return a.left},
gc9:function(a){return a.right},
gbd:function(a){return a.top},
gax:function(a){return a.width},
$ia4:1,
$aa4:function(){return[P.a6]}}
W.eT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.n]},
$iz:1,
$az:function(){return[P.n]},
$av:function(){return[P.n]},
$ij:1,
$aj:function(){return[P.n]},
$ir:1,
$ar:function(){return[P.n]}}
W.eU.prototype={
gk:function(a){return a.length}}
W.iz.prototype={
gk:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gV:function(a){var u=this.hy(this)
return new J.a8(u,u.length)},
$aq:function(){return[W.T]},
$av:function(){return[W.T]},
$aj:function(){return[W.T]},
$ar:function(){return[W.T]}}
W.T.prototype={
gbJ:function(a){return new W.iz(a,a.children)},
gcY:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.a4(u,t,s,r,[P.a6])},
i:function(a){return a.localName},
$iT:1}
W.i.prototype={$ii:1}
W.f.prototype={
fB:function(a,b,c,d){if(c!=null)this.e5(a,b,c,!1)},
e5:function(a,b,c,d){return a.addEventListener(b,H.bE(c,1),!1)}}
W.ah.prototype={$iah:1}
W.bO.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ah]},
$iz:1,
$az:function(){return[W.ah]},
$av:function(){return[W.ah]},
$ij:1,
$aj:function(){return[W.ah]},
$ir:1,
$ar:function(){return[W.ah]},
$ibO:1}
W.f3.prototype={
gk:function(a){return a.length}}
W.f7.prototype={
gk:function(a){return a.length}}
W.as.prototype={$ias:1}
W.fa.prototype={
gk:function(a){return a.length}}
W.bQ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iz:1,
$az:function(){return[W.D]},
$av:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ir:1,
$ar:function(){return[W.D]}}
W.bR.prototype={$ibR:1}
W.bp.prototype={$ibp:1}
W.fr.prototype={
i:function(a){return String(a)}}
W.fN.prototype={
gk:function(a){return a.length}}
W.bX.prototype={$ibX:1}
W.fO.prototype={
h:function(a,b){return P.aO(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.n])
this.G(a,new W.fP(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.d(P.w("Not supported"))},
$aa1:function(){return[P.n,null]},
$iP:1,
$aP:function(){return[P.n,null]}}
W.fP.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fQ.prototype={
h:function(a,b){return P.aO(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.n])
this.G(a,new W.fR(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.d(P.w("Not supported"))},
$aa1:function(){return[P.n,null]},
$iP:1,
$aP:function(){return[P.n,null]}}
W.fR.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.fS.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.av]},
$iz:1,
$az:function(){return[W.av]},
$av:function(){return[W.av]},
$ij:1,
$aj:function(){return[W.av]},
$ir:1,
$ar:function(){return[W.av]}}
W.aw.prototype={$iaw:1}
W.iy.prototype={
j:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gV:function(a){var u=this.a.childNodes
return new W.cJ(u,u.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$aq:function(){return[W.D]},
$av:function(){return[W.D]},
$aj:function(){return[W.D]},
$ar:function(){return[W.D]}}
W.D.prototype={
ht:function(a,b){var u,t
try{u=a.parentNode
J.lV(u,b,a)}catch(t){H.bc(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dP(a):u},
fg:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.cY.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iz:1,
$az:function(){return[W.D]},
$av:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ir:1,
$ar:function(){return[W.D]}}
W.ax.prototype={$iax:1,
gk:function(a){return a.length}}
W.h4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iz:1,
$az:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$ir:1,
$ar:function(){return[W.ax]}}
W.he.prototype={
h:function(a,b){return P.aO(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.n])
this.G(a,new W.hf(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.d(P.w("Not supported"))},
$aa1:function(){return[P.n,null]},
$iP:1,
$aP:function(){return[P.n,null]}}
W.hf.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hh.prototype={
gk:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.hr.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iz:1,
$az:function(){return[W.az]},
$av:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]},
$ir:1,
$ar:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.hs.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iz:1,
$az:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$ir:1,
$ar:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gk:function(a){return a.length}}
W.hx.prototype={
h:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga8:function(a){var u=H.c([],[P.n])
this.G(a,new W.hy(u))
return u},
gk:function(a){return a.length},
$aa1:function(){return[P.n,P.n]},
$iP:1,
$aP:function(){return[P.n,P.n]}}
W.hy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ai.prototype={$iai:1}
W.aC.prototype={$iaC:1}
W.aj.prototype={$iaj:1}
W.hD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aj]},
$iz:1,
$az:function(){return[W.aj]},
$av:function(){return[W.aj]},
$ij:1,
$aj:function(){return[W.aj]},
$ir:1,
$ar:function(){return[W.aj]}}
W.hE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iz:1,
$az:function(){return[W.aC]},
$av:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$ir:1,
$ar:function(){return[W.aC]}}
W.hH.prototype={
gk:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bt.prototype={$ibt:1}
W.hK.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iz:1,
$az:function(){return[W.aD]},
$av:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]},
$ir:1,
$ar:function(){return[W.aD]}}
W.hL.prototype={
gk:function(a){return a.length}}
W.b4.prototype={}
W.i6.prototype={
i:function(a){return String(a)}}
W.iq.prototype={
gk:function(a){return a.length}}
W.b8.prototype={
gfQ:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.d(P.w("deltaY is not supported"))},
gfP:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.d(P.w("deltaX is not supported"))},
$ib8:1}
W.cd.prototype={
fh:function(a,b){return a.requestAnimationFrame(H.bE(b,1))},
eh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.F]},
$iz:1,
$az:function(){return[W.F]},
$av:function(){return[W.F]},
$ij:1,
$aj:function(){return[W.F]},
$ir:1,
$ar:function(){return[W.F]}}
W.dw.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia4&&a.left===u.gbb(b)&&a.top===u.gbd(b)&&a.width===u.gax(b)&&a.height===u.gar(b)},
gH:function(a){return W.l8(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gar:function(a){return a.height},
gax:function(a){return a.width}}
W.iE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.as]},
$iz:1,
$az:function(){return[W.as]},
$av:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]},
$ir:1,
$ar:function(){return[W.as]}}
W.dP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iz:1,
$az:function(){return[W.D]},
$av:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$ir:1,
$ar:function(){return[W.D]}}
W.iP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iz:1,
$az:function(){return[W.aB]},
$av:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]},
$ir:1,
$ar:function(){return[W.aB]}}
W.iU.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ai]},
$iz:1,
$az:function(){return[W.ai]},
$av:function(){return[W.ai]},
$ij:1,
$aj:function(){return[W.ai]},
$ir:1,
$ar:function(){return[W.ai]}}
W.iC.prototype={}
W.iD.prototype={
$1:function(a){return this.a.$1(a)}}
W.K.prototype={
gV:function(a){return new W.cJ(a,this.gk(a))}}
W.cJ.prototype={
A:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bI(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gK:function(a){return this.d}}
W.dv.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.dO.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.e1.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
P.iQ.prototype={
bW:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bf:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$ia9)return new Date(a.a)
if(!!u.$imC)throw H.d(P.hY("structured clone of RegExp"))
if(!!u.$iah)return a
if(!!u.$ibg)return a
if(!!u.$ibO)return a
if(!!u.$ibR)return a
if(!!u.$ibZ||!!u.$ib1||!!u.$ibX)return a
if(!!u.$iP){t=p.bW(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.G(a,new P.iS(o,p))
return o.a}if(!!u.$ir){t=p.bW(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fN(a,t)}if(!!u.$ime){t=p.bW(a)
u=p.b
s=u.length
if(t>=s)return H.b(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.b(u,t)
u[t]=q
p.h2(a,new P.iT(o,p))
return o.b}throw H.d(P.hY("structured clone of other type"))},
fN:function(a,b){var u,t=J.al(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
if(typeof s!=="number")return H.h(s)
u=0
for(;u<s;++u){q=this.bf(t.h(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iS.prototype={
$2:function(a,b){this.a.a[a]=this.b.bf(b)},
$S:3}
P.iT.prototype={
$2:function(a,b){this.a.b[a]=this.b.bf(b)},
$S:3}
P.jf.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iR.prototype={
h2:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.f4.prototype={
gb4:function(){var u=this.b,t=H.jo(u,"v",0)
return new H.bV(new H.is(u,new P.f5(),[t]),new P.f6(),[t,W.T])},
j:function(a,b,c){var u=this.gb4()
J.lZ(u.b.$1(J.jR(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ag(this.gb4().a)},
h:function(a,b){var u=this.gb4()
return u.b.$1(J.jR(u.a,b))},
gV:function(a){var u=P.k4(this.gb4(),!1,W.T)
return new J.a8(u,u.length)},
$aq:function(){return[W.T]},
$av:function(){return[W.T]},
$aj:function(){return[W.T]},
$ar:function(){return[W.T]}}
P.f5.prototype={
$1:function(a){return!!J.S(a).$iT}}
P.f6.prototype={
$1:function(a){return H.o(a,"$iT")}}
P.iJ.prototype={
gc9:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.h(t)
return u+t},
gcX:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.h(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia4){t=q.a
if(t==u.gbb(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.v()
if(typeof r!=="number")return H.h(r)
if(t+r===u.gc9(b)){t=q.d
if(typeof s!=="number")return s.v()
if(typeof t!=="number")return H.h(t)
u=s+t===u.gcX(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cw(t),r=u.b,q=J.cw(r),p=u.c
if(typeof t!=="number")return t.v()
if(typeof p!=="number")return H.h(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.v()
if(typeof t!=="number")return H.h(t)
t=C.c.gH(r+t)
return P.n0(P.iG(P.iG(P.iG(P.iG(0,s),q),p),t))}}
P.a4.prototype={
gbb:function(a){return this.a},
gbd:function(a){return this.b},
gax:function(a){return this.c},
gar:function(a){return this.d}}
P.aG.prototype={$iaG:1}
P.fk.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aG]},
$av:function(){return[P.aG]},
$ij:1,
$aj:function(){return[P.aG]},
$ir:1,
$ar:function(){return[P.aG]}}
P.aK.prototype={$iaK:1}
P.h0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aK]},
$av:function(){return[P.aK]},
$ij:1,
$aj:function(){return[P.aK]},
$ir:1,
$ar:function(){return[P.aK]}}
P.h7.prototype={
gk:function(a){return a.length}}
P.hA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.n]},
$av:function(){return[P.n]},
$ij:1,
$aj:function(){return[P.n]},
$ir:1,
$ar:function(){return[P.n]}}
P.k.prototype={
gbJ:function(a){return new P.f4(a,new W.iy(a))}}
P.aN.prototype={$iaN:1}
P.hM.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aN]},
$av:function(){return[P.aN]},
$ij:1,
$aj:function(){return[P.aN]},
$ir:1,
$ar:function(){return[P.aN]}}
P.dH.prototype={}
P.dI.prototype={}
P.dS.prototype={}
P.dT.prototype={}
P.e2.prototype={}
P.e3.prototype={}
P.e9.prototype={}
P.ea.prototype={}
P.bu.prototype={$iq:1,
$aq:function(){return[P.u]},
$ij:1,
$aj:function(){return[P.u]},
$ir:1,
$ar:function(){return[P.u]}}
P.ev.prototype={
gk:function(a){return a.length}}
P.ew.prototype={
h:function(a,b){return P.aO(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aO(u.value[1]))}},
ga8:function(a){var u=H.c([],[P.n])
this.G(a,new P.ex(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.d(P.w("Not supported"))},
$aa1:function(){return[P.n,null]},
$iP:1,
$aP:function(){return[P.n,null]}}
P.ex.prototype={
$2:function(a,b){return this.a.push(a)}}
P.ey.prototype={
gk:function(a){return a.length}}
P.bf.prototype={}
P.h1.prototype={
gk:function(a){return a.length}}
P.du.prototype={}
P.hu.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.d(P.L(b,a,null,null,null))
return P.aO(a.item(b))},
j:function(a,b,c){throw H.d(P.w("Cannot assign element of immutable List."))},
J:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.P,,,]]},
$av:function(){return[[P.P,,,]]},
$ij:1,
$aj:function(){return[[P.P,,,]]},
$ir:1,
$ar:function(){return[[P.P,,,]]}}
P.dZ.prototype={}
P.e_.prototype={}
K.eq.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"}}
K.cK.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cR.prototype={}
K.aJ.prototype={
aJ:function(a,b){return!this.dO(0,b)},
i:function(a){return"!["+this.cg(0)+"]"}}
K.hi.prototype={
dU:function(a){var u,t,s,r
if(a.a.length<=0)throw H.d(P.t("May not create a Set with zero characters."))
u=P.u
t=new H.G([u,P.ba])
for(s=new H.bU(a,a.gk(a));s.A();)t.j(0,s.d,!0)
r=P.k4(t.ga8(t),!0,u)
C.b.dM(r)
this.a=r},
aJ:function(a,b){return C.b.T(this.a,b)},
i:function(a){return P.c5(this.a,0,null)}}
L.d9.prototype={
p:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.di(this.a.O(0,b))
r.a=H.c([],[K.cR])
r.c=!1
this.c.push(r)
return r},
fZ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
cN:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.T(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga8(n),n=n.gV(n);n.A();){t=n.gK(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.T(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.df.prototype={
i:function(a){var u=H.lz(this.b,"\n","\\n"),t=H.lz(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dg.prototype={
i:function(a){return this.b}}
L.hI.prototype={
O:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d9(this,b)
u.c=H.c([],[L.di])
this.a.j(0,b,u)}return u},
b_:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dg(a)
u=P.n
t.c=new H.G([u,u])
this.b.j(0,a,t)}return t},
dE:function(a){return this.hA(a)},
hA:function(a){var u=this
return P.nn(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dE(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.c([],f)
d=H.c([],f)
c=H.c([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.c6(c,0)
else{if(!t.A()){s=3
break}l=t.d}d.push(l);++o
k=g.fZ(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.c5(d,0,null)
throw H.d(P.t("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.p(P.w("removeRange"))
P.aM(0,m,d.length)
d.splice(0,m-0)
C.b.fz(c,d)
d=H.c([],f)
e=H.c([],f)
g=u.d
s=!u.c.T(0,p.a)?7:8
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
if(g.d!=null){j=P.c5(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.df(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.T(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.mZ()
case 1:return P.n_(q)}}},L.df)},
i:function(a){var u,t=new P.Q(""),s=this.d
if(s!=null)t.a=s.cN()+"\n"
for(s=this.a,s=s.ghB(s),s=s.gV(s);s.A();){u=s.gK(s)
if(u!=this.d)t.a+=u.cN()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.di.prototype={
i:function(a){return this.b.b+": "+this.cg(0)}}
O.ao.prototype={
bh:function(a){var u=this
u.a=H.c([],[a])
u.d=u.c=u.b=null},
cd:function(a,b,c){this.b=b
this.c=a
this.d=c},
b2:function(a,b){return this.cd(a,null,b)},
cF:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cC:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gV:function(a){var u=this.a
return new J.a8(u,u.length)},
J:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.jo(s,"ao",0)]
if(s.cF(H.c([b],r))){u=s.a
t=u.length
u.push(b)
s.cC(t,H.c([b],r))}},
j:function(a,b,c){var u,t,s,r=this,q=r.a
if(b>=q.length)return H.b(q,b)
u=q[b]
if(!J.C(u,c)&&r.cF(H.c([c],[H.jo(r,"ao",0)]))){q=r.a
if(b>=q.length)return H.b(q,b)
q[b]=c
q=[H.jo(r,"ao",0)]
t=H.c([u],q)
s=r.d
if(s!=null)s.$2(b,t)
r.cC(b,H.c([c],q))}},
$ij:1}
O.bW.prototype={
gk:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.I():u},
ay:function(){var u=this.b
if(u!=null)u.F(null)},
gY:function(a){var u=this.a
if(u.length>0)return C.b.gat(u)
else return V.a2()},
dv:function(a){var u=this.a
if(a==null)u.push(V.a2())
else u.push(a)
this.ay()},
c3:function(){var u=this.a
if(u.length>0){u.pop()
this.ay()}}}
E.eC.prototype={}
E.aX.prototype={
sce:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().L(0,s.gdq())
u=s.c
if(u!=null)u.gB().l(0,s.gdq())
t=new D.A("shape",r,s.c)
t.b=!0
s.av(t)}},
saW:function(a){var u,t,s=this
if(!J.C(s.r,a)){u=s.r
if(u!=null)u.gB().L(0,s.gdm())
if(a!=null)a.gB().l(0,s.gdm())
s.r=a
t=new D.A("mover",u,a)
t.b=!0
s.av(t)}},
ak:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.a:null
if(!J.C(q,s.x)){u=s.x
s.x=q
t=new D.A("matrix",u,q)
t.b=!0
s.av(t)}for(r=s.y.a,r=new J.a8(r,r.length);r.A();)r.d.ak(0,b)},
aK:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gY(s))
else s.a.push(r.m(0,s.gY(s)))
s.ay()
a.dw(t.f)
s=a.dy
u=(s&&C.b).gat(s)
if(u!=null&&t.d!=null)u.hs(a,t)
for(s=t.y.a,s=new J.a8(s,s.length);s.A();)s.d.aK(a)
a.du()
a.dx.c3()},
av:function(a){var u=this.z
if(u!=null)u.F(a)},
Z:function(){return this.av(null)},
dr:function(a){this.e=null
this.av(a)},
hg:function(){return this.dr(null)},
dn:function(a){this.av(a)},
hf:function(){return this.dn(null)},
dl:function(a){this.av(a)},
hc:function(){return this.dl(null)},
hb:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdk(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ar()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}this.Z()},
he:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gdk(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.ar()
q.d=0
r.z=q}q.L(0,t)}}this.Z()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bh.prototype={
i:function(a){return this.b}}
E.bq.prototype={
i:function(a){return this.b}}
E.dB.prototype={}
E.ha.prototype={
dT:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bW()
t=[V.aH]
u.a=H.c([],t)
u.gB().l(0,new E.hb(s))
s.cy=u
u=new O.bW()
u.a=H.c([],t)
u.gB().l(0,new E.hc(s))
s.db=u
u=new O.bW()
u.a=H.c([],t)
u.gB().l(0,new E.hd(s))
s.dx=u
u=H.c([],[O.dc])
s.dy=u
u.push(null)
s.fr=new H.G([P.n,A.d5])},
ghp:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gY(s)
u=t.db
u=t.z=s.m(0,u.gY(u))
s=u}return s},
dw:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gat(u):a)},
du:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hb.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hc.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hd.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.da.prototype={}
E.dd.prototype={
cm:function(a){this.dA()},
cl:function(){return this.cm(null)},
gh3:function(){var u,t=this,s=Date.now(),r=C.c.a_(P.kB(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
cH:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.m()
if(typeof r!=="number")return H.h(r)
u=C.d.d7(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.m()
t=C.d.d7(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kV(C.n,s.ghu())}},
dA:function(){if(!this.cx){this.cx=!0
var u=window
C.A.eh(u)
C.A.fh(u,W.lj(new E.hG(this),P.a6))}},
hr:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cH()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.kB(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.ay()
r=s.db
C.b.sk(r.a,0)
r.ay()
r=s.dx
C.b.sk(r.a,0)
r.ay()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.aK(p.e)}}catch(q){u=H.bc(q)
t=H.kn(q)
P.kq("Error: "+H.e(u))
P.kq("Stack: "+H.e(t))
throw H.d(u)}}}
E.hG.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hr()}}}
Z.ds.prototype={}
Z.cz.prototype={
b6:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bc(s)
t=P.t('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.d(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.ir.prototype={}
Z.cA.prototype={
aI:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
b6:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].b6(a)},
dF:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aK:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.c([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.c([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.p(p,", ")+"\nAttrs:   "+C.b.p(r,", ")}}
Z.bm.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c3(this.c))+"'")+"]"}}
Z.b7.prototype={
gcf:function(a){var u=this.a,t=(u&$.aS().a)!==0?3:0
if((u&$.aR().a)!==0)t+=3
if((u&$.aQ().a)!==0)t+=3
if((u&$.bd().a)!==0)t+=2
if((u&$.be().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=3
if((u&$.cu().a)!==0)t+=4
if((u&$.bH().a)!==0)++t
return(u&$.aP().a)!==0?t+4:t},
fF:function(a){var u,t=$.aS(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aP()
if((s&t.a)!==0)if(u===a)return t
return $.lQ()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b7))return!1
return this.a===b.a},
i:function(a){var u=H.c([],[P.n]),t=this.a
if((t&$.aS().a)!==0)u.push("Pos")
if((t&$.aR().a)!==0)u.push("Norm")
if((t&$.aQ().a)!==0)u.push("Binm")
if((t&$.bd().a)!==0)u.push("Txt2D")
if((t&$.be().a)!==0)u.push("TxtCube")
if((t&$.ct().a)!==0)u.push("Clr3")
if((t&$.cu().a)!==0)u.push("Clr4")
if((t&$.bH().a)!==0)u.push("Weight")
if((t&$.aP().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.p(u,"|")}}
D.eF.prototype={}
D.ar.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.c([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
L:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.T(s,b)
if(s===!0){s=t.a
u=(s&&C.b).L(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.T(s,b)
if(s===!0){s=t.b
u=(s&&C.b).L(s,b)||u}return u},
F:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.X()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.G(P.k4(u,!0,{func:1,ret:-1,args:[D.X]}),new D.f0(q))
u=r.b
if(u!=null){r.b=H.c([],[{func:1,ret:-1,args:[D.X]}])
C.b.G(u,new D.f1(q))}return!0},
ad:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.f0.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f1.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bn.prototype={}
D.bo.prototype={}
D.A.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cB.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cO.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cO))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fj.prototype={
hl:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hh:function(a){this.c=a.b
this.d.L(0,a.a)
return!1}}
X.cQ.prototype={}
X.fs.prototype={
aO:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.m()
u=b.b
t=q.ch
if(typeof u!=="number")return u.m()
s=new V.a3(o.a+n*m,o.b+u*t)
t=q.a.gaF()
r=new X.aI(a,V.b3(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
c2:function(a,b){this.r=a.a
return!1},
aY:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dK()
if(typeof u!=="number")return u.a2()
this.r=(u&~t)>>>0
return!1},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.aO(a,b))
return!0},
hm:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaF()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.m()
q=a.b
p=o.cy
if(typeof q!=="number")return q.m()
t=new X.bY(new V.H(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
eR:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cQ(c,r.a.gaF(),b)
s.b=!0
t.F(s)
r.y=new P.a9(u,!1)
r.x=V.b3()}}
X.ad.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ad))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aI.prototype={}
X.fT.prototype={
bn:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaF(),r=new X.aI(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c2:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bn(a,b,!0))
return!0},
aY:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dK()
if(typeof t!=="number")return t.a2()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bn(a,b,!0))
return!0},
aX:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bn(a,b,!1))
return!0},
hn:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaF()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.m()
r=a.b
q=p.ch
if(typeof r!=="number")return r.m()
u=new X.bY(new V.H(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gcZ:function(){var u=this.b
return u==null?this.b=D.I():u},
gcb:function(){var u=this.c
return u==null?this.c=D.I():u},
gdj:function(){var u=this.d
return u==null?this.d=D.I():u}}
X.bY.prototype={}
X.h6.prototype={}
X.dh.prototype={}
X.hJ.prototype={
aO:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.b3(),r=u.a.gaF(),q=new X.dh(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hk:function(a){var u=this.b
if(u==null)return!1
u.F(this.aO(a,!0))
return!0},
hi:function(a){var u=this.c
if(u==null)return!1
u.F(this.aO(a,!0))
return!0},
hj:function(a){var u=this.d
if(u==null)return!1
u.F(this.aO(a,!1))
return!0}}
X.dm.prototype={
gaF:function(){var u=this.a,t=C.m.gcY(u).c
t.toString
u=C.m.gcY(u).d
u.toString
return V.kR(0,0,t,u)},
cs:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cO(u,new X.ad(t,a.altKey,a.shiftKey))},
aC:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
bB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
ap:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.w()
u=t.top
if(typeof r!=="number")return r.w()
return new V.a3(s-q,r-u)},
aP:function(a){return new V.H(a.movementX,a.movementY)},
bx:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.c([],[V.a3])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.ae(r.pageX)
C.d.ae(r.pageY)
p=o.left
C.d.ae(r.pageX)
n.push(new V.a3(q-p,C.d.ae(r.pageY)-o.top))}return n},
an:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.ad(t,a.altKey,a.shiftKey))},
bo:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.w()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.w()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eL:function(a){this.f=!0},
ex:function(a){this.f=!1},
eF:function(a){if(this.f&&this.bo(a))a.preventDefault()},
eP:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.hl(u)},
eN:function(a){var u
if(!this.f)return
u=this.cs(a)
this.b.hh(u)},
eT:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aC(a)
if(r.x){u=r.an(a)
t=r.aP(a)
if(r.d.c2(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.an(a)
s=r.ap(a)
if(r.c.c2(u,s))a.preventDefault()},
eX:function(a){var u,t,s,r=this
r.aC(a)
u=r.an(a)
if(r.x){t=r.aP(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aY(u,s))a.preventDefault()},
eJ:function(a){var u,t,s,r=this
if(!r.bo(a)){r.aC(a)
u=r.an(a)
if(r.x){t=r.aP(a)
if(r.d.aY(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aY(u,s))a.preventDefault()}},
eV:function(a){var u,t,s,r=this
r.aC(a)
u=r.an(a)
if(r.x){t=r.aP(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aX(u,s))a.preventDefault()},
eH:function(a){var u,t,s,r=this
if(!r.bo(a)){r.aC(a)
u=r.an(a)
if(r.x){t=r.aP(a)
if(r.d.aX(u,t))a.preventDefault()
return}if(r.r)return
s=r.ap(a)
if(r.c.aX(u,s))a.preventDefault()}},
eZ:function(a){var u,t,s=this
s.aC(a)
u=new V.H((a&&C.z).gfP(a),C.z.gfQ(a)).m(0,s.Q)
if(s.x){if(s.d.hm(u))a.preventDefault()
return}if(s.r)return
t=s.ap(a)
if(s.c.hn(u,t))a.preventDefault()},
f0:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.an(s.y)
t=s.ap(s.y)
s.d.eR(u,t,r)}},
fc:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bB(a)
u=t.bx(a)
if(t.e.hk(u))a.preventDefault()},
f8:function(a){var u
this.bB(a)
u=this.bx(a)
if(this.e.hi(u))a.preventDefault()},
fa:function(a){var u
this.bB(a)
u=this.bx(a)
if(this.e.hj(u))a.preventDefault()}}
D.ez.prototype={$ia0:1}
D.aV.prototype={
al:function(a){var u=this.r
if(u!=null)u.F(a)},
dY:function(){return this.al(null)},
$ia0:1}
D.a0.prototype={}
D.cP.prototype={
al:function(a){var u=this.y
if(u!=null)u.F(a)},
cE:function(a){var u=this.z
if(u!=null)u.F(a)},
eQ:function(){return this.cE(null)},
f2:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.ec(s))return!1}return!0},
eq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcD(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.aV)this.f.push(q)
p=q.r
if(p==null){p=new D.ar()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}u=new D.bn()
u.b=!0
this.al(u)},
f6:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gcD(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r instanceof D.aV)C.b.L(this.f,r)
q=r.r
if(q==null){q=new D.ar()
q.d=0
r.r=q}q.L(0,t)}u=new D.bo()
u.b=!0
this.al(u)},
ec:function(a){var u=C.b.T(this.f,a)
return u},
$aj:function(){return[D.a0]},
$aao:function(){return[D.a0]}}
D.h5.prototype={$ia0:1}
D.ht.prototype={$ia0:1}
V.V.prototype={
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
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.ap.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ap))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.f_.prototype={}
V.cU.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.cU))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
u=b.r
r=q.r
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
u=b.x
t=q.x
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=q.y
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bG(H.c([q.a,q.d,q.r],p),3,0),n=V.bG(H.c([q.b,q.e,q.x],p),3,0),m=V.bG(H.c([q.c,q.f,q.y],p),3,0)
p=o.length
if(0>=p)return H.b(o,0)
u="["+o[0]+", "
t=n.length
if(0>=t)return H.b(n,0)
u=u+n[0]+", "
s=m.length
if(0>=s)return H.b(m,0)
u=u+m[0]+",\n"
if(1>=p)return H.b(o,1)
r=" "+o[1]+", "
if(1>=t)return H.b(n,1)
r=r+n[1]+", "
if(1>=s)return H.b(m,1)
r=u+(r+m[1]+",\n")
if(2>=p)return H.b(o,2)
p=" "+o[2]+", "
if(2>=t)return H.b(n,2)
p=p+n[2]+", "
if(2>=s)return H.b(m,2)
return r+(p+m[2]+"]")}}
V.aH.prototype={
a4:function(a,b){var u=this,t=H.c([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
dh:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a,c=e.f,b=e.b,a=e.e,a0=d*c-b*a,a1=e.r,a2=e.c,a3=d*a1-a2*a,a4=e.x,a5=e.d,a6=d*a4-a5*a,a7=b*a1-a2*c,a8=b*a4-a5*c,a9=a2*a4-a5*a1,b0=e.y,b1=e.cy
if(typeof b0!=="number")return b0.m()
u=e.z
t=e.cx
if(typeof u!=="number")return u.m()
s=b0*b1-u*t
r=e.db
q=e.Q
if(typeof q!=="number")return q.m()
p=b0*r-q*t
o=e.dx
n=e.ch
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a0*j-a3*k+a6*l+a7*m-a8*p+a9*s
if(Math.abs(i-0)<$.y().a)return V.a2()
h=1/i
g=-a
f=-t
return V.au((c*j-a1*k+a4*l)*h,(-b*j+a2*k-a5*l)*h,(b1*a9-r*a8+o*a7)*h,(-u*a9+q*a8-n*a7)*h,(g*j+a1*m-a4*p)*h,(d*j-a2*m+a5*p)*h,(f*a9+r*a6-o*a3)*h,(b0*a9-q*a6+n*a3)*h,(a*k-c*m+a4*s)*h,(-d*k+b*m-a5*s)*h,(t*a8-b1*a6+o*a0)*h,(-b0*a8+u*a6-n*a0)*h,(g*l+c*p-a1*s)*h,(d*l-b*p+a2*s)*h,(f*a7+b1*a3-r*a0)*h,(b0*a7-u*a3+q*a0)*h)},
m:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
if(typeof b1!=="number")return H.h(b1)
u=a5.d
t=b3.cx
s=b3.b
r=b3.f
q=b3.z
if(typeof q!=="number")return H.h(q)
p=b3.cy
o=b3.c
n=b3.r
m=b3.Q
if(typeof m!=="number")return H.h(m)
l=b3.db
k=b3.d
j=b3.x
i=b3.ch
h=b3.dx
g=a5.e
f=a5.f
e=a5.r
d=a5.x
c=a5.y
if(typeof c!=="number")return c.m()
b=a5.z
if(typeof b!=="number")return b.m()
a=a5.Q
if(typeof a!=="number")return a.m()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.au(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
be:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.h(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.x(r.a*q+r.b*p+r.c*o,r.e*q+r.f*p+r.r*o,u*q+t*p+s*o)},
b0:function(a){var u,t,s,r=this,q=a.a,p=a.b,o=a.c
if(typeof o!=="number")return H.h(o)
u=r.y
if(typeof u!=="number")return u.m()
t=r.z
if(typeof t!=="number")return t.m()
s=r.Q
if(typeof s!=="number")return s.m()
return new V.M(r.a*q+r.b*p+r.c*o+r.d,r.e*q+r.f*p+r.r*o+r.x,u*q+t*p+s*o+r.ch)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.aH))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
if(!(Math.abs(b.c-q.c)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
if(!(Math.abs(b.r-q.r)<s))return!1
if(!(Math.abs(b.x-q.x)<s))return!1
u=b.y
r=q.y
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
i:function(a){return this.N()},
D:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bG(H.c([p.a,p.e,p.y,p.cx],o),3,0),m=V.bG(H.c([p.b,p.f,p.z,p.cy],o),3,0),l=V.bG(H.c([p.c,p.r,p.Q,p.db],o),3,0),k=V.bG(H.c([p.d,p.x,p.ch,p.dx],o),3,0)
o=n.length
if(0>=o)return H.b(n,0)
u="["+n[0]+", "
t=m.length
if(0>=t)return H.b(m,0)
u=u+m[0]+", "
s=l.length
if(0>=s)return H.b(l,0)
u=u+l[0]+", "
r=k.length
if(0>=r)return H.b(k,0)
u=u+k[0]+",\n"
q=a+" "
if(1>=o)return H.b(n,1)
q=q+n[1]+", "
if(1>=t)return H.b(m,1)
q=q+m[1]+", "
if(1>=s)return H.b(l,1)
q=q+l[1]+", "
if(1>=r)return H.b(k,1)
q=u+(q+k[1]+",\n")
u=a+" "
if(2>=o)return H.b(n,2)
u=u+n[2]+", "
if(2>=t)return H.b(m,2)
u=u+m[2]+", "
if(2>=s)return H.b(l,2)
u=u+l[2]+", "
if(2>=r)return H.b(k,2)
u=q+(u+k[2]+",\n")
q=a+" "
if(3>=o)return H.b(n,3)
q=q+n[3]+", "
if(3>=t)return H.b(m,3)
q=q+m[3]+", "
if(3>=s)return H.b(l,3)
q=q+l[3]+", "
if(3>=r)return H.b(k,3)
return u+(q+k[3]+"]")},
N:function(){return this.D("")}}
V.a3.prototype={
w:function(a,b){return new V.a3(this.a-b.a,this.b-b.b)},
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.M.prototype={
v:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.v()
if(typeof t!=="number")return H.h(t)
return new V.M(this.a+b.a,this.b+b.b,u+t)},
w:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
return new V.M(this.a-b.a,this.b-b.b,u-t)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.M(this.a*b,this.b*b,u*b)},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
V.aL.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aL))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.d3.prototype={
ga3:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d3))return!1
u=b.a
t=$.y().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+", "+V.B(u.d,3,0)+"]"}}
V.H.prototype={
bY:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.m()
if(typeof r!=="number")return H.h(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.h(t)
return s*r+u*t},
m:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.m()
if(typeof b!=="number")return H.h(b)
u=this.b
if(typeof u!=="number")return u.m()
return new V.H(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.y().a){u=$.l1
return u==null?$.l1=new V.H(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.H(u/b,t/b)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=this.a
s=$.y()
s.toString
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+"]"}}
V.x.prototype={
bY:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.m()
if(typeof t!=="number")return H.h(t)
return this.a*a.a+this.b*a.b+u*t},
bZ:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.w()
if(typeof s!=="number")return H.h(s)
return new V.x(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
aq:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.h(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.m()
s=a.a
r=this.a
return new V.x(q*p-u*t,u*s-r*p,r*t-q*s)},
v:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.v()
if(typeof r!=="number")return H.h(r)
return new V.x(this.a+u,this.b+t,s+r)},
P:function(a){var u=this.c
if(typeof u!=="number")return u.P()
return new V.x(-this.a,-this.b,-u)},
m:function(a,b){var u=this.c
if(typeof u!=="number")return u.m()
return new V.x(this.a*b,this.b*b,u*b)},
t:function(a,b){var u
if(Math.abs(b-0)<$.y().a)return V.cc()
u=this.c
if(typeof u!=="number")return u.t()
return new V.x(this.a/b,this.b/b,u/b)},
di:function(){var u,t=$.y(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.h(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
n:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.y()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.w()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
i:function(a){return"["+V.B(this.a,3,0)+", "+V.B(this.b,3,0)+", "+V.B(this.c,3,0)+"]"}}
U.eH.prototype={
bi:function(a){var u=V.jO(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.I():u},
E:function(a){var u=this.y
if(u!=null)u.F(a)},
scc:function(a,b){},
sc_:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.y().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bi(u)}s=new D.A("maximumLocation",s,t.b)
s.b=!0
t.E(s)}},
sc1:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.y().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bi(u)}s=new D.A("minimumLocation",s,t.c)
s.b=!0
t.E(s)}},
sW:function(a,b){var u,t=this
b=t.bi(b)
u=t.d
if(!(Math.abs(u-b)<$.y().a)){t.d=b
u=new D.A("location",u,b)
u.b=!0
t.E(u)}},
sc0:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.y().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.A("maximumVelocity",r,a)
r.b=!0
s.E(r)}},
sR:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.y().a)){u.f=a
t=new D.A("velocity",t,a)
t.b=!0
u.E(t)}},
sbN:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.y().a)){this.x=a
u=new D.A("dampening",u,a)
u.b=!0
this.E(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.y().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sW(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.y().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.cC.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.I():u},
af:function(a,b,c){return this.a},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cC))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.D("          ")}}
U.bP.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.I():u},
E:function(a){var u=this.e
if(u!=null)u.F(a)},
a1:function(){return this.E(null)},
e_:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaz(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.E(u)},
f4:function(a,b){var u,t,s,r
for(u=b.length,t=this.gaz(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null)r.gB().L(0,t)}u=new D.bo()
u.b=!0
this.E(u)},
af:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a8(r,r.length),u=null;r.A();){q=r.d
if(q!=null){t=q.af(0,b,c)
if(t!=null)u=u==null?t:t.m(0,u)}}s.f=u==null?V.a2():u
r=s.e
if(r!=null)r.ad(0)}return s.f},
n:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bP))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.C(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.aa]},
$aao:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.d4.prototype={
gB:function(){var u=this.y
return u==null?this.y=D.I():u},
E:function(a){var u=this.y
if(u!=null)u.F(a)},
sdI:function(a){var u
a=V.jO(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.y().a)){this.a=a
u=new D.A("yaw",u,a)
u.b=!0
this.E(u)}},
sdt:function(a,b){var u
b=V.jO(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.y().a)){this.b=b
u=new D.A("pitch",u,b)
u.b=!0
this.E(u)}},
sdB:function(a){var u
a=V.jO(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.y().a)){this.c=a
u=new D.A("roll",u,a)
u.b=!0
this.E(u)}},
af:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sdI(u.a+u.d*b.y)
u.sdt(0,u.b+u.e*b.y)
u.sdB(u.c+u.f*b.y)
u.x=V.kI(u.c).m(0,V.kH(u.b)).m(0,V.k6(u.a))
t=u.y
if(t!=null)t.ad(0)}return u.x},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d4))return!1
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
return"Rotator: ["+V.B(u.a,3,0)+", "+V.B(u.b,3,0)+", "+V.B(u.c,3,0)+"], ["+V.B(u.d,3,0)+", "+V.B(u.e,3,0)+", "+V.B(u.f,3,0)+"]"}}
U.dn.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.I():u},
E:function(a){var u=this.cy
if(u!=null)u.F(a)},
a1:function(){return this.E(null)},
aQ:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcZ().l(0,u.gbp())
u.a.c.gdj().l(0,u.gbr())
u.a.c.gcb().l(0,u.gbt())
return!0},
bq:function(a){var u=this
if(!J.C(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaI")
if(!n.y)return
if(n.x){u=a.d.w(0,a.y)
u=new V.H(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.w(0,a.y)
u=new V.H(t.a,t.b).m(0,2).t(0,u.ga3())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.m()
s=n.e
if(typeof s!=="number")return H.h(s)
t.sR(u*10*s)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=new V.H(s.a,s.b).m(0,2).t(0,u.ga3())
s=n.b
q=r.a
if(typeof q!=="number")return q.P()
p=n.e
if(typeof p!=="number")return H.h(p)
o=n.z
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
n.b.sR(0)
t=t.w(0,a.z)
n.Q=new V.H(t.a,t.b).m(0,2).t(0,u.ga3())}n.a1()},
bu:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.m()
s=r.e
if(typeof s!=="number")return H.h(s)
u.sR(t*10*s)
r.a1()}},
af:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.ch=r
u=b.y
t.b.ak(0,u)
t.cx=V.kI(t.b.d)}return t.cx},
$iaa:1}
U.dp.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.I():u},
E:function(a){var u=this.fx
if(u!=null)u.F(a)},
a1:function(){return this.E(null)},
aQ:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcZ().l(0,s.gbp())
s.a.c.gdj().l(0,s.gbr())
s.a.c.gcb().l(0,s.gbt())
u=s.a.d
t=u.f
u=t==null?u.f=D.I():t
u.l(0,s.gej())
u=s.a.d
t=u.d
u=t==null?u.d=D.I():t
u.l(0,s.gel())
u=s.a.e
t=u.b
u=t==null?u.b=D.I():t
u.l(0,s.gfv())
u=s.a.e
t=u.d
u=t==null?u.d=D.I():t
u.l(0,s.gft())
u=s.a.e
t=u.c
u=t==null?u.c=D.I():t
u.l(0,s.gfq())
return!0},
ai:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.P()
u=-u}if(this.r){if(typeof t!=="number")return t.P()
t=-t}return new V.H(u,t)},
bq:function(a){var u=this
H.o(a,"$iaI")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaI")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.H(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ai(new V.H(t.a,t.b).m(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ai(new V.H(s.a,s.b).m(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sW(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ai(new V.H(t.a,t.b).m(0,2).t(0,u.ga3()))}n.a1()},
bu:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sR(-t*10*u)
r.a1()}},
ek:function(a){var u=this
if(H.o(a,"$icQ").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
em:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$iaI")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ai(new V.H(s.a,s.b).m(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sW(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ai(new V.H(t.a,t.b).m(0,2).t(0,u.ga3()))
n.a1()},
fw:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fu:function(a){var u,t,s,r,q,p,o,n=this
H.o(a,"$idh")
if(!n.cx)return
if(n.ch){u=a.d.w(0,a.y)
u=new V.H(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.w(0,a.y)
u=n.ai(new V.H(t.a,t.b).m(0,2).t(0,u.ga3()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.P()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.P()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.w(0,a.y)
r=n.ai(new V.H(s.a,s.b).m(0,2).t(0,u.ga3()))
s=n.c
q=r.a
if(typeof q!=="number")return q.P()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sW(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.P()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sW(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.w(0,a.z)
n.dx=n.ai(new V.H(t.a,t.b).m(0,2).t(0,u.ga3()))}n.a1()},
fs:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.P()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.P()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sR(-t*10*u)
r.a1()}},
af:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.M()
if(s<r){t.dy=r
u=b.y
t.c.ak(0,u)
t.b.ak(0,u)
t.fr=V.k6(t.b.d).m(0,V.kH(t.c.d))}return t.fr},
$iaa:1}
U.dq.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.I():u},
E:function(a){var u=this.r
if(u!=null)u.F(a)},
aQ:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.I():t
t=r.gen()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.I():s).l(0,t)
return!0},
eo:function(a){var u,t,s,r,q=this
if(!J.C(q.b,q.a.b.c))return
H.o(a,"$ibY")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.m()
r=u+t*s
if(u!==r){q.d=r
u=new D.A("zoom",u,r)
u.b=!0
q.E(u)}},
af:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.au(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.cH.prototype={
am:function(a){var u=this.y
if(u!=null)u.F(a)},
e0:function(){return this.am(null)},
eB:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gah(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.ar()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.c([],s):o).push(t)}}u=new D.bn()
u.b=!0
this.am(u)},
eD:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gah(),s=0;s<b.length;b.length===u||(0,H.m)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.ar()
q.d=0
r.z=q}q.L(0,t)}}u=new D.bo()
u.b=!0
this.am(u)},
sdC:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().L(0,t.gah())
u=t.d
t.d=a
if(a!=null)a.gB().l(0,t.gah())
s=new D.A("technique",u,t.d)
s.b=!0
t.am(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.I():u},
aK:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.da(a)
e.b=!0
u=f.f
if(u!=null)u.F(e)
a.dw(f.d)
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
if(typeof s!=="number")return H.h(s)
o=C.d.ae(p*s)
p=q.b
if(typeof r!=="number")return H.h(r)
n=C.d.ae(p*r)
p=C.d.ae(q.c*s)
a.c=p
q=C.d.ae(q.d*r)
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
i=V.au(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.dv(i)
t=$.kL
if(t==null){t=V.kN()
q=V.kc()
p=$.l2
t=V.kG(t,q,p==null?$.l2=new V.x(0,0,-1):p)
$.kL=t
h=t}else h=t
t=u.b
if(t!=null){g=t.af(0,a,u)
if(g!=null)h=g.m(0,h)}a.db.dv(h)
u=f.d
if(u!=null)u.ak(0,a)
for(u=f.e.a,u=new J.a8(u,u.length);u.A();)u.d.ak(0,a)
for(u=f.e.a,u=new J.a8(u,u.length);u.A();)u.d.aK(a)
f.b.toString
a.cy.c3()
a.db.c3()
f.c.toString
a.du()}}
A.cx.prototype={}
A.eu.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fW:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gag:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fx.prototype={
dS:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.Q("")
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
A.nC(c3,u)
A.nE(c3,u)
A.nD(c3,u)
A.nG(c3,u)
A.nH(c3,u)
A.nF(c3,u)
A.nI(c3,u)
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
m=A.nB(b8.z)
b8.c=n
b8.d=m
b8.e=b8.ct(n,35633)
b8.f=b8.ct(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.p(P.t("Failed to link shader: "+H.e(l)))}b8.fm()
b8.fo()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.o(b8.y.U(0,"invViewMat"),"$iab")
if(t)b8.dy=H.o(b8.y.U(0,"objMat"),"$iab")
if(r)b8.fr=H.o(b8.y.U(0,"viewObjMat"),"$iab")
b8.fy=H.o(b8.y.U(0,"projViewObjMat"),"$iab")
if(c3.go)b8.fx=H.o(b8.y.U(0,"viewMat"),"$iab")
if(c3.x1)b8.k1=H.o(b8.y.U(0,"txt2DMat"),"$ic9")
if(c3.x2)b8.k2=H.o(b8.y.U(0,"txtCubeMat"),"$iab")
if(c3.y1)b8.k3=H.o(b8.y.U(0,"colorMat"),"$iab")
b8.r1=H.c([],[A.ab])
t=c3.b7
if(t>0){b8.k4=b8.y.U(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.p(P.t(c0+q+c1))
s.push(H.o(j,"$iab"))}}if(c3.a.a)b8.r2=H.o(b8.y.U(0,"emissionClr"),"$iE")
if(c3.b.a)b8.x1=H.o(b8.y.U(0,"ambientClr"),"$iE")
if(c3.c.a)b8.y2=H.o(b8.y.U(0,"diffuseClr"),"$iE")
if(c3.d.a)b8.b8=H.o(b8.y.U(0,"invDiffuseClr"),"$iE")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.d1=H.o(b8.y.U(0,"shininess"),"$iR")
if(t)b8.d0=H.o(b8.y.U(0,"specularClr"),"$iE")}if(c3.db){b8.d2=H.o(b8.y.U(0,"envSampler"),"$ibw")
if(c3.r.a)b8.d3=H.o(b8.y.U(0,"reflectClr"),"$iE")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.d4=H.o(b8.y.U(0,"refraction"),"$iR")
if(t)b8.d5=H.o(b8.y.U(0,"refractClr"),"$iE")}}if(c3.y.a)b8.d6=H.o(b8.y.U(0,"alpha"),"$iR")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.u
b8.bO=new H.G([r,A.b5])
b8.bP=new H.G([r,[P.r,A.c7]])
for(r=[A.c7],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
H.o(j,"$iE")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.p(P.t(c0+o+c1))
H.o(d,"$iE")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.t(c0+o+c1))
H.o(c,"$iE")
if(typeof g!=="number")return g.a2()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.t(c0+o+c1))
H.o(b,"$iR")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.t(c0+o+c1))
H.o(a,"$iR")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.t(c0+o+c1))
H.o(a0,"$iR")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.c7(j,d,c,a3,a2,a1))}b8.bP.j(0,g,e)
q=b8.bO
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
q.j(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.u
b8.bQ=new H.G([r,A.b5])
b8.bR=new H.G([r,[P.r,A.c8]])
for(r=[A.c8],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a2()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.p(P.t(c0+a4+c1))
H.o(j,"$iE")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.p(P.t(c0+a4+c1))
H.o(d,"$iE")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.p(P.t(c0+a4+c1))
H.o(c,"$iE")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.p(P.t(c0+a4+c1))
H.o(j,"$iE")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.p(P.t(c0+a4+c1))
H.o(d,"$iE")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.p(P.t(c0+o+c1))
H.o(c,"$ibv")
a8=c}else a8=b9
e.push(new A.c8(a7,a6,a5,j,d,a8))}b8.bR.j(0,g,e)
q=b8.bQ
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
q.j(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.u
b8.bS=new H.G([r,A.b5])
b8.bT=new H.G([r,[P.r,A.ca]])
for(r=[A.ca],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
H.o(j,"$iE")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.p(P.t(c0+o+c1))
H.o(d,"$iE")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.p(P.t(c0+o+c1))
H.o(c,"$iE")
if(typeof g!=="number")return g.a2()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.p(P.t(c0+o+c1))
H.o(b,"$ic9")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.p(P.t(c0+o+c1))
H.o(b,"$ibw")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.p(P.t(c0+o+c1))
H.o(b,"$ibw")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.p(P.t(c0+o+c1))
H.o(a,"$ic6")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.p(P.t(c0+o+c1))
H.o(b,"$iR")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.p(P.t(c0+o+c1))
H.o(a,"$iR")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.p(P.t(c0+o+c1))
H.o(a0,"$iR")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.ca(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bT.j(0,g,e)
q=b8.bS
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
q.j(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.u
b8.bU=new H.G([r,A.b5])
b8.bV=new H.G([r,[P.r,A.cb]])
for(r=[A.cb],i=0;i<t.length;t.length===s||(0,H.m)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.c([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
H.o(j,"$iE")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.p(P.t(c0+o+c1))
H.o(d,"$iE")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.p(P.t(c0+o+c1))
H.o(c,"$iE")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.p(P.t(c0+o+c1))
H.o(b,"$iE")
if(typeof g!=="number")return g.a2()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.p(P.t(c0+o+c1))
H.o(a,"$iE")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.p(P.t(c0+o+c1))
H.o(a0,"$iE")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.p(P.t(c0+o+c1))
H.o(b2,"$iR")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.p(P.t(c0+o+c1))
H.o(b3,"$iR")
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
if(a==null)H.p(P.t(c0+a4+c1))
H.o(a,"$ic6")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.p(P.t(c0+a4+c1))
H.o(a,"$iR")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.p(P.t(c0+a4+c1))
H.o(a0,"$iR")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.p(P.t(c0+a4+c1))
H.o(a,"$iR")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.p(P.t(c0+a4+c1))
H.o(a0,"$iR")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.p(P.t(c0+a4+c1))
H.o(b2,"$iR")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.p(P.t(c0+a4+c1))
H.o(a,"$ibv")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.p(P.t(c0+o+c1))
H.o(a,"$ibv")
b0=a}else b0=b9
e.push(new A.cb(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bV.j(0,g,e)
q=b8.bU
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.p(P.t(c0+o+c1))
q.j(0,g,j)}}}},
fk:function(a,b){}}
A.cy.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cE.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.d7.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fA.prototype={
i:function(a){return this.aT}}
A.c7.prototype={}
A.c8.prototype={}
A.ca.prototype={}
A.cb.prototype={}
A.d5.prototype={
dV:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ct:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.d(P.t("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fm:function(){var u,t,s,r=this,q=H.c([],[A.cx]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cx(p,t.name,s))}r.x=new A.eu(q)},
fo:function(){var u,t,s,r=this,q=H.c([],[A.dj]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fO(t.type,t.size,t.name,s))}r.y=new A.hV(q)},
aB:function(a,b,c){var u=this.a
if(a===1)return new A.b5(u,b,c)
else return A.k9(u,this.r,b,a,c)},
ee:function(a,b,c){var u=this.a
if(a===1)return new A.bv(u,b,c)
else return A.k9(u,this.r,b,a,c)},
ef:function(a,b,c){var u=this.a
if(a===1)return new A.bw(u,b,c)
else return A.k9(u,this.r,b,a,c)},
b5:function(a,b){return new P.dC(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fO:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aB(b,c,d)
case 5121:return u.aB(b,c,d)
case 5122:return u.aB(b,c,d)
case 5123:return u.aB(b,c,d)
case 5124:return u.aB(b,c,d)
case 5125:return u.aB(b,c,d)
case 5126:return new A.R(u.a,c,d)
case 35664:return new A.hR(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.c6(u.a,c,d)
case 35667:return new A.hS(u.a,c,d)
case 35668:return new A.hT(u.a,c,d)
case 35669:return new A.hU(u.a,c,d)
case 35674:return new A.hW(u.a,c,d)
case 35675:return new A.c9(u.a,c,d)
case 35676:return new A.ab(u.a,c,d)
case 35678:return u.ee(b,c,d)
case 35680:return u.ef(b,c,d)
case 35670:throw H.d(u.b5("BOOL",c))
case 35671:throw H.d(u.b5("BOOL_VEC2",c))
case 35672:throw H.d(u.b5("BOOL_VEC3",c))
case 35673:throw H.d(u.b5("BOOL_VEC4",c))
default:throw H.d(P.t("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dj.prototype={}
A.hV.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
U:function(a,b){var u=this.h(0,b)
if(u==null)throw H.d(P.t("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.N()},
N:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b5.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.hS.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.hU.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.R.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.c6.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.hW.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c9.prototype={
ab:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ab.prototype={
ab:function(a){var u=new Float32Array(H.bB(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bv.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bw.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.j6.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bZ(s.b,b).bZ(s.d.bZ(s.c,b),c)
a.sW(0,new V.M(r.a,r.b,r.c))
a.sca(r.t(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sbF(new V.aL(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.jg.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.ji.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.h(p)
s=-s*p
u=r*p
a.sW(0,new V.M(s,u,q))
u=new V.x(s,u,q)
a.sca(u.t(0,Math.sqrt(u.C(u))))
a.sbF(new V.aL(1-c,2+c,-1,-1))}}
F.jj.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jk.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jI.prototype={
$2:function(a,b){return 0}}
F.jJ.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.h(s)
u=a.f
t=new V.x(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.C(t))).m(0,this.b+s)
a.sW(0,new V.M(s.a,s.b,s.c))}}
F.jM.prototype={
$1:function(a){return new V.M(Math.cos(a),Math.sin(a),0)}}
F.jw.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.M(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jh.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.kt(m.$1(n),l)
l=J.kt(m.$1(n+3.141592653589793/o.c),l).w(0,k)
l=new V.x(l.a,l.b,l.c)
u=l.t(0,Math.sqrt(l.C(l)))
m=$.l3
if(m==null){m=new V.x(1,0,0)
$.l3=m
t=m}else t=m
m=u.aq(!J.C(u,t)?V.l5():t)
s=m.t(0,Math.sqrt(m.C(m)))
m=s.aq(u)
t=m.t(0,Math.sqrt(m.C(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.m(0,m*l)
l=s.m(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.w()
if(typeof p!=="number")return H.h(p)
a.sW(0,k.v(0,new V.M(m.a-l.a,m.b-l.b,q-p)))}}
F.jp.prototype={
$2:function(a,b){return 0}}
F.jq.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sW(0,new V.M(s,r,this.a.a.$2(b,c)))
u=new V.x(s,r,1)
a.sca(u.t(0,Math.sqrt(u.C(u))))
u=1-b
t=1-c
a.sbF(new V.aL(b*c,2+u*c,4+b*t,6+u*t))}}
F.aY.prototype={
aR:function(){var u=this
if(!u.gaS()){C.b.L(u.a.a.d.b,u)
u.a.a.Z()}u.by()
u.bz()
u.ff()},
bC:function(a){this.a=a
a.d.b.push(this)},
bD:function(a){this.b=a
a.d.c.push(this)},
fl:function(a){this.c=a
a.d.d.push(this)},
by:function(){var u=this.a
if(u!=null){C.b.L(u.d.b,this)
this.a=null}},
bz:function(){var u=this.b
if(u!=null){C.b.L(u.d.c,this)
this.b=null}},
ff:function(){var u=this.c
if(u!=null){C.b.L(u.d.d,this)
this.c=null}},
gaS:function(){return this.a==null||this.b==null||this.c==null},
e8:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cc()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.di())return
return s.t(0,Math.sqrt(s.C(s)))},
ea:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.w(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.C(r)))
r=t.w(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.aq(r.t(0,Math.sqrt(r.C(r))))
return r.t(0,Math.sqrt(r.C(r)))},
bI:function(){var u,t=this
if(t.d!=null)return!0
u=t.e8()
if(u==null){u=t.ea()
if(u==null)return!1}t.d=u
t.a.a.Z()
return!0},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cc()
if(q!=null)s=s.v(0,q)
if(u!=null)s=s.v(0,u)
if(t!=null)s=s.v(0,t)
if(s.di())return
return s.t(0,Math.sqrt(s.C(s)))},
e9:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.y().a){l=d.w(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.P(0)}else{p=(l-u.b)/r
l=d.w(0,g).m(0,p).v(0,g).w(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.P(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.C(l)))
l=o.aq(q)
l=l.t(0,Math.sqrt(l.C(l))).aq(o)
q=l.t(0,Math.sqrt(l.C(l)))}return q},
bG:function(){var u,t=this
if(t.e!=null)return!0
u=t.e7()
if(u==null){u=t.e9()
if(u==null)return!1}t.e=u
t.a.a.Z()
return!0},
gfJ:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u,t,s=this
if(s.gaS())return a+"disposed"
u=a+C.a.aa(J.a7(s.a.e),0)+", "+C.a.aa(J.a7(s.b.e),0)+", "+C.a.aa(J.a7(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
N:function(){return this.D("")}}
F.f2.prototype={}
F.hq.prototype={
aU:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.u()
t=t.e
u=c.c
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.c
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bT.prototype={
aR:function(){var u=this
if(!u.gaS()){C.b.L(u.a.a.c.b,u)
u.a.a.Z()}u.by()
u.bz()},
bC:function(a){this.a=a
a.c.b.push(this)},
bD:function(a){this.b=a
a.c.c.push(this)},
by:function(){var u=this.a
if(u!=null){C.b.L(u.c.b,this)
this.a=null}},
bz:function(){var u=this.b
if(u!=null){C.b.L(u.c.c,this)
this.b=null}},
gaS:function(){return this.a==null||this.b==null},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){if(this.gaS())return a+"disposed"
return a+C.a.aa(J.a7(this.a.e),0)+", "+C.a.aa(J.a7(this.b.e),0)},
N:function(){return this.D("")}}
F.fl.prototype={}
F.hP.prototype={
aU:function(a,b,c){var u,t=b.a
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
return t==u.e}else{t=b.a
t.a.a.u()
t=t.e
u=c.b
u.a.a.u()
if(t==u.e){t=b.b
t.a.a.u()
t=t.e
u=c.a
u.a.a.u()
return t==u.e}else return!1}}}
F.c1.prototype={
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.aa(J.a7(u.e),0)},
N:function(){return this.D("")}}
F.hj.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.I():u},
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.u()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.l(0,r.fM())}h.a.u()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.l(0,n)
o=new F.c1()
if(n.a==null)H.p(P.t("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.l(0,l)
p.a.l(0,k)
F.mg(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.u()
p=p.e
if(typeof p!=="number")return p.v()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.u()
o=o.e
if(typeof o!=="number")return o.v()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.l(0,l)
o.a.l(0,k)
o.a.l(0,i)
F.bN(l,k,i)}g=h.e
if(g!=null)g.ad(0)},
ac:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ac()||!1
if(!t.a.ac())u=!1
s=t.e
if(s!=null)s.ad(0)
return u},
h8:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.c(o.slice(0),[H.bb(o,0)])
for(o=[F.b6];u.length!==0;){t=C.b.gh_(u)
C.b.c6(u,0)
if(t!=null){s=H.c([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aU(0,t,q)){s.push(q)
C.b.c6(u,r)}}if(s.length>1)b.aV(s)}}p.a.u()
p.c.c7()
p.d.c7()
p.b.hq()
p.c.c8(new F.hP())
p.d.c8(new F.hq())
o=p.e
if(o!=null)o.ad(0)},
bE:function(){this.h8(new F.ij(),new F.fZ())},
fH:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aS()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aR().a)!==0)++s
if((t&$.aQ().a)!==0)++s
if((t&$.bd().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.cu().a)!==0)++s
if((t&$.bH().a)!==0)++s
if((t&$.aP().a)!==0)++s
r=a4.gcf(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.c(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.c(u,[Z.cz])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fF(m)
k=l.gcf(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cz(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].h7(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bB(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cA(new Z.ds(a1,d),o,a4)
c.b=H.c([],[Z.bm])
if(a0.b.b.length!==0){b=H.c([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)}a=Z.kd(u,34963,b)
c.b.push(new Z.bm(0,b.length,a))}if(a0.c.b.length!==0){b=H.c([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)}a=Z.kd(u,34963,b)
c.b.push(new Z.bm(1,b.length,a))}if(a0.d.b.length!==0){b=H.c([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.u()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.u()
b.push(t.e)}a=Z.kd(u,34963,b)
c.b.push(new Z.bm(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.c([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.D(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.D(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.D(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.D(t))}return C.b.p(s,"\n")},
Z:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hk.prototype={
fC:function(a){var u,t,s,r,q,p=H.c([],[F.aY]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.l(0,u)
t.a.l(0,r)
t.a.l(0,q)
p.push(F.bN(u,r,q))}}return p},
fD:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.c([],[F.aY])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.b(c,s)
m=c[s];++s
if(s>=n)return H.b(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.b(c,k)
j=c[k]
if(t<0||t>=n)return H.b(c,t)
i=c[t]
n=u.a
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.bN(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bN(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.bN(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.bN(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
c8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aU(0,p,n)){p.aR()
break}}}}},
c7:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfJ(s)
if(t)s.aR()}},
ac:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bI())s=!1
return s},
bH:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].bG())s=!1
return s},
i:function(a){return this.N()},
D:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(a))
return C.b.p(r,"\n")},
N:function(){return this.D("")}}
F.hl.prototype={
gk:function(a){return this.b.length},
c8:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aU(0,p,n)){p.aR()
break}}}}},
c7:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aR()}},
i:function(a){return this.N()},
D:function(a){var u,t,s=H.c([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].D(a+(""+u+". ")))}return C.b.p(s,"\n")},
N:function(){return this.D("")}}
F.hm.prototype={
gk:function(a){return this.b.length},
hq:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.L(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.L(s.b.b,t)
t.a=null}}}},
i:function(a){return this.N()},
D:function(a){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(a))
return C.b.p(r,"\n")},
N:function(){return this.D("")}}
F.b6.prototype={
bM:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dr(u.cx,r,o,t,s,q,p,a,n)},
fM:function(){return this.bM(null)},
sW:function(a,b){var u
if(!J.C(this.f,b)){this.f=b
u=this.a
if(u!=null)u.Z()}},
sca:function(a){var u
if(!J.C(this.z,a)){this.z=a
u=this.a
if(u!=null)u.Z()}},
sbF:function(a){var u
if(!J.C(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.Z()}},
h7:function(a){var u,t,s=this
if(a.n(0,$.aS())){u=s.f
t=[P.J]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aR())){u=s.r
t=[P.J]
if(u==null)return H.c([0,1,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.aQ())){u=s.x
t=[P.J]
if(u==null)return H.c([0,0,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.bd())){u=s.y
t=[P.J]
if(u==null)return H.c([0,0],t)
else return H.c([u.a,u.b],t)}else if(a.n(0,$.be())){u=s.z
t=[P.J]
if(u==null)return H.c([0,0,0],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.ct())){u=s.Q
t=[P.J]
if(u==null)return H.c([1,1,1],t)
else return H.c([u.a,u.b,u.c],t)}else if(a.n(0,$.cu())){u=s.Q
t=[P.J]
if(u==null)return H.c([1,1,1,1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bH()))return H.c([s.ch],[P.J])
else if(a.n(0,$.aP())){u=s.cx
t=[P.J]
if(u==null)return H.c([-1,-1,-1,-1],t)
else return H.c([u.a,u.b,u.c,u.d],t)}else return H.c([],[P.J])},
bI:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cc()
t.d.G(0,new F.ip(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
bG:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cc()
t.d.G(0,new F.io(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.Z()
s=t.a.e
if(s!=null)s.ad(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.N()},
D:function(a){var u,t,s=this,r="-",q=H.c([],[P.n])
q.push(C.a.aa(J.a7(s.e),0))
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
q.push(V.B(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.p(q,", ")
return a+"{"+t+"}"},
N:function(){return this.D("")}}
F.ip.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.io.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.v(0,t)}}}
F.id.prototype={
u:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.d(P.t("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.Z()
return!0},
fE:function(a,b,c,d,e,f){var u=F.dr(a,null,b,c,d,e,f,null,0)
this.l(0,u)
return u},
gk:function(a){return this.c.length},
ac:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bI()
return!0},
bH:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].bG()
return!0},
fI:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.m()
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.N()},
D:function(a){var u,t,s,r
this.u()
u=H.c([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].D(a))
return C.b.p(u,"\n")},
N:function(){return this.D("")}}
F.ie.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.ig(u,b))
C.b.G(u.d,new F.ih(u,b))},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(""))
return C.b.p(r,"\n")}}
F.ig.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.ih.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.ii.prototype={
gk:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(""))
return C.b.p(r,"\n")}}
F.ik.prototype={}
F.ij.prototype={
aU:function(a,b,c){return J.C(b.f,c.f)}}
F.il.prototype={}
F.fZ.prototype={
aV:function(a){var u,t,s,r,q,p,o,n,m,l,k=V.cc()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=k.a
q=s.a
p=k.b
o=s.b
n=k.c
s=s.c
if(typeof n!=="number")return n.v()
if(typeof s!=="number")return H.h(s)
k=new V.x(r+q,p+o,n+s)}}k=k.t(0,Math.sqrt(k.C(k)))
for(u=a.length,s=k==null,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){m=a[t]
if(s)l=null
else{r=k.a
q=k.b
p=k.c
if(typeof p!=="number")return p.m()
l=k.t(0,Math.sqrt(r*r+q*q+p*p))}if(!J.C(m.r,l)){m.r=l
r=m.a
if(r!=null){r=r.e
if(r!=null)r.F(null)}}}return}}
F.im.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.N()},
N:function(){var u,t,s,r=H.c([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].D(""))
return C.b.p(r,"\n")}}
O.cS.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.I():u},
a7:function(a){var u=this.fr
if(u!=null)u.F(a)},
ez:function(){return this.a7(null)},
cG:function(a){this.a=null
this.a7(a)},
fj:function(){return this.cG(null)},
es:function(a,b){var u=new D.bn()
u.b=!0
this.a7(u)},
ev:function(a,b){var u=new D.bo()
u.b=!0
this.a7(u)},
cr:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaj()
o=u.h(0,q.gaj())
u.j(0,p,o==null?1:o)}n=H.c([],[A.cy])
u.G(0,new O.fE(g,n))
C.b.aN(n,new O.fF())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.j(0,0,p==null?1:p)}l=H.c([],[A.cE])
m.G(0,new O.fG(g,l))
C.b.aN(l,new O.fH())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaj()
o=k.h(0,q.gaj())
k.j(0,p,o==null?1:o)}j=H.c([],[A.d0])
k.G(0,new O.fI(g,j))
C.b.aN(j,new O.fJ())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gaj()
p=i.h(0,q.gaj())
i.j(0,s,p==null?1:p)}h=H.c([],[A.d7])
i.G(0,new O.fK(g,h))
C.b.aN(h,new O.fL())
f=C.c.a_(g.e.a.length+3,4)
g.dy.e
return A.mo(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
e6:function(a,b){},
ak:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a8(u,u.length);u.A();){t=u.d
t.toString
s=$.ic
if(s==null)s=$.ic=new V.x(0,0,1)
t.a=s
r=$.ib
t.d=r==null?$.ib=new V.x(0,1,0):r
r=$.ia
t.e=r==null?$.ia=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.be(s)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.be(t.d)
p=o.a
r=o.b
s=o.c
if(typeof s!=="number")return s.m()
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.be(t.e)
r=s.a
p=s.b
o=s.c
if(typeof o!=="number")return o.m()
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
hs:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cr()
u=b4.fr.h(0,b3.aT)
if(u==null){u=A.mn(b3,b4.a)
t=u.b
if(t.length===0)H.p(P.t("May not cache a shader with no name."))
if(b4.fr.bK(0,t))H.p(P.t('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.j(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.b8
b3=b5.e
if(!(b3 instanceof Z.cA))b3=b5.e=null
if(b3==null||!b3.d.n(0,r)){b3=s.k4
if(b3)b5.d.ac()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bH()
p.a.bH()
p=p.e
if(p!=null)p.ad(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.fI()
o=o.e
if(o!=null)o.ad(0)}m=b5.d.fH(new Z.ir(b4.a),r)
m.aI($.aS()).e=b2.a.Q.c
if(b3)m.aI($.aR()).e=b2.a.cx.c
if(q)m.aI($.aQ()).e=b2.a.ch.c
if(s.r2)m.aI($.bd()).e=b2.a.cy.c
if(p)m.aI($.be()).e=b2.a.db.c
if(s.ry)m.aI($.aP()).e=b2.a.dx.c
b5.e=m}l=H.c([],[T.hF])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.fW()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gY(p)
b3=b3.dy
b3.toString
b3.ab(p.a4(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gY(p)
o=b4.dx
o=b4.cx=p.m(0,o.gY(o))
p=o}b3=b3.fr
b3.toString
b3.ab(p.a4(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.ghp()
o=b4.dx
o=b4.ch=p.m(0,o.gY(o))
p=o}b3=b3.fy
b3.toString
b3.ab(p.a4(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gY(p)
b3=b3.fx
b3.toString
b3.ab(p.a4(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ab(C.i.a4(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ab(C.i.a4(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ab(C.i.a4(p,!0))}if(s.b7>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.b(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.b(b3,j)
b3=b3[j]
i=new Float32Array(H.bB(p.a4(0,!0)))
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
b3=b3.b8
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.d1
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.d0
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.u
h=new H.G([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gaj()
d=h.h(0,e)
if(d==null)d=0
h.j(0,e,d+1)
c=J.bI(b2.a.bP.h(0,e),d)
n=f.ghF()
b=$.ay
n=n.b0(b==null?$.ay=new V.M(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghK()
b=$.ay
n=n.b0(b==null?$.ay=new V.M(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gd_()){n=f.gcT()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gcU()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gcV()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bO.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gY(p)
p=P.u
a0=new H.G([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.j(0,0,d+1)
c=J.bI(b2.a.bR.h(0,0),d)
n=a.be(f.a)
b=n.a
a1=n.b
a2=n.c
if(typeof a2!=="number")return a2.m()
a2=n.t(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bQ.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gY(p)
p=P.u
a3=new H.G([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gaj()
d=a3.h(0,e)
if(d==null)d=0
a3.j(0,e,d+1)
c=J.bI(b2.a.bT.h(0,e),d)
a4=a.m(0,f.gY(f))
n=f.gY(f)
b=$.ay
n=n.b0(b==null?$.ay=new V.M(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ay
n=a4.b0(n==null?$.ay=new V.M(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaw()
n=a4.dh(0)
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
i=new Float32Array(H.bB(new V.cU(b,a1,a2,a5,a6,a7,a8,a9,n).a4(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaw()
n=f.gaw()
if(!C.b.T(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gaw()
b=n.gau(n)
if(b){b=c.f
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}f.gaM()
n=f.gdL()
b=c.x
b.toString
a1=n.gfT(n)
a2=n.gfU(n)
a5=n.gfV()
n=n.gfS()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaM()
if(!C.b.T(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gaM()
b=n.gau(n)
if(b){b=c.r
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}if(f.gd_()){n=f.gcT()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gcU()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gcV()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bS.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gY(p)
p=P.u
b1=new H.G([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.m)(p),++g){f=p[g]
e=f.gaj()
d=b1.h(0,e)
if(d==null)d=0
b1.j(0,e,d+1)
c=J.bI(b2.a.bV.h(0,e),d)
n=f.gho(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.ghI(f).i0()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.b0(f.gho(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gaG(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaw()
n=f.gcb()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gc9(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gi1()
b=c.x
b.a.uniform1f(b.d,n)
n=f.gi2()
b=c.y
b.a.uniform1f(b.d,n)
f.gaw()
n=f.gaw()
if(!C.b.T(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gaw()
b=n.gau(n)
if(b){b=c.dx
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}f.gaM()
n=f.gdL()
b=c.z
b.toString
a1=n.gfT(n)
a2=n.gfU(n)
a5=n.gfV()
n=n.gfS()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaM()
if(!C.b.T(l,n)){n.sas(0,l.length)
l.push(n)}n=f.gaM()
b=n.gau(n)
if(b){b=c.dy
b.toString
a1=n.gau(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gas(n)
b.a.uniform1i(b.d,n)}}if(f.ghJ()){n=f.ghH()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.ghG()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gd_()){n=f.gcT()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gcU()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gcV()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.m)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bU.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gY(p).dh(0)}b3=b3.id
b3.toString
b3.ab(p.a4(0,!0))}if(s.db){b2.e6(l,b2.ch)
b3=b2.a
p=b2.ch
b3.fk(b3.d2,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.d3
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.d4
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.d5
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.d6
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].b6(b4)
b3=b5.e
b3.b6(b4)
b3.aK(b4)
b3.dF(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].dF(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.fR()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cr().aT}}
O.fE.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cy(a,C.c.a_(b+3,4)*4))}}
O.fF.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.cE(a,C.c.a_(b+3,4)*4))}}
O.fH.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.d0(a,C.c.a_(b+3,4)*4))}}
O.fJ.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fK.prototype={
$2:function(a,b){if(typeof b!=="number")return b.v()
return this.b.push(new A.d7(a,C.c.a_(b+3,4)*4))}}
O.fL.prototype={
$2:function(a,b){return J.cv(a.a,b.a)}}
O.fy.prototype={
ao:function(){var u,t=this
t.ci()
u=t.f
if(!(Math.abs(u-1)<$.y().a)){t.f=1
u=new D.A(t.b,u,1)
u.b=!0
t.a.a7(u)}}}
O.cT.prototype={
ao:function(){},
cJ:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ao()
u=s.a
u.a=null
u.a7(null)}}}
O.fz.prototype={}
O.at.prototype={
cI:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.A(s.b+".color",u,a)
t.b=!0
s.a.a7(t)}},
ao:function(){this.ci()
this.cI(new V.V(1,1,1))},
saG:function(a,b){this.cJ(new A.Z(!0,!1,!1))
this.cI(b)}}
O.fB.prototype={}
O.fC.prototype={
ao:function(){var u,t=this
t.cj()
u=t.ch
if(!(Math.abs(u-1)<$.y().a)){t.ch=1
u=new D.A(t.b+".refraction",u,1)
u.b=!0
t.a.a7(u)}}}
O.fD.prototype={
cK:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.y().a)){u.ch=a
t=new D.A(u.b+".shininess",t,a)
t.b=!0
u.a.a7(t)}},
ao:function(){this.cj()
this.cK(100)}}
O.dc.prototype={}
T.hF.prototype={}
X.jU.prototype={}
X.f9.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.I():u}}
X.d_.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.I():u},
aA:function(a){var u=this.f
if(u!=null)u.F(a)},
e3:function(){return this.aA(null)},
saW:function(a){var u,t,s=this
if(!J.C(s.b,a)){u=s.b
if(u!=null)u.gB().L(0,s.gcn())
t=s.b
s.b=a
if(a!=null)a.gB().l(0,s.gcn())
u=new D.A("mover",t,s.b)
u.b=!0
s.aA(u)}}}
X.hB.prototype={}
V.jH.prototype={
$1:function(a){var u=C.d.dD(this.a.gh3(),2)
if(u!=="0.00")P.kq(u+" fps")}}
V.h8.prototype={
cR:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.kZ().gc5().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cP(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kv(m.c).l(0,q)
o=W.ma("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.h9(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kv(m.c).l(0,r.createElement("br"))},
aE:function(a,b,c){return this.cR(a,b,c,!1)},
cP:function(a){var u,t,s=P.kZ(),r=P.n,q=P.mi(s.gc5(),r,r)
q.j(0,this.a,a)
u=s.dz(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.iR([],[]).bf(""),"",t)}}
V.h9.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cP(u.d)}}}
V.hn.prototype={
dW:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.W(q,"scroll",new V.hp(o),!1)},
cS:function(a){var u,t,s,r,q,p,o,n
this.fn()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.h6(a),s.toString,r=new H.N(r),r=new P.ck(s.dE(new H.bU(r,r.gk(r))).a());r.A();){s=r.gK(r)
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
if(H.ly(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.b(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.j2(C.R,s,C.e,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+H.e(n)
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
fA:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fn:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hI()
t=P.n
u.a=new H.G([t,L.d9])
u.b=new H.G([t,L.dg])
u.c=P.kF(t)
u.d=u.O(0,q)
t=u.O(0,q).p(0,p)
s=K.Y(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.O(0,p).p(0,p)
s=new K.aJ()
r=[K.cR]
s.a=H.c([],r)
t.a.push(s)
t=K.Y(new H.N("*"))
s.a.push(t)
t=u.O(0,p).p(0,"BoldEnd")
s=K.Y(new H.N("*"))
t.a.push(s)
t.c=!0
t=u.O(0,q).p(0,o)
s=K.Y(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.O(0,o).p(0,o)
s=new K.aJ()
s.a=H.c([],r)
t.a.push(s)
t=K.Y(new H.N("_"))
s.a.push(t)
t=u.O(0,o).p(0,n)
s=K.Y(new H.N("_"))
t.a.push(s)
t.c=!0
t=u.O(0,q).p(0,m)
s=K.Y(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.O(0,m).p(0,m)
s=new K.aJ()
s.a=H.c([],r)
t.a.push(s)
t=K.Y(new H.N("`"))
s.a.push(t)
t=u.O(0,m).p(0,"CodeEnd")
s=K.Y(new H.N("`"))
t.a.push(s)
t.c=!0
t=u.O(0,q).p(0,l)
s=K.Y(new H.N("["))
t.a.push(s)
t.c=!0
t=u.O(0,l).p(0,k)
s=K.Y(new H.N("|"))
t.a.push(s)
s=u.O(0,l).p(0,j)
t=K.Y(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.O(0,l).p(0,l)
t=new K.aJ()
t.a=H.c([],r)
s.a.push(t)
s=K.Y(new H.N("|]"))
t.a.push(s)
s=u.O(0,k).p(0,j)
t=K.Y(new H.N("]"))
s.a.push(t)
s.c=!0
s=u.O(0,k).p(0,k)
t=new K.aJ()
t.a=H.c([],r)
s.a.push(t)
s=K.Y(new H.N("|]"))
t.a.push(s)
u.O(0,q).p(0,i).a.push(new K.eq())
s=u.O(0,i).p(0,i)
t=new K.aJ()
t.a=H.c([],r)
s.a.push(t)
s=K.Y(new H.N("*_`["))
t.a.push(s)
s=u.O(0,"BoldEnd")
s.d=s.a.b_(p)
s=u.O(0,n)
s.d=s.a.b_(o)
s=u.O(0,"CodeEnd")
s.d=s.a.b_(m)
s=u.O(0,j)
s.d=s.a.b_("Link")
s=u.O(0,i)
s.d=s.a.b_(i)
this.b=u}}
V.hp.prototype={
$1:function(a){P.kV(C.n,new V.ho(this.a))}}
V.ho.prototype={
$0:function(){var u=C.d.ae(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
K.jx.prototype={
$1:function(a){var u=H.o(a,"$ida").c,t=this.a.af(0,u,null),s=this.b.af(0,u,null),r=this.c
r.e.j(0,0,t)
r.e.j(0,1,s)
r.e.j(0,2,t)
r.e.j(0,3,s)
r.e.j(0,4,t)
r.e.j(0,5,s)
r.e.j(0,6,t)
r.e.j(0,7,s)}}
K.jF.prototype={
$1:function(a){a.ac()
this.a.sce(0,a)}}
K.jy.prototype={
$0:function(){this.a.$1(F.lm(30,null,30))}}
K.jz.prototype={
$0:function(){this.a.$1(F.ln(!0,100,20,1))}}
K.jA.prototype={
$0:function(){this.a.$1(F.ln(!1,30,12,0))}}
K.jB.prototype={
$0:function(){this.a.$1(F.od(20,20))}}
K.jC.prototype={
$0:function(){this.a.$1(F.og(1.5,0.25))}}
K.jD.prototype={
$0:function(){this.a.$1(F.o6(0.1))}}
K.jE.prototype={
$0:function(){this.a.$1(F.o1())}};(function aliases(){var u=J.a.prototype
u.dP=u.i
u=J.cN.prototype
u.dQ=u.i
u=K.cK.prototype
u.dO=u.aJ
u.cg=u.i
u=O.cT.prototype
u.ci=u.ao
u=O.at.prototype
u.cj=u.ao})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"nl","md",19)
t(P,"nQ","mW",7)
t(P,"nR","mX",7)
t(P,"nS","mY",7)
s(P,"ll","nO",9)
var m
r(m=E.aX.prototype,"gdq",0,0,null,["$1","$0"],["dr","hg"],0,0)
r(m,"gdm",0,0,null,["$1","$0"],["dn","hf"],0,0)
r(m,"gdk",0,0,null,["$1","$0"],["dl","hc"],0,0)
q(m,"gha","hb",4)
q(m,"ghd","he",4)
r(m=E.dd.prototype,"gck",0,0,null,["$1","$0"],["cm","cl"],0,0)
p(m,"ghu","dA",9)
o(m=X.dm.prototype,"geK","eL",5)
o(m,"gew","ex",5)
o(m,"geE","eF",2)
o(m,"geO","eP",10)
o(m,"geM","eN",10)
o(m,"geS","eT",2)
o(m,"geW","eX",2)
o(m,"geI","eJ",2)
o(m,"geU","eV",2)
o(m,"geG","eH",2)
o(m,"geY","eZ",17)
o(m,"gf_","f0",5)
o(m,"gfb","fc",6)
o(m,"gf7","f8",6)
o(m,"gf9","fa",6)
r(D.aV.prototype,"gdX",0,0,null,["$1","$0"],["al","dY"],0,0)
r(m=D.cP.prototype,"gcD",0,0,null,["$1","$0"],["cE","eQ"],0,0)
o(m,"gf1","f2",18)
q(m,"gep","eq",11)
q(m,"gf5","f6",11)
n(V.H.prototype,"gk","bY",12)
n(V.x.prototype,"gk","bY",12)
r(m=U.bP.prototype,"gaz",0,0,null,["$1","$0"],["E","a1"],0,0)
q(m,"gdZ","e_",13)
q(m,"gf3","f4",13)
r(m=U.dn.prototype,"gaz",0,0,null,["$1","$0"],["E","a1"],0,0)
o(m,"gbp","bq",1)
o(m,"gbr","bs",1)
o(m,"gbt","bu",1)
r(m=U.dp.prototype,"gaz",0,0,null,["$1","$0"],["E","a1"],0,0)
o(m,"gbp","bq",1)
o(m,"gbr","bs",1)
o(m,"gbt","bu",1)
o(m,"gej","ek",1)
o(m,"gel","em",1)
o(m,"gfv","fw",1)
o(m,"gft","fu",1)
o(m,"gfq","fs",1)
o(U.dq.prototype,"gen","eo",1)
r(m=M.cH.prototype,"gah",0,0,null,["$1","$0"],["am","e0"],0,0)
q(m,"geA","eB",4)
q(m,"geC","eD",4)
r(m=O.cS.prototype,"gey",0,0,null,["$1","$0"],["a7","ez"],0,0)
r(m,"gfi",0,0,null,["$1","$0"],["cG","fj"],0,0)
q(m,"ger","es",14)
q(m,"geu","ev",14)
r(X.d_.prototype,"gcn",0,0,null,["$1","$0"],["aA","e3"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.k2,J.a,J.a8,P.dK,P.j,H.bU,P.fd,H.cI,H.i_,H.eJ,H.hN,P.bl,H.bL,H.e0,P.a1,H.fm,H.fo,H.fg,P.e6,P.by,P.ck,P.dt,P.db,P.hz,P.de,P.j5,P.iN,P.iI,P.dJ,P.v,P.iY,P.fv,P.eG,P.j4,P.j3,P.ba,P.a9,P.a6,P.aW,P.h2,P.d8,P.dC,P.f8,P.r,P.P,P.b2,P.n,P.Q,P.bz,P.i1,P.iO,W.eN,W.K,W.cJ,P.iQ,P.iJ,P.bu,K.eq,K.cK,K.cR,K.hi,L.d9,L.df,L.dg,L.hI,O.ao,O.bW,E.eC,E.aX,E.bh,E.bq,E.dB,E.ha,D.X,E.dd,Z.ds,Z.ir,Z.cA,Z.bm,Z.b7,D.eF,D.ar,X.cB,X.cO,X.fj,X.fs,X.ad,X.fT,X.hJ,X.dm,D.ez,D.aV,D.a0,D.h5,D.ht,V.V,V.ap,V.f_,V.cU,V.aH,V.a3,V.M,V.aL,V.d3,V.H,V.x,U.dn,U.dp,U.dq,M.cH,A.cx,A.eu,A.Z,A.cy,A.cE,A.d0,A.d7,A.fA,A.c7,A.c8,A.ca,A.cb,A.dj,A.hV,F.aY,F.f2,F.bT,F.fl,F.c1,F.hj,F.hk,F.hl,F.hm,F.b6,F.id,F.ie,F.ii,F.ik,F.il,F.im,O.dc,O.cT,O.fB,X.jU,X.hB,X.d_,V.h8,V.hn])
s(J.a,[J.fe,J.cM,J.cN,J.aZ,J.bS,J.b_,H.bZ,H.b1,W.f,W.ep,W.bg,W.aq,W.F,W.dv,W.ac,W.eR,W.eS,W.dx,W.cG,W.dz,W.eU,W.i,W.dD,W.as,W.fa,W.dF,W.bR,W.fr,W.fN,W.dL,W.dM,W.av,W.dN,W.dQ,W.ax,W.dU,W.dW,W.aA,W.dX,W.aB,W.e1,W.ai,W.e4,W.hH,W.aD,W.e7,W.hL,W.i6,W.ec,W.ee,W.eg,W.ei,W.ek,P.aG,P.dH,P.aK,P.dS,P.h7,P.e2,P.aN,P.e9,P.ev,P.du,P.dZ])
s(J.cN,[J.h3,J.bx,J.b0])
t(J.k1,J.aZ)
s(J.bS,[J.cL,J.ff])
t(P.fq,P.dK)
s(P.fq,[H.dk,W.iz,W.iy,P.f4])
t(H.N,H.dk)
s(P.j,[H.q,H.bV,H.is,P.fc])
t(H.eX,H.bV)
s(P.fd,[H.fw,H.it])
t(H.eK,H.eJ)
s(P.bl,[H.h_,H.fi,H.hZ,H.eE,H.hg,P.cZ,P.am,P.i0,P.hX,P.hv,P.eI,P.eQ])
s(H.bL,[H.jN,H.hC,H.fh,H.js,H.jt,H.ju,P.iv,P.iu,P.iw,P.ix,P.iX,P.iW,P.je,P.iL,P.iM,P.fp,P.fu,P.eV,P.eW,P.i5,P.i2,P.i3,P.i4,P.iZ,P.j_,P.j1,P.j0,P.j9,P.j8,P.ja,P.jb,W.fP,W.fR,W.hf,W.hy,W.iD,P.iS,P.iT,P.jf,P.f5,P.f6,P.ex,E.hb,E.hc,E.hd,E.hG,D.f0,D.f1,F.j6,F.jg,F.ji,F.jj,F.jk,F.jI,F.jJ,F.jM,F.jw,F.jh,F.jp,F.jq,F.ip,F.io,F.ig,F.ih,O.fE,O.fF,O.fG,O.fH,O.fI,O.fJ,O.fK,O.fL,V.jH,V.h9,V.hp,V.ho,K.jx,K.jF,K.jy,K.jz,K.jA,K.jB,K.jC,K.jD,K.jE])
s(H.hC,[H.hw,H.bJ])
t(P.ft,P.a1)
t(H.G,P.ft)
t(H.fn,H.q)
t(H.cV,H.b1)
s(H.cV,[H.ce,H.cg])
t(H.cf,H.ce)
t(H.c_,H.cf)
t(H.ch,H.cg)
t(H.cW,H.ch)
s(H.cW,[H.fU,H.fV,H.fW,H.fX,H.fY,H.cX,H.c0])
t(P.iV,P.fc)
t(P.iK,P.j5)
t(P.iH,P.iN)
t(P.eb,P.fv)
t(P.dl,P.eb)
s(P.eG,[P.eA,P.eY])
t(P.eL,P.hz)
s(P.eL,[P.eB,P.i9,P.i8])
t(P.i7,P.eY)
s(P.a6,[P.J,P.u])
s(P.am,[P.bs,P.fb])
t(P.iB,P.bz)
s(W.f,[W.D,W.f3,W.bX,W.az,W.ci,W.aC,W.aj,W.cl,W.iq,W.cd,P.ey,P.bf])
s(W.D,[W.T,W.aU])
s(W.T,[W.l,P.k])
s(W.l,[W.er,W.es,W.bi,W.f7,W.hh])
t(W.eM,W.aq)
t(W.bM,W.dv)
s(W.ac,[W.eO,W.eP])
t(W.dy,W.dx)
t(W.cF,W.dy)
t(W.dA,W.dz)
t(W.eT,W.dA)
t(W.ah,W.bg)
t(W.dE,W.dD)
t(W.bO,W.dE)
t(W.dG,W.dF)
t(W.bQ,W.dG)
t(W.b4,W.i)
s(W.b4,[W.bp,W.aw,W.bt])
t(W.fO,W.dL)
t(W.fQ,W.dM)
t(W.dO,W.dN)
t(W.fS,W.dO)
t(W.dR,W.dQ)
t(W.cY,W.dR)
t(W.dV,W.dU)
t(W.h4,W.dV)
t(W.he,W.dW)
t(W.cj,W.ci)
t(W.hr,W.cj)
t(W.dY,W.dX)
t(W.hs,W.dY)
t(W.hx,W.e1)
t(W.e5,W.e4)
t(W.hD,W.e5)
t(W.cm,W.cl)
t(W.hE,W.cm)
t(W.e8,W.e7)
t(W.hK,W.e8)
t(W.b8,W.aw)
t(W.ed,W.ec)
t(W.iA,W.ed)
t(W.dw,W.cG)
t(W.ef,W.ee)
t(W.iE,W.ef)
t(W.eh,W.eg)
t(W.dP,W.eh)
t(W.ej,W.ei)
t(W.iP,W.ej)
t(W.el,W.ek)
t(W.iU,W.el)
t(W.iC,P.db)
t(P.iR,P.iQ)
t(P.a4,P.iJ)
t(P.dI,P.dH)
t(P.fk,P.dI)
t(P.dT,P.dS)
t(P.h0,P.dT)
t(P.e3,P.e2)
t(P.hA,P.e3)
t(P.ea,P.e9)
t(P.hM,P.ea)
t(P.ew,P.du)
t(P.h1,P.bf)
t(P.e_,P.dZ)
t(P.hu,P.e_)
s(K.cK,[K.aJ,L.di])
s(D.X,[E.da,D.bn,D.bo,D.A,X.h6])
s(E.eC,[Z.cz,A.d5,T.hF])
s(X.h6,[X.cQ,X.aI,X.bY,X.dh])
s(O.ao,[D.cP,U.bP])
s(D.eF,[U.eH,U.aa])
s(U.aa,[U.cC,U.d4])
t(A.fx,A.d5)
s(A.dj,[A.b5,A.hS,A.hT,A.hU,A.hQ,A.R,A.hR,A.E,A.c6,A.hW,A.c9,A.ab,A.bv,A.bw])
t(F.hq,F.f2)
t(F.hP,F.fl)
t(F.ij,F.ik)
t(F.fZ,F.il)
t(O.cS,O.dc)
s(O.cT,[O.fy,O.fz,O.at])
s(O.at,[O.fC,O.fD])
t(X.f9,X.hB)
u(H.dk,H.i_)
u(H.ce,P.v)
u(H.cf,H.cI)
u(H.cg,P.v)
u(H.ch,H.cI)
u(P.dK,P.v)
u(P.eb,P.iY)
u(W.dv,W.eN)
u(W.dx,P.v)
u(W.dy,W.K)
u(W.dz,P.v)
u(W.dA,W.K)
u(W.dD,P.v)
u(W.dE,W.K)
u(W.dF,P.v)
u(W.dG,W.K)
u(W.dL,P.a1)
u(W.dM,P.a1)
u(W.dN,P.v)
u(W.dO,W.K)
u(W.dQ,P.v)
u(W.dR,W.K)
u(W.dU,P.v)
u(W.dV,W.K)
u(W.dW,P.a1)
u(W.ci,P.v)
u(W.cj,W.K)
u(W.dX,P.v)
u(W.dY,W.K)
u(W.e1,P.a1)
u(W.e4,P.v)
u(W.e5,W.K)
u(W.cl,P.v)
u(W.cm,W.K)
u(W.e7,P.v)
u(W.e8,W.K)
u(W.ec,P.v)
u(W.ed,W.K)
u(W.ee,P.v)
u(W.ef,W.K)
u(W.eg,P.v)
u(W.eh,W.K)
u(W.ei,P.v)
u(W.ej,W.K)
u(W.ek,P.v)
u(W.el,W.K)
u(P.dH,P.v)
u(P.dI,W.K)
u(P.dS,P.v)
u(P.dT,W.K)
u(P.e2,P.v)
u(P.e3,W.K)
u(P.e9,P.v)
u(P.ea,W.K)
u(P.du,P.a1)
u(P.dZ,P.v)
u(P.e_,W.K)})()
var v={mangledGlobalNames:{u:"int",J:"double",a6:"num",n:"String",ba:"bool",b2:"Null",r:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.b2,args:[,,]},{func:1,ret:-1,args:[P.u,[P.j,E.aX]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bt]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bp]},{func:1,ret:-1,args:[P.u,[P.j,D.a0]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.u,[P.j,U.aa]]},{func:1,ret:-1,args:[P.u,[P.j,V.aH]]},{func:1,ret:P.b2,args:[,]},{func:1,ret:P.bu,args:[,,]},{func:1,ret:-1,args:[W.b8]},{func:1,ret:P.ba,args:[[P.j,D.a0]]},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.bi.prototype
C.N=J.a.prototype
C.b=J.aZ.prototype
C.c=J.cL.prototype
C.i=J.cM.prototype
C.d=J.bS.prototype
C.a=J.b_.prototype
C.O=J.b0.prototype
C.y=J.h3.prototype
C.o=J.bx.prototype
C.z=W.b8.prototype
C.A=W.cd.prototype
C.B=new E.bh("Browser.chrome")
C.p=new E.bh("Browser.firefox")
C.q=new E.bh("Browser.edge")
C.C=new E.bh("Browser.other")
C.Y=new P.eB()
C.D=new P.eA()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.E=function() {
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
C.J=function(getTagFallback) {
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
C.F=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.G=function(hooks) {
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
C.I=function(hooks) {
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
C.H=function(hooks) {
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

C.K=new P.h2()
C.e=new P.i7()
C.L=new P.i9()
C.f=new P.iK()
C.n=new P.aW(0)
C.M=new P.aW(5e6)
C.u=H.c(u([127,2047,65535,1114111]),[P.u])
C.j=H.c(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.k=H.c(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.l=H.c(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.Q=H.c(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.R=H.c(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.c(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.v=H.c(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.S=H.c(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.w=H.c(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.P=H.c(u([]),[P.n])
C.T=new H.eK(0,{},C.P,[P.n,P.n])
C.U=new E.bq("OperatingSystem.windows")
C.x=new E.bq("OperatingSystem.mac")
C.V=new E.bq("OperatingSystem.linux")
C.W=new E.bq("OperatingSystem.other")
C.X=new P.by(null,2)})();(function staticFields(){$.an=0
$.bK=null
$.kx=null
$.ls=null
$.lk=null
$.lw=null
$.jl=null
$.jv=null
$.ko=null
$.bC=null
$.cp=null
$.cq=null
$.kj=!1
$.ak=C.f
$.a5=[]
$.eZ=null
$.kJ=null
$.kM=null
$.ay=null
$.kS=null
$.l1=null
$.l4=null
$.l3=null
$.ia=null
$.ib=null
$.ic=null
$.l2=null
$.kL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"ok","lC",function(){return H.lr("_$dart_dartClosure")})
u($,"ol","kr",function(){return H.lr("_$dart_js")})
u($,"om","lD",function(){return H.aE(H.hO({
toString:function(){return"$receiver$"}}))})
u($,"on","lE",function(){return H.aE(H.hO({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oo","lF",function(){return H.aE(H.hO(null))})
u($,"op","lG",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"os","lJ",function(){return H.aE(H.hO(void 0))})
u($,"ot","lK",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"or","lI",function(){return H.aE(H.kX(null))})
u($,"oq","lH",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"ov","lM",function(){return H.aE(H.kX(void 0))})
u($,"ou","lL",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"oJ","ks",function(){return P.mV()})
u($,"ow","lN",function(){return P.mR()})
u($,"oK","lR",function(){return H.mp(H.bB(H.c([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"oM","lS",function(){return P.mD("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"oN","lT",function(){return P.nj()})
u($,"oD","lQ",function(){return Z.ae(0)})
u($,"ox","lO",function(){return Z.ae(511)})
u($,"oF","aS",function(){return Z.ae(1)})
u($,"oE","aR",function(){return Z.ae(2)})
u($,"oz","aQ",function(){return Z.ae(4)})
u($,"oG","bd",function(){return Z.ae(8)})
u($,"oH","be",function(){return Z.ae(16)})
u($,"oA","ct",function(){return Z.ae(32)})
u($,"oB","cu",function(){return Z.ae(64)})
u($,"oC","lP",function(){return Z.ae(96)})
u($,"oI","bH",function(){return Z.ae(128)})
u($,"oy","aP",function(){return Z.ae(256)})
u($,"oj","lB",function(){return new V.f_(1e-9)})
u($,"oi","y",function(){return $.lB()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bZ,DataView:H.b1,ArrayBufferView:H.b1,Float32Array:H.c_,Float64Array:H.c_,Int16Array:H.fU,Int32Array:H.fV,Int8Array:H.fW,Uint16Array:H.fX,Uint32Array:H.fY,Uint8ClampedArray:H.cX,CanvasPixelArray:H.cX,Uint8Array:H.c0,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.ep,HTMLAnchorElement:W.er,HTMLAreaElement:W.es,Blob:W.bg,HTMLCanvasElement:W.bi,CDATASection:W.aU,CharacterData:W.aU,Comment:W.aU,ProcessingInstruction:W.aU,Text:W.aU,CSSPerspective:W.eM,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bM,MSStyleCSSProperties:W.bM,CSS2Properties:W.bM,CSSImageValue:W.ac,CSSKeywordValue:W.ac,CSSNumericValue:W.ac,CSSPositionValue:W.ac,CSSResourceValue:W.ac,CSSUnitValue:W.ac,CSSURLImageValue:W.ac,CSSStyleValue:W.ac,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.eO,CSSUnparsedValue:W.eP,DataTransferItemList:W.eR,DOMException:W.eS,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.eT,DOMTokenList:W.eU,Element:W.T,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ah,FileList:W.bO,FileWriter:W.f3,HTMLFormElement:W.f7,Gamepad:W.as,History:W.fa,HTMLCollection:W.bQ,HTMLFormControlsCollection:W.bQ,HTMLOptionsCollection:W.bQ,ImageData:W.bR,KeyboardEvent:W.bp,Location:W.fr,MediaList:W.fN,MessagePort:W.bX,MIDIInputMap:W.fO,MIDIOutputMap:W.fQ,MimeType:W.av,MimeTypeArray:W.fS,PointerEvent:W.aw,MouseEvent:W.aw,DragEvent:W.aw,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.cY,RadioNodeList:W.cY,Plugin:W.ax,PluginArray:W.h4,RTCStatsReport:W.he,HTMLSelectElement:W.hh,SourceBuffer:W.az,SourceBufferList:W.hr,SpeechGrammar:W.aA,SpeechGrammarList:W.hs,SpeechRecognitionResult:W.aB,Storage:W.hx,CSSStyleSheet:W.ai,StyleSheet:W.ai,TextTrack:W.aC,TextTrackCue:W.aj,VTTCue:W.aj,TextTrackCueList:W.hD,TextTrackList:W.hE,TimeRanges:W.hH,Touch:W.aD,TouchEvent:W.bt,TouchList:W.hK,TrackDefaultList:W.hL,CompositionEvent:W.b4,FocusEvent:W.b4,TextEvent:W.b4,UIEvent:W.b4,URL:W.i6,VideoTrackList:W.iq,WheelEvent:W.b8,Window:W.cd,DOMWindow:W.cd,CSSRuleList:W.iA,ClientRect:W.dw,DOMRect:W.dw,GamepadList:W.iE,NamedNodeMap:W.dP,MozNamedAttrMap:W.dP,SpeechRecognitionResultList:W.iP,StyleSheetList:W.iU,SVGLength:P.aG,SVGLengthList:P.fk,SVGNumber:P.aK,SVGNumberList:P.h0,SVGPointList:P.h7,SVGStringList:P.hA,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGScriptElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGTransform:P.aN,SVGTransformList:P.hM,AudioBuffer:P.ev,AudioParamMap:P.ew,AudioTrackList:P.ey,AudioContext:P.bf,webkitAudioContext:P.bf,BaseAudioContext:P.bf,OfflineAudioContext:P.h1,SQLResultSetRowList:P.hu})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cV.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.cW.$nativeSuperclassTag="ArrayBufferView"
W.ci.$nativeSuperclassTag="EventTarget"
W.cj.$nativeSuperclassTag="EventTarget"
W.cl.$nativeSuperclassTag="EventTarget"
W.cm.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(K.lu,[])
else K.lu([])})})()
//# sourceMappingURL=test.dart.js.map
