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
a[c]=function(){a[c]=function(){H.mL(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.jv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.jv"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.jv(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={ji:function ji(){},
le:function(a,b,c,d){if(!!a.$in)return new H.eJ(a,b,[c,d])
return new H.bL(a,b,[c,d])},
f7:function(){return new P.bT("No element")},
l8:function(){return new P.bT("Too many elements")},
ly:function(a,b){var u=J.aL(a)
if(typeof u!=="number")return u.P()
H.d1(a,0,u-1,b)},
d1:function(a,b,c,d){if(c-b<=32)H.lx(a,b,c,d)
else H.lw(a,b,c,d)},
lx:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.b6(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.S()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
lw:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.T(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.T(a4+a5,2),f=g-j,e=g+j,d=J.b6(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.S()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.K(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.am()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.S()
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
if(typeof l!=="number")return l.am()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.S()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.S()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.am()
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
H.d1(a3,a4,t-2,a6)
H.d1(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.K(a6.$2(d.h(a3,t),b),0);)++t
for(;J.K(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.am()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.d1(a3,t,s,a6)}else H.d1(a3,t,s,a6)},
k:function k(a){this.a=a},
n:function n(){},
cJ:function cJ(){},
aW:function aW(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bL:function bL(a,b,c){this.a=a
this.b=b
this.$ti=c},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
cK:function cK(a,b){this.a=null
this.b=a
this.c=b},
fo:function fo(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
ih:function ih(a,b){this.a=a
this.b=b},
cz:function cz(){},
hW:function hW(){},
de:function de(){},
ch:function(a){var u,t=H.mN(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
mv:function(a){return v.types[a]},
mC:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.P(a).$iv},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aa(a)
if(typeof u!=="string")throw H.c(H.b5(a))
return u},
bQ:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bR:function(a){return H.lh(a)+H.kl(H.cg(a),0,null)},
lh:function(a){var u,t,s,r,q,p,o,n=J.P(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.M||!!n.$ibq){r=C.p(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ch(t.length>1&&C.b.aE(t,0)===36?C.b.a4(t,1):t)},
k0:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
lq:function(a){var u,t,s,r=H.b([],[P.x])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b5(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.aQ(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.b5(s))}return H.k0(r)},
lp:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.b5(s))
if(s<0)throw H.c(H.b5(s))
if(s>65535)return H.lq(a)}return H.k0(a)},
jm:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.aQ(u,10))>>>0,56320|u&1023)}throw H.c(P.ai(a,0,1114111,null,null))},
bl:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
lo:function(a){var u=H.bl(a).getFullYear()+0
return u},
lm:function(a){var u=H.bl(a).getMonth()+1
return u},
li:function(a){var u=H.bl(a).getDate()+0
return u},
lj:function(a){var u=H.bl(a).getHours()+0
return u},
ll:function(a){var u=H.bl(a).getMinutes()+0
return u},
ln:function(a){var u=H.bl(a).getSeconds()+0
return u},
lk:function(a){var u=H.bl(a).getMilliseconds()+0
return u},
V:function(a){throw H.c(H.b5(a))},
f:function(a,b){if(a==null)J.aL(a)
throw H.c(H.bx(a,b))},
bx:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ab(!0,b,s,null)
u=J.aL(a)
if(!(b<0)){if(typeof u!=="number")return H.V(u)
t=b>=u}else t=!0
if(t)return P.G(b,a,s,null,u)
return P.cY(b,s)},
mp:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bm(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bm(a,c,!0,b,"end",u)
return new P.ab(!0,b,"end",null)},
b5:function(a){return new P.ab(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.cT()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ky})
u.name=""}else u.toString=H.ky
return u},
ky:function(){return J.aa(this.dartException)},
u:function(a){throw H.c(a)},
p:function(a){throw H.c(P.aO(a))},
am:function(a){var u,t,s,r,q,p
a=H.kw(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.m])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hK(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hL:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
k8:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
jX:function(a,b){return new H.fV(a,b==null?null:b.method)},
jj:function(a,b){var u=b==null,t=u?null:b.method
return new H.fd(a,t,u?null:b.receiver)},
aq:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.j6(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.aQ(t,16)&8191)===10)switch(s){case 438:return f.$1(H.jj(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.jX(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.kB()
q=$.kC()
p=$.kD()
o=$.kE()
n=$.kH()
m=$.kI()
l=$.kG()
$.kF()
k=$.kK()
j=$.kJ()
i=r.a_(u)
if(i!=null)return f.$1(H.jj(u,i))
else{i=q.a_(u)
if(i!=null){i.method="call"
return f.$1(H.jj(u,i))}else{i=p.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=n.a_(u)
if(i==null){i=m.a_(u)
if(i==null){i=l.a_(u)
if(i==null){i=o.a_(u)
if(i==null){i=k.a_(u)
if(i==null){i=j.a_(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.jX(u,i))}}return f.$1(new H.hV(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.d3()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ab(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.d3()
return a},
jy:function(a){var u
if(a==null)return new H.dS(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dS(a)},
mt:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
mB:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.q("Unsupported number of arguments for wrapped closure"))},
bw:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.mB)
a.$identity=u
return u},
l1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hq().constructor.prototype):Object.create(new H.bA(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ac
if(typeof t!=="number")return t.H()
$.ac=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.jM(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kY(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.jM(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kY:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.mv,a)
if(typeof a=="function")if(b)return a
else{u=c?H.jK:H.j9
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kZ:function(a,b,c,d){var u=H.j9
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
jM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.l0(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kZ(t,!r,u,b)
if(t===0){r=$.ac
if(typeof r!=="number")return r.H()
$.ac=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bB
return new Function(r+H.d(q==null?$.bB=H.er("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ac
if(typeof r!=="number")return r.H()
$.ac=r+1
o+=r
r="return function("+o+"){return this."
q=$.bB
return new Function(r+H.d(q==null?$.bB=H.er("self"):q)+"."+H.d(u)+"("+o+");}")()},
l_:function(a,b,c,d){var u=H.j9,t=H.jK
switch(b?-1:a){case 0:throw H.c(H.lu("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
l0:function(a,b){var u,t,s,r,q,p,o,n=$.bB
if(n==null)n=$.bB=H.er("self")
u=$.jJ
if(u==null)u=$.jJ=H.er("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.l_(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.ac
if(typeof u!=="number")return u.H()
$.ac=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.ac
if(typeof u!=="number")return u.H()
$.ac=u+1
return new Function(n+u+"}")()},
jv:function(a,b,c,d,e,f,g){return H.l1(a,b,c,d,!!e,!!f,g)},
j9:function(a){return a.a},
jK:function(a){return a.c},
er:function(a){var u,t,s,r=new H.bA("self","target","receiver","name"),q=J.jg(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
mG:function(a,b){throw H.c(H.kX(a,H.ch(b.substring(2))))},
r:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.P(a)[b]
else u=!0
if(u)return a
H.mG(a,b)},
mr:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
kX:function(a,b){return new H.es("CastError: "+P.je(a)+": type '"+H.d(H.mj(a))+"' is not a subtype of type '"+b+"'")},
mj:function(a){var u,t=J.P(a)
if(!!t.$ibC){u=H.mr(t)
if(u!=null)return H.mH(u)
return"Closure"}return H.bR(a)},
mL:function(a){throw H.c(new P.eB(a))},
lu:function(a){return new H.ha(a)},
kr:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cg:function(a){if(a==null)return
return a.$ti},
nj:function(a,b,c){return H.j4(a["$a"+H.d(c)],H.cg(b))},
mu:function(a,b,c,d){var u=H.j4(a["$a"+H.d(c)],H.cg(b))
return u==null?null:u[d]},
jx:function(a,b,c){var u=H.j4(a["$a"+H.d(b)],H.cg(a))
return u==null?null:u[c]},
a9:function(a,b){var u=H.cg(a)
return u==null?null:u[b]},
mH:function(a){return H.b4(a,null)},
b4:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ch(a[0].name)+H.kl(a,1,b)
if(typeof a=="function")return H.ch(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.d(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.d(b[t])}if('func' in a)return H.lP(a,b)
if('futureOr' in a)return"FutureOr<"+H.b4("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
lP:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.m])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.H(p,a0[m])
l=u[q]
if(l!=null&&l!==P.S)p+=" extends "+H.b4(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b4(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b4(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b4(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.ms(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b4(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
kl:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aj("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b4(p,c)}return"<"+u.i(0)+">"},
j4:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
nh:function(a,b,c){return a.apply(b,H.j4(J.P(b)["$a"+H.d(c)],H.cg(b)))},
ni:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
mD:function(a){var u,t,s,r,q=$.ks.$1(a),p=$.iV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.ko.$2(a,q)
if(q!=null){p=$.iV[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.j0[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.j2(u)
$.iV[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.j0[q]=u
return u}if(s==="-"){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.ku(a,u)
if(s==="*")throw H.c(P.k9(q))
if(v.leafTags[q]===true){r=H.j2(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.ku(a,u)},
ku:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.jA(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
j2:function(a){return J.jA(a,!1,null,!!a.$iv)},
mE:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.j2(u)
else return J.jA(u,c,null,null)},
mz:function(){if(!0===$.jz)return
$.jz=!0
H.mA()},
mA:function(){var u,t,s,r,q,p,o,n
$.iV=Object.create(null)
$.j0=Object.create(null)
H.my()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.kv.$1(q)
if(p!=null){o=H.mE(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
my:function(){var u,t,s,r,q,p,o=C.A()
o=H.bv(C.B,H.bv(C.C,H.bv(C.q,H.bv(C.q,H.bv(C.D,H.bv(C.E,H.bv(C.F(C.p),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ks=new H.iY(r)
$.ko=new H.iZ(q)
$.kv=new H.j_(p)},
bv:function(a,b){return a(b)||b},
lb:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.eY("Illegal RegExp pattern ("+String(p)+")",a))},
kx:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
mq:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
kw:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
jC:function(a,b,c){var u=H.mJ(a,b,c)
return u},
mJ:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.kw(b),'g'),H.mq(c))},
hK:function hK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fV:function fV(a,b){this.a=a
this.b=b},
fd:function fd(a,b,c){this.a=a
this.b=b
this.c=c},
hV:function hV(a){this.a=a},
j6:function j6(a){this.a=a},
dS:function dS(a){this.a=a
this.b=null},
bC:function bC(){},
hy:function hy(){},
hq:function hq(){},
bA:function bA(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
es:function es(a){this.a=a},
ha:function ha(a){this.a=a},
E:function E(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fc:function fc(a){this.a=a},
fh:function fh(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bj:function bj(a,b){this.a=a
this.$ti=b},
fi:function fi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iY:function iY(a){this.a=a},
iZ:function iZ(a){this.a=a},
j_:function j_(a){this.a=a},
fb:function fb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cd:function(a){return a},
an:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bx(b,a))},
lO:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.mp(a,b,c))
return b},
bP:function bP(){},
cO:function cO(){},
bO:function bO(){},
cP:function cP(){},
fM:function fM(){},
fN:function fN(){},
fO:function fO(){},
fP:function fP(){},
fQ:function fQ(){},
cQ:function cQ(){},
fR:function fR(){},
c5:function c5(){},
c6:function c6(){},
c7:function c7(){},
c8:function c8(){},
ms:function(a){return J.jR(a?Object.keys(a):[],null)},
mN:function(a){return v.mangledGlobalNames[a]},
mF:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
jA:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
iX:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.jz==null){H.mz()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.k9("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.jE()]
if(r!=null)return r
r=H.mD(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.u
if(u===Object.prototype)return C.u
if(typeof s=="function"){Object.defineProperty(s,$.jE(),{value:C.l,enumerable:false,writable:true,configurable:true})
return C.l}return C.l},
l9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.j8(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ai(a,0,4294967295,"length",null))
return J.jR(new Array(a),b)},
jR:function(a,b){return J.jg(H.b(a,[b]))},
jg:function(a){a.fixed$length=Array
return a},
la:function(a,b){return J.cl(a,b)},
P:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cD.prototype
return J.fa.prototype}if(typeof a=="string")return J.aT.prototype
if(a==null)return J.cE.prototype
if(typeof a=="boolean")return J.f9.prototype
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.S)return a
return J.iX(a)},
b6:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.S)return a
return J.iX(a)},
iW:function(a){if(a==null)return a
if(a.constructor==Array)return J.aS.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.S)return a
return J.iX(a)},
kq:function(a){if(typeof a=="number")return J.bI.prototype
if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bq.prototype
return a},
jw:function(a){if(typeof a=="string")return J.aT.prototype
if(a==null)return a
if(!(a instanceof P.S))return J.bq.prototype
return a},
ed:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aU.prototype
return a}if(a instanceof P.S)return a
return J.iX(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.P(a).n(a,b)},
jG:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.kq(a).I(a,b)},
ck:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mC(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.b6(a).h(a,b)},
kQ:function(a,b,c){return J.ed(a).eu(a,b,c)},
kR:function(a,b,c,d){return J.ed(a).eI(a,b,c,d)},
cl:function(a,b){return J.kq(a).aw(a,b)},
j7:function(a,b){return J.b6(a).t(a,b)},
ef:function(a,b){return J.iW(a).u(a,b)},
kS:function(a,b){return J.iW(a).A(a,b)},
kT:function(a){return J.ed(a).geM(a)},
eg:function(a){return J.P(a).gF(a)},
aK:function(a){return J.iW(a).gK(a)},
aL:function(a){return J.b6(a).gl(a)},
jH:function(a){return J.iW(a).fs(a)},
kU:function(a,b){return J.ed(a).fw(a,b)},
kV:function(a,b,c){return J.jw(a).aM(a,b,c)},
kW:function(a){return J.jw(a).fF(a)},
aa:function(a){return J.P(a).i(a)},
a:function a(){},
f9:function f9(){},
cE:function cE(){},
cF:function cF(){},
fZ:function fZ(){},
bq:function bq(){},
aU:function aU(){},
aS:function aS(a){this.$ti=a},
jh:function jh(a){this.$ti=a},
a0:function a0(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bI:function bI(){},
cD:function cD(){},
fa:function fa(){},
aT:function aT(){}},P={
lD:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.mk()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bw(new P.ij(s),1)).observe(u,{childList:true})
return new P.ii(s,u,t)}else if(self.setImmediate!=null)return P.ml()
return P.mm()},
lE:function(a){self.scheduleImmediate(H.bw(new P.ik(a),0))},
lF:function(a){self.setImmediate(H.bw(new P.il(a),0))},
lG:function(a){P.jp(C.h,a)},
jp:function(a,b){var u=C.d.T(a.a,1000)
return P.lM(u<0?0:u,b)},
k7:function(a,b){var u=C.d.T(a.a,1000)
return P.lN(u<0?0:u,b)},
lM:function(a,b){var u=new P.dY()
u.df(a,b)
return u},
lN:function(a,b){var u=new P.dY()
u.dg(a,b)
return u},
nf:function(a){return new P.bs(a,1)},
lJ:function(){return C.U},
lK:function(a){return new P.bs(a,3)},
lS:function(a,b){return new P.iI(a,[b])},
md:function(){var u,t
for(;u=$.bu,u!=null;){$.cf=null
t=u.b
$.bu=t
if(t==null)$.ce=null
u.a.$0()}},
mi:function(){$.jt=!0
try{P.md()}finally{$.cf=null
$.jt=!1
if($.bu!=null)$.jF().$1(P.kp())}},
mg:function(a){var u=new P.dh(a)
if($.bu==null){$.bu=$.ce=u
if(!$.jt)$.jF().$1(P.kp())}else $.ce=$.ce.b=u},
mh:function(a){var u,t,s=$.bu
if(s==null){P.mg(a)
$.cf=$.ce
return}u=new P.dh(a)
t=$.cf
if(t==null){u.b=s
$.bu=$.cf=u}else{u.b=t.b
$.cf=t.b=u
if(u.b==null)$.ce=u}},
k6:function(a,b){var u=$.a8
if(u===C.e)return P.jp(a,b)
return P.jp(a,u.eN(b))},
lA:function(a,b){var u=$.a8
if(u===C.e)return P.k7(a,b)
return P.k7(a,u.cb(b,P.d9))},
km:function(a,b,c,d,e){var u={}
u.a=d
P.mh(new P.iS(u,e))},
me:function(a,b,c,d){var u,t=$.a8
if(t===c)return d.$0()
$.a8=c
u=t
try{t=d.$0()
return t}finally{$.a8=u}},
mf:function(a,b,c,d,e){var u,t=$.a8
if(t===c)return d.$1(e)
$.a8=c
u=t
try{t=d.$1(e)
return t}finally{$.a8=u}},
ij:function ij(a){this.a=a},
ii:function ii(a,b,c){this.a=a
this.b=b
this.c=c},
ik:function ik(a){this.a=a},
il:function il(a){this.a=a},
dY:function dY(){this.c=0},
iM:function iM(a,b){this.a=a
this.b=b},
iL:function iL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bs:function bs(a,b){this.a=a
this.b=b},
bt:function bt(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iI:function iI(a,b){this.a=a
this.$ti=b},
dh:function dh(a){this.a=a
this.b=null},
d5:function d5(){},
ht:function ht(){},
d9:function d9(){},
iP:function iP(){},
iS:function iS(a,b){this.a=a
this.b=b},
iy:function iy(){},
iz:function iz(a,b){this.a=a
this.b=b},
iA:function iA(a,b,c){this.a=a
this.b=b
this.c=c},
jS:function(a,b){return new H.E([a,b])},
lc:function(a){return H.mt(a,new H.E([null,null]))},
bJ:function(a){return new P.iv([a])},
js:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
lL:function(a,b){var u=new P.dz(a,b)
u.c=a.e
return u},
l7:function(a,b,c){var u,t
if(P.ju(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.m])
$.Z.push(a)
try{P.lR(a,u)}finally{if(0>=$.Z.length)return H.f($.Z,-1)
$.Z.pop()}t=P.k4(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
jf:function(a,b,c){var u,t
if(P.ju(a))return b+"..."+c
u=new P.aj(b)
$.Z.push(a)
try{t=u
t.a=P.k4(t.a,a,", ")}finally{if(0>=$.Z.length)return H.f($.Z,-1)
$.Z.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ju:function(a){var u,t
for(u=$.Z.length,t=0;t<u;++t)if(a===$.Z[t])return!0
return!1},
lR:function(a,b){var u,t,s,r,q,p,o,n=a.gK(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.d(n.gv(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gv(n);++l
if(!n.p()){if(l<=4){b.push(H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gv(n);++l
for(;n.p();r=q,q=p){p=n.gv(n);++l
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
jT:function(a,b){var u,t,s=P.bJ(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t)s.q(0,a[t])
return s},
jU:function(a){var u,t={}
if(P.ju(a))return"{...}"
u=new P.aj("")
try{$.Z.push(a)
u.a+="{"
t.a=!0
J.kS(a,new P.fn(t,u))
u.a+="}"}finally{if(0>=$.Z.length)return H.f($.Z,-1)
$.Z.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iv:function iv(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iw:function iw(a){this.a=a
this.c=this.b=null},
dz:function dz(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
f6:function f6(){},
fj:function fj(){},
t:function t(){},
fm:function fm(){},
fn:function fn(a,b){this.a=a
this.b=b},
R:function R(){},
iC:function iC(){},
dA:function dA(){},
eu:function eu(){},
ew:function ew(){},
eL:function eL(){},
f4:function f4(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
f3:function f3(a){this.a=a},
hZ:function hZ(){},
i_:function i_(){},
iN:function iN(a){this.b=0
this.c=a},
l5:function(a){if(a instanceof H.bC)return a.i(0)
return"Instance of '"+H.d(H.bR(a))+"'"},
ld:function(a,b,c){var u,t,s=J.l9(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
jk:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aK(a);u.p();)t.push(u.gv(u))
if(b)return t
return J.jg(t)},
jo:function(a){var u,t=a.length,s=P.jn(0,null,t)
if(typeof s!=="number")return s.am()
u=s<t
return H.lp(u?C.a.cW(a,0,s):a)},
lr:function(a){return new H.fb(a,H.lb(a,!1,!0,!1,!1,!1))},
k4:function(a,b,c){var u=J.aK(b)
if(!u.p())return a
if(c.length===0){do a+=H.d(u.gv(u))
while(u.p())}else{a+=H.d(u.gv(u))
for(;u.p();)a=a+c+H.d(u.gv(u))}return a},
kk:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.kP().b
u=u.test(b)}else u=!1
if(u)return b
t=C.H.eS(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.jm(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
l2:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
l3:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cu:function(a){if(a>=10)return""+a
return"0"+a},
jO:function(a){return new P.aQ(1000*a)},
je:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aa(a)
if(typeof a==="string")return JSON.stringify(a)
return P.l5(a)},
j8:function(a,b,c){return new P.ab(!0,a,b,c)},
cY:function(a,b){return new P.bm(null,null,!0,a,b,"Value not in range")},
ai:function(a,b,c,d,e){return new P.bm(b,c,!0,a,d,"Invalid value")},
jn:function(a,b,c){var u
if(typeof a!=="number")return H.V(a)
if(0<=a){if(typeof c!=="number")return H.V(c)
u=a>c}else u=!0
if(u)throw H.c(P.ai(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.V(c)
u=b>c}else u=!0
if(u)throw H.c(P.ai(b,a,c,"end",null))
return b}return c},
k1:function(a,b){if(typeof a!=="number")return a.am()
if(a<0)throw H.c(P.ai(a,0,null,b,null))},
G:function(a,b,c,d,e){var u=e==null?J.aL(b):e
return new P.f5(u,!0,a,c,"Index out of range")},
w:function(a){return new P.hX(a)},
k9:function(a){return new P.hU(a)},
k3:function(a){return new P.bT(a)},
aO:function(a){return new P.ev(a)},
q:function(a){return new P.dr(a)},
jB:function(a){H.mF(a)},
ao:function ao(){},
aP:function aP(a,b){this.a=a
this.b=b},
J:function J(){},
aQ:function aQ(a){this.a=a},
eH:function eH(){},
eI:function eI(){},
bf:function bf(){},
cT:function cT(){},
ab:function ab(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bm:function bm(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
f5:function f5(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hX:function hX(a){this.a=a},
hU:function hU(a){this.a=a},
bT:function bT(a){this.a=a},
ev:function ev(a){this.a=a},
fY:function fY(){},
d3:function d3(){},
eB:function eB(a){this.a=a},
dr:function dr(a){this.a=a},
eY:function eY(a,b){this.a=a
this.b=b},
f_:function f_(){},
x:function x(){},
j:function j(){},
f8:function f8(){},
a6:function a6(){},
bK:function bK(){},
aY:function aY(){},
a3:function a3(){},
S:function S(){},
m:function m(){},
aj:function aj(a){this.a=a},
aF:function(a){var u,t,s,r,q
if(a==null)return
u=P.jS(P.m,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
mn:function(a){var u={}
a.A(0,new P.iT(u))
return u},
iT:function iT(a){this.a=a},
eU:function eU(a,b){this.a=a
this.b=b},
eV:function eV(){},
eW:function eW(){},
ix:function ix(){},
a7:function a7(){},
aV:function aV(){},
ff:function ff(){},
aZ:function aZ(){},
fW:function fW(){},
h2:function h2(){},
bS:function bS(){},
hu:function hu(){},
i:function i(){},
b_:function b_(){},
hJ:function hJ(){},
dx:function dx(){},
dy:function dy(){},
dI:function dI(){},
dJ:function dJ(){},
dU:function dU(){},
dV:function dV(){},
e0:function e0(){},
e1:function e1(){},
el:function el(){},
em:function em(){},
en:function en(a){this.a=a},
eo:function eo(){},
b9:function b9(){},
fX:function fX(){},
di:function di(){},
hp:function hp(){},
dQ:function dQ(){},
dR:function dR(){}},W={
jI:function(){var u=document.createElement("a")
return u},
jL:function(){var u=document.createElement("canvas")
return u},
l4:function(a,b,c){var u=document.body,t=(u&&C.m).Z(u,a,b,c)
t.toString
u=new H.c2(new W.U(t),new W.eK(),[W.y])
return u.gan(u)},
jc:function(a){return"wheel"},
bE:function(a){var u,t,s,r="element tag unavailable"
try{u=J.ed(a)
t=u.gcJ(a)
if(typeof t==="string")r=u.gcJ(a)}catch(s){H.aq(s)}return r},
iu:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
ki:function(a,b,c,d){var u=W.iu(W.iu(W.iu(W.iu(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
O:function(a,b,c,d){var u=W.kn(new W.is(c),W.h)
if(u!=null&&!0)J.kR(a,b,u,!1)
return new W.ir(a,b,u,!1)},
kh:function(a){var u=W.jI(),t=window.location
u=new W.c4(new W.iB(u,t))
u.d7(a)
return u},
lH:function(a,b,c,d){return!0},
lI:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
kj:function(){var u=P.m,t=P.jT(C.j,u),s=H.b(["TEMPLATE"],[u])
t=new W.iJ(t,P.bJ(u),P.bJ(u),P.bJ(u),null)
t.dc(null,new H.fo(C.j,new W.iK(),[H.a9(C.j,0),u]),s,null)
return t},
kn:function(a,b){var u=$.a8
if(u===C.e)return a
return u.cb(a,b)},
l:function l(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
co:function co(){},
ba:function ba(){},
bc:function bc(){},
aM:function aM(){},
ex:function ex(){},
D:function D(){},
bD:function bD(){},
ey:function ey(){},
a1:function a1(){},
ad:function ad(){},
ez:function ez(){},
eA:function eA(){},
eD:function eD(){},
a4:function a4(){},
eE:function eE(){},
cw:function cw(){},
cx:function cx(){},
eF:function eF(){},
eG:function eG(){},
io:function io(a,b){this.a=a
this.b=b},
L:function L(){},
eK:function eK(){},
h:function h(){},
e:function e(){},
at:function at(){},
eS:function eS(){},
eT:function eT(){},
eX:function eX(){},
au:function au(){},
f2:function f2(){},
bF:function bF(){},
bi:function bi(){},
fk:function fk(){},
fE:function fE(){},
fF:function fF(){},
fG:function fG(a){this.a=a},
fH:function fH(){},
fI:function fI(a){this.a=a},
ax:function ax(){},
fJ:function fJ(){},
af:function af(){},
U:function U(a){this.a=a},
y:function y(){},
cR:function cR(){},
az:function az(){},
h0:function h0(){},
h8:function h8(){},
h9:function h9(a){this.a=a},
hb:function hb(){},
aA:function aA(){},
hm:function hm(){},
aB:function aB(){},
hn:function hn(){},
aC:function aC(){},
hr:function hr(){},
hs:function hs(a){this.a=a},
ak:function ak(){},
d6:function d6(){},
hv:function hv(){},
hw:function hw(){},
bU:function bU(){},
aD:function aD(){},
al:function al(){},
hz:function hz(){},
hA:function hA(){},
hD:function hD(){},
aE:function aE(){},
bn:function bn(){},
hH:function hH(){},
hI:function hI(){},
b0:function b0(){},
hY:function hY(){},
ie:function ie(){},
b3:function b3(){},
c3:function c3(){},
ip:function ip(){},
dk:function dk(){},
it:function it(){},
dF:function dF(){},
iF:function iF(){},
iG:function iG(){},
im:function im(){},
iq:function iq(a){this.a=a},
ir:function ir(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
is:function is(a){this.a=a},
c4:function c4(a){this.a=a},
F:function F(){},
cS:function cS(a){this.a=a},
fT:function fT(a){this.a=a},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
dN:function dN(){},
iD:function iD(){},
iE:function iE(){},
iJ:function iJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
iK:function iK(){},
iH:function iH(){},
cA:function cA(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ay:function ay(){},
iB:function iB(a,b){this.a=a
this.b=b},
e2:function e2(a){this.a=a},
iO:function iO(a){this.a=a},
dj:function dj(){},
dl:function dl(){},
dm:function dm(){},
dn:function dn(){},
dp:function dp(){},
ds:function ds(){},
dt:function dt(){},
dv:function dv(){},
dw:function dw(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dG:function dG(){},
dH:function dH(){},
dK:function dK(){},
dL:function dL(){},
dM:function dM(){},
c9:function c9(){},
ca:function ca(){},
dO:function dO(){},
dP:function dP(){},
dT:function dT(){},
dW:function dW(){},
dX:function dX(){},
cb:function cb(){},
cc:function cc(){},
dZ:function dZ(){},
e_:function e_(){},
e3:function e3(){},
e4:function e4(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
e9:function e9(){},
ea:function ea(){},
eb:function eb(){},
ec:function ec(){}},K={
H:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.q("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.aE(a,0)
t=C.b.aE(b,0)
if(u>t){s=t
t=u
u=s}return new K.h3(u,t)},
o:function(a){var u=new K.hc()
u.d4(a)
return u},
ar:function ar(){},
cB:function cB(){},
aX:function aX(){},
Y:function Y(){this.a=null},
h3:function h3(a,b){this.a=a
this.b=b},
hc:function hc(){this.a=null}},L={
hF:function(){var u=new L.hE(),t=P.m
u.a=new H.E([t,L.d4])
u.b=new H.E([t,L.db])
u.c=P.bJ(t)
return u},
d4:function d4(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
da:function da(a,b,c){this.a=a
this.b=b
this.c=c},
db:function db(a){this.b=a
this.c=null},
hE:function hE(){var _=this
_.d=_.c=_.b=_.a=null},
dc:function dc(a){this.b=a
this.a=this.c=null}},O={
jb:function(a){var u=new O.bd([a])
u.bG(a)
return u},
bd:function bd(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bM:function bM(){this.b=this.a=null},
cL:function cL(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fw:function fw(a,b){this.a=a
this.b=b},
fx:function fx(){},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(){},
fA:function fA(a,b){this.a=a
this.b=b},
fB:function fB(){},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fq:function fq(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cM:function cM(){},
fr:function fr(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ae:function ae(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
ft:function ft(){var _=this
_.e=_.d=_.c=_.b=null},
fu:function fu(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
fv:function fv(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
d7:function d7(){}},E={
kf:function(){if(J.j7(window.navigator.vendor,"Google"))return C.y
if(J.j7(window.navigator.userAgent,"Firefox"))return C.n
var u=window.navigator.appVersion
if(J.b6(u).t(u,"Trident")||C.b.t(u,"Edge"))return C.o
if(J.j7(window.navigator.appName,"Microsoft"))return C.o
return C.z},
kg:function(){var u=window.navigator.appVersion
if(J.b6(u).t(u,"Win"))return C.R
if(C.b.t(u,"Mac"))return C.t
if(C.b.t(u,"Linux"))return C.S
return C.T},
lt:function(a,b){var u=new E.h4(a)
u.d3(a,b)
return u},
lz:function(a,b,c,d,e){var u,t,s=J.P(a)
if(!!s.$ibc)return E.k5(a,!0,!0,!0,!1)
u=W.jL()
t=u.style
t.width="100%"
t.height="100%"
s.gcc(a).q(0,u)
return E.k5(u,!0,!0,!0,!1)},
k5:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.d8(),o=C.I.cQ(a,"webgl2",P.lc(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.u(P.q("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.lt(o,a)
o.getParameter(3379)
o.getParameter(34076)
u=new X.df(a)
t=new X.fe()
t.d=P.bJ(P.x)
u.b=t
t=new X.fK(u)
t.f=0
t.r=V.cW()
t.x=V.cW()
t.ch=t.Q=1
u.c=t
t=new X.fl(u)
t.r=0
t.x=V.cW()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hG(u)
t.f=V.cW()
t.r=V.cW()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.d5,P.S]])
t=$.eM
u.Q=(t==null?$.eM=new E.dq(E.kf(),E.kg()):t).a===C.n?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.O(r,"contextmenu",u.gdQ(),!1))
u.z.push(W.O(a,"focus",u.gdW(),!1))
u.z.push(W.O(a,"blur",u.gdK(),!1))
u.z.push(W.O(r,"keyup",u.ge_(),!1))
u.z.push(W.O(r,"keydown",u.gdY(),!1))
u.z.push(W.O(a,"mousedown",u.ge3(),!1))
u.z.push(W.O(a,"mouseup",u.ge7(),!1))
u.z.push(W.O(a,q,u.ge5(),!1))
s=u.z
W.jc(a)
W.jc(a)
s.push(W.O(a,W.jc(a),u.ge9(),!1))
u.z.push(W.O(r,q,u.gdS(),!1))
u.z.push(W.O(r,"mouseup",u.gdU(),!1))
u.z.push(W.O(r,"pointerlockchange",u.geb(),!1))
u.z.push(W.O(a,"touchstart",u.gem(),!1))
u.z.push(W.O(a,"touchend",u.gei(),!1))
u.z.push(W.O(a,"touchmove",u.gek(),!1))
p.ch=!0
p.cx=!1
p.cy=new P.aP(Date.now(),!1)
p.db=0
p.bX()
return p},
eq:function eq(){},
aR:function aR(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bb:function bb(a){this.b=a},
bk:function bk(a){this.b=a},
dq:function dq(a,b){this.a=a
this.b=b},
h4:function h4(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h5:function h5(a){this.a=a},
h6:function h6(a){this.a=a},
h7:function h7(a){this.a=a},
d8:function d8(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
hC:function hC(a){this.a=a}},Z={
lC:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.cd(c)),35044)
a.bindBuffer(b,null)
return new Z.dg(b,u)},
a2:function(a){return new Z.b2(a)},
dg:function dg(a,b){this.a=a
this.b=b},
cp:function cp(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ig:function ig(a){this.a=a},
cq:function cq(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
cC:function cC(a,b,c){this.a=a
this.b=b
this.c=c},
b2:function b2(a){this.a=a}},D={
a5:function(){var u=new D.bg()
u.d=0
return u},
et:function et(){},
bg:function bg(){var _=this
_.d=_.c=_.b=_.a=null},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
W:function W(){this.b=null},
bG:function bG(){this.b=null},
bH:function bH(){this.b=null},
I:function I(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
ep:function ep(){},
be:function be(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
X:function X(){},
cH:function cH(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
h1:function h1(){},
ho:function ho(){}},X={cr:function cr(a,b){this.a=a
this.b=b},cG:function cG(a,b){this.a=a
this.b=b},fe:function fe(){this.d=this.b=this.a=null},fl:function fl(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bN:function bN(a,b,c){this.a=a
this.b=b
this.c=c},fK:function fK(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},hG:function hG(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},df:function df(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
l6:function(a){var u=new X.eZ(),t=V.ap(1)
u.a=new V.aN(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.k2
if(t==null){t=V.ls(0,0,1,1)
$.k2=t}u.r=t
return u},
ja:function ja(){},
eZ:function eZ(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cU:function cU(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hx:function hx(){},
kt:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="testCanvas",f=null,e=V.lv("Test 003"),d=W.jL()
d.className="pageLargeCanvas"
d.id=g
e.a.appendChild(d)
u=[P.m]
e.c6(H.b(["A test of the Material Light Shader with a solid color directional lighting."],u))
e.c6(H.b(["\xab[Back to Tests|../]"],u))
t=new E.aR()
t.a=""
t.b=!0
u=E.aR
s=O.jb(u)
t.y=s
s.b2(t.gfb(),t.gfe())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sbB(0,f)
t.saI(f)
t.sbB(0,F.mM())
s=new U.d_()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.scO(0)
s.scD(0,0)
s.scI(0)
r=s.d
if(!(Math.abs(r-0.1)<$.C().a)){s.d=0.1
r=new D.I("deltaYaw",r,0.1)
r.b=!0
s.ar(r)}r=s.e
if(!(Math.abs(r-0.21)<$.C().a)){s.e=0.21
r=new D.I("deltaPitch",r,0.21)
r.b=!0
s.ar(r)}r=s.f
if(!(Math.abs(r-0.32)<$.C().a)){s.f=0.32
r=new D.I("deltaRoll",r,0.32)
r.b=!0
s.ar(r)}t.saI(s)
q=new O.cL()
s=O.jb(V.av)
q.e=s
s.b2(q.gdG(),q.gdI())
s=new O.ae(q,"emission")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.f=s
s=new O.ae(q,"ambient")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.r=s
s=new O.ae(q,"diffuse")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.x=s
s=new O.ae(q,"invDiffuse")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.y=s
s=new O.fv(q,"specular")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
s.ch=100
q.z=s
s=new O.fr(q,"bump")
s.c=new A.Q(!1,!1,!1)
q.Q=s
q.ch=null
s=new O.ae(q,"reflect")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
q.cx=s
s=new O.fu(q,"refract")
s.c=new A.Q(!1,!1,!1)
s.f=new V.N(0,0,0)
s.ch=1
q.cy=s
s=new O.fq(q,"alpha")
s.c=new A.Q(!1,!1,!1)
s.f=1
q.db=s
s=new D.cH()
s.bG(D.X)
s.e=H.b([],[D.ep])
s.f=H.b([],[D.be])
s.r=H.b([],[D.h1])
s.x=H.b([],[D.ho])
s.z=s.y=null
s.bA(s.gdE(),s.gee(),s.geg())
q.dx=s
r=new O.ft()
r.b=new V.aN(0,0,0,0)
r.c=1
r.d=10
r.e=!1
q.dy=r
r=s.y
s=r==null?s.y=D.a5():r
s.q(0,q.gew())
s=q.dx
r=s.z
s=r==null?s.z=D.a5():r
s.q(0,q.gdd())
q.fr=null
s=q.dx
p=V.jr()
r=U.jN(V.jV(V.k_(),p,new V.B(1,1,-3)))
o=new V.N(1,1,1)
n=new D.be()
n.c=new V.N(1,1,1)
n.a=V.kd()
n.d=V.jr()
n.e=V.lB()
m=n.b
n.b=r
r.gw().q(0,n.gd8())
r=new D.I("mover",m,n.b)
r.b=!0
n.a8(r)
if(!n.c.n(0,o)){m=n.c
n.c=o
r=new D.I("color",m,o)
r.b=!0
n.a8(r)}s.q(0,n)
q.r.sav(0,new V.N(V.ap(0),V.ap(0),V.ap(1)))
q.x.sav(0,new V.N(V.ap(0),V.ap(1),V.ap(0)))
q.z.sav(0,new V.N(V.ap(1),V.ap(0),V.ap(0)))
s=q.z
s.bZ(new A.Q(!0,!1,!1))
s.c_(10)
l=new M.cy()
l.a=!0
u=O.jb(u)
l.e=u
u.b2(l.gdM(),l.gdO())
l.y=l.x=l.r=l.f=null
k=X.l6(f)
j=new X.cU()
j.c=1.0471975511965976
j.d=0.1
j.e=2000
j.saI(f)
u=j.c
if(!(Math.abs(u-1.0471975511965976)<$.C().a)){j.c=1.0471975511965976
u=new D.I("fov",u,1.0471975511965976)
u.b=!0
j.ap(u)}u=j.d
if(!(Math.abs(u-0.1)<$.C().a)){j.d=0.1
u=new D.I("near",u,0.1)
u.b=!0
j.ap(u)}u=j.e
if(!(Math.abs(u-2000)<$.C().a)){j.e=2000
u=new D.I("far",u,2000)
u.b=!0
j.ap(u)}u=l.b
if(u!==j){if(u!=null)u.gw().M(0,l.ga5())
m=l.b
l.b=j
j.gw().q(0,l.ga5())
u=new D.I("camera",m,l.b)
u.b=!0
l.a9(u)}u=l.c
if(u!==k){if(u!=null)u.gw().M(0,l.ga5())
m=l.c
l.c=k
k.gw().q(0,l.ga5())
u=new D.I("target",m,l.c)
u.b=!0
l.a9(u)}l.scK(f)
l.scK(q)
l.e.q(0,t)
l.b.saI(U.jN(V.aw(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
i=document.getElementById(g)
if(i==null)H.u(P.q("Failed to find an element with the identifier, testCanvas."))
h=E.lz(i,!0,!0,!0,!1)
u=h.d
if(u!==l){if(u!=null)u.gw().M(0,h.gbH())
h.d=l
l.gw().q(0,h.gbH())
h.bI()}u=h.Q
if(u==null)u=h.Q=D.a5()
s=u.b
u=s==null?u.b=H.b([],[{func:1,ret:-1,args:[D.W]}]):s
u.push(new X.j1(e,q))
V.mI(h)},
j1:function j1(a,b){this.a=a
this.b=b}},V={
ap:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
jD:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.cR(a-b,u)
return(a<0?a+u:a)+b},
z:function(a,b,c){if(a==null)return C.b.ai("null",c)
return C.b.ai(C.c.cL(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
by:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.m])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.p)(a),++s){r=V.z(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.f(o,q)
u=C.b.ai(o[q],t)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=u}return o},
jl:function(){var u=$.jW
return u==null?$.jW=V.aw(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aw:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
jV:function(a,b,c){var u=c.E(0,Math.sqrt(c.J(c))),t=b.ad(u),s=t.E(0,Math.sqrt(t.J(t))),r=u.ad(s),q=new V.B(a.a,a.b,a.c),p=s.aB(0).J(q),o=r.aB(0).J(q),n=u.aB(0).J(q)
return V.aw(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
cW:function(){var u=$.jZ
return u==null?$.jZ=new V.ag(0,0):u},
k_:function(){var u=$.ah
return u==null?$.ah=new V.T(0,0,0):u},
ls:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cZ(a,b,c,d)},
c0:function(){var u=$.kc
return u==null?$.kc=new V.B(0,0,0):u},
lB:function(){var u=$.i0
return u==null?$.i0=new V.B(-1,0,0):u},
jr:function(){var u=$.i1
return u==null?$.i1=new V.B(0,1,0):u},
kd:function(){var u=$.i2
return u==null?$.i2=new V.B(0,0,1):u},
N:function N(a,b,c){this.a=a
this.b=b
this.c=c},
aN:function aN(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eN:function eN(a){this.a=a},
cN:function cN(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
av:function av(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
ag:function ag(a,b){this.a=a
this.b=b},
T:function T(a,b,c){this.a=a
this.b=b
this.c=c},
cZ:function cZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
br:function br(a,b){this.a=a
this.b=b},
B:function B(a,b,c){this.a=a
this.b=b
this.c=c},
mI:function(a){P.lA(C.K,new V.j3(a))},
lv:function(a){var u=new V.hh()
u.d6(a,!0)
return u},
cs:function cs(){},
j3:function j3(a){this.a=a},
eC:function eC(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f0:function f0(a){var _=this
_.a=a
_.d=_.c=_.b=null},
f1:function f1(a){var _=this
_.a=a
_.d=_.c=_.b=null},
h_:function h_(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hh:function hh(){this.b=this.a=null},
hj:function hj(a){this.a=a},
hi:function hi(a){this.a=a},
hk:function hk(a){this.a=a}},U={
jN:function(a){var u=new U.ct()
u.a=a
return u},
ct:function ct(){this.b=this.a=null},
fL:function fL(){},
d_:function d_(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cy:function cy(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
lf:function(a,b){var u=a.aH,t=new A.fp(b,u)
t.d5(b,u)
t.d2(a,b)
return t},
lg:function(a,b,c,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d="MaterialLight_"+a2.ga3(a2)+a3.ga3(a3)+a4.ga3(a4)+a5.ga3(a5)+a6.ga3(a6)+a7.ga3(a7)+a8.ga3(a8)+a9.ga3(a9)+b0.ga3(b0)+"_"
d+=a?"1":"0"
d+=b?"1":"0"
d+=c?"1":"0"
d=d+"0_"+a1
u=b1.length
if(u>0){d+="_Bar"
for(t=0;t<b1.length;b1.length===u||(0,H.p)(b1),++t)d+="_"+H.d(b1[t].a)}u=b2.length
if(u>0){d+="_Dir"
for(t=0;t<b2.length;b2.length===u||(0,H.p)(b2),++t)d+="_"+H.d(b2[t].a)}u=b3.length
if(u>0){d+="_Point"
for(t=0;t<b3.length;b3.length===u||(0,H.p)(b3),++t)d+="_"+H.d(b3[t].a)}u=b4.length
if(u>0){d+="_Spot"
for(t=0;t<b4.length;b4.length===u||(0,H.p)(b4),++t)d+="_"+H.d(b4[t].a)}for(u=b1.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b1[t].b
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
e=$.aJ()
if(j){u=$.aI()
e=new Z.b2(e.a|u.a)}if(i){u=$.aH()
e=new Z.b2(e.a|u.a)}if(h){u=$.aG()
e=new Z.b2(e.a|u.a)}return new A.fs(a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,s,o,k,o,r,g,!0,f,!1,m,r,l,j,i,!1,!1,h,!1,!1,c,!1,a1,d.charCodeAt(0)==0?d:d,e)},
iQ:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"},
iR:function(a,b,c){var u
A.iQ(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.ee(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a){u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}a.a=u+"}\n"},
lX:function(a,b){var u,t=a.a,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.iQ(b,t,"emission")
t=b.a+="\n"
t+="vec3 emissionColor()\n"
b.a=t
t=b.a=t+"{\n"
if(s){t+="   return emissionClr;\n"
b.a=t}t+="}\n"
b.a=t
b.a=t+"\n"},
lT:function(a,b){var u,t=a.b
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.iR(b,t,"ambient")
b.a+="\n"},
lV:function(a,b){var u,t=a.c
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.iR(b,t,"diffuse")
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
lY:function(a,b){var u,t=a.d
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.iR(b,t,"invDiffuse")
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
m3:function(a,b){var u,t=a.e
if(!t.a)u=!1
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.iR(b,t,"specular")
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
m_:function(a,b){var u,t,s
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
m1:function(a,b){var u,t=a.r,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.iQ(b,t,"reflect")
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
m2:function(a,b){var u,t=a.x,s=t.a
if(!s)u=!1
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.iQ(b,t,"refract")
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
lU:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.d(u)
s=A.ee(t)
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
if(typeof u!=="number")return u.a0()
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
lW:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.d(u)
s=A.ee(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.a0()
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
m0:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.d(u)
s=A.ee(t)
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
if(typeof u!=="number")return u.a0()
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
m4:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.d(u)
s=A.ee(t)
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
if(typeof u!=="number")return u.a0()
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
if(o){u=$.eM
if(u==null)u=$.eM=new E.dq(E.kf(),E.kg())
r=c.a
if(u.b===C.t){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
lZ:function(a,b){var u,t
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
m5:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.aj("")
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
A.lX(a,j)
A.lT(a,j)
A.lV(a,j)
A.lY(a,j)
A.m3(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.m1(a,j)
A.m2(a,j)}A.m_(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lU(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.lW(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.m0(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.p)(q),++o)A.m4(a,q[o],j)
A.lZ(a,j)}q=j.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.p)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.f(r,0)
j.a+=m+(r[0].toUpperCase()+C.b.a4(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}if(!a.a.a)u=!1
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
m6:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.aV+"];\n"
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
m8:function(a,b){var u
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
m7:function(a,b){var u
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
ma:function(a,b){var u,t
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
mb:function(a,b){var u,t
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
m9:function(a,b){var u
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
mc:function(a,b){var u
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
ee:function(a){if(0>=a.length)return H.f(a,0)
return a[0].toUpperCase()+C.b.a4(a,1)},
jq:function(a,b,c,d,e){var u=new A.hN(a,c,e)
u.f=d
P.ld(d,0,P.x)
return u},
cm:function cm(a,b,c){this.a=a
this.b=b
this.c=c},
ek:function ek(a){this.a=a},
Q:function Q(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a,b){var _=this
_.fQ=_.fP=_.aW=_.aH=_.aV=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.h2=_.h1=_.h0=_.bq=_.bp=_.bo=_.bn=_.bm=_.bl=_.bk=_.bj=_.h_=_.fZ=_.co=_.fY=_.fX=_.cn=_.cm=_.fW=_.fV=_.cl=_.ck=_.fU=_.fT=_.cj=_.fS=_.fR=_.ci=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cn:function cn(a,b){this.a=a
this.b=b},
cv:function cv(a,b){this.a=a
this.b=b},
cX:function cX(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
fs:function fs(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.aV=b3
_.aH=b4
_.aW=b5},
bW:function bW(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bX:function bX(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
bZ:function bZ(a,b,c,d,e,f,g,h,i,j){var _=this
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
c_:function c_(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
d0:function d0(){},
dd:function dd(){},
hS:function hS(a){this.a=a},
b1:function b1(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hQ:function hQ(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
M:function M(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){this.a=a
this.c=b
this.d=c},
A:function A(a,b,c){this.a=a
this.c=b
this.d=c},
bV:function bV(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
bY:function bY(a,b,c){this.a=a
this.c=b
this.d=c},
a_:function a_(a,b,c){this.a=a
this.c=b
this.d=c},
bo:function bo(a,b,c){this.a=a
this.c=b
this.d=c},
bp:function bp(a,b,c){this.a=a
this.c=b
this.d=c}},F={
mM:function(){return F.mo(15,30,0.5,1,new F.j5())},
mo:function(a,b,c,d,e){var u=F.mK(a,b,new F.iU(e,d,b,c))
if(u==null)return
u.au()
u.fa(new F.i8(),new F.fU())
return u},
mK:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.hd()
t=new F.i3(u)
t.b=!1
s=[F.c1]
t.c=H.b([],s)
u.a=t
t=new F.hg()
t.b=H.b([],[F.cV])
u.b=t
t=new F.hf(u)
t.b=H.b([],[F.cI])
u.c=t
t=new F.he(u)
t.b=H.b([],[F.bh])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.c5(new V.aN(s,0,0,1),new V.ag(p,1))
c.$3(o,p,0)
r.push(o.ce(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.c5(new V.aN(j,i,h,1),new V.ag(p,m))
c.$3(o,p,n)
r.push(o.ce(null))}}u.d.eJ(a+1,b+1,r)
return u},
eQ:function(a,b,c){var u=new F.bh(),t=a.a
if(t==null)H.u(P.q("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.u(P.q("May not create a face with vertices attached to different shapes."))
u.eB(a)
u.eC(b)
u.eD(c)
u.a.a.d.b.push(u)
u.a.a.V()
return u},
ke:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.c1(),r=new F.ib()
r.b=H.b([],[F.cV])
s.b=r
r=new F.i7()
u=[F.cI]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.i4()
u=[F.bh]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.kL()
s.e=0
r=$.aJ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aI().a)!==0?e:t
s.x=(u&$.aH().a)!==0?b:t
s.y=(u&$.b7().a)!==0?f:t
s.z=(u&$.b8().a)!==0?g:t
s.Q=(u&$.kM().a)!==0?c:t
s.ch=(u&$.bz().a)!==0?i:0
s.cx=(u&$.aG().a)!==0?a:t
return s},
j5:function j5(){},
iU:function iU(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bh:function bh(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eR:function eR(){},
hl:function hl(){},
cI:function cI(){},
fg:function fg(){},
hM:function hM(){},
cV:function cV(){},
hd:function hd(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
he:function he(a){this.a=a
this.b=null},
hf:function hf(a){this.a=a
this.b=null},
hg:function hg(){this.b=null},
c1:function c1(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
id:function id(a){this.a=a},
ic:function ic(a){this.a=a},
i3:function i3(a){this.a=a
this.c=this.b=null},
i4:function i4(){this.d=this.c=this.b=null},
i5:function i5(a,b){this.a=a
this.b=b},
i6:function i6(a,b){this.a=a
this.b=b},
i7:function i7(){this.c=this.b=null},
i9:function i9(){},
i8:function i8(){},
ia:function ia(){},
fU:function fU(){},
ib:function ib(){this.b=null}},T={hB:function hB(){}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ji.prototype={}
J.a.prototype={
n:function(a,b){return a===b},
gF:function(a){return H.bQ(a)},
i:function(a){return"Instance of '"+H.d(H.bR(a))+"'"}}
J.f9.prototype={
i:function(a){return String(a)},
gF:function(a){return a?519018:218159},
$iao:1}
J.cE.prototype={
n:function(a,b){return null==b},
i:function(a){return"null"},
gF:function(a){return 0}}
J.cF.prototype={
gF:function(a){return 0},
i:function(a){return String(a)}}
J.fZ.prototype={}
J.bq.prototype={}
J.aU.prototype={
i:function(a){var u=a[$.kA()]
if(u==null)return this.d_(a)
return"JavaScript function for "+H.d(J.aa(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aS.prototype={
bv:function(a,b){if(!!a.fixed$length)H.u(P.w("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cY(b,null))
return a.splice(b,1)[0]},
M:function(a,b){var u
if(!!a.fixed$length)H.u(P.w("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
Y:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.w("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.p)(b),++t)a.push(b[t])},
A:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aO(a))}},
k:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.d(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
f7:function(a){return this.k(a,"")},
f4:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aO(a))}throw H.c(H.f7())},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
cW:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ai(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ai(c,b,u,"end",null))
if(b===c)return H.b([],[H.a9(a,0)])
return H.b(a.slice(b,c),[H.a9(a,0)])},
gf3:function(a){if(a.length>0)return a[0]
throw H.c(H.f7())},
gaY:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.f7())},
c7:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aO(a))}return!1},
aD:function(a,b){if(!!a.immutable$list)H.u(P.w("sort"))
H.ly(a,b==null?J.lQ():b)},
cV:function(a){return this.aD(a,null)},
t:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.jf(a,"[","]")},
gK:function(a){return new J.a0(a,a.length)},
gF:function(a){return H.bQ(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.w("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.j8(b,u,null))
if(b<0)throw H.c(P.ai(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bx(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.u(P.w("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bx(a,b))
a[b]=c},
$in:1,
$ij:1}
J.jh.prototype={}
J.a0.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.p(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bI.prototype={
aw:function(a,b){var u
if(typeof b!=="number")throw H.c(H.b5(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gaX(b)
if(this.gaX(a)===u)return 0
if(this.gaX(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gaX:function(a){return a===0?1/a<0:a<0},
cp:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.w(""+a+".floor()"))},
a2:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.w(""+a+".round()"))},
cL:function(a,b){var u
if(b>20)throw H.c(P.ai(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gaX(a))return"-"+u
return u},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gF:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
cR:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
d1:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.c0(a,b)},
T:function(a,b){return(a|0)===a?a/b|0:this.c0(a,b)},
c0:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.w("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aQ:function(a,b){var u
if(a>0)u=this.eH(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
eH:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia3:1}
J.cD.prototype={$ix:1}
J.fa.prototype={}
J.aT.prototype={
bi:function(a,b){if(b<0)throw H.c(H.bx(a,b))
if(b>=a.length)H.u(H.bx(a,b))
return a.charCodeAt(b)},
aE:function(a,b){if(b>=a.length)throw H.c(H.bx(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(typeof b!=="string")throw H.c(P.j8(b,null,null))
return a+b},
b3:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aM:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cY(b,null))
if(b>c)throw H.c(P.cY(b,null))
if(c>a.length)throw H.c(P.cY(c,null))
return a.substring(b,c)},
a4:function(a,b){return this.aM(a,b,null)},
fF:function(a){return a.toLowerCase()},
I:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.G)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ai:function(a,b){var u=b-a.length
if(u<=0)return a
return this.I(" ",u)+a},
eQ:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.ai(c,0,u,null,null))
return H.kx(a,b,c)},
t:function(a,b){return this.eQ(a,b,0)},
aw:function(a,b){var u
if(typeof b!=="string")throw H.c(H.b5(b))
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
gl:function(a){return a.length},
$im:1}
H.k.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.b.bi(this.a,b)},
$an:function(){return[P.x]},
$at:function(){return[P.x]},
$aj:function(){return[P.x]}}
H.n.prototype={}
H.cJ.prototype={
gK:function(a){return new H.aW(this,this.gl(this))},
b1:function(a,b){return this.cZ(0,b)}}
H.aW.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.b6(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aO(s))
u=t.c
if(typeof q!=="number")return H.V(q)
if(u>=q){t.d=null
return!1}t.d=r.u(s,u);++t.c
return!0}}
H.bL.prototype={
gK:function(a){return new H.cK(J.aK(this.a),this.b)},
gl:function(a){return J.aL(this.a)},
u:function(a,b){return this.b.$1(J.ef(this.a,b))},
$aj:function(a,b){return[b]}}
H.eJ.prototype={$in:1,
$an:function(a,b){return[b]}}
H.cK.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gv(t))
return!0}u.a=null
return!1},
gv:function(a){return this.a}}
H.fo.prototype={
gl:function(a){return J.aL(this.a)},
u:function(a,b){return this.b.$1(J.ef(this.a,b))},
$an:function(a,b){return[b]},
$acJ:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.c2.prototype={
gK:function(a){return new H.ih(J.aK(this.a),this.b)}}
H.ih.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gv(u)))return!0
return!1},
gv:function(a){var u=this.a
return u.gv(u)}}
H.cz.prototype={}
H.hW.prototype={
m:function(a,b,c){throw H.c(P.w("Cannot modify an unmodifiable list"))}}
H.de.prototype={}
H.hK.prototype={
a_:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fV.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fd.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.hV.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.j6.prototype={
$1:function(a){if(!!J.P(a).$ibf)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dS.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bC.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ch(t==null?"unknown":t)+"'"},
gfI:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hy.prototype={}
H.hq.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ch(u)+"'"}}
H.bA.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bA))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gF:function(a){var u,t=this.c
if(t==null)u=H.bQ(this.a)
else u=typeof t!=="object"?J.eg(t):H.bQ(t)
return(u^H.bQ(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bR(u))+"'")}}
H.es.prototype={
i:function(a){return this.a}}
H.ha.prototype={
i:function(a){return"RuntimeError: "+H.d(this.a)}}
H.E.prototype={
gl:function(a){return this.a},
gU:function(a){return new H.bj(this,[H.a9(this,0)])},
gfH:function(a){var u=this,t=H.a9(u,0)
return H.le(new H.bj(u,[t]),new H.fc(u),t,H.a9(u,1))},
eR:function(a,b){var u=this.b
if(u==null)return!1
return this.dt(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.aO(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.aO(r,b)
s=t==null?null:t.b
return s}else return q.f6(b)},
f6:function(a){var u,t,s=this.d
if(s==null)return
u=this.bT(s,J.eg(a)&0x3ffffff)
t=this.cq(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.bL(u==null?o.b=o.ba():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.bL(t==null?o.c=o.ba():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.ba()
r=J.eg(b)&0x3ffffff
q=o.bT(s,r)
if(q==null)o.bd(s,r,[o.bb(b,c)])
else{p=o.cq(q,b)
if(p>=0)q[p].b=c
else q.push(o.bb(b,c))}}},
A:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aO(u))
t=t.c}},
bL:function(a,b,c){var u=this.aO(a,b)
if(u==null)this.bd(a,b,this.bb(b,c))
else u.b=c},
dC:function(){this.r=this.r+1&67108863},
bb:function(a,b){var u,t=this,s=new H.fh(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.dC()
return s},
cq:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.jU(this)},
aO:function(a,b){return a[b]},
bT:function(a,b){return a[b]},
bd:function(a,b,c){a[b]=c},
dz:function(a,b){delete a[b]},
dt:function(a,b){return this.aO(a,b)!=null},
ba:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bd(t,u,t)
this.dz(t,u)
return t}}
H.fc.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.a9(u,1),args:[H.a9(u,0)]}}}
H.fh.prototype={}
H.bj.prototype={
gl:function(a){return this.a.a},
gK:function(a){var u=this.a,t=new H.fi(u,u.r)
t.c=u.e
return t}}
H.fi.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aO(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.iY.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.iZ.prototype={
$2:function(a,b){return this.a(a,b)}}
H.j_.prototype={
$1:function(a){return this.a(a)}}
H.fb.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bP.prototype={}
H.cO.prototype={
gl:function(a){return a.length},
$iv:1,
$av:function(){}}
H.bO.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]},
m:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.J]},
$at:function(){return[P.J]},
$ij:1,
$aj:function(){return[P.J]}}
H.cP.prototype={
m:function(a,b,c){H.an(b,a,a.length)
a[b]=c},
$in:1,
$an:function(){return[P.x]},
$at:function(){return[P.x]},
$ij:1,
$aj:function(){return[P.x]}}
H.fM.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fN.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fO.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fP.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fQ.prototype={
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.cQ.prototype={
gl:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.fR.prototype={
gl:function(a){return a.length},
h:function(a,b){H.an(b,a,a.length)
return a[b]}}
H.c5.prototype={}
H.c6.prototype={}
H.c7.prototype={}
H.c8.prototype={}
P.ij.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.ii.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.ik.prototype={
$0:function(){this.a.$0()}}
P.il.prototype={
$0:function(){this.a.$0()}}
P.dY.prototype={
df:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bw(new P.iM(this,b),0),a)
else throw H.c(P.w("`setTimeout()` not found."))},
dg:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bw(new P.iL(this,a,Date.now(),b),0),a)
else throw H.c(P.w("Periodic timer."))},
$id9:1}
P.iM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iL.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.d1(u,q)}s.c=r
t.d.$1(s)}}
P.bs.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.d(this.a)+")"}}
P.bt.prototype={
gv:function(a){var u=this.c
if(u==null)return this.b
return u.gv(u)},
p:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.p())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bs){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aK(u)
if(!!r.$ibt){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iI.prototype={
gK:function(a){return new P.bt(this.a())}}
P.dh.prototype={}
P.d5.prototype={}
P.ht.prototype={}
P.d9.prototype={}
P.iP.prototype={}
P.iS.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cT():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.iy.prototype={
fA:function(a){var u,t,s,r=null
try{if(C.e===$.a8){a.$0()
return}P.me(r,r,this,a)}catch(s){u=H.aq(s)
t=H.jy(s)
P.km(r,r,this,u,t)}},
fB:function(a,b){var u,t,s,r=null
try{if(C.e===$.a8){a.$1(b)
return}P.mf(r,r,this,a,b)}catch(s){u=H.aq(s)
t=H.jy(s)
P.km(r,r,this,u,t)}},
fC:function(a,b){return this.fB(a,b,null)},
eN:function(a){return new P.iz(this,a)},
cb:function(a,b){return new P.iA(this,a,b)}}
P.iz.prototype={
$0:function(){return this.a.fA(this.b)}}
P.iA.prototype={
$1:function(a){return this.a.fC(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iv.prototype={
gK:function(a){var u=new P.dz(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
t:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dr(b)
return t}},
dr:function(a){var u=this.d
if(u==null)return!1
return this.b8(this.bS(u,a),a)>=0},
q:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bM(u==null?s.b=P.js():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bM(t==null?s.c=P.js():t,b)}else return s.di(0,b)},
di:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.js()
u=s.bO(b)
t=r[u]
if(t==null)r[u]=[s.b5(b)]
else{if(s.b8(t,b)>=0)return!1
t.push(s.b5(b))}return!0},
M:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ep(this.c,b)
else return this.eo(0,b)},
eo:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bS(r,b)
t=s.b8(u,b)
if(t<0)return!1
s.c2(u.splice(t,1)[0])
return!0},
bM:function(a,b){if(a[b]!=null)return!1
a[b]=this.b5(b)
return!0},
ep:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.c2(u)
delete a[b]
return!0},
bN:function(){this.r=1073741823&this.r+1},
b5:function(a){var u,t=this,s=new P.iw(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bN()
return s},
c2:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bN()},
bO:function(a){return J.eg(a)&1073741823},
bS:function(a,b){return a[this.bO(b)]},
b8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.iw.prototype={}
P.dz.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aO(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.f6.prototype={}
P.fj.prototype={$in:1,$ij:1}
P.t.prototype={
gK:function(a){return new H.aW(a,this.gl(a))},
u:function(a,b){return this.h(a,b)},
fE:function(a,b){var u,t,s=this,r=H.b([],[H.mu(s,a,"t",0)])
C.a.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.V(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
fD:function(a){return this.fE(a,!0)},
i:function(a){return P.jf(a,"[","]")}}
P.fm.prototype={}
P.fn.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:7}
P.R.prototype={
A:function(a,b){var u,t
for(u=J.aK(this.gU(a));u.p();){t=u.gv(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aL(this.gU(a))},
i:function(a){return P.jU(a)}}
P.iC.prototype={
Y:function(a,b){var u
for(u=J.aK(b);u.p();)this.q(0,u.gv(u))},
i:function(a){return P.jf(this,"{","}")},
u:function(a,b){var u,t,s
P.k1(b,"index")
for(u=P.lL(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.c(P.G(b,this,"index",null,t))},
$in:1,
$ij:1}
P.dA.prototype={}
P.eu.prototype={}
P.ew.prototype={}
P.eL.prototype={}
P.f4.prototype={
i:function(a){return this.a}}
P.f3.prototype={
du:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aj("")
if(r>b)q.a+=C.b.aM(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.kV(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hZ.prototype={}
P.i_.prototype={
eS:function(a){var u,t,s,r=P.jn(0,null,a.length)
if(typeof r!=="number")return r.P()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.iN(t)
if(s.dB(a,0,r)!==r)s.c3(C.b.bi(a,r-1),0)
return new Uint8Array(t.subarray(0,H.lO(0,s.b,t.length)))}}
P.iN.prototype={
c3:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
dB:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.bi(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.aE(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.c3(r,C.b.aE(a,p)))s=p}else if(r<=2047){q=n.b
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
P.ao.prototype={}
P.aP.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aP&&this.a===b.a&&!0},
aw:function(a,b){return C.d.aw(this.a,b.a)},
gF:function(a){var u=this.a
return(u^C.d.aQ(u,30))&1073741823},
i:function(a){var u=this,t=P.l2(H.lo(u)),s=P.cu(H.lm(u)),r=P.cu(H.li(u)),q=P.cu(H.lj(u)),p=P.cu(H.ll(u)),o=P.cu(H.ln(u)),n=P.l3(H.lk(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aQ.prototype={
n:function(a,b){if(b==null)return!1
return b instanceof P.aQ&&this.a===b.a},
gF:function(a){return C.d.gF(this.a)},
aw:function(a,b){return C.d.aw(this.a,b.a)},
i:function(a){var u,t,s,r=new P.eI(),q=this.a
if(q<0)return"-"+new P.aQ(0-q).i(0)
u=r.$1(C.d.T(q,6e7)%60)
t=r.$1(C.d.T(q,1e6)%60)
s=new P.eH().$1(q%1e6)
return""+C.d.T(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.eH.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eI.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bf.prototype={}
P.cT.prototype={
i:function(a){return"Throw of null."}}
P.ab.prototype={
gb7:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gb6:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gb7()+o+u
if(!q.a)return t
s=q.gb6()
r=P.je(q.b)
return t+s+": "+r}}
P.bm.prototype={
gb7:function(){return"RangeError"},
gb6:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.f5.prototype={
gb7:function(){return"RangeError"},
gb6:function(){var u,t=this.b
if(typeof t!=="number")return t.am()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gl:function(a){return this.f}}
P.hX.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.hU.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bT.prototype={
i:function(a){return"Bad state: "+this.a}}
P.ev.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.je(u)+"."}}
P.fY.prototype={
i:function(a){return"Out of Memory"},
$ibf:1}
P.d3.prototype={
i:function(a){return"Stack Overflow"},
$ibf:1}
P.eB.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dr.prototype={
i:function(a){return"Exception: "+this.a}}
P.eY.prototype={
i:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aM(s,0,75)+"...":s
return t+"\n"+r}}
P.f_.prototype={}
P.x.prototype={}
P.j.prototype={
b1:function(a,b){return new H.c2(this,b,[H.jx(this,"j",0)])},
gl:function(a){var u,t=this.gK(this)
for(u=0;t.p();)++u
return u},
gan:function(a){var u,t=this.gK(this)
if(!t.p())throw H.c(H.f7())
u=t.gv(t)
if(t.p())throw H.c(H.l8())
return u},
u:function(a,b){var u,t,s
P.k1(b,"index")
for(u=this.gK(this),t=0;u.p();){s=u.gv(u)
if(b===t)return s;++t}throw H.c(P.G(b,this,"index",null,t))},
i:function(a){return P.l7(this,"(",")")}}
P.f8.prototype={}
P.a6.prototype={$in:1,$ij:1}
P.bK.prototype={}
P.aY.prototype={
gF:function(a){return P.S.prototype.gF.call(this,this)},
i:function(a){return"null"}}
P.a3.prototype={}
P.S.prototype={constructor:P.S,$iS:1,
n:function(a,b){return this===b},
gF:function(a){return H.bQ(this)},
i:function(a){return"Instance of '"+H.d(H.bR(this))+"'"},
toString:function(){return this.i(this)}}
P.m.prototype={}
P.aj.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.eh.prototype={
gl:function(a){return a.length}}
W.ei.prototype={
i:function(a){return String(a)}}
W.ej.prototype={
i:function(a){return String(a)}}
W.co.prototype={}
W.ba.prototype={$iba:1}
W.bc.prototype={
cQ:function(a,b,c){var u=a.getContext(b,P.mn(c))
return u},
$ibc:1}
W.aM.prototype={
gl:function(a){return a.length}}
W.ex.prototype={
gl:function(a){return a.length}}
W.D.prototype={$iD:1}
W.bD.prototype={
gl:function(a){return a.length}}
W.ey.prototype={}
W.a1.prototype={}
W.ad.prototype={}
W.ez.prototype={
gl:function(a){return a.length}}
W.eA.prototype={
gl:function(a){return a.length}}
W.eD.prototype={
gl:function(a){return a.length}}
W.a4.prototype={$ia4:1}
W.eE.prototype={
i:function(a){return String(a)}}
W.cw.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[[P.a7,P.a3]]},
$iv:1,
$av:function(){return[[P.a7,P.a3]]},
$at:function(){return[[P.a7,P.a3]]},
$ij:1,
$aj:function(){return[[P.a7,P.a3]]}}
W.cx.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gaA(a))+" x "+H.d(this.gay(a))},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia7&&a.left===u.gct(b)&&a.top===u.gcM(b)&&this.gaA(a)===u.gaA(b)&&this.gay(a)===u.gay(b)},
gF:function(a){return W.ki(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(this.gaA(a)),C.c.gF(this.gay(a)))},
gay:function(a){return a.height},
gct:function(a){return a.left},
gcM:function(a){return a.top},
gaA:function(a){return a.width},
$ia7:1,
$aa7:function(){return[P.a3]}}
W.eF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[P.m]},
$iv:1,
$av:function(){return[P.m]},
$at:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]}}
W.eG.prototype={
gl:function(a){return a.length}}
W.io.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
q:function(a,b){this.a.appendChild(b)
return b},
gK:function(a){var u=this.fD(this)
return new J.a0(u,u.length)},
$an:function(){return[W.L]},
$at:function(){return[W.L]},
$aj:function(){return[W.L]}}
W.L.prototype={
geM:function(a){return new W.iq(a)},
gcc:function(a){return new W.io(a,a.children)},
i:function(a){return a.localName},
Z:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.jQ
if(u==null){u=H.b([],[W.ay])
t=new W.cS(u)
u.push(W.kh(null))
u.push(W.kj())
$.jQ=t
d=t}else d=u
u=$.jP
if(u==null){u=new W.e2(d)
$.jP=u
c=u}else{u.a=d
c=u}}if($.as==null){u=document
t=u.implementation.createHTMLDocument("")
$.as=t
$.jd=t.createRange()
s=$.as.createElement("base")
s.href=u.baseURI
$.as.head.appendChild(s)}u=$.as
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.as
if(!!this.$iba)r=u.body
else{r=u.createElement(a.tagName)
$.as.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.t(C.P,a.tagName)){$.jd.selectNodeContents(r)
q=$.jd.createContextualFragment(b)}else{r.innerHTML=b
q=$.as.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.as.body
if(r==null?u!=null:r!==u)J.jH(r)
c.bz(q)
document.adoptNode(q)
return q},
eT:function(a,b,c){return this.Z(a,b,c,null)},
cT:function(a,b){a.textContent=null
a.appendChild(this.Z(a,b,null,null))},
$iL:1,
gcJ:function(a){return a.tagName}}
W.eK.prototype={
$1:function(a){return!!J.P(a).$iL}}
W.h.prototype={$ih:1}
W.e.prototype={
eI:function(a,b,c,d){if(c!=null)this.dj(a,b,c,!1)},
dj:function(a,b,c,d){return a.addEventListener(b,H.bw(c,1),!1)}}
W.at.prototype={$iat:1}
W.eS.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.at]},
$iv:1,
$av:function(){return[W.at]},
$at:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.eT.prototype={
gl:function(a){return a.length}}
W.eX.prototype={
gl:function(a){return a.length}}
W.au.prototype={$iau:1}
W.f2.prototype={
gl:function(a){return a.length}}
W.bF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iv:1,
$av:function(){return[W.y]},
$at:function(){return[W.y]},
$ij:1,
$aj:function(){return[W.y]}}
W.bi.prototype={$ibi:1}
W.fk.prototype={
i:function(a){return String(a)}}
W.fE.prototype={
gl:function(a){return a.length}}
W.fF.prototype={
h:function(a,b){return P.aF(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aF(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.fG(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
W.fG.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fH.prototype={
h:function(a,b){return P.aF(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aF(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.fI(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
W.fI.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ax.prototype={$iax:1}
W.fJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ax]},
$iv:1,
$av:function(){return[W.ax]},
$at:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]}}
W.af.prototype={$iaf:1}
W.U.prototype={
gan:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.k3("No elements"))
if(t>1)throw H.c(P.k3("More than one element"))
return u.firstChild},
Y:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gK:function(a){var u=this.a.childNodes
return new W.cA(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$an:function(){return[W.y]},
$at:function(){return[W.y]},
$aj:function(){return[W.y]}}
W.y.prototype={
fs:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
fw:function(a,b){var u,t
try{u=a.parentNode
J.kQ(u,b,a)}catch(t){H.aq(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.cY(a):u},
eu:function(a,b,c){return a.replaceChild(b,c)},
$iy:1}
W.cR.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iv:1,
$av:function(){return[W.y]},
$at:function(){return[W.y]},
$ij:1,
$aj:function(){return[W.y]}}
W.az.prototype={$iaz:1,
gl:function(a){return a.length}}
W.h0.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.az]},
$iv:1,
$av:function(){return[W.az]},
$at:function(){return[W.az]},
$ij:1,
$aj:function(){return[W.az]}}
W.h8.prototype={
h:function(a,b){return P.aF(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aF(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.h9(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
W.h9.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hb.prototype={
gl:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.hm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aA]},
$iv:1,
$av:function(){return[W.aA]},
$at:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.hn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aB]},
$iv:1,
$av:function(){return[W.aB]},
$at:function(){return[W.aB]},
$ij:1,
$aj:function(){return[W.aB]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.hr.prototype={
h:function(a,b){return a.getItem(b)},
A:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new W.hs(u))
return u},
gl:function(a){return a.length},
$aR:function(){return[P.m,P.m]}}
W.hs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ak.prototype={$iak:1}
W.d6.prototype={
Z:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
u=W.l4("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.U(t).Y(0,new W.U(u))
return t}}
W.hv.prototype={
Z:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.v.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gan(u)
s.toString
u=new W.U(s)
r=u.gan(u)
t.toString
r.toString
new W.U(t).Y(0,new W.U(r))
return t}}
W.hw.prototype={
Z:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.b4(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.v.Z(u.createElement("table"),b,c,d)
u.toString
u=new W.U(u)
s=u.gan(u)
t.toString
s.toString
new W.U(t).Y(0,new W.U(s))
return t}}
W.bU.prototype={$ibU:1}
W.aD.prototype={$iaD:1}
W.al.prototype={$ial:1}
W.hz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.al]},
$iv:1,
$av:function(){return[W.al]},
$at:function(){return[W.al]},
$ij:1,
$aj:function(){return[W.al]}}
W.hA.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aD]},
$iv:1,
$av:function(){return[W.aD]},
$at:function(){return[W.aD]},
$ij:1,
$aj:function(){return[W.aD]}}
W.hD.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.bn.prototype={$ibn:1}
W.hH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aE]},
$iv:1,
$av:function(){return[W.aE]},
$at:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]}}
W.hI.prototype={
gl:function(a){return a.length}}
W.b0.prototype={}
W.hY.prototype={
i:function(a){return String(a)}}
W.ie.prototype={
gl:function(a){return a.length}}
W.b3.prototype={
geW:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.w("deltaY is not supported"))},
geV:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.w("deltaX is not supported"))},
$ib3:1}
W.c3.prototype={
ev:function(a,b){return a.requestAnimationFrame(H.bw(b,1))},
dA:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ip.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.D]},
$iv:1,
$av:function(){return[W.D]},
$at:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]}}
W.dk.prototype={
i:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
n:function(a,b){var u
if(b==null)return!1
u=J.P(b)
return!!u.$ia7&&a.left===u.gct(b)&&a.top===u.gcM(b)&&a.width===u.gaA(b)&&a.height===u.gay(b)},
gF:function(a){return W.ki(C.c.gF(a.left),C.c.gF(a.top),C.c.gF(a.width),C.c.gF(a.height))},
gay:function(a){return a.height},
gaA:function(a){return a.width}}
W.it.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.au]},
$iv:1,
$av:function(){return[W.au]},
$at:function(){return[W.au]},
$ij:1,
$aj:function(){return[W.au]}}
W.dF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.y]},
$iv:1,
$av:function(){return[W.y]},
$at:function(){return[W.y]},
$ij:1,
$aj:function(){return[W.y]}}
W.iF.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.aC]},
$iv:1,
$av:function(){return[W.aC]},
$at:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]}}
W.iG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$in:1,
$an:function(){return[W.ak]},
$iv:1,
$av:function(){return[W.ak]},
$at:function(){return[W.ak]},
$ij:1,
$aj:function(){return[W.ak]}}
W.im.prototype={
A:function(a,b){var u,t,s,r,q
for(u=this.gU(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gU:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.m])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aR:function(){return[P.m,P.m]}}
W.iq.prototype={
h:function(a,b){return this.a.getAttribute(b)},
gl:function(a){return this.gU(this).length}}
W.ir.prototype={}
W.is.prototype={
$1:function(a){return this.a.$1(a)}}
W.c4.prototype={
d7:function(a){var u
if($.du.a===0){for(u=0;u<262;++u)$.du.m(0,C.O[u],W.mw())
for(u=0;u<12;++u)$.du.m(0,C.k[u],W.mx())}},
at:function(a){return $.kO().t(0,W.bE(a))},
a6:function(a,b,c){var u=$.du.h(0,H.d(W.bE(a))+"::"+b)
if(u==null)u=$.du.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iay:1}
W.F.prototype={
gK:function(a){return new W.cA(a,this.gl(a))}}
W.cS.prototype={
at:function(a){return C.a.c7(this.a,new W.fT(a))},
a6:function(a,b,c){return C.a.c7(this.a,new W.fS(a,b,c))},
$iay:1}
W.fT.prototype={
$1:function(a){return a.at(this.a)}}
W.fS.prototype={
$1:function(a){return a.a6(this.a,this.b,this.c)}}
W.dN.prototype={
dc:function(a,b,c,d){var u,t,s
this.a.Y(0,c)
u=b.b1(0,new W.iD())
t=b.b1(0,new W.iE())
this.b.Y(0,u)
s=this.c
s.Y(0,C.Q)
s.Y(0,t)},
at:function(a){return this.a.t(0,W.bE(a))},
a6:function(a,b,c){var u=this,t=W.bE(a),s=u.c
if(s.t(0,H.d(t)+"::"+b))return u.d.eK(c)
else if(s.t(0,"*::"+b))return u.d.eK(c)
else{s=u.b
if(s.t(0,H.d(t)+"::"+b))return!0
else if(s.t(0,"*::"+b))return!0
else if(s.t(0,H.d(t)+"::*"))return!0
else if(s.t(0,"*::*"))return!0}return!1},
$iay:1}
W.iD.prototype={
$1:function(a){return!C.a.t(C.k,a)}}
W.iE.prototype={
$1:function(a){return C.a.t(C.k,a)}}
W.iJ.prototype={
a6:function(a,b,c){if(this.d0(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.t(0,b)
return!1}}
W.iK.prototype={
$1:function(a){return"TEMPLATE::"+H.d(a)}}
W.iH.prototype={
at:function(a){var u=J.P(a)
if(!!u.$ibS)return!1
u=!!u.$ii
if(u&&W.bE(a)==="foreignObject")return!1
if(u)return!0
return!1},
a6:function(a,b,c){if(b==="is"||C.b.b3(b,"on"))return!1
return this.at(a)},
$iay:1}
W.cA.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ck(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gv:function(a){return this.d}}
W.ay.prototype={}
W.iB.prototype={}
W.e2.prototype={
bz:function(a){new W.iO(this).$2(a,null)},
aG:function(a,b){if(b==null)J.jH(a)
else b.removeChild(a)},
ez:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.kT(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aq(r)}t="element unprintable"
try{t=J.aa(a)}catch(r){H.aq(r)}try{s=W.bE(a)
this.ey(a,b,p,t,s,o,n)}catch(r){if(H.aq(r) instanceof P.ab)throw r
else{this.aG(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ey:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.aG(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.at(a)){p.aG(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a6(a,"is",g)){p.aG(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gU(f)
t=H.b(u.slice(0),[H.a9(u,0)])
for(s=f.gU(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a6(a,J.kW(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.P(a).$ibU)p.bz(a.content)}}
W.iO.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.ez(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.aG(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aq(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dj.prototype={}
W.dl.prototype={}
W.dm.prototype={}
W.dn.prototype={}
W.dp.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.dv.prototype={}
W.dw.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dG.prototype={}
W.dH.prototype={}
W.dK.prototype={}
W.dL.prototype={}
W.dM.prototype={}
W.c9.prototype={}
W.ca.prototype={}
W.dO.prototype={}
W.dP.prototype={}
W.dT.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.cb.prototype={}
W.cc.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e3.prototype={}
W.e4.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.e9.prototype={}
W.ea.prototype={}
W.eb.prototype={}
W.ec.prototype={}
P.iT.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eU.prototype={
gaP:function(){var u=this.b,t=H.jx(u,"t",0)
return new H.bL(new H.c2(u,new P.eV(),[t]),new P.eW(),[t,W.L])},
m:function(a,b,c){var u=this.gaP()
J.kU(u.b.$1(J.ef(u.a,b)),c)},
q:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aL(this.gaP().a)},
h:function(a,b){var u=this.gaP()
return u.b.$1(J.ef(u.a,b))},
gK:function(a){var u=P.jk(this.gaP(),!1,W.L)
return new J.a0(u,u.length)},
$an:function(){return[W.L]},
$at:function(){return[W.L]},
$aj:function(){return[W.L]}}
P.eV.prototype={
$1:function(a){return!!J.P(a).$iL}}
P.eW.prototype={
$1:function(a){return H.r(a,"$iL")}}
P.ix.prototype={}
P.a7.prototype={}
P.aV.prototype={$iaV:1}
P.ff.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aV]},
$at:function(){return[P.aV]},
$ij:1,
$aj:function(){return[P.aV]}}
P.aZ.prototype={$iaZ:1}
P.fW.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.aZ]},
$at:function(){return[P.aZ]},
$ij:1,
$aj:function(){return[P.aZ]}}
P.h2.prototype={
gl:function(a){return a.length}}
P.bS.prototype={$ibS:1}
P.hu.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.m]},
$at:function(){return[P.m]},
$ij:1,
$aj:function(){return[P.m]}}
P.i.prototype={
gcc:function(a){return new P.eU(a,new W.U(a))},
Z:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.ay])
p.push(W.kh(null))
p.push(W.kj())
p.push(new W.iH())
c=new W.e2(new W.cS(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.m).eT(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.U(s)
q=p.gan(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.b_.prototype={$ib_:1}
P.hJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[P.b_]},
$at:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]}}
P.dx.prototype={}
P.dy.prototype={}
P.dI.prototype={}
P.dJ.prototype={}
P.dU.prototype={}
P.dV.prototype={}
P.e0.prototype={}
P.e1.prototype={}
P.el.prototype={
gl:function(a){return a.length}}
P.em.prototype={
h:function(a,b){return P.aF(a.get(b))},
A:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aF(u.value[1]))}},
gU:function(a){var u=H.b([],[P.m])
this.A(a,new P.en(u))
return u},
gl:function(a){return a.size},
$aR:function(){return[P.m,null]}}
P.en.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eo.prototype={
gl:function(a){return a.length}}
P.b9.prototype={}
P.fX.prototype={
gl:function(a){return a.length}}
P.di.prototype={}
P.hp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.G(b,a,null,null,null))
return P.aF(a.item(b))},
m:function(a,b,c){throw H.c(P.w("Cannot assign element of immutable List."))},
u:function(a,b){return this.h(a,b)},
$in:1,
$an:function(){return[[P.bK,,,]]},
$at:function(){return[[P.bK,,,]]},
$ij:1,
$aj:function(){return[[P.bK,,,]]}}
P.dQ.prototype={}
P.dR.prototype={}
K.ar.prototype={
ag:function(a,b){return!0},
i:function(a){return"all"}}
K.cB.prototype={
ag:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)if(u[s].ag(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.aX.prototype={}
K.Y.prototype={
ag:function(a,b){return!this.cX(0,b)},
i:function(a){return"!["+this.bD(0)+"]"}}
K.h3.prototype={
ag:function(a,b){if(typeof b!=="number")return H.V(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.jm(this.a),t=H.jm(this.b)
return u+".."+t}}
K.hc.prototype={
d4:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.q("May not create a Set with zero characters."))
u=P.x
t=new H.E([u,P.ao])
for(s=new H.aW(a,a.gl(a));s.p();)t.m(0,s.d,!0)
r=P.jk(new H.bj(t,[u]),!0,u)
C.a.cV(r)
this.a=r},
ag:function(a,b){return C.a.t(this.a,b)},
i:function(a){return P.jo(this.a)}}
L.d4.prototype={
k:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dc(this.a.j(0,b))
r.a=H.b([],[K.aX])
r.c=!1
this.c.push(r)
return r},
f2:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.ag(0,a))return r}return},
i:function(a){return this.b},
c1:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.t(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bj(n,[H.a9(n,0)]),n=n.gK(n);n.p();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.d(t)+" => ["+H.d(s)+"]")
o=u.c.t(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.p)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.da.prototype={
i:function(a){var u=H.jC(this.b,"\n","\\n"),t=H.jC(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.db.prototype={
aj:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.p)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.hE.prototype={
j:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.d4(this,b)
u.c=H.b([],[L.dc])
this.a.m(0,b,u)}return u},
D:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.db(a)
u=P.m
t.c=new H.E([u,u])
this.b.m(0,a,t)}return t},
by:function(a){return this.fG(a)},
fG:function(a){var u=this
return P.lS(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$by(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.x]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.bv(c,0)
else{if(!t.p()){s=3
break}l=t.d}d.push(l);++o
k=g.f2(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.jo(d)
throw H.c(P.q("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.w("removeRange"))
P.jn(0,m,d.length)
d.splice(0,m-0)
C.a.Y(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.t(0,p.a)?7:8
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
if(g.d!=null){j=P.jo(e)
i=g.d
h=i.c.h(0,j)
p=new L.da(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.t(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.lJ()
case 1:return P.lK(q)}}},L.da)},
i:function(a){var u,t=new P.aj(""),s=this.d
if(s!=null)t.a=s.c1()+"\n"
for(s=this.a,s=s.gfH(s),s=new H.cK(J.aK(s.a),s.b);s.p();){u=s.a
if(u!=this.d)t.a+=u.c1()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dc.prototype={
i:function(a){return this.b.b+": "+this.bD(0)}}
O.bd.prototype={
bG:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bA:function(a,b,c){this.b=b
this.c=a},
b2:function(a,b){return this.bA(a,null,b)},
ed:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dD:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gK:function(a){var u=this.a
return new J.a0(u,u.length)},
u:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
q:function(a,b){var u,t,s=this,r=[H.jx(s,"bd",0)]
if(s.ed(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dD(t,H.b([b],r))}},
$ij:1}
O.bM.prototype={
gl:function(a){return this.a.length},
gw:function(){var u=this.b
return u==null?this.b=D.a5():u},
ao:function(){var u=this.b
if(u!=null)u.R(null)},
gO:function(a){var u=this.a
if(u.length>0)return C.a.gaY(u)
else return V.jl()},
cF:function(a){var u=this.a
if(a==null)u.push(V.jl())
else u.push(a)
this.ao()},
bu:function(){var u=this.a
if(u.length>0){u.pop()
this.ao()}}}
E.eq.prototype={}
E.aR.prototype={
sbB:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gw().M(0,s.gcA())
u=s.c
if(u!=null)u.gw().q(0,s.gcA())
t=new D.I("shape",r,s.c)
t.b=!0
s.ah(t)}},
saI:function(a){var u,t,s=this
if(!J.K(s.r,a)){u=s.r
if(u!=null)u.gw().M(0,s.gcw())
if(a!=null)a.gw().q(0,s.gcw())
s.r=a
t=new D.I("mover",u,a)
t.b=!0
s.ah(t)}},
b0:function(a,b){var u,t,s,r,q,p,o,n=this,m=n.r
if(m!=null){u=m.r
t=b.e
if(u<t){m.r=t
u=m.y
if(u!=null)++u.d
m.scO(m.a+m.d*b.y)
m.scD(0,m.b+m.e*b.y)
m.scI(m.c+m.f*b.y)
u=m.c
s=Math.cos(u)
r=Math.sin(u)
u=V.aw(s,-r,0,0,r,s,0,0,0,0,1,0,0,0,0,1)
t=m.b
s=Math.cos(t)
r=Math.sin(t)
u=u.I(0,V.aw(s,0,-r,0,0,1,0,0,r,0,s,0,0,0,0,1))
t=m.a
s=Math.cos(t)
r=Math.sin(t)
m.x=u.I(0,V.aw(1,0,0,0,0,s,-r,0,0,r,s,0,0,0,0,1))
u=m.y
if(u!=null)u.ak(0)}q=m.x}else q=null
if(!J.K(q,n.x)){p=n.x
n.x=q
o=new D.I("matrix",p,q)
o.b=!0
n.ah(o)}for(m=n.y.a,m=new J.a0(m,m.length);m.p();)m.d.b0(0,b)},
az:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.gO(s))
else s.a.push(r.I(0,s.gO(s)))
s.ao()
a.cG(t.f)
s=a.dy
u=(s&&C.a).gaY(s)
if(u!=null&&t.d!=null)u.fv(a,t)
for(s=t.y.a,s=new J.a0(s,s.length);s.p();)s.d.az(a)
a.cE()
a.dx.bu()},
ah:function(a){var u=this.z
if(u!=null)u.R(a)},
V:function(){return this.ah(null)},
cB:function(a){this.e=null
this.ah(a)},
fh:function(){return this.cB(null)},
cz:function(a){this.ah(a)},
fg:function(){return this.cz(null)},
cv:function(a){this.ah(a)},
fd:function(){return this.cv(null)},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcu(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.V()},
ff:function(a,b){var u,t
for(u=b.gK(b),t=this.gcu();u.p();)u.gv(u).gw().M(0,t)
this.V()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bb.prototype={
i:function(a){return this.b}}
E.bk.prototype={
i:function(a){return this.b}}
E.dq.prototype={}
E.h4.prototype={
d3:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aP(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.bM()
t=[V.av]
u.a=H.b([],t)
u.gw().q(0,new E.h5(s))
s.cy=u
u=new O.bM()
u.a=H.b([],t)
u.gw().q(0,new E.h6(s))
s.db=u
u=new O.bM()
u.a=H.b([],t)
u.gw().q(0,new E.h7(s))
s.dx=u
u=H.b([],[O.d7])
s.dy=u
u.push(null)
s.fr=new H.E([P.m,A.d0])},
gfq:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.gO(s)
u=t.db
u=t.z=s.I(0,u.gO(u))
s=u}return s},
cG:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaY(u):a)},
cE:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.h5.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h6.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.h7.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.d8.prototype={
bJ:function(a){this.cH()},
bI:function(){return this.bJ(null)},
gf5:function(){var u,t=this,s=Date.now(),r=C.d.T(P.jO(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aP(s,!1)
return u/r},
bX:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.I()
if(typeof r!=="number")return H.V(r)
u=C.c.cp(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.I()
t=C.c.cp(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.k6(C.h,s.gfz())}},
cH:function(){if(!this.cx){this.cx=!0
var u=window
C.x.dA(u)
C.x.ev(u,W.kn(new E.hC(this),P.a3))}},
fu:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bX()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aP(r,!1)
s.y=P.jO(r-s.r.a).a*0.000001
r=s.cy
C.a.sl(r.a,0)
r.ao()
r=s.db
C.a.sl(r.a,0)
r.ao()
r=s.dx
C.a.sl(r.a,0)
r.ao()
r=s.dy;(r&&C.a).sl(r,0)
s.dy.push(null)
o.az(p.e)}s=p.Q
if(s!=null)s.R(null)}catch(q){u=H.aq(q)
t=H.jy(q)
P.jB("Error: "+H.d(u))
P.jB("Stack: "+H.d(t))
throw H.c(u)}}}
E.hC.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.fu()}}}
Z.dg.prototype={}
Z.cp.prototype={
aS:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aq(s)
t=P.q('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.d(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.d(u.e)+"]"}}
Z.ig.prototype={}
Z.cq.prototype={
ax:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aS:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aS(a)},
cN:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
az:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.m],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aa(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.a.k(p,", ")+"\nAttrs:   "+C.a.k(r,", ")}}
Z.cC.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.d(H.bR(this.c))+"'")+"]"}}
Z.b2.prototype={
gbC:function(a){var u=this.a,t=(u&$.aJ().a)!==0?3:0
if((u&$.aI().a)!==0)t+=3
if((u&$.aH().a)!==0)t+=3
if((u&$.b7().a)!==0)t+=2
if((u&$.b8().a)!==0)t+=3
if((u&$.ci().a)!==0)t+=3
if((u&$.cj().a)!==0)t+=4
if((u&$.bz().a)!==0)++t
return(u&$.aG().a)!==0?t+4:t},
eL:function(a){var u,t=$.aJ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aI()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aH()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.ci()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bz()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aG()
if((s&t.a)!==0)if(u===a)return t
return $.kN()},
n:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b2))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.m]),t=this.a
if((t&$.aJ().a)!==0)u.push("Pos")
if((t&$.aI().a)!==0)u.push("Norm")
if((t&$.aH().a)!==0)u.push("Binm")
if((t&$.b7().a)!==0)u.push("Txt2D")
if((t&$.b8().a)!==0)u.push("TxtCube")
if((t&$.ci().a)!==0)u.push("Clr3")
if((t&$.cj().a)!==0)u.push("Clr4")
if((t&$.bz().a)!==0)u.push("Weight")
if((t&$.aG().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.k(u,"|")}}
D.et.prototype={}
D.bg.prototype={
q:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.W]}]):u).push(b)},
M:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.t(s,b)
if(s===!0){s=t.a
u=(s&&C.a).M(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.t(s,b)
if(s===!0){s=t.b
u=(s&&C.a).M(s,b)||u}return u},
R:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.W()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.A(P.jk(u,!0,{func:1,ret:-1,args:[D.W]}),new D.eO(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.W]}])
C.a.A(u,new D.eP(q))}return!0},
ak:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.R(u)}}}}
D.eO.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eP.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.W.prototype={}
D.bG.prototype={}
D.bH.prototype={}
D.I.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.d(this.d)+" => "+H.d(this.e)}}
X.cr.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cr))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.cG.prototype={
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cG))return!1
if(this.a!=b.a)return!1
if(!this.b.n(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.d(this.a)}}
X.fe.prototype={
fm:function(a){this.d.q(0,a.a)
return!1},
fi:function(a){this.d.M(0,a.a)
return!1}}
X.fl.prototype={
bt:function(a,b){this.r=a.a
return!1},
aK:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.cS()
if(typeof u!=="number")return u.a0()
this.r=(u&~t)>>>0
return!1},
aJ:function(a,b){return!1},
fn:function(a){return!1},
e2:function(a,b,c){return}}
X.bN.prototype={
n:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bN))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.fK.prototype={
bt:function(a,b){this.f=a.a
return!1},
aK:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.cS()
if(typeof u!=="number")return u.a0()
this.f=(u&~t)>>>0
return!1},
aJ:function(a,b){return!1},
fo:function(a,b){return!1}}
X.hG.prototype={
fl:function(a){return!1},
fj:function(a){return!1},
fk:function(a){return!1}}
X.df.prototype={
bQ:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cG(u,new X.bN(t,a.altKey,a.shiftKey))},
as:function(a){a.shiftKey},
be:function(a){a.shiftKey},
ac:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.ag(s-q,r-u)},
aF:function(a){return new V.br(a.movementX,a.movementY)},
bc:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.ag])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
q=C.c.a2(r.pageX)
C.c.a2(r.pageY)
p=o.left
C.c.a2(r.pageX)
n.push(new V.ag(q-p,C.c.a2(r.pageY)-o.top))}return n},
aa:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cr(u,new X.bN(t,a.altKey,a.shiftKey))},
b9:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
dX:function(a){this.f=!0},
dL:function(a){this.f=!1},
dR:function(a){if(this.f&&this.b9(a))a.preventDefault()},
e0:function(a){var u
if(!this.f)return
u=this.bQ(a)
this.b.fm(u)},
dZ:function(a){var u
if(!this.f)return
u=this.bQ(a)
this.b.fi(u)},
e4:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.as(a)
if(r.x){u=r.aa(a)
t=r.aF(a)
if(r.d.bt(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aa(a)
s=r.ac(a)
if(r.c.bt(u,s))a.preventDefault()},
e8:function(a){var u,t,s,r=this
r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aK(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aK(u,s))a.preventDefault()},
dV:function(a){var u,t,s,r=this
if(!r.b9(a)){r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aK(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aK(u,s))a.preventDefault()}},
e6:function(a){var u,t,s,r=this
r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aJ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aJ(u,s))a.preventDefault()},
dT:function(a){var u,t,s,r=this
if(!r.b9(a)){r.as(a)
u=r.aa(a)
if(r.x){t=r.aF(a)
if(r.d.aJ(u,t))a.preventDefault()
return}if(r.r)return
s=r.ac(a)
if(r.c.aJ(u,s))a.preventDefault()}},
ea:function(a){var u,t,s,r,q,p=this
p.as(a)
u=(a&&C.w).geV(a)
t=C.w.geW(a)
s=p.Q
if(typeof u!=="number")return u.I()
if(typeof s!=="number")return H.V(s)
if(typeof t!=="number")return t.I()
r=new V.br(u*s,t*s)
if(p.x){if(p.d.fn(r))a.preventDefault()
return}if(p.r)return
q=p.ac(a)
if(p.c.fo(r,q))a.preventDefault()},
ec:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aa(s.y)
t=s.ac(s.y)
s.d.e2(u,t,r)}},
en:function(a){var u,t=this
t.a.focus()
t.f=!0
t.be(a)
u=t.bc(a)
if(t.e.fl(u))a.preventDefault()},
ej:function(a){var u
this.be(a)
u=this.bc(a)
if(this.e.fj(u))a.preventDefault()},
el:function(a){var u
this.be(a)
u=this.bc(a)
if(this.e.fk(u))a.preventDefault()}}
D.ep.prototype={$iX:1}
D.be.prototype={
a8:function(a){var u=this.r
if(u!=null)u.R(a)},
d9:function(){return this.a8(null)},
$iX:1}
D.X.prototype={}
D.cH.prototype={
a8:function(a){var u=this.y
if(u!=null)u.R(a)},
bV:function(a){var u=this.z
if(u!=null)u.R(a)},
e1:function(){return this.bV(null)},
ef:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){s=a[t]
if(s==null||this.ds(s))return!1}return!0},
dF:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbU(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q instanceof D.be)this.f.push(q)
p=q.r
if(p==null){p=new D.bg()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bG()
u.b=!0
this.a8(u)},
eh:function(a,b){var u,t,s
for(u=b.gK(b),t=this.gbU();u.p();){s=u.gv(u)
C.a.M(this.e,s)
s.gw().M(0,t)}u=new D.bH()
u.b=!0
this.a8(u)},
ds:function(a){var u=C.a.t(this.f,a)
return u},
$aj:function(){return[D.X]},
$abd:function(){return[D.X]}}
D.h1.prototype={$iX:1}
D.ho.prototype={$iX:1}
V.N.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.N))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.aN.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aN))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.eN.prototype={}
V.cN.prototype={
W:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cN))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.by(H.b([q.a,q.d,q.r],p),3,0),n=V.by(H.b([q.b,q.e,q.x],p),3,0),m=V.by(H.b([q.c,q.f,q.y],p),3,0)
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
V.av.prototype={
W:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
cr:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.jl()
u=1/b1
t=-n
s=-a0
return V.aw((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
I:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aw(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
b_:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.B(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
aL:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.T(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.av))return!1
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
C:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.by(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.by(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.by(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.by(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
L:function(){return this.C("")}}
V.ag.prototype={
n:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.ag))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.T.prototype={
H:function(a,b){return new V.T(this.a+b.a,this.b+b.b,this.c+b.c)},
P:function(a,b){return new V.T(this.a-b.a,this.b-b.b,this.c-b.c)},
I:function(a,b){return new V.T(this.a*b,this.b*b,this.c*b)},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.T))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
V.cZ.prototype={
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cZ))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+", "+V.z(u.d,3,0)+"]"}}
V.br.prototype={
br:function(a){var u,t=this.a
if(typeof t!=="number")return t.I()
u=this.b
if(typeof u!=="number")return u.I()
return Math.sqrt(t*t+u*u)},
n:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.br))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.V(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.V(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+"]"}}
V.B.prototype={
br:function(a){return Math.sqrt(this.J(this))},
J:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
ad:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.B(u*t-s*r,s*q-p*t,p*r-u*q)},
H:function(a,b){return new V.B(this.a+b.a,this.b+b.b,this.c+b.c)},
aB:function(a){return new V.B(-this.a,-this.b,-this.c)},
I:function(a,b){return new V.B(this.a*b,this.b*b,this.c*b)},
E:function(a,b){if(Math.abs(b-0)<$.C().a)return V.c0()
return new V.B(this.a/b,this.b/b,this.c/b)},
cs:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
n:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.B))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.z(this.a,3,0)+", "+V.z(this.b,3,0)+", "+V.z(this.c,3,0)+"]"}}
U.ct.prototype={
gw:function(){var u=this.b
return u==null?this.b=D.a5():u},
n:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.ct))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.C("          ")}}
U.fL.prototype={}
U.d_.prototype={
gw:function(){var u=this.y
return u==null?this.y=D.a5():u},
ar:function(a){var u=this.y
if(u!=null)u.R(a)},
scO:function(a){var u
a=V.jD(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.C().a)){this.a=a
u=new D.I("yaw",u,a)
u.b=!0
this.ar(u)}},
scD:function(a,b){var u
b=V.jD(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.C().a)){this.b=b
u=new D.I("pitch",u,b)
u.b=!0
this.ar(u)}},
scI:function(a){var u
a=V.jD(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.C().a)){this.c=a
u=new D.I("roll",u,a)
u.b=!0
this.ar(u)}},
n:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.d_))return!1
u=r.a
t=b.a
s=$.C().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.z(u.a,3,0)+", "+V.z(u.b,3,0)+", "+V.z(u.c,3,0)+"], ["+V.z(u.d,3,0)+", "+V.z(u.e,3,0)+", "+V.z(u.f,3,0)+"]"}}
M.cy.prototype={
a9:function(a){var u=this.y
if(u!=null)u.R(a)},
da:function(){return this.a9(null)},
dN:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga5(),s=[{func:1,ret:-1,args:[D.W]}],r=0;r<b.length;b.length===u||(0,H.p)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bg()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bG()
u.b=!0
this.a9(u)},
dP:function(a,b){var u,t
for(u=b.gK(b),t=this.ga5();u.p();)u.gv(u).gw().M(0,t)
u=new D.bH()
u.b=!0
this.a9(u)},
scK:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gw().M(0,t.ga5())
u=t.d
t.d=a
if(a!=null)a.gw().q(0,t.ga5())
s=new D.I("technique",u,t.d)
s.b=!0
t.a9(s)}},
gw:function(){var u=this.y
return u==null?this.y=D.a5():u},
az:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.cG(f.d)
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
if(typeof s!=="number")return H.V(s)
o=C.c.a2(p*s)
p=q.b
if(typeof r!=="number")return H.V(r)
n=C.c.a2(p*r)
p=C.c.a2(q.c*s)
a.c=p
q=C.c.a2(q.d*r)
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
i=V.aw(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.cF(i)
t=$.jY
if(t==null){t=V.k_()
q=V.jr()
p=$.ka
t=V.jV(t,q,p==null?$.ka=new V.B(0,0,-1):p)
$.jY=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.I(0,h)}a.db.cF(h)
u=f.d
if(u!=null)u.b0(0,a)
for(u=f.e.a,u=new J.a0(u,u.length);u.p();)u.d.b0(0,a)
for(u=f.e.a,u=new J.a0(u,u.length);u.p();)u.d.az(a)
f.b.toString
a.cy.bu()
a.db.bu()
f.c.toString
a.cE()}}
A.cm.prototype={}
A.ek.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
f1:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
eX:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.Q.prototype={
ga3:function(a){var u=this.a?1:0
return u|0|0},
i:function(a){var u=this.a?1:0
return""+(u|0|0)},
n:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.Q))return!1
if(this.a===b.a)u=!0
else u=!1
return u}}
A.fp.prototype={
d2:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.aj("")
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
A.m6(c3,u)
A.m8(c3,u)
A.m7(c3,u)
A.ma(c3,u)
A.mb(c3,u)
A.m9(c3,u)
A.mc(c3,u)
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
m=A.m5(b8.z)
b8.c=n
b8.d=m
b8.e=b8.bR(n,35633)
b8.f=b8.bR(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.u(P.q("Failed to link shader: "+H.d(l)))}b8.eE()
b8.eG()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.r(b8.y.N(0,"invViewMat"),"$ia_")
if(t)b8.dy=H.r(b8.y.N(0,"objMat"),"$ia_")
if(r)b8.fr=H.r(b8.y.N(0,"viewObjMat"),"$ia_")
b8.fy=H.r(b8.y.N(0,"projViewObjMat"),"$ia_")
if(c3.go)b8.fx=H.r(b8.y.N(0,"viewMat"),"$ia_")
if(c3.x1)b8.k1=H.r(b8.y.N(0,"txt2DMat"),"$ibY")
if(c3.x2)b8.k2=H.r(b8.y.N(0,"txtCubeMat"),"$ia_")
if(c3.y1)b8.k3=H.r(b8.y.N(0,"colorMat"),"$ia_")
b8.r1=H.b([],[A.a_])
t=c3.aV
if(t>0){b8.k4=b8.y.N(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.u(P.q(c0+q+c1))
s.push(H.r(j,"$ia_"))}}if(c3.a.a)b8.r2=H.r(b8.y.N(0,"emissionClr"),"$iA")
if(c3.b.a)b8.x1=H.r(b8.y.N(0,"ambientClr"),"$iA")
if(c3.c.a)b8.y2=H.r(b8.y.N(0,"diffuseClr"),"$iA")
if(c3.d.a)b8.aW=H.r(b8.y.N(0,"invDiffuseClr"),"$iA")
t=c3.e.a
if(!t)s=!1
else s=!0
if(s){b8.cj=H.r(b8.y.N(0,"shininess"),"$iM")
if(t)b8.ci=H.r(b8.y.N(0,"specularClr"),"$iA")}if(c3.db){b8.ck=H.r(b8.y.N(0,"envSampler"),"$ibp")
if(c3.r.a)b8.cl=H.r(b8.y.N(0,"reflectClr"),"$iA")
t=c3.x.a
if(!t)s=!1
else s=!0
if(s){b8.cm=H.r(b8.y.N(0,"refraction"),"$iM")
if(t)b8.cn=H.r(b8.y.N(0,"refractClr"),"$iA")}}if(c3.y.a)b8.co=H.r(b8.y.N(0,"alpha"),"$iM")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.x
b8.bj=new H.E([r,A.b1])
b8.bk=new H.E([r,[P.a6,A.bW]])
for(r=[A.bW],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="barLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
H.r(j,"$iA")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.u(P.q(c0+o+c1))
H.r(d,"$iA")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$iA")
if(typeof g!=="number")return g.a0()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$iM")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$iM")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.q(c0+o+c1))
H.r(a0,"$iM")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bW(j,d,c,a3,a2,a1))}b8.bk.m(0,g,e)
q=b8.bj
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.x
b8.bl=new H.E([r,A.b1])
b8.bm=new H.E([r,[P.a6,A.bX]])
for(r=[A.bX],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a0()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.u(P.q(c0+a4+c1))
H.r(j,"$iA")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.u(P.q(c0+a4+c1))
H.r(d,"$iA")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.u(P.q(c0+a4+c1))
H.r(c,"$iA")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.u(P.q(c0+a4+c1))
H.r(j,"$iA")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.u(P.q(c0+a4+c1))
H.r(d,"$iA")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$ibo")
a8=c}else a8=b9
e.push(new A.bX(a7,a6,a5,j,d,a8))}b8.bm.m(0,g,e)
q=b8.bl
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.x
b8.bn=new H.E([r,A.b1])
b8.bo=new H.E([r,[P.a6,A.bZ]])
for(r=[A.bZ],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
H.r(j,"$iA")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.u(P.q(c0+o+c1))
H.r(d,"$iA")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$iA")
if(typeof g!=="number")return g.a0()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$ibY")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$ibp")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$ibp")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$ibV")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$iM")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$iM")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.q(c0+o+c1))
H.r(a0,"$iM")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.bZ(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.bo.m(0,g,e)
q=b8.bn
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.x
b8.bp=new H.E([r,A.b1])
b8.bq=new H.E([r,[P.a6,A.c_]])
for(r=[A.c_],i=0;i<t.length;t.length===s||(0,H.p)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.d(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
H.r(j,"$iA")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.u(P.q(c0+o+c1))
H.r(d,"$iA")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.u(P.q(c0+o+c1))
H.r(c,"$iA")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.u(P.q(c0+o+c1))
H.r(b,"$iA")
if(typeof g!=="number")return g.a0()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$iA")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.u(P.q(c0+o+c1))
H.r(a0,"$iA")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.u(P.q(c0+o+c1))
H.r(b2,"$iM")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.u(P.q(c0+o+c1))
H.r(b3,"$iM")
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
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$ibV")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$iM")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.u(P.q(c0+a4+c1))
H.r(a0,"$iM")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$iM")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.u(P.q(c0+a4+c1))
H.r(a0,"$iM")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.u(P.q(c0+a4+c1))
H.r(b2,"$iM")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.u(P.q(c0+a4+c1))
H.r(a,"$ibo")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.u(P.q(c0+o+c1))
H.r(a,"$ibo")
b0=a}else b0=b9
e.push(new A.c_(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.bq.m(0,g,e)
q=b8.bp
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.q(c0+o+c1))
q.m(0,g,j)}}}},
eA:function(a,b){}}
A.cn.prototype={
i:function(a){return"barLight"+H.d(this.a)}}
A.cv.prototype={
i:function(a){return"dirLight"+H.d(this.a)}}
A.cX.prototype={
i:function(a){return"pointLight"+H.d(this.a)}}
A.d2.prototype={
i:function(a){return"spotLight"+H.d(this.a)}}
A.fs.prototype={
i:function(a){return this.aH}}
A.bW.prototype={}
A.bX.prototype={}
A.bZ.prototype={}
A.c_.prototype={}
A.d0.prototype={
d5:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bR:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.q("Error compiling shader '"+H.d(s)+"': "+H.d(u)))}return s},
eE:function(){var u,t,s,r=this,q=H.b([],[A.cm]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.V(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cm(p,t.name,s))}r.x=new A.ek(q)},
eG:function(){var u,t,s,r=this,q=H.b([],[A.dd]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.V(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.eU(t.type,t.size,t.name,s))}r.y=new A.hS(q)},
aq:function(a,b,c){var u=this.a
if(a===1)return new A.b1(u,b,c)
else return A.jq(u,this.r,b,a,c)},
dv:function(a,b,c){var u=this.a
if(a===1)return new A.bo(u,b,c)
else return A.jq(u,this.r,b,a,c)},
dw:function(a,b,c){var u=this.a
if(a===1)return new A.bp(u,b,c)
else return A.jq(u,this.r,b,a,c)},
aR:function(a,b){return new P.dr(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.d(b)+"."))},
eU:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aq(b,c,d)
case 5121:return u.aq(b,c,d)
case 5122:return u.aq(b,c,d)
case 5123:return u.aq(b,c,d)
case 5124:return u.aq(b,c,d)
case 5125:return u.aq(b,c,d)
case 5126:return new A.M(u.a,c,d)
case 35664:return new A.hO(u.a,c,d)
case 35665:return new A.A(u.a,c,d)
case 35666:return new A.bV(u.a,c,d)
case 35667:return new A.hP(u.a,c,d)
case 35668:return new A.hQ(u.a,c,d)
case 35669:return new A.hR(u.a,c,d)
case 35674:return new A.hT(u.a,c,d)
case 35675:return new A.bY(u.a,c,d)
case 35676:return new A.a_(u.a,c,d)
case 35678:return u.dv(b,c,d)
case 35680:return u.dw(b,c,d)
case 35670:throw H.c(u.aR("BOOL",c))
case 35671:throw H.c(u.aR("BOOL_VEC2",c))
case 35672:throw H.c(u.aR("BOOL_VEC3",c))
case 35673:throw H.c(u.aR("BOOL_VEC4",c))
default:throw H.c(P.q("Unknown uniform variable type "+H.d(a)+" for "+H.d(c)+"."))}}}
A.dd.prototype={}
A.hS.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.q("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.L()},
L:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.p)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.b1.prototype={
i:function(a){return"Uniform1i: "+H.d(this.c)}}
A.hP.prototype={
i:function(a){return"Uniform2i: "+H.d(this.c)}}
A.hQ.prototype={
i:function(a){return"Uniform3i: "+H.d(this.c)}}
A.hR.prototype={
i:function(a){return"Uniform4i: "+H.d(this.c)}}
A.hN.prototype={
i:function(a){return"Uniform1iv: "+H.d(this.c)}}
A.M.prototype={
i:function(a){return"Uniform1f: "+H.d(this.c)}}
A.hO.prototype={
i:function(a){return"Uniform2f: "+H.d(this.c)}}
A.A.prototype={
i:function(a){return"Uniform3f: "+H.d(this.c)}}
A.bV.prototype={
i:function(a){return"Uniform4f: "+H.d(this.c)}}
A.hT.prototype={
i:function(a){return"Uniform1Mat2 "+H.d(this.c)}}
A.bY.prototype={
a1:function(a){var u=new Float32Array(H.cd(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.d(this.c)}}
A.a_.prototype={
a1:function(a){var u=new Float32Array(H.cd(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.d(this.c)}}
A.bo.prototype={
i:function(a){return"UniformSampler2D: "+H.d(this.c)}}
A.bp.prototype={
i:function(a){return"UniformSamplerCube: "+H.d(this.c)}}
F.j5.prototype={
$1:function(a){return new V.T(Math.cos(a),Math.sin(a),0)}}
F.iU.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.jG(n.$1(o),m)
m=J.jG(n.$1(o+3.141592653589793/p.c),m).P(0,l)
m=new V.B(m.a,m.b,m.c)
u=m.E(0,Math.sqrt(m.J(m)))
n=$.kb
if(n==null){n=new V.B(1,0,0)
$.kb=n
t=n}else t=n
n=u.ad(!J.K(u,t)?V.kd():t)
s=n.E(0,Math.sqrt(n.J(n)))
n=s.ad(u)
t=n.E(0,Math.sqrt(n.J(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.I(0,n*m)
m=s.I(0,q*m)
m=l.H(0,new V.T(n.a-m.a,n.b-m.b,n.c-m.c))
if(!J.K(a.f,m)){a.f=m
n=a.a
if(n!=null)n.V()}}}
F.bh.prototype={
aU:function(){var u=this
if(!u.gcf()){C.a.M(u.a.a.d.b,u)
u.a.a.V()}u.eq()
u.er()
u.es()},
eB:function(a){this.a=a
a.d.b.push(this)},
eC:function(a){this.b=a
a.d.c.push(this)},
eD:function(a){this.c=a
a.d.d.push(this)},
eq:function(){var u=this.a
if(u!=null){C.a.M(u.d.b,this)
this.a=null}},
er:function(){var u=this.b
if(u!=null){C.a.M(u.d.c,this)
this.b=null}},
es:function(){var u=this.c
if(u!=null){C.a.M(u.d.d,this)
this.c=null}},
gcf:function(){return this.a==null||this.b==null||this.c==null},
dm:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.c0()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.cs())return
return s.E(0,Math.sqrt(s.J(s)))},
dq:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.B(r.a,r.b,r.c)
s=r.E(0,Math.sqrt(r.J(r)))
r=t.P(0,q)
r=new V.B(r.a,r.b,r.c)
r=s.ad(r.E(0,Math.sqrt(r.J(r))))
return r.E(0,Math.sqrt(r.J(r)))},
bh:function(){var u,t=this
if(t.d!=null)return!0
u=t.dm()
if(u==null){u=t.dq()
if(u==null)return!1}t.d=u
t.a.a.V()
return!0},
dl:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.c0()
if(q!=null)s=s.H(0,q)
if(u!=null)s=s.H(0,u)
if(t!=null)s=s.H(0,t)
if(s.cs())return
return s.E(0,Math.sqrt(s.J(s)))},
dn:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.P(0,g)
l=new V.B(l.a,l.b,l.c)
q=l.E(0,Math.sqrt(l.J(l)))
if(s.a-t.a<0)q=q.aB(0)}else{p=(l-u.b)/r
l=d.P(0,g).I(0,p).H(0,g).P(0,j)
l=new V.B(l.a,l.b,l.c)
q=l.E(0,Math.sqrt(l.J(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.aB(0)}l=n.d
if(l!=null){o=l.E(0,Math.sqrt(l.J(l)))
l=o.ad(q)
l=l.E(0,Math.sqrt(l.J(l))).ad(o)
q=l.E(0,Math.sqrt(l.J(l)))}return q},
bf:function(){var u,t=this
if(t.e!=null)return!0
u=t.dl()
if(u==null){u=t.dn()
if(u==null)return!1}t.e=u
t.a.a.V()
return!0},
gcd:function(a){var u=this
if(J.K(u.a,u.b))return!0
if(J.K(u.b,u.c))return!0
if(J.K(u.c,u.a))return!0
return!1},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this
if(s.gcf())return a+"disposed"
u=a+C.b.ai(J.aa(s.a.e),0)+", "+C.b.ai(J.aa(s.b.e),0)+", "+C.b.ai(J.aa(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
L:function(){return this.C("")}}
F.eR.prototype={}
F.hl.prototype={
bs:function(a,b,c){var u,t=b.a
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.G()
t=t.e
u=c.c
u.a.a.G()
if(t==u.e){t=b.b
t.a.a.G()
t=t.e
u=c.a
u.a.a.G()
if(t==u.e){t=b.c
t.a.a.G()
t=t.e
u=c.b
u.a.a.G()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cI.prototype={}
F.fg.prototype={}
F.hM.prototype={}
F.cV.prototype={}
F.hd.prototype={
gw:function(){var u=this.e
return u==null?this.e=D.a5():u},
au:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.au()||!1
if(!t.a.au())u=!1
s=t.e
if(s!=null)s.ak(0)
return u},
fa:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.a9(o,0)])
for(o=[F.c1];u.length!==0;){t=C.a.gf3(u)
C.a.bv(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.bs(0,t,q)){s.push(q)
C.a.bv(u,r)}}if(s.length>1)b.f9(s)}}p.a.G()
p.c.bw()
p.d.bw()
p.b.ft()
p.c.bx(new F.hM())
p.d.bx(new F.hl())
o=p.e
if(o!=null)o.ak(0)},
eO:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aJ()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.aI().a)!==0)++s
if((t&$.aH().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.b8().a)!==0)++s
if((t&$.ci().a)!==0)++s
if((t&$.cj().a)!==0)++s
if((t&$.bz().a)!==0)++s
if((t&$.aG().a)!==0)++s
r=a4.gbC(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.J])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cp])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.eL(m)
k=l.gbC(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.cp(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].f8(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.cd(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cq(new Z.dg(a1,d),o,a4)
c.b=H.b([],[Z.cC])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.x])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.G()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.G()
b.push(t.e)}a=Z.lC(u,34963,b)
c.b.push(new Z.cC(4,b.length,a))}return c},
i:function(a){var u=this,t=H.b([],[P.m])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.C("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.C("   "))}return C.a.k(t,"\n")},
V:function(){var u=this.e
if(u!=null)u.R(null)}}
F.he.prototype={
eJ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.bh])
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
if(p){n.q(0,m)
u.a.q(0,l)
u.a.q(0,j)
h.push(F.eQ(m,l,j))
u.a.q(0,m)
u.a.q(0,j)
u.a.q(0,i)
h.push(F.eQ(m,j,i))}else{n.q(0,l)
u.a.q(0,j)
u.a.q(0,i)
h.push(F.eQ(l,j,i))
u.a.q(0,l)
u.a.q(0,i)
u.a.q(0,m)
h.push(F.eQ(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
bx:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.bs(0,p,n)){p.aU()
break}}}}},
bw:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gcd(s)
if(t)s.aU()}},
au:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bh())s=!1
return s},
bg:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.p)(u),++r)if(!u[r].bf())s=!1
return s},
i:function(a){return this.L()},
C:function(a){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(a))
return C.a.k(r,"\n")},
L:function(){return this.C("")}}
F.hf.prototype={
gl:function(a){return 0},
bx:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.h(0,q)}},
bw:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gcd(s)
if(t)s.aU()}},
i:function(a){return this.L()},
C:function(a){var u,t,s=H.b([],[P.m])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.f(t,u)
s.push(t[u].C(a+(""+u+". ")))}return C.a.k(s,"\n")},
L:function(){return this.C("")}}
F.hg.prototype={
gl:function(a){return 0},
ft:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].gh9()
t=t.gh4(t)
if(t.gl(t).S(0,1)){t=this.b
return H.f(t,u)
t[u].aU()}}},
i:function(a){return this.L()},
C:function(a){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(a))}return C.a.k(s,"\n")},
L:function(){return this.C("")}}
F.c1.prototype={
ce:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.ke(u.cx,r,o,t,s,q,p,a,n)},
f8:function(a){var u,t,s=this
if(a.n(0,$.aJ())){u=s.f
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aI())){u=s.r
t=[P.J]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.aH())){u=s.x
t=[P.J]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.b7())){u=s.y
t=[P.J]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.n(0,$.b8())){u=s.z
t=[P.J]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.ci())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.n(0,$.cj())){u=s.Q
t=[P.J]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.n(0,$.bz()))return H.b([s.ch],[P.J])
else if(a.n(0,$.aG())){u=H.b([-1,-1,-1,-1],[P.J])
return u}else return H.b([],[P.J])},
bh:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c0()
t.d.A(0,new F.id(s))
s=s.a
t.r=s.E(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
bf:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.c0()
t.d.A(0,new F.ic(s))
s=s.a
t.x=s.E(0,Math.sqrt(s.J(s)))
s=t.a
if(s!=null){s.V()
s=t.a.e
if(s!=null)s.ak(0)}return!0},
n:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.L()},
C:function(a){var u,t,s=this,r="-",q=H.b([],[P.m])
q.push(C.b.ai(J.aa(s.e),0))
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
q.push(V.z(s.ch,3,0))
q.push(r)
t=C.a.k(q,", ")
return a+"{"+t+"}"},
L:function(){return this.C("")}}
F.id.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.ic.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.H(0,t)}}}
F.i3.prototype={
G:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
q:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.q("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.V()
return!0},
c5:function(a,b){var u=null,t=F.ke(u,u,a,u,u,b,u,u,0)
this.q(0,t)
return t},
gl:function(a){return this.c.length},
au:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bh()
return!0},
bg:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)u[s].bf()
return!0},
eP:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.E(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.R(null)}}}}return!0},
i:function(a){return this.L()},
C:function(a){var u,t,s,r
this.G()
u=H.b([],[P.m])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r)u.push(t[r].C(a))
return C.a.k(u,"\n")},
L:function(){return this.C("")}}
F.i4.prototype={
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
A:function(a,b){var u=this
C.a.A(u.b,b)
C.a.A(u.c,new F.i5(u,b))
C.a.A(u.d,new F.i6(u,b))},
i:function(a){return this.L()},
L:function(){var u,t,s,r=H.b([],[P.m])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.p)(u),++s)r.push(u[s].C(""))
return C.a.k(r,"\n")}}
F.i5.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)}}
F.i6.prototype={
$1:function(a){var u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)}}
F.i7.prototype={
gl:function(a){return 0},
h:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
i:function(a){return this.L()},
L:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(""))}return C.a.k(s,"\n")}}
F.i9.prototype={}
F.i8.prototype={
bs:function(a,b,c){return J.K(b.f,c.f)}}
F.ia.prototype={}
F.fU.prototype={
f9:function(a){var u,t,s,r,q,p,o,n,m=V.c0()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.B(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.E(0,Math.sqrt(m.J(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.p)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.E(0,Math.sqrt(p*p+o*o+n*n))}if(!J.K(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.R(null)}}}return}}
F.ib.prototype={
gl:function(a){return 0},
i:function(a){return this.L()},
L:function(){var u,t,s=H.b([],[P.m])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].C(""))}return C.a.k(s,"\n")}}
O.cL.prototype={
gw:function(){var u=this.fr
return u==null?this.fr=D.a5():u},
X:function(a){var u=this.fr
if(u!=null)u.R(a)},
de:function(){return this.X(null)},
bW:function(a){this.a=null
this.X(a)},
ex:function(){return this.bW(null)},
dH:function(a,b){var u=new D.bG()
u.b=!0
this.X(u)},
dJ:function(a,b){var u=new D.bH()
u.b=!0
this.X(u)},
bP:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.x
f=[f,f]
u=new H.E(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.ga7()
o=u.h(0,q.ga7())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cn])
u.A(0,new O.fw(g,n))
C.a.aD(n,new O.fx())
m=new H.E(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.cv])
m.A(0,new O.fy(g,l))
C.a.aD(l,new O.fz())
k=new H.E(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.p)(t),++r){q=t[r]
p=q.ga7()
o=k.h(0,q.ga7())
k.m(0,p,o==null?1:o)}j=H.b([],[A.cX])
k.A(0,new O.fA(g,j))
C.a.aD(j,new O.fB())
i=new H.E(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.p)(f),++r){q=f[r]
s=q.ga7()
p=i.h(0,q.ga7())
i.m(0,s,p==null?1:p)}h=H.b([],[A.d2])
i.A(0,new O.fC(g,h))
C.a.aD(h,new O.fD())
f=C.d.T(g.e.a.length+3,4)
g.dy.e
return A.lg(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
dk:function(a,b){},
b0:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a0(u,u.length);u.p();){t=u.d
t.toString
s=$.i2
if(s==null)s=$.i2=new V.B(0,0,1)
t.a=s
r=$.i1
t.d=r==null?$.i1=new V.B(0,1,0):r
r=$.i0
t.e=r==null?$.i0=new V.B(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.b_(s)
r=s.a
p=s.b
o=s.c
t.a=s.E(0,Math.sqrt(r*r+p*p+o*o))
o=q.b_(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.E(0,Math.sqrt(p*p+r*r+s*s))
s=q.b_(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.E(0,Math.sqrt(r*r+p*p+o*o))}}}},
fv:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.bP()
u=b4.fr.h(0,b3.aH)
if(u==null){u=A.lf(b3,b4.a)
t=u.b
if(t.length===0)H.u(P.q("May not cache a shader with no name."))
if(b4.fr.eR(0,t))H.u(P.q('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.aW
b3=b5.e
if(!(b3 instanceof Z.cq))b3=b5.e=null
if(b3==null||!b3.d.n(0,r)){b3=s.k4
if(b3)b5.d.au()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.bg()
p.a.bg()
p=p.e
if(p!=null)p.ak(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.eP()
o=o.e
if(o!=null)o.ak(0)}m=b5.d.eO(new Z.ig(b4.a),r)
m.ax($.aJ()).e=b2.a.Q.c
if(b3)m.ax($.aI()).e=b2.a.cx.c
if(q)m.ax($.aH()).e=b2.a.ch.c
if(s.r2)m.ax($.b7()).e=b2.a.cy.c
if(p)m.ax($.b8()).e=b2.a.db.c
if(s.ry)m.ax($.aG()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.hB])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.f1()
if(s.fr){b3=b2.a
p=b4.dx
p=p.gO(p)
b3=b3.dy
b3.toString
b3.a1(p.W(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.gO(p)
o=b4.dx
o=b4.cx=p.I(0,o.gO(o))
p=o}b3=b3.fr
b3.toString
b3.a1(p.W(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gfq()
o=b4.dx
o=b4.ch=p.I(0,o.gO(o))
p=o}b3=b3.fy
b3.toString
b3.a1(p.W(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.gO(p)
b3=b3.fx
b3.toString
b3.a1(p.W(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.a1(C.i.W(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.a1(C.i.W(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.a1(C.i.W(p,!0))}if(s.aV>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.f(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.f(b3,j)
b3=b3[j]
i=new Float32Array(H.cd(p.W(0,!0)))
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
b3=b3.aW
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.e.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.z.ch
p=p.cj
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.z.f
b3=b3.ci
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.z
if(b3.length>0){p=P.x
h=new H.E([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.ga7()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.ck(b2.a.bk.h(0,e),d)
n=f.gfJ()
b=$.ah
n=n.aL(b==null?$.ah=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfO()
b=$.ah
n=n.aL(b==null?$.ah=new V.T(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gcg()){n=f.gc8()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gc9()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gca()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.bj.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.gO(p)
p=P.x
a0=new H.E([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.ck(b2.a.bm.h(0,0),d)
n=a.b_(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.E(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.bl.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.gO(p)
p=P.x
a3=new H.E([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.ga7()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.ck(b2.a.bo.h(0,e),d)
a4=a.I(0,f.gO(f))
n=f.gO(f)
b=$.ah
n=n.aL(b==null?$.ah=new V.T(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.ah
n=a4.aL(n==null?$.ah=new V.T(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gal()
n=a4.cr(0)
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
i=new Float32Array(H.cd(new V.cN(b,a1,a2,a5,a6,a7,a8,a9,n).W(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gal()
n=f.gal()
if(!C.a.t(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gal()
b=n.gaf(n)
if(b){b=c.f
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}f.gaC()
n=f.gcU()
b=c.x
b.toString
a1=n.geZ(n)
a2=n.gf_(n)
a5=n.gf0()
n=n.geY()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaC()
if(!C.a.t(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gaC()
b=n.gaf(n)
if(b){b=c.r
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}if(f.gcg()){n=f.gc8()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gc9()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gca()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.bn.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.gO(p)
p=P.x
b1=new H.E([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.p)(p),++g){f=p[g]
e=f.ga7()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.ck(b2.a.bq.h(0,e),d)
n=f.gfp(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gfM(f).h3()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.aL(f.gfp(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gav(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gal()
n=f.gh8()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh5(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gh6()
b=c.x
b.a.uniform1f(b.d,n)
n=f.gh7()
b=c.y
b.a.uniform1f(b.d,n)
f.gal()
n=f.gal()
if(!C.a.t(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gal()
b=n.gaf(n)
if(b){b=c.dx
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}f.gaC()
n=f.gcU()
b=c.z
b.toString
a1=n.geZ(n)
a2=n.gf_(n)
a5=n.gf0()
n=n.geY()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gaC()
if(!C.a.t(l,n)){n.sae(0,l.length)
l.push(n)}n=f.gaC()
b=n.gaf(n)
if(b){b=c.dy
b.toString
a1=n.gaf(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.gae(n)
b.a.uniform1i(b.d,n)}}if(f.gfN()){n=f.gfL()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.gfK()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gcg()){n=f.gc8()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gc9()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gca()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.p)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.bp.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.gO(p).cr(0)}b3=b3.id
b3.toString
b3.a1(p.W(0,!0))}if(s.db){b2.dk(l,b2.ch)
b3=b2.a
p=b2.ch
b3.eA(b3.ck,p)
if(s.r.a){b3=b2.a
p=b2.cx.f
b3=b3.cl
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}b3=s.x.a
if(!b3)p=!1
else p=!0
if(p){p=b2.a
o=b2.cy.ch
p=p.cm
p.a.uniform1f(p.d,o)}if(b3){b3=b2.a
p=b2.cy.f
b3=b3.cn
b3.a.uniform3f(b3.d,p.a,p.b,p.c)}}b3=s.y.a
p=!b3
if(p)o=!1
else o=!0
if(o){if(b3){b3=b2.a
o=b2.db.f
b3=b3.co
b3.a.uniform1f(b3.d,o)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j)l[j].aS(b4)
b3=b5.e
b3.aS(b4)
b3.az(b4)
b3.cN(b4)
if(p)b3=!1
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j)l[j].cN(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.eX()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.bP().aH}}
O.fw.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cn(a,C.d.T(b+3,4)*4))}}
O.fx.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fy.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cv(a,C.d.T(b+3,4)*4))}}
O.fz.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fA.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.cX(a,C.d.T(b+3,4)*4))}}
O.fB.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fC.prototype={
$2:function(a,b){if(typeof b!=="number")return b.H()
return this.b.push(new A.d2(a,C.d.T(b+3,4)*4))}}
O.fD.prototype={
$2:function(a,b){return J.cl(a.a,b.a)}}
O.fq.prototype={
ab:function(){var u,t=this
t.bE()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.I(t.b,u,1)
u.b=!0
t.a.X(u)}}}
O.cM.prototype={
ab:function(){},
bZ:function(a){var u,t,s=this
if(!s.c.n(0,a)){if(!s.c.a)u=!1
else u=!0
if(u){if(!a.a)u=!1
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.ab()
u=s.a
u.a=null
u.X(null)}}}
O.fr.prototype={}
O.ae.prototype={
bY:function(a){var u,t,s=this
if(!s.f.n(0,a)){u=s.f
s.f=a
t=new D.I(s.b+".color",u,a)
t.b=!0
s.a.X(t)}},
ab:function(){this.bE()
this.bY(new V.N(1,1,1))},
sav:function(a,b){this.bZ(new A.Q(!0,!1,!1))
this.bY(b)}}
O.ft.prototype={}
O.fu.prototype={
ab:function(){var u,t=this
t.bF()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.I(t.b+".refraction",u,1)
u.b=!0
t.a.X(u)}}}
O.fv.prototype={
c_:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.I(u.b+".shininess",t,a)
t.b=!0
u.a.X(t)}},
ab:function(){this.bF()
this.c_(100)}}
O.d7.prototype={}
T.hB.prototype={}
X.ja.prototype={}
X.eZ.prototype={
gw:function(){var u=this.x
return u==null?this.x=D.a5():u}}
X.cU.prototype={
gw:function(){var u=this.f
return u==null?this.f=D.a5():u},
ap:function(a){var u=this.f
if(u!=null)u.R(a)},
dh:function(){return this.ap(null)},
saI:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gw().M(0,s.gbK())
t=s.b
s.b=a
if(a!=null)a.gw().q(0,s.gbK())
u=new D.I("mover",t,s.b)
u.b=!0
s.ap(u)}}}
X.hx.prototype={}
V.cs.prototype={
aN:function(a){this.b=new P.f3(C.L)
this.c=null
this.d=H.b([],[[P.a6,W.a4]])},
B:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.a4]))
u=a.split("\n")
for(l=u.length,t=[W.a4],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.du(q,0,q.length)
n=o==null?q:o
C.J.cT(p,H.jC(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaY(m.d).push(p)}},
cC:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.a6,W.a4]])
u=C.a.k(b,"\n")
t=r.c
if(t==null)t=r.c=r.aT()
for(t.toString,s=new H.k(u),s=new P.bt(t.by(new H.aW(s,s.gl(s))).a());s.p();)r.aZ(s.gv(s))}}
V.j3.prototype={
$1:function(a){var u=C.c.cL(this.a.gf5(),2)
if(u!=="0.00")P.jB(u+" fps")}}
V.eC.prototype={
aZ:function(a){var u=this
switch(a.a){case"Class":u.B(a.b,"#551")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break
case"Type":u.B(a.b,"#B11")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aT:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.hF()
a1.d=a1.j(0,r)
u=a1.j(0,r).k(0,q)
t=K.o(new H.k("_"))
u.a.push(t)
t=K.H("a","z")
u.a.push(t)
t=K.H("A","Z")
u.a.push(t)
t=a1.j(0,q).k(0,q)
u=K.o(new H.k("_"))
t.a.push(u)
u=K.H("0","9")
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=a1.j(0,r).k(0,p)
t=K.H("0","9")
u.a.push(t)
t=a1.j(0,p).k(0,p)
u=K.H("0","9")
t.a.push(u)
u=a1.j(0,p).k(0,o)
t=K.o(new H.k("."))
u.a.push(t)
t=a1.j(0,o).k(0,n)
u=K.H("0","9")
t.a.push(u)
u=a1.j(0,n).k(0,n)
t=K.H("0","9")
u.a.push(t)
t=a1.j(0,r).k(0,m)
u=K.o(new H.k(l))
t.a.push(u)
u=a1.j(0,m).k(0,m)
t=K.o(new H.k(l))
u.a.push(t)
t=a1.j(0,r).k(0,k)
u=K.o(new H.k('"'))
t.a.push(u)
u=a1.j(0,k).k(0,j)
t=K.o(new H.k('"'))
u.a.push(t)
t=a1.j(0,k).k(0,i)
u=K.o(new H.k("\\"))
t.a.push(u)
u=a1.j(0,i).k(0,k)
t=K.o(new H.k('"'))
u.a.push(t)
a1.j(0,k).k(0,k).a.push(new K.ar())
t=a1.j(0,r).k(0,h)
u=K.o(new H.k("'"))
t.a.push(u)
u=a1.j(0,h).k(0,g)
t=K.o(new H.k("'"))
u.a.push(t)
t=a1.j(0,h).k(0,f)
u=K.o(new H.k("\\"))
t.a.push(u)
u=a1.j(0,f).k(0,h)
t=K.o(new H.k("'"))
u.a.push(t)
a1.j(0,h).k(0,h).a.push(new K.ar())
t=a1.j(0,r).k(0,e)
u=K.o(new H.k("/"))
t.a.push(u)
u=a1.j(0,e).k(0,d)
t=K.o(new H.k("/"))
u.a.push(t)
t=a1.j(0,d).k(0,c)
u=K.o(new H.k("\n"))
t.a.push(u)
u=a1.j(0,d).k(0,d)
t=new K.Y()
s=[K.aX]
t.a=H.b([],s)
u.a.push(t)
u=K.o(new H.k("\n"))
t.a.push(u)
u=a1.j(0,e).k(0,b)
t=K.o(new H.k("*"))
u.a.push(t)
t=a1.j(0,b).k(0,a)
u=K.o(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,b)
t=new K.Y()
t.a=H.b([],s)
u.a.push(t)
u=K.o(new H.k("*"))
t.a.push(u)
u=a1.j(0,a).k(0,c)
t=K.o(new H.k("/"))
u.a.push(t)
t=a1.j(0,r).k(0,a0)
u=K.o(new H.k(" \n\t"))
t.a.push(u)
u=a1.j(0,a0).k(0,a0)
t=K.o(new H.k(" \n\t"))
u.a.push(t)
t=a1.j(0,p)
t.d=t.a.D("Num")
t=a1.j(0,n)
t.d=t.a.D("Num")
t=a1.j(0,m)
t.d=t.a.D("Symbol")
t=a1.j(0,j)
t.d=t.a.D("String")
t=a1.j(0,g)
t.d=t.a.D("String")
t=a1.j(0,c)
t.d=t.a.D(d)
t=a1.j(0,a0)
t.d=t.a.D(a0)
t=a1.j(0,q)
t=t.d=t.a.D(q)
u=[P.m]
t.aj(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aj(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aj(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.f0.prototype={
aZ:function(a){var u=this
switch(a.a){case"Builtin":u.B(a.b,"#411")
break
case"Comment":u.B(a.b,"#777")
break
case"Id":u.B(a.b,"#111")
break
case"Num":u.B(a.b,"#191")
break
case"Preprocess":u.B(a.b,"#737")
break
case"Reserved":u.B(a.b,"#119")
break
case"Symbol":u.B(a.b,"#611")
break
case"Type":u.B(a.b,"#171")
break
case"Whitespace":u.B(a.b,"#111")
break}},
aT:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.hF()
e.d=e.j(0,r)
u=e.j(0,r).k(0,q)
t=K.o(new H.k("_"))
u.a.push(t)
t=K.H("a","z")
u.a.push(t)
t=K.H("A","Z")
u.a.push(t)
t=e.j(0,q).k(0,q)
u=K.o(new H.k("_"))
t.a.push(u)
u=K.H("0","9")
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=e.j(0,r).k(0,p)
t=K.H("0","9")
u.a.push(t)
t=e.j(0,p).k(0,p)
u=K.H("0","9")
t.a.push(u)
u=e.j(0,p).k(0,o)
t=K.o(new H.k("."))
u.a.push(t)
t=e.j(0,o).k(0,n)
u=K.H("0","9")
t.a.push(u)
u=e.j(0,n).k(0,n)
t=K.H("0","9")
u.a.push(t)
t=e.j(0,r).k(0,m)
u=K.o(new H.k(l))
t.a.push(u)
u=e.j(0,m).k(0,m)
t=K.o(new H.k(l))
u.a.push(t)
t=e.j(0,r).k(0,k)
u=K.o(new H.k("/"))
t.a.push(u)
u=e.j(0,k).k(0,j)
t=K.o(new H.k("/"))
u.a.push(t)
e.j(0,k).k(0,m).a.push(new K.ar())
t=e.j(0,j).k(0,i)
u=K.o(new H.k("\n"))
t.a.push(u)
u=e.j(0,j).k(0,j)
t=new K.Y()
s=[K.aX]
t.a=H.b([],s)
u.a.push(t)
u=K.o(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,h)
t=K.o(new H.k("#"))
u.a.push(t)
t=e.j(0,h).k(0,h)
u=new K.Y()
u.a=H.b([],s)
t.a.push(u)
t=K.o(new H.k("\n"))
u.a.push(t)
t=e.j(0,h).k(0,g)
u=K.o(new H.k("\n"))
t.a.push(u)
u=e.j(0,r).k(0,f)
t=K.o(new H.k(" \n\t"))
u.a.push(t)
t=e.j(0,f).k(0,f)
u=K.o(new H.k(" \n\t"))
t.a.push(u)
u=e.j(0,p)
u.d=u.a.D("Num")
u=e.j(0,n)
u.d=u.a.D("Num")
u=e.j(0,m)
u.d=u.a.D("Symbol")
u=e.j(0,i)
u.d=u.a.D(j)
u=e.j(0,g)
u.d=u.a.D(h)
u=e.j(0,f)
u.d=u.a.D(f)
u=e.j(0,q)
u=u.d=u.a.D(q)
t=[P.m]
u.aj(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aj(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aj(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.f1.prototype={
aZ:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.B(a.b,"#911")
u.B("=",t)
break
case"Id":u.B(a.b,t)
break
case"Other":u.B(a.b,t)
break
case"Reserved":u.B(a.b,"#119")
break
case"String":u.B(a.b,"#171")
break
case"Symbol":u.B(a.b,"#616")
break}},
aT:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.hF()
l.d=l.j(0,s)
u=l.j(0,s).k(0,r)
t=K.o(new H.k("_"))
u.a.push(t)
t=K.H("a","z")
u.a.push(t)
t=K.H("A","Z")
u.a.push(t)
t=l.j(0,r).k(0,r)
u=K.o(new H.k("_"))
t.a.push(u)
u=K.H("0","9")
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=l.j(0,r).k(0,q)
t=K.o(new H.k("="))
u.a.push(t)
u.c=!0
u=l.j(0,s).k(0,p)
t=K.o(new H.k("</\\-!>="))
u.a.push(t)
t=l.j(0,p).k(0,p)
u=K.o(new H.k("</\\-!>="))
t.a.push(u)
u=l.j(0,s).k(0,o)
t=K.o(new H.k('"'))
u.a.push(t)
t=l.j(0,o).k(0,n)
u=K.o(new H.k('"'))
t.a.push(u)
u=l.j(0,o).k(0,"EscStr")
t=K.o(new H.k("\\"))
u.a.push(t)
t=l.j(0,"EscStr").k(0,o)
u=K.o(new H.k('"'))
t.a.push(u)
l.j(0,o).k(0,o).a.push(new K.ar())
l.j(0,s).k(0,m).a.push(new K.ar())
u=l.j(0,m).k(0,m)
t=new K.Y()
t.a=H.b([],[K.aX])
u.a.push(t)
u=K.o(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.H("a","z")
t.a.push(u)
u=K.H("A","Z")
t.a.push(u)
u=l.j(0,p)
u.d=u.a.D("Symbol")
u=l.j(0,n)
u.d=u.a.D("String")
u=l.j(0,r)
t=u.a.D(r)
u.d=t
t.aj(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.m]))
t=l.j(0,q)
t.d=t.a.D(q)
t=l.j(0,m)
t.d=t.a.D(m)
return l}}
V.h_.prototype={
cC:function(a,b){this.d=H.b([],[[P.a6,W.a4]])
this.B(C.a.k(b,"\n"),"#111")},
aZ:function(a){},
aT:function(){return}}
V.hh.prototype={
d6:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.O(q,"scroll",new V.hj(o),!1)},
c6:function(a){var u,t,s,r,q,p,o,n
this.eF()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.f7(a),s.toString,r=new H.k(r),r=new P.bt(s.by(new H.aW(r,r.gl(r))).a());r.p();){s=r.gv(r)
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
if(H.kx(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.kk(C.r,s,C.f,!1)
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
cP:function(a){var u,t,s,r=new V.eC("dart")
r.aN("dart")
u=new V.f0("glsl")
u.aN("glsl")
t=new V.f1("html")
t.aN("html")
s=C.a.f4(H.b([r,u,t],[V.cs]),new V.hk(a))
if(s!=null)return s
r=new V.h_("plain")
r.aN("plain")
return r},
c4:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.x])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.jw(s).b3(s,"+")){b0[t]=C.b.a4(s,1)
a6.push(1)
u=!0}else if(C.b.b3(s,"-")){b0[t]=C.b.a4(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.cP(a8)
r.cC(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.kk(C.r,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.jI()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.p)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.p)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gK(s);a2.p();)d.appendChild(a2.gv(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
eF:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.hF()
u.d=u.j(0,q)
t=u.j(0,q).k(0,p)
s=K.o(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,p).k(0,p)
s=new K.Y()
r=[K.aX]
s.a=H.b([],r)
t.a.push(s)
t=K.o(new H.k("*"))
s.a.push(t)
t=u.j(0,p).k(0,"BoldEnd")
s=K.o(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,o)
s=K.o(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,o).k(0,o)
s=new K.Y()
s.a=H.b([],r)
t.a.push(s)
t=K.o(new H.k("_"))
s.a.push(t)
t=u.j(0,o).k(0,n)
s=K.o(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,m)
s=K.o(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,m).k(0,m)
s=new K.Y()
s.a=H.b([],r)
t.a.push(s)
t=K.o(new H.k("`"))
s.a.push(t)
t=u.j(0,m).k(0,"CodeEnd")
s=K.o(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.j(0,q).k(0,l)
s=K.o(new H.k("["))
t.a.push(s)
t.c=!0
t=u.j(0,l).k(0,k)
s=K.o(new H.k("|"))
t.a.push(s)
s=u.j(0,l).k(0,j)
t=K.o(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,l).k(0,l)
t=new K.Y()
t.a=H.b([],r)
s.a.push(t)
s=K.o(new H.k("|]"))
t.a.push(s)
s=u.j(0,k).k(0,j)
t=K.o(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.j(0,k).k(0,k)
t=new K.Y()
t.a=H.b([],r)
s.a.push(t)
s=K.o(new H.k("|]"))
t.a.push(s)
u.j(0,q).k(0,i).a.push(new K.ar())
s=u.j(0,i).k(0,i)
t=new K.Y()
t.a=H.b([],r)
s.a.push(t)
s=K.o(new H.k("*_`["))
t.a.push(s)
s=u.j(0,"BoldEnd")
s.d=s.a.D(p)
s=u.j(0,n)
s.d=s.a.D(o)
s=u.j(0,"CodeEnd")
s.d=s.a.D(m)
s=u.j(0,j)
s.d=s.a.D("Link")
s=u.j(0,i)
s.d=s.a.D(i)
this.b=u}}
V.hj.prototype={
$1:function(a){P.k6(C.h,new V.hi(this.a))}}
V.hi.prototype={
$0:function(){var u=C.c.a2(document.documentElement.scrollTop),t=this.a.style,s=H.d(-0.01*u)+"px"
t.top=s}}
V.hk.prototype={
$1:function(a){return a.a===this.a}}
X.j1.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.m]
u.c4("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.c4("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.cY=u.i
u=J.cF.prototype
u.d_=u.i
u=P.j.prototype
u.cZ=u.b1
u=W.L.prototype
u.b4=u.Z
u=W.dN.prototype
u.d0=u.a6
u=K.cB.prototype
u.cX=u.ag
u.bD=u.i
u=O.cM.prototype
u.bE=u.ab
u=O.ae.prototype
u.bF=u.ab})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"lQ","la",17)
t(P,"mk","lE",5)
t(P,"ml","lF",5)
t(P,"mm","lG",5)
s(P,"kp","mi",8)
r(W,"mw",4,null,["$4"],["lH"],13,0)
r(W,"mx",4,null,["$4"],["lI"],13,0)
var l
q(l=E.aR.prototype,"gcA",0,0,null,["$1","$0"],["cB","fh"],0,0)
q(l,"gcw",0,0,null,["$1","$0"],["cz","fg"],0,0)
q(l,"gcu",0,0,null,["$1","$0"],["cv","fd"],0,0)
p(l,"gfb","fc",2)
p(l,"gfe","ff",2)
q(l=E.d8.prototype,"gbH",0,0,null,["$1","$0"],["bJ","bI"],0,0)
o(l,"gfz","cH",8)
n(l=X.df.prototype,"gdW","dX",3)
n(l,"gdK","dL",3)
n(l,"gdQ","dR",1)
n(l,"ge_","e0",9)
n(l,"gdY","dZ",9)
n(l,"ge3","e4",1)
n(l,"ge7","e8",1)
n(l,"gdU","dV",1)
n(l,"ge5","e6",1)
n(l,"gdS","dT",1)
n(l,"ge9","ea",15)
n(l,"geb","ec",3)
n(l,"gem","en",4)
n(l,"gei","ej",4)
n(l,"gek","el",4)
q(D.be.prototype,"gd8",0,0,null,["$1","$0"],["a8","d9"],0,0)
q(l=D.cH.prototype,"gbU",0,0,null,["$1","$0"],["bV","e1"],0,0)
n(l,"gee","ef",16)
p(l,"gdE","dF",10)
p(l,"geg","eh",10)
m(V.br.prototype,"gl","br",11)
m(V.B.prototype,"gl","br",11)
q(l=M.cy.prototype,"ga5",0,0,null,["$1","$0"],["a9","da"],0,0)
p(l,"gdM","dN",2)
p(l,"gdO","dP",2)
q(l=O.cL.prototype,"gdd",0,0,null,["$1","$0"],["X","de"],0,0)
q(l,"gew",0,0,null,["$1","$0"],["bW","ex"],0,0)
p(l,"gdG","dH",12)
p(l,"gdI","dJ",12)
q(X.cU.prototype,"gbK",0,0,null,["$1","$0"],["ap","dh"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.S,null)
s(P.S,[H.ji,J.a,J.a0,P.dA,P.j,H.aW,P.f8,H.cz,H.hW,H.hK,P.bf,H.bC,H.dS,P.R,H.fh,H.fi,H.fb,P.dY,P.bs,P.bt,P.dh,P.d5,P.ht,P.d9,P.iP,P.iC,P.iw,P.dz,P.t,P.eu,P.f4,P.iN,P.ao,P.aP,P.a3,P.aQ,P.fY,P.d3,P.dr,P.eY,P.f_,P.a6,P.bK,P.aY,P.m,P.aj,W.ey,W.c4,W.F,W.cS,W.dN,W.iH,W.cA,W.ay,W.iB,W.e2,P.ix,K.ar,K.cB,K.aX,K.h3,K.hc,L.d4,L.da,L.db,L.hE,O.bd,O.bM,E.eq,E.aR,E.bb,E.bk,E.dq,E.h4,E.d8,Z.dg,Z.ig,Z.cq,Z.cC,Z.b2,D.et,D.bg,D.W,X.cr,X.cG,X.fe,X.fl,X.bN,X.fK,X.hG,X.df,D.ep,D.be,D.X,D.h1,D.ho,V.N,V.aN,V.eN,V.cN,V.av,V.ag,V.T,V.cZ,V.br,V.B,M.cy,A.cm,A.ek,A.Q,A.cn,A.cv,A.cX,A.d2,A.fs,A.bW,A.bX,A.bZ,A.c_,A.dd,A.hS,F.bh,F.eR,F.cI,F.fg,F.cV,F.hd,F.he,F.hf,F.hg,F.c1,F.i3,F.i4,F.i7,F.i9,F.ia,F.ib,O.d7,O.cM,O.ft,X.ja,X.hx,X.cU,V.cs,V.hh])
s(J.a,[J.f9,J.cE,J.cF,J.aS,J.bI,J.aT,H.bP,W.e,W.eh,W.co,W.ad,W.D,W.dj,W.a1,W.eD,W.eE,W.dl,W.cx,W.dn,W.eG,W.h,W.ds,W.au,W.f2,W.dv,W.fk,W.fE,W.dB,W.dC,W.ax,W.dD,W.dG,W.az,W.dK,W.dM,W.aB,W.dO,W.aC,W.dT,W.ak,W.dW,W.hD,W.aE,W.dZ,W.hI,W.hY,W.e3,W.e5,W.e7,W.e9,W.eb,P.aV,P.dx,P.aZ,P.dI,P.h2,P.dU,P.b_,P.e0,P.el,P.di,P.dQ])
s(J.cF,[J.fZ,J.bq,J.aU])
t(J.jh,J.aS)
s(J.bI,[J.cD,J.fa])
t(P.fj,P.dA)
s(P.fj,[H.de,W.io,W.U,P.eU])
t(H.k,H.de)
s(P.j,[H.n,H.bL,H.c2,P.f6])
s(H.n,[H.cJ,H.bj])
t(H.eJ,H.bL)
s(P.f8,[H.cK,H.ih])
t(H.fo,H.cJ)
s(P.bf,[H.fV,H.fd,H.hV,H.es,H.ha,P.cT,P.ab,P.hX,P.hU,P.bT,P.ev,P.eB])
s(H.bC,[H.j6,H.hy,H.fc,H.iY,H.iZ,H.j_,P.ij,P.ii,P.ik,P.il,P.iM,P.iL,P.iS,P.iz,P.iA,P.fn,P.eH,P.eI,W.eK,W.fG,W.fI,W.h9,W.hs,W.is,W.fT,W.fS,W.iD,W.iE,W.iK,W.iO,P.iT,P.eV,P.eW,P.en,E.h5,E.h6,E.h7,E.hC,D.eO,D.eP,F.j5,F.iU,F.id,F.ic,F.i5,F.i6,O.fw,O.fx,O.fy,O.fz,O.fA,O.fB,O.fC,O.fD,V.j3,V.hj,V.hi,V.hk,X.j1])
s(H.hy,[H.hq,H.bA])
t(P.fm,P.R)
s(P.fm,[H.E,W.im])
t(H.cO,H.bP)
s(H.cO,[H.c5,H.c7])
t(H.c6,H.c5)
t(H.bO,H.c6)
t(H.c8,H.c7)
t(H.cP,H.c8)
s(H.cP,[H.fM,H.fN,H.fO,H.fP,H.fQ,H.cQ,H.fR])
t(P.iI,P.f6)
t(P.iy,P.iP)
t(P.iv,P.iC)
t(P.ew,P.ht)
t(P.eL,P.eu)
s(P.ew,[P.f3,P.i_])
t(P.hZ,P.eL)
s(P.a3,[P.J,P.x])
s(P.ab,[P.bm,P.f5])
s(W.e,[W.y,W.eT,W.aA,W.c9,W.aD,W.al,W.cb,W.ie,W.c3,P.eo,P.b9])
s(W.y,[W.L,W.aM])
s(W.L,[W.l,P.i])
s(W.l,[W.ei,W.ej,W.ba,W.bc,W.a4,W.eX,W.hb,W.d6,W.hv,W.hw,W.bU])
t(W.ex,W.ad)
t(W.bD,W.dj)
s(W.a1,[W.ez,W.eA])
t(W.dm,W.dl)
t(W.cw,W.dm)
t(W.dp,W.dn)
t(W.eF,W.dp)
t(W.at,W.co)
t(W.dt,W.ds)
t(W.eS,W.dt)
t(W.dw,W.dv)
t(W.bF,W.dw)
t(W.b0,W.h)
s(W.b0,[W.bi,W.af,W.bn])
t(W.fF,W.dB)
t(W.fH,W.dC)
t(W.dE,W.dD)
t(W.fJ,W.dE)
t(W.dH,W.dG)
t(W.cR,W.dH)
t(W.dL,W.dK)
t(W.h0,W.dL)
t(W.h8,W.dM)
t(W.ca,W.c9)
t(W.hm,W.ca)
t(W.dP,W.dO)
t(W.hn,W.dP)
t(W.hr,W.dT)
t(W.dX,W.dW)
t(W.hz,W.dX)
t(W.cc,W.cb)
t(W.hA,W.cc)
t(W.e_,W.dZ)
t(W.hH,W.e_)
t(W.b3,W.af)
t(W.e4,W.e3)
t(W.ip,W.e4)
t(W.dk,W.cx)
t(W.e6,W.e5)
t(W.it,W.e6)
t(W.e8,W.e7)
t(W.dF,W.e8)
t(W.ea,W.e9)
t(W.iF,W.ea)
t(W.ec,W.eb)
t(W.iG,W.ec)
t(W.iq,W.im)
t(W.ir,P.d5)
t(W.iJ,W.dN)
t(P.a7,P.ix)
t(P.dy,P.dx)
t(P.ff,P.dy)
t(P.dJ,P.dI)
t(P.fW,P.dJ)
t(P.bS,P.i)
t(P.dV,P.dU)
t(P.hu,P.dV)
t(P.e1,P.e0)
t(P.hJ,P.e1)
t(P.em,P.di)
t(P.fX,P.b9)
t(P.dR,P.dQ)
t(P.hp,P.dR)
s(K.cB,[K.Y,L.dc])
s(E.eq,[Z.cp,A.d0,T.hB])
s(D.W,[D.bG,D.bH,D.I])
t(D.cH,O.bd)
t(U.fL,D.et)
s(U.fL,[U.ct,U.d_])
t(A.fp,A.d0)
s(A.dd,[A.b1,A.hP,A.hQ,A.hR,A.hN,A.M,A.hO,A.A,A.bV,A.hT,A.bY,A.a_,A.bo,A.bp])
t(F.hl,F.eR)
t(F.hM,F.fg)
t(F.i8,F.i9)
t(F.fU,F.ia)
t(O.cL,O.d7)
s(O.cM,[O.fq,O.fr,O.ae])
s(O.ae,[O.fu,O.fv])
t(X.eZ,X.hx)
s(V.cs,[V.eC,V.f0,V.f1,V.h_])
u(H.de,H.hW)
u(H.c5,P.t)
u(H.c6,H.cz)
u(H.c7,P.t)
u(H.c8,H.cz)
u(P.dA,P.t)
u(W.dj,W.ey)
u(W.dl,P.t)
u(W.dm,W.F)
u(W.dn,P.t)
u(W.dp,W.F)
u(W.ds,P.t)
u(W.dt,W.F)
u(W.dv,P.t)
u(W.dw,W.F)
u(W.dB,P.R)
u(W.dC,P.R)
u(W.dD,P.t)
u(W.dE,W.F)
u(W.dG,P.t)
u(W.dH,W.F)
u(W.dK,P.t)
u(W.dL,W.F)
u(W.dM,P.R)
u(W.c9,P.t)
u(W.ca,W.F)
u(W.dO,P.t)
u(W.dP,W.F)
u(W.dT,P.R)
u(W.dW,P.t)
u(W.dX,W.F)
u(W.cb,P.t)
u(W.cc,W.F)
u(W.dZ,P.t)
u(W.e_,W.F)
u(W.e3,P.t)
u(W.e4,W.F)
u(W.e5,P.t)
u(W.e6,W.F)
u(W.e7,P.t)
u(W.e8,W.F)
u(W.e9,P.t)
u(W.ea,W.F)
u(W.eb,P.t)
u(W.ec,W.F)
u(P.dx,P.t)
u(P.dy,W.F)
u(P.dI,P.t)
u(P.dJ,W.F)
u(P.dU,P.t)
u(P.dV,W.F)
u(P.e0,P.t)
u(P.e1,W.F)
u(P.di,P.R)
u(P.dQ,P.t)
u(P.dR,W.F)})()
var v={mangledGlobalNames:{x:"int",J:"double",a3:"num",m:"String",ao:"bool",aY:"Null",a6:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.W]},{func:1,ret:-1,args:[W.af]},{func:1,ret:-1,args:[P.x,[P.j,E.aR]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aY,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bi]},{func:1,ret:-1,args:[P.x,[P.j,D.X]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.x,[P.j,V.av]]},{func:1,ret:P.ao,args:[W.L,P.m,P.m,W.c4]},{func:1,ret:P.aY,args:[,]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:P.ao,args:[[P.j,D.X]]},{func:1,ret:P.x,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.m=W.ba.prototype
C.I=W.bc.prototype
C.J=W.a4.prototype
C.M=J.a.prototype
C.a=J.aS.prototype
C.d=J.cD.prototype
C.i=J.cE.prototype
C.c=J.bI.prototype
C.b=J.aT.prototype
C.N=J.aU.prototype
C.u=J.fZ.prototype
C.v=W.d6.prototype
C.l=J.bq.prototype
C.w=W.b3.prototype
C.x=W.c3.prototype
C.y=new E.bb("Browser.chrome")
C.n=new E.bb("Browser.firefox")
C.o=new E.bb("Browser.edge")
C.z=new E.bb("Browser.other")
C.p=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.A=function() {
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
C.F=function(getTagFallback) {
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
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.E=function(hooks) {
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
C.D=function(hooks) {
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

C.G=new P.fY()
C.f=new P.hZ()
C.H=new P.i_()
C.e=new P.iy()
C.h=new P.aQ(0)
C.K=new P.aQ(5e6)
C.L=new P.f4("element",!1,!1,!1)
C.O=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.m])
C.P=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.m])
C.Q=H.b(u([]),[P.m])
C.r=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.x])
C.j=H.b(u(["bind","if","ref","repeat","syntax"]),[P.m])
C.k=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.m])
C.R=new E.bk("OperatingSystem.windows")
C.t=new E.bk("OperatingSystem.mac")
C.S=new E.bk("OperatingSystem.linux")
C.T=new E.bk("OperatingSystem.other")
C.U=new P.bs(null,2)})();(function staticFields(){$.ac=0
$.bB=null
$.jJ=null
$.ks=null
$.ko=null
$.kv=null
$.iV=null
$.j0=null
$.jz=null
$.bu=null
$.ce=null
$.cf=null
$.jt=!1
$.a8=C.e
$.Z=[]
$.as=null
$.jd=null
$.jQ=null
$.jP=null
$.du=P.jS(P.m,P.f_)
$.eM=null
$.jW=null
$.jZ=null
$.ah=null
$.k2=null
$.kc=null
$.kb=null
$.i0=null
$.i1=null
$.i2=null
$.ka=null
$.jY=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"mQ","kA",function(){return H.kr("_$dart_dartClosure")})
u($,"mR","jE",function(){return H.kr("_$dart_js")})
u($,"mS","kB",function(){return H.am(H.hL({
toString:function(){return"$receiver$"}}))})
u($,"mT","kC",function(){return H.am(H.hL({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"mU","kD",function(){return H.am(H.hL(null))})
u($,"mV","kE",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mY","kH",function(){return H.am(H.hL(void 0))})
u($,"mZ","kI",function(){return H.am(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"mX","kG",function(){return H.am(H.k8(null))})
u($,"mW","kF",function(){return H.am(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"n0","kK",function(){return H.am(H.k8(void 0))})
u($,"n_","kJ",function(){return H.am(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"nd","jF",function(){return P.lD()})
u($,"ng","kP",function(){return P.lr("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"ne","kO",function(){return P.jT(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.m)})
u($,"n7","kN",function(){return Z.a2(0)})
u($,"n1","kL",function(){return Z.a2(511)})
u($,"n9","aJ",function(){return Z.a2(1)})
u($,"n8","aI",function(){return Z.a2(2)})
u($,"n3","aH",function(){return Z.a2(4)})
u($,"na","b7",function(){return Z.a2(8)})
u($,"nb","b8",function(){return Z.a2(16)})
u($,"n4","ci",function(){return Z.a2(32)})
u($,"n5","cj",function(){return Z.a2(64)})
u($,"n6","kM",function(){return Z.a2(96)})
u($,"nc","bz",function(){return Z.a2(128)})
u($,"n2","aG",function(){return Z.a2(256)})
u($,"mP","kz",function(){return new V.eN(1e-9)})
u($,"mO","C",function(){return $.kz()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bP,ArrayBufferView:H.bP,Float32Array:H.bO,Float64Array:H.bO,Int16Array:H.fM,Int32Array:H.fN,Int8Array:H.fO,Uint16Array:H.fP,Uint32Array:H.fQ,Uint8ClampedArray:H.cQ,CanvasPixelArray:H.cQ,Uint8Array:H.fR,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.eh,HTMLAnchorElement:W.ei,HTMLAreaElement:W.ej,Blob:W.co,HTMLBodyElement:W.ba,HTMLCanvasElement:W.bc,CDATASection:W.aM,CharacterData:W.aM,Comment:W.aM,ProcessingInstruction:W.aM,Text:W.aM,CSSPerspective:W.ex,CSSCharsetRule:W.D,CSSConditionRule:W.D,CSSFontFaceRule:W.D,CSSGroupingRule:W.D,CSSImportRule:W.D,CSSKeyframeRule:W.D,MozCSSKeyframeRule:W.D,WebKitCSSKeyframeRule:W.D,CSSKeyframesRule:W.D,MozCSSKeyframesRule:W.D,WebKitCSSKeyframesRule:W.D,CSSMediaRule:W.D,CSSNamespaceRule:W.D,CSSPageRule:W.D,CSSRule:W.D,CSSStyleRule:W.D,CSSSupportsRule:W.D,CSSViewportRule:W.D,CSSStyleDeclaration:W.bD,MSStyleCSSProperties:W.bD,CSS2Properties:W.bD,CSSImageValue:W.a1,CSSKeywordValue:W.a1,CSSNumericValue:W.a1,CSSPositionValue:W.a1,CSSResourceValue:W.a1,CSSUnitValue:W.a1,CSSURLImageValue:W.a1,CSSStyleValue:W.a1,CSSMatrixComponent:W.ad,CSSRotation:W.ad,CSSScale:W.ad,CSSSkew:W.ad,CSSTranslation:W.ad,CSSTransformComponent:W.ad,CSSTransformValue:W.ez,CSSUnparsedValue:W.eA,DataTransferItemList:W.eD,HTMLDivElement:W.a4,DOMException:W.eE,ClientRectList:W.cw,DOMRectList:W.cw,DOMRectReadOnly:W.cx,DOMStringList:W.eF,DOMTokenList:W.eG,Element:W.L,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MessagePort:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.at,FileList:W.eS,FileWriter:W.eT,HTMLFormElement:W.eX,Gamepad:W.au,History:W.f2,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,KeyboardEvent:W.bi,Location:W.fk,MediaList:W.fE,MIDIInputMap:W.fF,MIDIOutputMap:W.fH,MimeType:W.ax,MimeTypeArray:W.fJ,PointerEvent:W.af,MouseEvent:W.af,DragEvent:W.af,Document:W.y,DocumentFragment:W.y,HTMLDocument:W.y,ShadowRoot:W.y,XMLDocument:W.y,Attr:W.y,DocumentType:W.y,Node:W.y,NodeList:W.cR,RadioNodeList:W.cR,Plugin:W.az,PluginArray:W.h0,RTCStatsReport:W.h8,HTMLSelectElement:W.hb,SourceBuffer:W.aA,SourceBufferList:W.hm,SpeechGrammar:W.aB,SpeechGrammarList:W.hn,SpeechRecognitionResult:W.aC,Storage:W.hr,CSSStyleSheet:W.ak,StyleSheet:W.ak,HTMLTableElement:W.d6,HTMLTableRowElement:W.hv,HTMLTableSectionElement:W.hw,HTMLTemplateElement:W.bU,TextTrack:W.aD,TextTrackCue:W.al,VTTCue:W.al,TextTrackCueList:W.hz,TextTrackList:W.hA,TimeRanges:W.hD,Touch:W.aE,TouchEvent:W.bn,TouchList:W.hH,TrackDefaultList:W.hI,CompositionEvent:W.b0,FocusEvent:W.b0,TextEvent:W.b0,UIEvent:W.b0,URL:W.hY,VideoTrackList:W.ie,WheelEvent:W.b3,Window:W.c3,DOMWindow:W.c3,CSSRuleList:W.ip,ClientRect:W.dk,DOMRect:W.dk,GamepadList:W.it,NamedNodeMap:W.dF,MozNamedAttrMap:W.dF,SpeechRecognitionResultList:W.iF,StyleSheetList:W.iG,SVGLength:P.aV,SVGLengthList:P.ff,SVGNumber:P.aZ,SVGNumberList:P.fW,SVGPointList:P.h2,SVGScriptElement:P.bS,SVGStringList:P.hu,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.b_,SVGTransformList:P.hJ,AudioBuffer:P.el,AudioParamMap:P.em,AudioTrackList:P.eo,AudioContext:P.b9,webkitAudioContext:P.b9,BaseAudioContext:P.b9,OfflineAudioContext:P.fX,SQLResultSetRowList:P.hp})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cO.$nativeSuperclassTag="ArrayBufferView"
H.c5.$nativeSuperclassTag="ArrayBufferView"
H.c6.$nativeSuperclassTag="ArrayBufferView"
H.bO.$nativeSuperclassTag="ArrayBufferView"
H.c7.$nativeSuperclassTag="ArrayBufferView"
H.c8.$nativeSuperclassTag="ArrayBufferView"
H.cP.$nativeSuperclassTag="ArrayBufferView"
W.c9.$nativeSuperclassTag="EventTarget"
W.ca.$nativeSuperclassTag="EventTarget"
W.cb.$nativeSuperclassTag="EventTarget"
W.cc.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(X.kt,[])
else X.kt([])})})()
//# sourceMappingURL=test.dart.js.map
