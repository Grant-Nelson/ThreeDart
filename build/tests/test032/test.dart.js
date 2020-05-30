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
a[c]=function(){a[c]=function(){H.pX(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lN"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lN(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lt:function lt(){},
ky:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
o0:function(a,b,c,d){if(!!J.M(a).$ir)return new H.fA(a,b,[c,d])
return new H.cl(a,b,[c,d])},
nQ:function(){return new P.dC("No element")},
op:function(a,b){var u=J.af(a)
if(typeof u!=="number")return u.n()
H.dy(a,0,u-1,b)},
dy:function(a,b,c,d){if(c-b<=32)H.oo(a,b,c,d)
else H.on(a,b,c,d)},
oo:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bw(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a2()
q=q>0}else q=!1
if(!q)break
p=r-1
t.j(a,r,t.h(a,p))
r=p}t.j(a,r,s)}},
on:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a6(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a6(a4+a5,2),f=g-j,e=g+j,d=J.bw(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a2()
if(a2>0){u=a1
a1=a0
a0=u}d.j(a3,i,c)
d.j(a3,g,a)
d.j(a3,h,a1)
d.j(a3,f,d.h(a3,a4))
d.j(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.D()
if(p<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a2()
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
if(typeof l!=="number")return l.D()
if(l<0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a2()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a2()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.D()
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
H.dy(a3,a4,t-2,a6)
H.dy(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.D(a6.$2(d.h(a3,t),b),0);)++t
for(;J.D(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.j(a3,r,d.h(a3,t))
d.j(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.D()
o=s-1
if(p<0){d.j(a3,r,d.h(a3,t))
n=t+1
d.j(a3,t,d.h(a3,s))
d.j(a3,s,q)
t=n}else{d.j(a3,r,d.h(a3,s))
d.j(a3,s,q)}s=o
break}}H.dy(a3,t,s,a6)}else H.dy(a3,t,s,a6)},
U:function U(a){this.a=a},
r:function r(){},
ck:function ck(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cl:function cl(a,b,c){this.a=a
this.b=b
this.$ti=c},
fA:function fA(a,b,c){this.a=a
this.b=b
this.$ti=c},
hy:function hy(a,b){this.a=null
this.b=a
this.c=b},
jl:function jl(a,b,c){this.a=a
this.b=b
this.$ti=c},
jm:function jm(a,b){this.a=a
this.b=b},
d6:function d6(){},
j1:function j1(){},
dN:function dN(){},
nI:function(){throw H.c(P.x("Cannot modify unmodifiable Map"))},
cQ:function(a){var u,t=H.pY(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pI:function(a){return v.types[a]},
n3:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.M(a).$iy},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.ap(a)
if(typeof u!=="string")throw H.c(H.ai(a))
return u},
cu:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
og:function(a,b){var u,t,s,r,q,p
if(typeof a!=="string")H.j(H.ai(a))
u=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(u==null)return
if(3>=u.length)return H.b(u,3)
t=u[3]
if(b==null){if(t!=null)return parseInt(a,10)
if(u[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",null))
if(b===10&&t!=null)return parseInt(a,10)
if(b<10||t==null){s=b<=10?47+b:86+b
r=u[1]
for(q=r.length,p=0;p<q;++p)if((C.a.F(r,p)|32)>s)return}return parseInt(a,b)},
of:function(a){var u,t
if(typeof a!=="string")H.j(H.ai(a))
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return
u=parseFloat(a)
if(isNaN(u)){t=J.lh(a)
if(t==="NaN"||t==="+NaN"||t==="-NaN")return u
return}return u},
cv:function(a){return H.o6(a)+H.mN(H.c6(a),0,null)},
o6:function(a){var u,t,s,r,q,p,o,n=J.M(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.J||!!n.$ibT){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cQ(t.length>1&&C.a.F(t,0)===36?C.a.ab(t,1):t)},
o7:function(){if(!!self.location)return self.location.href
return},
mf:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
oh:function(a){var u,t,s,r=H.d([],[P.u])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aN(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ai(s))}return H.mf(r)},
mg:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<0)throw H.c(H.ai(s))
if(s>65535)return H.oh(a)}return H.mf(a)},
oi:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ju()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dt:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aN(u,10))>>>0,56320|u&1023)}}throw H.c(P.a8(a,0,1114111,null,null))},
bN:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
oe:function(a){var u=H.bN(a).getFullYear()+0
return u},
oc:function(a){var u=H.bN(a).getMonth()+1
return u},
o8:function(a){var u=H.bN(a).getDate()+0
return u},
o9:function(a){var u=H.bN(a).getHours()+0
return u},
ob:function(a){var u=H.bN(a).getMinutes()+0
return u},
od:function(a){var u=H.bN(a).getSeconds()+0
return u},
oa:function(a){var u=H.bN(a).getMilliseconds()+0
return u},
e:function(a){throw H.c(H.ai(a))},
b:function(a,b){if(a==null)J.af(a)
throw H.c(H.bv(a,b))},
bv:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.az(!0,b,s,null)
u=J.af(a)
if(!(b<0)){if(typeof u!=="number")return H.e(u)
t=b>=u}else t=!0
if(t)return P.O(b,a,s,null,u)
return P.du(b,s)},
pB:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bO(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bO(a,c,!0,b,"end",u)
return new P.az(!0,b,"end",null)},
ai:function(a){return new P.az(!0,a,null,null)},
c2:function(a){if(typeof a!=="number")throw H.c(H.ai(a))
return a},
c:function(a){var u
if(a==null)a=new P.ct()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n9})
u.name=""}else u.toString=H.n9
return u},
n9:function(){return J.ap(this.dartException)},
j:function(a){throw H.c(a)},
q:function(a){throw H.c(P.bG(a))},
aV:function(a){var u,t,s,r,q,p
a=H.n7(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.l])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iQ(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iR:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mt:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
mc:function(a,b){return new H.i_(a,b==null?null:b.method)},
lu:function(a,b){var u=b==null,t=u?null:b.method
return new H.hl(a,t,u?null:b.receiver)},
a6:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.ld(a)
if(a==null)return
if(a instanceof H.cd)return f.$1(a.a)
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aN(t,16)&8191)===10)switch(s){case 438:return f.$1(H.lu(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.mc(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.nc()
q=$.nd()
p=$.ne()
o=$.nf()
n=$.ni()
m=$.nj()
l=$.nh()
$.ng()
k=$.nl()
j=$.nk()
i=r.am(u)
if(i!=null)return f.$1(H.lu(u,i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.lu(u,i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.mc(u,i))}}return f.$1(new H.j0(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dA()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.az(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dA()
return a},
bx:function(a){var u
if(a instanceof H.cd)return a.b
if(a==null)return new H.ev(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ev(a)},
pF:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.j(0,a[u],a[t])}return b},
pM:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.i("Unsupported number of arguments for wrapped closure"))},
c3:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pM)
a.$identity=u
return u},
nF:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iw().constructor.prototype):Object.create(new H.c9(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aG
if(typeof t!=="number")return t.p()
$.aG=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lZ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nB(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lZ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nB:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pI,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lY:H.li
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
nC:function(a,b,c,d){var u=H.li
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nE(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nC(t,!r,u,b)
if(t===0){r=$.aG
if(typeof r!=="number")return r.p()
$.aG=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ca
return new Function(r+H.f(q==null?$.ca=H.fc("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aG
if(typeof r!=="number")return r.p()
$.aG=r+1
o+=r
r="return function("+o+"){return this."
q=$.ca
return new Function(r+H.f(q==null?$.ca=H.fc("self"):q)+"."+H.f(u)+"("+o+");}")()},
nD:function(a,b,c,d){var u=H.li,t=H.lY
switch(b?-1:a){case 0:throw H.c(H.ol("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nE:function(a,b){var u,t,s,r,q,p,o,n=$.ca
if(n==null)n=$.ca=H.fc("self")
u=$.lX
if(u==null)u=$.lX=H.fc("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nD(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aG
if(typeof u!=="number")return u.p()
$.aG=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aG
if(typeof u!=="number")return u.p()
$.aG=u+1
return new Function(n+u+"}")()},
lN:function(a,b,c,d,e,f,g){return H.nF(a,b,c,d,!!e,!!f,g)},
li:function(a){return a.a},
lY:function(a){return a.c},
fc:function(a){var u,t,s,r=new H.c9("self","target","receiver","name"),q=J.lr(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pR:function(a,b){throw H.c(H.nA(a,H.cQ(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.M(a)[b]
else u=!0
if(u)return a
H.pR(a,b)},
mZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
lO:function(a,b){var u
if(typeof a=="function")return!0
u=H.mZ(J.M(a))
if(u==null)return!1
return H.mM(u,null,b,null)},
nA:function(a,b){return new H.fd("CastError: "+P.lp(a)+": type '"+H.f(H.pu(a))+"' is not a subtype of type '"+b+"'")},
pu:function(a){var u,t=J.M(a)
if(!!t.$icb){u=H.mZ(t)
if(u!=null)return H.pS(u)
return"Closure"}return H.cv(a)},
pX:function(a){throw H.c(new P.fs(a))},
ol:function(a){return new H.ii(a)},
n_:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
c6:function(a){if(a==null)return
return a.$ti},
qz:function(a,b,c){return H.c7(a["$a"+H.f(c)],H.c6(b))},
pH:function(a,b,c,d){var u=H.c7(a["$a"+H.f(c)],H.c6(b))
return u==null?null:u[d]},
n1:function(a,b,c){var u=H.c7(a["$a"+H.f(b)],H.c6(a))
return u==null?null:u[c]},
aY:function(a,b){var u=H.c6(a)
return u==null?null:u[b]},
pS:function(a){return H.bt(a,null)},
bt:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cQ(a[0].name)+H.mN(a,1,b)
if(typeof a=="function")return H.cQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.p0(a,b)
if('futureOr' in a)return"FutureOr<"+H.bt("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
p0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.l])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.p(p,a0[m])
l=u[q]
if(l!=null&&l!==P.R)p+=" extends "+H.bt(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bt(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bt(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bt(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pE(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bt(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
mN:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.W("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bt(p,c)}return"<"+u.i(0)+">"},
c7:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
eU:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.c6(a)
t=J.M(a)
if(t[b]==null)return!1
return H.mX(H.c7(t[d],u),null,c,null)},
mX:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.ay(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.ay(a[t],b,c[t],d))return!1
return!0},
qx:function(a,b,c){return a.apply(b,H.c7(J.M(b)["$a"+H.f(c)],H.c6(b)))},
ay:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="R"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="R"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.ay(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.ay(b[a],b,c,d)
if(typeof c==="number")return!1
if(a.name==="Z")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.ay("type" in a?a.type:l,b,s,d)
else if(H.ay(a,b,s,d))return!0
else{if(!('$i'+"ah" in t.prototype))return!1
r=t.prototype["$a"+"ah"]
q=H.c7(r,u?a.slice(1):l)
return H.ay(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mM(a,b,c,d)
if('func' in a)return c.name==="q2"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mX(H.c7(m,u),b,p,d)},
mM:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.ay(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.ay(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.ay(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.ay(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pP(h,b,g,d)},
pP:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.ay(c[s],d,a[s],b))return!1}return!0},
qy:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pN:function(a){var u,t,s,r,q=$.n2.$1(a),p=$.kv[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mW.$2(a,q)
if(q!=null){p=$.kv[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kC[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.lb(u)
$.kv[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kC[q]=u
return u}if(s==="-"){r=H.lb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.n5(a,u)
if(s==="*")throw H.c(P.j_(q))
if(v.leafTags[q]===true){r=H.lb(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.n5(a,u)},
n5:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lQ(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
lb:function(a){return J.lQ(a,!1,null,!!a.$iy)},
pO:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.lb(u)
else return J.lQ(u,c,null,null)},
pK:function(){if(!0===$.lP)return
$.lP=!0
H.pL()},
pL:function(){var u,t,s,r,q,p,o,n
$.kv=Object.create(null)
$.kC=Object.create(null)
H.pJ()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.n6.$1(q)
if(p!=null){o=H.pO(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pJ:function(){var u,t,s,r,q,p,o=C.z()
o=H.c1(C.A,H.c1(C.B,H.c1(C.q,H.c1(C.q,H.c1(C.C,H.c1(C.D,H.c1(C.E(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.n2=new H.kz(r)
$.mW=new H.kA(q)
$.n6=new H.kB(p)},
c1:function(a,b){return a(b)||b},
m4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.P("Illegal RegExp pattern ("+String(p)+")",a,null))},
pV:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pD:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n7:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
n8:function(a,b,c){var u=H.pW(a,b,c)
return u},
pW:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n7(b),'g'),H.pD(c))},
fl:function fl(){},
fm:function fm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iQ:function iQ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
i_:function i_(a,b){this.a=a
this.b=b},
hl:function hl(a,b,c){this.a=a
this.b=b
this.c=c},
j0:function j0(a){this.a=a},
cd:function cd(a,b){this.a=a
this.b=b},
ld:function ld(a){this.a=a},
ev:function ev(a){this.a=a
this.b=null},
cb:function cb(){},
iC:function iC(){},
iw:function iw(){},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fd:function fd(a){this.a=a},
ii:function ii(a){this.a=a},
C:function C(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hk:function hk(a){this.a=a},
hj:function hj(a){this.a=a},
ho:function ho(a,b){this.a=a
this.b=b
this.c=null},
hp:function hp(a,b){this.a=a
this.$ti=b},
hq:function hq(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ee:function ee(a){this.b=a},
jn:function jn(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
bZ:function(a){return a},
o4:function(a){return new Int8Array(a)},
aX:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bv(b,a))},
oZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.pB(a,b,c))
return b},
cq:function cq(){},
bn:function bn(){},
dl:function dl(){},
cr:function cr(){},
dm:function dm(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
hY:function hY(){},
hZ:function hZ(){},
dn:function dn(){},
cs:function cs(){},
cE:function cE(){},
cF:function cF(){},
cG:function cG(){},
cH:function cH(){},
pE:function(a){return J.m2(a?Object.keys(a):[],null)},
pY:function(a){return v.mangledGlobalNames[a]},
pQ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lQ:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kx:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lP==null){H.pK()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.j_("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lS()]
if(r!=null)return r
r=H.pN(a)
if(r!=null)return r
if(typeof a=="function")return C.L
u=Object.getPrototypeOf(a)
if(u==null)return C.v
if(u===Object.prototype)return C.v
if(typeof s=="function"){Object.defineProperty(s,$.lS(),{value:C.o,enumerable:false,writable:true,configurable:true})
return C.o}return C.o},
nR:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.f2(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a8(a,0,4294967295,"length",null))
return J.m2(new Array(a),b)},
m2:function(a,b){return J.lr(H.d(a,[b]))},
lr:function(a){a.fixed$length=Array
return a},
nS:function(a,b){return J.cS(a,b)},
m3:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
nU:function(a,b){var u,t
for(u=a.length;b<u;){t=C.a.F(a,b)
if(t!==32&&t!==13&&!J.m3(t))break;++b}return b},
nV:function(a,b){var u,t
for(;b>0;b=u){u=b-1
t=C.a.T(a,u)
if(t!==32&&t!==13&&!J.m3(t))break}return b},
M:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.db.prototype
return J.da.prototype}if(typeof a=="string")return J.bj.prototype
if(a==null)return J.dc.prototype
if(typeof a=="boolean")return J.hh.prototype
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.R)return a
return J.kx(a)},
bw:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.R)return a
return J.kx(a)},
kw:function(a){if(a==null)return a
if(a.constructor==Array)return J.bi.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.R)return a
return J.kx(a)},
pG:function(a){if(typeof a=="number")return J.cj.prototype
if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bT.prototype
return a},
c5:function(a){if(typeof a=="string")return J.bj.prototype
if(a==null)return a
if(!(a instanceof P.R))return J.bT.prototype
return a},
eV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bk.prototype
return a}if(a instanceof P.R)return a
return J.kx(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.M(a).w(a,b)},
B:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.n3(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bw(a).h(a,b)},
le:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.n3(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.kw(a).j(a,b,c)},
nt:function(a,b){return J.c5(a).F(a,b)},
nu:function(a,b,c){return J.eV(a).hD(a,b,c)},
nv:function(a,b,c,d){return J.eV(a).i7(a,b,c,d)},
nw:function(a,b){return J.c5(a).T(a,b)},
cS:function(a,b){return J.pG(a).aR(a,b)},
lf:function(a,b){return J.kw(a).I(a,b)},
nx:function(a,b,c,d){return J.eV(a).iv(a,b,c,d)},
lg:function(a,b){return J.kw(a).q(a,b)},
eY:function(a){return J.eV(a).gcd(a)},
cT:function(a){return J.M(a).gH(a)},
bb:function(a){return J.kw(a).ga_(a)},
af:function(a){return J.bw(a).gk(a)},
lU:function(a,b){return J.c5(a).ct(a,b)},
ny:function(a,b){return J.eV(a).jd(a,b)},
lV:function(a,b,c){return J.c5(a).u(a,b,c)},
ap:function(a){return J.M(a).i(a)},
lh:function(a){return J.c5(a).ex(a)},
a:function a(){},
hh:function hh(){},
dc:function dc(){},
dd:function dd(){},
i3:function i3(){},
bT:function bT(){},
bk:function bk(){},
bi:function bi(a){this.$ti=a},
ls:function ls(a){this.$ti=a},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cj:function cj(){},
db:function db(){},
da:function da(){},
bj:function bj(){}},P={
oA:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pv()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.c3(new P.jr(s),1)).observe(u,{childList:true})
return new P.jq(s,u,t)}else if(self.setImmediate!=null)return P.pw()
return P.px()},
oB:function(a){self.scheduleImmediate(H.c3(new P.js(a),0))},
oC:function(a){self.setImmediate(H.c3(new P.jt(a),0))},
oD:function(a){P.lB(C.n,a)},
lB:function(a,b){var u=C.c.a6(a.a,1000)
return P.oI(u<0?0:u,b)},
ms:function(a,b){var u=C.c.a6(a.a,1000)
return P.oJ(u<0?0:u,b)},
oI:function(a,b){var u=new P.eC()
u.eT(a,b)
return u},
oJ:function(a,b){var u=new P.eC()
u.eU(a,b)
return u},
a4:function(a){return new P.jo(new P.am($.G,[a]),[a])},
a3:function(a,b){a.$2(0,null)
b.b=!0
return b.a},
aa:function(a,b){P.oY(a,b)},
a2:function(a,b){b.ce(0,a)},
a1:function(a,b){b.bw(H.a6(a),H.bx(a))},
oY:function(a,b){var u,t=null,s=new P.kg(b),r=new P.kh(b),q=J.M(a)
if(!!q.$iam)a.dn(s,r,t)
else if(!!q.$iah)a.cF(s,r,t)
else{u=new P.am($.G,[null])
u.a=4
u.c=a
u.dn(s,t,t)}},
a5:function(a){var u=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(t){e=t
d=c}}}(a,1)
return $.G.ep(new P.kt(u))},
qu:function(a){return new P.bW(a,1)},
oE:function(){return C.S},
oF:function(a){return new P.bW(a,3)},
p3:function(a,b){return new P.k4(a,[b])},
mE:function(a,b){var u,t,s
b.a=1
try{a.cF(new P.jE(b),new P.jF(b),P.Z)}catch(s){u=H.a6(s)
t=H.bx(s)
P.pT(new P.jG(b,u,t))}},
jD:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.bp()
b.a=a.a
b.c=a.c
P.bV(b,t)}else{t=b.c
b.a=2
b.c=a
a.dg(t)}},
bV:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.kq(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.bV(i.a,b)}h=i.a
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
if(n){P.kq(j,j,h.b,q.a,q.b)
return}m=$.G
if(m!==o)$.G=o
else m=j
h=b.c
if((h&15)===8)new P.jL(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.jK(u,b,q).$0()}else if((h&2)!==0)new P.jJ(i,u,b).$0()
if(m!=null)$.G=m
h=u.b
if(!!J.M(h).$iah){if(h.a>=4){l=p.c
p.c=null
b=p.bq(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.jD(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.bq(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
pq:function(a,b){if(H.lO(a,{func:1,args:[P.R,P.aw]}))return b.ep(a)
if(H.lO(a,{func:1,args:[P.R]}))return a
throw H.c(P.f2(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pp:function(){var u,t
for(;u=$.c_,u!=null;){$.cP=null
t=u.b
$.c_=t
if(t==null)$.cO=null
u.a.$0()}},
pt:function(){$.lL=!0
try{P.pp()}finally{$.cP=null
$.lL=!1
if($.c_!=null)$.lT().$1(P.mY())}},
mS:function(a){var u=new P.dW(a)
if($.c_==null){$.c_=$.cO=u
if(!$.lL)$.lT().$1(P.mY())}else $.cO=$.cO.b=u},
ps:function(a){var u,t,s=$.c_
if(s==null){P.mS(a)
$.cP=$.cO
return}u=new P.dW(a)
t=$.cP
if(t==null){u.b=s
$.c_=$.cP=u}else{u.b=t.b
$.cP=t.b=u
if(u.b==null)$.cO=u}},
pT:function(a){var u=null,t=$.G
if(C.e===t){P.c0(u,u,C.e,a)
return}P.c0(u,u,t,t.ca(a))},
q4:function(a){if(a==null)H.j(P.nz("stream"))
return new P.k_()},
mr:function(a,b){var u=$.G
if(u===C.e)return P.lB(a,b)
return P.lB(a,u.ca(b))},
os:function(a,b){var u=$.G
if(u===C.e)return P.ms(a,b)
return P.ms(a,u.dD(b,P.dH))},
kq:function(a,b,c,d,e){var u={}
u.a=d
P.ps(new P.kr(u,e))},
mO:function(a,b,c,d){var u,t=$.G
if(t===c)return d.$0()
$.G=c
u=t
try{t=d.$0()
return t}finally{$.G=u}},
mP:function(a,b,c,d,e){var u,t=$.G
if(t===c)return d.$1(e)
$.G=c
u=t
try{t=d.$1(e)
return t}finally{$.G=u}},
pr:function(a,b,c,d,e,f){var u,t=$.G
if(t===c)return d.$2(e,f)
$.G=c
u=t
try{t=d.$2(e,f)
return t}finally{$.G=u}},
c0:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.ca(d):c.ic(d)
P.mS(d)},
jr:function jr(a){this.a=a},
jq:function jq(a,b,c){this.a=a
this.b=b
this.c=c},
js:function js(a){this.a=a},
jt:function jt(a){this.a=a},
eC:function eC(){this.c=0},
k6:function k6(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jo:function jo(a,b){this.a=a
this.b=!1
this.$ti=b},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
kt:function kt(a){this.a=a},
bW:function bW(a,b){this.a=a
this.b=b},
cK:function cK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
k4:function k4(a,b){this.a=a
this.$ti=b},
ah:function ah(){},
dY:function dY(){},
jp:function jp(a,b){this.a=a
this.$ti=b},
e7:function e7(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
am:function am(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jA:function jA(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jC:function jC(a,b){this.a=a
this.b=b},
jH:function jH(a,b){this.a=a
this.b=b},
jB:function jB(a,b,c){this.a=a
this.b=b
this.c=c},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jM:function jM(a){this.a=a},
jK:function jK(a,b,c){this.a=a
this.b=b
this.c=c},
jJ:function jJ(a,b,c){this.a=a
this.b=b
this.c=c},
dW:function dW(a){this.a=a
this.b=null},
dD:function dD(){},
iz:function iz(){},
k_:function k_(){},
dH:function dH(){},
bB:function bB(a,b){this.a=a
this.b=b},
kf:function kf(){},
kr:function kr(a,b){this.a=a
this.b=b},
jT:function jT(){},
jV:function jV(a,b){this.a=a
this.b=b},
jU:function jU(a,b){this.a=a
this.b=b},
jW:function jW(a,b,c){this.a=a
this.b=b
this.c=c},
nX:function(a,b){return new H.C([a,b])},
m5:function(a,b){return new H.C([a,b])},
nY:function(a){return H.pF(a,new H.C([null,null]))},
m7:function(a){return new P.jQ([a])},
lG:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oH:function(a,b){var u=new P.ec(a,b)
u.c=a.e
return u},
nP:function(a,b,c){var u,t
if(P.lM(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.l])
$.an.push(a)
try{P.p2(a,u)}finally{if(0>=$.an.length)return H.b($.an,-1)
$.an.pop()}t=P.mp(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
lq:function(a,b,c){var u,t
if(P.lM(a))return b+"..."+c
u=new P.W(b)
$.an.push(a)
try{t=u
t.a=P.mp(t.a,a,", ")}finally{if(0>=$.an.length)return H.b($.an,-1)
$.an.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lM:function(a){var u,t
for(u=$.an.length,t=0;t<u;++t)if(a===$.an[t])return!0
return!1},
p2:function(a,b){var u,t,s,r,q,p,o,n=a.ga_(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.B())return
u=H.f(n.gL(n))
b.push(u)
m+=u.length+2;++l}if(!n.B()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gL(n);++l
if(!n.B()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gL(n);++l
for(;n.B();r=q,q=p){p=n.gL(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.b(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
m6:function(a,b,c){var u=P.nX(b,c)
a.q(0,new P.hr(u))
return u},
lw:function(a){var u,t={}
if(P.lM(a))return"{...}"
u=new P.W("")
try{$.an.push(a)
u.a+="{"
t.a=!0
J.lg(a,new P.hw(t,u))
u.a+="}"}finally{if(0>=$.an.length)return H.b($.an,-1)
$.an.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jQ:function jQ(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jR:function jR(a){this.a=a
this.c=this.b=null},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hf:function hf(){},
hr:function hr(a){this.a=a},
hs:function hs(){},
v:function v(){},
hv:function hv(){},
hw:function hw(a,b){this.a=a
this.b=b},
ak:function ak(){},
k7:function k7(){},
hx:function hx(){},
dO:function dO(a,b){this.a=a
this.$ti=b},
jX:function jX(){},
ed:function ed(){},
eI:function eI(){},
ov:function(a,b,c,d){if(b instanceof Uint8Array)return P.ow(!1,b,c,d)
return},
ow:function(a,b,c,d){var u,t,s=$.nm()
if(s==null)return
u=0===c
if(u&&!0)return P.lE(s,b)
t=b.length
d=P.b4(c,d,t)
if(u&&d===t)return P.lE(s,b)
return P.lE(s,b.subarray(c,d))},
lE:function(a,b){if(P.oy(b))return
return P.oz(a,b)},
oz:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.a6(t)}return},
oy:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
ox:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.a6(t)}return},
mR:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.e(c)
u=J.bw(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.af()
if((s&127)!==s)return t-b}return c-b},
lW:function(a,b,c,d,e,f){if(C.c.bg(f,4)!==0)throw H.c(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.P("Invalid base64 padding, more than two '=' characters",a,b))},
f9:function f9(){},
fa:function fa(){},
fi:function fi(){},
fn:function fn(){},
fB:function fB(){},
j9:function j9(){},
jb:function jb(){},
ke:function ke(a){this.b=0
this.c=a},
ja:function ja(a){this.a=a},
kd:function kd(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
by:function(a,b,c){var u=H.og(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.P(a,null,null))},
pC:function(a){var u=H.of(a)
if(u!=null)return u
throw H.c(P.P("Invalid double",a,null))},
nL:function(a){if(a instanceof H.cb)return a.i(0)
return"Instance of '"+H.f(H.cv(a))+"'"},
nZ:function(a,b,c){var u,t,s=J.nR(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
lv:function(a,b,c){var u,t=H.d([],[c])
for(u=J.bb(a);u.B();)t.push(u.gL(u))
if(b)return t
return J.lr(t)},
cx:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b4(b,c,u)
if(b<=0){if(typeof c!=="number")return c.D()
t=c<u}else t=!0
return H.mg(t?C.b.eI(a,b,c):a)}if(!!J.M(a).$ics)return H.oi(a,b,P.b4(b,c,a.length))
return P.oq(a,b,c)},
oq:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a8(b,0,J.af(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a8(c,b,J.af(a),q,q))
t=J.bb(a)
for(s=0;s<b;++s)if(!t.B())throw H.c(P.a8(b,0,s,q,q))
r=[]
if(u)for(;t.B();)r.push(t.gL(t))
else for(s=b;s<c;++s){if(!t.B())throw H.c(P.a8(c,b,s,q,q))
r.push(t.gL(t))}return H.mg(r)},
lA:function(a){return new H.hi(a,H.m4(a,!1,!0,!1,!1,!1))},
mp:function(a,b,c){var u=J.bb(b)
if(!u.B())return a
if(c.length===0){do a+=H.f(u.gL(u))
while(u.B())}else{a+=H.f(u.gL(u))
for(;u.B();)a=a+c+H.f(u.gL(u))}return a},
dP:function(){var u=H.o7()
if(u!=null)return P.ou(u)
throw H.c(P.x("'Uri.base' is not supported"))},
kc:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.nr().b
if(typeof b!=="string")H.j(H.ai(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.git().cg(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dt(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nJ:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nK:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
m_:function(a){return new P.be(1000*a)},
lp:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.ap(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nL(a)},
cU:function(a){return new P.az(!1,null,null,a)},
f2:function(a,b,c){return new P.az(!0,a,b,c)},
nz:function(a){return new P.az(!1,null,a,"Must not be null")},
du:function(a,b){return new P.bO(null,null,!0,a,b,"Value not in range")},
a8:function(a,b,c,d,e){return new P.bO(b,c,!0,a,d,"Invalid value")},
b4:function(a,b,c){var u
if(typeof a!=="number")return H.e(a)
if(0<=a){if(typeof c!=="number")return H.e(c)
u=a>c}else u=!0
if(u)throw H.c(P.a8(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.e(c)
u=b>c}else u=!0
if(u)throw H.c(P.a8(b,a,c,"end",null))
return b}return c},
mi:function(a,b){if(typeof a!=="number")return a.D()
if(a<0)throw H.c(P.a8(a,0,null,b,null))},
O:function(a,b,c,d,e){var u=e==null?J.af(b):e
return new P.fQ(u,!0,a,c,"Index out of range")},
x:function(a){return new P.j2(a)},
j_:function(a){return new P.iZ(a)},
mo:function(a){return new P.dC(a)},
bG:function(a){return new P.fk(a)},
i:function(a){return new P.e4(a)},
P:function(a,b,c){return new P.fL(a,b,c)},
o_:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
eW:function(a){H.pQ(a)},
ou:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.mu(e<e?C.a.u(a,0,e):a,5,f).gez()
else if(u===32)return P.mu(C.a.u(a,5,e),0,f).gez()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.u])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.mQ(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.bG()
if(r>=0)if(P.mQ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.p()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.D()
if(typeof n!=="number")return H.e(n)
if(m<n)n=m
if(typeof o!=="number")return o.D()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.D()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.D()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.u(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.aW(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aW(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jY(a,r,q,p,o,n,m,k)}return P.oK(a,0,e,r,q,p,o,n,m,k)},
mw:function(a){var u=P.l
return C.b.iA(H.d(a.split("&"),[u]),P.m5(u,u),new P.j7(C.f))},
ot:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.j4(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.T(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.by(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.by(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
mv:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.j5(a),d=new P.j6(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.u])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.T(a,t)
if(p===58){if(t===b){++t
if(C.a.T(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaE(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.ot(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.aN(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
oK:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oS(a,b,d)
else{if(d===b)P.bY(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oT(a,u,e-1):""
s=P.oP(a,e,f,!1)
if(typeof f!=="number")return f.p()
r=f+1
if(typeof g!=="number")return H.e(g)
q=r<g?P.oR(P.by(C.a.u(a,r,g),new P.k8(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oQ(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.D()
o=h<i?P.lI(a,h+1,i,n):n
return new P.bX(j,t,s,q,p,o,i<c?P.oO(a,i+1,c):n)},
mG:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bY:function(a,b,c){throw H.c(P.P(c,a,b))},
oR:function(a,b){if(a!=null&&a===P.mG(b))return
return a},
oP:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.T(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.a.T(a,u)!==93)P.bY(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oM(a,t,u)
if(typeof s!=="number")return s.D()
if(s<u){r=s+1
q=P.mL(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mv(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.e(c)
p=b
for(;p<c;++p)if(C.a.T(a,p)===58){s=C.a.bz(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mL(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mv(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.oV(a,b,c)},
oM:function(a,b,c){var u,t=C.a.bz(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.e(c)
u=t<c}else u=!1
return u?t:c},
mL:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.W(d):null
if(typeof c!=="number")return H.e(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.T(a,u)
if(r===37){q=P.lJ(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.W("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bY(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.W("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.T(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.W("")
l.a+=C.a.u(a,t,u)
l.a+=P.lH(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oV:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.e(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.T(a,u)
if(q===37){p=P.lJ(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.W("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.b(C.t,o)
o=(C.t[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.W("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bY(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.T(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.W("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lH(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oS:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mI(C.a.F(a,b)))P.bY(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bY(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.oL(t?a.toLowerCase():a)},
oL:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oT:function(a,b,c){return P.cN(a,b,c,C.N,!1)},
oQ:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cN(a,b,c,C.u,!0):C.i.jJ(d,new P.k9(),P.l).v(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.ai(u,"/"))u="/"+u
return P.oU(u,e,f)},
oU:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.ai(a,"/"))return P.oW(a,!u||c)
return P.oX(a)},
lI:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cU("Both query and queryParameters specified"))
return P.cN(a,b,c,C.l,!0)}if(d==null)return
u=new P.W("")
t.a=""
d.q(0,new P.ka(new P.kb(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oO:function(a,b,c){return P.cN(a,b,c,C.l,!0)},
lJ:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.T(a,b+1)
t=C.a.T(a,p)
s=H.ky(u)
r=H.ky(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aN(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dt(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
lH:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.u])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.u])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hO(a,6*r)&63|s
if(q>=u)return H.b(t,q)
t[q]=37
o=q+1
n=C.a.F(m,p>>>4)
if(o>=u)return H.b(t,o)
t[o]=n
n=q+2
o=C.a.F(m,p&15)
if(n>=u)return H.b(t,n)
t[n]=o
q+=3}}return P.cx(t,0,null)},
cN:function(a,b,c,d,e){var u=P.mK(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
mK:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.D()
if(typeof c!=="number")return H.e(c)
if(!(o<c))break
c$0:{u=C.a.T(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lJ(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bY(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.T(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lH(u)}}if(m==null)m=new P.W("")
m.a+=C.a.u(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.e(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.D()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mJ:function(a){if(C.a.ai(a,"."))return!0
return C.a.ct(a,"/.")!==-1},
oX:function(a){var u,t,s,r,q,p,o
if(!P.mJ(a))return a
u=H.d([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.D(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.v(u,"/")},
oW:function(a,b){var u,t,s,r,q,p
if(!P.mJ(a))return!b?P.mH(a):a
u=H.d([],[P.l])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaE(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaE(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.mH(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.v(u,"/")},
mH:function(a){var u,t,s,r=a.length
if(r>=2&&P.mI(J.nt(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oN:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cU("Invalid URL encoding"))}}return u},
lK:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.f!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.U(C.a.u(a,b,c))}else{r=H.d([],[P.u])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cU("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cU("Truncated URI"))
r.push(P.oN(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.ja(!1).cg(r)},
mI:function(a){var u=a|32
return 97<=u&&u<=122},
mu:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.u])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.P(m,a,t))}}if(s<0&&t>b)throw H.c(P.P(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaE(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.c(P.P("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.y.iL(0,a,o,u)
else{n=P.mK(a,o,u,C.l,!0)
if(n!=null)a=C.a.aW(a,o,u,n)}return new P.j3(a,l,c)},
p_:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.o_(22,new P.kj(),P.bR),n=new P.ki(o),m=new P.kk(),l=new P.kl(),k=n.$2(0,225)
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
mQ:function(a,b,c,d,e){var u,t,s,r,q,p=$.ns()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.b(p,d)
t=p[d]
s=C.a.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.b(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.b(e,q)
e[q]=u}return d},
bu:function bu(){},
aq:function aq(a,b){this.a=a
this.b=b},
J:function J(){},
be:function be(a){this.a=a},
fy:function fy(){},
fz:function fz(){},
bf:function bf(){},
ct:function ct(){},
az:function az(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bO:function bO(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fQ:function fQ(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
j2:function j2(a){this.a=a},
iZ:function iZ(a){this.a=a},
dC:function dC(a){this.a=a},
fk:function fk(a){this.a=a},
i2:function i2(){},
dA:function dA(){},
fs:function fs(a){this.a=a},
e4:function e4(a){this.a=a},
fL:function fL(a,b,c){this.a=a
this.b=b
this.c=c},
u:function u(){},
n:function n(){},
hg:function hg(){},
t:function t(){},
Q:function Q(){},
Z:function Z(){},
ao:function ao(){},
R:function R(){},
lz:function lz(){},
aw:function aw(){},
l:function l(){},
W:function W(a){this.a=a},
j7:function j7(a){this.a=a},
j4:function j4(a){this.a=a},
j5:function j5(a){this.a=a},
j6:function j6(a,b){this.a=a
this.b=b},
bX:function bX(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
k8:function k8(a,b){this.a=a
this.b=b},
k9:function k9(){},
kb:function kb(a,b){this.a=a
this.b=b},
ka:function ka(a){this.a=a},
j3:function j3(a,b,c){this.a=a
this.b=b
this.c=c},
kj:function kj(){},
ki:function ki(a){this.a=a},
kk:function kk(){},
kl:function kl(){},
jY:function jY(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jx:function jx(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pA:function(a){var u,t=J.M(a)
if(!!t.$iaZ){u=t.gdI(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eH(a.data,a.height,a.width)},
pz:function(a){if(a instanceof P.eH)return{data:a.a,height:a.b,width:a.c}
return a},
b8:function(a){var u,t,s,r,q
if(a==null)return
u=P.m5(P.l,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.j(0,q,a[q])}return u},
py:function(a){var u={}
a.q(0,new P.ku(u))
return u},
k0:function k0(){},
k1:function k1(a,b){this.a=a
this.b=b},
k2:function k2(a,b){this.a=a
this.b=b},
eH:function eH(a,b,c){this.a=a
this.b=b
this.c=c},
ku:function ku(a){this.a=a},
ez:function ez(a,b){this.a=a
this.b=b},
fH:function fH(a,b){this.a=a
this.b=b},
fI:function fI(){},
fJ:function fJ(){},
jP:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oG:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jS:function jS(){},
al:function al(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b_:function b_(){},
hn:function hn(){},
b3:function b3(){},
i0:function i0(){},
i7:function i7(){},
iA:function iA(){},
o:function o(){},
b5:function b5(){},
iP:function iP(){},
ea:function ea(){},
eb:function eb(){},
em:function em(){},
en:function en(){},
ex:function ex(){},
ey:function ey(){},
eF:function eF(){},
eG:function eG(){},
bR:function bR(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(a){this.a=a},
f7:function f7(){},
bC:function bC(){},
i1:function i1(){},
dX:function dX(){},
dw:function dw(){},
iv:function iv(){},
et:function et(){},
eu:function eu(){}},W={
lk:function(){var u=document.createElement("canvas")
return u},
lo:function(a){return"wheel"},
m0:function(a){return W.nO(a,null,null).eu(new W.fO(),P.l)},
nO:function(a,b,c){var u=W.bH,t=new P.am($.G,[u]),s=new P.jp(t,[u]),r=new XMLHttpRequest()
C.I.iU(r,"GET",a,!0)
W.Y(r,"load",new W.fP(r,s),!1)
W.Y(r,"error",s.gig(),!1)
r.send()
return t},
m1:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.a6(u)}return s},
jO:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
mF:function(a,b,c,d){var u=W.jO(W.jO(W.jO(W.jO(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.mV(new W.jz(c),W.m)
if(u!=null&&!0)J.nv(a,b,u,!1)
return new W.jy(a,b,u,!1)},
mV:function(a,b){var u=$.G
if(u===C.e)return a
return u.dD(a,b)},
p:function p(){},
eZ:function eZ(){},
f0:function f0(){},
f1:function f1(){},
bD:function bD(){},
bF:function bF(){},
bc:function bc(){},
fo:function fo(){},
H:function H(){},
cc:function cc(){},
fp:function fp(){},
as:function as(){},
aH:function aH(){},
fq:function fq(){},
fr:function fr(){},
ft:function ft(){},
fv:function fv(){},
d3:function d3(){},
d4:function d4(){},
fw:function fw(){},
fx:function fx(){},
jv:function jv(a,b){this.a=a
this.b=b},
a0:function a0(){},
m:function m(){},
h:function h(){},
aA:function aA(){},
ce:function ce(){},
fG:function fG(){},
fK:function fK(){},
aJ:function aJ(){},
fN:function fN(){},
cg:function cg(){},
bH:function bH(){},
fO:function fO(){},
fP:function fP(a,b){this.a=a
this.b=b},
ch:function ch(){},
aZ:function aZ(){},
ci:function ci(){},
fh:function fh(){},
bL:function bL(){},
ht:function ht(){},
hO:function hO(){},
co:function co(){},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
hR:function hR(){},
hS:function hS(a){this.a=a},
aM:function aM(){},
hT:function hT(){},
aN:function aN(){},
ju:function ju(a){this.a=a},
A:function A(){},
dp:function dp(){},
aO:function aO(){},
i4:function i4(){},
cw:function cw(){},
ig:function ig(){},
ih:function ih(a){this.a=a},
ij:function ij(){},
aQ:function aQ(){},
is:function is(){},
aR:function aR(){},
it:function it(){},
aS:function aS(){},
ix:function ix(){},
iy:function iy(a){this.a=a},
aB:function aB(){},
aT:function aT(){},
aC:function aC(){},
iD:function iD(){},
iE:function iE(){},
iK:function iK(){},
aU:function aU(){},
bQ:function bQ(){},
iN:function iN(){},
iO:function iO(){},
bp:function bp(){},
j8:function j8(){},
jk:function jk(){},
bs:function bs(){},
cD:function cD(){},
jw:function jw(){},
e_:function e_(){},
jN:function jN(){},
ej:function ej(){},
jZ:function jZ(){},
k3:function k3(){},
jy:function jy(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jz:function jz(a){this.a=a},
N:function N(){},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e8:function e8(){},
e9:function e9(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ek:function ek(){},
el:function el(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
cI:function cI(){},
cJ:function cJ(){},
er:function er(){},
es:function es(){},
ew:function ew(){},
eA:function eA(){},
eB:function eB(){},
cL:function cL(){},
cM:function cM(){},
eD:function eD(){},
eE:function eE(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){},
eO:function eO(){},
eP:function eP(){},
eQ:function eQ(){},
eR:function eR(){},
eS:function eS(){}},K={
ac:function(a){var u=new K.ik()
u.eP(a)
return u},
f_:function f_(){},
d8:function d8(){},
dh:function dh(){},
b2:function b2(){this.a=null},
ik:function ik(){this.a=null}},L={dB:function dB(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},dI:function dI(a,b,c){this.a=a
this.b=b
this.c=c},dJ:function dJ(a){this.b=a
this.c=null},iL:function iL(){var _=this
_.d=_.c=_.b=_.a=null},dL:function dL(a){this.b=a
this.a=this.c=null}},O={
ll:function(a){var u=new O.bd([a])
u.bI(a)
return u},
bd:function bd(a){var _=this
_.d=_.c=_.b=_.a=null
_.$ti=a},
cn:function cn(){this.b=this.a=null},
n0:function(a){var u=C.a.iI(a,"/")
if(u<=0)return a
return C.a.u(a,0,u)},
mU:function(a){var u,t,s=P.lA("([^\\s]+)")
$.mT=s
u=s.iy(a)
if(u==null)return H.d([],[P.l])
s=u.b
if(1>=s.length)return H.b(s,1)
t=s[1]
return H.d([t,C.a.ex(C.a.ab(a,t.length))],[P.l])},
ks:function(a){var u,t=H.d([],[P.l]),s=P.lA("([^\\s]+)")
$.mT=s
s=new H.jn(s,a,0)
for(;s.B();){u=s.d.b
if(1>=u.length)return H.b(u,1)
t.push(u[1])}return t},
b7:function(a){var u,t=O.ks(a),s=H.d([],[P.J]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(P.pC(t[u]))}return s},
dk:function(a,b,c){return O.o3(a,b,!1)},
o3:function(a,b,c){var u=0,t=P.a4([P.Q,P.l,O.bm]),s,r=2,q,p=[],o,n,m,l,k,j,i,h
var $async$dk=P.a5(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
o=O.n0(a)
k=new O.ko(b)
k.b=new H.C([P.l,O.bm])
n=k
u=7
return P.aa(W.m0(a),$async$dk)
case 7:m=e
u=8
return P.aa(n.at(m,o,!1),$async$dk)
case 8:j=n.b
s=j
u=1
break
r=2
u=6
break
case 4:r=3
h=q
l=H.a6(h)
P.eW(a+": "+H.f(l))
j=P.i(a+": "+H.f(l))
throw H.c(j)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a2(s,t)
case 2:return P.a1(q,t)}})
return P.a3($async$dk,t)},
dq:function(a,b){var u=null,t=null,s=!1
return O.o5(a,b)},
o5:function(a,a0){var u=0,t=P.a4(E.aI),s,r=2,q,p=[],o,n,m,l,k,j,i,h,g,f,e,d,c,b
var $async$dq=P.a5(function(a1,a2){if(a1===1){q=a2
u=r}while(true)switch(u){case 0:e=null
d=null
c=!1
r=4
o=O.n0(a)
k=e
j=new O.kp(a0)
j.b=H.d([],[O.eT])
j.c=H.d([],[V.au])
j.d=H.d([],[V.S])
i=new H.C([P.l,O.bm])
j.e=i
j.f=d
j.r=""
h=O.m8()
g=h.r
g.sV(0,new V.V(0.35,0.35,0.35))
g=h.x
g.sV(0,new V.V(0.65,0.65,0.65))
j.x=h
j.Q=E.fC(null)
if(k!=null)i.bt(0,k)
j.br()
n=j
u=7
return P.aa(W.m0(a),$async$dq)
case 7:m=a2
u=8
return P.aa(n.at(m,o,c),$async$dq)
case 8:k=d
if(k!=null){i=new O.i8()
i.b=!0
k.J(i)}k=n.giu()
s=k
u=1
break
r=2
u=6
break
case 4:r=3
b=q
l=H.a6(b)
P.eW(a+": "+H.f(l))
k=P.i(a+": "+H.f(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a2(s,t)
case 2:return P.a1(q,t)}})
return P.a3($async$dq,t)},
ko:function ko(a){this.a=a
this.c=this.b=null},
eT:function eT(a){this.a=a
this.b=null},
kp:function kp(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i8:function i8(){this.b=null},
m8:function(){var u,t=new O.bm(),s=O.ll(V.b0)
t.e=s
s.bi(t.gfI(),t.gfK())
s=new O.aK(t,"emission")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.f=s
s=new O.aK(t,"ambient")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.r=s
s=new O.aK(t,"diffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.x=s
s=new O.aK(t,"invDiffuse")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.y=s
s=new O.hF(t,"specular")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=100
t.z=s
s=new O.hB(t,"bump")
s.c=new A.a_(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aK(t,"reflect")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
t.cx=s
s=new O.hE(t,"refract")
s.c=new A.a_(!1,!1,!1)
s.f=new V.V(0,0,0)
s.ch=1
t.cy=s
s=new O.hA(t,"alpha")
s.c=new A.a_(!1,!1,!1)
s.f=1
t.db=s
s=new D.df()
s.bI(D.aj)
s.e=H.d([],[D.f8])
s.f=H.d([],[D.fu])
s.r=H.d([],[D.i5])
s.x=H.d([],[D.iu])
s.z=s.y=null
s.cJ(s.gfG(),s.ghg(),s.ghk())
t.dx=s
u=new O.hD()
u.b=new V.K(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.L():u
s.m(0,t.ghF())
s=t.dx
u=s.z
s=u==null?s.z=D.L():u
s.m(0,t.gbj())
t.fr=null
return t},
d9:function d9(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
h1:function h1(a,b){this.a=a
this.b=b},
h2:function h2(a){this.a=a},
hc:function hc(a,b){this.a=a
this.b=b},
hb:function hb(a){this.a=a},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(a,b){this.a=a
this.b=b},
h7:function h7(a,b){this.a=a
this.b=b},
h0:function h0(a,b){this.a=a
this.b=b},
fU:function fU(a,b){this.a=a
this.b=b},
h3:function h3(a,b){this.a=a
this.b=b},
h6:function h6(a,b){this.a=a
this.b=b},
fY:function fY(a,b){this.a=a
this.b=b},
fZ:function fZ(a,b){this.a=a
this.b=b},
fX:function fX(a,b){this.a=a
this.b=b},
h_:function h_(a,b){this.a=a
this.b=b},
fV:function fV(a){this.a=a},
fW:function fW(a){this.a=a},
h4:function h4(a){this.a=a},
h5:function h5(a){this.a=a},
h8:function h8(a){this.a=a},
h9:function h9(a,b){this.a=a
this.b=b},
ha:function ha(a){this.a=a},
fT:function fT(a){this.a=a},
fS:function fS(a){this.a=a},
bm:function bm(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hG:function hG(a,b){this.a=a
this.b=b},
hH:function hH(){},
hI:function hI(a,b){this.a=a
this.b=b},
hJ:function hJ(){},
hK:function hK(a,b){this.a=a
this.b=b},
hL:function hL(){},
hM:function hM(a,b){this.a=a
this.b=b},
hN:function hN(){},
hA:function hA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cm:function cm(){},
hB:function hB(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aK:function aK(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hD:function hD(){var _=this
_.e=_.d=_.c=_.b=null},
hE:function hE(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hF:function hF(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dE:function dE(){}},E={
fC:function(a){var u,t=new E.aI()
t.a=""
t.b=!0
u=O.ll(E.aI)
t.y=u
u.bi(t.giM(),t.giP())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.scK(0,a)
t.saY(null)
t.sb8(null)
return t},
ok:function(a,b){var u=new E.ib(a)
u.eO(a,b)
return u},
or:function(a,b,c,d,e){var u,t,s=J.M(a)
if(!!s.$ibF)return E.mq(a,!0,!0,!0,!1)
u=W.lk()
t=u.style
t.width="100%"
t.height="100%"
s.gcd(a).m(0,u)
return E.mq(u,!0,!0,!0,!1)},
mq:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dG(),p=C.j.cI(a,"webgl2",P.nY(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.j(P.i("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.ok(p,a)
u=new T.iH(p)
u.b=p.getParameter(3379)
p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dQ(a)
t=new X.hm()
t.c=new X.at(!1,!1,!1)
t.d=P.m7(P.u)
u.b=t
t=new X.hU(u)
t.f=0
t.r=V.bo()
t.x=V.bo()
t.ch=t.Q=1
u.c=t
t=new X.hu(u)
t.r=0
t.x=V.bo()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iM(u)
t.f=V.bo()
t.r=V.bo()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.d([],[[P.dD,P.R]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.gfS(),!1))
u.z.push(W.Y(a,"focus",u.gfY(),!1))
u.z.push(W.Y(a,"blur",u.gfM(),!1))
u.z.push(W.Y(s,"keyup",u.gh1(),!1))
u.z.push(W.Y(s,"keydown",u.gh_(),!1))
u.z.push(W.Y(a,"mousedown",u.gh5(),!1))
u.z.push(W.Y(a,"mouseup",u.gh9(),!1))
u.z.push(W.Y(a,r,u.gh7(),!1))
t=u.z
W.lo(a)
W.lo(a)
t.push(W.Y(a,W.lo(a),u.ghb(),!1))
u.z.push(W.Y(s,r,u.gfU(),!1))
u.z.push(W.Y(s,"mouseup",u.gfW(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.ghd(),!1))
u.z.push(W.Y(a,"touchstart",u.ghq(),!1))
u.z.push(W.Y(a,"touchend",u.ghm(),!1))
u.z.push(W.Y(a,"touchmove",u.gho(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.aq(Date.now(),!1)
q.db=0
q.dj()
return q},
fb:function fb(){},
aI:function aI(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ib:function ib(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
ie:function ie(a){this.a=a},
dG:function dG(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iJ:function iJ(a){this.a=a}},Z={
lF:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bZ(c)),35044)
a.bindBuffer(b,null)
return new Z.dU(b,u)},
ax:function(a){return new Z.aW(a)},
dU:function dU(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dV:function dV(a){this.a=a},
bE:function bE(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cY:function cY(){this.a=null},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a){this.a=a}},D={
L:function(){var u=new D.bg()
u.d=0
return u},
fe:function fe(){},
bg:function bg(){var _=this
_.d=_.c=_.b=_.a=null},
fE:function fE(a){this.a=a},
fF:function fF(a){this.a=a},
ag:function ag(){this.b=null},
bJ:function bJ(){this.b=null},
bK:function bK(){this.b=null},
w:function w(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f8:function f8(){},
fu:function fu(){},
aj:function aj(){},
df:function df(){var _=this
_.d=_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
i5:function i5(){},
iu:function iu(){}},X={cZ:function cZ(a,b){this.a=a
this.b=b},de:function de(a,b){this.a=a
this.b=b},hm:function hm(){var _=this
_.d=_.c=_.b=_.a=null},dg:function dg(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hu:function hu(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},at:function at(a,b,c){this.a=a
this.b=b
this.c=c},b1:function b1(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hU:function hU(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cp:function cp(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},i6:function i6(){},dK:function dK(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iM:function iM(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dQ:function dQ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nN:function(a){var u=new X.fM(),t=new V.K(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.mk
if(t==null){t=V.mj(0,0,1,1)
$.mk=t}u.r=t
return u},
lj:function lj(){},
fM:function fM(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iB:function iB(){}},V={
lm:function(a){var u,t,s=a.length
if(0>=s)return H.b(a,0)
u=a[0]
if(1>=s)return H.b(a,1)
t=a[1]
if(2>=s)return H.b(a,2)
s=a[2]
if(typeof u!=="number")return u.D()
if(u<0)u=0
else if(u>1)u=1
if(typeof t!=="number")return t.D()
if(t<0)t=0
else if(t>1)t=1
if(typeof s!=="number")return s.D()
if(s<0)s=0
else if(s>1)s=1
return new V.V(u,t,s)},
nG:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.by(a)
t=a-u
s=b*(1-c)
r=b*(1-c*t)
q=b*(1-c*(1-t))
switch(u){case 0:if(b<0)p=0
else p=b>1?1:b
if(q<0)o=0
else o=q>1?1:q
if(s<0)n=0
else n=s>1?1:s
return new V.V(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.V(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.V(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.V(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.V(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.V(p,o,n)}},
d_:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.K(a,a,a,1)},
nH:function(a){return new V.K(a.a,a.b,a.c,1)},
pZ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bg(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.an("null",c)
return C.a.an(C.d.ev(Math.abs(a-0)<$.z().a?0:a,b),c+b+1)},
c4:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.l])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.b(o,q)
u=C.a.an(o[q],t)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=u}return o},
lR:function(a){return C.d.jo(Math.pow(2,C.K.by(Math.log(H.c2(a))/Math.log(2))))},
dj:function(){var u=$.mb
return u==null?$.mb=V.aL(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aL:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b0(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
ma:function(a,b,c){return V.aL(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
m9:function(a,b,c){return V.aL(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1)},
bo:function(){var u=$.me
return u==null?$.me=new V.au(0,0):u},
ly:function(){var u=$.aP
return u==null?$.aP=new V.a7(0,0,0):u},
mj:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dv(a,b,c,d)},
ml:function(a,b,c,d,e,f){return new V.bP(a,b,c,d,e,f)},
mm:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i
if(a==null)return b
if(b==null)return a
u=a.a
t=b.a
s=Math.min(H.c2(u),H.c2(t))
r=a.b
q=b.b
p=Math.min(H.c2(r),H.c2(q))
o=a.c
n=b.c
m=Math.min(H.c2(o),H.c2(n))
l=a.d
if(typeof u!=="number")return u.p()
k=b.d
if(typeof t!=="number")return t.p()
j=Math.max(u+l,t+k)
k=a.e
if(typeof r!=="number")return r.p()
t=b.e
if(typeof q!=="number")return q.p()
i=Math.max(r+k,q+t)
t=a.f
if(typeof o!=="number")return o.p()
q=b.f
if(typeof n!=="number")return n.p()
return new V.bP(s,p,m,j-s,i-p,Math.max(o+t,n+q)-m)},
T:function(){var u=$.mB
return u==null?$.mB=new V.S(0,0,0):u},
mD:function(){var u=$.mz
return u==null?$.mz=new V.S(1,0,0):u},
mC:function(){var u=$.my
return u==null?$.my=new V.S(0,0,-1):u},
V:function V(a,b,c){this.a=a
this.b=b
this.c=c},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fD:function fD(a){this.a=a},
di:function di(a,b,c,d,e,f,g,h,i){var _=this
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
au:function au(a,b){this.a=a
this.b=b},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bP:function bP(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
I:function I(a,b){this.a=a
this.b=b},
S:function S(a,b,c){this.a=a
this.b=b
this.c=c},
pU:function(a){P.os(C.H,new V.lc(a))},
mh:function(a){var u=new V.i9(a),t=document.getElementById(a)
u.c=t
if(t==null)H.j("Failed to find "+a+" for RadioGroup")
return u},
om:function(a){var u=new V.ip()
u.eQ(a,!0)
return u},
ff:function ff(a){this.a=a
this.d=this.c=null},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
lc:function lc(a){this.a=a},
i9:function i9(a){this.a=a
this.c=null},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ip:function ip(){this.b=this.a=null},
ir:function ir(a){this.a=a},
iq:function iq(a){this.a=a}},U={
ln:function(){var u=new U.fj()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
fj:function fj(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){this.b=this.a=null},
cf:function cf(){var _=this
_.d=_.c=_.b=_.a=_.r=_.f=_.e=null},
ar:function ar(){},
dR:function dR(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dS:function dS(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
o1:function(a,b){var u=a.b6,t=new A.hz(b,u)
t.cP(b,u)
t.eN(a,b)
return t},
o2:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gad(a3)+a4.gad(a4)+a5.gad(a5)+a6.gad(a6)+a7.gad(a7)+a8.gad(a8)+a9.gad(a9)+b0.gad(b0)+b1.gad(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.q)(b2),++t)c+="_"+H.f(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.q)(b3),++t)c+="_"+H.f(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.q)(b4),++t)c+="_"+H.f(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.q)(b5),++t)c+="_"+H.f(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.aF()
if(j){u=$.aE()
d=new Z.aW(d.a|u.a)}if(i){u=$.aD()
d=new Z.aW(d.a|u.a)}if(h){u=$.ba()
d=new Z.aW(d.a|u.a)}if(g){u=$.b9()
d=new Z.aW(d.a|u.a)}return new A.hC(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
km:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kn:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.km(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eX(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
p8:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.km(b,t,"emission")
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
p4:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kn(b,t,"ambient")
b.a+="\n"},
p6:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kn(b,t,"diffuse")
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
p9:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kn(b,t,"invDiffuse")
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
pf:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kn(b,t,"specular")
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
pb:function(a,b){var u,t,s
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
pd:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.km(b,t,"reflect")
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
pe:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.km(b,t,"refract")
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
p5:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.eX(t)
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
if(typeof u!=="number")return u.af()
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
q=H.d([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.v(q," * ")+";\n"
u+="}\n"
c.a=u
u+="\n"
c.a=u
u+="vec3 "+t+"Value(vec3 norm, "+s+" lit)\n"
c.a=u
c.a=u+"{\n"
q=H.d([],r)
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
p=H.d([],r)
u=a.c
if(u.a||u.b||!1)p.push("diffuse(norm, normDir)")
u=a.d
if(u.a||u.b||!1)p.push("invDiffuse(norm, normDir)")
u=a.e
if(u.a||u.b||!1)p.push("specular(norm, normDir)")
u=c.a+="      highLight = intensity*("+C.b.v(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.v(q," + ")+");\n"
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
p7:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.eX(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.af()
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
o=H.d([],r)
n=a.b
if(n.a||n.b||!1)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.d([],r)
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
c.a+="      highLight = intensity*("+C.b.v(m," + ")+");\n"}else c.a+="   highLight = "+C.b.v(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.v(o," + ")+");\n"
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
pc:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.eX(t)
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
if(typeof u!=="number")return u.af()
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
l=H.d([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.v(l," * ")+";\n"
o+="}\n"
c.a=o
o+="\n"
c.a=o
o+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+m+")\n"
c.a=o
c.a=o+"{\n"
l=H.d([],r)
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
k=H.d([],r)
r=a.c
if(r.a||r.b||!1)k.push("diffuse(norm, normDir)")
r=a.d
if(r.a||r.b||!1)k.push("invDiffuse(norm, normDir)")
r=a.e
if(r.a||r.b||!1)k.push("specular(norm, normDir)")
r=c.a+="      highLight = intensity*("+C.b.v(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.v(l," + ")+");\n"
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
pg:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.eX(t)
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
if(typeof u!=="number")return u.af()
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
c.a=u+"\n"}u=[P.l]
j=H.d([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.v(j," * ")+";\n"
r+="}\n"
c.a=r
r+="\n"
c.a=r
r+="vec3 "+t+"Value(vec3 norm, "+s+" lit"+k+")\n"
c.a=r
c.a=r+"{\n"
j=H.d([],u)
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
i=H.d([],u)
u=a.c
if(u.a||u.b||!1)i.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)i.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)i.push("specular(norm, litVec)")
u=c.a+="      highLight = intensity*("+C.b.v(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.v(j," + ")+");\n"
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
pa:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.d([],[P.l])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.v(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
ph:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.W("")
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
A.p8(a,j)
A.p4(a,j)
A.p6(a,j)
A.p9(a,j)
A.pf(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.pd(a,j)
A.pe(a,j)}A.pb(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.p5(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.p7(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.pc(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.pg(a,q[o],j)
A.pa(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.d([],[P.l])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.b(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.v(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pi:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aS+"];\n"
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
pk:function(a,b){var u
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
pj:function(a,b){var u
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
pm:function(a,b){var u,t
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
pn:function(a,b){var u,t
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
pl:function(a,b){var u
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
po:function(a,b){var u
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
eX:function(a){if(0>=a.length)return H.b(a,0)
return a[0].toUpperCase()+C.a.ab(a,1)},
lC:function(a,b,c,d,e){var u=new A.iS(a,c,e)
u.f=d
P.nZ(d,0,P.u)
return u},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
f3:function f3(a){this.a=a},
a_:function a_(a,b,c){this.a=a
this.b=b
this.c=c},
fR:function fR(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hz:function hz(a,b){var _=this
_.jA=_.dN=_.bx=_.b6=_.aS=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.jI=_.jH=_.jG=_.cq=_.cp=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.jF=_.dZ=_.dY=_.jE=_.dX=_.dW=_.dV=_.jD=_.dU=_.dT=_.dS=_.jC=_.dR=_.dQ=_.jB=_.dP=_.dO=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cW:function cW(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dz:function dz(a,b){this.a=a
this.b=b},
hC:function hC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aS=b3
_.b6=b4
_.bx=b5},
cy:function cy(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cz:function cz(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cB:function cB(a,b,c,d,e,f,g,h,i,j){var _=this
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
cC:function cC(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dM:function dM(){},
iX:function iX(a){this.a=a},
bq:function bq(a,b,c){this.a=a
this.c=b
this.d=c},
iU:function iU(a,b,c){this.a=a
this.c=b
this.d=c},
iV:function iV(a,b,c){this.a=a
this.c=b
this.d=c},
iW:function iW(a,b,c){this.a=a
this.c=b
this.d=c},
iS:function iS(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
X:function X(a,b,c){this.a=a
this.c=b
this.d=c},
iT:function iT(a,b,c){this.a=a
this.c=b
this.d=c},
E:function E(a,b,c){this.a=a
this.c=b
this.d=c},
br:function br(a,b,c){this.a=a
this.c=b
this.d=c},
iY:function iY(a,b,c){this.a=a
this.c=b
this.d=c},
cA:function cA(a,b,c){this.a=a
this.c=b
this.d=c},
ad:function ad(a,b,c){this.a=a
this.c=b
this.d=c},
ae:function ae(a,b,c){this.a=a
this.c=b
this.d=c},
bS:function bS(a,b,c){this.a=a
this.c=b
this.d=c}},F={
nM:function(a,b,c){var u=new F.bh(),t=a.a
if(t==null)H.j(P.i("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.j(P.i("May not create a face with vertices attached to different shapes."))
u.a=a
a.d.b.push(u)
u.b=b
b.d.c.push(u)
u.c=c
c.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.X()
return u},
nW:function(a,b){var u,t=new F.bl()
if(a==null)H.j(P.i("May not create a line with a null start vertex."))
if(b==null)H.j(P.i("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.j(P.i("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.j(P.i("May not create a line with vertices attached to different shapes."))
t.a=a
a.c.b.push(t)
t.b=b
b.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.X()
return t},
lx:function(a){var u=new F.bM()
if(a.a==null)H.j(P.i("May not create a point with a vertex which is not attached to a shape."))
u.a=a
a.b.b.push(u)
u.a.a.b.b.push(u)
u.a.a.X()
return u},
a9:function(){var u=new F.av(),t=new F.jc(u)
t.b=!1
t.c=H.d([],[F.b6])
u.a=t
t=new F.io(u)
t.b=H.d([],[F.bM])
u.b=t
t=new F.im(u)
t.b=H.d([],[F.bl])
u.c=t
t=new F.il(u)
t.b=H.d([],[F.bh])
u.d=t
u.e=null
return u},
bU:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b6(),r=new F.jh()
r.b=H.d([],[F.bM])
s.b=r
r=new F.jg()
u=[F.bl]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.jd()
u=[F.bh]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.nn()
s.e=0
r=$.aF()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aE().a)!==0?e:t
s.x=(u&$.aD().a)!==0?b:t
s.y=(u&$.ba().a)!==0?f:t
s.z=(u&$.bA().a)!==0?g:t
s.Q=(u&$.no().a)!==0?c:t
s.ch=(u&$.c8().a)!==0?i:0
s.cx=(u&$.b9().a)!==0?a:t
return s},
bh:function bh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
bl:function bl(){this.b=this.a=null},
bM:function bM(){this.a=null},
av:function av(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
il:function il(a){this.a=a
this.b=null},
im:function im(a){this.a=a
this.b=null},
io:function io(a){this.a=a
this.b=null},
b6:function b6(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jj:function jj(a){this.a=a},
ji:function ji(a){this.a=a},
jc:function jc(a){this.a=a
this.c=this.b=null},
jd:function jd(){this.d=this.c=this.b=null},
je:function je(a,b){this.a=a
this.b=b},
jf:function jf(a,b){this.a=a
this.b=b},
jg:function jg(){this.c=this.b=null},
jh:function jh(){this.b=null}},T={dF:function dF(){},iF:function iF(){},iG:function iG(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iH:function iH(a){var _=this
_.a=a
_.e=_.d=_.b=null},iI:function iI(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},G={
n4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e="controls",d="modifiers",c={},b=V.om("Test 032"),a=W.lk()
a.className="pageLargeCanvas"
a.id=g
b.a.appendChild(a)
u=[P.l]
b.dw(H.d(["The inspection test for shapes loaders. ","For generated shapes see test002. ","Note: Some shapes will take time to load."],u))
b.i6(H.d(["controls","shapes","scalars"],u))
b.dw(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(g)
if(t==null)H.j(P.i("Failed to find an element with the identifier, testCanvas."))
s=E.or(t,!0,!0,!0,!1)
c.a=!0
r=E.fC(f)
b=new U.cf()
b.bI(U.ar)
b.bi(b.gfE(),b.ghi())
b.e=null
b.f=V.dj()
b.r=0
q=s.x
p=new U.dS()
o=U.ln()
o.scH(0,!0)
o.scv(6.283185307179586)
o.scz(0)
o.sa8(0,0)
o.scw(100)
o.sW(0)
o.sci(0.5)
p.b=o
n=p.gaK()
o.gC().m(0,n)
o=U.ln()
o.scH(0,!0)
o.scv(6.283185307179586)
o.scz(0)
o.sa8(0,0)
o.scw(100)
o.sW(0)
o.sci(0.5)
p.c=o
o.gC().m(0,n)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
m=new X.at(!1,!1,!1)
l=p.d
p.d=m
o=new D.w(d,l,m)
o.b=!0
p.S(o)
o=p.f
if(o!==!1){p.f=!1
o=new D.w("invertX",o,!1)
o.b=!0
p.S(o)}o=p.r
if(o!==!0){p.r=!0
o=new D.w("invertY",o,!0)
o.b=!0
p.S(o)}p.b4(q)
b.m(0,p)
q=s.x
p=new U.dR()
o=U.ln()
o.scH(0,!0)
o.scv(6.283185307179586)
o.scz(0)
o.sa8(0,0)
o.scw(100)
o.sW(0)
o.sci(0.2)
p.b=o
o.gC().m(0,p.gaK())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
m=new X.at(!0,!1,!1)
l=p.c
p.c=m
o=new D.w(d,l,m)
o.b=!0
p.S(o)
p.b4(q)
b.m(0,p)
q=s.x
p=new U.dT()
p.c=0.01
p.e=p.d=0
m=new X.at(!1,!1,!1)
p.b=m
o=new D.w(d,f,m)
o.b=!0
p.S(o)
p.b4(q)
b.m(0,p)
r.sb8(b)
k=new O.d9()
k.b=V.mC()
k.c=new V.K(0.2,0.3,0.4,1)
k.d=new V.K(0.1,0.2,0.3,1)
k.e=V.d_(0.7)
k.f=V.d_(0.3)
k.r=V.d_(0.5)
k.x=V.d_(0.5)
k.y=new V.K(1,1,1,1)
k.z=V.d_(0.8)
k.r1=k.k4=k.k3=k.k2=k.k1=k.id=k.go=k.fy=k.fx=k.fr=k.dy=k.dx=k.db=k.cy=k.cx=k.ch=k.Q=!1
k.r2=1
k.sae(0.4)
b=new M.d5()
b.a=!0
q=O.ll(E.aI)
b.e=q
q.bi(b.gfO(),b.gfQ())
b.y=b.x=b.r=b.f=null
j=X.nN(f)
i=new X.dr()
i.c=1.0471975511965976
i.d=0.1
i.e=2000
i.sb8(f)
q=i.c
if(!(Math.abs(q-1.0471975511965976)<$.z().a)){i.c=1.0471975511965976
q=new D.w("fov",q,1.0471975511965976)
q.b=!0
i.aI(q)}q=i.d
if(!(Math.abs(q-0.1)<$.z().a)){i.d=0.1
q=new D.w("near",q,0.1)
q.b=!0
i.aI(q)}q=i.e
if(!(Math.abs(q-2000)<$.z().a)){i.e=2000
q=new D.w("far",q,2000)
q.b=!0
i.aI(q)}q=b.b
if(q!==i){if(q!=null)q.gC().Y(0,b.gav())
l=b.b
b.b=i
i.gC().m(0,b.gav())
q=new D.w("camera",l,b.b)
q.b=!0
b.ax(q)}q=b.c
if(q!==j){if(q!=null)q.gC().Y(0,b.gav())
l=b.c
b.c=j
j.gC().m(0,b.gav())
q=new D.w("target",l,b.c)
q.b=!0
b.ax(q)}b.saY(f)
b.saY(k)
b.e.m(0,r)
q=b.b
h=V.ma(0,0,5)
p=new U.d0()
p.a=h
q.sb8(p)
q=s.d
if(q!==b){if(q!=null)q.gC().Y(0,s.gcQ())
s.d=b
b.gC().m(0,s.gcQ())
s.cR()}b=new V.ff(e)
u=u.getElementById(e)
b.c=u
if(u==null)H.j("Failed to find controls for CheckGroup")
b.d=H.d([],[W.fh])
b.a7(0,"Material",new G.kD(c,r),!0)
b.t(0,"Filled",new G.kE(k))
b.a7(0,"Wire Frame",new G.kF(k),!0)
b.t(0,"Vertices",new G.kQ(k))
b.t(0,"Normals",new G.l0(k))
b.t(0,"Binormals",new G.l2(k))
b.t(0,"Tangentals",new G.l3(k))
b.t(0,"Face Centers",new G.l4(k))
b.t(0,"Face Normals",new G.l5(k))
b.t(0,"Face Binormals",new G.l6(k))
b.t(0,"Face Tangentals",new G.l7(k))
b.t(0,"Colors",new G.kG(k))
b.t(0,"Textures2D",new G.kH(k))
b.t(0,"TexturesCube",new G.kI(k))
b.t(0,"Weight",new G.kJ(k))
b.a7(0,"Axis",new G.kK(k),!0)
b.t(0,"AABB",new G.kL(k))
c=new G.la(c,s,r,new G.l8(),k)
b=V.mh("shapes")
b.a7(0,"Cube",new G.kM(c),!0)
b.t(0,"Low Poly Tree",new G.kN(c))
b.t(0,"Low Poly Wolf",new G.kO(c))
b.t(0,"Plant",new G.kP(c))
c=V.mh("scalars")
c.t(0,"0.01",new G.kR(k))
c.t(0,"0.02",new G.kS(k))
c.t(0,"0.04",new G.kT(k))
c.t(0,"0.06",new G.kU(k))
c.t(0,"0.08",new G.kV(k))
c.t(0,"0.1",new G.kW(k))
c.t(0,"0.2",new G.kX(k))
c.a7(0,"0.4",new G.kY(k),!0)
c.t(0,"0.6",new G.kZ(k))
c.t(0,"0.8",new G.l_(k))
c.t(0,"1.0",new G.l1(k))
V.pU(s)},
kD:function kD(a,b){this.a=a
this.b=b},
kE:function kE(a){this.a=a},
kF:function kF(a){this.a=a},
kQ:function kQ(a){this.a=a},
l0:function l0(a){this.a=a},
l2:function l2(a){this.a=a},
l3:function l3(a){this.a=a},
l4:function l4(a){this.a=a},
l5:function l5(a){this.a=a},
l6:function l6(a){this.a=a},
l7:function l7(a){this.a=a},
kG:function kG(a){this.a=a},
kH:function kH(a){this.a=a},
kI:function kI(a){this.a=a},
kJ:function kJ(a){this.a=a},
kK:function kK(a){this.a=a},
kL:function kL(a){this.a=a},
l8:function l8(){},
l9:function l9(a,b){this.a=a
this.b=b},
la:function la(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
kP:function kP(a){this.a=a},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
kT:function kT(a){this.a=a},
kU:function kU(a){this.a=a},
kV:function kV(a){this.a=a},
kW:function kW(a){this.a=a},
kX:function kX(a){this.a=a},
kY:function kY(a){this.a=a},
kZ:function kZ(a){this.a=a},
l_:function l_(a){this.a=a},
l1:function l1(a){this.a=a}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,G]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lt.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gH:function(a){return H.cu(a)},
i:function(a){return"Instance of '"+H.f(H.cv(a))+"'"}}
J.hh.prototype={
i:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$ibu:1}
J.dc.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gH:function(a){return 0},
$iZ:1}
J.dd.prototype={
gH:function(a){return 0},
i:function(a){return String(a)},
$inT:1}
J.i3.prototype={}
J.bT.prototype={}
J.bk.prototype={
i:function(a){var u=a[$.nb()]
if(u==null)return this.eL(a)
return"JavaScript function for "+H.f(J.ap(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bi.prototype={
jb:function(a,b){var u
if(!!a.fixed$length)H.j(P.x("removeAt"))
u=a.length
if(b>=u)throw H.c(P.du(b,null))
return a.splice(b,1)[0]},
Y:function(a,b){var u
if(!!a.fixed$length)H.j(P.x("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
bt:function(a,b){var u,t
if(!!a.fixed$length)H.j(P.x("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
q:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bG(a))}},
v:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
iH:function(a){return this.v(a,"")},
iz:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.bG(a))}return u},
iA:function(a,b,c){return this.iz(a,b,c,null)},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
eI:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a8(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a8(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.aY(a,0)])
return H.d(a.slice(b,c),[H.aY(a,0)])},
gaE:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.nQ())},
b1:function(a,b){if(!!a.immutable$list)H.j(P.x("sort"))
H.op(a,b==null?J.p1():b)},
eH:function(a){return this.b1(a,null)},
a3:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
i:function(a){return P.lq(a,"[","]")},
ga_:function(a){return new J.ab(a,a.length)},
gH:function(a){return H.cu(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.j(P.x("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.f2(b,u,null))
if(b<0)throw H.c(P.a8(b,0,null,u,null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.bv(a,b))
if(b>=a.length||b<0)throw H.c(H.bv(a,b))
return a[b]},
j:function(a,b,c){if(!!a.immutable$list)H.j(P.x("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bv(a,b))
a[b]=c},
$ir:1,
$in:1,
$it:1}
J.ls.prototype={}
J.ab.prototype={
gL:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.cj.prototype={
aR:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ai(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbA(b)
if(this.gbA(a)===u)return 0
if(this.gbA(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbA:function(a){return a===0?1/a<0:a<0},
jo:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.x(""+a+".toInt()"))},
by:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.x(""+a+".floor()"))},
au:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.x(""+a+".round()"))},
ev:function(a,b){var u
if(b>20)throw H.c(P.a8(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbA(a))return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a8(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.T(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.j(P.x("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.l("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bg:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eM:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a6:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.x("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
aN:function(a,b){var u
if(a>0)u=this.dl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hO:function(a,b){if(b<0)throw H.c(H.ai(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$iao:1}
J.db.prototype={$iu:1}
J.da.prototype={}
J.bj.prototype={
T:function(a,b){if(b<0)throw H.c(H.bv(a,b))
if(b>=a.length)H.j(H.bv(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bv(a,b))
return a.charCodeAt(b)},
p:function(a,b){if(typeof b!=="string")throw H.c(P.f2(b,null,null))
return a+b},
aW:function(a,b,c,d){var u,t
c=P.b4(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.j(H.ai(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
ai:function(a,b){return this.aa(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.j(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.D()
if(b<0)throw H.c(P.du(b,null))
if(b>c)throw H.c(P.du(b,null))
if(c>a.length)throw H.c(P.du(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.u(a,b,null)},
ex:function(a){var u,t,s,r=a.trim(),q=r.length
if(q===0)return r
if(this.F(r,0)===133){u=J.nU(r,1)
if(u===q)return""}else u=0
t=q-1
s=this.T(r,t)===133?J.nV(r,t):q
if(u===0&&s===q)return r
return r.substring(u,s)},
l:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.F)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
an:function(a,b){var u=b-a.length
if(u<=0)return a
return this.l(" ",u)+a},
iV:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.l(c,u)},
bz:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a8(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ct:function(a,b){return this.bz(a,b,0)},
iI:function(a,b){var u=a.length,t=b.length
if(u+t>u)u-=t
return a.lastIndexOf(b,u)},
aR:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ai(b))
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
$il:1}
H.U.prototype={
gk:function(a){return this.a.length},
h:function(a,b){return C.a.T(this.a,b)},
$ar:function(){return[P.u]},
$av:function(){return[P.u]},
$an:function(){return[P.u]},
$at:function(){return[P.u]}}
H.r.prototype={}
H.ck.prototype={
gL:function(a){return this.d},
B:function(){var u,t=this,s=t.a,r=J.bw(s),q=r.gk(s)
if(t.b!=q)throw H.c(P.bG(s))
u=t.c
if(typeof q!=="number")return H.e(q)
if(u>=q){t.d=null
return!1}t.d=r.I(s,u);++t.c
return!0}}
H.cl.prototype={
ga_:function(a){return new H.hy(J.bb(this.a),this.b)},
gk:function(a){return J.af(this.a)},
I:function(a,b){return this.b.$1(J.lf(this.a,b))},
$an:function(a,b){return[b]}}
H.fA.prototype={$ir:1,
$ar:function(a,b){return[b]}}
H.hy.prototype={
B:function(){var u=this,t=u.b
if(t.B()){u.a=u.c.$1(t.gL(t))
return!0}u.a=null
return!1},
gL:function(a){return this.a}}
H.jl.prototype={
ga_:function(a){return new H.jm(J.bb(this.a),this.b)}}
H.jm.prototype={
B:function(){var u,t
for(u=this.a,t=this.b;u.B();)if(t.$1(u.gL(u)))return!0
return!1},
gL:function(a){var u=this.a
return u.gL(u)}}
H.d6.prototype={}
H.j1.prototype={
j:function(a,b,c){throw H.c(P.x("Cannot modify an unmodifiable list"))}}
H.dN.prototype={}
H.fl.prototype={
i:function(a){return P.lw(this)},
j:function(a,b,c){return H.nI()},
$iQ:1}
H.fm.prototype={
gk:function(a){return this.a},
cf:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cf(0,b))return
return this.d7(b)},
d7:function(a){return this.b[a]},
q:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d7(s))}}}
H.iQ.prototype={
am:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.i_.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hl.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.j0.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.cd.prototype={}
H.ld.prototype={
$1:function(a){if(!!J.M(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.ev.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iaw:1}
H.cb.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cQ(t==null?"unknown":t)+"'"},
gjt:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iC.prototype={}
H.iw.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cQ(u)+"'"}}
H.c9.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.c9))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.cu(this.a)
else u=typeof t!=="object"?J.cT(t):H.cu(t)
return(u^H.cu(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cv(u))+"'")}}
H.fd.prototype={
i:function(a){return this.a}}
H.ii.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.C.prototype={
gk:function(a){return this.a},
gal:function(a){return new H.hp(this,[H.aY(this,0)])},
gjs:function(a){var u=this
return H.o0(u.gal(u),new H.hk(u),H.aY(u,0),H.aY(u,1))},
cf:function(a,b){var u=this.b
if(u==null)return!1
return this.fd(u,b)},
bt:function(a,b){J.lg(b,new H.hj(this))},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bl(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bl(r,b)
s=t==null?null:t.b
return s}else return q.iF(b)},
iF:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.d9(r,s.e6(a))
t=s.e7(u,a)
if(t<0)return
return u[t].b},
j:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cW(u==null?s.b=s.bZ():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cW(t==null?s.c=s.bZ():t,b,c)}else s.iG(b,c)},
iG:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bZ()
u=r.e6(a)
t=r.d9(q,u)
if(t==null)r.c7(q,u,[r.c_(a,b)])
else{s=r.e7(t,a)
if(s>=0)t[s].b=b
else t.push(r.c_(a,b))}},
q:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bG(u))
t=t.c}},
cW:function(a,b,c){var u=this.bl(a,b)
if(u==null)this.c7(a,b,this.c_(b,c))
else u.b=c},
c_:function(a,b){var u=this,t=new H.ho(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
e6:function(a){return J.cT(a)&0x3ffffff},
e7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
i:function(a){return P.lw(this)},
bl:function(a,b){return a[b]},
d9:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
fg:function(a,b){delete a[b]},
fd:function(a,b){return this.bl(a,b)!=null},
bZ:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c7(t,u,t)
this.fg(t,u)
return t}}
H.hk.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aY(u,1),args:[H.aY(u,0)]}}}
H.hj.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:function(){var u=this.a
return{func:1,ret:P.Z,args:[H.aY(u,0),H.aY(u,1)]}}}
H.ho.prototype={}
H.hp.prototype={
gk:function(a){return this.a.a},
ga_:function(a){var u=this.a,t=new H.hq(u,u.r)
t.c=u.e
return t}}
H.hq.prototype={
gL:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bG(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kz.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.kA.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kB.prototype={
$1:function(a){return this.a(a)}}
H.hi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
gfB:function(){var u=this,t=u.c
if(t!=null)return t
t=u.b
return u.c=H.m4(u.a,t.multiline,!t.ignoreCase,t.unicode,t.dotAll,!0)},
iy:function(a){var u=this.b.exec(a)
if(u==null)return
return new H.ee(u)},
fi:function(a,b){var u,t=this.gfB()
t.lastIndex=b
u=t.exec(a)
if(u==null)return
return new H.ee(u)},
$ioj:1}
H.ee.prototype={}
H.jn.prototype={
gL:function(a){return this.d},
B:function(){var u,t,s,r,q=this,p=q.b
if(p==null)return!1
u=q.c
if(u<=p.length){t=q.a
s=t.fi(p,u)
if(s!=null){q.d=s
p=s.b
u=p.index
r=u+p[0].length
if(u===r){if(t.b.unicode){p=q.c
u=p+1
t=q.b
if(u<t.length){p=J.c5(t).T(t,p)
if(p>=55296&&p<=56319){p=C.a.T(t,u)
p=p>=56320&&p<=57343}else p=!1}else p=!1}else p=!1
r=(p?r+1:r)+1}q.c=r
return!0}}q.b=q.d=null
return!1}}
H.cq.prototype={$icq:1}
H.bn.prototype={$ibn:1}
H.dl.prototype={
gk:function(a){return a.length},
$iy:1,
$ay:function(){}}
H.cr.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]},
j:function(a,b,c){H.aX(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.J]},
$av:function(){return[P.J]},
$in:1,
$an:function(){return[P.J]},
$it:1,
$at:function(){return[P.J]}}
H.dm.prototype={
j:function(a,b,c){H.aX(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.u]},
$av:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]},
$it:1,
$at:function(){return[P.u]}}
H.hV.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.hW.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.hX.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.hY.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.hZ.prototype={
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.dn.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aX(b,a,a.length)
return a[b]}}
H.cs.prototype={
gk:function(a){return a.length},
h:function(a,b){H.aX(b,a,a.length)
return a[b]},
$ics:1,
$ibR:1}
H.cE.prototype={}
H.cF.prototype={}
H.cG.prototype={}
H.cH.prototype={}
P.jr.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:10}
P.jq.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.js.prototype={
$0:function(){this.a.$0()}}
P.jt.prototype={
$0:function(){this.a.$0()}}
P.eC.prototype={
eT:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.c3(new P.k6(this,b),0),a)
else throw H.c(P.x("`setTimeout()` not found."))},
eU:function(a,b){if(self.setTimeout!=null)self.setInterval(H.c3(new P.k5(this,a,Date.now(),b),0),a)
else throw H.c(P.x("Periodic timer."))},
$idH:1}
P.k6.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.k5.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eM(u,q)}s.c=r
t.d.$1(s)}}
P.jo.prototype={
ce:function(a,b){var u=!this.b||H.eU(b,"$iah",this.$ti,"$aah"),t=this.a
if(u)t.cX(b)
else t.d2(b)},
bw:function(a,b){var u=this.a
if(this.b)u.bk(a,b)
else u.cY(a,b)}}
P.kg.prototype={
$1:function(a){return this.a.$2(0,a)},
$S:17}
P.kh.prototype={
$2:function(a,b){this.a.$2(1,new H.cd(a,b))},
$S:18}
P.kt.prototype={
$2:function(a,b){this.a(a,b)}}
P.bW.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.cK.prototype={
gL:function(a){var u=this.c
if(u==null)return this.b
return u.gL(u)},
B:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.B())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bW){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.b(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.bb(u)
if(!!r.$icK){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.k4.prototype={
ga_:function(a){return new P.cK(this.a())}}
P.ah.prototype={}
P.dY.prototype={
bw:function(a,b){var u
if(a==null)a=new P.ct()
u=this.a
if(u.a!==0)throw H.c(P.mo("Future already completed"))
u.cY(a,b)},
dH:function(a){return this.bw(a,null)}}
P.jp.prototype={
ce:function(a,b){var u=this.a
if(u.a!==0)throw H.c(P.mo("Future already completed"))
u.cX(b)}}
P.e7.prototype={
iK:function(a){if((this.c&15)!==6)return!0
return this.b.b.cE(this.d,a.a)},
iD:function(a){var u=this.e,t=this.b.b
if(H.lO(u,{func:1,args:[P.R,P.aw]}))return t.jh(u,a.a,a.b)
else return t.cE(u,a.a)}}
P.am.prototype={
cF:function(a,b,c){var u,t=$.G
if(t!==C.e)b=b!=null?P.pq(b,t):b
u=new P.am($.G,[c])
this.bK(new P.e7(u,b==null?1:3,a,b))
return u},
eu:function(a,b){return this.cF(a,null,b)},
dn:function(a,b,c){var u=new P.am($.G,[c])
this.bK(new P.e7(u,(b==null?1:3)|16,a,b))
return u},
bK:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.bK(a)
return}t.a=u
t.c=s.c}P.c0(null,null,t.b,new P.jA(t,a))}},
dg:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.dg(a)
return}p.a=q
p.c=u.c}o.a=p.bq(a)
P.c0(null,null,p.b,new P.jI(o,p))}},
bp:function(){var u=this.c
this.c=null
return this.bq(u)},
bq:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
fb:function(a){var u,t=this,s=t.$ti
if(H.eU(a,"$iah",s,"$aah"))if(H.eU(a,"$iam",s,null))P.jD(a,t)
else P.mE(a,t)
else{u=t.bp()
t.a=4
t.c=a
P.bV(t,u)}},
d2:function(a){var u=this,t=u.bp()
u.a=4
u.c=a
P.bV(u,t)},
bk:function(a,b){var u=this,t=u.bp()
u.a=8
u.c=new P.bB(a,b)
P.bV(u,t)},
cX:function(a){var u=this
if(H.eU(a,"$iah",u.$ti,"$aah")){u.f7(a)
return}u.a=1
P.c0(null,null,u.b,new P.jC(u,a))},
f7:function(a){var u=this
if(H.eU(a,"$iam",u.$ti,null)){if(a.a===8){u.a=1
P.c0(null,null,u.b,new P.jH(u,a))}else P.jD(a,u)
return}P.mE(a,u)},
cY:function(a,b){this.a=1
P.c0(null,null,this.b,new P.jB(this,a,b))},
$iah:1}
P.jA.prototype={
$0:function(){P.bV(this.a,this.b)}}
P.jI.prototype={
$0:function(){P.bV(this.b,this.a.a)}}
P.jE.prototype={
$1:function(a){var u=this.a
u.a=0
u.fb(a)},
$S:10}
P.jF.prototype={
$2:function(a,b){this.a.bk(a,b)},
$1:function(a){return this.$2(a,null)},
$S:20}
P.jG.prototype={
$0:function(){this.a.bk(this.b,this.c)}}
P.jC.prototype={
$0:function(){this.a.d2(this.b)}}
P.jH.prototype={
$0:function(){P.jD(this.b,this.a)}}
P.jB.prototype={
$0:function(){this.a.bk(this.b,this.c)}}
P.jL.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.es(s.d)}catch(r){u=H.a6(r)
t=H.bx(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.bB(u,t)
q.a=!0
return}if(!!J.M(n).$iah){if(n instanceof P.am&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.eu(new P.jM(p),null)
s.a=!1}}}
P.jM.prototype={
$1:function(a){return this.a},
$S:21}
P.jK.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cE(s.d,q.c)}catch(r){u=H.a6(r)
t=H.bx(r)
s=q.a
s.b=new P.bB(u,t)
s.a=!0}}}
P.jJ.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.iK(u)&&r.e!=null){q=m.b
q.b=r.iD(u)
q.a=!1}}catch(p){t=H.a6(p)
s=H.bx(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.bB(t,s)
n.a=!0}}}
P.dW.prototype={}
P.dD.prototype={}
P.iz.prototype={}
P.k_.prototype={}
P.dH.prototype={}
P.bB.prototype={
i:function(a){return H.f(this.a)},
$ibf:1}
P.kf.prototype={}
P.kr.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.ct():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jT.prototype={
jj:function(a){var u,t,s,r=null
try{if(C.e===$.G){a.$0()
return}P.mO(r,r,this,a)}catch(s){u=H.a6(s)
t=H.bx(s)
P.kq(r,r,this,u,t)}},
jl:function(a,b){var u,t,s,r=null
try{if(C.e===$.G){a.$1(b)
return}P.mP(r,r,this,a,b)}catch(s){u=H.a6(s)
t=H.bx(s)
P.kq(r,r,this,u,t)}},
jm:function(a,b){return this.jl(a,b,null)},
ie:function(a){return new P.jV(this,a)},
ic:function(a){return this.ie(a,null)},
ca:function(a){return new P.jU(this,a)},
dD:function(a,b){return new P.jW(this,a,b)},
jg:function(a){if($.G===C.e)return a.$0()
return P.mO(null,null,this,a)},
es:function(a){return this.jg(a,null)},
jk:function(a,b){if($.G===C.e)return a.$1(b)
return P.mP(null,null,this,a,b)},
cE:function(a,b){return this.jk(a,b,null,null)},
ji:function(a,b,c){if($.G===C.e)return a.$2(b,c)
return P.pr(null,null,this,a,b,c)},
jh:function(a,b,c){return this.ji(a,b,c,null,null,null)},
ja:function(a){return a},
ep:function(a){return this.ja(a,null,null,null)}}
P.jV.prototype={
$0:function(){return this.a.es(this.b)}}
P.jU.prototype={
$0:function(){return this.a.jj(this.b)}}
P.jW.prototype={
$1:function(a){return this.a.jm(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jQ.prototype={
ga_:function(a){var u=new P.ec(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
a3:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.f8(b)
return t}},
f8:function(a){var u=this.d
if(u==null)return!1
return this.bQ(this.d8(u,a),a)>=0},
m:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d1(u==null?s.b=P.lG():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d1(t==null?s.c=P.lG():t,b)}else return s.eY(0,b)},
eY:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.lG()
u=s.d3(b)
t=r[u]
if(t==null)r[u]=[s.bN(b)]
else{if(s.bQ(t,b)>=0)return!1
t.push(s.bN(b))}return!0},
Y:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.hC(this.c,b)
else return this.hB(0,b)},
hB:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d8(r,b)
t=s.bQ(u,b)
if(t<0)return!1
s.dr(u.splice(t,1)[0])
return!0},
d1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bN(b)
return!0},
hC:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dr(u)
delete a[b]
return!0},
dd:function(){this.r=1073741823&this.r+1},
bN:function(a){var u,t=this,s=new P.jR(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dd()
return s},
dr:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dd()},
d3:function(a){return J.cT(a)&1073741823},
d8:function(a,b){return a[this.d3(b)]},
bQ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.jR.prototype={}
P.ec.prototype={
gL:function(a){return this.d},
B:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bG(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.hf.prototype={}
P.hr.prototype={
$2:function(a,b){this.a.j(0,a,b)},
$S:4}
P.hs.prototype={$ir:1,$in:1,$it:1}
P.v.prototype={
ga_:function(a){return new H.ck(a,this.gk(a))},
I:function(a,b){return this.h(a,b)},
jq:function(a,b){var u,t,s=this,r=H.d([],[H.pH(s,a,"v",0)])
C.b.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.e(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t;++u}return r},
jp:function(a){return this.jq(a,!0)},
iv:function(a,b,c,d){var u
P.b4(b,c,this.gk(a))
for(u=b;u<c;++u)this.j(a,u,d)},
i:function(a){return P.lq(a,"[","]")}}
P.hv.prototype={}
P.hw.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:4}
P.ak.prototype={
q:function(a,b){var u,t
for(u=J.bb(this.gal(a));u.B();){t=u.gL(u)
b.$2(t,this.h(a,t))}},
gk:function(a){return J.af(this.gal(a))},
i:function(a){return P.lw(a)},
$iQ:1}
P.k7.prototype={
j:function(a,b,c){throw H.c(P.x("Cannot modify unmodifiable map"))}}
P.hx.prototype={
h:function(a,b){return J.B(this.a,b)},
j:function(a,b,c){J.le(this.a,b,c)},
q:function(a,b){J.lg(this.a,b)},
gk:function(a){return J.af(this.a)},
i:function(a){return J.ap(this.a)},
$iQ:1}
P.dO.prototype={}
P.jX.prototype={
i:function(a){return P.lq(this,"{","}")},
I:function(a,b){var u,t,s
P.mi(b,"index")
for(u=P.oH(this,this.r),t=0;u.B();){s=u.d
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
$ir:1,
$in:1}
P.ed.prototype={}
P.eI.prototype={}
P.f9.prototype={
iL:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b4(a0,a1,b.length)
u=$.nq()
if(typeof a1!=="number")return H.e(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.ky(C.a.F(b,n))
j=H.ky(C.a.F(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.T("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.W("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.dt(m)
s=n
continue}}throw H.c(P.P("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.lW(b,p,a1,q,o,f)
else{e=C.c.bg(f-1,4)+1
if(e===1)throw H.c(P.P(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aW(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lW(b,p,a1,q,o,d)
else{e=C.c.bg(d,4)
if(e===1)throw H.c(P.P(c,b,a1))
if(e>1)b=C.a.aW(b,a1,a1,e===2?"==":"=")}return b}}
P.fa.prototype={}
P.fi.prototype={}
P.fn.prototype={}
P.fB.prototype={}
P.j9.prototype={
git:function(){return C.G}}
P.jb.prototype={
cg:function(a){var u,t,s,r=P.b4(0,null,a.length)
if(typeof r!=="number")return r.n()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.ke(t)
if(s.fs(a,0,r)!==r)s.dv(J.nw(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oZ(0,s.b,t.length)))}}
P.ke.prototype={
dv:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fs:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.T(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dv(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ja.prototype={
cg:function(a){var u,t,s,r,q,p,o,n,m=P.ov(!1,a,0,null)
if(m!=null)return m
u=P.b4(0,null,J.af(a))
t=P.mR(a,0,u)
if(t>0){s=P.cx(a,0,t)
if(t===u)return s
r=new P.W(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.W("")
o=new P.kd(!1,r)
o.c=p
o.ih(a,q,u)
if(o.e>0){H.j(P.P("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.dt(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.kd.prototype={
ih:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bw(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.af()
if((r&192)!==128){q=P.P(k+C.c.bd(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.r,q)
if(j<=C.r[q]){q=P.P("Overlong encoding of 0x"+C.c.bd(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.c.bd(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.dt(j)
l.c=!1}if(typeof c!=="number")return H.e(c)
q=s<c
for(;q;){p=P.mR(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cx(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.D()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.c.bd(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.P(k+C.c.bd(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.bu.prototype={}
P.aq.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.aq&&this.a===b.a&&!0},
aR:function(a,b){return C.c.aR(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.aN(u,30))&1073741823},
i:function(a){var u=this,t=P.nJ(H.oe(u)),s=P.d1(H.oc(u)),r=P.d1(H.o8(u)),q=P.d1(H.o9(u)),p=P.d1(H.ob(u)),o=P.d1(H.od(u)),n=P.nK(H.oa(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.be.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.be&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aR:function(a,b){return C.c.aR(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fz(),q=this.a
if(q<0)return"-"+new P.be(0-q).i(0)
u=r.$1(C.c.a6(q,6e7)%60)
t=r.$1(C.c.a6(q,1e6)%60)
s=new P.fy().$1(q%1e6)
return""+C.c.a6(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
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
P.bf.prototype={}
P.ct.prototype={
i:function(a){return"Throw of null."}}
P.az.prototype={
gbP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbO:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbP()+o+u
if(!q.a)return t
s=q.gbO()
r=P.lp(q.b)
return t+s+": "+r}}
P.bO.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.fQ.prototype={
gbP:function(){return"RangeError"},
gbO:function(){var u,t=this.b
if(typeof t!=="number")return t.D()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.j2.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iZ.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dC.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fk.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.lp(u)+"."}}
P.i2.prototype={
i:function(a){return"Out of Memory"},
$ibf:1}
P.dA.prototype={
i:function(a){return"Stack Overflow"},
$ibf:1}
P.fs.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e4.prototype={
i:function(a){return"Exception: "+this.a}}
P.fL.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=i!=null&&""!==i?"FormatException: "+H.f(i):"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.T(f,q)
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
k=""}j=C.a.u(f,m,n)
return h+l+j+k+"\n"+C.a.l(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.u.prototype={}
P.n.prototype={
gk:function(a){var u,t=this.ga_(this)
for(u=0;t.B();)++u
return u},
I:function(a,b){var u,t,s
P.mi(b,"index")
for(u=this.ga_(this),t=0;u.B();){s=u.gL(u)
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
i:function(a){return P.nP(this,"(",")")}}
P.hg.prototype={}
P.t.prototype={$ir:1,$in:1}
P.Q.prototype={}
P.Z.prototype={
gH:function(a){return P.R.prototype.gH.call(this,this)},
i:function(a){return"null"}}
P.ao.prototype={}
P.R.prototype={constructor:P.R,$iR:1,
w:function(a,b){return this===b},
gH:function(a){return H.cu(this)},
i:function(a){return"Instance of '"+H.f(H.cv(this))+"'"},
toString:function(){return this.i(this)}}
P.lz.prototype={}
P.aw.prototype={}
P.l.prototype={}
P.W.prototype={
gk:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.j7.prototype={
$2:function(a,b){var u,t,s,r=J.c5(b).ct(b,"=")
if(r===-1){if(b!=="")J.le(a,P.lK(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.ab(b,r+1)
s=this.a
J.le(a,P.lK(u,0,u.length,s,!0),P.lK(t,0,t.length,s,!0))}return a}}
P.j4.prototype={
$2:function(a,b){throw H.c(P.P("Illegal IPv4 address, "+a,this.a,b))}}
P.j5.prototype={
$2:function(a,b){throw H.c(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.j6.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.by(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.D()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bX.prototype={
geA:function(){return this.b},
gcs:function(a){var u=this.c
if(u==null)return""
if(C.a.ai(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbC:function(a){var u=this.d
if(u==null)return P.mG(this.a)
return u},
gcC:function(a){var u=this.f
return u==null?"":u},
ge0:function(){var u=this.r
return u==null?"":u},
cD:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.ai(u,"/"))u="/"+u
s=P.lI(null,0,0,b)
return new P.bX(q,o,m,n,u,s,r.r)},
gaV:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.l
u=this.Q=new P.dO(P.mw(t==null?"":t),[u,u])
t=u}return t},
ge1:function(){return this.c!=null},
ge4:function(){return this.f!=null},
ge2:function(){return this.r!=null},
i:function(a){var u,t,s,r=this,q=r.y
if(q==null){q=r.a
u=q.length!==0?H.f(q)+":":""
t=r.c
s=t==null
if(!s||q==="file"){q=u+"//"
u=r.b
if(u.length!==0)q=q+H.f(u)+"@"
if(!s)q+=t
u=r.d
if(u!=null)q=q+":"+H.f(u)}else q=u
q+=r.e
u=r.f
if(u!=null)q=q+"?"+u
u=r.r
if(u!=null)q=q+"#"+u
q=r.y=q.charCodeAt(0)==0?q:q}return q},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.M(b).$ilD)if(s.a==b.gbH())if(s.c!=null===b.ge1())if(s.b==b.geA())if(s.gcs(s)==b.gcs(b))if(s.gbC(s)==b.gbC(b))if(s.e===b.gek(b)){u=s.f
t=u==null
if(!t===b.ge4()){if(t)u=""
if(u===b.gcC(b)){u=s.r
t=u==null
if(!t===b.ge2()){if(t)u=""
u=u===b.ge0()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.i(0)):u},
$ilD:1,
gbH:function(){return this.a},
gek:function(a){return this.e}}
P.k8.prototype={
$1:function(a){throw H.c(P.P("Invalid port",this.a,this.b+1))}}
P.k9.prototype={
$1:function(a){return P.kc(C.P,a,C.f,!1)}}
P.kb.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.kc(C.h,a,C.f,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.kc(C.h,b,C.f,!0))}}}
P.ka.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.bb(b),t=this.a;u.B();)t.$2(a,u.gL(u))}}
P.j3.prototype={
gez:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.bz(u,"?",o)
s=u.length
if(t>=0){r=P.cN(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jx("data",p,p,p,P.cN(u,o,s,C.u,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kj.prototype={
$1:function(a){return new Uint8Array(96)}}
P.ki.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.nx(u,0,96,b)
return u},
$S:22}
P.kk.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.kl.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.jY.prototype={
ge1:function(){return this.c>0},
ge3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.p()
t=this.e
if(typeof t!=="number")return H.e(t)
t=u+1<t
u=t}else u=!1
return u},
ge4:function(){var u=this.f
if(typeof u!=="number")return u.D()
return u<this.r},
ge2:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.a.ai(this.a,"http")},
gdc:function(){return this.b===5&&C.a.ai(this.a,"https")},
gbH:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gda())q=t.x="http"
else if(t.gdc()){t.x="https"
q="https"}else if(q===4&&C.a.ai(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.ai(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
geA:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcs:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbC:function(a){var u,t=this
if(t.ge3()){u=t.d
if(typeof u!=="number")return u.p()
return P.by(C.a.u(t.a,u+1,t.e),null,null)}if(t.gda())return 80
if(t.gdc())return 443
return 0},
gek:function(a){return C.a.u(this.a,this.e,this.f)},
gcC:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.D()
return u<t?C.a.u(this.a,u+1,t):""},
ge0:function(){var u=this.r,t=this.a
return u<t.length?C.a.ab(t,u+1):""},
gaV:function(){var u=this,t=u.f
if(typeof t!=="number")return t.D()
if(t>=u.r)return C.Q
t=P.l
return new P.dO(P.mw(u.gcC(u)),[t,t])},
cD:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbH(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.ge3()?p.gbC(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.ai(t,"/"))t="/"+t
r=P.lI(o,0,0,b)
s=p.r
q=s<l.length?C.a.ab(l,s+1):o
return new P.bX(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.M(b).$ilD&&this.a===b.i(0)},
i:function(a){return this.a},
$ilD:1}
P.jx.prototype={}
W.p.prototype={}
W.eZ.prototype={
gk:function(a){return a.length}}
W.f0.prototype={
i:function(a){return String(a)}}
W.f1.prototype={
i:function(a){return String(a)}}
W.bD.prototype={$ibD:1}
W.bF.prototype={
cI:function(a,b,c){if(c!=null)return a.getContext(b,P.py(c))
return a.getContext(b)},
eD:function(a,b){return this.cI(a,b,null)},
$ibF:1}
W.bc.prototype={
gk:function(a){return a.length}}
W.fo.prototype={
gk:function(a){return a.length}}
W.H.prototype={$iH:1}
W.cc.prototype={
gk:function(a){return a.length}}
W.fp.prototype={}
W.as.prototype={}
W.aH.prototype={}
W.fq.prototype={
gk:function(a){return a.length}}
W.fr.prototype={
gk:function(a){return a.length}}
W.ft.prototype={
gk:function(a){return a.length}}
W.fv.prototype={
i:function(a){return String(a)}}
W.d3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[[P.al,P.ao]]},
$iy:1,
$ay:function(){return[[P.al,P.ao]]},
$av:function(){return[[P.al,P.ao]]},
$in:1,
$an:function(){return[[P.al,P.ao]]},
$it:1,
$at:function(){return[[P.al,P.ao]]}}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaG(a))+" x "+H.f(this.gaD(a))},
w:function(a,b){var u
if(b==null)return!1
u=J.M(b)
return!!u.$ial&&a.left===u.gbB(b)&&a.top===u.gbE(b)&&this.gaG(a)===u.gaG(b)&&this.gaD(a)===u.gaD(b)},
gH:function(a){return W.mF(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaG(a)),C.d.gH(this.gaD(a)))},
gdE:function(a){return a.bottom},
gaD:function(a){return a.height},
gbB:function(a){return a.left},
gbD:function(a){return a.right},
gbE:function(a){return a.top},
gaG:function(a){return a.width},
$ial:1,
$aal:function(){return[P.ao]}}
W.fw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[P.l]},
$iy:1,
$ay:function(){return[P.l]},
$av:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$it:1,
$at:function(){return[P.l]}}
W.fx.prototype={
gk:function(a){return a.length}}
W.jv.prototype={
gk:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
m:function(a,b){this.a.appendChild(b)
return b},
ga_:function(a){var u=this.jp(this)
return new J.ab(u,u.length)},
$ar:function(){return[W.a0]},
$av:function(){return[W.a0]},
$an:function(){return[W.a0]},
$at:function(){return[W.a0]}}
W.a0.prototype={
gcd:function(a){return new W.jv(a,a.children)},
gdG:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.D()
if(s<0)s=-s*0
if(typeof r!=="number")return r.D()
if(r<0)r=-r*0
return new P.al(u,t,s,r,[P.ao])},
i:function(a){return a.localName},
$ia0:1}
W.m.prototype={$im:1}
W.h.prototype={
i7:function(a,b,c,d){if(c!=null)this.eZ(a,b,c,!1)},
eZ:function(a,b,c,d){return a.addEventListener(b,H.c3(c,1),!1)}}
W.aA.prototype={$iaA:1}
W.ce.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aA]},
$iy:1,
$ay:function(){return[W.aA]},
$av:function(){return[W.aA]},
$in:1,
$an:function(){return[W.aA]},
$it:1,
$at:function(){return[W.aA]},
$ice:1}
W.fG.prototype={
gk:function(a){return a.length}}
W.fK.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.fN.prototype={
gk:function(a){return a.length}}
W.cg.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.A]},
$iy:1,
$ay:function(){return[W.A]},
$av:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$it:1,
$at:function(){return[W.A]}}
W.bH.prototype={
iU:function(a,b,c,d){return a.open(b,c,!0)},
$ibH:1}
W.fO.prototype={
$1:function(a){return a.responseText}}
W.fP.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.status
if(typeof q!=="number")return q.bG()
u=q>=200&&q<300
t=q>307&&q<400
q=u||q===0||q===304||t
s=this.b
if(q)s.ce(0,r)
else s.dH(a)}}
W.ch.prototype={}
W.aZ.prototype={$iaZ:1,
gdI:function(a){return a.data}}
W.ci.prototype={$ici:1}
W.fh.prototype={$ia0:1,$iA:1}
W.bL.prototype={$ibL:1}
W.ht.prototype={
i:function(a){return String(a)}}
W.hO.prototype={
gk:function(a){return a.length}}
W.co.prototype={$ico:1}
W.hP.prototype={
h:function(a,b){return P.b8(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
gal:function(a){var u=H.d([],[P.l])
this.q(a,new W.hQ(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$aak:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
W.hQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hR.prototype={
h:function(a,b){return P.b8(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
gal:function(a){var u=H.d([],[P.l])
this.q(a,new W.hS(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$aak:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aM.prototype={$iaM:1}
W.hT.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aM]},
$iy:1,
$ay:function(){return[W.aM]},
$av:function(){return[W.aM]},
$in:1,
$an:function(){return[W.aM]},
$it:1,
$at:function(){return[W.aM]}}
W.aN.prototype={$iaN:1}
W.ju.prototype={
j:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
ga_:function(a){var u=this.a.childNodes
return new W.d7(u,u.length)},
gk:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$ar:function(){return[W.A]},
$av:function(){return[W.A]},
$an:function(){return[W.A]},
$at:function(){return[W.A]}}
W.A.prototype={
jd:function(a,b){var u,t
try{u=a.parentNode
J.nu(u,b,a)}catch(t){H.a6(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eK(a):u},
hD:function(a,b,c){return a.replaceChild(b,c)},
$iA:1}
W.dp.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.A]},
$iy:1,
$ay:function(){return[W.A]},
$av:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$it:1,
$at:function(){return[W.A]}}
W.aO.prototype={$iaO:1,
gk:function(a){return a.length}}
W.i4.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aO]},
$iy:1,
$ay:function(){return[W.aO]},
$av:function(){return[W.aO]},
$in:1,
$an:function(){return[W.aO]},
$it:1,
$at:function(){return[W.aO]}}
W.cw.prototype={$icw:1}
W.ig.prototype={
h:function(a,b){return P.b8(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
gal:function(a){var u=H.d([],[P.l])
this.q(a,new W.ih(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$aak:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
W.ih.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ij.prototype={
gk:function(a){return a.length}}
W.aQ.prototype={$iaQ:1}
W.is.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aQ]},
$iy:1,
$ay:function(){return[W.aQ]},
$av:function(){return[W.aQ]},
$in:1,
$an:function(){return[W.aQ]},
$it:1,
$at:function(){return[W.aQ]}}
W.aR.prototype={$iaR:1}
W.it.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aR]},
$iy:1,
$ay:function(){return[W.aR]},
$av:function(){return[W.aR]},
$in:1,
$an:function(){return[W.aR]},
$it:1,
$at:function(){return[W.aR]}}
W.aS.prototype={$iaS:1,
gk:function(a){return a.length}}
W.ix.prototype={
h:function(a,b){return a.getItem(b)},
j:function(a,b,c){a.setItem(b,c)},
q:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gal:function(a){var u=H.d([],[P.l])
this.q(a,new W.iy(u))
return u},
gk:function(a){return a.length},
$aak:function(){return[P.l,P.l]},
$iQ:1,
$aQ:function(){return[P.l,P.l]}}
W.iy.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aB.prototype={$iaB:1}
W.aT.prototype={$iaT:1}
W.aC.prototype={$iaC:1}
W.iD.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aC]},
$iy:1,
$ay:function(){return[W.aC]},
$av:function(){return[W.aC]},
$in:1,
$an:function(){return[W.aC]},
$it:1,
$at:function(){return[W.aC]}}
W.iE.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aT]},
$iy:1,
$ay:function(){return[W.aT]},
$av:function(){return[W.aT]},
$in:1,
$an:function(){return[W.aT]},
$it:1,
$at:function(){return[W.aT]}}
W.iK.prototype={
gk:function(a){return a.length}}
W.aU.prototype={$iaU:1}
W.bQ.prototype={$ibQ:1}
W.iN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aU]},
$iy:1,
$ay:function(){return[W.aU]},
$av:function(){return[W.aU]},
$in:1,
$an:function(){return[W.aU]},
$it:1,
$at:function(){return[W.aU]}}
W.iO.prototype={
gk:function(a){return a.length}}
W.bp.prototype={}
W.j8.prototype={
i:function(a){return String(a)}}
W.jk.prototype={
gk:function(a){return a.length}}
W.bs.prototype={
gil:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.x("deltaY is not supported"))},
gik:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.x("deltaX is not supported"))},
$ibs:1}
W.cD.prototype={
hE:function(a,b){return a.requestAnimationFrame(H.c3(b,1))},
fh:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jw.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.H]},
$iy:1,
$ay:function(){return[W.H]},
$av:function(){return[W.H]},
$in:1,
$an:function(){return[W.H]},
$it:1,
$at:function(){return[W.H]}}
W.e_.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.M(b)
return!!u.$ial&&a.left===u.gbB(b)&&a.top===u.gbE(b)&&a.width===u.gaG(b)&&a.height===u.gaD(b)},
gH:function(a){return W.mF(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gaD:function(a){return a.height},
gaG:function(a){return a.width}}
W.jN.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aJ]},
$iy:1,
$ay:function(){return[W.aJ]},
$av:function(){return[W.aJ]},
$in:1,
$an:function(){return[W.aJ]},
$it:1,
$at:function(){return[W.aJ]}}
W.ej.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.A]},
$iy:1,
$ay:function(){return[W.A]},
$av:function(){return[W.A]},
$in:1,
$an:function(){return[W.A]},
$it:1,
$at:function(){return[W.A]}}
W.jZ.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aS]},
$iy:1,
$ay:function(){return[W.aS]},
$av:function(){return[W.aS]},
$in:1,
$an:function(){return[W.aS]},
$it:1,
$at:function(){return[W.aS]}}
W.k3.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aB]},
$iy:1,
$ay:function(){return[W.aB]},
$av:function(){return[W.aB]},
$in:1,
$an:function(){return[W.aB]},
$it:1,
$at:function(){return[W.aB]}}
W.jy.prototype={}
W.jz.prototype={
$1:function(a){return this.a.$1(a)}}
W.N.prototype={
ga_:function(a){return new W.d7(a,this.gk(a))}}
W.d7.prototype={
B:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.B(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gL:function(a){return this.d}}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.er.prototype={}
W.es.prototype={}
W.ew.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.cL.prototype={}
W.cM.prototype={}
W.eD.prototype={}
W.eE.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
W.eO.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.eR.prototype={}
W.eS.prototype={}
P.k0.prototype={
cr:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bf:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.M(a)
if(!!u.$iaq)return new Date(a.a)
if(!!u.$ioj)throw H.c(P.j_("structured clone of RegExp"))
if(!!u.$iaA)return a
if(!!u.$ibD)return a
if(!!u.$ice)return a
if(!!u.$iaZ)return a
if(!!u.$icq||!!u.$ibn||!!u.$ico)return a
if(!!u.$iQ){t=p.cr(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.q(a,new P.k1(o,p))
return o.a}if(!!u.$it){t=p.cr(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.ii(a,t)}if(!!u.$inT){t=p.cr(a)
u=p.b
s=u.length
if(t>=s)return H.b(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.b(u,t)
u[t]=q
p.iB(a,new P.k2(o,p))
return o.b}throw H.c(P.j_("structured clone of other type"))},
ii:function(a,b){var u,t=J.bw(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
if(typeof s!=="number")return H.e(s)
u=0
for(;u<s;++u){q=this.bf(t.h(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.k1.prototype={
$2:function(a,b){this.a.a[a]=this.b.bf(b)},
$S:4}
P.k2.prototype={
$2:function(a,b){this.a.b[a]=this.b.bf(b)},
$S:4}
P.eH.prototype={$iaZ:1,
gdI:function(a){return this.a}}
P.ku.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.ez.prototype={
iB:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fH.prototype={
gbm:function(){var u=this.b,t=H.n1(u,"v",0)
return new H.cl(new H.jl(u,new P.fI(),[t]),new P.fJ(),[t,W.a0])},
j:function(a,b,c){var u=this.gbm()
J.ny(u.b.$1(J.lf(u.a,b)),c)},
m:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.af(this.gbm().a)},
h:function(a,b){var u=this.gbm()
return u.b.$1(J.lf(u.a,b))},
ga_:function(a){var u=P.lv(this.gbm(),!1,W.a0)
return new J.ab(u,u.length)},
$ar:function(){return[W.a0]},
$av:function(){return[W.a0]},
$an:function(){return[W.a0]},
$at:function(){return[W.a0]}}
P.fI.prototype={
$1:function(a){return!!J.M(a).$ia0}}
P.fJ.prototype={
$1:function(a){return H.k(a,"$ia0")}}
P.jS.prototype={
gbD:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return u+t},
gdE:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
w:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.M(b)
if(!!u.$ial){t=q.a
if(t==u.gbB(b)){s=q.b
if(s==u.gbE(b)){r=q.c
if(typeof t!=="number")return t.p()
if(typeof r!=="number")return H.e(r)
if(t+r===u.gbD(b)){t=q.d
if(typeof s!=="number")return s.p()
if(typeof t!=="number")return H.e(t)
u=s+t===u.gdE(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cT(t),r=u.b,q=J.cT(r),p=u.c
if(typeof t!=="number")return t.p()
if(typeof p!=="number")return H.e(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.p()
if(typeof t!=="number")return H.e(t)
t=C.c.gH(r+t)
return P.oG(P.jP(P.jP(P.jP(P.jP(0,s),q),p),t))}}
P.al.prototype={
gbB:function(a){return this.a},
gbE:function(a){return this.b},
gaG:function(a){return this.c},
gaD:function(a){return this.d}}
P.b_.prototype={$ib_:1}
P.hn.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.b_]},
$av:function(){return[P.b_]},
$in:1,
$an:function(){return[P.b_]},
$it:1,
$at:function(){return[P.b_]}}
P.b3.prototype={$ib3:1}
P.i0.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.b3]},
$av:function(){return[P.b3]},
$in:1,
$an:function(){return[P.b3]},
$it:1,
$at:function(){return[P.b3]}}
P.i7.prototype={
gk:function(a){return a.length}}
P.iA.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.l]},
$av:function(){return[P.l]},
$in:1,
$an:function(){return[P.l]},
$it:1,
$at:function(){return[P.l]}}
P.o.prototype={
gcd:function(a){return new P.fH(a,new W.ju(a))}}
P.b5.prototype={$ib5:1}
P.iP.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.b5]},
$av:function(){return[P.b5]},
$in:1,
$an:function(){return[P.b5]},
$it:1,
$at:function(){return[P.b5]}}
P.ea.prototype={}
P.eb.prototype={}
P.em.prototype={}
P.en.prototype={}
P.ex.prototype={}
P.ey.prototype={}
P.eF.prototype={}
P.eG.prototype={}
P.bR.prototype={$ir:1,
$ar:function(){return[P.u]},
$in:1,
$an:function(){return[P.u]},
$it:1,
$at:function(){return[P.u]}}
P.f4.prototype={
gk:function(a){return a.length}}
P.f5.prototype={
h:function(a,b){return P.b8(a.get(b))},
q:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b8(u.value[1]))}},
gal:function(a){var u=H.d([],[P.l])
this.q(a,new P.f6(u))
return u},
gk:function(a){return a.size},
j:function(a,b,c){throw H.c(P.x("Not supported"))},
$aak:function(){return[P.l,null]},
$iQ:1,
$aQ:function(){return[P.l,null]}}
P.f6.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f7.prototype={
gk:function(a){return a.length}}
P.bC.prototype={}
P.i1.prototype={
gk:function(a){return a.length}}
P.dX.prototype={}
P.dw.prototype={
jn:function(a,b,c,d,e,f,g){var u,t=J.M(g)
if(!!t.$iaZ)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pz(g))
return}if(!!t.$ici)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cU("Incorrect number or type of arguments"))}}
P.iv.prototype={
gk:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return P.b8(a.item(b))},
j:function(a,b,c){throw H.c(P.x("Cannot assign element of immutable List."))},
I:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[[P.Q,,,]]},
$av:function(){return[[P.Q,,,]]},
$in:1,
$an:function(){return[[P.Q,,,]]},
$it:1,
$at:function(){return[[P.Q,,,]]}}
P.et.prototype={}
P.eu.prototype={}
K.f_.prototype={
aU:function(a,b){return!0},
i:function(a){return"all"}}
K.d8.prototype={
aU:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].aU(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.dh.prototype={}
K.b2.prototype={
aU:function(a,b){return!this.eJ(0,b)},
i:function(a){return"!["+this.cM(0)+"]"}}
K.ik.prototype={
eP:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.i("May not create a Set with zero characters."))
u=P.u
t=new H.C([u,P.bu])
for(s=new H.ck(a,a.gk(a));s.B();)t.j(0,s.d,!0)
r=P.lv(t.gal(t),!0,u)
C.b.eH(r)
this.a=r},
aU:function(a,b){return C.b.a3(this.a,b)},
i:function(a){return P.cx(this.a,0,null)}}
L.dB.prototype={
v:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dL(this.a.R(0,b))
r.a=H.d([],[K.dh])
r.c=!1
this.c.push(r)
return r},
iw:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.aU(0,a))return r}return},
i:function(a){return this.b},
dq:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.a3(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gal(n),n=n.ga_(n);n.B();){t=n.gL(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.a3(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.q)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dI.prototype={
i:function(a){var u=H.n8(this.b,"\n","\\n"),t=H.n8(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dJ.prototype={
i:function(a){return this.b}}
L.iL.prototype={
R:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dB(this,b)
u.c=H.d([],[L.dL])
this.a.j(0,b,u)}return u},
be:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dJ(a)
u=P.l
t.c=new H.C([u,u])
this.b.j(0,a,t)}return t},
ew:function(a){return this.jr(a)},
jr:function(a){var u=this
return P.p3(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$ew(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.u]
e=H.d([],f)
d=H.d([],f)
c=H.d([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.jb(c,0)
else{if(!t.B()){s=3
break}l=t.d}d.push(l);++o
k=g.iw(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cx(d,0,null)
throw H.c(P.i("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.j(P.x("removeRange"))
P.b4(0,m,d.length)
d.splice(0,m-0)
C.b.bt(c,d)
d=H.d([],f)
e=H.d([],f)
g=u.d
s=!u.c.a3(0,p.a)?7:8
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
if(g.d!=null){j=P.cx(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dI(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.a3(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.oE()
case 1:return P.oF(q)}}},L.dI)},
i:function(a){var u,t=new P.W(""),s=this.d
if(s!=null)t.a=s.dq()+"\n"
for(s=this.a,s=s.gjs(s),s=s.ga_(s);s.B();){u=s.gL(s)
if(u!=this.d)t.a+=u.dq()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dL.prototype={
i:function(a){return this.b.b+": "+this.cM(0)}}
O.bd.prototype={
bI:function(a){var u=this
u.a=H.d([],[a])
u.d=u.c=u.b=null},
cJ:function(a,b,c){this.b=b
this.c=a
this.d=c},
bi:function(a,b){return this.cJ(a,null,b)},
hf:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
eR:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
ga_:function(a){var u=this.a
return new J.ab(u,u.length)},
I:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
m:function(a,b){var u,t,s=this,r=[H.n1(s,"bd",0)]
if(s.hf(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.eR(t,H.d([b],r))}},
$in:1}
O.cn.prototype={
gk:function(a){return this.a.length},
gC:function(){var u=this.b
return u==null?this.b=D.L():u},
aH:function(){var u=this.b
if(u!=null)u.J(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gaE(u)
else return V.dj()},
en:function(a){var u=this.a
if(a==null)u.push(V.dj())
else u.push(a)
this.aH()},
cB:function(){var u=this.a
if(u.length>0){u.pop()
this.aH()}}}
E.fb.prototype={}
E.aI.prototype={
d0:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.ab(u,u.length);u.B();){t=u.d
if(t.f==null)t.d0()}},
scK:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gC().Y(0,s.gef())
u=s.c
if(u!=null)u.gC().m(0,s.gef())
t=new D.w("shape",r,s.c)
t.b=!0
s.ar(t)}},
saY:function(a){var u,t,s=this,r=s.f
if(r!=a){if(r!=null)r.gC().Y(0,s.geh())
u=s.f
s.f=a
if(a!=null)a.gC().m(0,s.geh())
s.d0()
t=new D.w("technique",u,s.f)
t.b=!0
s.ar(t)}},
sb8:function(a){var u,t,s=this
if(!J.D(s.r,a)){u=s.r
if(u!=null)u.gC().Y(0,s.ged())
if(a!=null)a.gC().m(0,s.ged())
s.r=a
t=new D.w("mover",u,a)
t.b=!0
s.ar(t)}},
b5:function(){var u=this.d,t=u!=null?V.mm(null,u.b5()):null
for(u=this.y.a,u=new J.ab(u,u.length);u.B();)t=V.mm(t,u.d.b5())
return t},
jf:function(a){var u,t,s,r,q,p=this.b5(),o=V.ly(),n=p.a,m=p.d
if(typeof n!=="number")return n.p()
u=p.b
t=p.e
if(typeof u!=="number")return u.p()
s=p.c
r=p.f
if(typeof s!=="number")return s.p()
o=o.n(0,new V.a7(n+m/2,u+t/2,s+r/2))
if(t>m)m=t
if(r>m)m=r
if(m===0)return
q=a/m
this.bu(V.m9(q,q,q).l(0,V.ma(o.a,o.b,o.c)))},
bu:function(a){var u=this.c
if(u!=null)u.bu(a)
for(u=this.y.a,u=new J.ab(u,u.length);u.B();)u.d.bu(a)},
ap:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b_(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.w("matrix",u,q)
t.b=!0
s.ar(t)}r=s.f
if(r!=null)r.ap(0,b)
for(r=s.y.a,r=new J.ab(r,r.length);r.B();)r.d.ap(0,b)},
aF:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.ga1(u))
else u.a.push(t.l(0,u.ga1(u)))
u.aH()
a.eo(r.f)
u=a.dy
s=(u&&C.b).gaE(u)
if(s!=null&&r.d!=null)s.eq(a,r)
for(u=r.y.a,u=new J.ab(u,u.length);u.B();)u.d.aF(a)
a.el()
a.dx.cB()},
ar:function(a){var u=this.z
if(u!=null)u.J(a)},
X:function(){return this.ar(null)},
eg:function(a){this.e=null
this.ar(a)},
iS:function(){return this.eg(null)},
ei:function(a){this.ar(a)},
iT:function(){return this.ei(null)},
ee:function(a){this.ar(a)},
iR:function(){return this.ee(null)},
ec:function(a){this.ar(a)},
iO:function(){return this.ec(null)},
iN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.geb(),s=[{func:1,ret:-1,args:[D.ag]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.X()},
iQ:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.geb(),s=0;s<b.length;b.length===u||(0,H.q)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bg()
q.d=0
r.z=q}q.Y(0,t)}}this.X()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.ib.prototype={
eO:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aq(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cn()
t=[V.b0]
u.a=H.d([],t)
u.gC().m(0,new E.ic(s))
s.cy=u
u=new O.cn()
u.a=H.d([],t)
u.gC().m(0,new E.id(s))
s.db=u
u=new O.cn()
u.a=H.d([],t)
u.gC().m(0,new E.ie(s))
s.dx=u
u=H.d([],[O.dE])
s.dy=u
u.push(null)
s.fr=new H.C([P.l,A.dx])},
gj9:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.l(0,u.ga1(u))
s=u}return s},
gem:function(){var u,t=this,s=t.ch
if(s==null){s=t.gj9()
u=t.dx
u=t.ch=s.l(0,u.ga1(u))
s=u}return s},
geB:function(){var u,t=this,s=t.cx
if(s==null){s=t.db
s=s.ga1(s)
u=t.dx
u=t.cx=s.l(0,u.ga1(u))
s=u}return s},
eo:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaE(u):a)},
el:function(){var u=this.dy
if(u.length>1)u.pop()},
dz:function(a){var u=a.b
if(u.length===0)throw H.c(P.i("May not cache a shader with no name."))
if(this.fr.cf(0,u))throw H.c(P.i('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.j(0,u,a)}}
E.ic.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.id.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ie.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dG.prototype={
cS:function(a){this.er()},
cR:function(){return this.cS(null)},
giC:function(){var u,t=this,s=Date.now(),r=C.c.a6(P.m_(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aq(s,!1)
return u/r},
dj:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.l()
if(typeof r!=="number")return H.e(r)
u=C.d.by(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.l()
t=C.d.by(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.mr(C.n,s.gje())}},
er:function(){if(!this.cx){this.cx=!0
var u=window
C.x.fh(u)
C.x.hE(u,W.mV(new E.iJ(this),P.ao))}},
jc:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.dj()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aq(r,!1)
s.y=P.m_(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.aH()
r=s.db
C.b.sk(r.a,0)
r.aH()
r=s.dx
C.b.sk(r.a,0)
r.aH()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.aF(p.e)}}catch(q){u=H.a6(q)
t=H.bx(q)
P.eW("Error: "+H.f(u))
P.eW("Stack: "+H.f(t))
throw H.c(u)}}}
E.iJ.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.jc()}}}
Z.dU.prototype={}
Z.cX.prototype={
aB:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.a6(s)
t=P.i('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.dV.prototype={}
Z.bE.prototype={
ak:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aB:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aB(a)},
ey:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aF:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
ej:function(a){this.aB(a)
this.aF(a)
this.ey(a)},
i:function(a){var u,t,s,r,q=[P.l],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].i(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.ap(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.v(p,", ")+"\nAttrs:   "+C.b.v(r,", ")}}
Z.cY.prototype={}
Z.bI.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cv(this.c))+"'")+"]"}}
Z.aW.prototype={
gcL:function(a){var u=this.a,t=(u&$.aF().a)!==0?3:0
if((u&$.aE().a)!==0)t+=3
if((u&$.aD().a)!==0)t+=3
if((u&$.ba().a)!==0)t+=2
if((u&$.bA().a)!==0)t+=3
if((u&$.bz().a)!==0)t+=3
if((u&$.cR().a)!==0)t+=4
if((u&$.c8().a)!==0)++t
return(u&$.b9().a)!==0?t+4:t},
ib:function(a){var u,t=$.aF(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aE()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aD()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bA()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.c8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0)if(u===a)return t
return $.np()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.aW))return!1
return this.a===b.a},
i:function(a){var u=H.d([],[P.l]),t=this.a
if((t&$.aF().a)!==0)u.push("Pos")
if((t&$.aE().a)!==0)u.push("Norm")
if((t&$.aD().a)!==0)u.push("Binm")
if((t&$.ba().a)!==0)u.push("Txt2D")
if((t&$.bA().a)!==0)u.push("TxtCube")
if((t&$.bz().a)!==0)u.push("Clr3")
if((t&$.cR().a)!==0)u.push("Clr4")
if((t&$.c8().a)!==0)u.push("Weight")
if((t&$.b9().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.v(u,"|")}}
D.fe.prototype={}
D.bg.prototype={
m:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.ag]}]):u).push(b)},
Y:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.a3(s,b)
if(s===!0){s=t.a
u=(s&&C.b).Y(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.a3(s,b)
if(s===!0){s=t.b
u=(s&&C.b).Y(s,b)||u}return u},
J:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.ag()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.q(P.lv(u,!0,{func:1,ret:-1,args:[D.ag]}),new D.fE(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.ag]}])
C.b.q(u,new D.fF(q))}return!0},
ir:function(){return this.J(null)},
aX:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.J(u)}}}}
D.fE.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fF.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ag.prototype={}
D.bJ.prototype={}
D.bK.prototype={}
D.w.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
O.ko.prototype={
at:function(a,b,c){return this.j7(a,b,!1)},
j7:function(a,b,c){var u=0,t=P.a4(null),s=this
var $async$at=P.a5(function(d,e){if(d===1)return P.a1(e,t)
while(true)switch(u){case 0:u=2
return P.aa(s.as(H.d(a.split("\n"),[P.l]),b,!1),$async$at)
case 2:return P.a2(null,t)}})
return P.a3($async$at,t)},
as:function(a,b,c){return this.j5(a,b,!1)},
j5:function(a,b,c){var u=0,t=P.a4(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$as=P.a5(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.D()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.b(a,m)
u=1
break}u=9
return P.aa(o.a4(a[m],b,!1),$async$as)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a6(i)
m=j
if(typeof m!=="number"){s=m.p()
u=1
break}throw H.c(P.i("Line "+H.f(m+1)+": "+H.f(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.p()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.a2(s,t)
case 2:return P.a1(q,t)}})
return P.a3($async$as,t)},
a4:function(a,b,c){return this.j3(a,b,!1)},
j3:function(a,b,c){var u=0,t=P.a4(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f
var $async$a4=P.a5(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:r=4
n=J.lU(a,"#")
k=n
if(typeof k!=="number"){s=k.bG()
u=1
break}if(k>=0)a=J.lV(a,0,n)
a=J.lh(a)
if(J.af(a)<=0){u=1
break}m=O.mU(a)
if(J.af(m)<1){u=1
break}case 7:switch(J.B(m,0)){case"newmtl":u=9
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
case 9:k=J.B(m,1)
j=O.m8()
o.c=j
o.b.j(0,k,j)
u=1
break
case 10:i=O.b7(J.B(m,1))
o.c.r.sV(0,V.lm(i))
u=1
break
case 11:i=O.b7(J.B(m,1))
o.c.x.sV(0,V.lm(i))
u=1
break
case 12:i=O.b7(J.B(m,1))
o.c.z.sV(0,V.lm(i))
u=1
break
case 13:i=O.b7(J.B(m,1))
k=i.length
if(k!==1)H.j(P.i("Shininess may only have 1 number."))
j=o.c.z
if(0>=k){s=H.b(i,0)
u=1
break}h=i[0]
j.toString
if(h==null)h=100
if(h<=0){j.aM(new A.a_(!1,j.c.b,!1))
j.c6(0)}else{j.aM(new A.a_(!0,j.c.b,!1))
j.c6(h)}u=1
break
case 14:i=O.b7(J.B(m,1))
k=i.length
if(k!==1)H.j(P.i("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.b(i,0)
u=1
break}j.sad(0,i[0])
u=1
break
case 15:i=O.b7(J.B(m,1))
k=i.length
if(k!==1)H.j(P.i("Alpha may only have 1 number."))
j=o.c.db
if(0>=k){s=H.b(i,0)
u=1
break}k=i[0]
if(typeof k!=="number"){s=H.e(k)
u=1
break}j.sad(0,1-k)
u=1
break
case 16:u=23
return P.aa(o.c1(J.B(m,1),b),$async$a4)
case 23:u=1
break
case 17:u=24
return P.aa(o.c2(J.B(m,1),b),$async$a4)
case 24:u=1
break
case 18:u=25
return P.aa(o.c3(J.B(m,1),b),$async$a4)
case 25:u=1
break
case 19:u=26
return P.aa(o.c0(J.B(m,1),b),$async$a4)
case 26:u=1
break
case 20:u=27
return P.aa(o.bn(J.B(m,1),b),$async$a4)
case 27:u=1
break
case 21:u=28
return P.aa(o.bn(J.B(m,1),b),$async$a4)
case 28:u=1
break
case 22:u=1
break
case 8:r=2
u=6
break
case 4:r=3
f=q
l=H.a6(f)
k=P.i('Line: "'+H.f(a)+'": '+H.f(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a2(s,t)
case 2:return P.a1(q,t)}})
return P.a3($async$a4,t)},
c1:function(a,b){return this.ht(a,b)},
ht:function(a,b){var u=0,t=P.a4(null),s=this,r
var $async$c1=P.a5(function(c,d){if(c===1)return P.a1(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.r.sbc(s.a.b7(r))
return P.a2(null,t)}})
return P.a3($async$c1,t)},
c2:function(a,b){return this.hv(a,b)},
hv:function(a,b){var u=0,t=P.a4(null),s=this,r
var $async$c2=P.a5(function(c,d){if(c===1)return P.a1(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.x.sbc(s.a.b7(r))
return P.a2(null,t)}})
return P.a3($async$c2,t)},
c3:function(a,b){return this.hA(a,b)},
hA:function(a,b){var u=0,t=P.a4(null),s=this,r
var $async$c3=P.a5(function(c,d){if(c===1)return P.a1(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.z.sbc(s.a.b7(r))
return P.a2(null,t)}})
return P.a3($async$c3,t)},
c0:function(a,b){return this.hs(a,b)},
hs:function(a,b){var u=0,t=P.a4(null),s=this,r
var $async$c0=P.a5(function(c,d){if(c===1)return P.a1(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.db.sbc(s.a.b7(r))
return P.a2(null,t)}})
return P.a3($async$c0,t)},
bn:function(a,b){return this.hu(a,b)},
hu:function(a,b){var u=0,t=P.a4(null),s=this,r
var $async$bn=P.a5(function(c,d){if(c===1)return P.a1(d,t)
while(true)switch(u){case 0:r=b+"/"+a
s.c.Q.sbc(s.a.b7(r))
return P.a2(null,t)}})
return P.a3($async$bn,t)}}
O.eT.prototype={}
O.kp.prototype={
giu:function(){var u=this.Q,t=u.y.a,s=t.length
if(s===1){if(0>=s)return H.b(t,0)
return t[0]}return u},
at:function(a,b,c){return this.j8(a,b,!1)},
j8:function(a,b,c){var u=0,t=P.a4(null),s=this
var $async$at=P.a5(function(d,e){if(d===1)return P.a1(e,t)
while(true)switch(u){case 0:u=2
return P.aa(s.as(H.d(a.split("\n"),[P.l]),b,!1),$async$at)
case 2:return P.a2(null,t)}})
return P.a3($async$at,t)},
as:function(a,b,c){return this.j6(a,b,!1)},
j6:function(a,b,c){var u=0,t=P.a4(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i
var $async$as=P.a5(function(d,e){if(d===1){q=e
u=r}while(true)switch(u){case 0:j=0
case 3:if(!!0){u=4
break}m=j
l=a.length
if(typeof m!=="number"){s=m.D()
u=1
break}if(!(m<l)){u=4
break}r=6
m=j
if(m>>>0!==m||m>=l){s=H.b(a,m)
u=1
break}u=9
return P.aa(o.a4(a[m],b,!1),$async$as)
case 9:r=2
u=8
break
case 6:r=5
i=q
n=H.a6(i)
m=j
if(typeof m!=="number"){s=m.p()
u=1
break}throw H.c(P.i("Line "+H.f(m+1)+": "+H.f(n)))
u=8
break
case 5:u=2
break
case 8:m=j
if(typeof m!=="number"){s=m.p()
u=1
break}j=m+1
u=3
break
case 4:case 1:return P.a2(s,t)
case 2:return P.a1(q,t)}})
return P.a3($async$as,t)},
a4:function(a,b,c){return this.j4(a,b,!1)},
j4:function(a,b,c){var u=0,t=P.a4(null),s,r=2,q,p=[],o=this,n,m,l,k,j,i,h,g,f,e
var $async$a4=P.a5(function(d,a0){if(d===1){q=a0
u=r}while(true)switch(u){case 0:r=4
n=J.lU(a,"#")
k=n
if(typeof k!=="number"){s=k.bG()
u=1
break}if(k>=0)a=J.lV(a,0,n)
a=J.lh(a)
if(J.af(a)<=0){u=1
break}m=O.mU(a)
if(J.af(m)<1){u=1
break}case 7:switch(J.B(m,0)){case"v":u=9
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
case 9:j=O.b7(J.B(m,1))
k=j.length
if(k<3)H.j(P.i("Positions must have at least 3 numbers."))
if(k>4)H.j(P.i("Positions must have at most than 4 numbers."))
if(k===4){if(3>=k){s=H.b(j,3)
u=1
break}i=j[3]
h=$.z()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-1)<h.a))H.j(P.i("Currently, non-one w values in positions are not supported."))}i=o.b
if(0>=k){s=H.b(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.b(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.b(j,2)
u=1
break}g=[h,g,j[2]]
g=new O.eT(new V.a7(g[0],g[1],g[2]))
g.b=H.d([],[F.b6])
i.push(g)
u=1
break
case 10:j=O.b7(J.B(m,1))
k=j.length
if(k<2)H.j(P.i("Textures must have at least 2 numbers."))
if(k>3)H.j(P.i("Textures must have at most than 3 numbers."))
if(k===3){if(2>=k){s=H.b(j,2)
u=1
break}i=j[2]
h=$.z()
h.toString
if(typeof i!=="number"){s=i.n()
u=1
break}if(!(Math.abs(i-0)<h.a))H.j(P.i("Currently, non-zero z values in textures are not supported."))}i=o.c
if(0>=k){s=H.b(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.b(j,1)
u=1
break}h=[h,j[1]]
i.push(new V.au(h[0],h[1]))
u=1
break
case 11:j=O.b7(J.B(m,1))
k=j.length
if(k!==3)H.j(P.i("Normals must have exactly 3 numbers."))
i=o.d
if(0>=k){s=H.b(j,0)
u=1
break}h=j[0]
if(1>=k){s=H.b(j,1)
u=1
break}g=j[1]
if(2>=k){s=H.b(j,2)
u=1
break}i.push(new V.S(h,g,j[2]))
u=1
break
case 12:o.hz(J.B(m,1))
u=1
break
case 13:o.hx(J.B(m,1))
u=1
break
case 14:o.hw(J.B(m,1))
u=1
break
case 15:u=20
return P.aa(o.bo(J.B(m,1),b,!1),$async$a4)
case 20:u=1
break
case 16:k=J.B(m,1)
o.x=o.e.h(0,k)
o.br()
u=1
break
case 17:o.r=J.B(m,1)
o.br()
u=1
break
case 18:o.r=J.B(m,1)
o.br()
u=1
break
case 19:u=1
break
case 8:r=2
u=6
break
case 4:r=3
e=q
l=H.a6(e)
k=P.i('Line: "'+H.f(a)+'": '+H.f(l))
throw H.c(k)
u=6
break
case 3:u=2
break
case 6:case 1:return P.a2(s,t)
case 2:return P.a1(q,t)}})
return P.a3($async$a4,t)},
br:function(){var u,t,s,r=this
if(r.z==null||r.y.a.c.length!==0){u=F.a9()
r.y=u
u=E.fC(u)
r.z=u
r.Q.y.m(0,u)
for(u=r.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)C.b.sk(u[s].b,0)}r.z.saY(r.x)
r.z.a=r.r},
bL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=", was out of range [-",f=a.split("/"),e=f.length
if(0>=e)return H.b(f,0)
u=P.by(f[0],h,h)
t=i.b.length
if(typeof u!=="number")return u.D()
if(u<-t||u>t||u===0)throw H.c(P.i("The position index, "+u+g+t+".."+t+"] or 0."))
if(u<0)u=t+u+1;--u
if(e>1){s=f[1]
if(s!=null&&s.length>0){r=P.by(s,h,h)
q=i.c
t=q.length
if(typeof r!=="number")return r.D()
if(r<-t||r>t||r===0)throw H.c(P.i("The texture index, "+r+g+t+".."+t+"] or 0."))
if(r<0)r=t+r+1
p=r-1
if(p<0||p>=t)return H.b(q,p)
o=q[p]}else o=h}else o=h
if(e>2){s=f[2]
if(s!=null&&s.length>0){n=P.by(s,h,h)
e=i.d
t=e.length
if(typeof n!=="number")return n.D()
if(n<-t||n>t||n===0)throw H.c(P.i("The normal index, "+n+g+t+".."+t+"] or 0."))
if(n<0)n=t+n+1
q=n-1
if(q<0||q>=t)return H.b(e,q)
m=e[q]}else m=h}else m=h
e=i.b
if(u<0||u>=e.length)return H.b(e,u)
l=e[u]
for(e=l.b,q=e.length,k=0;k<e.length;e.length===q||(0,H.q)(e),++k){j=e[k]
if(J.D(j.y,o)&&J.D(j.r,m))return j}j=F.bU(h,h,h,h,h,h,h,h,0)
j.sa8(0,l.a)
if(!J.D(j.y,o)){j.y=o
e=j.a
if(e!=null)e.X()}j.sb9(m)
i.y.a.m(0,j)
l.b.push(j)
return j},
hz:function(a){var u,t=O.ks(a),s=H.d([],[F.b6]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(this.bL(t[u]))}this.y.b.ia(s)},
hx:function(a){var u,t=O.ks(a),s=H.d([],[F.b6]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(this.bL(t[u]))}this.y.c.i9(s)},
hw:function(a){var u,t=O.ks(a),s=H.d([],[F.b6]),r=t.length
for(u=0;u<r;++u){if(u>=t.length)return H.b(t,u)
s.push(this.bL(t[u]))}this.y.d.i8(s)},
bo:function(a,b,c){return this.hy(a,b,!1)},
hy:function(a,b,c){var u=0,t=P.a4(null),s=this,r
var $async$bo=P.a5(function(d,e){if(d===1)return P.a1(e,t)
while(true)switch(u){case 0:u=2
return P.aa(O.dk(b+"/"+a,s.a,!1),$async$bo)
case 2:r=e
s.e.bt(0,r)
return P.a2(null,t)}})
return P.a3($async$bo,t)}}
O.i8.prototype={}
X.cZ.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.de.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.de))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.hm.prototype={
j_:function(a){this.c=a.b
this.d.m(0,a.a)
return!1},
iW:function(a){this.c=a.b
this.d.Y(0,a.a)
return!1}}
X.dg.prototype={}
X.hu.prototype={
b2:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.l()
u=b.b
t=p.ch
if(typeof u!=="number")return u.l()
s=n.a
if(typeof s!=="number")return s.p()
n=n.b
if(typeof n!=="number")return n.p()
r=new V.au(s+m*l,n+u*t)
t=p.a.gaQ()
q=new X.b1(a,V.bo(),p.x,t,r)
q.b=!0
p.z=new P.aq(o,!1)
p.x=r
return q},
cA:function(a,b){this.r=a.a
return!1},
bb:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eE()
if(typeof u!=="number")return u.af()
this.r=(u&~t)>>>0
return!1},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.b2(a,b))
return!0},
j0:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaQ()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.l()
q=a.b
p=o.cy
if(typeof q!=="number")return q.l()
t=new X.cp(new V.I(s*r,q*p),u,t)
t.b=!0
n.J(t)
return!0},
h4:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dg(c,r.a.gaQ(),b)
s.b=!0
t.J(s)
r.y=new P.aq(u,!1)
r.x=V.bo()}}
X.at.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.at))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b1.prototype={}
X.hU.prototype={
bR:function(a,b,c){var u=this,t=new P.aq(Date.now(),!1),s=u.a.gaQ(),r=new X.b1(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cA:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.J(this.bR(a,b,!0))
return!0},
bb:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eE()
if(typeof t!=="number")return t.af()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.J(u.bR(a,b,!0))
return!0},
ba:function(a,b){var u=this.d
if(u==null)return!1
u.J(this.bR(a,b,!1))
return!0},
j1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaQ()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.l()
r=a.b
q=p.ch
if(typeof r!=="number")return r.l()
u=new X.cp(new V.I(t*s,r*q),u,b)
u.b=!0
o.J(u)
return!0},
gdL:function(){var u=this.b
return u==null?this.b=D.L():u},
gbF:function(){var u=this.c
return u==null?this.c=D.L():u},
gea:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.cp.prototype={}
X.i6.prototype={}
X.dK.prototype={}
X.iM.prototype={
b2:function(a,b){var u=this,t=new P.aq(Date.now(),!1),s=a.length>0?a[0]:V.bo(),r=u.a.gaQ(),q=new X.dK(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
iZ:function(a){var u=this.b
if(u==null)return!1
u.J(this.b2(a,!0))
return!0},
iX:function(a){var u=this.c
if(u==null)return!1
u.J(this.b2(a,!0))
return!0},
iY:function(a){var u=this.d
if(u==null)return!1
u.J(this.b2(a,!1))
return!0}}
X.dQ.prototype={
gaQ:function(){var u=this.a,t=C.j.gdG(u).c
t.toString
u=C.j.gdG(u).d
u.toString
return V.mj(0,0,t,u)},
d5:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.de(u,new X.at(t,a.altKey,a.shiftKey))},
aL:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
c8:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.at(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.au(s-q,r-u)},
b3:function(a){return new V.I(a.movementX,a.movementY)},
c4:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.au])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.au(r.pageX)
C.d.au(r.pageY)
p=o.left
C.d.au(r.pageX)
n.push(new V.au(q-p,C.d.au(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.at(t,a.altKey,a.shiftKey))},
bS:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fZ:function(a){this.f=!0},
fN:function(a){this.f=!1},
fT:function(a){if(this.f&&this.bS(a))a.preventDefault()},
h2:function(a){var u
if(!this.f)return
u=this.d5(a)
this.b.j_(u)},
h0:function(a){var u
if(!this.f)return
u=this.d5(a)
this.b.iW(u)},
h6:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aL(a)
if(r.x){u=r.ay(a)
t=r.b3(a)
if(r.d.cA(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.cA(u,s))a.preventDefault()},
ha:function(a){var u,t,s,r=this
r.aL(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bb(u,s))a.preventDefault()},
fX:function(a){var u,t,s,r=this
if(!r.bS(a)){r.aL(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bb(u,s))a.preventDefault()}},
h8:function(a){var u,t,s,r=this
r.aL(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.ba(u,s))a.preventDefault()},
fV:function(a){var u,t,s,r=this
if(!r.bS(a)){r.aL(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.ba(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.ba(u,s))a.preventDefault()}},
hc:function(a){var u,t,s=this
s.aL(a)
u=new V.I((a&&C.w).gik(a),C.w.gil(a)).A(0,180)
if(s.x){if(s.d.j0(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.j1(u,t))a.preventDefault()},
he:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.h4(u,t,r)}},
hr:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c8(a)
u=t.c4(a)
if(t.e.iZ(u))a.preventDefault()},
hn:function(a){var u
this.c8(a)
u=this.c4(a)
if(this.e.iX(u))a.preventDefault()},
hp:function(a){var u
this.c8(a)
u=this.c4(a)
if(this.e.iY(u))a.preventDefault()}}
D.f8.prototype={$iaj:1}
D.fu.prototype={$iaj:1}
D.aj.prototype={}
D.df.prototype={
cT:function(a){var u=this.y
if(u!=null)u.J(a)},
df:function(a){var u=this.z
if(u!=null)u.J(a)},
h3:function(){return this.df(null)},
hh:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.fc(s))return!1}return!0},
fH:function(a,b){var u,t,s,r
for(u=b.length,t=this.gde(),s=0;s<b.length;b.length===u||(0,H.q)(b),++s){r=b[s]
r.gC().m(0,t)}u=new D.bJ()
u.b=!0
this.cT(u)},
hl:function(a,b){var u,t,s,r
for(u=b.length,t=this.gde(),s=0;s<b.length;b.length===u||(0,H.q)(b),++s){r=b[s]
r.gC().Y(0,t)}u=new D.bK()
u.b=!0
this.cT(u)},
fc:function(a){var u=C.b.a3(this.e,a)
return u},
$an:function(){return[D.aj]},
$abd:function(){return[D.aj]}}
D.i5.prototype={$iaj:1}
D.iu.prototype={$iaj:1}
V.V.prototype={
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.V))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.K.prototype={
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fD.prototype={}
V.di.prototype={
a5:function(a,b){var u=this,t=H.d([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
w:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.di))return!1
u=b.a
t=r.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.c4(H.d([q.a,q.d,q.r],p),3,0),n=V.c4(H.d([q.b,q.e,q.x],p),3,0),m=V.c4(H.d([q.c,q.f,q.y],p),3,0)
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
V.b0.prototype={
a5:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
e8:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.e(r)
q=a9.c
if(typeof q!=="number")return q.l()
p=b0*r-q*t
o=a9.x
if(typeof o!=="number")return H.e(o)
n=a9.d
if(typeof n!=="number")return n.l()
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.l()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.l()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.l()
b=i*d-c*f
a=a9.dx
a0=a9.ch
if(typeof a0!=="number")return a0.l()
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.z().a)return V.dj()
a6=1/a5
a7=-t
a8=-f
return V.aL((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
l:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.l()
if(typeof b1!=="number")return H.e(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=a9.d
p=b3.cx
if(typeof q!=="number")return q.l()
o=b3.b
if(typeof o!=="number")return H.e(o)
n=b3.f
if(typeof n!=="number")return H.e(n)
m=b3.z
if(typeof m!=="number")return H.e(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.e(k)
j=b3.r
if(typeof j!=="number")return H.e(j)
i=b3.Q
if(typeof i!=="number")return H.e(i)
h=b3.db
g=b3.d
if(typeof g!=="number")return H.e(g)
f=b3.x
if(typeof f!=="number")return H.e(f)
e=b3.ch
if(typeof e!=="number")return H.e(e)
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.l()
b=a9.f
if(typeof b!=="number")return b.l()
a=a9.r
if(typeof a!=="number")return a.l()
a0=a9.x
if(typeof a0!=="number")return a0.l()
a1=a9.y
if(typeof a1!=="number")return a1.l()
a2=a9.z
if(typeof a2!=="number")return a2.l()
a3=a9.Q
if(typeof a3!=="number")return a3.l()
a4=a9.ch
if(typeof a4!=="number")return a4.l()
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.aL(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
cG:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.l()
if(typeof i!=="number")return H.e(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=k.e
if(typeof q!=="number")return q.l()
p=k.f
if(typeof p!=="number")return p.l()
o=k.r
if(typeof o!=="number")return o.l()
n=k.y
if(typeof n!=="number")return n.l()
m=k.z
if(typeof m!=="number")return m.l()
l=k.Q
if(typeof l!=="number")return l.l()
return new V.S(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
aZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.a,f=a.a
if(typeof g!=="number")return g.l()
if(typeof f!=="number")return H.e(f)
u=h.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=h.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
q=h.d
if(typeof q!=="number")return H.e(q)
p=h.e
if(typeof p!=="number")return p.l()
o=h.f
if(typeof o!=="number")return o.l()
n=h.r
if(typeof n!=="number")return n.l()
m=h.x
if(typeof m!=="number")return H.e(m)
l=h.y
if(typeof l!=="number")return l.l()
k=h.z
if(typeof k!=="number")return k.l()
j=h.Q
if(typeof j!=="number")return j.l()
i=h.ch
if(typeof i!=="number")return H.e(i)
return new V.a7(g*f+u*t+s*r+q,p*f+o*t+n*r+m,l*f+k*t+j*r+i)},
w:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=r.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.ch
t=r.ch
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.c4(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.c4(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.c4(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.c4(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
P:function(){return this.G("")}}
V.au.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
return new V.au(s-r,u-t)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.a7.prototype={
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return new V.a7(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.e(r)
return new V.a7(q-p,u-t,s-r)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.z().a)return V.ly()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.a7(u/b,t/b,s/b)},
w:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=r.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.dv.prototype={
gah:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.z().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.bP.prototype={
w:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.bP))return!1
u=b.a
t=r.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+", "+V.F(u.e,3,0)+", "+V.F(u.f,3,0)+"]"}}
V.I.prototype={
cu:function(a){return Math.sqrt(this.M(this))},
M:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
return s*r+u*t},
l:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.l()
u=this.b
if(typeof u!=="number")return u.l()
return new V.I(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.z().a){u=$.mx
return u==null?$.mx=new V.I(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.I(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.I))return!1
u=b.a
t=this.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.S.prototype={
cu:function(a){return Math.sqrt(this.M(this))},
M:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.e(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.e(r)
return q*p+u*t+s*r},
aC:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.e(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.e(t)
s=a.a
if(typeof s!=="number")return H.e(s)
r=this.a
if(typeof r!=="number")return r.l()
return new V.S(q*p-u*t,u*s-r*p,r*t-q*s)},
p:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.p()
if(typeof p!=="number")return H.e(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.p()
if(typeof t!=="number")return H.e(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.p()
if(typeof r!=="number")return H.e(r)
return new V.S(q+p,u+t,s+r)},
N:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.N()
u=this.b
if(typeof u!=="number")return u.N()
t=this.c
if(typeof t!=="number")return t.N()
return new V.S(-s,-u,-t)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.z().a)return V.T()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.S(u/b,t/b,s/b)},
e9:function(){var u=this.a,t=$.z()
t.toString
if(typeof u!=="number")return H.e(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.e(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.e(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
w:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.S))return!1
u=b.a
t=r.a
s=$.z()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.e(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.fj.prototype={
bM:function(a){var u=V.pZ(a,this.c,this.b)
return u},
gC:function(){var u=this.y
return u==null?this.y=D.L():u},
S:function(a){var u=this.y
if(u!=null)u.J(a)},
scH:function(a,b){},
scv:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.z().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bM(u)}s=new D.w("maximumLocation",s,t.b)
s.b=!0
t.S(s)}},
scz:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.z().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bM(u)}s=new D.w("minimumLocation",s,t.c)
s.b=!0
t.S(s)}},
sa8:function(a,b){var u,t=this
b=t.bM(b)
u=t.d
if(!(Math.abs(u-b)<$.z().a)){t.d=b
u=new D.w("location",u,b)
u.b=!0
t.S(u)}},
scw:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.z().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.w("maximumVelocity",r,a)
r.b=!0
s.S(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.w("velocity",t,a)
t.b=!0
u.S(t)}},
sci:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.z().a)){this.x=a
u=new D.w("dampening",u,a)
u.b=!0
this.S(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.z().a
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
u=s}r.sW(u)}}}
U.d0.prototype={
gC:function(){var u=this.b
return u==null?this.b=D.L():u},
b_:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d0))return!1
return J.D(this.a,b.a)},
i:function(a){return"Constant: "+this.a.G("          ")}}
U.cf.prototype={
gC:function(){var u=this.e
return u==null?this.e=D.L():u},
S:function(a){var u=this.e
if(u!=null)u.J(a)},
ac:function(){return this.S(null)},
fF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaK(),s=[{func:1,ret:-1,args:[D.ag]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gC()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bJ()
u.b=!0
this.S(u)},
hj:function(a,b){var u,t,s,r
for(u=b.length,t=this.gaK(),s=0;s<b.length;b.length===u||(0,H.q)(b),++s){r=b[s]
if(r!=null)r.gC().Y(0,t)}u=new D.bK()
u.b=!0
this.S(u)},
b_:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.D()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ab(r,r.length),u=null;r.B();){q=r.d
if(q!=null){t=q.b_(0,b,c)
if(t!=null)u=u==null?t:t.l(0,u)}}s.f=u==null?V.dj():u
r=s.e
if(r!=null)r.aX(0)}return s.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cf))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.D(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$an:function(){return[U.ar]},
$abd:function(){return[U.ar]},
$iar:1}
U.ar.prototype={}
U.dR.prototype={
gC:function(){var u=this.cy
return u==null?this.cy=D.L():u},
S:function(a){var u=this.cy
if(u!=null)u.J(a)},
ac:function(){return this.S(null)},
b4:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdL().m(0,u.gbT())
u.a.c.gea().m(0,u.gbV())
u.a.c.gbF().m(0,u.gbX())
return!0},
bU:function(a){var u=this
if(!J.D(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$ib1")
if(!n.y)return
if(n.x){u=a.d.n(0,a.y)
u=new V.I(u.a,u.b)
u=u.M(u)
t=n.r
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.n(0,a.y)
u=new V.I(t.a,t.b).l(0,2).A(0,u.gah())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.l()
s=n.e
if(typeof s!=="number")return H.e(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=new V.I(s.a,s.b).l(0,2).A(0,u.gah())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.e(p)
o=n.z
if(typeof o!=="number")return H.e(o)
s.sa8(0,-q*p+o)
n.b.sW(0)
t=t.n(0,a.z)
n.Q=new V.I(t.a,t.b).l(0,2).A(0,u.gah())}n.ac()},
bY:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.M(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.l()
s=r.e
if(typeof s!=="number")return H.e(s)
u.sW(t*10*s)
r.ac()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.D()
if(q<p){r.ch=p
u=b.y
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aL(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iar:1}
U.dS.prototype={
gC:function(){var u=this.fx
return u==null?this.fx=D.L():u},
S:function(a){var u=this.fx
if(u!=null)u.J(a)},
ac:function(){return this.S(null)},
b4:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdL().m(0,s.gbT())
s.a.c.gea().m(0,s.gbV())
s.a.c.gbF().m(0,s.gbX())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.m(0,s.gft())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.m(0,s.gfv())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.m(0,s.ghV())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.m(0,s.ghT())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.m(0,s.ghR())
return!0},
aw:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.I(u,t)},
bU:function(a){var u=this
H.k(a,"$ib1")
if(!J.D(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bW:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$ib1")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.I(u.a,u.b)
u=u.M(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aw(new V.I(t.a,t.b).l(0,2).A(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aw(new V.I(s.a,s.b).l(0,2).A(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sa8(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.n(0,a.z)
n.dx=n.aw(new V.I(t.a,t.b).l(0,2).A(0,u.gah()))}n.ac()},
bY:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.M(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sW(-t*10*u)
r.ac()}},
fu:function(a){var u=this
if(H.k(a,"$idg").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fw:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$ib1")
if(!J.D(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aw(new V.I(s.a,s.b).l(0,2).A(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sa8(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.n(0,a.z)
n.dx=n.aw(new V.I(t.a,t.b).l(0,2).A(0,u.gah()))
n.ac()},
hW:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hU:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$idK")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.I(u.a,u.b)
u=u.M(u)
t=n.Q
if(typeof t!=="number")return H.e(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aw(new V.I(t.a,t.b).l(0,2).A(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.e(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.e(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aw(new V.I(s.a,s.b).l(0,2).A(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.e(p)
o=n.cy
if(typeof o!=="number")return H.e(o)
s.sa8(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.e(q)
s=n.db
if(typeof s!=="number")return H.e(s)
o.sa8(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.n(0,a.z)
n.dx=n.aw(new V.I(t.a,t.b).l(0,2).A(0,u.gah()))}n.ac()},
hS:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.M(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.e(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.e(u)
s.sW(-t*10*u)
r.ac()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.D()
if(q<p){r.dy=p
u=b.y
r.c.ap(0,u)
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aL(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.l(0,V.aL(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iar:1}
U.dT.prototype={
gC:function(){var u=this.r
return u==null?this.r=D.L():u},
S:function(a){var u=this.r
if(u!=null)u.J(a)},
b4:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gfz()
u.m(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).m(0,t)
return!0},
fA:function(a){var u,t,s,r,q=this
if(!J.D(q.b,q.a.b.c))return
H.k(a,"$icp")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.l()
r=u+t*s
if(u!==r){q.d=r
u=new D.w("zoom",u,r)
u.b=!0
q.S(u)}},
b_:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.m9(u,u,u)}return t.f},
$iar:1}
M.d5.prototype={
ax:function(a){var u=this.y
if(u!=null)u.J(a)},
eS:function(){return this.ax(null)},
fP:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gav(),s=[{func:1,ret:-1,args:[D.ag]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.bJ()
u.b=!0
this.ax(u)},
fR:function(a,b){var u,t,s,r,q
for(u=b.length,t=this.gav(),s=0;s<b.length;b.length===u||(0,H.q)(b),++s){r=b[s]
if(r!=null){q=r.z
if(q==null){q=new D.bg()
q.d=0
r.z=q}q.Y(0,t)}}u=new D.bK()
u.b=!0
this.ax(u)},
saY:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gC().Y(0,t.gav())
u=t.d
t.d=a
if(a!=null)a.gC().m(0,t.gav())
s=new D.w("technique",u,t.d)
s.b=!0
t.ax(s)}},
gC:function(){var u=this.y
return u==null?this.y=D.L():u},
aF:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.eo(a1.d)
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
if(typeof s!=="number")return H.e(s)
o=C.d.au(p*s)
p=q.b
if(typeof r!=="number")return H.e(r)
n=C.d.au(p*r)
p=C.d.au(q.c*s)
a2.c=p
q=C.d.au(q.d*r)
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
i=V.aL(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.en(i)
t=$.md
if(t==null){t=V.ly()
q=$.mA
if(q==null)q=$.mA=new V.S(0,1,0)
p=V.mC()
h=p.A(0,Math.sqrt(p.M(p)))
q=q.aC(h)
g=q.A(0,Math.sqrt(q.M(q)))
f=h.aC(g)
e=new V.S(t.a,t.b,t.c)
d=g.N(0).M(e)
c=f.N(0).M(e)
b=h.N(0).M(e)
t=V.aL(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.md=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.l(0,a)}a2.db.en(a)
for(u=a1.e.a,u=new J.ab(u,u.length);u.B();)u.d.ap(0,a2)
for(u=a1.e.a,u=new J.ab(u,u.length);u.B();)u.d.aF(a2)
a1.b.toString
a2.cy.cB()
a2.db.cB()
a1.c.toString
a2.el()}}
A.cV.prototype={}
A.f3.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
is:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a_.prototype={
gad:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
w:function(a,b){if(b==null)return!1
if(!(b instanceof A.a_))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.fR.prototype={}
A.hz.prototype={
eN:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.W("")
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
A.pi(c0,u)
A.pk(c0,u)
A.pj(c0,u)
A.pm(c0,u)
A.pn(c0,u)
A.pl(c0,u)
A.po(c0,u)
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
b5.e5(0,s.charCodeAt(0)==0?s:s,A.ph(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.k(b5.y.K(0,"invViewMat"),"$iad")
if(t)b5.dy=H.k(b5.y.K(0,"objMat"),"$iad")
if(r)b5.fr=H.k(b5.y.K(0,"viewObjMat"),"$iad")
b5.fy=H.k(b5.y.K(0,"projViewObjMat"),"$iad")
if(c0.go)b5.fx=H.k(b5.y.K(0,"viewMat"),"$iad")
if(c0.x1)b5.k1=H.k(b5.y.K(0,"txt2DMat"),"$icA")
if(c0.x2)b5.k2=H.k(b5.y.K(0,"txtCubeMat"),"$iad")
if(c0.y1)b5.k3=H.k(b5.y.K(0,"colorMat"),"$iad")
b5.r1=H.d([],[A.ad])
t=c0.aS
if(t>0){b5.k4=b5.y.K(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.j(P.i(b7+q+b8))
s.push(H.k(m,"$iad"))}}t=c0.a
if(t.a)b5.r2=H.k(b5.y.K(0,"emissionClr"),"$iE")
if(t.b)b5.rx=H.k(b5.y.K(0,"emissionTxt"),"$iae")
t=c0.b
if(t.a)b5.x1=H.k(b5.y.K(0,"ambientClr"),"$iE")
if(t.b)b5.x2=H.k(b5.y.K(0,"ambientTxt"),"$iae")
t=c0.c
if(t.a)b5.y2=H.k(b5.y.K(0,"diffuseClr"),"$iE")
if(t.b)b5.aS=H.k(b5.y.K(0,"diffuseTxt"),"$iae")
t=c0.d
if(t.a)b5.bx=H.k(b5.y.K(0,"invDiffuseClr"),"$iE")
if(t.b)b5.dN=H.k(b5.y.K(0,"invDiffuseTxt"),"$iae")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dQ=H.k(b5.y.K(0,"shininess"),"$iX")
if(s)b5.dO=H.k(b5.y.K(0,"specularClr"),"$iE")
if(t.b)b5.dP=H.k(b5.y.K(0,"specularTxt"),"$iae")}if(c0.f.b)b5.dR=H.k(b5.y.K(0,"bumpTxt"),"$iae")
if(c0.db){b5.dS=H.k(b5.y.K(0,"envSampler"),"$ibS")
t=c0.r
if(t.a)b5.dT=H.k(b5.y.K(0,"reflectClr"),"$iE")
if(t.b)b5.dU=H.k(b5.y.K(0,"reflectTxt"),"$iae")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dV=H.k(b5.y.K(0,"refraction"),"$iX")
if(s)b5.dW=H.k(b5.y.K(0,"refractClr"),"$iE")
if(t.b)b5.dX=H.k(b5.y.K(0,"refractTxt"),"$iae")}}t=c0.y
if(t.a)b5.dY=H.k(b5.y.K(0,"alpha"),"$iX")
if(t.b)b5.dZ=H.k(b5.y.K(0,"alphaTxt"),"$iae")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.u
b5.cj=new H.C([r,A.bq])
b5.ck=new H.C([r,[P.t,A.cy]])
for(r=[A.cy],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="barLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.j(P.i(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.j(P.i(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.af()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.j(P.i(b7+o+b8))
H.k(e,"$iX")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.j(P.i(b7+o+b8))
H.k(d,"$iX")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.j(P.i(b7+o+b8))
H.k(c,"$iX")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cy(m,g,f,a0,a,b))}b5.ck.j(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
q.j(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.u
b5.cl=new H.C([r,A.bq])
b5.cm=new H.C([r,[P.t,A.cz]])
for(r=[A.cz],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.af()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.j(P.i(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.j(P.i(b7+a1+b8))
H.k(g,"$iE")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.j(P.i(b7+a1+b8))
H.k(f,"$iE")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.j(P.i(b7+a1+b8))
H.k(m,"$iE")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.j(P.i(b7+a1+b8))
H.k(g,"$iE")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.j(P.i(b7+o+b8))
H.k(f,"$iae")
a5=f}else a5=b6
h.push(new A.cz(a4,a3,a2,m,g,a5))}b5.cm.j(0,j,h)
q=b5.cl
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
q.j(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.u
b5.cn=new H.C([r,A.bq])
b5.co=new H.C([r,[P.t,A.cB]])
for(r=[A.cB],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.j(P.i(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.j(P.i(b7+o+b8))
H.k(f,"$iE")
if(typeof j!=="number")return j.af()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.j(P.i(b7+o+b8))
H.k(e,"$icA")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.j(P.i(b7+o+b8))
H.k(e,"$ibS")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.j(P.i(b7+o+b8))
H.k(e,"$ibS")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.j(P.i(b7+o+b8))
H.k(d,"$ibr")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.j(P.i(b7+o+b8))
H.k(e,"$iX")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.j(P.i(b7+o+b8))
H.k(d,"$iX")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.j(P.i(b7+o+b8))
H.k(c,"$iX")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cB(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.co.j(0,j,h)
q=b5.cn
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
q.j(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.u
b5.cp=new H.C([r,A.bq])
b5.cq=new H.C([r,[P.t,A.cC]])
for(r=[A.cC],l=0;l<t.length;t.length===s||(0,H.q)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.f(j)
h=H.d([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
H.k(m,"$iE")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.j(P.i(b7+o+b8))
H.k(g,"$iE")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.j(P.i(b7+o+b8))
H.k(f,"$iE")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.j(P.i(b7+o+b8))
H.k(e,"$iE")
if(typeof j!=="number")return j.af()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.j(P.i(b7+o+b8))
H.k(d,"$iE")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.j(P.i(b7+o+b8))
H.k(c,"$iE")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.j(P.i(b7+o+b8))
H.k(a9,"$iX")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.j(P.i(b7+o+b8))
H.k(b0,"$iX")
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
if(d==null)H.j(P.i(b7+a1+b8))
H.k(d,"$ibr")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.j(P.i(b7+a1+b8))
H.k(d,"$iX")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.j(P.i(b7+a1+b8))
H.k(c,"$iX")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.j(P.i(b7+a1+b8))
H.k(d,"$iX")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.j(P.i(b7+a1+b8))
H.k(c,"$iX")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.j(P.i(b7+a1+b8))
H.k(a9,"$iX")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.j(P.i(b7+a1+b8))
H.k(d,"$iae")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.j(P.i(b7+o+b8))
H.k(d,"$iae")
a7=d}else a7=b6
h.push(new A.cC(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cq.j(0,j,h)
q=b5.cp
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.j(P.i(b7+o+b8))
q.j(0,j,m)}}}},
aq:function(a,b){if(b!=null&&b.d)a.eF(b)},
hI:function(a,b){}}
A.cW.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.d2.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.ds.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.dz.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.hC.prototype={
i:function(a){return this.b6}}
A.cy.prototype={}
A.cz.prototype={}
A.cB.prototype={}
A.cC.prototype={}
A.dx.prototype={
cP:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e5:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d6(b,35633)
r.f=r.d6(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.j(P.i("Failed to link shader: "+H.f(s)))}r.hJ()
r.hL()},
aB:function(a){a.a.useProgram(this.r)
this.x.is()},
d6:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.i("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
hJ:function(){var u,t,s,r=this,q=H.d([],[A.cV]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cV(p,t.name,s))}r.x=new A.f3(q)},
hL:function(){var u,t,s,r=this,q=H.d([],[A.dM]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.e(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ij(t.type,t.size,t.name,s))}r.y=new A.iX(q)},
aJ:function(a,b,c){var u=this.a
if(a===1)return new A.bq(u,b,c)
else return A.lC(u,this.r,b,a,c)},
fe:function(a,b,c){var u=this.a
if(a===1)return new A.ae(u,b,c)
else return A.lC(u,this.r,b,a,c)},
ff:function(a,b,c){var u=this.a
if(a===1)return new A.bS(u,b,c)
else return A.lC(u,this.r,b,a,c)},
bs:function(a,b){return new P.e4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
ij:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aJ(b,c,d)
case 5121:return u.aJ(b,c,d)
case 5122:return u.aJ(b,c,d)
case 5123:return u.aJ(b,c,d)
case 5124:return u.aJ(b,c,d)
case 5125:return u.aJ(b,c,d)
case 5126:return new A.X(u.a,c,d)
case 35664:return new A.iT(u.a,c,d)
case 35665:return new A.E(u.a,c,d)
case 35666:return new A.br(u.a,c,d)
case 35667:return new A.iU(u.a,c,d)
case 35668:return new A.iV(u.a,c,d)
case 35669:return new A.iW(u.a,c,d)
case 35674:return new A.iY(u.a,c,d)
case 35675:return new A.cA(u.a,c,d)
case 35676:return new A.ad(u.a,c,d)
case 35678:return u.fe(b,c,d)
case 35680:return u.ff(b,c,d)
case 35670:throw H.c(u.bs("BOOL",c))
case 35671:throw H.c(u.bs("BOOL_VEC2",c))
case 35672:throw H.c(u.bs("BOOL_VEC3",c))
case 35673:throw H.c(u.bs("BOOL_VEC4",c))
default:throw H.c(P.i("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.dM.prototype={}
A.iX.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
K:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.i("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.P()},
P:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bq.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.iU.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.iV.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.iW.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.iS.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.X.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.iT.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.E.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.br.prototype={
bh:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.iY.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cA.prototype={
a9:function(a){var u=new Float32Array(H.bZ(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ad.prototype={
a9:function(a){var u=new Float32Array(H.bZ(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.ae.prototype={
eF:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.bS.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.bh.prototype={
f0:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.T()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e9())return
return s.A(0,Math.sqrt(s.M(s)))},
f6:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.S(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.M(r)))
r=t.n(0,q)
r=new V.S(r.a,r.b,r.c)
r=s.aC(r.A(0,Math.sqrt(r.M(r))))
return r.A(0,Math.sqrt(r.M(r)))},
cc:function(){var u,t=this
if(t.d!=null)return!0
u=t.f0()
if(u==null){u=t.f6()
if(u==null)return!1}t.d=u
t.a.a.X()
return!0},
f_:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.T()
if(q!=null)s=s.p(0,q)
if(u!=null)s=s.p(0,u)
if(t!=null)s=s.p(0,t)
if(s.e9())return
return s.A(0,Math.sqrt(s.M(s)))},
f5:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.e(k)
r=l-k
if(Math.abs(r-0)<$.z().a){l=d.n(0,g)
l=new V.S(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.M(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.e(t)
if(l-t<0)q=q.N(0)}else{k=u.b
if(typeof k!=="number")return H.e(k)
p=(l-k)/r
k=d.n(0,g)
l=k.a
if(typeof l!=="number")return l.l()
i=k.b
if(typeof i!=="number")return i.l()
k=k.c
if(typeof k!=="number")return k.l()
k=new V.a7(l*p,i*p,k*p).p(0,g).n(0,j)
k=new V.S(k.a,k.b,k.c)
q=k.A(0,Math.sqrt(k.M(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.e(t)
u=u.a
if(typeof u!=="number")return H.e(u)
if((s-t)*p+t-u<0)q=q.N(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.M(l)))
l=o.aC(q)
l=l.A(0,Math.sqrt(l.M(l))).aC(o)
q=l.A(0,Math.sqrt(l.M(l)))}return q},
cb:function(){var u,t=this
if(t.e!=null)return!0
u=t.f_()
if(u==null){u=t.f5()
if(u==null)return!1}t.e=u
t.a.a.X()
return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.an(J.ap(s.e),0)+", "+C.a.an(J.ap(t.b.e),0)+", "+C.a.an(J.ap(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
P:function(){return this.G("")}}
F.bl.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null||this.b==null)return a+"disposed"
return a+C.a.an(J.ap(u.e),0)+", "+C.a.an(J.ap(this.b.e),0)},
P:function(){return this.G("")}}
F.bM.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.an(J.ap(u.e),0)},
P:function(){return this.G("")}}
F.av.prototype={
gC:function(){var u=this.e
return u==null?this.e=D.L():u},
aP:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aP()||!1
if(!t.a.aP())u=!1
s=t.e
if(s!=null)s.aX(0)
return u},
aO:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aO()||!1
if(!t.a.aO())u=!1
s=t.e
if(s!=null)s.aX(0)
return u},
bv:function(){var u=this.e
if(u!=null)++u.d
this.a.bv()
u=this.e
if(u!=null)u.aX(0)
return!0},
b5:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.mn
return i==null?$.mn=V.ml(0,0,0,0,0,0):i}u=i[0].f
t=V.ml(u.a,u.b,u.c,0,0,0)
for(s=h-1;s>=1;--s){u=i[s].f
r=u.a
q=u.b
u=u.c
p=t.d
o=t.a
if(typeof r!=="number")return r.D()
if(typeof o!=="number")return H.e(o)
if(r<o){p+=o-r
n=r}else{if(r>o+p)p=r-o
n=o}m=t.e
r=t.b
if(typeof q!=="number")return q.D()
if(typeof r!=="number")return H.e(r)
if(q<r){m+=r-q
l=q}else{if(q>r+m)m=q-r
l=r}k=t.f
r=t.c
if(typeof u!=="number")return u.D()
if(typeof r!=="number")return H.e(r)
if(u<r){k+=r-u
j=u}else{if(u>r+k)k=u-r
j=r}t=new V.bP(n,l,j,p,m,k)}return t},
bu:function(a){var u,t,s
for(u=this.a.c.length-1;u>=0;--u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.f
if(t!=null){t=a.aZ(t)
if(!J.D(s.f,t)){s.f=t
t=s.a
if(t!=null){t=t.e
if(t!=null)t.J(null)}}}t=s.r
if(t!=null)s.sb9(a.cG(t))
t=s.x
if(t!=null)s.sU(a.cG(t))}},
dF:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aF()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aE().a)!==0)++s
if((t&$.aD().a)!==0)++s
if((t&$.ba().a)!==0)++s
if((t&$.bA().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.cR().a)!==0)++s
if((t&$.c8().a)!==0)++s
if((t&$.b9().a)!==0)++s
r=a4.gcL(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.d(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.d(u,[Z.cX])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.ib(m)
k=l.gcL(l)
if(m>=t)return H.b(o,m)
o[m]=new Z.cX(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.b(i,j)
h=i[j].iJ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.b(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bZ(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bE(new Z.dU(a1,d),o,a4)
c.b=H.d([],[Z.bI])
if(a0.b.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.O()
b.push(t.e)}a=Z.lF(u,34963,b)
c.b.push(new Z.bI(0,b.length,a))}if(a0.c.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.O()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.O()
b.push(t.e)}a=Z.lF(u,34963,b)
c.b.push(new Z.bI(1,b.length,a))}if(a0.d.b.length!==0){b=H.d([],[P.u])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.O()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].b
t.a.a.O()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.b(t,m)
t=t[m].c
t.a.a.O()
b.push(t.e)}a=Z.lF(u,34963,b)
c.b.push(new Z.bI(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.d([],[P.l])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.v(s,"\n")},
X:function(){var u=this.e
if(u!=null)u.J(null)}}
F.il.prototype={
a7:function(a,b,c,d){var u,t=this.a
t.a.m(0,b)
t.a.m(0,c)
t.a.m(0,d)
u=new F.bh()
t=b.a
if(t==null)H.j(P.i("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.j(P.i("May not create a face with vertices attached to different shapes."))
u.a=b
b.d.b.push(u)
u.b=c
c.d.c.push(u)
u.c=d
d.d.d.push(u)
u.a.a.d.b.push(u)
u.a.a.X()
return u},
i8:function(a){var u,t,s,r,q,p=H.d([],[F.bh]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.m(0,u)
t.a.m(0,r)
t.a.m(0,q)
p.push(F.nM(u,r,q))}}return p},
gk:function(a){return this.b.length},
aP:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].cc())s=!1
return s},
aO:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].cb())s=!1
return s},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(a))
return C.b.v(r,"\n")},
P:function(){return this.G("")}}
F.im.prototype={
t:function(a,b,c){var u,t=this.a
t.a.m(0,b)
t.a.m(0,c)
t=new F.bl()
if(b==null)H.j(P.i("May not create a line with a null start vertex."))
if(c==null)H.j(P.i("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.j(P.i("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.j(P.i("May not create a line with vertices attached to different shapes."))
t.a=b
b.c.b.push(t)
t.b=c
c.c.c.push(t)
t.a.a.c.b.push(t)
t.a.a.X()
return t},
i9:function(a){var u,t,s,r,q=H.d([],[F.bl]),p=a.length
for(u=this.a,t=1;t<p;t+=2){s=t-1
r=a.length
if(s>=r)return H.b(a,s)
s=a[s]
if(t>=r)return H.b(a,t)
r=a[t]
u.a.m(0,s)
u.a.m(0,r)
q.push(F.nW(s,r))}return q},
gk:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s=H.d([],[P.l]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.v(s,"\n")},
P:function(){return this.G("")}}
F.io.prototype={
ia:function(a){var u,t,s,r=H.d([],[F.bM]),q=a.length
for(u=this.a,t=0;t<q;++t){if(t>=a.length)return H.b(a,t)
s=a[t]
u.a.m(0,s)
r.push(F.lx(s))}return r},
gk:function(a){return this.b.length},
i:function(a){return this.P()},
G:function(a){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(a))
return C.b.v(r,"\n")},
P:function(){return this.G("")}}
F.b6.prototype={
Z:function(){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bU(u.cx,r,o,t,s,q,p,null,n)},
sa8:function(a,b){var u
if(!J.D(this.f,b)){this.f=b
u=this.a
if(u!=null)u.X()}},
sb9:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.M(a)))
if(!J.D(this.r,a)){this.r=a
u=this.a
if(u!=null)u.X()}},
sU:function(a){var u
a=a==null?null:a.A(0,Math.sqrt(a.M(a)))
if(!J.D(this.x,a)){this.x=a
u=this.a
if(u!=null)u.X()}},
sV:function(a,b){var u
if(!J.D(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.X()}},
iJ:function(a){var u,t,s=this
if(a.w(0,$.aF())){u=s.f
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.aE())){u=s.r
t=[P.J]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.aD())){u=s.x
t=[P.J]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.ba())){u=s.y
t=[P.J]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.w(0,$.bA())){u=s.z
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.bz())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.w(0,$.cR())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1,1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.c8()))return H.d([s.ch],[P.J])
else if(a.w(0,$.b9())){u=H.d([-1,-1,-1,-1],[P.J])
return u}else return H.d([],[P.J])},
cc:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.T()
t.d.q(0,new F.jj(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.aX(0)}return!0},
cb:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.T()
t.d.q(0,new F.ji(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.M(s)))
s=t.a
if(s!=null){s.X()
s=t.a.e
if(s!=null)s.aX(0)}return!0},
e_:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.b
t.a.a.O()
t=t.e
a.a.a.O()
if(t==a.e)return s}return},
ix:function(a){var u=this.e_(a)
if(u!=null)return u
return a.e_(this)},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.P()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.l])
q.push(C.a.an(J.ap(s.e),0))
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
q.push(r)
t=C.b.v(q,", ")
return a+"{"+t+"}"},
P:function(){return this.G("")}}
F.jj.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.p(0,t)}}}
F.ji.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.p(0,t)}}}
F.jc.prototype={
O:function(){},
m:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.i("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.X()
return!0},
c9:function(a,b,c){var u=null,t=F.bU(u,u,u,new V.a7(a,b,c),u,u,u,u,0)
this.m(0,t)
return t},
gk:function(a){return this.c.length},
aP:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].cc()
return!0},
aO:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].cb()
return!0},
bv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.l()
o=q.b
if(typeof o!=="number")return o.l()
n=q.c
if(typeof n!=="number")return n.l()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.D(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.J(null)}}}}return!0},
i:function(a){return this.P()},
G:function(a){var u,t,s,r
this.O()
u=H.d([],[P.l])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].G(a))
return C.b.v(u,"\n")},
P:function(){return this.G("")}}
F.jd.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
q:function(a,b){var u=this
C.b.q(u.b,b)
C.b.q(u.c,new F.je(u,b))
C.b.q(u.d,new F.jf(u,b))},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
return C.b.v(r,"\n")}}
F.je.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.jf.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.jg.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
return C.b.v(r,"\n")}}
F.jh.prototype={
gk:function(a){return this.b.length},
i:function(a){return this.P()},
P:function(){var u,t,s,r=H.d([],[P.l])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].G(""))
return C.b.v(r,"\n")}}
O.d9.prototype={
gC:function(){var u=this.rx
return u==null?this.rx=D.L():u},
E:function(a){var u=this.rx
if(u!=null)u.J(a)},
sae:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.z().a)){this.r2=a
u=new D.w("vectorScale",u,a)
u.b=!0
this.E(u)}},
ap:function(a,b){},
eq:function(a,b){var u,t,s,r,q,p,o=this,n="Inspection",m=2929
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.fR(t,n)
u.cP(t,n)
u.e5(0,"uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n","precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n")
u.z=u.x.h(0,"posAttr")
u.Q=u.x.h(0,"normAttr")
u.ch=u.x.h(0,"clrAttr")
u.cx=u.x.h(0,"binmAttr")
u.cy=H.k(u.y.h(0,"lightVec"),"$iE")
u.db=H.k(u.y.h(0,"ambientClr"),"$ibr")
u.dx=H.k(u.y.h(0,"diffuseClr"),"$ibr")
u.dy=H.k(u.y.h(0,"weightScalar"),"$iX")
u.fr=H.k(u.y.h(0,"viewMat"),"$iad")
u.fx=H.k(u.y.h(0,"viewObjMatrix"),"$iad")
u.fy=H.k(u.y.h(0,"projViewObjMatrix"),"$iad")
a.dz(u)}o.a=u}if(b.e==null){b.d.aP()
b.d.aO()
b.d.bv()
t=new Z.cY()
t.a=new H.C([P.l,Z.bE])
b.e=t}t=o.a
t.aB(a)
s=o.r2
r=t.dy
r.a.uniform1f(r.d,s)
s=o.b
r=t.cy
r.toString
q=s.a
p=s.b
s=s.c
r.a.uniform3f(r.d,q,p,s)
s=a.db
s=s.ga1(s)
p=t.fr
p.toString
p.a9(s.a5(0,!0))
s=a.geB()
p=t.fx
p.toString
p.a9(s.a5(0,!0))
s=a.gem()
t=t.fy
t.toString
t.a9(s.a5(0,!0))
t=b.e
if(t instanceof Z.cY){s=a.a
s.blendFunc(1,1)
if(b.c==null){s.disable(m)
s.enable(3042)
s.blendFunc(1,1)
if(o.k3)o.dh(a,t,b.d,"Axis",o.gcZ(),o.z,o.y)
if(o.k4)o.dh(a,t,b.d,"AABB",o.gcV(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}else{s.enable(m)
s.enable(3042)
s.blendFunc(770,771)
if(o.Q)o.a0(a,t,b.c,"shapeFill",o.ghM(),o.d,o.c)
if(o.id)o.a0(a,t,b.c,"colorFill",o.gf9(),o.x,o.r)
if(o.k1)o.a0(a,t,b.c,"txt2DColor",o.ghX(),o.x,o.r)
if(o.k2)o.a0(a,t,b.c,"weight",o.gi2(),o.x,o.r)
s.disable(m)
s.blendFunc(1,1)
if(o.cx)o.a0(a,t,b.c,"vertices",o.gi0(),o.f,o.e)
if(o.fr)o.a0(a,t,b.c,"faceCenters",o.gfl(),o.f,o.e)
if(o.ch)o.a0(a,t,b.c,"wireFrame",o.gi4(),o.f,o.e)
if(o.cy)o.a0(a,t,b.c,"normals",o.gfC(),o.f,o.e)
if(o.db)o.a0(a,t,b.c,"binormals",o.gf3(),o.f,o.e)
if(o.dx)o.a0(a,t,b.c,"tangentals",o.ghP(),o.f,o.e)
if(o.dy)o.a0(a,t,b.c,"textureCube",o.ghZ(),o.f,o.e)
if(o.fx)o.a0(a,t,b.c,"faceNormals",o.gfn(),o.f,o.e)
if(o.fy)o.a0(a,t,b.c,"faceBinormals",o.gfj(),o.x,o.r)
if(o.go)o.a0(a,t,b.c,"faceTangentals",o.gfp(),o.x,o.r)
if(o.k3)o.a0(a,t,b.c,"Axis",o.gcZ(),o.z,o.y)
if(o.k4)o.a0(a,t,b.c,"AABB",o.gcV(),o.z,o.y)
s.enable(m)
s.blendFunc(770,771)}}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dK()},
a0:function(a,b,c,d,e,f,g){var u,t=b.a.h(0,d)
if(t==null){t=this.d_(a,e.$1(c))
b.a.j(0,d,t)}u=this.a
u.db.bh(f)
u.dx.bh(g)
t.ej(a)},
dh:function(a,b,c,d,e,f,g){var u,t=b.a.h(0,d)
if(t==null){t=this.d_(a,e.$1(c))
b.a.j(0,d,t)}u=this.a
u.db.bh(f)
u.dx.bh(g)
t.ej(a)},
d_:function(a,b){var u=this,t=$.aF(),s=$.aE(),r=b.dF(new Z.dV(a.a),new Z.aW(t.a|s.a|$.aD().a|$.bz().a))
r.ak($.aF()).e=u.a.z.c
r.ak($.aE()).e=u.a.Q.c
r.ak($.bz()).e=u.a.ch.c
r.ak($.aD()).e=u.a.cx.c
return r},
hN:function(a){var u=F.a9()
C.b.q(a.a.c,new O.h1(u,new V.K(1,1,1,1)))
C.b.q(a.d.b,new O.h2(u))
return u},
du:function(a,b){var u,t={}
t.a=b
u=F.a9()
t.a=new V.K(0,0.7,1,1)
C.b.q(a.a.c,new O.hc(t,u))
t=new O.hb(u)
C.b.q(a.c.b,new O.hd(u,t))
C.b.q(a.d.b,new O.he(u,t))
return u},
i5:function(a){return this.du(a,null)},
i1:function(a){var u=F.a9()
C.b.q(a.a.c,new O.h7(new V.K(1,1,1,1),u))
return u},
fD:function(a){var u=F.a9()
C.b.q(a.a.c,new O.h0(new V.K(1,1,0.3,1),u))
return u},
f4:function(a){var u=F.a9()
C.b.q(a.a.c,new O.fU(new V.K(1,0.3,0.3,1),u))
return u},
hQ:function(a){var u=F.a9()
C.b.q(a.a.c,new O.h3(new V.K(1,0.3,1,1),u))
return u},
i_:function(a){var u=F.a9()
C.b.q(a.a.c,new O.h6(new V.K(1,0.3,0.3,1),u))
return u},
fm:function(a){var u=F.a9()
C.b.q(a.d.b,new O.fY(new V.K(1,1,0.3,1),u))
return u},
fo:function(a){var u=F.a9()
C.b.q(a.d.b,new O.fZ(new V.K(1,1,0.3,1),u))
return u},
fk:function(a){var u=F.a9()
C.b.q(a.d.b,new O.fX(new V.K(1,0.3,0.3,1),u))
return u},
fq:function(a){var u=F.a9()
C.b.q(a.d.b,new O.h_(new V.K(1,0.3,1,1),u))
return u},
fa:function(a){var u=F.a9()
C.b.q(a.a.c,new O.fV(u))
C.b.q(a.d.b,new O.fW(u))
return u},
hY:function(a){var u=F.a9()
C.b.q(a.a.c,new O.h4(u))
C.b.q(a.d.b,new O.h5(u))
return u},
i3:function(a){var u,t,s={},r=F.a9(),q=a.a.c
if(q.length<1)return r
s.a=s.b=q[0].ch
C.b.q(q,new O.h8(s))
q=s.a
u=s.b
if(typeof q!=="number")return q.n()
if(typeof u!=="number")return H.e(u)
t=q-u
s.c=t
if(t<=0)s.c=1
C.b.q(a.a.c,new O.h9(s,r))
C.b.q(a.d.b,new O.ha(r))
return r},
f1:function(a){return this.f2(a)},
f2:function(a){var u=F.a9(),t=new O.fT(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
eW:function(a){return this.eX(a)},
eX:function(a){var u,t,s,r,q,p,o,n,m,l=a.b5(),k=F.a9(),j=new O.fS(k),i=l.a,h=l.b,g=l.c,f=j.$3(i,h,g),e=l.d
if(typeof i!=="number")return i.p()
e=i+e
u=j.$3(e,h,g)
t=l.e
if(typeof h!=="number")return h.p()
t=h+t
s=j.$3(e,t,g)
r=j.$3(i,t,g)
q=l.f
if(typeof g!=="number")return g.p()
q=g+q
p=j.$3(i,h,q)
o=j.$3(e,h,q)
n=j.$3(e,t,q)
m=j.$3(i,t,q)
k.c.t(0,f,u)
k.c.t(0,u,s)
k.c.t(0,s,r)
k.c.t(0,r,f)
k.c.t(0,p,o)
k.c.t(0,o,n)
k.c.t(0,n,m)
k.c.t(0,m,p)
k.c.t(0,f,p)
k.c.t(0,u,o)
k.c.t(0,s,n)
k.c.t(0,r,m)
return k}}
O.h1.prototype={
$1:function(a){var u=this.a.a,t=a.Z()
t.sV(0,this.b)
t.sU(V.T())
u.m(0,t)}}
O.h2.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.O()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a7(0,u,t,s)}}
O.hc.prototype={
$1:function(a){var u=this.b.a,t=a.Z()
t.sV(0,this.a.a)
t.sU(V.T())
u.m(0,t)}}
O.hb.prototype={
$2:function(a,b){if(a.ix(b)==null)this.a.c.t(0,a,b)}}
O.hd.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.O()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.b(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.O()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.b(t,r)
this.b.$2(u,t[r])}}
O.he.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.O()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.O()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.b(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.h7.prototype={
$1:function(a){var u,t=a.Z()
t.sV(0,this.a)
t.sU(V.T())
u=this.b
u.a.m(0,t)
u.b.a.a.m(0,t)
F.lx(t)}}
O.h0.prototype={
$1:function(a){var u,t,s=a.Z()
s.sV(0,this.a)
s.sU(V.T())
u=s.Z()
u.sU(s.r)
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.fU.prototype={
$1:function(a){var u,t,s=a.Z()
s.sV(0,this.a)
s.sU(V.T())
u=s.Z()
u.sU(a.x)
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.h3.prototype={
$1:function(a){var u,t,s=a.Z()
s.sV(0,this.a)
s.sU(V.T())
u=s.Z()
u.sU(a.x.aC(a.r).N(0))
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.h6.prototype={
$1:function(a){var u,t,s=a.Z()
s.sV(0,this.a)
s.sU(V.T())
u=s.Z()
u.sU(a.z)
t=this.b
t.a.m(0,s)
t.a.m(0,u)
t.c.t(0,s,u)}}
O.fY.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bU(u,V.T(),this.a,t,s,u,u,u,0)
s=this.b
s.a.m(0,r)
s.b.a.a.m(0,r)
F.lx(r)}}
O.fZ.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bU(u,V.T(),this.a,t,s,u,u,u,0),q=r.Z()
q.sU(a.d)
s=this.b
s.a.m(0,r)
s.a.m(0,q)
s.c.t(0,r,q)}}
O.fX.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bU(u,V.T(),this.a,t,s,u,u,u,0),q=r.Z()
q.sU(a.e)
s=this.b
s.a.m(0,r)
s.a.m(0,q)
s.c.t(0,r,q)}}
O.h_.prototype={
$1:function(a){var u=null,t=a.a.f.p(0,a.b.f).p(0,a.c.f).A(0,3),s=a.d,r=F.bU(u,V.T(),this.a,t,s,u,u,u,0),q=r.Z()
q.sU(a.e.aC(a.d).N(0))
s=this.b
s.a.m(0,r)
s.a.m(0,q)
s.c.t(0,r,q)}}
O.fV.prototype={
$1:function(a){var u=this.a.a,t=a.Z()
t.sU(V.T())
u.m(0,t)}}
O.fW.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.O()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a7(0,u,t,s)}}
O.h4.prototype={
$1:function(a){var u,t,s=a.y,r=this.a.a,q=a.Z(),p=s.a,o=s.b
if(typeof p!=="number")return p.D()
if(p<0)p=0
else if(p>1)p=1
if(typeof o!=="number")return o.D()
u=o<0
if(u)t=0
else if(o>1)t=1
else t=o
if(u)o=0
else if(o>1)o=1
q.sV(0,new V.K(p,t,o,1))
q.sU(V.T())
r.m(0,q)}}
O.h5.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.O()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a7(0,u,t,s)}}
O.h8.prototype={
$1:function(a){var u=this.a,t=u.b,s=a.ch
if(typeof t!=="number")return t.a2()
if(typeof s!=="number")return H.e(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.D()
if(t<s)u.a=s}}
O.h9.prototype={
$1:function(a){var u,t=a.ch,s=this.a,r=s.b
if(typeof t!=="number")return t.n()
if(typeof r!=="number")return H.e(r)
u=V.nG((t-r)/s.c*5/6,1,1)
s=this.b.a
r=a.Z()
r.sU(V.T())
r.sV(0,V.nH(u))
s.m(0,r)}}
O.ha.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.O()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.O()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a7(0,u,t,s)}}
O.fT.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.K(s,r,q,1)
s=this.a
u=s.a.c9(0,0,0)
u.sU(V.T())
u.sb9(V.mD())
u.sV(0,p)
t=s.a.c9(a,b,c)
t.sU(V.T())
t.sb9(V.mD())
t.sV(0,p)
s.c.t(0,u,t)}}
O.fS.prototype={
$3:function(a,b,c){var u=this.a.a.c9(a,b,c)
u.sU(V.T())
u.sb9(new V.S(a,b,c))
return u}}
O.bm.prototype={
gC:function(){var u=this.fr
return u==null?this.fr=D.L():u},
E:function(a){var u=this.fr
if(u!=null)u.J(a)},
bJ:function(){return this.E(null)},
di:function(a){this.a=null
this.E(a)},
hG:function(){return this.di(null)},
fJ:function(a,b){var u=new D.bJ()
u.b=!0
this.E(u)},
fL:function(a,b){var u=new D.bK()
u.b=!0
this.E(u)},
d4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.u
f=[f,f]
u=new H.C(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gag()
o=u.h(0,q.gag())
u.j(0,p,o==null?1:o)}n=H.d([],[A.cW])
u.q(0,new O.hG(g,n))
C.b.b1(n,new O.hH())
m=new H.C(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gag()
o=m.h(0,q.gag())
m.j(0,p,o==null?1:o)}l=H.d([],[A.d2])
m.q(0,new O.hI(g,l))
C.b.b1(l,new O.hJ())
k=new H.C(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gag()
o=k.h(0,q.gag())
k.j(0,p,o==null?1:o)}j=H.d([],[A.ds])
k.q(0,new O.hK(g,j))
C.b.b1(j,new O.hL())
i=new H.C(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.q)(f),++r){q=f[r]
s=q.gag()
p=i.h(0,q.gag())
i.j(0,s,p==null?1:p)}h=H.d([],[A.dz])
i.q(0,new O.hM(g,h))
C.b.b1(h,new O.hN())
f=C.c.a6(g.e.a.length+3,4)
g.dy.e
return A.o2(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
aj:function(a,b){if(b!=null)if(!C.b.a3(a,b)){b.a=a.length
a.push(b)}},
ap:function(a,b){var u
for(u=this.dx.a,u=new J.ab(u,u.length);u.B();)C.i.ap(u.d,b)},
eq:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.d4()
u=b2.fr.h(0,b1.b6)
if(u==null){u=A.o1(b1,b2.a)
b2.dz(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bx
b1=b3.e
if(!(b1 instanceof Z.bE))b1=b3.e=null
if(b1==null||!b1.d.w(0,s)){b1=t.k4
if(b1)b3.d.aP()
r=t.r1
if(r)b3.d.aO()
q=t.rx
if(q)b3.d.bv()
p=b3.d.dF(new Z.dV(b2.a),s)
p.ak($.aF()).e=b0.a.Q.c
if(b1)p.ak($.aE()).e=b0.a.cx.c
if(r)p.ak($.aD()).e=b0.a.ch.c
if(t.r2)p.ak($.ba()).e=b0.a.cy.c
if(q)p.ak($.bA()).e=b0.a.db.c
if(t.ry)p.ak($.b9()).e=b0.a.dx.c
b3.e=p}o=H.d([],[T.dF])
b0.a.aB(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga1(r)
b1=b1.dy
b1.toString
b1.a9(r.a5(0,!0))}if(t.fx){b1=b0.a
r=b2.geB()
b1=b1.fr
b1.toString
b1.a9(r.a5(0,!0))}b1=b0.a
r=b2.gem()
b1=b1.fy
b1.toString
b1.a9(r.a5(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga1(r)
b1=b1.fx
b1.toString
b1.a9(r.a5(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.a9(C.i.a5(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.a9(C.i.a5(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.a9(C.i.a5(r,!0))}if(t.aS>0){n=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,n)
for(m=0;m<n;++m){b1=b0.a
r=b0.e.a
if(m>=r.length)return H.b(r,m)
r=r[m]
b1=b1.r1
if(m>=b1.length)return H.b(b1,m)
b1=b1[m]
l=new Float32Array(H.bZ(r.a5(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,l)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.f.d)
b1=b0.a
r=b0.f.d
b1.aq(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.r.d)
b1=b0.a
r=b0.r.d
b1.aq(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.x.d)
b1=b0.a
r=b0.x.d
b1.aq(b1.aS,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bx
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.y.d)
b1=b0.a
r=b0.y.d
b1.aq(b1.dN,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
k=b0.z.ch
q=q.dQ
q.a.uniform1f(q.d,k)}if(r){r=b0.a
q=b0.z.f
r=r.dO
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.z.d)
b1=b0.a
r=b0.z.d
b1.aq(b1.dP,r)}b1=t.z
if(b1.length>0){r=P.u
j=new H.C([r,r])
for(r=b0.dx.e,q=r.length,i=0;i<r.length;r.length===q||(0,H.q)(r),++i){h=r[i]
g=h.gag()
f=j.h(0,g)
if(f==null)f=0
j.j(0,g,f+1)
e=J.B(b0.a.ck.h(0,g),f)
k=h.gjv()
d=$.aP
k=k.aZ(d==null?$.aP=new V.a7(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gjz()
d=$.aP
k=k.aZ(d==null?$.aP=new V.a7(0,0,0):d)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gV(h)
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
if(h.gdM()){k=h.gdA()
d=e.e
d.a.uniform1f(d.d,k)
k=h.gdB()
d=e.f
d.a.uniform1f(d.d,k)
k=h.gdC()
d=e.r
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.q)(b1),++i){q=b1[i].a
n=j.h(0,q)
if(n==null)n=0
q=b0.a.cj.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga1(r)
r=P.u
b=new H.C([r,r])
for(r=b0.dx.f,q=r.length,i=0;i<r.length;r.length===q||(0,H.q)(r),++i){h=r[i]
g=h.gag()
f=b.h(0,g)
if(f==null)f=0
b.j(0,g,f+1)
e=J.B(b0.a.cm.h(0,g),f)
k=c.cG(h.gdJ(h))
d=k.a
if(typeof d!=="number")return d.l()
a=k.b
if(typeof a!=="number")return a.l()
a0=k.c
if(typeof a0!=="number")return a0.l()
a0=k.A(0,Math.sqrt(d*d+a*a+a0*a0))
a=e.e
d=a0.a
k=a0.b
a0=a0.c
a.a.uniform3f(a.d,d,k,a0)
a0=h.gV(h)
k=e.f
k.a.uniform3f(k.d,a0.a,a0.b,a0.c)
h.gao()
k=h.gdJ(h)
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gbF()
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gbD(h)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gao()
if(!C.b.a3(o,k)){k.a=o.length
o.push(k)}k=h.gao()
d=k.gaT(k)
if(d){d=e.r
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.q)(b1),++i){q=b1[i].a
n=b.h(0,q)
if(n==null)n=0
q=b0.a.cl.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga1(r)
r=P.u
a1=new H.C([r,r])
for(r=b0.dx.r,q=r.length,i=0;i<r.length;r.length===q||(0,H.q)(r),++i){h=r[i]
g=h.gag()
f=a1.h(0,g)
if(f==null)f=0
a1.j(0,g,f+1)
e=J.B(b0.a.co.h(0,g),f)
a2=c.l(0,h.ga1(h))
k=h.ga1(h)
d=$.aP
k=k.aZ(d==null?$.aP=new V.a7(0,0,0):d)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=$.aP
k=a2.aZ(k==null?$.aP=new V.a7(0,0,0):k)
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gV(h)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
h.gao()
k=a2.e8(0)
d=k.a
a=k.b
a0=k.c
a3=k.e
a4=k.f
a5=k.r
a6=k.y
a7=k.z
k=k.Q
a8=e.d
a8.toString
l=new Float32Array(H.bZ(new V.di(d,a,a0,a3,a4,a5,a6,a7,k).a5(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,l)
h.gao()
k=h.gao()
if(!C.b.a3(o,k)){k.a=o.length
o.push(k)}k=h.gao()
d=k.gaT(k)
if(d){d=e.f
d.toString
a=k.gaT(k)
if(!a)d.a.uniform1i(d.d,0)
else{k=k.giE(k)
d.a.uniform1i(d.d,k)}}h.gb0()
k=h.geG()
d=e.x
d.toString
a=k.gio(k)
a0=k.gip(k)
a3=k.giq()
k=k.gim()
d.a.uniform4f(d.d,a,a0,a3,k)
k=h.gb0()
if(!C.b.a3(o,k)){k.a=o.length
o.push(k)}k=h.gb0()
d=k.gaT(k)
if(d){d=e.r
d.toString
a=k.gaT(k)
if(!a)d.a.uniform1i(d.d,0)
else{k=k.giE(k)
d.a.uniform1i(d.d,k)}}if(h.gdM()){k=h.gdA()
d=e.y
d.a.uniform1f(d.d,k)
k=h.gdB()
d=e.z
d.a.uniform1f(d.d,k)
k=h.gdC()
d=e.Q
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.q)(b1),++i){q=b1[i].a
n=a1.h(0,q)
if(n==null)n=0
q=b0.a.cn.h(0,q)
q.a.uniform1i(q.d,n)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga1(r)
r=P.u
a9=new H.C([r,r])
for(r=b0.dx.x,q=r.length,i=0;i<r.length;r.length===q||(0,H.q)(r),++i){h=r[i]
g=h.gag()
f=a9.h(0,g)
if(f==null)f=0
a9.j(0,g,f+1)
e=J.B(b0.a.cq.h(0,g),f)
k=h.gj2(h)
d=e.b
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gdJ(h).jK()
d=e.c
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=c.aZ(h.gj2(h))
d=e.d
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gV(h)
d=e.e
d.a.uniform3f(d.d,k.a,k.b,k.c)
h.gao()
k=h.gbF()
d=e.f
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gbD(h)
d=e.r
d.a.uniform3f(d.d,k.a,k.b,k.c)
k=h.gjL()
d=e.x
d.a.uniform1f(d.d,k)
k=h.gjM()
d=e.y
d.a.uniform1f(d.d,k)
h.gao()
k=h.gao()
if(!C.b.a3(o,k)){k.a=o.length
o.push(k)}k=h.gao()
d=k.gaT(k)
if(d){d=e.dx
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}h.gb0()
k=h.geG()
d=e.z
d.toString
a=k.gio(k)
a0=k.gip(k)
a3=k.giq()
k=k.gim()
d.a.uniform4f(d.d,a,a0,a3,k)
k=h.gb0()
if(!C.b.a3(o,k)){k.a=o.length
o.push(k)}k=h.gb0()
d=k.gaT(k)
if(d){d=e.dy
d.toString
a=k.d
if(!a)d.a.uniform1i(d.d,0)
else{k=k.a
d.a.uniform1i(d.d,k)}}if(h.gjy()){k=h.gjx()
d=e.Q
d.a.uniform1f(d.d,k)
k=h.gjw()
d=e.ch
d.a.uniform1f(d.d,k)}if(h.gdM()){k=h.gdA()
d=e.cx
d.a.uniform1f(d.d,k)
k=h.gdB()
d=e.cy
d.a.uniform1f(d.d,k)
k=h.gdC()
d=e.db
d.a.uniform1f(d.d,k)}}for(r=b1.length,i=0;i<b1.length;b1.length===r||(0,H.q)(b1),++i){q=b1[i].a
n=a9.h(0,q)
if(n==null)n=0
q=b0.a.cp.h(0,q)
q.a.uniform1i(q.d,n)}}}if(t.f.b){b0.aj(o,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.aq(b1.dR,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga1(r).e8(0)}b1=b1.id
b1.toString
b1.a9(r.a5(0,!0))}if(t.db){b0.aj(o,b0.ch)
b1=b0.a
r=b0.ch
b1.hI(b1.dS,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dT
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.aq(b1.dU,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
k=b0.cy.ch
q=q.dV
q.a.uniform1f(q.d,k)}if(r){r=b0.a
q=b0.cy.f
r=r.dW
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.aj(o,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.aq(b1.dX,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
k=b0.db.f
r=r.dY
r.a.uniform1f(r.d,k)}if(b1.b){b0.aj(o,b0.db.d)
r=b0.a
k=b0.db.d
r.aq(r.dZ,k)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,m=0;m<o.length;++m){k=o[m]
if(!k.c&&k.d){k.c=!0
r.activeTexture(33984+k.a)
r.bindTexture(3553,k.b)}}k=H.k(b3.e,"$ibE")
k.aB(b2)
k.aF(b2)
k.ey(b2)
if(!q||b1.b||!1)r.disable(3042)
for(m=0;m<o.length;++m){b1=o[m]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(3553,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.dK()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d4().b6}}
O.hG.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.cW(a,C.c.a6(b+3,4)*4))}}
O.hH.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hI.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.d2(a,C.c.a6(b+3,4)*4))}}
O.hJ.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hK.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.ds(a,C.c.a6(b+3,4)*4))}}
O.hL.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hM.prototype={
$2:function(a,b){if(typeof b!=="number")return b.p()
return this.b.push(new A.dz(a,C.c.a6(b+3,4)*4))}}
O.hN.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hA.prototype={
c5:function(a){var u=this,t=u.f
if(!(Math.abs(t-a)<$.z().a)){u.f=a
t=new D.w(u.b,t,a)
t.b=!0
u.a.E(t)}},
az:function(){this.cN()
this.c5(1)},
sad:function(a,b){var u,t=this
if(b==null)b=1
u=t.c.b
if(b<=0){t.aM(new A.a_(!1,u,!1))
t.c5(0)}else{t.aM(new A.a_(!0,u,!1))
t.c5(b>=1?1:b)}}}
O.cm.prototype={
E:function(a){return this.a.E(a)},
bJ:function(){return this.E(null)},
az:function(){},
aM:function(a){var u,t,s=this
if(!s.c.w(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.E(null)}},
sbc:function(a){var u,t=this,s=t.c
if(!s.b)t.aM(new A.a_(s.a,!0,!1))
s=t.d
if(s!==a){if(s!=null)s.gC().Y(0,t.gbj())
u=t.d
t.d=a
a.gC().m(0,t.gbj())
s=new D.w(t.b+".texture2D",u,t.d)
s.b=!0
t.a.E(s)}}}
O.hB.prototype={}
O.aK.prototype={
dk:function(a){var u,t,s=this
if(!s.f.w(0,a)){u=s.f
s.f=a
t=new D.w(s.b+".color",u,a)
t.b=!0
s.a.E(t)}},
az:function(){this.cN()
this.dk(new V.V(1,1,1))},
sV:function(a,b){this.aM(new A.a_(!0,this.c.b,!1))
this.dk(b)}}
O.hD.prototype={}
O.hE.prototype={
az:function(){var u,t=this
t.cO()
u=t.ch
if(!(Math.abs(u-1)<$.z().a)){t.ch=1
u=new D.w(t.b+".refraction",u,1)
u.b=!0
t.a.E(u)}}}
O.hF.prototype={
c6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.z().a)){u.ch=a
t=new D.w(u.b+".shininess",t,a)
t.b=!0
u.a.E(t)}},
az:function(){this.cO()
this.c6(100)}}
O.dE.prototype={}
T.dF.prototype={}
T.iF.prototype={}
T.iG.prototype={
gC:function(){var u=this.y
return u==null?this.y=D.L():u}}
T.iH.prototype={
b7:function(a){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9729)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iG()
t.a=0
t.b=q
t.d=t.c=!1
W.Y(u,"load",new T.iI(this,t,u,!1,q,!1,!1),!1)
return t},
hH:function(a,b,c){var u,t,s,r
b=V.lR(b)
u=V.lR(a.width)
t=V.lR(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.lk()
s.width=u
s.height=t
r=C.j.eD(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pA(r.getImageData(0,0,s.width,s.height))}}}
T.iI.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.hH(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.R.jn(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.ir()}++s.e}}
X.lj.prototype={}
X.fM.prototype={
gC:function(){var u=this.x
return u==null?this.x=D.L():u}}
X.dr.prototype={
gC:function(){var u=this.f
return u==null?this.f=D.L():u},
aI:function(a){var u=this.f
if(u!=null)u.J(a)},
eV:function(){return this.aI(null)},
sb8:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gC().Y(0,s.gcU())
t=s.b
s.b=a
if(a!=null)a.gC().m(0,s.gcU())
u=new D.w("mover",t,s.b)
u.b=!0
s.aI(u)}}}
X.iB.prototype={}
V.ff.prototype={
a7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.dP().gaV().h(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.b(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.eY(l.c).m(0,p)
n=W.m1("checkbox")
n.checked=s
W.Y(n,"change",new V.fg(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.eY(l.c).m(0,q.createElement("br"))
l.d.push(n)
if(r)l.dt(u,s)},
t:function(a,b,c){return this.a7(a,b,c,!1)},
dt:function(a,b){var u,t,s,r,q,p=this.a,o=P.dP().gaV().h(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.iV(o,a-u+1,"0")
t=a>0?C.a.u(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.ab(o,u)
s=P.dP()
u=P.l
r=P.m6(s.gaV(),u,u)
r.j(0,p,t)
q=s.cD(0,r)
p=window.history
u=q.i(0)
p.toString
p.replaceState(new P.ez([],[]).bf(""),"",u)}}
V.fg.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.dt(u.d,t.checked)}}
V.lc.prototype={
$1:function(a){var u=C.d.ev(this.a.giC(),2)
if(u!=="0.00")P.eW(u+" fps")}}
V.i9.prototype={
a7:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.dP().gaV().h(0,H.f(u))
if(t==null)if(d){c.$0()
m.ds(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.eY(m.c).m(0,q)
o=W.m1("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.ia(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.eY(m.c).m(0,r.createElement("br"))},
t:function(a,b,c){return this.a7(a,b,c,!1)},
ds:function(a){var u,t,s=P.dP(),r=P.l,q=P.m6(s.gaV(),r,r)
q.j(0,this.a,a)
u=s.cD(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.ez([],[]).bf(""),"",t)}}
V.ia.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.ds(u.d)}}}
V.ip.prototype={
eQ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.ir(o),!1)},
dw:function(a){var u,t,s,r,q,p,o,n
this.hK()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.iH(a),s.toString,r=new H.U(r),r=new P.cK(s.ew(new H.ck(r,r.gk(r))).a());r.B();){s=r.gL(r)
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
if(H.pV(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.b(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kc(C.O,s,C.f,!1)
o=u.createElement("a")
o.className="linkPar"
o.href="#"+H.f(n)
o.textContent=s
t.appendChild(o)}break
case"Other":q=u.createElement("div")
q.className="normalPar"
q.textContent=s.b
t.appendChild(q)
break}}this.a.appendChild(t)},
i6:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
for(s=0;s<3;++s){r=o.createElement("div")
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
hK:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.iL()
t=P.l
u.a=new H.C([t,L.dB])
u.b=new H.C([t,L.dJ])
u.c=P.m7(t)
u.d=u.R(0,q)
t=u.R(0,q).v(0,p)
s=K.ac(new H.U("*"))
t.a.push(s)
t.c=!0
t=u.R(0,p).v(0,p)
s=new K.b2()
r=[K.dh]
s.a=H.d([],r)
t.a.push(s)
t=K.ac(new H.U("*"))
s.a.push(t)
t=u.R(0,p).v(0,"BoldEnd")
s=K.ac(new H.U("*"))
t.a.push(s)
t.c=!0
t=u.R(0,q).v(0,o)
s=K.ac(new H.U("_"))
t.a.push(s)
t.c=!0
t=u.R(0,o).v(0,o)
s=new K.b2()
s.a=H.d([],r)
t.a.push(s)
t=K.ac(new H.U("_"))
s.a.push(t)
t=u.R(0,o).v(0,n)
s=K.ac(new H.U("_"))
t.a.push(s)
t.c=!0
t=u.R(0,q).v(0,m)
s=K.ac(new H.U("`"))
t.a.push(s)
t.c=!0
t=u.R(0,m).v(0,m)
s=new K.b2()
s.a=H.d([],r)
t.a.push(s)
t=K.ac(new H.U("`"))
s.a.push(t)
t=u.R(0,m).v(0,"CodeEnd")
s=K.ac(new H.U("`"))
t.a.push(s)
t.c=!0
t=u.R(0,q).v(0,l)
s=K.ac(new H.U("["))
t.a.push(s)
t.c=!0
t=u.R(0,l).v(0,k)
s=K.ac(new H.U("|"))
t.a.push(s)
s=u.R(0,l).v(0,j)
t=K.ac(new H.U("]"))
s.a.push(t)
s.c=!0
s=u.R(0,l).v(0,l)
t=new K.b2()
t.a=H.d([],r)
s.a.push(t)
s=K.ac(new H.U("|]"))
t.a.push(s)
s=u.R(0,k).v(0,j)
t=K.ac(new H.U("]"))
s.a.push(t)
s.c=!0
s=u.R(0,k).v(0,k)
t=new K.b2()
t.a=H.d([],r)
s.a.push(t)
s=K.ac(new H.U("|]"))
t.a.push(s)
u.R(0,q).v(0,i).a.push(new K.f_())
s=u.R(0,i).v(0,i)
t=new K.b2()
t.a=H.d([],r)
s.a.push(t)
s=K.ac(new H.U("*_`["))
t.a.push(s)
s=u.R(0,"BoldEnd")
s.d=s.a.be(p)
s=u.R(0,n)
s.d=s.a.be(o)
s=u.R(0,"CodeEnd")
s.d=s.a.be(m)
s=u.R(0,j)
s.d=s.a.be("Link")
s=u.R(0,i)
s.d=s.a.be(i)
this.b=u}}
V.ir.prototype={
$1:function(a){P.mr(C.n,new V.iq(this.a))}}
V.iq.prototype={
$0:function(){var u=C.d.au(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
G.kD.prototype={
$1:function(a){var u
this.a.a=a
u=this.b.y.a
if(u.length>1)u[0].b=a}}
G.kE.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.w("showFilled",!a,a)
u.b=!0
t.E(u)}}}
G.kF.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.w("showWireFrame",!a,a)
u.b=!0
t.E(u)}}}
G.kQ.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.w("showVertices",!a,a)
u.b=!0
t.E(u)}}}
G.l0.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.w("showNormals",!a,a)
u.b=!0
t.E(u)}}}
G.l2.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.w("showBinormals",!a,a)
u.b=!0
t.E(u)}}}
G.l3.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.w("showTangentals",!a,a)
u.b=!0
t.E(u)}}}
G.l4.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.w("showFaceCenters",!a,a)
u.b=!0
t.E(u)}}}
G.l5.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.w("showFaceNormals",!a,a)
u.b=!0
t.E(u)}}}
G.l6.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.w("showFaceBinormals",!a,a)
u.b=!0
t.E(u)}}}
G.l7.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.w("showFaceTangentals",!a,a)
u.b=!0
t.E(u)}}}
G.kG.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.w("showColorFill",!a,a)
u.b=!0
t.E(u)}}}
G.kH.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.w("showTxt2DColor",!a,a)
u.b=!0
t.E(u)}}}
G.kI.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.w("showTxtCube",!a,a)
u.b=!0
t.E(u)}}}
G.kJ.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.w("showWeight",!a,a)
u.b=!0
t.E(u)}}}
G.kK.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.w("showAxis",!a,a)
u.b=!0
t.E(u)}}}
G.kL.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.w("showAABB",!a,a)
u.b=!0
t.E(u)}}}
G.l8.prototype={
$1:function(a){var u=E.fC(null)
u.scK(0,a.c)
C.b.q(a.y.a,new G.l9(u,this))
return u}}
G.l9.prototype={
$1:function(a){this.a.y.m(0,this.b.$1(a))}}
G.la.prototype={
eC:function(a){var u=0,t=P.a4(null),s=this,r,q,p,o,n
var $async$$1=P.a5(function(b,c){if(b===1)return P.a1(c,t)
while(true)switch(u){case 0:u=2
return P.aa(O.dq(a,s.b.f),$async$$1)
case 2:n=c
n.jf(3.5)
r=s.c
q=r.y
p=q.a
if(p.length>0){q.a=H.d([],[H.aY(q,0)])
q=q.d
if(q!=null)q.$2(0,p)}r.y.m(0,n)
n.b=s.a.a
o=s.d.$1(n)
o.saY(s.e)
r.y.m(0,o)
return P.a2(null,t)}})
return P.a3($async$$1,t)},
$1:function(a){return this.eC(a)}}
G.kM.prototype={
$0:function(){var u=0,t=P.a4(P.Z),s=this
var $async$$0=P.a5(function(a,b){if(a===1)return P.a1(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Cube.obj")
return P.a2(null,t)}})
return P.a3($async$$0,t)}}
G.kN.prototype={
$0:function(){var u=0,t=P.a4(P.Z),s=this
var $async$$0=P.a5(function(a,b){if(a===1)return P.a1(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/tree/tree.obj")
return P.a2(null,t)}})
return P.a3($async$$0,t)}}
G.kO.prototype={
$0:function(){var u=0,t=P.a4(P.Z),s=this
var $async$$0=P.a5(function(a,b){if(a===1)return P.a1(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/Wolf.obj")
return P.a2(null,t)}})
return P.a3($async$$0,t)}}
G.kP.prototype={
$0:function(){var u=0,t=P.a4(P.Z),s=this
var $async$$0=P.a5(function(a,b){if(a===1)return P.a1(b,t)
while(true)switch(u){case 0:s.a.$1("../resources/plant/plant.obj")
return P.a2(null,t)}})
return P.a3($async$$0,t)}}
G.kR.prototype={
$0:function(){this.a.sae(0.01)}}
G.kS.prototype={
$0:function(){this.a.sae(0.02)}}
G.kT.prototype={
$0:function(){this.a.sae(0.04)}}
G.kU.prototype={
$0:function(){this.a.sae(0.06)}}
G.kV.prototype={
$0:function(){this.a.sae(0.08)}}
G.kW.prototype={
$0:function(){this.a.sae(0.1)}}
G.kX.prototype={
$0:function(){this.a.sae(0.2)}}
G.kY.prototype={
$0:function(){this.a.sae(0.4)}}
G.kZ.prototype={
$0:function(){this.a.sae(0.6)}}
G.l_.prototype={
$0:function(){this.a.sae(0.8)}}
G.l1.prototype={
$0:function(){this.a.sae(1)}};(function aliases(){var u=J.a.prototype
u.eK=u.i
u=J.dd.prototype
u.eL=u.i
u=K.d8.prototype
u.eJ=u.aU
u.cM=u.i
u=O.cm.prototype
u.cN=u.az
u=O.aK.prototype
u.cO=u.az})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"p1","nS",26)
t(P,"pv","oB",8)
t(P,"pw","oC",8)
t(P,"px","oD",8)
s(P,"mY","pt",11)
r(P.dY.prototype,"gig",0,1,null,["$2","$1"],["bw","dH"],19,0)
var m
r(m=E.aI.prototype,"gef",0,0,null,["$1","$0"],["eg","iS"],1,0)
r(m,"geh",0,0,null,["$1","$0"],["ei","iT"],1,0)
r(m,"ged",0,0,null,["$1","$0"],["ee","iR"],1,0)
r(m,"geb",0,0,null,["$1","$0"],["ec","iO"],1,0)
q(m,"giM","iN",5)
q(m,"giP","iQ",5)
r(m=E.dG.prototype,"gcQ",0,0,null,["$1","$0"],["cS","cR"],1,0)
p(m,"gje","er",11)
o(m=X.dQ.prototype,"gfY","fZ",6)
o(m,"gfM","fN",6)
o(m,"gfS","fT",3)
o(m,"gh1","h2",12)
o(m,"gh_","h0",12)
o(m,"gh5","h6",3)
o(m,"gh9","ha",3)
o(m,"gfW","fX",3)
o(m,"gh7","h8",3)
o(m,"gfU","fV",3)
o(m,"ghb","hc",23)
o(m,"ghd","he",6)
o(m,"ghq","hr",7)
o(m,"ghm","hn",7)
o(m,"gho","hp",7)
r(m=D.df.prototype,"gde",0,0,null,["$1","$0"],["df","h3"],1,0)
o(m,"ghg","hh",24)
q(m,"gfG","fH",13)
q(m,"ghk","hl",13)
n(V.I.prototype,"gk","cu",14)
n(V.S.prototype,"gk","cu",14)
r(m=U.cf.prototype,"gaK",0,0,null,["$1","$0"],["S","ac"],1,0)
q(m,"gfE","fF",15)
q(m,"ghi","hj",15)
r(m=U.dR.prototype,"gaK",0,0,null,["$1","$0"],["S","ac"],1,0)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
r(m=U.dS.prototype,"gaK",0,0,null,["$1","$0"],["S","ac"],1,0)
o(m,"gbT","bU",2)
o(m,"gbV","bW",2)
o(m,"gbX","bY",2)
o(m,"gft","fu",2)
o(m,"gfv","fw",2)
o(m,"ghV","hW",2)
o(m,"ghT","hU",2)
o(m,"ghR","hS",2)
o(U.dT.prototype,"gfz","fA",2)
r(m=M.d5.prototype,"gav",0,0,null,["$1","$0"],["ax","eS"],1,0)
q(m,"gfO","fP",5)
q(m,"gfQ","fR",5)
o(m=O.d9.prototype,"ghM","hN",0)
r(m,"gi4",0,1,null,["$2$color","$1"],["du","i5"],25,0)
o(m,"gi0","i1",0)
o(m,"gfC","fD",0)
o(m,"gf3","f4",0)
o(m,"ghP","hQ",0)
o(m,"ghZ","i_",0)
o(m,"gfl","fm",0)
o(m,"gfn","fo",0)
o(m,"gfj","fk",0)
o(m,"gfp","fq",0)
o(m,"gf9","fa",0)
o(m,"ghX","hY",0)
o(m,"gi2","i3",0)
o(m,"gcZ","f1",0)
o(m,"gcV","eW",0)
r(m=O.bm.prototype,"gbj",0,0,null,["$1","$0"],["E","bJ"],1,0)
r(m,"ghF",0,0,null,["$1","$0"],["di","hG"],1,0)
q(m,"gfI","fJ",16)
q(m,"gfK","fL",16)
r(O.cm.prototype,"gbj",0,0,null,["$1","$0"],["E","bJ"],1,0)
r(X.dr.prototype,"gcU",0,0,null,["$1","$0"],["aI","eV"],1,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.R,null)
s(P.R,[H.lt,J.a,J.ab,P.ed,P.n,H.ck,P.hg,H.d6,H.j1,H.fl,H.iQ,P.bf,H.cd,H.cb,H.ev,P.ak,H.ho,H.hq,H.hi,H.ee,H.jn,P.eC,P.jo,P.bW,P.cK,P.ah,P.dY,P.e7,P.am,P.dW,P.dD,P.iz,P.k_,P.dH,P.bB,P.kf,P.jX,P.jR,P.ec,P.v,P.k7,P.hx,P.fi,P.ke,P.kd,P.bu,P.aq,P.ao,P.be,P.i2,P.dA,P.e4,P.fL,P.t,P.Q,P.Z,P.lz,P.aw,P.l,P.W,P.bX,P.j3,P.jY,W.fp,W.fh,W.N,W.d7,P.k0,P.eH,P.jS,P.bR,K.f_,K.d8,K.dh,K.ik,L.dB,L.dI,L.dJ,L.iL,O.bd,O.cn,E.fb,E.aI,E.ib,E.dG,Z.dU,Z.dV,Z.bE,Z.cY,Z.bI,Z.aW,D.fe,D.bg,D.ag,O.ko,O.eT,O.kp,X.cZ,X.de,X.hm,X.hu,X.at,X.hU,X.iM,X.dQ,D.f8,D.fu,D.aj,D.i5,D.iu,V.V,V.K,V.fD,V.di,V.b0,V.au,V.a7,V.dv,V.bP,V.I,V.S,U.dR,U.dS,U.dT,M.d5,A.cV,A.f3,A.a_,A.cW,A.d2,A.ds,A.dz,A.hC,A.cy,A.cz,A.cB,A.cC,A.dM,A.iX,F.bh,F.bl,F.bM,F.av,F.il,F.im,F.io,F.b6,F.jc,F.jd,F.jg,F.jh,O.dE,O.cm,O.hD,T.iH,X.lj,X.iB,X.dr,V.ff,V.i9,V.ip])
s(J.a,[J.hh,J.dc,J.dd,J.bi,J.cj,J.bj,H.cq,H.bn,W.h,W.eZ,W.bD,W.aH,W.H,W.dZ,W.as,W.ft,W.fv,W.e0,W.d4,W.e2,W.fx,W.m,W.e5,W.aJ,W.fN,W.e8,W.aZ,W.ht,W.hO,W.ef,W.eg,W.aM,W.eh,W.ek,W.aO,W.eo,W.eq,W.aR,W.er,W.aS,W.ew,W.aB,W.eA,W.iK,W.aU,W.eD,W.iO,W.j8,W.eJ,W.eL,W.eN,W.eP,W.eR,P.b_,P.ea,P.b3,P.em,P.i7,P.ex,P.b5,P.eF,P.f4,P.dX,P.dw,P.et])
s(J.dd,[J.i3,J.bT,J.bk])
t(J.ls,J.bi)
s(J.cj,[J.db,J.da])
t(P.hs,P.ed)
s(P.hs,[H.dN,W.jv,W.ju,P.fH])
t(H.U,H.dN)
s(P.n,[H.r,H.cl,H.jl,P.hf])
t(H.fA,H.cl)
s(P.hg,[H.hy,H.jm])
t(H.fm,H.fl)
s(P.bf,[H.i_,H.hl,H.j0,H.fd,H.ii,P.ct,P.az,P.j2,P.iZ,P.dC,P.fk,P.fs])
s(H.cb,[H.ld,H.iC,H.hk,H.hj,H.kz,H.kA,H.kB,P.jr,P.jq,P.js,P.jt,P.k6,P.k5,P.kg,P.kh,P.kt,P.jA,P.jI,P.jE,P.jF,P.jG,P.jC,P.jH,P.jB,P.jL,P.jM,P.jK,P.jJ,P.kr,P.jV,P.jU,P.jW,P.hr,P.hw,P.fy,P.fz,P.j7,P.j4,P.j5,P.j6,P.k8,P.k9,P.kb,P.ka,P.kj,P.ki,P.kk,P.kl,W.fO,W.fP,W.hQ,W.hS,W.ih,W.iy,W.jz,P.k1,P.k2,P.ku,P.fI,P.fJ,P.f6,E.ic,E.id,E.ie,E.iJ,D.fE,D.fF,F.jj,F.ji,F.je,F.jf,O.h1,O.h2,O.hc,O.hb,O.hd,O.he,O.h7,O.h0,O.fU,O.h3,O.h6,O.fY,O.fZ,O.fX,O.h_,O.fV,O.fW,O.h4,O.h5,O.h8,O.h9,O.ha,O.fT,O.fS,O.hG,O.hH,O.hI,O.hJ,O.hK,O.hL,O.hM,O.hN,T.iI,V.fg,V.lc,V.ia,V.ir,V.iq,G.kD,G.kE,G.kF,G.kQ,G.l0,G.l2,G.l3,G.l4,G.l5,G.l6,G.l7,G.kG,G.kH,G.kI,G.kJ,G.kK,G.kL,G.l8,G.l9,G.la,G.kM,G.kN,G.kO,G.kP,G.kR,G.kS,G.kT,G.kU,G.kV,G.kW,G.kX,G.kY,G.kZ,G.l_,G.l1])
s(H.iC,[H.iw,H.c9])
t(P.hv,P.ak)
t(H.C,P.hv)
t(H.hp,H.r)
t(H.dl,H.bn)
s(H.dl,[H.cE,H.cG])
t(H.cF,H.cE)
t(H.cr,H.cF)
t(H.cH,H.cG)
t(H.dm,H.cH)
s(H.dm,[H.hV,H.hW,H.hX,H.hY,H.hZ,H.dn,H.cs])
t(P.k4,P.hf)
t(P.jp,P.dY)
t(P.jT,P.kf)
t(P.jQ,P.jX)
t(P.eI,P.hx)
t(P.dO,P.eI)
s(P.fi,[P.f9,P.fB])
t(P.fn,P.iz)
s(P.fn,[P.fa,P.jb,P.ja])
t(P.j9,P.fB)
s(P.ao,[P.J,P.u])
s(P.az,[P.bO,P.fQ])
t(P.jx,P.bX)
s(W.h,[W.A,W.fG,W.ch,W.co,W.aQ,W.cI,W.aT,W.aC,W.cL,W.jk,W.cD,P.f7,P.bC])
s(W.A,[W.a0,W.bc])
s(W.a0,[W.p,P.o])
s(W.p,[W.f0,W.f1,W.bF,W.fK,W.ci,W.ij])
t(W.fo,W.aH)
t(W.cc,W.dZ)
s(W.as,[W.fq,W.fr])
t(W.e1,W.e0)
t(W.d3,W.e1)
t(W.e3,W.e2)
t(W.fw,W.e3)
t(W.aA,W.bD)
t(W.e6,W.e5)
t(W.ce,W.e6)
t(W.e9,W.e8)
t(W.cg,W.e9)
t(W.bH,W.ch)
s(W.m,[W.bp,W.cw])
s(W.bp,[W.bL,W.aN,W.bQ])
t(W.hP,W.ef)
t(W.hR,W.eg)
t(W.ei,W.eh)
t(W.hT,W.ei)
t(W.el,W.ek)
t(W.dp,W.el)
t(W.ep,W.eo)
t(W.i4,W.ep)
t(W.ig,W.eq)
t(W.cJ,W.cI)
t(W.is,W.cJ)
t(W.es,W.er)
t(W.it,W.es)
t(W.ix,W.ew)
t(W.eB,W.eA)
t(W.iD,W.eB)
t(W.cM,W.cL)
t(W.iE,W.cM)
t(W.eE,W.eD)
t(W.iN,W.eE)
t(W.bs,W.aN)
t(W.eK,W.eJ)
t(W.jw,W.eK)
t(W.e_,W.d4)
t(W.eM,W.eL)
t(W.jN,W.eM)
t(W.eO,W.eN)
t(W.ej,W.eO)
t(W.eQ,W.eP)
t(W.jZ,W.eQ)
t(W.eS,W.eR)
t(W.k3,W.eS)
t(W.jy,P.dD)
t(P.ez,P.k0)
t(P.al,P.jS)
t(P.eb,P.ea)
t(P.hn,P.eb)
t(P.en,P.em)
t(P.i0,P.en)
t(P.ey,P.ex)
t(P.iA,P.ey)
t(P.eG,P.eF)
t(P.iP,P.eG)
t(P.f5,P.dX)
t(P.i1,P.bC)
t(P.eu,P.et)
t(P.iv,P.eu)
s(K.d8,[K.b2,L.dL])
s(E.fb,[Z.cX,A.dx,T.dF])
s(D.ag,[D.bJ,D.bK,D.w,O.i8,X.i6])
s(X.i6,[X.dg,X.b1,X.cp,X.dK])
s(O.bd,[D.df,U.cf])
s(D.fe,[U.fj,U.ar])
t(U.d0,U.ar)
s(A.dx,[A.fR,A.hz])
s(A.dM,[A.bq,A.iU,A.iV,A.iW,A.iS,A.X,A.iT,A.E,A.br,A.iY,A.cA,A.ad,A.ae,A.bS])
s(O.dE,[O.d9,O.bm])
s(O.cm,[O.hA,O.hB,O.aK])
s(O.aK,[O.hE,O.hF])
t(T.iF,T.dF)
t(T.iG,T.iF)
t(X.fM,X.iB)
u(H.dN,H.j1)
u(H.cE,P.v)
u(H.cF,H.d6)
u(H.cG,P.v)
u(H.cH,H.d6)
u(P.ed,P.v)
u(P.eI,P.k7)
u(W.dZ,W.fp)
u(W.e0,P.v)
u(W.e1,W.N)
u(W.e2,P.v)
u(W.e3,W.N)
u(W.e5,P.v)
u(W.e6,W.N)
u(W.e8,P.v)
u(W.e9,W.N)
u(W.ef,P.ak)
u(W.eg,P.ak)
u(W.eh,P.v)
u(W.ei,W.N)
u(W.ek,P.v)
u(W.el,W.N)
u(W.eo,P.v)
u(W.ep,W.N)
u(W.eq,P.ak)
u(W.cI,P.v)
u(W.cJ,W.N)
u(W.er,P.v)
u(W.es,W.N)
u(W.ew,P.ak)
u(W.eA,P.v)
u(W.eB,W.N)
u(W.cL,P.v)
u(W.cM,W.N)
u(W.eD,P.v)
u(W.eE,W.N)
u(W.eJ,P.v)
u(W.eK,W.N)
u(W.eL,P.v)
u(W.eM,W.N)
u(W.eN,P.v)
u(W.eO,W.N)
u(W.eP,P.v)
u(W.eQ,W.N)
u(W.eR,P.v)
u(W.eS,W.N)
u(P.ea,P.v)
u(P.eb,W.N)
u(P.em,P.v)
u(P.en,W.N)
u(P.ex,P.v)
u(P.ey,W.N)
u(P.eF,P.v)
u(P.eG,W.N)
u(P.dX,P.ak)
u(P.et,P.v)
u(P.eu,W.N)})()
var v={mangledGlobalNames:{u:"int",J:"double",ao:"num",l:"String",bu:"bool",Z:"Null",t:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:F.av,args:[F.av]},{func:1,ret:-1,opt:[D.ag]},{func:1,ret:-1,args:[D.ag]},{func:1,ret:-1,args:[W.aN]},{func:1,ret:P.Z,args:[,,]},{func:1,ret:-1,args:[P.u,[P.n,E.aI]]},{func:1,ret:-1,args:[W.m]},{func:1,ret:-1,args:[W.bQ]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.Z,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bL]},{func:1,ret:-1,args:[P.u,[P.n,D.aj]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.u,[P.n,U.ar]]},{func:1,ret:-1,args:[P.u,[P.n,V.b0]]},{func:1,ret:-1,args:[,]},{func:1,ret:P.Z,args:[,P.aw]},{func:1,ret:-1,args:[P.R],opt:[P.aw]},{func:1,ret:P.Z,args:[,],opt:[P.aw]},{func:1,ret:[P.am,,],args:[,]},{func:1,ret:P.bR,args:[,,]},{func:1,ret:-1,args:[W.bs]},{func:1,ret:P.bu,args:[[P.n,D.aj]]},{func:1,ret:F.av,args:[F.av],named:{color:V.K}},{func:1,ret:P.u,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bF.prototype
C.I=W.bH.prototype
C.J=J.a.prototype
C.b=J.bi.prototype
C.K=J.da.prototype
C.c=J.db.prototype
C.i=J.dc.prototype
C.d=J.cj.prototype
C.a=J.bj.prototype
C.L=J.bk.prototype
C.v=J.i3.prototype
C.R=P.dw.prototype
C.o=J.bT.prototype
C.w=W.bs.prototype
C.x=W.cD.prototype
C.T=new P.fa()
C.y=new P.f9()
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.z=function() {
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
C.E=function(getTagFallback) {
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
C.A=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.B=function(hooks) {
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
C.D=function(hooks) {
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
C.C=function(hooks) {
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
C.q=function(hooks) { return hooks; }

C.F=new P.i2()
C.f=new P.j9()
C.G=new P.jb()
C.e=new P.jT()
C.n=new P.be(0)
C.H=new P.be(5e6)
C.r=H.d(u([127,2047,65535,1114111]),[P.u])
C.k=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.u])
C.l=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.u])
C.m=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.u])
C.N=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.u])
C.O=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.u])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.u])
C.t=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.u])
C.P=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.u])
C.u=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.u])
C.M=H.d(u([]),[P.l])
C.Q=new H.fm(0,{},C.M,[P.l,P.l])
C.S=new P.bW(null,2)})();(function staticFields(){$.aG=0
$.ca=null
$.lX=null
$.n2=null
$.mW=null
$.n6=null
$.kv=null
$.kC=null
$.lP=null
$.c_=null
$.cO=null
$.cP=null
$.lL=!1
$.G=C.e
$.an=[]
$.mT=null
$.mb=null
$.me=null
$.aP=null
$.mk=null
$.mn=null
$.mx=null
$.mB=null
$.mz=null
$.mA=null
$.my=null
$.md=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q1","nb",function(){return H.n_("_$dart_dartClosure")})
u($,"q3","lS",function(){return H.n_("_$dart_js")})
u($,"q5","nc",function(){return H.aV(H.iR({
toString:function(){return"$receiver$"}}))})
u($,"q6","nd",function(){return H.aV(H.iR({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"q7","ne",function(){return H.aV(H.iR(null))})
u($,"q8","nf",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qb","ni",function(){return H.aV(H.iR(void 0))})
u($,"qc","nj",function(){return H.aV(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qa","nh",function(){return H.aV(H.mt(null))})
u($,"q9","ng",function(){return H.aV(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qe","nl",function(){return H.aV(H.mt(void 0))})
u($,"qd","nk",function(){return H.aV(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qs","lT",function(){return P.oA()})
u($,"qf","nm",function(){return P.ox()})
u($,"qt","nq",function(){return H.o4(H.bZ(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.u])))})
u($,"qv","nr",function(){return P.lA("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qw","ns",function(){return P.p_()})
u($,"qm","np",function(){return Z.ax(0)})
u($,"qg","nn",function(){return Z.ax(511)})
u($,"qo","aF",function(){return Z.ax(1)})
u($,"qn","aE",function(){return Z.ax(2)})
u($,"qi","aD",function(){return Z.ax(4)})
u($,"qp","ba",function(){return Z.ax(8)})
u($,"qq","bA",function(){return Z.ax(16)})
u($,"qj","bz",function(){return Z.ax(32)})
u($,"qk","cR",function(){return Z.ax(64)})
u($,"ql","no",function(){return Z.ax(96)})
u($,"qr","c8",function(){return Z.ax(128)})
u($,"qh","b9",function(){return Z.ax(256)})
u($,"q0","na",function(){return new V.fD(1e-9)})
u($,"q_","z",function(){return $.na()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cq,DataView:H.bn,ArrayBufferView:H.bn,Float32Array:H.cr,Float64Array:H.cr,Int16Array:H.hV,Int32Array:H.hW,Int8Array:H.hX,Uint16Array:H.hY,Uint32Array:H.hZ,Uint8ClampedArray:H.dn,CanvasPixelArray:H.dn,Uint8Array:H.cs,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLBodyElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLDivElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTableElement:W.p,HTMLTableRowElement:W.p,HTMLTableSectionElement:W.p,HTMLTemplateElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eZ,HTMLAnchorElement:W.f0,HTMLAreaElement:W.f1,Blob:W.bD,HTMLCanvasElement:W.bF,CDATASection:W.bc,CharacterData:W.bc,Comment:W.bc,ProcessingInstruction:W.bc,Text:W.bc,CSSPerspective:W.fo,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.cc,MSStyleCSSProperties:W.cc,CSS2Properties:W.cc,CSSImageValue:W.as,CSSKeywordValue:W.as,CSSNumericValue:W.as,CSSPositionValue:W.as,CSSResourceValue:W.as,CSSUnitValue:W.as,CSSURLImageValue:W.as,CSSStyleValue:W.as,CSSMatrixComponent:W.aH,CSSRotation:W.aH,CSSScale:W.aH,CSSSkew:W.aH,CSSTranslation:W.aH,CSSTransformComponent:W.aH,CSSTransformValue:W.fq,CSSUnparsedValue:W.fr,DataTransferItemList:W.ft,DOMException:W.fv,ClientRectList:W.d3,DOMRectList:W.d3,DOMRectReadOnly:W.d4,DOMStringList:W.fw,DOMTokenList:W.fx,Element:W.a0,AbortPaymentEvent:W.m,AnimationEvent:W.m,AnimationPlaybackEvent:W.m,ApplicationCacheErrorEvent:W.m,BackgroundFetchClickEvent:W.m,BackgroundFetchEvent:W.m,BackgroundFetchFailEvent:W.m,BackgroundFetchedEvent:W.m,BeforeInstallPromptEvent:W.m,BeforeUnloadEvent:W.m,BlobEvent:W.m,CanMakePaymentEvent:W.m,ClipboardEvent:W.m,CloseEvent:W.m,CustomEvent:W.m,DeviceMotionEvent:W.m,DeviceOrientationEvent:W.m,ErrorEvent:W.m,ExtendableEvent:W.m,ExtendableMessageEvent:W.m,FetchEvent:W.m,FontFaceSetLoadEvent:W.m,ForeignFetchEvent:W.m,GamepadEvent:W.m,HashChangeEvent:W.m,InstallEvent:W.m,MediaEncryptedEvent:W.m,MediaKeyMessageEvent:W.m,MediaQueryListEvent:W.m,MediaStreamEvent:W.m,MediaStreamTrackEvent:W.m,MessageEvent:W.m,MIDIConnectionEvent:W.m,MIDIMessageEvent:W.m,MutationEvent:W.m,NotificationEvent:W.m,PageTransitionEvent:W.m,PaymentRequestEvent:W.m,PaymentRequestUpdateEvent:W.m,PopStateEvent:W.m,PresentationConnectionAvailableEvent:W.m,PresentationConnectionCloseEvent:W.m,PromiseRejectionEvent:W.m,PushEvent:W.m,RTCDataChannelEvent:W.m,RTCDTMFToneChangeEvent:W.m,RTCPeerConnectionIceEvent:W.m,RTCTrackEvent:W.m,SecurityPolicyViolationEvent:W.m,SensorErrorEvent:W.m,SpeechRecognitionError:W.m,SpeechRecognitionEvent:W.m,SpeechSynthesisEvent:W.m,StorageEvent:W.m,SyncEvent:W.m,TrackEvent:W.m,TransitionEvent:W.m,WebKitTransitionEvent:W.m,VRDeviceEvent:W.m,VRDisplayEvent:W.m,VRSessionEvent:W.m,MojoInterfaceRequestEvent:W.m,USBConnectionEvent:W.m,IDBVersionChangeEvent:W.m,AudioProcessingEvent:W.m,OfflineAudioCompletionEvent:W.m,WebGLContextEvent:W.m,Event:W.m,InputEvent:W.m,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.aA,FileList:W.ce,FileWriter:W.fG,HTMLFormElement:W.fK,Gamepad:W.aJ,History:W.fN,HTMLCollection:W.cg,HTMLFormControlsCollection:W.cg,HTMLOptionsCollection:W.cg,XMLHttpRequest:W.bH,XMLHttpRequestUpload:W.ch,XMLHttpRequestEventTarget:W.ch,ImageData:W.aZ,HTMLImageElement:W.ci,KeyboardEvent:W.bL,Location:W.ht,MediaList:W.hO,MessagePort:W.co,MIDIInputMap:W.hP,MIDIOutputMap:W.hR,MimeType:W.aM,MimeTypeArray:W.hT,PointerEvent:W.aN,MouseEvent:W.aN,DragEvent:W.aN,Document:W.A,DocumentFragment:W.A,HTMLDocument:W.A,ShadowRoot:W.A,XMLDocument:W.A,Attr:W.A,DocumentType:W.A,Node:W.A,NodeList:W.dp,RadioNodeList:W.dp,Plugin:W.aO,PluginArray:W.i4,ProgressEvent:W.cw,ResourceProgressEvent:W.cw,RTCStatsReport:W.ig,HTMLSelectElement:W.ij,SourceBuffer:W.aQ,SourceBufferList:W.is,SpeechGrammar:W.aR,SpeechGrammarList:W.it,SpeechRecognitionResult:W.aS,Storage:W.ix,CSSStyleSheet:W.aB,StyleSheet:W.aB,TextTrack:W.aT,TextTrackCue:W.aC,VTTCue:W.aC,TextTrackCueList:W.iD,TextTrackList:W.iE,TimeRanges:W.iK,Touch:W.aU,TouchEvent:W.bQ,TouchList:W.iN,TrackDefaultList:W.iO,CompositionEvent:W.bp,FocusEvent:W.bp,TextEvent:W.bp,UIEvent:W.bp,URL:W.j8,VideoTrackList:W.jk,WheelEvent:W.bs,Window:W.cD,DOMWindow:W.cD,CSSRuleList:W.jw,ClientRect:W.e_,DOMRect:W.e_,GamepadList:W.jN,NamedNodeMap:W.ej,MozNamedAttrMap:W.ej,SpeechRecognitionResultList:W.jZ,StyleSheetList:W.k3,SVGLength:P.b_,SVGLengthList:P.hn,SVGNumber:P.b3,SVGNumberList:P.i0,SVGPointList:P.i7,SVGStringList:P.iA,SVGAElement:P.o,SVGAnimateElement:P.o,SVGAnimateMotionElement:P.o,SVGAnimateTransformElement:P.o,SVGAnimationElement:P.o,SVGCircleElement:P.o,SVGClipPathElement:P.o,SVGDefsElement:P.o,SVGDescElement:P.o,SVGDiscardElement:P.o,SVGEllipseElement:P.o,SVGFEBlendElement:P.o,SVGFEColorMatrixElement:P.o,SVGFEComponentTransferElement:P.o,SVGFECompositeElement:P.o,SVGFEConvolveMatrixElement:P.o,SVGFEDiffuseLightingElement:P.o,SVGFEDisplacementMapElement:P.o,SVGFEDistantLightElement:P.o,SVGFEFloodElement:P.o,SVGFEFuncAElement:P.o,SVGFEFuncBElement:P.o,SVGFEFuncGElement:P.o,SVGFEFuncRElement:P.o,SVGFEGaussianBlurElement:P.o,SVGFEImageElement:P.o,SVGFEMergeElement:P.o,SVGFEMergeNodeElement:P.o,SVGFEMorphologyElement:P.o,SVGFEOffsetElement:P.o,SVGFEPointLightElement:P.o,SVGFESpecularLightingElement:P.o,SVGFESpotLightElement:P.o,SVGFETileElement:P.o,SVGFETurbulenceElement:P.o,SVGFilterElement:P.o,SVGForeignObjectElement:P.o,SVGGElement:P.o,SVGGeometryElement:P.o,SVGGraphicsElement:P.o,SVGImageElement:P.o,SVGLineElement:P.o,SVGLinearGradientElement:P.o,SVGMarkerElement:P.o,SVGMaskElement:P.o,SVGMetadataElement:P.o,SVGPathElement:P.o,SVGPatternElement:P.o,SVGPolygonElement:P.o,SVGPolylineElement:P.o,SVGRadialGradientElement:P.o,SVGRectElement:P.o,SVGScriptElement:P.o,SVGSetElement:P.o,SVGStopElement:P.o,SVGStyleElement:P.o,SVGElement:P.o,SVGSVGElement:P.o,SVGSwitchElement:P.o,SVGSymbolElement:P.o,SVGTSpanElement:P.o,SVGTextContentElement:P.o,SVGTextElement:P.o,SVGTextPathElement:P.o,SVGTextPositioningElement:P.o,SVGTitleElement:P.o,SVGUseElement:P.o,SVGViewElement:P.o,SVGGradientElement:P.o,SVGComponentTransferFunctionElement:P.o,SVGFEDropShadowElement:P.o,SVGMPathElement:P.o,SVGTransform:P.b5,SVGTransformList:P.iP,AudioBuffer:P.f4,AudioParamMap:P.f5,AudioTrackList:P.f7,AudioContext:P.bC,webkitAudioContext:P.bC,BaseAudioContext:P.bC,OfflineAudioContext:P.i1,WebGL2RenderingContext:P.dw,SQLResultSetRowList:P.iv})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,XMLHttpRequest:true,XMLHttpRequestUpload:true,XMLHttpRequestEventTarget:false,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,ProgressEvent:true,ResourceProgressEvent:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.cr.$nativeSuperclassTag="ArrayBufferView"
H.cG.$nativeSuperclassTag="ArrayBufferView"
H.cH.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"
W.cL.$nativeSuperclassTag="EventTarget"
W.cM.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(G.n4,[])
else G.n4([])})})()
//# sourceMappingURL=test.dart.js.map
