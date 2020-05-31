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
a[c]=function(){a[c]=function(){H.oF(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.kY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.kY"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.kY(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kG:function kG(){},
jp:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
na:function(a,b,c,d){if(!!J.U(a).$im)return new H.eI(a,b,[c,d])
return new H.bJ(a,b,[c,d])},
ll:function(){return new P.hq("No element")},
nv:function(a,b){var u=J.ai(a)
if(typeof u!=="number")return u.B()
H.cO(a,0,u-1,b)},
cO:function(a,b,c,d){if(c-b<=32)H.nu(a,b,c,d)
else H.nt(a,b,c,d)},
nu:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.an(a);u<=c;++u){s=t.i(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.i(a,r-1),s)
if(typeof q!=="number")return q.a0()
q=q>0}else q=!1
if(!q)break
p=r-1
t.l(a,r,t.i(a,p))
r=p}t.l(a,r,s)}},
nt:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.ah(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.ah(a4+a5,2),f=g-j,e=g+j,d=J.an(a3),c=d.i(a3,i),b=d.i(a3,f),a=d.i(a3,g),a0=d.i(a3,e),a1=d.i(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a0()
if(a2>0){u=a1
a1=a0
a0=u}d.l(a3,i,c)
d.l(a3,g,a)
d.l(a3,h,a1)
d.l(a3,f,d.i(a3,a4))
d.l(a3,e,d.i(a3,a5))
t=a4+1
s=a5-1
if(J.v(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.i(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.M()
if(p<0){if(r!==t){d.l(a3,r,d.i(a3,t))
d.l(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.a0()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.l(a3,r,d.i(a3,t))
n=t+1
d.l(a3,t,d.i(a3,s))
d.l(a3,s,q)
s=o
t=n
break}else{d.l(a3,r,d.i(a3,s))
d.l(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.i(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.M()
if(l<0){if(r!==t){d.l(a3,r,d.i(a3,t))
d.l(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a0()
if(k>0)for(;!0;){p=a6.$2(d.i(a3,s),a0)
if(typeof p!=="number")return p.a0()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.M()
o=s-1
if(p<0){d.l(a3,r,d.i(a3,t))
n=t+1
d.l(a3,t,d.i(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.i(a3,s))
d.l(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.l(a3,a4,d.i(a3,a2))
d.l(a3,a2,b)
a2=s+1
d.l(a3,a5,d.i(a3,a2))
d.l(a3,a2,a0)
H.cO(a3,a4,t-2,a6)
H.cO(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.v(a6.$2(d.i(a3,t),b),0);)++t
for(;J.v(a6.$2(d.i(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.i(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.l(a3,r,d.i(a3,t))
d.l(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.i(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.i(a3,s),b)
if(typeof p!=="number")return p.M()
o=s-1
if(p<0){d.l(a3,r,d.i(a3,t))
n=t+1
d.l(a3,t,d.i(a3,s))
d.l(a3,s,q)
t=n}else{d.l(a3,r,d.i(a3,s))
d.l(a3,s,q)}s=o
break}}H.cO(a3,t,s,a6)}else H.cO(a3,t,s,a6)},
O:function O(a){this.a=a},
m:function m(){},
bI:function bI(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bJ:function bJ(a,b,c){this.a=a
this.b=b
this.$ti=c},
eI:function eI(a,b,c){this.a=a
this.b=b
this.$ti=c},
fI:function fI(a,b){this.a=null
this.b=a
this.c=b},
io:function io(a,b,c){this.a=a
this.b=b
this.$ti=c},
ip:function ip(a,b){this.a=a
this.b=b},
cs:function cs(){},
hY:function hY(){},
d1:function d1(){},
mW:function(){throw H.c(P.t("Cannot modify unmodifiable Map"))},
ce:function(a){var u,t=H.oH(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
os:function(a){return v.types[a]},
mg:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.U(a).$iw},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a6(a)
if(typeof u!=="string")throw H.c(H.ah(a))
return u},
bS:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nl:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.b(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.V(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.I(s,q)|32)>t)return}return parseInt(a,b)},
bT:function(a){return H.nc(a)+H.m2(H.cd(a),0,null)},
nc:function(a){var u,t,s,r,q,p,o,n=J.U(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.L||!!n.$ibm){r=C.q(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.ce(t.length>1&&C.a.I(t,0)===36?C.a.ar(t,1):t)},
nd:function(){if(!!self.location)return self.location.href
return},
ly:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nm:function(a){var u,t,s,r=H.d([],[P.r])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.ay(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ah(s))}return H.ly(r)},
lz:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<0)throw H.c(H.ah(s))
if(s>65535)return H.nm(a)}return H.ly(a)},
nn:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ho()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
cK:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.ay(u,10))>>>0,56320|u&1023)}}throw H.c(P.V(a,0,1114111,null,null))},
bh:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nk:function(a){var u=H.bh(a).getFullYear()+0
return u},
ni:function(a){var u=H.bh(a).getMonth()+1
return u},
ne:function(a){var u=H.bh(a).getDate()+0
return u},
nf:function(a){var u=H.bh(a).getHours()+0
return u},
nh:function(a){var u=H.bh(a).getMinutes()+0
return u},
nj:function(a){var u=H.bh(a).getSeconds()+0
return u},
ng:function(a){var u=H.bh(a).getMilliseconds()+0
return u},
h:function(a){throw H.c(H.ah(a))},
b:function(a,b){if(a==null)J.ai(a)
throw H.c(H.b2(a,b))},
b2:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,s,null)
u=J.ai(a)
if(!(b<0)){if(typeof u!=="number")return H.h(u)
t=b>=u}else t=!0
if(t)return P.I(b,a,s,null,u)
return P.cL(b,s)},
om:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bi(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bi(a,c,!0,b,"end",u)
return new P.ao(!0,b,"end",null)},
ah:function(a){return new P.ao(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.cI()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mp})
u.name=""}else u.toString=H.mp
return u},
mp:function(){return J.a6(this.dartException)},
z:function(a){throw H.c(a)},
y:function(a){throw H.c(P.bb(a))},
aB:function(a){var u,t,s,r,q,p
a=H.mm(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.d([],[P.n])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.hH(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
hI:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lK:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lr:function(a,b){return new H.fX(a,b==null?null:b.method)},
kH:function(a,b){var u=b==null,t=u?null:b.method
return new H.fu(a,t,u?null:b.receiver)},
b4:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kt(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ay(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kH(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lr(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.ms()
q=$.mt()
p=$.mu()
o=$.mv()
n=$.my()
m=$.mz()
l=$.mx()
$.mw()
k=$.mB()
j=$.mA()
i=r.ab(u)
if(i!=null)return f.$1(H.kH(u,i))
else{i=q.ab(u)
if(i!=null){i.method="call"
return f.$1(H.kH(u,i))}else{i=p.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=n.ab(u)
if(i==null){i=m.ab(u)
if(i==null){i=l.ab(u)
if(i==null){i=o.ab(u)
if(i==null){i=k.ab(u)
if(i==null){i=j.ab(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lr(u,i))}}return f.$1(new H.hX(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cP()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ao(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cP()
return a},
l0:function(a){var u
if(a==null)return new H.dH(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dH(a)},
oq:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.l(0,a[u],a[t])}return b},
ow:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.A("Unsupported number of arguments for wrapped closure"))},
bs:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ow)
a.$identity=u
return u},
mV:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.hr().constructor.prototype):Object.create(new H.bx(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ap
if(typeof t!=="number")return t.q()
$.ap=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.le(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mR(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.le(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mR:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.os,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lc:H.ky
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mS:function(a,b,c,d){var u=H.ky
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
le:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mU(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mS(t,!r,u,b)
if(t===0){r=$.ap
if(typeof r!=="number")return r.q()
$.ap=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.by
return new Function(r+H.f(q==null?$.by=H.ek("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ap
if(typeof r!=="number")return r.q()
$.ap=r+1
o+=r
r="return function("+o+"){return this."
q=$.by
return new Function(r+H.f(q==null?$.by=H.ek("self"):q)+"."+H.f(u)+"("+o+");}")()},
mT:function(a,b,c,d){var u=H.ky,t=H.lc
switch(b?-1:a){case 0:throw H.c(H.nr("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mU:function(a,b){var u,t,s,r,q,p,o,n=$.by
if(n==null)n=$.by=H.ek("self")
u=$.lb
if(u==null)u=$.lb=H.ek("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mT(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.ap
if(typeof u!=="number")return u.q()
$.ap=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.ap
if(typeof u!=="number")return u.q()
$.ap=u+1
return new Function(n+u+"}")()},
kY:function(a,b,c,d,e,f,g){return H.mV(a,b,c,d,!!e,!!f,g)},
ky:function(a){return a.a},
lc:function(a){return a.c},
ek:function(a){var u,t,s,r=new H.bx("self","target","receiver","name"),q=J.kE(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
oB:function(a,b){throw H.c(H.mQ(a,H.ce(b.substring(2))))},
a0:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.U(a)[b]
else u=!0
if(u)return a
H.oB(a,b)},
oo:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mQ:function(a,b){return new H.el("CastError: "+P.kC(a)+": type '"+H.f(H.oh(a))+"' is not a subtype of type '"+b+"'")},
oh:function(a){var u,t=J.U(a)
if(!!t.$ibz){u=H.oo(t)
if(u!=null)return H.oC(u)
return"Closure"}return H.bT(a)},
oF:function(a){throw H.c(new P.eB(a))},
nr:function(a){return new H.hd(a)},
mc:function(a){return v.getIsolateTag(a)},
d:function(a,b){a.$ti=b
return a},
cd:function(a){if(a==null)return
return a.$ti},
pg:function(a,b,c){return H.kr(a["$a"+H.f(c)],H.cd(b))},
or:function(a,b,c,d){var u=H.kr(a["$a"+H.f(c)],H.cd(b))
return u==null?null:u[d]},
md:function(a,b,c){var u=H.kr(a["$a"+H.f(b)],H.cd(a))
return u==null?null:u[c]},
b3:function(a,b){var u=H.cd(a)
return u==null?null:u[b]},
oC:function(a){return H.b1(a,null)},
b1:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.ce(a[0].name)+H.m2(a,1,b)
if(typeof a=="function")return H.ce(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.b(b,t)
return H.f(b[t])}if('func' in a)return H.o7(a,b)
if('futureOr' in a)return"FutureOr<"+H.b1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
o7:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.d([],[P.n])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.b(a0,m)
p=C.a.q(p,a0[m])
l=u[q]
if(l!=null&&l!==P.Z)p+=" extends "+H.b1(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.b1(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.b1(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.b1(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.op(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.b1(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m2:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.T("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.b1(p,c)}return"<"+u.h(0)+">"},
kr:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pe:function(a,b,c){return a.apply(b,H.kr(J.U(b)["$a"+H.f(c)],H.cd(b)))},
pf:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
oy:function(a){var u,t,s,r,q=$.me.$1(a),p=$.jj[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jt[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.m7.$2(a,q)
if(q!=null){p=$.jj[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.jt[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kn(u)
$.jj[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.jt[q]=u
return u}if(s==="-"){r=H.kn(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mk(a,u)
if(s==="*")throw H.c(P.hW(q))
if(v.leafTags[q]===true){r=H.kn(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mk(a,u)},
mk:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.l2(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kn:function(a){return J.l2(a,!1,null,!!a.$iw)},
oz:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kn(u)
else return J.l2(u,c,null,null)},
ou:function(){if(!0===$.l1)return
$.l1=!0
H.ov()},
ov:function(){var u,t,s,r,q,p,o,n
$.jj=Object.create(null)
$.jt=Object.create(null)
H.ot()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ml.$1(q)
if(p!=null){o=H.oz(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
ot:function(){var u,t,s,r,q,p,o=C.C()
o=H.br(C.D,H.br(C.E,H.br(C.r,H.br(C.r,H.br(C.F,H.br(C.G,H.br(C.H(C.q),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.me=new H.jq(r)
$.m7=new H.jr(q)
$.ml=new H.js(p)},
br:function(a,b){return a(b)||b},
n4:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.P("Illegal RegExp pattern ("+String(p)+")",a,null))},
mn:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
on:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mm:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
mo:function(a,b,c){var u=H.oE(a,b,c)
return u},
oE:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mm(b),'g'),H.on(c))},
eu:function eu(){},
ev:function ev(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
hH:function hH(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fX:function fX(a,b){this.a=a
this.b=b},
fu:function fu(a,b,c){this.a=a
this.b=b
this.c=c},
hX:function hX(a){this.a=a},
kt:function kt(a){this.a=a},
dH:function dH(a){this.a=a
this.b=null},
bz:function bz(){},
hx:function hx(){},
hr:function hr(){},
bx:function bx(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
el:function el(a){this.a=a},
hd:function hd(a){this.a=a},
ac:function ac(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ft:function ft(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b
this.c=null},
fz:function fz(a,b){this.a=a
this.$ti=b},
fA:function fA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
jq:function jq(a){this.a=a},
jr:function jr(a){this.a=a},
js:function js(a){this.a=a},
fs:function fs(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
j8:function(a){return a},
nb:function(a){return new Int8Array(a)},
aC:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.b2(b,a))},
o5:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.om(a,b,c))
return b},
bO:function bO(){},
aY:function aY(){},
cE:function cE(){},
bP:function bP(){},
cF:function cF(){},
fR:function fR(){},
fS:function fS(){},
fT:function fT(){},
fU:function fU(){},
fV:function fV(){},
cG:function cG(){},
bQ:function bQ(){},
c_:function c_(){},
c0:function c0(){},
c1:function c1(){},
c2:function c2(){},
op:function(a){return J.lm(a?Object.keys(a):[],null)},
oH:function(a){return v.mangledGlobalNames[a]},
oA:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
l2:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
jm:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.l1==null){H.ou()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.hW("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.l5()]
if(r!=null)return r
r=H.oy(a)
if(r!=null)return r
if(typeof a=="function")return C.N
u=Object.getPrototypeOf(a)
if(u==null)return C.w
if(u===Object.prototype)return C.w
if(typeof s=="function"){Object.defineProperty(s,$.l5(),{value:C.n,enumerable:false,writable:true,configurable:true})
return C.n}return C.n},
n1:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kx(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.V(a,0,4294967295,"length",null))
return J.lm(new Array(a),b)},
lm:function(a,b){return J.kE(H.d(a,[b]))},
kE:function(a){a.fixed$length=Array
return a},
n2:function(a,b){return J.mN(a,b)},
U:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cy.prototype
return J.fr.prototype}if(typeof a=="string")return J.aW.prototype
if(a==null)return J.cz.prototype
if(typeof a=="boolean")return J.fq.prototype
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Z)return a
return J.jm(a)},
an:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Z)return a
return J.jm(a)},
jl:function(a){if(a==null)return a
if(a.constructor==Array)return J.aV.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Z)return a
return J.jm(a)},
mb:function(a){if(typeof a=="number")return J.bH.prototype
if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bm.prototype
return a},
l_:function(a){if(typeof a=="string")return J.aW.prototype
if(a==null)return a
if(!(a instanceof P.Z))return J.bm.prototype
return a},
e3:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aX.prototype
return a}if(a instanceof P.Z)return a
return J.jm(a)},
v:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.U(a).A(a,b)},
l7:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mb(a).t(a,b)},
l8:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mg(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.an(a).i(a,b)},
ku:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mg(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.jl(a).l(a,b,c)},
mJ:function(a,b){return J.l_(a).I(a,b)},
mK:function(a,b,c){return J.e3(a).eV(a,b,c)},
mL:function(a,b,c,d){return J.e3(a).fo(a,b,c,d)},
mM:function(a,b){return J.l_(a).W(a,b)},
mN:function(a,b){return J.mb(a).aA(a,b)},
kv:function(a,b){return J.an(a).a3(a,b)},
kw:function(a,b){return J.jl(a).K(a,b)},
mO:function(a,b,c,d){return J.e3(a).fJ(a,b,c,d)},
l9:function(a,b){return J.jl(a).u(a,b)},
e6:function(a){return J.e3(a).gbI(a)},
cg:function(a){return J.U(a).gH(a)},
aR:function(a){return J.jl(a).gX(a)},
ai:function(a){return J.an(a).gk(a)},
mP:function(a,b){return J.e3(a).hd(a,b)},
a6:function(a){return J.U(a).h(a)},
a:function a(){},
fq:function fq(){},
cz:function cz(){},
cA:function cA(){},
h0:function h0(){},
bm:function bm(){},
aX:function aX(){},
aV:function aV(a){this.$ti=a},
kF:function kF(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bH:function bH(){},
cy:function cy(){},
fr:function fr(){},
aW:function aW(){}},P={
nG:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oi()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bs(new P.ir(s),1)).observe(u,{childList:true})
return new P.iq(s,u,t)}else if(self.setImmediate!=null)return P.oj()
return P.ok()},
nH:function(a){self.scheduleImmediate(H.bs(new P.is(a),0))},
nI:function(a){self.setImmediate(H.bs(new P.it(a),0))},
nJ:function(a){P.kL(C.m,a)},
kL:function(a,b){var u=C.c.ah(a.a,1000)
return P.nQ(u<0?0:u,b)},
lJ:function(a,b){var u=C.c.ah(a.a,1000)
return P.nR(u<0?0:u,b)},
nQ:function(a,b){var u=new P.dO()
u.dv(a,b)
return u},
nR:function(a,b){var u=new P.dO()
u.dw(a,b)
return u},
pb:function(a){return new P.bn(a,1)},
nM:function(){return C.X},
nN:function(a){return new P.bn(a,3)},
oa:function(a,b){return new P.iR(a,[b])},
ob:function(){var u,t
for(;u=$.bq,u!=null;){$.cb=null
t=u.b
$.bq=t
if(t==null)$.ca=null
u.a.$0()}},
og:function(){$.kW=!0
try{P.ob()}finally{$.cb=null
$.kW=!1
if($.bq!=null)$.l6().$1(P.m8())}},
oe:function(a){var u=new P.d9(a)
if($.bq==null){$.bq=$.ca=u
if(!$.kW)$.l6().$1(P.m8())}else $.ca=$.ca.b=u},
of:function(a){var u,t,s=$.bq
if(s==null){P.oe(a)
$.cb=$.ca
return}u=new P.d9(a)
t=$.cb
if(t==null){u.b=s
$.bq=$.cb=u}else{u.b=t.b
$.cb=t.b=u
if(u.b==null)$.ca=u}},
lI:function(a,b){var u=$.am
if(u===C.f)return P.kL(a,b)
return P.kL(a,u.ft(b))},
ny:function(a,b){var u=$.am
if(u===C.f)return P.lJ(a,b)
return P.lJ(a,u.cF(b,P.cU))},
m3:function(a,b,c,d,e){var u={}
u.a=d
P.of(new P.j9(u,e))},
oc:function(a,b,c,d){var u,t=$.am
if(t===c)return d.$0()
$.am=c
u=t
try{t=d.$0()
return t}finally{$.am=u}},
od:function(a,b,c,d,e){var u,t=$.am
if(t===c)return d.$1(e)
$.am=c
u=t
try{t=d.$1(e)
return t}finally{$.am=u}},
ir:function ir(a){this.a=a},
iq:function iq(a,b,c){this.a=a
this.b=b
this.c=c},
is:function is(a){this.a=a},
it:function it(a){this.a=a},
dO:function dO(){this.c=0},
iT:function iT(a,b){this.a=a
this.b=b},
iS:function iS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bn:function bn(a,b){this.a=a
this.b=b},
c5:function c5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
iR:function iR(a,b){this.a=a
this.$ti=b},
d9:function d9(a){this.a=a
this.b=null},
cR:function cR(){},
hu:function hu(){},
cU:function cU(){},
j1:function j1(){},
j9:function j9(a,b){this.a=a
this.b=b},
iH:function iH(){},
iI:function iI(a,b){this.a=a
this.b=b},
iJ:function iJ(a,b,c){this.a=a
this.b=b
this.c=c},
n6:function(a,b){return new H.ac([a,b])},
ln:function(a,b){return new H.ac([a,b])},
n7:function(a){return H.oq(a,new H.ac([null,null]))},
lp:function(a){return new P.iE([a])},
kR:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
nP:function(a,b){var u=new P.dp(a,b)
u.c=a.e
return u},
n0:function(a,b,c){var u,t
if(P.kX(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.d([],[P.n])
$.a4.push(a)
try{P.o9(a,u)}finally{if(0>=$.a4.length)return H.b($.a4,-1)
$.a4.pop()}t=P.lG(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kD:function(a,b,c){var u,t
if(P.kX(a))return b+"..."+c
u=new P.T(b)
$.a4.push(a)
try{t=u
t.a=P.lG(t.a,a,", ")}finally{if(0>=$.a4.length)return H.b($.a4,-1)
$.a4.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
kX:function(a){var u,t
for(u=$.a4.length,t=0;t<u;++t)if(a===$.a4[t])return!0
return!1},
o9:function(a,b){var u,t,s,r,q,p,o,n=a.gX(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.C())return
u=H.f(n.gJ(n))
b.push(u)
m+=u.length+2;++l}if(!n.C()){if(l<=5)return
if(0>=b.length)return H.b(b,-1)
t=b.pop()
if(0>=b.length)return H.b(b,-1)
s=b.pop()}else{r=n.gJ(n);++l
if(!n.C()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.b(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gJ(n);++l
for(;n.C();r=q,q=p){p=n.gJ(n);++l
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
lo:function(a,b,c){var u=P.n6(b,c)
a.u(0,new P.fB(u))
return u},
kJ:function(a){var u,t={}
if(P.kX(a))return"{...}"
u=new P.T("")
try{$.a4.push(a)
u.a+="{"
t.a=!0
J.l9(a,new P.fG(t,u))
u.a+="}"}finally{if(0>=$.a4.length)return H.b($.a4,-1)
$.a4.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
iE:function iE(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
iF:function iF(a){this.a=a
this.c=this.b=null},
dp:function dp(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fo:function fo(){},
fB:function fB(a){this.a=a},
fC:function fC(){},
p:function p(){},
fF:function fF(){},
fG:function fG(a,b){this.a=a
this.b=b},
a1:function a1(){},
iU:function iU(){},
fH:function fH(){},
d2:function d2(a,b){this.a=a
this.$ti=b},
iK:function iK(){},
dq:function dq(){},
dT:function dT(){},
nB:function(a,b,c,d){if(b instanceof Uint8Array)return P.nC(!1,b,c,d)
return},
nC:function(a,b,c,d){var u,t,s=$.mC()
if(s==null)return
u=0===c
if(u&&!0)return P.kO(s,b)
t=b.length
d=P.aJ(c,d,t)
if(u&&d===t)return P.kO(s,b)
return P.kO(s,b.subarray(c,d))},
kO:function(a,b){if(P.nE(b))return
return P.nF(a,b)},
nF:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.b4(t)}return},
nE:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nD:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.b4(t)}return},
m5:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.h(c)
u=J.an(a)
t=b
for(;t<c;++t){s=u.i(a,t)
if(typeof s!=="number")return s.be()
if((s&127)!==s)return t-b}return c-b},
la:function(a,b,c,d,e,f){if(C.c.aZ(f,4)!==0)throw H.c(P.P("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.P("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.P("Invalid base64 padding, more than two '=' characters",a,b))},
eh:function eh(){},
ei:function ei(){},
eq:function eq(){},
ew:function ew(){},
eJ:function eJ(){},
i5:function i5(){},
i7:function i7(){},
j0:function j0(a){this.b=0
this.c=a},
i6:function i6(a){this.a=a},
j_:function j_(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
e4:function(a,b,c){var u=H.nl(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.P(a,null,null))},
mZ:function(a){if(a instanceof H.bz)return a.h(0)
return"Instance of '"+H.f(H.bT(a))+"'"},
n8:function(a,b,c){var u,t,s=J.n1(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kI:function(a,b,c){var u,t=H.d([],[c])
for(u=J.aR(a);u.C();)t.push(u.gJ(u))
if(b)return t
return J.kE(t)},
bV:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aJ(b,c,u)
if(b<=0){if(typeof c!=="number")return c.M()
t=c<u}else t=!0
return H.lz(t?C.b.di(a,b,c):a)}if(!!J.U(a).$ibQ)return H.nn(a,b,P.aJ(b,c,a.length))
return P.nw(a,b,c)},
nw:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.V(b,0,J.ai(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.V(c,b,J.ai(a),q,q))
t=J.aR(a)
for(s=0;s<b;++s)if(!t.C())throw H.c(P.V(b,0,s,q,q))
r=[]
if(u)for(;t.C();)r.push(t.gJ(t))
else for(s=b;s<c;++s){if(!t.C())throw H.c(P.V(c,b,s,q,q))
r.push(t.gJ(t))}return H.lz(r)},
np:function(a){return new H.fs(a,H.n4(a,!1,!0,!1,!1,!1))},
lG:function(a,b,c){var u=J.aR(b)
if(!u.C())return a
if(c.length===0){do a+=H.f(u.gJ(u))
while(u.C())}else{a+=H.f(u.gJ(u))
for(;u.C();)a=a+c+H.f(u.gJ(u))}return a},
d3:function(){var u=H.nd()
if(u!=null)return P.nA(u)
throw H.c(P.t("'Uri.base' is not supported"))},
iZ:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mH().b
if(typeof b!=="string")H.z(H.ah(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gfI().bK(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.b(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.cK(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
mX:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
mY:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
co:function(a){if(a>=10)return""+a
return"0"+a},
li:function(a){return new P.aT(1000*a)},
kC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a6(a)
if(typeof a==="string")return JSON.stringify(a)
return P.mZ(a)},
eb:function(a){return new P.ao(!1,null,null,a)},
kx:function(a,b,c){return new P.ao(!0,a,b,c)},
cL:function(a,b){return new P.bi(null,null,!0,a,b,"Value not in range")},
V:function(a,b,c,d,e){return new P.bi(b,c,!0,a,d,"Invalid value")},
aJ:function(a,b,c){var u
if(typeof a!=="number")return H.h(a)
if(0<=a){if(typeof c!=="number")return H.h(c)
u=a>c}else u=!0
if(u)throw H.c(P.V(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.h(c)
u=b>c}else u=!0
if(u)throw H.c(P.V(b,a,c,"end",null))
return b}return c},
lB:function(a,b){if(typeof a!=="number")return a.M()
if(a<0)throw H.c(P.V(a,0,null,b,null))},
I:function(a,b,c,d,e){var u=e==null?J.ai(b):e
return new P.eW(u,!0,a,c,"Index out of range")},
t:function(a){return new P.hZ(a)},
hW:function(a){return new P.hV(a)},
bb:function(a){return new P.et(a)},
A:function(a){return new P.dh(a)},
P:function(a,b,c){return new P.eT(a,b,c)},
n9:function(a,b,c){var u,t,s=H.d([],[c])
C.b.sk(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.b(s,u)
s[u]=t}return s},
l3:function(a){H.oA(a)},
nA:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.I(a,4)^58)*3|C.a.I(a,0)^100|C.a.I(a,1)^97|C.a.I(a,2)^116|C.a.I(a,3)^97)>>>0
if(u===0)return P.lL(e<e?C.a.v(a,0,e):a,5,f).gdd()
else if(u===32)return P.lL(C.a.v(a,5,e),0,f).gdd()}t=new Array(8)
t.fixed$length=Array
s=H.d(t,[P.r])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.m4(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.hn()
if(r>=0)if(P.m4(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.q()
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a4(a,"..",o)))j=n>o+2&&C.a.a4(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a4(a,"file",0)){if(q<=0){if(!C.a.a4(a,"/",o)){i="file:///"
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
a=C.a.aH(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a4(a,"http",0)){if(t&&p+3===o&&C.a.a4(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aH(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a4(a,"https",0)){if(t&&p+4===o&&C.a.a4(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aH(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.iL(a,r,q,p,o,n,m,k)}return P.nS(a,0,e,r,q,p,o,n,m,k)},
lN:function(a){var u=P.n
return C.b.fP(H.d(a.split("&"),[u]),P.ln(u,u),new P.i3(C.e))},
nz:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.i0(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.W(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.e4(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.b(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.e4(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.b(j,r)
j[r]=p
return j},
lM:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.i1(a),d=new P.i2(e,a)
if(a.length<2)e.$1("address is too short")
u=H.d([],[P.r])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.W(a,t)
if(p===58){if(t===b){++t
if(C.a.W(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gao(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nz(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.b(l,i)
l[i]=0
f=i+1
if(f>=k)return H.b(l,f)
l[f]=0
i+=2}else{f=C.c.ay(h,8)
if(i<0||i>=k)return H.b(l,i)
l[i]=f
f=i+1
if(f>=k)return H.b(l,f)
l[f]=h&255
i+=2}}return l},
nS:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.o_(a,b,d)
else{if(d===b)P.bp(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.o0(a,u,e-1):""
s=P.nX(a,e,f,!1)
if(typeof f!=="number")return f.q()
r=f+1
if(typeof g!=="number")return H.h(g)
q=r<g?P.nZ(P.e4(C.a.v(a,r,g),new P.iV(a,f),n),j):n}else{q=n
s=q
t=""}p=P.nY(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.M()
o=h<i?P.kT(a,h+1,i,n):n
return new P.bo(j,t,s,q,p,o,i<c?P.nW(a,i+1,c):n)},
lX:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bp:function(a,b,c){throw H.c(P.P(c,a,b))},
nZ:function(a,b){if(a!=null&&a===P.lX(b))return
return a},
nX:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.W(a,b)===91){if(typeof c!=="number")return c.B()
u=c-1
if(C.a.W(a,u)!==93)P.bp(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.nU(a,t,u)
if(typeof s!=="number")return s.M()
if(s<u){r=s+1
q=P.m1(a,C.a.a4(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lM(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.h(c)
p=b
for(;p<c;++p)if(C.a.W(a,p)===58){s=C.a.b8(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m1(a,C.a.a4(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lM(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.o2(a,b,c)},
nU:function(a,b,c){var u,t=C.a.b8(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.h(c)
u=t<c}else u=!1
return u?t:c},
m1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.T(d):null
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.W(a,u)
if(r===37){q=P.kU(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.T("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bp(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.T("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.W(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.T("")
l.a+=C.a.v(a,t,u)
l.a+=P.kS(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
o2:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.h(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.W(a,u)
if(q===37){p=P.kU(a,u,!0)
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
if(o>=8)return H.b(C.u,o)
o=(C.u[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.T("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.b(C.i,o)
o=(C.i[o]&1<<(q&15))!==0}else o=!1
if(o)P.bp(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.W(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.T("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.kS(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
o_:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.lZ(C.a.I(a,b)))P.bp(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.I(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.b(C.k,r)
r=(C.k[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bp(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.nT(t?a.toLowerCase():a)},
nT:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
o0:function(a,b,c){return P.c8(a,b,c,C.P,!1)},
nY:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.c8(a,b,c,C.v,!0):C.M.hp(d,new P.iW(),P.n).E(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a8(u,"/"))u="/"+u
return P.o1(u,e,f)},
o1:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a8(a,"/"))return P.o3(a,!u||c)
return P.o4(a)},
kT:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.eb("Both query and queryParameters specified"))
return P.c8(a,b,c,C.j,!0)}if(d==null)return
u=new P.T("")
t.a=""
d.u(0,new P.iX(new P.iY(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
nW:function(a,b,c){return P.c8(a,b,c,C.j,!0)},
kU:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.W(a,b+1)
t=C.a.W(a,p)
s=H.jp(u)
r=H.jp(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.ay(q,4)
if(p>=8)return H.b(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.cK(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
kS:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.d(u,[P.r])
t[0]=37
t[1]=C.a.I(m,a>>>4)
t[2]=C.a.I(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.d(u,[P.r])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.f3(a,6*r)&63|s
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
q+=3}}return P.bV(t,0,null)},
c8:function(a,b,c,d,e){var u=P.m0(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
m0:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.M()
if(typeof c!=="number")return H.h(c)
if(!(o<c))break
c$0:{u=C.a.W(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.b(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.kU(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.b(C.i,t)
t=(C.i[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bp(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.W(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.kS(u)}}if(m==null)m=new P.T("")
m.a+=C.a.v(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.h(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.M()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m_:function(a){if(C.a.a8(a,"."))return!0
return C.a.cQ(a,"/.")!==-1},
o4:function(a){var u,t,s,r,q,p,o
if(!P.m_(a))return a
u=H.d([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.v(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.b(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.E(u,"/")},
o3:function(a,b){var u,t,s,r,q,p
if(!P.m_(a))return!b?P.lY(a):a
u=H.d([],[P.n])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gao(u)!==".."){if(0>=u.length)return H.b(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.b(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gao(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.b(u,0)
t=P.lY(u[0])
if(0>=u.length)return H.b(u,0)
u[0]=t}return C.b.E(u,"/")},
lY:function(a){var u,t,s,r=a.length
if(r>=2&&P.lZ(J.mJ(a,0)))for(u=1;u<r;++u){t=C.a.I(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ar(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.b(C.k,s)
s=(C.k[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
nV:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.I(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.eb("Invalid URL encoding"))}}return u},
kV:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.I(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.O(C.a.v(a,b,c))}else{r=H.d([],[P.r])
for(s=a.length,q=b;q<c;++q){t=C.a.I(a,q)
if(t>127)throw H.c(P.eb("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.eb("Truncated URI"))
r.push(P.nV(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.i6(!1).bK(r)},
lZ:function(a){var u=a|32
return 97<=u&&u<=122},
lL:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.d([b-1],[P.r])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.I(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.P(m,a,t))}}if(s<0&&t>b)throw H.c(P.P(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.I(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gao(l)
if(r!==44||t!==p+7||!C.a.a4(a,"base64",p+1))throw H.c(P.P("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.B.fW(0,a,o,u)
else{n=P.m0(a,o,u,C.j,!0)
if(n!=null)a=C.a.aH(a,o,u,n)}return new P.i_(a,l,c)},
o6:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.n9(22,new P.j5(),P.bk),n=new P.j4(o),m=new P.j6(),l=new P.j7(),k=n.$2(0,225)
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
m4:function(a,b,c,d,e){var u,t,s,r,q,p=$.mI()
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
cc:function cc(){},
a8:function a8(a,b){this.a=a
this.b=b},
J:function J(){},
aT:function aT(a){this.a=a},
eG:function eG(){},
eH:function eH(){},
bc:function bc(){},
cI:function cI(){},
ao:function ao(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bi:function bi(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eW:function eW(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hZ:function hZ(a){this.a=a},
hV:function hV(a){this.a=a},
hq:function hq(a){this.a=a},
et:function et(a){this.a=a},
h_:function h_(){},
cP:function cP(){},
eB:function eB(a){this.a=a},
dh:function dh(a){this.a=a},
eT:function eT(a,b,c){this.a=a
this.b=b
this.c=c},
r:function r(){},
l:function l(){},
fp:function fp(){},
o:function o(){},
Q:function Q(){},
aZ:function aZ(){},
a5:function a5(){},
Z:function Z(){},
n:function n(){},
T:function T(a){this.a=a},
i3:function i3(a){this.a=a},
i0:function i0(a){this.a=a},
i1:function i1(a){this.a=a},
i2:function i2(a,b){this.a=a
this.b=b},
bo:function bo(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
iV:function iV(a,b){this.a=a
this.b=b},
iW:function iW(){},
iY:function iY(a,b){this.a=a
this.b=b},
iX:function iX(a){this.a=a},
i_:function i_(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function j5(){},
j4:function j4(a){this.a=a},
j6:function j6(){},
j7:function j7(){},
iL:function iL(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
ix:function ix(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
aN:function(a){var u,t,s,r,q
if(a==null)return
u=P.ln(P.n,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r){q=t[r]
u.l(0,q,a[q])}return u},
ol:function(a){var u={}
a.u(0,new P.ja(u))
return u},
iN:function iN(){},
iO:function iO(a,b){this.a=a
this.b=b},
iP:function iP(a,b){this.a=a
this.b=b},
ja:function ja(a){this.a=a},
dL:function dL(a,b){this.a=a
this.b=b},
eP:function eP(a,b){this.a=a
this.b=b},
eQ:function eQ(){},
eR:function eR(){},
iD:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
nO:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
iG:function iG(){},
a3:function a3(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aE:function aE(){},
fw:function fw(){},
aI:function aI(){},
fY:function fY(){},
h3:function h3(){},
hv:function hv(){},
j:function j(){},
aK:function aK(){},
hG:function hG(){},
dm:function dm(){},
dn:function dn(){},
dy:function dy(){},
dz:function dz(){},
dJ:function dJ(){},
dK:function dK(){},
dR:function dR(){},
dS:function dS(){},
bk:function bk(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(a){this.a=a},
eg:function eg(){},
b6:function b6(){},
fZ:function fZ(){},
da:function da(){},
hp:function hp(){},
dF:function dF(){},
dG:function dG(){}},W={
ld:function(){var u=document.createElement("canvas")
return u},
kB:function(a){return"wheel"},
lk:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.b4(u)}return s},
iC:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
lW:function(a,b,c,d){var u=W.iC(W.iC(W.iC(W.iC(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
W:function(a,b,c,d){var u=W.m6(new W.iA(c),W.i)
if(u!=null&&!0)J.mL(a,b,u,!1)
return new W.iz(a,b,u,!1)},
m6:function(a,b){var u=$.am
if(u===C.f)return a
return u.cF(a,b)},
k:function k(){},
e7:function e7(){},
e9:function e9(){},
ea:function ea(){},
b7:function b7(){},
b9:function b9(){},
aS:function aS(){},
ex:function ex(){},
F:function F(){},
bA:function bA(){},
ey:function ey(){},
ab:function ab(){},
aq:function aq(){},
ez:function ez(){},
eA:function eA(){},
eC:function eC(){},
eD:function eD(){},
cp:function cp(){},
cq:function cq(){},
eE:function eE(){},
eF:function eF(){},
iv:function iv(a,b){this.a=a
this.b=b},
S:function S(){},
i:function i(){},
e:function e(){},
aj:function aj(){},
bD:function bD(){},
eO:function eO(){},
eS:function eS(){},
ar:function ar(){},
eV:function eV(){},
bF:function bF(){},
bG:function bG(){},
ep:function ep(){},
be:function be(){},
fD:function fD(){},
fK:function fK(){},
bM:function bM(){},
fL:function fL(){},
fM:function fM(a){this.a=a},
fN:function fN(){},
fO:function fO(a){this.a=a},
as:function as(){},
fP:function fP(){},
at:function at(){},
iu:function iu(a){this.a=a},
B:function B(){},
cH:function cH(){},
au:function au(){},
h1:function h1(){},
hb:function hb(){},
hc:function hc(a){this.a=a},
he:function he(){},
aw:function aw(){},
hn:function hn(){},
ax:function ax(){},
ho:function ho(){},
ay:function ay(){},
hs:function hs(){},
ht:function ht(a){this.a=a},
ak:function ak(){},
az:function az(){},
al:function al(){},
hy:function hy(){},
hz:function hz(){},
hB:function hB(){},
aA:function aA(){},
bj:function bj(){},
hE:function hE(){},
hF:function hF(){},
b_:function b_(){},
i4:function i4(){},
il:function il(){},
b0:function b0(){},
bZ:function bZ(){},
iw:function iw(){},
dc:function dc(){},
iB:function iB(){},
dv:function dv(){},
iM:function iM(){},
iQ:function iQ(){},
iz:function iz(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
iA:function iA(a){this.a=a},
H:function H(){},
ct:function ct(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
db:function db(){},
dd:function dd(){},
de:function de(){},
df:function df(){},
dg:function dg(){},
di:function di(){},
dj:function dj(){},
dk:function dk(){},
dl:function dl(){},
dr:function dr(){},
ds:function ds(){},
dt:function dt(){},
du:function du(){},
dw:function dw(){},
dx:function dx(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
c3:function c3(){},
c4:function c4(){},
dD:function dD(){},
dE:function dE(){},
dI:function dI(){},
dM:function dM(){},
dN:function dN(){},
c6:function c6(){},
c7:function c7(){},
dP:function dP(){},
dQ:function dQ(){},
dU:function dU(){},
dV:function dV(){},
dW:function dW(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){}},K={
X:function(a){var u=new K.hf()
u.dq(a)
return u},
e8:function e8(){},
cu:function cu(){},
cD:function cD(){},
aH:function aH(){this.a=null},
hf:function hf(){this.a=null}},L={cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},cW:function cW(a){this.b=a
this.c=null},hC:function hC(){var _=this
_.d=_.c=_.b=_.a=null},cY:function cY(a){this.b=a
this.a=this.c=null}},O={
lf:function(a){var u=new O.ba([a])
u.c5(a)
return u},
ba:function ba(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bL:function bL(){this.b=this.a=null},
cv:function cv(){var _=this
_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fa:function fa(a,b){this.a=a
this.b=b},
fb:function fb(a){this.a=a},
fl:function fl(a,b){this.a=a
this.b=b},
fk:function fk(a){this.a=a},
fm:function fm(a,b){this.a=a
this.b=b},
fn:function fn(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
f9:function f9(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
fc:function fc(a,b){this.a=a
this.b=b},
ff:function ff(a,b){this.a=a
this.b=b},
f5:function f5(a,b){this.a=a
this.b=b},
f6:function f6(a,b){this.a=a
this.b=b},
f4:function f4(a,b){this.a=a
this.b=b},
f7:function f7(a,b){this.a=a
this.b=b},
f2:function f2(a){this.a=a},
f3:function f3(a){this.a=a},
fd:function fd(a){this.a=a},
fe:function fe(a){this.a=a},
fh:function fh(a){this.a=a},
fi:function fi(a,b){this.a=a
this.b=b},
fj:function fj(a){this.a=a},
f8:function f8(a){this.a=a},
f_:function f_(a,b,c){this.a=a
this.b=b
this.c=c},
f0:function f0(a){this.a=a},
eZ:function eZ(a){this.a=a},
eY:function eY(a){this.a=a},
cS:function cS(){}},E={
nK:function(){if(J.kv(window.navigator.vendor,"Google"))return C.z
if(J.kv(window.navigator.userAgent,"Firefox"))return C.o
var u=window.navigator.appVersion
if(J.an(u).a3(u,"Trident")||C.a.a3(u,"Edge"))return C.p
if(J.kv(window.navigator.appName,"Microsoft"))return C.p
return C.A},
nL:function(){var u=window.navigator.appVersion
if(J.an(u).a3(u,"Win"))return C.T
if(C.a.a3(u,"Mac"))return C.U
if(C.a.a3(u,"Linux"))return C.V
return C.W},
nq:function(a,b){var u=new E.h7(a)
u.dn(a,b)
return u},
nx:function(a,b,c,d,e){var u,t,s=J.U(a)
if(!!s.$ib9)return E.lH(a,!0,!0,!0,!1)
u=W.ld()
t=u.style
t.width="100%"
t.height="100%"
s.gbI(a).j(0,u)
return E.lH(u,!0,!0,!0,!1)},
lH:function(a,b,c,d,e){var u,t,s,r,q,p="mousemove",o=new E.cT(),n=C.l.dg(a,"webgl2",P.n7(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(n==null)H.z(P.A("Failed to get the rendering context for WebGL."))
o.b=a
o.c=n
o.e=E.nq(n,a)
n.getParameter(3379)
n.getParameter(34076)
u=new X.d4(a)
t=new X.fv()
t.c=new X.ad(!1,!1,!1)
t.d=P.lp(P.r)
u.b=t
t=new X.fQ(u)
t.f=0
t.r=V.av()
t.x=V.av()
t.ch=t.Q=1
u.c=t
t=new X.fE(u)
t.r=0
t.x=V.av()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.hD(u)
t.f=V.av()
t.r=V.av()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.d([],[[P.cR,P.Z]])
t=$.lj
if(t==null){s=E.nK()
E.nL()
t=$.lj=new E.iy(s)}u.Q=t.a===C.o?0.16666666666666666:0.005555555555555556
r=u.z
q=document
r.push(W.W(q,"contextmenu",u.gel(),!1))
u.z.push(W.W(a,"focus",u.ger(),!1))
u.z.push(W.W(a,"blur",u.gef(),!1))
u.z.push(W.W(q,"keyup",u.gew(),!1))
u.z.push(W.W(q,"keydown",u.geu(),!1))
u.z.push(W.W(a,"mousedown",u.gez(),!1))
u.z.push(W.W(a,"mouseup",u.geD(),!1))
u.z.push(W.W(a,p,u.geB(),!1))
r=u.z
W.kB(a)
W.kB(a)
r.push(W.W(a,W.kB(a),u.geF(),!1))
u.z.push(W.W(q,p,u.gen(),!1))
u.z.push(W.W(q,"mouseup",u.gep(),!1))
u.z.push(W.W(q,"pointerlockchange",u.geH(),!1))
u.z.push(W.W(a,"touchstart",u.geQ(),!1))
u.z.push(W.W(a,"touchend",u.geM(),!1))
u.z.push(W.W(a,"touchmove",u.geO(),!1))
o.x=u
o.ch=!0
o.cx=!1
o.cy=new P.a8(Date.now(),!1)
o.db=0
o.cq()
return o},
ej:function ej(){},
aU:function aU(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
b8:function b8(a){this.b=a},
bg:function bg(a){this.b=a},
iy:function iy(a){this.a=a},
h7:function h7(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
h8:function h8(a){this.a=a},
h9:function h9(a){this.a=a},
ha:function ha(a){this.a=a},
cT:function cT(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.e=_.d=_.c=_.b=null},
hA:function hA(a){this.a=a}},Z={
kQ:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.j8(c)),35044)
a.bindBuffer(b,null)
return new Z.d8(b,u)},
ag:function(a){return new Z.bY(a)},
d8:function d8(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
im:function im(a){this.a=a},
cj:function cj(a,b){this.a=a
this.b=null
this.c=b},
ck:function ck(){this.a=null},
bd:function bd(a,b,c){this.a=a
this.b=b
this.c=c},
bY:function bY(a){this.a=a},
mj:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f="testCanvas",e=null,d="controls",c="modifiers",b=V.ns("Test 002"),a=W.ld()
a.className="pageLargeCanvas"
a.id=f
b.a.appendChild(a)
u=[P.n]
b.cE(H.d(["The inspection test is used to check that shapes are built correctly ","and for checking the data provided by the shapes. ","Also it is useful for testing out new generated shape configurations. ","For loaded shape testing see test032."],u))
b.fn(H.d(["controls","shapes","scalars"],u))
b.cE(H.d(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(f)
if(t==null)H.z(P.A("Failed to find an element with the identifier, testCanvas."))
s=E.nx(t,!0,!0,!0,!1)
r=new E.aU()
r.a=""
r.b=!0
b=E.aU
q=O.lf(b)
r.y=q
q.bg(r.gfX(),r.gh_())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sc2(0,e)
r.saS(e)
q=new U.bE()
q.c5(U.a9)
q.bg(q.ged(),q.geK())
q.e=null
q.f=V.fJ()
q.r=0
p=s.x
o=new U.d6()
n=U.kA()
n.sc1(0,!0)
n.sbQ(6.283185307179586)
n.sbS(0)
n.sU(0,0)
n.sbR(100)
n.sV(0)
n.sbM(0.5)
o.b=n
m=o.gaw()
n.gD().j(0,m)
n=U.kA()
n.sc1(0,!0)
n.sbQ(6.283185307179586)
n.sbS(0)
n.sU(0,0)
n.sbR(100)
n.sV(0)
n.sbM(0.5)
o.c=n
n.gD().j(0,m)
o.d=null
o.r=o.f=o.e=!1
o.y=o.x=2.5
o.Q=4
o.ch=o.cx=!1
o.db=o.cy=0
o.dx=null
o.dy=0
o.fx=o.fr=null
l=new X.ad(!1,!1,!1)
k=o.d
o.d=l
n=new D.u(c,k,l)
n.b=!0
o.R(n)
n=o.f
if(n!==!1){o.f=!1
n=new D.u("invertX",n,!1)
n.b=!0
o.R(n)}n=o.r
if(n!==!0){o.r=!0
n=new D.u("invertY",n,!0)
n.b=!0
o.R(n)}o.aO(p)
q.j(0,o)
p=s.x
o=new U.d5()
n=U.kA()
n.sc1(0,!0)
n.sbQ(6.283185307179586)
n.sbS(0)
n.sU(0,0)
n.sbR(100)
n.sV(0)
n.sbM(0.2)
o.b=n
n.gD().j(0,o.gaw())
o.c=null
o.d=!1
o.e=2.5
o.r=4
o.x=o.y=!1
o.z=0
o.Q=null
o.ch=0
o.cy=o.cx=null
l=new X.ad(!0,!1,!1)
k=o.c
o.c=l
n=new D.u(c,k,l)
n.b=!0
o.R(n)
o.aO(p)
q.j(0,o)
p=s.x
o=new U.d7()
o.c=0.01
o.e=o.d=0
l=new X.ad(!1,!1,!1)
o.b=l
n=new D.u(c,e,l)
n.b=!0
o.R(n)
o.aO(p)
q.j(0,o)
r.saS(q)
j=new O.cv()
j.b=V.lU()
j.c=new V.C(0.2,0.3,0.4,1)
j.d=new V.C(0.1,0.2,0.3,1)
j.e=V.cm(0.7)
j.f=V.cm(0.3)
j.r=V.cm(0.5)
j.x=V.cm(0.5)
j.y=new V.C(1,1,1,1)
j.z=V.cm(0.8)
j.r1=j.k4=j.k3=j.k2=j.k1=j.id=j.go=j.fy=j.fx=j.fr=j.dy=j.dx=j.db=j.cy=j.cx=j.ch=j.Q=!1
j.r2=1
j.sa6(0.4)
q=new M.cr()
q.a=!0
b=O.lf(b)
q.e=b
b.bg(q.geh(),q.gej())
q.y=q.x=q.r=q.f=null
i=X.n_(e)
h=new X.cJ()
h.c=1.0471975511965976
h.d=0.1
h.e=2000
h.saS(e)
b=h.c
if(!(Math.abs(b-1.0471975511965976)<$.D().a)){h.c=1.0471975511965976
b=new D.u("fov",b,1.0471975511965976)
b.b=!0
h.at(b)}b=h.d
if(!(Math.abs(b-0.1)<$.D().a)){h.d=0.1
b=new D.u("near",b,0.1)
b.b=!0
h.at(b)}b=h.e
if(!(Math.abs(b-2000)<$.D().a)){h.e=2000
b=new D.u("far",b,2000)
b.b=!0
h.at(b)}b=q.b
if(b!==h){if(b!=null)b.gD().F(0,q.gaf())
k=q.b
q.b=h
h.gD().j(0,q.gaf())
b=new D.u("camera",k,q.b)
b.b=!0
q.ak(b)}b=q.c
if(b!==i){if(b!=null)b.gD().F(0,q.gaf())
k=q.c
q.c=i
i.gD().j(0,q.gaf())
b=new D.u("target",k,q.c)
b.b=!0
q.ak(b)}q.sd8(e)
q.sd8(j)
q.e.j(0,r)
b=q.b
g=V.aF(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)
p=new U.cn()
p.a=g
b.saS(p)
b=s.d
if(b!==q){if(b!=null)b.gD().F(0,s.gc6())
s.d=q
q.gD().j(0,s.gc6())
s.c7()}b=new V.en(d)
u=u.getElementById(d)
b.c=u
if(u==null)H.z("Failed to find controls for CheckGroup")
b.d=H.d([],[W.ep])
b.a1(0,"Filled",new Z.jA(j),!0)
b.a1(0,"Wire Frame",new Z.jB(j),!0)
b.m(0,"Vertices",new Z.jC(j))
b.m(0,"Normals",new Z.jN(j))
b.m(0,"Binormals",new Z.jY(j))
b.m(0,"Tangentals",new Z.k8(j))
b.m(0,"Face Centers",new Z.kh(j))
b.m(0,"Face Normals",new Z.ki(j))
b.m(0,"Face Binormals",new Z.kj(j))
b.m(0,"Face Tangentals",new Z.kk(j))
b.m(0,"Colors",new Z.kl(j))
b.m(0,"Textures2D",new Z.jD(j))
b.m(0,"TexturesCube",new Z.jE(j))
b.m(0,"Weight",new Z.jF(j))
b.m(0,"Bend",new Z.jG(j))
b.a1(0,"Axis",new Z.jH(j),!0)
b.m(0,"AABB",new Z.jI(j))
b=new Z.km(r)
u=V.lA("shapes")
u.a1(0,"Square",new Z.jJ(b),!0)
u.m(0,"Cube",new Z.jK(b))
u.m(0,"Cuboid",new Z.jL(b))
u.m(0,"Cuboid+",new Z.jM(b))
u.m(0,"Disk",new Z.jO(b))
u.m(0,"Disk+",new Z.jP(b))
u.m(0,"Cylinder",new Z.jQ(b))
u.m(0,"Cylinder+",new Z.jR(b))
u.m(0,"Cone",new Z.jS(b))
u.m(0,"Cylindrical",new Z.jT(b))
u.m(0,"LatLonSphere",new Z.jU(b))
u.m(0,"LatLonSphere+",new Z.jV(b))
u.m(0,"IsoSphere",new Z.jW(b))
u.m(0,"IsoSphere+",new Z.jX(b))
u.m(0,"Sphere",new Z.jZ(b))
u.m(0,"Sphere+",new Z.k_(b))
u.m(0,"Spherical",new Z.k0(b))
u.m(0,"Toroid",new Z.k1(b))
u.m(0,"Knot",new Z.k2(b))
u.m(0,"Grid",new Z.k3(b))
u.m(0,"Grid+",new Z.k4(b))
b=V.lA("scalars")
b.m(0,"0.01",new Z.k5(j))
b.m(0,"0.02",new Z.k6(j))
b.m(0,"0.04",new Z.k7(j))
b.m(0,"0.06",new Z.k9(j))
b.m(0,"0.08",new Z.ka(j))
b.m(0,"0.1",new Z.kb(j))
b.m(0,"0.2",new Z.kc(j))
b.a1(0,"0.4",new Z.kd(j),!0)
b.m(0,"0.6",new Z.ke(j))
b.m(0,"0.8",new Z.kf(j))
b.m(0,"1.0",new Z.kg(j))
V.oD(s)},
jA:function jA(a){this.a=a},
jB:function jB(a){this.a=a},
jC:function jC(a){this.a=a},
jN:function jN(a){this.a=a},
jY:function jY(a){this.a=a},
k8:function k8(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
jD:function jD(a){this.a=a},
jE:function jE(a){this.a=a},
jF:function jF(a){this.a=a},
jG:function jG(a){this.a=a},
jH:function jH(a){this.a=a},
jI:function jI(a){this.a=a},
km:function km(a){this.a=a},
jJ:function jJ(a){this.a=a},
jK:function jK(a){this.a=a},
jL:function jL(a){this.a=a},
jM:function jM(a){this.a=a},
jz:function jz(){},
jO:function jO(a){this.a=a},
jP:function jP(a){this.a=a},
jQ:function jQ(a){this.a=a},
jR:function jR(a){this.a=a},
jS:function jS(a){this.a=a},
jT:function jT(a){this.a=a},
jy:function jy(){},
jU:function jU(a){this.a=a},
jV:function jV(a){this.a=a},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jZ:function jZ(a){this.a=a},
k_:function k_(a){this.a=a},
k0:function k0(a){this.a=a},
jx:function jx(){},
k1:function k1(a){this.a=a},
k2:function k2(a){this.a=a},
k3:function k3(a){this.a=a},
k4:function k4(a){this.a=a},
jw:function jw(){},
k5:function k5(a){this.a=a},
k6:function k6(a){this.a=a},
k7:function k7(a){this.a=a},
k9:function k9(a){this.a=a},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
kg:function kg(a){this.a=a}},D={
M:function(){var u=new D.bB()
u.d=0
return u},
em:function em(){},
bB:function bB(){var _=this
_.d=_.c=_.b=_.a=null},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
Y:function Y(){this.b=null},
cw:function cw(){this.b=null},
cx:function cx(){this.b=null},
u:function u(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={cl:function cl(a,b){this.a=a
this.b=b},cB:function cB(a,b){this.a=a
this.b=b},fv:function fv(){var _=this
_.d=_.c=_.b=_.a=null},cC:function cC(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},fE:function fE(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ad:function ad(a,b,c){this.a=a
this.b=b
this.c=c},aG:function aG(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},fQ:function fQ(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bN:function bN(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h2:function h2(){},cX:function cX(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},hD:function hD(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},d4:function d4(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n_:function(a){var u=new X.eU(),t=new V.C(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lD
if(t==null){t=V.lC(0,0,1,1)
$.lD=t}u.r=t
return u},
kz:function kz(){},
eU:function eU(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cJ:function cJ(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
hw:function hw(){}},V={
lg:function(a,b,c){var u,t,s,r,q,p,o,n
a*=6
u=C.d.b7(a)
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
return new V.a7(p,o,n)
case 1:if(r<0)p=0
else p=r>1?1:r
if(b<0)o=0
else o=b>1?1:b
if(s<0)n=0
else n=s>1?1:s
return new V.a7(p,o,n)
case 2:if(s<0)p=0
else p=s>1?1:s
if(b<0)o=0
else o=b>1?1:b
if(q<0)n=0
else n=q>1?1:q
return new V.a7(p,o,n)
case 3:if(s<0)p=0
else p=s>1?1:s
if(r<0)o=0
else o=r>1?1:r
if(b<0)n=0
else n=b>1?1:b
return new V.a7(p,o,n)
case 4:if(q<0)p=0
else p=q>1?1:q
if(s<0)o=0
else o=s>1?1:s
if(b<0)n=0
else n=b>1?1:b
return new V.a7(p,o,n)
default:if(b<0)p=0
else p=b>1?1:b
if(s<0)o=0
else o=s>1?1:s
if(r<0)n=0
else n=r>1?1:r
return new V.a7(p,o,n)}},
cm:function(a){if(a<0)a=0
else if(a>1)a=1
return new V.C(a,a,a,1)},
er:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.C(u,t,s,1)},
lh:function(a){return new V.C(a.a,a.b,a.c,1)},
oI:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aZ(a-b,u)
return(a<0?a+u:a)+b},
x:function(a,b,c){if(a==null)return C.a.ac("null",c)
return C.a.ac(C.d.d9(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
jk:function(a,b,c){var u,t,s,r,q,p,o=H.d([],[P.n])
for(u=0,t=0;t<4;++t){s=V.x(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.b(o,q)
r=C.a.ac(o[q],u)
p=o.length
if(q>=p)return H.b(o,q)
o[q]=r}return o},
fJ:function(){var u=$.lq
return u==null?$.lq=V.aF(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aF:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
av:function(){var u=$.lt
return u==null?$.lt=new V.R(0,0):u},
lv:function(){var u=$.lu
return u==null?$.lu=new V.E(0,0,0):u},
lx:function(){var u=$.lw
return u==null?$.lw=new V.a2(0,0,0,0):u},
lC:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.cM(a,b,c,d)},
lE:function(a,b,c,d,e,f){return new V.bU(a,b,c,d,e,f)},
K:function(){var u=$.lT
return u==null?$.lT=new V.q(0,0,0):u},
kP:function(){var u=$.lQ
return u==null?$.lQ=new V.q(1,0,0):u},
lU:function(){var u=$.lP
return u==null?$.lP=new V.q(0,0,-1):u},
a7:function a7(a,b,c){this.a=a
this.b=b
this.c=c},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eK:function eK(a){this.a=a},
bK:function bK(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
R:function R(a,b){this.a=a
this.b=b},
E:function E(a,b,c){this.a=a
this.b=b
this.c=c},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cM:function cM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bU:function bU(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
G:function G(a,b){this.a=a
this.b=b},
q:function q(a,b,c){this.a=a
this.b=b
this.c=c},
aL:function aL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
oD:function(a){P.ny(C.K,new V.ko(a))},
lA:function(a){var u=new V.h5(a),t=document.getElementById(a)
u.c=t
if(t==null)H.z("Failed to find "+a+" for RadioGroup")
return u},
ns:function(a){var u=new V.hj()
u.ds(a,!0)
return u},
en:function en(a){this.a=a
this.d=this.c=null},
eo:function eo(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ko:function ko(a){this.a=a},
h5:function h5(a){this.a=a
this.c=null},
h6:function h6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
hj:function hj(){this.b=this.a=null},
hl:function hl(a){this.a=a},
hk:function hk(a){this.a=a}},U={
kA:function(){var u=new U.es()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
es:function es(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cn:function cn(){this.b=this.a=null},
bE:function bE(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a9:function a9(){},
d5:function d5(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
d6:function d6(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d7:function d7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={cr:function cr(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
kM:function(a,b,c,d,e){var u=new A.hL(a,c,e)
u.f=d
P.n8(d,0,P.r)
return u},
ch:function ch(a,b,c){this.a=a
this.b=b
this.c=c},
ec:function ec(a){this.a=a},
eX:function eX(a,b){var _=this
_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cN:function cN(){},
cZ:function cZ(){},
hQ:function hQ(a){this.a=a},
hK:function hK(a,b,c){this.a=a
this.c=b
this.d=c},
hN:function hN(a,b,c){this.a=a
this.c=b
this.d=c},
hO:function hO(a,b,c){this.a=a
this.c=b
this.d=c},
hP:function hP(a,b,c){this.a=a
this.c=b
this.d=c},
hL:function hL(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
d_:function d_(a,b,c){this.a=a
this.c=b
this.d=c},
hM:function hM(a,b,c){this.a=a
this.c=b
this.d=c},
d0:function d0(a,b,c){this.a=a
this.c=b
this.d=c},
bW:function bW(a,b,c){this.a=a
this.c=b
this.d=c},
hR:function hR(a,b,c){this.a=a
this.c=b
this.d=c},
hS:function hS(a,b,c){this.a=a
this.c=b
this.d=c},
bl:function bl(a,b,c){this.a=a
this.c=b
this.d=c},
hT:function hT(a,b,c){this.a=a
this.c=b
this.d=c},
hU:function hU(a,b,c){this.a=a
this.c=b
this.d=c}},F={
jb:function(a,b,c,d){var u=F.N()
F.c9(u,b,c,d,a,1,0,0,1)
F.c9(u,b,c,d,a,0,1,0,3)
F.c9(u,b,c,d,a,0,0,1,2)
F.c9(u,b,c,d,a,-1,0,0,0)
F.c9(u,b,c,d,a,0,-1,0,0)
F.c9(u,b,c,d,a,0,0,-1,3)
u.a9()
return u},
j3:function(a){var u,t=a.a>0?1:0
if(a.b>0)t+=2
u=a.c
if(typeof u!=="number")return u.a0()
return(u>0?t+4:t)*2},
c9:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.q(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.q(u+a3,t+a1,s+a2)
q=new V.q(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.q(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.j3(i)
l=F.j3(h)
k=F.e5(d,a0,new F.j2(j,F.j3(g),F.j3(f),l,m,c),b)
if(k!=null)a.aD(k)},
jh:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(d==null)d=new F.ji()
if(e<3)return
u=F.N()
t=b?-1:1
s=-6.283185307179586/e
r=H.d([],[F.aM])
q=u.a
p=new V.q(0,0,t)
p=p.p(0,Math.sqrt(p.w(p)))
r.push(q.fq(new V.a2(a,-1,-1,-1),new V.C(1,1,1,1),new V.E(0,0,c),new V.q(0,0,t),new V.R(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.h(k)
j=new V.q(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.af(new V.a2(a,-1,-1,-1),null,new V.C(i,g,h,1),new V.E(m*k,l*k,c),new V.q(0,0,t),new V.R(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.j(0,f)
r.push(f)}u.d.cC(r)
return u},
kZ:function(a,b,c,d){return F.m9(!0,a,b,new F.jc(1,d),c)},
m9:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.e5(c,e,new F.je(d),null)
if(u==null)return
u.a9()
u.b5()
if(b)u.aD(F.jh(3,!1,1,new F.jf(d),e))
u.aD(F.jh(1,!0,-1,new F.jg(d),e))
return u},
mi:function(a,b){var u=F.e5(a,b,new F.jv(),null)
u.d.bc()
u.a9()
u.b5()
return u},
mh:function(a){var u=F.N(),t=Math.sqrt(5)/2+0.5,s=F.a_(u,new V.q(-1,t,0)),r=F.a_(u,new V.q(1,t,0)),q=-t,p=F.a_(u,new V.q(-1,q,0)),o=F.a_(u,new V.q(1,q,0)),n=F.a_(u,new V.q(0,-1,q)),m=F.a_(u,new V.q(0,1,q)),l=F.a_(u,new V.q(0,-1,t)),k=F.a_(u,new V.q(0,1,t)),j=F.a_(u,new V.q(t,0,1)),i=F.a_(u,new V.q(t,0,-1)),h=F.a_(u,new V.q(q,0,1)),g=F.a_(u,new V.q(q,0,-1))
F.L(u,s,g,m,a)
F.L(u,s,m,r,a)
F.L(u,s,r,k,a)
F.L(u,s,k,h,a)
F.L(u,s,h,g,a)
F.L(u,r,m,i,a)
F.L(u,m,g,n,a)
F.L(u,g,h,p,a)
F.L(u,h,k,l,a)
F.L(u,k,r,j,a)
F.L(u,o,i,n,a)
F.L(u,o,n,p,a)
F.L(u,o,p,l,a)
F.L(u,o,l,j,a)
F.L(u,o,j,i,a)
F.L(u,n,i,m,a)
F.L(u,p,n,g,a)
F.L(u,l,p,h,a)
F.L(u,j,l,k,a)
F.L(u,i,j,r,a)
u.cU(new F.bX(),new F.ic())
return u},
a_:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.w(b)))
u=b.a
t=b.b
s=b.c
r=F.af(j,j,j,new V.E(u,t,s),b,j,j,j,0)
q=a.fK(r,new F.bX())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
if(typeof s!=="number")return s.t()
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sa2(0,new V.C(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.sbZ(new V.R(l,k<0?-k:k))
a.a.j(0,r)
return r},
L:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.a1(0,b,d,c)
else{u=F.a_(a,b.r.q(0,c.r).t(0,0.5))
t=F.a_(a,c.r.q(0,d.r).t(0,0.5))
s=F.a_(a,d.r.q(0,b.r).t(0,0.5))
r=e-1
F.L(a,b,u,s,r)
F.L(a,u,c,t,r)
F.L(a,t,s,u,r)
F.L(a,s,t,d,r)}},
l4:function(a,b,c){var u,t={}
t.a=b
if(b==null)t.a=new F.kp()
u=F.jb(a,null,new F.kq(t,1),c)
u.b5()
return u},
oG:function(){return F.ma(15,30,0.5,1,new F.ks())},
ox:function(){return F.ma(12,120,0.3,1,new F.ju(3,2))},
ma:function(a,b,c,d,e){var u=F.e5(a,b,new F.jd(e,d,b,c),null)
if(u==null)return
u.a9()
u.b5()
return u},
mf:function(a,b,c){var u={}
u.a=b
if(b==null)u.a=new F.jn()
return F.e5(c,a,new F.jo(u),null)},
e5:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.N()
t=H.d([],[F.aM])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.af(g,g,new V.C(p,0,0,1),g,g,new V.R(r,1),g,g,0)
q.j(0,o)
c.$3(o,r,0)
t.push(o.bL(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.af(g,g,new V.C(j,i,h,1),g,g,new V.R(r,m),g,g,0)
k.j(0,o)
c.$3(o,r,n)
t.push(o.bL(d))}}u.d.fp(a+1,b+1,t)
return u},
bC:function(a,b,c){var u=new F.aD(),t=a.a
if(t==null)H.z(P.A("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.z(P.A("May not create a face with vertices attached to different shapes."))
u.aM(a)
u.aN(b)
u.cr(c)
u.a.a.d.b.push(u)
u.a.a.S()
return u},
n5:function(a,b){var u,t=new F.bf()
if(a==null)H.z(P.A("May not create a line with a null start vertex."))
if(b==null)H.z(P.A("May not create a line with a null end vertex."))
u=a.a
if(u==null)H.z(P.A("May not create a line with a start vertex which is not attached to a shape."))
if(u!=b.a)H.z(P.A("May not create a line with vertices attached to different shapes."))
t.aM(a)
t.aN(b)
t.a.a.c.b.push(t)
t.a.a.S()
return t},
kK:function(a){var u=new F.bR()
if(a.a==null)H.z(P.A("May not create a point with a vertex which is not attached to a shape."))
u.eY(a)
u.a.a.b.b.push(u)
u.a.a.S()
return u},
N:function(){var u=new F.ae(),t=new F.i8(u)
t.b=!1
t.c=H.d([],[F.aM])
u.a=t
t=new F.hi(u)
t.b=H.d([],[F.bR])
u.b=t
t=new F.hh(u)
t.b=H.d([],[F.bf])
u.c=t
t=new F.hg(u)
t.b=H.d([],[F.aD])
u.d=t
u.e=null
return u},
af:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.aM(),r=new F.ii()
r.b=H.d([],[F.bR])
s.b=r
r=new F.id()
u=[F.bf]
r.b=H.d([],u)
r.c=H.d([],u)
s.c=r
r=new F.i9()
u=[F.aD]
r.b=H.d([],u)
r.c=H.d([],u)
r.d=H.d([],u)
s.d=r
h=$.mD()
s.e=0
r=$.aQ()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.aP().a)!==0?e:t
s.x=(u&$.aO().a)!==0?b:t
s.y=(u&$.bu().a)!==0?f:t
s.z=(u&$.bv().a)!==0?g:t
s.Q=(u&$.mE().a)!==0?c:t
s.ch=(u&$.bw().a)!==0?i:0
s.cx=(u&$.bt().a)!==0?a:t
return s},
j2:function j2(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
ji:function ji(){},
jc:function jc(a,b){this.a=a
this.b=b},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
jg:function jg(a){this.a=a},
jv:function jv(){},
kp:function kp(){},
kq:function kq(a,b){this.a=a
this.b=b},
ks:function ks(){},
ju:function ju(a,b){this.a=a
this.b=b},
jd:function jd(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
jn:function jn(){},
jo:function jo(a){this.a=a},
aD:function aD(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
eN:function eN(){},
hm:function hm(){},
bf:function bf(){this.b=this.a=null},
fx:function fx(){},
hJ:function hJ(){},
bR:function bR(){this.a=null},
ae:function ae(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hg:function hg(a){this.a=a
this.b=null},
hh:function hh(a){this.a=a
this.b=null},
hi:function hi(a){this.a=a
this.b=null},
aM:function aM(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ik:function ik(a){this.a=a},
ij:function ij(a){this.a=a},
i8:function i8(a){this.a=a
this.c=this.b=null},
i9:function i9(){this.d=this.c=this.b=null},
ia:function ia(a,b){this.a=a
this.b=b},
ib:function ib(a,b){this.a=a
this.b=b},
id:function id(){this.c=this.b=null},
ie:function ie(){},
bX:function bX(){},
ig:function ig(){},
h4:function h4(){this.b=this.a=null},
ih:function ih(){},
ic:function ic(){},
fW:function fW(){},
ii:function ii(){this.b=null}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kG.prototype={}
J.a.prototype={
A:function(a,b){return a===b},
gH:function(a){return H.bS(a)},
h:function(a){return"Instance of '"+H.f(H.bT(a))+"'"}}
J.fq.prototype={
h:function(a){return String(a)},
gH:function(a){return a?519018:218159},
$icc:1}
J.cz.prototype={
A:function(a,b){return null==b},
h:function(a){return"null"},
gH:function(a){return 0}}
J.cA.prototype={
gH:function(a){return 0},
h:function(a){return String(a)},
$in3:1}
J.h0.prototype={}
J.bm.prototype={}
J.aX.prototype={
h:function(a){var u=a[$.mr()]
if(u==null)return this.dl(a)
return"JavaScript function for "+H.f(J.a6(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aV.prototype={
bW:function(a,b){if(!!a.fixed$length)H.z(P.t("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cL(b,null))
return a.splice(b,1)[0]},
F:function(a,b){var u
if(!!a.fixed$length)H.z(P.t("remove"))
for(u=0;u<a.length;++u)if(J.v(a[u],b)){a.splice(u,1)
return!0}return!1},
fm:function(a,b){var u,t
if(!!a.fixed$length)H.z(P.t("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t)a.push(b[t])},
u:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.bb(a))}},
E:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.b(r,u)
r[u]=t}return r.join(b)},
fU:function(a){return this.E(a,"")},
fO:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.bb(a))}return u},
fP:function(a,b,c){return this.fO(a,b,c,null)},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
di:function(a,b,c){if(b<0||b>a.length)throw H.c(P.V(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.V(c,b,a.length,"end",null))
if(b===c)return H.d([],[H.b3(a,0)])
return H.d(a.slice(b,c),[H.b3(a,0)])},
gfM:function(a){if(a.length>0)return a[0]
throw H.c(H.ll())},
gao:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.ll())},
a3:function(a,b){var u
for(u=0;u<a.length;++u)if(J.v(a[u],b))return!0
return!1},
h:function(a){return P.kD(a,"[","]")},
gX:function(a){return new J.aa(a,a.length)},
gH:function(a){return H.bS(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.z(P.t("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kx(b,u,null))
if(b<0)throw H.c(P.V(b,0,null,u,null))
a.length=b},
i:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(H.b2(a,b))
if(b>=a.length||b<0)throw H.c(H.b2(a,b))
return a[b]},
l:function(a,b,c){if(!!a.immutable$list)H.z(P.t("indexed set"))
if(b>=a.length||b<0)throw H.c(H.b2(a,b))
a[b]=c},
$im:1,
$il:1,
$io:1}
J.kF.prototype={}
J.aa.prototype={
gJ:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.y(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bH.prototype={
aA:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ah(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gb9(b)
if(this.gb9(a)===u)return 0
if(this.gb9(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gb9:function(a){return a===0?1/a<0:a<0},
b7:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.t(""+a+".floor()"))},
ae:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.t(""+a+".round()"))},
d9:function(a,b){var u
if(b>20)throw H.c(P.V(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gb9(a))return"-"+u
return u},
aW:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.V(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.W(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.z(P.t("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.b(t,1)
u=t[1]
if(3>=s)return H.b(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.t("0",r)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gH:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aZ:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
dm:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ct(a,b)},
ah:function(a,b){return(a|0)===a?a/b|0:this.ct(a,b)},
ct:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.t("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
ay:function(a,b){var u
if(a>0)u=this.cs(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
f3:function(a,b){if(b<0)throw H.c(H.ah(b))
return this.cs(a,b)},
cs:function(a,b){return b>31?0:a>>>b},
$iJ:1,
$ia5:1}
J.cy.prototype={$ir:1}
J.fr.prototype={}
J.aW.prototype={
W:function(a,b){if(b<0)throw H.c(H.b2(a,b))
if(b>=a.length)H.z(H.b2(a,b))
return a.charCodeAt(b)},
I:function(a,b){if(b>=a.length)throw H.c(H.b2(a,b))
return a.charCodeAt(b)},
q:function(a,b){if(typeof b!=="string")throw H.c(P.kx(b,null,null))
return a+b},
aH:function(a,b,c,d){var u,t
c=P.aJ(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.z(H.ah(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a4:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.V(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a8:function(a,b){return this.a4(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.z(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.M()
if(b<0)throw H.c(P.cL(b,null))
if(b>c)throw H.c(P.cL(b,null))
if(c>a.length)throw H.c(P.cL(c,null))
return a.substring(b,c)},
ar:function(a,b){return this.v(a,b,null)},
t:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.I)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ac:function(a,b){var u=b-a.length
if(u<=0)return a
return this.t(" ",u)+a},
h3:function(a,b,c){var u=b-a.length
if(u<=0)return a
return a+this.t(c,u)},
b8:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.V(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
cQ:function(a,b){return this.b8(a,b,0)},
fA:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.V(c,0,u,null,null))
return H.mn(a,b,c)},
a3:function(a,b){return this.fA(a,b,0)},
aA:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ah(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gH:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$in:1}
H.O.prototype={
gk:function(a){return this.a.length},
i:function(a,b){return C.a.W(this.a,b)},
$am:function(){return[P.r]},
$ap:function(){return[P.r]},
$al:function(){return[P.r]},
$ao:function(){return[P.r]}}
H.m.prototype={}
H.bI.prototype={
gJ:function(a){return this.d},
C:function(){var u,t=this,s=t.a,r=J.an(s),q=r.gk(s)
if(t.b!=q)throw H.c(P.bb(s))
u=t.c
if(typeof q!=="number")return H.h(q)
if(u>=q){t.d=null
return!1}t.d=r.K(s,u);++t.c
return!0}}
H.bJ.prototype={
gX:function(a){return new H.fI(J.aR(this.a),this.b)},
gk:function(a){return J.ai(this.a)},
K:function(a,b){return this.b.$1(J.kw(this.a,b))},
$al:function(a,b){return[b]}}
H.eI.prototype={$im:1,
$am:function(a,b){return[b]}}
H.fI.prototype={
C:function(){var u=this,t=u.b
if(t.C()){u.a=u.c.$1(t.gJ(t))
return!0}u.a=null
return!1},
gJ:function(a){return this.a}}
H.io.prototype={
gX:function(a){return new H.ip(J.aR(this.a),this.b)}}
H.ip.prototype={
C:function(){var u,t
for(u=this.a,t=this.b;u.C();)if(t.$1(u.gJ(u)))return!0
return!1},
gJ:function(a){var u=this.a
return u.gJ(u)}}
H.cs.prototype={}
H.hY.prototype={
l:function(a,b,c){throw H.c(P.t("Cannot modify an unmodifiable list"))}}
H.d1.prototype={}
H.eu.prototype={
h:function(a){return P.kJ(this)},
l:function(a,b,c){return H.mW()},
$iQ:1}
H.ev.prototype={
gk:function(a){return this.a},
bJ:function(a,b){if(typeof b!=="string")return!1
if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
i:function(a,b){if(!this.bJ(0,b))return
return this.cj(b)},
cj:function(a){return this.b[a]},
u:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cj(s))}}}
H.hH.prototype={
ab:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fX.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fu.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.hX.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kt.prototype={
$1:function(a){if(!!J.U(a).$ibc)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:10}
H.dH.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bz.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.ce(t==null?"unknown":t)+"'"},
ghm:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.hx.prototype={}
H.hr.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.ce(u)+"'"}}
H.bx.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bx))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gH:function(a){var u,t=this.c
if(t==null)u=H.bS(this.a)
else u=typeof t!=="object"?J.cg(t):H.bS(t)
return(u^H.bS(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.bT(u))+"'")}}
H.el.prototype={
h:function(a){return this.a}}
H.hd.prototype={
h:function(a){return"RuntimeError: "+H.f(this.a)}}
H.ac.prototype={
gk:function(a){return this.a},
gaa:function(a){return new H.fz(this,[H.b3(this,0)])},
ghl:function(a){var u=this
return H.na(u.gaa(u),new H.ft(u),H.b3(u,0),H.b3(u,1))},
bJ:function(a,b){var u=this.b
if(u==null)return!1
return this.dR(u,b)},
i:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.b1(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.b1(r,b)
s=t==null?null:t.b
return s}else return q.fS(b)},
fS:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cl(r,s.cR(a))
t=s.cS(u,a)
if(t<0)return
return u[t].b},
l:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cb(u==null?s.b=s.bv():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cb(t==null?s.c=s.bv():t,b,c)}else s.fT(b,c)},
fT:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bv()
u=r.cR(a)
t=r.cl(q,u)
if(t==null)r.bA(q,u,[r.bw(a,b)])
else{s=r.cS(t,a)
if(s>=0)t[s].b=b
else t.push(r.bw(a,b))}},
u:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.bb(u))
t=t.c}},
cb:function(a,b,c){var u=this.b1(a,b)
if(u==null)this.bA(a,b,this.bw(b,c))
else u.b=c},
bw:function(a,b){var u=this,t=new H.fy(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
cR:function(a){return J.cg(a)&0x3ffffff},
cS:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.v(a[t].a,b))return t
return-1},
h:function(a){return P.kJ(this)},
b1:function(a,b){return a[b]},
cl:function(a,b){return a[b]},
bA:function(a,b,c){a[b]=c},
dU:function(a,b){delete a[b]},
dR:function(a,b){return this.b1(a,b)!=null},
bv:function(){var u="<non-identifier-key>",t=Object.create(null)
this.bA(t,u,t)
this.dU(t,u)
return t}}
H.ft.prototype={
$1:function(a){return this.a.i(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.b3(u,1),args:[H.b3(u,0)]}}}
H.fy.prototype={}
H.fz.prototype={
gk:function(a){return this.a.a},
gX:function(a){var u=this.a,t=new H.fA(u,u.r)
t.c=u.e
return t}}
H.fA.prototype={
gJ:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bb(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.jq.prototype={
$1:function(a){return this.a(a)},
$S:10}
H.jr.prototype={
$2:function(a,b){return this.a(a,b)}}
H.js.prototype={
$1:function(a){return this.a(a)}}
H.fs.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ino:1}
H.bO.prototype={$ibO:1}
H.aY.prototype={$iaY:1}
H.cE.prototype={
gk:function(a){return a.length},
$iw:1,
$aw:function(){}}
H.bP.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]},
l:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.J]},
$ap:function(){return[P.J]},
$il:1,
$al:function(){return[P.J]},
$io:1,
$ao:function(){return[P.J]}}
H.cF.prototype={
l:function(a,b,c){H.aC(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.r]},
$ap:function(){return[P.r]},
$il:1,
$al:function(){return[P.r]},
$io:1,
$ao:function(){return[P.r]}}
H.fR.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fS.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fT.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fU.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.fV.prototype={
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.cG.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aC(b,a,a.length)
return a[b]}}
H.bQ.prototype={
gk:function(a){return a.length},
i:function(a,b){H.aC(b,a,a.length)
return a[b]},
$ibQ:1,
$ibk:1}
H.c_.prototype={}
H.c0.prototype={}
H.c1.prototype={}
H.c2.prototype={}
P.ir.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:14}
P.iq.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.is.prototype={
$0:function(){this.a.$0()}}
P.it.prototype={
$0:function(){this.a.$0()}}
P.dO.prototype={
dv:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bs(new P.iT(this,b),0),a)
else throw H.c(P.t("`setTimeout()` not found."))},
dw:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bs(new P.iS(this,a,Date.now(),b),0),a)
else throw H.c(P.t("Periodic timer."))},
$icU:1}
P.iT.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.iS.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.dm(u,q)}s.c=r
t.d.$1(s)}}
P.bn.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.c5.prototype={
gJ:function(a){var u=this.c
if(u==null)return this.b
return u.gJ(u)},
C:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.C())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bn){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.b(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aR(u)
if(!!r.$ic5){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.iR.prototype={
gX:function(a){return new P.c5(this.a())}}
P.d9.prototype={}
P.cR.prototype={}
P.hu.prototype={}
P.cU.prototype={}
P.j1.prototype={}
P.j9.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cI():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.iH.prototype={
hf:function(a){var u,t,s,r=null
try{if(C.f===$.am){a.$0()
return}P.oc(r,r,this,a)}catch(s){u=H.b4(s)
t=H.l0(s)
P.m3(r,r,this,u,t)}},
hg:function(a,b){var u,t,s,r=null
try{if(C.f===$.am){a.$1(b)
return}P.od(r,r,this,a,b)}catch(s){u=H.b4(s)
t=H.l0(s)
P.m3(r,r,this,u,t)}},
hh:function(a,b){return this.hg(a,b,null)},
ft:function(a){return new P.iI(this,a)},
cF:function(a,b){return new P.iJ(this,a,b)}}
P.iI.prototype={
$0:function(){return this.a.hf(this.b)}}
P.iJ.prototype={
$1:function(a){return this.a.hh(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.iE.prototype={
gX:function(a){var u=new P.dp(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
a3:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.dQ(b)
return t}},
dQ:function(a){var u=this.d
if(u==null)return!1
return this.bm(this.ck(u,a),a)>=0},
j:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.ce(u==null?s.b=P.kR():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.ce(t==null?s.c=P.kR():t,b)}else return s.dC(0,b)},
dC:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.kR()
u=s.cf(b)
t=r[u]
if(t==null)r[u]=[s.bj(b)]
else{if(s.bm(t,b)>=0)return!1
t.push(s.bj(b))}return!0},
F:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.eT(this.c,b)
else return this.eS(0,b)},
eS:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.ck(r,b)
t=s.bm(u,b)
if(t<0)return!1
s.cv(u.splice(t,1)[0])
return!0},
ce:function(a,b){if(a[b]!=null)return!1
a[b]=this.bj(b)
return!0},
eT:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.cv(u)
delete a[b]
return!0},
co:function(){this.r=1073741823&this.r+1},
bj:function(a){var u,t=this,s=new P.iF(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.co()
return s},
cv:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.co()},
cf:function(a){return J.cg(a)&1073741823},
ck:function(a,b){return a[this.cf(b)]},
bm:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.v(a[t].a,b))return t
return-1}}
P.iF.prototype={}
P.dp.prototype={
gJ:function(a){return this.d},
C:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.bb(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fo.prototype={}
P.fB.prototype={
$2:function(a,b){this.a.l(0,a,b)},
$S:4}
P.fC.prototype={$im:1,$il:1,$io:1}
P.p.prototype={
gX:function(a){return new H.bI(a,this.gk(a))},
K:function(a,b){return this.i(a,b)},
hi:function(a,b){var u,t,s=this,r=H.d([],[H.or(s,a,"p",0)])
C.b.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.h(t)
if(!(u<t))break
t=s.i(a,u)
if(u>=r.length)return H.b(r,u)
r[u]=t;++u}return r},
c_:function(a){return this.hi(a,!0)},
fJ:function(a,b,c,d){var u
P.aJ(b,c,this.gk(a))
for(u=b;u<c;++u)this.l(a,u,d)},
h:function(a){return P.kD(a,"[","]")}}
P.fF.prototype={}
P.fG.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:4}
P.a1.prototype={
u:function(a,b){var u,t
for(u=J.aR(this.gaa(a));u.C();){t=u.gJ(u)
b.$2(t,this.i(a,t))}},
gk:function(a){return J.ai(this.gaa(a))},
h:function(a){return P.kJ(a)},
$iQ:1}
P.iU.prototype={
l:function(a,b,c){throw H.c(P.t("Cannot modify unmodifiable map"))}}
P.fH.prototype={
i:function(a,b){return J.l8(this.a,b)},
l:function(a,b,c){J.ku(this.a,b,c)},
u:function(a,b){J.l9(this.a,b)},
gk:function(a){return J.ai(this.a)},
h:function(a){return J.a6(this.a)},
$iQ:1}
P.d2.prototype={}
P.iK.prototype={
h:function(a){return P.kD(this,"{","}")},
K:function(a,b){var u,t,s
P.lB(b,"index")
for(u=P.nP(this,this.r),t=0;u.C();){s=u.d
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
$im:1,
$il:1}
P.dq.prototype={}
P.dT.prototype={}
P.eh.prototype={
fW:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aJ(a0,a1,b.length)
u=$.mG()
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
if(l<=a1){k=H.jp(C.a.I(b,n))
j=H.jp(C.a.I(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.b(u,i)
h=u[i]
if(h>=0){i=C.a.W("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.T("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.cK(m)
s=n
continue}}throw H.c(P.P("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.la(b,p,a1,q,o,f)
else{e=C.c.aZ(f-1,4)+1
if(e===1)throw H.c(P.P(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aH(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.la(b,p,a1,q,o,d)
else{e=C.c.aZ(d,4)
if(e===1)throw H.c(P.P(c,b,a1))
if(e>1)b=C.a.aH(b,a1,a1,e===2?"==":"=")}return b}}
P.ei.prototype={}
P.eq.prototype={}
P.ew.prototype={}
P.eJ.prototype={}
P.i5.prototype={
gfI:function(){return C.J}}
P.i7.prototype={
bK:function(a){var u,t,s,r=P.aJ(0,null,a.length)
if(typeof r!=="number")return r.B()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.j0(t)
if(s.e3(a,0,r)!==r)s.cB(J.mM(a,r-1),0)
return new Uint8Array(t.subarray(0,H.o5(0,s.b,t.length)))}}
P.j0.prototype={
cB:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
e3:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.W(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.I(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.cB(r,C.a.I(a,p)))s=p}else if(r<=2047){q=n.b
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
P.i6.prototype={
bK:function(a){var u,t,s,r,q,p,o,n,m=P.nB(!1,a,0,null)
if(m!=null)return m
u=P.aJ(0,null,J.ai(a))
t=P.m5(a,0,u)
if(t>0){s=P.bV(a,0,t)
if(t===u)return s
r=new P.T(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.T("")
o=new P.j_(!1,r)
o.c=p
o.fB(a,q,u)
if(o.e>0){H.z(P.P("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.cK(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.j_.prototype={
fB:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.an(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.i(a,s)
if(typeof r!=="number")return r.be()
if((r&192)!==128){q=P.P(k+C.c.aW(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.b(C.t,q)
if(j<=C.t[q]){q=P.P("Overlong encoding of 0x"+C.c.aW(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.P("Character outside valid Unicode range: 0x"+C.c.aW(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.cK(j)
l.c=!1}if(typeof c!=="number")return H.h(c)
q=s<c
for(;q;){p=P.m5(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.bV(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.i(a,o)
if(typeof r!=="number")return r.M()
if(r<0){m=P.P("Negative UTF-8 code unit: -0x"+C.c.aW(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.P(k+C.c.aW(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.cc.prototype={}
P.a8.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.a8&&this.a===b.a&&!0},
aA:function(a,b){return C.c.aA(this.a,b.a)},
gH:function(a){var u=this.a
return(u^C.c.ay(u,30))&1073741823},
h:function(a){var u=this,t=P.mX(H.nk(u)),s=P.co(H.ni(u)),r=P.co(H.ne(u)),q=P.co(H.nf(u)),p=P.co(H.nh(u)),o=P.co(H.nj(u)),n=P.mY(H.ng(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.aT.prototype={
A:function(a,b){if(b==null)return!1
return b instanceof P.aT&&this.a===b.a},
gH:function(a){return C.c.gH(this.a)},
aA:function(a,b){return C.c.aA(this.a,b.a)},
h:function(a){var u,t,s,r=new P.eH(),q=this.a
if(q<0)return"-"+new P.aT(0-q).h(0)
u=r.$1(C.c.ah(q,6e7)%60)
t=r.$1(C.c.ah(q,1e6)%60)
s=new P.eG().$1(q%1e6)
return""+C.c.ah(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.eG.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.eH.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bc.prototype={}
P.cI.prototype={
h:function(a){return"Throw of null."}}
P.ao.prototype={
gbl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbk:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbl()+o+u
if(!q.a)return t
s=q.gbk()
r=P.kC(q.b)
return t+s+": "+r}}
P.bi.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.eW.prototype={
gbl:function(){return"RangeError"},
gbk:function(){var u,t=this.b
if(typeof t!=="number")return t.M()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gk:function(a){return this.f}}
P.hZ.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hV.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.hq.prototype={
h:function(a){return"Bad state: "+this.a}}
P.et.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kC(u)+"."}}
P.h_.prototype={
h:function(a){return"Out of Memory"},
$ibc:1}
P.cP.prototype={
h:function(a){return"Stack Overflow"},
$ibc:1}
P.eB.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.dh.prototype={
h:function(a){return"Exception: "+this.a}}
P.eT.prototype={
h:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.I(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.W(f,q)
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
return h+l+j+k+"\n"+C.a.t(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.r.prototype={}
P.l.prototype={
gk:function(a){var u,t=this.gX(this)
for(u=0;t.C();)++u
return u},
K:function(a,b){var u,t,s
P.lB(b,"index")
for(u=this.gX(this),t=0;u.C();){s=u.gJ(u)
if(b===t)return s;++t}throw H.c(P.I(b,this,"index",null,t))},
h:function(a){return P.n0(this,"(",")")}}
P.fp.prototype={}
P.o.prototype={$im:1,$il:1}
P.Q.prototype={}
P.aZ.prototype={
gH:function(a){return P.Z.prototype.gH.call(this,this)},
h:function(a){return"null"}}
P.a5.prototype={}
P.Z.prototype={constructor:P.Z,$iZ:1,
A:function(a,b){return this===b},
gH:function(a){return H.bS(this)},
h:function(a){return"Instance of '"+H.f(H.bT(this))+"'"},
toString:function(){return this.h(this)}}
P.n.prototype={}
P.T.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.i3.prototype={
$2:function(a,b){var u,t,s,r=J.l_(b).cQ(b,"=")
if(r===-1){if(b!=="")J.ku(a,P.kV(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ar(b,r+1)
s=this.a
J.ku(a,P.kV(u,0,u.length,s,!0),P.kV(t,0,t.length,s,!0))}return a}}
P.i0.prototype={
$2:function(a,b){throw H.c(P.P("Illegal IPv4 address, "+a,this.a,b))}}
P.i1.prototype={
$2:function(a,b){throw H.c(P.P("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.i2.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.e4(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.M()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bo.prototype={
gde:function(){return this.b},
gbO:function(a){var u=this.c
if(u==null)return""
if(C.a.a8(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbb:function(a){var u=this.d
if(u==null)return P.lX(this.a)
return u},
gbV:function(a){var u=this.f
return u==null?"":u},
gcL:function(){var u=this.r
return u==null?"":u},
bY:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a8(u,"/"))u="/"+u
s=P.kT(null,0,0,b)
return new P.bo(q,o,m,n,u,s,r.r)},
gaF:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.n
u=this.Q=new P.d2(P.lN(t==null?"":t),[u,u])
t=u}return t},
gcM:function(){return this.c!=null},
gcP:function(){return this.f!=null},
gcN:function(){return this.r!=null},
h:function(a){var u,t,s,r=this,q=r.y
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
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.U(b).$ikN)if(s.a==b.gbf())if(s.c!=null===b.gcM())if(s.b==b.gde())if(s.gbO(s)==b.gbO(b))if(s.gbb(s)==b.gbb(b))if(s.e===b.gd2(b)){u=s.f
t=u==null
if(!t===b.gcP()){if(t)u=""
if(u===b.gbV(b)){u=s.r
t=u==null
if(!t===b.gcN()){if(t)u=""
u=u===b.gcL()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gH:function(a){var u=this.z
return u==null?this.z=C.a.gH(this.h(0)):u},
$ikN:1,
gbf:function(){return this.a},
gd2:function(a){return this.e}}
P.iV.prototype={
$1:function(a){throw H.c(P.P("Invalid port",this.a,this.b+1))}}
P.iW.prototype={
$1:function(a){return P.iZ(C.R,a,C.e,!1)}}
P.iY.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.iZ(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.iZ(C.h,b,C.e,!0))}}}
P.iX.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aR(b),t=this.a;u.C();)t.$2(a,u.gJ(u))}}
P.i_.prototype={
gdd:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.b(o,0)
u=q.a
o=o[0]+1
t=C.a.b8(u,"?",o)
s=u.length
if(t>=0){r=P.c8(u,t+1,s,C.j,!1)
s=t}else r=p
return q.c=new P.ix("data",p,p,p,P.c8(u,o,s,C.v,!1),r,p)},
h:function(a){var u,t=this.b
if(0>=t.length)return H.b(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.j5.prototype={
$1:function(a){return new Uint8Array(96)}}
P.j4.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.b(u,a)
u=u[a]
J.mO(u,0,96,b)
return u},
$S:15}
P.j6.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.I(b,s)^96
if(r>=t)return H.b(a,r)
a[r]=c}}}
P.j7.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.I(b,0),t=C.a.I(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.b(a,r)
a[r]=c}}}
P.iL.prototype={
gcM:function(){return this.c>0},
gcO:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.q()
t=this.e
if(typeof t!=="number")return H.h(t)
t=u+1<t
u=t}else u=!1
return u},
gcP:function(){var u=this.f
if(typeof u!=="number")return u.M()
return u<this.r},
gcN:function(){return this.r<this.a.length},
gcm:function(){return this.b===4&&C.a.a8(this.a,"http")},
gcn:function(){return this.b===5&&C.a.a8(this.a,"https")},
gbf:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gcm())q=t.x="http"
else if(t.gcn()){t.x="https"
q="https"}else if(q===4&&C.a.a8(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a8(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
gde:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gbO:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbb:function(a){var u,t=this
if(t.gcO()){u=t.d
if(typeof u!=="number")return u.q()
return P.e4(C.a.v(t.a,u+1,t.e),null,null)}if(t.gcm())return 80
if(t.gcn())return 443
return 0},
gd2:function(a){return C.a.v(this.a,this.e,this.f)},
gbV:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.M()
return u<t?C.a.v(this.a,u+1,t):""},
gcL:function(){var u=this.r,t=this.a
return u<t.length?C.a.ar(t,u+1):""},
gaF:function(){var u=this,t=u.f
if(typeof t!=="number")return t.M()
if(t>=u.r)return C.S
t=P.n
return new P.d2(P.lN(u.gbV(u)),[t,t])},
bY:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbf(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.gcO()?p.gbb(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a8(t,"/"))t="/"+t
r=P.kT(o,0,0,b)
s=p.r
q=s<l.length?C.a.ar(l,s+1):o
return new P.bo(n,k,u,j,t,r,q)},
gH:function(a){var u=this.y
return u==null?this.y=C.a.gH(this.a):u},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.U(b).$ikN&&this.a===b.h(0)},
h:function(a){return this.a},
$ikN:1}
P.ix.prototype={}
W.k.prototype={}
W.e7.prototype={
gk:function(a){return a.length}}
W.e9.prototype={
h:function(a){return String(a)}}
W.ea.prototype={
h:function(a){return String(a)}}
W.b7.prototype={$ib7:1}
W.b9.prototype={
dg:function(a,b,c){var u=a.getContext(b,P.ol(c))
return u},
$ib9:1}
W.aS.prototype={
gk:function(a){return a.length}}
W.ex.prototype={
gk:function(a){return a.length}}
W.F.prototype={$iF:1}
W.bA.prototype={
gk:function(a){return a.length}}
W.ey.prototype={}
W.ab.prototype={}
W.aq.prototype={}
W.ez.prototype={
gk:function(a){return a.length}}
W.eA.prototype={
gk:function(a){return a.length}}
W.eC.prototype={
gk:function(a){return a.length}}
W.eD.prototype={
h:function(a){return String(a)}}
W.cp.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[[P.a3,P.a5]]},
$iw:1,
$aw:function(){return[[P.a3,P.a5]]},
$ap:function(){return[[P.a3,P.a5]]},
$il:1,
$al:function(){return[[P.a3,P.a5]]},
$io:1,
$ao:function(){return[[P.a3,P.a5]]}}
W.cq.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaq(a))+" x "+H.f(this.gan(a))},
A:function(a,b){var u
if(b==null)return!1
u=J.U(b)
return!!u.$ia3&&a.left===u.gba(b)&&a.top===u.gbd(b)&&this.gaq(a)===u.gaq(b)&&this.gan(a)===u.gan(b)},
gH:function(a){return W.lW(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(this.gaq(a)),C.d.gH(this.gan(a)))},
gcG:function(a){return a.bottom},
gan:function(a){return a.height},
gba:function(a){return a.left},
gd7:function(a){return a.right},
gbd:function(a){return a.top},
gaq:function(a){return a.width},
$ia3:1,
$aa3:function(){return[P.a5]}}
W.eE.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[P.n]},
$iw:1,
$aw:function(){return[P.n]},
$ap:function(){return[P.n]},
$il:1,
$al:function(){return[P.n]},
$io:1,
$ao:function(){return[P.n]}}
W.eF.prototype={
gk:function(a){return a.length}}
W.iv.prototype={
gk:function(a){return this.b.length},
i:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
l:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.b(u,b)
this.a.replaceChild(c,u[b])},
j:function(a,b){this.a.appendChild(b)
return b},
gX:function(a){var u=this.c_(this)
return new J.aa(u,u.length)},
$am:function(){return[W.S]},
$ap:function(){return[W.S]},
$al:function(){return[W.S]},
$ao:function(){return[W.S]}}
W.S.prototype={
gbI:function(a){return new W.iv(a,a.children)},
gcI:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.M()
if(s<0)s=-s*0
if(typeof r!=="number")return r.M()
if(r<0)r=-r*0
return new P.a3(u,t,s,r,[P.a5])},
h:function(a){return a.localName},
$iS:1}
W.i.prototype={$ii:1}
W.e.prototype={
fo:function(a,b,c,d){if(c!=null)this.dD(a,b,c,!1)},
dD:function(a,b,c,d){return a.addEventListener(b,H.bs(c,1),!1)}}
W.aj.prototype={$iaj:1}
W.bD.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aj]},
$iw:1,
$aw:function(){return[W.aj]},
$ap:function(){return[W.aj]},
$il:1,
$al:function(){return[W.aj]},
$io:1,
$ao:function(){return[W.aj]},
$ibD:1}
W.eO.prototype={
gk:function(a){return a.length}}
W.eS.prototype={
gk:function(a){return a.length}}
W.ar.prototype={$iar:1}
W.eV.prototype={
gk:function(a){return a.length}}
W.bF.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$ap:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$io:1,
$ao:function(){return[W.B]}}
W.bG.prototype={$ibG:1}
W.ep.prototype={$iS:1,$iB:1}
W.be.prototype={$ibe:1}
W.fD.prototype={
h:function(a){return String(a)}}
W.fK.prototype={
gk:function(a){return a.length}}
W.bM.prototype={$ibM:1}
W.fL.prototype={
i:function(a,b){return P.aN(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
gaa:function(a){var u=H.d([],[P.n])
this.u(a,new W.fM(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.t("Not supported"))},
$aa1:function(){return[P.n,null]},
$iQ:1,
$aQ:function(){return[P.n,null]}}
W.fM.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fN.prototype={
i:function(a,b){return P.aN(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
gaa:function(a){var u=H.d([],[P.n])
this.u(a,new W.fO(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.t("Not supported"))},
$aa1:function(){return[P.n,null]},
$iQ:1,
$aQ:function(){return[P.n,null]}}
W.fO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.as.prototype={$ias:1}
W.fP.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.as]},
$iw:1,
$aw:function(){return[W.as]},
$ap:function(){return[W.as]},
$il:1,
$al:function(){return[W.as]},
$io:1,
$ao:function(){return[W.as]}}
W.at.prototype={$iat:1}
W.iu.prototype={
l:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.b(t,b)
u.replaceChild(c,t[b])},
gX:function(a){var u=this.a.childNodes
return new W.ct(u,u.length)},
gk:function(a){return this.a.childNodes.length},
i:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
$am:function(){return[W.B]},
$ap:function(){return[W.B]},
$al:function(){return[W.B]},
$ao:function(){return[W.B]}}
W.B.prototype={
hd:function(a,b){var u,t
try{u=a.parentNode
J.mK(u,b,a)}catch(t){H.b4(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.dk(a):u},
eV:function(a,b,c){return a.replaceChild(b,c)},
$iB:1}
W.cH.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$ap:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$io:1,
$ao:function(){return[W.B]}}
W.au.prototype={$iau:1,
gk:function(a){return a.length}}
W.h1.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.au]},
$iw:1,
$aw:function(){return[W.au]},
$ap:function(){return[W.au]},
$il:1,
$al:function(){return[W.au]},
$io:1,
$ao:function(){return[W.au]}}
W.hb.prototype={
i:function(a,b){return P.aN(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
gaa:function(a){var u=H.d([],[P.n])
this.u(a,new W.hc(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.t("Not supported"))},
$aa1:function(){return[P.n,null]},
$iQ:1,
$aQ:function(){return[P.n,null]}}
W.hc.prototype={
$2:function(a,b){return this.a.push(a)}}
W.he.prototype={
gk:function(a){return a.length}}
W.aw.prototype={$iaw:1}
W.hn.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aw]},
$iw:1,
$aw:function(){return[W.aw]},
$ap:function(){return[W.aw]},
$il:1,
$al:function(){return[W.aw]},
$io:1,
$ao:function(){return[W.aw]}}
W.ax.prototype={$iax:1}
W.ho.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ax]},
$iw:1,
$aw:function(){return[W.ax]},
$ap:function(){return[W.ax]},
$il:1,
$al:function(){return[W.ax]},
$io:1,
$ao:function(){return[W.ax]}}
W.ay.prototype={$iay:1,
gk:function(a){return a.length}}
W.hs.prototype={
i:function(a,b){return a.getItem(b)},
l:function(a,b,c){a.setItem(b,c)},
u:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaa:function(a){var u=H.d([],[P.n])
this.u(a,new W.ht(u))
return u},
gk:function(a){return a.length},
$aa1:function(){return[P.n,P.n]},
$iQ:1,
$aQ:function(){return[P.n,P.n]}}
W.ht.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ak.prototype={$iak:1}
W.az.prototype={$iaz:1}
W.al.prototype={$ial:1}
W.hy.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.al]},
$iw:1,
$aw:function(){return[W.al]},
$ap:function(){return[W.al]},
$il:1,
$al:function(){return[W.al]},
$io:1,
$ao:function(){return[W.al]}}
W.hz.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.az]},
$iw:1,
$aw:function(){return[W.az]},
$ap:function(){return[W.az]},
$il:1,
$al:function(){return[W.az]},
$io:1,
$ao:function(){return[W.az]}}
W.hB.prototype={
gk:function(a){return a.length}}
W.aA.prototype={$iaA:1}
W.bj.prototype={$ibj:1}
W.hE.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aA]},
$iw:1,
$aw:function(){return[W.aA]},
$ap:function(){return[W.aA]},
$il:1,
$al:function(){return[W.aA]},
$io:1,
$ao:function(){return[W.aA]}}
W.hF.prototype={
gk:function(a){return a.length}}
W.b_.prototype={}
W.i4.prototype={
h:function(a){return String(a)}}
W.il.prototype={
gk:function(a){return a.length}}
W.b0.prototype={
gfF:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.t("deltaY is not supported"))},
gfE:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.t("deltaX is not supported"))},
$ib0:1}
W.bZ.prototype={
eX:function(a,b){return a.requestAnimationFrame(H.bs(b,1))},
dV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.iw.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.F]},
$iw:1,
$aw:function(){return[W.F]},
$ap:function(){return[W.F]},
$il:1,
$al:function(){return[W.F]},
$io:1,
$ao:function(){return[W.F]}}
W.dc.prototype={
h:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
A:function(a,b){var u
if(b==null)return!1
u=J.U(b)
return!!u.$ia3&&a.left===u.gba(b)&&a.top===u.gbd(b)&&a.width===u.gaq(b)&&a.height===u.gan(b)},
gH:function(a){return W.lW(C.d.gH(a.left),C.d.gH(a.top),C.d.gH(a.width),C.d.gH(a.height))},
gan:function(a){return a.height},
gaq:function(a){return a.width}}
W.iB.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ar]},
$iw:1,
$aw:function(){return[W.ar]},
$ap:function(){return[W.ar]},
$il:1,
$al:function(){return[W.ar]},
$io:1,
$ao:function(){return[W.ar]}}
W.dv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.B]},
$iw:1,
$aw:function(){return[W.B]},
$ap:function(){return[W.B]},
$il:1,
$al:function(){return[W.B]},
$io:1,
$ao:function(){return[W.B]}}
W.iM.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ay]},
$iw:1,
$aw:function(){return[W.ay]},
$ap:function(){return[W.ay]},
$il:1,
$al:function(){return[W.ay]},
$io:1,
$ao:function(){return[W.ay]}}
W.iQ.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a[b]},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){if(b<0||b>=a.length)return H.b(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ak]},
$iw:1,
$aw:function(){return[W.ak]},
$ap:function(){return[W.ak]},
$il:1,
$al:function(){return[W.ak]},
$io:1,
$ao:function(){return[W.ak]}}
W.iz.prototype={}
W.iA.prototype={
$1:function(a){return this.a.$1(a)}}
W.H.prototype={
gX:function(a){return new W.ct(a,this.gk(a))}}
W.ct.prototype={
C:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.l8(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gJ:function(a){return this.d}}
W.db.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.df.prototype={}
W.dg.prototype={}
W.di.prototype={}
W.dj.prototype={}
W.dk.prototype={}
W.dl.prototype={}
W.dr.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.du.prototype={}
W.dw.prototype={}
W.dx.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.c3.prototype={}
W.c4.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dI.prototype={}
W.dM.prototype={}
W.dN.prototype={}
W.c6.prototype={}
W.c7.prototype={}
W.dP.prototype={}
W.dQ.prototype={}
W.dU.prototype={}
W.dV.prototype={}
W.dW.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
P.iN.prototype={
bN:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
aY:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.U(a)
if(!!u.$ia8)return new Date(a.a)
if(!!u.$ino)throw H.c(P.hW("structured clone of RegExp"))
if(!!u.$iaj)return a
if(!!u.$ib7)return a
if(!!u.$ibD)return a
if(!!u.$ibG)return a
if(!!u.$ibO||!!u.$iaY||!!u.$ibM)return a
if(!!u.$iQ){t=p.bN(a)
s=p.b
r=s.length
if(t>=r)return H.b(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.b(s,t)
s[t]=q
u.u(a,new P.iO(o,p))
return o.a}if(!!u.$io){t=p.bN(a)
o=p.b
if(t>=o.length)return H.b(o,t)
q=o[t]
if(q!=null)return q
return p.fC(a,t)}if(!!u.$in3){t=p.bN(a)
u=p.b
s=u.length
if(t>=s)return H.b(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.b(u,t)
u[t]=q
p.fQ(a,new P.iP(o,p))
return o.b}throw H.c(P.hW("structured clone of other type"))},
fC:function(a,b){var u,t=J.an(a),s=t.gk(a),r=new Array(s),q=this.b
if(b>=q.length)return H.b(q,b)
q[b]=r
if(typeof s!=="number")return H.h(s)
u=0
for(;u<s;++u){q=this.aY(t.i(a,u))
if(u>=r.length)return H.b(r,u)
r[u]=q}return r}}
P.iO.prototype={
$2:function(a,b){this.a.a[a]=this.b.aY(b)},
$S:4}
P.iP.prototype={
$2:function(a,b){this.a.b[a]=this.b.aY(b)},
$S:4}
P.ja.prototype={
$2:function(a,b){this.a[a]=b},
$S:4}
P.dL.prototype={
fQ:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.eP.prototype={
gb2:function(){var u=this.b,t=H.md(u,"p",0)
return new H.bJ(new H.io(u,new P.eQ(),[t]),new P.eR(),[t,W.S])},
l:function(a,b,c){var u=this.gb2()
J.mP(u.b.$1(J.kw(u.a,b)),c)},
j:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ai(this.gb2().a)},
i:function(a,b){var u=this.gb2()
return u.b.$1(J.kw(u.a,b))},
gX:function(a){var u=P.kI(this.gb2(),!1,W.S)
return new J.aa(u,u.length)},
$am:function(){return[W.S]},
$ap:function(){return[W.S]},
$al:function(){return[W.S]},
$ao:function(){return[W.S]}}
P.eQ.prototype={
$1:function(a){return!!J.U(a).$iS}}
P.eR.prototype={
$1:function(a){return H.a0(a,"$iS")}}
P.iG.prototype={
gd7:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.h(t)
return u+t},
gcG:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.h(t)
return u+t},
h:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.U(b)
if(!!u.$ia3){t=q.a
if(t==u.gba(b)){s=q.b
if(s==u.gbd(b)){r=q.c
if(typeof t!=="number")return t.q()
if(typeof r!=="number")return H.h(r)
if(t+r===u.gd7(b)){t=q.d
if(typeof s!=="number")return s.q()
if(typeof t!=="number")return H.h(t)
u=s+t===u.gcG(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gH:function(a){var u=this,t=u.a,s=J.cg(t),r=u.b,q=J.cg(r),p=u.c
if(typeof t!=="number")return t.q()
if(typeof p!=="number")return H.h(p)
p=C.c.gH(t+p)
t=u.d
if(typeof r!=="number")return r.q()
if(typeof t!=="number")return H.h(t)
t=C.c.gH(r+t)
return P.nO(P.iD(P.iD(P.iD(P.iD(0,s),q),p),t))}}
P.a3.prototype={
gba:function(a){return this.a},
gbd:function(a){return this.b},
gaq:function(a){return this.c},
gan:function(a){return this.d}}
P.aE.prototype={$iaE:1}
P.fw.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$im:1,
$am:function(){return[P.aE]},
$ap:function(){return[P.aE]},
$il:1,
$al:function(){return[P.aE]},
$io:1,
$ao:function(){return[P.aE]}}
P.aI.prototype={$iaI:1}
P.fY.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$im:1,
$am:function(){return[P.aI]},
$ap:function(){return[P.aI]},
$il:1,
$al:function(){return[P.aI]},
$io:1,
$ao:function(){return[P.aI]}}
P.h3.prototype={
gk:function(a){return a.length}}
P.hv.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$im:1,
$am:function(){return[P.n]},
$ap:function(){return[P.n]},
$il:1,
$al:function(){return[P.n]},
$io:1,
$ao:function(){return[P.n]}}
P.j.prototype={
gbI:function(a){return new P.eP(a,new W.iu(a))}}
P.aK.prototype={$iaK:1}
P.hG.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return a.getItem(b)},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$im:1,
$am:function(){return[P.aK]},
$ap:function(){return[P.aK]},
$il:1,
$al:function(){return[P.aK]},
$io:1,
$ao:function(){return[P.aK]}}
P.dm.prototype={}
P.dn.prototype={}
P.dy.prototype={}
P.dz.prototype={}
P.dJ.prototype={}
P.dK.prototype={}
P.dR.prototype={}
P.dS.prototype={}
P.bk.prototype={$im:1,
$am:function(){return[P.r]},
$il:1,
$al:function(){return[P.r]},
$io:1,
$ao:function(){return[P.r]}}
P.ed.prototype={
gk:function(a){return a.length}}
P.ee.prototype={
i:function(a,b){return P.aN(a.get(b))},
u:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.aN(u.value[1]))}},
gaa:function(a){var u=H.d([],[P.n])
this.u(a,new P.ef(u))
return u},
gk:function(a){return a.size},
l:function(a,b,c){throw H.c(P.t("Not supported"))},
$aa1:function(){return[P.n,null]},
$iQ:1,
$aQ:function(){return[P.n,null]}}
P.ef.prototype={
$2:function(a,b){return this.a.push(a)}}
P.eg.prototype={
gk:function(a){return a.length}}
P.b6.prototype={}
P.fZ.prototype={
gk:function(a){return a.length}}
P.da.prototype={}
P.hp.prototype={
gk:function(a){return a.length},
i:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.I(b,a,null,null,null))
return P.aN(a.item(b))},
l:function(a,b,c){throw H.c(P.t("Cannot assign element of immutable List."))},
K:function(a,b){return this.i(a,b)},
$im:1,
$am:function(){return[[P.Q,,,]]},
$ap:function(){return[[P.Q,,,]]},
$il:1,
$al:function(){return[[P.Q,,,]]},
$io:1,
$ao:function(){return[[P.Q,,,]]}}
P.dF.prototype={}
P.dG.prototype={}
K.e8.prototype={
aB:function(a,b){return!0},
h:function(a){return"all"}}
K.cu.prototype={
aB:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)if(u[s].aB(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.cD.prototype={}
K.aH.prototype={
aB:function(a,b){return!this.dj(0,b)},
h:function(a){return"!["+this.c4(0)+"]"}}
K.hf.prototype={
dq:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.A("May not create a Set with zero characters."))
u=P.r
t=new H.ac([u,P.cc])
for(s=new H.bI(a,a.gk(a));s.C();)t.l(0,s.d,!0)
r=P.kI(t.gaa(t),!0,u)
if(!!r.immutable$list)H.z(P.t("sort"))
H.nv(r,J.o8())
this.a=r},
aB:function(a,b){return C.b.a3(this.a,b)},
h:function(a){return P.bV(this.a,0,null)}}
L.cQ.prototype={
E:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cY(this.a.P(0,b))
r.a=H.d([],[K.cD])
r.c=!1
this.c.push(r)
return r},
fL:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.aB(0,a))return r}return},
h:function(a){return this.b},
cu:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.a3(0,n))o+=" (consume)"
for(n=p.d.c,n=n.gaa(n),n=n.gX(n);n.C();){t=n.gJ(n)
o+="\n"
s=p.d.c.i(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.a3(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.y)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cV.prototype={
h:function(a){var u=H.mo(this.b,"\n","\\n"),t=H.mo(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cW.prototype={
h:function(a){return this.b}}
L.hC.prototype={
P:function(a,b){var u=this.a.i(0,b)
if(u==null){u=new L.cQ(this,b)
u.c=H.d([],[L.cY])
this.a.l(0,b,u)}return u},
aX:function(a){var u,t=this.b.i(0,a)
if(t==null){t=new L.cW(a)
u=P.n
t.c=new H.ac([u,u])
this.b.l(0,a,t)}return t},
da:function(a){return this.hj(a)},
hj:function(a){var u=this
return P.oa(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$da(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.r]
e=H.d([],f)
d=H.d([],f)
c=H.d([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.bW(c,0)
else{if(!t.C()){s=3
break}l=t.d}d.push(l);++o
k=g.fL(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.bV(d,0,null)
throw H.c(P.A("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.z(P.t("removeRange"))
P.aJ(0,m,d.length)
d.splice(0,m-0)
C.b.fm(c,d)
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
if(g.d!=null){j=P.bV(e,0,null)
i=g.d
h=i.c.i(0,j)
p=new L.cV(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.a3(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nM()
case 1:return P.nN(q)}}},L.cV)},
h:function(a){var u,t=new P.T(""),s=this.d
if(s!=null)t.a=s.cu()+"\n"
for(s=this.a,s=s.ghl(s),s=s.gX(s);s.C();){u=s.gJ(s)
if(u!=this.d)t.a+=u.cu()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cY.prototype={
h:function(a){return this.b.b+": "+this.c4(0)}}
O.ba.prototype={
c5:function(a){this.a=H.d([],[a])
this.c=this.b=null},
bg:function(a,b){this.b=null
this.c=a},
eJ:function(a){return!0},
dt:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gX:function(a){var u=this.a
return new J.aa(u,u.length)},
K:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.b(u,b)
return u[b]},
j:function(a,b){var u,t,s=this,r=[H.md(s,"ba",0)]
if(s.eJ(H.d([b],r))){u=s.a
t=u.length
u.push(b)
s.dt(t,H.d([b],r))}},
$il:1}
O.bL.prototype={
gk:function(a){return this.a.length},
gD:function(){var u=this.b
return u==null?this.b=D.M():u},
as:function(){var u=this.b
if(u!=null)u.L(null)},
gai:function(a){var u=this.a
if(u.length>0)return C.b.gao(u)
else return V.fJ()},
d4:function(a){var u=this.a
if(a==null)u.push(V.fJ())
else u.push(a)
this.as()},
bU:function(){var u=this.a
if(u.length>0){u.pop()
this.as()}}}
E.ej.prototype={}
E.aU.prototype={
sc2:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gD().F(0,s.gd_())
u=s.c
if(u!=null)u.gD().j(0,s.gd_())
t=new D.u("shape",r,s.c)
t.b=!0
s.ap(t)}},
saS:function(a){var u,t,s=this
if(!J.v(s.r,a)){u=s.r
if(u!=null)u.gD().F(0,s.gcY())
if(a!=null)a.gD().j(0,s.gcY())
s.r=a
t=new D.u("mover",u,a)
t.b=!0
s.ap(t)}},
aI:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aJ(0,b,s):null
if(!J.v(q,s.x)){u=s.x
s.x=q
t=new D.u("matrix",u,q)
t.b=!0
s.ap(t)}for(r=s.y.a,r=new J.aa(r,r.length);r.C();)r.d.aI(0,b)},
aG:function(a){var u,t,s,r,q,p,o,n=this,m="Inspection",l="uniform mat4 viewMat;                                         \nuniform mat4 viewObjMatrix;                                   \nuniform mat4 projViewObjMatrix;                               \nuniform vec3 lightVec;                                        \nuniform float weightScalar;                                   \n                                                              \nattribute vec3 posAttr;                                       \nattribute vec3 normAttr;                                      \nattribute vec4 clrAttr;                                       \nattribute vec3 binmAttr;                                      \n                                                              \nvarying vec3 normal;                                          \nvarying vec4 color;                                           \nvarying vec3 litVec;                                          \nvarying vec3 camPos;                                          \n                                                              \nvoid main()                                                   \n{                                                             \n   gl_PointSize = 6.0;                                        \n   color = clrAttr;                                           \n   normal = normalize(viewObjMatrix*vec4(normAttr, 0.0)).xyz; \n   litVec = normalize((viewMat*vec4(-lightVec, 0.0)).xyz);    \n   vec3 pos = posAttr + binmAttr*weightScalar;                \n   gl_Position = projViewObjMatrix*vec4(pos, 1.0);            \n}                                                             \n",k=2929,j=a.dx,i=n.x
j.toString
if(i==null)j.a.push(j.gai(j))
else j.a.push(i.t(0,j.gai(j)))
j.as()
a.d5(n.f)
j=a.dy
u=(j&&C.b).gao(j)
if(u!=null&&n.d!=null){if(u.a==null){t=a.fr.i(0,m)
if(t==null){j=a.a
t=new A.eX(j,m)
t.dr(j,m)
t.c=l
t.d="precision mediump float;                        \n                                                \nuniform vec4 ambientClr;                        \nuniform vec4 diffuseClr;                        \n                                                \nvarying vec3 normal;                            \nvarying vec4 color;                             \nvarying vec3 litVec;                            \n                                                \nvoid main()                                     \n{                                               \n   vec3 norm = normalize(normal);               \n   float scalar = dot(norm, litVec);            \n   vec4 diffuse = diffuseClr*max(scalar, 0.0);  \n   gl_FragColor = color*(ambientClr + diffuse); \n}                                               \n"
t.e=t.ci(l,35633)
t.f=t.ci(t.d,35632)
i=j.createProgram()
t.r=i
j.attachShader(i,t.e)
j.attachShader(t.r,t.f)
j.linkProgram(t.r)
if(!j.getProgramParameter(t.r,35714)){s=j.getProgramInfoLog(t.r)
j.deleteProgram(t.r)
H.z(P.A("Failed to link shader: "+H.f(s)))}t.eZ()
t.f0()
t.z=t.x.i(0,"posAttr")
t.Q=t.x.i(0,"normAttr")
t.ch=t.x.i(0,"clrAttr")
t.cx=t.x.i(0,"binmAttr")
t.cy=H.a0(t.y.i(0,"lightVec"),"$id0")
t.db=H.a0(t.y.i(0,"ambientClr"),"$ibW")
t.dx=H.a0(t.y.i(0,"diffuseClr"),"$ibW")
t.dy=H.a0(t.y.i(0,"weightScalar"),"$id_")
t.fr=H.a0(t.y.i(0,"viewMat"),"$ibl")
t.fx=H.a0(t.y.i(0,"viewObjMatrix"),"$ibl")
t.fy=H.a0(t.y.i(0,"projViewObjMatrix"),"$ibl")
if(a.fr.bJ(0,m))H.z(P.A('Shader cache already contains a shader by the name "Inspection".'))
a.fr.l(0,m,t)}u.a=t}if(n.e==null){n.d.a9()
j=n.d
i=j.e
if(i!=null)++i.d
j.d.bG()
j.a.bG()
j=j.e
if(j!=null)j.aj(0)
j=n.d
i=j.e
if(i!=null)++i.d
j.a.fv()
j=j.e
if(j!=null)j.aj(0)
j=new Z.ck()
j.a=new H.ac([P.n,Z.cj])
n.e=j}j=u.a
i=a.a
i.useProgram(j.r)
j.x.fH()
r=u.r2
q=j.dy
q.a.uniform1f(q.d,r)
r=u.b
q=j.cy
q.toString
p=r.a
o=r.b
r=r.c
q.a.uniform3f(q.d,p,o,r)
r=a.db
r=r.gai(r)
o=j.fr
o.toString
o.bh(r.c0(0,!0))
r=a.cx
if(r==null){r=a.db
r=r.gai(r)
q=a.dx
q=a.cx=r.t(0,q.gai(q))
r=q}q=j.fx
q.toString
q.bh(r.c0(0,!0))
r=a.ch
if(r==null){r=a.z
if(r==null){r=a.cy
r=r.gai(r)
q=a.db
q=a.z=r.t(0,q.gai(q))
r=q}q=a.dx
q=a.ch=r.t(0,q.gai(q))
r=q}j=j.fy
j.toString
j.bh(r.c0(0,!0))
j=n.e
if(j instanceof Z.ck){i.blendFunc(1,1)
if(n.c==null){i.disable(k)
i.enable(3042)
i.blendFunc(1,1)
if(u.k3)u.cp(a,j,n.d,"Axis",u.gcc(),u.z,u.y)
if(u.k4)u.cp(a,j,n.d,"AABB",u.gca(),u.z,u.y)
i.enable(k)
i.blendFunc(770,771)}else{i.enable(k)
i.enable(3042)
i.blendFunc(770,771)
if(u.Q)u.a_(a,j,n.c,"shapeFill",u.gf1(),u.d,u.c)
if(u.id)u.a_(a,j,n.c,"colorFill",u.gdO(),u.x,u.r)
if(u.k1)u.a_(a,j,n.c,"txt2DColor",u.gfc(),u.x,u.r)
if(u.k2)u.a_(a,j,n.c,"weight",u.gfi(),u.x,u.r)
if(u.r1)u.a_(a,j,n.c,"bend1",u.gdI(),u.x,u.r)
i.disable(k)
i.blendFunc(1,1)
if(u.cx)u.a_(a,j,n.c,"vertices",u.gfg(),u.f,u.e)
if(u.fr)u.a_(a,j,n.c,"faceCenters",u.gdY(),u.f,u.e)
if(u.ch)u.a_(a,j,n.c,"wireFrame",u.gfk(),u.f,u.e)
if(u.cy)u.a_(a,j,n.c,"normals",u.geb(),u.f,u.e)
if(u.db)u.a_(a,j,n.c,"binormals",u.gdK(),u.f,u.e)
if(u.dx)u.a_(a,j,n.c,"tangentals",u.gf4(),u.f,u.e)
if(u.dy)u.a_(a,j,n.c,"textureCube",u.gfe(),u.f,u.e)
if(u.fx)u.a_(a,j,n.c,"faceNormals",u.ge_(),u.f,u.e)
if(u.fy)u.a_(a,j,n.c,"faceBinormals",u.gdW(),u.x,u.r)
if(u.go)u.a_(a,j,n.c,"faceTangentals",u.ge1(),u.x,u.r)
if(u.k3)u.a_(a,j,n.c,"Axis",u.gcc(),u.z,u.y)
if(u.k4)u.a_(a,j,n.c,"AABB",u.gca(),u.z,u.y)
i.enable(k)
i.blendFunc(770,771)}}else n.e=null
j=u.a
j.toString
i.useProgram(null)
j.x.fG()}for(j=n.y.a,j=new J.aa(j,j.length);j.C();)j.d.aG(a)
a.d3()
a.dx.bU()},
ap:function(a){var u=this.z
if(u!=null)u.L(a)},
S:function(){return this.ap(null)},
d0:function(a){this.e=null
this.ap(a)},
h2:function(){return this.d0(null)},
cZ:function(a){this.ap(a)},
h1:function(){return this.cZ(null)},
cX:function(a){this.ap(a)},
fZ:function(){return this.cX(null)},
fY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gcW(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bB()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}this.S()},
h0:function(a,b){var u,t
for(u=b.gX(b),t=this.gcW();u.C();)u.gJ(u).gD().F(0,t)
this.S()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.b8.prototype={
h:function(a){return this.b}}
E.bg.prototype={
h:function(a){return this.b}}
E.iy.prototype={}
E.h7.prototype={
dn:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.a8(Date.now(),!1)
s.y=0
s.cx=s.ch=s.z=null
u=new O.bL()
t=[V.bK]
u.a=H.d([],t)
u.gD().j(0,new E.h8(s))
s.cy=u
u=new O.bL()
u.a=H.d([],t)
u.gD().j(0,new E.h9(s))
s.db=u
u=new O.bL()
u.a=H.d([],t)
u.gD().j(0,new E.ha(s))
s.dx=u
u=H.d([],[O.cS])
s.dy=u
u.push(null)
s.fr=new H.ac([P.n,A.cN])},
d5:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gao(u):a)},
d3:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.h8.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.h9.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.z=null}}
E.ha.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.cT.prototype={
c8:function(a){this.d6()},
c7:function(){return this.c8(null)},
gfR:function(){var u,t=this,s=Date.now(),r=C.c.ah(P.li(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.a8(s,!1)
return u/r},
cq:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.t()
if(typeof r!=="number")return H.h(r)
u=C.d.b7(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.t()
t=C.d.b7(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lI(C.m,s.ghe())}},
d6:function(){if(!this.cx){this.cx=!0
var u=window
C.y.dV(u)
C.y.eX(u,W.m6(new E.hA(this),P.a5))}},
hc:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.cq()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.a8(r,!1)
s.y=P.li(r-s.r.a).a*0.000001
r=s.cy
C.b.sk(r.a,0)
r.as()
r=s.db
C.b.sk(r.a,0)
r.as()
r=s.dx
C.b.sk(r.a,0)
r.as()
r=s.dy;(r&&C.b).sk(r,0)
s.dy.push(null)
o.aG(p.e)}}catch(q){u=H.b4(q)
t=H.l0(q)
P.l3("Error: "+H.f(u))
P.l3("Stack: "+H.f(t))
throw H.c(u)}}}
E.hA.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.hc()}}}
Z.d8.prototype={}
Z.ci.prototype={
bE:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.b4(s)
t=P.A('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.f(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.im.prototype={}
Z.cj.prototype={
b6:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
bE:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].bE(a)},
hk:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aG:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.b(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
d1:function(a){this.bE(a)
this.aG(a)
this.hk(a)},
h:function(a){var u,t,s,r,q=[P.n],p=H.d([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)p.push(u[s].h(0))
r=H.d([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a6(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.b.E(p,", ")+"\nAttrs:   "+C.b.E(r,", ")}}
Z.ck.prototype={}
Z.bd.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.bT(this.c))+"'")+"]"}}
Z.bY.prototype={
gc3:function(a){var u=this.a,t=(u&$.aQ().a)!==0?3:0
if((u&$.aP().a)!==0)t+=3
if((u&$.aO().a)!==0)t+=3
if((u&$.bu().a)!==0)t+=2
if((u&$.bv().a)!==0)t+=3
if((u&$.b5().a)!==0)t+=3
if((u&$.cf().a)!==0)t+=4
if((u&$.bw().a)!==0)++t
return(u&$.bt().a)!==0?t+4:t},
fs:function(a){var u,t=$.aQ(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.aP()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.aO()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bu()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bv()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bw()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bt()
if((s&t.a)!==0)if(u===a)return t
return $.mF()},
A:function(a,b){if(b==null)return!1
if(!(b instanceof Z.bY))return!1
return this.a===b.a},
h:function(a){var u=H.d([],[P.n]),t=this.a
if((t&$.aQ().a)!==0)u.push("Pos")
if((t&$.aP().a)!==0)u.push("Norm")
if((t&$.aO().a)!==0)u.push("Binm")
if((t&$.bu().a)!==0)u.push("Txt2D")
if((t&$.bv().a)!==0)u.push("TxtCube")
if((t&$.b5().a)!==0)u.push("Clr3")
if((t&$.cf().a)!==0)u.push("Clr4")
if((t&$.bw().a)!==0)u.push("Weight")
if((t&$.bt().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.E(u,"|")}}
D.em.prototype={}
D.bB.prototype={
j:function(a,b){var u=this.a;(u==null?this.a=H.d([],[{func:1,ret:-1,args:[D.Y]}]):u).push(b)},
F:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.a3(s,b)
if(s===!0){s=t.a
u=(s&&C.b).F(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.a3(s,b)
if(s===!0){s=t.b
u=(s&&C.b).F(s,b)||u}return u},
L:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Y()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.u(P.kI(u,!0,{func:1,ret:-1,args:[D.Y]}),new D.eL(q))
u=r.b
if(u!=null){r.b=H.d([],[{func:1,ret:-1,args:[D.Y]}])
C.b.u(u,new D.eM(q))}return!0},
aj:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.L(u)}}}}
D.eL.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.eM.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Y.prototype={}
D.cw.prototype={}
D.cx.prototype={}
D.u.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.cl.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cl))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.cB.prototype={
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cB))return!1
if(this.a!=b.a)return!1
if(!this.b.A(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.f(this.a)}}
X.fv.prototype={
h8:function(a){this.c=a.b
this.d.j(0,a.a)
return!1},
h4:function(a){this.c=a.b
this.d.F(0,a.a)
return!1}}
X.cC.prototype={}
X.fE.prototype={
aK:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.t()
u=b.b
t=q.ch
if(typeof u!=="number")return u.t()
s=o.q(0,new V.R(n*m,u*t))
t=q.a.gaz()
r=new X.aG(a,V.av(),q.x,t,s)
r.b=!0
q.z=new P.a8(p,!1)
q.x=s
return r},
bT:function(a,b){this.r=a.a
return!1},
aU:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.dh()
if(typeof u!=="number")return u.be()
this.r=(u&~t)>>>0
return!1},
aT:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.aK(a,b))
return!0},
h9:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaz()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.t()
q=a.b
p=o.cy
if(typeof q!=="number")return q.t()
t=new X.bN(new V.G(s*r,q*p),u,t)
t.b=!0
n.L(t)
return!0},
ey:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.cC(c,r.a.gaz(),b)
s.b=!0
t.L(s)
r.y=new P.a8(u,!1)
r.x=V.av()}}
X.ad.prototype={
A:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.ad))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.aG.prototype={}
X.fQ.prototype={
bn:function(a,b,c){var u=this,t=new P.a8(Date.now(),!1),s=u.a.gaz(),r=new X.aG(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
bT:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.L(this.bn(a,b,!0))
return!0},
aU:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.dh()
if(typeof t!=="number")return t.be()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.L(u.bn(a,b,!0))
return!0},
aT:function(a,b){var u=this.d
if(u==null)return!1
u.L(this.bn(a,b,!1))
return!0},
ha:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaz()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.t()
r=a.b
q=p.ch
if(typeof r!=="number")return r.t()
u=new X.bN(new V.G(t*s,r*q),u,b)
u.b=!0
o.L(u)
return!0},
gcJ:function(){var u=this.b
return u==null?this.b=D.M():u},
gdc:function(){var u=this.c
return u==null?this.c=D.M():u},
gcV:function(){var u=this.d
return u==null?this.d=D.M():u}}
X.bN.prototype={}
X.h2.prototype={}
X.cX.prototype={}
X.hD.prototype={
aK:function(a,b){var u=this,t=new P.a8(Date.now(),!1),s=a.length>0?a[0]:V.av(),r=u.a.gaz(),q=new X.cX(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
h7:function(a){var u=this.b
if(u==null)return!1
u.L(this.aK(a,!0))
return!0},
h5:function(a){var u=this.c
if(u==null)return!1
u.L(this.aK(a,!0))
return!0},
h6:function(a){var u=this.d
if(u==null)return!1
u.L(this.aK(a,!1))
return!0}}
X.d4.prototype={
gaz:function(){var u=this.a,t=C.l.gcI(u).c
t.toString
u=C.l.gcI(u).d
u.toString
return V.lC(0,0,t,u)},
cg:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cB(u,new X.ad(t,a.altKey,a.shiftKey))},
ax:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
bB:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.ad(t,a.altKey,a.shiftKey)},
am:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.B()
u=t.top
if(typeof r!=="number")return r.B()
return new V.R(s-q,r-u)},
aL:function(a){return new V.G(a.movementX,a.movementY)},
bx:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.d([],[V.R])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
q=C.d.ae(r.pageX)
C.d.ae(r.pageY)
p=o.left
C.d.ae(r.pageX)
n.push(new V.R(q-p,C.d.ae(r.pageY)-o.top))}return n},
al:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cl(u,new X.ad(t,a.altKey,a.shiftKey))},
bo:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.B()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.B()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
es:function(a){this.f=!0},
eg:function(a){this.f=!1},
em:function(a){if(this.f&&this.bo(a))a.preventDefault()},
ex:function(a){var u
if(!this.f)return
u=this.cg(a)
this.b.h8(u)},
ev:function(a){var u
if(!this.f)return
u=this.cg(a)
this.b.h4(u)},
eA:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ax(a)
if(r.x){u=r.al(a)
t=r.aL(a)
if(r.d.bT(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.al(a)
s=r.am(a)
if(r.c.bT(u,s))a.preventDefault()},
eE:function(a){var u,t,s,r=this
r.ax(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aU(u,t))a.preventDefault()
return}if(r.r)return
s=r.am(a)
if(r.c.aU(u,s))a.preventDefault()},
eq:function(a){var u,t,s,r=this
if(!r.bo(a)){r.ax(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aU(u,t))a.preventDefault()
return}if(r.r)return
s=r.am(a)
if(r.c.aU(u,s))a.preventDefault()}},
eC:function(a){var u,t,s,r=this
r.ax(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.am(a)
if(r.c.aT(u,s))a.preventDefault()},
eo:function(a){var u,t,s,r=this
if(!r.bo(a)){r.ax(a)
u=r.al(a)
if(r.x){t=r.aL(a)
if(r.d.aT(u,t))a.preventDefault()
return}if(r.r)return
s=r.am(a)
if(r.c.aT(u,s))a.preventDefault()}},
eG:function(a){var u,t,s=this
s.ax(a)
u=new V.G((a&&C.x).gfE(a),C.x.gfF(a)).t(0,s.Q)
if(s.x){if(s.d.h9(u))a.preventDefault()
return}if(s.r)return
t=s.am(a)
if(s.c.ha(u,t))a.preventDefault()},
eI:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.al(s.y)
t=s.am(s.y)
s.d.ey(u,t,r)}},
eR:function(a){var u,t=this
t.a.focus()
t.f=!0
t.bB(a)
u=t.bx(a)
if(t.e.h7(u))a.preventDefault()},
eN:function(a){var u
this.bB(a)
u=this.bx(a)
if(this.e.h5(u))a.preventDefault()},
eP:function(a){var u
this.bB(a)
u=this.bx(a)
if(this.e.h6(u))a.preventDefault()}}
V.a7.prototype={
q:function(a,b){var u=this.a+b.a,t=this.b+b.b,s=this.c+b.c
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.a7(u,t,s)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.C.prototype={
c_:function(a){var u=this
return H.d([u.a,u.b,u.c,u.d],[P.J])},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.C))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.x(u.a,3,0)+", "+V.x(u.b,3,0)+", "+V.x(u.c,3,0)+", "+V.x(u.d,3,0)+"]"}}
V.eK.prototype={}
V.bK.prototype={
c0:function(a,b){var u=this,t=H.d([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
t:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=a5.a,a7=b3.a,a8=a5.b,a9=b3.e,b0=a5.c,b1=b3.y
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
if(typeof c!=="number")return c.t()
b=a5.z
if(typeof b!=="number")return b.t()
a=a5.Q
if(typeof a!=="number")return a.t()
a0=a5.ch
a1=a5.cx
a2=a5.cy
a3=a5.db
a4=a5.dx
return V.aF(a6*a7+a8*a9+b0*b1+u*t,a6*s+a8*r+b0*q+u*p,a6*o+a8*n+b0*m+u*l,a6*k+a8*j+b0*i+u*h,g*a7+f*a9+e*b1+d*t,g*s+f*r+e*q+d*p,g*o+f*n+e*m+d*l,g*k+f*j+e*i+d*h,c*a7+b*a9+a*b1+a0*t,c*s+b*r+a*q+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,a1*a7+a2*a9+a3*b1+a4*t,a1*s+a2*r+a3*q+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h)},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.bK))return!1
u=b.a
t=$.D()
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
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
u=b.z
t=q.z
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=q.Q
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-q.ch)<s))return!1
if(!(Math.abs(b.cx-q.cx)<s))return!1
if(!(Math.abs(b.cy-q.cy)<s))return!1
if(!(Math.abs(b.db-q.db)<s))return!1
if(!(Math.abs(b.dx-q.dx)<s))return!1
return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.jk(H.d([p.a,p.e,p.y,p.cx],o),3,0),m=V.jk(H.d([p.b,p.f,p.z,p.cy],o),3,0),l=V.jk(H.d([p.c,p.r,p.Q,p.db],o),3,0),k=V.jk(H.d([p.d,p.x,p.ch,p.dx],o),3,0)
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
O:function(){return this.G("")}}
V.R.prototype={
q:function(a,b){return new V.R(this.a+b.a,this.b+b.b)},
B:function(a,b){return new V.R(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.av()
return new V.R(this.a/b,this.b/b)},
A:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.R))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.E.prototype={
q:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
return new V.E(this.a+u,this.b+t,s+r)},
B:function(a,b){var u=this.c,t=b.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
return new V.E(this.a-b.a,this.b-b.b,u-t)},
t:function(a,b){var u=this.c
if(typeof u!=="number")return u.t()
return new V.E(this.a*b,this.b*b,u*b)},
p:function(a,b){var u
if(Math.abs(b-0)<$.D().a)return V.lv()
u=this.c
if(typeof u!=="number")return u.p()
return new V.E(this.a/b,this.b/b,u/b)},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.E))return!1
u=b.a
t=$.D()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.a2.prototype={
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a2))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.x(u.a,3,0)+", "+V.x(u.b,3,0)+", "+V.x(u.c,3,0)+", "+V.x(u.d,3,0)+"]"}}
V.cM.prototype={
ga7:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.cM))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.x(u.a,3,0)+", "+V.x(u.b,3,0)+", "+V.x(u.c,3,0)+", "+V.x(u.d,3,0)+"]"}}
V.bU.prototype={
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.bU))return!1
u=b.a
t=$.D()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
if(!(Math.abs(b.d-q.d)<s))return!1
if(!(Math.abs(b.e-q.e)<s))return!1
if(!(Math.abs(b.f-q.f)<s))return!1
return!0},
h:function(a){var u=this
return"["+V.x(u.a,3,0)+", "+V.x(u.b,3,0)+", "+V.x(u.c,3,0)+", "+V.x(u.d,3,0)+", "+V.x(u.e,3,0)+", "+V.x(u.f,3,0)+"]"}}
V.G.prototype={
aR:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.t()
if(typeof r!=="number")return H.h(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.h(t)
return s*r+u*t},
t:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.t()
if(typeof b!=="number")return H.h(b)
u=this.b
if(typeof u!=="number")return u.t()
return new V.G(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.lO
return u==null?$.lO=new V.G(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.G(u/b,t/b)},
A:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.h(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+"]"}}
V.q.prototype={
aR:function(a){return Math.sqrt(this.w(this))},
w:function(a){var u=this.c,t=a.c
if(typeof u!=="number")return u.t()
if(typeof t!=="number")return H.h(t)
return this.a*a.a+this.b*a.b+u*t},
bP:function(a,b){var u=this.a,t=this.b,s=this.c,r=a.c
if(typeof r!=="number")return r.B()
if(typeof s!=="number")return H.h(s)
return new V.q(u+b*(a.a-u),t+b*(a.b-t),s+b*(r-s))},
ad:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof p!=="number")return H.h(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.t()
s=a.a
r=this.a
return new V.q(q*p-u*t,u*s-r*p,r*t-q*s)},
q:function(a,b){var u=b.a,t=b.b,s=this.c,r=b.c
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.h(r)
return new V.q(this.a+u,this.b+t,s+r)},
N:function(a){var u=this.c
if(typeof u!=="number")return u.N()
return new V.q(-this.a,-this.b,-u)},
t:function(a,b){var u=this.c
if(typeof u!=="number")return u.t()
return new V.q(this.a*b,this.b*b,u*b)},
p:function(a,b){var u
if(Math.abs(b-0)<$.D().a)return V.K()
u=this.c
if(typeof u!=="number")return u.p()
return new V.q(this.a/b,this.b/b,u/b)},
cT:function(){var u,t=$.D(),s=t.a
if(!(Math.abs(0-this.a)<s))return!1
if(!(Math.abs(0-this.b)<s))return!1
u=this.c
t.toString
if(typeof u!=="number")return H.h(u)
if(!(Math.abs(0-u)<s))return!1
return!0},
A:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
if(q===b)return!0
if(!(b instanceof V.q))return!1
u=b.a
t=$.D()
s=t.a
if(!(Math.abs(u-q.a)<s))return!1
if(!(Math.abs(b.b-q.b)<s))return!1
u=b.c
r=q.c
t.toString
if(typeof u!=="number")return u.B()
if(typeof r!=="number")return H.h(r)
if(!(Math.abs(u-r)<s))return!1
return!0},
h:function(a){return"["+V.x(this.a,3,0)+", "+V.x(this.b,3,0)+", "+V.x(this.c,3,0)+"]"}}
V.aL.prototype={
aR:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.D().a){u=$.lV
return u==null?$.lV=new V.aL(0,0,0,0):u}return new V.aL(t.a/b,t.b/b,t.c/b,t.d/b)},
A:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aL))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.x(u.a,3,0)+", "+V.x(u.b,3,0)+", "+V.x(u.c,3,0)+", "+V.x(u.d,3,0)+"]"}}
U.es.prototype={
bi:function(a){var u=V.oI(a,this.c,this.b)
return u},
gD:function(){var u=this.y
return u==null?this.y=D.M():u},
R:function(a){var u=this.y
if(u!=null)u.L(a)},
sc1:function(a,b){},
sbQ:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bi(u)}s=new D.u("maximumLocation",s,t.b)
s.b=!0
t.R(s)}},
sbS:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bi(u)}s=new D.u("minimumLocation",s,t.c)
s.b=!0
t.R(s)}},
sU:function(a,b){var u,t=this
b=t.bi(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.u("location",u,b)
u.b=!0
t.R(u)}},
sbR:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.u("maximumVelocity",r,a)
r.b=!0
s.R(r)}},
sV:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.u("velocity",t,a)
t.b=!0
u.R(t)}},
sbM:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.u("dampening",u,a)
u.b=!0
this.R(u)}},
aI:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sU(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.D().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sV(u)}}}
U.cn.prototype={
gD:function(){var u=this.b
return u==null?this.b=D.M():u},
aJ:function(a,b,c){return this.a},
A:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cn))return!1
return J.v(this.a,b.a)},
h:function(a){return"Constant: "+this.a.G("          ")}}
U.bE.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.M():u},
R:function(a){var u=this.e
if(u!=null)u.L(a)},
a5:function(){return this.R(null)},
ee:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaw(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.gD()
o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.cw()
u.b=!0
this.R(u)},
eL:function(a,b){var u,t
for(u=b.gX(b),t=this.gaw();u.C();)u.gJ(u).gD().F(0,t)
u=new D.cx()
u.b=!0
this.R(u)},
aJ:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.M()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aa(r,r.length),u=null;r.C();){q=r.d
if(q!=null){t=q.aJ(0,b,c)
if(t!=null)u=u==null?t:t.t(0,u)}}s.f=u==null?V.fJ():u
r=s.e
if(r!=null)r.aj(0)}return s.f},
A:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bE))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.b(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.b(r,t)
if(!J.v(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$al:function(){return[U.a9]},
$aba:function(){return[U.a9]},
$ia9:1}
U.a9.prototype={}
U.d5.prototype={
gD:function(){var u=this.cy
return u==null?this.cy=D.M():u},
R:function(a){var u=this.cy
if(u!=null)u.L(a)},
a5:function(){return this.R(null)},
aO:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gcJ().j(0,u.gbp())
u.a.c.gcV().j(0,u.gbr())
u.a.c.gdc().j(0,u.gbt())
return!0},
bq:function(a){var u=this
if(!J.v(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.a0(a,"$iaG")
if(!n.y)return
if(n.x){u=a.d.B(0,a.y)
u=new V.G(u.a,u.b)
u=u.w(u)
t=n.r
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.B(0,a.y)
u=new V.G(t.a,t.b).t(0,2).p(0,u.ga7())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.t()
s=n.e
if(typeof s!=="number")return H.h(s)
t.sV(u*10*s)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=new V.G(s.a,s.b).t(0,2).p(0,u.ga7())
s=n.b
q=r.a
if(typeof q!=="number")return q.N()
p=n.e
if(typeof p!=="number")return H.h(p)
o=n.z
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
n.b.sV(0)
t=t.B(0,a.z)
n.Q=new V.G(t.a,t.b).t(0,2).p(0,u.ga7())}n.a5()},
bu:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.w(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.t()
s=r.e
if(typeof s!=="number")return H.h(s)
u.sV(t*10*s)
r.a5()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.M()
if(q<p){r.ch=p
u=b.y
r.b.aI(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aF(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$ia9:1}
U.d6.prototype={
gD:function(){var u=this.fx
return u==null?this.fx=D.M():u},
R:function(a){var u=this.fx
if(u!=null)u.L(a)},
a5:function(){return this.R(null)},
aO:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gcJ().j(0,s.gbp())
s.a.c.gcV().j(0,s.gbr())
s.a.c.gdc().j(0,s.gbt())
u=s.a.d
t=u.f
u=t==null?u.f=D.M():t
u.j(0,s.ge4())
u=s.a.d
t=u.d
u=t==null?u.d=D.M():t
u.j(0,s.ge6())
u=s.a.e
t=u.b
u=t==null?u.b=D.M():t
u.j(0,s.gfa())
u=s.a.e
t=u.d
u=t==null?u.d=D.M():t
u.j(0,s.gf8())
u=s.a.e
t=u.c
u=t==null?u.c=D.M():t
u.j(0,s.gf6())
return!0},
ag:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.N()
u=-u}if(this.r){if(typeof t!=="number")return t.N()
t=-t}return new V.G(u,t)},
bq:function(a){var u=this
H.a0(a,"$iaG")
if(!J.v(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bs:function(a){var u,t,s,r,q,p,o,n=this
H.a0(a,"$iaG")
if(!n.cx)return
if(n.ch){u=a.d.B(0,a.y)
u=new V.G(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.B(0,a.y)
u=n.ag(new V.G(t.a,t.b).t(0,2).p(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=n.ag(new V.G(s.a,s.b).t(0,2).p(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sU(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.B(0,a.z)
n.dx=n.ag(new V.G(t.a,t.b).t(0,2).p(0,u.ga7()))}n.a5()},
bu:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sV(-t*10*u)
r.a5()}},
e5:function(a){var u=this
if(H.a0(a,"$icC").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
e7:function(a){var u,t,s,r,q,p,o,n=this
H.a0(a,"$iaG")
if(!J.v(n.d,a.x.b))return
u=a.c
t=a.d
s=t.B(0,a.y)
r=n.ag(new V.G(s.a,s.b).t(0,2).p(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sU(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.B(0,a.z)
n.dx=n.ag(new V.G(t.a,t.b).t(0,2).p(0,u.ga7()))
n.a5()},
fb:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
f9:function(a){var u,t,s,r,q,p,o,n=this
H.a0(a,"$icX")
if(!n.cx)return
if(n.ch){u=a.d.B(0,a.y)
u=new V.G(u.a,u.b)
u=u.w(u)
t=n.Q
if(typeof t!=="number")return H.h(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.B(0,a.y)
u=n.ag(new V.G(t.a,t.b).t(0,2).p(0,u.ga7()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.N()
s=n.y
if(typeof s!=="number")return H.h(s)
t.sV(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.N()
t=n.x
if(typeof t!=="number")return H.h(t)
s.sV(-u*10*t)}else{u=a.c
t=a.d
s=t.B(0,a.y)
r=n.ag(new V.G(s.a,s.b).t(0,2).p(0,u.ga7()))
s=n.c
q=r.a
if(typeof q!=="number")return q.N()
p=n.y
if(typeof p!=="number")return H.h(p)
o=n.cy
if(typeof o!=="number")return H.h(o)
s.sU(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.N()
q=n.x
if(typeof q!=="number")return H.h(q)
s=n.db
if(typeof s!=="number")return H.h(s)
o.sU(0,-p*q+s)
n.b.sV(0)
n.c.sV(0)
t=t.B(0,a.z)
n.dx=n.ag(new V.G(t.a,t.b).t(0,2).p(0,u.ga7()))}n.a5()},
f7:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.w(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.N()
s=r.y
if(typeof s!=="number")return H.h(s)
u.sV(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.N()
u=r.x
if(typeof u!=="number")return H.h(u)
s.sV(-t*10*u)
r.a5()}},
aJ:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.M()
if(q<p){r.dy=p
u=b.y
r.c.aI(0,u)
r.b.aI(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aF(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.t(0,V.aF(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$ia9:1}
U.d7.prototype={
gD:function(){var u=this.r
return u==null?this.r=D.M():u},
R:function(a){var u=this.r
if(u!=null)u.L(a)},
aO:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.M():t
t=r.ge9()
u.j(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.M():s).j(0,t)
return!0},
ea:function(a){var u,t,s,r,q=this
if(!J.v(q.b,q.a.b.c))return
H.a0(a,"$ibN")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.t()
r=u+t*s
if(u!==r){q.d=r
u=new D.u("zoom",u,r)
u.b=!0
q.R(u)}},
aJ:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aF(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$ia9:1}
M.cr.prototype={
ak:function(a){var u=this.y
if(u!=null)u.L(a)},
du:function(){return this.ak(null)},
ei:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaf(),s=[{func:1,ret:-1,args:[D.Y]}],r=0;r<b.length;b.length===u||(0,H.y)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bB()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.d([],s):o).push(t)}}u=new D.cw()
u.b=!0
this.ak(u)},
ek:function(a,b){var u,t
for(u=b.gX(b),t=this.gaf();u.C();)u.gJ(u).gD().F(0,t)
u=new D.cx()
u.b=!0
this.ak(u)},
sd8:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gD().F(0,t.gaf())
u=t.d
t.d=a
if(a!=null)a.gD().j(0,t.gaf())
s=new D.u("technique",u,t.d)
s.b=!0
t.ak(s)}},
gD:function(){var u=this.y
return u==null?this.y=D.M():u},
aG:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.d5(a1.d)
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
if(typeof s!=="number")return H.h(s)
o=C.d.ae(p*s)
p=q.b
if(typeof r!=="number")return H.h(r)
n=C.d.ae(p*r)
p=C.d.ae(q.c*s)
a2.c=p
q=C.d.ae(q.d*r)
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
i=V.aF(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.d4(i)
t=$.ls
if(t==null){t=V.lv()
q=$.lR
if(q==null)q=$.lR=new V.q(0,1,0)
p=V.lU()
h=p.p(0,Math.sqrt(p.w(p)))
q=q.ad(h)
g=q.p(0,Math.sqrt(q.w(q)))
f=h.ad(g)
e=new V.q(t.a,t.b,t.c)
d=g.N(0).w(e)
c=f.N(0).w(e)
b=h.N(0).w(e)
t=V.aF(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ls=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.t(0,a)}a2.db.d4(a)
for(u=a1.e.a,u=new J.aa(u,u.length);u.C();)u.d.aI(0,a2)
for(u=a1.e.a,u=new J.aa(u,u.length);u.C();)u.d.aG(a2)
a1.b.toString
a2.cy.bU()
a2.db.bU()
a1.c.toString
a2.d3()}}
A.ch.prototype={}
A.ec.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
fH:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
fG:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.eX.prototype={}
A.cN.prototype={
dr:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
ci:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.A("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
eZ:function(){var u,t,s,r=this,q=H.d([],[A.ch]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.ch(p,t.name,s))}r.x=new A.ec(q)},
f0:function(){var u,t,s,r=this,q=H.d([],[A.cZ]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.h(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.fD(t.type,t.size,t.name,s))}r.y=new A.hQ(q)},
av:function(a,b,c){var u=this.a
if(a===1)return new A.hK(u,b,c)
else return A.kM(u,this.r,b,a,c)},
dS:function(a,b,c){var u=this.a
if(a===1)return new A.hT(u,b,c)
else return A.kM(u,this.r,b,a,c)},
dT:function(a,b,c){var u=this.a
if(a===1)return new A.hU(u,b,c)
else return A.kM(u,this.r,b,a,c)},
b3:function(a,b){return new P.dh(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
fD:function(a,b,c,d){var u=this
switch(a){case 5120:return u.av(b,c,d)
case 5121:return u.av(b,c,d)
case 5122:return u.av(b,c,d)
case 5123:return u.av(b,c,d)
case 5124:return u.av(b,c,d)
case 5125:return u.av(b,c,d)
case 5126:return new A.d_(u.a,c,d)
case 35664:return new A.hM(u.a,c,d)
case 35665:return new A.d0(u.a,c,d)
case 35666:return new A.bW(u.a,c,d)
case 35667:return new A.hN(u.a,c,d)
case 35668:return new A.hO(u.a,c,d)
case 35669:return new A.hP(u.a,c,d)
case 35674:return new A.hR(u.a,c,d)
case 35675:return new A.hS(u.a,c,d)
case 35676:return new A.bl(u.a,c,d)
case 35678:return u.dS(b,c,d)
case 35680:return u.dT(b,c,d)
case 35670:throw H.c(u.b3("BOOL",c))
case 35671:throw H.c(u.b3("BOOL_VEC2",c))
case 35672:throw H.c(u.b3("BOOL_VEC3",c))
case 35673:throw H.c(u.b3("BOOL_VEC4",c))
default:throw H.c(P.A("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.cZ.prototype={}
A.hQ.prototype={
i:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.O()},
O:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.y)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.hK.prototype={
h:function(a){return"Uniform1i: "+H.f(this.c)}}
A.hN.prototype={
h:function(a){return"Uniform2i: "+H.f(this.c)}}
A.hO.prototype={
h:function(a){return"Uniform3i: "+H.f(this.c)}}
A.hP.prototype={
h:function(a){return"Uniform4i: "+H.f(this.c)}}
A.hL.prototype={
h:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.d_.prototype={
h:function(a){return"Uniform1f: "+H.f(this.c)}}
A.hM.prototype={
h:function(a){return"Uniform2f: "+H.f(this.c)}}
A.d0.prototype={
h:function(a){return"Uniform3f: "+H.f(this.c)}}
A.bW.prototype={
b_:function(a){return this.a.uniform4f(this.d,a.a,a.b,a.c,a.d)},
h:function(a){return"Uniform4f: "+H.f(this.c)}}
A.hR.prototype={
h:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.hS.prototype={
h:function(a){return"UniformMat3: "+H.f(this.c)}}
A.bl.prototype={
bh:function(a){var u=new Float32Array(H.j8(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.f(this.c)}}
A.hT.prototype={
h:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.hU.prototype={
h:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.j2.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.bP(s.b,b).bP(s.d.bP(s.c,b),c)
a.sU(0,new V.E(r.a,r.b,r.c))
a.saV(r.p(0,Math.sqrt(r.w(r))))
s=1-b
u=1-c
a.sbD(new V.a2(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.ji.prototype={
$1:function(a){return 1}}
F.jc.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.je.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.h(p)
s=-s*p
u=r*p
a.sU(0,new V.E(s,u,q))
u=new V.q(s,u,q)
a.saV(u.p(0,Math.sqrt(u.w(u))))
a.sbD(new V.a2(1-c,2+c,-1,-1))}}
F.jf.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.jg.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.jv.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.q(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.w(r)))
a.sU(0,new V.E(s.a,s.b,s.c))}}
F.kp.prototype={
$2:function(a,b){return 0}}
F.kq.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.h(s)
u=a.f
t=new V.q(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.w(t))).t(0,this.b+s)
a.sU(0,new V.E(s.a,s.b,s.c))}}
F.ks.prototype={
$1:function(a){return new V.E(Math.cos(a),Math.sin(a),0)}}
F.ju.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.E(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.jd.prototype={
$3:function(a,b,c){var u,t,s,r,q,p,o=this,n=b*6.283185307179586,m=o.a,l=o.b,k=J.l7(m.$1(n),l)
l=J.l7(m.$1(n+3.141592653589793/o.c),l).B(0,k)
l=new V.q(l.a,l.b,l.c)
u=l.p(0,Math.sqrt(l.w(l)))
t=V.kP()
if(!J.v(u,t)){m=$.lS
if(m==null){m=new V.q(0,0,1)
$.lS=m
t=m}else t=m}m=u.ad(t)
s=m.p(0,Math.sqrt(m.w(m)))
m=s.ad(u)
t=m.p(0,Math.sqrt(m.w(m)))
r=c*6.283185307179586
m=Math.cos(r)
l=o.d
q=Math.sin(r)
m=t.t(0,m*l)
l=s.t(0,q*l)
q=m.c
p=l.c
if(typeof q!=="number")return q.B()
if(typeof p!=="number")return H.h(p)
a.sU(0,k.q(0,new V.E(m.a-l.a,m.b-l.b,q-p)))}}
F.jn.prototype={
$2:function(a,b){return 0}}
F.jo.prototype={
$3:function(a,b,c){var u,t,s=b*2-1,r=c*2-1
a.sU(0,new V.E(s,r,this.a.a.$2(b,c)))
u=new V.q(s,r,1)
a.saV(u.p(0,Math.sqrt(u.w(u))))
u=1-b
t=1-c
a.sbD(new V.a2(b*c,2+u*c,4+b*t,6+u*t))}}
F.aD.prototype={
aP:function(){var u=this
if(!u.gaQ()){C.b.F(u.a.a.d.b,u)
u.a.a.S()}u.by()
u.bz()
u.eU()},
aM:function(a){this.a=a
a.d.b.push(this)},
aN:function(a){this.b=a
a.d.c.push(this)},
cr:function(a){this.c=a
a.d.d.push(this)},
by:function(){var u=this.a
if(u!=null){C.b.F(u.d.b,this)
this.a=null}},
bz:function(){var u=this.b
if(u!=null){C.b.F(u.d.c,this)
this.b=null}},
eU:function(){var u=this.c
if(u!=null){C.b.F(u.d.d,this)
this.c=null}},
gaQ:function(){return this.a==null||this.b==null||this.c==null},
dF:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.K()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.cT())return
return s.p(0,Math.sqrt(s.w(s)))},
dN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.B(0,q)
r=new V.q(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.w(r)))
r=t.B(0,q)
r=new V.q(r.a,r.b,r.c)
r=s.ad(r.p(0,Math.sqrt(r.w(r))))
return r.p(0,Math.sqrt(r.w(r)))},
bH:function(){var u,t=this
if(t.d!=null)return!0
u=t.dF()
if(u==null){u=t.dN()
if(u==null)return!1}t.d=u
t.a.a.S()
return!0},
dE:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.K()
if(q!=null)s=s.q(0,q)
if(u!=null)s=s.q(0,u)
if(t!=null)s=s.q(0,t)
if(s.cT())return
return s.p(0,Math.sqrt(s.w(s)))},
dM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.D().a){l=d.B(0,g)
l=new V.q(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.w(l)))
if(s.a-t.a<0)q=q.N(0)}else{p=(l-u.b)/r
l=d.B(0,g).t(0,p).q(0,g).B(0,j)
l=new V.q(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.w(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.N(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.w(l)))
l=o.ad(q)
l=l.p(0,Math.sqrt(l.w(l))).ad(o)
q=l.p(0,Math.sqrt(l.w(l)))}return q},
bF:function(){var u,t=this
if(t.e!=null)return!0
u=t.dE()
if(u==null){u=t.dM()
if(u==null)return!1}t.e=u
t.a.a.S()
return!0},
au:function(a,b){var u=b.a
if(u==null)throw H.c(P.A("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.A("May not replace a face's vertex with a vertex attached to a different shape."))},
gfz:function(a){var u=this
if(J.v(u.a,u.b))return!0
if(J.v(u.b,u.c))return!0
if(J.v(u.c,u.a))return!0
return!1},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this
if(s.gaQ())return a+"disposed"
u=a+C.a.ac(J.a6(s.a.e),0)+", "+C.a.ac(J.a6(s.b.e),0)+", "+C.a.ac(J.a6(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.h(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.h(0)+"}"):u+"-}"},
O:function(){return this.G("")}}
F.eN.prototype={}
F.hm.prototype={
aC:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.n()
t=t.e
u=c.c
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.c
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.bf.prototype={
aP:function(){var u=this
if(!u.gaQ()){C.b.F(u.a.a.c.b,u)
u.a.a.S()}u.by()
u.bz()},
aM:function(a){this.a=a
a.c.b.push(this)},
aN:function(a){this.b=a
a.c.c.push(this)},
by:function(){var u=this.a
if(u!=null){C.b.F(u.c.b,this)
this.a=null}},
bz:function(){var u=this.b
if(u!=null){C.b.F(u.c.c,this)
this.b=null}},
gaQ:function(){return this.a==null||this.b==null},
au:function(a,b){var u=b.a
if(u==null)throw H.c(P.A("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.A("May not replace a line's vertex with a vertex attached to a different shape."))},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){if(this.gaQ())return a+"disposed"
return a+C.a.ac(J.a6(this.a.e),0)+", "+C.a.ac(J.a6(this.b.e),0)},
O:function(){return this.G("")}}
F.fx.prototype={}
F.hJ.prototype={
aC:function(a,b,c){var u,t=b.a
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
return t==u.e}else{t=b.a
t.a.a.n()
t=t.e
u=c.b
u.a.a.n()
if(t==u.e){t=b.b
t.a.a.n()
t=t.e
u=c.a
u.a.a.n()
return t==u.e}else return!1}}}
F.bR.prototype={
eY:function(a){this.a=a
a.b.b.push(this)},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ac(J.a6(u.e),0)},
O:function(){return this.G("")}}
F.ae.prototype={
gD:function(){var u=this.e
return u==null?this.e=D.M():u},
aD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.n()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){r=g[s]
h.a.j(0,r.Y())}h.a.n()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
n=p[o]
h.b.a.a.j(0,n)
F.kK(n)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.c.a
p.a.j(0,l)
p.a.j(0,k)
F.n5(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.y)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.n()
p=p.e
if(typeof p!=="number")return p.q()
p+=u
o=o.c
if(p>=o.length)return H.b(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.n()
o=o.e
if(typeof o!=="number")return o.q()
o+=u
p=p.c
if(o>=p.length)return H.b(p,o)
i=p[o]
o=h.d.a
o.a.j(0,l)
o.a.j(0,k)
o.a.j(0,i)
F.bC(l,k,i)}g=h.e
if(g!=null)g.aj(0)},
a9:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.a9()||!1
if(!t.a.a9())u=!1
s=t.e
if(s!=null)s.aj(0)
return u},
fw:function(){var u,t,s,r,q,p,o,n,m=this.cH(),l=new V.q(m.d,m.e,m.f),k=Math.sqrt(l.w(l))
if(k<=0)k=1
l=m.a
u=m.b
t=m.c
s=new F.h4()
s.a=1/k
s.b=new V.E(l,u,t)
for(r=this.a.c.length-1;r>=0;--r){l=this.a.c
if(r>=l.length)return H.b(l,r)
q=l[r]
l=s.b
u=q.f
p=l.a-u.a
o=l.b-u.b
l=l.c
u=u.c
if(typeof l!=="number")return l.B()
if(typeof u!=="number")return H.h(u)
n=l-u
u=Math.sqrt(p*p+o*o+n*n)*s.a
if(q.ch!==u){q.ch=u
l=q.a
if(l!=null){l=l.e
if(l!=null)l.L(null)}}}},
cH:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a.c,h=i.length
if(h<=0){i=$.lF
return i==null?$.lF=V.lE(0,0,0,0,0,0):i}u=i[0].f
t=V.lE(u.a,u.b,u.c,0,0,0)
for(s=h-1;s>=1;--s){u=i[s].f
r=u.a
q=u.b
u=u.c
p=t.d
o=t.a
if(r<o)p+=o-r
else{if(r>o+p)p=r-o
r=o}n=t.e
m=t.b
if(q<m)n+=m-q
else{if(q>m+n)n=q-m
q=m}l=t.f
k=t.c
if(typeof u!=="number")return u.M()
if(typeof k!=="number")return H.h(k)
if(u<k){l+=k-u
j=u}else{if(u>k+l)l=u-k
j=k}t=new V.bU(r,q,j,p,n,l)}return t},
fK:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.b(t,u)
s=t[u]
if(b.aC(0,a,s))return s}return},
eW:function(a,b){var u,t,s,r,q,p
this.a.j(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.y)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.z(P.A("May not replace a face's vertex when the point has been disposed."))
if(J.v(q,s)){r.au(s,a)
q=r.a
if(q!=null){C.b.F(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.v(r.b,s)){r.au(s,a)
q=r.b
if(q!=null){C.b.F(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.v(r.c,s)){r.au(s,a)
q=r.c
if(q!=null){C.b.F(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.L(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.i(0,0)
q=r.a
if(q==null||r.b==null)H.z(P.A("May not replace a line's vertex when the point has been disposed."))
if(J.v(q,s)){r.au(s,a)
q=r.a
if(q!=null){C.b.F(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.v(r.b,s)){r.au(s,a)
q=r.b
if(q!=null){C.b.F(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.L(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.z(P.A("May not replace a point's vertex when the point has been disposed."))
if(J.v(q,s)){if(a.a==null)H.z(P.A("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.F(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.L(null)}}this.a.F(0,s)}},
cU:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.d(n.slice(0),[H.b3(n,0)])
for(n=[F.aM];u.length!==0;){t=C.b.gfM(u)
C.b.bW(u,0)
if(t!=null){s=H.d([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.b(u,r)
q=u[r]
if(q!=null&&a.aC(0,t,q)){s.push(q)
C.b.bW(u,r)}}if(s.length>1){p=b.aD(s)
if(p!=null){o.eW(p,s)
u.push(p)}}}}o.a.n()
o.c.bc()
o.d.bc()
o.b.hb()
o.c.bX(new F.hJ())
o.d.bX(new F.hm())
n=o.e
if(n!=null)n.aj(0)},
b5:function(){this.cU(new F.bX(),new F.fW())},
fu:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=this,a=34962,a0=b.a.c.length,a1=a4.a,a2=(a1&$.aQ().a)!==0?1:0
if((a1&$.aP().a)!==0)++a2
if((a1&$.aO().a)!==0)++a2
if((a1&$.bu().a)!==0)++a2
if((a1&$.bv().a)!==0)++a2
if((a1&$.b5().a)!==0)++a2
if((a1&$.cf().a)!==0)++a2
if((a1&$.bw().a)!==0)++a2
if((a1&$.bt().a)!==0)++a2
u=a4.gc3(a4)
t=u*4
a1=new Array(a0*u)
a1.fixed$length=Array
s=H.d(a1,[P.J])
a1=new Array(a2)
a1.fixed$length=Array
r=H.d(a1,[Z.ci])
for(a1=s.length,q=r.length,p=0,o=0;o<a2;++o){n=a4.fs(o)
m=n.gc3(n)
if(o>=q)return H.b(r,o)
r[o]=new Z.ci(n,m,p*4,t)
for(l=0;l<a0;++l){k=b.a.c
if(l>=k.length)return H.b(k,l)
j=k[l].fV(n)
i=p+l*u
for(k=j.length,h=0;h<k;++h){g=j[h]
if(i<0||i>=a1)return H.b(s,i)
s[i]=g;++i}}p+=m}a1=a3.a
f=a1.createBuffer()
a1.bindBuffer(a,f)
a1.bufferData(a,new Float32Array(H.j8(s)),35044)
a1.bindBuffer(a,null)
e=new Z.cj(new Z.d8(a,f),r)
e.b=H.d([],[Z.bd])
if(b.b.b.length!==0){d=H.d([],[P.r])
for(o=0;q=b.b.b,o<q.length;++o){q=q[o].a
q.a.a.n()
d.push(q.e)}c=Z.kQ(a1,34963,d)
e.b.push(new Z.bd(0,d.length,c))}if(b.c.b.length!==0){d=H.d([],[P.r])
for(o=0;q=b.c.b,o<q.length;++o){q=q[o].a
q.a.a.n()
d.push(q.e)
q=b.c.b
if(o>=q.length)return H.b(q,o)
q=q[o].b
q.a.a.n()
d.push(q.e)}c=Z.kQ(a1,34963,d)
e.b.push(new Z.bd(1,d.length,c))}if(b.d.b.length!==0){d=H.d([],[P.r])
for(o=0;q=b.d.b,o<q.length;++o){q=q[o].a
q.a.a.n()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.b(q,o)
q=q[o].b
q.a.a.n()
d.push(q.e)
q=b.d.b
if(o>=q.length)return H.b(q,o)
q=q[o].c
q.a.a.n()
d.push(q.e)}c=Z.kQ(a1,34963,d)
e.b.push(new Z.bd(4,d.length,c))}return e},
h:function(a){var u=this,t="   ",s=H.d([],[P.n])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.G(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.G(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.G(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.G(t))}return C.b.E(s,"\n")},
S:function(){var u=this.e
if(u!=null)u.L(null)}}
F.hg.prototype={
a1:function(a,b,c,d){var u,t=this.a
t.a.j(0,b)
t.a.j(0,c)
t.a.j(0,d)
u=new F.aD()
t=b.a
if(t==null)H.z(P.A("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.z(P.A("May not create a face with vertices attached to different shapes."))
u.aM(b)
u.aN(c)
u.cr(d)
u.a.a.d.b.push(u)
u.a.a.S()
return u},
cC:function(a){var u,t,s,r,q,p=H.d([],[F.aD]),o=a.length
if(o>0){u=a[0]
for(t=this.a,s=2;s<o;++s){r=s-1
q=a.length
if(r>=q)return H.b(a,r)
r=a[r]
if(s>=q)return H.b(a,s)
q=a[s]
t.a.j(0,u)
t.a.j(0,r)
t.a.j(0,q)
p.push(F.bC(u,r,q))}}return p},
fp:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.d([],[F.aD])
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
if(p){n.j(0,m)
u.a.j(0,l)
u.a.j(0,j)
h.push(F.bC(m,l,j))
u.a.j(0,m)
u.a.j(0,j)
u.a.j(0,i)
h.push(F.bC(m,j,i))}else{n.j(0,l)
u.a.j(0,j)
u.a.j(0,i)
h.push(F.bC(l,j,i))
u.a.j(0,l)
u.a.j(0,i)
u.a.j(0,m)
h.push(F.bC(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
bX:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.i(0,q)
for(o=q-1;o>=0;--o){n=r.d.i(0,o)
if(a.aC(0,p,n)){p.aP()
break}}}}},
bc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.gfz(s)
if(t)s.aP()}},
a9:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bH())s=!1
return s},
bG:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.y)(u),++r)if(!u[r].bF())s=!1
return s},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(a))
return C.b.E(r,"\n")},
O:function(){return this.G("")}}
F.hh.prototype={
m:function(a,b,c){var u,t=this.a
t.a.j(0,b)
t.a.j(0,c)
t=new F.bf()
if(b==null)H.z(P.A("May not create a line with a null start vertex."))
if(c==null)H.z(P.A("May not create a line with a null end vertex."))
u=b.a
if(u==null)H.z(P.A("May not create a line with a start vertex which is not attached to a shape."))
if(u!=c.a)H.z(P.A("May not create a line with vertices attached to different shapes."))
t.aM(b)
t.aN(c)
t.a.a.c.b.push(t)
t.a.a.S()
return t},
gk:function(a){return this.b.length},
bX:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.b(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.i(0,q)
for(o=q-1;o>=0;--o){n=r.c.i(0,o)
if(a.aC(0,p,n)){p.aP()
break}}}}},
bc:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=J.v(s.a,s.b)
if(t)s.aP()}},
h:function(a){return this.O()},
G:function(a){var u,t,s=H.d([],[P.n]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.b(t,u)
s.push(t[u].G(a+(""+u+". ")))}return C.b.E(s,"\n")},
O:function(){return this.G("")}}
F.hi.prototype={
gk:function(a){return this.b.length},
hb:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.b(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.F(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.L(null)}s=t.a
if(s!=null){C.b.F(s.b.b,t)
t.a=null}}}},
h:function(a){return this.O()},
G:function(a){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(a))
return C.b.E(r,"\n")},
O:function(){return this.G("")}}
F.aM.prototype={
bL:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.af(u.cx,r,o,t,s,q,p,a,n)},
Y:function(){return this.bL(null)},
sU:function(a,b){var u
if(!J.v(this.f,b)){this.f=b
u=this.a
if(u!=null)u.S()}},
saE:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.v(this.r,a)){this.r=a
u=this.a
if(u!=null)u.S()}},
sT:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.w(a)))
if(!J.v(this.x,a)){this.x=a
u=this.a
if(u!=null)u.S()}},
sbZ:function(a){var u
if(!J.v(this.y,a)){this.y=a
u=this.a
if(u!=null)u.S()}},
saV:function(a){var u
if(!J.v(this.z,a)){this.z=a
u=this.a
if(u!=null)u.S()}},
sa2:function(a,b){var u
if(!J.v(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.S()}},
sdf:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.S()}},
sbD:function(a){var u
if(!J.v(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.S()}},
fV:function(a){var u,t,s=this
if(a.A(0,$.aQ())){u=s.f
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.aP())){u=s.r
t=[P.J]
if(u==null)return H.d([0,1,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.aO())){u=s.x
t=[P.J]
if(u==null)return H.d([0,0,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.bu())){u=s.y
t=[P.J]
if(u==null)return H.d([0,0],t)
else return H.d([u.a,u.b],t)}else if(a.A(0,$.bv())){u=s.z
t=[P.J]
if(u==null)return H.d([0,0,0],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.b5())){u=s.Q
t=[P.J]
if(u==null)return H.d([1,1,1],t)
else return H.d([u.a,u.b,u.c],t)}else if(a.A(0,$.cf())){u=s.Q
if(u==null)return H.d([1,1,1,1],[P.J])
else return u.c_(0)}else if(a.A(0,$.bw()))return H.d([s.ch],[P.J])
else if(a.A(0,$.bt())){u=s.cx
t=[P.J]
if(u==null)return H.d([-1,-1,-1,-1],t)
else return H.d([u.a,u.b,u.c,u.d],t)}else return H.d([],[P.J])},
bH:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.K()
t.d.u(0,new F.ik(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
bF:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.K()
t.d.u(0,new F.ij(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.w(s)))
s=t.a
if(s!=null){s.S()
s=t.a.e
if(s!=null)s.aj(0)}return!0},
cK:function(a){var u,t,s,r=this.c.b.length
for(u=0;u<r;++u){t=this.c.b
if(u>=t.length)return H.b(t,u)
s=t[u]
t=s.b
t.a.a.n()
t=t.e
a.a.a.n()
if(t==a.e)return s}return},
fN:function(a){var u=this.cK(a)
if(u!=null)return u
return a.cK(this)},
A:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.O()},
G:function(a){var u,t,s=this,r="-",q=H.d([],[P.n])
q.push(C.a.ac(J.a6(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.x
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.z
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.x(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.h(0))
else q.push(r)
t=C.b.E(q,", ")
return a+"{"+t+"}"},
O:function(){return this.G("")}}
F.ik.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.q(0,t)}}}
F.ij.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.q(0,t)}}}
F.i8.prototype={
n:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.b(u,r)
u[r].e=s;++s}this.b=!1}},
j:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.A("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.S()
return!0},
cD:function(a,b,c,d,e,f,g){var u=F.af(a,null,b,c,d,e,f,g,0)
this.j(0,u)
return u},
fq:function(a,b,c,d,e,f){return this.cD(a,b,c,d,e,f,null)},
b4:function(a,b,c,d,e,f){return this.cD(a,b,c,null,d,e,f)},
bC:function(a,b,c){var u=null,t=F.af(u,u,u,new V.E(a,b,c),u,u,u,u,0)
this.j(0,t)
return t},
gk:function(a){return this.c.length},
F:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.A("May not remove a vertex without first making it empty."))
b.a=null
C.b.F(this.c,b)
u.S()
return this.b=!0},
a9:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bH()
return!0},
bG:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)u[s].bF()
return!0},
fv:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
if(typeof n!=="number")return n.t()
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.v(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.L(null)}}}}return!0},
h:function(a){return this.O()},
G:function(a){var u,t,s,r
this.n()
u=H.d([],[P.n])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.y)(t),++r)u.push(t[r].G(a))
return C.b.E(u,"\n")},
O:function(){return this.G("")}}
F.i9.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.b(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.b(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.b(t,b)
return t[b]},
u:function(a,b){var u=this
C.b.u(u.b,b)
C.b.u(u.c,new F.ia(u,b))
C.b.u(u.d,new F.ib(u,b))},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
return C.b.E(r,"\n")}}
F.ia.prototype={
$1:function(a){if(!J.v(a.a,this.a))this.b.$1(a)}}
F.ib.prototype={
$1:function(a){var u=this.a
if(!J.v(a.a,u)&&!J.v(a.b,u))this.b.$1(a)}}
F.id.prototype={
gk:function(a){return this.b.length+this.c.length},
i:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.b(t,u)
return t[u]}else{if(b<0)return H.b(t,b)
return t[b]}},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
return C.b.E(r,"\n")}}
F.ie.prototype={}
F.bX.prototype={
aC:function(a,b,c){return J.v(b.f,c.f)}}
F.ig.prototype={}
F.h4.prototype={}
F.ih.prototype={}
F.ic.prototype={
aD:function(a7){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6=null
for(u=a7.length,t=a6,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a7[h]
f=g.f
if(f!=null){if(o==null)o=f
else{e=o.a
d=f.a
c=o.b
b=f.b
a=o.c
a0=f.c
if(typeof a!=="number")return a.q()
if(typeof a0!=="number")return H.h(a0)
o=new V.E(e+d,c+b,a+a0)}++n}a1=g.r
if(a1!=null)if(p==null)p=a1
else{e=p.a
d=a1.a
c=p.b
b=a1.b
a=p.c
a0=a1.c
if(typeof a!=="number")return a.q()
if(typeof a0!=="number")return H.h(a0)
p=new V.q(e+d,c+b,a+a0)}a2=g.x
if(a2!=null)if(q==null)q=a2
else{e=q.a
d=a2.a
c=q.b
b=a2.b
a=q.c
a0=a2.c
if(typeof a!=="number")return a.q()
if(typeof a0!=="number")return H.h(a0)
q=new V.q(e+d,c+b,a+a0)}a3=g.y
if(a3!=null){s=s==null?a3:new V.R(s.a+a3.a,s.b+a3.b);++l}a4=g.z
if(a4!=null){if(t==null)t=a4
else{e=t.a
d=a4.a
c=t.b
b=a4.b
a=t.c
a0=a4.c
if(typeof a!=="number")return a.q()
if(typeof a0!=="number")return H.h(a0)
t=new V.q(e+d,c+b,a+a0)}++k}e=g.Q
if(e!=null){d=e.a
c=e.b
b=e.c
e=e.d
if(r==null){e=[d,c,b,e]
r=new V.aL(e[0],e[1],e[2],e[3])}else{e=[d,c,b,e]
d=e[0]
c=e[1]
b=e[2]
e=e[3]
r=new V.aL(r.a+d,r.b+c,r.c+b,r.d+e)}++m}e=g.ch
if(typeof e!=="number")return H.h(e)
i+=e;++j}a5=F.af(a6,a6,a6,a6,a6,a6,a6,a6,0)
if(n<=0||o==null)a5.sU(0,a6)
else a5.sU(0,o.p(0,n))
if(p==null)a5.saE(a6)
else a5.saE(p.p(0,Math.sqrt(p.w(p))))
if(q==null)a5.sT(a6)
else a5.sT(q.p(0,Math.sqrt(q.w(q))))
if(l<=0||s==null)a5.sbZ(a6)
else a5.sbZ(s.p(0,l))
if(k<=0||t==null)a5.saV(a6)
else a5.saV(t.p(0,k))
if(m<=0||r==null)a5.sa2(0,a6)
else{u=r.p(0,m)
u=[u.a,u.b,u.c,u.d]
e=u[0]
d=u[1]
c=u[2]
u=u[3]
if(e<0)e=0
else if(e>1)e=1
if(d<0)d=0
else if(d>1)d=1
if(c<0)c=0
else if(c>1)c=1
if(u<0)u=0
else if(u>1)u=1
a5.sa2(0,new V.C(e,d,c,u))}if(j<=0)a5.sdf(0,0)
else a5.sdf(0,i/j)
return a5}}
F.fW.prototype={
aD:function(a){var u,t,s,r,q,p,o,n,m=V.K()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null){r=m.a
q=s.a
p=m.b
o=s.b
n=m.c
s=s.c
if(typeof n!=="number")return n.q()
if(typeof s!=="number")return H.h(s)
m=new V.q(r+q,p+o,n+s)}}m=m.p(0,Math.sqrt(m.w(m)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.y)(a),++t)a[t].saE(m)
return}}
F.ii.prototype={
gk:function(a){return this.b.length},
h:function(a){return this.O()},
O:function(){var u,t,s,r=H.d([],[P.n])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.y)(u),++s)r.push(u[s].G(""))
return C.b.E(r,"\n")}}
O.cv.prototype={
gD:function(){var u=this.rx
return u==null?this.rx=D.M():u},
Z:function(a){var u=this.rx
if(u!=null)u.L(a)},
sa6:function(a){var u=this.r2
if(!(Math.abs(u-a)<$.D().a)){this.r2=a
u=new D.u("vectorScale",u,a)
u.b=!0
this.Z(u)}},
a_:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.cd(a,e.$1(c))
b.a.l(0,d,t)}u=this.a
u.db.b_(f)
u.dx.b_(g)
t.d1(a)},
cp:function(a,b,c,d,e,f,g){var u,t=b.a.i(0,d)
if(t==null){t=this.cd(a,e.$1(c))
b.a.l(0,d,t)}u=this.a
u.db.b_(f)
u.dx.b_(g)
t.d1(a)},
cd:function(a,b){var u=this,t=$.aQ(),s=$.aP(),r=b.fu(new Z.im(a.a),new Z.bY(t.a|s.a|$.aO().a|$.b5().a))
r.b6($.aQ()).e=u.a.z.c
r.b6($.aP()).e=u.a.Q.c
r.b6($.b5()).e=u.a.ch.c
r.b6($.aO()).e=u.a.cx.c
return r},
f2:function(a){var u=F.N()
C.b.u(a.a.c,new O.fa(u,new V.C(1,1,1,1)))
C.b.u(a.d.b,new O.fb(u))
return u},
cA:function(a,b){var u,t={}
t.a=b
u=F.N()
t.a=new V.C(0,0.7,1,1)
C.b.u(a.a.c,new O.fl(t,u))
t=new O.fk(u)
C.b.u(a.c.b,new O.fm(u,t))
C.b.u(a.d.b,new O.fn(u,t))
return u},
fl:function(a){return this.cA(a,null)},
fh:function(a){var u=F.N()
C.b.u(a.a.c,new O.fg(new V.C(1,1,1,1),u))
return u},
ec:function(a){var u=F.N()
C.b.u(a.a.c,new O.f9(new V.C(1,1,0.3,1),u))
return u},
dL:function(a){var u=F.N()
C.b.u(a.a.c,new O.f1(new V.C(1,0.3,0.3,1),u))
return u},
f5:function(a){var u=F.N()
C.b.u(a.a.c,new O.fc(new V.C(1,0.3,1,1),u))
return u},
ff:function(a){var u=F.N()
C.b.u(a.a.c,new O.ff(new V.C(1,0.3,0.3,1),u))
return u},
dZ:function(a){var u=F.N()
C.b.u(a.d.b,new O.f5(new V.C(1,1,0.3,1),u))
return u},
e0:function(a){var u=F.N()
C.b.u(a.d.b,new O.f6(new V.C(1,1,0.3,1),u))
return u},
dX:function(a){var u=F.N()
C.b.u(a.d.b,new O.f4(new V.C(1,0.3,0.3,1),u))
return u},
e2:function(a){var u=F.N()
C.b.u(a.d.b,new O.f7(new V.C(1,0.3,1,1),u))
return u},
dP:function(a){var u=F.N()
C.b.u(a.a.c,new O.f2(u))
C.b.u(a.d.b,new O.f3(u))
return u},
fd:function(a){var u=F.N()
C.b.u(a.a.c,new O.fd(u))
C.b.u(a.d.b,new O.fe(u))
return u},
fj:function(a){var u,t,s={},r=F.N(),q=a.a.c
if(q.length<1)return r
s.a=s.b=q[0].ch
C.b.u(q,new O.fh(s))
q=s.a
u=s.b
if(typeof q!=="number")return q.B()
if(typeof u!=="number")return H.h(u)
t=q-u
s.c=t
if(t<=0)s.c=1
C.b.u(a.a.c,new O.fi(s,r))
C.b.u(a.d.b,new O.fj(r))
return r},
e8:function(a){var u={}
u.a=0
C.b.u(a.a.c,new O.f8(u))
return C.d.b7((u.a+1.5)*0.5)},
b0:function(a,b){var u
if(a<0)return new V.a7(0,0,0)
else{u=Math.floor((a+0.5)*0.5)
return V.lg(u/b,a-u*2,1)}},
dJ:function(a){var u=this.e8(a),t=F.N()
C.b.u(a.a.c,new O.f_(this,u,t))
C.b.u(a.d.b,new O.f0(t))
return t},
dG:function(a){return this.dH(a)},
dH:function(a){var u=F.N(),t=new O.eZ(u)
t.$3(1,0,0)
t.$3(0,1,0)
t.$3(0,0,1)
return u},
dA:function(a){return this.dB(a)},
dB:function(a){var u,t,s,r,q=a.cH(),p=F.N(),o=new O.eY(p),n=q.a,m=q.b,l=q.c,k=o.$3(n,m,l),j=n+q.d,i=o.$3(j,m,l),h=m+q.e,g=o.$3(j,h,l),f=o.$3(n,h,l),e=q.f
if(typeof l!=="number")return l.q()
e=l+e
u=o.$3(n,m,e)
t=o.$3(j,m,e)
s=o.$3(j,h,e)
r=o.$3(n,h,e)
p.c.m(0,k,i)
p.c.m(0,i,g)
p.c.m(0,g,f)
p.c.m(0,f,k)
p.c.m(0,u,t)
p.c.m(0,t,s)
p.c.m(0,s,r)
p.c.m(0,r,u)
p.c.m(0,k,u)
p.c.m(0,i,t)
p.c.m(0,g,s)
p.c.m(0,f,r)
return p}}
O.fa.prototype={
$1:function(a){var u=this.a.a,t=a.Y()
t.sa2(0,this.b)
t.sT(V.K())
u.j(0,t)}}
O.fb.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a1(0,u,t,s)}}
O.fl.prototype={
$1:function(a){var u=this.b.a,t=a.Y()
t.sa2(0,this.a.a)
t.sT(V.K())
u.j(0,t)}}
O.fk.prototype={
$2:function(a,b){if(a.fN(b)==null)this.a.c.m(0,a,b)}}
O.fm.prototype={
$1:function(a){var u,t=this.a,s=t.a,r=a.a
r.a.a.n()
r=r.e
s=s.c
if(r>>>0!==r||r>=s.length)return H.b(s,r)
u=s[r]
t=t.a
r=a.b
r.a.a.n()
r=r.e
t=t.c
if(r>>>0!==r||r>=t.length)return H.b(t,r)
this.b.$2(u,t[r])}}
O.fn.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
r=r.a
q=a.c
q.a.a.n()
q=q.e
r=r.c
if(q>>>0!==q||q>=r.length)return H.b(r,q)
s=r[q]
q=this.b
q.$2(u,t)
q.$2(t,s)
q.$2(s,u)}}
O.fg.prototype={
$1:function(a){var u,t=a.Y()
t.sa2(0,this.a)
t.sT(V.K())
u=this.b
u.a.j(0,t)
u.b.a.a.j(0,t)
F.kK(t)}}
O.f9.prototype={
$1:function(a){var u,t,s=a.Y()
s.sa2(0,this.a)
s.sT(V.K())
u=s.Y()
u.sT(s.r)
t=this.b
t.a.j(0,s)
t.a.j(0,u)
t.c.m(0,s,u)}}
O.f1.prototype={
$1:function(a){var u,t,s=a.Y()
s.sa2(0,this.a)
s.sT(V.K())
u=s.Y()
u.sT(a.x)
t=this.b
t.a.j(0,s)
t.a.j(0,u)
t.c.m(0,s,u)}}
O.fc.prototype={
$1:function(a){var u,t,s=a.Y()
s.sa2(0,this.a)
s.sT(V.K())
u=s.Y()
u.sT(a.x.ad(a.r).N(0))
t=this.b
t.a.j(0,s)
t.a.j(0,u)
t.c.m(0,s,u)}}
O.ff.prototype={
$1:function(a){var u,t,s=a.Y()
s.sa2(0,this.a)
s.sT(V.K())
u=s.Y()
u.sT(a.z)
t=this.b
t.a.j(0,s)
t.a.j(0,u)
t.c.m(0,s,u)}}
O.f5.prototype={
$1:function(a){var u=null,t=a.a.f.q(0,a.b.f).q(0,a.c.f).p(0,3),s=a.d,r=F.af(u,V.K(),this.a,t,s,u,u,u,0)
s=this.b
s.a.j(0,r)
s.b.a.a.j(0,r)
F.kK(r)}}
O.f6.prototype={
$1:function(a){var u=null,t=a.a.f.q(0,a.b.f).q(0,a.c.f).p(0,3),s=a.d,r=F.af(u,V.K(),this.a,t,s,u,u,u,0),q=r.Y()
q.sT(a.d)
s=this.b
s.a.j(0,r)
s.a.j(0,q)
s.c.m(0,r,q)}}
O.f4.prototype={
$1:function(a){var u=null,t=a.a.f.q(0,a.b.f).q(0,a.c.f).p(0,3),s=a.d,r=F.af(u,V.K(),this.a,t,s,u,u,u,0),q=r.Y()
q.sT(a.e)
s=this.b
s.a.j(0,r)
s.a.j(0,q)
s.c.m(0,r,q)}}
O.f7.prototype={
$1:function(a){var u=null,t=a.a.f.q(0,a.b.f).q(0,a.c.f).p(0,3),s=a.d,r=F.af(u,V.K(),this.a,t,s,u,u,u,0),q=r.Y()
q.sT(a.e.ad(a.d).N(0))
s=this.b
s.a.j(0,r)
s.a.j(0,q)
s.c.m(0,r,q)}}
O.f2.prototype={
$1:function(a){var u=this.a.a,t=a.Y()
t.sT(V.K())
u.j(0,t)}}
O.f3.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a1(0,u,t,s)}}
O.fd.prototype={
$1:function(a){var u,t,s=a.y,r=this.a.a,q=a.Y(),p=s.a,o=s.b
if(p<0)p=0
else if(p>1)p=1
u=o<0
if(u)t=0
else t=o>1?1:o
if(u)o=0
else if(o>1)o=1
q.sa2(0,new V.C(p,t,o,1))
q.sT(V.K())
r.j(0,q)}}
O.fe.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a1(0,u,t,s)}}
O.fh.prototype={
$1:function(a){var u=this.a,t=u.b,s=a.ch
if(typeof t!=="number")return t.a0()
if(typeof s!=="number")return H.h(s)
if(t>s)u.b=s
t=u.a
if(typeof t!=="number")return t.M()
if(t<s)u.a=s}}
O.fi.prototype={
$1:function(a){var u,t=a.ch,s=this.a,r=s.b
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.h(r)
u=V.lg((t-r)/s.c*5/6,1,1)
s=this.b.a
r=a.Y()
r.sT(V.K())
r.sa2(0,V.lh(u))
s.j(0,r)}}
O.fj.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a1(0,u,t,s)}}
O.f8.prototype={
$1:function(a){var u,t,s=a.cx
if(s==null)s=V.lx()
u=this.a
t=Math.max(u.a,s.a)
u.a=t
t=Math.max(t,s.b)
u.a=t
t=Math.max(t,s.c)
u.a=t
u.a=Math.max(t,s.d)}}
O.f_.prototype={
$1:function(a){var u,t,s,r=a.cx
if(r==null)r=V.lx()
u=this.a
t=this.b
s=new V.a7(0,0,0).q(0,u.b0(r.a,t)).q(0,u.b0(r.b,t)).q(0,u.b0(r.c,t)).q(0,u.b0(r.d,t))
t=this.c.a
u=a.Y()
u.sT(V.K())
u.sa2(0,V.lh(s))
t.j(0,u)}}
O.f0.prototype={
$1:function(a){var u,t,s,r=this.a,q=r.a,p=a.a
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
u=q[p]
p=r.a
q=a.b
q.a.a.n()
q=q.e
p=p.c
if(q>>>0!==q||q>=p.length)return H.b(p,q)
t=p[q]
q=r.a
p=a.c
p.a.a.n()
p=p.e
q=q.c
if(p>>>0!==p||p>=q.length)return H.b(q,p)
s=q[p]
r.d.a1(0,u,t,s)}}
O.eZ.prototype={
$3:function(a,b,c){var u,t,s=a>1?1:a,r=b>1?1:b,q=c>1?1:c,p=new V.C(s,r,q,1)
s=this.a
u=s.a.bC(0,0,0)
u.sT(V.K())
u.saE(V.kP())
u.sa2(0,p)
t=s.a.bC(a,b,c)
t.sT(V.K())
t.saE(V.kP())
t.sa2(0,p)
s.c.m(0,u,t)}}
O.eY.prototype={
$3:function(a,b,c){var u=this.a.a.bC(a,b,c)
u.sT(V.K())
u.saE(new V.q(a,b,c))
return u}}
O.cS.prototype={}
X.kz.prototype={}
X.eU.prototype={
gD:function(){var u=this.x
return u==null?this.x=D.M():u}}
X.cJ.prototype={
gD:function(){var u=this.f
return u==null?this.f=D.M():u},
at:function(a){var u=this.f
if(u!=null)u.L(a)},
dz:function(){return this.at(null)},
saS:function(a){var u,t,s=this
if(!J.v(s.b,a)){u=s.b
if(u!=null)u.gD().F(0,s.gc9())
t=s.b
s.b=a
if(a!=null)a.gD().j(0,s.gc9())
u=new D.u("mover",t,s.b)
u.b=!0
s.at(u)}}}
X.hw.prototype={}
V.en.prototype={
a1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=this
if(l.c==null)return
u=l.d.length
t=P.d3().gaF().i(0,l.a)
if(t==null||t.length<=u){s=d
r=!0}else{if(u>=t.length)return H.b(t,u)
s=t[u]==="1"
r=!1}c.$1(s)
q=document
p=q.createElement("label")
o=p.style
o.whiteSpace="nowrap"
J.e6(l.c).j(0,p)
n=W.lk("checkbox")
n.checked=s
W.W(n,"change",new V.eo(l,c,n,u),!1)
p.appendChild(n)
m=q.createElement("span")
m.textContent=b
p.appendChild(m)
J.e6(l.c).j(0,q.createElement("br"))
l.d.push(n)
if(r)l.cz(u,s)},
m:function(a,b,c){return this.a1(a,b,c,!1)},
cz:function(a,b){var u,t,s,r,q,p=this.a,o=P.d3().gaF().i(0,p)
if(o==null)o=""
u=o.length
if(u<a)o=C.a.h3(o,a-u+1,"0")
t=a>0?C.a.v(o,0,a):""
t+=b?"1":"0"
u=a+1
if(u<o.length)t+=C.a.ar(o,u)
s=P.d3()
u=P.n
r=P.lo(s.gaF(),u,u)
r.l(0,p,t)
q=s.bY(0,r)
p=window.history
u=q.h(0)
p.toString
p.replaceState(new P.dL([],[]).aY(""),"",u)}}
V.eo.prototype={
$1:function(a){var u=this,t=u.c
u.b.$1(t.checked)
u.a.cz(u.d,t.checked)}}
V.ko.prototype={
$1:function(a){var u=C.d.d9(this.a.gfR(),2)
if(u!=="0.00")P.l3(u+" fps")}}
V.h5.prototype={
a1:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.d3().gaF().i(0,H.f(u))
if(t==null)if(d){c.$0()
m.cw(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.e6(m.c).j(0,q)
o=W.lk("radio")
o.checked=s
o.name=u
W.W(o,"change",new V.h6(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.e6(m.c).j(0,r.createElement("br"))},
m:function(a,b,c){return this.a1(a,b,c,!1)},
cw:function(a){var u,t,s=P.d3(),r=P.n,q=P.lo(s.gaF(),r,r)
q.l(0,this.a,a)
u=s.bY(0,q)
r=window.history
t=u.h(0)
r.toString
r.replaceState(new P.dL([],[]).aY(""),"",t)}}
V.h6.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.cw(u.d)}}}
V.hj.prototype={
ds:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.W(q,"scroll",new V.hl(o),!1)},
cE:function(a){var u,t,s,r,q,p,o,n
this.f_()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.fU(a),s.toString,r=new H.O(r),r=new P.c5(s.da(new H.bI(r,r.gk(r))).a());r.C();){s=r.gJ(r)
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
if(H.mn(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.b(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.iZ(C.Q,s,C.e,!1)
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
fn:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
f_:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.hC()
t=P.n
u.a=new H.ac([t,L.cQ])
u.b=new H.ac([t,L.cW])
u.c=P.lp(t)
u.d=u.P(0,q)
t=u.P(0,q).E(0,p)
s=K.X(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.P(0,p).E(0,p)
s=new K.aH()
r=[K.cD]
s.a=H.d([],r)
t.a.push(s)
t=K.X(new H.O("*"))
s.a.push(t)
t=u.P(0,p).E(0,"BoldEnd")
s=K.X(new H.O("*"))
t.a.push(s)
t.c=!0
t=u.P(0,q).E(0,o)
s=K.X(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.P(0,o).E(0,o)
s=new K.aH()
s.a=H.d([],r)
t.a.push(s)
t=K.X(new H.O("_"))
s.a.push(t)
t=u.P(0,o).E(0,n)
s=K.X(new H.O("_"))
t.a.push(s)
t.c=!0
t=u.P(0,q).E(0,m)
s=K.X(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.P(0,m).E(0,m)
s=new K.aH()
s.a=H.d([],r)
t.a.push(s)
t=K.X(new H.O("`"))
s.a.push(t)
t=u.P(0,m).E(0,"CodeEnd")
s=K.X(new H.O("`"))
t.a.push(s)
t.c=!0
t=u.P(0,q).E(0,l)
s=K.X(new H.O("["))
t.a.push(s)
t.c=!0
t=u.P(0,l).E(0,k)
s=K.X(new H.O("|"))
t.a.push(s)
s=u.P(0,l).E(0,j)
t=K.X(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.P(0,l).E(0,l)
t=new K.aH()
t.a=H.d([],r)
s.a.push(t)
s=K.X(new H.O("|]"))
t.a.push(s)
s=u.P(0,k).E(0,j)
t=K.X(new H.O("]"))
s.a.push(t)
s.c=!0
s=u.P(0,k).E(0,k)
t=new K.aH()
t.a=H.d([],r)
s.a.push(t)
s=K.X(new H.O("|]"))
t.a.push(s)
u.P(0,q).E(0,i).a.push(new K.e8())
s=u.P(0,i).E(0,i)
t=new K.aH()
t.a=H.d([],r)
s.a.push(t)
s=K.X(new H.O("*_`["))
t.a.push(s)
s=u.P(0,"BoldEnd")
s.d=s.a.aX(p)
s=u.P(0,n)
s.d=s.a.aX(o)
s=u.P(0,"CodeEnd")
s.d=s.a.aX(m)
s=u.P(0,j)
s.d=s.a.aX("Link")
s=u.P(0,i)
s.d=s.a.aX(i)
this.b=u}}
V.hl.prototype={
$1:function(a){P.lI(C.m,new V.hk(this.a))}}
V.hk.prototype={
$0:function(){var u=C.d.ae(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
Z.jA.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.Q!==a){t.Q=a
u=new D.u("showFilled",!a,a)
u.b=!0
t.Z(u)}}}
Z.jB.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.ch!==a){t.ch=a
u=new D.u("showWireFrame",!a,a)
u.b=!0
t.Z(u)}}}
Z.jC.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cx!==a){t.cx=a
u=new D.u("showVertices",!a,a)
u.b=!0
t.Z(u)}}}
Z.jN.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.cy!==a){t.cy=a
u=new D.u("showNormals",!a,a)
u.b=!0
t.Z(u)}}}
Z.jY.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.db!==a){t.db=a
u=new D.u("showBinormals",!a,a)
u.b=!0
t.Z(u)}}}
Z.k8.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dx!==a){t.dx=a
u=new D.u("showTangentals",!a,a)
u.b=!0
t.Z(u)}}}
Z.kh.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fr!==a){t.fr=a
u=new D.u("showFaceCenters",!a,a)
u.b=!0
t.Z(u)}}}
Z.ki.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fx!==a){t.fx=a
u=new D.u("showFaceNormals",!a,a)
u.b=!0
t.Z(u)}}}
Z.kj.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.fy!==a){t.fy=a
u=new D.u("showFaceBinormals",!a,a)
u.b=!0
t.Z(u)}}}
Z.kk.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.go!==a){t.go=a
u=new D.u("showFaceTangentals",!a,a)
u.b=!0
t.Z(u)}}}
Z.kl.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.id!==a){t.id=a
u=new D.u("showColorFill",!a,a)
u.b=!0
t.Z(u)}}}
Z.jD.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k1!==a){t.k1=a
u=new D.u("showTxt2DColor",!a,a)
u.b=!0
t.Z(u)}}}
Z.jE.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.dy!==a){t.dy=a
u=new D.u("showTxtCube",!a,a)
u.b=!0
t.Z(u)}}}
Z.jF.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k2!==a){t.k2=a
u=new D.u("showWeight",!a,a)
u.b=!0
t.Z(u)}}}
Z.jG.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.r1!==a){t.r1=a
u=new D.u("showBend",!a,a)
u.b=!0
t.Z(u)}}}
Z.jH.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k3!==a){t.k3=a
u=new D.u("showAxis",!a,a)
u.b=!0
t.Z(u)}}}
Z.jI.prototype={
$1:function(a){var u,t=this.a
a=a===!0
if(t.k4!==a){t.k4=a
u=new D.u("showAABB",!a,a)
u.b=!0
t.Z(u)}}}
Z.km.prototype={
$1:function(a){a.fw()
this.a.sc2(0,a)}}
Z.jJ.prototype={
$0:function(){var u,t,s,r,q,p=null,o=F.N(),n=o.a,m=new V.q(-1,-1,1)
m=m.p(0,Math.sqrt(m.w(m)))
u=n.b4(new V.a2(1,2,4,6),V.er(255,0,0),new V.E(-1,-1,0),new V.R(0,1),m,p)
m=o.a
n=new V.q(1,-1,1)
n=n.p(0,Math.sqrt(n.w(n)))
t=m.b4(new V.a2(0,3,4,6),V.er(0,0,255),new V.E(1,-1,0),new V.R(1,1),n,p)
n=o.a
m=new V.q(1,1,1)
m=m.p(0,Math.sqrt(m.w(m)))
s=n.b4(new V.a2(0,2,5,6),V.er(0,128,0),new V.E(1,1,0),new V.R(1,0),m,p)
m=o.a
n=V.av()
r=new V.q(-1,1,1)
r=r.p(0,Math.sqrt(r.w(r)))
q=m.b4(new V.a2(0,2,4,7),V.er(255,255,0),new V.E(-1,1,0),n,r,p)
o.d.cC(H.d([u,t,s,q],[F.aM]))
o.a9()
this.a.$1(o)}}
Z.jK.prototype={
$0:function(){this.a.$1(F.jb(1,null,null,1))}}
Z.jL.prototype={
$0:function(){this.a.$1(F.jb(8,null,null,8))}}
Z.jM.prototype={
$0:function(){this.a.$1(F.jb(15,null,new Z.jz(),15))}}
Z.jz.prototype={
$3:function(a,b,c){var u,t=Math.cos(c*4*3.141592653589793+3.141592653589793),s=Math.cos(b*4*3.141592653589793+3.141592653589793),r=a.f
r=new V.q(r.a,r.b,r.c)
u=r.p(0,Math.sqrt(r.w(r)))
r=a.f
s=u.t(0,t*0.1+s*0.1)
a.sU(0,r.q(0,new V.E(s.a,s.b,s.c)))}}
Z.jO.prototype={
$0:function(){this.a.$1(F.jh(-1,!1,0,null,8))}}
Z.jP.prototype={
$0:function(){this.a.$1(F.jh(-1,!1,0,null,30))}}
Z.jQ.prototype={
$0:function(){this.a.$1(F.kZ(!0,1,8,1))}}
Z.jR.prototype={
$0:function(){this.a.$1(F.kZ(!0,8,16,1))}}
Z.jS.prototype={
$0:function(){this.a.$1(F.kZ(!1,1,12,0))}}
Z.jT.prototype={
$0:function(){this.a.$1(F.m9(!0,!0,25,new Z.jy(),50))}}
Z.jy.prototype={
$2:function(a,b){return Math.cos(b*4*3.141592653589793+3.141592653589793)*0.2+Math.cos(a*6*3.141592653589793)*0.3+0.8}}
Z.jU.prototype={
$0:function(){this.a.$1(F.mi(10,20))}}
Z.jV.prototype={
$0:function(){this.a.$1(F.mi(20,40))}}
Z.jW.prototype={
$0:function(){this.a.$1(F.mh(2))}}
Z.jX.prototype={
$0:function(){this.a.$1(F.mh(3))}}
Z.jZ.prototype={
$0:function(){this.a.$1(F.l4(6,null,6))}}
Z.k_.prototype={
$0:function(){this.a.$1(F.l4(10,null,10))}}
Z.k0.prototype={
$0:function(){this.a.$1(F.l4(10,new Z.jx(),10))}}
Z.jx.prototype={
$2:function(a,b){var u=a-0.5,t=b-0.5
return Math.cos(Math.sqrt(u*u+t*t)*3.141592653589793)*0.3}}
Z.k1.prototype={
$0:function(){this.a.$1(F.oG())}}
Z.k2.prototype={
$0:function(){this.a.$1(F.ox())}}
Z.k3.prototype={
$0:function(){this.a.$1(F.mf(4,null,4))}}
Z.k4.prototype={
$0:function(){this.a.$1(F.mf(16,new Z.jw(),16))}}
Z.jw.prototype={
$2:function(a,b){return Math.sin(a*8)*Math.cos(b*8)*0.3}}
Z.k5.prototype={
$0:function(){this.a.sa6(0.01)}}
Z.k6.prototype={
$0:function(){this.a.sa6(0.02)}}
Z.k7.prototype={
$0:function(){this.a.sa6(0.04)}}
Z.k9.prototype={
$0:function(){this.a.sa6(0.06)}}
Z.ka.prototype={
$0:function(){this.a.sa6(0.08)}}
Z.kb.prototype={
$0:function(){this.a.sa6(0.1)}}
Z.kc.prototype={
$0:function(){this.a.sa6(0.2)}}
Z.kd.prototype={
$0:function(){this.a.sa6(0.4)}}
Z.ke.prototype={
$0:function(){this.a.sa6(0.6)}}
Z.kf.prototype={
$0:function(){this.a.sa6(0.8)}}
Z.kg.prototype={
$0:function(){this.a.sa6(1)}};(function aliases(){var u=J.a.prototype
u.dk=u.h
u=J.cA.prototype
u.dl=u.h
u=K.cu.prototype
u.dj=u.aB
u.c4=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installInstanceTearOff,q=hunkHelpers._instance_2u,p=hunkHelpers._instance_0u,o=hunkHelpers._instance_1u,n=hunkHelpers._instance_0i
u(J,"o8","n2",18)
t(P,"oi","nH",9)
t(P,"oj","nI",9)
t(P,"ok","nJ",9)
s(P,"m8","og",11)
var m
r(m=E.aU.prototype,"gd_",0,0,null,["$1","$0"],["d0","h2"],2,0)
r(m,"gcY",0,0,null,["$1","$0"],["cZ","h1"],2,0)
r(m,"gcW",0,0,null,["$1","$0"],["cX","fZ"],2,0)
q(m,"gfX","fY",5)
q(m,"gh_","h0",5)
r(m=E.cT.prototype,"gc6",0,0,null,["$1","$0"],["c8","c7"],2,0)
p(m,"ghe","d6",11)
o(m=X.d4.prototype,"ger","es",6)
o(m,"gef","eg",6)
o(m,"gel","em",3)
o(m,"gew","ex",12)
o(m,"geu","ev",12)
o(m,"gez","eA",3)
o(m,"geD","eE",3)
o(m,"gep","eq",3)
o(m,"geB","eC",3)
o(m,"gen","eo",3)
o(m,"geF","eG",16)
o(m,"geH","eI",6)
o(m,"geQ","eR",7)
o(m,"geM","eN",7)
o(m,"geO","eP",7)
n(V.G.prototype,"gk","aR",8)
n(V.q.prototype,"gk","aR",8)
n(V.aL.prototype,"gk","aR",8)
r(m=U.bE.prototype,"gaw",0,0,null,["$1","$0"],["R","a5"],2,0)
q(m,"ged","ee",13)
q(m,"geK","eL",13)
r(m=U.d5.prototype,"gaw",0,0,null,["$1","$0"],["R","a5"],2,0)
o(m,"gbp","bq",1)
o(m,"gbr","bs",1)
o(m,"gbt","bu",1)
r(m=U.d6.prototype,"gaw",0,0,null,["$1","$0"],["R","a5"],2,0)
o(m,"gbp","bq",1)
o(m,"gbr","bs",1)
o(m,"gbt","bu",1)
o(m,"ge4","e5",1)
o(m,"ge6","e7",1)
o(m,"gfa","fb",1)
o(m,"gf8","f9",1)
o(m,"gf6","f7",1)
o(U.d7.prototype,"ge9","ea",1)
r(m=M.cr.prototype,"gaf",0,0,null,["$1","$0"],["ak","du"],2,0)
q(m,"geh","ei",5)
q(m,"gej","ek",5)
o(m=O.cv.prototype,"gf1","f2",0)
r(m,"gfk",0,1,null,["$2$color","$1"],["cA","fl"],17,0)
o(m,"gfg","fh",0)
o(m,"geb","ec",0)
o(m,"gdK","dL",0)
o(m,"gf4","f5",0)
o(m,"gfe","ff",0)
o(m,"gdY","dZ",0)
o(m,"ge_","e0",0)
o(m,"gdW","dX",0)
o(m,"ge1","e2",0)
o(m,"gdO","dP",0)
o(m,"gfc","fd",0)
o(m,"gfi","fj",0)
o(m,"gdI","dJ",0)
o(m,"gcc","dG",0)
o(m,"gca","dA",0)
r(X.cJ.prototype,"gc9",0,0,null,["$1","$0"],["at","dz"],2,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.Z,null)
s(P.Z,[H.kG,J.a,J.aa,P.dq,P.l,H.bI,P.fp,H.cs,H.hY,H.eu,H.hH,P.bc,H.bz,H.dH,P.a1,H.fy,H.fA,H.fs,P.dO,P.bn,P.c5,P.d9,P.cR,P.hu,P.cU,P.j1,P.iK,P.iF,P.dp,P.p,P.iU,P.fH,P.eq,P.j0,P.j_,P.cc,P.a8,P.a5,P.aT,P.h_,P.cP,P.dh,P.eT,P.o,P.Q,P.aZ,P.n,P.T,P.bo,P.i_,P.iL,W.ey,W.ep,W.H,W.ct,P.iN,P.iG,P.bk,K.e8,K.cu,K.cD,K.hf,L.cQ,L.cV,L.cW,L.hC,O.ba,O.bL,E.ej,E.aU,E.b8,E.bg,E.iy,E.h7,E.cT,Z.d8,Z.im,Z.cj,Z.ck,Z.bd,Z.bY,D.em,D.bB,D.Y,X.cl,X.cB,X.fv,X.fE,X.ad,X.fQ,X.hD,X.d4,V.a7,V.C,V.eK,V.bK,V.R,V.E,V.a2,V.cM,V.bU,V.G,V.q,V.aL,U.d5,U.d6,U.d7,M.cr,A.ch,A.ec,A.cZ,A.hQ,F.aD,F.eN,F.bf,F.fx,F.bR,F.ae,F.hg,F.hh,F.hi,F.aM,F.i8,F.i9,F.id,F.ie,F.ig,F.ih,F.ii,O.cS,X.kz,X.hw,X.cJ,V.en,V.h5,V.hj])
s(J.a,[J.fq,J.cz,J.cA,J.aV,J.bH,J.aW,H.bO,H.aY,W.e,W.e7,W.b7,W.aq,W.F,W.db,W.ab,W.eC,W.eD,W.dd,W.cq,W.df,W.eF,W.i,W.di,W.ar,W.eV,W.dk,W.bG,W.fD,W.fK,W.dr,W.ds,W.as,W.dt,W.dw,W.au,W.dA,W.dC,W.ax,W.dD,W.ay,W.dI,W.ak,W.dM,W.hB,W.aA,W.dP,W.hF,W.i4,W.dU,W.dW,W.dY,W.e_,W.e1,P.aE,P.dm,P.aI,P.dy,P.h3,P.dJ,P.aK,P.dR,P.ed,P.da,P.dF])
s(J.cA,[J.h0,J.bm,J.aX])
t(J.kF,J.aV)
s(J.bH,[J.cy,J.fr])
t(P.fC,P.dq)
s(P.fC,[H.d1,W.iv,W.iu,P.eP])
t(H.O,H.d1)
s(P.l,[H.m,H.bJ,H.io,P.fo])
t(H.eI,H.bJ)
s(P.fp,[H.fI,H.ip])
t(H.ev,H.eu)
s(P.bc,[H.fX,H.fu,H.hX,H.el,H.hd,P.cI,P.ao,P.hZ,P.hV,P.hq,P.et,P.eB])
s(H.bz,[H.kt,H.hx,H.ft,H.jq,H.jr,H.js,P.ir,P.iq,P.is,P.it,P.iT,P.iS,P.j9,P.iI,P.iJ,P.fB,P.fG,P.eG,P.eH,P.i3,P.i0,P.i1,P.i2,P.iV,P.iW,P.iY,P.iX,P.j5,P.j4,P.j6,P.j7,W.fM,W.fO,W.hc,W.ht,W.iA,P.iO,P.iP,P.ja,P.eQ,P.eR,P.ef,E.h8,E.h9,E.ha,E.hA,D.eL,D.eM,F.j2,F.ji,F.jc,F.je,F.jf,F.jg,F.jv,F.kp,F.kq,F.ks,F.ju,F.jd,F.jn,F.jo,F.ik,F.ij,F.ia,F.ib,O.fa,O.fb,O.fl,O.fk,O.fm,O.fn,O.fg,O.f9,O.f1,O.fc,O.ff,O.f5,O.f6,O.f4,O.f7,O.f2,O.f3,O.fd,O.fe,O.fh,O.fi,O.fj,O.f8,O.f_,O.f0,O.eZ,O.eY,V.eo,V.ko,V.h6,V.hl,V.hk,Z.jA,Z.jB,Z.jC,Z.jN,Z.jY,Z.k8,Z.kh,Z.ki,Z.kj,Z.kk,Z.kl,Z.jD,Z.jE,Z.jF,Z.jG,Z.jH,Z.jI,Z.km,Z.jJ,Z.jK,Z.jL,Z.jM,Z.jz,Z.jO,Z.jP,Z.jQ,Z.jR,Z.jS,Z.jT,Z.jy,Z.jU,Z.jV,Z.jW,Z.jX,Z.jZ,Z.k_,Z.k0,Z.jx,Z.k1,Z.k2,Z.k3,Z.k4,Z.jw,Z.k5,Z.k6,Z.k7,Z.k9,Z.ka,Z.kb,Z.kc,Z.kd,Z.ke,Z.kf,Z.kg])
s(H.hx,[H.hr,H.bx])
t(P.fF,P.a1)
t(H.ac,P.fF)
t(H.fz,H.m)
t(H.cE,H.aY)
s(H.cE,[H.c_,H.c1])
t(H.c0,H.c_)
t(H.bP,H.c0)
t(H.c2,H.c1)
t(H.cF,H.c2)
s(H.cF,[H.fR,H.fS,H.fT,H.fU,H.fV,H.cG,H.bQ])
t(P.iR,P.fo)
t(P.iH,P.j1)
t(P.iE,P.iK)
t(P.dT,P.fH)
t(P.d2,P.dT)
s(P.eq,[P.eh,P.eJ])
t(P.ew,P.hu)
s(P.ew,[P.ei,P.i7,P.i6])
t(P.i5,P.eJ)
s(P.a5,[P.J,P.r])
s(P.ao,[P.bi,P.eW])
t(P.ix,P.bo)
s(W.e,[W.B,W.eO,W.bM,W.aw,W.c3,W.az,W.al,W.c6,W.il,W.bZ,P.eg,P.b6])
s(W.B,[W.S,W.aS])
s(W.S,[W.k,P.j])
s(W.k,[W.e9,W.ea,W.b9,W.eS,W.he])
t(W.ex,W.aq)
t(W.bA,W.db)
s(W.ab,[W.ez,W.eA])
t(W.de,W.dd)
t(W.cp,W.de)
t(W.dg,W.df)
t(W.eE,W.dg)
t(W.aj,W.b7)
t(W.dj,W.di)
t(W.bD,W.dj)
t(W.dl,W.dk)
t(W.bF,W.dl)
t(W.b_,W.i)
s(W.b_,[W.be,W.at,W.bj])
t(W.fL,W.dr)
t(W.fN,W.ds)
t(W.du,W.dt)
t(W.fP,W.du)
t(W.dx,W.dw)
t(W.cH,W.dx)
t(W.dB,W.dA)
t(W.h1,W.dB)
t(W.hb,W.dC)
t(W.c4,W.c3)
t(W.hn,W.c4)
t(W.dE,W.dD)
t(W.ho,W.dE)
t(W.hs,W.dI)
t(W.dN,W.dM)
t(W.hy,W.dN)
t(W.c7,W.c6)
t(W.hz,W.c7)
t(W.dQ,W.dP)
t(W.hE,W.dQ)
t(W.b0,W.at)
t(W.dV,W.dU)
t(W.iw,W.dV)
t(W.dc,W.cq)
t(W.dX,W.dW)
t(W.iB,W.dX)
t(W.dZ,W.dY)
t(W.dv,W.dZ)
t(W.e0,W.e_)
t(W.iM,W.e0)
t(W.e2,W.e1)
t(W.iQ,W.e2)
t(W.iz,P.cR)
t(P.dL,P.iN)
t(P.a3,P.iG)
t(P.dn,P.dm)
t(P.fw,P.dn)
t(P.dz,P.dy)
t(P.fY,P.dz)
t(P.dK,P.dJ)
t(P.hv,P.dK)
t(P.dS,P.dR)
t(P.hG,P.dS)
t(P.ee,P.da)
t(P.fZ,P.b6)
t(P.dG,P.dF)
t(P.hp,P.dG)
s(K.cu,[K.aH,L.cY])
s(E.ej,[Z.ci,A.cN])
s(D.Y,[D.cw,D.cx,D.u,X.h2])
s(X.h2,[X.cC,X.aG,X.bN,X.cX])
s(D.em,[U.es,U.a9])
t(U.cn,U.a9)
t(U.bE,O.ba)
t(A.eX,A.cN)
s(A.cZ,[A.hK,A.hN,A.hO,A.hP,A.hL,A.d_,A.hM,A.d0,A.bW,A.hR,A.hS,A.bl,A.hT,A.hU])
t(F.hm,F.eN)
t(F.hJ,F.fx)
t(F.bX,F.ie)
t(F.h4,F.ig)
s(F.ih,[F.ic,F.fW])
t(O.cv,O.cS)
t(X.eU,X.hw)
u(H.d1,H.hY)
u(H.c_,P.p)
u(H.c0,H.cs)
u(H.c1,P.p)
u(H.c2,H.cs)
u(P.dq,P.p)
u(P.dT,P.iU)
u(W.db,W.ey)
u(W.dd,P.p)
u(W.de,W.H)
u(W.df,P.p)
u(W.dg,W.H)
u(W.di,P.p)
u(W.dj,W.H)
u(W.dk,P.p)
u(W.dl,W.H)
u(W.dr,P.a1)
u(W.ds,P.a1)
u(W.dt,P.p)
u(W.du,W.H)
u(W.dw,P.p)
u(W.dx,W.H)
u(W.dA,P.p)
u(W.dB,W.H)
u(W.dC,P.a1)
u(W.c3,P.p)
u(W.c4,W.H)
u(W.dD,P.p)
u(W.dE,W.H)
u(W.dI,P.a1)
u(W.dM,P.p)
u(W.dN,W.H)
u(W.c6,P.p)
u(W.c7,W.H)
u(W.dP,P.p)
u(W.dQ,W.H)
u(W.dU,P.p)
u(W.dV,W.H)
u(W.dW,P.p)
u(W.dX,W.H)
u(W.dY,P.p)
u(W.dZ,W.H)
u(W.e_,P.p)
u(W.e0,W.H)
u(W.e1,P.p)
u(W.e2,W.H)
u(P.dm,P.p)
u(P.dn,W.H)
u(P.dy,P.p)
u(P.dz,W.H)
u(P.dJ,P.p)
u(P.dK,W.H)
u(P.dR,P.p)
u(P.dS,W.H)
u(P.da,P.a1)
u(P.dF,P.p)
u(P.dG,W.H)})()
var v={mangledGlobalNames:{r:"int",J:"double",a5:"num",n:"String",cc:"bool",aZ:"Null",o:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:F.ae,args:[F.ae]},{func:1,ret:-1,args:[D.Y]},{func:1,ret:-1,opt:[D.Y]},{func:1,ret:-1,args:[W.at]},{func:1,ret:P.aZ,args:[,,]},{func:1,ret:-1,args:[P.r,[P.l,E.aU]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bj]},{func:1,ret:P.J},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.be]},{func:1,ret:-1,args:[P.r,[P.l,U.a9]]},{func:1,ret:P.aZ,args:[,]},{func:1,ret:P.bk,args:[,,]},{func:1,ret:-1,args:[W.b0]},{func:1,ret:F.ae,args:[F.ae],named:{color:V.C}},{func:1,ret:P.r,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.b9.prototype
C.L=J.a.prototype
C.b=J.aV.prototype
C.c=J.cy.prototype
C.M=J.cz.prototype
C.d=J.bH.prototype
C.a=J.aW.prototype
C.N=J.aX.prototype
C.w=J.h0.prototype
C.n=J.bm.prototype
C.x=W.b0.prototype
C.y=W.bZ.prototype
C.z=new E.b8("Browser.chrome")
C.o=new E.b8("Browser.firefox")
C.p=new E.b8("Browser.edge")
C.A=new E.b8("Browser.other")
C.Y=new P.ei()
C.B=new P.eh()
C.q=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.C=function() {
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
C.H=function(getTagFallback) {
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
C.D=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.E=function(hooks) {
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
C.G=function(hooks) {
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
C.F=function(hooks) {
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
C.r=function(hooks) { return hooks; }

C.I=new P.h_()
C.e=new P.i5()
C.J=new P.i7()
C.f=new P.iH()
C.m=new P.aT(0)
C.K=new P.aT(5e6)
C.t=H.d(u([127,2047,65535,1114111]),[P.r])
C.i=H.d(u([0,0,32776,33792,1,10240,0,0]),[P.r])
C.j=H.d(u([0,0,65490,45055,65535,34815,65534,18431]),[P.r])
C.k=H.d(u([0,0,26624,1023,65534,2047,65534,2047]),[P.r])
C.P=H.d(u([0,0,32722,12287,65534,34815,65534,18431]),[P.r])
C.Q=H.d(u([0,0,65498,45055,65535,34815,65534,18431]),[P.r])
C.h=H.d(u([0,0,24576,1023,65534,34815,65534,18431]),[P.r])
C.u=H.d(u([0,0,32754,11263,65534,34815,65534,18431]),[P.r])
C.R=H.d(u([0,0,32722,12287,65535,34815,65534,18431]),[P.r])
C.v=H.d(u([0,0,65490,12287,65535,34815,65534,18431]),[P.r])
C.O=H.d(u([]),[P.n])
C.S=new H.ev(0,{},C.O,[P.n,P.n])
C.T=new E.bg("OperatingSystem.windows")
C.U=new E.bg("OperatingSystem.mac")
C.V=new E.bg("OperatingSystem.linux")
C.W=new E.bg("OperatingSystem.other")
C.X=new P.bn(null,2)})();(function staticFields(){$.ap=0
$.by=null
$.lb=null
$.me=null
$.m7=null
$.ml=null
$.jj=null
$.jt=null
$.l1=null
$.bq=null
$.ca=null
$.cb=null
$.kW=!1
$.am=C.f
$.a4=[]
$.lj=null
$.lq=null
$.lt=null
$.lu=null
$.lw=null
$.lD=null
$.lF=null
$.lO=null
$.lT=null
$.lQ=null
$.lR=null
$.lS=null
$.lP=null
$.lV=null
$.ls=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"oL","mr",function(){return H.mc("_$dart_dartClosure")})
u($,"oM","l5",function(){return H.mc("_$dart_js")})
u($,"oN","ms",function(){return H.aB(H.hI({
toString:function(){return"$receiver$"}}))})
u($,"oO","mt",function(){return H.aB(H.hI({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"oP","mu",function(){return H.aB(H.hI(null))})
u($,"oQ","mv",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oT","my",function(){return H.aB(H.hI(void 0))})
u($,"oU","mz",function(){return H.aB(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"oS","mx",function(){return H.aB(H.lK(null))})
u($,"oR","mw",function(){return H.aB(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"oW","mB",function(){return H.aB(H.lK(void 0))})
u($,"oV","mA",function(){return H.aB(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"p9","l6",function(){return P.nG()})
u($,"oX","mC",function(){return P.nD()})
u($,"pa","mG",function(){return H.nb(H.j8(H.d([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.r])))})
u($,"pc","mH",function(){return P.np("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pd","mI",function(){return P.o6()})
u($,"p3","mF",function(){return Z.ag(0)})
u($,"oY","mD",function(){return Z.ag(511)})
u($,"p5","aQ",function(){return Z.ag(1)})
u($,"p4","aP",function(){return Z.ag(2)})
u($,"p_","aO",function(){return Z.ag(4)})
u($,"p6","bu",function(){return Z.ag(8)})
u($,"p7","bv",function(){return Z.ag(16)})
u($,"p0","b5",function(){return Z.ag(32)})
u($,"p1","cf",function(){return Z.ag(64)})
u($,"p2","mE",function(){return Z.ag(96)})
u($,"p8","bw",function(){return Z.ag(128)})
u($,"oZ","bt",function(){return Z.ag(256)})
u($,"oK","mq",function(){return new V.eK(1e-9)})
u($,"oJ","D",function(){return $.mq()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.bO,DataView:H.aY,ArrayBufferView:H.aY,Float32Array:H.bP,Float64Array:H.bP,Int16Array:H.fR,Int32Array:H.fS,Int8Array:H.fT,Uint16Array:H.fU,Uint32Array:H.fV,Uint8ClampedArray:H.cG,CanvasPixelArray:H.cG,Uint8Array:H.bQ,HTMLAudioElement:W.k,HTMLBRElement:W.k,HTMLBaseElement:W.k,HTMLBodyElement:W.k,HTMLButtonElement:W.k,HTMLContentElement:W.k,HTMLDListElement:W.k,HTMLDataElement:W.k,HTMLDataListElement:W.k,HTMLDetailsElement:W.k,HTMLDialogElement:W.k,HTMLDivElement:W.k,HTMLEmbedElement:W.k,HTMLFieldSetElement:W.k,HTMLHRElement:W.k,HTMLHeadElement:W.k,HTMLHeadingElement:W.k,HTMLHtmlElement:W.k,HTMLIFrameElement:W.k,HTMLImageElement:W.k,HTMLInputElement:W.k,HTMLLIElement:W.k,HTMLLabelElement:W.k,HTMLLegendElement:W.k,HTMLLinkElement:W.k,HTMLMapElement:W.k,HTMLMediaElement:W.k,HTMLMenuElement:W.k,HTMLMetaElement:W.k,HTMLMeterElement:W.k,HTMLModElement:W.k,HTMLOListElement:W.k,HTMLObjectElement:W.k,HTMLOptGroupElement:W.k,HTMLOptionElement:W.k,HTMLOutputElement:W.k,HTMLParagraphElement:W.k,HTMLParamElement:W.k,HTMLPictureElement:W.k,HTMLPreElement:W.k,HTMLProgressElement:W.k,HTMLQuoteElement:W.k,HTMLScriptElement:W.k,HTMLShadowElement:W.k,HTMLSlotElement:W.k,HTMLSourceElement:W.k,HTMLSpanElement:W.k,HTMLStyleElement:W.k,HTMLTableCaptionElement:W.k,HTMLTableCellElement:W.k,HTMLTableDataCellElement:W.k,HTMLTableHeaderCellElement:W.k,HTMLTableColElement:W.k,HTMLTableElement:W.k,HTMLTableRowElement:W.k,HTMLTableSectionElement:W.k,HTMLTemplateElement:W.k,HTMLTextAreaElement:W.k,HTMLTimeElement:W.k,HTMLTitleElement:W.k,HTMLTrackElement:W.k,HTMLUListElement:W.k,HTMLUnknownElement:W.k,HTMLVideoElement:W.k,HTMLDirectoryElement:W.k,HTMLFontElement:W.k,HTMLFrameElement:W.k,HTMLFrameSetElement:W.k,HTMLMarqueeElement:W.k,HTMLElement:W.k,AccessibleNodeList:W.e7,HTMLAnchorElement:W.e9,HTMLAreaElement:W.ea,Blob:W.b7,HTMLCanvasElement:W.b9,CDATASection:W.aS,CharacterData:W.aS,Comment:W.aS,ProcessingInstruction:W.aS,Text:W.aS,CSSPerspective:W.ex,CSSCharsetRule:W.F,CSSConditionRule:W.F,CSSFontFaceRule:W.F,CSSGroupingRule:W.F,CSSImportRule:W.F,CSSKeyframeRule:W.F,MozCSSKeyframeRule:W.F,WebKitCSSKeyframeRule:W.F,CSSKeyframesRule:W.F,MozCSSKeyframesRule:W.F,WebKitCSSKeyframesRule:W.F,CSSMediaRule:W.F,CSSNamespaceRule:W.F,CSSPageRule:W.F,CSSRule:W.F,CSSStyleRule:W.F,CSSSupportsRule:W.F,CSSViewportRule:W.F,CSSStyleDeclaration:W.bA,MSStyleCSSProperties:W.bA,CSS2Properties:W.bA,CSSImageValue:W.ab,CSSKeywordValue:W.ab,CSSNumericValue:W.ab,CSSPositionValue:W.ab,CSSResourceValue:W.ab,CSSUnitValue:W.ab,CSSURLImageValue:W.ab,CSSStyleValue:W.ab,CSSMatrixComponent:W.aq,CSSRotation:W.aq,CSSScale:W.aq,CSSSkew:W.aq,CSSTranslation:W.aq,CSSTransformComponent:W.aq,CSSTransformValue:W.ez,CSSUnparsedValue:W.eA,DataTransferItemList:W.eC,DOMException:W.eD,ClientRectList:W.cp,DOMRectList:W.cp,DOMRectReadOnly:W.cq,DOMStringList:W.eE,DOMTokenList:W.eF,Element:W.S,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.e,Accelerometer:W.e,AccessibleNode:W.e,AmbientLightSensor:W.e,Animation:W.e,ApplicationCache:W.e,DOMApplicationCache:W.e,OfflineResourceList:W.e,BackgroundFetchRegistration:W.e,BatteryManager:W.e,BroadcastChannel:W.e,CanvasCaptureMediaStreamTrack:W.e,DedicatedWorkerGlobalScope:W.e,EventSource:W.e,FileReader:W.e,FontFaceSet:W.e,Gyroscope:W.e,XMLHttpRequest:W.e,XMLHttpRequestEventTarget:W.e,XMLHttpRequestUpload:W.e,LinearAccelerationSensor:W.e,Magnetometer:W.e,MediaDevices:W.e,MediaKeySession:W.e,MediaQueryList:W.e,MediaRecorder:W.e,MediaSource:W.e,MediaStream:W.e,MediaStreamTrack:W.e,MIDIAccess:W.e,MIDIInput:W.e,MIDIOutput:W.e,MIDIPort:W.e,NetworkInformation:W.e,Notification:W.e,OffscreenCanvas:W.e,OrientationSensor:W.e,PaymentRequest:W.e,Performance:W.e,PermissionStatus:W.e,PresentationAvailability:W.e,PresentationConnection:W.e,PresentationConnectionList:W.e,PresentationRequest:W.e,RelativeOrientationSensor:W.e,RemotePlayback:W.e,RTCDataChannel:W.e,DataChannel:W.e,RTCDTMFSender:W.e,RTCPeerConnection:W.e,webkitRTCPeerConnection:W.e,mozRTCPeerConnection:W.e,ScreenOrientation:W.e,Sensor:W.e,ServiceWorker:W.e,ServiceWorkerContainer:W.e,ServiceWorkerGlobalScope:W.e,ServiceWorkerRegistration:W.e,SharedWorker:W.e,SharedWorkerGlobalScope:W.e,SpeechRecognition:W.e,SpeechSynthesis:W.e,SpeechSynthesisUtterance:W.e,VR:W.e,VRDevice:W.e,VRDisplay:W.e,VRSession:W.e,VisualViewport:W.e,WebSocket:W.e,Worker:W.e,WorkerGlobalScope:W.e,WorkerPerformance:W.e,BluetoothDevice:W.e,BluetoothRemoteGATTCharacteristic:W.e,Clipboard:W.e,MojoInterfaceInterceptor:W.e,USB:W.e,IDBDatabase:W.e,IDBOpenDBRequest:W.e,IDBVersionChangeRequest:W.e,IDBRequest:W.e,IDBTransaction:W.e,AnalyserNode:W.e,RealtimeAnalyserNode:W.e,AudioBufferSourceNode:W.e,AudioDestinationNode:W.e,AudioNode:W.e,AudioScheduledSourceNode:W.e,AudioWorkletNode:W.e,BiquadFilterNode:W.e,ChannelMergerNode:W.e,AudioChannelMerger:W.e,ChannelSplitterNode:W.e,AudioChannelSplitter:W.e,ConstantSourceNode:W.e,ConvolverNode:W.e,DelayNode:W.e,DynamicsCompressorNode:W.e,GainNode:W.e,AudioGainNode:W.e,IIRFilterNode:W.e,MediaElementAudioSourceNode:W.e,MediaStreamAudioDestinationNode:W.e,MediaStreamAudioSourceNode:W.e,OscillatorNode:W.e,Oscillator:W.e,PannerNode:W.e,AudioPannerNode:W.e,webkitAudioPannerNode:W.e,ScriptProcessorNode:W.e,JavaScriptAudioNode:W.e,StereoPannerNode:W.e,WaveShaperNode:W.e,EventTarget:W.e,File:W.aj,FileList:W.bD,FileWriter:W.eO,HTMLFormElement:W.eS,Gamepad:W.ar,History:W.eV,HTMLCollection:W.bF,HTMLFormControlsCollection:W.bF,HTMLOptionsCollection:W.bF,ImageData:W.bG,KeyboardEvent:W.be,Location:W.fD,MediaList:W.fK,MessagePort:W.bM,MIDIInputMap:W.fL,MIDIOutputMap:W.fN,MimeType:W.as,MimeTypeArray:W.fP,PointerEvent:W.at,MouseEvent:W.at,DragEvent:W.at,Document:W.B,DocumentFragment:W.B,HTMLDocument:W.B,ShadowRoot:W.B,XMLDocument:W.B,Attr:W.B,DocumentType:W.B,Node:W.B,NodeList:W.cH,RadioNodeList:W.cH,Plugin:W.au,PluginArray:W.h1,RTCStatsReport:W.hb,HTMLSelectElement:W.he,SourceBuffer:W.aw,SourceBufferList:W.hn,SpeechGrammar:W.ax,SpeechGrammarList:W.ho,SpeechRecognitionResult:W.ay,Storage:W.hs,CSSStyleSheet:W.ak,StyleSheet:W.ak,TextTrack:W.az,TextTrackCue:W.al,VTTCue:W.al,TextTrackCueList:W.hy,TextTrackList:W.hz,TimeRanges:W.hB,Touch:W.aA,TouchEvent:W.bj,TouchList:W.hE,TrackDefaultList:W.hF,CompositionEvent:W.b_,FocusEvent:W.b_,TextEvent:W.b_,UIEvent:W.b_,URL:W.i4,VideoTrackList:W.il,WheelEvent:W.b0,Window:W.bZ,DOMWindow:W.bZ,CSSRuleList:W.iw,ClientRect:W.dc,DOMRect:W.dc,GamepadList:W.iB,NamedNodeMap:W.dv,MozNamedAttrMap:W.dv,SpeechRecognitionResultList:W.iM,StyleSheetList:W.iQ,SVGLength:P.aE,SVGLengthList:P.fw,SVGNumber:P.aI,SVGNumberList:P.fY,SVGPointList:P.h3,SVGStringList:P.hv,SVGAElement:P.j,SVGAnimateElement:P.j,SVGAnimateMotionElement:P.j,SVGAnimateTransformElement:P.j,SVGAnimationElement:P.j,SVGCircleElement:P.j,SVGClipPathElement:P.j,SVGDefsElement:P.j,SVGDescElement:P.j,SVGDiscardElement:P.j,SVGEllipseElement:P.j,SVGFEBlendElement:P.j,SVGFEColorMatrixElement:P.j,SVGFEComponentTransferElement:P.j,SVGFECompositeElement:P.j,SVGFEConvolveMatrixElement:P.j,SVGFEDiffuseLightingElement:P.j,SVGFEDisplacementMapElement:P.j,SVGFEDistantLightElement:P.j,SVGFEFloodElement:P.j,SVGFEFuncAElement:P.j,SVGFEFuncBElement:P.j,SVGFEFuncGElement:P.j,SVGFEFuncRElement:P.j,SVGFEGaussianBlurElement:P.j,SVGFEImageElement:P.j,SVGFEMergeElement:P.j,SVGFEMergeNodeElement:P.j,SVGFEMorphologyElement:P.j,SVGFEOffsetElement:P.j,SVGFEPointLightElement:P.j,SVGFESpecularLightingElement:P.j,SVGFESpotLightElement:P.j,SVGFETileElement:P.j,SVGFETurbulenceElement:P.j,SVGFilterElement:P.j,SVGForeignObjectElement:P.j,SVGGElement:P.j,SVGGeometryElement:P.j,SVGGraphicsElement:P.j,SVGImageElement:P.j,SVGLineElement:P.j,SVGLinearGradientElement:P.j,SVGMarkerElement:P.j,SVGMaskElement:P.j,SVGMetadataElement:P.j,SVGPathElement:P.j,SVGPatternElement:P.j,SVGPolygonElement:P.j,SVGPolylineElement:P.j,SVGRadialGradientElement:P.j,SVGRectElement:P.j,SVGScriptElement:P.j,SVGSetElement:P.j,SVGStopElement:P.j,SVGStyleElement:P.j,SVGElement:P.j,SVGSVGElement:P.j,SVGSwitchElement:P.j,SVGSymbolElement:P.j,SVGTSpanElement:P.j,SVGTextContentElement:P.j,SVGTextElement:P.j,SVGTextPathElement:P.j,SVGTextPositioningElement:P.j,SVGTitleElement:P.j,SVGUseElement:P.j,SVGViewElement:P.j,SVGGradientElement:P.j,SVGComponentTransferFunctionElement:P.j,SVGFEDropShadowElement:P.j,SVGMPathElement:P.j,SVGTransform:P.aK,SVGTransformList:P.hG,AudioBuffer:P.ed,AudioParamMap:P.ee,AudioTrackList:P.eg,AudioContext:P.b6,webkitAudioContext:P.b6,BaseAudioContext:P.b6,OfflineAudioContext:P.fZ,SQLResultSetRowList:P.hp})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.c_.$nativeSuperclassTag="ArrayBufferView"
H.c0.$nativeSuperclassTag="ArrayBufferView"
H.bP.$nativeSuperclassTag="ArrayBufferView"
H.c1.$nativeSuperclassTag="ArrayBufferView"
H.c2.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
W.c3.$nativeSuperclassTag="EventTarget"
W.c4.$nativeSuperclassTag="EventTarget"
W.c6.$nativeSuperclassTag="EventTarget"
W.c7.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(Z.mj,[])
else Z.mj([])})})()
//# sourceMappingURL=test.dart.js.map
