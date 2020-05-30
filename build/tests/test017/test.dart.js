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
a[c]=function(){a[c]=function(){H.pk(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.la"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.la"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.la(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kS:function kS(){},
kf:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nk:function(a,b,c,d){if(!!J.R(a).$it)return new H.fu(a,b,[c,d])
return new H.cb(a,b,[c,d])},
fR:function(){return new P.cn("No element")},
n9:function(){return new P.cn("Too many elements")},
nH:function(a,b){var u=J.ak(a)
if(typeof u!=="number")return u.K()
H.dA(a,0,u-1,b)},
dA:function(a,b,c,d){if(c-b<=32)H.nG(a,b,c,d)
else H.nF(a,b,c,d)},
nG:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.br(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a5()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nF:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a7(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a7(a4+a5,2),f=g-j,e=g+j,d=J.br(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=b
b=c
c=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=a0
a0=u}a2=a6.$2(c,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=c
c=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(c,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a0
a0=c
c=u}a2=a6.$2(a,a0)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a0
a0=a
a=u}a2=a6.$2(b,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=b
b=u}a2=a6.$2(b,a)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a
a=b
b=u}a2=a6.$2(a0,a1)
if(typeof a2!=="number")return a2.a5()
if(a2>0){u=a1
a1=a0
a0=u}d.m(a3,i,c)
d.m(a3,g,a)
d.m(a3,h,a1)
d.m(a3,f,d.h(a3,a4))
d.m(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.A(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.P()
if(p<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a5()
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
if(typeof l!=="number")return l.P()
if(l<0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a5()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a5()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
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
H.dA(a3,a4,t-2,a6)
H.dA(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.A(a6.$2(d.h(a3,t),b),0);)++t
for(;J.A(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.m(a3,r,d.h(a3,t))
d.m(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.P()
o=s-1
if(p<0){d.m(a3,r,d.h(a3,t))
n=t+1
d.m(a3,t,d.h(a3,s))
d.m(a3,s,q)
t=n}else{d.m(a3,r,d.h(a3,s))
d.m(a3,s,q)}s=o
break}}H.dA(a3,t,s,a6)}else H.dA(a3,t,s,a6)},
p:function p(a){this.a=a},
t:function t(){},
dh:function dh(){},
bj:function bj(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cb:function cb(a,b,c){this.a=a
this.b=b
this.$ti=c},
fu:function fu(a,b,c){this.a=a
this.b=b
this.$ti=c},
h9:function h9(a,b){this.a=null
this.b=a
this.c=b},
ha:function ha(a,b,c){this.a=a
this.b=b
this.$ti=c},
cy:function cy(a,b,c){this.a=a
this.b=b
this.$ti=c},
je:function je(a,b){this.a=a
this.b=b},
d8:function d8(){},
iP:function iP(){},
dP:function dP(){},
n2:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cQ:function(a){var u,t=H.pm(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
p3:function(a){return v.types[a]},
mn:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.c(H.ai(a))
return u},
ck:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nx:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
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
cl:function(a){return H.no(a)+H.ma(H.cP(a),0,null)},
no:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.Q||!!n.$ibJ){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cQ(t.length>1&&C.a.G(t,0)===36?C.a.ab(t,1):t)},
np:function(){if(!!self.location)return self.location.href
return},
lH:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
ny:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aW(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ai(s))}return H.lH(r)},
lI:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ai(s))
if(s<0)throw H.c(H.ai(s))
if(s>65535)return H.ny(a)}return H.lH(a)},
nz:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.iD()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bE:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aW(u,10))>>>0,56320|u&1023)}}throw H.c(P.a0(a,0,1114111,null,null))},
bD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nw:function(a){var u=H.bD(a).getFullYear()+0
return u},
nu:function(a){var u=H.bD(a).getMonth()+1
return u},
nq:function(a){var u=H.bD(a).getDate()+0
return u},
nr:function(a){var u=H.bD(a).getHours()+0
return u},
nt:function(a){var u=H.bD(a).getMinutes()+0
return u},
nv:function(a){var u=H.bD(a).getSeconds()+0
return u},
ns:function(a){var u=H.bD(a).getMilliseconds()+0
return u},
u:function(a){throw H.c(H.ai(a))},
d:function(a,b){if(a==null)J.ak(a)
throw H.c(H.bT(a,b))},
bT:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ap(!0,b,s,null)
u=J.ak(a)
if(!(b<0)){if(typeof u!=="number")return H.u(u)
t=b>=u}else t=!0
if(t)return P.O(b,a,s,null,u)
return P.du(b,s)},
oY:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bF(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bF(a,c,!0,b,"end",u)
return new P.ap(!0,b,"end",null)},
ai:function(a){return new P.ap(!0,a,null,null)},
oT:function(a){if(typeof a!=="number")throw H.c(H.ai(a))
return a},
c:function(a){var u
if(a==null)a=new P.dr()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mt})
u.name=""}else u.toString=H.mt
return u},
mt:function(){return J.a7(this.dartException)},
o:function(a){throw H.c(a)},
n:function(a){throw H.c(P.aT(a))},
aM:function(a){var u,t,s,r,q,p
a=H.mr(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.h])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.iC(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
iD:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
lR:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lD:function(a,b){return new H.hF(a,b==null?null:b.method)},
kT:function(a,b){var u=b==null,t=u?null:b.method
return new H.fW(a,t,u?null:b.receiver)},
aj:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kD(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aW(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kT(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lD(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mw()
q=$.mx()
p=$.my()
o=$.mz()
n=$.mC()
m=$.mD()
l=$.mB()
$.mA()
k=$.mF()
j=$.mE()
i=r.an(u)
if(i!=null)return f.$1(H.kT(u,i))
else{i=q.an(u)
if(i!=null){i.method="call"
return f.$1(H.kT(u,i))}else{i=p.an(u)
if(i==null){i=o.an(u)
if(i==null){i=n.an(u)
if(i==null){i=m.an(u)
if(i==null){i=l.an(u)
if(i==null){i=o.an(u)
if(i==null){i=k.an(u)
if(i==null){i=j.an(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lD(u,i))}}return f.$1(new H.iO(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dC()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ap(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dC()
return a},
ld:function(a){var u
if(a==null)return new H.eu(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eu(a)},
p1:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p9:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bS:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p9)
a.$identity=u
return u},
n1:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ie().constructor.prototype):Object.create(new H.bY(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.ax
if(typeof t!=="number")return t.B()
$.ax=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lt(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mY(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lt(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mY:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.p3,a)
if(typeof a=="function")if(b)return a
else{u=c?H.ls:H.kG
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mZ:function(a,b,c,d){var u=H.kG
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lt:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.n0(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mZ(t,!r,u,b)
if(t===0){r=$.ax
if(typeof r!=="number")return r.B()
$.ax=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f8("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.ax
if(typeof r!=="number")return r.B()
$.ax=r+1
o+=r
r="return function("+o+"){return this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f8("self"):q)+"."+H.e(u)+"("+o+");}")()},
n_:function(a,b,c,d){var u=H.kG,t=H.ls
switch(b?-1:a){case 0:throw H.c(H.nD("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
n0:function(a,b){var u,t,s,r,q,p,o,n=$.bZ
if(n==null)n=$.bZ=H.f8("self")
u=$.lr
if(u==null)u=$.lr=H.f8("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.n_(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.ax
if(typeof u!=="number")return u.B()
$.ax=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.ax
if(typeof u!=="number")return u.B()
$.ax=u+1
return new Function(n+u+"}")()},
la:function(a,b,c,d,e,f,g){return H.n1(a,b,c,d,!!e,!!f,g)},
kG:function(a){return a.a},
ls:function(a){return a.c},
f8:function(a){var u,t,s,r=new H.bY("self","target","receiver","name"),q=J.kQ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pf:function(a,b){throw H.c(H.mX(a,H.cQ(b.substring(2))))},
j:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.pf(a,b)},
p_:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mX:function(a,b){return new H.f9("CastError: "+P.kN(a)+": type '"+H.e(H.oP(a))+"' is not a subtype of type '"+b+"'")},
oP:function(a){var u,t=J.R(a)
if(!!t.$ic0){u=H.p_(t)
if(u!=null)return H.pg(u)
return"Closure"}return H.cl(a)},
pk:function(a){throw H.c(new P.fm(a))},
nD:function(a){return new H.hY(a)},
ml:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cP:function(a){if(a==null)return
return a.$ti},
pX:function(a,b,c){return H.kA(a["$a"+H.e(c)],H.cP(b))},
p2:function(a,b,c,d){var u=H.kA(a["$a"+H.e(c)],H.cP(b))
return u==null?null:u[d]},
lc:function(a,b,c){var u=H.kA(a["$a"+H.e(b)],H.cP(a))
return u==null?null:u[c]},
aP:function(a,b){var u=H.cP(a)
return u==null?null:u[b]},
pg:function(a){return H.bq(a,null)},
bq:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cQ(a[0].name)+H.ma(a,1,b)
if(typeof a=="function")return H.cQ(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.ok(a,b)
if('futureOr' in a)return"FutureOr<"+H.bq("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
ok:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
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
if(l!=null&&l!==P.a4)p+=" extends "+H.bq(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bq(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bq(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bq(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.p0(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bq(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
ma:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.U("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bq(p,c)}return"<"+u.i(0)+">"},
kA:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pV:function(a,b,c){return a.apply(b,H.kA(J.R(b)["$a"+H.e(c)],H.cP(b)))},
pW:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pc:function(a){var u,t,s,r,q=$.mm.$1(a),p=$.kd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mf.$2(a,q)
if(q!=null){p=$.kd[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kj[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kw(u)
$.kd[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kj[q]=u
return u}if(s==="-"){r=H.kw(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mp(a,u)
if(s==="*")throw H.c(P.iN(q))
if(v.leafTags[q]===true){r=H.kw(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mp(a,u)},
mp:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lf(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kw:function(a){return J.lf(a,!1,null,!!a.$iB)},
pd:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kw(u)
else return J.lf(u,c,null,null)},
p7:function(){if(!0===$.le)return
$.le=!0
H.p8()},
p8:function(){var u,t,s,r,q,p,o,n
$.kd=Object.create(null)
$.kj=Object.create(null)
H.p6()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mq.$1(q)
if(p!=null){o=H.pd(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p6:function(){var u,t,s,r,q,p,o=C.F()
o=H.bR(C.G,H.bR(C.H,H.bR(C.u,H.bR(C.u,H.bR(C.I,H.bR(C.J,H.bR(C.K(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mm=new H.kg(r)
$.mf=new H.kh(q)
$.mq=new H.ki(p)},
bR:function(a,b){return a(b)||b},
nd:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.W("Illegal RegExp pattern ("+String(p)+")",a,null))},
pi:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oZ:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mr:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
li:function(a,b,c){var u=H.pj(a,b,c)
return u},
pj:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mr(b),'g'),H.oZ(c))},
ff:function ff(){},
fg:function fg(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
iC:function iC(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hF:function hF(a,b){this.a=a
this.b=b},
fW:function fW(a,b,c){this.a=a
this.b=b
this.c=c},
iO:function iO(a){this.a=a},
kD:function kD(a){this.a=a},
eu:function eu(a){this.a=a
this.b=null},
c0:function c0(){},
io:function io(){},
ie:function ie(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f9:function f9(a){this.a=a},
hY:function hY(a){this.a=a},
K:function K(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fV:function fV(a){this.a=a},
h_:function h_(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
h0:function h0(a,b){this.a=a
this.$ti=b},
h1:function h1(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kg:function kg(a){this.a=a},
kh:function kh(a){this.a=a},
ki:function ki(a){this.a=a},
fU:function fU(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bP:function(a){return a},
nn:function(a){return new Int8Array(a)},
aN:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bT(b,a))},
oi:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oY(a,b,c))
return b},
cg:function cg(){},
bl:function bl(){},
dl:function dl(){},
ch:function ch(){},
dm:function dm(){},
hx:function hx(){},
hy:function hy(){},
hz:function hz(){},
hA:function hA(){},
hB:function hB(){},
dn:function dn(){},
ci:function ci(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
cF:function cF(){},
p0:function(a){return J.lz(a?Object.keys(a):[],null)},
pm:function(a){return v.mangledGlobalNames[a]},
pe:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lf:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ke:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.le==null){H.p7()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iN("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lj()]
if(r!=null)return r
r=H.pc(a)
if(r!=null)return r
if(typeof a=="function")return C.S
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.lj(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
na:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kF(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.a0(a,0,4294967295,"length",null))
return J.lz(new Array(a),b)},
lz:function(a,b){return J.kQ(H.b(a,[b]))},
kQ:function(a){a.fixed$length=Array
return a},
nb:function(a,b){return J.cT(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dc.prototype
return J.db.prototype}if(typeof a=="string")return J.bh.prototype
if(a==null)return J.dd.prototype
if(typeof a=="boolean")return J.fT.prototype
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.a4)return a
return J.ke(a)},
br:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.a4)return a
return J.ke(a)},
eT:function(a){if(a==null)return a
if(a.constructor==Array)return J.bg.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.a4)return a
return J.ke(a)},
mk:function(a){if(typeof a=="number")return J.c8.prototype
if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.a4))return J.bJ.prototype
return a},
cO:function(a){if(typeof a=="string")return J.bh.prototype
if(a==null)return a
if(!(a instanceof P.a4))return J.bJ.prototype
return a},
bV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bi.prototype
return a}if(a instanceof P.a4)return a
return J.ke(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).t(a,b)},
ll:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mk(a).u(a,b)},
bX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mn(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.br(a).h(a,b)},
kE:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mn(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eT(a).m(a,b,c)},
mO:function(a,b){return J.cO(a).G(a,b)},
mP:function(a,b,c){return J.bV(a).ha(a,b,c)},
mQ:function(a,b,c,d){return J.bV(a).ht(a,b,c,d)},
mR:function(a,b){return J.cO(a).Z(a,b)},
cT:function(a,b){return J.mk(a).aZ(a,b)},
eW:function(a,b){return J.eT(a).L(a,b)},
mS:function(a,b,c,d){return J.bV(a).hQ(a,b,c,d)},
lm:function(a,b){return J.eT(a).H(a,b)},
mT:function(a){return J.bV(a).ghy(a)},
ln:function(a){return J.bV(a).gcc(a)},
cU:function(a){return J.R(a).gJ(a)},
aQ:function(a){return J.eT(a).gS(a)},
ak:function(a){return J.br(a).gl(a)},
lo:function(a){return J.eT(a).im(a)},
mU:function(a,b){return J.bV(a).iq(a,b)},
mV:function(a,b,c){return J.cO(a).v(a,b,c)},
mW:function(a){return J.cO(a).iy(a)},
a7:function(a){return J.R(a).i(a)},
a:function a(){},
fT:function fT(){},
dd:function dd(){},
de:function de(){},
hJ:function hJ(){},
bJ:function bJ(){},
bi:function bi(){},
bg:function bg(a){this.$ti=a},
kR:function kR(a){this.$ti=a},
a8:function a8(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c8:function c8(){},
dc:function dc(){},
db:function db(){},
bh:function bh(){}},P={
nT:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oQ()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bS(new P.jg(s),1)).observe(u,{childList:true})
return new P.jf(s,u,t)}else if(self.setImmediate!=null)return P.oR()
return P.oS()},
nU:function(a){self.scheduleImmediate(H.bS(new P.jh(a),0))},
nV:function(a){self.setImmediate(H.bS(new P.ji(a),0))},
nW:function(a){P.kY(C.n,a)},
kY:function(a,b){var u=C.c.a7(a.a,1000)
return P.o2(u<0?0:u,b)},
lQ:function(a,b){var u=C.c.a7(a.a,1000)
return P.o3(u<0?0:u,b)},
o2:function(a,b){var u=new P.eA()
u.eO(a,b)
return u},
o3:function(a,b){var u=new P.eA()
u.eP(a,b)
return u},
pS:function(a){return new P.bL(a,1)},
nZ:function(){return C.Z},
o_:function(a){return new P.bL(a,3)},
on:function(a,b){return new P.jL(a,[b])},
oJ:function(){var u,t
for(;u=$.bQ,u!=null;){$.cN=null
t=u.b
$.bQ=t
if(t==null)$.cM=null
u.a.$0()}},
oO:function(){$.l8=!0
try{P.oJ()}finally{$.cN=null
$.l8=!1
if($.bQ!=null)$.lk().$1(P.mg())}},
oM:function(a){var u=new P.dX(a)
if($.bQ==null){$.bQ=$.cM=u
if(!$.l8)$.lk().$1(P.mg())}else $.cM=$.cM.b=u},
oN:function(a){var u,t,s=$.bQ
if(s==null){P.oM(a)
$.cN=$.cM
return}u=new P.dX(a)
t=$.cN
if(t==null){u.b=s
$.bQ=$.cN=u}else{u.b=t.b
$.cN=t.b=u
if(u.b==null)$.cM=u}},
lP:function(a,b){var u=$.av
if(u===C.f)return P.kY(a,b)
return P.kY(a,u.hz(b))},
nK:function(a,b){var u=$.av
if(u===C.f)return P.lQ(a,b)
return P.lQ(a,u.dF(b,P.dJ))},
mb:function(a,b,c,d,e){var u={}
u.a=d
P.oN(new P.k6(u,e))},
oK:function(a,b,c,d){var u,t=$.av
if(t===c)return d.$0()
$.av=c
u=t
try{t=d.$0()
return t}finally{$.av=u}},
oL:function(a,b,c,d,e){var u,t=$.av
if(t===c)return d.$1(e)
$.av=c
u=t
try{t=d.$1(e)
return t}finally{$.av=u}},
jg:function jg(a){this.a=a},
jf:function jf(a,b,c){this.a=a
this.b=b
this.c=c},
jh:function jh(a){this.a=a},
ji:function ji(a){this.a=a},
eA:function eA(){this.c=0},
jP:function jP(a,b){this.a=a
this.b=b},
jO:function jO(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=b},
bM:function bM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jL:function jL(a,b){this.a=a
this.$ti=b},
dX:function dX(a){this.a=a
this.b=null},
dE:function dE(){},
ii:function ii(){},
dJ:function dJ(){},
jY:function jY(){},
k6:function k6(a,b){this.a=a
this.b=b},
jw:function jw(){},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(a,b,c){this.a=a
this.b=b
this.c=c},
nf:function(a,b){return new H.K([a,b])},
kU:function(a,b){return new H.K([a,b])},
nh:function(a){return H.p1(a,new H.K([null,null]))},
ca:function(a){return new P.jt([a])},
l3:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o1:function(a,b){var u=new P.eb(a,b)
u.c=a.e
return u},
n8:function(a,b,c){var u,t
if(P.l9(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ad.push(a)
try{P.om(a,u)}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}t=P.lN(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kP:function(a,b,c){var u,t
if(P.l9(a))return b+"..."+c
u=new P.U(b)
$.ad.push(a)
try{t=u
t.a=P.lN(t.a,a,", ")}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l9:function(a){var u,t
for(u=$.ad.length,t=0;t<u;++t)if(a===$.ad[t])return!0
return!1},
om:function(a,b){var u,t,s,r,q,p,o,n=a.gS(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.e(n.gF(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gF(n);++l
if(!n.w()){if(l<=4){b.push(H.e(r))
return}t=H.e(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gF(n);++l
for(;n.w();r=q,q=p){p=n.gF(n);++l
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
ng:function(a,b,c){var u=P.nf(b,c)
a.H(0,new P.h2(u))
return u},
lA:function(a,b){var u,t,s=P.ca(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)s.n(0,a[t])
return s},
kW:function(a){var u,t={}
if(P.l9(a))return"{...}"
u=new P.U("")
try{$.ad.push(a)
u.a+="{"
t.a=!0
J.lm(a,new P.h7(t,u))
u.a+="}"}finally{if(0>=$.ad.length)return H.d($.ad,-1)
$.ad.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jt:function jt(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
eb:function eb(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fQ:function fQ(){},
h2:function h2(a){this.a=a},
h3:function h3(){},
y:function y(){},
h6:function h6(){},
h7:function h7(a,b){this.a=a
this.b=b},
a3:function a3(){},
jQ:function jQ(){},
h8:function h8(){},
dQ:function dQ(a,b){this.a=a
this.$ti=b},
jA:function jA(){},
ec:function ec(){},
eG:function eG(){},
nN:function(a,b,c,d){if(b instanceof Uint8Array)return P.nO(!1,b,c,d)
return},
nO:function(a,b,c,d){var u,t,s=$.mG()
if(s==null)return
u=0===c
if(u&&!0)return P.l0(s,b)
t=b.length
d=P.b2(c,d,t)
if(u&&d===t)return P.l0(s,b)
return P.l0(s,b.subarray(c,d))},
l0:function(a,b){if(P.nQ(b))return
return P.nR(a,b)},
nR:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aj(t)}return},
nQ:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nP:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aj(t)}return},
md:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.u(c)
u=J.br(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ae()
if((s&127)!==s)return t-b}return c-b},
lq:function(a,b,c,d,e,f){if(C.c.bn(f,4)!==0)throw H.c(P.W("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.W("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.W("Invalid base64 padding, more than two '=' characters",a,b))},
f5:function f5(){},
f6:function f6(){},
fb:function fb(){},
fh:function fh(){},
fw:function fw(){},
fN:function fN(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fM:function fM(a){this.a=a},
iX:function iX(){},
iZ:function iZ(){},
jW:function jW(a){this.b=0
this.c=a},
iY:function iY(a){this.a=a},
jV:function jV(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eU:function(a,b,c){var u=H.nx(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.W(a,null,null))},
n6:function(a){if(a instanceof H.c0)return a.i(0)
return"Instance of '"+H.e(H.cl(a))+"'"},
ni:function(a,b,c){var u,t,s=J.na(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kV:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aQ(a);u.w();)t.push(u.gF(u))
if(b)return t
return J.kQ(t)},
co:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.b2(b,c,u)
if(b<=0){if(typeof c!=="number")return c.P()
t=c<u}else t=!0
return H.lI(t?C.b.ez(a,b,c):a)}if(!!J.R(a).$ici)return H.nz(a,b,P.b2(b,c,a.length))
return P.nI(a,b,c)},
nI:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.a0(b,0,J.ak(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.a0(c,b,J.ak(a),q,q))
t=J.aQ(a)
for(s=0;s<b;++s)if(!t.w())throw H.c(P.a0(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gF(t))
else for(s=b;s<c;++s){if(!t.w())throw H.c(P.a0(c,b,s,q,q))
r.push(t.gF(t))}return H.lI(r)},
nB:function(a){return new H.fU(a,H.nd(a,!1,!0,!1,!1,!1))},
lN:function(a,b,c){var u=J.aQ(b)
if(!u.w())return a
if(c.length===0){do a+=H.e(u.gF(u))
while(u.w())}else{a+=H.e(u.gF(u))
for(;u.w();)a=a+c+H.e(u.gF(u))}return a},
lT:function(){var u=H.np()
if(u!=null)return P.nM(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eH:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mM().b
if(typeof b!=="string")H.o(H.ai(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghP().ce(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bE(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n3:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n4:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d3:function(a){if(a>=10)return""+a
return"0"+a},
lv:function(a){return new P.bd(1000*a)},
kN:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n6(a)},
cV:function(a){return new P.ap(!1,null,null,a)},
kF:function(a,b,c){return new P.ap(!0,a,b,c)},
du:function(a,b){return new P.bF(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bF(b,c,!0,a,d,"Invalid value")},
b2:function(a,b,c){var u
if(typeof a!=="number")return H.u(a)
if(0<=a){if(typeof c!=="number")return H.u(c)
u=a>c}else u=!0
if(u)throw H.c(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.u(c)
u=b>c}else u=!0
if(u)throw H.c(P.a0(b,a,c,"end",null))
return b}return c},
lJ:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.a0(a,0,null,b,null))},
O:function(a,b,c,d,e){var u=e==null?J.ak(b):e
return new P.fP(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iQ(a)},
iN:function(a){return new P.iM(a)},
lM:function(a){return new P.cn(a)},
aT:function(a){return new P.fe(a)},
m:function(a){return new P.e4(a)},
W:function(a,b,c){return new P.fG(a,b,c)},
nj:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
lh:function(a){H.pe(a)},
nM:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.G(a,4)^58)*3|C.a.G(a,0)^100|C.a.G(a,1)^97|C.a.G(a,2)^116|C.a.G(a,3)^97)>>>0
if(u===0)return P.lS(e<e?C.a.v(a,0,e):a,5,f).gep()
else if(u===32)return P.lS(C.a.v(a,5,e),0,f).gep()}t=new Array(8)
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
if(P.mc(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iC()
if(r>=0)if(P.mc(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.B()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.P()
if(typeof n!=="number")return H.u(n)
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.aa(a,"..",o)))j=n>o+2&&C.a.aa(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.aa(a,"file",0)){if(q<=0){if(!C.a.aa(a,"/",o)){i="file:///"
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
a=C.a.b1(a,o,n,"/");++e
n=h}k="file"}else if(C.a.aa(a,"http",0)){if(t&&p+3===o&&C.a.aa(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.b1(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.aa(a,"https",0)){if(t&&p+4===o&&C.a.aa(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.b1(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jD(a,r,q,p,o,n,m,k)}return P.o4(a,0,e,r,q,p,o,n,m,k)},
lV:function(a){var u=P.h
return C.b.hW(H.b(a.split("&"),[u]),P.kU(u,u),new P.iV(C.e))},
nL:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iS(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Z(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eU(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eU(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a5()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iT(a),d=new P.iU(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Z(a,t)
if(p===58){if(t===b){++t
if(C.a.Z(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gay(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nL(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.aW(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
o4:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oc(a,b,d)
else{if(d===b)P.bO(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.od(a,u,e-1):""
s=P.o9(a,e,f,!1)
if(typeof f!=="number")return f.B()
r=f+1
if(typeof g!=="number")return H.u(g)
q=r<g?P.ob(P.eU(C.a.v(a,r,g),new P.jR(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oa(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.l5(a,h+1,i,n):n
return new P.bN(j,t,s,q,p,o,i<c?P.o8(a,i+1,c):n)},
m4:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bO:function(a,b,c){throw H.c(P.W(c,a,b))},
ob:function(a,b){if(a!=null&&a===P.m4(b))return
return a},
o9:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Z(a,b)===91){if(typeof c!=="number")return c.K()
u=c-1
if(C.a.Z(a,u)!==93)P.bO(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.o6(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.m9(a,C.a.aa(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lU(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.u(c)
p=b
for(;p<c;++p)if(C.a.Z(a,p)===58){s=C.a.bB(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m9(a,C.a.aa(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lU(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.of(a,b,c)},
o6:function(a,b,c){var u,t=C.a.bB(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.u(c)
u=t<c}else u=!1
return u?t:c},
m9:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.U(d):null
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Z(a,u)
if(r===37){q=P.l6(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.U("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.bO(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.U("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Z(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.U("")
l.a+=C.a.v(a,t,u)
l.a+=P.l4(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
of:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.u(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Z(a,u)
if(q===37){p=P.l6(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.U("")
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
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.U("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bO(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Z(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.U("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l4(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oc:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m6(C.a.G(a,b)))P.bO(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.G(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bO(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.o5(t?a.toLowerCase():a)},
o5:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
od:function(a,b,c){return P.cK(a,b,c,C.V,!1)},
oa:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cK(a,b,c,C.z,!0):C.j.iT(d,new P.jS(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a6(u,"/"))u="/"+u
return P.oe(u,e,f)},
oe:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a6(a,"/"))return P.og(a,!u||c)
return P.oh(a)},
l5:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cV("Both query and queryParameters specified"))
return P.cK(a,b,c,C.l,!0)}if(d==null)return
u=new P.U("")
t.a=""
d.H(0,new P.jT(new P.jU(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o8:function(a,b,c){return P.cK(a,b,c,C.l,!0)},
l6:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Z(a,b+1)
t=C.a.Z(a,p)
s=H.kf(u)
r=H.kf(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aW(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bE(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
l4:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
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
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.hl(a,6*r)&63|s
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
q+=3}}return P.co(t,0,null)},
cK:function(a,b,c,d,e){var u=P.m8(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
m8:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.u(c)
if(!(o<c))break
c$0:{u=C.a.Z(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.l6(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bO(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Z(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.l4(u)}}if(m==null)m=new P.U("")
m.a+=C.a.v(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.u(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m7:function(a){if(C.a.a6(a,"."))return!0
return C.a.e5(a,"/.")!==-1},
oh:function(a){var u,t,s,r,q,p,o
if(!P.m7(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.A(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
og:function(a,b){var u,t,s,r,q,p
if(!P.m7(a))return!b?P.m5(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gay(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gay(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m5(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m5:function(a){var u,t,s,r=a.length
if(r>=2&&P.m6(J.mO(a,0)))for(u=1;u<r;++u){t=C.a.G(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.ab(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o7:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.G(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cV("Invalid URL encoding"))}}return u},
l7:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.G(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.p(C.a.v(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.G(a,q)
if(t>127)throw H.c(P.cV("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cV("Truncated URI"))
r.push(P.o7(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iY(!1).ce(r)},
m6:function(a){var u=a|32
return 97<=u&&u<=122},
lS:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.G(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.W(m,a,t))}}if(s<0&&t>b)throw H.c(P.W(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.G(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gay(l)
if(r!==44||t!==p+7||!C.a.aa(a,"base64",p+1))throw H.c(P.W("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.E.i4(0,a,o,u)
else{n=P.m8(a,o,u,C.l,!0)
if(n!=null)a=C.a.b1(a,o,u,n)}return new P.iR(a,l,c)},
oj:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.nj(22,new P.k1(),P.bH),n=new P.k0(o),m=new P.k2(),l=new P.k3(),k=n.$2(0,225)
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
mc:function(a,b,c,d,e){var u,t,s,r,q,p=$.mN()
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
aO:function aO(){},
ag:function ag(a,b){this.a=a
this.b=b},
M:function M(){},
bd:function bd(a){this.a=a},
fs:function fs(){},
ft:function ft(){},
by:function by(){},
dr:function dr(){},
ap:function ap(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bF:function bF(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
fP:function fP(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iQ:function iQ(a){this.a=a},
iM:function iM(a){this.a=a},
cn:function cn(a){this.a=a},
fe:function fe(a){this.a=a},
hI:function hI(){},
dC:function dC(){},
fm:function fm(a){this.a=a},
e4:function e4(a){this.a=a},
fG:function fG(a,b,c){this.a=a
this.b=b
this.c=c},
fI:function fI(){},
w:function w(){},
i:function i(){},
fS:function fS(){},
q:function q(){},
T:function T(){},
bm:function bm(){},
ae:function ae(){},
a4:function a4(){},
h:function h(){},
U:function U(a){this.a=a},
iV:function iV(a){this.a=a},
iS:function iS(a){this.a=a},
iT:function iT(a){this.a=a},
iU:function iU(a,b){this.a=a
this.b=b},
bN:function bN(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
jR:function jR(a,b){this.a=a
this.b=b},
jS:function jS(){},
jU:function jU(a,b){this.a=a
this.b=b},
jT:function jT(a){this.a=a},
iR:function iR(a,b,c){this.a=a
this.b=b
this.c=c},
k1:function k1(){},
k0:function k0(a){this.a=a},
k2:function k2(){},
k3:function k3(){},
jD:function jD(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jm:function jm(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oW:function(a){var u,t=J.R(a)
if(!!t.$iaX){u=t.gdK(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eF(a.data,a.height,a.width)},
oV:function(a){if(a instanceof P.eF)return{data:a.a,height:a.b,width:a.c}
return a},
b7:function(a){var u,t,s,r,q
if(a==null)return
u=P.kU(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oU:function(a){var u={}
a.H(0,new P.k7(u))
return u},
jF:function jF(){},
jH:function jH(a,b){this.a=a
this.b=b},
jI:function jI(a,b){this.a=a
this.b=b},
eF:function eF(a,b,c){this.a=a
this.b=b
this.c=c},
k7:function k7(a){this.a=a},
jG:function jG(a,b){this.a=a
this.b=b},
fC:function fC(a,b){this.a=a
this.b=b},
fD:function fD(){},
fE:function fE(){},
js:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o0:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
jv:function jv(){},
ab:function ab(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aY:function aY(){},
fY:function fY(){},
b1:function b1(){},
hG:function hG(){},
hO:function hO(){},
cm:function cm(){},
ij:function ij(){},
l:function l(){},
b3:function b3(){},
iB:function iB(){},
e9:function e9(){},
ea:function ea(){},
ek:function ek(){},
el:function el(){},
ew:function ew(){},
ex:function ex(){},
eD:function eD(){},
eE:function eE(){},
bH:function bH(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(a){this.a=a},
f3:function f3(){},
bt:function bt(){},
hH:function hH(){},
dY:function dY(){},
dw:function dw(){},
id:function id(){},
es:function es(){},
et:function et(){}},W={
lp:function(){var u=document.createElement("a")
return u},
kI:function(){var u=document.createElement("canvas")
return u},
n5:function(a,b,c){var u=document.body,t=(u&&C.r).am(u,a,b,c)
t.toString
u=new H.cy(new W.a5(t),new W.fv(),[W.E])
return u.gaO(u)},
kL:function(a){return"wheel"},
c2:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bV(a)
t=u.gen(a)
if(typeof t==="string")r=u.gen(a)}catch(s){H.aj(s)}return r},
n7:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.aj(u)}return s},
jr:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m2:function(a,b,c,d){var u=W.jr(W.jr(W.jr(W.jr(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
a_:function(a,b,c,d){var u=W.me(new W.jp(c),W.k)
if(u!=null&&!0)J.mQ(a,b,u,!1)
return new W.jo(a,b,u,!1)},
m1:function(a){var u=W.lp(),t=window.location
u=new W.cA(new W.jz(u,t))
u.eK(a)
return u},
nX:function(a,b,c,d){return!0},
nY:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
m3:function(){var u=P.h,t=P.lA(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jM(t,P.ca(u),P.ca(u),P.ca(u),null)
t.eN(null,new H.ha(C.o,new W.jN(),[H.aP(C.o,0),u]),s,null)
return t},
me:function(a,b){var u=$.av
if(u===C.f)return a
return u.dF(a,b)},
r:function r(){},
eX:function eX(){},
eY:function eY(){},
eZ:function eZ(){},
bu:function bu(){},
bv:function bv(){},
bw:function bw(){},
bc:function bc(){},
fi:function fi(){},
J:function J(){},
c1:function c1(){},
fj:function fj(){},
al:function al(){},
ay:function ay(){},
fk:function fk(){},
fl:function fl(){},
fo:function fo(){},
aq:function aq(){},
fp:function fp(){},
d5:function d5(){},
d6:function d6(){},
fq:function fq(){},
fr:function fr(){},
jk:function jk(a,b){this.a=a
this.b=b},
S:function S(){},
fv:function fv(){},
k:function k(){},
f:function f(){},
ar:function ar(){},
c4:function c4(){},
fB:function fB(){},
fF:function fF(){},
az:function az(){},
fL:function fL(){},
c6:function c6(){},
aX:function aX(){},
c7:function c7(){},
bB:function bB(){},
h4:function h4(){},
hq:function hq(){},
ce:function ce(){},
hr:function hr(){},
hs:function hs(a){this.a=a},
ht:function ht(){},
hu:function hu(a){this.a=a},
aC:function aC(){},
hv:function hv(){},
aD:function aD(){},
a5:function a5(a){this.a=a},
E:function E(){},
dp:function dp(){},
aE:function aE(){},
hL:function hL(){},
hW:function hW(){},
hX:function hX(a){this.a=a},
hZ:function hZ(){},
aH:function aH(){},
ia:function ia(){},
aI:function aI(){},
ib:function ib(){},
aJ:function aJ(){},
ig:function ig(){},
ih:function ih(a){this.a=a},
at:function at(){},
dF:function dF(){},
ik:function ik(){},
il:function il(){},
cp:function cp(){},
aK:function aK(){},
au:function au(){},
ip:function ip(){},
iq:function iq(){},
iv:function iv(){},
aL:function aL(){},
bG:function bG(){},
iz:function iz(){},
iA:function iA(){},
bn:function bn(){},
iW:function iW(){},
jd:function jd(){},
bp:function bp(){},
cz:function cz(){},
jl:function jl(){},
e_:function e_(){},
jq:function jq(){},
eh:function eh(){},
jE:function jE(){},
jJ:function jJ(){},
jj:function jj(){},
jn:function jn(a){this.a=a},
jo:function jo(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jp:function jp(a){this.a=a},
cA:function cA(a){this.a=a},
N:function N(){},
dq:function dq(a){this.a=a},
hD:function hD(a){this.a=a},
hC:function hC(a,b,c){this.a=a
this.b=b
this.c=c},
ep:function ep(){},
jB:function jB(){},
jC:function jC(){},
jM:function jM(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jN:function jN(){},
jK:function jK(){},
d9:function d9(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
b0:function b0(){},
jz:function jz(a,b){this.a=a
this.b=b},
eI:function eI(a){this.a=a},
jX:function jX(a){this.a=a},
dZ:function dZ(){},
e0:function e0(){},
e1:function e1(){},
e2:function e2(){},
e3:function e3(){},
e5:function e5(){},
e6:function e6(){},
e7:function e7(){},
e8:function e8(){},
ed:function ed(){},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
ei:function ei(){},
ej:function ej(){},
em:function em(){},
en:function en(){},
eo:function eo(){},
cG:function cG(){},
cH:function cH(){},
eq:function eq(){},
er:function er(){},
ev:function ev(){},
ey:function ey(){},
ez:function ez(){},
cI:function cI(){},
cJ:function cJ(){},
eB:function eB(){},
eC:function eC(){},
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
P:function(a,b){var u,t,s
if(a.length!==1||b.length!==1)throw H.c(P.m("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.G(a,0)
t=C.a.G(b,0)
if(u>t){s=t
t=u
u=s}return new K.hR(u,t)},
v:function(a){var u=new K.i_()
u.eI(a)
return u},
aR:function aR(){},
da:function da(){},
bk:function bk(){},
aa:function aa(){this.a=null},
hR:function hR(a,b){this.a=a
this.b=b},
i_:function i_(){this.a=null}},L={
ix:function(){var u=new L.iw(),t=P.h
u.a=new H.K([t,L.dD])
u.b=new H.K([t,L.dL])
u.c=P.ca(t)
return u},
dD:function dD(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dK:function dK(a,b,c){this.a=a
this.b=b
this.c=c},
dL:function dL(a){this.b=a
this.c=null},
iw:function iw(){var _=this
_.d=_.c=_.b=_.a=null},
dN:function dN(a){this.b=a
this.a=this.c=null}},O={
kJ:function(a){var u=new O.aS([a])
u.bp(a)
return u},
aS:function aS(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cd:function cd(){this.b=this.a=null},
dj:function dj(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
hm:function hm(a,b){this.a=a
this.b=b},
hn:function hn(){},
ho:function ho(a,b){this.a=a
this.b=b},
hp:function hp(){},
hc:function hc(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cc:function cc(){},
hd:function hd(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aA:function aA(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hf:function hf(){var _=this
_.e=_.d=_.c=_.b=null},
hg:function hg(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hh:function hh(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dz:function dz(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
dG:function dG(){}},E={
ly:function(){var u,t=new E.aV()
t.a=""
t.b=!0
u=O.kJ(E.aV)
t.y=u
u.b3(t.gi5(),t.gi8())
t.dy=t.dx=t.db=t.cy=t.cx=t.ch=t.Q=t.z=null
t.sa9(0,null)
return t},
nC:function(a,b){var u=new E.hS(a)
u.eH(a,b)
return u},
nJ:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibw)return E.lO(a,!0,!0,!0,!1)
u=W.kI()
t=u.style
t.width="100%"
t.height="100%"
s.gcc(a).n(0,u)
return E.lO(u,!0,!0,!0,!1)},
lO:function(a,b,c,d,e){var u,t,s,r="mousemove",q=new E.dI(),p=C.i.cO(a,"webgl2",P.nh(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(p==null)H.o(P.m("Failed to get the rendering context for WebGL."))
q.b=a
q.c=p
q.e=E.nC(p,a)
u=new T.is(p)
p.getParameter(3379)
u.c=p.getParameter(34076)
u.e=u.d=0
q.f=u
u=new X.dR(a)
t=new X.fX()
t.c=new X.am(!1,!1,!1)
t.d=P.ca(P.w)
u.b=t
t=new X.hw(u)
t.f=0
t.r=V.aF()
t.x=V.aF()
t.ch=t.Q=1
u.c=t
t=new X.h5(u)
t.r=0
t.x=V.aF()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.iy(u)
t.f=V.aF()
t.r=V.aF()
u.e=t
u.x=u.r=u.f=!1
u.y=null
t=H.b([],[[P.dE,P.a4]])
u.z=t
s=document
t.push(W.a_(s,"contextmenu",u.gfs(),!1))
u.z.push(W.a_(a,"focus",u.gfA(),!1))
u.z.push(W.a_(a,"blur",u.gfj(),!1))
u.z.push(W.a_(s,"keyup",u.gfE(),!1))
u.z.push(W.a_(s,"keydown",u.gfC(),!1))
u.z.push(W.a_(a,"mousedown",u.gfI(),!1))
u.z.push(W.a_(a,"mouseup",u.gfM(),!1))
u.z.push(W.a_(a,r,u.gfK(),!1))
t=u.z
W.kL(a)
W.kL(a)
t.push(W.a_(a,W.kL(a),u.gfO(),!1))
u.z.push(W.a_(s,r,u.gfu(),!1))
u.z.push(W.a_(s,"mouseup",u.gfw(),!1))
u.z.push(W.a_(s,"pointerlockchange",u.gfQ(),!1))
u.z.push(W.a_(a,"touchstart",u.gh5(),!1))
u.z.push(W.a_(a,"touchend",u.gh1(),!1))
u.z.push(W.a_(a,"touchmove",u.gh3(),!1))
q.x=u
q.ch=!0
q.cx=!1
q.cy=new P.ag(Date.now(),!1)
q.db=0
q.dh()
return q},
f7:function f7(){},
aV:function aV(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hS:function hS(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hT:function hT(a){this.a=a},
hU:function hU(a){this.a=a},
hV:function hV(a){this.a=a},
dI:function dI(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iu:function iu(a){this.a=a}},Z={
l2:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bP(c)),35044)
a.bindBuffer(b,null)
return new Z.dV(b,u)},
ao:function(a){return new Z.b6(a)},
dV:function dV(a,b){this.a=a
this.b=b},
cY:function cY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
dW:function dW(a){this.a=a},
c_:function c_(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a){this.a=a}},D={
G:function(){var u=new D.bz()
u.d=0
return u},
fa:function fa(){},
bz:function bz(){var _=this
_.d=_.c=_.b=_.a=null},
fy:function fy(a){this.a=a},
fz:function fz(a){this.a=a},
Z:function Z(){this.b=null},
be:function be(){this.b=null},
bf:function bf(){this.b=null},
C:function C(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f4:function f4(){},
bx:function bx(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a9:function a9(){},
dg:function dg(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hM:function hM(){},
ic:function ic(){}},X={cZ:function cZ(a,b){this.a=a
this.b=b},df:function df(a,b){this.a=a
this.b=b},fX:function fX(){var _=this
_.d=_.c=_.b=_.a=null},di:function di(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h5:function h5(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},b_:function b_(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hw:function hw(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},cf:function cf(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hN:function hN(){},dM:function dM(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iy:function iy(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dR:function dR(a){var _=this
_.a=a
_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kO:function(a){var u=new X.fH(),t=new V.af(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lL
if(t==null){t=V.lK(0,0,1,1)
$.lL=t}u.r=t
return u},
lE:function(a){var u,t,s=new X.ds()
s.c=1.0471975511965976
s.d=0.1
s.e=2000
if(null!=a){u=s.b
s.b=a
if(a!=null)a.gq().n(0,s.gfl())
t=new D.C("mover",u,s.b)
t.b=!0
s.au(t)}t=s.c
if(!(Math.abs(t-1.0471975511965976)<$.D().a)){s.c=1.0471975511965976
t=new D.C("fov",t,1.0471975511965976)
t.b=!0
s.au(t)}t=s.d
if(!(Math.abs(t-0.1)<$.D().a)){s.d=0.1
t=new D.C("near",t,0.1)
t.b=!0
s.au(t)}t=s.e
if(!(Math.abs(t-2000)<$.D().a)){s.e=2000
t=new D.C("far",t,2000)
t.b=!0
s.au(t)}return s},
kH:function kH(){},
fH:function fH(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
fO:function fO(){this.b=this.a=null},
ds:function ds(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
im:function im(){}},V={
fc:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.af(u,t,s,1)},
pn:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bn(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.ao("null",c)
return C.a.ao(C.d.eo(Math.abs(a-0)<$.D().a?0:a,b),c+b+1)},
bU:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.n)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ao(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
lg:function(a){return C.d.iw(Math.pow(2,C.R.cr(Math.log(H.oT(a))/Math.log(2))))},
bC:function(){var u=$.lC
return u==null?$.lC=V.aB(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aB:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lB:function(a,b,c){var u=c.p(0,Math.sqrt(c.A(c))),t=b.aE(u),s=t.p(0,Math.sqrt(t.A(t))),r=u.aE(s),q=new V.x(a.a,a.b,a.c),p=s.V(0).A(q),o=r.V(0).A(q),n=u.V(0).A(q)
return V.aB(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aF:function(){var u=$.lG
return u==null?$.lG=new V.X(0,0):u},
kX:function(){var u=$.aG
return u==null?$.aG=new V.H(0,0,0):u},
lK:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dv(a,b,c,d)},
cw:function(){var u=$.lZ
return u==null?$.lZ=new V.x(0,0,0):u},
nS:function(){var u=$.j_
return u==null?$.j_=new V.x(-1,0,0):u},
l1:function(){var u=$.j0
return u==null?$.j0=new V.x(0,1,0):u},
m_:function(){var u=$.j1
return u==null?$.j1=new V.x(0,0,1):u},
Y:function Y(a,b,c){this.a=a
this.b=b
this.c=c},
af:function af(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fx:function fx(a){this.a=a},
dk:function dk(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
aZ:function aZ(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
X:function X(a,b){this.a=a
this.b=b},
H:function H(a,b,c){this.a=a
this.b=b
this.c=c},
an:function an(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dv:function dv(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
L:function L(a,b){this.a=a
this.b=b},
x:function x(a,b,c){this.a=a
this.b=b
this.c=c},
b4:function b4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ph:function(a){P.nK(C.O,new V.kx(a))},
nE:function(a){var u=new V.i4()
u.eJ(a,!0)
return u},
d_:function d_(){},
kx:function kx(a){this.a=a},
fn:function fn(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fJ:function fJ(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fK:function fK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hK:function hK(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hP:function hP(a){this.a=a
this.c=null},
hQ:function hQ(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i4:function i4(){this.b=this.a=null},
i6:function i6(a){this.a=a},
i5:function i5(a){this.a=a},
i7:function i7(a){this.a=a}},U={
kK:function(){var u=new U.fd()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lu:function(a){var u=new U.d1()
u.a=a
return u},
fd:function fd(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d1:function d1(){this.b=this.a=null},
c5:function c5(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
ah:function ah(){},
dS:function dS(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dT:function dT(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dU:function dU(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d0:function d0(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},d2:function d2(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},d7:function d7(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},as:function as(){}},A={
nl:function(a,b){var u=a.aF,t=new A.hb(b,u)
t.cW(b,u)
t.eG(a,b)
return t},
nm:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gas(a3)+a4.gas(a4)+a5.gas(a5)+a6.gas(a6)+a7.gas(a7)+a8.gas(a8)+a9.gas(a9)+b0.gas(b0)+b1.gas(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.n)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.n)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.n)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.n)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
for(q=b3.length,t=0;t<q;++t,r=!0)s+=b3[t].b
for(q=b4.length,t=0;t<q;++t,r=!0)s+=b4[t].b
for(p=b5.length,t=0;t<p;++t,r=!0)s+=b5[t].b
if(!a9.a)p=a9.c
else p=!0
if(!p)if(!b0.a){p=b0.c
o=p}else o=!0
else o=!0
n=u>0
if(!a4.a)u=a4.c
else u=!0
if(!u){if(!a5.a)u=a5.c
else u=!0
if(!u){if(!a6.a)u=a6.c
else u=!0
if(!u)if(!a7.a)u=a7.c
else u=!0
else u=!0
m=u}else m=!0}else m=!0
u=!a7.a
if(u)p=a7.c
else p=!0
l=p||n||q>0||o
if(!a5.a)q=a5.c
else q=!0
if(!q){if(!a6.a)q=a6.c
else q=!0
if(!q){if(u)u=a7.c
else u=!0
k=u}else k=!0}else k=!0
if(!k){if(!a8.a)u=a8.c
else u=!0
j=u||o}else j=!0
if(!a8.a)i=a8.c
else i=!0
h=a3.c||a4.c||a5.c||a6.c||a7.c||a8.c||a9.c||b0.c||b1.c
g=a2>0
f=j||i||l||!1
e=n&&k
b=b&&h
d=$.aw()
if(j){u=$.ba()
d=new Z.b6(d.a|u.a)}if(i){u=$.b9()
d=new Z.b6(d.a|u.a)}if(h){u=$.bb()
d=new Z.b6(d.a|u.a)}if(g){u=$.b8()
d=new Z.b6(d.a|u.a)}return new A.he(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k4:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
k5:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.k4(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eV(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
os:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k4(b,t,"emission")
u=b.a+="\n"
u+="vec3 emissionColor()\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   return emissionClr*textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   return emissionClr;\n"
b.a=t}else if(t.c){t=u+"   return textureCube(emissionTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="}\n"
b.a=t
b.a=t+"\n"},
oo:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k5(b,t,"ambient")
b.a+="\n"},
oq:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k5(b,t,"diffuse")
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
ot:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k5(b,t,"invDiffuse")
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
oz:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k5(b,t,"specular")
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
ov:function(a,b){var u,t,s
if(!a.k4)return
u=b.a+="// === Normal ===\n"
u=b.a=u+"\n"
if(a.f.c){u+="uniform samplerCube bumpTxt;\n"
b.a=u
u+="\n"
b.a=u}u+="vec3 normal()\n"
b.a=u
u=b.a=u+"{\n"
t=a.f
s=t.a
if(!s)t=t.c
else t=!0
if(!t||s)u=b.a=u+"   return normalize(normalVec);\n"
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
ox:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k4(b,t,"reflect")
u=b.a+="\n"
u+="vec3 reflect(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = reflectClr*textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = reflectClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(reflectTxt, txtCube).rgb;\n"
b.a=t}else t=u
t+="   vec3 invRefl = vec3(invViewMat*vec4(refl, 0.0));\n"
b.a=t
t+="   return scalar*textureCube(envSampler, invRefl).rgb;\n"
b.a=t
t+="}\n"
b.a=t
b.a=t+"\n"},
oy:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k4(b,t,"refract")
u=b.a+="uniform float refraction;\n"
u+="\n"
b.a=u
u+="vec3 refract(vec3 refl)\n"
b.a=u
u=b.a=u+"{\n"
if(s)if(t.c){t=u+"   vec3 scalar = refractClr*textureCube(refractTxt, txtCube).rgb;\n"
b.a=t}else{t=u+"   vec3 scalar = refractClr;\n"
b.a=t}else if(t.c){t=u+"   vec3 scalar = textureCube(refractTxt, txtCube).rgb;\n"
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
op:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.e(u)
s=A.eV(t)
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
if(typeof u!=="number")return u.ae()
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
if(!u.a)u=u.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)p.push("diffuse(norm, normDir)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)p.push("invDiffuse(norm, normDir)")
u=a.e
if(!u.a)u=u.c
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
or:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.e(u)
s=A.eV(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ae()
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
if(!n.a)n=n.c
else n=!0
if(n)o.push("ambientColor")
if(a.dx){c.a+="   vec3 highLight = vec3(0.0, 0.0, 0.0);\n"
m=H.b([],r)
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)m.push("diffuse(norm, lit.viewDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)m.push("invDiffuse(norm, lit.viewDir)")
r=a.e
if(!r.a)r=r.c
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
ow:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.e(u)
s=A.eV(t)
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
if(typeof u!=="number")return u.ae()
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
if(!o.a)o=o.c
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
r=a.c
if(!r.a)r=r.c
else r=!0
if(r)k.push("diffuse(norm, normDir)")
r=a.d
if(!r.a)r=r.c
else r=!0
if(r)k.push("invDiffuse(norm, normDir)")
r=a.e
if(!r.a)r=r.c
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
oA:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.e(u)
s=A.eV(t)
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
if(typeof u!=="number")return u.ae()
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
if(!r.a)r=r.c
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
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
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
ou:function(a,b){var u,t
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
if(!u.a)u=u.c
else u=!0
if(u)t.push("ambientColor")
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)t.push("diffuse(norm, litVec)")
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)t.push("invDiffuse(norm, litVec)")
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.j(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
oB:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.U("")
i.a="precision mediump float;\n"
i.a=k
u=a.k4
if(u){i.a=j
t=j}else t=k
if(a.r1){t+="varying vec3 binormalVec;\n"
i.a=t}if(a.r2){t+="varying vec2 txt2D;\n"
i.a=t}if(a.rx){t+="varying vec3 txtCube;\n"
i.a=t}if(a.k2){t+="varying vec3 objPos;\n"
i.a=t}t=i.a=(a.k3?i.a=t+"varying vec3 viewPos;\n":t)+"\n"
s=a.y1
if(s){t+="uniform mat4 colorMat;\n"
i.a=t}if(a.go){t+="uniform mat4 viewMat;\n"
i.a=t}if(a.dy)t=i.a=t+"uniform mat4 invViewMat;\n"
i.a=t+"\n"
A.os(a,i)
A.oo(a,i)
A.oq(a,i)
A.ot(a,i)
A.oz(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.ox(a,i)
A.oy(a,i)}A.ov(a,i)
r=i.a+="// === Alpha ===\n"
r=i.a=r+"\n"
q=a.y
p=q.a
if(p){r+="uniform float alpha;\n"
i.a=r}q=q.c
r=(q?i.a=r+"uniform samplerCube alphaTxt;\n":r)+"float alphaValue()\n"
i.a=r
r=i.a=r+"{\n"
if(!p)o=q
else o=!0
if(!o)r=i.a=r+"   return 1.0;\n"
else if(q){if(p){r+="   float a = alpha*textureCube(alphaTxt, txtCube).a;\n"
i.a=r}else{r+="   float a = textureCube(alphaTxt, txtCube).a;\n"
i.a=r}r+="   if (a <= 0.000001) discard;\n"
i.a=r
r+="   return a;\n"
i.a=r}else if(p){r+="   return alpha;\n"
i.a=r}r+="}\n"
i.a=r
i.a=r+"\n"
r=a.k1
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.op(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.or(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.ow(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.n)(q),++n)A.oA(a,q[n],i)
A.ou(a,i)}q=i.a+="// === Main ===\n"
q+="\n"
i.a=q
q+="void main()\n"
i.a=q
q+="{\n"
i.a=q
q=i.a=q+"   float alpha = alphaValue();\n"
u=u?i.a=q+"   vec3 norm = normal();\n":q
if(t)i.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
m=H.b([],[P.h])
if(r){i.a+="   vec3 lightAccum = vec3(0.0, 0.0, 0.0);\n"
m.push("lightAccum")
u=a.b
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setAmbientColor();\n"
u=a.c
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setDiffuseColor();\n"
u=a.d
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setInvDiffuseColor();\n"
u=a.e
if(!u.a)u=u.c
else u=!0
if(u)i.a+="   setSpecularColor();\n"
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.n)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.ab(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(!u.a)u=u.c
else u=!0
if(u)m.push("emissionColor()")
u=a.r
if(!u.a)u=u.c
else u=!0
if(u)m.push("reflect(refl)")
u=a.x
if(!u.a)u=u.c
else u=!0
if(u)m.push("refract(refl)")
if(m.length<=0)m.push("vec3(0.0, 0.0, 0.0)")
u=i.a+="   vec4 objClr = vec4("+C.b.j(m," + ")+", alpha);\n"
if(s)u=i.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
i.a=u
u=i.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
oC:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.bz+"];\n"
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
oE:function(a,b){var u
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
oD:function(a,b){var u
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
oG:function(a,b){var u,t
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
oH:function(a,b){var u,t
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
oF:function(a,b){var u
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
oI:function(a,b){var u
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
eV:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.ab(a,1)},
kZ:function(a,b,c,d,e){var u=new A.iF(a,c,e)
u.f=d
P.ni(d,0,P.w)
return u},
cW:function cW(a,b,c){this.a=a
this.b=b
this.c=c},
f_:function f_(a){this.a=a},
a2:function a2(a,b,c){this.a=a
this.b=b
this.c=c},
hb:function hb(a,b){var _=this
_.dO=_.iK=_.bA=_.aF=_.bz=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iS=_.iR=_.iQ=_.cp=_.co=_.cn=_.cm=_.cl=_.ck=_.cj=_.ci=_.e_=_.iP=_.dZ=_.dY=_.iO=_.dX=_.dW=_.dV=_.iN=_.dU=_.dT=_.dS=_.iM=_.dR=_.dQ=_.iL=_.dP=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cX:function cX(a,b){this.a=a
this.b=b},
d4:function d4(a,b){this.a=a
this.b=b},
dt:function dt(a,b){this.a=a
this.b=b},
dB:function dB(a,b){this.a=a
this.b=b},
he:function he(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.bz=b3
_.aF=b4
_.bA=b5},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cs:function cs(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cu:function cu(a,b,c,d,e,f,g,h,i,j){var _=this
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
cv:function cv(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
i9:function i9(a,b){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
dO:function dO(){},
iK:function iK(a){this.a=a},
bo:function bo(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
iI:function iI(a,b,c){this.a=a
this.c=b
this.d=c},
iJ:function iJ(a,b,c){this.a=a
this.c=b
this.d=c},
iF:function iF(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
V:function V(a,b,c){this.a=a
this.c=b
this.d=c},
iG:function iG(a,b,c){this.a=a
this.c=b
this.d=c},
I:function I(a,b,c){this.a=a
this.c=b
this.d=c},
cq:function cq(a,b,c){this.a=a
this.c=b
this.d=c},
iL:function iL(a,b,c){this.a=a
this.c=b
this.d=c},
ct:function ct(a,b,c){this.a=a
this.c=b
this.d=c},
ac:function ac(a,b,c){this.a=a
this.c=b
this.d=c},
bI:function bI(a,b,c){this.a=a
this.c=b
this.d=c},
a1:function a1(a,b,c){this.a=a
this.c=b
this.d=c}},F={
lb:function(a,b,c,d){var u=F.dy()
F.cL(u,b,c,d,a,1,0,0,1)
F.cL(u,b,c,d,a,0,1,0,3)
F.cL(u,b,c,d,a,0,0,1,2)
F.cL(u,b,c,d,a,-1,0,0,0)
F.cL(u,b,c,d,a,0,-1,0,0)
F.cL(u,b,c,d,a,0,0,-1,3)
u.ak()
return u},
k_:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cL:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.x(h,g+a1,f+a2)
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
j.d=i}m=F.k_(i)
l=F.k_(h)
k=F.kB(d,a0,new F.jZ(j,F.k_(g),F.k_(f),l,m,c),b)
if(k!=null)a.b0(k)},
mj:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.dy()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.b5])
q=u.a
p=new V.x(0,0,t)
p=p.p(0,Math.sqrt(p.A(p)))
r.push(q.hv(new V.an(a,-1,-1,-1),new V.af(1,1,1,1),new V.H(0,0,c),new V.x(0,0,t),new V.X(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.u(k)
j=new V.x(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bK(new V.an(a,-1,-1,-1),null,new V.af(i,g,h,1),new V.H(m*k,l*k,c),new V.x(0,0,t),new V.X(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.du(r)
return u},
mh:function(a,b,c){return F.oX(!0,a,1,new F.k8(1,c),b)},
oX:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.kB(c,e,new F.ka(d),null)
if(u==null)return
u.ak()
u.bx()
if(b)u.b0(F.mj(3,!1,1,new F.kb(d),e))
u.b0(F.mj(1,!0,-1,new F.kc(d),e))
return u},
pb:function(a,b){var u=F.kB(a,b,new F.kl(),null)
u.d.bI()
u.ak()
u.bx()
return u},
a6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.A(b)))
u=b.a
t=b.b
s=b.c
r=F.bK(j,j,j,new V.H(u,t,s),b,j,j,j,0)
q=a.hR(r,new F.cx())
if(q!=null)return q
p=u*0.5+0.5
o=t*0.5+0.5
n=s*0.5+0.5
if(p<0)p=0
else if(p>1)p=1
if(o<0)o=0
else if(o>1)o=1
if(n<0)n=0
else if(n>1)n=1
r.sal(0,new V.af(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scJ(new V.X(l,k<0?-k:k))
a.a.n(0,r)
return r},
Q:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bv(0,b,d,c)
else{u=F.a6(a,b.r.B(0,c.r).u(0,0.5))
t=F.a6(a,c.r.B(0,d.r).u(0,0.5))
s=F.a6(a,d.r.B(0,b.r).u(0,0.5))
r=e-1
F.Q(a,b,u,s,r)
F.Q(a,u,c,t,r)
F.Q(a,t,s,u,r)
F.Q(a,s,t,d,r)}},
ms:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.ky()
t=F.lb(a,null,new F.kz(s,1),b)
t.bx()
return t},
pl:function(){return F.mi(15,30,0.5,1,new F.kC())},
pa:function(){return F.mi(12,120,0.3,1,new F.kk(3,2))},
mi:function(a,b,c,d,e){var u=F.kB(a,b,new F.k9(e,d,b,c),null)
if(u==null)return
u.ak()
u.bx()
return u},
kB:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.dy()
t=H.b([],[F.b5])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bK(g,g,new V.af(p,0,0,1),g,g,new V.X(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.cf(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bK(g,g,new V.af(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.cf(d))}}u.d.hu(a+1,b+1,t)
return u},
c3:function(a,b,c){var u=new F.aW(),t=a.a
if(t==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.o(P.m("May not create a face with vertices attached to different shapes."))
u.bs(a)
u.bt(b)
u.dk(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
ne:function(a,b){var u=new F.c9(),t=a.a
if(t==null)H.o(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.o(P.m("May not create a line with vertices attached to different shapes."))
u.bs(a)
u.bt(b)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
dy:function(){var u=new F.i0(),t=new F.j2(u)
t.b=!1
t.c=H.b([],[F.b5])
u.a=t
t=new F.i3(u)
t.b=H.b([],[F.cj])
u.b=t
t=new F.i2(u)
t.b=H.b([],[F.c9])
u.c=t
t=new F.i1(u)
t.b=H.b([],[F.aW])
u.d=t
u.e=null
return u},
bK:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.b5(),r=new F.ja()
r.b=H.b([],[F.cj])
s.b=r
r=new F.j7()
u=[F.c9]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j3()
u=[F.aW]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mH()
s.e=0
r=$.aw()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.ba().a)!==0?e:t
s.x=(u&$.b9().a)!==0?b:t
s.y=(u&$.bs().a)!==0?f:t
s.z=(u&$.bb().a)!==0?g:t
s.Q=(u&$.mI().a)!==0?c:t
s.ch=(u&$.bW().a)!==0?i:0
s.cx=(u&$.b8().a)!==0?a:t
return s},
jZ:function jZ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k8:function k8(a,b){this.a=a
this.b=b},
ka:function ka(a){this.a=a},
kb:function kb(a){this.a=a},
kc:function kc(a){this.a=a},
kl:function kl(){},
ky:function ky(){},
kz:function kz(a,b){this.a=a
this.b=b},
kC:function kC(){},
kk:function kk(a,b){this.a=a
this.b=b},
k9:function k9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aW:function aW(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fA:function fA(){},
i8:function i8(){},
c9:function c9(){this.b=this.a=null},
fZ:function fZ(){},
iE:function iE(){},
cj:function cj(){this.a=null},
i0:function i0(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
i1:function i1(a){this.a=a
this.b=null},
i2:function i2(a){this.a=a
this.b=null},
i3:function i3(a){this.a=a
this.b=null},
b5:function b5(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
jc:function jc(a){this.a=a},
jb:function jb(a){this.a=a},
j2:function j2(a){this.a=a
this.c=this.b=null},
j3:function j3(){this.d=this.c=this.b=null},
j4:function j4(a,b){this.a=a
this.b=b},
j5:function j5(a,b){this.a=a
this.b=b},
j7:function j7(){this.c=this.b=null},
j8:function j8(){},
cx:function cx(){},
j9:function j9(){},
j6:function j6(){},
hE:function hE(){},
ja:function ja(){this.b=null}},T={dH:function dH(){},ir:function ir(){var _=this
_.e=_.d=_.c=_.b=_.a=null},is:function is(a){var _=this
_.a=a
_.e=_.d=_.c=null},it:function it(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g},
mo:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6="testCanvas",a7=null,a8="modifiers",a9=V.nE("Test 017"),b0=W.kI()
b0.className="pageLargeCanvas"
b0.id=a6
a9.a.appendChild(b0)
u=[P.h]
a9.dw(H.b(["A test of the Material Lighting shader with solid color directional light, cube mapped textures, and a reflection map. The specular map is also used to define where reflections are painted."],u))
a9.hs(H.b(["shapes"],u))
a9.dw(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(a6)
if(t==null)H.o(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.nJ(t,!0,!0,!0,!1)
r=E.ly()
r.sa9(0,F.ms(8,8))
q=X.kO(a7)
if(q.b){q.b=!1
p=new D.C("clearColor",!0,!1)
p.b=!0
q.au(p)}o=s.f.eb("../resources/maskonaive",".jpg")
n=s.f.ea("../resources/earthSpecular")
m=s.f.ea("../resources/earthColor")
l=new O.dj()
p=O.kJ(V.aZ)
l.e=p
p.b3(l.gff(),l.gfh())
p=new O.aA(l,"emission")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.f=p
p=new O.aA(l,"ambient")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.r=p
p=new O.aA(l,"diffuse")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.x=p
p=new O.aA(l,"invDiffuse")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.y=p
p=new O.hh(l,"specular")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
p.ch=100
l.z=p
p=new O.hd(l,"bump")
p.c=new A.a2(!1,!1,!1)
l.Q=p
l.ch=null
p=new O.aA(l,"reflect")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
l.cx=p
p=new O.hg(l,"refract")
p.c=new A.a2(!1,!1,!1)
p.f=new V.Y(0,0,0)
p.ch=1
l.cy=p
p=new O.hc(l,"alpha")
p.c=new A.a2(!1,!1,!1)
p.f=1
l.db=p
p=new D.dg()
p.bp(D.a9)
p.e=H.b([],[D.f4])
p.f=H.b([],[D.bx])
p.r=H.b([],[D.hM])
p.x=H.b([],[D.ic])
p.z=p.y=null
p.cQ(p.gfd(),p.gfS(),p.gfW())
l.dx=p
k=new O.hf()
k.b=new V.af(0,0,0,0)
k.c=1
k.d=10
k.e=!1
l.dy=k
k=p.y
p=k==null?p.y=D.G():k
p.n(0,l.ghd())
p=l.dx
k=p.z
p=k==null?p.z=D.G():k
k=l.gaR()
p.n(0,k)
l.fr=null
p=l.dx
j=V.l1()
i=U.lu(V.lB(V.kX(),j,new V.x(-1,-1,-1)))
h=new V.Y(1,1,1)
g=new D.bx()
g.c=new V.Y(1,1,1)
g.a=V.m_()
g.d=V.l1()
g.e=V.nS()
f=g.b
g.b=i
i.gq().n(0,g.geL())
i=new D.C("mover",f,g.b)
i.b=!0
g.aA(i)
if(!g.c.t(0,h)){f=g.c
g.c=h
i=new D.C("color",f,h)
i.b=!0
g.aA(i)}p.n(0,g)
p=l.r
p.sal(0,new V.Y(0.5,0.5,0.5))
p=l.x
p.sal(0,new V.Y(0.5,0.5,0.5))
l.r.saq(m)
l.x.saq(m)
l.z.saq(n)
p=l.ch
if(p!==o){if(p!=null)p.gq().D(0,k)
f=l.ch
l.ch=o
o.gq().n(0,k)
p=new D.C("environment",f,l.ch)
p.b=!0
l.Y(p)}l.cx.saq(n)
p=l.cx
p.sal(0,new V.Y(0.5,0.5,0.5))
p=l.z
p.c6(new A.a2(!0,!1,p.c.c))
p.dj(10)
e=new U.c5()
e.bp(U.ah)
e.b3(e.gfb(),e.gfU())
e.e=null
e.f=V.bC()
e.r=0
p=s.x
k=new U.dT()
i=U.kK()
i.scN(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa_(0,0)
i.scw(100)
i.sX(0)
i.scg(0.5)
k.b=i
g=k.gaQ()
i.gq().n(0,g)
i=U.kK()
i.scN(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa_(0,0)
i.scw(100)
i.sX(0)
i.scg(0.5)
k.c=i
i.gq().n(0,g)
k.d=null
k.r=k.f=k.e=!1
k.y=k.x=2.5
k.Q=4
k.ch=k.cx=!1
k.db=k.cy=0
k.dx=null
k.dy=0
k.fx=k.fr=null
d=new X.am(!1,!1,!1)
f=k.d
k.d=d
i=new D.C(a8,f,d)
i.b=!0
k.U(i)
i=k.f
if(i!==!1){k.f=!1
i=new D.C("invertX",i,!1)
i.b=!0
k.U(i)}i=k.r
if(i!==!1){k.r=!1
i=new D.C("invertY",i,!1)
i.b=!0
k.U(i)}k.bb(p)
e.n(0,k)
p=s.x
k=new U.dS()
i=U.kK()
i.scN(0,!0)
i.scv(6.283185307179586)
i.scz(0)
i.sa_(0,0)
i.scw(100)
i.sX(0)
i.scg(0.2)
k.b=i
i.gq().n(0,k.gaQ())
k.c=null
k.d=!1
k.e=2.5
k.r=4
k.x=k.y=!1
k.z=0
k.Q=null
k.ch=0
k.cy=k.cx=null
d=new X.am(!0,!1,!1)
f=k.c
k.c=d
i=new D.C(a8,f,d)
i.b=!0
k.U(i)
k.bb(p)
e.n(0,k)
p=s.x
k=new U.dU()
k.c=0.01
k.e=k.d=0
d=new X.am(!1,!1,!1)
k.b=d
i=new D.C(a8,a7,d)
i.b=!0
k.U(i)
k.bb(p)
e.n(0,k)
e.n(0,U.lu(V.aB(1,0,0,0,0,1,0,0,0,0,1,5,0,0,0,1)))
c=X.lE(e)
b=new M.d2()
b.a=!0
p=E.ly()
a=F.dy()
k=a.a
i=new V.x(-1,-1,1)
i=i.p(0,Math.sqrt(i.A(i)))
a0=k.bw(new V.an(1,2,4,6),V.fc(255,0,0),new V.H(-1,-1,0),new V.X(0,1),i,a7)
i=a.a
k=new V.x(1,-1,1)
k=k.p(0,Math.sqrt(k.A(k)))
a1=i.bw(new V.an(0,3,4,6),V.fc(0,0,255),new V.H(1,-1,0),new V.X(1,1),k,a7)
k=a.a
i=new V.x(1,1,1)
i=i.p(0,Math.sqrt(i.A(i)))
a2=k.bw(new V.an(0,2,5,6),V.fc(0,128,0),new V.H(1,1,0),new V.X(1,0),i,a7)
i=a.a
k=V.aF()
g=new V.x(-1,1,1)
g=g.p(0,Math.sqrt(g.A(g)))
a3=i.bw(new V.an(0,2,4,7),V.fc(255,255,0),new V.H(-1,1,0),k,g,a7)
a.d.du(H.b([a0,a1,a2,a3],[F.b5]))
a.ak()
p.sa9(0,a)
b.e=p
b.sbc(a7)
b.sbj(0,a7)
b.sbk(a7)
p=new O.dz()
p.b=1.0471975511965976
p.d=new V.Y(1,1,1)
f=p.c
p.c=o
o.gq().n(0,p.gaR())
k=new D.C("boxTexture",f,p.c)
k.b=!0
p.Y(k)
b.sbk(p)
b.sbj(0,q)
b.sbc(c)
a4=new M.d7()
a4.a=!0
p=O.kJ(E.aV)
a4.e=p
p.b3(a4.gfn(),a4.gfp())
a4.y=a4.x=a4.r=a4.f=null
a5=X.kO(a7)
a4.sbc(a7)
a4.sbj(0,a5)
a4.sbk(a7)
a4.sbc(c)
a4.sbk(l)
a4.sbj(0,q)
a4.e.n(0,r)
p=M.as
k=H.b([b,a4],[p])
i=new M.d0()
i.bp(p)
i.e=!0
i.f=!1
i.r=null
i.b3(i.gfY(),i.gh_())
i.a8(0,k)
p=s.d
if(p!==i){if(p!=null)p.gq().D(0,s.gcY())
s.d=i
i.gq().n(0,s.gcY())
s.cZ()}p=new V.hP("shapes")
u=u.getElementById("shapes")
p.c=u
if(u==null)H.o("Failed to find shapes for RadioGroup")
p.av(0,"Cube",new T.km(r))
p.av(0,"Cuboid",new T.kn(r))
p.av(0,"Cylinder",new T.ko(r))
p.av(0,"Cone",new T.kp(r))
p.av(0,"LatLonSphere",new T.kq(r))
p.av(0,"IsoSphere",new T.kr(r))
p.bv(0,"Sphere",new T.ks(r),!0)
p.av(0,"Toroid",new T.kt(r))
p.av(0,"Knot",new T.ku(r))
u=s.Q
if(u==null)u=s.Q=D.G()
p=u.b
u=p==null?u.b=H.b([],[{func:1,ret:-1,args:[D.Z]}]):p
u.push(new T.kv(a9,l))
V.ph(s)},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a){this.a=a},
kt:function kt(a){this.a=a},
ku:function ku(a){this.a=a},
kv:function kv(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kS.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gJ:function(a){return H.ck(a)},
i:function(a){return"Instance of '"+H.e(H.cl(a))+"'"}}
J.fT.prototype={
i:function(a){return String(a)},
gJ:function(a){return a?519018:218159},
$iaO:1}
J.dd.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gJ:function(a){return 0}}
J.de.prototype={
gJ:function(a){return 0},
i:function(a){return String(a)},
$inc:1}
J.hJ.prototype={}
J.bJ.prototype={}
J.bi.prototype={
i:function(a){var u=a[$.mv()]
if(u==null)return this.eD(a)
return"JavaScript function for "+H.e(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bg.prototype={
cG:function(a,b){if(!!a.fixed$length)H.o(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.du(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.o(P.z("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
a8:function(a,b){var u,t
if(!!a.fixed$length)H.o(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t)a.push(b[t])},
H:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aT(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
i2:function(a){return this.j(a,"")},
hV:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aT(a))}return u},
hW:function(a,b,c){return this.hV(a,b,c,null)},
hU:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aT(a))}throw H.c(H.fR())},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
ez:function(a,b,c){if(b<0||b>a.length)throw H.c(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.a0(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aP(a,0)])
return H.b(a.slice(b,c),[H.aP(a,0)])},
ghT:function(a){if(a.length>0)return a[0]
throw H.c(H.fR())},
gay:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fR())},
dA:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aT(a))}return!1},
b5:function(a,b){if(!!a.immutable$list)H.o(P.z("sort"))
H.nH(a,b==null?J.ol():b)},
ey:function(a){return this.b5(a,null)},
O:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
i:function(a){return P.kP(a,"[","]")},
gS:function(a){return new J.a8(a,a.length)},
gJ:function(a){return H.ck(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.o(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kF(b,u,null))
if(b<0)throw H.c(P.a0(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bT(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.o(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bT(a,b))
a[b]=c},
$it:1,
$ii:1,
$iq:1}
J.kR.prototype={}
J.a8.prototype={
gF:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.n(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c8.prototype={
aZ:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ai(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbC(b)
if(this.gbC(a)===u)return 0
if(this.gbC(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbC:function(a){return a===0?1/a<0:a<0},
iw:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
cr:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
ap:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
eo:function(a,b){var u
if(b>20)throw H.c(P.a0(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbC(a))return"-"+u
return u},
bl:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.a0(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Z(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.o(P.z("Unexpected toString result: "+u))
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
bn:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
eF:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dm(a,b)},
a7:function(a,b){return(a|0)===a?a/b|0:this.dm(a,b)},
dm:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aW:function(a,b){var u
if(a>0)u=this.dl(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
hl:function(a,b){if(b<0)throw H.c(H.ai(b))
return this.dl(a,b)},
dl:function(a,b){return b>31?0:a>>>b},
$iM:1,
$iae:1}
J.dc.prototype={$iw:1}
J.db.prototype={}
J.bh.prototype={
Z:function(a,b){if(b<0)throw H.c(H.bT(a,b))
if(b>=a.length)H.o(H.bT(a,b))
return a.charCodeAt(b)},
G:function(a,b){if(b>=a.length)throw H.c(H.bT(a,b))
return a.charCodeAt(b)},
B:function(a,b){if(typeof b!=="string")throw H.c(P.kF(b,null,null))
return a+b},
b1:function(a,b,c,d){var u,t
c=P.b2(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.o(H.ai(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
aa:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a6:function(a,b){return this.aa(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.o(H.ai(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.du(b,null))
if(b>c)throw H.c(P.du(b,null))
if(c>a.length)throw H.c(P.du(c,null))
return a.substring(b,c)},
ab:function(a,b){return this.v(a,b,null)},
iy:function(a){return a.toLowerCase()},
u:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.L)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ao:function(a,b){var u=b-a.length
if(u<=0)return a
return this.u(" ",u)+a},
bB:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.a0(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
e5:function(a,b){return this.bB(a,b,0)},
aZ:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ai(b))
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
gl:function(a){return a.length},
$ih:1}
H.p.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Z(this.a,b)},
$at:function(){return[P.w]},
$ay:function(){return[P.w]},
$ai:function(){return[P.w]},
$aq:function(){return[P.w]}}
H.t.prototype={}
H.dh.prototype={
gS:function(a){return new H.bj(this,this.gl(this))},
bM:function(a,b){return this.eC(0,b)}}
H.bj.prototype={
gF:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.br(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aT(s))
u=t.c
if(typeof q!=="number")return H.u(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.cb.prototype={
gS:function(a){return new H.h9(J.aQ(this.a),this.b)},
gl:function(a){return J.ak(this.a)},
L:function(a,b){return this.b.$1(J.eW(this.a,b))},
$ai:function(a,b){return[b]}}
H.fu.prototype={$it:1,
$at:function(a,b){return[b]}}
H.h9.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gF(t))
return!0}u.a=null
return!1},
gF:function(a){return this.a}}
H.ha.prototype={
gl:function(a){return J.ak(this.a)},
L:function(a,b){return this.b.$1(J.eW(this.a,b))},
$at:function(a,b){return[b]},
$adh:function(a,b){return[b]},
$ai:function(a,b){return[b]}}
H.cy.prototype={
gS:function(a){return new H.je(J.aQ(this.a),this.b)}}
H.je.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gF(u)))return!0
return!1},
gF:function(a){var u=this.a
return u.gF(u)}}
H.d8.prototype={}
H.iP.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dP.prototype={}
H.ff.prototype={
i:function(a){return P.kW(this)},
m:function(a,b,c){return H.n2()},
$iT:1}
H.fg.prototype={
gl:function(a){return this.a},
cd:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cd(0,b))return
return this.d7(b)},
d7:function(a){return this.b[a]},
H:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.d7(s))}}}
H.iC.prototype={
an:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hF.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fW.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iO.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kD.prototype={
$1:function(a){if(!!J.R(a).$iby)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.eu.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c0.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cQ(t==null?"unknown":t)+"'"},
giB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.io.prototype={}
H.ie.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cQ(u)+"'"}}
H.bY.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bY))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gJ:function(a){var u,t=this.c
if(t==null)u=H.ck(this.a)
else u=typeof t!=="object"?J.cU(t):H.ck(t)
return(u^H.ck(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.cl(u))+"'")}}
H.f9.prototype={
i:function(a){return this.a}}
H.hY.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.K.prototype={
gl:function(a){return this.a},
gi1:function(a){return this.a===0},
ga3:function(a){return new H.h0(this,[H.aP(this,0)])},
giA:function(a){var u=this
return H.nk(u.ga3(u),new H.fV(u),H.aP(u,0),H.aP(u,1))},
cd:function(a,b){var u=this.b
if(u==null)return!1
return this.eY(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bq(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bq(r,b)
s=t==null?null:t.b
return s}else return q.i_(b)},
i_:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.d9(r,s.e7(a))
t=s.e8(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.d0(u==null?s.b=s.c1():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.d0(t==null?s.c=s.c1():t,b,c)}else s.i0(b,c)},
i0:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.c1()
u=r.e7(a)
t=r.d9(q,u)
if(t==null)r.c7(q,u,[r.c2(a,b)])
else{s=r.e8(t,a)
if(s>=0)t[s].b=b
else t.push(r.c2(a,b))}},
H:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aT(u))
t=t.c}},
d0:function(a,b,c){var u=this.bq(a,b)
if(u==null)this.c7(a,b,this.c2(b,c))
else u.b=c},
f8:function(){this.r=this.r+1&67108863},
c2:function(a,b){var u,t=this,s=new H.h_(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f8()
return s},
e7:function(a){return J.cU(a)&0x3ffffff},
e8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
i:function(a){return P.kW(this)},
bq:function(a,b){return a[b]},
d9:function(a,b){return a[b]},
c7:function(a,b,c){a[b]=c},
f1:function(a,b){delete a[b]},
eY:function(a,b){return this.bq(a,b)!=null},
c1:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c7(t,u,t)
this.f1(t,u)
return t}}
H.fV.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aP(u,1),args:[H.aP(u,0)]}}}
H.h_.prototype={}
H.h0.prototype={
gl:function(a){return this.a.a},
gS:function(a){var u=this.a,t=new H.h1(u,u.r)
t.c=u.e
return t}}
H.h1.prototype={
gF:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kg.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.kh.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ki.prototype={
$1:function(a){return this.a(a)}}
H.fU.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inA:1}
H.cg.prototype={$icg:1}
H.bl.prototype={$ibl:1}
H.dl.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.ch.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aN(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.M]},
$ay:function(){return[P.M]},
$ii:1,
$ai:function(){return[P.M]},
$iq:1,
$aq:function(){return[P.M]}}
H.dm.prototype={
m:function(a,b,c){H.aN(b,a,a.length)
a[b]=c},
$it:1,
$at:function(){return[P.w]},
$ay:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
H.hx.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.hy.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.hz.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.hA.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.hB.prototype={
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.dn.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aN(b,a,a.length)
return a[b]}}
H.ci.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aN(b,a,a.length)
return a[b]},
$ici:1,
$ibH:1}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
H.cF.prototype={}
P.jg.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:17}
P.jf.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jh.prototype={
$0:function(){this.a.$0()}}
P.ji.prototype={
$0:function(){this.a.$0()}}
P.eA.prototype={
eO:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bS(new P.jP(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eP:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bS(new P.jO(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idJ:1}
P.jP.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jO.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eF(u,q)}s.c=r
t.d.$1(s)}}
P.bL.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bM.prototype={
gF:function(a){var u=this.c
if(u==null)return this.b
return u.gF(u)},
w:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.w())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.bL){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aQ(u)
if(!!r.$ibM){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jL.prototype={
gS:function(a){return new P.bM(this.a())}}
P.dX.prototype={}
P.dE.prototype={}
P.ii.prototype={}
P.dJ.prototype={}
P.jY.prototype={}
P.k6.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dr():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jw.prototype={
is:function(a){var u,t,s,r=null
try{if(C.f===$.av){a.$0()
return}P.oK(r,r,this,a)}catch(s){u=H.aj(s)
t=H.ld(s)
P.mb(r,r,this,u,t)}},
it:function(a,b){var u,t,s,r=null
try{if(C.f===$.av){a.$1(b)
return}P.oL(r,r,this,a,b)}catch(s){u=H.aj(s)
t=H.ld(s)
P.mb(r,r,this,u,t)}},
iu:function(a,b){return this.it(a,b,null)},
hz:function(a){return new P.jx(this,a)},
dF:function(a,b){return new P.jy(this,a,b)}}
P.jx.prototype={
$0:function(){return this.a.is(this.b)}}
P.jy.prototype={
$1:function(a){return this.a.iu(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jt.prototype={
gS:function(a){var u=new P.eb(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
O:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eW(b)
return t}},
eW:function(a){var u=this.d
if(u==null)return!1
return this.bT(this.d8(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.d1(u==null?s.b=P.l3():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.d1(t==null?s.c=P.l3():t,b)}else return s.eQ(0,b)},
eQ:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.l3()
u=s.d3(b)
t=r[u]
if(t==null)r[u]=[s.bQ(b)]
else{if(s.bT(t,b)>=0)return!1
t.push(s.bQ(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.h8(this.c,b)
else return this.h7(0,b)},
h7:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.d8(r,b)
t=s.bT(u,b)
if(t<0)return!1
s.dq(u.splice(t,1)[0])
return!0},
d1:function(a,b){if(a[b]!=null)return!1
a[b]=this.bQ(b)
return!0},
h8:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dq(u)
delete a[b]
return!0},
d2:function(){this.r=1073741823&this.r+1},
bQ:function(a){var u,t=this,s=new P.ju(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.d2()
return s},
dq:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.d2()},
d3:function(a){return J.cU(a)&1073741823},
d8:function(a,b){return a[this.d3(b)]},
bT:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.ju.prototype={}
P.eb.prototype={
gF:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aT(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fQ.prototype={}
P.h2.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h3.prototype={$it:1,$ii:1,$iq:1}
P.y.prototype={
gS:function(a){return new H.bj(a,this.gl(a))},
L:function(a,b){return this.h(a,b)},
ix:function(a,b){var u,t,s=this,r=H.b([],[H.p2(s,a,"y",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.u(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
cK:function(a){return this.ix(a,!0)},
hQ:function(a,b,c,d){var u
P.b2(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kP(a,"[","]")}}
P.h6.prototype={}
P.h7.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a3.prototype={
H:function(a,b){var u,t
for(u=J.aQ(this.ga3(a));u.w();){t=u.gF(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.ak(this.ga3(a))},
i:function(a){return P.kW(a)},
$iT:1}
P.jQ.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h8.prototype={
h:function(a,b){return J.bX(this.a,b)},
m:function(a,b,c){J.kE(this.a,b,c)},
H:function(a,b){J.lm(this.a,b)},
gl:function(a){return J.ak(this.a)},
i:function(a){return J.a7(this.a)},
$iT:1}
P.dQ.prototype={}
P.jA.prototype={
a8:function(a,b){var u
for(u=J.aQ(b);u.w();)this.n(0,u.gF(u))},
i:function(a){return P.kP(this,"{","}")},
L:function(a,b){var u,t,s
P.lJ(b,"index")
for(u=P.o1(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
$it:1,
$ii:1}
P.ec.prototype={}
P.eG.prototype={}
P.f5.prototype={
i4:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.b2(a0,a1,b.length)
u=$.mK()
if(typeof a1!=="number")return H.u(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.G(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kf(C.a.G(b,n))
j=H.kf(C.a.G(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.Z("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.U("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.bE(m)
s=n
continue}}throw H.c(P.W("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.lq(b,p,a1,q,o,f)
else{e=C.c.bn(f-1,4)+1
if(e===1)throw H.c(P.W(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.b1(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lq(b,p,a1,q,o,d)
else{e=C.c.bn(d,4)
if(e===1)throw H.c(P.W(c,b,a1))
if(e>1)b=C.a.b1(b,a1,a1,e===2?"==":"=")}return b}}
P.f6.prototype={}
P.fb.prototype={}
P.fh.prototype={}
P.fw.prototype={}
P.fN.prototype={
i:function(a){return this.a}}
P.fM.prototype={
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
default:p=o}if(p!=null){if(q==null)q=new P.U("")
if(r>b)q.a+=C.a.v(a,b,r)
q.a+=p
b=r+1}}if(q==null)return
if(c>b)q.a+=J.mV(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iX.prototype={
ghP:function(){return C.M}}
P.iZ.prototype={
ce:function(a){var u,t,s,r=P.b2(0,null,a.length)
if(typeof r!=="number")return r.K()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jW(t)
if(s.f3(a,0,r)!==r)s.ds(J.mR(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oi(0,s.b,t.length)))}}
P.jW.prototype={
ds:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
if(b!==c&&(C.a.Z(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.G(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.ds(r,C.a.G(a,p)))s=p}else if(r<=2047){q=n.b
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
P.iY.prototype={
ce:function(a){var u,t,s,r,q,p,o,n,m=P.nN(!1,a,0,null)
if(m!=null)return m
u=P.b2(0,null,J.ak(a))
t=P.md(a,0,u)
if(t>0){s=P.co(a,0,t)
if(t===u)return s
r=new P.U(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.U("")
o=new P.jV(!1,r)
o.c=p
o.hC(a,q,u)
if(o.e>0){H.o(P.W("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bE(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jV.prototype={
hC:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.br(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ae()
if((r&192)!==128){q=P.W(k+C.c.bl(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.W("Overlong encoding of 0x"+C.c.bl(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.W("Character outside valid Unicode range: 0x"+C.c.bl(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bE(j)
l.c=!1}if(typeof c!=="number")return H.u(c)
q=s<c
for(;q;){p=P.md(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.co(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.W("Negative UTF-8 code unit: -0x"+C.c.bl(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.W(k+C.c.bl(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aO.prototype={}
P.ag.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ag&&this.a===b.a&&!0},
aZ:function(a,b){return C.c.aZ(this.a,b.a)},
gJ:function(a){var u=this.a
return(u^C.c.aW(u,30))&1073741823},
i:function(a){var u=this,t=P.n3(H.nw(u)),s=P.d3(H.nu(u)),r=P.d3(H.nq(u)),q=P.d3(H.nr(u)),p=P.d3(H.nt(u)),o=P.d3(H.nv(u)),n=P.n4(H.ns(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.M.prototype={}
P.bd.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.bd&&this.a===b.a},
gJ:function(a){return C.c.gJ(this.a)},
aZ:function(a,b){return C.c.aZ(this.a,b.a)},
i:function(a){var u,t,s,r=new P.ft(),q=this.a
if(q<0)return"-"+new P.bd(0-q).i(0)
u=r.$1(C.c.a7(q,6e7)%60)
t=r.$1(C.c.a7(q,1e6)%60)
s=new P.fs().$1(q%1e6)
return""+C.c.a7(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fs.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.ft.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.by.prototype={}
P.dr.prototype={
i:function(a){return"Throw of null."}}
P.ap.prototype={
gbS:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbR:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbS()+o+u
if(!q.a)return t
s=q.gbR()
r=P.kN(q.b)
return t+s+": "+r}}
P.bF.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fP.prototype={
gbS:function(){return"RangeError"},
gbR:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iQ.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iM.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cn.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fe.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kN(u)+"."}}
P.hI.prototype={
i:function(a){return"Out of Memory"},
$iby:1}
P.dC.prototype={
i:function(a){return"Stack Overflow"},
$iby:1}
P.fm.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e4.prototype={
i:function(a){return"Exception: "+this.a}}
P.fG.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.G(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.Z(f,q)
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
P.fI.prototype={}
P.w.prototype={}
P.i.prototype={
bM:function(a,b){return new H.cy(this,b,[H.lc(this,"i",0)])},
gl:function(a){var u,t=this.gS(this)
for(u=0;t.w();)++u
return u},
gaO:function(a){var u,t=this.gS(this)
if(!t.w())throw H.c(H.fR())
u=t.gF(t)
if(t.w())throw H.c(H.n9())
return u},
L:function(a,b){var u,t,s
P.lJ(b,"index")
for(u=this.gS(this),t=0;u.w();){s=u.gF(u)
if(b===t)return s;++t}throw H.c(P.O(b,this,"index",null,t))},
i:function(a){return P.n8(this,"(",")")}}
P.fS.prototype={}
P.q.prototype={$it:1,$ii:1}
P.T.prototype={}
P.bm.prototype={
gJ:function(a){return P.a4.prototype.gJ.call(this,this)},
i:function(a){return"null"}}
P.ae.prototype={}
P.a4.prototype={constructor:P.a4,$ia4:1,
t:function(a,b){return this===b},
gJ:function(a){return H.ck(this)},
i:function(a){return"Instance of '"+H.e(H.cl(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.U.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iV.prototype={
$2:function(a,b){var u,t,s,r=J.cO(b).e5(b,"=")
if(r===-1){if(b!=="")J.kE(a,P.l7(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.ab(b,r+1)
s=this.a
J.kE(a,P.l7(u,0,u.length,s,!0),P.l7(t,0,t.length,s,!0))}return a}}
P.iS.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv4 address, "+a,this.a,b))}}
P.iT.prototype={
$2:function(a,b){throw H.c(P.W("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iU.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eU(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bN.prototype={
geq:function(){return this.b},
gcs:function(a){var u=this.c
if(u==null)return""
if(C.a.a6(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbF:function(a){var u=this.d
if(u==null)return P.m4(this.a)
return u},
gcE:function(a){var u=this.f
return u==null?"":u},
ge0:function(){var u=this.r
return u==null?"":u},
el:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a6(u,"/"))u="/"+u
s=P.l5(null,0,0,b)
return new P.bN(q,o,m,n,u,s,r.r)},
gcF:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dQ(P.lV(t==null?"":t),[u,u])
t=u}return t},
ge1:function(){return this.c!=null},
ge4:function(){return this.f!=null},
ge2:function(){return this.r!=null},
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
if(!!J.R(b).$il_)if(s.a==b.gbN())if(s.c!=null===b.ge1())if(s.b==b.geq())if(s.gcs(s)==b.gcs(b))if(s.gbF(s)==b.gbF(b))if(s.e===b.gej(b)){u=s.f
t=u==null
if(!t===b.ge4()){if(t)u=""
if(u===b.gcE(b)){u=s.r
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
gJ:function(a){var u=this.z
return u==null?this.z=C.a.gJ(this.i(0)):u},
$il_:1,
gbN:function(){return this.a},
gej:function(a){return this.e}}
P.jR.prototype={
$1:function(a){throw H.c(P.W("Invalid port",this.a,this.b+1))}}
P.jS.prototype={
$1:function(a){return P.eH(C.W,a,C.e,!1)}}
P.jU.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eH(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eH(C.h,b,C.e,!0))}}}
P.jT.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aQ(b),t=this.a;u.w();)t.$2(a,u.gF(u))}}
P.iR.prototype={
gep:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bB(u,"?",o)
s=u.length
if(t>=0){r=P.cK(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jm("data",p,p,p,P.cK(u,o,s,C.z,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.k1.prototype={
$1:function(a){return new Uint8Array(96)}}
P.k0.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mS(u,0,96,b)
return u},
$S:18}
P.k2.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.G(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k3.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.G(b,0),t=C.a.G(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jD.prototype={
ge1:function(){return this.c>0},
ge3:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.B()
t=this.e
if(typeof t!=="number")return H.u(t)
t=u+1<t
u=t}else u=!1
return u},
ge4:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
ge2:function(){return this.r<this.a.length},
gda:function(){return this.b===4&&C.a.a6(this.a,"http")},
gdc:function(){return this.b===5&&C.a.a6(this.a,"https")},
gbN:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gda())q=t.x="http"
else if(t.gdc()){t.x="https"
q="https"}else if(q===4&&C.a.a6(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a6(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
geq:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gcs:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbF:function(a){var u,t=this
if(t.ge3()){u=t.d
if(typeof u!=="number")return u.B()
return P.eU(C.a.v(t.a,u+1,t.e),null,null)}if(t.gda())return 80
if(t.gdc())return 443
return 0},
gej:function(a){return C.a.v(this.a,this.e,this.f)},
gcE:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.v(this.a,u+1,t):""},
ge0:function(){var u=this.r,t=this.a
return u<t.length?C.a.ab(t,u+1):""},
gcF:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.X
t=P.h
return new P.dQ(P.lV(u.gcE(u)),[t,t])},
el:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbN(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.ge3()?p.gbF(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a6(t,"/"))t="/"+t
r=P.l5(o,0,0,b)
s=p.r
q=s<l.length?C.a.ab(l,s+1):o
return new P.bN(n,k,u,j,t,r,q)},
gJ:function(a){var u=this.y
return u==null?this.y=C.a.gJ(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$il_&&this.a===b.i(0)},
i:function(a){return this.a},
$il_:1}
P.jm.prototype={}
W.r.prototype={}
W.eX.prototype={
gl:function(a){return a.length}}
W.eY.prototype={
i:function(a){return String(a)}}
W.eZ.prototype={
i:function(a){return String(a)}}
W.bu.prototype={$ibu:1}
W.bv.prototype={$ibv:1}
W.bw.prototype={
cO:function(a,b,c){if(c!=null)return a.getContext(b,P.oU(c))
return a.getContext(b)},
eu:function(a,b){return this.cO(a,b,null)},
$ibw:1}
W.bc.prototype={
gl:function(a){return a.length}}
W.fi.prototype={
gl:function(a){return a.length}}
W.J.prototype={$iJ:1}
W.c1.prototype={
gl:function(a){return a.length}}
W.fj.prototype={}
W.al.prototype={}
W.ay.prototype={}
W.fk.prototype={
gl:function(a){return a.length}}
W.fl.prototype={
gl:function(a){return a.length}}
W.fo.prototype={
gl:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.fp.prototype={
i:function(a){return String(a)}}
W.d5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[[P.ab,P.ae]]},
$iB:1,
$aB:function(){return[[P.ab,P.ae]]},
$ay:function(){return[[P.ab,P.ae]]},
$ii:1,
$ai:function(){return[[P.ab,P.ae]]},
$iq:1,
$aq:function(){return[[P.ab,P.ae]]}}
W.d6.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaN(a))+" x "+H.e(this.gaH(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$iab&&a.left===u.gbD(b)&&a.top===u.gbJ(b)&&this.gaN(a)===u.gaN(b)&&this.gaH(a)===u.gaH(b)},
gJ:function(a){return W.m2(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(this.gaN(a)),C.d.gJ(this.gaH(a)))},
gdH:function(a){return a.bottom},
gaH:function(a){return a.height},
gbD:function(a){return a.left},
gcI:function(a){return a.right},
gbJ:function(a){return a.top},
gaN:function(a){return a.width},
$iab:1,
$aab:function(){return[P.ae]}}
W.fq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
W.fr.prototype={
gl:function(a){return a.length}}
W.jk.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gS:function(a){var u=this.cK(this)
return new J.a8(u,u.length)},
$at:function(){return[W.S]},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$aq:function(){return[W.S]}}
W.S.prototype={
ghy:function(a){return new W.jn(a)},
gcc:function(a){return new W.jk(a,a.children)},
gdJ:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.ab(u,t,s,r,[P.ae])},
i:function(a){return a.localName},
am:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lx
if(u==null){u=H.b([],[W.b0])
t=new W.dq(u)
u.push(W.m1(null))
u.push(W.m3())
$.lx=t
d=t}else d=u
u=$.lw
if(u==null){u=new W.eI(d)
$.lw=u
c=u}else{u.a=d
c=u}}if($.aU==null){u=document
t=u.implementation.createHTMLDocument("")
$.aU=t
$.kM=t.createRange()
s=$.aU.createElement("base")
s.href=u.baseURI
$.aU.head.appendChild(s)}u=$.aU
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aU
if(!!this.$ibv)r=u.body
else{r=u.createElement(a.tagName)
$.aU.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.O(C.U,a.tagName)){$.kM.selectNodeContents(r)
q=$.kM.createContextualFragment(b)}else{r.innerHTML=b
q=$.aU.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aU.body
if(r==null?u!=null:r!==u)J.lo(r)
c.cP(q)
document.adoptNode(q)
return q},
hF:function(a,b,c){return this.am(a,b,c,null)},
ew:function(a,b){a.textContent=null
a.appendChild(this.am(a,b,null,null))},
$iS:1,
gen:function(a){return a.tagName}}
W.fv.prototype={
$1:function(a){return!!J.R(a).$iS}}
W.k.prototype={$ik:1}
W.f.prototype={
ht:function(a,b,c,d){if(c!=null)this.eR(a,b,c,!1)},
eR:function(a,b,c,d){return a.addEventListener(b,H.bS(c,1),!1)}}
W.ar.prototype={$iar:1}
W.c4.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.ar]},
$iB:1,
$aB:function(){return[W.ar]},
$ay:function(){return[W.ar]},
$ii:1,
$ai:function(){return[W.ar]},
$iq:1,
$aq:function(){return[W.ar]},
$ic4:1}
W.fB.prototype={
gl:function(a){return a.length}}
W.fF.prototype={
gl:function(a){return a.length}}
W.az.prototype={$iaz:1}
W.fL.prototype={
gl:function(a){return a.length}}
W.c6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$iq:1,
$aq:function(){return[W.E]}}
W.aX.prototype={$iaX:1,
gdK:function(a){return a.data}}
W.c7.prototype={$ic7:1}
W.bB.prototype={$ibB:1}
W.h4.prototype={
i:function(a){return String(a)}}
W.hq.prototype={
gl:function(a){return a.length}}
W.ce.prototype={$ice:1}
W.hr.prototype={
h:function(a,b){return P.b7(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b7(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.H(a,new W.hs(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hs.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ht.prototype={
h:function(a,b){return P.b7(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b7(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.H(a,new W.hu(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hu.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aC.prototype={$iaC:1}
W.hv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aC]},
$iB:1,
$aB:function(){return[W.aC]},
$ay:function(){return[W.aC]},
$ii:1,
$ai:function(){return[W.aC]},
$iq:1,
$aq:function(){return[W.aC]}}
W.aD.prototype={$iaD:1}
W.a5.prototype={
gaO:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lM("No elements"))
if(t>1)throw H.c(P.lM("More than one element"))
return u.firstChild},
a8:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gS:function(a){var u=this.a.childNodes
return new W.d9(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$at:function(){return[W.E]},
$ay:function(){return[W.E]},
$ai:function(){return[W.E]},
$aq:function(){return[W.E]}}
W.E.prototype={
im:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
iq:function(a,b){var u,t
try{u=a.parentNode
J.mP(u,b,a)}catch(t){H.aj(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eB(a):u},
ha:function(a,b,c){return a.replaceChild(b,c)},
$iE:1}
W.dp.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$iq:1,
$aq:function(){return[W.E]}}
W.aE.prototype={$iaE:1,
gl:function(a){return a.length}}
W.hL.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aE]},
$iB:1,
$aB:function(){return[W.aE]},
$ay:function(){return[W.aE]},
$ii:1,
$ai:function(){return[W.aE]},
$iq:1,
$aq:function(){return[W.aE]}}
W.hW.prototype={
h:function(a,b){return P.b7(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b7(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.H(a,new W.hX(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hX.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hZ.prototype={
gl:function(a){return a.length}}
W.aH.prototype={$iaH:1}
W.ia.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aH]},
$iB:1,
$aB:function(){return[W.aH]},
$ay:function(){return[W.aH]},
$ii:1,
$ai:function(){return[W.aH]},
$iq:1,
$aq:function(){return[W.aH]}}
W.aI.prototype={$iaI:1}
W.ib.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aI]},
$iB:1,
$aB:function(){return[W.aI]},
$ay:function(){return[W.aI]},
$ii:1,
$ai:function(){return[W.aI]},
$iq:1,
$aq:function(){return[W.aI]}}
W.aJ.prototype={$iaJ:1,
gl:function(a){return a.length}}
W.ig.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
H:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga3:function(a){var u=H.b([],[P.h])
this.H(a,new W.ih(u))
return u},
gl:function(a){return a.length},
$aa3:function(){return[P.h,P.h]},
$iT:1,
$aT:function(){return[P.h,P.h]}}
W.ih.prototype={
$2:function(a,b){return this.a.push(a)}}
W.at.prototype={$iat:1}
W.dF.prototype={
am:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=W.n5("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a5(t).a8(0,new W.a5(u))
return t}}
W.ik.prototype={
am:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.am(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaO(u)
s.toString
u=new W.a5(s)
r=u.gaO(u)
t.toString
r.toString
new W.a5(t).a8(0,new W.a5(r))
return t}}
W.il.prototype={
am:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bO(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.B.am(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaO(u)
t.toString
s.toString
new W.a5(t).a8(0,new W.a5(s))
return t}}
W.cp.prototype={$icp:1}
W.aK.prototype={$iaK:1}
W.au.prototype={$iau:1}
W.ip.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.au]},
$iB:1,
$aB:function(){return[W.au]},
$ay:function(){return[W.au]},
$ii:1,
$ai:function(){return[W.au]},
$iq:1,
$aq:function(){return[W.au]}}
W.iq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aK]},
$iB:1,
$aB:function(){return[W.aK]},
$ay:function(){return[W.aK]},
$ii:1,
$ai:function(){return[W.aK]},
$iq:1,
$aq:function(){return[W.aK]}}
W.iv.prototype={
gl:function(a){return a.length}}
W.aL.prototype={$iaL:1}
W.bG.prototype={$ibG:1}
W.iz.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aL]},
$iB:1,
$aB:function(){return[W.aL]},
$ay:function(){return[W.aL]},
$ii:1,
$ai:function(){return[W.aL]},
$iq:1,
$aq:function(){return[W.aL]}}
W.iA.prototype={
gl:function(a){return a.length}}
W.bn.prototype={}
W.iW.prototype={
i:function(a){return String(a)}}
W.jd.prototype={
gl:function(a){return a.length}}
W.bp.prototype={
ghI:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghH:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibp:1}
W.cz.prototype={
hc:function(a,b){return a.requestAnimationFrame(H.bS(b,1))},
f2:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jl.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.J]},
$iB:1,
$aB:function(){return[W.J]},
$ay:function(){return[W.J]},
$ii:1,
$ai:function(){return[W.J]},
$iq:1,
$aq:function(){return[W.J]}}
W.e_.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$iab&&a.left===u.gbD(b)&&a.top===u.gbJ(b)&&a.width===u.gaN(b)&&a.height===u.gaH(b)},
gJ:function(a){return W.m2(C.d.gJ(a.left),C.d.gJ(a.top),C.d.gJ(a.width),C.d.gJ(a.height))},
gaH:function(a){return a.height},
gaN:function(a){return a.width}}
W.jq.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.az]},
$iB:1,
$aB:function(){return[W.az]},
$ay:function(){return[W.az]},
$ii:1,
$ai:function(){return[W.az]},
$iq:1,
$aq:function(){return[W.az]}}
W.eh.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.E]},
$iB:1,
$aB:function(){return[W.E]},
$ay:function(){return[W.E]},
$ii:1,
$ai:function(){return[W.E]},
$iq:1,
$aq:function(){return[W.E]}}
W.jE.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.aJ]},
$iB:1,
$aB:function(){return[W.aJ]},
$ay:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$iq:1,
$aq:function(){return[W.aJ]}}
W.jJ.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$it:1,
$at:function(){return[W.at]},
$iB:1,
$aB:function(){return[W.at]},
$ay:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$iq:1,
$aq:function(){return[W.at]}}
W.jj.prototype={
H:function(a,b){var u,t,s,r,q
for(u=this.ga3(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga3:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa3:function(){return[P.h,P.h]},
$aT:function(){return[P.h,P.h]}}
W.jn.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga3(this).length}}
W.jo.prototype={}
W.jp.prototype={
$1:function(a){return this.a.$1(a)}}
W.cA.prototype={
eK:function(a){var u
if($.cB.gi1($.cB)){for(u=0;u<262;++u)$.cB.m(0,C.T[u],W.p4())
for(u=0;u<12;++u)$.cB.m(0,C.p[u],W.p5())}},
aX:function(a){return $.mL().O(0,W.c2(a))},
aw:function(a,b,c){var u=$.cB.h(0,H.e(W.c2(a))+"::"+b)
if(u==null)u=$.cB.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$ib0:1}
W.N.prototype={
gS:function(a){return new W.d9(a,this.gl(a))}}
W.dq.prototype={
aX:function(a){return C.b.dA(this.a,new W.hD(a))},
aw:function(a,b,c){return C.b.dA(this.a,new W.hC(a,b,c))},
$ib0:1}
W.hD.prototype={
$1:function(a){return a.aX(this.a)}}
W.hC.prototype={
$1:function(a){return a.aw(this.a,this.b,this.c)}}
W.ep.prototype={
eN:function(a,b,c,d){var u,t,s
this.a.a8(0,c)
u=b.bM(0,new W.jB())
t=b.bM(0,new W.jC())
this.b.a8(0,u)
s=this.c
s.a8(0,C.w)
s.a8(0,t)},
aX:function(a){return this.a.O(0,W.c2(a))},
aw:function(a,b,c){var u=this,t=W.c2(a),s=u.c
if(s.O(0,H.e(t)+"::"+b))return u.d.hw(c)
else if(s.O(0,"*::"+b))return u.d.hw(c)
else{s=u.b
if(s.O(0,H.e(t)+"::"+b))return!0
else if(s.O(0,"*::"+b))return!0
else if(s.O(0,H.e(t)+"::*"))return!0
else if(s.O(0,"*::*"))return!0}return!1},
$ib0:1}
W.jB.prototype={
$1:function(a){return!C.b.O(C.p,a)}}
W.jC.prototype={
$1:function(a){return C.b.O(C.p,a)}}
W.jM.prototype={
aw:function(a,b,c){if(this.eE(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.O(0,b)
return!1}}
W.jN.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jK.prototype={
aX:function(a){var u=J.R(a)
if(!!u.$icm)return!1
u=!!u.$il
if(u&&W.c2(a)==="foreignObject")return!1
if(u)return!0
return!1},
aw:function(a,b,c){if(b==="is"||C.a.a6(b,"on"))return!1
return this.aX(a)},
$ib0:1}
W.d9.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bX(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gF:function(a){return this.d}}
W.b0.prototype={}
W.jz.prototype={}
W.eI.prototype={
cP:function(a){new W.jX(this).$2(a,null)},
ba:function(a,b){if(b==null)J.lo(a)
else b.removeChild(a)},
hh:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mT(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.aj(r)}t="element unprintable"
try{t=J.a7(a)}catch(r){H.aj(r)}try{s=W.c2(a)
this.hg(a,b,p,t,s,o,n)}catch(r){if(H.aj(r) instanceof P.ap)throw r
else{this.ba(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
hg:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.ba(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aX(a)){p.ba(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aw(a,"is",g)){p.ba(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga3(f)
t=H.b(u.slice(0),[H.aP(u,0)])
for(s=f.ga3(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.aw(a,J.mW(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$icp)p.cP(a.content)}}
W.jX.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.hh(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.ba(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.aj(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dZ.prototype={}
W.e0.prototype={}
W.e1.prototype={}
W.e2.prototype={}
W.e3.prototype={}
W.e5.prototype={}
W.e6.prototype={}
W.e7.prototype={}
W.e8.prototype={}
W.ed.prototype={}
W.ee.prototype={}
W.ef.prototype={}
W.eg.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.em.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.cG.prototype={}
W.cH.prototype={}
W.eq.prototype={}
W.er.prototype={}
W.ev.prototype={}
W.ey.prototype={}
W.ez.prototype={}
W.cI.prototype={}
W.cJ.prototype={}
W.eB.prototype={}
W.eC.prototype={}
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
P.jF.prototype={
cq:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bL:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.R(a)
if(!!u.$iag)return new Date(a.a)
if(!!u.$inA)throw H.c(P.iN("structured clone of RegExp"))
if(!!u.$iar)return a
if(!!u.$ibu)return a
if(!!u.$ic4)return a
if(!!u.$iaX)return a
if(!!u.$icg||!!u.$ibl||!!u.$ice)return a
if(!!u.$iT){t=p.cq(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.H(a,new P.jH(o,p))
return o.a}if(!!u.$iq){t=p.cq(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hE(a,t)}if(!!u.$inc){t=p.cq(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hX(a,new P.jI(o,p))
return o.b}throw H.c(P.iN("structured clone of other type"))},
hE:function(a,b){var u,t=J.br(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.u(s)
u=0
for(;u<s;++u){q=this.bL(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jH.prototype={
$2:function(a,b){this.a.a[a]=this.b.bL(b)},
$S:3}
P.jI.prototype={
$2:function(a,b){this.a.b[a]=this.b.bL(b)},
$S:3}
P.eF.prototype={$iaX:1,
gdK:function(a){return this.a}}
P.k7.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jG.prototype={
hX:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fC.prototype={
gbr:function(){var u=this.b,t=H.lc(u,"y",0)
return new H.cb(new H.cy(u,new P.fD(),[t]),new P.fE(),[t,W.S])},
m:function(a,b,c){var u=this.gbr()
J.mU(u.b.$1(J.eW(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.ak(this.gbr().a)},
h:function(a,b){var u=this.gbr()
return u.b.$1(J.eW(u.a,b))},
gS:function(a){var u=P.kV(this.gbr(),!1,W.S)
return new J.a8(u,u.length)},
$at:function(){return[W.S]},
$ay:function(){return[W.S]},
$ai:function(){return[W.S]},
$aq:function(){return[W.S]}}
P.fD.prototype={
$1:function(a){return!!J.R(a).$iS}}
P.fE.prototype={
$1:function(a){return H.j(a,"$iS")}}
P.jv.prototype={
gcI:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.u(t)
return u+t},
gdH:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.B()
if(typeof t!=="number")return H.u(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$iab){t=q.a
if(t==u.gbD(b)){s=q.b
if(s==u.gbJ(b)){r=q.c
if(typeof t!=="number")return t.B()
if(typeof r!=="number")return H.u(r)
if(t+r===u.gcI(b)){t=q.d
if(typeof s!=="number")return s.B()
if(typeof t!=="number")return H.u(t)
u=s+t===u.gdH(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gJ:function(a){var u=this,t=u.a,s=J.cU(t),r=u.b,q=J.cU(r),p=u.c
if(typeof t!=="number")return t.B()
if(typeof p!=="number")return H.u(p)
p=C.c.gJ(t+p)
t=u.d
if(typeof r!=="number")return r.B()
if(typeof t!=="number")return H.u(t)
t=C.c.gJ(r+t)
return P.o0(P.js(P.js(P.js(P.js(0,s),q),p),t))}}
P.ab.prototype={
gbD:function(a){return this.a},
gbJ:function(a){return this.b},
gaN:function(a){return this.c},
gaH:function(a){return this.d}}
P.aY.prototype={$iaY:1}
P.fY.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.aY]},
$ay:function(){return[P.aY]},
$ii:1,
$ai:function(){return[P.aY]},
$iq:1,
$aq:function(){return[P.aY]}}
P.b1.prototype={$ib1:1}
P.hG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.b1]},
$ay:function(){return[P.b1]},
$ii:1,
$ai:function(){return[P.b1]},
$iq:1,
$aq:function(){return[P.b1]}}
P.hO.prototype={
gl:function(a){return a.length}}
P.cm.prototype={$icm:1}
P.ij.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.h]},
$ay:function(){return[P.h]},
$ii:1,
$ai:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
P.l.prototype={
gcc:function(a){return new P.fC(a,new W.a5(a))},
am:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.b0])
p.push(W.m1(null))
p.push(W.m3())
p.push(new W.jK())
c=new W.eI(new W.dq(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hF(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a5(s)
q=p.gaO(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$il:1}
P.b3.prototype={$ib3:1}
P.iB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[P.b3]},
$ay:function(){return[P.b3]},
$ii:1,
$ai:function(){return[P.b3]},
$iq:1,
$aq:function(){return[P.b3]}}
P.e9.prototype={}
P.ea.prototype={}
P.ek.prototype={}
P.el.prototype={}
P.ew.prototype={}
P.ex.prototype={}
P.eD.prototype={}
P.eE.prototype={}
P.bH.prototype={$it:1,
$at:function(){return[P.w]},
$ii:1,
$ai:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
P.f0.prototype={
gl:function(a){return a.length}}
P.f1.prototype={
h:function(a,b){return P.b7(a.get(b))},
H:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b7(u.value[1]))}},
ga3:function(a){var u=H.b([],[P.h])
this.H(a,new P.f2(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
P.f2.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f3.prototype={
gl:function(a){return a.length}}
P.bt.prototype={}
P.hH.prototype={
gl:function(a){return a.length}}
P.dY.prototype={}
P.dw.prototype={
iv:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaX)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oV(g))
return}if(!!t.$ic7)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cV("Incorrect number or type of arguments"))}}
P.id.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.O(b,a,null,null,null))
return P.b7(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$it:1,
$at:function(){return[[P.T,,,]]},
$ay:function(){return[[P.T,,,]]},
$ii:1,
$ai:function(){return[[P.T,,,]]},
$iq:1,
$aq:function(){return[[P.T,,,]]}}
P.es.prototype={}
P.et.prototype={}
K.aR.prototype={
aI:function(a,b){return!0},
i:function(a){return"all"}}
K.da.prototype={
aI:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)if(u[s].aI(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bk.prototype={}
K.aa.prototype={
aI:function(a,b){return!this.eA(0,b)},
i:function(a){return"!["+this.cT(0)+"]"}}
K.hR.prototype={
aI:function(a,b){if(typeof b!=="number")return H.u(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bE(this.a),t=H.bE(this.b)
return u+".."+t}}
K.i_.prototype={
eI:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
u=P.w
t=new H.K([u,P.aO])
for(s=new H.bj(a,a.gl(a));s.w();)t.m(0,s.d,!0)
r=P.kV(t.ga3(t),!0,u)
C.b.ey(r)
this.a=r},
aI:function(a,b){return C.b.O(this.a,b)},
i:function(a){return P.co(this.a,0,null)}}
L.dD.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dN(this.a.k(0,b))
r.a=H.b([],[K.bk])
r.c=!1
this.c.push(r)
return r},
hS:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.aI(0,a))return r}return},
i:function(a){return this.b},
dn:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.O(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga3(n),n=n.gS(n);n.w();){t=n.gF(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.O(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.n)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dK.prototype={
i:function(a){var u=H.li(this.b,"\n","\\n"),t=H.li(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dL.prototype={
aK:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.n)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.iw.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dD(this,b)
u.c=H.b([],[L.dN])
this.a.m(0,b,u)}return u},
T:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dL(a)
u=P.h
t.c=new H.K([u,u])
this.b.m(0,a,t)}return t},
cL:function(a){return this.iz(a)},
iz:function(a){var u=this
return P.on(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cL(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cG(c,0)
else{if(!t.w()){s=3
break}l=t.d}d.push(l);++o
k=g.hS(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.co(d,0,null)
throw H.c(P.m("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.o(P.z("removeRange"))
P.b2(0,m,d.length)
d.splice(0,m-0)
C.b.a8(c,d)
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
if(g.d!=null){j=P.co(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dK(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.O(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nZ()
case 1:return P.o_(q)}}},L.dK)},
i:function(a){var u,t=new P.U(""),s=this.d
if(s!=null)t.a=s.dn()+"\n"
for(s=this.a,s=s.giA(s),s=s.gS(s);s.w();){u=s.gF(s)
if(u!=this.d)t.a+=u.dn()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dN.prototype={
i:function(a){return this.b.b+": "+this.cT(0)}}
O.aS.prototype={
bp:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cQ:function(a,b,c){this.b=b
this.c=a},
b3:function(a,b){return this.cQ(a,null,b)},
df:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
cX:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gS:function(a){var u=this.a
return new J.a8(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.lc(s,"aS",0)]
if(s.df(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.cX(t,H.b([b],r))}},
a8:function(a,b){var u,t
if(this.df(b)){u=this.a
t=u.length
C.b.a8(u,b)
this.cX(t,b)}},
$ii:1}
O.cd.prototype={
gl:function(a){return this.a.length},
gq:function(){var u=this.b
return u==null?this.b=D.G():u},
aP:function(){var u=this.b
if(u!=null)u.E(null)},
ga4:function(a){var u=this.a
if(u.length>0)return C.b.gay(u)
else return V.bC()},
bH:function(a){var u=this.a
if(a==null)u.push(V.bC())
else u.push(a)
this.aP()},
aJ:function(){var u=this.a
if(u.length>0){u.pop()
this.aP()}}}
E.f7.prototype={}
E.aV.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gq().D(0,s.geg())
u=s.c
if(u!=null)u.gq().n(0,s.geg())
t=new D.C("shape",r,s.c)
t.b=!0
s.bE(t)}},
ar:function(a,b){var u
for(u=this.y.a,u=new J.a8(u,u.length);u.w();)u.d.ar(0,b)},
ag:function(a){var u,t=this,s=a.dx
s.a.push(s.ga4(s))
s.aP()
a.cD(t.f)
s=a.dy
u=(s&&C.b).gay(s)
if(u!=null&&t.d!=null)u.ek(a,t)
for(s=t.y.a,s=new J.a8(s,s.length);s.w();)s.d.ag(a)
a.cC()
a.dx.aJ()},
bE:function(a){var u=this.z
if(u!=null)u.E(a)},
W:function(){return this.bE(null)},
eh:function(a){this.e=null
this.bE(a)},
ia:function(){return this.eh(null)},
ef:function(a){this.bE(a)},
i7:function(){return this.ef(null)},
i6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gee(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bz()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
i9:function(a,b){var u,t
for(u=b.gS(b),t=this.gee();u.w();)u.gF(u).gq().D(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.hS.prototype={
eH:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ag(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cd()
t=[V.aZ]
u.a=H.b([],t)
u.gq().n(0,new E.hT(s))
s.cy=u
u=new O.cd()
u.a=H.b([],t)
u.gq().n(0,new E.hU(s))
s.db=u
u=new O.cd()
u.a=H.b([],t)
u.gq().n(0,new E.hV(s))
s.dx=u
u=H.b([],[O.dG])
s.dy=u
u.push(null)
s.fr=new H.K([P.h,A.dx])},
gil:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga4(s)
u=t.db
u=t.z=s.u(0,u.ga4(u))
s=u}return s},
cD:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gay(u):a)},
cC:function(){var u=this.dy
if(u.length>1)u.pop()},
dz:function(a){var u=a.b
if(u.length===0)throw H.c(P.m("May not cache a shader with no name."))
if(this.fr.cd(0,u))throw H.c(P.m('Shader cache already contains a shader by the name "'+u+'".'))
this.fr.m(0,u,a)}}
E.hT.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hU.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hV.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dI.prototype={
d_:function(a){this.em()},
cZ:function(){return this.d_(null)},
ghY:function(){var u,t=this,s=Date.now(),r=C.c.a7(P.lv(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ag(s,!1)
return u/r},
dh:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.u()
if(typeof r!=="number")return H.u(r)
u=C.d.cr(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.u()
t=C.d.cr(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lP(C.n,s.gir())}},
em:function(){if(!this.cx){this.cx=!0
var u=window
C.D.f2(u)
C.D.hc(u,W.me(new E.iu(this),P.ae))}},
ip:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.dh()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ag(r,!1)
s.y=P.lv(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aP()
r=s.db
C.b.sl(r.a,0)
r.aP()
r=s.dx
C.b.sl(r.a,0)
r.aP()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.ag(p.e)}s=p.Q
if(s!=null)s.E(null)}catch(q){u=H.aj(q)
t=H.ld(q)
P.lh("Error: "+H.e(u))
P.lh("Stack: "+H.e(t))
throw H.c(u)}}}
E.iu.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ip()}}}
Z.dV.prototype={}
Z.cY.prototype={
a2:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aj(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.dW.prototype={}
Z.c_.prototype={
aG:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
a2:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].a2(a)},
aM:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
ag:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.bA.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.cl(this.c))+"'")+"]"}}
Z.b6.prototype={
gcS:function(a){var u=this.a,t=(u&$.aw().a)!==0?3:0
if((u&$.ba().a)!==0)t+=3
if((u&$.b9().a)!==0)t+=3
if((u&$.bs().a)!==0)t+=2
if((u&$.bb().a)!==0)t+=3
if((u&$.cR().a)!==0)t+=3
if((u&$.cS().a)!==0)t+=4
if((u&$.bW().a)!==0)++t
return(u&$.b8().a)!==0?t+4:t},
hx:function(a){var u,t=$.aw(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.ba()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b9()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bs()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bb()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cS()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b8()
if((s&t.a)!==0)if(u===a)return t
return $.mJ()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b6))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.aw().a)!==0)u.push("Pos")
if((t&$.ba().a)!==0)u.push("Norm")
if((t&$.b9().a)!==0)u.push("Binm")
if((t&$.bs().a)!==0)u.push("Txt2D")
if((t&$.bb().a)!==0)u.push("TxtCube")
if((t&$.cR().a)!==0)u.push("Clr3")
if((t&$.cS().a)!==0)u.push("Clr4")
if((t&$.bW().a)!==0)u.push("Weight")
if((t&$.b8().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.fa.prototype={}
D.bz.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.Z]}]):u).push(b)},
D:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.O(s,b)
if(s===!0){s=t.a
u=(s&&C.b).D(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.O(s,b)
if(s===!0){s=t.b
u=(s&&C.b).D(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.Z()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.H(P.kV(u,!0,{func:1,ret:-1,args:[D.Z]}),new D.fy(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.Z]}])
C.b.H(u,new D.fz(q))}return!0},
hN:function(){return this.E(null)},
az:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.fy.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fz.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.Z.prototype={}
D.be.prototype={}
D.bf.prototype={}
D.C.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cZ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.df.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.df))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fX.prototype={
ih:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
ib:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.di.prototype={}
X.h5.prototype={
b8:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.u()
u=b.b
t=q.ch
if(typeof u!=="number")return u.u()
s=o.B(0,new V.X(n*m,u*t))
t=q.a.gaY()
r=new X.b_(a,V.aF(),q.x,t,s)
r.b=!0
q.z=new P.ag(p,!1)
q.x=s
return r},
cB:function(a,b){this.r=a.a
return!1},
bi:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.ev()
if(typeof u!=="number")return u.ae()
this.r=(u&~t)>>>0
return!1},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b8(a,b))
return!0},
ii:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaY()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.u()
q=a.b
p=o.cy
if(typeof q!=="number")return q.u()
t=new X.cf(new V.L(s*r,q*p),u,t)
t.b=!0
n.E(t)
return!0},
fH:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.di(c,r.a.gaY(),b)
s.b=!0
t.E(s)
r.y=new P.ag(u,!1)
r.x=V.aF()}}
X.am.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.am))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b_.prototype={}
X.hw.prototype={
bU:function(a,b,c){var u=this,t=new P.ag(Date.now(),!1),s=u.a.gaY(),r=new X.b_(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cB:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.bU(a,b,!0))
return!0},
bi:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.ev()
if(typeof t!=="number")return t.ae()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.bU(a,b,!0))
return!0},
bh:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.bU(a,b,!1))
return!0},
ij:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaY()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.u()
r=a.b
q=p.ch
if(typeof r!=="number")return r.u()
u=new X.cf(new V.L(t*s,r*q),u,b)
u.b=!0
o.E(u)
return!0},
gdM:function(){var u=this.b
return u==null?this.b=D.G():u},
gcM:function(){var u=this.c
return u==null?this.c=D.G():u},
ged:function(){var u=this.d
return u==null?this.d=D.G():u}}
X.cf.prototype={}
X.hN.prototype={}
X.dM.prototype={}
X.iy.prototype={
b8:function(a,b){var u=this,t=new P.ag(Date.now(),!1),s=a.length>0?a[0]:V.aF(),r=u.a.gaY(),q=new X.dM(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ig:function(a){var u=this.b
if(u==null)return!1
u.E(this.b8(a,!0))
return!0},
ic:function(a){var u=this.c
if(u==null)return!1
u.E(this.b8(a,!0))
return!0},
ie:function(a){var u=this.d
if(u==null)return!1
u.E(this.b8(a,!1))
return!0}}
X.dR.prototype={
gaY:function(){var u=this.a,t=C.i.gdJ(u).c
t.toString
u=C.i.gdJ(u).d
u.toString
return V.lK(0,0,t,u)},
d5:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.df(u,new X.am(t,a.altKey,a.shiftKey))},
aV:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
c8:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
aD:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.K()
u=t.top
if(typeof r!=="number")return r.K()
return new V.X(s-q,r-u)},
b9:function(a){return new V.L(a.movementX,a.movementY)},
c3:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
q=C.d.ap(r.pageX)
C.d.ap(r.pageY)
p=o.left
C.d.ap(r.pageX)
n.push(new V.X(q-p,C.d.ap(r.pageY)-o.top))}return n},
aB:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.am(t,a.altKey,a.shiftKey))},
bV:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.K()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.K()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fB:function(a){this.f=!0},
fk:function(a){this.f=!1},
ft:function(a){if(this.f&&this.bV(a))a.preventDefault()},
fF:function(a){var u
if(!this.f)return
u=this.d5(a)
this.b.ih(u)},
fD:function(a){var u
if(!this.f)return
u=this.d5(a)
this.b.ib(u)},
fJ:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aV(a)
if(r.x){u=r.aB(a)
t=r.b9(a)
if(r.d.cB(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aB(a)
s=r.aD(a)
if(r.c.cB(u,s))a.preventDefault()},
fN:function(a){var u,t,s,r=this
r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bi(u,s))a.preventDefault()},
fz:function(a){var u,t,s,r=this
if(!r.bV(a)){r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bi(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bi(u,s))a.preventDefault()}},
fL:function(a){var u,t,s,r=this
r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bh(u,s))a.preventDefault()},
fv:function(a){var u,t,s,r=this
if(!r.bV(a)){r.aV(a)
u=r.aB(a)
if(r.x){t=r.b9(a)
if(r.d.bh(u,t))a.preventDefault()
return}if(r.r)return
s=r.aD(a)
if(r.c.bh(u,s))a.preventDefault()}},
fP:function(a){var u,t,s=this
s.aV(a)
u=new V.L((a&&C.C).ghH(a),C.C.ghI(a)).p(0,180)
if(s.x){if(s.d.ii(u))a.preventDefault()
return}if(s.r)return
t=s.aD(a)
if(s.c.ij(u,t))a.preventDefault()},
fR:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aB(s.y)
t=s.aD(s.y)
s.d.fH(u,t,r)}},
h6:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c8(a)
u=t.c3(a)
if(t.e.ig(u))a.preventDefault()},
h2:function(a){var u
this.c8(a)
u=this.c3(a)
if(this.e.ic(u))a.preventDefault()},
h4:function(a){var u
this.c8(a)
u=this.c3(a)
if(this.e.ie(u))a.preventDefault()}}
D.f4.prototype={$ia9:1}
D.bx.prototype={
aA:function(a){var u=this.r
if(u!=null)u.E(a)},
eM:function(){return this.aA(null)},
$ia9:1}
D.a9.prototype={}
D.dg.prototype={
aA:function(a){var u=this.y
if(u!=null)u.E(a)},
de:function(a){var u=this.z
if(u!=null)u.E(a)},
fG:function(){return this.de(null)},
fT:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t){s=a[t]
if(s==null||this.eX(s))return!1}return!0},
fe:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdd(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q instanceof D.bx)this.f.push(q)
p=q.r
if(p==null){p=new D.bz()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.be()
u.b=!0
this.aA(u)},
fX:function(a,b){var u,t,s
for(u=b.gS(b),t=this.gdd();u.w();){s=u.gF(u)
C.b.D(this.e,s)
s.gq().D(0,t)}u=new D.bf()
u.b=!0
this.aA(u)},
eX:function(a){var u=C.b.O(this.f,a)
return u},
$ai:function(){return[D.a9]},
$aaS:function(){return[D.a9]}}
D.hM.prototype={$ia9:1}
D.ic.prototype={$ia9:1}
V.Y.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.Y))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.af.prototype={
cK:function(a){var u=this
return H.b([u.a,u.b,u.c,u.d],[P.M])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.af))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fx.prototype={}
V.dk.prototype={
ad:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.M])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dk))return!1
u=b.a
t=$.D().a
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
i:function(a){var u,t,s,r,q=this,p=[P.M],o=V.bU(H.b([q.a,q.d,q.r],p),3,0),n=V.bU(H.b([q.b,q.e,q.x],p),3,0),m=V.bU(H.b([q.c,q.f,q.y],p),3,0)
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
V.aZ.prototype={
ad:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.M])
return t},
ct:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.D().a)return V.bC()
u=1/b1
t=-n
s=-a0
return V.aB((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
u:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.aB(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bK:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.x(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
bm:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.H(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aZ))return!1
u=b.a
t=$.D().a
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
I:function(a){var u,t,s,r,q,p=this,o=[P.M],n=V.bU(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bU(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bU(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bU(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
V.X.prototype={
B:function(a,b){return new V.X(this.a+b.a,this.b+b.b)},
K:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.aF()
return new V.X(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.H.prototype={
B:function(a,b){return new V.H(this.a+b.a,this.b+b.b,this.c+b.c)},
K:function(a,b){return new V.H(this.a-b.a,this.b-b.b,this.c-b.c)},
u:function(a,b){return new V.H(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.kX()
return new V.H(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.H))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.an.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.an))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.dv.prototype={
gaf:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dv))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.L.prototype={
bf:function(a){return Math.sqrt(this.A(this))},
A:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.u()
if(typeof r!=="number")return H.u(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.u()
if(typeof t!=="number")return H.u(t)
return s*r+u*t},
u:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.u()
u=this.b
if(typeof u!=="number")return u.u()
return new V.L(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.D().a){u=$.lW
return u==null?$.lW=new V.L(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.L(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.L))return!1
u=b.a
t=this.a
s=$.D()
s.toString
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.u(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.K()
if(typeof t!=="number")return H.u(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.x.prototype={
bf:function(a){return Math.sqrt(this.A(this))},
A:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cu:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.x(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aE:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.x(u*t-s*r,s*q-p*t,p*r-u*q)},
B:function(a,b){return new V.x(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.x(-this.a,-this.b,-this.c)},
u:function(a,b){return new V.x(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.D().a)return V.cw()
return new V.x(this.a/b,this.b/b,this.c/b)},
e9:function(){var u=$.D().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.x))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.b4.prototype={
bf:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.D().a){u=$.m0
return u==null?$.m0=new V.b4(0,0,0,0):u}return new V.b4(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b4))return!1
u=b.a
t=$.D().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.fd.prototype={
bP:function(a){var u=V.pn(a,this.c,this.b)
return u},
gq:function(){var u=this.y
return u==null?this.y=D.G():u},
U:function(a){var u=this.y
if(u!=null)u.E(a)},
scN:function(a,b){},
scv:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.D().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bP(u)}s=new D.C("maximumLocation",s,t.b)
s.b=!0
t.U(s)}},
scz:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.D().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bP(u)}s=new D.C("minimumLocation",s,t.c)
s.b=!0
t.U(s)}},
sa_:function(a,b){var u,t=this
b=t.bP(b)
u=t.d
if(!(Math.abs(u-b)<$.D().a)){t.d=b
u=new D.C("location",u,b)
u.b=!0
t.U(u)}},
scw:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.D().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.C("maximumVelocity",r,a)
r.b=!0
s.U(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.D().a)){u.f=a
t=new D.C("velocity",t,a)
t.b=!0
u.U(t)}},
scg:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.D().a)){this.x=a
u=new D.C("dampening",u,a)
u.b=!0
this.U(u)}},
ar:function(a,b){var u,t,s,r=this,q=r.f,p=$.D().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.D().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.d1.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.G():u},
b2:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d1))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.I("          ")}}
U.c5.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
U:function(a){var u=this.e
if(u!=null)u.E(a)},
ac:function(){return this.U(null)},
fc:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaQ(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.be()
u.b=!0
this.U(u)},
fV:function(a,b){var u,t
for(u=b.gS(b),t=this.gaQ();u.w();)u.gF(u).gq().D(0,t)
u=new D.bf()
u.b=!0
this.U(u)},
b2:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.a8(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.b2(0,b,c)
if(t!=null)u=u==null?t:t.u(0,u)}}s.f=u==null?V.bC():u
r=s.e
if(r!=null)r.az(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c5))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.A(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ah]},
$aaS:function(){return[U.ah]},
$iah:1}
U.ah.prototype={}
U.dS.prototype={
gq:function(){var u=this.cy
return u==null?this.cy=D.G():u},
U:function(a){var u=this.cy
if(u!=null)u.E(a)},
ac:function(){return this.U(null)},
bb:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdM().n(0,u.gbW())
u.a.c.ged().n(0,u.gbY())
u.a.c.gcM().n(0,u.gc_())
return!0},
bX:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$ib_")
if(!n.y)return
if(n.x){u=a.d.K(0,a.y)
u=new V.L(u.a,u.b)
u=u.A(u)
t=n.r
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.K(0,a.y)
u=new V.L(t.a,t.b).u(0,2).p(0,u.gaf())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.u()
s=n.e
if(typeof s!=="number")return H.u(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=new V.L(s.a,s.b).u(0,2).p(0,u.gaf())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.u(p)
o=n.z
if(typeof o!=="number")return H.u(o)
s.sa_(0,-q*p+o)
n.b.sX(0)
t=t.K(0,a.z)
n.Q=new V.L(t.a,t.b).u(0,2).p(0,u.gaf())}n.ac()},
c0:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.A(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.u()
s=r.e
if(typeof s!=="number")return H.u(s)
u.sX(t*10*s)
r.ac()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.ar(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.aB(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iah:1}
U.dT.prototype={
gq:function(){var u=this.fx
return u==null?this.fx=D.G():u},
U:function(a){var u=this.fx
if(u!=null)u.E(a)},
ac:function(){return this.U(null)},
bb:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdM().n(0,s.gbW())
s.a.c.ged().n(0,s.gbY())
s.a.c.gcM().n(0,s.gc_())
u=s.a.d
t=u.f
u=t==null?u.f=D.G():t
u.n(0,s.gf4())
u=s.a.d
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.gf6())
u=s.a.e
t=u.b
u=t==null?u.b=D.G():t
u.n(0,s.ghq())
u=s.a.e
t=u.d
u=t==null?u.d=D.G():t
u.n(0,s.gho())
u=s.a.e
t=u.c
u=t==null?u.c=D.G():t
u.n(0,s.ghm())
return!0},
at:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.L(u,t)},
bX:function(a){var u=this
H.j(a,"$ib_")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bZ:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$ib_")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.L(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.at(new V.L(t.a,t.b).u(0,2).p(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.at(new V.L(s.a,s.b).u(0,2).p(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.at(new V.L(t.a,t.b).u(0,2).p(0,u.gaf()))}n.ac()},
c0:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sX(-t*10*u)
r.ac()}},
f5:function(a){var u=this
if(H.j(a,"$idi").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f7:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$ib_")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.K(0,a.y)
r=n.at(new V.L(s.a,s.b).u(0,2).p(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.at(new V.L(t.a,t.b).u(0,2).p(0,u.gaf()))
n.ac()},
hr:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hp:function(a){var u,t,s,r,q,p,o,n=this
H.j(a,"$idM")
if(!n.cx)return
if(n.ch){u=a.d.K(0,a.y)
u=new V.L(u.a,u.b)
u=u.A(u)
t=n.Q
if(typeof t!=="number")return H.u(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.K(0,a.y)
u=n.at(new V.L(t.a,t.b).u(0,2).p(0,u.gaf()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.u(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.u(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.K(0,a.y)
r=n.at(new V.L(s.a,s.b).u(0,2).p(0,u.gaf()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.u(p)
o=n.cy
if(typeof o!=="number")return H.u(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.u(q)
s=n.db
if(typeof s!=="number")return H.u(s)
o.sa_(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.K(0,a.z)
n.dx=n.at(new V.L(t.a,t.b).u(0,2).p(0,u.gaf()))}n.ac()},
hn:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.A(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.u(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.u(u)
s.sX(-t*10*u)
r.ac()}},
b2:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.ar(0,u)
r.b.ar(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.aB(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.u(0,V.aB(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iah:1}
U.dU.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.G():u},
U:function(a){var u=this.r
if(u!=null)u.E(a)},
bb:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.G():t
t=r.gf9()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.G():s).n(0,t)
return!0},
fa:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.j(a,"$icf")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.u()
r=u+t*s
if(u!==r){q.d=r
u=new D.C("zoom",u,r)
u.b=!0
q.U(u)}},
b2:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.aB(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iah:1}
M.d0.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.G():u},
a1:function(a){var u=this.r
if(u!=null)u.E(a)},
b6:function(){return this.a1(null)},
fZ:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.gq()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.be()
u.b=!0
this.a1(u)},
h0:function(a,b){var u,t
for(u=b.gS(b),t=this.ga0();u.w();)u.gF(u).gq().D(0,t)
u=new D.bf()
u.b=!0
this.a1(u)},
ag:function(a){var u,t,s=this
if(s.f)return
s.f=!0
for(u=s.a,u=new J.a8(u,u.length);u.w();){t=u.d
if(t!=null)t.ag(a)}s.f=!1},
$ai:function(){return[M.as]},
$aaS:function(){return[M.as]},
$ias:1}
M.d2.prototype={
gq:function(){var u=this.r
return u==null?this.r=D.G():u},
a1:function(a){var u=this.r
if(u!=null)u.E(a)},
b6:function(){return this.a1(null)},
sbc:function(a){var u,t,s=this
if(a==null)a=new X.fO()
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga0())
t=s.b
s.b=a
a.gq().n(0,s.ga0())
u=new D.C("camera",t,s.b)
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t,s=this
if(b==null)b=X.kO(null)
u=s.c
if(u!==b){if(u!=null)u.gq().D(0,s.ga0())
t=s.c
s.c=b
b.gq().n(0,s.ga0())
u=new D.C("target",t,s.c)
u.b=!0
s.a1(u)}},
sbk:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.ga0())
s=new D.C("technique",u,t.d)
s.b=!0
t.a1(s)}},
ag:function(a){var u=this
a.cD(u.d)
u.c.a2(a)
u.b.a2(a)
u.e.ar(0,a)
u.e.ag(a)
u.b.aM(a)
u.c.toString
a.cC()},
$ias:1}
M.d7.prototype={
a1:function(a){var u=this.y
if(u!=null)u.E(a)},
b6:function(){return this.a1(null)},
fo:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.ga0(),s=[{func:1,ret:-1,args:[D.Z]}],r=0;r<b.length;b.length===u||(0,H.n)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bz()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.be()
u.b=!0
this.a1(u)},
fq:function(a,b){var u,t
for(u=b.gS(b),t=this.ga0();u.w();)u.gF(u).gq().D(0,t)
u=new D.bf()
u.b=!0
this.a1(u)},
sbc:function(a){var u,t,s=this
if(a==null)a=X.lE(null)
u=s.b
if(u!==a){if(u!=null)u.gq().D(0,s.ga0())
t=s.b
s.b=a
a.gq().n(0,s.ga0())
u=new D.C("camera",t,s.b)
u.b=!0
s.a1(u)}},
sbj:function(a,b){var u,t=this,s=t.c
if(s!==b){if(s!=null)s.gq().D(0,t.ga0())
u=t.c
t.c=b
b.gq().n(0,t.ga0())
s=new D.C("target",u,t.c)
s.b=!0
t.a1(s)}},
sbk:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gq().D(0,t.ga0())
u=t.d
t.d=a
if(a!=null)a.gq().n(0,t.ga0())
s=new D.C("technique",u,t.d)
s.b=!0
t.a1(s)}},
gq:function(){var u=this.y
return u==null?this.y=D.G():u},
ag:function(a){var u,t=this
a.cD(t.d)
t.c.a2(a)
t.b.a2(a)
u=t.d
if(u!=null)u.ar(0,a)
for(u=t.e.a,u=new J.a8(u,u.length);u.w();)u.d.ar(0,a)
for(u=t.e.a,u=new J.a8(u,u.length);u.w();)u.d.ag(a)
t.b.toString
a.cy.aJ()
a.db.aJ()
t.c.toString
a.cC()},
$ias:1}
M.as.prototype={}
A.cW.prototype={}
A.f_.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hO:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
dL:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a2.prototype={
gas:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a2))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.hb.prototype={
eG:function(c0,c1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=this,b6=null,b7="Required uniform value, ",b8=", was not defined or used in shader.",b9="uniform mat4 objMat;\n"
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
A.oC(c0,u)
A.oE(c0,u)
A.oD(c0,u)
A.oG(c0,u)
A.oH(c0,u)
A.oF(c0,u)
A.oI(c0,u)
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
b5.e6(0,s.charCodeAt(0)==0?s:s,A.oB(b5.z))
b5.Q=b5.x.h(0,"posAttr")
b5.cx=b5.x.h(0,"normAttr")
b5.ch=b5.x.h(0,"binmAttr")
b5.cy=b5.x.h(0,"txt2DAttr")
b5.db=b5.x.h(0,"txtCubeAttr")
b5.dx=b5.x.h(0,"bendAttr")
if(c0.dy)b5.id=H.j(b5.y.M(0,"invViewMat"),"$iac")
if(t)b5.dy=H.j(b5.y.M(0,"objMat"),"$iac")
if(r)b5.fr=H.j(b5.y.M(0,"viewObjMat"),"$iac")
b5.fy=H.j(b5.y.M(0,"projViewObjMat"),"$iac")
if(c0.go)b5.fx=H.j(b5.y.M(0,"viewMat"),"$iac")
if(c0.x1)b5.k1=H.j(b5.y.M(0,"txt2DMat"),"$ict")
if(c0.x2)b5.k2=H.j(b5.y.M(0,"txtCubeMat"),"$iac")
if(c0.y1)b5.k3=H.j(b5.y.M(0,"colorMat"),"$iac")
b5.r1=H.b([],[A.ac])
t=c0.bz
if(t>0){b5.k4=b5.y.M(0,"bendMatCount")
for(n=0;n<t;++n){s=b5.r1
r=b5.y
q="bendValues["+n+"].mat"
m=r.h(0,q)
if(m==null)H.o(P.m(b7+q+b8))
s.push(H.j(m,"$iac"))}}t=c0.a
if(t.a)b5.r2=H.j(b5.y.M(0,"emissionClr"),"$iI")
if(t.c)b5.ry=H.j(b5.y.M(0,"emissionTxt"),"$ia1")
t=c0.b
if(t.a)b5.x1=H.j(b5.y.M(0,"ambientClr"),"$iI")
if(t.c)b5.y1=H.j(b5.y.M(0,"ambientTxt"),"$ia1")
t=c0.c
if(t.a)b5.y2=H.j(b5.y.M(0,"diffuseClr"),"$iI")
if(t.c)b5.aF=H.j(b5.y.M(0,"diffuseTxt"),"$ia1")
t=c0.d
if(t.a)b5.bA=H.j(b5.y.M(0,"invDiffuseClr"),"$iI")
if(t.c)b5.dO=H.j(b5.y.M(0,"invDiffuseTxt"),"$ia1")
t=c0.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dR=H.j(b5.y.M(0,"shininess"),"$iV")
if(s)b5.dP=H.j(b5.y.M(0,"specularClr"),"$iI")
if(t.c)b5.dQ=H.j(b5.y.M(0,"specularTxt"),"$ia1")}if(c0.f.c)b5.dS=H.j(b5.y.M(0,"bumpTxt"),"$ia1")
if(c0.db){b5.dT=H.j(b5.y.M(0,"envSampler"),"$ia1")
t=c0.r
if(t.a)b5.dU=H.j(b5.y.M(0,"reflectClr"),"$iI")
if(t.c)b5.dV=H.j(b5.y.M(0,"reflectTxt"),"$ia1")
t=c0.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b5.dW=H.j(b5.y.M(0,"refraction"),"$iV")
if(s)b5.dX=H.j(b5.y.M(0,"refractClr"),"$iI")
if(t.c)b5.dY=H.j(b5.y.M(0,"refractTxt"),"$ia1")}}t=c0.y
if(t.a)b5.dZ=H.j(b5.y.M(0,"alpha"),"$iV")
if(t.c)b5.e_=H.j(b5.y.M(0,"alphaTxt"),"$ia1")
if(c0.k1){t=c0.z
s=t.length
if(s!==0){r=P.w
b5.ci=new H.K([r,A.bo])
b5.cj=new H.K([r,[P.q,A.cr]])
for(r=[A.cr],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="barLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].startPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.j(m,"$iI")
p=b5.y
o=i+"s["+n+"].endPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.j(g,"$iI")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$iI")
if(typeof j!=="number")return j.ae()
if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.j(c,"$iV")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cr(m,g,f,a0,a,b))}b5.cj.m(0,j,h)
q=b5.ci
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}t=c0.Q
s=t.length
if(s!==0){r=P.w
b5.ck=new H.K([r,A.bo])
b5.cl=new H.K([r,[P.q,A.cs]])
for(r=[A.cs],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="dirLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){if(typeof j!=="number")return j.ae()
p=(j&1)!==0
if(p){o=b5.y
a1=i+"s["+n+"].objUp"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.j(m,"$iI")
o=b5.y
a1=i+"s["+n+"].objRight"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.j(g,"$iI")
o=b5.y
a1=i+"s["+n+"].objDir"
f=o.h(0,a1)
if(f==null)H.o(P.m(b7+a1+b8))
H.j(f,"$iI")
a2=f
a3=g
a4=m}else{a2=b6
a3=a2
a4=a3}o=b5.y
a1=i+"s["+n+"].viewDir"
m=o.h(0,a1)
if(m==null)H.o(P.m(b7+a1+b8))
H.j(m,"$iI")
o=b5.y
a1=i+"s["+n+"].color"
g=o.h(0,a1)
if(g==null)H.o(P.m(b7+a1+b8))
H.j(g,"$iI")
if(p){p=b5.y
o=i+"sTexture2D"+n
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$ibI")
a5=f}else a5=b6
h.push(new A.cs(a4,a3,a2,m,g,a5))}b5.cl.m(0,j,h)
q=b5.ck
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}t=c0.ch
s=t.length
if(s!==0){r=P.w
b5.cm=new H.K([r,A.bo])
b5.cn=new H.K([r,[P.q,A.cu]])
for(r=[A.cu],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="pointLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].point"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.j(m,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.j(g,"$iI")
p=b5.y
o=i+"s["+n+"].color"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$iI")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].invViewRotMat"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$ict")
a6=e}else a6=b6
if((j&1)!==0){p=b5.y
o=i+"sTextureCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$ia1")
a5=e}else a5=b6
if((j&2)!==0){p=b5.y
o=i+"sShadowCube"+n
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$ia1")
p=b5.y
o=i+"s["+n+"].shadowAdj"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$icq")
a7=e
a8=d}else{a7=b6
a8=a7}if((j&4)!==0){p=b5.y
o=i+"s["+n+"].att0"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$iV")
p=b5.y
o=i+"s["+n+"].att1"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$iV")
p=b5.y
o=i+"s["+n+"].att2"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.j(c,"$iV")
b=c
a=d
a0=e}else{b=b6
a=b
a0=a}h.push(new A.cu(m,g,a6,f,a5,a7,a8,a0,a,b))}b5.cn.m(0,j,h)
q=b5.cm
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}t=c0.cx
s=t.length
if(s!==0){r=P.w
b5.co=new H.K([r,A.bo])
b5.cp=new H.K([r,[P.q,A.cv]])
for(r=[A.cv],l=0;l<t.length;t.length===s||(0,H.n)(t),++l){k=t[l]
j=k.a
i="spotLight"+H.e(j)
h=H.b([],r)
for(q=k.b,n=0;n<q;++n){p=b5.y
o=i+"s["+n+"].objPnt"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
H.j(m,"$iI")
p=b5.y
o=i+"s["+n+"].objDir"
g=p.h(0,o)
if(g==null)H.o(P.m(b7+o+b8))
H.j(g,"$iI")
p=b5.y
o=i+"s["+n+"].viewPnt"
f=p.h(0,o)
if(f==null)H.o(P.m(b7+o+b8))
H.j(f,"$iI")
p=b5.y
o=i+"s["+n+"].color"
e=p.h(0,o)
if(e==null)H.o(P.m(b7+o+b8))
H.j(e,"$iI")
if(typeof j!=="number")return j.ae()
if((j&3)!==0){p=b5.y
o=i+"s["+n+"].objUp"
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$iI")
p=b5.y
o=i+"s["+n+"].objRight"
c=p.h(0,o)
if(c==null)H.o(P.m(b7+o+b8))
H.j(c,"$iI")
p=b5.y
o=i+"s["+n+"].tuScalar"
a9=p.h(0,o)
if(a9==null)H.o(P.m(b7+o+b8))
H.j(a9,"$iV")
p=b5.y
o=i+"s["+n+"].tvScalar"
b0=p.h(0,o)
if(b0==null)H.o(P.m(b7+o+b8))
H.j(b0,"$iV")
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
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$icq")
a8=d}else a8=b6
if((j&8)!==0){o=b5.y
a1=i+"s["+n+"].cutoff"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$iV")
o=b5.y
a1=i+"s["+n+"].coneAngle"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.j(c,"$iV")
b3=c
b4=d}else{b3=b6
b4=b3}if((j&4)!==0){o=b5.y
a1=i+"s["+n+"].att0"
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$iV")
o=b5.y
a1=i+"s["+n+"].att1"
c=o.h(0,a1)
if(c==null)H.o(P.m(b7+a1+b8))
H.j(c,"$iV")
o=b5.y
a1=i+"s["+n+"].att2"
a9=o.h(0,a1)
if(a9==null)H.o(P.m(b7+a1+b8))
H.j(a9,"$iV")
b=a9
a=c
a0=d}else{b=b6
a=b
a0=a}if((j&1)!==0){o=b5.y
a1=i+"sTexture2D"+n
d=o.h(0,a1)
if(d==null)H.o(P.m(b7+a1+b8))
H.j(d,"$ibI")
a5=d}else a5=b6
if(p){p=b5.y
o=i+"sShadow2D"+n
d=p.h(0,o)
if(d==null)H.o(P.m(b7+o+b8))
H.j(d,"$ibI")
a7=d}else a7=b6
h.push(new A.cv(m,g,f,e,a4,a3,b2,b1,a8,b4,b3,a0,a,b,a5,a7))}b5.cp.m(0,j,h)
q=b5.co
p=b5.y
o=i+"Count"
m=p.h(0,o)
if(m==null)H.o(P.m(b7+o+b8))
q.m(0,j,m)}}}},
aj:function(a,b){if(b!=null&&b.d>=6)a.cR(b)}}
A.cX.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d4.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.dt.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dB.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.he.prototype={
i:function(a){return this.aF}}
A.cr.prototype={}
A.cs.prototype={}
A.cu.prototype={}
A.cv.prototype={}
A.dx.prototype={
cW:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
e6:function(a,b,c){var u,t,s,r=this
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
H.o(P.m("Failed to link shader: "+H.e(s)))}r.hi()
r.hk()},
a2:function(a){a.a.useProgram(this.r)
this.x.hO()},
d6:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.m("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
hi:function(){var u,t,s,r=this,q=H.b([],[A.cW]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cW(p,t.name,s))}r.x=new A.f_(q)},
hk:function(){var u,t,s,r=this,q=H.b([],[A.dO]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.u(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hG(t.type,t.size,t.name,s))}r.y=new A.iK(q)},
aT:function(a,b,c){var u=this.a
if(a===1)return new A.bo(u,b,c)
else return A.kZ(u,this.r,b,a,c)},
f_:function(a,b,c){var u=this.a
if(a===1)return new A.bI(u,b,c)
else return A.kZ(u,this.r,b,a,c)},
f0:function(a,b,c){var u=this.a
if(a===1)return new A.a1(u,b,c)
else return A.kZ(u,this.r,b,a,c)},
bu:function(a,b){return new P.e4(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hG:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aT(b,c,d)
case 5121:return u.aT(b,c,d)
case 5122:return u.aT(b,c,d)
case 5123:return u.aT(b,c,d)
case 5124:return u.aT(b,c,d)
case 5125:return u.aT(b,c,d)
case 5126:return new A.V(u.a,c,d)
case 35664:return new A.iG(u.a,c,d)
case 35665:return new A.I(u.a,c,d)
case 35666:return new A.cq(u.a,c,d)
case 35667:return new A.iH(u.a,c,d)
case 35668:return new A.iI(u.a,c,d)
case 35669:return new A.iJ(u.a,c,d)
case 35674:return new A.iL(u.a,c,d)
case 35675:return new A.ct(u.a,c,d)
case 35676:return new A.ac(u.a,c,d)
case 35678:return u.f_(b,c,d)
case 35680:return u.f0(b,c,d)
case 35670:throw H.c(u.bu("BOOL",c))
case 35671:throw H.c(u.bu("BOOL_VEC2",c))
case 35672:throw H.c(u.bu("BOOL_VEC3",c))
case 35673:throw H.c(u.bu("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.i9.prototype={}
A.dO.prototype={}
A.iK.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.n)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bo.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iI.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iJ.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.V.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iG.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.I.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cq.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iL.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.ct.prototype={
ah:function(a){var u=new Float32Array(H.bP(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ac.prototype={
ah:function(a){var u=new Float32Array(H.bP(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bI.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a1.prototype={
cR:function(a){var u=a==null||a.d<6,t=this.a,s=this.d
if(u)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jZ.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cu(s.b,b).cu(s.d.cu(s.c,b),c)
a.sa_(0,new V.H(r.a,r.b,r.c))
a.saq(r.p(0,Math.sqrt(r.A(r))))
s=1-b
u=1-c
a.sdE(new V.an(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k8.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.ka.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.u(p)
s=-s*p
u=r*p
a.sa_(0,new V.H(s,u,q))
u=new V.x(s,u,q)
a.saq(u.p(0,Math.sqrt(u.A(u))))
a.sdE(new V.an(1-c,2+c,-1,-1))}}
F.kb.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.kc.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.kl.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.x(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.A(r)))
a.sa_(0,new V.H(s.a,s.b,s.c))}}
F.ky.prototype={
$2:function(a,b){return 0}}
F.kz.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.u(s)
u=a.f
t=new V.x(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.A(t))).u(0,this.b+s)
a.sa_(0,new V.H(s.a,s.b,s.c))}}
F.kC.prototype={
$1:function(a){return new V.H(Math.cos(a),Math.sin(a),0)}}
F.kk.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.H(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k9.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.ll(n.$1(o),m)
m=J.ll(n.$1(o+3.141592653589793/p.c),m).K(0,l)
m=new V.x(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.A(m)))
n=$.lY
if(n==null){n=new V.x(1,0,0)
$.lY=n
t=n}else t=n
n=u.aE(!J.A(u,t)?V.m_():t)
s=n.p(0,Math.sqrt(n.A(n)))
n=s.aE(u)
t=n.p(0,Math.sqrt(n.A(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.u(0,n*m)
m=s.u(0,q*m)
a.sa_(0,l.B(0,new V.H(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aW.prototype={
bd:function(){var u=this
if(!u.gbe()){C.b.D(u.a.a.d.b,u)
u.a.a.W()}u.c4()
u.c5()
u.h9()},
bs:function(a){this.a=a
a.d.b.push(this)},
bt:function(a){this.b=a
a.d.c.push(this)},
dk:function(a){this.c=a
a.d.d.push(this)},
c4:function(){var u=this.a
if(u!=null){C.b.D(u.d.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.b.D(u.d.c,this)
this.b=null}},
h9:function(){var u=this.c
if(u!=null){C.b.D(u.d.d,this)
this.c=null}},
gbe:function(){return this.a==null||this.b==null||this.c==null},
eT:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cw()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e9())return
return s.p(0,Math.sqrt(s.A(s)))},
eV:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.K(0,q)
r=new V.x(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.A(r)))
r=t.K(0,q)
r=new V.x(r.a,r.b,r.c)
r=s.aE(r.p(0,Math.sqrt(r.A(r))))
return r.p(0,Math.sqrt(r.A(r)))},
cb:function(){var u,t=this
if(t.d!=null)return!0
u=t.eT()
if(u==null){u=t.eV()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
eS:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cw()
if(q!=null)s=s.B(0,q)
if(u!=null)s=s.B(0,u)
if(t!=null)s=s.B(0,t)
if(s.e9())return
return s.p(0,Math.sqrt(s.A(s)))},
eU:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.D().a){l=d.K(0,g)
l=new V.x(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.A(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.K(0,g).u(0,p).B(0,g).K(0,j)
l=new V.x(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.A(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.A(l)))
l=o.aE(q)
l=l.p(0,Math.sqrt(l.A(l))).aE(o)
q=l.p(0,Math.sqrt(l.A(l)))}return q},
c9:function(){var u,t=this
if(t.e!=null)return!0
u=t.eS()
if(u==null){u=t.eU()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
aS:function(a,b){var u=b.a
if(u==null)throw H.c(P.m("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.m("May not replace a face's vertex with a vertex attached to a different shape."))},
ghB:function(a){var u=this
if(J.A(u.a,u.b))return!0
if(J.A(u.b,u.c))return!0
if(J.A(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this
if(s.gbe())return a+"disposed"
u=a+C.a.ao(J.a7(s.a.e),0)+", "+C.a.ao(J.a7(s.b.e),0)+", "+C.a.ao(J.a7(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.I("")}}
F.fA.prototype={}
F.i8.prototype={
b_:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else{t=b.a
t.a.a.C()
t=t.e
u=c.c
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.c
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
u=t==u.e
t=u}else t=!1
return t}else return!1}}}}
F.c9.prototype={
bd:function(){var u=this
if(!u.gbe()){C.b.D(u.a.a.c.b,u)
u.a.a.W()}u.c4()
u.c5()},
bs:function(a){this.a=a
a.c.b.push(this)},
bt:function(a){this.b=a
a.c.c.push(this)},
c4:function(){var u=this.a
if(u!=null){C.b.D(u.c.b,this)
this.a=null}},
c5:function(){var u=this.b
if(u!=null){C.b.D(u.c.c,this)
this.b=null}},
gbe:function(){return this.a==null||this.b==null},
aS:function(a,b){var u=b.a
if(u==null)throw H.c(P.m("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.m("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){if(this.gbe())return a+"disposed"
return a+C.a.ao(J.a7(this.a.e),0)+", "+C.a.ao(J.a7(this.b.e),0)},
R:function(){return this.I("")}}
F.fZ.prototype={}
F.iE.prototype={
b_:function(a,b,c){var u,t=b.a
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
return t==u.e}else{t=b.a
t.a.a.C()
t=t.e
u=c.b
u.a.a.C()
if(t==u.e){t=b.b
t.a.a.C()
t=t.e
u=c.a
u.a.a.C()
return t==u.e}else return!1}}}
F.cj.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ao(J.a7(u.e),0)},
R:function(){return this.I("")}}
F.i0.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
b0:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.C()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){r=g[s]
h.a.n(0,r.hD())}h.a.C()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.cj()
if(n.a==null)H.o(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.E(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.ne(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.n)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.C()
o=o.e
if(typeof o!=="number")return o.B()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.C()
p=p.e
if(typeof p!=="number")return p.B()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.C()
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
F.c3(l,k,i)}g=h.e
if(g!=null)g.az(0)},
ak:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.ak()||!1
if(!t.a.ak())u=!1
s=t.e
if(s!=null)s.az(0)
return u},
hR:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.d(t,u)
s=t[u]
if(b.b_(0,a,s))return s}return},
hb:function(a,b){var u,t,s,r,q,p
this.a.n(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.n)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.o(P.m("May not replace a face's vertex when the point has been disposed."))
if(J.A(q,s)){r.aS(s,a)
q=r.a
if(q!=null){C.b.D(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aS(s,a)
q=r.b
if(q!=null){C.b.D(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.A(r.c,s)){r.aS(s,a)
q=r.c
if(q!=null){C.b.D(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null)H.o(P.m("May not replace a line's vertex when the point has been disposed."))
if(J.A(q,s)){r.aS(s,a)
q=r.a
if(q!=null){C.b.D(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aS(s,a)
q=r.b
if(q!=null){C.b.D(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.o(P.m("May not replace a point's vertex when the point has been disposed."))
if(J.A(q,s)){if(a.a==null)H.o(P.m("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.E(null)}}this.a.D(0,s)}},
ec:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.b(n.slice(0),[H.aP(n,0)])
for(n=[F.b5];u.length!==0;){t=C.b.ghT(u)
C.b.cG(u,0)
if(t!=null){s=H.b([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.b_(0,t,q)){s.push(q)
C.b.cG(u,r)}}if(s.length>1){p=b.b0(s)
if(p!=null){o.hb(p,s)
u.push(p)}}}}o.a.C()
o.c.bI()
o.d.bI()
o.b.io()
o.c.cH(new F.iE())
o.d.cH(new F.i8())
n=o.e
if(n!=null)n.az(0)},
bx:function(){this.ec(new F.cx(),new F.hE())},
dI:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.aw()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.ba().a)!==0)++s
if((t&$.b9().a)!==0)++s
if((t&$.bs().a)!==0)++s
if((t&$.bb().a)!==0)++s
if((t&$.cR().a)!==0)++s
if((t&$.cS().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.b8().a)!==0)++s
r=a4.gcS(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.M])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cY])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hx(m)
k=l.gcS(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cY(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].i3(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bP(p)),35044)
u.bindBuffer(a1,null)
c=new Z.c_(new Z.dV(a1,d),o,a4)
c.b=H.b([],[Z.bA])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)}a=Z.l2(u,34963,b)
c.b.push(new Z.bA(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.C()
b.push(t.e)}a=Z.l2(u,34963,b)
c.b.push(new Z.bA(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.d.b,m<t.length;++m){t=t[m].a
t.a.a.C()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.C()
b.push(t.e)
t=a0.d.b
if(m>=t.length)return H.d(t,m)
t=t[m].c
t.a.a.C()
b.push(t.e)}a=Z.l2(u,34963,b)
c.b.push(new Z.bA(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.I(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.I(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.I(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.I(t))}return C.b.j(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.E(null)}}
F.i1.prototype={
bv:function(a,b,c,d){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t.a.n(0,d)
u=new F.aW()
t=b.a
if(t==null)H.o(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.o(P.m("May not create a face with vertices attached to different shapes."))
u.bs(b)
u.bt(c)
u.dk(d)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
du:function(a){var u,t,s,r,q,p=H.b([],[F.aW]),o=a.length
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
p.push(F.c3(u,r,q))}}return p},
hu:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aW])
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
h.push(F.c3(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c3(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c3(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c3(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cH:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.b_(0,p,n)){p.bd()
break}}}}},
bI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghB(s)
if(t)s.bd()}},
ak:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].cb())s=!1
return s},
ca:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.n)(u),++r)if(!u[r].c9())s=!1
return s},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
R:function(){return this.I("")}}
F.i2.prototype={
gl:function(a){return this.b.length},
cH:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.b_(0,p,n)){p.bd()
break}}}}},
bI:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.A(s.a,s.b)
if(t)s.bd()}},
i:function(a){return this.R()},
I:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].I(a+(""+u+". ")))}return C.b.j(s,"\n")},
R:function(){return this.I("")}}
F.i3.prototype={
gl:function(a){return this.b.length},
io:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.E(null)}s=t.a
if(s!=null){C.b.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
I:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(a))
return C.b.j(r,"\n")},
R:function(){return this.I("")}}
F.b5.prototype={
cf:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bK(u.cx,r,o,t,s,q,p,a,n)},
hD:function(){return this.cf(null)},
sa_:function(a,b){var u
if(!J.A(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
scA:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.A(this.r,a)){this.r=a
u=this.a
if(u!=null)u.W()}},
sdG:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.A(a)))
if(!J.A(this.x,a)){this.x=a
u=this.a
if(u!=null)u.W()}},
scJ:function(a){var u
if(!J.A(this.y,a)){this.y=a
u=this.a
if(u!=null)u.W()}},
saq:function(a){var u
if(!J.A(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sal:function(a,b){var u
if(!J.A(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.W()}},
ser:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.W()}},
sdE:function(a){var u
if(!J.A(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
i3:function(a){var u,t,s=this
if(a.t(0,$.aw())){u=s.f
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.ba())){u=s.r
t=[P.M]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b9())){u=s.x
t=[P.M]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.bs())){u=s.y
t=[P.M]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.bb())){u=s.z
t=[P.M]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cR())){u=s.Q
t=[P.M]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cS())){u=s.Q
if(u==null)return H.b([1,1,1,1],[P.M])
else return u.cK(0)}else if(a.t(0,$.bW()))return H.b([s.ch],[P.M])
else if(a.t(0,$.b8())){u=s.cx
t=[P.M]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.M])},
cb:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cw()
t.d.H(0,new F.jc(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.az(0)}return!0},
c9:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cw()
t.d.H(0,new F.jb(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.A(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.az(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
I:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ao(J.a7(s.e),0))
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
R:function(){return this.I("")}}
F.jc.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.jb.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.B(0,t)}}}
F.j2.prototype={
C:function(){var u,t,s,r
if(this.b){u=this.c
t=u.length
for(s=0,r=0;r<t;++r){if(r>=u.length)return H.d(u,r)
u[r].e=s;++s}this.b=!1}},
n:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.c(P.m("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.W()
return!0},
dv:function(a,b,c,d,e,f,g){var u=F.bK(a,null,b,c,d,e,f,g,0)
this.n(0,u)
return u},
bw:function(a,b,c,d,e,f){return this.dv(a,b,c,null,d,e,f)},
hv:function(a,b,c,d,e,f){return this.dv(a,b,c,d,e,f,null)},
gl:function(a){return this.c.length},
D:function(a,b){var u,t
if(b==null)return!1
u=this.a
if(b.a!==u)return!1
if(b.b.b.length===0){t=b.c
if(t.b.length===0&&t.c.length===0){t=b.d
t=t.b.length===0&&t.c.length===0&&t.d.length===0}else t=!1}else t=!1
if(!t)throw H.c(P.m("May not remove a vertex without first making it empty."))
b.a=null
C.b.D(this.c,b)
u.W()
return this.b=!0},
ak:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].cb()
return!0},
ca:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)u[s].c9()
return!0},
hA:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.R()},
I:function(a){var u,t,s,r
this.C()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r)u.push(t[r].I(a))
return C.b.j(u,"\n")},
R:function(){return this.I("")}}
F.j3.prototype={
gl:function(a){return this.b.length+this.c.length+this.d.length},
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
C.b.H(u.c,new F.j4(u,b))
C.b.H(u.d,new F.j5(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.j4.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.j5.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.j7.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
F.j8.prototype={}
F.cx.prototype={
b_:function(a,b,c){return J.A(b.f,c.f)}}
F.j9.prototype={}
F.j6.prototype={
b0:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.H(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.x(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.x(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.X(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.x(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b4(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b4(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.u(a)
i+=a;++j}a3=F.bK(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sa_(0,a4)
else a3.sa_(0,o.p(0,n))
if(p==null)a3.scA(a4)
else a3.scA(p.p(0,Math.sqrt(p.A(p))))
if(q==null)a3.sdG(a4)
else a3.sdG(q.p(0,Math.sqrt(q.A(q))))
if(l<=0||s==null)a3.scJ(a4)
else a3.scJ(s.p(0,l))
if(k<=0||t==null)a3.saq(a4)
else a3.saq(t.p(0,k))
if(m<=0||r==null)a3.sal(0,a4)
else{u=r.p(0,m)
u=[u.a,u.b,u.c,u.d]
a=u[0]
a0=u[1]
a1=u[2]
u=u[3]
if(a<0)a=0
else if(a>1)a=1
if(a0<0)a0=0
else if(a0>1)a0=1
if(a1<0)a1=0
else if(a1>1)a1=1
if(u<0)u=0
else if(u>1)u=1
a3.sal(0,new V.af(a,a0,a1,u))}if(j<=0)a3.ser(0,0)
else a3.ser(0,i/j)
return a3}}
F.hE.prototype={
b0:function(a){var u,t,s,r=V.cw()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.x(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.p(0,Math.sqrt(r.A(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.n)(a),++t)a[t].scA(r)
return}}
F.ja.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.n)(u),++s)r.push(u[s].I(""))
return C.b.j(r,"\n")}}
O.dj.prototype={
gq:function(){var u=this.fr
return u==null?this.fr=D.G():u},
Y:function(a){var u=this.fr
if(u!=null)u.E(a)},
b7:function(){return this.Y(null)},
dg:function(a){this.a=null
this.Y(a)},
he:function(){return this.dg(null)},
fg:function(a,b){var u=new D.be()
u.b=!0
this.Y(u)},
fi:function(a,b){var u=new D.bf()
u.b=!0
this.Y(u)},
d4:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.K(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gax()
o=u.h(0,q.gax())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cX])
u.H(0,new O.hi(g,n))
C.b.b5(n,new O.hj())
m=new H.K(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d4])
m.H(0,new O.hk(g,l))
C.b.b5(l,new O.hl())
k=new H.K(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.n)(t),++r){q=t[r]
p=q.gax()
o=k.h(0,q.gax())
k.m(0,p,o==null?1:o)}j=H.b([],[A.dt])
k.H(0,new O.hm(g,j))
C.b.b5(j,new O.hn())
i=new H.K(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.n)(f),++r){q=f[r]
s=q.gax()
p=i.h(0,q.gax())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dB])
i.H(0,new O.ho(g,h))
C.b.b5(h,new O.hp())
f=C.c.a7(g.e.a.length+3,4)
g.dy.e
return A.nm(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ai:function(a,b){if(b!=null)if(!C.b.O(a,b)){b.a=a.length
a.push(b)}},
ar:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.a8(u,u.length);u.w();){t=u.d
t.toString
s=$.j1
if(s==null)s=$.j1=new V.x(0,0,1)
t.a=s
r=$.j0
t.d=r==null?$.j0=new V.x(0,1,0):r
r=$.j_
t.e=r==null?$.j_=new V.x(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bK(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bK(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bK(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
ek:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0=this,b1=b0.a
if(b1==null){b1=b0.d4()
u=b2.fr.h(0,b1.aF)
if(u==null){u=A.nl(b1,b2.a)
b2.dz(u)}b1=b0.a=u
b3.e=null}t=b1.z
s=t.bA
b1=b3.e
if(!(b1 instanceof Z.c_))b1=b3.e=null
if(b1==null||!b1.d.t(0,s)){b1=t.k4
if(b1)b3.d.ak()
r=t.r1
if(r){q=b3.d
p=q.e
if(p!=null)++p.d
q.d.ca()
q.a.ca()
q=q.e
if(q!=null)q.az(0)}q=t.rx
if(q){p=b3.d
o=p.e
if(o!=null)++o.d
p.a.hA()
p=p.e
if(p!=null)p.az(0)}n=b3.d.dI(new Z.dW(b2.a),s)
n.aG($.aw()).e=b0.a.Q.c
if(b1)n.aG($.ba()).e=b0.a.cx.c
if(r)n.aG($.b9()).e=b0.a.ch.c
if(t.r2)n.aG($.bs()).e=b0.a.cy.c
if(q)n.aG($.bb()).e=b0.a.db.c
if(t.ry)n.aG($.b8()).e=b0.a.dx.c
b3.e=n}m=H.b([],[T.dH])
b0.a.a2(b2)
if(t.fr){b1=b0.a
r=b2.dx
r=r.ga4(r)
b1=b1.dy
b1.toString
b1.ah(r.ad(0,!0))}if(t.fx){b1=b0.a
r=b2.cx
if(r==null){r=b2.db
r=r.ga4(r)
q=b2.dx
q=b2.cx=r.u(0,q.ga4(q))
r=q}b1=b1.fr
b1.toString
b1.ah(r.ad(0,!0))}b1=b0.a
r=b2.ch
if(r==null){r=b2.gil()
q=b2.dx
q=b2.ch=r.u(0,q.ga4(q))
r=q}b1=b1.fy
b1.toString
b1.ah(r.ad(0,!0))
if(t.go){b1=b0.a
r=b2.db
r=r.ga4(r)
b1=b1.fx
b1.toString
b1.ah(r.ad(0,!0))}if(t.x1){b1=b0.a
r=b0.b
b1=b1.k1
b1.toString
b1.ah(C.j.ad(r,!0))}if(t.x2){b1=b0.a
r=b0.c
b1=b1.k2
b1.toString
b1.ah(C.j.ad(r,!0))}if(t.y1){b1=b0.a
r=b0.d
b1=b1.k3
b1.toString
b1.ah(C.j.ad(r,!0))}if(t.bz>0){l=b0.e.a.length
b1=b0.a.k4
b1.a.uniform1i(b1.d,l)
for(k=0;k<l;++k){b1=b0.a
r=b0.e.a
if(k>=r.length)return H.d(r,k)
r=r[k]
b1=b1.r1
if(k>=b1.length)return H.d(b1,k)
b1=b1[k]
j=new Float32Array(H.bP(r.ad(0,!0)))
b1.a.uniformMatrix4fv(b1.d,!1,j)}}b1=t.a
if(b1.a){r=b0.a
q=b0.f.f
r=r.r2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.f.e)
b1=b0.a
r=b0.f.e
b1.aj(b1.ry,r)}if(t.k1){b1=t.b
if(b1.a){r=b0.a
q=b0.r.f
r=r.x1
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.r.e)
b1=b0.a
r=b0.r.e
b1.aj(b1.y1,r)}b1=t.c
if(b1.a){r=b0.a
q=b0.x.f
r=r.y2
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.x.e)
b1=b0.a
r=b0.x.e
b1.aj(b1.aF,r)}b1=t.d
if(b1.a){r=b0.a
q=b0.y.f
r=r.bA
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.y.e)
b1=b0.a
r=b0.y.e
b1.aj(b1.dO,r)}b1=t.e
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.z.ch
q=q.dR
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.z.f
r=r.dP
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.z.e)
b1=b0.a
r=b0.z.e
b1.aj(b1.dQ,r)}b1=t.z
if(b1.length>0){r=P.w
i=new H.K([r,r])
for(r=b0.dx.e,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gax()
e=i.h(0,f)
if(e==null)e=0
i.m(0,f,e+1)
d=J.bX(b0.a.cj.h(0,f),e)
p=g.giE()
o=$.aG
p=p.bm(o==null?$.aG=new V.H(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giJ()
o=$.aG
p=p.bm(o==null?$.aG=new V.H(0,0,0):o)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gal(g)
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
if(g.gdN()){p=g.gdB()
o=d.e
o.a.uniform1f(o.d,p)
p=g.gdC()
o=d.f
o.a.uniform1f(o.d,p)
p=g.gdD()
o=d.r
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=i.h(0,q)
if(l==null)l=0
q=b0.a.ci.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.Q
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
b=new H.K([r,r])
for(r=b0.dx.f,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
e=b.h(0,0)
if(e==null)e=0
b.m(0,0,e+1)
d=J.bX(b0.a.cl.h(0,0),e)
p=c.bK(g.a)
o=p.a
a=p.b
a0=p.c
a0=p.p(0,Math.sqrt(o*o+a*a+a0*a0))
a=d.e
o=a0.a
p=a0.b
a0=a0.c
a.a.uniform3f(a.d,o,p,a0)
a0=g.c
p=d.f
p.a.uniform3f(p.d,a0.a,a0.b,a0.c)}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=b.h(0,q)
if(l==null)l=0
q=b0.a.ck.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.ch
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
a1=new H.K([r,r])
for(r=b0.dx.r,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gax()
e=a1.h(0,f)
if(e==null)e=0
a1.m(0,f,e+1)
d=J.bX(b0.a.cn.h(0,f),e)
a2=c.u(0,g.ga4(g))
p=g.ga4(g)
o=$.aG
p=p.bm(o==null?$.aG=new V.H(0,0,0):o)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=$.aG
p=a2.bm(p==null?$.aG=new V.H(0,0,0):p)
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gal(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaL()
p=a2.ct(0)
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
j=new Float32Array(H.bP(new V.dk(o,a,a0,a3,a4,a5,a6,a7,p).ad(0,!0)))
a8.a.uniformMatrix3fv(a8.d,!1,j)
g.gaL()
p=g.gaL()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gaL()
o=p.gbg(p)
if(o){o=d.f
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}g.gb4()
p=g.gex()
o=d.x
o.toString
a=p.ghK(p)
a0=p.ghL(p)
a3=p.ghM()
p=p.ghJ()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb4()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gb4()
o=p.gbg(p)
if(o){o=d.r
o.toString
a=p.d
if(a<6)o.a.uniform1i(o.d,0)
else{p=p.a
o.a.uniform1i(o.d,p)}}if(g.gdN()){p=g.gdB()
o=d.y
o.a.uniform1f(o.d,p)
p=g.gdC()
o=d.z
o.a.uniform1f(o.d,p)
p=g.gdD()
o=d.Q
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a1.h(0,q)
if(l==null)l=0
q=b0.a.cm.h(0,q)
q.a.uniform1i(q.d,l)}}b1=t.cx
if(b1.length>0){r=b2.db
c=r.ga4(r)
r=P.w
a9=new H.K([r,r])
for(r=b0.dx.x,q=r.length,h=0;h<r.length;r.length===q||(0,H.n)(r),++h){g=r[h]
f=g.gax()
e=a9.h(0,f)
if(e==null)e=0
a9.m(0,f,e+1)
d=J.bX(b0.a.cp.h(0,f),e)
p=g.gik(g)
o=d.b
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giH(g).iU()
o=d.c
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=c.bm(g.gik(g))
o=d.d
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gal(g)
o=d.e
o.a.uniform3f(o.d,p.a,p.b,p.c)
g.gaL()
p=g.gcM()
o=d.f
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.gcI(g)
o=d.r
o.a.uniform3f(o.d,p.a,p.b,p.c)
p=g.giV()
o=d.x
o.a.uniform1f(o.d,p)
p=g.giW()
o=d.y
o.a.uniform1f(o.d,p)
g.gaL()
p=g.gaL()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gaL()
o=p.gbg(p)
if(o){o=d.dx
o.toString
a=p.gbg(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghZ(p)
o.a.uniform1i(o.d,p)}}g.gb4()
p=g.gex()
o=d.z
o.toString
a=p.ghK(p)
a0=p.ghL(p)
a3=p.ghM()
p=p.ghJ()
o.a.uniform4f(o.d,a,a0,a3,p)
p=g.gb4()
if(!C.b.O(m,p)){p.a=m.length
m.push(p)}p=g.gb4()
o=p.gbg(p)
if(o){o=d.dy
o.toString
a=p.gbg(p)
if(!a)o.a.uniform1i(o.d,0)
else{p=p.ghZ(p)
o.a.uniform1i(o.d,p)}}if(g.giI()){p=g.giG()
o=d.Q
o.a.uniform1f(o.d,p)
p=g.giF()
o=d.ch
o.a.uniform1f(o.d,p)}if(g.gdN()){p=g.gdB()
o=d.cx
o.a.uniform1f(o.d,p)
p=g.gdC()
o=d.cy
o.a.uniform1f(o.d,p)
p=g.gdD()
o=d.db
o.a.uniform1f(o.d,p)}}for(r=b1.length,h=0;h<b1.length;b1.length===r||(0,H.n)(b1),++h){q=b1[h].a
l=a9.h(0,q)
if(l==null)l=0
q=b0.a.co.h(0,q)
q.a.uniform1i(q.d,l)}}}if(t.f.c){b0.ai(m,b0.Q.e)
b1=b0.a
r=b0.Q.e
b1.aj(b1.dS,r)}if(t.dy){b1=b0.a
r=b2.Q
if(r==null){r=b2.db
r=b2.Q=r.ga4(r).ct(0)}b1=b1.id
b1.toString
b1.ah(r.ad(0,!0))}if(t.db){b0.ai(m,b0.ch)
b1=b0.a
r=b0.ch
b1.aj(b1.dT,r)
b1=t.r
if(b1.a){r=b0.a
q=b0.cx.f
r=r.dU
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.cx.e)
b1=b0.a
r=b0.cx.e
b1.aj(b1.dV,r)}b1=t.x
r=b1.a
if(!r)q=b1.c
else q=!0
if(q){q=b0.a
p=b0.cy.ch
q=q.dW
q.a.uniform1f(q.d,p)}if(r){r=b0.a
q=b0.cy.f
r=r.dX
r.a.uniform3f(r.d,q.a,q.b,q.c)}if(b1.c){b0.ai(m,b0.cy.e)
b1=b0.a
r=b0.cy.e
b1.aj(b1.dY,r)}}b1=t.y
r=b1.a
q=!r
if(q)p=b1.c
else p=!0
if(p){if(r){r=b0.a
p=b0.db.f
r=r.dZ
r.a.uniform1f(r.d,p)}if(b1.c){b0.ai(m,b0.db.e)
r=b0.a
p=b0.db.e
r.aj(r.e_,p)}r=b2.a
r.enable(3042)
r.blendFunc(770,771)}for(k=0;k<m.length;++k)m[k].a2(b2)
r=b3.e
r.a2(b2)
r.ag(b2)
r.aM(b2)
if(q)b1=b1.c
else b1=!0
if(b1)b2.a.disable(3042)
for(b1=b2.a,k=0;k<m.length;++k){r=m[k]
if(r.c){r.c=!1
b1.activeTexture(33984+r.a)
b1.bindTexture(34067,null)}}r=b0.a
r.toString
b1.useProgram(null)
r.x.dL()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.d4().aF}}
O.hi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.cX(a,C.c.a7(b+3,4)*4))}}
O.hj.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.d4(a,C.c.a7(b+3,4)*4))}}
O.hl.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hm.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dt(a,C.c.a7(b+3,4)*4))}}
O.hn.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.ho.prototype={
$2:function(a,b){if(typeof b!=="number")return b.B()
return this.b.push(new A.dB(a,C.c.a7(b+3,4)*4))}}
O.hp.prototype={
$2:function(a,b){return J.cT(a.a,b.a)}}
O.hc.prototype={
aC:function(){var u,t=this
t.cU()
u=t.f
if(!(Math.abs(u-1)<$.D().a)){t.f=1
u=new D.C(t.b,u,1)
u.b=!0
t.a.Y(u)}}}
O.cc.prototype={
Y:function(a){return this.a.Y(a)},
b7:function(){return this.Y(null)},
aC:function(){},
c6:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.aC()
u=s.a
u.a=null
u.Y(null)}},
saq:function(a){var u,t=this,s=t.c
if(!s.c)t.c6(new A.a2(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gq().D(0,t.gaR())
u=t.e
t.e=a
a.gq().n(0,t.gaR())
s=new D.C(t.b+".textureCube",u,t.e)
s.b=!0
t.a.Y(s)}}}
O.hd.prototype={}
O.aA.prototype={
di:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.C(s.b+".color",u,a)
t.b=!0
s.a.Y(t)}},
aC:function(){this.cU()
this.di(new V.Y(1,1,1))},
sal:function(a,b){this.c6(new A.a2(!0,!1,this.c.c))
this.di(b)}}
O.hf.prototype={}
O.hg.prototype={
aC:function(){var u,t=this
t.cV()
u=t.ch
if(!(Math.abs(u-1)<$.D().a)){t.ch=1
u=new D.C(t.b+".refraction",u,1)
u.b=!0
t.a.Y(u)}}}
O.hh.prototype={
dj:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.D().a)){u.ch=a
t=new D.C(u.b+".shininess",t,a)
t.b=!0
u.a.Y(t)}},
aC:function(){this.cV()
this.dj(100)}}
O.dz.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
Y:function(a){var u=this.e
if(u!=null)u.E(a)},
b7:function(){return this.Y(null)},
ek:function(a,b){var u,t,s,r,q,p,o=this,n="Skybox"
if(o.a==null){u=a.fr.h(0,n)
if(u==null){t=a.a
u=new A.i9(t,n)
u.cW(t,n)
u.e6(0,"uniform mat4 viewMat;                             \nuniform float fov;                                \nuniform float ratio;                              \n                                                  \nattribute vec3 posAttr;                           \n                                                  \nvarying vec3 cubeTxt;                             \n                                                  \nvoid main()                                       \n{                                                 \n  float t = 1.0 / (tan(fov * 0.5)*3.0);           \n  float x = -t * posAttr.x / ratio;               \n  float y = t * posAttr.y;                        \n  cubeTxt = (viewMat * vec4(x, y, 1.0, 0.0)).xyz; \n  gl_Position = vec4(posAttr, 1.0);               \n}                                                 \n","precision mediump float;                                              \n                                                                      \nuniform samplerCube boxTxt;                                           \nuniform vec3 boxClr;                                                  \n                                                                      \nvarying vec3 cubeTxt;                                                 \n                                                                      \nvoid main()                                                           \n{                                                                     \n   vec3 txtCube = normalize(cubeTxt);                                 \n   gl_FragColor = vec4(boxClr*textureCube(boxTxt, txtCube).xyz, 1.0); \n}                                                                     \n")
u.z=u.x.h(0,"posAttr")
u.Q=H.j(u.y.h(0,"fov"),"$iV")
u.ch=H.j(u.y.h(0,"ratio"),"$iV")
u.cx=H.j(u.y.h(0,"boxClr"),"$iI")
u.cy=H.j(u.y.h(0,"boxTxt"),"$ia1")
u.db=H.j(u.y.h(0,"viewMat"),"$iac")
a.dz(u)}o.a=u}if(b.e==null){t=b.d.dI(new Z.dW(a.a),$.aw())
t.aG($.aw()).e=o.a.z.c
b.e=t}t=o.c
if(t!=null){t.a=1
t.a2(a)}t=a.d
s=a.c
r=o.a
r.a2(a)
q=o.b
p=r.Q
p.a.uniform1f(p.d,q)
q=r.ch
q.a.uniform1f(q.d,t/s)
s=o.c
r.cy.cR(s)
s=o.d
t=r.cx
t.a.uniform3f(t.d,s.a,s.b,s.c)
s=a.db
s=s.ga4(s).ct(0)
r=r.db
r.toString
r.ah(s.ad(0,!0))
t=b.e
if(t instanceof Z.c_){t.a2(a)
t.ag(a)
t.aM(a)}else b.e=null
t=o.a
t.toString
a.a.useProgram(null)
t.x.dL()
t=o.c
if(t!=null)t.aM(a)}}
O.dG.prototype={}
T.dH.prototype={}
T.ir.prototype={
gq:function(){var u=this.e
return u==null?this.e=D.G():u},
a2:function(a){var u,t=this
if(!t.c&&t.d>=6){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(34067,t.b)}},
aM:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(34067,null)}}}
T.is.prototype={
eb:function(a,b){var u,t=this,s=34067,r=a+"/posx"+b,q=a+"/posy"+b,p=a+"/posz"+b,o=a+"/negx"+b,n=a+"/negy"+b,m=a+"/negz"+b,l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.ir()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aU(u,k,r,34069,!1,!1)
t.aU(u,k,o,34070,!1,!1)
t.aU(u,k,q,34071,!1,!1)
t.aU(u,k,n,34072,!1,!1)
t.aU(u,k,p,34073,!1,!1)
t.aU(u,k,m,34074,!1,!1)
return u},
ea:function(a){return this.eb(a,".png")},
aU:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.a_(u,"load",new T.it(this,u,!1,b,!1,d,a),!1)},
hf:function(a,b,c){var u,t,s,r
b=V.lg(b)
u=V.lg(a.width)
t=V.lg(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kI()
s.width=u
s.height=t
r=C.i.eu(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oW(r.getImageData(0,0,s.width,s.height))}}}
T.it.prototype={
$1:function(a){var u=this,t=u.a,s=t.hf(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.Y.iv(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hN()}++t.e}}
X.kH.prototype={}
X.fH.prototype={
gq:function(){var u=this.x
return u==null?this.x=D.G():u},
au:function(a){var u=this.x
if(u!=null)u.E(a)},
a2:function(a){var u,t,s,r,q,p,o,n=this,m=a.a
m.bindFramebuffer(36160,null)
m.enable(2884)
m.enable(2929)
m.depthFunc(513)
u=m.drawingBufferWidth
t=m.drawingBufferHeight
s=n.r
r=s.a
if(typeof u!=="number")return H.u(u)
q=C.d.ap(r*u)
r=s.b
if(typeof t!=="number")return H.u(t)
p=C.d.ap(r*t)
r=C.d.ap(s.c*u)
a.c=r
s=C.d.ap(s.d*t)
a.d=s
m.viewport(q,p,r,s)
m.clearDepth(n.c)
if(n.b){s=n.a
m.clearColor(s.a,s.b,s.c,s.d)
o=16640}else o=256
m.clear(o)}}
X.fO.prototype={
gq:function(){var u=this.b
return u==null?this.b=D.G():u},
a2:function(a){var u
a.cy.bH(V.bC())
u=V.bC()
a.db.bH(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()}}
X.ds.prototype={
gq:function(){var u=this.f
return u==null?this.f=D.G():u},
au:function(a){var u=this.f
if(u!=null)u.E(a)},
fm:function(){return this.au(null)},
a2:function(a){var u,t,s=this,r=a.c,q=a.d,p=s.c,o=s.d,n=s.e,m=n-o,l=1/Math.tan(p*0.5),k=V.aB(-l/(r/q),0,0,0,0,l,0,0,0,0,n/m,-n*o/m,0,0,1,0)
a.cy.bH(k)
r=$.lF
if(r==null){r=V.kX()
q=V.l1()
p=$.lX
r=V.lB(r,q,p==null?$.lX=new V.x(0,0,-1):p)
$.lF=r
u=r}else u=r
r=s.b
if(r!=null){t=r.b2(0,a,s)
if(t!=null)u=t.u(0,u)}a.db.bH(u)},
aM:function(a){a.cy.aJ()
a.db.aJ()}}
X.im.prototype={}
V.d_.prototype={
bo:function(a){this.b=new P.fM(C.P)
this.c=null
this.d=H.b([],[[P.q,W.aq]])},
N:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.aq]))
u=a.split("\n")
for(l=u.length,t=[W.aq],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eZ(q,0,q.length)
n=o==null?q:o
C.N.ew(p,H.li(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gay(m.d).push(p)}},
ei:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.q,W.aq]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.by()
for(t.toString,s=new H.p(u),s=new P.bM(t.cL(new H.bj(s,s.gl(s))).a());s.w();)r.bG(s.gF(s))}}
V.kx.prototype={
$1:function(a){var u=C.d.eo(this.a.ghY(),2)
if(u!=="0.00")P.lh(u+" fps")}}
V.fn.prototype={
bG:function(a){var u=this
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
by:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.ix()
a1.d=a1.k(0,r)
u=a1.k(0,r).j(0,q)
t=K.v(new H.p("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=a1.k(0,q).j(0,q)
u=K.v(new H.p("_"))
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
t=K.v(new H.p("."))
u.a.push(t)
t=a1.k(0,o).j(0,n)
u=K.P("0","9")
t.a.push(u)
u=a1.k(0,n).j(0,n)
t=K.P("0","9")
u.a.push(t)
t=a1.k(0,r).j(0,m)
u=K.v(new H.p(l))
t.a.push(u)
u=a1.k(0,m).j(0,m)
t=K.v(new H.p(l))
u.a.push(t)
t=a1.k(0,r).j(0,k)
u=K.v(new H.p('"'))
t.a.push(u)
u=a1.k(0,k).j(0,j)
t=K.v(new H.p('"'))
u.a.push(t)
t=a1.k(0,k).j(0,i)
u=K.v(new H.p("\\"))
t.a.push(u)
u=a1.k(0,i).j(0,k)
t=K.v(new H.p('"'))
u.a.push(t)
a1.k(0,k).j(0,k).a.push(new K.aR())
t=a1.k(0,r).j(0,h)
u=K.v(new H.p("'"))
t.a.push(u)
u=a1.k(0,h).j(0,g)
t=K.v(new H.p("'"))
u.a.push(t)
t=a1.k(0,h).j(0,f)
u=K.v(new H.p("\\"))
t.a.push(u)
u=a1.k(0,f).j(0,h)
t=K.v(new H.p("'"))
u.a.push(t)
a1.k(0,h).j(0,h).a.push(new K.aR())
t=a1.k(0,r).j(0,e)
u=K.v(new H.p("/"))
t.a.push(u)
u=a1.k(0,e).j(0,d)
t=K.v(new H.p("/"))
u.a.push(t)
t=a1.k(0,d).j(0,c)
u=K.v(new H.p("\n"))
t.a.push(u)
u=a1.k(0,d).j(0,d)
t=new K.aa()
s=[K.bk]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("\n"))
t.a.push(u)
u=a1.k(0,e).j(0,b)
t=K.v(new H.p("*"))
u.a.push(t)
t=a1.k(0,b).j(0,a)
u=K.v(new H.p("*"))
t.a.push(u)
u=a1.k(0,a).j(0,b)
t=new K.aa()
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("*"))
t.a.push(u)
u=a1.k(0,a).j(0,c)
t=K.v(new H.p("/"))
u.a.push(t)
t=a1.k(0,r).j(0,a0)
u=K.v(new H.p(" \n\t"))
t.a.push(u)
u=a1.k(0,a0).j(0,a0)
t=K.v(new H.p(" \n\t"))
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
t.aK(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aK(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aK(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fJ.prototype={
bG:function(a){var u=this
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
by:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.ix()
e.d=e.k(0,r)
u=e.k(0,r).j(0,q)
t=K.v(new H.p("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=e.k(0,q).j(0,q)
u=K.v(new H.p("_"))
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
t=K.v(new H.p("."))
u.a.push(t)
t=e.k(0,o).j(0,n)
u=K.P("0","9")
t.a.push(u)
u=e.k(0,n).j(0,n)
t=K.P("0","9")
u.a.push(t)
t=e.k(0,r).j(0,m)
u=K.v(new H.p(l))
t.a.push(u)
u=e.k(0,m).j(0,m)
t=K.v(new H.p(l))
u.a.push(t)
t=e.k(0,r).j(0,k)
u=K.v(new H.p("/"))
t.a.push(u)
u=e.k(0,k).j(0,j)
t=K.v(new H.p("/"))
u.a.push(t)
e.k(0,k).j(0,m).a.push(new K.aR())
t=e.k(0,j).j(0,i)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.aa()
s=[K.bk]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.v(new H.p("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.aa()
u.a=H.b([],s)
t.a.push(u)
t=K.v(new H.p("\n"))
u.a.push(t)
t=e.k(0,h).j(0,g)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,r).j(0,f)
t=K.v(new H.p(" \n\t"))
u.a.push(t)
t=e.k(0,f).j(0,f)
u=K.v(new H.p(" \n\t"))
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
u.aK(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aK(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aK(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fK.prototype={
bG:function(a){var u=this,t="#111"
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
by:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.ix()
l.d=l.k(0,s)
u=l.k(0,s).j(0,r)
t=K.v(new H.p("_"))
u.a.push(t)
t=K.P("a","z")
u.a.push(t)
t=K.P("A","Z")
u.a.push(t)
t=l.k(0,r).j(0,r)
u=K.v(new H.p("_"))
t.a.push(u)
u=K.P("0","9")
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,r).j(0,q)
t=K.v(new H.p("="))
u.a.push(t)
u.c=!0
u=l.k(0,s).j(0,p)
t=K.v(new H.p("</\\-!>="))
u.a.push(t)
t=l.k(0,p).j(0,p)
u=K.v(new H.p("</\\-!>="))
t.a.push(u)
u=l.k(0,s).j(0,o)
t=K.v(new H.p('"'))
u.a.push(t)
t=l.k(0,o).j(0,n)
u=K.v(new H.p('"'))
t.a.push(u)
u=l.k(0,o).j(0,"EscStr")
t=K.v(new H.p("\\"))
u.a.push(t)
t=l.k(0,"EscStr").j(0,o)
u=K.v(new H.p('"'))
t.a.push(u)
l.k(0,o).j(0,o).a.push(new K.aR())
l.k(0,s).j(0,m).a.push(new K.aR())
u=l.k(0,m).j(0,m)
t=new K.aa()
t.a=H.b([],[K.bk])
u.a.push(t)
u=K.v(new H.p('</\\-!>=_"'))
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.T("Symbol")
u=l.k(0,n)
u.d=u.a.T("String")
u=l.k(0,r)
t=u.a.T(r)
u.d=t
t.aK(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.T(q)
t=l.k(0,m)
t.d=t.a.T(m)
return l}}
V.hK.prototype={
ei:function(a,b){this.d=H.b([],[[P.q,W.aq]])
this.N(C.b.j(b,"\n"),"#111")},
bG:function(a){},
by:function(){return}}
V.hP.prototype={
bv:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lT().gcF().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.dr(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.ln(m.c).n(0,q)
o=W.n7("radio")
o.checked=s
o.name=u
W.a_(o,"change",new V.hQ(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.ln(m.c).n(0,r.createElement("br"))},
av:function(a,b,c){return this.bv(a,b,c,!1)},
dr:function(a){var u,t,s=P.lT(),r=P.h,q=P.ng(s.gcF(),r,r)
q.m(0,this.a,a)
u=s.el(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jG([],[]).bL(""),"",t)}}
V.hQ.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dr(u.d)}}}
V.i4.prototype={
eJ:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.a_(q,"scroll",new V.i6(o),!1)},
dw:function(a){var u,t,s,r,q,p,o,n
this.hj()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.i2(a),s.toString,r=new H.p(r),r=new P.bM(s.cL(new H.bj(r,r.gl(r))).a());r.w();){s=r.gF(r)
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
if(H.pi(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eH(C.x,s,C.e,!1)
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
es:function(a){var u,t,s,r=new V.fn("dart")
r.bo("dart")
u=new V.fJ("glsl")
u.bo("glsl")
t=new V.fK("html")
t.bo("html")
s=C.b.hU(H.b([r,u,t],[V.d_]),new V.i7(a))
if(s!=null)return s
r=new V.hK("plain")
r.bo("plain")
return r},
dt:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cO(s).a6(s,"+")){b0[t]=C.a.ab(s,1)
a6.push(1)
u=!0}else if(C.a.a6(s,"-")){b0[t]=C.a.ab(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.es(a8)
r.ei(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eH(C.x,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lp()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.n)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.n)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gS(s);a2.w();)d.appendChild(a2.gF(a2))
f.appendChild(e)
f.appendChild(d)
o.appendChild(f)}},
hs:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
hj:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.ix()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.v(new H.p("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.aa()
r=[K.bk]
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.p("*"))
s.a.push(t)
t=u.k(0,p).j(0,"BoldEnd")
s=K.v(new H.p("*"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,o)
s=K.v(new H.p("_"))
t.a.push(s)
t.c=!0
t=u.k(0,o).j(0,o)
s=new K.aa()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.p("_"))
s.a.push(t)
t=u.k(0,o).j(0,n)
s=K.v(new H.p("_"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,m)
s=K.v(new H.p("`"))
t.a.push(s)
t.c=!0
t=u.k(0,m).j(0,m)
s=new K.aa()
s.a=H.b([],r)
t.a.push(s)
t=K.v(new H.p("`"))
s.a.push(t)
t=u.k(0,m).j(0,"CodeEnd")
s=K.v(new H.p("`"))
t.a.push(s)
t.c=!0
t=u.k(0,q).j(0,l)
s=K.v(new H.p("["))
t.a.push(s)
t.c=!0
t=u.k(0,l).j(0,k)
s=K.v(new H.p("|"))
t.a.push(s)
s=u.k(0,l).j(0,j)
t=K.v(new H.p("]"))
s.a.push(t)
s.c=!0
s=u.k(0,l).j(0,l)
t=new K.aa()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.v(new H.p("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.aa()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aR())
s=u.k(0,i).j(0,i)
t=new K.aa()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("*_`["))
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
V.i6.prototype={
$1:function(a){P.lP(C.n,new V.i5(this.a))}}
V.i5.prototype={
$0:function(){var u=C.d.ap(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i7.prototype={
$1:function(a){return a.a===this.a}}
T.km.prototype={
$0:function(){this.a.sa9(0,F.lb(1,null,null,1))}}
T.kn.prototype={
$0:function(){this.a.sa9(0,F.lb(8,null,null,8))}}
T.ko.prototype={
$0:function(){this.a.sa9(0,F.mh(!0,40,1))}}
T.kp.prototype={
$0:function(){this.a.sa9(0,F.mh(!1,40,0))}}
T.kq.prototype={
$0:function(){this.a.sa9(0,F.pb(10,20))}}
T.kr.prototype={
$0:function(){var u=F.dy(),t=Math.sqrt(5)/2+0.5,s=F.a6(u,new V.x(-1,t,0)),r=F.a6(u,new V.x(1,t,0)),q=-t,p=F.a6(u,new V.x(-1,q,0)),o=F.a6(u,new V.x(1,q,0)),n=F.a6(u,new V.x(0,-1,q)),m=F.a6(u,new V.x(0,1,q)),l=F.a6(u,new V.x(0,-1,t)),k=F.a6(u,new V.x(0,1,t)),j=F.a6(u,new V.x(t,0,1)),i=F.a6(u,new V.x(t,0,-1)),h=F.a6(u,new V.x(q,0,1)),g=F.a6(u,new V.x(q,0,-1))
F.Q(u,s,g,m,2)
F.Q(u,s,m,r,2)
F.Q(u,s,r,k,2)
F.Q(u,s,k,h,2)
F.Q(u,s,h,g,2)
F.Q(u,r,m,i,2)
F.Q(u,m,g,n,2)
F.Q(u,g,h,p,2)
F.Q(u,h,k,l,2)
F.Q(u,k,r,j,2)
F.Q(u,o,i,n,2)
F.Q(u,o,n,p,2)
F.Q(u,o,p,l,2)
F.Q(u,o,l,j,2)
F.Q(u,o,j,i,2)
F.Q(u,n,i,m,2)
F.Q(u,p,n,g,2)
F.Q(u,l,p,h,2)
F.Q(u,j,l,k,2)
F.Q(u,i,j,r,2)
u.ec(new F.cx(),new F.j6())
this.a.sa9(0,u)}}
T.ks.prototype={
$0:function(){this.a.sa9(0,F.ms(6,6))}}
T.kt.prototype={
$0:function(){this.a.sa9(0,F.pl())}}
T.ku.prototype={
$0:function(){this.a.sa9(0,F.pa())}}
T.kv.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.dt("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.dt("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eB=u.i
u=J.de.prototype
u.eD=u.i
u=P.i.prototype
u.eC=u.bM
u=W.S.prototype
u.bO=u.am
u=W.ep.prototype
u.eE=u.aw
u=K.da.prototype
u.eA=u.aI
u.cT=u.i
u=O.cc.prototype
u.cU=u.aC
u=O.aA.prototype
u.cV=u.aC})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ol","nb",21)
t(P,"oQ","nU",8)
t(P,"oR","nV",8)
t(P,"oS","nW",8)
s(P,"mg","oO",10)
r(W,"p4",4,null,["$4"],["nX"],16,0)
r(W,"p5",4,null,["$4"],["nY"],16,0)
var l
q(l=E.aV.prototype,"geg",0,0,null,["$1","$0"],["eh","ia"],0,0)
q(l,"gee",0,0,null,["$1","$0"],["ef","i7"],0,0)
p(l,"gi5","i6",4)
p(l,"gi8","i9",4)
q(l=E.dI.prototype,"gcY",0,0,null,["$1","$0"],["d_","cZ"],0,0)
o(l,"gir","em",10)
n(l=X.dR.prototype,"gfA","fB",5)
n(l,"gfj","fk",5)
n(l,"gfs","ft",2)
n(l,"gfE","fF",11)
n(l,"gfC","fD",11)
n(l,"gfI","fJ",2)
n(l,"gfM","fN",2)
n(l,"gfw","fz",2)
n(l,"gfK","fL",2)
n(l,"gfu","fv",2)
n(l,"gfO","fP",19)
n(l,"gfQ","fR",5)
n(l,"gh5","h6",6)
n(l,"gh1","h2",6)
n(l,"gh3","h4",6)
q(D.bx.prototype,"geL",0,0,null,["$1","$0"],["aA","eM"],0,0)
q(l=D.dg.prototype,"gdd",0,0,null,["$1","$0"],["de","fG"],0,0)
n(l,"gfS","fT",20)
p(l,"gfd","fe",12)
p(l,"gfW","fX",12)
m(V.L.prototype,"gl","bf",7)
m(V.x.prototype,"gl","bf",7)
m(V.b4.prototype,"gl","bf",7)
q(l=U.c5.prototype,"gaQ",0,0,null,["$1","$0"],["U","ac"],0,0)
p(l,"gfb","fc",13)
p(l,"gfU","fV",13)
q(l=U.dS.prototype,"gaQ",0,0,null,["$1","$0"],["U","ac"],0,0)
n(l,"gbW","bX",1)
n(l,"gbY","bZ",1)
n(l,"gc_","c0",1)
q(l=U.dT.prototype,"gaQ",0,0,null,["$1","$0"],["U","ac"],0,0)
n(l,"gbW","bX",1)
n(l,"gbY","bZ",1)
n(l,"gc_","c0",1)
n(l,"gf4","f5",1)
n(l,"gf6","f7",1)
n(l,"ghq","hr",1)
n(l,"gho","hp",1)
n(l,"ghm","hn",1)
n(U.dU.prototype,"gf9","fa",1)
q(l=M.d0.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
p(l,"gfY","fZ",14)
p(l,"gh_","h0",14)
q(M.d2.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
q(l=M.d7.prototype,"ga0",0,0,null,["$1","$0"],["a1","b6"],0,0)
p(l,"gfn","fo",4)
p(l,"gfp","fq",4)
q(l=O.dj.prototype,"gaR",0,0,null,["$1","$0"],["Y","b7"],0,0)
q(l,"ghd",0,0,null,["$1","$0"],["dg","he"],0,0)
p(l,"gff","fg",15)
p(l,"gfh","fi",15)
q(O.cc.prototype,"gaR",0,0,null,["$1","$0"],["Y","b7"],0,0)
q(O.dz.prototype,"gaR",0,0,null,["$1","$0"],["Y","b7"],0,0)
q(X.ds.prototype,"gfl",0,0,null,["$1","$0"],["au","fm"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a4,null)
s(P.a4,[H.kS,J.a,J.a8,P.ec,P.i,H.bj,P.fS,H.d8,H.iP,H.ff,H.iC,P.by,H.c0,H.eu,P.a3,H.h_,H.h1,H.fU,P.eA,P.bL,P.bM,P.dX,P.dE,P.ii,P.dJ,P.jY,P.jA,P.ju,P.eb,P.y,P.jQ,P.h8,P.fb,P.fN,P.jW,P.jV,P.aO,P.ag,P.ae,P.bd,P.hI,P.dC,P.e4,P.fG,P.fI,P.q,P.T,P.bm,P.h,P.U,P.bN,P.iR,P.jD,W.fj,W.cA,W.N,W.dq,W.ep,W.jK,W.d9,W.b0,W.jz,W.eI,P.jF,P.eF,P.jv,P.bH,K.aR,K.da,K.bk,K.hR,K.i_,L.dD,L.dK,L.dL,L.iw,O.aS,O.cd,E.f7,E.aV,E.hS,E.dI,Z.dV,Z.dW,Z.c_,Z.bA,Z.b6,D.fa,D.bz,D.Z,X.cZ,X.df,X.fX,X.h5,X.am,X.hw,X.iy,X.dR,D.f4,D.bx,D.a9,D.hM,D.ic,V.Y,V.af,V.fx,V.dk,V.aZ,V.X,V.H,V.an,V.dv,V.L,V.x,V.b4,U.dS,U.dT,U.dU,M.d2,M.d7,M.as,A.cW,A.f_,A.a2,A.cX,A.d4,A.dt,A.dB,A.he,A.cr,A.cs,A.cu,A.cv,A.dO,A.iK,F.aW,F.fA,F.c9,F.fZ,F.cj,F.i0,F.i1,F.i2,F.i3,F.b5,F.j2,F.j3,F.j7,F.j8,F.j9,F.ja,O.dG,O.cc,O.hf,T.is,X.kH,X.im,X.fO,X.ds,V.d_,V.hP,V.i4])
s(J.a,[J.fT,J.dd,J.de,J.bg,J.c8,J.bh,H.cg,H.bl,W.f,W.eX,W.bu,W.ay,W.J,W.dZ,W.al,W.fo,W.fp,W.e0,W.d6,W.e2,W.fr,W.k,W.e5,W.az,W.fL,W.e7,W.aX,W.h4,W.hq,W.ed,W.ee,W.aC,W.ef,W.ei,W.aE,W.em,W.eo,W.aI,W.eq,W.aJ,W.ev,W.at,W.ey,W.iv,W.aL,W.eB,W.iA,W.iW,W.eJ,W.eL,W.eN,W.eP,W.eR,P.aY,P.e9,P.b1,P.ek,P.hO,P.ew,P.b3,P.eD,P.f0,P.dY,P.dw,P.es])
s(J.de,[J.hJ,J.bJ,J.bi])
t(J.kR,J.bg)
s(J.c8,[J.dc,J.db])
t(P.h3,P.ec)
s(P.h3,[H.dP,W.jk,W.a5,P.fC])
t(H.p,H.dP)
s(P.i,[H.t,H.cb,H.cy,P.fQ])
s(H.t,[H.dh,H.h0])
t(H.fu,H.cb)
s(P.fS,[H.h9,H.je])
t(H.ha,H.dh)
t(H.fg,H.ff)
s(P.by,[H.hF,H.fW,H.iO,H.f9,H.hY,P.dr,P.ap,P.iQ,P.iM,P.cn,P.fe,P.fm])
s(H.c0,[H.kD,H.io,H.fV,H.kg,H.kh,H.ki,P.jg,P.jf,P.jh,P.ji,P.jP,P.jO,P.k6,P.jx,P.jy,P.h2,P.h7,P.fs,P.ft,P.iV,P.iS,P.iT,P.iU,P.jR,P.jS,P.jU,P.jT,P.k1,P.k0,P.k2,P.k3,W.fv,W.hs,W.hu,W.hX,W.ih,W.jp,W.hD,W.hC,W.jB,W.jC,W.jN,W.jX,P.jH,P.jI,P.k7,P.fD,P.fE,P.f2,E.hT,E.hU,E.hV,E.iu,D.fy,D.fz,F.jZ,F.k8,F.ka,F.kb,F.kc,F.kl,F.ky,F.kz,F.kC,F.kk,F.k9,F.jc,F.jb,F.j4,F.j5,O.hi,O.hj,O.hk,O.hl,O.hm,O.hn,O.ho,O.hp,T.it,V.kx,V.hQ,V.i6,V.i5,V.i7,T.km,T.kn,T.ko,T.kp,T.kq,T.kr,T.ks,T.kt,T.ku,T.kv])
s(H.io,[H.ie,H.bY])
t(P.h6,P.a3)
s(P.h6,[H.K,W.jj])
t(H.dl,H.bl)
s(H.dl,[H.cC,H.cE])
t(H.cD,H.cC)
t(H.ch,H.cD)
t(H.cF,H.cE)
t(H.dm,H.cF)
s(H.dm,[H.hx,H.hy,H.hz,H.hA,H.hB,H.dn,H.ci])
t(P.jL,P.fQ)
t(P.jw,P.jY)
t(P.jt,P.jA)
t(P.eG,P.h8)
t(P.dQ,P.eG)
s(P.fb,[P.f5,P.fw])
t(P.fh,P.ii)
s(P.fh,[P.f6,P.fM,P.iZ,P.iY])
t(P.iX,P.fw)
s(P.ae,[P.M,P.w])
s(P.ap,[P.bF,P.fP])
t(P.jm,P.bN)
s(W.f,[W.E,W.fB,W.ce,W.aH,W.cG,W.aK,W.au,W.cI,W.jd,W.cz,P.f3,P.bt])
s(W.E,[W.S,W.bc])
s(W.S,[W.r,P.l])
s(W.r,[W.eY,W.eZ,W.bv,W.bw,W.aq,W.fF,W.c7,W.hZ,W.dF,W.ik,W.il,W.cp])
t(W.fi,W.ay)
t(W.c1,W.dZ)
s(W.al,[W.fk,W.fl])
t(W.e1,W.e0)
t(W.d5,W.e1)
t(W.e3,W.e2)
t(W.fq,W.e3)
t(W.ar,W.bu)
t(W.e6,W.e5)
t(W.c4,W.e6)
t(W.e8,W.e7)
t(W.c6,W.e8)
t(W.bn,W.k)
s(W.bn,[W.bB,W.aD,W.bG])
t(W.hr,W.ed)
t(W.ht,W.ee)
t(W.eg,W.ef)
t(W.hv,W.eg)
t(W.ej,W.ei)
t(W.dp,W.ej)
t(W.en,W.em)
t(W.hL,W.en)
t(W.hW,W.eo)
t(W.cH,W.cG)
t(W.ia,W.cH)
t(W.er,W.eq)
t(W.ib,W.er)
t(W.ig,W.ev)
t(W.ez,W.ey)
t(W.ip,W.ez)
t(W.cJ,W.cI)
t(W.iq,W.cJ)
t(W.eC,W.eB)
t(W.iz,W.eC)
t(W.bp,W.aD)
t(W.eK,W.eJ)
t(W.jl,W.eK)
t(W.e_,W.d6)
t(W.eM,W.eL)
t(W.jq,W.eM)
t(W.eO,W.eN)
t(W.eh,W.eO)
t(W.eQ,W.eP)
t(W.jE,W.eQ)
t(W.eS,W.eR)
t(W.jJ,W.eS)
t(W.jn,W.jj)
t(W.jo,P.dE)
t(W.jM,W.ep)
t(P.jG,P.jF)
t(P.ab,P.jv)
t(P.ea,P.e9)
t(P.fY,P.ea)
t(P.el,P.ek)
t(P.hG,P.el)
t(P.cm,P.l)
t(P.ex,P.ew)
t(P.ij,P.ex)
t(P.eE,P.eD)
t(P.iB,P.eE)
t(P.f1,P.dY)
t(P.hH,P.bt)
t(P.et,P.es)
t(P.id,P.et)
s(K.da,[K.aa,L.dN])
s(E.f7,[Z.cY,A.dx,T.dH])
s(D.Z,[D.be,D.bf,D.C,X.hN])
s(X.hN,[X.di,X.b_,X.cf,X.dM])
s(O.aS,[D.dg,U.c5,M.d0])
s(D.fa,[U.fd,U.ah])
t(U.d1,U.ah)
s(A.dx,[A.hb,A.i9])
s(A.dO,[A.bo,A.iH,A.iI,A.iJ,A.iF,A.V,A.iG,A.I,A.cq,A.iL,A.ct,A.ac,A.bI,A.a1])
t(F.i8,F.fA)
t(F.iE,F.fZ)
t(F.cx,F.j8)
s(F.j9,[F.j6,F.hE])
s(O.dG,[O.dj,O.dz])
s(O.cc,[O.hc,O.hd,O.aA])
s(O.aA,[O.hg,O.hh])
t(T.ir,T.dH)
t(X.fH,X.im)
s(V.d_,[V.fn,V.fJ,V.fK,V.hK])
u(H.dP,H.iP)
u(H.cC,P.y)
u(H.cD,H.d8)
u(H.cE,P.y)
u(H.cF,H.d8)
u(P.ec,P.y)
u(P.eG,P.jQ)
u(W.dZ,W.fj)
u(W.e0,P.y)
u(W.e1,W.N)
u(W.e2,P.y)
u(W.e3,W.N)
u(W.e5,P.y)
u(W.e6,W.N)
u(W.e7,P.y)
u(W.e8,W.N)
u(W.ed,P.a3)
u(W.ee,P.a3)
u(W.ef,P.y)
u(W.eg,W.N)
u(W.ei,P.y)
u(W.ej,W.N)
u(W.em,P.y)
u(W.en,W.N)
u(W.eo,P.a3)
u(W.cG,P.y)
u(W.cH,W.N)
u(W.eq,P.y)
u(W.er,W.N)
u(W.ev,P.a3)
u(W.ey,P.y)
u(W.ez,W.N)
u(W.cI,P.y)
u(W.cJ,W.N)
u(W.eB,P.y)
u(W.eC,W.N)
u(W.eJ,P.y)
u(W.eK,W.N)
u(W.eL,P.y)
u(W.eM,W.N)
u(W.eN,P.y)
u(W.eO,W.N)
u(W.eP,P.y)
u(W.eQ,W.N)
u(W.eR,P.y)
u(W.eS,W.N)
u(P.e9,P.y)
u(P.ea,W.N)
u(P.ek,P.y)
u(P.el,W.N)
u(P.ew,P.y)
u(P.ex,W.N)
u(P.eD,P.y)
u(P.eE,W.N)
u(P.dY,P.a3)
u(P.es,P.y)
u(P.et,W.N)})()
var v={mangledGlobalNames:{w:"int",M:"double",ae:"num",h:"String",aO:"bool",bm:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.Z]},{func:1,ret:-1,args:[D.Z]},{func:1,ret:-1,args:[W.aD]},{func:1,ret:P.bm,args:[,,]},{func:1,ret:-1,args:[P.w,[P.i,E.aV]]},{func:1,ret:-1,args:[W.k]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:P.M},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bB]},{func:1,ret:-1,args:[P.w,[P.i,D.a9]]},{func:1,ret:-1,args:[P.w,[P.i,U.ah]]},{func:1,ret:-1,args:[P.w,[P.i,M.as]]},{func:1,ret:-1,args:[P.w,[P.i,V.aZ]]},{func:1,ret:P.aO,args:[W.S,P.h,P.h,W.cA]},{func:1,ret:P.bm,args:[,]},{func:1,ret:P.bH,args:[,,]},{func:1,ret:-1,args:[W.bp]},{func:1,ret:P.aO,args:[[P.i,D.a9]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bv.prototype
C.i=W.bw.prototype
C.N=W.aq.prototype
C.Q=J.a.prototype
C.b=J.bg.prototype
C.R=J.db.prototype
C.c=J.dc.prototype
C.j=J.dd.prototype
C.d=J.c8.prototype
C.a=J.bh.prototype
C.S=J.bi.prototype
C.A=J.hJ.prototype
C.Y=P.dw.prototype
C.B=W.dF.prototype
C.q=J.bJ.prototype
C.C=W.bp.prototype
C.D=W.cz.prototype
C.a_=new P.f6()
C.E=new P.f5()
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

C.L=new P.hI()
C.e=new P.iX()
C.M=new P.iZ()
C.f=new P.jw()
C.n=new P.bd(0)
C.O=new P.bd(5e6)
C.P=new P.fN("element",!1,!1,!1)
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
C.X=new H.fg(0,{},C.w,[P.h,P.h])
C.Z=new P.bL(null,2)})();(function staticFields(){$.ax=0
$.bZ=null
$.lr=null
$.mm=null
$.mf=null
$.mq=null
$.kd=null
$.kj=null
$.le=null
$.bQ=null
$.cM=null
$.cN=null
$.l8=!1
$.av=C.f
$.ad=[]
$.aU=null
$.kM=null
$.lx=null
$.lw=null
$.cB=P.kU(P.h,P.fI)
$.lC=null
$.lG=null
$.aG=null
$.lL=null
$.lW=null
$.lZ=null
$.lY=null
$.j_=null
$.j0=null
$.j1=null
$.lX=null
$.m0=null
$.lF=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"pq","mv",function(){return H.ml("_$dart_dartClosure")})
u($,"pr","lj",function(){return H.ml("_$dart_js")})
u($,"ps","mw",function(){return H.aM(H.iD({
toString:function(){return"$receiver$"}}))})
u($,"pt","mx",function(){return H.aM(H.iD({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"pu","my",function(){return H.aM(H.iD(null))})
u($,"pv","mz",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"py","mC",function(){return H.aM(H.iD(void 0))})
u($,"pz","mD",function(){return H.aM(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"px","mB",function(){return H.aM(H.lR(null))})
u($,"pw","mA",function(){return H.aM(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pB","mF",function(){return H.aM(H.lR(void 0))})
u($,"pA","mE",function(){return H.aM(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pP","lk",function(){return P.nT()})
u($,"pC","mG",function(){return P.nP()})
u($,"pQ","mK",function(){return H.nn(H.bP(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pT","mM",function(){return P.nB("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pU","mN",function(){return P.oj()})
u($,"pR","mL",function(){return P.lA(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pJ","mJ",function(){return Z.ao(0)})
u($,"pD","mH",function(){return Z.ao(511)})
u($,"pL","aw",function(){return Z.ao(1)})
u($,"pK","ba",function(){return Z.ao(2)})
u($,"pF","b9",function(){return Z.ao(4)})
u($,"pM","bs",function(){return Z.ao(8)})
u($,"pN","bb",function(){return Z.ao(16)})
u($,"pG","cR",function(){return Z.ao(32)})
u($,"pH","cS",function(){return Z.ao(64)})
u($,"pI","mI",function(){return Z.ao(96)})
u($,"pO","bW",function(){return Z.ao(128)})
u($,"pE","b8",function(){return Z.ao(256)})
u($,"pp","mu",function(){return new V.fx(1e-9)})
u($,"po","D",function(){return $.mu()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cg,DataView:H.bl,ArrayBufferView:H.bl,Float32Array:H.ch,Float64Array:H.ch,Int16Array:H.hx,Int32Array:H.hy,Int8Array:H.hz,Uint16Array:H.hA,Uint32Array:H.hB,Uint8ClampedArray:H.dn,CanvasPixelArray:H.dn,Uint8Array:H.ci,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eX,HTMLAnchorElement:W.eY,HTMLAreaElement:W.eZ,Blob:W.bu,HTMLBodyElement:W.bv,HTMLCanvasElement:W.bw,CDATASection:W.bc,CharacterData:W.bc,Comment:W.bc,ProcessingInstruction:W.bc,Text:W.bc,CSSPerspective:W.fi,CSSCharsetRule:W.J,CSSConditionRule:W.J,CSSFontFaceRule:W.J,CSSGroupingRule:W.J,CSSImportRule:W.J,CSSKeyframeRule:W.J,MozCSSKeyframeRule:W.J,WebKitCSSKeyframeRule:W.J,CSSKeyframesRule:W.J,MozCSSKeyframesRule:W.J,WebKitCSSKeyframesRule:W.J,CSSMediaRule:W.J,CSSNamespaceRule:W.J,CSSPageRule:W.J,CSSRule:W.J,CSSStyleRule:W.J,CSSSupportsRule:W.J,CSSViewportRule:W.J,CSSStyleDeclaration:W.c1,MSStyleCSSProperties:W.c1,CSS2Properties:W.c1,CSSImageValue:W.al,CSSKeywordValue:W.al,CSSNumericValue:W.al,CSSPositionValue:W.al,CSSResourceValue:W.al,CSSUnitValue:W.al,CSSURLImageValue:W.al,CSSStyleValue:W.al,CSSMatrixComponent:W.ay,CSSRotation:W.ay,CSSScale:W.ay,CSSSkew:W.ay,CSSTranslation:W.ay,CSSTransformComponent:W.ay,CSSTransformValue:W.fk,CSSUnparsedValue:W.fl,DataTransferItemList:W.fo,HTMLDivElement:W.aq,DOMException:W.fp,ClientRectList:W.d5,DOMRectList:W.d5,DOMRectReadOnly:W.d6,DOMStringList:W.fq,DOMTokenList:W.fr,Element:W.S,AbortPaymentEvent:W.k,AnimationEvent:W.k,AnimationPlaybackEvent:W.k,ApplicationCacheErrorEvent:W.k,BackgroundFetchClickEvent:W.k,BackgroundFetchEvent:W.k,BackgroundFetchFailEvent:W.k,BackgroundFetchedEvent:W.k,BeforeInstallPromptEvent:W.k,BeforeUnloadEvent:W.k,BlobEvent:W.k,CanMakePaymentEvent:W.k,ClipboardEvent:W.k,CloseEvent:W.k,CustomEvent:W.k,DeviceMotionEvent:W.k,DeviceOrientationEvent:W.k,ErrorEvent:W.k,ExtendableEvent:W.k,ExtendableMessageEvent:W.k,FetchEvent:W.k,FontFaceSetLoadEvent:W.k,ForeignFetchEvent:W.k,GamepadEvent:W.k,HashChangeEvent:W.k,InstallEvent:W.k,MediaEncryptedEvent:W.k,MediaKeyMessageEvent:W.k,MediaQueryListEvent:W.k,MediaStreamEvent:W.k,MediaStreamTrackEvent:W.k,MessageEvent:W.k,MIDIConnectionEvent:W.k,MIDIMessageEvent:W.k,MutationEvent:W.k,NotificationEvent:W.k,PageTransitionEvent:W.k,PaymentRequestEvent:W.k,PaymentRequestUpdateEvent:W.k,PopStateEvent:W.k,PresentationConnectionAvailableEvent:W.k,PresentationConnectionCloseEvent:W.k,ProgressEvent:W.k,PromiseRejectionEvent:W.k,PushEvent:W.k,RTCDataChannelEvent:W.k,RTCDTMFToneChangeEvent:W.k,RTCPeerConnectionIceEvent:W.k,RTCTrackEvent:W.k,SecurityPolicyViolationEvent:W.k,SensorErrorEvent:W.k,SpeechRecognitionError:W.k,SpeechRecognitionEvent:W.k,SpeechSynthesisEvent:W.k,StorageEvent:W.k,SyncEvent:W.k,TrackEvent:W.k,TransitionEvent:W.k,WebKitTransitionEvent:W.k,VRDeviceEvent:W.k,VRDisplayEvent:W.k,VRSessionEvent:W.k,MojoInterfaceRequestEvent:W.k,ResourceProgressEvent:W.k,USBConnectionEvent:W.k,IDBVersionChangeEvent:W.k,AudioProcessingEvent:W.k,OfflineAudioCompletionEvent:W.k,WebGLContextEvent:W.k,Event:W.k,InputEvent:W.k,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.ar,FileList:W.c4,FileWriter:W.fB,HTMLFormElement:W.fF,Gamepad:W.az,History:W.fL,HTMLCollection:W.c6,HTMLFormControlsCollection:W.c6,HTMLOptionsCollection:W.c6,ImageData:W.aX,HTMLImageElement:W.c7,KeyboardEvent:W.bB,Location:W.h4,MediaList:W.hq,MessagePort:W.ce,MIDIInputMap:W.hr,MIDIOutputMap:W.ht,MimeType:W.aC,MimeTypeArray:W.hv,PointerEvent:W.aD,MouseEvent:W.aD,DragEvent:W.aD,Document:W.E,DocumentFragment:W.E,HTMLDocument:W.E,ShadowRoot:W.E,XMLDocument:W.E,Attr:W.E,DocumentType:W.E,Node:W.E,NodeList:W.dp,RadioNodeList:W.dp,Plugin:W.aE,PluginArray:W.hL,RTCStatsReport:W.hW,HTMLSelectElement:W.hZ,SourceBuffer:W.aH,SourceBufferList:W.ia,SpeechGrammar:W.aI,SpeechGrammarList:W.ib,SpeechRecognitionResult:W.aJ,Storage:W.ig,CSSStyleSheet:W.at,StyleSheet:W.at,HTMLTableElement:W.dF,HTMLTableRowElement:W.ik,HTMLTableSectionElement:W.il,HTMLTemplateElement:W.cp,TextTrack:W.aK,TextTrackCue:W.au,VTTCue:W.au,TextTrackCueList:W.ip,TextTrackList:W.iq,TimeRanges:W.iv,Touch:W.aL,TouchEvent:W.bG,TouchList:W.iz,TrackDefaultList:W.iA,CompositionEvent:W.bn,FocusEvent:W.bn,TextEvent:W.bn,UIEvent:W.bn,URL:W.iW,VideoTrackList:W.jd,WheelEvent:W.bp,Window:W.cz,DOMWindow:W.cz,CSSRuleList:W.jl,ClientRect:W.e_,DOMRect:W.e_,GamepadList:W.jq,NamedNodeMap:W.eh,MozNamedAttrMap:W.eh,SpeechRecognitionResultList:W.jE,StyleSheetList:W.jJ,SVGLength:P.aY,SVGLengthList:P.fY,SVGNumber:P.b1,SVGNumberList:P.hG,SVGPointList:P.hO,SVGScriptElement:P.cm,SVGStringList:P.ij,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGElement:P.l,SVGTransform:P.b3,SVGTransformList:P.iB,AudioBuffer:P.f0,AudioParamMap:P.f1,AudioTrackList:P.f3,AudioContext:P.bt,webkitAudioContext:P.bt,BaseAudioContext:P.bt,OfflineAudioContext:P.hH,WebGL2RenderingContext:P.dw,SQLResultSetRowList:P.id})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dl.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.ch.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.cF.$nativeSuperclassTag="ArrayBufferView"
H.dm.$nativeSuperclassTag="ArrayBufferView"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"
W.cJ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(T.mo,[])
else T.mo([])})})()
//# sourceMappingURL=test.dart.js.map
