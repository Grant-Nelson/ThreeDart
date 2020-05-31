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
a[c]=function(){a[c]=function(){H.pQ(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.lx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.lx(this,a,b,c,true,false,e).prototype
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
if(w[u][a])return w[u][a]}}var C={},H={lc:function lc(){},
kL:function(a){var u,t=a^48
if(t<=9)return t
u=a|32
if(97<=u&&u<=102)return u-87
return-1},
nV:function(a,b,c,d){if(!!J.H(a).$ir)return new H.fY(a,b,[c,d])
return new H.cx(a,b,[c,d])},
nN:function(){return new P.dU("No element")},
oj:function(a,b){var u=J.ar(a)
if(typeof u!=="number")return u.n()
H.dQ(a,0,u-1,b)},
dQ:function(a,b,c,d){if(c-b<=32)H.oi(a,b,c,d)
else H.oh(a,b,c,d)},
oi:function(a,b,c,d){var u,t,s,r,q,p
for(u=b+1,t=J.ag(a);u<=c;++u){s=t.h(a,u)
r=u
while(!0){if(r>b){q=d.$2(t.h(a,r-1),s)
if(typeof q!=="number")return q.a0()
q=q>0}else q=!1
if(!q)break
p=r-1
t.k(a,r,t.h(a,p))
r=p}t.k(a,r,s)}},
oh:function(a3,a4,a5,a6){var u,t,s,r,q,p,o,n,m,l,k,j=C.c.a5(a5-a4+1,6),i=a4+j,h=a5-j,g=C.c.a5(a4+a5,2),f=g-j,e=g+j,d=J.ag(a3),c=d.h(a3,i),b=d.h(a3,f),a=d.h(a3,g),a0=d.h(a3,e),a1=d.h(a3,h),a2=a6.$2(c,b)
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
a0=u}d.k(a3,i,c)
d.k(a3,g,a)
d.k(a3,h,a1)
d.k(a3,f,d.h(a3,a4))
d.k(a3,e,d.h(a3,a5))
t=a4+1
s=a5-1
if(J.K(a6.$2(b,a0),0)){for(r=t;r<=s;++r){q=d.h(a3,r)
p=a6.$2(q,b)
if(p===0)continue
if(typeof p!=="number")return p.B()
if(p<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else for(;!0;){p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.a0()
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
if(typeof l!=="number")return l.B()
if(l<0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else{k=a6.$2(q,a0)
if(typeof k!=="number")return k.a0()
if(k>0)for(;!0;){p=a6.$2(d.h(a3,s),a0)
if(typeof p!=="number")return p.a0()
if(p>0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.B()
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
H.dQ(a3,a4,t-2,a6)
H.dQ(a3,s+2,a5,a6)
if(m)return
if(t<i&&s>h){for(;J.K(a6.$2(d.h(a3,t),b),0);)++t
for(;J.K(a6.$2(d.h(a3,s),a0),0);)--s
for(r=t;r<=s;++r){q=d.h(a3,r)
if(a6.$2(q,b)===0){if(r!==t){d.k(a3,r,d.h(a3,t))
d.k(a3,t,q)}++t}else if(a6.$2(q,a0)===0)for(;!0;)if(a6.$2(d.h(a3,s),a0)===0){--s
if(s<r)break
continue}else{p=a6.$2(d.h(a3,s),b)
if(typeof p!=="number")return p.B()
o=s-1
if(p<0){d.k(a3,r,d.h(a3,t))
n=t+1
d.k(a3,t,d.h(a3,s))
d.k(a3,s,q)
t=n}else{d.k(a3,r,d.h(a3,s))
d.k(a3,s,q)}s=o
break}}H.dQ(a3,t,s,a6)}else H.dQ(a3,t,s,a6)},
R:function R(a){this.a=a},
r:function r(){},
cw:function cw(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
cx:function cx(a,b,c){this.a=a
this.b=b
this.$ti=c},
fY:function fY(a,b,c){this.a=a
this.b=b
this.$ti=c},
dv:function dv(a,b){this.a=null
this.b=a
this.c=b},
jD:function jD(a,b,c){this.a=a
this.b=b
this.$ti=c},
jE:function jE(a,b){this.a=a
this.b=b},
di:function di(){},
jg:function jg(){},
e5:function e5(){},
nH:function(){throw H.e(P.z("Cannot modify unmodifiable Map"))},
d2:function(a){var u,t=H.pR(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
pA:function(a){return v.types[a]},
mW:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.H(a).$iC},
f:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aF(a)
if(typeof u!=="string")throw H.e(H.a9(a))
return u},
cG:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
m8:function(a,b){var u,t,s,r,q,p=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(p==null)return
if(3>=p.length)return H.d(p,3)
u=p[3]
if(b==null){if(u!=null)return parseInt(a,10)
if(p[2]!=null)return parseInt(a,16)
return}if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
if(b===10&&u!=null)return parseInt(a,10)
if(b<10||u==null){t=b<=10?47+b:86+b
s=p[1]
for(r=s.length,q=0;q<r;++q)if((C.a.H(s,q)|32)>t)return}return parseInt(a,b)},
cH:function(a){return H.o0(a)+H.mG(H.cf(a),0,null)},
o0:function(a){var u,t,s,r,q,p,o,n=J.H(a),m=n.constructor
if(typeof m=="function"){u=m.name
t=typeof u==="string"?u:null}else t=null
s=t==null
if(s||n===C.T||!!n.$ibD){r=C.t(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?null:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
return H.d2(t.length>1&&C.a.H(t,0)===36?C.a.am(t,1):t)},
o1:function(){if(!!self.location)return self.location.href
return},
m7:function(a){var u,t,s,r,q=a.length
if(q<=500)return String.fromCharCode.apply(null,a)
for(u="",t=0;t<q;t=s){s=t+500
r=s<q?s:q
u+=String.fromCharCode.apply(null,a.slice(t,r))}return u},
o9:function(a){var u,t,s,r=H.b([],[P.n])
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.a9(s))
if(s<=65535)r.push(s)
else if(s<=1114111){r.push(55296+(C.c.ba(s-65536,10)&1023))
r.push(56320+(s&1023))}else throw H.e(H.a9(s))}return H.m7(r)},
m9:function(a){var u,t,s
for(u=a.length,t=0;t<u;++t){s=a[t]
if(typeof s!=="number"||Math.floor(s)!==s)throw H.e(H.a9(s))
if(s<0)throw H.e(H.a9(s))
if(s>65535)return H.o9(a)}return H.m7(a)},
oa:function(a,b,c){var u,t,s,r
if(typeof c!=="number")return c.k5()
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(u=b,t="";u<c;u=s){s=u+500
if(s<c)r=s
else r=c
t+=String.fromCharCode.apply(null,a.subarray(u,r))}return t},
dI:function(a){var u
if(0<=a){if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){u=a-65536
return String.fromCharCode((55296|C.c.ba(u,10))>>>0,56320|u&1023)}}throw H.e(P.a0(a,0,1114111,null,null))},
bZ:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
o8:function(a){var u=H.bZ(a).getFullYear()+0
return u},
o6:function(a){var u=H.bZ(a).getMonth()+1
return u},
o2:function(a){var u=H.bZ(a).getDate()+0
return u},
o3:function(a){var u=H.bZ(a).getHours()+0
return u},
o5:function(a){var u=H.bZ(a).getMinutes()+0
return u},
o7:function(a){var u=H.bZ(a).getSeconds()+0
return u},
o4:function(a){var u=H.bZ(a).getMilliseconds()+0
return u},
c:function(a){throw H.e(H.a9(a))},
d:function(a,b){if(a==null)J.ar(a)
throw H.e(H.be(a,b))},
be:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.aG(!0,b,s,null)
u=J.ar(a)
if(!(b<0)){if(typeof u!=="number")return H.c(u)
t=b>=u}else t=!0
if(t)return P.M(b,a,s,null,u)
return P.dJ(b,s)},
pv:function(a,b,c){var u="Invalid value"
if(a>c)return new P.bz(0,c,!0,a,"start",u)
if(b!=null)if(b<a||b>c)return new P.bz(a,c,!0,b,"end",u)
return new P.aG(!0,b,"end",null)},
a9:function(a){return new P.aG(!0,a,null,null)},
cd:function(a){if(typeof a!=="number")throw H.e(H.a9(a))
return a},
e:function(a){var u
if(a==null)a=new P.cE()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.n2})
u.name=""}else u.toString=H.n2
return u},
n2:function(){return J.aF(this.dartException)},
u:function(a){throw H.e(a)},
q:function(a){throw H.e(P.bN(a))},
aY:function(a){var u,t,s,r,q,p
a=H.n_(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.b([],[P.o])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.j4(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
j5:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
mh:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
m3:function(a,b){return new H.hY(a,b==null?null:b.method)},
ld:function(a,b){var u=b==null,t=u?null:b.method
return new H.hk(a,t,u?null:b.receiver)},
aB:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.kV(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.c.ba(t,16)&8191)===10)switch(s){case 438:return f.$1(H.ld(H.f(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.m3(H.f(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.n9()
q=$.na()
p=$.nb()
o=$.nc()
n=$.nf()
m=$.ng()
l=$.ne()
$.nd()
k=$.ni()
j=$.nh()
i=r.ar(u)
if(i!=null)return f.$1(H.ld(u,i))
else{i=q.ar(u)
if(i!=null){i.method="call"
return f.$1(H.ld(u,i))}else{i=p.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=n.ar(u)
if(i==null){i=m.ar(u)
if(i==null){i=l.ar(u)
if(i==null){i=o.ar(u)
if(i==null){i=k.ar(u)
if(i==null){i=j.ar(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.m3(u,i))}}return f.$1(new H.jf(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.dS()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.aG(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.dS()
return a},
cg:function(a){var u
if(a==null)return new H.eL(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.eL(a)},
mR:function(a,b){var u,t,s,r=a.length
for(u=0;u<r;u=s){t=u+1
s=t+1
b.k(0,a[u],a[t])}return b},
pE:function(a,b,c,d,e,f){switch(b){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(P.v("Unsupported number of arguments for wrapped closure"))},
bc:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.pE)
a.$identity=u
return u},
nG:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.iH().constructor.prototype):Object.create(new H.cm(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.aH
if(typeof t!=="number")return t.l()
$.aH=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.lS(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.nC(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.lS(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
nC:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.pA,a)
if(typeof a=="function")if(b)return a
else{u=c?H.lR:H.l3
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.e("Error in functionType of tearoff")},
nD:function(a,b,c,d){var u=H.l3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
lS:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.nF(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.nD(t,!r,u,b)
if(t===0){r=$.aH
if(typeof r!=="number")return r.l()
$.aH=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.cn
return new Function(r+H.f(q==null?$.cn=H.fB("self"):q)+";return "+p+"."+H.f(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.aH
if(typeof r!=="number")return r.l()
$.aH=r+1
o+=r
r="return function("+o+"){return this."
q=$.cn
return new Function(r+H.f(q==null?$.cn=H.fB("self"):q)+"."+H.f(u)+"("+o+");}")()},
nE:function(a,b,c,d){var u=H.l3,t=H.lR
switch(b?-1:a){case 0:throw H.e(H.of("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
nF:function(a,b){var u,t,s,r,q,p,o,n=$.cn
if(n==null)n=$.cn=H.fB("self")
u=$.lQ
if(u==null)u=$.lQ=H.fB("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.nE(s,!q,t,b)
if(s===1){n="return function(){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+");"
u=$.aH
if(typeof u!=="number")return u.l()
$.aH=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.f(n)+"."+H.f(t)+"(this."+H.f(u)+", "+o+");"
u=$.aH
if(typeof u!=="number")return u.l()
$.aH=u+1
return new Function(n+u+"}")()},
lx:function(a,b,c,d,e,f,g){return H.nG(a,b,c,d,!!e,!!f,g)},
l3:function(a){return a.a},
lR:function(a){return a.c},
fB:function(a){var u,t,s,r=new H.cm("self","target","receiver","name"),q=J.la(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
pL:function(a,b){throw H.e(H.nA(a,H.d2(b.substring(2))))},
k:function(a,b){var u
if(a!=null)u=(typeof a==="object"||typeof a==="function")&&J.H(a)[b]
else u=!0
if(u)return a
H.pL(a,b)},
mQ:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[u]
else return a.$S()}return},
ly:function(a,b){var u
if(typeof a=="function")return!0
u=H.mQ(J.H(a))
if(u==null)return!1
return H.mF(u,null,b,null)},
nA:function(a,b){return new H.fC("CastError: "+P.l8(a)+": type '"+H.f(H.po(a))+"' is not a subtype of type '"+b+"'")},
po:function(a){var u,t=J.H(a)
if(!!t.$icp){u=H.mQ(t)
if(u!=null)return H.pM(u)
return"Closure"}return H.cH(a)},
pQ:function(a){throw H.e(new P.fR(a))},
of:function(a){return new H.il(a)},
mT:function(a){return v.getIsolateTag(a)},
b:function(a,b){a.$ti=b
return a},
cf:function(a){if(a==null)return
return a.$ti},
qU:function(a,b,c){return H.ci(a["$a"+H.f(c)],H.cf(b))},
pz:function(a,b,c,d){var u=H.ci(a["$a"+H.f(c)],H.cf(b))
return u==null?null:u[d]},
mU:function(a,b,c){var u=H.ci(a["$a"+H.f(b)],H.cf(a))
return u==null?null:u[c]},
aA:function(a,b){var u=H.cf(a)
return u==null?null:u[b]},
pM:function(a){return H.bF(a,null)},
bF:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.d2(a[0].name)+H.mG(a,1,b)
if(typeof a=="function")return H.d2(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+H.f(a)
u=b.length
t=u-a-1
if(t<0||t>=u)return H.d(b,t)
return H.f(b[t])}if('func' in a)return H.oU(a,b)
if('futureOr' in a)return"FutureOr<"+H.bF("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
oU:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.b([],[P.o])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)a0.push("T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.d(a0,m)
p=C.a.l(p,a0[m])
l=u[q]
if(l!=null&&l!==P.V)p+=" extends "+H.bF(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.bF(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.bF(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.bF(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.px(d),m=n.length,h="",g=0;g<m;++g,h=b){c=n[g]
i=i+h+H.bF(d[c],a0)+(" "+H.f(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
mG:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.W("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.bF(p,c)}return"<"+u.i(0)+">"},
ci:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
kG:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.cf(a)
t=J.H(a)
if(t[b]==null)return!1
return H.mO(H.ci(t[d],u),null,c,null)},
mO:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.aq(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.aq(a[t],b,c[t],d))return!1
return!0},
qS:function(a,b,c){return a.apply(b,H.ci(J.H(b)["$a"+H.f(c)],H.cf(b)))},
aq:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="V"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="V"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.aq(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return H.aq(b[a],b,c,d)
if(typeof c==="number")return!1
if(a.name==="an")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.aq("type" in a?a.type:l,b,s,d)
else if(H.aq(a,b,s,d))return!0
else{if(!('$i'+"bp" in t.prototype))return!1
r=t.prototype["$a"+"bp"]
q=H.ci(r,u?a.slice(1):l)
return H.aq(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.mF(a,b,c,d)
if('func' in a)return c.name==="qc"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.mO(H.ci(m,u),b,p,d)},
mF:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1
b=b==null?u:u.concat(b)
d=d==null?t:t.concat(d)}else if("bounds" in c)return!1
if(!H.aq(a.ret,b,c.ret,d))return!1
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
for(k=0;k<o;++k)if(!H.aq(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.aq(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.aq(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.pI(h,b,g,d)},
pI:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.aq(c[s],d,a[s],b))return!1}return!0},
qT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
pF:function(a){var u,t,s,r,q=$.mV.$1(a),p=$.kI[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=$.mN.$2(a,q)
if(q!=null){p=$.kI[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.kP[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.kQ(u)
$.kI[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.kP[q]=u
return u}if(s==="-"){r=H.kQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.mY(a,u)
if(s==="*")throw H.e(P.je(q))
if(v.leafTags[q]===true){r=H.kQ(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.mY(a,u)},
mY:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.lB(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
kQ:function(a){return J.lB(a,!1,null,!!a.$iC)},
pH:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.kQ(u)
else return J.lB(u,c,null,null)},
pC:function(){if(!0===$.lA)return
$.lA=!0
H.pD()},
pD:function(){var u,t,s,r,q,p,o,n
$.kI=Object.create(null)
$.kP=Object.create(null)
H.pB()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.mZ.$1(q)
if(p!=null){o=H.pH(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
pB:function(){var u,t,s,r,q,p,o=C.G()
o=H.cc(C.H,H.cc(C.I,H.cc(C.u,H.cc(C.u,H.cc(C.J,H.cc(C.K,H.cc(C.L(C.t),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.mV=new H.kM(r)
$.mN=new H.kN(q)
$.mZ=new H.kO(p)},
cc:function(a,b){return a(b)||b},
nR:function(a,b,c,d,e,f){var u=b?"m":"",t=c?"":"i",s=d?"u":"",r=e?"s":"",q=f?"g":"",p=function(g,h){try{return new RegExp(g,h)}catch(o){return o}}(a,u+t+s+r+q)
if(p instanceof RegExp)return p
throw H.e(P.S("Illegal RegExp pattern ("+String(p)+")",a,null))},
n0:function(a,b,c){var u=a.indexOf(b,c)
return u>=0},
pw:function(a){if(a.indexOf("$",0)>=0)return a.replace(/\$/g,"$$$$")
return a},
n_:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
n1:function(a,b,c){var u=H.pP(a,b,c)
return u},
pP:function(a,b,c){var u,t,s,r
if(b===""){if(a==="")return c
u=a.length
for(t=c,s=0;s<u;++s)t=t+a[s]+c
return t.charCodeAt(0)==0?t:t}r=a.indexOf(b,0)
if(r<0)return a
if(a.length<500||c.indexOf("$",0)>=0)return a.split(b).join(c)
return a.replace(new RegExp(H.n_(b),'g'),H.pw(c))},
fK:function fK(){},
fL:function fL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
j4:function j4(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hY:function hY(a,b){this.a=a
this.b=b},
hk:function hk(a,b,c){this.a=a
this.b=b
this.c=c},
jf:function jf(a){this.a=a},
kV:function kV(a){this.a=a},
eL:function eL(a){this.a=a
this.b=null},
cp:function cp(){},
iN:function iN(){},
iH:function iH(){},
cm:function cm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
fC:function fC(a){this.a=a},
il:function il(a){this.a=a},
F:function F(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
hj:function hj(a){this.a=a},
hn:function hn(a,b){this.a=a
this.b=b
this.c=null},
bV:function bV(a,b){this.a=a
this.$ti=b},
ho:function ho(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
kM:function kM(a){this.a=a},
kN:function kN(a){this.a=a},
kO:function kO(a){this.a=a},
hi:function hi(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
c9:function(a){return a},
nY:function(a){return new Int8Array(a)},
b_:function(a,b,c){if(a>>>0!==a||a>=c)throw H.e(H.be(b,a))},
oS:function(a,b,c){var u
if(!(a>>>0!==a))u=b>>>0!==b||a>b||b>c
else u=!0
if(u)throw H.e(H.pv(a,b,c))
return b},
cC:function cC(){},
bw:function bw(){},
dz:function dz(){},
cD:function cD(){},
dA:function dA(){},
hT:function hT(){},
hU:function hU(){},
hV:function hV(){},
hW:function hW(){},
hX:function hX(){},
dB:function dB(){},
bX:function bX(){},
cR:function cR(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(){},
px:function(a){return J.lU(a?Object.keys(a):[],null)},
pR:function(a){return v.mangledGlobalNames[a]},
pJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}},J={
lB:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
kK:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.lA==null){H.pC()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.e(P.je("Return interceptor for "+H.f(u(a,q))))}s=a.constructor
r=s==null?null:s[$.lM()]
if(r!=null)return r
r=H.pF(a)
if(r!=null)return r
if(typeof a=="function")return C.U
u=Object.getPrototypeOf(a)
if(u==null)return C.A
if(u===Object.prototype)return C.A
if(typeof s=="function"){Object.defineProperty(s,$.lM(),{value:C.p,enumerable:false,writable:true,configurable:true})
return C.p}return C.p},
nO:function(a,b){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(P.fo(a,"length","is not an integer"))
if(a<0||a>4294967295)throw H.e(P.a0(a,0,4294967295,"length",null))
return J.lU(new Array(a),b)},
lU:function(a,b){return J.la(H.b(a,[b]))},
la:function(a){a.fixed$length=Array
return a},
nP:function(a,b){return J.d5(a,b)},
H:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.dm.prototype
return J.dl.prototype}if(typeof a=="string")return J.bt.prototype
if(a==null)return J.dn.prototype
if(typeof a=="boolean")return J.hh.prototype
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
ag:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
kJ:function(a){if(a==null)return a
if(a.constructor==Array)return J.bs.prototype
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
mS:function(a){if(typeof a=="number")return J.bT.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.bD.prototype
return a},
py:function(a){if(typeof a=="number")return J.bT.prototype
if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.bD.prototype
return a},
lz:function(a){if(typeof a=="string")return J.bt.prototype
if(a==null)return a
if(!(a instanceof P.V))return J.bD.prototype
return a},
f8:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.bu.prototype
return a}if(a instanceof P.V)return a
return J.kK(a)},
K:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.H(a).p(a,b)},
ck:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.mW(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.ag(a).h(a,b)},
kZ:function(a,b,c){if(typeof b==="number")if((a.constructor==Array||H.mW(a,a[v.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.kJ(a).k(a,b,c)},
np:function(a,b){return J.lz(a).H(a,b)},
nq:function(a,b,c){return J.f8(a).ib(a,b,c)},
nr:function(a,b,c,d){return J.f8(a).iG(a,b,c,d)},
ns:function(a,b){return J.lz(a).V(a,b)},
d5:function(a,b){return J.py(a).ax(a,b)},
l_:function(a,b){return J.ag(a).T(a,b)},
l0:function(a,b){return J.kJ(a).L(a,b)},
nt:function(a,b,c,d){return J.f8(a).e6(a,b,c,d)},
l1:function(a){return J.mS(a).bP(a)},
lO:function(a,b){return J.kJ(a).I(a,b)},
nu:function(a){return J.f8(a).gcr(a)},
cl:function(a){return J.H(a).gG(a)},
b0:function(a){return J.kJ(a).gW(a)},
ar:function(a){return J.ag(a).gm(a)},
nv:function(a,b){return J.f8(a).jF(a,b)},
l2:function(a){return J.mS(a).az(a)},
aF:function(a){return J.H(a).i(a)},
a:function a(){},
hh:function hh(){},
dn:function dn(){},
dp:function dp(){},
i2:function i2(){},
bD:function bD(){},
bu:function bu(){},
bs:function bs(a){this.$ti=a},
lb:function lb(a){this.$ti=a},
aa:function aa(a,b){var _=this
_.a=a
_.b=b
_.c=0
_.d=null},
bT:function bT(){},
dm:function dm(){},
dl:function dl(){},
bt:function bt(){}},P={
ou:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.pp()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.bc(new P.jH(s),1)).observe(u,{childList:true})
return new P.jG(s,u,t)}else if(self.setImmediate!=null)return P.pq()
return P.pr()},
ov:function(a){self.scheduleImmediate(H.bc(new P.jI(a),0))},
ow:function(a){self.setImmediate(H.bc(new P.jJ(a),0))},
ox:function(a){P.lk(C.k,a)},
lk:function(a,b){var u=C.c.a5(a.a,1000)
return P.oC(u<0?0:u,b)},
mg:function(a,b){var u=C.c.a5(a.a,1000)
return P.oD(u<0?0:u,b)},
oC:function(a,b){var u=new P.eR()
u.fc(a,b)
return u},
oD:function(a,b){var u=new P.eR()
u.fd(a,b)
return u},
qP:function(a){return new P.c6(a,1)},
oy:function(){return C.a3},
oz:function(a){return new P.c6(a,3)},
oY:function(a,b){return new P.kn(a,[b])},
mx:function(a,b){var u,t,s
b.a=1
try{a.eC(new P.jW(b),new P.jX(b),P.an)}catch(s){u=H.aB(s)
t=H.cg(s)
P.pN(new P.jY(b,u,t))}},
jV:function(a,b){var u,t
for(;u=a.a,u===2;)a=a.c
if(u>=4){t=b.bG()
b.a=a.a
b.c=a.c
P.c5(b,t)}else{t=b.c
b.a=2
b.c=a
a.dt(t)}},
c5:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j=null,i={},h=i.a=a
for(;!0;){u={}
t=h.a===8
if(b==null){if(t){s=h.c
P.kE(j,j,h.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.c5(i.a,b)}h=i.a
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
if(n){P.kE(j,j,h.b,q.a,q.b)
return}m=$.N
if(m!==o)$.N=o
else m=j
h=b.c
if((h&15)===8)new P.k2(i,u,b,t).$0()
else if(s){if((h&1)!==0)new P.k1(u,b,q).$0()}else if((h&2)!==0)new P.k0(i,u,b).$0()
if(m!=null)$.N=m
h=u.b
if(!!J.H(h).$ibp){if(h.a>=4){l=p.c
p.c=null
b=p.bH(l)
p.a=h.a
p.c=h.c
i.a=h
continue}else P.jV(h,p)
return}}k=b.b
l=k.c
k.c=null
b=k.bH(l)
h=u.a
s=u.b
if(!h){k.a=4
k.c=s}else{k.a=8
k.c=s}i.a=k
h=k}},
pk:function(a,b){if(H.ly(a,{func:1,args:[P.V,P.bA]}))return a
if(H.ly(a,{func:1,args:[P.V]}))return a
throw H.e(P.fo(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
pj:function(){var u,t
for(;u=$.ca,u!=null;){$.d1=null
t=u.b
$.ca=t
if(t==null)$.d0=null
u.a.$0()}},
pn:function(){$.lv=!0
try{P.pj()}finally{$.d1=null
$.lv=!1
if($.ca!=null)$.lN().$1(P.mP())}},
mL:function(a){var u=new P.ed(a)
if($.ca==null){$.ca=$.d0=u
if(!$.lv)$.lN().$1(P.mP())}else $.d0=$.d0.b=u},
pm:function(a){var u,t,s=$.ca
if(s==null){P.mL(a)
$.d1=$.d0
return}u=new P.ed(a)
t=$.d1
if(t==null){u.b=s
$.ca=$.d1=u}else{u.b=t.b
$.d1=t.b=u
if(u.b==null)$.d0=u}},
pN:function(a){var u=null,t=$.N
if(C.e===t){P.cb(u,u,C.e,a)
return}P.cb(u,u,t,t.cn(a))},
lj:function(a,b){var u=$.N
if(u===C.e)return P.lk(a,b)
return P.lk(a,u.cn(b))},
iZ:function(a,b){var u=$.N
if(u===C.e)return P.mg(a,b)
return P.mg(a,u.dM(b,P.e_))},
kE:function(a,b,c,d,e){var u={}
u.a=d
P.pm(new P.kF(u,e))},
mH:function(a,b,c,d){var u,t=$.N
if(t===c)return d.$0()
$.N=c
u=t
try{t=d.$0()
return t}finally{$.N=u}},
mI:function(a,b,c,d,e){var u,t=$.N
if(t===c)return d.$1(e)
$.N=c
u=t
try{t=d.$1(e)
return t}finally{$.N=u}},
pl:function(a,b,c,d,e,f){var u,t=$.N
if(t===c)return d.$2(e,f)
$.N=c
u=t
try{t=d.$2(e,f)
return t}finally{$.N=u}},
cb:function(a,b,c,d){var u=C.e!==c
if(u)d=!(!u||!1)?c.cn(d):c.iL(d)
P.mL(d)},
jH:function jH(a){this.a=a},
jG:function jG(a,b,c){this.a=a
this.b=b
this.c=c},
jI:function jI(a){this.a=a},
jJ:function jJ(a){this.a=a},
eR:function eR(){this.c=0},
kp:function kp(a,b){this.a=a
this.b=b},
ko:function ko(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c6:function c6(a,b){this.a=a
this.b=b},
cX:function cX(a){var _=this
_.a=a
_.d=_.c=_.b=null},
kn:function kn(a,b){this.a=a
this.$ti=b},
jM:function jM(){},
jF:function jF(a,b){this.a=a
this.$ti=b},
jR:function jR(a,b,c,d){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d},
aZ:function aZ(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
jS:function jS(a,b){this.a=a
this.b=b},
k_:function k_(a,b){this.a=a
this.b=b},
jW:function jW(a){this.a=a},
jX:function jX(a){this.a=a},
jY:function jY(a,b,c){this.a=a
this.b=b
this.c=c},
jU:function jU(a,b){this.a=a
this.b=b},
jZ:function jZ(a,b){this.a=a
this.b=b},
jT:function jT(a,b,c){this.a=a
this.b=b
this.c=c},
k2:function k2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
k3:function k3(a){this.a=a},
k1:function k1(a,b,c){this.a=a
this.b=b
this.c=c},
k0:function k0(a,b,c){this.a=a
this.b=b
this.c=c},
ed:function ed(a){this.a=a
this.b=null},
dV:function dV(){},
iK:function iK(){},
e_:function e_(){},
bH:function bH(a,b){this.a=a
this.b=b},
kx:function kx(){},
kF:function kF(a,b){this.a=a
this.b=b},
kb:function kb(){},
kd:function kd(a,b){this.a=a
this.b=b},
kc:function kc(a,b){this.a=a
this.b=b},
ke:function ke(a,b,c){this.a=a
this.b=b
this.c=c},
nS:function(a,b,c){return H.mR(a,new H.F([b,c]))},
lV:function(a,b){return new H.F([a,b])},
nT:function(a){return H.mR(a,new H.F([null,null]))},
lW:function(a){return new P.k8([a])},
lq:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
oB:function(a,b){var u=new P.et(a,b)
u.c=a.e
return u},
nM:function(a,b,c){var u,t
if(P.lw(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.b([],[P.o])
$.af.push(a)
try{P.oX(a,u)}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}t=P.me(b,u,", ")+c
return t.charCodeAt(0)==0?t:t},
l9:function(a,b,c){var u,t
if(P.lw(a))return b+"..."+c
u=new P.W(b)
$.af.push(a)
try{t=u
t.a=P.me(t.a,a,", ")}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
lw:function(a){var u,t
for(u=$.af.length,t=0;t<u;++t)if(a===$.af[t])return!0
return!1},
oX:function(a,b){var u,t,s,r,q,p,o,n=a.gW(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.w())return
u=H.f(n.gK(n))
b.push(u)
m+=u.length+2;++l}if(!n.w()){if(l<=5)return
if(0>=b.length)return H.d(b,-1)
t=b.pop()
if(0>=b.length)return H.d(b,-1)
s=b.pop()}else{r=n.gK(n);++l
if(!n.w()){if(l<=4){b.push(H.f(r))
return}t=H.f(r)
if(0>=b.length)return H.d(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gK(n);++l
for(;n.w();r=q,q=p){p=n.gK(n);++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2;--l}b.push("...")
return}}s=H.f(r)
t=H.f(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.d(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)b.push(o)
b.push(s)
b.push(t)},
le:function(a){var u,t={}
if(P.lw(a))return"{...}"
u=new P.W("")
try{$.af.push(a)
u.a+="{"
t.a=!0
J.lO(a,new P.hu(t,u))
u.a+="}"}finally{if(0>=$.af.length)return H.d($.af,-1)
$.af.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
k8:function k8(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
k9:function k9(a){this.a=a
this.c=this.b=null},
et:function et(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
hf:function hf(){},
hp:function hp(){},
w:function w(){},
ht:function ht(){},
hu:function hu(a,b){this.a=a
this.b=b},
ac:function ac(){},
kq:function kq(){},
hv:function hv(){},
e6:function e6(a,b){this.a=a
this.$ti=b},
kf:function kf(){},
eu:function eu(){},
eX:function eX(){},
oo:function(a,b,c,d){if(b instanceof Uint8Array)return P.op(!1,b,c,d)
return},
op:function(a,b,c,d){var u,t,s=$.nj()
if(s==null)return
u=0===c
if(u&&!0)return P.ln(s,b)
t=b.length
d=P.ba(c,d,t)
if(u&&d===t)return P.ln(s,b)
return P.ln(s,b.subarray(c,d))},
ln:function(a,b){if(P.or(b))return
return P.os(a,b)},
os:function(a,b){var u,t
try{u=a.decode(b)
return u}catch(t){H.aB(t)}return},
or:function(a){var u,t=a.length-2
for(u=0;u<t;++u)if(a[u]===237)if((a[u+1]&224)===160)return!0
return!1},
oq:function(){var u,t
try{u=new TextDecoder("utf-8",{fatal:true})
return u}catch(t){H.aB(t)}return},
mK:function(a,b,c){var u,t,s
if(typeof c!=="number")return H.c(c)
u=J.ag(a)
t=b
for(;t<c;++t){s=u.h(a,t)
if(typeof s!=="number")return s.ab()
if((s&127)!==s)return t-b}return c-b},
lP:function(a,b,c,d,e,f){if(C.c.aZ(f,4)!==0)throw H.e(P.S("Invalid base64 padding, padded length must be multiple of four, is "+f,a,c))
if(d+e!==f)throw H.e(P.S("Invalid base64 padding, '=' not at the end",a,b))
if(e>2)throw H.e(P.S("Invalid base64 padding, more than two '=' characters",a,b))},
fx:function fx(){},
fy:function fy(){},
fF:function fF(){},
fM:function fM(){},
fZ:function fZ(){},
jo:function jo(){},
jq:function jq(){},
kw:function kw(a){this.b=0
this.c=a},
jp:function jp(a){this.a=a},
kv:function kv(a,b){var _=this
_.a=a
_.b=b
_.c=!0
_.f=_.e=_.d=0},
ch:function(a,b,c){var u=H.m8(a,c)
if(u!=null)return u
if(b!=null)return b.$1(a)
throw H.e(P.S(a,null,null))},
nK:function(a){if(a instanceof H.cp)return a.i(0)
return"Instance of '"+H.f(H.cH(a))+"'"},
nU:function(a,b,c){var u,t,s=J.nO(a,c)
if(a!==0&&!0)for(u=s.length,t=0;t<u;++t)s[t]=b
return s},
hq:function(a,b,c){var u,t=H.b([],[c])
for(u=J.b0(a);u.w();)t.push(u.gK(u))
if(b)return t
return J.la(t)},
cI:function(a,b,c){var u,t
if(typeof a==="object"&&a!==null&&a.constructor===Array){u=a.length
c=P.ba(b,c,u)
if(b<=0){if(typeof c!=="number")return c.B()
t=c<u}else t=!0
return H.m9(t?C.b.eR(a,b,c):a)}if(!!J.H(a).$ibX)return H.oa(a,b,P.ba(b,c,a.length))
return P.ok(a,b,c)},
ok:function(a,b,c){var u,t,s,r,q=null
if(b<0)throw H.e(P.a0(b,0,J.ar(a),q,q))
u=c==null
if(!u&&c<b)throw H.e(P.a0(c,b,J.ar(a),q,q))
t=J.b0(a)
for(s=0;s<b;++s)if(!t.w())throw H.e(P.a0(b,0,s,q,q))
r=[]
if(u)for(;t.w();)r.push(t.gK(t))
else for(s=b;s<c;++s){if(!t.w())throw H.e(P.a0(c,b,s,q,q))
r.push(t.gK(t))}return H.m9(r)},
od:function(a){return new H.hi(a,H.nR(a,!1,!0,!1,!1,!1))},
me:function(a,b,c){var u=J.b0(b)
if(!u.w())return a
if(c.length===0){do a+=H.f(u.gK(u))
while(u.w())}else{a+=H.f(u.gK(u))
for(;u.w();)a=a+c+H.f(u.gK(u))}return a},
mj:function(){var u=H.o1()
if(u!=null)return P.on(u)
throw H.e(P.z("'Uri.base' is not supported"))},
eY:function(a,b,c,d){var u,t,s,r,q,p,o="0123456789ABCDEF"
if(c===C.f){u=$.nn().b
if(typeof b!=="string")H.u(H.a9(b))
u=u.test(b)}else u=!1
if(u)return b
t=c.gj5().ct(b)
for(u=t.length,s=0,r="";s<u;++s){q=t[s]
if(q<128){p=q>>>4
if(p>=8)return H.d(a,p)
p=(a[p]&1<<(q&15))!==0}else p=!1
if(p)r+=H.dI(q)
else r=d&&q===32?r+"+":r+"%"+o[q>>>4&15]+o[q&15]}return r.charCodeAt(0)==0?r:r},
nI:function(a){var u=Math.abs(a),t=a<0?"-":""
if(u>=1000)return""+a
if(u>=100)return t+"0"+u
if(u>=10)return t+"00"+u
return t+"000"+u},
nJ:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
dd:function(a){if(a>=10)return""+a
return"0"+a},
lT:function(a){return new P.as(1000*a)},
l8:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.nK(a)},
d6:function(a){return new P.aG(!1,null,null,a)},
fo:function(a,b,c){return new P.aG(!0,a,b,c)},
ob:function(a){var u=null
return new P.bz(u,u,!1,u,u,a)},
dJ:function(a,b){return new P.bz(null,null,!0,a,b,"Value not in range")},
a0:function(a,b,c,d,e){return new P.bz(b,c,!0,a,d,"Invalid value")},
ba:function(a,b,c){var u
if(typeof a!=="number")return H.c(a)
if(0<=a){if(typeof c!=="number")return H.c(c)
u=a>c}else u=!0
if(u)throw H.e(P.a0(a,0,c,"start",null))
if(b!=null){if(!(a>b)){if(typeof c!=="number")return H.c(c)
u=b>c}else u=!0
if(u)throw H.e(P.a0(b,a,c,"end",null))
return b}return c},
ma:function(a,b){if(typeof a!=="number")return a.B()
if(a<0)throw H.e(P.a0(a,0,null,b,null))},
M:function(a,b,c,d,e){var u=e==null?J.ar(b):e
return new P.hd(u,!0,a,c,"Index out of range")},
z:function(a){return new P.jh(a)},
je:function(a){return new P.jd(a)},
md:function(a){return new P.dU(a)},
bN:function(a){return new P.fJ(a)},
v:function(a){return new P.em(a)},
S:function(a,b,c){return new P.h9(a,b,c)},
dt:function(a,b,c){var u,t,s=H.b([],[c])
C.b.sm(s,a)
for(u=0;u<a;++u){t=b.$1(u)
if(u>=s.length)return H.d(s,u)
s[u]=t}return s},
lD:function(a){H.pJ(a)},
on:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a.length
if(e>=5){u=((C.a.H(a,4)^58)*3|C.a.H(a,0)^100|C.a.H(a,1)^97|C.a.H(a,2)^116|C.a.H(a,3)^97)>>>0
if(u===0)return P.mi(e<e?C.a.v(a,0,e):a,5,f).geF()
else if(u===32)return P.mi(C.a.v(a,5,e),0,f).geF()}t=new Array(8)
t.fixed$length=Array
s=H.b(t,[P.n])
s[0]=0
s[1]=-1
s[2]=-1
s[7]=-1
s[3]=0
s[4]=0
s[5]=e
s[6]=e
if(P.mJ(a,0,e,0,s)>=14)s[7]=e
r=s[1]
if(typeof r!=="number")return r.k0()
if(r>=0)if(P.mJ(a,0,r,20,s)===20)s[7]=r
t=s[2]
if(typeof t!=="number")return t.l()
q=t+1
p=s[3]
o=s[4]
n=s[5]
m=s[6]
if(typeof m!=="number")return m.B()
if(typeof n!=="number")return H.c(n)
if(m<n)n=m
if(typeof o!=="number")return o.B()
if(o<q)o=n
else if(o<=r)o=r+1
if(typeof p!=="number")return p.B()
if(p<q)p=o
t=s[7]
if(typeof t!=="number")return t.B()
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
a=C.a.bi(a,o,n,"/");++e
n=h}k="file"}else if(C.a.ac(a,"http",0)){if(t&&p+3===o&&C.a.ac(a,"80",p+1)){g=o-3
n-=3
m-=3
a=C.a.bi(a,p,o,"")
e-=3
o=g}k="http"}else k=f
else if(r===5&&C.a.ac(a,"https",0)){if(t&&p+4===o&&C.a.ac(a,"443",p+1)){g=o-4
n-=4
m-=4
a=C.a.bi(a,p,o,"")
e-=3
o=g}k="https"}else k=f
l=!0}}}else k=f
if(l){if(e<a.length){a=C.a.v(a,0,e)
r-=0
q-=0
p-=0
o-=0
n-=0
m-=0}return new P.kg(a,r,q,p,o,n,m,k)}return P.oE(a,0,e,r,q,p,o,n,m,k)},
ml:function(a){var u=P.o
return C.b.j8(H.b(a.split("&"),[u]),P.lV(u,u),new P.jm(C.f))},
om:function(a,b,c){var u,t,s,r,q,p,o,n=null,m="IPv4 address should contain exactly 4 parts",l="each part must be in the range 0..255",k=new P.jj(a),j=new Uint8Array(4)
for(u=j.length,t=b,s=t,r=0;t<c;++t){q=C.a.V(a,t)
if(q!==46){if((q^48)>9)k.$2("invalid character",t)}else{if(r===3)k.$2(m,t)
p=P.ch(C.a.v(a,s,t),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
o=r+1
if(r>=u)return H.d(j,r)
j[r]=p
s=t+1
r=o}}if(r!==3)k.$2(m,c)
p=P.ch(C.a.v(a,s,c),n,n)
if(typeof p!=="number")return p.a0()
if(p>255)k.$2(l,s)
if(r>=u)return H.d(j,r)
j[r]=p
return j},
mk:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new P.jk(a),d=new P.jl(e,a)
if(a.length<2)e.$1("address is too short")
u=H.b([],[P.n])
for(t=b,s=t,r=!1,q=!1;t<c;++t){p=C.a.V(a,t)
if(p===58){if(t===b){++t
if(C.a.V(a,t)!==58)e.$2("invalid start colon.",t)
s=t}if(t===s){if(r)e.$2("only one wildcard `::` is allowed",t)
u.push(-1)
r=!0}else u.push(d.$2(s,t))
s=t+1}else if(p===46)q=!0}if(u.length===0)e.$1("too few parts")
o=s===c
n=C.b.gaV(u)
if(o&&n!==-1)e.$2("expected a part after last `:`",c)
if(!o)if(!q)u.push(d.$2(s,c))
else{m=P.om(a,s,c)
u.push((m[0]<<8|m[1])>>>0)
u.push((m[2]<<8|m[3])>>>0)}if(r){if(u.length>7)e.$1("an address with a wildcard must have less than 7 parts")}else if(u.length!==8)e.$1("an address without a wildcard must contain exactly 8 parts")
l=new Uint8Array(16)
for(n=u.length,k=l.length,j=9-n,t=0,i=0;t<n;++t){h=u[t]
if(h===-1)for(g=0;g<j;++g){if(i<0||i>=k)return H.d(l,i)
l[i]=0
f=i+1
if(f>=k)return H.d(l,f)
l[f]=0
i+=2}else{f=C.c.ba(h,8)
if(i<0||i>=k)return H.d(l,i)
l[i]=f
f=i+1
if(f>=k)return H.d(l,f)
l[f]=h&255
i+=2}}return l},
oE:function(a,b,c,d,e,f,g,h,i,j){var u,t,s,r,q,p,o,n=null
if(j==null)if(d>b)j=P.oM(a,b,d)
else{if(d===b)P.c8(a,b,"Invalid empty scheme")
j=""}if(e>b){u=d+3
t=u<e?P.oN(a,u,e-1):""
s=P.oJ(a,e,f,!1)
if(typeof f!=="number")return f.l()
r=f+1
if(typeof g!=="number")return H.c(g)
q=r<g?P.oL(P.ch(C.a.v(a,r,g),new P.kr(a,f),n),j):n}else{q=n
s=q
t=""}p=P.oK(a,g,h,n,j,s!=null)
if(typeof h!=="number")return h.B()
o=h<i?P.ls(a,h+1,i,n):n
return new P.c7(j,t,s,q,p,o,i<c?P.oI(a,i+1,c):n)},
mz:function(a){if(a==="http")return 80
if(a==="https")return 443
return 0},
c8:function(a,b,c){throw H.e(P.S(c,a,b))},
oL:function(a,b){if(a!=null&&a===P.mz(b))return
return a},
oJ:function(a,b,c,d){var u,t,s,r,q,p
if(b===c)return""
if(C.a.V(a,b)===91){if(typeof c!=="number")return c.n()
u=c-1
if(C.a.V(a,u)!==93)P.c8(a,b,"Missing end `]` to match `[` in host")
t=b+1
s=P.oG(a,t,u)
if(typeof s!=="number")return s.B()
if(s<u){r=s+1
q=P.mE(a,C.a.ac(a,"25",r)?s+3:r,u,"%25")}else q=""
P.mk(a,t,s)
return C.a.v(a,b,s).toLowerCase()+q+"]"}if(typeof c!=="number")return H.c(c)
p=b
for(;p<c;++p)if(C.a.V(a,p)===58){s=C.a.bQ(a,"%",b)
if(!(s>=b&&s<c))s=c
if(s<c){r=s+1
q=P.mE(a,C.a.ac(a,"25",r)?s+3:r,c,"%25")}else q=""
P.mk(a,b,s)
return"["+C.a.v(a,b,s)+q+"]"}return P.oP(a,b,c)},
oG:function(a,b,c){var u,t=C.a.bQ(a,"%",b)
if(t>=b){if(typeof c!=="number")return H.c(c)
u=t<c}else u=!1
return u?t:c},
mE:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=d!==""?new P.W(d):null
if(typeof c!=="number")return H.c(c)
u=b
t=u
s=!0
for(;u<c;){r=C.a.V(a,u)
if(r===37){q=P.lt(a,u,!0)
p=q==null
if(p&&s){u+=3
continue}if(l==null)l=new P.W("")
o=l.a+=C.a.v(a,t,u)
if(p)q=C.a.v(a,u,u+3)
else if(q==="%")P.c8(a,u,"ZoneID should not contain % anymore")
l.a=o+q
u+=3
t=u
s=!0}else{if(r<127){p=r>>>4
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(r&15))!==0}else p=!1
if(p){if(s&&65<=r&&90>=r){if(l==null)l=new P.W("")
if(t<u){l.a+=C.a.v(a,t,u)
t=u}s=!1}++u}else{if((r&64512)===55296&&u+1<c){n=C.a.V(a,u+1)
if((n&64512)===56320){r=65536|(r&1023)<<10|n&1023
m=2}else m=1}else m=1
if(l==null)l=new P.W("")
l.a+=C.a.v(a,t,u)
l.a+=P.lr(r)
u+=m
t=u}}}if(l==null)return C.a.v(a,b,c)
if(t<c)l.a+=C.a.v(a,t,c)
p=l.a
return p.charCodeAt(0)==0?p:p},
oP:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k
if(typeof c!=="number")return H.c(c)
u=b
t=u
s=null
r=!0
for(;u<c;){q=C.a.V(a,u)
if(q===37){p=P.lt(a,u,!0)
o=p==null
if(o&&r){u+=3
continue}if(s==null)s=new P.W("")
n=C.a.v(a,t,u)
m=s.a+=!r?n.toLowerCase():n
if(o){p=C.a.v(a,u,u+3)
l=3}else if(p==="%"){p="%25"
l=1}else l=3
s.a=m+p
u+=l
t=u
r=!0}else{if(q<127){o=q>>>4
if(o>=8)return H.d(C.x,o)
o=(C.x[o]&1<<(q&15))!==0}else o=!1
if(o){if(r&&65<=q&&90>=q){if(s==null)s=new P.W("")
if(t<u){s.a+=C.a.v(a,t,u)
t=u}r=!1}++u}else{if(q<=93){o=q>>>4
if(o>=8)return H.d(C.m,o)
o=(C.m[o]&1<<(q&15))!==0}else o=!1
if(o)P.c8(a,u,"Invalid character")
else{if((q&64512)===55296&&u+1<c){k=C.a.V(a,u+1)
if((k&64512)===56320){q=65536|(q&1023)<<10|k&1023
l=2}else l=1}else l=1
if(s==null)s=new P.W("")
n=C.a.v(a,t,u)
s.a+=!r?n.toLowerCase():n
s.a+=P.lr(q)
u+=l
t=u}}}}if(s==null)return C.a.v(a,b,c)
if(t<c){n=C.a.v(a,t,c)
s.a+=!r?n.toLowerCase():n}o=s.a
return o.charCodeAt(0)==0?o:o},
oM:function(a,b,c){var u,t,s,r
if(b===c)return""
if(!P.mB(C.a.H(a,b)))P.c8(a,b,"Scheme not starting with alphabetic character")
for(u=b,t=!1;u<c;++u){s=C.a.H(a,u)
if(s<128){r=s>>>4
if(r>=8)return H.d(C.o,r)
r=(C.o[r]&1<<(s&15))!==0}else r=!1
if(!r)P.c8(a,u,"Illegal scheme character")
if(65<=s&&s<=90)t=!0}a=C.a.v(a,b,c)
return P.oF(t?a.toLowerCase():a)},
oF:function(a){if(a==="http")return"http"
if(a==="file")return"file"
if(a==="https")return"https"
if(a==="package")return"package"
return a},
oN:function(a,b,c){return P.d_(a,b,c,C.W,!1)},
oK:function(a,b,c,d,e,f){var u,t=e==="file",s=t||f,r=a==null
if(r&&!0)return t?"/":""
u=!r?P.d_(a,b,c,C.y,!0):C.l.kl(d,new P.ks(),P.o).u(0,"/")
if(u.length===0){if(t)return"/"}else if(s&&!C.a.al(u,"/"))u="/"+u
return P.oO(u,e,f)},
oO:function(a,b,c){var u=b.length===0
if(u&&!c&&!C.a.al(a,"/"))return P.oQ(a,!u||c)
return P.oR(a)},
ls:function(a,b,c,d){var u,t={}
if(a!=null){if(d!=null)throw H.e(P.d6("Both query and queryParameters specified"))
return P.d_(a,b,c,C.n,!0)}if(d==null)return
u=new P.W("")
t.a=""
d.I(0,new P.kt(new P.ku(t,u)))
t=u.a
return t.charCodeAt(0)==0?t:t},
oI:function(a,b,c){return P.d_(a,b,c,C.n,!0)},
lt:function(a,b,c){var u,t,s,r,q,p=b+2
if(p>=a.length)return"%"
u=C.a.V(a,b+1)
t=C.a.V(a,p)
s=H.kL(u)
r=H.kL(t)
if(s<0||r<0)return"%"
q=s*16+r
if(q<127){p=C.c.ba(q,4)
if(p>=8)return H.d(C.h,p)
p=(C.h[p]&1<<(q&15))!==0}else p=!1
if(p)return H.dI(c&&65<=q&&90>=q?(q|32)>>>0:q)
if(u>=97||t>=97)return C.a.v(a,b,b+3).toUpperCase()
return},
lr:function(a){var u,t,s,r,q,p,o,n,m="0123456789ABCDEF"
if(a<128){u=new Array(3)
u.fixed$length=Array
t=H.b(u,[P.n])
t[0]=37
t[1]=C.a.H(m,a>>>4)
t[2]=C.a.H(m,a&15)}else{if(a>2047)if(a>65535){s=240
r=4}else{s=224
r=3}else{s=192
r=2}u=new Array(3*r)
u.fixed$length=Array
t=H.b(u,[P.n])
for(u=t.length,q=0;--r,r>=0;s=128){p=C.c.im(a,6*r)&63|s
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
q+=3}}return P.cI(t,0,null)},
d_:function(a,b,c,d,e){var u=P.mD(a,b,c,d,e)
return u==null?C.a.v(a,b,c):u},
mD:function(a,b,c,d,e){var u,t,s,r,q,p=!e,o=b,n=o,m=null
while(!0){if(typeof o!=="number")return o.B()
if(typeof c!=="number")return H.c(c)
if(!(o<c))break
c$0:{u=C.a.V(a,o)
if(u<127){t=u>>>4
if(t>=8)return H.d(d,t)
t=(d[t]&1<<(u&15))!==0}else t=!1
if(t)++o
else{if(u===37){s=P.lt(a,o,!1)
if(s==null){o+=3
break c$0}if("%"===s){s="%25"
r=1}else r=3}else{if(p)if(u<=93){t=u>>>4
if(t>=8)return H.d(C.m,t)
t=(C.m[t]&1<<(u&15))!==0}else t=!1
else t=!1
if(t){P.c8(a,o,"Invalid character")
s=null
r=null}else{if((u&64512)===55296){t=o+1
if(t<c){q=C.a.V(a,t)
if((q&64512)===56320){u=65536|(u&1023)<<10|q&1023
r=2}else r=1}else r=1}else r=1
s=P.lr(u)}}if(m==null)m=new P.W("")
m.a+=C.a.v(a,n,o)
m.a+=H.f(s)
if(typeof r!=="number")return H.c(r)
o+=r
n=o}}}if(m==null)return
if(typeof n!=="number")return n.B()
if(n<c)m.a+=C.a.v(a,n,c)
p=m.a
return p.charCodeAt(0)==0?p:p},
mC:function(a){if(C.a.al(a,"."))return!0
return C.a.ec(a,"/.")!==-1},
oR:function(a){var u,t,s,r,q,p,o
if(!P.mC(a))return a
u=H.b([],[P.o])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(J.K(p,"..")){o=u.length
if(o!==0){if(0>=o)return H.d(u,-1)
u.pop()
if(u.length===0)u.push("")}r=!0}else if("."===p)r=!0
else{u.push(p)
r=!1}}if(r)u.push("")
return C.b.u(u,"/")},
oQ:function(a,b){var u,t,s,r,q,p
if(!P.mC(a))return!b?P.mA(a):a
u=H.b([],[P.o])
for(t=a.split("/"),s=t.length,r=!1,q=0;q<s;++q){p=t[q]
if(".."===p)if(u.length!==0&&C.b.gaV(u)!==".."){if(0>=u.length)return H.d(u,-1)
u.pop()
r=!0}else{u.push("..")
r=!1}else if("."===p)r=!0
else{u.push(p)
r=!1}}t=u.length
if(t!==0)if(t===1){if(0>=t)return H.d(u,0)
t=u[0].length===0}else t=!1
else t=!0
if(t)return"./"
if(r||C.b.gaV(u)==="..")u.push("")
if(!b){if(0>=u.length)return H.d(u,0)
t=P.mA(u[0])
if(0>=u.length)return H.d(u,0)
u[0]=t}return C.b.u(u,"/")},
mA:function(a){var u,t,s,r=a.length
if(r>=2&&P.mB(J.np(a,0)))for(u=1;u<r;++u){t=C.a.H(a,u)
if(t===58)return C.a.v(a,0,u)+"%3A"+C.a.am(a,u+1)
if(t<=127){s=t>>>4
if(s>=8)return H.d(C.o,s)
s=(C.o[s]&1<<(t&15))===0}else s=!0
if(s)break}return a},
oH:function(a,b){var u,t,s
for(u=0,t=0;t<2;++t){s=C.a.H(a,b+t)
if(48<=s&&s<=57)u=u*16+s-48
else{s|=32
if(97<=s&&s<=102)u=u*16+s-87
else throw H.e(P.d6("Invalid URL encoding"))}}return u},
lu:function(a,b,c,d,e){var u,t,s,r,q=b
while(!0){if(!(q<c)){u=!0
break}t=C.a.H(a,q)
if(t<=127)if(t!==37)s=t===43
else s=!0
else s=!0
if(s){u=!1
break}++q}if(u){if(C.f!==d)s=!1
else s=!0
if(s)return C.a.v(a,b,c)
else r=new H.R(C.a.v(a,b,c))}else{r=H.b([],[P.n])
for(s=a.length,q=b;q<c;++q){t=C.a.H(a,q)
if(t>127)throw H.e(P.d6("Illegal percent encoding in URI"))
if(t===37){if(q+3>s)throw H.e(P.d6("Truncated URI"))
r.push(P.oH(a,q+1))
q+=2}else if(t===43)r.push(32)
else r.push(t)}}return new P.jp(!1).ct(r)},
mB:function(a){var u=a|32
return 97<=u&&u<=122},
mi:function(a,b,c){var u,t,s,r,q,p,o,n,m="Invalid MIME type",l=H.b([b-1],[P.n])
for(u=a.length,t=b,s=-1,r=null;t<u;++t){r=C.a.H(a,t)
if(r===44||r===59)break
if(r===47){if(s<0){s=t
continue}throw H.e(P.S(m,a,t))}}if(s<0&&t>b)throw H.e(P.S(m,a,t))
for(;r!==44;){l.push(t);++t
for(q=-1;t<u;++t){r=C.a.H(a,t)
if(r===61){if(q<0)q=t}else if(r===59||r===44)break}if(q>=0)l.push(q)
else{p=C.b.gaV(l)
if(r!==44||t!==p+7||!C.a.ac(a,"base64",p+1))throw H.e(P.S("Expecting '='",a,t))
break}}l.push(t)
o=t+1
if((l.length&1)===1)a=C.F.ji(0,a,o,u)
else{n=P.mD(a,o,u,C.n,!0)
if(n!=null)a=C.a.bi(a,o,u,n)}return new P.ji(a,l,c)},
oT:function(){var u="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-._~!$&'()*+,;=",t=".",s=":",r="/",q="?",p="#",o=P.dt(22,new P.kz(),P.c1),n=new P.ky(o),m=new P.kA(),l=new P.kB(),k=n.$2(0,225)
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
mJ:function(a,b,c,d,e){var u,t,s,r,q,p=$.no()
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
az:function az(){},
aj:function aj(a,b){this.a=a
this.b=b},
J:function J(){},
as:function as(a){this.a=a},
fW:function fW(){},
fX:function fX(){},
bo:function bo(){},
cE:function cE(){},
aG:function aG(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bz:function bz(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
hd:function hd(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
jh:function jh(a){this.a=a},
jd:function jd(a){this.a=a},
dU:function dU(a){this.a=a},
fJ:function fJ(a){this.a=a},
i1:function i1(){},
dS:function dS(){},
fR:function fR(a){this.a=a},
em:function em(a){this.a=a},
h9:function h9(a,b,c){this.a=a
this.b=b
this.c=c},
n:function n(){},
i:function i(){},
hg:function hg(){},
p:function p(){},
U:function U(){},
an:function an(){},
ah:function ah(){},
V:function V(){},
bA:function bA(){},
o:function o(){},
W:function W(a){this.a=a},
jm:function jm(a){this.a=a},
jj:function jj(a){this.a=a},
jk:function jk(a){this.a=a},
jl:function jl(a,b){this.a=a
this.b=b},
c7:function c7(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
kr:function kr(a,b){this.a=a
this.b=b},
ks:function ks(){},
ku:function ku(a,b){this.a=a
this.b=b},
kt:function kt(a){this.a=a},
ji:function ji(a,b,c){this.a=a
this.b=b
this.c=c},
kz:function kz(){},
ky:function ky(a){this.a=a},
kA:function kA(){},
kB:function kB(){},
kg:function kg(a,b,c,d,e,f,g,h){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=null},
jO:function jO(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.Q=_.z=_.y=null},
pu:function(a){var u,t=J.H(a)
if(!!t.$ib2){u=t.gdR(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.eW(a.data,a.height,a.width)},
pt:function(a){if(a instanceof P.eW)return{data:a.a,height:a.b,width:a.c}
return a},
bd:function(a){var u,t,s,r,q
if(a==null)return
u=P.lV(P.o,null)
t=Object.getOwnPropertyNames(a)
for(s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
u.k(0,q,a[q])}return u},
ps:function(a){var u={}
a.I(0,new P.kH(u))
return u},
ki:function ki(){},
kk:function kk(a,b){this.a=a
this.b=b},
kl:function kl(a,b){this.a=a
this.b=b},
eW:function eW(a,b,c){this.a=a
this.b=b
this.c=c},
kH:function kH(a){this.a=a},
kj:function kj(a,b){this.a=a
this.b=b},
h5:function h5(a,b){this.a=a
this.b=b},
h6:function h6(){},
h7:function h7(){},
pK:function(a,b){var u=new P.aZ($.N,[b]),t=new P.jF(u,[b])
a.then(H.bc(new P.kR(t),1),H.bc(new P.kS(t),1))
return u},
kR:function kR(a){this.a=a},
kS:function kS(a){this.a=a},
k7:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
oA:function(a){a=536870911&a+((67108863&a)<<3)
a^=a>>>11
return 536870911&a+((16383&a)<<15)},
k5:function k5(){},
ka:function ka(){},
ae:function ae(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.$ti=e},
b4:function b4(){},
hm:function hm(){},
b8:function b8(){},
hZ:function hZ(){},
i8:function i8(){},
iL:function iL(){},
l:function l(){},
bb:function bb(){},
j3:function j3(){},
er:function er(){},
es:function es(){},
eC:function eC(){},
eD:function eD(){},
eN:function eN(){},
eO:function eO(){},
eU:function eU(){},
eV:function eV(){},
c1:function c1(){},
fq:function fq(){},
ft:function ft(){},
fu:function fu(a){this.a=a},
fv:function fv(){},
bI:function bI(){},
i_:function i_(){},
ee:function ee(){},
dN:function dN(){},
iF:function iF(){},
eJ:function eJ(){},
eK:function eK(){}},W={
nw:function(){var u=document.createElement("a")
return u},
nx:function(a){var u=new Audio(a)
return u},
l5:function(){var u=document.createElement("canvas")
return u},
l7:function(a){return"wheel"},
k6:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10)
return a^a>>>6},
my:function(a,b,c,d){var u=W.k6(W.k6(W.k6(W.k6(0,a),b),c),d),t=536870911&u+((67108863&u)<<3)
t^=t>>>11
return 536870911&t+((16383&t)<<15)},
X:function(a,b,c,d){var u=W.mM(new W.jQ(c),W.j)
if(u!=null&&!0)J.nr(a,b,u,!1)
return new W.jP(a,b,u,!1)},
mM:function(a,b){var u=$.N
if(u===C.e)return a
return u.dM(a,b)},
m:function m(){},
fk:function fk(){},
fm:function fm(){},
fn:function fn(){},
bJ:function bJ(){},
bM:function bM(){},
bl:function bl(){},
fN:function fN(){},
I:function I(){},
cq:function cq(){},
fO:function fO(){},
ap:function ap(){},
aI:function aI(){},
fP:function fP(){},
fQ:function fQ(){},
fS:function fS(){},
fT:function fT(){},
df:function df(){},
dg:function dg(){},
fU:function fU(){},
fV:function fV(){},
jL:function jL(a,b){this.a=a
this.b=b},
a_:function a_(){},
j:function j(){},
h:function h(){},
at:function at(){},
cr:function cr(){},
h4:function h4(){},
h8:function h8(){},
aJ:function aJ(){},
hc:function hc(){},
ct:function ct(){},
b2:function b2(){},
cu:function cu(){},
bU:function bU(){},
hr:function hr(){},
hM:function hM(){},
cB:function cB(){},
hN:function hN(){},
hO:function hO(a){this.a=a},
hP:function hP(){},
hQ:function hQ(a){this.a=a},
aO:function aO(){},
hR:function hR(){},
aP:function aP(){},
jK:function jK(a){this.a=a},
D:function D(){},
dD:function dD(){},
aQ:function aQ(){},
i4:function i4(){},
ij:function ij(){},
ik:function ik(a){this.a=a},
im:function im(){},
aT:function aT(){},
iC:function iC(){},
aU:function aU(){},
iD:function iD(){},
aV:function aV(){},
iI:function iI(){},
iJ:function iJ(a){this.a=a},
aw:function aw(){},
aW:function aW(){},
ax:function ax(){},
iR:function iR(){},
iS:function iS(){},
iY:function iY(){},
aX:function aX(){},
c0:function c0(){},
j1:function j1(){},
j2:function j2(){},
bB:function bB(){},
jn:function jn(){},
jB:function jB(){},
bE:function bE(){},
cQ:function cQ(){},
jN:function jN(){},
eg:function eg(){},
k4:function k4(){},
ez:function ez(){},
kh:function kh(){},
km:function km(){},
jP:function jP(a,b,c,d){var _=this
_.b=a
_.c=b
_.d=c
_.e=d},
jQ:function jQ(a){this.a=a},
L:function L(){},
dj:function dj(a,b){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null},
ef:function ef(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
ek:function ek(){},
en:function en(){},
eo:function eo(){},
ep:function ep(){},
eq:function eq(){},
ev:function ev(){},
ew:function ew(){},
ex:function ex(){},
ey:function ey(){},
eA:function eA(){},
eB:function eB(){},
eE:function eE(){},
eF:function eF(){},
eG:function eG(){},
cV:function cV(){},
cW:function cW(){},
eH:function eH(){},
eI:function eI(){},
eM:function eM(){},
eP:function eP(){},
eQ:function eQ(){},
cY:function cY(){},
cZ:function cZ(){},
eS:function eS(){},
eT:function eT(){},
eZ:function eZ(){},
f_:function f_(){},
f0:function f0(){},
f1:function f1(){},
f2:function f2(){},
f3:function f3(){},
f4:function f4(){},
f5:function f5(){},
f6:function f6(){},
f7:function f7(){}},L={
nZ:function(a){var u,t,s,r,q,p,o,n=null,m=new Array(256)
m.fixed$length=Array
u=[P.n]
t=H.b(m,u)
m=new Array(256)
m.fixed$length=Array
s=H.b(m,u)
for(r=0;r<256;++r)s[r]=r
q=P.ch("6364136223846793005",n,n)
p=P.ch("1442695040888963407",n,n)
if(typeof q!=="number")return H.c(q)
if(typeof p!=="number")return H.c(p)
a=C.c.cQ(C.c.cQ(C.c.cQ(a*q+p,64)*q+p,64)*q+p,64)
for(r=255;r>=0;--r){m=a*q+p
a=((m&-1)>>>0)-(m&0)
o=C.c.aZ(a+31,r+1)
if(o>=256)return H.d(s,o)
t[r]=s[o]
s[o]=s[r]}return new L.i0(t)},
i0:function i0(a){this.a=a},
dT:function dT(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
e0:function e0(a,b,c){this.a=a
this.b=b
this.c=c},
e1:function e1(a){this.b=a
this.c=null},
j_:function j_(){var _=this
_.d=_.c=_.b=_.a=null},
e3:function e3(a){this.b=a
this.a=this.c=null}},B={
aR:function(a,b){return new B.av(a,b)},
h1:function h1(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=null},
av:function av(a,b){this.a=a
this.b=b},
nz:function(a){switch(a){case 0:return"air"
case 1:return"water"
case 100:return"boundary"
case 101:return"dirt"
case 102:return"turf"
case 103:return"rock"
case 104:return"sand"
case 105:return"dryLeaves"
case 106:return"trunk-ud"
case 107:return"trunk-ns"
case 108:return"trunk-ew"
case 109:return"brick"
case 110:return"redShine"
case 111:return"whiteShine"
case 112:return"yellowShine"
case 113:return"blackShine"
case 114:return"leaves"
case 115:return"wood-ud"
case 116:return"wood-ns"
case 117:return"wood-ew"
case 200:return"grass"
case 201:return"fern"
case 202:return"whiteFlower"
case 203:return"blueFlower"
case 204:return"redFlower"
case 205:return"mushroom"}return"undefined"},
ny:function(a,b){if(a===b)return!1
if(b===0)return!0
if(a===1)return b>=200&&b<=205
if(b===1)return!(a>=200&&a<=205)
return!(a>=200&&a<=205)&&b>=200&&b<=205},
nB:function(a){var u=new B.da(a)
u.eW(a)
return u},
mX:function(){var u,t=V.og("3Dart Craft"),s=[P.o]
t.a1(H.b(["This example is in development and may still have a few issues and glitches."],s))
u=W.l5()
u.className="pageLargeCanvas"
u.id="targetCanvas"
t.a.appendChild(u)
t.iF(H.b(["buttons"],s))
t.cl(1,"About")
t.a1(H.b(["3Dart Craft is an example of how [3Dart|https://github.com/Grant-Nelson/ThreeDart] can be used ","to create a [voxel|https://en.wikipedia.org/wiki/Voxel] environment for browser driven video games. ","This example has no server backing it so none of the changes are persisted. It would take very little ","to turn this into a simple online game."],s))
t.a1(H.b(["\xab[Back to Examples List|../../]"],s))
t.cl(1,"Controls")
t.a1(H.b(["\u2022 _Currently there are no controls for mobile browsers_"],s))
t.a1(H.b(["\u2022 *Esc* to release the mouse capture"],s))
t.a1(H.b(["\u2022 *W* or *Up arrow* to move forward"],s))
t.a1(H.b(["\u2022 *S* or *Down arrow* to move backward"],s))
t.a1(H.b(["\u2022 *A* or *Left arrow* to strife left"],s))
t.a1(H.b(["\u2022 *D* or *Right arrow* to strife right"],s))
t.a1(H.b(["\u2022 *Space bar* to jump"],s))
t.a1(H.b(["\u2022 *Tab* cycles the block selected which can be placed"],s))
t.a1(H.b(["\u2022 *Shift-Tab* cycles the selection in the reverse direction"],s))
t.a1(H.b(["\u2022 *Left click* or *Q* removes the currently highlighted block"],s))
t.a1(H.b(["\u2022 *Right click* or *E* places the selected block on the highlighted block"],s))
t.a1(H.b(["\u2022 *O* to return the starting location"],s))
t.cl(1,"Help wanted")
t.a1(H.b(["There is still much to be done, many cool new features, and several little bugs. ","If you would like to contribute to this example, have an idea, find a bug, or just want to learn more about it, ","check out the [project page|https://github.com/Grant-Nelson/ThreeDart/projects/1] or ","[source code|https://github.com/Grant-Nelson/ThreeDart/tree/master/web/examples/craft]."],s))
t.a1(H.b(["There are tons of ways to contribute. You could even start your own example. ","See the [3Dart Project|https://github.com/Grant-Nelson/ThreeDart] for more."],s))
P.lj(C.k,B.pG())},
pO:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7=document,c8=c7.getElementById("targetCanvas")
if(c8==null)H.u(P.v("Failed to find an element with the identifier, targetCanvas."))
u=E.ol(c8,!0,!0,!0,!1)
t=new B.hL(u)
s=P.n
t.b=new H.F([s,B.O])
t.c=new H.F([s,[P.p,P.n]])
t.d=H.b([],[O.cy])
r=new V.a3(1,1,1)
q=V.dG()
p=V.lp()
o=new V.t(0.5,-1,0.2).n(0,q)
o=U.bn(V.m_(q,p,new V.y(o.a,o.b,o.c)))
p=new D.bO()
p.c=new V.a3(1,1,1)
p.a=V.lp()
p.d=V.lo()
p.e=V.ms()
n=p.b
p.b=o
o.gt().q(0,p.ghd())
q=new D.B("mover",n,p.b)
q.b=!0
p.aL(q)
if(!p.c.p(0,r)){n=p.c
p.c=r
q=new D.B("color",n,r)
q.b=!0
p.aL(q)}t.e=p
m=t.J(t.F("boundary"),!1)
l=t.J(t.F("brick"),!1)
k=t.J(t.F("dirt"),!1)
j=t.J(t.F("dryLeavesSide"),!1)
i=t.J(t.F("dryLeavesTop"),!1)
h=t.J(t.F("leaves"),!1)
g=t.J(t.F("rock"),!1)
f=t.J(t.F("sand"),!1)
e=t.J(t.F("trunkEnd"),!1)
d=t.J(t.F("trunkSide"),!1)
c=t.J(t.F("trunkTilted"),!1)
b=t.J(t.F("turfSide"),!1)
a=t.J(t.F("turfTop"),!1)
a0=t.J(t.F("woodEnd"),!1)
a1=t.J(t.F("woodSide"),!1)
a2=t.J(t.F("woodTilted"),!1)
a3=t.J(t.F("blackShine"),!0)
a4=t.J(t.F("redShine"),!0)
a5=t.J(t.F("yellowShine"),!0)
a6=t.J(t.F("whiteShine"),!0)
a7=t.J(t.F("mushroomBottom"),!1)
a8=t.J(t.F("mushroomSide"),!1)
a9=t.J(t.F("mushroomTop"),!1)
b0=t.J(t.F("grass"),!1)
b1=t.J(t.F("fern"),!1)
b2=t.J(t.F("blueFlowers"),!1)
b3=t.J(t.F("redFlowers"),!1)
b4=t.J(t.F("whiteFlowers"),!1)
q=P.hq([t.F("water1"),t.F("water2"),t.F("water3")],!0,T.dY)
p=new T.iT()
b5=p.b=p.a=0
p.e=q
t.x=p
b6=t.J(p,!0)
t.b.k(0,100,new B.O(m,m,m,m,m,m))
t.b.k(0,101,new B.O(k,k,k,k,k,k))
t.b.k(0,102,new B.O(a,k,b,b,b,b))
t.b.k(0,103,new B.O(g,g,g,g,g,g))
t.b.k(0,104,new B.O(f,f,f,f,f,f))
t.b.k(0,105,new B.O(i,k,j,j,j,j))
t.b.k(0,106,new B.O(e,e,d,d,d,d))
t.b.k(0,107,new B.O(d,d,c,c,e,e))
t.b.k(0,108,new B.O(c,c,e,e,c,c))
t.b.k(0,109,new B.O(l,l,l,l,l,l))
t.b.k(0,110,new B.O(a4,a4,a4,a4,a4,a4))
t.b.k(0,111,new B.O(a6,a6,a6,a6,a6,a6))
t.b.k(0,112,new B.O(a5,a5,a5,a5,a5,a5))
t.b.k(0,113,new B.O(a3,a3,a3,a3,a3,a3))
t.b.k(0,114,new B.O(h,h,h,h,h,h))
t.b.k(0,115,new B.O(a0,a0,a1,a1,a1,a1))
t.b.k(0,116,new B.O(a1,a1,a2,a2,a0,a0))
t.b.k(0,117,new B.O(a2,a2,a0,a0,a2,a2))
t.b.k(0,1,new B.O(b6,b6,b6,b6,b6,b6))
q=[s]
p=H.b([b0],q)
t.c.k(0,200,p)
p=H.b([b1],q)
t.c.k(0,201,p)
p=H.b([b4],q)
t.c.k(0,202,p)
p=H.b([b2],q)
t.c.k(0,203,p)
p=H.b([b3],q)
t.c.k(0,204,p)
p=H.b([a9,a7,a8],q)
t.c.k(0,205,p)
t.f=t.d5("selection")
t.r=t.d5("crosshair")
b7=B.ot(t,B.oV())
p=u.r
b8=new B.iB()
b8.a=new H.F([s,F.dy])
b8.b3(p,"./sounds/sandHit.mp3",H.b([104],q))
b8.b3(p,"./sounds/grassHit.mp3",H.b([101,102,200,201,202,203,204,205],q))
b8.b3(p,"./sounds/woodHit.mp3",H.b([106,107,108,115,116,117],q))
b8.b3(p,"./sounds/stoneHit.mp3",H.b([100,103,109,110,111,112,113],q))
b8.b3(p,"./sounds/waterHit.mp3",H.b([1],q))
b8.b3(p,"./sounds/leavesHit.mp3",H.b([105,114],q))
b9=B.o_(u.x,b7,b8)
c0=new M.dh()
c0.a=!0
s=O.l6(E.ak)
c0.e=s
s.bz(c0.ghf(),c0.ghh())
c0.y=c0.x=c0.r=c0.f=null
c1=X.nL(new V.bm(0.576,0.784,0.929,1))
c2=new X.dE()
c2.c=1.0471975511965976
c2.d=0.1
c2.e=2000
c2.sef(null)
s=c2.c
if(!(Math.abs(s-1.0471975511965976)<$.x().a)){c2.c=1.0471975511965976
s=new D.B("fov",s,1.0471975511965976)
s.b=!0
c2.b2(s)}s=c2.d
if(!(Math.abs(s-0.1)<$.x().a)){c2.d=0.1
s=new D.B("near",s,0.1)
s.b=!0
c2.b2(s)}s=c2.e
if(!(Math.abs(s-2000)<$.x().a)){c2.e=2000
s=new D.B("far",s,2000)
s.b=!0
c2.b2(s)}s=c0.b
if(s!==c2){if(s!=null)s.gt().X(0,c0.gb0())
n=c0.b
c0.b=c2
c2.gt().q(0,c0.gb0())
s=new D.B("camera",n,c0.b)
s.b=!0
c0.b1(s)}s=c0.c
if(s!==c1){if(s!=null)s.gt().X(0,c0.gb0())
n=c0.c
c0.c=c1
c1.gt().q(0,c0.gb0())
s=new D.B("target",n,c0.c)
s.b=!0
c0.b1(s)}s=c0.f
if(s==null)s=c0.f=D.E()
s.q(0,b7.gjU(b7))
c0.b.sef(b9.y)
for(s=b7.e,q=s.length;b5<s.length;s.length===q||(0,H.q)(s),++b5){c3=s[b5]
p=c0.e
o=[H.aA(p,0)]
if(p.bm(H.b([c3],o))){c4=p.a
c5=c4.length
c4.push(c3)
o=H.b([c3],o)
p=p.c
if(p!=null)p.$2(c5,o)}}c0.e.q(0,b9.dx)
b7.f=b9
s=u.d
if(s!==c0){if(s!=null)s.gt().X(0,u.gcZ())
u.d=c0
c0.gt().q(0,u.gcZ())
u.d_()}b9.cU()
P.iZ(C.S,b7.gjY())
P.iZ(C.R,b7.geI())
P.iZ(C.P,b7.giJ())
c8=c7.getElementById("buttons")
c6=c7.createElement("button")
c6.textContent="Fullscreen"
W.X(c6,"click",new B.kT(u),!1)
J.nu(c8).q(0,c6)
P.iZ(C.Q,new B.kU(u,b7))},
oV:function(){var u,t,s,r,q=null,p=P.mj().gex().h(0,"seed")
if(p!=null){if(p==="test")return new B.iO()
if(p==="checkers"){u=new B.fE()
u.a=!0
u.b=10
return u}t=H.m8(p,q)
if(t==null)t=-1}else t=-1
if(t<=0){t=C.O.jh(4294967296)
s=P.mj().ey(0,P.nS(["seed",""+t],P.o,q))
u=window.history
r=s.i(0)
u.toString
u.pushState(new P.kj([],[]).bW(q),q,r)}u=new B.i9()
u.a=L.nZ(t)
u.b=new Uint8Array(484)
return u},
o_:function(a,b,c){var u=new B.dF(b,c)
u.eY(a,b,c)
return u},
li:function(a,b){var u,t,s=new B.it(a,b)
if(b==null){u=$.Z()
t=$.a2()
s.b=new Z.a1(u.a|t.a|$.a8().a)}u=a==null?null:a.d
u=u==null?null:u.length
if(u==null)u=1
u=new Array(u)
u.fixed$length=Array
s.c=H.b(u,[F.dL])
return s},
ot:function(a,b){var u=new B.ec(a,b)
u.f2(a,b)
return u},
ai:function ai(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
fE:function fE(){this.b=this.a=null},
da:function da(a){var _=this
_.b=_.a=null
_.c=a
_.x=_.r=_.f=_.e=_.d=null},
fG:function fG(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
kT:function kT(a){this.a=a},
kU:function kU(a,b){this.a=a
this.b=b},
O:function O(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
hL:function hL(a){var _=this
_.a=a
_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
dC:function dC(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dF:function dF(a,b){var _=this
_.b=_.a=null
_.c=a
_.d=b
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=null},
i3:function i3(a){this.a=a},
i9:function i9(){this.c=this.b=this.a=null},
ib:function ib(a){this.a=a},
ia:function ia(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ic:function ic(a){this.a=a},
it:function it(a,b){this.a=a
this.b=b
this.c=null},
iu:function iu(a){this.a=a},
iv:function iv(a){this.a=a},
iw:function iw(a){this.a=a},
ix:function ix(a){this.a=a},
iB:function iB(){this.a=null},
iO:function iO(){this.a=null},
iP:function iP(a){this.a=a},
iQ:function iQ(a){this.a=a},
ec:function ec(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.e=_.d=_.c=null}},K={
a6:function(a){var u=new K.io()
u.f_(a)
return u},
fl:function fl(){},
dk:function dk(){},
dw:function dw(){},
b7:function b7(){this.a=null},
io:function io(){this.a=null}},F={
m5:function(a){var u=new F.cF(a)
u.b=!1
a.toString
W.X(a,"playing",u.ght(),!1)
W.X(a,"pause",u.ghr(),!1)
return u},
fr:function fr(){this.b=this.a=null},
fs:function fs(a,b){this.a=a
this.b=b},
dy:function dy(){this.c=this.b=this.a=null},
cF:function cF(a){var _=this
_.a=a
_.e=_.d=_.c=_.b=null},
c4:function(a,b,c,d,e,f,g,h,i){var u=null,t=new F.c3(),s=new F.jy(),r=[F.ds]
s.b=H.b([],r)
s.c=H.b([],r)
t.c=s
s=new F.jv()
r=[F.bR]
s.b=H.b([],r)
s.c=H.b([],r)
s.d=H.b([],r)
t.d=s
t.e=0
s=h.a
t.f=(s&$.Z().a)!==0?d:u
t.r=(s&$.a8().a)!==0?e:u
t.x=(s&$.bk().a)!==0?b:u
t.y=(s&$.a2().a)!==0?f:u
t.z=(s&$.bG().a)!==0?g:u
t.Q=(s&$.nk().a)!==0?c:u
t.ch=(s&$.cj().a)!==0?i:0
t.cx=(s&$.bj().a)!==0?a:u
return t},
bR:function bR(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
ds:function ds(){},
i5:function i5(){},
dL:function dL(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
ip:function ip(){var _=this
_.e=_.d=_.c=_.b=_.a=null},
lh:function lh(){},
iq:function iq(a){this.a=a
this.b=null},
ir:function ir(a){this.a=a
this.b=null},
is:function is(){this.b=null},
c3:function c3(){var _=this
_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.a=null},
jA:function jA(a){this.a=a},
jz:function jz(a){this.a=a},
ju:function ju(a){this.a=a
this.c=this.b=null},
jv:function jv(){this.d=this.c=this.b=null},
jw:function jw(a,b){this.a=a
this.b=b},
jx:function jx(a,b){this.a=a
this.b=b},
jy:function jy(){this.c=this.b=null}},O={
l6:function(a){var u=new O.b1([a])
u.bA(a)
return u},
b1:function b1(a){var _=this
_.c=_.b=_.a=null
_.$ti=a},
cA:function cA(){this.b=this.a=null},
lX:function(){var u,t=new O.cy(),s=O.l6(V.b5)
t.e=s
s.bz(t.gh3(),t.gh5())
s=new O.aM(t,"emission")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
t.f=s
s=new O.aM(t,"ambient")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
t.r=s
s=new O.aM(t,"diffuse")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
t.x=s
s=new O.aM(t,"invDiffuse")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
t.y=s
s=new O.hC(t,"specular")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
s.ch=100
t.z=s
s=new O.hy(t,"bump")
s.c=new A.a4(!1,!1,!1)
t.Q=s
t.ch=null
s=new O.aM(t,"reflect")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
t.cx=s
s=new O.hB(t,"refract")
s.c=new A.a4(!1,!1,!1)
s.f=new V.a3(0,0,0)
s.ch=1
t.cy=s
s=new O.hx(t,"alpha")
s.c=new A.a4(!1,!1,!1)
s.f=1
t.db=s
s=new D.dr()
s.bA(D.ab)
s.e=H.b([],[D.fw])
s.f=H.b([],[D.bO])
s.r=H.b([],[D.i6])
s.x=H.b([],[D.iE])
s.z=s.y=null
s.bZ(s.gh1(),s.ghP(),s.ghT())
t.dx=s
u=new O.hA()
u.b=new V.bm(0,0,0,0)
u.c=1
u.d=10
u.e=!1
t.dy=u
u=s.y
s=u==null?s.y=D.E():u
s.q(0,t.gie())
s=t.dx
u=s.z
s=u==null?s.z=D.E():u
s.q(0,t.gbB())
t.fr=null
return t},
cy:function cy(){var _=this
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
hD:function hD(a,b){this.a=a
this.b=b},
hE:function hE(){},
hF:function hF(a,b){this.a=a
this.b=b},
hG:function hG(){},
hH:function hH(a,b){this.a=a
this.b=b},
hI:function hI(){},
hJ:function hJ(a,b){this.a=a
this.b=b},
hK:function hK(){},
hx:function hx(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
cz:function cz(){},
hy:function hy(a,b){var _=this
_.a=a
_.b=b
_.e=_.d=_.c=null},
aM:function aM(a,b){var _=this
_.f=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hA:function hA(){var _=this
_.e=_.d=_.c=_.b=null},
hB:function hB(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
hC:function hC(a,b){var _=this
_.f=_.ch=null
_.a=a
_.b=b
_.e=_.d=_.c=null},
dW:function dW(){}},E={
bP:function(a,b,c,d){var u,t,s,r,q,p=new E.ak()
p.a=""
p.b=!0
u=O.l6(E.ak)
p.y=u
u.bz(p.gjj(),p.gjm())
p.dy=p.dx=p.db=p.cy=p.cx=p.ch=p.Q=p.z=null
u=p.c
if(u!=c){p.d=p.c=c
p.e=null
if(u!=null)u.gt().X(0,p.gbS())
t=p.c
if(t!=null)t.gt().q(0,p.gbS())
s=new D.B("shape",u,p.c)
s.b=!0
p.as(s)}u=p.f
if(u!=d){if(u!=null)u.gt().X(0,p.gen())
r=p.f
p.f=d
if(d!=null)d.gt().q(0,p.gen())
p.da()
s=new D.B("technique",r,p.f)
s.b=!0
p.as(s)}if(!J.K(p.r,b)){q=p.r
if(q!=null)q.gt().X(0,p.gek())
if(b!=null)b.gt().q(0,p.gek())
p.r=b
s=new D.B("mover",q,b)
s.b=!0
p.as(s)}if(a!=null)p.y.aD(0,a)
return p},
mv:function(){if(J.l_(window.navigator.vendor,"Google"))return C.D
if(J.l_(window.navigator.userAgent,"Firefox"))return C.q
var u=window.navigator.appVersion
if(J.ag(u).T(u,"Trident")||C.a.T(u,"Edge"))return C.r
if(J.l_(window.navigator.appName,"Microsoft"))return C.r
return C.E},
mw:function(){var u=window.navigator.appVersion
if(J.ag(u).T(u,"Win"))return C.a_
if(C.a.T(u,"Mac"))return C.z
if(C.a.T(u,"Linux"))return C.a0
return C.a1},
oe:function(a,b){var u=new E.ie(a)
u.eZ(a,b)
return u},
ol:function(a,b,c,d,e){var u,t,s=J.H(a)
if(!!s.$ibM)return E.mf(a,!0,!0,!0,!1)
u=W.l5()
t=u.style
t.width="100%"
t.height="100%"
s.gcr(a).q(0,u)
return E.mf(u,!0,!0,!0,!1)},
mf:function(a,b,c,d,e){var u,t,s,r,q="mousemove",p=new E.dZ(),o=C.j.cT(a,"webgl2",P.nT(["alpha",!0,"depth",!0,"stencil",!1,"antialias",!0]))
if(o==null)H.u(P.v("Failed to get the rendering context for WebGL."))
p.b=a
p.c=o
p.e=E.oe(o,a)
u=new T.iV(o)
u.b=o.getParameter(3379)
o.getParameter(34076)
u.e=u.d=0
p.f=u
u=new F.fr()
u.b=u.a=0
p.r=u
u=new X.e7(a)
t=new X.hl()
t.d=P.lW(P.n)
u.b=t
t=new X.hS(u)
t.f=0
t.r=V.b9()
t.x=V.b9()
t.ch=t.Q=1
u.c=t
t=new X.hs(u)
t.r=0
t.x=V.b9()
t.cy=t.cx=t.ch=t.Q=1
u.d=t
t=new X.j0(u)
t.f=V.b9()
t.r=V.b9()
u.e=t
u.x=u.r=u.f=!1
u.y=null
u.z=H.b([],[[P.dV,P.V]])
t=$.h_
u.Q=(t==null?$.h_=new E.el(E.mv(),E.mw()):t).a===C.q?0.16666666666666666:0.005555555555555556
s=u.z
r=document
s.push(W.X(r,"contextmenu",u.ghl(),!1))
u.z.push(W.X(a,"focus",u.ghv(),!1))
u.z.push(W.X(a,"blur",u.ghb(),!1))
u.z.push(W.X(r,"keyup",u.gcc(),!1))
u.z.push(W.X(r,"keydown",u.gc_(),!1))
u.z.push(W.X(a,"mousedown",u.ghD(),!1))
u.z.push(W.X(a,"mouseup",u.ghH(),!1))
u.z.push(W.X(a,q,u.ghF(),!1))
s=u.z
W.l7(a)
W.l7(a)
s.push(W.X(a,W.l7(a),u.ghJ(),!1))
u.z.push(W.X(r,q,u.ghn(),!1))
u.z.push(W.X(r,"mouseup",u.ghp(),!1))
u.z.push(W.X(r,"pointerlockchange",u.ghN(),!1))
u.z.push(W.X(a,"touchstart",u.gi0(),!1))
u.z.push(W.X(a,"touchend",u.ghX(),!1))
u.z.push(W.X(a,"touchmove",u.ghZ(),!1))
p.x=u
p.ch=!0
p.cx=!1
p.cy=new P.aj(Date.now(),!1)
p.db=0
p.dv()
return p},
fz:function fz(){},
ak:function ak(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
bK:function bK(a){this.b=a},
bY:function bY(a){this.b=a},
el:function el(a,b){this.a=a
this.b=b},
ie:function ie(a){var _=this
_.a=a
_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
ig:function ig(a){this.a=a},
ih:function ih(a){this.a=a},
ii:function ii(a){this.a=a},
iG:function iG(){this.b=null},
dZ:function dZ(){var _=this
_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
iX:function iX(a){this.a=a}},Z={
mu:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Float32Array(H.c9(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
eb:function(a,b,c){var u=a.createBuffer()
a.bindBuffer(b,u)
a.bufferData(b,new Int16Array(H.c9(c)),35044)
a.bindBuffer(b,null)
return new Z.ea(b,u)},
ay:function(a){return new Z.a1(a)},
ea:function ea(a,b){this.a=a
this.b=b},
bL:function bL(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=0},
jC:function jC(a){this.a=a},
co:function co(a,b,c){var _=this
_.a=a
_.b=null
_.c=b
_.d=c},
aK:function aK(a,b,c){this.a=a
this.b=b
this.c=c},
a1:function a1(a){this.a=a}},D={
E:function(){var u=new D.bQ()
u.d=0
return u},
fD:function fD(){},
bQ:function bQ(){var _=this
_.d=_.c=_.b=_.a=null},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
a5:function a5(){this.b=null},
bq:function bq(){this.b=null},
br:function br(){this.b=null},
B:function B(a,b,c){var _=this
_.c=a
_.d=b
_.e=c
_.b=null},
fw:function fw(){},
bO:function bO(){var _=this
_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
ab:function ab(){},
dr:function dr(){var _=this
_.c=_.b=_.a=_.z=_.y=_.x=_.r=_.f=_.e=null},
i6:function i6(){},
iE:function iE(){}},X={
aL:function(){var u=new X.dq()
u.bA(X.am)
u.f=u.e=null
u.r=!1
u.y=u.x=null
u.bZ(u.gf3(),u.gf5(),u.gf7())
return u},
d9:function d9(a,b){this.a=a
this.b=b},
am:function am(a,b){this.a=a
this.b=b},
b3:function b3(a){this.c=a
this.b=null},
dq:function dq(){var _=this
_.c=_.b=_.a=_.y=_.x=_.r=_.f=_.e=null},
hl:function hl(){this.d=this.b=this.a=null},
du:function du(a,b,c){var _=this
_.x=a
_.c=b
_.d=c
_.b=null},
hs:function hs(a){var _=this
_.a=a
_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
bv:function bv(a,b,c){this.a=a
this.b=b
this.c=c},
b6:function b6(a,b,c,d,e){var _=this
_.x=a
_.y=b
_.z=c
_.c=d
_.d=e
_.b=null},
hS:function hS(a){var _=this
_.a=a
_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
i7:function i7(){},
e2:function e2(a,b,c,d){var _=this
_.y=a
_.z=b
_.c=c
_.d=d
_.b=null},
j0:function j0(a){var _=this
_.a=a
_.y=_.x=_.r=_.f=_.d=_.c=_.b=null},
e7:function e7(a){var _=this
_.a=a
_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=null},
nL:function(a){var u,t=new X.ha()
if(a==null)u=new V.bm(0,0,0,1)
else u=a
t.a=u
t.b=!0
t.c=2000
t.d=!0
t.e=0
t.f=!1
u=$.mc
if(u==null){u=V.lg(0,0,1,1)
$.mc=u}t.r=u
return t},
l4:function l4(){},
ha:function ha(){var _=this
_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dE:function dE(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},
iM:function iM(){}},V={
fH:function(a,b,c){var u=a/255,t=b/255,s=c/255
if(u<0)u=0
else if(u>1)u=1
if(t<0)t=0
else if(t>1)t=1
if(s<0)s=0
else if(s>1)s=1
return new V.bm(u,t,s,1)},
al:function(a){return new V.T(a)},
kW:function(a,b,c){var u
if(c<=b)return b
u=c-b
a=C.d.aZ(a-b,u)
return(a<0?a+u:a)+b},
A:function(a,b,c){if(a==null)return C.a.aW("null",c)
return C.a.aW(C.d.eD(Math.abs(a-0)<$.x().a?0:a,b),c+b+1)},
ce:function(a,b,c){var u,t,s,r,q,p,o=H.b([],[P.o])
for(u=a.length,t=0,s=0;s<a.length;a.length===u||(0,H.q)(a),++s){r=V.A(a[s],b,c)
t=Math.max(t,r.length)
o.push(r)}for(u=o.length,q=u-1;q>=0;--q,u=p){if(q>=u)return H.d(o,q)
u=C.a.aW(o[q],t)
p=o.length
if(q>=p)return H.d(o,q)
o[q]=u}return o},
lC:function(a){return C.d.az(Math.pow(2,C.i.bP(Math.log(H.cd(a))/Math.log(2))))},
lY:function(a){var u=Math.cos(a),t=Math.sin(a)
return new V.au(u,0,-t,0,1,0,t,0,u)},
bW:function(){var u=$.m2
return u==null?$.m2=V.aN(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1):u},
aN:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new V.b5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p)},
dx:function(a,b,c){return V.aN(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1)},
lf:function(a,b,c,d){return V.aN(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,d)},
m0:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aN(1,0,0,0,0,u,-t,0,0,t,u,0,0,0,0,1)},
m1:function(a){var u=Math.cos(a),t=Math.sin(a)
return V.aN(u,0,-t,0,0,1,0,0,t,0,u,0,0,0,0,1)},
m_:function(a,b,c){var u=c.A(0,Math.sqrt(c.D(c))),t=b.bq(u),s=t.A(0,Math.sqrt(t.D(t))),r=u.bq(s),q=new V.y(a.a,a.b,a.c),p=s.O(0).D(q),o=r.O(0).D(q),n=u.O(0).D(q)
return V.aN(s.a,r.a,u.a,p,s.b,r.b,u.b,o,s.c,r.c,u.c,n,0,0,0,1)},
b9:function(){var u=$.m6
return u==null?$.m6=new V.Q(0,0):u},
dG:function(){var u=$.aS
return u==null?$.aS=new V.t(0,0,0):u},
bx:function(a,b,c){return new V.t(a,b,c)},
mb:function(a,b){return new V.dK(a.a,a.b,a.c,b.a,b.b,b.c)},
lg:function(a,b,c,d){if(c<0){a+=c
c=-c}if(d<0){b+=d
d=-d}return new V.dM(a,b,c,d)},
id:function(a,b,c,d,e,f){if(d<0){if(typeof a!=="number")return a.l()
a+=d
d=-d}if(e<0){if(typeof b!=="number")return b.l()
b+=e
e=-e}if(f<0){if(typeof c!=="number")return c.l()
c+=f
f=-f}return new V.c_(a,b,c,d,e,f)},
cP:function(){var u=$.mr
return u==null?$.mr=new V.y(0,0,0):u},
ms:function(){var u=$.jr
return u==null?$.jr=new V.y(-1,0,0):u},
lo:function(){var u=$.js
return u==null?$.js=new V.y(0,1,0):u},
lp:function(){var u=$.jt
return u==null?$.jt=new V.y(0,0,1):u},
mt:function(){var u=$.mp
return u==null?$.mp=new V.y(0,0,-1):u},
mn:function(a,b,c){return new V.y(a,b,c)},
a3:function a3(a,b,c){this.a=a
this.b=b
this.c=c},
bm:function bm(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
h0:function h0(a){this.a=a},
T:function T(a){this.a=a},
bS:function bS(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
he:function he(a,b){this.a=a
this.b=b},
au:function au(a,b,c,d,e,f,g,h,i){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g
_.x=h
_.y=i},
b5:function b5(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
Q:function Q(a,b){this.a=a
this.b=b},
t:function t(a,b,c){this.a=a
this.b=b
this.c=c},
by:function by(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
dK:function dK(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
dM:function dM(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
c_:function c_(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
P:function P(a,b){this.a=a
this.b=b},
y:function y(a,b,c){this.a=a
this.b=b
this.c=c},
og:function(a){var u=new V.iy()
u.f1(a,!0)
return u},
iy:function iy(){this.b=this.a=null},
iA:function iA(a){this.a=a},
iz:function iz(a){this.a=a}},U={
db:function(){var u=new U.fI()
u.a=!0
u.b=1e12
u.c=-1e12
u.d=0
u.e=100
u.r=u.x=u.f=0
return u},
bn:function(a){var u=new U.dc()
u.a=a
return u},
hb:function(a){var u=new U.cs()
u.bA(U.ad)
u.bz(u.gf9(),u.ghR())
u.aD(0,a)
u.e=null
u.f=V.bW()
u.r=0
return u},
fI:function fI(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
dc:function dc(){this.b=this.a=null},
cs:function cs(){var _=this
_.c=_.b=_.a=_.r=_.f=_.e=null},
cv:function cv(){var _=this
_.d=_.c=_.b=_.a=null},
ad:function ad(){},
dO:function dO(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e8:function e8(){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null},
e9:function e9(){var _=this
_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},M={dh:function dh(){var _=this
_.y=_.x=_.r=_.f=_.e=_.d=_.c=_.b=_.a=null}},A={
nW:function(a,b){var u=a.br,t=new A.hw(b,u)
t.f0(b,u)
t.eX(a,b)
return t},
nX:function(a,b,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="MaterialLight_"+a3.gN(a3)+a4.gN(a4)+a5.gN(a5)+a6.gN(a6)+a7.gN(a7)+a8.gN(a8)+a9.gN(a9)+b0.gN(b0)+b1.gN(b1)+"_"
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
d=$.Z()
if(j){u=$.a8()
d=new Z.a1(d.a|u.a)}if(i){u=$.bk()
d=new Z.a1(d.a|u.a)}if(h){u=$.a2()
d=new Z.a1(d.a|u.a)}if(g){u=$.bj()
d=new Z.a1(d.a|u.a)}return new A.hz(a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,s,o,k,o,r,f,!0,e,!1,m,r,l,j,i,h,!1,g,a,!1,a0,!1,a2,c.charCodeAt(0)==0?c:c,d)},
kC:function(a,b,c){if(b.a)a.a+="uniform vec3 "+c+"Clr;\n"
if(b.b)a.a+="uniform sampler2D "+c+"Txt;\n"},
kD:function(a,b,c){var u,t="Txt, txt2D).rgb;\n"
A.kC(a,b,c)
u=a.a+="\n"
u+="vec3 "+c+"Color;\n"
a.a=u
a.a=u+"\n"
u=a.a+="void set"+A.f9(c)+"Color()\n"
u=a.a=u+"{\n"
if(b.a)if(b.b){u+="   "+c+"Color = "+c+"Clr*texture2D("+c+t
a.a=u}else{u+="   "+c+"Color = "+c+"Clr;\n"
a.a=u}else if(b.b){u+="   "+c+"Color = texture2D("+c+t
a.a=u}a.a=u+"}\n"},
p2:function(a,b){var u,t=a.a,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Emission ===\n"
b.a=u+"\n"
A.kC(b,t,"emission")
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
oZ:function(a,b){var u,t=a.b
if(!(t.a||t.b||!1))return
u=b.a+="// === Ambient ===\n"
b.a=u+"\n"
A.kD(b,t,"ambient")
b.a+="\n"},
p0:function(a,b){var u,t=a.c
if(!(t.a||t.b||!1))return
u=b.a+="// === Diffuse ===\n"
b.a=u+"\n"
A.kD(b,t,"diffuse")
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
p3:function(a,b){var u,t=a.d
if(!(t.a||t.b||!1))return
u=b.a+="// === Inverse Diffuse ===\n"
b.a=u+"\n"
A.kD(b,t,"invDiffuse")
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
p9:function(a,b){var u,t=a.e
if(!(t.a||t.b||!1))return
u=b.a+="// === Specular ===\n"
u+="\n"
b.a=u
b.a=u+"uniform float shininess;\n"
A.kD(b,t,"specular")
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
p5:function(a,b){var u,t,s
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
p7:function(a,b){var u,t=a.r,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Reflection ===\n"
b.a=u+"\n"
A.kC(b,t,"reflect")
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
p8:function(a,b){var u,t=a.x,s=t.a
if(!(s||t.b||!1))return
u=b.a+="// === Refraction ===\n"
b.a=u+"\n"
A.kC(b,t,"refract")
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
p_:function(a,b,c){var u,t,s,r,q,p,o=b.b
if(o<=0)return
u=b.a
t="barLight"+H.f(u)
s=A.f9(t)
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
if(typeof u!=="number")return u.ab()
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
c.a=r+"\n"}r=[P.o]
q=H.b([],r)
q.push("lit.color")
if(u)q.push("attenuation")
u=c.a+="   return "+C.b.u(q," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.u(p," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.u(q," + ")+");\n"
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
p1:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=b.b
if(l<=0)return
u=b.a
t="dirLight"+H.f(u)
s=A.f9(t)
r=c.a+="// === "+s+" ===\n"
r+="\n"
c.a=r
r+="struct "+s+"\n"
c.a=r
r=c.a=r+"{\n"
if(typeof u!=="number")return u.ab()
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
r=[P.o]
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
c.a+="      highLight = intensity*("+C.b.u(m," + ")+");\n"}else c.a+="   highLight = "+C.b.u(m," + ")+";\n"
o.push("highLight")}r=c.a+="   return lit.color*("+C.b.u(o," + ")+");\n"
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
p6:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j=b.b
if(j<=0)return
u=b.a
t="pointLight"+H.f(u)
s=A.f9(t)
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
if(typeof u!=="number")return u.ab()
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
c.a=r+"\n"}r=[P.o]
l=H.b([],r)
l.push("lit.color")
if(o)l.push("attenuation")
if(u)l.push("textureCube(txtCube, invNormDir).rgb")
o=c.a+="   return "+C.b.u(l," * ")+";\n"
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
r=c.a+="      highLight = intensity*("+C.b.u(k," + ")+");\n"
c.a=r+"   }\n"}r=c.a+="   return lit.color*("+C.b.u(l," + ")+");\n"
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
pa:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h="uniform sampler2D ",g=b.b
if(g<=0)return
u=b.a
t="spotLight"+H.f(u)
s=A.f9(t)
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
if(typeof u!=="number")return u.ab()
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
if(o){u=$.h_
if(u==null)u=$.h_=new E.el(E.mv(),E.mw())
r=c.a
if(u.b===C.z){u=r+"   float crossMag = length(cross(normDir, lit.objDir));\n"
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
c.a=u+"\n"}u=[P.o]
j=H.b([],u)
if(n)j.push("attenuation")
if(o)j.push("scale")
if(m)j.push("texture2D(txt2D, txtLoc).rgb")
else j.push("vec3(1.0, 1.0, 1.0)")
r=c.a+="   return "+C.b.u(j," * ")+";\n"
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
u=c.a+="      highLight = intensity*("+C.b.u(i," + ")+");\n"
c.a=u+"   }\n"}u=c.a+="   return lit.color*("+C.b.u(j," + ")+");\n"
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
p4:function(a,b){var u,t
if(a.cy>0)return
u=b.a+="// === No Lights ===\n"
u+="\n"
b.a=u
u+="vec3 nonLightValues(vec3 norm)\n"
b.a=u
u+="{\n"
b.a=u
if(a.dx)b.a=u+"   vec3 litVec = vec3(0.0, 0.0, 1.0);\n"
t=H.b([],[P.o])
u=a.b
if(u.a||u.b||!1)t.push("ambientColor")
u=a.c
if(u.a||u.b||!1)t.push("diffuse(norm, litVec)")
u=a.d
if(u.a||u.b||!1)t.push("invDiffuse(norm, litVec)")
u=a.e
if(u.a||u.b||!1)t.push("specular(norm, litVec)")
u=b.a+="   return "+C.b.u(t," + ")+";\n"
u+="}\n"
b.a=u
b.a=u+"\n"},
pb:function(a){var u,t,s,r,q,p,o,n,m="   lightAccum += all",l="precision mediump float;\n\n",k="precision mediump float;\n\nvarying vec3 normalVec;\n",j=new P.W("")
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
A.p2(a,j)
A.oZ(a,j)
A.p0(a,j)
A.p3(a,j)
A.p9(a,j)
t=a.db
if(t){r=j.a+="// === Environmental ===\n"
r+="\n"
j.a=r
r+="uniform samplerCube envSampler;\n"
j.a=r
j.a=r+"\n"
A.p7(a,j)
A.p8(a,j)}A.p5(a,j)
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
if(r){for(q=a.z,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.p_(a,q[o],j)
for(q=a.Q,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.p1(a,q[o],j)
for(q=a.ch,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.p6(a,q[o],j)
for(q=a.cx,p=q.length,o=0;o<q.length;q.length===p||(0,H.q)(q),++o)A.pa(a,q[o],j)
A.p4(a,j)}q=j.a+="// === Main ===\n"
q+="\n"
j.a=q
q+="void main()\n"
j.a=q
q+="{\n"
j.a=q
q=j.a=q+"   float alpha = alphaValue();\n"
u=u?j.a=q+"   vec3 norm = normal();\n":q
if(t)j.a=u+"   vec3 refl = reflect(normalize(viewPos), norm);\n"
n=H.b([],[P.o])
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
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.am(r,1))+"Values(norm);\n"}for(u=a.Q,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.am(r,1))+"Values(norm);\n"}for(u=a.ch,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.am(r,1))+"Values(norm);\n"}for(u=a.cx,t=u.length,o=0;o<u.length;u.length===t||(0,H.q)(u),++o){r=u[o].i(0)
if(0>=r.length)return H.d(r,0)
j.a+=m+(r[0].toUpperCase()+C.a.am(r,1))+"Values(norm);\n"}if(a.cy<=0)j.a+="   lightAccum += nonLightValues(norm);\n"}u=a.a
if(u.a||u.b||!1)n.push("emissionColor()")
u=a.r
if(u.a||u.b||!1)n.push("reflect(refl)")
u=a.x
if(u.a||u.b||!1)n.push("refract(refl)")
if(n.length<=0)n.push("vec3(0.0, 0.0, 0.0)")
u=j.a+="   vec4 objClr = vec4("+C.b.u(n," + ")+", alpha);\n"
if(s)u=j.a=u+"   objClr = colorMat*objClr;\n"
u+="   gl_FragColor = objClr;\n"
j.a=u
u=j.a=u+"}\n"
return u.charCodeAt(0)==0?u:u},
pc:function(a,b){var u,t,s
if(!a.ry)return
u=b.a+="struct BendingValue\n"
u+="{\n"
b.a=u
u+="   mat4 mat;\n"
b.a=u
u+="};\n"
b.a=u
b.a=u+"uniform int bendMatCount;\n"
u=b.a+="uniform BendingValue bendValues["+a.be+"];\n"
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
pe:function(a,b){var u
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
pd:function(a,b){var u
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
pg:function(a,b){var u,t
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
ph:function(a,b){var u,t
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
pf:function(a,b){var u
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
pi:function(a,b){var u
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
f9:function(a){if(0>=a.length)return H.d(a,0)
return a[0].toUpperCase()+C.a.am(a,1)},
ll:function(a,b,c,d,e){var u=new A.j6(a,c,e)
u.f=d
P.nU(d,0,P.n)
return u},
d7:function d7(a,b,c){this.a=a
this.b=b
this.c=c},
fp:function fp(a){this.a=a},
a4:function a4(a,b,c){this.a=a
this.b=b
this.c=c},
hw:function hw(a,b){var _=this
_.kc=_.dU=_.bN=_.br=_.be=_.y2=_.y1=_.x2=_.x1=_.ry=_.rx=_.r2=_.r1=_.k4=_.k3=_.k2=_.k1=_.id=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=null
_.kk=_.kj=_.ki=_.cD=_.cC=_.cB=_.cA=_.cz=_.cw=_.cv=_.cu=_.kh=_.e5=_.e4=_.kg=_.e3=_.e2=_.e1=_.kf=_.e0=_.e_=_.dZ=_.ke=_.dY=_.dX=_.kd=_.dW=_.dV=null
_.a=a
_.b=b
_.y=_.x=_.r=_.f=_.e=_.d=_.c=null},
d8:function d8(a,b){this.a=a
this.b=b},
de:function de(a,b){this.a=a
this.b=b},
dH:function dH(a,b){this.a=a
this.b=b},
dR:function dR(a,b){this.a=a
this.b=b},
hz:function hz(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5){var _=this
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
_.be=b3
_.br=b4
_.bN=b5},
cK:function cK(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cL:function cL(a,b,c,d,e,f){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.f=e
_.r=f},
cN:function cN(a,b,c,d,e,f,g,h,i,j){var _=this
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
cO:function cO(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var _=this
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
dP:function dP(){},
e4:function e4(){},
jb:function jb(a){this.a=a},
bC:function bC(a,b,c){this.a=a
this.c=b
this.d=c},
j8:function j8(a,b,c){this.a=a
this.c=b
this.d=c},
j9:function j9(a,b,c){this.a=a
this.c=b
this.d=c},
ja:function ja(a,b,c){this.a=a
this.c=b
this.d=c},
j6:function j6(a,b,c){var _=this
_.f=null
_.a=a
_.c=b
_.d=c},
Y:function Y(a,b,c){this.a=a
this.c=b
this.d=c},
j7:function j7(a,b,c){this.a=a
this.c=b
this.d=c},
G:function G(a,b,c){this.a=a
this.c=b
this.d=c},
cJ:function cJ(a,b,c){this.a=a
this.c=b
this.d=c},
jc:function jc(a,b,c){this.a=a
this.c=b
this.d=c},
cM:function cM(a,b,c){this.a=a
this.c=b
this.d=c},
ao:function ao(a,b,c){this.a=a
this.c=b
this.d=c},
a7:function a7(a,b,c){this.a=a
this.c=b
this.d=c},
c2:function c2(a,b,c){this.a=a
this.c=b
this.d=c}},T={dX:function dX(){},dY:function dY(){},iT:function iT(){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=null},iU:function iU(){var _=this
_.y=_.d=_.c=_.b=_.a=null},iV:function iV(a){var _=this
_.a=a
_.e=_.d=_.b=null},iW:function iW(a,b,c,d,e,f,g){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f
_.r=g}}
var w=[C,H,J,P,W,L,B,K,F,O,E,Z,D,X,V,U,M,A,T]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.lc.prototype={}
J.a.prototype={
p:function(a,b){return a===b},
gG:function(a){return H.cG(a)},
i:function(a){return"Instance of '"+H.f(H.cH(a))+"'"}}
J.hh.prototype={
i:function(a){return String(a)},
gG:function(a){return a?519018:218159},
$iaz:1}
J.dn.prototype={
p:function(a,b){return null==b},
i:function(a){return"null"},
gG:function(a){return 0},
$ian:1}
J.dp.prototype={
gG:function(a){return 0},
i:function(a){return String(a)},
$inQ:1}
J.i2.prototype={}
J.bD.prototype={}
J.bu.prototype={
i:function(a){var u=a[$.n4()]
if(u==null)return this.eU(a)
return"JavaScript function for "+H.f(J.aF(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}}}
J.bs.prototype={
jC:function(a,b){var u
if(!!a.fixed$length)H.u(P.z("removeAt"))
u=a.length
if(b>=u)throw H.e(P.dJ(b,null))
return a.splice(b,1)[0]},
X:function(a,b){var u
if(!!a.fixed$length)H.u(P.z("remove"))
for(u=0;u<a.length;++u)if(J.K(a[u],b)){a.splice(u,1)
return!0}return!1},
aD:function(a,b){var u,t
if(!!a.fixed$length)H.u(P.z("addAll"))
for(u=b.length,t=0;t<b.length;b.length===u||(0,H.q)(b),++t)a.push(b[t])},
I:function(a,b){var u,t=a.length
for(u=0;u<t;++u){b.$1(a[u])
if(a.length!==t)throw H.e(P.bN(a))}},
u:function(a,b){var u,t,s=a.length,r=new Array(s)
r.fixed$length=Array
for(u=0;u<a.length;++u){t=H.f(a[u])
if(u>=s)return H.d(r,u)
r[u]=t}return r.join(b)},
jd:function(a){return this.u(a,"")},
j7:function(a,b,c){var u,t,s=a.length
for(u=b,t=0;t<s;++t){u=c.$2(u,a[t])
if(a.length!==s)throw H.e(P.bN(a))}return u},
j8:function(a,b,c){return this.j7(a,b,c,null)},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
eR:function(a,b,c){if(b<0||b>a.length)throw H.e(P.a0(b,0,a.length,"start",null))
if(c==null)c=a.length
else if(c<b||c>a.length)throw H.e(P.a0(c,b,a.length,"end",null))
if(b===c)return H.b([],[H.aA(a,0)])
return H.b(a.slice(b,c),[H.aA(a,0)])},
gaV:function(a){var u=a.length
if(u>0)return a[u-1]
throw H.e(H.nN())},
bl:function(a,b){if(!!a.immutable$list)H.u(P.z("sort"))
H.oj(a,b==null?J.oW():b)},
eQ:function(a){return this.bl(a,null)},
T:function(a,b){var u
for(u=0;u<a.length;++u)if(J.K(a[u],b))return!0
return!1},
i:function(a){return P.l9(a,"[","]")},
gW:function(a){return new J.aa(a,a.length)},
gG:function(a){return H.cG(a)},
gm:function(a){return a.length},
sm:function(a,b){var u="newLength"
if(!!a.fixed$length)H.u(P.z("set length"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(P.fo(b,u,null))
if(b<0)throw H.e(P.a0(b,0,null,u,null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.be(a,b))
if(b>=a.length||b<0)throw H.e(H.be(a,b))
return a[b]},
k:function(a,b,c){if(!!a.immutable$list)H.u(P.z("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.be(a,b))
if(b>=a.length||b<0)throw H.e(H.be(a,b))
a[b]=c},
$ir:1,
$ii:1,
$ip:1}
J.lb.prototype={}
J.aa.prototype={
gK:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.e(H.q(s))
u=t.c
if(u>=r){t.d=null
return!1}t.d=s[u]
t.c=u+1
return!0}}
J.bT.prototype={
ax:function(a,b){var u
if(typeof b!=="number")throw H.e(H.a9(b))
if(a<b)return-1
else if(a>b)return 1
else if(a===b){if(a===0){u=this.gbR(b)
if(this.gbR(a)===u)return 0
if(this.gbR(a))return-1
return 1}return 0}else if(isNaN(a)){if(isNaN(b))return 0
return 1}else return-1},
gbR:function(a){return a===0?1/a<0:a<0},
az:function(a){var u
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){u=a<0?Math.ceil(a):Math.floor(a)
return u+0}throw H.e(P.z(""+a+".toInt()"))},
bP:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.e(P.z(""+a+".floor()"))},
ay:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.z(""+a+".round()"))},
iO:function(a,b,c){if(C.c.ax(b,c)>0)throw H.e(H.a9(b))
if(this.ax(a,b)<0)return b
if(this.ax(a,c)>0)return c
return a},
eD:function(a,b){var u
if(b>20)throw H.e(P.a0(b,0,20,"fractionDigits",null))
u=a.toFixed(b)
if(a===0&&this.gbR(a))return"-"+u
return u},
bw:function(a,b){var u,t,s,r
if(b<2||b>36)throw H.e(P.a0(b,2,36,"radix",null))
u=a.toString(b)
if(C.a.V(u,u.length-1)!==41)return u
t=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(u)
if(t==null)H.u(P.z("Unexpected toString result: "+u))
s=t.length
if(1>=s)return H.d(t,1)
u=t[1]
if(3>=s)return H.d(t,3)
r=+t[3]
s=t[2]
if(s!=null){u+=s
r-=s.length}return u+C.a.j("0",r)},
i:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gG:function(a){var u,t,s,r,q=a|0
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
eV:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.dB(a,b)},
a5:function(a,b){return(a|0)===a?a/b|0:this.dB(a,b)},
dB:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.e(P.z("Result of truncating division is "+H.f(u)+": "+H.f(a)+" ~/ "+b))},
eP:function(a,b){if(b<0)throw H.e(H.a9(b))
return b>31?0:a<<b>>>0},
ba:function(a,b){var u
if(a>0)u=this.dA(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
im:function(a,b){if(b<0)throw H.e(H.a9(b))
return this.dA(a,b)},
dA:function(a,b){return b>31?0:a>>>b},
$iah:1}
J.dm.prototype={
cQ:function(a,b){var u=this.eP(1,b-1)
return((a&u-1)>>>0)-((a&u)>>>0)},
$in:1}
J.dl.prototype={}
J.bt.prototype={
V:function(a,b){if(b<0)throw H.e(H.be(a,b))
if(b>=a.length)H.u(H.be(a,b))
return a.charCodeAt(b)},
H:function(a,b){if(b>=a.length)throw H.e(H.be(a,b))
return a.charCodeAt(b)},
l:function(a,b){if(typeof b!=="string")throw H.e(P.fo(b,null,null))
return a+b},
bi:function(a,b,c,d){var u,t
c=P.ba(b,c,a.length)
if(typeof c!=="number"||Math.floor(c)!==c)H.u(H.a9(c))
u=a.substring(0,b)
t=a.substring(c)
return u+d+t},
ac:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
u=c+b.length
if(u>a.length)return!1
return b===a.substring(c,u)},
al:function(a,b){return this.ac(a,b,0)},
v:function(a,b,c){if(typeof b!=="number"||Math.floor(b)!==b)H.u(H.a9(b))
if(c==null)c=a.length
if(typeof b!=="number")return b.B()
if(b<0)throw H.e(P.dJ(b,null))
if(b>c)throw H.e(P.dJ(b,null))
if(c>a.length)throw H.e(P.dJ(c,null))
return a.substring(b,c)},
am:function(a,b){return this.v(a,b,null)},
j:function(a,b){var u,t
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.M)
for(u=a,t="";!0;){if((b&1)===1)t=u+t
b=b>>>1
if(b===0)break
u+=u}return t},
aW:function(a,b){var u=b-a.length
if(u<=0)return a
return this.j(" ",u)+a},
bQ:function(a,b,c){var u
if(c<0||c>a.length)throw H.e(P.a0(c,0,a.length,null,null))
u=a.indexOf(b,c)
return u},
ec:function(a,b){return this.bQ(a,b,0)},
iT:function(a,b,c){var u=a.length
if(c>u)throw H.e(P.a0(c,0,u,null,null))
return H.n0(a,b,c)},
T:function(a,b){return this.iT(a,b,0)},
ax:function(a,b){var u
if(typeof b!=="string")throw H.e(H.a9(b))
if(a===b)u=0
else u=a<b?-1:1
return u},
i:function(a){return a},
gG:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gm:function(a){return a.length},
$io:1}
H.R.prototype={
gm:function(a){return this.a.length},
h:function(a,b){return C.a.V(this.a,b)},
$ar:function(){return[P.n]},
$aw:function(){return[P.n]},
$ai:function(){return[P.n]},
$ap:function(){return[P.n]}}
H.r.prototype={}
H.cw.prototype={
gK:function(a){return this.d},
w:function(){var u,t=this,s=t.a,r=J.ag(s),q=r.gm(s)
if(t.b!=q)throw H.e(P.bN(s))
u=t.c
if(typeof q!=="number")return H.c(q)
if(u>=q){t.d=null
return!1}t.d=r.L(s,u);++t.c
return!0}}
H.cx.prototype={
gW:function(a){return new H.dv(J.b0(this.a),this.b)},
gm:function(a){return J.ar(this.a)},
L:function(a,b){return this.b.$1(J.l0(this.a,b))},
$ai:function(a,b){return[b]}}
H.fY.prototype={$ir:1,
$ar:function(a,b){return[b]}}
H.dv.prototype={
w:function(){var u=this,t=u.b
if(t.w()){u.a=u.c.$1(t.gK(t))
return!0}u.a=null
return!1},
gK:function(a){return this.a}}
H.jD.prototype={
gW:function(a){return new H.jE(J.b0(this.a),this.b)}}
H.jE.prototype={
w:function(){var u,t
for(u=this.a,t=this.b;u.w();)if(t.$1(u.gK(u)))return!0
return!1},
gK:function(a){var u=this.a
return u.gK(u)}}
H.di.prototype={}
H.jg.prototype={
k:function(a,b,c){throw H.e(P.z("Cannot modify an unmodifiable list"))}}
H.e5.prototype={}
H.fK.prototype={
i:function(a){return P.le(this)},
k:function(a,b,c){return H.nH()},
$iU:1}
H.fL.prototype={
gm:function(a){return this.a},
cs:function(a,b){if("__proto__"===b)return!1
return this.b.hasOwnProperty(b)},
h:function(a,b){if(!this.cs(0,b))return
return this.di(b)},
di:function(a){return this.b[a]},
I:function(a,b){var u,t,s,r=this.c
for(u=r.length,t=0;t<u;++t){s=r[t]
b.$2(s,this.di(s))}}}
H.j4.prototype={
ar:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
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
H.hY.prototype={
i:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.f(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.hk.prototype={
i:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.f(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.f(t.a)+")"
return s+r+"' on '"+u+"' ("+H.f(t.a)+")"}}
H.jf.prototype={
i:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.kV.prototype={
$1:function(a){if(!!J.H(a).$ibo)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:10}
H.eL.prototype={
i:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$ibA:1}
H.cp.prototype={
i:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+H.d2(t==null?"unknown":t)+"'"},
gk_:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.iN.prototype={}
H.iH.prototype={
i:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.d2(u)+"'"}}
H.cm.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.cm))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gG:function(a){var u,t=this.c
if(t==null)u=H.cG(this.a)
else u=typeof t!=="object"?J.cl(t):H.cG(t)
return(u^H.cG(this.b))>>>0},
i:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.f(this.d)+"' of "+("Instance of '"+H.f(H.cH(u))+"'")}}
H.fC.prototype={
i:function(a){return this.a}}
H.il.prototype={
i:function(a){return"RuntimeError: "+H.f(this.a)}}
H.F.prototype={
gm:function(a){return this.a},
gaU:function(a){return new H.bV(this,[H.aA(this,0)])},
gjX:function(a){var u=this,t=H.aA(u,0)
return H.nV(new H.bV(u,[t]),new H.hj(u),t,H.aA(u,1))},
cs:function(a,b){var u=this.b
if(u==null)return!1
return this.fF(u,b)},
h:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.bD(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.bD(r,b)
s=t==null?null:t.b
return s}else return q.jc(b)},
jc:function(a){var u,t,s=this.d
if(s==null)return
u=this.dk(s,J.cl(a)&0x3ffffff)
t=this.ed(u,a)
if(t<0)return
return u[t].b},
k:function(a,b,c){var u,t,s,r,q,p,o=this
if(typeof b==="string"){u=o.b
o.d6(u==null?o.b=o.ca():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.d6(t==null?o.c=o.ca():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.ca()
r=J.cl(b)&0x3ffffff
q=o.dk(s,r)
if(q==null)o.cg(s,r,[o.cb(b,c)])
else{p=o.ed(q,b)
if(p>=0)q[p].b=c
else q.push(o.cb(b,c))}}},
I:function(a,b){var u=this,t=u.e,s=u.r
for(;t!=null;){b.$2(t.a,t.b)
if(s!==u.r)throw H.e(P.bN(u))
t=t.c}},
d6:function(a,b,c){var u=this.bD(a,b)
if(u==null)this.cg(a,b,this.cb(b,c))
else u.b=c},
cb:function(a,b){var u=this,t=new H.hn(a,b)
if(u.e==null)u.e=u.f=t
else u.f=u.f.c=t;++u.a
u.r=u.r+1&67108863
return t},
ed:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1},
i:function(a){return P.le(this)},
bD:function(a,b){return a[b]},
dk:function(a,b){return a[b]},
cg:function(a,b,c){a[b]=c},
fJ:function(a,b){delete a[b]},
fF:function(a,b){return this.bD(a,b)!=null},
ca:function(){var u="<non-identifier-key>",t=Object.create(null)
this.cg(t,u,t)
this.fJ(t,u)
return t}}
H.hj.prototype={
$1:function(a){return this.a.h(0,a)},
$S:function(){var u=this.a
return{func:1,ret:H.aA(u,1),args:[H.aA(u,0)]}}}
H.hn.prototype={}
H.bV.prototype={
gm:function(a){return this.a.a},
gW:function(a){var u=this.a,t=new H.ho(u,u.r)
t.c=u.e
return t}}
H.ho.prototype={
gK:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bN(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.c
return!0}}}}
H.kM.prototype={
$1:function(a){return this.a(a)},
$S:10}
H.kN.prototype={
$2:function(a,b){return this.a(a,b)}}
H.kO.prototype={
$1:function(a){return this.a(a)}}
H.hi.prototype={
i:function(a){return"RegExp/"+this.a+"/"+this.b.flags},
$ioc:1}
H.cC.prototype={$icC:1}
H.bw.prototype={$ibw:1}
H.dz.prototype={
gm:function(a){return a.length},
$iC:1,
$aC:function(){}}
H.cD.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]},
k:function(a,b,c){H.b_(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.J]},
$aw:function(){return[P.J]},
$ii:1,
$ai:function(){return[P.J]},
$ip:1,
$ap:function(){return[P.J]}}
H.dA.prototype={
k:function(a,b,c){H.b_(b,a,a.length)
a[b]=c},
$ir:1,
$ar:function(){return[P.n]},
$aw:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]},
$ip:1,
$ap:function(){return[P.n]}}
H.hT.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.hU.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.hV.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.hW.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.hX.prototype={
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.dB.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b_(b,a,a.length)
return a[b]}}
H.bX.prototype={
gm:function(a){return a.length},
h:function(a,b){H.b_(b,a,a.length)
return a[b]},
$ibX:1,
$ic1:1}
H.cR.prototype={}
H.cS.prototype={}
H.cT.prototype={}
H.cU.prototype={}
P.jH.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:11}
P.jG.prototype={
$1:function(a){var u,t
this.a.a=a
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)}}
P.jI.prototype={
$0:function(){this.a.$0()}}
P.jJ.prototype={
$0:function(){this.a.$0()}}
P.eR.prototype={
fc:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.bc(new P.kp(this,b),0),a)
else throw H.e(P.z("`setTimeout()` not found."))},
fd:function(a,b){if(self.setTimeout!=null)self.setInterval(H.bc(new P.ko(this,a,Date.now(),b),0),a)
else throw H.e(P.z("Periodic timer."))},
$ie_:1}
P.kp.prototype={
$0:function(){this.a.c=1
this.b.$0()}}
P.ko.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.c.eV(u,q)}s.c=r
t.d.$1(s)}}
P.c6.prototype={
i:function(a){return"IterationMarker("+this.b+", "+H.f(this.a)+")"}}
P.cX.prototype={
gK:function(a){var u=this.c
if(u==null)return this.b
return u.gK(u)},
w:function(){var u,t,s,r,q=this
for(;!0;){u=q.c
if(u!=null)if(u.w())return!0
else q.c=null
t=function(a,b,c){var p,o=b
while(true)try{return a(o,p)}catch(n){p=n
o=c}}(q.a,0,1)
if(t instanceof P.c6){s=t.b
if(s===2){u=q.d
if(u==null||u.length===0){q.b=null
return!1}if(0>=u.length)return H.d(u,-1)
q.a=u.pop()
continue}else{u=t.a
if(s===3)throw u
else{r=J.b0(u)
if(!!r.$icX){u=q.d
if(u==null)u=q.d=[]
u.push(q.a)
q.a=r.a
continue}else{q.c=r
continue}}}}else{q.b=t
return!0}}return!1}}
P.kn.prototype={
gW:function(a){return new P.cX(this.a())}}
P.jM.prototype={
iS:function(a){var u
if(a==null)a=new P.cE()
u=this.a
if(u.a!==0)throw H.e(P.md("Future already completed"))
u.ft(a,null)}}
P.jF.prototype={
iR:function(a,b){var u=this.a
if(u.a!==0)throw H.e(P.md("Future already completed"))
u.fs(b)}}
P.jR.prototype={
jg:function(a){if((this.c&15)!==6)return!0
return this.b.b.cP(this.d,a.a)},
jb:function(a){var u=this.e,t=this.b.b
if(H.ly(u,{func:1,args:[P.V,P.bA]}))return t.jI(u,a.a,a.b)
else return t.cP(u,a.a)}}
P.aZ.prototype={
eC:function(a,b,c){var u,t=$.N
if(t!==C.e)b=b!=null?P.pk(b,t):b
u=new P.aZ($.N,[c])
this.d7(new P.jR(u,b==null?1:3,a,b))
return u},
jP:function(a,b){return this.eC(a,null,b)},
d7:function(a){var u,t=this,s=t.a
if(s<=1){a.a=t.c
t.c=a}else{if(s===2){s=t.c
u=s.a
if(u<4){s.d7(a)
return}t.a=u
t.c=s.c}P.cb(null,null,t.b,new P.jS(t,a))}},
dt:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=p.c
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){u=p.c
q=u.a
if(q<4){u.dt(a)
return}p.a=q
p.c=u.c}o.a=p.bH(a)
P.cb(null,null,p.b,new P.k_(o,p))}},
bG:function(){var u=this.c
this.c=null
return this.bH(u)},
bH:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
fD:function(a){var u,t=this,s=t.$ti
if(H.kG(a,"$ibp",s,"$abp"))if(H.kG(a,"$iaZ",s,null))P.jV(a,t)
else P.mx(a,t)
else{u=t.bG()
t.a=4
t.c=a
P.c5(t,u)}},
c4:function(a,b){var u=this,t=u.bG()
u.a=8
u.c=new P.bH(a,b)
P.c5(u,t)},
fs:function(a){var u=this
if(H.kG(a,"$ibp",u.$ti,"$abp")){u.fA(a)
return}u.a=1
P.cb(null,null,u.b,new P.jU(u,a))},
fA:function(a){var u=this
if(H.kG(a,"$iaZ",u.$ti,null)){if(a.a===8){u.a=1
P.cb(null,null,u.b,new P.jZ(u,a))}else P.jV(a,u)
return}P.mx(a,u)},
ft:function(a,b){this.a=1
P.cb(null,null,this.b,new P.jT(this,a,b))},
$ibp:1}
P.jS.prototype={
$0:function(){P.c5(this.a,this.b)}}
P.k_.prototype={
$0:function(){P.c5(this.b,this.a.a)}}
P.jW.prototype={
$1:function(a){var u=this.a
u.a=0
u.fD(a)},
$S:11}
P.jX.prototype={
$2:function(a,b){this.a.c4(a,b)},
$1:function(a){return this.$2(a,null)},
$S:18}
P.jY.prototype={
$0:function(){this.a.c4(this.b,this.c)}}
P.jU.prototype={
$0:function(){var u=this.a,t=u.bG()
u.a=4
u.c=this.b
P.c5(u,t)}}
P.jZ.prototype={
$0:function(){P.jV(this.b,this.a)}}
P.jT.prototype={
$0:function(){this.a.c4(this.b,this.c)}}
P.k2.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.eB(s.d)}catch(r){u=H.aB(r)
t=H.cg(r)
if(o.d){s=o.a.a.c.a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=o.a.a.c
else q.b=new P.bH(u,t)
q.a=!0
return}if(!!J.H(n).$ibp){if(n instanceof P.aZ&&n.a>=4){if(n.a===8){s=o.b
s.b=n.c
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.jP(new P.k3(p),null)
s.a=!1}}}
P.k3.prototype={
$1:function(a){return this.a},
$S:19}
P.k1.prototype={
$0:function(){var u,t,s,r,q=this
try{s=q.b
q.a.b=s.b.b.cP(s.d,q.c)}catch(r){u=H.aB(r)
t=H.cg(r)
s=q.a
s.b=new P.bH(u,t)
s.a=!0}}}
P.k0.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=m.a.a.c
r=m.c
if(r.jg(u)&&r.e!=null){q=m.b
q.b=r.jb(u)
q.a=!1}}catch(p){t=H.aB(p)
s=H.cg(p)
r=m.a.a.c
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.bH(t,s)
n.a=!0}}}
P.ed.prototype={}
P.dV.prototype={}
P.iK.prototype={}
P.e_.prototype={}
P.bH.prototype={
i:function(a){return H.f(this.a)},
$ibo:1}
P.kx.prototype={}
P.kF.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.cE():s
s=this.b
if(s==null)throw H.e(t)
u=H.e(t)
u.stack=s.i(0)
throw u}}
P.kb.prototype={
jK:function(a){var u,t,s,r=null
try{if(C.e===$.N){a.$0()
return}P.mH(r,r,this,a)}catch(s){u=H.aB(s)
t=H.cg(s)
P.kE(r,r,this,u,t)}},
jM:function(a,b){var u,t,s,r=null
try{if(C.e===$.N){a.$1(b)
return}P.mI(r,r,this,a,b)}catch(s){u=H.aB(s)
t=H.cg(s)
P.kE(r,r,this,u,t)}},
jN:function(a,b){return this.jM(a,b,null)},
iM:function(a){return new P.kd(this,a)},
iL:function(a){return this.iM(a,null)},
cn:function(a){return new P.kc(this,a)},
dM:function(a,b){return new P.ke(this,a,b)},
jH:function(a){if($.N===C.e)return a.$0()
return P.mH(null,null,this,a)},
eB:function(a){return this.jH(a,null)},
jL:function(a,b){if($.N===C.e)return a.$1(b)
return P.mI(null,null,this,a,b)},
cP:function(a,b){return this.jL(a,b,null,null)},
jJ:function(a,b,c){if($.N===C.e)return a.$2(b,c)
return P.pl(null,null,this,a,b,c)},
jI:function(a,b,c){return this.jJ(a,b,c,null,null,null)}}
P.kd.prototype={
$0:function(){return this.a.eB(this.b)}}
P.kc.prototype={
$0:function(){return this.a.jK(this.b)}}
P.ke.prototype={
$1:function(a){return this.a.jN(this.b,a)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.k8.prototype={
gW:function(a){var u=new P.et(this,this.r)
u.c=this.e
return u},
gm:function(a){return this.a},
T:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return u[b]!=null}else{t=this.fC(b)
return t}},
fC:function(a){var u=this.d
if(u==null)return!1
return this.c7(this.dj(u,a),a)>=0},
q:function(a,b){var u,t,s=this
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.dd(u==null?s.b=P.lq():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.dd(t==null?s.c=P.lq():t,b)}else return s.ff(0,b)},
ff:function(a,b){var u,t,s=this,r=s.d
if(r==null)r=s.d=P.lq()
u=s.de(b)
t=r[u]
if(t==null)r[u]=[s.c3(b)]
else{if(s.c7(t,b)>=0)return!1
t.push(s.c3(b))}return!0},
X:function(a,b){if(typeof b==="number"&&(b&1073741823)===b)return this.ia(this.c,b)
else return this.i9(0,b)},
i9:function(a,b){var u,t,s=this,r=s.d
if(r==null)return!1
u=s.dj(r,b)
t=s.c7(u,b)
if(t<0)return!1
s.dD(u.splice(t,1)[0])
return!0},
dd:function(a,b){if(a[b]!=null)return!1
a[b]=this.c3(b)
return!0},
ia:function(a,b){var u
if(a==null)return!1
u=a[b]
if(u==null)return!1
this.dD(u)
delete a[b]
return!0},
dn:function(){this.r=1073741823&this.r+1},
c3:function(a){var u,t=this,s=new P.k9(a)
if(t.e==null)t.e=t.f=s
else{u=t.f
s.c=u
t.f=u.b=s}++t.a
t.dn()
return s},
dD:function(a){var u=this,t=a.c,s=a.b
if(t==null)u.e=s
else t.b=s
if(s==null)u.f=t
else s.c=t;--u.a
u.dn()},
de:function(a){return J.cl(a)&1073741823},
dj:function(a,b){return a[this.de(b)]},
c7:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.K(a[t].a,b))return t
return-1}}
P.k9.prototype={}
P.et.prototype={
gK:function(a){return this.d},
w:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.e(P.bN(t))
else{t=u.c
if(t==null){u.d=null
return!1}else{u.d=t.a
u.c=t.b
return!0}}}}
P.hf.prototype={}
P.hp.prototype={$ir:1,$ii:1,$ip:1}
P.w.prototype={
gW:function(a){return new H.cw(a,this.gm(a))},
L:function(a,b){return this.h(a,b)},
jR:function(a,b){var u,t,s=this,r=H.b([],[H.pz(s,a,"w",0)])
C.b.sm(r,s.gm(a))
u=0
while(!0){t=s.gm(a)
if(typeof t!=="number")return H.c(t)
if(!(u<t))break
t=s.h(a,u)
if(u>=r.length)return H.d(r,u)
r[u]=t;++u}return r},
jQ:function(a){return this.jR(a,!0)},
e6:function(a,b,c,d){var u
P.ba(b,c,this.gm(a))
for(u=b;u<c;++u)this.k(a,u,d)},
i:function(a){return P.l9(a,"[","]")}}
P.ht.prototype={}
P.hu.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.f(a)
t.a=u+": "
t.a+=H.f(b)},
$S:5}
P.ac.prototype={
I:function(a,b){var u,t
for(u=J.b0(this.gaU(a));u.w();){t=u.gK(u)
b.$2(t,this.h(a,t))}},
gm:function(a){return J.ar(this.gaU(a))},
i:function(a){return P.le(a)},
$iU:1}
P.kq.prototype={
k:function(a,b,c){throw H.e(P.z("Cannot modify unmodifiable map"))}}
P.hv.prototype={
h:function(a,b){return J.ck(this.a,b)},
k:function(a,b,c){J.kZ(this.a,b,c)},
I:function(a,b){J.lO(this.a,b)},
gm:function(a){return J.ar(this.a)},
i:function(a){return J.aF(this.a)},
$iU:1}
P.e6.prototype={}
P.kf.prototype={
i:function(a){return P.l9(this,"{","}")},
L:function(a,b){var u,t,s
P.ma(b,"index")
for(u=P.oB(this,this.r),t=0;u.w();){s=u.d
if(b===t)return s;++t}throw H.e(P.M(b,this,"index",null,t))},
$ir:1,
$ii:1}
P.eu.prototype={}
P.eX.prototype={}
P.fx.prototype={
ji:function(a,b,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c="Invalid base64 encoding length "
a1=P.ba(a0,a1,b.length)
u=$.nm()
if(typeof a1!=="number")return H.c(a1)
t=a0
s=t
r=null
q=-1
p=-1
o=0
for(;t<a1;t=n){n=t+1
m=C.a.H(b,t)
if(m===37){l=n+2
if(l<=a1){k=H.kL(C.a.H(b,n))
j=H.kL(C.a.H(b,n+1))
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
if(m===61)continue}m=i}if(h!==-2){if(r==null)r=new P.W("")
g=r.a+=C.a.v(b,s,t)
r.a=g+H.dI(m)
s=n
continue}}throw H.e(P.S("Invalid base64 data",b,t))}if(r!=null){g=r.a+=C.a.v(b,s,a1)
f=g.length
if(q>=0)P.lP(b,p,a1,q,o,f)
else{e=C.c.aZ(f-1,4)+1
if(e===1)throw H.e(P.S(c,b,a1))
for(;e<4;){g+="="
r.a=g;++e}}g=r.a
return C.a.bi(b,a0,a1,g.charCodeAt(0)==0?g:g)}d=a1-a0
if(q>=0)P.lP(b,p,a1,q,o,d)
else{e=C.c.aZ(d,4)
if(e===1)throw H.e(P.S(c,b,a1))
if(e>1)b=C.a.bi(b,a1,a1,e===2?"==":"=")}return b}}
P.fy.prototype={}
P.fF.prototype={}
P.fM.prototype={}
P.fZ.prototype={}
P.jo.prototype={
gj5:function(){return C.N}}
P.jq.prototype={
ct:function(a){var u,t,s,r=P.ba(0,null,a.length)
if(typeof r!=="number")return r.n()
u=r-0
if(u===0)return new Uint8Array(0)
t=new Uint8Array(u*3)
s=new P.kw(t)
if(s.fL(a,0,r)!==r)s.dF(J.ns(a,r-1),0)
return new Uint8Array(t.subarray(0,H.oS(0,s.b,t.length)))}}
P.kw.prototype={
dF:function(a,b){var u,t=this,s=t.c,r=t.b,q=r+1,p=s.length
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
fL:function(a,b,c){var u,t,s,r,q,p,o,n=this
if(b!==c&&(C.a.V(a,c-1)&64512)===55296)--c
for(u=n.c,t=u.length,s=b;s<c;++s){r=C.a.H(a,s)
if(r<=127){q=n.b
if(q>=t)break
n.b=q+1
u[q]=r}else if((r&64512)===55296){if(n.b+3>=t)break
p=s+1
if(n.dF(r,C.a.H(a,p)))s=p}else if(r<=2047){q=n.b
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
P.jp.prototype={
ct:function(a){var u,t,s,r,q,p,o,n,m=P.oo(!1,a,0,null)
if(m!=null)return m
u=P.ba(0,null,J.ar(a))
t=P.mK(a,0,u)
if(t>0){s=P.cI(a,0,t)
if(t===u)return s
r=new P.W(s)
q=t
p=!1}else{q=0
r=null
p=!0}if(r==null)r=new P.W("")
o=new P.kv(!1,r)
o.c=p
o.iU(a,q,u)
if(o.e>0){H.u(P.S("Unfinished UTF-8 octet sequence",a,u))
r.a+=H.dI(65533)
o.f=o.e=o.d=0}n=r.a
return n.charCodeAt(0)==0?n:n}}
P.kv.prototype={
iU:function(a,b,c){var u,t,s,r,q,p,o,n,m,l=this,k="Bad UTF-8 encoding 0x",j=l.d,i=l.e,h=l.f
l.f=l.e=l.d=0
$label0$0:for(u=J.ag(a),t=l.b,s=b;!0;s=n){$label1$1:if(i>0){do{if(s===c)break $label0$0
r=u.h(a,s)
if(typeof r!=="number")return r.ab()
if((r&192)!==128){q=P.S(k+C.c.bw(r,16),a,s)
throw H.e(q)}else{j=(j<<6|r&63)>>>0;--i;++s}}while(i>0)
q=h-1
if(q<0||q>=4)return H.d(C.v,q)
if(j<=C.v[q]){q=P.S("Overlong encoding of 0x"+C.c.bw(j,16),a,s-h-1)
throw H.e(q)}if(j>1114111){q=P.S("Character outside valid Unicode range: 0x"+C.c.bw(j,16),a,s-h-1)
throw H.e(q)}if(!l.c||j!==65279)t.a+=H.dI(j)
l.c=!1}if(typeof c!=="number")return H.c(c)
q=s<c
for(;q;){p=P.mK(a,s,c)
if(p>0){l.c=!1
o=s+p
t.a+=P.cI(a,s,o)
if(o===c)break}else o=s
n=o+1
r=u.h(a,o)
if(typeof r!=="number")return r.B()
if(r<0){m=P.S("Negative UTF-8 code unit: -0x"+C.c.bw(-r,16),a,n-1)
throw H.e(m)}else{if((r&224)===192){j=r&31
i=1
h=1
continue $label0$0}if((r&240)===224){j=r&15
i=2
h=2
continue $label0$0}if((r&248)===240&&r<245){j=r&7
i=3
h=3
continue $label0$0}m=P.S(k+C.c.bw(r,16),a,n-1)
throw H.e(m)}}break $label0$0}if(i>0){l.d=j
l.e=i
l.f=h}}}
P.az.prototype={}
P.aj.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.aj&&this.a===b.a&&!0},
ax:function(a,b){return C.c.ax(this.a,b.a)},
gG:function(a){var u=this.a
return(u^C.c.ba(u,30))&1073741823},
i:function(a){var u=this,t=P.nI(H.o8(u)),s=P.dd(H.o6(u)),r=P.dd(H.o2(u)),q=P.dd(H.o3(u)),p=P.dd(H.o5(u)),o=P.dd(H.o7(u)),n=P.nJ(H.o4(u)),m=t+"-"+s+"-"+r+" "+q+":"+p+":"+o+"."+n
return m}}
P.J.prototype={}
P.as.prototype={
p:function(a,b){if(b==null)return!1
return b instanceof P.as&&this.a===b.a},
gG:function(a){return C.c.gG(this.a)},
ax:function(a,b){return C.c.ax(this.a,b.a)},
i:function(a){var u,t,s,r=new P.fX(),q=this.a
if(q<0)return"-"+new P.as(0-q).i(0)
u=r.$1(C.c.a5(q,6e7)%60)
t=r.$1(C.c.a5(q,1e6)%60)
s=new P.fW().$1(q%1e6)
return""+C.c.a5(q,36e8)+":"+H.f(u)+":"+H.f(t)+"."+H.f(s)}}
P.fW.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}}
P.fX.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a}}
P.bo.prototype={}
P.cE.prototype={
i:function(a){return"Throw of null."}}
P.aG.prototype={
gc6:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gc5:function(){return""},
i:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gc6()+o+u
if(!q.a)return t
s=q.gc5()
r=P.l8(q.b)
return t+s+": "+r}}
P.bz.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.f(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.f(s)
else if(t>s)u=": Not in range "+H.f(s)+".."+H.f(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.f(s)}return u}}
P.hd.prototype={
gc6:function(){return"RangeError"},
gc5:function(){var u,t=this.b
if(typeof t!=="number")return t.B()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.f(u)},
gm:function(a){return this.f}}
P.jh.prototype={
i:function(a){return"Unsupported operation: "+this.a}}
P.jd.prototype={
i:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.dU.prototype={
i:function(a){return"Bad state: "+this.a}}
P.fJ.prototype={
i:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.l8(u)+"."}}
P.i1.prototype={
i:function(a){return"Out of Memory"},
$ibo:1}
P.dS.prototype={
i:function(a){return"Stack Overflow"},
$ibo:1}
P.fR.prototype={
i:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.em.prototype={
i:function(a){return"Exception: "+this.a}}
P.h9.prototype={
i:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this.a,h=""!==i?"FormatException: "+i:"FormatException",g=this.c,f=this.b
if(typeof f==="string"){if(g!=null)i=g<0||g>f.length
else i=!1
if(i)g=null
if(g==null){u=f.length>78?C.a.v(f,0,75)+"...":f
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
k=""}j=C.a.v(f,m,n)
return h+l+j+k+"\n"+C.a.j(" ",g-m+l.length)+"^\n"}else return g!=null?h+(" (at offset "+H.f(g)+")"):h}}
P.n.prototype={}
P.i.prototype={
gm:function(a){var u,t=this.gW(this)
for(u=0;t.w();)++u
return u},
L:function(a,b){var u,t,s
P.ma(b,"index")
for(u=this.gW(this),t=0;u.w();){s=u.gK(u)
if(b===t)return s;++t}throw H.e(P.M(b,this,"index",null,t))},
i:function(a){return P.nM(this,"(",")")}}
P.hg.prototype={}
P.p.prototype={$ir:1,$ii:1}
P.U.prototype={}
P.an.prototype={
gG:function(a){return P.V.prototype.gG.call(this,this)},
i:function(a){return"null"}}
P.ah.prototype={}
P.V.prototype={constructor:P.V,$iV:1,
p:function(a,b){return this===b},
gG:function(a){return H.cG(this)},
i:function(a){return"Instance of '"+H.f(H.cH(this))+"'"},
toString:function(){return this.i(this)}}
P.bA.prototype={}
P.o.prototype={}
P.W.prototype={
gm:function(a){return this.a.length},
i:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
P.jm.prototype={
$2:function(a,b){var u,t,s,r=J.lz(b).ec(b,"=")
if(r===-1){if(b!=="")J.kZ(a,P.lu(b,0,b.length,this.a,!0),"")}else if(r!==0){u=C.a.v(b,0,r)
t=C.a.am(b,r+1)
s=this.a
J.kZ(a,P.lu(u,0,u.length,s,!0),P.lu(t,0,t.length,s,!0))}return a}}
P.jj.prototype={
$2:function(a,b){throw H.e(P.S("Illegal IPv4 address, "+a,this.a,b))}}
P.jk.prototype={
$2:function(a,b){throw H.e(P.S("Illegal IPv6 address, "+a,this.a,b))},
$1:function(a){return this.$2(a,null)}}
P.jl.prototype={
$2:function(a,b){var u
if(b-a>4)this.a.$2("an IPv6 part can only contain a maximum of 4 hex digits",a)
u=P.ch(C.a.v(this.b,a,b),null,16)
if(typeof u!=="number")return u.B()
if(u<0||u>65535)this.a.$2("each part must be in the range of `0x0..0xFFFF`",a)
return u}}
P.c7.prototype={
geG:function(){return this.b},
gcH:function(a){var u=this.c
if(u==null)return""
if(C.a.al(u,"["))return C.a.v(u,1,u.length-1)
return u},
gbT:function(a){var u=this.d
if(u==null)return P.mz(this.a)
return u},
gcO:function(a){var u=this.f
return u==null?"":u},
ge7:function(){var u=this.r
return u==null?"":u},
ey:function(a,b){var u,t,s,r=this,q=r.a,p=q==="file",o=r.b,n=r.d,m=r.c
if(!(m!=null))m=o.length!==0||n!=null||p?"":null
u=r.e
if(!p)t=m!=null&&u.length!==0
else t=!0
if(t&&!C.a.al(u,"/"))u="/"+u
s=P.ls(null,0,0,b)
return new P.c7(q,o,m,n,u,s,r.r)},
gex:function(){var u,t=this.Q
if(t==null){t=this.f
u=P.o
u=this.Q=new P.e6(P.ml(t==null?"":t),[u,u])
t=u}return t},
ge8:function(){return this.c!=null},
geb:function(){return this.f!=null},
ge9:function(){return this.r!=null},
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
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!!J.H(b).$ilm)if(s.a==b.gbY())if(s.c!=null===b.ge8())if(s.b==b.geG())if(s.gcH(s)==b.gcH(b))if(s.gbT(s)==b.gbT(b))if(s.e===b.gep(b)){u=s.f
t=u==null
if(!t===b.geb()){if(t)u=""
if(u===b.gcO(b)){u=s.r
t=u==null
if(!t===b.ge9()){if(t)u=""
u=u===b.ge7()}else u=!1}else u=!1}else u=!1}else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
else u=!1
return u},
gG:function(a){var u=this.z
return u==null?this.z=C.a.gG(this.i(0)):u},
$ilm:1,
gbY:function(){return this.a},
gep:function(a){return this.e}}
P.kr.prototype={
$1:function(a){throw H.e(P.S("Invalid port",this.a,this.b+1))}}
P.ks.prototype={
$1:function(a){return P.eY(C.X,a,C.f,!1)}}
P.ku.prototype={
$2:function(a,b){var u=this.b,t=this.a
u.a+=t.a
t.a="&"
t=u.a+=H.f(P.eY(C.h,a,C.f,!0))
if(b!=null&&b.length!==0){u.a=t+"="
u.a+=H.f(P.eY(C.h,b,C.f,!0))}}}
P.kt.prototype={
$2:function(a,b){var u,t
if(b==null||typeof b==="string")this.a.$2(a,b)
else for(u=J.b0(b),t=this.a;u.w();)t.$2(a,u.gK(u))}}
P.ji.prototype={
geF:function(){var u,t,s,r,q=this,p=null,o=q.c
if(o!=null)return o
o=q.b
if(0>=o.length)return H.d(o,0)
u=q.a
o=o[0]+1
t=C.a.bQ(u,"?",o)
s=u.length
if(t>=0){r=P.d_(u,t+1,s,C.n,!1)
s=t}else r=p
return q.c=new P.jO("data",p,p,p,P.d_(u,o,s,C.y,!1),r,p)},
i:function(a){var u,t=this.b
if(0>=t.length)return H.d(t,0)
u=this.a
return t[0]===-1?"data:"+u:u}}
P.kz.prototype={
$1:function(a){return new Uint8Array(96)}}
P.ky.prototype={
$2:function(a,b){var u=this.a
if(a>=u.length)return H.d(u,a)
u=u[a]
J.nt(u,0,96,b)
return u},
$S:20}
P.kA.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=b.length,t=a.length,s=0;s<u;++s){r=C.a.H(b,s)^96
if(r>=t)return H.d(a,r)
a[r]=c}}}
P.kB.prototype={
$3:function(a,b,c){var u,t,s,r
for(u=C.a.H(b,0),t=C.a.H(b,1),s=a.length;u<=t;++u){r=(u^96)>>>0
if(r>=s)return H.d(a,r)
a[r]=c}}}
P.kg.prototype={
ge8:function(){return this.c>0},
gea:function(){var u,t
if(this.c>0){u=this.d
if(typeof u!=="number")return u.l()
t=this.e
if(typeof t!=="number")return H.c(t)
t=u+1<t
u=t}else u=!1
return u},
geb:function(){var u=this.f
if(typeof u!=="number")return u.B()
return u<this.r},
ge9:function(){return this.r<this.a.length},
gdl:function(){return this.b===4&&C.a.al(this.a,"http")},
gdm:function(){return this.b===5&&C.a.al(this.a,"https")},
gbY:function(){var u,t=this,s="file",r="package",q=t.b
if(q<=0)return""
u=t.x
if(u!=null)return u
if(t.gdl())q=t.x="http"
else if(t.gdm()){t.x="https"
q="https"}else if(q===4&&C.a.al(t.a,s)){t.x=s
q=s}else if(q===7&&C.a.al(t.a,r)){t.x=r
q=r}else{q=C.a.v(t.a,0,q)
t.x=q}return q},
geG:function(){var u=this.c,t=this.b+3
return u>t?C.a.v(this.a,t,u-1):""},
gcH:function(a){var u=this.c
return u>0?C.a.v(this.a,u,this.d):""},
gbT:function(a){var u,t=this
if(t.gea()){u=t.d
if(typeof u!=="number")return u.l()
return P.ch(C.a.v(t.a,u+1,t.e),null,null)}if(t.gdl())return 80
if(t.gdm())return 443
return 0},
gep:function(a){return C.a.v(this.a,this.e,this.f)},
gcO:function(a){var u=this.f,t=this.r
if(typeof u!=="number")return u.B()
return u<t?C.a.v(this.a,u+1,t):""},
ge7:function(){var u=this.r,t=this.a
return u<t.length?C.a.am(t,u+1):""},
gex:function(){var u=this,t=u.f
if(typeof t!=="number")return t.B()
if(t>=u.r)return C.Y
t=P.o
return new P.e6(P.ml(u.gcO(u)),[t,t])},
ey:function(a,b){var u,t,s,r,q,p=this,o=null,n=p.gbY(),m=n==="file",l=p.c,k=l>0?C.a.v(p.a,p.b+3,l):"",j=p.gea()?p.gbT(p):o
l=p.c
if(l>0)u=C.a.v(p.a,l,p.d)
else u=k.length!==0||j!=null||m?"":o
l=p.a
t=C.a.v(l,p.e,p.f)
if(!m)s=u!=null&&t.length!==0
else s=!0
if(s&&!C.a.al(t,"/"))t="/"+t
r=P.ls(o,0,0,b)
s=p.r
q=s<l.length?C.a.am(l,s+1):o
return new P.c7(n,k,u,j,t,r,q)},
gG:function(a){var u=this.y
return u==null?this.y=C.a.gG(this.a):u},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
return!!J.H(b).$ilm&&this.a===b.i(0)},
i:function(a){return this.a},
$ilm:1}
P.jO.prototype={}
W.m.prototype={}
W.fk.prototype={
gm:function(a){return a.length}}
W.fm.prototype={
i:function(a){return String(a)}}
W.fn.prototype={
i:function(a){return String(a)}}
W.bJ.prototype={$ibJ:1}
W.bM.prototype={
cT:function(a,b,c){if(c!=null)return a.getContext(b,P.ps(c))
return a.getContext(b)},
eK:function(a,b){return this.cT(a,b,null)},
$ibM:1}
W.bl.prototype={
gm:function(a){return a.length}}
W.fN.prototype={
gm:function(a){return a.length}}
W.I.prototype={$iI:1}
W.cq.prototype={
gm:function(a){return a.length}}
W.fO.prototype={}
W.ap.prototype={}
W.aI.prototype={}
W.fP.prototype={
gm:function(a){return a.length}}
W.fQ.prototype={
gm:function(a){return a.length}}
W.fS.prototype={
gm:function(a){return a.length}}
W.fT.prototype={
i:function(a){return String(a)}}
W.df.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[[P.ae,P.ah]]},
$iC:1,
$aC:function(){return[[P.ae,P.ah]]},
$aw:function(){return[[P.ae,P.ah]]},
$ii:1,
$ai:function(){return[[P.ae,P.ah]]},
$ip:1,
$ap:function(){return[[P.ae,P.ah]]}}
W.dg.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(this.gaY(a))+" x "+H.f(this.gaT(a))},
p:function(a,b){var u
if(b==null)return!1
u=J.H(b)
return!!u.$iae&&a.left===u.gaf(b)&&a.top===u.gbU(b)&&this.gaY(a)===u.gaY(b)&&this.gaT(a)===u.gaT(b)},
gG:function(a){return W.my(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(this.gaY(a)),C.d.gG(this.gaT(a)))},
gdN:function(a){return a.bottom},
gaT:function(a){return a.height},
gaf:function(a){return a.left},
gah:function(a){return a.right},
gbU:function(a){return a.top},
gaY:function(a){return a.width},
$iae:1,
$aae:function(){return[P.ah]}}
W.fU.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[P.o]},
$iC:1,
$aC:function(){return[P.o]},
$aw:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ip:1,
$ap:function(){return[P.o]}}
W.fV.prototype={
gm:function(a){return a.length}}
W.jL.prototype={
gm:function(a){return this.b.length},
h:function(a,b){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
k:function(a,b,c){var u=this.b
if(b<0||b>=u.length)return H.d(u,b)
this.a.replaceChild(c,u[b])},
q:function(a,b){this.a.appendChild(b)
return b},
gW:function(a){var u=this.jQ(this)
return new J.aa(u,u.length)},
$ar:function(){return[W.a_]},
$aw:function(){return[W.a_]},
$ai:function(){return[W.a_]},
$ap:function(){return[W.a_]}}
W.a_.prototype={
gcr:function(a){return new W.jL(a,a.children)},
gdP:function(a){var u=a.clientLeft,t=a.clientTop,s=a.clientWidth,r=a.clientHeight
if(typeof s!=="number")return s.B()
if(s<0)s=-s*0
if(typeof r!=="number")return r.B()
if(r<0)r=-r*0
return new P.ae(u,t,s,r,[P.ah])},
i:function(a){return a.localName},
$ia_:1}
W.j.prototype={$ij:1}
W.h.prototype={
iG:function(a,b,c,d){if(c!=null)this.fh(a,b,c,!1)},
fh:function(a,b,c,d){return a.addEventListener(b,H.bc(c,1),!1)}}
W.at.prototype={$iat:1}
W.cr.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.at]},
$iC:1,
$aC:function(){return[W.at]},
$aw:function(){return[W.at]},
$ii:1,
$ai:function(){return[W.at]},
$ip:1,
$ap:function(){return[W.at]},
$icr:1}
W.h4.prototype={
gm:function(a){return a.length}}
W.h8.prototype={
gm:function(a){return a.length}}
W.aJ.prototype={$iaJ:1}
W.hc.prototype={
gm:function(a){return a.length}}
W.ct.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.D]},
$iC:1,
$aC:function(){return[W.D]},
$aw:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]}}
W.b2.prototype={$ib2:1,
gdR:function(a){return a.data}}
W.cu.prototype={$icu:1}
W.bU.prototype={$ibU:1}
W.hr.prototype={
i:function(a){return String(a)}}
W.hM.prototype={
gm:function(a){return a.length}}
W.cB.prototype={$icB:1}
W.hN.prototype={
h:function(a,b){return P.bd(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bd(u.value[1]))}},
gaU:function(a){var u=H.b([],[P.o])
this.I(a,new W.hO(u))
return u},
gm:function(a){return a.size},
k:function(a,b,c){throw H.e(P.z("Not supported"))},
$aac:function(){return[P.o,null]},
$iU:1,
$aU:function(){return[P.o,null]}}
W.hO.prototype={
$2:function(a,b){return this.a.push(a)}}
W.hP.prototype={
h:function(a,b){return P.bd(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bd(u.value[1]))}},
gaU:function(a){var u=H.b([],[P.o])
this.I(a,new W.hQ(u))
return u},
gm:function(a){return a.size},
k:function(a,b,c){throw H.e(P.z("Not supported"))},
$aac:function(){return[P.o,null]},
$iU:1,
$aU:function(){return[P.o,null]}}
W.hQ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aO.prototype={$iaO:1}
W.hR.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aO]},
$iC:1,
$aC:function(){return[W.aO]},
$aw:function(){return[W.aO]},
$ii:1,
$ai:function(){return[W.aO]},
$ip:1,
$ap:function(){return[W.aO]}}
W.aP.prototype={$iaP:1}
W.jK.prototype={
k:function(a,b,c){var u=this.a,t=u.childNodes
if(b<0||b>=t.length)return H.d(t,b)
u.replaceChild(c,t[b])},
gW:function(a){var u=this.a.childNodes
return new W.dj(u,u.length)},
gm:function(a){return this.a.childNodes.length},
h:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
$ar:function(){return[W.D]},
$aw:function(){return[W.D]},
$ai:function(){return[W.D]},
$ap:function(){return[W.D]}}
W.D.prototype={
jF:function(a,b){var u,t
try{u=a.parentNode
J.nq(u,b,a)}catch(t){H.aB(t)}return a},
i:function(a){var u=a.nodeValue
return u==null?this.eT(a):u},
ib:function(a,b,c){return a.replaceChild(b,c)},
$iD:1}
W.dD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.D]},
$iC:1,
$aC:function(){return[W.D]},
$aw:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]}}
W.aQ.prototype={$iaQ:1,
gm:function(a){return a.length}}
W.i4.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aQ]},
$iC:1,
$aC:function(){return[W.aQ]},
$aw:function(){return[W.aQ]},
$ii:1,
$ai:function(){return[W.aQ]},
$ip:1,
$ap:function(){return[W.aQ]}}
W.ij.prototype={
h:function(a,b){return P.bd(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bd(u.value[1]))}},
gaU:function(a){var u=H.b([],[P.o])
this.I(a,new W.ik(u))
return u},
gm:function(a){return a.size},
k:function(a,b,c){throw H.e(P.z("Not supported"))},
$aac:function(){return[P.o,null]},
$iU:1,
$aU:function(){return[P.o,null]}}
W.ik.prototype={
$2:function(a,b){return this.a.push(a)}}
W.im.prototype={
gm:function(a){return a.length}}
W.aT.prototype={$iaT:1}
W.iC.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aT]},
$iC:1,
$aC:function(){return[W.aT]},
$aw:function(){return[W.aT]},
$ii:1,
$ai:function(){return[W.aT]},
$ip:1,
$ap:function(){return[W.aT]}}
W.aU.prototype={$iaU:1}
W.iD.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aU]},
$iC:1,
$aC:function(){return[W.aU]},
$aw:function(){return[W.aU]},
$ii:1,
$ai:function(){return[W.aU]},
$ip:1,
$ap:function(){return[W.aU]}}
W.aV.prototype={$iaV:1,
gm:function(a){return a.length}}
W.iI.prototype={
h:function(a,b){return a.getItem(b)},
k:function(a,b,c){a.setItem(b,c)},
I:function(a,b){var u,t
for(u=0;!0;++u){t=a.key(u)
if(t==null)return
b.$2(t,a.getItem(t))}},
gaU:function(a){var u=H.b([],[P.o])
this.I(a,new W.iJ(u))
return u},
gm:function(a){return a.length},
$aac:function(){return[P.o,P.o]},
$iU:1,
$aU:function(){return[P.o,P.o]}}
W.iJ.prototype={
$2:function(a,b){return this.a.push(a)}}
W.aw.prototype={$iaw:1}
W.aW.prototype={$iaW:1}
W.ax.prototype={$iax:1}
W.iR.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.ax]},
$iC:1,
$aC:function(){return[W.ax]},
$aw:function(){return[W.ax]},
$ii:1,
$ai:function(){return[W.ax]},
$ip:1,
$ap:function(){return[W.ax]}}
W.iS.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aW]},
$iC:1,
$aC:function(){return[W.aW]},
$aw:function(){return[W.aW]},
$ii:1,
$ai:function(){return[W.aW]},
$ip:1,
$ap:function(){return[W.aW]}}
W.iY.prototype={
gm:function(a){return a.length}}
W.aX.prototype={$iaX:1}
W.c0.prototype={$ic0:1}
W.j1.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aX]},
$iC:1,
$aC:function(){return[W.aX]},
$aw:function(){return[W.aX]},
$ii:1,
$ai:function(){return[W.aX]},
$ip:1,
$ap:function(){return[W.aX]}}
W.j2.prototype={
gm:function(a){return a.length}}
W.bB.prototype={}
W.jn.prototype={
i:function(a){return String(a)}}
W.jB.prototype={
gm:function(a){return a.length}}
W.bE.prototype={
giY:function(a){if(a.deltaY!==undefined)return a.deltaY
throw H.e(P.z("deltaY is not supported"))},
giX:function(a){if(a.deltaX!==undefined)return a.deltaX
throw H.e(P.z("deltaX is not supported"))},
$ibE:1}
W.cQ.prototype={
ic:function(a,b){return a.requestAnimationFrame(H.bc(b,1))},
fK:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var u=['ms','moz','webkit','o']
for(var t=0;t<u.length&&!b.requestAnimationFrame;++t){b.requestAnimationFrame=b[u[t]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[u[t]+'CancelAnimationFrame']||b[u[t]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
W.jN.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.I]},
$iC:1,
$aC:function(){return[W.I]},
$aw:function(){return[W.I]},
$ii:1,
$ai:function(){return[W.I]},
$ip:1,
$ap:function(){return[W.I]}}
W.eg.prototype={
i:function(a){return"Rectangle ("+H.f(a.left)+", "+H.f(a.top)+") "+H.f(a.width)+" x "+H.f(a.height)},
p:function(a,b){var u
if(b==null)return!1
u=J.H(b)
return!!u.$iae&&a.left===u.gaf(b)&&a.top===u.gbU(b)&&a.width===u.gaY(b)&&a.height===u.gaT(b)},
gG:function(a){return W.my(C.d.gG(a.left),C.d.gG(a.top),C.d.gG(a.width),C.d.gG(a.height))},
gaT:function(a){return a.height},
gaY:function(a){return a.width}}
W.k4.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aJ]},
$iC:1,
$aC:function(){return[W.aJ]},
$aw:function(){return[W.aJ]},
$ii:1,
$ai:function(){return[W.aJ]},
$ip:1,
$ap:function(){return[W.aJ]}}
W.ez.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.D]},
$iC:1,
$aC:function(){return[W.D]},
$aw:function(){return[W.D]},
$ii:1,
$ai:function(){return[W.D]},
$ip:1,
$ap:function(){return[W.D]}}
W.kh.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aV]},
$iC:1,
$aC:function(){return[W.aV]},
$aw:function(){return[W.aV]},
$ii:1,
$ai:function(){return[W.aV]},
$ip:1,
$ap:function(){return[W.aV]}}
W.km.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a[b]},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){if(b<0||b>=a.length)return H.d(a,b)
return a[b]},
$ir:1,
$ar:function(){return[W.aw]},
$iC:1,
$aC:function(){return[W.aw]},
$aw:function(){return[W.aw]},
$ii:1,
$ai:function(){return[W.aw]},
$ip:1,
$ap:function(){return[W.aw]}}
W.jP.prototype={}
W.jQ.prototype={
$1:function(a){return this.a.$1(a)}}
W.L.prototype={
gW:function(a){return new W.dj(a,this.gm(a))}}
W.dj.prototype={
w:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.d=J.ck(u.a,t)
u.c=t
return!0}u.d=null
u.c=s
return!1},
gK:function(a){return this.d}}
W.ef.prototype={}
W.eh.prototype={}
W.ei.prototype={}
W.ej.prototype={}
W.ek.prototype={}
W.en.prototype={}
W.eo.prototype={}
W.ep.prototype={}
W.eq.prototype={}
W.ev.prototype={}
W.ew.prototype={}
W.ex.prototype={}
W.ey.prototype={}
W.eA.prototype={}
W.eB.prototype={}
W.eE.prototype={}
W.eF.prototype={}
W.eG.prototype={}
W.cV.prototype={}
W.cW.prototype={}
W.eH.prototype={}
W.eI.prototype={}
W.eM.prototype={}
W.eP.prototype={}
W.eQ.prototype={}
W.cY.prototype={}
W.cZ.prototype={}
W.eS.prototype={}
W.eT.prototype={}
W.eZ.prototype={}
W.f_.prototype={}
W.f0.prototype={}
W.f1.prototype={}
W.f2.prototype={}
W.f3.prototype={}
W.f4.prototype={}
W.f5.prototype={}
W.f6.prototype={}
W.f7.prototype={}
P.ki.prototype={
cE:function(a){var u,t=this.a,s=t.length
for(u=0;u<s;++u)if(t[u]===a)return u
t.push(a)
this.b.push(null)
return s},
bW:function(a){var u,t,s,r,q,p=this,o={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
u=J.H(a)
if(!!u.$iaj)return new Date(a.a)
if(!!u.$ioc)throw H.e(P.je("structured clone of RegExp"))
if(!!u.$iat)return a
if(!!u.$ibJ)return a
if(!!u.$icr)return a
if(!!u.$ib2)return a
if(!!u.$icC||!!u.$ibw||!!u.$icB)return a
if(!!u.$iU){t=p.cE(a)
s=p.b
r=s.length
if(t>=r)return H.d(s,t)
q=o.a=s[t]
if(q!=null)return q
q={}
o.a=q
if(t>=r)return H.d(s,t)
s[t]=q
u.I(a,new P.kk(o,p))
return o.a}if(!!u.$ip){t=p.cE(a)
o=p.b
if(t>=o.length)return H.d(o,t)
q=o[t]
if(q!=null)return q
return p.iV(a,t)}if(!!u.$inQ){t=p.cE(a)
u=p.b
s=u.length
if(t>=s)return H.d(u,t)
q=o.b=u[t]
if(q!=null)return q
q={}
o.b=q
if(t>=s)return H.d(u,t)
u[t]=q
p.j9(a,new P.kl(o,p))
return o.b}throw H.e(P.je("structured clone of other type"))},
iV:function(a,b){var u,t=J.ag(a),s=t.gm(a),r=new Array(s),q=this.b
if(b>=q.length)return H.d(q,b)
q[b]=r
if(typeof s!=="number")return H.c(s)
u=0
for(;u<s;++u){q=this.bW(t.h(a,u))
if(u>=r.length)return H.d(r,u)
r[u]=q}return r}}
P.kk.prototype={
$2:function(a,b){this.a.a[a]=this.b.bW(b)},
$S:5}
P.kl.prototype={
$2:function(a,b){this.a.b[a]=this.b.bW(b)},
$S:5}
P.eW.prototype={$ib2:1,
gdR:function(a){return this.a}}
P.kH.prototype={
$2:function(a,b){this.a[a]=b},
$S:5}
P.kj.prototype={
j9:function(a,b){var u,t,s,r
for(u=Object.keys(a),t=u.length,s=0;s<t;++s){r=u[s]
b.$2(r,a[r])}}}
P.h5.prototype={
gbE:function(){var u=this.b,t=H.mU(u,"w",0)
return new H.cx(new H.jD(u,new P.h6(),[t]),new P.h7(),[t,W.a_])},
k:function(a,b,c){var u=this.gbE()
J.nv(u.b.$1(J.l0(u.a,b)),c)},
q:function(a,b){this.b.a.appendChild(b)},
gm:function(a){return J.ar(this.gbE().a)},
h:function(a,b){var u=this.gbE()
return u.b.$1(J.l0(u.a,b))},
gW:function(a){var u=P.hq(this.gbE(),!1,W.a_)
return new J.aa(u,u.length)},
$ar:function(){return[W.a_]},
$aw:function(){return[W.a_]},
$ai:function(){return[W.a_]},
$ap:function(){return[W.a_]}}
P.h6.prototype={
$1:function(a){return!!J.H(a).$ia_}}
P.h7.prototype={
$1:function(a){return H.k(a,"$ia_")}}
P.kR.prototype={
$1:function(a){return this.a.iR(0,a)},
$S:3}
P.kS.prototype={
$1:function(a){return this.a.iS(a)},
$S:3}
P.k5.prototype={
jh:function(a){if(a<=0||a>4294967296)throw H.e(P.ob("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
P.ka.prototype={
gah:function(a){var u=this.a,t=this.c
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.c(t)
return u+t},
gdN:function(a){var u=this.b,t=this.d
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.c(t)
return u+t},
i:function(a){var u=this
return"Rectangle ("+H.f(u.a)+", "+H.f(u.b)+") "+H.f(u.c)+" x "+H.f(u.d)},
p:function(a,b){var u,t,s,r,q=this
if(b==null)return!1
u=J.H(b)
if(!!u.$iae){t=q.a
if(t==u.gaf(b)){s=q.b
if(s==u.gbU(b)){r=q.c
if(typeof t!=="number")return t.l()
if(typeof r!=="number")return H.c(r)
if(t+r===u.gah(b)){t=q.d
if(typeof s!=="number")return s.l()
if(typeof t!=="number")return H.c(t)
u=s+t===u.gdN(b)}else u=!1}else u=!1}else u=!1}else u=!1
return u},
gG:function(a){var u=this,t=u.a,s=J.cl(t),r=u.b,q=J.cl(r),p=u.c
if(typeof t!=="number")return t.l()
if(typeof p!=="number")return H.c(p)
p=C.c.gG(t+p)
t=u.d
if(typeof r!=="number")return r.l()
if(typeof t!=="number")return H.c(t)
t=C.c.gG(r+t)
return P.oA(P.k7(P.k7(P.k7(P.k7(0,s),q),p),t))}}
P.ae.prototype={
gaf:function(a){return this.a},
gbU:function(a){return this.b},
gaY:function(a){return this.c},
gaT:function(a){return this.d}}
P.b4.prototype={$ib4:1}
P.hm.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.b4]},
$aw:function(){return[P.b4]},
$ii:1,
$ai:function(){return[P.b4]},
$ip:1,
$ap:function(){return[P.b4]}}
P.b8.prototype={$ib8:1}
P.hZ.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.b8]},
$aw:function(){return[P.b8]},
$ii:1,
$ai:function(){return[P.b8]},
$ip:1,
$ap:function(){return[P.b8]}}
P.i8.prototype={
gm:function(a){return a.length}}
P.iL.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.o]},
$aw:function(){return[P.o]},
$ii:1,
$ai:function(){return[P.o]},
$ip:1,
$ap:function(){return[P.o]}}
P.l.prototype={
gcr:function(a){return new P.h5(a,new W.jK(a))}}
P.bb.prototype={$ibb:1}
P.j3.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return a.getItem(b)},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[P.bb]},
$aw:function(){return[P.bb]},
$ii:1,
$ai:function(){return[P.bb]},
$ip:1,
$ap:function(){return[P.bb]}}
P.er.prototype={}
P.es.prototype={}
P.eC.prototype={}
P.eD.prototype={}
P.eN.prototype={}
P.eO.prototype={}
P.eU.prototype={}
P.eV.prototype={}
P.c1.prototype={$ir:1,
$ar:function(){return[P.n]},
$ii:1,
$ai:function(){return[P.n]},
$ip:1,
$ap:function(){return[P.n]}}
P.fq.prototype={
gm:function(a){return a.length}}
P.ft.prototype={
h:function(a,b){return P.bd(a.get(b))},
I:function(a,b){var u,t=a.entries()
for(;!0;){u=t.next()
if(u.done)return
b.$2(u.value[0],P.bd(u.value[1]))}},
gaU:function(a){var u=H.b([],[P.o])
this.I(a,new P.fu(u))
return u},
gm:function(a){return a.size},
k:function(a,b,c){throw H.e(P.z("Not supported"))},
$aac:function(){return[P.o,null]},
$iU:1,
$aU:function(){return[P.o,null]}}
P.fu.prototype={
$2:function(a,b){return this.a.push(a)}}
P.fv.prototype={
gm:function(a){return a.length}}
P.bI.prototype={}
P.i_.prototype={
gm:function(a){return a.length}}
P.ee.prototype={}
P.dN.prototype={
jO:function(a,b,c,d,e,f,g){var u,t=J.H(g)
if(!!t.$ib2)u=!0
else u=!1
if(u){a.texImage2D(b,c,d,e,f,P.pt(g))
return}if(!!t.$icu)t=!0
else t=!1
if(t){a.texImage2D(b,c,d,e,f,g)
return}throw H.e(P.d6("Incorrect number or type of arguments"))}}
P.iF.prototype={
gm:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.M(b,a,null,null,null))
return P.bd(a.item(b))},
k:function(a,b,c){throw H.e(P.z("Cannot assign element of immutable List."))},
L:function(a,b){return this.h(a,b)},
$ir:1,
$ar:function(){return[[P.U,,,]]},
$aw:function(){return[[P.U,,,]]},
$ii:1,
$ai:function(){return[[P.U,,,]]},
$ip:1,
$ap:function(){return[[P.U,,,]]}}
P.eJ.prototype={}
P.eK.prototype={}
L.i0.prototype={}
B.h1.prototype={
ao:function(a,b){var u,t,s,r,q,p,o,n=this,m=new B.av(a,b),l=n.c.n(0,m).n(0,$.lI().j(0,a+b)),k=l.a,j=l.b,i=2-k*k-j*j
if(i>0){u=i*i
t=n.e
s=n.b.l(0,m)
r=n.a
q=r[C.d.az(s.a)&255]
s=C.d.az(s.b)
if(typeof q!=="number")return q.l()
s=r[q+s&255]
if(typeof s!=="number")return s.ab()
p=(s&14)>>>1
s=$.n5()
if(p>=8)return H.d(s,p)
o=s[p]
n.e=t+u*u*(o.a*k+o.b*j)}}}
B.av.prototype={
l:function(a,b){return new B.av(this.a+b.a,this.b+b.b)},
n:function(a,b){return new B.av(this.a-b.a,this.b-b.b)},
j:function(a,b){return new B.av(this.a*b,this.b*b)},
i:function(a){return H.f(this.a)+", "+H.f(this.b)}}
K.fl.prototype={
bg:function(a,b){return!0},
i:function(a){return"all"}}
K.dk.prototype={
bg:function(a,b){var u,t,s
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)if(u[s].bg(0,b))return!0
return!1},
i:function(a){var u,t,s,r,q
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r){q=u[r]
if(s.length!==0)s+=", "
s+=q.i(0)}return s}}
K.dw.prototype={}
K.b7.prototype={
bg:function(a,b){return!this.eS(0,b)},
i:function(a){return"!["+this.cW(0)+"]"}}
K.io.prototype={
f_:function(a){var u,t,s,r
if(a.a.length<=0)throw H.e(P.v("May not create a Set with zero characters."))
u=P.n
t=new H.F([u,P.az])
for(s=new H.cw(a,a.gm(a));s.w();)t.k(0,s.d,!0)
r=P.hq(new H.bV(t,[u]),!0,u)
C.b.eQ(r)
this.a=r},
bg:function(a,b){return C.b.T(this.a,b)},
i:function(a){return P.cI(this.a,0,null)}}
L.dT.prototype={
u:function(a,b){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b.b===b)return r}r=new L.e3(this.a.S(0,b))
r.a=H.b([],[K.dw])
r.c=!1
this.c.push(r)
return r},
j6:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.bg(0,a))return r}return},
i:function(a){return this.b},
dC:function(){var u,t,s,r,q,p=this,o="("+p.b+")",n=p.d
if(n!=null){n=n.b
o+=" => ["+n+"]"
u=p.a
if(u.c.T(0,n))o+=" (consume)"
for(n=p.d.c,n=new H.bV(n,[H.aA(n,0)]),n=n.gW(n);n.w();){t=n.d
o+="\n"
s=p.d.c.h(0,t)
t=o+("  -- "+H.f(t)+" => ["+H.f(s)+"]")
o=u.c.T(0,s)?t+" (consume)":t}}for(n=p.c,u=n.length,r=0;r<n.length;n.length===u||(0,H.q)(n),++r){q=n[r]
o=o+"\n"+("  -- "+q.i(0))}return o.charCodeAt(0)==0?o:o}}
L.e0.prototype={
i:function(a){var u=H.n1(this.b,"\n","\\n"),t=H.n1(u,"\t","\\t")
return this.a+":"+this.c+':"'+t+'"'}}
L.e1.prototype={
i:function(a){return this.b}}
L.j_.prototype={
S:function(a,b){var u=this.a.h(0,b)
if(u==null){u=new L.dT(this,b)
u.c=H.b([],[L.e3])
this.a.k(0,b,u)}return u},
bx:function(a){var u,t=this.b.h(0,a)
if(t==null){t=new L.e1(a)
u=P.o
t.c=new H.F([u,u])
this.b.k(0,a,t)}return t},
eE:function(a){return this.jS(a)},
jS:function(a){var u=this
return P.oY(function(){var t=a
var s=0,r=1,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c
return function $async$eE(b,a0){if(b===1){q=a0
s=r}while(true)switch(s){case 0:g=u.d
f=[P.n]
e=H.b([],f)
d=H.b([],f)
c=H.b([],f)
p=null,o=0,n=0,m=0
case 2:if(!!0){s=3
break}if(c.length!==0)l=C.b.jC(c,0)
else{if(!t.w()){s=3
break}l=t.d}d.push(l);++o
k=g.j6(l)
s=k==null?4:6
break
case 4:if(p==null){j=P.cI(d,0,null)
throw H.e(P.v("Untokenizable string [state: "+g.b+", index "+o+']: "'+j+'"'))}if(!!d.fixed$length)H.u(P.z("removeRange"))
P.ba(0,m,d.length)
d.splice(0,m-0)
C.b.aD(c,d)
d=H.b([],f)
e=H.b([],f)
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
if(g.d!=null){j=P.cI(e,0,null)
i=g.d
h=i.c.h(0,j)
p=new L.e0(h==null?i.b:h,j,o)
m=d.length
n=o}case 5:s=2
break
case 3:s=p!=null&&!u.c.T(0,p.a)?10:11
break
case 10:s=12
return p
case 12:case 11:return P.oy()
case 1:return P.oz(q)}}},L.e0)},
i:function(a){var u,t=new P.W(""),s=this.d
if(s!=null)t.a=s.dC()+"\n"
for(s=this.a,s=s.gjX(s),s=new H.dv(J.b0(s.a),s.b);s.w();){u=s.a
if(u!=this.d)t.a+=u.dC()+"\n"}s=t.a
return s.charCodeAt(0)==0?s:s}}
L.e3.prototype={
i:function(a){return this.b.b+": "+this.cW(0)}}
F.fr.prototype={
jf:function(a){var u,t=W.nx(a)
t.autoplay=!1
t.preload="auto";++this.a
u=F.m5(t)
W.X(t,"load",new F.fs(this,u),!1)
return u}}
F.fs.prototype={
$1:function(a){var u=this.b
if(!u.b)u.b=!0;++this.a.b}}
F.dy.prototype={
fN:function(){var u,t,s,r,q=this
for(u=q.b,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a.paused)return r}if(t<q.c){r=F.m5(q.a.a.cloneNode(!0))
q.b.push(r)
return r}return},
jy:function(a,b){var u,t,s,r=this.fN()
if(r!=null&&r.a.paused){if(b>1)b=1
u=r.a
t=u.volume
s=$.x()
s.toString
if(typeof t!=="number")return t.n()
if(!(Math.abs(t-b)<s.a))u.volume=b
P.pK(r.a.play(),null)
return!0}return!1}}
F.cF.prototype={
hu:function(a){return},
hs:function(a){return}}
O.b1.prototype={
bA:function(a){this.a=H.b([],[a])
this.c=this.b=null},
bZ:function(a,b,c){this.b=b
this.c=a},
bz:function(a,b){return this.bZ(a,null,b)},
bm:function(a){var u=this.b
if(u!=null)return u.$1(a)
return!0},
dq:function(a,b){var u=this.c
if(u!=null)u.$2(a,b)},
gm:function(a){return this.a.length},
gW:function(a){var u=this.a
return new J.aa(u,u.length)},
L:function(a,b){var u=this.a
if(b<0||b>=u.length)return H.d(u,b)
return u[b]},
q:function(a,b){var u,t,s=this,r=[H.mU(s,"b1",0)]
if(s.bm(H.b([b],r))){u=s.a
t=u.length
u.push(b)
s.dq(t,H.b([b],r))}},
aD:function(a,b){var u,t
if(this.bm(b)){u=this.a
t=u.length
C.b.aD(u,b)
this.dq(t,b)}},
$ii:1}
O.cA.prototype={
gm:function(a){return this.a.length},
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
b_:function(){var u=this.b
if(u!=null)u.E(null)},
ga7:function(a){var u=this.a
if(u.length>0)return C.b.gaV(u)
else return V.bW()},
ev:function(a){var u=this.a
if(a==null)u.push(V.bW())
else u.push(a)
this.b_()},
cN:function(){var u=this.a
if(u.length>0){u.pop()
this.b_()}}}
E.fz.prototype={}
E.ak.prototype={
da:function(){var u,t
this.e=null
for(u=this.y.a,u=new J.aa(u,u.length);u.w();){t=u.d
if(t.f==null)t.da()}},
scV:function(a){var u,t,s=this,r=s.d
if(r!=a){s.c=null
s.d=a
s.e=null
if(r!=null)r.gt().X(0,s.gbS())
u=s.d
if(u!=null)u.gt().q(0,s.gbS())
t=new D.B("shapeBuilder",r,s.d)
t.b=!0
s.as(t)}},
ai:function(a,b){var u,t,s=this,r=s.r,q=r!=null?r.aA(0,b,s):null
if(!J.K(q,s.x)){u=s.x
s.x=q
t=new D.B("matrix",u,q)
t.b=!0
s.as(t)}r=s.f
if(r!=null)r.ai(0,b)
for(r=s.y.a,r=new J.aa(r,r.length);r.w();)r.d.ai(0,b)},
bh:function(a){var u,t,s,r=this
if(!r.b)return
u=a.dx
t=r.x
u.toString
if(t==null)u.a.push(u.ga7(u))
else u.a.push(t.j(0,u.ga7(u)))
u.b_()
a.ew(r.f)
u=a.dy
s=(u&&C.b).gaV(u)
if(s!=null&&r.d!=null)s.jE(a,r)
for(u=r.y.a,u=new J.aa(u,u.length);u.w();)u.d.bh(a)
a.es()
a.dx.cN()},
as:function(a){var u=this.z
if(u!=null)u.E(a)},
ag:function(){return this.as(null)},
em:function(a){this.e=null
this.as(a)},
jp:function(){return this.em(null)},
eo:function(a){this.as(a)},
jq:function(){return this.eo(null)},
el:function(a){this.as(a)},
jo:function(){return this.el(null)},
ej:function(a){this.as(a)},
jl:function(){return this.ej(null)},
jk:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gei(),s=[{func:1,ret:-1,args:[D.a5]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}this.ag()},
jn:function(a,b){var u,t
for(u=b.gW(b),t=this.gei();u.w();)u.gK(u).gt().X(0,t)
this.ag()},
i:function(a){var u=this.a,t=u.length
if(t<=0)return"Unnamed entity"
return u}}
E.bK.prototype={
i:function(a){return this.b}}
E.bY.prototype={
i:function(a){return this.b}}
E.el.prototype={}
E.ie.prototype={
eZ:function(a,b){var u,t,s=this
s.d=s.c=512
s.e=0
s.x=s.r=s.f=new P.aj(Date.now(),!1)
s.y=0
s.cx=s.ch=s.Q=s.z=null
u=new O.cA()
t=[V.b5]
u.a=H.b([],t)
u.gt().q(0,new E.ig(s))
s.cy=u
u=new O.cA()
u.a=H.b([],t)
u.gt().q(0,new E.ih(s))
s.db=u
u=new O.cA()
u.a=H.b([],t)
u.gt().q(0,new E.ii(s))
s.dx=u
u=H.b([],[O.dW])
s.dy=u
u.push(null)
s.fr=new H.F([P.o,A.dP])},
gjA:function(){var u,t=this,s=t.z
if(s==null){s=t.cy
s=s.ga7(s)
u=t.db
u=t.z=s.j(0,u.ga7(u))
s=u}return s},
ew:function(a){var u=this.dy
u.push(a==null?(u&&C.b).gaV(u):a)},
es:function(){var u=this.dy
if(u.length>1)u.pop()}}
E.ig.prototype={
$1:function(a){var u=this.a
u.ch=u.z=null}}
E.ih.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=u.Q=u.z=null}}
E.ii.prototype={
$1:function(a){var u=this.a
u.cx=u.ch=null}}
E.iG.prototype={}
E.dZ.prototype={
d0:function(a){this.ez()},
d_:function(){return this.d0(null)},
gja:function(){var u,t=this,s=Date.now(),r=C.c.a5(P.lT(s-t.cy.a).a,1000)/1000
if(r<=0)return 0
u=t.db
t.db=0
t.cy=new P.aj(s,!1)
return u/r},
dv:function(){var u,t,s=this,r=window.devicePixelRatio,q=s.b.clientWidth
if(typeof q!=="number")return q.j()
if(typeof r!=="number")return H.c(r)
u=C.d.bP(q*r)
q=s.b.clientHeight
if(typeof q!=="number")return q.j()
t=C.d.bP(q*r)
q=s.b
if(q.width!==u||q.height!==t){q.width=u
q.height=t
P.lj(C.k,s.gjG())}},
ez:function(){if(!this.cx){this.cx=!0
var u=window
C.C.fK(u)
C.C.ic(u,W.mM(new E.iX(this),P.ah))}},
jD:function(){var u,t,s,r,q,p=this,o=null
try{++p.db
p.cx=!1
p.dv()
if(o==null)o=p.d
if(o!=null){s=p.e;++s.e
s.r=s.x
r=Date.now()
s.x=new P.aj(r,!1)
s.y=P.lT(r-s.r.a).a*0.000001
r=s.cy
C.b.sm(r.a,0)
r.b_()
r=s.db
C.b.sm(r.a,0)
r.b_()
r=s.dx
C.b.sm(r.a,0)
r.b_()
r=s.dy;(r&&C.b).sm(r,0)
s.dy.push(null)
o.bh(p.e)}}catch(q){u=H.aB(q)
t=H.cg(q)
P.lD("Error: "+H.f(u))
P.lD("Stack: "+H.f(t))
throw H.e(u)}}}
E.iX.prototype={
$1:function(a){var u=this.a
if(u.cx){u.cx=!1
u.jD()}}}
Z.ea.prototype={}
Z.bL.prototype={
aP:function(a){var u,t,s,r=this
try{t=a.a
t.enableVertexAttribArray(r.e)
t.vertexAttribPointer(r.e,r.b,5126,!1,r.d,r.c)}catch(s){u=H.aB(s)
t=P.v('Failed to bind buffer attribute "'+r.a.i(0)+'": '+H.f(u))
throw H.e(t)}},
i:function(a){var u=this
return"["+u.a.i(0)+", Size: "+u.b+", Offset: "+u.c+", Stride: "+u.d+", Attr: "+H.f(u.e)+"]"}}
Z.jC.prototype={}
Z.co.prototype={
bf:function(a){var u,t,s,r
for(u=this.c,t=u.length,s=0;s<t;++s){r=u[s]
if((r.a.a&a.a)!==0)return r}return},
aP:function(a){var u,t=this.a
a.a.bindBuffer(t.a,t.b)
for(t=this.c,u=t.length-1;u>=0;--u)t[u].aP(a)},
by:function(a){var u,t,s
for(u=this.c,t=u.length-1,s=a.a;t>=0;--t)s.disableVertexAttribArray(u[t].e)
s.bindBuffer(this.a.a,null)},
bh:function(a){var u,t,s,r,q,p=this.b.length
for(u=a.a,t=0;t<p;++t){s=this.b
if(t>=s.length)return H.d(s,t)
r=s[t]
s=r.c
q=s.a
u.bindBuffer(q,s.b)
u.drawElements(r.a,r.b,5123,0)
u.bindBuffer(q,null)}},
i:function(a){var u,t,s,r,q=[P.o],p=H.b([],q)
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)p.push(u[s].i(0))
r=H.b([],q)
for(q=this.c,u=q.length,s=0;s<u;++s)r.push(J.aF(q[s]))
return"Buffer:  ["+this.a.i(0)+"]\nIndices: "+C.b.u(p,", ")+"\nAttrs:   "+C.b.u(r,", ")}}
Z.aK.prototype={
i:function(a){return"Type: "+this.a+", Count: "+this.b+", ["+("Instance of '"+H.f(H.cH(this.c))+"'")+"]"}}
Z.a1.prototype={
gdQ:function(a){var u=this.a,t=(u&$.Z().a)!==0?1:0
if((u&$.a8().a)!==0)++t
if((u&$.bk().a)!==0)++t
if((u&$.a2().a)!==0)++t
if((u&$.bG().a)!==0)++t
if((u&$.d3().a)!==0)++t
if((u&$.d4().a)!==0)++t
if((u&$.cj().a)!==0)++t
return(u&$.bj().a)!==0?t+1:t},
gbk:function(a){var u=this.a,t=(u&$.Z().a)!==0?3:0
if((u&$.a8().a)!==0)t+=3
if((u&$.bk().a)!==0)t+=3
if((u&$.a2().a)!==0)t+=2
if((u&$.bG().a)!==0)t+=3
if((u&$.d3().a)!==0)t+=3
if((u&$.d4().a)!==0)t+=4
if((u&$.cj().a)!==0)++t
return(u&$.bj().a)!==0?t+4:t},
cm:function(a){var u,t=$.Z(),s=this.a
if((s&t.a)!==0){if(0===a)return t
u=1}else u=0
t=$.a8()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bk()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.a2()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bG()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d3()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.d4()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.cj()
if((s&t.a)!==0){if(u===a)return t;++u}t=$.bj()
if((s&t.a)!==0)if(u===a)return t
return $.nl()},
p:function(a,b){if(b==null)return!1
if(!(b instanceof Z.a1))return!1
return this.a===b.a},
i:function(a){var u=H.b([],[P.o]),t=this.a
if((t&$.Z().a)!==0)u.push("Pos")
if((t&$.a8().a)!==0)u.push("Norm")
if((t&$.bk().a)!==0)u.push("Binm")
if((t&$.a2().a)!==0)u.push("Txt2D")
if((t&$.bG().a)!==0)u.push("TxtCube")
if((t&$.d3().a)!==0)u.push("Clr3")
if((t&$.d4().a)!==0)u.push("Clr4")
if((t&$.cj().a)!==0)u.push("Weight")
if((t&$.bj().a)!==0)u.push("Bending")
if(u.length<=0)return"None"
return C.b.u(u,"|")}}
D.fD.prototype={}
D.bQ.prototype={
q:function(a,b){var u=this.a;(u==null?this.a=H.b([],[{func:1,ret:-1,args:[D.a5]}]):u).push(b)},
X:function(a,b){var u,t=this,s=t.a
s=s==null?null:C.b.T(s,b)
if(s===!0){s=t.a
u=(s&&C.b).X(s,b)||!1}else u=!1
s=t.b
s=s==null?null:C.b.T(s,b)
if(s===!0){s=t.b
u=(s&&C.b).X(s,b)||u}return u},
E:function(a){var u,t,s,r=this,q={}
q.a=a
u=r.a
t=u==null
s=t?null:u.length===0
if(s!==!1){s=r.b
s=s==null?null:s.length===0
s=s!==!1}else s=!1
if(s)return!1
if(a==null){a=new D.a5()
a.b=!0
q.a=a
s=a}else s=a
if(r.d>0){if(r.c==null)r.c=s
return!0}if(!t)C.b.I(P.hq(u,!0,{func:1,ret:-1,args:[D.a5]}),new D.h2(q))
u=r.b
if(u!=null){r.b=H.b([],[{func:1,ret:-1,args:[D.a5]}])
C.b.I(u,new D.h3(q))}return!0},
dS:function(){return this.E(null)},
aI:function(a){var u,t=this,s=t.d
if(s>0){--s
t.d=s
if(s<=0)s=t.c!=null
else s=!1
if(s){u=t.c
t.c=null
t.E(u)}}}}
D.h2.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.h3.prototype={
$1:function(a){var u=this.a.a
u.b
a.$1(u)}}
D.a5.prototype={}
D.bq.prototype={}
D.br.prototype={}
D.B.prototype={
i:function(a){return"ValueChanged: "+this.c+", "+H.f(this.d)+" => "+H.f(this.e)}}
X.d9.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.d9))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.am.prototype={
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof X.am))return!1
if(this.a!=b.a)return!1
if(!this.b.p(0,b.b))return!1
return!0},
i:function(a){return this.b.i(0)+H.f(this.a)}}
X.b3.prototype={}
X.dq.prototype={
gaq:function(){var u=this.y
return u==null?this.y=D.E():u},
dH:function(a,b){this.q(0,new X.am(a,new X.bv(!1,!1,b)))},
a6:function(a){return this.dH(a,!1)},
d1:function(a){},
f6:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(C.b.T(this.a,s))return!1}return!0},
f4:function(a,b){var u=new D.bq()
u.b=!0
this.d1(u)},
f8:function(a,b){var u=new D.br()
u.b=!0
this.d1(u)},
c0:function(a){var u,t=this
if(!t.r&&a instanceof X.b3){u=a.c
if(C.b.T(t.a,u)){t.r=!0
u=t.y
if(u!=null)u.E(a)}}},
cd:function(a){var u
if(this.r&&a instanceof X.b3){u=a.c
if(C.b.T(this.a,u))this.r=!1}},
ae:function(a){var u,t,s=this
if(s.f!=null)return!1
s.f=a
u=a.b
t=u.b
if(t==null)t=u.b=D.E()
t.q(0,s.gc_())
t=u.a
u=t==null?u.a=D.E():t
u.q(0,s.gcc())
return!0},
$ai:function(){return[X.am]},
$ab1:function(){return[X.am]}}
X.hl.prototype={
jv:function(a){var u,t
this.d.q(0,a.a)
u=this.a
if(u==null)return!1
t=new X.b3(a)
t.b=!0
return u.E(t)},
jr:function(a){var u,t
this.d.X(0,a.a)
u=this.b
if(u==null)return!1
t=new X.b3(a)
t.b=!0
return u.E(t)}}
X.du.prototype={}
X.hs.prototype={
b7:function(a,b){var u,t,s,r,q,p=this,o=Date.now(),n=p.x,m=b.a,l=p.Q
if(typeof m!=="number")return m.j()
u=b.b
t=p.ch
if(typeof u!=="number")return u.j()
s=n.a
if(typeof s!=="number")return s.l()
n=n.b
if(typeof n!=="number")return n.l()
r=new V.Q(s+m*l,n+u*t)
t=p.a.gbM()
q=new X.b6(a,V.b9(),p.x,t,r)
q.b=!0
p.z=new P.aj(o,!1)
p.x=r
return q},
cM:function(a,b){var u
this.r=a.a
u=this.b
if(u==null)return!1
u.E(this.b7(a,b))
return!0},
bu:function(a,b){var u=this.r,t=a.a
if(typeof t!=="number")return t.eM()
if(typeof u!=="number")return u.ab()
this.r=(u&~t)>>>0
return!1},
bt:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.b7(a,b))
return!0},
jw:function(a){return!1},
hC:function(a,b,c){var u,t,s,r=this
if(r.f==null)return
u=Date.now()
t=r.f
s=new X.du(c,r.a.gbM(),b)
s.b=!0
t.E(s)
r.y=new P.aj(u,!1)
r.x=V.b9()}}
X.bv.prototype={
p:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof X.bv))return!1
if(u.a!==b.a)return!1
if(u.b!=b.b)return!1
if(u.c!=b.c)return!1
return!0},
i:function(a){var u=this.a?"Ctrl+":""
u+=this.b?"Alt+":""
return u+(this.c?"Shift+":"")}}
X.b6.prototype={}
X.hS.prototype={
c8:function(a,b,c){var u=this,t=new P.aj(Date.now(),!1),s=u.a.gbM(),r=new X.b6(a,u.r,u.x,s,b)
r.b=!0
if(c){u.y=t
u.r=b}u.z=t
u.x=b
return r},
cM:function(a,b){var u
this.f=a.a
u=this.b
if(u==null)return!1
u.E(this.c8(a,b,!0))
return!0},
bu:function(a,b){var u=this,t=u.f,s=a.a
if(typeof s!=="number")return s.eM()
if(typeof t!=="number")return t.ab()
u.f=(t&~s)>>>0
t=u.c
if(t==null)return!1
t.E(u.c8(a,b,!0))
return!0},
bt:function(a,b){var u=this.d
if(u==null)return!1
u.E(this.c8(a,b,!1))
return!0},
jx:function(a,b){return!1}}
X.i7.prototype={}
X.e2.prototype={}
X.j0.prototype={
b7:function(a,b){var u=this,t=new P.aj(Date.now(),!1),s=a.length>0?a[0]:V.b9(),r=u.a.gbM(),q=new X.e2(u.f,u.r,r,s)
q.b=!0
if(b){u.x=t
u.f=s}u.y=t
u.r=s
return q},
ju:function(a){var u=this.b
if(u==null)return!1
u.E(this.b7(a,!0))
return!0},
js:function(a){var u=this.c
if(u==null)return!1
u.E(this.b7(a,!0))
return!0},
jt:function(a){var u=this.d
if(u==null)return!1
u.E(this.b7(a,!1))
return!0}}
X.e7.prototype={
gbM:function(){var u=this.a,t=C.j.gdP(u).c
t.toString
u=C.j.gdP(u).d
u.toString
return V.lg(0,0,t,u)},
dg:function(a){var u=a.keyCode,t=a.ctrlKey||a.metaKey
return new X.am(u,new X.bv(t,a.altKey,a.shiftKey))},
b9:function(a){a.shiftKey},
ci:function(a){a.shiftKey},
aN:function(a){var u,t=this.a.getBoundingClientRect(),s=a.pageX,r=a.pageY,q=t.left
if(typeof s!=="number")return s.n()
u=t.top
if(typeof r!=="number")return r.n()
return new V.Q(s-q,r-u)},
bn:function(a){return new V.P(a.movementX,a.movementY)},
cf:function(a){var u,t,s,r,q,p,o=this.a.getBoundingClientRect(),n=H.b([],[V.Q])
for(u=a.touches,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=C.d.ay(r.pageX)
C.d.ay(r.pageY)
p=o.left
C.d.ay(r.pageX)
n.push(new V.Q(q-p,C.d.ay(r.pageY)-o.top))}return n},
aJ:function(a){var u=a.buttons,t=a.ctrlKey||a.metaKey
return new X.d9(u,new X.bv(t,a.altKey,a.shiftKey))},
c9:function(a){var u,t,s=this.a.getBoundingClientRect(),r=a.pageX,q=a.pageY,p=s.left
if(typeof r!=="number")return r.n()
u=r-p
if(u<0)return!1
r=s.top
if(typeof q!=="number")return q.n()
t=q-r
if(t<0)return!1
return u<s.width&&t<s.height},
hw:function(a){this.f=!0},
hc:function(a){this.f=!1},
hm:function(a){if(this.f&&this.c9(a))a.preventDefault()},
cd:function(a){var u
if(!this.f)return
u=this.dg(a)
if(this.b.jv(u))a.preventDefault()},
c0:function(a){var u
if(!this.f)return
u=this.dg(a)
if(this.b.jr(u))a.preventDefault()},
hE:function(a){var u,t,s,r=this,q=r.a
q.focus()
r.f=!0
r.b9(a)
if(r.x){u=r.aJ(a)
t=r.bn(a)
if(r.d.cM(u,t))a.preventDefault()
return}if(r.r){r.y=a
q.requestPointerLock()
return}u=r.aJ(a)
s=r.aN(a)
if(r.c.cM(u,s))a.preventDefault()},
hI:function(a){var u,t,s,r=this
r.b9(a)
u=r.aJ(a)
if(r.x){t=r.bn(a)
if(r.d.bu(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bu(u,s))a.preventDefault()},
hq:function(a){var u,t,s,r=this
if(!r.c9(a)){r.b9(a)
u=r.aJ(a)
if(r.x){t=r.bn(a)
if(r.d.bu(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bu(u,s))a.preventDefault()}},
hG:function(a){var u,t,s,r=this
r.b9(a)
u=r.aJ(a)
if(r.x){t=r.bn(a)
if(r.d.bt(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bt(u,s))a.preventDefault()},
ho:function(a){var u,t,s,r=this
if(!r.c9(a)){r.b9(a)
u=r.aJ(a)
if(r.x){t=r.bn(a)
if(r.d.bt(u,t))a.preventDefault()
return}if(r.r)return
s=r.aN(a)
if(r.c.bt(u,s))a.preventDefault()}},
hK:function(a){var u,t,s=this
s.b9(a)
u=new V.P((a&&C.B).giX(a),C.B.giY(a)).j(0,s.Q)
if(s.x){if(s.d.jw(u))a.preventDefault()
return}if(s.r)return
t=s.aN(a)
if(s.c.jx(u,t))a.preventDefault()},
hO:function(a){var u,t,s=this,r=document.pointerLockElement===s.a
if(r!==s.x){s.x=r
u=s.aJ(s.y)
t=s.aN(s.y)
s.d.hC(u,t,r)}},
i1:function(a){var u,t=this
t.a.focus()
t.f=!0
t.ci(a)
u=t.cf(a)
if(t.e.ju(u))a.preventDefault()},
hY:function(a){var u
this.ci(a)
u=this.cf(a)
if(this.e.js(u))a.preventDefault()},
i_:function(a){var u
this.ci(a)
u=this.cf(a)
if(this.e.jt(u))a.preventDefault()}}
D.fw.prototype={$iab:1}
D.bO.prototype={
aL:function(a){var u=this.r
if(u!=null)u.E(a)},
he:function(){return this.aL(null)},
$iab:1}
D.ab.prototype={}
D.dr.prototype={
aL:function(a){var u=this.y
if(u!=null)u.E(a)},
ds:function(a){var u=this.z
if(u!=null)u.E(a)},
hB:function(){return this.ds(null)},
hQ:function(a){var u,t,s
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.q)(a),++t){s=a[t]
if(s==null||this.fE(s))return!1}return!0},
h2:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gdr(),s=[{func:1,ret:-1,args:[D.a5]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q instanceof D.bO)this.f.push(q)
p=q.r
if(p==null){p=new D.bQ()
p.d=0
q.r=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}u=new D.bq()
u.b=!0
this.aL(u)},
hU:function(a,b){var u,t,s
for(u=b.gW(b),t=this.gdr();u.w();){s=u.gK(u)
C.b.X(this.e,s)
s.gt().X(0,t)}u=new D.br()
u.b=!0
this.aL(u)},
fE:function(a){var u=C.b.T(this.f,a)
return u},
$ai:function(){return[D.ab]},
$ab1:function(){return[D.ab]}}
D.i6.prototype={$iab:1}
D.iE.prototype={$iab:1}
V.a3.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.a3))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.bm.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.bm))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.h0.prototype={}
V.T.prototype={
p:function(a,b){if(b==null)return!1
if(!(b instanceof V.T))return!1
return this.a===b.a},
i:function(a){var u,t,s
$.lJ()
$.kY()
u=H.b([],[P.o])
t=this.a
s=$.aD().a
if((t&s)>>>0===s)u.push("XPos")
s=$.lK().a
if((t&s)>>>0===s)u.push("XCenter")
s=$.aC().a
if((t&s)>>>0===s)u.push("XNeg")
s=$.aE().a
if((t&s)>>>0===s)u.push("YPos")
s=$.lL().a
if((t&s)>>>0===s)u.push("YCenter")
s=$.bg().a
if((t&s)>>>0===s)u.push("YNeg")
s=$.bi().a
if((t&s)>>>0===s)u.push("ZPos")
s=$.n8().a
if((t&s)>>>0===s)u.push("ZCenter")
s=$.bh().a
if((t&s)>>>0===s)u.push("ZNeg")
if(u.length<=0)return"None"
return C.b.u(u,"|")}}
V.bS.prototype={
i:function(a){var u=this
return u.a.i(0)+" <"+u.b.i(0)+"> "+H.f(u.c)+" "+H.f(u.d)}}
V.he.prototype={
i:function(a){return H.f(this.a)+" "+H.f(this.b)}}
V.au.prototype={
ak:function(a,b){var u=this,t=H.b([u.a,u.d,u.r,u.b,u.e,u.x,u.c,u.f,u.y],[P.J])
return t},
bs:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.a,g=i.e,f=i.y
if(typeof g!=="number")return g.j()
if(typeof f!=="number")return H.c(f)
u=g*f
t=i.f
s=i.x
if(typeof t!=="number")return t.j()
if(typeof s!=="number")return H.c(s)
if(typeof h!=="number")return h.j()
r=i.d
q=i.b
if(typeof q!=="number")return q.j()
p=q*f
o=i.c
if(typeof o!=="number")return H.c(o)
n=s*o
if(typeof r!=="number")return r.j()
m=i.r
l=q*t-g*o
if(typeof m!=="number")return m.j()
k=h*(u-t*s)-r*(p-n)+m*l
if(Math.abs(k-0)<$.x().a){h=$.lZ
return h==null?$.lZ=new V.au(1,0,0,0,1,0,0,0,1):h}j=1/k
return new V.au((u-s*t)*j,(n-p)*j,l*j,(m*t-r*f)*j,(h*f-m*o)*j,(r*o-h*t)*j,(r*s-m*g)*j,(m*q-h*s)*j,(h*g-r*q)*j)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.c(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=k.d
if(typeof q!=="number")return q.j()
p=k.e
if(typeof p!=="number")return p.j()
o=k.f
if(typeof o!=="number")return o.j()
n=k.r
if(typeof n!=="number")return n.j()
m=k.x
if(typeof m!=="number")return m.j()
l=k.y
if(typeof l!=="number")return l.j()
return new V.y(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
U:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.c(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=k.d
if(typeof q!=="number")return q.j()
p=k.e
if(typeof p!=="number")return p.j()
o=k.f
if(typeof o!=="number")return o.j()
n=k.r
if(typeof n!=="number")return n.j()
m=k.x
if(typeof m!=="number")return m.j()
l=k.y
if(typeof l!=="number")return l.j()
return new V.t(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.au))return!1
u=b.a
t=r.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.x
t=r.x
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u,t,s,r,q=this,p=[P.J],o=V.ce(H.b([q.a,q.d,q.r],p),3,0),n=V.ce(H.b([q.b,q.e,q.x],p),3,0),m=V.ce(H.b([q.c,q.f,q.y],p),3,0)
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
V.b5.prototype={
ak:function(a,b){var u=this,t=H.b([u.a,u.e,u.y,u.cx,u.b,u.f,u.z,u.cy,u.c,u.r,u.Q,u.db,u.d,u.x,u.ch,u.dx],[P.J])
return t},
bs:function(b2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=a9.f
if(typeof b0!=="number")return b0.j()
if(typeof b1!=="number")return H.c(b1)
u=a9.b
t=a9.e
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=b0*b1-u*t
r=a9.r
if(typeof r!=="number")return H.c(r)
q=a9.c
if(typeof q!=="number")return q.j()
p=b0*r-q*t
o=a9.x
n=a9.d
m=b0*o-n*t
l=u*r-q*b1
k=u*o-n*b1
j=q*o-n*r
i=a9.y
h=a9.cy
if(typeof i!=="number")return i.j()
g=a9.z
f=a9.cx
if(typeof g!=="number")return g.j()
e=i*h-g*f
d=a9.db
c=a9.Q
if(typeof c!=="number")return c.j()
b=i*d-c*f
a=a9.dx
a0=a9.ch
a1=i*a-a0*f
a2=g*d-c*h
a3=g*a-a0*h
a4=c*a-a0*d
a5=s*a4-p*a3+m*a2+l*a1-k*b+j*e
if(Math.abs(a5-0)<$.x().a)return V.bW()
a6=1/a5
a7=-t
a8=-f
return V.aN((b1*a4-r*a3+o*a2)*a6,(-u*a4+q*a3-n*a2)*a6,(h*j-d*k+a*l)*a6,(-g*j+c*k-a0*l)*a6,(a7*a4+r*a1-o*b)*a6,(b0*a4-q*a1+n*b)*a6,(a8*j+d*m-a*p)*a6,(i*j-c*m+a0*p)*a6,(t*a3-b1*a1+o*e)*a6,(-b0*a3+u*a1-n*e)*a6,(f*k-h*m+a*s)*a6,(-i*k+g*m-a0*s)*a6,(a7*a2+b1*b-r*e)*a6,(b0*a2-u*b+q*e)*a6,(a8*l+h*p-d*s)*a6,(i*l-g*p+c*s)*a6)},
j:function(b2,b3){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=this,b0=a9.a,b1=b3.a
if(typeof b0!=="number")return b0.j()
if(typeof b1!=="number")return H.c(b1)
u=a9.b
t=b3.e
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=a9.c
r=b3.y
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=a9.d
p=b3.cx
o=b3.b
if(typeof o!=="number")return H.c(o)
n=b3.f
if(typeof n!=="number")return H.c(n)
m=b3.z
if(typeof m!=="number")return H.c(m)
l=b3.cy
k=b3.c
if(typeof k!=="number")return H.c(k)
j=b3.r
if(typeof j!=="number")return H.c(j)
i=b3.Q
if(typeof i!=="number")return H.c(i)
h=b3.db
g=b3.d
f=b3.x
e=b3.ch
d=b3.dx
c=a9.e
if(typeof c!=="number")return c.j()
b=a9.f
if(typeof b!=="number")return b.j()
a=a9.r
if(typeof a!=="number")return a.j()
a0=a9.x
a1=a9.y
if(typeof a1!=="number")return a1.j()
a2=a9.z
if(typeof a2!=="number")return a2.j()
a3=a9.Q
if(typeof a3!=="number")return a3.j()
a4=a9.ch
a5=a9.cx
a6=a9.cy
a7=a9.db
a8=a9.dx
return V.aN(b0*b1+u*t+s*r+q*p,b0*o+u*n+s*m+q*l,b0*k+u*j+s*i+q*h,b0*g+u*f+s*e+q*d,c*b1+b*t+a*r+a0*p,c*o+b*n+a*m+a0*l,c*k+b*j+a*i+a0*h,c*g+b*f+a*e+a0*d,a1*b1+a2*t+a3*r+a4*p,a1*o+a2*n+a3*m+a4*l,a1*k+a2*j+a3*i+a4*h,a1*g+a2*f+a3*e+a4*d,a5*b1+a6*t+a7*r+a8*p,a5*o+a6*n+a7*m+a8*l,a5*k+a6*j+a7*i+a8*h,a5*g+a6*f+a7*e+a8*d)},
at:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.c(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=k.e
if(typeof q!=="number")return q.j()
p=k.f
if(typeof p!=="number")return p.j()
o=k.r
if(typeof o!=="number")return o.j()
n=k.y
if(typeof n!=="number")return n.j()
m=k.z
if(typeof m!=="number")return m.j()
l=k.Q
if(typeof l!=="number")return l.j()
return new V.y(j*i+u*t+s*r,q*i+p*t+o*r,n*i+m*t+l*r)},
U:function(a){var u,t,s,r,q,p,o,n,m,l,k=this,j=k.a,i=a.a
if(typeof j!=="number")return j.j()
if(typeof i!=="number")return H.c(i)
u=k.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=k.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
q=k.e
if(typeof q!=="number")return q.j()
p=k.f
if(typeof p!=="number")return p.j()
o=k.r
if(typeof o!=="number")return o.j()
n=k.y
if(typeof n!=="number")return n.j()
m=k.z
if(typeof m!=="number")return m.j()
l=k.Q
if(typeof l!=="number")return l.j()
return new V.t(j*i+u*t+s*r+k.d,q*i+p*t+o*r+k.x,n*i+m*t+l*r+k.ch)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.b5))return!1
u=b.a
t=r.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.r
t=r.r
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.x-r.x)<s))return!1
u=b.y
t=r.y
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.z
t=r.z
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.Q
t=r.Q
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.ch-r.ch)<s))return!1
if(!(Math.abs(b.cx-r.cx)<s))return!1
if(!(Math.abs(b.cy-r.cy)<s))return!1
if(!(Math.abs(b.db-r.db)<s))return!1
if(!(Math.abs(b.dx-r.dx)<s))return!1
return!0},
i:function(a){return this.Z()},
P:function(a){var u,t,s,r,q,p=this,o=[P.J],n=V.ce(H.b([p.a,p.e,p.y,p.cx],o),3,0),m=V.ce(H.b([p.b,p.f,p.z,p.cy],o),3,0),l=V.ce(H.b([p.c,p.r,p.Q,p.db],o),3,0),k=V.ce(H.b([p.d,p.x,p.ch,p.dx],o),3,0)
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
Z:function(){return this.P("")}}
V.Q.prototype={
n:function(a,b){var u,t,s=this.a,r=b.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.c(r)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
return new V.Q(s-r,u-t)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.Q))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.t.prototype={
l:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.c(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.c(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.c(r)
return new V.t(q+p,u+t,s+r)},
n:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.n()
if(typeof p!=="number")return H.c(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.c(r)
return new V.t(q-p,u-t,s-r)},
j:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.j()
u=this.b
if(typeof u!=="number")return u.j()
t=this.c
if(typeof t!=="number")return t.j()
return new V.t(s*b,u*b,t*b)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.t))return!1
u=b.a
t=r.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
V.by.prototype={
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.by))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.dK.prototype={
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.dK))return!1
u=b.a
t=r.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.d
t=r.d
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.e
t=r.e
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.f
t=r.f
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+", "+V.A(u.e,3,0)+", "+V.A(u.f,3,0)+"]"}}
V.dM.prototype={
gaH:function(){var u=this.c,t=this.d
if(u>t)return t
else return u},
eg:function(a){var u,t,s,r,q=this,p=$.bf(),o=a.a,n=q.a
if(typeof o!=="number")return o.B()
if(o<n){u=$.aC()
p=new V.T((p.a|u.a)>>>0)}else if(o>=n+q.c){u=$.aD()
p=new V.T((p.a|u.a)>>>0)}else{u=$.lK()
p=new V.T((p.a|u.a)>>>0)}u=a.b
t=q.b
if(typeof u!=="number")return u.B()
if(u<t)p=new V.T((p.a|$.bg().a)>>>0)
else{s=p.a
p=u>=t+q.d?new V.T((s|$.aE().a)>>>0):new V.T((s|$.lL().a)>>>0)}s=p.a
r=$.aC().a
if(!((s&r)>>>0===r)){r=$.aD().a
if((s&r)>>>0===r){o=n+q.c
n=o}else n=o}o=$.bg().a
if(!((s&o)>>>0===o)){o=$.aE().a
if((s&o)>>>0===o){o=t+q.d
t=o}else t=u}return new V.Q(n,t)},
p:function(a,b){var u,t,s=this
if(b==null)return!1
if(s===b)return!0
if(!(b instanceof V.dM))return!1
u=b.a
t=$.x().a
if(!(Math.abs(u-s.a)<t))return!1
if(!(Math.abs(b.b-s.b)<t))return!1
if(!(Math.abs(b.c-s.c)<t))return!1
if(!(Math.abs(b.d-s.d)<t))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+"]"}}
V.c_.prototype={
jB:function(a8){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.a
if(typeof a7!=="number")return a7.l()
u=a7+a5.d
t=a5.b
if(typeof t!=="number")return t.l()
s=t+a5.e
r=a5.c
if(typeof r!=="number")return r.l()
q=r+a5.f
p=a8.a
if(typeof p!=="number")return p.B()
if(p<a7){o=a7-p
n=a8.d
if(typeof n!=="number")return H.c(n)
if(o>n)return
o/=n
m=$.aC()
l=a7
k=!1
j=-1}else if(p>u){o=u-p
n=a8.d
if(typeof n!=="number")return H.c(n)
if(o<n)return
o/=n
m=$.aD()
l=u
k=!1
j=1}else{m=a6
l=m
j=l
k=!0
o=-1}n=a8.b
if(typeof n!=="number")return n.B()
if(n<t){i=t-n
h=a8.e
if(typeof h!=="number")return H.c(h)
if(i>h)return
i/=h
g=$.bg()
f=t
k=!1
e=-1}else if(n>s){i=s-n
h=a8.e
if(typeof h!=="number")return H.c(h)
if(i<h)return
i/=h
g=$.aE()
f=s
k=!1
e=1}else{g=a6
f=g
e=f
i=-1}h=a8.c
if(typeof h!=="number")return h.B()
if(h<r){d=r-h
c=a8.f
if(typeof c!=="number")return H.c(c)
if(d>c)return
d/=c
b=$.bh()
a=r
k=!1
a0=-1}else if(h>q){d=q-h
c=a8.f
if(typeof c!=="number")return H.c(c)
if(d<c)return
d/=c
b=$.bi()
a=q
k=!1
a0=1}else{b=a6
a=b
a0=a
d=-1}if(k){a7=new V.y(a8.d,a8.e,a8.f)
return new V.bS(new V.t(p,n,h),a7.A(0,Math.sqrt(a7.D(a7))).O(0),0,$.kY())}if(i>o)a1=d>i?2:1
else a1=d>o?2:0
switch(a1){case 0:a7=a8.e
if(typeof a7!=="number")return a7.j()
a2=n+a7*o
a7=$.x()
p=a7.a
if(t-p<a2){a7.toString
t=a2<s}else t=!1
if(!t)return
t=a8.f
if(typeof t!=="number")return t.j()
a3=h+t*o
if(r-p<a3){a7.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.bS(new V.t(l,a2,a3),new V.y(j,0,0),o,m)
case 1:t=a8.d
if(typeof t!=="number")return t.j()
a4=p+t*i
t=$.x()
p=t.a
if(a7-p<a4){t.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.f
if(typeof a7!=="number")return a7.j()
a3=h+a7*i
if(r-p<a3){t.toString
a7=a3<q}else a7=!1
if(!a7)return
return new V.bS(new V.t(a4,f,a3),new V.y(0,e,0),i,g)
default:r=a8.d
if(typeof r!=="number")return r.j()
a4=p+r*d
r=$.x()
p=r.a
if(a7-p<a4){r.toString
a7=a4<u}else a7=!1
if(!a7)return
a7=a8.e
if(typeof a7!=="number")return a7.j()
a2=n+a7*d
if(t-p<a2){r.toString
a7=a2<s}else a7=!1
if(!a7)return
return new V.bS(new V.t(a4,a2,a),new V.y(0,0,a0),d,b)}},
iQ:function(a,b,c){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=null,e=$.bf(),d=b.a
if(d!==0){if(typeof d!=="number")return d.a0()
if(d>0){u=$.aC()
t=u.a
if((c.a&t)>>>0===t){t=a.a
s=g.a
if(typeof s!=="number")return s.l()
r=$.x()
r.toString
if(typeof t!=="number")return t.n()
s=t-(s+g.d)
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}else{u=$.aD()
t=u.a
if((c.a&t)>>>0===t){t=a.a
if(typeof t!=="number")return t.l()
s=g.a
r=$.x()
r.toString
if(typeof s!=="number")return H.c(s)
s=t+a.d-s
q=Math.abs(s)<r.a?0:s/d
p=!0}else{u=f
q=u
p=!1}}if(p){if(typeof q!=="number")return q.B()
t=q<100&&q>=0&&q<=1}else t=!1
if(t){t=g.b
s=b.b
if(typeof s!=="number")return s.j()
if(typeof q!=="number")return H.c(q)
if(typeof t!=="number")return t.l()
o=t+s*q
t=a.b
if(typeof t!=="number")return t.l()
s=$.x().a
if(o-s<t+a.e&&t-s<o+g.e){t=g.c
r=b.c
if(typeof r!=="number")return r.j()
if(typeof t!=="number")return t.l()
n=t+r*q
t=a.c
if(typeof t!=="number")return t.l()
if(n-s<t+a.f&&t-s<n+g.f){m=u
l=q}else{m=e
l=100}}else{m=e
l=100}}else{m=e
l=100}}else{u=f
m=e
q=u
l=100}t=b.b
if(t!==0){if(typeof t!=="number")return t.a0()
if(t>0){k=$.bg()
s=k.a
if((c.a&s)>>>0===s){s=a.b
r=g.b
if(typeof r!=="number")return r.l()
j=$.x()
j.toString
if(typeof s!=="number")return s.n()
r=s-(r+g.e)
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}else{k=$.aE()
s=k.a
if((c.a&s)>>>0===s){s=a.b
if(typeof s!=="number")return s.l()
r=g.b
j=$.x()
j.toString
if(typeof r!=="number")return H.c(r)
r=s+a.e-r
q=Math.abs(r)<j.a?0:r/t
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.B()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.j()
if(typeof q!=="number")return H.c(q)
if(typeof s!=="number")return s.l()
i=s+d*q
s=a.a
if(typeof s!=="number")return s.l()
r=$.x().a
if(i-r<s+a.d&&s-r<i+g.d){s=g.c
j=b.c
if(typeof j!=="number")return j.j()
if(typeof s!=="number")return s.l()
n=s+j*q
s=a.c
if(typeof s!=="number")return s.l()
if(n-r<s+a.f&&s-r<n+g.f){m=u
l=q}}}}s=b.c
if(s!==0){if(typeof s!=="number")return s.a0()
if(s>0){k=$.bh()
r=k.a
if((c.a&r)>>>0===r){r=a.c
j=g.c
if(typeof j!=="number")return j.l()
h=$.x()
h.toString
if(typeof r!=="number")return r.n()
j=r-(j+g.f)
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}else{k=$.bi()
r=k.a
if((c.a&r)>>>0===r){r=a.c
if(typeof r!=="number")return r.l()
j=g.c
h=$.x()
h.toString
if(typeof j!=="number")return H.c(j)
j=r+a.f-j
q=Math.abs(j)<h.a?0:j/s
u=k
p=!0}else p=!1}if(p){if(typeof q!=="number")return q.B()
s=q<l&&q>=0&&q<=1}else s=!1
if(s){s=g.a
if(typeof d!=="number")return d.j()
if(typeof q!=="number")return H.c(q)
if(typeof s!=="number")return s.l()
i=s+d*q
d=a.a
if(typeof d!=="number")return d.l()
s=$.x().a
if(i-s<d+a.d&&d-s<i+g.d){d=g.b
if(typeof t!=="number")return t.j()
if(typeof d!=="number")return d.l()
o=d+t*q
d=a.b
if(typeof d!=="number")return d.l()
if(o-s<d+a.e&&d-s<o+g.e){m=u
l=q}}}}if(J.K(m,e))return
return new V.he(l,m)},
bV:function(a,b){var u,t,s,r,q=this,p=q.a,o=b.a
if(typeof p!=="number")return p.l()
if(typeof o!=="number")return H.c(o)
u=q.b
t=b.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.c(t)
s=q.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.c(r)
return V.id(p+o,u+t,s+r,q.d,q.e,q.f)},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.c_))return!1
u=b.a
t=r.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(b.d-r.d)<s))return!1
if(!(Math.abs(b.e-r.e)<s))return!1
if(!(Math.abs(b.f-r.f)<s))return!1
return!0},
i:function(a){var u=this
return"["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+", "+V.A(u.d,3,0)+", "+V.A(u.e,3,0)+", "+V.A(u.f,3,0)+"]"}}
V.P.prototype={
cJ:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s=this.a,r=a.a
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
u=this.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
return s*r+u*t},
j:function(a,b){var u,t=this.a
if(typeof t!=="number")return t.j()
if(typeof b!=="number")return H.c(b)
u=this.b
if(typeof u!=="number")return u.j()
return new V.P(t*b,u*b)},
A:function(a,b){var u,t
if(Math.abs(b-0)<$.x().a){u=$.mm
return u==null?$.mm=new V.P(0,0):u}u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
return new V.P(u/b,t/b)},
p:function(a,b){var u,t,s
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof V.P))return!1
u=b.a
t=this.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=this.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+"]"}}
V.y.prototype={
cJ:function(a){return Math.sqrt(this.D(this))},
D:function(a){var u,t,s,r,q=this.a,p=a.a
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
u=this.b
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=this.c
r=a.c
if(typeof s!=="number")return s.j()
if(typeof r!=="number")return H.c(r)
return q*p+u*t+s*r},
bq:function(a){var u,t,s,r,q=this.b,p=a.c
if(typeof q!=="number")return q.j()
if(typeof p!=="number")return H.c(p)
u=this.c
t=a.b
if(typeof u!=="number")return u.j()
if(typeof t!=="number")return H.c(t)
s=a.a
if(typeof s!=="number")return H.c(s)
r=this.a
if(typeof r!=="number")return r.j()
return new V.y(q*p-u*t,u*s-r*p,r*t-q*s)},
l:function(a,b){var u,t,s,r,q=this.a,p=b.a
if(typeof q!=="number")return q.l()
if(typeof p!=="number")return H.c(p)
u=this.b
t=b.b
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.c(t)
s=this.c
r=b.c
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.c(r)
return new V.y(q+p,u+t,s+r)},
O:function(a){var u,t,s=this.a
if(typeof s!=="number")return s.O()
u=this.b
if(typeof u!=="number")return u.O()
t=this.c
if(typeof t!=="number")return t.O()
return new V.y(-s,-u,-t)},
j:function(a,b){var u,t,s=this.a
if(typeof s!=="number")return s.j()
u=this.b
if(typeof u!=="number")return u.j()
t=this.c
if(typeof t!=="number")return t.j()
return new V.y(s*b,u*b,t*b)},
A:function(a,b){var u,t,s
if(Math.abs(b-0)<$.x().a)return V.cP()
u=this.a
if(typeof u!=="number")return u.A()
t=this.b
if(typeof t!=="number")return t.A()
s=this.c
if(typeof s!=="number")return s.A()
return new V.y(u/b,t/b,s/b)},
cI:function(){var u=this.a,t=$.x()
t.toString
if(typeof u!=="number")return H.c(u)
t=t.a
if(!(Math.abs(0-u)<t))return!1
u=this.b
if(typeof u!=="number")return H.c(u)
if(!(Math.abs(0-u)<t))return!1
u=this.c
if(typeof u!=="number")return H.c(u)
if(!(Math.abs(0-u)<t))return!1
return!0},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof V.y))return!1
u=b.a
t=r.a
s=$.x()
s.toString
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
s=s.a
if(!(Math.abs(u-t)<s))return!1
u=b.b
t=r.b
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
u=b.c
t=r.c
if(typeof u!=="number")return u.n()
if(typeof t!=="number")return H.c(t)
if(!(Math.abs(u-t)<s))return!1
return!0},
i:function(a){return"["+V.A(this.a,3,0)+", "+V.A(this.b,3,0)+", "+V.A(this.c,3,0)+"]"}}
U.fI.prototype={
c2:function(a){var u=this.a,t=this.c,s=this.b
if(u)return V.kW(a,t,s)
else{if(a<t)u=t
else u=a>s?s:a
return u}},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
C:function(a){var u=this.y
if(u!=null)u.E(a)},
scS:function(a,b){var u=this.a
if(u!==b){this.a=b
u=new D.B("wrap",u,b)
u.b=!0
this.C(u)}},
scK:function(a){var u,t=this,s=t.b
if(!(Math.abs(s-a)<$.x().a)){t.b=a
if(a<t.c)t.d=t.c=a
else{u=t.d
if(a<u)t.d=t.c2(u)}s=new D.B("maximumLocation",s,t.b)
s.b=!0
t.C(s)}},
scL:function(a){var u,t=this,s=t.c
if(!(Math.abs(s-a)<$.x().a)){t.c=a
if(t.b<a)t.d=t.b=a
else{u=t.d
if(a>u)t.d=t.c2(u)}s=new D.B("minimumLocation",s,t.c)
s.b=!0
t.C(s)}},
sa_:function(a,b){var u,t=this
b=t.c2(b==null?0:b)
u=t.d
if(!(Math.abs(u-b)<$.x().a)){t.d=b
u=new D.B("location",u,b)
u.b=!0
t.C(u)}},
saG:function(a){var u,t,s=this,r=s.e
if(!(Math.abs(r-a)<$.x().a)){s.e=a
u=s.f
t=-a
if(u<t)u=t
else if(u>a)u=a
s.f=u
r=new D.B("maximumVelocity",r,a)
r.b=!0
s.C(r)}},
sR:function(a){var u=this,t=a==null?0:a,s=u.e
a=-s
if(!(t<a))a=t>s?s:t
t=u.f
if(!(Math.abs(t-a)<$.x().a)){u.f=a
t=new D.B("velocity",t,a)
t.b=!0
u.C(t)}},
saR:function(a){var u
if(a<0)a=0
else if(a>1)a=1
u=this.x
if(!(Math.abs(u-a)<$.x().a)){this.x=a
u=new D.B("dampening",u,a)
u.b=!0
this.C(u)}},
ai:function(a,b){var u,t,s,r=this,q=r.f,p=$.x().a
if(!(Math.abs(q-0)<p)||!(Math.abs(r.r-0)<p)){u=q+r.r*b
q=r.e
t=-q
if(u<t)u=t
else if(u>q)u=q
r.sa_(0,r.d+u*b)
q=r.x
if(!(Math.abs(q-0)<$.x().a)){s=u*Math.pow(1-q,b)
if(u<0){if(s<u)s=u
else if(s>0)s=0}else if(s<0)s=0
else if(s>u)s=u
u=s}r.sR(u)}}}
U.dc.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
aA:function(a,b,c){return this.a},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.dc))return!1
return J.K(this.a,b.a)},
i:function(a){return"Constant: "+this.a.P("          ")}}
U.cs.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
C:function(a){var u=this.e
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
fa:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gaB(),s=[{func:1,ret:-1,args:[D.a5]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.gt()
o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bq()
u.b=!0
this.C(u)},
hS:function(a,b){var u,t
for(u=b.gW(b),t=this.gaB();u.w();)u.gK(u).gt().X(0,t)
u=new D.br()
u.b=!0
this.C(u)},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(typeof r!=="number")return r.B()
if(r<q){s.r=q
r=s.e
if(r!=null)++r.d
for(r=s.a,r=new J.aa(r,r.length),u=null;r.w();){q=r.d
if(q!=null){t=q.aA(0,b,c)
if(t!=null)u=u==null?t:t.j(0,u)}}s.f=u==null?V.bW():u
r=s.e
if(r!=null)r.aI(0)}return s.f},
p:function(a,b){var u,t,s,r
if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cs))return!1
u=this.a.length
for(t=0;t<u;++t){s=this.a
if(t>=s.length)return H.d(s,t)
s=s[t]
r=b.a
if(t>=r.length)return H.d(r,t)
if(!J.K(s,r[t]))return!1}return!0},
i:function(a){return"Group"},
$ai:function(){return[U.ad]},
$ab1:function(){return[U.ad]},
$iad:1}
U.cv.prototype={
gt:function(){var u=this.b
return u==null?this.b=D.E():u},
C:function(a){var u=this.b
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
aA:function(a,b,c){var u,t=this,s=t.d,r=b.e
if(s<r){t.d=r
s=t.b
if(s!=null)++s.d
s=t.a
s=s==null?null:s.aA(0,b,c)
u=s==null?null:s.bs(0)
t.c=u==null?V.bW():u
s=t.b
if(s!=null)s.aI(0)}return t.c},
p:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof U.cv))return!1
if(this.a!=b.a)return!1
return!0},
i:function(a){return"Invert"},
$iad:1}
U.ad.prototype={}
U.dO.prototype={
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
C:function(a){var u=this.y
if(u!=null)u.E(a)},
seH:function(a){var u
a=V.kW(a,0,6.283185307179586)
u=this.a
if(!(Math.abs(u-a)<$.x().a)){this.a=a
u=new D.B("yaw",u,a)
u.b=!0
this.C(u)}},
seq:function(a,b){var u
b=V.kW(b,0,6.283185307179586)
u=this.b
if(!(Math.abs(u-b)<$.x().a)){this.b=b
u=new D.B("pitch",u,b)
u.b=!0
this.C(u)}},
seA:function(a){var u
a=V.kW(a,0,6.283185307179586)
u=this.c
if(!(Math.abs(u-a)<$.x().a)){this.c=a
u=new D.B("roll",u,a)
u.b=!0
this.C(u)}},
aA:function(a,b,c){var u,t,s=this,r=s.r,q=b.e
if(r<q){s.r=q
r=s.y
if(r!=null)++r.d
s.seH(s.a+s.d*b.y)
s.seq(0,s.b+s.e*b.y)
s.seA(s.c+s.f*b.y)
r=s.c
u=Math.cos(r)
t=Math.sin(r)
s.x=V.aN(u,-t,0,0,t,u,0,0,0,0,1,0,0,0,0,1).j(0,V.m1(s.b)).j(0,V.m0(s.a))
r=s.y
if(r!=null)r.aI(0)}return s.x},
p:function(a,b){var u,t,s,r=this
if(b==null)return!1
if(r===b)return!0
if(!(b instanceof U.dO))return!1
u=r.a
t=b.a
s=$.x().a
if(!(Math.abs(u-t)<s))return!1
if(!(Math.abs(r.b-b.b)<s))return!1
if(!(Math.abs(r.c-b.c)<s))return!1
if(!(Math.abs(r.d-b.d)<s))return!1
if(!(Math.abs(r.e-b.e)<s))return!1
if(!(Math.abs(r.f-b.f)<s))return!1
return!0},
i:function(a){var u=this
return"Rotator: ["+V.A(u.a,3,0)+", "+V.A(u.b,3,0)+", "+V.A(u.c,3,0)+"], ["+V.A(u.d,3,0)+", "+V.A(u.e,3,0)+", "+V.A(u.f,3,0)+"]"}}
U.e8.prototype={
gt:function(){var u=this.fx
return u==null?this.fx=D.E():u},
C:function(a){var u=this.fx
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
ae:function(a){var u,t,s=this
if(s.a!=null)return!1
s.a=a
u=a.c
t=u.b
u=t==null?u.b=D.E():t
u.q(0,s.gfV())
u=s.a.c
t=u.d
u=t==null?u.d=D.E():t
u.q(0,s.gfX())
u=s.a.c
t=u.c
u=t==null?u.c=D.E():t
u.q(0,s.gfZ())
u=s.a.d
t=u.f
u=t==null?u.f=D.E():t
u.q(0,s.gfR())
u=s.a.d
t=u.d
u=t==null?u.d=D.E():t
u.q(0,s.gfT())
u=s.a.e
t=u.b
u=t==null?u.b=D.E():t
u.q(0,s.giw())
u=s.a.e
t=u.d
u=t==null?u.d=D.E():t
u.q(0,s.giu())
u=s.a.e
t=u.c
u=t==null?u.c=D.E():t
u.q(0,s.gis())
return!0},
aC:function(a){var u=a.a,t=a.b
if(this.f){if(typeof u!=="number")return u.O()
u=-u}if(this.r){if(typeof t!=="number")return t.O()
t=-t}return new V.P(u,t)},
fW:function(a){var u=this
H.k(a,"$ib6")
if(!J.K(u.d,a.x.b))return
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
fY:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$ib6")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.P(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.c(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aC(new V.P(t.a,t.b).j(0,2).A(0,u.gaH()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.c(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.c(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aC(new V.P(s.a,s.b).j(0,2).A(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.c(p)
o=n.cy
if(typeof o!=="number")return H.c(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.c(q)
s=n.db
if(typeof s!=="number")return H.c(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.n(0,a.z)
n.dx=n.aC(new V.P(t.a,t.b).j(0,2).A(0,u.gaH()))}n.ad()},
h_:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.c(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.c(u)
s.sR(-t*10*u)
r.ad()}},
fS:function(a){var u=this
if(H.k(a,"$idu").x){u.ch=!0
u.cy=u.c.d
u.db=u.b.d}},
fU:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$ib6")
if(!J.K(n.d,a.x.b))return
u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aC(new V.P(s.a,s.b).j(0,2).A(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.c(p)
o=n.cy
if(typeof o!=="number")return H.c(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.c(q)
s=n.db
if(typeof s!=="number")return H.c(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.n(0,a.z)
n.dx=n.aC(new V.P(t.a,t.b).j(0,2).A(0,u.gaH()))
n.ad()},
ix:function(a){var u=this
u.ch=u.cx=!0
u.cy=u.c.d
u.db=u.b.d},
iv:function(a){var u,t,s,r,q,p,o,n=this
H.k(a,"$ie2")
if(!n.cx)return
if(n.ch){u=a.d.n(0,a.y)
u=new V.P(u.a,u.b)
u=u.D(u)
t=n.Q
if(typeof t!=="number")return H.c(t)
if(u<t)return
n.ch=!1}if(n.e){u=a.c
t=a.d.n(0,a.y)
u=n.aC(new V.P(t.a,t.b).j(0,2).A(0,u.gaH()))
n.dx=u
t=n.c
u=u.a
if(typeof u!=="number")return u.O()
s=n.y
if(typeof s!=="number")return H.c(s)
t.sR(-u*10*s)
s=n.b
u=n.dx.b
if(typeof u!=="number")return u.O()
t=n.x
if(typeof t!=="number")return H.c(t)
s.sR(-u*10*t)}else{u=a.c
t=a.d
s=t.n(0,a.y)
r=n.aC(new V.P(s.a,s.b).j(0,2).A(0,u.gaH()))
s=n.c
q=r.a
if(typeof q!=="number")return q.O()
p=n.y
if(typeof p!=="number")return H.c(p)
o=n.cy
if(typeof o!=="number")return H.c(o)
s.sa_(0,-q*p+o)
o=n.b
p=r.b
if(typeof p!=="number")return p.O()
q=n.x
if(typeof q!=="number")return H.c(q)
s=n.db
if(typeof s!=="number")return H.c(s)
o.sa_(0,-p*q+s)
n.b.sR(0)
n.c.sR(0)
t=t.n(0,a.z)
n.dx=n.aC(new V.P(t.a,t.b).j(0,2).A(0,u.gaH()))}n.ad()},
it:function(a){var u,t,s,r=this
if(!r.cx)return
r.cx=!1
if(r.ch)return
u=r.dx
if(u.D(u)>0.0001){u=r.c
t=r.dx.a
if(typeof t!=="number")return t.O()
s=r.y
if(typeof s!=="number")return H.c(s)
u.sR(-t*10*s)
s=r.b
t=r.dx.b
if(typeof t!=="number")return t.O()
u=r.x
if(typeof u!=="number")return H.c(u)
s.sR(-t*10*u)
r.ad()}},
aA:function(a,b,c){var u,t=this,s=t.dy,r=b.e
if(typeof s!=="number")return s.B()
if(s<r){t.dy=r
u=b.y
t.c.ai(0,u)
t.b.ai(0,u)
t.fr=V.m0(t.b.d).j(0,V.m1(t.c.d))}return t.fr},
$iad:1}
U.e9.prototype={
gt:function(){var u=this.dx
return u==null?this.dx=D.E():u},
C:function(a){var u=this.dx
if(u!=null)u.E(a)},
ad:function(){return this.C(null)},
sR:function(a){this.r.sR(a.a)
this.x.sR(a.b)
this.y.sR(a.c)},
ga_:function(a){return new V.t(this.r.d,this.x.d,this.y.d)},
sa_:function(a,b){this.r.sa_(0,b.a)
this.x.sa_(0,b.b)
this.y.sa_(0,b.c)},
hA:function(a){this.C(a)},
ck:function(a,b,c,d,e){if(a.r){if(typeof e!=="number")return e.l()
e+=d}else if(b.r){if(typeof e!=="number")return e.n()
e-=d}else{if(typeof e!=="number")return e.a0()
e=e>0?e-Math.min(e,c):e+Math.min(-e,c)}return e},
aA:function(a,b,c){var u,t,s,r,q,p=this,o=p.cy,n=b.e
if(typeof o!=="number")return o.B()
if(o<n){p.cy=n
u=p.ga_(p)
t=b.y
if(t>0.1)t=0.1
o=p.ch
if(typeof o!=="number")return o.j()
s=o*t
o=p.cx
if(typeof o!=="number")return o.j()
r=o*t
q=new V.y(p.r.f,p.x.f,p.y.f)
o=p.Q
if(o!=null)q=o.at(q)
q=new V.y(p.ck(p.a,p.b,s,r,q.a),p.ck(p.c,p.d,s,r,q.b),p.ck(p.e,p.f,s,r,q.c))
o=p.z
p.sR(o!=null?o.at(q):q)
p.r.ai(0,t)
p.x.ai(0,t)
p.y.ai(0,t)
if(p.dy!=null){o=p.ga_(p)
p.sa_(0,p.dy.$2(u,o))}p.db=V.dx(p.r.d,-p.x.d,p.y.d)}return p.db},
$iad:1}
M.dh.prototype={
b1:function(a){var u=this.y
if(u!=null)u.E(a)},
fb:function(){return this.b1(null)},
hg:function(a,b){var u,t,s,r,q,p,o
for(u=b.length,t=this.gb0(),s=[{func:1,ret:-1,args:[D.a5]}],r=0;r<b.length;b.length===u||(0,H.q)(b),++r){q=b[r]
if(q!=null){p=q.z
if(p==null){p=new D.bQ()
p.d=0
q.z=p}o=p.a;(o==null?p.a=H.b([],s):o).push(t)}}u=new D.bq()
u.b=!0
this.b1(u)},
hi:function(a,b){var u,t
for(u=b.gW(b),t=this.gb0();u.w();)u.gK(u).gt().X(0,t)
u=new D.br()
u.b=!0
this.b1(u)},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
bh:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=new E.iG()
e.b=!0
u=f.f
if(u!=null)u.E(e)
a.ew(f.d)
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
if(typeof s!=="number")return H.c(s)
o=C.d.ay(p*s)
p=q.b
if(typeof r!=="number")return H.c(r)
n=C.d.ay(p*r)
p=C.d.ay(q.c*s)
a.c=p
q=C.d.ay(q.d*r)
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
i=V.aN(-j/(t/q),0,0,0,0,j,0,0,0,0,l/k,-l*m/k,0,0,1,0)
u.a
a.cy.ev(i)
t=$.m4
if(t==null){t=V.m_(V.dG(),V.lo(),V.mt())
$.m4=t
h=t}else h=t
t=u.b
if(t!=null){g=t.aA(0,a,u)
if(g!=null)h=g.j(0,h)}a.db.ev(h)
for(u=f.e.a,u=new J.aa(u,u.length);u.w();)u.d.ai(0,a)
for(u=f.e.a,u=new J.aa(u,u.length);u.w();)u.d.bh(a)
f.b.toString
a.cy.cN()
a.db.cN()
f.c.toString
a.es()}}
A.d7.prototype={}
A.fp.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===b)return r}return},
j4:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.enableVertexAttribArray(r.c)}},
iZ:function(){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.a.disableVertexAttribArray(r.c)}}}
A.a4.prototype={
gN:function(a){var u=this.a?1:0,t=this.b?2:0
return u|t|0},
i:function(a){var u=this.a?1:0,t=this.b?2:0
return""+(u|t|0)},
p:function(a,b){if(b==null)return!1
if(!(b instanceof A.a4))return!1
return this.a===b.a&&this.b===b.b&&!0}}
A.hw.prototype={
eX:function(c3,c4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8=this,b9=null,c0="Required uniform value, ",c1=", was not defined or used in shader.",c2="uniform mat4 objMat;\n"
b8.z=c3
u=new P.W("")
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
A.pc(c3,u)
A.pe(c3,u)
A.pd(c3,u)
A.pg(c3,u)
A.ph(c3,u)
A.pf(c3,u)
A.pi(c3,u)
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
m=A.pb(b8.z)
b8.c=n
b8.d=m
b8.e=b8.dh(n,35633)
b8.f=b8.dh(b8.d,35632)
s=b8.a
q=s.createProgram()
b8.r=q
s.attachShader(q,b8.e)
s.attachShader(b8.r,b8.f)
s.linkProgram(b8.r)
if(!s.getProgramParameter(b8.r,35714)){l=s.getProgramInfoLog(b8.r)
s.deleteProgram(b8.r)
H.u(P.v("Failed to link shader: "+H.f(l)))}b8.ij()
b8.il()
b8.Q=b8.x.h(0,"posAttr")
b8.cx=b8.x.h(0,"normAttr")
b8.ch=b8.x.h(0,"binmAttr")
b8.cy=b8.x.h(0,"txt2DAttr")
b8.db=b8.x.h(0,"txtCubeAttr")
b8.dx=b8.x.h(0,"bendAttr")
if(c3.dy)b8.id=H.k(b8.y.M(0,"invViewMat"),"$iao")
if(t)b8.dy=H.k(b8.y.M(0,"objMat"),"$iao")
if(r)b8.fr=H.k(b8.y.M(0,"viewObjMat"),"$iao")
b8.fy=H.k(b8.y.M(0,"projViewObjMat"),"$iao")
if(c3.go)b8.fx=H.k(b8.y.M(0,"viewMat"),"$iao")
if(c3.x1)b8.k1=H.k(b8.y.M(0,"txt2DMat"),"$icM")
if(c3.x2)b8.k2=H.k(b8.y.M(0,"txtCubeMat"),"$iao")
if(c3.y1)b8.k3=H.k(b8.y.M(0,"colorMat"),"$iao")
b8.r1=H.b([],[A.ao])
t=c3.be
if(t>0){b8.k4=b8.y.M(0,"bendMatCount")
for(k=0;k<t;++k){s=b8.r1
r=b8.y
q="bendValues["+k+"].mat"
j=r.h(0,q)
if(j==null)H.u(P.v(c0+q+c1))
s.push(H.k(j,"$iao"))}}t=c3.a
if(t.a)b8.r2=H.k(b8.y.M(0,"emissionClr"),"$iG")
if(t.b)b8.rx=H.k(b8.y.M(0,"emissionTxt"),"$ia7")
t=c3.b
if(t.a)b8.x1=H.k(b8.y.M(0,"ambientClr"),"$iG")
if(t.b)b8.x2=H.k(b8.y.M(0,"ambientTxt"),"$ia7")
t=c3.c
if(t.a)b8.y2=H.k(b8.y.M(0,"diffuseClr"),"$iG")
if(t.b)b8.be=H.k(b8.y.M(0,"diffuseTxt"),"$ia7")
t=c3.d
if(t.a)b8.bN=H.k(b8.y.M(0,"invDiffuseClr"),"$iG")
if(t.b)b8.dU=H.k(b8.y.M(0,"invDiffuseTxt"),"$ia7")
t=c3.e
s=t.a
if(s||t.b||!1){b8.dX=H.k(b8.y.M(0,"shininess"),"$iY")
if(s)b8.dV=H.k(b8.y.M(0,"specularClr"),"$iG")
if(t.b)b8.dW=H.k(b8.y.M(0,"specularTxt"),"$ia7")}if(c3.f.b)b8.dY=H.k(b8.y.M(0,"bumpTxt"),"$ia7")
if(c3.db){b8.dZ=H.k(b8.y.M(0,"envSampler"),"$ic2")
t=c3.r
if(t.a)b8.e_=H.k(b8.y.M(0,"reflectClr"),"$iG")
if(t.b)b8.e0=H.k(b8.y.M(0,"reflectTxt"),"$ia7")
t=c3.x
s=t.a
if(s||t.b||!1){b8.e1=H.k(b8.y.M(0,"refraction"),"$iY")
if(s)b8.e2=H.k(b8.y.M(0,"refractClr"),"$iG")
if(t.b)b8.e3=H.k(b8.y.M(0,"refractTxt"),"$ia7")}}t=c3.y
if(t.a)b8.e4=H.k(b8.y.M(0,"alpha"),"$iY")
if(t.b)b8.e5=H.k(b8.y.M(0,"alphaTxt"),"$ia7")
if(c3.k1){t=c3.z
s=t.length
if(s!==0){r=P.n
b8.cu=new H.F([r,A.bC])
b8.cv=new H.F([r,[P.p,A.cK]])
for(r=[A.cK],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="barLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].startPnt"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
H.k(j,"$iG")
p=b8.y
o=f+"s["+k+"].endPnt"
d=p.h(0,o)
if(d==null)H.u(P.v(c0+o+c1))
H.k(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.v(c0+o+c1))
H.k(c,"$iG")
if(typeof g!=="number")return g.ab()
if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.v(c0+o+c1))
H.k(b,"$iY")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.v(c0+o+c1))
H.k(a,"$iY")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.v(c0+o+c1))
H.k(a0,"$iY")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cK(j,d,c,a3,a2,a1))}b8.cv.k(0,g,e)
q=b8.cu
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
q.k(0,g,j)}}t=c3.Q
s=t.length
if(s!==0){r=P.n
b8.cw=new H.F([r,A.bC])
b8.cz=new H.F([r,[P.p,A.cL]])
for(r=[A.cL],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="dirLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){if(typeof g!=="number")return g.ab()
p=(g&1)!==0
if(p){o=b8.y
a4=f+"s["+k+"].objUp"
j=o.h(0,a4)
if(j==null)H.u(P.v(c0+a4+c1))
H.k(j,"$iG")
o=b8.y
a4=f+"s["+k+"].objRight"
d=o.h(0,a4)
if(d==null)H.u(P.v(c0+a4+c1))
H.k(d,"$iG")
o=b8.y
a4=f+"s["+k+"].objDir"
c=o.h(0,a4)
if(c==null)H.u(P.v(c0+a4+c1))
H.k(c,"$iG")
a5=c
a6=d
a7=j}else{a5=b9
a6=a5
a7=a6}o=b8.y
a4=f+"s["+k+"].viewDir"
j=o.h(0,a4)
if(j==null)H.u(P.v(c0+a4+c1))
H.k(j,"$iG")
o=b8.y
a4=f+"s["+k+"].color"
d=o.h(0,a4)
if(d==null)H.u(P.v(c0+a4+c1))
H.k(d,"$iG")
if(p){p=b8.y
o=f+"sTexture2D"+k
c=p.h(0,o)
if(c==null)H.u(P.v(c0+o+c1))
H.k(c,"$ia7")
a8=c}else a8=b9
e.push(new A.cL(a7,a6,a5,j,d,a8))}b8.cz.k(0,g,e)
q=b8.cw
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
q.k(0,g,j)}}t=c3.ch
s=t.length
if(s!==0){r=P.n
b8.cA=new H.F([r,A.bC])
b8.cB=new H.F([r,[P.p,A.cN]])
for(r=[A.cN],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="pointLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].point"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
H.k(j,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
d=p.h(0,o)
if(d==null)H.u(P.v(c0+o+c1))
H.k(d,"$iG")
p=b8.y
o=f+"s["+k+"].color"
c=p.h(0,o)
if(c==null)H.u(P.v(c0+o+c1))
H.k(c,"$iG")
if(typeof g!=="number")return g.ab()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].invViewRotMat"
b=p.h(0,o)
if(b==null)H.u(P.v(c0+o+c1))
H.k(b,"$icM")
a9=b}else a9=b9
if((g&1)!==0){p=b8.y
o=f+"sTextureCube"+k
b=p.h(0,o)
if(b==null)H.u(P.v(c0+o+c1))
H.k(b,"$ic2")
a8=b}else a8=b9
if((g&2)!==0){p=b8.y
o=f+"sShadowCube"+k
b=p.h(0,o)
if(b==null)H.u(P.v(c0+o+c1))
H.k(b,"$ic2")
p=b8.y
o=f+"s["+k+"].shadowAdj"
a=p.h(0,o)
if(a==null)H.u(P.v(c0+o+c1))
H.k(a,"$icJ")
b0=b
b1=a}else{b0=b9
b1=b0}if((g&4)!==0){p=b8.y
o=f+"s["+k+"].att0"
b=p.h(0,o)
if(b==null)H.u(P.v(c0+o+c1))
H.k(b,"$iY")
p=b8.y
o=f+"s["+k+"].att1"
a=p.h(0,o)
if(a==null)H.u(P.v(c0+o+c1))
H.k(a,"$iY")
p=b8.y
o=f+"s["+k+"].att2"
a0=p.h(0,o)
if(a0==null)H.u(P.v(c0+o+c1))
H.k(a0,"$iY")
a1=a0
a2=a
a3=b}else{a1=b9
a2=a1
a3=a2}e.push(new A.cN(j,d,a9,c,a8,b0,b1,a3,a2,a1))}b8.cB.k(0,g,e)
q=b8.cA
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
q.k(0,g,j)}}t=c3.cx
s=t.length
if(s!==0){r=P.n
b8.cC=new H.F([r,A.bC])
b8.cD=new H.F([r,[P.p,A.cO]])
for(r=[A.cO],i=0;i<t.length;t.length===s||(0,H.q)(t),++i){h=t[i]
g=h.a
f="spotLight"+H.f(g)
e=H.b([],r)
for(q=h.b,k=0;k<q;++k){p=b8.y
o=f+"s["+k+"].objPnt"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
H.k(j,"$iG")
p=b8.y
o=f+"s["+k+"].objDir"
d=p.h(0,o)
if(d==null)H.u(P.v(c0+o+c1))
H.k(d,"$iG")
p=b8.y
o=f+"s["+k+"].viewPnt"
c=p.h(0,o)
if(c==null)H.u(P.v(c0+o+c1))
H.k(c,"$iG")
p=b8.y
o=f+"s["+k+"].color"
b=p.h(0,o)
if(b==null)H.u(P.v(c0+o+c1))
H.k(b,"$iG")
if(typeof g!=="number")return g.ab()
if((g&3)!==0){p=b8.y
o=f+"s["+k+"].objUp"
a=p.h(0,o)
if(a==null)H.u(P.v(c0+o+c1))
H.k(a,"$iG")
p=b8.y
o=f+"s["+k+"].objRight"
a0=p.h(0,o)
if(a0==null)H.u(P.v(c0+o+c1))
H.k(a0,"$iG")
p=b8.y
o=f+"s["+k+"].tuScalar"
b2=p.h(0,o)
if(b2==null)H.u(P.v(c0+o+c1))
H.k(b2,"$iY")
p=b8.y
o=f+"s["+k+"].tvScalar"
b3=p.h(0,o)
if(b3==null)H.u(P.v(c0+o+c1))
H.k(b3,"$iY")
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
if(a==null)H.u(P.v(c0+a4+c1))
H.k(a,"$icJ")
b1=a}else b1=b9
if((g&8)!==0){o=b8.y
a4=f+"s["+k+"].cutoff"
a=o.h(0,a4)
if(a==null)H.u(P.v(c0+a4+c1))
H.k(a,"$iY")
o=b8.y
a4=f+"s["+k+"].coneAngle"
a0=o.h(0,a4)
if(a0==null)H.u(P.v(c0+a4+c1))
H.k(a0,"$iY")
b6=a0
b7=a}else{b6=b9
b7=b6}if((g&4)!==0){o=b8.y
a4=f+"s["+k+"].att0"
a=o.h(0,a4)
if(a==null)H.u(P.v(c0+a4+c1))
H.k(a,"$iY")
o=b8.y
a4=f+"s["+k+"].att1"
a0=o.h(0,a4)
if(a0==null)H.u(P.v(c0+a4+c1))
H.k(a0,"$iY")
o=b8.y
a4=f+"s["+k+"].att2"
b2=o.h(0,a4)
if(b2==null)H.u(P.v(c0+a4+c1))
H.k(b2,"$iY")
a1=b2
a2=a0
a3=a}else{a1=b9
a2=a1
a3=a2}if((g&1)!==0){o=b8.y
a4=f+"sTexture2D"+k
a=o.h(0,a4)
if(a==null)H.u(P.v(c0+a4+c1))
H.k(a,"$ia7")
a8=a}else a8=b9
if(p){p=b8.y
o=f+"sShadow2D"+k
a=p.h(0,o)
if(a==null)H.u(P.v(c0+o+c1))
H.k(a,"$ia7")
b0=a}else b0=b9
e.push(new A.cO(j,d,c,b,a7,a6,b5,b4,b1,b7,b6,a3,a2,a1,a8,b0))}b8.cD.k(0,g,e)
q=b8.cC
p=b8.y
o=f+"Count"
j=p.h(0,o)
if(j==null)H.u(P.v(c0+o+c1))
q.k(0,g,j)}}}},
aw:function(a,b){if(b!=null&&b.gaa(b))a.eN(b)},
ii:function(a,b){}}
A.d8.prototype={
i:function(a){return"barLight"+H.f(this.a)}}
A.de.prototype={
i:function(a){return"dirLight"+H.f(this.a)}}
A.dH.prototype={
i:function(a){return"pointLight"+H.f(this.a)}}
A.dR.prototype={
i:function(a){return"spotLight"+H.f(this.a)}}
A.hz.prototype={
i:function(a){return this.br}}
A.cK.prototype={}
A.cL.prototype={}
A.cN.prototype={}
A.cO.prototype={}
A.dP.prototype={
f0:function(a,b){var u=this
u.y=u.x=u.r=u.f=u.e=u.d=u.c=null},
dh:function(a,b){var u,t=this.a,s=t.createShader(b)
t.shaderSource(s,a)
t.compileShader(s)
if(!t.getShaderParameter(s,35713)){u=t.getShaderInfoLog(s)
t.deleteShader(s)
throw H.e(P.v("Error compiling shader '"+H.f(s)+"': "+H.f(u)))}return s},
ij:function(){var u,t,s,r=this,q=H.b([],[A.d7]),p=r.a,o=p.getProgramParameter(r.r,35721)
if(typeof o!=="number")return H.c(o)
u=0
for(;u<o;++u){t=p.getActiveAttrib(r.r,u)
s=p.getAttribLocation(r.r,t.name)
q.push(new A.d7(p,t.name,s))}r.x=new A.fp(q)},
il:function(){var u,t,s,r=this,q=H.b([],[A.e4]),p=r.a,o=p.getProgramParameter(r.r,35718)
if(typeof o!=="number")return H.c(o)
u=0
for(;u<o;++u){t=p.getActiveUniform(r.r,u)
s=p.getUniformLocation(r.r,t.name)
q.push(r.iW(t.type,t.size,t.name,s))}r.y=new A.jb(q)},
b6:function(a,b,c){var u=this.a
if(a===1)return new A.bC(u,b,c)
else return A.ll(u,this.r,b,a,c)},
fG:function(a,b,c){var u=this.a
if(a===1)return new A.a7(u,b,c)
else return A.ll(u,this.r,b,a,c)},
fH:function(a,b,c){var u=this.a
if(a===1)return new A.c2(u,b,c)
else return A.ll(u,this.r,b,a,c)},
bJ:function(a,b){return new P.em(a+" uniform variables are unsupported by all browsers.\n"+("Please change the type of "+H.f(b)+"."))},
iW:function(a,b,c,d){var u=this
switch(a){case 5120:return u.b6(b,c,d)
case 5121:return u.b6(b,c,d)
case 5122:return u.b6(b,c,d)
case 5123:return u.b6(b,c,d)
case 5124:return u.b6(b,c,d)
case 5125:return u.b6(b,c,d)
case 5126:return new A.Y(u.a,c,d)
case 35664:return new A.j7(u.a,c,d)
case 35665:return new A.G(u.a,c,d)
case 35666:return new A.cJ(u.a,c,d)
case 35667:return new A.j8(u.a,c,d)
case 35668:return new A.j9(u.a,c,d)
case 35669:return new A.ja(u.a,c,d)
case 35674:return new A.jc(u.a,c,d)
case 35675:return new A.cM(u.a,c,d)
case 35676:return new A.ao(u.a,c,d)
case 35678:return u.fG(b,c,d)
case 35680:return u.fH(b,c,d)
case 35670:throw H.e(u.bJ("BOOL",c))
case 35671:throw H.e(u.bJ("BOOL_VEC2",c))
case 35672:throw H.e(u.bJ("BOOL_VEC3",c))
case 35673:throw H.e(u.bJ("BOOL_VEC4",c))
default:throw H.e(P.v("Unknown uniform variable type "+H.f(a)+" for "+H.f(c)+"."))}}}
A.e4.prototype={}
A.jb.prototype={
h:function(a,b){var u,t,s,r
for(u=this.a,t=u.length,s=0;s<t;++s){r=u[s]
if(r.c===b)return r}return},
M:function(a,b){var u=this.h(0,b)
if(u==null)throw H.e(P.v("Required uniform value, "+b+", was not defined or used in shader."))
return u},
i:function(a){return this.Z()},
Z:function(){var u,t,s,r
for(u=this.a,t=u.length,s="",r=0;r<u.length;u.length===t||(0,H.q)(u),++r)s+=u[r].i(0)+"\n"
return s}}
A.bC.prototype={
i:function(a){return"Uniform1i: "+H.f(this.c)}}
A.j8.prototype={
i:function(a){return"Uniform2i: "+H.f(this.c)}}
A.j9.prototype={
i:function(a){return"Uniform3i: "+H.f(this.c)}}
A.ja.prototype={
i:function(a){return"Uniform4i: "+H.f(this.c)}}
A.j6.prototype={
i:function(a){return"Uniform1iv: "+H.f(this.c)}}
A.Y.prototype={
i:function(a){return"Uniform1f: "+H.f(this.c)}}
A.j7.prototype={
i:function(a){return"Uniform2f: "+H.f(this.c)}}
A.G.prototype={
i:function(a){return"Uniform3f: "+H.f(this.c)}}
A.cJ.prototype={
i:function(a){return"Uniform4f: "+H.f(this.c)}}
A.jc.prototype={
i:function(a){return"Uniform1Mat2 "+H.f(this.c)}}
A.cM.prototype={
au:function(a){var u=new Float32Array(H.c9(a))
this.a.uniformMatrix3fv(this.d,!1,u)},
i:function(a){return"UniformMat3: "+H.f(this.c)}}
A.ao.prototype={
au:function(a){var u=new Float32Array(H.c9(a))
this.a.uniformMatrix4fv(this.d,!1,u)},
i:function(a){return"UniformMat4: "+H.f(this.c)}}
A.a7.prototype={
eN:function(a){var u=a.gaa(a),t=this.a,s=this.d
if(!u)t.uniform1i(s,0)
else t.uniform1i(s,a.ga9(a))},
i:function(a){return"UniformSampler2D: "+H.f(this.c)}}
A.c2.prototype={
i:function(a){return"UniformSamplerCube: "+H.f(this.c)}}
F.bR.prototype={
fv:function(){var u,t,s,r=this.a,q=r==null?null:r.r
r=this.b
u=r==null?null:r.r
r=this.c
t=r==null?null:r.r
s=V.cP()
if(q!=null)s=s.l(0,q)
if(u!=null)s=s.l(0,u)
if(t!=null)s=s.l(0,t)
if(s.cI())return
return s.A(0,Math.sqrt(s.D(s)))},
fz:function(){var u,t,s,r=this.a,q=r==null?null:r.f
r=this.b
u=r==null?null:r.f
r=this.c
t=r==null?null:r.f
if(q==null||u==null||t==null)return
r=u.n(0,q)
r=new V.y(r.a,r.b,r.c)
s=r.A(0,Math.sqrt(r.D(r)))
r=t.n(0,q)
r=new V.y(r.a,r.b,r.c)
r=s.bq(r.A(0,Math.sqrt(r.D(r))))
return r.A(0,Math.sqrt(r.D(r)))},
cq:function(){var u,t=this
if(t.d!=null)return!0
u=t.fv()
if(u==null){u=t.fz()
if(u==null)return!1}t.d=u
t.a.a.ag()
return!0},
fu:function(){var u,t,s,r=this.a,q=r==null?null:r.x
r=this.b
u=r==null?null:r.x
r=this.c
t=r==null?null:r.x
s=V.cP()
if(q!=null)s=s.l(0,q)
if(u!=null)s=s.l(0,u)
if(t!=null)s=s.l(0,t)
if(s.cI())return
return s.A(0,Math.sqrt(s.D(s)))},
fw:function(){var u,t,s,r,q,p,o,n=this,m=null,l=n.a,k=l==null,j=k?m:l.f,i=n.b,h=i==null,g=h?m:i.f,f=n.c,e=f==null,d=e?m:f.f
if(j==null||g==null||d==null)return
u=k?m:l.y
t=h?m:i.y
s=e?m:f.y
if(u==null||t==null||s==null)return
l=t.b
k=s.b
if(typeof l!=="number")return l.n()
if(typeof k!=="number")return H.c(k)
r=l-k
if(Math.abs(r-0)<$.x().a){l=d.n(0,g)
l=new V.y(l.a,l.b,l.c)
q=l.A(0,Math.sqrt(l.D(l)))
l=s.a
t=t.a
if(typeof l!=="number")return l.n()
if(typeof t!=="number")return H.c(t)
if(l-t<0)q=q.O(0)}else{k=u.b
if(typeof k!=="number")return H.c(k)
p=(l-k)/r
k=d.n(0,g).j(0,p).l(0,g).n(0,j)
k=new V.y(k.a,k.b,k.c)
q=k.A(0,Math.sqrt(k.D(k)))
s=s.a
t=t.a
if(typeof s!=="number")return s.n()
if(typeof t!=="number")return H.c(t)
u=u.a
if(typeof u!=="number")return H.c(u)
if((s-t)*p+t-u<0)q=q.O(0)}l=n.d
if(l!=null){o=l.A(0,Math.sqrt(l.D(l)))
l=o.bq(q)
l=l.A(0,Math.sqrt(l.D(l))).bq(o)
q=l.A(0,Math.sqrt(l.D(l)))}return q},
cp:function(){var u,t=this
if(t.e!=null)return!0
u=t.fu()
if(u==null){u=t.fw()
if(u==null)return!1}t.e=u
t.a.a.ag()
return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Z()},
P:function(a){var u,t=this,s=t.a
if(s==null||t.b==null||t.c==null)return a+"disposed"
u=a+C.a.aW(J.aF(s.e),0)+", "+C.a.aW(J.aF(t.b.e),0)+", "+C.a.aW(J.aF(t.c.e),0)+" {"
s=t.d
u=s!=null?u+(s.i(0)+", "):u+"-, "
s=t.e
return s!=null?u+(s.i(0)+"}"):u+"-}"},
Z:function(){return this.P("")}}
F.ds.prototype={}
F.i5.prototype={}
F.dL.prototype={
gt:function(){var u=this.Q
return u==null?this.Q=D.E():u},
bp:function(a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=a0.length,a=new Array(b*c.c)
a.fixed$length=Array
u=H.b(a,[P.J])
for(a=u.length,t=c.a,s=0,r=0;r<c.b;++r){q=t.cm(r)
for(p=0;p<b;++p){if(p>=a0.length)return H.d(a0,p)
o=a0[p].ee(q)
n=s+p*c.c
for(m=o.length,l=0;l<m;++l){k=o[l]
if(n<0||n>=a)return H.d(u,n)
u[n]=k;++n}}s+=q.gbk(q)}a=$.Z()
if((t.a&a.a)!==0){a=c.z
if(a==null){if(0>=a0.length)return H.d(a0,0)
a=a0[0].f
a=V.id(a.a,a.b,a.c,0,0,0)
c.z=a}for(r=b-1;r>=0;--r){if(r>=a0.length)return H.d(a0,r)
t=a0[r].f
m=t.a
k=t.b
t=t.c
j=a.d
i=a.a
if(typeof m!=="number")return m.B()
if(typeof i!=="number")return H.c(i)
if(m<i){j+=i-m
h=m}else{if(m>i+j)j=m-i
h=i}g=a.e
m=a.b
if(typeof k!=="number")return k.B()
if(typeof m!=="number")return H.c(m)
if(k<m){g+=m-k
f=k}else{if(k>m+g)g=k-m
f=m}e=a.f
a=a.c
if(typeof t!=="number")return t.B()
if(typeof a!=="number")return H.c(a)
if(t<a){e+=a-t
d=t}else{if(t>a+e)e=t-a
d=a}a=new V.c_(h,f,d,j,g,e)
c.z=a}}n=c.d
c.d=n+b
C.b.aD(c.f,u)
c.ag()
return n},
bo:function(a){var u,t,s,r,q,p,o,n,m=a.length
if(m>=3){u=new Array((m-2)*3)
u.fixed$length=Array
t=H.b(u,[P.n])
u=a.length
if(0>=u)return H.d(a,0)
s=a[0]
for(r=t.length,q=2,p=0;q<m;++q,p+=3){if(p>=r)return H.d(t,p)
t[p]=s
o=p+1
n=q-1
if(n>=u)return H.d(a,n)
n=a[n]
if(o>=r)return H.d(t,o)
t[o]=n
n=p+2
if(q>=u)return H.d(a,q)
o=a[q]
if(n>=r)return H.d(t,n)
t[n]=o}C.b.aD(this.y,t)
this.ag()}},
iI:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.length
if(k>=3){u=new Array((k-2)*3)
u.fixed$length=Array
t=H.b(u,[P.n])
for(u=a.length,s=t.length,r=!1,q=2,p=0;q<k;++q,p+=3){o=q-2
n=p+1
m=q-1
l=p+2
if(r){if(o>=u)return H.d(a,o)
o=a[o]
if(p>=s)return H.d(t,p)
t[p]=o
if(m>=u)return H.d(a,m)
m=a[m]
if(n>=s)return H.d(t,n)
t[n]=m
if(q>=u)return H.d(a,q)
m=a[q]
if(l>=s)return H.d(t,l)
t[l]=m
r=!1}else{if(m>=u)return H.d(a,m)
m=a[m]
if(p>=s)return H.d(t,p)
t[p]=m
if(o>=u)return H.d(a,o)
o=a[o]
if(n>=s)return H.d(t,n)
t[n]=o
if(q>=u)return H.d(a,q)
o=a[q]
if(l>=s)return H.d(t,l)
t[l]=o
r=!0}}C.b.aD(this.y,t)
this.ag()}},
ag:function(){var u=this.Q
if(u!=null)u.E(null)},
aQ:function(){return!1},
bc:function(){return!1},
bL:function(){return!1},
dO:function(a,b){var u,t,s,r,q,p,o,n,m,l=this,k=l.a
if(!J.K(b,k))throw H.e(P.v("Shape was reduced to "+H.f(k)+" so can not build for "+H.f(b)+"."))
if(l.e==null){u=l.c*4
t=new Array(l.b)
t.fixed$length=Array
l.e=H.b(t,[Z.bL])
for(s=0,r=0;r<l.b;++r){q=k.cm(r)
p=q.gbk(q)
t=l.e
if(r>=t.length)return H.d(t,r)
t[r]=new Z.bL(q,p,s*4,u)
s+=p}}t=a.a
o=new Z.co(Z.mu(t,34962,l.f),l.e,k)
k=o.b=H.b([],[Z.aK])
n=l.r
if(n.length!==0){m=Z.eb(t,34963,n)
k.push(new Z.aK(0,l.r.length,m))}n=l.x
if(n.length!==0){m=Z.eb(t,34963,n)
k.push(new Z.aK(1,l.x.length,m))}n=l.y
if(n.length!==0){m=Z.eb(t,34963,n)
k.push(new Z.aK(4,l.y.length,m))}return o}}
F.ip.prototype={
gt:function(){var u=this.e
return u==null?this.e=D.E():u},
aQ:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.aQ()||!1
if(!t.a.aQ())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
bc:function(){var u,t=this,s=t.e
if(s!=null)++s.d
u=t.d.bc()||!1
if(!t.a.bc())u=!1
s=t.e
if(s!=null)s.aI(0)
return u},
bL:function(){var u=this.e
if(u!=null)++u.d
this.a.bL()
u=this.e
if(u!=null)u.aI(0)
return!0},
dO:function(a1,a2){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.a.c.length,c=a2.gdQ(a2),b=a2.gbk(a2),a=b*4,a0=new Array(d*b)
a0.fixed$length=Array
u=H.b(a0,[P.J])
a0=new Array(c)
a0.fixed$length=Array
t=H.b(a0,[Z.bL])
for(a0=u.length,s=t.length,r=0,q=0;q<c;++q){p=a2.cm(q)
o=p.gbk(p)
if(q>=s)return H.d(t,q)
t[q]=new Z.bL(p,o,r*4,a)
for(n=0;n<d;++n){m=e.a.c
if(n>=m.length)return H.d(m,n)
l=m[n].ee(p)
k=r+n*b
for(m=l.length,j=0;j<m;++j){i=l[j]
if(k<0||k>=a0)return H.d(u,k)
u[k]=i;++k}}r+=o}a0=a1.a
h=new Z.co(Z.mu(a0,34962,u),t,a2)
h.b=H.b([],[Z.aK])
e.b.b
if(e.c.b.length!==0){g=H.b([],[P.n])
for(q=0;s=e.c.b,q<s.length;++q){s=s[q].a
s.a.a.bb()
g.push(s.e)
s=e.c.b
if(q>=s.length)return H.d(s,q)
s=s[q].b
s.a.a.bb()
g.push(s.e)}f=Z.eb(a0,34963,g)
h.b.push(new Z.aK(1,g.length,f))}if(e.d.b.length!==0){g=H.b([],[P.n])
for(q=0;s=e.d.b,q<s.length;++q){s=s[q].a
s.a.a.bb()
g.push(s.e)
s=e.d.b
if(q>=s.length)return H.d(s,q)
s=s[q].b
s.a.a.bb()
g.push(s.e)
s=e.d.b
if(q>=s.length)return H.d(s,q)
s=s[q].c
s.a.a.bb()
g.push(s.e)}f=Z.eb(a0,34963,g)
h.b.push(new Z.aK(4,g.length,f))}return h},
i:function(a){var u=this,t=H.b([],[P.o])
if(u.a.c.length!==0){t.push("Vertices:")
t.push(u.a.P("   "))}u.b.b
if(u.c.b.length!==0){t.push("Lines:")
t.push(u.c.P("   "))}if(u.d.b.length!==0){t.push("Faces:")
t.push(u.d.P("   "))}return C.b.u(t,"\n")},
ag:function(){var u=this.e
if(u!=null)u.E(null)}}
F.lh.prototype={}
F.iq.prototype={
iH:function(a){var u,t,s,r,q,p,o=H.b([],[F.bR]),n=a[0]
for(u=this.a,t=2;t<4;++t){s=a[t-1]
r=a[t]
u.a.q(0,n)
u.a.q(0,s)
u.a.q(0,r)
q=new F.bR()
p=n.a
if(p==null)H.u(P.v("May not create a face with a first vertex which is not attached to a shape."))
if(p!=s.a||p!=r.a)H.u(P.v("May not create a face with vertices attached to different shapes."))
q.a=n
n.d.b.push(q)
q.b=s
s.d.c.push(q)
q.c=r
r.d.d.push(q)
q.a.a.d.b.push(q)
s=q.a.a.e
if(s!=null)s.E(null)
o.push(q)}return o},
gm:function(a){return this.b.length},
aQ:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].cq())s=!1
return s},
bc:function(){var u,t,s,r
for(u=this.b,t=u.length,s=!0,r=0;r<u.length;u.length===t||(0,H.q)(u),++r)if(!u[r].cp())s=!1
return s},
i:function(a){return this.Z()},
P:function(a){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].P(a))
return C.b.u(r,"\n")},
Z:function(){return this.P("")}}
F.ir.prototype={
gm:function(a){return this.b.length},
i:function(a){return this.Z()},
P:function(a){var u,t,s=H.b([],[P.o]),r=this.b.length
for(u=0;u<r;++u){t=this.b
if(u>=t.length)return H.d(t,u)
s.push(t[u].P(a+(""+u+". ")))}return C.b.u(s,"\n")},
Z:function(){return this.P("")}}
F.is.prototype={
gm:function(a){return 0},
i:function(a){return this.Z()},
P:function(a){var u,t,s=H.b([],[P.o])
for(u=this.b,t=0;!1;++t){if(t>=0)return H.d(u,t)
s.push(u[t].P(a))}return C.b.u(s,"\n")},
Z:function(){return this.P("")}}
F.c3.prototype={
ee:function(a){var u,t=this,s=J.H(a)
if(s.p(a,$.Z())){s=t.f
u=[P.J]
if(s==null)return H.b([0,0,0],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.a8())){s=t.r
u=[P.J]
if(s==null)return H.b([0,1,0],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.bk())){s=t.x
u=[P.J]
if(s==null)return H.b([0,0,1],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.a2())){s=t.y
u=[P.J]
if(s==null)return H.b([0,0],u)
else return H.b([s.a,s.b],u)}else if(s.p(a,$.bG())){s=t.z
u=[P.J]
if(s==null)return H.b([0,0,0],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.d3())){s=t.Q
u=[P.J]
if(s==null)return H.b([1,1,1],u)
else return H.b([s.a,s.b,s.c],u)}else if(s.p(a,$.d4())){s=t.Q
u=[P.J]
if(s==null)return H.b([1,1,1,1],u)
else return H.b([s.a,s.b,s.c,s.d],u)}else if(s.p(a,$.cj()))return H.b([t.ch],[P.J])
else if(s.p(a,$.bj())){s=t.cx
u=[P.J]
if(s==null)return H.b([-1,-1,-1,-1],u)
else return H.b([s.a,s.b,s.c,s.d],u)}else return H.b([],[P.J])},
cq:function(){var u,t=this,s={}
if(t.r!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cP()
t.d.I(0,new F.jA(s))
s=s.a
t.r=s.A(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.ag()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
cp:function(){var u,t=this,s={}
if(t.x!=null)return!0
u=t.a
if(u!=null){u=u.e
if(u!=null)++u.d}s.a=V.cP()
t.d.I(0,new F.jz(s))
s=s.a
t.x=s.A(0,Math.sqrt(s.D(s)))
s=t.a
if(s!=null){s.ag()
s=t.a.e
if(s!=null)s.aI(0)}return!0},
p:function(a,b){if(b==null)return!1
return this===b},
i:function(a){return this.Z()},
P:function(a){var u,t,s=this,r="-",q=H.b([],[P.o])
q.push(C.a.aW(J.aF(s.e),0))
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
q.push(V.A(s.ch,3,0))
u=s.cx
if(u!=null)q.push(u.i(0))
else q.push(r)
t=C.b.u(q,", ")
return a+"{"+t+"}"},
Z:function(){return this.P("")}}
F.jA.prototype={
$1:function(a){var u,t=a==null?null:a.d
if(t!=null){u=this.a
u.a=u.a.l(0,t)}}}
F.jz.prototype={
$1:function(a){var u,t=a==null?null:a.e
if(t!=null){u=this.a
u.a=u.a.l(0,t)}}}
F.ju.prototype={
bb:function(){},
q:function(a,b){var u,t=b.a
if(t!=null){if(t===this.a)return!1
throw H.e(P.v("May not add a vertex already attached to another shape to this shape."))}t=this.c
b.e=t.length
u=this.a
b.a=u
t.push(b)
u.ag()
return!0},
bK:function(a,b,c,d,e,f){var u=F.c4(a,null,b,c,null,d,e,f,0)
this.q(0,u)
return u},
gm:function(a){return this.c.length},
aQ:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].cq()
return!0},
bc:function(){var u,t,s
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)u[s].cp()
return!0},
bL:function(){var u,t,s,r,q,p,o,n
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
if(r.z==null){q=r.r
p=q.a
if(typeof p!=="number")return p.j()
o=q.b
if(typeof o!=="number")return o.j()
n=q.c
if(typeof n!=="number")return n.j()
n=q.A(0,Math.sqrt(p*p+o*o+n*n))
if(!J.K(r.z,n)){r.z=n
q=r.a
if(q!=null){q=q.e
if(q!=null)q.E(null)}}}}return!0},
i:function(a){return this.Z()},
P:function(a){var u,t,s,r
this.bb()
u=H.b([],[P.o])
for(t=this.c,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r)u.push(t[r].P(a))
return C.b.u(u,"\n")},
Z:function(){return this.P("")}}
F.jv.prototype={
gm:function(a){return this.b.length+this.c.length+this.d.length},
I:function(a,b){var u=this
C.b.I(u.b,b)
C.b.I(u.c,new F.jw(u,b))
C.b.I(u.d,new F.jx(u,b))},
i:function(a){return this.Z()},
Z:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].P(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].P(""))
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].P(""))
return C.b.u(r,"\n")}}
F.jw.prototype={
$1:function(a){if(!J.K(a.a,this.a))this.b.$1(a)}}
F.jx.prototype={
$1:function(a){var u=this.a
if(!J.K(a.a,u)&&!J.K(a.b,u))this.b.$1(a)}}
F.jy.prototype={
gm:function(a){return this.b.length+this.c.length},
i:function(a){return this.Z()},
Z:function(){var u,t,s,r=H.b([],[P.o])
for(u=this.b,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].P(""))
for(u=this.c,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s)r.push(u[s].P(""))
return C.b.u(r,"\n")}}
O.cy.prototype={
gt:function(){var u=this.fr
return u==null?this.fr=D.E():u},
a3:function(a){var u=this.fr
if(u!=null)u.E(a)},
c1:function(){return this.a3(null)},
du:function(a){this.a=null
this.a3(a)},
ig:function(){return this.du(null)},
h4:function(a,b){var u=new D.bq()
u.b=!0
this.a3(u)},
h6:function(a,b){var u=new D.br()
u.b=!0
this.a3(u)},
df:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=P.n
f=[f,f]
u=new H.F(f)
for(t=g.dx.e,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gaE()
o=u.h(0,q.gaE())
u.k(0,p,o==null?1:o)}n=H.b([],[A.d8])
u.I(0,new O.hD(g,n))
C.b.bl(n,new O.hE())
m=new H.F(f)
for(t=g.dx.f,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){p=m.h(0,0)
m.k(0,0,p==null?1:p)}l=H.b([],[A.de])
m.I(0,new O.hF(g,l))
C.b.bl(l,new O.hG())
k=new H.F(f)
for(t=g.dx.r,s=t.length,r=0;r<t.length;t.length===s||(0,H.q)(t),++r){q=t[r]
p=q.gaE()
o=k.h(0,q.gaE())
k.k(0,p,o==null?1:o)}j=H.b([],[A.dH])
k.I(0,new O.hH(g,j))
C.b.bl(j,new O.hI())
i=new H.F(f)
for(f=g.dx.x,t=f.length,r=0;r<f.length;f.length===t||(0,H.q)(f),++r){q=f[r]
s=q.gaE()
p=i.h(0,q.gaE())
i.k(0,s,p==null?1:p)}h=H.b([],[A.dR])
i.I(0,new O.hJ(g,h))
C.b.bl(h,new O.hK())
f=C.c.a5(g.e.a.length+3,4)
g.dy.e
return A.nX(!1,!1,!1,!1,f*4,g.f.c,g.r.c,g.x.c,g.y.c,g.z.c,g.Q.c,g.cx.c,g.cy.c,g.db.c,n,l,j,h)},
an:function(a,b){if(b!=null)if(!C.b.T(a,b)){b.sa9(0,a.length)
a.push(b)}},
ai:function(a,b){var u,t,s,r,q,p,o
for(u=this.dx.a,u=new J.aa(u,u.length);u.w();){t=u.d
t.toString
s=$.jt
if(s==null)s=$.jt=new V.y(0,0,1)
t.a=s
r=$.js
t.d=r==null?$.js=new V.y(0,1,0):r
r=$.jr
t.e=r==null?$.jr=new V.y(-1,0,0):r
r=t.b
if(r!=null){q=r.a
if(q!=null){s=q.at(s)
r=s.a
if(typeof r!=="number")return r.j()
p=s.b
if(typeof p!=="number")return p.j()
o=s.c
if(typeof o!=="number")return o.j()
t.a=s.A(0,Math.sqrt(r*r+p*p+o*o))
o=q.at(t.d)
p=o.a
if(typeof p!=="number")return p.j()
r=o.b
if(typeof r!=="number")return r.j()
s=o.c
if(typeof s!=="number")return s.j()
t.d=o.A(0,Math.sqrt(p*p+r*r+s*s))
s=q.at(t.e)
r=s.a
if(typeof r!=="number")return r.j()
p=s.b
if(typeof p!=="number")return p.j()
o=s.c
if(typeof o!=="number")return o.j()
t.e=s.A(0,Math.sqrt(r*r+p*p+o*o))}}}},
jE:function(b4,b5){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=this,b3=b2.a
if(b3==null){b3=b2.df()
u=b4.fr.h(0,b3.br)
if(u==null){u=A.nW(b3,b4.a)
t=u.b
if(t.length===0)H.u(P.v("May not cache a shader with no name."))
if(b4.fr.cs(0,t))H.u(P.v('Shader cache already contains a shader by the name "'+t+'".'))
b4.fr.k(0,t,u)}b3=b2.a=u
b5.e=null}s=b3.z
r=s.bN
b3=b5.e
if(!(b3 instanceof Z.co))b3=b5.e=null
if(b3==null||!J.K(b3.d,r)){b3=s.k4
if(b3)b5.d.aQ()
q=s.r1
if(q)b5.d.bc()
p=s.rx
if(p)b5.d.bL()
o=b5.d.dO(new Z.jC(b4.a),r)
o.bf($.Z()).e=b2.a.Q.c
if(b3)o.bf($.a8()).e=b2.a.cx.c
if(q)o.bf($.bk()).e=b2.a.ch.c
if(s.r2)o.bf($.a2()).e=b2.a.cy.c
if(p)o.bf($.bG()).e=b2.a.db.c
if(s.ry)o.bf($.bj()).e=b2.a.dx.c
b5.e=o}n=H.b([],[T.dX])
b3=b2.a
q=b4.a
q.useProgram(b3.r)
b3.x.j4()
if(s.fr){b3=b2.a
p=b4.dx
p=p.ga7(p)
b3=b3.dy
b3.toString
b3.au(p.ak(0,!0))}if(s.fx){b3=b2.a
p=b4.cx
if(p==null){p=b4.db
p=p.ga7(p)
m=b4.dx
m=b4.cx=p.j(0,m.ga7(m))
p=m}b3=b3.fr
b3.toString
b3.au(p.ak(0,!0))}b3=b2.a
p=b4.ch
if(p==null){p=b4.gjA()
m=b4.dx
m=b4.ch=p.j(0,m.ga7(m))
p=m}b3=b3.fy
b3.toString
b3.au(p.ak(0,!0))
if(s.go){b3=b2.a
p=b4.db
p=p.ga7(p)
b3=b3.fx
b3.toString
b3.au(p.ak(0,!0))}if(s.x1){b3=b2.a
p=b2.b
b3=b3.k1
b3.toString
b3.au(C.l.ak(p,!0))}if(s.x2){b3=b2.a
p=b2.c
b3=b3.k2
b3.toString
b3.au(C.l.ak(p,!0))}if(s.y1){b3=b2.a
p=b2.d
b3=b3.k3
b3.toString
b3.au(C.l.ak(p,!0))}if(s.be>0){l=b2.e.a.length
b3=b2.a.k4
b3.a.uniform1i(b3.d,l)
for(k=0;k<l;++k){b3=b2.a
p=b2.e.a
if(k>=p.length)return H.d(p,k)
p=p[k]
b3=b3.r1
if(k>=b3.length)return H.d(b3,k)
b3=b3[k]
j=new Float32Array(H.c9(p.ak(0,!0)))
b3.a.uniformMatrix4fv(b3.d,!1,j)}}b3=s.a
if(b3.a){p=b2.a
m=b2.f.f
p=p.r2
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.f.d)
b3=b2.a
p=b2.f.d
b3.aw(b3.rx,p)}if(s.k1){b3=s.b
if(b3.a){p=b2.a
m=b2.r.f
p=p.x1
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.r.d)
b3=b2.a
p=b2.r.d
b3.aw(b3.x2,p)}b3=s.c
if(b3.a){p=b2.a
m=b2.x.f
p=p.y2
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.x.d)
b3=b2.a
p=b2.x.d
b3.aw(b3.be,p)}b3=s.d
if(b3.a){p=b2.a
m=b2.y.f
p=p.bN
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.y.d)
b3=b2.a
p=b2.y.d
b3.aw(b3.dU,p)}b3=s.e
p=b3.a
if(p||b3.b||!1){m=b2.a
i=b2.z.ch
m=m.dX
m.a.uniform1f(m.d,i)}if(p){p=b2.a
m=b2.z.f
p=p.dV
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.z.d)
b3=b2.a
p=b2.z.d
b3.aw(b3.dW,p)}b3=s.z
if(b3.length>0){p=P.n
h=new H.F([p,p])
for(p=b2.dx.e,m=p.length,g=0;g<p.length;p.length===m||(0,H.q)(p),++g){f=p[g]
e=f.gaE()
d=h.h(0,e)
if(d==null)d=0
h.k(0,e,d+1)
c=J.ck(b2.a.cv.h(0,e),d)
i=f.gk6()
b=$.aS
i=i.U(b==null?$.aS=new V.t(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gkb()
b=$.aS
i=i.U(b==null?$.aS=new V.t(0,0,0):b)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gbd(f)
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
if(f.gdT()){i=f.gdI()
b=c.e
b.a.uniform1f(b.d,i)
i=f.gdJ()
b=c.f
b.a.uniform1f(b.d,i)
i=f.gdK()
b=c.r
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){m=b3[g].a
l=h.h(0,m)
if(l==null)l=0
m=b2.a.cu.h(0,m)
m.a.uniform1i(m.d,l)}}b3=s.Q
if(b3.length>0){p=b4.db
a=p.ga7(p)
p=P.n
a0=new H.F([p,p])
for(p=b2.dx.f,m=p.length,g=0;g<p.length;p.length===m||(0,H.q)(p),++g){f=p[g]
d=a0.h(0,0)
if(d==null)d=0
a0.k(0,0,d+1)
c=J.ck(b2.a.cz.h(0,0),d)
i=a.at(f.a)
b=i.a
if(typeof b!=="number")return b.j()
a1=i.b
if(typeof a1!=="number")return a1.j()
a2=i.c
if(typeof a2!=="number")return a2.j()
a2=i.A(0,Math.sqrt(b*b+a1*a1+a2*a2))
a1=c.e
b=a2.a
i=a2.b
a2=a2.c
a1.a.uniform3f(a1.d,b,i,a2)
a2=f.c
i=c.f
i.a.uniform3f(i.d,a2.a,a2.b,a2.c)}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){m=b3[g].a
l=a0.h(0,m)
if(l==null)l=0
m=b2.a.cw.h(0,m)
m.a.uniform1i(m.d,l)}}b3=s.ch
if(b3.length>0){p=b4.db
a=p.ga7(p)
p=P.n
a3=new H.F([p,p])
for(p=b2.dx.r,m=p.length,g=0;g<p.length;p.length===m||(0,H.q)(p),++g){f=p[g]
e=f.gaE()
d=a3.h(0,e)
if(d==null)d=0
a3.k(0,e,d+1)
c=J.ck(b2.a.cB.h(0,e),d)
a4=a.j(0,f.ga7(f))
i=f.ga7(f)
b=$.aS
i=i.U(b==null?$.aS=new V.t(0,0,0):b)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=$.aS
i=a4.U(i==null?$.aS=new V.t(0,0,0):i)
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gbd(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gaX()
i=a4.bs(0)
b=i.a
a1=i.b
a2=i.c
a5=i.e
a6=i.f
a7=i.r
a8=i.y
a9=i.z
i=i.Q
b0=c.d
b0.toString
j=new Float32Array(H.c9(new V.au(b,a1,a2,a5,a6,a7,a8,a9,i).ak(0,!0)))
b0.a.uniformMatrix3fv(b0.d,!1,j)
f.gaX()
i=f.gaX()
if(!C.b.T(n,i)){i.sa9(0,n.length)
n.push(i)}i=f.gaX()
b=i.gaa(i)
if(b){b=c.f
b.toString
a1=i.gaa(i)
if(!a1)b.a.uniform1i(b.d,0)
else{i=i.ga9(i)
b.a.uniform1i(b.d,i)}}f.gbj()
i=f.geO()
b=c.x
b.toString
a1=i.gj1(i)
a2=i.gj2(i)
a5=i.gj3()
i=i.gj0()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gbj()
if(!C.b.T(n,i)){i.sa9(0,n.length)
n.push(i)}i=f.gbj()
b=i.gaa(i)
if(b){b=c.r
b.toString
a1=i.gaa(i)
if(!a1)b.a.uniform1i(b.d,0)
else{i=i.ga9(i)
b.a.uniform1i(b.d,i)}}if(f.gdT()){i=f.gdI()
b=c.y
b.a.uniform1f(b.d,i)
i=f.gdJ()
b=c.z
b.a.uniform1f(b.d,i)
i=f.gdK()
b=c.Q
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){m=b3[g].a
l=a3.h(0,m)
if(l==null)l=0
m=b2.a.cA.h(0,m)
m.a.uniform1i(m.d,l)}}b3=s.cx
if(b3.length>0){p=b4.db
a=p.ga7(p)
p=P.n
b1=new H.F([p,p])
for(p=b2.dx.x,m=p.length,g=0;g<p.length;p.length===m||(0,H.q)(p),++g){f=p[g]
e=f.gaE()
d=b1.h(0,e)
if(d==null)d=0
b1.k(0,e,d+1)
c=J.ck(b2.a.cD.h(0,e),d)
i=f.gjz(f)
b=c.b
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gk9(f).km()
b=c.c
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=a.U(f.gjz(f))
b=c.d
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gbd(f)
b=c.e
b.a.uniform3f(b.d,i.a,i.b,i.c)
f.gaX()
i=f.gkp()
b=c.f
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gah(f)
b=c.r
b.a.uniform3f(b.d,i.a,i.b,i.c)
i=f.gkn()
b=c.x
b.a.uniform1f(b.d,i)
i=f.gko()
b=c.y
b.a.uniform1f(b.d,i)
f.gaX()
i=f.gaX()
if(!C.b.T(n,i)){i.sa9(0,n.length)
n.push(i)}i=f.gaX()
b=i.gaa(i)
if(b){b=c.dx
b.toString
a1=i.gaa(i)
if(!a1)b.a.uniform1i(b.d,0)
else{i=i.ga9(i)
b.a.uniform1i(b.d,i)}}f.gbj()
i=f.geO()
b=c.z
b.toString
a1=i.gj1(i)
a2=i.gj2(i)
a5=i.gj3()
i=i.gj0()
b.a.uniform4f(b.d,a1,a2,a5,i)
i=f.gbj()
if(!C.b.T(n,i)){i.sa9(0,n.length)
n.push(i)}i=f.gbj()
b=i.gaa(i)
if(b){b=c.dy
b.toString
a1=i.gaa(i)
if(!a1)b.a.uniform1i(b.d,0)
else{i=i.ga9(i)
b.a.uniform1i(b.d,i)}}if(f.gka()){i=f.gk8()
b=c.Q
b.a.uniform1f(b.d,i)
i=f.gk7()
b=c.ch
b.a.uniform1f(b.d,i)}if(f.gdT()){i=f.gdI()
b=c.cx
b.a.uniform1f(b.d,i)
i=f.gdJ()
b=c.cy
b.a.uniform1f(b.d,i)
i=f.gdK()
b=c.db
b.a.uniform1f(b.d,i)}}for(p=b3.length,g=0;g<b3.length;b3.length===p||(0,H.q)(b3),++g){m=b3[g].a
l=b1.h(0,m)
if(l==null)l=0
m=b2.a.cC.h(0,m)
m.a.uniform1i(m.d,l)}}}if(s.f.b){b2.an(n,b2.Q.d)
b3=b2.a
p=b2.Q.d
b3.aw(b3.dY,p)}if(s.dy){b3=b2.a
p=b4.Q
if(p==null){p=b4.db
p=b4.Q=p.ga7(p).bs(0)}b3=b3.id
b3.toString
b3.au(p.ak(0,!0))}if(s.db){b2.an(n,b2.ch)
b3=b2.a
p=b2.ch
b3.ii(b3.dZ,p)
b3=s.r
if(b3.a){p=b2.a
m=b2.cx.f
p=p.e_
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.cx.d)
b3=b2.a
p=b2.cx.d
b3.aw(b3.e0,p)}b3=s.x
p=b3.a
if(p||b3.b||!1){m=b2.a
i=b2.cy.ch
m=m.e1
m.a.uniform1f(m.d,i)}if(p){p=b2.a
m=b2.cy.f
p=p.e2
p.a.uniform3f(p.d,m.a,m.b,m.c)}if(b3.b){b2.an(n,b2.cy.d)
b3=b2.a
p=b2.cy.d
b3.aw(b3.e3,p)}}b3=s.y
p=b3.a
m=!p
if(!m||b3.b||!1){if(p){p=b2.a
i=b2.db.f
p=p.e4
p.a.uniform1f(p.d,i)}if(b3.b){b2.an(n,b2.db.d)
p=b2.a
i=b2.db.d
p.aw(p.e5,i)}q.enable(3042)
q.blendFunc(770,771)}for(k=0;k<n.length;++k)n[k].aP(b4)
p=b5.e
p.aP(b4)
p.bh(b4)
p.by(b4)
if(!m||b3.b||!1)q.disable(3042)
for(k=0;k<n.length;++k)n[k].by(b4)
b3=b2.a
b3.toString
q.useProgram(null)
b3.x.iZ()},
i:function(a){var u=this.a
if(u!=null)return u.b
else return this.df().br}}
O.hD.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.d8(a,C.c.a5(b+3,4)*4))}}
O.hE.prototype={
$2:function(a,b){return J.d5(a.a,b.a)}}
O.hF.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.de(a,C.c.a5(b+3,4)*4))}}
O.hG.prototype={
$2:function(a,b){return J.d5(a.a,b.a)}}
O.hH.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.dH(a,C.c.a5(b+3,4)*4))}}
O.hI.prototype={
$2:function(a,b){return J.d5(a.a,b.a)}}
O.hJ.prototype={
$2:function(a,b){if(typeof b!=="number")return b.l()
return this.b.push(new A.dR(a,C.c.a5(b+3,4)*4))}}
O.hK.prototype={
$2:function(a,b){return J.d5(a.a,b.a)}}
O.hx.prototype={
aM:function(){var u,t=this
t.cX()
u=t.f
if(!(Math.abs(u-1)<$.x().a)){t.f=1
u=new D.B(t.b,u,1)
u.b=!0
t.a.a3(u)}}}
O.cz.prototype={
a3:function(a){return this.a.a3(a)},
c1:function(){return this.a3(null)},
aM:function(){},
bI:function(a){var u,t,s=this
if(!s.c.p(0,a)){u=s.c
if(u.a||u.b||!1)t=!(a.a||a.b||!1)
else t=!0
s.c=a
if(t)s.aM()
u=s.a
u.a=null
u.a3(null)}},
sbv:function(a){var u,t,s=this,r=a==null
if(r){u=s.c
s.bI(new A.a4(u.a,!1,!1))}else{u=s.c
if(!u.b)s.bI(new A.a4(u.a,!0,!1))}u=s.d
if(u!=a){if(u!=null)u.gt().X(0,s.gbB())
t=s.d
s.d=a
if(!r)a.gt().q(0,s.gbB())
r=new D.B(s.b+".texture2D",t,s.d)
r.b=!0
s.a.a3(r)}}}
O.hy.prototype={}
O.aM.prototype={
dw:function(a){var u,t,s=this
if(!s.f.p(0,a)){u=s.f
s.f=a
t=new D.B(s.b+".color",u,a)
t.b=!0
s.a.a3(t)}},
aM:function(){this.cX()
this.dw(new V.a3(1,1,1))},
sbd:function(a,b){this.bI(new A.a4(!0,this.c.b,!1))
this.dw(b)}}
O.hA.prototype={}
O.hB.prototype={
aM:function(){var u,t=this
t.cY()
u=t.ch
if(!(Math.abs(u-1)<$.x().a)){t.ch=1
u=new D.B(t.b+".refraction",u,1)
u.b=!0
t.a.a3(u)}}}
O.hC.prototype={
dz:function(a){var u=this,t=u.ch
if(!(Math.abs(t-a)<$.x().a)){u.ch=a
t=new D.B(u.b+".shininess",t,a)
t.b=!0
u.a.a3(t)}},
aM:function(){this.cY()
this.dz(100)}}
O.dW.prototype={}
T.dX.prototype={}
T.dY.prototype={}
T.iT.prototype={
ga9:function(a){return this.a},
sa9:function(a,b){this.a=b},
gaa:function(a){var u=this.d
u=u==null?null:u.gaa(u)
if(u==null){u=this.c
u=u==null?null:u.gaa(u)}return u===!0},
gt:function(){var u=this.f
return u==null?this.f=D.E():u},
aP:function(a){var u
if(this.d==null){u=this.d=this.c
if(u!=null)u.aP(a)}},
by:function(a){var u=this.d
if(u!=null){u.by(a)
this.d=null}}}
T.iU.prototype={
ga9:function(a){return this.a},
sa9:function(a,b){this.a=b},
gaa:function(a){return this.d},
gt:function(){var u=this.y
return u==null?this.y=D.E():u},
aP:function(a){var u,t=this
if(!t.c&&t.d){t.c=!0
u=a.a
u.activeTexture(33984+t.a)
u.bindTexture(3553,t.b)}},
by:function(a){var u
if(this.c){this.c=!1
u=a.a
u.activeTexture(33984+this.a)
u.bindTexture(3553,null)}}}
T.iV.prototype={
je:function(a,b,c,d){var u,t,s=3553,r=this.a,q=r.createTexture()
r.bindTexture(s,q)
r.texParameteri(s,10242,33071)
r.texParameteri(s,10243,33071)
r.texParameteri(s,10241,9987)
r.texParameteri(s,10240,9729)
r.bindTexture(s,null);++this.d
u=document.createElement("img")
u.src=a
t=new T.iU()
t.a=0
t.b=q
t.d=t.c=!1
W.X(u,"load",new T.iW(this,t,u,!1,q,!1,!0),!1)
return t},
ih:function(a,b,c){var u,t,s,r
b=V.lC(b)
u=V.lC(a.width)
t=V.lC(a.height)
u=Math.min(u,b)
t=Math.min(t,b)
if(a.width===u&&a.height===t)return a
else{s=W.l5()
s.width=u
s.height=t
r=C.j.eK(s,"2d")
r.imageSmoothingEnabled=!1
r.drawImage(a,0,0,s.width,s.height)
return P.pu(r.getImageData(0,0,s.width,s.height))}}}
T.iW.prototype={
$1:function(a){var u=this,t=3553,s=u.a,r=s.ih(u.c,s.b,u.d),q=s.a
q.bindTexture(t,u.e)
q.pixelStorei(37440,u.f?1:0)
C.a2.jO(q,t,0,6408,6408,5121,r)
if(u.r)q.generateMipmap(t)
q.bindTexture(t,null)
q=u.b
if(!q.d){q.d=!0
q=q.y
if(q!=null)q.dS()}++s.e}}
X.l4.prototype={}
X.ha.prototype={
gt:function(){var u=this.x
return u==null?this.x=D.E():u}}
X.dE.prototype={
gt:function(){var u=this.f
return u==null?this.f=D.E():u},
b2:function(a){var u=this.f
if(u!=null)u.E(a)},
fe:function(){return this.b2(null)},
sef:function(a){var u,t,s=this
if(!J.K(s.b,a)){u=s.b
if(u!=null)u.gt().X(0,s.gd2())
t=s.b
s.b=a
if(a!=null)a.gt().q(0,s.gd2())
u=new D.B("mover",t,s.b)
u.b=!0
s.b2(u)}}}
X.iM.prototype={}
V.iy.prototype={
f1:function(a,b){var u,t,s,r,q=document,p=q.body,o=q.createElement("div")
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
W.X(q,"scroll",new V.iA(o),!1)},
cl:function(a,b){var u,t,s,r,q
a=C.c.iO(a,0,4)
u=P.eY(C.w,b,C.f,!1)
t=document.createElement("div")
t.className="textHeader"
t.id=u
s=t.style
r=""+(28-a*3)+"px"
s.fontSize=r
q=W.nw()
q.href="#"+H.f(u)
q.textContent=b
t.appendChild(q)
this.a.appendChild(t)},
a1:function(a){var u,t,s,r,q,p,o,n
this.ik()
u=document
t=u.createElement("div")
t.className="textPar"
for(s=this.b,r=C.b.jd(a),s.toString,r=new H.R(r),r=new P.cX(s.eE(new H.cw(r,r.gm(r))).a());r.w();){s=r.gK(r)
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
if(H.n0(s,"|",0)){p=s.split("|")
o=u.createElement("a")
o.className="linkPar"
if(1>=p.length)return H.d(p,1)
o.href=p[1]
o.textContent=p[0]
t.appendChild(o)}else{n=P.eY(C.w,s,C.f,!1)
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
iF:function(a){var u,t,s,r,q,p="auto",o=document,n=o.createElement("table")
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
ik:function(){var u,t,s,r,q="Start",p="Bold",o="Italic",n="ItalicEnd",m="Code",l="LinkHead",k="LinkTail",j="LinkEnd",i="Other"
if(this.b!=null)return
u=new L.j_()
t=P.o
u.a=new H.F([t,L.dT])
u.b=new H.F([t,L.e1])
u.c=P.lW(t)
u.d=u.S(0,q)
t=u.S(0,q).u(0,p)
s=K.a6(new H.R("*"))
t.a.push(s)
t.c=!0
t=u.S(0,p).u(0,p)
s=new K.b7()
r=[K.dw]
s.a=H.b([],r)
t.a.push(s)
t=K.a6(new H.R("*"))
s.a.push(t)
t=u.S(0,p).u(0,"BoldEnd")
s=K.a6(new H.R("*"))
t.a.push(s)
t.c=!0
t=u.S(0,q).u(0,o)
s=K.a6(new H.R("_"))
t.a.push(s)
t.c=!0
t=u.S(0,o).u(0,o)
s=new K.b7()
s.a=H.b([],r)
t.a.push(s)
t=K.a6(new H.R("_"))
s.a.push(t)
t=u.S(0,o).u(0,n)
s=K.a6(new H.R("_"))
t.a.push(s)
t.c=!0
t=u.S(0,q).u(0,m)
s=K.a6(new H.R("`"))
t.a.push(s)
t.c=!0
t=u.S(0,m).u(0,m)
s=new K.b7()
s.a=H.b([],r)
t.a.push(s)
t=K.a6(new H.R("`"))
s.a.push(t)
t=u.S(0,m).u(0,"CodeEnd")
s=K.a6(new H.R("`"))
t.a.push(s)
t.c=!0
t=u.S(0,q).u(0,l)
s=K.a6(new H.R("["))
t.a.push(s)
t.c=!0
t=u.S(0,l).u(0,k)
s=K.a6(new H.R("|"))
t.a.push(s)
s=u.S(0,l).u(0,j)
t=K.a6(new H.R("]"))
s.a.push(t)
s.c=!0
s=u.S(0,l).u(0,l)
t=new K.b7()
t.a=H.b([],r)
s.a.push(t)
s=K.a6(new H.R("|]"))
t.a.push(s)
s=u.S(0,k).u(0,j)
t=K.a6(new H.R("]"))
s.a.push(t)
s.c=!0
s=u.S(0,k).u(0,k)
t=new K.b7()
t.a=H.b([],r)
s.a.push(t)
s=K.a6(new H.R("|]"))
t.a.push(s)
u.S(0,q).u(0,i).a.push(new K.fl())
s=u.S(0,i).u(0,i)
t=new K.b7()
t.a=H.b([],r)
s.a.push(t)
s=K.a6(new H.R("*_`["))
t.a.push(s)
s=u.S(0,"BoldEnd")
s.d=s.a.bx(p)
s=u.S(0,n)
s.d=s.a.bx(o)
s=u.S(0,"CodeEnd")
s.d=s.a.bx(m)
s=u.S(0,j)
s.d=s.a.bx("Link")
s=u.S(0,i)
s.d=s.a.bx(i)
this.b=u}}
V.iA.prototype={
$1:function(a){P.lj(C.k,new V.iz(this.a))}}
V.iz.prototype={
$0:function(){var u=C.d.ay(document.documentElement.scrollTop),t=this.a.style,s=H.f(-0.01*u)+"px"
t.top=s}}
B.ai.prototype={
gdG:function(){var u=this
return new B.ai(u.a,u.b+1,u.c,u.d,u.e,u.f)},
gdL:function(){var u=this
return new B.ai(u.a,u.b-1,u.c,u.d,u.e,u.f)},
gah:function(a){var u=this,t=u.a+1,s=u.d,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gah(r)
t=0}return new B.ai(t,u.b,u.c,s,u.e,r)},
gaf:function(a){var u=this,t=u.a-1,s=u.d,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaf(r)
t=15}return new B.ai(t,u.b,u.c,s,u.e,r)},
gaF:function(){var u=this,t=u.c+1,s=u.e,r=u.f
if(t>=16){s+=16
r=r==null?null:r.gaF()
t=0}return new B.ai(u.a,u.b,t,u.d,s,r)},
gaO:function(a){var u=this,t=u.c-1,s=u.e,r=u.f
if(t<0){s-=16
r=r==null?null:r.gaO(r)
t=15}return new B.ai(u.a,u.b,t,u.d,s,r)},
eh:function(a){var u=this,t=J.H(a)
if(t.p(a,$.aC()))return u.gaf(u)
else if(t.p(a,$.aD()))return u.gah(u)
else if(t.p(a,$.bg()))return u.gdL()
else if(t.p(a,$.aE()))return u.gdG()
else if(t.p(a,$.bh()))return u.gaO(u)
else if(t.p(a,$.bi()))return u.gaF()
else return},
gco:function(){var u=this
return V.id(u.a+u.d,u.b,u.c+u.e,1,1,1)},
i:function(a){var u=this
return H.f(u.f)+".block("+u.a+", "+u.b+", "+u.c+", ("+u.d+", "+u.e+"), "+B.nz(u.gN(u))+")"},
gN:function(a){var u=this,t=u.f
t=t==null?null:t.aj(u.a,u.b,u.c)
if(t==null)t=u.b<0?100:0
return t},
sN:function(a,b){var u=this,t=u.f
if(t!=null)t.Y(u.a,u.b,u.c,b)}}
B.fE.prototype={
bO:function(a){var u,t,s
for(u=0;u<16;++u)for(t=0;t<16;++t)for(s=0;s<this.b;++s)a.Y(u,s,t,this.fO(u,s,t))
a.cG()},
fO:function(a,b,c){var u=a===0
if(u||c===0)return u&&c===0?112:110
if(a===1&&c===1)return 110
return C.c.aZ(a+b+c,2)===0?113:111}}
B.da.prototype={
eW:function(a){var u,t,s,r,q,p,o,n,m,l=this,k=null
l.d=new Uint8Array(12288)
l.e=H.b([],[E.ak])
for(u=l.c.e,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
q=E.bP(k,k,k,k)
p=r.y
o=[H.aA(p,0)]
if(p.bm(H.b([q],o))){n=p.a
m=n.length
n.push(q)
o=H.b([q],o)
p=p.c
if(p!=null)p.$2(m,o)}l.e.push(q)}l.b=l.a=0
l.f=!1
l.x=l.r=!0},
i:function(a){return"chunk("+this.a+", "+this.b+")"},
cG:function(){var u,t=this
t.x=!1
t.f=!0
t.saK(!1)
u=t.gaf(t)
if(u!=null)u.f=!0
u=t.gah(t)
if(u!=null)u.f=!0
u=t.gaF()
if(u!=null)u.f=!0
u=t.gaO(t)
if(u!=null)u.f=!0},
aj:function(a,b,c){var u,t
if(b<0)return 100
if(b>=48)return 0
if(a<0)return 0
if(a>=16)return 0
if(c<0)return 0
if(c>=16)return 0
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.d(u,t)
return u[t]},
bF:function(a,b,c,d){var u=a==null?null:a.bX(b,c,d)
return u==null?0:u},
bX:function(a,b,c){var u,t,s=this
if(b<0)return 100
if(b>=48)return 0
if(a<0)return s.bF(s.gaf(s),a+16,b,c)
if(a>=16)return s.bF(s.gah(s),a-16,b,c)
if(c<0)return s.bF(s.gaO(s),a,b,c+16)
if(c>=16)return s.bF(s.gaF(),a,b,c-16)
u=s.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.d(u,t)
return u[t]},
Y:function(a,b,c,d){var u,t
if(b<0)return!1
if(b>=48)return!1
if(a<0)return!1
if(a>=16)return!1
if(c<0)return!1
if(c>=16)return!1
u=this.d
t=(a*48+b)*16+c
if(t<0||t>=12288)return H.d(u,t)
u[t]=d
return!0},
gaf:function(a){return this.c.aS(this.a-16,this.b)},
gaF:function(){return this.c.aS(this.a,this.b+16)},
gah:function(a){return this.c.aS(this.a+16,this.b)},
gaO:function(a){return this.c.aS(this.a,this.b-16)},
cR:function(a,b,c){var u,t
for(u=47;u>=0;--u){t=this.aj(a,u,b)
if(t>=100&&t<=117)return u}return c},
jT:function(a,b){return this.cR(a,b,48)},
jV:function(){var u,t=this
if(t.x||!t.r)return
t.f=t.r=!1
u=B.li(t.c.a,null)
u.iN(t)
u.cF(0,t.e)},
saK:function(a){var u,t,s
for(u=this.e,t=u.length,s=0;s<t;++s)u[s].b=a},
jW:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=this
if(i.x||i.r){i.saK(!1)
return}u=V.lg(i.a,i.b,16,16)
t=u.eg(a)
s=t.a
r=a.a
if(typeof s!=="number")return s.n()
if(typeof r!=="number")return H.c(r)
q=s-r
s=t.b
p=a.b
if(typeof s!=="number")return s.n()
if(typeof p!=="number")return H.c(p)
o=s-p
if(q*q+o*o<100){i.saK(!0)
return}n=u.eg(b)
s=b.a
if(typeof s!=="number")return s.n()
m=b.b
if(typeof m!=="number")return m.n()
m=new V.P(s-r,m-p)
l=m.A(0,Math.sqrt(m.D(m)))
m=n.a
if(typeof m!=="number")return m.n()
s=n.b
if(typeof s!=="number")return s.n()
k=new V.P(m-r,s-p)
j=k.D(k)
if(j>6400){i.saK(!1)
return}i.saK(l.D(k.A(0,j))>0)}}
B.fG.prototype={
iP:function(a,b,c){var u,t,s=this
s.b=b
s.c=a
s.d=c
s.e=$.bf()
s.fB()
for(;s.io(););u=s.b
t=s.d
s.b=u.l(0,new V.t(t.a,t.b,t.c))
return!0},
fB:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=this,a1=a0.c,a2=a0.b,a3=a1.bV(0,new V.y(a2.a,a2.b,a2.c))
a2=a3.bV(0,a0.d)
a1=a3.a
u=a2.a
t=Math.min(H.cd(a1),H.cd(u))
if(typeof a1!=="number")return a1.l()
if(typeof u!=="number")return u.l()
s=Math.max(a1+a3.d,u+a2.d)
u=a3.b
a1=a2.b
r=Math.min(H.cd(u),H.cd(a1))
if(typeof u!=="number")return u.l()
if(typeof a1!=="number")return a1.l()
q=Math.max(u+a3.e,a1+a2.e)
a1=a3.c
u=a2.c
p=Math.min(H.cd(a1),H.cd(u))
if(typeof a1!=="number")return a1.l()
if(typeof u!=="number")return u.l()
o=Math.max(a1+a3.f,u+a2.f)
a2=a0.a
n=a2.aj(t,r,p)
m=a2.aj(t+(s-t),r+(q-r),p+(o-p))
l=m.a+m.d
k=m.c+m.e
C.b.sm(a0.f,0)
C.b.sm(a0.r,0)
C.b.sm(a0.x,0)
a1=m.b
j=n
while(!0){if(!(j.a+j.d<=l))break
i=j
while(!0){if(!(i.b<=a1))break
h=i
while(!0){if(!(h.c+h.e<=k))break
a2=h.gN(h)
if(a2>=100&&a2<=117){g=$.bf()
f=h.gaf(h)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.aC()
g=new V.T((g.a|a2.a)>>>0)}f=h.gah(h)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.aD()
g=new V.T((g.a|a2.a)>>>0)}a2=h.a
u=h.b
e=h.c
d=h.d
c=h.e
b=h.f
f=new B.ai(a2,u-1,e,d,c,b)
a=f.gN(f)
a=a>=100&&a<=117
if(a){a=$.bg()
g=new V.T((g.a|a.a)>>>0)}f=new B.ai(a2,u+1,e,d,c,b)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.aE()
g=new V.T((g.a|a2.a)>>>0)}f=h.gaO(h)
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bh()
g=new V.T((g.a|a2.a)>>>0)}f=h.gaF()
a2=f.gN(f)
a2=a2>=100&&a2<=117
if(a2){a2=$.bi()
g=new V.T((g.a|a2.a)>>>0)}a2=$.n7()
if(!J.K(g,a2)){a0.f.push(h.gco())
u=a0.r
g.toString
e=$.lJ().a
d=g.a
u.push(new V.T((a2.a&e&~d)>>>0))
a0.x.push(!1)}}h=h.gaF()}i=new B.ai(i.a,i.b+1,i.c,i.d,i.e,i.f)}j=j.gah(j)}},
io:function(){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this
if(e.d.cI())return!1
u=e.c
t=e.b
s=u.bV(0,new V.y(t.a,t.b,t.c))
r=$.bf()
for(q=0,p=-1,o=0;u=e.f,o<u.length;++o){t=e.x
if(o>=t.length)return H.d(t,o)
if(!t[o]){n=u[o]
u=e.r
if(o>=u.length)return H.d(u,o)
m=u[o]
l=s.iQ(n,e.d,m)
if(l!=null)if(J.K(r,$.bf())||q>l.a){r=l.b
q=l.a
p=o}}}u=J.H(r)
if(u.p(r,$.bf()))return!1
t=e.x
if(p<0||p>=t.length)return H.d(t,p)
t[p]=!0
k=e.d.j(0,q)
j=e.d.j(0,1-q)
if(u.p(r,$.aD())||u.p(r,$.aC())){u=e.b
t=u.a
i=k.a
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.c(i)
h=u.b
g=k.b
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.c(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.c(f)
e.b=new V.t(t+i,h+g,u+f)
e.d=new V.y(0,j.b,j.c)}else if(u.p(r,$.aE())||u.p(r,$.bg())){u=e.b
t=u.b
i=k.b
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.c(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.c(g)
u=u.c
f=k.c
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.c(f)
e.b=new V.t(h+g,t+i,u+f)
e.d=new V.y(j.a,0,j.c)}else if(u.p(r,$.bi())||u.p(r,$.bh())){u=e.b
t=u.c
i=k.c
if(typeof t!=="number")return t.l()
if(typeof i!=="number")return H.c(i)
h=u.a
g=k.a
if(typeof h!=="number")return h.l()
if(typeof g!=="number")return H.c(g)
u=u.b
f=k.b
if(typeof u!=="number")return u.l()
if(typeof f!=="number")return H.c(f)
e.b=new V.t(h+g,u+f,t+i)
e.d=new V.y(j.a,j.b,0)}e.e=new V.T((e.e.a|r.a)>>>0)
return!0},
i:function(a){return"Collider("+H.f(this.b)+", "+H.f(this.e)+")"}}
B.kT.prototype={
$1:function(a){this.a.b.webkitRequestFullscreen()
return}}
B.kU.prototype={
$1:function(a){var u=this.b
P.lD(C.d.eD(this.a.gja(),2)+" fps, "+("chunks: "+u.d.length+", graveyard: "+u.c.length+", player: "+H.f(u.gce())))}}
B.O.prototype={}
B.hL.prototype={
F:function(a){var u="./textures/"+a+".png"
return this.a.f.je(u,!0,!1,!1)},
J:function(a,b){var u,t=O.lX()
t.dx.q(0,this.e)
u=t.r
u.sbd(0,new V.a3(0.8,0.8,0.8))
u=t.x
u.sbd(0,new V.a3(0.4,0.4,0.4))
t.r.sbv(a)
t.x.sbv(a)
t.db.sbv(a)
if(b){u=t.z
u.sbd(0,new V.a3(0.5,0.5,0.5))
u.bI(new A.a4(!0,u.c.b,!1))
u.dz(3)}this.d.push(t)
return this.d.length-1},
d5:function(a){var u=this.F(a),t=O.lX()
t.f.sbv(u)
t.db.sbv(u)
return t}}
B.dC.prototype={
i:function(a){var u=this
return"NeighborBlockInfo("+u.a.i(0)+", "+H.f(u.b)+", "+u.c.i(0)+", "+u.d+")"}}
B.dF.prototype={
eY:function(a,a0,a1){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b=null
a.r=!0
u=a.d
u.ch=u.Q=0.4
u=X.aL()
u.a6(32)
u.ae(a)
u.gaq().q(0,c.ghx())
c.e=!0
u=X.aL()
u.a6(9)
u.dH(9,!0)
u.ae(a)
u.gaq().q(0,c.gh9())
u=X.aL()
u.a6(69)
u.a6(81)
u.ae(a)
u.gaq().q(0,c.gh7())
u=a.d
t=u.b
u=t==null?u.b=D.E():t
u.q(0,c.ghj())
u=X.aL()
u.a6(79)
u.ae(a)
u.gaq().q(0,c.ghV())
u=new U.e9()
t=X.aL()
t.a6(39)
t.a6(68)
s=u.ghz()
t.gaq().q(0,s)
u.a=t
t=X.aL()
t.a6(37)
t.a6(65)
t.gaq().q(0,s)
u.b=t
t=X.aL()
t.a6(81)
t.gaq().q(0,s)
u.c=t
t=X.aL()
t.a6(69)
t.gaq().q(0,s)
u.d=t
t=X.aL()
t.a6(40)
t.a6(83)
t.gaq().q(0,s)
u.e=t
t=X.aL()
t.a6(38)
t.a6(87)
t.gaq().q(0,s)
u.f=t
t=U.db()
t.saG(30)
t.saR(0)
s=u.gaB()
t.gt().q(0,s)
u.r=t
t=U.db()
t.saG(30)
t.saR(0)
t.gt().q(0,s)
u.x=t
t=U.db()
t.saG(30)
t.saR(0)
t.gt().q(0,s)
u.y=t
u.Q=u.z=null
u.ch=60
u.cx=15
u.cy=0
u.dy=u.dx=u.db=null
u.a.ae(a)
u.b.ae(a)
u.c.ae(a)
u.d.ae(a)
u.e.ae(a)
u.f.ae(a)
u.r.saG(6)
u.x.saG(60)
t=u.x
s=t.r
if(!(Math.abs(s- -100)<$.x().a)){t.r=-100
s=new D.B("acceleration",s,-100)
s.b=!0
t.C(s)}u.y.saG(6)
u.dy=c.gfP()
u.gt().q(0,c.ghL())
c.a=u
u=new U.e8()
t=U.db()
t.scS(0,!0)
t.scK(6.283185307179586)
t.scL(0)
t.sa_(0,0)
t.saG(100)
t.sR(0)
t.saR(0.5)
u.b=t
s=u.gaB()
t.gt().q(0,s)
t=U.db()
t.scS(0,!0)
t.scK(6.283185307179586)
t.scL(0)
t.sa_(0,0)
t.saG(100)
t.sR(0)
t.saR(0.5)
u.c=t
t.gt().q(0,s)
u.d=null
u.r=u.f=u.e=!1
u.y=u.x=2.5
u.Q=4
u.ch=u.cx=!1
u.db=u.cy=0
u.dx=null
u.dy=0
u.fx=u.fr=null
r=new X.bv(!1,!1,!1)
q=u.d
u.d=r
t=new D.B("modifiers",q,r)
t.b=!0
u.C(t)
t=u.f
if(t!==!1){u.f=!1
t=new D.B("invertX",t,!1)
t.b=!0
u.C(t)}t=u.r
if(t!==!1){u.r=!1
t=new D.B("invertY",t,!1)
t.b=!0
u.C(t)}u.ae(a)
u.b.scK(1.5707963267948966)
u.b.scL(-1.5707963267948966)
u.b.saR(1)
u.c.saR(1)
u.b.scS(0,!1)
c.b=u
u.gt().q(0,new B.i3(c))
u=[U.ad]
t=U.hb(H.b([c.a,c.b],u))
t.gt().q(0,c.giB())
c.y=t
t=c.b
s=new U.cv()
s.c=V.bW()
s.d=0
if(null!=t){s.a=t
t.gt().q(0,s.gaB())
t=new D.B("mover",b,s.a)
t.b=!0
s.C(t)}c.z=U.hb(H.b([s,c.a,U.bn(V.lf(1,-1,1,1))],u))
t=U.bn(V.dx(-0.5,-0.5,-0.5))
s=new U.dO()
s.r=s.f=s.e=s.d=s.c=s.b=s.a=0
s.seH(-0.1)
s.seq(0,0)
s.seA(0)
p=s.d
if(!(Math.abs(p-0)<$.x().a)){s.d=0
p=new D.B("deltaYaw",p,0)
p.b=!0
s.C(p)}p=s.e
if(!(Math.abs(p-0.1)<$.x().a)){s.e=0.1
p=new D.B("deltaPitch",p,0.1)
p.b=!0
s.C(p)}p=s.f
if(!(Math.abs(p-0)<$.x().a)){s.f=0
p=new D.B("deltaRoll",p,0)
p.b=!0
s.C(p)}c.Q=U.hb(H.b([t,s,U.bn(V.dx(0.5,0.5,0.5)),U.bn(V.lf(0.04,-0.04,0.04,1)),U.bn(V.dx(-0.15,0.06,-0.2)),c.z],u))
u=U.hb(H.b([U.bn(V.lf(0.005,-0.005,0.005,1)),U.bn(V.dx(0,0,-0.2)),c.z],u))
c.ch=u
t=$.Z()
s=$.a2()
s=new Z.a1(t.a|s.a)
o=new F.ip()
t=new F.ju(o)
t.b=!1
p=F.c3
t.c=H.b([],[p])
o.a=t
t=new F.is()
t.b=H.b([],[F.i5])
o.b=t
t=new F.ir(o)
t.b=H.b([],[F.ds])
o.c=t
t=new F.iq(o)
t.b=H.b([],[F.bR])
o.d=t
o.e=null
t=o.a
n=new V.y(-1,-1,1)
n=n.A(0,Math.sqrt(n.D(n)))
m=t.bK(new V.by(1,2,4,6),V.fH(255,0,0),new V.t(-1,-1,0),new V.Q(0,1),n,s)
n=o.a
t=new V.y(1,-1,1)
t=t.A(0,Math.sqrt(t.D(t)))
l=n.bK(new V.by(0,3,4,6),V.fH(0,0,255),new V.t(1,-1,0),new V.Q(1,1),t,s)
t=o.a
n=new V.y(1,1,1)
n=n.A(0,Math.sqrt(n.D(n)))
k=t.bK(new V.by(0,2,5,6),V.fH(0,128,0),new V.t(1,1,0),new V.Q(1,0),n,s)
n=o.a
t=V.b9()
j=new V.y(-1,1,1)
j=j.A(0,Math.sqrt(j.D(j)))
i=n.bK(new V.by(0,2,4,7),V.fH(255,255,0),new V.t(-1,1,0),t,j,s)
o.d.iH(H.b([m,l,k,i],[p]))
o.aQ()
t=c.c
s=t.a
c.cx=E.bP(b,u,o,s.r)
c.cy=E.bP(b,c.Q,b,b)
u=E.ak
c.dy=H.b([],[u])
for(p=s.d,n=p.length,h=0;h<p.length;p.length===n||(0,H.q)(p),++h){g=E.bP(b,b,b,p[h])
j=c.cy.y
f=[H.aA(j,0)]
if(j.bm(H.b([g],f))){e=j.a
d=e.length
e.push(g)
f=H.b([g],f)
j=j.c
if(j!=null)j.$2(d,f)}c.dy.push(g)}c.f=0
t=new B.fG(t)
t.e=$.bf()
t.f=H.b([],[V.c_])
t.r=H.b([],[V.T])
t.x=H.b([],[P.az])
c.x=t
s=E.bP(b,b,b,s.f)
c.db=s
c.r=null
c.dx=E.bP(H.b([c.cx,c.cy,s],[u]),b,b,b)
c.dE()},
cU:function(){var u=this.c.aS(C.i.az(0.5),C.i.az(0.5)),t=u==null?null:u.jT(C.i.az(0.5),C.i.az(0.5))
if(t==null)t=0
this.a.sa_(0,new V.t(0.5,t+10,0.5))
this.a.sR(V.cP())},
hW:function(a){this.cU()},
hy:function(a){if(this.e)this.a.x.sR(30)},
ha:function(a){var u=this,t=H.k(a,"$ib3").c,s=u.f
if(t.b.c){if(typeof s!=="number")return s.n()
t=s-1
u.f=t
if(t<0)u.f=19}else{if(typeof s!=="number")return s.l()
t=s+1
u.f=t
if(t>=20)u.f=0}u.dE()},
h8:function(a){this.dc(H.k(a,"$ib3").c.a===69)},
hk:function(a){this.dc(H.k(a,"$ib6").x.a===2)},
dc:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=j.r
if((i==null?null:i.a)==null)return
u=i.a
if(a){i=j.f
if(i>>>0!==i||i>=20)return H.d($.fA,i)
t=$.fA[i]
s=u.gN(u)
r=j.r.b
i=$.aE()
q=r.a
if((q&i.a)>>>0!==0)if(s>=200&&s<=205)return
if(t>=200&&t<=205){i=u.gdL()
i=i.gN(i)
if(!(i>=100&&i<=117))return}if(t===106){i=$.aD()
p=$.aC()
if((q&(i.a|p.a))>>>0!==0)t=108
else{i=$.bi()
p=$.bh()
if((q&(i.a|p.a))>>>0!==0)t=107}}else if(t===115){i=$.aD()
p=$.aC()
if((q&(i.a|p.a))>>>0!==0)t=117
else{i=$.bi()
p=$.bh()
if((q&(i.a|p.a))>>>0!==0)t=116}}i=5&q
o=i!==0?(0|5-i)>>>0:0
i=40&q
if(i!==0)o=(o|40-i)>>>0
i=320&q
u=u.eh(new V.T(i!==0?(o|320-i)>>>0:o))
i=j.a
i=i.ga_(i)
n=$.lG().bV(0,new V.y(i.a,i.b,i.c))
i=u.gco()
q=n.a
if(typeof q!=="number")return q.l()
p=i.a
if(typeof p!=="number")return p.l()
m=$.x().a
if(p-m<q+n.d&&q-m<p+i.d){q=n.b
if(typeof q!=="number")return q.l()
p=i.b
if(typeof p!=="number")return p.l()
if(p-m<q+n.e&&q-m<p+i.e){q=n.c
if(typeof q!=="number")return q.l()
p=i.c
if(typeof p!=="number")return p.l()
i=p-m<q+n.f&&q-m<p+i.f}else i=!1}else i=!1
if(i)return}else t=0
l=u.f
if(l!=null){i=j.d
if(a)i.er(t)
else i.er(u.gN(u))
u.sN(0,t)
if(t===0){k=u.gdG()
i=k.gN(k)
if(i>=200&&i<=205)k.sN(0,0)}l.r=!0
i=u.a
if(i<=0){q=l.gaf(l)
if(q!=null)q.r=!0}q=u.c
if(q<=0){p=l.gaO(l)
if(p!=null)p.r=!0}if(i>=15){i=l.gah(l)
if(i!=null)i.r=!0}if(q>=15){i=l.gaF()
if(i!=null)i.r=!0}}},
hM:function(a){},
fQ:function(a,b){var u,t=this,s=b.n(0,a),r=new V.y(s.a,s.b,s.c)
if(r.D(r)<100){t.x.iP($.lG(),a,r)
s=t.x.e
u=$.aE()
s=s.a
u=u.a
u=(s&u)>>>0===u
t.e=u
if(u)t.a.x.sR(0)}s=t.x.b
return s==null?b:s},
iD:function(a){var u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=a==null
if((h?i:a.a)!=null){u=a.a
u=u.gN(u)===0}else u=!1
if(u)return!1
t=h?i:a.a
if(t!=null){a.d
h=t.gN(t)===0||t.gN(t)===100}else h=!1
if(h)a=i
j.r=a
if(a==null)j.db.b=!1
else{h=$.Z()
u=$.a2()
s=B.li(i,new Z.a1(h.a|u.a))
r=new V.t(t.d+t.a+0.5,t.b+0.5,t.e+t.c+0.5)
q=s.a2(0)
u=$.fc()
h=$.fh()
p=$.fi()
o=$.fd()
s.a8(q,r,u,h,p,o,$.fj(),!0,1.1)
n=$.ff()
m=$.fa()
l=$.fb()
k=$.fg()
s.a8(q,r,n,m,l,k,$.fe(),!0,1.1)
s.a8(q,r,u,m,n,h,$.lF(),!0,1.1)
s.a8(q,r,p,k,l,o,$.lH(),!0,1.1)
s.a8(q,r,h,n,k,p,$.kX(),!0,1.1)
s.a8(q,r,o,l,m,u,$.lE(),!0,1.1)
s.cF(0,H.b([j.db],[E.ak]))
j.db.b=!0}return!0},
iC:function(a){var u,t,s,r,q,p,o,n=this.z.f,m=V.mb(n.U(V.dG()),n.at(new V.y(0,0,-6))),l=m.a,k=m.d
if(typeof l!=="number")return l.l()
if(typeof k!=="number")return H.c(k)
u=m.b
t=m.e
if(typeof u!=="number")return u.l()
if(typeof t!=="number")return H.c(t)
s=m.c
r=m.f
if(typeof s!=="number")return s.l()
if(typeof r!=="number")return H.c(r)
q=V.mb(new V.t(l+k,u+t,s+r),new V.y(k,t,r).O(0))
r=this.c
p=new B.dC(r.aj(l,u,s),$.kY(),m,0)
for(o=0;!this.iD(p);){p=r.eL(p.a,m,q,o);++o}},
dE:function(){var u=B.li(this.c.a,null),t=this.f
if(t>>>0!==t||t>=20)return H.d($.fA,t)
u.d3(null,0,0,0,$.fA[t],!1,1)
u.cF(0,this.dy)}}
B.i3.prototype={
$1:function(a){var u,t=this.a,s=t.a
t=V.lY(-t.b.c.d)
if(!J.K(s.z,t)){u=s.z
s.z=t
s.Q=t.bs(0)
t=new D.B("velocityRotation",u,s.z)
t.b=!0
s.C(t)}}}
B.i9.prototype={
bO:function(a){var u=this
u.c=a
u.i6()
C.Z.e6(u.c.d,0,12288,0)
u.iq()
u.fp()
u.fn()
u.iz()
u.fj()
u.i3()
u.fg()
u.iy()
a.cG()},
ap:function(a,b,c){var u,t,s,r,q,p,o,n=this.a,m=this.c,l=(a+m.a)*c
m=(b+m.b)*c
u=new B.av(l,m)
t=u.l(0,$.n6().j(0,l+m))
m=Math.floor(t.a)
l=Math.floor(t.b)
s=new B.av(m,l)
r=s.l(0,$.lI().j(0,m+l))
q=t.n(0,s)
u=new B.h1(n.a,s,u.n(0,r),q)
u.e=0
u.ao(1,0)
u.ao(0,1)
n=q.a
l=q.b
p=n+l
if(p<=1){o=1-p
if(o>n||o>l)if(n>l)u.ao(1,-1)
else u.ao(-1,1)
else u.ao(1,1)
u.ao(0,0)}else{o=2-p
if(o<n||o<l)if(n>l)u.ao(2,0)
else u.ao(0,2)
else u.ao(0,0)
u.ao(1,1)}return u.e/47*0.5+0.5},
cj:function(a,b){var u=this.b,t=(a+3)*22+(b+3)
if(t<0||t>=484)return H.d(u,t)
return u[t]},
i6:function(){var u,t,s,r,q,p=this
for(u=0,t=-3;t<19;++t)for(s=-3;s<19;++s){r=C.d.az(Math.pow(0.6*p.ap(t,s,0.001)+0.3*p.ap(t,s,0.01)+0.1*p.ap(t,s,0.1),2)*48)
if(r>=48)r=47
q=p.b
if(u<0||u>=484)return H.d(q,u)
q[u]=r;++u}},
iq:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.ir(u,t)},
ir:function(a,b){var u,t,s,r,q=this.cj(a,b)
for(u=q-2,t=q<8,s=0;s<=q;++s){if(t)r=u<=s?104:103
else if(q===s)r=102
else r=u<=s?101:103
this.c.Y(a,s,b,r)}},
fp:function(){var u,t
for(u=0;u<16;++u)for(t=0;t<16;++t)this.fq(u,t)},
fq:function(a,b){var u,t=this.c.cR(a,b,0)
if(t<8)for(u=8;u>t;--u)this.c.Y(a,u,b,1)},
fn:function(){var u,t
for(u=-1;u<=16;++u)for(t=-1;t<=16;++t)this.fo(u,t)},
fo:function(a,b){var u,t,s,r,q,p
if(this.cj(a,b)<8)for(u=10;u>6;--u)for(t=-1;t<=1;++t)for(s=a+t,r=-1;r<=1;++r){q=b+r
p=this.c.aj(s,u,q)
if(p===102||p===105)this.c.Y(s,u,q,104)}},
iz:function(){var u,t
for(u=-3;u<19;++u)for(t=-3;t<19;++t)if(this.ap(u,t,1.5)<0.1)this.fk(u,t)},
fk:function(a,b){var u,t,s=this,r=s.c,q=a+r.a
if(q>=-30)if(q<30){r=b+r.b
r=r>=-30&&r<30}else r=!1
else r=!1
if(r)return
u=s.cj(a,b)
if(u<10)return
for(t=1;t<8;++t)s.c.Y(a,u+t,b,106)
s.fl(a,b)
s.fm(a,u+8,b)},
fl:function(a,b){var u,t,s,r,q,p
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)if(t+r*r<=10)for(q=b+r,p=47;p>=0;--p)if(this.c.aj(s,p,q)===102){this.c.Y(s,p,q,105)
break}},
fm:function(a,b,c){var u,t,s,r,q,p,o,n
for(u=-3;u<=3;++u)for(t=u*u,s=a+u,r=-3;r<=3;++r)for(q=t+r*r,p=b+r,o=-3;o<=3;++o)if(q+o*o<=12){n=c+o
if(this.c.aj(s,p,n)===0)this.c.Y(s,p,n,114)}},
i3:function(){var u,t,s,r,q,p=this
for(u=0;u<16;++u)for(t=u-400,s=u+400,r=0;r<16;++r)if(p.ap(u,r,12.5)<0.1)p.b5(u,r,204)
else if(p.ap(s,r,12.5)<0.1)p.b5(u,r,203)
else{q=r+400
if(p.ap(u,q,12.5)<0.1)p.b5(u,r,202)
else if(p.ap(s,q,12.5)<0.15)p.b5(u,r,200)
else if(p.ap(t,r,12.5)<0.1)p.b5(u,r,201)
else if(p.ap(u,r-400,12.5)<0.08)p.b5(u,r,205)}},
b5:function(a,b,c){var u=this.c.cR(a,b,0),t=this.c.aj(a,u,b)
if(t!==102&&t!==105)return
this.c.Y(a,u+1,b,c)},
fj:function(){var u,t,s,r,q,p,o,n,m,l,k=this.c,j=k.a
if(j+16>=-30)if(j<=30){k=k.b
k=k+16<-30||k>30}else k=!0
else k=!0
if(k)return
u=new B.ib(this)
for(t=30;t>=0;t-=2){s=30-t+3
for(r=-s,k=t-1,q=r;q<=s;++q)for(p=r;p<=s;++p){u.$4(q,t,p,111)
u.$4(q,k,p,111)}for(j=r-1,o=r-2,n=s+1,m=s+2,l=-2;l<=2;++l){u.$4(j,t,l,109)
u.$4(j,k,l,109)
u.$4(o,k,l,109)
u.$4(n,t,l,109)
u.$4(n,k,l,109)
u.$4(m,k,l,109)
u.$4(l,t,j,109)
u.$4(l,k,j,109)
u.$4(l,k,o,109)
u.$4(l,t,n,109)
u.$4(l,k,n,109)
u.$4(l,k,m,109)}k=t+1
u.$4(j,k,2,109)
u.$4(o,t,2,109)
u.$4(j,k,-2,109)
u.$4(o,t,-2,109)
u.$4(n,k,2,109)
u.$4(m,t,2,109)
u.$4(n,k,-2,109)
u.$4(m,t,-2,109)
u.$4(2,k,j,109)
u.$4(2,t,o,109)
u.$4(-2,k,j,109)
u.$4(-2,t,o,109)
u.$4(2,k,n,109)
u.$4(2,t,m,109)
u.$4(-2,k,n,109)
u.$4(-2,t,m,109)}},
fg:function(){var u,t=this.c,s=t.a
if(s+16>=-36)if(s<=12){t=t.b
t=t+16<-28||t>-22}else t=!0
else t=!0
if(t)return
u=new B.ia(this,-12,40,-25)
t=[P.n]
u.$5(110,0,0,H.b([0,1,2,3,4,4,3,2,4,4,3,2,1,0],t),H.b([1,0,0,0,1,2,3,3,4,5,6,6,6,5],t))
u.$5(110,6,0,H.b([0,1,2,3,4,4,4,3,2,1,0,0,0,0,0,0],t),H.b([0,0,0,1,2,3,4,5,6,6,6,5,4,3,2,1],t))
u.$5(113,12,0,H.b([0,0,0,0,0,1,2,1,2,3,3,3,3,3],t),H.b([2,3,4,5,6,1,1,4,4,2,3,4,5,6],t))
u.$5(113,17,0,H.b([0,0,0,0,0,0,1,2,1,2,3,3,3,3],t),H.b([1,2,3,4,5,6,1,1,4,4,2,3,5,6],t))
u.$5(113,22,0,H.b([0,2,1,1,1,1,1,1],t),H.b([1,1,1,2,3,4,5,6],t))},
iy:function(){var u,t,s,r,q=this.c,p=q.a
if(p+16>=-3)if(p<=3){q=q.b
q=q+16<-3||q>3}else q=!0
else q=!0
if(q)return
u=new B.ic(this)
for(t=-3;t<=3;++t)for(s=0;s<=7;++s)for(q=2+s,r=-3;r<=3;++r)u.$4(t,q,r,0)
u.$4(0,2,0,113)
u.$4(0,3,0,112)
u.$4(0,4,0,112)
u.$4(0,5,0,112)
u.$4(0,6,0,112)}}
B.ib.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.Y(a-u.a,b,c-u.b,d)}}
B.ia.prototype={
$5:function(a,b,c,d,e){var u,t,s,r,q,p,o,n,m,l=this
for(u=d.length-1,t=l.a,s=l.b+b,r=l.c+c,q=l.d;u>=0;--u){p=t.c
if(u>=d.length)return H.d(d,u)
o=d[u]
if(typeof o!=="number")return H.c(o)
n=p.a
if(u>=e.length)return H.d(e,u)
m=e[u]
if(typeof m!=="number")return H.c(m)
p.Y(s+o-n,r-m,q-p.b,a)}}}
B.ic.prototype={
$4:function(a,b,c,d){var u=this.a.c
u.Y(a-u.a,b,c-u.b,d)}}
B.it.prototype={
iN:function(a){var u,t,s
for(u=15;u>=0;--u)for(t=47;t>=-1;--t)for(s=15;s>=0;--s)this.d3(a,u,t,s,a.bX(u,t,s),!1,1)},
cF:function(a,b){var u,t,s,r
for(u=b.length-1;u>=0;--u){if(u>=b.length)return H.d(b,u)
t=b[u]
s=this.c
if(u>=s.length)return H.d(s,u)
r=s[u]
if(r!=null){t.scV(r)
t.b=r.f.length!==0}else{t.scV(null)
t.b=!1}}this.c=null},
a2:function(a){var u,t=this.c
if(a>>>0!==a||a>=t.length)return H.d(t,a)
u=t[a]
if(u==null){t=this.b
u=new F.dL(t)
u.b=t.gdQ(t)
u.c=t.gbk(t)
u.d=0
u.f=H.b([],[P.J])
t=[P.n]
u.r=H.b([],t)
u.x=H.b([],t)
u.y=H.b([],t)
t=this.c
if(a>=t.length)return H.d(t,a)
t[a]=u}return u},
d3:function(a,b,c,d,e,f,g){var u,t,s,r=this,q=new V.t(b,c,d)
if(a!=null){b+=a.a
d+=a.b}u=new V.t(b+0.5,c+0.5,d+0.5)
if(e===0)return
else if(e===1)r.d4(a,u,q,e,!1,g)
else if(e>=200&&e<=205)if(e===201){t=r.a.c.h(0,201)
s=J.ag(t)
r.bC(r.a2(s.h(t,0)),u,0.3141592653589793)
r.bC(r.a2(s.h(t,0)),u,1.7278759594743864)
r.bC(r.a2(s.h(t,0)),u,3.6128315516282616)
r.bC(r.a2(s.h(t,0)),u,5.026548245743669)}else if(e===205)r.fi(u)
else{t=r.a.c.h(0,e)
s=J.ag(t)
r.d8(r.a2(s.h(t,0)),u,0.39269908169872414,!0)
r.d8(r.a2(s.h(t,0)),u,1.9634954084936207,!0)}else if(e>=100&&e<=117)r.d4(a,u,q,e,!1,g)},
b8:function(a,b,c,d){var u=null,t=$.Z(),s=$.a2()
return F.c4(u,u,u,a,b,new V.Q(c,d),u,new Z.a1(t.a|s.a|$.a8().a),0)},
a8:function(a,b,c,d,e,f,g,h,i){var u=this,t=a.bp(H.b([u.b8(b.l(0,c.j(0,i)),g,0,0),u.b8(b.l(0,d.j(0,i)),g,0,1),u.b8(b.l(0,e.j(0,i)),g,1,1),u.b8(b.l(0,f.j(0,i)),g,1,0)],[F.c3])),s=t+1,r=t+2,q=t+3,p=[P.n]
a.bo(H.b([t,s,r,q],p))
if(h)a.bo(H.b([r,s,t,q],p))},
d4:function(a,b,c,d,e,f){var u=this,t=u.a.b.h(0,d)
if(u.b4(a,d,c,0,1,0))u.a8(u.a2(t.a),b,$.fc(),$.fh(),$.fi(),$.fd(),$.fj(),!1,f)
if(u.b4(a,d,c,0,-1,0))u.a8(u.a2(t.b),b,$.ff(),$.fa(),$.fb(),$.fg(),$.fe(),!1,f)
if(u.b4(a,d,c,-1,0,0))u.a8(u.a2(t.c),b,$.fc(),$.fa(),$.ff(),$.fh(),$.lF(),!1,f)
if(u.b4(a,d,c,1,0,0))u.a8(u.a2(t.d),b,$.fi(),$.fg(),$.fb(),$.fd(),$.lH(),!1,f)
if(u.b4(a,d,c,0,0,1))u.a8(u.a2(t.e),b,$.fh(),$.ff(),$.fg(),$.fi(),$.kX(),!1,f)
if(u.b4(a,d,c,0,0,-1))u.a8(u.a2(t.f),b,$.fd(),$.fb(),$.fa(),$.fc(),$.lE(),!1,f)},
b4:function(a,b,c,d,e,f){if(a==null)return!0
e+=J.l2(c.b)
if(e<0)return!1
if(e>=48)return!0
return B.ny(b,a.bX(d+J.l2(c.a),e,f+J.l2(c.c)))},
d8:function(a,b,c,d){var u=Math.cos(c)*0.5,t=Math.sin(c)*0.5,s=-t,r=-u
this.a8(a,b,new V.t(u,0,s),new V.t(u,-0.5,s),new V.t(r,-0.5,t),new V.t(r,0,t),new V.y(t,0,u),!0,1)},
bC:function(a,b,c){var u=V.lY(c)
this.a8(a,b,u.U(new V.t(0.4,-0.1,-0.4)),u.U(new V.t(0,-0.5,0)),u.U(new V.t(0.4,-0.1,0.4)),u.U(new V.t(0.8,0,0)),$.fj(),!0,1)},
fi:function(b4){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.a.c.h(0,205),b0=J.ag(a9),b1=a7.a2(b0.h(a9,0)),b2=a7.a2(b0.h(a9,1)),b3=a7.a2(b0.h(a9,2))
a9=[F.c3]
u=H.b([],a9)
t=H.b([],a9)
for(b0=b4.a,s=b4.b,r=b4.c,q=0;q<=2;q+=0.25){p=3.141592653589793*q
o=Math.cos(p)
n=Math.sin(p)
m=new V.au(o,0,-n,0,1,0,n,0,o)
p=m.U(new V.t(0.07,-0.1,0))
l=p.a
if(typeof b0!=="number")return b0.l()
if(typeof l!=="number")return H.c(l)
k=p.b
if(typeof s!=="number")return s.l()
if(typeof k!=="number")return H.c(k)
p=p.c
if(typeof r!=="number")return r.l()
if(typeof p!=="number")return H.c(p)
j=$.kX()
i=m.at(j)
h=Math.abs(q-1)
g=$.Z()
f=$.a2()
u.push(F.c4(a8,a8,a8,new V.t(b0+l,s+k,r+p),i,new V.Q(h,0),a8,new Z.a1(g.a|f.a|$.a8().a),0))
f=m.U(new V.t(0.1,-0.5,0))
g=f.a
if(typeof g!=="number")return H.c(g)
i=f.b
if(typeof i!=="number")return H.c(i)
f=f.c
if(typeof f!=="number")return H.c(f)
j=m.at(j)
p=$.Z()
k=$.a2()
u.push(F.c4(a8,a8,a8,new V.t(b0+g,s+i,r+f),j,new V.Q(h,1),a8,new Z.a1(p.a|k.a|$.a8().a),0))
e=m.U(new V.t(0.1,-0.5,0))
d=m.U(new V.t(0.1,0,0))
k=e.a
if(typeof k!=="number")return H.c(k)
p=e.b
if(typeof p!=="number")return H.c(p)
h=e.c
if(typeof h!=="number")return H.c(h)
j=$.fe()
f=d.a
if(typeof f!=="number")return f.l()
i=d.c
if(typeof i!=="number")return i.l()
g=$.Z()
l=$.a2()
t.push(F.c4(a8,a8,a8,new V.t(b0+k,s+p,r+h),j,new V.Q(f+0.5,i+0.5),a8,new Z.a1(g.a|l.a|$.a8().a),0))}c=b3.bp(u)
b=b2.bp(t)
p=P.n
b3.iI(P.dt(u.length,new B.iu(c),p))
b2.bo(P.dt(t.length,new B.iv(b),p))
a=H.b([],a9)
a0=H.b([],a9)
a.push(a7.b8(b4.l(0,new V.t(0,0.05,0)),$.fj(),0.5,0.5))
a0.push(a7.b8(b4.l(0,new V.t(0,-0.1,0)),$.fe(),0.5,0.5))
for(q=0;q<=1;q+=0.1){a9=-6.283185307179586*q
o=Math.cos(a9)
n=Math.sin(a9)
a1=new V.au(o,0,-n,0,1,0,n,0,o)
e=a1.U(new V.t(0.4,-0.15,0))
d=a1.U(new V.t(0.5,0,0))
a9=e.a
if(typeof b0!=="number")return b0.l()
if(typeof a9!=="number")return H.c(a9)
l=e.b
if(typeof s!=="number")return s.l()
if(typeof l!=="number")return H.c(l)
k=e.c
if(typeof r!=="number")return r.l()
if(typeof k!=="number")return H.c(k)
j=d.a
if(typeof j!=="number")return j.l()
i=d.c
if(typeof i!=="number")return i.l()
h=$.Z()
g=$.a2()
a.push(F.c4(a8,a8,a8,new V.t(b0+a9,s+l,r+k),a8,new V.Q(j+0.5,i+0.5),a8,new Z.a1(h.a|g.a|$.a8().a),0))
g=6.283185307179586*q
o=Math.cos(g)
n=Math.sin(g)
a2=new V.au(o,0,-n,0,1,0,n,0,o)
a3=a2.U(new V.t(0.4,-0.15,0))
a4=a2.U(new V.t(0.5,0,0))
g=a3.a
if(typeof g!=="number")return H.c(g)
h=a3.b
if(typeof h!=="number")return H.c(h)
i=a3.c
if(typeof i!=="number")return H.c(i)
j=a4.a
if(typeof j!=="number")return j.l()
k=a4.c
if(typeof k!=="number")return k.l()
l=$.Z()
a9=$.a2()
a0.push(F.c4(a8,a8,a8,new V.t(b0+g,s+h,r+i),a8,new V.Q(j+0.5,k+0.5),a8,new Z.a1(l.a|a9.a|$.a8().a),0))}a5=b1.bp(a)
a6=b2.bp(a0)
b1.bo(P.dt(a.length,new B.iw(a5),p))
b2.bo(P.dt(a0.length,new B.ix(a6),p))}}
B.iu.prototype={
$1:function(a){return this.a+a}}
B.iv.prototype={
$1:function(a){return this.a+a}}
B.iw.prototype={
$1:function(a){return this.a+a}}
B.ix.prototype={
$1:function(a){return this.a+a}}
B.iB.prototype={
b3:function(a,b,c){var u,t,s,r=a.jf(b),q=new F.dy()
q.a=r
u=H.b([],[F.cF])
q.b=u
u.push(r)
q.c=10
for(r=c.length,t=0;t<c.length;c.length===r||(0,H.q)(c),++t){s=c[t]
this.a.k(0,s,q)}},
er:function(a){var u=this.a.h(0,a)
if(u!=null)u.jy(0,1)}}
B.iO.prototype={
bO:function(a){var u=this
u.a=a
u.fI()
if(u.av(-2,1))u.ip()
if(u.av(-1,1)){u.a4(5,9,3,7,2,11)
u.d9(6,10,4,5,1,9,1)}if(u.av(0,1)){u.a4(2,10,6,12,10,1)
u.a4(6,10,2,1,10,12)
u.a4(2,10,10,12,10,1)
u.a4(10,10,2,1,10,12)}if(u.av(1,1))u.i4()
if(u.av(1,0))u.i5()
if(u.av(1,-1))u.i2()
if(u.av(-2,0))u.iA()
if(u.av(-2,-1))u.h0()
if(u.av(-2,-2))u.i7()
a.cG()},
fI:function(){var u,t,s,r,q,p,o,n=this
for(u=0;u<16;++u)for(t=u===1,s=u!==0,r=0;r<16;++r){for(q=0;q<8;++q)n.a.Y(u,q,r,103)
for(q=8;q<9;++q)n.a.Y(u,q,r,101)
if(!s||r===0)n.a.Y(u,9,r,113)
else{p=t&&r===1
o=n.a
if(p)o.Y(u,9,r,110)
else o.Y(u,9,r,102)}}},
ip:function(){var u,t,s,r,q,p,o
for(u=-6;u<=6;++u)for(t=u*u,s=8+u,r=-6;r<=6;++r)for(q=t+r*r,p=17+r,o=-6;o<=6;++o)if(q+o*o<=37)this.a.Y(s,p,8+o,104)},
i4:function(){var u=new B.iP(this)
u.$3(0,0,0)
u.$3(0,1,1)
u.$3(0,2,2)
u.$3(1,2,3)
u.$3(1,1,4)
u.$3(1,0,5)
u.$3(2,0,0)
u.$3(2,0,2)
u.$3(2,1,1)
u.$3(2,1,3)
u.$3(2,2,2)
u.$3(2,2,4)},
i5:function(){var u=new B.iQ(this)
u.$3(0,0,1)
u.$3(0,1,2)
u.$3(0,2,3)
u.$3(0,3,4)
u.$3(1,0,2)
u.$3(1,1,3)
u.$3(1,2,4)
u.$3(1,3,5)
u.$3(2,0,5)
u.$3(2,1,4)
u.$3(2,2,3)
u.$3(2,3,2)
u.$3(3,0,4)
u.$3(3,1,3)
u.$3(3,2,2)
u.$3(3,3,1)},
i2:function(){var u,t,s
for(u=0;u<20;u+=2)for(t=2+u,s=0;s<20;s+=2)this.a4(t,10,2+s,1,8,1)},
i7:function(){var u,t,s
for(u=0;u<6;++u){t=2+u
s=16-t*2+1
this.a4(t,10+u,t,s,1,s)}},
iA:function(){var u,t,s
for(u=0;u<4;++u){t=2+u*3
s=u+2
this.a4(3,10,t,12,s,1)
this.a4(3,10+u+1,t+1,12,1,2)
this.a4(3,10,t+3,12,s,1)}},
h0:function(){var u,t,s
for(u=0;u<6;++u){t=2+u*2
s=u+2
this.a4(3,10,t,12,s,1)
this.a4(3,10+u+1,t+1,12,1,1)
this.a4(3,10,t+2,12,s,1)}},
av:function(a,b){var u=this.a
return u.a===a*16&&u.b===b*16},
d9:function(a,b,c,d,e,f,g){var u,t,s,r,q
for(u=0;u<d;++u)for(t=a+u,s=0;s<e;++s)for(r=b+s,q=0;q<f;++q)this.a.Y(t,r,c+q,g)},
a4:function(a,b,c,d,e,f){return this.d9(a,b,c,d,e,f,109)}}
B.iP.prototype={
$3:function(a,b,c){return this.a.a4(2+4*a,10+c,2+4*b,4,1,4)}}
B.iQ.prototype={
$3:function(a,b,c){return this.a.a4(2+4*a,10,2+4*b,1,c,1)}}
B.ec.prototype={
f2:function(a,b){var u,t,s,r,q,p,o=this,n=[B.da]
o.c=H.b([],n)
o.d=H.b([],n)
o.e=H.b([],[E.ak])
o.r=null
n=o.a
if(n!=null)for(n=n.d,u=n.length,t=0;t<n.length;n.length===u||(0,H.q)(n),++t){s=n[t]
o.e.push(E.bP(null,null,null,s))}for(r=0;r<140;++r)o.c.push(B.nB(o))
for(n=o.b,q=-32;q<32;q+=16)for(p=-32;p<32;p+=16)n.bO(o.eu(q,p))},
aS:function(a,b){var u,t,s,r
for(u=this.d,t=u.length,s=0;s<t;++s){r=u[s]
if(r.a===a&&r.b===b)return r}return},
aj:function(a,b,c){var u,t,s,r=J.l1(a),q=J.l1(b),p=J.l1(c),o=r<0?r-16+1:r,n=p<0?p-16+1:p
o=C.c.a5(o,16)*16
n=C.c.a5(n,16)*16
u=this.aS(o,n)
t=r-o
s=p-n
if(t<0)t+=16
return new B.ai(t,q,s<0?s+16:s,o,n,u)},
gce:function(){var u=this.f.z.f.U(V.dG())
return u},
jZ:function(a){this.iE(this.gce())},
eJ:function(a){var u=this.gce()
this.fM(u)
this.i8(u)},
iK:function(a){var u=this.a.x,t=u.b,s=u.e,r=s.length
t=(t+1)%r
if(t<r){u.b=t
u.c=s[t]
u=u.f
if(u!=null)u.dS()}},
eu:function(a,b){var u,t=this.c
if(0>=t.length)return H.d(t,-1)
u=t.pop()
u.a=a
u.b=b
u.x=u.f=!0
u.saK(!1)
this.d.push(u)
return u},
j_:function(a){var u=C.b.X(this.d,a)
if(u){a.f=!1
a.saK(!1)
a.x=!0
a.r=!1
this.c.push(a)
return!0}return!1},
iE:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.aj(a.a,a.b,a.c),e=f.f
if(g.r!=e){g.r=e
e=f.d
u=e-128
t=e+128
s=f.e
r=s-128
q=s+128
for(p=g.d.length-1;p>=0;--p){o=g.d
if(p>=o.length)return H.d(o,p)
n=o[p]
o=n.a
if(u<=o)if(t>o){o=n.b
o=r>o||q<=o}else o=!0
else o=!0
if(o)g.j_(n)}m=e-64
l=e+64
k=s-64
j=s+64
for(i=m;i<l;i+=16)for(h=k;h<j;h+=16)if(g.aS(i,h)==null)g.eu(i,h)}},
fM:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.n()
u=k-8
k=a.c
if(typeof k!=="number")return k.n()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null)this.b.bO(r)},
i8:function(a){var u,t,s,r,q,p,o,n,m,l,k=a.a
if(typeof k!=="number")return k.n()
u=k-8
k=a.c
if(typeof k!=="number")return k.n()
t=k-8
for(k=this.d,s=k.length,r=null,q=1e-9,p=0;p<s;++p){o=k[p]
if(o.f&&!o.x){n=o.a-u
m=o.b-t
l=n*n+m*m
if(r==null||q>l){q=l
r=o}}}if(r!=null){r.f=!1
r.r=!0}},
eL:function(a,b,c,d){var u,t=a.gco().jB(c)
if(t==null)return
else{u=t.d
a=a.eh(u)}if(a==null)return
return new B.dC(a,u,b,d)},
ai:function(a,b){var u,t,s,r,q=this.f.z.f,p=q.U(V.dG()),o=q.U(new V.t(0,0,-16)),n=new V.Q(p.a,p.c),m=new V.Q(o.a,o.c)
for(u=this.d,t=u.length,s=0;s<u.length;u.length===t||(0,H.q)(u),++s){r=u[s]
r.jV()
r.jW(n,m)}}};(function aliases(){var u=J.a.prototype
u.eT=u.i
u=J.dp.prototype
u.eU=u.i
u=K.dk.prototype
u.eS=u.bg
u.cW=u.i
u=O.cz.prototype
u.cX=u.aM
u=O.aM.prototype
u.cY=u.aM})();(function installTearOffs(){var u=hunkHelpers._static_2,t=hunkHelpers._static_1,s=hunkHelpers._static_0,r=hunkHelpers._instance_1u,q=hunkHelpers.installInstanceTearOff,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers._instance_0i,m=hunkHelpers._instance_1i
u(J,"oW","nP",25)
t(P,"pp","ov",9)
t(P,"pq","ow",9)
t(P,"pr","ox",9)
s(P,"mP","pn",7)
var l
r(l=F.cF.prototype,"ght","hu",4)
r(l,"ghr","hs",4)
q(l=E.ak.prototype,"gbS",0,0,null,["$1","$0"],["em","jp"],1,0)
q(l,"gen",0,0,null,["$1","$0"],["eo","jq"],1,0)
q(l,"gek",0,0,null,["$1","$0"],["el","jo"],1,0)
q(l,"gei",0,0,null,["$1","$0"],["ej","jl"],1,0)
p(l,"gjj","jk",6)
p(l,"gjm","jn",6)
q(l=E.dZ.prototype,"gcZ",0,0,null,["$1","$0"],["d0","d_"],1,0)
o(l,"gjG","ez",7)
r(l=X.dq.prototype,"gf5","f6",21)
p(l,"gf3","f4",12)
p(l,"gf7","f8",12)
r(l,"gc_","c0",0)
r(l,"gcc","cd",0)
r(l=X.e7.prototype,"ghv","hw",4)
r(l,"ghb","hc",4)
r(l,"ghl","hm",2)
r(l,"gcc","cd",13)
r(l,"gc_","c0",13)
r(l,"ghD","hE",2)
r(l,"ghH","hI",2)
r(l,"ghp","hq",2)
r(l,"ghF","hG",2)
r(l,"ghn","ho",2)
r(l,"ghJ","hK",22)
r(l,"ghN","hO",4)
r(l,"gi0","i1",8)
r(l,"ghX","hY",8)
r(l,"ghZ","i_",8)
q(D.bO.prototype,"ghd",0,0,null,["$1","$0"],["aL","he"],1,0)
q(l=D.dr.prototype,"gdr",0,0,null,["$1","$0"],["ds","hB"],1,0)
r(l,"ghP","hQ",23)
p(l,"gh1","h2",14)
p(l,"ghT","hU",14)
n(V.P.prototype,"gm","cJ",15)
n(V.y.prototype,"gm","cJ",15)
q(l=U.cs.prototype,"gaB",0,0,null,["$1","$0"],["C","ad"],1,0)
p(l,"gf9","fa",16)
p(l,"ghR","hS",16)
q(U.cv.prototype,"gaB",0,0,null,["$1","$0"],["C","ad"],1,0)
q(l=U.e8.prototype,"gaB",0,0,null,["$1","$0"],["C","ad"],1,0)
r(l,"gfV","fW",0)
r(l,"gfX","fY",0)
r(l,"gfZ","h_",0)
r(l,"gfR","fS",0)
r(l,"gfT","fU",0)
r(l,"giw","ix",0)
r(l,"giu","iv",0)
r(l,"gis","it",0)
q(l=U.e9.prototype,"gaB",0,0,null,["$1","$0"],["C","ad"],1,0)
r(l,"ghz","hA",0)
q(l=M.dh.prototype,"gb0",0,0,null,["$1","$0"],["b1","fb"],1,0)
p(l,"ghf","hg",6)
p(l,"ghh","hi",6)
q(l=O.cy.prototype,"gbB",0,0,null,["$1","$0"],["a3","c1"],1,0)
q(l,"gie",0,0,null,["$1","$0"],["du","ig"],1,0)
p(l,"gh3","h4",17)
p(l,"gh5","h6",17)
q(O.cz.prototype,"gbB",0,0,null,["$1","$0"],["a3","c1"],1,0)
q(X.dE.prototype,"gd2",0,0,null,["$1","$0"],["b2","fe"],1,0)
s(B,"pG","pO",7)
r(l=B.dF.prototype,"ghV","hW",0)
r(l,"ghx","hy",0)
r(l,"gh9","ha",0)
r(l,"gh7","h8",0)
r(l,"ghj","hk",0)
r(l,"ghL","hM",0)
p(l,"gfP","fQ",24)
r(l,"giB","iC",0)
r(l=B.ec.prototype,"gjY","jZ",3)
r(l,"geI","eJ",3)
r(l,"giJ","iK",3)
m(l,"gjU","ai",0)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.V,null)
s(P.V,[H.lc,J.a,J.aa,P.eu,P.i,H.cw,P.hg,H.di,H.jg,H.fK,H.j4,P.bo,H.cp,H.eL,P.ac,H.hn,H.ho,H.hi,P.eR,P.c6,P.cX,P.jM,P.jR,P.aZ,P.ed,P.dV,P.iK,P.e_,P.bH,P.kx,P.kf,P.k9,P.et,P.w,P.kq,P.hv,P.fF,P.kw,P.kv,P.az,P.aj,P.ah,P.as,P.i1,P.dS,P.em,P.h9,P.p,P.U,P.an,P.bA,P.o,P.W,P.c7,P.ji,P.kg,W.fO,W.L,W.dj,P.ki,P.eW,P.k5,P.ka,P.c1,L.i0,B.h1,B.av,K.fl,K.dk,K.dw,K.io,L.dT,L.e0,L.e1,L.j_,F.fr,F.dy,F.cF,O.b1,O.cA,E.fz,E.ak,E.bK,E.bY,E.el,E.ie,D.a5,E.dZ,Z.ea,Z.jC,Z.co,Z.aK,Z.a1,D.fD,D.bQ,X.d9,X.am,X.hl,X.hs,X.bv,X.hS,X.j0,X.e7,D.fw,D.bO,D.ab,D.i6,D.iE,V.a3,V.bm,V.h0,V.T,V.bS,V.he,V.au,V.b5,V.Q,V.t,V.by,V.dK,V.dM,V.c_,V.P,V.y,U.cv,U.e8,U.e9,M.dh,A.d7,A.fp,A.a4,A.d8,A.de,A.dH,A.dR,A.hz,A.cK,A.cL,A.cN,A.cO,A.e4,A.jb,F.bR,F.ds,F.i5,F.dL,F.ip,F.iq,F.ir,F.is,F.c3,F.ju,F.jv,F.jy,O.dW,O.cz,O.hA,T.iV,X.l4,X.iM,X.dE,V.iy,B.ai,B.fE,B.da,B.fG,B.O,B.hL,B.dC,B.dF,B.i9,B.it,B.iB,B.iO,B.ec])
s(J.a,[J.hh,J.dn,J.dp,J.bs,J.bT,J.bt,H.cC,H.bw,W.h,W.fk,W.bJ,W.aI,W.I,W.ef,W.ap,W.fS,W.fT,W.eh,W.dg,W.ej,W.fV,W.j,W.en,W.aJ,W.hc,W.ep,W.b2,W.hr,W.hM,W.ev,W.ew,W.aO,W.ex,W.eA,W.aQ,W.eE,W.eG,W.aU,W.eH,W.aV,W.eM,W.aw,W.eP,W.iY,W.aX,W.eS,W.j2,W.jn,W.eZ,W.f0,W.f2,W.f4,W.f6,P.b4,P.er,P.b8,P.eC,P.i8,P.eN,P.bb,P.eU,P.fq,P.ee,P.dN,P.eJ])
s(J.dp,[J.i2,J.bD,J.bu])
t(J.lb,J.bs)
s(J.bT,[J.dm,J.dl])
t(P.hp,P.eu)
s(P.hp,[H.e5,W.jL,W.jK,P.h5])
t(H.R,H.e5)
s(P.i,[H.r,H.cx,H.jD,P.hf])
t(H.fY,H.cx)
s(P.hg,[H.dv,H.jE])
t(H.fL,H.fK)
s(P.bo,[H.hY,H.hk,H.jf,H.fC,H.il,P.cE,P.aG,P.jh,P.jd,P.dU,P.fJ,P.fR])
s(H.cp,[H.kV,H.iN,H.hj,H.kM,H.kN,H.kO,P.jH,P.jG,P.jI,P.jJ,P.kp,P.ko,P.jS,P.k_,P.jW,P.jX,P.jY,P.jU,P.jZ,P.jT,P.k2,P.k3,P.k1,P.k0,P.kF,P.kd,P.kc,P.ke,P.hu,P.fW,P.fX,P.jm,P.jj,P.jk,P.jl,P.kr,P.ks,P.ku,P.kt,P.kz,P.ky,P.kA,P.kB,W.hO,W.hQ,W.ik,W.iJ,W.jQ,P.kk,P.kl,P.kH,P.h6,P.h7,P.kR,P.kS,P.fu,F.fs,E.ig,E.ih,E.ii,E.iX,D.h2,D.h3,F.jA,F.jz,F.jw,F.jx,O.hD,O.hE,O.hF,O.hG,O.hH,O.hI,O.hJ,O.hK,T.iW,V.iA,V.iz,B.kT,B.kU,B.i3,B.ib,B.ia,B.ic,B.iu,B.iv,B.iw,B.ix,B.iP,B.iQ])
s(H.iN,[H.iH,H.cm])
t(P.ht,P.ac)
t(H.F,P.ht)
t(H.bV,H.r)
t(H.dz,H.bw)
s(H.dz,[H.cR,H.cT])
t(H.cS,H.cR)
t(H.cD,H.cS)
t(H.cU,H.cT)
t(H.dA,H.cU)
s(H.dA,[H.hT,H.hU,H.hV,H.hW,H.hX,H.dB,H.bX])
t(P.kn,P.hf)
t(P.jF,P.jM)
t(P.kb,P.kx)
t(P.k8,P.kf)
t(P.eX,P.hv)
t(P.e6,P.eX)
s(P.fF,[P.fx,P.fZ])
t(P.fM,P.iK)
s(P.fM,[P.fy,P.jq,P.jp])
t(P.jo,P.fZ)
s(P.ah,[P.J,P.n])
s(P.aG,[P.bz,P.hd])
t(P.jO,P.c7)
s(W.h,[W.D,W.h4,W.cB,W.aT,W.cV,W.aW,W.ax,W.cY,W.jB,W.cQ,P.fv,P.bI])
s(W.D,[W.a_,W.bl])
s(W.a_,[W.m,P.l])
s(W.m,[W.fm,W.fn,W.bM,W.h8,W.cu,W.im])
t(W.fN,W.aI)
t(W.cq,W.ef)
s(W.ap,[W.fP,W.fQ])
t(W.ei,W.eh)
t(W.df,W.ei)
t(W.ek,W.ej)
t(W.fU,W.ek)
t(W.at,W.bJ)
t(W.eo,W.en)
t(W.cr,W.eo)
t(W.eq,W.ep)
t(W.ct,W.eq)
t(W.bB,W.j)
s(W.bB,[W.bU,W.aP,W.c0])
t(W.hN,W.ev)
t(W.hP,W.ew)
t(W.ey,W.ex)
t(W.hR,W.ey)
t(W.eB,W.eA)
t(W.dD,W.eB)
t(W.eF,W.eE)
t(W.i4,W.eF)
t(W.ij,W.eG)
t(W.cW,W.cV)
t(W.iC,W.cW)
t(W.eI,W.eH)
t(W.iD,W.eI)
t(W.iI,W.eM)
t(W.eQ,W.eP)
t(W.iR,W.eQ)
t(W.cZ,W.cY)
t(W.iS,W.cZ)
t(W.eT,W.eS)
t(W.j1,W.eT)
t(W.bE,W.aP)
t(W.f_,W.eZ)
t(W.jN,W.f_)
t(W.eg,W.dg)
t(W.f1,W.f0)
t(W.k4,W.f1)
t(W.f3,W.f2)
t(W.ez,W.f3)
t(W.f5,W.f4)
t(W.kh,W.f5)
t(W.f7,W.f6)
t(W.km,W.f7)
t(W.jP,P.dV)
t(P.kj,P.ki)
t(P.ae,P.ka)
t(P.es,P.er)
t(P.hm,P.es)
t(P.eD,P.eC)
t(P.hZ,P.eD)
t(P.eO,P.eN)
t(P.iL,P.eO)
t(P.eV,P.eU)
t(P.j3,P.eV)
t(P.ft,P.ee)
t(P.i_,P.bI)
t(P.eK,P.eJ)
t(P.iF,P.eK)
s(K.dk,[K.b7,L.e3])
s(D.a5,[E.iG,D.bq,D.br,D.B,X.b3,X.i7])
s(E.fz,[Z.bL,A.dP,T.dX])
s(O.b1,[X.dq,D.dr,U.cs])
s(X.i7,[X.du,X.b6,X.e2])
s(D.fD,[U.fI,U.ad,F.lh])
s(U.ad,[U.dc,U.dO])
t(A.hw,A.dP)
s(A.e4,[A.bC,A.j8,A.j9,A.ja,A.j6,A.Y,A.j7,A.G,A.cJ,A.jc,A.cM,A.ao,A.a7,A.c2])
t(O.cy,O.dW)
s(O.cz,[O.hx,O.hy,O.aM])
s(O.aM,[O.hB,O.hC])
t(T.dY,T.dX)
s(T.dY,[T.iT,T.iU])
t(X.ha,X.iM)
u(H.e5,H.jg)
u(H.cR,P.w)
u(H.cS,H.di)
u(H.cT,P.w)
u(H.cU,H.di)
u(P.eu,P.w)
u(P.eX,P.kq)
u(W.ef,W.fO)
u(W.eh,P.w)
u(W.ei,W.L)
u(W.ej,P.w)
u(W.ek,W.L)
u(W.en,P.w)
u(W.eo,W.L)
u(W.ep,P.w)
u(W.eq,W.L)
u(W.ev,P.ac)
u(W.ew,P.ac)
u(W.ex,P.w)
u(W.ey,W.L)
u(W.eA,P.w)
u(W.eB,W.L)
u(W.eE,P.w)
u(W.eF,W.L)
u(W.eG,P.ac)
u(W.cV,P.w)
u(W.cW,W.L)
u(W.eH,P.w)
u(W.eI,W.L)
u(W.eM,P.ac)
u(W.eP,P.w)
u(W.eQ,W.L)
u(W.cY,P.w)
u(W.cZ,W.L)
u(W.eS,P.w)
u(W.eT,W.L)
u(W.eZ,P.w)
u(W.f_,W.L)
u(W.f0,P.w)
u(W.f1,W.L)
u(W.f2,P.w)
u(W.f3,W.L)
u(W.f4,P.w)
u(W.f5,W.L)
u(W.f6,P.w)
u(W.f7,W.L)
u(P.er,P.w)
u(P.es,W.L)
u(P.eC,P.w)
u(P.eD,W.L)
u(P.eN,P.w)
u(P.eO,W.L)
u(P.eU,P.w)
u(P.eV,W.L)
u(P.ee,P.ac)
u(P.eJ,P.w)
u(P.eK,W.L)})()
var v={mangledGlobalNames:{n:"int",J:"double",ah:"num",o:"String",az:"bool",an:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:-1,args:[D.a5]},{func:1,ret:-1,opt:[D.a5]},{func:1,ret:-1,args:[W.aP]},{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.j]},{func:1,ret:P.an,args:[,,]},{func:1,ret:-1,args:[P.n,[P.i,E.ak]]},{func:1,ret:-1},{func:1,ret:-1,args:[W.c0]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.an,args:[,]},{func:1,ret:-1,args:[P.n,[P.i,X.am]]},{func:1,ret:-1,args:[W.bU]},{func:1,ret:-1,args:[P.n,[P.i,D.ab]]},{func:1,ret:P.J},{func:1,ret:-1,args:[P.n,[P.i,U.ad]]},{func:1,ret:-1,args:[P.n,[P.i,V.b5]]},{func:1,ret:P.an,args:[,],opt:[P.bA]},{func:1,ret:[P.aZ,,],args:[,]},{func:1,ret:P.c1,args:[,,]},{func:1,ret:P.az,args:[[P.i,X.am]]},{func:1,ret:-1,args:[W.bE]},{func:1,ret:P.az,args:[[P.i,D.ab]]},{func:1,ret:V.t,args:[V.t,V.t]},{func:1,ret:P.n,args:[,,]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.j=W.bM.prototype
C.T=J.a.prototype
C.b=J.bs.prototype
C.i=J.dl.prototype
C.c=J.dm.prototype
C.l=J.dn.prototype
C.d=J.bT.prototype
C.a=J.bt.prototype
C.U=J.bu.prototype
C.Z=H.bX.prototype
C.A=J.i2.prototype
C.a2=P.dN.prototype
C.p=J.bD.prototype
C.B=W.bE.prototype
C.C=W.cQ.prototype
C.D=new E.bK("Browser.chrome")
C.q=new E.bK("Browser.firefox")
C.r=new E.bK("Browser.edge")
C.E=new E.bK("Browser.other")
C.a4=new P.fy()
C.F=new P.fx()
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

C.M=new P.i1()
C.f=new P.jo()
C.N=new P.jq()
C.O=new P.k5()
C.e=new P.kb()
C.k=new P.as(0)
C.P=new P.as(25e4)
C.Q=new P.as(5e6)
C.R=new P.as(7e4)
C.S=new P.as(75e4)
C.v=H.b(u([127,2047,65535,1114111]),[P.n])
C.m=H.b(u([0,0,32776,33792,1,10240,0,0]),[P.n])
C.n=H.b(u([0,0,65490,45055,65535,34815,65534,18431]),[P.n])
C.o=H.b(u([0,0,26624,1023,65534,2047,65534,2047]),[P.n])
C.W=H.b(u([0,0,32722,12287,65534,34815,65534,18431]),[P.n])
C.w=H.b(u([0,0,65498,45055,65535,34815,65534,18431]),[P.n])
C.h=H.b(u([0,0,24576,1023,65534,34815,65534,18431]),[P.n])
C.x=H.b(u([0,0,32754,11263,65534,34815,65534,18431]),[P.n])
C.X=H.b(u([0,0,32722,12287,65535,34815,65534,18431]),[P.n])
C.y=H.b(u([0,0,65490,12287,65535,34815,65534,18431]),[P.n])
C.V=H.b(u([]),[P.o])
C.Y=new H.fL(0,{},C.V,[P.o,P.o])
C.a_=new E.bY("OperatingSystem.windows")
C.z=new E.bY("OperatingSystem.mac")
C.a0=new E.bY("OperatingSystem.linux")
C.a1=new E.bY("OperatingSystem.other")
C.a3=new P.c6(null,2)})();(function staticFields(){$.aH=0
$.cn=null
$.lQ=null
$.mV=null
$.mN=null
$.mZ=null
$.kI=null
$.kP=null
$.lA=null
$.ca=null
$.d0=null
$.d1=null
$.lv=!1
$.N=C.e
$.af=[]
$.h_=null
$.lZ=null
$.m2=null
$.m6=null
$.aS=null
$.mc=null
$.mm=null
$.mr=null
$.mq=null
$.jr=null
$.js=null
$.mo=null
$.jt=null
$.mp=null
$.m4=null
$.fA=H.b([101,102,103,104,105,106,115,109,110,111,112,113,1,114,200,201,202,203,204,205],[P.n])})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"q8","n4",function(){return H.mT("_$dart_dartClosure")})
u($,"qq","lM",function(){return H.mT("_$dart_js")})
u($,"qr","n9",function(){return H.aY(H.j5({
toString:function(){return"$receiver$"}}))})
u($,"qs","na",function(){return H.aY(H.j5({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"qt","nb",function(){return H.aY(H.j5(null))})
u($,"qu","nc",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qx","nf",function(){return H.aY(H.j5(void 0))})
u($,"qy","ng",function(){return H.aY(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"qw","ne",function(){return H.aY(H.mh(null))})
u($,"qv","nd",function(){return H.aY(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"qA","ni",function(){return H.aY(H.mh(void 0))})
u($,"qz","nh",function(){return H.aY(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"qN","lN",function(){return P.ou()})
u($,"qB","nj",function(){return P.oq()})
u($,"qO","nm",function(){return H.nY(H.c9(H.b([-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-2,-1,-2,-2,-2,-2,-2,62,-2,62,-2,63,52,53,54,55,56,57,58,59,60,61,-2,-2,-2,-1,-2,-2,-2,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-2,-2,-2,-2,63,-2,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-2,-2,-2,-2,-2],[P.n])))})
u($,"qQ","nn",function(){return P.od("^[\\-\\.0-9A-Z_a-z~]*$")})
u($,"qR","no",function(){return P.oT()})
u($,"q9","n5",function(){return H.b([B.aR(5,2),B.aR(2,5),B.aR(-5,2),B.aR(-2,5),B.aR(5,-2),B.aR(2,-5),B.aR(-5,-2),B.aR(-2,-5)],[B.av])})
u($,"qb","n6",function(){return B.aR(-0.211324865405187,-0.211324865405187)})
u($,"qa","lI",function(){return B.aR(0.366025403784439,0.366025403784439)})
u($,"qH","nl",function(){return Z.ay(0)})
u($,"qJ","Z",function(){return Z.ay(1)})
u($,"qI","a8",function(){return Z.ay(2)})
u($,"qD","bk",function(){return Z.ay(4)})
u($,"qK","a2",function(){return Z.ay(8)})
u($,"qL","bG",function(){return Z.ay(16)})
u($,"qE","d3",function(){return Z.ay(32)})
u($,"qF","d4",function(){return Z.ay(64)})
u($,"qG","nk",function(){return Z.ay(96)})
u($,"qM","cj",function(){return Z.ay(128)})
u($,"qC","bj",function(){return Z.ay(256)})
u($,"pT","n3",function(){return new V.h0(1e-9)})
u($,"pS","x",function(){return $.n3()})
u($,"qg","bf",function(){return V.al(0)})
u($,"qd","lJ",function(){return V.al(511)})
u($,"qj","aD",function(){return V.al(1)})
u($,"qh","lK",function(){return V.al(2)})
u($,"qi","aC",function(){return V.al(4)})
u($,"qm","aE",function(){return V.al(8)})
u($,"qk","lL",function(){return V.al(16)})
u($,"ql","bg",function(){return V.al(32)})
u($,"qp","bi",function(){return V.al(64)})
u($,"qn","n8",function(){return V.al(128)})
u($,"qo","bh",function(){return V.al(256)})
u($,"qf","kY",function(){return V.al(146)})
u($,"qe","n7",function(){return V.al(365)})
u($,"q5","lG",function(){return V.id(-0.25,-1.5,-0.25,0.5,1.9,0.5)})
u($,"q7","fj",function(){return V.lo()})
u($,"pZ","fe",function(){var t=$.mo
return t==null?$.mo=V.mn(0,-1,0):t})
u($,"q4","lF",function(){var t=$.mq
return t==null?$.mq=V.mn(1,0,0):t})
u($,"q6","lH",function(){return V.ms()})
u($,"q1","kX",function(){return V.lp()})
u($,"pW","lE",function(){return V.mt()})
u($,"q2","fh",function(){return V.bx(-0.5,0.5,0.5)})
u($,"q3","fi",function(){return V.bx(0.5,0.5,0.5)})
u($,"q_","ff",function(){return V.bx(-0.5,-0.5,0.5)})
u($,"q0","fg",function(){return V.bx(0.5,-0.5,0.5)})
u($,"pX","fc",function(){return V.bx(-0.5,0.5,-0.5)})
u($,"pY","fd",function(){return V.bx(0.5,0.5,-0.5)})
u($,"pU","fa",function(){return V.bx(-0.5,-0.5,-0.5)})
u($,"pV","fb",function(){return V.bx(0.5,-0.5,-0.5)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({AnimationEffectReadOnly:J.a,AnimationEffectTiming:J.a,AnimationEffectTimingReadOnly:J.a,AnimationTimeline:J.a,AnimationWorkletGlobalScope:J.a,AuthenticatorAssertionResponse:J.a,AuthenticatorAttestationResponse:J.a,AuthenticatorResponse:J.a,BackgroundFetchFetch:J.a,BackgroundFetchManager:J.a,BackgroundFetchSettledFetch:J.a,BarProp:J.a,BarcodeDetector:J.a,BluetoothRemoteGATTDescriptor:J.a,Body:J.a,BudgetState:J.a,CacheStorage:J.a,CanvasGradient:J.a,CanvasPattern:J.a,CanvasRenderingContext2D:J.a,Client:J.a,Clients:J.a,CookieStore:J.a,Coordinates:J.a,Credential:J.a,CredentialUserData:J.a,CredentialsContainer:J.a,Crypto:J.a,CryptoKey:J.a,CSS:J.a,CSSVariableReferenceValue:J.a,CustomElementRegistry:J.a,DataTransfer:J.a,DataTransferItem:J.a,DeprecatedStorageInfo:J.a,DeprecatedStorageQuota:J.a,DeprecationReport:J.a,DetectedBarcode:J.a,DetectedFace:J.a,DetectedText:J.a,DeviceAcceleration:J.a,DeviceRotationRate:J.a,DirectoryEntry:J.a,DirectoryReader:J.a,DocumentOrShadowRoot:J.a,DocumentTimeline:J.a,DOMError:J.a,DOMImplementation:J.a,Iterator:J.a,DOMMatrix:J.a,DOMMatrixReadOnly:J.a,DOMParser:J.a,DOMPoint:J.a,DOMPointReadOnly:J.a,DOMQuad:J.a,DOMStringMap:J.a,Entry:J.a,External:J.a,FaceDetector:J.a,FederatedCredential:J.a,FileEntry:J.a,DOMFileSystem:J.a,FontFace:J.a,FontFaceSource:J.a,FormData:J.a,GamepadButton:J.a,GamepadPose:J.a,Geolocation:J.a,Position:J.a,Headers:J.a,HTMLHyperlinkElementUtils:J.a,IdleDeadline:J.a,ImageBitmap:J.a,ImageBitmapRenderingContext:J.a,ImageCapture:J.a,InputDeviceCapabilities:J.a,IntersectionObserver:J.a,IntersectionObserverEntry:J.a,InterventionReport:J.a,KeyframeEffect:J.a,KeyframeEffectReadOnly:J.a,MediaCapabilities:J.a,MediaCapabilitiesInfo:J.a,MediaDeviceInfo:J.a,MediaError:J.a,MediaKeyStatusMap:J.a,MediaKeySystemAccess:J.a,MediaKeys:J.a,MediaKeysPolicy:J.a,MediaMetadata:J.a,MediaSession:J.a,MediaSettingsRange:J.a,MemoryInfo:J.a,MessageChannel:J.a,Metadata:J.a,MutationObserver:J.a,WebKitMutationObserver:J.a,MutationRecord:J.a,NavigationPreloadManager:J.a,Navigator:J.a,NavigatorAutomationInformation:J.a,NavigatorConcurrentHardware:J.a,NavigatorCookies:J.a,NavigatorUserMediaError:J.a,NodeFilter:J.a,NodeIterator:J.a,NonDocumentTypeChildNode:J.a,NonElementParentNode:J.a,NoncedElement:J.a,OffscreenCanvasRenderingContext2D:J.a,OverconstrainedError:J.a,PaintRenderingContext2D:J.a,PaintSize:J.a,PaintWorkletGlobalScope:J.a,PasswordCredential:J.a,Path2D:J.a,PaymentAddress:J.a,PaymentInstruments:J.a,PaymentManager:J.a,PaymentResponse:J.a,PerformanceEntry:J.a,PerformanceLongTaskTiming:J.a,PerformanceMark:J.a,PerformanceMeasure:J.a,PerformanceNavigation:J.a,PerformanceNavigationTiming:J.a,PerformanceObserver:J.a,PerformanceObserverEntryList:J.a,PerformancePaintTiming:J.a,PerformanceResourceTiming:J.a,PerformanceServerTiming:J.a,PerformanceTiming:J.a,Permissions:J.a,PhotoCapabilities:J.a,PositionError:J.a,Presentation:J.a,PresentationReceiver:J.a,PublicKeyCredential:J.a,PushManager:J.a,PushMessageData:J.a,PushSubscription:J.a,PushSubscriptionOptions:J.a,Range:J.a,RelatedApplication:J.a,ReportBody:J.a,ReportingObserver:J.a,ResizeObserver:J.a,ResizeObserverEntry:J.a,RTCCertificate:J.a,RTCIceCandidate:J.a,mozRTCIceCandidate:J.a,RTCLegacyStatsReport:J.a,RTCRtpContributingSource:J.a,RTCRtpReceiver:J.a,RTCRtpSender:J.a,RTCSessionDescription:J.a,mozRTCSessionDescription:J.a,RTCStatsResponse:J.a,Screen:J.a,ScrollState:J.a,ScrollTimeline:J.a,Selection:J.a,SharedArrayBuffer:J.a,SpeechRecognitionAlternative:J.a,SpeechSynthesisVoice:J.a,StaticRange:J.a,StorageManager:J.a,StyleMedia:J.a,StylePropertyMap:J.a,StylePropertyMapReadonly:J.a,SyncManager:J.a,TaskAttributionTiming:J.a,TextDetector:J.a,TextMetrics:J.a,TrackDefault:J.a,TreeWalker:J.a,TrustedHTML:J.a,TrustedScriptURL:J.a,TrustedURL:J.a,UnderlyingSourceBase:J.a,URLSearchParams:J.a,VRCoordinateSystem:J.a,VRDisplayCapabilities:J.a,VREyeParameters:J.a,VRFrameData:J.a,VRFrameOfReference:J.a,VRPose:J.a,VRStageBounds:J.a,VRStageBoundsPoint:J.a,VRStageParameters:J.a,ValidityState:J.a,VideoPlaybackQuality:J.a,VideoTrack:J.a,VTTRegion:J.a,WindowClient:J.a,WorkletAnimation:J.a,WorkletGlobalScope:J.a,XPathEvaluator:J.a,XPathExpression:J.a,XPathNSResolver:J.a,XPathResult:J.a,XMLSerializer:J.a,XSLTProcessor:J.a,Bluetooth:J.a,BluetoothCharacteristicProperties:J.a,BluetoothRemoteGATTServer:J.a,BluetoothRemoteGATTService:J.a,BluetoothUUID:J.a,BudgetService:J.a,Cache:J.a,DOMFileSystemSync:J.a,DirectoryEntrySync:J.a,DirectoryReaderSync:J.a,EntrySync:J.a,FileEntrySync:J.a,FileReaderSync:J.a,FileWriterSync:J.a,HTMLAllCollection:J.a,Mojo:J.a,MojoHandle:J.a,MojoWatcher:J.a,NFC:J.a,PagePopupController:J.a,Report:J.a,Request:J.a,Response:J.a,SubtleCrypto:J.a,USBAlternateInterface:J.a,USBConfiguration:J.a,USBDevice:J.a,USBEndpoint:J.a,USBInTransferResult:J.a,USBInterface:J.a,USBIsochronousInTransferPacket:J.a,USBIsochronousInTransferResult:J.a,USBIsochronousOutTransferPacket:J.a,USBIsochronousOutTransferResult:J.a,USBOutTransferResult:J.a,WorkerLocation:J.a,WorkerNavigator:J.a,Worklet:J.a,IDBCursor:J.a,IDBCursorWithValue:J.a,IDBFactory:J.a,IDBIndex:J.a,IDBKeyRange:J.a,IDBObjectStore:J.a,IDBObservation:J.a,IDBObserver:J.a,IDBObserverChanges:J.a,SVGAngle:J.a,SVGAnimatedAngle:J.a,SVGAnimatedBoolean:J.a,SVGAnimatedEnumeration:J.a,SVGAnimatedInteger:J.a,SVGAnimatedLength:J.a,SVGAnimatedLengthList:J.a,SVGAnimatedNumber:J.a,SVGAnimatedNumberList:J.a,SVGAnimatedPreserveAspectRatio:J.a,SVGAnimatedRect:J.a,SVGAnimatedString:J.a,SVGAnimatedTransformList:J.a,SVGMatrix:J.a,SVGPoint:J.a,SVGPreserveAspectRatio:J.a,SVGRect:J.a,SVGUnitTypes:J.a,AudioListener:J.a,AudioParam:J.a,AudioTrack:J.a,AudioWorkletGlobalScope:J.a,AudioWorkletProcessor:J.a,PeriodicWave:J.a,WebGLActiveInfo:J.a,ANGLEInstancedArrays:J.a,ANGLE_instanced_arrays:J.a,WebGLBuffer:J.a,WebGLCanvas:J.a,WebGLColorBufferFloat:J.a,WebGLCompressedTextureASTC:J.a,WebGLCompressedTextureATC:J.a,WEBGL_compressed_texture_atc:J.a,WebGLCompressedTextureETC1:J.a,WEBGL_compressed_texture_etc1:J.a,WebGLCompressedTextureETC:J.a,WebGLCompressedTexturePVRTC:J.a,WEBGL_compressed_texture_pvrtc:J.a,WebGLCompressedTextureS3TC:J.a,WEBGL_compressed_texture_s3tc:J.a,WebGLCompressedTextureS3TCsRGB:J.a,WebGLDebugRendererInfo:J.a,WEBGL_debug_renderer_info:J.a,WebGLDebugShaders:J.a,WEBGL_debug_shaders:J.a,WebGLDepthTexture:J.a,WEBGL_depth_texture:J.a,WebGLDrawBuffers:J.a,WEBGL_draw_buffers:J.a,EXTsRGB:J.a,EXT_sRGB:J.a,EXTBlendMinMax:J.a,EXT_blend_minmax:J.a,EXTColorBufferFloat:J.a,EXTColorBufferHalfFloat:J.a,EXTDisjointTimerQuery:J.a,EXTDisjointTimerQueryWebGL2:J.a,EXTFragDepth:J.a,EXT_frag_depth:J.a,EXTShaderTextureLOD:J.a,EXT_shader_texture_lod:J.a,EXTTextureFilterAnisotropic:J.a,EXT_texture_filter_anisotropic:J.a,WebGLFramebuffer:J.a,WebGLGetBufferSubDataAsync:J.a,WebGLLoseContext:J.a,WebGLExtensionLoseContext:J.a,WEBGL_lose_context:J.a,OESElementIndexUint:J.a,OES_element_index_uint:J.a,OESStandardDerivatives:J.a,OES_standard_derivatives:J.a,OESTextureFloat:J.a,OES_texture_float:J.a,OESTextureFloatLinear:J.a,OES_texture_float_linear:J.a,OESTextureHalfFloat:J.a,OES_texture_half_float:J.a,OESTextureHalfFloatLinear:J.a,OES_texture_half_float_linear:J.a,OESVertexArrayObject:J.a,OES_vertex_array_object:J.a,WebGLProgram:J.a,WebGLQuery:J.a,WebGLRenderbuffer:J.a,WebGLRenderingContext:J.a,WebGLSampler:J.a,WebGLShader:J.a,WebGLShaderPrecisionFormat:J.a,WebGLSync:J.a,WebGLTexture:J.a,WebGLTimerQueryEXT:J.a,WebGLTransformFeedback:J.a,WebGLUniformLocation:J.a,WebGLVertexArrayObject:J.a,WebGLVertexArrayObjectOES:J.a,WebGL:J.a,WebGL2RenderingContextBase:J.a,Database:J.a,SQLError:J.a,SQLResultSet:J.a,SQLTransaction:J.a,ArrayBuffer:H.cC,DataView:H.bw,ArrayBufferView:H.bw,Float32Array:H.cD,Float64Array:H.cD,Int16Array:H.hT,Int32Array:H.hU,Int8Array:H.hV,Uint16Array:H.hW,Uint32Array:H.hX,Uint8ClampedArray:H.dB,CanvasPixelArray:H.dB,Uint8Array:H.bX,HTMLAudioElement:W.m,HTMLBRElement:W.m,HTMLBaseElement:W.m,HTMLBodyElement:W.m,HTMLButtonElement:W.m,HTMLContentElement:W.m,HTMLDListElement:W.m,HTMLDataElement:W.m,HTMLDataListElement:W.m,HTMLDetailsElement:W.m,HTMLDialogElement:W.m,HTMLDivElement:W.m,HTMLEmbedElement:W.m,HTMLFieldSetElement:W.m,HTMLHRElement:W.m,HTMLHeadElement:W.m,HTMLHeadingElement:W.m,HTMLHtmlElement:W.m,HTMLIFrameElement:W.m,HTMLInputElement:W.m,HTMLLIElement:W.m,HTMLLabelElement:W.m,HTMLLegendElement:W.m,HTMLLinkElement:W.m,HTMLMapElement:W.m,HTMLMediaElement:W.m,HTMLMenuElement:W.m,HTMLMetaElement:W.m,HTMLMeterElement:W.m,HTMLModElement:W.m,HTMLOListElement:W.m,HTMLObjectElement:W.m,HTMLOptGroupElement:W.m,HTMLOptionElement:W.m,HTMLOutputElement:W.m,HTMLParagraphElement:W.m,HTMLParamElement:W.m,HTMLPictureElement:W.m,HTMLPreElement:W.m,HTMLProgressElement:W.m,HTMLQuoteElement:W.m,HTMLScriptElement:W.m,HTMLShadowElement:W.m,HTMLSlotElement:W.m,HTMLSourceElement:W.m,HTMLSpanElement:W.m,HTMLStyleElement:W.m,HTMLTableCaptionElement:W.m,HTMLTableCellElement:W.m,HTMLTableDataCellElement:W.m,HTMLTableHeaderCellElement:W.m,HTMLTableColElement:W.m,HTMLTableElement:W.m,HTMLTableRowElement:W.m,HTMLTableSectionElement:W.m,HTMLTemplateElement:W.m,HTMLTextAreaElement:W.m,HTMLTimeElement:W.m,HTMLTitleElement:W.m,HTMLTrackElement:W.m,HTMLUListElement:W.m,HTMLUnknownElement:W.m,HTMLVideoElement:W.m,HTMLDirectoryElement:W.m,HTMLFontElement:W.m,HTMLFrameElement:W.m,HTMLFrameSetElement:W.m,HTMLMarqueeElement:W.m,HTMLElement:W.m,AccessibleNodeList:W.fk,HTMLAnchorElement:W.fm,HTMLAreaElement:W.fn,Blob:W.bJ,HTMLCanvasElement:W.bM,CDATASection:W.bl,CharacterData:W.bl,Comment:W.bl,ProcessingInstruction:W.bl,Text:W.bl,CSSPerspective:W.fN,CSSCharsetRule:W.I,CSSConditionRule:W.I,CSSFontFaceRule:W.I,CSSGroupingRule:W.I,CSSImportRule:W.I,CSSKeyframeRule:W.I,MozCSSKeyframeRule:W.I,WebKitCSSKeyframeRule:W.I,CSSKeyframesRule:W.I,MozCSSKeyframesRule:W.I,WebKitCSSKeyframesRule:W.I,CSSMediaRule:W.I,CSSNamespaceRule:W.I,CSSPageRule:W.I,CSSRule:W.I,CSSStyleRule:W.I,CSSSupportsRule:W.I,CSSViewportRule:W.I,CSSStyleDeclaration:W.cq,MSStyleCSSProperties:W.cq,CSS2Properties:W.cq,CSSImageValue:W.ap,CSSKeywordValue:W.ap,CSSNumericValue:W.ap,CSSPositionValue:W.ap,CSSResourceValue:W.ap,CSSUnitValue:W.ap,CSSURLImageValue:W.ap,CSSStyleValue:W.ap,CSSMatrixComponent:W.aI,CSSRotation:W.aI,CSSScale:W.aI,CSSSkew:W.aI,CSSTranslation:W.aI,CSSTransformComponent:W.aI,CSSTransformValue:W.fP,CSSUnparsedValue:W.fQ,DataTransferItemList:W.fS,DOMException:W.fT,ClientRectList:W.df,DOMRectList:W.df,DOMRectReadOnly:W.dg,DOMStringList:W.fU,DOMTokenList:W.fV,Element:W.a_,AbortPaymentEvent:W.j,AnimationEvent:W.j,AnimationPlaybackEvent:W.j,ApplicationCacheErrorEvent:W.j,BackgroundFetchClickEvent:W.j,BackgroundFetchEvent:W.j,BackgroundFetchFailEvent:W.j,BackgroundFetchedEvent:W.j,BeforeInstallPromptEvent:W.j,BeforeUnloadEvent:W.j,BlobEvent:W.j,CanMakePaymentEvent:W.j,ClipboardEvent:W.j,CloseEvent:W.j,CustomEvent:W.j,DeviceMotionEvent:W.j,DeviceOrientationEvent:W.j,ErrorEvent:W.j,ExtendableEvent:W.j,ExtendableMessageEvent:W.j,FetchEvent:W.j,FontFaceSetLoadEvent:W.j,ForeignFetchEvent:W.j,GamepadEvent:W.j,HashChangeEvent:W.j,InstallEvent:W.j,MediaEncryptedEvent:W.j,MediaKeyMessageEvent:W.j,MediaQueryListEvent:W.j,MediaStreamEvent:W.j,MediaStreamTrackEvent:W.j,MessageEvent:W.j,MIDIConnectionEvent:W.j,MIDIMessageEvent:W.j,MutationEvent:W.j,NotificationEvent:W.j,PageTransitionEvent:W.j,PaymentRequestEvent:W.j,PaymentRequestUpdateEvent:W.j,PopStateEvent:W.j,PresentationConnectionAvailableEvent:W.j,PresentationConnectionCloseEvent:W.j,ProgressEvent:W.j,PromiseRejectionEvent:W.j,PushEvent:W.j,RTCDataChannelEvent:W.j,RTCDTMFToneChangeEvent:W.j,RTCPeerConnectionIceEvent:W.j,RTCTrackEvent:W.j,SecurityPolicyViolationEvent:W.j,SensorErrorEvent:W.j,SpeechRecognitionError:W.j,SpeechRecognitionEvent:W.j,SpeechSynthesisEvent:W.j,StorageEvent:W.j,SyncEvent:W.j,TrackEvent:W.j,TransitionEvent:W.j,WebKitTransitionEvent:W.j,VRDeviceEvent:W.j,VRDisplayEvent:W.j,VRSessionEvent:W.j,MojoInterfaceRequestEvent:W.j,ResourceProgressEvent:W.j,USBConnectionEvent:W.j,IDBVersionChangeEvent:W.j,AudioProcessingEvent:W.j,OfflineAudioCompletionEvent:W.j,WebGLContextEvent:W.j,Event:W.j,InputEvent:W.j,AbsoluteOrientationSensor:W.h,Accelerometer:W.h,AccessibleNode:W.h,AmbientLightSensor:W.h,Animation:W.h,ApplicationCache:W.h,DOMApplicationCache:W.h,OfflineResourceList:W.h,BackgroundFetchRegistration:W.h,BatteryManager:W.h,BroadcastChannel:W.h,CanvasCaptureMediaStreamTrack:W.h,DedicatedWorkerGlobalScope:W.h,EventSource:W.h,FileReader:W.h,FontFaceSet:W.h,Gyroscope:W.h,XMLHttpRequest:W.h,XMLHttpRequestEventTarget:W.h,XMLHttpRequestUpload:W.h,LinearAccelerationSensor:W.h,Magnetometer:W.h,MediaDevices:W.h,MediaKeySession:W.h,MediaQueryList:W.h,MediaRecorder:W.h,MediaSource:W.h,MediaStream:W.h,MediaStreamTrack:W.h,MIDIAccess:W.h,MIDIInput:W.h,MIDIOutput:W.h,MIDIPort:W.h,NetworkInformation:W.h,Notification:W.h,OffscreenCanvas:W.h,OrientationSensor:W.h,PaymentRequest:W.h,Performance:W.h,PermissionStatus:W.h,PresentationAvailability:W.h,PresentationConnection:W.h,PresentationConnectionList:W.h,PresentationRequest:W.h,RelativeOrientationSensor:W.h,RemotePlayback:W.h,RTCDataChannel:W.h,DataChannel:W.h,RTCDTMFSender:W.h,RTCPeerConnection:W.h,webkitRTCPeerConnection:W.h,mozRTCPeerConnection:W.h,ScreenOrientation:W.h,Sensor:W.h,ServiceWorker:W.h,ServiceWorkerContainer:W.h,ServiceWorkerGlobalScope:W.h,ServiceWorkerRegistration:W.h,SharedWorker:W.h,SharedWorkerGlobalScope:W.h,SpeechRecognition:W.h,SpeechSynthesis:W.h,SpeechSynthesisUtterance:W.h,VR:W.h,VRDevice:W.h,VRDisplay:W.h,VRSession:W.h,VisualViewport:W.h,WebSocket:W.h,Worker:W.h,WorkerGlobalScope:W.h,WorkerPerformance:W.h,BluetoothDevice:W.h,BluetoothRemoteGATTCharacteristic:W.h,Clipboard:W.h,MojoInterfaceInterceptor:W.h,USB:W.h,IDBDatabase:W.h,IDBOpenDBRequest:W.h,IDBVersionChangeRequest:W.h,IDBRequest:W.h,IDBTransaction:W.h,AnalyserNode:W.h,RealtimeAnalyserNode:W.h,AudioBufferSourceNode:W.h,AudioDestinationNode:W.h,AudioNode:W.h,AudioScheduledSourceNode:W.h,AudioWorkletNode:W.h,BiquadFilterNode:W.h,ChannelMergerNode:W.h,AudioChannelMerger:W.h,ChannelSplitterNode:W.h,AudioChannelSplitter:W.h,ConstantSourceNode:W.h,ConvolverNode:W.h,DelayNode:W.h,DynamicsCompressorNode:W.h,GainNode:W.h,AudioGainNode:W.h,IIRFilterNode:W.h,MediaElementAudioSourceNode:W.h,MediaStreamAudioDestinationNode:W.h,MediaStreamAudioSourceNode:W.h,OscillatorNode:W.h,Oscillator:W.h,PannerNode:W.h,AudioPannerNode:W.h,webkitAudioPannerNode:W.h,ScriptProcessorNode:W.h,JavaScriptAudioNode:W.h,StereoPannerNode:W.h,WaveShaperNode:W.h,EventTarget:W.h,File:W.at,FileList:W.cr,FileWriter:W.h4,HTMLFormElement:W.h8,Gamepad:W.aJ,History:W.hc,HTMLCollection:W.ct,HTMLFormControlsCollection:W.ct,HTMLOptionsCollection:W.ct,ImageData:W.b2,HTMLImageElement:W.cu,KeyboardEvent:W.bU,Location:W.hr,MediaList:W.hM,MessagePort:W.cB,MIDIInputMap:W.hN,MIDIOutputMap:W.hP,MimeType:W.aO,MimeTypeArray:W.hR,PointerEvent:W.aP,MouseEvent:W.aP,DragEvent:W.aP,Document:W.D,DocumentFragment:W.D,HTMLDocument:W.D,ShadowRoot:W.D,XMLDocument:W.D,Attr:W.D,DocumentType:W.D,Node:W.D,NodeList:W.dD,RadioNodeList:W.dD,Plugin:W.aQ,PluginArray:W.i4,RTCStatsReport:W.ij,HTMLSelectElement:W.im,SourceBuffer:W.aT,SourceBufferList:W.iC,SpeechGrammar:W.aU,SpeechGrammarList:W.iD,SpeechRecognitionResult:W.aV,Storage:W.iI,CSSStyleSheet:W.aw,StyleSheet:W.aw,TextTrack:W.aW,TextTrackCue:W.ax,VTTCue:W.ax,TextTrackCueList:W.iR,TextTrackList:W.iS,TimeRanges:W.iY,Touch:W.aX,TouchEvent:W.c0,TouchList:W.j1,TrackDefaultList:W.j2,CompositionEvent:W.bB,FocusEvent:W.bB,TextEvent:W.bB,UIEvent:W.bB,URL:W.jn,VideoTrackList:W.jB,WheelEvent:W.bE,Window:W.cQ,DOMWindow:W.cQ,CSSRuleList:W.jN,ClientRect:W.eg,DOMRect:W.eg,GamepadList:W.k4,NamedNodeMap:W.ez,MozNamedAttrMap:W.ez,SpeechRecognitionResultList:W.kh,StyleSheetList:W.km,SVGLength:P.b4,SVGLengthList:P.hm,SVGNumber:P.b8,SVGNumberList:P.hZ,SVGPointList:P.i8,SVGStringList:P.iL,SVGAElement:P.l,SVGAnimateElement:P.l,SVGAnimateMotionElement:P.l,SVGAnimateTransformElement:P.l,SVGAnimationElement:P.l,SVGCircleElement:P.l,SVGClipPathElement:P.l,SVGDefsElement:P.l,SVGDescElement:P.l,SVGDiscardElement:P.l,SVGEllipseElement:P.l,SVGFEBlendElement:P.l,SVGFEColorMatrixElement:P.l,SVGFEComponentTransferElement:P.l,SVGFECompositeElement:P.l,SVGFEConvolveMatrixElement:P.l,SVGFEDiffuseLightingElement:P.l,SVGFEDisplacementMapElement:P.l,SVGFEDistantLightElement:P.l,SVGFEFloodElement:P.l,SVGFEFuncAElement:P.l,SVGFEFuncBElement:P.l,SVGFEFuncGElement:P.l,SVGFEFuncRElement:P.l,SVGFEGaussianBlurElement:P.l,SVGFEImageElement:P.l,SVGFEMergeElement:P.l,SVGFEMergeNodeElement:P.l,SVGFEMorphologyElement:P.l,SVGFEOffsetElement:P.l,SVGFEPointLightElement:P.l,SVGFESpecularLightingElement:P.l,SVGFESpotLightElement:P.l,SVGFETileElement:P.l,SVGFETurbulenceElement:P.l,SVGFilterElement:P.l,SVGForeignObjectElement:P.l,SVGGElement:P.l,SVGGeometryElement:P.l,SVGGraphicsElement:P.l,SVGImageElement:P.l,SVGLineElement:P.l,SVGLinearGradientElement:P.l,SVGMarkerElement:P.l,SVGMaskElement:P.l,SVGMetadataElement:P.l,SVGPathElement:P.l,SVGPatternElement:P.l,SVGPolygonElement:P.l,SVGPolylineElement:P.l,SVGRadialGradientElement:P.l,SVGRectElement:P.l,SVGScriptElement:P.l,SVGSetElement:P.l,SVGStopElement:P.l,SVGStyleElement:P.l,SVGElement:P.l,SVGSVGElement:P.l,SVGSwitchElement:P.l,SVGSymbolElement:P.l,SVGTSpanElement:P.l,SVGTextContentElement:P.l,SVGTextElement:P.l,SVGTextPathElement:P.l,SVGTextPositioningElement:P.l,SVGTitleElement:P.l,SVGUseElement:P.l,SVGViewElement:P.l,SVGGradientElement:P.l,SVGComponentTransferFunctionElement:P.l,SVGFEDropShadowElement:P.l,SVGMPathElement:P.l,SVGTransform:P.bb,SVGTransformList:P.j3,AudioBuffer:P.fq,AudioParamMap:P.ft,AudioTrackList:P.fv,AudioContext:P.bI,webkitAudioContext:P.bI,BaseAudioContext:P.bI,OfflineAudioContext:P.i_,WebGL2RenderingContext:P.dN,SQLResultSetRowList:P.iF})
hunkHelpers.setOrUpdateLeafTags({AnimationEffectReadOnly:true,AnimationEffectTiming:true,AnimationEffectTimingReadOnly:true,AnimationTimeline:true,AnimationWorkletGlobalScope:true,AuthenticatorAssertionResponse:true,AuthenticatorAttestationResponse:true,AuthenticatorResponse:true,BackgroundFetchFetch:true,BackgroundFetchManager:true,BackgroundFetchSettledFetch:true,BarProp:true,BarcodeDetector:true,BluetoothRemoteGATTDescriptor:true,Body:true,BudgetState:true,CacheStorage:true,CanvasGradient:true,CanvasPattern:true,CanvasRenderingContext2D:true,Client:true,Clients:true,CookieStore:true,Coordinates:true,Credential:true,CredentialUserData:true,CredentialsContainer:true,Crypto:true,CryptoKey:true,CSS:true,CSSVariableReferenceValue:true,CustomElementRegistry:true,DataTransfer:true,DataTransferItem:true,DeprecatedStorageInfo:true,DeprecatedStorageQuota:true,DeprecationReport:true,DetectedBarcode:true,DetectedFace:true,DetectedText:true,DeviceAcceleration:true,DeviceRotationRate:true,DirectoryEntry:true,DirectoryReader:true,DocumentOrShadowRoot:true,DocumentTimeline:true,DOMError:true,DOMImplementation:true,Iterator:true,DOMMatrix:true,DOMMatrixReadOnly:true,DOMParser:true,DOMPoint:true,DOMPointReadOnly:true,DOMQuad:true,DOMStringMap:true,Entry:true,External:true,FaceDetector:true,FederatedCredential:true,FileEntry:true,DOMFileSystem:true,FontFace:true,FontFaceSource:true,FormData:true,GamepadButton:true,GamepadPose:true,Geolocation:true,Position:true,Headers:true,HTMLHyperlinkElementUtils:true,IdleDeadline:true,ImageBitmap:true,ImageBitmapRenderingContext:true,ImageCapture:true,InputDeviceCapabilities:true,IntersectionObserver:true,IntersectionObserverEntry:true,InterventionReport:true,KeyframeEffect:true,KeyframeEffectReadOnly:true,MediaCapabilities:true,MediaCapabilitiesInfo:true,MediaDeviceInfo:true,MediaError:true,MediaKeyStatusMap:true,MediaKeySystemAccess:true,MediaKeys:true,MediaKeysPolicy:true,MediaMetadata:true,MediaSession:true,MediaSettingsRange:true,MemoryInfo:true,MessageChannel:true,Metadata:true,MutationObserver:true,WebKitMutationObserver:true,MutationRecord:true,NavigationPreloadManager:true,Navigator:true,NavigatorAutomationInformation:true,NavigatorConcurrentHardware:true,NavigatorCookies:true,NavigatorUserMediaError:true,NodeFilter:true,NodeIterator:true,NonDocumentTypeChildNode:true,NonElementParentNode:true,NoncedElement:true,OffscreenCanvasRenderingContext2D:true,OverconstrainedError:true,PaintRenderingContext2D:true,PaintSize:true,PaintWorkletGlobalScope:true,PasswordCredential:true,Path2D:true,PaymentAddress:true,PaymentInstruments:true,PaymentManager:true,PaymentResponse:true,PerformanceEntry:true,PerformanceLongTaskTiming:true,PerformanceMark:true,PerformanceMeasure:true,PerformanceNavigation:true,PerformanceNavigationTiming:true,PerformanceObserver:true,PerformanceObserverEntryList:true,PerformancePaintTiming:true,PerformanceResourceTiming:true,PerformanceServerTiming:true,PerformanceTiming:true,Permissions:true,PhotoCapabilities:true,PositionError:true,Presentation:true,PresentationReceiver:true,PublicKeyCredential:true,PushManager:true,PushMessageData:true,PushSubscription:true,PushSubscriptionOptions:true,Range:true,RelatedApplication:true,ReportBody:true,ReportingObserver:true,ResizeObserver:true,ResizeObserverEntry:true,RTCCertificate:true,RTCIceCandidate:true,mozRTCIceCandidate:true,RTCLegacyStatsReport:true,RTCRtpContributingSource:true,RTCRtpReceiver:true,RTCRtpSender:true,RTCSessionDescription:true,mozRTCSessionDescription:true,RTCStatsResponse:true,Screen:true,ScrollState:true,ScrollTimeline:true,Selection:true,SharedArrayBuffer:true,SpeechRecognitionAlternative:true,SpeechSynthesisVoice:true,StaticRange:true,StorageManager:true,StyleMedia:true,StylePropertyMap:true,StylePropertyMapReadonly:true,SyncManager:true,TaskAttributionTiming:true,TextDetector:true,TextMetrics:true,TrackDefault:true,TreeWalker:true,TrustedHTML:true,TrustedScriptURL:true,TrustedURL:true,UnderlyingSourceBase:true,URLSearchParams:true,VRCoordinateSystem:true,VRDisplayCapabilities:true,VREyeParameters:true,VRFrameData:true,VRFrameOfReference:true,VRPose:true,VRStageBounds:true,VRStageBoundsPoint:true,VRStageParameters:true,ValidityState:true,VideoPlaybackQuality:true,VideoTrack:true,VTTRegion:true,WindowClient:true,WorkletAnimation:true,WorkletGlobalScope:true,XPathEvaluator:true,XPathExpression:true,XPathNSResolver:true,XPathResult:true,XMLSerializer:true,XSLTProcessor:true,Bluetooth:true,BluetoothCharacteristicProperties:true,BluetoothRemoteGATTServer:true,BluetoothRemoteGATTService:true,BluetoothUUID:true,BudgetService:true,Cache:true,DOMFileSystemSync:true,DirectoryEntrySync:true,DirectoryReaderSync:true,EntrySync:true,FileEntrySync:true,FileReaderSync:true,FileWriterSync:true,HTMLAllCollection:true,Mojo:true,MojoHandle:true,MojoWatcher:true,NFC:true,PagePopupController:true,Report:true,Request:true,Response:true,SubtleCrypto:true,USBAlternateInterface:true,USBConfiguration:true,USBDevice:true,USBEndpoint:true,USBInTransferResult:true,USBInterface:true,USBIsochronousInTransferPacket:true,USBIsochronousInTransferResult:true,USBIsochronousOutTransferPacket:true,USBIsochronousOutTransferResult:true,USBOutTransferResult:true,WorkerLocation:true,WorkerNavigator:true,Worklet:true,IDBCursor:true,IDBCursorWithValue:true,IDBFactory:true,IDBIndex:true,IDBKeyRange:true,IDBObjectStore:true,IDBObservation:true,IDBObserver:true,IDBObserverChanges:true,SVGAngle:true,SVGAnimatedAngle:true,SVGAnimatedBoolean:true,SVGAnimatedEnumeration:true,SVGAnimatedInteger:true,SVGAnimatedLength:true,SVGAnimatedLengthList:true,SVGAnimatedNumber:true,SVGAnimatedNumberList:true,SVGAnimatedPreserveAspectRatio:true,SVGAnimatedRect:true,SVGAnimatedString:true,SVGAnimatedTransformList:true,SVGMatrix:true,SVGPoint:true,SVGPreserveAspectRatio:true,SVGRect:true,SVGUnitTypes:true,AudioListener:true,AudioParam:true,AudioTrack:true,AudioWorkletGlobalScope:true,AudioWorkletProcessor:true,PeriodicWave:true,WebGLActiveInfo:true,ANGLEInstancedArrays:true,ANGLE_instanced_arrays:true,WebGLBuffer:true,WebGLCanvas:true,WebGLColorBufferFloat:true,WebGLCompressedTextureASTC:true,WebGLCompressedTextureATC:true,WEBGL_compressed_texture_atc:true,WebGLCompressedTextureETC1:true,WEBGL_compressed_texture_etc1:true,WebGLCompressedTextureETC:true,WebGLCompressedTexturePVRTC:true,WEBGL_compressed_texture_pvrtc:true,WebGLCompressedTextureS3TC:true,WEBGL_compressed_texture_s3tc:true,WebGLCompressedTextureS3TCsRGB:true,WebGLDebugRendererInfo:true,WEBGL_debug_renderer_info:true,WebGLDebugShaders:true,WEBGL_debug_shaders:true,WebGLDepthTexture:true,WEBGL_depth_texture:true,WebGLDrawBuffers:true,WEBGL_draw_buffers:true,EXTsRGB:true,EXT_sRGB:true,EXTBlendMinMax:true,EXT_blend_minmax:true,EXTColorBufferFloat:true,EXTColorBufferHalfFloat:true,EXTDisjointTimerQuery:true,EXTDisjointTimerQueryWebGL2:true,EXTFragDepth:true,EXT_frag_depth:true,EXTShaderTextureLOD:true,EXT_shader_texture_lod:true,EXTTextureFilterAnisotropic:true,EXT_texture_filter_anisotropic:true,WebGLFramebuffer:true,WebGLGetBufferSubDataAsync:true,WebGLLoseContext:true,WebGLExtensionLoseContext:true,WEBGL_lose_context:true,OESElementIndexUint:true,OES_element_index_uint:true,OESStandardDerivatives:true,OES_standard_derivatives:true,OESTextureFloat:true,OES_texture_float:true,OESTextureFloatLinear:true,OES_texture_float_linear:true,OESTextureHalfFloat:true,OES_texture_half_float:true,OESTextureHalfFloatLinear:true,OES_texture_half_float_linear:true,OESVertexArrayObject:true,OES_vertex_array_object:true,WebGLProgram:true,WebGLQuery:true,WebGLRenderbuffer:true,WebGLRenderingContext:true,WebGLSampler:true,WebGLShader:true,WebGLShaderPrecisionFormat:true,WebGLSync:true,WebGLTexture:true,WebGLTimerQueryEXT:true,WebGLTransformFeedback:true,WebGLUniformLocation:true,WebGLVertexArrayObject:true,WebGLVertexArrayObjectOES:true,WebGL:true,WebGL2RenderingContextBase:true,Database:true,SQLError:true,SQLResultSet:true,SQLTransaction:true,ArrayBuffer:true,DataView:true,ArrayBufferView:false,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,AccessibleNodeList:true,HTMLAnchorElement:true,HTMLAreaElement:true,Blob:false,HTMLCanvasElement:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSPerspective:true,CSSCharsetRule:true,CSSConditionRule:true,CSSFontFaceRule:true,CSSGroupingRule:true,CSSImportRule:true,CSSKeyframeRule:true,MozCSSKeyframeRule:true,WebKitCSSKeyframeRule:true,CSSKeyframesRule:true,MozCSSKeyframesRule:true,WebKitCSSKeyframesRule:true,CSSMediaRule:true,CSSNamespaceRule:true,CSSPageRule:true,CSSRule:true,CSSStyleRule:true,CSSSupportsRule:true,CSSViewportRule:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CSSImageValue:true,CSSKeywordValue:true,CSSNumericValue:true,CSSPositionValue:true,CSSResourceValue:true,CSSUnitValue:true,CSSURLImageValue:true,CSSStyleValue:false,CSSMatrixComponent:true,CSSRotation:true,CSSScale:true,CSSSkew:true,CSSTranslation:true,CSSTransformComponent:false,CSSTransformValue:true,CSSUnparsedValue:true,DataTransferItemList:true,DOMException:true,ClientRectList:true,DOMRectList:true,DOMRectReadOnly:false,DOMStringList:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,AbsoluteOrientationSensor:true,Accelerometer:true,AccessibleNode:true,AmbientLightSensor:true,Animation:true,ApplicationCache:true,DOMApplicationCache:true,OfflineResourceList:true,BackgroundFetchRegistration:true,BatteryManager:true,BroadcastChannel:true,CanvasCaptureMediaStreamTrack:true,DedicatedWorkerGlobalScope:true,EventSource:true,FileReader:true,FontFaceSet:true,Gyroscope:true,XMLHttpRequest:true,XMLHttpRequestEventTarget:true,XMLHttpRequestUpload:true,LinearAccelerationSensor:true,Magnetometer:true,MediaDevices:true,MediaKeySession:true,MediaQueryList:true,MediaRecorder:true,MediaSource:true,MediaStream:true,MediaStreamTrack:true,MIDIAccess:true,MIDIInput:true,MIDIOutput:true,MIDIPort:true,NetworkInformation:true,Notification:true,OffscreenCanvas:true,OrientationSensor:true,PaymentRequest:true,Performance:true,PermissionStatus:true,PresentationAvailability:true,PresentationConnection:true,PresentationConnectionList:true,PresentationRequest:true,RelativeOrientationSensor:true,RemotePlayback:true,RTCDataChannel:true,DataChannel:true,RTCDTMFSender:true,RTCPeerConnection:true,webkitRTCPeerConnection:true,mozRTCPeerConnection:true,ScreenOrientation:true,Sensor:true,ServiceWorker:true,ServiceWorkerContainer:true,ServiceWorkerGlobalScope:true,ServiceWorkerRegistration:true,SharedWorker:true,SharedWorkerGlobalScope:true,SpeechRecognition:true,SpeechSynthesis:true,SpeechSynthesisUtterance:true,VR:true,VRDevice:true,VRDisplay:true,VRSession:true,VisualViewport:true,WebSocket:true,Worker:true,WorkerGlobalScope:true,WorkerPerformance:true,BluetoothDevice:true,BluetoothRemoteGATTCharacteristic:true,Clipboard:true,MojoInterfaceInterceptor:true,USB:true,IDBDatabase:true,IDBOpenDBRequest:true,IDBVersionChangeRequest:true,IDBRequest:true,IDBTransaction:true,AnalyserNode:true,RealtimeAnalyserNode:true,AudioBufferSourceNode:true,AudioDestinationNode:true,AudioNode:true,AudioScheduledSourceNode:true,AudioWorkletNode:true,BiquadFilterNode:true,ChannelMergerNode:true,AudioChannelMerger:true,ChannelSplitterNode:true,AudioChannelSplitter:true,ConstantSourceNode:true,ConvolverNode:true,DelayNode:true,DynamicsCompressorNode:true,GainNode:true,AudioGainNode:true,IIRFilterNode:true,MediaElementAudioSourceNode:true,MediaStreamAudioDestinationNode:true,MediaStreamAudioSourceNode:true,OscillatorNode:true,Oscillator:true,PannerNode:true,AudioPannerNode:true,webkitAudioPannerNode:true,ScriptProcessorNode:true,JavaScriptAudioNode:true,StereoPannerNode:true,WaveShaperNode:true,EventTarget:false,File:true,FileList:true,FileWriter:true,HTMLFormElement:true,Gamepad:true,History:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,ImageData:true,HTMLImageElement:true,KeyboardEvent:true,Location:true,MediaList:true,MessagePort:true,MIDIInputMap:true,MIDIOutputMap:true,MimeType:true,MimeTypeArray:true,PointerEvent:true,MouseEvent:false,DragEvent:false,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,Plugin:true,PluginArray:true,RTCStatsReport:true,HTMLSelectElement:true,SourceBuffer:true,SourceBufferList:true,SpeechGrammar:true,SpeechGrammarList:true,SpeechRecognitionResult:true,Storage:true,CSSStyleSheet:true,StyleSheet:true,TextTrack:true,TextTrackCue:true,VTTCue:true,TextTrackCueList:true,TextTrackList:true,TimeRanges:true,Touch:true,TouchEvent:true,TouchList:true,TrackDefaultList:true,CompositionEvent:true,FocusEvent:true,TextEvent:true,UIEvent:false,URL:true,VideoTrackList:true,WheelEvent:true,Window:true,DOMWindow:true,CSSRuleList:true,ClientRect:true,DOMRect:true,GamepadList:true,NamedNodeMap:true,MozNamedAttrMap:true,SpeechRecognitionResultList:true,StyleSheetList:true,SVGLength:true,SVGLengthList:true,SVGNumber:true,SVGNumberList:true,SVGPointList:true,SVGStringList:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGTransform:true,SVGTransformList:true,AudioBuffer:true,AudioParamMap:true,AudioTrackList:true,AudioContext:true,webkitAudioContext:true,BaseAudioContext:false,OfflineAudioContext:true,WebGL2RenderingContext:true,SQLResultSetRowList:true})
H.dz.$nativeSuperclassTag="ArrayBufferView"
H.cR.$nativeSuperclassTag="ArrayBufferView"
H.cS.$nativeSuperclassTag="ArrayBufferView"
H.cD.$nativeSuperclassTag="ArrayBufferView"
H.cT.$nativeSuperclassTag="ArrayBufferView"
H.cU.$nativeSuperclassTag="ArrayBufferView"
H.dA.$nativeSuperclassTag="ArrayBufferView"
W.cV.$nativeSuperclassTag="EventTarget"
W.cW.$nativeSuperclassTag="EventTarget"
W.cY.$nativeSuperclassTag="EventTarget"
W.cZ.$nativeSuperclassTag="EventTarget"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(B.mX,[])
else B.mX([])})})()
//# sourceMappingURL=main.dart.js.map
