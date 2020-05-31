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
a[c]=function(){a[c]=function(){H.pi(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.l7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.l7"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.l7(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={kP:function kP(){},
kc:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nj:function(a,b,c,d){if(!!J.R(a).$iu)return new H.fq(a,b,[c,d])
return new H.ca(a,b,[c,d])},
fN:function(){return new P.cm("No element")},
n8:function(){return new P.cm("Too many elements")},
nG:function(a,b){var u=J.aj(a)
if(typeof u!=="number")return u.L()
H.dx(a,0,u-1,b)},
dx:function(a,b,c,d){if(c-b<=32)H.nF(a,b,c,d)
else H.nE(a,b,c,d)},
nF:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.au(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a2()
q=q>0}else q=!1
if(!q)break
p=r-1
t.m(a,r,t.h(a,p))
r=p}t.m(a,r,s)}},
nE:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a4(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a4(a4+a5,2),f=g-j,e=g+j,d=J.au(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
if(typeof p!=="number")return p.a2()
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
if(typeof k!=="number")return k.a2()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a2()
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
H.dx(a3,a4,t-2,a6)
H.dx(a3,s+2,a5,a6)
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
break}}H.dx(a3,t,s,a6)}else H.dx(a3,t,s,a6)},
p:function p(a){this.a=a},
u:function u(){},
df:function df(){},
bf:function bf(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
ca:function ca(a,b,c){this.a=a
this.b=b
this.$ti=c},
fq:function fq(a,b,c){this.a=a
this.b=b
this.$ti=c},
h5:function h5(a,b){this.a=null
this.b=a
this.c=b},
h6:function h6(a,b,c){this.a=a
this.b=b
this.$ti=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
jb:function jb(a,b){this.a=a
this.b=b},
d6:function d6(){},
iL:function iL(){},
dM:function dM(){},
n0:function(){throw H.c(P.z("Cannot modify unmodifiable Map"))},
cP:function(a){var u,t=H.pk(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
p2:function(a){return v.types[a]},
mk:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.R(a).$iB},
e:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.a7(a)
if(typeof u!=="string")throw H.c(H.ah(a))
return u},
cj:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
nw:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.c(P.Y(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
ck:function(a){return H.nn(a)+H.m7(H.cO(a),0,null)},
nn:function(a){var u,t,s,r,q,p,o,n=J.R(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.V||!!n.$ibJ){r=C.v(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.cP(t.length>1&&C.a.H(t,0)===36?C.a.a6(t,1):t)},
no:function(){if(!!self.location)return self.location.href
return},
lC:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
nx:function(a){var u,t,s,r=H.b([],[P.w])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.aR(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.c(H.ah(s))}return H.lC(r)},
lD:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.c(H.ah(s))
if(s<0)throw H.c(H.ah(s))
if(s>65535)return H.nx(a)}return H.lC(a)},
ny:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.ix()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
bE:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.aR(u,10))>>>0,56320|u&1023)}}throw H.c(P.Y(a,0,1114111,null,null))},
bD:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
nv:function(a){var u=H.bD(a).getFullYear()+0
return u},
nt:function(a){var u=H.bD(a).getMonth()+1
return u},
np:function(a){var u=H.bD(a).getDate()+0
return u},
nq:function(a){var u=H.bD(a).getHours()+0
return u},
ns:function(a){var u=H.bD(a).getMinutes()+0
return u},
nu:function(a){var u=H.bD(a).getSeconds()+0
return u},
nr:function(a){var u=H.bD(a).getMilliseconds()+0
return u},
t:function(a){throw H.c(H.ah(a))},
d:function(a,b){if(a==null)J.aj(a)
throw H.c(H.bT(a,b))},
bT:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.ao(!0,b,s,null)
u=J.aj(a)
if(!(b<0)){if(typeof u!=="number")return H.t(u)
t=b>=u}else t=!0
if(t)return P.N(b,a,s,null,u)
return P.dt(b,s)},
oX:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bF(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bF(a,c,!0,b,"end",u)
return new P.ao(!0,b,"end",null)},
ah:function(a){return new P.ao(!0,a,null,null)},
oS:function(a){if(typeof a!=="number")throw H.c(H.ah(a))
return a},
c:function(a){var u
if(a==null)a=new P.dq()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.mr})
u.name=""}else u.toString=H.mr
return u},
mr:function(){return J.a7(this.dartException)},
n:function(a){throw H.c(a)},
o:function(a){throw H.c(P.aP(a))},
aJ:function(a){var u,t,s,r,q,p
a=H.mo(a.replace(String({}),'$receiver$'))
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
lM:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
lz:function(a,b){return new H.hB(a,b==null?null:b.method)},
kQ:function(a,b){var u=b==null,t=u?null:b.method
return new H.fS(a,t,u?null:b.receiver)},
ai:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kA(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.aR(t,16)&8191)===10)switch(s){case 438:return f.$1(H.kQ(H.e(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.lz(H.e(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.mu()
q=$.mv()
p=$.mw()
o=$.mx()
n=$.mA()
m=$.mB()
l=$.mz()
$.my()
k=$.mD()
j=$.mC()
i=r.ag(u)
if(i!=null)return f.$1(H.kQ(u,i))
else{i=q.ag(u)
if(i!=null){i.method="call"
return f.$1(H.kQ(u,i))}else{i=p.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=n.ag(u)
if(i==null){i=m.ag(u)
if(i==null){i=l.ag(u)
if(i==null){i=o.ag(u)
if(i==null){i=k.ag(u)
if(i==null){i=j.ag(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.lz(u,i))}}return f.$1(new H.iK(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dz()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.ao(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dz()
return a},
la:function(a){var u
if(a==null)return new H.er(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.er(a)},
p0:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.m(0,a[u],a[t])}return b},
p8:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.c(P.m("Unsupported number of arguments for wrapped closure"))},
bS:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.p8)
a.$identity=u
return u},
n_:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ia().constructor.prototype):Object.create(new H.bY(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.av
if(typeof t!=="number")return t.w()
$.av=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lq(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.mW(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lq(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
mW:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.p2,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lp:H.kE
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.c("Error in functionType of tearoff")},
mX:function(a,b,c,d){var u=H.kE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lq:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.mZ(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.mX(t,!r,u,b)
if(t===0){r=$.av
if(typeof r!=="number")return r.w()
$.av=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f5("self"):q)+";return "+p+"."+H.e(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.av
if(typeof r!=="number")return r.w()
$.av=r+1
o+=r
r="return function("+o+"){return this."
q=$.bZ
return new Function(r+H.e(q==null?$.bZ=H.f5("self"):q)+"."+H.e(u)+"("+o+");}")()},
mY:function(a,b,c,d){var u=H.kE,t=H.lp
switch(b?-1:a){case 0:throw H.c(H.nC("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
mZ:function(a,b){var u,t,s,r,q,p,o,n=$.bZ
if(n==null)n=$.bZ=H.f5("self")
u=$.lo
if(u==null)u=$.lo=H.f5("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.mY(s,!q,t,b)
if(s===1){n="return function(){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+");"
u=$.av
if(typeof u!=="number")return u.w()
$.av=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.e(n)+"."+H.e(t)+"(this."+H.e(u)+", "+o+");"
u=$.av
if(typeof u!=="number")return u.w()
$.av=u+1
return new Function(n+u+"}")()},
l7:function(a,b,c,d,e,f,g){return H.n_(a,b,c,d,!!e,!!f,g)},
kE:function(a){return a.a},
lp:function(a){return a.c},
f5:function(a){var u,t,s,r=new H.bY("self","target","receiver","name"),q=J.kN(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pe:function(a,b){throw H.c(H.mV(a,H.cP(b.substring(2))))},
l:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.R(a)[b]
else u=!0
if(u)return a
H.pe(a,b)},
oZ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
mV:function(a,b){return new H.f6("CastError: "+P.kL(a)+": type '"+H.e(H.oO(a))+"' is not a subtype of type '"+b+"'")},
oO:function(a){var u,t=J.R(a)
if(!!t.$ic_){u=H.oZ(t)
if(u!=null)return H.pf(u)
return"Closure"}return H.ck(a)},
pi:function(a){throw H.c(new P.fi(a))},
nC:function(a){return new H.hU(a)},
mi:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cO:function(a){if(a==null)return
return a.$ti},
pV:function(a,b,c){return H.kx(a["$a"+H.e(c)],H.cO(b))},
p1:function(a,b,c,d){var u=H.kx(a["$a"+H.e(c)],H.cO(b))
return u==null?null:u[d]},
l9:function(a,b,c){var u=H.kx(a["$a"+H.e(b)],H.cO(a))
return u==null?null:u[c]},
aM:function(a,b){var u=H.cO(a)
return u==null?null:u[b]},
pf:function(a){return H.bo(a,null)},
bo:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.cP(a[0].name)+H.m7(a,1,b)
if(typeof a=="function")return H.cP(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.e(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.e(b[t])}if('func' in a)return H.oj(a,b)
if('futureOr' in a)return"FutureOr<"+H.bo("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oj:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.h])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.w(p,a0[m])
l=u[q]
if(l!=null&&l!==P.a4)p+=" extends "+H.bo(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bo(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bo(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bo(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.p_(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bo(d[c],a0)+(" "+H.e(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
m7:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.U("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bo(p,c)}return"<"+u.i(0)+">"},
kx:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
pT:function(a,b,c){return a.apply(b,H.kx(J.R(b)["$a"+H.e(c)],H.cO(b)))},
pU:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pb:function(a){var u,t,s,r,q=$.mj.$1(a),p=$.ka[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kg[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mc.$2(a,q)
if(q!=null){p=$.ka[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kg[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kt(u)
$.ka[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kg[q]=u
return u}if(s==="-"){r=H.kt(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mm(a,u)
if(s==="*")throw H.c(P.iJ(q))
if(v.leafTags[q]===true){r=H.kt(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mm(a,u)},
mm:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lc(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kt:function(a){return J.lc(a,!1,null,!!a.$iB)},
pc:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kt(u)
else return J.lc(u,c,null,null)},
p6:function(){if(!0===$.lb)return
$.lb=!0
H.p7()},
p7:function(){var u,t,s,r,q,p,o,n
$.ka=Object.create(null)
$.kg=Object.create(null)
H.p5()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mn.$1(q)
if(p!=null){o=H.pc(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
p5:function(){var u,t,s,r,q,p,o=C.K()
o=H.bR(C.L,H.bR(C.M,H.bR(C.w,H.bR(C.w,H.bR(C.N,H.bR(C.O,H.bR(C.P(C.v),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mj=new H.kd(r)
$.mc=new H.ke(q)
$.mn=new H.kf(p)},
bR:function(a,b){return a(b)||b},
nc:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.c(P.V("Illegal RegExp pattern ("+String(p)+")",a,null))},
mq:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
oY:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
mo:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lf:function(a,b,c){var u=H.ph(a,b,c)
return u},
ph:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.mo(b),'g'),H.oY(c))},
fb:function fb(){},
fc:function fc(a,b,c,d){var _=this
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
hB:function hB(a,b){this.a=a
this.b=b},
fS:function fS(a,b,c){this.a=a
this.b=b
this.c=c},
iK:function iK(a){this.a=a},
kA:function kA(a){this.a=a},
er:function er(a){this.a=a
this.b=null},
c_:function c_(){},
ij:function ij(){},
ia:function ia(){},
bY:function bY(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
f6:function f6(a){this.a=a},
hU:function hU(a){this.a=a},
I:function I(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
fR:function fR(a){this.a=a},
fW:function fW(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fX:function fX(a,b){this.a=a
this.$ti=b},
fY:function fY(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kd:function kd(a){this.a=a},
ke:function ke(a){this.a=a},
kf:function kf(a){this.a=a},
fQ:function fQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bP:function(a){return a},
nm:function(a){return new Int8Array(a)},
aK:function(a,b,c){if(a>>>0!==a||a>=c)throw H.c(H.bT(b,a))},
oh:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.c(H.oX(a,b,c))
return b},
cf:function cf(){},
bh:function bh(){},
dk:function dk(){},
cg:function cg(){},
dl:function dl(){},
ht:function ht(){},
hu:function hu(){},
hv:function hv(){},
hw:function hw(){},
hx:function hx(){},
dm:function dm(){},
ch:function ch(){},
cB:function cB(){},
cC:function cC(){},
cD:function cD(){},
cE:function cE(){},
p_:function(a){return J.lv(a?Object.keys(a):[],null)},
pk:function(a){return v.mangledGlobalNames[a]},
pd:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lc:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kb:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lb==null){H.p6()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.c(P.iJ("Return interceptor for "+H.e(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lg()]
if(r!=null)return r
r=H.pb(a)
if(r!=null)return r
if(typeof a=="function")return C.X
u=Object.getPrototypeOf(a)
if(u==null)return C.D
if(u===Object.prototype)return C.D
if(typeof s=="function"){Object.defineProperty(s,$.lg(),{value:C.q,enumerable:false,writable:true,configurable:true})
return C.q}return C.q},
n9:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.c(P.kD(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.c(P.Y(a,0,4294967295,"length",null))
return J.lv(new Array(a),b)},
lv:function(a,b){return J.kN(H.b(a,[b]))},
kN:function(a){a.fixed$length=Array
return a},
na:function(a,b){return J.cS(a,b)},
R:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.da.prototype
return J.d9.prototype}if(typeof a=="string")return J.bd.prototype
if(a==null)return J.db.prototype
if(typeof a=="boolean")return J.fP.prototype
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a4)return a
return J.kb(a)},
au:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a4)return a
return J.kb(a)},
eQ:function(a){if(a==null)return a
if(a.constructor==Array)return J.bc.prototype
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a4)return a
return J.kb(a)},
mh:function(a){if(typeof a=="number")return J.c7.prototype
if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.a4))return J.bJ.prototype
return a},
cN:function(a){if(typeof a=="string")return J.bd.prototype
if(a==null)return a
if(!(a instanceof P.a4))return J.bJ.prototype
return a},
bV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.be.prototype
return a}if(a instanceof P.a4)return a
return J.kb(a)},
A:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.R(a).t(a,b)},
li:function(a,b){if(typeof a=="number"&&typeof b=="number")return a*b
return J.mh(a).q(a,b)},
bX:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mk(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.au(a).h(a,b)},
kB:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mk(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.eQ(a).m(a,b,c)},
mM:function(a,b){return J.cN(a).H(a,b)},
mN:function(a,b,c){return J.bV(a).fY(a,b,c)},
mO:function(a,b,c,d){return J.bV(a).hg(a,b,c,d)},
mP:function(a,b){return J.cN(a).Y(a,b)},
cS:function(a,b){return J.mh(a).aU(a,b)},
kC:function(a,b){return J.au(a).F(a,b)},
eT:function(a,b){return J.eQ(a).M(a,b)},
mQ:function(a,b,c,d){return J.bV(a).hH(a,b,c,d)},
lj:function(a,b){return J.eQ(a).I(a,b)},
mR:function(a){return J.bV(a).ghm(a)},
lk:function(a){return J.bV(a).gc5(a)},
cT:function(a){return J.R(a).gK(a)},
aN:function(a){return J.eQ(a).gU(a)},
aj:function(a){return J.au(a).gl(a)},
ll:function(a){return J.eQ(a).ic(a)},
mS:function(a,b){return J.bV(a).ii(a,b)},
mT:function(a,b,c){return J.cN(a).u(a,b,c)},
mU:function(a){return J.cN(a).ir(a)},
a7:function(a){return J.R(a).i(a)},
a:function a(){},
fP:function fP(){},
db:function db(){},
dc:function dc(){},
hF:function hF(){},
bJ:function bJ(){},
be:function be(){},
bc:function bc(a){this.$ti=a},
kO:function kO(a){this.$ti=a},
ad:function ad(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
c7:function c7(){},
da:function da(){},
d9:function d9(){},
bd:function bd(){}},P={
nS:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.oP()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bS(new P.jd(s),1)).observe(u,{childList:true})
return new P.jc(s,u,t)}else if(self.setImmediate!=null)return P.oQ()
return P.oR()},
nT:function(a){self.scheduleImmediate(H.bS(new P.je(a),0))},
nU:function(a){self.setImmediate(H.bS(new P.jf(a),0))},
nV:function(a){P.kV(C.n,a)},
kV:function(a,b){var u=C.c.a4(a.a,1000)
return P.o1(u<0?0:u,b)},
lL:function(a,b){var u=C.c.a4(a.a,1000)
return P.o2(u<0?0:u,b)},
o1:function(a,b){var u=new P.ex()
u.eF(a,b)
return u},
o2:function(a,b){var u=new P.ex()
u.eG(a,b)
return u},
pQ:function(a){return new P.bL(a,1)},
nY:function(){return C.a6},
nZ:function(a){return new P.bL(a,3)},
om:function(a,b){return new P.jI(a,[b])},
oI:function(){var u,t
for(;u=$.bQ,u!=null;){$.cM=null
t=u.b
$.bQ=t
if(t==null)$.cL=null
u.a.$0()}},
oN:function(){$.l5=!0
try{P.oI()}finally{$.cM=null
$.l5=!1
if($.bQ!=null)$.lh().$1(P.md())}},
oL:function(a){var u=new P.dT(a)
if($.bQ==null){$.bQ=$.cL=u
if(!$.l5)$.lh().$1(P.md())}else $.cL=$.cL.b=u},
oM:function(a){var u,t,s=$.bQ
if(s==null){P.oL(a)
$.cM=$.cL
return}u=new P.dT(a)
t=$.cM
if(t==null){u.b=s
$.bQ=$.cM=u}else{u.b=t.b
$.cM=t.b=u
if(u.b==null)$.cL=u}},
lK:function(a,b){var u=$.at
if(u===C.f)return P.kV(a,b)
return P.kV(a,u.hn(b))},
nJ:function(a,b){var u=$.at
if(u===C.f)return P.lL(a,b)
return P.lL(a,u.dm(b,P.dG))},
m8:function(a,b,c,d,e){var u={}
u.a=d
P.oM(new P.k3(u,e))},
oJ:function(a,b,c,d){var u,t=$.at
if(t===c)return d.$0()
$.at=c
u=t
try{t=d.$0()
return t}finally{$.at=u}},
oK:function(a,b,c,d,e){var u,t=$.at
if(t===c)return d.$1(e)
$.at=c
u=t
try{t=d.$1(e)
return t}finally{$.at=u}},
jd:function jd(a){this.a=a},
jc:function jc(a,b,c){this.a=a
this.b=b
this.c=c},
je:function je(a){this.a=a},
jf:function jf(a){this.a=a},
ex:function ex(){this.c=0},
jM:function jM(a,b){this.a=a
this.b=b},
jL:function jL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bL:function bL(a,b){this.a=a
this.b=b},
bM:function bM(a){var _=this
_.a=a
_.d=_.c=_.b=null},
jI:function jI(a,b){this.a=a
this.$ti=b},
dT:function dT(a){this.a=a
this.b=null},
dB:function dB(){},
id:function id(){},
dG:function dG(){},
jV:function jV(){},
k3:function k3(a,b){this.a=a
this.b=b},
jt:function jt(){},
ju:function ju(a,b){this.a=a
this.b=b},
jv:function jv(a,b,c){this.a=a
this.b=b
this.c=c},
ne:function(a,b){return new H.I([a,b])},
kR:function(a,b){return new H.I([a,b])},
ng:function(a){return H.p0(a,new H.I([null,null]))},
c9:function(a){return new P.jq([a])},
l0:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
o0:function(a,b){var u=new P.e8(a,b)
u.c=a.e
return u},
n7:function(a,b,c){var u,t
if(P.l6(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.h])
$.ab.push(a)
try{P.ol(a,u)}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=P.lI(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
kM:function(a,b,c){var u,t
if(P.l6(a))return b+"..."+c
u=new P.U(b)
$.ab.push(a)
try{t=u
t.a=P.lI(t.a,a,", ")}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
l6:function(a){var u,t
for(u=$.ab.length,t=0;t<u;++t)if(a===$.ab[t])return!0
return!1},
ol:function(a,b){var u,t,s,r,q,p,o,n=a.gU(a),m=0,l=0
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
nf:function(a,b,c){var u=P.ne(b,c)
a.I(0,new P.fZ(u))
return u},
lw:function(a,b){var u,t,s=P.c9(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)s.n(0,a[t])
return s},
kT:function(a){var u,t={}
if(P.l6(a))return"{...}"
u=new P.U("")
try{$.ab.push(a)
u.a+="{"
t.a=!0
J.lj(a,new P.h3(t,u))
u.a+="}"}finally{if(0>=$.ab.length)return H.d($.ab,-1)
$.ab.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
jq:function jq(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
jr:function jr(a){this.a=a
this.c=this.b=null},
e8:function e8(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
fM:function fM(){},
fZ:function fZ(a){this.a=a},
h_:function h_(){},
x:function x(){},
h2:function h2(){},
h3:function h3(a,b){this.a=a
this.b=b},
a3:function a3(){},
jN:function jN(){},
h4:function h4(){},
dN:function dN(a,b){this.a=a
this.$ti=b},
jx:function jx(){},
e9:function e9(){},
eD:function eD(){},
nM:function(a,b,c,d){if(b instanceof Uint8Array)return P.nN(!1,b,c,d)
return},
nN:function(a,b,c,d){var u,t,s=$.mE()
if(s==null)return
u=0===c
if(u&&!0)return P.kY(s,b)
t=b.length
d=P.aZ(c,d,t)
if(u&&d===t)return P.kY(s,b)
return P.kY(s,b.subarray(c,d))},
kY:function(a,b){if(P.nP(b))return
return P.nQ(a,b)},
nQ:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.ai(t)}return},
nP:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
nO:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.ai(t)}return},
ma:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.t(c)
u=J.au(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.a8()
if((s&127)!==s)return t-b}return c-b},
ln:function(a,b,c,d,e,f){if(C.c.bf(f,4)!==0)throw H.c(P.V("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.c(P.V("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.c(P.V("Invalid base64 padding, more than two '=' characters",a,b))},
f2:function f2(){},
f3:function f3(){},
f8:function f8(){},
fd:function fd(){},
fs:function fs(){},
fK:function fK(a,b,c,d){var _=this
_.a=a
_.c=b
_.d=c
_.e=d},
fJ:function fJ(a){this.a=a},
iT:function iT(){},
iV:function iV(){},
jT:function jT(a){this.b=0
this.c=a},
iU:function iU(a){this.a=a},
jS:function jS(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
eR:function(a,b,c){var u=H.nw(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.c(P.V(a,null,null))},
n4:function(a){if(a instanceof H.c_)return a.i(0)
return"Instance of '"+H.e(H.ck(a))+"'"},
nh:function(a,b,c){var u,t,s=J.n9(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
kS:function(a,b,c){var u,t=H.b([],[c])
for(u=J.aN(a);u.v();)t.push(u.gE(u))
if(b)return t
return J.kN(t)},
cn:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.aZ(b,c,u)
if(b<=0){if(typeof c!=="number")return c.P()
t=c<u}else t=!0
return H.lD(t?C.b.em(a,b,c):a)}if(!!J.R(a).$ich)return H.ny(a,b,P.aZ(b,c,a.length))
return P.nH(a,b,c)},
nH:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.c(P.Y(b,0,J.aj(a),q,q))
u=c==null
if(!u&&c<b)throw H.c(P.Y(c,b,J.aj(a),q,q))
t=J.aN(a)
for(s=0;s<b;++s)if(!t.v())throw H.c(P.Y(b,0,s,q,q))
r=[]
if(u)for(;t.v();)r.push(t.gE(t))
else for(s=b;s<c;++s){if(!t.v())throw H.c(P.Y(c,b,s,q,q))
r.push(t.gE(t))}return H.lD(r)},
nA:function(a){return new H.fQ(a,H.nc(a,!1,!0,!1,!1,!1))},
lI:function(a,b,c){var u=J.aN(b)
if(!u.v())return a
if(c.length===0){do a+=H.e(u.gE(u))
while(u.v())}else{a+=H.e(u.gE(u))
for(;u.v();)a=a+c+H.e(u.gE(u))}return a},
lO:function(){var u=H.no()
if(u!=null)return P.nL(u)
throw H.c(P.z("'Uri.base' is not supported"))},
eE:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.e){u=$.mK().b
if(typeof b!=="string")H.n(H.ah(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.ghG().c7(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.bE(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
n1:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
n2:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
d1:function(a){if(a>=10)return""+a
return"0"+a},
ls:function(a){return new P.ba(1000*a)},
kL:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a7(a)
if(typeof a==="string")return JSON.stringify(a)
return P.n4(a)},
cU:function(a){return new P.ao(!1,null,null,a)},
kD:function(a,b,c){return new P.ao(!0,a,b,c)},
dt:function(a,b){return new P.bF(null,null,!0,a,b,"Value not in range")},
Y:function(a,b,c,d,e){return new P.bF(b,c,!0,a,d,"Invalid value")},
aZ:function(a,b,c){var u
if(typeof a!=="number")return H.t(a)
if(0<=a){if(typeof c!=="number")return H.t(c)
u=a>c}else u=!0
if(u)throw H.c(P.Y(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.t(c)
u=b>c}else u=!0
if(u)throw H.c(P.Y(b,a,c,"end",null))
return b}return c},
lE:function(a,b){if(typeof a!=="number")return a.P()
if(a<0)throw H.c(P.Y(a,0,null,b,null))},
N:function(a,b,c,d,e){var u=e==null?J.aj(b):e
return new P.fL(u,!0,a,c,"Index out of range")},
z:function(a){return new P.iM(a)},
iJ:function(a){return new P.iI(a)},
lH:function(a){return new P.cm(a)},
aP:function(a){return new P.fa(a)},
m:function(a){return new P.e1(a)},
V:function(a,b,c){return new P.fD(a,b,c)},
ni:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sl(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
le:function(a){H.pd(a)},
nL:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.lN(e<e?C.a.u(a,0,e):a,5,f).gec()
else if(u===32)return P.lN(C.a.u(a,5,e),0,f).gec()}t=new Array(8)
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
if(P.m9(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.iw()
if(r>=0)if(P.m9(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.w()
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
l=!1}else{if(!(n<e&&n===o+2&&C.a.a5(a,"..",o)))j=n>o+2&&C.a.a5(a,"/..",n-3)
else j=!0
if(j){k=f
l=!1}else{if(r===4)if(C.a.a5(a,"file",0)){if(q<=0){if(!C.a.a5(a,"/",o)){i="file:///"
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
a=C.a.aZ(a,o,n,"/");++e
n=h}k="file"}else if(C.a.a5(a,"http",0)){if(t&&p+3===o&&C.a.a5(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.aZ(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.a5(a,"https",0)){if(t&&p+4===o&&C.a.a5(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.aZ(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.u(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.jA(a,r,q,p,o,n,m,k)}return P.o3(a,0,e,r,q,p,o,n,m,k)},
lQ:function(a){var u=P.h
return C.b.hN(H.b(a.split("&"),[u]),P.kR(u,u),new P.iR(C.e))},
nK:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.iO(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.Y(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.eR(C.a.u(a,s,t),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.eR(C.a.u(a,s,c),n,n)
if(typeof p!=="number")return p.a2()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
lP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.iP(a),d=new P.iQ(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.w])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.Y(a,t)
if(p===58){if(t===b){++t
if(C.a.Y(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gas(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.nK(a,s,c)
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
o3:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.ob(a,b,d)
else{if(d===b)P.bO(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oc(a,u,e-1):""
s=P.o8(a,e,f,!1)
if(typeof f!=="number")return f.w()
r=f+1
if(typeof g!=="number")return H.t(g)
q=r<g?P.oa(P.eR(C.a.u(a,r,g),new P.jO(a,f),n),j):n}else{q=n
s=q
t=""}p=P.o9(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.P()
o=h<i?P.l2(a,h+1,i,n):n
return new P.bN(j,t,s,q,p,o,i<c?P.o7(a,i+1,c):n)},
m1:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
bO:function(a,b,c){throw H.c(P.V(c,a,b))},
oa:function(a,b){if(a!=null&&a===P.m1(b))return
return a},
o8:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.Y(a,b)===91){if(typeof c!=="number")return c.L()
u=c-1
if(C.a.Y(a,u)!==93)P.bO(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.o5(a,t,u)
if(typeof s!=="number")return s.P()
if(s<u){r=s+1
q=P.m6(a,C.a.a5(a,"25",r)?s+3:r,u,"%25")}else q=""
P.lP(a,t,s)
return C.a.u(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.t(c)
p=b
for(;p<c;++p)if(C.a.Y(a,p)===58){s=C.a.bt(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.m6(a,C.a.a5(a,"25",r)?s+3:r,c,"%25")}else q=""
P.lP(a,b,s)
return"["+C.a.u(a,b,s)+q+"]"}return P.oe(a,b,c)},
o5:function(a,b,c){var u,t=C.a.bt(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.t(c)
u=t<c}else u=!1
return u?t:c},
m6:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.U(d):null
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.Y(a,u)
if(r===37){q=P.l3(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.U("")
o=l.a+=C.a.u(a,t,u)
if(p)q=C.a.u(a,u,u+3)
else if(q==="%")P.bO(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.U("")
if(t<u){l.a+=C.a.u(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.Y(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.U("")
l.a+=C.a.u(a,t,u)
l.a+=P.l1(r)
u+=m
t=u}}}if(l==null)return C.a.u(a,b,c)
if(t<c)l.a+=C.a.u(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oe:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.t(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.Y(a,u)
if(q===37){p=P.l3(a,u,!0)
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
if(o>=8)return H.d(C.A,o)
o=(C.A[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.U("")
if(t<u){s.a+=C.a.u(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.k,o)
o=(C.k[o]&1<<(q&15))!==0}else o=!1
if(o)P.bO(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.Y(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.U("")
n=C.a.u(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.l1(q)
u+=l
t=u}}}}if(s==null)return C.a.u(a,b,c)
if(t<c){n=C.a.u(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
ob:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.m3(C.a.H(a,b)))P.bO(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.m,r)
r=(C.m[r]&1<<(s&15))!==0}else r=!1
if(!r)P.bO(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.u(a,b,c)
return P.o4(t?a.toLowerCase():a)},
o4:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oc:function(a,b,c){return P.cJ(a,b,c,C.a_,!1)},
o9:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.cJ(a,b,c,C.B,!0):C.j.iN(d,new P.jP(),P.h).j(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.a3(u,"/"))u="/"+u
return P.od(u,e,f)},
od:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.a3(a,"/"))return P.of(a,!u||c)
return P.og(a)},
l2:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.c(P.cU("Both query and queryParameters specified"))
return P.cJ(a,b,c,C.l,!0)}if(d==null)return
u=new P.U("")
t.a=""
d.I(0,new P.jQ(new P.jR(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
o7:function(a,b,c){return P.cJ(a,b,c,C.l,!0)},
l3:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.Y(a,b+1)
t=C.a.Y(a,p)
s=H.kc(u)
r=H.kc(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.aR(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.bE(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.u(a,b,b+3).toUpperCase()
return},
l1:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.w])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.w])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.h8(a,6*r)&63|s
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
q+=3}}return P.cn(t,0,null)},
cJ:function(a,b,c,d,e){var u=P.m5(a,b,c,d,e)
return u==null?C.a.u(a,b,c):u},
m5:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.P()
if(typeof c!=="number")return H.t(c)
if(!(o<c))break
c$0:{u=C.a.Y(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.l3(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.k,t)
t=(C.k[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.bO(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.Y(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.l1(u)}}if(m==null)m=new P.U("")
m.a+=C.a.u(a,n,o)
m.a+=H.e(s)
if(typeof r!=="number")return H.t(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.P()
if(n<c)m.a+=C.a.u(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
m4:function(a){if(C.a.a3(a,"."))return!0
return C.a.dP(a,"/.")!==-1},
og:function(a){var u,t,s,r,q,p,o
if(!P.m4(a))return a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.A(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.j(u,"/")},
of:function(a,b){var u,t,s,r,q,p
if(!P.m4(a))return!b?P.m2(a):a
u=H.b([],[P.h])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gas(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gas(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.m2(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.j(u,"/")},
m2:function(a){var u,t,s,r=a.length
if(r>=2&&P.m3(J.mM(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.u(a,0,u)+"%3A"+C.a.a6(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.m,s)
s=(C.m[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
o6:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.c(P.cU("Invalid URL encoding"))}}return u},
l4:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.e!==d)s=!1
else s=!0
if(s)return C.a.u(a,b,c)
else r=new H.p(C.a.u(a,b,c))}else{r=H.b([],[P.w])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.c(P.cU("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.c(P.cU("Truncated URI"))
r.push(P.o6(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.iU(!1).c7(r)},
m3:function(a){var u=a|32
return 97<=u&&u<=122},
lN:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.w])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.c(P.V(m,a,t))}}if(s<0&&t>b)throw H.c(P.V(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gas(l)
if(r!==44||t!==p+7||!C.a.a5(a,"base64",p+1))throw H.c(P.V("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.J.hW(0,a,o,u)
else{n=P.m5(a,o,u,C.l,!0)
if(n!=null)a=C.a.aZ(a,o,u,n)}return new P.iN(a,l,c)},
oi:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.ni(22,new P.jZ(),P.bH),n=new P.jY(o),m=new P.k_(),l=new P.k0(),k=n.$2(0,225)
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
m9:function(a,b,c,d,e){var u,t,s,r,q,p=$.mL()
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
aL:function aL(){},
ae:function ae(a,b){this.a=a
this.b=b},
K:function K(){},
ba:function ba(a){this.a=a},
fo:function fo(){},
fp:function fp(){},
bw:function bw(){},
dq:function dq(){},
ao:function ao(a,b,c,d){var _=this
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
fL:function fL(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
iM:function iM(a){this.a=a},
iI:function iI(a){this.a=a},
cm:function cm(a){this.a=a},
fa:function fa(a){this.a=a},
hE:function hE(){},
dz:function dz(){},
fi:function fi(a){this.a=a},
e1:function e1(a){this.a=a},
fD:function fD(a,b,c){this.a=a
this.b=b
this.c=c},
fF:function fF(){},
w:function w(){},
j:function j(){},
fO:function fO(){},
q:function q(){},
T:function T(){},
bi:function bi(){},
ac:function ac(){},
a4:function a4(){},
h:function h(){},
U:function U(a){this.a=a},
iR:function iR(a){this.a=a},
iO:function iO(a){this.a=a},
iP:function iP(a){this.a=a},
iQ:function iQ(a,b){this.a=a
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
jO:function jO(a,b){this.a=a
this.b=b},
jP:function jP(){},
jR:function jR(a,b){this.a=a
this.b=b},
jQ:function jQ(a){this.a=a},
iN:function iN(a,b,c){this.a=a
this.b=b
this.c=c},
jZ:function jZ(){},
jY:function jY(a){this.a=a},
k_:function k_(){},
k0:function k0(){},
jA:function jA(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jj:function jj(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
oV:function(a){var u,t=J.R(a)
if(!!t.$iaS){u=t.gds(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eC(a.data,a.height,a.width)},
oU:function(a){if(a instanceof P.eC)return{data:a.a,height:a.b,width:a.c}
return a},
b2:function(a){var u,t,s,r,q
if(a==null)return
u=P.kR(P.h,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
u.m(0,q,a[q])}return u},
oT:function(a){var u={}
a.I(0,new P.k4(u))
return u},
jC:function jC(){},
jE:function jE(a,b){this.a=a
this.b=b},
jF:function jF(a,b){this.a=a
this.b=b},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
k4:function k4(a){this.a=a},
jD:function jD(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
fA:function fA(){},
fB:function fB(){},
jp:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
o_:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
js:function js(){},
aa:function aa(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
aT:function aT(){},
fU:function fU(){},
aX:function aX(){},
hC:function hC(){},
hK:function hK(){},
cl:function cl(){},
ie:function ie(){},
k:function k(){},
b_:function b_(){},
ix:function ix(){},
e6:function e6(){},
e7:function e7(){},
eh:function eh(){},
ei:function ei(){},
et:function et(){},
eu:function eu(){},
eA:function eA(){},
eB:function eB(){},
bH:function bH(){},
eY:function eY(){},
eZ:function eZ(){},
f_:function f_(a){this.a=a},
f0:function f0(){},
bq:function bq(){},
hD:function hD(){},
dU:function dU(){},
dv:function dv(){},
i9:function i9(){},
ep:function ep(){},
eq:function eq(){}},W={
lm:function(){var u=document.createElement("a")
return u},
kG:function(){var u=document.createElement("canvas")
return u},
n3:function(a,b,c){var u=document.body,t=(u&&C.r).af(u,a,b,c)
t.toString
u=new H.cx(new W.a5(t),new W.fr(),[W.D])
return u.gaJ(u)},
kJ:function(a){return"wheel"},
c1:function(a){var u,t,s,r="element tag unavailable"
try{u=J.bV(a)
t=u.ge9(a)
if(typeof t==="string")r=u.ge9(a)}catch(s){H.ai(s)}return r},
n6:function(a){var u,t=document.createElement("input"),s=t
try{s.type=a}catch(u){H.ai(u)}return s},
jo:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
m_:function(a,b,c,d){var u=W.jo(W.jo(W.jo(W.jo(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
Z:function(a,b,c,d){var u=W.mb(new W.jm(c),W.i)
if(u!=null&&!0)J.mO(a,b,u,!1)
return new W.jl(a,b,u,!1)},
lZ:function(a){var u=W.lm(),t=window.location
u=new W.cz(new W.jw(u,t))
u.eA(a)
return u},
nW:function(a,b,c,d){return!0},
nX:function(a,b,c,d){var u,t=d.a,s=t.a
s.href=c
u=s.hostname
t=t.b
if(!(u==t.hostname&&s.port==t.port&&s.protocol==t.protocol))if(u==="")if(s.port===""){t=s.protocol
t=t===":"||t===""}else t=!1
else t=!1
else t=!0
return t},
m0:function(){var u=P.h,t=P.lw(C.o,u),s=H.b(["TEMPLATE"],[u])
t=new W.jJ(t,P.c9(u),P.c9(u),P.c9(u),null)
t.eE(null,new H.h6(C.o,new W.jK(),[H.aM(C.o,0),u]),s,null)
return t},
mb:function(a,b){var u=$.at
if(u===C.f)return a
return u.dm(a,b)},
r:function r(){},
eU:function eU(){},
eV:function eV(){},
eW:function eW(){},
br:function br(){},
bs:function bs(){},
bu:function bu(){},
b8:function b8(){},
fe:function fe(){},
H:function H(){},
c0:function c0(){},
ff:function ff(){},
al:function al(){},
aw:function aw(){},
fg:function fg(){},
fh:function fh(){},
fk:function fk(){},
ap:function ap(){},
fl:function fl(){},
d3:function d3(){},
d4:function d4(){},
fm:function fm(){},
fn:function fn(){},
jh:function jh(a,b){this.a=a
this.b=b},
S:function S(){},
fr:function fr(){},
i:function i(){},
f:function f(){},
aq:function aq(){},
c3:function c3(){},
fy:function fy(){},
fC:function fC(){},
ax:function ax(){},
fI:function fI(){},
c5:function c5(){},
aS:function aS(){},
c6:function c6(){},
bB:function bB(){},
h0:function h0(){},
hm:function hm(){},
cd:function cd(){},
hn:function hn(){},
ho:function ho(a){this.a=a},
hp:function hp(){},
hq:function hq(a){this.a=a},
aA:function aA(){},
hr:function hr(){},
aB:function aB(){},
a5:function a5(a){this.a=a},
D:function D(){},
dn:function dn(){},
aC:function aC(){},
hH:function hH(){},
hS:function hS(){},
hT:function hT(a){this.a=a},
hV:function hV(){},
aE:function aE(){},
i6:function i6(){},
aF:function aF(){},
i7:function i7(){},
aG:function aG(){},
ib:function ib(){},
ic:function ic(a){this.a=a},
ar:function ar(){},
dC:function dC(){},
ig:function ig(){},
ih:function ih(){},
co:function co(){},
aH:function aH(){},
as:function as(){},
ik:function ik(){},
il:function il(){},
ir:function ir(){},
aI:function aI(){},
bG:function bG(){},
iv:function iv(){},
iw:function iw(){},
bk:function bk(){},
iS:function iS(){},
j9:function j9(){},
bn:function bn(){},
cy:function cy(){},
ji:function ji(){},
dW:function dW(){},
jn:function jn(){},
ee:function ee(){},
jB:function jB(){},
jG:function jG(){},
jg:function jg(){},
jk:function jk(a){this.a=a},
jl:function jl(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jm:function jm(a){this.a=a},
cz:function cz(a){this.a=a},
M:function M(){},
dp:function dp(a){this.a=a},
hz:function hz(a){this.a=a},
hy:function hy(a,b,c){this.a=a
this.b=b
this.c=c},
em:function em(){},
jy:function jy(){},
jz:function jz(){},
jJ:function jJ(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
jK:function jK(){},
jH:function jH(){},
d7:function d7(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
aW:function aW(){},
jw:function jw(a,b){this.a=a
this.b=b},
eF:function eF(a){this.a=a},
jU:function jU(a){this.a=a},
dV:function dV(){},
dX:function dX(){},
dY:function dY(){},
dZ:function dZ(){},
e_:function e_(){},
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
cF:function cF(){},
cG:function cG(){},
en:function en(){},
eo:function eo(){},
es:function es(){},
ev:function ev(){},
ew:function ew(){},
cH:function cH(){},
cI:function cI(){},
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
if(a.length!==1||b.length!==1)throw H.c(P.m("The given low and high character strings for a Range must have one and only one characters."))
u=C.a.H(a,0)
t=C.a.H(b,0)
if(u>t){s=t
t=u
u=s}return new K.hN(u,t)},
v:function(a){var u=new K.hW()
u.ew(a)
return u},
aO:function aO(){},
d8:function d8(){},
bg:function bg(){},
a9:function a9(){this.a=null},
hN:function hN(a,b){this.a=a
this.b=b},
hW:function hW(){this.a=null}},L={
it:function(){var u=new L.is(),t=P.h
u.a=new H.I([t,L.dA])
u.b=new H.I([t,L.dI])
u.c=P.c9(t)
return u},
dA:function dA(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dH:function dH(a,b,c){this.a=a
this.b=b
this.c=c},
dI:function dI(a){this.b=a
this.c=null},
is:function is(){var _=this
_.d=_.c=_.b=_.a=null},
dK:function dK(a){this.b=a
this.a=this.c=null}},O={
kH:function(a){var u=new O.b9([a])
u.bF(a)
return u},
b9:function b9(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cc:function cc(){this.b=this.a=null},
dh:function dh(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
he:function he(a,b){this.a=a
this.b=b},
hf:function hf(){},
hg:function hg(a,b){this.a=a
this.b=b},
hh:function hh(){},
hi:function hi(a,b){this.a=a
this.b=b},
hj:function hj(){},
hk:function hk(a,b){this.a=a
this.b=b},
hl:function hl(){},
h8:function h8(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cb:function cb(){},
h9:function h9(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
ay:function ay(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hb:function hb(){var _=this
_.e=_.d=_.c=_.b=null},
hc:function hc(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hd:function hd(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dD:function dD(){}},E={
lX:function(){if(J.kC(window.navigator.vendor,"Google"))return C.H
if(J.kC(window.navigator.userAgent,"Firefox"))return C.t
var u=window.navigator.appVersion
if(J.au(u).F(u,"Trident")||C.a.F(u,"Edge"))return C.u
if(J.kC(window.navigator.appName,"Microsoft"))return C.u
return C.I},
lY:function(){var u=window.navigator.appVersion
if(J.au(u).F(u,"Win"))return C.a2
if(C.a.F(u,"Mac"))return C.C
if(C.a.F(u,"Linux"))return C.a3
return C.a4},
nB:function(a,b){var u=new E.hO(a)
u.ev(a,b)
return u},
nI:function(a,b,c,d,e){var u,t,s=J.R(a)
if(!!s.$ibu)return E.lJ(a,!0,!0,!0,!1)
u=W.kG()
t=u.style
t.width="100%"
t.height="100%"
s.gc5(a).n(0,u)
return E.lJ(u,!0,!0,!0,!1)},
lJ:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dF(),o=C.i.cF(a,"webgl2",P.ng(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.n(P.m("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.nB(o,a)
u=new T.io(o)
o.getParameter(3379)
u.c=o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new X.dO(a)
t=new X.fT()
t.c=new X.am(!1,!1,!1)
t.d=P.c9(P.w)
u.b=t
t=new X.hs(u)
t.f=0
t.r=V.aY()
t.x=V.aY()
t.ch=t.Q=1
u.c=t
t=new X.h1(u)
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
u.z=H.b([],[[P.dB,P.a4]])
t=$.ft
u.Q=(t==null?$.ft=new E.e0(E.lX(),E.lY()):t).a===C.t?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.Z(r,"contextmenu",u.gfh(),!1))
u.z.push(W.Z(a,"focus",u.gfn(),!1))
u.z.push(W.Z(a,"blur",u.gfb(),!1))
u.z.push(W.Z(r,"keyup",u.gfs(),!1))
u.z.push(W.Z(r,"keydown",u.gfp(),!1))
u.z.push(W.Z(a,"mousedown",u.gfw(),!1))
u.z.push(W.Z(a,"mouseup",u.gfC(),!1))
u.z.push(W.Z(a,q,u.gfA(),!1))
s=u.z
W.kJ(a)
W.kJ(a)
s.push(W.Z(a,W.kJ(a),u.gfE(),!1))
u.z.push(W.Z(r,q,u.gfj(),!1))
u.z.push(W.Z(r,"mouseup",u.gfl(),!1))
u.z.push(W.Z(r,"pointerlockchange",u.gfG(),!1))
u.z.push(W.Z(a,"touchstart",u.gfT(),!1))
u.z.push(W.Z(a,"touchend",u.gfP(),!1))
u.z.push(W.Z(a,"touchmove",u.gfR(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.ae(Date.now(),!1)
p.db=0
p.d4()
return p},
f4:function f4(){},
bb:function bb(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bt:function bt(a){this.b=a},
bC:function bC(a){this.b=a},
e0:function e0(a,b){this.a=a
this.b=b},
hO:function hO(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
hP:function hP(a){this.a=a},
hQ:function hQ(a){this.a=a},
hR:function hR(a){this.a=a},
dF:function dF(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.f=_.e=_.d=_.c=_.b=null},
iq:function iq(a){this.a=a}},Z={
l_:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.bP(c)),35044)
a.bindBuffer(b,null)
return new Z.dS(b,u)},
an:function(a){return new Z.b1(a)},
dS:function dS(a,b){this.a=a
this.b=b},
cX:function cX(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
ja:function ja(a){this.a=a},
cY:function cY(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
b1:function b1(a){this.a=a}},D={
L:function(){var u=new D.bx()
u.d=0
return u},
f7:function f7(){},
bx:function bx(){var _=this
_.d=_.c=_.b=_.a=null},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
a_:function a_(){this.b=null},
bz:function bz(){this.b=null},
bA:function bA(){this.b=null},
E:function E(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
f1:function f1(){},
bv:function bv(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
a8:function a8(){},
de:function de(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
hI:function hI(){},
i8:function i8(){}},X={cZ:function cZ(a,b){this.a=a
this.b=b},dd:function dd(a,b){this.a=a
this.b=b},fT:function fT(){var _=this
_.d=_.c=_.b=_.a=null},dg:function dg(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},h1:function h1(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},am:function am(a,b,c){this.a=a
this.b=b
this.c=c},aV:function aV(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},hs:function hs(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},ce:function ce(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},hJ:function hJ(){},dJ:function dJ(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},iu:function iu(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},dO:function dO(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
n5:function(a){var u=new X.fE(),t=new V.ak(0,0,0,1)
u.a=t
u.b=!0
u.c=2000
u.d=!0
u.e=0
u.f=!1
t=$.lG
if(t==null){t=V.lF(0,0,1,1)
$.lG=t}u.r=t
return u},
kF:function kF(){},
fE:function fE(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dr:function dr(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
ii:function ii(){}},V={
pl:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.bf(a-b,u)
return(a<0?a+u:a)+b},
F:function(a,b,c){if(a==null)return C.a.ah("null",c)
return C.a.ah(C.d.eb(Math.abs(a-0)<$.C().a?0:a,b),c+b+1)},
bU:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.h])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.o)(a),++s){r=V.F(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.ah(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
ld:function(a){return C.d.ip(Math.pow(2,C.W.ck(Math.log(H.oS(a))/Math.log(2))))},
dj:function(){var u=$.ly
return u==null?$.ly=V.az(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
az:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.aU(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
lx:function(a,b,c){var u=c.p(0,Math.sqrt(c.C(c))),t=b.aB(u),s=t.p(0,Math.sqrt(t.C(t))),r=u.aB(s),q=new V.y(a.a,a.b,a.c),p=s.V(0).C(q),o=r.V(0).C(q),n=u.V(0).C(q)
return V.az(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
aY:function(){var u=$.lB
return u==null?$.lB=new V.X(0,0):u},
kU:function(){var u=$.aD
return u==null?$.aD=new V.O(0,0,0):u},
lF:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.du(a,b,c,d)},
cv:function(){var u=$.lU
return u==null?$.lU=new V.y(0,0,0):u},
nR:function(){var u=$.iW
return u==null?$.iW=new V.y(-1,0,0):u},
kZ:function(){var u=$.iX
return u==null?$.iX=new V.y(0,1,0):u},
lV:function(){var u=$.iY
return u==null?$.iY=new V.y(0,0,1):u},
a0:function a0(a,b,c){this.a=a
this.b=b
this.c=c},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fu:function fu(a){this.a=a},
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
X:function X(a,b){this.a=a
this.b=b},
O:function O(a,b,c){this.a=a
this.b=b
this.c=c},
bj:function bj(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
du:function du(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
J:function J(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
b0:function b0(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
pg:function(a){P.nJ(C.T,new V.ku(a))},
nD:function(a){var u=new V.i1()
u.ey(a,!0)
return u},
d_:function d_(){},
ku:function ku(a){this.a=a},
fj:function fj(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fG:function fG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
fH:function fH(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hG:function hG(a){var _=this
_.a=a
_.d=_.c=_.b=null},
hL:function hL(a){this.a=a
this.c=null},
hM:function hM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
i1:function i1(){this.b=this.a=null},
i3:function i3(a){this.a=a},
i2:function i2(a){this.a=a},
i4:function i4(a){this.a=a}},U={
kI:function(){var u=new U.f9()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
lr:function(a){var u=new U.d0()
u.a=a
return u},
f9:function f9(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
d0:function d0(){this.b=this.a=null},
c4:function c4(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
af:function af(){},
dP:function dP(){var _=this
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.e=_.d=_.c=_.b=_.a=null},
dQ:function dQ(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dR:function dR(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={d5:function d5(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nk:function(a,b){var u=a.aC,t=new A.h7(b,u)
t.ex(b,u)
t.eu(a,b)
return t},
nl:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gam(a3)+a4.gam(a4)+a5.gam(a5)+a6.gam(a6)+a7.gam(a7)+a8.gam(a8)+a9.gam(a9)+b0.gam(b0)+b1.gam(b1)+"_"
c+=a?"1":"0"
c+=b?"1":"0"
c+=a0?"1":"0"
c=c+"0_"+a2
u=b2.length
if(u>0){c+="_Bar"
for(t=0;t<b2.length;b2.length===u||(0,H.o)(b2),++t)c+="_"+H.e(b2[t].a)}u=b3.length
if(u>0){c+="_Dir"
for(t=0;t<b3.length;b3.length===u||(0,H.o)(b3),++t)c+="_"+H.e(b3[t].a)}u=b4.length
if(u>0){c+="_Point"
for(t=0;t<b4.length;b4.length===u||(0,H.o)(b4),++t)c+="_"+H.e(b4[t].a)}u=b5.length
if(u>0){c+="_Spot"
for(t=0;t<b5.length;b5.length===u||(0,H.o)(b5),++t)c+="_"+H.e(b5[t].a)}for(u=b2.length,s=0,r=!1,t=0;t<u;++t,r=!0)s+=b2[t].b
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
d=$.b6()
if(j){u=$.b5()
d=new Z.b1(d.a|u.a)}if(i){u=$.b4()
d=new Z.b1(d.a|u.a)}if(h){u=$.b7()
d=new Z.b1(d.a|u.a)}if(g){u=$.b3()
d=new Z.b1(d.a|u.a)}return new A.ha(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,!1,h,g,!1,b,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
k1:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.c)a.a+="uniform samplerCube "+c+"Txt;\n"},
k2:function(a,b,c){var u,t="Txt, txtCube).rgb;\n"
A.k1(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.eS(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.c){u+="   "+c+"Color = "+c+"Clr*textureCube("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.c){u+="   "+c+"Color = textureCube("+c+t
a.a=u}a.a=u+"}\n"},
or:function(a,b){var u,t=a.a,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.k1(b,t,"emission")
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
on:function(a,b){var u,t=a.b
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.k2(b,t,"ambient")
b.a+="\n"},
op:function(a,b){var u,t=a.c
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.k2(b,t,"diffuse")
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
os:function(a,b){var u,t=a.d
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.k2(b,t,"invDiffuse")
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
oy:function(a,b){var u,t=a.e
if(!t.a)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.k2(b,t,"specular")
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
ou:function(a,b){var u,t,s
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
ow:function(a,b){var u,t=a.r,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.k1(b,t,"reflect")
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
ox:function(a,b){var u,t=a.x,s=t.a
if(!s)u=t.c
else u=!0
if(!u)return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.k1(b,t,"refract")
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
oo:function(a,b,c){var u,t,s,r,q,p,o=b.b
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
if(typeof u!=="number")return u.a8()
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
oq:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
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
if(typeof u!=="number")return u.a8()
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
ov:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
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
if(typeof u!=="number")return u.a8()
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
oz:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
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
if(typeof u!=="number")return u.a8()
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
if(o){u=$.ft
if(u==null)u=$.ft=new E.e0(E.lX(),E.lY())
r=c.a
if(u.b===C.C){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
ot:function(a,b){var u,t
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
oA:function(a){var u,t,s,r,q,p,o,n,m,l="   lightAccum += all",k="precision mediump float;\n\n",j="precision mediump float;\n\nvarying vec3 normalVec;\n",i=new P.U("")
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
A.or(a,i)
A.on(a,i)
A.op(a,i)
A.os(a,i)
A.oy(a,i)
t=a.db
if(t){r=i.a+="// === Environmental ===\n"
r+="\n"
i.a=r
r+="uniform samplerCube envSampler;\n"
i.a=r
i.a=r+"\n"
A.ow(a,i)
A.ox(a,i)}A.ou(a,i)
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
if(r){for(q=a.z,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.oo(a,q[n],i)
for(q=a.Q,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.oq(a,q[n],i)
for(q=a.ch,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.ov(a,q[n],i)
for(q=a.cx,p=q.length,n=0;n<q.length;q.length===p||(0,H.o)(q),++n)A.oz(a,q[n],i)
A.ot(a,i)}q=i.a+="// === Main ===\n"
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
for(u=a.z,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,n=0;n<u.length;u.length===t||(0,H.o)(u),++n){r=u[n].i(0)
if(0>=r.length)return H.d(r,0)
i.a+=l+(r[0].toUpperCase()+C.a.a6(r,1))+"Values(norm);\n"}if(a.cy<=0)i.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
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
oB:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.br+"];\n"
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
oD:function(a,b){var u
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
oC:function(a,b){var u
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
oF:function(a,b){var u,t
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
oG:function(a,b){var u,t
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
oE:function(a,b){var u
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
oH:function(a,b){var u
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
return a[0].toUpperCase()+C.a.a6(a,1)},
kW:function(a,b,c,d,e){var u=new A.iB(a,c,e)
u.f=d
P.nh(d,0,P.w)
return u},
cV:function cV(a,b,c){this.a=a
this.b=b
this.c=c},
eX:function eX(a){this.a=a},
a1:function a1(a,b,c){this.a=a
this.b=b
this.c=c},
h7:function h7(a,b){var _=this
_.dv=_.iE=_.bs=_.aC=_.br=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.iM=_.iL=_.iK=_.ci=_.cg=_.cf=_.ce=_.cd=_.cc=_.cb=_.ca=_.dJ=_.iJ=_.dI=_.dH=_.iI=_.dG=_.dF=_.dE=_.iH=_.dD=_.dC=_.dB=_.iG=_.dA=_.dz=_.iF=_.dw=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
cW:function cW(a,b){this.a=a
this.b=b},
d2:function d2(a,b){this.a=a
this.b=b},
ds:function ds(a,b){this.a=a
this.b=b},
dy:function dy(a,b){this.a=a
this.b=b},
ha:function ha(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.br=b3
_.aC=b4
_.bs=b5},
cq:function cq(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cr:function cr(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
ct:function ct(a,b,c,d,e,f,g,h,i,j){var _=this
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
cu:function cu(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dw:function dw(){},
dL:function dL(){},
iG:function iG(a){this.a=a},
bl:function bl(a,b,c){this.a=a
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
W:function W(a,b,c){this.a=a
this.c=b
this.d=c},
iC:function iC(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cp:function cp(a,b,c){this.a=a
this.c=b
this.d=c},
iH:function iH(a,b,c){this.a=a
this.c=b
this.d=c},
cs:function cs(a,b,c){this.a=a
this.c=b
this.d=c},
ag:function ag(a,b,c){this.a=a
this.c=b
this.d=c},
bI:function bI(a,b,c){this.a=a
this.c=b
this.d=c},
a2:function a2(a,b,c){this.a=a
this.c=b
this.d=c}},F={
l8:function(a,b,c,d){var u=F.hY()
F.cK(u,b,c,d,a,1,0,0,1)
F.cK(u,b,c,d,a,0,1,0,3)
F.cK(u,b,c,d,a,0,0,1,2)
F.cK(u,b,c,d,a,-1,0,0,0)
F.cK(u,b,c,d,a,0,-1,0,0)
F.cK(u,b,c,d,a,0,0,-1,3)
u.aj()
return u},
jX:function(a){var u=a.a>0?1:0
if(a.b>0)u+=2
return(a.c>0?u+4:u)*2},
cK:function(a,b,c,d,a0,a1,a2,a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j={},i=a1+a2,h=i+a3,g=a2+a3,f=a3+a1,e=new V.y(h,g+a1,f+a2)
j.a=e
u=a1-a2
t=a2-a3
s=a3-a1
r=j.b=new V.y(u+a3,t+a1,s+a2)
q=new V.y(u-a3,t-a1,s-a2)
j.c=q
p=j.d=new V.y(i-a3,g-a1,f-a2)
if(h>0){j.d=r
j.b=p
h=r
i=p}else{h=p
i=r}for(f=h,h=i,i=e,g=q,o=0;o<a4;++o,n=f,f=i,i=h,h=g,g=n){j.a=h
j.b=g
j.c=f
j.d=i}m=F.jX(i)
l=F.jX(h)
k=F.ky(d,a0,new F.jW(j,F.jX(g),F.jX(f),l,m,c),b)
if(k!=null)a.aX(k)},
mg:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
if(e<3)return
u=F.hY()
t=b?-1:1
s=-6.283185307179586/e
r=H.b([],[F.bm])
q=u.a
p=new V.y(0,0,t)
p=p.p(0,Math.sqrt(p.C(p)))
r.push(q.hj(new V.bj(a,-1,-1,-1),new V.ak(1,1,1,1),new V.O(0,0,c),new V.y(0,0,t),new V.X(0.5,0.5),p))
for(q=t*t,o=0;o<=e;++o){n=s*o
m=t*Math.sin(n)
l=Math.cos(n)
k=d.$1(o/e)
p=u.a
if(typeof k!=="number")return H.t(k)
j=new V.y(m,l,t).p(0,Math.sqrt(m*m+l*l+q))
if(m<0)i=0
else i=m>1?1:m
h=l<0
if(h)g=0
else g=l>1?1:l
if(h)h=0
else h=l>1?1:l
p.toString
f=F.bK(new V.bj(a,-1,-1,-1),null,new V.ak(i,g,h,1),new V.O(m*k,l*k,c),new V.y(0,0,t),new V.X(m*0.5+0.5,l*0.5+0.5),j,null,0)
p.n(0,f)
r.push(f)}u.d.hh(r)
return u},
me:function(a,b,c){return F.oW(!0,a,1,new F.k5(1,c),b)},
oW:function(a,b,c,d,e){var u
if(e<3)return
if(c<1)return
u=F.ky(c,e,new F.k7(d),null)
if(u==null)return
u.aj()
u.bp()
if(b)u.aX(F.mg(3,!1,1,new F.k8(d),e))
u.aX(F.mg(1,!0,-1,new F.k9(d),e))
return u},
pa:function(a,b){var u=F.ky(a,b,new F.ki(),null)
u.d.by()
u.aj()
u.bp()
return u},
a6:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null
b=b.p(0,Math.sqrt(b.C(b)))
u=b.a
t=b.b
s=b.c
r=F.bK(j,j,j,new V.O(u,t,s),b,j,j,j,0)
q=a.hI(r,new F.cw())
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
r.sak(0,new V.ak(p,o,n,1))
m=Math.sqrt(u*u+t*t)
l=Math.atan2(t,u)/1.5707963267948966
if(l<0)l=-l
k=Math.atan2(m,s)/3.141592653589793
r.scA(new V.X(l,k<0?-k:k))
a.a.n(0,r)
return r},
Q:function(a,b,c,d,e){var u,t,s,r
if(e<=0)a.d.bo(0,b,d,c)
else{u=F.a6(a,b.r.w(0,c.r).q(0,0.5))
t=F.a6(a,c.r.w(0,d.r).q(0,0.5))
s=F.a6(a,d.r.w(0,b.r).q(0,0.5))
r=e-1
F.Q(a,b,u,s,r)
F.Q(a,u,c,t,r)
F.Q(a,t,s,u,r)
F.Q(a,s,t,d,r)}},
mp:function(a,b){var u,t,s={}
s.a=u
s.a=null
s.a=new F.kv()
t=F.l8(a,null,new F.kw(s,1),b)
t.bp()
return t},
pj:function(){return F.mf(15,30,0.5,1,new F.kz())},
p9:function(){return F.mf(12,120,0.3,1,new F.kh(3,2))},
mf:function(a,b,c,d,e){var u=F.ky(a,b,new F.k6(e,d,b,c),null)
if(u==null)return
u.aj()
u.bp()
return u},
ky:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null
if(a<1)return
if(b<1)return
u=F.hY()
t=H.b([],[F.bm])
for(s=0;s<=b;++s){r=s/b
q=u.a
if(r<0)p=0
else p=r>1?1:r
q.toString
o=F.bK(g,g,new V.ak(p,0,0,1),g,g,new V.X(r,1),g,g,0)
q.n(0,o)
c.$3(o,r,0)
t.push(o.c8(d))}for(s=1;s<=a;++s){n=s/a
for(q=n>1,p=n<0,m=1-n,l=0;l<=b;++l){r=l/b
k=u.a
if(r<0)j=0
else j=r>1?1:r
if(p)i=0
else i=q?1:n
if(p)h=0
else h=q?1:n
k.toString
o=F.bK(g,g,new V.ak(j,i,h,1),g,g,new V.X(r,m),g,g,0)
k.n(0,o)
c.$3(o,r,n)
t.push(o.c8(d))}}u.d.hi(a+1,b+1,t)
return u},
c2:function(a,b,c){var u=new F.aR(),t=a.a
if(t==null)H.n(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=b.a||t!=c.a)H.n(P.m("May not create a face with vertices attached to different shapes."))
u.bl(a)
u.bm(b)
u.d7(c)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
nd:function(a,b){var u=new F.c8(),t=a.a
if(t==null)H.n(P.m("May not create a line with a start vertex which is not attached to a shape."))
if(t!=b.a)H.n(P.m("May not create a line with vertices attached to different shapes."))
u.bl(a)
u.bm(b)
u.a.a.c.b.push(u)
u.a.a.W()
return u},
hY:function(){var u=new F.hX(),t=new F.iZ(u)
t.b=!1
t.c=H.b([],[F.bm])
u.a=t
t=new F.i0(u)
t.b=H.b([],[F.ci])
u.b=t
t=new F.i_(u)
t.b=H.b([],[F.c8])
u.c=t
t=new F.hZ(u)
t.b=H.b([],[F.aR])
u.d=t
u.e=null
return u},
bK:function(a,b,c,d,e,f,g,h,i){var u,t=null,s=new F.bm(),r=new F.j6()
r.b=H.b([],[F.ci])
s.b=r
r=new F.j3()
u=[F.c8]
r.b=H.b([],u)
r.c=H.b([],u)
s.c=r
r=new F.j_()
u=[F.aR]
r.b=H.b([],u)
r.c=H.b([],u)
r.d=H.b([],u)
s.d=r
h=$.mF()
s.e=0
r=$.b6()
u=h.a
s.f=(u&r.a)!==0?d:t
s.r=(u&$.b5().a)!==0?e:t
s.x=(u&$.b4().a)!==0?b:t
s.y=(u&$.bp().a)!==0?f:t
s.z=(u&$.b7().a)!==0?g:t
s.Q=(u&$.mG().a)!==0?c:t
s.ch=(u&$.bW().a)!==0?i:0
s.cx=(u&$.b3().a)!==0?a:t
return s},
jW:function jW(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
k5:function k5(a,b){this.a=a
this.b=b},
k7:function k7(a){this.a=a},
k8:function k8(a){this.a=a},
k9:function k9(a){this.a=a},
ki:function ki(){},
kv:function kv(){},
kw:function kw(a,b){this.a=a
this.b=b},
kz:function kz(){},
kh:function kh(a,b){this.a=a
this.b=b},
k6:function k6(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aR:function aR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
fx:function fx(){},
i5:function i5(){},
c8:function c8(){this.b=this.a=null},
fV:function fV(){},
iA:function iA(){},
ci:function ci(){this.a=null},
hX:function hX(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
hZ:function hZ(a){this.a=a
this.b=null},
i_:function i_(a){this.a=a
this.b=null},
i0:function i0(a){this.a=a
this.b=null},
bm:function bm(){var _=this
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
j3:function j3(){this.c=this.b=null},
j4:function j4(){},
cw:function cw(){},
j5:function j5(){},
j2:function j2(){},
hA:function hA(){},
j6:function j6(){this.b=null}},T={dE:function dE(){},im:function im(){var _=this
_.e=_.d=_.c=_.b=_.a=null},io:function io(a){var _=this
_.a=a
_.e=_.d=_.c=null},ip:function ip(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}},R={
ml:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="testCanvas",b=null,a="modifiers",a0=V.nD("Test 011"),a1=W.kG()
a1.className="pageLargeCanvas"
a1.id=c
a0.a.appendChild(a1)
u=[P.h]
a0.dg(H.b(["A test of the Material Lighting shader with cube textures and ","a directional light. The cube textures are for ambient, diffuse, ","and specular."],u))
a0.hf(H.b(["shapes"],u))
a0.dg(H.b(["\xab[Back to Tests|../]"],u))
u=document
t=u.getElementById(c)
if(t==null)H.n(P.m("Failed to find an element with the identifier, testCanvas."))
s=E.nI(t,!0,!0,!0,!1)
r=new E.bb()
r.a=""
r.b=!0
q=E.bb
p=O.kH(q)
r.y=p
p.bg(r.ghX(),r.gi_())
r.dy=r.dx=r.db=r.cy=r.cx=r.ch=r.Q=r.z=null
r.sa9(0,b)
r.sba(b)
r.sa9(0,F.mp(8,8))
p=new U.c4()
p.bF(U.af)
p.bg(p.gf3(),p.gfL())
p.e=null
p.f=V.dj()
p.r=0
o=s.x
n=new U.dQ()
m=U.kI()
m.scE(0,!0)
m.scn(6.283185307179586)
m.scp(0)
m.sZ(0,0)
m.sco(100)
m.sX(0)
m.sc9(0.5)
n.b=m
l=n.gaP()
m.gB().n(0,l)
m=U.kI()
m.scE(0,!0)
m.scn(6.283185307179586)
m.scp(0)
m.sZ(0,0)
m.sco(100)
m.sX(0)
m.sc9(0.5)
n.c=m
m.gB().n(0,l)
n.d=null
n.r=n.f=n.e=!1
n.y=n.x=2.5
n.Q=4
n.ch=n.cx=!1
n.db=n.cy=0
n.dx=null
n.dy=0
n.fx=n.fr=null
k=new X.am(!1,!1,!1)
j=n.d
n.d=k
m=new D.E(a,j,k)
m.b=!0
n.T(m)
m=n.f
if(m!==!1){n.f=!1
m=new D.E("invertX",m,!1)
m.b=!0
n.T(m)}m=n.r
if(m!==!0){n.r=!0
m=new D.E("invertY",m,!0)
m.b=!0
n.T(m)}n.b5(o)
p.n(0,n)
o=s.x
n=new U.dP()
m=U.kI()
m.scE(0,!0)
m.scn(6.283185307179586)
m.scp(0)
m.sZ(0,0)
m.sco(100)
m.sX(0)
m.sc9(0.2)
n.b=m
m.gB().n(0,n.gaP())
n.c=null
n.d=!1
n.e=2.5
n.r=4
n.x=n.y=!1
n.z=0
n.Q=null
n.ch=0
n.cy=n.cx=null
k=new X.am(!0,!1,!1)
j=n.c
n.c=k
m=new D.E(a,j,k)
m.b=!0
n.T(m)
n.b5(o)
p.n(0,n)
o=s.x
n=new U.dR()
n.c=0.01
n.e=n.d=0
k=new X.am(!1,!1,!1)
n.b=k
m=new D.E(a,b,k)
m.b=!0
n.T(m)
n.b5(o)
p.n(0,n)
r.sba(p)
i=s.f.dU("../resources/earthColor")
h=new O.dh()
p=O.kH(V.aU)
h.e=p
p.bg(h.gf7(),h.gf9())
p=new O.ay(h,"emission")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
h.f=p
p=new O.ay(h,"ambient")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
h.r=p
p=new O.ay(h,"diffuse")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
h.x=p
p=new O.ay(h,"invDiffuse")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
h.y=p
p=new O.hd(h,"specular")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
p.ch=100
h.z=p
p=new O.h9(h,"bump")
p.c=new A.a1(!1,!1,!1)
h.Q=p
h.ch=null
p=new O.ay(h,"reflect")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
h.cx=p
p=new O.hc(h,"refract")
p.c=new A.a1(!1,!1,!1)
p.f=new V.a0(0,0,0)
p.ch=1
h.cy=p
p=new O.h8(h,"alpha")
p.c=new A.a1(!1,!1,!1)
p.f=1
h.db=p
p=new D.de()
p.bF(D.a8)
p.e=H.b([],[D.f1])
p.f=H.b([],[D.bv])
p.r=H.b([],[D.hI])
p.x=H.b([],[D.i8])
p.z=p.y=null
p.cH(p.gf5(),p.gfJ(),p.gfN())
h.dx=p
o=new O.hb()
o.b=new V.ak(0,0,0,0)
o.c=1
o.d=10
o.e=!1
h.dy=o
o=p.y
p=o==null?p.y=D.L():o
p.n(0,h.gh0())
p=h.dx
o=p.z
p=o==null?p.z=D.L():o
p.n(0,h.gbi())
h.fr=null
p=h.dx
g=V.kZ()
o=U.lr(V.lx(V.kU(),g,new V.y(-1,-1,-1)))
f=new V.a0(1,1,1)
n=new D.bv()
n.c=new V.a0(1,1,1)
n.a=V.lV()
n.d=V.kZ()
n.e=V.nR()
j=n.b
n.b=o
o.gB().n(0,n.geB())
o=new D.E("mover",j,n.b)
o.b=!0
n.aw(o)
if(!n.c.t(0,f)){j=n.c
n.c=f
o=new D.E("color",j,f)
o.b=!0
n.aw(o)}p.n(0,n)
p=h.r
p.sak(0,new V.a0(0.2,0.2,0.2))
p=h.x
p.sak(0,new V.a0(0.8,0.8,0.8))
h.r.sau(i)
h.x.sau(i)
h.z.sau(s.f.dU("../resources/earthSpecular"))
p=h.z
p.bZ(new A.a1(!0,!1,p.c.c))
p.d6(10)
p=new M.d5()
p.a=!0
q=O.kH(q)
p.e=q
q.bg(p.gfd(),p.gff())
p.y=p.x=p.r=p.f=null
e=X.n5(b)
d=new X.dr()
d.c=1.0471975511965976
d.d=0.1
d.e=2000
d.sba(b)
q=d.c
if(!(Math.abs(q-1.0471975511965976)<$.C().a)){d.c=1.0471975511965976
q=new D.E("fov",q,1.0471975511965976)
q.b=!0
d.aL(q)}q=d.d
if(!(Math.abs(q-0.1)<$.C().a)){d.d=0.1
q=new D.E("near",q,0.1)
q.b=!0
d.aL(q)}q=d.e
if(!(Math.abs(q-2000)<$.C().a)){d.e=2000
q=new D.E("far",q,2000)
q.b=!0
d.aL(q)}q=p.b
if(q!==d){if(q!=null)q.gB().D(0,p.gan())
j=p.b
p.b=d
d.gB().n(0,p.gan())
q=new D.E("camera",j,p.b)
q.b=!0
p.ax(q)}q=p.c
if(q!==e){if(q!=null)q.gB().D(0,p.gan())
j=p.c
p.c=e
e.gB().n(0,p.gan())
q=new D.E("target",j,p.c)
q.b=!0
p.ax(q)}p.sea(b)
p.sea(h)
p.e.n(0,r)
p.b.sba(U.lr(V.az(1,0,0,0,0,1,0,0,0,0,1,3,0,0,0,1)))
q=s.d
if(q!==p){if(q!=null)q.gB().D(0,s.gcM())
s.d=p
p.gB().n(0,s.gcM())
s.cN()}q=new V.hL("shapes")
u=u.getElementById("shapes")
q.c=u
if(u==null)H.n("Failed to find shapes for RadioGroup")
q.ap(0,"Cube",new R.kj(r))
q.ap(0,"Cuboid",new R.kk(r))
q.ap(0,"Cylinder",new R.kl(r))
q.ap(0,"Cone",new R.km(r))
q.ap(0,"LatLonSphere",new R.kn(r))
q.ap(0,"IsoSphere",new R.ko(r))
q.bo(0,"Sphere",new R.kp(r),!0)
q.ap(0,"Toroid",new R.kq(r))
q.ap(0,"Knot",new R.kr(r))
u=s.Q
if(u==null)u=s.Q=D.L()
q=u.b
u=q==null?u.b=H.b([],[{func:1,ret:-1,args:[D.a_]}]):q
u.push(new R.ks(a0,h))
V.pg(s)},
kj:function kj(a){this.a=a},
kk:function kk(a){this.a=a},
kl:function kl(a){this.a=a},
km:function km(a){this.a=a},
kn:function kn(a){this.a=a},
ko:function ko(a){this.a=a},
kp:function kp(a){this.a=a},
kq:function kq(a){this.a=a},
kr:function kr(a){this.a=a},
ks:function ks(a,b){this.a=a
this.b=b}}
var w=[C,H,J,P,W,K,L,O,E,Z,D,X,V,U,M,A,F,T,R]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.kP.prototype={}
J.a.prototype={
t:function(a,b){return a===b},
gK:function(a){return H.cj(a)},
i:function(a){return"Instance of '"+H.e(H.ck(a))+"'"}}
J.fP.prototype={
i:function(a){return String(a)},
gK:function(a){return a?519018:218159},
$iaL:1}
J.db.prototype={
t:function(a,b){return null==b},
i:function(a){return"null"},
gK:function(a){return 0}}
J.dc.prototype={
gK:function(a){return 0},
i:function(a){return String(a)},
$inb:1}
J.hF.prototype={}
J.bJ.prototype={}
J.be.prototype={
i:function(a){var u=a[$.mt()]
if(u==null)return this.eq(a)
return"JavaScript function for "+H.e(J.a7(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bc.prototype={
cv:function(a,b){if(!!a.fixed$length)H.n(P.z("removeAt"))
if(b<0||b>=a.length)throw H.c(P.dt(b,null))
return a.splice(b,1)[0]},
D:function(a,b){var u
if(!!a.fixed$length)H.n(P.z("remove"))
for(u=0;u<a.length;++u)if(J.A(a[u],b)){a.splice(u,1)
return!0}return!1},
ae:function(a,b){var u,t
if(!!a.fixed$length)H.n(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.c(P.aP(a))}},
j:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.e(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
hU:function(a){return this.j(a,"")},
hM:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.c(P.aP(a))}return u},
hN:function(a,b,c){return this.hM(a,b,c,null)},
hL:function(a,b){var u,t,s=a.length
for(u=0;u<s;++u){t=a[u]
if(b.$1(t))return t
if(a.length!==s)throw H.c(P.aP(a))}throw H.c(H.fN())},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
em:function(a,b,c){if(b<0||b>a.length)throw H.c(P.Y(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.c(P.Y(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aM(a,0)])
return H.b(a.slice(b,c),[H.aM(a,0)])},
ghK:function(a){if(a.length>0)return a[0]
throw H.c(H.fN())},
gas:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.c(H.fN())},
dh:function(a,b){var u,t=a.length
for(u=0;u<t;++u){if(b.$1(a[u]))return!0
if(a.length!==t)throw H.c(P.aP(a))}return!1},
b1:function(a,b){if(!!a.immutable$list)H.n(P.z("sort"))
H.nG(a,b==null?J.ok():b)},
el:function(a){return this.b1(a,null)},
F:function(a,b){var u
for(u=0;u<a.length;++u)if(J.A(a[u],b))return!0
return!1},
i:function(a){return P.kM(a,"[","]")},
gU:function(a){return new J.ad(a,a.length)},
gK:function(a){return H.cj(a)},
gl:function(a){return a.length},
sl:function(a,b){var u="newLength"
if(!!a.fixed$length)H.n(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.c(P.kD(b,u,null))
if(b<0)throw H.c(P.Y(b,0,null,u,null))
a.length=b},
h:function(a,b){if(b>=a.length||b<0)throw H.c(H.bT(a,b))
return a[b]},
m:function(a,b,c){if(!!a.immutable$list)H.n(P.z("indexed set"))
if(b>=a.length||b<0)throw H.c(H.bT(a,b))
a[b]=c},
$iu:1,
$ij:1,
$iq:1}
J.kO.prototype={}
J.ad.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.c(H.o(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.c7.prototype={
aU:function(a,b){var u
if(typeof b!=="number")throw H.c(H.ah(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbu(b)
if(this.gbu(a)===u)return 0
if(this.gbu(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbu:function(a){return a===0?1/a<0:a<0},
ip:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.c(P.z(""+a+".toInt()"))},
ck:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.c(P.z(""+a+".floor()"))},
al:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.c(P.z(""+a+".round()"))},
eb:function(a,b){var u
if(b>20)throw H.c(P.Y(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbu(a))return"-"+u
return u},
bd:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.c(P.Y(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.Y(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.n(P.z("Unexpected toString result: "+u))
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
gK:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
bf:function(a,b){var u=a%b
if(u===0)return 0
if(u>0)return u
if(b<0)return u-b
else return u+b},
es:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.d9(a,b)},
a4:function(a,b){return(a|0)===a?a/b|0:this.d9(a,b)},
d9:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.c(P.z("Result of truncating division is "+H.e(u)+": "+H.e(a)+" ~/ "+b))},
aR:function(a,b){var u
if(a>0)u=this.d8(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
h8:function(a,b){if(b<0)throw H.c(H.ah(b))
return this.d8(a,b)},
d8:function(a,b){return b>31?0:a>>>b},
$iK:1,
$iac:1}
J.da.prototype={$iw:1}
J.d9.prototype={}
J.bd.prototype={
Y:function(a,b){if(b<0)throw H.c(H.bT(a,b))
if(b>=a.length)H.n(H.bT(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.c(H.bT(a,b))
return a.charCodeAt(b)},
w:function(a,b){if(typeof b!=="string")throw H.c(P.kD(b,null,null))
return a+b},
aZ:function(a,b,c,d){var u,t
c=P.aZ(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.n(H.ah(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
a5:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Y(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
a3:function(a,b){return this.a5(a,b,0)},
u:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.n(H.ah(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.P()
if(b<0)throw H.c(P.dt(b,null))
if(b>c)throw H.c(P.dt(b,null))
if(c>a.length)throw H.c(P.dt(c,null))
return a.substring(b,c)},
a6:function(a,b){return this.u(a,b,null)},
ir:function(a){return a.toLowerCase()},
q:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.c(C.Q)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
ah:function(a,b){var u=b-a.length
if(u<=0)return a
return this.q(" ",u)+a},
bt:function(a,b,c){var u
if(c<0||c>a.length)throw H.c(P.Y(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
dP:function(a,b){return this.bt(a,b,0)},
hr:function(a,b,c){var u=a.length
if(c>u)throw H.c(P.Y(c,0,u,null,null))
return H.mq(a,b,c)},
F:function(a,b){return this.hr(a,b,0)},
aU:function(a,b){var u
if(typeof b!=="string")throw H.c(H.ah(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gK:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gl:function(a){return a.length},
$ih:1}
H.p.prototype={
gl:function(a){return this.a.length},
h:function(a,b){return C.a.Y(this.a,b)},
$au:function(){return[P.w]},
$ax:function(){return[P.w]},
$aj:function(){return[P.w]},
$aq:function(){return[P.w]}}
H.u.prototype={}
H.df.prototype={
gU:function(a){return new H.bf(this,this.gl(this))},
bC:function(a,b){return this.ep(0,b)}}
H.bf.prototype={
gE:function(a){return this.d},
v:function(){var u,t=this,s=t.a,r=J.au(s),q=r.gl(s)
if(t.b!=q)throw H.c(P.aP(s))
u=t.c
if(typeof q!=="number")return H.t(q)
if(u>=q){t.d=null
return!1}t.d=r.M(s,u);++t.c
return!0}}
H.ca.prototype={
gU:function(a){return new H.h5(J.aN(this.a),this.b)},
gl:function(a){return J.aj(this.a)},
M:function(a,b){return this.b.$1(J.eT(this.a,b))},
$aj:function(a,b){return[b]}}
H.fq.prototype={$iu:1,
$au:function(a,b){return[b]}}
H.h5.prototype={
v:function(){var u=this,t=u.b
if(t.v()){u.a=u.c.$1(t.gE(t))
return!0}u.a=null
return!1},
gE:function(a){return this.a}}
H.h6.prototype={
gl:function(a){return J.aj(this.a)},
M:function(a,b){return this.b.$1(J.eT(this.a,b))},
$au:function(a,b){return[b]},
$adf:function(a,b){return[b]},
$aj:function(a,b){return[b]}}
H.cx.prototype={
gU:function(a){return new H.jb(J.aN(this.a),this.b)}}
H.jb.prototype={
v:function(){var u,t
for(u=this.a,t=this.b;u.v();)if(t.$1(u.gE(u)))return!0
return!1},
gE:function(a){var u=this.a
return u.gE(u)}}
H.d6.prototype={}
H.iL.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify an unmodifiable list"))}}
H.dM.prototype={}
H.fb.prototype={
i:function(a){return P.kT(this)},
m:function(a,b,c){return H.n0()},
$iT:1}
H.fc.prototype={
gl:function(a){return this.a},
c6:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.c6(0,b))return
return this.cX(b)},
cX:function(a){return this.b[a]},
I:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.cX(s))}}}
H.iy.prototype={
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
H.hB.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.e(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.fS.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.e(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.e(t.a)+")"
return s+r+"' on '"+u+"' ("+H.e(t.a)+")"}}
H.iK.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kA.prototype={
$1:function(a){if(!!J.R(a).$ibw)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:9}
H.er.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u}}
H.c_.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.cP(t==null?"unknown":t)+"'"},
giv:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ij.prototype={}
H.ia.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.cP(u)+"'"}}
H.bY.prototype={
t:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.bY))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gK:function(a){var u,t=this.c
if(t==null)u=H.cj(this.a)
else u=typeof t!=="object"?J.cT(t):H.cj(t)
return(u^H.cj(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.e(this.d)+"' of "+("Instance of '"+H.e(H.ck(u))+"'")}}
H.f6.prototype={
i:function(a){return this.a}}
H.hU.prototype={
i:function(a){return"RuntimeError: "+H.e(this.a)}}
H.I.prototype={
gl:function(a){return this.a},
ghT:function(a){return this.a===0},
ga0:function(a){return new H.fX(this,[H.aM(this,0)])},
giu:function(a){var u=this
return H.nj(u.ga0(u),new H.fR(u),H.aM(u,0),H.aM(u,1))},
c6:function(a,b){var u=this.b
if(u==null)return!1
return this.eQ(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bj(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bj(r,b)
s=t==null?null:t.b
return s}else return q.hR(b)},
hR:function(a){var u,t,s=this,r=s.d
if(r==null)return
u=s.cZ(r,s.dQ(a))
t=s.dR(u,a)
if(t<0)return
return u[t].b},
m:function(a,b,c){var u,t,s=this
if(typeof b==="string"){u=s.b
s.cQ(u==null?s.b=s.bU():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=s.c
s.cQ(t==null?s.c=s.bU():t,b,c)}else s.hS(b,c)},
hS:function(a,b){var u,t,s,r=this,q=r.d
if(q==null)q=r.d=r.bU()
u=r.dQ(a)
t=r.cZ(q,u)
if(t==null)r.c_(q,u,[r.bV(a,b)])
else{s=r.dR(t,a)
if(s>=0)t[s].b=b
else t.push(r.bV(a,b))}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.c(P.aP(u))
t=t.c}},
cQ:function(a,b,c){var u=this.bj(a,b)
if(u==null)this.c_(a,b,this.bV(b,c))
else u.b=c},
f0:function(){this.r=this.r+1&67108863},
bV:function(a,b){var u,t=this,s=new H.fW(a,b)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.f0()
return s},
dQ:function(a){return J.cT(a)&0x3ffffff},
dR:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1},
i:function(a){return P.kT(this)},
bj:function(a,b){return a[b]},
cZ:function(a,b){return a[b]},
c_:function(a,b,c){a[b]=c},
eU:function(a,b){delete a[b]},
eQ:function(a,b){return this.bj(a,b)!=null},
bU:function(){var u="<non-identifier-key>",t=Object.create(null)
this.c_(t,u,t)
this.eU(t,u)
return t}}
H.fR.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aM(u,1),args:[H.aM(u,0)]}}}
H.fW.prototype={}
H.fX.prototype={
gl:function(a){return this.a.a},
gU:function(a){var u=this.a,t=new H.fY(u,u.r)
t.c=u.e
return t}}
H.fY.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kd.prototype={
$1:function(a){return this.a(a)},
$S:9}
H.ke.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kf.prototype={
$1:function(a){return this.a(a)}}
H.fQ.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$inz:1}
H.cf.prototype={$icf:1}
H.bh.prototype={$ibh:1}
H.dk.prototype={
gl:function(a){return a.length},
$iB:1,
$aB:function(){}}
H.cg.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.K]},
$ax:function(){return[P.K]},
$ij:1,
$aj:function(){return[P.K]},
$iq:1,
$aq:function(){return[P.K]}}
H.dl.prototype={
m:function(a,b,c){H.aK(b,a,a.length)
a[b]=c},
$iu:1,
$au:function(){return[P.w]},
$ax:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
H.ht.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hu.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hv.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hw.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.hx.prototype={
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.dm.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]}}
H.ch.prototype={
gl:function(a){return a.length},
h:function(a,b){H.aK(b,a,a.length)
return a[b]},
$ich:1,
$ibH:1}
H.cB.prototype={}
H.cC.prototype={}
H.cD.prototype={}
H.cE.prototype={}
P.jd.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:16}
P.jc.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.je.prototype={
$0:function(){this.a.$0()}}
P.jf.prototype={
$0:function(){this.a.$0()}}
P.ex.prototype={
eF:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bS(new P.jM(this,b),0),a)
else throw H.c(P.z("`setTimeout()` not found."))},
eG:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bS(new P.jL(this,a,Date.now(),b),0),a)
else throw H.c(P.z("Periodic timer."))},
$idG:1}
P.jM.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.jL.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.es(u,q)}s.c=r
t.d.$1(s)}}
P.bL.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.e(this.a)+")"}}
P.bM.prototype={
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
if(t instanceof P.bL){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.aN(u)
if(!!r.$ibM){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.jI.prototype={
gU:function(a){return new P.bM(this.a())}}
P.dT.prototype={}
P.dB.prototype={}
P.id.prototype={}
P.dG.prototype={}
P.jV.prototype={}
P.k3.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.dq():s
s=this.b
if(s==null)throw H.c(t)
u=H.c(t)
u.stack=s.i(0)
throw u}}
P.jt.prototype={
ik:function(a){var u,t,s,r=null
try{if(C.f===$.at){a.$0()
return}P.oJ(r,r,this,a)}catch(s){u=H.ai(s)
t=H.la(s)
P.m8(r,r,this,u,t)}},
il:function(a,b){var u,t,s,r=null
try{if(C.f===$.at){a.$1(b)
return}P.oK(r,r,this,a,b)}catch(s){u=H.ai(s)
t=H.la(s)
P.m8(r,r,this,u,t)}},
im:function(a,b){return this.il(a,b,null)},
hn:function(a){return new P.ju(this,a)},
dm:function(a,b){return new P.jv(this,a,b)}}
P.ju.prototype={
$0:function(){return this.a.ik(this.b)}}
P.jv.prototype={
$1:function(a){return this.a.im(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.jq.prototype={
gU:function(a){var u=new P.e8(this,this.r)
u.c=this.e
return u},
gl:function(a){return this.a},
F:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.eO(b)
return t}},
eO:function(a){var u=this.d
if(u==null)return!1
return this.bL(this.cY(u,a),a)>=0},
n:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.cR(u==null?s.b=P.l0():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.cR(t==null?s.c=P.l0():t,b)}else return s.eI(0,b)},
eI:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.l0()
u=s.cT(b)
t=r[u]
if(t==null)r[u]=[s.bI(b)]
else{if(s.bL(t,b)>=0)return!1
t.push(s.bI(b))}return!0},
D:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.fW(this.c,b)
else return this.fV(0,b)},
fV:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.cY(r,b)
t=s.bL(u,b)
if(t<0)return!1
s.dc(u.splice(t,1)[0])
return!0},
cR:function(a,b){if(a[b]!=null)return!1
a[b]=this.bI(b)
return!0},
fW:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dc(u)
delete a[b]
return!0},
cS:function(){this.r=1073741823&this.r+1},
bI:function(a){var u,t=this,s=new P.jr(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.cS()
return s},
dc:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.cS()},
cT:function(a){return J.cT(a)&1073741823},
cY:function(a,b){return a[this.cT(b)]},
bL:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.A(a[t].a,b))return t
return-1}}
P.jr.prototype={}
P.e8.prototype={
gE:function(a){return this.d},
v:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.c(P.aP(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.fM.prototype={}
P.fZ.prototype={
$2:function(a,b){this.a.m(0,a,b)},
$S:3}
P.h_.prototype={$iu:1,$ij:1,$iq:1}
P.x.prototype={
gU:function(a){return new H.bf(a,this.gl(a))},
M:function(a,b){return this.h(a,b)},
iq:function(a,b){var u,t,s=this,r=H.b([],[H.p1(s,a,"x",0)])
C.b.sl(r,s.gl(a))
u=0
while(!0){t=s.gl(a)
if(typeof t!=="number")return H.t(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
cB:function(a){return this.iq(a,!0)},
hH:function(a,b,c,d){var u
P.aZ(b,c,this.gl(a))
for(u=b;u<c;++u)this.m(a,u,d)},
i:function(a){return P.kM(a,"[","]")}}
P.h2.prototype={}
P.h3.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.e(a)
t.a=u+": "
t.a+=H.e(b)},
$S:3}
P.a3.prototype={
I:function(a,b){var u,t
for(u=J.aN(this.ga0(a));u.v();){t=u.gE(u)
b.$2(t,this.h(a,t))}},
gl:function(a){return J.aj(this.ga0(a))},
i:function(a){return P.kT(a)},
$iT:1}
P.jN.prototype={
m:function(a,b,c){throw H.c(P.z("Cannot modify unmodifiable map"))}}
P.h4.prototype={
h:function(a,b){return J.bX(this.a,b)},
m:function(a,b,c){J.kB(this.a,b,c)},
I:function(a,b){J.lj(this.a,b)},
gl:function(a){return J.aj(this.a)},
i:function(a){return J.a7(this.a)},
$iT:1}
P.dN.prototype={}
P.jx.prototype={
ae:function(a,b){var u
for(u=J.aN(b);u.v();)this.n(0,u.gE(u))},
i:function(a){return P.kM(this,"{","}")},
M:function(a,b){var u,t,s
P.lE(b,"index")
for(u=P.o0(this,this.r),t=0;u.v();){s=u.d
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
$iu:1,
$ij:1}
P.e9.prototype={}
P.eD.prototype={}
P.f2.prototype={
hW:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.aZ(a0,a1,b.length)
u=$.mI()
if(typeof a1!=="number")return H.t(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kc(C.a.H(b,n))
j=H.kc(C.a.H(b,n+1))
i=k*16+j-(j&256)
if(i===37)i=-1
n=l}else i=-1}else i=m
if(0<=i&&i<=127){if(i<0||i>=u.length)return H.d(u,i)
h=u[i]
if(h>=0){i=C.a.Y("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h)
if(i===m)continue
m=i}else{if(h===-1){if(q<0){g=r==null?null:r.a.length
if(g==null)g=0
q=g+(t-s)
p=t}++o
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.U("")
g=r.a+=C.a.u(b,s,t)
r.a=g+H.bE(m)
s=n
continue}}throw H.c(P.V("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.u(b,s,a1)
f=g.length
if(q>=0)P.ln(b,p,a1,q,o,f)
else{e=C.c.bf(f-1,4)+1
if(e===1)throw H.c(P.V(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.aZ(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.ln(b,p,a1,q,o,d)
else{e=C.c.bf(d,4)
if(e===1)throw H.c(P.V(c,b,a1))
if(e>1)b=C.a.aZ(b,a1,a1,e===2?"==":"=")}return b}}
P.f3.prototype={}
P.f8.prototype={}
P.fd.prototype={}
P.fs.prototype={}
P.fK.prototype={
i:function(a){return this.a}}
P.fJ.prototype={
eR:function(a,b,c){var u,t,s,r,q,p,o=null
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
if(c>b)q.a+=J.mT(a,b,c)
u=q.a
return u.charCodeAt(0)==0?u:u}}
P.iT.prototype={
ghG:function(){return C.R}}
P.iV.prototype={
c7:function(a){var u,t,s,r=P.aZ(0,null,a.length)
if(typeof r!=="number")return r.L()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.jT(t)
if(s.eW(a,0,r)!==r)s.de(J.mP(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oh(0,s.b,t.length)))}}
P.jT.prototype={
de:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
eW:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.Y(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.de(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
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
c7:function(a){var u,t,s,r,q,p,o,n,m=P.nM(!1,a,0,null)
if(m!=null)return m
u=P.aZ(0,null,J.aj(a))
t=P.ma(a,0,u)
if(t>0){s=P.cn(a,0,t)
if(t===u)return s
r=new P.U(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.U("")
o=new P.jS(!1,r)
o.c=p
o.hs(a,q,u)
if(o.e>0){H.n(P.V("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.bE(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.jS.prototype={
hs:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.au(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.a8()
if((r&192)!==128){q=P.V(k+C.c.bd(r,16),a,s)
throw H.c(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.x,q)
if(j<=C.x[q]){q=P.V("Overlong encoding of 0x"+C.c.bd(j,16),a,s-h-1)
throw H.c(q)}if(j>1114111){q=P.V("Character outside valid Unicode range: 0x"+C.c.bd(j,16),a,s-h-1)
throw H.c(q)}if(!l.c||j!==65279)t.a+=H.bE(j)
l.c=!1}if(typeof c!=="number")return H.t(c)
q=s<c
for(;q;){p=P.ma(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cn(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.P()
if(r<0){m=P.V("Negative UTF-8 code unit: -0x"+C.c.bd(-r,16),a,n-1)
throw H.c(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.V(k+C.c.bd(r,16),a,n-1)
throw H.c(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.aL.prototype={}
P.ae.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ae&&this.a===b.a&&!0},
aU:function(a,b){return C.c.aU(this.a,b.a)},
gK:function(a){var u=this.a
return(u^C.c.aR(u,30))&1073741823},
i:function(a){var u=this,t=P.n1(H.nv(u)),s=P.d1(H.nt(u)),r=P.d1(H.np(u)),q=P.d1(H.nq(u)),p=P.d1(H.ns(u)),o=P.d1(H.nu(u)),n=P.n2(H.nr(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.K.prototype={}
P.ba.prototype={
t:function(a,b){if(b==null)return!1
return b instanceof P.ba&&this.a===b.a},
gK:function(a){return C.c.gK(this.a)},
aU:function(a,b){return C.c.aU(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fp(),q=this.a
if(q<0)return"-"+new P.ba(0-q).i(0)
u=r.$1(C.c.a4(q,6e7)%60)
t=r.$1(C.c.a4(q,1e6)%60)
s=new P.fo().$1(q%1e6)
return""+C.c.a4(q,36e8)+":"+H.e(u)+":"+H.e(t)+"."+H.e(s)}}
P.fo.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fp.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bw.prototype={}
P.dq.prototype={
i:function(a){return"Throw of null."}}
P.ao.prototype={
gbK:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbJ:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gbK()+o+u
if(!q.a)return t
s=q.gbJ()
r=P.kL(q.b)
return t+s+": "+r}}
P.bF.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.e(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.e(s)
else if(t>s)u=": Not in range "+H.e(s)+".."+H.e(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.e(s)}return u}}
P.fL.prototype={
gbK:function(){return"RangeError"},
gbJ:function(){var u,t=this.b
if(typeof t!=="number")return t.P()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.e(u)},
gl:function(a){return this.f}}
P.iM.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.iI.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.cm.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fa.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.kL(u)+"."}}
P.hE.prototype={
i:function(a){return"Out of Memory"},
$ibw:1}
P.dz.prototype={
i:function(a){return"Stack Overflow"},
$ibw:1}
P.fi.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.e1.prototype={
i:function(a){return"Exception: "+this.a}}
P.fD.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.u(f,0,75)+"...":f
return h+"\n"+u}for(t=1,s=0,r=!1,q=0;q<g;++q){p=C.a.H(f,q)
if(p===10){if(s!==q||!r)++t
s=q+1
r=!1}else if(p===13){++t
s=q+1
r=!0}}h=t>1?h+(" (at line "+t+", character "+(g-s+1)+")\n"):h+(" (at character "+(g+1)+")\n")
o=f.length
for(q=g;q<o;++q){p=C.a.Y(f,q)
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
return h+l+j+k+"\n"+C.a.q(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.e(g)+")"):h}}
P.fF.prototype={}
P.w.prototype={}
P.j.prototype={
bC:function(a,b){return new H.cx(this,b,[H.l9(this,"j",0)])},
gl:function(a){var u,t=this.gU(this)
for(u=0;t.v();)++u
return u},
gaJ:function(a){var u,t=this.gU(this)
if(!t.v())throw H.c(H.fN())
u=t.gE(t)
if(t.v())throw H.c(H.n8())
return u},
M:function(a,b){var u,t,s
P.lE(b,"index")
for(u=this.gU(this),t=0;u.v();){s=u.gE(u)
if(b===t)return s;++t}throw H.c(P.N(b,this,"index",null,t))},
i:function(a){return P.n7(this,"(",")")}}
P.fO.prototype={}
P.q.prototype={$iu:1,$ij:1}
P.T.prototype={}
P.bi.prototype={
gK:function(a){return P.a4.prototype.gK.call(this,this)},
i:function(a){return"null"}}
P.ac.prototype={}
P.a4.prototype={constructor:P.a4,$ia4:1,
t:function(a,b){return this===b},
gK:function(a){return H.cj(this)},
i:function(a){return"Instance of '"+H.e(H.ck(this))+"'"},
toString:function(){return this.i(this)}}
P.h.prototype={}
P.U.prototype={
gl:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.iR.prototype={
$2:function(a,b){var u,t,s,r=J.cN(b).dP(b,"=")
if(r===-1){if(b!=="")J.kB(a,P.l4(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.u(b,0,r)
t=C.a.a6(b,r+1)
s=this.a
J.kB(a,P.l4(u,0,u.length,s,!0),P.l4(t,0,t.length,s,!0))}return a}}
P.iO.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv4 address, "+a,this.a,b))}}
P.iP.prototype={
$2:function(a,b){throw H.c(P.V("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.iQ.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.eR(C.a.u(this.b,a,b),null,16)
if(typeof u!=="number")return u.P()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.bN.prototype={
ged:function(){return this.b},
gcl:function(a){var u=this.c
if(u==null)return""
if(C.a.a3(u,"["))return C.a.u(u,1,u.length-1)
return u},
gbw:function(a){var u=this.d
if(u==null)return P.m1(this.a)
return u},
gct:function(a){var u=this.f
return u==null?"":u},
gdK:function(){var u=this.r
return u==null?"":u},
e7:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.a3(u,"/"))u="/"+u
s=P.l2(null,0,0,b)
return new P.bN(q,o,m,n,u,s,r.r)},
gcu:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.h
u=this.Q=new P.dN(P.lQ(t==null?"":t),[u,u])
t=u}return t},
gdL:function(){return this.c!=null},
gdO:function(){return this.f!=null},
gdM:function(){return this.r!=null},
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
if(!!J.R(b).$ikX)if(s.a==b.gbD())if(s.c!=null===b.gdL())if(s.b==b.ged())if(s.gcl(s)==b.gcl(b))if(s.gbw(s)==b.gbw(b))if(s.e===b.ge3(b)){u=s.f
t=u==null
if(!t===b.gdO()){if(t)u=""
if(u===b.gct(b)){u=s.r
t=u==null
if(!t===b.gdM()){if(t)u=""
u=u===b.gdK()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gK:function(a){var u=this.z
return u==null?this.z=C.a.gK(this.i(0)):u},
$ikX:1,
gbD:function(){return this.a},
ge3:function(a){return this.e}}
P.jO.prototype={
$1:function(a){throw H.c(P.V("Invalid port",this.a,this.b+1))}}
P.jP.prototype={
$1:function(a){return P.eE(C.a0,a,C.e,!1)}}
P.jR.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.e(P.eE(C.h,a,C.e,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.e(P.eE(C.h,b,C.e,!0))}}}
P.jQ.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.aN(b),t=this.a;u.v();)t.$2(a,u.gE(u))}}
P.iN.prototype={
gec:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bt(u,"?",o)
s=u.length
if(t>=0){r=P.cJ(u,t+1,s,C.l,!1)
s=t}else r=p
return q.c=new P.jj("data",p,p,p,P.cJ(u,o,s,C.B,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.jZ.prototype={
$1:function(a){return new Uint8Array(96)}}
P.jY.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.mQ(u,0,96,b)
return u},
$S:17}
P.k_.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.k0.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.jA.prototype={
gdL:function(){return this.c>0},
gdN:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.w()
t=this.e
if(typeof t!=="number")return H.t(t)
t=u+1<t
u=t}else u=!1
return u},
gdO:function(){var u=this.f
if(typeof u!=="number")return u.P()
return u<this.r},
gdM:function(){return this.r<this.a.length},
gd_:function(){return this.b===4&&C.a.a3(this.a,"http")},
gd0:function(){return this.b===5&&C.a.a3(this.a,"https")},
gbD:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gd_())q=t.x="http"
else if(t.gd0()){t.x="https"
q="https"}else if(q===4&&C.a.a3(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.a3(t.a,r)){t.x=r
q=r}else{q=C.a.u(t.a,0,q)
t.x=q}return q},
ged:function(){var u=this.c,t=this.b+3
return u>t?C.a.u(this.a,t,u-1):""},
gcl:function(a){var u=this.c
return u>0?C.a.u(this.a,u,this.d):""},
gbw:function(a){var u,t=this
if(t.gdN()){u=t.d
if(typeof u!=="number")return u.w()
return P.eR(C.a.u(t.a,u+1,t.e),null,null)}if(t.gd_())return 80
if(t.gd0())return 443
return 0},
ge3:function(a){return C.a.u(this.a,this.e,this.f)},
gct:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.P()
return u<t?C.a.u(this.a,u+1,t):""},
gdK:function(){var u=this.r,t=this.a
return u<t.length?C.a.a6(t,u+1):""},
gcu:function(){var u=this,t=u.f
if(typeof t!=="number")return t.P()
if(t>=u.r)return C.a1
t=P.h
return new P.dN(P.lQ(u.gct(u)),[t,t])},
e7:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbD(),m=n==="file",l=p.c,k=l>0?C.a.u(p.a,p.b+3,l):"",j=p.gdN()?p.gbw(p):o
l=p.c
if(l>0)u=C.a.u(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.u(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.a3(t,"/"))t="/"+t
r=P.l2(o,0,0,b)
s=p.r
q=s<l.length?C.a.a6(l,s+1):o
return new P.bN(n,k,u,j,t,r,q)},
gK:function(a){var u=this.y
return u==null?this.y=C.a.gK(this.a):u},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.R(b).$ikX&&this.a===b.i(0)},
i:function(a){return this.a},
$ikX:1}
P.jj.prototype={}
W.r.prototype={}
W.eU.prototype={
gl:function(a){return a.length}}
W.eV.prototype={
i:function(a){return String(a)}}
W.eW.prototype={
i:function(a){return String(a)}}
W.br.prototype={$ibr:1}
W.bs.prototype={$ibs:1}
W.bu.prototype={
cF:function(a,b,c){if(c!=null)return a.getContext(b,P.oT(c))
return a.getContext(b)},
eg:function(a,b){return this.cF(a,b,null)},
$ibu:1}
W.b8.prototype={
gl:function(a){return a.length}}
W.fe.prototype={
gl:function(a){return a.length}}
W.H.prototype={$iH:1}
W.c0.prototype={
gl:function(a){return a.length}}
W.ff.prototype={}
W.al.prototype={}
W.aw.prototype={}
W.fg.prototype={
gl:function(a){return a.length}}
W.fh.prototype={
gl:function(a){return a.length}}
W.fk.prototype={
gl:function(a){return a.length}}
W.ap.prototype={$iap:1}
W.fl.prototype={
i:function(a){return String(a)}}
W.d3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[[P.aa,P.ac]]},
$iB:1,
$aB:function(){return[[P.aa,P.ac]]},
$ax:function(){return[[P.aa,P.ac]]},
$ij:1,
$aj:function(){return[[P.aa,P.ac]]},
$iq:1,
$aq:function(){return[[P.aa,P.ac]]}}
W.d4.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(this.gaI(a))+" x "+H.e(this.gaD(a))},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$iaa&&a.left===u.gbv(b)&&a.top===u.gbz(b)&&this.gaI(a)===u.gaI(b)&&this.gaD(a)===u.gaD(b)},
gK:function(a){return W.m_(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(this.gaI(a)),C.d.gK(this.gaD(a)))},
gdq:function(a){return a.bottom},
gaD:function(a){return a.height},
gbv:function(a){return a.left},
gcz:function(a){return a.right},
gbz:function(a){return a.top},
gaI:function(a){return a.width},
$iaa:1,
$aaa:function(){return[P.ac]}}
W.fm.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[P.h]},
$iB:1,
$aB:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
W.fn.prototype={
gl:function(a){return a.length}}
W.jh.prototype={
gl:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
m:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
n:function(a,b){this.a.appendChild(b)
return b},
gU:function(a){var u=this.cB(this)
return new J.ad(u,u.length)},
$au:function(){return[W.S]},
$ax:function(){return[W.S]},
$aj:function(){return[W.S]},
$aq:function(){return[W.S]}}
W.S.prototype={
ghm:function(a){return new W.jk(a)},
gc5:function(a){return new W.jh(a,a.children)},
gdr:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.P()
if(s<0)s=-s*0
if(typeof r!=="number")return r.P()
if(r<0)r=-r*0
return new P.aa(u,t,s,r,[P.ac])},
i:function(a){return a.localName},
af:function(a,b,c,d){var u,t,s,r,q
if(c==null){u=$.lu
if(u==null){u=H.b([],[W.aW])
t=new W.dp(u)
u.push(W.lZ(null))
u.push(W.m0())
$.lu=t
d=t}else d=u
u=$.lt
if(u==null){u=new W.eF(d)
$.lt=u
c=u}else{u.a=d
c=u}}if($.aQ==null){u=document
t=u.implementation.createHTMLDocument("")
$.aQ=t
$.kK=t.createRange()
s=$.aQ.createElement("base")
s.href=u.baseURI
$.aQ.head.appendChild(s)}u=$.aQ
if(u.body==null){t=u.createElement("body")
u.body=t}u=$.aQ
if(!!this.$ibs)r=u.body
else{r=u.createElement(a.tagName)
$.aQ.body.appendChild(r)}if("createContextualFragment" in window.Range.prototype&&!C.b.F(C.Z,a.tagName)){$.kK.selectNodeContents(r)
q=$.kK.createContextualFragment(b)}else{r.innerHTML=b
q=$.aQ.createDocumentFragment()
for(;u=r.firstChild,u!=null;)q.appendChild(u)}u=$.aQ.body
if(r==null?u!=null:r!==u)J.ll(r)
c.cG(q)
document.adoptNode(q)
return q},
hv:function(a,b,c){return this.af(a,b,c,null)},
ei:function(a,b){a.textContent=null
a.appendChild(this.af(a,b,null,null))},
$iS:1,
ge9:function(a){return a.tagName}}
W.fr.prototype={
$1:function(a){return!!J.R(a).$iS}}
W.i.prototype={$ii:1}
W.f.prototype={
hg:function(a,b,c,d){if(c!=null)this.eJ(a,b,c,!1)},
eJ:function(a,b,c,d){return a.addEventListener(b,H.bS(c,1),!1)}}
W.aq.prototype={$iaq:1}
W.c3.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aq]},
$iB:1,
$aB:function(){return[W.aq]},
$ax:function(){return[W.aq]},
$ij:1,
$aj:function(){return[W.aq]},
$iq:1,
$aq:function(){return[W.aq]},
$ic3:1}
W.fy.prototype={
gl:function(a){return a.length}}
W.fC.prototype={
gl:function(a){return a.length}}
W.ax.prototype={$iax:1}
W.fI.prototype={
gl:function(a){return a.length}}
W.c5.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$iq:1,
$aq:function(){return[W.D]}}
W.aS.prototype={$iaS:1,
gds:function(a){return a.data}}
W.c6.prototype={$ic6:1}
W.bB.prototype={$ibB:1}
W.h0.prototype={
i:function(a){return String(a)}}
W.hm.prototype={
gl:function(a){return a.length}}
W.cd.prototype={$icd:1}
W.hn.prototype={
h:function(a,b){return P.b2(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.I(a,new W.ho(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.ho.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hp.prototype={
h:function(a,b){return P.b2(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.I(a,new W.hq(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hq.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aA.prototype={$iaA:1}
W.hr.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aA]},
$iB:1,
$aB:function(){return[W.aA]},
$ax:function(){return[W.aA]},
$ij:1,
$aj:function(){return[W.aA]},
$iq:1,
$aq:function(){return[W.aA]}}
W.aB.prototype={$iaB:1}
W.a5.prototype={
gaJ:function(a){var u=this.a,t=u.childNodes.length
if(t===0)throw H.c(P.lH("No elements"))
if(t>1)throw H.c(P.lH("More than one element"))
return u.firstChild},
ae:function(a,b){var u,t,s=b.a,r=this.a
if(s!==r)for(u=s.childNodes.length,t=0;t<u;++t)r.appendChild(s.firstChild)
return},
m:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gU:function(a){var u=this.a.childNodes
return new W.d7(u,u.length)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$au:function(){return[W.D]},
$ax:function(){return[W.D]},
$aj:function(){return[W.D]},
$aq:function(){return[W.D]}}
W.D.prototype={
ic:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
ii:function(a,b){var u,t
try{u=a.parentNode
J.mN(u,b,a)}catch(t){H.ai(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eo(a):u},
fY:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$iq:1,
$aq:function(){return[W.D]}}
W.aC.prototype={$iaC:1,
gl:function(a){return a.length}}
W.hH.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aC]},
$iB:1,
$aB:function(){return[W.aC]},
$ax:function(){return[W.aC]},
$ij:1,
$aj:function(){return[W.aC]},
$iq:1,
$aq:function(){return[W.aC]}}
W.hS.prototype={
h:function(a,b){return P.b2(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.I(a,new W.hT(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
W.hT.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hV.prototype={
gl:function(a){return a.length}}
W.aE.prototype={$iaE:1}
W.i6.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aE]},
$iB:1,
$aB:function(){return[W.aE]},
$ax:function(){return[W.aE]},
$ij:1,
$aj:function(){return[W.aE]},
$iq:1,
$aq:function(){return[W.aE]}}
W.aF.prototype={$iaF:1}
W.i7.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aF]},
$iB:1,
$aB:function(){return[W.aF]},
$ax:function(){return[W.aF]},
$ij:1,
$aj:function(){return[W.aF]},
$iq:1,
$aq:function(){return[W.aF]}}
W.aG.prototype={$iaG:1,
gl:function(a){return a.length}}
W.ib.prototype={
h:function(a,b){return a.getItem(b)},
m:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
ga0:function(a){var u=H.b([],[P.h])
this.I(a,new W.ic(u))
return u},
gl:function(a){return a.length},
$aa3:function(){return[P.h,P.h]},
$iT:1,
$aT:function(){return[P.h,P.h]}}
W.ic.prototype={
$2:function(a,b){return this.a.push(a)}}
W.ar.prototype={$iar:1}
W.dC.prototype={
af:function(a,b,c,d){var u,t
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=W.n3("<table>"+b+"</table>",c,d)
t=document.createDocumentFragment()
t.toString
u.toString
new W.a5(t).ae(0,new W.a5(u))
return t}}
W.ig.prototype={
af:function(a,b,c,d){var u,t,s,r
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.af(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaJ(u)
s.toString
u=new W.a5(s)
r=u.gaJ(u)
t.toString
r.toString
new W.a5(t).ae(0,new W.a5(r))
return t}}
W.ih.prototype={
af:function(a,b,c,d){var u,t,s
if("createContextualFragment" in window.Range.prototype)return this.bE(a,b,c,d)
u=document
t=u.createDocumentFragment()
u=C.E.af(u.createElement("table"),b,c,d)
u.toString
u=new W.a5(u)
s=u.gaJ(u)
t.toString
s.toString
new W.a5(t).ae(0,new W.a5(s))
return t}}
W.co.prototype={$ico:1}
W.aH.prototype={$iaH:1}
W.as.prototype={$ias:1}
W.ik.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.as]},
$iB:1,
$aB:function(){return[W.as]},
$ax:function(){return[W.as]},
$ij:1,
$aj:function(){return[W.as]},
$iq:1,
$aq:function(){return[W.as]}}
W.il.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aH]},
$iB:1,
$aB:function(){return[W.aH]},
$ax:function(){return[W.aH]},
$ij:1,
$aj:function(){return[W.aH]},
$iq:1,
$aq:function(){return[W.aH]}}
W.ir.prototype={
gl:function(a){return a.length}}
W.aI.prototype={$iaI:1}
W.bG.prototype={$ibG:1}
W.iv.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aI]},
$iB:1,
$aB:function(){return[W.aI]},
$ax:function(){return[W.aI]},
$ij:1,
$aj:function(){return[W.aI]},
$iq:1,
$aq:function(){return[W.aI]}}
W.iw.prototype={
gl:function(a){return a.length}}
W.bk.prototype={}
W.iS.prototype={
i:function(a){return String(a)}}
W.j9.prototype={
gl:function(a){return a.length}}
W.bn.prototype={
ghy:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.c(P.z("deltaY is not supported"))},
ghx:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.c(P.z("deltaX is not supported"))},
$ibn:1}
W.cy.prototype={
h_:function(a,b){return a.requestAnimationFrame(H.bS(b,1))},
eV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.ji.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.H]},
$iB:1,
$aB:function(){return[W.H]},
$ax:function(){return[W.H]},
$ij:1,
$aj:function(){return[W.H]},
$iq:1,
$aq:function(){return[W.H]}}
W.dW.prototype={
i:function(a){return"Rectangle ("+H.e(a.left)+", "+H.e(a.top)+") "+H.e(a.width)+" x "+H.e(a.height)},
t:function(a,b){var u
if(b==null)return!1
u=J.R(b)
return!!u.$iaa&&a.left===u.gbv(b)&&a.top===u.gbz(b)&&a.width===u.gaI(b)&&a.height===u.gaD(b)},
gK:function(a){return W.m_(C.d.gK(a.left),C.d.gK(a.top),C.d.gK(a.width),C.d.gK(a.height))},
gaD:function(a){return a.height},
gaI:function(a){return a.width}}
W.jn.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ax]},
$iB:1,
$aB:function(){return[W.ax]},
$ax:function(){return[W.ax]},
$ij:1,
$aj:function(){return[W.ax]},
$iq:1,
$aq:function(){return[W.ax]}}
W.ee.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.D]},
$iB:1,
$aB:function(){return[W.D]},
$ax:function(){return[W.D]},
$ij:1,
$aj:function(){return[W.D]},
$iq:1,
$aq:function(){return[W.D]}}
W.jB.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.aG]},
$iB:1,
$aB:function(){return[W.aG]},
$ax:function(){return[W.aG]},
$ij:1,
$aj:function(){return[W.aG]},
$iq:1,
$aq:function(){return[W.aG]}}
W.jG.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a[b]},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$iu:1,
$au:function(){return[W.ar]},
$iB:1,
$aB:function(){return[W.ar]},
$ax:function(){return[W.ar]},
$ij:1,
$aj:function(){return[W.ar]},
$iq:1,
$aq:function(){return[W.ar]}}
W.jg.prototype={
I:function(a,b){var u,t,s,r,q
for(u=this.ga0(this),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
ga0:function(a){var u,t,s,r=this.a.attributes,q=H.b([],[P.h])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.d(r,t)
s=r[t]
if(s.namespaceURI==null)q.push(s.name)}return q},
$aa3:function(){return[P.h,P.h]},
$aT:function(){return[P.h,P.h]}}
W.jk.prototype={
h:function(a,b){return this.a.getAttribute(b)},
m:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.ga0(this).length}}
W.jl.prototype={}
W.jm.prototype={
$1:function(a){return this.a.$1(a)}}
W.cz.prototype={
eA:function(a){var u
if($.cA.ghT($.cA)){for(u=0;u<262;++u)$.cA.m(0,C.Y[u],W.p3())
for(u=0;u<12;++u)$.cA.m(0,C.p[u],W.p4())}},
aS:function(a){return $.mJ().F(0,W.c1(a))},
aq:function(a,b,c){var u=$.cA.h(0,H.e(W.c1(a))+"::"+b)
if(u==null)u=$.cA.h(0,"*::"+b)
if(u==null)return!1
return u.$4(a,b,c,this)},
$iaW:1}
W.M.prototype={
gU:function(a){return new W.d7(a,this.gl(a))}}
W.dp.prototype={
aS:function(a){return C.b.dh(this.a,new W.hz(a))},
aq:function(a,b,c){return C.b.dh(this.a,new W.hy(a,b,c))},
$iaW:1}
W.hz.prototype={
$1:function(a){return a.aS(this.a)}}
W.hy.prototype={
$1:function(a){return a.aq(this.a,this.b,this.c)}}
W.em.prototype={
eE:function(a,b,c,d){var u,t,s
this.a.ae(0,c)
u=b.bC(0,new W.jy())
t=b.bC(0,new W.jz())
this.b.ae(0,u)
s=this.c
s.ae(0,C.y)
s.ae(0,t)},
aS:function(a){return this.a.F(0,W.c1(a))},
aq:function(a,b,c){var u=this,t=W.c1(a),s=u.c
if(s.F(0,H.e(t)+"::"+b))return u.d.hk(c)
else if(s.F(0,"*::"+b))return u.d.hk(c)
else{s=u.b
if(s.F(0,H.e(t)+"::"+b))return!0
else if(s.F(0,"*::"+b))return!0
else if(s.F(0,H.e(t)+"::*"))return!0
else if(s.F(0,"*::*"))return!0}return!1},
$iaW:1}
W.jy.prototype={
$1:function(a){return!C.b.F(C.p,a)}}
W.jz.prototype={
$1:function(a){return C.b.F(C.p,a)}}
W.jJ.prototype={
aq:function(a,b,c){if(this.er(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.F(0,b)
return!1}}
W.jK.prototype={
$1:function(a){return"TEMPLATE::"+H.e(a)}}
W.jH.prototype={
aS:function(a){var u=J.R(a)
if(!!u.$icl)return!1
u=!!u.$ik
if(u&&W.c1(a)==="foreignObject")return!1
if(u)return!0
return!1},
aq:function(a,b,c){if(b==="is"||C.a.a3(b,"on"))return!1
return this.aS(a)},
$iaW:1}
W.d7.prototype={
v:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.bX(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gE:function(a){return this.d}}
W.aW.prototype={}
W.jw.prototype={}
W.eF.prototype={
cG:function(a){new W.jU(this).$2(a,null)},
b4:function(a,b){if(b==null)J.ll(a)
else b.removeChild(a)},
h4:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.mR(a)
n=o.a.getAttribute("is")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=u?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.ai(r)}t="element unprintable"
try{t=J.a7(a)}catch(r){H.ai(r)}try{s=W.c1(a)
this.h3(a,b,p,t,s,o,n)}catch(r){if(H.ai(r) instanceof P.ao)throw r
else{this.b4(a,b)
window
q="Removing corrupted element "+H.e(t)
if(typeof console!="undefined")window.console.warn(q)}}},
h3:function(a,b,c,d,e,f,g){var u,t,s,r,q,p=this
if(c){p.b4(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!p.a.aS(a)){p.b4(a,b)
window
u="Removing disallowed element <"+H.e(e)+"> from "+H.e(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!p.a.aq(a,"is",g)){p.b4(a,b)
window
u="Removing disallowed type extension <"+H.e(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.ga0(f)
t=H.b(u.slice(0),[H.aM(u,0)])
for(s=f.ga0(f).length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.d(t,s)
r=t[s]
if(!p.a.aq(a,J.mU(r),u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.e(e)+" "+r+'="'+H.e(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.R(a).$ico)p.cG(a.content)}}
W.jU.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.h4(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.b4(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.ai(s)
r=u
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=t}}}
W.dV.prototype={}
W.dX.prototype={}
W.dY.prototype={}
W.dZ.prototype={}
W.e_.prototype={}
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
W.cF.prototype={}
W.cG.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.es.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.cH.prototype={}
W.cI.prototype={}
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
P.jC.prototype={
cj:function(a){var u,t=this.a,s=t.length
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
if(!!u.$iae)return new Date(a.a)
if(!!u.$inz)throw H.c(P.iJ("structured clone of RegExp"))
if(!!u.$iaq)return a
if(!!u.$ibr)return a
if(!!u.$ic3)return a
if(!!u.$iaS)return a
if(!!u.$icf||!!u.$ibh||!!u.$icd)return a
if(!!u.$iT){t=p.cj(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.I(a,new P.jE(o,p))
return o.a}if(!!u.$iq){t=p.cj(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.hu(a,t)}if(!!u.$inb){t=p.cj(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.hO(a,new P.jF(o,p))
return o.b}throw H.c(P.iJ("structured clone of other type"))},
hu:function(a,b){var u,t=J.au(a),s=t.gl(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.t(s)
u=0
for(;u<s;++u){q=this.bB(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.jE.prototype={
$2:function(a,b){this.a.a[a]=this.b.bB(b)},
$S:3}
P.jF.prototype={
$2:function(a,b){this.a.b[a]=this.b.bB(b)},
$S:3}
P.eC.prototype={$iaS:1,
gds:function(a){return this.a}}
P.k4.prototype={
$2:function(a,b){this.a[a]=b},
$S:3}
P.jD.prototype={
hO:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.fz.prototype={
gbk:function(){var u=this.b,t=H.l9(u,"x",0)
return new H.ca(new H.cx(u,new P.fA(),[t]),new P.fB(),[t,W.S])},
m:function(a,b,c){var u=this.gbk()
J.mS(u.b.$1(J.eT(u.a,b)),c)},
n:function(a,b){this.b.a.appendChild(b)},
gl:function(a){return J.aj(this.gbk().a)},
h:function(a,b){var u=this.gbk()
return u.b.$1(J.eT(u.a,b))},
gU:function(a){var u=P.kS(this.gbk(),!1,W.S)
return new J.ad(u,u.length)},
$au:function(){return[W.S]},
$ax:function(){return[W.S]},
$aj:function(){return[W.S]},
$aq:function(){return[W.S]}}
P.fA.prototype={
$1:function(a){return!!J.R(a).$iS}}
P.fB.prototype={
$1:function(a){return H.l(a,"$iS")}}
P.js.prototype={
gcz:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return u+t},
gdq:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.w()
if(typeof t!=="number")return H.t(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.e(u.a)+", "+H.e(u.b)+") "+H.e(u.c)+" x "+H.e(u.d)},
t:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.R(b)
if(!!u.$iaa){t=q.a
if(t==u.gbv(b)){s=q.b
if(s==u.gbz(b)){r=q.c
if(typeof t!=="number")return t.w()
if(typeof r!=="number")return H.t(r)
if(t+r===u.gcz(b)){t=q.d
if(typeof s!=="number")return s.w()
if(typeof t!=="number")return H.t(t)
u=s+t===u.gdq(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gK:function(a){var u=this,t=u.a,s=J.cT(t),r=u.b,q=J.cT(r),p=u.c
if(typeof t!=="number")return t.w()
if(typeof p!=="number")return H.t(p)
p=C.c.gK(t+p)
t=u.d
if(typeof r!=="number")return r.w()
if(typeof t!=="number")return H.t(t)
t=C.c.gK(r+t)
return P.o_(P.jp(P.jp(P.jp(P.jp(0,s),q),p),t))}}
P.aa.prototype={
gbv:function(a){return this.a},
gbz:function(a){return this.b},
gaI:function(a){return this.c},
gaD:function(a){return this.d}}
P.aT.prototype={$iaT:1}
P.fU.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.aT]},
$ax:function(){return[P.aT]},
$ij:1,
$aj:function(){return[P.aT]},
$iq:1,
$aq:function(){return[P.aT]}}
P.aX.prototype={$iaX:1}
P.hC.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.aX]},
$ax:function(){return[P.aX]},
$ij:1,
$aj:function(){return[P.aX]},
$iq:1,
$aq:function(){return[P.aX]}}
P.hK.prototype={
gl:function(a){return a.length}}
P.cl.prototype={$icl:1}
P.ie.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.h]},
$ax:function(){return[P.h]},
$ij:1,
$aj:function(){return[P.h]},
$iq:1,
$aq:function(){return[P.h]}}
P.k.prototype={
gc5:function(a){return new P.fz(a,new W.a5(a))},
af:function(a,b,c,d){var u,t,s,r,q,p=H.b([],[W.aW])
p.push(W.lZ(null))
p.push(W.m0())
p.push(new W.jH())
c=new W.eF(new W.dp(p))
u='<svg version="1.1">'+b+"</svg>"
p=document
t=p.body
s=(t&&C.r).hv(t,u,c)
r=p.createDocumentFragment()
s.toString
p=new W.a5(s)
q=p.gaJ(p)
for(;p=q.firstChild,p!=null;)r.appendChild(p)
return r},
$ik:1}
P.b_.prototype={$ib_:1}
P.ix.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return a.getItem(b)},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[P.b_]},
$ax:function(){return[P.b_]},
$ij:1,
$aj:function(){return[P.b_]},
$iq:1,
$aq:function(){return[P.b_]}}
P.e6.prototype={}
P.e7.prototype={}
P.eh.prototype={}
P.ei.prototype={}
P.et.prototype={}
P.eu.prototype={}
P.eA.prototype={}
P.eB.prototype={}
P.bH.prototype={$iu:1,
$au:function(){return[P.w]},
$ij:1,
$aj:function(){return[P.w]},
$iq:1,
$aq:function(){return[P.w]}}
P.eY.prototype={
gl:function(a){return a.length}}
P.eZ.prototype={
h:function(a,b){return P.b2(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.b2(u.value[1]))}},
ga0:function(a){var u=H.b([],[P.h])
this.I(a,new P.f_(u))
return u},
gl:function(a){return a.size},
m:function(a,b,c){throw H.c(P.z("Not supported"))},
$aa3:function(){return[P.h,null]},
$iT:1,
$aT:function(){return[P.h,null]}}
P.f_.prototype={
$2:function(a,b){return this.a.push(a)}}
P.f0.prototype={
gl:function(a){return a.length}}
P.bq.prototype={}
P.hD.prototype={
gl:function(a){return a.length}}
P.dU.prototype={}
P.dv.prototype={
io:function(a,b,c,d,e,f,g){var u,t=J.R(g)
if(!!t.$iaS)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.oU(g))
return}if(!!t.$ic6)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.c(P.cU("Incorrect number or type of arguments"))}}
P.i9.prototype={
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.c(P.N(b,a,null,null,null))
return P.b2(a.item(b))},
m:function(a,b,c){throw H.c(P.z("Cannot assign element of immutable List."))},
M:function(a,b){return this.h(a,b)},
$iu:1,
$au:function(){return[[P.T,,,]]},
$ax:function(){return[[P.T,,,]]},
$ij:1,
$aj:function(){return[[P.T,,,]]},
$iq:1,
$aq:function(){return[[P.T,,,]]}}
P.ep.prototype={}
P.eq.prototype={}
K.aO.prototype={
aE:function(a,b){return!0},
i:function(a){return"all"}}
K.d8.prototype={
aE:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)if(u[s].aE(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.bg.prototype={}
K.a9.prototype={
aE:function(a,b){return!this.en(0,b)},
i:function(a){return"!["+this.cJ(0)+"]"}}
K.hN.prototype={
aE:function(a,b){if(typeof b!=="number")return H.t(b)
return this.a<=b&&this.b>=b},
i:function(a){var u=H.bE(this.a),t=H.bE(this.b)
return u+".."+t}}
K.hW.prototype={
ew:function(a){var u,t,s,r
if(a.a.length<=0)throw H.c(P.m("May not create a Set with zero characters."))
u=P.w
t=new H.I([u,P.aL])
for(s=new H.bf(a,a.gl(a));s.v();)t.m(0,s.d,!0)
r=P.kS(t.ga0(t),!0,u)
C.b.el(r)
this.a=r},
aE:function(a,b){return C.b.F(this.a,b)},
i:function(a){return P.cn(this.a,0,null)}}
L.dA.prototype={
j:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.dK(this.a.k(0,b))
r.a=H.b([],[K.bg])
r.c=!1
this.c.push(r)
return r},
hJ:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.aE(0,a))return r}return},
i:function(a){return this.b},
da:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.F(0,n))o+=" (consume)"
for(n=p.d.c,n=n.ga0(n),n=n.gU(n);n.v();){t=n.gE(n)
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.e(t)+" => ["+H.e(s)+"]")
o=u.c.F(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.o)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.dH.prototype={
i:function(a){var u=H.lf(this.b,"\n","\\n"),t=H.lf(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.dI.prototype={
aG:function(a,b,c){var u,t,s
for(u=c.length,t=0;t<c.length;c.length===u||(0,H.o)(c),++t){s=c[t]
this.c.m(0,s,b)}},
i:function(a){return this.b}}
L.is.prototype={
k:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dA(this,b)
u.c=H.b([],[L.dK])
this.a.m(0,b,u)}return u},
S:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.dI(a)
u=P.h
t.c=new H.I([u,u])
this.b.m(0,a,t)}return t},
cC:function(a){return this.is(a)},
is:function(a){var u=this
return P.om(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$cC(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.w]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.cv(c,0)
else{if(!t.v()){s=3
break}l=t.d}d.push(l);++o
k=g.hJ(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cn(d,0,null)
throw H.c(P.m("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.n(P.z("removeRange"))
P.aZ(0,m,d.length)
d.splice(0,m-0)
C.b.ae(c,d)
d=H.b([],f)
e=H.b([],f)
g=u.d
s=!u.c.F(0,p.a)?7:8
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
if(g.d!=null){j=P.cn(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.dH(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.F(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.nY()
case 1:return P.nZ(q)}}},L.dH)},
i:function(a){var u,t=new P.U(""),s=this.d
if(s!=null)t.a=s.da()+"\n"
for(s=this.a,s=s.giu(s),s=s.gU(s);s.v();){u=s.gE(s)
if(u!=this.d)t.a+=u.da()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.dK.prototype={
i:function(a){return this.b.b+": "+this.cJ(0)}}
O.b9.prototype={
bF:function(a){this.a=H.b([],[a])
this.c=this.b=null},
cH:function(a,b,c){this.b=b
this.c=a},
bg:function(a,b){return this.cH(a,null,b)},
fI:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
ez:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gl:function(a){return this.a.length},
gU:function(a){var u=this.a
return new J.ad(u,u.length)},
M:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
n:function(a,b){var u,t,s=this,r=[H.l9(s,"b9",0)]
if(s.fI(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.ez(t,H.b([b],r))}},
$ij:1}
O.cc.prototype={
gl:function(a){return this.a.length},
gB:function(){var u=this.b
return u==null?this.b=D.L():u},
aK:function(){var u=this.b
if(u!=null)u.G(null)},
ga1:function(a){var u=this.a
if(u.length>0)return C.b.gas(u)
else return V.dj()},
e5:function(a){var u=this.a
if(a==null)u.push(V.dj())
else u.push(a)
this.aK()},
cs:function(){var u=this.a
if(u.length>0){u.pop()
this.aK()}}}
E.f4.prototype={}
E.bb.prototype={
sa9:function(a,b){var u,t,s=this,r=s.c
if(r!=b){s.d=s.c=b
s.e=null
if(r!=null)r.gB().D(0,s.ge0())
u=s.c
if(u!=null)u.gB().n(0,s.ge0())
t=new D.E("shape",r,s.c)
t.b=!0
s.aF(t)}},
sba:function(a){var u,t,s=this
if(!J.A(s.r,a)){u=s.r
if(u!=null)u.gB().D(0,s.gdZ())
if(a!=null)a.gB().n(0,s.gdZ())
s.r=a
t=new D.E("mover",u,a)
t.b=!0
s.aF(t)}},
av:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.b_(0,b,s):null
if(!J.A(q,s.x)){u=s.x
s.x=q
t=new D.E("matrix",u,q)
t.b=!0
s.aF(t)}for(r=s.y.a,r=new J.ad(r,r.length);r.v();)r.d.av(0,b)},
aY:function(a){var u,t=this,s=a.dx,r=t.x
s.toString
if(r==null)s.a.push(s.ga1(s))
else s.a.push(r.q(0,s.ga1(s)))
s.aK()
a.e6(t.f)
s=a.dy
u=(s&&C.b).gas(s)
if(u!=null&&t.d!=null)u.ih(a,t)
for(s=t.y.a,s=new J.ad(s,s.length);s.v();)s.d.aY(a)
a.e4()
a.dx.cs()},
aF:function(a){var u=this.z
if(u!=null)u.G(a)},
W:function(){return this.aF(null)},
e1:function(a){this.e=null
this.aF(a)},
i2:function(){return this.e1(null)},
e_:function(a){this.aF(a)},
i1:function(){return this.e_(null)},
dY:function(a){this.aF(a)},
hZ:function(){return this.dY(null)},
hY:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdX(),s=[{func:1,ret:-1,args:[D.a_]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.W()},
i0:function(a,b){var u,t
for(u=b.gU(b),t=this.gdX();u.v();)u.gE(u).gB().D(0,t)
this.W()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bt.prototype={
i:function(a){return this.b}}
E.bC.prototype={
i:function(a){return this.b}}
E.e0.prototype={}
E.hO.prototype={
ev:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.ae(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cc()
t=[V.aU]
u.a=H.b([],t)
u.gB().n(0,new E.hP(s))
s.cy=u
u=new O.cc()
u.a=H.b([],t)
u.gB().n(0,new E.hQ(s))
s.db=u
u=new O.cc()
u.a=H.b([],t)
u.gB().n(0,new E.hR(s))
s.dx=u
u=H.b([],[O.dD])
s.dy=u
u.push(null)
s.fr=new H.I([P.h,A.dw])},
gib:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga1(s)
u=t.db
u=t.z=s.q(0,u.ga1(u))
s=u}return s},
e6:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gas(u):a)},
e4:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.hP.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.hQ.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.hR.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.dF.prototype={
cO:function(a){this.e8()},
cN:function(){return this.cO(null)},
ghP:function(){var u,t=this,s=Date.now(),r=C.c.a4(P.ls(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.ae(s,!1)
return u/r},
d4:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.q()
if(typeof r!=="number")return H.t(r)
u=C.d.ck(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.q()
t=C.d.ck(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lK(C.n,s.gij())}},
e8:function(){if(!this.cx){this.cx=!0
var u=window
C.G.eV(u)
C.G.h_(u,W.mb(new E.iq(this),P.ac))}},
ig:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.d4()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.ae(r,!1)
s.y=P.ls(r-s.r.a).a*0.000001
r=s.cy
C.b.sl(r.a,0)
r.aK()
r=s.db
C.b.sl(r.a,0)
r.aK()
r=s.dx
C.b.sl(r.a,0)
r.aK()
r=s.dy;(r&&C.b).sl(r,0)
s.dy.push(null)
o.aY(p.e)}s=p.Q
if(s!=null)s.G(null)}catch(q){u=H.ai(q)
t=H.la(q)
P.le("Error: "+H.e(u))
P.le("Stack: "+H.e(t))
throw H.c(u)}}}
E.iq.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.ig()}}}
Z.dS.prototype={}
Z.cX.prototype={
c1:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.ai(s)
t=P.m('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.e(u))
throw H.c(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.e(u.e)+"]"}}
Z.ja.prototype={}
Z.cY.prototype={
aV:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
c1:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].c1(a)},
it:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
aY:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.h],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.a7(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.j(p,", ")+"\nAttrs:   "+C.b.j(r,", ")}}
Z.by.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.e(H.ck(this.c))+"'")+"]"}}
Z.b1.prototype={
gcI:function(a){var u=this.a,t=(u&$.b6().a)!==0?3:0
if((u&$.b5().a)!==0)t+=3
if((u&$.b4().a)!==0)t+=3
if((u&$.bp().a)!==0)t+=2
if((u&$.b7().a)!==0)t+=3
if((u&$.cQ().a)!==0)t+=3
if((u&$.cR().a)!==0)t+=4
if((u&$.bW().a)!==0)++t
return(u&$.b3().a)!==0?t+4:t},
hl:function(a){var u,t=$.b6(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.b5()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bp()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b7()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cQ()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cR()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bW()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.b3()
if((s&t.a)!==0)if(u===a)return t
return $.mH()},
t:function(a,b){if(b==null)return!1
if(!(b instanceof Z.b1))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.h]),t=this.a
if((t&$.b6().a)!==0)u.push("Pos")
if((t&$.b5().a)!==0)u.push("Norm")
if((t&$.b4().a)!==0)u.push("Binm")
if((t&$.bp().a)!==0)u.push("Txt2D")
if((t&$.b7().a)!==0)u.push("TxtCube")
if((t&$.cQ().a)!==0)u.push("Clr3")
if((t&$.cR().a)!==0)u.push("Clr4")
if((t&$.bW().a)!==0)u.push("Weight")
if((t&$.b3().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.j(u,"|")}}
D.f7.prototype={}
D.bx.prototype={
n:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.a_]}]):u).push(b)},
D:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.F(s,b)
if(s===!0){s=t.a
u=(s&&C.b).D(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.F(s,b)
if(s===!0){s=t.b
u=(s&&C.b).D(s,b)||u}return u},
G:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.a_()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.I(P.kS(u,!0,{func:1,ret:-1,args:[D.a_]}),new D.fv(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.a_]}])
C.b.I(u,new D.fw(q))}return!0},
hE:function(){return this.G(null)},
at:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.G(u)}}}}
D.fv.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.fw.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.a_.prototype={}
D.bz.prototype={}
D.bA.prototype={}
D.E.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.e(this.d)+" => "+H.e(this.e)}}
X.cZ.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.cZ))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.dd.prototype={
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.dd))return!1
if(this.a!=b.a)return!1
if(!this.b.t(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.e(this.a)}}
X.fT.prototype={
i7:function(a){this.c=a.b
this.d.n(0,a.a)
return!1},
i3:function(a){this.c=a.b
this.d.D(0,a.a)
return!1}}
X.dg.prototype={}
X.h1.prototype={
b2:function(a,b){var u,t,s,r,q=this,p=Date.now(),o=q.x,n=b.a,m=q.Q
if(typeof n!=="number")return n.q()
u=b.b
t=q.ch
if(typeof u!=="number")return u.q()
s=o.w(0,new V.X(n*m,u*t))
t=q.a.gaT()
r=new X.aV(a,V.aY(),q.x,t,s)
r.b=!0
q.z=new P.ae(p,!1)
q.x=s
return r},
cr:function(a,b){this.r=a.a
return!1},
bc:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eh()
if(typeof u!=="number")return u.a8()
this.r=(u&~t)>>>0
return!1},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.b2(a,b))
return!0},
i8:function(a){var u,t,s,r,q,p,o=this,n=o.e
if(n==null)return!1
u=o.a.gaT()
t=o.x
Date.now()
s=a.a
r=o.cx
if(typeof s!=="number")return s.q()
q=a.b
p=o.cy
if(typeof q!=="number")return q.q()
t=new X.ce(new V.J(s*r,q*p),u,t)
t.b=!0
n.G(t)
return!0},
fv:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.dg(c,r.a.gaT(),b)
s.b=!0
t.G(s)
r.y=new P.ae(u,!1)
r.x=V.aY()}}
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
X.aV.prototype={}
X.hs.prototype={
bM:function(a,b,c){var u=this,t=new P.ae(Date.now(),!1),s=u.a.gaT(),r=new X.aV(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cr:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.G(this.bM(a,b,!0))
return!0},
bc:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eh()
if(typeof t!=="number")return t.a8()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.G(u.bM(a,b,!0))
return!0},
bb:function(a,b){var u=this.d
if(u==null)return!1
u.G(this.bM(a,b,!1))
return!0},
i9:function(a,b){var u,t,s,r,q,p=this,o=p.e
if(o==null)return!1
u=p.a.gaT()
Date.now()
t=a.a
s=p.Q
if(typeof t!=="number")return t.q()
r=a.b
q=p.ch
if(typeof r!=="number")return r.q()
u=new X.ce(new V.J(t*s,r*q),u,b)
u.b=!0
o.G(u)
return!0},
gdt:function(){var u=this.b
return u==null?this.b=D.L():u},
gcD:function(){var u=this.c
return u==null?this.c=D.L():u},
gdW:function(){var u=this.d
return u==null?this.d=D.L():u}}
X.ce.prototype={}
X.hJ.prototype={}
X.dJ.prototype={}
X.iu.prototype={
b2:function(a,b){var u=this,t=new P.ae(Date.now(),!1),s=a.length>0?a[0]:V.aY(),r=u.a.gaT(),q=new X.dJ(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
i6:function(a){var u=this.b
if(u==null)return!1
u.G(this.b2(a,!0))
return!0},
i4:function(a){var u=this.c
if(u==null)return!1
u.G(this.b2(a,!0))
return!0},
i5:function(a){var u=this.d
if(u==null)return!1
u.G(this.b2(a,!1))
return!0}}
X.dO.prototype={
gaT:function(){var u=this.a,t=C.i.gdr(u).c
t.toString
u=C.i.gdr(u).d
u.toString
return V.lF(0,0,t,u)},
cV:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.dd(u,new X.am(t,a.altKey,a.shiftKey))},
aQ:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
c0:function(a){var u=this.b,t=a.ctrlKey||a.metaKey
u.c=new X.am(t,a.altKey,a.shiftKey)},
aA:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.L()
u=t.top
if(typeof r!=="number")return r.L()
return new V.X(s-q,r-u)},
b3:function(a){return new V.J(a.movementX,a.movementY)},
bW:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.X])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
q=C.d.al(r.pageX)
C.d.al(r.pageY)
p=o.left
C.d.al(r.pageX)
n.push(new V.X(q-p,C.d.al(r.pageY)-o.top))}return n},
ay:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.cZ(u,new X.am(t,a.altKey,a.shiftKey))},
bN:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.L()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.L()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
fo:function(a){this.f=!0},
fc:function(a){this.f=!1},
fi:function(a){if(this.f&&this.bN(a))a.preventDefault()},
ft:function(a){var u
if(!this.f)return
u=this.cV(a)
this.b.i7(u)},
fq:function(a){var u
if(!this.f)return
u=this.cV(a)
this.b.i3(u)},
fz:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.aQ(a)
if(r.x){u=r.ay(a)
t=r.b3(a)
if(r.d.cr(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.ay(a)
s=r.aA(a)
if(r.c.cr(u,s))a.preventDefault()},
fD:function(a){var u,t,s,r=this
r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bc(u,s))a.preventDefault()},
fm:function(a){var u,t,s,r=this
if(!r.bN(a)){r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.bc(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bc(u,s))a.preventDefault()}},
fB:function(a){var u,t,s,r=this
r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bb(u,s))a.preventDefault()},
fk:function(a){var u,t,s,r=this
if(!r.bN(a)){r.aQ(a)
u=r.ay(a)
if(r.x){t=r.b3(a)
if(r.d.bb(u,t))a.preventDefault()
return}if(r.r)return
s=r.aA(a)
if(r.c.bb(u,s))a.preventDefault()}},
fF:function(a){var u,t,s=this
s.aQ(a)
u=new V.J((a&&C.F).ghx(a),C.F.ghy(a)).q(0,s.Q)
if(s.x){if(s.d.i8(u))a.preventDefault()
return}if(s.r)return
t=s.aA(a)
if(s.c.i9(u,t))a.preventDefault()},
fH:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.ay(s.y)
t=s.aA(s.y)
s.d.fv(u,t,r)}},
fU:function(a){var u,t=this
t.a.focus()
t.f=!0
t.c0(a)
u=t.bW(a)
if(t.e.i6(u))a.preventDefault()},
fQ:function(a){var u
this.c0(a)
u=this.bW(a)
if(this.e.i4(u))a.preventDefault()},
fS:function(a){var u
this.c0(a)
u=this.bW(a)
if(this.e.i5(u))a.preventDefault()}}
D.f1.prototype={$ia8:1}
D.bv.prototype={
aw:function(a){var u=this.r
if(u!=null)u.G(a)},
eC:function(){return this.aw(null)},
$ia8:1}
D.a8.prototype={}
D.de.prototype={
aw:function(a){var u=this.y
if(u!=null)u.G(a)},
d2:function(a){var u=this.z
if(u!=null)u.G(a)},
fu:function(){return this.d2(null)},
fK:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t){s=a[t]
if(s==null||this.eP(s))return!1}return!0},
f6:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gd1(),s=[{func:1,ret:-1,args:[D.a_]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q instanceof D.bv)this.f.push(q)
p=q.r
if(p==null){p=new D.bx()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bz()
u.b=!0
this.aw(u)},
fO:function(a,b){var u,t,s
for(u=b.gU(b),t=this.gd1();u.v();){s=u.gE(u)
C.b.D(this.e,s)
s.gB().D(0,t)}u=new D.bA()
u.b=!0
this.aw(u)},
eP:function(a){var u=C.b.F(this.f,a)
return u},
$aj:function(){return[D.a8]},
$ab9:function(){return[D.a8]}}
D.hI.prototype={$ia8:1}
D.i8.prototype={$ia8:1}
V.a0.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a0))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.ak.prototype={
cB:function(a){var u=this
return H.b([u.a,u.b,u.c,u.d],[P.K])},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.ak))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.fu.prototype={}
V.di.prototype={
ab:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.K])
return t},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.di))return!1
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
i:function(a){var u,t,s,r,q=this,p=[P.K],o=V.bU(H.b([q.a,q.d,q.r],p),3,0),n=V.bU(H.b([q.b,q.e,q.x],p),3,0),m=V.bU(H.b([q.c,q.f,q.y],p),3,0)
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
ab:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.K])
return t},
dS:function(b2){var u,t,s,r=this,q=r.a,p=r.f,o=r.b,n=r.e,m=q*p-o*n,l=r.r,k=r.c,j=q*l-k*n,i=r.x,h=r.d,g=q*i-h*n,f=o*l-k*p,e=o*i-h*p,d=k*i-h*l,c=r.y,b=r.cy,a=r.z,a0=r.cx,a1=c*b-a*a0,a2=r.db,a3=r.Q,a4=c*a2-a3*a0,a5=r.dx,a6=r.ch,a7=c*a5-a6*a0,a8=a*a2-a3*b,a9=a*a5-a6*b,b0=a3*a5-a6*a2,b1=m*b0-j*a9+g*a8+f*a7-e*a4+d*a1
if(Math.abs(b1-0)<$.C().a)return V.dj()
u=1/b1
t=-n
s=-a0
return V.az((p*b0-l*a9+i*a8)*u,(-o*b0+k*a9-h*a8)*u,(b*d-a2*e+a5*f)*u,(-a*d+a3*e-a6*f)*u,(t*b0+l*a7-i*a4)*u,(q*b0-k*a7+h*a4)*u,(s*d+a2*g-a5*j)*u,(c*d-a3*g+a6*j)*u,(n*a9-p*a7+i*a1)*u,(-q*a9+o*a7-h*a1)*u,(a0*e-b*g+a5*m)*u,(-c*e+a*g-a6*m)*u,(t*a8+p*a4-l*a1)*u,(q*a8-o*a4+k*a1)*u,(s*f+b*j-a2*m)*u,(c*f-a*j+a3*m)*u)},
q:function(b2,b3){var u=this,t=u.a,s=b3.a,r=u.b,q=b3.e,p=u.c,o=b3.y,n=u.d,m=b3.cx,l=b3.b,k=b3.f,j=b3.z,i=b3.cy,h=b3.c,g=b3.r,f=b3.Q,e=b3.db,d=b3.d,c=b3.x,b=b3.ch,a=b3.dx,a0=u.e,a1=u.f,a2=u.r,a3=u.x,a4=u.y,a5=u.z,a6=u.Q,a7=u.ch,a8=u.cx,a9=u.cy,b0=u.db,b1=u.dx
return V.az(t*s+r*q+p*o+n*m,t*l+r*k+p*j+n*i,t*h+r*g+p*f+n*e,t*d+r*c+p*b+n*a,a0*s+a1*q+a2*o+a3*m,a0*l+a1*k+a2*j+a3*i,a0*h+a1*g+a2*f+a3*e,a0*d+a1*c+a2*b+a3*a,a4*s+a5*q+a6*o+a7*m,a4*l+a5*k+a6*j+a7*i,a4*h+a5*g+a6*f+a7*e,a4*d+a5*c+a6*b+a7*a,a8*s+a9*q+b0*o+b1*m,a8*l+a9*k+b0*j+b1*i,a8*h+a9*g+b0*f+b1*e,a8*d+a9*c+b0*b+b1*a)},
bA:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.y(u.a*t+u.b*s+u.c*r,u.e*t+u.f*s+u.r*r,u.y*t+u.z*s+u.Q*r)},
be:function(a){var u=this,t=a.a,s=a.b,r=a.c
return new V.O(u.a*t+u.b*s+u.c*r+u.d,u.e*t+u.f*s+u.r*r+u.x,u.y*t+u.z*s+u.Q*r+u.ch)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.aU))return!1
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
i:function(a){return this.R()},
J:function(a){var u,t,s,r,q,p=this,o=[P.K],n=V.bU(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.bU(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.bU(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.bU(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
R:function(){return this.J("")}}
V.X.prototype={
w:function(a,b){return new V.X(this.a+b.a,this.b+b.b)},
L:function(a,b){return new V.X(this.a-b.a,this.b-b.b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.aY()
return new V.X(this.a/b,this.b/b)},
t:function(a,b){var u,t
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.X))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-this.a)<t))return!1
if(!(Math.abs(b.b-this.b)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.O.prototype={
w:function(a,b){return new V.O(this.a+b.a,this.b+b.b,this.c+b.c)},
L:function(a,b){return new V.O(this.a-b.a,this.b-b.b,this.c-b.c)},
q:function(a,b){return new V.O(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.kU()
return new V.O(this.a/b,this.b/b,this.c/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.O))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.bj.prototype={
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bj))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.du.prototype={
gaa:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.du))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
V.J.prototype={
b8:function(a){return Math.sqrt(this.C(this))},
C:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.q()
if(typeof r!=="number")return H.t(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.q()
if(typeof t!=="number")return H.t(t)
return s*r+u*t},
q:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.q()
if(typeof b!=="number")return H.t(b)
u=this.b
if(typeof u!=="number")return u.q()
return new V.J(t*b,u*b)},
p:function(a,b){var u,t
if(Math.abs(b-0)<$.C().a){u=$.lR
return u==null?$.lR=new V.J(0,0):u}u=this.a
if(typeof u!=="number")return u.p()
t=this.b
if(typeof t!=="number")return t.p()
return new V.J(u/b,t/b)},
t:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.J))return!1
u=b.a
t=this.a
s=$.C()
s.toString
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.t(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.L()
if(typeof t!=="number")return H.t(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+"]"}}
V.y.prototype={
b8:function(a){return Math.sqrt(this.C(this))},
C:function(a){return this.a*a.a+this.b*a.b+this.c*a.c},
cm:function(a,b){var u=this.a,t=this.b,s=this.c
return new V.y(u+b*(a.a-u),t+b*(a.b-t),s+b*(a.c-s))},
aB:function(a){var u=this.b,t=a.c,s=this.c,r=a.b,q=a.a,p=this.a
return new V.y(u*t-s*r,s*q-p*t,p*r-u*q)},
w:function(a,b){return new V.y(this.a+b.a,this.b+b.b,this.c+b.c)},
V:function(a){return new V.y(-this.a,-this.b,-this.c)},
q:function(a,b){return new V.y(this.a*b,this.b*b,this.c*b)},
p:function(a,b){if(Math.abs(b-0)<$.C().a)return V.cv()
return new V.y(this.a/b,this.b/b,this.c/b)},
dT:function(){var u=$.C().a
if(!(Math.abs(0-this.a)<u))return!1
if(!(Math.abs(0-this.b)<u))return!1
if(!(Math.abs(0-this.c)<u))return!1
return!0},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.F(this.a,3,0)+", "+V.F(this.b,3,0)+", "+V.F(this.c,3,0)+"]"}}
V.b0.prototype={
b8:function(a){var u=this,t=u.a,s=u.b,r=u.c,q=u.d
return Math.sqrt(t*t+s*s+r*r+q*q)},
p:function(a,b){var u,t=this
if(Math.abs(b-0)<$.C().a){u=$.lW
return u==null?$.lW=new V.b0(0,0,0,0):u}return new V.b0(t.a/b,t.b/b,t.c/b,t.d/b)},
t:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.b0))return!1
u=b.a
t=$.C().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.F(u.a,3,0)+", "+V.F(u.b,3,0)+", "+V.F(u.c,3,0)+", "+V.F(u.d,3,0)+"]"}}
U.f9.prototype={
bH:function(a){var u=V.pl(a,this.c,this.b)
return u},
gB:function(){var u=this.y
return u==null?this.y=D.L():u},
T:function(a){var u=this.y
if(u!=null)u.G(a)},
scE:function(a,b){},
scn:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.C().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.bH(u)}s=new D.E("maximumLocation",s,t.b)
s.b=!0
t.T(s)}},
scp:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.C().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.bH(u)}s=new D.E("minimumLocation",s,t.c)
s.b=!0
t.T(s)}},
sZ:function(a,b){var u,t=this
b=t.bH(b)
u=t.d
if(!(Math.abs(u-b)<$.C().a)){t.d=b
u=new D.E("location",u,b)
u.b=!0
t.T(u)}},
sco:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.C().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.E("maximumVelocity",r,a)
r.b=!0
s.T(r)}},
sX:function(a){var u=this,t=u.e,s=-t
if(a<s)a=s
else if(a>t)a=t
t=u.f
if(!(Math.abs(t-a)<$.C().a)){u.f=a
t=new D.E("velocity",t,a)
t.b=!0
u.T(t)}},
sc9:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.C().a)){this.x=a
u=new D.E("dampening",u,a)
u.b=!0
this.T(u)}},
av:function(a,b){var u,t,s,r=this,q=r.f,p=$.C().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sZ(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.C().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sX(u)}}}
U.d0.prototype={
gB:function(){var u=this.b
return u==null?this.b=D.L():u},
b_:function(a,b,c){return this.a},
t:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.d0))return!1
return J.A(this.a,b.a)},
i:function(a){return"Constant: "+this.a.J("          ")}}
U.c4.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.L():u},
T:function(a){var u=this.e
if(u!=null)u.G(a)},
a7:function(){return this.T(null)},
f4:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaP(),s=[{func:1,ret:-1,args:[D.a_]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.gB()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bz()
u.b=!0
this.T(u)},
fM:function(a,b){var u,t
for(u=b.gU(b),t=this.gaP();u.v();)u.gE(u).gB().D(0,t)
u=new D.bA()
u.b=!0
this.T(u)},
b_:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.P()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.ad(r,r.length),u=null;r.v();){q=r.d
if(q!=null){t=q.b_(0,b,c)
if(t!=null)u=u==null?t:t.q(0,u)}}s.f=u==null?V.dj():u
r=s.e
if(r!=null)r.at(0)}return s.f},
t:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.c4))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.A(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$aj:function(){return[U.af]},
$ab9:function(){return[U.af]},
$iaf:1}
U.af.prototype={}
U.dP.prototype={
gB:function(){var u=this.cy
return u==null?this.cy=D.L():u},
T:function(a){var u=this.cy
if(u!=null)u.G(a)},
a7:function(){return this.T(null)},
b5:function(a){var u=this
if(u.a!=null)return!1
u.a=a
a.c.gdt().n(0,u.gbO())
u.a.c.gdW().n(0,u.gbQ())
u.a.c.gcD().n(0,u.gbS())
return!0},
bP:function(a){var u=this
if(!J.A(u.c,u.a.b.c))return
u.x=u.y=!0
u.z=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaV")
if(!n.y)return
if(n.x){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.C(u)
t=n.r
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.x=!1}if(n.d){u=a.c
t=a.d.L(0,a.y)
u=new V.J(t.a,t.b).q(0,2).p(0,u.gaa())
n.Q=u
t=n.b
u=u.a
if(typeof u!=="number")return u.q()
s=n.e
if(typeof s!=="number")return H.t(s)
t.sX(u*10*s)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=new V.J(s.a,s.b).q(0,2).p(0,u.gaa())
s=n.b
q=r.a
if(typeof q!=="number")return q.V()
p=n.e
if(typeof p!=="number")return H.t(p)
o=n.z
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
n.b.sX(0)
t=t.L(0,a.z)
n.Q=new V.J(t.a,t.b).q(0,2).p(0,u.gaa())}n.a7()},
bT:function(a){var u,t,s,r=this
if(!r.y)return
r.y=!1
if(r.x)return
u=r.Q
if(u.C(u)>0.0001){u=r.b
t=r.Q.a
if(typeof t!=="number")return t.q()
s=r.e
if(typeof s!=="number")return H.t(s)
u.sX(t*10*s)
r.a7()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.ch,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.ch=p
u=b.y
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
r.cx=V.az(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1)}return r.cx},
$iaf:1}
U.dQ.prototype={
gB:function(){var u=this.fx
return u==null?this.fx=D.L():u},
T:function(a){var u=this.fx
if(u!=null)u.G(a)},
a7:function(){return this.T(null)},
b5:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
a.c.gdt().n(0,s.gbO())
s.a.c.gdW().n(0,s.gbQ())
s.a.c.gcD().n(0,s.gbS())
u=s.a.d
t=u.f
u=t==null?u.f=D.L():t
u.n(0,s.geX())
u=s.a.d
t=u.d
u=t==null?u.d=D.L():t
u.n(0,s.geZ())
u=s.a.e
t=u.b
u=t==null?u.b=D.L():t
u.n(0,s.ghd())
u=s.a.e
t=u.d
u=t==null?u.d=D.L():t
u.n(0,s.ghb())
u=s.a.e
t=u.c
u=t==null?u.c=D.L():t
u.n(0,s.gh9())
return!0},
ao:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.V()
u=-u}if(this.r){if(typeof t!=="number")return t.V()
t=-t}return new V.J(u,t)},
bP:function(a){var u=this
H.l(a,"$iaV")
if(!J.A(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
bR:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaV")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.J(t.a,t.b).q(0,2).p(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.J(s.a,s.b).q(0,2).p(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.J(t.a,t.b).q(0,2).p(0,u.gaa()))}n.a7()},
bT:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sX(-t*10*u)
r.a7()}},
eY:function(a){var u=this
if(H.l(a,"$idg").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
f_:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$iaV")
if(!J.A(n.d,a.x.b))return
u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.J(s.a,s.b).q(0,2).p(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.J(t.a,t.b).q(0,2).p(0,u.gaa()))
n.a7()},
he:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
hc:function(a){var u,t,s,r,q,p,o,n=this
H.l(a,"$idJ")
if(!n.cx)return
if(n.ch){u=a.d.L(0,a.y)
u=new V.J(u.a,u.b)
u=u.C(u)
t=n.Q
if(typeof t!=="number")return H.t(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.L(0,a.y)
u=n.ao(new V.J(t.a,t.b).q(0,2).p(0,u.gaa()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.V()
s=n.y
if(typeof s!=="number")return H.t(s)
t.sX(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.V()
t=n.x
if(typeof t!=="number")return H.t(t)
s.sX(-u*10*t)}else{u=a.c
t=a.d
s=t.L(0,a.y)
r=n.ao(new V.J(s.a,s.b).q(0,2).p(0,u.gaa()))
s=n.c
q=r.a
if(typeof q!=="number")return q.V()
p=n.y
if(typeof p!=="number")return H.t(p)
o=n.cy
if(typeof o!=="number")return H.t(o)
s.sZ(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.V()
q=n.x
if(typeof q!=="number")return H.t(q)
s=n.db
if(typeof s!=="number")return H.t(s)
o.sZ(0,-p*q+s)
n.b.sX(0)
n.c.sX(0)
t=t.L(0,a.z)
n.dx=n.ao(new V.J(t.a,t.b).q(0,2).p(0,u.gaa()))}n.a7()},
ha:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.C(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.V()
s=r.y
if(typeof s!=="number")return H.t(s)
u.sX(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.V()
u=r.x
if(typeof u!=="number")return H.t(u)
s.sX(-t*10*u)
r.a7()}},
b_:function(a,b,c){var u,t,s,r=this,q=r.dy,p=b.e
if(typeof q!=="number")return q.P()
if(q<p){r.dy=p
u=b.y
r.c.av(0,u)
r.b.av(0,u)
q=r.b.d
t=Math.cos(q)
s=Math.sin(q)
q=V.az(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1)
p=r.c.d
t=Math.cos(p)
s=Math.sin(p)
r.fr=q.q(0,V.az(t,0,-s,0,0,1,0,0,s,0,t,0,0,0,0,1))}return r.fr},
$iaf:1}
U.dR.prototype={
gB:function(){var u=this.r
return u==null?this.r=D.L():u},
T:function(a){var u=this.r
if(u!=null)u.G(a)},
b5:function(a){var u,t,s,r=this
if(r.a!=null)return!1
r.a=a
u=a.c
t=u.e
u=t==null?u.e=D.L():t
t=r.gf1()
u.n(0,t)
u=r.a.d
s=u.e;(s==null?u.e=D.L():s).n(0,t)
return!0},
f2:function(a){var u,t,s,r,q=this
if(!J.A(q.b,q.a.b.c))return
H.l(a,"$ice")
u=q.d
t=a.x.b
s=q.c
if(typeof t!=="number")return t.q()
r=u+t*s
if(u!==r){q.d=r
u=new D.E("zoom",u,r)
u.b=!0
q.T(u)}},
b_:function(a,b,c){var u,t=this,s=t.e,r=b.e
if(s<r){t.e=r
u=Math.pow(10,t.d)
t.f=V.az(u,0,0,0,0,u,0,0,0,0,u,0,0,0,0,1)}return t.f},
$iaf:1}
M.d5.prototype={
ax:function(a){var u=this.y
if(u!=null)u.G(a)},
eD:function(){return this.ax(null)},
fe:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gan(),s=[{func:1,ret:-1,args:[D.a_]}],r=0;r<b.length;b.length===u||(0,H.o)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bx()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bz()
u.b=!0
this.ax(u)},
fg:function(a,b){var u,t
for(u=b.gU(b),t=this.gan();u.v();)u.gE(u).gB().D(0,t)
u=new D.bA()
u.b=!0
this.ax(u)},
sea:function(a){var u,t=this,s=t.d
if(s!=a){if(s!=null)s.gB().D(0,t.gan())
u=t.d
t.d=a
if(a!=null)a.gB().n(0,t.gan())
s=new D.E("technique",u,t.d)
s.b=!0
t.ax(s)}},
gB:function(){var u=this.y
return u==null?this.y=D.L():u},
aY:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this
a.e6(f.d)
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
if(typeof s!=="number")return H.t(s)
o=C.d.al(p*s)
p=q.b
if(typeof r!=="number")return H.t(r)
n=C.d.al(p*r)
p=C.d.al(q.c*s)
a.c=p
q=C.d.al(q.d*r)
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
i=V.az(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.e5(i)
t=$.lA
if(t==null){t=V.kU()
q=V.kZ()
p=$.lS
t=V.lx(t,q,p==null?$.lS=new V.y(0,0,-1):p)
$.lA=t
h=t}else h=t
u=u.b
if(u!=null){g=u.a
if(g!=null)h=g.q(0,h)}a.db.e5(h)
u=f.d
if(u!=null)u.av(0,a)
for(u=f.e.a,u=new J.ad(u,u.length);u.v();)u.d.av(0,a)
for(u=f.e.a,u=new J.ad(u,u.length);u.v();)u.d.aY(a)
f.b.toString
a.cy.cs()
a.db.cs()
f.c.toString
a.e4()}}
A.cV.prototype={}
A.eX.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
hF:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
hz:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a1.prototype={
gam:function(a){var u=this.a?1:0,t=this.c?4:0
return u|0|t},
i:function(a){var u=this.a?1:0,t=this.c?4:0
return""+(u|0|t)},
t:function(a,b){var u
if(b==null)return!1
if(!(b instanceof A.a1))return!1
if(this.a===b.a)u=this.c===b.c
else u=!1
return u}}
A.h7.prototype={
eu:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.U("")
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
A.oB(c3,u)
A.oD(c3,u)
A.oC(c3,u)
A.oF(c3,u)
A.oG(c3,u)
A.oE(c3,u)
A.oH(c3,u)
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
m=A.oA(b8.z)
b8.c=n
b8.d=m
b8.e=b8.cW(n,35633)
b8.f=b8.cW(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.n(P.m("Failed to link shader: "+H.e(l)))}b8.h5()
b8.h7()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.l(b8.y.N(0,"invViewMat"),"$iag")
if(t)b8.dy=H.l(b8.y.N(0,"objMat"),"$iag")
if(r)b8.fr=H.l(b8.y.N(0,"viewObjMat"),"$iag")
b8.fy=H.l(b8.y.N(0,"projViewObjMat"),"$iag")
if(c3.go)b8.fx=H.l(b8.y.N(0,"viewMat"),"$iag")
if(c3.x1)b8.k1=H.l(b8.y.N(0,"txt2DMat"),"$ics")
if(c3.x2)b8.k2=H.l(b8.y.N(0,"txtCubeMat"),"$iag")
if(c3.y1)b8.k3=H.l(b8.y.N(0,"colorMat"),"$iag")
b8.r1=H.b([],[A.ag])
t=c3.br
if(t>0){b8.k4=b8.y.N(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.n(P.m(c0+q+c1))
s.push(H.l(j,"$iag"))}}t=c3.a
if(t.a)b8.r2=H.l(b8.y.N(0,"emissionClr"),"$iG")
if(t.c)b8.ry=H.l(b8.y.N(0,"emissionTxt"),"$ia2")
t=c3.b
if(t.a)b8.x1=H.l(b8.y.N(0,"ambientClr"),"$iG")
if(t.c)b8.y1=H.l(b8.y.N(0,"ambientTxt"),"$ia2")
t=c3.c
if(t.a)b8.y2=H.l(b8.y.N(0,"diffuseClr"),"$iG")
if(t.c)b8.aC=H.l(b8.y.N(0,"diffuseTxt"),"$ia2")
t=c3.d
if(t.a)b8.bs=H.l(b8.y.N(0,"invDiffuseClr"),"$iG")
if(t.c)b8.dv=H.l(b8.y.N(0,"invDiffuseTxt"),"$ia2")
t=c3.e
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dA=H.l(b8.y.N(0,"shininess"),"$iW")
if(s)b8.dw=H.l(b8.y.N(0,"specularClr"),"$iG")
if(t.c)b8.dz=H.l(b8.y.N(0,"specularTxt"),"$ia2")}if(c3.f.c)b8.dB=H.l(b8.y.N(0,"bumpTxt"),"$ia2")
if(c3.db){b8.dC=H.l(b8.y.N(0,"envSampler"),"$ia2")
t=c3.r
if(t.a)b8.dD=H.l(b8.y.N(0,"reflectClr"),"$iG")
if(t.c)b8.dE=H.l(b8.y.N(0,"reflectTxt"),"$ia2")
t=c3.x
s=t.a
if(!s)r=t.c
else r=!0
if(r){b8.dF=H.l(b8.y.N(0,"refraction"),"$iW")
if(s)b8.dG=H.l(b8.y.N(0,"refractClr"),"$iG")
if(t.c)b8.dH=H.l(b8.y.N(0,"refractTxt"),"$ia2")}}t=c3.y
if(t.a)b8.dI=H.l(b8.y.N(0,"alpha"),"$iW")
if(t.c)b8.dJ=H.l(b8.y.N(0,"alphaTxt"),"$ia2")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.w
b8.ca=new H.I([r,A.bl])
b8.cb=new H.I([r,[P.q,A.cq]])
for(r=[A.cq],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="barLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.n(P.m(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.n(P.m(c0+o+c1))
H.l(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.n(P.m(c0+o+c1))
H.l(b,"$iW")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.n(P.m(c0+o+c1))
H.l(a,"$iW")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.n(P.m(c0+o+c1))
H.l(a0,"$iW")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cq(j,d,c,a3,a2,a1))}b8.cb.m(0,g,e)
q=b8.ca
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
q.m(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.w
b8.cc=new H.I([r,A.bl])
b8.cd=new H.I([r,[P.q,A.cr]])
for(r=[A.cr],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.a8()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.n(P.m(c0+a4+c1))
H.l(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.n(P.m(c0+a4+c1))
H.l(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.n(P.m(c0+a4+c1))
H.l(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.n(P.m(c0+a4+c1))
H.l(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.n(P.m(c0+a4+c1))
H.l(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.n(P.m(c0+o+c1))
H.l(c,"$ibI")
a8=c}else a8=b9
e.push(new A.cr(a7,a6,a5,j,d,a8))}b8.cd.m(0,g,e)
q=b8.cc
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
q.m(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.w
b8.ce=new H.I([r,A.bl])
b8.cf=new H.I([r,[P.q,A.ct]])
for(r=[A.ct],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.n(P.m(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.n(P.m(c0+o+c1))
H.l(c,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.n(P.m(c0+o+c1))
H.l(b,"$ics")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.n(P.m(c0+o+c1))
H.l(b,"$ia2")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.n(P.m(c0+o+c1))
H.l(b,"$ia2")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.n(P.m(c0+o+c1))
H.l(a,"$icp")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.n(P.m(c0+o+c1))
H.l(b,"$iW")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.n(P.m(c0+o+c1))
H.l(a,"$iW")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.n(P.m(c0+o+c1))
H.l(a0,"$iW")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.ct(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.cf.m(0,g,e)
q=b8.ce
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
q.m(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.w
b8.cg=new H.I([r,A.bl])
b8.ci=new H.I([r,[P.q,A.cu]])
for(r=[A.cu],i=0;i<t.length;t.length===s||(0,H.o)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.e(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
H.l(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.n(P.m(c0+o+c1))
H.l(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.n(P.m(c0+o+c1))
H.l(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.n(P.m(c0+o+c1))
H.l(b,"$iG")
if(typeof g!=="number")return g.a8()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.n(P.m(c0+o+c1))
H.l(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.n(P.m(c0+o+c1))
H.l(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.n(P.m(c0+o+c1))
H.l(b2,"$iW")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.n(P.m(c0+o+c1))
H.l(b3,"$iW")
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
if(a==null)H.n(P.m(c0+a4+c1))
H.l(a,"$icp")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.n(P.m(c0+a4+c1))
H.l(a,"$iW")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.n(P.m(c0+a4+c1))
H.l(a0,"$iW")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.n(P.m(c0+a4+c1))
H.l(a,"$iW")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.n(P.m(c0+a4+c1))
H.l(a0,"$iW")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.n(P.m(c0+a4+c1))
H.l(b2,"$iW")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.n(P.m(c0+a4+c1))
H.l(a,"$ibI")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.n(P.m(c0+o+c1))
H.l(a,"$ibI")
b0=a}else b0=b9
e.push(new A.cu(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.ci.m(0,g,e)
q=b8.cg
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.n(P.m(c0+o+c1))
q.m(0,g,j)}}}},
ad:function(a,b){if(b!=null&&b.d>=6)a.ej(b)}}
A.cW.prototype={
i:function(a){return"barLight"+H.e(this.a)}}
A.d2.prototype={
i:function(a){return"dirLight"+H.e(this.a)}}
A.ds.prototype={
i:function(a){return"pointLight"+H.e(this.a)}}
A.dy.prototype={
i:function(a){return"spotLight"+H.e(this.a)}}
A.ha.prototype={
i:function(a){return this.aC}}
A.cq.prototype={}
A.cr.prototype={}
A.ct.prototype={}
A.cu.prototype={}
A.dw.prototype={
ex:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
cW:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.c(P.m("Error compiling shader '"+H.e(s)+"': "+H.e(u)))}return s},
h5:function(){var u,t,s,r=this,q=H.b([],[A.cV]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.cV(p,t.name,s))}r.x=new A.eX(q)},
h7:function(){var u,t,s,r=this,q=H.b([],[A.dL]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.t(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.hw(t.type,t.size,t.name,s))}r.y=new A.iG(q)},
aN:function(a,b,c){var u=this.a
if(a===1)return new A.bl(u,b,c)
else return A.kW(u,this.r,b,a,c)},
eS:function(a,b,c){var u=this.a
if(a===1)return new A.bI(u,b,c)
else return A.kW(u,this.r,b,a,c)},
eT:function(a,b,c){var u=this.a
if(a===1)return new A.a2(u,b,c)
else return A.kW(u,this.r,b,a,c)},
bn:function(a,b){return new P.e1(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.e(b)+"."))},
hw:function(a,b,c,d){var u=this
switch(a){case 5120:return u.aN(b,c,d)
case 5121:return u.aN(b,c,d)
case 5122:return u.aN(b,c,d)
case 5123:return u.aN(b,c,d)
case 5124:return u.aN(b,c,d)
case 5125:return u.aN(b,c,d)
case 5126:return new A.W(u.a,c,d)
case 35664:return new A.iC(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cp(u.a,c,d)
case 35667:return new A.iD(u.a,c,d)
case 35668:return new A.iE(u.a,c,d)
case 35669:return new A.iF(u.a,c,d)
case 35674:return new A.iH(u.a,c,d)
case 35675:return new A.cs(u.a,c,d)
case 35676:return new A.ag(u.a,c,d)
case 35678:return u.eS(b,c,d)
case 35680:return u.eT(b,c,d)
case 35670:throw H.c(u.bn("BOOL",c))
case 35671:throw H.c(u.bn("BOOL_VEC2",c))
case 35672:throw H.c(u.bn("BOOL_VEC3",c))
case 35673:throw H.c(u.bn("BOOL_VEC4",c))
default:throw H.c(P.m("Unknown uniform variable type "+H.e(a)+" for "+H.e(c)+"."))}}}
A.dL.prototype={}
A.iG.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
N:function(a,b){var u=this.h(0,b)
if(u==null)throw H.c(P.m("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.R()},
R:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.o)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bl.prototype={
i:function(a){return"Uniform1i: "+H.e(this.c)}}
A.iD.prototype={
i:function(a){return"Uniform2i: "+H.e(this.c)}}
A.iE.prototype={
i:function(a){return"Uniform3i: "+H.e(this.c)}}
A.iF.prototype={
i:function(a){return"Uniform4i: "+H.e(this.c)}}
A.iB.prototype={
i:function(a){return"Uniform1iv: "+H.e(this.c)}}
A.W.prototype={
i:function(a){return"Uniform1f: "+H.e(this.c)}}
A.iC.prototype={
i:function(a){return"Uniform2f: "+H.e(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.e(this.c)}}
A.cp.prototype={
i:function(a){return"Uniform4f: "+H.e(this.c)}}
A.iH.prototype={
i:function(a){return"Uniform1Mat2 "+H.e(this.c)}}
A.cs.prototype={
ai:function(a){var u=new Float32Array(H.bP(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.e(this.c)}}
A.ag.prototype={
ai:function(a){var u=new Float32Array(H.bP(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.e(this.c)}}
A.bI.prototype={
i:function(a){return"UniformSampler2D: "+H.e(this.c)}}
A.a2.prototype={
ej:function(a){var u=a.d,t=this.a,s=this.d
if(u<6)t.uniform1i(s,0)
else t.uniform1i(s,a.a)},
i:function(a){return"UniformSamplerCube: "+H.e(this.c)}}
F.jW.prototype={
$3:function(a,b,c){var u,t=this,s=t.a,r=s.a.cm(s.b,b).cm(s.d.cm(s.c,b),c)
a.sZ(0,new V.O(r.a,r.b,r.c))
a.sau(r.p(0,Math.sqrt(r.C(r))))
s=1-b
u=1-c
a.sdl(new V.bj(t.b+b*c,t.c+s*c,t.d+b*u,t.e+s*u))
s=t.f
if(s!=null)s.$3(a,b,c)}}
F.k5.prototype={
$2:function(a,b){var u=this.a
return u+b*(this.b-u)}}
F.k7.prototype={
$3:function(a,b,c){var u,t=6.283185307179586*b,s=Math.sin(t),r=Math.cos(t),q=-1+c*2,p=this.a.$2(b,c)
if(typeof p!=="number")return H.t(p)
s=-s*p
u=r*p
a.sZ(0,new V.O(s,u,q))
u=new V.y(s,u,q)
a.sau(u.p(0,Math.sqrt(u.C(u))))
a.sdl(new V.bj(1-c,2+c,-1,-1))}}
F.k8.prototype={
$1:function(a){return this.a.$2(a,1)}}
F.k9.prototype={
$1:function(a){return this.a.$2(1-a,0)}}
F.ki.prototype={
$3:function(a,b,c){var u=c*3.141592653589793,t=Math.sin(u),s=b*6.283185307179586,r=new V.y(Math.cos(s)*t,Math.cos(u),Math.sin(s)*t)
s=r.p(0,Math.sqrt(r.C(r)))
a.sZ(0,new V.O(s.a,s.b,s.c))}}
F.kv.prototype={
$2:function(a,b){return 0}}
F.kw.prototype={
$3:function(a,b,c){var u,t,s=this.a.a.$2(b,c)
if(typeof s!=="number")return H.t(s)
u=a.f
t=new V.y(u.a,u.b,u.c)
s=t.p(0,Math.sqrt(t.C(t))).q(0,this.b+s)
a.sZ(0,new V.O(s.a,s.b,s.c))}}
F.kz.prototype={
$1:function(a){return new V.O(Math.cos(a),Math.sin(a),0)}}
F.kh.prototype={
$1:function(a){var u=this.a*a,t=2+Math.cos(u),s=this.b*a
return new V.O(t*Math.cos(s)/2,t*Math.sin(s)/2,Math.sin(u)/2)}}
F.k6.prototype={
$3:function(a,b,c){var u,t,s,r,q,p=this,o=b*6.283185307179586,n=p.a,m=p.b,l=J.li(n.$1(o),m)
m=J.li(n.$1(o+3.141592653589793/p.c),m).L(0,l)
m=new V.y(m.a,m.b,m.c)
u=m.p(0,Math.sqrt(m.C(m)))
n=$.lT
if(n==null){n=new V.y(1,0,0)
$.lT=n
t=n}else t=n
n=u.aB(!J.A(u,t)?V.lV():t)
s=n.p(0,Math.sqrt(n.C(n)))
n=s.aB(u)
t=n.p(0,Math.sqrt(n.C(n)))
r=c*6.283185307179586
n=Math.cos(r)
m=p.d
q=Math.sin(r)
n=t.q(0,n*m)
m=s.q(0,q*m)
a.sZ(0,l.w(0,new V.O(n.a-m.a,n.b-m.b,n.c-m.c)))}}
F.aR.prototype={
b6:function(){var u=this
if(!u.gb7()){C.b.D(u.a.a.d.b,u)
u.a.a.W()}u.bX()
u.bY()
u.fX()},
bl:function(a){this.a=a
a.d.b.push(this)},
bm:function(a){this.b=a
a.d.c.push(this)},
d7:function(a){this.c=a
a.d.d.push(this)},
bX:function(){var u=this.a
if(u!=null){C.b.D(u.d.b,this)
this.a=null}},
bY:function(){var u=this.b
if(u!=null){C.b.D(u.d.c,this)
this.b=null}},
fX:function(){var u=this.c
if(u!=null){C.b.D(u.d.d,this)
this.c=null}},
gb7:function(){return this.a==null||this.b==null||this.c==null},
eL:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cv()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dT())return
return s.p(0,Math.sqrt(s.C(s)))},
eN:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.L(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.p(0,Math.sqrt(r.C(r)))
r=t.L(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.aB(r.p(0,Math.sqrt(r.C(r))))
return r.p(0,Math.sqrt(r.C(r)))},
c4:function(){var u,t=this
if(t.d!=null)return!0
u=t.eL()
if(u==null){u=t.eN()
if(u==null)return!1}t.d=u
t.a.a.W()
return!0},
eK:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cv()
if(q!=null)s=s.w(0,q)
if(u!=null)s=s.w(0,u)
if(t!=null)s=s.w(0,t)
if(s.dT())return
return s.p(0,Math.sqrt(s.C(s)))},
eM:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
r=l-s.b
if(Math.abs(r-0)<$.C().a){l=d.L(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.C(l)))
if(s.a-t.a<0)q=q.V(0)}else{p=(l-u.b)/r
l=d.L(0,g).q(0,p).w(0,g).L(0,j)
l=new V.y(l.a,l.b,l.c)
q=l.p(0,Math.sqrt(l.C(l)))
s=s.a
t=t.a
if((s-t)*p+t-u.a<0)q=q.V(0)}l=n.d
if(l!=null){o=l.p(0,Math.sqrt(l.C(l)))
l=o.aB(q)
l=l.p(0,Math.sqrt(l.C(l))).aB(o)
q=l.p(0,Math.sqrt(l.C(l)))}return q},
c2:function(){var u,t=this
if(t.e!=null)return!0
u=t.eK()
if(u==null){u=t.eM()
if(u==null)return!1}t.e=u
t.a.a.W()
return!0},
aM:function(a,b){var u=b.a
if(u==null)throw H.c(P.m("May not replace a face's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.m("May not replace a face's vertex with a vertex attached to a different shape."))},
ghq:function(a){var u=this
if(J.A(u.a,u.b))return!0
if(J.A(u.b,u.c))return!0
if(J.A(u.c,u.a))return!0
return!1},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this
if(s.gb7())return a+"disposed"
u=a+C.a.ah(J.a7(s.a.e),0)+", "+C.a.ah(J.a7(s.b.e),0)+", "+C.a.ah(J.a7(s.c.e),0)+" {"
t=s.d
u=t!=null?u+(t.i(0)+", "):u+"-, "
t=s.e
return t!=null?u+(t.i(0)+"}"):u+"-}"},
R:function(){return this.J("")}}
F.fx.prototype={}
F.i5.prototype={
aW:function(a,b,c){var u,t=b.a
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
F.c8.prototype={
b6:function(){var u=this
if(!u.gb7()){C.b.D(u.a.a.c.b,u)
u.a.a.W()}u.bX()
u.bY()},
bl:function(a){this.a=a
a.c.b.push(this)},
bm:function(a){this.b=a
a.c.c.push(this)},
bX:function(){var u=this.a
if(u!=null){C.b.D(u.c.b,this)
this.a=null}},
bY:function(){var u=this.b
if(u!=null){C.b.D(u.c.c,this)
this.b=null}},
gb7:function(){return this.a==null||this.b==null},
aM:function(a,b){var u=b.a
if(u==null)throw H.c(P.m("May not replace a line's vertex with a vertex which is not attached to a shape."))
if(a.a!==u)throw H.c(P.m("May not replace a line's vertex with a vertex attached to a different shape."))},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){if(this.gb7())return a+"disposed"
return a+C.a.ah(J.a7(this.a.e),0)+", "+C.a.ah(J.a7(this.b.e),0)},
R:function(){return this.J("")}}
F.fV.prototype={}
F.iA.prototype={
aW:function(a,b,c){var u,t=b.a
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
F.ci.prototype={
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u=this.a
if(u==null)return a+"disposed"
return a+C.a.ah(J.a7(u.e),0)},
R:function(){return this.J("")}}
F.hX.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.L():u},
aX:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.e
if(g!=null)++g.d
a.a.A()
u=h.a.c.length
for(g=a.a.c,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){r=g[s]
h.a.n(0,r.ht())}h.a.A()
for(g=a.b.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){q=g[s]
p=h.a
o=q.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
n=p[o]
h.b.a.a.n(0,n)
o=new F.ci()
if(n.a==null)H.n(P.m("May not create a point with a vertex which is not attached to a shape."))
o.a=n
n.b.b.push(o)
o.a.a.b.b.push(o)
p=o.a.a.e
if(p!=null)p.G(null)}for(g=a.c.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){m=g[s]
p=h.a
o=m.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=m.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.c.a
p.a.n(0,l)
p.a.n(0,k)
F.nd(l,k)}for(g=a.d.b,t=g.length,s=0;s<g.length;g.length===t||(0,H.o)(g),++s){j=g[s]
p=h.a
o=j.a
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
l=p[o]
o=h.a
p=j.b
p.a.a.A()
p=p.e
if(typeof p!=="number")return p.w()
p+=u
o=o.c
if(p>=o.length)return H.d(o,p)
k=o[p]
p=h.a
o=j.c
o.a.a.A()
o=o.e
if(typeof o!=="number")return o.w()
o+=u
p=p.c
if(o>=p.length)return H.d(p,o)
i=p[o]
o=h.d.a
o.a.n(0,l)
o.a.n(0,k)
o.a.n(0,i)
F.c2(l,k,i)}g=h.e
if(g!=null)g.at(0)},
aj:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aj()||!1
if(!t.a.aj())u=!1
s=t.e
if(s!=null)s.at(0)
return u},
hI:function(a,b){var u,t,s,r=this.a.c.length
for(u=0;u<r;++u){t=this.a.c
if(u>=t.length)return H.d(t,u)
s=t[u]
if(b.aW(0,a,s))return s}return},
fZ:function(a,b){var u,t,s,r,q,p
this.a.n(0,a)
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.o)(b),++t){s=b[t]
for(;r=s.d,r.b.length+r.c.length+r.d.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null||r.c==null)H.n(P.m("May not replace a face's vertex when the point has been disposed."))
if(J.A(q,s)){r.aM(s,a)
q=r.a
if(q!=null){C.b.D(q.d.b,r)
r.a=null}r.a=a
a.d.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aM(s,a)
q=r.b
if(q!=null){C.b.D(q.d.c,r)
r.b=null}r.b=a
a.d.c.push(r);++p}if(J.A(r.c,s)){r.aM(s,a)
q=r.c
if(q!=null){C.b.D(q.d.d,r)
r.c=null}r.c=a
a.d.d.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.G(null)}}for(;r=s.c,r.b.length+r.c.length>0;){r=r.h(0,0)
q=r.a
if(q==null||r.b==null)H.n(P.m("May not replace a line's vertex when the point has been disposed."))
if(J.A(q,s)){r.aM(s,a)
q=r.a
if(q!=null){C.b.D(q.c.b,r)
r.a=null}r.a=a
a.c.b.push(r)
p=1}else p=0
if(J.A(r.b,s)){r.aM(s,a)
q=r.b
if(q!=null){C.b.D(q.c.c,r)
r.b=null}r.b=a
a.c.c.push(r);++p}if(p>0){r=r.a.a.e
if(r!=null)r.G(null)}}for(;r=s.b.b,r.length>0;){r=r[0]
q=r.a
if(q==null)H.n(P.m("May not replace a point's vertex when the point has been disposed."))
if(J.A(q,s)){if(a.a==null)H.n(P.m("May not replace a point's vertex with a vertex which is not attached to a shape."))
q=r.a
if(q!=null){C.b.D(q.b.b,r)
r.a=null}r.a=a
a.b.b.push(r)
p=1}else p=0
if(p>0){r=r.a.a.e
if(r!=null)r.G(null)}}this.a.D(0,s)}},
dV:function(a,b){var u,t,s,r,q,p,o=this,n=o.e
if(n!=null)++n.d
n=o.a.c
u=H.b(n.slice(0),[H.aM(n,0)])
for(n=[F.bm];u.length!==0;){t=C.b.ghK(u)
C.b.cv(u,0)
if(t!=null){s=H.b([],n)
s.push(t)
for(r=u.length-1;r>=0;--r){if(r>=u.length)return H.d(u,r)
q=u[r]
if(q!=null&&a.aW(0,t,q)){s.push(q)
C.b.cv(u,r)}}if(s.length>1){p=b.aX(s)
if(p!=null){o.fZ(p,s)
u.push(p)}}}}o.a.A()
o.c.by()
o.d.by()
o.b.ie()
o.c.cw(new F.iA())
o.d.cw(new F.i5())
n=o.e
if(n!=null)n.at(0)},
bp:function(){this.dV(new F.cw(),new F.hA())},
ho:function(a3,a4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=34962,a2=a0.a.c.length
a4.toString
u=$.b6()
t=a4.a
s=(t&u.a)!==0?1:0
if((t&$.b5().a)!==0)++s
if((t&$.b4().a)!==0)++s
if((t&$.bp().a)!==0)++s
if((t&$.b7().a)!==0)++s
if((t&$.cQ().a)!==0)++s
if((t&$.cR().a)!==0)++s
if((t&$.bW().a)!==0)++s
if((t&$.b3().a)!==0)++s
r=a4.gcI(a4)
q=r*4
u=new Array(a2*r)
u.fixed$length=Array
p=H.b(u,[P.K])
u=new Array(s)
u.fixed$length=Array
o=H.b(u,[Z.cX])
for(u=p.length,t=o.length,n=0,m=0;m<s;++m){l=a4.hl(m)
k=l.gcI(l)
if(m>=t)return H.d(o,m)
o[m]=new Z.cX(l,k,n*4,q)
for(j=0;j<a2;++j){i=a0.a.c
if(j>=i.length)return H.d(i,j)
h=i[j].hV(l)
g=n+j*r
for(i=h.length,f=0;f<i;++f){e=h[f]
if(g<0||g>=u)return H.d(p,g)
p[g]=e;++g}}n+=k}u=a3.a
d=u.createBuffer()
u.bindBuffer(a1,d)
u.bufferData(a1,new Float32Array(H.bP(p)),35044)
u.bindBuffer(a1,null)
c=new Z.cY(new Z.dS(a1,d),o,a4)
c.b=H.b([],[Z.by])
if(a0.b.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.b.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)}a=Z.l_(u,34963,b)
c.b.push(new Z.by(0,b.length,a))}if(a0.c.b.length!==0){b=H.b([],[P.w])
for(m=0;t=a0.c.b,m<t.length;++m){t=t[m].a
t.a.a.A()
b.push(t.e)
t=a0.c.b
if(m>=t.length)return H.d(t,m)
t=t[m].b
t.a.a.A()
b.push(t.e)}a=Z.l_(u,34963,b)
c.b.push(new Z.by(1,b.length,a))}if(a0.d.b.length!==0){b=H.b([],[P.w])
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
b.push(t.e)}a=Z.l_(u,34963,b)
c.b.push(new Z.by(4,b.length,a))}return c},
i:function(a){var u=this,t="   ",s=H.b([],[P.h])
if(u.a.c.length!==0){s.push("Vertices:")
s.push(u.a.J(t))}if(u.b.b.length!==0){s.push("Points:")
s.push(u.b.J(t))}if(u.c.b.length!==0){s.push("Lines:")
s.push(u.c.J(t))}if(u.d.b.length!==0){s.push("Faces:")
s.push(u.d.J(t))}return C.b.j(s,"\n")},
W:function(){var u=this.e
if(u!=null)u.G(null)}}
F.hZ.prototype={
bo:function(a,b,c,d){var u,t=this.a
t.a.n(0,b)
t.a.n(0,c)
t.a.n(0,d)
u=new F.aR()
t=b.a
if(t==null)H.n(P.m("May not create a face with a first vertex which is not attached to a shape."))
if(t!=c.a||t!=d.a)H.n(P.m("May not create a face with vertices attached to different shapes."))
u.bl(b)
u.bm(c)
u.d7(d)
u.a.a.d.b.push(u)
u.a.a.W()
return u},
hh:function(a){var u,t,s,r,q,p=H.b([],[F.aR]),o=a.length
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
p.push(F.c2(u,r,q))}}return p},
hi:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h=H.b([],[F.aR])
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
h.push(F.c2(m,l,j))
u.a.n(0,m)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c2(m,j,i))}else{n.n(0,l)
u.a.n(0,j)
u.a.n(0,i)
h.push(F.c2(l,j,i))
u.a.n(0,l)
u.a.n(0,i)
u.a.n(0,m)
h.push(F.c2(l,i,m))}p=!p}r=!r}return h},
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.d,q=s.b.length+s.c.length+s.d.length-1;q>=0;--q){p=r.d.h(0,q)
for(o=q-1;o>=0;--o){n=r.d.h(0,o)
if(a.aW(0,p,n)){p.b6()
break}}}}},
by:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=s.ghq(s)
if(t)s.b6()}},
aj:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].c4())s=!1
return s},
c3:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.o)(u),++r)if(!u[r].c2())s=!1
return s},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(a))
return C.b.j(r,"\n")},
R:function(){return this.J("")}}
F.i_.prototype={
gl:function(a){return this.b.length},
cw:function(a){var u,t,s,r,q,p,o,n
for(u=this.a,t=u.a.c.length-1;t>=0;--t){s=u.a.c
if(t>=s.length)return H.d(s,t)
r=s[t]
for(s=r.c,q=s.b.length+s.c.length-1;q>=0;--q){p=r.c.h(0,q)
for(o=q-1;o>=0;--o){n=r.c.h(0,o)
if(a.aW(0,p,n)){p.b6()
break}}}}},
by:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
s=t[u]
t=J.A(s.a,s.b)
if(t)s.b6()}},
i:function(a){return this.R()},
J:function(a){var u,t,s=H.b([],[P.h]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].J(a+(""+u+". ")))}return C.b.j(s,"\n")},
R:function(){return this.J("")}}
F.i0.prototype={
gl:function(a){return this.b.length},
ie:function(){var u,t,s
for(u=this.b.length-1;u>=0;--u){t=this.b
if(u>=t.length)return H.d(t,u)
t=t[u]
s=t.a
if(s.b.b.length>1){if(s!=null){C.b.D(s.a.b.b,t)
s=t.a.a.e
if(s!=null)s.G(null)}s=t.a
if(s!=null){C.b.D(s.b.b,t)
t.a=null}}}},
i:function(a){return this.R()},
J:function(a){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(a))
return C.b.j(r,"\n")},
R:function(){return this.J("")}}
F.bm.prototype={
c8:function(a){var u=this,t=u.f,s=u.r,r=u.x,q=u.y,p=u.z,o=u.Q,n=u.ch
return F.bK(u.cx,r,o,t,s,q,p,a,n)},
ht:function(){return this.c8(null)},
sZ:function(a,b){var u
if(!J.A(this.f,b)){this.f=b
u=this.a
if(u!=null)u.W()}},
scq:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.A(this.r,a)){this.r=a
u=this.a
if(u!=null)u.W()}},
sdn:function(a){var u
a=a==null?null:a.p(0,Math.sqrt(a.C(a)))
if(!J.A(this.x,a)){this.x=a
u=this.a
if(u!=null)u.W()}},
scA:function(a){var u
if(!J.A(this.y,a)){this.y=a
u=this.a
if(u!=null)u.W()}},
sau:function(a){var u
if(!J.A(this.z,a)){this.z=a
u=this.a
if(u!=null)u.W()}},
sak:function(a,b){var u
if(!J.A(this.Q,b)){this.Q=b
u=this.a
if(u!=null)u.W()}},
see:function(a,b){var u
if(this.ch!==b){this.ch=b
u=this.a
if(u!=null)u.W()}},
sdl:function(a){var u
if(!J.A(this.cx,a)){this.cx=a
u=this.a
if(u!=null)u.W()}},
hV:function(a){var u,t,s=this
if(a.t(0,$.b6())){u=s.f
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b5())){u=s.r
t=[P.K]
if(u==null)return H.b([0,1,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.b4())){u=s.x
t=[P.K]
if(u==null)return H.b([0,0,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.bp())){u=s.y
t=[P.K]
if(u==null)return H.b([0,0],t)
else return H.b([u.a,u.b],t)}else if(a.t(0,$.b7())){u=s.z
t=[P.K]
if(u==null)return H.b([0,0,0],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cQ())){u=s.Q
t=[P.K]
if(u==null)return H.b([1,1,1],t)
else return H.b([u.a,u.b,u.c],t)}else if(a.t(0,$.cR())){u=s.Q
if(u==null)return H.b([1,1,1,1],[P.K])
else return u.cB(0)}else if(a.t(0,$.bW()))return H.b([s.ch],[P.K])
else if(a.t(0,$.b3())){u=s.cx
t=[P.K]
if(u==null)return H.b([-1,-1,-1,-1],t)
else return H.b([u.a,u.b,u.c,u.d],t)}else return H.b([],[P.K])},
c4:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cv()
t.d.I(0,new F.j8(s))
s=s.a
t.r=s.p(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.at(0)}return!0},
c2:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cv()
t.d.I(0,new F.j7(s))
s=s.a
t.x=s.p(0,Math.sqrt(s.C(s)))
s=t.a
if(s!=null){s.W()
s=t.a.e
if(s!=null)s.at(0)}return!0},
t:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.R()},
J:function(a){var u,t,s=this,r="-",q=H.b([],[P.h])
q.push(C.a.ah(J.a7(s.e),0))
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
R:function(){return this.J("")}}
F.j8.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.j7.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.w(0,t)}}}
F.iZ.prototype={
A:function(){var u,t,s,r
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
hj:function(a,b,c,d,e,f){var u=F.bK(a,null,b,c,d,e,f,null,0)
this.n(0,u)
return u},
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
aj:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].c4()
return!0},
c3:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)u[s].c2()
return!0},
hp:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
o=q.b
n=q.c
n=q.p(0,Math.sqrt(p*p+o*o+n*n))
if(!J.A(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.G(null)}}}}return!0},
i:function(a){return this.R()},
J:function(a){var u,t,s,r
this.A()
u=H.b([],[P.h])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r)u.push(t[r].J(a))
return C.b.j(u,"\n")},
R:function(){return this.J("")}}
F.j_.prototype={
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
I:function(a,b){var u=this
C.b.I(u.b,b)
C.b.I(u.c,new F.j0(u,b))
C.b.I(u.d,new F.j1(u,b))},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(""))
return C.b.j(r,"\n")}}
F.j0.prototype={
$1:function(a){if(!J.A(a.a,this.a))this.b.$1(a)}}
F.j1.prototype={
$1:function(a){var u=this.a
if(!J.A(a.a,u)&&!J.A(a.b,u))this.b.$1(a)}}
F.j3.prototype={
gl:function(a){return this.b.length+this.c.length},
h:function(a,b){var u,t=this.b,s=t.length
if(b>=s){t=this.c
u=b-s
if(u<0||u>=t.length)return H.d(t,u)
return t[u]}else{if(b<0)return H.d(t,b)
return t[b]}},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(""))
return C.b.j(r,"\n")}}
F.j4.prototype={}
F.cw.prototype={
aW:function(a,b,c){return J.A(b.f,c.f)}}
F.j5.prototype={}
F.j2.prototype={
aX:function(a5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4=null
for(u=a5.length,t=a4,s=t,r=s,q=r,p=q,o=p,n=0,m=0,l=0,k=0,j=0,i=0,h=0;h<u;++h){g=a5[h]
f=g.f
if(f!=null){o=o==null?f:new V.O(o.a+f.a,o.b+f.b,o.c+f.c);++n}e=g.r
if(e!=null)p=p==null?e:new V.y(p.a+e.a,p.b+e.b,p.c+e.c)
d=g.x
if(d!=null)q=q==null?d:new V.y(q.a+d.a,q.b+d.b,q.c+d.c)
c=g.y
if(c!=null){s=s==null?c:new V.X(s.a+c.a,s.b+c.b);++l}b=g.z
if(b!=null){t=t==null?b:new V.y(t.a+b.a,t.b+b.b,t.c+b.c);++k}a=g.Q
if(a!=null){a0=a.a
a1=a.b
a2=a.c
a=a.d
if(r==null){a=[a0,a1,a2,a]
r=new V.b0(a[0],a[1],a[2],a[3])}else{a=[a0,a1,a2,a]
a0=a[0]
a1=a[1]
a2=a[2]
a=a[3]
r=new V.b0(r.a+a0,r.b+a1,r.c+a2,r.d+a)}++m}a=g.ch
if(typeof a!=="number")return H.t(a)
i+=a;++j}a3=F.bK(a4,a4,a4,a4,a4,a4,a4,a4,0)
if(n<=0||o==null)a3.sZ(0,a4)
else a3.sZ(0,o.p(0,n))
if(p==null)a3.scq(a4)
else a3.scq(p.p(0,Math.sqrt(p.C(p))))
if(q==null)a3.sdn(a4)
else a3.sdn(q.p(0,Math.sqrt(q.C(q))))
if(l<=0||s==null)a3.scA(a4)
else a3.scA(s.p(0,l))
if(k<=0||t==null)a3.sau(a4)
else a3.sau(t.p(0,k))
if(m<=0||r==null)a3.sak(0,a4)
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
a3.sak(0,new V.ak(a,a0,a1,u))}if(j<=0)a3.see(0,0)
else a3.see(0,i/j)
return a3}}
F.hA.prototype={
aX:function(a){var u,t,s,r=V.cv()
for(u=a.length,t=0;t<u;++t){s=a[t].r
if(s!=null)r=new V.y(r.a+s.a,r.b+s.b,r.c+s.c)}r=r.p(0,Math.sqrt(r.C(r)))
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.o)(a),++t)a[t].scq(r)
return}}
F.j6.prototype={
gl:function(a){return this.b.length},
i:function(a){return this.R()},
R:function(){var u,t,s,r=H.b([],[P.h])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.o)(u),++s)r.push(u[s].J(""))
return C.b.j(r,"\n")}}
O.dh.prototype={
gB:function(){var u=this.fr
return u==null?this.fr=D.L():u},
a_:function(a){var u=this.fr
if(u!=null)u.G(a)},
bG:function(){return this.a_(null)},
d3:function(a){this.a=null
this.a_(a)},
h1:function(){return this.d3(null)},
f8:function(a,b){var u=new D.bz()
u.b=!0
this.a_(u)},
fa:function(a,b){var u=new D.bA()
u.b=!0
this.a_(u)},
cU:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.w
f=[f,f]
u=new H.I(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gar()
o=u.h(0,q.gar())
u.m(0,p,o==null?1:o)}n=H.b([],[A.cW])
u.I(0,new O.he(g,n))
C.b.b1(n,new O.hf())
m=new H.I(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){p=m.h(0,0)
m.m(0,0,p==null?1:p)}l=H.b([],[A.d2])
m.I(0,new O.hg(g,l))
C.b.b1(l,new O.hh())
k=new H.I(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.o)(t),++r){q=t[r]
p=q.gar()
o=k.h(0,q.gar())
k.m(0,p,o==null?1:o)}j=H.b([],[A.ds])
k.I(0,new O.hi(g,j))
C.b.b1(j,new O.hj())
i=new H.I(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.o)(f),++r){q=f[r]
s=q.gar()
p=i.h(0,q.gar())
i.m(0,s,p==null?1:p)}h=H.b([],[A.dy])
i.I(0,new O.hk(g,h))
C.b.b1(h,new O.hl())
f=C.c.a4(g.e.a.length+3,4)
g.dy.e
return A.nl(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
ac:function(a,b){if(b!=null)if(!C.b.F(a,b)){b.a=a.length
a.push(b)}},
av:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.ad(u,u.length);u.v();){t=u.d
t.toString
s=$.iY
if(s==null)s=$.iY=new V.y(0,0,1)
t.a=s
r=$.iX
t.d=r==null?$.iX=new V.y(0,1,0):r
r=$.iW
t.e=r==null?$.iW=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.bA(s)
r=s.a
p=s.b
o=s.c
t.a=s.p(0,Math.sqrt(r*r+p*p+o*o))
o=q.bA(t.d)
p=o.a
r=o.b
s=o.c
t.d=o.p(0,Math.sqrt(p*p+r*r+s*s))
s=q.bA(t.e)
r=s.a
p=s.b
o=s.c
t.e=s.p(0,Math.sqrt(r*r+p*p+o*o))}}}},
ih:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.cU()
u=b4.fr.h(0,b3.aC)
if(u==null){u=A.nk(b3,b4.a)
t=u.b
if(t.length===0)H.n(P.m("May not cache a shader with no name."))
if(b4.fr.c6(0,t))H.n(P.m('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.m(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bs
b3=b5.e
if(!(b3 instanceof Z.cY))b3=b5.e=null
if(b3==null||!b3.d.t(0,r)){b3=s.k4
if(b3)b5.d.aj()
q=s.r1
if(q){p=b5.d
o=p.e
if(o!=null)++o.d
p.d.c3()
p.a.c3()
p=p.e
if(p!=null)p.at(0)}p=s.rx
if(p){o=b5.d
n=o.e
if(n!=null)++n.d
o.a.hp()
o=o.e
if(o!=null)o.at(0)}m=b5.d.ho(new Z.ja(b4.a),r)
m.aV($.b6()).e=b2.a.Q.c
if(b3)m.aV($.b5()).e=b2.a.cx.c
if(q)m.aV($.b4()).e=b2.a.ch.c
if(s.r2)m.aV($.bp()).e=b2.a.cy.c
if(p)m.aV($.b7()).e=b2.a.db.c
if(s.ry)m.aV($.b3()).e=b2.a.dx.c
b5.e=m}l=H.b([],[T.dE])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.hF()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga1(p)
b3=b3.dy
b3.toString
b3.ai(p.ab(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga1(p)
o=b4.dx
o=b4.cx=p.q(0,o.ga1(o))
p=o}b3=b3.fr
b3.toString
b3.ai(p.ab(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gib()
o=b4.dx
o=b4.ch=p.q(0,o.ga1(o))
p=o}b3=b3.fy
b3.toString
b3.ai(p.ab(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga1(p)
b3=b3.fx
b3.toString
b3.ai(p.ab(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.ai(C.j.ab(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.ai(C.j.ab(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.ai(C.j.ab(p,!0))}if(s.br>0){k=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,k)
for(j=0;j<k;++j){b3=b2.a
p=b2.e.a
if(j>=p.length)return H.d(p,j)
p=p[j]
b3=b3.r1
if(j>=b3.length)return H.d(b3,j)
b3=b3[j]
i=new Float32Array(H.bP(p.ab(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,i)}}b3=s.a
if(b3.a){p=b2.a
o=b2.f.f
p=p.r2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.f.e)
b3=b2.a
p=b2.f.e
b3.ad(b3.ry,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
o=b2.r.f
p=p.x1
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.r.e)
b3=b2.a
p=b2.r.e
b3.ad(b3.y1,p)}b3=s.c
if(b3.a){p=b2.a
o=b2.x.f
p=p.y2
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.x.e)
b3=b2.a
p=b2.x.e
b3.ad(b3.aC,p)}b3=s.d
if(b3.a){p=b2.a
o=b2.y.f
p=p.bs
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.y.e)
b3=b2.a
p=b2.y.e
b3.ad(b3.dv,p)}b3=s.e
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.z.ch
o=o.dA
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.z.f
p=p.dw
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.z.e)
b3=b2.a
p=b2.z.e
b3.ad(b3.dz,p)}b3=s.z
if(b3.length>0){p=P.w
h=new H.I([p,p])
for(p=b2.dx.e,o=p.length,g=0;g<p.length;p.length===o||(0,H.o)(p),++g){f=p[g]
e=f.gar()
d=h.h(0,e)
if(d==null)d=0
h.m(0,e,d+1)
c=J.bX(b2.a.cb.h(0,e),d)
n=f.giy()
b=$.aD
n=n.be(b==null?$.aD=new V.O(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giD()
b=$.aD
n=n.be(b==null?$.aD=new V.O(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gak(f)
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
if(f.gdu()){n=f.gdi()
b=c.e
b.a.uniform1f(b.d,n)
n=f.gdj()
b=c.f
b.a.uniform1f(b.d,n)
n=f.gdk()
b=c.r
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.o)(b3),++g){o=b3[g].a
k=h.h(0,o)
if(k==null)k=0
o=b2.a.ca.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga1(p)
p=P.w
a0=new H.I([p,p])
for(p=b2.dx.f,o=p.length,g=0;g<p.length;p.length===o||(0,H.o)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.m(0,0,d+1)
c=J.bX(b2.a.cd.h(0,0),d)
n=a.bA(f.a)
b=n.a
a1=n.b
a2=n.c
a2=n.p(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
n=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,n,a2)
a2=f.c
n=c.f
n.a.uniform3f(n.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.o)(b3),++g){o=b3[g].a
k=a0.h(0,o)
if(k==null)k=0
o=b2.a.cc.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga1(p)
p=P.w
a3=new H.I([p,p])
for(p=b2.dx.r,o=p.length,g=0;g<p.length;p.length===o||(0,H.o)(p),++g){f=p[g]
e=f.gar()
d=a3.h(0,e)
if(d==null)d=0
a3.m(0,e,d+1)
c=J.bX(b2.a.cf.h(0,e),d)
a4=a.q(0,f.ga1(f))
n=f.ga1(f)
b=$.aD
n=n.be(b==null?$.aD=new V.O(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=$.aD
n=a4.be(n==null?$.aD=new V.O(0,0,0):n)
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gak(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaH()
n=a4.dS(0)
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
i=new Float32Array(H.bP(new V.di(b,a1,a2,a5,a6,a7,a8,a9,n).ab(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,i)
f.gaH()
n=f.gaH()
if(!C.b.F(l,n)){n.a=l.length
l.push(n)}n=f.gaH()
b=n.gb9(n)
if(b){b=c.f
b.toString
a1=n.d
if(a1<6)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}f.gb0()
n=f.gek()
b=c.x
b.toString
a1=n.ghB(n)
a2=n.ghC(n)
a5=n.ghD()
n=n.ghA()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gb0()
if(!C.b.F(l,n)){n.a=l.length
l.push(n)}n=f.gb0()
b=n.gb9(n)
if(b){b=c.r
b.toString
a1=n.d
if(a1<6)b.a.uniform1i(b.d,0)
else{n=n.a
b.a.uniform1i(b.d,n)}}if(f.gdu()){n=f.gdi()
b=c.y
b.a.uniform1f(b.d,n)
n=f.gdj()
b=c.z
b.a.uniform1f(b.d,n)
n=f.gdk()
b=c.Q
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.o)(b3),++g){o=b3[g].a
k=a3.h(0,o)
if(k==null)k=0
o=b2.a.ce.h(0,o)
o.a.uniform1i(o.d,k)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga1(p)
p=P.w
b1=new H.I([p,p])
for(p=b2.dx.x,o=p.length,g=0;g<p.length;p.length===o||(0,H.o)(p),++g){f=p[g]
e=f.gar()
d=b1.h(0,e)
if(d==null)d=0
b1.m(0,e,d+1)
c=J.bX(b2.a.ci.h(0,e),d)
n=f.gia(f)
b=c.b
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giB(f).iO()
b=c.c
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=a.be(f.gia(f))
b=c.d
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gak(f)
b=c.e
b.a.uniform3f(b.d,n.a,n.b,n.c)
f.gaH()
n=f.gcD()
b=c.f
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.gcz(f)
b=c.r
b.a.uniform3f(b.d,n.a,n.b,n.c)
n=f.giP()
b=c.x
b.a.uniform1f(b.d,n)
n=f.giQ()
b=c.y
b.a.uniform1f(b.d,n)
f.gaH()
n=f.gaH()
if(!C.b.F(l,n)){n.a=l.length
l.push(n)}n=f.gaH()
b=n.gb9(n)
if(b){b=c.dx
b.toString
a1=n.gb9(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghQ(n)
b.a.uniform1i(b.d,n)}}f.gb0()
n=f.gek()
b=c.z
b.toString
a1=n.ghB(n)
a2=n.ghC(n)
a5=n.ghD()
n=n.ghA()
b.a.uniform4f(b.d,a1,a2,a5,n)
n=f.gb0()
if(!C.b.F(l,n)){n.a=l.length
l.push(n)}n=f.gb0()
b=n.gb9(n)
if(b){b=c.dy
b.toString
a1=n.gb9(n)
if(!a1)b.a.uniform1i(b.d,0)
else{n=n.ghQ(n)
b.a.uniform1i(b.d,n)}}if(f.giC()){n=f.giA()
b=c.Q
b.a.uniform1f(b.d,n)
n=f.giz()
b=c.ch
b.a.uniform1f(b.d,n)}if(f.gdu()){n=f.gdi()
b=c.cx
b.a.uniform1f(b.d,n)
n=f.gdj()
b=c.cy
b.a.uniform1f(b.d,n)
n=f.gdk()
b=c.db
b.a.uniform1f(b.d,n)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.o)(b3),++g){o=b3[g].a
k=b1.h(0,o)
if(k==null)k=0
o=b2.a.cg.h(0,o)
o.a.uniform1i(o.d,k)}}}if(s.f.c){b2.ac(l,b2.Q.e)
b3=b2.a
p=b2.Q.e
b3.ad(b3.dB,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga1(p).dS(0)}b3=b3.id
b3.toString
b3.ai(p.ab(0,!0))}if(s.db){b2.ac(l,b2.ch)
b3=b2.a
p=b2.ch
b3.ad(b3.dC,p)
b3=s.r
if(b3.a){p=b2.a
o=b2.cx.f
p=p.dD
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.cx.e)
b3=b2.a
p=b2.cx.e
b3.ad(b3.dE,p)}b3=s.x
p=b3.a
if(!p)o=b3.c
else o=!0
if(o){o=b2.a
n=b2.cy.ch
o=o.dF
o.a.uniform1f(o.d,n)}if(p){p=b2.a
o=b2.cy.f
p=p.dG
p.a.uniform3f(p.d,o.a,o.b,o.c)}if(b3.c){b2.ac(l,b2.cy.e)
b3=b2.a
p=b2.cy.e
b3.ad(b3.dH,p)}}b3=s.y
p=b3.a
o=!p
if(o)n=b3.c
else n=!0
if(n){if(p){p=b2.a
n=b2.db.f
p=p.dI
p.a.uniform1f(p.d,n)}if(b3.c){b2.ac(l,b2.db.e)
p=b2.a
n=b2.db.e
p.ad(p.dJ,n)}q.enable(3042)
q.blendFunc(770,771)}for(j=0;j<l.length;++j){p=l[j]
if(!p.c&&p.d>=6){p.c=!0
q.activeTexture(33984+p.a)
q.bindTexture(34067,p.b)}}p=b5.e
p.c1(b4)
p.aY(b4)
p.it(b4)
if(o)b3=b3.c
else b3=!0
if(b3)q.disable(3042)
for(j=0;j<l.length;++j){b3=l[j]
if(b3.c){b3.c=!1
q.activeTexture(33984+b3.a)
q.bindTexture(34067,null)}}b3=b2.a
b3.toString
q.useProgram(null)
b3.x.hz()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.cU().aC}}
O.he.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.cW(a,C.c.a4(b+3,4)*4))}}
O.hf.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hg.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.d2(a,C.c.a4(b+3,4)*4))}}
O.hh.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hi.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.ds(a,C.c.a4(b+3,4)*4))}}
O.hj.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.hk.prototype={
$2:function(a,b){if(typeof b!=="number")return b.w()
return this.b.push(new A.dy(a,C.c.a4(b+3,4)*4))}}
O.hl.prototype={
$2:function(a,b){return J.cS(a.a,b.a)}}
O.h8.prototype={
az:function(){var u,t=this
t.cK()
u=t.f
if(!(Math.abs(u-1)<$.C().a)){t.f=1
u=new D.E(t.b,u,1)
u.b=!0
t.a.a_(u)}}}
O.cb.prototype={
a_:function(a){return this.a.a_(a)},
bG:function(){return this.a_(null)},
az:function(){},
bZ:function(a){var u,t,s=this
if(!s.c.t(0,a)){u=s.c
if(!u.a)u=u.c
else u=!0
if(u){if(!a.a)u=a.c
else u=!0
t=!u}else t=!0
s.c=a
if(t)s.az()
u=s.a
u.a=null
u.a_(null)}},
sau:function(a){var u,t=this,s=t.c
if(!s.c)t.bZ(new A.a1(s.a,!1,!0))
s=t.e
if(s!==a){if(s!=null)s.gB().D(0,t.gbi())
u=t.e
t.e=a
a.gB().n(0,t.gbi())
s=new D.E(t.b+".textureCube",u,t.e)
s.b=!0
t.a.a_(s)}}}
O.h9.prototype={}
O.ay.prototype={
d5:function(a){var u,t,s=this
if(!s.f.t(0,a)){u=s.f
s.f=a
t=new D.E(s.b+".color",u,a)
t.b=!0
s.a.a_(t)}},
az:function(){this.cK()
this.d5(new V.a0(1,1,1))},
sak:function(a,b){this.bZ(new A.a1(!0,!1,this.c.c))
this.d5(b)}}
O.hb.prototype={}
O.hc.prototype={
az:function(){var u,t=this
t.cL()
u=t.ch
if(!(Math.abs(u-1)<$.C().a)){t.ch=1
u=new D.E(t.b+".refraction",u,1)
u.b=!0
t.a.a_(u)}}}
O.hd.prototype={
d6:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.C().a)){u.ch=a
t=new D.E(u.b+".shininess",t,a)
t.b=!0
u.a.a_(t)}},
az:function(){this.cL()
this.d6(100)}}
O.dD.prototype={}
T.dE.prototype={}
T.im.prototype={
gB:function(){var u=this.e
return u==null?this.e=D.L():u}}
T.io.prototype={
dU:function(a){var u,t=this,s=34067,r=a+"/posx.png",q=a+"/posy.png",p=a+"/posz.png",o=a+"/negx.png",n=a+"/negy.png",m=a+"/negz.png",l=t.a,k=l.createTexture()
l.bindTexture(s,k)
l.texParameteri(s,10242,10497)
l.texParameteri(s,10243,10497)
l.texParameteri(s,10241,9729)
l.texParameteri(s,10240,9729)
l.bindTexture(s,null)
u=new T.im()
u.a=0
u.b=k
u.c=!1
u.d=0
t.aO(u,k,r,34069,!1,!1)
t.aO(u,k,o,34070,!1,!1)
t.aO(u,k,q,34071,!1,!1)
t.aO(u,k,n,34072,!1,!1)
t.aO(u,k,p,34073,!1,!1)
t.aO(u,k,m,34074,!1,!1)
return u},
aO:function(a,b,c,d,e,f){var u=document.createElement("img")
u.src=c;++this.d
W.Z(u,"load",new T.ip(this,u,!1,b,!1,d,a),!1)},
h2:function(a,b,c){var u,t,s,r
b=V.ld(b)
u=V.ld(a.width)
t=V.ld(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.kG()
s.width=u
s.height=t
r=C.i.eg(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.oV(r.getImageData(0,0,s.width,s.height))}}}
T.ip.prototype={
$1:function(a){var u=this,t=u.a,s=t.h2(u.b,t.c,u.c),r=t.a
r.bindTexture(34067,u.d)
r.pixelStorei(37440,u.e?1:0)
C.a5.io(r,u.f,0,6408,6408,5121,s)
r.bindTexture(34067,null)
r=u.r
if(++r.d>=6){r=r.e
if(r!=null)r.hE()}++t.e}}
X.kF.prototype={}
X.fE.prototype={
gB:function(){var u=this.x
return u==null?this.x=D.L():u}}
X.dr.prototype={
gB:function(){var u=this.f
return u==null?this.f=D.L():u},
aL:function(a){var u=this.f
if(u!=null)u.G(a)},
eH:function(){return this.aL(null)},
sba:function(a){var u,t,s=this
if(!J.A(s.b,a)){u=s.b
if(u!=null)u.gB().D(0,s.gcP())
t=s.b
s.b=a
if(a!=null)a.gB().n(0,s.gcP())
u=new D.E("mover",t,s.b)
u.b=!0
s.aL(u)}}}
X.ii.prototype={}
V.d_.prototype={
bh:function(a){this.b=new P.fJ(C.U)
this.c=null
this.d=H.b([],[[P.q,W.ap]])},
O:function(a,b){var u,t,s,r,q,p,o,n,m=this,l=m.d
if(l.length===0)l.push(H.b([],[W.ap]))
u=a.split("\n")
for(l=u.length,t=[W.ap],s=!0,r=0;r<l;++r){q=u[r]
if(s)s=!1
else m.d.push(H.b([],t))
p=document.createElement("div")
p.className="codePart"
o=m.b.eR(q,0,q.length)
n=o==null?q:o
C.S.ei(p,H.lf(n," ","&nbsp;"))
n=p.style
n.color=b
C.b.gas(m.d).push(p)}},
e2:function(a,b){var u,t,s,r=this
r.d=H.b([],[[P.q,W.ap]])
u=C.b.j(b,"\n")
t=r.c
if(t==null)t=r.c=r.bq()
for(t.toString,s=new H.p(u),s=new P.bM(t.cC(new H.bf(s,s.gl(s))).a());s.v();)r.bx(s.gE(s))}}
V.ku.prototype={
$1:function(a){var u=C.d.eb(this.a.ghP(),2)
if(u!=="0.00")P.le(u+" fps")}}
V.fj.prototype={
bx:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()\\-+*%!&|=.,?:;",k="OpenDoubleStr",j="CloseDoubleStr",i="EscDoubleStr",h="OpenSingleStr",g="CloseSingleStr",f="EscSingleStr",e="Slash",d="Comment",c="EndComment",b="MLComment",a="MLCStar",a0="Whitespace",a1=L.it()
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
a1.k(0,k).j(0,k).a.push(new K.aO())
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
a1.k(0,h).j(0,h).a.push(new K.aO())
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
t=new K.a9()
s=[K.bg]
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
t=new K.a9()
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
t.d=t.a.S("Num")
t=a1.k(0,n)
t.d=t.a.S("Num")
t=a1.k(0,m)
t.d=t.a.S("Symbol")
t=a1.k(0,j)
t.d=t.a.S("String")
t=a1.k(0,g)
t.d=t.a.S("String")
t=a1.k(0,c)
t.d=t.a.S(d)
t=a1.k(0,a0)
t.d=t.a.S(a0)
t=a1.k(0,q)
t=t.d=t.a.S(q)
u=[P.h]
t.aG(0,"Class",H.b(["Constant","Depth","Entity","EntityPass","Math","Matrix4","Movers","Rotator","Scenes","Shapes","Techniques","ThreeDart"],u))
t.aG(0,"Type",H.b(["bool","double","dynamic","false","int","List","Map","null","num","Object","String","this","true","var","void"],u))
t.aG(0,"Reserved",H.b(["abstract","as","assert","async","await","break","case","catch","class","continue","const","default","deferred","do","else","enum","export","extends","external","factory","final","finally","for","get","if","implements","import","in","is","library","new","operator","part","rethrow","return","set","static","super","switch","sync","throw","try","typedef","with","while","yield"],u))
return a1}}
V.fG.prototype={
bx:function(a){var u=this
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
bq:function(){var u,t,s,r="Start",q="Id",p="Int",o="FloatDot",n="Float",m="Sym",l="<>{}()[]\\-+*%!&|=.,?:;",k="Slash",j="Comment",i="EndComment",h="Preprocess",g="EndPreprocess",f="Whitespace",e=L.it()
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
e.k(0,k).j(0,m).a.push(new K.aO())
t=e.k(0,j).j(0,i)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,j).j(0,j)
t=new K.a9()
s=[K.bg]
t.a=H.b([],s)
u.a.push(t)
u=K.v(new H.p("\n"))
t.a.push(u)
u=e.k(0,r).j(0,h)
t=K.v(new H.p("#"))
u.a.push(t)
t=e.k(0,h).j(0,h)
u=new K.a9()
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
u.d=u.a.S("Num")
u=e.k(0,n)
u.d=u.a.S("Num")
u=e.k(0,m)
u.d=u.a.S("Symbol")
u=e.k(0,i)
u.d=u.a.S(j)
u=e.k(0,g)
u.d=u.a.S(h)
u=e.k(0,f)
u.d=u.a.S(f)
u=e.k(0,q)
u=u.d=u.a.S(q)
t=[P.h]
u.aG(0,"Type",H.b(["float","double","int","void","bool","true","false","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uint","uvec2","uvec3","uvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray"],t))
u.aG(0,"Reserved",H.b(["attribute","break","case","centroid","const","continue","default","discard","do","else","flat","for","highp","if","in","inout","invariant","layout","lowp","mediump","noperspective","out","patch","precision","return","sample","smooth","struct","subroutine","switch","uniform","varying","while"],t))
u.aG(0,"Builtin",H.b(["gl_FragColor","gl_Position"],t))
return e}}
V.fH.prototype={
bx:function(a){var u=this,t="#111"
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
bq:function(){var u,t,s="Start",r="Id",q="Attr",p="Sym",o="OpenStr",n="CloseStr",m="Other",l=L.it()
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
l.k(0,o).j(0,o).a.push(new K.aO())
l.k(0,s).j(0,m).a.push(new K.aO())
u=l.k(0,m).j(0,m)
t=new K.a9()
t.a=H.b([],[K.bg])
u.a.push(t)
u=K.v(new H.p('</\\-!>=_"'))
t.a.push(u)
u=K.P("a","z")
t.a.push(u)
u=K.P("A","Z")
t.a.push(u)
u=l.k(0,p)
u.d=u.a.S("Symbol")
u=l.k(0,n)
u.d=u.a.S("String")
u=l.k(0,r)
t=u.a.S(r)
u.d=t
t.aG(0,"Reserved",H.b(["DOCTYPE","html","head","meta","link","title","body","script"],[P.h]))
t=l.k(0,q)
t.d=t.a.S(q)
t=l.k(0,m)
t.d=t.a.S(m)
return l}}
V.hG.prototype={
e2:function(a,b){this.d=H.b([],[[P.q,W.ap]])
this.O(C.b.j(b,"\n"),"#111")},
bx:function(a){},
bq:function(){return}}
V.hL.prototype={
bo:function(a,b,c,d){var u,t,s,r,q,p,o,n,m=this
if(m.c==null)return
u=m.a
t=P.lO().gcu().h(0,H.e(u))
if(t==null)if(d){c.$0()
m.dd(b)
s=!0}else s=!1
else if(t===b){c.$0()
s=!0}else s=!1
r=document
q=r.createElement("label")
p=q.style
p.whiteSpace="nowrap"
J.lk(m.c).n(0,q)
o=W.n6("radio")
o.checked=s
o.name=u
W.Z(o,"change",new V.hM(m,o,c,b),!1)
q.appendChild(o)
n=r.createElement("span")
n.textContent=b
q.appendChild(n)
J.lk(m.c).n(0,r.createElement("br"))},
ap:function(a,b,c){return this.bo(a,b,c,!1)},
dd:function(a){var u,t,s=P.lO(),r=P.h,q=P.nf(s.gcu(),r,r)
q.m(0,this.a,a)
u=s.e7(0,q)
r=window.history
t=u.i(0)
r.toString
r.replaceState(new P.jD([],[]).bB(""),"",t)}}
V.hM.prototype={
$1:function(a){var u=this
if(u.b.checked){u.c.$0()
u.a.dd(u.d)}}}
V.i1.prototype={
ey:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.Z(q,"scroll",new V.i3(o),!1)},
dg:function(a){var u,t,s,r,q,p,o,n
this.h6()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.hU(a),s.toString,r=new H.p(r),r=new P.bM(s.cC(new H.bf(r,r.gl(r))).a());r.v();){s=r.gE(r)
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
if(H.mq(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eE(C.z,s,C.e,!1)
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
ef:function(a){var u,t,s,r=new V.fj("dart")
r.bh("dart")
u=new V.fG("glsl")
u.bh("glsl")
t=new V.fH("html")
t.bh("html")
s=C.b.hL(H.b([r,u,t],[V.d_]),new V.i4(a))
if(s!=null)return s
r=new V.hG("plain")
r.bh("plain")
return r},
df:function(a7,a8,a9,b0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3="codeTableRow",a4="codeLineNums",a5="codeLineText",a6=H.b([],[P.w])
for(u=!1,t=0;t<b0.length;++t){s=b0[t]
if(J.cN(s).a3(s,"+")){b0[t]=C.a.a6(s,1)
a6.push(1)
u=!0}else if(C.a.a3(s,"-")){b0[t]=C.a.a6(s,1)
a6.push(-1)
u=!0}else a6.push(0)}r=this.ef(a8)
r.e2(0,b0)
q=document
p=q.createElement("div")
p.className="codeTableScroll"
o=q.createElement("table")
o.className="codeTable"
p.appendChild(o)
this.a.appendChild(p)
n=P.eE(C.z,a7,C.e,!1)
m=q.createElement("tr")
m.className="headerRow"
l=q.createElement("td")
l.className="headerCell"
l.colSpan=u?3:2
k=q.createElement("div")
k.className="tableHeader"
k.id=n
j=W.lm()
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
for(g=s.length,a=0;a<s.length;s.length===g||(0,H.o)(s),++a)b.appendChild(s[a])
f.appendChild(e)
f.appendChild(d)
f.appendChild(b)
o.appendChild(f)}else for(g=r.d,a0=g.length,a1=a9,a=0;a<g.length;g.length===a0||(0,H.o)(g),++a){s=g[a]
f=q.createElement("tr")
f.className=a3
e=q.createElement("td")
e.className=a4;++a1
e.textContent=""+a1
d=q.createElement("td")
d.className=a5
for(a2=C.b.gU(s);a2.v();)d.appendChild(a2.gE(a2))
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
h6:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=L.it()
u.d=u.k(0,q)
t=u.k(0,q).j(0,p)
s=K.v(new H.p("*"))
t.a.push(s)
t.c=!0
t=u.k(0,p).j(0,p)
s=new K.a9()
r=[K.bg]
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
s=new K.a9()
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
s=new K.a9()
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
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("|]"))
t.a.push(s)
s=u.k(0,k).j(0,j)
t=K.v(new H.p("]"))
s.a.push(t)
s.c=!0
s=u.k(0,k).j(0,k)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("|]"))
t.a.push(s)
u.k(0,q).j(0,i).a.push(new K.aO())
s=u.k(0,i).j(0,i)
t=new K.a9()
t.a=H.b([],r)
s.a.push(t)
s=K.v(new H.p("*_`["))
t.a.push(s)
s=u.k(0,"BoldEnd")
s.d=s.a.S(p)
s=u.k(0,n)
s.d=s.a.S(o)
s=u.k(0,"CodeEnd")
s.d=s.a.S(m)
s=u.k(0,j)
s.d=s.a.S("Link")
s=u.k(0,i)
s.d=s.a.S(i)
this.b=u}}
V.i3.prototype={
$1:function(a){P.lK(C.n,new V.i2(this.a))}}
V.i2.prototype={
$0:function(){var u=C.d.al(document.documentElement.scrollTop),t=this.a.style,s=H.e(-0.01*u)+"px"
t.top=s}}
V.i4.prototype={
$1:function(a){return a.a===this.a}}
R.kj.prototype={
$0:function(){this.a.sa9(0,F.l8(1,null,null,1))}}
R.kk.prototype={
$0:function(){this.a.sa9(0,F.l8(8,null,null,8))}}
R.kl.prototype={
$0:function(){this.a.sa9(0,F.me(!0,40,1))}}
R.km.prototype={
$0:function(){this.a.sa9(0,F.me(!1,40,0))}}
R.kn.prototype={
$0:function(){this.a.sa9(0,F.pa(10,20))}}
R.ko.prototype={
$0:function(){var u=F.hY(),t=Math.sqrt(5)/2+0.5,s=F.a6(u,new V.y(-1,t,0)),r=F.a6(u,new V.y(1,t,0)),q=-t,p=F.a6(u,new V.y(-1,q,0)),o=F.a6(u,new V.y(1,q,0)),n=F.a6(u,new V.y(0,-1,q)),m=F.a6(u,new V.y(0,1,q)),l=F.a6(u,new V.y(0,-1,t)),k=F.a6(u,new V.y(0,1,t)),j=F.a6(u,new V.y(t,0,1)),i=F.a6(u,new V.y(t,0,-1)),h=F.a6(u,new V.y(q,0,1)),g=F.a6(u,new V.y(q,0,-1))
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
u.dV(new F.cw(),new F.j2())
this.a.sa9(0,u)}}
R.kp.prototype={
$0:function(){this.a.sa9(0,F.mp(6,6))}}
R.kq.prototype={
$0:function(){this.a.sa9(0,F.pj())}}
R.kr.prototype={
$0:function(){this.a.sa9(0,F.p9())}}
R.ks.prototype={
$1:function(a){var u=this.a,t=this.b,s=t.a,r=[P.h]
u.df("Vertex Shader","glsl",0,H.b((s==null?null:s.c).split("\n"),r))
t=t.a
u.df("Fragment Shader","glsl",0,H.b((t==null?null:t.d).split("\n"),r))}};(function aliases(){var u=J.a.prototype
u.eo=u.i
u=J.dc.prototype
u.eq=u.i
u=P.j.prototype
u.ep=u.bC
u=W.S.prototype
u.bE=u.af
u=W.em.prototype
u.er=u.aq
u=K.d8.prototype
u.en=u.aE
u.cJ=u.i
u=O.cb.prototype
u.cK=u.az
u=O.ay.prototype
u.cL=u.az})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers.installStaticTearOff,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_1u,m=hunkHelpers._instance_0i
u(J,"ok","na",20)
t(P,"oP","nT",8)
t(P,"oQ","nU",8)
t(P,"oR","nV",8)
s(P,"md","oN",10)
r(W,"p3",4,null,["$4"],["nW"],15,0)
r(W,"p4",4,null,["$4"],["nX"],15,0)
var l
q(l=E.bb.prototype,"ge0",0,0,null,["$1","$0"],["e1","i2"],0,0)
q(l,"gdZ",0,0,null,["$1","$0"],["e_","i1"],0,0)
q(l,"gdX",0,0,null,["$1","$0"],["dY","hZ"],0,0)
p(l,"ghX","hY",4)
p(l,"gi_","i0",4)
q(l=E.dF.prototype,"gcM",0,0,null,["$1","$0"],["cO","cN"],0,0)
o(l,"gij","e8",10)
n(l=X.dO.prototype,"gfn","fo",5)
n(l,"gfb","fc",5)
n(l,"gfh","fi",2)
n(l,"gfs","ft",11)
n(l,"gfp","fq",11)
n(l,"gfw","fz",2)
n(l,"gfC","fD",2)
n(l,"gfl","fm",2)
n(l,"gfA","fB",2)
n(l,"gfj","fk",2)
n(l,"gfE","fF",18)
n(l,"gfG","fH",5)
n(l,"gfT","fU",6)
n(l,"gfP","fQ",6)
n(l,"gfR","fS",6)
q(D.bv.prototype,"geB",0,0,null,["$1","$0"],["aw","eC"],0,0)
q(l=D.de.prototype,"gd1",0,0,null,["$1","$0"],["d2","fu"],0,0)
n(l,"gfJ","fK",19)
p(l,"gf5","f6",12)
p(l,"gfN","fO",12)
m(V.J.prototype,"gl","b8",7)
m(V.y.prototype,"gl","b8",7)
m(V.b0.prototype,"gl","b8",7)
q(l=U.c4.prototype,"gaP",0,0,null,["$1","$0"],["T","a7"],0,0)
p(l,"gf3","f4",13)
p(l,"gfL","fM",13)
q(l=U.dP.prototype,"gaP",0,0,null,["$1","$0"],["T","a7"],0,0)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"gbS","bT",1)
q(l=U.dQ.prototype,"gaP",0,0,null,["$1","$0"],["T","a7"],0,0)
n(l,"gbO","bP",1)
n(l,"gbQ","bR",1)
n(l,"gbS","bT",1)
n(l,"geX","eY",1)
n(l,"geZ","f_",1)
n(l,"ghd","he",1)
n(l,"ghb","hc",1)
n(l,"gh9","ha",1)
n(U.dR.prototype,"gf1","f2",1)
q(l=M.d5.prototype,"gan",0,0,null,["$1","$0"],["ax","eD"],0,0)
p(l,"gfd","fe",4)
p(l,"gff","fg",4)
q(l=O.dh.prototype,"gbi",0,0,null,["$1","$0"],["a_","bG"],0,0)
q(l,"gh0",0,0,null,["$1","$0"],["d3","h1"],0,0)
p(l,"gf7","f8",14)
p(l,"gf9","fa",14)
q(O.cb.prototype,"gbi",0,0,null,["$1","$0"],["a_","bG"],0,0)
q(X.dr.prototype,"gcP",0,0,null,["$1","$0"],["aL","eH"],0,0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.a4,null)
s(P.a4,[H.kP,J.a,J.ad,P.e9,P.j,H.bf,P.fO,H.d6,H.iL,H.fb,H.iy,P.bw,H.c_,H.er,P.a3,H.fW,H.fY,H.fQ,P.ex,P.bL,P.bM,P.dT,P.dB,P.id,P.dG,P.jV,P.jx,P.jr,P.e8,P.x,P.jN,P.h4,P.f8,P.fK,P.jT,P.jS,P.aL,P.ae,P.ac,P.ba,P.hE,P.dz,P.e1,P.fD,P.fF,P.q,P.T,P.bi,P.h,P.U,P.bN,P.iN,P.jA,W.ff,W.cz,W.M,W.dp,W.em,W.jH,W.d7,W.aW,W.jw,W.eF,P.jC,P.eC,P.js,P.bH,K.aO,K.d8,K.bg,K.hN,K.hW,L.dA,L.dH,L.dI,L.is,O.b9,O.cc,E.f4,E.bb,E.bt,E.bC,E.e0,E.hO,E.dF,Z.dS,Z.ja,Z.cY,Z.by,Z.b1,D.f7,D.bx,D.a_,X.cZ,X.dd,X.fT,X.h1,X.am,X.hs,X.iu,X.dO,D.f1,D.bv,D.a8,D.hI,D.i8,V.a0,V.ak,V.fu,V.di,V.aU,V.X,V.O,V.bj,V.du,V.J,V.y,V.b0,U.dP,U.dQ,U.dR,M.d5,A.cV,A.eX,A.a1,A.cW,A.d2,A.ds,A.dy,A.ha,A.cq,A.cr,A.ct,A.cu,A.dL,A.iG,F.aR,F.fx,F.c8,F.fV,F.ci,F.hX,F.hZ,F.i_,F.i0,F.bm,F.iZ,F.j_,F.j3,F.j4,F.j5,F.j6,O.dD,O.cb,O.hb,T.io,X.kF,X.ii,X.dr,V.d_,V.hL,V.i1])
s(J.a,[J.fP,J.db,J.dc,J.bc,J.c7,J.bd,H.cf,H.bh,W.f,W.eU,W.br,W.aw,W.H,W.dV,W.al,W.fk,W.fl,W.dX,W.d4,W.dZ,W.fn,W.i,W.e2,W.ax,W.fI,W.e4,W.aS,W.h0,W.hm,W.ea,W.eb,W.aA,W.ec,W.ef,W.aC,W.ej,W.el,W.aF,W.en,W.aG,W.es,W.ar,W.ev,W.ir,W.aI,W.ey,W.iw,W.iS,W.eG,W.eI,W.eK,W.eM,W.eO,P.aT,P.e6,P.aX,P.eh,P.hK,P.et,P.b_,P.eA,P.eY,P.dU,P.dv,P.ep])
s(J.dc,[J.hF,J.bJ,J.be])
t(J.kO,J.bc)
s(J.c7,[J.da,J.d9])
t(P.h_,P.e9)
s(P.h_,[H.dM,W.jh,W.a5,P.fz])
t(H.p,H.dM)
s(P.j,[H.u,H.ca,H.cx,P.fM])
s(H.u,[H.df,H.fX])
t(H.fq,H.ca)
s(P.fO,[H.h5,H.jb])
t(H.h6,H.df)
t(H.fc,H.fb)
s(P.bw,[H.hB,H.fS,H.iK,H.f6,H.hU,P.dq,P.ao,P.iM,P.iI,P.cm,P.fa,P.fi])
s(H.c_,[H.kA,H.ij,H.fR,H.kd,H.ke,H.kf,P.jd,P.jc,P.je,P.jf,P.jM,P.jL,P.k3,P.ju,P.jv,P.fZ,P.h3,P.fo,P.fp,P.iR,P.iO,P.iP,P.iQ,P.jO,P.jP,P.jR,P.jQ,P.jZ,P.jY,P.k_,P.k0,W.fr,W.ho,W.hq,W.hT,W.ic,W.jm,W.hz,W.hy,W.jy,W.jz,W.jK,W.jU,P.jE,P.jF,P.k4,P.fA,P.fB,P.f_,E.hP,E.hQ,E.hR,E.iq,D.fv,D.fw,F.jW,F.k5,F.k7,F.k8,F.k9,F.ki,F.kv,F.kw,F.kz,F.kh,F.k6,F.j8,F.j7,F.j0,F.j1,O.he,O.hf,O.hg,O.hh,O.hi,O.hj,O.hk,O.hl,T.ip,V.ku,V.hM,V.i3,V.i2,V.i4,R.kj,R.kk,R.kl,R.km,R.kn,R.ko,R.kp,R.kq,R.kr,R.ks])
s(H.ij,[H.ia,H.bY])
t(P.h2,P.a3)
s(P.h2,[H.I,W.jg])
t(H.dk,H.bh)
s(H.dk,[H.cB,H.cD])
t(H.cC,H.cB)
t(H.cg,H.cC)
t(H.cE,H.cD)
t(H.dl,H.cE)
s(H.dl,[H.ht,H.hu,H.hv,H.hw,H.hx,H.dm,H.ch])
t(P.jI,P.fM)
t(P.jt,P.jV)
t(P.jq,P.jx)
t(P.eD,P.h4)
t(P.dN,P.eD)
s(P.f8,[P.f2,P.fs])
t(P.fd,P.id)
s(P.fd,[P.f3,P.fJ,P.iV,P.iU])
t(P.iT,P.fs)
s(P.ac,[P.K,P.w])
s(P.ao,[P.bF,P.fL])
t(P.jj,P.bN)
s(W.f,[W.D,W.fy,W.cd,W.aE,W.cF,W.aH,W.as,W.cH,W.j9,W.cy,P.f0,P.bq])
s(W.D,[W.S,W.b8])
s(W.S,[W.r,P.k])
s(W.r,[W.eV,W.eW,W.bs,W.bu,W.ap,W.fC,W.c6,W.hV,W.dC,W.ig,W.ih,W.co])
t(W.fe,W.aw)
t(W.c0,W.dV)
s(W.al,[W.fg,W.fh])
t(W.dY,W.dX)
t(W.d3,W.dY)
t(W.e_,W.dZ)
t(W.fm,W.e_)
t(W.aq,W.br)
t(W.e3,W.e2)
t(W.c3,W.e3)
t(W.e5,W.e4)
t(W.c5,W.e5)
t(W.bk,W.i)
s(W.bk,[W.bB,W.aB,W.bG])
t(W.hn,W.ea)
t(W.hp,W.eb)
t(W.ed,W.ec)
t(W.hr,W.ed)
t(W.eg,W.ef)
t(W.dn,W.eg)
t(W.ek,W.ej)
t(W.hH,W.ek)
t(W.hS,W.el)
t(W.cG,W.cF)
t(W.i6,W.cG)
t(W.eo,W.en)
t(W.i7,W.eo)
t(W.ib,W.es)
t(W.ew,W.ev)
t(W.ik,W.ew)
t(W.cI,W.cH)
t(W.il,W.cI)
t(W.ez,W.ey)
t(W.iv,W.ez)
t(W.bn,W.aB)
t(W.eH,W.eG)
t(W.ji,W.eH)
t(W.dW,W.d4)
t(W.eJ,W.eI)
t(W.jn,W.eJ)
t(W.eL,W.eK)
t(W.ee,W.eL)
t(W.eN,W.eM)
t(W.jB,W.eN)
t(W.eP,W.eO)
t(W.jG,W.eP)
t(W.jk,W.jg)
t(W.jl,P.dB)
t(W.jJ,W.em)
t(P.jD,P.jC)
t(P.aa,P.js)
t(P.e7,P.e6)
t(P.fU,P.e7)
t(P.ei,P.eh)
t(P.hC,P.ei)
t(P.cl,P.k)
t(P.eu,P.et)
t(P.ie,P.eu)
t(P.eB,P.eA)
t(P.ix,P.eB)
t(P.eZ,P.dU)
t(P.hD,P.bq)
t(P.eq,P.ep)
t(P.i9,P.eq)
s(K.d8,[K.a9,L.dK])
s(E.f4,[Z.cX,A.dw,T.dE])
s(D.a_,[D.bz,D.bA,D.E,X.hJ])
s(X.hJ,[X.dg,X.aV,X.ce,X.dJ])
s(O.b9,[D.de,U.c4])
s(D.f7,[U.f9,U.af])
t(U.d0,U.af)
t(A.h7,A.dw)
s(A.dL,[A.bl,A.iD,A.iE,A.iF,A.iB,A.W,A.iC,A.G,A.cp,A.iH,A.cs,A.ag,A.bI,A.a2])
t(F.i5,F.fx)
t(F.iA,F.fV)
t(F.cw,F.j4)
s(F.j5,[F.j2,F.hA])
t(O.dh,O.dD)
s(O.cb,[O.h8,O.h9,O.ay])
s(O.ay,[O.hc,O.hd])
t(T.im,T.dE)
t(X.fE,X.ii)
s(V.d_,[V.fj,V.fG,V.fH,V.hG])
u(H.dM,H.iL)
u(H.cB,P.x)
u(H.cC,H.d6)
u(H.cD,P.x)
u(H.cE,H.d6)
u(P.e9,P.x)
u(P.eD,P.jN)
u(W.dV,W.ff)
u(W.dX,P.x)
u(W.dY,W.M)
u(W.dZ,P.x)
u(W.e_,W.M)
u(W.e2,P.x)
u(W.e3,W.M)
u(W.e4,P.x)
u(W.e5,W.M)
u(W.ea,P.a3)
u(W.eb,P.a3)
u(W.ec,P.x)
u(W.ed,W.M)
u(W.ef,P.x)
u(W.eg,W.M)
u(W.ej,P.x)
u(W.ek,W.M)
u(W.el,P.a3)
u(W.cF,P.x)
u(W.cG,W.M)
u(W.en,P.x)
u(W.eo,W.M)
u(W.es,P.a3)
u(W.ev,P.x)
u(W.ew,W.M)
u(W.cH,P.x)
u(W.cI,W.M)
u(W.ey,P.x)
u(W.ez,W.M)
u(W.eG,P.x)
u(W.eH,W.M)
u(W.eI,P.x)
u(W.eJ,W.M)
u(W.eK,P.x)
u(W.eL,W.M)
u(W.eM,P.x)
u(W.eN,W.M)
u(W.eO,P.x)
u(W.eP,W.M)
u(P.e6,P.x)
u(P.e7,W.M)
u(P.eh,P.x)
u(P.ei,W.M)
u(P.et,P.x)
u(P.eu,W.M)
u(P.eA,P.x)
u(P.eB,W.M)
u(P.dU,P.a3)
u(P.ep,P.x)
u(P.eq,W.M)})()
var v={mangledGlobalNames:{w:"int",K:"double",ac:"num",h:"String",aL:"bool",bi:"Null",q:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,opt:[D.a_]},{func:1,ret:-1,args:[D.a_]},{func:1,ret:-1,args:[W.aB]},{func:1,ret:P.bi,args:[,,]},{func:1,ret:-1,args:[P.w,[P.j,E.bb]]},{func:1,ret:-1,args:[W.i]},{func:1,ret:-1,args:[W.bG]},{func:1,ret:P.K},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:-1},{func:1,ret:-1,args:[W.bB]},{func:1,ret:-1,args:[P.w,[P.j,D.a8]]},{func:1,ret:-1,args:[P.w,[P.j,U.af]]},{func:1,ret:-1,args:[P.w,[P.j,V.aU]]},{func:1,ret:P.aL,args:[W.S,P.h,P.h,W.cz]},{func:1,ret:P.bi,args:[,]},{func:1,ret:P.bH,args:[,,]},{func:1,ret:-1,args:[W.bn]},{func:1,ret:P.aL,args:[[P.j,D.a8]]},{func:1,ret:P.w,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.r=W.bs.prototype
C.i=W.bu.prototype
C.S=W.ap.prototype
C.V=J.a.prototype
C.b=J.bc.prototype
C.W=J.d9.prototype
C.c=J.da.prototype
C.j=J.db.prototype
C.d=J.c7.prototype
C.a=J.bd.prototype
C.X=J.be.prototype
C.D=J.hF.prototype
C.a5=P.dv.prototype
C.E=W.dC.prototype
C.q=J.bJ.prototype
C.F=W.bn.prototype
C.G=W.cy.prototype
C.H=new E.bt("Browser.chrome")
C.t=new E.bt("Browser.firefox")
C.u=new E.bt("Browser.edge")
C.I=new E.bt("Browser.other")
C.a7=new P.f3()
C.J=new P.f2()
C.v=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.K=function() {
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
C.P=function(getTagFallback) {
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
C.L=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.M=function(hooks) {
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
C.O=function(hooks) {
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
C.N=function(hooks) {
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
C.w=function(hooks) { return hooks; }

C.Q=new P.hE()
C.e=new P.iT()
C.R=new P.iV()
C.f=new P.jt()
C.n=new P.ba(0)
C.T=new P.ba(5e6)
C.U=new P.fK("element",!1,!1,!1)
C.x=H.b(u([127,2047,65535,1114111]),[P.w])
C.k=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.w])
C.Y=H.b(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.h])
C.l=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.w])
C.m=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.w])
C.Z=H.b(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.h])
C.y=H.b(u([]),[P.h])
C.a_=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.w])
C.z=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.w])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.w])
C.A=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.w])
C.a0=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.w])
C.B=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.w])
C.o=H.b(u(["bind","if","ref","repeat","syntax"]),[P.h])
C.p=H.b(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.h])
C.a1=new H.fc(0,{},C.y,[P.h,P.h])
C.a2=new E.bC("OperatingSystem.windows")
C.C=new E.bC("OperatingSystem.mac")
C.a3=new E.bC("OperatingSystem.linux")
C.a4=new E.bC("OperatingSystem.other")
C.a6=new P.bL(null,2)})();(function staticFields(){$.av=0
$.bZ=null
$.lo=null
$.mj=null
$.mc=null
$.mn=null
$.ka=null
$.kg=null
$.lb=null
$.bQ=null
$.cL=null
$.cM=null
$.l5=!1
$.at=C.f
$.ab=[]
$.aQ=null
$.kK=null
$.lu=null
$.lt=null
$.cA=P.kR(P.h,P.fF)
$.ft=null
$.ly=null
$.lB=null
$.aD=null
$.lG=null
$.lR=null
$.lU=null
$.lT=null
$.iW=null
$.iX=null
$.iY=null
$.lS=null
$.lW=null
$.lA=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"po","mt",function(){return H.mi("_$dart_dartClosure")})
u($,"pp","lg",function(){return H.mi("_$dart_js")})
u($,"pq","mu",function(){return H.aJ(H.iz({
toString:function(){return"$receiver$"}}))})
u($,"pr","mv",function(){return H.aJ(H.iz({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"ps","mw",function(){return H.aJ(H.iz(null))})
u($,"pt","mx",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pw","mA",function(){return H.aJ(H.iz(void 0))})
u($,"px","mB",function(){return H.aJ(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"pv","mz",function(){return H.aJ(H.lM(null))})
u($,"pu","my",function(){return H.aJ(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"pz","mD",function(){return H.aJ(H.lM(void 0))})
u($,"py","mC",function(){return H.aJ(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"pN","lh",function(){return P.nS()})
u($,"pA","mE",function(){return P.nO()})
u($,"pO","mI",function(){return H.nm(H.bP(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.w])))})
u($,"pR","mK",function(){return P.nA("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"pS","mL",function(){return P.oi()})
u($,"pP","mJ",function(){return P.lw(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.h)})
u($,"pH","mH",function(){return Z.an(0)})
u($,"pB","mF",function(){return Z.an(511)})
u($,"pJ","b6",function(){return Z.an(1)})
u($,"pI","b5",function(){return Z.an(2)})
u($,"pD","b4",function(){return Z.an(4)})
u($,"pK","bp",function(){return Z.an(8)})
u($,"pL","b7",function(){return Z.an(16)})
u($,"pE","cQ",function(){return Z.an(32)})
u($,"pF","cR",function(){return Z.an(64)})
u($,"pG","mG",function(){return Z.an(96)})
u($,"pM","bW",function(){return Z.an(128)})
u($,"pC","b3",function(){return Z.an(256)})
u($,"pn","ms",function(){return new V.fu(1e-9)})
u($,"pm","C",function(){return $.ms()})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cf,DataView:H.bh,ArrayBufferView:H.bh,Float32Array:H.cg,Float64Array:H.cg,Int16Array:H.ht,Int32Array:H.hu,Int8Array:H.hv,Uint16Array:H.hw,Uint32Array:H.hx,Uint8ClampedArray:H.dm,CanvasPixelArray:H.dm,Uint8Array:H.ch,HTMLAudioElement:W.r,HTMLBRElement:W.r,HTMLBaseElement:W.r,HTMLButtonElement:W.r,HTMLContentElement:W.r,HTMLDListElement:W.r,HTMLDataElement:W.r,HTMLDataListElement:W.r,HTMLDetailsElement:W.r,HTMLDialogElement:W.r,HTMLEmbedElement:W.r,HTMLFieldSetElement:W.r,HTMLHRElement:W.r,HTMLHeadElement:W.r,HTMLHeadingElement:W.r,HTMLHtmlElement:W.r,HTMLIFrameElement:W.r,HTMLInputElement:W.r,HTMLLIElement:W.r,HTMLLabelElement:W.r,HTMLLegendElement:W.r,HTMLLinkElement:W.r,HTMLMapElement:W.r,HTMLMediaElement:W.r,HTMLMenuElement:W.r,HTMLMetaElement:W.r,HTMLMeterElement:W.r,HTMLModElement:W.r,HTMLOListElement:W.r,HTMLObjectElement:W.r,HTMLOptGroupElement:W.r,HTMLOptionElement:W.r,HTMLOutputElement:W.r,HTMLParagraphElement:W.r,HTMLParamElement:W.r,HTMLPictureElement:W.r,HTMLPreElement:W.r,HTMLProgressElement:W.r,HTMLQuoteElement:W.r,HTMLScriptElement:W.r,HTMLShadowElement:W.r,HTMLSlotElement:W.r,HTMLSourceElement:W.r,HTMLSpanElement:W.r,HTMLStyleElement:W.r,HTMLTableCaptionElement:W.r,HTMLTableCellElement:W.r,HTMLTableDataCellElement:W.r,HTMLTableHeaderCellElement:W.r,HTMLTableColElement:W.r,HTMLTextAreaElement:W.r,HTMLTimeElement:W.r,HTMLTitleElement:W.r,HTMLTrackElement:W.r,HTMLUListElement:W.r,HTMLUnknownElement:W.r,HTMLVideoElement:W.r,HTMLDirectoryElement:W.r,HTMLFontElement:W.r,HTMLFrameElement:W.r,HTMLFrameSetElement:W.r,HTMLMarqueeElement:W.r,HTMLElement:W.r,AccessibleNodeList:W.eU,HTMLAnchorElement:W.eV,HTMLAreaElement:W.eW,Blob:W.br,HTMLBodyElement:W.bs,HTMLCanvasElement:W.bu,CDATASection:W.b8,CharacterData:W.b8,Comment:W.b8,ProcessingInstruction:W.b8,Text:W.b8,CSSPerspective:W.fe,CSSCharsetRule:W.H,CSSConditionRule:W.H,CSSFontFaceRule:W.H,CSSGroupingRule:W.H,CSSImportRule:W.H,CSSKeyframeRule:W.H,MozCSSKeyframeRule:W.H,WebKitCSSKeyframeRule:W.H,CSSKeyframesRule:W.H,MozCSSKeyframesRule:W.H,WebKitCSSKeyframesRule:W.H,CSSMediaRule:W.H,CSSNamespaceRule:W.H,CSSPageRule:W.H,CSSRule:W.H,CSSStyleRule:W.H,CSSSupportsRule:W.H,CSSViewportRule:W.H,CSSStyleDeclaration:W.c0,MSStyleCSSProperties:W.c0,CSS2Properties:W.c0,CSSImageValue:W.al,CSSKeywordValue:W.al,CSSNumericValue:W.al,CSSPositionValue:W.al,CSSResourceValue:W.al,CSSUnitValue:W.al,CSSURLImageValue:W.al,CSSStyleValue:W.al,CSSMatrixComponent:W.aw,CSSRotation:W.aw,CSSScale:W.aw,CSSSkew:W.aw,CSSTranslation:W.aw,CSSTransformComponent:W.aw,CSSTransformValue:W.fg,CSSUnparsedValue:W.fh,DataTransferItemList:W.fk,HTMLDivElement:W.ap,DOMException:W.fl,ClientRectList:W.d3,DOMRectList:W.d3,DOMRectReadOnly:W.d4,DOMStringList:W.fm,DOMTokenList:W.fn,Element:W.S,AbortPaymentEvent:W.i,AnimationEvent:W.i,AnimationPlaybackEvent:W.i,ApplicationCacheErrorEvent:W.i,BackgroundFetchClickEvent:W.i,BackgroundFetchEvent:W.i,BackgroundFetchFailEvent:W.i,BackgroundFetchedEvent:W.i,BeforeInstallPromptEvent:W.i,BeforeUnloadEvent:W.i,BlobEvent:W.i,CanMakePaymentEvent:W.i,ClipboardEvent:W.i,CloseEvent:W.i,CustomEvent:W.i,DeviceMotionEvent:W.i,DeviceOrientationEvent:W.i,ErrorEvent:W.i,ExtendableEvent:W.i,ExtendableMessageEvent:W.i,FetchEvent:W.i,FontFaceSetLoadEvent:W.i,ForeignFetchEvent:W.i,GamepadEvent:W.i,HashChangeEvent:W.i,InstallEvent:W.i,MediaEncryptedEvent:W.i,MediaKeyMessageEvent:W.i,MediaQueryListEvent:W.i,MediaStreamEvent:W.i,MediaStreamTrackEvent:W.i,MessageEvent:W.i,MIDIConnectionEvent:W.i,MIDIMessageEvent:W.i,MutationEvent:W.i,NotificationEvent:W.i,PageTransitionEvent:W.i,PaymentRequestEvent:W.i,PaymentRequestUpdateEvent:W.i,PopStateEvent:W.i,PresentationConnectionAvailableEvent:W.i,PresentationConnectionCloseEvent:W.i,ProgressEvent:W.i,PromiseRejectionEvent:W.i,PushEvent:W.i,RTCDataChannelEvent:W.i,RTCDTMFToneChangeEvent:W.i,RTCPeerConnectionIceEvent:W.i,RTCTrackEvent:W.i,SecurityPolicyViolationEvent:W.i,SensorErrorEvent:W.i,SpeechRecognitionError:W.i,SpeechRecognitionEvent:W.i,SpeechSynthesisEvent:W.i,StorageEvent:W.i,SyncEvent:W.i,TrackEvent:W.i,TransitionEvent:W.i,WebKitTransitionEvent:W.i,VRDeviceEvent:W.i,VRDisplayEvent:W.i,VRSessionEvent:W.i,MojoInterfaceRequestEvent:W.i,ResourceProgressEvent:W.i,USBConnectionEvent:W.i,IDBVersionChangeEvent:W.i,AudioProcessingEvent:W.i,OfflineAudioCompletionEvent:W.i,WebGLContextEvent:W.i,Event:W.i,InputEvent:W.i,AbsoluteOrientationSensor:W.f,Accelerometer:W.f,AccessibleNode:W.f,AmbientLightSensor:W.f,Animation:W.f,ApplicationCache:W.f,DOMApplicationCache:W.f,OfflineResourceList:W.f,BackgroundFetchRegistration:W.f,BatteryManager:W.f,BroadcastChannel:W.f,CanvasCaptureMediaStreamTrack:W.f,DedicatedWorkerGlobalScope:W.f,EventSource:W.f,FileReader:W.f,FontFaceSet:W.f,Gyroscope:W.f,XMLHttpRequest:W.f,XMLHttpRequestEventTarget:W.f,XMLHttpRequestUpload:W.f,LinearAccelerationSensor:W.f,Magnetometer:W.f,MediaDevices:W.f,MediaKeySession:W.f,MediaQueryList:W.f,MediaRecorder:W.f,MediaSource:W.f,MediaStream:W.f,MediaStreamTrack:W.f,MIDIAccess:W.f,MIDIInput:W.f,MIDIOutput:W.f,MIDIPort:W.f,NetworkInformation:W.f,Notification:W.f,OffscreenCanvas:W.f,OrientationSensor:W.f,PaymentRequest:W.f,Performance:W.f,PermissionStatus:W.f,PresentationAvailability:W.f,PresentationConnection:W.f,PresentationConnectionList:W.f,PresentationRequest:W.f,RelativeOrientationSensor:W.f,RemotePlayback:W.f,RTCDataChannel:W.f,DataChannel:W.f,RTCDTMFSender:W.f,RTCPeerConnection:W.f,webkitRTCPeerConnection:W.f,mozRTCPeerConnection:W.f,ScreenOrientation:W.f,Sensor:W.f,ServiceWorker:W.f,ServiceWorkerContainer:W.f,ServiceWorkerGlobalScope:W.f,ServiceWorkerRegistration:W.f,SharedWorker:W.f,SharedWorkerGlobalScope:W.f,SpeechRecognition:W.f,SpeechSynthesis:W.f,SpeechSynthesisUtterance:W.f,VR:W.f,VRDevice:W.f,VRDisplay:W.f,VRSession:W.f,VisualViewport:W.f,WebSocket:W.f,Worker:W.f,WorkerGlobalScope:W.f,WorkerPerformance:W.f,BluetoothDevice:W.f,BluetoothRemoteGATTCharacteristic:W.f,Clipboard:W.f,MojoInterfaceInterceptor:W.f,USB:W.f,IDBDatabase:W.f,IDBOpenDBRequest:W.f,IDBVersionChangeRequest:W.f,IDBRequest:W.f,IDBTransaction:W.f,AnalyserNode:W.f,RealtimeAnalyserNode:W.f,AudioBufferSourceNode:W.f,AudioDestinationNode:W.f,AudioNode:W.f,AudioScheduledSourceNode:W.f,AudioWorkletNode:W.f,BiquadFilterNode:W.f,ChannelMergerNode:W.f,AudioChannelMerger:W.f,ChannelSplitterNode:W.f,AudioChannelSplitter:W.f,ConstantSourceNode:W.f,ConvolverNode:W.f,DelayNode:W.f,DynamicsCompressorNode:W.f,GainNode:W.f,AudioGainNode:W.f,IIRFilterNode:W.f,MediaElementAudioSourceNode:W.f,MediaStreamAudioDestinationNode:W.f,MediaStreamAudioSourceNode:W.f,OscillatorNode:W.f,Oscillator:W.f,PannerNode:W.f,AudioPannerNode:W.f,webkitAudioPannerNode:W.f,ScriptProcessorNode:W.f,JavaScriptAudioNode:W.f,StereoPannerNode:W.f,WaveShaperNode:W.f,EventTarget:W.f,File:W.aq,FileList:W.c3,FileWriter:W.fy,HTMLFormElement:W.fC,Gamepad:W.ax,History:W.fI,HTMLCollection:W.c5,HTMLFormControlsCollection:W.c5,HTMLOptionsCollection:W.c5,ImageData:W.aS,HTMLImageElement:W.c6,KeyboardEvent:W.bB,Location:W.h0,MediaList:W.hm,MessagePort:W.cd,MIDIInputMap:W.hn,MIDIOutputMap:W.hp,MimeType:W.aA,MimeTypeArray:W.hr,PointerEvent:W.aB,MouseEvent:W.aB,DragEvent:W.aB,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dn,RadioNodeList:W.dn,Plugin:W.aC,PluginArray:W.hH,RTCStatsReport:W.hS,HTMLSelectElement:W.hV,SourceBuffer:W.aE,SourceBufferList:W.i6,SpeechGrammar:W.aF,SpeechGrammarList:W.i7,SpeechRecognitionResult:W.aG,Storage:W.ib,CSSStyleSheet:W.ar,StyleSheet:W.ar,HTMLTableElement:W.dC,HTMLTableRowElement:W.ig,HTMLTableSectionElement:W.ih,HTMLTemplateElement:W.co,TextTrack:W.aH,TextTrackCue:W.as,VTTCue:W.as,TextTrackCueList:W.ik,TextTrackList:W.il,TimeRanges:W.ir,Touch:W.aI,TouchEvent:W.bG,TouchList:W.iv,TrackDefaultList:W.iw,CompositionEvent:W.bk,FocusEvent:W.bk,TextEvent:W.bk,UIEvent:W.bk,URL:W.iS,VideoTrackList:W.j9,WheelEvent:W.bn,Window:W.cy,DOMWindow:W.cy,CSSRuleList:W.ji,ClientRect:W.dW,DOMRect:W.dW,GamepadList:W.jn,NamedNodeMap:W.ee,MozNamedAttrMap:W.ee,SpeechRecognitionResultList:W.jB,StyleSheetList:W.jG,SVGLength:P.aT,SVGLengthList:P.fU,SVGNumber:P.aX,SVGNumberList:P.hC,SVGPointList:P.hK,SVGScriptElement:P.cl,SVGStringList:P.ie,SVGAElement:P.k,SVGAnimateElement:P.k,SVGAnimateMotionElement:P.k,SVGAnimateTransformElement:P.k,SVGAnimationElement:P.k,SVGCircleElement:P.k,SVGClipPathElement:P.k,SVGDefsElement:P.k,SVGDescElement:P.k,SVGDiscardElement:P.k,SVGEllipseElement:P.k,SVGFEBlendElement:P.k,SVGFEColorMatrixElement:P.k,SVGFEComponentTransferElement:P.k,SVGFECompositeElement:P.k,SVGFEConvolveMatrixElement:P.k,SVGFEDiffuseLightingElement:P.k,SVGFEDisplacementMapElement:P.k,SVGFEDistantLightElement:P.k,SVGFEFloodElement:P.k,SVGFEFuncAElement:P.k,SVGFEFuncBElement:P.k,SVGFEFuncGElement:P.k,SVGFEFuncRElement:P.k,SVGFEGaussianBlurElement:P.k,SVGFEImageElement:P.k,SVGFEMergeElement:P.k,SVGFEMergeNodeElement:P.k,SVGFEMorphologyElement:P.k,SVGFEOffsetElement:P.k,SVGFEPointLightElement:P.k,SVGFESpecularLightingElement:P.k,SVGFESpotLightElement:P.k,SVGFETileElement:P.k,SVGFETurbulenceElement:P.k,SVGFilterElement:P.k,SVGForeignObjectElement:P.k,SVGGElement:P.k,SVGGeometryElement:P.k,SVGGraphicsElement:P.k,SVGImageElement:P.k,SVGLineElement:P.k,SVGLinearGradientElement:P.k,SVGMarkerElement:P.k,SVGMaskElement:P.k,SVGMetadataElement:P.k,SVGPathElement:P.k,SVGPatternElement:P.k,SVGPolygonElement:P.k,SVGPolylineElement:P.k,SVGRadialGradientElement:P.k,SVGRectElement:P.k,SVGSetElement:P.k,SVGStopElement:P.k,SVGStyleElement:P.k,SVGSVGElement:P.k,SVGSwitchElement:P.k,SVGSymbolElement:P.k,SVGTSpanElement:P.k,SVGTextContentElement:P.k,SVGTextElement:P.k,SVGTextPathElement:P.k,SVGTextPositioningElement:P.k,SVGTitleElement:P.k,SVGUseElement:P.k,SVGViewElement:P.k,SVGGradientElement:P.k,SVGComponentTransferFunctionElement:P.k,SVGFEDropShadowElement:P.k,SVGMPathElement:P.k,SVGElement:P.k,SVGTransform:P.b_,SVGTransformList:P.ix,AudioBuffer:P.eY,AudioParamMap:P.eZ,AudioTrackList:P.f0,AudioContext:P.bq,webkitAudioContext:P.bq,BaseAudioContext:P.bq,OfflineAudioContext:P.hD,WebGL2RenderingContext:P.dv,SQLResultSetRowList:P.i9})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLBodyElement:true,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,HTMLDivElement:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGScriptElement:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dk.$nativeSuperclassTag="ArrayBufferView"
H.cB.$nativeSuperclassTag="ArrayBufferView"
H.cC.$nativeSuperclassTag="ArrayBufferView"
H.cg.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cE.$nativeSuperclassTag="ArrayBufferView"
H.dl.$nativeSuperclassTag="ArrayBufferView"
W.cF.$nativeSuperclassTag="EventTarget"
W.cG.$nativeSuperclassTag="EventTarget"
W.cH.$nativeSuperclassTag="EventTarget"
W.cI.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(R.ml,[])
else R.ml([])})})()
//# sourceMappingURL=test.dart.js.map
