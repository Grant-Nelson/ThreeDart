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
a[c]=function(){a[c]=function(){H.pr(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lf"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lf(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kY:function kY(){},
kb:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nt:function(a,b,c,d){if(!!J.R(a).$iq)return new H.fp(a,b,[c,d])
return new H.c7(a,b,[c,d])},
fM:function(){return new P.ci("No element")},
ni:function(){return new P.ci("Too many elements")},
nQ:function(a,b){var u=J.ag(a)
if(typeof u!=="number")return u.K()
H.du(a,0,u-1,b)},
du:function(a,b,c,d){if(c-b<=32)H.nP(a,b,c,d)
else H.nO(a,b,c,d)},
nP:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bn(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a7()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
nO:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a9(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a9(a4+a5,2),f=g-j,e=g+j,d=J.bn(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a7()
if(a2>0){u=a1
a1=a0
a0=u}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.h(a3,a4))
d.l(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.H(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.P()
if(p<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a7()
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
if(typeof l!=="number")return l.P()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a7()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a7()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
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
H.du(a3,a4,t-2,a6)
H.du(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.H(a6.$2(d.h(a3,t),b),0);)++t
for(;J.H(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.du(a3,t,s,a6)}else H.du(a3,t,s,a6)},
n:function n(a){this.a=a},
q:function q(){},
db:function db(){},
bd:function bd(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
fp:function fp(a,b,c){this.a=a
this.b=b
this.$ti=c},
h4:function h4(a,b){this.a=null
this.b=a
this.c=b},
h5:function h5(a,b,c){this.a=a
this.b=b
this.$ti=c},
cs:function cs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ja:function ja(a,b){this.a=a
this.b=b},
d2:function d2(){},
iL:function iL(){},
dJ:function dJ(){},
nb:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cK:function(a){var u,t=H.ps(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pb:function(a){return v.types[a]},
mv:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a4(a)
if(typeof u!=="string")throw H.c(H.ae(a))
return u},
cf:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nG:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a0(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.G(s,q)|32)>t)return}return parseInt(a,b)},
cg:function(a){return H.nx(a)+H.mh(H.cJ(a),0,null)},
nx:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibG){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cK(t.length>1&&C.a.G(t,0)===36?C.a.ad(t,1):t)},
ny:function(){if(!!self.location)return self.location.href
return},
lO:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nH:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aR(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ae(s))}return H.lO(r)},
lP:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ae(s))
if(s<0)throw H.c(H.ae(s))
if(s>65535)return H.nH(a)}return H.lO(a)},
nI:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ir()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bB:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.a0(a,0,1114111,null,null))},
bA:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nF:function(a){var u=H.bA(a).getFullYear()+0
return u},
nD:function(a){var u=H.bA(a).getMonth()+1
return u},
nz:function(a){var u=H.bA(a).getDate()+0
return u},
nA:function(a){var u=H.bA(a).getHours()+0
return u},
nC:function(a){var u=H.bA(a).getMinutes()+0
return u},
nE:function(a){var u=H.bA(a).getSeconds()+0
return u},
nB:function(a){var u=H.bA(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ae(a))},
d:function(a,b){if(a==null)J.ag(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.al(!0,b,s,null)
u=J.ag(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.P(b,a,s,null,u)
return P.dp(b,s)},
p5:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bC(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bC(a,c,!0,b,"end",u)
return new P.al(!0,b,"end",null)},
ae:function(a){return new P.al(!0,a,null,null)},
p1:function(a){if(typeof a!=="number")throw H.c(H.ae(a))
return a},
c:function(a){var u
if(a==null)a=new P.dl()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mB})
u.name=""}else u.toString=H.mB
return u},
mB:function(){return J.a4(this.dartException)},
u:function(a){throw H.c(a)},
l:function(a){throw H.c(P.aP(a))},
aI:function(a){var u,t,s,r,q,p
a=H.mz(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iy(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iz:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lZ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lJ:function(a,b){return new H.hA(a,b==null?null:b.method)},
kZ:function(a,b){var u=b==null,t=u?null:b.method
return new H.fR(a,t,u?null:b.receiver)},
af:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kJ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aR(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kZ(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lJ(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mF()
q=$.mG()
p=$.mH()
o=$.mI()
n=$.mL()
m=$.mM()
l=$.mK()
$.mJ()
k=$.mO()
j=$.mN()
i=r.al(u)
if(i!=null)return f.$1(H.kZ(u,i))
else{i=q.al(u)
if(i!=null){i.method="call"
return f.$1(H.kZ(u,i))}else{i=p.al(u)
if(i==null){i=o.al(u)
if(i==null){i=n.al(u)
if(i==null){i=m.al(u)
if(i==null){i=l.al(u)
if(i==null){i=o.al(u)
if(i==null){i=k.al(u)
if(i==null){i=j.al(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lJ(u,i))}}return f.$1(new H.iK(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dw()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.al(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dw()
return a},
li:function(a){var u
if(a==null)return new H.ep(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ep(a)},
p9:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
ph:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.x("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ph)
a.$identity=u
return u},
na:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.bU(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.au
if(typeof t!=="number")return t.C()
$.au=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lz(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.n6(d,e,f)
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
n6:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pb,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ly:H.kM
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
n7:function(a,b,c,d){var u=H.kM
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lz:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n9(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.n7(t,!r,u,b)
if(t===0){r=$.au
if(typeof r!=="number")return r.C()
$.au=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f3("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.au
if(typeof r!=="number")return r.C()
$.au=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f3("self"):q)+"."+H.e(u)+"("+o+");}")()},
n8:function(a,b,c,d){var u=H.kM,t=H.ly
switch(b?-1:a){case 0:throw H.c(H.nM("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n9:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.f3("self")
u=$.lx
if(u==null)u=$.lx=H.f3("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n8(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.au
if(typeof u!=="number")return u.C()
$.au=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.au
if(typeof u!=="number")return u.C()
$.au=u+1
return new Function(n+u+"}")()},
lf:function(a,b,c,d,e,f,g){return H.na(a,b,c,d,!!e,!!f,g)},
kM:function(a){return a.a},
ly:function(a){return a.c},
f3:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.kW(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pm:function(a,b){throw H.c(H.n5(a,H.cK(b.substring(2))))},
m:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.pm(a,b)},
p7:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
n5:function(a,b){return new H.f4("CastError: "+P.kT(a)+": type '"+H.e(H.oY(a))+"' is not a subtype of type '"+b+"'")},
oY:function(a){var u,t=J.R(a)
if(!!t.$ibX){u=H.p7(t)
if(u!=null)return H.pn(u)
return"Closure"}return H.cg(a)},
pr:function(a){throw H.c(new P.fh(a))},
nM:function(a){return new H.hT(a)},
mt:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cJ:function(a){if(a==null)return
return a.$ti},
q2:function(a,b,c){return H.kH(a["$a"+H.e(c)],H.cJ(b))},
pa:function(a,b,c,d){var u=H.kH(a["$a"+H.e(c)],H.cJ(b))
return u==null?null:u[d]},
lh:function(a,b,c){var u=H.kH(a["$a"+H.e(b)],H.cJ(a))
return u==null?null:u[c]},
aL:function(a,b){var u=H.cJ(a)
return u==null?null:u[b]},
pn:function(a){return H.bm(a,null)},
bm:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cK(a[0].name)+H.mh(a,1,b)
if(typeof a=="function")return H.cK(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.ot(a,b)
if('futureOr' in a)return"FutureOr<"+H.bm("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ot:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.C(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a2)p+=" extends "+H.bm(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bm(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bm(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bm(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.p8(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bm(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
mh:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.U("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bm(p,c)}return"<"+u.i(0)+">"},
kH:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
q0:function(a,b,c){return a.apply(b,H.kH(J.R(b)["$a"+H.e(c)],H.cJ(b)))},
q1:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pj:function(a){var u,t,s,r,q=$.mu.$1(a),p=$.k9[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kf[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mm.$2(a,q)
if(q!=null){p=$.k9[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kf[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kD(u)
$.k9[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kf[q]=u
return u}if(s==="-"){r=H.kD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mx(a,u)
if(s==="*")throw H.c(P.iJ(q))
if(v.leafTags[q]===true){r=H.kD(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mx(a,u)},
mx:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lk(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kD:function(a){return J.lk(a,!1,null,!!a.$iB)},
pk:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kD(u)
else return J.lk(u,c,null,null)},
pf:function(){if(!0===$.lj)return
$.lj=!0
H.pg()},
pg:function(){var u,t,s,r,q,p,o,n
$.k9=Object.create(null)
$.kf=Object.create(null)
H.pe()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.my.$1(q)
if(p!=null){o=H.pk(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pe:function(){var u,t,s,r,q,p,o=C.F()
o=H.bN(C.G,H.bN(C.H,H.bN(C.u,H.bN(C.u,H.bN(C.I,H.bN(C.J,H.bN(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mu=new H.kc(r)
$.mm=new H.kd(q)
$.my=new H.ke(p)},
bN:function(a,b){return a(b)||b},
nm:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.W("Illegal RegExp pattern ("+String(p)+")",a,null))},
pp:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
p6:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mz:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ln:function(a,b,c){var u=H.pq(a,b,c)
return u},
pq:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mz(b),'g'),H.p6(c))},
fa:function fa(){},
fb:function fb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iy:function iy(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hA:function hA(a,b){this.a=a
this.b=b},
fR:function fR(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
kJ:function kJ(a){this.a=a},
ep:function ep(a){this.a=a
this.b=null},
bX:function bX(){},
ij:function ij(){},
ia:function ia(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f4:function f4(a){this.a=a},
hT:function hT(a){this.a=a},
J:function J(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fQ:function fQ(a){this.a=a},
fV:function fV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fW:function fW(a,b){this.a=a
this.$ti=b},
fX:function fX(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
fP:function fP(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function(a){return a},
nw:function(a){return new Int8Array(a)},
aJ:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
or:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p5(a,b,c))
return b},
cb:function cb(){},
bf:function bf(){},
dg:function dg(){},
cc:function cc(){},
dh:function dh(){},
hs:function hs(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
di:function di(){},
cd:function cd(){},
cw:function cw(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
p8:function(a){return J.lF(a?Object.keys(a):[],null)},
ps:function(a){return v.mangledGlobalNames[a]},
pl:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ka:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lj==null){H.pf()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iJ("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lp()]
if(r!=null)return r
r=H.pj(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.lp(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
nj:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kL(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a0(a,0,4294967295,"length",null))
return J.lF(new Array(a),b)},
lF:function(a,b){return J.kW(H.b(a,[b]))},
kW:function(a){a.fixed$length=Array
return a},
nk:function(a,b){return J.cN(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d6.prototype
return J.d5.prototype}if(typeof a=="string")return J.bb.prototype
if(a==null)return J.d7.prototype
if(typeof a=="boolean")return J.fO.prototype
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.a2)return a
return J.ka(a)},
bn:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.a2)return a
return J.ka(a)},
eO:function(a){if(a==null)return a
if(a.constructor==Array)return J.ba.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.a2)return a
return J.ka(a)},
ms:function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bG.prototype
return a},
cI:function(a){if(typeof a=="string")return J.bb.prototype
if(a==null)return a
if(!(a instanceof P.a2))return J.bG.prototype
return a},
bR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bc.prototype
return a}if(a instanceof P.a2)return a
return J.ka(a)},
H:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).w(a,b)},
lr:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.ms(a).A(a,b)},
bT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mv(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bn(a).h(a,b)},
kK:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mv(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eO(a).l(a,b,c)},
mX:function(a,b){return J.cI(a).G(a,b)},
mY:function(a,b,c){return J.bR(a).fX(a,b,c)},
mZ:function(a,b,c,d){return J.bR(a).hg(a,b,c,d)},
n_:function(a,b){return J.cI(a).X(a,b)},
cN:function(a,b){return J.ms(a).aU(a,b)},
eR:function(a,b){return J.eO(a).L(a,b)},
n0:function(a,b,c,d){return J.bR(a).hD(a,b,c,d)},
ls:function(a,b){return J.eO(a).H(a,b)},
n1:function(a){return J.bR(a).ghl(a)},
lt:function(a){return J.bR(a).gc8(a)},
cO:function(a){return J.R(a).gJ(a)},
aM:function(a){return J.eO(a).gS(a)},
ag:function(a){return J.bn(a).gm(a)},
lu:function(a){return J.eO(a).i7(a)},
n2:function(a,b){return J.bR(a).ia(a,b)},
n3:function(a,b,c){return J.cI(a).u(a,b,c)},
n4:function(a){return J.cI(a).il(a)},
a4:function(a){return J.R(a).i(a)},
a:function a(){},
fO:function fO(){},
d7:function d7(){},
d8:function d8(){},
hE:function hE(){},
bG:function bG(){},
bc:function bc(){},
ba:function ba(a){this.$ti=a},
kX:function kX(a){this.$ti=a},
a5:function a5(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c4:function c4(){},
d6:function d6(){},
d5:function d5(){},
bb:function bb(){}},P={
o1:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oZ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bO(new P.jc(s),1)).observe(u,{childList:true})
return new P.jb(s,u,t)}else if(self.setImmediate!=null)return P.p_()
return P.p0()},
o2:function(a){self.scheduleImmediate(H.bO(new P.jd(a),0))},
o3:function(a){self.setImmediate(H.bO(new P.je(a),0))},
o4:function(a){P.l2(C.n,a)},
l2:function(a,b){var u=C.c.a9(a.a,1000)
return P.ob(u<0?0:u,b)},
lY:function(a,b){var u=C.c.a9(a.a,1000)
return P.oc(u<0?0:u,b)},
ob:function(a,b){var u=new P.ev()
u.ez(a,b)
return u},
oc:function(a,b){var u=new P.ev()
u.eA(a,b)
return u},
pY:function(a){return new P.bH(a,1)},
o7:function(){return C.Z},
o8:function(a){return new P.bH(a,3)},
ow:function(a,b){return new P.jH(a,[b])},
oS:function(){var u,t
for(;u=$.bM,u!=null;){$.cH=null
t=u.b
$.bM=t
if(t==null)$.cG=null
u.a.$0()}},
oX:function(){$.ld=!0
try{P.oS()}finally{$.cH=null
$.ld=!1
if($.bM!=null)$.lq().$1(P.mn())}},
oV:function(a){var u=new P.dS(a)
if($.bM==null){$.bM=$.cG=u
if(!$.ld)$.lq().$1(P.mn())}else $.cG=$.cG.b=u},
oW:function(a){var u,t,s=$.bM
if(s==null){P.oV(a)
$.cH=$.cG
return}u=new P.dS(a)
t=$.cH
if(t==null){u.b=s
$.bM=$.cH=u}else{u.b=t.b
$.cH=t.b=u
if(u.b==null)$.cG=u}},
lX:function(a,b){var u=$.as
if(u===C.f)return P.l2(a,b)
return P.l2(a,u.hm(b))},
nT:function(a,b){var u=$.as
if(u===C.f)return P.lY(a,b)
return P.lY(a,u.dz(b,P.dD))},
mi:function(a,b,c,d,e){var u={}
u.a=d
P.oW(new P.k2(u,e))},
oT:function(a,b,c,d){var u,t=$.as
if(t===c)return d.$0()
$.as=c
u=t
try{t=d.$0()
return t}finally{$.as=u}},
oU:function(a,b,c,d,e){var u,t=$.as
if(t===c)return d.$1(e)
$.as=c
u=t
try{t=d.$1(e)
return t}finally{$.as=u}},
jc:function jc(a){this.a=a},
jb:function jb(a,b,c){this.a=a
this.b=b
this.c=c},
jd:function jd(a){this.a=a},
je:function je(a){this.a=a},
ev:function ev(){this.c=0},
jL:function jL(a,b){this.a=a
this.b=b},
jK:function jK(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jH:function jH(a,b){this.a=a
this.$ti=b},
dS:function dS(a){this.a=a
this.b=null},
dy:function dy(){},
id:function id(){},
dD:function dD(){},
jU:function jU(){},
k2:function k2(a,b){this.a=a
this.b=b},
js:function js(){},
jt:function jt(a,b){this.a=a
this.b=b},
ju:function ju(a,b,c){this.a=a
this.b=b
this.c=c},
no:function(a,b){return new H.J([a,b])},
l_:function(a,b){return new H.J([a,b])},
nq:function(a){return H.p9(a,new H.J([null,null]))},
c6:function(a){return new P.jp([a])},
l8:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oa:function(a,b){var u=new P.e6(a,b)
u.c=a.e
return u},
nh:function(a,b,c){var u,t
if(P.le(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.aa.push(a)
try{P.ov(a,u)}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}t=P.lV(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kV:function(a,b,c){var u,t
if(P.le(a))return b+"..."+c
u=new P.U(b)
$.aa.push(a)
try{t=u
t.a=P.lV(t.a,a,", ")}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
le:function(a){var u,t
for(u=$.aa.length,t=0;t<u;++t)if(a===$.aa[t])return!0
return!1},
ov:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.v())return
u=H.e(n.gE(n))
b.push(u)
m+=u.length+2;++l}if(!n.v()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gE(n);++l
if(!n.v()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gE(n);++l
for(;n.v();r=q,q=p){p=n.gE(n);++l
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
np:function(a,b,c){var u=P.no(b,c)
a.H(0,new P.fY(u))
return u},
lG:function(a,b){var u,t,s=P.c6(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t)s.n(0,a[t])
return s},
l1:function(a){var u,t={}
if(P.le(a))return"{...}"
u=new P.U("")
try{$.aa.push(a)
u.a+="{"
t.a=!0
J.ls(a,new P.h2(t,u))
u.a+="}"}finally{if(0>=$.aa.length)return H.d($.aa,-1)
$.aa.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jp:function jp(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jq:function jq(a){this.a=a
this.c=this.b=null},
e6:function e6(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fL:function fL(){},
fY:function fY(a){this.a=a},
fZ:function fZ(){},
y:function y(){},
h1:function h1(){},
h2:function h2(a,b){this.a=a
this.b=b},
a1:function a1(){},
jM:function jM(){},
h3:function h3(){},
dK:function dK(a,b){this.a=a
this.$ti=b},
jw:function jw(){},
e7:function e7(){},
eB:function eB(){},
nW:function(a,b,c,d){if(b instanceof Uint8Array)return P.nX(!1,b,c,d)
return},
nX:function(a,b,c,d){var u,t,s=$.mP()
if(s==null)return
u=0===c
if(u&&!0)return P.l5(s,b)
t=b.length
d=P.aZ(c,d,t)
if(u&&d===t)return P.l5(s,b)
return P.l5(s,b.subarray(c,d))},
l5:function(a,b){if(P.nZ(b))return
return P.o_(a,b)},
o_:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.af(t)}return},
nZ:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nY:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.af(t)}return},
mk:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.t(c)
u=J.bn(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
lw:function(a,b,c,d,e,f){if(C.c.bh(f,4)!==0)throw H.c(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.W("Invalid base64 padding, more than two '=' characters",a,b))},
f0:function f0(){},
f1:function f1(){},
f6:function f6(){},
fc:function fc(){},
fr:function fr(){},
fI:function fI(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fH:function fH(a){this.a=a},
iT:function iT(){},
iV:function iV(){},
jS:function jS(a){this.b=0
this.c=a},
iU:function iU(a){this.a=a},
jR:function jR(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eP:function(a,b,c){var u=H.nG(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.W(a,null,null))},
nf:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.e(H.cg(a))+"'"},
nr:function(a,b,c){var u,t,s=J.nj(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l0:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aM(a);u.v();)t.push(u.gE(u))
if(b)return t
return J.kW(t)},
cj:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aZ(b,c,u)
if(b<=0){if(typeof c!=="number")return c.P()
t=c<u}else t=!0
return H.lP(t?C.b.ej(a,b,c):a)}if(!!J.R(a).$icd)return H.nI(a,b,P.aZ(b,c,a.length))
return P.nR(a,b,c)},
nR:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a0(b,0,J.ag(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a0(c,b,J.ag(a),q,q))
t=J.aM(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.a0(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gE(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.a0(c,b,s,q,q))
r.push(t.gE(t))}return H.lP(r)},
nK:function(a){return new H.fP(a,H.nm(a,!1,!0,!1,!1,!1))},
lV:function(a,b,c){var u=J.aM(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gE(u))
while(u.v())}else{a+=H.e(u.gE(u))
for(;u.v();)a=a+c+H.e(u.gE(u))}return a},
m0:function(){var u=H.ny()
if(u!=null)return P.nV(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eC:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mV().b
if(typeof b!=="string")H.u(H.ae(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghC().ca(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bB(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nc:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nd:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cY:function(a){if(a>=10)return""+a
return"0"+a},
lB:function(a){return new P.b6(1000*a)},
kT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a4(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nf(a)},
cP:function(a){return new P.al(!1,null,null,a)},
kL:function(a,b,c){return new P.al(!0,a,b,c)},
dp:function(a,b){return new P.bC(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bC(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.a0(b,a,c,"end",null))
return b}return c},
lR:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.a0(a,0,null,b,null))},
P:function(a,b,c,d,e){var u=e==null?J.ag(b):e
return new P.fK(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iM(a)},
iJ:function(a){return new P.iI(a)},
lU:function(a){return new P.ci(a)},
aP:function(a){return new P.f9(a)},
x:function(a){return new P.e_(a)},
W:function(a,b,c){return new P.fB(a,b,c)},
ns:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
lm:function(a){H.pl(a)},
nV:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.G(a,4)^58)*3|C.a.G(a,0)^100|C.a.G(a,1)^97|C.a.G(a,2)^116|C.a.G(a,3)^97)>>>0
if(u===0)return P.m_(e<e?C.a.u(a,0,e):a,5,f).geb()
else if(u===32)return P.m_(C.a.u(a,5,e),0,f).geb()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.w])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.mj(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iq()
if(r>=0)if(P.mj(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.C()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.t(n)
if(m<n)n=m
if(typeof o!=="number")return o.P()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.P()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.P()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.ac(a,"..",o)))j=n>o+2&&C.a.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.ac(a,"file",0)){if(q<=0){if(!C.a.ac(a,"/",o)){i="file:///"
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
a=C.a.aV(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ac(a,"http",0)){if(t&&p+3===o&&C.a.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aV(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ac(a,"https",0)){if(t&&p+4===o&&C.a.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aV(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jz(a,r,q,p,o,n,m,k)}return P.od(a,0,e,r,q,p,o,n,m,k)},
m2:function(a){var u=P.h
return C.b.hI(H.b(a.split("&"),[u]),P.l_(u,u),new P.iR(C.e))},
nU:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iO(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eP(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eP(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
m1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iP(a),d=new P.iQ(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gav(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nU(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aR(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
od:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ol(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.om(a,u,e-1):""
s=P.oi(a,e,f,!1)
if(typeof f!=="number")return f.C()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.ok(P.eP(C.a.u(a,r,g),new P.jN(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oj(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.la(a,h+1,i,n):n
return new P.bJ(j,t,s,q,p,o,i<c?P.oh(a,i+1,c):n)},
mb:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.c(P.W(c,a,b))},
ok:function(a,b){if(a!=null&&a===P.mb(b))return
return a},
oi:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.X(a,u)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.of(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.mg(a,C.a.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.m1(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bs(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mg(a,C.a.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.m1(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.oo(a,b,c)},
of:function(a,b,c){var u,t=C.a.bs(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
mg:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.U(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.lb(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.U("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bK(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.U("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.U("")
l.a+=C.a.u(a,t,u)
l.a+=P.l9(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oo:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.lb(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.U("")
n=C.a.u(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.u(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.U("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bK(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.U("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l9(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ol:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.md(C.a.G(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bK(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.oe(t?a.toLowerCase():a)},
oe:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
om:function(a,b,c){return P.cE(a,b,c,C.V,!1)},
oj:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cE(a,b,c,C.z,!0):C.j.iN(d,new P.jO(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a8(u,"/"))u="/"+u
return P.on(u,e,f)},
on:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a8(a,"/"))return P.op(a,!u||c)
return P.oq(a)},
la:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cP("Both query and queryParameters specified"))
return P.cE(a,b,c,C.l,!0)}if(d==null)return
u=new P.U("")
t.a=""
d.H(0,new P.jP(new P.jQ(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oh:function(a,b,c){return P.cE(a,b,c,C.l,!0)},
lb:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.kb(u)
r=H.kb(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aR(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bB(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
l9:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.G(m,a>>>4)
t[2]=C.a.G(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h8(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.G(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.G(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.cj(t,0,null)},
cE:function(a,b,c,d,e){var u=P.mf(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
mf:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lb(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bK(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.X(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.l9(u)}}if(m==null)m=new P.U("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
me:function(a){if(C.a.a8(a,"."))return!0
return C.a.dU(a,"/.")!==-1},
oq:function(a){var u,t,s,r,q,p,o
if(!P.me(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.H(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
op:function(a,b){var u,t,s,r,q,p
if(!P.me(a))return!b?P.mc(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gav(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gav(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.mc(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
mc:function(a){var u,t,s,r=a.length
if(r>=2&&P.md(J.mX(a,0)))for(u=1;u<r;++u){t=C.a.G(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
og:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cP("Invalid URL encoding"))}}return u},
lc:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.n(C.a.u(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.G(a,q)
if(t>127)throw H.c(P.cP("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cP("Truncated URI"))
r.push(P.og(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iU(!1).ca(r)},
md:function(a){var u=a|32
return 97<=u&&u<=122},
m_:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.W(m,a,t))}}if(s<0&&t>b)throw H.c(P.W(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gav(l)
if(r!==44||t!==p+7||!C.a.ac(a,"base64",p+1))throw H.c(P.W("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.hS(0,a,o,u)
else{n=P.mf(a,o,u,C.l,!0)
if(n!=null)a=C.a.aV(a,o,u,n)}return new P.iN(a,l,c)},
os:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ns(22,new P.jY(),P.bE),n=new P.jX(o),m=new P.jZ(),l=new P.k_(),k=n.$2(0,225)
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
mj:function(a,b,c,d,e){var u,t,s,r,q,p=$.mW()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.G(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aK:function aK(){},
ac:function ac(a,b){this.a=a
this.b=b},
N:function N(){},
b6:function b6(a){this.a=a},
fn:function fn(){},
fo:function fo(){},
bv:function bv(){},
dl:function dl(){},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bC:function bC(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fK:function fK(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iM:function iM(a){this.a=a},
iI:function iI(a){this.a=a},
ci:function ci(a){this.a=a},
f9:function f9(a){this.a=a},
hD:function hD(){},
dw:function dw(){},
fh:function fh(a){this.a=a},
e_:function e_(a){this.a=a},
fB:function fB(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(){},
w:function w(){},
i:function i(){},
fN:function fN(){},
o:function o(){},
T:function T(){},
bg:function bg(){},
ab:function ab(){},
a2:function a2(){},
h:function h(){},
U:function U(a){this.a=a},
iR:function iR(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jN:function jN(a,b){this.a=a
this.b=b},
jO:function jO(){},
jQ:function jQ(a,b){this.a=a
this.b=b},
jP:function jP(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
jY:function jY(){},
jX:function jX(a){this.a=a},
jZ:function jZ(){},
k_:function k_(){},
jz:function jz(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ji:function ji(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
p4:function(a){var u,t=J.R(a)
if(!!t.$iaS){u=t.gdE(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eA(a.data,a.height,a.width)},
p3:function(a){if(a instanceof P.eA)return{data:a.a,height:a.b,width:a.c}
return a},
b1:function(a){var u,t,s,r,q
if(a==null)return
u=P.l_(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
p2:function(a){var u={}
a.H(0,new P.k3(u))
return u},
jB:function jB(){},
jD:function jD(a,b){this.a=a
this.b=b},
jE:function jE(a,b){this.a=a
this.b=b},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
k3:function k3(a){this.a=a},
jC:function jC(a,b){this.a=a
this.b=b},
fx:function fx(a,b){this.a=a
this.b=b},
fy:function fy(){},
fz:function fz(){},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o9:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jr:function jr(){},
a8:function a8(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
fT:function fT(){},
aX:function aX(){},
hB:function hB(){},
hJ:function hJ(){},
ch:function ch(){},
ie:function ie(){},
k:function k(){},
b_:function b_(){},
ix:function ix(){},
e4:function e4(){},
e5:function e5(){},
ef:function ef(){},
eg:function eg(){},
er:function er(){},
es:function es(){},
ey:function ey(){},
ez:function ez(){},
bE:function bE(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
bq:function bq(){},
hC:function hC(){},
dT:function dT(){},
dr:function dr(){},
i9:function i9(){},
en:function en(){},
eo:function eo(){}},W={
lv:function(){var u=document.createElement("a")
return u},
kO:function(){var u=document.createElement("canvas")
return u},
ne:function(a,b,c){var u=document.body,t=(u&&C.r).ak(u,a,b,c)
t.toString
u=new H.cs(new W.a3(t),new W.fq(),[W.D])
return u.gaL(u)},
kR:function(a){return"wheel"},
bZ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bR(a)
t=u.ge8(a)
if(typeof t==="string")r=u.ge8(a)}catch(s){H.af(s)}return r},
ng:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.af(u)}return s},
jn:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m9:function(a,b,c,d){var u=W.jn(W.jn(W.jn(W.jn(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.ml(new W.jl(c),W.j)
if(u!=null&&!0)J.mZ(a,b,u,!1)
return new W.jk(a,b,u,!1)},
m8:function(a){var u=W.lv(),t=window.location
u=new W.cu(new W.jv(u,t))
u.ev(a)
return u},
o5:function(a,b,c,d){return!0},
o6:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
ma:function(){var u=P.h,t=P.lG(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jI(t,P.c6(u),P.c6(u),P.c6(u),null)
t.ey(null,new H.h5(C.o,new W.jJ(),[H.aL(C.o,0),u]),s,null)
return t},
ml:function(a,b){var u=$.as
if(u===C.f)return a
return u.dz(a,b)},
p:function p(){},
eS:function eS(){},
eT:function eT(){},
eU:function eU(){},
br:function br(){},
bs:function bs(){},
bt:function bt(){},
b5:function b5(){},
fd:function fd(){},
I:function I(){},
bY:function bY(){},
fe:function fe(){},
ah:function ah(){},
av:function av(){},
ff:function ff(){},
fg:function fg(){},
fj:function fj(){},
an:function an(){},
fk:function fk(){},
d_:function d_(){},
d0:function d0(){},
fl:function fl(){},
fm:function fm(){},
jg:function jg(a,b){this.a=a
this.b=b},
S:function S(){},
fq:function fq(){},
j:function j(){},
f:function f(){},
ao:function ao(){},
c0:function c0(){},
fw:function fw(){},
fA:function fA(){},
aw:function aw(){},
fG:function fG(){},
c2:function c2(){},
aS:function aS(){},
c3:function c3(){},
by:function by(){},
h_:function h_(){},
hl:function hl(){},
c9:function c9(){},
hm:function hm(){},
hn:function hn(a){this.a=a},
ho:function ho(){},
hp:function hp(a){this.a=a},
az:function az(){},
hq:function hq(){},
aA:function aA(){},
a3:function a3(a){this.a=a},
D:function D(){},
dj:function dj(){},
aB:function aB(){},
hG:function hG(){},
hR:function hR(){},
hS:function hS(a){this.a=a},
hU:function hU(){},
aD:function aD(){},
i6:function i6(){},
aE:function aE(){},
i7:function i7(){},
aF:function aF(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
aq:function aq(){},
dz:function dz(){},
ig:function ig(){},
ih:function ih(){},
ck:function ck(){},
aG:function aG(){},
ar:function ar(){},
ik:function ik(){},
il:function il(){},
ir:function ir(){},
aH:function aH(){},
bD:function bD(){},
iv:function iv(){},
iw:function iw(){},
bh:function bh(){},
iS:function iS(){},
j9:function j9(){},
bl:function bl(){},
ct:function ct(){},
jh:function jh(){},
dV:function dV(){},
jm:function jm(){},
ec:function ec(){},
jA:function jA(){},
jF:function jF(){},
jf:function jf(){},
jj:function jj(a){this.a=a},
jk:function jk(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jl:function jl(a){this.a=a},
cu:function cu(a){this.a=a},
O:function O(){},
dk:function dk(a){this.a=a},
hy:function hy(a){this.a=a},
hx:function hx(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(){},
jx:function jx(){},
jy:function jy(){},
jI:function jI(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jJ:function jJ(){},
jG:function jG(){},
d3:function d3(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aW:function aW(){},
jv:function jv(a,b){this.a=a
this.b=b},
eD:function eD(a){this.a=a},
jT:function jT(a){this.a=a},
dU:function dU(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ed:function ed(){},
ee:function ee(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
cA:function cA(){},
cB:function cB(){},
el:function el(){},
em:function em(){},
eq:function eq(){},
et:function et(){},
eu:function eu(){},
cC:function cC(){},
cD:function cD(){},
ew:function ew(){},
ex:function ex(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
eH:function eH(){},
eI:function eI(){},
eJ:function eJ(){},
eK:function eK(){},
eL:function eL(){},
eM:function eM(){},
eN:function eN(){}},K={
Q:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.x("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.G(a,0)
t=C.a.G(b,0)
if(u>t){s=t
t=u
u=s}return new K.hM(u,t)},
v:function(a){var u=new K.hV()
u.es(a)
return u},
aN:function aN(){},
d4:function d4(){},
be:function be(){},
a7:function a7(){this.a=null},
hM:function hM(a,b){this.a=a
this.b=b},
hV:function hV(){this.a=null}},L={
it:function(){var u=new L.is(),t=P.h
u.a=new H.J([t,L.dx])
u.b=new H.J([t,L.dF])
u.c=P.c6(t)
return u},
dx:function dx(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dE:function dE(a,b,c){this.a=a
this.b=b
this.c=c},
dF:function dF(a){this.b=a
this.c=null},
is:function is(){var _=this
_.d=_.c=_.b=_.a=null},
dH:function dH(a){this.b=a
this.a=this.c=null}},O={
kP:function(a){var u=new O.aO([a])
u.bj(a)
return u},
aO:function aO(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c8:function c8(){this.b=this.a=null},
dd:function dd(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hd:function hd(a,b){this.a=a
this.b=b},
he:function he(){},
hf:function hf(a,b){this.a=a
this.b=b},
hg:function hg(){},
hh:function hh(a,b){this.a=a
this.b=b},
hi:function hi(){},
hj:function hj(a,b){this.a=a
this.b=b},
hk:function hk(){},
h7:function h7(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
de:function de(){},
h8:function h8(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ax:function ax(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ha:function ha(){var _=this
_.e=_.d=_.c=_.b=null},
hb:function hb(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dt:function dt(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dA:function dA(){}},E={
lE:function(){var u,t=new E.aR()
t.a=""
t.b=!0
u=O.kP(E.aR)
t.y=u
u.aX(t.ghT(),t.ghW())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sab(0,null)
return t},
nL:function(a,b){var u=new E.hN(a)
u.er(a,b)
return u},
nS:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibt)return E.lW(a,!0,!0,!0,!1)
u=W.kO()
t=u.style
t.width="100%"
t.height="100%"
s.gc8(a).n(0,u)
return E.lW(u,!0,!0,!0,!1)},
lW:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dC(),p=C.i.cJ(a,"webgl2",P.nq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.u(P.x("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nL(p,a)
u=new T.io(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dL(a)
t=new X.fS()
t.c=new X.ai(!1,!1,!1)
t.d=P.c6(P.w)
u.b=t
t=new X.hr(u)
t.f=0
t.r=V.aY()
t.x=V.aY()
t.ch=t.Q=1
u.c=t
t=new X.h0(u)
t.r=0
t.x=V.aY()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iu(u)
t.f=V.aY()
t.r=V.aY()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dy,P.a2]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.gfd(),!1))
u.z.push(W.Y(a,"focus",u.gfj(),!1))
u.z.push(W.Y(a,"blur",u.gf7(),!1))
u.z.push(W.Y(s,"keyup",u.gfn(),!1))
u.z.push(W.Y(s,"keydown",u.gfl(),!1))
u.z.push(W.Y(a,"mousedown",u.gfs(),!1))
u.z.push(W.Y(a,"mouseup",u.gfw(),!1))
u.z.push(W.Y(a,r,u.gfu(),!1))
t=u.z
W.kR(a)
W.kR(a)
t.push(W.Y(a,W.kR(a),u.gfA(),!1))
u.z.push(W.Y(s,r,u.gff(),!1))
u.z.push(W.Y(s,"mouseup",u.gfh(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.gfC(),!1))
u.z.push(W.Y(a,"touchstart",u.gfS(),!1))
u.z.push(W.Y(a,"touchend",u.gfO(),!1))
u.z.push(W.Y(a,"touchmove",u.gfQ(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ac(Date.now(),!1)
q.db=0
q.dc()
return q},
f2:function f2(){},
aR:function aR(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hN:function hN(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hO:function hO(a){this.a=a},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
dC:function dC(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iq:function iq(a){this.a=a}},Z={
l7:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.dQ(b,u)},
ak:function(a){return new Z.bk(a)},
dQ:function dQ(a,b){this.a=a
this.b=b},
cS:function cS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dR:function dR(a){this.a=a},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bx:function bx(a,b,c){this.a=a
this.b=b
this.c=c},
bk:function bk(a){this.a=a}},D={
F:function(){var u=new D.bw()
u.d=0
return u},
f5:function f5(){},
bw:function bw(){var _=this
_.d=_.c=_.b=_.a=null},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
X:function X(){this.b=null},
b8:function b8(){this.b=null},
b9:function b9(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f_:function f_(){},
bu:function bu(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a6:function a6(){},
da:function da(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hH:function hH(){},
i8:function i8(){},
mw:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4="testCanvas",a5=null,a6=34067,a7="modifiers",a8=V.nN("Test 014"),a9=W.kO()
a9.className="pageLargeCanvas"
a9.id=a4
a8.a.appendChild(a9)
u=[P.h]
a8.dq(H.b(["Test of Material Lighting shader with different reflections and refractions. No alpha is being used. The background cube maps is being painted onto the object."],u))
a8.hf(H.b(["controls","shapes"],u))
a8.dq(H.b(["\xab[Back to Tests|../]"],u))
t=document.getElementById(a4)
if(t==null)H.u(P.x("Failed to find an element with the identifier, testCanvas."))
s=E.nS(t,!0,!0,!0,!1)
r=X.kU(a5)
r.sdC(0,!1)
q=E.lE()
q.sab(0,F.mC())
u=s.f
p=u.a
o=p.createTexture()
p.bindTexture(a6,o)
p.texParameteri(a6,10242,10497)
p.texParameteri(a6,10243,10497)
p.texParameteri(a6,10241,9729)
p.texParameteri(a6,10240,9729)
p.bindTexture(a6,a5)
n=new T.im()
n.a=0
n.b=o
n.c=!1
n.d=0
u.aP(n,o,"../resources/maskonaive/posx.jpg",34069,!1,!1)
u.aP(n,o,"../resources/maskonaive/negx.jpg",34070,!1,!1)
u.aP(n,o,"../resources/maskonaive/posy.jpg",34071,!1,!1)
u.aP(n,o,"../resources/maskonaive/negy.jpg",34072,!1,!1)
u.aP(n,o,"../resources/maskonaive/posz.jpg",34073,!1,!1)
u.aP(n,o,"../resources/maskonaive/negz.jpg",34074,!1,!1)
m=new O.dd()
u=O.kP(V.aU)
m.e=u
u.aX(m.gf3(),m.gf5())
u=new O.ax(m,"emission")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
m.f=u
u=new O.ax(m,"ambient")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
m.r=u
u=new O.ax(m,"diffuse")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
m.x=u
u=new O.ax(m,"invDiffuse")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
m.y=u
u=new O.hc(m,"specular")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
u.ch=100
m.z=u
u=new O.h8(m,"bump")
u.c=new A.Z(!1,!1,!1)
m.Q=u
m.ch=null
u=new O.ax(m,"reflect")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
m.cx=u
u=new O.hb(m,"refract")
u.c=new A.Z(!1,!1,!1)
u.f=new V.r(0,0,0)
u.ch=1
m.cy=u
u=new O.h7(m,"alpha")
u.c=new A.Z(!1,!1,!1)
u.f=1
m.db=u
u=new D.da()
u.bj(D.a6)
u.e=H.b([],[D.f_])
u.f=H.b([],[D.bu])
u.r=H.b([],[D.hH])
u.x=H.b([],[D.i8])
u.z=u.y=null
u.cL(u.gf1(),u.gfE(),u.gfI())
m.dx=u
p=new O.ha()
p.b=new V.am(0,0,0,0)
p.c=1
p.d=10
p.e=!1
m.dy=p
p=u.y
u=p==null?u.y=D.F():p
u.n(0,m.gfZ())
u=m.dx
p=u.z
u=p==null?u.z=D.F():p
p=m.gbU()
u.n(0,p)
m.fr=null
u=m.dx
l=V.l6()
k=U.lA(V.lH(V.lN(),l,new V.A(-1,-1,-1)))
j=new V.r(1,1,1)
i=new D.bu()
i.c=new V.r(1,1,1)
i.a=V.m7()
i.d=V.l6()
i.e=V.o0()
h=i.b
i.b=k
k.gq().n(0,i.gew())
k=new D.C("mover",h,i.b)
k.b=!0
i.ax(k)
if(!i.c.w(0,j)){h=i.c
i.c=j
k=new D.C("color",h,j)
k.b=!0
i.ax(k)}u.n(0,i)
u=m.r
u.sp(0,new V.r(0.1,0.1,0.1))
u=m.x
u.sp(0,new V.r(0.1,0.1,0.1))
u=m.z
u.sp(0,new V.r(1,1,1))
u=m.z
u.bm(new A.Z(!0,!1,!1))
u.de(10)
u=m.ch
if(u!==n){if(u!=null)u.gq().M(0,p)
h=m.ch
m.ch=n
n.gq().n(0,p)
u=new D.C("environment",h,m.ch)
u.b=!0
m.a3(u)}m.cy.saC(0.6)
u=m.cy
u.sp(0,new V.r(0.2,0.3,1))
u=m.cx
u.sp(0,new V.r(0.6,0.6,0.6))
g=new U.c1()
g.bj(U.ad)
g.aX(g.gf_(),g.gfG())
g.e=null
g.f=V.bz()
g.r=0
u=s.x
p=new U.dN()
k=U.kQ()
k.scI(0,!0)
k.scs(6.283185307179586)
k.scu(0)
k.sa1(0,0)
k.sct(100)
k.sW(0)
k.scc(0.5)
p.b=k
i=p.gaN()
k.gq().n(0,i)
k=U.kQ()
k.scI(0,!0)
k.scs(6.283185307179586)
k.scu(0)
k.sa1(0,0)
k.sct(100)
k.sW(0)
k.scc(0.5)
p.c=k
k.gq().n(0,i)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
f=new X.ai(!1,!1,!1)
h=p.d
p.d=f
k=new D.C(a7,h,f)
k.b=!0
p.U(k)
k=p.f
if(k!==!1){p.f=!1
k=new D.C("invertX",k,!1)
k.b=!0
p.U(k)}k=p.r
if(k!==!1){p.r=!1
k=new D.C("invertY",k,!1)
k.b=!0
p.U(k)}p.b3(u)
g.n(0,p)
u=s.x
p=new U.dM()
k=U.kQ()
k.scI(0,!0)
k.scs(6.283185307179586)
k.scu(0)
k.sa1(0,0)
k.sct(100)
k.sW(0)
k.scc(0.2)
p.b=k
k.gq().n(0,p.gaN())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
f=new X.ai(!0,!1,!1)
h=p.c
p.c=f
k=new D.C(a7,h,f)
k.b=!0
p.U(k)
p.b3(u)
g.n(0,p)
u=s.x
p=new U.dO()
p.c=0.01
p.e=p.d=0
f=new X.ai(!1,!1,!1)
p.b=f
k=new D.C(a7,a5,f)
k.b=!0
p.U(k)
p.b3(u)
g.n(0,p)
g.n(0,U.lA(V.ay(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
e=X.lK(g)
d=new M.cX()
d.a=!0
u=E.lE()
c=F.hX()
p=c.a
k=new V.A(-1,-1,1)
k=k.t(0,Math.sqrt(k.D(k)))
b=p.bo(new V.aj(1,2,4,6),V.f7(255,0,0),new V.M(-1,-1,0),new V.a_(0,1),k,a5)
k=c.a
p=new V.A(1,-1,1)
p=p.t(0,Math.sqrt(p.D(p)))
a=k.bo(new V.aj(0,3,4,6),V.f7(0,0,255),new V.M(1,-1,0),new V.a_(1,1),p,a5)
p=c.a
k=new V.A(1,1,1)
k=k.t(0,Math.sqrt(k.D(k)))
a0=p.bo(new V.aj(0,2,5,6),V.f7(0,128,0),new V.M(1,1,0),new V.a_(1,0),k,a5)
k=c.a
p=V.aY()
i=new V.A(-1,1,1)
i=i.t(0,Math.sqrt(i.D(i)))
a1=k.bo(new V.aj(0,2,4,7),V.f7(255,255,0),new V.M(-1,1,0),p,i,a5)
c.d.dm(H.b([b,a,a0,a1],[F.b0]))
c.an()
u.sab(0,c)
d.e=u
d.sb4(a5)
d.sbd(0,a5)
d.sbe(a5)
u=new O.dt()
u.b=1.0471975511965976
u.d=new V.r(1,1,1)
h=u.c
u.c=n
n.gq().n(0,u.gbU())
p=new D.C("boxTexture",h,u.c)
p.b=!0
u.a3(p)
d.sbe(u)
d.sbd(0,r)
d.sb4(e)
a2=new M.d1()
a2.a=!0
u=O.kP(E.aR)
a2.e=u
u.aX(a2.gf9(),a2.gfb())
a2.y=a2.x=a2.r=a2.f=null
a3=X.kU(a5)
a2.sb4(a5)
a2.sbd(0,a3)
a2.sbe(a5)
a2.sb4(e)
a2.sbe(m)
a2.sbd(0,r)
a2.e.n(0,q)
a2.c.sdC(0,!1)
u=M.ap
p=H.b([d,a2],[u])
k=new M.cV()
k.bj(u)
k.e=!0
k.f=!1
k.r=null
k.aX(k.gfK(),k.gfM())
k.aa(0,p)
u=s.d
if(u!==k){if(u!=null)u.gq().M(0,s.gcT())
s.d=k
k.gq().n(0,s.gcT())
s.cU()}u=V.lQ("controls")
u.c3(0,"Silver",new D.kk(m),!0)
u.a2(0,"Gold",new D.kl(m))
u.a2(0,"Glass",new D.km(m))
u.a2(0,"Blue Glass",new D.kv(m))
u.a2(0,"Water Bubble",new D.kw(m))
u.a2(0,"No Reflection",new D.kx(m))
u.a2(0,"Pink Distort",new D.ky(m))
u.a2(0,"Cloak",new D.kz(m))
u.a2(0,"White and Shiny",new D.kA(m))
u=V.lQ("shapes")
u.a2(0,"Cube",new D.kB(q))
u.a2(0,"Cuboid",new D.kC(q))
u.a2(0,"Cylinder",new D.kn(q))
u.a2(0,"Cone",new D.ko(q))
u.a2(0,"Cylindrical",new D.kp(q))
u.a2(0,"Sphere",new D.kq(q))
u.a2(0,"Spherical",new D.kr(q))
u.c3(0,"Toroid",new D.ks(q),!0)
u.a2(0,"Knot",new D.kt(q))
u=s.Q
if(u==null)u=s.Q=D.F()
p=u.b
u=p==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):p
u.push(new D.ku(a8,m))
V.po(s)},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a){this.a=a},
kA:function kA(a){this.a=a},
kB:function kB(a){this.a=a},
kC:function kC(a){this.a=a},
kj:function kj(){},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
ki:function ki(){},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
kh:function kh(){},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a,b){this.a=a
this.b=b}},X={cT:function cT(a,b){this.a=a
this.b=b},d9:function d9(a,b){this.a=a
this.b=b},fS:function fS(){var _=this
_.d=_.c=_.b=_.a=null},dc:function dc(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h0:function h0(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ai:function ai(a,b,c){this.a=a
this.b=b
this.c=c},aV:function aV(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hr:function hr(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ca:function ca(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hI:function hI(){},dG:function dG(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iu:function iu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dL:function dL(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kU:function(a){var u=new X.fC(),t=new V.am(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lT
if(t==null){t=V.lS(0,0,1,1)
$.lT=t}u.r=t
return u},
lK:function(a){var u,t,s=new X.dm()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().n(0,s.geB())
t=new D.C("mover",u,s.b)
t.b=!0
s.ar(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.E().a)){s.c=1.0471975511965976
t=new D.C("fov",t,1.0471975511965976)
t.b=!0
s.ar(t)}t=s.d
if(!(Math.abs(t-0.1)<$.E().a)){s.d=0.1
t=new D.C("near",t,0.1)
t.b=!0
s.ar(t)}t=s.e
if(!(Math.abs(t-2000)<$.E().a)){s.e=2000
t=new D.C("far",t,2000)
t.b=!0
s.ar(t)}return s},
kN:function kN(){},
fC:function fC(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fJ:function fJ(){this.b=this.a=null},
dm:function dm(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(){}},V={
f7:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.am(u,t,s,1)},
pt:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bh(a-b,u)
return(a<0?a+u:a)+b},
L:function(a,b,c){if(a==null)return C.a.am("null",c)
return C.a.am(C.d.ea(Math.abs(a-0)<$.E().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.l)(a),++s){r=V.L(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.am(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
ll:function(a){return C.d.ii(Math.pow(2,C.R.cn(Math.log(H.p1(a))/Math.log(2))))},
bz:function(){var u=$.lI
return u==null?$.lI=V.ay(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
ay:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lH:function(a,b,c){var u=c.t(0,Math.sqrt(c.D(c))),t=b.aB(u),s=t.t(0,Math.sqrt(t.D(t))),r=u.aB(s),q=new V.A(a.a,a.b,a.c),p=s.V(0).D(q),o=r.V(0).D(q),n=u.V(0).D(q)
return V.ay(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aY:function(){var u=$.lM
return u==null?$.lM=new V.a_(0,0):u},
lN:function(){var u=$.aC
return u==null?$.aC=new V.M(0,0,0):u},
lS:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dq(a,b,c,d)},
cr:function(){var u=$.m6
return u==null?$.m6=new V.A(0,0,0):u},
o0:function(){var u=$.iW
return u==null?$.iW=new V.A(-1,0,0):u},
l6:function(){var u=$.iX
return u==null?$.iX=new V.A(0,1,0):u},
m7:function(){var u=$.iY
return u==null?$.iY=new V.A(0,0,1):u},
r:function r(a,b,c){this.a=a
this.b=b
this.c=c},
am:function am(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fs:function fs(a){this.a=a},
df:function df(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aU:function aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a_:function a_(a,b){this.a=a
this.b=b},
M:function M(a,b,c){this.a=a
this.b=b
this.c=c},
aj:function aj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dq:function dq(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
po:function(a){P.nT(C.O,new V.kE(a))},
lQ:function(a){var u=new V.hK(a),t=document.getElementById(a)
u.c=t
if(t==null)H.u("Failed to find "+a+" for RadioGroup")
return u},
nN:function(a){var u=new V.i0()
u.eu(a,!0)
return u},
cU:function cU(){},
kE:function kE(a){this.a=a},
fi:function fi(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fE:function fE(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fF:function fF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hF:function hF(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hK:function hK(a){this.a=a
this.c=null},
hL:function hL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i0:function i0(){this.b=this.a=null},
i2:function i2(a){this.a=a},
i1:function i1(a){this.a=a},
i3:function i3(a){this.a=a}},U={
kQ:function(){var u=new U.f8()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lA:function(a){var u=new U.cW()
u.a=a
return u},
f8:function f8(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cW:function cW(){this.b=this.a=null},
c1:function c1(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ad:function ad(){},
dM:function dM(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dN:function dN(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cV:function cV(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},cX:function cX(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d1:function d1(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},ap:function ap(){}},A={
nu:function(a,b){var u=a.b7,t=new A.h6(b,u)
t.cR(b,u)
t.eq(a,b)
return t},
nv:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.gaq(a2)+a3.gaq(a3)+a4.gaq(a4)+a5.gaq(a5)+a6.gaq(a6)+a7.gaq(a7)+a8.gaq(a8)+a9.gaq(a9)+b0.gaq(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.l)(b1),++t)d+="_"+H.e(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.l)(b2),++t)d+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.l)(b3),++t)d+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.l)(b4),++t)d+="_"+H.e(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.at()
if(j){u=$.b4()
e=new Z.bk(e.a|u.a)}if(i){u=$.b3()
e=new Z.bk(e.a|u.a)}if(h){u=$.b2()
e=new Z.bk(e.a|u.a)}return new A.h9(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
k0:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
k1:function(a,b,c){var u
A.k0(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eQ(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
oB:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k0(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
ox:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k1(b,t,"ambient")
b.a+="\n"},
oz:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k1(b,t,"diffuse")
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
oC:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k1(b,t,"invDiffuse")
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
oI:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k1(b,t,"specular")
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
oE:function(a,b){var u,t,s
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
oG:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k0(b,t,"reflect")
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
oH:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k0(b,t,"refract")
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
oy:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
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
if(typeof u!=="number")return u.ag()
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
c.a=r+"\n"}r=[P.h]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.j(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.j(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(q," + ")+");\n"
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
oA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eQ(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ag()
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
r=[P.h]
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
c.a+="      highLight = intensity*("+C.b.j(m," + ")+");\n"}else c.a+="   highLight = "+C.b.j(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.j(o," + ")+");\n"
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
oF:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
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
if(typeof u!=="number")return u.ag()
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
c.a=r+"\n"}r=[P.h]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.j(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.j(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.j(l," + ")+");\n"
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
oJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
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
if(typeof u!=="number")return u.ag()
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
c.a=u+"\n"}u=[P.h]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.j(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.j(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.j(j," + ")+");\n"
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
oD:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.h])
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
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oK:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.U("")
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
A.oB(a,j)
A.ox(a,j)
A.oz(a,j)
A.oC(a,j)
A.oI(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oG(a,j)
A.oH(a,j)}A.oE(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oy(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oA(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oF(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.l)(q),++o)A.oJ(a,q[o],j)
A.oD(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.h])
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.l)(u),++o){r=u[o].i(0)
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
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oL:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bq+"];\n"
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
oN:function(a,b){var u
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
oM:function(a,b){var u
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
oP:function(a,b){var u,t
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
oQ:function(a,b){var u,t
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
oO:function(a,b){var u
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
oR:function(a,b){var u
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
eQ:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ad(a,1)},
l3:function(a,b,c,d,e){var u=new A.iB(a,c,e)
u.f=d
P.nr(d,0,P.w)
return u},
cQ:function cQ(a,b,c){this.a=a
this.b=b
this.c=c},
eV:function eV(a){this.a=a},
Z:function Z(a,b,c){this.a=a
this.b=b
this.c=c},
h6:function h6(a,b){var _=this
_.iz=_.iy=_.br=_.b7=_.bq=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iM=_.iL=_.iK=_.cl=_.ck=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.iJ=_.iI=_.dO=_.iH=_.iG=_.dN=_.dM=_.iF=_.iE=_.dL=_.dK=_.iD=_.iC=_.dJ=_.iB=_.iA=_.dI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cR:function cR(a,b){this.a=a
this.b=b},
cZ:function cZ(a,b){this.a=a
this.b=b},
dn:function dn(a,b){this.a=a
this.b=b},
dv:function dv(a,b){this.a=a
this.b=b},
h9:function h9(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bq=b3
_.b7=b4
_.br=b5},
cm:function cm(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cn:function cn(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cp:function cp(a,b,c,d,e,f,g,h,i,j){var _=this
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
cq:function cq(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ds:function ds(){},
i5:function i5(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dI:function dI(){},
iG:function iG(a){this.a=a},
bi:function bi(a,b,c){this.a=a
this.c=b
this.d=c},
iD:function iD(a,b,c){this.a=a
this.c=b
this.d=c},
iE:function iE(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){this.a=a
this.c=b
this.d=c},
iB:function iB(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cl:function cl(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
co:function co(a,b,c){this.a=a
this.c=b
this.d=c},
a9:function a9(a,b,c){this.a=a
this.c=b
this.d=c},
bF:function bF(a,b,c){this.a=a
this.c=b
this.d=c},
bj:function bj(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lg:function(a,b,c,d){var u=F.hX()
F.cF(u,b,c,d,a,1,0,0,1)
F.cF(u,b,c,d,a,0,1,0,3)
F.cF(u,b,c,d,a,0,0,1,2)
F.cF(u,b,c,d,a,-1,0,0,0)
F.cF(u,b,c,d,a,0,-1,0,0)
F.cF(u,b,c,d,a,0,0,-1,3)
u.an()
return u},
jW:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cF:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
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
j.d=i}m=F.jW(i)
l=F.jW(h)
k=F.lo(d,a0,new F.jV(j,F.jW(g),F.jW(f),l,m,c),b)
if(k!=null)a.ba(k)},
mr:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hX()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.b0])
q=u.a
p=new V.A(0,0,t)
p=p.t(0,Math.sqrt(p.D(p)))
r.push(q.hi(new V.aj(a,-1,-1,-1),new V.am(1,1,1,1),new V.M(0,0,c),new V.A(0,0,t),new V.a_(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.A(m,l,t).t(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dP(new V.aj(a,-1,-1,-1),null,new V.am(i,g,h,1),new V.M(m*k,l*k,c),new V.A(0,0,t),new V.a_(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.dm(r)
return u},
mo:function(a,b,c){return F.mp(!0,a,1,new F.k4(1,c),b)},
mp:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.lo(c,e,new F.k6(d),null)
if(u==null)return
u.an()
u.c4()
if(b)u.ba(F.mr(3,!1,1,new F.k7(d),e))
u.ba(F.mr(1,!0,-1,new F.k8(d),e))
return u},
mA:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.kF()
u=F.lg(a,null,new F.kG(t,1),c)
u.c4()
return u},
mC:function(){return F.mq(15,30,0.5,1,new F.kI())},
pi:function(){return F.mq(12,120,0.3,1,new F.kg(3,2))},
mq:function(a,b,c,d,e){var u=F.lo(a,b,new F.k5(e,d,b,c),null)
if(u==null)return
u.an()
u.c4()
return u},
lo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hX()
t=H.b([],[F.b0])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dP(g,g,new V.am(p,0,0,1),g,g,new V.a_(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.cb(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dP(g,g,new V.am(j,i,h,1),g,g,new V.a_(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.cb(d))}}u.d.hh(a+1,b+1,t)
return u},
c_:function(a,b,c){var u=new F.b7(),t=a.a
if(t==null)H.u(P.x("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.x("May not create a face with vertices attached to different shapes."))
u.c1(a)
u.c2(b)
u.h4(c)
u.a.a.d.b.push(u)
u.a.a.a6()
return u},
nn:function(a,b){var u=new F.c5(),t=a.a
if(t==null)H.u(P.x("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.u(P.x("May not create a line with vertices attached to different shapes."))
u.c1(a)
u.c2(b)
u.a.a.c.b.push(u)
u.a.a.a6()
return u},
hX:function(){var u=new F.hW(),t=new F.iZ(u)
t.b=!1
t.c=H.b([],[F.b0])
u.a=t
t=new F.i_(u)
t.b=H.b([],[F.ce])
u.b=t
t=new F.hZ(u)
t.b=H.b([],[F.c5])
u.c=t
t=new F.hY(u)
t.b=H.b([],[F.b7])
u.d=t
u.e=null
return u},
dP:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b0(),r=new F.j6()
r.b=H.b([],[F.ce])
s.b=r
r=new F.j2()
u=[F.c5]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j_()
u=[F.b7]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mQ()
s.e=0
r=$.at()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b4().a)!==0?e:t
s.x=(u&$.b3().a)!==0?b:t
s.y=(u&$.bo().a)!==0?f:t
s.z=(u&$.bp().a)!==0?g:t
s.Q=(u&$.mR().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.b2().a)!==0?a:t
return s},
jV:function jV(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k4:function k4(a,b){this.a=a
this.b=b},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
kF:function kF(){},
kG:function kG(a,b){this.a=a
this.b=b},
kI:function kI(){},
kg:function kg(a,b){this.a=a
this.b=b},
k5:function k5(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b7:function b7(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fv:function fv(){},
i4:function i4(){},
c5:function c5(){this.b=this.a=null},
fU:function fU(){},
iA:function iA(){},
ce:function ce(){this.a=null},
hW:function hW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hY:function hY(a){this.a=a
this.b=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
b0:function b0(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
j8:function j8(a){this.a=a},
j7:function j7(a){this.a=a},
iZ:function iZ(a){this.a=a
this.c=this.b=null},
j_:function j_(){this.d=this.c=this.b=null},
j0:function j0(a,b){this.a=a
this.b=b},
j1:function j1(a,b){this.a=a
this.b=b},
j2:function j2(){this.c=this.b=null},
j4:function j4(){},
j3:function j3(){},
j5:function j5(){},
hz:function hz(){},
j6:function j6(){this.b=null}},T={dB:function dB(){},im:function im(){var _=this
_.e=_.d=_.c=_.b=_.a=null},io:function io(a){var _=this
_.a=a
_.e=_.d=_.c=null},ip:function ip(a,b,c,d,e,f,g){var _=this
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
H.kY.prototype={}
J.a.prototype={
w:function(a,b){return a===b},
gJ:function(a){return H.cf(a)},
i:function(a){return"Instance of '"+H.e(H.cg(a))+"'"}}
J.fO.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaK:1}
J.d7.prototype={
w:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.d8.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$inl:1}
J.hE.prototype={}
J.bG.prototype={}
J.bc.prototype={
i:function(a){var u=a[$.mE()]
if(u==null)return this.en(a)
return"JavaScript function for "+H.e(J.a4(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.ba.prototype={
cC:function(a,b){if(!!a.fixed$length)H.u(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dp(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.u(P.z("remove"))
for(u=0;u<a.length;++u)if(J.H(a[u],b)){a.splice(u,1)
return!0}return!1},
aa:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.l)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aP(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hP:function(a){return this.j(a,"")},
hH:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aP(a))}return u},
hI:function(a,b,c){return this.hH(a,b,c,null)},
hG:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aP(a))}throw H.c(H.fM())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ej:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a0(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aL(a,0)])
return H.b(a.slice(b,c),[H.aL(a,0)])},
ghF:function(a){if(a.length>0)return a[0]
throw H.c(H.fM())},
gav:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fM())},
ds:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aP(a))}return!1},
aZ:function(a,b){if(!!a.immutable$list)H.u(P.z("sort"))
H.nQ(a,b==null?J.ou():b)},
ei:function(a){return this.aZ(a,null)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.H(a[u],b))return!0
return!1},
i:function(a){return P.kV(a,"[","]")},
gS:function(a){return new J.a5(a,a.length)},
gJ:function(a){return H.cf(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kL(b,u,null))
if(b<0)throw H.c(P.a0(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.u(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$iq:1,
$ii:1,
$io:1}
J.kX.prototype={}
J.a5.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.l(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c4.prototype={
aU:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ae(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbt(b)
if(this.gbt(a)===u)return 0
if(this.gbt(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbt:function(a){return a===0?1/a<0:a<0},
ii:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
cn:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
ao:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
ea:function(a,b){var u
if(b>20)throw H.c(P.a0(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbt(a))return"-"+u
return u},
bf:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a0(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.A("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bh:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
ep:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dg(a,b)},
a9:function(a,b){return(a|0)===a?a/b|0:this.dg(a,b)},
dg:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.df(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h8:function(a,b){if(b<0)throw H.c(H.ae(b))
return this.df(a,b)},
df:function(a,b){return b>31?0:a>>>b},
$iN:1,
$iab:1}
J.d6.prototype={$iw:1}
J.d5.prototype={}
J.bb.prototype={
X:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.u(H.bP(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
C:function(a,b){if(typeof b!=="string")throw H.c(P.kL(b,null,null))
return a+b},
aV:function(a,b,c,d){var u,t
c=P.aZ(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.ae(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.ac(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.ae(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.dp(b,null))
if(b>c)throw H.c(P.dp(b,null))
if(c>a.length)throw H.c(P.dp(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.u(a,b,null)},
il:function(a){return a.toLowerCase()},
A:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
am:function(a,b){var u=b-a.length
if(u<=0)return a
return this.A(" ",u)+a},
bs:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dU:function(a,b){return this.bs(a,b,0)},
aU:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ae(b))
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
gm:function(a){return a.length},
$ih:1}
H.n.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.X(this.a,b)},
$aq:function(){return[P.w]},
$ay:function(){return[P.w]},
$ai:function(){return[P.w]},
$ao:function(){return[P.w]}}
H.q.prototype={}
H.db.prototype={
gS:function(a){return new H.bd(this,this.gm(this))},
bC:function(a,b){return this.em(0,b)}}
H.bd.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.bn(s),q=r.gm(s)
if(t.b!=q)throw H.c(P.aP(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.c7.prototype={
gS:function(a){return new H.h4(J.aM(this.a),this.b)},
gm:function(a){return J.ag(this.a)},
L:function(a,b){return this.b.$1(J.eR(this.a,b))},
$ai:function(a,b){return[b]}}
H.fp.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.h4.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.h5.prototype={
gm:function(a){return J.ag(this.a)},
L:function(a,b){return this.b.$1(J.eR(this.a,b))},
$aq:function(a,b){return[b]},
$adb:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cs.prototype={
gS:function(a){return new H.ja(J.aM(this.a),this.b)}}
H.ja.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.d2.prototype={}
H.iL.prototype={
l:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dJ.prototype={}
H.fa.prototype={
i:function(a){return P.l1(this)},
l:function(a,b,c){return H.nb()},
$iT:1}
H.fb.prototype={
gm:function(a){return this.a},
c9:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c9(0,b))return
return this.d2(b)},
d2:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d2(s))}}}
H.iy.prototype={
al:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hA.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fR.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iK.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kJ.prototype={
$1:function(a){if(!!J.R(a).$ibv)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.ep.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bX.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cK(t==null?"unknown":t)+"'"},
gip:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.ia.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cK(u)+"'"}}
H.bU.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cf(this.a)
else u=typeof t!=="object"?J.cO(t):H.cf(t)
return(u^H.cf(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cg(u))+"'")}}
H.f4.prototype={
i:function(a){return this.a}}
H.hT.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.J.prototype={
gm:function(a){return this.a},
ghO:function(a){return this.a===0},
ga4:function(a){return new H.fW(this,[H.aL(this,0)])},
gio:function(a){var u=this
return H.nt(u.ga4(u),new H.fQ(u),H.aL(u,0),H.aL(u,1))},
c9:function(a,b){var u=this.b
if(u==null)return!1
return this.eM(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bk(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bk(r,b)
s=t==null?null:t.b
return s}else return q.hM(b)},
hM:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.d4(r,s.dW(a))
t=s.dX(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cW(u==null?s.b=s.bS():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cW(t==null?s.c=s.bS():t,b,c)}else s.hN(b,c)},
hN:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bS()
u=r.dW(a)
t=r.d4(q,u)
if(t==null)r.c_(q,u,[r.bT(a,b)])
else{s=r.dX(t,a)
if(s>=0)t[s].b=b
else t.push(r.bT(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aP(u))
t=t.c}},
cW:function(a,b,c){var u=this.bk(a,b)
if(u==null)this.c_(a,b,this.bT(b,c))
else u.b=c},
eX:function(){this.r=this.r+1&67108863},
bT:function(a,b){var u,t=this,s=new H.fV(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.eX()
return s},
dW:function(a){return J.cO(a)&0x3ffffff},
dX:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1},
i:function(a){return P.l1(this)},
bk:function(a,b){return a[b]},
d4:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
eQ:function(a,b){delete a[b]},
eM:function(a,b){return this.bk(a,b)!=null},
bS:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c_(t,u,t)
this.eQ(t,u)
return t}}
H.fQ.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aL(u,1),args:[H.aL(u,0)]}}}
H.fV.prototype={}
H.fW.prototype={
gm:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.fX(u,u.r)
t.c=u.e
return t}}
H.fX.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kc.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.kd.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ke.prototype={
$1:function(a){return this.a(a)}}
H.fP.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inJ:1}
H.cb.prototype={$icb:1}
H.bf.prototype={$ibf:1}
H.dg.prototype={
gm:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.cc.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.N]},
$ay:function(){return[P.N]},
$ii:1,
$ai:function(){return[P.N]},
$io:1,
$ao:function(){return[P.N]}}
H.dh.prototype={
l:function(a,b,c){H.aJ(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.w]},
$ay:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
H.hs.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.ht.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hu.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hv.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.hw.prototype={
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.di.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]}}
H.cd.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aJ(b,a,a.length)
return a[b]},
$icd:1,
$ibE:1}
H.cw.prototype={}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
P.jc.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jb.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jd.prototype={
$0:function(){this.a.$0()}}
P.je.prototype={
$0:function(){this.a.$0()}}
P.ev.prototype={
ez:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jL(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eA:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.jK(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idD:1}
P.jL.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jK.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.ep(u,q)}s.c=r
t.d.$1(s)}}
P.bH.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bI.prototype={
gE:function(a){var u=this.c
if(u==null)return this.b
return u.gE(u)},
v:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.v())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bH){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aM(u)
if(!!r.$ibI){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jH.prototype={
gS:function(a){return new P.bI(this.a())}}
P.dS.prototype={}
P.dy.prototype={}
P.id.prototype={}
P.dD.prototype={}
P.jU.prototype={}
P.k2.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dl():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.js.prototype={
ic:function(a){var u,t,s,r=null
try{if(C.f===$.as){a.$0()
return}P.oT(r,r,this,a)}catch(s){u=H.af(s)
t=H.li(s)
P.mi(r,r,this,u,t)}},
ie:function(a,b){var u,t,s,r=null
try{if(C.f===$.as){a.$1(b)
return}P.oU(r,r,this,a,b)}catch(s){u=H.af(s)
t=H.li(s)
P.mi(r,r,this,u,t)}},
ig:function(a,b){return this.ie(a,b,null)},
hm:function(a){return new P.jt(this,a)},
dz:function(a,b){return new P.ju(this,a,b)}}
P.jt.prototype={
$0:function(){return this.a.ic(this.b)}}
P.ju.prototype={
$1:function(a){return this.a.ig(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jp.prototype={
gS:function(a){var u=new P.e6(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eK(b)
return t}},
eK:function(a){var u=this.d
if(u==null)return!1
return this.bJ(this.d3(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cX(u==null?s.b=P.l8():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cX(t==null?s.c=P.l8():t,b)}else return s.eD(0,b)},
eD:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.l8()
u=s.cZ(b)
t=r[u]
if(t==null)r[u]=[s.bG(b)]
else{if(s.bJ(t,b)>=0)return!1
t.push(s.bG(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fV(this.c,b)
else return this.fU(0,b)},
fU:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d3(r,b)
t=s.bJ(u,b)
if(t<0)return!1
s.di(u.splice(t,1)[0])
return!0},
cX:function(a,b){if(a[b]!=null)return!1
a[b]=this.bG(b)
return!0},
fV:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.di(u)
delete a[b]
return!0},
cY:function(){this.r=1073741823&this.r+1},
bG:function(a){var u,t=this,s=new P.jq(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cY()
return s},
di:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cY()},
cZ:function(a){return J.cO(a)&1073741823},
d3:function(a,b){return a[this.cZ(b)]},
bJ:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.H(a[t].a,b))return t
return-1}}
P.jq.prototype={}
P.e6.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fL.prototype={}
P.fY.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:3}
P.fZ.prototype={$iq:1,$ii:1,$io:1}
P.y.prototype={
gS:function(a){return new H.bd(a,this.gm(a))},
L:function(a,b){return this.h(a,b)},
ik:function(a,b){var u,t,s=this,r=H.b([],[H.pa(s,a,"y",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
ij:function(a){return this.ik(a,!0)},
hD:function(a,b,c,d){var u
P.aZ(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kV(a,"[","]")}}
P.h1.prototype={}
P.h2.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a1.prototype={
H:function(a,b){var u,t
for(u=J.aM(this.ga4(a));u.v();){t=u.gE(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.ag(this.ga4(a))},
i:function(a){return P.l1(a)},
$iT:1}
P.jM.prototype={
l:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h3.prototype={
h:function(a,b){return J.bT(this.a,b)},
l:function(a,b,c){J.kK(this.a,b,c)},
H:function(a,b){J.ls(this.a,b)},
gm:function(a){return J.ag(this.a)},
i:function(a){return J.a4(this.a)},
$iT:1}
P.dK.prototype={}
P.jw.prototype={
aa:function(a,b){var u
for(u=J.aM(b);u.v();)this.n(0,u.gE(u))},
i:function(a){return P.kV(this,"{","}")},
L:function(a,b){var u,t,s
P.lR(b,"index")
for(u=P.oa(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.P(b,this,"index",null,t))},
$iq:1,
$ii:1}
P.e7.prototype={}
P.eB.prototype={}
P.f0.prototype={
hS:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aZ(a0,a1,b.length)
u=$.mT()
if(typeof a1!=="number")return H.t(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kb(C.a.G(b,n))
j=H.kb(C.a.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.X("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.U("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bB(m)
s=n
continue}}throw H.c(P.W("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.lw(b,p,a1,q,o,f)
else{e=C.c.bh(f-1,4)+1
if(e===1)throw H.c(P.W(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aV(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lw(b,p,a1,q,o,d)
else{e=C.c.bh(d,4)
if(e===1)throw H.c(P.W(c,b,a1))
if(e>1)b=C.a.aV(b,a1,a1,e===2?"==":"=")}return b}}
P.f1.prototype={}
P.f6.prototype={}
P.fc.prototype={}
P.fr.prototype={}
P.fI.prototype={
i:function(a){return this.a}}
P.fH.prototype={
eN:function(a,b,c){var u,t,s,r,q,p,o=null
for(u=this.a,t=u.e,s=u.d,u=u.c,r=b,q=o;r<c;++r){if(r>=a.length)return H.d(a,r)
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
default:p=o}if(p!=null){if(q==null)q=new P.U("")
if(r>b)q.a+=C.a.u(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.n3(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iT.prototype={
ghC:function(){return C.M}}
P.iV.prototype={
ca:function(a){var u,t,s,r=P.aZ(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jS(t)
if(s.eS(a,0,r)!==r)s.dk(J.n_(a,r-1),0)
return new Uint8Array(t.subarray(0,H.or(0,s.b,t.length)))}}
P.jS.prototype={
dk:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eS:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dk(r,C.a.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iU.prototype={
ca:function(a){var u,t,s,r,q,p,o,n,m=P.nW(!1,a,0,null)
if(m!=null)return m
u=P.aZ(0,null,J.ag(a))
t=P.mk(a,0,u)
if(t>0){s=P.cj(a,0,t)
if(t===u)return s
r=new P.U(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.U("")
o=new P.jR(!1,r)
o.c=p
o.hp(a,q,u)
if(o.e>0){H.u(P.W("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bB(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jR.prototype={
hp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bn(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ag()
if((r&192)!==128){q=P.W(k+C.c.bf(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.W("Overlong encoding of 0x"+C.c.bf(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.c.bf(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bB(j)
l.c=!1}if(typeof c!=="number")return H.t(c)
q=s<c
for(;q;){p=P.mk(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cj(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.c.bf(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.W(k+C.c.bf(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aK.prototype={}
P.ac.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.ac&&this.a===b.a&&!0},
aU:function(a,b){return C.c.aU(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aR(u,30))&1073741823},
i:function(a){var u=this,t=P.nc(H.nF(u)),s=P.cY(H.nD(u)),r=P.cY(H.nz(u)),q=P.cY(H.nA(u)),p=P.cY(H.nC(u)),o=P.cY(H.nE(u)),n=P.nd(H.nB(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.N.prototype={}
P.b6.prototype={
w:function(a,b){if(b==null)return!1
return b instanceof P.b6&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aU:function(a,b){return C.c.aU(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fo(),q=this.a
if(q<0)return"-"+new P.b6(0-q).i(0)
u=r.$1(C.c.a9(q,6e7)%60)
t=r.$1(C.c.a9(q,1e6)%60)
s=new P.fn().$1(q%1e6)
return""+C.c.a9(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fn.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fo.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bv.prototype={}
P.dl.prototype={
i:function(a){return"Throw of null."}}
P.al.prototype={
gbI:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbH:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbI()+o+u
if(!q.a)return t
s=q.gbH()
r=P.kT(q.b)
return t+s+": "+r}}
P.bC.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fK.prototype={
gbI:function(){return"RangeError"},
gbH:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gm:function(a){return this.f}}
P.iM.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.ci.prototype={
i:function(a){return"Bad state: "+this.a}}
P.f9.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kT(u)+"."}}
P.hD.prototype={
i:function(a){return"Out of Memory"},
$ibv:1}
P.dw.prototype={
i:function(a){return"Stack Overflow"},
$ibv:1}
P.fh.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e_.prototype={
i:function(a){return"Exception: "+this.a}}
P.fB.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.X(f,q)
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
return h+l+j+k+"\n"+C.a.A(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fD.prototype={}
P.w.prototype={}
P.i.prototype={
bC:function(a,b){return new H.cs(this,b,[H.lh(this,"i",0)])},
gm:function(a){var u,t=this.gS(this)
for(u=0;t.v();)++u
return u},
gaL:function(a){var u,t=this.gS(this)
if(!t.v())throw H.c(H.fM())
u=t.gE(t)
if(t.v())throw H.c(H.ni())
return u},
L:function(a,b){var u,t,s
P.lR(b,"index")
for(u=this.gS(this),t=0;u.v();){s=u.gE(u)
if(b===t)return s;++t}throw H.c(P.P(b,this,"index",null,t))},
i:function(a){return P.nh(this,"(",")")}}
P.fN.prototype={}
P.o.prototype={$iq:1,$ii:1}
P.T.prototype={}
P.bg.prototype={
gJ:function(a){return P.a2.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ab.prototype={}
P.a2.prototype={constructor:P.a2,$ia2:1,
w:function(a,b){return this===b},
gJ:function(a){return H.cf(this)},
i:function(a){return"Instance of '"+H.e(H.cg(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.U.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iR.prototype={
$2:function(a,b){var u,t,s,r=J.cI(b).dU(b,"=")
if(r===-1){if(b!=="")J.kK(a,P.lc(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.ad(b,r+1)
s=this.a
J.kK(a,P.lc(u,0,u.length,s,!0),P.lc(t,0,t.length,s,!0))}return a}}
P.iO.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv4 address, "+a,this.a,b))}}
P.iP.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iQ.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eP(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bJ.prototype={
gec:function(){return this.b},
gco:function(a){var u=this.c
if(u==null)return""
if(C.a.a8(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbw:function(a){var u=this.d
if(u==null)return P.mb(this.a)
return u},
gcA:function(a){var u=this.f
return u==null?"":u},
gdP:function(){var u=this.r
return u==null?"":u},
e6:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a8(u,"/"))u="/"+u
s=P.la(null,0,0,b)
return new P.bJ(q,o,m,n,u,s,r.r)},
gcB:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dK(P.m2(t==null?"":t),[u,u])
t=u}return t},
gdQ:function(){return this.c!=null},
gdT:function(){return this.f!=null},
gdR:function(){return this.r!=null},
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
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.R(b).$il4)if(s.a==b.gbD())if(s.c!=null===b.gdQ())if(s.b==b.gec())if(s.gco(s)==b.gco(b))if(s.gbw(s)==b.gbw(b))if(s.e===b.ge4(b)){u=s.f
t=u==null
if(!t===b.gdT()){if(t)u=""
if(u===b.gcA(b)){u=s.r
t=u==null
if(!t===b.gdR()){if(t)u=""
u=u===b.gdP()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$il4:1,
gbD:function(){return this.a},
ge4:function(a){return this.e}}
P.jN.prototype={
$1:function(a){throw H.c(P.W("Invalid port",this.a,this.b+1))}}
P.jO.prototype={
$1:function(a){return P.eC(C.W,a,C.e,!1)}}
P.jQ.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eC(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eC(C.h,b,C.e,!0))}}}
P.jP.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aM(b),t=this.a;u.v();)t.$2(a,u.gE(u))}}
P.iN.prototype={
geb:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bs(u,"?",o)
s=u.length
if(t>=0){r=P.cE(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.ji("data",p,p,p,P.cE(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jY.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jX.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.n0(u,0,96,b)
return u},
$S:18}
P.jZ.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.G(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k_.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.G(b,0),t=C.a.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jz.prototype={
gdQ:function(){return this.c>0},
gdS:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.C()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gdT:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdR:function(){return this.r<this.a.length},
gd5:function(){return this.b===4&&C.a.a8(this.a,"http")},
gd6:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbD:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd5())q=t.x="http"
else if(t.gd6()){t.x="https"
q="https"}else if(q===4&&C.a.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a8(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
gec:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gco:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbw:function(a){var u,t=this
if(t.gdS()){u=t.d
if(typeof u!=="number")return u.C()
return P.eP(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd5())return 80
if(t.gd6())return 443
return 0},
ge4:function(a){return C.a.u(this.a,this.e,this.f)},
gcA:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.u(this.a,u+1,t):""},
gdP:function(){var u=this.r,t=this.a
return u<t.length?C.a.ad(t,u+1):""},
gcB:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.X
t=P.h
return new P.dK(P.m2(u.gcA(u)),[t,t])},
e6:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbD(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdS()?p.gbw(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a8(t,"/"))t="/"+t
r=P.la(o,0,0,b)
s=p.r
q=s<l.length?C.a.ad(l,s+1):o
return new P.bJ(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$il4&&this.a===b.i(0)},
i:function(a){return this.a},
$il4:1}
P.ji.prototype={}
W.p.prototype={}
W.eS.prototype={
gm:function(a){return a.length}}
W.eT.prototype={
i:function(a){return String(a)}}
W.eU.prototype={
i:function(a){return String(a)}}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bt.prototype={
cJ:function(a,b,c){if(c!=null)return a.getContext(b,P.p2(c))
return a.getContext(b)},
ee:function(a,b){return this.cJ(a,b,null)},
$ibt:1}
W.b5.prototype={
gm:function(a){return a.length}}
W.fd.prototype={
gm:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bY.prototype={
gm:function(a){return a.length}}
W.fe.prototype={}
W.ah.prototype={}
W.av.prototype={}
W.ff.prototype={
gm:function(a){return a.length}}
W.fg.prototype={
gm:function(a){return a.length}}
W.fj.prototype={
gm:function(a){return a.length}}
W.an.prototype={$ian:1}
W.fk.prototype={
i:function(a){return String(a)}}
W.d_.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a8,P.ab]]},
$iB:1,
$aB:function(){return[[P.a8,P.ab]]},
$ay:function(){return[[P.a8,P.ab]]},
$ii:1,
$ai:function(){return[[P.a8,P.ab]]},
$io:1,
$ao:function(){return[[P.a8,P.ab]]}}
W.d0.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaK(a))+" x "+H.e(this.gaE(a))},
w:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia8&&a.left===u.gbu(b)&&a.top===u.gbz(b)&&this.gaK(a)===u.gaK(b)&&this.gaE(a)===u.gaE(b)},
gJ:function(a){return W.m9(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaK(a)),C.d.gJ(this.gaE(a)))},
gdA:function(a){return a.bottom},
gaE:function(a){return a.height},
gbu:function(a){return a.left},
gcF:function(a){return a.right},
gbz:function(a){return a.top},
gaK:function(a){return a.width},
$ia8:1,
$aa8:function(){return[P.ab]}}
W.fl.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fm.prototype={
gm:function(a){return a.length}}
W.jg.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.ij(this)
return new J.a5(u,u.length)},
$aq:function(){return[W.S]},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$ao:function(){return[W.S]}}
W.S.prototype={
ghl:function(a){return new W.jj(a)},
gc8:function(a){return new W.jg(a,a.children)},
gdD:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.a8(u,t,s,r,[P.ab])},
i:function(a){return a.localName},
ak:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lD
if(u==null){u=H.b([],[W.aW])
t=new W.dk(u)
u.push(W.m8(null))
u.push(W.ma())
$.lD=t
d=t}else d=u
u=$.lC
if(u==null){u=new W.eD(d)
$.lC=u
c=u}else{u.a=d
c=u}}if($.aQ==null){u=document
t=u.implementation.createHTMLDocument("")
$.aQ=t
$.kS=t.createRange()
s=$.aQ.createElement("base")
s.href=u.baseURI
$.aQ.head.appendChild(s)}u=$.aQ
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aQ
if(!!this.$ibs)r=u.body
else{r=u.createElement(a.tagName)
$.aQ.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.O(C.U,a.tagName)){$.kS.selectNodeContents(r)
q=$.kS.createContextualFragment(b)}else{r.innerHTML=b
q=$.aQ.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aQ.body
if(r==null?u!=null:r!==u)J.lu(r)
c.cK(q)
document.adoptNode(q)
return q},
hs:function(a,b,c){return this.ak(a,b,c,null)},
eg:function(a,b){a.textContent=null
a.appendChild(this.ak(a,b,null,null))},
$iS:1,
ge8:function(a){return a.tagName}}
W.fq.prototype={
$1:function(a){return!!J.R(a).$iS}}
W.j.prototype={$ij:1}
W.f.prototype={
hg:function(a,b,c,d){if(c!=null)this.eE(a,b,c,!1)},
eE:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)}}
W.ao.prototype={$iao:1}
W.c0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ao]},
$iB:1,
$aB:function(){return[W.ao]},
$ay:function(){return[W.ao]},
$ii:1,
$ai:function(){return[W.ao]},
$io:1,
$ao:function(){return[W.ao]},
$ic0:1}
W.fw.prototype={
gm:function(a){return a.length}}
W.fA.prototype={
gm:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.fG.prototype={
gm:function(a){return a.length}}
W.c2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ay:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aS.prototype={$iaS:1,
gdE:function(a){return a.data}}
W.c3.prototype={$ic3:1}
W.by.prototype={$iby:1}
W.h_.prototype={
i:function(a){return String(a)}}
W.hl.prototype={
gm:function(a){return a.length}}
W.c9.prototype={$ic9:1}
W.hm.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.H(a,new W.hn(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hn.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ho.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.H(a,new W.hp(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hp.prototype={
$2:function(a,b){return this.a.push(a)}}
W.az.prototype={$iaz:1}
W.hq.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.az]},
$iB:1,
$aB:function(){return[W.az]},
$ay:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.aA.prototype={$iaA:1}
W.a3.prototype={
gaL:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lU("No elements"))
if(t>1)throw H.c(P.lU("More than one element"))
return u.firstChild},
aa:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d3(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.D]},
$ay:function(){return[W.D]},
$ai:function(){return[W.D]},
$ao:function(){return[W.D]}}
W.D.prototype={
i7:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ia:function(a,b){var u,t
try{u=a.parentNode
J.mY(u,b,a)}catch(t){H.af(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.el(a):u},
fX:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dj.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ay:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.aB.prototype={$iaB:1,
gm:function(a){return a.length}}
W.hG.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aB]},
$iB:1,
$aB:function(){return[W.aB]},
$ay:function(){return[W.aB]},
$ii:1,
$ai:function(){return[W.aB]},
$io:1,
$ao:function(){return[W.aB]}}
W.hR.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.H(a,new W.hS(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hS.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hU.prototype={
gm:function(a){return a.length}}
W.aD.prototype={$iaD:1}
W.i6.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aD]},
$iB:1,
$aB:function(){return[W.aD]},
$ay:function(){return[W.aD]},
$ii:1,
$ai:function(){return[W.aD]},
$io:1,
$ao:function(){return[W.aD]}}
W.aE.prototype={$iaE:1}
W.i7.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iB:1,
$aB:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.aF.prototype={$iaF:1,
gm:function(a){return a.length}}
W.ib.prototype={
h:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga4:function(a){var u=H.b([],[P.h])
this.H(a,new W.ic(u))
return u},
gm:function(a){return a.length},
$aa1:function(){return[P.h,P.h]},
$iT:1,
$aT:function(){return[P.h,P.h]}}
W.ic.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aq.prototype={$iaq:1}
W.dz.prototype={
ak:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=W.ne("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a3(t).aa(0,new W.a3(u))
return t}}
W.ig.prototype={
ak:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaL(u)
s.toString
u=new W.a3(s)
r=u.gaL(u)
t.toString
r.toString
new W.a3(t).aa(0,new W.a3(r))
return t}}
W.ih.prototype={
ak:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.ak(u.createElement("table"),b,c,d)
u.toString
u=new W.a3(u)
s=u.gaL(u)
t.toString
s.toString
new W.a3(t).aa(0,new W.a3(s))
return t}}
W.ck.prototype={$ick:1}
W.aG.prototype={$iaG:1}
W.ar.prototype={$iar:1}
W.ik.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ar]},
$iB:1,
$aB:function(){return[W.ar]},
$ay:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]}}
W.il.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aG]},
$iB:1,
$aB:function(){return[W.aG]},
$ay:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.ir.prototype={
gm:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.bD.prototype={$ibD:1}
W.iv.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aH]},
$iB:1,
$aB:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$io:1,
$ao:function(){return[W.aH]}}
W.iw.prototype={
gm:function(a){return a.length}}
W.bh.prototype={}
W.iS.prototype={
i:function(a){return String(a)}}
W.j9.prototype={
gm:function(a){return a.length}}
W.bl.prototype={
ghv:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghu:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibl:1}
W.ct.prototype={
fY:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
eR:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.I]},
$iB:1,
$aB:function(){return[W.I]},
$ay:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$io:1,
$ao:function(){return[W.I]}}
W.dV.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
w:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$ia8&&a.left===u.gbu(b)&&a.top===u.gbz(b)&&a.width===u.gaK(b)&&a.height===u.gaE(b)},
gJ:function(a){return W.m9(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaE:function(a){return a.height},
gaK:function(a){return a.width}}
W.jm.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aw]},
$iB:1,
$aB:function(){return[W.aw]},
$ay:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.ec.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ay:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$io:1,
$ao:function(){return[W.D]}}
W.jA.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iB:1,
$aB:function(){return[W.aF]},
$ay:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.jF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aq]},
$iB:1,
$aB:function(){return[W.aq]},
$ay:function(){return[W.aq]},
$ii:1,
$ai:function(){return[W.aq]},
$io:1,
$ao:function(){return[W.aq]}}
W.jf.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga4(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga4:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa1:function(){return[P.h,P.h]},
$aT:function(){return[P.h,P.h]}}
W.jj.prototype={
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga4(this).length}}
W.jk.prototype={}
W.jl.prototype={
$1:function(a){return this.a.$1(a)}}
W.cu.prototype={
ev:function(a){var u
if($.cv.ghO($.cv)){for(u=0;u<262;++u)$.cv.l(0,C.T[u],W.pc())
for(u=0;u<12;++u)$.cv.l(0,C.p[u],W.pd())}},
aS:function(a){return $.mU().O(0,W.bZ(a))},
at:function(a,b,c){var u=$.cv.h(0,H.e(W.bZ(a))+"::"+b)
if(u==null)u=$.cv.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaW:1}
W.O.prototype={
gS:function(a){return new W.d3(a,this.gm(a))}}
W.dk.prototype={
aS:function(a){return C.b.ds(this.a,new W.hy(a))},
at:function(a,b,c){return C.b.ds(this.a,new W.hx(a,b,c))},
$iaW:1}
W.hy.prototype={
$1:function(a){return a.aS(this.a)}}
W.hx.prototype={
$1:function(a){return a.at(this.a,this.b,this.c)}}
W.ek.prototype={
ey:function(a,b,c,d){var u,t,s
this.a.aa(0,c)
u=b.bC(0,new W.jx())
t=b.bC(0,new W.jy())
this.b.aa(0,u)
s=this.c
s.aa(0,C.w)
s.aa(0,t)},
aS:function(a){return this.a.O(0,W.bZ(a))},
at:function(a,b,c){var u=this,t=W.bZ(a),s=u.c
if(s.O(0,H.e(t)+"::"+b))return u.d.hj(c)
else if(s.O(0,"*::"+b))return u.d.hj(c)
else{s=u.b
if(s.O(0,H.e(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.e(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$iaW:1}
W.jx.prototype={
$1:function(a){return!C.b.O(C.p,a)}}
W.jy.prototype={
$1:function(a){return C.b.O(C.p,a)}}
W.jI.prototype={
at:function(a,b,c){if(this.eo(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.jJ.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jG.prototype={
aS:function(a){var u=J.R(a)
if(!!u.$ich)return!1
u=!!u.$ik
if(u&&W.bZ(a)==="foreignObject")return!1
if(u)return!0
return!1},
at:function(a,b,c){if(b==="is"||C.a.a8(b,"on"))return!1
return this.aS(a)},
$iaW:1}
W.d3.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bT(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.aW.prototype={}
W.jv.prototype={}
W.eD.prototype={
cK:function(a){new W.jT(this).$2(a,null)},
b2:function(a,b){if(b==null)J.lu(a)
else b.removeChild(a)},
h2:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.n1(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.af(r)}t="element unprintable"
try{t=J.a4(a)}catch(r){H.af(r)}try{s=W.bZ(a)
this.h1(a,b,p,t,s,o,n)}catch(r){if(H.af(r) instanceof P.al)throw r
else{this.b2(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b2(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aS(a)){p.b2(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.at(a,"is",g)){p.b2(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga4(f)
t=H.b(u.slice(0),[H.aL(u,0)])
for(s=f.ga4(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.at(a,J.n4(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$ick)p.cK(a.content)}}
W.jT.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h2(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b2(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.af(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dU.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.cA.prototype={}
W.cB.prototype={}
W.el.prototype={}
W.em.prototype={}
W.eq.prototype={}
W.et.prototype={}
W.eu.prototype={}
W.cC.prototype={}
W.cD.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eJ.prototype={}
W.eK.prototype={}
W.eL.prototype={}
W.eM.prototype={}
W.eN.prototype={}
P.jB.prototype={
cm:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bB:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iac)return new Date(a.a)
if(!!u.$inJ)throw H.c(P.iJ("structured clone of RegExp"))
if(!!u.$iao)return a
if(!!u.$ibr)return a
if(!!u.$ic0)return a
if(!!u.$iaS)return a
if(!!u.$icb||!!u.$ibf||!!u.$ic9)return a
if(!!u.$iT){t=p.cm(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.H(a,new P.jD(o,p))
return o.a}if(!!u.$io){t=p.cm(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hr(a,t)}if(!!u.$inl){t=p.cm(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hJ(a,new P.jE(o,p))
return o.b}throw H.c(P.iJ("structured clone of other type"))},
hr:function(a,b){var u,t=J.bn(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.t(s)
u=0
for(;u<s;++u){q=this.bB(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jD.prototype={
$2:function(a,b){this.a.a[a]=this.b.bB(b)},
$S:3}
P.jE.prototype={
$2:function(a,b){this.a.b[a]=this.b.bB(b)},
$S:3}
P.eA.prototype={$iaS:1,
gdE:function(a){return this.a}}
P.k3.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jC.prototype={
hJ:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fx.prototype={
gbl:function(){var u=this.b,t=H.lh(u,"y",0)
return new H.c7(new H.cs(u,new P.fy(),[t]),new P.fz(),[t,W.S])},
l:function(a,b,c){var u=this.gbl()
J.n2(u.b.$1(J.eR(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.ag(this.gbl().a)},
h:function(a,b){var u=this.gbl()
return u.b.$1(J.eR(u.a,b))},
gS:function(a){var u=P.l0(this.gbl(),!1,W.S)
return new J.a5(u,u.length)},
$aq:function(){return[W.S]},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$ao:function(){return[W.S]}}
P.fy.prototype={
$1:function(a){return!!J.R(a).$iS}}
P.fz.prototype={
$1:function(a){return H.m(a,"$iS")}}
P.jr.prototype={
gcF:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
return u+t},
gdA:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.C()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
w:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$ia8){t=q.a
if(t==u.gbu(b)){s=q.b
if(s==u.gbz(b)){r=q.c
if(typeof t!=="number")return t.C()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gcF(b)){t=q.d
if(typeof s!=="number")return s.C()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gdA(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cO(t),r=u.b,q=J.cO(r),p=u.c
if(typeof t!=="number")return t.C()
if(typeof p!=="number")return H.t(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.C()
if(typeof t!=="number")return H.t(t)
t=C.c.gJ(r+t)
return P.o9(P.jo(P.jo(P.jo(P.jo(0,s),q),p),t))}}
P.a8.prototype={
gbu:function(a){return this.a},
gbz:function(a){return this.b},
gaK:function(a){return this.c},
gaE:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.fT.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aT]},
$ay:function(){return[P.aT]},
$ii:1,
$ai:function(){return[P.aT]},
$io:1,
$ao:function(){return[P.aT]}}
P.aX.prototype={$iaX:1}
P.hB.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aX]},
$ay:function(){return[P.aX]},
$ii:1,
$ai:function(){return[P.aX]},
$io:1,
$ao:function(){return[P.aX]}}
P.hJ.prototype={
gm:function(a){return a.length}}
P.ch.prototype={$ich:1}
P.ie.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.k.prototype={
gc8:function(a){return new P.fx(a,new W.a3(a))},
ak:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aW])
p.push(W.m8(null))
p.push(W.ma())
p.push(new W.jG())
c=new W.eD(new W.dk(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hs(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a3(s)
q=p.gaL(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.b_.prototype={$ib_:1}
P.ix.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b_]},
$ay:function(){return[P.b_]},
$ii:1,
$ai:function(){return[P.b_]},
$io:1,
$ao:function(){return[P.b_]}}
P.e4.prototype={}
P.e5.prototype={}
P.ef.prototype={}
P.eg.prototype={}
P.er.prototype={}
P.es.prototype={}
P.ey.prototype={}
P.ez.prototype={}
P.bE.prototype={$iq:1,
$aq:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$io:1,
$ao:function(){return[P.w]}}
P.eW.prototype={
gm:function(a){return a.length}}
P.eX.prototype={
h:function(a,b){return P.b1(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b1(u.value[1]))}},
ga4:function(a){var u=H.b([],[P.h])
this.H(a,new P.eY(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa1:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
P.eY.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eZ.prototype={
gm:function(a){return a.length}}
P.bq.prototype={}
P.hC.prototype={
gm:function(a){return a.length}}
P.dT.prototype={}
P.dr.prototype={
ih:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaS)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.p3(g))
return}if(!!t.$ic3)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cP("Incorrect number or type of arguments"))}}
P.i9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.P(b,a,null,null,null))
return P.b1(a.item(b))},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.T,,,]]},
$ay:function(){return[[P.T,,,]]},
$ii:1,
$ai:function(){return[[P.T,,,]]},
$io:1,
$ao:function(){return[[P.T,,,]]}}
P.en.prototype={}
P.eo.prototype={}
K.aN.prototype={
aF:function(a,b){return!0},
i:function(a){return"all"}}
K.d4.prototype={
aF:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)if(u[s].aF(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.be.prototype={}
K.a7.prototype={
aF:function(a,b){return!this.ek(0,b)},
i:function(a){return"!["+this.cO(0)+"]"}}
K.hM.prototype={
aF:function(a,b){if(typeof b!=="number")return H.t(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bB(this.a),t=H.bB(this.b)
return u+".."+t}}
K.hV.prototype={
es:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.x("May not create a Set with zero characters."))
u=P.w
t=new H.J([u,P.aK])
for(s=new H.bd(a,a.gm(a));s.v();)t.l(0,s.d,!0)
r=P.l0(t.ga4(t),!0,u)
C.b.ei(r)
this.a=r},
aF:function(a,b){return C.b.O(this.a,b)},
i:function(a){return P.cj(this.a,0,null)}}
L.dx.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dH(this.a.k(0,b))
r.a=H.b([],[K.be])
r.c=!1
this.c.push(r)
return r},
hE:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.aF(0,a))return r}return},
i:function(a){return this.b},
dh:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.O(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga4(n),n=n.gS(n);n.v();){t=n.gE(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.O(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.l)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dE.prototype={
i:function(a){var u=H.ln(this.b,"\n","\\n"),t=H.ln(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dF.prototype={
aH:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.l)(c),++t){s=c[t]
this.c.l(0,s,b)}},
i:function(a){return this.b}}
L.is.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dx(this,b)
u.c=H.b([],[L.dH])
this.a.l(0,b,u)}return u},
T:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dF(a)
u=P.h
t.c=new H.J([u,u])
this.b.l(0,a,t)}return t},
cG:function(a){return this.im(a)},
im:function(a){var u=this
return P.ow(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cG(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cC(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.hE(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cj(d,0,null)
throw H.c(P.x("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.z("removeRange"))
P.aZ(0,m,d.length)
d.splice(0,m-0)
C.b.aa(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.O(0,p.a)?7:8
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
if(g.d!=null){j=P.cj(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dE(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.O(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.o7()
case 1:return P.o8(q)}}},L.dE)},
i:function(a){var u,t=new P.U(""),s=this.d
if(s!=null)t.a=s.dh()+"\n"
for(s=this.a,s=s.gio(s),s=s.gS(s);s.v();){u=s.gE(s)
if(u!=this.d)t.a+=u.dh()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dH.prototype={
i:function(a){return this.b.b+": "+this.cO(0)}}
O.aO.prototype={
bj:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cL:function(a,b,c){this.b=b
this.c=a},
aX:function(a,b){return this.cL(a,null,b)},
d9:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cS:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a5(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.lh(s,"aO",0)]
if(s.d9(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cS(t,H.b([b],r))}},
aa:function(a,b){var u,t
if(this.d9(b)){u=this.a
t=u.length
C.b.aa(u,b)
this.cS(t,b)}},
$ii:1}
O.c8.prototype={
gm:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.F():u},
aM:function(){var u=this.b
if(u!=null)u.F(null)},
ga5:function(a){var u=this.a
if(u.length>0)return C.b.gav(u)
else return V.bz()},
by:function(a){var u=this.a
if(a==null)u.push(V.bz())
else u.push(a)
this.aM()},
aG:function(){var u=this.a
if(u.length>0){u.pop()
this.aM()}}}
E.f2.prototype={}
E.aR.prototype={
sab:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().M(0,s.ge1())
u=s.c
if(u!=null)u.gq().n(0,s.ge1())
t=new D.C("shape",r,s.c)
t.b=!0
s.bv(t)}},
ap:function(a,b){var u
for(u=this.y.a,u=new J.a5(u,u.length);u.v();)u.d.ap(0,b)},
ai:function(a){var u,t=this,s=a.dx
s.a.push(s.ga5(s))
s.aM()
a.cz(t.f)
s=a.dy
u=(s&&C.b).gav(s)
if(u!=null&&t.d!=null)u.e5(a,t)
for(s=t.y.a,s=new J.a5(s,s.length);s.v();)s.d.ai(a)
a.cw()
a.dx.aG()},
bv:function(a){var u=this.z
if(u!=null)u.F(a)},
a6:function(){return this.bv(null)},
e2:function(a){this.e=null
this.bv(a)},
hY:function(){return this.e2(null)},
e0:function(a){this.bv(a)},
hV:function(){return this.e0(null)},
hU:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ge_(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a6()},
hX:function(a,b){var u,t
for(u=b.gS(b),t=this.ge_();u.v();)u.gE(u).gq().M(0,t)
this.a6()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hN.prototype={
er:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ac(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c8()
t=[V.aU]
u.a=H.b([],t)
u.gq().n(0,new E.hO(s))
s.cy=u
u=new O.c8()
u.a=H.b([],t)
u.gq().n(0,new E.hP(s))
s.db=u
u=new O.c8()
u.a=H.b([],t)
u.gq().n(0,new E.hQ(s))
s.dx=u
u=H.b([],[O.dA])
s.dy=u
u.push(null)
s.fr=new H.J([P.h,A.ds])},
gi6:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga5(s)
u=t.db
u=t.z=s.A(0,u.ga5(u))
s=u}return s},
cz:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gav(u):a)},
cw:function(){var u=this.dy
if(u.length>1)u.pop()},
dr:function(a){var u=a.b
if(u.length===0)throw H.c(P.x("May not cache a shader with no name."))
if(this.fr.c9(0,u))throw H.c(P.x('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.hO.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hP.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hQ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dC.prototype={
cV:function(a){this.e7()},
cU:function(){return this.cV(null)},
ghK:function(){var u,t=this,s=Date.now(),r=C.c.a9(P.lB(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ac(s,!1)
return u/r},
dc:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.A()
if(typeof r!=="number")return H.t(r)
u=C.d.cn(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.A()
t=C.d.cn(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lX(C.n,s.gib())}},
e7:function(){if(!this.cx){this.cx=!0
var u=window
C.D.eR(u)
C.D.fY(u,W.ml(new E.iq(this),P.ab))}},
i9:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.dc()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ac(r,!1)
s.y=P.lB(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.aM()
r=s.db
C.b.sm(r.a,0)
r.aM()
r=s.dx
C.b.sm(r.a,0)
r.aM()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.ai(p.e)}s=p.Q
if(s!=null)s.F(null)}catch(q){u=H.af(q)
t=H.li(q)
P.lm("Error: "+H.e(u))
P.lm("Stack: "+H.e(t))
throw H.c(u)}}}
E.iq.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.i9()}}}
Z.dQ.prototype={}
Z.cS.prototype={
a0:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.af(s)
t=P.x('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dR.prototype={}
Z.bW.prototype={
aD:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a0:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a0(a)},
aJ:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ai:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a4(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bx.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cg(this.c))+"'")+"]"}}
Z.bk.prototype={
gcN:function(a){var u=this.a,t=(u&$.at().a)!==0?3:0
if((u&$.b4().a)!==0)t+=3
if((u&$.b3().a)!==0)t+=3
if((u&$.bo().a)!==0)t+=2
if((u&$.bp().a)!==0)t+=3
if((u&$.cL().a)!==0)t+=3
if((u&$.cM().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.b2().a)!==0?t+4:t},
hk:function(a){var u,t=$.at(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bo()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cL()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cM()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b2()
if((s&t.a)!==0)if(u===a)return t
return $.mS()},
w:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bk))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.at().a)!==0)u.push("Pos")
if((t&$.b4().a)!==0)u.push("Norm")
if((t&$.b3().a)!==0)u.push("Binm")
if((t&$.bo().a)!==0)u.push("Txt2D")
if((t&$.bp().a)!==0)u.push("TxtCube")
if((t&$.cL().a)!==0)u.push("Clr3")
if((t&$.cM().a)!==0)u.push("Clr4")
if((t&$.bS().a)!==0)u.push("Weight")
if((t&$.b2().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f5.prototype={}
D.bw.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.O(s,b)
if(s===!0){s=t.a
u=(s&&C.b).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.O(s,b)
if(s===!0){s=t.b
u=(s&&C.b).M(s,b)||u}return u},
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
return!0}if(!t)C.b.H(P.l0(u,!0,{func:1,ret:-1,args:[D.X]}),new D.ft(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.H(u,new D.fu(q))}return!0},
hA:function(){return this.F(null)},
aw:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.F(u)}}}}
D.ft.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fu.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.b8.prototype={}
D.b9.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cT.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cT))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.d9.prototype={
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.w(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fS.prototype={
i2:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
hZ:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.dc.prototype={}
X.h0.prototype={
b0:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.A()
u=b.b
t=q.ch
if(typeof u!=="number")return u.A()
s=new V.a_(o.a+n*m,o.b+u*t)
t=q.a.gaT()
r=new X.aV(a,V.aY(),q.x,t,s)
r.b=!0
q.z=new P.ac(p,!1)
q.x=s
return r},
cv:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ef()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.b0(a,b))
return!0},
i3:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaT()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.A()
q=a.b
p=o.cy
if(typeof q!=="number")return q.A()
t=new X.ca(new V.K(s*r,q*p),u,t)
t.b=!0
n.F(t)
return!0},
fq:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dc(c,r.a.gaT(),b)
s.b=!0
t.F(s)
r.y=new P.ac(u,!1)
r.x=V.aY()}}
X.ai.prototype={
w:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ai))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aV.prototype={}
X.hr.prototype={
bK:function(a,b,c){var u=this,t=new P.ac(Date.now(),!1),s=u.a.gaT(),r=new X.aV(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cv:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.F(this.bK(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ef()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.F(u.bK(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.F(this.bK(a,b,!1))
return!0},
i4:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaT()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.A()
r=a.b
q=p.ch
if(typeof r!=="number")return r.A()
u=new X.ca(new V.K(t*s,r*q),u,b)
u.b=!0
o.F(u)
return!0},
gdG:function(){var u=this.b
return u==null?this.b=D.F():u},
gcH:function(){var u=this.c
return u==null?this.c=D.F():u},
gdZ:function(){var u=this.d
return u==null?this.d=D.F():u}}
X.ca.prototype={}
X.hI.prototype={}
X.dG.prototype={}
X.iu.prototype={
b0:function(a,b){var u=this,t=new P.ac(Date.now(),!1),s=a.length>0?a[0]:V.aY(),r=u.a.gaT(),q=new X.dG(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i1:function(a){var u=this.b
if(u==null)return!1
u.F(this.b0(a,!0))
return!0},
i_:function(a){var u=this.c
if(u==null)return!1
u.F(this.b0(a,!0))
return!0},
i0:function(a){var u=this.d
if(u==null)return!1
u.F(this.b0(a,!1))
return!0}}
X.dL.prototype={
gaT:function(){var u=this.a,t=C.i.gdD(u).c
t.toString
u=C.i.gdD(u).d
u.toString
return V.lS(0,0,t,u)},
d0:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.d9(u,new X.ai(t,a.altKey,a.shiftKey))},
aQ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
c0:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ai(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.a_(s-q,r-u)},
b1:function(a){return new V.K(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a_])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
q=C.d.ao(r.pageX)
C.d.ao(r.pageY)
p=o.left
C.d.ao(r.pageX)
n.push(new V.a_(q-p,C.d.ao(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cT(u,new X.ai(t,a.altKey,a.shiftKey))},
bL:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fk:function(a){this.f=!0},
f8:function(a){this.f=!1},
fe:function(a){if(this.f&&this.bL(a))a.preventDefault()},
fo:function(a){var u
if(!this.f)return
u=this.d0(a)
this.b.i2(u)},
fm:function(a){var u
if(!this.f)return
u=this.d0(a)
this.b.hZ(u)},
ft:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aQ(a)
if(r.x){u=r.ay(a)
t=r.b1(a)
if(r.d.cv(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.cv(u,s))a.preventDefault()},
fz:function(a){var u,t,s,r=this
r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b1(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bc(u,s))a.preventDefault()},
fi:function(a){var u,t,s,r=this
if(!r.bL(a)){r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b1(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bc(u,s))a.preventDefault()}},
fv:function(a){var u,t,s,r=this
r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b1(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bb(u,s))a.preventDefault()},
fg:function(a){var u,t,s,r=this
if(!r.bL(a)){r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b1(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bb(u,s))a.preventDefault()}},
fB:function(a){var u,t,s=this
s.aQ(a)
u=new V.K((a&&C.C).ghu(a),C.C.ghv(a)).t(0,180)
if(s.x){if(s.d.i3(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.i4(u,t))a.preventDefault()},
fD:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fq(u,t,r)}},
fT:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c0(a)
u=t.bW(a)
if(t.e.i1(u))a.preventDefault()},
fP:function(a){var u
this.c0(a)
u=this.bW(a)
if(this.e.i_(u))a.preventDefault()},
fR:function(a){var u
this.c0(a)
u=this.bW(a)
if(this.e.i0(u))a.preventDefault()}}
D.f_.prototype={$ia6:1}
D.bu.prototype={
ax:function(a){var u=this.r
if(u!=null)u.F(a)},
ex:function(){return this.ax(null)},
$ia6:1}
D.a6.prototype={}
D.da.prototype={
ax:function(a){var u=this.y
if(u!=null)u.F(a)},
d8:function(a){var u=this.z
if(u!=null)u.F(a)},
fp:function(){return this.d8(null)},
fF:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){s=a[t]
if(s==null||this.eL(s))return!1}return!0},
f2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd7(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q instanceof D.bu)this.f.push(q)
p=q.r
if(p==null){p=new D.bw()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.b8()
u.b=!0
this.ax(u)},
fJ:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gd7();u.v();){s=u.gE(u)
C.b.M(this.e,s)
s.gq().M(0,t)}u=new D.b9()
u.b=!0
this.ax(u)},
eL:function(a){var u=C.b.O(this.f,a)
return u},
$ai:function(){return[D.a6]},
$aaO:function(){return[D.a6]}}
D.hH.prototype={$ia6:1}
D.i8.prototype={$ia6:1}
V.r.prototype={
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.r))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.am.prototype={
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.am))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.fs.prototype={}
V.df.prototype={
af:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.N])
return t},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.df))return!1
u=b.a
t=$.E().a
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
i:function(a){var u,t,s,r,q=this,p=[P.N],o=V.bQ(H.b([q.a,q.d,q.r],p),3,0),n=V.bQ(H.b([q.b,q.e,q.x],p),3,0),m=V.bQ(H.b([q.c,q.f,q.y],p),3,0)
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
V.aU.prototype={
af:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.N])
return t},
cp:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.E().a)return V.bz()
u=1/b1
t=-n
s=-a0
return V.ay((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
A:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.ay(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bA:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bg:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.M(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
u=b.a
t=$.E().a
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
I:function(a){var u,t,s,r,q,p=this,o=[P.N],n=V.bQ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bQ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bQ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bQ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.I("")}}
V.a_.prototype={
K:function(a,b){return new V.a_(this.a-b.a,this.b-b.b)},
w:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a_))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.M.prototype={
C:function(a,b){return new V.M(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.M(this.a-b.a,this.b-b.b,this.c-b.c)},
A:function(a,b){return new V.M(this.a*b,this.b*b,this.c*b)},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.M))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
V.aj.prototype={
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aj))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.dq.prototype={
gah:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dq))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.L(u.a,3,0)+", "+V.L(u.b,3,0)+", "+V.L(u.c,3,0)+", "+V.L(u.d,3,0)+"]"}}
V.K.prototype={
cq:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.A()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.A()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
A:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.A()
u=this.b
if(typeof u!=="number")return u.A()
return new V.K(t*b,u*b)},
t:function(a,b){var u,t
if(Math.abs(b-0)<$.E().a){u=$.m3
return u==null?$.m3=new V.K(0,0):u}u=this.a
if(typeof u!=="number")return u.t()
t=this.b
if(typeof t!=="number")return t.t()
return new V.K(u/b,t/b)},
w:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=this.a
s=$.E()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+"]"}}
V.A.prototype={
cq:function(a){return Math.sqrt(this.D(this))},
D:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cr:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
C:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.A(-this.a,-this.b,-this.c)},
A:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
t:function(a,b){if(Math.abs(b-0)<$.E().a)return V.cr()
return new V.A(this.a/b,this.b/b,this.c/b)},
dY:function(){var u=$.E().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
w:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.A))return!1
u=b.a
t=$.E().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.L(this.a,3,0)+", "+V.L(this.b,3,0)+", "+V.L(this.c,3,0)+"]"}}
U.f8.prototype={
bF:function(a){var u=V.pt(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.F():u},
U:function(a){var u=this.y
if(u!=null)u.F(a)},
scI:function(a,b){},
scs:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.E().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bF(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.U(s)}},
scu:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.E().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bF(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.U(s)}},
sa1:function(a,b){var u,t=this
b=t.bF(b)
u=t.d
if(!(Math.abs(u-b)<$.E().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.U(u)}},
sct:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.E().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.U(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.E().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.U(t)}},
scc:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.E().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.U(u)}},
ap:function(a,b){var u,t,s,r=this,q=r.f,p=$.E().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa1(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.E().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cW.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.F():u},
aW:function(a,b,c){return this.a},
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cW))return!1
return J.H(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.c1.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.F():u},
U:function(a){var u=this.e
if(u!=null)u.F(a)},
ae:function(){return this.U(null)},
f0:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaN(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b8()
u.b=!0
this.U(u)},
fH:function(a,b){var u,t
for(u=b.gS(b),t=this.gaN();u.v();)u.gE(u).gq().M(0,t)
u=new D.b9()
u.b=!0
this.U(u)},
aW:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a5(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.aW(0,b,c)
if(t!=null)u=u==null?t:t.A(0,u)}}s.f=u==null?V.bz():u
r=s.e
if(r!=null)r.aw(0)}return s.f},
w:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c1))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.H(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ad]},
$aaO:function(){return[U.ad]},
$iad:1}
U.ad.prototype={}
U.dM.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.F():u},
U:function(a){var u=this.cy
if(u!=null)u.F(a)},
ae:function(){return this.U(null)},
b3:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdG().n(0,u.gbM())
u.a.c.gdZ().n(0,u.gbO())
u.a.c.gcH().n(0,u.gbQ())
return!0},
bN:function(a){var u=this
if(!J.H(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaV")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.D(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.K(t.a,t.b).A(0,2).t(0,u.gah())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.A()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.K(s.a,s.b).A(0,2).t(0,u.gah())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sa1(0,-q*p+o)
n.b.sW(0)
t=t.K(0,a.z)
n.Q=new V.K(t.a,t.b).A(0,2).t(0,u.gah())}n.ae()},
bR:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.D(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.A()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sW(t*10*s)
r.ae()}},
aW:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.ay(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iad:1}
U.dN.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.F():u},
U:function(a){var u=this.fx
if(u!=null)u.F(a)},
ae:function(){return this.U(null)},
b3:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdG().n(0,s.gbM())
s.a.c.gdZ().n(0,s.gbO())
s.a.c.gcH().n(0,s.gbQ())
u=s.a.d
t=u.f
u=t==null?u.f=D.F():t
u.n(0,s.geT())
u=s.a.d
t=u.d
u=t==null?u.d=D.F():t
u.n(0,s.geV())
u=s.a.e
t=u.b
u=t==null?u.b=D.F():t
u.n(0,s.ghd())
u=s.a.e
t=u.d
u=t==null?u.d=D.F():t
u.n(0,s.ghb())
u=s.a.e
t=u.c
u=t==null?u.c=D.F():t
u.n(0,s.gh9())
return!0},
as:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.K(u,t)},
bN:function(a){var u=this
H.m(a,"$iaV")
if(!J.H(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bP:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaV")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.as(new V.K(t.a,t.b).A(0,2).t(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.as(new V.K(s.a,s.b).A(0,2).t(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.as(new V.K(t.a,t.b).A(0,2).t(0,u.gah()))}n.ae()},
bR:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.ae()}},
eU:function(a){var u=this
if(H.m(a,"$idc").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
eW:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$iaV")
if(!J.H(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.as(new V.K(s.a,s.b).A(0,2).t(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.as(new V.K(t.a,t.b).A(0,2).t(0,u.gah()))
n.ae()},
he:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hc:function(a){var u,t,s,r,q,p,o,n=this
H.m(a,"$idG")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.as(new V.K(t.a,t.b).A(0,2).t(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.as(new V.K(s.a,s.b).A(0,2).t(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sa1(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sa1(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.as(new V.K(t.a,t.b).A(0,2).t(0,u.gah()))}n.ae()},
ha:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sW(-t*10*u)
r.ae()}},
aW:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.ap(0,u)
r.b.ap(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.ay(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.A(0,V.ay(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iad:1}
U.dO.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.F():u},
U:function(a){var u=this.r
if(u!=null)u.F(a)},
b3:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.F():t
t=r.geY()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.F():s).n(0,t)
return!0},
eZ:function(a){var u,t,s,r,q=this
if(!J.H(q.b,q.a.b.c))return
H.m(a,"$ica")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.A()
r=u+t*s
if(u!==r){q.d=r
u=new D.C("zoom",u,r)
u.b=!0
q.U(u)}},
aW:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.ay(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iad:1}
M.cV.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.F():u},
a_:function(a){var u=this.r
if(u!=null)u.F(a)},
b_:function(){return this.a_(null)},
fL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b8()
u.b=!0
this.a_(u)},
fN:function(a,b){var u,t
for(u=b.gS(b),t=this.gZ();u.v();)u.gE(u).gq().M(0,t)
u=new D.b9()
u.b=!0
this.a_(u)},
ai:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a5(u,u.length);u.v();){t=u.d
if(t!=null)t.ai(a)}s.f=!1},
$ai:function(){return[M.ap]},
$aaO:function(){return[M.ap]},
$iap:1}
M.cX.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.F():u},
a_:function(a){var u=this.r
if(u!=null)u.F(a)},
b_:function(){return this.a_(null)},
sb4:function(a){var u,t,s=this
if(a==null)a=new X.fJ()
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gZ())
t=s.b
s.b=a
a.gq().n(0,s.gZ())
u=new D.C("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbd:function(a,b){var u,t,s=this
if(b==null)b=X.kU(null)
u=s.c
if(u!==b){if(u!=null)u.gq().M(0,s.gZ())
t=s.c
s.c=b
b.gq().n(0,s.gZ())
u=new D.C("target",t,s.c)
u.b=!0
s.a_(u)}},
sbe:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.gZ())
s=new D.C("technique",u,t.d)
s.b=!0
t.a_(s)}},
ai:function(a){var u=this
a.cz(u.d)
u.c.a0(a)
u.b.a0(a)
u.e.ap(0,a)
u.e.ai(a)
u.b.aJ(a)
u.c.toString
a.cw()},
$iap:1}
M.d1.prototype={
a_:function(a){var u=this.y
if(u!=null)u.F(a)},
b_:function(){return this.a_(null)},
fa:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.l)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bw()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.b8()
u.b=!0
this.a_(u)},
fc:function(a,b){var u,t
for(u=b.gS(b),t=this.gZ();u.v();)u.gE(u).gq().M(0,t)
u=new D.b9()
u.b=!0
this.a_(u)},
sb4:function(a){var u,t,s=this
if(a==null)a=X.lK(null)
u=s.b
if(u!==a){if(u!=null)u.gq().M(0,s.gZ())
t=s.b
s.b=a
a.gq().n(0,s.gZ())
u=new D.C("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbd:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().M(0,t.gZ())
u=t.c
t.c=b
b.gq().n(0,t.gZ())
s=new D.C("target",u,t.c)
s.b=!0
t.a_(s)}},
sbe:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.gZ())
s=new D.C("technique",u,t.d)
s.b=!0
t.a_(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.F():u},
ai:function(a){var u,t=this
a.cz(t.d)
t.c.a0(a)
t.b.a0(a)
u=t.d
if(u!=null)u.ap(0,a)
for(u=t.e.a,u=new J.a5(u,u.length);u.v();)u.d.ap(0,a)
for(u=t.e.a,u=new J.a5(u,u.length);u.v();)u.d.ai(a)
t.b.toString
a.cy.aG()
a.db.aG()
t.c.toString
a.cw()},
$iap:1}
M.ap.prototype={}
A.cQ.prototype={}
A.eV.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hB:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Z.prototype={
gaq:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
w:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Z))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.h6.prototype={
eq:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.U("")
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
A.oL(c0,u)
A.oN(c0,u)
A.oM(c0,u)
A.oP(c0,u)
A.oQ(c0,u)
A.oO(c0,u)
A.oR(c0,u)
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
b5.dV(0,s.charCodeAt(0)==0?s:s,A.oK(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.m(b5.y.Y(0,"invViewMat"),"$ia9")
if(t)b5.dy=H.m(b5.y.Y(0,"objMat"),"$ia9")
if(r)b5.fr=H.m(b5.y.Y(0,"viewObjMat"),"$ia9")
b5.fy=H.m(b5.y.Y(0,"projViewObjMat"),"$ia9")
if(c0.go)b5.fx=H.m(b5.y.Y(0,"viewMat"),"$ia9")
if(c0.x1)b5.k1=H.m(b5.y.Y(0,"txt2DMat"),"$ico")
if(c0.x2)b5.k2=H.m(b5.y.Y(0,"txtCubeMat"),"$ia9")
if(c0.y1)b5.k3=H.m(b5.y.Y(0,"colorMat"),"$ia9")
b5.r1=H.b([],[A.a9])
t=c0.bq
if(t>0){b5.k4=b5.y.Y(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.u(P.x(b7+q+b8))
s.push(H.m(m,"$ia9"))}}if(c0.a.a)b5.r2=H.m(b5.y.Y(0,"emissionClr"),"$iG")
if(c0.b.a)b5.x1=H.m(b5.y.Y(0,"ambientClr"),"$iG")
if(c0.c.a)b5.y2=H.m(b5.y.Y(0,"diffuseClr"),"$iG")
if(c0.d.a)b5.br=H.m(b5.y.Y(0,"invDiffuseClr"),"$iG")
t=c0.e.a
if(!t)s=!1
else s=!0
if(s){b5.dJ=H.m(b5.y.Y(0,"shininess"),"$iV")
if(t)b5.dI=H.m(b5.y.Y(0,"specularClr"),"$iG")}if(c0.db){b5.dK=H.m(b5.y.Y(0,"envSampler"),"$ibj")
if(c0.r.a)b5.dL=H.m(b5.y.Y(0,"reflectClr"),"$iG")
t=c0.x.a
if(!t)s=!1
else s=!0
if(s){b5.dM=H.m(b5.y.Y(0,"refraction"),"$iV")
if(t)b5.dN=H.m(b5.y.Y(0,"refractClr"),"$iG")}}if(c0.y.a)b5.dO=H.m(b5.y.Y(0,"alpha"),"$iV")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.cd=new H.J([r,A.bi])
b5.ce=new H.J([r,[P.o,A.cm]])
for(r=[A.cm],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
H.m(m,"$iG")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.u(P.x(b7+o+b8))
H.m(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.u(P.x(b7+o+b8))
H.m(f,"$iG")
if(typeof j!=="number")return j.ag()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.m(e,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.u(P.x(b7+o+b8))
H.m(d,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.u(P.x(b7+o+b8))
H.m(c,"$iV")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cm(m,g,f,a0,a,b))}b5.ce.l(0,j,h)
q=b5.cd
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.l(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.cf=new H.J([r,A.bi])
b5.cg=new H.J([r,[P.o,A.cn]])
for(r=[A.cn],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ag()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.u(P.x(b7+a1+b8))
H.m(m,"$iG")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.u(P.x(b7+a1+b8))
H.m(g,"$iG")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.u(P.x(b7+a1+b8))
H.m(f,"$iG")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.u(P.x(b7+a1+b8))
H.m(m,"$iG")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.u(P.x(b7+a1+b8))
H.m(g,"$iG")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.u(P.x(b7+o+b8))
H.m(f,"$ibF")
a5=f}else a5=b6
h.push(new A.cn(a4,a3,a2,m,g,a5))}b5.cg.l(0,j,h)
q=b5.cf
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.l(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.ci=new H.J([r,A.bi])
b5.cj=new H.J([r,[P.o,A.cp]])
for(r=[A.cp],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
H.m(m,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.u(P.x(b7+o+b8))
H.m(g,"$iG")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.u(P.x(b7+o+b8))
H.m(f,"$iG")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.m(e,"$ico")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.m(e,"$ibj")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.m(e,"$ibj")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.u(P.x(b7+o+b8))
H.m(d,"$icl")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.m(e,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.u(P.x(b7+o+b8))
H.m(d,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.u(P.x(b7+o+b8))
H.m(c,"$iV")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cp(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.cj.l(0,j,h)
q=b5.ci
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.l(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.ck=new H.J([r,A.bi])
b5.cl=new H.J([r,[P.o,A.cq]])
for(r=[A.cq],l=0;l<t.length;t.length===s||(0,H.l)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
H.m(m,"$iG")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.u(P.x(b7+o+b8))
H.m(g,"$iG")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.u(P.x(b7+o+b8))
H.m(f,"$iG")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.u(P.x(b7+o+b8))
H.m(e,"$iG")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.u(P.x(b7+o+b8))
H.m(d,"$iG")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.u(P.x(b7+o+b8))
H.m(c,"$iG")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.u(P.x(b7+o+b8))
H.m(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.u(P.x(b7+o+b8))
H.m(b0,"$iV")
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
if(d==null)H.u(P.x(b7+a1+b8))
H.m(d,"$icl")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.u(P.x(b7+a1+b8))
H.m(d,"$iV")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.u(P.x(b7+a1+b8))
H.m(c,"$iV")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.u(P.x(b7+a1+b8))
H.m(d,"$iV")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.u(P.x(b7+a1+b8))
H.m(c,"$iV")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.u(P.x(b7+a1+b8))
H.m(a9,"$iV")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.u(P.x(b7+a1+b8))
H.m(d,"$ibF")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.u(P.x(b7+o+b8))
H.m(d,"$ibF")
a7=d}else a7=b6
h.push(new A.cq(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cl.l(0,j,h)
q=b5.ck
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.u(P.x(b7+o+b8))
q.l(0,j,m)}}}},
h3:function(a,b){if(b!=null&&b.d>=6)a.cM(b)}}
A.cR.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.cZ.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dn.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dv.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.h9.prototype={
i:function(a){return this.b7}}
A.cm.prototype={}
A.cn.prototype={}
A.cp.prototype={}
A.cq.prototype={}
A.ds.prototype={
cR:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dV:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d1(b,35633)
r.f=r.d1(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.u(P.x("Failed to link shader: "+H.e(s)))}r.h5()
r.h7()},
a0:function(a){a.a.useProgram(this.r)
this.x.hB()},
d1:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.x("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h5:function(){var u,t,s,r=this,q=H.b([],[A.cQ]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cQ(p,t.name,s))}r.x=new A.eV(q)},
h7:function(){var u,t,s,r=this,q=H.b([],[A.dI]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.ht(t.type,t.size,t.name,s))}r.y=new A.iG(q)},
aO:function(a,b,c){var u=this.a
if(a===1)return new A.bi(u,b,c)
else return A.l3(u,this.r,b,a,c)},
eO:function(a,b,c){var u=this.a
if(a===1)return new A.bF(u,b,c)
else return A.l3(u,this.r,b,a,c)},
eP:function(a,b,c){var u=this.a
if(a===1)return new A.bj(u,b,c)
else return A.l3(u,this.r,b,a,c)},
bn:function(a,b){return new P.e_(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
ht:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aO(b,c,d)
case 5121:return u.aO(b,c,d)
case 5122:return u.aO(b,c,d)
case 5123:return u.aO(b,c,d)
case 5124:return u.aO(b,c,d)
case 5125:return u.aO(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iC(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cl(u.a,c,d)
case 35667:return new A.iD(u.a,c,d)
case 35668:return new A.iE(u.a,c,d)
case 35669:return new A.iF(u.a,c,d)
case 35674:return new A.iH(u.a,c,d)
case 35675:return new A.co(u.a,c,d)
case 35676:return new A.a9(u.a,c,d)
case 35678:return u.eO(b,c,d)
case 35680:return u.eP(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.x("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.i5.prototype={}
A.dI.prototype={}
A.iG.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
Y:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.x("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.l)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bi.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cl.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.co.prototype={
aj:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.a9.prototype={
aj:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bF.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bj.prototype={
cM:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jV.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cr(s.b,b).cr(s.d.cr(s.c,b),c)
a.sa1(0,new V.M(r.a,r.b,r.c))
a.se9(r.t(0,Math.sqrt(r.D(r))))
s=1-b
u=1-c
a.sdw(new V.aj(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k4.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k6.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sa1(0,new V.M(s,u,q))
u=new V.A(s,u,q)
a.se9(u.t(0,Math.sqrt(u.D(u))))
a.sdw(new V.aj(1-c,2+c,-1,-1))}}
F.k7.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k8.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kF.prototype={
$2:function(a,b){return 0}}
F.kG.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=a.f
t=new V.A(u.a,u.b,u.c)
s=t.t(0,Math.sqrt(t.D(t))).A(0,this.b+s)
a.sa1(0,new V.M(s.a,s.b,s.c))}}
F.kI.prototype={
$1:function(a){return new V.M(Math.cos(a),Math.sin(a),0)}}
F.kg.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.M(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k5.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lr(n.$1(o),m)
m=J.lr(n.$1(o+3.141592653589793/p.c),m).K(0,l)
m=new V.A(m.a,m.b,m.c)
u=m.t(0,Math.sqrt(m.D(m)))
n=$.m5
if(n==null){n=new V.A(1,0,0)
$.m5=n
t=n}else t=n
n=u.aB(!J.H(u,t)?V.m7():t)
s=n.t(0,Math.sqrt(n.D(n)))
n=s.aB(u)
t=n.t(0,Math.sqrt(n.D(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.A(0,n*m)
m=s.A(0,q*m)
a.sa1(0,l.C(0,new V.M(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.b7.prototype={
b5:function(){var u=this
if(!u.gb6()){C.b.M(u.a.a.d.b,u)
u.a.a.a6()}u.bX()
u.bY()
u.fW()},
c1:function(a){this.a=a
a.d.b.push(this)},
c2:function(a){this.b=a
a.d.c.push(this)},
h4:function(a){this.c=a
a.d.d.push(this)},
bX:function(){var u=this.a
if(u!=null){C.b.M(u.d.b,this)
this.a=null}},
bY:function(){var u=this.b
if(u!=null){C.b.M(u.d.c,this)
this.b=null}},
fW:function(){var u=this.c
if(u!=null){C.b.M(u.d.d,this)
this.c=null}},
gb6:function(){return this.a==null||this.b==null||this.c==null},
eH:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cr()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dY())return
return s.t(0,Math.sqrt(s.D(s)))},
eJ:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.t(0,Math.sqrt(r.D(r)))
r=t.K(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aB(r.t(0,Math.sqrt(r.D(r))))
return r.t(0,Math.sqrt(r.D(r)))},
c7:function(){var u,t=this
if(t.d!=null)return!0
u=t.eH()
if(u==null){u=t.eJ()
if(u==null)return!1}t.d=u
t.a.a.a6()
return!0},
eG:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cr()
if(q!=null)s=s.C(0,q)
if(u!=null)s=s.C(0,u)
if(t!=null)s=s.C(0,t)
if(s.dY())return
return s.t(0,Math.sqrt(s.D(s)))},
eI:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.E().a){l=d.K(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.K(0,g).A(0,p).C(0,g).K(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.t(0,Math.sqrt(l.D(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.t(0,Math.sqrt(l.D(l)))
l=o.aB(q)
l=l.t(0,Math.sqrt(l.D(l))).aB(o)
q=l.t(0,Math.sqrt(l.D(l)))}return q},
c5:function(){var u,t=this
if(t.e!=null)return!0
u=t.eG()
if(u==null){u=t.eI()
if(u==null)return!1}t.e=u
t.a.a.a6()
return!0},
gho:function(a){var u=this
if(J.H(u.a,u.b))return!0
if(J.H(u.b,u.c))return!0
if(J.H(u.c,u.a))return!0
return!1},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gb6())return a+"disposed"
u=a+C.a.am(J.a4(s.a.e),0)+", "+C.a.am(J.a4(s.b.e),0)+", "+C.a.am(J.a4(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.fv.prototype={}
F.i4.prototype={
b9:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.B()
t=t.e
u=c.c
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.c
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c5.prototype={
b5:function(){var u=this
if(!u.gb6()){C.b.M(u.a.a.c.b,u)
u.a.a.a6()}u.bX()
u.bY()},
c1:function(a){this.a=a
a.c.b.push(this)},
c2:function(a){this.b=a
a.c.c.push(this)},
bX:function(){var u=this.a
if(u!=null){C.b.M(u.c.b,this)
this.a=null}},
bY:function(){var u=this.b
if(u!=null){C.b.M(u.c.c,this)
this.b=null}},
gb6:function(){return this.a==null||this.b==null},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gb6())return a+"disposed"
return a+C.a.am(J.a4(this.a.e),0)+", "+C.a.am(J.a4(this.b.e),0)},
R:function(){return this.I("")}}
F.fU.prototype={}
F.iA.prototype={
b9:function(a,b,c){var u,t=b.a
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
return t==u.e}else{t=b.a
t.a.a.B()
t=t.e
u=c.b
u.a.a.B()
if(t==u.e){t=b.b
t.a.a.B()
t=t.e
u=c.a
u.a.a.B()
return t==u.e}else return!1}}}
F.ce.prototype={
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.am(J.a4(u.e),0)},
R:function(){return this.I("")}}
F.hW.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.F():u},
ba:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.B()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){r=g[s]
h.a.n(0,r.hq())}h.a.B()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.ce()
if(n.a==null)H.u(P.x("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.F(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.nn(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.l)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.B()
p=p.e
if(typeof p!=="number")return p.C()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.B()
o=o.e
if(typeof o!=="number")return o.C()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.c_(l,k,i)}g=h.e
if(g!=null)g.aw(0)},
an:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.an()||!1
if(!t.a.an())u=!1
s=t.e
if(s!=null)s.aw(0)
return u},
hR:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aL(o,0)])
for(o=[F.b0];u.length!==0;){t=C.b.ghF(u)
C.b.cC(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b9(0,t,q)){s.push(q)
C.b.cC(u,r)}}if(s.length>1)b.ba(s)}}p.a.B()
p.c.cD()
p.d.cD()
p.b.i8()
p.c.cE(new F.iA())
p.d.cE(new F.i4())
o=p.e
if(o!=null)o.aw(0)},
c4:function(){this.hR(new F.j3(),new F.hz())},
dB:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.at()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b4().a)!==0)++s
if((t&$.b3().a)!==0)++s
if((t&$.bo().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.cL().a)!==0)++s
if((t&$.cM().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.b2().a)!==0)++s
r=a4.gcN(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.N])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cS])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hk(m)
k=l.gcN(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cS(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hQ(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bL(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bW(new Z.dQ(a1,d),o,a4)
c.b=H.b([],[Z.bx])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.B()
b.push(t.e)}a=Z.l7(u,34963,b)
c.b.push(new Z.bx(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.B()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.B()
b.push(t.e)}a=Z.l7(u,34963,b)
c.b.push(new Z.bx(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.B()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.B()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.B()
b.push(t.e)}a=Z.l7(u,34963,b)
c.b.push(new Z.bx(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.I(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.I(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.I(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.I(t))}return C.b.j(s,"\n")},
a6:function(){var u=this.e
if(u!=null)u.F(null)}}
F.hY.prototype={
dm:function(a){var u,t,s,r,q,p=H.b([],[F.b7]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.d(a,r)
r=a[r]
if(s>=q)return H.d(a,s)
q=a[s]
t.a.n(0,u)
t.a.n(0,r)
t.a.n(0,q)
p.push(F.c_(u,r,q))}}return p},
hh:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.b7])
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
if(p){n.n(0,m)
u.a.n(0,l)
u.a.n(0,j)
h.push(F.c_(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c_(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c_(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c_(l,i,m))}p=!p}r=!r}return h},
gm:function(a){return this.b.length},
cE:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b9(0,p,n)){p.b5()
break}}}}},
cD:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.gho(s)
if(t)s.b5()}},
an:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].c7())s=!1
return s},
c6:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.l)(u),++r)if(!u[r].c5())s=!1
return s},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
R:function(){return this.I("")}}
F.hZ.prototype={
gm:function(a){return this.b.length},
cE:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b9(0,p,n)){p.b5()
break}}}}},
cD:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.H(s.a,s.b)
if(t)s.b5()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.b.j(s,"\n")},
R:function(){return this.I("")}}
F.i_.prototype={
gm:function(a){return this.b.length},
i8:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.F(null)}s=t.a
if(s!=null){C.b.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
R:function(){return this.I("")}}
F.b0.prototype={
cb:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dP(u.cx,r,o,t,s,q,p,a,n)},
hq:function(){return this.cb(null)},
sa1:function(a,b){var u
if(!J.H(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a6()}},
se9:function(a){var u
if(!J.H(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a6()}},
sdw:function(a){var u
if(!J.H(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a6()}},
hQ:function(a){var u,t,s=this
if(a.w(0,$.at())){u=s.f
t=[P.N]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b4())){u=s.r
t=[P.N]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.b3())){u=s.x
t=[P.N]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.bo())){u=s.y
t=[P.N]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.w(0,$.bp())){u=s.z
t=[P.N]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.cL())){u=s.Q
t=[P.N]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.w(0,$.cM())){u=s.Q
t=[P.N]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.w(0,$.bS()))return H.b([s.ch],[P.N])
else if(a.w(0,$.b2())){u=s.cx
t=[P.N]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.N])},
c7:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cr()
t.d.H(0,new F.j8(s))
s=s.a
t.r=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
c5:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cr()
t.d.H(0,new F.j7(s))
s=s.a
t.x=s.t(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.a6()
s=t.a.e
if(s!=null)s.aw(0)}return!0},
w:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.am(J.a4(s.e),0))
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
q.push(V.L(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.j(q,", ")
return a+"{"+t+"}"},
R:function(){return this.I("")}}
F.j8.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.j7.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.C(0,t)}}}
F.iZ.prototype={
B:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.x("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a6()
return!0},
dn:function(a,b,c,d,e,f,g){var u=F.dP(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bo:function(a,b,c,d,e,f){return this.dn(a,b,c,null,d,e,f)},
hi:function(a,b,c,d,e,f){return this.dn(a,b,c,d,e,f,null)},
gm:function(a){return this.c.length},
an:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].c7()
return!0},
c6:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)u[s].c5()
return!0},
hn:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.t(0,Math.sqrt(p*p+o*o+n*n))
if(!J.H(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.F(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.B()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r)u.push(t[r].I(a))
return C.b.j(u,"\n")},
R:function(){return this.I("")}}
F.j_.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
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
H:function(a,b){var u=this
C.b.H(u.b,b)
C.b.H(u.c,new F.j0(u,b))
C.b.H(u.d,new F.j1(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.j0.prototype={
$1:function(a){if(!J.H(a.a,this.a))this.b.$1(a)}}
F.j1.prototype={
$1:function(a){var u=this.a
if(!J.H(a.a,u)&&!J.H(a.b,u))this.b.$1(a)}}
F.j2.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.j4.prototype={}
F.j3.prototype={
b9:function(a,b,c){return J.H(b.f,c.f)}}
F.j5.prototype={}
F.hz.prototype={
ba:function(a){var u,t,s,r,q,p,o,n,m=V.cr()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.A(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.t(0,Math.sqrt(m.D(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.l)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.t(0,Math.sqrt(p*p+o*o+n*n))}if(!J.H(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.F(null)}}}return}}
F.j6.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.l)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
O.dd.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.F():u},
a3:function(a){var u=this.fr
if(u!=null)u.F(a)},
bV:function(){return this.a3(null)},
da:function(a){this.a=null
this.a3(a)},
h_:function(){return this.da(null)},
f4:function(a,b){var u=new D.b8()
u.b=!0
this.a3(u)},
f6:function(a,b){var u=new D.b9()
u.b=!0
this.a3(u)},
d_:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.J(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gau()
o=u.h(0,q.gau())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cR])
u.H(0,new O.hd(g,n))
C.b.aZ(n,new O.he())
m=new H.J(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],[A.cZ])
m.H(0,new O.hf(g,l))
C.b.aZ(l,new O.hg())
k=new H.J(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.l)(t),++r){q=t[r]
p=q.gau()
o=k.h(0,q.gau())
k.l(0,p,o==null?1:o)}j=H.b([],[A.dn])
k.H(0,new O.hh(g,j))
C.b.aZ(j,new O.hi())
i=new H.J(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.l)(f),++r){q=f[r]
s=q.gau()
p=i.h(0,q.gau())
i.l(0,s,p==null?1:p)}h=H.b([],[A.dv])
i.H(0,new O.hj(g,h))
C.b.aZ(h,new O.hk())
f=C.c.a9(g.e.a.length+3,4)
g.dy.e
return A.nv(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
eF:function(a,b){if(b!=null)if(!C.b.O(a,b)){b.a=a.length
a.push(b)}},
ap:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a5(u,u.length);u.v();){t=u.d
t.toString
s=$.iY
if(s==null)s=$.iY=new V.A(0,0,1)
t.a=s
r=$.iX
t.d=r==null?$.iX=new V.A(0,1,0):r
r=$.iW
t.e=r==null?$.iW=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bA(s)
r=s.a
p=s.b
o=s.c
t.a=s.t(0,Math.sqrt(r*r+p*p+o*o))
o=q.bA(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.t(0,Math.sqrt(p*p+r*r+s*s))
s=q.bA(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.t(0,Math.sqrt(r*r+p*p+o*o))}}}},
e5:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.d_()
u=b2.fr.h(0,b1.b7)
if(u==null){u=A.nu(b1,b2.a)
b2.dr(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.br
b1=b3.e
if(!(b1 instanceof Z.bW))b1=b3.e=null
if(b1==null||!b1.d.w(0,s)){b1=t.k4
if(b1)b3.d.an()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.c6()
q.a.c6()
q=q.e
if(q!=null)q.aw(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hn()
p=p.e
if(p!=null)p.aw(0)}n=b3.d.dB(new Z.dR(b2.a),s)
n.aD($.at()).e=b0.a.Q.c
if(b1)n.aD($.b4()).e=b0.a.cx.c
if(r)n.aD($.b3()).e=b0.a.ch.c
if(t.r2)n.aD($.bo()).e=b0.a.cy.c
if(q)n.aD($.bp()).e=b0.a.db.c
if(t.ry)n.aD($.b2()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dB])
b0.a.a0(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga5(r)
b1=b1.dy
b1.toString
b1.aj(r.af(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga5(r)
q=b2.dx
q=b2.cx=r.A(0,q.ga5(q))
r=q}b1=b1.fr
b1.toString
b1.aj(r.af(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gi6()
q=b2.dx
q=b2.ch=r.A(0,q.ga5(q))
r=q}b1=b1.fy
b1.toString
b1.aj(r.af(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga5(r)
b1=b1.fx
b1.toString
b1.aj(r.af(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.aj(C.j.af(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.aj(C.j.af(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.aj(C.j.af(r,!0))}if(t.bq>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bL(r.af(0,!0)))
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
b1=b1.br
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.e.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.z.ch
r=r.dJ
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.z.f
b1=b1.dI
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.z
if(b1.length>0){r=P.w
i=new H.J([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gau()
e=i.h(0,f)
if(e==null)e=0
i.l(0,f,e+1)
d=J.bT(b0.a.ce.h(0,f),e)
p=g.gis()
o=$.aC
p=p.bg(o==null?$.aC=new V.M(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gix()
o=$.aC
p=p.bg(o==null?$.aC=new V.M(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gp(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdH()){p=g.gdt()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdu()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdv()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.cd.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga5(r)
r=P.w
b=new H.J([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.l(0,0,e+1)
d=J.bT(b0.a.cg.h(0,0),e)
p=c.bA(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.t(0,Math.sqrt(o*o+a*a+a0*a0))
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
q=b0.a.cf.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga5(r)
r=P.w
a1=new H.J([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gau()
e=a1.h(0,f)
if(e==null)e=0
a1.l(0,f,e+1)
d=J.bT(b0.a.cj.h(0,f),e)
a2=c.A(0,g.ga5(g))
p=g.ga5(g)
o=$.aC
p=p.bg(o==null?$.aC=new V.M(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aC
p=a2.bg(p==null?$.aC=new V.M(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gp(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaI()
p=a2.cp(0)
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
j=new Float32Array(H.bL(new V.df(o,a,a0,a3,a4,a5,a6,a7,p).af(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaI()
p=g.gaI()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gaI()
o=p.gb8(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gaY()
p=g.geh()
o=d.x
o.toString
a=p.ghx(p)
a0=p.ghy(p)
a3=p.ghz()
p=p.ghw()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaY()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gaY()
o=p.gb8(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdH()){p=g.gdt()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdu()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdv()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.ci.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga5(r)
r=P.w
a9=new H.J([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.l)(r),++h){g=r[h]
f=g.gau()
e=a9.h(0,f)
if(e==null)e=0
a9.l(0,f,e+1)
d=J.bT(b0.a.cl.h(0,f),e)
p=g.gi5(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giv(g).iO()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bg(g.gi5(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gp(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaI()
p=g.gcH()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcF(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giP()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giQ()
o=d.y
o.a.uniform1f(o.d,p)
g.gaI()
p=g.gaI()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gaI()
o=p.gb8(p)
if(o){o=d.dx
o.toString
a=p.gb8(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghL(p)
o.a.uniform1i(o.d,p)}}g.gaY()
p=g.geh()
o=d.z
o.toString
a=p.ghx(p)
a0=p.ghy(p)
a3=p.ghz()
p=p.ghw()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gaY()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gaY()
o=p.gb8(p)
if(o){o=d.dy
o.toString
a=p.gb8(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghL(p)
o.a.uniform1i(o.d,p)}}if(g.giw()){p=g.giu()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.git()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdH()){p=g.gdt()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdu()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdv()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.l)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.ck.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga5(r).cp(0)}b1=b1.id
b1.toString
b1.aj(r.af(0,!0))}if(t.db){b0.eF(m,b0.ch)
b1=b0.a
r=b0.ch
b1.h3(b1.dK,r)
if(t.r.a){b1=b0.a
r=b0.cx.f
b1=b1.dL
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}b1=t.x.a
if(!b1)r=!1
else r=!0
if(r){r=b0.a
q=b0.cy.ch
r=r.dM
r.a.uniform1f(r.d,q)}if(b1){b1=b0.a
r=b0.cy.f
b1=b1.dN
b1.a.uniform3f(b1.d,r.a,r.b,r.c)}}b1=t.y.a
r=!b1
if(r)q=!1
else q=!0
if(q){if(b1){b1=b0.a
q=b0.db.f
b1=b1.dO
b1.a.uniform1f(b1.d,q)}b1=b2.a
b1.enable(3042)
b1.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a0(b2)
b1=b3.e
b1.a0(b2)
b1.ai(b2)
b1.aJ(b2)
if(r)b1=!1
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.dF()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d_().b7}}
O.hd.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cR(a,C.c.a9(b+3,4)*4))}}
O.he.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hf.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.cZ(a,C.c.a9(b+3,4)*4))}}
O.hg.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hh.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.dn(a,C.c.a9(b+3,4)*4))}}
O.hi.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.hj.prototype={
$2:function(a,b){if(typeof b!=="number")return b.C()
return this.b.push(new A.dv(a,C.c.a9(b+3,4)*4))}}
O.hk.prototype={
$2:function(a,b){return J.cN(a.a,b.a)}}
O.h7.prototype={
az:function(){var u,t=this
t.cP()
u=t.f
if(!(Math.abs(u-1)<$.E().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.de.prototype={
az:function(){},
bm:function(a){var u,t,s=this
if(!s.c.w(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.a3(null)}}}
O.h8.prototype={}
O.ax.prototype={
dd:function(a){var u,t,s=this
if(!s.f.w(0,a)){u=s.f
s.f=a
t=new D.C(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
az:function(){this.cP()
this.dd(new V.r(1,1,1))},
sp:function(a,b){this.bm(new A.Z(!0,!1,!1))
this.dd(b)}}
O.ha.prototype={}
O.hb.prototype={
bZ:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.E().a)){u.ch=a
t=new D.C(u.b+".refraction",t,a)
t.b=!0
u.a.a3(t)}},
az:function(){this.cQ()
this.bZ(1)},
saC:function(a){var u=this
if(a<=0){u.bm(new A.Z(!1,!1,!1))
u.bZ(0)}else{u.bm(new A.Z(!0,!1,!1))
u.bZ(a)}}}
O.hc.prototype={
de:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.E().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
az:function(){this.cQ()
this.de(100)}}
O.dt.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.F():u},
a3:function(a){var u=this.e
if(u!=null)u.F(a)},
bV:function(){return this.a3(null)},
e5:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.i5(t,n)
u.cR(t,n)
u.dV(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.m(u.y.h(0,"fov"),"$iV")
u.ch=H.m(u.y.h(0,"ratio"),"$iV")
u.cx=H.m(u.y.h(0,"boxClr"),"$iG")
u.cy=H.m(u.y.h(0,"boxTxt"),"$ibj")
u.db=H.m(u.y.h(0,"viewMat"),"$ia9")
a.dr(u)}o.a=u}if(b.e==null){t=b.d.dB(new Z.dR(a.a),$.at())
t.aD($.at()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a0(a)}t=a.d
s=a.c
r=o.a
r.a0(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cM(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga5(s).cp(0)
r=r.db
r.toString
r.aj(s.af(0,!0))
t=b.e
if(t instanceof Z.bW){t.a0(a)
t.ai(a)
t.aJ(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dF()
t=o.c
if(t!=null)t.aJ(a)}}
O.dA.prototype={}
T.dB.prototype={}
T.im.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.F():u},
a0:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aJ:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.io.prototype={
aP:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.Y(u,"load",new T.ip(this,u,!1,b,!1,d,a),!1)},
h0:function(a,b,c){var u,t,s,r
b=V.ll(b)
u=V.ll(a.width)
t=V.ll(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kO()
s.width=u
s.height=t
r=C.i.ee(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.p4(r.getImageData(0,0,s.width,s.height))}}}
T.ip.prototype={
$1:function(a){var u=this,t=u.a,s=t.h0(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.Y.ih(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hA()}++t.e}}
X.kN.prototype={}
X.fC.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.F():u},
ar:function(a){var u=this.x
if(u!=null)u.F(a)},
sdC:function(a,b){var u
if(this.b){this.b=!1
u=new D.C("clearColor",!0,!1)
u.b=!0
this.ar(u)}},
a0:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.t(u)
q=C.d.ao(r*u)
r=s.b
if(typeof t!=="number")return H.t(t)
p=C.d.ao(r*t)
r=C.d.ao(s.c*u)
a.c=r
s=C.d.ao(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fJ.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.F():u},
a0:function(a){var u
a.cy.by(V.bz())
u=V.bz()
a.db.by(u)},
aJ:function(a){a.cy.aG()
a.db.aG()}}
X.dm.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.F():u},
ar:function(a){var u=this.f
if(u!=null)u.F(a)},
eC:function(){return this.ar(null)},
a0:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.ay(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.by(k)
r=$.lL
if(r==null){r=V.lN()
q=V.l6()
p=$.m4
r=V.lH(r,q,p==null?$.m4=new V.A(0,0,-1):p)
$.lL=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aW(0,a,s)
if(t!=null)u=t.A(0,u)}a.db.by(u)},
aJ:function(a){a.cy.aG()
a.db.aG()}}
X.ii.prototype={}
V.cU.prototype={
bi:function(a){this.b=new P.fH(C.P)
this.c=null
this.d=H.b([],[[P.o,W.an]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.an]))
u=a.split("\n")
for(l=u.length,t=[W.an],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eN(q,0,q.length)
n=o==null?q:o
C.N.eg(p,H.ln(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gav(m.d).push(p)}},
e3:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.an]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bp()
for(t.toString,s=new H.n(u),s=new P.bI(t.cG(new H.bd(s,s.gm(s))).a());s.v();)r.bx(s.gE(s))}}
V.kE.prototype={
$1:function(a){var u=C.d.ea(this.a.ghK(),2)
if(u!=="0.00")P.lm(u+" fps")}}
V.fi.prototype={
bx:function(a){var u=this
switch(a.a){case"Class":u.N(a.b,"#551")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break
case"Type":u.N(a.b,"#B11")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.it()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.v(new H.n("_"))
u.a.push(t)
t=K.Q("a","z")
u.a.push(t)
t=K.Q("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.v(new H.n("_"))
t.a.push(u)
u=K.Q("0","9")
t.a.push(u)
u=K.Q("a","z")
t.a.push(u)
u=K.Q("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.Q("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.Q("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.v(new H.n("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.Q("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.Q("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.v(new H.n(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.v(new H.n(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.v(new H.n('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.v(new H.n('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.v(new H.n("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.v(new H.n('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aN())
t=a1.k(0,r).j(0,h)
u=K.v(new H.n("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.v(new H.n("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.v(new H.n("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.v(new H.n("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aN())
t=a1.k(0,r).j(0,e)
u=K.v(new H.n("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.v(new H.n("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.v(new H.n("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a7()
s=[K.be]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.n("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.v(new H.n("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.v(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a7()
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.v(new H.n("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.v(new H.n(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.v(new H.n(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.T("Num")
t=a1.k(0,n)
t.d=t.a.T("Num")
t=a1.k(0,m)
t.d=t.a.T("Symbol")
t=a1.k(0,j)
t.d=t.a.T("String")
t=a1.k(0,g)
t.d=t.a.T("String")
t=a1.k(0,c)
t.d=t.a.T(d)
t=a1.k(0,a0)
t.d=t.a.T(a0)
t=a1.k(0,q)
t=t.d=t.a.T(q)
u=[P.h]
t.aH(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aH(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aH(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fE.prototype={
bx:function(a){var u=this
switch(a.a){case"Builtin":u.N(a.b,"#411")
break
case"Comment":u.N(a.b,"#777")
break
case"Id":u.N(a.b,"#111")
break
case"Num":u.N(a.b,"#191")
break
case"Preprocess":u.N(a.b,"#737")
break
case"Reserved":u.N(a.b,"#119")
break
case"Symbol":u.N(a.b,"#611")
break
case"Type":u.N(a.b,"#171")
break
case"Whitespace":u.N(a.b,"#111")
break}},
bp:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.it()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.v(new H.n("_"))
u.a.push(t)
t=K.Q("a","z")
u.a.push(t)
t=K.Q("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.v(new H.n("_"))
t.a.push(u)
u=K.Q("0","9")
t.a.push(u)
u=K.Q("a","z")
t.a.push(u)
u=K.Q("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.Q("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.Q("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.v(new H.n("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.Q("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.Q("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.v(new H.n(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.v(new H.n(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.v(new H.n("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.v(new H.n("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aN())
t=e.k(0,j).j(0,i)
u=K.v(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a7()
s=[K.be]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.v(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a7()
u.a=H.b([],s)
t.a.push(u)
t=K.v(new H.n("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.v(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.v(new H.n(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.v(new H.n(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.T("Num")
u=e.k(0,n)
u.d=u.a.T("Num")
u=e.k(0,m)
u.d=u.a.T("Symbol")
u=e.k(0,i)
u.d=u.a.T(j)
u=e.k(0,g)
u.d=u.a.T(h)
u=e.k(0,f)
u.d=u.a.T(f)
u=e.k(0,q)
u=u.d=u.a.T(q)
t=[P.h]
u.aH(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aH(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aH(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fF.prototype={
bx:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.N(a.b,"#911")
u.N("=",t)
break
case"Id":u.N(a.b,t)
break
case"Other":u.N(a.b,t)
break
case"Reserved":u.N(a.b,"#119")
break
case"String":u.N(a.b,"#171")
break
case"Symbol":u.N(a.b,"#616")
break}},
bp:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.it()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.v(new H.n("_"))
u.a.push(t)
t=K.Q("a","z")
u.a.push(t)
t=K.Q("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.v(new H.n("_"))
t.a.push(u)
u=K.Q("0","9")
t.a.push(u)
u=K.Q("a","z")
t.a.push(u)
u=K.Q("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.v(new H.n("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.v(new H.n("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.v(new H.n("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.v(new H.n('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.v(new H.n('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.v(new H.n("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.v(new H.n('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aN())
l.k(0,s).j(0,m).a.push(new K.aN())
u=l.k(0,m).j(0,m)
t=new K.a7()
t.a=H.b([],[K.be])
u.a.push(t)
u=K.v(new H.n('</\\-!>=_"'))
t.a.push(u)
u=K.Q("a","z")
t.a.push(u)
u=K.Q("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.T("Symbol")
u=l.k(0,n)
u.d=u.a.T("String")
u=l.k(0,r)
t=u.a.T(r)
u.d=t
t.aH(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.T(q)
t=l.k(0,m)
t.d=t.a.T(m)
return l}}
V.hF.prototype={
e3:function(a,b){this.d=H.b([],[[P.o,W.an]])
this.N(C.b.j(b,"\n"),"#111")},
bx:function(a){},
bp:function(){return}}
V.hK.prototype={
c3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.m0().gcB().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.dj(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lt(m.c).n(0,q)
o=W.ng("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hL(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lt(m.c).n(0,r.createElement("br"))},
a2:function(a,b,c){return this.c3(a,b,c,!1)},
dj:function(a){var u,t,s=P.m0(),r=P.h,q=P.np(s.gcB(),r,r)
q.l(0,this.a,a)
u=s.e6(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jC([],[]).bB(""),"",t)}}
V.hL.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dj(u.d)}}}
V.i0.prototype={
eu:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.i2(o),!1)},
dq:function(a){var u,t,s,r,q,p,o,n
this.h6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hP(a),s.toString,r=new H.n(r),r=new P.bI(s.cG(new H.bd(r,r.gm(r))).a());r.v();){s=r.gE(r)
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
if(H.pp(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eC(C.x,s,C.e,!1)
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
ed:function(a){var u,t,s,r=new V.fi("dart")
r.bi("dart")
u=new V.fE("glsl")
u.bi("glsl")
t=new V.fF("html")
t.bi("html")
s=C.b.hG(H.b([r,u,t],[V.cU]),new V.i3(a))
if(s!=null)return s
r=new V.hF("plain")
r.bi("plain")
return r},
dl:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cI(s).a8(s,"+")){b0[t]=C.a.ad(s,1)
a6.push(1)
u=!0}else if(C.a.a8(s,"-")){b0[t]=C.a.ad(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ed(a8)
r.e3(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eC(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lv()
j.href="#"+H.e(n)
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
if(t>=a6.length)return H.d(a6,t)
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
for(a2=C.b.gS(s);a2.v();)d.appendChild(a2.gE(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
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
for(s=0;s<2;++s){r=o.createElement("div")
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
h6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.it()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.v(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a7()
r=[K.be]
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.n("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.v(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.v(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a7()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.n("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.v(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.v(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a7()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.n("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.v(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.v(new H.n("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.v(new H.n("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.v(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.v(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aN())
s=u.k(0,i).j(0,i)
t=new K.a7()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.n("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.T(p)
s=u.k(0,n)
s.d=s.a.T(o)
s=u.k(0,"CodeEnd")
s.d=s.a.T(m)
s=u.k(0,j)
s.d=s.a.T("Link")
s=u.k(0,i)
s.d=s.a.T(i)
this.b=u}}
V.i2.prototype={
$1:function(a){P.lX(C.n,new V.i1(this.a))}}
V.i1.prototype={
$0:function(){var u=C.d.ao(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i3.prototype={
$1:function(a){return a.a===this.a}}
D.kk.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.r(0.2,0.2,0.2))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.sp(0,new V.r(0,0,0))
u=u.cx
u.sp(0,new V.r(1,1,1))}}
D.kl.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.11,0.11,0.1))
t=u.x
t.sp(0,new V.r(0.21,0.21,0.2))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.sp(0,new V.r(0,0,0))
u=u.cx
u.sp(0,new V.r(1,0.9,0.5))}}
D.km.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.saC(0.4)
t=u.cy
t.sp(0,new V.r(0.6,0.6,0.6))
u=u.cx
u.sp(0,new V.r(0.4,0.4,0.4))}}
D.kv.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.saC(0.4)
t=u.cy
t.sp(0,new V.r(0.2,0.3,1))
u=u.cx
u.sp(0,new V.r(0.3,0.3,0.3))}}
D.kw.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.saC(0.6)
t=u.cy
t.sp(0,new V.r(0.8,0.8,0.8))
u=u.cx
u.sp(0,new V.r(0.2,0.2,0.2))}}
D.kx.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.saC(0.6)
t=u.cy
t.sp(0,new V.r(1,1,1))
u.cx.sp(0,new V.r(0,0,0))}}
D.ky.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.x
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.saC(0.9)
t=u.cy
t.sp(0,new V.r(1,0.8,0.8))
u.cx.sp(0,new V.r(0,0,0))}}
D.kz.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0,0,0))
t=u.x
t.sp(0,new V.r(0.1,0.1,0.1))
t=u.z
t.sp(0,new V.r(0.1,0.1,0.1))
u.cy.saC(0.99)
t=u.cy
t.sp(0,new V.r(0.95,0.95,0.95))
u.cx.sp(0,new V.r(0,0,0))}}
D.kA.prototype={
$0:function(){var u=this.a,t=u.r
t.sp(0,new V.r(0.3,0.3,0.3))
t=u.x
t.sp(0,new V.r(0.5,0.5,0.5))
t=u.z
t.sp(0,new V.r(1,1,1))
u.cy.sp(0,new V.r(0,0,0))
u=u.cx
u.sp(0,new V.r(0.3,0.3,0.3))}}
D.kB.prototype={
$0:function(){this.a.sab(0,F.lg(1,null,null,1))}}
D.kC.prototype={
$0:function(){this.a.sab(0,F.lg(15,null,new D.kj(),15))}}
D.kj.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.A(r.a,r.b,r.c)
u=r.t(0,Math.sqrt(r.D(r)))
r=a.f
s=u.A(0,t*0.1+s*0.1)
a.sa1(0,r.C(0,new V.M(s.a,s.b,s.c)))}}
D.kn.prototype={
$0:function(){this.a.sab(0,F.mo(!0,30,1))}}
D.ko.prototype={
$0:function(){this.a.sab(0,F.mo(!1,30,0))}}
D.kp.prototype={
$0:function(){this.a.sab(0,F.mp(!0,!0,25,new D.ki(),50))}}
D.ki.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
D.kq.prototype={
$0:function(){this.a.sab(0,F.mA(6,null,6))}}
D.kr.prototype={
$0:function(){this.a.sab(0,F.mA(10,new D.kh(),10))}}
D.kh.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3}}
D.ks.prototype={
$0:function(){this.a.sab(0,F.mC())}}
D.kt.prototype={
$0:function(){this.a.sab(0,F.pi())}}
D.ku.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.dl("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dl("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.el=u.i
u=J.d8.prototype
u.en=u.i
u=P.i.prototype
u.em=u.bC
u=W.S.prototype
u.bE=u.ak
u=W.ek.prototype
u.eo=u.at
u=K.d4.prototype
u.ek=u.aF
u.cO=u.i
u=O.de.prototype
u.cP=u.az
u=O.ax.prototype
u.cQ=u.az})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ou","nk",21)
t(P,"oZ","o2",7)
t(P,"p_","o3",7)
t(P,"p0","o4",7)
s(P,"mn","oX",9)
r(W,"pc",4,null,["$4"],["o5"],16,0)
r(W,"pd",4,null,["$4"],["o6"],16,0)
var l
q(l=E.aR.prototype,"ge1",0,0,null,["$1","$0"],["e2","hY"],0,0)
q(l,"ge_",0,0,null,["$1","$0"],["e0","hV"],0,0)
p(l,"ghT","hU",4)
p(l,"ghW","hX",4)
q(l=E.dC.prototype,"gcT",0,0,null,["$1","$0"],["cV","cU"],0,0)
o(l,"gib","e7",9)
n(l=X.dL.prototype,"gfj","fk",5)
n(l,"gf7","f8",5)
n(l,"gfd","fe",2)
n(l,"gfn","fo",10)
n(l,"gfl","fm",10)
n(l,"gfs","ft",2)
n(l,"gfw","fz",2)
n(l,"gfh","fi",2)
n(l,"gfu","fv",2)
n(l,"gff","fg",2)
n(l,"gfA","fB",19)
n(l,"gfC","fD",5)
n(l,"gfS","fT",6)
n(l,"gfO","fP",6)
n(l,"gfQ","fR",6)
q(D.bu.prototype,"gew",0,0,null,["$1","$0"],["ax","ex"],0,0)
q(l=D.da.prototype,"gd7",0,0,null,["$1","$0"],["d8","fp"],0,0)
n(l,"gfE","fF",20)
p(l,"gf1","f2",11)
p(l,"gfI","fJ",11)
m(V.K.prototype,"gm","cq",12)
m(V.A.prototype,"gm","cq",12)
q(l=U.c1.prototype,"gaN",0,0,null,["$1","$0"],["U","ae"],0,0)
p(l,"gf_","f0",13)
p(l,"gfG","fH",13)
q(l=U.dM.prototype,"gaN",0,0,null,["$1","$0"],["U","ae"],0,0)
n(l,"gbM","bN",1)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
q(l=U.dN.prototype,"gaN",0,0,null,["$1","$0"],["U","ae"],0,0)
n(l,"gbM","bN",1)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"geT","eU",1)
n(l,"geV","eW",1)
n(l,"ghd","he",1)
n(l,"ghb","hc",1)
n(l,"gh9","ha",1)
n(U.dO.prototype,"geY","eZ",1)
q(l=M.cV.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
p(l,"gfK","fL",14)
p(l,"gfM","fN",14)
q(M.cX.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
q(l=M.d1.prototype,"gZ",0,0,null,["$1","$0"],["a_","b_"],0,0)
p(l,"gf9","fa",4)
p(l,"gfb","fc",4)
q(l=O.dd.prototype,"gbU",0,0,null,["$1","$0"],["a3","bV"],0,0)
q(l,"gfZ",0,0,null,["$1","$0"],["da","h_"],0,0)
p(l,"gf3","f4",15)
p(l,"gf5","f6",15)
q(O.dt.prototype,"gbU",0,0,null,["$1","$0"],["a3","bV"],0,0)
q(X.dm.prototype,"geB",0,0,null,["$1","$0"],["ar","eC"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a2,null)
s(P.a2,[H.kY,J.a,J.a5,P.e7,P.i,H.bd,P.fN,H.d2,H.iL,H.fa,H.iy,P.bv,H.bX,H.ep,P.a1,H.fV,H.fX,H.fP,P.ev,P.bH,P.bI,P.dS,P.dy,P.id,P.dD,P.jU,P.jw,P.jq,P.e6,P.y,P.jM,P.h3,P.f6,P.fI,P.jS,P.jR,P.aK,P.ac,P.ab,P.b6,P.hD,P.dw,P.e_,P.fB,P.fD,P.o,P.T,P.bg,P.h,P.U,P.bJ,P.iN,P.jz,W.fe,W.cu,W.O,W.dk,W.ek,W.jG,W.d3,W.aW,W.jv,W.eD,P.jB,P.eA,P.jr,P.bE,K.aN,K.d4,K.be,K.hM,K.hV,L.dx,L.dE,L.dF,L.is,O.aO,O.c8,E.f2,E.aR,E.hN,E.dC,Z.dQ,Z.dR,Z.bW,Z.bx,Z.bk,D.f5,D.bw,D.X,X.cT,X.d9,X.fS,X.h0,X.ai,X.hr,X.iu,X.dL,D.f_,D.bu,D.a6,D.hH,D.i8,V.r,V.am,V.fs,V.df,V.aU,V.a_,V.M,V.aj,V.dq,V.K,V.A,U.dM,U.dN,U.dO,M.cX,M.d1,M.ap,A.cQ,A.eV,A.Z,A.cR,A.cZ,A.dn,A.dv,A.h9,A.cm,A.cn,A.cp,A.cq,A.dI,A.iG,F.b7,F.fv,F.c5,F.fU,F.ce,F.hW,F.hY,F.hZ,F.i_,F.b0,F.iZ,F.j_,F.j2,F.j4,F.j5,F.j6,O.dA,O.de,O.ha,T.io,X.kN,X.ii,X.fJ,X.dm,V.cU,V.hK,V.i0])
s(J.a,[J.fO,J.d7,J.d8,J.ba,J.c4,J.bb,H.cb,H.bf,W.f,W.eS,W.br,W.av,W.I,W.dU,W.ah,W.fj,W.fk,W.dW,W.d0,W.dY,W.fm,W.j,W.e0,W.aw,W.fG,W.e2,W.aS,W.h_,W.hl,W.e8,W.e9,W.az,W.ea,W.ed,W.aB,W.eh,W.ej,W.aE,W.el,W.aF,W.eq,W.aq,W.et,W.ir,W.aH,W.ew,W.iw,W.iS,W.eE,W.eG,W.eI,W.eK,W.eM,P.aT,P.e4,P.aX,P.ef,P.hJ,P.er,P.b_,P.ey,P.eW,P.dT,P.dr,P.en])
s(J.d8,[J.hE,J.bG,J.bc])
t(J.kX,J.ba)
s(J.c4,[J.d6,J.d5])
t(P.fZ,P.e7)
s(P.fZ,[H.dJ,W.jg,W.a3,P.fx])
t(H.n,H.dJ)
s(P.i,[H.q,H.c7,H.cs,P.fL])
s(H.q,[H.db,H.fW])
t(H.fp,H.c7)
s(P.fN,[H.h4,H.ja])
t(H.h5,H.db)
t(H.fb,H.fa)
s(P.bv,[H.hA,H.fR,H.iK,H.f4,H.hT,P.dl,P.al,P.iM,P.iI,P.ci,P.f9,P.fh])
s(H.bX,[H.kJ,H.ij,H.fQ,H.kc,H.kd,H.ke,P.jc,P.jb,P.jd,P.je,P.jL,P.jK,P.k2,P.jt,P.ju,P.fY,P.h2,P.fn,P.fo,P.iR,P.iO,P.iP,P.iQ,P.jN,P.jO,P.jQ,P.jP,P.jY,P.jX,P.jZ,P.k_,W.fq,W.hn,W.hp,W.hS,W.ic,W.jl,W.hy,W.hx,W.jx,W.jy,W.jJ,W.jT,P.jD,P.jE,P.k3,P.fy,P.fz,P.eY,E.hO,E.hP,E.hQ,E.iq,D.ft,D.fu,F.jV,F.k4,F.k6,F.k7,F.k8,F.kF,F.kG,F.kI,F.kg,F.k5,F.j8,F.j7,F.j0,F.j1,O.hd,O.he,O.hf,O.hg,O.hh,O.hi,O.hj,O.hk,T.ip,V.kE,V.hL,V.i2,V.i1,V.i3,D.kk,D.kl,D.km,D.kv,D.kw,D.kx,D.ky,D.kz,D.kA,D.kB,D.kC,D.kj,D.kn,D.ko,D.kp,D.ki,D.kq,D.kr,D.kh,D.ks,D.kt,D.ku])
s(H.ij,[H.ia,H.bU])
t(P.h1,P.a1)
s(P.h1,[H.J,W.jf])
t(H.dg,H.bf)
s(H.dg,[H.cw,H.cy])
t(H.cx,H.cw)
t(H.cc,H.cx)
t(H.cz,H.cy)
t(H.dh,H.cz)
s(H.dh,[H.hs,H.ht,H.hu,H.hv,H.hw,H.di,H.cd])
t(P.jH,P.fL)
t(P.js,P.jU)
t(P.jp,P.jw)
t(P.eB,P.h3)
t(P.dK,P.eB)
s(P.f6,[P.f0,P.fr])
t(P.fc,P.id)
s(P.fc,[P.f1,P.fH,P.iV,P.iU])
t(P.iT,P.fr)
s(P.ab,[P.N,P.w])
s(P.al,[P.bC,P.fK])
t(P.ji,P.bJ)
s(W.f,[W.D,W.fw,W.c9,W.aD,W.cA,W.aG,W.ar,W.cC,W.j9,W.ct,P.eZ,P.bq])
s(W.D,[W.S,W.b5])
s(W.S,[W.p,P.k])
s(W.p,[W.eT,W.eU,W.bs,W.bt,W.an,W.fA,W.c3,W.hU,W.dz,W.ig,W.ih,W.ck])
t(W.fd,W.av)
t(W.bY,W.dU)
s(W.ah,[W.ff,W.fg])
t(W.dX,W.dW)
t(W.d_,W.dX)
t(W.dZ,W.dY)
t(W.fl,W.dZ)
t(W.ao,W.br)
t(W.e1,W.e0)
t(W.c0,W.e1)
t(W.e3,W.e2)
t(W.c2,W.e3)
t(W.bh,W.j)
s(W.bh,[W.by,W.aA,W.bD])
t(W.hm,W.e8)
t(W.ho,W.e9)
t(W.eb,W.ea)
t(W.hq,W.eb)
t(W.ee,W.ed)
t(W.dj,W.ee)
t(W.ei,W.eh)
t(W.hG,W.ei)
t(W.hR,W.ej)
t(W.cB,W.cA)
t(W.i6,W.cB)
t(W.em,W.el)
t(W.i7,W.em)
t(W.ib,W.eq)
t(W.eu,W.et)
t(W.ik,W.eu)
t(W.cD,W.cC)
t(W.il,W.cD)
t(W.ex,W.ew)
t(W.iv,W.ex)
t(W.bl,W.aA)
t(W.eF,W.eE)
t(W.jh,W.eF)
t(W.dV,W.d0)
t(W.eH,W.eG)
t(W.jm,W.eH)
t(W.eJ,W.eI)
t(W.ec,W.eJ)
t(W.eL,W.eK)
t(W.jA,W.eL)
t(W.eN,W.eM)
t(W.jF,W.eN)
t(W.jj,W.jf)
t(W.jk,P.dy)
t(W.jI,W.ek)
t(P.jC,P.jB)
t(P.a8,P.jr)
t(P.e5,P.e4)
t(P.fT,P.e5)
t(P.eg,P.ef)
t(P.hB,P.eg)
t(P.ch,P.k)
t(P.es,P.er)
t(P.ie,P.es)
t(P.ez,P.ey)
t(P.ix,P.ez)
t(P.eX,P.dT)
t(P.hC,P.bq)
t(P.eo,P.en)
t(P.i9,P.eo)
s(K.d4,[K.a7,L.dH])
s(E.f2,[Z.cS,A.ds,T.dB])
s(D.X,[D.b8,D.b9,D.C,X.hI])
s(X.hI,[X.dc,X.aV,X.ca,X.dG])
s(O.aO,[D.da,U.c1,M.cV])
s(D.f5,[U.f8,U.ad])
t(U.cW,U.ad)
s(A.ds,[A.h6,A.i5])
s(A.dI,[A.bi,A.iD,A.iE,A.iF,A.iB,A.V,A.iC,A.G,A.cl,A.iH,A.co,A.a9,A.bF,A.bj])
t(F.i4,F.fv)
t(F.iA,F.fU)
t(F.j3,F.j4)
t(F.hz,F.j5)
s(O.dA,[O.dd,O.dt])
s(O.de,[O.h7,O.h8,O.ax])
s(O.ax,[O.hb,O.hc])
t(T.im,T.dB)
t(X.fC,X.ii)
s(V.cU,[V.fi,V.fE,V.fF,V.hF])
u(H.dJ,H.iL)
u(H.cw,P.y)
u(H.cx,H.d2)
u(H.cy,P.y)
u(H.cz,H.d2)
u(P.e7,P.y)
u(P.eB,P.jM)
u(W.dU,W.fe)
u(W.dW,P.y)
u(W.dX,W.O)
u(W.dY,P.y)
u(W.dZ,W.O)
u(W.e0,P.y)
u(W.e1,W.O)
u(W.e2,P.y)
u(W.e3,W.O)
u(W.e8,P.a1)
u(W.e9,P.a1)
u(W.ea,P.y)
u(W.eb,W.O)
u(W.ed,P.y)
u(W.ee,W.O)
u(W.eh,P.y)
u(W.ei,W.O)
u(W.ej,P.a1)
u(W.cA,P.y)
u(W.cB,W.O)
u(W.el,P.y)
u(W.em,W.O)
u(W.eq,P.a1)
u(W.et,P.y)
u(W.eu,W.O)
u(W.cC,P.y)
u(W.cD,W.O)
u(W.ew,P.y)
u(W.ex,W.O)
u(W.eE,P.y)
u(W.eF,W.O)
u(W.eG,P.y)
u(W.eH,W.O)
u(W.eI,P.y)
u(W.eJ,W.O)
u(W.eK,P.y)
u(W.eL,W.O)
u(W.eM,P.y)
u(W.eN,W.O)
u(P.e4,P.y)
u(P.e5,W.O)
u(P.ef,P.y)
u(P.eg,W.O)
u(P.er,P.y)
u(P.es,W.O)
u(P.ey,P.y)
u(P.ez,W.O)
u(P.dT,P.a1)
u(P.en,P.y)
u(P.eo,W.O)})()
var v={mangledGlobalNames:{w:"int",N:"double",ab:"num",h:"String",aK:"bool",bg:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.aA]},{func:1,ret:P.bg,args:[,,]},{func:1,ret:-1,args:[P.w,[P.i,E.aR]]},{func:1,ret:-1,args:[W.j]},{func:1,ret:-1,args:[W.bD]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.by]},{func:1,ret:-1,args:[P.w,[P.i,D.a6]]},{func:1,ret:P.N},{func:1,ret:-1,args:[P.w,[P.i,U.ad]]},{func:1,ret:-1,args:[P.w,[P.i,M.ap]]},{func:1,ret:-1,args:[P.w,[P.i,V.aU]]},{func:1,ret:P.aK,args:[W.S,P.h,P.h,W.cu]},{func:1,ret:P.bg,args:[,]},{func:1,ret:P.bE,args:[,,]},{func:1,ret:-1,args:[W.bl]},{func:1,ret:P.aK,args:[[P.i,D.a6]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bs.prototype
C.i=W.bt.prototype
C.N=W.an.prototype
C.Q=J.a.prototype
C.b=J.ba.prototype
C.R=J.d5.prototype
C.c=J.d6.prototype
C.j=J.d7.prototype
C.d=J.c4.prototype
C.a=J.bb.prototype
C.S=J.bc.prototype
C.A=J.hE.prototype
C.Y=P.dr.prototype
C.B=W.dz.prototype
C.q=J.bG.prototype
C.C=W.bl.prototype
C.D=W.ct.prototype
C.a_=new P.f1()
C.E=new P.f0()
C.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.F=function() {
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
C.K=function(getTagFallback) {
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
C.G=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.H=function(hooks) {
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
C.J=function(hooks) {
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
C.I=function(hooks) {
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
C.u=function(hooks) { return hooks; }

C.L=new P.hD()
C.e=new P.iT()
C.M=new P.iV()
C.f=new P.js()
C.n=new P.b6(0)
C.O=new P.b6(5e6)
C.P=new P.fI("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.T=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.U=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.V=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.W=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.X=new H.fb(0,{},C.w,[P.h,P.h])
C.Z=new P.bH(null,2)})();(function staticFields(){$.au=0
$.bV=null
$.lx=null
$.mu=null
$.mm=null
$.my=null
$.k9=null
$.kf=null
$.lj=null
$.bM=null
$.cG=null
$.cH=null
$.ld=!1
$.as=C.f
$.aa=[]
$.aQ=null
$.kS=null
$.lD=null
$.lC=null
$.cv=P.l_(P.h,P.fD)
$.lI=null
$.lM=null
$.aC=null
$.lT=null
$.m3=null
$.m6=null
$.m5=null
$.iW=null
$.iX=null
$.iY=null
$.m4=null
$.lL=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pw","mE",function(){return H.mt("_$dart_dartClosure")})
u($,"px","lp",function(){return H.mt("_$dart_js")})
u($,"py","mF",function(){return H.aI(H.iz({
toString:function(){return"$receiver$"}}))})
u($,"pz","mG",function(){return H.aI(H.iz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pA","mH",function(){return H.aI(H.iz(null))})
u($,"pB","mI",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pE","mL",function(){return H.aI(H.iz(void 0))})
u($,"pF","mM",function(){return H.aI(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pD","mK",function(){return H.aI(H.lZ(null))})
u($,"pC","mJ",function(){return H.aI(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pH","mO",function(){return H.aI(H.lZ(void 0))})
u($,"pG","mN",function(){return H.aI(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pV","lq",function(){return P.o1()})
u($,"pI","mP",function(){return P.nY()})
u($,"pW","mT",function(){return H.nw(H.bL(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pZ","mV",function(){return P.nK("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q_","mW",function(){return P.os()})
u($,"pX","mU",function(){return P.lG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pP","mS",function(){return Z.ak(0)})
u($,"pJ","mQ",function(){return Z.ak(511)})
u($,"pR","at",function(){return Z.ak(1)})
u($,"pQ","b4",function(){return Z.ak(2)})
u($,"pL","b3",function(){return Z.ak(4)})
u($,"pS","bo",function(){return Z.ak(8)})
u($,"pT","bp",function(){return Z.ak(16)})
u($,"pM","cL",function(){return Z.ak(32)})
u($,"pN","cM",function(){return Z.ak(64)})
u($,"pO","mR",function(){return Z.ak(96)})
u($,"pU","bS",function(){return Z.ak(128)})
u($,"pK","b2",function(){return Z.ak(256)})
u($,"pv","mD",function(){return new V.fs(1e-9)})
u($,"pu","E",function(){return $.mD()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cb,DataView:H.bf,ArrayBufferView:H.bf,Float32Array:H.cc,Float64Array:H.cc,Int16Array:H.hs,Int32Array:H.ht,Int8Array:H.hu,Uint16Array:H.hv,Uint32Array:H.hw,Uint8ClampedArray:H.di,CanvasPixelArray:H.di,Uint8Array:H.cd,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eS,HTMLAnchorElement:W.eT,HTMLAreaElement:W.eU,Blob:W.br,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bt,CDATASection:W.b5,CharacterData:W.b5,Comment:W.b5,ProcessingInstruction:W.b5,Text:W.b5,CSSPerspective:W.fd,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bY,MSStyleCSSProperties:W.bY,CSS2Properties:W.bY,CSSImageValue:W.ah,CSSKeywordValue:W.ah,CSSNumericValue:W.ah,CSSPositionValue:W.ah,CSSResourceValue:W.ah,CSSUnitValue:W.ah,CSSURLImageValue:W.ah,CSSStyleValue:W.ah,CSSMatrixComponent:W.av,CSSRotation:W.av,CSSScale:W.av,CSSSkew:W.av,CSSTranslation:W.av,CSSTransformComponent:W.av,CSSTransformValue:W.ff,CSSUnparsedValue:W.fg,DataTransferItemList:W.fj,HTMLDivElement:W.an,DOMException:W.fk,ClientRectList:W.d_,DOMRectList:W.d_,DOMRectReadOnly:W.d0,DOMStringList:W.fl,DOMTokenList:W.fm,Element:W.S,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ao,FileList:W.c0,FileWriter:W.fw,HTMLFormElement:W.fA,Gamepad:W.aw,History:W.fG,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.aS,HTMLImageElement:W.c3,KeyboardEvent:W.by,Location:W.h_,MediaList:W.hl,MessagePort:W.c9,MIDIInputMap:W.hm,MIDIOutputMap:W.ho,MimeType:W.az,MimeTypeArray:W.hq,PointerEvent:W.aA,MouseEvent:W.aA,DragEvent:W.aA,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dj,RadioNodeList:W.dj,Plugin:W.aB,PluginArray:W.hG,RTCStatsReport:W.hR,HTMLSelectElement:W.hU,SourceBuffer:W.aD,SourceBufferList:W.i6,SpeechGrammar:W.aE,SpeechGrammarList:W.i7,SpeechRecognitionResult:W.aF,Storage:W.ib,CSSStyleSheet:W.aq,StyleSheet:W.aq,HTMLTableElement:W.dz,HTMLTableRowElement:W.ig,HTMLTableSectionElement:W.ih,HTMLTemplateElement:W.ck,TextTrack:W.aG,TextTrackCue:W.ar,VTTCue:W.ar,TextTrackCueList:W.ik,TextTrackList:W.il,TimeRanges:W.ir,Touch:W.aH,TouchEvent:W.bD,TouchList:W.iv,TrackDefaultList:W.iw,CompositionEvent:W.bh,FocusEvent:W.bh,TextEvent:W.bh,UIEvent:W.bh,URL:W.iS,VideoTrackList:W.j9,WheelEvent:W.bl,Window:W.ct,DOMWindow:W.ct,CSSRuleList:W.jh,ClientRect:W.dV,DOMRect:W.dV,GamepadList:W.jm,NamedNodeMap:W.ec,MozNamedAttrMap:W.ec,SpeechRecognitionResultList:W.jA,StyleSheetList:W.jF,SVGLength:P.aT,SVGLengthList:P.fT,SVGNumber:P.aX,SVGNumberList:P.hB,SVGPointList:P.hJ,SVGScriptElement:P.ch,SVGStringList:P.ie,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.b_,SVGTransformList:P.ix,AudioBuffer:P.eW,AudioParamMap:P.eX,AudioTrackList:P.eZ,AudioContext:P.bq,webkitAudioContext:P.bq,BaseAudioContext:P.bq,OfflineAudioContext:P.hC,WebGL2RenderingContext:P.dr,SQLResultSetRowList:P.i9})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dg.$nativeSuperclassTag="ArrayBufferView"
H.cw.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cc.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.dh.$nativeSuperclassTag="ArrayBufferView"
W.cA.$nativeSuperclassTag="EventTarget"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(D.mw,[])
else D.mw([])})})()
//# sourceMappingURL=test.dart.js.map
