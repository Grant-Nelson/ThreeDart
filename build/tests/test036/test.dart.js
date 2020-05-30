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
a[c]=function(){a[c]=function(){H.nX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.k5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.k5"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.k5(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={jQ:function jQ(){},
jq:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
m1:function(a,b,c,d){if(!!J.S(a).$io)return new H.f4(a,b,[c,d])
return new H.bW(a,b,[c,d])},
kp:function(){return new P.hC("No element")},
mo:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.G()
H.dc(a,0,u-1,b)},
dc:function(a,b,c,d){if(c-b<=32)H.mn(a,b,c,d)
else H.mm(a,b,c,d)},
mn:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bh(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.Z()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
mm:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a0(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a0(a4+a5,2),f=g-j,e=g+j,d=J.bh(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.C(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.K()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.Z()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
s=o
t=n
break}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.h(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.K()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.Z()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.Z()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.K()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.k(a3,a4,d.h(a3,a2))
d.k(a3,a2,b)
a2=s+1
d.k(a3,a5,d.h(a3,a2))
d.k(a3,a2,a0)
H.dc(a3,a4,t-2,a6)
H.dc(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.C(a6.$2(d.h(a3,t),b),0);)++t
for(;J.C(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.K()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.dc(a3,t,s,a6)}else H.dc(a3,t,s,a6)},
M:function M(a){this.a=a},
o:function o(){},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bW:function bW(a,b,c){this.a=a
this.b=b
this.$ti=c},
f4:function f4(a,b,c){this.a=a
this.b=b
this.$ti=c},
fD:function fD(a,b){this.a=null
this.b=a
this.c=b},
iA:function iA(a,b,c){this.a=a
this.b=b
this.$ti=c},
iB:function iB(a,b){this.a=a
this.b=b},
cJ:function cJ(){},
i7:function i7(){},
dr:function dr(){},
lN:function(){throw H.c(P.x("Cannot modify unmodifiable Map"))},
cr:function(a){var u,t=H.nZ(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
nJ:function(a){return v.types[a]},
lb:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.S(a).$iy},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ao(a)
if(typeof u!=="string")throw H.c(H.ab(a))
return u},
c2:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
me:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.W(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
c3:function(a){return H.m5(a)+H.l0(H.cq(a),0,null)},
m5:function(a){var u,t,s,r,q,p,o,n=J.S(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibz){r=C.r(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cr(t.length>1&&C.a.H(t,0)===36?C.a.ad(t,1):t)},
m6:function(){if(!!self.location)return self.location.href
return},
kz:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
mf:function(a){var u,t,s,r=H.b([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ab(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aF(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ab(s))}return H.kz(r)},
kA:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ab(s))
if(s<0)throw H.c(H.ab(s))
if(s>65535)return H.mf(a)}return H.kz(a)},
mg:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.hL()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
d5:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aF(u,10))>>>0,56320|u&1023)}}throw H.c(P.W(a,0,1114111,null,null))},
bt:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
md:function(a){var u=H.bt(a).getFullYear()+0
return u},
mb:function(a){var u=H.bt(a).getMonth()+1
return u},
m7:function(a){var u=H.bt(a).getDate()+0
return u},
m8:function(a){var u=H.bt(a).getHours()+0
return u},
ma:function(a){var u=H.bt(a).getMinutes()+0
return u},
mc:function(a){var u=H.bt(a).getSeconds()+0
return u},
m9:function(a){var u=H.bt(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.ab(a))},
d:function(a,b){if(a==null)J.af(a)
throw H.c(H.bG(a,b))},
bG:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.L(b,a,s,null,u)
return P.d6(b,s)},
nD:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bu(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bu(a,c,!0,b,"end",u)
return new P.ap(!0,b,"end",null)},
ab:function(a){return new P.ap(!0,a,null,null)},
nA:function(a){if(typeof a!=="number")throw H.c(H.ab(a))
return a},
c:function(a){var u
if(a==null)a=new P.d1()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.lh})
u.name=""}else u.toString=H.lh
return u},
lh:function(){return J.ao(this.dartException)},
m:function(a){throw H.c(a)},
t:function(a){throw H.c(P.bp(a))},
aE:function(a){var u,t,s,r,q,p
a=H.lf(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hW(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hX:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
kJ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
ku:function(a,b){return new H.h6(a,b==null?null:b.method)},
jR:function(a,b){var u=b==null,t=u?null:b.method
return new H.fp(a,t,u?null:b.receiver)},
bi:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.jD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aF(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jR(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.ku(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.lk()
q=$.ll()
p=$.lm()
o=$.ln()
n=$.lq()
m=$.lr()
l=$.lp()
$.lo()
k=$.lt()
j=$.ls()
i=r.ag(u)
if(i!=null)return f.$1(H.jR(u,i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.jR(u,i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.ku(u,i))}}return f.$1(new H.i6(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.de()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ap(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.de()
return a},
k7:function(a){var u
if(a==null)return new H.e5(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.e5(a)},
nH:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
nN:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.p("Unsupported number of arguments for wrapped closure"))},
bF:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.nN)
a.$identity=u
return u},
lM:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hD().constructor.prototype):Object.create(new H.bK(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aq
if(typeof t!=="number")return t.D()
$.aq=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.kl(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.lI(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.kl(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
lI:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.nJ,a)
if(typeof a=="function")if(b)return a
else{u=c?H.kj:H.jH
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
lJ:function(a,b,c,d){var u=H.jH
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
kl:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.lL(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.lJ(t,!r,u,b)
if(t===0){r=$.aq
if(typeof r!=="number")return r.D()
$.aq=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bL
return new Function(r+H.e(q==null?$.bL=H.eJ("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aq
if(typeof r!=="number")return r.D()
$.aq=r+1
o+=r
r="return function("+o+"){return this."
q=$.bL
return new Function(r+H.e(q==null?$.bL=H.eJ("self"):q)+"."+H.e(u)+"("+o+");}")()},
lK:function(a,b,c,d){var u=H.jH,t=H.kj
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
lL:function(a,b){var u,t,s,r,q,p,o,n=$.bL
if(n==null)n=$.bL=H.eJ("self")
u=$.ki
if(u==null)u=$.ki=H.eJ("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.lK(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.aq
if(typeof u!=="number")return u.D()
$.aq=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.aq
if(typeof u!=="number")return u.D()
$.aq=u+1
return new Function(n+u+"}")()},
k5:function(a,b,c,d,e,f,g){return H.lM(a,b,c,d,!!e,!!f,g)},
jH:function(a){return a.a},
kj:function(a){return a.c},
eJ:function(a){var u,t,s,r=new H.bK("self","target","receiver","name"),q=J.jO(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
nR:function(a,b){throw H.c(H.lH(a,H.cr(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.S(a)[b]
else u=!0
if(u)return a
H.nR(a,b)},
nF:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lH:function(a,b){return new H.eK("CastError: "+P.jL(a)+": type '"+H.e(H.nw(a))+"' is not a subtype of type '"+b+"'")},
nw:function(a){var u,t=J.S(a)
if(!!t.$ibN){u=H.nF(t)
if(u!=null)return H.nS(u)
return"Closure"}return H.c3(a)},
nX:function(a){throw H.c(new P.eY(a))},
mk:function(a){return new H.hn(a)},
l8:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cq:function(a){if(a==null)return
return a.$ti},
oy:function(a,b,c){return H.jB(a["$a"+H.e(c)],H.cq(b))},
nI:function(a,b,c,d){var u=H.jB(a["$a"+H.e(c)],H.cq(b))
return u==null?null:u[d]},
l9:function(a,b,c){var u=H.jB(a["$a"+H.e(b)],H.cq(a))
return u==null?null:u[c]},
aS:function(a,b){var u=H.cq(a)
return u==null?null:u[b]},
nS:function(a){return H.bf(a,null)},
bf:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cr(a[0].name)+H.l0(a,1,b)
if(typeof a=="function")return H.cr(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.n1(a,b)
if('futureOr' in a)return"FutureOr<"+H.bf("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
n1:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.D(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a_)p+=" extends "+H.bf(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bf(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bf(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bf(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.nG(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bf(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
l0:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.P("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bf(p,c)}return"<"+u.i(0)+">"},
jB:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
ow:function(a,b,c){return a.apply(b,H.jB(J.S(b)["$a"+H.e(c)],H.cq(b)))},
ox:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
nO:function(a){var u,t,s,r,q=$.la.$1(a),p=$.jn[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.l5.$2(a,q)
if(q!=null){p=$.jn[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ju[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.jz(u)
$.jn[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ju[q]=u
return u}if(s==="-"){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ld(a,u)
if(s==="*")throw H.c(P.i5(q))
if(v.leafTags[q]===true){r=H.jz(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ld(a,u)},
ld:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.k9(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
jz:function(a){return J.k9(a,!1,null,!!a.$iy)},
nP:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.jz(u)
else return J.k9(u,c,null,null)},
nL:function(){if(!0===$.k8)return
$.k8=!0
H.nM()},
nM:function(){var u,t,s,r,q,p,o,n
$.jn=Object.create(null)
$.ju=Object.create(null)
H.nK()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.le.$1(q)
if(p!=null){o=H.nP(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
nK:function(){var u,t,s,r,q,p,o=C.D()
o=H.bE(C.E,H.bE(C.F,H.bE(C.t,H.bE(C.t,H.bE(C.G,H.bE(C.H,H.bE(C.I(C.r),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.la=new H.jr(r)
$.l5=new H.js(q)
$.le=new H.jt(p)},
bE:function(a,b){return a(b)||b},
lW:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.N("Illegal RegExp pattern ("+String(p)+")",a,null))},
nU:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
nE:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
lf:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lg:function(a,b,c){var u=H.nV(a,b,c)
return u},
nV:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.lf(b),'g'),H.nE(c))},
eR:function eR(){},
eS:function eS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hW:function hW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
h6:function h6(a,b){this.a=a
this.b=b},
fp:function fp(a,b,c){this.a=a
this.b=b
this.c=c},
i6:function i6(a){this.a=a},
jD:function jD(a){this.a=a},
e5:function e5(a){this.a=a
this.b=null},
bN:function bN(){},
hJ:function hJ(){},
hD:function hD(){},
bK:function bK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
hn:function hn(a){this.a=a},
G:function G(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fo:function fo(a){this.a=a},
ft:function ft(a,b){this.a=a
this.b=b
this.c=null},
fu:function fu(a,b){this.a=a
this.$ti=b},
fv:function fv(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
fn:function fn(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
be:function(a){return a},
m4:function(a){return new Int8Array(a)},
aF:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bG(b,a))},
n_:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.nD(a,b,c))
return b},
c_:function c_(){},
b6:function b6(){},
cY:function cY(){},
c0:function c0(){},
cZ:function cZ(){},
h0:function h0(){},
h1:function h1(){},
h2:function h2(){},
h3:function h3(){},
h4:function h4(){},
d_:function d_(){},
c1:function c1(){},
ce:function ce(){},
cf:function cf(){},
cg:function cg(){},
ch:function ch(){},
nG:function(a){return J.kq(a?Object.keys(a):[],null)},
nZ:function(a){return v.mangledGlobalNames[a]},
nQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
k9:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jp:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.k8==null){H.nL()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.i5("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.kc()]
if(r!=null)return r
r=H.nO(a)
if(r!=null)return r
if(typeof a=="function")return C.O
u=Object.getPrototypeOf(a)
if(u==null)return C.z
if(u===Object.prototype)return C.z
if(typeof s=="function"){Object.defineProperty(s,$.kc(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
lT:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.jG(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.W(a,0,4294967295,"length",null))
return J.kq(new Array(a),b)},
kq:function(a,b){return J.jO(H.b(a,[b]))},
jO:function(a){a.fixed$length=Array
return a},
lU:function(a,b){return J.cu(a,b)},
S:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cN.prototype
return J.cM.prototype}if(typeof a=="string")return J.b3.prototype
if(a==null)return J.cO.prototype
if(typeof a=="boolean")return J.fm.prototype
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a_)return a
return J.jp(a)},
bh:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a_)return a
return J.jp(a)},
jo:function(a){if(a==null)return a
if(a.constructor==Array)return J.b2.prototype
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a_)return a
return J.jp(a)},
l7:function(a){if(typeof a=="number")return J.bU.prototype
if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bz.prototype
return a},
k6:function(a){if(typeof a=="string")return J.b3.prototype
if(a==null)return a
if(!(a instanceof P.a_))return J.bz.prototype
return a},
er:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.b4.prototype
return a}if(a instanceof P.a_)return a
return J.jp(a)},
C:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.S(a).p(a,b)},
ke:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.l7(a).q(a,b)},
bJ:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lb(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).h(a,b)},
jE:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.lb(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jo(a).k(a,b,c)},
lB:function(a,b){return J.k6(a).H(a,b)},
lC:function(a,b,c){return J.er(a).fq(a,b,c)},
lD:function(a,b,c,d){return J.er(a).fM(a,b,c,d)},
lE:function(a,b){return J.k6(a).V(a,b)},
cu:function(a,b){return J.l7(a).aI(a,b)},
jF:function(a,b){return J.jo(a).I(a,b)},
lF:function(a,b,c,d){return J.er(a).h3(a,b,c,d)},
kf:function(a,b){return J.jo(a).E(a,b)},
kg:function(a){return J.er(a).gbN(a)},
cv:function(a){return J.S(a).gF(a)},
aW:function(a){return J.jo(a).gP(a)},
af:function(a){return J.bh(a).gj(a)},
lG:function(a,b){return J.er(a).hy(a,b)},
ao:function(a){return J.S(a).i(a)},
a:function a(){},
fm:function fm(){},
cO:function cO(){},
cP:function cP(){},
ha:function ha(){},
bz:function bz(){},
b4:function b4(){},
b2:function b2(a){this.$ti=a},
jP:function jP(a){this.$ti=a},
a2:function a2(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bU:function bU(){},
cN:function cN(){},
cM:function cM(){},
b3:function b3(){}},P={
mC:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.nx()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bF(new P.iD(s),1)).observe(u,{childList:true})
return new P.iC(s,u,t)}else if(self.setImmediate!=null)return P.ny()
return P.nz()},
mD:function(a){self.scheduleImmediate(H.bF(new P.iE(a),0))},
mE:function(a){self.setImmediate(H.bF(new P.iF(a),0))},
mF:function(a){P.jU(C.p,a)},
jU:function(a,b){var u=C.c.a0(a.a,1000)
return P.mK(u<0?0:u,b)},
kI:function(a,b){var u=C.c.a0(a.a,1000)
return P.mL(u<0?0:u,b)},
mK:function(a,b){var u=new P.eb()
u.e_(a,b)
return u},
mL:function(a,b){var u=new P.eb()
u.e0(a,b)
return u},
ot:function(a){return new P.bA(a,1)},
mG:function(){return C.V},
mH:function(a){return new P.bA(a,3)},
n4:function(a,b){return new P.j2(a,[b])},
nq:function(){var u,t
for(;u=$.bD,u!=null;){$.cp=null
t=u.b
$.bD=t
if(t==null)$.co=null
u.a.$0()}},
nv:function(){$.k3=!0
try{P.nq()}finally{$.cp=null
$.k3=!1
if($.bD!=null)$.kd().$1(P.l6())}},
nt:function(a){var u=new P.dz(a)
if($.bD==null){$.bD=$.co=u
if(!$.k3)$.kd().$1(P.l6())}else $.co=$.co.b=u},
nu:function(a){var u,t,s=$.bD
if(s==null){P.nt(a)
$.cp=$.co
return}u=new P.dz(a)
t=$.cp
if(t==null){u.b=s
$.bD=$.cp=u}else{u.b=t.b
$.cp=t.b=u
if(u.b==null)$.co=u}},
kH:function(a,b){var u=$.am
if(u===C.f)return P.jU(a,b)
return P.jU(a,u.fQ(b))},
mt:function(a,b){var u=$.am
if(u===C.f)return P.kI(a,b)
return P.kI(a,u.cY(b,P.dk))},
l1:function(a,b,c,d,e){var u={}
u.a=d
P.nu(new P.jk(u,e))},
nr:function(a,b,c,d){var u,t=$.am
if(t===c)return d.$0()
$.am=c
u=t
try{t=d.$0()
return t}finally{$.am=u}},
ns:function(a,b,c,d,e){var u,t=$.am
if(t===c)return d.$1(e)
$.am=c
u=t
try{t=d.$1(e)
return t}finally{$.am=u}},
iD:function iD(a){this.a=a},
iC:function iC(a,b,c){this.a=a
this.b=b
this.c=c},
iE:function iE(a){this.a=a},
iF:function iF(a){this.a=a},
eb:function eb(){this.c=0},
j4:function j4(a,b){this.a=a
this.b=b},
j3:function j3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bA:function bA(a,b){this.a=a
this.b=b},
ck:function ck(a){var _=this
_.a=a
_.d=_.c=_.b=null},
j2:function j2(a,b){this.a=a
this.$ti=b},
dz:function dz(a){this.a=a
this.b=null},
dg:function dg(){},
hG:function hG(){},
dk:function dk(){},
jd:function jd(){},
jk:function jk(a,b){this.a=a
this.b=b},
iS:function iS(){},
iT:function iT(a,b){this.a=a
this.b=b},
iU:function iU(a,b,c){this.a=a
this.b=b
this.c=c},
lX:function(a,b){return new H.G([a,b])},
kr:function(a,b){return new H.G([a,b])},
lZ:function(a){return H.nH(a,new H.G([null,null]))},
ks:function(a){return new P.iP([a])},
jZ:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
mJ:function(a,b){var u=new P.dO(a,b)
u.c=a.e
return u},
lS:function(a,b,c){var u,t
if(P.k4(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.n])
$.a7.push(a)
try{P.n3(a,u)}finally{if(0>=$.a7.length)return H.d($.a7,-1)
$.a7.pop()}t=P.kD(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jN:function(a,b,c){var u,t
if(P.k4(a))return b+"..."+c
u=new P.P(b)
$.a7.push(a)
try{t=u
t.a=P.kD(t.a,a,", ")}finally{if(0>=$.a7.length)return H.d($.a7,-1)
$.a7.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
k4:function(a){var u,t
for(u=$.a7.length,t=0;t<u;++t)if(a===$.a7[t])return!0
return!1},
n3:function(a,b){var u,t,s,r,q,p,o,n=a.gP(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.u())return
u=H.e(n.gB(n))
b.push(u)
m+=u.length+2;++l}if(!n.u()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gB(n);++l
if(!n.u()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gB(n);++l
for(;n.u();r=q,q=p){p=n.gB(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
lY:function(a,b,c){var u=P.lX(b,c)
a.E(0,new P.fw(u))
return u},
jT:function(a){var u,t={}
if(P.k4(a))return"{...}"
u=new P.P("")
try{$.a7.push(a)
u.a+="{"
t.a=!0
J.kf(a,new P.fB(t,u))
u.a+="}"}finally{if(0>=$.a7.length)return H.d($.a7,-1)
$.a7.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iP:function iP(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iQ:function iQ(a){this.a=a
this.c=this.b=null},
dO:function dO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fk:function fk(){},
fw:function fw(a){this.a=a},
fx:function fx(){},
v:function v(){},
fA:function fA(){},
fB:function fB(a,b){this.a=a
this.b=b},
a5:function a5(){},
j5:function j5(){},
fC:function fC(){},
ds:function ds(a,b){this.a=a
this.$ti=b},
iV:function iV(){},
dP:function dP(){},
eg:function eg(){},
mw:function(a,b,c,d){if(b instanceof Uint8Array)return P.mx(!1,b,c,d)
return},
mx:function(a,b,c,d){var u,t,s=$.lu()
if(s==null)return
u=0===c
if(u&&!0)return P.jX(s,b)
t=b.length
d=P.aN(c,d,t)
if(u&&d===t)return P.jX(s,b)
return P.jX(s,b.subarray(c,d))},
jX:function(a,b){if(P.mz(b))return
return P.mA(a,b)},
mA:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.bi(t)}return},
mz:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
my:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.bi(t)}return},
l3:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.u(c)
u=J.bh(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a7()
if((s&127)!==s)return t-b}return c-b},
kh:function(a,b,c,d,e,f){if(C.c.b6(f,4)!==0)throw H.c(P.N("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.N("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.N("Invalid base64 padding, more than two '=' characters",a,b))},
eG:function eG(){},
eH:function eH(){},
eM:function eM(){},
eT:function eT(){},
f5:function f5(){},
ig:function ig(){},
ii:function ii(){},
jc:function jc(a){this.b=0
this.c=a},
ih:function ih(a){this.a=a},
jb:function jb(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
es:function(a,b,c){var u=H.me(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.N(a,null,null))},
lQ:function(a){if(a instanceof H.bN)return a.i(0)
return"Instance of '"+H.e(H.c3(a))+"'"},
m_:function(a,b,c){var u,t,s=J.lT(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jS:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aW(a);u.u();)t.push(u.gB(u))
if(b)return t
return J.jO(t)},
c5:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aN(b,c,u)
if(b<=0){if(typeof c!=="number")return c.K()
t=c<u}else t=!0
return H.kA(t?C.b.dO(a,b,c):a)}if(!!J.S(a).$ic1)return H.mg(a,b,P.aN(b,c,a.length))
return P.mp(a,b,c)},
mp:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.W(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.W(c,b,J.af(a),q,q))
t=J.aW(a)
for(s=0;s<b;++s)if(!t.u())throw H.c(P.W(b,0,s,q,q))
r=[]
if(u)for(;t.u();)r.push(t.gB(t))
else for(s=b;s<c;++s){if(!t.u())throw H.c(P.W(c,b,s,q,q))
r.push(t.gB(t))}return H.kA(r)},
mi:function(a){return new H.fn(a,H.lW(a,!1,!0,!1,!1,!1))},
kD:function(a,b,c){var u=J.aW(b)
if(!u.u())return a
if(c.length===0){do a+=H.e(u.gB(u))
while(u.u())}else{a+=H.e(u.gB(u))
for(;u.u();)a=a+c+H.e(u.gB(u))}return a},
kL:function(){var u=H.m6()
if(u!=null)return P.mv(u)
throw H.c(P.x("'Uri.base' is not supported"))},
ja:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.lz().b
if(typeof b!=="string")H.m(H.ab(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gh2().bP(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.d5(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
lO:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
lP:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cD:function(a){if(a>=10)return""+a
return"0"+a},
kn:function(a){return new P.aY(1000*a)},
jL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ao(a)
if(typeof a==="string")return JSON.stringify(a)
return P.lQ(a)},
ey:function(a){return new P.ap(!1,null,null,a)},
jG:function(a,b,c){return new P.ap(!0,a,b,c)},
d6:function(a,b){return new P.bu(null,null,!0,a,b,"Value not in range")},
W:function(a,b,c,d,e){return new P.bu(b,c,!0,a,d,"Invalid value")},
aN:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.W(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.W(b,a,c,"end",null))
return b}return c},
kB:function(a,b){if(typeof a!=="number")return a.K()
if(a<0)throw H.c(P.W(a,0,null,b,null))},
L:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fj(u,!0,a,c,"Index out of range")},
x:function(a){return new P.i8(a)},
i5:function(a){return new P.i4(a)},
bp:function(a){return new P.eQ(a)},
p:function(a){return new P.dH(a)},
N:function(a,b,c){return new P.ff(a,b,c)},
m0:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sj(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
kb:function(a){H.nQ(a)},
mv:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.kK(e<e?C.a.t(a,0,e):a,5,f).gdH()
else if(u===32)return P.kK(C.a.t(a,5,e),0,f).gdH()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.r])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.l2(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hK()
if(r>=0)if(P.l2(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.D()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.K()
if(typeof n!=="number")return H.u(n)
if(m<n)n=m
if(typeof o!=="number")return o.K()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.K()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.K()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.a3(a,"..",o)))j=n>o+2&&C.a.a3(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a3(a,"file",0)){if(q<=0){if(!C.a.a3(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.t(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aK(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a3(a,"http",0)){if(t&&p+3===o&&C.a.a3(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aK(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a3(a,"https",0)){if(t&&p+4===o&&C.a.a3(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aK(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.t(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iW(a,r,q,p,o,n,m,k)}return P.mM(a,0,e,r,q,p,o,n,m,k)},
kN:function(a){var u=P.n
return C.b.h7(H.b(a.split("&"),[u]),P.kr(u,u),new P.id(C.e))},
mu:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.ia(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.es(C.a.t(a,s,t),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.es(C.a.t(a,s,c),n,n)
if(typeof p!=="number")return p.Z()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
kM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.ib(a),d=new P.ic(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.r])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gax(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.mu(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aF(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
mM:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.mU(a,b,d)
else{if(d===b)P.bC(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.mV(a,u,e-1):""
s=P.mR(a,e,f,!1)
if(typeof f!=="number")return f.D()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.mT(P.es(C.a.t(a,r,g),new P.j6(a,f),n),j):n}else{q=n
s=q
t=""}p=P.mS(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.K()
o=h<i?P.k0(a,h+1,i,n):n
return new P.bB(j,t,s,q,p,o,i<c?P.mQ(a,i+1,c):n)},
kV:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bC:function(a,b,c){throw H.c(P.N(c,a,b))},
mT:function(a,b){if(a!=null&&a===P.kV(b))return
return a},
mR:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.G()
u=c-1
if(C.a.V(a,u)!==93)P.bC(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.mO(a,t,u)
if(typeof s!=="number")return s.K()
if(s<u){r=s+1
q=P.l_(a,C.a.a3(a,"25",r)?s+3:r,u,"%25")}else q=""
P.kM(a,t,s)
return C.a.t(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.u(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bf(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.l_(a,C.a.a3(a,"25",r)?s+3:r,c,"%25")}else q=""
P.kM(a,b,s)
return"["+C.a.t(a,b,s)+q+"]"}return P.mX(a,b,c)},
mO:function(a,b,c){var u,t=C.a.bf(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.u(c)
u=t<c}else u=!1
return u?t:c},
l_:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.P(d):null
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.k1(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.P("")
o=l.a+=C.a.t(a,t,u)
if(p)q=C.a.t(a,u,u+3)
else if(q==="%")P.bC(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.P("")
if(t<u){l.a+=C.a.t(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.P("")
l.a+=C.a.t(a,t,u)
l.a+=P.k_(r)
u+=m
t=u}}}if(l==null)return C.a.t(a,b,c)
if(t<c)l.a+=C.a.t(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
mX:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.k1(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.P("")
n=C.a.t(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.t(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.x,o)
o=(C.x[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.P("")
if(t<u){s.a+=C.a.t(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bC(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.P("")
n=C.a.t(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.k_(q)
u+=l
t=u}}}}if(s==null)return C.a.t(a,b,c)
if(t<c){n=C.a.t(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
mU:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.kX(C.a.H(a,b)))P.bC(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bC(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.t(a,b,c)
return P.mN(t?a.toLowerCase():a)},
mN:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
mV:function(a,b,c){return P.cn(a,b,c,C.Q,!1)},
mS:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cn(a,b,c,C.y,!0):C.j.i6(d,new P.j7(),P.n).n(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.ac(u,"/"))u="/"+u
return P.mW(u,e,f)},
mW:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.ac(a,"/"))return P.mY(a,!u||c)
return P.mZ(a)},
k0:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.ey("Both query and queryParameters specified"))
return P.cn(a,b,c,C.l,!0)}if(d==null)return
u=new P.P("")
t.a=""
d.E(0,new P.j8(new P.j9(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
mQ:function(a,b,c){return P.cn(a,b,c,C.l,!0)},
k1:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.jq(u)
r=H.jq(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aF(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.d5(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.t(a,b,b+3).toUpperCase()
return},
k_:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.r])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.r])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.fE(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.H(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.H(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.c5(t,0,null)},
cn:function(a,b,c,d,e){var u=P.kZ(a,b,c,d,e)
return u==null?C.a.t(a,b,c):u},
kZ:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.K()
if(typeof c!=="number")return H.u(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.k1(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bC(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.k_(u)}}if(m==null)m=new P.P("")
m.a+=C.a.t(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.u(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.K()
if(n<c)m.a+=C.a.t(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
kY:function(a){if(C.a.ac(a,"."))return!0
return C.a.dm(a,"/.")!==-1},
mZ:function(a){var u,t,s,r,q,p,o
if(!P.kY(a))return a
u=H.b([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.C(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.n(u,"/")},
mY:function(a,b){var u,t,s,r,q,p
if(!P.kY(a))return!b?P.kW(a):a
u=H.b([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gax(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gax(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.kW(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.n(u,"/")},
kW:function(a){var u,t,s,r=a.length
if(r>=2&&P.kX(J.lB(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.t(a,0,u)+"%3A"+C.a.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
mP:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.ey("Invalid URL encoding"))}}return u},
k2:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.t(a,b,c)
else r=new H.M(C.a.t(a,b,c))}else{r=H.b([],[P.r])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.c(P.ey("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.ey("Truncated URI"))
r.push(P.mP(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.ih(!1).bP(r)},
kX:function(a){var u=a|32
return 97<=u&&u<=122},
kK:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.r])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.N(m,a,t))}}if(s<0&&t>b)throw H.c(P.N(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gax(l)
if(r!==44||t!==p+7||!C.a.a3(a,"base64",p+1))throw H.c(P.N("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.C.hg(0,a,o,u)
else{n=P.kZ(a,o,u,C.l,!0)
if(n!=null)a=C.a.aK(a,o,u,n)}return new P.i9(a,l,c)},
n0:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.m0(22,new P.jf(),P.bw),n=new P.je(o),m=new P.jg(),l=new P.jh(),k=n.$2(0,225)
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
l2:function(a,b,c,d,e){var u,t,s,r,q,p=$.lA()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.H(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
bg:function bg(){},
a9:function a9(a,b){this.a=a
this.b=b},
J:function J(){},
aY:function aY(a){this.a=a},
f2:function f2(){},
f3:function f3(){},
br:function br(){},
d1:function d1(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bu:function bu(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fj:function fj(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
i8:function i8(a){this.a=a},
i4:function i4(a){this.a=a},
hC:function hC(a){this.a=a},
eQ:function eQ(a){this.a=a},
h9:function h9(){},
de:function de(){},
eY:function eY(a){this.a=a},
dH:function dH(a){this.a=a},
ff:function ff(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
h:function h(){},
fl:function fl(){},
q:function q(){},
O:function O(){},
b7:function b7(){},
a8:function a8(){},
a_:function a_(){},
n:function n(){},
P:function P(a){this.a=a},
id:function id(a){this.a=a},
ia:function ia(a){this.a=a},
ib:function ib(a){this.a=a},
ic:function ic(a,b){this.a=a
this.b=b},
bB:function bB(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(){},
j9:function j9(a,b){this.a=a
this.b=b},
j8:function j8(a){this.a=a},
i9:function i9(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(){},
je:function je(a){this.a=a},
jg:function jg(){},
jh:function jh(){},
iW:function iW(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
iJ:function iJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aR:function(a){var u,t,s,r,q
if(a==null)return
u=P.kr(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
nB:function(a){var u={}
a.E(0,new P.jl(u))
return u},
iY:function iY(){},
j_:function j_(a,b){this.a=a
this.b=b},
j0:function j0(a,b){this.a=a
this.b=b},
jl:function jl(a){this.a=a},
iZ:function iZ(a,b){this.a=a
this.b=b},
fb:function fb(a,b){this.a=a
this.b=b},
fc:function fc(){},
fd:function fd(){},
iO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mI:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iR:function iR(){},
a6:function a6(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aI:function aI(){},
fr:function fr(){},
aL:function aL(){},
h7:function h7(){},
he:function he(){},
hH:function hH(){},
j:function j(){},
aO:function aO(){},
hV:function hV(){},
dM:function dM(){},
dN:function dN(){},
dX:function dX(){},
dY:function dY(){},
e7:function e7(){},
e8:function e8(){},
ee:function ee(){},
ef:function ef(){},
bw:function bw(){},
eA:function eA(){},
eB:function eB(){},
eC:function eC(a){this.a=a},
eD:function eD(){},
bl:function bl(){},
h8:function h8(){},
dA:function dA(){},
da:function da(){},
hB:function hB(){},
e3:function e3(){},
e4:function e4(){}},W={
kk:function(){var u=document.createElement("canvas")
return u},
jK:function(a){return"wheel"},
lR:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.bi(u)}return s},
iN:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
kU:function(a,b,c,d){var u=W.iN(W.iN(W.iN(W.iN(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.l4(new W.iL(c),W.i)
if(u!=null&&!0)J.lD(a,b,u,!1)
return new W.iK(a,b,u,!1)},
l4:function(a,b){var u=$.am
if(u===C.f)return a
return u.cY(a,b)},
l:function l(){},
eu:function eu(){},
ew:function ew(){},
ex:function ex(){},
bm:function bm(){},
bn:function bn(){},
aX:function aX(){},
eU:function eU(){},
F:function F(){},
bO:function bO(){},
eV:function eV(){},
ac:function ac(){},
ar:function ar(){},
eW:function eW(){},
eX:function eX(){},
eZ:function eZ(){},
f_:function f_(){},
cF:function cF(){},
cG:function cG(){},
f0:function f0(){},
f1:function f1(){},
iH:function iH(a,b){this.a=a
this.b=b},
T:function T(){},
i:function i(){},
f:function f(){},
ag:function ag(){},
bP:function bP(){},
fa:function fa(){},
fe:function fe(){},
as:function as(){},
fh:function fh(){},
bR:function bR(){},
bS:function bS(){},
bs:function bs(){},
fy:function fy(){},
fU:function fU(){},
bY:function bY(){},
fV:function fV(){},
fW:function fW(a){this.a=a},
fX:function fX(){},
fY:function fY(a){this.a=a},
av:function av(){},
fZ:function fZ(){},
aw:function aw(){},
iG:function iG(a){this.a=a},
A:function A(){},
d0:function d0(){},
ax:function ax(){},
hb:function hb(){},
hl:function hl(){},
hm:function hm(a){this.a=a},
ho:function ho(){},
az:function az(){},
hy:function hy(){},
aA:function aA(){},
hz:function hz(){},
aB:function aB(){},
hE:function hE(){},
hF:function hF(a){this.a=a},
aj:function aj(){},
aC:function aC(){},
ak:function ak(){},
hK:function hK(){},
hL:function hL(){},
hQ:function hQ(){},
aD:function aD(){},
bv:function bv(){},
hT:function hT(){},
hU:function hU(){},
ba:function ba(){},
ie:function ie(){},
iz:function iz(){},
bd:function bd(){},
cd:function cd(){},
iI:function iI(){},
dC:function dC(){},
iM:function iM(){},
dU:function dU(){},
iX:function iX(){},
j1:function j1(){},
iK:function iK(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iL:function iL(a){this.a=a},
K:function K(){},
cK:function cK(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dB:function dB(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){},
dI:function dI(){},
dJ:function dJ(){},
dK:function dK(){},
dL:function dL(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(){},
dT:function dT(){},
dV:function dV(){},
dW:function dW(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
ci:function ci(){},
cj:function cj(){},
e1:function e1(){},
e2:function e2(){},
e6:function e6(){},
e9:function e9(){},
ea:function ea(){},
cl:function cl(){},
cm:function cm(){},
ec:function ec(){},
ed:function ed(){},
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
Y:function(a){var u=new K.hp()
u.dV(a)
return u},
ev:function ev(){},
cL:function cL(){},
cU:function cU(){},
aK:function aK(){this.a=null},
hp:function hp(){this.a=null}},L={df:function df(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dl:function dl(a,b,c){this.a=a
this.b=b
this.c=c},dm:function dm(a){this.b=a
this.c=null},hR:function hR(){var _=this
_.d=_.c=_.b=_.a=null},dp:function dp(a){this.b=a
this.a=this.c=null}},O={
eN:function(a){var u=new O.aG([a])
u.b7(a)
return u},
aG:function aG(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bX:function bX(){this.b=this.a=null},
kF:function(a,b){var u,t,s,r,q=new O.b9()
q.sah(b)
q.sd2(null)
u=V.d9()
if(!J.C(q.c,u)){t=q.c
q.c=u
s=new D.w("source",t,u)
s.b=!0
q.O(s)}r=a==null?V.d9():a
if(!J.C(q.d,r)){t=q.d
q.d=r
s=new D.w("destination",t,r)
s.b=!0
q.O(s)}if(q.e!==!1){q.e=!1
s=new D.w("flip",!0,!1)
s.b=!0
q.O(s)}q.f=null
return q},
cV:function cV(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fL:function fL(a,b){this.a=a
this.b=b},
fM:function fM(){},
fN:function fN(a,b){this.a=a
this.b=b},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
fQ:function fQ(){},
fR:function fR(a,b){this.a=a
this.b=b},
fS:function fS(){},
fF:function fF(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cW:function cW(){},
fG:function fG(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
at:function at(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fI:function fI(){var _=this
_.e=_.d=_.c=_.b=null},
fJ:function fJ(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fK:function fK(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dh:function dh(){},
di:function di(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b9:function b9(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null}},E={
ko:function(){var u,t=new E.aH()
t.a=""
t.b=!0
u=O.eN(E.aH)
t.y=u
u.aA(t.ghh(),t.ghk())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbp(0,null)
return t},
mj:function(a,b){var u=new E.hh(a)
u.dU(a,b)
return u},
ms:function(a,b,c,d,e){var u,t,s=J.S(a)
if(!!s.$ibn)return E.kG(a,!0,!0,!0,!1)
u=W.kk()
t=u.style
t.width="100%"
t.height="100%"
s.gbN(a).l(0,u)
return E.kG(u,!0,!0,!0,!1)},
kG:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dj(),p=C.n.dJ(a,"webgl2",P.lZ(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.m(P.p("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.mj(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.dt(a)
t=new X.fq()
t.c=new X.ad(!1,!1,!1)
t.d=P.ks(P.r)
u.b=t
t=new X.h_(u)
t.f=0
t.r=V.aM()
t.x=V.aM()
t.ch=t.Q=1
u.c=t
t=new X.fz(u)
t.r=0
t.x=V.aM()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hS(u)
t.f=V.aM()
t.r=V.aM()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dg,P.a_]])
u.z=t
s=document
t.push(W.X(s,"contextmenu",u.geE(),!1))
u.z.push(W.X(a,"focus",u.geO(),!1))
u.z.push(W.X(a,"blur",u.gey(),!1))
u.z.push(W.X(s,"keyup",u.geS(),!1))
u.z.push(W.X(s,"keydown",u.geQ(),!1))
u.z.push(W.X(a,"mousedown",u.geW(),!1))
u.z.push(W.X(a,"mouseup",u.gf_(),!1))
u.z.push(W.X(a,r,u.geY(),!1))
t=u.z
W.jK(a)
W.jK(a)
t.push(W.X(a,W.jK(a),u.gf1(),!1))
u.z.push(W.X(s,r,u.geG(),!1))
u.z.push(W.X(s,"mouseup",u.geI(),!1))
u.z.push(W.X(s,"pointerlockchange",u.gf3(),!1))
u.z.push(W.X(a,"touchstart",u.gfj(),!1))
u.z.push(W.X(a,"touchend",u.gff(),!1))
u.z.push(W.X(a,"touchmove",u.gfh(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.a9(Date.now(),!1)
q.db=0
q.cI()
return q},
eI:function eI(){},
aH:function aH(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hh:function hh(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hi:function hi(a){this.a=a},
hj:function hj(a){this.a=a},
hk:function hk(a){this.a=a},
dj:function dj(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hP:function hP(a){this.a=a}},Z={
kT:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.be(c)),35044)
a.bindBuffer(b,null)
return new Z.dx(b,u)},
ae:function(a){return new Z.bc(a)},
dx:function dx(a,b){this.a=a
this.b=b},
cy:function cy(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dy:function dy(a){this.a=a},
bM:function bM(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
bc:function bc(a){this.a=a}},D={
D:function(){var u=new D.aZ()
u.d=0
return u},
eL:function eL(){},
aZ:function aZ(){var _=this
_.d=_.c=_.b=_.a=null},
f7:function f7(a){this.a=a},
f8:function f8(a){this.a=a},
U:function U(){this.b=null},
b0:function b0(){this.b=null},
b1:function b1(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
eF:function eF(){},
bq:function bq(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a4:function a4(){},
cR:function cR(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hc:function hc(){},
hA:function hA(){}},X={cz:function cz(a,b){this.a=a
this.b=b},cQ:function cQ(a,b){this.a=a
this.b=b},fq:function fq(){var _=this
_.d=_.c=_.b=_.a=null},cT:function cT(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fz:function fz(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},aJ:function aJ(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},h_:function h_(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bZ:function bZ(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hd:function hd(){},dn:function dn(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hS:function hS(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dt:function dt(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
jM:function(a){var u,t=new X.fg()
if(a==null)u=new V.a3(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=V.d9()
t.r=u
return t},
kv:function(a){var u,t,s=new X.d2()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gm().l(0,s.ge1())
t=new D.w("mover",u,s.b)
t.b=!0
s.a_(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.z().a)){s.c=1.0471975511965976
t=new D.w("fov",t,1.0471975511965976)
t.b=!0
s.a_(t)}t=s.d
if(!(Math.abs(t-0.1)<$.z().a)){s.d=0.1
t=new D.w("near",t,0.1)
t.b=!0
s.a_(t)}t=s.e
if(!(Math.abs(t-2000)<$.z().a)){s.e=2000
t=new D.w("far",t,2000)
t.b=!0
s.a_(t)}return s},
eE:function eE(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jI:function jI(){},
fg:function fg(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fi:function fi(){this.b=this.a=null},
d2:function d2(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hI:function hI(){}},V={
eO:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a3(u,t,s,1)},
o_:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.b6(a-b,u)
return(a<0?a+u:a)+b},
I:function(a,b,c){if(a==null)return C.a.ay("null",c)
return C.a.ay(C.d.dF(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
bH:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.n])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.t)(a),++s){r=V.I(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ay(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
ka:function(a){return C.d.hE(Math.pow(2,C.N.c_(Math.log(H.nA(a))/Math.log(2))))},
b5:function(){var u=$.fT
return u==null?$.fT=V.ah(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ah:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
kt:function(a,b,c){var u=c.v(0,Math.sqrt(c.w(c))),t=b.av(u),s=t.v(0,Math.sqrt(t.w(t))),r=u.av(s),q=new V.B(a.a,a.b,a.c),p=s.R(0).w(q),o=r.R(0).w(q),n=u.R(0).w(q)
return V.ah(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aM:function(){var u=$.kx
return u==null?$.kx=new V.a0(0,0):u},
ky:function(){var u=$.ay
return u==null?$.ay=new V.R(0,0,0):u},
d9:function(){var u=$.c4
return u==null?$.c4=V.d8(0,0,1,1):u},
d8:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.d7(a,b,c,d)},
cc:function(){var u=$.kR
return u==null?$.kR=new V.B(0,0,0):u},
mB:function(){var u=$.ij
return u==null?$.ij=new V.B(-1,0,0):u},
jY:function(){var u=$.ik
return u==null?$.ik=new V.B(0,1,0):u},
kS:function(){var u=$.il
return u==null?$.il=new V.B(0,0,1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
a3:function a3(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
cX:function cX(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
au:function au(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
R:function R(a,b,c){this.a=a
this.b=b
this.c=c},
b8:function b8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
d7:function d7(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
H:function H(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
nT:function(a){P.mt(C.L,new V.jA(a))},
ml:function(a){var u=new V.hu()
u.dW(a,!0)
return u},
jA:function jA(a){this.a=a},
hf:function hf(a){this.a=a
this.c=null},
hg:function hg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hu:function hu(){this.b=this.a=null},
hw:function hw(a){this.a=a},
hv:function hv(a){this.a=a}},U={
jJ:function(){var u=new U.eP()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
km:function(a){var u=new U.cB()
u.a=a
return u},
eP:function eP(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){this.b=this.a=null},
bQ:function bQ(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
aa:function aa(){},
du:function du(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dv:function dv(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dw:function dw(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cA:function cA(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cC:function cC(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},cH:function cH(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ai:function ai(){}},A={
m2:function(a,b){var u=a.aV,t=new A.fE(b,u)
t.cm(b,u)
t.dT(a,b)
return t},
m3:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gal(a2)+a3.gal(a3)+a4.gal(a4)+a5.gal(a5)+a6.gal(a6)+a7.gal(a7)+a8.gal(a8)+a9.gal(a9)+b0.gal(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.t)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.t)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.t)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.t)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.an()
if(j){u=$.aV()
e=new Z.bc(e.a|u.a)}if(i){u=$.aU()
e=new Z.bc(e.a|u.a)}if(h){u=$.aT()
e=new Z.bc(e.a|u.a)}return new A.fH(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
ji:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
jj:function(a,b,c){var u
A.ji(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.et(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
n9:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.ji(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
n5:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.jj(b,t,"ambient")
b.a+="\n"},
n7:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.jj(b,t,"diffuse")
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
na:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.jj(b,t,"invDiffuse")
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
ng:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.jj(b,t,"specular")
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
nc:function(a,b){var u,t,s
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
ne:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.ji(b,t,"reflect")
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
nf:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.ji(b,t,"refract")
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
n6:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
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
c.a=r+"\n"}r=[P.n]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.n(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.n(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.n(q," + ")+");\n"
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
n8:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.et(t)
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
r=[P.n]
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
c.a+="      highLight = intensity*("+C.b.n(m," + ")+");\n"}else c.a+="   highLight = "+C.b.n(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.n(o," + ")+");\n"
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
nd:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
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
c.a=r+"\n"}r=[P.n]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.n(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.n(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.n(l," + ")+");\n"
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
nh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
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
c.a=u+"\n"}u=[P.n]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.n(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.n(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.n(j," + ")+");\n"
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
nb:function(a,b){var u,t
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
u=b.a+="   return "+C.b.n(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ni:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.P("")
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
A.n9(a,j)
A.n5(a,j)
A.n7(a,j)
A.na(a,j)
A.ng(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.ne(a,j)
A.nf(a,j)}A.nc(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.n6(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.n8(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.nd(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.t)(q),++o)A.nh(a,q[o],j)
A.nb(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.t)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
else u=!0
if(u)n.push("emissionColor()")
if(!a.r.a)u=!1
else u=!0
if(u)n.push("reflect(refl)")
if(!a.x.a)u=!1
else u=!0
if(u)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.n(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
nj:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bd+"];\n"
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
nl:function(a,b){var u
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
nk:function(a,b){var u
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
nn:function(a,b){var u,t
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
no:function(a,b){var u,t
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
nm:function(a,b){var u
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
np:function(a,b){var u
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
et:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ad(a,1)},
mr:function(a,b){var u,t,s,r
for(u=0,t="precision mediump float;\n\nuniform vec4 backClr;\n\nvarying vec2 pos;\n\nuniform int txtCount;\n";u<a;++u)t=t+("uniform sampler2D txt"+u+";\n")+("uniform mat4 clrMat"+u+";\n")+("uniform vec2 srcLoc"+u+";\n")+("uniform vec2 srcSize"+u+";\n")+("uniform vec2 destLoc"+u+";\n")+("uniform vec2 destSize"+u+";\n")+("uniform int flip"+u+";\n")
t+="\nvec4 clrAccum;\n"
s=b===C.v
t=(s||b===C.o?t+"float colorCount;\n":t)+"\nvoid layout(sampler2D txt, mat4 clrMat,\n            vec2 srcLoc, vec2 srcSize, vec2 destLoc, vec2 destSize, int flip)\n{\n   vec2 txtPnt = (pos - destLoc)*srcSize/destSize;\n   if((txtPnt.x >= 0.0) && (txtPnt.x <= srcSize.x) &&\n      (txtPnt.y >= 0.0) && (txtPnt.y <= srcSize.y))\n   {\n      if(flip != 0) txtPnt.y = srcSize.y - txtPnt.y;\n      vec4 color = clrMat*texture2D(txt, txtPnt + srcLoc);\n      color = clamp(color, vec4(0.0), vec4(1.0));\n"
if(b===C.u)t+="      clrAccum += color;\n"
else if(b===C.i)t+="      clrAccum = mix(clrAccum, color, color.a);\n"
else t=s?t+"      clrAccum += color;\n      colorCount += 1.0;\n":t+"      clrAccum = color;\n      colorCount = 1.0;\n"
t+="   }\n}\n\nvoid layoutAll()\n{\n"
r=b===C.o
if(r)for(u=a-1;u>=0;--u)t=t+("   if(txtCount > "+u+")\n")+"   {\n"+("     layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")+"     if(colorCount > 0.0) return;\n   }\n"
else for(u=0;u<a;++u)t=t+("   if(txtCount <= "+u+") return;\n")+("   layout(txt"+u+", clrMat"+u+", srcLoc"+u+", srcSize"+u+", destLoc"+u+", destSize"+u+", flip"+u+");\n")
t+="}\n\nvoid main()\n{\n   clrAccum = backClr;\n"
if(s)t+="   colorCount = 1.0;\n"
else if(r)t+="   colorCount = 0.0;\n"
t+="   layoutAll();\n"
t=(s?t+"   clrAccum = clrAccum/colorCount;\n":t)+"   if(clrAccum.a <= 0.0) discard;\n   gl_FragColor = clrAccum;\n}\n"
return t.charCodeAt(0)==0?t:t},
mq:function(a,b,c){var u="TextureLayout_"+a+"_"+C.c.i(b.a),t=new A.hO(c,u)
t.cm(c,u)
t.dX(a,b,c)
return t},
jV:function(a,b,c,d,e){var u=new A.hZ(a,c,e)
u.f=d
P.m_(d,0,P.r)
return u},
cw:function cw(a,b,c){this.a=a
this.b=b
this.c=c},
ez:function ez(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
fE:function fE(a,b){var _=this
_.hT=_.hS=_.be=_.aV=_.bd=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.i5=_.i4=_.i3=_.bY=_.bX=_.bW=_.bV=_.bU=_.bT=_.bS=_.bR=_.i2=_.i1=_.dg=_.i0=_.i_=_.df=_.de=_.hZ=_.hY=_.dd=_.dc=_.hX=_.hW=_.da=_.hV=_.hU=_.d9=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cx:function cx(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
dd:function dd(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bd=b3
_.aV=b4
_.be=b5},
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
db:function db(){},
bo:function bo(a,b){this.a=a
this.b=b},
hO:function hO(a,b){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dq:function dq(){},
i2:function i2(a){this.a=a},
al:function al(a,b,c){this.a=a
this.c=b
this.d=c},
i_:function i_(a,b,c){this.a=a
this.c=b
this.d=c},
i0:function i0(a,b,c){this.a=a
this.c=b
this.d=c},
i1:function i1(a,b,c){this.a=a
this.c=b
this.d=c},
hZ:function hZ(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Q:function Q(a,b,c){this.a=a
this.c=b
this.d=c},
aP:function aP(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
bx:function bx(a,b,c){this.a=a
this.c=b
this.d=c},
i3:function i3(a,b,c){this.a=a
this.c=b
this.d=c},
c9:function c9(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
aQ:function aQ(a,b,c){this.a=a
this.c=b
this.d=c},
by:function by(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nY:function(){return F.nC(15,30,0.5,1,new F.jC())},
nC:function(a,b,c,d,e){var u=F.nW(a,b,new F.jm(e,d,b,c))
if(u==null)return
u.au()
u.hf(new F.it(),new F.h5())
return u},
nW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.kC()
t=H.b([],[F.bb])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.im(g,g,new V.a3(p,0,0,1),g,g,new V.a0(r,1),g,g,0)
q.l(0,o)
c.$3(o,r,0)
t.push(o.d3(g))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.im(g,g,new V.a3(j,i,h,1),g,g,new V.a0(r,m),g,g,0)
k.l(0,o)
c.$3(o,r,n)
t.push(o.d3(g))}}u.d.fO(a+1,b+1,t)
return u},
cI:function(a,b,c){var u=new F.b_(),t=a.a
if(t==null)H.m(P.p("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.m(P.p("May not create a face with vertices attached to different shapes."))
u.fw(a)
u.fz(b)
u.fA(c)
u.a.a.d.b.push(u)
u.a.a.aa()
return u},
kC:function(){var u=new F.hq(),t=new F.io(u)
t.b=!1
t.c=H.b([],[F.bb])
u.a=t
t=new F.ht()
t.b=H.b([],[F.d3])
u.b=t
t=new F.hs(u)
t.b=H.b([],[F.cS])
u.c=t
t=new F.hr(u)
t.b=H.b([],[F.b_])
u.d=t
u.e=null
return u},
im:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bb(),r=new F.iw()
r.b=H.b([],[F.d3])
s.b=r
r=new F.is()
u=[F.cS]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.ip()
u=[F.b_]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.lv()
s.e=0
r=$.an()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aV().a)!==0?e:t
s.x=(u&$.aU().a)!==0?b:t
s.y=(u&$.bj().a)!==0?f:t
s.z=(u&$.bk().a)!==0?g:t
s.Q=(u&$.lw().a)!==0?c:t
s.ch=(u&$.bI().a)!==0?i:0
s.cx=(u&$.aT().a)!==0?a:t
return s},
jC:function jC(){},
jm:function jm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b_:function b_(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
f9:function f9(){},
hx:function hx(){},
cS:function cS(){},
fs:function fs(){},
hY:function hY(){},
d3:function d3(){},
hq:function hq(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hr:function hr(a){this.a=a
this.b=null},
hs:function hs(a){this.a=a
this.b=null},
ht:function ht(){this.b=null},
bb:function bb(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
iy:function iy(a){this.a=a},
ix:function ix(a){this.a=a},
io:function io(a){this.a=a
this.c=this.b=null},
ip:function ip(){this.d=this.c=this.b=null},
iq:function iq(a,b){this.a=a
this.b=b},
ir:function ir(a,b){this.a=a
this.b=b},
is:function is(){this.c=this.b=null},
iu:function iu(){},
it:function it(){},
iv:function iv(){},
h5:function h5(){},
iw:function iw(){this.b=null}},T={
kE:function(a){var u=new T.hN()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
c6:function c6(){},
hM:function hM(){},
hN:function hN(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},S={
lc:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1="testCanvas",b2=null,b3="modifiers",b4=V.ml("Test 036"),b5=W.kk()
b5.className="pageLargeCanvas"
b5.id=b1
b4.a.appendChild(b5)
u=[P.n]
b4.cT(H.b(["Test of the texture layout cover technique."],u))
b4.fL(H.b(["blends"],u))
b4.cT(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b1)
if(t==null)H.m(P.p("Failed to find an element with the identifier, testCanvas."))
s=E.ms(t,!0,!0,!0,!1)
r=new U.bQ()
r.b7(U.aa)
r.aA(r.gep(),r.gf7())
r.e=null
r.f=V.b5()
r.r=0
b4=s.x
q=new U.dv()
p=U.jJ()
p.scf(0,!0)
p.sc2(6.283185307179586)
p.sc4(0)
p.sa8(0,0)
p.sc3(100)
p.sU(0)
p.sbQ(0.5)
q.b=p
o=q.gaD()
p.gm().l(0,o)
p=U.jJ()
p.scf(0,!0)
p.sc2(6.283185307179586)
p.sc4(0)
p.sa8(0,0)
p.sc3(100)
p.sU(0)
p.sbQ(0.5)
q.c=p
p.gm().l(0,o)
q.d=null
q.r=q.f=q.e=!1
q.y=q.x=2.5
q.Q=4
q.ch=q.cx=!1
q.db=q.cy=0
q.dx=null
q.dy=0
q.fx=q.fr=null
n=new X.ad(!1,!1,!1)
m=q.d
q.d=n
p=new D.w(b3,m,n)
p.b=!0
q.M(p)
p=q.f
if(p!==!1){q.f=!1
p=new D.w("invertX",p,!1)
p.b=!0
q.M(p)}p=q.r
if(p!==!1){q.r=!1
p=new D.w("invertY",p,!1)
p.b=!0
q.M(p)}q.aS(b4)
r.l(0,q)
b4=s.x
q=new U.du()
p=U.jJ()
p.scf(0,!0)
p.sc2(6.283185307179586)
p.sc4(0)
p.sa8(0,0)
p.sc3(100)
p.sU(0)
p.sbQ(0.2)
q.b=p
p.gm().l(0,q.gaD())
q.c=null
q.d=!1
q.e=2.5
q.r=4
q.x=q.y=!1
q.z=0
q.Q=null
q.ch=0
q.cy=q.cx=null
n=new X.ad(!0,!1,!1)
m=q.c
q.c=n
p=new D.w(b3,m,n)
p.b=!0
q.M(p)
q.aS(b4)
r.l(0,q)
b4=s.x
q=new U.dw()
q.c=0.01
q.e=q.d=0
n=new X.ad(!1,!1,!1)
q.b=n
p=new D.w(b3,b2,n)
p.b=!0
q.M(p)
q.aS(b4)
r.l(0,q)
r.l(0,U.km(V.ah(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
l=X.kv(r)
k=new V.a3(0,0,0,0)
j=new X.eE()
j.d=j.c=j.b=j.a=512
j.e=!0
j.f=!1
j.x=j.r=1
j.ch=T.kE(b2)
j.cx=new V.a3(0,0,0,1)
j.cy=!0
j.db=2000
j.dx=!0
j.dy=V.d9()
j.sai(0,512)
j.sae(0,512)
if(!j.cx.p(0,k)){m=j.cx
j.cx=k
b4=new D.w("color",m,k)
b4.b=!0
j.a_(b4)}b4=j.db
if(!(Math.abs(b4-2000)<$.z().a)){j.db=2000
b4=new D.w("depth",b4,2000)
b4.b=!0
j.a_(b4)}if(!j.f){j.f=!0
b4=new D.w("autoResize",!1,!0)
b4.b=!0
j.a_(b4)}b4=j.r
if(!(Math.abs(b4-1)<$.z().a)){j.r=1
b4=new D.w("autoResizeScalarX",b4,1)
b4.b=!0
j.a_(b4)}b4=j.x
if(!(Math.abs(b4-1)<$.z().a)){j.x=1
b4=new D.w("autoResizeScalarY",b4,1)
b4.b=!0
j.a_(b4)}i=V.d9()
if(!J.C(j.dy,i)){m=j.dy
j.dy=i
b4=new D.w("region",m,i)
b4.b=!0
j.a_(b4)}h=E.ko()
h.sbp(0,F.nY())
g=new O.cV()
b4=O.eN(V.au)
g.e=b4
b4.aA(g.geu(),g.gew())
b4=new O.at(g,"emission")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
g.f=b4
b4=new O.at(g,"ambient")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
g.r=b4
b4=new O.at(g,"diffuse")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
g.x=b4
b4=new O.at(g,"invDiffuse")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
g.y=b4
b4=new O.fK(g,"specular")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
b4.ch=100
g.z=b4
b4=new O.fG(g,"bump")
b4.c=new A.Z(!1,!1,!1)
g.Q=b4
g.ch=null
b4=new O.at(g,"reflect")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
g.cx=b4
b4=new O.fJ(g,"refract")
b4.c=new A.Z(!1,!1,!1)
b4.f=new V.V(0,0,0)
b4.ch=1
g.cy=b4
b4=new O.fF(g,"alpha")
b4.c=new A.Z(!1,!1,!1)
b4.f=1
g.db=b4
b4=new D.cR()
b4.b7(D.a4)
b4.e=H.b([],[D.eF])
b4.f=H.b([],[D.bq])
b4.r=H.b([],[D.hc])
b4.x=H.b([],[D.hA])
b4.z=b4.y=null
b4.cg(b4.ger(),b4.gf5(),b4.gf9())
g.dx=b4
q=new O.fI()
q.b=new V.a3(0,0,0,0)
q.c=1
q.d=10
q.e=!1
g.dy=q
q=b4.y
b4=q==null?b4.y=D.D():q
b4.l(0,g.gft())
b4=g.dx
q=b4.z
b4=q==null?b4.z=D.D():q
b4.l(0,g.gap())
g.fr=null
b4=g.dx
f=V.jY()
q=U.km(V.kt(V.ky(),f,new V.B(0,-1,-1)))
k=new V.V(1,1,1)
p=new D.bq()
p.c=new V.V(1,1,1)
p.a=V.kS()
p.d=V.jY()
p.e=V.mB()
m=p.b
p.b=q
q.gm().l(0,p.gdY())
q=new D.w("mover",m,p.b)
q.b=!0
p.ao(q)
if(!p.c.p(0,k)){m=p.c
p.c=k
q=new D.w("color",m,k)
q.b=!0
p.ao(q)}b4.l(0,p)
b4=g.r
b4.saH(0,new V.V(0,0,1))
b4=g.x
b4.saH(0,new V.V(0,1,0))
b4=g.z
b4.saH(0,new V.V(1,0,0))
b4=g.z
b4.cK(new A.Z(!0,!1,!1))
b4.cL(10)
e=new M.cH()
e.a=!0
b4=O.eN(E.aH)
e.e=b4
b4.aA(e.geA(),e.geC())
e.y=e.x=e.r=e.f=null
d=X.jM(b2)
e.sd0(b2)
e.sb1(0,d)
e.sb2(b2)
e.sd0(l)
e.sb2(g)
e.sb1(0,j)
e.e.l(0,h)
c=new V.a3(0,0,0,1)
b=new O.di()
b.a=new V.a3(0,0,0,0)
b4=O.eN(O.b9)
b.c=b4
b4.aA(b.geK(),b.geM())
b.d=0
b.e=null
b.r=b.f=C.i
if(!b.a.p(0,c)){m=b.a
b.a=c
b4=new D.w("backColor",m,c)
b4.b=!0
b.O(b4)}b.saT(C.i)
for(a=0;a<3;++a){a0=a*0.3333333333333333
for(a1=0;a1<3;++a1){b4=b.c
q=j.ch
q=O.kF(V.d8(a0,a1*0.3333333333333333,0.3333333333333333,0.3333333333333333),q)
p=[H.aS(b4,0)]
if(b4.bF(H.b([q],p))){o=b4.a
a2=o.length
o.push(q)
p=H.b([q],p)
b4=b4.c
if(b4!=null)b4.$2(a2,p)}}}b4=b.c
q=O.kF(b2,b2)
q.sah(j.ch)
q.sd2(V.ah(0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1))
b4.l(0,q)
a3=X.jM(new V.a3(0,0,0,1))
a4=new M.cC()
a4.a=!0
b4=E.ko()
a5=F.kC()
q=a5.a
p=new V.B(-1,-1,1)
p=p.v(0,Math.sqrt(p.w(p)))
a6=q.bc(new V.b8(1,2,4,6),V.eO(255,0,0),new V.R(-1,-1,0),new V.a0(0,1),p,b2)
p=a5.a
q=new V.B(1,-1,1)
q=q.v(0,Math.sqrt(q.w(q)))
a7=p.bc(new V.b8(0,3,4,6),V.eO(0,0,255),new V.R(1,-1,0),new V.a0(1,1),q,b2)
q=a5.a
p=new V.B(1,1,1)
p=p.v(0,Math.sqrt(p.w(p)))
a8=q.bc(new V.b8(0,2,5,6),V.eO(0,128,0),new V.R(1,1,0),new V.a0(1,0),p,b2)
p=a5.a
q=V.aM()
o=new V.B(-1,1,1)
o=o.v(0,Math.sqrt(o.w(o)))
a9=p.bc(new V.b8(0,2,4,7),V.eO(255,255,0),new V.R(-1,1,0),q,o,b2)
a5.d.fN(H.b([a6,a7,a8,a9],[F.bb]))
a5.au()
b4.sbp(0,a5)
a4.e=b4
b0=new X.fi()
m=a4.b
a4.b=b0
b0.gm().l(0,a4.gX())
b4=new D.w("camera",m,a4.b)
b4.b=!0
a4.W(b4)
a4.sb1(0,b2)
a4.sb2(b2)
a4.sb2(b)
a4.sb1(0,a3)
b4=M.ai
q=H.b([e,a4],[b4])
p=new M.cA()
p.b7(b4)
p.e=!0
p.f=!1
p.r=null
p.aA(p.gfb(),p.gfd())
p.bb(0,q)
b4=s.d
if(b4!==p){if(b4!=null)b4.gm().N(0,s.gco())
s.d=p
p.gm().l(0,s.gco())
s.cp()}b4=new V.hf("blends")
u=u.getElementById("blends")
b4.c=u
if(u==null)H.m("Failed to find blends for RadioGroup")
b4.bJ(0,"Additive",new S.jv(b))
b4.cS(0,"AlphaBlend",new S.jw(b),!0)
b4.bJ(0,"Average",new S.jx(b))
b4.bJ(0,"Overwrite",new S.jy(b))
V.nT(s)},
jv:function jv(a){this.a=a},
jw:function jw(a){this.a=a},
jx:function jx(a){this.a=a},
jy:function jy(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.jQ.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gF:function(a){return H.c2(a)},
i:function(a){return"Instance of '"+H.e(H.c3(a))+"'"}}
J.fm.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$ibg:1}
J.cO.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.cP.prototype={
gF:function(a){return 0},
i:function(a){return String(a)},
$ilV:1}
J.ha.prototype={}
J.bz.prototype={}
J.b4.prototype={
i:function(a){var u=a[$.lj()]
if(u==null)return this.dR(a)
return"JavaScript function for "+H.e(J.ao(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.b2.prototype={
ca:function(a,b){if(!!a.fixed$length)H.m(P.x("removeAt"))
if(b<0||b>=a.length)throw H.c(P.d6(b,null))
return a.splice(b,1)[0]},
N:function(a,b){var u
if(!!a.fixed$length)H.m(P.x("remove"))
for(u=0;u<a.length;++u)if(J.C(a[u],b)){a.splice(u,1)
return!0}return!1},
bb:function(a,b){var u,t
if(!!a.fixed$length)H.m(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.t)(b),++t)a.push(b[t])},
E:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bp(a))}},
n:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hc:function(a){return this.n(a,"")},
h6:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.bp(a))}return u},
h7:function(a,b,c){return this.h6(a,b,c,null)},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
dO:function(a,b,c){if(b<0||b>a.length)throw H.c(P.W(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.W(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aS(a,0)])
return H.b(a.slice(b,c),[H.aS(a,0)])},
gh5:function(a){if(a.length>0)return a[0]
throw H.c(H.kp())},
gax:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.kp())},
aO:function(a,b){if(!!a.immutable$list)H.m(P.x("sort"))
H.mo(a,b==null?J.n2():b)},
dN:function(a){return this.aO(a,null)},
a1:function(a,b){var u
for(u=0;u<a.length;++u)if(J.C(a[u],b))return!0
return!1},
i:function(a){return P.jN(a,"[","]")},
gP:function(a){return new J.a2(a,a.length)},
gF:function(a){return H.c2(a)},
gj:function(a){return a.length},
sj:function(a,b){var u="newLength"
if(!!a.fixed$length)H.m(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.jG(b,u,null))
if(b<0)throw H.c(P.W(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bG(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.m(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bG(a,b))
a[b]=c},
$io:1,
$ih:1,
$iq:1}
J.jP.prototype={}
J.a2.prototype={
gB:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.t(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bU.prototype={
aI:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ab(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbg(b)
if(this.gbg(a)===u)return 0
if(this.gbg(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbg:function(a){return a===0?1/a<0:a<0},
hE:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
c_:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
Y:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
dF:function(a,b){var u
if(b>20)throw H.c(P.W(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbg(a))return"-"+u
return u},
b3:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.W(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.m(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.q("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
b6:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dS:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.cN(a,b)},
a0:function(a,b){return(a|0)===a?a/b|0:this.cN(a,b)},
cN:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aF:function(a,b){var u
if(a>0)u=this.cM(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
fE:function(a,b){if(b<0)throw H.c(H.ab(b))
return this.cM(a,b)},
cM:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia8:1}
J.cN.prototype={$ir:1}
J.cM.prototype={}
J.b3.prototype={
V:function(a,b){if(b<0)throw H.c(H.bG(a,b))
if(b>=a.length)H.m(H.bG(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bG(a,b))
return a.charCodeAt(b)},
D:function(a,b){if(typeof b!=="string")throw H.c(P.jG(b,null,null))
return a+b},
aK:function(a,b,c,d){var u,t
c=P.aN(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.m(H.ab(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a3:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.W(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ac:function(a,b){return this.a3(a,b,0)},
t:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.m(H.ab(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.K()
if(b<0)throw H.c(P.d6(b,null))
if(b>c)throw H.c(P.d6(b,null))
if(c>a.length)throw H.c(P.d6(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.t(a,b,null)},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.J)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ay:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bf:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.W(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dm:function(a,b){return this.bf(a,b,0)},
aI:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ab(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gF:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gj:function(a){return a.length},
$in:1}
H.M.prototype={
gj:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)},
$ao:function(){return[P.r]},
$av:function(){return[P.r]},
$ah:function(){return[P.r]},
$aq:function(){return[P.r]}}
H.o.prototype={}
H.bV.prototype={
gB:function(a){return this.d},
u:function(){var u,t=this,s=t.a,r=J.bh(s),q=r.gj(s)
if(t.b!=q)throw H.c(P.bp(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.bW.prototype={
gP:function(a){return new H.fD(J.aW(this.a),this.b)},
gj:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.jF(this.a,b))},
$ah:function(a,b){return[b]}}
H.f4.prototype={$io:1,
$ao:function(a,b){return[b]}}
H.fD.prototype={
u:function(){var u=this,t=u.b
if(t.u()){u.a=u.c.$1(t.gB(t))
return!0}u.a=null
return!1},
gB:function(a){return this.a}}
H.iA.prototype={
gP:function(a){return new H.iB(J.aW(this.a),this.b)}}
H.iB.prototype={
u:function(){var u,t
for(u=this.a,t=this.b;u.u();)if(t.$1(u.gB(u)))return!0
return!1},
gB:function(a){var u=this.a
return u.gB(u)}}
H.cJ.prototype={}
H.i7.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dr.prototype={}
H.eR.prototype={
i:function(a){return P.jT(this)},
k:function(a,b,c){return H.lN()},
$iO:1}
H.eS.prototype={
gj:function(a){return this.a},
bO:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.bO(0,b))return
return this.cz(b)},
cz:function(a){return this.b[a]},
E:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cz(s))}}}
H.hW.prototype={
ag:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.h6.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fp.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.i6.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.jD.prototype={
$1:function(a){if(!!J.S(a).$ibr)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.e5.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bN.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cr(t==null?"unknown":t)+"'"},
ghJ:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hJ.prototype={}
H.hD.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cr(u)+"'"}}
H.bK.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bK))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.c2(this.a)
else u=typeof t!=="object"?J.cv(t):H.c2(t)
return(u^H.c2(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.c3(u))+"'")}}
H.eK.prototype={
i:function(a){return this.a}}
H.hn.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.G.prototype={
gj:function(a){return this.a},
gaf:function(a){return new H.fu(this,[H.aS(this,0)])},
ghI:function(a){var u=this
return H.m1(u.gaf(u),new H.fo(u),H.aS(u,0),H.aS(u,1))},
bO:function(a,b){var u=this.b
if(u==null)return!1
return this.ec(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b8(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b8(r,b)
s=t==null?null:t.b
return s}else return q.ha(b)},
ha:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cB(r,s.dq(a))
t=s.dr(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cr(u==null?s.b=s.bD():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cr(t==null?s.c=s.bD():t,b,c)}else s.hb(b,c)},
hb:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bD()
u=r.dq(a)
t=r.cB(q,u)
if(t==null)r.bH(q,u,[r.bE(a,b)])
else{s=r.dr(t,a)
if(s>=0)t[s].b=b
else t.push(r.bE(a,b))}},
E:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bp(u))
t=t.c}},
cr:function(a,b,c){var u=this.b8(a,b)
if(u==null)this.bH(a,b,this.bE(b,c))
else u.b=c},
bE:function(a,b){var u=this,t=new H.ft(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
dq:function(a){return J.cv(a)&0x3ffffff},
dr:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1},
i:function(a){return P.jT(this)},
b8:function(a,b){return a[b]},
cB:function(a,b){return a[b]},
bH:function(a,b,c){a[b]=c},
ef:function(a,b){delete a[b]},
ec:function(a,b){return this.b8(a,b)!=null},
bD:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bH(t,u,t)
this.ef(t,u)
return t}}
H.fo.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aS(u,1),args:[H.aS(u,0)]}}}
H.ft.prototype={}
H.fu.prototype={
gj:function(a){return this.a.a},
gP:function(a){var u=this.a,t=new H.fv(u,u.r)
t.c=u.e
return t}}
H.fv.prototype={
gB:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jr.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.js.prototype={
$2:function(a,b){return this.a(a,b)}}
H.jt.prototype={
$1:function(a){return this.a(a)}}
H.fn.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$imh:1}
H.c_.prototype={$ic_:1}
H.b6.prototype={$ib6:1}
H.cY.prototype={
gj:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.c0.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
k:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$io:1,
$ao:function(){return[P.J]},
$av:function(){return[P.J]},
$ih:1,
$ah:function(){return[P.J]},
$iq:1,
$aq:function(){return[P.J]}}
H.cZ.prototype={
k:function(a,b,c){H.aF(b,a,a.length)
a[b]=c},
$io:1,
$ao:function(){return[P.r]},
$av:function(){return[P.r]},
$ih:1,
$ah:function(){return[P.r]},
$iq:1,
$aq:function(){return[P.r]}}
H.h0.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.h1.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.h2.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.h3.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.h4.prototype={
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.d_.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]}}
H.c1.prototype={
gj:function(a){return a.length},
h:function(a,b){H.aF(b,a,a.length)
return a[b]},
$ic1:1,
$ibw:1}
H.ce.prototype={}
H.cf.prototype={}
H.cg.prototype={}
H.ch.prototype={}
P.iD.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.iC.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.iE.prototype={
$0:function(){this.a.$0()}}
P.iF.prototype={
$0:function(){this.a.$0()}}
P.eb.prototype={
e_:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bF(new P.j4(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
e0:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bF(new P.j3(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idk:1}
P.j4.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.j3.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dS(u,q)}s.c=r
t.d.$1(s)}}
P.bA.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.ck.prototype={
gB:function(a){var u=this.c
if(u==null)return this.b
return u.gB(u)},
u:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.u())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bA){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aW(u)
if(!!r.$ick){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.j2.prototype={
gP:function(a){return new P.ck(this.a())}}
P.dz.prototype={}
P.dg.prototype={}
P.hG.prototype={}
P.dk.prototype={}
P.jd.prototype={}
P.jk.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.d1():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iS.prototype={
hA:function(a){var u,t,s,r=null
try{if(C.f===$.am){a.$0()
return}P.nr(r,r,this,a)}catch(s){u=H.bi(s)
t=H.k7(s)
P.l1(r,r,this,u,t)}},
hB:function(a,b){var u,t,s,r=null
try{if(C.f===$.am){a.$1(b)
return}P.ns(r,r,this,a,b)}catch(s){u=H.bi(s)
t=H.k7(s)
P.l1(r,r,this,u,t)}},
hC:function(a,b){return this.hB(a,b,null)},
fQ:function(a){return new P.iT(this,a)},
cY:function(a,b){return new P.iU(this,a,b)}}
P.iT.prototype={
$0:function(){return this.a.hA(this.b)}}
P.iU.prototype={
$1:function(a){return this.a.hC(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iP.prototype={
gP:function(a){var u=new P.dO(this,this.r)
u.c=this.e
return u},
gj:function(a){return this.a},
a1:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.ea(b)
return t}},
ea:function(a){var u=this.d
if(u==null)return!1
return this.bu(this.cA(u,a),a)>=0},
l:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cs(u==null?s.b=P.jZ():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cs(t==null?s.c=P.jZ():t,b)}else return s.e3(0,b)},
e3:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.jZ()
u=s.ct(b)
t=r[u]
if(t==null)r[u]=[s.br(b)]
else{if(s.bu(t,b)>=0)return!1
t.push(s.br(b))}return!0},
N:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fm(this.c,b)
else return this.fl(0,b)},
fl:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cA(r,b)
t=s.bu(u,b)
if(t<0)return!1
s.cP(u.splice(t,1)[0])
return!0},
cs:function(a,b){if(a[b]!=null)return!1
a[b]=this.br(b)
return!0},
fm:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cP(u)
delete a[b]
return!0},
cE:function(){this.r=1073741823&this.r+1},
br:function(a){var u,t=this,s=new P.iQ(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cE()
return s},
cP:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cE()},
ct:function(a){return J.cv(a)&1073741823},
cA:function(a,b){return a[this.ct(b)]},
bu:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.C(a[t].a,b))return t
return-1}}
P.iQ.prototype={}
P.dO.prototype={
gB:function(a){return this.d},
u:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bp(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fk.prototype={}
P.fw.prototype={
$2:function(a,b){this.a.k(0,a,b)},
$S:3}
P.fx.prototype={$io:1,$ih:1,$iq:1}
P.v.prototype={
gP:function(a){return new H.bV(a,this.gj(a))},
I:function(a,b){return this.h(a,b)},
hG:function(a,b){var u,t,s=this,r=H.b([],[H.nI(s,a,"v",0)])
C.b.sj(r,s.gj(a))
u=0
while(!0){t=s.gj(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
hF:function(a){return this.hG(a,!0)},
h3:function(a,b,c,d){var u
P.aN(b,c,this.gj(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.jN(a,"[","]")}}
P.fA.prototype={}
P.fB.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a5.prototype={
E:function(a,b){var u,t
for(u=J.aW(this.gaf(a));u.u();){t=u.gB(u)
b.$2(t,this.h(a,t))}},
gj:function(a){return J.af(this.gaf(a))},
i:function(a){return P.jT(a)},
$iO:1}
P.j5.prototype={
k:function(a,b,c){throw H.c(P.x("Cannot modify unmodifiable map"))}}
P.fC.prototype={
h:function(a,b){return J.bJ(this.a,b)},
k:function(a,b,c){J.jE(this.a,b,c)},
E:function(a,b){J.kf(this.a,b)},
gj:function(a){return J.af(this.a)},
i:function(a){return J.ao(this.a)},
$iO:1}
P.ds.prototype={}
P.iV.prototype={
i:function(a){return P.jN(this,"{","}")},
I:function(a,b){var u,t,s
P.kB(b,"index")
for(u=P.mJ(this,this.r),t=0;u.u();){s=u.d
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
$io:1,
$ih:1}
P.dP.prototype={}
P.eg.prototype={}
P.eG.prototype={
hg:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aN(a0,a1,b.length)
u=$.ly()
if(typeof a1!=="number")return H.u(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.jq(C.a.H(b,n))
j=H.jq(C.a.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.V("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.P("")
g=r.a+=C.a.t(b,s,t)
r.a=g+H.d5(m)
s=n
continue}}throw H.c(P.N("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.t(b,s,a1)
f=g.length
if(q>=0)P.kh(b,p,a1,q,o,f)
else{e=C.c.b6(f-1,4)+1
if(e===1)throw H.c(P.N(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aK(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.kh(b,p,a1,q,o,d)
else{e=C.c.b6(d,4)
if(e===1)throw H.c(P.N(c,b,a1))
if(e>1)b=C.a.aK(b,a1,a1,e===2?"==":"=")}return b}}
P.eH.prototype={}
P.eM.prototype={}
P.eT.prototype={}
P.f5.prototype={}
P.ig.prototype={
gh2:function(){return C.K}}
P.ii.prototype={
bP:function(a){var u,t,s,r=P.aN(0,null,a.length)
if(typeof r!=="number")return r.G()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jc(t)
if(s.eh(a,0,r)!==r)s.cR(J.lE(a,r-1),0)
return new Uint8Array(t.subarray(0,H.n_(0,s.b,t.length)))}}
P.jc.prototype={
cR:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eh:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cR(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ih.prototype={
bP:function(a){var u,t,s,r,q,p,o,n,m=P.mw(!1,a,0,null)
if(m!=null)return m
u=P.aN(0,null,J.af(a))
t=P.l3(a,0,u)
if(t>0){s=P.c5(a,0,t)
if(t===u)return s
r=new P.P(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.P("")
o=new P.jb(!1,r)
o.c=p
o.fT(a,q,u)
if(o.e>0){H.m(P.N("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.d5(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jb.prototype={
fT:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bh(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a7()
if((r&192)!==128){q=P.N(k+C.c.b3(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.w,q)
if(j<=C.w[q]){q=P.N("Overlong encoding of 0x"+C.c.b3(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.N("Character outside valid Unicode range: 0x"+C.c.b3(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.d5(j)
l.c=!1}if(typeof c!=="number")return H.u(c)
q=s<c
for(;q;){p=P.l3(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.c5(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.K()
if(r<0){m=P.N("Negative UTF-8 code unit: -0x"+C.c.b3(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.N(k+C.c.b3(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.bg.prototype={}
P.a9.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.a9&&this.a===b.a&&!0},
aI:function(a,b){return C.c.aI(this.a,b.a)},
gF:function(a){var u=this.a
return(u^C.c.aF(u,30))&1073741823},
i:function(a){var u=this,t=P.lO(H.md(u)),s=P.cD(H.mb(u)),r=P.cD(H.m7(u)),q=P.cD(H.m8(u)),p=P.cD(H.ma(u)),o=P.cD(H.mc(u)),n=P.lP(H.m9(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aY.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aY&&this.a===b.a},
gF:function(a){return C.c.gF(this.a)},
aI:function(a,b){return C.c.aI(this.a,b.a)},
i:function(a){var u,t,s,r=new P.f3(),q=this.a
if(q<0)return"-"+new P.aY(0-q).i(0)
u=r.$1(C.c.a0(q,6e7)%60)
t=r.$1(C.c.a0(q,1e6)%60)
s=new P.f2().$1(q%1e6)
return""+C.c.a0(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.f2.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.f3.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.br.prototype={}
P.d1.prototype={
i:function(a){return"Throw of null."}}
P.ap.prototype={
gbt:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbs:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbt()+o+u
if(!q.a)return t
s=q.gbs()
r=P.jL(q.b)
return t+s+": "+r}}
P.bu.prototype={
gbt:function(){return"RangeError"},
gbs:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fj.prototype={
gbt:function(){return"RangeError"},
gbs:function(){var u,t=this.b
if(typeof t!=="number")return t.K()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gj:function(a){return this.f}}
P.i8.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.i4.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.eQ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.jL(u)+"."}}
P.h9.prototype={
i:function(a){return"Out of Memory"},
$ibr:1}
P.de.prototype={
i:function(a){return"Stack Overflow"},
$ibr:1}
P.eY.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dH.prototype={
i:function(a){return"Exception: "+this.a}}
P.ff.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.t(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.V(f,q)
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
k=""}j=C.a.t(f,m,n)
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.r.prototype={}
P.h.prototype={
gj:function(a){var u,t=this.gP(this)
for(u=0;t.u();)++u
return u},
I:function(a,b){var u,t,s
P.kB(b,"index")
for(u=this.gP(this),t=0;u.u();){s=u.gB(u)
if(b===t)return s;++t}throw H.c(P.L(b,this,"index",null,t))},
i:function(a){return P.lS(this,"(",")")}}
P.fl.prototype={}
P.q.prototype={$io:1,$ih:1}
P.O.prototype={}
P.b7.prototype={
gF:function(a){return P.a_.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a8.prototype={}
P.a_.prototype={constructor:P.a_,$ia_:1,
p:function(a,b){return this===b},
gF:function(a){return H.c2(this)},
i:function(a){return"Instance of '"+H.e(H.c3(this))+"'"},
toString:function(){return this.i(this)}}
P.n.prototype={}
P.P.prototype={
gj:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.id.prototype={
$2:function(a,b){var u,t,s,r=J.k6(b).dm(b,"=")
if(r===-1){if(b!=="")J.jE(a,P.k2(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.t(b,0,r)
t=C.a.ad(b,r+1)
s=this.a
J.jE(a,P.k2(u,0,u.length,s,!0),P.k2(t,0,t.length,s,!0))}return a}}
P.ia.prototype={
$2:function(a,b){throw H.c(P.N("Illegal IPv4 address, "+a,this.a,b))}}
P.ib.prototype={
$2:function(a,b){throw H.c(P.N("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.ic.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.es(C.a.t(this.b,a,b),null,16)
if(typeof u!=="number")return u.K()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bB.prototype={
gdI:function(){return this.b},
gc0:function(a){var u=this.c
if(u==null)return""
if(C.a.ac(u,"["))return C.a.t(u,1,u.length-1)
return u},
gbj:function(a){var u=this.d
if(u==null)return P.kV(this.a)
return u},
gc8:function(a){var u=this.f
return u==null?"":u},
gdh:function(){var u=this.r
return u==null?"":u},
dD:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.ac(u,"/"))u="/"+u
s=P.k0(null,0,0,b)
return new P.bB(q,o,m,n,u,s,r.r)},
gc9:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.n
u=this.Q=new P.ds(P.kN(t==null?"":t),[u,u])
t=u}return t},
gdi:function(){return this.c!=null},
gdl:function(){return this.f!=null},
gdj:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.S(b).$ijW)if(s.a==b.gbo())if(s.c!=null===b.gdi())if(s.b==b.gdI())if(s.gc0(s)==b.gc0(b))if(s.gbj(s)==b.gbj(b))if(s.e===b.gdB(b)){u=s.f
t=u==null
if(!t===b.gdl()){if(t)u=""
if(u===b.gc8(b)){u=s.r
t=u==null
if(!t===b.gdj()){if(t)u=""
u=u===b.gdh()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gF:function(a){var u=this.z
return u==null?this.z=C.a.gF(this.i(0)):u},
$ijW:1,
gbo:function(){return this.a},
gdB:function(a){return this.e}}
P.j6.prototype={
$1:function(a){throw H.c(P.N("Invalid port",this.a,this.b+1))}}
P.j7.prototype={
$1:function(a){return P.ja(C.S,a,C.e,!1)}}
P.j9.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.ja(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.ja(C.h,b,C.e,!0))}}}
P.j8.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aW(b),t=this.a;u.u();)t.$2(a,u.gB(u))}}
P.i9.prototype={
gdH:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bf(u,"?",o)
s=u.length
if(t>=0){r=P.cn(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.iJ("data",p,p,p,P.cn(u,o,s,C.y,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jf.prototype={
$1:function(a){return new Uint8Array(96)}}
P.je.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.lF(u,0,96,b)
return u},
$S:18}
P.jg.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.jh.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.iW.prototype={
gdi:function(){return this.c>0},
gdk:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.D()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
gdl:function(){var u=this.f
if(typeof u!=="number")return u.K()
return u<this.r},
gdj:function(){return this.r<this.a.length},
gcC:function(){return this.b===4&&C.a.ac(this.a,"http")},
gcD:function(){return this.b===5&&C.a.ac(this.a,"https")},
gbo:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcC())q=t.x="http"
else if(t.gcD()){t.x="https"
q="https"}else if(q===4&&C.a.ac(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.ac(t.a,r)){t.x=r
q=r}else{q=C.a.t(t.a,0,q)
t.x=q}return q},
gdI:function(){var u=this.c,t=this.b+3
return u>t?C.a.t(this.a,t,u-1):""},
gc0:function(a){var u=this.c
return u>0?C.a.t(this.a,u,this.d):""},
gbj:function(a){var u,t=this
if(t.gdk()){u=t.d
if(typeof u!=="number")return u.D()
return P.es(C.a.t(t.a,u+1,t.e),null,null)}if(t.gcC())return 80
if(t.gcD())return 443
return 0},
gdB:function(a){return C.a.t(this.a,this.e,this.f)},
gc8:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.K()
return u<t?C.a.t(this.a,u+1,t):""},
gdh:function(){var u=this.r,t=this.a
return u<t.length?C.a.ad(t,u+1):""},
gc9:function(){var u=this,t=u.f
if(typeof t!=="number")return t.K()
if(t>=u.r)return C.T
t=P.n
return new P.ds(P.kN(u.gc8(u)),[t,t])},
dD:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbo(),m=n==="file",l=p.c,k=l>0?C.a.t(p.a,p.b+3,l):"",j=p.gdk()?p.gbj(p):o
l=p.c
if(l>0)u=C.a.t(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.t(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.ac(t,"/"))t="/"+t
r=P.k0(o,0,0,b)
s=p.r
q=s<l.length?C.a.ad(l,s+1):o
return new P.bB(n,k,u,j,t,r,q)},
gF:function(a){var u=this.y
return u==null?this.y=C.a.gF(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.S(b).$ijW&&this.a===b.i(0)},
i:function(a){return this.a},
$ijW:1}
P.iJ.prototype={}
W.l.prototype={}
W.eu.prototype={
gj:function(a){return a.length}}
W.ew.prototype={
i:function(a){return String(a)}}
W.ex.prototype={
i:function(a){return String(a)}}
W.bm.prototype={$ibm:1}
W.bn.prototype={
dJ:function(a,b,c){var u=a.getContext(b,P.nB(c))
return u},
$ibn:1}
W.aX.prototype={
gj:function(a){return a.length}}
W.eU.prototype={
gj:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bO.prototype={
gj:function(a){return a.length}}
W.eV.prototype={}
W.ac.prototype={}
W.ar.prototype={}
W.eW.prototype={
gj:function(a){return a.length}}
W.eX.prototype={
gj:function(a){return a.length}}
W.eZ.prototype={
gj:function(a){return a.length}}
W.f_.prototype={
i:function(a){return String(a)}}
W.cF.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[[P.a6,P.a8]]},
$iy:1,
$ay:function(){return[[P.a6,P.a8]]},
$av:function(){return[[P.a6,P.a8]]},
$ih:1,
$ah:function(){return[[P.a6,P.a8]]},
$iq:1,
$aq:function(){return[[P.a6,P.a8]]}}
W.cG.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gai(a))+" x "+H.e(this.gae(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia6&&a.left===u.gbh(b)&&a.top===u.gbl(b)&&this.gai(a)===u.gai(b)&&this.gae(a)===u.gae(b)},
gF:function(a){return W.kU(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(this.gai(a)),C.d.gF(this.gae(a)))},
gcZ:function(a){return a.bottom},
gae:function(a){return a.height},
gbh:function(a){return a.left},
gcd:function(a){return a.right},
gbl:function(a){return a.top},
gai:function(a){return a.width},
$ia6:1,
$aa6:function(){return[P.a8]}}
W.f0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[P.n]},
$iy:1,
$ay:function(){return[P.n]},
$av:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$iq:1,
$aq:function(){return[P.n]}}
W.f1.prototype={
gj:function(a){return a.length}}
W.iH.prototype={
gj:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
l:function(a,b){this.a.appendChild(b)
return b},
gP:function(a){var u=this.hF(this)
return new J.a2(u,u.length)},
$ao:function(){return[W.T]},
$av:function(){return[W.T]},
$ah:function(){return[W.T]},
$aq:function(){return[W.T]}}
W.T.prototype={
gbN:function(a){return new W.iH(a,a.children)},
gd1:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.K()
if(s<0)s=-s*0
if(typeof r!=="number")return r.K()
if(r<0)r=-r*0
return new P.a6(u,t,s,r,[P.a8])},
i:function(a){return a.localName},
$iT:1}
W.i.prototype={$ii:1}
W.f.prototype={
fM:function(a,b,c,d){if(c!=null)this.e4(a,b,c,!1)},
e4:function(a,b,c,d){return a.addEventListener(b,H.bF(c,1),!1)}}
W.ag.prototype={$iag:1}
W.bP.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ag]},
$iy:1,
$ay:function(){return[W.ag]},
$av:function(){return[W.ag]},
$ih:1,
$ah:function(){return[W.ag]},
$iq:1,
$aq:function(){return[W.ag]},
$ibP:1}
W.fa.prototype={
gj:function(a){return a.length}}
W.fe.prototype={
gj:function(a){return a.length}}
W.as.prototype={$ias:1}
W.fh.prototype={
gj:function(a){return a.length}}
W.bR.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$iy:1,
$ay:function(){return[W.A]},
$av:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$iq:1,
$aq:function(){return[W.A]}}
W.bS.prototype={$ibS:1}
W.bs.prototype={$ibs:1}
W.fy.prototype={
i:function(a){return String(a)}}
W.fU.prototype={
gj:function(a){return a.length}}
W.bY.prototype={$ibY:1}
W.fV.prototype={
h:function(a,b){return P.aR(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaf:function(a){var u=H.b([],[P.n])
this.E(a,new W.fW(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$aa5:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
W.fW.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fX.prototype={
h:function(a,b){return P.aR(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaf:function(a){var u=H.b([],[P.n])
this.E(a,new W.fY(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$aa5:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
W.fY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.av.prototype={$iav:1}
W.fZ.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.av]},
$iy:1,
$ay:function(){return[W.av]},
$av:function(){return[W.av]},
$ih:1,
$ah:function(){return[W.av]},
$iq:1,
$aq:function(){return[W.av]}}
W.aw.prototype={$iaw:1}
W.iG.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gP:function(a){var u=this.a.childNodes
return new W.cK(u,u.length)},
gj:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ao:function(){return[W.A]},
$av:function(){return[W.A]},
$ah:function(){return[W.A]},
$aq:function(){return[W.A]}}
W.A.prototype={
hy:function(a,b){var u,t
try{u=a.parentNode
J.lC(u,b,a)}catch(t){H.bi(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.dQ(a):u},
fq:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.d0.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$iy:1,
$ay:function(){return[W.A]},
$av:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$iq:1,
$aq:function(){return[W.A]}}
W.ax.prototype={$iax:1,
gj:function(a){return a.length}}
W.hb.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ax]},
$iy:1,
$ay:function(){return[W.ax]},
$av:function(){return[W.ax]},
$ih:1,
$ah:function(){return[W.ax]},
$iq:1,
$aq:function(){return[W.ax]}}
W.hl.prototype={
h:function(a,b){return P.aR(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaf:function(a){var u=H.b([],[P.n])
this.E(a,new W.hm(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$aa5:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
W.hm.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ho.prototype={
gj:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.hy.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.az]},
$iy:1,
$ay:function(){return[W.az]},
$av:function(){return[W.az]},
$ih:1,
$ah:function(){return[W.az]},
$iq:1,
$aq:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.hz.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aA]},
$iy:1,
$ay:function(){return[W.aA]},
$av:function(){return[W.aA]},
$ih:1,
$ah:function(){return[W.aA]},
$iq:1,
$aq:function(){return[W.aA]}}
W.aB.prototype={$iaB:1,
gj:function(a){return a.length}}
W.hE.prototype={
h:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
E:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaf:function(a){var u=H.b([],[P.n])
this.E(a,new W.hF(u))
return u},
gj:function(a){return a.length},
$aa5:function(){return[P.n,P.n]},
$iO:1,
$aO:function(){return[P.n,P.n]}}
W.hF.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aj.prototype={$iaj:1}
W.aC.prototype={$iaC:1}
W.ak.prototype={$iak:1}
W.hK.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.ak]},
$iy:1,
$ay:function(){return[W.ak]},
$av:function(){return[W.ak]},
$ih:1,
$ah:function(){return[W.ak]},
$iq:1,
$aq:function(){return[W.ak]}}
W.hL.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aC]},
$iy:1,
$ay:function(){return[W.aC]},
$av:function(){return[W.aC]},
$ih:1,
$ah:function(){return[W.aC]},
$iq:1,
$aq:function(){return[W.aC]}}
W.hQ.prototype={
gj:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.bv.prototype={$ibv:1}
W.hT.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aD]},
$iy:1,
$ay:function(){return[W.aD]},
$av:function(){return[W.aD]},
$ih:1,
$ah:function(){return[W.aD]},
$iq:1,
$aq:function(){return[W.aD]}}
W.hU.prototype={
gj:function(a){return a.length}}
W.ba.prototype={}
W.ie.prototype={
i:function(a){return String(a)}}
W.iz.prototype={
gj:function(a){return a.length}}
W.bd.prototype={
gfX:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gfW:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibd:1}
W.cd.prototype={
fs:function(a,b){return a.requestAnimationFrame(H.bF(b,1))},
eg:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iI.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.F]},
$iy:1,
$ay:function(){return[W.F]},
$av:function(){return[W.F]},
$ih:1,
$ah:function(){return[W.F]},
$iq:1,
$aq:function(){return[W.F]}}
W.dC.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.S(b)
return!!u.$ia6&&a.left===u.gbh(b)&&a.top===u.gbl(b)&&a.width===u.gai(b)&&a.height===u.gae(b)},
gF:function(a){return W.kU(C.d.gF(a.left),C.d.gF(a.top),C.d.gF(a.width),C.d.gF(a.height))},
gae:function(a){return a.height},
gai:function(a){return a.width}}
W.iM.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.as]},
$iy:1,
$ay:function(){return[W.as]},
$av:function(){return[W.as]},
$ih:1,
$ah:function(){return[W.as]},
$iq:1,
$aq:function(){return[W.as]}}
W.dU.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.A]},
$iy:1,
$ay:function(){return[W.A]},
$av:function(){return[W.A]},
$ih:1,
$ah:function(){return[W.A]},
$iq:1,
$aq:function(){return[W.A]}}
W.iX.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aB]},
$iy:1,
$ay:function(){return[W.aB]},
$av:function(){return[W.aB]},
$ih:1,
$ah:function(){return[W.aB]},
$iq:1,
$aq:function(){return[W.aB]}}
W.j1.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$io:1,
$ao:function(){return[W.aj]},
$iy:1,
$ay:function(){return[W.aj]},
$av:function(){return[W.aj]},
$ih:1,
$ah:function(){return[W.aj]},
$iq:1,
$aq:function(){return[W.aj]}}
W.iK.prototype={}
W.iL.prototype={
$1:function(a){return this.a.$1(a)}}
W.K.prototype={
gP:function(a){return new W.cK(a,this.gj(a))}}
W.cK.prototype={
u:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bJ(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gB:function(a){return this.d}}
W.dB.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
W.dI.prototype={}
W.dJ.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dQ.prototype={}
W.dR.prototype={}
W.dS.prototype={}
W.dT.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.ci.prototype={}
W.cj.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e6.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.cl.prototype={}
W.cm.prototype={}
W.ec.prototype={}
W.ed.prototype={}
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
P.iY.prototype={
bZ:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bn:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.S(a)
if(!!u.$ia9)return new Date(a.a)
if(!!u.$imh)throw H.c(P.i5("structured clone of RegExp"))
if(!!u.$iag)return a
if(!!u.$ibm)return a
if(!!u.$ibP)return a
if(!!u.$ibS)return a
if(!!u.$ic_||!!u.$ib6||!!u.$ibY)return a
if(!!u.$iO){t=p.bZ(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.E(a,new P.j_(o,p))
return o.a}if(!!u.$iq){t=p.bZ(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.fU(a,t)}if(!!u.$ilV){t=p.bZ(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.h8(a,new P.j0(o,p))
return o.b}throw H.c(P.i5("structured clone of other type"))},
fU:function(a,b){var u,t=J.bh(a),s=t.gj(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.u(s)
u=0
for(;u<s;++u){q=this.bn(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.j_.prototype={
$2:function(a,b){this.a.a[a]=this.b.bn(b)},
$S:3}
P.j0.prototype={
$2:function(a,b){this.a.b[a]=this.b.bn(b)},
$S:3}
P.jl.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.iZ.prototype={
h8:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fb.prototype={
gb9:function(){var u=this.b,t=H.l9(u,"v",0)
return new H.bW(new H.iA(u,new P.fc(),[t]),new P.fd(),[t,W.T])},
k:function(a,b,c){var u=this.gb9()
J.lG(u.b.$1(J.jF(u.a,b)),c)},
l:function(a,b){this.b.a.appendChild(b)},
gj:function(a){return J.af(this.gb9().a)},
h:function(a,b){var u=this.gb9()
return u.b.$1(J.jF(u.a,b))},
gP:function(a){var u=P.jS(this.gb9(),!1,W.T)
return new J.a2(u,u.length)},
$ao:function(){return[W.T]},
$av:function(){return[W.T]},
$ah:function(){return[W.T]},
$aq:function(){return[W.T]}}
P.fc.prototype={
$1:function(a){return!!J.S(a).$iT}}
P.fd.prototype={
$1:function(a){return H.k(a,"$iT")}}
P.iR.prototype={
gcd:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
return u+t},
gcZ:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.D()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.S(b)
if(!!u.$ia6){t=q.a
if(t==u.gbh(b)){s=q.b
if(s==u.gbl(b)){r=q.c
if(typeof t!=="number")return t.D()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gcd(b)){t=q.d
if(typeof s!=="number")return s.D()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gcZ(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gF:function(a){var u=this,t=u.a,s=J.cv(t),r=u.b,q=J.cv(r),p=u.c
if(typeof t!=="number")return t.D()
if(typeof p!=="number")return H.u(p)
p=C.c.gF(t+p)
t=u.d
if(typeof r!=="number")return r.D()
if(typeof t!=="number")return H.u(t)
t=C.c.gF(r+t)
return P.mI(P.iO(P.iO(P.iO(P.iO(0,s),q),p),t))}}
P.a6.prototype={
gbh:function(a){return this.a},
gbl:function(a){return this.b},
gai:function(a){return this.c},
gae:function(a){return this.d}}
P.aI.prototype={$iaI:1}
P.fr.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.aI]},
$av:function(){return[P.aI]},
$ih:1,
$ah:function(){return[P.aI]},
$iq:1,
$aq:function(){return[P.aI]}}
P.aL.prototype={$iaL:1}
P.h7.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.aL]},
$av:function(){return[P.aL]},
$ih:1,
$ah:function(){return[P.aL]},
$iq:1,
$aq:function(){return[P.aL]}}
P.he.prototype={
gj:function(a){return a.length}}
P.hH.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.n]},
$av:function(){return[P.n]},
$ih:1,
$ah:function(){return[P.n]},
$iq:1,
$aq:function(){return[P.n]}}
P.j.prototype={
gbN:function(a){return new P.fb(a,new W.iG(a))}}
P.aO.prototype={$iaO:1}
P.hV.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[P.aO]},
$av:function(){return[P.aO]},
$ih:1,
$ah:function(){return[P.aO]},
$iq:1,
$aq:function(){return[P.aO]}}
P.dM.prototype={}
P.dN.prototype={}
P.dX.prototype={}
P.dY.prototype={}
P.e7.prototype={}
P.e8.prototype={}
P.ee.prototype={}
P.ef.prototype={}
P.bw.prototype={$io:1,
$ao:function(){return[P.r]},
$ih:1,
$ah:function(){return[P.r]},
$iq:1,
$aq:function(){return[P.r]}}
P.eA.prototype={
gj:function(a){return a.length}}
P.eB.prototype={
h:function(a,b){return P.aR(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aR(u.value[1]))}},
gaf:function(a){var u=H.b([],[P.n])
this.E(a,new P.eC(u))
return u},
gj:function(a){return a.size},
k:function(a,b,c){throw H.c(P.x("Not supported"))},
$aa5:function(){return[P.n,null]},
$iO:1,
$aO:function(){return[P.n,null]}}
P.eC.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eD.prototype={
gj:function(a){return a.length}}
P.bl.prototype={}
P.h8.prototype={
gj:function(a){return a.length}}
P.dA.prototype={}
P.da.prototype={
hD:function(a,b,c,d,e,f,g,h,i,j){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}}
P.hB.prototype={
gj:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.L(b,a,null,null,null))
return P.aR(a.item(b))},
k:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$io:1,
$ao:function(){return[[P.O,,,]]},
$av:function(){return[[P.O,,,]]},
$ih:1,
$ah:function(){return[[P.O,,,]]},
$iq:1,
$aq:function(){return[[P.O,,,]]}}
P.e3.prototype={}
P.e4.prototype={}
K.ev.prototype={
aJ:function(a,b){return!0},
i:function(a){return"all"}}
K.cL.prototype={
aJ:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)if(u[s].aJ(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.cU.prototype={}
K.aK.prototype={
aJ:function(a,b){return!this.dP(0,b)},
i:function(a){return"!["+this.cj(0)+"]"}}
K.hp.prototype={
dV:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.p("May not create a Set with zero characters."))
u=P.r
t=new H.G([u,P.bg])
for(s=new H.bV(a,a.gj(a));s.u();)t.k(0,s.d,!0)
r=P.jS(t.gaf(t),!0,u)
C.b.dN(r)
this.a=r},
aJ:function(a,b){return C.b.a1(this.a,b)},
i:function(a){return P.c5(this.a,0,null)}}
L.df.prototype={
n:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dp(this.a.L(0,b))
r.a=H.b([],[K.cU])
r.c=!1
this.c.push(r)
return r},
h4:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.aJ(0,a))return r}return},
i:function(a){return this.b},
cO:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.a1(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gaf(n),n=n.gP(n);n.u();){t=n.gB(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.a1(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.t)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dl.prototype={
i:function(a){var u=H.lg(this.b,"\n","\\n"),t=H.lg(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dm.prototype={
i:function(a){return this.b}}
L.hR.prototype={
L:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.df(this,b)
u.c=H.b([],[L.dp])
this.a.k(0,b,u)}return u},
b4:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dm(a)
u=P.n
t.c=new H.G([u,u])
this.b.k(0,a,t)}return t},
dG:function(a){return this.hH(a)},
hH:function(a){var u=this
return P.n4(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$dG(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.r]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.ca(c,0)
else{if(!t.u()){s=3
break}l=t.d}d.push(l);++o
k=g.h4(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.c5(d,0,null)
throw H.c(P.p("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.m(P.x("removeRange"))
P.aN(0,m,d.length)
d.splice(0,m-0)
C.b.bb(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.a1(0,p.a)?7:8
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
p=new L.dl(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.a1(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.mG()
case 1:return P.mH(q)}}},L.dl)},
i:function(a){var u,t=new P.P(""),s=this.d
if(s!=null)t.a=s.cO()+"\n"
for(s=this.a,s=s.ghI(s),s=s.gP(s);s.u();){u=s.gB(s)
if(u!=this.d)t.a+=u.cO()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dp.prototype={
i:function(a){return this.b.b+": "+this.cj(0)}}
O.aG.prototype={
b7:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cg:function(a,b,c){this.b=b
this.c=a},
aA:function(a,b){return this.cg(a,null,b)},
bF:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cn:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gj:function(a){return this.a.length},
gP:function(a){var u=this.a
return new J.a2(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b){var u,t,s=this,r=[H.l9(s,"aG",0)]
if(s.bF(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cn(t,H.b([b],r))}},
bb:function(a,b){var u,t
if(this.bF(b)){u=this.a
t=u.length
C.b.bb(u,b)
this.cn(t,b)}},
$ih:1}
O.bX.prototype={
gj:function(a){return this.a.length},
gm:function(){var u=this.b
return u==null?this.b=D.D():u},
aB:function(){var u=this.b
if(u!=null)u.C(null)},
ga2:function(a){var u=this.a
if(u.length>0)return C.b.gax(u)
else return V.b5()},
bk:function(a){var u=this.a
if(a==null)u.push(V.b5())
else u.push(a)
this.aB()},
b0:function(){var u=this.a
if(u.length>0){u.pop()
this.aB()}}}
E.eI.prototype={}
E.aH.prototype={
sbp:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gm().N(0,s.gdz())
u=s.c
if(u!=null)u.gm().l(0,s.gdz())
t=new D.w("shape",r,s.c)
t.b=!0
s.bi(t)}},
ak:function(a,b){var u
for(u=this.y.a,u=new J.a2(u,u.length);u.u();)u.d.ak(0,b)},
ab:function(a){var u,t=this,s=a.dx
s.a.push(s.ga2(s))
s.aB()
a.c7(t.f)
s=a.dy
u=(s&&C.b).gax(s)
if(u!=null&&t.d!=null)u.dC(a,t)
for(s=t.y.a,s=new J.a2(s,s.length);s.u();)s.d.ab(a)
a.c6()
a.dx.b0()},
bi:function(a){var u=this.z
if(u!=null)u.C(a)},
aa:function(){return this.bi(null)},
dA:function(a){this.e=null
this.bi(a)},
hm:function(){return this.dA(null)},
dw:function(a){this.bi(a)},
hj:function(){return this.dw(null)},
hi:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdv(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aZ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.aa()},
hl:function(a,b){var u,t
for(u=b.gP(b),t=this.gdv();u.u();)u.gB(u).gm().N(0,t)
this.aa()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hh.prototype={
dU:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a9(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bX()
t=[V.au]
u.a=H.b([],t)
u.gm().l(0,new E.hi(s))
s.cy=u
u=new O.bX()
u.a=H.b([],t)
u.gm().l(0,new E.hj(s))
s.db=u
u=new O.bX()
u.a=H.b([],t)
u.gm().l(0,new E.hk(s))
s.dx=u
u=H.b([],[O.dh])
s.dy=u
u.push(null)
s.fr=new H.G([P.n,A.db])},
ghv:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga2(s)
u=t.db
u=t.z=s.q(0,u.ga2(u))
s=u}return s},
c7:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gax(u):a)},
c6:function(){var u=this.dy
if(u.length>1)u.pop()},
cU:function(a){var u=a.b
if(u.length===0)throw H.c(P.p("May not cache a shader with no name."))
if(this.fr.bO(0,u))throw H.c(P.p('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.k(0,u,a)}}
E.hi.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hj.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hk.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dj.prototype={
cq:function(a){this.dE()},
cp:function(){return this.cq(null)},
gh9:function(){var u,t=this,s=Date.now(),r=C.c.a0(P.kn(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a9(s,!1)
return u/r},
cI:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.u(r)
u=C.d.c_(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.c_(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.kH(C.p,s.ghz())}},
dE:function(){if(!this.cx){this.cx=!0
var u=window
C.B.eg(u)
C.B.fs(u,W.l4(new E.hP(this),P.a8))}},
hx:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cI()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a9(r,!1)
s.y=P.kn(r-s.r.a).a*0.000001
r=s.cy
C.b.sj(r.a,0)
r.aB()
r=s.db
C.b.sj(r.a,0)
r.aB()
r=s.dx
C.b.sj(r.a,0)
r.aB()
r=s.dy;(r&&C.b).sj(r,0)
s.dy.push(null)
o.ab(p.e)}}catch(q){u=H.bi(q)
t=H.k7(q)
P.kb("Error: "+H.e(u))
P.kb("Stack: "+H.e(t))
throw H.c(u)}}}
E.hP.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hx()}}}
Z.dx.prototype={}
Z.cy.prototype={
a5:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.bi(s)
t=P.p('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dy.prototype={}
Z.bM.prototype={
aw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a5:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a5(a)},
aL:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ab:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.n],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ao(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.n(p,", ")+"\nAttrs:   "+C.b.n(r,", ")}}
Z.bT.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.c3(this.c))+"'")+"]"}}
Z.bc.prototype={
gci:function(a){var u=this.a,t=(u&$.an().a)!==0?3:0
if((u&$.aV().a)!==0)t+=3
if((u&$.aU().a)!==0)t+=3
if((u&$.bj().a)!==0)t+=2
if((u&$.bk().a)!==0)t+=3
if((u&$.cs().a)!==0)t+=3
if((u&$.ct().a)!==0)t+=4
if((u&$.bI().a)!==0)++t
return(u&$.aT().a)!==0?t+4:t},
fP:function(a){var u,t=$.an(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aU()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ct()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aT()
if((s&t.a)!==0)if(u===a)return t
return $.lx()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bc))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.n]),t=this.a
if((t&$.an().a)!==0)u.push("Pos")
if((t&$.aV().a)!==0)u.push("Norm")
if((t&$.aU().a)!==0)u.push("Binm")
if((t&$.bj().a)!==0)u.push("Txt2D")
if((t&$.bk().a)!==0)u.push("TxtCube")
if((t&$.cs().a)!==0)u.push("Clr3")
if((t&$.ct().a)!==0)u.push("Clr4")
if((t&$.bI().a)!==0)u.push("Weight")
if((t&$.aT().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.n(u,"|")}}
D.eL.prototype={}
D.aZ.prototype={
l:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.U]}]):u).push(b)},
N:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.a1(s,b)
if(s===!0){s=t.a
u=(s&&C.b).N(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.a1(s,b)
if(s===!0){s=t.b
u=(s&&C.b).N(s,b)||u}return u},
C:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.U()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.E(P.jS(u,!0,{func:1,ret:-1,args:[D.U]}),new D.f7(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.U]}])
C.b.E(u,new D.f8(q))}return!0},
d7:function(){return this.C(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.C(u)}}}}
D.f7.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.f8.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.U.prototype={}
D.b0.prototype={}
D.b1.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cz.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cz))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.cQ.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cQ))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fq.prototype={
hr:function(a){this.c=a.b
this.d.l(0,a.a)
return!1},
hn:function(a){this.c=a.b
this.d.N(0,a.a)
return!1}}
X.cT.prototype={}
X.fz.prototype={
aQ:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=new V.a0(o.a+n*m,o.b+u*t)
t=q.a.gaG()
r=new X.aJ(a,V.aM(),q.x,t,s)
r.b=!0
q.z=new P.a9(p,!1)
q.x=s
return r},
c5:function(a,b){this.r=a.a
return!1},
b_:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dK()
if(typeof u!=="number")return u.a7()
this.r=(u&~t)>>>0
return!1},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,b))
return!0},
hs:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaG()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.bZ(new V.H(s*r,q*p),u,t)
t.b=!0
n.C(t)
return!0},
eV:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cT(c,r.a.gaG(),b)
s.b=!0
t.C(s)
r.y=new P.a9(u,!1)
r.x=V.aM()}}
X.ad.prototype={
p:function(a,b){var u=this
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
X.aJ.prototype={}
X.h_.prototype={
bv:function(a,b,c){var u=this,t=new P.a9(Date.now(),!1),s=u.a.gaG(),r=new X.aJ(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
c5:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.C(this.bv(a,b,!0))
return!0},
b_:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dK()
if(typeof t!=="number")return t.a7()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.C(u.bv(a,b,!0))
return!0},
aZ:function(a,b){var u=this.d
if(u==null)return!1
u.C(this.bv(a,b,!1))
return!0},
ht:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaG()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.bZ(new V.H(t*s,r*q),u,b)
u.b=!0
o.C(u)
return!0},
gd6:function(){var u=this.b
return u==null?this.b=D.D():u},
gce:function(){var u=this.c
return u==null?this.c=D.D():u},
gdu:function(){var u=this.d
return u==null?this.d=D.D():u}}
X.bZ.prototype={}
X.hd.prototype={}
X.dn.prototype={}
X.hS.prototype={
aQ:function(a,b){var u=this,t=new P.a9(Date.now(),!1),s=a.length>0?a[0]:V.aM(),r=u.a.gaG(),q=new X.dn(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
hq:function(a){var u=this.b
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
ho:function(a){var u=this.c
if(u==null)return!1
u.C(this.aQ(a,!0))
return!0},
hp:function(a){var u=this.d
if(u==null)return!1
u.C(this.aQ(a,!1))
return!0}}
X.dt.prototype={
gaG:function(){var u=this.a,t=C.n.gd1(u).c
t.toString
u=C.n.gd1(u).d
u.toString
return V.d8(0,0,t,u)},
cv:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cQ(u,new X.ad(t,a.altKey,a.shiftKey))},
aE:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
bI:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
at:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.G()
u=t.top
if(typeof r!=="number")return r.G()
return new V.a0(s-q,r-u)},
aR:function(a){return new V.H(a.movementX,a.movementY)},
bG:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a0])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
q=C.d.Y(r.pageX)
C.d.Y(r.pageY)
p=o.left
C.d.Y(r.pageX)
n.push(new V.a0(q-p,C.d.Y(r.pageY)-o.top))}return n},
ar:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cz(u,new X.ad(t,a.altKey,a.shiftKey))},
bw:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.G()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.G()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
eP:function(a){this.f=!0},
ez:function(a){this.f=!1},
eF:function(a){if(this.f&&this.bw(a))a.preventDefault()},
eT:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.hr(u)},
eR:function(a){var u
if(!this.f)return
u=this.cv(a)
this.b.hn(u)},
eX:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aE(a)
if(r.x){u=r.ar(a)
t=r.aR(a)
if(r.d.c5(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ar(a)
s=r.at(a)
if(r.c.c5(u,s))a.preventDefault()},
f0:function(a){var u,t,s,r=this
r.aE(a)
u=r.ar(a)
if(r.x){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.b_(u,s))a.preventDefault()},
eJ:function(a){var u,t,s,r=this
if(!r.bw(a)){r.aE(a)
u=r.ar(a)
if(r.x){t=r.aR(a)
if(r.d.b_(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.b_(u,s))a.preventDefault()}},
eZ:function(a){var u,t,s,r=this
r.aE(a)
u=r.ar(a)
if(r.x){t=r.aR(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.aZ(u,s))a.preventDefault()},
eH:function(a){var u,t,s,r=this
if(!r.bw(a)){r.aE(a)
u=r.ar(a)
if(r.x){t=r.aR(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r)return
s=r.at(a)
if(r.c.aZ(u,s))a.preventDefault()}},
f2:function(a){var u,t,s=this
s.aE(a)
u=new V.H((a&&C.A).gfW(a),C.A.gfX(a)).v(0,180)
if(s.x){if(s.d.hs(u))a.preventDefault()
return}if(s.r)return
t=s.at(a)
if(s.c.ht(u,t))a.preventDefault()},
f4:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ar(s.y)
t=s.at(s.y)
s.d.eV(u,t,r)}},
fk:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bI(a)
u=t.bG(a)
if(t.e.hq(u))a.preventDefault()},
fg:function(a){var u
this.bI(a)
u=this.bG(a)
if(this.e.ho(u))a.preventDefault()},
fi:function(a){var u
this.bI(a)
u=this.bG(a)
if(this.e.hp(u))a.preventDefault()}}
D.eF.prototype={$ia4:1}
D.bq.prototype={
ao:function(a){var u=this.r
if(u!=null)u.C(a)},
dZ:function(){return this.ao(null)},
$ia4:1}
D.a4.prototype={}
D.cR.prototype={
ao:function(a){var u=this.y
if(u!=null)u.C(a)},
cG:function(a){var u=this.z
if(u!=null)u.C(a)},
eU:function(){return this.cG(null)},
f6:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){s=a[t]
if(s==null||this.eb(s))return!1}return!0},
es:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcF(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q instanceof D.bq)this.f.push(q)
p=q.r
if(p==null){p=new D.aZ()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b0()
u.b=!0
this.ao(u)},
fa:function(a,b){var u,t,s
for(u=b.gP(b),t=this.gcF();u.u();){s=u.gB(u)
C.b.N(this.e,s)
s.gm().N(0,t)}u=new D.b1()
u.b=!0
this.ao(u)},
eb:function(a){var u=C.b.a1(this.f,a)
return u},
$ah:function(){return[D.a4]},
$aaG:function(){return[D.a4]}}
D.hc.prototype={$ia4:1}
D.hA.prototype={$ia4:1}
V.V.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.a3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.I(u.a,3,0)+", "+V.I(u.b,3,0)+", "+V.I(u.c,3,0)+", "+V.I(u.d,3,0)+"]"}}
V.f6.prototype={}
V.cX.prototype={
a6:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cX))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.bH(H.b([q.a,q.d,q.r],p),3,0),n=V.bH(H.b([q.b,q.e,q.x],p),3,0),m=V.bH(H.b([q.c,q.f,q.y],p),3,0)
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
V.au.prototype={
a6:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
ds:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.z().a)return V.b5()
u=1/b1
t=-n
s=-a0
return V.ah((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ah(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.B(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
b5:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.R(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.au))return!1
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
i:function(a){return this.T()},
J:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.bH(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bH(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bH(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bH(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
T:function(){return this.J("")}}
V.a0.prototype={
G:function(a,b){return new V.a0(this.a-b.a,this.b-b.b)},
p:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.R.prototype={
D:function(a,b){return new V.R(this.a+b.a,this.b+b.b,this.c+b.c)},
G:function(a,b){return new V.R(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.R(this.a*b,this.b*b,this.c*b)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
V.b8.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b8))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.I(u.a,3,0)+", "+V.I(u.b,3,0)+", "+V.I(u.c,3,0)+", "+V.I(u.d,3,0)+"]"}}
V.d7.prototype={
ga9:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.d7))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.I(u.a,3,0)+", "+V.I(u.b,3,0)+", "+V.I(u.c,3,0)+", "+V.I(u.d,3,0)+"]"}}
V.H.prototype={
c1:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
u=this.b
if(typeof u!=="number")return u.q()
return new V.H(t*b,u*b)},
v:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.kO
return u==null?$.kO=new V.H(0,0):u}u=this.a
if(typeof u!=="number")return u.v()
t=this.b
if(typeof t!=="number")return t.v()
return new V.H(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.G()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+"]"}}
V.B.prototype={
c1:function(a){return Math.sqrt(this.w(this))},
w:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
av:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
D:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
R:function(a){return new V.B(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
v:function(a,b){if(Math.abs(b-0)<$.z().a)return V.cc()
return new V.B(this.a/b,this.b/b,this.c/b)},
dt:function(){var u=$.z().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.I(this.a,3,0)+", "+V.I(this.b,3,0)+", "+V.I(this.c,3,0)+"]"}}
U.eP.prototype={
bq:function(a){var u=V.o_(a,this.c,this.b)
return u},
gm:function(){var u=this.y
return u==null?this.y=D.D():u},
M:function(a){var u=this.y
if(u!=null)u.C(a)},
scf:function(a,b){},
sc2:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bq(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.M(s)}},
sc4:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bq(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.M(s)}},
sa8:function(a,b){var u,t=this
b=t.bq(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.M(u)}},
sc3:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.M(r)}},
sU:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.M(t)}},
sbQ:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.M(u)}},
ak:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa8(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.z().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sU(u)}}}
U.cB.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.D():u},
aM:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cB))return!1
return J.C(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.bQ.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.D():u},
M:function(a){var u=this.e
if(u!=null)u.C(a)},
a4:function(){return this.M(null)},
eq:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaD(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.M(u)},
f8:function(a,b){var u,t
for(u=b.gP(b),t=this.gaD();u.u();)u.gB(u).gm().N(0,t)
u=new D.b1()
u.b=!0
this.M(u)},
aM:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.K()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a2(r,r.length),u=null;r.u();){q=r.d
if(q!=null){t=q.aM(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.b5():u
r=s.e
if(r!=null)r.az(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bQ))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.C(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ah:function(){return[U.aa]},
$aaG:function(){return[U.aa]},
$iaa:1}
U.aa.prototype={}
U.du.prototype={
gm:function(){var u=this.cy
return u==null?this.cy=D.D():u},
M:function(a){var u=this.cy
if(u!=null)u.C(a)},
a4:function(){return this.M(null)},
aS:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gd6().l(0,u.gbx())
u.a.c.gdu().l(0,u.gbz())
u.a.c.gce().l(0,u.gbB())
return!0},
by:function(a){var u=this
if(!J.C(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bA:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaJ")
if(!n.y)return
if(n.x){u=a.d.G(0,a.y)
u=new V.H(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.G(0,a.y)
u=new V.H(t.a,t.b).q(0,2).v(0,u.ga9())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sU(u*10*s)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=new V.H(s.a,s.b).q(0,2).v(0,u.ga9())
s=n.b
q=r.a
if(typeof q!=="number")return q.R()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
n.b.sU(0)
t=t.G(0,a.z)
n.Q=new V.H(t.a,t.b).q(0,2).v(0,u.ga9())}n.a4()},
bC:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sU(t*10*s)
r.a4()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.K()
if(q<p){r.ch=p
u=b.y
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ah(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaa:1}
U.dv.prototype={
gm:function(){var u=this.fx
return u==null?this.fx=D.D():u},
M:function(a){var u=this.fx
if(u!=null)u.C(a)},
a4:function(){return this.M(null)},
aS:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gd6().l(0,s.gbx())
s.a.c.gdu().l(0,s.gbz())
s.a.c.gce().l(0,s.gbB())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.l(0,s.gej())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.l(0,s.gel())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.l(0,s.gfJ())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.l(0,s.gfH())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.l(0,s.gfF())
return!0},
am:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.R()
u=-u}if(this.r){if(typeof t!=="number")return t.R()
t=-t}return new V.H(u,t)},
by:function(a){var u=this
H.k(a,"$iaJ")
if(!J.C(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bA:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaJ")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.H(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.am(new V.H(t.a,t.b).q(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.am(new V.H(s.a,s.b).q(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.G(0,a.z)
n.dx=n.am(new V.H(t.a,t.b).q(0,2).v(0,u.ga9()))}n.a4()},
bC:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sU(-t*10*u)
r.a4()}},
ek:function(a){var u=this
if(H.k(a,"$icT").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
em:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$iaJ")
if(!J.C(n.d,a.x.b))return
u=a.c
t=a.d
s=t.G(0,a.y)
r=n.am(new V.H(s.a,s.b).q(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.G(0,a.z)
n.dx=n.am(new V.H(t.a,t.b).q(0,2).v(0,u.ga9()))
n.a4()},
fK:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fI:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idn")
if(!n.cx)return
if(n.ch){u=a.d.G(0,a.y)
u=new V.H(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.G(0,a.y)
u=n.am(new V.H(t.a,t.b).q(0,2).v(0,u.ga9()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.R()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sU(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.R()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sU(-u*10*t)}else{u=a.c
t=a.d
s=t.G(0,a.y)
r=n.am(new V.H(s.a,s.b).q(0,2).v(0,u.ga9()))
s=n.c
q=r.a
if(typeof q!=="number")return q.R()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.R()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa8(0,-p*q+s)
n.b.sU(0)
n.c.sU(0)
t=t.G(0,a.z)
n.dx=n.am(new V.H(t.a,t.b).q(0,2).v(0,u.ga9()))}n.a4()},
fG:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.R()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sU(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.R()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sU(-t*10*u)
r.a4()}},
aM:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.K()
if(q<p){r.dy=p
u=b.y
r.c.ak(0,u)
r.b.ak(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ah(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.ah(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaa:1}
U.dw.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.D():u},
M:function(a){var u=this.r
if(u!=null)u.C(a)},
aS:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.D():t
t=r.gen()
u.l(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.D():s).l(0,t)
return!0},
eo:function(a){var u,t,s,r,q=this
if(!J.C(q.b,q.a.b.c))return
H.k(a,"$ibZ")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.M(u)}},
aM:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ah(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaa:1}
M.cA.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.D():u},
W:function(a){var u=this.r
if(u!=null)u.C(a)},
aP:function(){return this.W(null)},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.gm()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.W(u)},
fe:function(a,b){var u,t
for(u=b.gP(b),t=this.gX();u.u();)u.gB(u).gm().N(0,t)
u=new D.b1()
u.b=!0
this.W(u)},
ab:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a2(u,u.length);u.u();){t=u.d
if(t!=null)t.ab(a)}s.f=!1},
$ah:function(){return[M.ai]},
$aaG:function(){return[M.ai]},
$iai:1}
M.cC.prototype={
gm:function(){var u=this.r
return u==null?this.r=D.D():u},
W:function(a){var u=this.r
if(u!=null)u.C(a)},
aP:function(){return this.W(null)},
sb1:function(a,b){var u,t,s=this
if(b==null)b=X.jM(null)
u=s.c
if(u!==b){if(u!=null)u.gm().N(0,s.gX())
t=s.c
s.c=b
b.gm().l(0,s.gX())
u=new D.w("target",t,s.c)
u.b=!0
s.W(u)}},
sb2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gX())
s=new D.w("technique",u,t.d)
s.b=!0
t.W(s)}},
ab:function(a){var u,t,s=this
a.c7(s.d)
s.c.a5(a)
u=s.b
u.toString
a.cy.bk(V.b5())
t=V.b5()
u.a
a.db.bk(t)
s.e.ak(0,a)
s.e.ab(a)
s.b.toString
a.cy.b0()
a.db.b0()
s.c.toString
a.c6()},
$iai:1}
M.cH.prototype={
W:function(a){var u=this.y
if(u!=null)u.C(a)},
aP:function(){return this.W(null)},
eB:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gX(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.aZ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b0()
u.b=!0
this.W(u)},
eD:function(a,b){var u,t
for(u=b.gP(b),t=this.gX();u.u();)u.gB(u).gm().N(0,t)
u=new D.b1()
u.b=!0
this.W(u)},
sd0:function(a){var u,t,s=this
if(a==null)a=X.kv(null)
u=s.b
if(u!==a){if(u!=null)u.gm().N(0,s.gX())
t=s.b
s.b=a
a.gm().l(0,s.gX())
u=new D.w("camera",t,s.b)
u.b=!0
s.W(u)}},
sb1:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gm().N(0,t.gX())
u=t.c
t.c=b
b.gm().l(0,t.gX())
s=new D.w("target",u,t.c)
s.b=!0
t.W(s)}},
sb2:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gm().N(0,t.gX())
u=t.d
t.d=a
if(a!=null)a.gm().l(0,t.gX())
s=new D.w("technique",u,t.d)
s.b=!0
t.W(s)}},
gm:function(){var u=this.y
return u==null?this.y=D.D():u},
ab:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this
a.c7(j.d)
j.c.a5(a)
u=j.b
t=a.c
s=a.d
r=u.c
q=u.d
p=u.e
o=p-q
n=1/Math.tan(r*0.5)
m=V.ah(-n/(t/s),0,0,0,0,n,0,0,0,0,p/o,-p*q/o,0,0,1,0)
u.a
a.cy.bk(m)
t=$.kw
if(t==null){t=V.ky()
s=V.jY()
r=$.kP
t=V.kt(t,s,r==null?$.kP=new V.B(0,0,-1):r)
$.kw=t
l=t}else l=t
t=u.b
if(t!=null){k=t.aM(0,a,u)
if(k!=null)l=k.q(0,l)}a.db.bk(l)
u=j.d
if(u!=null)u.ak(0,a)
for(u=j.e.a,u=new J.a2(u,u.length);u.u();)u.d.ak(0,a)
for(u=j.e.a,u=new J.a2(u,u.length);u.u();)u.d.ab(a)
j.b.toString
a.cy.b0()
a.db.b0()
j.c.aL(a)
a.c6()},
$iai:1}
M.ai.prototype={}
A.cw.prototype={}
A.ez.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
h1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
d4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gal:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
p:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fE.prototype={
dT:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.P("")
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
A.nj(c0,u)
A.nl(c0,u)
A.nk(c0,u)
A.nn(c0,u)
A.no(c0,u)
A.nm(c0,u)
A.np(c0,u)
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
b5.dn(0,s.charCodeAt(0)==0?s:s,A.ni(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.k(b5.y.S(0,"invViewMat"),"$ia1")
if(t)b5.dy=H.k(b5.y.S(0,"objMat"),"$ia1")
if(r)b5.fr=H.k(b5.y.S(0,"viewObjMat"),"$ia1")
b5.fy=H.k(b5.y.S(0,"projViewObjMat"),"$ia1")
if(c0.go)b5.fx=H.k(b5.y.S(0,"viewMat"),"$ia1")
if(c0.x1)b5.k1=H.k(b5.y.S(0,"txt2DMat"),"$ic9")
if(c0.x2)b5.k2=H.k(b5.y.S(0,"txtCubeMat"),"$ia1")
if(c0.y1)b5.k3=H.k(b5.y.S(0,"colorMat"),"$ia1")
b5.r1=H.b([],[A.a1])
t=c0.bd
if(t>0){b5.k4=b5.y.S(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.m(P.p(b7+q+b8))
s.push(H.k(m,"$ia1"))}}if(c0.a.a)b5.r2=H.k(b5.y.S(0,"emissionClr"),"$iE")
if(c0.b.a)b5.x1=H.k(b5.y.S(0,"ambientClr"),"$iE")
if(c0.c.a)b5.y2=H.k(b5.y.S(0,"diffuseClr"),"$iE")
if(c0.d.a)b5.be=H.k(b5.y.S(0,"invDiffuseClr"),"$iE")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.da=H.k(b5.y.S(0,"shininess"),"$iQ")
if(t)b5.d9=H.k(b5.y.S(0,"specularClr"),"$iE")}if(c0.db){b5.dc=H.k(b5.y.S(0,"envSampler"),"$iby")
if(c0.r.a)b5.dd=H.k(b5.y.S(0,"reflectClr"),"$iE")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.de=H.k(b5.y.S(0,"refraction"),"$iQ")
if(t)b5.df=H.k(b5.y.S(0,"refractClr"),"$iE")}}if(c0.y.a)b5.dg=H.k(b5.y.S(0,"alpha"),"$iQ")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.r
b5.bR=new H.G([r,A.al])
b5.bS=new H.G([r,[P.q,A.c7]])
for(r=[A.c7],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.m(P.p(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.a7()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.k(e,"$iQ")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.k(d,"$iQ")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.m(P.p(b7+o+b8))
H.k(c,"$iQ")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.c7(m,g,f,a0,a,b))}b5.bS.k(0,j,h)
q=b5.bR
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.k(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.r
b5.bT=new H.G([r,A.al])
b5.bU=new H.G([r,[P.q,A.c8]])
for(r=[A.c8],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.a7()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.m(P.p(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.m(P.p(b7+a1+b8))
H.k(g,"$iE")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.m(P.p(b7+a1+b8))
H.k(f,"$iE")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.m(P.p(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.m(P.p(b7+a1+b8))
H.k(g,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.k(f,"$iaQ")
a5=f}else a5=b6
h.push(new A.c8(a4,a3,a2,m,g,a5))}b5.bU.k(0,j,h)
q=b5.bT
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.k(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.r
b5.bV=new H.G([r,A.al])
b5.bW=new H.G([r,[P.q,A.ca]])
for(r=[A.ca],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.m(P.p(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.a7()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.k(e,"$ic9")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.k(e,"$iby")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.k(e,"$iby")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.k(d,"$ibx")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.k(e,"$iQ")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.k(d,"$iQ")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.m(P.p(b7+o+b8))
H.k(c,"$iQ")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.ca(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.bW.k(0,j,h)
q=b5.bV
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.k(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.r
b5.bX=new H.G([r,A.al])
b5.bY=new H.G([r,[P.q,A.cb]])
for(r=[A.cb],l=0;l<t.length;t.length===s||(0,H.t)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.m(P.p(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.m(P.p(b7+o+b8))
H.k(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.m(P.p(b7+o+b8))
H.k(e,"$iE")
if(typeof j!=="number")return j.a7()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.k(d,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.m(P.p(b7+o+b8))
H.k(c,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.m(P.p(b7+o+b8))
H.k(a9,"$iQ")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.m(P.p(b7+o+b8))
H.k(b0,"$iQ")
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
if(d==null)H.m(P.p(b7+a1+b8))
H.k(d,"$ibx")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.m(P.p(b7+a1+b8))
H.k(d,"$iQ")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.m(P.p(b7+a1+b8))
H.k(c,"$iQ")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.m(P.p(b7+a1+b8))
H.k(d,"$iQ")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.m(P.p(b7+a1+b8))
H.k(c,"$iQ")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.m(P.p(b7+a1+b8))
H.k(a9,"$iQ")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.m(P.p(b7+a1+b8))
H.k(d,"$iaQ")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.m(P.p(b7+o+b8))
H.k(d,"$iaQ")
a7=d}else a7=b6
h.push(new A.cb(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.bY.k(0,j,h)
q=b5.bX
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.m(P.p(b7+o+b8))
q.k(0,j,m)}}}},
fv:function(a,b){}}
A.cx.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cE.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.d4.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dd.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.fH.prototype={
i:function(a){return this.aV}}
A.c7.prototype={}
A.c8.prototype={}
A.ca.prototype={}
A.cb.prototype={}
A.db.prototype={
cm:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dn:function(a,b,c){var u,t,s,r=this
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
H.m(P.p("Failed to link shader: "+H.e(s)))}r.fB()
r.fD()},
a5:function(a){a.a.useProgram(this.r)
this.x.h1()},
cw:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.p("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
fB:function(){var u,t,s,r=this,q=H.b([],[A.cw]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cw(p,t.name,s))}r.x=new A.ez(q)},
fD:function(){var u,t,s,r=this,q=H.b([],[A.dq]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fV(t.type,t.size,t.name,s))}r.y=new A.i2(q)},
aC:function(a,b,c){var u=this.a
if(a===1)return new A.al(u,b,c)
else return A.jV(u,this.r,b,a,c)},
ed:function(a,b,c){var u=this.a
if(a===1)return new A.aQ(u,b,c)
else return A.jV(u,this.r,b,a,c)},
ee:function(a,b,c){var u=this.a
if(a===1)return new A.by(u,b,c)
else return A.jV(u,this.r,b,a,c)},
ba:function(a,b){return new P.dH(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
fV:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aC(b,c,d)
case 5121:return u.aC(b,c,d)
case 5122:return u.aC(b,c,d)
case 5123:return u.aC(b,c,d)
case 5124:return u.aC(b,c,d)
case 5125:return u.aC(b,c,d)
case 5126:return new A.Q(u.a,c,d)
case 35664:return new A.aP(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.bx(u.a,c,d)
case 35667:return new A.i_(u.a,c,d)
case 35668:return new A.i0(u.a,c,d)
case 35669:return new A.i1(u.a,c,d)
case 35674:return new A.i3(u.a,c,d)
case 35675:return new A.c9(u.a,c,d)
case 35676:return new A.a1(u.a,c,d)
case 35678:return u.ed(b,c,d)
case 35680:return u.ee(b,c,d)
case 35670:throw H.c(u.ba("BOOL",c))
case 35671:throw H.c(u.ba("BOOL_VEC2",c))
case 35672:throw H.c(u.ba("BOOL_VEC3",c))
case 35673:throw H.c(u.ba("BOOL_VEC4",c))
default:throw H.c(P.p("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.bo.prototype={
i:function(a){return this.b}}
A.hO.prototype={
dX:function(a,b,c){var u,t,s,r,q,p=this,o="Required uniform value, ",n=", was not defined or used in shader."
p.dn(0,"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n".charCodeAt(0)==0?"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n":"attribute vec3 posAttr;\n\nvarying vec2 pos;\n\nvoid main()\n{\n  pos = posAttr.xy*0.5 + 0.5;\n  gl_Position = vec4(posAttr, 1.0);\n}\n",A.mr(a,b))
p.z=p.x.h(0,"posAttr")
p.Q=H.k(p.y.S(0,"txtCount"),"$ial")
p.ch=H.k(p.y.S(0,"backClr"),"$ibx")
p.cx=H.b([],[A.aQ])
p.cy=H.b([],[A.a1])
u=[A.aP]
p.db=H.b([],u)
p.dx=H.b([],u)
p.dy=H.b([],u)
p.fr=H.b([],u)
p.fx=H.b([],[A.al])
for(t=0;t<a;++t){u=p.cx
s=p.y
r="txt"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$iaQ"))
u=p.cy
s=p.y
r="clrMat"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$ia1"))
u=p.db
s=p.y
r="srcLoc"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$iaP"))
u=p.dx
s=p.y
r="srcSize"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$iaP"))
u=p.dy
s=p.y
r="destLoc"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$iaP"))
u=p.fr
s=p.y
r="destSize"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$iaP"))
u=p.fx
s=p.y
r="flip"+t
q=s.h(0,r)
if(q==null)H.m(P.p(o+r+n))
u.push(H.k(q,"$ial"))}}}
A.dq.prototype={}
A.i2.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
S:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.p("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.T()},
T:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.t)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.al.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.i_.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.i0.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.i1.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.hZ.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.Q.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.aP.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.bx.prototype={
dL:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.i3.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.c9.prototype={
aj:function(a){var u=new Float32Array(H.be(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a1.prototype={
aj:function(a){var u=new Float32Array(H.be(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.aQ.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.by.prototype={
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jC.prototype={
$1:function(a){return new V.R(Math.cos(a),Math.sin(a),0)}}
F.jm.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.ke(n.$1(o),m)
m=J.ke(n.$1(o+3.141592653589793/p.c),m).G(0,l)
m=new V.B(m.a,m.b,m.c)
u=m.v(0,Math.sqrt(m.w(m)))
n=$.kQ
if(n==null){n=new V.B(1,0,0)
$.kQ=n
t=n}else t=n
n=u.av(!J.C(u,t)?V.kS():t)
s=n.v(0,Math.sqrt(n.w(n)))
n=s.av(u)
t=n.v(0,Math.sqrt(n.w(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
m=l.D(0,new V.R(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.C(a.f,m)){a.f=m
n=a.a
if(n!=null)n.aa()}}}
F.b_.prototype={
aU:function(){var u=this
if(!u.gd5()){C.b.N(u.a.a.d.b,u)
u.a.a.aa()}u.fn()
u.fo()
u.fp()},
fw:function(a){this.a=a
a.d.b.push(this)},
fz:function(a){this.b=a
a.d.c.push(this)},
fA:function(a){this.c=a
a.d.d.push(this)},
fn:function(){var u=this.a
if(u!=null){C.b.N(u.d.b,this)
this.a=null}},
fo:function(){var u=this.b
if(u!=null){C.b.N(u.d.c,this)
this.b=null}},
fp:function(){var u=this.c
if(u!=null){C.b.N(u.d.d,this)
this.c=null}},
gd5:function(){return this.a==null||this.b==null||this.c==null},
e7:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cc()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dt())return
return s.v(0,Math.sqrt(s.w(s)))},
e9:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.G(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.v(0,Math.sqrt(r.w(r)))
r=t.G(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.av(r.v(0,Math.sqrt(r.w(r))))
return r.v(0,Math.sqrt(r.w(r)))},
bM:function(){var u,t=this
if(t.d!=null)return!0
u=t.e7()
if(u==null){u=t.e9()
if(u==null)return!1}t.d=u
t.a.a.aa()
return!0},
e6:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cc()
if(q!=null)s=s.D(0,q)
if(u!=null)s=s.D(0,u)
if(t!=null)s=s.D(0,t)
if(s.dt())return
return s.v(0,Math.sqrt(s.w(s)))},
e8:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.z().a){l=d.G(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.R(0)}else{p=(l-u.b)/r
l=d.G(0,g).q(0,p).D(0,g).G(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.v(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.R(0)}l=n.d
if(l!=null){o=l.v(0,Math.sqrt(l.w(l)))
l=o.av(q)
l=l.v(0,Math.sqrt(l.w(l))).av(o)
q=l.v(0,Math.sqrt(l.w(l)))}return q},
bK:function(){var u,t=this
if(t.e!=null)return!0
u=t.e6()
if(u==null){u=t.e8()
if(u==null)return!1}t.e=u
t.a.a.aa()
return!0},
gfS:function(a){var u=this
if(J.C(u.a,u.b))return!0
if(J.C(u.b,u.c))return!0
if(J.C(u.c,u.a))return!0
return!1},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
J:function(a){var u,t,s=this
if(s.gd5())return a+"disposed"
u=a+C.a.ay(J.ao(s.a.e),0)+", "+C.a.ay(J.ao(s.b.e),0)+", "+C.a.ay(J.ao(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
T:function(){return this.J("")}}
F.f9.prototype={}
F.hx.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.cS.prototype={}
F.fs.prototype={}
F.hY.prototype={
aY:function(a,b,c){var u,t=b.a
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
F.d3.prototype={}
F.hq.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.D():u},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
hf:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aS(o,0)])
for(o=[F.bb];u.length!==0;){t=C.b.gh5(u)
C.b.ca(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.b.ca(u,r)}}if(s.length>1)b.he(s)}}p.a.A()
p.c.cb()
p.d.cb()
p.b.hw()
p.c.cc(new F.hY())
p.d.cc(new F.hx())
o=p.e
if(o!=null)o.az(0)},
d_:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.an()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aV().a)!==0)++s
if((t&$.aU().a)!==0)++s
if((t&$.bj().a)!==0)++s
if((t&$.bk().a)!==0)++s
if((t&$.cs().a)!==0)++s
if((t&$.ct().a)!==0)++s
if((t&$.bI().a)!==0)++s
if((t&$.aT().a)!==0)++s
r=a4.gci(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cy])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.fP(m)
k=l.gci(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cy(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hd(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.be(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bM(new Z.dx(a1,d),o,a4)
c.b=H.b([],[Z.bT])
a0.b.b
if(a0.c.b.length!==0){b=H.b([],[P.r])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.bT(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.r])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.A()
b.push(t.e)}a=Z.kT(u,34963,b)
c.b.push(new Z.bT(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.n])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.J("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.J("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.J("   "))}return C.b.n(t,"\n")},
aa:function(){var u=this.e
if(u!=null)u.C(null)}}
F.hr.prototype={
fN:function(a){var u,t,s,r,q=H.b([],[F.b_]),p=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.l(0,p)
u.a.l(0,s)
u.a.l(0,r)
q.push(F.cI(p,s,r))}return q},
fO:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b_])
for(u=this.a,t=b,s=0,r=!1,q=1;q<a;++q,++s,++t){for(p=r,o=1;o<b;++o,t=k){n=c.length
if(s<0||s>=n)return H.d(c,s)
m=c[s];++s
if(s>=n)return H.d(c,s)
l=c[s]
k=t+1
if(k<0||k>=n)return H.d(c,k)
j=c[k]
if(t<0||t>=n)return H.d(c,t)
i=c[t]
n=u.a
if(p){n.l(0,m)
u.a.l(0,l)
u.a.l(0,j)
h.push(F.cI(m,l,j))
u.a.l(0,m)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cI(m,j,i))}else{n.l(0,l)
u.a.l(0,j)
u.a.l(0,i)
h.push(F.cI(l,j,i))
u.a.l(0,l)
u.a.l(0,i)
u.a.l(0,m)
h.push(F.cI(l,i,m))}p=!p}r=!r}return h},
gj:function(a){return this.b.length},
cc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
cb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gfS(s)
if(t)s.aU()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bM())s=!1
return s},
bL:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.t)(u),++r)if(!u[r].bK())s=!1
return s},
i:function(a){return this.T()},
J:function(a){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].J(a))
return C.b.n(r,"\n")},
T:function(){return this.J("")}}
F.hs.prototype={
gj:function(a){return this.b.length},
cc:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aY(0,p,n)){p.aU()
break}}}}},
cb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.C(s.a,s.b)
if(t)s.aU()}},
i:function(a){return this.T()},
J:function(a){var u,t,s=H.b([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].J(a+(""+u+". ")))}return C.b.n(s,"\n")},
T:function(){return this.J("")}}
F.ht.prototype={
gj:function(a){return 0},
hw:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.d(t,u)
t=t[u].gib()
t=t.gi8(t)
if(t.gj(t).Z(0,1)){t=this.b
return H.d(t,u)
t[u].aU()}}},
i:function(a){return this.T()},
J:function(a){var u,t,s=H.b([],[P.n])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].J(a))}return C.b.n(s,"\n")},
T:function(){return this.J("")}}
F.bb.prototype={
d3:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.im(u.cx,r,o,t,s,q,p,a,n)},
hd:function(a){var u,t,s=this
if(a.p(0,$.an())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aV())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.aU())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.bj())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.p(0,$.bk())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.cs())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.p(0,$.ct())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.p(0,$.bI()))return H.b([s.ch],[P.J])
else if(a.p(0,$.aT())){u=s.cx
t=[P.J]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.J])},
bM:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cc()
t.d.E(0,new F.iy(s))
s=s.a
t.r=s.v(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.az(0)}return!0},
bK:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cc()
t.d.E(0,new F.ix(s))
s=s.a
t.x=s.v(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.aa()
s=t.a.e
if(s!=null)s.az(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.T()},
J:function(a){var u,t,s=this,r="-",q=H.b([],[P.n])
q.push(C.a.ay(J.ao(s.e),0))
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
q.push(V.I(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.n(q,", ")
return a+"{"+t+"}"},
T:function(){return this.J("")}}
F.iy.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.ix.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.D(0,t)}}}
F.io.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
l:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.p("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.aa()
return!0},
bc:function(a,b,c,d,e,f){var u=F.im(a,null,b,c,null,d,e,f,0)
this.l(0,u)
return u},
gj:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bM()
return!0},
bL:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)u[s].bK()
return!0},
fR:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.v(0,Math.sqrt(p*p+o*o+n*n))
if(!J.C(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.C(null)}}}}return!0},
i:function(a){return this.T()},
J:function(a){var u,t,s,r
this.A()
u=H.b([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r)u.push(t[r].J(a))
return C.b.n(u,"\n")},
T:function(){return this.J("")}}
F.ip.prototype={
gj:function(a){return this.b.length+this.c.length+this.d.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.d(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.d(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.d(t,b)
return t[b]},
E:function(a,b){var u=this
C.b.E(u.b,b)
C.b.E(u.c,new F.iq(u,b))
C.b.E(u.d,new F.ir(u,b))},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].J(""))
return C.b.n(r,"\n")}}
F.iq.prototype={
$1:function(a){if(!J.C(a.a,this.a))this.b.$1(a)}}
F.ir.prototype={
$1:function(a){var u=this.a
if(!J.C(a.a,u)&&!J.C(a.b,u))this.b.$1(a)}}
F.is.prototype={
gj:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.T()},
T:function(){var u,t,s,r=H.b([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.t)(u),++s)r.push(u[s].J(""))
return C.b.n(r,"\n")}}
F.iu.prototype={}
F.it.prototype={
aY:function(a,b,c){return J.C(b.f,c.f)}}
F.iv.prototype={}
F.h5.prototype={
he:function(a){var u,t,s,r,q,p,o,n,m=V.cc()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.B(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.v(0,Math.sqrt(m.w(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.t)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.v(0,Math.sqrt(p*p+o*o+n*n))}if(!J.C(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.C(null)}}}return}}
F.iw.prototype={
gj:function(a){return 0},
i:function(a){return this.T()},
T:function(){var u,t,s=H.b([],[P.n])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].J(""))}return C.b.n(s,"\n")}}
O.cV.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.D():u},
O:function(a){var u=this.fr
if(u!=null)u.C(a)},
aq:function(){return this.O(null)},
cH:function(a){this.a=null
this.O(a)},
fu:function(){return this.cH(null)},
ev:function(a,b){var u=new D.b0()
u.b=!0
this.O(u)},
ex:function(a,b){var u=new D.b1()
u.b=!0
this.O(u)},
cu:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.r
f=[f,f]
u=new H.G(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=t[r]
p=q.gan()
o=u.h(0,q.gan())
u.k(0,p,o==null?1:o)}n=H.b([],[A.cx])
u.E(0,new O.fL(g,n))
C.b.aO(n,new O.fM())
m=new H.G(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.cE])
m.E(0,new O.fN(g,l))
C.b.aO(l,new O.fO())
k=new H.G(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.t)(t),++r){q=t[r]
p=q.gan()
o=k.h(0,q.gan())
k.k(0,p,o==null?1:o)}j=H.b([],[A.d4])
k.E(0,new O.fP(g,j))
C.b.aO(j,new O.fQ())
i=new H.G(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.t)(f),++r){q=f[r]
s=q.gan()
p=i.h(0,q.gan())
i.k(0,s,p==null?1:p)}h=H.b([],[A.dd])
i.E(0,new O.fR(g,h))
C.b.aO(h,new O.fS())
f=C.c.a0(g.e.a.length+3,4)
g.dy.e
return A.m3(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
e5:function(a,b){},
ak:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a2(u,u.length);u.u();){t=u.d
t.toString
s=$.il
if(s==null)s=$.il=new V.B(0,0,1)
t.a=s
r=$.ik
t.d=r==null?$.ik=new V.B(0,1,0):r
r=$.ij
t.e=r==null?$.ij=new V.B(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bm(s)
r=s.a
p=s.b
o=s.c
t.a=s.v(0,Math.sqrt(r*r+p*p+o*o))
o=q.bm(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.v(0,Math.sqrt(p*p+r*r+s*s))
s=q.bm(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.v(0,Math.sqrt(r*r+p*p+o*o))}}}},
dC:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cu()
u=b2.fr.h(0,b1.aV)
if(u==null){u=A.m2(b1,b2.a)
b2.cU(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.be
b1=b3.e
if(!(b1 instanceof Z.bM))b1=b3.e=null
if(b1==null||!b1.d.p(0,s)){b1=t.k4
if(b1)b3.d.au()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.bL()
q.a.bL()
q=q.e
if(q!=null)q.az(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.fR()
p=p.e
if(p!=null)p.az(0)}n=b3.d.d_(new Z.dy(b2.a),s)
n.aw($.an()).e=b0.a.Q.c
if(b1)n.aw($.aV()).e=b0.a.cx.c
if(r)n.aw($.aU()).e=b0.a.ch.c
if(t.r2)n.aw($.bj()).e=b0.a.cy.c
if(q)n.aw($.bk()).e=b0.a.db.c
if(t.ry)n.aw($.aT()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.c6])
b0.a.a5(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga2(r)
b1=b1.dy
b1.toString
b1.aj(r.a6(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga2(r)
q=b2.dx
q=b2.cx=r.q(0,q.ga2(q))
r=q}b1=b1.fr
b1.toString
b1.aj(r.a6(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.ghv()
q=b2.dx
q=b2.ch=r.q(0,q.ga2(q))
r=q}b1=b1.fy
b1.toString
b1.aj(r.a6(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga2(r)
b1=b1.fx
b1.toString
b1.aj(r.a6(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.aj(C.j.a6(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.aj(C.j.a6(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.aj(C.j.a6(r,!0))}if(t.bd>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.be(r.a6(0,!0)))
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
b1=b1.be
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.da
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.d9
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.r
i=new H.G([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.t)(r),++h){g=r[h]
f=g.gan()
e=i.h(0,f)
if(e==null)e=0
i.k(0,f,e+1)
d=J.bJ(b0.a.bS.h(0,f),e)
p=g.ghM()
o=$.ay
p=p.b5(o==null?$.ay=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghR()
o=$.ay
p=p.b5(o==null?$.ay=new V.R(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaH(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gd8()){p=g.gcV()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gcW()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gcX()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.t)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.bR.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga2(r)
r=P.r
b=new H.G([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.t)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.k(0,0,e+1)
d=J.bJ(b0.a.bU.h(0,0),e)
p=c.bm(g.a)
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
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.t)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.bT.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga2(r)
r=P.r
a1=new H.G([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.t)(r),++h){g=r[h]
f=g.gan()
e=a1.h(0,f)
if(e==null)e=0
a1.k(0,f,e+1)
d=J.bJ(b0.a.bW.h(0,f),e)
a2=c.q(0,g.ga2(g))
p=g.ga2(g)
o=$.ay
p=p.b5(o==null?$.ay=new V.R(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.ay
p=a2.b5(p==null?$.ay=new V.R(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaH(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gah()
p=a2.ds(0)
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
j=new Float32Array(H.be(new V.cX(o,a,a0,a3,a4,a5,a6,a7,p).a6(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gah()
p=g.gah()
if(!C.b.a1(m,p)){p.saW(0,m.length)
m.push(p)}p=g.gah()
o=p.gaX(p)
if(o){o=d.f
o.toString
a=p.gaX(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gaW(p)
o.a.uniform1i(o.d,p)}}g.gaN()
p=g.gdM()
o=d.x
o.toString
a=p.gfZ(p)
a0=p.gh_(p)
a3=p.gh0()
p=p.gfY()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaN()
if(!C.b.a1(m,p)){p.saW(0,m.length)
m.push(p)}p=g.gaN()
o=p.gaX(p)
if(o){o=d.r
o.toString
a=p.gaX(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.gaW(p)
o.a.uniform1i(o.d,p)}}if(g.gd8()){p=g.gcV()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gcW()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gcX()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.t)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.bV.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga2(r)
r=P.r
a9=new H.G([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.t)(r),++h){g=r[h]
f=g.gan()
e=a9.h(0,f)
if(e==null)e=0
a9.k(0,f,e+1)
d=J.bJ(b0.a.bY.h(0,f),e)
p=g.ghu(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.ghP(g).i7()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.b5(g.ghu(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaH(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gah()
p=g.gce()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcd(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gi9()
o=d.x
o.a.uniform1f(o.d,p)
p=g.gia()
o=d.y
o.a.uniform1f(o.d,p)
g.gah()
p=g.gah()
if(!C.b.a1(m,p)){p.saW(0,m.length)
m.push(p)}p=g.gah()
o=p.gaX(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaN()
p=g.gdM()
o=d.z
o.toString
a=p.gfZ(p)
a0=p.gh_(p)
a3=p.gh0()
p=p.gfY()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaN()
if(!C.b.a1(m,p)){p.saW(0,m.length)
m.push(p)}p=g.gaN()
o=p.gaX(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.ghQ()){p=g.ghO()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.ghN()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gd8()){p=g.gcV()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gcW()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gcX()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.t)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.bX.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga2(r).ds(0)}b1=b1.id
b1.toString
b1.aj(r.a6(0,!0))}if(t.db){b0.e5(m,b0.ch)
b1=b0.a
r=b0.ch
b1.fv(b1.dc,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.dd
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.de
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.df
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.dg
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a5(b2)
b1=b3.e
b1.a5(b2)
b1.ab(b2)
b1.aL(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(k=0;k<m.length;++k)m[k].aL(b2)
b1=b0.a
b1.toString
b2.a.useProgram(null)
b1.x.d4()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cu().aV}}
O.fL.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cx(a,C.c.a0(b+3,4)*4))}}
O.fM.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fN.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.cE(a,C.c.a0(b+3,4)*4))}}
O.fO.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fP.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.d4(a,C.c.a0(b+3,4)*4))}}
O.fQ.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fR.prototype={
$2:function(a,b){if(typeof b!=="number")return b.D()
return this.b.push(new A.dd(a,C.c.a0(b+3,4)*4))}}
O.fS.prototype={
$2:function(a,b){return J.cu(a.a,b.a)}}
O.fF.prototype={
as:function(){var u,t=this
t.ck()
u=t.f
if(!(Math.abs(u-1)<$.z().a)){t.f=1
u=new D.w(t.b,u,1)
u.b=!0
t.a.O(u)}}}
O.cW.prototype={
as:function(){},
cK:function(a){var u,t,s=this
if(!s.c.p(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.as()
u=s.a
u.a=null
u.O(null)}}}
O.fG.prototype={}
O.at.prototype={
cJ:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.O(t)}},
as:function(){this.ck()
this.cJ(new V.V(1,1,1))},
saH:function(a,b){this.cK(new A.Z(!0,!1,!1))
this.cJ(b)}}
O.fI.prototype={}
O.fJ.prototype={
as:function(){var u,t=this
t.cl()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.O(u)}}}
O.fK.prototype={
cL:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.w(u.b+".shininess",t,a)
t.b=!0
u.a.O(t)}},
as:function(){this.cl()
this.cL(100)}}
O.dh.prototype={}
O.di.prototype={
gm:function(){var u=this.e
return u==null?this.e=D.D():u},
O:function(a){var u=this.e
if(u!=null)u.C(a)},
aq:function(){return this.O(null)},
eL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gap(),s=[{func:1,ret:-1,args:[D.U]}],r=0;r<b.length;b.length===u||(0,H.t)(b),++r){q=b[r]
if(q!=null){p=q.f
if(p==null){p=new D.aZ()
p.d=0
q.f=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.aq()},
eN:function(a,b){var u,t
for(u=b.gP(b),t=this.gap();u.u();)u.gB(u).gm().N(0,t)
this.aq()},
saT:function(a){var u=this.f
if(u!==a){this.f=a
u=new D.w("blend",u,a)
u.b=!0
this.O(u)}},
ei:function(a){a=C.c.a0(a+3,4)*4
if(a<=0)return 4
return a},
dC:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.ei(j.c.a.length)
if(i!==j.d||j.f!=j.r){j.d=i
j.r=j.f
j.b=null}u=j.b
if(u==null){u=j.f
t="TextureLayout_"+i+"_"+C.c.i(u.a)
s=a.fr.h(0,t)
if(s==null){s=A.mq(i,u,a.a)
a.cU(s)}j.b=s
u=s}if(b.e==null){u=b.d.d_(new Z.dy(a.a),$.an())
t=u.aw($.an())
r=j.b
t.e=r.z.c
b.e=u
u=r}u.a5(a)
q=H.b([],[T.c6])
for(p=0,o=0;u=j.c.a,o<u.length;++o){n=u[o]
if(n!=null&&n.a!=null){u=n.a
if(u!=null)if(!C.b.a1(q,u)){u.a=q.length
q.push(u)}u=j.b
t=n.a
u=u.cx
if(p>=u.length)return H.d(u,p)
u=u[p]
r=t==null||!t.d
m=u.a
u=u.d
if(r)m.uniform1i(u,0)
else m.uniform1i(u,t.a)
u=j.b
t=n.b
u=u.cy
if(p>=u.length)return H.d(u,p)
u=u[p]
if(t==null){t=$.fT
if(t==null){t=new V.au(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)
$.fT=t}}l=new Float32Array(H.be(t.a6(0,!0)))
u.a.uniformMatrix4fv(u.d,!1,l)
u=j.b
k=n.c
u.toString
if(k==null){t=$.c4
if(t==null){t=V.d8(0,0,1,1)
$.c4=t
k=t}else k=t}t=u.db
if(p>=t.length)return H.d(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.dx
if(p>=u.length)return H.d(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
k=n.d
u.toString
if(k==null){t=$.c4
if(t==null){t=V.d8(0,0,1,1)
$.c4=t
k=t}else k=t}t=u.dy
if(p>=t.length)return H.d(t,p)
t=t[p]
t.a.uniform2f(t.d,k.a,k.b)
u=u.fr
if(p>=u.length)return H.d(u,p)
u=u[p]
u.a.uniform2f(u.d,k.c,k.d)
u=j.b
t=n.e
u=u.fx
if(p>=u.length)return H.d(u,p)
u=u[p]
t=t?1:0
u.a.uniform1i(u.d,t);++p}}u=j.b.Q
u.a.uniform1i(u.d,p)
u=j.b
t=j.a
u.ch.dL(t)
for(u=a.a,o=0;o<q.length;++o){t=q[o]
if(!t.c&&t.d){t.c=!0
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}}t=b.e
if(t instanceof Z.bM){t.a5(a)
t.ab(a)
t.aL(a)}else b.e=null
t=j.b
t.toString
u.useProgram(null)
t.x.d4()
for(o=0;o<q.length;++o){t=q[o]
if(t.c){t.c=!1
u.activeTexture(33984+t.a)
u.bindTexture(3553,null)}}}}
O.b9.prototype={
O:function(a){var u=this.f
if(u!=null)u.C(a)},
aq:function(){return this.O(null)},
sah:function(a){var u,t=this,s=t.a
if(s!=a){if(s!=null)s.gm().N(0,t.gap())
u=t.a
t.a=a
if(a!=null)a.gm().l(0,t.gap())
s=new D.w("texture",u,t.a)
s.b=!0
t.O(s)}},
sd2:function(a){var u,t,s=this
if(a==null)a=V.b5()
if(!J.C(s.b,a)){u=s.b
s.b=a
t=new D.w("colorMatrix",u,a)
t.b=!0
s.O(t)}}}
T.c6.prototype={}
T.hM.prototype={}
T.hN.prototype={
gm:function(){var u=this.y
return u==null?this.y=D.D():u}}
X.eE.prototype={
gm:function(){var u=this.fr
return u==null?this.fr=D.D():u},
a_:function(a){var u=this.fr
if(u!=null)u.C(a)},
sai:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.w("width",u,b)
u.b=!0
t.a_(u)}},
sae:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.w("height",u,b)
u.b=!0
t.a_(u)}},
a5:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=3553,f=36161,e=36160
if(i.f){u=a.a
t=u.drawingBufferWidth
s=i.r
if(typeof t!=="number")return t.q()
i.sai(0,C.c.Y(t*s))
u=u.drawingBufferHeight
s=i.x
if(typeof u!=="number")return u.q()
i.sae(0,C.c.Y(u*s))}if(i.y==null){u=a.a
t=i.ch
s=i.a
r=i.b
q=u.getParameter(3379)
p=V.ka(s)
o=V.ka(r)
q=V.ka(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(g,n)
u.texParameteri(g,10242,33071)
u.texParameteri(g,10243,33071)
u.texParameteri(g,10241,9729)
u.texParameteri(g,10240,9729)
C.U.hD(u,g,0,6408,p,o,0,6408,5121,h)
u.bindTexture(g,h)
m=T.kE(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.d7()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.d7()
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
a.c=C.d.Y(s*i.a)
r=t.d
a.d=C.d.Y(r*i.b)
l=t.a
k=i.c
j=C.d.Y(l*k)
t=t.b
l=i.d
u.viewport(j,C.d.Y(t*l),C.d.Y(s*k),C.d.Y(r*l))
u.clearDepth(i.db)
t=i.cx
u.clearColor(t.a,t.b,t.c,t.d)
u.clear(16640)},
aL:function(a){a.a.bindFramebuffer(36160,null)}}
X.jI.prototype={}
X.fg.prototype={
gm:function(){var u=this.x
return u==null?this.x=D.D():u},
a5:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.d.Y(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.d.Y(r*t)
r=C.d.Y(s.c*u)
a.c=r
s=C.d.Y(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
aL:function(a){}}
X.fi.prototype={
gm:function(){var u=this.b
return u==null?this.b=D.D():u}}
X.d2.prototype={
gm:function(){var u=this.f
return u==null?this.f=D.D():u},
a_:function(a){var u=this.f
if(u!=null)u.C(a)},
e2:function(){return this.a_(null)}}
X.hI.prototype={}
V.jA.prototype={
$1:function(a){var u=C.d.dF(this.a.gh9(),2)
if(u!=="0.00")P.kb(u+" fps")}}
V.hf.prototype={
cS:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.kL().gc9().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.cQ(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.kg(m.c).l(0,q)
o=W.lR("radio")
o.checked=s
o.name=u
W.X(o,"change",new V.hg(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.kg(m.c).l(0,r.createElement("br"))},
bJ:function(a,b,c){return this.cS(a,b,c,!1)},
cQ:function(a){var u,t,s=P.kL(),r=P.n,q=P.lY(s.gc9(),r,r)
q.k(0,this.a,a)
u=s.dD(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.iZ([],[]).bn(""),"",t)}}
V.hg.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cQ(u.d)}}}
V.hu.prototype={
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
W.X(q,"scroll",new V.hw(o),!1)},
cT:function(a){var u,t,s,r,q,p,o,n
this.fC()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hc(a),s.toString,r=new H.M(r),r=new P.ck(s.dG(new H.bV(r,r.gj(r))).a());r.u();){s=r.gB(r)
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
if(H.nU(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.ja(C.R,s,C.e,!1)
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
fL:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
fC:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hR()
t=P.n
u.a=new H.G([t,L.df])
u.b=new H.G([t,L.dm])
u.c=P.ks(t)
u.d=u.L(0,q)
t=u.L(0,q).n(0,p)
s=K.Y(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.L(0,p).n(0,p)
s=new K.aK()
r=[K.cU]
s.a=H.b([],r)
t.a.push(s)
t=K.Y(new H.M("*"))
s.a.push(t)
t=u.L(0,p).n(0,"BoldEnd")
s=K.Y(new H.M("*"))
t.a.push(s)
t.c=!0
t=u.L(0,q).n(0,o)
s=K.Y(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.L(0,o).n(0,o)
s=new K.aK()
s.a=H.b([],r)
t.a.push(s)
t=K.Y(new H.M("_"))
s.a.push(t)
t=u.L(0,o).n(0,n)
s=K.Y(new H.M("_"))
t.a.push(s)
t.c=!0
t=u.L(0,q).n(0,m)
s=K.Y(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.L(0,m).n(0,m)
s=new K.aK()
s.a=H.b([],r)
t.a.push(s)
t=K.Y(new H.M("`"))
s.a.push(t)
t=u.L(0,m).n(0,"CodeEnd")
s=K.Y(new H.M("`"))
t.a.push(s)
t.c=!0
t=u.L(0,q).n(0,l)
s=K.Y(new H.M("["))
t.a.push(s)
t.c=!0
t=u.L(0,l).n(0,k)
s=K.Y(new H.M("|"))
t.a.push(s)
s=u.L(0,l).n(0,j)
t=K.Y(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.L(0,l).n(0,l)
t=new K.aK()
t.a=H.b([],r)
s.a.push(t)
s=K.Y(new H.M("|]"))
t.a.push(s)
s=u.L(0,k).n(0,j)
t=K.Y(new H.M("]"))
s.a.push(t)
s.c=!0
s=u.L(0,k).n(0,k)
t=new K.aK()
t.a=H.b([],r)
s.a.push(t)
s=K.Y(new H.M("|]"))
t.a.push(s)
u.L(0,q).n(0,i).a.push(new K.ev())
s=u.L(0,i).n(0,i)
t=new K.aK()
t.a=H.b([],r)
s.a.push(t)
s=K.Y(new H.M("*_`["))
t.a.push(s)
s=u.L(0,"BoldEnd")
s.d=s.a.b4(p)
s=u.L(0,n)
s.d=s.a.b4(o)
s=u.L(0,"CodeEnd")
s.d=s.a.b4(m)
s=u.L(0,j)
s.d=s.a.b4("Link")
s=u.L(0,i)
s.d=s.a.b4(i)
this.b=u}}
V.hw.prototype={
$1:function(a){P.kH(C.p,new V.hv(this.a))}}
V.hv.prototype={
$0:function(){var u=C.d.Y(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
S.jv.prototype={
$0:function(){this.a.saT(C.u)}}
S.jw.prototype={
$0:function(){this.a.saT(C.i)}}
S.jx.prototype={
$0:function(){this.a.saT(C.v)}}
S.jy.prototype={
$0:function(){this.a.saT(C.o)}};(function aliases(){var u=J.a.prototype
u.dQ=u.i
u=J.cP.prototype
u.dR=u.i
u=K.cL.prototype
u.dP=u.aJ
u.cj=u.i
u=O.cW.prototype
u.ck=u.as
u=O.at.prototype
u.cl=u.as})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"n2","lU",21)
t(P,"nx","mD",7)
t(P,"ny","mE",7)
t(P,"nz","mF",7)
s(P,"l6","nv",9)
var m
r(m=E.aH.prototype,"gdz",0,0,null,["$1","$0"],["dA","hm"],0,0)
r(m,"gdv",0,0,null,["$1","$0"],["dw","hj"],0,0)
q(m,"ghh","hi",4)
q(m,"ghk","hl",4)
r(m=E.dj.prototype,"gco",0,0,null,["$1","$0"],["cq","cp"],0,0)
p(m,"ghz","dE",9)
o(m=X.dt.prototype,"geO","eP",5)
o(m,"gey","ez",5)
o(m,"geE","eF",2)
o(m,"geS","eT",10)
o(m,"geQ","eR",10)
o(m,"geW","eX",2)
o(m,"gf_","f0",2)
o(m,"geI","eJ",2)
o(m,"geY","eZ",2)
o(m,"geG","eH",2)
o(m,"gf1","f2",19)
o(m,"gf3","f4",5)
o(m,"gfj","fk",6)
o(m,"gff","fg",6)
o(m,"gfh","fi",6)
r(D.bq.prototype,"gdY",0,0,null,["$1","$0"],["ao","dZ"],0,0)
r(m=D.cR.prototype,"gcF",0,0,null,["$1","$0"],["cG","eU"],0,0)
o(m,"gf5","f6",20)
q(m,"ger","es",11)
q(m,"gf9","fa",11)
n(V.H.prototype,"gj","c1",12)
n(V.B.prototype,"gj","c1",12)
r(m=U.bQ.prototype,"gaD",0,0,null,["$1","$0"],["M","a4"],0,0)
q(m,"gep","eq",13)
q(m,"gf7","f8",13)
r(m=U.du.prototype,"gaD",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
r(m=U.dv.prototype,"gaD",0,0,null,["$1","$0"],["M","a4"],0,0)
o(m,"gbx","by",1)
o(m,"gbz","bA",1)
o(m,"gbB","bC",1)
o(m,"gej","ek",1)
o(m,"gel","em",1)
o(m,"gfJ","fK",1)
o(m,"gfH","fI",1)
o(m,"gfF","fG",1)
o(U.dw.prototype,"gen","eo",1)
r(m=M.cA.prototype,"gX",0,0,null,["$1","$0"],["W","aP"],0,0)
q(m,"gfb","fc",14)
q(m,"gfd","fe",14)
r(M.cC.prototype,"gX",0,0,null,["$1","$0"],["W","aP"],0,0)
r(m=M.cH.prototype,"gX",0,0,null,["$1","$0"],["W","aP"],0,0)
q(m,"geA","eB",4)
q(m,"geC","eD",4)
r(m=O.cV.prototype,"gap",0,0,null,["$1","$0"],["O","aq"],0,0)
r(m,"gft",0,0,null,["$1","$0"],["cH","fu"],0,0)
q(m,"geu","ev",15)
q(m,"gew","ex",15)
r(m=O.di.prototype,"gap",0,0,null,["$1","$0"],["O","aq"],0,0)
q(m,"geK","eL",16)
q(m,"geM","eN",16)
r(O.b9.prototype,"gap",0,0,null,["$1","$0"],["O","aq"],0,0)
r(X.d2.prototype,"ge1",0,0,null,["$1","$0"],["a_","e2"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a_,null)
s(P.a_,[H.jQ,J.a,J.a2,P.dP,P.h,H.bV,P.fl,H.cJ,H.i7,H.eR,H.hW,P.br,H.bN,H.e5,P.a5,H.ft,H.fv,H.fn,P.eb,P.bA,P.ck,P.dz,P.dg,P.hG,P.dk,P.jd,P.iV,P.iQ,P.dO,P.v,P.j5,P.fC,P.eM,P.jc,P.jb,P.bg,P.a9,P.a8,P.aY,P.h9,P.de,P.dH,P.ff,P.q,P.O,P.b7,P.n,P.P,P.bB,P.i9,P.iW,W.eV,W.K,W.cK,P.iY,P.iR,P.bw,K.ev,K.cL,K.cU,K.hp,L.df,L.dl,L.dm,L.hR,O.aG,O.bX,E.eI,E.aH,E.hh,E.dj,Z.dx,Z.dy,Z.bM,Z.bT,Z.bc,D.eL,D.aZ,D.U,X.cz,X.cQ,X.fq,X.fz,X.ad,X.h_,X.hS,X.dt,D.eF,D.bq,D.a4,D.hc,D.hA,V.V,V.a3,V.f6,V.cX,V.au,V.a0,V.R,V.b8,V.d7,V.H,V.B,U.du,U.dv,U.dw,M.cC,M.cH,M.ai,A.cw,A.ez,A.Z,A.cx,A.cE,A.d4,A.dd,A.fH,A.c7,A.c8,A.ca,A.cb,A.bo,A.dq,A.i2,F.b_,F.f9,F.cS,F.fs,F.d3,F.hq,F.hr,F.hs,F.ht,F.bb,F.io,F.ip,F.is,F.iu,F.iv,F.iw,O.dh,O.cW,O.fI,O.b9,X.hI,X.jI,X.fi,X.d2,V.hf,V.hu])
s(J.a,[J.fm,J.cO,J.cP,J.b2,J.bU,J.b3,H.c_,H.b6,W.f,W.eu,W.bm,W.ar,W.F,W.dB,W.ac,W.eZ,W.f_,W.dD,W.cG,W.dF,W.f1,W.i,W.dI,W.as,W.fh,W.dK,W.bS,W.fy,W.fU,W.dQ,W.dR,W.av,W.dS,W.dV,W.ax,W.dZ,W.e0,W.aA,W.e1,W.aB,W.e6,W.aj,W.e9,W.hQ,W.aD,W.ec,W.hU,W.ie,W.eh,W.ej,W.el,W.en,W.ep,P.aI,P.dM,P.aL,P.dX,P.he,P.e7,P.aO,P.ee,P.eA,P.dA,P.da,P.e3])
s(J.cP,[J.ha,J.bz,J.b4])
t(J.jP,J.b2)
s(J.bU,[J.cN,J.cM])
t(P.fx,P.dP)
s(P.fx,[H.dr,W.iH,W.iG,P.fb])
t(H.M,H.dr)
s(P.h,[H.o,H.bW,H.iA,P.fk])
t(H.f4,H.bW)
s(P.fl,[H.fD,H.iB])
t(H.eS,H.eR)
s(P.br,[H.h6,H.fp,H.i6,H.eK,H.hn,P.d1,P.ap,P.i8,P.i4,P.hC,P.eQ,P.eY])
s(H.bN,[H.jD,H.hJ,H.fo,H.jr,H.js,H.jt,P.iD,P.iC,P.iE,P.iF,P.j4,P.j3,P.jk,P.iT,P.iU,P.fw,P.fB,P.f2,P.f3,P.id,P.ia,P.ib,P.ic,P.j6,P.j7,P.j9,P.j8,P.jf,P.je,P.jg,P.jh,W.fW,W.fY,W.hm,W.hF,W.iL,P.j_,P.j0,P.jl,P.fc,P.fd,P.eC,E.hi,E.hj,E.hk,E.hP,D.f7,D.f8,F.jC,F.jm,F.iy,F.ix,F.iq,F.ir,O.fL,O.fM,O.fN,O.fO,O.fP,O.fQ,O.fR,O.fS,V.jA,V.hg,V.hw,V.hv,S.jv,S.jw,S.jx,S.jy])
s(H.hJ,[H.hD,H.bK])
t(P.fA,P.a5)
t(H.G,P.fA)
t(H.fu,H.o)
t(H.cY,H.b6)
s(H.cY,[H.ce,H.cg])
t(H.cf,H.ce)
t(H.c0,H.cf)
t(H.ch,H.cg)
t(H.cZ,H.ch)
s(H.cZ,[H.h0,H.h1,H.h2,H.h3,H.h4,H.d_,H.c1])
t(P.j2,P.fk)
t(P.iS,P.jd)
t(P.iP,P.iV)
t(P.eg,P.fC)
t(P.ds,P.eg)
s(P.eM,[P.eG,P.f5])
t(P.eT,P.hG)
s(P.eT,[P.eH,P.ii,P.ih])
t(P.ig,P.f5)
s(P.a8,[P.J,P.r])
s(P.ap,[P.bu,P.fj])
t(P.iJ,P.bB)
s(W.f,[W.A,W.fa,W.bY,W.az,W.ci,W.aC,W.ak,W.cl,W.iz,W.cd,P.eD,P.bl])
s(W.A,[W.T,W.aX])
s(W.T,[W.l,P.j])
s(W.l,[W.ew,W.ex,W.bn,W.fe,W.ho])
t(W.eU,W.ar)
t(W.bO,W.dB)
s(W.ac,[W.eW,W.eX])
t(W.dE,W.dD)
t(W.cF,W.dE)
t(W.dG,W.dF)
t(W.f0,W.dG)
t(W.ag,W.bm)
t(W.dJ,W.dI)
t(W.bP,W.dJ)
t(W.dL,W.dK)
t(W.bR,W.dL)
t(W.ba,W.i)
s(W.ba,[W.bs,W.aw,W.bv])
t(W.fV,W.dQ)
t(W.fX,W.dR)
t(W.dT,W.dS)
t(W.fZ,W.dT)
t(W.dW,W.dV)
t(W.d0,W.dW)
t(W.e_,W.dZ)
t(W.hb,W.e_)
t(W.hl,W.e0)
t(W.cj,W.ci)
t(W.hy,W.cj)
t(W.e2,W.e1)
t(W.hz,W.e2)
t(W.hE,W.e6)
t(W.ea,W.e9)
t(W.hK,W.ea)
t(W.cm,W.cl)
t(W.hL,W.cm)
t(W.ed,W.ec)
t(W.hT,W.ed)
t(W.bd,W.aw)
t(W.ei,W.eh)
t(W.iI,W.ei)
t(W.dC,W.cG)
t(W.ek,W.ej)
t(W.iM,W.ek)
t(W.em,W.el)
t(W.dU,W.em)
t(W.eo,W.en)
t(W.iX,W.eo)
t(W.eq,W.ep)
t(W.j1,W.eq)
t(W.iK,P.dg)
t(P.iZ,P.iY)
t(P.a6,P.iR)
t(P.dN,P.dM)
t(P.fr,P.dN)
t(P.dY,P.dX)
t(P.h7,P.dY)
t(P.e8,P.e7)
t(P.hH,P.e8)
t(P.ef,P.ee)
t(P.hV,P.ef)
t(P.eB,P.dA)
t(P.h8,P.bl)
t(P.e4,P.e3)
t(P.hB,P.e4)
s(K.cL,[K.aK,L.dp])
s(E.eI,[Z.cy,A.db,T.c6])
s(D.U,[D.b0,D.b1,D.w,X.hd])
s(X.hd,[X.cT,X.aJ,X.bZ,X.dn])
s(O.aG,[D.cR,U.bQ,M.cA])
s(D.eL,[U.eP,U.aa])
t(U.cB,U.aa)
s(A.db,[A.fE,A.hO])
s(A.dq,[A.al,A.i_,A.i0,A.i1,A.hZ,A.Q,A.aP,A.E,A.bx,A.i3,A.c9,A.a1,A.aQ,A.by])
t(F.hx,F.f9)
t(F.hY,F.fs)
t(F.it,F.iu)
t(F.h5,F.iv)
s(O.dh,[O.cV,O.di])
s(O.cW,[O.fF,O.fG,O.at])
s(O.at,[O.fJ,O.fK])
t(T.hM,T.c6)
t(T.hN,T.hM)
s(X.hI,[X.eE,X.fg])
u(H.dr,H.i7)
u(H.ce,P.v)
u(H.cf,H.cJ)
u(H.cg,P.v)
u(H.ch,H.cJ)
u(P.dP,P.v)
u(P.eg,P.j5)
u(W.dB,W.eV)
u(W.dD,P.v)
u(W.dE,W.K)
u(W.dF,P.v)
u(W.dG,W.K)
u(W.dI,P.v)
u(W.dJ,W.K)
u(W.dK,P.v)
u(W.dL,W.K)
u(W.dQ,P.a5)
u(W.dR,P.a5)
u(W.dS,P.v)
u(W.dT,W.K)
u(W.dV,P.v)
u(W.dW,W.K)
u(W.dZ,P.v)
u(W.e_,W.K)
u(W.e0,P.a5)
u(W.ci,P.v)
u(W.cj,W.K)
u(W.e1,P.v)
u(W.e2,W.K)
u(W.e6,P.a5)
u(W.e9,P.v)
u(W.ea,W.K)
u(W.cl,P.v)
u(W.cm,W.K)
u(W.ec,P.v)
u(W.ed,W.K)
u(W.eh,P.v)
u(W.ei,W.K)
u(W.ej,P.v)
u(W.ek,W.K)
u(W.el,P.v)
u(W.em,W.K)
u(W.en,P.v)
u(W.eo,W.K)
u(W.ep,P.v)
u(W.eq,W.K)
u(P.dM,P.v)
u(P.dN,W.K)
u(P.dX,P.v)
u(P.dY,W.K)
u(P.e7,P.v)
u(P.e8,W.K)
u(P.ee,P.v)
u(P.ef,W.K)
u(P.dA,P.a5)
u(P.e3,P.v)
u(P.e4,W.K)})()
var v={mangledGlobalNames:{r:"int",J:"double",a8:"num",n:"String",bg:"bool",b7:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.U]},{func:1,ret:-1,args:[D.U]},{func:1,ret:-1,args:[W.aw]},{func:1,ret:P.b7,args:[,,]},{func:1,ret:-1,args:[P.r,[P.h,E.aH]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bv]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bs]},{func:1,ret:-1,args:[P.r,[P.h,D.a4]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.r,[P.h,U.aa]]},{func:1,ret:-1,args:[P.r,[P.h,M.ai]]},{func:1,ret:-1,args:[P.r,[P.h,V.au]]},{func:1,ret:-1,args:[P.r,[P.h,O.b9]]},{func:1,ret:P.b7,args:[,]},{func:1,ret:P.bw,args:[,,]},{func:1,ret:-1,args:[W.bd]},{func:1,ret:P.bg,args:[[P.h,D.a4]]},{func:1,ret:P.r,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.n=W.bn.prototype
C.M=J.a.prototype
C.b=J.b2.prototype
C.N=J.cM.prototype
C.c=J.cN.prototype
C.j=J.cO.prototype
C.d=J.bU.prototype
C.a=J.b3.prototype
C.O=J.b4.prototype
C.z=J.ha.prototype
C.U=P.da.prototype
C.q=J.bz.prototype
C.A=W.bd.prototype
C.B=W.cd.prototype
C.W=new P.eH()
C.C=new P.eG()
C.r=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.D=function() {
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
C.I=function(getTagFallback) {
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
C.E=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.F=function(hooks) {
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
C.H=function(hooks) {
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
C.G=function(hooks) {
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

C.J=new P.h9()
C.e=new P.ig()
C.K=new P.ii()
C.f=new P.iS()
C.o=new A.bo(0,"ColorBlendType.Overwrite")
C.u=new A.bo(1,"ColorBlendType.Additive")
C.v=new A.bo(2,"ColorBlendType.Average")
C.i=new A.bo(3,"ColorBlendType.AlphaBlend")
C.p=new P.aY(0)
C.L=new P.aY(5e6)
C.w=H.b(u([127,2047,65535,1114111]),[P.r])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.r])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.r])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.r])
C.Q=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.r])
C.R=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.r])
C.x=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.r])
C.S=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.r])
C.y=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.r])
C.P=H.b(u([]),[P.n])
C.T=new H.eS(0,{},C.P,[P.n,P.n])
C.V=new P.bA(null,2)})();(function staticFields(){$.aq=0
$.bL=null
$.ki=null
$.la=null
$.l5=null
$.le=null
$.jn=null
$.ju=null
$.k8=null
$.bD=null
$.co=null
$.cp=null
$.k3=!1
$.am=C.f
$.a7=[]
$.fT=null
$.kx=null
$.ay=null
$.c4=null
$.kO=null
$.kR=null
$.kQ=null
$.ij=null
$.ik=null
$.il=null
$.kP=null
$.kw=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"o2","lj",function(){return H.l8("_$dart_dartClosure")})
u($,"o3","kc",function(){return H.l8("_$dart_js")})
u($,"o4","lk",function(){return H.aE(H.hX({
toString:function(){return"$receiver$"}}))})
u($,"o5","ll",function(){return H.aE(H.hX({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"o6","lm",function(){return H.aE(H.hX(null))})
u($,"o7","ln",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oa","lq",function(){return H.aE(H.hX(void 0))})
u($,"ob","lr",function(){return H.aE(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"o9","lp",function(){return H.aE(H.kJ(null))})
u($,"o8","lo",function(){return H.aE(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"od","lt",function(){return H.aE(H.kJ(void 0))})
u($,"oc","ls",function(){return H.aE(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"or","kd",function(){return P.mC()})
u($,"oe","lu",function(){return P.my()})
u($,"os","ly",function(){return H.m4(H.be(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.r])))})
u($,"ou","lz",function(){return P.mi("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ov","lA",function(){return P.n0()})
u($,"ol","lx",function(){return Z.ae(0)})
u($,"of","lv",function(){return Z.ae(511)})
u($,"on","an",function(){return Z.ae(1)})
u($,"om","aV",function(){return Z.ae(2)})
u($,"oh","aU",function(){return Z.ae(4)})
u($,"oo","bj",function(){return Z.ae(8)})
u($,"op","bk",function(){return Z.ae(16)})
u($,"oi","cs",function(){return Z.ae(32)})
u($,"oj","ct",function(){return Z.ae(64)})
u($,"ok","lw",function(){return Z.ae(96)})
u($,"oq","bI",function(){return Z.ae(128)})
u($,"og","aT",function(){return Z.ae(256)})
u($,"o1","li",function(){return new V.f6(1e-9)})
u($,"o0","z",function(){return $.li()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.c_,DataView:H.b6,ArrayBufferView:H.b6,Float32Array:H.c0,Float64Array:H.c0,Int16Array:H.h0,Int32Array:H.h1,Int8Array:H.h2,Uint16Array:H.h3,Uint32Array:H.h4,Uint8ClampedArray:H.d_,CanvasPixelArray:H.d_,Uint8Array:H.c1,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLBodyElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLDivElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTableElement:W.l,HTMLTableRowElement:W.l,HTMLTableSectionElement:W.l,HTMLTemplateElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eu,HTMLAnchorElement:W.ew,HTMLAreaElement:W.ex,Blob:W.bm,HTMLCanvasElement:W.bn,CDATASection:W.aX,CharacterData:W.aX,Comment:W.aX,ProcessingInstruction:W.aX,Text:W.aX,CSSPerspective:W.eU,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bO,MSStyleCSSProperties:W.bO,CSS2Properties:W.bO,CSSImageValue:W.ac,CSSKeywordValue:W.ac,CSSNumericValue:W.ac,CSSPositionValue:W.ac,CSSResourceValue:W.ac,CSSUnitValue:W.ac,CSSURLImageValue:W.ac,CSSStyleValue:W.ac,CSSMatrixComponent:W.ar,CSSRotation:W.ar,CSSScale:W.ar,CSSSkew:W.ar,CSSTranslation:W.ar,CSSTransformComponent:W.ar,CSSTransformValue:W.eW,CSSUnparsedValue:W.eX,DataTransferItemList:W.eZ,DOMException:W.f_,ClientRectList:W.cF,DOMRectList:W.cF,DOMRectReadOnly:W.cG,DOMStringList:W.f0,DOMTokenList:W.f1,Element:W.T,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ag,FileList:W.bP,FileWriter:W.fa,HTMLFormElement:W.fe,Gamepad:W.as,History:W.fh,HTMLCollection:W.bR,HTMLFormControlsCollection:W.bR,HTMLOptionsCollection:W.bR,ImageData:W.bS,KeyboardEvent:W.bs,Location:W.fy,MediaList:W.fU,MessagePort:W.bY,MIDIInputMap:W.fV,MIDIOutputMap:W.fX,MimeType:W.av,MimeTypeArray:W.fZ,PointerEvent:W.aw,MouseEvent:W.aw,DragEvent:W.aw,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.d0,RadioNodeList:W.d0,Plugin:W.ax,PluginArray:W.hb,RTCStatsReport:W.hl,HTMLSelectElement:W.ho,SourceBuffer:W.az,SourceBufferList:W.hy,SpeechGrammar:W.aA,SpeechGrammarList:W.hz,SpeechRecognitionResult:W.aB,Storage:W.hE,CSSStyleSheet:W.aj,StyleSheet:W.aj,TextTrack:W.aC,TextTrackCue:W.ak,VTTCue:W.ak,TextTrackCueList:W.hK,TextTrackList:W.hL,TimeRanges:W.hQ,Touch:W.aD,TouchEvent:W.bv,TouchList:W.hT,TrackDefaultList:W.hU,CompositionEvent:W.ba,FocusEvent:W.ba,TextEvent:W.ba,UIEvent:W.ba,URL:W.ie,VideoTrackList:W.iz,WheelEvent:W.bd,Window:W.cd,DOMWindow:W.cd,CSSRuleList:W.iI,ClientRect:W.dC,DOMRect:W.dC,GamepadList:W.iM,NamedNodeMap:W.dU,MozNamedAttrMap:W.dU,SpeechRecognitionResultList:W.iX,StyleSheetList:W.j1,SVGLength:P.aI,SVGLengthList:P.fr,SVGNumber:P.aL,SVGNumberList:P.h7,SVGPointList:P.he,SVGStringList:P.hH,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.aO,SVGTransformList:P.hV,AudioBuffer:P.eA,AudioParamMap:P.eB,AudioTrackList:P.eD,AudioContext:P.bl,webkitAudioContext:P.bl,BaseAudioContext:P.bl,OfflineAudioContext:P.h8,WebGL2RenderingContext:P.da,SQLResultSetRowList:P.hB})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.cY.$nativeSuperclassTag="ArrayBufferView"
H.ce.$nativeSuperclassTag="ArrayBufferView"
H.cf.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.cZ.$nativeSuperclassTag="ArrayBufferView"
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
if(typeof dartMainRunner==="function")dartMainRunner(S.lc,[])
else S.lc([])})})()
//# sourceMappingURL=test.dart.js.map
