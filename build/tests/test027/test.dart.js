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
a[c]=function(){a[c]=function(){H.pv(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lg"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lg(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kX:function kX(){},
kh:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nx:function(a,b,c,d){if(!!J.Q(a).$iq)return new H.fs(a,b,[c,d])
return new H.c7(a,b,[c,d])},
fP:function(){return new P.cj("No element")},
nm:function(){return new P.cj("Too many elements")},
nU:function(a,b){var u=J.ai(a)
if(typeof u!=="number")return u.K()
H.dw(a,0,u-1,b)},
dw:function(a,b,c,d){if(c-b<=32)H.nT(a,b,c,d)
else H.nS(a,b,c,d)},
nT:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.bp(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a7()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.h(a,p))
r=p}t.l(a,r,s)}},
nS:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.aa(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.aa(a4+a5,2),f=g-j,e=g+j,d=J.bp(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(J.G(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.R()
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
if(typeof l!=="number")return l.R()
if(l<0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a7()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a7()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
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
H.dw(a3,a4,t-2,a6)
H.dw(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.G(a6.$2(d.h(a3,t),b),0);)++t
for(;J.G(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.h(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.R()
o=s-1
if(p<0){d.l(a3,r,d.h(a3,t))
n=t+1
d.l(a3,t,d.h(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.h(a3,s))
d.l(a3,s,q)}s=o
break}}H.dw(a3,t,s,a6)}else H.dw(a3,t,s,a6)},
n:function n(a){this.a=a},
q:function q(){},
dd:function dd(){},
bg:function bg(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c7:function c7(a,b,c){this.a=a
this.b=b
this.$ti=c},
fs:function fs(a,b,c){this.a=a
this.b=b
this.$ti=c},
h7:function h7(a,b){this.a=null
this.b=a
this.c=b},
h8:function h8(a,b,c){this.a=a
this.b=b
this.$ti=c},
ct:function ct(a,b,c){this.a=a
this.b=b
this.$ti=c},
jf:function jf(a,b){this.a=a
this.b=b},
d4:function d4(){},
iQ:function iQ(){},
dL:function dL(){},
nf:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cM:function(a){var u,t=H.pw(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pf:function(a){return v.types[a]},
mz:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.Q(a).$iC},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a5(a)
if(typeof u!=="string")throw H.c(H.ag(a))
return u},
cg:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nK:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.F(s,q)|32)>t)return}return parseInt(a,b)},
ch:function(a){return H.nB(a)+H.ml(H.cK(a),0,null)},
nB:function(a){var u,t,s,r,q,p,o,n=J.Q(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.R||!!n.$ibG){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cM(t.length>1&&C.a.F(t,0)===36?C.a.ad(t,1):t)},
nC:function(){if(!!self.location)return self.location.href
return},
lS:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nL:function(a){var u,t,s,r=H.b([],[P.v])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ag(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aT(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ag(s))}return H.lS(r)},
lT:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ag(s))
if(s<0)throw H.c(H.ag(s))
if(s>65535)return H.nL(a)}return H.lS(a)},
nM:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iz()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bC:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aT(u,10))>>>0,56320|u&1023)}}throw H.c(P.a_(a,0,1114111,null,null))},
bB:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nJ:function(a){var u=H.bB(a).getFullYear()+0
return u},
nH:function(a){var u=H.bB(a).getMonth()+1
return u},
nD:function(a){var u=H.bB(a).getDate()+0
return u},
nE:function(a){var u=H.bB(a).getHours()+0
return u},
nG:function(a){var u=H.bB(a).getMinutes()+0
return u},
nI:function(a){var u=H.bB(a).getSeconds()+0
return u},
nF:function(a){var u=H.bB(a).getMilliseconds()+0
return u},
r:function(a){throw H.c(H.ag(a))},
d:function(a,b){if(a==null)J.ai(a)
throw H.c(H.bP(a,b))},
bP:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.an(!0,b,s,null)
u=J.ai(a)
if(!(b<0)){if(typeof u!=="number")return H.r(u)
t=b>=u}else t=!0
if(t)return P.O(b,a,s,null,u)
return P.dq(b,s)},
p9:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bD(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bD(a,c,!0,b,"end",u)
return new P.an(!0,b,"end",null)},
ag:function(a){return new P.an(!0,a,null,null)},
p5:function(a){if(typeof a!=="number")throw H.c(H.ag(a))
return a},
c:function(a){var u
if(a==null)a=new P.dm()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mF})
u.name=""}else u.toString=H.mF
return u},
mF:function(){return J.a5(this.dartException)},
t:function(a){throw H.c(a)},
m:function(a){throw H.c(P.aQ(a))},
aJ:function(a){var u,t,s,r,q,p
a=H.mD(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iD(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iE:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
m2:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lO:function(a,b){return new H.hD(a,b==null?null:b.method)},
kY:function(a,b){var u=b==null,t=u?null:b.method
return new H.fU(a,t,u?null:b.receiver)},
ah:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kG(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aT(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kY(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lO(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mJ()
q=$.mK()
p=$.mL()
o=$.mM()
n=$.mP()
m=$.mQ()
l=$.mO()
$.mN()
k=$.mS()
j=$.mR()
i=r.am(u)
if(i!=null)return f.$1(H.kY(u,i))
else{i=q.am(u)
if(i!=null){i.method="call"
return f.$1(H.kY(u,i))}else{i=p.am(u)
if(i==null){i=o.am(u)
if(i==null){i=n.am(u)
if(i==null){i=m.am(u)
if(i==null){i=l.am(u)
if(i==null){i=o.am(u)
if(i==null){i=k.am(u)
if(i==null){i=j.am(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lO(u,i))}}return f.$1(new H.iP(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dy()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.an(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dy()
return a},
li:function(a){var u
if(a==null)return new H.er(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.er(a)},
pd:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
pl:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.w("Unsupported number of arguments for wrapped closure"))},
bO:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pl)
a.$identity=u
return u},
ne:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.id().constructor.prototype):Object.create(new H.bU(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.av
if(typeof t!=="number")return t.B()
$.av=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.ly(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.na(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.ly(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
na:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pf,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lx:H.kK
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
nb:function(a,b,c,d){var u=H.kK
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
ly:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nd(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nb(t,!r,u,b)
if(t===0){r=$.av
if(typeof r!=="number")return r.B()
$.av=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f6("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.av
if(typeof r!=="number")return r.B()
$.av=r+1
o+=r
r="return function("+o+"){return this."
q=$.bV
return new Function(r+H.e(q==null?$.bV=H.f6("self"):q)+"."+H.e(u)+"("+o+");}")()},
nc:function(a,b,c,d){var u=H.kK,t=H.lx
switch(b?-1:a){case 0:throw H.c(H.nQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nd:function(a,b){var u,t,s,r,q,p,o,n=$.bV
if(n==null)n=$.bV=H.f6("self")
u=$.lw
if(u==null)u=$.lw=H.f6("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nc(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.av
if(typeof u!=="number")return u.B()
$.av=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.av
if(typeof u!=="number")return u.B()
$.av=u+1
return new Function(n+u+"}")()},
lg:function(a,b,c,d,e,f,g){return H.ne(a,b,c,d,!!e,!!f,g)},
kK:function(a){return a.a},
lx:function(a){return a.c},
f6:function(a){var u,t,s,r=new H.bU("self","target","receiver","name"),q=J.kV(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pq:function(a,b){throw H.c(H.n9(a,H.cM(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.Q(a)[b]
else u=!0
if(u)return a
H.pq(a,b)},
pb:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
n9:function(a,b){return new H.f7("CastError: "+P.kT(a)+": type '"+H.e(H.p1(a))+"' is not a subtype of type '"+b+"'")},
p1:function(a){var u,t=J.Q(a)
if(!!t.$ibX){u=H.pb(t)
if(u!=null)return H.pr(u)
return"Closure"}return H.ch(a)},
pv:function(a){throw H.c(new P.fk(a))},
nQ:function(a){return new H.hW(a)},
mx:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cK:function(a){if(a==null)return
return a.$ti},
q5:function(a,b,c){return H.kE(a["$a"+H.e(c)],H.cK(b))},
pe:function(a,b,c,d){var u=H.kE(a["$a"+H.e(c)],H.cK(b))
return u==null?null:u[d]},
lh:function(a,b,c){var u=H.kE(a["$a"+H.e(b)],H.cK(a))
return u==null?null:u[c]},
aM:function(a,b){var u=H.cK(a)
return u==null?null:u[b]},
pr:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cM(a[0].name)+H.ml(a,1,b)
if(typeof a=="function")return H.cM(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.ox(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ox:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.B(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a3)p+=" extends "+H.bo(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bo(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bo(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bo(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.pc(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bo(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ml:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.T("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.i(0)+">"},
kE:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
q3:function(a,b,c){return a.apply(b,H.kE(J.Q(b)["$a"+H.e(c)],H.cK(b)))},
q4:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pn:function(a){var u,t,s,r,q=$.my.$1(a),p=$.kf[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mq.$2(a,q)
if(q!=null){p=$.kf[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kl[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kA(u)
$.kf[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kl[q]=u
return u}if(s==="-"){r=H.kA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mB(a,u)
if(s==="*")throw H.c(P.iO(q))
if(v.leafTags[q]===true){r=H.kA(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mB(a,u)},
mB:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lk(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kA:function(a){return J.lk(a,!1,null,!!a.$iC)},
po:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kA(u)
else return J.lk(u,c,null,null)},
pj:function(){if(!0===$.lj)return
$.lj=!0
H.pk()},
pk:function(){var u,t,s,r,q,p,o,n
$.kf=Object.create(null)
$.kl=Object.create(null)
H.pi()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mC.$1(q)
if(p!=null){o=H.po(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pi:function(){var u,t,s,r,q,p,o=C.G()
o=H.bN(C.H,H.bN(C.I,H.bN(C.u,H.bN(C.u,H.bN(C.J,H.bN(C.K,H.bN(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.my=new H.ki(r)
$.mq=new H.kj(q)
$.mC=new H.kk(p)},
bN:function(a,b){return a(b)||b},
nq:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.V("Illegal RegExp pattern ("+String(p)+")",a,null))},
pt:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pa:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mD:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lm:function(a,b,c){var u=H.pu(a,b,c)
return u},
pu:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mD(b),'g'),H.pa(c))},
fd:function fd(){},
fe:function fe(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iD:function iD(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hD:function hD(a,b){this.a=a
this.b=b},
fU:function fU(a,b,c){this.a=a
this.b=b
this.c=c},
iP:function iP(a){this.a=a},
kG:function kG(a){this.a=a},
er:function er(a){this.a=a
this.b=null},
bX:function bX(){},
im:function im(){},
id:function id(){},
bU:function bU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f7:function f7(a){this.a=a},
hW:function hW(a){this.a=a},
J:function J(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fT:function fT(a){this.a=a},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fZ:function fZ(a,b){this.a=a
this.$ti=b},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
fS:function fS(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bL:function(a){return a},
nA:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bP(b,a))},
ov:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.p9(a,b,c))
return b},
cc:function cc(){},
bi:function bi(){},
dh:function dh(){},
cd:function cd(){},
di:function di(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
dj:function dj(){},
ce:function ce(){},
cx:function cx(){},
cy:function cy(){},
cz:function cz(){},
cA:function cA(){},
pc:function(a){return J.lF(a?Object.keys(a):[],null)},
pw:function(a){return v.mangledGlobalNames[a]},
pp:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lk:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kg:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lj==null){H.pj()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iO("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lo()]
if(r!=null)return r
r=H.pn(a)
if(r!=null)return r
if(typeof a=="function")return C.T
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.lo(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
nn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kJ(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a_(a,0,4294967295,"length",null))
return J.lF(new Array(a),b)},
lF:function(a,b){return J.kV(H.b(a,[b]))},
kV:function(a){a.fixed$length=Array
return a},
no:function(a,b){return J.cP(a,b)},
Q:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.d8.prototype
return J.d7.prototype}if(typeof a=="string")return J.be.prototype
if(a==null)return J.d9.prototype
if(typeof a=="boolean")return J.fR.prototype
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.kg(a)},
bp:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.kg(a)},
eQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.bd.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.kg(a)},
mw:function(a){if(typeof a=="number")return J.c4.prototype
if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bG.prototype
return a},
cJ:function(a){if(typeof a=="string")return J.be.prototype
if(a==null)return a
if(!(a instanceof P.a3))return J.bG.prototype
return a},
bR:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bf.prototype
return a}if(a instanceof P.a3)return a
return J.kg(a)},
G:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.Q(a).t(a,b)},
lq:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mw(a).u(a,b)},
bT:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mz(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bp(a).h(a,b)},
kI:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mz(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eQ(a).l(a,b,c)},
n0:function(a,b){return J.cJ(a).F(a,b)},
n1:function(a,b,c){return J.bR(a).h6(a,b,c)},
n2:function(a,b,c,d){return J.bR(a).hq(a,b,c,d)},
n3:function(a,b){return J.cJ(a).X(a,b)},
cP:function(a,b){return J.mw(a).aY(a,b)},
eT:function(a,b){return J.eQ(a).L(a,b)},
n4:function(a,b,c,d){return J.bR(a).hM(a,b,c,d)},
lr:function(a,b){return J.eQ(a).G(a,b)},
n5:function(a){return J.bR(a).ghv(a)},
ls:function(a){return J.bR(a).gc6(a)},
cQ:function(a){return J.Q(a).gJ(a)},
aN:function(a){return J.eQ(a).gT(a)},
ai:function(a){return J.bp(a).gm(a)},
lt:function(a){return J.eQ(a).ih(a)},
n6:function(a,b){return J.bR(a).ik(a,b)},
n7:function(a,b,c){return J.cJ(a).v(a,b,c)},
n8:function(a){return J.cJ(a).iu(a)},
a5:function(a){return J.Q(a).i(a)},
a:function a(){},
fR:function fR(){},
d9:function d9(){},
da:function da(){},
hH:function hH(){},
bG:function bG(){},
bf:function bf(){},
bd:function bd(a){this.$ti=a},
kW:function kW(a){this.$ti=a},
a6:function a6(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c4:function c4(){},
d8:function d8(){},
d7:function d7(){},
be:function be(){}},P={
o5:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.p2()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bO(new P.jh(s),1)).observe(u,{childList:true})
return new P.jg(s,u,t)}else if(self.setImmediate!=null)return P.p3()
return P.p4()},
o6:function(a){self.scheduleImmediate(H.bO(new P.ji(a),0))},
o7:function(a){self.setImmediate(H.bO(new P.jj(a),0))},
o8:function(a){P.l3(C.n,a)},
l3:function(a,b){var u=C.c.aa(a.a,1000)
return P.of(u<0?0:u,b)},
m1:function(a,b){var u=C.c.aa(a.a,1000)
return P.og(u<0?0:u,b)},
of:function(a,b){var u=new P.ex()
u.eN(a,b)
return u},
og:function(a,b){var u=new P.ex()
u.eO(a,b)
return u},
q0:function(a){return new P.bH(a,1)},
ob:function(){return C.Z},
oc:function(a){return new P.bH(a,3)},
oA:function(a,b){return new P.jM(a,[b])},
oW:function(){var u,t
for(;u=$.bM,u!=null;){$.cI=null
t=u.b
$.bM=t
if(t==null)$.cH=null
u.a.$0()}},
p0:function(){$.le=!0
try{P.oW()}finally{$.cI=null
$.le=!1
if($.bM!=null)$.lp().$1(P.mr())}},
oZ:function(a){var u=new P.dU(a)
if($.bM==null){$.bM=$.cH=u
if(!$.le)$.lp().$1(P.mr())}else $.cH=$.cH.b=u},
p_:function(a){var u,t,s=$.bM
if(s==null){P.oZ(a)
$.cI=$.cH
return}u=new P.dU(a)
t=$.cI
if(t==null){u.b=s
$.bM=$.cI=u}else{u.b=t.b
$.cI=t.b=u
if(u.b==null)$.cH=u}},
m0:function(a,b){var u=$.at
if(u===C.f)return P.l3(a,b)
return P.l3(a,u.hw(b))},
nX:function(a,b){var u=$.at
if(u===C.f)return P.m1(a,b)
return P.m1(a,u.dz(b,P.dF))},
mm:function(a,b,c,d,e){var u={}
u.a=d
P.p_(new P.k7(u,e))},
oX:function(a,b,c,d){var u,t=$.at
if(t===c)return d.$0()
$.at=c
u=t
try{t=d.$0()
return t}finally{$.at=u}},
oY:function(a,b,c,d,e){var u,t=$.at
if(t===c)return d.$1(e)
$.at=c
u=t
try{t=d.$1(e)
return t}finally{$.at=u}},
jh:function jh(a){this.a=a},
jg:function jg(a,b,c){this.a=a
this.b=b
this.c=c},
ji:function ji(a){this.a=a},
jj:function jj(a){this.a=a},
ex:function ex(){this.c=0},
jQ:function jQ(a,b){this.a=a
this.b=b},
jP:function jP(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bH:function bH(a,b){this.a=a
this.b=b},
bI:function bI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jM:function jM(a,b){this.a=a
this.$ti=b},
dU:function dU(a){this.a=a
this.b=null},
dA:function dA(){},
ih:function ih(){},
dF:function dF(){},
jZ:function jZ(){},
k7:function k7(a,b){this.a=a
this.b=b},
jx:function jx(){},
jy:function jy(a,b){this.a=a
this.b=b},
jz:function jz(a,b,c){this.a=a
this.b=b
this.c=c},
ns:function(a,b){return new H.J([a,b])},
kZ:function(a,b){return new H.J([a,b])},
nu:function(a){return H.pd(a,new H.J([null,null]))},
c6:function(a){return new P.ju([a])},
l9:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oe:function(a,b){var u=new P.e8(a,b)
u.c=a.e
return u},
nl:function(a,b,c){var u,t
if(P.lf(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.oz(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.lY(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kU:function(a,b,c){var u,t
if(P.lf(a))return b+"..."+c
u=new P.T(b)
$.ab.push(a)
try{t=u
t.a=P.lY(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lf:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
oz:function(a,b){var u,t,s,r,q,p,o,n=a.gT(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gD(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gD(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gD(n);++l
for(;n.w();r=q,q=p){p=n.gD(n);++l
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
nt:function(a,b,c){var u=P.ns(b,c)
a.G(0,new P.h0(u))
return u},
lG:function(a,b){var u,t,s=P.c6(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t)s.n(0,a[t])
return s},
l0:function(a){var u,t={}
if(P.lf(a))return"{...}"
u=new P.T("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.lr(a,new P.h5(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
ju:function ju(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jv:function jv(a){this.a=a
this.c=this.b=null},
e8:function e8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fO:function fO(){},
h0:function h0(a){this.a=a},
h1:function h1(){},
x:function x(){},
h4:function h4(){},
h5:function h5(a,b){this.a=a
this.b=b},
a2:function a2(){},
jR:function jR(){},
h6:function h6(){},
dM:function dM(a,b){this.a=a
this.$ti=b},
jB:function jB(){},
e9:function e9(){},
eD:function eD(){},
o_:function(a,b,c,d){if(b instanceof Uint8Array)return P.o0(!1,b,c,d)
return},
o0:function(a,b,c,d){var u,t,s=$.mT()
if(s==null)return
u=0===c
if(u&&!0)return P.l6(s,b)
t=b.length
d=P.b_(c,d,t)
if(u&&d===t)return P.l6(s,b)
return P.l6(s,b.subarray(c,d))},
l6:function(a,b){if(P.o2(b))return
return P.o3(a,b)},
o3:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ah(t)}return},
o2:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
o1:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ah(t)}return},
mo:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.r(c)
u=J.bp(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ag()
if((s&127)!==s)return t-b}return c-b},
lv:function(a,b,c,d,e,f){if(C.c.bk(f,4)!==0)throw H.c(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.V("Invalid base64 padding, more than two '=' characters",a,b))},
f3:function f3(){},
f4:function f4(){},
f9:function f9(){},
ff:function ff(){},
fu:function fu(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fK:function fK(a){this.a=a},
iY:function iY(){},
j_:function j_(){},
jX:function jX(a){this.b=0
this.c=a},
iZ:function iZ(a){this.a=a},
jW:function jW(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eR:function(a,b,c){var u=H.nK(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.V(a,null,null))},
nj:function(a){if(a instanceof H.bX)return a.i(0)
return"Instance of '"+H.e(H.ch(a))+"'"},
nv:function(a,b,c){var u,t,s=J.nn(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
l_:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aN(a);u.w();)t.push(u.gD(u))
if(b)return t
return J.kV(t)},
ck:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b_(b,c,u)
if(b<=0){if(typeof c!=="number")return c.R()
t=c<u}else t=!0
return H.lT(t?C.b.ev(a,b,c):a)}if(!!J.Q(a).$ice)return H.nM(a,b,P.b_(b,c,a.length))
return P.nV(a,b,c)},
nV:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a_(b,0,J.ai(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a_(c,b,J.ai(a),q,q))
t=J.aN(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.a_(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gD(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.a_(c,b,s,q,q))
r.push(t.gD(t))}return H.lT(r)},
nO:function(a){return new H.fS(a,H.nq(a,!1,!0,!1,!1,!1))},
lY:function(a,b,c){var u=J.aN(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gD(u))
while(u.w())}else{a+=H.e(u.gD(u))
for(;u.w();)a=a+c+H.e(u.gD(u))}return a},
m4:function(){var u=H.nC()
if(u!=null)return P.nZ(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eE:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mZ().b
if(typeof b!=="string")H.t(H.ag(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghL().c8(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bC(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
ng:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d_:function(a){if(a>=10)return""+a
return"0"+a},
lz:function(a){return new P.b9(1000*a)},
kT:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a5(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nj(a)},
cR:function(a){return new P.an(!1,null,null,a)},
kJ:function(a,b,c){return new P.an(!0,a,b,c)},
dq:function(a,b){return new P.bD(null,null,!0,a,b,"Value not in range")},
a_:function(a,b,c,d,e){return new P.bD(b,c,!0,a,d,"Invalid value")},
b_:function(a,b,c){var u
if(typeof a!=="number")return H.r(a)
if(0<=a){if(typeof c!=="number")return H.r(c)
u=a>c}else u=!0
if(u)throw H.c(P.a_(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.r(c)
u=b>c}else u=!0
if(u)throw H.c(P.a_(b,a,c,"end",null))
return b}return c},
lU:function(a,b){if(typeof a!=="number")return a.R()
if(a<0)throw H.c(P.a_(a,0,null,b,null))},
O:function(a,b,c,d,e){var u=e==null?J.ai(b):e
return new P.fN(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iR(a)},
iO:function(a){return new P.iN(a)},
lX:function(a){return new P.cj(a)},
aQ:function(a){return new P.fc(a)},
w:function(a){return new P.e1(a)},
V:function(a,b,c){return new P.fE(a,b,c)},
nw:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
ll:function(a){H.pp(a)},
nZ:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.F(a,4)^58)*3|C.a.F(a,0)^100|C.a.F(a,1)^97|C.a.F(a,2)^116|C.a.F(a,3)^97)>>>0
if(u===0)return P.m3(e<e?C.a.v(a,0,e):a,5,f).gej()
else if(u===32)return P.m3(C.a.v(a,5,e),0,f).gej()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.v])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.mn(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iy()
if(r>=0)if(P.mn(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.R()
if(typeof n!=="number")return H.r(n)
if(m<n)n=m
if(typeof o!=="number")return o.R()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.R()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.R()
l=t<0
if(l)if(q>r+3){k=f
l=!1}else{t=p>0
if(t&&p+1===o){k=f
l=!1}else{if(!(n<e&&n===o+2&&C.a.ac(a,"..",o)))j=n>o+2&&C.a.ac(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.ac(a,"file",0)){if(q<=0){if(!C.a.ac(a,"/",o)){i="file:///"
u=3}else{i="file://"
u=2}a=i+C.a.v(a,o,e)
r-=0
t=u-0
n+=t
m+=t
e=a.length
q=7
p=7
o=7}else if(o===n){h=n+1;++m
a=C.a.b_(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ac(a,"http",0)){if(t&&p+3===o&&C.a.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.b_(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ac(a,"https",0)){if(t&&p+4===o&&C.a.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.b_(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jE(a,r,q,p,o,n,m,k)}return P.oh(a,0,e,r,q,p,o,n,m,k)},
m6:function(a){var u=P.h
return C.b.hR(H.b(a.split("&"),[u]),P.kZ(u,u),new P.iW(C.e))},
nY:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iT(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.X(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eR(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eR(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a7()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
m5:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iU(a),d=new P.iV(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.v])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.X(a,t)
if(p===58){if(t===b){++t
if(C.a.X(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaA(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nY(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aT(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
oh:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.op(a,b,d)
else{if(d===b)P.bK(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oq(a,u,e-1):""
s=P.om(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.r(g)
q=r<g?P.oo(P.eR(C.a.v(a,r,g),new P.jS(a,f),n),j):n}else{q=n
s=q
t=""}p=P.on(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.R()
o=h<i?P.lb(a,h+1,i,n):n
return new P.bJ(j,t,s,q,p,o,i<c?P.ol(a,i+1,c):n)},
mf:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bK:function(a,b,c){throw H.c(P.V(c,a,b))},
oo:function(a,b){if(a!=null&&a===P.mf(b))return
return a},
om:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.X(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.X(a,u)!==93)P.bK(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oj(a,t,u)
if(typeof s!=="number")return s.R()
if(s<u){r=s+1
q=P.mk(a,C.a.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.m5(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.r(c)
p=b
for(;p<c;++p)if(C.a.X(a,p)===58){s=C.a.bt(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mk(a,C.a.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.m5(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.os(a,b,c)},
oj:function(a,b,c){var u,t=C.a.bt(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.r(c)
u=t<c}else u=!1
return u?t:c},
mk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.T(d):null
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.X(a,u)
if(r===37){q=P.lc(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.T("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bK(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.T("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.X(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.T("")
l.a+=C.a.v(a,t,u)
l.a+=P.la(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
os:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.r(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.X(a,u)
if(q===37){p=P.lc(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.T("")
n=C.a.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.y,o)
o=(C.y[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.T("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bK(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.X(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.T("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.la(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
op:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mh(C.a.F(a,b)))P.bK(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.F(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bK(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.oi(t?a.toLowerCase():a)},
oi:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oq:function(a,b,c){return P.cF(a,b,c,C.W,!1)},
on:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cF(a,b,c,C.z,!0):C.j.iP(d,new P.jT(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a9(u,"/"))u="/"+u
return P.or(u,e,f)},
or:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a9(a,"/"))return P.ot(a,!u||c)
return P.ou(a)},
lb:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cR("Both query and queryParameters specified"))
return P.cF(a,b,c,C.l,!0)}if(d==null)return
u=new P.T("")
t.a=""
d.G(0,new P.jU(new P.jV(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
ol:function(a,b,c){return P.cF(a,b,c,C.l,!0)},
lc:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.X(a,b+1)
t=C.a.X(a,p)
s=H.kh(u)
r=H.kh(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aT(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bC(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
la:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.v])
t[0]=37
t[1]=C.a.F(m,a>>>4)
t[2]=C.a.F(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.v])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hi(a,6*r)&63|s
if(q>=u)return H.d(t,q)
t[q]=37
o=q+1
n=C.a.F(m,p>>>4)
if(o>=u)return H.d(t,o)
t[o]=n
n=q+2
o=C.a.F(m,p&15)
if(n>=u)return H.d(t,n)
t[n]=o
q+=3}}return P.ck(t,0,null)},
cF:function(a,b,c,d,e){var u=P.mj(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
mj:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.R()
if(typeof c!=="number")return H.r(c)
if(!(o<c))break
c$0:{u=C.a.X(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lc(a,o,!1)
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
s=P.la(u)}}if(m==null)m=new P.T("")
m.a+=C.a.v(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.r(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.R()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mi:function(a){if(C.a.a9(a,"."))return!0
return C.a.dZ(a,"/.")!==-1},
ou:function(a){var u,t,s,r,q,p,o
if(!P.mi(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.G(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
ot:function(a,b){var u,t,s,r,q,p
if(!P.mi(a))return!b?P.mg(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaA(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaA(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.mg(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
mg:function(a){var u,t,s,r=a.length
if(r>=2&&P.mh(J.n0(a,0)))for(u=1;u<r;++u){t=C.a.F(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ad(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
ok:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.F(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cR("Invalid URL encoding"))}}return u},
ld:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.F(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.n(C.a.v(a,b,c))}else{r=H.b([],[P.v])
for(s=a.length,q=b;q<c;++q){t=C.a.F(a,q)
if(t>127)throw H.c(P.cR("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cR("Truncated URI"))
r.push(P.ok(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iZ(!1).c8(r)},
mh:function(a){var u=a|32
return 97<=u&&u<=122},
m3:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.v])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.F(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.V(m,a,t))}}if(s<0&&t>b)throw H.c(P.V(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.F(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaA(l)
if(r!==44||t!==p+7||!C.a.ac(a,"base64",p+1))throw H.c(P.V("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.i_(0,a,o,u)
else{n=P.mj(a,o,u,C.l,!0)
if(n!=null)a=C.a.b_(a,o,u,n)}return new P.iS(a,l,c)},
ow:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nw(22,new P.k2(),P.bF),n=new P.k1(o),m=new P.k3(),l=new P.k4(),k=n.$2(0,225)
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
mn:function(a,b,c,d,e){var u,t,s,r,q,p=$.n_()
for(u=b;u<c;++u){if(d<0||d>=p.length)return H.d(p,d)
t=p[d]
s=C.a.F(a,u)^96
if(s>95)s=31
if(s>=t.length)return H.d(t,s)
r=t[s]
d=r&31
q=r>>>5
if(q>=8)return H.d(e,q)
e[q]=u}return d},
aL:function aL(){},
ae:function ae(a,b){this.a=a
this.b=b},
M:function M(){},
b9:function b9(a){this.a=a},
fq:function fq(){},
fr:function fr(){},
bw:function bw(){},
dm:function dm(){},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bD:function bD(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fN:function fN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iR:function iR(a){this.a=a},
iN:function iN(a){this.a=a},
cj:function cj(a){this.a=a},
fc:function fc(a){this.a=a},
hG:function hG(){},
dy:function dy(){},
fk:function fk(a){this.a=a},
e1:function e1(a){this.a=a},
fE:function fE(a,b,c){this.a=a
this.b=b
this.c=c},
fG:function fG(){},
v:function v(){},
i:function i(){},
fQ:function fQ(){},
o:function o(){},
S:function S(){},
bj:function bj(){},
ac:function ac(){},
a3:function a3(){},
h:function h(){},
T:function T(a){this.a=a},
iW:function iW(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a){this.a=a},
iV:function iV(a,b){this.a=a
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
jS:function jS(a,b){this.a=a
this.b=b},
jT:function jT(){},
jV:function jV(a,b){this.a=a
this.b=b},
jU:function jU(a){this.a=a},
iS:function iS(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(){},
k1:function k1(a){this.a=a},
k3:function k3(){},
k4:function k4(){},
jE:function jE(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jn:function jn(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
p8:function(a){var u,t=J.Q(a)
if(!!t.$iaT){u=t.gdD(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eC(a.data,a.height,a.width)},
p7:function(a){if(a instanceof P.eC)return{data:a.a,height:a.b,width:a.c}
return a},
b3:function(a){var u,t,s,r,q
if(a==null)return
u=P.kZ(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
p6:function(a){var u={}
a.G(0,new P.k8(u))
return u},
jG:function jG(){},
jI:function jI(a,b){this.a=a
this.b=b},
jJ:function jJ(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
k8:function k8(a){this.a=a},
jH:function jH(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(){},
jt:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
od:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jw:function jw(){},
a9:function a9(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aU:function aU(){},
fW:function fW(){},
aY:function aY(){},
hE:function hE(){},
hM:function hM(){},
ci:function ci(){},
ii:function ii(){},
l:function l(){},
b0:function b0(){},
iC:function iC(){},
e6:function e6(){},
e7:function e7(){},
eh:function eh(){},
ei:function ei(){},
et:function et(){},
eu:function eu(){},
eA:function eA(){},
eB:function eB(){},
bF:function bF(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(a){this.a=a},
f0:function f0(){},
br:function br(){},
hF:function hF(){},
dV:function dV(){},
ds:function ds(){},
ic:function ic(){},
ep:function ep(){},
eq:function eq(){}},W={
lu:function(){var u=document.createElement("a")
return u},
kM:function(){var u=document.createElement("canvas")
return u},
ni:function(a,b,c){var u=document.body,t=(u&&C.r).al(u,a,b,c)
t.toString
u=new H.ct(new W.a4(t),new W.ft(),[W.E])
return u.gaM(u)},
kQ:function(a){return"wheel"},
bZ:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bR(a)
t=u.gef(a)
if(typeof t==="string")r=u.gef(a)}catch(s){H.ah(s)}return r},
nk:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ah(u)}return s},
js:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
md:function(a,b,c,d){var u=W.js(W.js(W.js(W.js(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Y:function(a,b,c,d){var u=W.mp(new W.jq(c),W.k)
if(u!=null&&!0)J.n2(a,b,u,!1)
return new W.jp(a,b,u,!1)},
mc:function(a){var u=W.lu(),t=window.location
u=new W.cv(new W.jA(u,t))
u.eG(a)
return u},
o9:function(a,b,c,d){return!0},
oa:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
me:function(){var u=P.h,t=P.lG(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jN(t,P.c6(u),P.c6(u),P.c6(u),null)
t.eM(null,new H.h8(C.o,new W.jO(),[H.aM(C.o,0),u]),s,null)
return t},
mp:function(a,b){var u=$.at
if(u===C.f)return a
return u.dz(a,b)},
p:function p(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
bs:function bs(){},
bt:function bt(){},
bu:function bu(){},
b8:function b8(){},
fg:function fg(){},
I:function I(){},
bY:function bY(){},
fh:function fh(){},
aj:function aj(){},
aw:function aw(){},
fi:function fi(){},
fj:function fj(){},
fm:function fm(){},
ao:function ao(){},
fn:function fn(){},
d1:function d1(){},
d2:function d2(){},
fo:function fo(){},
fp:function fp(){},
jl:function jl(a,b){this.a=a
this.b=b},
R:function R(){},
ft:function ft(){},
k:function k(){},
f:function f(){},
ap:function ap(){},
c0:function c0(){},
fz:function fz(){},
fD:function fD(){},
ax:function ax(){},
fJ:function fJ(){},
c2:function c2(){},
aT:function aT(){},
c3:function c3(){},
bz:function bz(){},
h2:function h2(){},
ho:function ho(){},
ca:function ca(){},
hp:function hp(){},
hq:function hq(a){this.a=a},
hr:function hr(){},
hs:function hs(a){this.a=a},
aA:function aA(){},
ht:function ht(){},
aB:function aB(){},
a4:function a4(a){this.a=a},
E:function E(){},
dk:function dk(){},
aC:function aC(){},
hJ:function hJ(){},
hU:function hU(){},
hV:function hV(a){this.a=a},
hX:function hX(){},
aE:function aE(){},
i9:function i9(){},
aF:function aF(){},
ia:function ia(){},
aG:function aG(){},
ie:function ie(){},
ig:function ig(a){this.a=a},
ar:function ar(){},
dB:function dB(){},
ij:function ij(){},
ik:function ik(){},
cl:function cl(){},
aH:function aH(){},
as:function as(){},
io:function io(){},
ip:function ip(){},
iw:function iw(){},
aI:function aI(){},
bE:function bE(){},
iA:function iA(){},
iB:function iB(){},
bk:function bk(){},
iX:function iX(){},
je:function je(){},
bn:function bn(){},
cu:function cu(){},
jm:function jm(){},
dX:function dX(){},
jr:function jr(){},
ee:function ee(){},
jF:function jF(){},
jK:function jK(){},
jk:function jk(){},
jo:function jo(a){this.a=a},
jp:function jp(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jq:function jq(a){this.a=a},
cv:function cv(a){this.a=a},
N:function N(){},
dl:function dl(a){this.a=a},
hB:function hB(a){this.a=a},
hA:function hA(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(){},
jC:function jC(){},
jD:function jD(){},
jN:function jN(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jO:function jO(){},
jL:function jL(){},
d5:function d5(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aX:function aX(){},
jA:function jA(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a},
jY:function jY(a){this.a=a},
dW:function dW(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e2:function e2(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){},
ed:function ed(){},
ef:function ef(){},
eg:function eg(){},
ej:function ej(){},
ek:function ek(){},
el:function el(){},
cB:function cB(){},
cC:function cC(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
cD:function cD(){},
cE:function cE(){},
ey:function ey(){},
ez:function ez(){},
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
P:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.w("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.F(a,0)
t=C.a.F(b,0)
if(u>t){s=t
t=u
u=s}return new K.hP(u,t)},
u:function(a){var u=new K.hY()
u.eE(a)
return u},
aO:function aO(){},
d6:function d6(){},
bh:function bh(){},
a8:function a8(){this.a=null},
hP:function hP(a,b){this.a=a
this.b=b},
hY:function hY(){this.a=null}},L={
iy:function(){var u=new L.ix(),t=P.h
u.a=new H.J([t,L.dz])
u.b=new H.J([t,L.dH])
u.c=P.c6(t)
return u},
dz:function dz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dG:function dG(a,b,c){this.a=a
this.b=b
this.c=c},
dH:function dH(a){this.b=a
this.c=null},
ix:function ix(){var _=this
_.d=_.c=_.b=_.a=null},
dJ:function dJ(a){this.b=a
this.a=this.c=null}},O={
kN:function(a){var u=new O.aP([a])
u.bm(a)
return u},
aP:function aP(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
c9:function c9(){this.b=this.a=null},
lH:function(){var u,t=new O.df(),s=O.kN(V.aV)
t.e=s
s.b1(t.gfd(),t.gff())
s=new O.ay(t,"emission")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.f=s
s=new O.ay(t,"ambient")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.r=s
s=new O.ay(t,"diffuse")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.x=s
s=new O.ay(t,"invDiffuse")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.y=s
s=new O.hf(t,"specular")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=100
t.z=s
s=new O.hb(t,"bump")
s.c=new A.a0(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.ay(t,"reflect")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
t.cx=s
s=new O.he(t,"refract")
s.c=new A.a0(!1,!1,!1)
s.f=new V.W(0,0,0)
s.ch=1
t.cy=s
s=new O.ha(t,"alpha")
s.c=new A.a0(!1,!1,!1)
s.f=1
t.db=s
s=new D.dc()
s.bm(D.a7)
s.e=H.b([],[D.f2])
s.f=H.b([],[D.bv])
s.r=H.b([],[D.hK])
s.x=H.b([],[D.ib])
s.z=s.y=null
s.cL(s.gfb(),s.gfO(),s.gfS())
t.dx=s
u=new O.hd()
u.b=new V.ad(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.D():u
s.n(0,t.gh8())
s=t.dx
u=s.z
s=u==null?s.z=D.D():u
s.n(0,t.gaO())
t.fr=null
return t},
df:function df(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ha:function ha(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
c8:function c8(){},
hb:function hb(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ay:function ay(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(){var _=this
_.e=_.d=_.c=_.b=null},
he:function he(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hf:function hf(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dv:function dv(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dC:function dC(){}},E={
kS:function(){var u,t=new E.aS()
t.a=""
t.b=!0
u=O.kN(E.aS)
t.y=u
u.b1(t.gi0(),t.gi3())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa8(0,null)
return t},
nP:function(a,b){var u=new E.hQ(a)
u.eD(a,b)
return u},
nW:function(a,b,c,d,e){var u,t,s=J.Q(a)
if(!!s.$ibu)return E.m_(a,!0,!0,!0,!1)
u=W.kM()
t=u.style
t.width="100%"
t.height="100%"
s.gc6(a).n(0,u)
return E.m_(u,!0,!0,!0,!1)},
m_:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dE(),p=C.i.cJ(a,"webgl2",P.nu(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.t(P.w("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nP(p,a)
u=new T.it(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dN(a)
t=new X.fV()
t.c=new X.ak(!1,!1,!1)
t.d=P.c6(P.v)
u.b=t
t=new X.hu(u)
t.f=0
t.r=V.aZ()
t.x=V.aZ()
t.ch=t.Q=1
u.c=t
t=new X.h3(u)
t.r=0
t.x=V.aZ()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iz(u)
t.f=V.aZ()
t.r=V.aZ()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dA,P.a3]])
u.z=t
s=document
t.push(W.Y(s,"contextmenu",u.gfn(),!1))
u.z.push(W.Y(a,"focus",u.gfu(),!1))
u.z.push(W.Y(a,"blur",u.gfh(),!1))
u.z.push(W.Y(s,"keyup",u.gfA(),!1))
u.z.push(W.Y(s,"keydown",u.gfw(),!1))
u.z.push(W.Y(a,"mousedown",u.gfE(),!1))
u.z.push(W.Y(a,"mouseup",u.gfI(),!1))
u.z.push(W.Y(a,r,u.gfG(),!1))
t=u.z
W.kQ(a)
W.kQ(a)
t.push(W.Y(a,W.kQ(a),u.gfK(),!1))
u.z.push(W.Y(s,r,u.gfp(),!1))
u.z.push(W.Y(s,"mouseup",u.gfs(),!1))
u.z.push(W.Y(s,"pointerlockchange",u.gfM(),!1))
u.z.push(W.Y(a,"touchstart",u.gh1(),!1))
u.z.push(W.Y(a,"touchend",u.gfY(),!1))
u.z.push(W.Y(a,"touchmove",u.gh_(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ae(Date.now(),!1)
q.db=0
q.da()
return q},
f5:function f5(){},
aS:function aS(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hQ:function hQ(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hR:function hR(a){this.a=a},
hS:function hS(a){this.a=a},
hT:function hT(a){this.a=a},
dE:function dE(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iv:function iv(a){this.a=a}},Z={
l8:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bL(c)),35044)
a.bindBuffer(b,null)
return new Z.dS(b,u)},
am:function(a){return new Z.b2(a)},
dS:function dS(a,b){this.a=a
this.b=b},
cU:function cU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dT:function dT(a){this.a=a},
bW:function bW(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
D:function(){var u=new D.bx()
u.d=0
return u},
f8:function f8(){},
bx:function bx(){var _=this
_.d=_.c=_.b=_.a=null},
fw:function fw(a){this.a=a},
fx:function fx(a){this.a=a},
X:function X(){this.b=null},
bb:function bb(){this.b=null},
bc:function bc(){this.b=null},
y:function y(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f2:function f2(){},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a7:function a7(){},
dc:function dc(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hK:function hK(){},
ib:function ib(){}},X={cV:function cV(a,b){this.a=a
this.b=b},db:function db(a,b){this.a=a
this.b=b},fV:function fV(){var _=this
_.d=_.c=_.b=_.a=null},de:function de(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h3:function h3(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ak:function ak(a,b,c){this.a=a
this.b=b
this.c=c},aW:function aW(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hu:function hu(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cb:function cb(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hL:function hL(){},dI:function dI(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iz:function iz(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dN:function dN(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
lD:function(a){var u=new X.fF(),t=new V.ad(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=V.l2()
u.r=t
return u},
l1:function(a){var u,t,s=new X.dn()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gp().n(0,s.geP())
t=new D.y("mover",u,s.b)
t.b=!0
s.a1(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.B().a)){s.c=1.0471975511965976
t=new D.y("fov",t,1.0471975511965976)
t.b=!0
s.a1(t)}t=s.d
if(!(Math.abs(t-0.1)<$.B().a)){s.d=0.1
t=new D.y("near",t,0.1)
t.b=!0
s.a1(t)}t=s.e
if(!(Math.abs(t-2000)<$.B().a)){s.e=2000
t=new D.y("far",t,2000)
t.b=!0
s.a1(t)}return s},
f1:function f1(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
kL:function kL(){},
fF:function fF(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(){this.b=this.a=null},
dn:function dn(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
il:function il(){}},V={
fa:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.ad(u,t,s,1)},
kH:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bk(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.an("null",c)
return C.a.an(C.d.ei(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
bQ:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.m)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.an(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
cL:function(a){return C.d.ir(Math.pow(2,C.S.cm(Math.log(H.p5(a))/Math.log(2))))},
bA:function(){var u=$.lN
return u==null?$.lN=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lM:function(a,b,c){return V.az(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lJ:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.az(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
lK:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.az(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
lL:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.az(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)},
lI:function(a,b,c){var u=c.q(0,Math.sqrt(c.C(c))),t=b.aF(u),s=t.q(0,Math.sqrt(t.C(t))),r=u.aF(s),q=new V.A(a.a,a.b,a.c),p=s.V(0).C(q),o=r.V(0).C(q),n=u.V(0).C(q)
return V.az(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aZ:function(){var u=$.lQ
return u==null?$.lQ=new V.Z(0,0):u},
lR:function(){var u=$.aD
return u==null?$.aD=new V.L(0,0,0):u},
l2:function(){var u=$.lW
return u==null?$.lW=V.lV(0,0,1,1):u},
lV:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dr(a,b,c,d)},
cs:function(){var u=$.ma
return u==null?$.ma=new V.A(0,0,0):u},
o4:function(){var u=$.j0
return u==null?$.j0=new V.A(-1,0,0):u},
l7:function(){var u=$.j1
return u==null?$.j1=new V.A(0,1,0):u},
mb:function(){var u=$.j2
return u==null?$.j2=new V.A(0,0,1):u},
W:function W(a,b,c){this.a=a
this.b=b
this.c=c},
ad:function ad(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fv:function fv(a){this.a=a},
dg:function dg(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aV:function aV(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
L:function L(a,b,c){this.a=a
this.b=b
this.c=c},
al:function al(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dr:function dr(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
K:function K(a,b){this.a=a
this.b=b},
A:function A(a,b,c){this.a=a
this.b=b
this.c=c},
ps:function(a){P.nX(C.P,new V.kB(a))},
nR:function(a){var u=new V.i3()
u.eF(a,!0)
return u},
cW:function cW(){},
kB:function kB(a){this.a=a},
fl:function fl(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fI:function fI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hI:function hI(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hN:function hN(a){this.a=a
this.c=null},
hO:function hO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i3:function i3(){this.b=this.a=null},
i5:function i5(a){this.a=a},
i4:function i4(a){this.a=a},
i6:function i6(a){this.a=a},
mA:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="testCanvas",b1=null,b2=34067,b3="modifiers",b4=V.nR("Test 027"),b5=W.kM()
b5.className="pageLargeCanvas"
b5.id=b0
b4.a.appendChild(b5)
u=[P.h]
b4.dq(H.b(["Test of a back buffer target for rendering to a texture. ","That back buffer texture is applied to a box."],u))
b4.hp(H.b(["shapes"],u))
b4.dq(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(b0)
if(t==null)H.t(P.w("Failed to find an element with the identifier, testCanvas."))
s=E.nW(t,!0,!0,!0,!1)
r=U.lE()
q=new U.dt()
q.r=q.f=q.e=q.d=q.c=q.b=q.a=0
q.sel(0)
q.sea(0,0)
q.see(0)
p=q.d
if(!(Math.abs(p-0.1)<$.B().a)){q.d=0.1
p=new D.y("deltaYaw",p,0.1)
p.b=!0
q.I(p)}p=q.e
if(!(Math.abs(p-0.21)<$.B().a)){q.e=0.21
p=new D.y("deltaPitch",p,0.21)
p.b=!0
q.I(p)}p=q.f
if(!(Math.abs(p-0.32)<$.B().a)){q.f=0.32
p=new D.y("deltaRoll",p,0.32)
p.b=!0
q.I(p)}r.n(0,q)
r.n(0,U.kP(V.lM(0,0,5)))
o=X.l1(r)
n=new X.f1()
n.d=n.c=n.b=n.a=512
n.e=!0
n.f=!1
n.x=n.r=1
n.ch=T.lZ(b1)
n.cx=new V.ad(0,0,0,1)
n.cy=!0
n.db=2000
n.dx=!0
n.dy=V.l2()
n.sav(0,512)
n.saq(0,512)
m=new V.ad(0,0,0,1)
if(!n.cx.t(0,m)){l=n.cx
n.cx=m
q=new D.y("color",l,m)
q.b=!0
n.a1(q)}if(n.cy){n.cy=!1
q=new D.y("clearColor",!0,!1)
q.b=!0
n.a1(q)}q=n.db
if(!(Math.abs(q-2000)<$.B().a)){n.db=2000
q=new D.y("depth",q,2000)
q.b=!0
n.a1(q)}q=n.r
if(!(Math.abs(q-1)<$.B().a)){n.r=1
q=new D.y("autoResizeScalarX",q,1)
q.b=!0
n.a1(q)}q=n.x
if(!(Math.abs(q-1)<$.B().a)){n.x=1
q=new D.y("autoResizeScalarY",q,1)
q.b=!0
n.a1(q)}k=V.l2()
if(!J.G(n.dy,k)){l=n.dy
n.dy=k
q=new D.y("region",l,k)
q.b=!0
n.a1(q)}q=s.f
p=q.a
j=p.createTexture()
p.bindTexture(b2,j)
p.texParameteri(b2,10242,10497)
p.texParameteri(b2,10243,10497)
p.texParameteri(b2,10241,9729)
p.texParameteri(b2,10240,9729)
p.bindTexture(b2,b1)
i=new T.is()
i.a=0
i.b=j
i.c=!1
i.d=0
q.aQ(i,j,"../resources/maskonaive/posx.jpg",34069,!1,!1)
q.aQ(i,j,"../resources/maskonaive/negx.jpg",34070,!1,!1)
q.aQ(i,j,"../resources/maskonaive/posy.jpg",34071,!1,!1)
q.aQ(i,j,"../resources/maskonaive/negy.jpg",34072,!1,!1)
q.aQ(i,j,"../resources/maskonaive/posz.jpg",34073,!1,!1)
q.aQ(i,j,"../resources/maskonaive/negz.jpg",34074,!1,!1)
h=new M.cZ()
h.a=!0
q=E.kS()
g=F.i_()
p=g.a
f=new V.A(-1,-1,1)
f=f.q(0,Math.sqrt(f.C(f)))
e=p.bq(new V.al(1,2,4,6),V.fa(255,0,0),new V.L(-1,-1,0),new V.Z(0,1),f,b1)
f=g.a
p=new V.A(1,-1,1)
p=p.q(0,Math.sqrt(p.C(p)))
d=f.bq(new V.al(0,3,4,6),V.fa(0,0,255),new V.L(1,-1,0),new V.Z(1,1),p,b1)
p=g.a
f=new V.A(1,1,1)
f=f.q(0,Math.sqrt(f.C(f)))
c=p.bq(new V.al(0,2,5,6),V.fa(0,128,0),new V.L(1,1,0),new V.Z(1,0),f,b1)
f=g.a
p=V.aZ()
b=new V.A(-1,1,1)
b=b.q(0,Math.sqrt(b.C(b)))
a=f.bq(new V.al(0,2,4,7),V.fa(255,255,0),new V.L(-1,1,0),p,b,b1)
g.d.dm(H.b([e,d,c,a],[F.b1]))
g.ap()
q.sa8(0,g)
h.e=q
h.saV(b1)
h.sbh(0,b1)
h.sb0(b1)
q=new O.dv()
q.b=1.0471975511965976
q.d=new V.W(1,1,1)
l=q.c
q.c=i
i.gp().n(0,q.gaO())
p=new D.y("boxTexture",l,q.c)
p.b=!0
q.Y(p)
h.sb0(q)
h.sbh(0,n)
h.saV(o)
a0=E.kS()
a0.sa8(0,F.mG())
a1=O.lH()
q=a1.dx
a2=V.l7()
p=U.kP(V.lI(V.lR(),a2,new V.A(0,-1,-1)))
m=new V.W(1,1,1)
f=new D.bv()
f.c=new V.W(1,1,1)
f.a=V.mb()
f.d=V.l7()
f.e=V.o4()
l=f.b
f.b=p
p.gp().n(0,f.geI())
p=new D.y("mover",l,f.b)
p.b=!0
f.aB(p)
if(!f.c.t(0,m)){l=f.c
f.c=m
p=new D.y("color",l,m)
p.b=!0
f.aB(p)}q.n(0,f)
q=a1.r
q.saX(0,new V.W(0,0,1))
q=a1.x
q.saX(0,new V.W(0,1,0))
q=a1.z
q.saX(0,new V.W(1,0,0))
q=a1.z
q.bY(new A.a0(!0,q.c.b,!1))
q.dd(10)
a3=M.lC()
a3.saV(o)
a3.sb0(a1)
a3.sbh(0,n)
a3.e.n(0,a0)
a4=U.lE()
q=s.x
p=new U.dP()
f=U.kO()
f.scI(0,!0)
f.scs(6.283185307179586)
f.scu(0)
f.sa0(0,0)
f.sct(100)
f.sW(0)
f.sca(0.5)
p.b=f
b=p.gaR()
f.gp().n(0,b)
f=U.kO()
f.scI(0,!0)
f.scs(6.283185307179586)
f.scu(0)
f.sa0(0,0)
f.sct(100)
f.sW(0)
f.sca(0.5)
p.c=f
f.gp().n(0,b)
p.d=null
p.r=p.f=p.e=!1
p.y=p.x=2.5
p.Q=4
p.ch=p.cx=!1
p.db=p.cy=0
p.dx=null
p.dy=0
p.fx=p.fr=null
a5=new X.ak(!1,!1,!1)
l=p.d
p.d=a5
f=new D.y(b3,l,a5)
f.b=!0
p.I(f)
f=p.f
if(f!==!1){p.f=!1
f=new D.y("invertX",f,!1)
f.b=!0
p.I(f)}f=p.r
if(f!==!1){p.r=!1
f=new D.y("invertY",f,!1)
f.b=!0
p.I(f)}p.b9(q)
a4.n(0,p)
q=s.x
p=new U.dO()
f=U.kO()
f.scI(0,!0)
f.scs(6.283185307179586)
f.scu(0)
f.sa0(0,0)
f.sct(100)
f.sW(0)
f.sca(0.2)
p.b=f
f.gp().n(0,p.gaR())
p.c=null
p.d=!1
p.e=2.5
p.r=4
p.x=p.y=!1
p.z=0
p.Q=null
p.ch=0
p.cy=p.cx=null
a5=new X.ak(!0,!1,!1)
l=p.c
p.c=a5
f=new D.y(b3,l,a5)
f.b=!0
p.I(f)
p.b9(q)
a4.n(0,p)
q=s.x
p=new U.dQ()
p.c=0.01
p.e=p.d=0
a5=new X.ak(!1,!1,!1)
p.b=a5
f=new D.y(b3,b1,a5)
f.b=!0
p.I(f)
p.b9(q)
a4.n(0,p)
a4.n(0,U.kP(V.lM(0,0,5)))
a6=X.l1(a4)
a7=E.kS()
a7.sa8(0,F.k9(1,b1,b1,1))
a8=O.lH()
q=a8.f
p=n.ch
f=q.c
if(!f.b)q.bY(new A.a0(f.a,!0,!1))
f=q.d
if(f!==p){if(f!=null)f.gp().M(0,q.gaO())
l=q.d
q.d=p
p.gp().n(0,q.gaO())
p=new D.y(q.b+".texture2D",l,q.d)
p.b=!0
q.a.Y(p)}a9=M.lC()
a9.saV(a6)
a9.sb0(a8)
a9.e.n(0,a7)
q=M.aq
p=H.b([h,a3,a9],[q])
f=new M.cX()
f.bm(q)
f.e=!0
f.f=!1
f.r=null
f.b1(f.gfU(),f.gfW())
f.ab(0,p)
q=s.d
if(q!==f){if(q!=null)q.gp().M(0,s.gcR())
s.d=f
f.gp().n(0,s.gcR())
s.cS()}q=new V.hN("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.t("Failed to find shapes for RadioGroup")
q.dk(0,"Cube",new V.kq(a7),!0)
q.ax(0,"Cuboid",new V.kr(a7))
q.ax(0,"Cylinder",new V.ks(a7))
q.ax(0,"Cone",new V.kt(a7))
q.ax(0,"Cylindrical",new V.ku(a7))
q.ax(0,"Sphere",new V.kv(a7))
q.ax(0,"Spherical",new V.kw(a7))
q.ax(0,"Toroid",new V.kx(a7))
q.ax(0,"Knot",new V.ky(a7))
u=s.Q
if(u==null)u=s.Q=D.D()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.X]}]):q
u.push(new V.kz(b4,a8))
V.ps(s)},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
kp:function kp(){},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
ko:function ko(){},
kv:function kv(a){this.a=a},
kw:function kw(a){this.a=a},
kn:function kn(){},
kx:function kx(a){this.a=a},
ky:function ky(a){this.a=a},
kz:function kz(a,b){this.a=a
this.b=b}},U={
kO:function(){var u=new U.fb()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
kP:function(a){var u=new U.cY()
u.a=a
return u},
lE:function(){var u=new U.c1()
u.bm(U.af)
u.b1(u.geK(),u.gfQ())
u.e=null
u.f=V.bA()
u.r=0
return u},
fb:function fb(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cY:function cY(){this.b=this.a=null},
c1:function c1(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
dt:function dt(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dO:function dO(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dP:function dP(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={
lC:function(){var u,t,s=new M.d3()
s.a=!0
u=O.kN(E.aS)
s.e=u
u.b1(s.gfj(),s.gfl())
s.y=s.x=s.r=s.f=null
t=X.lD(null)
s.saV(null)
s.sbh(0,t)
s.sb0(null)
return s},
cX:function cX(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cZ:function cZ(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d3:function d3(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
aq:function aq(){}},A={
ny:function(a,b){var u=a.bc,t=new A.h9(b,u)
t.cQ(b,u)
t.eC(a,b)
return t},
nz:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gau(a3)+a4.gau(a4)+a5.gau(a5)+a6.gau(a6)+a7.gau(a7)+a8.gau(a8)+a9.gau(a9)+b0.gau(b0)+b1.gau(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.m)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.m)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.m)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.m)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.au()
if(j){u=$.b6()
d=new Z.b2(d.a|u.a)}if(i){u=$.b5()
d=new Z.b2(d.a|u.a)}if(h){u=$.b7()
d=new Z.b2(d.a|u.a)}if(g){u=$.b4()
d=new Z.b2(d.a|u.a)}return new A.hc(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k5:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
k6:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.k5(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
oF:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k5(b,t,"emission")
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
oB:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k6(b,t,"ambient")
b.a+="\n"},
oD:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k6(b,t,"diffuse")
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
oG:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k6(b,t,"invDiffuse")
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
oM:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k6(b,t,"specular")
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
oI:function(a,b){var u,t,s
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
oK:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k5(b,t,"reflect")
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
oL:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k5(b,t,"refract")
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
oC:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eS(t)
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
oE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eS(t)
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
oJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eS(t)
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
oN:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eS(t)
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
oH:function(a,b){var u,t
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
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oO:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.T("")
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
A.oF(a,j)
A.oB(a,j)
A.oD(a,j)
A.oG(a,j)
A.oM(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.oK(a,j)
A.oL(a,j)}A.oI(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oC(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oE(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oJ(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.m)(q),++o)A.oN(a,q[o],j)
A.oH(a,j)}q=j.a+="// === Main ===\n"
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
u=a.b
if(u.a||u.b||!1)j.a+="   setAmbientColor();\n"
u=a.c
if(u.a||u.b||!1)j.a+="   setDiffuseColor();\n"
u=a.d
if(u.a||u.b||!1)j.a+="   setInvDiffuseColor();\n"
u=a.e
if(u.a||u.b||!1)j.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.m)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.ad(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.j(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oP:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aZ+"];\n"
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
oR:function(a,b){var u
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
oQ:function(a,b){var u
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
oT:function(a,b){var u,t
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
oU:function(a,b){var u,t
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
oS:function(a,b){var u
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
oV:function(a,b){var u
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
eS:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ad(a,1)},
l4:function(a,b,c,d,e){var u=new A.iG(a,c,e)
u.f=d
P.nv(d,0,P.v)
return u},
cS:function cS(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a){this.a=a},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
h9:function h9(a,b){var _=this
_.iG=_.dH=_.bs=_.bc=_.aZ=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iO=_.iN=_.iM=_.ck=_.cj=_.ci=_.cg=_.cf=_.ce=_.cd=_.cc=_.iL=_.dT=_.dS=_.iK=_.dR=_.dQ=_.dP=_.iJ=_.dO=_.dN=_.dM=_.iI=_.dL=_.dK=_.iH=_.dJ=_.dI=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cT:function cT(a,b){this.a=a
this.b=b},
d0:function d0(a,b){this.a=a
this.b=b},
dp:function dp(a,b){this.a=a
this.b=b},
dx:function dx(a,b){this.a=a
this.b=b},
hc:function hc(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aZ=b3
_.bc=b4
_.bs=b5},
cn:function cn(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
co:function co(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cq:function cq(a,b,c,d,e,f,g,h,i,j){var _=this
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
cr:function cr(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
du:function du(){},
i8:function i8(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dK:function dK(){},
iL:function iL(a){this.a=a},
bl:function bl(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iK:function iK(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
U:function U(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
H:function H(a,b,c){this.a=a
this.c=b
this.d=c},
cm:function cm(a,b,c){this.a=a
this.c=b
this.d=c},
iM:function iM(a,b,c){this.a=a
this.c=b
this.d=c},
cp:function cp(a,b,c){this.a=a
this.c=b
this.d=c},
aa:function aa(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c},
bm:function bm(a,b,c){this.a=a
this.c=b
this.d=c}},F={
k9:function(a,b,c,d){var u=F.i_()
F.cG(u,b,c,d,a,1,0,0,1)
F.cG(u,b,c,d,a,0,1,0,3)
F.cG(u,b,c,d,a,0,0,1,2)
F.cG(u,b,c,d,a,-1,0,0,0)
F.cG(u,b,c,d,a,0,-1,0,0)
F.cG(u,b,c,d,a,0,0,-1,3)
u.ap()
return u},
k0:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cG:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.A(h,g+a1,f+a2)
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
j.d=i}m=F.k0(i)
l=F.k0(h)
k=F.ln(d,a0,new F.k_(j,F.k0(g),F.k0(f),l,m,c),b)
if(k!=null)a.be(k)},
mv:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.i_()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.b1])
q=u.a
p=new V.A(0,0,t)
p=p.q(0,Math.sqrt(p.C(p)))
r.push(q.hs(new V.al(a,-1,-1,-1),new V.ad(1,1,1,1),new V.L(0,0,c),new V.A(0,0,t),new V.Z(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.r(k)
j=new V.A(m,l,t).q(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.dR(new V.al(a,-1,-1,-1),null,new V.ad(i,g,h,1),new V.L(m*k,l*k,c),new V.A(0,0,t),new V.Z(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.dm(r)
return u},
ms:function(a,b,c){return F.mt(!0,a,1,new F.ka(1,c),b)},
mt:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.ln(c,e,new F.kc(d),null)
if(u==null)return
u.ap()
u.c2()
if(b)u.be(F.mv(3,!1,1,new F.kd(d),e))
u.be(F.mv(1,!0,-1,new F.ke(d),e))
return u},
mE:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.kC()
u=F.k9(a,null,new F.kD(t,1),c)
u.c2()
return u},
mG:function(){return F.mu(15,30,0.5,1,new F.kF())},
pm:function(){return F.mu(12,120,0.3,1,new F.km(3,2))},
mu:function(a,b,c,d,e){var u=F.ln(a,b,new F.kb(e,d,b,c),null)
if(u==null)return
u.ap()
u.c2()
return u},
ln:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.i_()
t=H.b([],[F.b1])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.dR(g,g,new V.ad(p,0,0,1),g,g,new V.Z(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c9(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.dR(g,g,new V.ad(j,i,h,1),g,g,new V.Z(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c9(d))}}u.d.hr(a+1,b+1,t)
return u},
c_:function(a,b,c){var u=new F.ba(),t=a.a
if(t==null)H.t(P.w("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.t(P.w("May not create a face with vertices attached to different shapes."))
u.c0(a)
u.c1(b)
u.he(c)
u.a.a.d.b.push(u)
u.a.a.a5()
return u},
nr:function(a,b){var u=new F.c5(),t=a.a
if(t==null)H.t(P.w("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.t(P.w("May not create a line with vertices attached to different shapes."))
u.c0(a)
u.c1(b)
u.a.a.c.b.push(u)
u.a.a.a5()
return u},
i_:function(){var u=new F.hZ(),t=new F.j3(u)
t.b=!1
t.c=H.b([],[F.b1])
u.a=t
t=new F.i2(u)
t.b=H.b([],[F.cf])
u.b=t
t=new F.i1(u)
t.b=H.b([],[F.c5])
u.c=t
t=new F.i0(u)
t.b=H.b([],[F.ba])
u.d=t
u.e=null
return u},
dR:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b1(),r=new F.jb()
r.b=H.b([],[F.cf])
s.b=r
r=new F.j7()
u=[F.c5]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j4()
u=[F.ba]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mU()
s.e=0
r=$.au()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b6().a)!==0?e:t
s.x=(u&$.b5().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.bq().a)!==0?g:t
s.Q=(u&$.mV().a)!==0?c:t
s.ch=(u&$.bS().a)!==0?i:0
s.cx=(u&$.b4().a)!==0?a:t
return s},
k_:function k_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ka:function ka(a,b){this.a=a
this.b=b},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kC:function kC(){},
kD:function kD(a,b){this.a=a
this.b=b},
kF:function kF(){},
km:function km(a,b){this.a=a
this.b=b},
kb:function kb(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ba:function ba(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fy:function fy(){},
i7:function i7(){},
c5:function c5(){this.b=this.a=null},
fX:function fX(){},
iF:function iF(){},
cf:function cf(){this.a=null},
hZ:function hZ(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i0:function i0(a){this.a=a
this.b=null},
i1:function i1(a){this.a=a
this.b=null},
i2:function i2(a){this.a=a
this.b=null},
b1:function b1(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jd:function jd(a){this.a=a},
jc:function jc(a){this.a=a},
j3:function j3(a){this.a=a
this.c=this.b=null},
j4:function j4(){this.d=this.c=this.b=null},
j5:function j5(a,b){this.a=a
this.b=b},
j6:function j6(a,b){this.a=a
this.b=b},
j7:function j7(){this.c=this.b=null},
j9:function j9(){},
j8:function j8(){},
ja:function ja(){},
hC:function hC(){},
jb:function jb(){this.b=null}},T={
lZ:function(a){var u=new T.ir()
u.a=0
u.b=a
u.d=u.c=!1
u.x=u.r=u.f=u.e=0
return u},
dD:function dD(){},
iq:function iq(){},
ir:function ir(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
is:function is(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
it:function it(a){var _=this
_.a=a
_.e=_.d=_.c=null},
iu:function iu(a,b,c,d,e,f,g){var _=this
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
H.kX.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.cg(a)},
i:function(a){return"Instance of '"+H.e(H.ch(a))+"'"}}
J.fR.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaL:1}
J.d9.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.da.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$inp:1}
J.hH.prototype={}
J.bG.prototype={}
J.bf.prototype={
i:function(a){var u=a[$.mI()]
if(u==null)return this.ez(a)
return"JavaScript function for "+H.e(J.a5(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bd.prototype={
cC:function(a,b){if(!!a.fixed$length)H.t(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dq(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.t(P.z("remove"))
for(u=0;u<a.length;++u)if(J.G(a[u],b)){a.splice(u,1)
return!0}return!1},
ab:function(a,b){var u,t
if(!!a.fixed$length)H.t(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.m)(b),++t)a.push(b[t])},
G:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aQ(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hX:function(a){return this.j(a,"")},
hQ:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aQ(a))}return u},
hR:function(a,b,c){return this.hQ(a,b,c,null)},
hP:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aQ(a))}throw H.c(H.fP())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ev:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a_(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a_(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aM(a,0)])
return H.b(a.slice(b,c),[H.aM(a,0)])},
ghO:function(a){if(a.length>0)return a[0]
throw H.c(H.fP())},
gaA:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fP())},
ds:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aQ(a))}return!1},
b3:function(a,b){if(!!a.immutable$list)H.t(P.z("sort"))
H.nU(a,b==null?J.oy():b)},
eu:function(a){return this.b3(a,null)},
P:function(a,b){var u
for(u=0;u<a.length;++u)if(J.G(a[u],b))return!0
return!1},
i:function(a){return P.kU(a,"[","]")},
gT:function(a){return new J.a6(a,a.length)},
gJ:function(a){return H.cg(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.t(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kJ(b,u,null))
if(b<0)throw H.c(P.a_(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bP(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.t(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bP(a,b))
a[b]=c},
$iq:1,
$ii:1,
$io:1}
J.kW.prototype={}
J.a6.prototype={
gD:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.m(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c4.prototype={
aY:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ag(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbu(b)
if(this.gbu(a)===u)return 0
if(this.gbu(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbu:function(a){return a===0?1/a<0:a<0},
ir:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
cm:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
a6:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
ei:function(a,b){var u
if(b>20)throw H.c(P.a_(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbu(a))return"-"+u
return u},
bi:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a_(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.X(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.t(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.u("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gJ:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bk:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eB:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.df(a,b)},
aa:function(a,b){return(a|0)===a?a/b|0:this.df(a,b)},
df:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aT:function(a,b){var u
if(a>0)u=this.de(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hi:function(a,b){if(b<0)throw H.c(H.ag(b))
return this.de(a,b)},
de:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iac:1}
J.d8.prototype={$iv:1}
J.d7.prototype={}
J.be.prototype={
X:function(a,b){if(b<0)throw H.c(H.bP(a,b))
if(b>=a.length)H.t(H.bP(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(b>=a.length)throw H.c(H.bP(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kJ(b,null,null))
return a+b},
b_:function(a,b,c,d){var u,t
c=P.b_(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.t(H.ag(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a9:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.t(H.ag(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.R()
if(b<0)throw H.c(P.dq(b,null))
if(b>c)throw H.c(P.dq(b,null))
if(c>a.length)throw H.c(P.dq(c,null))
return a.substring(b,c)},
ad:function(a,b){return this.v(a,b,null)},
iu:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
an:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bt:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a_(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dZ:function(a,b){return this.bt(a,b,0)},
aY:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ag(b))
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
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ai:function(){return[P.v]},
$ao:function(){return[P.v]}}
H.q.prototype={}
H.dd.prototype={
gT:function(a){return new H.bg(this,this.gm(this))},
bD:function(a,b){return this.ey(0,b)}}
H.bg.prototype={
gD:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.bp(s),q=r.gm(s)
if(t.b!=q)throw H.c(P.aQ(s))
u=t.c
if(typeof q!=="number")return H.r(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.c7.prototype={
gT:function(a){return new H.h7(J.aN(this.a),this.b)},
gm:function(a){return J.ai(this.a)},
L:function(a,b){return this.b.$1(J.eT(this.a,b))},
$ai:function(a,b){return[b]}}
H.fs.prototype={$iq:1,
$aq:function(a,b){return[b]}}
H.h7.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gD(t))
return!0}u.a=null
return!1},
gD:function(a){return this.a}}
H.h8.prototype={
gm:function(a){return J.ai(this.a)},
L:function(a,b){return this.b.$1(J.eT(this.a,b))},
$aq:function(a,b){return[b]},
$add:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.ct.prototype={
gT:function(a){return new H.jf(J.aN(this.a),this.b)}}
H.jf.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gD(u)))return!0
return!1},
gD:function(a){var u=this.a
return u.gD(u)}}
H.d4.prototype={}
H.iQ.prototype={
l:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dL.prototype={}
H.fd.prototype={
i:function(a){return P.l0(this)},
l:function(a,b,c){return H.nf()},
$iS:1}
H.fe.prototype={
gm:function(a){return this.a},
c7:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c7(0,b))return
return this.d0(b)},
d0:function(a){return this.b[a]},
G:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d0(s))}}}
H.iD.prototype={
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
H.hD.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fU.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iP.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kG.prototype={
$1:function(a){if(!!J.Q(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:8}
H.er.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bX.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cM(t==null?"unknown":t)+"'"},
gix:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.im.prototype={}
H.id.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cM(u)+"'"}}
H.bU.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bU))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.cg(this.a)
else u=typeof t!=="object"?J.cQ(t):H.cg(t)
return(u^H.cg(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ch(u))+"'")}}
H.f7.prototype={
i:function(a){return this.a}}
H.hW.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.J.prototype={
gm:function(a){return this.a},
ghW:function(a){return this.a===0},
ga3:function(a){return new H.fZ(this,[H.aM(this,0)])},
giw:function(a){var u=this
return H.nx(u.ga3(u),new H.fT(u),H.aM(u,0),H.aM(u,1))},
c7:function(a,b){var u=this.b
if(u==null)return!1
return this.eY(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bn(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bn(r,b)
s=t==null?null:t.b
return s}else return q.hU(b)},
hU:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.d2(r,s.e0(a))
t=s.e1(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cU(u==null?s.b=s.bT():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cU(t==null?s.c=s.bT():t,b,c)}else s.hV(b,c)},
hV:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bT()
u=r.e0(a)
t=r.d2(q,u)
if(t==null)r.bZ(q,u,[r.bU(a,b)])
else{s=r.e1(t,a)
if(s>=0)t[s].b=b
else t.push(r.bU(a,b))}},
G:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aQ(u))
t=t.c}},
cU:function(a,b,c){var u=this.bn(a,b)
if(u==null)this.bZ(a,b,this.bU(b,c))
else u.b=c},
f8:function(){this.r=this.r+1&67108863},
bU:function(a,b){var u,t=this,s=new H.fY(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f8()
return s},
e0:function(a){return J.cQ(a)&0x3ffffff},
e1:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1},
i:function(a){return P.l0(this)},
bn:function(a,b){return a[b]},
d2:function(a,b){return a[b]},
bZ:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
eY:function(a,b){return this.bn(a,b)!=null},
bT:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bZ(t,u,t)
this.f1(t,u)
return t}}
H.fT.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aM(u,1),args:[H.aM(u,0)]}}}
H.fY.prototype={}
H.fZ.prototype={
gm:function(a){return this.a.a},
gT:function(a){var u=this.a,t=new H.h_(u,u.r)
t.c=u.e
return t}}
H.h_.prototype={
gD:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aQ(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ki.prototype={
$1:function(a){return this.a(a)},
$S:8}
H.kj.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kk.prototype={
$1:function(a){return this.a(a)}}
H.fS.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inN:1}
H.cc.prototype={$icc:1}
H.bi.prototype={$ibi:1}
H.dh.prototype={
gm:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.cd.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.M]},
$ax:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]},
$io:1,
$ao:function(){return[P.M]}}
H.di.prototype={
l:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$iq:1,
$aq:function(){return[P.v]},
$ax:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
H.hv.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hw.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hx.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hy.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hz.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.dj.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.ce.prototype={
gm:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
$ice:1,
$ibF:1}
H.cx.prototype={}
H.cy.prototype={}
H.cz.prototype={}
H.cA.prototype={}
P.jh.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jg.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ji.prototype={
$0:function(){this.a.$0()}}
P.jj.prototype={
$0:function(){this.a.$0()}}
P.ex.prototype={
eN:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bO(new P.jQ(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eO:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bO(new P.jP(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idF:1}
P.jQ.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jP.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eB(u,q)}s.c=r
t.d.$1(s)}}
P.bH.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bI.prototype={
gD:function(a){var u=this.c
if(u==null)return this.b
return u.gD(u)},
w:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.w())return!0
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
else{r=J.aN(u)
if(!!r.$ibI){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jM.prototype={
gT:function(a){return new P.bI(this.a())}}
P.dU.prototype={}
P.dA.prototype={}
P.ih.prototype={}
P.dF.prototype={}
P.jZ.prototype={}
P.k7.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dm():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jx.prototype={
im:function(a){var u,t,s,r=null
try{if(C.f===$.at){a.$0()
return}P.oX(r,r,this,a)}catch(s){u=H.ah(s)
t=H.li(s)
P.mm(r,r,this,u,t)}},
io:function(a,b){var u,t,s,r=null
try{if(C.f===$.at){a.$1(b)
return}P.oY(r,r,this,a,b)}catch(s){u=H.ah(s)
t=H.li(s)
P.mm(r,r,this,u,t)}},
ip:function(a,b){return this.io(a,b,null)},
hw:function(a){return new P.jy(this,a)},
dz:function(a,b){return new P.jz(this,a,b)}}
P.jy.prototype={
$0:function(){return this.a.im(this.b)}}
P.jz.prototype={
$1:function(a){return this.a.ip(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.ju.prototype={
gT:function(a){var u=new P.e8(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
P:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eX(b)
return t}},
eX:function(a){var u=this.d
if(u==null)return!1
return this.bK(this.d1(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cV(u==null?s.b=P.l9():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cV(t==null?s.c=P.l9():t,b)}else return s.eR(0,b)},
eR:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.l9()
u=s.cX(b)
t=r[u]
if(t==null)r[u]=[s.bH(b)]
else{if(s.bK(t,b)>=0)return!1
t.push(s.bH(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h4(this.c,b)
else return this.h3(0,b)},
h3:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d1(r,b)
t=s.bK(u,b)
if(t<0)return!1
s.dh(u.splice(t,1)[0])
return!0},
cV:function(a,b){if(a[b]!=null)return!1
a[b]=this.bH(b)
return!0},
h4:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dh(u)
delete a[b]
return!0},
cW:function(){this.r=1073741823&this.r+1},
bH:function(a){var u,t=this,s=new P.jv(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cW()
return s},
dh:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cW()},
cX:function(a){return J.cQ(a)&1073741823},
d1:function(a,b){return a[this.cX(b)]},
bK:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.G(a[t].a,b))return t
return-1}}
P.jv.prototype={}
P.e8.prototype={
gD:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aQ(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fO.prototype={}
P.h0.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:3}
P.h1.prototype={$iq:1,$ii:1,$io:1}
P.x.prototype={
gT:function(a){return new H.bg(a,this.gm(a))},
L:function(a,b){return this.h(a,b)},
it:function(a,b){var u,t,s=this,r=H.b([],[H.pe(s,a,"x",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.r(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
is:function(a){return this.it(a,!0)},
hM:function(a,b,c,d){var u
P.b_(b,c,this.gm(a))
for(u=b;u<c;++u)this.l(a,u,d)},
i:function(a){return P.kU(a,"[","]")}}
P.h4.prototype={}
P.h5.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a2.prototype={
G:function(a,b){var u,t
for(u=J.aN(this.ga3(a));u.w();){t=u.gD(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.ai(this.ga3(a))},
i:function(a){return P.l0(a)},
$iS:1}
P.jR.prototype={
l:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h6.prototype={
h:function(a,b){return J.bT(this.a,b)},
l:function(a,b,c){J.kI(this.a,b,c)},
G:function(a,b){J.lr(this.a,b)},
gm:function(a){return J.ai(this.a)},
i:function(a){return J.a5(this.a)},
$iS:1}
P.dM.prototype={}
P.jB.prototype={
ab:function(a,b){var u
for(u=J.aN(b);u.w();)this.n(0,u.gD(u))},
i:function(a){return P.kU(this,"{","}")},
L:function(a,b){var u,t,s
P.lU(b,"index")
for(u=P.oe(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
$iq:1,
$ii:1}
P.e9.prototype={}
P.eD.prototype={}
P.f3.prototype={
i_:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b_(a0,a1,b.length)
u=$.mX()
if(typeof a1!=="number")return H.r(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.F(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kh(C.a.F(b,n))
j=H.kh(C.a.F(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.T("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.bC(m)
s=n
continue}}throw H.c(P.V("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.lv(b,p,a1,q,o,f)
else{e=C.c.bk(f-1,4)+1
if(e===1)throw H.c(P.V(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.b_(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lv(b,p,a1,q,o,d)
else{e=C.c.bk(d,4)
if(e===1)throw H.c(P.V(c,b,a1))
if(e>1)b=C.a.b_(b,a1,a1,e===2?"==":"=")}return b}}
P.f4.prototype={}
P.f9.prototype={}
P.ff.prototype={}
P.fu.prototype={}
P.fL.prototype={
i:function(a){return this.a}}
P.fK.prototype={
eZ:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.T("")
if(r>b)q.a+=C.a.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.n7(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iY.prototype={
ghL:function(){return C.N}}
P.j_.prototype={
c8:function(a){var u,t,s,r=P.b_(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jX(t)
if(s.f3(a,0,r)!==r)s.dj(J.n3(a,r-1),0)
return new Uint8Array(t.subarray(0,H.ov(0,s.b,t.length)))}}
P.jX.prototype={
dj:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
f3:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.X(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.F(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dj(r,C.a.F(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iZ.prototype={
c8:function(a){var u,t,s,r,q,p,o,n,m=P.o_(!1,a,0,null)
if(m!=null)return m
u=P.b_(0,null,J.ai(a))
t=P.mo(a,0,u)
if(t>0){s=P.ck(a,0,t)
if(t===u)return s
r=new P.T(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.T("")
o=new P.jW(!1,r)
o.c=p
o.hz(a,q,u)
if(o.e>0){H.t(P.V("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bC(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jW.prototype={
hz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.bp(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ag()
if((r&192)!==128){q=P.V(k+C.c.bi(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.V("Overlong encoding of 0x"+C.c.bi(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.c.bi(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bC(j)
l.c=!1}if(typeof c!=="number")return H.r(c)
q=s<c
for(;q;){p=P.mo(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.ck(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.R()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.c.bi(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.V(k+C.c.bi(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aL.prototype={}
P.ae.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ae&&this.a===b.a&&!0},
aY:function(a,b){return C.c.aY(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aT(u,30))&1073741823},
i:function(a){var u=this,t=P.ng(H.nJ(u)),s=P.d_(H.nH(u)),r=P.d_(H.nD(u)),q=P.d_(H.nE(u)),p=P.d_(H.nG(u)),o=P.d_(H.nI(u)),n=P.nh(H.nF(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.b9.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.b9&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aY:function(a,b){return C.c.aY(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fr(),q=this.a
if(q<0)return"-"+new P.b9(0-q).i(0)
u=r.$1(C.c.aa(q,6e7)%60)
t=r.$1(C.c.aa(q,1e6)%60)
s=new P.fq().$1(q%1e6)
return""+C.c.aa(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fq.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fr.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bw.prototype={}
P.dm.prototype={
i:function(a){return"Throw of null."}}
P.an.prototype={
gbJ:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbI:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbJ()+o+u
if(!q.a)return t
s=q.gbI()
r=P.kT(q.b)
return t+s+": "+r}}
P.bD.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fN.prototype={
gbJ:function(){return"RangeError"},
gbI:function(){var u,t=this.b
if(typeof t!=="number")return t.R()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gm:function(a){return this.f}}
P.iR.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iN.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cj.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fc.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kT(u)+"."}}
P.hG.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dy.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fk.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e1.prototype={
i:function(a){return"Exception: "+this.a}}
P.fE.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.F(f,q)
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
k=""}j=C.a.v(f,m,n)
return h+l+j+k+"\n"+C.a.u(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fG.prototype={}
P.v.prototype={}
P.i.prototype={
bD:function(a,b){return new H.ct(this,b,[H.lh(this,"i",0)])},
gm:function(a){var u,t=this.gT(this)
for(u=0;t.w();)++u
return u},
gaM:function(a){var u,t=this.gT(this)
if(!t.w())throw H.c(H.fP())
u=t.gD(t)
if(t.w())throw H.c(H.nm())
return u},
L:function(a,b){var u,t,s
P.lU(b,"index")
for(u=this.gT(this),t=0;u.w();){s=u.gD(u)
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
i:function(a){return P.nl(this,"(",")")}}
P.fQ.prototype={}
P.o.prototype={$iq:1,$ii:1}
P.S.prototype={}
P.bj.prototype={
gJ:function(a){return P.a3.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a3.prototype={constructor:P.a3,$ia3:1,
t:function(a,b){return this===b},
gJ:function(a){return H.cg(this)},
i:function(a){return"Instance of '"+H.e(H.ch(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.T.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iW.prototype={
$2:function(a,b){var u,t,s,r=J.cJ(b).dZ(b,"=")
if(r===-1){if(b!=="")J.kI(a,P.ld(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ad(b,r+1)
s=this.a
J.kI(a,P.ld(u,0,u.length,s,!0),P.ld(t,0,t.length,s,!0))}return a}}
P.iT.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv4 address, "+a,this.a,b))}}
P.iU.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iV.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eR(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.R()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bJ.prototype={
gek:function(){return this.b},
gcn:function(a){var u=this.c
if(u==null)return""
if(C.a.a9(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbx:function(a){var u=this.d
if(u==null)return P.mf(this.a)
return u},
gcA:function(a){var u=this.f
return u==null?"":u},
gdU:function(){var u=this.r
return u==null?"":u},
ec:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a9(u,"/"))u="/"+u
s=P.lb(null,0,0,b)
return new P.bJ(q,o,m,n,u,s,r.r)},
gcB:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dM(P.m6(t==null?"":t),[u,u])
t=u}return t},
gdV:function(){return this.c!=null},
gdY:function(){return this.f!=null},
gdW:function(){return this.r!=null},
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
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.Q(b).$il5)if(s.a==b.gbE())if(s.c!=null===b.gdV())if(s.b==b.gek())if(s.gcn(s)==b.gcn(b))if(s.gbx(s)==b.gbx(b))if(s.e===b.ge9(b)){u=s.f
t=u==null
if(!t===b.gdY()){if(t)u=""
if(u===b.gcA(b)){u=s.r
t=u==null
if(!t===b.gdW()){if(t)u=""
u=u===b.gdU()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$il5:1,
gbE:function(){return this.a},
ge9:function(a){return this.e}}
P.jS.prototype={
$1:function(a){throw H.c(P.V("Invalid port",this.a,this.b+1))}}
P.jT.prototype={
$1:function(a){return P.eE(C.X,a,C.e,!1)}}
P.jV.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eE(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eE(C.h,b,C.e,!0))}}}
P.jU.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aN(b),t=this.a;u.w();)t.$2(a,u.gD(u))}}
P.iS.prototype={
gej:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bt(u,"?",o)
s=u.length
if(t>=0){r=P.cF(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jn("data",p,p,p,P.cF(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k2.prototype={
$1:function(a){return new Uint8Array(96)}}
P.k1.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.n4(u,0,96,b)
return u},
$S:18}
P.k3.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.F(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k4.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.F(b,0),t=C.a.F(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jE.prototype={
gdV:function(){return this.c>0},
gdX:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.r(t)
t=u+1<t
u=t}else u=!1
return u},
gdY:function(){var u=this.f
if(typeof u!=="number")return u.R()
return u<this.r},
gdW:function(){return this.r<this.a.length},
gd3:function(){return this.b===4&&C.a.a9(this.a,"http")},
gd4:function(){return this.b===5&&C.a.a9(this.a,"https")},
gbE:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd3())q=t.x="http"
else if(t.gd4()){t.x="https"
q="https"}else if(q===4&&C.a.a9(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a9(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
gek:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gcn:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbx:function(a){var u,t=this
if(t.gdX()){u=t.d
if(typeof u!=="number")return u.B()
return P.eR(C.a.v(t.a,u+1,t.e),null,null)}if(t.gd3())return 80
if(t.gd4())return 443
return 0},
ge9:function(a){return C.a.v(this.a,this.e,this.f)},
gcA:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.R()
return u<t?C.a.v(this.a,u+1,t):""},
gdU:function(){var u=this.r,t=this.a
return u<t.length?C.a.ad(t,u+1):""},
gcB:function(){var u=this,t=u.f
if(typeof t!=="number")return t.R()
if(t>=u.r)return C.Y
t=P.h
return new P.dM(P.m6(u.gcA(u)),[t,t])},
ec:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbE(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.gdX()?p.gbx(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a9(t,"/"))t="/"+t
r=P.lb(o,0,0,b)
s=p.r
q=s<l.length?C.a.ad(l,s+1):o
return new P.bJ(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.Q(b).$il5&&this.a===b.i(0)},
i:function(a){return this.a},
$il5:1}
P.jn.prototype={}
W.p.prototype={}
W.eU.prototype={
gm:function(a){return a.length}}
W.eV.prototype={
i:function(a){return String(a)}}
W.eW.prototype={
i:function(a){return String(a)}}
W.bs.prototype={$ibs:1}
W.bt.prototype={$ibt:1}
W.bu.prototype={
cJ:function(a,b,c){if(c!=null)return a.getContext(b,P.p6(c))
return a.getContext(b)},
en:function(a,b){return this.cJ(a,b,null)},
$ibu:1}
W.b8.prototype={
gm:function(a){return a.length}}
W.fg.prototype={
gm:function(a){return a.length}}
W.I.prototype={$iI:1}
W.bY.prototype={
gm:function(a){return a.length}}
W.fh.prototype={}
W.aj.prototype={}
W.aw.prototype={}
W.fi.prototype={
gm:function(a){return a.length}}
W.fj.prototype={
gm:function(a){return a.length}}
W.fm.prototype={
gm:function(a){return a.length}}
W.ao.prototype={$iao:1}
W.fn.prototype={
i:function(a){return String(a)}}
W.d1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[[P.a9,P.ac]]},
$iC:1,
$aC:function(){return[[P.a9,P.ac]]},
$ax:function(){return[[P.a9,P.ac]]},
$ii:1,
$ai:function(){return[[P.a9,P.ac]]},
$io:1,
$ao:function(){return[[P.a9,P.ac]]}}
W.d2.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gav(a))+" x "+H.e(this.gaq(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia9&&a.left===u.gbv(b)&&a.top===u.gbA(b)&&this.gav(a)===u.gav(b)&&this.gaq(a)===u.gaq(b)},
gJ:function(a){return W.md(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gav(a)),C.d.gJ(this.gaq(a)))},
gdA:function(a){return a.bottom},
gaq:function(a){return a.height},
gbv:function(a){return a.left},
gcF:function(a){return a.right},
gbA:function(a){return a.top},
gav:function(a){return a.width},
$ia9:1,
$aa9:function(){return[P.ac]}}
W.fo.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[P.h]},
$iC:1,
$aC:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
W.fp.prototype={
gm:function(a){return a.length}}
W.jl.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gT:function(a){var u=this.is(this)
return new J.a6(u,u.length)},
$aq:function(){return[W.R]},
$ax:function(){return[W.R]},
$ai:function(){return[W.R]},
$ao:function(){return[W.R]}}
W.R.prototype={
ghv:function(a){return new W.jo(a)},
gc6:function(a){return new W.jl(a,a.children)},
gdC:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.R()
if(s<0)s=-s*0
if(typeof r!=="number")return r.R()
if(r<0)r=-r*0
return new P.a9(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
al:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lB
if(u==null){u=H.b([],[W.aX])
t=new W.dl(u)
u.push(W.mc(null))
u.push(W.me())
$.lB=t
d=t}else d=u
u=$.lA
if(u==null){u=new W.eF(d)
$.lA=u
c=u}else{u.a=d
c=u}}if($.aR==null){u=document
t=u.implementation.createHTMLDocument("")
$.aR=t
$.kR=t.createRange()
s=$.aR.createElement("base")
s.href=u.baseURI
$.aR.head.appendChild(s)}u=$.aR
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aR
if(!!this.$ibt)r=u.body
else{r=u.createElement(a.tagName)
$.aR.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.P(C.V,a.tagName)){$.kR.selectNodeContents(r)
q=$.kR.createContextualFragment(b)}else{r.innerHTML=b
q=$.aR.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aR.body
if(r==null?u!=null:r!==u)J.lt(r)
c.cK(q)
document.adoptNode(q)
return q},
hC:function(a,b,c){return this.al(a,b,c,null)},
ep:function(a,b){a.textContent=null
a.appendChild(this.al(a,b,null,null))},
$iR:1,
gef:function(a){return a.tagName}}
W.ft.prototype={
$1:function(a){return!!J.Q(a).$iR}}
W.k.prototype={$ik:1}
W.f.prototype={
hq:function(a,b,c,d){if(c!=null)this.eS(a,b,c,!1)},
eS:function(a,b,c,d){return a.addEventListener(b,H.bO(c,1),!1)}}
W.ap.prototype={$iap:1}
W.c0.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ap]},
$iC:1,
$aC:function(){return[W.ap]},
$ax:function(){return[W.ap]},
$ii:1,
$ai:function(){return[W.ap]},
$io:1,
$ao:function(){return[W.ap]},
$ic0:1}
W.fz.prototype={
gm:function(a){return a.length}}
W.fD.prototype={
gm:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fJ.prototype={
gm:function(a){return a.length}}
W.c2.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iC:1,
$aC:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aT.prototype={$iaT:1,
gdD:function(a){return a.data}}
W.c3.prototype={$ic3:1}
W.bz.prototype={$ibz:1}
W.h2.prototype={
i:function(a){return String(a)}}
W.ho.prototype={
gm:function(a){return a.length}}
W.ca.prototype={$ica:1}
W.hp.prototype={
h:function(a,b){return P.b3(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.G(a,new W.hq(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa2:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
W.hq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hr.prototype={
h:function(a,b){return P.b3(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.G(a,new W.hs(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa2:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
W.hs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.ht.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aA]},
$iC:1,
$aC:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ii:1,
$ai:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.a4.prototype={
gaM:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lX("No elements"))
if(t>1)throw H.c(P.lX("More than one element"))
return u.firstChild},
ab:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gT:function(a){var u=this.a.childNodes
return new W.d5(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$aq:function(){return[W.E]},
$ax:function(){return[W.E]},
$ai:function(){return[W.E]},
$ao:function(){return[W.E]}}
W.E.prototype={
ih:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ik:function(a,b){var u,t
try{u=a.parentNode
J.n1(u,b,a)}catch(t){H.ah(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.ex(a):u},
h6:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dk.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iC:1,
$aC:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.aC.prototype={$iaC:1,
gm:function(a){return a.length}}
W.hJ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aC]},
$iC:1,
$aC:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$io:1,
$ao:function(){return[W.aC]}}
W.hU.prototype={
h:function(a,b){return P.b3(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.G(a,new W.hV(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa2:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
W.hV.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hX.prototype={
gm:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.i9.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aE]},
$iC:1,
$aC:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$io:1,
$ao:function(){return[W.aE]}}
W.aF.prototype={$iaF:1}
W.ia.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aF]},
$iC:1,
$aC:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ii:1,
$ai:function(){return[W.aF]},
$io:1,
$ao:function(){return[W.aF]}}
W.aG.prototype={$iaG:1,
gm:function(a){return a.length}}
W.ie.prototype={
h:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
G:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.b([],[P.h])
this.G(a,new W.ig(u))
return u},
gm:function(a){return a.length},
$aa2:function(){return[P.h,P.h]},
$iS:1,
$aS:function(){return[P.h,P.h]}}
W.ig.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.dB.prototype={
al:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=W.ni("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a4(t).ab(0,new W.a4(u))
return t}}
W.ij.prototype={
al:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaM(u)
s.toString
u=new W.a4(s)
r=u.gaM(u)
t.toString
r.toString
new W.a4(t).ab(0,new W.a4(r))
return t}}
W.ik.prototype={
al:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bF(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.C.al(u.createElement("table"),b,c,d)
u.toString
u=new W.a4(u)
s=u.gaM(u)
t.toString
s.toString
new W.a4(t).ab(0,new W.a4(s))
return t}}
W.cl.prototype={$icl:1}
W.aH.prototype={$iaH:1}
W.as.prototype={$ias:1}
W.io.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.as]},
$iC:1,
$aC:function(){return[W.as]},
$ax:function(){return[W.as]},
$ii:1,
$ai:function(){return[W.as]},
$io:1,
$ao:function(){return[W.as]}}
W.ip.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aH]},
$iC:1,
$aC:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$io:1,
$ao:function(){return[W.aH]}}
W.iw.prototype={
gm:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bE.prototype={$ibE:1}
W.iA.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aI]},
$iC:1,
$aC:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$io:1,
$ao:function(){return[W.aI]}}
W.iB.prototype={
gm:function(a){return a.length}}
W.bk.prototype={}
W.iX.prototype={
i:function(a){return String(a)}}
W.je.prototype={
gm:function(a){return a.length}}
W.bn.prototype={
ghF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibn:1}
W.cu.prototype={
h7:function(a,b){return a.requestAnimationFrame(H.bO(b,1))},
f2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jm.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.I]},
$iC:1,
$aC:function(){return[W.I]},
$ax:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$io:1,
$ao:function(){return[W.I]}}
W.dX.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.Q(b)
return!!u.$ia9&&a.left===u.gbv(b)&&a.top===u.gbA(b)&&a.width===u.gav(b)&&a.height===u.gaq(b)},
gJ:function(a){return W.md(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaq:function(a){return a.height},
gav:function(a){return a.width}}
W.jr.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ax]},
$iC:1,
$aC:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.ee.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.E]},
$iC:1,
$aC:function(){return[W.E]},
$ax:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$io:1,
$ao:function(){return[W.E]}}
W.jF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.aG]},
$iC:1,
$aC:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ii:1,
$ai:function(){return[W.aG]},
$io:1,
$ao:function(){return[W.aG]}}
W.jK.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iq:1,
$aq:function(){return[W.ar]},
$iC:1,
$aC:function(){return[W.ar]},
$ax:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]}}
W.jk.prototype={
G:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa2:function(){return[P.h,P.h]},
$aS:function(){return[P.h,P.h]}}
W.jo.prototype={
h:function(a,b){return this.a.getAttribute(b)},
l:function(a,b,c){this.a.setAttribute(b,c)},
gm:function(a){return this.ga3(this).length}}
W.jp.prototype={}
W.jq.prototype={
$1:function(a){return this.a.$1(a)}}
W.cv.prototype={
eG:function(a){var u
if($.cw.ghW($.cw)){for(u=0;u<262;++u)$.cw.l(0,C.U[u],W.pg())
for(u=0;u<12;++u)$.cw.l(0,C.p[u],W.ph())}},
aU:function(a){return $.mY().P(0,W.bZ(a))},
ay:function(a,b,c){var u=$.cw.h(0,H.e(W.bZ(a))+"::"+b)
if(u==null)u=$.cw.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaX:1}
W.N.prototype={
gT:function(a){return new W.d5(a,this.gm(a))}}
W.dl.prototype={
aU:function(a){return C.b.ds(this.a,new W.hB(a))},
ay:function(a,b,c){return C.b.ds(this.a,new W.hA(a,b,c))},
$iaX:1}
W.hB.prototype={
$1:function(a){return a.aU(this.a)}}
W.hA.prototype={
$1:function(a){return a.ay(this.a,this.b,this.c)}}
W.em.prototype={
eM:function(a,b,c,d){var u,t,s
this.a.ab(0,c)
u=b.bD(0,new W.jC())
t=b.bD(0,new W.jD())
this.b.ab(0,u)
s=this.c
s.ab(0,C.w)
s.ab(0,t)},
aU:function(a){return this.a.P(0,W.bZ(a))},
ay:function(a,b,c){var u=this,t=W.bZ(a),s=u.c
if(s.P(0,H.e(t)+"::"+b))return u.d.ht(c)
else if(s.P(0,"*::"+b))return u.d.ht(c)
else{s=u.b
if(s.P(0,H.e(t)+"::"+b))return!0
else if(s.P(0,"*::"+b))return!0
else if(s.P(0,H.e(t)+"::*"))return!0
else if(s.P(0,"*::*"))return!0}return!1},
$iaX:1}
W.jC.prototype={
$1:function(a){return!C.b.P(C.p,a)}}
W.jD.prototype={
$1:function(a){return C.b.P(C.p,a)}}
W.jN.prototype={
ay:function(a,b,c){if(this.eA(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.P(0,b)
return!1}}
W.jO.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jL.prototype={
aU:function(a){var u=J.Q(a)
if(!!u.$ici)return!1
u=!!u.$il
if(u&&W.bZ(a)==="foreignObject")return!1
if(u)return!0
return!1},
ay:function(a,b,c){if(b==="is"||C.a.a9(b,"on"))return!1
return this.aU(a)},
$iaX:1}
W.d5.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bT(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gD:function(a){return this.d}}
W.aX.prototype={}
W.jA.prototype={}
W.eF.prototype={
cK:function(a){new W.jY(this).$2(a,null)},
b8:function(a,b){if(b==null)J.lt(a)
else b.removeChild(a)},
hc:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.n5(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ah(r)}t="element unprintable"
try{t=J.a5(a)}catch(r){H.ah(r)}try{s=W.bZ(a)
this.hb(a,b,p,t,s,o,n)}catch(r){if(H.ah(r) instanceof P.an)throw r
else{this.b8(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hb:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b8(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aU(a)){p.b8(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.ay(a,"is",g)){p.b8(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.b(u.slice(0),[H.aM(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.ay(a,J.n8(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.Q(a).$icl)p.cK(a.content)}}
W.jY.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hc(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b8(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ah(s)
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
W.e2.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
W.ed.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.el.prototype={}
W.cB.prototype={}
W.cC.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cD.prototype={}
W.cE.prototype={}
W.ey.prototype={}
W.ez.prototype={}
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
P.jG.prototype={
cl:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bC:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.Q(a)
if(!!u.$iae)return new Date(a.a)
if(!!u.$inN)throw H.c(P.iO("structured clone of RegExp"))
if(!!u.$iap)return a
if(!!u.$ibs)return a
if(!!u.$ic0)return a
if(!!u.$iaT)return a
if(!!u.$icc||!!u.$ibi||!!u.$ica)return a
if(!!u.$iS){t=p.cl(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.G(a,new P.jI(o,p))
return o.a}if(!!u.$io){t=p.cl(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hB(a,t)}if(!!u.$inp){t=p.cl(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hS(a,new P.jJ(o,p))
return o.b}throw H.c(P.iO("structured clone of other type"))},
hB:function(a,b){var u,t=J.bp(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.r(s)
u=0
for(;u<s;++u){q=this.bC(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jI.prototype={
$2:function(a,b){this.a.a[a]=this.b.bC(b)},
$S:3}
P.jJ.prototype={
$2:function(a,b){this.a.b[a]=this.b.bC(b)},
$S:3}
P.eC.prototype={$iaT:1,
gdD:function(a){return this.a}}
P.k8.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jH.prototype={
hS:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fA.prototype={
gbo:function(){var u=this.b,t=H.lh(u,"x",0)
return new H.c7(new H.ct(u,new P.fB(),[t]),new P.fC(),[t,W.R])},
l:function(a,b,c){var u=this.gbo()
J.n6(u.b.$1(J.eT(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.ai(this.gbo().a)},
h:function(a,b){var u=this.gbo()
return u.b.$1(J.eT(u.a,b))},
gT:function(a){var u=P.l_(this.gbo(),!1,W.R)
return new J.a6(u,u.length)},
$aq:function(){return[W.R]},
$ax:function(){return[W.R]},
$ai:function(){return[W.R]},
$ao:function(){return[W.R]}}
P.fB.prototype={
$1:function(a){return!!J.Q(a).$iR}}
P.fC.prototype={
$1:function(a){return H.j(a,"$iR")}}
P.jw.prototype={
gcF:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return u+t},
gdA:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.r(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.Q(b)
if(!!u.$ia9){t=q.a
if(t==u.gbv(b)){s=q.b
if(s==u.gbA(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.r(r)
if(t+r===u.gcF(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.r(t)
u=s+t===u.gdA(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cQ(t),r=u.b,q=J.cQ(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.r(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.r(t)
t=C.c.gJ(r+t)
return P.od(P.jt(P.jt(P.jt(P.jt(0,s),q),p),t))}}
P.a9.prototype={
gbv:function(a){return this.a},
gbA:function(a){return this.b},
gav:function(a){return this.c},
gaq:function(a){return this.d}}
P.aU.prototype={$iaU:1}
P.fW.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aU]},
$ax:function(){return[P.aU]},
$ii:1,
$ai:function(){return[P.aU]},
$io:1,
$ao:function(){return[P.aU]}}
P.aY.prototype={$iaY:1}
P.hE.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.aY]},
$ax:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]},
$io:1,
$ao:function(){return[P.aY]}}
P.hM.prototype={
gm:function(a){return a.length}}
P.ci.prototype={$ici:1}
P.ii.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.h]},
$ax:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$io:1,
$ao:function(){return[P.h]}}
P.l.prototype={
gc6:function(a){return new P.fA(a,new W.a4(a))},
al:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aX])
p.push(W.mc(null))
p.push(W.me())
p.push(new W.jL())
c=new W.eF(new W.dl(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hC(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a4(s)
q=p.gaM(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b0.prototype={$ib0:1}
P.iC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[P.b0]},
$ax:function(){return[P.b0]},
$ii:1,
$ai:function(){return[P.b0]},
$io:1,
$ao:function(){return[P.b0]}}
P.e6.prototype={}
P.e7.prototype={}
P.eh.prototype={}
P.ei.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.bF.prototype={$iq:1,
$aq:function(){return[P.v]},
$ii:1,
$ai:function(){return[P.v]},
$io:1,
$ao:function(){return[P.v]}}
P.eY.prototype={
gm:function(a){return a.length}}
P.eZ.prototype={
h:function(a,b){return P.b3(a.get(b))},
G:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b3(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.G(a,new P.f_(u))
return u},
gm:function(a){return a.size},
l:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa2:function(){return[P.h,null]},
$iS:1,
$aS:function(){return[P.h,null]}}
P.f_.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f0.prototype={
gm:function(a){return a.length}}
P.br.prototype={}
P.hF.prototype={
gm:function(a){return a.length}}
P.dV.prototype={}
P.ds.prototype={
eg:function(a,b,c,d,e,f,g,h,i,j){var u,t=i==null
if(!t&&h!=null&&typeof g==="number"&&Math.floor(g)===g){a.texImage2D(b,c,d,e,f,g,h,i,j)
return}u=J.Q(g)
if(!!u.$iaT&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,P.p7(g))
return}if(!!u.$ic3&&h==null&&t&&!0){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cR("Incorrect number or type of arguments"))},
iq:function(a,b,c,d,e,f,g){return this.eg(a,b,c,d,e,f,g,null,null,null)}}
P.ic.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return P.b3(a.item(b))},
l:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$iq:1,
$aq:function(){return[[P.S,,,]]},
$ax:function(){return[[P.S,,,]]},
$ii:1,
$ai:function(){return[[P.S,,,]]},
$io:1,
$ao:function(){return[[P.S,,,]]}}
P.ep.prototype={}
P.eq.prototype={}
K.aO.prototype={
aH:function(a,b){return!0},
i:function(a){return"all"}}
K.d6.prototype={
aH:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)if(u[s].aH(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bh.prototype={}
K.a8.prototype={
aH:function(a,b){return!this.ew(0,b)},
i:function(a){return"!["+this.cN(0)+"]"}}
K.hP.prototype={
aH:function(a,b){if(typeof b!=="number")return H.r(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bC(this.a),t=H.bC(this.b)
return u+".."+t}}
K.hY.prototype={
eE:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.w("May not create a Set with zero characters."))
u=P.v
t=new H.J([u,P.aL])
for(s=new H.bg(a,a.gm(a));s.w();)t.l(0,s.d,!0)
r=P.l_(t.ga3(t),!0,u)
C.b.eu(r)
this.a=r},
aH:function(a,b){return C.b.P(this.a,b)},
i:function(a){return P.ck(this.a,0,null)}}
L.dz.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dJ(this.a.k(0,b))
r.a=H.b([],[K.bh])
r.c=!1
this.c.push(r)
return r},
hN:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.aH(0,a))return r}return},
i:function(a){return this.b},
dg:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.P(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga3(n),n=n.gT(n);n.w();){t=n.gD(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.P(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.m)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dG.prototype={
i:function(a){var u=H.lm(this.b,"\n","\\n"),t=H.lm(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dH.prototype={
aJ:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.m)(c),++t){s=c[t]
this.c.l(0,s,b)}},
i:function(a){return this.b}}
L.ix.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dz(this,b)
u.c=H.b([],[L.dJ])
this.a.l(0,b,u)}return u},
U:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dH(a)
u=P.h
t.c=new H.J([u,u])
this.b.l(0,a,t)}return t},
cG:function(a){return this.iv(a)},
iv:function(a){var u=this
return P.oA(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cG(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.v]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cC(c,0)
else{if(!t.w()){s=3
break}l=t.d}d.push(l);++o
k=g.hN(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.ck(d,0,null)
throw H.c(P.w("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.t(P.z("removeRange"))
P.b_(0,m,d.length)
d.splice(0,m-0)
C.b.ab(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.P(0,p.a)?7:8
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
if(g.d!=null){j=P.ck(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dG(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.P(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.ob()
case 1:return P.oc(q)}}},L.dG)},
i:function(a){var u,t=new P.T(""),s=this.d
if(s!=null)t.a=s.dg()+"\n"
for(s=this.a,s=s.giw(s),s=s.gT(s);s.w();){u=s.gD(s)
if(u!=this.d)t.a+=u.dg()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dJ.prototype={
i:function(a){return this.b.b+": "+this.cN(0)}}
O.aP.prototype={
bm:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cL:function(a,b,c){this.b=b
this.c=a},
b1:function(a,b){return this.cL(a,null,b)},
d8:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
d5:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gT:function(a){var u=this.a
return new J.a6(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.lh(s,"aP",0)]
if(s.d8(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.d5(t,H.b([b],r))}},
ab:function(a,b){var u,t
if(this.d8(b)){u=this.a
t=u.length
C.b.ab(u,b)
this.d5(t,b)}},
$ii:1}
O.c9.prototype={
gm:function(a){return this.a.length},
gp:function(){var u=this.b
return u==null?this.b=D.D():u},
aN:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.b.gaA(u)
else return V.bA()},
bz:function(a){var u=this.a
if(a==null)u.push(V.bA())
else u.push(a)
this.aN()},
aI:function(){var u=this.a
if(u.length>0){u.pop()
this.aN()}}}
E.f5.prototype={}
E.aS.prototype={
sa8:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gp().M(0,s.ge6())
u=s.c
if(u!=null)u.gp().n(0,s.ge6())
t=new D.y("shape",r,s.c)
t.b=!0
s.bw(t)}},
at:function(a,b){var u
for(u=this.y.a,u=new J.a6(u,u.length);u.w();)u.d.at(0,b)},
ai:function(a){var u,t=this,s=a.dx
s.a.push(s.ga4(s))
s.aN()
a.cz(t.f)
s=a.dy
u=(s&&C.b).gaA(s)
if(u!=null&&t.d!=null)u.eb(a,t)
for(s=t.y.a,s=new J.a6(s,s.length);s.w();)s.d.ai(a)
a.cw()
a.dx.aI()},
bw:function(a){var u=this.z
if(u!=null)u.E(a)},
a5:function(){return this.bw(null)},
e7:function(a){this.e=null
this.bw(a)},
i5:function(){return this.e7(null)},
e5:function(a){this.bw(a)},
i2:function(){return this.e5(null)},
i1:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ge4(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.a5()},
i4:function(a,b){var u,t
for(u=b.gT(b),t=this.ge4();u.w();)u.gD(u).gp().M(0,t)
this.a5()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hQ.prototype={
eD:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ae(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.c9()
t=[V.aV]
u.a=H.b([],t)
u.gp().n(0,new E.hR(s))
s.cy=u
u=new O.c9()
u.a=H.b([],t)
u.gp().n(0,new E.hS(s))
s.db=u
u=new O.c9()
u.a=H.b([],t)
u.gp().n(0,new E.hT(s))
s.dx=u
u=H.b([],[O.dC])
s.dy=u
u.push(null)
s.fr=new H.J([P.h,A.du])},
gig:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.u(0,u.ga4(u))
s=u}return s},
cz:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaA(u):a)},
cw:function(){var u=this.dy
if(u.length>1)u.pop()},
dr:function(a){var u=a.b
if(u.length===0)throw H.c(P.w("May not cache a shader with no name."))
if(this.fr.c7(0,u))throw H.c(P.w('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.l(0,u,a)}}
E.hR.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hS.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hT.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dE.prototype={
cT:function(a){this.ed()},
cS:function(){return this.cT(null)},
ghT:function(){var u,t=this,s=Date.now(),r=C.c.aa(P.lz(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ae(s,!1)
return u/r},
da:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.r(r)
u=C.d.cm(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.cm(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.m0(C.n,s.gil())}},
ed:function(){if(!this.cx){this.cx=!0
var u=window
C.E.f2(u)
C.E.h7(u,W.mp(new E.iv(this),P.ac))}},
ij:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.da()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ae(r,!1)
s.y=P.lz(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.aN()
r=s.db
C.b.sm(r.a,0)
r.aN()
r=s.dx
C.b.sm(r.a,0)
r.aN()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.ai(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.ah(q)
t=H.li(q)
P.ll("Error: "+H.e(u))
P.ll("Stack: "+H.e(t))
throw H.c(u)}}}
E.iv.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ij()}}}
Z.dS.prototype={}
Z.cU.prototype={
a2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ah(s)
t=P.w('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dT.prototype={}
Z.bW.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a2(a)},
as:function(a){var u,t,s
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
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a5(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ch(this.c))+"'")+"]"}}
Z.b2.prototype={
gcM:function(a){var u=this.a,t=(u&$.au().a)!==0?3:0
if((u&$.b6().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.bq().a)!==0)t+=3
if((u&$.cN().a)!==0)t+=3
if((u&$.cO().a)!==0)t+=4
if((u&$.bS().a)!==0)++t
return(u&$.b4().a)!==0?t+4:t},
hu:function(a){var u,t=$.au(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b6()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bq()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cN()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0)if(u===a)return t
return $.mW()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.au().a)!==0)u.push("Pos")
if((t&$.b6().a)!==0)u.push("Norm")
if((t&$.b5().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.bq().a)!==0)u.push("TxtCube")
if((t&$.cN().a)!==0)u.push("Clr3")
if((t&$.cO().a)!==0)u.push("Clr4")
if((t&$.bS().a)!==0)u.push("Weight")
if((t&$.b4().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f8.prototype={}
D.bx.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.X]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.P(s,b)
if(s===!0){s=t.a
u=(s&&C.b).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.P(s,b)
if(s===!0){s=t.b
u=(s&&C.b).M(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
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
return!0}if(!t)C.b.G(P.l_(u,!0,{func:1,ret:-1,args:[D.X]}),new D.fw(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.X]}])
C.b.G(u,new D.fx(q))}return!0},
cb:function(){return this.E(null)},
ar:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fw.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fx.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.X.prototype={}
D.bb.prototype={}
D.bc.prototype={}
D.y.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cV.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cV))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.db.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.db))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fV.prototype={
ia:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i6:function(a){this.c=a.b
this.d.M(0,a.a)
return!1}}
X.de.prototype={}
X.h3.prototype={
b6:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=new V.Z(o.a+n*m,o.b+u*t)
t=q.a.gaW()
r=new X.aW(a,V.aZ(),q.x,t,s)
r.b=!0
q.z=new P.ae(p,!1)
q.x=s
return r},
cv:function(a,b){this.r=a.a
return!1},
bg:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eo()
if(typeof u!=="number")return u.ag()
this.r=(u&~t)>>>0
return!1},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b6(a,b))
return!0},
ib:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaW()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cb(new V.K(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fD:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.de(c,r.a.gaW(),b)
s.b=!0
t.E(s)
r.y=new P.ae(u,!1)
r.x=V.aZ()}}
X.ak.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ak))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aW.prototype={}
X.hu.prototype={
bL:function(a,b,c){var u=this,t=new P.ae(Date.now(),!1),s=u.a.gaW(),r=new X.aW(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cv:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bL(a,b,!0))
return!0},
bg:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eo()
if(typeof t!=="number")return t.ag()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bL(a,b,!0))
return!0},
bf:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bL(a,b,!1))
return!0},
ic:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaW()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cb(new V.K(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdF:function(){var u=this.b
return u==null?this.b=D.D():u},
gcH:function(){var u=this.c
return u==null?this.c=D.D():u},
ge3:function(){var u=this.d
return u==null?this.d=D.D():u}}
X.cb.prototype={}
X.hL.prototype={}
X.dI.prototype={}
X.iz.prototype={
b6:function(a,b){var u=this,t=new P.ae(Date.now(),!1),s=a.length>0?a[0]:V.aZ(),r=u.a.gaW(),q=new X.dI(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i9:function(a){var u=this.b
if(u==null)return!1
u.E(this.b6(a,!0))
return!0},
i7:function(a){var u=this.c
if(u==null)return!1
u.E(this.b6(a,!0))
return!0},
i8:function(a){var u=this.d
if(u==null)return!1
u.E(this.b6(a,!1))
return!0}}
X.dN.prototype={
gaW:function(){var u=this.a,t=C.i.gdC(u).c
t.toString
u=C.i.gdC(u).d
u.toString
return V.lV(0,0,t,u)},
cZ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.db(u,new X.ak(t,a.altKey,a.shiftKey))},
aS:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
c_:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ak(t,a.altKey,a.shiftKey)},
aE:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.Z(s-q,r-u)},
b7:function(a){return new V.K(a.movementX,a.movementY)},
bV:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Z])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
q=C.d.a6(r.pageX)
C.d.a6(r.pageY)
p=o.left
C.d.a6(r.pageX)
n.push(new V.Z(q-p,C.d.a6(r.pageY)-o.top))}return n},
aC:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cV(u,new X.ak(t,a.altKey,a.shiftKey))},
bM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fv:function(a){this.f=!0},
fi:function(a){this.f=!1},
fo:function(a){if(this.f&&this.bM(a))a.preventDefault()},
fB:function(a){var u
if(!this.f)return
u=this.cZ(a)
this.b.ia(u)},
fz:function(a){var u
if(!this.f)return
u=this.cZ(a)
this.b.i6(u)},
fF:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aS(a)
if(r.x){u=r.aC(a)
t=r.b7(a)
if(r.d.cv(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aC(a)
s=r.aE(a)
if(r.c.cv(u,s))a.preventDefault()},
fJ:function(a){var u,t,s,r=this
r.aS(a)
u=r.aC(a)
if(r.x){t=r.b7(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.bg(u,s))a.preventDefault()},
ft:function(a){var u,t,s,r=this
if(!r.bM(a)){r.aS(a)
u=r.aC(a)
if(r.x){t=r.b7(a)
if(r.d.bg(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.bg(u,s))a.preventDefault()}},
fH:function(a){var u,t,s,r=this
r.aS(a)
u=r.aC(a)
if(r.x){t=r.b7(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.bf(u,s))a.preventDefault()},
fq:function(a){var u,t,s,r=this
if(!r.bM(a)){r.aS(a)
u=r.aC(a)
if(r.x){t=r.b7(a)
if(r.d.bf(u,t))a.preventDefault()
return}if(r.r)return
s=r.aE(a)
if(r.c.bf(u,s))a.preventDefault()}},
fL:function(a){var u,t,s=this
s.aS(a)
u=new V.K((a&&C.D).ghE(a),C.D.ghF(a)).q(0,180)
if(s.x){if(s.d.ib(u))a.preventDefault()
return}if(s.r)return
t=s.aE(a)
if(s.c.ic(u,t))a.preventDefault()},
fN:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aC(s.y)
t=s.aE(s.y)
s.d.fD(u,t,r)}},
h2:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c_(a)
u=t.bV(a)
if(t.e.i9(u))a.preventDefault()},
fZ:function(a){var u
this.c_(a)
u=this.bV(a)
if(this.e.i7(u))a.preventDefault()},
h0:function(a){var u
this.c_(a)
u=this.bV(a)
if(this.e.i8(u))a.preventDefault()}}
D.f2.prototype={$ia7:1}
D.bv.prototype={
aB:function(a){var u=this.r
if(u!=null)u.E(a)},
eJ:function(){return this.aB(null)},
$ia7:1}
D.a7.prototype={}
D.dc.prototype={
aB:function(a){var u=this.y
if(u!=null)u.E(a)},
d7:function(a){var u=this.z
if(u!=null)u.E(a)},
fC:function(){return this.d7(null)},
fP:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){s=a[t]
if(s==null||this.eH(s))return!1}return!0},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd6(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q instanceof D.bv)this.f.push(q)
p=q.r
if(p==null){p=new D.bx()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bb()
u.b=!0
this.aB(u)},
fT:function(a,b){var u,t,s
for(u=b.gT(b),t=this.gd6();u.w();){s=u.gD(u)
C.b.M(this.e,s)
s.gp().M(0,t)}u=new D.bc()
u.b=!0
this.aB(u)},
eH:function(a){var u=C.b.P(this.f,a)
return u},
$ai:function(){return[D.a7]},
$aaP:function(){return[D.a7]}}
D.hK.prototype={$ia7:1}
D.ib.prototype={$ia7:1}
V.W.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.W))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.ad.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ad))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fv.prototype={}
V.dg.prototype={
af:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dg))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bQ(H.b([q.a,q.d,q.r],p),3,0),n=V.bQ(H.b([q.b,q.e,q.x],p),3,0),m=V.bQ(H.b([q.c,q.f,q.y],p),3,0)
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
V.aV.prototype={
af:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
co:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.B().a)return V.bA()
u=1/b1
t=-n
s=-a0
return V.az((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.az(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bB:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.A(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bj:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.L(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aV))return!1
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
i:function(a){return this.S()},
H:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bQ(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bQ(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bQ(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bQ(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
S:function(){return this.H("")}}
V.Z.prototype={
K:function(a,b){return new V.Z(this.a-b.a,this.b-b.b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Z))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.L.prototype={
B:function(a,b){return new V.L(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.L(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.L(this.a*b,this.b*b,this.c*b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.al.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.al))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dr.prototype={
gah:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dr))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.K.prototype={
cp:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.r(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.r(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.K(t*b,u*b)},
q:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.m7
return u==null?$.m7=new V.K(0,0):u}u=this.a
if(typeof u!=="number")return u.q()
t=this.b
if(typeof t!=="number")return t.q()
return new V.K(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.K))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.r(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.r(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.A.prototype={
cp:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cq:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.A(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aF:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.A(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.A(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.A(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.A(this.a*b,this.b*b,this.c*b)},
q:function(a,b){if(Math.abs(b-0)<$.B().a)return V.cs()
return new V.A(this.a/b,this.b/b,this.c/b)},
e2:function(){var u=$.B().a
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
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
U.fb.prototype={
bG:function(a){var u=V.kH(a,this.c,this.b)
return u},
gp:function(){var u=this.y
return u==null?this.y=D.D():u},
I:function(a){var u=this.y
if(u!=null)u.E(a)},
scI:function(a,b){},
scs:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.B().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bG(u)}s=new D.y("maximumLocation",s,t.b)
s.b=!0
t.I(s)}},
scu:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.B().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bG(u)}s=new D.y("minimumLocation",s,t.c)
s.b=!0
t.I(s)}},
sa0:function(a,b){var u,t=this
b=t.bG(b)
u=t.d
if(!(Math.abs(u-b)<$.B().a)){t.d=b
u=new D.y("location",u,b)
u.b=!0
t.I(u)}},
sct:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.B().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.y("maximumVelocity",r,a)
r.b=!0
s.I(r)}},
sW:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.B().a)){u.f=a
t=new D.y("velocity",t,a)
t.b=!0
u.I(t)}},
sca:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.B().a)){this.x=a
u=new D.y("dampening",u,a)
u.b=!0
this.I(u)}},
at:function(a,b){var u,t,s,r=this,q=r.f,p=$.B().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa0(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.B().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sW(u)}}}
U.cY.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.D():u},
aL:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cY))return!1
return J.G(this.a,b.a)},
i:function(a){return"Constant: "+this.a.H("          ")}}
U.c1.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u},
I:function(a){var u=this.e
if(u!=null)u.E(a)},
ae:function(){return this.I(null)},
eL:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaR(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.I(u)},
fR:function(a,b){var u,t
for(u=b.gT(b),t=this.gaR();u.w();)u.gD(u).gp().M(0,t)
u=new D.bc()
u.b=!0
this.I(u)},
aL:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.R()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a6(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.aL(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bA():u
r=s.e
if(r!=null)r.ar(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c1))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.G(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.af]},
$aaP:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.dt.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.D():u},
I:function(a){var u=this.y
if(u!=null)u.E(a)},
sel:function(a){var u
a=V.kH(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.y("yaw",u,a)
u.b=!0
this.I(u)}},
sea:function(a,b){var u
b=V.kH(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.y("pitch",u,b)
u.b=!0
this.I(u)}},
see:function(a){var u
a=V.kH(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.y("roll",u,a)
u.b=!0
this.I(u)}},
aL:function(a,b,c){var u=this,t=u.r,s=b.e
if(t<s){u.r=s
t=u.y
if(t!=null)++t.d
u.sel(u.a+u.d*b.y)
u.sea(0,u.b+u.e*b.y)
u.see(u.c+u.f*b.y)
u.x=V.lL(u.c).u(0,V.lK(u.b)).u(0,V.lJ(u.a))
t=u.y
if(t!=null)t.ar(0)}return u.x},
t:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dt))return!1
u=r.a
t=b.a
s=$.B().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+"], ["+V.F(u.d,3,0)+", "+V.F(u.e,3,0)+", "+V.F(u.f,3,0)+"]"}}
U.dO.prototype={
gp:function(){var u=this.cy
return u==null?this.cy=D.D():u},
I:function(a){var u=this.cy
if(u!=null)u.E(a)},
ae:function(){return this.I(null)},
b9:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdF().n(0,u.gbN())
u.a.c.ge3().n(0,u.gbP())
u.a.c.gcH().n(0,u.gbR())
return!0},
bO:function(a){var u=this
if(!J.G(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaW")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.K(t.a,t.b).u(0,2).q(0,u.gah())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.r(s)
t.sW(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.K(s.a,s.b).u(0,2).q(0,u.gah())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.r(p)
o=n.z
if(typeof o!=="number")return H.r(o)
s.sa0(0,-q*p+o)
n.b.sW(0)
t=t.K(0,a.z)
n.Q=new V.K(t.a,t.b).u(0,2).q(0,u.gah())}n.ae()},
bS:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.r(s)
u.sW(t*10*s)
r.ae()}},
aL:function(a,b,c){var u,t=this,s=t.ch,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.ch=r
u=b.y
t.b.at(0,u)
t.cx=V.lL(t.b.d)}return t.cx},
$iaf:1}
U.dP.prototype={
gp:function(){var u=this.fx
return u==null?this.fx=D.D():u},
I:function(a){var u=this.fx
if(u!=null)u.E(a)},
ae:function(){return this.I(null)},
b9:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdF().n(0,s.gbN())
s.a.c.ge3().n(0,s.gbP())
s.a.c.gcH().n(0,s.gbR())
u=s.a.d
t=u.f
u=t==null?u.f=D.D():t
u.n(0,s.gf4())
u=s.a.d
t=u.d
u=t==null?u.d=D.D():t
u.n(0,s.gf6())
u=s.a.e
t=u.b
u=t==null?u.b=D.D():t
u.n(0,s.ghn())
u=s.a.e
t=u.d
u=t==null?u.d=D.D():t
u.n(0,s.ghl())
u=s.a.e
t=u.c
u=t==null?u.c=D.D():t
u.n(0,s.ghj())
return!0},
aw:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.K(u,t)},
bO:function(a){var u=this
H.j(a,"$iaW")
if(!J.G(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bQ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaW")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.aw(new V.K(t.a,t.b).u(0,2).q(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aw(new V.K(s.a,s.b).u(0,2).q(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa0(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.aw(new V.K(t.a,t.b).u(0,2).q(0,u.gah()))}n.ae()},
bS:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sW(-t*10*u)
r.ae()}},
f5:function(a){var u=this
if(H.j(a,"$ide").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f7:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$iaW")
if(!J.G(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aw(new V.K(s.a,s.b).u(0,2).q(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa0(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.aw(new V.K(t.a,t.b).u(0,2).q(0,u.gah()))
n.ae()},
ho:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hm:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$idI")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.K(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.r(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.aw(new V.K(t.a,t.b).u(0,2).q(0,u.gah()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.r(s)
t.sW(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.r(t)
s.sW(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.aw(new V.K(s.a,s.b).u(0,2).q(0,u.gah()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.r(p)
o=n.cy
if(typeof o!=="number")return H.r(o)
s.sa0(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.r(q)
s=n.db
if(typeof s!=="number")return H.r(s)
o.sa0(0,-p*q+s)
n.b.sW(0)
n.c.sW(0)
t=t.K(0,a.z)
n.dx=n.aw(new V.K(t.a,t.b).u(0,2).q(0,u.gah()))}n.ae()},
hk:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.r(s)
u.sW(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.r(u)
s.sW(-t*10*u)
r.ae()}},
aL:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.R()
if(s<r){t.dy=r
u=b.y
t.c.at(0,u)
t.b.at(0,u)
t.fr=V.lJ(t.b.d).u(0,V.lK(t.c.d))}return t.fr},
$iaf:1}
U.dQ.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
I:function(a){var u=this.r
if(u!=null)u.E(a)},
b9:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.D():t
t=r.gf9()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.D():s).n(0,t)
return!0},
fa:function(a){var u,t,s,r,q=this
if(!J.G(q.b,q.a.b.c))return
H.j(a,"$icb")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.y("zoom",u,r)
u.b=!0
q.I(u)}},
aL:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.az(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaf:1}
M.cX.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
b4:function(){return this.a_(null)},
fV:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.gp()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.a_(u)},
fX:function(a,b){var u,t
for(u=b.gT(b),t=this.gZ();u.w();)u.gD(u).gp().M(0,t)
u=new D.bc()
u.b=!0
this.a_(u)},
ai:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a6(u,u.length);u.w();){t=u.d
if(t!=null)t.ai(a)}s.f=!1},
$ai:function(){return[M.aq]},
$aaP:function(){return[M.aq]},
$iaq:1}
M.cZ.prototype={
gp:function(){var u=this.r
return u==null?this.r=D.D():u},
a_:function(a){var u=this.r
if(u!=null)u.E(a)},
b4:function(){return this.a_(null)},
saV:function(a){var u,t,s=this
if(a==null)a=new X.fM()
u=s.b
if(u!==a){if(u!=null)u.gp().M(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.y("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t,s=this
if(b==null)b=X.lD(null)
u=s.c
if(u!==b){if(u!=null)u.gp().M(0,s.gZ())
t=s.c
s.c=b
b.gp().n(0,s.gZ())
u=new D.y("target",t,s.c)
u.b=!0
s.a_(u)}},
sb0:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.y("technique",u,t.d)
s.b=!0
t.a_(s)}},
ai:function(a){var u=this
a.cz(u.d)
u.c.a2(a)
u.b.a2(a)
u.e.at(0,a)
u.e.ai(a)
u.b.as(a)
u.c.as(a)
a.cw()},
$iaq:1}
M.d3.prototype={
a_:function(a){var u=this.y
if(u!=null)u.E(a)},
b4:function(){return this.a_(null)},
fk:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gZ(),s=[{func:1,ret:-1,args:[D.X]}],r=0;r<b.length;b.length===u||(0,H.m)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bb()
u.b=!0
this.a_(u)},
fm:function(a,b){var u,t
for(u=b.gT(b),t=this.gZ();u.w();)u.gD(u).gp().M(0,t)
u=new D.bc()
u.b=!0
this.a_(u)},
saV:function(a){var u,t,s=this
if(a==null)a=X.l1(null)
u=s.b
if(u!==a){if(u!=null)u.gp().M(0,s.gZ())
t=s.b
s.b=a
a.gp().n(0,s.gZ())
u=new D.y("camera",t,s.b)
u.b=!0
s.a_(u)}},
sbh:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gp().M(0,t.gZ())
u=t.c
t.c=b
b.gp().n(0,t.gZ())
s=new D.y("target",u,t.c)
s.b=!0
t.a_(s)}},
sb0:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gp().M(0,t.gZ())
u=t.d
t.d=a
if(a!=null)a.gp().n(0,t.gZ())
s=new D.y("technique",u,t.d)
s.b=!0
t.a_(s)}},
gp:function(){var u=this.y
return u==null?this.y=D.D():u},
ai:function(a){var u,t=this
a.cz(t.d)
t.c.a2(a)
t.b.a2(a)
u=t.d
if(u!=null)u.at(0,a)
for(u=t.e.a,u=new J.a6(u,u.length);u.w();)u.d.at(0,a)
for(u=t.e.a,u=new J.a6(u,u.length);u.w();)u.d.ai(a)
t.b.toString
a.cy.aI()
a.db.aI()
t.c.as(a)
a.cw()},
$iaq:1}
M.aq.prototype={}
A.cS.prototype={}
A.eX.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hK:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dE:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a0.prototype={
gau:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
t:function(a,b){if(b==null)return!1
if(!(b instanceof A.a0))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.h9.prototype={
eC:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
b5.z=c0
u=new P.T("")
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
A.oP(c0,u)
A.oR(c0,u)
A.oQ(c0,u)
A.oT(c0,u)
A.oU(c0,u)
A.oS(c0,u)
A.oV(c0,u)
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
b5.e_(0,s.charCodeAt(0)==0?s:s,A.oO(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.j(b5.y.N(0,"invViewMat"),"$iaa")
if(t)b5.dy=H.j(b5.y.N(0,"objMat"),"$iaa")
if(r)b5.fr=H.j(b5.y.N(0,"viewObjMat"),"$iaa")
b5.fy=H.j(b5.y.N(0,"projViewObjMat"),"$iaa")
if(c0.go)b5.fx=H.j(b5.y.N(0,"viewMat"),"$iaa")
if(c0.x1)b5.k1=H.j(b5.y.N(0,"txt2DMat"),"$icp")
if(c0.x2)b5.k2=H.j(b5.y.N(0,"txtCubeMat"),"$iaa")
if(c0.y1)b5.k3=H.j(b5.y.N(0,"colorMat"),"$iaa")
b5.r1=H.b([],[A.aa])
t=c0.aZ
if(t>0){b5.k4=b5.y.N(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.t(P.w(b7+q+b8))
s.push(H.j(m,"$iaa"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.N(0,"emissionClr"),"$iH")
if(t.b)b5.rx=H.j(b5.y.N(0,"emissionTxt"),"$ia1")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.N(0,"ambientClr"),"$iH")
if(t.b)b5.x2=H.j(b5.y.N(0,"ambientTxt"),"$ia1")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.N(0,"diffuseClr"),"$iH")
if(t.b)b5.aZ=H.j(b5.y.N(0,"diffuseTxt"),"$ia1")
t=c0.d
if(t.a)b5.bs=H.j(b5.y.N(0,"invDiffuseClr"),"$iH")
if(t.b)b5.dH=H.j(b5.y.N(0,"invDiffuseTxt"),"$ia1")
t=c0.e
s=t.a
if(s||t.b||!1){b5.dK=H.j(b5.y.N(0,"shininess"),"$iU")
if(s)b5.dI=H.j(b5.y.N(0,"specularClr"),"$iH")
if(t.b)b5.dJ=H.j(b5.y.N(0,"specularTxt"),"$ia1")}if(c0.f.b)b5.dL=H.j(b5.y.N(0,"bumpTxt"),"$ia1")
if(c0.db){b5.dM=H.j(b5.y.N(0,"envSampler"),"$ibm")
t=c0.r
if(t.a)b5.dN=H.j(b5.y.N(0,"reflectClr"),"$iH")
if(t.b)b5.dO=H.j(b5.y.N(0,"reflectTxt"),"$ia1")
t=c0.x
s=t.a
if(s||t.b||!1){b5.dP=H.j(b5.y.N(0,"refraction"),"$iU")
if(s)b5.dQ=H.j(b5.y.N(0,"refractClr"),"$iH")
if(t.b)b5.dR=H.j(b5.y.N(0,"refractTxt"),"$ia1")}}t=c0.y
if(t.a)b5.dS=H.j(b5.y.N(0,"alpha"),"$iU")
if(t.b)b5.dT=H.j(b5.y.N(0,"alphaTxt"),"$ia1")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.v
b5.cc=new H.J([r,A.bl])
b5.cd=new H.J([r,[P.o,A.cn]])
for(r=[A.cn],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
H.j(m,"$iH")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.t(P.w(b7+o+b8))
H.j(g,"$iH")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.j(f,"$iH")
if(typeof j!=="number")return j.ag()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.j(e,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.j(d,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.t(P.w(b7+o+b8))
H.j(c,"$iU")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cn(m,g,f,a0,a,b))}b5.cd.l(0,j,h)
q=b5.cc
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.l(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.v
b5.ce=new H.J([r,A.bl])
b5.cf=new H.J([r,[P.o,A.co]])
for(r=[A.co],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ag()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.t(P.w(b7+a1+b8))
H.j(m,"$iH")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.t(P.w(b7+a1+b8))
H.j(g,"$iH")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.t(P.w(b7+a1+b8))
H.j(f,"$iH")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.t(P.w(b7+a1+b8))
H.j(m,"$iH")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.t(P.w(b7+a1+b8))
H.j(g,"$iH")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.j(f,"$ia1")
a5=f}else a5=b6
h.push(new A.co(a4,a3,a2,m,g,a5))}b5.cf.l(0,j,h)
q=b5.ce
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.l(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.v
b5.cg=new H.J([r,A.bl])
b5.ci=new H.J([r,[P.o,A.cq]])
for(r=[A.cq],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
H.j(m,"$iH")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.t(P.w(b7+o+b8))
H.j(g,"$iH")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.j(f,"$iH")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.j(e,"$icp")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.j(e,"$ibm")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.j(e,"$ibm")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.j(d,"$icm")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.j(e,"$iU")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.j(d,"$iU")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.t(P.w(b7+o+b8))
H.j(c,"$iU")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cq(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.ci.l(0,j,h)
q=b5.cg
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.l(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.v
b5.cj=new H.J([r,A.bl])
b5.ck=new H.J([r,[P.o,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.m)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
H.j(m,"$iH")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.t(P.w(b7+o+b8))
H.j(g,"$iH")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.t(P.w(b7+o+b8))
H.j(f,"$iH")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.t(P.w(b7+o+b8))
H.j(e,"$iH")
if(typeof j!=="number")return j.ag()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.j(d,"$iH")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.t(P.w(b7+o+b8))
H.j(c,"$iH")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.t(P.w(b7+o+b8))
H.j(a9,"$iU")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.t(P.w(b7+o+b8))
H.j(b0,"$iU")
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
if(d==null)H.t(P.w(b7+a1+b8))
H.j(d,"$icm")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.t(P.w(b7+a1+b8))
H.j(d,"$iU")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.t(P.w(b7+a1+b8))
H.j(c,"$iU")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.t(P.w(b7+a1+b8))
H.j(d,"$iU")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.t(P.w(b7+a1+b8))
H.j(c,"$iU")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.t(P.w(b7+a1+b8))
H.j(a9,"$iU")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.t(P.w(b7+a1+b8))
H.j(d,"$ia1")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.t(P.w(b7+o+b8))
H.j(d,"$ia1")
a7=d}else a7=b6
h.push(new A.cr(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.ck.l(0,j,h)
q=b5.cj
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.t(P.w(b7+o+b8))
q.l(0,j,m)}}}},
ao:function(a,b){if(b!=null&&b.d)a.eq(b)},
hd:function(a,b){}}
A.cT.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d0.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dp.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dx.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.hc.prototype={
i:function(a){return this.bc}}
A.cn.prototype={}
A.co.prototype={}
A.cq.prototype={}
A.cr.prototype={}
A.du.prototype={
cQ:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e_:function(a,b,c){var u,t,s,r=this
r.c=b
r.d=c
r.e=r.d_(b,35633)
r.f=r.d_(r.d,35632)
u=r.a
t=u.createProgram()
r.r=t
u.attachShader(t,r.e)
u.attachShader(r.r,r.f)
u.linkProgram(r.r)
if(!u.getProgramParameter(r.r,35714)){s=u.getProgramInfoLog(r.r)
u.deleteProgram(r.r)
H.t(P.w("Failed to link shader: "+H.e(s)))}r.hf()
r.hh()},
a2:function(a){a.a.useProgram(this.r)
this.x.hK()},
d_:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.w("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
hf:function(){var u,t,s,r=this,q=H.b([],[A.cS]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cS(p,t.name,s))}r.x=new A.eX(q)},
hh:function(){var u,t,s,r=this,q=H.b([],[A.dK]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.r(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hD(t.type,t.size,t.name,s))}r.y=new A.iL(q)},
aP:function(a,b,c){var u=this.a
if(a===1)return new A.bl(u,b,c)
else return A.l4(u,this.r,b,a,c)},
f_:function(a,b,c){var u=this.a
if(a===1)return new A.a1(u,b,c)
else return A.l4(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.bm(u,b,c)
else return A.l4(u,this.r,b,a,c)},
bp:function(a,b){return new P.e1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hD:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aP(b,c,d)
case 5121:return u.aP(b,c,d)
case 5122:return u.aP(b,c,d)
case 5123:return u.aP(b,c,d)
case 5124:return u.aP(b,c,d)
case 5125:return u.aP(b,c,d)
case 5126:return new A.U(u.a,c,d)
case 35664:return new A.iH(u.a,c,d)
case 35665:return new A.H(u.a,c,d)
case 35666:return new A.cm(u.a,c,d)
case 35667:return new A.iI(u.a,c,d)
case 35668:return new A.iJ(u.a,c,d)
case 35669:return new A.iK(u.a,c,d)
case 35674:return new A.iM(u.a,c,d)
case 35675:return new A.cp(u.a,c,d)
case 35676:return new A.aa(u.a,c,d)
case 35678:return u.f_(b,c,d)
case 35680:return u.f0(b,c,d)
case 35670:throw H.c(u.bp("BOOL",c))
case 35671:throw H.c(u.bp("BOOL_VEC2",c))
case 35672:throw H.c(u.bp("BOOL_VEC3",c))
case 35673:throw H.c(u.bp("BOOL_VEC4",c))
default:throw H.c(P.w("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.i8.prototype={}
A.dK.prototype={}
A.iL.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.w("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.S()},
S:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.m)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bl.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iK.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.U.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.H.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cm.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iM.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cp.prototype={
aj:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.aa.prototype={
aj:function(a){var u=new Float32Array(H.bL(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.a1.prototype={
eq:function(a){var u=a.d,t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.bm.prototype={
er:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.k_.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cq(s.b,b).cq(s.d.cq(s.c,b),c)
a.sa0(0,new V.L(r.a,r.b,r.c))
a.seh(r.q(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdw(new V.al(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.ka.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.kc.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.r(p)
s=-s*p
u=r*p
a.sa0(0,new V.L(s,u,q))
u=new V.A(s,u,q)
a.seh(u.q(0,Math.sqrt(u.C(u))))
a.sdw(new V.al(1-c,2+c,-1,-1))}}
F.kd.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.ke.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kC.prototype={
$2:function(a,b){return 0}}
F.kD.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.r(s)
u=a.f
t=new V.A(u.a,u.b,u.c)
s=t.q(0,Math.sqrt(t.C(t))).u(0,this.b+s)
a.sa0(0,new V.L(s.a,s.b,s.c))}}
F.kF.prototype={
$1:function(a){return new V.L(Math.cos(a),Math.sin(a),0)}}
F.km.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.L(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.kb.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.lq(n.$1(o),m)
m=J.lq(n.$1(o+3.141592653589793/p.c),m).K(0,l)
m=new V.A(m.a,m.b,m.c)
u=m.q(0,Math.sqrt(m.C(m)))
n=$.m9
if(n==null){n=new V.A(1,0,0)
$.m9=n
t=n}else t=n
n=u.aF(!J.G(u,t)?V.mb():t)
s=n.q(0,Math.sqrt(n.C(n)))
n=s.aF(u)
t=n.q(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa0(0,l.B(0,new V.L(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.ba.prototype={
ba:function(){var u=this
if(!u.gbb()){C.b.M(u.a.a.d.b,u)
u.a.a.a5()}u.bW()
u.bX()
u.h5()},
c0:function(a){this.a=a
a.d.b.push(this)},
c1:function(a){this.b=a
a.d.c.push(this)},
he:function(a){this.c=a
a.d.d.push(this)},
bW:function(){var u=this.a
if(u!=null){C.b.M(u.d.b,this)
this.a=null}},
bX:function(){var u=this.b
if(u!=null){C.b.M(u.d.c,this)
this.b=null}},
h5:function(){var u=this.c
if(u!=null){C.b.M(u.d.d,this)
this.c=null}},
gbb:function(){return this.a==null||this.b==null||this.c==null},
eU:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cs()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e2())return
return s.q(0,Math.sqrt(s.C(s)))},
eW:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.A(r.a,r.b,r.c)
s=r.q(0,Math.sqrt(r.C(r)))
r=t.K(0,q)
r=new V.A(r.a,r.b,r.c)
r=s.aF(r.q(0,Math.sqrt(r.C(r))))
return r.q(0,Math.sqrt(r.C(r)))},
c5:function(){var u,t=this
if(t.d!=null)return!0
u=t.eU()
if(u==null){u=t.eW()
if(u==null)return!1}t.d=u
t.a.a.a5()
return!0},
eT:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cs()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e2())return
return s.q(0,Math.sqrt(s.C(s)))},
eV:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.B().a){l=d.K(0,g)
l=new V.A(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.K(0,g).u(0,p).B(0,g).K(0,j)
l=new V.A(l.a,l.b,l.c)
q=l.q(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.q(0,Math.sqrt(l.C(l)))
l=o.aF(q)
l=l.q(0,Math.sqrt(l.C(l))).aF(o)
q=l.q(0,Math.sqrt(l.C(l)))}return q},
c3:function(){var u,t=this
if(t.e!=null)return!0
u=t.eT()
if(u==null){u=t.eV()
if(u==null)return!1}t.e=u
t.a.a.a5()
return!0},
ghy:function(a){var u=this
if(J.G(u.a,u.b))return!0
if(J.G(u.b,u.c))return!0
if(J.G(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s=this
if(s.gbb())return a+"disposed"
u=a+C.a.an(J.a5(s.a.e),0)+", "+C.a.an(J.a5(s.b.e),0)+", "+C.a.an(J.a5(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
S:function(){return this.H("")}}
F.fy.prototype={}
F.i7.prototype={
bd:function(a,b,c){var u,t=b.a
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
F.c5.prototype={
ba:function(){var u=this
if(!u.gbb()){C.b.M(u.a.a.c.b,u)
u.a.a.a5()}u.bW()
u.bX()},
c0:function(a){this.a=a
a.c.b.push(this)},
c1:function(a){this.b=a
a.c.c.push(this)},
bW:function(){var u=this.a
if(u!=null){C.b.M(u.c.b,this)
this.a=null}},
bX:function(){var u=this.b
if(u!=null){C.b.M(u.c.c,this)
this.b=null}},
gbb:function(){return this.a==null||this.b==null},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){if(this.gbb())return a+"disposed"
return a+C.a.an(J.a5(this.a.e),0)+", "+C.a.an(J.a5(this.b.e),0)},
S:function(){return this.H("")}}
F.fX.prototype={}
F.iF.prototype={
bd:function(a,b,c){var u,t=b.a
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
F.cf.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.an(J.a5(u.e),0)},
S:function(){return this.H("")}}
F.hZ.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u},
be:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){r=g[s]
h.a.n(0,r.hA())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cf()
if(n.a==null)H.t(P.w("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.nr(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.m)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.c_(l,k,i)}g=h.e
if(g!=null)g.ar(0)},
ap:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ap()||!1
if(!t.a.ap())u=!1
s=t.e
if(s!=null)s.ar(0)
return u},
hZ:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.aM(o,0)])
for(o=[F.b1];u.length!==0;){t=C.b.ghO(u)
C.b.cC(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.bd(0,t,q)){s.push(q)
C.b.cC(u,r)}}if(s.length>1)b.be(s)}}p.a.A()
p.c.cD()
p.d.cD()
p.b.ii()
p.c.cE(new F.iF())
p.d.cE(new F.i7())
o=p.e
if(o!=null)o.ar(0)},
c2:function(){this.hZ(new F.j8(),new F.hC())},
dB:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.au()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b6().a)!==0)++s
if((t&$.b5().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.bq().a)!==0)++s
if((t&$.cN().a)!==0)++s
if((t&$.cO().a)!==0)++s
if((t&$.bS().a)!==0)++s
if((t&$.b4().a)!==0)++s
r=a4.gcM(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cU])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hu(m)
k=l.gcM(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cU(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hY(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bL(p)),35044)
u.bindBuffer(a1,null)
c=new Z.bW(new Z.dS(a1,d),o,a4)
c.b=H.b([],[Z.by])
if(a0.b.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)}a=Z.l8(u,34963,b)
c.b.push(new Z.by(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.v])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.l8(u,34963,b)
c.b.push(new Z.by(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.v])
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
b.push(t.e)}a=Z.l8(u,34963,b)
c.b.push(new Z.by(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.H(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.H(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.H(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.H(t))}return C.b.j(s,"\n")},
a5:function(){var u=this.e
if(u!=null)u.E(null)}}
F.i0.prototype={
dm:function(a){var u,t,s,r,q,p=H.b([],[F.ba]),o=a.length
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
hr:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.ba])
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
if(a.bd(0,p,n)){p.ba()
break}}}}},
cD:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghy(s)
if(t)s.ba()}},
ap:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c5())s=!1
return s},
c4:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.m)(u),++r)if(!u[r].c3())s=!1
return s},
i:function(a){return this.S()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
S:function(){return this.H("")}}
F.i1.prototype={
gm:function(a){return this.b.length},
cE:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.bd(0,p,n)){p.ba()
break}}}}},
cD:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.G(s.a,s.b)
if(t)s.ba()}},
i:function(a){return this.S()},
H:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].H(a+(""+u+". ")))}return C.b.j(s,"\n")},
S:function(){return this.H("")}}
F.i2.prototype={
gm:function(a){return this.b.length},
ii:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.M(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.M(s.b.b,t)
t.a=null}}}},
i:function(a){return this.S()},
H:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(a))
return C.b.j(r,"\n")},
S:function(){return this.H("")}}
F.b1.prototype={
c9:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.dR(u.cx,r,o,t,s,q,p,a,n)},
hA:function(){return this.c9(null)},
sa0:function(a,b){var u
if(!J.G(this.f,b)){this.f=b
u=this.a
if(u!=null)u.a5()}},
seh:function(a){var u
if(!J.G(this.z,a)){this.z=a
u=this.a
if(u!=null)u.a5()}},
sdw:function(a){var u
if(!J.G(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.a5()}},
hY:function(a){var u,t,s=this
if(a.t(0,$.au())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b6())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b5())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b7())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bq())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cN())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cO())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.t(0,$.bS()))return H.b([s.ch],[P.M])
else if(a.t(0,$.b4())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
c5:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cs()
t.d.G(0,new F.jd(s))
s=s.a
t.r=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
c3:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cs()
t.d.G(0,new F.jc(s))
s=s.a
t.x=s.q(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.a5()
s=t.a.e
if(s!=null)s.ar(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.S()},
H:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.an(J.a5(s.e),0))
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
t=C.b.j(q,", ")
return a+"{"+t+"}"},
S:function(){return this.H("")}}
F.jd.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.jc.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j3.prototype={
A:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.w("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.a5()
return!0},
dn:function(a,b,c,d,e,f,g){var u=F.dR(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bq:function(a,b,c,d,e,f){return this.dn(a,b,c,null,d,e,f)},
hs:function(a,b,c,d,e,f){return this.dn(a,b,c,d,e,f,null)},
gm:function(a){return this.c.length},
ap:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c5()
return!0},
c4:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)u[s].c3()
return!0},
hx:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.q(0,Math.sqrt(p*p+o*o+n*n))
if(!J.G(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.S()},
H:function(a){var u,t,s,r
this.A()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r)u.push(t[r].H(a))
return C.b.j(u,"\n")},
S:function(){return this.H("")}}
F.j4.prototype={
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
G:function(a,b){var u=this
C.b.G(u.b,b)
C.b.G(u.c,new F.j5(u,b))
C.b.G(u.d,new F.j6(u,b))},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j5.prototype={
$1:function(a){if(!J.G(a.a,this.a))this.b.$1(a)}}
F.j6.prototype={
$1:function(a){var u=this.a
if(!J.G(a.a,u)&&!J.G(a.b,u))this.b.$1(a)}}
F.j7.prototype={
gm:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
F.j9.prototype={}
F.j8.prototype={
bd:function(a,b,c){return J.G(b.f,c.f)}}
F.ja.prototype={}
F.hC.prototype={
be:function(a){var u,t,s,r,q,p,o,n,m=V.cs()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.A(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.q(0,Math.sqrt(m.C(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.m)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.q(0,Math.sqrt(p*p+o*o+n*n))}if(!J.G(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.E(null)}}}return}}
F.jb.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.S()},
S:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.m)(u),++s)r.push(u[s].H(""))
return C.b.j(r,"\n")}}
O.df.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.D():u},
Y:function(a){var u=this.fr
if(u!=null)u.E(a)},
b5:function(){return this.Y(null)},
d9:function(a){this.a=null
this.Y(a)},
h9:function(){return this.d9(null)},
fe:function(a,b){var u=new D.bb()
u.b=!0
this.Y(u)},
fg:function(a,b){var u=new D.bc()
u.b=!0
this.Y(u)},
cY:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.v
f=[f,f]
u=new H.J(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaz()
o=u.h(0,q.gaz())
u.l(0,p,o==null?1:o)}n=H.b([],[A.cT])
u.G(0,new O.hg(g,n))
C.b.b3(n,new O.hh())
m=new H.J(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){p=m.h(0,0)
m.l(0,0,p==null?1:p)}l=H.b([],[A.d0])
m.G(0,new O.hi(g,l))
C.b.b3(l,new O.hj())
k=new H.J(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.m)(t),++r){q=t[r]
p=q.gaz()
o=k.h(0,q.gaz())
k.l(0,p,o==null?1:o)}j=H.b([],[A.dp])
k.G(0,new O.hk(g,j))
C.b.b3(j,new O.hl())
i=new H.J(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.m)(f),++r){q=f[r]
s=q.gaz()
p=i.h(0,q.gaz())
i.l(0,s,p==null?1:p)}h=H.b([],[A.dx])
i.G(0,new O.hm(g,h))
C.b.b3(h,new O.hn())
f=C.c.aa(g.e.a.length+3,4)
g.dy.e
return A.nz(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ak:function(a,b){if(b!=null)if(!C.b.P(a,b)){b.a=a.length
a.push(b)}},
at:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a6(u,u.length);u.w();){t=u.d
t.toString
s=$.j2
if(s==null)s=$.j2=new V.A(0,0,1)
t.a=s
r=$.j1
t.d=r==null?$.j1=new V.A(0,1,0):r
r=$.j0
t.e=r==null?$.j0=new V.A(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bB(s)
r=s.a
p=s.b
o=s.c
t.a=s.q(0,Math.sqrt(r*r+p*p+o*o))
o=q.bB(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.q(0,Math.sqrt(p*p+r*r+s*s))
s=q.bB(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.q(0,Math.sqrt(r*r+p*p+o*o))}}}},
eb:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.cY()
u=b2.fr.h(0,b1.bc)
if(u==null){u=A.ny(b1,b2.a)
b2.dr(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bs
b1=b3.e
if(!(b1 instanceof Z.bW))b1=b3.e=null
if(b1==null||!b1.d.t(0,s)){b1=t.k4
if(b1)b3.d.ap()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.c4()
q.a.c4()
q=q.e
if(q!=null)q.ar(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hx()
p=p.e
if(p!=null)p.ar(0)}n=b3.d.dB(new Z.dT(b2.a),s)
n.aG($.au()).e=b0.a.Q.c
if(b1)n.aG($.b6()).e=b0.a.cx.c
if(r)n.aG($.b5()).e=b0.a.ch.c
if(t.r2)n.aG($.b7()).e=b0.a.cy.c
if(q)n.aG($.bq()).e=b0.a.db.c
if(t.ry)n.aG($.b4()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dD])
b0.a.a2(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga4(r)
b1=b1.dy
b1.toString
b1.aj(r.af(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga4(r)
q=b2.dx
q=b2.cx=r.u(0,q.ga4(q))
r=q}b1=b1.fr
b1.toString
b1.aj(r.af(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gig()
q=b2.dx
q=b2.ch=r.u(0,q.ga4(q))
r=q}b1=b1.fy
b1.toString
b1.aj(r.af(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga4(r)
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
b1.aj(C.j.af(r,!0))}if(t.aZ>0){l=b0.e.a.length
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
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.f.d)
b1=b0.a
r=b0.f.d
b1.ao(b1.rx,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.r.d)
b1=b0.a
r=b0.r.d
b1.ao(b1.x2,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.x.d)
b1=b0.a
r=b0.x.d
b1.ao(b1.aZ,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bs
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.y.d)
b1=b0.a
r=b0.y.d
b1.ao(b1.dH,r)}b1=t.e
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.z.ch
q=q.dK
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.dI
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.z.d)
b1=b0.a
r=b0.z.d
b1.ao(b1.dJ,r)}b1=t.z
if(b1.length>0){r=P.v
i=new H.J([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaz()
e=i.h(0,f)
if(e==null)e=0
i.l(0,f,e+1)
d=J.bT(b0.a.cd.h(0,f),e)
p=g.giA()
o=$.aD
p=p.bj(o==null?$.aD=new V.L(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giF()
o=$.aD
p=p.bj(o==null?$.aD=new V.L(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaX(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdG()){p=g.gdt()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdu()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdv()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.cc.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.v
b=new H.J([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.l(0,0,e+1)
d=J.bT(b0.a.cf.h(0,0),e)
p=c.bB(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.q(0,Math.sqrt(o*o+a*a+a0*a0))
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
q=b0.a.ce.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.v
a1=new H.J([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaz()
e=a1.h(0,f)
if(e==null)e=0
a1.l(0,f,e+1)
d=J.bT(b0.a.ci.h(0,f),e)
a2=c.u(0,g.ga4(g))
p=g.ga4(g)
o=$.aD
p=p.bj(o==null?$.aD=new V.L(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aD
p=a2.bj(p==null?$.aD=new V.L(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaX(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaK()
p=a2.co(0)
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
j=new Float32Array(H.bL(new V.dg(o,a,a0,a3,a4,a5,a6,a7,p).af(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaK()
p=g.gaK()
if(!C.b.P(m,p)){p.a=m.length
m.push(p)}p=g.gaK()
o=p.gcr(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb2()
p=g.ges()
o=d.x
o.toString
a=p.ghH(p)
a0=p.ghI(p)
a3=p.ghJ()
p=p.ghG()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb2()
if(!C.b.P(m,p)){p.a=m.length
m.push(p)}p=g.gb2()
o=p.gcr(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdG()){p=g.gdt()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdu()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdv()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.cg.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.v
a9=new H.J([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.m)(r),++h){g=r[h]
f=g.gaz()
e=a9.h(0,f)
if(e==null)e=0
a9.l(0,f,e+1)
d=J.bT(b0.a.ck.h(0,f),e)
p=g.gie(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giD(g).iQ()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bj(g.gie(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gaX(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaK()
p=g.gcH()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcF(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giR()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giS()
o=d.y
o.a.uniform1f(o.d,p)
g.gaK()
p=g.gaK()
if(!C.b.P(m,p)){p.a=m.length
m.push(p)}p=g.gaK()
o=p.gcr(p)
if(o){o=d.dx
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb2()
p=g.ges()
o=d.z
o.toString
a=p.ghH(p)
a0=p.ghI(p)
a3=p.ghJ()
p=p.ghG()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb2()
if(!C.b.P(m,p)){p.a=m.length
m.push(p)}p=g.gb2()
o=p.gcr(p)
if(o){o=d.dy
o.toString
a=p.d
if(!a)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.giE()){p=g.giC()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.giB()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdG()){p=g.gdt()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdu()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdv()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.m)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.cj.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.b){b0.ak(m,b0.Q.d)
b1=b0.a
r=b0.Q.d
b1.ao(b1.dL,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga4(r).co(0)}b1=b1.id
b1.toString
b1.aj(r.af(0,!0))}if(t.db){b0.ak(m,b0.ch)
b1=b0.a
r=b0.ch
b1.hd(b1.dM,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dN
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.cx.d)
b1=b0.a
r=b0.cx.d
b1.ao(b1.dO,r)}b1=t.x
r=b1.a
if(r||b1.b||!1){q=b0.a
p=b0.cy.ch
q=q.dP
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dQ
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.b){b0.ak(m,b0.cy.d)
b1=b0.a
r=b0.cy.d
b1.ao(b1.dR,r)}}b1=t.y
r=b1.a
q=!r
if(!q||b1.b||!1){if(r){r=b0.a
p=b0.db.f
r=r.dS
r.a.uniform1f(r.d,p)}if(b1.b){b0.ak(m,b0.db.d)
r=b0.a
p=b0.db.d
r.ao(r.dT,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(r=b2.a,k=0;k<m.length;++k){p=m[k]
if(!p.c&&p.d){p.c=!0
r.activeTexture(33984+p.a)
r.bindTexture(3553,p.b)}}p=b3.e
p.a2(b2)
p.ai(b2)
p.as(b2)
if(!q||b1.b||!1)r.disable(3042)
for(k=0;k<m.length;++k){b1=m[k]
if(b1.c){b1.c=!1
r.activeTexture(33984+b1.a)
r.bindTexture(3553,null)}}b1=b0.a
b1.toString
r.useProgram(null)
b1.x.dE()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cY().bc}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cT(a,C.c.aa(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d0(a,C.c.aa(b+3,4)*4))}}
O.hj.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dp(a,C.c.aa(b+3,4)*4))}}
O.hl.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.hm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dx(a,C.c.aa(b+3,4)*4))}}
O.hn.prototype={
$2:function(a,b){return J.cP(a.a,b.a)}}
O.ha.prototype={
aD:function(){var u,t=this
t.cO()
u=t.f
if(!(Math.abs(u-1)<$.B().a)){t.f=1
u=new D.y(t.b,u,1)
u.b=!0
t.a.Y(u)}}}
O.c8.prototype={
Y:function(a){return this.a.Y(a)},
b5:function(){return this.Y(null)},
aD:function(){},
bY:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aD()
u=s.a
u.a=null
u.Y(null)}}}
O.hb.prototype={}
O.ay.prototype={
dc:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.y(s.b+".color",u,a)
t.b=!0
s.a.Y(t)}},
aD:function(){this.cO()
this.dc(new V.W(1,1,1))},
saX:function(a,b){this.bY(new A.a0(!0,this.c.b,!1))
this.dc(b)}}
O.hd.prototype={}
O.he.prototype={
aD:function(){var u,t=this
t.cP()
u=t.ch
if(!(Math.abs(u-1)<$.B().a)){t.ch=1
u=new D.y(t.b+".refraction",u,1)
u.b=!0
t.a.Y(u)}}}
O.hf.prototype={
dd:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.B().a)){u.ch=a
t=new D.y(u.b+".shininess",t,a)
t.b=!0
u.a.Y(t)}},
aD:function(){this.cP()
this.dd(100)}}
O.dv.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u},
Y:function(a){var u=this.e
if(u!=null)u.E(a)},
b5:function(){return this.Y(null)},
eb:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.i8(t,n)
u.cQ(t,n)
u.e_(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"fov"),"$iU")
u.ch=H.j(u.y.h(0,"ratio"),"$iU")
u.cx=H.j(u.y.h(0,"boxClr"),"$iH")
u.cy=H.j(u.y.h(0,"boxTxt"),"$ibm")
u.db=H.j(u.y.h(0,"viewMat"),"$iaa")
a.dr(u)}o.a=u}if(b.e==null){t=b.d.dB(new Z.dT(a.a),$.au())
t.aG($.au()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
if(!t.c&&t.d>=6){t.c=!0
s=a.a
s.activeTexture(33985)
s.bindTexture(34067,t.b)}}t=a.d
s=a.c
r=o.a
r.a2(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.er(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).co(0)
r=r.db
r.toString
r.aj(s.af(0,!0))
t=b.e
if(t instanceof Z.bW){t.a2(a)
t.ai(a)
t.as(a)}else b.e=null
t=o.a
t.toString
s=a.a
s.useProgram(null)
t.x.dE()
t=o.c
if(t!=null)if(t.c){t.c=!1
s.activeTexture(33984+t.a)
s.bindTexture(34067,null)}}}
O.dC.prototype={}
T.dD.prototype={}
T.iq.prototype={}
T.ir.prototype={
gp:function(){var u=this.y
return u==null?this.y=D.D():u}}
T.is.prototype={
gp:function(){var u=this.e
return u==null?this.e=D.D():u}}
T.it.prototype={
aQ:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.Y(u,"load",new T.iu(this,u,!1,b,!1,d,a),!1)},
ha:function(a,b,c){var u,t,s,r
b=V.cL(b)
u=V.cL(a.width)
t=V.cL(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kM()
s.width=u
s.height=t
r=C.i.en(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.p8(r.getImageData(0,0,s.width,s.height))}}}
T.iu.prototype={
$1:function(a){var u=this,t=u.a,s=t.ha(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.B.iq(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.cb()}++t.e}}
X.f1.prototype={
gp:function(){var u=this.fr
return u==null?this.fr=D.D():u},
a1:function(a){var u=this.fr
if(u!=null)u.E(a)},
sav:function(a,b){var u,t=this
if(b<1)b=1
u=t.a
if(u!==b){t.y=null
t.c=t.a=b
u=new D.y("width",u,b)
u.b=!0
t.a1(u)}},
saq:function(a,b){var u,t=this
if(b<1)b=1
u=t.b
if(u!==b){t.y=null
t.d=t.b=b
u=new D.y("height",u,b)
u.b=!0
t.a1(u)}},
a2:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=3553,e=36161,d=36160
if(h.y==null){u=a.a
t=h.ch
s=h.a
r=h.b
q=u.getParameter(3379)
p=V.cL(s)
o=V.cL(r)
q=V.cL(q)
p=Math.min(p,q)
o=Math.min(o,q)
n=u.createTexture()
u.bindTexture(f,n)
u.texParameteri(f,10242,33071)
u.texParameteri(f,10243,33071)
u.texParameteri(f,10241,9729)
u.texParameteri(f,10240,9729)
C.B.eg(u,f,0,6408,p,o,0,6408,5121,g)
u.bindTexture(f,g)
m=T.lZ(n)
m.e=s
m.f=r
m.r=p
m.x=o
if(!m.d){m.d=!0
s=m.y
if(s!=null)s.cb()}t.b=m.b
t.c=m.c
t.d=m.d
t.e=m.e
t.f=m.f
t.r=m.r
t.x=m.x
t=t.y
if(t!=null)t.cb()
t=h.ch
s=t.b
h.z=s
h.c=t.r
h.d=t.x
u.bindTexture(f,s)
t=u.createRenderbuffer()
h.Q=t
u.bindRenderbuffer(e,t)
u.renderbufferStorage(e,33189,h.c,h.d)
t=u.createFramebuffer()
h.y=t
u.bindFramebuffer(d,t)
u.framebufferTexture2D(d,36064,f,h.z,0)
u.framebufferRenderbuffer(d,36096,e,h.Q)
u.bindTexture(f,g)
u.bindRenderbuffer(e,g)
u.bindFramebuffer(d,g)}u=a.a
u.bindFramebuffer(d,h.y)
u.enable(2884)
u.enable(2929)
u.depthFunc(513)
t=h.dy
s=t.c
a.c=C.d.a6(s*h.a)
r=t.d
a.d=C.d.a6(r*h.b)
l=t.a
k=h.c
j=C.d.a6(l*k)
t=t.b
l=h.d
u.viewport(j,C.d.a6(t*l),C.d.a6(s*k),C.d.a6(r*l))
u.clearDepth(h.db)
if(h.cy){t=h.cx
u.clearColor(t.a,t.b,t.c,t.d)
i=16640}else i=256
if(i>0)u.clear(i)},
as:function(a){a.a.bindFramebuffer(36160,null)}}
X.kL.prototype={}
X.fF.prototype={
gp:function(){var u=this.x
return u==null?this.x=D.D():u},
a2:function(a){var u,t,s,r,q,p,o=a.a
o.bindFramebuffer(36160,null)
o.enable(2884)
o.enable(2929)
o.depthFunc(513)
u=o.drawingBufferWidth
t=o.drawingBufferHeight
s=this.r
r=s.a
if(typeof u!=="number")return H.r(u)
q=C.d.a6(r*u)
r=s.b
if(typeof t!=="number")return H.r(t)
p=C.d.a6(r*t)
r=C.d.a6(s.c*u)
a.c=r
s=C.d.a6(s.d*t)
a.d=s
o.viewport(q,p,r,s)
o.clearDepth(this.c)
s=this.a
o.clearColor(s.a,s.b,s.c,s.d)
o.clear(16640)},
as:function(a){}}
X.fM.prototype={
gp:function(){var u=this.b
return u==null?this.b=D.D():u},
a2:function(a){var u
a.cy.bz(V.bA())
u=V.bA()
a.db.bz(u)},
as:function(a){a.cy.aI()
a.db.aI()}}
X.dn.prototype={
gp:function(){var u=this.f
return u==null?this.f=D.D():u},
a1:function(a){var u=this.f
if(u!=null)u.E(a)},
eQ:function(){return this.a1(null)},
a2:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.az(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bz(k)
r=$.lP
if(r==null){r=V.lR()
q=V.l7()
p=$.m8
r=V.lI(r,q,p==null?$.m8=new V.A(0,0,-1):p)
$.lP=r
u=r}else u=r
r=s.b
if(r!=null){t=r.aL(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bz(u)},
as:function(a){a.cy.aI()
a.db.aI()}}
X.il.prototype={}
V.cW.prototype={
bl:function(a){this.b=new P.fK(C.Q)
this.c=null
this.d=H.b([],[[P.o,W.ao]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ao]))
u=a.split("\n")
for(l=u.length,t=[W.ao],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eZ(q,0,q.length)
n=o==null?q:o
C.O.ep(p,H.lm(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gaA(m.d).push(p)}},
e8:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.o,W.ao]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.br()
for(t.toString,s=new H.n(u),s=new P.bI(t.cG(new H.bg(s,s.gm(s))).a());s.w();)r.by(s.gD(s))}}
V.kB.prototype={
$1:function(a){var u=C.d.ei(this.a.ghT(),2)
if(u!=="0.00")P.ll(u+" fps")}}
V.fl.prototype={
by:function(a){var u=this
switch(a.a){case"Class":u.O(a.b,"#551")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break
case"Type":u.O(a.b,"#B11")
break
case"Whitespace":u.O(a.b,"#111")
break}},
br:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.iy()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.u(new H.n("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.u(new H.n("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=a1.k(0,r).j(0,p)
t=K.P("0","9")
u.a.push(t)
t=a1.k(0,p).j(0,p)
u=K.P("0","9")
t.a.push(u)
u=a1.k(0,p).j(0,o)
t=K.u(new H.n("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.P("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.P("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.u(new H.n(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.u(new H.n(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.u(new H.n('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.u(new H.n('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.u(new H.n("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.u(new H.n('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aO())
t=a1.k(0,r).j(0,h)
u=K.u(new H.n("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.u(new H.n("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.u(new H.n("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.u(new H.n("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aO())
t=a1.k(0,r).j(0,e)
u=K.u(new H.n("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.u(new H.n("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.u(new H.n("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.a8()
s=[K.bh]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.u(new H.n("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.u(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.a8()
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.u(new H.n("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.u(new H.n(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.u(new H.n(" \n\t"))
u.a.push(t)
t=a1.k(0,p)
t.d=t.a.U("Num")
t=a1.k(0,n)
t.d=t.a.U("Num")
t=a1.k(0,m)
t.d=t.a.U("Symbol")
t=a1.k(0,j)
t.d=t.a.U("String")
t=a1.k(0,g)
t.d=t.a.U("String")
t=a1.k(0,c)
t.d=t.a.U(d)
t=a1.k(0,a0)
t.d=t.a.U(a0)
t=a1.k(0,q)
t=t.d=t.a.U(q)
u=[P.h]
t.aJ(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aJ(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aJ(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fH.prototype={
by:function(a){var u=this
switch(a.a){case"Builtin":u.O(a.b,"#411")
break
case"Comment":u.O(a.b,"#777")
break
case"Id":u.O(a.b,"#111")
break
case"Num":u.O(a.b,"#191")
break
case"Preprocess":u.O(a.b,"#737")
break
case"Reserved":u.O(a.b,"#119")
break
case"Symbol":u.O(a.b,"#611")
break
case"Type":u.O(a.b,"#171")
break
case"Whitespace":u.O(a.b,"#111")
break}},
br:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.iy()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.u(new H.n("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.u(new H.n("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=e.k(0,r).j(0,p)
t=K.P("0","9")
u.a.push(t)
t=e.k(0,p).j(0,p)
u=K.P("0","9")
t.a.push(u)
u=e.k(0,p).j(0,o)
t=K.u(new H.n("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.P("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.P("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.u(new H.n(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.u(new H.n(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.u(new H.n("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.u(new H.n("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aO())
t=e.k(0,j).j(0,i)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a8()
s=[K.bh]
t.a=H.b([],s)
u.a.push(t)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.u(new H.n("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a8()
u.a=H.b([],s)
t.a.push(u)
t=K.u(new H.n("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.u(new H.n("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.u(new H.n(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.u(new H.n(" \n\t"))
t.a.push(u)
u=e.k(0,p)
u.d=u.a.U("Num")
u=e.k(0,n)
u.d=u.a.U("Num")
u=e.k(0,m)
u.d=u.a.U("Symbol")
u=e.k(0,i)
u.d=u.a.U(j)
u=e.k(0,g)
u.d=u.a.U(h)
u=e.k(0,f)
u.d=u.a.U(f)
u=e.k(0,q)
u=u.d=u.a.U(q)
t=[P.h]
u.aJ(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aJ(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aJ(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fI.prototype={
by:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.O(a.b,"#911")
u.O("=",t)
break
case"Id":u.O(a.b,t)
break
case"Other":u.O(a.b,t)
break
case"Reserved":u.O(a.b,"#119")
break
case"String":u.O(a.b,"#171")
break
case"Symbol":u.O(a.b,"#616")
break}},
br:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.iy()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.u(new H.n("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.u(new H.n("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.u(new H.n("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.u(new H.n("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.u(new H.n("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.u(new H.n('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.u(new H.n('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.u(new H.n("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.u(new H.n('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aO())
l.k(0,s).j(0,m).a.push(new K.aO())
u=l.k(0,m).j(0,m)
t=new K.a8()
t.a=H.b([],[K.bh])
u.a.push(t)
u=K.u(new H.n('</\\-!>=_"'))
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.U("Symbol")
u=l.k(0,n)
u.d=u.a.U("String")
u=l.k(0,r)
t=u.a.U(r)
u.d=t
t.aJ(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.U(q)
t=l.k(0,m)
t.d=t.a.U(m)
return l}}
V.hI.prototype={
e8:function(a,b){this.d=H.b([],[[P.o,W.ao]])
this.O(C.b.j(b,"\n"),"#111")},
by:function(a){},
br:function(){return}}
V.hN.prototype={
dk:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.m4().gcB().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.di(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ls(m.c).n(0,q)
o=W.nk("radio")
o.checked=s
o.name=u
W.Y(o,"change",new V.hO(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.ls(m.c).n(0,r.createElement("br"))},
ax:function(a,b,c){return this.dk(a,b,c,!1)},
di:function(a){var u,t,s=P.m4(),r=P.h,q=P.nt(s.gcB(),r,r)
q.l(0,this.a,a)
u=s.ec(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jH([],[]).bC(""),"",t)}}
V.hO.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.di(u.d)}}}
V.i3.prototype={
eF:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Y(q,"scroll",new V.i5(o),!1)},
dq:function(a){var u,t,s,r,q,p,o,n
this.hg()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hX(a),s.toString,r=new H.n(r),r=new P.bI(s.cG(new H.bg(r,r.gm(r))).a());r.w();){s=r.gD(r)
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
if(H.pt(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eE(C.x,s,C.e,!1)
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
em:function(a){var u,t,s,r=new V.fl("dart")
r.bl("dart")
u=new V.fH("glsl")
u.bl("glsl")
t=new V.fI("html")
t.bl("html")
s=C.b.hP(H.b([r,u,t],[V.cW]),new V.i6(a))
if(s!=null)return s
r=new V.hI("plain")
r.bl("plain")
return r},
dl:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.v])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cJ(s).a9(s,"+")){b0[t]=C.a.ad(s,1)
a6.push(1)
u=!0}else if(C.a.a9(s,"-")){b0[t]=C.a.ad(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.em(a8)
r.e8(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eE(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lu()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.m)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.m)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gT(s);a2.w();)d.appendChild(a2.gD(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hp:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
hg:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.iy()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.u(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a8()
r=[K.bh]
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.n("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.u(new H.n("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.u(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.a8()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.n("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.u(new H.n("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.u(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.a8()
s.a=H.b([],r)
t.a.push(s)
t=K.u(new H.n("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.u(new H.n("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.u(new H.n("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.u(new H.n("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.u(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.u(new H.n("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aO())
s=u.k(0,i).j(0,i)
t=new K.a8()
t.a=H.b([],r)
s.a.push(t)
s=K.u(new H.n("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.U(p)
s=u.k(0,n)
s.d=s.a.U(o)
s=u.k(0,"CodeEnd")
s.d=s.a.U(m)
s=u.k(0,j)
s.d=s.a.U("Link")
s=u.k(0,i)
s.d=s.a.U(i)
this.b=u}}
V.i5.prototype={
$1:function(a){P.m0(C.n,new V.i4(this.a))}}
V.i4.prototype={
$0:function(){var u=C.d.a6(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i6.prototype={
$1:function(a){return a.a===this.a}}
V.kq.prototype={
$0:function(){this.a.sa8(0,F.k9(1,null,null,1))}}
V.kr.prototype={
$0:function(){this.a.sa8(0,F.k9(15,null,new V.kp(),15))}}
V.kp.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.A(r.a,r.b,r.c)
u=r.q(0,Math.sqrt(r.C(r)))
r=a.f
s=u.u(0,t*0.1+s*0.1)
a.sa0(0,r.B(0,new V.L(s.a,s.b,s.c)))}}
V.ks.prototype={
$0:function(){this.a.sa8(0,F.ms(!0,30,1))}}
V.kt.prototype={
$0:function(){this.a.sa8(0,F.ms(!1,30,0))}}
V.ku.prototype={
$0:function(){this.a.sa8(0,F.mt(!0,!0,25,new V.ko(),50))}}
V.ko.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
V.kv.prototype={
$0:function(){this.a.sa8(0,F.mE(6,null,6))}}
V.kw.prototype={
$0:function(){this.a.sa8(0,F.mE(10,new V.kn(),10))}}
V.kn.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3}}
V.kx.prototype={
$0:function(){this.a.sa8(0,F.mG())}}
V.ky.prototype={
$0:function(){this.a.sa8(0,F.pm())}}
V.kz.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.dl("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dl("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.ex=u.i
u=J.da.prototype
u.ez=u.i
u=P.i.prototype
u.ey=u.bD
u=W.R.prototype
u.bF=u.al
u=W.em.prototype
u.eA=u.ay
u=K.d6.prototype
u.ew=u.aH
u.cN=u.i
u=O.c8.prototype
u.cO=u.aD
u=O.ay.prototype
u.cP=u.aD})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"oy","no",21)
t(P,"p2","o6",7)
t(P,"p3","o7",7)
t(P,"p4","o8",7)
s(P,"mr","p0",9)
r(W,"pg",4,null,["$4"],["o9"],16,0)
r(W,"ph",4,null,["$4"],["oa"],16,0)
var l
q(l=E.aS.prototype,"ge6",0,0,null,["$1","$0"],["e7","i5"],0,0)
q(l,"ge4",0,0,null,["$1","$0"],["e5","i2"],0,0)
p(l,"gi0","i1",4)
p(l,"gi3","i4",4)
q(l=E.dE.prototype,"gcR",0,0,null,["$1","$0"],["cT","cS"],0,0)
o(l,"gil","ed",9)
n(l=X.dN.prototype,"gfu","fv",5)
n(l,"gfh","fi",5)
n(l,"gfn","fo",2)
n(l,"gfA","fB",10)
n(l,"gfw","fz",10)
n(l,"gfE","fF",2)
n(l,"gfI","fJ",2)
n(l,"gfs","ft",2)
n(l,"gfG","fH",2)
n(l,"gfp","fq",2)
n(l,"gfK","fL",19)
n(l,"gfM","fN",5)
n(l,"gh1","h2",6)
n(l,"gfY","fZ",6)
n(l,"gh_","h0",6)
q(D.bv.prototype,"geI",0,0,null,["$1","$0"],["aB","eJ"],0,0)
q(l=D.dc.prototype,"gd6",0,0,null,["$1","$0"],["d7","fC"],0,0)
n(l,"gfO","fP",20)
p(l,"gfb","fc",11)
p(l,"gfS","fT",11)
m(V.K.prototype,"gm","cp",12)
m(V.A.prototype,"gm","cp",12)
q(l=U.c1.prototype,"gaR",0,0,null,["$1","$0"],["I","ae"],0,0)
p(l,"geK","eL",13)
p(l,"gfQ","fR",13)
q(l=U.dO.prototype,"gaR",0,0,null,["$1","$0"],["I","ae"],0,0)
n(l,"gbN","bO",1)
n(l,"gbP","bQ",1)
n(l,"gbR","bS",1)
q(l=U.dP.prototype,"gaR",0,0,null,["$1","$0"],["I","ae"],0,0)
n(l,"gbN","bO",1)
n(l,"gbP","bQ",1)
n(l,"gbR","bS",1)
n(l,"gf4","f5",1)
n(l,"gf6","f7",1)
n(l,"ghn","ho",1)
n(l,"ghl","hm",1)
n(l,"ghj","hk",1)
n(U.dQ.prototype,"gf9","fa",1)
q(l=M.cX.prototype,"gZ",0,0,null,["$1","$0"],["a_","b4"],0,0)
p(l,"gfU","fV",14)
p(l,"gfW","fX",14)
q(M.cZ.prototype,"gZ",0,0,null,["$1","$0"],["a_","b4"],0,0)
q(l=M.d3.prototype,"gZ",0,0,null,["$1","$0"],["a_","b4"],0,0)
p(l,"gfj","fk",4)
p(l,"gfl","fm",4)
q(l=O.df.prototype,"gaO",0,0,null,["$1","$0"],["Y","b5"],0,0)
q(l,"gh8",0,0,null,["$1","$0"],["d9","h9"],0,0)
p(l,"gfd","fe",15)
p(l,"gff","fg",15)
q(O.c8.prototype,"gaO",0,0,null,["$1","$0"],["Y","b5"],0,0)
q(O.dv.prototype,"gaO",0,0,null,["$1","$0"],["Y","b5"],0,0)
q(X.dn.prototype,"geP",0,0,null,["$1","$0"],["a1","eQ"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a3,null)
s(P.a3,[H.kX,J.a,J.a6,P.e9,P.i,H.bg,P.fQ,H.d4,H.iQ,H.fd,H.iD,P.bw,H.bX,H.er,P.a2,H.fY,H.h_,H.fS,P.ex,P.bH,P.bI,P.dU,P.dA,P.ih,P.dF,P.jZ,P.jB,P.jv,P.e8,P.x,P.jR,P.h6,P.f9,P.fL,P.jX,P.jW,P.aL,P.ae,P.ac,P.b9,P.hG,P.dy,P.e1,P.fE,P.fG,P.o,P.S,P.bj,P.h,P.T,P.bJ,P.iS,P.jE,W.fh,W.cv,W.N,W.dl,W.em,W.jL,W.d5,W.aX,W.jA,W.eF,P.jG,P.eC,P.jw,P.bF,K.aO,K.d6,K.bh,K.hP,K.hY,L.dz,L.dG,L.dH,L.ix,O.aP,O.c9,E.f5,E.aS,E.hQ,E.dE,Z.dS,Z.dT,Z.bW,Z.by,Z.b2,D.f8,D.bx,D.X,X.cV,X.db,X.fV,X.h3,X.ak,X.hu,X.iz,X.dN,D.f2,D.bv,D.a7,D.hK,D.ib,V.W,V.ad,V.fv,V.dg,V.aV,V.Z,V.L,V.al,V.dr,V.K,V.A,U.dO,U.dP,U.dQ,M.cZ,M.d3,M.aq,A.cS,A.eX,A.a0,A.cT,A.d0,A.dp,A.dx,A.hc,A.cn,A.co,A.cq,A.cr,A.dK,A.iL,F.ba,F.fy,F.c5,F.fX,F.cf,F.hZ,F.i0,F.i1,F.i2,F.b1,F.j3,F.j4,F.j7,F.j9,F.ja,F.jb,O.dC,O.c8,O.hd,T.it,X.il,X.kL,X.fM,X.dn,V.cW,V.hN,V.i3])
s(J.a,[J.fR,J.d9,J.da,J.bd,J.c4,J.be,H.cc,H.bi,W.f,W.eU,W.bs,W.aw,W.I,W.dW,W.aj,W.fm,W.fn,W.dY,W.d2,W.e_,W.fp,W.k,W.e2,W.ax,W.fJ,W.e4,W.aT,W.h2,W.ho,W.ea,W.eb,W.aA,W.ec,W.ef,W.aC,W.ej,W.el,W.aF,W.en,W.aG,W.es,W.ar,W.ev,W.iw,W.aI,W.ey,W.iB,W.iX,W.eG,W.eI,W.eK,W.eM,W.eO,P.aU,P.e6,P.aY,P.eh,P.hM,P.et,P.b0,P.eA,P.eY,P.dV,P.ds,P.ep])
s(J.da,[J.hH,J.bG,J.bf])
t(J.kW,J.bd)
s(J.c4,[J.d8,J.d7])
t(P.h1,P.e9)
s(P.h1,[H.dL,W.jl,W.a4,P.fA])
t(H.n,H.dL)
s(P.i,[H.q,H.c7,H.ct,P.fO])
s(H.q,[H.dd,H.fZ])
t(H.fs,H.c7)
s(P.fQ,[H.h7,H.jf])
t(H.h8,H.dd)
t(H.fe,H.fd)
s(P.bw,[H.hD,H.fU,H.iP,H.f7,H.hW,P.dm,P.an,P.iR,P.iN,P.cj,P.fc,P.fk])
s(H.bX,[H.kG,H.im,H.fT,H.ki,H.kj,H.kk,P.jh,P.jg,P.ji,P.jj,P.jQ,P.jP,P.k7,P.jy,P.jz,P.h0,P.h5,P.fq,P.fr,P.iW,P.iT,P.iU,P.iV,P.jS,P.jT,P.jV,P.jU,P.k2,P.k1,P.k3,P.k4,W.ft,W.hq,W.hs,W.hV,W.ig,W.jq,W.hB,W.hA,W.jC,W.jD,W.jO,W.jY,P.jI,P.jJ,P.k8,P.fB,P.fC,P.f_,E.hR,E.hS,E.hT,E.iv,D.fw,D.fx,F.k_,F.ka,F.kc,F.kd,F.ke,F.kC,F.kD,F.kF,F.km,F.kb,F.jd,F.jc,F.j5,F.j6,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,O.hm,O.hn,T.iu,V.kB,V.hO,V.i5,V.i4,V.i6,V.kq,V.kr,V.kp,V.ks,V.kt,V.ku,V.ko,V.kv,V.kw,V.kn,V.kx,V.ky,V.kz])
s(H.im,[H.id,H.bU])
t(P.h4,P.a2)
s(P.h4,[H.J,W.jk])
t(H.dh,H.bi)
s(H.dh,[H.cx,H.cz])
t(H.cy,H.cx)
t(H.cd,H.cy)
t(H.cA,H.cz)
t(H.di,H.cA)
s(H.di,[H.hv,H.hw,H.hx,H.hy,H.hz,H.dj,H.ce])
t(P.jM,P.fO)
t(P.jx,P.jZ)
t(P.ju,P.jB)
t(P.eD,P.h6)
t(P.dM,P.eD)
s(P.f9,[P.f3,P.fu])
t(P.ff,P.ih)
s(P.ff,[P.f4,P.fK,P.j_,P.iZ])
t(P.iY,P.fu)
s(P.ac,[P.M,P.v])
s(P.an,[P.bD,P.fN])
t(P.jn,P.bJ)
s(W.f,[W.E,W.fz,W.ca,W.aE,W.cB,W.aH,W.as,W.cD,W.je,W.cu,P.f0,P.br])
s(W.E,[W.R,W.b8])
s(W.R,[W.p,P.l])
s(W.p,[W.eV,W.eW,W.bt,W.bu,W.ao,W.fD,W.c3,W.hX,W.dB,W.ij,W.ik,W.cl])
t(W.fg,W.aw)
t(W.bY,W.dW)
s(W.aj,[W.fi,W.fj])
t(W.dZ,W.dY)
t(W.d1,W.dZ)
t(W.e0,W.e_)
t(W.fo,W.e0)
t(W.ap,W.bs)
t(W.e3,W.e2)
t(W.c0,W.e3)
t(W.e5,W.e4)
t(W.c2,W.e5)
t(W.bk,W.k)
s(W.bk,[W.bz,W.aB,W.bE])
t(W.hp,W.ea)
t(W.hr,W.eb)
t(W.ed,W.ec)
t(W.ht,W.ed)
t(W.eg,W.ef)
t(W.dk,W.eg)
t(W.ek,W.ej)
t(W.hJ,W.ek)
t(W.hU,W.el)
t(W.cC,W.cB)
t(W.i9,W.cC)
t(W.eo,W.en)
t(W.ia,W.eo)
t(W.ie,W.es)
t(W.ew,W.ev)
t(W.io,W.ew)
t(W.cE,W.cD)
t(W.ip,W.cE)
t(W.ez,W.ey)
t(W.iA,W.ez)
t(W.bn,W.aB)
t(W.eH,W.eG)
t(W.jm,W.eH)
t(W.dX,W.d2)
t(W.eJ,W.eI)
t(W.jr,W.eJ)
t(W.eL,W.eK)
t(W.ee,W.eL)
t(W.eN,W.eM)
t(W.jF,W.eN)
t(W.eP,W.eO)
t(W.jK,W.eP)
t(W.jo,W.jk)
t(W.jp,P.dA)
t(W.jN,W.em)
t(P.jH,P.jG)
t(P.a9,P.jw)
t(P.e7,P.e6)
t(P.fW,P.e7)
t(P.ei,P.eh)
t(P.hE,P.ei)
t(P.ci,P.l)
t(P.eu,P.et)
t(P.ii,P.eu)
t(P.eB,P.eA)
t(P.iC,P.eB)
t(P.eZ,P.dV)
t(P.hF,P.br)
t(P.eq,P.ep)
t(P.ic,P.eq)
s(K.d6,[K.a8,L.dJ])
s(E.f5,[Z.cU,A.du,T.dD])
s(D.X,[D.bb,D.bc,D.y,X.hL])
s(X.hL,[X.de,X.aW,X.cb,X.dI])
s(O.aP,[D.dc,U.c1,M.cX])
s(D.f8,[U.fb,U.af])
s(U.af,[U.cY,U.dt])
s(A.du,[A.h9,A.i8])
s(A.dK,[A.bl,A.iI,A.iJ,A.iK,A.iG,A.U,A.iH,A.H,A.cm,A.iM,A.cp,A.aa,A.a1,A.bm])
t(F.i7,F.fy)
t(F.iF,F.fX)
t(F.j8,F.j9)
t(F.hC,F.ja)
s(O.dC,[O.df,O.dv])
s(O.c8,[O.ha,O.hb,O.ay])
s(O.ay,[O.he,O.hf])
s(T.dD,[T.iq,T.is])
t(T.ir,T.iq)
s(X.il,[X.f1,X.fF])
s(V.cW,[V.fl,V.fH,V.fI,V.hI])
u(H.dL,H.iQ)
u(H.cx,P.x)
u(H.cy,H.d4)
u(H.cz,P.x)
u(H.cA,H.d4)
u(P.e9,P.x)
u(P.eD,P.jR)
u(W.dW,W.fh)
u(W.dY,P.x)
u(W.dZ,W.N)
u(W.e_,P.x)
u(W.e0,W.N)
u(W.e2,P.x)
u(W.e3,W.N)
u(W.e4,P.x)
u(W.e5,W.N)
u(W.ea,P.a2)
u(W.eb,P.a2)
u(W.ec,P.x)
u(W.ed,W.N)
u(W.ef,P.x)
u(W.eg,W.N)
u(W.ej,P.x)
u(W.ek,W.N)
u(W.el,P.a2)
u(W.cB,P.x)
u(W.cC,W.N)
u(W.en,P.x)
u(W.eo,W.N)
u(W.es,P.a2)
u(W.ev,P.x)
u(W.ew,W.N)
u(W.cD,P.x)
u(W.cE,W.N)
u(W.ey,P.x)
u(W.ez,W.N)
u(W.eG,P.x)
u(W.eH,W.N)
u(W.eI,P.x)
u(W.eJ,W.N)
u(W.eK,P.x)
u(W.eL,W.N)
u(W.eM,P.x)
u(W.eN,W.N)
u(W.eO,P.x)
u(W.eP,W.N)
u(P.e6,P.x)
u(P.e7,W.N)
u(P.eh,P.x)
u(P.ei,W.N)
u(P.et,P.x)
u(P.eu,W.N)
u(P.eA,P.x)
u(P.eB,W.N)
u(P.dV,P.a2)
u(P.ep,P.x)
u(P.eq,W.N)})()
var v={mangledGlobalNames:{v:"int",M:"double",ac:"num",h:"String",aL:"bool",bj:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.X]},{func:1,ret:-1,args:[D.X]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.bj,args:[,,]},{func:1,ret:-1,args:[P.v,[P.i,E.aS]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bz]},{func:1,ret:-1,args:[P.v,[P.i,D.a7]]},{func:1,ret:P.M},{func:1,ret:-1,args:[P.v,[P.i,U.af]]},{func:1,ret:-1,args:[P.v,[P.i,M.aq]]},{func:1,ret:-1,args:[P.v,[P.i,V.aV]]},{func:1,ret:P.aL,args:[W.R,P.h,P.h,W.cv]},{func:1,ret:P.bj,args:[,]},{func:1,ret:P.bF,args:[,,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.aL,args:[[P.i,D.a7]]},{func:1,ret:P.v,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bt.prototype
C.i=W.bu.prototype
C.O=W.ao.prototype
C.R=J.a.prototype
C.b=J.bd.prototype
C.S=J.d7.prototype
C.c=J.d8.prototype
C.j=J.d9.prototype
C.d=J.c4.prototype
C.a=J.be.prototype
C.T=J.bf.prototype
C.A=J.hH.prototype
C.B=P.ds.prototype
C.C=W.dB.prototype
C.q=J.bG.prototype
C.D=W.bn.prototype
C.E=W.cu.prototype
C.a_=new P.f4()
C.F=new P.f3()
C.t=function getTagFallback(o) {
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
C.u=function(hooks) { return hooks; }

C.M=new P.hG()
C.e=new P.iY()
C.N=new P.j_()
C.f=new P.jx()
C.n=new P.b9(0)
C.P=new P.b9(5e6)
C.Q=new P.fL("element",!1,!1,!1)
C.v=H.b(u([127,2047,65535,1114111]),[P.v])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.v])
C.U=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.v])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.v])
C.V=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.w=H.b(u([]),[P.h])
C.W=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.v])
C.x=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.v])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.v])
C.y=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.v])
C.X=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.v])
C.z=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.v])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.Y=new H.fe(0,{},C.w,[P.h,P.h])
C.Z=new P.bH(null,2)})();(function staticFields(){$.av=0
$.bV=null
$.lw=null
$.my=null
$.mq=null
$.mC=null
$.kf=null
$.kl=null
$.lj=null
$.bM=null
$.cH=null
$.cI=null
$.le=!1
$.at=C.f
$.ab=[]
$.aR=null
$.kR=null
$.lB=null
$.lA=null
$.cw=P.kZ(P.h,P.fG)
$.lN=null
$.lQ=null
$.aD=null
$.lW=null
$.m7=null
$.ma=null
$.m9=null
$.j0=null
$.j1=null
$.j2=null
$.m8=null
$.lP=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pz","mI",function(){return H.mx("_$dart_dartClosure")})
u($,"pA","lo",function(){return H.mx("_$dart_js")})
u($,"pB","mJ",function(){return H.aJ(H.iE({
toString:function(){return"$receiver$"}}))})
u($,"pC","mK",function(){return H.aJ(H.iE({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pD","mL",function(){return H.aJ(H.iE(null))})
u($,"pE","mM",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pH","mP",function(){return H.aJ(H.iE(void 0))})
u($,"pI","mQ",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pG","mO",function(){return H.aJ(H.m2(null))})
u($,"pF","mN",function(){return H.aJ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pK","mS",function(){return H.aJ(H.m2(void 0))})
u($,"pJ","mR",function(){return H.aJ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pY","lp",function(){return P.o5()})
u($,"pL","mT",function(){return P.o1()})
u($,"pZ","mX",function(){return H.nA(H.bL(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.v])))})
u($,"q1","mZ",function(){return P.nO("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"q2","n_",function(){return P.ow()})
u($,"q_","mY",function(){return P.lG(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pS","mW",function(){return Z.am(0)})
u($,"pM","mU",function(){return Z.am(511)})
u($,"pU","au",function(){return Z.am(1)})
u($,"pT","b6",function(){return Z.am(2)})
u($,"pO","b5",function(){return Z.am(4)})
u($,"pV","b7",function(){return Z.am(8)})
u($,"pW","bq",function(){return Z.am(16)})
u($,"pP","cN",function(){return Z.am(32)})
u($,"pQ","cO",function(){return Z.am(64)})
u($,"pR","mV",function(){return Z.am(96)})
u($,"pX","bS",function(){return Z.am(128)})
u($,"pN","b4",function(){return Z.am(256)})
u($,"py","mH",function(){return new V.fv(1e-9)})
u($,"px","B",function(){return $.mH()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cc,DataView:H.bi,ArrayBufferView:H.bi,Float32Array:H.cd,Float64Array:H.cd,Int16Array:H.hv,Int32Array:H.hw,Int8Array:H.hx,Uint16Array:H.hy,Uint32Array:H.hz,Uint8ClampedArray:H.dj,CanvasPixelArray:H.dj,Uint8Array:H.ce,HTMLAudioElement:W.p,HTMLBRElement:W.p,HTMLBaseElement:W.p,HTMLButtonElement:W.p,HTMLContentElement:W.p,HTMLDListElement:W.p,HTMLDataElement:W.p,HTMLDataListElement:W.p,HTMLDetailsElement:W.p,HTMLDialogElement:W.p,HTMLEmbedElement:W.p,HTMLFieldSetElement:W.p,HTMLHRElement:W.p,HTMLHeadElement:W.p,HTMLHeadingElement:W.p,HTMLHtmlElement:W.p,HTMLIFrameElement:W.p,HTMLInputElement:W.p,HTMLLIElement:W.p,HTMLLabelElement:W.p,HTMLLegendElement:W.p,HTMLLinkElement:W.p,HTMLMapElement:W.p,HTMLMediaElement:W.p,HTMLMenuElement:W.p,HTMLMetaElement:W.p,HTMLMeterElement:W.p,HTMLModElement:W.p,HTMLOListElement:W.p,HTMLObjectElement:W.p,HTMLOptGroupElement:W.p,HTMLOptionElement:W.p,HTMLOutputElement:W.p,HTMLParagraphElement:W.p,HTMLParamElement:W.p,HTMLPictureElement:W.p,HTMLPreElement:W.p,HTMLProgressElement:W.p,HTMLQuoteElement:W.p,HTMLScriptElement:W.p,HTMLShadowElement:W.p,HTMLSlotElement:W.p,HTMLSourceElement:W.p,HTMLSpanElement:W.p,HTMLStyleElement:W.p,HTMLTableCaptionElement:W.p,HTMLTableCellElement:W.p,HTMLTableDataCellElement:W.p,HTMLTableHeaderCellElement:W.p,HTMLTableColElement:W.p,HTMLTextAreaElement:W.p,HTMLTimeElement:W.p,HTMLTitleElement:W.p,HTMLTrackElement:W.p,HTMLUListElement:W.p,HTMLUnknownElement:W.p,HTMLVideoElement:W.p,HTMLDirectoryElement:W.p,HTMLFontElement:W.p,HTMLFrameElement:W.p,HTMLFrameSetElement:W.p,HTMLMarqueeElement:W.p,HTMLElement:W.p,AccessibleNodeList:W.eU,HTMLAnchorElement:W.eV,HTMLAreaElement:W.eW,Blob:W.bs,HTMLBodyElement:W.bt,HTMLCanvasElement:W.bu,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSPerspective:W.fg,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.bY,MSStyleCSSProperties:W.bY,CSS2Properties:W.bY,CSSImageValue:W.aj,CSSKeywordValue:W.aj,CSSNumericValue:W.aj,CSSPositionValue:W.aj,CSSResourceValue:W.aj,CSSUnitValue:W.aj,CSSURLImageValue:W.aj,CSSStyleValue:W.aj,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.fi,CSSUnparsedValue:W.fj,DataTransferItemList:W.fm,HTMLDivElement:W.ao,DOMException:W.fn,ClientRectList:W.d1,DOMRectList:W.d1,DOMRectReadOnly:W.d2,DOMStringList:W.fo,DOMTokenList:W.fp,Element:W.R,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ap,FileList:W.c0,FileWriter:W.fz,HTMLFormElement:W.fD,Gamepad:W.ax,History:W.fJ,HTMLCollection:W.c2,HTMLFormControlsCollection:W.c2,HTMLOptionsCollection:W.c2,ImageData:W.aT,HTMLImageElement:W.c3,KeyboardEvent:W.bz,Location:W.h2,MediaList:W.ho,MessagePort:W.ca,MIDIInputMap:W.hp,MIDIOutputMap:W.hr,MimeType:W.aA,MimeTypeArray:W.ht,PointerEvent:W.aB,MouseEvent:W.aB,DragEvent:W.aB,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dk,RadioNodeList:W.dk,Plugin:W.aC,PluginArray:W.hJ,RTCStatsReport:W.hU,HTMLSelectElement:W.hX,SourceBuffer:W.aE,SourceBufferList:W.i9,SpeechGrammar:W.aF,SpeechGrammarList:W.ia,SpeechRecognitionResult:W.aG,Storage:W.ie,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.dB,HTMLTableRowElement:W.ij,HTMLTableSectionElement:W.ik,HTMLTemplateElement:W.cl,TextTrack:W.aH,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.io,TextTrackList:W.ip,TimeRanges:W.iw,Touch:W.aI,TouchEvent:W.bE,TouchList:W.iA,TrackDefaultList:W.iB,CompositionEvent:W.bk,FocusEvent:W.bk,TextEvent:W.bk,UIEvent:W.bk,URL:W.iX,VideoTrackList:W.je,WheelEvent:W.bn,Window:W.cu,DOMWindow:W.cu,CSSRuleList:W.jm,ClientRect:W.dX,DOMRect:W.dX,GamepadList:W.jr,NamedNodeMap:W.ee,MozNamedAttrMap:W.ee,SpeechRecognitionResultList:W.jF,StyleSheetList:W.jK,SVGLength:P.aU,SVGLengthList:P.fW,SVGNumber:P.aY,SVGNumberList:P.hE,SVGPointList:P.hM,SVGScriptElement:P.ci,SVGStringList:P.ii,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b0,SVGTransformList:P.iC,AudioBuffer:P.eY,AudioParamMap:P.eZ,AudioTrackList:P.f0,AudioContext:P.br,webkitAudioContext:P.br,BaseAudioContext:P.br,OfflineAudioContext:P.hF,WebGL2RenderingContext:P.ds,SQLResultSetRowList:P.ic})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dh.$nativeSuperclassTag="ArrayBufferView"
H.cx.$nativeSuperclassTag="ArrayBufferView"
H.cy.$nativeSuperclassTag="ArrayBufferView"
H.cd.$nativeSuperclassTag="ArrayBufferView"
H.cz.$nativeSuperclassTag="ArrayBufferView"
H.cA.$nativeSuperclassTag="ArrayBufferView"
H.di.$nativeSuperclassTag="ArrayBufferView"
W.cB.$nativeSuperclassTag="EventTarget"
W.cC.$nativeSuperclassTag="EventTarget"
W.cD.$nativeSuperclassTag="EventTarget"
W.cE.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(V.mA,[])
else V.mA([])})})()
//# sourceMappingURL=test.dart.js.map
