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
a[c]=function(){a[c]=function(){H.lD(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.iI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.iI"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.iI(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={iw:function iw(){},
ks:function(a,b,c,d){if(!!a.$im)return new H.ee(a,b,[c,d])
return new H.bs(a,b,[c,d])},
eC:function(){return new P.bB("No element")},
km:function(){return new P.bB("Too many elements")},
kK:function(a,b){var u=J.ay(a)
if(typeof u!=="number")return u.P()
H.cw(a,0,u-1,b)},
cw:function(a,b,c,d){if(c-b<=32)H.kJ(a,b,c,d)
else H.kI(a,b,c,d)},
kJ:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.dH(a);u<=c;++u){s=t.j(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.j(a,r-1),s)
if(typeof q!=="number")return q.M()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.j(a,p))
r=p}t.m(a,r,s)}},
kI:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.d.Z(a5-a4+1,6),i=a4+j,h=a5-j,g=C.d.Z(a4+a5,2),f=g-j,e=g+j,d=J.dH(a3),c=d.j(a3,i),b=d.j(a3,f),a=d.j(a3,g),a0=d.j(a3,e),a1=d.j(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.M()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.j(a3,a4))
d.m(a3,e,d.j(a3,a5))
t=a4+1
s=a5-1
if(J.D(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.j(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.a0()
if(p<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.M()
if(p>0){--s
continue}else{o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
s=o
t=n
break}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)
s=o
break}}}}m=!0}else{for(r=t;r<=s;++r){q=d.j(a3,r)
l=a6.$2(q,b)
if(typeof l!=="number")return l.a0()
if(l<0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.M()
if(k>0)for(;!0;){p=a6.$2(d.j(a3,s),a0)
if(typeof p!=="number")return p.M()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.a0()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}}}m=!1}a2=t-1
d.m(a3,a4,d.j(a3,a2))
d.m(a3,a2,b)
a2=s+1
d.m(a3,a5,d.j(a3,a2))
d.m(a3,a2,a0)
H.cw(a3,a4,t-2,a6)
H.cw(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.D(a6.$2(d.j(a3,t),b),0);)++t
for(;J.D(a6.$2(d.j(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.j(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.j(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.j(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.j(a3,s),b)
if(typeof p!=="number")return p.a0()
o=s-1
if(p<0){d.m(a3,r,d.j(a3,t))
n=t+1
d.m(a3,t,d.j(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.j(a3,s))
d.m(a3,s,q)}s=o
break}}H.cw(a3,t,s,a6)}else H.cw(a3,t,s,a6)},
k:function k(a){this.a=a},
m:function m(){},
ch:function ch(){},
aH:function aH(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bs:function bs(a,b,c){this.a=a
this.b=b
this.$ti=c},
ee:function ee(a,b,c){this.a=a
this.b=b
this.$ti=c},
ci:function ci(a,b){this.a=null
this.b=a
this.c=b},
eU:function eU(a,b,c){this.a=a
this.b=b
this.$ti=c},
bG:function bG(a,b,c){this.a=a
this.b=b
this.$ti=c},
hx:function hx(a,b){this.a=a
this.b=b},
c7:function c7(){},
hf:function hf(){},
cI:function cI(){},
bU:function(a){var u,t=H.lF(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
lm:function(a){return v.types[a]},
lt:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.I(a).$iq},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a_(a)
if(typeof u!=="string")throw H.c(H.aQ(a))
return u},
by:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
bz:function(a){return H.kt(a)+H.jy(H.bT(a),0,null)},
kt:function(a){var u,t,s,r,q,p,o,n=J.I(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.G||!!n.$ib4){r=C.m(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.bU(t.length>1&&C.b.ai(t,0)===36?C.b.aG(t,1):t)},
jd:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
kC:function(a){var u,t,s,r=H.b([],[P.A])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aQ(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.d.au(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.aQ(s))}return H.jd(r)},
kB:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.aQ(s))
if(s<0)throw H.c(H.aQ(s))
if(s>65535)return H.kC(a)}return H.jd(a)},
iz:function(a){var u
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.d.au(u,10))>>>0,56320|u&1023)}throw H.c(P.ao(a,0,1114111,null,null))},
b1:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
kA:function(a){var u=H.b1(a).getFullYear()+0
return u},
ky:function(a){var u=H.b1(a).getMonth()+1
return u},
ku:function(a){var u=H.b1(a).getDate()+0
return u},
kv:function(a){var u=H.b1(a).getHours()+0
return u},
kx:function(a){var u=H.b1(a).getMinutes()+0
return u},
kz:function(a){var u=H.b1(a).getSeconds()+0
return u},
kw:function(a){var u=H.b1(a).getMilliseconds()+0
return u},
R:function(a){throw H.c(H.aQ(a))},
f:function(a,b){if(a==null)J.ay(a)
throw H.c(H.ba(a,b))},
ba:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a0(!0,b,s,null)
u=J.ay(a)
if(!(b<0)){if(typeof u!=="number")return H.R(u)
t=b>=u}else t=!0
if(t)return P.y(b,a,s,null,u)
return P.cs(b,s)},
lg:function(a,b,c){var u="Invalid value"
if(a>c)return new P.b2(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.b2(a,c,!0,b,"end",u)
return new P.a0(!0,b,"end",null)},
aQ:function(a){return new P.a0(!0,a,null,null)},
c:function(a){var u
if(a==null)a=new P.co()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.jK})
u.name=""}else u.toString=H.jK
return u},
jK:function(){return J.a_(this.dartException)},
N:function(a){throw H.c(a)},
u:function(a){throw H.c(P.aA(a))},
aa:function(a){var u,t,s,r,q,p
a=H.jJ(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.fY(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
fZ:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
jl:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
j9:function(a,b){return new H.fb(a,b==null?null:b.method)},
ix:function(a,b){var u=b==null,t=u?null:b.method
return new H.eJ(a,t,u?null:b.receiver)},
ac:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.il(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.d.au(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ix(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.j9(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.jN()
q=$.jO()
p=$.jP()
o=$.jQ()
n=$.jT()
m=$.jU()
l=$.jS()
$.jR()
k=$.jW()
j=$.jV()
i=r.V(u)
if(i!=null)return f.$1(H.ix(u,i))
else{i=q.V(u)
if(i!=null){i.method="call"
return f.$1(H.ix(u,i))}else{i=p.V(u)
if(i==null){i=o.V(u)
if(i==null){i=n.V(u)
if(i==null){i=m.V(u)
if(i==null){i=l.V(u)
if(i==null){i=o.V(u)
if(i==null){i=k.V(u)
if(i==null){i=j.V(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.j9(u,i))}}return f.$1(new H.he(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.cx()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.a0(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.cx()
return a},
iL:function(a){var u
if(a==null)return new H.dk(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.dk(a)},
lk:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
ls:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.J("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.ls)
a.$identity=u
return u},
kf:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.fF().constructor.prototype):Object.create(new H.bh(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.a1
if(typeof t!=="number")return t.O()
$.a1=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.iZ(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.kb(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.iZ(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
kb:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.lm,a)
if(typeof a=="function")if(b)return a
else{u=c?H.iX:H.io
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
kc:function(a,b,c,d){var u=H.io
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
iZ:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.ke(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.kc(t,!r,u,b)
if(t===0){r=$.a1
if(typeof r!=="number")return r.O()
$.a1=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bi
return new Function(r+H.e(q==null?$.bi=H.dV("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.a1
if(typeof r!=="number")return r.O()
$.a1=r+1
o+=r
r="return function("+o+"){return this."
q=$.bi
return new Function(r+H.e(q==null?$.bi=H.dV("self"):q)+"."+H.e(u)+"("+o+");}")()},
kd:function(a,b,c,d){var u=H.io,t=H.iX
switch(b?-1:a){case 0:throw H.c(H.kG("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
ke:function(a,b){var u,t,s,r,q,p,o,n=$.bi
if(n==null)n=$.bi=H.dV("self")
u=$.iW
if(u==null)u=$.iW=H.dV("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.kd(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.a1
if(typeof u!=="number")return u.O()
$.a1=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.a1
if(typeof u!=="number")return u.O()
$.a1=u+1
return new Function(n+u+"}")()},
iI:function(a,b,c,d,e,f,g){return H.kf(a,b,c,d,!!e,!!f,g)},
io:function(a){return a.a},
iX:function(a){return a.c},
dV:function(a){var u,t,s,r=new H.bh("self","target","receiver","name"),q=J.iu(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
lx:function(a,b){throw H.c(H.ka(a,H.bU(b.substring(2))))},
dJ:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.I(a)[b]
else u=!0
if(u)return a
H.lx(a,b)},
li:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
ka:function(a,b){return new H.dW("CastError: "+P.is(a)+": type '"+H.e(H.l9(a))+"' is not a subtype of type '"+b+"'")},
l9:function(a){var u,t=J.I(a)
if(!!t.$ibj){u=H.li(t)
if(u!=null)return H.ly(u)
return"Closure"}return H.bz(a)},
lD:function(a){throw H.c(new P.e4(a))},
kG:function(a){return new H.fq(a)},
jE:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
bT:function(a){if(a==null)return
return a.$ti},
mb:function(a,b,c){return H.ij(a["$a"+H.e(c)],H.bT(b))},
ll:function(a,b,c,d){var u=H.ij(a["$a"+H.e(c)],H.bT(b))
return u==null?null:u[d]},
iK:function(a,b,c){var u=H.ij(a["$a"+H.e(b)],H.bT(a))
return u==null?null:u[c]},
Z:function(a,b){var u=H.bT(a)
return u==null?null:u[b]},
ly:function(a){return H.aP(a,null)},
aP:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.bU(a[0].name)+H.jy(a,1,b)
if(typeof a=="function")return H.bU(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.f(b,t)
return H.e(b[t])}if('func' in a)return H.l_(a,b)
if('futureOr' in a)return"FutureOr<"+H.aP("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
l_:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.f(a0,m)
p=C.b.O(p,a0[m])
l=u[q]
if(l!=null&&l!==P.L)p+=" extends "+H.aP(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.aP(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.aP(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.aP(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.lj(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.aP(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
jy:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.aL("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.aP(p,c)}return"<"+u.h(0)+">"},
ij:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
m9:function(a,b,c){return a.apply(b,H.ij(J.I(b)["$a"+H.e(c)],H.bT(b)))},
ma:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lu:function(a){var u,t,s,r,q=$.jF.$1(a),p=$.i7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ie[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.jB.$2(a,q)
if(q!=null){p=$.i7[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.ie[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.ih(u)
$.i7[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.ie[q]=u
return u}if(s==="-"){r=H.ih(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.jH(a,u)
if(s==="*")throw H.c(P.jm(q))
if(v.leafTags[q]===true){r=H.ih(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.jH(a,u)},
jH:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.iN(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
ih:function(a){return J.iN(a,!1,null,!!a.$iq)},
lv:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.ih(u)
else return J.iN(u,c,null,null)},
lq:function(){if(!0===$.iM)return
$.iM=!0
H.lr()},
lr:function(){var u,t,s,r,q,p,o,n
$.i7=Object.create(null)
$.ie=Object.create(null)
H.lp()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.jI.$1(q)
if(p!=null){o=H.lv(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
lp:function(){var u,t,s,r,q,p,o=C.u()
o=H.b8(C.v,H.b8(C.w,H.b8(C.n,H.b8(C.n,H.b8(C.x,H.b8(C.y,H.b8(C.z(C.m),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.jF=new H.ib(r)
$.jB=new H.ic(q)
$.jI=new H.id(p)},
b8:function(a,b){return a(b)||b},
kp:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(new P.es("Illegal RegExp pattern ("+String(p)+")",a))},
lA:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
lh:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
jJ:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
iP:function(a,b,c){var u=H.lB(a,b,c)
return u},
lB:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.jJ(b),'g'),H.lh(c))},
fY:function fY(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fb:function fb(a,b){this.a=a
this.b=b},
eJ:function eJ(a,b,c){this.a=a
this.b=b
this.c=c},
he:function he(a){this.a=a},
il:function il(a){this.a=a},
dk:function dk(a){this.a=a
this.b=null},
bj:function bj(){},
fN:function fN(){},
fF:function fF(){},
bh:function bh(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dW:function dW(a){this.a=a},
fq:function fq(a){this.a=a},
a4:function a4(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eI:function eI(a){this.a=a},
eN:function eN(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
b_:function b_(a,b){this.a=a
this.$ti=b},
eO:function eO(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
ib:function ib(a){this.a=a},
ic:function ic(a){this.a=a},
id:function id(a){this.a=a},
eH:function eH(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
iF:function(a){return a},
ab:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.ba(b,a))},
kZ:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.lg(a,b,c))
return b},
bx:function bx(){},
cj:function cj(){},
bw:function bw(){},
ck:function ck(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
cl:function cl(){},
f7:function f7(){},
bJ:function bJ(){},
bK:function bK(){},
bL:function bL(){},
bM:function bM(){},
lj:function(a){return J.j4(a?Object.keys(a):[],null)},
lF:function(a){return v.mangledGlobalNames[a]},
lw:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
iN:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ia:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.iM==null){H.lq()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.jm("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.iR()]
if(r!=null)return r
r=H.lu(a)
if(r!=null)return r
if(typeof a=="function")return C.H
u=Object.getPrototypeOf(a)
if(u==null)return C.p
if(u===Object.prototype)return C.p
if(typeof s=="function"){Object.defineProperty(s,$.iR(),{value:C.k,enumerable:false,writable:true,configurable:true})
return C.k}return C.k},
kn:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.im(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.ao(a,0,4294967295,"length",null))
return J.j4(new Array(a),b)},
j4:function(a,b){return J.iu(H.b(a,[b]))},
iu:function(a){a.fixed$length=Array
return a},
ko:function(a,b){return J.k4(a,b)},
I:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cd.prototype
return J.eF.prototype}if(typeof a=="string")return J.aE.prototype
if(a==null)return J.eG.prototype
if(typeof a=="boolean")return J.eE.prototype
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.L)return a
return J.ia(a)},
dH:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.L)return a
return J.ia(a)},
i9:function(a){if(a==null)return a
if(a.constructor==Array)return J.aD.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.L)return a
return J.ia(a)},
jD:function(a){if(typeof a=="number")return J.bp.prototype
if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.b4.prototype
return a},
iJ:function(a){if(typeof a=="string")return J.aE.prototype
if(a==null)return a
if(!(a instanceof P.L))return J.b4.prototype
return a},
dI:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aF.prototype
return a}if(a instanceof P.L)return a
return J.ia(a)},
D:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.I(a).q(a,b)},
iT:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.jD(a).J(a,b)},
k1:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.lt(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.dH(a).j(a,b)},
k2:function(a,b,c){return J.dI(a).dq(a,b,c)},
k3:function(a,b,c,d){return J.dI(a).dD(a,b,c,d)},
k4:function(a,b){return J.jD(a).ae(a,b)},
dK:function(a,b){return J.i9(a).t(a,b)},
k5:function(a,b){return J.i9(a).E(a,b)},
k6:function(a){return J.dI(a).gdH(a)},
dL:function(a){return J.I(a).gC(a)},
ax:function(a){return J.i9(a).gF(a)},
ay:function(a){return J.dH(a).gk(a)},
iU:function(a){return J.i9(a).eg(a)},
k7:function(a,b){return J.dI(a).ej(a,b)},
k8:function(a,b,c){return J.iJ(a).aq(a,b,c)},
k9:function(a){return J.iJ(a).eq(a)},
a_:function(a){return J.I(a).h(a)},
a:function a(){},
eE:function eE(){},
eG:function eG(){},
ce:function ce(){},
ff:function ff(){},
b4:function b4(){},
aF:function aF(){},
aD:function aD(a){this.$ti=a},
iv:function iv(a){this.$ti=a},
S:function S(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bp:function bp(){},
cd:function cd(){},
eF:function eF(){},
aE:function aE(){}},P={
kO:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.la()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.b9(new P.hz(s),1)).observe(u,{childList:true})
return new P.hy(s,u,t)}else if(self.setImmediate!=null)return P.lb()
return P.lc()},
kP:function(a){self.scheduleImmediate(H.b9(new P.hA(a),0))},
kQ:function(a){self.setImmediate(H.b9(new P.hB(a),0))},
kR:function(a){P.iC(C.h,a)},
iC:function(a,b){var u=C.d.Z(a.a,1000)
return P.kX(u<0?0:u,b)},
jk:function(a,b){var u=C.d.Z(a.a,1000)
return P.kY(u<0?0:u,b)},
kX:function(a,b){var u=new P.dr()
u.cn(a,b)
return u},
kY:function(a,b){var u=new P.dr()
u.co(a,b)
return u},
m7:function(a){return new P.b5(a,1)},
kU:function(){return C.L},
kV:function(a){return new P.b5(a,3)},
l2:function(a,b){return new P.hX(a,[b])},
l3:function(){var u,t
for(;u=$.b7,u!=null;){$.bS=null
t=u.b
$.b7=t
if(t==null)$.bR=null
u.a.$0()}},
l8:function(){$.iG=!0
try{P.l3()}finally{$.bS=null
$.iG=!1
if($.b7!=null)$.iS().$1(P.jC())}},
l6:function(a){var u=new P.cM(a)
if($.b7==null){$.b7=$.bR=u
if(!$.iG)$.iS().$1(P.jC())}else $.bR=$.bR.b=u},
l7:function(a){var u,t,s=$.b7
if(s==null){P.l6(a)
$.bS=$.bR
return}u=new P.cM(a)
t=$.bS
if(t==null){u.b=s
$.b7=$.bS=u}else{u.b=t.b
$.bS=t.b=u
if(u.b==null)$.bR=u}},
jj:function(a,b){var u=$.Y
if(u===C.e)return P.iC(a,b)
return P.iC(a,u.dI(b))},
kM:function(a,b){var u=$.Y
if(u===C.e)return P.jk(a,b)
return P.jk(a,u.bv(b,P.cD))},
jz:function(a,b,c,d,e){var u={}
u.a=d
P.l7(new P.i4(u,e))},
l4:function(a,b,c,d){var u,t=$.Y
if(t===c)return d.$0()
$.Y=c
u=t
try{t=d.$0()
return t}finally{$.Y=u}},
l5:function(a,b,c,d,e){var u,t=$.Y
if(t===c)return d.$1(e)
$.Y=c
u=t
try{t=d.$1(e)
return t}finally{$.Y=u}},
hz:function hz(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
hA:function hA(a){this.a=a},
hB:function hB(a){this.a=a},
dr:function dr(){this.c=0},
i0:function i0(a,b){this.a=a
this.b=b},
i_:function i_(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b5:function b5(a,b){this.a=a
this.b=b},
b6:function b6(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hX:function hX(a,b){this.a=a
this.$ti=b},
cM:function cM(a){this.a=a
this.b=null},
cz:function cz(){},
fI:function fI(){},
cD:function cD(){},
i3:function i3(){},
i4:function i4(a,b){this.a=a
this.b=b},
hN:function hN(){},
hO:function hO(a,b){this.a=a
this.b=b},
hP:function hP(a,b,c){this.a=a
this.b=b
this.c=c},
j5:function(a,b){return new H.a4([a,b])},
kq:function(a){return H.lk(a,new H.a4([null,null]))},
bq:function(a){return new P.hK([a])},
iE:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
kW:function(a,b){var u=new P.d1(a,b)
u.c=a.e
return u},
kl:function(a,b,c){var u,t
if(P.iH(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.Q.push(a)
try{P.l1(a,u)}finally{if(0>=$.Q.length)return H.f($.Q,-1)
$.Q.pop()}t=P.jh(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
it:function(a,b,c){var u,t
if(P.iH(a))return b+"..."+c
u=new P.aL(b)
$.Q.push(a)
try{t=u
t.a=P.jh(t.a,a,", ")}finally{if(0>=$.Q.length)return H.f($.Q,-1)
$.Q.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
iH:function(a){var u,t
for(u=$.Q.length,t=0;t<u;++t)if(a===$.Q[t])return!0
return!1},
l1:function(a,b){var u,t,s,r,q,p,o,n=a.gF(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.p())return
u=H.e(n.gv(n))
b.push(u)
m+=u.length+2;++l}if(!n.p()){if(l<=5)return
if(0>=b.length)return H.f(b,-1)
t=b.pop()
if(0>=b.length)return H.f(b,-1)
s=b.pop()}else{r=n.gv(n);++l
if(!n.p()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.f(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gv(n);++l
for(;n.p();r=q,q=p){p=n.gv(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.e(r)
t=H.e(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.f(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
j6:function(a,b){var u,t,s=P.bq(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.u)(a),++t)s.n(0,a[t])
return s},
j7:function(a){var u,t={}
if(P.iH(a))return"{...}"
u=new P.aL("")
try{$.Q.push(a)
u.a+="{"
t.a=!0
J.k5(a,new P.eT(t,u))
u.a+="}"}finally{if(0>=$.Q.length)return H.f($.Q,-1)
$.Q.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
hK:function hK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hL:function hL(a){this.a=a
this.c=this.b=null},
d1:function d1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
eB:function eB(){},
eP:function eP(){},
p:function p(){},
eS:function eS(){},
eT:function eT(a,b){this.a=a
this.b=b},
K:function K(){},
hR:function hR(){},
d2:function d2(){},
dY:function dY(){},
e_:function e_(){},
eg:function eg(){},
ez:function ez(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
ey:function ey(a){this.a=a},
hi:function hi(){},
hj:function hj(){},
i1:function i1(a){this.b=0
this.c=a},
kj:function(a){if(a instanceof H.bj)return a.h(0)
return"Instance of '"+H.e(H.bz(a))+"'"},
kr:function(a,b,c){var u,t,s=J.kn(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
iy:function(a,b,c){var u,t=H.b([],[c])
for(u=J.ax(a);u.p();)t.push(u.gv(u))
if(b)return t
return J.iu(t)},
iB:function(a){var u,t=a.length,s=P.iA(0,null,t)
if(typeof s!=="number")return s.a0()
u=s<t
return H.kB(u?C.a.c6(a,0,s):a)},
kD:function(a){return new H.eH(a,H.kp(a,!1,!0,!1,!1,!1))},
jh:function(a,b,c){var u=J.ax(b)
if(!u.p())return a
if(c.length===0){do a+=H.e(u.gv(u))
while(u.p())}else{a+=H.e(u.gv(u))
for(;u.p();)a=a+c+H.e(u.gv(u))}return a},
jx:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.k0().b
u=u.test(b)}else u=!1
if(u)return b
t=C.B.dL(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.f(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.iz(q)
else r=r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
kg:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
kh:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
c3:function(a){if(a>=10)return""+a
return"0"+a},
j1:function(a){return new P.aC(1000*a)},
is:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.kj(a)},
im:function(a,b,c){return new P.a0(!0,a,b,c)},
cs:function(a,b){return new P.b2(null,null,!0,a,b,"Value not in range")},
ao:function(a,b,c,d,e){return new P.b2(b,c,!0,a,d,"Invalid value")},
iA:function(a,b,c){var u
if(typeof a!=="number")return H.R(a)
if(0<=a){if(typeof c!=="number")return H.R(c)
u=a>c}else u=!0
if(u)throw H.c(P.ao(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.R(c)
u=b>c}else u=!0
if(u)throw H.c(P.ao(b,a,c,"end",null))
return b}return c},
je:function(a,b){if(typeof a!=="number")return a.a0()
if(a<0)throw H.c(P.ao(a,0,null,b,null))},
y:function(a,b,c,d,e){var u=e==null?J.ay(b):e
return new P.eA(u,!0,a,c,"Index out of range")},
r:function(a){return new P.hg(a)},
jm:function(a){return new P.hd(a)},
jg:function(a){return new P.bB(a)},
aA:function(a){return new P.dZ(a)},
J:function(a){return new P.cU(a)},
iO:function(a){H.lw(a)},
aR:function aR(){},
aB:function aB(a,b){this.a=a
this.b=b},
C:function C(){},
aC:function aC(a){this.a=a},
ec:function ec(){},
ed:function ed(){},
aX:function aX(){},
co:function co(){},
a0:function a0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
b2:function b2(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
eA:function eA(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
hg:function hg(a){this.a=a},
hd:function hd(a){this.a=a},
bB:function bB(a){this.a=a},
dZ:function dZ(a){this.a=a},
fe:function fe(){},
cx:function cx(){},
e4:function e4(a){this.a=a},
cU:function cU(a){this.a=a},
es:function es(a,b){this.a=a
this.b=b},
eu:function eu(){},
A:function A(){},
j:function j(){},
eD:function eD(){},
b0:function b0(){},
br:function br(){},
aJ:function aJ(){},
V:function V(){},
L:function L(){},
o:function o(){},
aL:function aL(a){this.a=a},
av:function(a){var u,t,s,r,q
if(a==null)return
u=P.j5(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
le:function(a){var u={}
a.E(0,new P.i5(u))
return u},
i5:function i5(a){this.a=a},
eo:function eo(a,b){this.a=a
this.b=b},
ep:function ep(){},
eq:function eq(){},
hM:function hM(){},
X:function X(){},
aG:function aG(){},
eL:function eL(){},
aK:function aK(){},
fc:function fc(){},
fi:function fi(){},
bA:function bA(){},
fJ:function fJ(){},
i:function i(){},
aM:function aM(){},
fX:function fX(){},
d_:function d_(){},
d0:function d0(){},
da:function da(){},
db:function db(){},
dm:function dm(){},
dn:function dn(){},
du:function du(){},
dv:function dv(){},
dQ:function dQ(){},
dR:function dR(){},
dS:function dS(a){this.a=a},
dT:function dT(){},
aS:function aS(){},
fd:function fd(){},
cN:function cN(){},
fE:function fE(){},
di:function di(){},
dj:function dj(){}},W={
iV:function(){var u=document.createElement("a")
return u},
iY:function(){var u=document.createElement("canvas")
return u},
ki:function(a,b,c){var u=document.body,t=(u&&C.l).U(u,a,b,c)
t.toString
u=new H.bG(new W.M(t),new W.ef(),[W.t])
return u.ga8(u)},
iq:function(a){return"wheel"},
bl:function(a){var u,t,s,r="element tag unavailable"
try{u=J.dI(a)
t=u.gbU(a)
if(typeof t==="string")r=u.gbU(a)}catch(s){H.ac(s)}return r},
hJ:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
jv:function(a,b,c,d){var u=W.hJ(W.hJ(W.hJ(W.hJ(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
H:function(a,b,c,d){var u=W.jA(new W.hH(c),W.h)
if(u!=null&&!0)J.k3(a,b,u,!1)
return new W.hG(a,b,u,!1)},
ju:function(a){var u=W.iV(),t=window.location
u=new W.bI(new W.hQ(u,t))
u.cj(a)
return u},
kS:function(a,b,c,d){return!0},
kT:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
jw:function(){var u=P.o,t=P.j6(C.i,u),s=H.b(["TEMPLATE"],[u])
t=new W.hY(t,P.bq(u),P.bq(u),P.bq(u),null)
t.cm(null,new H.eU(C.i,new W.hZ(),[H.Z(C.i,0),u]),s,null)
return t},
jA:function(a,b){var u=$.Y
if(u===C.e)return a
return u.bv(a,b)},
l:function l(){},
dM:function dM(){},
dN:function dN(){},
dO:function dO(){},
bY:function bY(){},
aT:function aT(){},
aU:function aU(){},
az:function az(){},
e0:function e0(){},
v:function v(){},
bk:function bk(){},
e1:function e1(){},
T:function T(){},
a2:function a2(){},
e2:function e2(){},
e3:function e3(){},
e6:function e6(){},
W:function W(){},
e9:function e9(){},
c4:function c4(){},
c5:function c5(){},
ea:function ea(){},
eb:function eb(){},
hD:function hD(a,b){this.a=a
this.b=b},
F:function F(){},
ef:function ef(){},
h:function h(){},
d:function d(){},
ah:function ah(){},
em:function em(){},
en:function en(){},
er:function er(){},
ai:function ai(){},
ex:function ex(){},
bo:function bo(){},
aZ:function aZ(){},
eQ:function eQ(){},
eW:function eW(){},
eX:function eX(){},
eY:function eY(a){this.a=a},
eZ:function eZ(){},
f_:function f_(a){this.a=a},
ak:function ak(){},
f0:function f0(){},
a5:function a5(){},
M:function M(a){this.a=a},
t:function t(){},
cm:function cm(){},
am:function am(){},
fh:function fh(){},
fo:function fo(){},
fp:function fp(a){this.a=a},
fr:function fr(){},
ap:function ap(){},
fC:function fC(){},
aq:function aq(){},
fD:function fD(){},
ar:function ar(){},
fG:function fG(){},
fH:function fH(a){this.a=a},
a8:function a8(){},
cA:function cA(){},
fK:function fK(){},
fL:function fL(){},
bC:function bC(){},
as:function as(){},
a9:function a9(){},
fO:function fO(){},
fP:function fP(){},
fR:function fR(){},
at:function at(){},
b3:function b3(){},
fV:function fV(){},
fW:function fW(){},
aN:function aN(){},
hh:function hh(){},
hv:function hv(){},
aO:function aO(){},
bH:function bH(){},
hE:function hE(){},
cP:function cP(){},
hI:function hI(){},
d7:function d7(){},
hU:function hU(){},
hV:function hV(){},
hC:function hC(){},
hF:function hF(a){this.a=a},
hG:function hG(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
hH:function hH(a){this.a=a},
bI:function bI(a){this.a=a},
x:function x(){},
cn:function cn(a){this.a=a},
f9:function f9(a){this.a=a},
f8:function f8(a,b,c){this.a=a
this.b=b
this.c=c},
df:function df(){},
hS:function hS(){},
hT:function hT(){},
hY:function hY(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
hZ:function hZ(){},
hW:function hW(){},
c8:function c8(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
al:function al(){},
hQ:function hQ(a,b){this.a=a
this.b=b},
dw:function dw(a){this.a=a},
i2:function i2(a){this.a=a},
cO:function cO(){},
cQ:function cQ(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cV:function cV(){},
cW:function cW(){},
cY:function cY(){},
cZ:function cZ(){},
d3:function d3(){},
d4:function d4(){},
d5:function d5(){},
d6:function d6(){},
d8:function d8(){},
d9:function d9(){},
dc:function dc(){},
dd:function dd(){},
de:function de(){},
bN:function bN(){},
bO:function bO(){},
dg:function dg(){},
dh:function dh(){},
dl:function dl(){},
dp:function dp(){},
dq:function dq(){},
bP:function bP(){},
bQ:function bQ(){},
ds:function ds(){},
dt:function dt(){},
dx:function dx(){},
dy:function dy(){},
dz:function dz(){},
dA:function dA(){},
dB:function dB(){},
dC:function dC(){},
dD:function dD(){},
dE:function dE(){},
dF:function dF(){},
dG:function dG(){}},K={
z:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.J("The given low and high character strings for a Range must have one and only one characters."))
u=C.b.ai(a,0)
t=C.b.ai(b,0)
if(u>t){s=t
t=u
u=s}return new K.fj(u,t)},
n:function(a){var u=new K.fs()
u.ce(a)
return u},
ad:function ad(){},
c9:function c9(){},
aI:function aI(){},
P:function P(){this.a=null},
fj:function fj(a,b){this.a=a
this.b=b},
fs:function fs(){this.a=null}},L={
fT:function(){var u=new L.fS(),t=P.o
u.a=new H.a4([t,L.cy])
u.b=new H.a4([t,L.cF])
u.c=P.bq(t)
return u},
cy:function cy(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
cE:function cE(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a){this.b=a
this.c=null},
fS:function fS(){var _=this
_.d=_.c=_.b=_.a=null},
cG:function cG(a){this.b=a
this.a=this.c=null}},O={
j_:function(a){var u=new O.aV([a])
u.b8(a)
return u},
aV:function aV(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
bu:function bu(){this.b=this.a=null},
e7:function e7(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cB:function cB(){}},E={
ag:function(a,b){var u,t,s,r,q=new E.af()
q.a=""
q.b=!0
u=O.j_(E.af)
q.y=u
u.aE(q.ge2(),q.ge5())
q.dy=q.dx=q.db=q.cy=q.cx=q.ch=q.Q=q.z=null
u=q.c
if(u!=b){q.d=q.c=b
q.e=null
if(u!=null)u.gu().I(0,q.gbL())
t=q.c
if(t!=null)t.gu().n(0,q.gbL())
s=new D.E("shape",u,q.c)
s.b=!0
q.a5(s)}if(!J.D(q.r,a)){r=q.r
if(r!=null)r.gu().I(0,q.gbJ())
a.gu().n(0,q.gbJ())
q.r=a
s=new D.E("mover",r,a)
s.b=!0
q.a5(s)}return q},
kF:function(a,b){var u=new E.fk(a)
u.cd(a,b)
return u},
kL:function(a,b,c,d,e){var u,t,s=J.I(a)
if(!!s.$iaU)return E.ji(a,!0,!0,!0,!1)
u=W.iY()
t=u.style
t.width="100%"
t.height="100%"
s.gbw(a).n(0,u)
return E.ji(u,!0,!0,!0,!1)},
ji:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.cC(),p=C.C.c2(a,"webgl2",P.kq(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.N(P.J("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.kF(p,a)
p.getParameter(3379)
p.getParameter(34076)
u=new X.cJ(a)
t=new X.eK()
t.d=P.bq(P.A)
u.b=t
t=new X.f1(u)
t.f=0
t.r=V.cr()
t.x=V.cr()
t.ch=t.Q=1
u.c=t
t=new X.eR(u)
t.r=0
t.x=V.cr()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.fU(u)
t.f=V.cr()
t.r=V.cr()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.cz,P.L]])
u.z=t
s=document
t.push(W.H(s,"contextmenu",u.gcN(),!1))
u.z.push(W.H(a,"focus",u.gcT(),!1))
u.z.push(W.H(a,"blur",u.gcH(),!1))
u.z.push(W.H(s,"keyup",u.gcX(),!1))
u.z.push(W.H(s,"keydown",u.gcV(),!1))
u.z.push(W.H(a,"mousedown",u.gd_(),!1))
u.z.push(W.H(a,"mouseup",u.gd3(),!1))
u.z.push(W.H(a,r,u.gd1(),!1))
t=u.z
W.iq(a)
W.iq(a)
t.push(W.H(a,W.iq(a),u.gd5(),!1))
u.z.push(W.H(s,r,u.gcP(),!1))
u.z.push(W.H(s,"mouseup",u.gcR(),!1))
u.z.push(W.H(s,"pointerlockchange",u.gd7(),!1))
u.z.push(W.H(a,"touchstart",u.gdh(),!1))
u.z.push(W.H(a,"touchend",u.gdd(),!1))
u.z.push(W.H(a,"touchmove",u.gdf(),!1))
q.ch=!0
q.cx=!1
q.cy=new P.aB(Date.now(),!1)
q.db=0
q.bm()
return q},
dU:function dU(){},
af:function af(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fk:function fk(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
fl:function fl(a){this.a=a},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
cC:function cC(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.e=_.d=_.c=_.b=null},
fQ:function fQ(a){this.a=a}},Z={
kN:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.iF(c)),35044)
a.bindBuffer(b,null)
return new Z.cL(b,u)},
U:function(a){return new Z.cK(a)},
cL:function cL(a,b){this.a=a
this.b=b},
bZ:function bZ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
hw:function hw(a){this.a=a},
c_:function c_(a,b){this.a=a
this.b=null
this.c=b},
ca:function ca(a,b,c){this.a=a
this.b=b
this.c=c},
cK:function cK(a){this.a=a}},D={
a3:function(){var u=new D.bm()
u.d=0
return u},
dX:function dX(){},
bm:function bm(){var _=this
_.d=_.c=_.b=_.a=null},
ei:function ei(a){this.a=a},
ej:function ej(a){this.a=a},
O:function O(){this.b=null},
cb:function cb(){this.b=null},
cc:function cc(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null}},X={c0:function c0(a,b){this.a=a
this.b=b},cf:function cf(a,b){this.a=a
this.b=b},eK:function eK(){this.d=this.b=this.a=null},eR:function eR(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},f1:function f1(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},fU:function fU(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},cJ:function cJ(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kk:function(a){var u=new X.et(),t=V.ld(1)
u.a=new V.aW(0,0,0,t)
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.jf
if(t==null){t=V.kE(0,0,1,1)
$.jf=t}u.r=t
return u},
ip:function ip(){},
et:function et(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
cp:function cp(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
fM:function fM(){}},V={
ld:function(a){var u
if(a<0)u=0
else u=a>1?1:a
return u},
iQ:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.c.c3(a-b,u)
return(a<0?a+u:a)+b},
w:function(a,b,c){if(a==null)return C.b.a6("null",c)
return C.b.a6(C.c.bX(Math.abs(a-0)<$.B().a?0:a,b),c+b+1)},
i8:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=0,t=0;t<4;++t){s=V.w(a[t],b,c)
u=Math.max(u,s.length)
o.push(s)}for(r=o.length,q=r-1;q>=0;--q,r=p){if(q>=r)return H.f(o,q)
r=C.b.a6(o[q],u)
p=o.length
if(q>=p)return H.f(o,q)
o[q]=r}return o},
eV:function(){var u=$.j8
return u==null?$.j8=V.aj(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aj:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
cr:function(){var u=$.jb
return u==null?$.jb=new V.a7(0,0):u},
kE:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.ct(a,b,c,d)},
hk:function(){var u=$.js
return u==null?$.js=new V.G(0,0,0):u},
aW:function aW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
eh:function eh(a){this.a=a},
bt:function bt(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
a7:function a7(a,b){this.a=a
this.b=b},
an:function an(a,b,c){this.a=a
this.b=b
this.c=c},
ct:function ct(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
au:function au(a,b){this.a=a
this.b=b},
G:function G(a,b,c){this.a=a
this.b=b
this.c=c},
lz:function(a){P.kM(C.E,new V.ii(a))},
kH:function(a){var u=new V.fx()
u.cg(a,!0)
return u},
c1:function c1(){},
ii:function ii(a){this.a=a},
e5:function e5(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ev:function ev(a){var _=this
_.a=a
_.d=_.c=_.b=null},
ew:function ew(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fg:function fg(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fx:function fx(){this.b=this.a=null},
fz:function fz(a){this.a=a},
fy:function fy(a){this.a=a},
fA:function fA(a){this.a=a}},U={
j0:function(a){var u=new U.c2()
u.a=a
return u},
c2:function c2(){this.b=this.a=null},
bn:function bn(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
a6:function a6(){},
cu:function cu(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={c6:function c6(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
iD:function(a,b,c,d,e){var u=new A.h1(a,c,e)
u.f=d
P.kr(d,0,P.A)
return u},
bX:function bX(a,b,c){this.a=a
this.b=b
this.c=c},
dP:function dP(a){this.a=a},
e8:function e8(a,b){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cv:function cv(){},
cH:function cH(){},
h8:function h8(a){this.a=a},
h0:function h0(a,b,c){this.a=a
this.c=b
this.d=c},
h3:function h3(a,b,c){this.a=a
this.c=b
this.d=c},
h5:function h5(a,b,c){this.a=a
this.c=b
this.d=c},
h7:function h7(a,b,c){this.a=a
this.c=b
this.d=c},
h1:function h1(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
bD:function bD(a,b,c){this.a=a
this.c=b
this.d=c},
h2:function h2(a,b,c){this.a=a
this.c=b
this.d=c},
h4:function h4(a,b,c){this.a=a
this.c=b
this.d=c},
h6:function h6(a,b,c){this.a=a
this.c=b
this.d=c},
h9:function h9(a,b,c){this.a=a
this.c=b
this.d=c},
ha:function ha(a,b,c){this.a=a
this.c=b
this.d=c},
bE:function bE(a,b,c){this.a=a
this.c=b
this.d=c},
hb:function hb(a,b,c){this.a=a
this.c=b
this.d=c},
hc:function hc(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lE:function(a,b){return F.lf(15,30,b,a,new F.ik())},
lf:function(a,b,c,d,e){var u,t=F.lC(a,b,new F.i6(e,d,b,c))
if(t==null)return
u=t.e
if(u!=null)++u.d
t.d.aV()
t.a.aV()
u=t.e
if(u!=null)u.ap(0)
t.e1(new F.hq(),new F.fa())
return t},
lC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h
if(a<1)return
if(b<1)return
u=new F.ft()
t=new F.hl(u)
t.b=!1
s=[F.bF]
t.c=H.b([],s)
u.a=t
t=new F.fw()
t.b=H.b([],[F.cq])
u.b=t
t=new F.fv(u)
t.b=H.b([],[F.cg])
u.c=t
t=new F.fu(u)
t.b=H.b([],[F.aY])
u.d=t
u.e=null
r=H.b([],s)
for(q=0;q<=b;++q){p=q/b
t=u.a
if(p<0)s=0
else s=p>1?1:p
o=t.bs(new V.aW(s,0,0,1),new V.a7(p,1))
c.$3(o,p,0)
r.push(o.by(null))}for(q=1;q<=a;++q){n=q/a
for(t=n>1,s=n<0,m=1-n,l=0;l<=b;++l){p=l/b
k=u.a
if(p<0)j=0
else j=p>1?1:p
if(s)i=0
else i=t?1:n
if(s)h=0
else h=t?1:n
o=k.bs(new V.aW(j,i,h,1),new V.a7(p,m))
c.$3(o,p,n)
r.push(o.by(null))}}u.d.dE(a+1,b+1,r)
return u},
ek:function(a,b,c){var u=new F.aY(),t=a.a
if(t==null)H.N(P.J("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.N(P.J("May not create a face with vertices attached to different shapes."))
u.du(a)
u.dv(b)
u.dw(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
jt:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bF(),r=new F.ht()
r.b=H.b([],[F.cq])
s.b=r
r=new F.hp()
u=[F.cg]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.hm()
u=[F.aY]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.jX()
s.e=0
r=$.aw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.bd().a)!==0?e:t
s.x=(u&$.bc().a)!==0?b:t
s.y=(u&$.be().a)!==0?f:t
s.z=(u&$.bf().a)!==0?g:t
s.Q=(u&$.jY().a)!==0?c:t
s.ch=(u&$.bg().a)!==0?i:0
s.cx=(u&$.bb().a)!==0?a:t
return s},
ik:function ik(){},
i6:function i6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aY:function aY(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
el:function el(){},
fB:function fB(){},
cg:function cg(){},
eM:function eM(){},
h_:function h_(){},
cq:function cq(){},
ft:function ft(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fu:function fu(a){this.a=a
this.b=null},
fv:function fv(a){this.a=a
this.b=null},
fw:function fw(){this.b=null},
bF:function bF(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hu:function hu(a){this.a=a},
hl:function hl(a){this.a=a
this.c=this.b=null},
hm:function hm(){this.d=this.c=this.b=null},
hn:function hn(a,b){this.a=a
this.b=b},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){this.c=this.b=null},
hr:function hr(){},
hq:function hq(){},
hs:function hs(){},
fa:function fa(){},
ht:function ht(){this.b=null}},R={
jG:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0="testCanvas",a1=V.kH("Test 004"),a2=W.iY()
a2.className="pageLargeCanvas"
a2.id=a0
a1.a.appendChild(a2)
u=[P.o]
a1.bt(H.b(["Test of repeat use of a single mover and shape. There are 9 rings ","moving at the same speed, however the second one is attached to ","the first, the third to the second, and so on."],u))
a1.bt(H.b(["\xab[Back to Tests|../]"],u))
t=new U.cu()
t.r=t.f=t.e=t.d=t.c=t.b=t.a=0
t.sc_(0)
t.sbO(0,0)
t.sbT(0)
t.sbB(0.1)
t.sbz(0.21)
t.sbA(0.32)
t.sbB(0.51)
t.sbz(0.71)
t.sbA(0.92)
s=new U.bn()
s.b8(U.a6)
s.aE(s.gcF(),s.gda())
s.e=null
s.f=V.eV()
s.r=0
s.n(0,U.j0(V.aj(0.8,0,0,0,0,0.8,0,0,0,0,0.8,0,0,0,0,1)))
s.n(0,t)
r=F.lE(2,0.2)
q=E.ag(s,r)
p=E.ag(s,r)
p.y.n(0,q)
o=E.ag(s,r)
o.y.n(0,p)
n=E.ag(s,r)
n.y.n(0,o)
m=E.ag(s,r)
m.y.n(0,n)
l=E.ag(s,r)
l.y.n(0,m)
k=E.ag(s,r)
k.y.n(0,l)
j=E.ag(s,r)
j.y.n(0,k)
i=E.ag(s,r)
i.y.n(0,j)
h=new O.e7()
h.b=1
h.c=10
h.f=h.e=h.d=!1
if(!(Math.abs(-2)<$.B().a)){h.b=3
u=new D.E("start",1,3)
u.b=!0
h.aP(u)}u=h.c
if(!(Math.abs(u-6)<$.B().a)){h.c=6
u=new D.E("stop",u,6)
u.b=!0
h.aP(u)}if(!h.d){h.d=!0
h.a=null
u=new D.E("grey",!1,!0)
u.b=!0
h.aP(u)}g=new M.c6()
g.a=!0
u=O.j_(E.af)
g.e=u
u.aE(g.gcJ(),g.gcL())
g.y=g.x=g.r=g.f=null
f=X.kk(null)
e=new X.cp()
e.c=1.0471975511965976
e.d=0.1
e.e=2000
e.sbG(null)
u=e.c
if(!(Math.abs(u-1.0471975511965976)<$.B().a)){e.c=1.0471975511965976
u=new D.E("fov",u,1.0471975511965976)
u.b=!0
e.aa(u)}u=e.d
if(!(Math.abs(u-0.1)<$.B().a)){e.d=0.1
u=new D.E("near",u,0.1)
u.b=!0
e.aa(u)}u=e.e
if(!(Math.abs(u-2000)<$.B().a)){e.e=2000
u=new D.E("far",u,2000)
u.b=!0
e.aa(u)}u=g.b
if(u!==e){if(u!=null)u.gu().I(0,g.gY())
d=g.b
g.b=e
e.gu().n(0,g.gY())
u=new D.E("camera",d,g.b)
u.b=!0
g.a1(u)}u=g.c
if(u!==f){if(u!=null)u.gu().I(0,g.gY())
d=g.c
g.c=f
f.gu().n(0,g.gY())
u=new D.E("target",d,g.c)
u.b=!0
g.a1(u)}g.sbV(null)
g.sbV(h)
g.e.n(0,i)
g.b.sbG(U.j0(V.aj(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=document.getElementById(a0)
if(c==null)H.N(P.J("Failed to find an element with the identifier, testCanvas."))
b=E.kL(c,!0,!0,!0,!1)
u=b.d
if(u!==g){if(u!=null)u.gu().I(0,b.gb9())
b.d=g
g.gu().n(0,b.gb9())
b.ba()}u=b.Q
if(u==null)u=b.Q=D.a3()
a=u.b
u=a==null?u.b=H.b([],[{func:1,ret:-1,args:[D.O]}]):a
u.push(new R.ig(a1,h))
V.lz(b)},
ig:function ig(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.iw.prototype={}
J.a.prototype={
q:function(a,b){return a===b},
gC:function(a){return H.by(a)},
h:function(a){return"Instance of '"+H.e(H.bz(a))+"'"}}
J.eE.prototype={
h:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$iaR:1}
J.eG.prototype={
q:function(a,b){return null==b},
h:function(a){return"null"},
gC:function(a){return 0}}
J.ce.prototype={
gC:function(a){return 0},
h:function(a){return String(a)}}
J.ff.prototype={}
J.b4.prototype={}
J.aF.prototype={
h:function(a){var u=a[$.jM()]
if(u==null)return this.ca(a)
return"JavaScript function for "+H.e(J.a_(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.aD.prototype={
b0:function(a,b){if(!!a.fixed$length)H.N(P.r("removeAt"))
if(b<0||b>=a.length)throw H.c(P.cs(b,null))
return a.splice(b,1)[0]},
I:function(a,b){var u
if(!!a.fixed$length)H.N(P.r("remove"))
for(u=0;u<a.length;++u)if(J.D(a[u],b)){a.splice(u,1)
return!0}return!1},
T:function(a,b){var u,t
if(!!a.fixed$length)H.N(P.r("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.u)(b),++t)a.push(b[t])},
E:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aA(a))}},
l:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.f(r,u)
r[u]=t}return r.join(b)},
dZ:function(a){return this.l(a,"")},
dV:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aA(a))}throw H.c(H.eC())},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
c6:function(a,b,c){var u=a.length
if(b>u)throw H.c(P.ao(b,0,u,"start",null))
if(c==null)c=u
else if(c<b||c>u)throw H.c(P.ao(c,b,u,"end",null))
if(b===c)return H.b([],[H.Z(a,0)])
return H.b(a.slice(b,c),[H.Z(a,0)])},
gdU:function(a){if(a.length>0)return a[0]
throw H.c(H.eC())},
gaz:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.eC())},
bu:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aA(a))}return!1},
H:function(a,b){var u
for(u=0;u<a.length;++u)if(J.D(a[u],b))return!0
return!1},
h:function(a){return P.it(a,"[","]")},
gF:function(a){return new J.S(a,a.length)},
gC:function(a){return H.by(a)},
gk:function(a){return a.length},
sk:function(a,b){var u="newLength"
if(!!a.fixed$length)H.N(P.r("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.im(b,u,null))
if(b<0)throw H.c(P.ao(b,0,null,u,null))
a.length=b},
j:function(a,b){if(b>=a.length||b<0)throw H.c(H.ba(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.N(P.r("indexed set"))
if(b>=a.length||b<0)throw H.c(H.ba(a,b))
a[b]=c},
$im:1,
$ij:1}
J.iv.prototype={}
J.S.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.u(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bp.prototype={
ae:function(a,b){var u
if(typeof b!=="number")throw H.c(H.aQ(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gay(b)
if(this.gay(a)===u)return 0
if(this.gay(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gay:function(a){return a===0?1/a<0:a<0},
bD:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.r(""+a+".floor()"))},
X:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.r(""+a+".round()"))},
bX:function(a,b){var u
if(b>20)throw H.c(P.ao(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gay(a))return"-"+u
return u},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
c3:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
cc:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.bn(a,b)},
Z:function(a,b){return(a|0)===a?a/b|0:this.bn(a,b)},
bn:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.r("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
au:function(a,b){var u
if(a>0)u=this.dC(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
dC:function(a,b){return b>31?0:a>>>b},
$iC:1,
$iV:1}
J.cd.prototype={$iA:1}
J.eF.prototype={}
J.aE.prototype={
aW:function(a,b){if(b<0)throw H.c(H.ba(a,b))
if(b>=a.length)H.N(H.ba(a,b))
return a.charCodeAt(b)},
ai:function(a,b){if(b>=a.length)throw H.c(H.ba(a,b))
return a.charCodeAt(b)},
O:function(a,b){if(typeof b!=="string")throw H.c(P.im(b,null,null))
return a+b},
aF:function(a,b){var u=b.length
if(u>a.length)return!1
return b===a.substring(0,u)},
aq:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.c(P.cs(b,null))
if(b>c)throw H.c(P.cs(b,null))
if(c>a.length)throw H.c(P.cs(c,null))
return a.substring(b,c)},
aG:function(a,b){return this.aq(a,b,null)},
eq:function(a){return a.toLowerCase()},
J:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.A)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
a6:function(a,b){var u=b-a.length
if(u<=0)return a
return this.J(" ",u)+a},
ae:function(a,b){var u
if(typeof b!=="string")throw H.c(H.aQ(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
h:function(a){return a},
gC:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$io:1}
H.k.prototype={
gk:function(a){return this.a.length},
j:function(a,b){return C.b.aW(this.a,b)},
$am:function(){return[P.A]},
$ap:function(){return[P.A]},
$aj:function(){return[P.A]}}
H.m.prototype={}
H.ch.prototype={
gF:function(a){return new H.aH(this,this.gk(this))},
aC:function(a,b){return this.c9(0,b)}}
H.aH.prototype={
gv:function(a){return this.d},
p:function(){var u,t=this,s=t.a,r=J.dH(s),q=r.gk(s)
if(t.b!=q)throw H.c(P.aA(s))
u=t.c
if(typeof q!=="number")return H.R(q)
if(u>=q){t.d=null
return!1}t.d=r.t(s,u);++t.c
return!0}}
H.bs.prototype={
gF:function(a){return new H.ci(J.ax(this.a),this.b)},
gk:function(a){return J.ay(this.a)},
t:function(a,b){return this.b.$1(J.dK(this.a,b))},
$aj:function(a,b){return[b]}}
H.ee.prototype={$im:1,
$am:function(a,b){return[b]}}
H.ci.prototype={
p:function(){var u=this,t=u.b
if(t.p()){u.a=u.c.$1(t.gv(t))
return!0}u.a=null
return!1},
gv:function(a){return this.a}}
H.eU.prototype={
gk:function(a){return J.ay(this.a)},
t:function(a,b){return this.b.$1(J.dK(this.a,b))},
$am:function(a,b){return[b]},
$ach:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.bG.prototype={
gF:function(a){return new H.hx(J.ax(this.a),this.b)}}
H.hx.prototype={
p:function(){var u,t
for(u=this.a,t=this.b;u.p();)if(t.$1(u.gv(u)))return!0
return!1},
gv:function(a){var u=this.a
return u.gv(u)}}
H.c7.prototype={}
H.hf.prototype={
m:function(a,b,c){throw H.c(P.r("Cannot modify an unmodifiable list"))}}
H.cI.prototype={}
H.fY.prototype={
V:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.fb.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.eJ.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.he.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.il.prototype={
$1:function(a){if(!!J.I(a).$iaX)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:6}
H.dk.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.bj.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.bU(t==null?"unknown":t)+"'"},
gev:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.fN.prototype={}
H.fF.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.bU(u)+"'"}}
H.bh.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bh))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gC:function(a){var u,t=this.c
if(t==null)u=H.by(this.a)
else u=typeof t!=="object"?J.dL(t):H.by(t)
return(u^H.by(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.bz(u))+"'")}}
H.dW.prototype={
h:function(a){return this.a}}
H.fq.prototype={
h:function(a){return"RuntimeError: "+H.e(this.a)}}
H.a4.prototype={
gk:function(a){return this.a},
gN:function(a){return new H.b_(this,[H.Z(this,0)])},
geu:function(a){var u=this,t=H.Z(u,0)
return H.ks(new H.b_(u,[t]),new H.eI(u),t,H.Z(u,1))},
dK:function(a,b){var u=this.b
if(u==null)return!1
return this.cv(u,b)},
j:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.as(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.as(r,b)
s=t==null?null:t.b
return s}else return q.dX(b)},
dX:function(a){var u,t,s=this.d
if(s==null)return
u=this.bl(s,J.dL(a)&0x3ffffff)
t=this.bE(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.be(u==null?o.b=o.aN():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.be(t==null?o.c=o.aN():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.aN()
r=J.dL(b)&0x3ffffff
q=o.bl(s,r)
if(q==null)o.aR(s,r,[o.aO(b,c)])
else{p=o.bE(q,b)
if(p>=0)q[p].b=c
else q.push(o.aO(b,c))}}},
E:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aA(u))
t=t.c}},
be:function(a,b,c){var u=this.as(a,b)
if(u==null)this.aR(a,b,this.aO(b,c))
else u.b=c},
cE:function(){this.r=this.r+1&67108863},
aO:function(a,b){var u,t=this,s=new H.eN(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.cE()
return s},
bE:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1},
h:function(a){return P.j7(this)},
as:function(a,b){return a[b]},
bl:function(a,b){return a[b]},
aR:function(a,b,c){a[b]=c},
cB:function(a,b){delete a[b]},
cv:function(a,b){return this.as(a,b)!=null},
aN:function(){var u="<non-identifier-key>",t=Object.create(null)
this.aR(t,u,t)
this.cB(t,u)
return t}}
H.eI.prototype={
$1:function(a){return this.a.j(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.Z(u,1),args:[H.Z(u,0)]}}}
H.eN.prototype={}
H.b_.prototype={
gk:function(a){return this.a.a},
gF:function(a){var u=this.a,t=new H.eO(u,u.r)
t.c=u.e
return t}}
H.eO.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.ib.prototype={
$1:function(a){return this.a(a)},
$S:6}
H.ic.prototype={
$2:function(a,b){return this.a(a,b)}}
H.id.prototype={
$1:function(a){return this.a(a)}}
H.eH.prototype={
h:function(a){return"RegExp/"+this.a+"/"+this.b.flags}}
H.bx.prototype={}
H.cj.prototype={
gk:function(a){return a.length},
$iq:1,
$aq:function(){}}
H.bw.prototype={
j:function(a,b){H.ab(b,a,a.length)
return a[b]},
m:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.C]},
$ap:function(){return[P.C]},
$ij:1,
$aj:function(){return[P.C]}}
H.ck.prototype={
m:function(a,b,c){H.ab(b,a,a.length)
a[b]=c},
$im:1,
$am:function(){return[P.A]},
$ap:function(){return[P.A]},
$ij:1,
$aj:function(){return[P.A]}}
H.f2.prototype={
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.f3.prototype={
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.f4.prototype={
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.f5.prototype={
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.f6.prototype={
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.cl.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.f7.prototype={
gk:function(a){return a.length},
j:function(a,b){H.ab(b,a,a.length)
return a[b]}}
H.bJ.prototype={}
H.bK.prototype={}
H.bL.prototype={}
H.bM.prototype={}
P.hz.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:13}
P.hy.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.hA.prototype={
$0:function(){this.a.$0()}}
P.hB.prototype={
$0:function(){this.a.$0()}}
P.dr.prototype={
cn:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b9(new P.i0(this,b),0),a)
else throw H.c(P.r("`setTimeout()` not found."))},
co:function(a,b){if(self.setTimeout!=null)self.setInterval(H.b9(new P.i_(this,a,Date.now(),b),0),a)
else throw H.c(P.r("Periodic timer."))},
$icD:1}
P.i0.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.i_.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.d.cc(u,q)}s.c=r
t.d.$1(s)}}
P.b5.prototype={
h:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.b6.prototype={
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
if(t instanceof P.b5){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.f(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.ax(u)
if(!!r.$ib6){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.hX.prototype={
gF:function(a){return new P.b6(this.a())}}
P.cM.prototype={}
P.cz.prototype={}
P.fI.prototype={}
P.cD.prototype={}
P.i3.prototype={}
P.i4.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.co():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.h(0)
throw u}}
P.hN.prototype={
el:function(a){var u,t,s,r=null
try{if(C.e===$.Y){a.$0()
return}P.l4(r,r,this,a)}catch(s){u=H.ac(s)
t=H.iL(s)
P.jz(r,r,this,u,t)}},
em:function(a,b){var u,t,s,r=null
try{if(C.e===$.Y){a.$1(b)
return}P.l5(r,r,this,a,b)}catch(s){u=H.ac(s)
t=H.iL(s)
P.jz(r,r,this,u,t)}},
en:function(a,b){return this.em(a,b,null)},
dI:function(a){return new P.hO(this,a)},
bv:function(a,b){return new P.hP(this,a,b)}}
P.hO.prototype={
$0:function(){return this.a.el(this.b)}}
P.hP.prototype={
$1:function(a){return this.a.en(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.hK.prototype={
gF:function(a){var u=new P.d1(this,this.r)
u.c=this.e
return u},
gk:function(a){return this.a},
H:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.cu(b)
return t}},
cu:function(a){var u=this.d
if(u==null)return!1
return this.aL(this.bk(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.bf(u==null?s.b=P.iE():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.bf(t==null?s.c=P.iE():t,b)}else return s.cq(0,b)},
cq:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.iE()
u=s.bh(b)
t=r[u]
if(t==null)r[u]=[s.aI(b)]
else{if(s.aL(t,b)>=0)return!1
t.push(s.aI(b))}return!0},
I:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.dk(this.c,b)
else return this.dj(0,b)},
dj:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.bk(r,b)
t=s.aL(u,b)
if(t<0)return!1
s.bp(u.splice(t,1)[0])
return!0},
bf:function(a,b){if(a[b]!=null)return!1
a[b]=this.aI(b)
return!0},
dk:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.bp(u)
delete a[b]
return!0},
bg:function(){this.r=1073741823&this.r+1},
aI:function(a){var u,t=this,s=new P.hL(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.bg()
return s},
bp:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.bg()},
bh:function(a){return J.dL(a)&1073741823},
bk:function(a,b){return a[this.bh(b)]},
aL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.D(a[t].a,b))return t
return-1}}
P.hL.prototype={}
P.d1.prototype={
gv:function(a){return this.d},
p:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aA(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.eB.prototype={}
P.eP.prototype={$im:1,$ij:1}
P.p.prototype={
gF:function(a){return new H.aH(a,this.gk(a))},
t:function(a,b){return this.j(a,b)},
ep:function(a,b){var u,t,s=this,r=H.b([],[H.ll(s,a,"p",0)])
C.a.sk(r,s.gk(a))
u=0
while(!0){t=s.gk(a)
if(typeof t!=="number")return H.R(t)
if(!(u<t))break
t=s.j(a,u)
if(u>=r.length)return H.f(r,u)
r[u]=t;++u}return r},
eo:function(a){return this.ep(a,!0)},
h:function(a){return P.it(a,"[","]")}}
P.eS.prototype={}
P.eT.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:7}
P.K.prototype={
E:function(a,b){var u,t
for(u=J.ax(this.gN(a));u.p();){t=u.gv(u)
b.$2(t,this.j(a,t))}},
gk:function(a){return J.ay(this.gN(a))},
h:function(a){return P.j7(a)}}
P.hR.prototype={
T:function(a,b){var u
for(u=J.ax(b);u.p();)this.n(0,u.gv(u))},
h:function(a){return P.it(this,"{","}")},
t:function(a,b){var u,t,s
P.je(b,"index")
for(u=P.kW(this,this.r),t=0;u.p();){s=u.d
if(b===t)return s;++t}throw H.c(P.y(b,this,"index",null,t))},
$im:1,
$ij:1}
P.d2.prototype={}
P.dY.prototype={}
P.e_.prototype={}
P.eg.prototype={}
P.ez.prototype={
h:function(a){return this.a}}
P.ey.prototype={
cw:function(a,b,c){var u,t,s,r,q,p,o=null
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
default:p=o}if(p!=null){if(q==null)q=new P.aL("")
if(r>b)q.a+=C.b.aq(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.k8(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.hi.prototype={}
P.hj.prototype={
dL:function(a){var u,t,s,r=P.iA(0,null,a.length)
if(typeof r!=="number")return r.P()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.i1(t)
if(s.cD(a,0,r)!==r)s.bq(C.b.aW(a,r-1),0)
return new Uint8Array(t.subarray(0,H.kZ(0,s.b,t.length)))}}
P.i1.prototype={
bq:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
cD:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.b.aW(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.b.ai(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.bq(r,C.b.ai(a,p)))s=p}else if(r<=2047){q=n.b
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
P.aR.prototype={}
P.aB.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aB&&this.a===b.a&&!0},
ae:function(a,b){return C.d.ae(this.a,b.a)},
gC:function(a){var u=this.a
return(u^C.d.au(u,30))&1073741823},
h:function(a){var u=this,t=P.kg(H.kA(u)),s=P.c3(H.ky(u)),r=P.c3(H.ku(u)),q=P.c3(H.kv(u)),p=P.c3(H.kx(u)),o=P.c3(H.kz(u)),n=P.kh(H.kw(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.C.prototype={}
P.aC.prototype={
q:function(a,b){if(b==null)return!1
return b instanceof P.aC&&this.a===b.a},
gC:function(a){return C.d.gC(this.a)},
ae:function(a,b){return C.d.ae(this.a,b.a)},
h:function(a){var u,t,s,r=new P.ed(),q=this.a
if(q<0)return"-"+new P.aC(0-q).h(0)
u=r.$1(C.d.Z(q,6e7)%60)
t=r.$1(C.d.Z(q,1e6)%60)
s=new P.ec().$1(q%1e6)
return""+C.d.Z(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.ec.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ed.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.aX.prototype={}
P.co.prototype={
h:function(a){return"Throw of null."}}
P.a0.prototype={
gaK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gaK()+o+u
if(!q.a)return t
s=q.gaJ()
r=P.is(q.b)
return t+s+": "+r}}
P.b2.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.eA.prototype={
gaK:function(){return"RangeError"},
gaJ:function(){var u,t=this.b
if(typeof t!=="number")return t.a0()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gk:function(a){return this.f}}
P.hg.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.hd.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.bB.prototype={
h:function(a){return"Bad state: "+this.a}}
P.dZ.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.is(u)+"."}}
P.fe.prototype={
h:function(a){return"Out of Memory"},
$iaX:1}
P.cx.prototype={
h:function(a){return"Stack Overflow"},
$iaX:1}
P.e4.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cU.prototype={
h:function(a){return"Exception: "+this.a}}
P.es.prototype={
h:function(a){var u=this.a,t=""!==u?"FormatException: "+u:"FormatException",s=this.b,r=s.length>78?C.b.aq(s,0,75)+"...":s
return t+"\n"+r}}
P.eu.prototype={}
P.A.prototype={}
P.j.prototype={
aC:function(a,b){return new H.bG(this,b,[H.iK(this,"j",0)])},
gk:function(a){var u,t=this.gF(this)
for(u=0;t.p();)++u
return u},
ga8:function(a){var u,t=this.gF(this)
if(!t.p())throw H.c(H.eC())
u=t.gv(t)
if(t.p())throw H.c(H.km())
return u},
t:function(a,b){var u,t,s
P.je(b,"index")
for(u=this.gF(this),t=0;u.p();){s=u.gv(u)
if(b===t)return s;++t}throw H.c(P.y(b,this,"index",null,t))},
h:function(a){return P.kl(this,"(",")")}}
P.eD.prototype={}
P.b0.prototype={$im:1,$ij:1}
P.br.prototype={}
P.aJ.prototype={
gC:function(a){return P.L.prototype.gC.call(this,this)},
h:function(a){return"null"}}
P.V.prototype={}
P.L.prototype={constructor:P.L,$iL:1,
q:function(a,b){return this===b},
gC:function(a){return H.by(this)},
h:function(a){return"Instance of '"+H.e(H.bz(this))+"'"},
toString:function(){return this.h(this)}}
P.o.prototype={}
P.aL.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.l.prototype={}
W.dM.prototype={
gk:function(a){return a.length}}
W.dN.prototype={
h:function(a){return String(a)}}
W.dO.prototype={
h:function(a){return String(a)}}
W.bY.prototype={}
W.aT.prototype={$iaT:1}
W.aU.prototype={
c2:function(a,b,c){var u=a.getContext(b,P.le(c))
return u},
$iaU:1}
W.az.prototype={
gk:function(a){return a.length}}
W.e0.prototype={
gk:function(a){return a.length}}
W.v.prototype={$iv:1}
W.bk.prototype={
gk:function(a){return a.length}}
W.e1.prototype={}
W.T.prototype={}
W.a2.prototype={}
W.e2.prototype={
gk:function(a){return a.length}}
W.e3.prototype={
gk:function(a){return a.length}}
W.e6.prototype={
gk:function(a){return a.length}}
W.W.prototype={$iW:1}
W.e9.prototype={
h:function(a){return String(a)}}
W.c4.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[[P.X,P.V]]},
$iq:1,
$aq:function(){return[[P.X,P.V]]},
$ap:function(){return[[P.X,P.V]]},
$ij:1,
$aj:function(){return[[P.X,P.V]]}}
W.c5.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gah(a))+" x "+H.e(this.gaf(a))},
q:function(a,b){var u
if(b==null)return!1
u=J.I(b)
return!!u.$iX&&a.left===u.gbF(b)&&a.top===u.gbY(b)&&this.gah(a)===u.gah(b)&&this.gaf(a)===u.gaf(b)},
gC:function(a){return W.jv(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(this.gah(a)),C.c.gC(this.gaf(a)))},
gaf:function(a){return a.height},
gbF:function(a){return a.left},
gbY:function(a){return a.top},
gah:function(a){return a.width},
$iX:1,
$aX:function(){return[P.V]}}
W.ea.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[P.o]},
$iq:1,
$aq:function(){return[P.o]},
$ap:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
W.eb.prototype={
gk:function(a){return a.length}}
W.hD.prototype={
gk:function(a){return this.b.length},
j:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.f(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gF:function(a){var u=this.eo(this)
return new J.S(u,u.length)},
$am:function(){return[W.F]},
$ap:function(){return[W.F]},
$aj:function(){return[W.F]}}
W.F.prototype={
gdH:function(a){return new W.hF(a)},
gbw:function(a){return new W.hD(a,a.children)},
h:function(a){return a.localName},
U:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.j3
if(u==null){u=H.b([],[W.al])
t=new W.cn(u)
u.push(W.ju(null))
u.push(W.jw())
$.j3=t
d=t}else d=u
u=$.j2
if(u==null){u=new W.dw(d)
$.j2=u
c=u}else{u.a=d
c=u}}if($.ae==null){u=document
t=u.implementation.createHTMLDocument("")
$.ae=t
$.ir=t.createRange()
s=$.ae.createElement("base")
s.href=u.baseURI
$.ae.head.appendChild(s)}u=$.ae
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.ae
if(!!this.$iaT)r=u.body
else{r=u.createElement(a.tagName)
$.ae.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.a.H(C.J,a.tagName)){$.ir.selectNodeContents(r)
q=$.ir.createContextualFragment(b)}else{r.innerHTML=b
q=$.ae.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.ae.body
if(r==null?u!=null:r!==u)J.iU(r)
c.b4(q)
document.adoptNode(q)
return q},
dM:function(a,b,c){return this.U(a,b,c,null)},
c5:function(a,b){a.textContent=null
a.appendChild(this.U(a,b,null,null))},
$iF:1,
gbU:function(a){return a.tagName}}
W.ef.prototype={
$1:function(a){return!!J.I(a).$iF}}
W.h.prototype={$ih:1}
W.d.prototype={
dD:function(a,b,c,d){if(c!=null)this.cr(a,b,c,!1)},
cr:function(a,b,c,d){return a.addEventListener(b,H.b9(c,1),!1)}}
W.ah.prototype={$iah:1}
W.em.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ah]},
$iq:1,
$aq:function(){return[W.ah]},
$ap:function(){return[W.ah]},
$ij:1,
$aj:function(){return[W.ah]}}
W.en.prototype={
gk:function(a){return a.length}}
W.er.prototype={
gk:function(a){return a.length}}
W.ai.prototype={$iai:1}
W.ex.prototype={
gk:function(a){return a.length}}
W.bo.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.t]},
$iq:1,
$aq:function(){return[W.t]},
$ap:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.aZ.prototype={$iaZ:1}
W.eQ.prototype={
h:function(a){return String(a)}}
W.eW.prototype={
gk:function(a){return a.length}}
W.eX.prototype={
j:function(a,b){return P.av(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.E(a,new W.eY(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
W.eY.prototype={
$2:function(a,b){return this.a.push(a)}}
W.eZ.prototype={
j:function(a,b){return P.av(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.E(a,new W.f_(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
W.f_.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ak.prototype={$iak:1}
W.f0.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ak]},
$iq:1,
$aq:function(){return[W.ak]},
$ap:function(){return[W.ak]},
$ij:1,
$aj:function(){return[W.ak]}}
W.a5.prototype={$ia5:1}
W.M.prototype={
ga8:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.jg("No elements"))
if(t>1)throw H.c(P.jg("More than one element"))
return u.firstChild},
T:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.f(t,b)
u.replaceChild(c,t[b])},
gF:function(a){var u=this.a.childNodes
return new W.c8(u,u.length)},
gk:function(a){return this.a.childNodes.length},
j:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
$am:function(){return[W.t]},
$ap:function(){return[W.t]},
$aj:function(){return[W.t]}}
W.t.prototype={
eg:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ej:function(a,b){var u,t
try{u=a.parentNode
J.k2(u,b,a)}catch(t){H.ac(t)}return a},
h:function(a){var u=a.nodeValue
return u==null?this.c8(a):u},
dq:function(a,b,c){return a.replaceChild(b,c)},
$it:1}
W.cm.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.t]},
$iq:1,
$aq:function(){return[W.t]},
$ap:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.am.prototype={$iam:1,
gk:function(a){return a.length}}
W.fh.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.am]},
$iq:1,
$aq:function(){return[W.am]},
$ap:function(){return[W.am]},
$ij:1,
$aj:function(){return[W.am]}}
W.fo.prototype={
j:function(a,b){return P.av(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.E(a,new W.fp(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
W.fp.prototype={
$2:function(a,b){return this.a.push(a)}}
W.fr.prototype={
gk:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fC.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ap]},
$iq:1,
$aq:function(){return[W.ap]},
$ap:function(){return[W.ap]},
$ij:1,
$aj:function(){return[W.ap]}}
W.aq.prototype={$iaq:1}
W.fD.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.aq]},
$iq:1,
$aq:function(){return[W.aq]},
$ap:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]}}
W.ar.prototype={$iar:1,
gk:function(a){return a.length}}
W.fG.prototype={
j:function(a,b){return a.getItem(b)},
E:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gN:function(a){var u=H.b([],[P.o])
this.E(a,new W.fH(u))
return u},
gk:function(a){return a.length},
$aK:function(){return[P.o,P.o]}}
W.fH.prototype={
$2:function(a,b){return this.a.push(a)}}
W.a8.prototype={$ia8:1}
W.cA.prototype={
U:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=W.ki("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.M(t).T(0,new W.M(u))
return t}}
W.fK.prototype={
U:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.U(u.createElement("table"),b,c,d)
u.toString
u=new W.M(u)
s=u.ga8(u)
s.toString
u=new W.M(s)
r=u.ga8(u)
t.toString
r.toString
new W.M(t).T(0,new W.M(r))
return t}}
W.fL.prototype={
U:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.aH(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.q.U(u.createElement("table"),b,c,d)
u.toString
u=new W.M(u)
s=u.ga8(u)
t.toString
s.toString
new W.M(t).T(0,new W.M(s))
return t}}
W.bC.prototype={$ibC:1}
W.as.prototype={$ias:1}
W.a9.prototype={$ia9:1}
W.fO.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.a9]},
$iq:1,
$aq:function(){return[W.a9]},
$ap:function(){return[W.a9]},
$ij:1,
$aj:function(){return[W.a9]}}
W.fP.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.as]},
$iq:1,
$aq:function(){return[W.as]},
$ap:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]}}
W.fR.prototype={
gk:function(a){return a.length}}
W.at.prototype={$iat:1}
W.b3.prototype={$ib3:1}
W.fV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.at]},
$iq:1,
$aq:function(){return[W.at]},
$ap:function(){return[W.at]},
$ij:1,
$aj:function(){return[W.at]}}
W.fW.prototype={
gk:function(a){return a.length}}
W.aN.prototype={}
W.hh.prototype={
h:function(a){return String(a)}}
W.hv.prototype={
gk:function(a){return a.length}}
W.aO.prototype={
gdP:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.r("deltaY is not supported"))},
gdO:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.r("deltaX is not supported"))},
$iaO:1}
W.bH.prototype={
dr:function(a,b){return a.requestAnimationFrame(H.b9(b,1))},
cC:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.hE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.v]},
$iq:1,
$aq:function(){return[W.v]},
$ap:function(){return[W.v]},
$ij:1,
$aj:function(){return[W.v]}}
W.cP.prototype={
h:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
q:function(a,b){var u
if(b==null)return!1
u=J.I(b)
return!!u.$iX&&a.left===u.gbF(b)&&a.top===u.gbY(b)&&a.width===u.gah(b)&&a.height===u.gaf(b)},
gC:function(a){return W.jv(C.c.gC(a.left),C.c.gC(a.top),C.c.gC(a.width),C.c.gC(a.height))},
gaf:function(a){return a.height},
gah:function(a){return a.width}}
W.hI.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ai]},
$iq:1,
$aq:function(){return[W.ai]},
$ap:function(){return[W.ai]},
$ij:1,
$aj:function(){return[W.ai]}}
W.d7.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.t]},
$iq:1,
$aq:function(){return[W.t]},
$ap:function(){return[W.t]},
$ij:1,
$aj:function(){return[W.t]}}
W.hU.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.ar]},
$iq:1,
$aq:function(){return[W.ar]},
$ap:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]}}
W.hV.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){if(b<0||b>=a.length)return H.f(a,b)
return a[b]},
$im:1,
$am:function(){return[W.a8]},
$iq:1,
$aq:function(){return[W.a8]},
$ap:function(){return[W.a8]},
$ij:1,
$aj:function(){return[W.a8]}}
W.hC.prototype={
E:function(a,b){var u,t,s,r,q
for(u=this.gN(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gN:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.o])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.f(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aK:function(){return[P.o,P.o]}}
W.hF.prototype={
j:function(a,b){return this.a.getAttribute(b)},
gk:function(a){return this.gN(this).length}}
W.hG.prototype={}
W.hH.prototype={
$1:function(a){return this.a.$1(a)}}
W.bI.prototype={
cj:function(a){var u
if($.cX.a===0){for(u=0;u<262;++u)$.cX.m(0,C.I[u],W.ln())
for(u=0;u<12;++u)$.cX.m(0,C.j[u],W.lo())}},
ad:function(a){return $.k_().H(0,W.bl(a))},
a_:function(a,b,c){var u=$.cX.j(0,H.e(W.bl(a))+"::"+b)
if(u==null)u=$.cX.j(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$ial:1}
W.x.prototype={
gF:function(a){return new W.c8(a,this.gk(a))}}
W.cn.prototype={
ad:function(a){return C.a.bu(this.a,new W.f9(a))},
a_:function(a,b,c){return C.a.bu(this.a,new W.f8(a,b,c))},
$ial:1}
W.f9.prototype={
$1:function(a){return a.ad(this.a)}}
W.f8.prototype={
$1:function(a){return a.a_(this.a,this.b,this.c)}}
W.df.prototype={
cm:function(a,b,c,d){var u,t,s
this.a.T(0,c)
u=b.aC(0,new W.hS())
t=b.aC(0,new W.hT())
this.b.T(0,u)
s=this.c
s.T(0,C.K)
s.T(0,t)},
ad:function(a){return this.a.H(0,W.bl(a))},
a_:function(a,b,c){var u=this,t=W.bl(a),s=u.c
if(s.H(0,H.e(t)+"::"+b))return u.d.dF(c)
else if(s.H(0,"*::"+b))return u.d.dF(c)
else{s=u.b
if(s.H(0,H.e(t)+"::"+b))return!0
else if(s.H(0,"*::"+b))return!0
else if(s.H(0,H.e(t)+"::*"))return!0
else if(s.H(0,"*::*"))return!0}return!1},
$ial:1}
W.hS.prototype={
$1:function(a){return!C.a.H(C.j,a)}}
W.hT.prototype={
$1:function(a){return C.a.H(C.j,a)}}
W.hY.prototype={
a_:function(a,b,c){if(this.cb(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.H(0,b)
return!1}}
W.hZ.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.hW.prototype={
ad:function(a){var u=J.I(a)
if(!!u.$ibA)return!1
u=!!u.$ii
if(u&&W.bl(a)==="foreignObject")return!1
if(u)return!0
return!1},
a_:function(a,b,c){if(b==="is"||C.b.aF(b,"on"))return!1
return this.ad(a)},
$ial:1}
W.c8.prototype={
p:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.k1(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gv:function(a){return this.d}}
W.al.prototype={}
W.hQ.prototype={}
W.dw.prototype={
b4:function(a){new W.i2(this).$2(a,null)},
ak:function(a,b){if(b==null)J.iU(a)
else b.removeChild(a)},
dt:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.k6(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ac(r)}t="element unprintable"
try{t=J.a_(a)}catch(r){H.ac(r)}try{s=W.bl(a)
this.ds(a,b,p,t,s,o,n)}catch(r){if(H.ac(r) instanceof P.a0)throw r
else{this.ak(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
ds:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.ak(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.ad(a)){p.ak(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.a_(a,"is",g)){p.ak(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gN(f)
t=H.b(u.slice(0),[H.Z(u,0)])
for(s=f.gN(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.f(t,s)
r=t[s]
if(!p.a.a_(a,J.k9(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.I(a).$ibC)p.b4(a.content)}}
W.i2.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.dt(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ak(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ac(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.cO.prototype={}
W.cQ.prototype={}
W.cR.prototype={}
W.cS.prototype={}
W.cT.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.d3.prototype={}
W.d4.prototype={}
W.d5.prototype={}
W.d6.prototype={}
W.d8.prototype={}
W.d9.prototype={}
W.dc.prototype={}
W.dd.prototype={}
W.de.prototype={}
W.bN.prototype={}
W.bO.prototype={}
W.dg.prototype={}
W.dh.prototype={}
W.dl.prototype={}
W.dp.prototype={}
W.dq.prototype={}
W.bP.prototype={}
W.bQ.prototype={}
W.ds.prototype={}
W.dt.prototype={}
W.dx.prototype={}
W.dy.prototype={}
W.dz.prototype={}
W.dA.prototype={}
W.dB.prototype={}
W.dC.prototype={}
W.dD.prototype={}
W.dE.prototype={}
W.dF.prototype={}
W.dG.prototype={}
P.i5.prototype={
$2:function(a,b){this.a[a]=b},
$S:7}
P.eo.prototype={
gat:function(){var u=this.b,t=H.iK(u,"p",0)
return new H.bs(new H.bG(u,new P.ep(),[t]),new P.eq(),[t,W.F])},
m:function(a,b,c){var u=this.gat()
J.k7(u.b.$1(J.dK(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gk:function(a){return J.ay(this.gat().a)},
j:function(a,b){var u=this.gat()
return u.b.$1(J.dK(u.a,b))},
gF:function(a){var u=P.iy(this.gat(),!1,W.F)
return new J.S(u,u.length)},
$am:function(){return[W.F]},
$ap:function(){return[W.F]},
$aj:function(){return[W.F]}}
P.ep.prototype={
$1:function(a){return!!J.I(a).$iF}}
P.eq.prototype={
$1:function(a){return H.dJ(a,"$iF")}}
P.hM.prototype={}
P.X.prototype={}
P.aG.prototype={$iaG:1}
P.eL.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aG]},
$ap:function(){return[P.aG]},
$ij:1,
$aj:function(){return[P.aG]}}
P.aK.prototype={$iaK:1}
P.fc.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aK]},
$ap:function(){return[P.aK]},
$ij:1,
$aj:function(){return[P.aK]}}
P.fi.prototype={
gk:function(a){return a.length}}
P.bA.prototype={$ibA:1}
P.fJ.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.o]},
$ap:function(){return[P.o]},
$ij:1,
$aj:function(){return[P.o]}}
P.i.prototype={
gbw:function(a){return new P.eo(a,new W.M(a))},
U:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.al])
p.push(W.ju(null))
p.push(W.jw())
p.push(new W.hW())
c=new W.dw(new W.cn(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.l).dM(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.M(s)
q=p.ga8(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ii:1}
P.aM.prototype={$iaM:1}
P.fX.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[P.aM]},
$ap:function(){return[P.aM]},
$ij:1,
$aj:function(){return[P.aM]}}
P.d_.prototype={}
P.d0.prototype={}
P.da.prototype={}
P.db.prototype={}
P.dm.prototype={}
P.dn.prototype={}
P.du.prototype={}
P.dv.prototype={}
P.dQ.prototype={
gk:function(a){return a.length}}
P.dR.prototype={
j:function(a,b){return P.av(a.get(b))},
E:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.av(u.value[1]))}},
gN:function(a){var u=H.b([],[P.o])
this.E(a,new P.dS(u))
return u},
gk:function(a){return a.size},
$aK:function(){return[P.o,null]}}
P.dS.prototype={
$2:function(a,b){return this.a.push(a)}}
P.dT.prototype={
gk:function(a){return a.length}}
P.aS.prototype={}
P.fd.prototype={
gk:function(a){return a.length}}
P.cN.prototype={}
P.fE.prototype={
gk:function(a){return a.length},
j:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.y(b,a,null,null,null))
return P.av(a.item(b))},
m:function(a,b,c){throw H.c(P.r("Cannot assign element of immutable List."))},
t:function(a,b){return this.j(a,b)},
$im:1,
$am:function(){return[[P.br,,,]]},
$ap:function(){return[[P.br,,,]]},
$ij:1,
$aj:function(){return[[P.br,,,]]}}
P.di.prototype={}
P.dj.prototype={}
K.ad.prototype={
a4:function(a,b){return!0},
h:function(a){return"all"}}
K.c9.prototype={
a4:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)if(u[s].a4(0,b))return!0
return!1},
h:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.h(0)}return s}}
K.aI.prototype={}
K.P.prototype={
a4:function(a,b){return!this.c7(0,b)},
h:function(a){return"!["+this.b7(0)+"]"}}
K.fj.prototype={
a4:function(a,b){if(typeof b!=="number")return H.R(b)
return this.a<=b&&this.b>=b},
h:function(a){var u=H.iz(this.a),t=H.iz(this.b)
return u+".."+t}}
K.fs.prototype={
ce:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.J("May not create a Set with zero characters."))
u=P.A
t=new H.a4([u,P.aR])
for(s=new H.aH(a,a.gk(a));s.p();)t.m(0,s.d,!0)
r=P.iy(new H.b_(t,[u]),!0,u)
if(!!r.immutable$list)H.N(P.r("sort"))
H.kK(r,J.l0())
this.a=r},
a4:function(a,b){return C.a.H(this.a,b)},
h:function(a){return P.iB(this.a)}}
L.cy.prototype={
l:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.cG(this.a.i(0,b))
r.a=H.b([],[K.aI])
r.c=!1
this.c.push(r)
return r},
dT:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
if(r.a4(0,a))return r}return},
h:function(a){return this.b},
bo:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.H(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.b_(n,[H.Z(n,0)]),n=n.gF(n);n.p();){t=n.d
o+="\n"
s=p.d.c.j(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.H(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.u)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.h(0))}return o.charCodeAt(0)==0?o:o}}
L.cE.prototype={
h:function(a){var u=H.iP(this.b,"\n","\\n"),t=H.iP(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.cF.prototype={
a7:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.u)(c),++t){s=c[t]
this.c.m(0,s,b)}},
h:function(a){return this.b}}
L.fS.prototype={
i:function(a,b){var u=this.a.j(0,b)
if(u==null){u=new L.cy(this,b)
u.c=H.b([],[L.cG])
this.a.m(0,b,u)}return u},
B:function(a){var u,t=this.b.j(0,a)
if(t==null){t=new L.cF(a)
u=P.o
t.c=new H.a4([u,u])
this.b.m(0,a,t)}return t},
b3:function(a){return this.er(a)},
er:function(a){var u=this
return P.l2(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$b3(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.A]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.a.b0(c,0)
else{if(!t.p()){s=3
break}l=t.d}d.push(l);++o
k=g.dT(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.iB(d)
throw H.c(P.J("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.N(P.r("removeRange"))
P.iA(0,m,d.length)
d.splice(0,m-0)
C.a.T(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.H(0,p.a)?7:8
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
if(g.d!=null){j=P.iB(e)
i=g.d
h=i.c.j(0,j)
p=new L.cE(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.H(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.kU()
case 1:return P.kV(q)}}},L.cE)},
h:function(a){var u,t=new P.aL(""),s=this.d
if(s!=null)t.a=s.bo()+"\n"
for(s=this.a,s=s.geu(s),s=new H.ci(J.ax(s.a),s.b);s.p();){u=s.a
if(u!=this.d)t.a+=u.bo()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.cG.prototype={
h:function(a){return this.b.b+": "+this.b7(0)}}
O.aV.prototype={
b8:function(a){this.a=H.b([],[a])
this.c=this.b=null},
aE:function(a,b){this.b=null
this.c=a},
d9:function(a){return!0},
ci:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gk:function(a){return this.a.length},
gF:function(a){var u=this.a
return new J.S(u,u.length)},
t:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.f(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.iK(s,"aV",0)]
if(s.d9(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ci(t,H.b([b],r))}},
$ij:1}
O.bu.prototype={
gk:function(a){return this.a.length},
gu:function(){var u=this.b
return u==null?this.b=D.a3():u},
a9:function(){var u=this.b
if(u!=null)u.S(null)},
gam:function(a){var u=this.a
if(u.length>0)return C.a.gaz(u)
else return V.eV()},
bQ:function(a){var u=this.a
if(a==null)u.push(V.eV())
else u.push(a)
this.a9()},
b_:function(){var u=this.a
if(u.length>0){u.pop()
this.a9()}}}
E.dU.prototype={}
E.af.prototype={
bZ:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aB(0,b,s):null
if(!J.D(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q)
t.b=!0
s.a5(t)}for(r=s.y.a,r=new J.S(r,r.length);r.p();)r.d.bZ(0,b)},
ag:function(a){var u,t,s,r,q,p,o=this,n=a.dx,m=o.x
n.toString
if(m==null)n.a.push(n.gam(n))
else n.a.push(m.J(0,n.gam(n)))
n.a9()
a.bR(o.f)
n=a.dy
u=(n&&C.a).gaz(n)
if(u!=null&&o.d!=null){n=u.a
if(n==null){n=u.d
u.f
m=n?"High":"Grey"
m+="ViewDepth"
t=a.fr.j(0,m)
if(t==null){m=a.a
s=n?"High":"Grey"
s+="ViewDepth"
t=new A.e8(m,s)
t.cf(m,s)
r="uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n".charCodeAt(0)==0?"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n":"uniform mat4 viewObjMat;\nuniform mat4 projMat;\n\nattribute vec3 posAttr;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  vec4 pos = viewObjMat*vec4(posAttr, 1.0);\n  loc = pos.xyz;\n  gl_Position = projMat*pos;\n}\n"
q=(n?"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n   vec3 clr = vec3(f, f, f);\n":"precision mediump float;\n\nuniform float width;\nuniform float stop;\n\nvarying vec3 loc;\n\nvoid main()\n{\n  float dist = loc.z;\n  float depth = (dist - stop) / width;\n  float f = clamp(depth, 0.0, 1.0);\n  f = f * 256.0;\n  float r = floor(f);\n  f = (f - r) * 256.0;\n  float g = floor(f);\n  f = (f - g) * 256.0;\n  float b = floor(f);\n  vec3 clr = vec3(r, g, b) / 256.0;\n")+"  gl_FragColor = vec4(clr, 1.0);\n}\n"
t.c=r
t.d=q.charCodeAt(0)==0?q:q
t.e=t.bj(r,35633)
t.f=t.bj(t.d,35632)
r=m.createProgram()
t.r=r
m.attachShader(r,t.e)
m.attachShader(t.r,t.f)
m.linkProgram(t.r)
if(!m.getProgramParameter(t.r,35714)){p=m.getProgramInfoLog(t.r)
m.deleteProgram(t.r)
H.N(P.J("Failed to link shader: "+H.e(p)))}t.dz()
t.dB()
t.z=t.x.j(0,"posAttr")
t.Q=H.dJ(t.y.j(0,"width"),"$ibD")
t.ch=H.dJ(t.y.j(0,"stop"),"$ibD")
t.cx=H.dJ(t.y.j(0,"viewObjMat"),"$ibE")
t.cy=H.dJ(t.y.j(0,"projMat"),"$ibE")
if(s.length===0)H.N(P.J("May not cache a shader with no name."))
if(a.fr.dK(0,s))H.N(P.J('Shader cache already contains a shader by the name "'+s+'".'))
a.fr.m(0,s,t)}u.a=t
n=t}m=o.e
if((!(m instanceof Z.c_)?o.e=null:m)==null){n=o.d.dJ(new Z.hw(a.a),$.aw())
m=n.dS($.aw())
s=u.a
m.e=s.z.c
o.e=n
n=s}m=a.a
m.useProgram(n.r)
n.x.dR()
s=u.b
r=u.c
q=n.Q
q.a.uniform1f(q.d,s-r)
r=u.c
s=n.ch
s.a.uniform1f(s.d,r)
r=a.cy
r=r.gam(r)
s=n.cy
s.toString
s.b5(r.bW(0,!0))
s=a.cx
if(s==null){s=a.db
s=s.gam(s)
r=a.dx
r=a.cx=s.J(0,r.gam(r))
s=r}n=n.cx
n.toString
n.b5(s.bW(0,!0))
u.e
n=o.e
n.aT(a)
n.ag(a)
n.es(a)
n=u.a
n.toString
m.useProgram(null)
n.x.dQ()}for(n=o.y.a,n=new J.S(n,n.length);n.p();)n.d.ag(a)
a.bP()
a.dx.b_()},
a5:function(a){var u=this.z
if(u!=null)u.S(a)},
W:function(){return this.a5(null)},
bM:function(a){this.e=null
this.a5(a)},
e8:function(){return this.bM(null)},
bK:function(a){this.a5(a)},
e7:function(){return this.bK(null)},
bI:function(a){this.a5(a)},
e4:function(){return this.bI(null)},
e3:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbH(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
e6:function(a,b){var u,t
for(u=b.gF(b),t=this.gbH();u.p();)u.gv(u).gu().I(0,t)
this.W()},
h:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.fk.prototype={
cd:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aB(Date.now(),!1)
s.y=0
s.cx=null
u=new O.bu()
t=[V.bt]
u.a=H.b([],t)
u.gu().n(0,new E.fl(s))
s.cy=u
u=new O.bu()
u.a=H.b([],t)
u.gu().n(0,new E.fm(s))
s.db=u
u=new O.bu()
u.a=H.b([],t)
u.gu().n(0,new E.fn(s))
s.dx=u
u=H.b([],[O.cB])
s.dy=u
u.push(null)
s.fr=new H.a4([P.o,A.cv])},
bR:function(a){var u=this.dy
u.push(a==null?(u&&C.a).gaz(u):a)},
bP:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.fl.prototype={
$1:function(a){}}
E.fm.prototype={
$1:function(a){this.a.cx=null}}
E.fn.prototype={
$1:function(a){this.a.cx=null}}
E.cC.prototype={
bb:function(a){this.bS()},
ba:function(){return this.bb(null)},
gdW:function(){var u,t=this,s=Date.now(),r=C.d.Z(P.j1(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aB(s,!1)
return u/r},
bm:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.J()
if(typeof r!=="number")return H.R(r)
u=C.c.bD(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.J()
t=C.c.bD(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.jj(C.h,s.gek())}},
bS:function(){if(!this.cx){this.cx=!0
var u=window
C.t.cC(u)
C.t.dr(u,W.jA(new E.fQ(this),P.V))}},
ei:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.bm()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aB(r,!1)
s.y=P.j1(r-s.r.a).a*0.000001
r=s.cy
C.a.sk(r.a,0)
r.a9()
r=s.db
C.a.sk(r.a,0)
r.a9()
r=s.dx
C.a.sk(r.a,0)
r.a9()
r=s.dy;(r&&C.a).sk(r,0)
s.dy.push(null)
o.ag(p.e)}s=p.Q
if(s!=null)s.S(null)}catch(q){u=H.ac(q)
t=H.iL(q)
P.iO("Error: "+H.e(u))
P.iO("Stack: "+H.e(t))
throw H.c(u)}}}
E.fQ.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ei()}}}
Z.cL.prototype={}
Z.bZ.prototype={
aT:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ac(s)
t=P.J('Failed to bind buffer attribute "'+r.a.h(0)+'": '+H.e(u))
throw H.c(t)}},
h:function(a){var u=this
return"["+u.a.h(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.hw.prototype={}
Z.c_.prototype={
dS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aT:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aT(a)},
es:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.f(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
h:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)p.push(u[s].h(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a_(q[s]))
return"Buffer:  ["+this.a.h(0)+"]\nIndices: "+C.a.l(p,", ")+"\nAttrs:   "+C.a.l(r,", ")}}
Z.ca.prototype={
h:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.bz(this.c))+"'")+"]"}}
Z.cK.prototype={
gb6:function(a){var u=this.a,t=(u&$.aw().a)!==0?3:0
if((u&$.bd().a)!==0)t+=3
if((u&$.bc().a)!==0)t+=3
if((u&$.be().a)!==0)t+=2
if((u&$.bf().a)!==0)t+=3
if((u&$.bV().a)!==0)t+=3
if((u&$.bW().a)!==0)t+=4
if((u&$.bg().a)!==0)++t
return(u&$.bb().a)!==0?t+4:t},
dG:function(a){var u,t=$.aw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.bd()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bc()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.be()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bf()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bV()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bg()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0)if(u===a)return t
return $.jZ()},
q:function(a,b){if(b==null)return!1
if(!(b instanceof Z.cK))return!1
return this.a===b.a},
h:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.aw().a)!==0)u.push("Pos")
if((t&$.bd().a)!==0)u.push("Norm")
if((t&$.bc().a)!==0)u.push("Binm")
if((t&$.be().a)!==0)u.push("Txt2D")
if((t&$.bf().a)!==0)u.push("TxtCube")
if((t&$.bV().a)!==0)u.push("Clr3")
if((t&$.bW().a)!==0)u.push("Clr4")
if((t&$.bg().a)!==0)u.push("Weight")
if((t&$.bb().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.a.l(u,"|")}}
D.dX.prototype={}
D.bm.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.O]}]):u).push(b)},
I:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.a.H(s,b)
if(s===!0){s=t.a
u=(s&&C.a).I(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.a.H(s,b)
if(s===!0){s=t.b
u=(s&&C.a).I(s,b)||u}return u},
S:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.O()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.a.E(P.iy(u,!0,{func:1,ret:-1,args:[D.O]}),new D.ei(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.O]}])
C.a.E(u,new D.ej(q))}return!0},
ap:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.S(u)}}}}
D.ei.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.ej.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.O.prototype={}
D.cb.prototype={}
D.cc.prototype={}
D.E.prototype={
h:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.c0.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.c0))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.cf.prototype={
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cf))return!1
if(this.a!=b.a)return!1
if(!this.b.q(0,b.b))return!1
return!0},
h:function(a){return this.b.h(0)+H.e(this.a)}}
X.eK.prototype={
ed:function(a){this.d.n(0,a.a)
return!1},
e9:function(a){this.d.I(0,a.a)
return!1}}
X.eR.prototype={
aZ:function(a,b){this.r=a.a
return!1},
ao:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.c4()
if(typeof u!=="number")return u.c0()
this.r=(u&~t)>>>0
return!1},
an:function(a,b){return!1},
ee:function(a){return!1},
cZ:function(a,b,c){return}}
X.bv.prototype={
q:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bv))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
h:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.f1.prototype={
aZ:function(a,b){this.f=a.a
return!1},
ao:function(a,b){var u=this.f,t=a.a
if(typeof t!=="number")return t.c4()
if(typeof u!=="number")return u.c0()
this.f=(u&~t)>>>0
return!1},
an:function(a,b){return!1},
ef:function(a,b){return!1}}
X.fU.prototype={
ec:function(a){return!1},
ea:function(a){return!1},
eb:function(a){return!1}}
X.cJ.prototype={
bi:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.cf(u,new X.bv(t,a.altKey,a.shiftKey))},
ac:function(a){a.shiftKey},
aS:function(a){a.shiftKey},
a3:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.P()
u=t.top
if(typeof r!=="number")return r.P()
return new V.a7(s-q,r-u)},
aj:function(a){return new V.au(a.movementX,a.movementY)},
aQ:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.a7])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
q=C.c.X(r.pageX)
C.c.X(r.pageY)
p=o.left
C.c.X(r.pageX)
n.push(new V.a7(q-p,C.c.X(r.pageY)-o.top))}return n},
a2:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.c0(u,new X.bv(t,a.altKey,a.shiftKey))},
aM:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.P()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.P()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
cU:function(a){this.f=!0},
cI:function(a){this.f=!1},
cO:function(a){if(this.f&&this.aM(a))a.preventDefault()},
cY:function(a){var u
if(!this.f)return
u=this.bi(a)
this.b.ed(u)},
cW:function(a){var u
if(!this.f)return
u=this.bi(a)
this.b.e9(u)},
d0:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.ac(a)
if(r.x){u=r.a2(a)
t=r.aj(a)
if(r.d.aZ(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.a2(a)
s=r.a3(a)
if(r.c.aZ(u,s))a.preventDefault()},
d4:function(a){var u,t,s,r=this
r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.ao(u,s))a.preventDefault()},
cS:function(a){var u,t,s,r=this
if(!r.aM(a)){r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.ao(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.ao(u,s))a.preventDefault()}},
d2:function(a){var u,t,s,r=this
r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.an(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.an(u,s))a.preventDefault()},
cQ:function(a){var u,t,s,r=this
if(!r.aM(a)){r.ac(a)
u=r.a2(a)
if(r.x){t=r.aj(a)
if(r.d.an(u,t))a.preventDefault()
return}if(r.r)return
s=r.a3(a)
if(r.c.an(u,s))a.preventDefault()}},
d6:function(a){var u,t,s=this
s.ac(a)
u=new V.au((a&&C.r).gdO(a),C.r.gdP(a)).K(0,180)
if(s.x){if(s.d.ee(u))a.preventDefault()
return}if(s.r)return
t=s.a3(a)
if(s.c.ef(u,t))a.preventDefault()},
d8:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.a2(s.y)
t=s.a3(s.y)
s.d.cZ(u,t,r)}},
di:function(a){var u,t=this
t.a.focus()
t.f=!0
t.aS(a)
u=t.aQ(a)
if(t.e.ec(u))a.preventDefault()},
de:function(a){var u
this.aS(a)
u=this.aQ(a)
if(this.e.ea(u))a.preventDefault()},
dg:function(a){var u
this.aS(a)
u=this.aQ(a)
if(this.e.eb(u))a.preventDefault()}}
V.aW.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aW))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.eh.prototype={}
V.bt.prototype={
bW:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.C])
return t},
J:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aj(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bt))return!1
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
h:function(a){return this.G()},
A:function(a){var u,t,s,r,q,p=this,o=[P.C],n=V.i8(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.i8(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.i8(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.i8(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
G:function(){return this.A("")}}
V.a7.prototype={
q:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.a7))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.an.prototype={
P:function(a,b){return new V.an(this.a-b.a,this.b-b.b,this.c-b.c)},
J:function(a,b){return new V.an(this.a*b,this.b*b,this.c*b)},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
V.ct.prototype={
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ct))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
h:function(a){var u=this
return"["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+", "+V.w(u.d,3,0)+"]"}}
V.au.prototype={
aX:function(a){var u,t=this.a
if(typeof t!=="number")return t.J()
u=this.b
if(typeof u!=="number")return u.J()
return Math.sqrt(t*t+u*u)},
K:function(a,b){var u,t
if(Math.abs(b-0)<$.B().a){u=$.jn
return u==null?$.jn=new V.au(0,0):u}u=this.a
if(typeof u!=="number")return u.K()
t=this.b
if(typeof t!=="number")return t.K()
return new V.au(u/b,t/b)},
q:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=this.a
s=$.B()
s.toString
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.R(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.P()
if(typeof t!=="number")return H.R(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+"]"}}
V.G.prototype={
aX:function(a){return Math.sqrt(this.L(this))},
L:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
al:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.G(u*t-s*r,s*q-p*t,p*r-u*q)},
O:function(a,b){return new V.G(this.a+b.a,this.b+b.b,this.c+b.c)},
aD:function(a){return new V.G(-this.a,-this.b,-this.c)},
J:function(a,b){return new V.G(this.a*b,this.b*b,this.c*b)},
K:function(a,b){if(Math.abs(b-0)<$.B().a)return V.hk()
return new V.G(this.a/b,this.b/b,this.c/b)},
dY:function(){var u=$.B().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
q:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.G))return!1
u=b.a
t=$.B().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
h:function(a){return"["+V.w(this.a,3,0)+", "+V.w(this.b,3,0)+", "+V.w(this.c,3,0)+"]"}}
U.c2.prototype={
gu:function(){var u=this.b
return u==null?this.b=D.a3():u},
aB:function(a,b,c){return this.a},
q:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c2))return!1
return J.D(this.a,b.a)},
h:function(a){return"Constant: "+this.a.A("          ")}}
U.bn.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.a3():u},
R:function(a){var u=this.e
if(u!=null)u.S(a)},
ck:function(){return this.R(null)},
cG:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gbc(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.gu()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.cb()
u.b=!0
this.R(u)},
dc:function(a,b){var u,t
for(u=b.gF(b),t=this.gbc();u.p();)u.gv(u).gu().I(0,t)
u=new D.cc()
u.b=!0
this.R(u)},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.a0()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.S(r,r.length),u=null;r.p();){q=r.d
if(q!=null){t=q.aB(0,b,c)
if(t!=null)u=u==null?t:t.J(0,u)}}s.f=u==null?V.eV():u
r=s.e
if(r!=null)r.ap(0)}return s.f},
q:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.bn))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.f(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.f(r,t)
if(!J.D(s,r[t]))return!1}return!0},
h:function(a){return"Group"},
$aj:function(){return[U.a6]},
$aaV:function(){return[U.a6]},
$ia6:1}
U.a6.prototype={}
U.cu.prototype={
gu:function(){var u=this.y
return u==null?this.y=D.a3():u},
R:function(a){var u=this.y
if(u!=null)u.S(a)},
sc_:function(a){var u
a=V.iQ(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.B().a)){this.a=a
u=new D.E("yaw",u,a)
u.b=!0
this.R(u)}},
sbO:function(a,b){var u
b=V.iQ(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.B().a)){this.b=b
u=new D.E("pitch",u,b)
u.b=!0
this.R(u)}},
sbT:function(a){var u
a=V.iQ(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.B().a)){this.c=a
u=new D.E("roll",u,a)
u.b=!0
this.R(u)}},
sbB:function(a){var u=this.d
if(!(Math.abs(u-a)<$.B().a)){this.d=a
u=new D.E("deltaYaw",u,a)
u.b=!0
this.R(u)}},
sbz:function(a){var u=this.e
if(!(Math.abs(u-a)<$.B().a)){this.e=a
u=new D.E("deltaPitch",u,a)
u.b=!0
this.R(u)}},
sbA:function(a){var u=this.f
if(!(Math.abs(u-a)<$.B().a)){this.f=a
u=new D.E("deltaRoll",u,a)
u.b=!0
this.R(u)}},
aB:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.sc_(s.a+s.d*b.y)
s.sbO(0,s.b+s.e*b.y)
s.sbT(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
r=V.aj(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1)
q=s.b
u=Math.cos(q)
t=Math.sin(q)
r=r.J(0,V.aj(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1))
q=s.a
u=Math.cos(q)
t=Math.sin(q)
s.x=r.J(0,V.aj(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1))
r=s.y
if(r!=null)r.ap(0)}return s.x},
q:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.cu))return!1
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
h:function(a){var u=this
return"Rotator: ["+V.w(u.a,3,0)+", "+V.w(u.b,3,0)+", "+V.w(u.c,3,0)+"], ["+V.w(u.d,3,0)+", "+V.w(u.e,3,0)+", "+V.w(u.f,3,0)+"]"}}
M.c6.prototype={
a1:function(a){var u=this.y
if(u!=null)u.S(a)},
cl:function(){return this.a1(null)},
cK:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gY(),s=[{func:1,ret:-1,args:[D.O]}],r=0;r<b.length;b.length===u||(0,H.u)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bm()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.cb()
u.b=!0
this.a1(u)},
cM:function(a,b){var u,t
for(u=b.gF(b),t=this.gY();u.p();)u.gv(u).gu().I(0,t)
u=new D.cc()
u.b=!0
this.a1(u)},
sbV:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gu().I(0,t.gY())
u=t.d
t.d=a
if(a!=null)a.gu().n(0,t.gY())
s=new D.E("technique",u,t.d)
s.b=!0
t.a1(s)}},
gu:function(){var u=this.y
return u==null?this.y=D.a3():u},
ag:function(a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=this
a2.bR(a1.d)
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
if(typeof s!=="number")return H.R(s)
o=C.c.X(p*s)
p=q.b
if(typeof r!=="number")return H.R(r)
n=C.c.X(p*r)
p=C.c.X(q.c*s)
a2.c=p
q=C.c.X(q.d*r)
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
i=V.aj(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a2.cy.bQ(i)
t=$.ja
if(t==null){t=$.jc
if(t==null)t=$.jc=new V.an(0,0,0)
q=$.jq
if(q==null)q=$.jq=new V.G(0,1,0)
p=$.jo
if(p==null)p=$.jo=new V.G(0,0,-1)
h=p.K(0,Math.sqrt(p.L(p)))
q=q.al(h)
g=q.K(0,Math.sqrt(q.L(q)))
f=h.al(g)
e=new V.G(t.a,t.b,t.c)
d=g.aD(0).L(e)
c=f.aD(0).L(e)
b=h.aD(0).L(e)
t=V.aj(g.a,f.a,h.a,d,g.b,f.b,h.b,c,g.c,f.c,h.c,b,0,0,0,1)
$.ja=t
a=t}else a=t
u=u.b
if(u!=null){a0=u.a
if(a0!=null)a=a0.J(0,a)}a2.db.bQ(a)
for(u=a1.e.a,u=new J.S(u,u.length);u.p();)u.d.bZ(0,a2)
for(u=a1.e.a,u=new J.S(u,u.length);u.p();)u.d.ag(a2)
a1.b.toString
a2.cy.b_()
a2.db.b_()
a1.c.toString
a2.bP()}}
A.bX.prototype={}
A.dP.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
dR:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dQ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.e8.prototype={}
A.cv.prototype={
cf:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
bj:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.J("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
dz:function(){var u,t,s,r=this,q=H.b([],[A.bX]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.R(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.bX(p,t.name,s))}r.x=new A.dP(q)},
dB:function(){var u,t,s,r=this,q=H.b([],[A.cH]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.R(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.dN(t.type,t.size,t.name,s))}r.y=new A.h8(q)},
ab:function(a,b,c){var u=this.a
if(a===1)return new A.h0(u,b,c)
else return A.iD(u,this.r,b,a,c)},
cz:function(a,b,c){var u=this.a
if(a===1)return new A.hb(u,b,c)
else return A.iD(u,this.r,b,a,c)},
cA:function(a,b,c){var u=this.a
if(a===1)return new A.hc(u,b,c)
else return A.iD(u,this.r,b,a,c)},
av:function(a,b){return new P.cU(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
dN:function(a,b,c,d){var u=this
switch(a){case 5120:return u.ab(b,c,d)
case 5121:return u.ab(b,c,d)
case 5122:return u.ab(b,c,d)
case 5123:return u.ab(b,c,d)
case 5124:return u.ab(b,c,d)
case 5125:return u.ab(b,c,d)
case 5126:return new A.bD(u.a,c,d)
case 35664:return new A.h2(u.a,c,d)
case 35665:return new A.h4(u.a,c,d)
case 35666:return new A.h6(u.a,c,d)
case 35667:return new A.h3(u.a,c,d)
case 35668:return new A.h5(u.a,c,d)
case 35669:return new A.h7(u.a,c,d)
case 35674:return new A.h9(u.a,c,d)
case 35675:return new A.ha(u.a,c,d)
case 35676:return new A.bE(u.a,c,d)
case 35678:return u.cz(b,c,d)
case 35680:return u.cA(b,c,d)
case 35670:throw H.c(u.av("BOOL",c))
case 35671:throw H.c(u.av("BOOL_VEC2",c))
case 35672:throw H.c(u.av("BOOL_VEC3",c))
case 35673:throw H.c(u.av("BOOL_VEC4",c))
default:throw H.c(P.J("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.cH.prototype={}
A.h8.prototype={
j:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
h:function(a){return this.G()},
G:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.u)(u),++r)s+=u[r].h(0)+"\n"
return s}}
A.h0.prototype={
h:function(a){return"Uniform1i: "+H.e(this.c)}}
A.h3.prototype={
h:function(a){return"Uniform2i: "+H.e(this.c)}}
A.h5.prototype={
h:function(a){return"Uniform3i: "+H.e(this.c)}}
A.h7.prototype={
h:function(a){return"Uniform4i: "+H.e(this.c)}}
A.h1.prototype={
h:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.bD.prototype={
h:function(a){return"Uniform1f: "+H.e(this.c)}}
A.h2.prototype={
h:function(a){return"Uniform2f: "+H.e(this.c)}}
A.h4.prototype={
h:function(a){return"Uniform3f: "+H.e(this.c)}}
A.h6.prototype={
h:function(a){return"Uniform4f: "+H.e(this.c)}}
A.h9.prototype={
h:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ha.prototype={
h:function(a){return"UniformMat3: "+H.e(this.c)}}
A.bE.prototype={
b5:function(a){var u=new Float32Array(H.iF(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
h:function(a){return"UniformMat4: "+H.e(this.c)}}
A.hb.prototype={
h:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.hc.prototype={
h:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.ik.prototype={
$1:function(a){return new V.an(Math.cos(a),Math.sin(a),0)}}
F.i6.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.iT(n.$1(o),m)
m=J.iT(n.$1(o+3.141592653589793/p.c),m).P(0,l)
m=new V.G(m.a,m.b,m.c)
u=m.K(0,Math.sqrt(m.L(m)))
n=$.jp
if(n==null){n=new V.G(1,0,0)
$.jp=n
t=n}else t=n
if(!J.D(u,t)){n=$.jr
if(n==null){n=new V.G(0,0,1)
$.jr=n
t=n}else t=n}n=u.al(t)
s=n.K(0,Math.sqrt(n.L(n)))
n=s.al(u)
t=n.K(0,Math.sqrt(n.L(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.J(0,n*m)
m=s.J(0,q*m)
m=new V.an(l.a+(n.a-m.a),l.b+(n.b-m.b),l.c+(n.c-m.c))
if(!J.D(a.f,m)){a.f=m
n=a.a
if(n!=null)n.W()}}}
F.aY.prototype={
ax:function(){var u=this
if(!u.gbC()){C.a.I(u.a.a.d.b,u)
u.a.a.W()}u.dl()
u.dm()
u.dn()},
du:function(a){this.a=a
a.d.b.push(this)},
dv:function(a){this.b=a
a.d.c.push(this)},
dw:function(a){this.c=a
a.d.d.push(this)},
dl:function(){var u=this.a
if(u!=null){C.a.I(u.d.b,this)
this.a=null}},
dm:function(){var u=this.b
if(u!=null){C.a.I(u.d.c,this)
this.b=null}},
dn:function(){var u=this.c
if(u!=null){C.a.I(u.d.d,this)
this.c=null}},
gbC:function(){return this.a==null||this.b==null||this.c==null},
cs:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.hk()
if(q!=null)s=s.O(0,q)
if(u!=null)s=s.O(0,u)
if(t!=null)s=s.O(0,t)
if(s.dY())return
return s.K(0,Math.sqrt(s.L(s)))},
ct:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.P(0,q)
r=new V.G(r.a,r.b,r.c)
s=r.K(0,Math.sqrt(r.L(r)))
r=t.P(0,q)
r=new V.G(r.a,r.b,r.c)
r=s.al(r.K(0,Math.sqrt(r.L(r))))
return r.K(0,Math.sqrt(r.L(r)))},
aU:function(){var u,t=this
if(t.d!=null)return!0
u=t.cs()
if(u==null){u=t.ct()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
gbx:function(a){var u=this
if(J.D(u.a,u.b))return!0
if(J.D(u.b,u.c))return!0
if(J.D(u.c,u.a))return!0
return!1},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
A:function(a){var u,t,s=this
if(s.gbC())return a+"disposed"
u=a+C.b.a6(J.a_(s.a.e),0)+", "+C.b.a6(J.a_(s.b.e),0)+", "+C.b.a6(J.a_(s.c.e),0)+" {"
t=s.d
u=(t!=null?u+(t.h(0)+", "):u+"-, ")+"-}"
return u},
G:function(){return this.A("")}}
F.el.prototype={}
F.fB.prototype={
aY:function(a,b,c){var u,t=b.a
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.D()
t=t.e
u=c.c
u.a.a.D()
if(t==u.e){t=b.b
t.a.a.D()
t=t.e
u=c.a
u.a.a.D()
if(t==u.e){t=b.c
t.a.a.D()
t=t.e
u=c.b
u.a.a.D()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.cg.prototype={}
F.eM.prototype={}
F.h_.prototype={}
F.cq.prototype={}
F.ft.prototype={
gu:function(){var u=this.e
return u==null?this.e=D.a3():u},
e1:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o!=null)++o.d
o=p.a.c
u=H.b(o.slice(0),[H.Z(o,0)])
for(o=[F.bF];u.length!==0;){t=C.a.gdU(u)
C.a.b0(u,0)
if(t!=null){s=H.b([],o)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.f(u,r)
q=u[r]
if(q!=null&&a.aY(0,t,q)){s.push(q)
C.a.b0(u,r)}}if(s.length>1)b.e0(s)}}p.a.D()
p.c.b1()
p.d.b1()
p.b.eh()
p.c.b2(new F.h_())
p.d.b2(new F.fB())
o=p.e
if(o!=null)o.ap(0)},
dJ:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aw()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.bd().a)!==0)++s
if((t&$.bc().a)!==0)++s
if((t&$.be().a)!==0)++s
if((t&$.bf().a)!==0)++s
if((t&$.bV().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.bg().a)!==0)++s
if((t&$.bb().a)!==0)++s
r=a4.gb6(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.C])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.bZ])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.dG(m)
k=l.gb6(l)
if(m>=t)return H.f(o,m)
o[m]=new Z.bZ(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.f(i,j)
h=i[j].e_(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.f(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.iF(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c_(new Z.cL(a1,d),o)
c.b=H.b([],[Z.ca])
a0.b.b
a0.c.b
if(a0.d.b.length!==0){b=H.b([],[P.A])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.D()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].b
t.a.a.D()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.f(t,m)
t=t[m].c
t.a.a.D()
b.push(t.e)}a=Z.kN(u,34963,b)
c.b.push(new Z.ca(4,b.length,a))}return c},
h:function(a){var u=this,t=H.b([],[P.o])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.A("   "))}u.b.b
u.c.b
if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.A("   "))}return C.a.l(t,"\n")},
W:function(){var u=this.e
if(u!=null)u.S(null)}}
F.fu.prototype={
dE:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aY])
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
h.push(F.ek(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.ek(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.ek(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.ek(l,i,m))}p=!p}r=!r}return h},
gk:function(a){return this.b.length},
b2:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.j(0,q)
for(o=q-1;o>=0;--o){n=r.d.j(0,o)
if(a.aY(0,p,n)){p.ax()
break}}}}},
b1:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.f(t,u)
s=t[u]
t=s.gbx(s)
if(t)s.ax()}},
aV:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.u)(u),++r)if(!u[r].aU())s=!1
return s},
h:function(a){return this.G()},
A:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].A(a))
return C.a.l(r,"\n")},
G:function(){return this.A("")}}
F.fv.prototype={
gk:function(a){return 0},
b2:function(a){var u,t,s,r,q
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.f(s,t)
r=s[t]
for(r.c.c,q=-1;!1;--q)r.c.j(0,q)}},
b1:function(){var u,t,s
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
s=t[u]
t=s.gbx(s)
if(t)s.ax()}},
h:function(a){return this.G()},
A:function(a){var u,t,s=H.b([],[P.o])
for(u=0;!1;++u){t=this.b
if(u>=0)return H.f(t,u)
s.push(t[u].A(a+(""+u+". ")))}return C.a.l(s,"\n")},
G:function(){return this.A("")}}
F.fw.prototype={
gk:function(a){return 0},
eh:function(){var u,t
for(u=-1;!1;--u){t=this.b
return H.f(t,u)
t=t[u].gex()
t=t.gew(t)
if(t.gk(t).M(0,1)){t=this.b
return H.f(t,u)
t[u].ax()}}},
h:function(a){return this.G()},
A:function(a){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].A(a))}return C.a.l(s,"\n")},
G:function(){return this.A("")}}
F.bF.prototype={
by:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.jt(u.cx,r,o,t,s,q,p,a,n)},
e_:function(a){var u,t,s=this
if(a.q(0,$.aw())){u=s.f
t=[P.C]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bd())){u=s.r
t=[P.C]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bc())){u=H.b([0,0,1],[P.C])
return u}else if(a.q(0,$.be())){u=s.y
t=[P.C]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.q(0,$.bf())){u=H.b([0,0,0],[P.C])
return u}else if(a.q(0,$.bV())){u=s.Q
t=[P.C]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.q(0,$.bW())){u=s.Q
t=[P.C]
if(u==null)return H.b([1,1,1,1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else if(a.q(0,$.bg()))return H.b([s.ch],[P.C])
else if(a.q(0,$.bb())){u=H.b([-1,-1,-1,-1],[P.C])
return u}else return H.b([],[P.C])},
aU:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.hk()
t.d.E(0,new F.hu(s))
s=s.a
t.r=s.K(0,Math.sqrt(s.L(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.ap(0)}return!0},
q:function(a,b){if(b==null)return!1
return this===b},
h:function(a){return this.G()},
A:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.b.a6(J.a_(s.e),0))
u=s.f
if(u!=null)q.push(u.h(0))
else q.push(r)
u=s.r
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.y
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(r)
u=s.Q
if(u!=null)q.push(u.h(0))
else q.push(r)
q.push(V.w(s.ch,3,0))
q.push(r)
t=C.a.l(q,", ")
return a+"{"+t+"}"},
G:function(){return this.A("")}}
F.hu.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.O(0,t)}}}
F.hl.prototype={
D:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.f(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.J("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
bs:function(a,b){var u=null,t=F.jt(u,u,a,u,u,b,u,u,0)
this.n(0,t)
return t},
gk:function(a){return this.c.length},
aV:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)u[s].aU()
return!0},
h:function(a){return this.G()},
A:function(a){var u,t,s,r
this.D()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.u)(t),++r)u.push(t[r].A(a))
return C.a.l(u,"\n")},
G:function(){return this.A("")}}
F.hm.prototype={
gk:function(a){return this.b.length+this.c.length+this.d.length},
j:function(a,b){var u,t=this.b,s=t.length
if(b<s){if(b<0)return H.f(t,b)
return t[b]}b-=s
t=this.c
u=t.length
if(b<u){if(b<0)return H.f(t,b)
return t[b]}b-=u
t=this.d
if(b<0||b>=t.length)return H.f(t,b)
return t[b]},
E:function(a,b){var u=this
C.a.E(u.b,b)
C.a.E(u.c,new F.hn(u,b))
C.a.E(u.d,new F.ho(u,b))},
h:function(a){return this.G()},
G:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].A(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].A(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.u)(u),++s)r.push(u[s].A(""))
return C.a.l(r,"\n")}}
F.hn.prototype={
$1:function(a){if(!J.D(a.a,this.a))this.b.$1(a)}}
F.ho.prototype={
$1:function(a){var u=this.a
if(!J.D(a.a,u)&&!J.D(a.b,u))this.b.$1(a)}}
F.hp.prototype={
gk:function(a){return 0},
j:function(a,b){var u,t
if(b>=0){u=this.c
t=b-0
if(t>=0)return H.f(u,t)
return u[t]}else{u=this.b
return H.f(u,b)
return u[b]}},
h:function(a){return this.G()},
G:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].A(""))}for(u=this.c,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].A(""))}return C.a.l(s,"\n")}}
F.hr.prototype={}
F.hq.prototype={
aY:function(a,b,c){return J.D(b.f,c.f)}}
F.hs.prototype={}
F.fa.prototype={
e0:function(a){var u,t,s,r,q,p,o,n,m=V.hk()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)m=new V.G(m.a+s.a,m.b+s.b,m.c+s.c)}m=m.K(0,Math.sqrt(m.L(m)))
for(u=a.length,s=m==null,t=0;t<a.length;a.length===u||(0,H.u)(a),++t){r=a[t]
if(s)q=null
else{p=m.a
o=m.b
n=m.c
q=m.K(0,Math.sqrt(p*p+o*o+n*n))}if(!J.D(r.r,q)){r.r=q
p=r.a
if(p!=null){p=p.e
if(p!=null)p.S(null)}}}return}}
F.ht.prototype={
gk:function(a){return 0},
h:function(a){return this.G()},
G:function(){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.f(u,t)
s.push(u[t].A(""))}return C.a.l(s,"\n")}}
O.e7.prototype={
gu:function(){var u=this.r
return u==null?this.r=D.a3():u},
aP:function(a){var u=this.r
if(u!=null)u.S(a)}}
O.cB.prototype={}
X.ip.prototype={}
X.et.prototype={
gu:function(){var u=this.x
return u==null?this.x=D.a3():u}}
X.cp.prototype={
gu:function(){var u=this.f
return u==null?this.f=D.a3():u},
aa:function(a){var u=this.f
if(u!=null)u.S(a)},
cp:function(){return this.aa(null)},
sbG:function(a){var u,t,s=this
if(!J.D(s.b,a)){u=s.b
if(u!=null)u.gu().I(0,s.gbd())
t=s.b
s.b=a
if(a!=null)a.gu().n(0,s.gbd())
u=new D.E("mover",t,s.b)
u.b=!0
s.aa(u)}}}
X.fM.prototype={}
V.c1.prototype={
ar:function(a){this.b=new P.ey(C.F)
this.c=null
this.d=H.b([],[[P.b0,W.W]])},
w:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.W]))
u=a.split("\n")
for(l=u.length,t=[W.W],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.cw(q,0,q.length)
n=o==null?q:o
C.D.c5(p,H.iP(n," ","&nbsp;"))
n=p.style
n.color=b
C.a.gaz(m.d).push(p)}},
bN:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.b0,W.W]])
u=C.a.l(b,"\n")
t=r.c
if(t==null)t=r.c=r.aw()
for(t.toString,s=new H.k(u),s=new P.b6(t.b3(new H.aH(s,s.gk(s))).a());s.p();)r.aA(s.gv(s))}}
V.ii.prototype={
$1:function(a){var u=C.c.bX(this.a.gdW(),2)
if(u!=="0.00")P.iO(u+" fps")}}
V.e5.prototype={
aA:function(a){var u=this
switch(a.a){case"Class":u.w(a.b,"#551")
break
case"Comment":u.w(a.b,"#777")
break
case"Id":u.w(a.b,"#111")
break
case"Num":u.w(a.b,"#191")
break
case"Reserved":u.w(a.b,"#119")
break
case"String":u.w(a.b,"#171")
break
case"Symbol":u.w(a.b,"#616")
break
case"Type":u.w(a.b,"#B11")
break
case"Whitespace":u.w(a.b,"#111")
break}},
aw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.fT()
a1.d=a1.i(0,r)
u=a1.i(0,r).l(0,q)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=a1.i(0,q).l(0,q)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=a1.i(0,r).l(0,p)
t=K.z("0","9")
u.a.push(t)
t=a1.i(0,p).l(0,p)
u=K.z("0","9")
t.a.push(u)
u=a1.i(0,p).l(0,o)
t=K.n(new H.k("."))
u.a.push(t)
t=a1.i(0,o).l(0,n)
u=K.z("0","9")
t.a.push(u)
u=a1.i(0,n).l(0,n)
t=K.z("0","9")
u.a.push(t)
t=a1.i(0,r).l(0,m)
u=K.n(new H.k(l))
t.a.push(u)
u=a1.i(0,m).l(0,m)
t=K.n(new H.k(l))
u.a.push(t)
t=a1.i(0,r).l(0,k)
u=K.n(new H.k('"'))
t.a.push(u)
u=a1.i(0,k).l(0,j)
t=K.n(new H.k('"'))
u.a.push(t)
t=a1.i(0,k).l(0,i)
u=K.n(new H.k("\\"))
t.a.push(u)
u=a1.i(0,i).l(0,k)
t=K.n(new H.k('"'))
u.a.push(t)
a1.i(0,k).l(0,k).a.push(new K.ad())
t=a1.i(0,r).l(0,h)
u=K.n(new H.k("'"))
t.a.push(u)
u=a1.i(0,h).l(0,g)
t=K.n(new H.k("'"))
u.a.push(t)
t=a1.i(0,h).l(0,f)
u=K.n(new H.k("\\"))
t.a.push(u)
u=a1.i(0,f).l(0,h)
t=K.n(new H.k("'"))
u.a.push(t)
a1.i(0,h).l(0,h).a.push(new K.ad())
t=a1.i(0,r).l(0,e)
u=K.n(new H.k("/"))
t.a.push(u)
u=a1.i(0,e).l(0,d)
t=K.n(new H.k("/"))
u.a.push(t)
t=a1.i(0,d).l(0,c)
u=K.n(new H.k("\n"))
t.a.push(u)
u=a1.i(0,d).l(0,d)
t=new K.P()
s=[K.aI]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("\n"))
t.a.push(u)
u=a1.i(0,e).l(0,b)
t=K.n(new H.k("*"))
u.a.push(t)
t=a1.i(0,b).l(0,a)
u=K.n(new H.k("*"))
t.a.push(u)
u=a1.i(0,a).l(0,b)
t=new K.P()
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("*"))
t.a.push(u)
u=a1.i(0,a).l(0,c)
t=K.n(new H.k("/"))
u.a.push(t)
t=a1.i(0,r).l(0,a0)
u=K.n(new H.k(" \n\t"))
t.a.push(u)
u=a1.i(0,a0).l(0,a0)
t=K.n(new H.k(" \n\t"))
u.a.push(t)
t=a1.i(0,p)
t.d=t.a.B("Num")
t=a1.i(0,n)
t.d=t.a.B("Num")
t=a1.i(0,m)
t.d=t.a.B("Symbol")
t=a1.i(0,j)
t.d=t.a.B("String")
t=a1.i(0,g)
t.d=t.a.B("String")
t=a1.i(0,c)
t.d=t.a.B(d)
t=a1.i(0,a0)
t.d=t.a.B(a0)
t=a1.i(0,q)
t=t.d=t.a.B(q)
u=[P.o]
t.a7(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.a7(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.a7(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.ev.prototype={
aA:function(a){var u=this
switch(a.a){case"Builtin":u.w(a.b,"#411")
break
case"Comment":u.w(a.b,"#777")
break
case"Id":u.w(a.b,"#111")
break
case"Num":u.w(a.b,"#191")
break
case"Preprocess":u.w(a.b,"#737")
break
case"Reserved":u.w(a.b,"#119")
break
case"Symbol":u.w(a.b,"#611")
break
case"Type":u.w(a.b,"#171")
break
case"Whitespace":u.w(a.b,"#111")
break}},
aw:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.fT()
e.d=e.i(0,r)
u=e.i(0,r).l(0,q)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=e.i(0,q).l(0,q)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=e.i(0,r).l(0,p)
t=K.z("0","9")
u.a.push(t)
t=e.i(0,p).l(0,p)
u=K.z("0","9")
t.a.push(u)
u=e.i(0,p).l(0,o)
t=K.n(new H.k("."))
u.a.push(t)
t=e.i(0,o).l(0,n)
u=K.z("0","9")
t.a.push(u)
u=e.i(0,n).l(0,n)
t=K.z("0","9")
u.a.push(t)
t=e.i(0,r).l(0,m)
u=K.n(new H.k(l))
t.a.push(u)
u=e.i(0,m).l(0,m)
t=K.n(new H.k(l))
u.a.push(t)
t=e.i(0,r).l(0,k)
u=K.n(new H.k("/"))
t.a.push(u)
u=e.i(0,k).l(0,j)
t=K.n(new H.k("/"))
u.a.push(t)
e.i(0,k).l(0,m).a.push(new K.ad())
t=e.i(0,j).l(0,i)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,j).l(0,j)
t=new K.P()
s=[K.aI]
t.a=H.b([],s)
u.a.push(t)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,r).l(0,h)
t=K.n(new H.k("#"))
u.a.push(t)
t=e.i(0,h).l(0,h)
u=new K.P()
u.a=H.b([],s)
t.a.push(u)
t=K.n(new H.k("\n"))
u.a.push(t)
t=e.i(0,h).l(0,g)
u=K.n(new H.k("\n"))
t.a.push(u)
u=e.i(0,r).l(0,f)
t=K.n(new H.k(" \n\t"))
u.a.push(t)
t=e.i(0,f).l(0,f)
u=K.n(new H.k(" \n\t"))
t.a.push(u)
u=e.i(0,p)
u.d=u.a.B("Num")
u=e.i(0,n)
u.d=u.a.B("Num")
u=e.i(0,m)
u.d=u.a.B("Symbol")
u=e.i(0,i)
u.d=u.a.B(j)
u=e.i(0,g)
u.d=u.a.B(h)
u=e.i(0,f)
u.d=u.a.B(f)
u=e.i(0,q)
u=u.d=u.a.B(q)
t=[P.o]
u.a7(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.a7(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.a7(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.ew.prototype={
aA:function(a){var u=this,t="#111"
switch(a.a){case"Attr":u.w(a.b,"#911")
u.w("=",t)
break
case"Id":u.w(a.b,t)
break
case"Other":u.w(a.b,t)
break
case"Reserved":u.w(a.b,"#119")
break
case"String":u.w(a.b,"#171")
break
case"Symbol":u.w(a.b,"#616")
break}},
aw:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.fT()
l.d=l.i(0,s)
u=l.i(0,s).l(0,r)
t=K.n(new H.k("_"))
u.a.push(t)
t=K.z("a","z")
u.a.push(t)
t=K.z("A","Z")
u.a.push(t)
t=l.i(0,r).l(0,r)
u=K.n(new H.k("_"))
t.a.push(u)
u=K.z("0","9")
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=l.i(0,r).l(0,q)
t=K.n(new H.k("="))
u.a.push(t)
u.c=!0
u=l.i(0,s).l(0,p)
t=K.n(new H.k("</\\-!>="))
u.a.push(t)
t=l.i(0,p).l(0,p)
u=K.n(new H.k("</\\-!>="))
t.a.push(u)
u=l.i(0,s).l(0,o)
t=K.n(new H.k('"'))
u.a.push(t)
t=l.i(0,o).l(0,n)
u=K.n(new H.k('"'))
t.a.push(u)
u=l.i(0,o).l(0,"EscStr")
t=K.n(new H.k("\\"))
u.a.push(t)
t=l.i(0,"EscStr").l(0,o)
u=K.n(new H.k('"'))
t.a.push(u)
l.i(0,o).l(0,o).a.push(new K.ad())
l.i(0,s).l(0,m).a.push(new K.ad())
u=l.i(0,m).l(0,m)
t=new K.P()
t.a=H.b([],[K.aI])
u.a.push(t)
u=K.n(new H.k('</\\-!>=_"'))
t.a.push(u)
u=K.z("a","z")
t.a.push(u)
u=K.z("A","Z")
t.a.push(u)
u=l.i(0,p)
u.d=u.a.B("Symbol")
u=l.i(0,n)
u.d=u.a.B("String")
u=l.i(0,r)
t=u.a.B(r)
u.d=t
t.a7(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.o]))
t=l.i(0,q)
t.d=t.a.B(q)
t=l.i(0,m)
t.d=t.a.B(m)
return l}}
V.fg.prototype={
bN:function(a,b){this.d=H.b([],[[P.b0,W.W]])
this.w(C.a.l(b,"\n"),"#111")},
aA:function(a){},
aw:function(){return}}
V.fx.prototype={
cg:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.H(q,"scroll",new V.fz(o),!1)},
bt:function(a){var u,t,s,r,q,p,o,n
this.dA()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.a.dZ(a),s.toString,r=new H.k(r),r=new P.b6(s.b3(new H.aH(r,r.gk(r))).a());r.p();){s=r.gv(r)
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
if(H.lA(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.f(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.jx(C.o,s,C.f,!1)
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
c1:function(a){var u,t,s,r=new V.e5("dart")
r.ar("dart")
u=new V.ev("glsl")
u.ar("glsl")
t=new V.ew("html")
t.ar("html")
s=C.a.dV(H.b([r,u,t],[V.c1]),new V.fA(a))
if(s!=null)return s
r=new V.fg("plain")
r.ar("plain")
return r},
br:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.A])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.iJ(s).aF(s,"+")){b0[t]=C.b.aG(s,1)
a6.push(1)
u=!0}else if(C.b.aF(s,"-")){b0[t]=C.b.aG(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.c1(a8)
r.bN(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.jx(C.o,a7,C.f,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.iV()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.u)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.u)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.a.gF(s);a2.p();)d.appendChild(a2.gv(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
dA:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.fT()
u.d=u.i(0,q)
t=u.i(0,q).l(0,p)
s=K.n(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.i(0,p).l(0,p)
s=new K.P()
r=[K.aI]
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("*"))
s.a.push(t)
t=u.i(0,p).l(0,"BoldEnd")
s=K.n(new H.k("*"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,o)
s=K.n(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.i(0,o).l(0,o)
s=new K.P()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("_"))
s.a.push(t)
t=u.i(0,o).l(0,n)
s=K.n(new H.k("_"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,m)
s=K.n(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.i(0,m).l(0,m)
s=new K.P()
s.a=H.b([],r)
t.a.push(s)
t=K.n(new H.k("`"))
s.a.push(t)
t=u.i(0,m).l(0,"CodeEnd")
s=K.n(new H.k("`"))
t.a.push(s)
t.c=!0
t=u.i(0,q).l(0,l)
s=K.n(new H.k("["))
t.a.push(s)
t.c=!0
t=u.i(0,l).l(0,k)
s=K.n(new H.k("|"))
t.a.push(s)
s=u.i(0,l).l(0,j)
t=K.n(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.i(0,l).l(0,l)
t=new K.P()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("|]"))
t.a.push(s)
s=u.i(0,k).l(0,j)
t=K.n(new H.k("]"))
s.a.push(t)
s.c=!0
s=u.i(0,k).l(0,k)
t=new K.P()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("|]"))
t.a.push(s)
u.i(0,q).l(0,i).a.push(new K.ad())
s=u.i(0,i).l(0,i)
t=new K.P()
t.a=H.b([],r)
s.a.push(t)
s=K.n(new H.k("*_`["))
t.a.push(s)
s=u.i(0,"BoldEnd")
s.d=s.a.B(p)
s=u.i(0,n)
s.d=s.a.B(o)
s=u.i(0,"CodeEnd")
s.d=s.a.B(m)
s=u.i(0,j)
s.d=s.a.B("Link")
s=u.i(0,i)
s.d=s.a.B(i)
this.b=u}}
V.fz.prototype={
$1:function(a){P.jj(C.h,new V.fy(this.a))}}
V.fy.prototype={
$0:function(){var u=C.c.X(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.fA.prototype={
$1:function(a){return a.a===this.a}}
R.ig.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.o]
u.br("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.br("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.c8=u.h
u=J.ce.prototype
u.ca=u.h
u=P.j.prototype
u.c9=u.aC
u=W.F.prototype
u.aH=u.U
u=W.df.prototype
u.cb=u.a_
u=K.c9.prototype
u.c7=u.a4
u.b7=u.h})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"l0","ko",15)
t(P,"la","kP",5)
t(P,"lb","kQ",5)
t(P,"lc","kR",5)
s(P,"jC","l8",8)
r(W,"ln",4,null,["$4"],["kS"],12,0)
r(W,"lo",4,null,["$4"],["kT"],12,0)
var l
q(l=E.af.prototype,"gbL",0,0,null,["$1","$0"],["bM","e8"],0,0)
q(l,"gbJ",0,0,null,["$1","$0"],["bK","e7"],0,0)
q(l,"gbH",0,0,null,["$1","$0"],["bI","e4"],0,0)
p(l,"ge2","e3",2)
p(l,"ge5","e6",2)
q(l=E.cC.prototype,"gb9",0,0,null,["$1","$0"],["bb","ba"],0,0)
o(l,"gek","bS",8)
n(l=X.cJ.prototype,"gcT","cU",3)
n(l,"gcH","cI",3)
n(l,"gcN","cO",1)
n(l,"gcX","cY",9)
n(l,"gcV","cW",9)
n(l,"gd_","d0",1)
n(l,"gd3","d4",1)
n(l,"gcR","cS",1)
n(l,"gd1","d2",1)
n(l,"gcP","cQ",1)
n(l,"gd5","d6",14)
n(l,"gd7","d8",3)
n(l,"gdh","di",4)
n(l,"gdd","de",4)
n(l,"gdf","dg",4)
m(V.au.prototype,"gk","aX",10)
m(V.G.prototype,"gk","aX",10)
q(l=U.bn.prototype,"gbc",0,0,null,["$1","$0"],["R","ck"],0,0)
p(l,"gcF","cG",11)
p(l,"gda","dc",11)
q(l=M.c6.prototype,"gY",0,0,null,["$1","$0"],["a1","cl"],0,0)
p(l,"gcJ","cK",2)
p(l,"gcL","cM",2)
q(X.cp.prototype,"gbd",0,0,null,["$1","$0"],["aa","cp"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.L,null)
s(P.L,[H.iw,J.a,J.S,P.d2,P.j,H.aH,P.eD,H.c7,H.hf,H.fY,P.aX,H.bj,H.dk,P.K,H.eN,H.eO,H.eH,P.dr,P.b5,P.b6,P.cM,P.cz,P.fI,P.cD,P.i3,P.hR,P.hL,P.d1,P.p,P.dY,P.ez,P.i1,P.aR,P.aB,P.V,P.aC,P.fe,P.cx,P.cU,P.es,P.eu,P.b0,P.br,P.aJ,P.o,P.aL,W.e1,W.bI,W.x,W.cn,W.df,W.hW,W.c8,W.al,W.hQ,W.dw,P.hM,K.ad,K.c9,K.aI,K.fj,K.fs,L.cy,L.cE,L.cF,L.fS,O.aV,O.bu,E.dU,E.af,E.fk,E.cC,Z.cL,Z.hw,Z.c_,Z.ca,Z.cK,D.dX,D.bm,D.O,X.c0,X.cf,X.eK,X.eR,X.bv,X.f1,X.fU,X.cJ,V.aW,V.eh,V.bt,V.a7,V.an,V.ct,V.au,V.G,M.c6,A.bX,A.dP,A.cH,A.h8,F.aY,F.el,F.cg,F.eM,F.cq,F.ft,F.fu,F.fv,F.fw,F.bF,F.hl,F.hm,F.hp,F.hr,F.hs,F.ht,O.cB,X.ip,X.fM,X.cp,V.c1,V.fx])
s(J.a,[J.eE,J.eG,J.ce,J.aD,J.bp,J.aE,H.bx,W.d,W.dM,W.bY,W.a2,W.v,W.cO,W.T,W.e6,W.e9,W.cQ,W.c5,W.cS,W.eb,W.h,W.cV,W.ai,W.ex,W.cY,W.eQ,W.eW,W.d3,W.d4,W.ak,W.d5,W.d8,W.am,W.dc,W.de,W.aq,W.dg,W.ar,W.dl,W.a8,W.dp,W.fR,W.at,W.ds,W.fW,W.hh,W.dx,W.dz,W.dB,W.dD,W.dF,P.aG,P.d_,P.aK,P.da,P.fi,P.dm,P.aM,P.du,P.dQ,P.cN,P.di])
s(J.ce,[J.ff,J.b4,J.aF])
t(J.iv,J.aD)
s(J.bp,[J.cd,J.eF])
t(P.eP,P.d2)
s(P.eP,[H.cI,W.hD,W.M,P.eo])
t(H.k,H.cI)
s(P.j,[H.m,H.bs,H.bG,P.eB])
s(H.m,[H.ch,H.b_])
t(H.ee,H.bs)
s(P.eD,[H.ci,H.hx])
t(H.eU,H.ch)
s(P.aX,[H.fb,H.eJ,H.he,H.dW,H.fq,P.co,P.a0,P.hg,P.hd,P.bB,P.dZ,P.e4])
s(H.bj,[H.il,H.fN,H.eI,H.ib,H.ic,H.id,P.hz,P.hy,P.hA,P.hB,P.i0,P.i_,P.i4,P.hO,P.hP,P.eT,P.ec,P.ed,W.ef,W.eY,W.f_,W.fp,W.fH,W.hH,W.f9,W.f8,W.hS,W.hT,W.hZ,W.i2,P.i5,P.ep,P.eq,P.dS,E.fl,E.fm,E.fn,E.fQ,D.ei,D.ej,F.ik,F.i6,F.hu,F.hn,F.ho,V.ii,V.fz,V.fy,V.fA,R.ig])
s(H.fN,[H.fF,H.bh])
t(P.eS,P.K)
s(P.eS,[H.a4,W.hC])
t(H.cj,H.bx)
s(H.cj,[H.bJ,H.bL])
t(H.bK,H.bJ)
t(H.bw,H.bK)
t(H.bM,H.bL)
t(H.ck,H.bM)
s(H.ck,[H.f2,H.f3,H.f4,H.f5,H.f6,H.cl,H.f7])
t(P.hX,P.eB)
t(P.hN,P.i3)
t(P.hK,P.hR)
t(P.e_,P.fI)
t(P.eg,P.dY)
s(P.e_,[P.ey,P.hj])
t(P.hi,P.eg)
s(P.V,[P.C,P.A])
s(P.a0,[P.b2,P.eA])
s(W.d,[W.t,W.en,W.ap,W.bN,W.as,W.a9,W.bP,W.hv,W.bH,P.dT,P.aS])
s(W.t,[W.F,W.az])
s(W.F,[W.l,P.i])
s(W.l,[W.dN,W.dO,W.aT,W.aU,W.W,W.er,W.fr,W.cA,W.fK,W.fL,W.bC])
t(W.e0,W.a2)
t(W.bk,W.cO)
s(W.T,[W.e2,W.e3])
t(W.cR,W.cQ)
t(W.c4,W.cR)
t(W.cT,W.cS)
t(W.ea,W.cT)
t(W.ah,W.bY)
t(W.cW,W.cV)
t(W.em,W.cW)
t(W.cZ,W.cY)
t(W.bo,W.cZ)
t(W.aN,W.h)
s(W.aN,[W.aZ,W.a5,W.b3])
t(W.eX,W.d3)
t(W.eZ,W.d4)
t(W.d6,W.d5)
t(W.f0,W.d6)
t(W.d9,W.d8)
t(W.cm,W.d9)
t(W.dd,W.dc)
t(W.fh,W.dd)
t(W.fo,W.de)
t(W.bO,W.bN)
t(W.fC,W.bO)
t(W.dh,W.dg)
t(W.fD,W.dh)
t(W.fG,W.dl)
t(W.dq,W.dp)
t(W.fO,W.dq)
t(W.bQ,W.bP)
t(W.fP,W.bQ)
t(W.dt,W.ds)
t(W.fV,W.dt)
t(W.aO,W.a5)
t(W.dy,W.dx)
t(W.hE,W.dy)
t(W.cP,W.c5)
t(W.dA,W.dz)
t(W.hI,W.dA)
t(W.dC,W.dB)
t(W.d7,W.dC)
t(W.dE,W.dD)
t(W.hU,W.dE)
t(W.dG,W.dF)
t(W.hV,W.dG)
t(W.hF,W.hC)
t(W.hG,P.cz)
t(W.hY,W.df)
t(P.X,P.hM)
t(P.d0,P.d_)
t(P.eL,P.d0)
t(P.db,P.da)
t(P.fc,P.db)
t(P.bA,P.i)
t(P.dn,P.dm)
t(P.fJ,P.dn)
t(P.dv,P.du)
t(P.fX,P.dv)
t(P.dR,P.cN)
t(P.fd,P.aS)
t(P.dj,P.di)
t(P.fE,P.dj)
s(K.c9,[K.P,L.cG])
s(E.dU,[Z.bZ,A.cv])
s(D.O,[D.cb,D.cc,D.E])
t(U.a6,D.dX)
s(U.a6,[U.c2,U.cu])
t(U.bn,O.aV)
t(A.e8,A.cv)
s(A.cH,[A.h0,A.h3,A.h5,A.h7,A.h1,A.bD,A.h2,A.h4,A.h6,A.h9,A.ha,A.bE,A.hb,A.hc])
t(F.fB,F.el)
t(F.h_,F.eM)
t(F.hq,F.hr)
t(F.fa,F.hs)
t(O.e7,O.cB)
t(X.et,X.fM)
s(V.c1,[V.e5,V.ev,V.ew,V.fg])
u(H.cI,H.hf)
u(H.bJ,P.p)
u(H.bK,H.c7)
u(H.bL,P.p)
u(H.bM,H.c7)
u(P.d2,P.p)
u(W.cO,W.e1)
u(W.cQ,P.p)
u(W.cR,W.x)
u(W.cS,P.p)
u(W.cT,W.x)
u(W.cV,P.p)
u(W.cW,W.x)
u(W.cY,P.p)
u(W.cZ,W.x)
u(W.d3,P.K)
u(W.d4,P.K)
u(W.d5,P.p)
u(W.d6,W.x)
u(W.d8,P.p)
u(W.d9,W.x)
u(W.dc,P.p)
u(W.dd,W.x)
u(W.de,P.K)
u(W.bN,P.p)
u(W.bO,W.x)
u(W.dg,P.p)
u(W.dh,W.x)
u(W.dl,P.K)
u(W.dp,P.p)
u(W.dq,W.x)
u(W.bP,P.p)
u(W.bQ,W.x)
u(W.ds,P.p)
u(W.dt,W.x)
u(W.dx,P.p)
u(W.dy,W.x)
u(W.dz,P.p)
u(W.dA,W.x)
u(W.dB,P.p)
u(W.dC,W.x)
u(W.dD,P.p)
u(W.dE,W.x)
u(W.dF,P.p)
u(W.dG,W.x)
u(P.d_,P.p)
u(P.d0,W.x)
u(P.da,P.p)
u(P.db,W.x)
u(P.dm,P.p)
u(P.dn,W.x)
u(P.du,P.p)
u(P.dv,W.x)
u(P.cN,P.K)
u(P.di,P.p)
u(P.dj,W.x)})()
var v={mangledGlobalNames:{A:"int",C:"double",V:"num",o:"String",aR:"bool",aJ:"Null",b0:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.O]},{func:1,ret:-1,args:[W.a5]},{func:1,ret:-1,args:[P.A,[P.j,E.af]]},{func:1,ret:-1,args:[W.h]},{func:1,ret:-1,args:[W.b3]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.aJ,args:[,,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.aZ]},{func:1,ret:P.C},{func:1,ret:-1,args:[P.A,[P.j,U.a6]]},{func:1,ret:P.aR,args:[W.F,P.o,P.o,W.bI]},{func:1,ret:P.aJ,args:[,]},{func:1,ret:-1,args:[W.aO]},{func:1,ret:P.A,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.aT.prototype
C.C=W.aU.prototype
C.D=W.W.prototype
C.G=J.a.prototype
C.a=J.aD.prototype
C.d=J.cd.prototype
C.c=J.bp.prototype
C.b=J.aE.prototype
C.H=J.aF.prototype
C.p=J.ff.prototype
C.q=W.cA.prototype
C.k=J.b4.prototype
C.r=W.aO.prototype
C.t=W.bH.prototype
C.m=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.u=function() {
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
C.z=function(getTagFallback) {
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
C.v=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.w=function(hooks) {
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
C.y=function(hooks) {
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
C.x=function(hooks) {
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
C.n=function(hooks) { return hooks; }

C.A=new P.fe()
C.f=new P.hi()
C.B=new P.hj()
C.e=new P.hN()
C.h=new P.aC(0)
C.E=new P.aC(5e6)
C.F=new P.ez("element",!1,!1,!1)
C.I=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.o])
C.J=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.o])
C.K=H.b(u([]),[P.o])
C.o=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.A])
C.i=H.b(u(["bind","if","ref","repeat","syntax"]),[P.o])
C.j=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.o])
C.L=new P.b5(null,2)})();(function staticFields(){$.a1=0
$.bi=null
$.iW=null
$.jF=null
$.jB=null
$.jI=null
$.i7=null
$.ie=null
$.iM=null
$.b7=null
$.bR=null
$.bS=null
$.iG=!1
$.Y=C.e
$.Q=[]
$.ae=null
$.ir=null
$.j3=null
$.j2=null
$.cX=P.j5(P.o,P.eu)
$.j8=null
$.jb=null
$.jc=null
$.jf=null
$.jn=null
$.js=null
$.jp=null
$.jq=null
$.jr=null
$.jo=null
$.ja=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"lI","jM",function(){return H.jE("_$dart_dartClosure")})
u($,"lJ","iR",function(){return H.jE("_$dart_js")})
u($,"lK","jN",function(){return H.aa(H.fZ({
toString:function(){return"$receiver$"}}))})
u($,"lL","jO",function(){return H.aa(H.fZ({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"lM","jP",function(){return H.aa(H.fZ(null))})
u($,"lN","jQ",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lQ","jT",function(){return H.aa(H.fZ(void 0))})
u($,"lR","jU",function(){return H.aa(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"lP","jS",function(){return H.aa(H.jl(null))})
u($,"lO","jR",function(){return H.aa(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"lT","jW",function(){return H.aa(H.jl(void 0))})
u($,"lS","jV",function(){return H.aa(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"m5","iS",function(){return P.kO()})
u($,"m8","k0",function(){return P.kD("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"m6","k_",function(){return P.j6(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.o)})
u($,"m_","jZ",function(){return Z.U(0)})
u($,"lU","jX",function(){return Z.U(511)})
u($,"m1","aw",function(){return Z.U(1)})
u($,"m0","bd",function(){return Z.U(2)})
u($,"lW","bc",function(){return Z.U(4)})
u($,"m2","be",function(){return Z.U(8)})
u($,"m3","bf",function(){return Z.U(16)})
u($,"lX","bV",function(){return Z.U(32)})
u($,"lY","bW",function(){return Z.U(64)})
u($,"lZ","jY",function(){return Z.U(96)})
u($,"m4","bg",function(){return Z.U(128)})
u($,"lV","bb",function(){return Z.U(256)})
u($,"lH","jL",function(){return new V.eh(1e-9)})
u($,"lG","B",function(){return $.jL()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:J.a,AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,ImageData:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGL2RenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,DataView:H.bx,ArrayBufferView:H.bx,Float32Array:H.bw,Float64Array:H.bw,Int16Array:H.f2,Int32Array:H.f3,Int8Array:H.f4,Uint16Array:H.f5,Uint32Array:H.f6,Uint8ClampedArray:H.cl,CanvasPixelArray:H.cl,Uint8Array:H.f7,HTMLAudioElement:W.l,HTMLBRElement:W.l,HTMLBaseElement:W.l,HTMLButtonElement:W.l,HTMLContentElement:W.l,HTMLDListElement:W.l,HTMLDataElement:W.l,HTMLDataListElement:W.l,HTMLDetailsElement:W.l,HTMLDialogElement:W.l,HTMLEmbedElement:W.l,HTMLFieldSetElement:W.l,HTMLHRElement:W.l,HTMLHeadElement:W.l,HTMLHeadingElement:W.l,HTMLHtmlElement:W.l,HTMLIFrameElement:W.l,HTMLImageElement:W.l,HTMLInputElement:W.l,HTMLLIElement:W.l,HTMLLabelElement:W.l,HTMLLegendElement:W.l,HTMLLinkElement:W.l,HTMLMapElement:W.l,HTMLMediaElement:W.l,HTMLMenuElement:W.l,HTMLMetaElement:W.l,HTMLMeterElement:W.l,HTMLModElement:W.l,HTMLOListElement:W.l,HTMLObjectElement:W.l,HTMLOptGroupElement:W.l,HTMLOptionElement:W.l,HTMLOutputElement:W.l,HTMLParagraphElement:W.l,HTMLParamElement:W.l,HTMLPictureElement:W.l,HTMLPreElement:W.l,HTMLProgressElement:W.l,HTMLQuoteElement:W.l,HTMLScriptElement:W.l,HTMLShadowElement:W.l,HTMLSlotElement:W.l,HTMLSourceElement:W.l,HTMLSpanElement:W.l,HTMLStyleElement:W.l,HTMLTableCaptionElement:W.l,HTMLTableCellElement:W.l,HTMLTableDataCellElement:W.l,HTMLTableHeaderCellElement:W.l,HTMLTableColElement:W.l,HTMLTextAreaElement:W.l,HTMLTimeElement:W.l,HTMLTitleElement:W.l,HTMLTrackElement:W.l,HTMLUListElement:W.l,HTMLUnknownElement:W.l,HTMLVideoElement:W.l,HTMLDirectoryElement:W.l,HTMLFontElement:W.l,HTMLFrameElement:W.l,HTMLFrameSetElement:W.l,HTMLMarqueeElement:W.l,HTMLElement:W.l,AccessibleNodeList:W.dM,HTMLAnchorElement:W.dN,HTMLAreaElement:W.dO,Blob:W.bY,HTMLBodyElement:W.aT,HTMLCanvasElement:W.aU,CDATASection:W.az,CharacterData:W.az,Comment:W.az,ProcessingInstruction:W.az,Text:W.az,CSSPerspective:W.e0,CSSCharsetRule:W.v,CSSConditionRule:W.v,CSSFontFaceRule:W.v,CSSGroupingRule:W.v,CSSImportRule:W.v,CSSKeyframeRule:W.v,MozCSSKeyframeRule:W.v,WebKitCSSKeyframeRule:W.v,CSSKeyframesRule:W.v,MozCSSKeyframesRule:W.v,WebKitCSSKeyframesRule:W.v,CSSMediaRule:W.v,CSSNamespaceRule:W.v,CSSPageRule:W.v,CSSRule:W.v,CSSStyleRule:W.v,CSSSupportsRule:W.v,CSSViewportRule:W.v,CSSStyleDeclaration:W.bk,MSStyleCSSProperties:W.bk,CSS2Properties:W.bk,CSSImageValue:W.T,CSSKeywordValue:W.T,CSSNumericValue:W.T,CSSPositionValue:W.T,CSSResourceValue:W.T,CSSUnitValue:W.T,CSSURLImageValue:W.T,CSSStyleValue:W.T,CSSMatrixComponent:W.a2,CSSRotation:W.a2,CSSScale:W.a2,CSSSkew:W.a2,CSSTranslation:W.a2,CSSTransformComponent:W.a2,CSSTransformValue:W.e2,CSSUnparsedValue:W.e3,DataTransferItemList:W.e6,HTMLDivElement:W.W,DOMException:W.e9,ClientRectList:W.c4,DOMRectList:W.c4,DOMRectReadOnly:W.c5,DOMStringList:W.ea,DOMTokenList:W.eb,Element:W.F,AbortPaymentEvent:W.h,AnimationEvent:W.h,AnimationPlaybackEvent:W.h,ApplicationCacheErrorEvent:W.h,BackgroundFetchClickEvent:W.h,BackgroundFetchEvent:W.h,BackgroundFetchFailEvent:W.h,BackgroundFetchedEvent:W.h,BeforeInstallPromptEvent:W.h,BeforeUnloadEvent:W.h,BlobEvent:W.h,CanMakePaymentEvent:W.h,ClipboardEvent:W.h,CloseEvent:W.h,CustomEvent:W.h,DeviceMotionEvent:W.h,DeviceOrientationEvent:W.h,ErrorEvent:W.h,ExtendableEvent:W.h,ExtendableMessageEvent:W.h,FetchEvent:W.h,FontFaceSetLoadEvent:W.h,ForeignFetchEvent:W.h,GamepadEvent:W.h,HashChangeEvent:W.h,InstallEvent:W.h,MediaEncryptedEvent:W.h,MediaKeyMessageEvent:W.h,MediaQueryListEvent:W.h,MediaStreamEvent:W.h,MediaStreamTrackEvent:W.h,MessageEvent:W.h,MIDIConnectionEvent:W.h,MIDIMessageEvent:W.h,MutationEvent:W.h,NotificationEvent:W.h,PageTransitionEvent:W.h,PaymentRequestEvent:W.h,PaymentRequestUpdateEvent:W.h,PopStateEvent:W.h,PresentationConnectionAvailableEvent:W.h,PresentationConnectionCloseEvent:W.h,ProgressEvent:W.h,PromiseRejectionEvent:W.h,PushEvent:W.h,RTCDataChannelEvent:W.h,RTCDTMFToneChangeEvent:W.h,RTCPeerConnectionIceEvent:W.h,RTCTrackEvent:W.h,SecurityPolicyViolationEvent:W.h,SensorErrorEvent:W.h,SpeechRecognitionError:W.h,SpeechRecognitionEvent:W.h,SpeechSynthesisEvent:W.h,StorageEvent:W.h,SyncEvent:W.h,TrackEvent:W.h,TransitionEvent:W.h,WebKitTransitionEvent:W.h,VRDeviceEvent:W.h,VRDisplayEvent:W.h,VRSessionEvent:W.h,MojoInterfaceRequestEvent:W.h,ResourceProgressEvent:W.h,USBConnectionEvent:W.h,IDBVersionChangeEvent:W.h,AudioProcessingEvent:W.h,OfflineAudioCompletionEvent:W.h,WebGLContextEvent:W.h,Event:W.h,InputEvent:W.h,AbsoluteOrientationSensor:W.d,Accelerometer:W.d,AccessibleNode:W.d,AmbientLightSensor:W.d,Animation:W.d,ApplicationCache:W.d,DOMApplicationCache:W.d,OfflineResourceList:W.d,BackgroundFetchRegistration:W.d,BatteryManager:W.d,BroadcastChannel:W.d,CanvasCaptureMediaStreamTrack:W.d,DedicatedWorkerGlobalScope:W.d,EventSource:W.d,FileReader:W.d,FontFaceSet:W.d,Gyroscope:W.d,XMLHttpRequest:W.d,XMLHttpRequestEventTarget:W.d,XMLHttpRequestUpload:W.d,LinearAccelerationSensor:W.d,Magnetometer:W.d,MediaDevices:W.d,MediaKeySession:W.d,MediaQueryList:W.d,MediaRecorder:W.d,MediaSource:W.d,MediaStream:W.d,MediaStreamTrack:W.d,MessagePort:W.d,MIDIAccess:W.d,MIDIInput:W.d,MIDIOutput:W.d,MIDIPort:W.d,NetworkInformation:W.d,Notification:W.d,OffscreenCanvas:W.d,OrientationSensor:W.d,PaymentRequest:W.d,Performance:W.d,PermissionStatus:W.d,PresentationAvailability:W.d,PresentationConnection:W.d,PresentationConnectionList:W.d,PresentationRequest:W.d,RelativeOrientationSensor:W.d,RemotePlayback:W.d,RTCDataChannel:W.d,DataChannel:W.d,RTCDTMFSender:W.d,RTCPeerConnection:W.d,webkitRTCPeerConnection:W.d,mozRTCPeerConnection:W.d,ScreenOrientation:W.d,Sensor:W.d,ServiceWorker:W.d,ServiceWorkerContainer:W.d,ServiceWorkerGlobalScope:W.d,ServiceWorkerRegistration:W.d,SharedWorker:W.d,SharedWorkerGlobalScope:W.d,SpeechRecognition:W.d,SpeechSynthesis:W.d,SpeechSynthesisUtterance:W.d,VR:W.d,VRDevice:W.d,VRDisplay:W.d,VRSession:W.d,VisualViewport:W.d,WebSocket:W.d,Worker:W.d,WorkerGlobalScope:W.d,WorkerPerformance:W.d,BluetoothDevice:W.d,BluetoothRemoteGATTCharacteristic:W.d,Clipboard:W.d,MojoInterfaceInterceptor:W.d,USB:W.d,IDBDatabase:W.d,IDBOpenDBRequest:W.d,IDBVersionChangeRequest:W.d,IDBRequest:W.d,IDBTransaction:W.d,AnalyserNode:W.d,RealtimeAnalyserNode:W.d,AudioBufferSourceNode:W.d,AudioDestinationNode:W.d,AudioNode:W.d,AudioScheduledSourceNode:W.d,AudioWorkletNode:W.d,BiquadFilterNode:W.d,ChannelMergerNode:W.d,AudioChannelMerger:W.d,ChannelSplitterNode:W.d,AudioChannelSplitter:W.d,ConstantSourceNode:W.d,ConvolverNode:W.d,DelayNode:W.d,DynamicsCompressorNode:W.d,GainNode:W.d,AudioGainNode:W.d,IIRFilterNode:W.d,MediaElementAudioSourceNode:W.d,MediaStreamAudioDestinationNode:W.d,MediaStreamAudioSourceNode:W.d,OscillatorNode:W.d,Oscillator:W.d,PannerNode:W.d,AudioPannerNode:W.d,webkitAudioPannerNode:W.d,ScriptProcessorNode:W.d,JavaScriptAudioNode:W.d,StereoPannerNode:W.d,WaveShaperNode:W.d,EventTarget:W.d,File:W.ah,FileList:W.em,FileWriter:W.en,HTMLFormElement:W.er,Gamepad:W.ai,History:W.ex,HTMLCollection:W.bo,HTMLFormControlsCollection:W.bo,HTMLOptionsCollection:W.bo,KeyboardEvent:W.aZ,Location:W.eQ,MediaList:W.eW,MIDIInputMap:W.eX,MIDIOutputMap:W.eZ,MimeType:W.ak,MimeTypeArray:W.f0,PointerEvent:W.a5,MouseEvent:W.a5,DragEvent:W.a5,Document:W.t,DocumentFragment:W.t,HTMLDocument:W.t,ShadowRoot:W.t,XMLDocument:W.t,Attr:W.t,DocumentType:W.t,Node:W.t,NodeList:W.cm,RadioNodeList:W.cm,Plugin:W.am,PluginArray:W.fh,RTCStatsReport:W.fo,HTMLSelectElement:W.fr,SourceBuffer:W.ap,SourceBufferList:W.fC,SpeechGrammar:W.aq,SpeechGrammarList:W.fD,SpeechRecognitionResult:W.ar,Storage:W.fG,CSSStyleSheet:W.a8,StyleSheet:W.a8,HTMLTableElement:W.cA,HTMLTableRowElement:W.fK,HTMLTableSectionElement:W.fL,HTMLTemplateElement:W.bC,TextTrack:W.as,TextTrackCue:W.a9,VTTCue:W.a9,TextTrackCueList:W.fO,TextTrackList:W.fP,TimeRanges:W.fR,Touch:W.at,TouchEvent:W.b3,TouchList:W.fV,TrackDefaultList:W.fW,CompositionEvent:W.aN,FocusEvent:W.aN,TextEvent:W.aN,UIEvent:W.aN,URL:W.hh,VideoTrackList:W.hv,WheelEvent:W.aO,Window:W.bH,DOMWindow:W.bH,CSSRuleList:W.hE,ClientRect:W.cP,DOMRect:W.cP,GamepadList:W.hI,NamedNodeMap:W.d7,MozNamedAttrMap:W.d7,SpeechRecognitionResultList:W.hU,StyleSheetList:W.hV,SVGLength:P.aG,SVGLengthList:P.eL,SVGNumber:P.aK,SVGNumberList:P.fc,SVGPointList:P.fi,SVGScriptElement:P.bA,SVGStringList:P.fJ,SVGAElement:P.i,SVGAnimateElement:P.i,SVGAnimateMotionElement:P.i,SVGAnimateTransformElement:P.i,SVGAnimationElement:P.i,SVGCircleElement:P.i,SVGClipPathElement:P.i,SVGDefsElement:P.i,SVGDescElement:P.i,SVGDiscardElement:P.i,SVGEllipseElement:P.i,SVGFEBlendElement:P.i,SVGFEColorMatrixElement:P.i,SVGFEComponentTransferElement:P.i,SVGFECompositeElement:P.i,SVGFEConvolveMatrixElement:P.i,SVGFEDiffuseLightingElement:P.i,SVGFEDisplacementMapElement:P.i,SVGFEDistantLightElement:P.i,SVGFEFloodElement:P.i,SVGFEFuncAElement:P.i,SVGFEFuncBElement:P.i,SVGFEFuncGElement:P.i,SVGFEFuncRElement:P.i,SVGFEGaussianBlurElement:P.i,SVGFEImageElement:P.i,SVGFEMergeElement:P.i,SVGFEMergeNodeElement:P.i,SVGFEMorphologyElement:P.i,SVGFEOffsetElement:P.i,SVGFEPointLightElement:P.i,SVGFESpecularLightingElement:P.i,SVGFESpotLightElement:P.i,SVGFETileElement:P.i,SVGFETurbulenceElement:P.i,SVGFilterElement:P.i,SVGForeignObjectElement:P.i,SVGGElement:P.i,SVGGeometryElement:P.i,SVGGraphicsElement:P.i,SVGImageElement:P.i,SVGLineElement:P.i,SVGLinearGradientElement:P.i,SVGMarkerElement:P.i,SVGMaskElement:P.i,SVGMetadataElement:P.i,SVGPathElement:P.i,SVGPatternElement:P.i,SVGPolygonElement:P.i,SVGPolylineElement:P.i,SVGRadialGradientElement:P.i,SVGRectElement:P.i,SVGSetElement:P.i,SVGStopElement:P.i,SVGStyleElement:P.i,SVGSVGElement:P.i,SVGSwitchElement:P.i,SVGSymbolElement:P.i,SVGTSpanElement:P.i,SVGTextContentElement:P.i,SVGTextElement:P.i,SVGTextPathElement:P.i,SVGTextPositioningElement:P.i,SVGTitleElement:P.i,SVGUseElement:P.i,SVGViewElement:P.i,SVGGradientElement:P.i,SVGComponentTransferFunctionElement:P.i,SVGFEDropShadowElement:P.i,SVGMPathElement:P.i,SVGElement:P.i,SVGTransform:P.aM,SVGTransformList:P.fX,AudioBuffer:P.dQ,AudioParamMap:P.dR,AudioTrackList:P.dT,AudioContext:P.aS,webkitAudioContext:P.aS,BaseAudioContext:P.aS,OfflineAudioContext:P.fd,SQLResultSetRowList:P.fE})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,ImageData:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MessagePort:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,KeyboardEvent:true,Location:true,MediaList:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,SQLResultSetRowList:true})
H.cj.$nativeSuperclassTag="ArrayBufferView"
H.bJ.$nativeSuperclassTag="ArrayBufferView"
H.bK.$nativeSuperclassTag="ArrayBufferView"
H.bw.$nativeSuperclassTag="ArrayBufferView"
H.bL.$nativeSuperclassTag="ArrayBufferView"
H.bM.$nativeSuperclassTag="ArrayBufferView"
H.ck.$nativeSuperclassTag="ArrayBufferView"
W.bN.$nativeSuperclassTag="EventTarget"
W.bO.$nativeSuperclassTag="EventTarget"
W.bP.$nativeSuperclassTag="EventTarget"
W.bQ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.jG,[])
else R.jG([])})})()
//# sourceMappingURL=test.dart.js.map
